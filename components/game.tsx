"use client"

import { useCallback, useEffect, useState } from "react"
import type { DailyWord, GameMode } from "@/lib/game-data"
import type { ScoreResult, ConceptResult, ScoreBreakdown } from "@/lib/scoring"
import { scoreDefinition } from "@/lib/scoring"
import { formatDateKey, saveEntryToHistory, type HistoryEntry } from "@/lib/history"
import { WordDisplay } from "./word-display"
import { loadSettings } from "./settings-panel"
import { DefinitionInput } from "./definition-input"
import { ResultsPanel } from "./results-panel"

interface CachedResult {
  date: string
  score: number
  feedback: string
  concepts: ConceptResult[]
  synonymWarning: boolean
  missedSummary: string | null
  definition: string
  breakdown?: ScoreBreakdown
  altDefinitionUsed?: string
}

function getDateKey(): string {
  const now = new Date()
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-${String(now.getUTCDate()).padStart(2, "0")}`
}


// ── localStorage word history (all games) ─────────────────────────────────
function saveWordToDefinedleHistory(entry: {
  word: string; score: number; date: string; difficulty: string; isPractice: boolean
}) {
  try {
    const raw = localStorage.getItem("definedle-word-history")
    const history = raw ? JSON.parse(raw) : []
    history.push(entry)
    if (history.length > 1000) history.splice(0, history.length - 1000)
    localStorage.setItem("definedle-word-history", JSON.stringify(history))
  } catch {}
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

interface GameProps {
  dailyWord: DailyWord
  difficulty?: GameMode
  isPractice?: boolean
  onNextWord?: () => void
  onStartPractice?: () => void
  onComplete?: () => void
}

export function Game({
  dailyWord,
  difficulty = "easy",
  isPractice = false,
  onNextWord,
  onStartPractice,
  onComplete,
}: GameProps) {
  const DAILY_RESULT_COOKIE = difficulty === "hard" ? "definedle-today-hard" : "definedle-today"


  const [result, setResult] = useState<ScoreResult | null>(null)
  const [isScoring, setIsScoring] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [playerDefinition, setPlayerDefinition] = useState("")
  const [usedHint, setUsedHint] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showBlitzPrompt, setShowBlitzPrompt] = useState(false)
  const [strictMode, setStrictMode] = useState(false)
  const [showScore, setShowScore] = useState(true)
  const [showConceptBreakdown, setShowConceptBreakdown] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [fontSize, setFontSize] = useState<"small"|"medium"|"large">("medium")

  // Reset hint state when word changes (for practice mode)
  useEffect(() => {
    setShowHint(false)
    setUsedHint(false)
  }, [dailyWord.word])


  // Load and sync settings
  useEffect(() => {
    const apply = () => {
      const s = loadSettings()
      setStrictMode(s.strictMode ?? false)
      setShowScore(s.showScore ?? true)
      setShowConceptBreakdown(s.showConceptBreakdown ?? true)
      setReduceMotion(s.reduceMotion ?? false)
      setFontSize(s.fontSize ?? "medium")
    }
    apply()
    window.addEventListener("definedle-settings-changed", apply)
    return () => window.removeEventListener("definedle-settings-changed", apply)
  }, [])

  // Check cookie for previous daily submission (daily mode only)
  useEffect(() => {
    if (isPractice) return
    try {
      const raw = getCookie(DAILY_RESULT_COOKIE)
      if (raw) {
        const parsed: CachedResult = JSON.parse(raw)
        if (parsed.date === getDateKey()) {
          const hasValidConcepts =
            Array.isArray(parsed.concepts) &&
            parsed.concepts.length > 0 &&
            typeof parsed.concepts[0].keyword === "string"

          if (hasValidConcepts) {
            const rehydrated = parsed.concepts.map((c: ConceptResult) => {
              const source = dailyWord.keyConcepts.find((k) => k.keyword === c.keyword)
              return { ...c, hint: source?.hint ?? c.hint ?? "" }
            })
            const missedConcepts = rehydrated.filter((c: ConceptResult) => !c.matched)
            const conceptCount = rehydrated.length
            let missedSummary: string | null = null
            if (missedConcepts.length > 0 && missedConcepts.length < conceptCount) {
              missedSummary = missedConcepts.length === 1
                ? `Your definition covered the word well, but didn't capture the idea of "${missedConcepts[0].label.toLowerCase()}." ${missedConcepts[0].hint}`
                : `Your definition was missing the ideas of ${missedConcepts.map((c: ConceptResult) => `"${c.label.toLowerCase()}"`).join(" and ")}. Expand on these to strengthen your answer.`
            } else if (missedConcepts.length === conceptCount) {
              missedSummary = "The core ideas were missing from your definition. Review each concept below."
            }
            setResult({
              score: parsed.score,
              feedback: parsed.feedback,
              concepts: rehydrated,
              synonymWarning: parsed.synonymWarning,
              missedSummary,
              altDefinitionUsed: parsed.altDefinitionUsed,
              breakdown: parsed.breakdown ?? {
                concepts: { earned: 0, max: 75 },
                precision: { earned: 0, max: 10, ratio: 0, relevantCount: 0, totalMeaningful: 0, irrelevantWords: [] },
                detail: { earned: 0, max: 15, wordCount: 0 },
                hintPenalty: 0,
              },
            })
            setPlayerDefinition(parsed.definition ?? "")
            setSubmitted(true)
          }
        }
      }
    } catch {
      // Corrupt cookie, ignore
    }
  }, [])

  const saveToHistory = useCallback(
    (scoreResult: ScoreResult, word: DailyWord, playerDef: string) => {
      const matchedCount = scoreResult.concepts.filter((c) => c.matched).length
      const entry: HistoryEntry = {
        d: getDateKey(),
        s: scoreResult.score,
        c: `${matchedCount}/${scoreResult.concepts.length}`,
        w: word.word,
        m: difficulty,
        p: playerDef.slice(0, 200),
      }
      try {
        saveEntryToHistory(entry)
      } catch {
        // Ignore storage errors
      }
    },
    [difficulty]
  )

  const handleSubmit = useCallback(
    async (definition: string) => {
      // 1. Get local score immediately so UI responds fast
      const localResult = scoreDefinition(definition, dailyWord, usedHint)
      setResult(localResult)
      setPlayerDefinition(definition)
      setSubmitted(true)
      setIsScoring(true)

      // Show Blitz prompt on first ever completed game
      try {
        const visited = localStorage.getItem("definedle-blitz-visited")
        const played = parseInt(localStorage.getItem("definedle-games-played") || "0", 10)
        localStorage.setItem("definedle-games-played", String(played + 1))
        if (!visited && played === 0) {
          setShowBlitzPrompt(true)
          try { window.dispatchEvent(new CustomEvent("definedle-highlight-blitz")) } catch {}
        }
      } catch {}

      // 2. Call API for semantic clarity scoring
      let finalResult = localResult
      try {
        const matchedCount = localResult.concepts.filter(c => c.matched).length
        const res = await fetch("/api/score-clarity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            word: dailyWord.word,
            partOfSpeech: dailyWord.partOfSpeech,
            officialDefinition: dailyWord.definition,
            playerDefinition: definition,
            conceptsMatched: matchedCount,
            totalConcepts: localResult.concepts.length,
          }),
        })
        if (res.ok) {
          const data = await res.json()
          if (typeof data.clarity === "number") {
            // Rebuild score with API clarity
            const wc = definition.trim().split(/\s+/).length
            const conceptScore = localResult.breakdown.concepts.earned
            let newScore = conceptScore + data.clarity
            if (wc < 4) newScore = Math.min(newScore, 96)
            if (conceptScore === 75 && data.clarity >= 23 && wc >= 4) newScore = 100
            if (localResult.synonymWarning) newScore = Math.max(0, newScore - 20)
            if (usedHint) newScore -= 5
            newScore = Math.max(0, Math.min(100, Math.round(newScore)))
            finalResult = {
              ...localResult,
              score: newScore,
              breakdown: {
                ...localResult.breakdown,
                clarity: {
                  earned: data.clarity,
                  max: 25,
                  relevantWords: localResult.breakdown.clarity?.relevantWords ?? [],
                  ignoredWords: localResult.breakdown.clarity?.ignoredWords ?? [],
                  irrelevantWords: localResult.breakdown.clarity?.irrelevantWords ?? [],
                },
              },
            }
            setResult(finalResult)
          }
        }
      } catch (e) {
        // API failed — keep local result, no disruption to player
        console.error("Clarity API error:", e)
      }
      setIsScoring(false)

      // 3. Save to history (using final score)
      saveWordToDefinedleHistory({
        word: dailyWord.word,
        score: finalResult.score,
        date: getDateKey(),
        difficulty,
        isPractice,
      })

      if (!isPractice) {
        try {
          const slimConcepts = finalResult.concepts.map((c) => ({
            keyword: c.keyword,
            label: c.label,
            hint: "",
            matched: c.matched,
          }))
          const cached: CachedResult = {
            date: getDateKey(),
            score: finalResult.score,
            feedback: finalResult.feedback,
            concepts: slimConcepts,
            synonymWarning: finalResult.synonymWarning,
            missedSummary: null,
            definition: definition.slice(0, 200),
            breakdown: finalResult.breakdown,
            altDefinitionUsed: finalResult.altDefinitionUsed,
          }
          setCookie(DAILY_RESULT_COOKIE, JSON.stringify(cached), 1)
        } catch {}
        saveToHistory(finalResult, dailyWord, definition)
        onComplete?.()
      }
    },
    [dailyWord, isPractice, saveToHistory, DAILY_RESULT_COOKIE, usedHint, onComplete]
  )

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        {/* Difficulty badge */}
        {difficulty === "hard" && (
          <div className="mb-4 flex items-center justify-center">
            <span className="rounded-full border border-destructive/30 bg-destructive/10 px-3 py-0.5 text-[10px] uppercase tracking-widest text-destructive font-medium">
              Hard
            </span>
          </div>
        )}

        <WordDisplay
          word={dailyWord.word}
          partOfSpeech={dailyWord.partOfSpeech}
          fontSize={fontSize}
        />

        <div className="my-6 h-px bg-border" aria-hidden="true" />


        {/* Synonym hint — hard mode only, greyed out in strict mode */}
        {!submitted && dailyWord.synonyms && dailyWord.synonyms.length > 0 && (
          <div className="mb-5">
            {showHint ? (
              <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5">
                  Synonym
                </p>
                <p className="text-sm leading-relaxed text-foreground/80 italic">
                  {dailyWord.synonyms[Math.floor(dailyWord.synonyms.length / 2)]}
                </p>
                {!isPractice && (
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    -5 point penalty applied
                  </p>
                )}
              </div>
            ) : (
              <button
                type="button"
                disabled={strictMode}
                onClick={() => {
                  if (strictMode) return
                  if (!isPractice) setUsedHint(true)
                  setShowHint(true)
                }}
                className={`flex w-full items-center justify-center gap-2 rounded-lg border border-dashed py-2.5 text-xs font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  strictMode
                    ? "border-border/40 text-muted-foreground/30 cursor-not-allowed"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground/70"
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                {strictMode ? "Hint disabled (strict mode)" : isPractice ? "Show synonym hint" : "Show synonym hint (-5 pts)"}
              </button>
            )}
          </div>
        )}

        {submitted && result ? (
          <>
            {isScoring && (
              <p className="text-center text-xs text-muted-foreground animate-pulse mb-2">Scoring…</p>
            )}
            <ResultsPanel
              score={result.score}
              feedback={result.feedback}
              concepts={result.concepts}
              synonymWarning={result.synonymWarning}
              missedSummary={result.missedSummary}
              breakdown={result.breakdown}
              playerDefinition={playerDefinition}
              officialDefinition={dailyWord.definition}
              altDefinitionUsed={result.altDefinitionUsed}
              word={dailyWord.word}
              showScore={showScore}
              showConceptBreakdown={showConceptBreakdown}
              isPractice={isPractice}
              difficulty={difficulty}
              onPractice={!isPractice ? onStartPractice : undefined}
              onNextWord={isPractice ? onNextWord : undefined}
            />
          </>
        ) : (
          <DefinitionInput key={dailyWord.word} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}
