"use client"

import { useState, useEffect } from "react"
import { TabBar, type AppTab } from "@/components/tab-bar"
import { PageClient as DefinedleClient } from "@/components/definedle-client"
import { BlitzClient } from "@/components/blitz-client"
import type { DailyWord } from "@/lib/game-data"
import type { ShareData } from "@/components/shared-result"
import { SettingsPanel } from "@/components/settings-panel"
import { EasyListModal } from "@/components/easy-list-modal"

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
  const [activeTab, setActiveTab] = useState<AppTab>(() => {
    if (typeof window === "undefined") return "definedle"
    try {
      const saved = localStorage.getItem("definedle-active-tab")
      return (saved === "blitz" || saved === "definedle") ? saved as AppTab : "definedle"
    } catch { return "definedle" }
  })
  const [highlightBlitz, setHighlightBlitz] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [easyListOpen, setEasyListOpen] = useState(false)

  useEffect(() => {
    const handler = () => setHighlightBlitz(true)
    window.addEventListener("definedle-highlight-blitz", handler)
    return () => window.removeEventListener("definedle-highlight-blitz", handler)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (params.has("easylist")) {
      setEasyListOpen(true)
    }
  }, [])

  return (
    <>
      {activeTab === "definedle" ? (
        <DefinedleClient
          dailyWord={dailyWord}
          hardWord={hardWord}
          shareData={shareData}
          shareWordData={shareWordData}
          onSettingsOpen={() => setSettingsOpen(true)}
        />
      ) : (
        <BlitzClient
          onSettingsOpen={() => setSettingsOpen(true)}
        />
      )}

      <TabBar activeTab={activeTab} onTabChange={(t) => {
        setActiveTab(t)
        setHighlightBlitz(false)
        try { localStorage.setItem("definedle-active-tab", t) } catch {}
      }} highlightBlitz={highlightBlitz} />

      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} isBlitz={activeTab === "blitz"} />

      {easyListOpen && <EasyListModal onClose={() => setEasyListOpen(false)} />}
    </>
  )
}
