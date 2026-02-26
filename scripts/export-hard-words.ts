import { hardWords } from "../lib/words-hard.js"
import * as fs from "fs"

const lines = [
  "DEFINEDLE - HARD MODE WORD LIST",
  "=".repeat(50),
  `Total words: ${hardWords.length}`,
  "",
]

hardWords.forEach((word, index) => {
  lines.push(`${index + 1}. ${word.word.toUpperCase()} (${word.partOfSpeech})`)
  lines.push(`   Definition: ${word.definition}`)
  lines.push(`   Key concepts: ${word.keyConcepts.map(k => k.label).join(" | ")}`)
  lines.push(`   Synonyms: ${word.synonyms.join(", ")}`)
  if (word.etymology) {
    lines.push(`   Etymology: ${word.etymology}`)
  }
  lines.push("")
})

const output = lines.join("\n")
fs.writeFileSync("hard-words-list.txt", output)
console.log(`Exported ${hardWords.length} words to hard-words-list.txt`)
