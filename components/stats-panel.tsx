"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Flame, Trophy, Hash } from "lucide-react"
import type { GameHistory } from "@/lib/history"

interface StatsPanelProps {
  open: boolean
  onClose: () => void
}

export function StatsPanel({ open, onClose }: StatsPanelProps) {
  const [stats, setStats] = useState<GameHistory | null>(null)

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/history")
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch {
      // Ignore
    }
  }, [])

  useEffect(() => {
    if (open) {
      fetchStats()
    }
  }, [open, fetchStats])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  const last7 = stats?.entries.slice(-7) ?? []
  const avgScore =
    stats && stats.played > 0
      ? Math.round(
          stats.entries.reduce((sum, e) => sum + e.s, 0) / stats.played
        )
      : 0

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm rounded-t-2xl sm:rounded-2xl border border-border bg-card p-6 shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl font-normal text-foreground">
            Your Stats
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close stats"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!stats || stats.played === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            Play your first game to start tracking stats.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Big numbers */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Hash className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    Played
                  </span>
                </div>
                <span className="font-serif text-2xl font-light tabular-nums text-foreground">
                  {stats.played}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Flame className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    Streak
                  </span>
                </div>
                <span className="font-serif text-2xl font-light tabular-nums text-foreground">
                  {stats.streak}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-widest font-medium">
                    Best
                  </span>
                </div>
                <span className="font-serif text-2xl font-light tabular-nums text-foreground">
                  {stats.best}
                </span>
              </div>
            </div>

            <div className="h-px bg-border" aria-hidden="true" />

            {/* Average */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Average score
              </span>
              <span className="font-serif text-lg tabular-nums text-foreground">
                {avgScore}
              </span>
            </div>

            {/* Recent games bar chart */}
            {last7.length > 0 && (
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  Recent games
                </span>
                <div className="flex items-end gap-1.5 h-24">
                  {last7.map((entry) => {
                    const height = Math.max(entry.s, 4)
                    const color =
                      entry.s >= 70
                        ? "bg-score-high"
                        : entry.s >= 40
                          ? "bg-score-mid"
                          : "bg-score-low"
                    return (
                      <div
                        key={entry.d}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <span className="text-[9px] tabular-nums text-muted-foreground font-medium">
                          {entry.s}
                        </span>
                        <div className="w-full flex items-end justify-center h-16">
                          <div
                            className={`w-full max-w-5 rounded-sm ${color} transition-all duration-500`}
                            style={{ height: `${(height / 100) * 64}px` }}
                          />
                        </div>
                        <span className="text-[9px] tabular-nums text-muted-foreground">
                          {entry.d.slice(5)}
                        </span>
                        <span className={`text-[8px] font-medium uppercase tracking-wider ${
                          (entry.m || "easy") === "hard"
                            ? "text-score-low"
                            : "text-muted-foreground/60"
                        }`}>
                          {(entry.m || "easy") === "hard" ? "hard" : "easy"}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
