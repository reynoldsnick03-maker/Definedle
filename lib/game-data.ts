import { dailyWords } from "./words-daily"
import { practiceWords } from "./words-practice"
import { hardWords } from "./words-hard"

export interface KeyConcept {
  keyword: string
  matchTerms: string[]
  label: string
  hint: string
}

export interface AltDefinition {
  definition: string
  keyConcepts: KeyConcept[]
}

export interface DailyWord {
  word: string
  partOfSpeech: string
  definition: string
  keyConcepts: KeyConcept[]
  synonyms: string[]
  etymology?: string
  altDefinitions?: AltDefinition[]
}

export type GameMode = "easy" | "hard"

// Re-export for convenience
export { dailyWords, practiceWords, hardWords }

function getDayOfYear(): number {
  const now = new Date()
  const utcYear = now.getUTCFullYear()
  const utcMonth = now.getUTCMonth()
  const utcDate = now.getUTCDate()
  const startOfYear = Date.UTC(utcYear, 0, 1)
  const today = Date.UTC(utcYear, utcMonth, utcDate)
  return Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24))
}

export function getTodaysWord(): DailyWord {
  const index = getDayOfYear() % dailyWords.length
  return dailyWords[index]
}

// Hard mode start date: February 26, 2026 (word list refresh)
const HARD_MODE_START = Date.UTC(2026, 1, 26) // Month is 0-indexed

function getDaysSinceHardModeStart(): number {
  const now = new Date()
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  return Math.floor((today - HARD_MODE_START) / (1000 * 60 * 60 * 24))
}

export function getTodaysHardWord(): DailyWord {
  // Cycles through the hard word list starting from Feb 26, 2026
  const daysSinceStart = getDaysSinceHardModeStart()
  const index = ((daysSinceStart % hardWords.length) + hardWords.length) % hardWords.length
  return hardWords[index]
}

/**
 * Returns the set of words that will appear as a daily word within
 * the next `days` days (including today). These are excluded from
 * practice so players don't spoil an upcoming daily.
 */
function getUpcomingDailyWords(days: number): Set<string> {
  const dayOfYear = getDayOfYear()
  const daysSinceHardStart = getDaysSinceHardModeStart()
  const upcoming = new Set<string>()
  for (let d = 0; d < days; d++) {
    const easyIdx = (dayOfYear + d) % dailyWords.length
    const hardIdx = ((daysSinceHardStart + d) % hardWords.length + hardWords.length) % hardWords.length
    upcoming.add(dailyWords[easyIdx].word)
    upcoming.add(hardWords[hardIdx].word)
  }
  return upcoming
}

export function getRandomPracticeWord(excludeWords: string[] = [], difficulty: GameMode = "easy"): DailyWord {
  const pool = difficulty === "hard" ? hardWords : [...dailyWords, ...practiceWords]
  const upcoming = getUpcomingDailyWords(7)
  const available = pool.filter(
    (w) => !excludeWords.includes(w.word) && !upcoming.has(w.word)
  )
  if (available.length === 0) {
    // Fallback: ignore the blackout window but still respect already-played words
    const fallback = pool.filter((w) => !excludeWords.includes(w.word))
    if (fallback.length === 0) {
      return pool[Math.floor(Math.random() * pool.length)]
    }
    return fallback[Math.floor(Math.random() * fallback.length)]
  }
  return available[Math.floor(Math.random() * available.length)]
}
