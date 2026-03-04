"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Star, Zap } from "lucide-react"
import type { DailyWord } from "@/lib/game-data"
import { stemMatch, areSynonyms } from "@/lib/scoring"

export interface WordHistoryEntry {
  word: string
  points: number
  multDelta: number
  guesses: number
  hintsUsed: number
}

interface MirrorGameProps {
  word: DailyWord
  onNextWord?: () => void
  isPractice?: boolean
  onComplete?: (result: { correct: boolean; guesses: number; hintsUsed: number; points: number }) => void
  sessionScore: number
  sessionStreak: number
  sessionBestStreak: number
  multiplier: number
  onSessionUpdate: (delta: { points: number; correct: boolean; multiplierEffect: "flawless" | "good" | "decent" | "poor" | "awful" }) => void
  onSessionEnd: (finalScore: number, wordsSolved: number, bestMultiplier: number, wordHistory: WordHistoryEntry[], reason: "failed" | "awful" | "complete") => void
  onFlipToNormal: () => void
  wordsPlayed: number
  consecutiveAwful: number
  wordHistory: WordHistoryEntry[]
  onWordPlayed: (wasAwful: boolean, entry: WordHistoryEntry) => void
  isDark?: boolean
  nemesisEntry?: { points: number; guesses: number; hintsUsed: number } | null
}

interface Guess {
  word: string
  similarity: number
}

const MULTIPLIER_STEPS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]

function getMultiplierIndex(m: number): number {
  const idx = MULTIPLIER_STEPS.findIndex(s => Math.abs(s - m) < 0.01)
  return idx === -1 ? 0 : idx
}

function applyMultiplierEffect(current: number, effect: "flawless" | "good" | "decent" | "poor" | "awful"): number {
  const idx = getMultiplierIndex(current)
  if (effect === "flawless") return MULTIPLIER_STEPS[Math.min(idx + 2, MULTIPLIER_STEPS.length - 1)]
  if (effect === "good") return MULTIPLIER_STEPS[Math.min(idx + 1, MULTIPLIER_STEPS.length - 1)]
  if (effect === "decent") return MULTIPLIER_STEPS[Math.max(idx - 1, 0)] // −0.5 step
  if (effect === "awful") return MULTIPLIER_STEPS[Math.max(idx - 2, 0)]
  return MULTIPLIER_STEPS[Math.max(idx - 1, 0)] // poor = −0.5 step
}

function classifyPlay(guesses: number, hintsUsed: number): "flawless" | "good" | "decent" | "poor" | "awful" {
  if (guesses === 1 && hintsUsed === 0) return "flawless"
  if (
    (guesses === 1 && hintsUsed === 1) ||
    (guesses === 2 && hintsUsed === 0) ||
    (guesses === 2 && hintsUsed === 1)
  ) return "good"
  if (
    (guesses === 1 && hintsUsed === 2) ||
    (guesses === 1 && hintsUsed === 3) ||
    (guesses === 2 && hintsUsed === 2) ||
    (guesses === 2 && hintsUsed === 3) ||
    (guesses === 3 && hintsUsed === 0) ||
    (guesses === 3 && hintsUsed === 1) ||
    (guesses === 3 && hintsUsed === 2) ||
    (guesses === 3 && hintsUsed === 3)
  ) return "decent"
  if (
    (guesses === 1 && hintsUsed >= 6) ||
    (guesses === 2 && hintsUsed >= 5) ||
    (guesses === 3 && hintsUsed >= 5)
  ) return "awful"
  return "poor"
}

function hintsAccounted(guesses: number, hintsUsed: number): number {
  const q = classifyPlay(guesses, hintsUsed)
  if (q === "flawless") return 0
  if (q === "good") return guesses === 1 ? 1 : guesses === 2 && hintsUsed === 0 ? 0 : 1
  if (q === "decent") {
    if (guesses === 3) return 0   // 3g0h
    if (guesses === 2) return 2   // 2g2h
    if (guesses === 1) return hintsUsed  // 1g2h and 1g3h — all hints accounted
    return 2
  }
  if (q === "awful") return guesses === 1 ? 5 : guesses === 2 ? 4 : 4
  // poor
  if (guesses === 1) return 3
  if (guesses === 2) return 2
  return 0
}

function calcBasePoints(guesses: number, hintsUsed: number): number {
  const quality = classifyPlay(guesses, hintsUsed)
  if (quality === "flawless") return 3
  if (quality === "good") return 2
  return 1 // decent, poor, awful all earn 1 base point
  // failed word (guesses === 0) handled separately — returns 0
}

function calculateSimilarity(guess: string, target: string, synonyms?: string[]): number {
  const g = guess.toLowerCase().trim()
  const t = target.toLowerCase()
  if (g === t) return 100
  if (stemMatch(g, t)) return 90
  if (synonyms?.some(s => s.toLowerCase() === g)) return 75
  if (areSynonyms(g, t)) return 70
  const distance = levenshtein(g, t)
  const maxLen = Math.max(g.length, t.length)
  const similarity = Math.round((1 - distance / maxLen) * 100)
  if (synonyms?.some(s => stemMatch(g, s.toLowerCase()))) return Math.max(similarity, 60)
  return Math.max(0, similarity)
}

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i-1] === a[j-1]
        ? matrix[i-1][j-1]
        : Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1)
    }
  }
  return matrix[b.length][a.length]
}

function getSimilarityColor(s: number) {
  if (s >= 100) return "bg-score-high/80 text-white"
  if (s >= 80) return "bg-emerald-400/60 text-emerald-900"
  if (s >= 60) return "bg-amber-300/50 text-amber-900"
  if (s >= 40) return "bg-orange-300/50 text-orange-900"
  return "bg-red-300/50 text-red-900"
}

function getSimilarityBorderColor(s: number) {
  if (s >= 100) return "border-score-high/60"
  if (s >= 80) return "border-emerald-300"
  if (s >= 60) return "border-amber-300"
  if (s >= 40) return "border-orange-300"
  return "border-red-300"
}

async function isValidWord(word: string): Promise<{ valid: boolean; uncertain: boolean }> {
  if (!/^[a-zA-Z]+$/.test(word)) return { valid: false, uncertain: false }
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`,
      { signal: controller.signal }
    )
    clearTimeout(timeoutId)
    return { valid: response.ok, uncertain: false }
  } catch {
    return { valid: true, uncertain: true }
  }
}

// Letter rarity — uncommon letters revealed before common ones
const LETTER_RARITY: Record<string, number> = {
  z: 1, q: 2, x: 3, j: 4, k: 5, v: 6, w: 7, y: 8, b: 9, f: 10,
  g: 11, h: 12, m: 13, p: 14, d: 15, c: 16, u: 17, l: 18, n: 19,
  t: 20, s: 21, r: 22, o: 23, i: 24, a: 25, e: 26,
}

function getRevealedLetters(word: string, count: number): number[] {
  const w = word.toLowerCase()
  const len = w.length
  if (count === 0) return []

  // Build ordered list of indices to reveal:
  // 1st: first letter, 2nd: last letter, 3rd+: remaining by rarity (uncommon first)
  const remaining = Array.from({ length: len }, (_, i) => i)
    .filter(i => i !== 0 && i !== len - 1)
    .sort((a, b) => (LETTER_RARITY[w[a]] ?? 13) - (LETTER_RARITY[w[b]] ?? 13))

  const ordered = len === 1
    ? [0]
    : len === 2
    ? [0, 1]
    : [0, len - 1, ...remaining]

  return ordered.slice(0, count).sort((a, b) => a - b)
}

export function MirrorGame({
  word,
  onNextWord,
  isPractice,
  onComplete,
  sessionScore,
  sessionStreak,
  sessionBestStreak,
  multiplier,
  onSessionUpdate,
  onSessionEnd,
  onFlipToNormal,
  wordsPlayed,
  consecutiveAwful,
  wordHistory,
  onWordPlayed,
  isDark = false,
  nemesisEntry = null,
}: MirrorGameProps) {
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [isValidating, setIsValidating] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [showFlawless, setShowFlawless] = useState(false)
  const [pointsEarned, setPointsEarned] = useState<number | null>(null)
  const [playQuality, setPlayQuality] = useState<"flawless" | "good" | "decent" | "poor" | "awful" | null>(null)
  const [floatingPoints, setFloatingPoints] = useState<{value: number, key: number} | null>(null)
  const [hintHover, setHintHover] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const maxGuesses = 3
  const maxHints = 3
  const remainingGuesses = maxGuesses - guesses.length
  const revealedIndices = getRevealedLetters(word.word, hintsUsed)

  useEffect(() => {
    setGuesses([])
    setCurrentGuess("")
    setIsComplete(false)
    setIsCorrect(false)
    setHintsUsed(0)
    setValidationError(null)
    setShowFlawless(false)
    setPointsEarned(null)
    setPlayQuality(null)
    setIsSkipped(false)
  }, [word.word])

  const handleRevealLetter = () => {
    if (isComplete) return
    if (hintsUsed >= word.word.length - 1) return
    setHintsUsed(h => h + 1)
    // Hints 1-3 are free. Hints 4+ cost -0.5 multiplier step each.
    if (hintsUsed >= maxHints) {
      onSessionUpdate({ points: 0, correct: false, multiplierEffect: "poor" })
    }
  }

  const handleSkip = useCallback(() => {
    if (isComplete || isSkipped) return
    // Must have made at least 1 guess or used 1 hint
    if (guesses.length === 0 && hintsUsed === 0) return
    setIsSkipped(true)
    setIsComplete(true)
    // -1 multiplier step penalty
    onSessionUpdate({ points: 0, correct: false, multiplierEffect: "poor" })
    const entry: WordHistoryEntry = { word: word.word, points: 0, multDelta: -0.5, guesses: 0, hintsUsed }
    const newHistory = [...wordHistory, entry]
    const newWordsPlayed = wordsPlayed + 1
    onWordPlayed(false, entry)
    setTimeout(() => {
      if (newWordsPlayed >= 15) {
        onSessionEnd(sessionScore, newWordsPlayed, multiplier, newHistory, "complete")
      } else {
        onNextWord?.()
      }
    }, 2000)
  }, [isComplete, isSkipped, guesses.length, hintsUsed, word.word, wordHistory, wordsPlayed,
      onSessionUpdate, onWordPlayed, onNextWord, onSessionEnd, sessionScore, multiplier])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedGuess = currentGuess.trim()
    if (!trimmedGuess || isComplete || isValidating) return

    // Dismiss keyboard on mobile immediately
    inputRef.current?.blur()

    setValidationError(null)
    setIsValidating(true)
    const { valid, uncertain } = await isValidWord(trimmedGuess)
    setIsValidating(false)

    if (!valid && !uncertain) {
      setValidationError("Not a recognized word")
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 300)
      return
    }

    const gLower = trimmedGuess.toLowerCase()
    const definitionWordSet = new Set(
      word.definition.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).filter(w => w.length > 0)
    )
    const isMorphologicalMatch = gLower !== word.word.toLowerCase() && stemMatch(gLower, word.word.toLowerCase()) && !definitionWordSet.has(gLower)
    const isActuallyCorrect = gLower === word.word.toLowerCase() || isMorphologicalMatch

    const similarity = isActuallyCorrect ? 100 : calculateSimilarity(trimmedGuess, word.word, word.synonyms)
    const newGuesses = [...guesses, { word: trimmedGuess, similarity }]
    setGuesses(newGuesses)
    setCurrentGuess("")

    if (isActuallyCorrect) {
      const quality = classifyPlay(newGuesses.length, hintsUsed)
      const basePoints = calcBasePoints(newGuesses.length, hintsUsed)
      const earned = basePoints * multiplier // keep fractional; session total rounded at display
      // Tier step
      const nextMult = applyMultiplierEffect(multiplier, quality)
      // Add paid hint steps (hints 4+ already cost -0.5 each in real-time, reflect in summary)
      const paidHints = Math.max(0, hintsUsed - maxHints)
      let displayMult = nextMult
      for (let i = 0; i < paidHints; i++) {
        displayMult = applyMultiplierEffect(displayMult, "poor")
      }
      const multDelta = parseFloat((displayMult - multiplier).toFixed(1))

      setPointsEarned(earned)
      setFloatingPoints({ value: earned, key: Date.now() })
      setTimeout(() => setFloatingPoints(null), 1200)
      setPlayQuality(quality)
      setIsCorrect(true)
      setIsComplete(true)
      if (newGuesses.length === 1 && hintsUsed === 0) setShowFlawless(true)

      const entry: WordHistoryEntry = { word: word.word, points: earned, multDelta, guesses: newGuesses.length, hintsUsed }
      const newHistory = [...wordHistory, entry]

      const newConsecutiveAwful = quality === "awful" ? consecutiveAwful + 1 : 0
      const newWordsPlayed = wordsPlayed + 1

      onSessionUpdate({ points: earned, correct: true, multiplierEffect: quality }) // hint costs already applied per-reveal
      onComplete?.({ correct: true, guesses: newGuesses.length, hintsUsed, points: earned })
      onWordPlayed(quality === "awful", entry)

      if (newConsecutiveAwful >= 3) {
        setTimeout(() => onSessionEnd(sessionScore + earned, newWordsPlayed, nextMult, newHistory, "awful"), 1600)
      } else if (newWordsPlayed >= 15) {
        setTimeout(() => onSessionEnd(sessionScore + earned, newWordsPlayed, nextMult, newHistory, "complete"), 1600)
      }
    } else if (newGuesses.length >= maxGuesses) {
      setIsComplete(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      // Use wordHistory directly (no new entry on failure)
      setTimeout(() => onSessionEnd(sessionScore, sessionStreak, multiplier, [...wordHistory], "failed"), 1400)
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }, [currentGuess, guesses, isComplete, isValidating, word, hintsUsed, multiplier, onComplete, onSessionUpdate, onSessionEnd, sessionScore, sessionStreak, wordHistory])

  const multiplierColor = multiplier >= 4 ? "text-score-high" : multiplier >= 2.5 ? "text-amber-500" : "text-muted-foreground"

  const qualityLabel = playQuality === "flawless"
    ? <span className="text-score-high font-medium">▲ flawless</span>
    : playQuality === "good"
    ? <span className="text-amber-500 font-medium">▲ good</span>
    : playQuality === "decent"
    ? <span className="text-muted-foreground font-medium">▼ decent</span>
    : playQuality === "poor"
    ? <span className="text-score-low font-medium">▼ poor</span>
    : playQuality === "awful"
    ? <span className="text-red-600 font-bold">▼ awful</span>
    : null

  const devReveal = false // dev reveal removed

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className={`relative rounded-xl border p-6 shadow-sm md:p-8 transition-transform ${isShaking ? "animate-shake" : ""} ${isDark ? "border-[#2a2926] bg-[#1c1b19]" : "border-border bg-card"}`}>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          {/* Left: static mode label only */}
          <span className={`text-[10px] uppercase tracking-widest font-medium leading-tight ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
            Blitz
          </span>

          {/* Right: word progress, streak, score, multiplier */}
          <div className="flex items-center gap-4">
            {devReveal && (
              <span className="text-[11px] font-mono text-muted-foreground/40 select-none" aria-hidden="true">
                {word.word}
              </span>
            )}
            <span className={`text-[10px] tabular-nums ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{wordsPlayed + 1}/15</span>
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              <span className={`text-sm font-medium tabular-nums ${isDark ? "text-white" : ""}`}>{Math.round(sessionScore)}</span>
            </div>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md border transition-all duration-200 ${isDark ? "bg-[#111110] border-[#2a2926]" : "bg-muted/40 border-border/50"} ${hintHover && hintsUsed >= maxHints ? "scale-110 " + (isDark ? "border-amber-500/50" : "border-foreground/30") : ""}`}>
              <Zap className={`h-3 w-3 ${multiplierColor}`} />
              <span className={`text-xs font-bold tabular-nums ${multiplierColor}`}>×{multiplier}</span>
            </div>
          </div>
        </div>

        {/* Floating points animation */}
        {floatingPoints && (
          <div
            key={floatingPoints.key}
            className="absolute top-4 right-4 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-200"
            style={{ animation: "floatUp 1.2s ease-out forwards" }}
          >
            <span className={`text-sm font-bold ${isDark ? "text-amber-400" : "text-amber-600"}`}>
              +{Math.round(floatingPoints.value)}
            </span>
          </div>
        )}

        {/* Definition */}
        <div className="text-center mb-6">
          <p className={`text-xs uppercase tracking-widest mb-3 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{word.partOfSpeech}</p>
          <p className={`text-lg leading-relaxed font-serif italic ${isDark ? "text-[#d4cfc8]" : "text-foreground"}`}>&ldquo;{word.definition}&rdquo;</p>

          {/* Nemesis banner — shown if player previously struggled here */}
          {nemesisEntry && (
            <div className={`mt-3 px-3 py-2 rounded-lg text-xs flex items-center gap-2 ${isDark ? "bg-red-500/10 border border-red-500/20 text-red-400" : "bg-red-50 border border-red-200 text-red-600"}`}>
              <span>⚔️</span>
              <span>You scored <strong>{Math.round(nemesisEntry.points)} pts</strong> here before — {nemesisEntry.guesses} {nemesisEntry.guesses === 1 ? "guess" : "guesses"}, {nemesisEntry.hintsUsed} {nemesisEntry.hintsUsed === 1 ? "hint" : "hints"}. Redeem yourself.</span>
            </div>
          )}

          {/* Letter reveal — smaller tiles so long words fit one line */}
          {hintsUsed > 0 && (
            <div className="mt-4 flex items-center justify-center gap-1 flex-nowrap overflow-hidden">
              {word.word.split("").map((letter, i) => {
                const isRevealed = revealedIndices.includes(i)
                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-5 h-7 flex items-end justify-center pb-0.5 border-b-2 text-xs font-medium transition-all duration-300 ${
                      isRevealed ? (isDark ? "border-amber-500 text-amber-400" : "border-foreground text-foreground") : (isDark ? "border-[#3a3936] text-transparent" : "border-muted-foreground/30 text-transparent")
                    }`}
                  >
                    {isRevealed ? letter.toUpperCase() : "_"}
                  </div>
                )
              })}
            </div>
          )}

          <div className="mt-4 flex flex-col items-center gap-2">
            {showFlawless ? (
              <span className="text-score-high font-bold text-xl">Flawless!</span>
            ) : !isComplete && hintsUsed < word.word.length - 1 ? (
              <>
                <button
                  type="button"
                  onClick={handleRevealLetter}
                  onMouseEnter={() => setHintHover(true)}
                  onMouseLeave={() => setHintHover(false)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 text-xs border ${
                    hintsUsed >= maxHints
                      ? isDark
                        ? `bg-[#111110] border-red-500/30 text-red-400 hover:border-red-500/60 ${hintHover ? "border-red-500/60" : ""}`
                        : "bg-muted/40 hover:bg-muted/60 text-red-500 border-red-300/50"
                      : isDark
                        ? `bg-[#111110] text-[#6b6560] border-[#2a2926] hover:text-[#9b9589] hover:border-amber-500/40 ${hintHover ? "border-amber-500/40" : ""}`
                        : "bg-muted/40 hover:bg-muted/60 text-muted-foreground hover:text-foreground border-border/50"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  {hintsUsed < maxHints ? "Reveal a letter" : "Reveal a letter (−0.5×)"}
                </button>
                {/* Dots below button — 3 free slots amber/filled, paid hints red */}
                <div className="flex items-center gap-1.5 mt-1">
                  {Array.from({ length: Math.max(maxHints, hintsUsed) }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i < hintsUsed
                          ? i < maxHints
                            ? isDark ? "bg-amber-500" : "bg-foreground"
                            : "bg-red-500"
                          : isDark ? "bg-[#3a3936]" : "bg-muted-foreground/25"
                      }`}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>

        <div className={`my-4 h-px ${isDark ? "bg-[#2a2926]" : "bg-border"}`} />

        {/* Result or input — always above guesses */}
        {isComplete ? (
          <div className="text-center">
            {isCorrect ? (
              <div className="mb-4 flex flex-col items-center gap-2">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-score-high ${isDark ? "bg-emerald-500/10" : "bg-score-high/10"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-semibold">Got it in {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}!</span>
                </div>
                {pointsEarned !== null && (
                  <div className="flex items-center gap-1.5 text-sm flex-wrap justify-center">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-amber-600">+{Math.round(pointsEarned)} pts</span>
                    {qualityLabel && <span className="text-xs">· {qualityLabel}</span>}
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-4">
                <p className={`mb-2 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>The word was:</p>
                <p className={`text-2xl font-serif font-medium ${isDark ? "text-white" : ""}`}>{word.word}</p>
                <p className="text-sm text-muted-foreground mt-2">Calculating final score...</p>
              </div>
            )}
            {isCorrect && isPractice && onNextWord && wordsPlayed + 1 < 15 && (
              <button
                type="button"
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onNextWord() }}
                className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${isDark ? "bg-amber-500 text-white" : "bg-foreground text-background"}`}
              >
                Next word
              </button>
            )}
            {isSkipped && (
              <div className="mt-2 text-center">
                <p className={`mb-1 text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Skipped — the word was:</p>
                <p className={`text-2xl font-serif font-medium mb-1 ${isDark ? "text-white" : ""}`}>{word.word}</p>
                <p className={`text-xs ${isDark ? "text-red-400" : "text-red-500"}`}>−0.5× multiplier</p>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                ref={inputRef}
                type="text"
                value={currentGuess}
                onChange={(e) => { setCurrentGuess(e.target.value); setValidationError(null) }}
                placeholder="Type your guess..."
                className={`w-full rounded-lg border px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring ${isDark ? "bg-[#111110] text-white placeholder:text-[#4a4845] border-[#2a2926] focus:border-amber-500/50 focus:ring-amber-500/20" : "bg-background placeholder:text-muted-foreground/60 border-border focus:border-foreground/30"} ${validationError ? "border-red-400" : ""}`}
                autoComplete="off"
                autoCapitalize="off"
                disabled={isValidating}
              />
              {validationError && <p className="mt-1.5 text-xs text-red-500">{validationError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{remainingGuesses} {remainingGuesses === 1 ? "guess" : "guesses"} left</span>
                {(guesses.length > 0 || hintsUsed > 0) && (
                  <button
                    type="button"
                    onClick={handleSkip}
                    className={`text-xs transition-colors ${isDark ? "text-[#4a4845] hover:text-red-400" : "text-muted-foreground/50 hover:text-red-400"}`}
                  >
                    Skip (−0.5×)
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={!currentGuess.trim() || isValidating}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50 ${isDark ? "bg-amber-500 text-white" : "bg-foreground text-background"}`}
              >
                {isValidating ? "Checking..." : "Guess"}
              </button>
            </div>
          </form>
        )}

        {/* Guesses — below input so they don't interfere with typing */}
        {guesses.length > 0 && (
          <div className="mt-4 space-y-2">
            {guesses.map((guess, i) => (
              <div key={i} className={`flex items-center justify-between rounded-lg border-2 px-4 py-2.5 ${isDark ? "border-[#2a2926] bg-[#111110]" : getSimilarityBorderColor(guess.similarity)}`}>
                <span className={`font-medium ${isDark ? "text-[#9b9589]" : ""}`}>{guess.word}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${getSimilarityColor(guess.similarity)}`}>
                  {guess.similarity >= 100 ? "Correct!" : `${guess.similarity}%`}
                </span>
              </div>
            ))}
          </div>
        )}


      </div>
    </div>
  )
}
