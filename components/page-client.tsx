"use client"

import { useState } from "react"
import { TabBar, type AppTab } from "@/components/tab-bar"
import { DefinedleClient } from "@/components/definedle-client"
import { BlitzClient } from "@/components/blitz-client"
import type { DailyWord } from "@/lib/game-data"
import type { ShareData } from "@/components/shared-result"

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
  const [activeTab, setActiveTab] = useState<AppTab>("definedle")
  const [settingsOpen, setSettingsOpen] = useState(false)

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

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Settings panel placeholder — will be built next round */}
      {settingsOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setSettingsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-t-2xl bg-card border border-border p-6 pb-10 animate-in slide-in-from-bottom-4 duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-serif text-xl font-light">Settings</h2>
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="text-muted-foreground hover:text-foreground text-sm"
              >
                Done
              </button>
            </div>
            <p className="text-sm text-muted-foreground">Settings panel coming next round.</p>
          </div>
        </div>
      )}
    </>
  )
}
