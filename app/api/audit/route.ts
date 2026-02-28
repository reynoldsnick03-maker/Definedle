import { easyWords } from "@/lib/words-easy"
import { hardWords } from "@/lib/words-hard"
import type { DailyWord } from "@/lib/game-data"
import { NextResponse } from "next/server"

// Overly generic terms that match too many unrelated definitions
const GENERIC_TERMS = new Set([
  "good", "bad", "thing", "things", "stuff", "nice", "great", "way",
  "lot", "big", "use", "make", "get", "something", "anything", "very",
  "much", "place", "person", "area", "situation", "act", "action",
  "event", "process", "feel", "feeling", "state", "new", "like",
  "different", "important", "part", "point", "time", "people",
  "world", "form", "being", "become", "give", "take", "come", "go",
  "know", "kind", "right", "wrong",
])

// Terms that sound related but actually mean something different
const FALSE_FRIEND_GROUPS: Record<string, string[]> = {
  "carefree": ["whimsical", "fanciful", "quaint", "imaginative", "creative", "playful"],
  "relaxed": ["whimsical", "fanciful", "imaginative"],
  "calm": ["whimsical", "playful", "lively", "vivacious", "ebullient", "exuberant"],
  "peaceful": ["whimsical", "fanciful", "playful"],
  "simple": ["eloquent", "articulate", "sophisticated", "intricate", "complex"],
  "happy": ["sardonic", "sarcastic", "wry", "caustic", "cynical", "ironic"],
  "sad": ["stoic", "nonchalant", "indifferent", "apathetic"],
  "smart": ["cunning", "sly", "shrewd", "crafty", "wily"],
  "old": ["venerable", "antiquated", "archaic"],
  "normal": ["ubiquitous", "prevalent", "orthodox"],
  "friendly": ["obsequious", "sycophantic", "ingratiating"],
}

interface AuditIssue {
  word: string
  list: string
  concept: string
  issue: string
  term: string
}

export async function GET() {
  const issues: AuditIssue[] = []
  const termUsage: Record<string, { word: string; list: string }[]> = {}
  const wordLocations: Record<string, string[]> = {}

  const allLists: { words: DailyWord[]; name: string }[] = [
    { words: easyWords, name: "easy" },
    { words: hardWords, name: "hard" },
  ]

  for (const { words, name } of allLists) {
    for (const entry of words) {
      // Track duplicates across lists
      if (!wordLocations[entry.word]) wordLocations[entry.word] = []
      wordLocations[entry.word].push(name)

      for (const concept of entry.keyConcepts) {
        // Check each matchTerm
        for (const term of concept.matchTerms) {
          const t = term.toLowerCase().trim()

          // 1. Generic terms
          if (GENERIC_TERMS.has(t)) {
            issues.push({
              word: entry.word, list: name, concept: concept.label,
              issue: `GENERIC: "${t}" is too generic and will match many unrelated definitions`,
              term: t,
            })
          }

          // 2. Very short terms (<=2 chars) -- almost always false-positive prone
          if (t.length <= 2 && !t.includes(" ")) {
            issues.push({
              word: entry.word, list: name, concept: concept.label,
              issue: `SHORT: "${t}" is too short and may cause false matches`,
              term: t,
            })
          }

          // 3. False friends
          for (const [falseTerm, badForWords] of Object.entries(FALSE_FRIEND_GROUPS)) {
            if (t === falseTerm && badForWords.some(w => entry.word.toLowerCase().includes(w) || entry.definition.toLowerCase().includes(w))) {
              issues.push({
                word: entry.word, list: name, concept: concept.label,
                issue: `FALSE FRIEND: "${t}" sounds related but means something different for this word`,
                term: t,
              })
            }
          }

          // 4. Bloated concepts (>20 matchTerms)
          if (concept.matchTerms.length > 20) {
            // Only flag once per concept
            if (term === concept.matchTerms[0]) {
              issues.push({
                word: entry.word, list: name, concept: concept.label,
                issue: `BLOATED: ${concept.matchTerms.length} matchTerms -- too many, likely includes loose associations`,
                term: `(${concept.matchTerms.length} terms)`,
              })
            }
          }

          // 5. Track term usage for overuse detection
          if (!termUsage[t]) termUsage[t] = []
          termUsage[t].push({ word: entry.word, list: name })
        }
      }
    }
  }

  // Find duplicates across lists
  const duplicates: { word: string; lists: string[] }[] = []
  for (const [word, lists] of Object.entries(wordLocations)) {
    if (lists.length > 1) {
      duplicates.push({ word, lists })
    }
  }

  // Find most overused terms (appearing in 15+ words)
  const overused = Object.entries(termUsage)
    .filter(([, uses]) => uses.length >= 15)
    .sort(([, a], [, b]) => b.length - a.length)
    .slice(0, 30)
    .map(([term, uses]) => ({
      term,
      count: uses.length,
      words: uses.map(u => `${u.word} (${u.list})`),
    }))

  return NextResponse.json({
    totalWords: {
      easy: easyWords.length,
      hard: hardWords.length,
    },
    issueCount: issues.length,
    issues: issues.slice(0, 100), // Cap at 100 to keep response readable
    overusedTerms: overused,
    duplicateWords: duplicates,
  }, { status: 200 })
}
