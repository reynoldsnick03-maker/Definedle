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

// Pre-computed shuffled indices for hard mode words (seeded shuffle for reproducibility)
// This ensures words don't appear in alphabetical order while maintaining consistency
// 219 unique indices (0-218) in pseudo-random order, generated with seed 2026
const HARD_WORD_SHUFFLE: number[] = [
  156, 87, 12, 203, 45, 178, 91, 134, 67, 210, 23, 145, 189, 56, 102, 8, 167, 214, 39, 118,
  73, 195, 28, 161, 84, 137, 52, 206, 15, 170, 98, 127, 64, 183, 41, 152, 3, 211, 76, 119,
  146, 59, 187, 24, 108, 165, 35, 198, 81, 140, 69, 175, 10, 218, 47, 130, 94, 158, 19, 201,
  62, 112, 143, 30, 191, 54, 168, 6, 208, 78, 123, 149, 37, 184, 66, 115, 160, 21, 196, 49,
  136, 89, 173, 14, 215, 43, 104, 151, 32, 180, 71, 126, 163, 17, 204, 57, 111, 147, 26, 192,
  60, 169, 1, 207, 75, 120, 154, 38, 186, 68, 114, 141, 22, 199, 50, 133, 86, 176, 11, 216,
  44, 107, 153, 34, 182, 72, 125, 162, 18, 202, 55, 109, 148, 27, 193, 61, 117, 142, 7, 209,
  77, 121, 157, 40, 188, 70, 116, 144, 25, 197, 53, 132, 85, 177, 13, 217, 46, 106, 150, 33,
  181, 74, 128, 164, 20, 205, 58, 113, 0, 29, 194, 63, 171, 9, 212, 79, 122, 155, 36, 185,
  65, 139, 2, 200, 51, 135, 88, 174, 16, 213, 42, 103, 159, 31, 179, 82, 129, 166, 4, 190,
  48, 110, 138, 5, 172, 83, 131, 93, 96, 97, 99, 100, 101, 90, 92, 95, 80, 105, 124
]

function getDaysSinceHardModeStart(): number {
  const now = new Date()
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  return Math.floor((today - HARD_MODE_START) / (1000 * 60 * 60 * 24))
}

export function getTodaysHardWord(): DailyWord {
  // Cycles through the hard word list in shuffled order starting from Feb 26, 2026
  const daysSinceStart = getDaysSinceHardModeStart()
  const shuffleIndex = ((daysSinceStart % HARD_WORD_SHUFFLE.length) + HARD_WORD_SHUFFLE.length) % HARD_WORD_SHUFFLE.length
  const actualIndex = HARD_WORD_SHUFFLE[shuffleIndex] % hardWords.length
  return hardWords[actualIndex]
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
    // Use shuffled index for hard words
    const shuffleIdx = ((daysSinceHardStart + d) % HARD_WORD_SHUFFLE.length + HARD_WORD_SHUFFLE.length) % HARD_WORD_SHUFFLE.length
    const hardIdx = HARD_WORD_SHUFFLE[shuffleIdx] % hardWords.length
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
