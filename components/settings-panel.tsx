"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface SettingsPanelProps {
  open: boolean
  onClose: () => void
  isBlitz?: boolean
}

export interface Settings {
  // Definedle
  strictMode: boolean
  showScore: boolean
  showConceptBreakdown: boolean
  // Blitz
  showSimilarity: boolean
  showWordLength: boolean
  skipPenaltyOff: boolean
  autoAdvance: boolean
  blitzDarkMode: boolean
  // General
  darkMode: boolean
  reduceMotion: boolean
  fontSize: "small" | "medium" | "large"
  // Nemesis (kept from before)
  nemesisWords: boolean
  nemesisThreshold: "poor" | "awful"
}

export const DEFAULT_SETTINGS: Settings = {
  strictMode: false,
  showScore: true,
  showConceptBreakdown: true,
  showSimilarity: true,
  showWordLength: false,
  skipPenaltyOff: false,
  autoAdvance: false,
  blitzDarkMode: true,
  darkMode: false,
  reduceMotion: false,
  fontSize: "medium",
  nemesisWords: false,
  nemesisThreshold: "awful",
}

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem("definedle-settings")
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) }
  } catch {}
  return DEFAULT_SETTINGS
}

export function saveSettings(s: Settings) {
  try {
    localStorage.setItem("definedle-settings", JSON.stringify(s))
    window.dispatchEvent(new Event("definedle-settings-changed"))
  } catch {}
}

export function SettingsPanel({ open, onClose, isBlitz = false }: SettingsPanelProps) {
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
      <div className="relative z-10 w-full max-w-sm max-h-[calc(85dvh-64px)] sm:max-h-[90dvh] flex flex-col rounded-t-2xl sm:rounded-2xl border border-border bg-card shadow-lg animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2 fade-in duration-300 mb-[64px] sm:mb-0">

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

        {/* Scrollable content */}
        <div className="overflow-y-auto overscroll-contain px-6 pb-10 flex flex-col gap-6">

          {/* ── Definedle ─────────────────────────────────────────── */}
          <SectionHeader label="Definedle" />

          <SettingRow
            label="Strict mode"
            description="Disables the etymology hint button. It will still be visible but greyed out."
            checked={settings.strictMode}
            onChange={v => update({ strictMode: v })}
          />

          <SettingRow
            label="Show score"
            description="Show your numerical score after submitting. Turn off to play without pressure."
            checked={settings.showScore}
            onChange={v => update({ showScore: v })}
          />

          <SettingRow
            label="Show concept breakdown"
            description="After submitting, show which key concepts your definition covered."
            checked={settings.showConceptBreakdown}
            onChange={v => update({ showConceptBreakdown: v })}
          />

          <div className="h-px bg-border" />

          {/* ── Blitz ─────────────────────────────────────────────── */}
          <SectionHeader label="Blitz" />

          <SettingRow
            label="Show similarity %"
            description="Show how close your guess was after a wrong answer."
            checked={settings.showSimilarity}
            onChange={v => update({ showSimilarity: v })}
          />

          <SettingRow
            label="Show word length"
            description="Show the number of letters in the target word before you guess."
            checked={settings.showWordLength}
            onChange={v => update({ showWordLength: v })}
          />

          <SettingRow
            label="Skip penalty off"
            description="Skipping a word costs no multiplier. Useful for casual play or learning."
            checked={settings.skipPenaltyOff}
            onChange={v => update({ skipPenaltyOff: v })}
          />

          <SettingRow
            label="Auto-advance"
            description="After a correct guess, automatically move to the next word after 2 seconds."
            checked={settings.autoAdvance}
            onChange={v => update({ autoAdvance: v })}
          />

          <div className="h-px bg-border" />

          {/* ── General ───────────────────────────────────────────── */}
          <SectionHeader label="General" />

          <SettingRow
            label="Dark mode"
            description="Use a dark theme throughout the app."
            checked={settings.darkMode}
            onChange={v => update({ darkMode: v })}
          />

          <SettingRow
            label="Reduce motion"
            description="Disable floating score animations and panel transitions."
            checked={settings.reduceMotion}
            onChange={v => update({ reduceMotion: v })}
          />

          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-sm font-medium text-foreground">Font size</span>
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Adjust the size of the word display.
                </span>
              </div>
              <div className="inline-flex items-center rounded-lg border border-border bg-muted/50 p-0.5 shrink-0">
                {(["small", "medium", "large"] as const).map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => update({ fontSize: size })}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-200 capitalize ${
                      settings.fontSize === size
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {size === "small" ? "S" : size === "medium" ? "M" : "L"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-border" />

          {/* ── Nemesis Words ─────────────────────────────────────── */}
          <SectionHeader label="Nemesis Words" />

          <SettingRow
            label="Enable Nemesis Words"
            description={isBlitz
              ? "When you replay a word you previously struggled with, see your past guess and score."
              : "When you replay a word you previously struggled with, see your past definition and score."}
            checked={settings.nemesisWords}
            onChange={v => update({ nemesisWords: v })}
          />

          {settings.nemesisWords && (
            <div className="flex flex-col gap-2 pl-1">
              <p className="text-xs text-muted-foreground">Show nemesis when previous result was:</p>
              <div className="inline-flex items-center rounded-lg border border-border bg-muted/50 p-0.5 self-start">
                {(["awful", "poor"] as const).map(threshold => (
                  <button
                    key={threshold}
                    type="button"
                    onClick={() => update({ nemesisThreshold: threshold })}
                    className={`rounded-md px-4 py-1.5 text-xs font-medium transition-all duration-200 min-h-[28px] ${
                      settings.nemesisThreshold === threshold
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {threshold === "awful" ? "Awful only" : "Poor or worse"}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground/70">
                A flawless previous result will never trigger Nemesis.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

function SectionHeader({ label }: { label: string }) {
  return (
    <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium -mb-2">
      {label}
    </h3>
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
