"use client"

import { useState, useEffect } from "react"
import { Flame } from "lucide-react"

export function StreakBadge() {
  const [streak, setStreak] = useState<number | null>(null)

  useEffect(() => {
    async function fetchStreak() {
      try {
        const res = await fetch("/api/history")
        if (res.ok) {
          const data = await res.json()
          if (data && typeof data.streak === "number" && data.streak > 0) {
            setStreak(data.streak)
          }
        }
      } catch {
        // Ignore
      }
    }
    fetchStreak()
  }, [])

  if (streak === null || streak === 0) return null

  return (
    <div
      className="flex items-center gap-1 rounded-full bg-score-high/10 px-2 py-0.5"
      aria-label={`${streak} day streak`}
    >
      <Flame className="h-3 w-3 text-score-high" aria-hidden="true" />
      <span className="text-xs font-medium tabular-nums text-score-high">
        {streak}
      </span>
    </div>
  )
}
