"use client"

import { useState, useCallback, useEffect } from "react"
import { GameHeader } from "@/components/game-header"
import { Game } from "@/components/game"
import { StatsPanel } from "@/components/stats-panel"
import { HowToPlay } from "@/components/how-to-play"
import { SharedResult, type ShareData } from "@/components/shared-result"
import { ModeToggle, type TabMode } from "@/components/mode-toggle"
import { MirrorGame, type WordHistoryEntry } from "@/components/mirror-game"
import { MirrorSessionSummary } from "@/components/mirror-session-summary"
import { StreakBadge } from "@/components/streak-badge"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getWordByName } from "@/lib/game-data"
import { getMirrorStreak, updateMirrorStreak, type MirrorStreak } from "@/lib/history"
import { getPlayerId } from "@/lib/player-id"

interface PageClientProps {
  dailyWord: DailyWord
  hardWord: DailyWord
  shareData?: ShareData | null
  shareWordData?: {
    definition: string
    partOfSpeech: string
    conceptLabels: string[]
  } | null
}

const MULTIPLIER_STEPS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8]

function applyMultiplierStep(current: number, effect: "flawless" | "good" | "decent" | "poor"): number {
  const idx = MULTIPLIER_STEPS.findIndex(s => Math.abs(s - current) < 0.01)
  const safeIdx = idx === -1 ? 0 : idx
  if (effect === "flawless") return MULTIPLIER_STEPS[Math.min(safeIdx + 2, MULTIPLIER_STEPS.length - 1)]
  if (effect === "good") return MULTIPLIER_STEPS[Math.min(safeIdx + 1, MULTIPLIER_STEPS.length - 1)]
  if (effect === "decent") return current
  return MULTIPLIER_STEPS[Math.max(safeIdx - 1, 0)]
}

export function PageClient({ dailyWord, hardWord, shareData, shareWordData }: PageClientProps) {
  const [statsOpen, setStatsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [showingShare, setShowingShare] = useState(!!shareData && !!shareWordData)
  const [tab, setTab] = useState<TabMode>("daily")
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [streak, setStreak] = useState(0)
  const [mirrorMode, setMirrorMode] = useState(false)
  const [mirrorStreak, setMirrorStreak] = useState<MirrorStreak>({ easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 })

  // Session state
  const [sessionScore, setSessionScore] = useState(0)
  const [sessionStreak, setSessionStreak] = useState(0)
  const [sessionBestStreak, setSessionBestStreak] = useState(0)
  const [sessionWordsSolved, setSessionWordsSolved] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const [bestMultiplier, setBestMultiplier] = useState(1)
  const [showSummary, setShowSummary] = useState(false)
  const [summaryData, setSummaryData] = useState<{
    score: number
    wordsSolved: number
    bestMultiplier: number
    wordHistory: WordHistoryEntry[]
  } | null>(null)

  const handleSessionUpdate = useCallback(({ points, correct, multiplierEffect }: {
    points: number
    correct: boolean
    multiplierEffect: "flawless" | "good" | "decent" | "poor"
  }) => {
    // Always apply points (can be negative for extra letter reveals)
    setSessionScore(prev => Math.max(0, prev + points))
    if (correct) {
      setSessionWordsSolved(prev => prev + 1)
      setSessionStreak(prev => {
        const next = prev + 1
        setSessionBestStreak(best => Math.max(best, next))
        return next
      })
      setMultiplier(prev => {
        const next = applyMultiplierStep(prev, multiplierEffect)
        setBestMultiplier(best => Math.max(best, next))
        return next
      })
    }
  }, [])

  const handleSessionEnd = useCallback(async (
    finalScore: number,
    wordsSolved: number,
    peakMultiplier: number,
    wordHistory: WordHistoryEntry[]
  ) => {
    setSummaryData({ score: finalScore, wordsSolved, bestMultiplier: peakMultiplier, wordHistory })
    setShowSummary(true)
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
  }, [difficulty])

  const resetSession = useCallback(() => {
    setSessionScore(0)
    setSessionStreak(0)
    setSessionBestStreak(0)
    setSessionWordsSolved(0)
    setMultiplier(1)
    setBestMultiplier(1)
    setShowSummary(false)
    setSummaryData(null)
  }, [])

  useEffect(() => {
    try {
      setMirrorStreak(getMirrorStreak())
    } catch {}
  }, [])

  const [practiceEasy, setPracticeEasy] = useState<DailyWord | null>(null)
  const [practiceHard, setPracticeHard] = useState<DailyWord | null>(null)
  const [urlWordHandled, setUrlWordHandled] = useState(false)

  useEffect(() => {
    if (urlWordHandled) return
    const params = new URLSearchParams(window.location.search)
    const wordParam = params.get("word") || Array.from(params.keys()).find(k => k !== "reset" && k !== "r")
    if (wordParam) {
      const found = getWordByName(wordParam)
      if (found) {
        setTab("practice")
        setDifficulty(found.difficulty)
        if (found.difficulty === "easy") setPracticeEasy(found.word)
        else setPracticeHard(found.word)
        window.history.replaceState({}, "", window.location.pathname)
      }
    }
    setUrlWordHandled(true)
  }, [urlWordHandled])

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const playerId = getPlayerId()
        if (playerId) {
          const res = await fetch(`/api/streak?player_id=${encodeURIComponent(playerId)}`)
          if (res.ok) {
            const data = await res.json()
            setStreak(data.streak || 0)
            return
          }
        }
        const res = await fetch("/api/history")
        if (res.ok) {
          const data = await res.json()
          setStreak(data.streak || 0)
        }
      } catch {}
    }
    fetchStreak()
  }, [])

  const [playedEasy, setPlayedEasy] = useState<string[]>([])
  const [playedHard, setPlayedHard] = useState<string[]>([])
  const [practiceKeyEasy, setPracticeKeyEasy] = useState(0)
  const [practiceKeyHard, setPracticeKeyHard] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (params.has("reset")) {
      document.cookie = "definedle-today=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "definedle-today-hard=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      localStorage.removeItem("definedle-history")
      Object.keys(localStorage).filter(k => k.startsWith("definedle-improve-")).forEach(k => localStorage.removeItem(k))
      window.location.replace(window.location.pathname)
    }
  }, [])

  const practiceWord = difficulty === "easy" ? practiceEasy : practiceHard
  const practiceKey = difficulty === "easy" ? practiceKeyEasy : practiceKeyHard

  const startPractice = useCallback((diff: GameMode) => {
    const played = diff === "easy" ? playedEasy : playedHard
    const word = getRandomPracticeWord(played, diff)
    if (diff === "easy") {
      setPracticeEasy(word)
      setPlayedEasy([word.word])
      setPracticeKeyEasy(k => k + 1)
    } else {
      setPracticeHard(word)
      setPlayedHard([word.word])
      setPracticeKeyHard(k => k + 1)
    }
  }, [playedEasy, playedHard])

  const handleNextPracticeWord = useCallback(() => {
    const played = difficulty === "easy" ? playedEasy : playedHard
    const word = getRandomPracticeWord(played, difficulty)
    if (difficulty === "easy") {
      setPlayedEasy(prev => [...prev, word.word])
      setPracticeEasy(word)
      setPracticeKeyEasy(k => k + 1)
    } else {
      setPlayedHard(prev => [...prev, word.word])
      setPracticeHard(word)
      setPracticeKeyHard(k => k + 1)
    }
  }, [playedEasy, playedHard, difficulty])

  const handleTabChange = useCallback((newTab: TabMode) => {
    setTab(newTab)
    setMirrorMode(false)
    if (newTab === "practice") {
      const current = difficulty === "easy" ? practiceEasy : practiceHard
      if (!current) startPractice(difficulty)
    }
  }, [practiceEasy, practiceHard, difficulty, startPractice])

  const handleDifficultyChange = useCallback((newDifficulty: GameMode) => {
    setDifficulty(newDifficulty)
    if (tab === "practice") {
      const current = newDifficulty === "easy" ? practiceEasy : practiceHard
      if (!current) startPractice(newDifficulty)
    }
  }, [tab, practiceEasy, practiceHard, startPractice])

  const handlePlayYourself = () => {
    if (typeof window !== "undefined") window.history.replaceState({}, "", window.location.pathname)
    setShowingShare(false)
  }

  const refreshStreak = useCallback(async () => {
    try {
      const playerId = getPlayerId()
      if (playerId) {
        const res = await fetch(`/api/streak?player_id=${encodeURIComponent(playerId)}`)
        if (res.ok) {
          const data = await res.json()
          setStreak(data.streak || 0)
          return
        }
      }
      const res = await fetch("/api/history")
      if (res.ok) {
        const data = await res.json()
        setStreak(data.streak || 0)
      }
    } catch {}
  }, [])

  return (
    <main className="flex min-h-svh flex-col items-center bg-background pb-16">
      <GameHeader onStatsOpen={() => setStatsOpen(true)} onHelpOpen={() => setHelpOpen(true)} />
      {tab === "daily" && streak > 0 && <StreakBadge streak={streak} />}
      {showingShare && shareData && shareWordData ? (
        <SharedResult
          data={shareData}
          officialDefinition={shareWordData.definition}
          partOfSpeech={shareWordData.partOfSpeech}
          conceptLabels={shareWordData.conceptLabels}
          onPlayYourself={handlePlayYourself}
        />
      ) : (
        <>
          <ModeToggle
            tab={tab}
            difficulty={difficulty}
            onTabChange={handleTabChange}
            onDifficultyChange={handleDifficultyChange}
          />

          {/* External mode toggle — always visible in practice (not during summary).
               Shows the OPPOSITE mode to what is currently active. */}
          {tab === "practice" && !showSummary && (
            <button
              type="button"
              onClick={() => {
                if (mirrorMode) {
                  resetSession()
                  handleNextPracticeWord()
                  setMirrorMode(false)
                } else {
                  handleNextPracticeWord()
                  setMirrorMode(true)
                }
              }}
              className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/>
              </svg>
              {mirrorMode ? "Normal mode" : "Mirror mode"}
            </button>
          )}

          <div className={tab === "daily" && difficulty === "easy" ? "" : "hidden"}>
            <Game key="daily-easy" dailyWord={dailyWord} difficulty="easy" isPractice={false} onStartPractice={() => handleTabChange("practice")} onComplete={refreshStreak} />
          </div>
          <div className={tab === "daily" && difficulty === "hard" ? "" : "hidden"}>
            <Game key="daily-hard" dailyWord={hardWord} difficulty="hard" isPractice={false} onStartPractice={() => handleTabChange("practice")} onComplete={refreshStreak} />
          </div>

          {tab === "practice" && practiceWord && !mirrorMode && (
            <Game
              key={`practice-${difficulty}-${practiceKey}-${practiceWord.word}`}
              dailyWord={practiceWord}
              difficulty={difficulty}
              isPractice={true}
              onNextWord={handleNextPracticeWord}
            />
          )}

          {tab === "practice" && practiceWord && mirrorMode && !showSummary && (
            <MirrorGame
              key={`mirror-${difficulty}-${practiceWord.word}`}
              word={practiceWord}
              isPractice={true}
              onFlipToNormal={() => {
                resetSession()
                handleNextPracticeWord()
                setMirrorMode(false)
              }}
              onNextWord={handleNextPracticeWord}
              sessionScore={sessionScore}
              sessionStreak={sessionStreak}
              sessionBestStreak={sessionBestStreak}
              multiplier={multiplier}
              onSessionUpdate={handleSessionUpdate}
              onSessionEnd={handleSessionEnd}
              onComplete={(result) => {
                const isPerfect = result.correct && result.guesses === 1 && result.hintsUsed === 0
                const updated = updateMirrorStreak(difficulty, isPerfect)
                setMirrorStreak(updated)
              }}
            />
          )}

          {tab === "practice" && mirrorMode && showSummary && summaryData && (
            <MirrorSessionSummary
              score={summaryData.score}
              wordsSolved={summaryData.wordsSolved}
              bestMultiplier={summaryData.bestMultiplier}
              wordHistory={summaryData.wordHistory}
              onPlayAgain={() => {
                resetSession()
                handleNextPracticeWord()
              }}
              onFlipBack={() => {
                resetSession()
                handleNextPracticeWord()
                setMirrorMode(false)
              }}
            />
          )}
        </>
      )}
      <StatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} />
      <HowToPlay open={helpOpen} onClose={() => setHelpOpen(false)} />
    </main>
  )
}
