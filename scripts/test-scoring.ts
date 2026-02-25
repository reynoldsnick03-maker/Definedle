import { dailyWords } from "../lib/words-daily"
import { practiceWords } from "../lib/words-practice"
import { scoreDefinition } from "../lib/scoring"

const allWords = [...dailyWords, ...practiceWords]

// Test cases: [word, player definition, expected minimum score, description]
const testCases: [string, string, number, string][] = [
  // === EXACT / NEAR-EXACT definitions (should score 80+) ===
  ["infer", "To deduce or conclude something from evidence and reasoning", 70, "near-exact definition"],
  ["infer", "Understand something by deduction", 40, "uses 'deduction' - morphological variant"],
  ["superfluous", "Being more than is sufficient or required", 40, "valid paraphrase using sufficient/required"],
  ["superfluous", "Unnecessary because there is already more than enough", 70, "close to official definition"],
  ["acquit", "To relieve of a charge of fault or crime", 40, "uses relieve/charge/crime"],
  ["acquit", "To free someone from a criminal charge", 70, "near-exact first concept"],
  ["ephemeral", "Lasting for a very short time", 70, "near-exact definition"],
  ["ephemeral", "Something brief and fleeting", 40, "valid synonym paraphrase"],
  ["pragmatic", "Dealing with things in a practical way", 70, "close to official definition"],
  ["pragmatic", "Being realistic and sensible rather than idealistic", 40, "valid paraphrase"],
  ["ubiquitous", "Found everywhere, extremely common", 70, "near-exact definition"],
  ["ubiquitous", "Something present in all places at once", 40, "valid paraphrase"],
  ["eloquent", "Speaking fluently and persuasively", 70, "near-exact definition"],
  ["eloquent", "Having a way with words that moves people", 40, "valid paraphrase"],
  ["altruistic", "Showing selfless concern for others", 70, "near-exact definition"],
  ["altruistic", "Caring about the welfare of other people without personal gain", 40, "valid paraphrase"],
  ["candid", "Truthful and straightforward; frank", 70, "near-exact definition"],
  ["candid", "Being honest and open about what you think", 40, "valid paraphrase"],
  ["abstract", "Existing in thought or as an idea rather than physical", 70, "near-exact definition"],
  ["abstract", "Not concrete or tangible; theoretical", 40, "valid paraphrase"],
  ["meticulous", "Showing great attention to detail; very careful", 70, "near-exact definition"],
  ["meticulous", "Being extremely thorough and precise in your work", 40, "valid paraphrase"],
  ["volatile", "Liable to change rapidly and unpredictably", 70, "near-exact definition"],
  ["volatile", "Highly unstable and prone to sudden shifts", 40, "valid paraphrase"],

  // === DICTIONARY-STYLE definitions from OTHER dictionaries ===
  ["ephemeral", "Lasting for a markedly brief time", 70, "Merriam-Webster style"],
  ["pragmatic", "Relating to matters of fact or practical affairs", 40, "Merriam-Webster style"],
  ["ambiguous", "Open to more than one interpretation; not clear", 70, "Oxford style"],
  ["resilience", "The capacity to recover quickly from difficulties", 70, "Oxford style"],
  ["nuance", "A subtle difference in meaning or expression", 70, "dictionary style"],
  ["empathy", "The ability to understand and share the feelings of another", 70, "dictionary style"],
  ["scrutinize", "To examine or inspect closely and thoroughly", 70, "dictionary style"],
  ["undermine", "To erode the base or foundation of something", 40, "dictionary style"],
  ["proliferate", "To increase rapidly in numbers; spread widely", 70, "dictionary style"],
  ["corroborate", "To confirm or support with evidence", 70, "dictionary style"],

  // === COMMON PLAYER PHRASINGS (natural language, less formal) ===
  ["ephemeral", "Not lasting very long, temporary", 40, "casual but correct"],
  ["pragmatic", "Focused on what actually works in practice", 40, "casual but correct"],
  ["ambiguous", "Could mean different things depending on how you read it", 40, "casual but correct"],
  ["resilience", "Being able to bounce back after something bad happens", 40, "casual but correct"],
  ["nuance", "A small but important distinction", 40, "casual but correct"],
  ["empathy", "Feeling what someone else is going through", 40, "casual but correct"],
  ["catalyst", "Something that speeds up or triggers change", 40, "casual but correct"],
  ["paradox", "A statement that contradicts itself but might be true", 40, "casual but correct"],
  ["context", "The background information that helps you understand something", 40, "casual but correct"],

  // === POOR/WRONG definitions (should score LOW, under 40) ===
  ["infer", "To tell someone something directly", 0, "opposite of infer"],
  ["ephemeral", "Lasting forever and ever", 0, "opposite meaning"],
  ["pragmatic", "A type of boat used in rivers", 0, "completely wrong"],
  ["resilience", "The color of a sunset over the ocean", 0, "totally unrelated"],

  // === SYNONYM-ONLY (should trigger warning, cap at ~35) ===
  ["eloquent", "Articulate", 20, "single synonym only"],
  ["meticulous", "Thorough", 20, "single synonym only"],

  // === Edge cases ===
  ["infer", "infer", 0, "just restating the word"],
  ["infer", "inference based on clues", 0, "uses the word itself as stem"],
  ["ephemeral", "ephemeral things are ephemeral", 0, "circular definition"],

  // === MORPHOLOGICAL VARIANTS ===
  ["scrutinize", "Careful scrutiny of something", 0, "uses word stem - should be stripped"],
  ["proliferate", "The proliferation of something widely", 0, "uses word stem - should be stripped"],
  ["elaborate", "An elaboration with many details", 0, "uses word stem - should be stripped"],
  ["exacerbate", "To make a problem worse through exacerbation", 40, "partial word stem use but has valid content"],

  // === TWO-CONCEPT WORDS - both concepts ===
  ["ambiguous", "Open to more than one interpretation; unclear", 70, "both concepts hit"],
  ["resilience", "The ability to recover quickly from difficulties or hardship", 70, "both concepts hit"],
  ["nuance", "A subtle difference in meaning, opinion, or expression", 70, "both concepts hit"],
]

console.log("=== DEFINLE SCORING AUDIT ===\n")

let totalTests = 0
let passed = 0
let failed = 0
const failures: { wordStr: string; definition: string; minScore: number; actual: number; desc: string; concepts: { label: string; matched: boolean }[] }[] = []

for (const [wordStr, definition, minScore, desc] of testCases) {
  const word = allWords.find(w => w.word === wordStr)
  if (!word) {
    console.log(`  SKIP: Word "${wordStr}" not found in word bank`)
    continue
  }

  totalTests++
  const result = scoreDefinition(definition, word)
  const ok = result.score >= minScore

  if (ok) {
    passed++
  } else {
    failed++
    failures.push({ wordStr, definition, minScore, actual: result.score, desc, concepts: result.concepts })
  }

  const status = ok ? "PASS" : "FAIL"
  const conceptsStr = result.concepts.map(c => c.matched ? "+" : "-").join("")
  console.log(`  ${status} | ${wordStr.padEnd(14)} | ${String(result.score).padStart(3)}/100 (min ${String(minScore).padStart(3)}) | [${conceptsStr}] | "${definition}"`)
}

console.log(`\n=== RESULTS: ${passed}/${totalTests} passed, ${failed} failed ===\n`)

// Word data quality audit
console.log("=== WORD DATA QUALITY AUDIT ===\n")

let dataIssues = 0
const seenWords = new Set<string>()

for (const word of allWords) {
  if (seenWords.has(word.word)) {
    console.log(`  DUPLICATE: "${word.word}" appears more than once`)
    dataIssues++
  }
  seenWords.add(word.word)

  for (const concept of word.keyConcepts) {
    if (concept.matchTerms.length === 0) {
      console.log(`  EMPTY TERMS: "${word.word}" concept "${concept.keyword}" has no matchTerms`)
      dataIssues++
    }
    for (const term of concept.matchTerms) {
      if (term.length <= 2) {
        console.log(`  SHORT TERM: "${word.word}" has term "${term}" (<=2 chars)`)
        dataIssues++
      }
    }
  }

  if (!word.definition || word.definition.length < 5) {
    console.log(`  BAD DEF: "${word.word}" has missing/short definition`)
    dataIssues++
  }
  if (!word.synonyms || word.synonyms.length === 0) {
    console.log(`  NO SYNONYMS: "${word.word}" has no synonyms`)
    dataIssues++
  }
  if (!word.keyConcepts || word.keyConcepts.length === 0) {
    console.log(`  NO CONCEPTS: "${word.word}" has no key concepts`)
    dataIssues++
  }
}

console.log(`\n  Total words: ${allWords.length} (${dailyWords.length} daily + ${practiceWords.length} practice)`)
console.log(`  Unique words: ${seenWords.size}`)
console.log(`  Data issues found: ${dataIssues}`)

if (failures.length > 0) {
  console.log("\n=== FAILURES DETAIL ===\n")
  for (const f of failures) {
    console.log(`  Word: ${f.wordStr}`)
    console.log(`  Input: "${f.definition}"`)
    console.log(`  Expected: >= ${f.minScore}, Got: ${f.actual}`)
    console.log(`  Why: ${f.desc}`)
    for (const c of f.concepts) {
      console.log(`    ${c.matched ? "+" : "-"} ${c.label}`)
    }
    console.log()
  }
}
