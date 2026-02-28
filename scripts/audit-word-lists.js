// Audit script to find duplicates and issues in word lists

import fs from "fs"

// Parse word entries from TypeScript file content
function extractWords(content) {
  const words = []
  const regex = /word:\s*["']([^"']+)["']/g
  let match
  while ((match = regex.exec(content)) !== null) {
    words.push(match[1].toLowerCase())
  }
  return words
}

const dailyContent = fs.readFileSync("./lib/words-daily.ts", "utf-8")
const practiceContent = fs.readFileSync("./lib/words-practice.ts", "utf-8")
const hardContent = fs.readFileSync("./lib/words-hard.ts", "utf-8")

const dailyWords = extractWords(dailyContent)
const practiceWords = extractWords(practiceContent)
const hardWords = extractWords(hardContent)

console.log("=== WORD LIST AUDIT ===\n")

// Get all words from each list
const dailyWordSet = new Set(dailyWords)
const practiceWordSet = new Set(practiceWords)
const hardWordSet = new Set(hardWords)

console.log(`Daily words: ${dailyWords.length}`)
console.log(`Practice words: ${practiceWords.length}`)
console.log(`Hard words: ${hardWords.length}`)
console.log("")

// Find duplicates within daily list
const dailyDupes = dailyWords.filter((w, i) => 
  dailyWords.findIndex(x => x === w) !== i
)
if (dailyDupes.length > 0) {
  console.log(`DUPLICATES IN DAILY LIST: ${dailyDupes.join(", ")}`)
}

// Find duplicates within practice list
const practiceDupes = practiceWords.filter((w, i) => 
  practiceWords.findIndex(x => x === w) !== i
)
if (practiceDupes.length > 0) {
  console.log(`DUPLICATES IN PRACTICE LIST: ${practiceDupes.join(", ")}`)
}

// Find duplicates within hard list
const hardDupes = hardWords.filter((w, i) => 
  hardWords.findIndex(x => x === w) !== i
)
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
