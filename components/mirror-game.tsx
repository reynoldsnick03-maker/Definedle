"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import type { DailyWord } from "@/lib/game-data"
import { stemMatch, areSynonyms } from "@/lib/scoring"

interface MirrorGameProps {
  word: DailyWord
  onFlipBack: () => void
  onNextWord?: () => void
  isPractice?: boolean
}

interface Guess {
  word: string
  similarity: number // 0-100
}

// Calculate similarity between guess and target word
function calculateSimilarity(guess: string, target: string, synonyms?: string[]): number {
  const g = guess.toLowerCase().trim()
  const t = target.toLowerCase()
  
  // Exact match
  if (g === t) return 100
  
  // Check synonyms for high match
  if (synonyms?.some(s => s.toLowerCase() === g)) return 85
  
  // Check if it's a synonym via our synonym clusters
  if (areSynonyms(g, t)) return 80
  
  // Stem match (e.g., "running" matches "run")
  if (stemMatch(g, t)) return 90
  
  // Levenshtein-based similarity for close spellings
  const distance = levenshtein(g, t)
  const maxLen = Math.max(g.length, t.length)
  const similarity = Math.round((1 - distance / maxLen) * 100)
  
  // Check partial synonym match
  if (synonyms?.some(s => stemMatch(g, s.toLowerCase()))) {
    return Math.max(similarity, 70)
  }
  
  return Math.max(0, similarity)
}

function levenshtein(a: string, b: string): number {
  const matrix: number[][] = []
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }
  return matrix[b.length][a.length]
}

// Get color based on similarity score
function getSimilarityColor(similarity: number): string {
  if (similarity >= 100) return "bg-score-high text-white"
  if (similarity >= 80) return "bg-emerald-400 text-white"
  if (similarity >= 60) return "bg-yellow-400 text-foreground"
  if (similarity >= 40) return "bg-orange-400 text-white"
  if (similarity >= 20) return "bg-red-400 text-white"
  return "bg-red-600 text-white"
}

function getSimilarityBorderColor(similarity: number): string {
  if (similarity >= 100) return "border-score-high"
  if (similarity >= 80) return "border-emerald-400"
  if (similarity >= 60) return "border-yellow-400"
  if (similarity >= 40) return "border-orange-400"
  if (similarity >= 20) return "border-red-400"
  return "border-red-600"
}

export function MirrorGame({ word, onFlipBack, onNextWord, isPractice }: MirrorGameProps) {
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const maxGuesses = 3
  const remainingGuesses = maxGuesses - guesses.length

  // Reset state when word changes
  useEffect(() => {
    setGuesses([])
    setCurrentGuess("")
    setIsComplete(false)
    setIsCorrect(false)
  }, [word.word])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const trimmedGuess = currentGuess.trim()
    if (!trimmedGuess || isComplete) return
    
    const gLower = trimmedGuess.toLowerCase()
    const tLower = word.word.toLowerCase()
    
    // Check for exact or stem match (correct answer)
    const isExactMatch = gLower === tLower || stemMatch(gLower, tLower)
    const similarity = isExactMatch ? 100 : calculateSimilarity(trimmedGuess, word.word, word.synonyms)
    
    const newGuess: Guess = { word: trimmedGuess, similarity }
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses)
    setCurrentGuess("")
    
    if (isExactMatch) {
      // Correct!
      setIsCorrect(true)
      setIsComplete(true)
    } else if (newGuesses.length >= maxGuesses) {
      // Out of guesses
      setIsComplete(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    } else {
      // Wrong - shake
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
  }, [currentGuess, guesses, isComplete, word.word, word.synonyms])

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div 
        className={`rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 transition-transform ${
          isShaking ? "animate-shake" : ""
        }`}
      >
        {/* Flip back button */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
            Mirror Mode
          </span>
          <button
            type="button"
            onClick={onFlipBack}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Flip back to normal mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6"/>
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
            </svg>
            Flip back
          </button>
        </div>

        {/* Definition display */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            {word.partOfSpeech}
          </p>
          <p className="text-lg leading-relaxed text-foreground font-serif italic">
            &ldquo;{word.definition}&rdquo;
          </p>
          
          {/* Hints - always show word length, reveal first letter after first wrong guess */}
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="px-2 py-1 rounded bg-muted/50">
              {word.word.length} letters
            </span>
            {guesses.length >= 1 && !isCorrect && (
              <span className="px-2 py-1 rounded bg-muted/50">
                Starts with &ldquo;{word.word[0].toUpperCase()}&rdquo;
              </span>
            )}
            {guesses.length >= 2 && !isCorrect && (
              <span className="px-2 py-1 rounded bg-muted/50">
                Ends with &ldquo;{word.word[word.word.length - 1]}&rdquo;
              </span>
            )}
          </div>
        </div>

        <div className="my-6 h-px bg-border" aria-hidden="true" />

        {/* Guess history */}
        {guesses.length > 0 && (
          <div className="mb-5 space-y-2">
            {guesses.map((guess, i) => (
              <div
                key={i}
                className={`flex items-center justify-between rounded-lg border-2 px-4 py-2.5 ${getSimilarityBorderColor(guess.similarity)}`}
              >
                <span className="font-medium">{guess.word}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${getSimilarityColor(guess.similarity)}`}>
                  {guess.similarity >= 100 ? "Correct!" : `${guess.similarity}%`}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Input or result */}
        {isComplete ? (
          <div className="text-center">
            {isCorrect ? (
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-score-high/10 px-4 py-2 text-score-high">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span className="font-semibold">
                    Got it in {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}!
                  </span>
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <p className="text-muted-foreground mb-2">The word was:</p>
                <p className="text-2xl font-serif font-medium text-foreground">{word.word}</p>
              </div>
            )}
            
            {isPractice && onNextWord && (
              <button
                type="button"
                onClick={onNextWord}
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
                onChange={(e) => setCurrentGuess(e.target.value)}
                placeholder="Type your guess..."
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-base placeholder:text-muted-foreground/60 focus:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {remainingGuesses} {remainingGuesses === 1 ? "guess" : "guesses"} remaining
              </span>
              <button
                type="submit"
                disabled={!currentGuess.trim()}
                className="rounded-lg bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                Guess
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
