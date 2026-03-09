"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"

interface WordEntry {
  word: string
  score: number
  date: string
  difficulty: string
  isPractice: boolean
}

interface Props {
  open: boolean
  onClose: () => void
  isDark?: boolean
}

export function DefinedleWordHistoryPanel({ open, onClose, isDark = false }: Props) {
  const [entries, setEntries] = useState<WordEntry[]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (!open) return
    try {
      const raw = localStorage.getItem("definedle-word-history")
      if (!raw) return
      const history: WordEntry[] = JSON.parse(raw)
      // Newest first
      setEntries([...history].reverse())
    } catch {}
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open, onClose])

  if (!open) return null

  const filtered = query.trim()
    ? entries.filter(e => e.word.toLowerCase().includes(query.trim().toLowerCase()))
    : entries

  const scoreColor = (s: number) =>
    s >= 70
      ? (isDark ? "text-emerald-400" : "text-score-high")
      : s >= 40
      ? (isDark ? "text-amber-400" : "text-amber-600")
      : (isDark ? "text-red-400" : "text-red-500")

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`relative z-10 w-full max-w-sm rounded-t-2xl sm:rounded-2xl border shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300 flex flex-col max-h-[80vh] ${isDark ? "border-[#2a2926] bg-[#1c1b19]" : "border-border bg-card"}`}>

        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
          <h2 className={`font-serif text-xl font-normal ${isDark ? "text-white" : "text-foreground"}`}>
            Word History
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 pb-3 flex-shrink-0">
          <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${isDark ? "border-[#2a2926] bg-[#111110]" : "border-border bg-background"}`}>
            <Search className={`h-3.5 w-3.5 flex-shrink-0 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search words…"
              className={`flex-1 bg-transparent text-sm focus:outline-none ${isDark ? "text-white placeholder:text-[#4a4845]" : "text-foreground placeholder:text-muted-foreground/60"}`}
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Count */}
        <div className="px-6 pb-2 flex-shrink-0">
          <p className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
            {filtered.length === 0
              ? "No words yet"
              : `${filtered.length} word${filtered.length !== 1 ? "s" : ""}${query.trim() ? " found" : " played"}`}
          </p>
        </div>

        {/* List */}
        <div className="overflow-y-auto flex-1 px-6 pb-6">
          {filtered.length === 0 ? (
            <p className={`text-sm text-center py-8 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
              {query.trim() ? "No matching words" : "Play your first game to see words here."}
            </p>
          ) : (
            <div className="space-y-1">
              {filtered.map((entry, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 ${isDark ? "hover:bg-[#111110]" : "hover:bg-muted/40"} transition-colors`}
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className={`text-sm font-medium truncate ${isDark ? "text-[#d4cfc8]" : "text-foreground"}`}>
                      {entry.word}
                    </span>
                    <span className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
                      {entry.date}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold tabular-nums ml-3 flex-shrink-0 ${scoreColor(entry.score)}`}>
                    {entry.score}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
