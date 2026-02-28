import { easyWords } from "../lib/words-easy"
import { hardWords } from "../lib/words-hard"

console.log("=== EASY WORDS (" + easyWords.length + ") ===")
console.log(easyWords.map(w => w.word).join(", "))

console.log("\n=== HARD WORDS (" + hardWords.length + ") ===")
console.log(hardWords.map(w => w.word).join(", "))
