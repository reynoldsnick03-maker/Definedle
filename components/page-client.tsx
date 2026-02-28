"use client"

import { useState, useCallback, useEffect } from "react"
import { GameHeader } from "@/components/game-header"
import { Game } from "@/components/game"
import { StatsPanel } from "@/components/stats-panel"
import { HowToPlay } from "@/components/how-to-play"
import { SharedResult, type ShareData } from "@/components/shared-result"
import { ModeToggle, type TabMode } from "@/components/mode-toggle"
import { MirrorGame } from "@/components/mirror-game"
import { StreakBadge } from "@/components/streak-badge"
import type { DailyWord, GameMode } from "@/lib/game-data"
import { getRandomPracticeWord, getWordByName } from "@/lib/game-data"
import { getMirrorStreak, updateMirrorStreak, type MirrorStreak } from "@/lib/history"

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
  const [showingShare, setShowingShare] = useState(!!shareData && !!shareWordData)
  const [tab, setTab] = useState<TabMode>("daily")
  const [difficulty, setDifficulty] = useState<GameMode>("easy")
  const [streak, setStreak] = useState(0)
  const [mirrorMode, setMirrorMode] = useState(false)
  const [mirrorStreak, setMirrorStreak] = useState<MirrorStreak>({ easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 })
  
  // Load mirror streak on mount
  useEffect(() => {
    try {
      setMirrorStreak(getMirrorStreak())
    } catch {
      // Ignore errors loading streak
    }
  }, [])
  
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
    const fetchStreak = async () => {
      try {
        const res = await fetch("/api/history")
        if (res.ok) {
          const data = await res.json()
          setStreak(data.streak || 0)
        }
      } catch {
        // Ignore
      }
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
    setMirrorMode(false) // Reset mirror mode when switching tabs
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
  const refreshStreak = useCallback(async () => {
    try {
      const res = await fetch("/api/history")
      if (res.ok) {
        const data = await res.json()
        setStreak(data.streak || 0)
      }
    } catch {
      // Ignore
    }
  }, [])

  return (
    <main className="flex min-h-svh flex-col items-center bg-background pb-16">
      <GameHeader onStatsOpen={() => setStatsOpen(true)} onHelpOpen={() => setHelpOpen(true)} />
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
          
          {/* Mirror mode flip button - only in practice mode */}
          {tab === "practice" && !mirrorMode && (
            <button
              type="button"
              onClick={() => {
                // Get a new word when entering mirror mode so they can't see the answer
                handleNextPracticeWord()
                setMirrorMode(true)
              }}
              className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              title="Flip to Mirror Mode - guess the word from its definition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"/>
              </svg>
              Mirror Mode
            </button>
          )}
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
          {tab === "practice" && practiceWord && !mirrorMode && (
            <Game
              key={`practice-${difficulty}-${practiceKey}-${practiceWord.word}`}
              dailyWord={practiceWord}
              difficulty={difficulty}
              isPractice={true}
              onNextWord={handleNextPracticeWord}
            />
          )}
          
          {/* Mirror Mode - guess the word from its definition */}
          {tab === "practice" && practiceWord && mirrorMode && (
            <MirrorGame
              key={`mirror-${difficulty}-${practiceKey}-${practiceWord.word}`}
              word={practiceWord}
              isPractice={true}
              onFlipBack={() => {
                handleNextPracticeWord() // Get a new word when flipping back
                setMirrorMode(false)
              }}
              onNextWord={() => {
                handleNextPracticeWord()
              }}
              streak={difficulty === "easy" 
                ? { current: mirrorStreak.easyStreak, best: mirrorStreak.easyBest }
                : { current: mirrorStreak.hardStreak, best: mirrorStreak.hardBest }
              }
              onComplete={(result) => {
                // Perfect = correct on first guess with no hints
                const isPerfect = result.correct && result.guesses === 1 && result.hintsUsed === 0
                const updated = updateMirrorStreak(difficulty, isPerfect)
                setMirrorStreak(updated)
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
