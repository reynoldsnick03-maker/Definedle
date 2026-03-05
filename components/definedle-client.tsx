"use client"

import { useState, useCallback, useEffect } from "react"
import { Game } from "@/components/game"
import { StatsPanel } from "@/components/stats-panel"
import { HowToPlay } from "@/components/how-to-play"
import { SharedResult, type ShareData } from "@/components/shared-result"
import { ModeToggle, type TabMode } from "@/components/mode-toggle"
import { StreakBadge } from "@/components/streak-badge"
import { BarChart3, CircleHelp, Settings } from "lucide-react"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getWordByName } from "@/lib/game-data"
import { getPlayerId } from "@/lib/player-id"

interface DefinedleClientProps {
  dailyWord: DailyWord
  hardWord: DailyWord
  shareData?: ShareData | null
  shareWordData?: {
    definition: string
    partOfSpeech: string
    conceptLabels: string[]
  } | null
  onSettingsOpen: () => void
}

export function DefinedleClient({
  dailyWord,
  hardWord,
  shareData,
  shareWordData,
  onSettingsOpen,
}: DefinedleClientProps) {
  const [statsOpen, setStatsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [showingShare, setShowingShare] = useState(!!shareData && !!shareWordData)
  const [tab, setTab] = useState<TabMode>("daily")
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [streak, setStreak] = useState(0)

  const [practiceEasy, setPracticeEasy] = useState<DailyWord | null>(null)
  const [practiceHard, setPracticeHard] = useState<DailyWord | null>(null)
  const [urlWordHandled, setUrlWordHandled] = useState(false)
  const [playedEasy, setPlayedEasy] = useState<string[]>([])
  const [playedHard, setPlayedHard] = useState<string[]>([])
  const [practiceKeyEasy, setPracticeKeyEasy] = useState(0)
  const [practiceKeyHard, setPracticeKeyHard] = useState(0)

  const practiceWord = difficulty === "easy" ? practiceEasy : practiceHard
  const practiceKey = difficulty === "easy" ? practiceKeyEasy : practiceKeyHard

  // URL word param handling
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

  // Reset cookie handling
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (params.has("reset")) {
      document.cookie = "definedle-today=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "definedle-today-hard=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      localStorage.removeItem("definedle-history")
      window.history.replaceState({}, "", window.location.pathname)
    }
  }, [])

  // Fetch streak
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

  return (
    <main className="flex min-h-svh flex-col items-center bg-background pb-24">
      {/* Header */}
      <header className="flex flex-col items-center gap-1 pt-10 pb-6 md:pt-14 md:pb-8 w-full max-w-md px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-1 items-center justify-start min-w-0">
            <button
              type="button"
              onClick={onSettingsOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Settings"
            >
              <Settings className="h-[18px] w-[18px]" />
            </button>
          </div>
          <h1 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
            Definedle
          </h1>
          <div className="flex flex-1 items-center justify-end gap-1 min-w-0">
            <button
              type="button"
              onClick={() => setHelpOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="How to play"
            >
              <CircleHelp className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="View stats"
            >
              <BarChart3 className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground tracking-wide">
          Define the word as precisely as you can
        </p>
        <div className="mt-4 h-px w-12 bg-border" aria-hidden="true" />
      </header>

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

          <div className={tab === "daily" && difficulty === "easy" ? "" : "hidden"}>
            <Game key="daily-easy" dailyWord={dailyWord} difficulty="easy" isPractice={false} streak={streak} onStartPractice={() => handleTabChange("practice")} onComplete={refreshStreak} />
          </div>
          <div className={tab === "daily" && difficulty === "hard" ? "" : "hidden"}>
            <Game key="daily-hard" dailyWord={hardWord} difficulty="hard" isPractice={false} streak={streak} onStartPractice={() => handleTabChange("practice")} onComplete={refreshStreak} />
          </div>

          {tab === "practice" && practiceWord && (
            <Game
              key={`practice-${difficulty}-${practiceKey}-${practiceWord.word}`}
              dailyWord={practiceWord}
              difficulty={difficulty}
              isPractice={true}
              onNextWord={handleNextPracticeWord}
            />
          )}
        </>
      )}

      <StatsPanel open={statsOpen} onClose={() => setStatsOpen(false)} />
      <HowToPlay open={helpOpen} onClose={() => setHelpOpen(false)} />
    </main>
  )
}
