import { readFileSync } from 'fs'
import { execSync } from 'child_process'

// Find the actual project path
const projectRoot = execSync('find / -name "words-daily.ts" -path "*/lib/*" 2>/dev/null | head -1', { encoding: 'utf-8' }).trim()
console.log("Found file at:", projectRoot)
const daily = readFileSync(projectRoot, 'utf-8')
const words = [...daily.matchAll(/word:\s*"([^"]+)"/g)].map(m => m[1])

// Find duplicates
const seen = new Map()
const dupes = []
words.forEach((w, i) => {
  if (seen.has(w)) {
    dupes.push({ word: w, first: seen.get(w) + 1, second: i + 1 })
  } else {
    seen.set(w, i)
  }
})

// Unique sorted
const unique = [...new Set(words)].sort()

console.log(`=== DAILY EASY WORDS (${words.length} total, ${unique.length} unique) ===\n`)
console.log("In order of appearance:\n")
words.forEach((w, i) => console.log(`${String(i + 1).padStart(3)}. ${w}`))

if (dupes.length > 0) {
  console.log(`\n=== DUPLICATES FOUND (${dupes.length}) ===\n`)
  dupes.forEach(d => console.log(`  "${d.word}" -- appears at positions ${d.first} and ${d.second}`))
}
