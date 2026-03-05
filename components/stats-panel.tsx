"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Flame, Trophy, Hash, Zap, Star } from "lucide-react"
import type { GameHistory } from "@/lib/history"
import { getPlayerId } from "@/lib/player-id"

interface StatsPanelProps {
  open: boolean
  onClose: () => void
  blitzMode?: boolean
  isDark?: boolean
}

interface BlitzSession {
  session_score: number
  words_solved: number
  best_streak: number
  difficulty: string
  created_at: string
}

export function StatsPanel({ open, onClose, blitzMode = false, isDark = false }: StatsPanelProps) {
  const [activeTab, setActiveTab] = useState<"definedle" | "blitz">(blitzMode ? "blitz" : "definedle")
  const [stats, setStats] = useState<GameHistory | null>(null)
  const [blitzEasy, setBlitzEasy] = useState<BlitzSession[]>([])
  const [blitzHard, setBlitzHard] = useState<BlitzSession[]>([])

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/history")
      if (res.ok) setStats(await res.json())
    } catch {}
  }, [])

  const fetchBlitzStats = useCallback(async () => {
    try {
      const playerId = getPlayerId()
      if (!playerId) return
      const res = await fetch(`/api/mirror-sessions?player_id=${encodeURIComponent(playerId)}`)
      if (res.ok) {
        const data = await res.json()
        const sessions: BlitzSession[] = data.sessions || []
        setBlitzEasy(sessions.filter(s => s.difficulty === "easy").sort((a, b) => b.session_score - a.session_score).slice(0, 5))
        setBlitzHard(sessions.filter(s => s.difficulty === "hard").sort((a, b) => b.session_score - a.session_score).slice(0, 5))
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (open) { fetchStats(); fetchBlitzStats() }
  }, [open, fetchStats, fetchBlitzStats])

  useEffect(() => {
    if (blitzMode) setActiveTab("blitz")
  }, [blitzMode])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  const last7 = stats?.entries.slice(-7) ?? []
  const avgScore = stats && stats.played > 0
    ? Math.round(stats.entries.reduce((sum, e) => sum + e.s, 0) / stats.played) : 0
  const perfectCount = stats ? stats.entries.filter(e => e.s >= 100).length : 0
  const blitzAvgEasy = blitzEasy.length > 0
    ? Math.round(blitzEasy.reduce((s, b) => s + b.session_score, 0) / blitzEasy.length) : 0
  const blitzBestMultEasy = blitzEasy.length > 0
    ? Math.max(...blitzEasy.map(b => b.best_streak)) : 0
  const blitzAvgHard = blitzHard.length > 0
    ? Math.round(blitzHard.reduce((s, b) => s + b.session_score, 0) / blitzHard.length) : 0
  const blitzFlawlessEasy = blitzEasy.filter(s => s.words_solved >= 15).length
  const blitzFlawlessHard = blitzHard.filter(s => s.words_solved >= 15).length
  const allBlitzSessions = [...blitzEasy, ...blitzHard]
  const blitzTotalSessions = allBlitzSessions.length
  const blitzBestScore = allBlitzSessions.length > 0 ? Math.max(...allBlitzSessions.map(s => s.session_score)) : 0

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200" onClick={onClose} aria-hidden="true" />
      <div className={`relative z-10 w-full max-w-sm max-h-[85dvh] sm:max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300 ${isDark ? "bg-[#1c1b19] border-[#2a2926]" : "bg-card border-border"}`}>

        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <h2 className={`font-serif text-xl font-normal ${isDark ? "text-white" : "text-foreground"}`}>Your Stats</h2>
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Close stats">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 pb-4 shrink-0">
          <div className={`inline-flex w-full items-center rounded-lg border p-0.5 ${isDark ? "bg-[#111110] border-[#2a2926]" : "bg-muted/50 border-border"}`}>
            <button type="button" onClick={() => setActiveTab("definedle")} className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${activeTab === "definedle" ? (isDark ? "bg-[#2a2926] text-white shadow-sm" : "bg-card text-foreground shadow-sm") : (isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground")}`}>
              # Definedle
            </button>
            <button type="button" onClick={() => setActiveTab("blitz")} className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${activeTab === "blitz" ? (isDark ? "bg-[#2a2926] text-amber-400 shadow-sm" : "bg-card text-amber-500 shadow-sm") : (isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground")}`}>
              ⚡ Blitz
            </button>
          </div>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 pb-6 flex flex-col gap-6">

          {activeTab === "definedle" && (
            <>
              {!stats || stats.played === 0 ? (
                <p className={`text-sm text-center py-8 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Play your first game to start tracking stats.</p>
              ) : (
                <>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { icon: <Hash className="h-3.5 w-3.5" />, label: "Played", value: stats.played },
                      { icon: <Flame className="h-3.5 w-3.5" />, label: "Streak", value: stats.streak },
                      { icon: <Trophy className="h-3.5 w-3.5" />, label: "Best", value: stats.best },
                      { icon: <Star className="h-3.5 w-3.5" />, label: "100s", value: perfectCount },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className={`flex items-center gap-1.5 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{icon}<span className="text-[10px] uppercase tracking-widest font-medium">{label}</span></div>
                        <span className={`font-serif text-2xl font-light tabular-nums ${isDark ? "text-white" : "text-foreground"}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`h-px ${isDark ? "bg-[#2a2926]" : "bg-border"}`} />
                  <div className="flex items-center justify-between">
                    <span className={`text-xs uppercase tracking-widest font-medium ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Average score</span>
                    <span className={`font-serif text-lg tabular-nums ${isDark ? "text-white" : ""}`}>{avgScore}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className={`text-xs uppercase tracking-widest font-medium ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Recent games</span>
                    {last7.length === 0 ? (
                      <p className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>No recent games yet.</p>
                    ) : (
                      <div className="flex items-end gap-1.5 h-24">
                        {last7.map((entry) => {
                          const heightPx = Math.max((entry.s / 100) * 64, 3)
                          const barColor = entry.s >= 70 ? "oklch(0.55 0.12 155)" : entry.s >= 40 ? "oklch(0.65 0.15 75)" : "oklch(0.55 0.18 30)"
                          const isHard = (entry.m || "easy") === "hard"
                          return (
                            <div key={entry.d} className="flex flex-1 flex-col items-center gap-1">
                              <span className={`text-[9px] tabular-nums font-medium ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{entry.s}</span>
                              <div className="w-full flex items-end justify-center h-16">
                                <div
                                  className="w-full max-w-5 rounded-sm transition-all duration-500"
                                  style={{ height: `${heightPx}px`, backgroundColor: barColor }}
                                />
                              </div>
                              <span className={`text-[9px] tabular-nums ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{entry.d.slice(5)}</span>
                              <span className={`text-[8px] font-medium uppercase tracking-wider ${isHard ? "text-orange-400" : isDark ? "text-[#4a4845]" : "text-muted-foreground/60"}`}>
                                {isHard ? "hard" : "easy"}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          )}

          {activeTab === "blitz" && (
            <>
              {blitzEasy.length === 0 && blitzHard.length === 0 ? (
                <p className={`text-sm text-center py-8 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Complete a Blitz session to start tracking stats.</p>
              ) : (
                <>
                  {blitzEasy.length > 0 && (
                    <>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        {[
                          { icon: <Hash className="h-3.5 w-3.5" />, label: "Sessions", value: blitzTotalSessions },
                          { icon: <Trophy className="h-3.5 w-3.5" />, label: "Best", value: Math.round(blitzBestScore) },
                          { icon: <Zap className="h-3.5 w-3.5" />, label: "Peak ×", value: `×${blitzBestMultEasy}` },
                          { icon: <Star className="h-3.5 w-3.5" />, label: "Full", value: blitzFlawlessEasy + blitzFlawlessHard },
                        ].map(({ icon, label, value }) => (
                          <div key={label} className={`flex flex-col items-center gap-1`}>
                            <div className={`flex items-center gap-1.5 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{icon}<span className="text-[10px] uppercase tracking-widest font-medium">{label}</span></div>
                            <span className={`font-serif text-2xl font-light tabular-nums ${isDark ? "text-white" : "text-foreground"}`}>{value}</span>
                          </div>
                        ))}
                      </div>
                      <div className={`h-px ${isDark ? "bg-[#2a2926]" : "bg-border"}`} />
                      <div className="flex flex-col gap-2">
                        <span className={`text-xs uppercase tracking-widest font-medium ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Easy — Best Sessions</span>
                        {blitzEasy.map((s, i) => (
                          <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${isDark ? "bg-[#111110] border border-[#2a2926]" : "bg-muted/30"}`}>
                            <span className="text-muted-foreground font-mono text-xs w-5">{i + 1}.</span>
                            <span className={`font-medium flex-1 ${isDark ? "text-white" : ""}`}>{Math.round(s.session_score)} pts</span>
                            <span className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{s.words_solved} words</span>
                            <span className={`text-xs font-mono ml-3 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{s.created_at?.slice(5, 10)}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {blitzHard.length > 0 && (
                    <>
                      <div className={`h-px ${isDark ? "bg-[#2a2926]" : "bg-border"}`} />
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs uppercase tracking-widest font-medium ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Hard — Best Sessions</span>
                          <span className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>avg {blitzAvgHard}</span>
                        </div>
                        {blitzHard.map((s, i) => (
                          <div key={i} className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${isDark ? "bg-[#111110] border border-[#2a2926]" : "bg-muted/30"}`}>
                            <span className="text-muted-foreground font-mono text-xs w-5">{i + 1}.</span>
                            <span className={`font-medium flex-1 ${isDark ? "text-white" : ""}`}>{Math.round(s.session_score)} pts</span>
                            <span className={`text-xs ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{s.words_solved} words</span>
                            <span className={`text-xs font-mono ml-3 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>{s.created_at?.slice(5, 10)}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
