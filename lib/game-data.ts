import { easyWords } from "./words-easy"
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
  altDefinitions?: AltDefinition[]
}

export type GameMode = "easy" | "hard"

// Re-export for convenience
export { easyWords, hardWords }

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
  const index = getDayOfYear() % easyWords.length
  return easyWords[index]
}

// Hard mode start date: February 26, 2026 (word list refresh)
const HARD_MODE_START = Date.UTC(2026, 1, 26) // Month is 0-indexed

// Pre-computed shuffled indices for hard mode words (seeded shuffle for reproducibility)
// This ensures words don't appear in alphabetical order while maintaining consistency
// 439 unique indices (0-438) in pseudo-random order, generated with seed 42
const HARD_WORD_SHUFFLE: number[] = [
  169, 225, 206, 342, 334, 106, 184, 297, 371, 162, 213, 94, 41, 261, 247, 159, 272, 11, 263, 355,
  4, 149, 170, 34, 37, 430, 384, 69, 130, 240, 92, 160, 340, 280, 144, 2, 392, 77, 352, 156,
  288, 179, 254, 59, 333, 417, 408, 21, 45, 163, 109, 207, 210, 89, 188, 307, 6, 61, 317, 238,
  300, 370, 154, 341, 344, 315, 88, 217, 20, 348, 391, 419, 164, 425, 96, 93, 323, 374, 68, 372,
  129, 365, 353, 345, 313, 266, 231, 211, 38, 294, 145, 224, 50, 143, 228, 100, 278, 85, 26, 199,
  127, 66, 230, 220, 208, 53, 218, 382, 284, 402, 74, 31, 72, 406, 251, 227, 187, 175, 120, 76,
  209, 245, 139, 10, 65, 293, 7, 289, 262, 158, 133, 292, 196, 14, 55, 75, 203, 39, 151, 180,
  320, 412, 257, 99, 269, 97, 153, 177, 375, 201, 306, 322, 192, 249, 330, 368, 403, 200, 436, 178,
  267, 113, 19, 173, 118, 310, 304, 198, 409, 432, 329, 271, 389, 226, 27, 246, 103, 212, 25, 268,
  167, 393, 415, 363, 105, 244, 90, 395, 253, 190, 303, 48, 104, 296, 62, 305, 147, 146, 264, 328,
  241, 243, 124, 233, 318, 60, 131, 215, 84, 8, 17, 312, 421, 428, 354, 18, 281, 424, 221, 326,
  141, 337, 291, 86, 411, 265, 380, 30, 115, 132, 416, 95, 335, 171, 102, 396, 182, 362, 387, 400,
  427, 339, 237, 276, 324, 155, 223, 319, 67, 42, 434, 242, 121, 168, 347, 64, 369, 248, 43, 364,
  123, 29, 122, 157, 386, 286, 9, 250, 165, 0, 82, 191, 405, 413, 277, 152, 54, 259, 91, 256,
  314, 1, 410, 80, 222, 376, 437, 398, 351, 381, 58, 5, 283, 128, 270, 239, 195, 197, 32, 399,
  401, 78, 56, 24, 46, 252, 260, 70, 336, 383, 204, 298, 219, 299, 134, 275, 414, 126, 431, 385,
  73, 234, 202, 255, 367, 350, 290, 108, 33, 137, 205, 161, 422, 117, 28, 166, 407, 285, 438, 138,
  361, 236, 356, 433, 273, 87, 358, 311, 36, 331, 349, 136, 343, 107, 181, 189, 83, 186, 325, 232,
  397, 394, 51, 418, 378, 148, 116, 338, 23, 35, 360, 98, 295, 185, 316, 321, 150, 282, 40, 193,
  63, 274, 235, 373, 22, 135, 309, 176, 183, 49, 194, 420, 429, 172, 390, 110, 79, 404, 174, 423,
  357, 81, 388, 3, 142, 301, 229, 112, 214, 426, 359, 332, 366, 101, 287, 13, 308, 258, 119, 111,
  47, 15, 16, 216, 302, 44, 279, 435, 346, 52, 377, 71, 114, 125, 140, 379, 12, 57, 327,
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
    const easyIdx = (dayOfYear + d) % easyWords.length
    // Use shuffled index for hard words
    const shuffleIdx = ((daysSinceHardStart + d) % HARD_WORD_SHUFFLE.length + HARD_WORD_SHUFFLE.length) % HARD_WORD_SHUFFLE.length
    const hardIdx = HARD_WORD_SHUFFLE[shuffleIdx] % hardWords.length
    upcoming.add(easyWords[easyIdx].word)
    upcoming.add(hardWords[hardIdx].word)
  }
  return upcoming
}

/**
 * Look up a specific word by name across all word lists.
 * Returns the word and which difficulty pool it belongs to, or null if not found.
 */
export function getWordByName(wordName: string): { word: DailyWord; difficulty: GameMode } | null {
  const normalized = wordName.toLowerCase().trim()
  
  // Check hard words first (more specific pool)
  const hardMatch = hardWords.find((w) => w.word.toLowerCase() === normalized)
  if (hardMatch) return { word: hardMatch, difficulty: "hard" }
  
  // Check easy words
  const easyMatch = easyWords.find((w) => w.word.toLowerCase() === normalized)
  if (easyMatch) return { word: easyMatch, difficulty: "easy" }
  
  return null
}

export function getRandomPracticeWord(excludeWords: string[] = [], difficulty: GameMode = "easy"): DailyWord {
  const pool = difficulty === "hard" ? hardWords : easyWords
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

// ── Daily Blitz Challenge ────────────────────────────────────────────────────
// Returns a deterministic 15-word sequence for today, same for all players.
// Uses a seeded LCG (linear congruential generator) to shuffle based on date.

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function dateToSeed(dateKey: string): number {
  // Convert "YYYY-MM-DD" to a stable integer seed
  return dateKey.split("-").reduce((acc, part) => acc * 1000 + parseInt(part, 10), 0)
}

export function getDailyBlitzSequence(
  difficulty: GameMode,
  dateKey?: string
): DailyWord[] {
  const pool = difficulty === "hard" ? hardWords : easyWords
  const key = dateKey ?? (() => {
    const d = new Date()
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`
  })()

  const rand = seededRandom(dateToSeed(key) + (difficulty === "hard" ? 999999 : 0))

  // Fisher-Yates shuffle of indices using seeded random
  const indices = Array.from({ length: pool.length }, (_, i) => i)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]]
  }

  return indices.slice(0, 15).map(i => pool[i])
}
