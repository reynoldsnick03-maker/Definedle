"use client"

import { Star, Flame, Zap, RotateCcw } from "lucide-react"

interface MirrorSessionSummaryProps {
  score: number
  wordsSolved: number
  bestMultiplier: number
  onPlayAgain: () => void
  onFlipBack: () => void
}

export function MirrorSessionSummary({ score, wordsSolved, bestMultiplier, onPlayAgain, onFlipBack }: MirrorSessionSummaryProps) {
  const rating =
    score >= 50 ? "Legendary" :
    score >= 30 ? "Expert" :
    score >= 15 ? "Solid" :
    score >= 5 ? "Getting there" :
    "Keep practising"

  return (
    <div className="mx-auto w-full max-w-md px-5">
      <div className="rounded-xl border border-border bg-card p-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-2">Session Over</p>
          <div className="flex items-center justify-center gap-2 mb-1">
            <Star className="h-5 w-5 text-amber-500" />
            <span className="font-serif text-4xl font-light text-foreground">{score}</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">points</p>
          <p className="text-sm font-medium text-foreground/70">{rating}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
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
