import { DAILY_WORDS } from "../lib/words-daily"
import { HARD_WORDS } from "../lib/words-hard"

console.log("=== EASY WORDS (" + DAILY_WORDS.length + ") ===")
console.log(DAILY_WORDS.map(w => w.word).join(", "))

console.log("\n=== HARD WORDS (" + HARD_WORDS.length + ") ===")
console.log(HARD_WORDS.map(w => w.word).join(", "))
