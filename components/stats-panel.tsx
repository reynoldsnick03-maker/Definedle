"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Flame, Trophy, Hash, Star, Zap, ChevronDown, ChevronUp } from "lucide-react"
import type { GameHistory } from "@/lib/history"
import { getPlayerId } from "@/lib/player-id"

interface StatsPanelProps {
  open: boolean
  onClose: () => void
}

interface WordHistoryEntry {
  word: string
  points: number
  multDelta: number
  guesses: number
  hintsUsed: number
}

interface MirrorSession {
  id: string
  session_score: number
  best_streak: number
  words_solved: number
  words_attempted: number
  difficulty: string
  played_at: string
  word_history?: WordHistoryEntry[]
}

interface MirrorHighScores {
  topScores: MirrorSession[]
  topStreaks: MirrorSession[]
}

type StatsTab = "daily" | "mirror"

function SessionRow({ session, rank }: { session: MirrorSession; rank: number }) {
  const [expanded, setExpanded] = useState(false)
  const hasHistory = session.word_history && session.word_history.length > 0

  function formatDate(isoStr: string) {
    const d = new Date(isoStr)
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`
  }

  return (
    <div className="rounded-lg bg-muted/30 overflow-hidden">
      <button
        type="button"
        onClick={() => hasHistory && setExpanded(e => !e)}
        className={`w-full flex items-center justify-between px-3 py-2 ${hasHistory ? "cursor-pointer hover:bg-muted/50 transition-colors" : "cursor-default"}`}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-xs tabular-nums text-muted-foreground w-4 text-right">{rank}.</span>
          <span className="text-sm font-medium tabular-nums">{session.session_score} pts</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{session.words_solved} words</span>
          <span>{formatDate(session.played_at)}</span>
          {hasHistory && (
            expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />
          )}
        </div>
      </button>

      {expanded && hasHistory && (
        <div className="border-t border-border/50 px-3 py-2 flex flex-col gap-1">
          {session.word_history!.map((entry, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-0.5">
              <span className="capitalize text-foreground font-medium">{entry.word}</span>
              <div className="flex items-center gap-3 text-muted-foreground">
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
  )
}

export function StatsPanel({ open, onClose }: StatsPanelProps) {
  const [activeTab, setActiveTab] = useState<StatsTab>("daily")
  const [stats, setStats] = useState<GameHistory | null>(null)
  const [mirrorScores, setMirrorScores] = useState<MirrorHighScores | null>(null)
  const [mirrorLoading, setMirrorLoading] = useState(false)

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/history")
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch {}
  }, [])

  const fetchMirrorScores = useCallback(async () => {
    setMirrorLoading(true)
    try {
      const playerId = getPlayerId()
      if (!playerId) return
      const res = await fetch(`/api/mirror-sessions?player_id=${encodeURIComponent(playerId)}`)
      if (res.ok) {
        const data = await res.json()
        setMirrorScores(data)
      }
    } catch {} finally {
      setMirrorLoading(false)
    }
  }, [])

  useEffect(() => {
    if (open) {
      fetchStats()
      fetchMirrorScores()
    }
  }, [open, fetchStats, fetchMirrorScores])

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
      ? Math.round(stats.entries.reduce((sum, e) => sum + e.s, 0) / stats.played)
      : 0

  function formatDate(isoStr: string) {
    const d = new Date(isoStr)
    return `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-sm max-h-[85dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <h2 className="font-serif text-xl font-normal text-foreground">Your Stats</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close stats"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pb-2 shrink-0">
          <div className="flex rounded-lg bg-muted/50 p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("daily")}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === "daily"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Hash className="h-3 w-3" />
              Daily
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mirror")}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                activeTab === "mirror"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="h-3 w-3" />
              Mirror
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto overscroll-contain px-6 pb-6 flex flex-col gap-6">

          {/* ── DAILY TAB ── */}
          {activeTab === "daily" && (
            <>
              {!stats || stats.played === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Play your first daily game to start tracking stats.
                </p>
              ) : (
                <>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Hash className="h-3.5 w-3.5" />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Played</span>
                      </div>
                      <span className="font-serif text-2xl font-light tabular-nums text-foreground">{stats.played}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Flame className="h-3.5 w-3.5" />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Streak</span>
                      </div>
                      <span className="font-serif text-2xl font-light tabular-nums text-foreground">{stats.streak}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Trophy className="h-3.5 w-3.5" />
                        <span className="text-[10px] uppercase tracking-widest font-medium">Best</span>
                      </div>
                      <span className="font-serif text-2xl font-light tabular-nums text-foreground">{stats.best}</span>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Average score</span>
                    <span className="font-serif text-lg tabular-nums text-foreground">{avgScore}</span>
                  </div>

                  {last7.length > 0 && (
                    <div className="flex flex-col gap-3">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Recent games</span>
                      <div className="flex items-end gap-1.5 h-24">
                        {last7.map((entry) => {
                          const height = Math.max(entry.s, 4)
                          const color = entry.s >= 70 ? "bg-score-high" : entry.s >= 40 ? "bg-score-mid" : "bg-score-low"
                          return (
                            <div key={entry.d} className="flex flex-1 flex-col items-center gap-1">
                              <span className="text-[9px] tabular-nums text-muted-foreground font-medium">{entry.s}</span>
                              <div className="w-full flex items-end justify-center h-16">
                                <div
                                  className={`w-full max-w-5 rounded-sm ${color} transition-all duration-500`}
                                  style={{ height: `${(height / 100) * 64}px` }}
                                />
                              </div>
                              <span className="text-[9px] tabular-nums text-muted-foreground">{entry.d.slice(5)}</span>
                              <span className={`text-[8px] font-medium uppercase tracking-wider ${(entry.m || "easy") === "hard" ? "text-score-low" : "text-muted-foreground/60"}`}>
                                {(entry.m || "easy") === "hard" ? "hard" : "easy"}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {/* ── MIRROR TAB ── */}
          {activeTab === "mirror" && (
            <>
              {mirrorLoading ? (
                <p className="text-sm text-muted-foreground text-center py-8">Loading...</p>
              ) : !mirrorScores || mirrorScores.topScores.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Complete a Mirror Mode session to see your high scores here.
                </p>
              ) : (
                <>
                  {(() => {
                    const easySessions = mirrorScores.topScores.filter(s => s.difficulty === "easy").slice(0, 5)
                    const hardSessions = mirrorScores.topScores.filter(s => s.difficulty === "hard").slice(0, 5)
                    const hasHistory = mirrorScores.topScores.some(s => s.word_history && s.word_history.length > 0)
                    return (
                      <>
                        {easySessions.length > 0 && (
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-3.5 w-3.5 text-amber-500" />
                              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Easy — Best Sessions</span>
                              {hasHistory && <span className="text-[10px] text-muted-foreground/60 ml-auto">tap to expand</span>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                              {easySessions.map((session, i) => (
                                <SessionRow key={session.id} session={session} rank={i + 1} />
                              ))}
                            </div>
                          </div>
                        )}
                        {hardSessions.length > 0 && (
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <Star className="h-3.5 w-3.5 text-amber-500" />
                              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Hard — Best Sessions</span>
                              {hasHistory && <span className="text-[10px] text-muted-foreground/60 ml-auto">tap to expand</span>}
                            </div>
                            <div className="flex flex-col gap-1.5">
                              {hardSessions.map((session, i) => (
                                <SessionRow key={session.id} session={session} rank={i + 1} />
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )
                  })()}

                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
