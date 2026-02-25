import { readFileSync, writeFileSync } from "fs"

const filePath = "/vercel/share/v0-project/lib/words-hard.ts"
const content = readFileSync(filePath, "utf8")

// Words to remove (duplicates with daily list, or internal near-duplicates)
const removeWords = new Set([
  "nostalgia", "integrity", "cynical", "rhetoric", "dogmatic", "nuance",
  "empathy", "pragmatic", "dilemma", "arbitrary", "complacent", "eloquent",
  "tangible", "volatile", "ambivalent", "reciprocal", "clandestine",
  "ostentatious", "juxtaposition", "trepidation", "magnanimous", "dubious",
  "apathy", "aesthetic", "meticulous", "disingenuous", "paradox",
  "ubiquitous", "apathetic", "cathartic"
])

// Parse the array entries by splitting on the pattern `  {\n    word:`
// We'll rebuild the file by keeping only non-duplicate entries
const header = content.slice(0, content.indexOf("export const hardWords"))
const arrayStart = content.indexOf("export const hardWords: DailyWord[] = [")
const arrayEnd = content.lastIndexOf("]")

// Extract individual entries using regex
const entryRegex = /\s{2}\{[\s\S]*?word:\s*"([^"]+)"[\s\S]*?\n\s{2}\}/g
let entries = []
let match
while ((match = entryRegex.exec(content)) !== null) {
  const word = match[1]
  const entry = match[0]
  entries.push({ word, entry })
}

console.log(`Total entries found: ${entries.length}`)

const kept = entries.filter(e => !removeWords.has(e.word))
const removed = entries.filter(e => removeWords.has(e.word))

console.log(`Removing ${removed.length} duplicates:`)
removed.forEach(e => console.log(`  - ${e.word}`))
console.log(`Keeping ${kept.length} words`)

// Rebuild the file
const newContent = `${header}export const hardWords: DailyWord[] = [${kept.map(e => e.entry).join(",")},
]
`

writeFileSync(filePath, newContent, "utf8")
console.log("File written successfully")
console.log(`Remaining words: ${kept.map(e => e.word).join(", ")}`)
