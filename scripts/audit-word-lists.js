// Audit script to find duplicates and issues in word lists

import { dailyWords } from "../lib/words-daily.ts"
import { practiceWords } from "../lib/words-practice.ts"
import { hardWords } from "../lib/words-hard.ts"

console.log("=== WORD LIST AUDIT ===\n")

// Get all words from each list
const dailyWordSet = new Set(dailyWords.map(w => w.word.toLowerCase()))
const practiceWordSet = new Set(practiceWords.map(w => w.word.toLowerCase()))
const hardWordSet = new Set(hardWords.map(w => w.word.toLowerCase()))

console.log(`Daily words: ${dailyWords.length}`)
console.log(`Practice words: ${practiceWords.length}`)
console.log(`Hard words: ${hardWords.length}`)
console.log("")

// Find duplicates within daily list
const dailyDupes = dailyWords.filter((w, i) => 
  dailyWords.findIndex(x => x.word.toLowerCase() === w.word.toLowerCase()) !== i
).map(w => w.word)
if (dailyDupes.length > 0) {
  console.log(`DUPLICATES IN DAILY LIST: ${dailyDupes.join(", ")}`)
}

// Find duplicates within practice list
const practiceDupes = practiceWords.filter((w, i) => 
  practiceWords.findIndex(x => x.word.toLowerCase() === w.word.toLowerCase()) !== i
).map(w => w.word)
if (practiceDupes.length > 0) {
  console.log(`DUPLICATES IN PRACTICE LIST: ${practiceDupes.join(", ")}`)
}

// Find duplicates within hard list
const hardDupes = hardWords.filter((w, i) => 
  hardWords.findIndex(x => x.word.toLowerCase() === w.word.toLowerCase()) !== i
).map(w => w.word)
if (hardDupes.length > 0) {
  console.log(`DUPLICATES IN HARD LIST: ${hardDupes.join(", ")}`)
}

// Find overlap between daily and practice (these should be merged)
const dailyPracticeOverlap = [...dailyWordSet].filter(w => practiceWordSet.has(w))
if (dailyPracticeOverlap.length > 0) {
  console.log(`\nOVERLAP BETWEEN DAILY AND PRACTICE: ${dailyPracticeOverlap.join(", ")}`)
}

// Find overlap between easy (daily+practice) and hard
const easyWords = new Set([...dailyWordSet, ...practiceWordSet])
const easyHardOverlap = [...easyWords].filter(w => hardWordSet.has(w))
if (easyHardOverlap.length > 0) {
  console.log(`\nWORDS IN BOTH EASY AND HARD LISTS (need to pick one):`)
  easyHardOverlap.forEach(w => console.log(`  - ${w}`))
}

// Flag potentially too-hard words in the easy list
const suspectHardWords = [
  "assiduous", "sycophant", "obsequious", "perspicacious", "sesquipedalian",
  "pusillanimous", "magnanimous", "pulchritudinous", "verisimilitude", "unconscionable"
]
const hardInEasy = [...easyWords].filter(w => suspectHardWords.includes(w))
if (hardInEasy.length > 0) {
  console.log(`\nPOTENTIALLY TOO-HARD WORDS IN EASY LIST: ${hardInEasy.join(", ")}`)
}

console.log("\n=== AUDIT COMPLETE ===")
