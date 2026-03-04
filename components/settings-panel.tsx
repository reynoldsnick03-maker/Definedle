"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface SettingsPanelProps {
  open: boolean
  onClose: () => void
}

interface Settings {
  nemesisWords: boolean
  nemesisThreshold: "poor" | "awful"
  blitzDarkMode: boolean
  reduceMotion: boolean
  defaultHard: boolean
}

const DEFAULT_SETTINGS: Settings = {
  nemesisWords: false,
  nemesisThreshold: "awful",
  blitzDarkMode: true,
  reduceMotion: false,
  defaultHard: false,
}

function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem("definedle-settings")
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }
  } catch {}
  return DEFAULT_SETTINGS
}

function saveSettings(s: Settings) {
  try { localStorage.setItem("definedle-settings", JSON.stringify(s)) } catch {}
}

export function SettingsPanel({ open, onClose }: SettingsPanelProps) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS)

  useEffect(() => {
    if (open) setSettings(loadSettings())
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [open, onClose])

  const update = (patch: Partial<Settings>) => {
    const next = { ...settings, ...patch }
    setSettings(next)
    saveSettings(next)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-foreground/20 animate-in fade-in duration-200" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-sm max-h-[85dvh] sm:max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <h2 className="font-serif text-xl font-normal text-foreground">Settings</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close settings"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 pb-8 flex flex-col gap-6">

          {/* Gameplay section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Gameplay</h3>

            <SettingRow
              label="Hard mode by default"
              description="Start each session on Hard difficulty"
              checked={settings.defaultHard}
              onChange={v => update({ defaultHard: v })}
            />
          </div>

          <div className="h-px bg-border" />

          {/* Nemesis Words section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Nemesis Words</h3>

            <SettingRow
              label="Enable Nemesis Words"
              description="When you replay a word you previously struggled with, see your past definition and score"
              checked={settings.nemesisWords}
              onChange={v => update({ nemesisWords: v })}
            />

            {settings.nemesisWords && (
              <div className="flex flex-col gap-2 pl-1">
                <p className="text-xs text-muted-foreground">Show nemesis when previous result was:</p>
                <div className="inline-flex items-center rounded-lg border border-border bg-muted/50 p-0.5 self-start">
                  <button
                    type="button"
                    onClick={() => update({ nemesisThreshold: "awful" })}
                    className={`rounded-md px-4 py-1.5 text-xs font-medium transition-all duration-200 min-h-[28px] ${
                      settings.nemesisThreshold === "awful"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Awful only
                  </button>
                  <button
                    type="button"
                    onClick={() => update({ nemesisThreshold: "poor" })}
                    className={`rounded-md px-4 py-1.5 text-xs font-medium transition-all duration-200 min-h-[28px] ${
                      settings.nemesisThreshold === "poor"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Poor or worse
                  </button>
                </div>
                <p className="text-[10px] text-muted-foreground/70">
                  A flawless previous result will never trigger Nemesis — it would just give you the answer.
                </p>
              </div>
            )}
          </div>

          <div className="h-px bg-border" />

          {/* Blitz section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Blitz</h3>

            <SettingRow
              label="Dark theme"
              description="Blitz uses a dark background to feel distinct from Definedle"
              checked={settings.blitzDarkMode}
              onChange={v => update({ blitzDarkMode: v })}
            />
          </div>

          <div className="h-px bg-border" />

          {/* Accessibility section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Accessibility</h3>

            <SettingRow
              label="Reduce motion"
              description="Minimise animations throughout the app"
              checked={settings.reduceMotion}
              onChange={v => update({ reduceMotion: v })}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

function SettingRow({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-0.5 flex-1">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {description && <span className="text-xs text-muted-foreground leading-relaxed">{description}</span>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
          checked ? "bg-foreground" : "bg-muted-foreground/30"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  )
}
