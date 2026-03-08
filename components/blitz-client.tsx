"use client"

import { useState, useCallback, useEffect } from "react"
import { MirrorGame, type WordHistoryEntry } from "@/components/mirror-game"
import { MirrorSessionSummary } from "@/components/mirror-session-summary"
import { HowToPlayBlitz } from "@/components/how-to-play-blitz"
import { StatsPanel } from "@/components/stats-panel"
import { BarChart3, CircleHelp, Search, Settings, Zap } from "lucide-react"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getDailyBlitzSequence } from "@/lib/game-data"
import { getMirrorStreak, updateMirrorStreak, type MirrorStreak } from "@/lib/history"
import { getPlayerId } from "@/lib/player-id"
import { BlitzWordHistoryPanel } from "@/components/blitz-word-history-panel"

// Nemesis Words — look up previous result for a word from stored session history
function getNemesisEntry(
  wordName: string,
  threshold: "poor" | "awful"
): { points: number; guesses: number; hintsUsed: number } | null {
  try {
    const raw = localStorage.getItem("definedle-settings")
    const settings = raw ? JSON.parse(raw) : {}
    if (!settings.nemesisWords) return null
    const thresh = settings.nemesisThreshold || "awful"

    // Load all saved word history from mirror sessions stored locally
    const histRaw = localStorage.getItem("definedle-blitz-word-history")
    if (!histRaw) return null
    const history: Array<{ word: string; points: number; guesses: number; hintsUsed: number; tier: string; bestGuess?: string }> = JSON.parse(histRaw)

    const match = history.filter(e => e.word === wordName)
    if (match.length === 0) return null

    // Most recent match
    const last = match[match.length - 1]

    // Only surface if below threshold
    const isPoor = last.tier === "poor" || last.tier === "awful" || last.guesses === 0
    const isAwful = last.tier === "awful" || last.guesses === 0
    const qualifies = thresh === "poor" ? isPoor : isAwful
    // Never show if previously flawless
    const wasFlawless = last.guesses === 1 && last.hintsUsed === 0
    if (wasFlawless || !qualifies) return null

    return { points: last.points, guesses: last.guesses, hintsUsed: last.hintsUsed, bestGuess: last.bestGuess }
  } catch {
    return null
  }
}

// Save word to local blitz history for nemesis lookup
function saveWordToBlitzHistory(entry: {
  word: string; points: number; guesses: number; hintsUsed: number; tier: string; bestGuess?: string
}) {
  try {
    const raw = localStorage.getItem("definedle-blitz-word-history")
    const history = raw ? JSON.parse(raw) : []
    history.push({ ...entry, playedAt: Date.now() })
    // Keep last 500 entries
    if (history.length > 500) history.splice(0, history.length - 500)
    localStorage.setItem("definedle-blitz-word-history", JSON.stringify(history))
  } catch {}
}

// Get recently played practice words to reduce repetition
function getRecentlyPlayedPracticeWords(limit = 150): string[] {
  try {
    const raw = localStorage.getItem("definedle-blitz-word-history")
    if (!raw) return []
    const history = JSON.parse(raw) as { word: string; playedAt?: number }[]
    // Return most recent unique words, newest first
    const seen = new Set<string>()
    return history
      .slice()
      .reverse()
      .filter(e => { if (seen.has(e.word)) return false; seen.add(e.word); return true })
      .slice(0, limit)
      .map(e => e.word)
  } catch { return [] }
}


// ── Session persistence helpers ──────────────────────────────────────────────
function saveBlitzProgress(difficulty: string, tab: string, data: {
  wordIndex: number; score: number; multiplier: number
  bestMultiplier: number; streak: number; wordsPlayed: number
  sessionWordHistory: WordHistoryEntry[]
}) {
  try {
    localStorage.setItem(
      `definedle-blitz-progress-${difficulty}-${tab}`,
      JSON.stringify({ ...data, savedAt: Date.now() })
    )
  } catch {}
}

function loadBlitzProgress(difficulty: string, tab: string): {
  wordIndex: number; score: number; multiplier: number
  bestMultiplier: number; streak: number; wordsPlayed: number
  sessionWordHistory: WordHistoryEntry[]
} | null {
  try {
    const raw = localStorage.getItem(`definedle-blitz-progress-${difficulty}-${tab}`)
    if (!raw) return null
    const data = JSON.parse(raw)
    // Expire after 24h
    if (Date.now() - data.savedAt > 86400000) {
      localStorage.removeItem(`definedle-blitz-progress-${difficulty}-${tab}`)
      return null
    }
    return data
  } catch { return null }
}

function clearBlitzProgress(difficulty: string, tab: string) {
  try { localStorage.removeItem(`definedle-blitz-progress-${difficulty}-${tab}`) } catch {}
}

const MULTIPLIER_STEPS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]

function applyMultiplierStep(current: number, effect: "flawless" | "good" | "decent" | "poor" | "awful"): number {
  const idx = MULTIPLIER_STEPS.findIndex(s => Math.abs(s - current) < 0.01)
  const safeIdx = idx === -1 ? 0 : idx
  if (effect === "flawless") return MULTIPLIER_STEPS[Math.min(safeIdx + 2, MULTIPLIER_STEPS.length - 1)]
  if (effect === "good") return MULTIPLIER_STEPS[Math.min(safeIdx + 1, MULTIPLIER_STEPS.length - 1)]
  if (effect === "decent") return MULTIPLIER_STEPS[Math.max(safeIdx - 1, 0)] // −0.5 step
  if (effect === "awful") return MULTIPLIER_STEPS[Math.max(safeIdx - 2, 0)]
  return MULTIPLIER_STEPS[Math.max(safeIdx - 1, 0)] // poor
}

type SessionState = {
  sessionScore: number
  sessionStreak: number
  sessionBestStreak: number
  sessionWordsSolved: number
  multiplier: number
  bestMultiplier: number
  showSummary: boolean
  wordsPlayed: number
  consecutiveAwful: number
  sessionWordHistory: WordHistoryEntry[]
  summaryData: { score: number; wordsSolved: number; bestMultiplier: number; wordHistory: WordHistoryEntry[]; reason: "failed" | "awful" | "complete" } | null
}

const emptySession = (): SessionState => ({
  sessionScore: 0, sessionStreak: 0, sessionBestStreak: 0, sessionWordsSolved: 0,
  multiplier: 1, bestMultiplier: 1, showSummary: false, wordsPlayed: 0,
  consecutiveAwful: 0, sessionWordHistory: [], summaryData: null,
})

interface BlitzClientProps {
  onSettingsOpen: () => void
}

export function BlitzClient({ onSettingsOpen }: BlitzClientProps) {
  // ── All state declarations first ──────────────────────────────────────────
  const [isDark, setIsDark] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [skipPenaltyOff, setSkipPenaltyOff] = useState(false)
  const [autoAdvance, setAutoAdvance] = useState(false)
  const [showWordLength, setShowWordLength] = useState(false)
  const [showSimilarity, setShowSimilarity] = useState(true)
  const [helpOpen, setHelpOpen] = useState(false)
  const [statsOpen, setStatsOpen] = useState(false)
  const [showWordHistory, setShowWordHistory] = useState(false)
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [mirrorStreak, setMirrorStreak] = useState<MirrorStreak>({ easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 })
  const [blitzTab, setBlitzTab] = useState<"practice" | "daily">("daily")
  const [nemesisEntry, setNemesisEntry] = useState<{ points: number; guesses: number; hintsUsed: number; bestGuess?: string } | null>(null)
  const [dailyDone, setDailyDone] = useState<{ easy: boolean; hard: boolean }>({ easy: false, hard: false })
  const [dailyFailed, setDailyFailed] = useState<{ easy: boolean; hard: boolean }>({ easy: false, hard: false })
  const [dailyStoredSummary, setDailyStoredSummary] = useState<Record<string, {score: number; wordsSolved: number; bestMultiplier: number; wordHistory?: WordHistoryEntry[]} | null>>({} as Record<string, {score: number; wordsSolved: number; bestMultiplier: number; wordHistory?: WordHistoryEntry[]} | null>)
  const [dailySequenceEasy, setDailySequenceEasy] = useState<DailyWord[]>([])
  const [dailySequenceHard, setDailySequenceHard] = useState<DailyWord[]>([])
  const [dailyWordIndex, setDailyWordIndex] = useState(0)

  const [sessions, setSessions] = useState<Record<GameMode, SessionState>>({
    easy: emptySession(),
    hard: emptySession(),
  })
  const sess = sessions[difficulty]
  const { sessionScore, sessionStreak, sessionBestStreak,
    multiplier, bestMultiplier, showSummary, wordsPlayed,
    consecutiveAwful, sessionWordHistory, summaryData } = sess

  // Apply settings on mount and when settings change
  useEffect(() => {
    const applySettings = () => {
      try {
        const raw = localStorage.getItem("definedle-settings")
        if (raw) {
          const s = JSON.parse(raw)
          if (typeof s.blitzDarkMode === "boolean") setIsDark(s.blitzDarkMode)
          if (typeof s.reduceMotion === "boolean") setReduceMotion(s.reduceMotion)
          if (typeof s.skipPenaltyOff === "boolean") setSkipPenaltyOff(s.skipPenaltyOff)
          if (typeof s.autoAdvance === "boolean") setAutoAdvance(s.autoAdvance)
          if (typeof s.showWordLength === "boolean") setShowWordLength(s.showWordLength)
          if (typeof s.showSimilarity === "boolean") setShowSimilarity(s.showSimilarity)
          }
      } catch {}
    }
    applySettings()
    window.addEventListener("definedle-settings-changed", applySettings)
    return () => window.removeEventListener("definedle-settings-changed", applySettings)
  }, [])

  // Load daily completion status — refresh after each session ends
  useEffect(() => {
    try {
      const today = new Date()
      const dateKey = `${today.getUTCFullYear()}-${String(today.getUTCMonth()+1).padStart(2,"0")}-${String(today.getUTCDate()).padStart(2,"0")}`
      const raw = localStorage.getItem("definedle-blitz-daily") || "{}"
      const rec = JSON.parse(raw)
      const todayRec = rec[dateKey] || {}
      setDailyDone({ easy: !!todayRec.easy?.completed, hard: !!todayRec.hard?.completed })
      setDailyFailed({ easy: !!todayRec.easy?.failed, hard: !!todayRec.hard?.failed })
      setDailyStoredSummary({
        easy: todayRec.easy ?? null,
        hard: todayRec.hard ?? null,
      })
    } catch {}
  }, [showSummary])

  const [practiceEasy, setPracticeEasy] = useState<DailyWord | null>(null)
  const [practiceHard, setPracticeHard] = useState<DailyWord | null>(null)
  const [playedEasy, setPlayedEasy] = useState<string[]>([])
  const [playedHard, setPlayedHard] = useState<string[]>([])

  const practiceWord = difficulty === "easy" ? practiceEasy : practiceHard
  const dailySequence = difficulty === "easy" ? dailySequenceEasy : dailySequenceHard
  const currentWord = blitzTab === "daily" ? dailySequence[dailyWordIndex] ?? null : practiceWord

  // Update nemesis entry when word changes
  useEffect(() => {
    if (currentWord) setNemesisEntry(getNemesisEntry(currentWord.word, "awful"))
    else setNemesisEntry(null)
  }, [currentWord?.word])

  useEffect(() => {
    try { setMirrorStreak(getMirrorStreak()) } catch {}
    setDailySequenceEasy(getDailyBlitzSequence("easy"))
    setDailySequenceHard(getDailyBlitzSequence("hard"))

    // Restore in-progress session if page was refreshed
    const savedTab = localStorage.getItem("definedle-blitz-last-tab") as "daily" | "practice" | null
    const savedDiff = localStorage.getItem("definedle-blitz-last-diff") as GameMode | null
    if (savedTab && savedDiff) {
      const progress = loadBlitzProgress(savedDiff, savedTab)
      if (progress) {
        setBlitzTab(savedTab)
        setSessions(prev => ({
          ...prev,
          [savedDiff]: {
            ...prev[savedDiff],
            score: progress.score,
            multiplier: progress.multiplier,
            bestMultiplier: progress.bestMultiplier,
            wordsPlayed: progress.wordsPlayed,
            sessionWordHistory: progress.sessionWordHistory,
          }
        }))
      }
    }
  }, [])

  // Start first word on mount
  useEffect(() => {
    const played = difficulty === "easy" ? playedEasy : playedHard
    const current = difficulty === "easy" ? practiceEasy : practiceHard
    if (!current) {
      const recentlyPlayed = getRecentlyPlayedPracticeWords(150)
      const word = getRandomPracticeWord([...played, ...recentlyPlayed], difficulty)
      if (difficulty === "easy") { setPracticeEasy(word); setPlayedEasy([word.word]) }
      else { setPracticeHard(word); setPlayedHard([word.word]) }
    }
  }, [difficulty]) // eslint-disable-line react-hooks/exhaustive-deps

  // Track current tab and difficulty for restore on refresh
  useEffect(() => {
    try {
      localStorage.setItem("definedle-blitz-last-tab", blitzTab)
      localStorage.setItem("definedle-blitz-last-diff", difficulty)
    } catch {}
  }, [blitzTab, difficulty])

  const updateSession = useCallback((diff: GameMode, patch: Partial<SessionState>) => {
    setSessions((prev: Record<GameMode, SessionState>) => ({ ...prev, [diff]: { ...prev[diff], ...patch } }))
  }, [])

  const handleSessionUpdate = useCallback(({ points, correct, multiplierEffect }: {
    points: number
    correct: boolean
    multiplierEffect: "flawless" | "good" | "decent" | "poor" | "awful"
  }) => {
    setSessions((prev: Record<GameMode, SessionState>) => {
      const s = prev[difficulty]
      const newScore = Math.max(0, s.sessionScore + points)
      const newMult = applyMultiplierStep(s.multiplier, multiplierEffect)
      if (!correct) {
        // Skip/fail — apply multiplier penalty but don't increment streak/words solved
        return { ...prev, [difficulty]: {
          ...s,
          sessionScore: newScore,
          multiplier: newMult,
          bestMultiplier: Math.max(s.bestMultiplier, newMult),
        }}
      }
      const newStreak = s.sessionStreak + 1
      return { ...prev, [difficulty]: {
        ...s,
        sessionScore: newScore,
        sessionWordsSolved: s.sessionWordsSolved + 1,
        sessionStreak: newStreak,
        sessionBestStreak: Math.max(s.sessionBestStreak, newStreak),
        multiplier: newMult,
        bestMultiplier: Math.max(s.bestMultiplier, newMult),
      }}
    })
  }, [difficulty])

  const handleSessionEnd = useCallback(async (
    finalScore: number,
    wordsSolved: number,
    peakMultiplier: number,
    wordHistory: WordHistoryEntry[],
    reason: "failed" | "awful" | "complete"
  ) => {
    // Use bestMultiplier from session state — peakMultiplier from mirror-game is just last word's mult
    const peakMult = sessions[difficulty].bestMultiplier
    updateSession(difficulty, {
      summaryData: { score: finalScore, wordsSolved, bestMultiplier: peakMult, wordHistory, reason },
      showSummary: true,
    })
    if (wordsSolved >= 1) {
      // Mark daily as completed if applicable
      if (blitzTab === "daily") {
        try {
          const today = new Date()
          const dateKey = `${today.getUTCFullYear()}-${String(today.getUTCMonth()+1).padStart(2,"0")}-${String(today.getUTCDate()).padStart(2,"0")}`
          const raw = localStorage.getItem("definedle-blitz-daily") || "{}"
          const dailyRecord = JSON.parse(raw)
          if (!dailyRecord[dateKey]) dailyRecord[dateKey] = {}
          dailyRecord[dateKey][difficulty] = {
            score: finalScore, completed: true, wordsSolved, bestMultiplier: peakMult,
            wordHistory, failed: reason === "failed" || reason === "awful"
          }
          localStorage.setItem("definedle-blitz-daily", JSON.stringify(dailyRecord))
          setDailyDone(prev => ({ ...prev, [difficulty]: true }))
          if (reason === "failed" || reason === "awful") {
            setDailyFailed(prev => ({ ...prev, [difficulty]: true }))
          }
          // Also store summary for the "already completed" screen
          setDailyStoredSummary(prev => ({
            ...prev,
            [difficulty]: { score: finalScore, wordsSolved, bestMultiplier: peakMult, wordHistory }
          }))
        } catch {}
      }
      try {
        const playerId = getPlayerId()
        if (!playerId) return
        const res = await fetch("/api/mirror-sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            player_id: playerId,
            session_score: finalScore,
            best_streak: peakMult,
            words_solved: wordsSolved,
            words_attempted: wordsPlayed + 1,
            difficulty,
            word_history: wordHistory,
          }),
        })
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}))
          console.error("mirror-sessions POST failed:", res.status, errData)
        }
      } catch (e) { console.error("mirror-sessions POST error:", e) }
    }
  }, [difficulty, updateSession, blitzTab, wordsPlayed, sessions])

  const resetSession = useCallback((diff?: GameMode) => {
    const target = diff ?? difficulty
    setSessions((prev: Record<GameMode, SessionState>) => ({ ...prev, [target]: emptySession() }))
    clearBlitzProgress(target, blitzTab)
  }, [difficulty, blitzTab])

  const handleNextWord = useCallback(() => {
    setSessions((prev: Record<GameMode, SessionState>) => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], wordsPlayed: prev[difficulty].wordsPlayed + 1 }
    }))
    const played = difficulty === "easy" ? playedEasy : playedHard
    const recentlyPlayed = getRecentlyPlayedPracticeWords(150)
    const word = getRandomPracticeWord([...played, ...recentlyPlayed], difficulty)
    if (difficulty === "easy") {
      setPlayedEasy((prev: string[]) => [...prev, word.word])
      setPracticeEasy(word)
    } else {
      setPlayedHard((prev: string[]) => [...prev, word.word])
      setPracticeHard(word)
    }
  }, [difficulty, playedEasy, playedHard])

  const handleNextDailyWord = useCallback(() => {
    setSessions((prev: Record<GameMode, SessionState>) => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], wordsPlayed: prev[difficulty].wordsPlayed + 1 }
    }))
    setDailyWordIndex((i: number) => i + 1)
  }, [difficulty, dailyWordIndex])

  const handleDifficultyChange = useCallback((diff: GameMode) => {
    setDifficulty(diff)
    setDailyWordIndex(0)
  }, [])

  return (
    <main className={`flex min-h-svh flex-col ${isDark ? "bg-[#111110]" : "bg-background"}`} style={{ paddingBottom: "calc(6rem + env(safe-area-inset-bottom))" }} data-reduce-motion={reduceMotion}>
      {/* Blitz header */}
      <header className="flex flex-col items-center gap-1 pt-10 pb-6 md:pt-14 md:pb-8 w-full max-w-md mx-auto px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-1 items-center justify-start gap-1 min-w-0">
            <button
              type="button"
              onClick={onSettingsOpen}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Settings"
            >
              <Settings className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setHelpOpen(true)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="How to play Blitz"
            >
              <CircleHelp className="h-[18px] w-[18px]" />
            </button>
          </div>
          <h1 className={`font-serif text-3xl font-light tracking-tight ${isDark ? "text-white" : "text-foreground"}`}>
            Definedle
          </h1>
          <div className="flex flex-1 items-center justify-end gap-1 min-w-0">
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="View Blitz stats"
            >
              <BarChart3 className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setShowWordHistory(true)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Word history"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" aria-hidden="true" />
          <span className="text-sm font-bold tracking-tight text-amber-500">Blitz</span>
          <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" aria-hidden="true" />
        </div>
        <p className={`text-sm tracking-wide ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
          Name the word from its definition
        </p>
        <div className="mt-3 h-px w-12 bg-border" aria-hidden="true" />
      </header>

      {/* Daily / Practice toggle */}
      <div className="flex justify-center mb-2">
        <div className={`inline-flex items-center rounded-lg border p-0.5 ${isDark ? "border-[#2a2926] bg-[#1c1b19]" : "border-border bg-muted/50"}`}>
          <button
            type="button"
            onClick={() => { setBlitzTab("daily"); resetSession(); setDailyWordIndex(0) }}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-200 min-h-[36px] ${
              blitzTab === "daily"
                ? isDark ? "bg-[#2a2926] text-amber-400 shadow-sm" : "bg-card text-amber-500 shadow-sm"
                : isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Daily
          </button>
          <button
            type="button"
            onClick={() => { setBlitzTab("practice"); resetSession() }}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-200 min-h-[36px] ${
              blitzTab === "practice"
                ? isDark ? "bg-[#2a2926] text-white shadow-sm" : "bg-card text-foreground shadow-sm"
                : isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Practice
          </button>
        </div>
      </div>

      {/* Easy / Hard toggle */}
      <div className="flex justify-center mb-4">
        <div className={`inline-flex items-center rounded-lg border p-0.5 ${isDark ? "border-[#2a2926] bg-[#1c1b19]" : "border-border bg-muted/50"}`}>
          <button
            type="button"
            onClick={() => handleDifficultyChange("easy")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-200 min-h-[36px] flex items-center gap-1.5 ${
              difficulty === "easy"
                ? isDark ? "bg-[#2a2926] text-white shadow-sm" : "bg-card text-foreground shadow-sm"
                : isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Easy
            {blitzTab === "daily" && dailyDone.easy && <span className="text-emerald-400 text-xs">✓</span>}
          </button>
          <button
            type="button"
            onClick={() => handleDifficultyChange("hard")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all duration-200 min-h-[36px] flex items-center gap-1.5 ${
              difficulty === "hard"
                ? isDark ? "bg-[#2a2926] text-white shadow-sm" : "bg-card text-foreground shadow-sm"
                : isDark ? "text-[#6b6560] hover:text-[#9b9589]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Hard
            {blitzTab === "daily" && dailyDone.hard && <span className="text-emerald-400 text-xs">✓</span>}
          </button>
        </div>
      </div>

      {/* Game area */}
      {blitzTab === "daily" && dailyDone[difficulty] && !showSummary && (
        dailyFailed[difficulty] ? (
          <div className={`mx-auto w-full max-w-md px-5`}>
            <div className={`rounded-xl border p-6 text-center ${isDark ? "border-[#2a2926] bg-[#1c1b19]" : "border-border bg-card"}`}>
              <p className="text-3xl mb-3">💀</p>
              <p className={`font-serif text-lg mb-1 ${isDark ? "text-white" : "text-foreground"}`}>
                Daily {difficulty} failed
              </p>
              <p className={`text-sm mb-4 ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>
                Better luck tomorrow. Come back for a fresh daily challenge.
              </p>
              <button
                type="button"
                onClick={() => { setBlitzTab("practice"); resetSession(); handleNextWord() }}
                className={`rounded-lg px-5 py-2 text-sm font-medium ${isDark ? "bg-amber-500 text-white" : "bg-foreground text-background"}`}
              >
                Play Practice instead
              </button>
            </div>
          </div>
        ) : dailyStoredSummary[difficulty] ? (
          <MirrorSessionSummary
            score={dailyStoredSummary[difficulty]!.score}
            wordsSolved={dailyStoredSummary[difficulty]!.wordsSolved}
            bestMultiplier={dailyStoredSummary[difficulty]!.bestMultiplier}
            wordHistory={dailyStoredSummary[difficulty]!.wordHistory ?? []}
            reason="complete"
            isDaily={true}
            isDark={isDark}
            onPlayAgain={() => { setBlitzTab("practice"); resetSession(); handleNextWord() }}
            onFlipBack={() => { setBlitzTab("practice"); resetSession(); handleNextWord() }}
          />
        ) : null
      )}

      {currentWord && !showSummary && !(blitzTab === "daily" && dailyDone[difficulty]) && (
        <MirrorGame
          key={`blitz-${difficulty}-${currentWord?.word}`}
          word={currentWord!}
          isPractice={true}
          onFlipToNormal={() => {
            resetSession()
            handleNextWord()
          }}
          onNextWord={blitzTab === "daily" ? handleNextDailyWord : handleNextWord}
          sessionScore={sessionScore}
          sessionStreak={sessionStreak}
          sessionBestStreak={sessionBestStreak}
          multiplier={multiplier}
          wordsPlayed={wordsPlayed}
          consecutiveAwful={consecutiveAwful}
          wordHistory={sessionWordHistory}
          onWordPlayed={(wasAwful: boolean, entry: WordHistoryEntry) => {
            setSessions((prev: Record<GameMode, SessionState>) => {
              const s = prev[difficulty]
              return { ...prev, [difficulty]: {
                ...s,
                consecutiveAwful: wasAwful ? s.consecutiveAwful + 1 : 0,
                sessionWordHistory: [...s.sessionWordHistory, entry],
              }}
            })
            // Persist session progress for page refresh recovery
            saveBlitzProgress(difficulty, blitzTab, {
              wordIndex: sess.wordsPlayed + 1,
              score: sess.score + (entry.points * sess.multiplier),
              multiplier: sess.multiplier,
              bestMultiplier: sess.bestMultiplier,
              streak: sess.consecutiveAwful,
              wordsPlayed: sess.wordsPlayed + 1,
              sessionWordHistory: [...sess.sessionWordHistory, entry],
            })
            // Save for nemesis lookup
            saveWordToBlitzHistory({
              word: entry.word,
              points: entry.points,
              guesses: entry.guesses,
              hintsUsed: entry.hintsUsed,
              tier: wasAwful ? "awful" : entry.guesses === 0 ? "failed" : "other",
              bestGuess: entry.bestGuess,
            })
          }}
          onSessionUpdate={handleSessionUpdate}
          onSessionEnd={handleSessionEnd}
          isDark={isDark}
          nemesisEntry={nemesisEntry}
          showWordLength={showWordLength}
          showSimilarity={showSimilarity}
          skipPenaltyOff={skipPenaltyOff}
          autoAdvance={autoAdvance}
          onComplete={(result) => {
            const isPerfect = result.correct && result.guesses === 1 && result.hintsUsed === 0
            const updated = updateMirrorStreak(difficulty, isPerfect)
            setMirrorStreak(updated)
          }}
        />
      )}

      {showSummary && summaryData && (
        <MirrorSessionSummary
          score={summaryData.score}
          wordsSolved={summaryData.wordsSolved}
          bestMultiplier={summaryData.bestMultiplier}
          wordHistory={summaryData.wordHistory}
          reason={summaryData.reason}
          isDaily={blitzTab === "daily"}
          onPlayAgain={() => {
            if (blitzTab === "daily") {
              setBlitzTab("practice")
              resetSession()
              handleNextWord()
            } else {
              resetSession()
              handleNextWord()
            }
          }}
          isDark={isDark}
          onFlipBack={() => {
            setBlitzTab("practice")
            resetSession()
            handleNextWord()
          }}
        />
      )}

      <BlitzWordHistoryPanel open={showWordHistory} onClose={() => setShowWordHistory(false)} isDark={isDark} />
      <HowToPlayBlitz open={helpOpen} onClose={() => setHelpOpen(false)} />
      <StatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} blitzMode />
    </main>
  )
}
