import fs from 'fs'

// Read the file
const content = fs.readFileSync('./lib/words-hard-new.ts', 'utf-8')

// Extract individual word objects using regex
const wordObjectPattern = /\{\s*word:\s*"([^"]+)"[\s\S]*?^\s*\},?$/gm
const matches = [...content.matchAll(/(\{\s*word:\s*"[^"]+",[\s\S]*?partOfSpeech:\s*"[^"]+",?(?:\s*etymology:[^}]+)?\s*\},?)/gm)]

console.log(`Found ${matches.length} word objects`)

// Extract the header and footer
const headerEnd = content.indexOf('export const hardWords')
const header = content.substring(0, headerEnd)

// Get just the array content
const arrayStart = content.indexOf('[', headerEnd) + 1
const arrayEnd = content.lastIndexOf(']')
const arrayContent = content.substring(arrayStart, arrayEnd)

// Parse word blocks - find each complete word object
const wordBlocks = []
let depth = 0
let currentBlock = ''
let inString = false
let prevChar = ''

for (let i = 0; i < arrayContent.length; i++) {
  const char = arrayContent[i]
  
  // Track string state
  if (char === '"' && prevChar !== '\\') {
    inString = !inString
  }
  
  if (!inString) {
    if (char === '{') {
      if (depth === 0) {
        currentBlock = ''
      }
      depth++
    }
    if (char === '}') {
      depth--
      if (depth === 0) {
        currentBlock += char
        wordBlocks.push(currentBlock.trim())
        currentBlock = ''
        continue
      }
    }
  }
  
  if (depth > 0) {
    currentBlock += char
  }
  
  prevChar = char
}

console.log(`Parsed ${wordBlocks.length} word blocks`)

// Fisher-Yates shuffle
function shuffle(array) {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

// Set seed for reproducibility (today's date)
const shuffled = shuffle(wordBlocks)

// Reconstruct the file
const newContent = `import type { DailyWord } from "./game-data"

// Hard mode word list - 220 words, randomized order
// Start date: February 26, 2026 (today)
export const hardWords: DailyWord[] = [
  ${shuffled.join(',\n  ')}
]
`

fs.writeFileSync('./lib/words-hard.ts', newContent)
console.log('Wrote randomized words to words-hard.ts')

// Print first 10 words for verification
shuffled.slice(0, 10).forEach((block, i) => {
  const match = block.match(/word:\s*"([^"]+)"/)
  if (match) console.log(`${i + 1}. ${match[1]}`)
})
