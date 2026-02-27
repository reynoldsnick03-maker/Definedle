"use client"

import { useCallback, useEffect, useState } from "react"
import type { DailyWord, GameMode } from "@/lib/game-data"
import type { ScoreResult, ConceptResult, ScoreBreakdown } from "@/lib/scoring"
import { scoreDefinition } from "@/lib/scoring"
import { formatDateKey, type HistoryEntry } from "@/lib/history"
import { WordDisplay } from "./word-display"
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
  return formatDateKey(new Date())
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
  const [submitted, setSubmitted] = useState(false)
  const [playerDefinition, setPlayerDefinition] = useState("")
  const [usedHint, setUsedHint] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Reset hint state when word changes (for practice mode)
  useEffect(() => {
    setShowHint(false)
    setUsedHint(false)
  }, [dailyWord.word])

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
    async (scoreResult: ScoreResult, word: DailyWord) => {
      const matchedCount = scoreResult.concepts.filter((c) => c.matched).length
      const entry: HistoryEntry = {
        d: getDateKey(),
        s: scoreResult.score,
        c: `${matchedCount}/${scoreResult.concepts.length}`,
        w: word.word,
        m: difficulty,
      }
      try {
        await fetch("/api/history", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        })
      } catch {
        // Ignore network errors
      }
    },
    [difficulty]
  )

  const handleSubmit = useCallback(
    (definition: string) => {
      const scoreResult = scoreDefinition(definition, dailyWord, usedHint)
      setResult(scoreResult)
      setPlayerDefinition(definition)
      setSubmitted(true)

      // Save daily result to cookie and history (daily mode only)
      if (!isPractice) {
        try {
          const slimConcepts = scoreResult.concepts.map((c) => ({
            keyword: c.keyword,
            label: c.label,
            hint: "",
            matched: c.matched,
          }))
          const cached: CachedResult = {
            date: getDateKey(),
            score: scoreResult.score,
            feedback: scoreResult.feedback,
            concepts: slimConcepts,
            synonymWarning: scoreResult.synonymWarning,
            missedSummary: null,
            definition: definition.slice(0, 200),
            breakdown: scoreResult.breakdown,
            altDefinitionUsed: scoreResult.altDefinitionUsed,
          }
          setCookie(DAILY_RESULT_COOKIE, JSON.stringify(cached), 1)
        } catch {
          // Ignore
        }
        saveToHistory(scoreResult, dailyWord)
        // Notify parent that game is complete (for streak refresh)
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
        />

        <div className="my-6 h-px bg-border" aria-hidden="true" />

        {/* Etymology hint */}
        {!submitted && dailyWord.etymology && (
          <div className="mb-5">
            {showHint ? (
              <div className="rounded-lg border border-border bg-muted/40 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1.5">
                  Etymology
                </p>
                <p className="text-sm leading-relaxed text-foreground/80 italic">
                  {dailyWord.etymology}
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
                onClick={() => {
                  if (!isPractice) setUsedHint(true)
                  setShowHint(true)
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-border py-2.5 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                {isPractice ? "Show etymology hint" : "Show etymology hint (-5 pts)"}
              </button>
            )}
          </div>
        )}

        {submitted && result ? (
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
            isPractice={isPractice}
            difficulty={difficulty}
            onPractice={!isPractice ? onStartPractice : undefined}
            onNextWord={isPractice ? onNextWord : undefined}
          />
        ) : (
          <DefinitionInput key={dailyWord.word} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  )
}
