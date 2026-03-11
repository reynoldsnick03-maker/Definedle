import { easyWords } from "./words-easy"
import { hardWordsAll as hardWords } from "./words-hard-all"

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
// 219 unique indices (0-218) in pseudo-random order, generated with seed 2026
const HARD_WORD_SHUFFLE: number[] = [
  198, 164, 41, 50, 319, 340, 180, 95, 53, 241,
  92, 74, 375, 151, 21, 93, 190, 184, 297, 296,
  237, 386, 337, 139, 249, 441, 281, 433, 188, 94,
  132, 240, 169, 76, 403, 369, 314, 89, 416, 374,
  163, 372, 201, 215, 365, 393, 100, 37, 421, 2,
  324, 333, 106, 4, 7, 254, 59, 218, 45, 454,
  361, 141, 158, 162, 310, 419, 211, 313, 320, 177,
  11, 6, 452, 227, 109, 265, 120, 278, 26, 77,
  420, 34, 264, 300, 88, 266, 210, 143, 212, 242,
  257, 446, 463, 380, 129, 371, 294, 209, 217, 69,
  253, 199, 378, 145, 31, 244, 460, 381, 127, 466,
  203, 68, 245, 154, 72, 429, 178, 330, 286, 443,
  96, 411, 153, 247, 38, 292, 85, 233, 404, 170,
  261, 459, 425, 66, 156, 133, 384, 230, 440, 192,
  30, 263, 182, 144, 246, 424, 20, 130, 155, 444,
  406, 315, 409, 149, 187, 160, 318, 175, 304, 396,
  14, 55, 75, 226, 39, 179, 391, 196, 345, 398,
  67, 99, 289, 97, 341, 207, 267, 438, 280, 370,
  223, 42, 317, 400, 437, 464, 362, 472, 208, 470,
  113, 19, 348, 118, 238, 347, 269, 291, 468, 356,
  306, 422, 435, 27, 86, 213, 103, 277, 25, 288,
  167, 426, 450, 436, 394, 105, 268, 90, 428, 168,
  221, 328, 48, 104, 206, 228, 200, 62, 121, 147,
  146, 225, 284, 355, 368, 336, 124, 171, 383, 60,
  131, 251, 353, 220, 8, 262, 17, 312, 462, 447,
  385, 18, 303, 367, 307, 402, 10, 173, 376, 115,
  342, 61, 231, 224, 293, 363, 159, 102, 351, 323,
  344, 84, 243, 65, 64, 272, 401, 248, 43, 397,
  123, 29, 122, 157, 334, 451, 9, 250, 165, 0,
  271, 276, 82, 191, 326, 448, 399, 152, 54, 259,
  91, 256, 339, 1, 427, 80, 222, 408, 473, 431,
  382, 417, 58, 5, 283, 128, 270, 239, 322, 195,
  197, 32, 305, 432, 434, 407, 78, 56, 24, 46,
  252, 260, 70, 364, 405, 204, 298, 219, 299, 134,
  275, 449, 126, 467, 418, 73, 234, 329, 202, 255,
  335, 354, 358, 290, 108, 33, 137, 205, 161, 457,
  117, 28, 166, 350, 442, 285, 352, 474, 138, 392,
  236, 387, 469, 415, 273, 87, 389, 311, 36, 331,
  349, 445, 136, 343, 107, 181, 189, 83, 186, 325,
  232, 430, 423, 51, 453, 410, 148, 395, 116, 338,
  23, 35, 360, 98, 295, 185, 316, 321, 150, 282,
  40, 193, 63, 274, 235, 373, 22, 413, 135, 309,
  176, 183, 49, 194, 455, 465, 172, 390, 110, 79,
  439, 174, 458, 357, 81, 412, 388, 3, 414, 142,
  301, 229, 112, 214, 461, 359, 332, 366, 101, 287,
  13, 308, 258, 119, 111, 47, 15, 16, 216, 302,
  44, 279, 456, 471, 346, 52, 377, 71, 114, 125,
  140, 379, 12, 57, 327,
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
