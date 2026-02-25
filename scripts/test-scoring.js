// Self-contained scoring audit -- inlines the scoring logic to avoid TS imports

// --- Synonym clusters (copied from scoring.ts) ---
const SYNONYM_CLUSTERS = [
  ["free", "releas", "liberat", "reliev", "absolv", "exonerat", "acquit", "clear", "pardon", "discharg", "let off", "let go"],
  ["enough", "sufficient", "adequate", "ample"],
  ["unnecessary", "unneeded", "superfluous", "redundant", "excess", "surplus", "extra", "spare"],
  ["explain", "clarif", "elucidat", "illuminat", "describ", "spell out", "make clear"],
  ["understand", "comprehend", "grasp", "fathom", "perceiv", "discern", "get", "know"],
  ["reduce", "lessen", "decrease", "diminish", "lower", "curtail", "shrink", "cut back"],
  ["increase", "grow", "expand", "rise", "escalat", "intensif", "amplif", "heighten", "boost"],
  ["important", "significant", "crucial", "vital", "essential", "critical", "key", "major"],
  ["small", "tiny", "minor", "slight", "little", "minute", "subtle", "fine", "delicate"],
  ["big", "large", "huge", "enormous", "vast", "immense", "massive", "great", "significant"],
  ["bad", "terrible", "awful", "dreadful", "horrible", "poor", "negative", "adverse", "harmful"],
  ["good", "excellent", "great", "fine", "positive", "favorab", "favourab", "beneficial"],
  ["fast", "quick", "rapid", "swift", "speedy", "prompt", "hasty"],
  ["slow", "gradual", "sluggish", "leisurely", "unhurried"],
  ["hide", "conceal", "cover", "obscur", "mask", "disguis", "secret", "covert"],
  ["show", "reveal", "display", "expos", "demonstrat", "exhibit", "manifest", "present"],
  ["stop", "prevent", "block", "halt", "cease", "hinder", "imped", "inhibit", "obstruct"],
  ["start", "begin", "initiat", "commence", "launch", "trigger", "instigat", "spark"],
  ["help", "assist", "aid", "support", "facilitat", "enable"],
  ["harm", "hurt", "damage", "injur", "impair", "wound", "destroy"],
  ["agree", "consent", "approv", "accept", "endors", "concur"],
  ["refuse", "reject", "deny", "declin", "repudiat", "rebuff", "turn down"],
  ["blame", "fault", "guilt", "responsib", "accusation", "charge", "crime", "criminal", "offense", "offence", "wrongdoing"],
  ["proof", "evidence", "confirmation", "verification", "substantiation", "corroboration", "testimony"],
  ["opinion", "view", "belief", "perspectiv", "stance", "position", "viewpoint", "standpoint"],
  ["change", "alter", "modify", "transform", "shift", "convert", "adjust", "revise"],
  ["strong", "powerful", "intense", "forceful", "potent", "vigorous", "mighty"],
  ["weak", "feeble", "frail", "fragile", "delicate", "flimsy", "faint"],
  ["angry", "furious", "irate", "outraged", "incensed", "indignant", "mad", "enraged"],
  ["happy", "joyful", "glad", "pleased", "delighted", "content", "cheerful"],
  ["sad", "unhappy", "sorrowful", "miserable", "gloomy", "melancholy", "dejected", "depressed"],
  ["scared", "afraid", "fearful", "frightened", "terrified", "anxious", "nervous", "worried", "apprehensiv"],
  ["fake", "false", "counterfeit", "fraudulent", "phony", "bogus", "sham", "pretend", "insincere"],
  ["real", "genuine", "authentic", "true", "actual", "legitimate", "sincere", "honest"],
  ["old", "ancient", "archaic", "outdated", "obsolete", "antiquated", "dated"],
  ["new", "novel", "fresh", "modern", "recent", "contemporary", "innovativ"],
  ["permanent", "lasting", "enduring", "perpetual", "eternal", "everlasting", "indefinit"],
  ["temporary", "fleeting", "transient", "ephemeral", "impermanent", "momentary", "short-lived"],
]

const synonymLookup = new Map()
SYNONYM_CLUSTERS.forEach((cluster, idx) => {
  for (const word of cluster) synonymLookup.set(word.toLowerCase(), idx)
})

function closeSubstringMatch(word, key) {
  if (word === key) return true
  if (key.length < 4) return false
  if (word.includes(key) && key.length >= word.length * 0.6) return true
  if (key.includes(word) && word.length >= key.length * 0.6) return true
  return false
}

function areSynonyms(a, b) {
  if (a.length < 4 || b.length < 4) return false
  const aClusters = new Set()
  for (const [key, idx] of synonymLookup) {
    if (closeSubstringMatch(a, key)) aClusters.add(idx)
  }
  if (aClusters.size === 0) return false
  for (const [key, idx] of synonymLookup) {
    if (!aClusters.has(idx)) continue
    if (closeSubstringMatch(b, key)) return true
  }
  return false
}

function termMatches(input, term) {
  const t = term.toLowerCase()
  if (t.length <= 4) {
    const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`)
    return re.test(input)
  }
  if (input.includes(t)) return true
  const variants = []
  if (t.endsWith("e")) variants.push(t.slice(0, -1))
  if (t.endsWith("ce")) variants.push(t.slice(0, -2) + "ct")
  if (t.endsWith("de")) variants.push(t.slice(0, -2) + "s")
  if (t.endsWith("ade")) variants.push(t.slice(0, -3) + "as")
  if (variants.some((v) => v.length > 4 && input.includes(v))) return true
  const inputWords = input.split(/\s+/)
  for (const iw of inputWords) {
    if (iw.length < 3) continue
    if (areSynonyms(t, iw)) return true
  }
  return false
}

const STOP_WORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","have","has","had",
  "do","does","did","will","would","shall","should","may","might","must","can",
  "could","of","in","to","for","with","on","at","from","by","about","as","into",
  "through","during","before","after","above","below","between","but","and","or",
  "nor","not","no","so","if","than","too","very","just","that","this","it","its",
  "they","them","their","we","us","our","you","your","he","she","him","her","his",
  "what","which","who","whom","when","where","why","how","all","each","every",
  "both","few","more","most","some","any","such","only","own","same","other",
  "also","then","says","one","two","especially","rather","being","something","someone",
])

function meaningfulWords(text) {
  return text.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/)
    .filter((w) => w.length > 3 && !STOP_WORDS.has(w))
}

function stemMatch(a, b) {
  if (a === b) return true
  if (a.length >= 4 && b.includes(a)) return true
  if (b.length >= 4 && a.includes(b)) return true
  if (a.length >= 4 && b.length >= 4 && a.slice(0, 4) === b.slice(0, 4)) return true
  if (a.length >= 3 && b.length >= 3 && areSynonyms(a, b)) return true
  return false
}

function fuzzyConceptMatch(inputWords, concept) {
  const conceptText = `${concept.label} ${concept.hint} ${concept.keyword}`
  const conceptWords = meaningfulWords(conceptText)
  const unique = [...new Set(conceptWords)]
  if (unique.length === 0) return false
  let hits = 0
  for (const cw of unique) {
    for (const iw of inputWords) {
      if (stemMatch(cw, iw)) { hits++; break }
    }
  }
  return hits >= 2 && hits / unique.length >= 0.3
}

let DEBUG_WORD = null
function scoreDefinition(userDefinition, dailyWord) {
  const raw = userDefinition.toLowerCase().trim()
  const words = raw.split(/\s+/)
  const stem = dailyWord.word.toLowerCase()
  const input = words.filter((w) => {
    if (w === stem) return false
    if (w.startsWith(stem) && w.length <= stem.length + 4) return false
    return true
  }).join(" ")
  const inputMeaningful = meaningfulWords(input)
  const conceptCount = dailyWord.keyConcepts.length
  const pointsPerConcept = Math.round(80 / conceptCount)
  const concepts = dailyWord.keyConcepts.map((concept) => {
    let matchedTerm = null
    const explicitMatch = concept.matchTerms.some((t) => {
      const m = termMatches(input, t)
      if (m) matchedTerm = t
      return m
    })
    const fuzzyMatch = !explicitMatch && fuzzyConceptMatch(inputMeaningful, concept)
    const matched = explicitMatch || fuzzyMatch
    if (DEBUG_WORD && dailyWord.word === DEBUG_WORD) {
      console.log(`    [DEBUG] concept="${concept.label}" explicit=${explicitMatch}(term=${matchedTerm}) fuzzy=${fuzzyMatch} matched=${matched}`)
    }
    return { keyword: concept.keyword, label: concept.label, hint: concept.hint, matched }
  })
  const matchedCount = concepts.filter((c) => c.matched).length
  const conceptScore = matchedCount * pointsPerConcept
  let synonymWarning = false
  const isSynonymOnly = dailyWord.synonyms.some((syn) => input.includes(syn.toLowerCase()))
  if (isSynonymOnly && words.length <= 3) synonymWarning = true
  let lengthScore = 0
  if (words.length >= 5 && words.length <= 15) lengthScore = 20
  else if (words.length >= 3) lengthScore = 15
  else if (words.length >= 2) lengthScore = 10
  else lengthScore = 5
  let score = conceptScore + lengthScore
  if (synonymWarning) score = Math.min(score, 35)
  score = Math.max(0, Math.min(100, score))
  return { score, concepts, synonymWarning, matchedCount }
}

// --- Test Words ---
const testWords = [
  {
    word: "infer", partOfSpeech: "verb",
    definition: "To deduce or conclude something from evidence and reasoning rather than from explicit statements.",
    keyConcepts: [
      { keyword: "deduce", matchTerms: ["deduc", "conclude", "conclusion", "determine", "figure out", "gather", "derive", "reason", "surmise", "guess", "interpret", "read between the lines", "extrapolat", "draw", "reach", "work out", "piece together"], label: "Deduce or conclude", hint: "The definition says 'deduce or conclude' -- arriving at an answer through thinking." },
      { keyword: "from evidence", matchTerms: ["evidence", "reasoning", "clue", "sign", "signal", "observation", "information", "implication", "indirect", "implicit", "context", "between the lines", "not explicit", "not stated", "not said", "unspoken", "hinted"], label: "From evidence, not explicit statements", hint: "The definition says 'from evidence and reasoning rather than from explicit statements' -- reading what's implied, not said." },
    ],
    synonyms: ["deduce", "conclude", "gather"],
  },
  {
    word: "superfluous", partOfSpeech: "adjective",
    definition: "Unnecessary, especially through being more than enough.",
    keyConcepts: [
      { keyword: "unnecessary", matchTerms: ["unnecessary", "unneeded", "excess", "extra", "surplus", "redundant", "more than enough", "more than is", "too much", "spare", "leftover", "wasteful", "gratuitous", "expendab", "dispensab", "superfluous", "sufficient", "required", "needed", "beyond what", "not required", "not necessary", "over and above", "exceeding"], label: "Unnecessary; more than enough", hint: "The definition says 'unnecessary, especially through being more than enough' -- beyond what's needed." },
    ],
    synonyms: ["unnecessary", "excess", "redundant"],
  },
  {
    word: "acquit", partOfSpeech: "verb",
    definition: "To free someone from a criminal charge by a verdict of not guilty.",
    keyConcepts: [
      { keyword: "free from charge", matchTerms: ["free", "clear", "releas", "discharg", "absolv", "exonerat", "liberat", "acquit", "pardon", "let off", "dismiss", "drop", "reliev", "charge", "crime", "criminal", "fault", "blame", "accusation", "offense", "offence", "remov", "lift"], label: "Free from a criminal charge", hint: "The definition says 'free someone from a criminal charge' -- a legal release." },
      { keyword: "not guilty", matchTerms: ["not guilty", "innocent", "verdict", "judgment", "judgement", "trial", "court", "jury", "finding", "ruling", "decision", "cleared", "blameless", "without fault", "without blame", "no fault"], label: "By a verdict of not guilty", hint: "The definition says 'by a verdict of not guilty' -- a formal legal finding." },
    ],
    synonyms: ["exonerate", "absolve", "clear"],
  },
  {
    word: "ephemeral", partOfSpeech: "adjective",
    definition: "Lasting for a very short period of time.",
    keyConcepts: [
      { keyword: "short time", matchTerms: ["short", "brief", "moment", "fleeting", "transient", "temporary", "passing", "quick", "instant", "impermanent", "short-lived", "little while"], label: "Lasting a very short time", hint: "The entire definition is one idea: something that lasts only a very short time." },
    ],
    synonyms: ["fleeting", "transient", "momentary"],
  },
  {
    word: "pragmatic", partOfSpeech: "adjective",
    definition: "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations.",
    keyConcepts: [
      { keyword: "practical", matchTerms: ["practical", "realistic", "sensible", "grounded", "real-world", "hands-on", "applied", "functional", "useful", "workable", "pragmatic", "level-headed", "down-to-earth", "matter-of-fact", "practice", "actually works"], label: "Practical and realistic", hint: "The definition says 'dealing with things sensibly and realistically' -- grounded in what works." },
      { keyword: "not theoretical", matchTerms: ["theoretic", "abstract", "idealis", "rather than", "not just", "instead of", "opposed to", "versus", "academic", "hypothetical", "speculative", "impractical", "consideration", "approach"], label: "Rather than theoretical", hint: "The definition says 'based on practical rather than theoretical considerations' -- choosing action over theory." },
    ],
    synonyms: ["practical", "realistic", "sensible"],
  },
  {
    word: "ambiguous", partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; not having one obvious meaning.",
    keyConcepts: [
      { keyword: "multiple interpretations", matchTerms: ["more than one", "multiple", "different", "various", "several", "many", "two", "dual", "double", "ambiguous", "interpret", "meaning", "reading", "sense", "understand", "ways"], label: "Open to more than one interpretation", hint: "The definition says 'open to more than one interpretation' -- it can be read in different ways." },
      { keyword: "unclear meaning", matchTerms: ["unclear", "uncertain", "vague", "confusing", "imprecise", "indefinite", "equivocal", "doubtful", "debatable", "not obvious", "not clear", "obscure", "fuzzy", "hazy", "nebulous", "indistinct"], label: "Not having one obvious meaning", hint: "The definition says 'not having one obvious meaning' -- there's genuine uncertainty about what's meant." },
    ],
    synonyms: ["vague", "unclear", "equivocal"],
  },
  {
    word: "resilience", partOfSpeech: "noun",
    definition: "The capacity to recover quickly from difficulties; toughness.",
    keyConcepts: [
      { keyword: "recover", matchTerms: ["recover", "bounce back", "rebound", "recuperat", "heal", "restore", "return", "regain", "comeback", "rise", "adapt", "overcome", "endure", "withstand", "surviv", "persever", "get back", "spring back"], label: "Capacity to recover", hint: "The definition says 'the capacity to recover quickly' -- bouncing back after adversity." },
      { keyword: "from difficulties", matchTerms: ["difficult", "hardship", "adversity", "setback", "challenge", "obstacle", "crisis", "trauma", "trouble", "struggle", "stress", "pressure", "tough", "problem", "failure", "disaster", "misfortune", "suffering"], label: "From difficulties; toughness", hint: "The definition says 'from difficulties; toughness' -- the recovery follows something genuinely hard." },
    ],
    synonyms: ["toughness", "grit", "fortitude"],
  },
  {
    word: "nuance", partOfSpeech: "noun",
    definition: "A subtle difference in or shade of meaning, expression, or sound.",
    keyConcepts: [
      { keyword: "subtle difference", matchTerms: ["subtle", "slight", "small", "fine", "delicate", "minute", "minor", "thin", "faint", "gentle", "nuanced", "difference", "distinction", "variation", "gradation", "shade", "degree"], label: "Subtle difference or shade", hint: "The definition says 'a subtle difference in or shade of' -- the emphasis is on how small yet important the difference is." },
      { keyword: "meaning", matchTerms: ["meaning", "expression", "sound", "tone", "implication", "connotation", "sense", "interpretation", "significance", "detail", "language", "word", "phrase", "texture", "quality", "character"], label: "Of meaning, expression, or sound", hint: "The definition says 'of meaning, expression, or sound' -- where these fine distinctions live." },
    ],
    synonyms: ["subtlety", "shade", "distinction"],
  },
  {
    word: "empathy", partOfSpeech: "noun",
    definition: "The ability to understand and share the feelings of another.",
    keyConcepts: [
      { keyword: "understand feelings", matchTerms: ["understand", "comprehend", "grasp", "recogniz", "recognis", "perceiv", "sense", "appreciat", "aware", "identify with", "relate", "attune", "read", "know", "feel", "feeling", "emotion", "experience", "perspective", "share", "connect", "resonate"], label: "Understand and share feelings", hint: "The definition says 'the ability to understand and share the feelings of another' -- both cognitive and emotional connection." },
    ],
    synonyms: ["compassion", "sympathy", "understanding"],
  },
  {
    word: "scrutinize", partOfSpeech: "verb",
    definition: "To examine or inspect closely and thoroughly.",
    keyConcepts: [
      { keyword: "examine", matchTerms: ["examine", "inspect", "study", "analyz", "analys", "investigat", "review", "look at", "observe", "survey", "assess", "evaluat", "check", "audit", "probe", "scan", "search", "explor", "dissect", "peer", "pore over"], label: "Examine or inspect", hint: "The definition says 'examine or inspect' -- actively looking at something with intent." },
      { keyword: "closely", matchTerms: ["close", "thorough", "careful", "detail", "meticulous", "rigorous", "intense", "deep", "fine", "minute", "painstaking", "exhaustive", "comprehensive", "scrupulous", "critical", "penetrating"], label: "Closely and thoroughly", hint: "The definition says 'closely and thoroughly' -- not a casual glance but deep, careful examination." },
    ],
    synonyms: ["examine", "inspect", "analyze"],
  },
  {
    word: "catalyst", partOfSpeech: "noun",
    definition: "A person or thing that precipitates an event or change.",
    keyConcepts: [
      { keyword: "precipitates", matchTerms: ["precipitat", "cause", "trigger", "spark", "provoke", "initiate", "start", "launch", "bring about", "set off", "accelerat", "hasten", "speed", "enable", "facilitate", "drive", "prompt", "stimulat", "ignit", "propel", "spur"], label: "Precipitates or triggers", hint: "The definition says 'precipitates' -- directly causing or speeding up something." },
      { keyword: "event or change", matchTerms: ["event", "change", "reaction", "process", "transformation", "development", "shift", "movement", "progress", "transition", "revolution", "action", "outcome", "result", "effect"], label: "An event or change", hint: "The definition says 'an event or change' -- the thing that gets triggered or accelerated." },
    ],
    synonyms: ["trigger", "stimulus", "spark"],
  },
  {
    word: "paradox", partOfSpeech: "noun",
    definition: "A seemingly absurd or self-contradictory statement or proposition that may nonetheless be true.",
    keyConcepts: [
      { keyword: "contradictory", matchTerms: ["contradict", "absurd", "illogical", "opposing", "conflict", "inconsistent", "incompatible", "impossible", "contrary", "paradox", "oxymoron", "ironic", "irony", "nonsensical", "puzzle"], label: "Seemingly contradictory", hint: "The definition says 'seemingly absurd or self-contradictory' -- on the surface it can't make sense." },
      { keyword: "may be true", matchTerms: ["true", "truth", "nonetheless", "yet", "still", "despite", "actually", "real", "valid", "correct", "possible", "deeper", "reveal", "insight", "wisdom", "meaning", "underneath", "beneath"], label: "May nonetheless be true", hint: "The definition says 'that may nonetheless be true' -- the contradiction resolves at a deeper level." },
    ],
    synonyms: ["contradiction", "anomaly", "puzzle"],
  },
  {
    word: "context", partOfSpeech: "noun",
    definition: "The circumstances that form the setting for an event, statement, or idea, and in terms of which it can be fully understood.",
    keyConcepts: [
      { keyword: "circumstances", matchTerms: ["circumstances", "situation", "setting", "environment", "background", "conditions", "surroundings", "framework", "backdrop", "scene", "landscape", "milieu", "event", "statement", "idea", "fact", "information"], label: "Circumstances or setting", hint: "The definition says 'the circumstances that form the setting for an event, statement, or idea' -- the surrounding conditions." },
      { keyword: "understanding", matchTerms: ["understand", "understood", "comprehend", "interpret", "make sense", "meaning", "clarity", "perspective", "light", "appreciat", "evaluat", "assess", "judg", "grasp", "fully", "properly", "correctly", "terms of which"], label: "Enables full understanding", hint: "The definition says 'in terms of which it can be fully understood' -- without context, you can't grasp the complete meaning." },
    ],
    synonyms: ["background", "setting", "circumstances"],
  },
  {
    word: "mitigate", partOfSpeech: "verb",
    definition: "To make something bad less severe, serious, or painful.",
    keyConcepts: [
      { keyword: "make less severe", matchTerms: ["less severe", "less serious", "less painful", "lessen", "reduc", "ease", "reliev", "lighten", "diminish", "soften", "calm", "improv", "lower", "decreas", "milder", "weaken", "alleviat", "dampen", "moderate", "curb", "limit", "minimize"], label: "Make less severe or painful", hint: "The definition says 'make...less severe, serious, or painful' -- reducing the negative impact." },
    ],
    synonyms: ["alleviate", "ease", "reduce"],
  },
]

// --- TEST CASES ---
const testCases = [
  // === PREVIOUS PLAYER FAILURES (the exact inputs from screenshots) ===
  ["infer", "Understand something by deduction", 40, "PLAYER SCREENSHOT: uses 'deduction' morph variant"],
  ["superfluous", "Being more than is sufficient or required", 40, "PLAYER SCREENSHOT: uses sufficient/required"],
  ["acquit", "To relieve of a charge of fault or crime", 40, "PLAYER SCREENSHOT: uses relieve/charge/crime"],

  // === NEAR-EXACT definitions (should score 70+) ===
  ["infer", "To deduce or conclude something from evidence and reasoning", 70, "near-exact definition"],
  ["superfluous", "Unnecessary because there is already more than enough", 70, "close to official"],
  ["ephemeral", "Lasting for a very short time", 70, "near-exact definition"],
  ["ambiguous", "Open to more than one interpretation; not clear", 70, "Oxford style"],
  ["resilience", "The capacity to recover quickly from difficulties", 70, "Oxford style"],
  ["nuance", "A subtle difference in meaning or expression", 70, "dictionary style"],
  ["empathy", "The ability to understand and share the feelings of another", 70, "dictionary style"],
  ["scrutinize", "To examine or inspect closely and thoroughly", 70, "dictionary style"],

  // === VALID PARAPHRASES (should score 40+) ===
  ["acquit", "To free someone from a criminal charge", 40, "covers concept 1 only"],
  ["ephemeral", "Something brief and fleeting", 40, "valid synonym paraphrase"],
  ["pragmatic", "Dealing with things in a practical way", 40, "one concept covered"],
  ["pragmatic", "Being realistic and sensible rather than idealistic", 40, "both concepts"],
  ["ambiguous", "Could mean different things depending on how you read it", 40, "casual but correct"],
  ["resilience", "Being able to bounce back after something bad happens", 40, "casual but correct"],
  ["nuance", "A small but important distinction", 40, "casual but correct"],
  ["empathy", "Feeling what someone else is going through", 40, "casual but correct"],
  ["scrutinize", "To look very carefully at every detail of something", 40, "casual but correct"],
  ["catalyst", "Something that speeds up or triggers change", 40, "casual but correct"],
  ["paradox", "A statement that contradicts itself but might be true", 40, "casual but correct"],
  ["context", "The background information that helps you understand something", 40, "casual but correct"],

  // === SYNONYM-BASED PARAPHRASES (testing synonym clusters) ===
  ["acquit", "To absolve someone of wrongdoing in court", 40, "synonym: absolve for free"],
  ["mitigate", "To alleviate the severity of a problem", 40, "synonym: alleviate for lessen"],
  ["superfluous", "Having an excess beyond what is adequate", 40, "synonym: adequate for enough"],
  ["ephemeral", "Of a temporary and passing nature", 40, "synonym: temporary for short"],
  ["resilience", "The ability to endure hardship and recover", 40, "covers both concepts"],

  // === POOR/WRONG definitions (should score under 35) ===
  // Format: [word, def, minScore, maxScore, desc] -- maxScore null means no cap
  ["infer", "To tell someone something directly", 0, 35, "opposite of infer"],
  ["ephemeral", "Lasting forever and ever", 0, 35, "opposite meaning -- MUST NOT false positive", true],
  ["pragmatic", "A type of boat used in rivers", 0, 35, "completely wrong"],
  ["resilience", "The color of a sunset over the ocean", 0, 35, "totally unrelated -- MUST NOT false positive", true],
  ["acquit", "To run quickly through a forest at night", 0, 35, "totally unrelated"],
  ["ambiguous", "A type of reptile found in swamps", 0, 35, "totally unrelated"],
  ["mitigate", "To celebrate a victory with friends", 0, 35, "totally unrelated"],
  ["nuance", "A type of dance performed at festivals", 0, 35, "totally unrelated"],

  // === SYNONYM-ONLY (should be capped at ~35) ===
  ["ephemeral", "Fleeting", 5, "single synonym only"],
  ["scrutinize", "Examine", 5, "single synonym only"],

  // === EDGE CASES ===
  ["infer", "infer", 0, "just restating the word"],
  ["ephemeral", "ephemeral things are ephemeral", 0, "circular definition"],
  ["mitigate", "To make a bad situation less severe or painful", 70, "near-exact single-concept"],
  ["mitigate", "To ease suffering or reduce harm", 40, "valid paraphrase"],
]

console.log("=== DEFINLE SCORING AUDIT ===\n")

let totalTests = 0
let passed = 0
let failed = 0
const failures = []

for (const tc of testCases) {
  const wordStr = tc[0], definition = tc[1], minScore = tc[2]
  // tc[3] could be maxScore (number) or desc (string) for backward compat
  let maxScore = null, desc = "", debug = false
  if (typeof tc[3] === "number") { maxScore = tc[3]; desc = tc[4] || ""; debug = tc[5] === true }
  else { desc = tc[3] || ""; debug = tc[4] === true }

  const word = testWords.find(w => w.word === wordStr)
  if (!word) {
    console.log(`  SKIP: Word "${wordStr}" not found`)
    continue
  }
  totalTests++
  DEBUG_WORD = debug ? wordStr : null
  const result = scoreDefinition(definition, word)
  DEBUG_WORD = null
  const aboveMin = result.score >= minScore
  const belowMax = maxScore === null || result.score <= maxScore
  const ok = aboveMin && belowMax
  if (ok) passed++
  else {
    failed++
    failures.push({ wordStr, definition, minScore, maxScore, actual: result.score, desc, concepts: result.concepts })
  }
  const conceptLine = result.concepts.map(c => c.matched ? "+" : "-").join("")
  const status = ok ? "PASS" : "FAIL"
  const pad = (s, n) => s.padEnd(n)
  const range = maxScore !== null ? `${String(minScore).padStart(3)}-${String(maxScore).padStart(3)}` : `>=${String(minScore).padStart(3)}  `
  console.log(`  ${status} | ${pad(wordStr, 14)} | ${String(result.score).padStart(3)}/100 (${range}) | [${conceptLine}] | "${definition}"`)
}

console.log(`\n=== RESULTS: ${passed}/${totalTests} passed, ${failed} failed ===`)

if (failures.length > 0) {
  console.log("\n=== FAILURES DETAIL ===\n")
  for (const f of failures) {
    console.log(`  Word: ${f.wordStr}`)
    console.log(`  Input: "${f.definition}"`)
    const rangeStr = f.maxScore !== null ? `${f.minScore}-${f.maxScore}` : `>= ${f.minScore}`
    console.log(`  Expected: ${rangeStr}, Got: ${f.actual}`)
    console.log(`  Why: ${f.desc}`)
    for (const c of f.concepts) {
      console.log(`    ${c.matched ? "+" : "-"} ${c.label}`)
    }
    console.log()
  }
}
