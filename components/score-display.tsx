"use client"

import { useEffect, useState } from "react"

interface ScoreDisplayProps {
  score: number
}

function getScoreColor(score: number): string {
  if (score >= 70) return "bg-score-high"
  if (score >= 40) return "bg-score-mid"
  return "bg-score-low"
}

function getScoreTextColor(score: number): string {
  if (score >= 70) return "text-score-high"
  if (score >= 40) return "text-score-mid"
  return "text-score-low"
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    const duration = 1200
    const steps = 60
    const increment = score / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), score)
      setAnimatedScore(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    // Delay bar animation slightly
    const barTimer = setTimeout(() => {
      setBarWidth(score)
    }, 200)

    return () => {
      clearInterval(timer)
      clearTimeout(barTimer)
    }
  }, [score])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-baseline gap-1.5">
        <span
          className={`font-serif text-6xl font-light tabular-nums tracking-tight ${getScoreTextColor(score)}`}
        >
          {animatedScore}
        </span>
        <span className="text-lg text-muted-foreground font-light">
          / 100
        </span>
      </div>
      <div
        className="h-1.5 w-full max-w-xs rounded-full bg-muted overflow-hidden"
        role="progressbar"
        aria-valuenow={score}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Score: ${score} out of 100`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${getScoreColor(score)}`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  )
}
