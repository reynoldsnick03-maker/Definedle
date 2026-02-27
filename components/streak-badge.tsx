"use client"

import { Flame } from "lucide-react"

interface StreakBadgeProps {
  streak: number
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  if (streak <= 0) return null

  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-score-high/10 border border-score-high/20 mb-2"
      aria-label={`${streak} day streak`}
    >
      <Flame className="h-4 w-4 text-score-high" aria-hidden="true" />
      <span className="text-sm font-medium tabular-nums text-score-high">
        Day {streak}
      </span>
    </div>
  )
}
