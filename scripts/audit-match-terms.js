/**
 * Audit script: scans every word's matchTerms for quality issues.
 * Reads the TS source files as text and parses the word entries.
 * 
 * NOTE: The sandbox runs from /home/user, so we try multiple paths.
 */
const fs = require("fs")
const path = require("path")

const POSSIBLE_ROOTS = [
  "/vercel/share/v0-project",
  "/home/user",
  process.cwd(),
  path.resolve(__dirname, ".."),
]

function findFile(relPath) {
  for (const root of POSSIBLE_ROOTS) {
    const full = path.resolve(root, relPath)
    if (fs.existsSync(full)) return full
  }
  return null
}

function readFileSafe(relPath) {
  const p = findFile(relPath)
  if (!p) {
    console.log("WARNING: Could not find", relPath, "in any root.")
    console.log("Tried:", POSSIBLE_ROOTS.join(", "))
    return ""
  }
  console.log("Found:", p)
  return fs.readFileSync(p, "utf8")
}

function extractWords(relPath, exportName) {
  const src = readFileSafe(relPath)
  if (!src) return []

  const re = new RegExp("export\\s+const\\s+" + exportName + "[^=]*=\\s*\\[", "s")
  const match = re.exec(src)
  if (!match) {
    console.log("WARNING: Could not find " + exportName + " in " + relPath)
    return []
  }

  const startIdx = match.index + match[0].length
  var depth = 1
  var i = startIdx
  while (i < src.length && depth > 0) {
    if (src[i] === "[") depth++
    if (src[i] === "]") depth--
    i++
  }
  const arrayContent = src.slice(startIdx, i - 1)

  const blocks = []
  const blockRe = /\{\s*\n?\s*word:\s*"([^"]+)"/g
  var blockMatch
  const blockStarts = []
  while ((blockMatch = blockRe.exec(arrayContent)) !== null) {
    blockStarts.push({ word: blockMatch[1], idx: blockMatch.index })
  }

  for (var b = 0; b < blockStarts.length; b++) {
    const start = blockStarts[b].idx
    const end = b < blockStarts.length - 1 ? blockStarts[b + 1].idx : arrayContent.length
    const block = arrayContent.slice(start, end)
    const wordName = blockStarts[b].word

    const concepts = []
    const conceptRe = /keyword:\s*"([^"]+)"[^}]*matchTerms:\s*\[([^\]]*)\][^}]*label:\s*"([^"]+)"/g
    var cMatch
    while ((cMatch = conceptRe.exec(block)) !== null) {
      const keyword = cMatch[1]
      const termsStr = cMatch[2]
      const label = cMatch[3]
      const terms = termsStr.match(/"([^"]+)"/g)
      const termList = terms ? terms.map(function(t) { return t.replace(/"/g, "") }) : []
      concepts.push({ keyword: keyword, label: label, matchTerms: termList })
    }

    blocks.push({ word: wordName, keyConcepts: concepts })
  }

  return blocks
}

var OVERLY_GENERIC = [
  "good", "bad", "thing", "things", "way", "ways",
  "very", "much", "many", "some", "other", "being", "having",
  "get", "got", "put", "use", "used", "take", "took",
]
var OVERLY_GENERIC_SET = {}
OVERLY_GENERIC.forEach(function(w) { OVERLY_GENERIC_SET[w] = true })

function audit() {
  var daily = extractWords("lib/words-daily.ts", "dailyWords").map(function(w) { w._list = "daily"; return w })
  var hard = extractWords("lib/words-hard.ts", "hardWords").map(function(w) { w._list = "hard"; return w })
  var practice = extractWords("lib/words-practice.ts", "practiceWords").map(function(w) { w._list = "practice"; return w })
  var allWords = daily.concat(hard).concat(practice)

  console.log("Parsed: " + daily.length + " daily, " + hard.length + " hard, " + practice.length + " practice = " + allWords.length + " total\n")

  var issues = []

  // Track global term usage
  var termConceptCount = {}
  allWords.forEach(function(word) {
    word.keyConcepts.forEach(function(concept) {
      concept.matchTerms.forEach(function(term) {
        termConceptCount[term] = (termConceptCount[term] || 0) + 1
      })
    })
  })

  allWords.forEach(function(word) {
    word.keyConcepts.forEach(function(concept) {
      concept.matchTerms.forEach(function(term) {
        var lower = term.toLowerCase()

        // Check 1: overly generic
        if (OVERLY_GENERIC_SET[lower]) {
          issues.push({
            word: word.word, list: word._list,
            label: concept.label, term: term,
            type: "GENERIC",
            reason: '"' + term + '" is too vague -- will match almost any definition',
          })
        }

        // Check 2: overused across many words
        var count = termConceptCount[term] || 0
        if (count > 12 && term.length > 3) {
          issues.push({
            word: word.word, list: word._list,
            label: concept.label, term: term,
            type: "OVERUSED",
            reason: '"' + term + '" appears in ' + count + ' concepts -- too common to be discriminating',
          })
        }

        // Check 3: very short terms
        if (term.length <= 3 && term.indexOf(" ") === -1) {
          issues.push({
            word: word.word, list: word._list,
            label: concept.label, term: term,
            type: "SHORT",
            reason: '"' + term + '" is only ' + term.length + ' chars -- high false-positive risk',
          })
        }
      })

      // Check 4: bloated concept
      if (concept.matchTerms.length > 15) {
        issues.push({
          word: word.word, list: word._list,
          label: concept.label, term: "[" + concept.matchTerms.length + " terms]",
          type: "BLOATED",
          reason: "Concept has " + concept.matchTerms.length + " matchTerms -- likely too loose",
        })
      }
    })
  })

  // Print report
  console.log("=".repeat(80))
  console.log("MATCH TERM AUDIT REPORT")
  console.log("=".repeat(80))
  console.log("Issues found: " + issues.length + "\n")

  var byType = {}
  issues.forEach(function(issue) {
    if (!byType[issue.type]) byType[issue.type] = []
    byType[issue.type].push(issue)
  })

  Object.keys(byType).forEach(function(type) {
    var typeIssues = byType[type]
    console.log("\n--- " + type + " (" + typeIssues.length + " issues) ---")
    typeIssues.slice(0, 40).forEach(function(issue) {
      console.log('  [' + issue.list + '] "' + issue.word + '" -> "' + issue.label + '"')
      console.log("    " + issue.reason)
    })
    if (typeIssues.length > 40) {
      console.log("  ... and " + (typeIssues.length - 40) + " more")
    }
  })

  // Most overused terms
  console.log("\n--- MOST OVERUSED MATCH TERMS (top 30) ---")
  var sorted = Object.entries(termConceptCount)
    .filter(function(e) { return e[1] > 5 && e[0].length > 3 })
    .sort(function(a, b) { return b[1] - a[1] })
    .slice(0, 30)
  sorted.forEach(function(e) {
    console.log('  "' + e[0] + '" -> ' + e[1] + ' concepts')
  })

  // Duplicates across lists
  console.log("\n--- DUPLICATE WORDS ACROSS LISTS ---")
  var wordMap = {}
  allWords.forEach(function(w) {
    if (!wordMap[w.word]) wordMap[w.word] = []
    wordMap[w.word].push(w._list)
  })
  var dupes = 0
  Object.keys(wordMap).forEach(function(word) {
    if (wordMap[word].length > 1) {
      console.log('  "' + word + '" -> ' + wordMap[word].join(", "))
      dupes++
    }
  })
  if (dupes === 0) console.log("  None found!")

  console.log("\n" + "=".repeat(80) + "\n")
}

audit()
