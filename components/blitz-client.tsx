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

const MULTIPLIER_STEPS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]

function applyMultiplierStep(current: number, effect: "flawless" | "good" | "decent" | "poor" | "awful"): number {
  const idx = MULTIPLIER_STEPS.findIndex(s => Math.abs(s - current) < 0.01)
  const safeIdx = idx === -1 ? 0 : idx
  if (effect === "flawless") return MULTIPLIER_STEPS[Math.min(safeIdx + 2, MULTIPLIER_STEPS.length - 1)]
  if (effect === "good") return MULTIPLIER_STEPS[Math.min(safeIdx + 1, MULTIPLIER_STEPS.length - 1)]
  if (effect === "decent") return current
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
  const [helpOpen, setHelpOpen] = useState(false)
  const [statsOpen, setStatsOpen] = useState(false)
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [mirrorStreak, setMirrorStreak] = useState<MirrorStreak>({ easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 })

  const [blitzTab, setBlitzTab] = useState<"practice" | "daily">("practice")
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

  const [practiceEasy, setPracticeEasy] = useState<DailyWord | null>(null)
  const [practiceHard, setPracticeHard] = useState<DailyWord | null>(null)
  const [playedEasy, setPlayedEasy] = useState<string[]>([])
  const [playedHard, setPlayedHard] = useState<string[]>([])

  const practiceWord = difficulty === "easy" ? practiceEasy : practiceHard
  const dailySequence = difficulty === "easy" ? dailySequenceEasy : dailySequenceHard
  const currentWord = blitzTab === "daily" ? dailySequence[dailyWordIndex] ?? null : practiceWord

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
    setSessions(prev => ({ ...prev, [diff]: { ...prev[diff], ...patch } }))
  }, [])

  const handleSessionUpdate = useCallback(({ points, correct, multiplierEffect }: {
    points: number
    correct: boolean
    multiplierEffect: "flawless" | "good" | "decent" | "poor" | "awful"
  }) => {
    setSessions(prev => {
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
      try {
        const playerId = getPlayerId()
        if (!playerId) return
        await fetch("/api/mirror-sessions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            player_id: playerId,
            session_score: finalScore,
            best_streak: wordsSolved,
            words_solved: wordsSolved,
            words_attempted: wordsSolved + 1,
            difficulty,
            word_history: wordHistory,
          }),
        })
      } catch {}
    }
  }, [difficulty, updateSession])

  const resetSession = useCallback((diff?: GameMode) => {
    const target = diff ?? difficulty
    setSessions(prev => ({ ...prev, [target]: emptySession() }))
  }, [difficulty])

  const handleNextWord = useCallback(() => {
    setSessions(prev => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], wordsPlayed: prev[difficulty].wordsPlayed + 1 }
    }))
    const played = difficulty === "easy" ? playedEasy : playedHard
    const word = getRandomPracticeWord(played, difficulty)
    if (difficulty === "easy") {
      setPlayedEasy(prev => [...prev, word.word])
      setPracticeEasy(word)
    } else {
      setPlayedHard(prev => [...prev, word.word])
      setPracticeHard(word)
    }
  }, [difficulty, playedEasy, playedHard])

  const handleNextDailyWord = useCallback(() => {
    setSessions(prev => ({
      ...prev,
      [difficulty]: { ...prev[difficulty], wordsPlayed: prev[difficulty].wordsPlayed + 1 }
    }))
    setDailyWordIndex(i => i + 1)
  }, [difficulty])

  const handleDifficultyChange = useCallback((diff: GameMode) => {
    setDifficulty(diff)
    setDailyWordIndex(0)
  }, [])

  return (
    <main className="flex min-h-svh flex-col bg-[#111110] pb-24">
      {/* Blitz header */}
      <header className="flex items-center justify-between px-5 pt-10 pb-4 md:pt-14 w-full max-w-md mx-auto">
        <button
          type="button"
          onClick={onSettingsOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6b6560] hover:text-[#d4cfc8] transition-colors focus-visible:outline-none"
          aria-label="Settings"
        >
          <Settings className="h-[18px] w-[18px]" />
        </button>

        <div className="flex flex-col items-center gap-0.5">
          <h1 className="font-serif text-3xl font-light tracking-tight text-white md:text-4xl flex items-center gap-2">
            Blitz
            <Zap className="h-5 w-5 text-amber-500 fill-amber-500" aria-hidden="true" />
          </h1>
          <p className="text-[11px] text-[#6b6560] tracking-wide">Name the word from its definition</p>
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

      {/* Difficulty toggle */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-1 rounded-lg border border-[#2a2926] bg-[#1c1b19] p-0.5">
          <button
            type="button"
            onClick={() => handleDifficultyChange("easy")}
            className={`rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${
              difficulty === "easy"
                ? "bg-[#2a2926] text-white"
                : "text-[#6b6560] hover:text-[#9b9589]"
            }`}
          >
            Easy
          </button>
          <button
            type="button"
            onClick={() => handleDifficultyChange("hard")}
            className={`rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${
              difficulty === "hard"
                ? "bg-[#2a2926] text-white"
                : "text-[#6b6560] hover:text-[#9b9589]"
            }`}
          >
            Hard
          </button>
        </div>
      </div>

      {/* Daily / Practice tab */}
      <div className="flex justify-center mb-4">
        <div className="inline-flex items-center gap-1 rounded-lg border border-[#2a2926] bg-[#1c1b19] p-0.5">
          <button
            type="button"
            onClick={() => { setBlitzTab("practice"); resetSession() }}
            className={`rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${
              blitzTab === "practice" ? "bg-[#2a2926] text-white" : "text-[#6b6560] hover:text-[#9b9589]"
            }`}
          >
            Practice
          </button>
          <button
            type="button"
            onClick={() => { setBlitzTab("daily"); resetSession(); setDailyWordIndex(0) }}
            className={`rounded-md px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 min-h-[32px] ${
              blitzTab === "daily" ? "bg-[#2a2926] text-amber-400" : "text-[#6b6560] hover:text-[#9b9589]"
            }`}
          >
            Daily
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
            setSessions(prev => {
              const s = prev[difficulty]
              return { ...prev, [difficulty]: {
                ...s,
                consecutiveAwful: wasAwful ? s.consecutiveAwful + 1 : 0,
                sessionWordHistory: [...s.sessionWordHistory, entry],
              }}
            })
          }}
          onSessionUpdate={handleSessionUpdate}
          onSessionEnd={handleSessionEnd}
          isDark={true}
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
          isDark={true}
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
