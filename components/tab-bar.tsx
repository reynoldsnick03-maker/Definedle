"use client"

import { useEffect, useState } from "react"

export type AppTab = "definedle" | "blitz"

interface TabBarProps {
  activeTab: AppTab
  onTabChange: (tab: AppTab) => void
}

export function TabBar({ activeTab, onTabChange }: TabBarProps) {
  const [hasVisitedBlitz, setHasVisitedBlitz] = useState(true)
  const [blitzRounds, setBlitzRounds] = useState(0)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    try {
      const visited = localStorage.getItem("definedle-blitz-visited") === "1"
      setHasVisitedBlitz(visited)
      const rounds = parseInt(localStorage.getItem("definedle-rounds-since-blitz") || "0", 10)
      setBlitzRounds(rounds)
    } catch {}
  }, [])

  // Pulse every 3 Definedle rounds until player has visited Blitz
  useEffect(() => {
    if (hasVisitedBlitz) return
    if (blitzRounds > 0 && blitzRounds % 3 === 0) {
      setPulse(true)
      const t = setTimeout(() => setPulse(false), 2000)
      return () => clearTimeout(t)
    }
  }, [blitzRounds, hasVisitedBlitz])

  const handleTabChange = (tab: AppTab) => {
    if (tab === "blitz" && !hasVisitedBlitz) {
      try {
        localStorage.setItem("definedle-blitz-visited", "1")
        localStorage.setItem("definedle-rounds-since-blitz", "0")
      } catch {}
      setHasVisitedBlitz(true)
      setPulse(false)
    }
    onTabChange(tab)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-card">
      {/* Definedle tab */}
      <button
        type="button"
        onClick={() => handleTabChange("definedle")}
        className={`flex flex-1 flex-col items-center gap-1 pb-5 pt-3 transition-colors focus-visible:outline-none ${
          activeTab === "definedle" ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
        }`}
        aria-label="Definedle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        </svg>
        <span className="text-[10px] font-medium tracking-wide">Definedle</span>
        {activeTab === "definedle" && (
          <span className="h-1 w-1 rounded-full bg-foreground" aria-hidden="true" />
        )}
      </button>

      {/* Blitz tab */}
      <button
        type="button"
        onClick={() => handleTabChange("blitz")}
        className={`relative flex flex-1 flex-col items-center gap-1 pb-5 pt-3 transition-colors focus-visible:outline-none ${
          activeTab === "blitz" ? "text-amber-500" : "text-muted-foreground hover:text-foreground/70"
        }`}
        aria-label="Blitz"
      >
        <span className={pulse ? "animate-pulse" : ""}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={activeTab === "blitz" ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </span>
        <span className="text-[10px] font-medium tracking-wide">Blitz</span>
        {activeTab === "blitz" && (
          <span className="h-1 w-1 rounded-full bg-amber-500" aria-hidden="true" />
        )}
        {/* Pulse ring when nudging player toward Blitz */}
        {pulse && activeTab !== "blitz" && (
          <span className="absolute top-2 right-[calc(50%-18px)] h-2 w-2 rounded-full bg-amber-400 ring-4 ring-amber-400/30 animate-ping" aria-hidden="true" />
        )}
      </button>
    </nav>
  )
}
