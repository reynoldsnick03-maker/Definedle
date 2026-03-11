// localStorage-based game history. Stores a compact array of daily results.

export interface HistoryEntry {
  /** Date key, e.g. "2026-02-21" */
  d: string
  /** Score 0-100 */
  s: number
  /** Concepts matched / total, e.g. "3/5" */
  c: string
  /** The word played */
  w: string
  /** Game mode: "easy" | "hard" (defaults to "easy" for legacy entries) */
  m?: "easy" | "hard"
  /** Player's definition (stored for nemesis display) */
  p?: string
}

export interface GameHistory {
  entries: HistoryEntry[]
  /** Current daily streak */
  streak: number
  /** Best score ever */
  best: number
  /** Total games played */
  played: number
}

const LS_KEY = "definedle-history-v2"
const LEGACY_COOKIE_NAME = "definedle-history"
const MAX_ENTRIES = 365

// ── localStorage read/write ───────────────────────────────────────────────────

export function getHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {}
  return []
}

export function saveHistory(entries: HistoryEntry[]): void {
  if (typeof window === "undefined") return
  try {
    const trimmed = entries.slice(-MAX_ENTRIES)
    localStorage.setItem(LS_KEY, JSON.stringify(trimmed))
  } catch {}
}

export function addEntryToHistory(
  entries: HistoryEntry[],
  entry: HistoryEntry
): HistoryEntry[] {
  const mode = entry.m || "easy"
  const filtered = entries.filter((e) => !(e.d === entry.d && (e.m || "easy") === mode))
  filtered.push(entry)
  filtered.sort((a, b) => a.d.localeCompare(b.d))
  return filtered.slice(-MAX_ENTRIES)
}

/** Save a single entry to localStorage history (reads, merges, writes). */
export function saveEntryToHistory(entry: HistoryEntry): HistoryEntry[] {
  const entries = getHistory()
  const updated = addEntryToHistory(entries, entry)
  saveHistory(updated)
  return updated
}

/** One-time migration: read old server cookie value and merge into localStorage. */
export function migrateFromCookie(): void {
  if (typeof window === "undefined") return
  // Only migrate once
  if (localStorage.getItem("definedle-history-migrated")) return
  try {
    const match = document.cookie
      .split("; ")
      .find((c) => c.startsWith(LEGACY_COOKIE_NAME + "="))
    if (match) {
      const raw = decodeURIComponent(match.split("=").slice(1).join("="))
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existing = getHistory()
        let merged = [...existing]
        for (const entry of parsed) {
          merged = addEntryToHistory(merged, entry)
        }
        saveHistory(merged)
      }
    }
  } catch {}
  localStorage.setItem("definedle-history-migrated", "1")
}

// ── Stats computation ─────────────────────────────────────────────────────────

export function computeStats(entries: HistoryEntry[]): GameHistory {
  const played = entries.length
  const best = entries.reduce((max, e) => Math.max(max, e.s), 0)

  let streak = 0
  if (entries.length > 0) {
    const now = new Date()
    const todayMs = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    const yesterdayMs = todayMs - 86400000
    const uniqueDays = [...new Set(entries.map((e) => e.d))].sort((a, b) => b.localeCompare(a))

    // Allow streak to start from today OR yesterday (grace period for opening
    // stats before completing today's game, or just after midnight)
    const mostRecentMs = new Date(uniqueDays[0] + "T00:00:00Z").getTime()
    if (mostRecentMs !== todayMs && mostRecentMs !== yesterdayMs) {
      return { entries, streak: 0, best, played }
    }

    // Walk backwards, counting consecutive days
    let expectedMs = mostRecentMs
    for (const day of uniqueDays) {
      const dayMs = new Date(day + "T00:00:00Z").getTime()
      if (dayMs === expectedMs) {
        streak++
        expectedMs -= 86400000
      } else {
        break
      }
    }
  }

  return { entries, streak, best, played }
}

export function formatDateKey(date: Date): string {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`
}

// Kept for backwards compatibility with any code that still references it
export function getCookieName(): string { return LEGACY_COOKIE_NAME }
export function parseHistoryCookie(v: string | undefined): HistoryEntry[] {
  if (!v) return []
  try { const p = JSON.parse(v); return Array.isArray(p) ? p : [] } catch { return [] }
}
export function serializeHistory(entries: HistoryEntry[]): string {
  return JSON.stringify(entries.slice(-MAX_ENTRIES))
}

// ══════════════════════════════════════════════════════════════════════════════
// Mirror Mode Streak - localStorage based (practice mode only)
// ══════════════════════════════════════════════════════════════════════════════

export interface MirrorStreak {
  easyStreak: number
  easyBest: number
  hardStreak: number
  hardBest: number
}

const MIRROR_STREAK_KEY = "definedle-mirror-streak"

export function getMirrorStreak(): MirrorStreak {
  if (typeof window === "undefined") {
    return { easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 }
  }
  try {
    const stored = localStorage.getItem(MIRROR_STREAK_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch {
    // Ignore parse errors
  }
  return { easyStreak: 0, easyBest: 0, hardStreak: 0, hardBest: 0 }
}

export function saveMirrorStreak(streak: MirrorStreak): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(MIRROR_STREAK_KEY, JSON.stringify(streak))
  } catch {
    // Ignore storage errors
  }
}

/**
 * Update mirror streak after a game.
 * @param difficulty - "easy" or "hard"
 * @param isPerfect - true if solved in 1 guess with 0 hints
 * @returns the updated streak object
 */
export function updateMirrorStreak(
  difficulty: "easy" | "hard",
  isPerfect: boolean
): MirrorStreak {
  const current = getMirrorStreak()
  
  if (difficulty === "easy") {
    if (isPerfect) {
      current.easyStreak += 1
      current.easyBest = Math.max(current.easyBest, current.easyStreak)
    } else {
      current.easyStreak = 0
    }
  } else {
    if (isPerfect) {
      current.hardStreak += 1
      current.hardBest = Math.max(current.hardBest, current.hardStreak)
    } else {
      current.hardStreak = 0
    }
  }
  
  saveMirrorStreak(current)
  return current
}
