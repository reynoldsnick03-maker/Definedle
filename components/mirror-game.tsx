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
  if (effect === "decent") return current
  if (effect === "awful") return MULTIPLIER_STEPS[Math.max(idx - 4, 0)]
  return MULTIPLIER_STEPS[Math.max(idx - 1, 0)]
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
    (guesses === 3 && hintsUsed === 0)
  ) return "decent"
  if (
    (guesses === 1 && hintsUsed >= 5) ||
    (guesses === 2 && hintsUsed >= 4) ||
    (guesses === 3 && hintsUsed >= 4)
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
  if (guesses === 1 && hintsUsed === 0) return 3
  if (guesses === 1 && hintsUsed === 1) return 2
  if (guesses === 2 && hintsUsed === 0) return 2
  return 1
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
  }, [word.word])

  const handleRevealLetter = () => {
    if (isComplete) return
    // Never reveal the last letter
    if (hintsUsed >= word.word.length - 1) return
    if (hintsUsed < maxHints) {
      setHintsUsed(h => h + 1)
    } else {
      // Extra reveals cost 1pt — only allow if player can afford it
      if (sessionScore < 1) return
      setHintsUsed(h => h + 1)
      onSessionUpdate({ points: -1, correct: false, multiplierEffect: "poor" })
    }
  }

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
      const earned = Math.floor(basePoints * multiplier)
      // Apply quality step, then one poor step per hint beyond what quality accounts for
      let nextMult = applyMultiplierEffect(multiplier, quality)
      const extraHints = Math.max(0, hintsUsed - hintsAccounted(newGuesses.length, hintsUsed))
      for (let h = 0; h < extraHints; h++) {
        nextMult = applyMultiplierEffect(nextMult, "poor")
      }
      const multDelta = parseFloat((nextMult - multiplier).toFixed(1))

      setPointsEarned(earned)
      setPlayQuality(quality)
      setIsCorrect(true)
      setIsComplete(true)
      if (newGuesses.length === 1 && hintsUsed === 0) setShowFlawless(true)

      const entry: WordHistoryEntry = { word: word.word, points: earned, multDelta, guesses: newGuesses.length, hintsUsed }
      const newHistory = [...wordHistory, entry]

      const newConsecutiveAwful = quality === "awful" ? consecutiveAwful + 1 : 0
      const newWordsPlayed = wordsPlayed + 1

      onSessionUpdate({ points: earned, correct: true, multiplierEffect: quality })
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
    ? <span className="text-muted-foreground font-medium">— decent</span>
    : playQuality === "poor"
    ? <span className="text-score-low font-medium">▼ poor</span>
    : playQuality === "awful"
    ? <span className="text-red-600 font-bold">▼ awful</span>
    : null

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className={`relative rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 transition-transform ${isShaking ? "animate-shake" : ""}`}>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          {/* Left: static mode label only */}
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium leading-tight">
            Mirror<br/>Mode
          </span>

          {/* Right: word progress, streak, score, multiplier */}
          <div className="flex items-center gap-4">
            <span className="text-[10px] tabular-nums text-muted-foreground">{wordsPlayed + 1}/15</span>
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-sm font-medium tabular-nums">{sessionScore}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted/40 border border-border/50">
              <Zap className={`h-3 w-3 ${multiplierColor}`} />
              <span className={`text-xs font-bold tabular-nums ${multiplierColor}`}>×{multiplier}</span>
            </div>
          </div>
        </div>

        {/* Definition */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{word.partOfSpeech}</p>
          <p className="text-lg leading-relaxed text-foreground font-serif italic">&ldquo;{word.definition}&rdquo;</p>

          {/* Letter reveal — smaller tiles so long words fit one line */}
          {hintsUsed > 0 && (
            <div className="mt-4 flex items-center justify-center gap-1 flex-nowrap overflow-hidden">
              {word.word.split("").map((letter, i) => {
                const isRevealed = revealedIndices.includes(i)
                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-5 h-7 flex items-end justify-center pb-0.5 border-b-2 text-xs font-medium transition-all duration-300 ${
                      isRevealed ? "border-foreground text-foreground" : "border-muted-foreground/30 text-transparent"
                    }`}
                  >
                    {isRevealed ? letter.toUpperCase() : "_"}
                  </div>
                )
              })}
            </div>
          )}

          <div className="mt-4 flex items-center justify-center">
            {showFlawless ? (
              <span className="text-score-high font-bold text-xl">Flawless!</span>
            ) : !isComplete && hintsUsed < word.word.length - 1 && (hintsUsed < maxHints || sessionScore >= 1) ? (
              <button
                type="button"
                onClick={handleRevealLetter}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors text-xs text-muted-foreground hover:text-foreground border border-border/50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                Reveal a letter
                {hintsUsed < maxHints
                  ? <span className="text-muted-foreground/60">(−0.5× multiplier, {hintsUsed}/{maxHints} used)</span>
                  : <span className="text-score-low/80">(−1 pt from score)</span>
                }
              </button>
            ) : null}
          </div>
        </div>

        <div className="my-4 h-px bg-border" />

        {/* Result or input — always above guesses */}
        {isComplete ? (
          <div className="text-center">
            {isCorrect ? (
              <div className="mb-4 flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-score-high/10 px-4 py-2 text-score-high">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-semibold">Got it in {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}!</span>
                </div>
                {pointsEarned !== null && (
                  <div className="flex items-center gap-1.5 text-sm flex-wrap justify-center">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-amber-600">+{pointsEarned} pts</span>
                    {qualityLabel && <span className="text-xs">· {qualityLabel}</span>}
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">The word was:</p>
                <p className="text-2xl font-serif font-medium">{word.word}</p>
                <p className="text-sm text-muted-foreground mt-2">Calculating final score...</p>
              </div>
            )}
            {isCorrect && isPractice && onNextWord && wordsPlayed + 1 < 15 && (
              <button
                type="button"
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onNextWord() }}
                className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Next word
              </button>
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
                className={`w-full rounded-lg border bg-background px-4 py-3 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring ${validationError ? "border-red-400" : "border-border focus:border-foreground/30"}`}
                autoComplete="off"
                autoCapitalize="off"
                disabled={isValidating}
              />
              {validationError && <p className="mt-1.5 text-xs text-red-500">{validationError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{remainingGuesses} {remainingGuesses === 1 ? "guess" : "guesses"} left</span>

              </div>
              <button
                type="submit"
                disabled={!currentGuess.trim() || isValidating}
                className="rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
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
              <div key={i} className={`flex items-center justify-between rounded-lg border-2 px-4 py-2.5 ${getSimilarityBorderColor(guess.similarity)}`}>
                <span className="font-medium">{guess.word}</span>
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
