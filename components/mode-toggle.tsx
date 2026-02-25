"use client"

import { useEffect, useState } from "react"
import { Check } from "lucide-react"
import type { GameMode } from "@/lib/game-data"
import { formatDateKey } from "@/lib/history"

export type TabMode = "daily" | "practice"

interface ModeToggleProps {
  tab: TabMode
  difficulty: GameMode
  onTabChange: (tab: TabMode) => void
  onDifficultyChange: (mode: GameMode) => void
}

function hasPlayedToday(mode: GameMode): boolean {
  if (typeof document === "undefined") return false
  const cookieName = mode === "hard" ? "definedle-today-hard" : "definedle-today"
  const match = document.cookie.match(new RegExp(`(?:^|; )${cookieName}=([^;]*)`))
  if (!match) return false
  try {
    const parsed = JSON.parse(decodeURIComponent(match[1]))
    return parsed.date === formatDateKey(new Date())
  } catch {
    return false
  }
}

export function ModeToggle({ tab, difficulty, onTabChange, onDifficultyChange }: ModeToggleProps) {
  const [easyDone, setEasyDone] = useState(false)
  const [hardDone, setHardDone] = useState(false)

  useEffect(() => {
    setEasyDone(hasPlayedToday("easy"))
    setHardDone(hasPlayedToday("hard"))
  }, [tab, difficulty])

  return (
    <div className="mb-5 flex flex-col items-center gap-2.5 w-full max-w-md px-5">
      {/* Primary row: Daily / Practice */}
      <div className="inline-flex items-center rounded-lg border border-border bg-muted/50 p-0.5">
        <button
          type="button"
          onClick={() => onTabChange("daily")}
          className={`relative flex items-center gap-1.5 rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[36px] ${
            tab === "daily"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "daily"}
        >
          Daily
        </button>
        <button
          type="button"
          onClick={() => onTabChange("practice")}
          className={`relative flex items-center gap-1.5 rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[36px] ${
            tab === "practice"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={tab === "practice"}
        >
          Practice
        </button>
      </div>

      {/* Secondary row: Easy / Hard */}
      <div className="inline-flex items-center gap-1">
        <button
          type="button"
          onClick={() => onDifficultyChange("easy")}
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-200 min-h-[28px] ${
            difficulty === "easy"
              ? "bg-foreground/10 text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={difficulty === "easy"}
        >
          Easy
          {tab === "daily" && easyDone && (
            <Check className="h-3 w-3 text-emerald-500" aria-label="Completed" />
          )}
        </button>
        <span className="text-muted-foreground/40 text-[10px]" aria-hidden="true">/</span>
        <button
          type="button"
          onClick={() => onDifficultyChange("hard")}
          className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide transition-all duration-200 min-h-[28px] ${
            difficulty === "hard"
              ? "bg-foreground/10 text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-pressed={difficulty === "hard"}
        >
          Hard
          {tab === "daily" && hardDone && (
            <Check className="h-3 w-3 text-emerald-500" aria-label="Completed" />
          )}
        </button>
      </div>
    </div>
  )
}
