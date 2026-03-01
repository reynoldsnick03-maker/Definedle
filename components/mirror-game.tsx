"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Flame, Star, Trophy } from "lucide-react"
import type { DailyWord } from "@/lib/game-data"
import { stemMatch, areSynonyms } from "@/lib/scoring"
import { getPlayerId } from "@/lib/player-id"

interface MirrorGameProps {
  word: DailyWord
  onFlipBack: () => void
  onNextWord?: () => void
  isPractice?: boolean
  onComplete?: (result: { correct: boolean; guesses: number; hintsUsed: number }) => void
  streak?: { current: number; best: number }
}

interface Guess {
  word: string
  similarity: number
}

interface SessionState {
  score: number
  streak: number
  bestStreak: number
  wordsSolved: number
  wordsAttempted: number
}

function roundPoints(guesses: number, hintsUsed: number): number {
  const base = guesses === 1 ? 3 : guesses === 2 ? 2 : 1
  return Math.max(0, base - hintsUsed)
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

async function saveSession(session: SessionState, difficulty: string) {
  if (session.wordsAttempted < 3) return
  try {
    const playerId = getPlayerId()
    if (!playerId) return
    await fetch("/api/mirror-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player_id: playerId,
        session_score: session.score,
        best_streak: session.bestStreak,
        words_solved: session.wordsSolved,
        words_attempted: session.wordsAttempted,
        difficulty,
      }),
    })
  } catch {
    // Ignore
  }
}

export function MirrorGame({ word, onFlipBack, onNextWord, isPractice, onComplete }: MirrorGameProps) {
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hintsRevealed, setHintsRevealed] = useState(0)
  const [isValidating, setIsValidating] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [showFlawless, setShowFlawless] = useState(false)
  const [pointsEarned, setPointsEarned] = useState<number | null>(null)
  const [session, setSession] = useState<SessionState>({
    score: 0, streak: 0, bestStreak: 0, wordsSolved: 0, wordsAttempted: 0
  })
  const sessionSavedRef = useRef(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const maxGuesses = 3
  const remainingGuesses = maxGuesses - guesses.length

  useEffect(() => {
    setGuesses([])
    setCurrentGuess("")
    setIsComplete(false)
    setIsCorrect(false)
    setHintsRevealed(0)
    setValidationError(null)
    setShowFlawless(false)
    setPointsEarned(null)
  }, [word.word])

  useEffect(() => {
    return () => {
      if (!sessionSavedRef.current && session.wordsAttempted >= 3) {
        sessionSavedRef.current = true
        saveSession(session, "easy")
      }
    }
  }, [session])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedGuess = currentGuess.trim()
    if (!trimmedGuess || isComplete || isValidating) return

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
    const tLower = word.word.toLowerCase()

    const definitionWordSet = new Set(
      word.definition.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).filter(w => w.length > 0)
    )

    const isMorphologicalMatch = gLower !== tLower && stemMatch(gLower, tLower) && !definitionWordSet.has(gLower)
    const isActuallyCorrect = gLower === tLower || isMorphologicalMatch

    const similarity = isActuallyCorrect ? 100 : calculateSimilarity(trimmedGuess, word.word, word.synonyms)
    const newGuess: Guess = { word: trimmedGuess, similarity }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
    setCurrentGuess("")

    if (isActuallyCorrect) {
      const pts = roundPoints(newGuesses.length, hintsRevealed)
      setPointsEarned(pts)
      setIsCorrect(true)
      setIsComplete(true)
      if (newGuesses.length === 1 && hintsRevealed === 0) setShowFlawless(true)
      setSession(prev => {
        const newStreak = prev.streak + 1
        return {
          score: prev.score + pts,
          streak: newStreak,
          bestStreak: Math.max(prev.bestStreak, newStreak),
          wordsSolved: prev.wordsSolved + 1,
          wordsAttempted: prev.wordsAttempted + 1,
        }
      })
      onComplete?.({ correct: true, guesses: newGuesses.length, hintsUsed: hintsRevealed })
    } else if (newGuesses.length >= maxGuesses) {
      setPointsEarned(0)
      setIsComplete(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      setSession(prev => ({ ...prev, streak: 0, wordsAttempted: prev.wordsAttempted + 1 }))
      onComplete?.({ correct: false, guesses: newGuesses.length, hintsUsed: hintsRevealed })
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }, [currentGuess, guesses, isComplete, isValidating, word.word, word.definition, word.synonyms, hintsRevealed, onComplete])

  const handleFlipBack = () => {
    if (session.wordsAttempted >= 3 && !sessionSavedRef.current) {
      sessionSavedRef.current = true
      saveSession(session, "easy")
    }
    onFlipBack()
  }

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className={`relative rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 transition-transform ${isShaking ? "animate-shake" : ""}`}>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Mirror Mode</span>
            {session.streak > 0 && (
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-score-high/10 border border-score-high/20">
                <Flame className="h-3 w-3 text-score-high" />
                <span className="text-xs font-medium tabular-nums text-score-high">{session.streak}</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-sm font-medium tabular-nums">{session.score}</span>
              <span className="text-xs text-muted-foreground">pts</span>
            </div>
            <button type="button" onClick={handleFlipBack} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
              </svg>
              Flip back
            </button>
          </div>
        </div>

        {/* Definition */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{word.partOfSpeech}</p>
          <p className="text-lg leading-relaxed text-foreground font-serif italic">&ldquo;{word.definition}&rdquo;</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground min-h-[32px]">
            {showFlawless ? (
              <span className="text-score-high font-bold text-xl animate-flawless">Flawless!</span>
            ) : (
              <>
                {hintsRevealed >= 1 && <span className="px-2 py-1 rounded bg-muted/50">Starts with &ldquo;{word.word[0].toUpperCase()}&rdquo;</span>}
                {hintsRevealed >= 2 && <span className="px-2 py-1 rounded bg-muted/50">Ends with &ldquo;{word.word[word.word.length - 1].toLowerCase()}&rdquo;</span>}
                {hintsRevealed >= 3 && (
                  <span className="px-2 py-1 rounded bg-muted/50">
                    {(() => {
                      const syllables = word.word.toLowerCase().replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "").replace(/^y/, "").match(/[aeiouy]{1,2}/g)?.length || 1
                      return `${syllables} ${syllables === 1 ? "syllable" : "syllables"}`
                    })()}
                  </span>
                )}
                {!isComplete && hintsRevealed < 3 && (
                  <button type="button" onClick={() => setHintsRevealed(h => h + 1)} className="px-2 py-1 rounded bg-muted/30 hover:bg-muted/50 transition-colors text-xs">
                    Hint? {hintsRevealed > 0 ? `(${hintsRevealed}/3)` : ""}
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="my-6 h-px bg-border" />

        {/* Guesses */}
        {guesses.length > 0 && (
          <div className="mb-5 space-y-2">
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

        {/* Result or input */}
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
                  <div className="flex items-center gap-1.5 text-sm">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="font-medium text-amber-600">+{pointsEarned} {pointsEarned === 1 ? "point" : "points"}</span>
                    <span className="text-muted-foreground">· Total: {session.score}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">The word was:</p>
                <p className="text-2xl font-serif font-medium">{word.word}</p>
                <p className="text-sm text-muted-foreground mt-1">Streak reset · 0 points</p>
              </div>
            )}
            {isPractice && onNextWord && (
              <button type="button" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onNextWord() }} className="rounded-lg bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
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
                <button
                  type="button"
                  onClick={() => {
                    setIsComplete(true)
                    setPointsEarned(0)
                    setSession(prev => ({ ...prev, streak: 0, wordsAttempted: prev.wordsAttempted + 1 }))
                    onComplete?.({ correct: false, guesses: guesses.length, hintsUsed: hintsRevealed })
                  }}
                  className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors px-2 py-1 rounded border border-border/50 hover:border-border"
                >
                  give up
                </button>
              </div>
              <button type="submit" disabled={!currentGuess.trim() || isValidating} className="rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50">
                {isValidating ? "Checking..." : "Guess"}
              </button>
            </div>
          </form>
        )}

        {session.bestStreak > 1 && (
          <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-center gap-1.5">
            <Trophy className="h-3 w-3 text-muted-foreground/60" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Best streak this session: {session.bestStreak}</span>
          </div>
        )}
      </div>
    </div>
  )
}
