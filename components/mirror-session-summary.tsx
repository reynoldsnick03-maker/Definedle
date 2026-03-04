"use client"

import { Star, Flame, Zap, RotateCcw, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { WordHistoryEntry } from "@/components/mirror-game"

interface MirrorSessionSummaryProps {
  score: number
  wordsSolved: number
  bestMultiplier: number
  wordHistory: WordHistoryEntry[]
  reason: "failed" | "awful" | "complete"
  onPlayAgain: () => void
  onFlipBack: () => void
}

export function MirrorSessionSummary({ score, wordsSolved, bestMultiplier, wordHistory, reason, onPlayAgain, onFlipBack }: MirrorSessionSummaryProps) {
  const [showHistory, setShowHistory] = useState(false)

  const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  const rating = score === 276 ? "Perfect" :
    score >= 200 ? pick([
      "Suspiciously good",
      "Are you cheating?",
      "Vocabulary is not your weakness",
      "The dictionary fears you",
      "Save some words for the rest of us",
    ]) :
    score >= 140 ? pick([
      "Showing off now",
      "Genuinely impressive",
      "That's a proper score",
      "Sharp mind, sharper vocabulary",
      "You clearly read books",
    ]) :
    score >= 80 ? pick([
      "Solid grasp of words",
      "Not bad at all",
      "You know your way around a definition",
      "Respectable stuff",
      "More than passable",
    ]) :
    score >= 40 ? pick([
      "Dictionary adjacent",
      "Getting somewhere",
      "The basics are there",
      "A valiant effort",
      "Potential detected",
    ]) :
    score >= 15 ? pick([
      "You tried",
      "Room to grow",
      "Everyone starts somewhere",
      "The words were hard, probably",
      "Points were scored, technically",
    ]) :
    pick([
      "Keep practising",
      "The dictionary awaits",
      "A brave attempt",
      "Words are hard",
      "Tomorrow's another word",
    ])"

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className="rounded-xl border border-border bg-card p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">

        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-2">{reason === "complete" ? "Session Complete" : "Session Over"}</p>
          {reason === "awful" && <p className="text-xs text-red-500 mb-2">Three awful rounds in a row ended your session.</p>}
          {reason === "complete" && <p className="text-xs text-score-high mb-2">You completed all 15 words!</p>}
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="font-serif text-4xl font-light text-foreground">{score}</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">points</p>
          <p className="text-sm font-medium text-foreground/70">{rating}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Flame className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase tracking-widest font-medium">Words</span>
            </div>
            <span className="font-serif text-2xl font-light tabular-nums">{wordsSolved}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/30 px-4 py-3">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Zap className="h-3.5 w-3.5" />
              <span className="text-[10px] uppercase tracking-widest font-medium">Peak ×</span>
            </div>
            <span className="font-serif text-2xl font-light tabular-nums">×{bestMultiplier}</span>
          </div>
        </div>

        {/* Word history breakdown */}
        {wordHistory.length > 0 && (
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setShowHistory(h => !h)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors text-xs text-muted-foreground hover:text-foreground"
            >
              <span className="uppercase tracking-widest font-medium">Word breakdown</span>
              {showHistory ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>

            {showHistory && (
              <div className="mt-2 flex flex-col gap-1">
                {wordHistory.map((entry, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/20 text-sm">
                    <span className="font-medium capitalize">{entry.word}</span>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-amber-600 font-medium">+{entry.points} pts</span>
                      <span className={`font-medium tabular-nums ${entry.multDelta > 0 ? "text-score-high" : entry.multDelta < 0 ? "text-score-low" : "text-muted-foreground"}`}>
                        {entry.multDelta > 0 ? `▲ +${entry.multDelta}×` : entry.multDelta < 0 ? `▼ ${entry.multDelta}×` : "— 0×"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onPlayAgain}
            className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <RotateCcw className="h-4 w-4" />
            Play again
          </button>
          <button
            type="button"
            onClick={onFlipBack}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to practice
          </button>
        </div>
      </div>
    </div>
  )
}
