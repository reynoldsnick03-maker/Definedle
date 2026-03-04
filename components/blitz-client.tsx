"use client"

import { useState, useCallback, useEffect } from "react"
import { MirrorGame, type WordHistoryEntry } from "@/components/mirror-game"
import { MirrorSessionSummary } from "@/components/mirror-session-summary"
import { HowToPlayBlitz } from "@/components/how-to-play-blitz"
import { StatsPanel } from "@/components/stats-panel"
import { BarChart3, CircleHelp, Settings, Zap } from "lucide-react"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getDailyBlitzSequence } from "@/lib/game-data"
import { getMirrorStreak, updateMirrorStreak, type MirrorStreak } from "@/lib/history"
import { getPlayerId } from "@/lib/player-id"

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
    const history: Array<{ word: string; points: number; guesses: number; hintsUsed: number; tier: string }> = JSON.parse(histRaw)

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

    return { points: last.points, guesses: last.guesses, hintsUsed: last.hintsUsed }
  } catch {
    return null
  }
}

// Save word to local blitz history for nemesis lookup
function saveWordToBlitzHistory(entry: {
  word: string; points: number; guesses: number; hintsUsed: number; tier: string
}) {
  try {
    const raw = localStorage.getItem("definedle-blitz-word-history")
    const history = raw ? JSON.parse(raw) : []
    history.push(entry)
    // Keep last 500 entries
    if (history.length > 500) history.splice(0, history.length - 500)
    localStorage.setItem("definedle-blitz-word-history", JSON.stringify(history))
  } catch {}
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
  const [helpOpen, setHelpOpen] = useState(false)
  const [statsOpen, setStatsOpen] = useState(false)
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [mirrorStreak, setMirrorStreak] = useState<MirrorStreak>({ easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 })
  const [blitzTab, setBlitzTab] = useState<"practice" | "daily">("practice")
  const [nemesisEntry, setNemesisEntry] = useState<{ points: number; guesses: number; hintsUsed: number } | null>(null)
  const [dailyDone, setDailyDone] = useState<{ easy: boolean; hard: boolean }>({ easy: false, hard: false })
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
          if (s.defaultHard === true) setDifficulty("hard")
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
      const dateKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`
      const raw = localStorage.getItem("definedle-blitz-daily") || "{}"
      const rec = JSON.parse(raw)
      const todayRec = rec[dateKey] || {}
      setDailyDone({ easy: !!todayRec.easy?.completed, hard: !!todayRec.hard?.completed })
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
  }, [])

  // Start first word on mount
  useEffect(() => {
    const played = difficulty === "easy" ? playedEasy : playedHard
    const current = difficulty === "easy" ? practiceEasy : practiceHard
    if (!current) {
      const word = getRandomPracticeWord(played, difficulty)
      if (difficulty === "easy") { setPracticeEasy(word); setPlayedEasy([word.word]) }
      else { setPracticeHard(word); setPlayedHard([word.word]) }
    }
  }, [difficulty]) // eslint-disable-line react-hooks/exhaustive-deps

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
      if (!correct) return { ...prev, [difficulty]: { ...s, sessionScore: newScore } }
      const newStreak = s.sessionStreak + 1
      const newMult = applyMultiplierStep(s.multiplier, multiplierEffect)
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
    updateSession(difficulty, {
      summaryData: { score: finalScore, wordsSolved, bestMultiplier: peakMultiplier, wordHistory, reason },
      showSummary: true,
    })
    if (wordsSolved >= 1) {
      // Mark daily as completed if applicable
      if (blitzTab === "daily") {
        try {
          const today = new Date()
          const dateKey = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`
          const raw = localStorage.getItem("definedle-blitz-daily") || "{}"
          const dailyRecord = JSON.parse(raw)
          if (!dailyRecord[dateKey]) dailyRecord[dateKey] = {}
          dailyRecord[dateKey][difficulty] = { score: finalScore, completed: true }
          localStorage.setItem("definedle-blitz-daily", JSON.stringify(dailyRecord))
        } catch {}
      }
      try {
        const playerId = getPlayerId()
        if (!playerId) return
        await fetch("/api/mirror-sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            player_id: playerId,
            session_score: finalScore,
            best_streak: peakMultiplier,
            words_solved: wordsSolved,
            words_attempted: wordsPlayed + 1,
            difficulty,
            word_history: wordHistory,
          }),
        })
      } catch {}
    }
  }, [difficulty, updateSession, blitzTab, wordsPlayed])

  const resetSession = useCallback((diff?: GameMode) => {
    const target = diff ?? difficulty
    setSessions((prev: Record<GameMode, SessionState>) => ({ ...prev, [target]: emptySession() }))
  }, [difficulty])

  const handleNextWord = useCallback(() => {
    setSessions((prev: Record<GameMode, SessionState>) => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], wordsPlayed: prev[difficulty].wordsPlayed + 1 }
    }))
    const played = difficulty === "easy" ? playedEasy : playedHard
    const word = getRandomPracticeWord(played, difficulty)
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
    const nextIndex = dailyWordIndex + 1
    if (nextIndex >= 15) {
      // All 15 daily words done — session end is handled by MirrorGame's onSessionEnd
      // just advance index so currentWord becomes null and summary shows
    }
    setDailyWordIndex((i: number) => i + 1)
  }, [difficulty, dailyWordIndex])

  const handleDifficultyChange = useCallback((diff: GameMode) => {
    setDifficulty(diff)
    setDailyWordIndex(0)
  }, [])

  return (
    <main className={`flex min-h-svh flex-col pb-24 ${isDark ? "bg-[#111110]" : "bg-background"}`} data-reduce-motion={reduceMotion}>
      {/* Blitz header */}
      <header className="flex items-center justify-between px-5 pt-10 pb-4 md:pt-14 w-full max-w-md mx-auto">
        <button
          type="button"
          onClick={onSettingsOpen}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none ${isDark ? "text-[#6b6560] hover:text-[#d4cfc8]" : "text-muted-foreground hover:text-foreground"}`}
          aria-label="Settings"
        >
          <Settings className="h-[18px] w-[18px]" />
        </button>

        <div className="flex flex-col items-center gap-0.5">
          <h1 className="flex items-center gap-2">
            <span className={`font-serif text-3xl font-light tracking-tight ${isDark ? "text-white" : "text-foreground"}`}>Definedle</span>
            <span className="text-3xl font-bold tracking-tight text-amber-500">Blitz</span>
            <Zap className="h-5 w-5 text-amber-500 fill-amber-500" aria-hidden="true" />
          </h1>
          <p className={`text-[11px] tracking-wide ${isDark ? "text-[#6b6560]" : "text-muted-foreground"}`}>Name the word from its definition</p>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setHelpOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6b6560] hover:text-[#d4cfc8] transition-colors focus-visible:outline-none"
            aria-label="How to play Blitz"
          >
            <CircleHelp className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => setStatsOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6b6560] hover:text-[#d4cfc8] transition-colors focus-visible:outline-none"
            aria-label="View Blitz stats"
          >
            <BarChart3 className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      {/* Daily / Practice toggle — Daily on left, above Easy/Hard */}
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

      {/* Easy / Hard toggle — with green ticks for completed daily */}
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
      {currentWord && !showSummary && (
        <MirrorGame
          key={`blitz-${difficulty}-${blitzTab}-${currentWord?.word}`}
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
            // Save for nemesis lookup
            saveWordToBlitzHistory({
              word: entry.word,
              points: entry.points,
              guesses: entry.guesses,
              hintsUsed: entry.hintsUsed,
              tier: wasAwful ? "awful" : entry.guesses === 0 ? "failed" : "other",
            })
          }}
          onSessionUpdate={handleSessionUpdate}
          onSessionEnd={handleSessionEnd}
          isDark={isDark}
          nemesisEntry={nemesisEntry}
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
          onPlayAgain={() => {
            resetSession()
            handleNextWord()
          }}
          isDark={isDark}
          onFlipBack={() => {
            resetSession()
            handleNextWord()
          }}
        />
      )}

      <HowToPlayBlitz open={helpOpen} onClose={() => setHelpOpen(false)} />
      <StatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} blitzMode />
    </main>
  )
}
