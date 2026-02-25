// Cookie-based game history. Stores a compact array of daily results.
// Cookies are capped at ~4KB so we keep a rolling 60-day window.

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

const COOKIE_NAME = "definedle-history"
const MAX_ENTRIES = 60

export function parseHistoryCookie(cookieValue: string | undefined): HistoryEntry[] {
  if (!cookieValue) return []
  try {
    const parsed = JSON.parse(cookieValue)
    if (Array.isArray(parsed)) return parsed
    return []
  } catch {
    return []
  }
}

export function serializeHistory(entries: HistoryEntry[]): string {
  // Keep only the latest MAX_ENTRIES
  const trimmed = entries.slice(-MAX_ENTRIES)
  return JSON.stringify(trimmed)
}

export function addEntryToHistory(
  entries: HistoryEntry[],
  entry: HistoryEntry
): HistoryEntry[] {
  // Don't duplicate if same date + mode already exists
  const mode = entry.m || "easy"
  const filtered = entries.filter((e) => !(e.d === entry.d && (e.m || "easy") === mode))
  filtered.push(entry)
  // Sort by date ascending
  filtered.sort((a, b) => a.d.localeCompare(b.d))
  return filtered.slice(-MAX_ENTRIES)
}

export function computeStats(entries: HistoryEntry[]): GameHistory {
  const played = entries.length
  const best = entries.reduce((max, e) => Math.max(max, e.s), 0)

  // Calculate streak: count consecutive days backward from today (UTC)
  // Deduplicate by date first (a player may have both easy + hard on the same day)
  let streak = 0
  if (entries.length > 0) {
    const now = new Date()
    const todayMs = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    const uniqueDays = [...new Set(entries.map((e) => e.d))].sort((a, b) => b.localeCompare(a))

    for (let i = 0; i < uniqueDays.length; i++) {
      const expectedMs = todayMs - i * 86400000
      const expectedDate = new Date(expectedMs)
      const expectedKey = formatDateKey(expectedDate)

      if (uniqueDays[i] === expectedKey) {
        streak++
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

export function getCookieName(): string {
  return COOKIE_NAME
}
