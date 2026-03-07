"use client"

import { useState, useEffect } from "react"

interface HistoryEntry {
  word: string
  points: number
  guesses: number
  hintsUsed: number
  tier: string
  bestGuess?: string
  playedAt?: number
}

interface WordStat {
  word: string
  count: number
  lastPlayed: number
  avgPoints: number
  solveRate: number
}

interface Props {
  open: boolean
  onClose: () => void
  isDark?: boolean
}

export function BlitzWordHistoryPanel({ open, onClose, isDark = false }: Props) {
  const [stats, setStats] = useState<WordStat[]>([])
  const [sortBy, setSortBy] = useState<"count" | "lastPlayed" | "word">("count")
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!open) return
    try {
      const raw = localStorage.getItem("definedle-blitz-word-history")
      if (!raw) return
      const history: HistoryEntry[] = JSON.parse(raw)
      setTotal(history.length)

      // Aggregate per word
      const map = new Map<string, { count: number; lastPlayed: number; totalPoints: number; solved: number }>()
      for (const entry of history) {
        const existing = map.get(entry.word) ?? { count: 0, lastPlayed: 0, totalPoints: 0, solved: 0 }
        map.set(entry.word, {
          count: existing.count + 1,
          lastPlayed: Math.max(existing.lastPlayed, entry.playedAt ?? 0),
          totalPoints: existing.totalPoints + entry.points,
          solved: existing.solved + (entry.guesses > 0 && entry.tier !== "failed" && entry.tier !== "awful" ? 1 : 0),
        })
      }

      const wordStats: WordStat[] = Array.from(map.entries()).map(([word, s]) => ({
        word,
        count: s.count,
        lastPlayed: s.lastPlayed,
        avgPoints: s.count > 0 ? Math.round(s.totalPoints / s.count) : 0,
        solveRate: s.count > 0 ? Math.round((s.solved / s.count) * 100) : 0,
      }))

      setStats(wordStats)
    } catch {}
  }, [open])

  const sorted = [...stats].sort((a, b) => {
    if (sortBy === "count") return b.count - a.count
    if (sortBy === "lastPlayed") return b.lastPlayed - a.lastPlayed
    return a.word.localeCompare(b.word)
  })

  const formatDate = (ts: number) => {
    if (!ts) return "—"
    return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className={`relative w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl flex flex-col max-h-[85dvh] ${isDark ? "bg-[#1c1b19] border border-[#2a2926]" : "bg-card border border-border"}`}>

        {/* Header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${isDark ? "border-[#2a2926]" : "border-border"}`}>
          <div>
            <h2 className={`font-semibold text-base ${isDark ? "text-white" : "text-foreground"}`}>Word History</h2>
            <p className={`text-xs mt-0.5 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
              {total} plays · {stats.length} unique words
            </p>
          </div>
          <button onClick={onClose} className={`text-xs px-3 py-1.5 rounded-lg ${isDark ? "text-[#6b6560] hover:text-white" : "text-muted-foreground hover:text-foreground"}`}>
            Close
          </button>
        </div>

        {/* Sort controls */}
        <div className={`flex gap-2 px-5 py-3 border-b ${isDark ? "border-[#2a2926]" : "border-border"}`}>
          <span className={`text-xs mr-1 self-center ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Sort:</span>
          {(["count", "lastPlayed", "word"] as const).map(s => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                sortBy === s
                  ? isDark ? "bg-amber-500/20 border-amber-500/40 text-amber-400" : "bg-foreground text-background border-foreground"
                  : isDark ? "border-[#2a2926] text-[#6b6560] hover:text-white" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {s === "count" ? "Most played" : s === "lastPlayed" ? "Recent" : "A–Z"}
            </button>
          ))}
        </div>

        {/* Word list */}
        <div className="overflow-y-auto flex-1 px-5 py-3 space-y-1.5">
          {sorted.length === 0 ? (
            <p className={`text-sm text-center py-8 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>No words played yet</p>
          ) : sorted.map(w => (
            <div key={w.word} className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${isDark ? "bg-[#111110]" : "bg-muted/40"}`}>
              <div className="flex items-center gap-3">
                <span className={`font-medium text-sm ${isDark ? "text-white" : "text-foreground"}`}>{w.word}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded font-bold ${
                  w.count >= 5 ? "bg-red-500/20 text-red-400" :
                  w.count >= 3 ? "bg-amber-500/20 text-amber-500" :
                  isDark ? "bg-[#2a2926] text-[#6b6560]" : "bg-muted text-muted-foreground"
                }`}>×{w.count}</span>
              </div>
              <div className={`flex items-center gap-3 text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
                <span>{w.solveRate}% solved</span>
                <span>{formatDate(w.lastPlayed)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer — clear button */}
        <div className={`px-5 py-3 border-t ${isDark ? "border-[#2a2926]" : "border-border"}`}>
          <button
            onClick={() => {
              if (confirm("Clear all word history? This can't be undone.")) {
                localStorage.removeItem("definedle-blitz-word-history")
                setStats([])
                setTotal(0)
              }
            }}
            className={`text-xs ${isDark ? "text-red-400/60 hover:text-red-400" : "text-red-400/60 hover:text-red-500"} transition-colors`}
          >
            Clear history
          </button>
        </div>
      </div>
    </div>
  )
}
