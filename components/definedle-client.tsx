"use client"

import { useState, useCallback, useEffect } from "react"
import { Settings, CircleHelp, BarChart3, Search } from "lucide-react"
import { Game } from "@/components/game"
import { StatsPanel } from "@/components/stats-panel"
import { HowToPlay } from "@/components/how-to-play"
import { SettingsPanel } from "@/components/settings-panel"
import { DefinedleWordHistoryPanel } from "@/components/definedle-word-history-panel"
import { SharedResult, type ShareData } from "@/components/shared-result"
import { ModeToggle, type TabMode } from "@/components/mode-toggle"
import { StreakBadge } from "@/components/streak-badge"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getWordByName } from "@/lib/game-data"
import { formatDateKey, getHistory, computeStats, migrateFromCookie } from "@/lib/history"

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

export function PageClient({ dailyWord, hardWord, shareData, shareWordData }: PageClientProps) {
  const [statsOpen, setStatsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [wordHistoryOpen, setWordHistoryOpen] = useState(false)
  const [showingShare, setShowingShare] = useState(!!shareData && !!shareWordData)
  const [tab, setTab] = useState<TabMode>("daily")
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [streak, setStreak] = useState(0)
  
  // Practice state -- separate per difficulty so switching doesn't reset
  const [practiceEasy, setPracticeEasy] = useState<DailyWord | null>(null)
  const [practiceHard, setPracticeHard] = useState<DailyWord | null>(null)
  const [urlWordHandled, setUrlWordHandled] = useState(false)

  // Handle ?word= parameter on client mount
  useEffect(() => {
    if (urlWordHandled) return
    
    const params = new URLSearchParams(window.location.search)
    const wordParam = params.get("word") || Array.from(params.keys()).find(k => k !== "reset" && k !== "r")
    
    if (wordParam) {
      const found = getWordByName(wordParam)
      if (found) {
        // Set tab to practice and load the word
        setTab("practice")
        setDifficulty(found.difficulty)
        
        if (found.difficulty === "easy") {
          setPracticeEasy(found.word)
        } else {
          setPracticeHard(found.word)
        }
        
        // Clean URL without reloading
        window.history.replaceState({}, "", window.location.pathname)
      }
    }
    
    setUrlWordHandled(true)
  }, [urlWordHandled])

  // Fetch streak on mount
  useEffect(() => {
    const fetchStreak = () => {
      try {
        migrateFromCookie()
        const entries = getHistory()
        const stats = computeStats(entries)
        setStreak(stats.streak || 0)
      } catch {}
    }
    fetchStreak()
  }, [])
  const [playedEasy, setPlayedEasy] = useState<string[]>([])
  const [playedHard, setPlayedHard] = useState<string[]>([])
  const [practiceKeyEasy, setPracticeKeyEasy] = useState(0)
  const [practiceKeyHard, setPracticeKeyHard] = useState(0)

  // ?reset in URL clears all saved state and reloads clean
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    
    if (params.has("reset")) {
      // Clear daily result cookies
      document.cookie = "definedle-today=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "definedle-today-hard=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      // Clear history and dropdown state
      localStorage.removeItem("definedle-history")
      Object.keys(localStorage).filter(k => k.startsWith("definedle-improve-")).forEach(k => localStorage.removeItem(k))
      // Redirect without ?reset
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
      setPracticeKeyEasy((k) => k + 1)
    } else {
      setPracticeHard(word)
      setPlayedHard([word.word])
      setPracticeKeyHard((k) => k + 1)
    }
  }, [playedEasy, playedHard])

  const handleNextPracticeWord = useCallback(() => {
    const played = difficulty === "easy" ? playedEasy : playedHard
    const word = getRandomPracticeWord(played, difficulty)
    if (difficulty === "easy") {
      setPlayedEasy((prev) => [...prev, word.word])
      setPracticeEasy(word)
      setPracticeKeyEasy((k) => k + 1)
    } else {
      setPlayedHard((prev) => [...prev, word.word])
      setPracticeHard(word)
      setPracticeKeyHard((k) => k + 1)
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
    // If switching difficulty in practice, ensure that difficulty has a word
    if (tab === "practice") {
      const current = newDifficulty === "easy" ? practiceEasy : practiceHard
      if (!current) startPractice(newDifficulty)
    }
  }, [tab, practiceEasy, practiceHard, startPractice])

  const handlePlayYourself = () => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", window.location.pathname)
    }
    setShowingShare(false)
  }

  // Callback to refresh streak after game completion
  const refreshStreak = useCallback(() => {
    try {
      const entries = getHistory()
      const stats = computeStats(entries)
      setStreak(stats.streak || 0)
    } catch {}
  }, [])

  return (
    <main className="flex min-h-svh flex-col items-center bg-background" style={{ paddingBottom: "calc(4rem + env(safe-area-inset-bottom))" }}>
      {/* Header */}
      <header className="flex flex-col items-center gap-1 pt-10 pb-6 md:pt-14 md:pb-8 w-full max-w-md mx-auto px-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-1 items-center justify-start gap-1 min-w-0">
            <button
              type="button"
              onClick={() => setSettingsOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none text-muted-foreground hover:text-foreground"
              aria-label="Settings"
            >
              <Settings className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setHelpOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none text-muted-foreground hover:text-foreground"
              aria-label="How to play"
            >
              <CircleHelp className="h-[18px] w-[18px]" />
            </button>
          </div>
          <h1 className="font-serif text-3xl font-light tracking-tight text-foreground">
            Definedle
          </h1>
          <div className="flex flex-1 items-center justify-end gap-1 min-w-0">
            <button
              type="button"
              onClick={() => setStatsOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none text-muted-foreground hover:text-foreground"
              aria-label="View stats"
            >
              <BarChart3 className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={() => setWordHistoryOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none text-muted-foreground hover:text-foreground"
              aria-label="Word history"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
        <p className="text-sm tracking-wide text-muted-foreground">
          Define the word
        </p>
        <div className="mt-3 h-px w-12 bg-border" aria-hidden="true" />
      </header>
      {/* Streak badge - only show on daily mode when streak > 0 */}
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
          

          {/* Render both daily games to preserve state (incl. dropdown) when switching */}
          <div className={tab === "daily" && difficulty === "easy" ? "" : "hidden"}>
            <Game
              key="daily-easy"
              dailyWord={dailyWord}
              difficulty="easy"
              isPractice={false}
              onStartPractice={() => handleTabChange("practice")}
              onComplete={refreshStreak}
            />
          </div>
          <div className={tab === "daily" && difficulty === "hard" ? "" : "hidden"}>
            <Game
              key="daily-hard"
              dailyWord={hardWord}
              difficulty="hard"
              isPractice={false}
              onStartPractice={() => handleTabChange("practice")}
              onComplete={refreshStreak}
            />
          </div>
          {/* Practice game */}
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
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <DefinedleWordHistoryPanel open={wordHistoryOpen} onClose={() => setWordHistoryOpen(false)} />
    </main>
  )
}
