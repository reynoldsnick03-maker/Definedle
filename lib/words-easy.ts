import type { DailyWord } from "./game-data"

// -----------------------------------------------------------------------
// EASY WORDS
//
// Used for both daily easy mode and easy practice mode.
// RULE: every key concept MUST be directly present in the official
//       definition. If the definition doesn't express an idea, it is
//       NOT a concept. Words may have 1, 2 or 3 concepts -- never force.
// -----------------------------------------------------------------------

export const easyWords: DailyWord[] = [
  // DAY 1-30
  {
    word: "context",
    partOfSpeech: "noun",
    definition: "The circumstances that form the setting for an event or idea, in terms of which it can be fully understood.",
    keyConcepts: [
      { keyword: "circumstances", matchTerms: ["circumstance", "condition", "situation", "environment", "setting", "surround", "backdrop", "background", "frame"], label: "Circumstances or setting", hint: "The definition says 'circumstances that form the setting' -- the surrounding conditions." },
      { keyword: "understood", matchTerms: ["understood", "understand", "meaning", "interpret", "comprehend", "make sense", "grasp", "apprehend", "determin", "explain", "clarif"], label: "Fully understood", hint: "The definition says 'can be fully understood' -- context enables comprehension." },
    ],
    synonyms: ["background", "setting", "framework"],
  },
  {
    word: "ephemeral",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time.",
    keyConcepts: [
      { keyword: "short time", matchTerms: ["short", "brief", "moment", "fleeting", "transient", "temporary", "passing", "quick", "instant", "impermanent", "not long", "short-lived", "little while"], label: "Lasting a very short time", hint: "The entire definition is one idea: something that lasts only a very short time." },
    ],
    synonyms: ["fleeting", "transient", "brief"],
  },
  {
    word: "pragmatic",
    partOfSpeech: "adjective",
    definition: "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations.",
    keyConcepts: [
      { keyword: "practical", matchTerms: ["practical", "practic", "sensib", "realistic", "grounded", "reasonable", "level-headed", "rational", "functional", "useful", "applied", "real-world", "hands-on", "down-to-earth", "matter-of-fact", "no-nonsense"], label: "Practical and realistic", hint: "The definition says 'sensibly and realistically, based on practical' -- rooted in what works." },
      { keyword: "not theoretical", matchTerms: ["theor", "abstract", "idealis", "speculat", "academi", "rather than", "not", "instead of", "opposed to", "conceptual"], label: "Rather than theoretical", hint: "The definition says 'rather than theoretical considerations' -- the contrast with theory is key." },
    ],
    synonyms: ["practical", "realistic", "sensible"],
  },
  {
    word: "ambiguous",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; not having one obvious meaning.",
    keyConcepts: [
      { keyword: "more than one", matchTerms: ["more than one", "multiple", "several", "different", "various", "many", "two or more", "numerous", "diverse", "dual", "double"], label: "More than one interpretation", hint: "The definition says 'open to more than one interpretation' -- multiple possible readings." },
      { keyword: "meaning", matchTerms: ["interpret", "meaning", "reading", "understanding", "sense", "significan", "definition", "way to read", "construal"], label: "Not one obvious meaning", hint: "The definition says 'not having one obvious meaning' -- the meaning isn't settled." },
    ],
    synonyms: ["vague", "unclear", "equivocal"],
  },
  {
    word: "resilience",
    partOfSpeech: "noun",
    definition: "The capacity to withstand or recover quickly from difficulties.",
    keyConcepts: [
      { keyword: "recover", matchTerms: ["recover", "bounce", "spring back", "rebound", "withstand", "endur", "surviv", "overcom", "cope", "resist", "bear", "weather", "handle", "tolerat", "absorb"], label: "Withstand or recover", hint: "The definition says 'withstand or recover' -- enduring and bouncing back." },
      { keyword: "difficulties", matchTerms: ["difficult", "hardship", "adversity", "challenge", "setback", "obstacle", "problem", "crisis", "trauma", "stress", "pressure", "trouble", "struggle", "misfortune"], label: "From difficulties", hint: "The definition says 'from difficulties' -- resilience is in response to something hard." },
    ],
    synonyms: ["toughness", "hardiness", "flexibility"],
  },
  {
    word: "nuance",
    partOfSpeech: "noun",
    definition: "A subtle difference in or shade of meaning, expression, or sound.",
    keyConcepts: [
      { keyword: "subtle", matchTerms: ["subtle", "slight", "fine", "delicate", "small", "minor", "faint", "gentle", "soft", "imperceptible", "understated", "barely", "hardly"], label: "Subtle", hint: "The definition says 'a subtle difference' -- barely perceptible." },
      { keyword: "difference", matchTerms: ["difference", "distinction", "variation", "shade", "gradation", "degree", "shift", "tone", "inflect", "meaning", "express"], label: "Difference or shade of meaning", hint: "The definition says 'difference in or shade of meaning' -- a fine gradation." },
    ],
    synonyms: ["subtlety", "shade", "distinction"],
  },
  {
    word: "ubiquitous",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "all places", "omnipresent", "pervasive", "widespread", "universal", "all around", "every corner", "throughout", "far and wide", "prevalent", "abundant", "common"], label: "Found everywhere", hint: "The definition says 'present, appearing, or found everywhere' -- that's the whole idea." },
    ],
    synonyms: ["omnipresent", "pervasive", "widespread"],
  },
  {
    word: "corroborate",
    partOfSpeech: "verb",
    definition: "To confirm or give support to a statement, theory, or finding.",
    keyConcepts: [
      { keyword: "confirm", matchTerms: ["confirm", "verify", "validat", "substantiat", "support", "back up", "back", "bolster", "reinforce", "strengthen", "attest", "prove", "evidence", "bear out", "uphold", "endorse"], label: "Confirm or support", hint: "The definition says 'confirm or give support to' -- adding weight or proof." },
      { keyword: "statement", matchTerms: ["statement", "claim", "theory", "finding", "account", "evidence", "story", "testimony", "report", "hypothesis", "assertion", "allegation", "argument", "idea", "conclusion", "result"], label: "A statement, theory, or finding", hint: "The definition says 'a statement, theory, or finding' -- backing up a specific claim." },
    ],
    synonyms: ["confirm", "verify", "substantiate"],
  },
  {
    word: "proliferate",
    partOfSpeech: "verb",
    definition: "To increase rapidly in number; multiply.",
    keyConcepts: [
      { keyword: "increase", matchTerms: ["increase", "grow", "multiply", "expand", "spread", "rise", "surge", "boom", "escalat", "accumulat", "swell", "mushroom", "blossom", "flourish", "snowball"], label: "Increase in number; multiply", hint: "The definition says 'increase rapidly in number; multiply' -- growing in quantity." },
      { keyword: "rapidly", matchTerms: ["rapid", "fast", "quick", "swift", "sudden", "accelerat", "exponential", "dramatic", "steep", "sharp", "explosive", "uncontrolled"], label: "Rapidly", hint: "The definition says 'rapidly' -- the speed of increase is important." },
    ],
    synonyms: ["multiply", "spread", "expand"],
  },
  {
    word: "scrutinize",
    partOfSpeech: "verb",
    definition: "To examine or inspect closely and thoroughly.",
    keyConcepts: [
      { keyword: "examine", matchTerms: ["examine", "inspect", "study", "analyz", "investigat", "review", "look at", "observe", "survey", "assess", "evaluat", "check", "probe", "audit", "peruse", "scan", "search"], label: "Examine or inspect", hint: "The definition says 'examine or inspect' -- active investigation." },
      { keyword: "closely", matchTerms: ["close", "thorough", "careful", "detail", "meticulous", "rigorous", "intensi", "exhausti", "minute", "deep", "penetrat", "critical", "fine", "attentiv"], label: "Closely and thoroughly", hint: "The definition says 'closely and thoroughly' -- not a casual glance." },
    ],
    synonyms: ["examine", "inspect", "analyze"],
  },
  {
    word: "undermine",
    partOfSpeech: "verb",
    definition: "To gradually weaken or damage something, especially a system or person's authority.",
    keyConcepts: [
      { keyword: "weaken", matchTerms: ["weaken", "damage", "erode", "diminish", "sabotag", "subvert", "compromise", "impair", "corrode", "destabiliz", "destroy", "ruin", "harm", "hurt", "threaten", "chip away", "eat away", "lessen", "reduce"], label: "Weaken or damage", hint: "The definition says 'weaken or damage' -- causing something to deteriorate." },
      { keyword: "gradually", matchTerms: ["gradual", "slow", "incremental", "over time", "bit by bit", "piece by piece", "step by step", "progressi", "subtle", "insidious", "stealthi", "quietly", "indirectly", "covertly"], label: "Gradually", hint: "The definition says 'gradually' -- not sudden destruction but slow erosion." },
    ],
    synonyms: ["weaken", "sabotage", "erode"],
  },
  {
    word: "empathy",
    partOfSpeech: "noun",
    definition: "The ability to understand and share the feelings of another.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "comprehend", "recogniz", "perceiv", "appreciat", "grasp", "sense", "aware", "identify with", "relate to", "see", "know"], label: "Understand", hint: "The definition says 'understand' -- cognitively grasping what someone feels." },
      { keyword: "share feelings", matchTerms: ["share", "feel", "feeling", "emotion", "experience", "connect", "resonate", "sympathiz", "compassion", "moved", "touch", "care", "concern", "another", "other", "someone"], label: "Share the feelings of another", hint: "The definition says 'share the feelings of another' -- not just knowing but feeling with them." },
    ],
    synonyms: ["compassion", "understanding", "sympathy"],
  },
  {
    word: "paradox",
    partOfSpeech: "noun",
    definition: "A seemingly absurd or contradictory statement or situation that may nonetheless be true.",
    keyConcepts: [
      { keyword: "contradictory", matchTerms: ["contradict", "absurd", "illogical", "inconsistent", "opposing", "conflict", "incompatible", "contrary", "paradoxical", "self-contradict", "doesn't make sense", "impossible"], label: "Seemingly contradictory", hint: "The definition says 'seemingly absurd or contradictory' -- it appears to defy logic." },
      { keyword: "may be true", matchTerms: ["true", "truth", "nonetheless", "yet", "still", "actually", "real", "valid", "correct", "possible", "despite", "however", "in fact", "turns out"], label: "May nonetheless be true", hint: "The definition says 'may nonetheless be true' -- the surprise is that it holds up." },
    ],
    synonyms: ["contradiction", "anomaly", "puzzle"],
  },
  {
    word: "catalyst",
    partOfSpeech: "noun",
    definition: "A person or thing that precipitates an event or causes significant change.",
    keyConcepts: [
      { keyword: "causes", matchTerms: ["cause", "trigger", "precipitat", "spark", "provoke", "bring about", "set off", "initiat", "driv", "prompt", "spur", "ignit", "launch", "start", "produce", "generat", "lead to"], label: "Precipitates or causes", hint: "The definition says 'precipitates an event or causes' -- it triggers something." },
      { keyword: "change", matchTerms: ["change", "event", "transform", "shift", "upheaval", "development", "reaction", "movement", "progress", "revolution", "breakthrough", "significant", "major", "important", "action"], label: "Significant change or event", hint: "The definition says 'an event or...significant change' -- not trivial, but meaningful impact." },
    ],
    synonyms: ["trigger", "stimulus", "spark"],
  },
  {
    word: "benevolent",
    partOfSpeech: "adjective",
    definition: "Well-meaning and kindly.",
    keyConcepts: [
      { keyword: "kind", matchTerms: ["kind", "kindly", "gentle", "warm", "generous", "caring", "compassionat", "tender", "good-hearted", "benign", "charitable", "friendly", "well-meaning", "good will", "good intention", "altruist"], label: "Well-meaning and kindly", hint: "The definition says 'well-meaning and kindly' -- a gentle disposition with good intentions." },
    ],
    synonyms: ["kind", "generous", "charitable"],
  },
  {
    word: "dilemma",
    partOfSpeech: "noun",
    definition: "A situation in which a difficult choice has to be made between two or more alternatives.",
    keyConcepts: [
      { keyword: "difficult choice", matchTerms: ["difficult", "hard", "tough", "challenging", "painful", "choice", "decision", "choose", "decide", "pick", "select", "dilemma"], label: "A difficult choice", hint: "The definition says 'a difficult choice has to be made' -- the decision is hard." },
      { keyword: "alternatives", matchTerms: ["alternative", "option", "two", "more", "multiple", "either", "path", "route", "course", "possibility", "competing", "between", "among", "rival"], label: "Between alternatives", hint: "The definition says 'between two or more alternatives' -- multiple competing options." },
    ],
    synonyms: ["predicament", "quandary", "bind"],
  },
  {
    word: "eloquent",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing.",
    keyConcepts: [
      { keyword: "fluent", matchTerms: ["fluent", "fluency", "articulat", "smooth", "graceful", "expressive", "polished", "clear", "eloquen", "well-spoken", "well-written", "skillful", "skilful", "masterful", "powerful", "moving"], label: "Fluent or persuasive", hint: "The definition says 'fluent or persuasive' -- smooth and compelling expression." },
      { keyword: "speaking or writing", matchTerms: ["speak", "speech", "talk", "writ", "word", "language", "communicat", "express", "voice", "orat", "rhetor", "verbal", "prose"], label: "In speaking or writing", hint: "The definition says 'in speaking or writing' -- applies to verbal or written communication." },
    ],
    synonyms: ["articulate", "expressive", "fluent"],
  },
  {
    word: "obsolete",
    partOfSpeech: "adjective",
    definition: "No longer produced or used; out of date.",
    keyConcepts: [
      { keyword: "no longer used", matchTerms: ["no longer", "not used", "disused", "discontinued", "abandoned", "retired", "defunct", "extinct", "outdated", "out of date", "old", "antiquat", "outmoded", "archaic", "superseded", "replaced", "bygone", "past", "former", "previous"], label: "No longer produced or used; out of date", hint: "The definition says 'no longer produced or used; out of date' -- it has been left behind." },
    ],
    synonyms: ["outdated", "antiquated", "outmoded"],
  },
  {
    word: "elaborate",
    partOfSpeech: "verb",
    definition: "To develop or present something in further detail.",
    keyConcepts: [
      { keyword: "develop", matchTerms: ["develop", "expand", "extend", "add", "flesh out", "build on", "present", "explain", "describe", "articulate", "express", "lay out", "go into", "discuss"], label: "Develop or present", hint: "The definition says 'develop or present' -- to take something and expand it." },
      { keyword: "detail", matchTerms: ["detail", "depth", "further", "more", "greater", "fully", "thoroughly", "specifics", "particular", "length", "deep", "comprehensive"], label: "In further detail", hint: "The definition says 'in further detail' -- adding depth, not just repeating." },
    ],
    synonyms: ["expand", "explain", "develop"],
  },
  {
    word: "consensus",
    partOfSpeech: "noun",
    definition: "A general agreement among a group of people.",
    keyConcepts: [
      { keyword: "agreement", matchTerms: ["agreement", "accord", "harmony", "unanim", "unity", "concurrence", "common ground", "shared", "mutual", "collective", "together"], label: "General agreement", hint: "The definition says 'a general agreement' -- people coming to the same view." },
      { keyword: "group", matchTerms: ["group", "people", "members", "participant", "everyone", "majority", "most", "communit", "team", "body", "public", "all", "collective", "together"], label: "Among a group", hint: "The definition says 'among a group of people' -- it's collective, not individual." },
    ],
    synonyms: ["agreement", "accord", "harmony"],
  },
  {
    word: "detrimental",
    partOfSpeech: "adjective",
    definition: "Tending to cause harm.",
    keyConcepts: [
      { keyword: "cause harm", matchTerms: ["harm", "damage", "injur", "hurt", "negative", "bad", "adverse", "destructiv", "harmful", "damaging", "danger", "toxic", "unhealthy", "ruinous", "deleterious", "detriment"], label: "Tending to cause harm", hint: "The definition says 'tending to cause harm' -- something that does damage." },
    ],
    synonyms: ["harmful", "damaging", "injurious"],
  },
  {
    word: "alleviate",
    partOfSpeech: "verb",
    definition: "To make suffering or a problem less severe.",
    keyConcepts: [
      { keyword: "make less severe", matchTerms: ["less severe", "lessen", "reduc", "ease", "reliev", "lighten", "diminish", "soften", "sooth", "calm", "improv", "lower", "decreas", "milder", "moderate", "alleviat"], label: "Make less severe", hint: "The definition says 'make...less severe' -- reducing intensity, not eliminating." },
      { keyword: "suffering or problem", matchTerms: ["suffer", "pain", "distress", "discomfort", "problem", "issue", "burden", "hardship", "difficult", "trouble", "symptom", "ailment", "condition", "agony", "misery"], label: "Suffering or a problem", hint: "The definition says 'suffering or a problem' -- it targets something negative." },
    ],
    synonyms: ["relieve", "ease", "mitigate"],
  },
  {
    word: "inherent",
    partOfSpeech: "adjective",
    definition: "Existing in something as a permanent, essential, or characteristic attribute.",
    keyConcepts: [
      { keyword: "existing in", matchTerms: ["exist", "present", "built-in", "embed", "contain", "within", "inside", "part of", "belonging", "intrinsic", "innate", "natural", "ingrain", "integral", "fundamental"], label: "Existing in something", hint: "The definition says 'existing in something' -- it lives within the thing itself." },
      { keyword: "permanent", matchTerms: ["permanent", "essential", "characteristic", "inseparab", "unchanging", "constant", "enduring", "lasting", "core", "basic", "deep", "inalienab", "inescapab"], label: "Permanent or essential", hint: "The definition says 'permanent, essential, or characteristic' -- you can't separate it out." },
    ],
    synonyms: ["intrinsic", "innate", "fundamental"],
  },
  {
    word: "innovate",
    partOfSpeech: "verb",
    definition: "To introduce new methods, ideas, or products.",
    keyConcepts: [
      { keyword: "introduce", matchTerms: ["introduce", "create", "invent", "develop", "bring", "launch", "pioneer", "establish", "implement", "start", "begin", "initiat", "originate"], label: "Introduce", hint: "The definition says 'introduce' -- bringing something into existence or use." },
      { keyword: "new", matchTerms: ["new", "novel", "original", "fresh", "different", "modern", "cutting-edge", "groundbreaking", "unprecedented", "creative", "inventive", "advanced"], label: "New methods, ideas, or products", hint: "The definition says 'new methods, ideas, or products' -- novelty is the key." },
    ],
    synonyms: ["pioneer", "create", "invent"],
  },
  {
    word: "integrity",
    partOfSpeech: "noun",
    definition: "The quality of being honest and having strong moral principles.",
    keyConcepts: [
      { keyword: "honest", matchTerms: ["honest", "honesty", "truthful", "sincere", "transparent", "trustworth", "reliable", "dependab", "genuine", "authentic", "forthright", "candid", "upright"], label: "Being honest", hint: "The definition says 'being honest' -- truthfulness as a core quality." },
      { keyword: "moral principles", matchTerms: ["moral", "principle", "ethic", "virtue", "value", "standard", "character", "conscience", "righteous", "just", "fair", "noble", "honor", "decent", "good", "scrupul"], label: "Strong moral principles", hint: "The definition says 'strong moral principles' -- a firm ethical foundation." },
    ],
    synonyms: ["honesty", "virtue", "rectitude"],
    altDefinitions: [
      {
        definition: "The state of being whole and undivided; structural soundness.",
        keyConcepts: [
          { keyword: "whole", matchTerms: ["whole", "complete", "undivid", "intact", "unbroken", "unified", "together", "cohesive", "sound", "solid"], label: "Whole and undivided", hint: "Integrity can also mean being whole and undivided -- nothing broken or missing." },
          { keyword: "structural soundness", matchTerms: ["structur", "sound", "strong", "stable", "reliable", "durable", "condition", "quality", "robust", "uncompromis"], label: "Structural soundness", hint: "Integrity also refers to the soundness of a structure or system." },
        ],
      },
  {
    word: "nostalgia",
    partOfSpeech: "noun",
    definition: "A sentimental longing or wistful affection for a period in the past.",
    keyConcepts: [
      { keyword: "longing", matchTerms: ["longing", "yearning", "wish", "desire", "miss", "sentimental", "wistful", "affection", "fondness", "pining", "ache", "homesick", "reminiscen", "rememb", "romantic"], label: "Sentimental longing", hint: "The definition says 'sentimental longing or wistful affection' -- an emotional pull." },
      { keyword: "past", matchTerms: ["past", "before", "previous", "former", "earlier", "bygone", "ago", "memory", "memories", "childhood", "youth", "history", "old", "once", "used to", "time gone"], label: "For the past", hint: "The definition says 'for a period in the past' -- directed backward in time." },
    ],
    synonyms: ["longing", "wistfulness", "reminiscence"],
  },
  {
    word: "tenacious",
    partOfSpeech: "adjective",
    definition: "Tending to keep a firm hold of something; persistent.",
    keyConcepts: [
      { keyword: "firm hold", matchTerms: ["firm", "hold", "grip", "cling", "hang on", "refuse to let go", "keep", "retain", "maintain", "steadfast", "unyielding", "resolut", "determin", "dogged", "relentless", "unwavering", "persistent", "stubborn", "persever"], label: "Keep a firm hold; persistent", hint: "The definition says 'keep a firm hold of something; persistent' -- not letting go." },
    ],
    synonyms: ["persistent", "determined", "dogged"],
  },
  {
    word: "mitigate",
    partOfSpeech: "verb",
    definition: "To make something bad less severe, serious, or painful.",
    keyConcepts: [
      { keyword: "make less severe", matchTerms: ["less severe", "less serious", "less painful", "lessen", "reduc", "ease", "reliev", "lighten", "diminish", "soften", "calm", "improv", "lower", "decreas", "milder", "weaken", "alleviat", "dampen", "moderate", "curb", "limit", "minimize"], label: "Make less severe or painful", hint: "The definition says 'make...less severe, serious, or painful' -- reducing the negative impact." },
    ],
    synonyms: ["alleviate", "ease", "reduce"],
  },
  {
    word: "candid",
    partOfSpeech: "adjective",
    definition: "Truthful and straightforward; frank.",
    keyConcepts: [
      { keyword: "truthful", matchTerms: ["truthful", "honest", "sincere", "genuine", "frank", "straightforward", "direct", "open", "blunt", "upfront", "forthright", "candid", "plain", "transparent", "outspoken", "unguarded"], label: "Truthful and straightforward; frank", hint: "The definition says 'truthful and straightforward; frank' -- honest without pretense." },
    ],
    synonyms: ["frank", "honest", "blunt"],
  },
  {
    word: "arbitrary",
    partOfSpeech: "adjective",
    definition: "Based on random choice or personal whim, rather than any reason or system.",
    keyConcepts: [
      { keyword: "random", matchTerms: ["random", "chance", "haphazard", "indiscriminate", "whim", "impulse", "fancy", "caprice", "aimless", "unplanned", "personal", "subjective"], label: "Based on random choice or whim", hint: "The definition says 'based on random choice or personal whim' -- no principled basis." },
      { keyword: "not reason", matchTerms: ["reason", "logic", "rational", "justif", "basis", "grounds", "cause", "rationale", "system", "systematic", "structure", "rule", "principle", "criteria", "method", "order", "rather than", "without", "no reason"], label: "Rather than reason or system", hint: "The definition says 'rather than any reason or system' -- the absence of logic is key." },
    ],
    synonyms: ["random", "capricious", "whimsical"],
  },
  {
    word: "concise",
    partOfSpeech: "adjective",
    definition: "Giving a lot of information clearly and in a few words; brief but comprehensive.",
    keyConcepts: [
      { keyword: "few words", matchTerms: ["brief", "brevity", "short", "succinct", "terse", "pithy", "compact", "condensed", "to the point", "economical", "few", "fewer", "minimal", "limited", "spare", "lean"], label: "In a few words; brief", hint: "The definition says 'in a few words; brief' -- using minimal language." },
      { keyword: "comprehensive", matchTerms: ["information", "inform", "content", "substance", "meaning", "ideas", "communicat", "convey", "express", "lot", "much", "comprehensive", "thorough", "complete", "full", "packed", "rich", "detailed", "everything", "cover"], label: "A lot of information; comprehensive", hint: "The definition says 'giving a lot of information...comprehensive' -- brevity that still says a lot." },
    ],
    synonyms: ["succinct", "brief", "terse"],
  },
  {
    word: "cultivate",
    partOfSpeech: "verb",
    definition: "To try to acquire or develop a quality, sentiment, or skill.",
    keyConcepts: [
      { keyword: "develop", matchTerms: ["acquire", "develop", "build", "grow", "foster", "nurture", "strengthen", "improve", "hone", "refine", "work on", "practice", "train", "learn", "gain"], label: "Acquire or develop", hint: "The definition says 'acquire or develop' -- actively working to gain something." },
      { keyword: "quality", matchTerms: ["quality", "sentiment", "skill", "trait", "ability", "talent", "habit", "virtue", "character", "attitude", "mindset", "taste", "appreciation"], label: "A quality, sentiment, or skill", hint: "The definition says 'a quality, sentiment, or skill' -- something intangible you grow in yourself." },
    ],
    synonyms: ["develop", "foster", "nurture"],
  },
  {
    word: "anecdote",
    partOfSpeech: "noun",
    definition: "A short, amusing or interesting story about a real incident or person.",
    keyConcepts: [
      { keyword: "short story", matchTerms: ["short", "brief", "story", "tale", "account", "narrative", "retelling", "recounting", "episode", "vignette", "snippet"], label: "A short story", hint: "The definition says 'a short...story' -- a brief narrative piece." },
      { keyword: "real", matchTerms: ["real", "true", "actual", "personal", "incident", "person", "event", "experience", "happen", "life", "factual", "genuine", "authentic", "amusing", "interesting", "entertaining", "funny", "humorous"], label: "About a real incident or person", hint: "The definition says 'about a real incident or person' -- grounded in something that actually happened." },
    ],
    synonyms: ["story", "tale", "account"],
  },
  {
    word: "meticulous",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; very careful and precise.",
    keyConcepts: [
      { keyword: "attention to detail", matchTerms: ["detail", "attention", "particular", "thorough", "exact", "precise", "careful", "painstaking", "diligent", "conscientious", "rigorous", "methodical", "scrupulous", "perfectionist", "fastidious", "minute"], label: "Great attention to detail; careful and precise", hint: "The definition says 'great attention to detail; very careful and precise' -- nothing is overlooked." },
    ],
    synonyms: ["thorough", "precise", "painstaking"],
  },
  {
    word: "persevere",
    partOfSpeech: "verb",
    definition: "To continue in a course of action even in the face of difficulty or with little or no prospect of success.",
    keyConcepts: [
      { keyword: "continue", matchTerms: ["continue", "persist", "keep going", "carry on", "press on", "endure", "sustain", "maintain", "not give up", "stick with", "push through", "soldier on", "hold on", "stay the course"], label: "Continue a course of action", hint: "The definition says 'continue in a course of action' -- you keep going." },
      { keyword: "despite difficulty", matchTerms: ["difficult", "hardship", "obstacle", "challenge", "adversity", "setback", "struggle", "despite", "even when", "regardless", "against the odds", "little prospect", "no prospect", "unlikely", "hopeless", "failure"], label: "Despite difficulty or poor prospects", hint: "The definition says 'in the face of difficulty or with little...prospect of success' -- persisting when it's hard." },
    ],
    synonyms: ["persist", "endure", "continue"],
  },
  {
    word: "redundant",
    partOfSpeech: "adjective",
    definition: "Not or no longer needed or useful; superfluous.",
    keyConcepts: [
      { keyword: "not needed", matchTerms: ["not needed", "no longer needed", "unnecessary", "unneeded", "surplus", "excess", "extra", "superfluous", "spare", "leftover", "dispensab", "expendab", "useless", "pointless", "wasteful", "duplicate", "repetiti"], label: "Not needed or useful; superfluous", hint: "The definition says 'not or no longer needed or useful' -- it serves no purpose." },
    ],
    synonyms: ["unnecessary", "superfluous", "excess"],
  },
  {
    word: "advocate",
    partOfSpeech: "verb",
    definition: "To publicly recommend or support a particular cause or policy.",
    keyConcepts: [
      { keyword: "support", matchTerms: ["recommend", "support", "promote", "champion", "endorse", "back", "defend", "argue for", "push for", "urge", "campaign", "lobby", "stand for", "speak for", "fight for", "favor", "favour", "publicly"], label: "Publicly recommend or support", hint: "The definition says 'publicly recommend or support' -- openly backing something." },
      { keyword: "cause", matchTerms: ["cause", "policy", "position", "idea", "movement", "reform", "issue", "matter", "principle", "belief", "right", "change", "measure", "action", "initiative"], label: "A cause or policy", hint: "The definition says 'a particular cause or policy' -- not vague support, but for something specific." },
    ],
    synonyms: ["champion", "promote", "endorse"],
  },
  {
    word: "ambivalent",
    partOfSpeech: "adjective",
    definition: "Having mixed feelings or contradictory ideas about something.",
    keyConcepts: [
      { keyword: "mixed feelings", matchTerms: ["mixed", "conflicting", "contradictory", "opposing", "torn", "divided", "uncertain", "unsure", "of two minds", "ambivalent", "indecisi", "hesitant", "wavering", "simultaneous", "both", "pulled"], label: "Mixed feelings or contradictory ideas", hint: "The definition says 'mixed feelings or contradictory ideas' -- pulled in two directions at once." },
    ],
    synonyms: ["torn", "conflicted", "undecided"],
  },
  {
    word: "hierarchy",
    partOfSpeech: "noun",
    definition: "A system in which members are ranked according to relative status or authority.",
    keyConcepts: [
      { keyword: "ranked", matchTerms: ["rank", "order", "level", "tier", "grade", "position", "ladder", "scale", "pecking order", "chain of command", "classified", "sorted", "arranged", "organized", "structured"], label: "Ranked", hint: "The definition says 'ranked according to relative status' -- ordered from top to bottom." },
      { keyword: "status or authority", matchTerms: ["status", "authority", "power", "importance", "seniority", "influence", "command", "dominance", "control", "superiority", "subordinat", "above", "below", "higher", "lower"], label: "Status or authority", hint: "The definition says 'relative status or authority' -- the ranking is based on power or importance." },
    ],
    synonyms: ["ranking", "order", "pecking order"],
  },
  {
    word: "tangible",
    partOfSpeech: "adjective",
    definition: "Clear and definite; real; perceptible by touch.",
    keyConcepts: [
      { keyword: "real", matchTerms: ["real", "concrete", "definite", "actual", "solid", "material", "physical", "substantial", "palpab", "touchable", "perceptib", "visible", "evident", "clear", "manifest", "obvious", "measurabl", "discernib"], label: "Clear, definite, and real", hint: "The definition says 'clear and definite; real' -- something concrete you can perceive." },
    ],
    synonyms: ["concrete", "palpable", "real"],
  },
  {
    word: "converge",
    partOfSpeech: "verb",
    definition: "To come together from different directions so as to eventually meet.",
    keyConcepts: [
      { keyword: "come together", matchTerms: ["come together", "meet", "join", "merge", "unite", "gather", "assemble", "concentrate", "collect", "combine", "fuse", "connect", "intersect", "approach", "draw near"], label: "Come together", hint: "The definition says 'come together...so as to eventually meet' -- moving toward a common point." },
      { keyword: "different directions", matchTerms: ["different", "direction", "separate", "various", "multiple", "divergent", "distinct", "apart", "scattered", "diverse", "disparate", "from all"], label: "From different directions", hint: "The definition says 'from different directions' -- starting apart and ending together." },
    ],
    synonyms: ["merge", "meet", "unite"],
  },
  {
    word: "cynical",
    partOfSpeech: "adjective",
    definition: "Believing that people are motivated purely by self-interest; distrustful of human sincerity.",
    keyConcepts: [
      { keyword: "self-interest", matchTerms: ["self-interest", "selfish", "motiv", "ulterior", "profit", "gain", "personal", "greed", "advantage", "exploit", "manipulat", "self-serving", "look out for themselves"], label: "Motivated by self-interest", hint: "The definition says 'motivated purely by self-interest' -- assuming people act for selfish reasons." },
      { keyword: "distrustful", matchTerms: ["distrust", "mistrust", "suspicious", "skeptic", "doubt", "pessimist", "jaded", "disbeliev", "question", "wary", "untrustworthy", "sincer", "goodness", "altruism", "genuine"], label: "Distrustful of sincerity", hint: "The definition says 'distrustful of human sincerity' -- doubting people's goodness." },
    ],
    synonyms: ["skeptical", "distrustful", "pessimistic"],
  },
  {
    word: "fluctuate",
    partOfSpeech: "verb",
    definition: "To rise and fall irregularly in number or amount.",
    keyConcepts: [
      { keyword: "rise and fall", matchTerms: ["rise", "fall", "go up", "go down", "increase", "decrease", "swing", "shift", "vary", "change", "move", "oscillat", "waver", "alternate", "bounce", "seesaw"], label: "Rise and fall", hint: "The definition says 'rise and fall' -- moving in both directions." },
      { keyword: "irregularly", matchTerms: ["irregular", "unpredictab", "inconsistent", "erratic", "uneven", "unstable", "variable", "unsteady", "random", "sporadic", "intermittent", "fitful"], label: "Irregularly", hint: "The definition says 'irregularly' -- no steady pattern." },
    ],
    synonyms: ["vary", "oscillate", "waver"],
  },
  {
    word: "plausible",
    partOfSpeech: "adjective",
    definition: "Seeming reasonable or probable.",
    keyConcepts: [
      { keyword: "reasonable", matchTerms: ["reasonable", "probable", "likely", "believab", "credibl", "convincing", "conceivab", "possible", "feasib", "logical", "sound", "valid", "sensible", "realistic", "seem", "appear"], label: "Seeming reasonable or probable", hint: "The definition says 'seeming reasonable or probable' -- it appears to make sense." },
    ],
    synonyms: ["credible", "believable", "feasible"],
  },
  {
    word: "diminish",
    partOfSpeech: "verb",
    definition: "To make or become less.",
    keyConcepts: [
      { keyword: "become less", matchTerms: ["less", "lessen", "decrease", "reduce", "shrink", "decline", "lower", "drop", "fade", "dwindle", "wane", "weaken", "ebb", "taper", "recede", "smaller", "fewer", "diminish", "contract"], label: "Make or become less", hint: "The definition says 'make or become less' -- a reduction in size, importance, or intensity." },
    ],
    synonyms: ["decrease", "reduce", "lessen"],
  },
  {
    word: "hypothesis",
    partOfSpeech: "noun",
    definition: "A proposed explanation made on the basis of limited evidence, as a starting point for further investigation.",
    keyConcepts: [
      { keyword: "proposed explanation", matchTerms: ["proposed", "explanation", "theory", "idea", "suggestion", "assumption", "conjecture", "supposition", "proposition", "guess", "prediction", "tentativ", "preliminary", "initial"], label: "A proposed explanation", hint: "The definition says 'a proposed explanation' -- a candidate answer, not proven yet." },
      { keyword: "further investigation", matchTerms: ["further", "investigat", "research", "study", "test", "experiment", "evidence", "limited", "starting point", "basis", "beginning", "explore", "examin", "verify", "prove"], label: "Starting point for investigation", hint: "The definition says 'starting point for further investigation' -- it's meant to be tested." },
    ],
    synonyms: ["theory", "conjecture", "supposition"],
  },
  {
    word: "compile",
    partOfSpeech: "verb",
    definition: "To produce a list or book by assembling information collected from other sources.",
    keyConcepts: [
      { keyword: "assemble", matchTerms: ["assemble", "collect", "gather", "put together", "bring together", "combine", "accumulate", "aggregate", "arrange", "organize", "collate", "curate", "amass"], label: "Assembling from various sources", hint: "The definition says 'by assembling information collected from other sources' -- gathering and combining." },
      { keyword: "produce", matchTerms: ["produce", "create", "make", "generate", "compose", "construct", "build", "form", "list", "book", "document", "catalog", "collection", "compil", "reference", "volume"], label: "Produce a list or book", hint: "The definition says 'produce a list or book' -- the result is a consolidated work." },
    ],
    synonyms: ["assemble", "collect", "gather"],
  },
  {
    word: "profound",
    partOfSpeech: "adjective",
    definition: "Very great or intense; having or showing great knowledge or insight.",
    keyConcepts: [
      { keyword: "great or intense", matchTerms: ["great", "intense", "deep", "extreme", "immense", "overwhelming", "tremendous", "significant", "serious", "far-reaching", "thorough", "utter", "absolute"], label: "Very great or intense", hint: "The definition says 'very great or intense' -- not superficial but deeply felt." },
      { keyword: "insight", matchTerms: ["knowledge", "insight", "understanding", "wisdom", "perception", "awareness", "intellectual", "thoughtful", "meaningful", "philosophical", "penetrating", "discerning"], label: "Great knowledge or insight", hint: "The definition says 'great knowledge or insight' -- deeply informed or perceptive." },
    ],
    synonyms: ["deep", "intense", "insightful"],
  },
  {
    word: "procrastinate",
    partOfSpeech: "verb",
    definition: "To delay or postpone action; to put off doing something.",
    keyConcepts: [
      { keyword: "delay", matchTerms: ["delay", "postpone", "put off", "defer", "stall", "procrastinat", "wait", "drag feet", "avoid", "push back", "shelve", "table", "hold off", "dawdle", "linger", "hesitate", "dilly-dally"], label: "Delay or postpone action", hint: "The definition says 'delay or postpone action' -- not acting when you should." },
    ],
    synonyms: ["delay", "postpone", "stall"],
  },
  {
    word: "reciprocal",
    partOfSpeech: "adjective",
    definition: "Given, felt, or done in return.",
    keyConcepts: [
      { keyword: "in return", matchTerms: ["return", "mutual", "exchange", "two-way", "both ways", "give and take", "shared", "correspond", "complement", "match", "mirror", "respond", "reciprocat", "back and forth", "each other"], label: "Given or done in return", hint: "The definition says 'given, felt, or done in return' -- a two-way exchange." },
    ],
    synonyms: ["mutual", "corresponding", "shared"],
  },
  {
    word: "complacent",
    partOfSpeech: "adjective",
    definition: "Showing smug or uncritical satisfaction with oneself or one's achievements.",
    keyConcepts: [
      { keyword: "satisfaction", matchTerms: ["satisfaction", "satisfied", "content", "pleased", "comfortable", "self-satisfied", "smug", "proud", "complacen"], label: "Uncritical satisfaction", hint: "The definition says 'uncritical satisfaction with oneself' -- pleased without questioning." },
      { keyword: "uncritical", matchTerms: ["uncritical", "smug", "unaware", "ignorant", "blind", "careless", "lazy", "passive", "indifferent", "apathetic", "overconfident", "unquestioning", "failing", "neglect"], label: "Smug or uncritical", hint: "The definition says 'smug or uncritical' -- a false sense of security." },
    ],
    synonyms: ["smug", "self-satisfied", "content"],
  },
  {
    word: "infer",
    partOfSpeech: "verb",
    definition: "To deduce or conclude something from evidence and reasoning rather than from explicit statements.",
    keyConcepts: [
      { keyword: "deduce", matchTerms: ["deduce", "conclude", "determine", "figure out", "gather", "derive", "reason", "surmise", "guess", "interpret", "read between the lines", "extrapolat", "draw", "reach"], label: "Deduce or conclude", hint: "The definition says 'deduce or conclude' -- arriving at an answer through thinking." },
      { keyword: "from evidence", matchTerms: ["evidence", "reasoning", "clue", "indication", "sign", "signal", "hint", "context", "information", "data", "observation", "rather than", "not explicit", "indirect", "implied", "suggest"], label: "From evidence, not explicit statements", hint: "The definition says 'from evidence and reasoning rather than from explicit statements' -- reading between the lines." },
    ],
    synonyms: ["deduce", "conclude", "gather"],
  },
  {
    word: "frugal",
    partOfSpeech: "adjective",
    definition: "Sparing or economical with regard to money or food.",
    keyConcepts: [
      { keyword: "economical", matchTerms: ["sparing", "economical", "thrifty", "careful", "prudent", "modest", "restrained", "conservative", "saving", "budget", "cheap", "inexpensive", "simple", "spartan", "austere", "penny", "cost-conscious", "frugal", "waste", "minimal"], label: "Sparing or economical", hint: "The definition says 'sparing or economical' -- using resources carefully, not wastefully." },
    ],
    synonyms: ["thrifty", "economical", "sparing"],
  },
  {
    word: "adjacent",
    partOfSpeech: "adjective",
    definition: "Next to or adjoining something else.",
    keyConcepts: [
      { keyword: "next to", matchTerms: ["next to", "beside", "alongside", "near", "neighboring", "adjoining", "bordering", "abutting", "touching", "close", "nearby", "contiguous", "side by side"], label: "Next to or adjoining", hint: "The definition says 'next to or adjoining something else' -- physically close or bordering." },
    ],
    synonyms: ["neighboring", "adjoining", "bordering"],
  },
  {
    word: "exacerbate",
    partOfSpeech: "verb",
    definition: "To make a problem, bad situation, or negative feeling worse.",
    keyConcepts: [
      { keyword: "make worse", matchTerms: ["worse", "worsen", "aggravat", "intensif", "escalat", "increase", "heighten", "amplif", "compound", "deepen", "inflam", "provok", "magnif", "strengthen", "add to", "fuel"], label: "Make worse", hint: "The definition says 'make...worse' -- increasing the severity of something bad." },
    ],
    synonyms: ["worsen", "aggravate", "intensify"],
  },
  {
    word: "altruistic",
    partOfSpeech: "adjective",
    definition: "Showing a selfless concern for the well-being of others.",
    keyConcepts: [
      { keyword: "selfless", matchTerms: ["selfless", "unselfish", "disinterested", "generous", "giving", "self-sacrific", "without reward", "no personal gain", "unconditional", "charitable"], label: "Selfless", hint: "The definition says 'selfless' -- acting without expecting anything in return." },
      { keyword: "well-being of others", matchTerms: ["well-being", "welfare", "others", "other people", "concern", "care", "help", "benefit", "good", "need", "community", "humanity", "fellow", "neighbor", "neighbour", "society"], label: "Concern for others", hint: "The definition says 'concern for the well-being of others' -- directed at helping other people." },
    ],
    synonyms: ["selfless", "generous", "philanthropic"],
  },
  {
    word: "precedent",
    partOfSpeech: "noun",
    definition: "An earlier event or action that is regarded as an example or guide for similar circumstances.",
    keyConcepts: [
      { keyword: "earlier", matchTerms: ["earlier", "previous", "prior", "past", "former", "first", "original", "before", "historical", "existing", "established", "old"], label: "An earlier event or action", hint: "The definition says 'an earlier event or action' -- something that came before." },
      { keyword: "example or guide", matchTerms: ["example", "guide", "model", "template", "standard", "benchmark", "reference", "basis", "framework", "pattern", "norm", "regard", "similar", "future", "follow", "influence"], label: "Regarded as example or guide", hint: "The definition says 'regarded as an example or guide' -- it shapes what comes after." },
    ],
    synonyms: ["example", "model", "standard"],
  },
  {
    word: "comprehensive",
    partOfSpeech: "adjective",
    definition: "Including all or nearly all elements or aspects of something.",
    keyConcepts: [
      { keyword: "all elements", matchTerms: ["all", "every", "complete", "entire", "full", "total", "thorough", "exhaustiv", "extensive", "inclusive", "wide-ranging", "broad", "sweeping", "encompass", "cover", "nothing left out", "nearly all"], label: "Including all or nearly all elements", hint: "The definition says 'including all or nearly all elements' -- leaving nothing out." },
    ],
    synonyms: ["complete", "thorough", "exhaustive"],
  },
  {
    word: "deviate",
    partOfSpeech: "verb",
    definition: "To depart from an established course or accepted standard.",
    keyConcepts: [
      { keyword: "depart from", matchTerms: ["depart", "stray", "diverge", "veer", "wander", "differ", "go off", "turn away", "move away", "drift", "divert", "break from", "leave"], label: "Depart from", hint: "The definition says 'depart from' -- moving away from where you were headed." },
      { keyword: "established course", matchTerms: ["established", "course", "standard", "norm", "path", "plan", "route", "expected", "convention", "tradition", "rule", "usual", "normal", "pattern", "accepted", "prescribed", "protocol"], label: "An established course or standard", hint: "The definition says 'an established course or accepted standard' -- something already set." },
    ],
    synonyms: ["diverge", "stray", "veer"],
  },
  {
    word: "prevalent",
    partOfSpeech: "adjective",
    definition: "Widespread in a particular area or at a particular time.",
    keyConcepts: [
      { keyword: "widespread", matchTerms: ["widespread", "common", "frequent", "pervasive", "extensive", "rampant", "dominant", "prevailing", "abundant", "numerous", "popular", "everywhere", "endemic", "established", "usual", "typical", "prevalent"], label: "Widespread", hint: "The definition says 'widespread' -- occurring commonly across a population or area." },
    ],
    synonyms: ["widespread", "common", "pervasive"],
  },
  {
    word: "diligent",
    partOfSpeech: "adjective",
    definition: "Having or showing care and conscientiousness in one's work or duties.",
    keyConcepts: [
      { keyword: "careful", matchTerms: ["care", "careful", "conscientiou", "attentiv", "thorough", "meticulous", "painstaking", "dedicated", "committed", "focused", "rigorous", "precise"], label: "Careful and conscientious", hint: "The definition says 'care and conscientiousness' -- diligent work is done with attention." },
      { keyword: "work", matchTerms: ["work", "duty", "duties", "task", "job", "effort", "labor", "labour", "responsibilit", "assignment", "obligation", "role", "profession", "occupation"], label: "In one's work or duties", hint: "The definition says 'in one's work or duties' -- applied to responsibilities." },
    ],
    synonyms: ["hardworking", "industrious", "conscientious"],
  },
  {
    word: "ambiguity",
    partOfSpeech: "noun",
    definition: "The quality of being open to more than one interpretation; inexactness.",
    keyConcepts: [
      { keyword: "more than one interpretation", matchTerms: ["more than one", "multiple", "several", "different", "various", "many", "interpretation", "meaning", "reading", "understanding", "sense"], label: "Open to more than one interpretation", hint: "The definition says 'open to more than one interpretation' -- multiple possible meanings." },
      { keyword: "inexactness", matchTerms: ["inexact", "unclear", "uncertain", "vague", "imprecise", "indefinite", "fuzzy", "hazy", "nebulous", "ambiguous", "doubtful", "confused", "confusing"], label: "Inexactness", hint: "The definition says 'inexactness' -- a lack of precision or clarity." },
    ],
    synonyms: ["vagueness", "uncertainty", "inexactness"],
  },
  {
    word: "impede",
    partOfSpeech: "verb",
    definition: "To delay or prevent someone or something by obstructing them.",
    keyConcepts: [
      { keyword: "delay or prevent", matchTerms: ["delay", "prevent", "hinder", "block", "slow", "obstruct", "hamper", "restrict", "inhibit", "interfere", "stall", "hold back", "hold up", "stand in the way", "stop", "thwart", "retard", "curb"], label: "Delay or prevent", hint: "The definition says 'delay or prevent' -- slowing or stopping progress." },
      { keyword: "obstructing", matchTerms: ["obstruct", "block", "barrier", "obstacle", "hurdle", "impediment", "in the way", "stand in", "get in the way", "hamper", "encumber"], label: "By obstructing", hint: "The definition says 'by obstructing' -- creating a barrier or obstacle." },
    ],
    synonyms: ["hinder", "obstruct", "hamper"],
  },
  {
    word: "lucid",
    partOfSpeech: "adjective",
    definition: "Expressed clearly; easy to understand.",
    keyConcepts: [
      { keyword: "clear", matchTerms: ["clear", "clearly", "plain", "simple", "straightforward", "transparent", "intelligib", "comprehensib", "coherent", "articulat", "crisp", "explicit", "unambiguous", "easy to understand", "accessible"], label: "Expressed clearly; easy to understand", hint: "The definition says 'expressed clearly; easy to understand' -- communication without confusion." },
    ],
    synonyms: ["clear", "coherent", "intelligible"],
  },
  {
    word: "disparity",
    partOfSpeech: "noun",
    definition: "A great difference.",
    keyConcepts: [
      { keyword: "great difference", matchTerms: ["difference", "gap", "inequal", "imbalance", "unevenness", "discrepancy", "contrast", "divide", "gulf", "chasm", "mismatch", "variation", "divergen", "asymmetr", "unequal", "great", "large", "significant", "wide", "vast", "substantial"], label: "A great difference", hint: "The definition says 'a great difference' -- a notably large gap between things." },
    ],
    synonyms: ["inequality", "gap", "discrepancy"],
  },
  {
    word: "facilitate",
    partOfSpeech: "verb",
    definition: "To make an action or process easy or easier.",
    keyConcepts: [
      { keyword: "make easy", matchTerms: ["easy", "easier", "simplif", "smooth", "help", "assist", "aid", "enable", "support", "promote", "expedite", "streamline", "hasten", "acceler", "advance", "further", "encourag"], label: "Make easy or easier", hint: "The definition says 'make...easy or easier' -- removing obstacles to make things go smoothly." },
    ],
    synonyms: ["enable", "assist", "ease"],
  },
  {
    word: "skeptical",
    partOfSpeech: "adjective",
    definition: "Not easily convinced; having doubts or reservations.",
    keyConcepts: [
      { keyword: "not easily convinced", matchTerms: ["not easily convinced", "unconvinced", "doubt", "question", "uncertain", "hesitant", "wary", "suspicious", "incredulous", "disbeliev", "reservation", "cautious", "mistrustful", "leery"], label: "Not easily convinced; having doubts", hint: "The definition says 'not easily convinced; having doubts' -- requiring evidence before believing." },
    ],
    synonyms: ["doubtful", "dubious", "questioning"],
  },
  {
    word: "erratic",
    partOfSpeech: "adjective",
    definition: "Not even or regular in pattern or movement; unpredictable.",
    keyConcepts: [
      { keyword: "not regular", matchTerms: ["not regular", "irregular", "inconsistent", "uneven", "variable", "changeable", "unsteady", "unstable", "erratic", "sporadic", "fitful", "random", "chaotic"], label: "Not regular in pattern", hint: "The definition says 'not even or regular in pattern' -- lacking consistency." },
      { keyword: "unpredictable", matchTerms: ["unpredictab", "uncertain", "unreliab", "capricious", "volatile", "wild", "wayward", "fickle", "haphazard", "aimless"], label: "Unpredictable", hint: "The definition says 'unpredictable' -- impossible to foresee." },
    ],
    synonyms: ["unpredictable", "inconsistent", "irregular"],
  },
  {
    word: "empathize",
    partOfSpeech: "verb",
    definition: "To understand and share the feelings of another.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "comprehend", "recogniz", "perceiv", "appreciat", "grasp", "sense", "aware", "identify with", "relate to", "see"], label: "Understand", hint: "The definition says 'understand' -- cognitively grasping someone's experience." },
      { keyword: "share feelings", matchTerms: ["share", "feel", "feeling", "emotion", "experience", "connect", "resonate", "sympathiz", "compassion", "moved", "touch", "care", "another", "other", "someone"], label: "Share the feelings of another", hint: "The definition says 'share the feelings of another' -- feeling with them, not just knowing." },
    ],
    synonyms: ["relate", "sympathize", "connect"],
  },
  {
    word: "substantiate",
    partOfSpeech: "verb",
    definition: "To provide evidence to support or prove the truth of something.",
    keyConcepts: [
      { keyword: "provide evidence", matchTerms: ["evidence", "proof", "support", "document", "demonstrat", "show", "verify", "confirm", "back up", "validate", "authenticate", "establish", "justify", "corroborat"], label: "Provide evidence", hint: "The definition says 'provide evidence to support' -- offering proof." },
      { keyword: "prove truth", matchTerms: ["prove", "truth", "true", "fact", "real", "actual", "certain", "definite", "verif", "confirm", "something", "claim", "argument", "assertion"], label: "Prove the truth of something", hint: "The definition says 'prove the truth of something' -- establishing that it's real or valid." },
    ],
    synonyms: ["verify", "confirm", "prove"],
  },
  {
    word: "mundane",
    partOfSpeech: "adjective",
    definition: "Lacking interest or excitement; dull.",
    keyConcepts: [
      { keyword: "dull", matchTerms: ["dull", "boring", "uninteresting", "tedious", "monotonous", "humdrum", "banal", "ordinary", "routine", "everyday", "commonplace", "prosaic", "uninspiring", "unexciting", "tiresome", "bland", "unremarkable", "plain"], label: "Lacking interest or excitement; dull", hint: "The definition says 'lacking interest or excitement; dull' -- nothing stimulating or remarkable." },
    ],
    synonyms: ["boring", "dull", "tedious"],
  },
  {
    word: "allocate",
    partOfSpeech: "verb",
    definition: "To distribute resources or duties for a particular purpose.",
    keyConcepts: [
      { keyword: "distribute", matchTerms: ["distribute", "assign", "apportion", "divide", "allot", "dedicate", "devote", "designat", "earmark", "set aside", "reserve", "give", "share", "portion", "budget", "direct"], label: "Distribute or assign", hint: "The definition says 'distribute' -- dividing and assigning." },
      { keyword: "purpose", matchTerms: ["purpose", "goal", "objective", "use", "function", "reason", "end", "task", "duty", "role", "project", "particular", "specific", "resource", "resources", "fund", "money", "time", "effort"], label: "For a particular purpose", hint: "The definition says 'for a particular purpose' -- directed toward a specific goal." },
    ],
    synonyms: ["assign", "distribute", "apportion"],
  },
  {
    word: "discrepancy",
    partOfSpeech: "noun",
    definition: "A lack of compatibility or similarity between two or more facts.",
    keyConcepts: [
      { keyword: "lack of compatibility", matchTerms: ["lack", "difference", "mismatch", "inconsisten", "contradict", "conflict", "disagreement", "incompatib", "divergen", "gap", "disparity", "variation", "irregularity", "doesn't match", "don't match"], label: "Lack of compatibility", hint: "The definition says 'a lack of compatibility or similarity' -- things that should match but don't." },
      { keyword: "between facts", matchTerms: ["fact", "figure", "number", "account", "record", "report", "version", "statement", "data", "result", "finding", "detail", "two", "more", "between", "among", "compare"], label: "Between two or more facts", hint: "The definition says 'between two or more facts' -- a mismatch when comparing things." },
    ],
    synonyms: ["inconsistency", "difference", "mismatch"],
  },
  {
    word: "benign",
    partOfSpeech: "adjective",
    definition: "Gentle and kindly; not harmful in effect.",
    keyConcepts: [
      { keyword: "gentle", matchTerms: ["gentle", "kind", "kindly", "mild", "friendly", "warm", "good-natured", "benevolent", "compassionat", "tender", "pleasant", "agreeable"], label: "Gentle and kindly", hint: "The definition says 'gentle and kindly' -- a soft, non-threatening character." },
      { keyword: "not harmful", matchTerms: ["not harmful", "harmless", "innocent", "safe", "inoffensive", "innocuous", "nonthreatening", "no danger", "not dangerous", "unharm"], label: "Not harmful", hint: "The definition says 'not harmful in effect' -- poses no threat." },
    ],
    synonyms: ["gentle", "harmless", "kindly"],
  },
  {
    word: "denounce",
    partOfSpeech: "verb",
    definition: "To publicly declare to be wrong or evil.",
    keyConcepts: [
      { keyword: "publicly declare", matchTerms: ["public", "declare", "announce", "proclaim", "state", "openly", "vocal", "outspoken", "condemn", "criticiz", "censure", "attack", "blast", "slam", "rebuke"], label: "Publicly declare", hint: "The definition says 'publicly declare' -- not private disapproval but open condemnation." },
      { keyword: "wrong or evil", matchTerms: ["wrong", "evil", "immoral", "unjust", "unethical", "bad", "corrupt", "wicked", "reprehen", "shameful", "disgraceful", "outrageous", "unacceptab", "criminal", "villain"], label: "Wrong or evil", hint: "The definition says 'to be wrong or evil' -- the target is judged as morally bad." },
    ],
    synonyms: ["condemn", "criticize", "censure"],
  },
  {
    word: "hinder",
    partOfSpeech: "verb",
    definition: "To create difficulties for someone or something, resulting in delay or obstruction.",
    keyConcepts: [
      { keyword: "create difficulties", matchTerms: ["difficult", "obstacle", "barrier", "block", "impede", "hamper", "obstruct", "slow", "restrict", "limit", "prevent", "interfere", "complicate", "burden", "encumber"], label: "Create difficulties", hint: "The definition says 'create difficulties' -- putting obstacles in the way." },
      { keyword: "delay or obstruction", matchTerms: ["delay", "obstruct", "slow", "hold back", "hold up", "set back", "stall", "retard", "inhibit", "frustrat", "thwart", "hinder", "disrupt", "interrupt", "impair"], label: "Resulting in delay or obstruction", hint: "The definition says 'resulting in delay or obstruction' -- progress is slowed or stopped." },
    ],
    synonyms: ["impede", "obstruct", "hamper"],
  },
  {
    word: "gratitude",
    partOfSpeech: "noun",
    definition: "The quality of being thankful; readiness to show appreciation for and to return kindness.",
    keyConcepts: [
      { keyword: "thankful", matchTerms: ["thankful", "thank", "grateful", "appreciat", "gratitude", "acknowledg", "recogniz", "indebted", "oblig"], label: "Being thankful", hint: "The definition says 'being thankful' -- feeling gratitude for what you've received." },
      { keyword: "return kindness", matchTerms: ["return", "kindness", "reciprocat", "give back", "repay", "show", "express", "demonstrat", "favor", "favour", "generosity", "goodwill", "gesture", "readiness"], label: "Readiness to return kindness", hint: "The definition says 'readiness to show appreciation for and to return kindness' -- not just feeling it, but acting." },
    ],
    synonyms: ["thankfulness", "appreciation", "gratefulness"],
  },
  {
    word: "ample",
    partOfSpeech: "adjective",
    definition: "Enough or more than enough; plentiful.",
    keyConcepts: [
      { keyword: "enough", matchTerms: ["enough", "sufficient", "adequate", "plentiful", "plenty", "abundant", "generous", "copious", "bountiful", "considerable", "substantial", "more than enough", "ample", "rich", "lavish", "profuse"], label: "Enough or more than enough; plentiful", hint: "The definition says 'enough or more than enough; plentiful' -- there is no shortage." },
    ],
    synonyms: ["plentiful", "abundant", "sufficient"],
  },
  {
    word: "reconcile",
    partOfSpeech: "verb",
    definition: "To restore friendly relations between; to make compatible or consistent.",
    keyConcepts: [
      { keyword: "restore relations", matchTerms: ["restore", "friendly", "relation", "reunite", "mend", "repair", "heal", "resolve", "settle", "make peace", "come together", "harmony", "reconcil", "forgive", "bridge", "rapprochement"], label: "Restore friendly relations", hint: "The definition says 'restore friendly relations between' -- bringing people or things back together." },
      { keyword: "make compatible", matchTerms: ["compatible", "consistent", "harmoniz", "align", "match", "fit", "agree", "conform", "balance", "square", "adjust", "accord", "unif"], label: "Make compatible or consistent", hint: "The definition says 'make compatible or consistent' -- resolving contradictions." },
    ],
    synonyms: ["resolve", "settle", "harmonize"],
  },
  {
    word: "futile",
    partOfSpeech: "adjective",
    definition: "Incapable of producing any useful result; pointless.",
    keyConcepts: [
      { keyword: "no useful result", matchTerms: ["no result", "useless", "pointless", "fruitless", "vain", "hopeless", "ineffective", "unsuccessful", "unproductive", "wasted", "futile", "in vain", "to no avail", "purposeless", "doomed", "impossible"], label: "Incapable of producing useful result; pointless", hint: "The definition says 'incapable of producing any useful result; pointless' -- effort that achieves nothing." },
    ],
    synonyms: ["pointless", "useless", "fruitless"],
  },
  {
    word: "conjecture",
    partOfSpeech: "noun",
    definition: "An opinion or conclusion formed on the basis of incomplete information.",
    keyConcepts: [
      { keyword: "opinion", matchTerms: ["opinion", "conclusion", "guess", "speculation", "supposition", "theory", "assumption", "belief", "inference", "estimate", "prediction", "surmise", "hunch", "idea"], label: "An opinion or conclusion", hint: "The definition says 'an opinion or conclusion' -- a judgment, not a fact." },
      { keyword: "incomplete information", matchTerms: ["incomplete", "limited", "insufficient", "partial", "lacking", "inadequate", "without full", "uncertain", "unverified", "unproven", "no evidence", "little evidence", "basis", "information"], label: "Based on incomplete information", hint: "The definition says 'on the basis of incomplete information' -- formed without full evidence." },
    ],
    synonyms: ["speculation", "guess", "supposition"],
  },
  {
    word: "negligible",
    partOfSpeech: "adjective",
    definition: "So small or unimportant as to be not worth considering; insignificant.",
    keyConcepts: [
      { keyword: "insignificant", matchTerms: ["small", "tiny", "minor", "trivial", "insignifican", "negligib", "inconsequen", "unimportant", "not worth", "minimal", "marginal", "meager", "trifling", "paltry", "scant", "nominal", "token", "insubstantial"], label: "So small as to be insignificant", hint: "The definition says 'so small or unimportant as to be not worth considering' -- barely registers." },
    ],
    synonyms: ["insignificant", "trivial", "minimal"],
  },
  {
    word: "impartial",
    partOfSpeech: "adjective",
    definition: "Treating all rivals or disputants equally; fair and just.",
    keyConcepts: [
      { keyword: "equally", matchTerms: ["equal", "fair", "just", "balanced", "neutral", "unbiased", "objective", "even-handed", "impartial", "disinterested", "non-partisan", "without favor", "without favour", "without prejudice", "equitab"], label: "Treating all equally; fair and just", hint: "The definition says 'treating all rivals or disputants equally; fair and just' -- no favoritism." },
    ],
    synonyms: ["unbiased", "neutral", "fair"],
  },
  {
    word: "clandestine",
    partOfSpeech: "adjective",
    definition: "Kept secret or done secretively, especially because illicit.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "hidden", "concealed", "covert", "undercover", "stealthy", "surreptitious", "furtive", "discreet", "private", "underground", "behind closed doors", "hush", "secretive"], label: "Secret or secretive", hint: "The definition says 'kept secret or done secretively' -- deliberately hidden from view." },
      { keyword: "illicit", matchTerms: ["illicit", "illegal", "unlawful", "forbidden", "prohibited", "unauthorized", "unauthorised", "improper", "wrong", "shady", "dubious", "questionab", "suspicious"], label: "Especially because illicit", hint: "The definition says 'especially because illicit' -- the secrecy often has a wrongful reason." },
    ],
    synonyms: ["secret", "covert", "surreptitious"],
  },
  {
    word: "extrapolate",
    partOfSpeech: "verb",
    definition: "To extend the application of a method or conclusion to an unknown situation by assuming existing trends will continue.",
    keyConcepts: [
      { keyword: "extend", matchTerms: ["extend", "project", "predict", "forecast", "estimat", "infer", "generaliz", "apply", "deduce", "expand", "reach beyond", "go beyond", "broaden", "transfer"], label: "Extend to the unknown", hint: "The definition says 'extend the application...to an unknown situation' -- projecting beyond known data." },
      { keyword: "existing trends", matchTerms: ["existing", "trend", "pattern", "data", "known", "current", "observed", "established", "continu", "assum", "basis", "evidence", "past", "present", "information"], label: "Assuming existing trends continue", hint: "The definition says 'assuming existing trends will continue' -- building on what you already know." },
    ],
    synonyms: ["project", "predict", "infer"],
  },
  {
    word: "apathy",
    partOfSpeech: "noun",
    definition: "Lack of interest, enthusiasm, or concern.",
    keyConcepts: [
      { keyword: "lack of interest", matchTerms: ["lack", "absence", "without", "no", "indifferen", "uninterested", "disinterested", "unconcerned", "unmoved", "detached", "passive", "unenthusiastic", "apathetic", "listless", "lethargic", "numb", "uncaring"], label: "Lack of interest, enthusiasm, or concern", hint: "The definition says 'lack of interest, enthusiasm, or concern' -- an emotional void." },
    ],
    synonyms: ["indifference", "disinterest", "lethargy"],
  },
  {
    word: "authentic",
    partOfSpeech: "adjective",
    definition: "Of undisputed origin; genuine.",
    keyConcepts: [
      { keyword: "genuine", matchTerms: ["genuine", "real", "true", "actual", "original", "legitimate", "bona fide", "veritable", "undisputed", "certified", "verified", "honest", "sincere", "trustworthy", "reliable", "not fake", "not counterfeit", "authentic"], label: "Of undisputed origin; genuine", hint: "The definition says 'of undisputed origin; genuine' -- truly what it claims to be." },
    ],
    synonyms: ["genuine", "real", "legitimate"],
  },
  {
    word: "brevity",
    partOfSpeech: "noun",
    definition: "Concise and exact use of words in writing or speech.",
    keyConcepts: [
      { keyword: "concise", matchTerms: ["concise", "brief", "short", "succinct", "terse", "pithy", "compact", "condensed", "economical", "spare", "few words", "laconic"], label: "Concise and exact", hint: "The definition says 'concise and exact use of words' -- precision with economy." },
      { keyword: "words", matchTerms: ["word", "writing", "speech", "language", "expression", "communicat", "text", "prose", "verbal", "writ", "speak", "said", "spoken"], label: "In writing or speech", hint: "The definition says 'in writing or speech' -- applied to how we use language." },
    ],
    synonyms: ["conciseness", "succinctness", "terseness"],
  },
  {
    word: "circumvent",
    partOfSpeech: "verb",
    definition: "To find a way around an obstacle.",
    keyConcepts: [
      { keyword: "find a way around", matchTerms: ["around", "avoid", "bypass", "evade", "sidestep", "skirt", "dodge", "elude", "get around", "work around", "go around", "find a way", "overcome", "outmaneuv", "outsmart", "circumvent"], label: "Find a way around", hint: "The definition says 'find a way around' -- overcoming by going around, not through." },
      { keyword: "obstacle", matchTerms: ["obstacle", "barrier", "restriction", "rule", "law", "regulation", "limitation", "constraint", "block", "problem", "challenge", "hurdle", "difficulty", "prohibition"], label: "An obstacle", hint: "The definition says 'an obstacle' -- something standing in the way." },
    ],
    synonyms: ["bypass", "avoid", "evade"],
  },
  {
    word: "dormant",
    partOfSpeech: "adjective",
    definition: "Having normal physical functions suspended or slowed down for a period of time; in or as if in a deep sleep.",
    keyConcepts: [
      { keyword: "suspended", matchTerms: ["suspend", "slow", "inactive", "idle", "still", "quiet", "latent", "rest", "sleep", "hibernat", "dormant", "inert", "quiescent", "stagnant", "motionless", "paused", "stopped"], label: "Functions suspended or slowed", hint: "The definition says 'functions suspended or slowed down' -- alive but not active." },
      { keyword: "for a period", matchTerms: ["period", "time", "temporary", "season", "while", "interval", "phase", "stage", "until", "awaiting", "eventually", "deep sleep", "as if in"], label: "For a period of time", hint: "The definition says 'for a period of time' -- the dormancy is temporary, not permanent." },
    ],
    synonyms: ["inactive", "latent", "sleeping"],
  },
  {
    word: "refute",
    partOfSpeech: "verb",
    definition: "To prove that a statement or theory is wrong or false.",
    keyConcepts: [
      { keyword: "prove wrong", matchTerms: ["prove", "demonstrat", "show", "establish", "confirm", "evidence", "disprove", "debunk", "invalidat", "discredit", "overturn", "contradict", "counter", "challenge", "rebut", "refute", "deny"], label: "Prove wrong or false", hint: "The definition says 'prove that...is wrong or false' -- not just disagreeing, but demonstrating error." },
      { keyword: "statement or theory", matchTerms: ["statement", "theory", "claim", "argument", "assertion", "idea", "proposition", "hypothesis", "allegation", "belief", "opinion", "position", "contention", "point"], label: "A statement or theory", hint: "The definition says 'a statement or theory' -- a specific claim being challenged." },
    ],
    synonyms: ["disprove", "rebut", "debunk"],
  },
  {
    word: "prolific",
    partOfSpeech: "adjective",
    definition: "Producing a great quantity of something; abundantly productive.",
    keyConcepts: [
      { keyword: "great quantity", matchTerms: ["great", "large", "much", "many", "lot", "quantity", "volume", "amount", "number", "prolific", "abundan", "copious", "plentiful", "profuse", "vast", "extensive", "enormous", "immense", "considerable"], label: "Producing a great quantity", hint: "The definition says 'producing a great quantity' -- output is notably large." },
      { keyword: "productive", matchTerms: ["produc", "creat", "generat", "output", "yield", "work", "make", "write", "publish", "active", "busy", "industrious", "fertile", "fruitful", "inventive"], label: "Abundantly productive", hint: "The definition says 'abundantly productive' -- actively creating or producing a lot." },
    ],
    synonyms: ["productive", "abundant", "fertile"],
  },
  {
    word: "succinct",
    partOfSpeech: "adjective",
    definition: "Briefly and clearly expressed.",
    keyConcepts: [
      { keyword: "briefly", matchTerms: ["brief", "short", "concise", "compact", "terse", "pithy", "economical", "few words", "to the point", "condensed", "minimal", "spare", "lean"], label: "Briefly expressed", hint: "The definition says 'briefly' -- using few words." },
      { keyword: "clearly", matchTerms: ["clear", "precise", "direct", "straightforward", "plain", "simple", "intelligib", "lucid", "coherent", "articulat", "well-expressed", "effective", "sharp"], label: "Clearly expressed", hint: "The definition says 'clearly expressed' -- not just short but also easy to understand." },
    ],
    synonyms: ["concise", "terse", "pithy"],
  },
  {
    word: "coerce",
    partOfSpeech: "verb",
    definition: "To persuade an unwilling person to do something by using force or threats.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuad", "compel", "force", "pressure", "make", "push", "drive", "intimidat", "bully", "strong-arm", "coerce", "manipulat"], label: "Persuade someone unwilling", hint: "The definition says 'persuade an unwilling person' -- overriding their resistance." },
      { keyword: "force or threats", matchTerms: ["force", "threat", "intimidat", "violence", "power", "coercion", "duress", "blackmail", "punishment", "harm", "consequence", "fear", "pressure"], label: "By force or threats", hint: "The definition says 'by using force or threats' -- not persuasion through reason." },
    ],
    synonyms: ["compel", "force", "pressure"],
  },
  {
    word: "auspicious",
    partOfSpeech: "adjective",
    definition: "Conducive to success; favorable.",
    keyConcepts: [
      { keyword: "conducive to success", matchTerms: ["success", "favorab", "favourab", "promising", "encouraging", "hopeful", "optimistic", "positive", "propitious", "fortunate", "lucky", "good", "bright", "conducive", "advantageous", "beneficial"], label: "Conducive to success; favorable", hint: "The definition says 'conducive to success; favorable' -- conditions that point toward a good outcome." },
    ],
    synonyms: ["favorable", "promising", "propitious"],
  },
  {
    word: "lament",
    partOfSpeech: "verb",
    definition: "To express passionate grief or sorrow about something.",
    keyConcepts: [
      { keyword: "express grief", matchTerms: ["express", "voice", "cry", "mourn", "grieve", "wail", "weep", "bewail", "sorrow", "sadness", "regret", "despair", "anguish", "heartbreak", "loss", "pain", "suffering", "passionate"], label: "Express passionate grief or sorrow", hint: "The definition says 'express passionate grief or sorrow' -- outward expression of deep sadness." },
    ],
    synonyms: ["mourn", "grieve", "bewail"],
  },
  {
    word: "curtail",
    partOfSpeech: "verb",
    definition: "To reduce in extent or quantity; impose a restriction on.",
    keyConcepts: [
      { keyword: "reduce", matchTerms: ["reduce", "cut", "decrease", "lessen", "limit", "shorten", "trim", "diminish", "restrict", "constrain", "curb", "lower", "scale back", "pare", "truncat"], label: "Reduce in extent or quantity", hint: "The definition says 'reduce in extent or quantity' -- making something smaller or shorter." },
    ],
    synonyms: ["reduce", "restrict", "limit"],
  },
  {
    word: "abysmal",
    partOfSpeech: "adjective",
    definition: "Extremely bad; appalling.",
    keyConcepts: [
      { keyword: "extremely bad", matchTerms: ["extremely bad", "terrible", "awful", "dreadful", "appalling", "atrocious", "horrible", "horrendous", "deplorable", "dismal", "wretched", "abysmal", "shocking", "disgraceful", "pathetic", "dire", "miserable"], label: "Extremely bad; appalling", hint: "The definition says 'extremely bad; appalling' -- not just bad but shockingly so." },
    ],
    synonyms: ["terrible", "awful", "dreadful"],
  },
  {
    word: "elucidate",
    partOfSpeech: "verb",
    definition: "To make something clear; to explain.",
    keyConcepts: [
      { keyword: "make clear", matchTerms: ["clear", "clarif", "explain", "illuminate", "shed light", "spell out", "break down", "simplif", "demystif", "interpret", "define", "describe", "articulat", "expound", "illustrat"], label: "Make clear; explain", hint: "The definition says 'make something clear; explain' -- removing confusion." },
    ],
    synonyms: ["clarify", "explain", "illuminate"],
  },
  {
    word: "rhetoric",
    partOfSpeech: "noun",
    definition: "The art of effective or persuasive speaking or writing.",
    keyConcepts: [
      { keyword: "persuasive", matchTerms: ["persuasi", "effective", "compelling", "convincing", "powerful", "influential", "eloquen", "artful", "skillful", "skilful", "crafted", "art", "technique", "mastery"], label: "Effective or persuasive", hint: "The definition says 'effective or persuasive' -- language designed to have impact." },
      { keyword: "speaking or writing", matchTerms: ["speak", "speech", "writ", "language", "communicat", "word", "verbal", "orat", "discourse", "express", "argument", "debate", "present"], label: "Speaking or writing", hint: "The definition says 'speaking or writing' -- applies to verbal and written forms." },
    ],
    synonyms: ["oratory", "eloquence", "persuasion"],
  },
  {
    word: "dogmatic",
    partOfSpeech: "adjective",
    definition: "Inclined to lay down principles as incontrovertibly true, without consideration of evidence or the opinions of others.",
    keyConcepts: [
      { keyword: "principles as true", matchTerms: ["principle", "true", "truth", "certain", "absolute", "definite", "authoritat", "assert", "insist", "declar", "pronounce", "dictate", "rigid", "inflexib", "unbending", "uncompromis", "fixed", "firm"], label: "Laying down principles as true", hint: "The definition says 'lay down principles as incontrovertibly true' -- presenting beliefs as undeniable fact." },
      { keyword: "without consideration", matchTerms: ["without", "no", "ignor", "dismiss", "disregard", "reject", "consideration", "evidence", "opinion", "others", "alternative", "challenge", "question", "debate", "discussion", "narrow-mind", "closed-mind", "intolerant", "arrogant"], label: "Without considering evidence or others", hint: "The definition says 'without consideration of evidence or the opinions of others' -- refusing to hear other views." },
    ],
    synonyms: ["opinionated", "rigid", "doctrinaire"],
  },
  {
    word: "camaraderie",
    partOfSpeech: "noun",
    definition: "Mutual trust and friendship among people who spend a lot of time together.",
    keyConcepts: [
      { keyword: "trust and friendship", matchTerms: ["trust", "friendship", "bond", "rapport", "fellowship", "solidarity", "togetherness", "companionship", "warmth", "closeness", "affection", "loyalty", "mutual", "shared"], label: "Mutual trust and friendship", hint: "The definition says 'mutual trust and friendship' -- a warm, shared bond." },
      { keyword: "time together", matchTerms: ["time together", "spend time", "group", "team", "colleague", "peer", "comrade", "partner", "community", "unit", "squad", "crew", "gang", "circle", "lot of time"], label: "Among people who spend time together", hint: "The definition says 'among people who spend a lot of time together' -- built through shared experience." },
    ],
    synonyms: ["fellowship", "solidarity", "companionship"],
  },
  {
    word: "placid",
    partOfSpeech: "adjective",
    definition: "Not easily upset or excited; calm and peaceful.",
    keyConcepts: [
      { keyword: "calm", matchTerms: ["calm", "peaceful", "tranquil", "serene", "quiet", "still", "relaxed", "composed", "unruffled", "even-tempered", "gentle", "mild", "placid", "easygoing", "untroubled", "undisturbed", "not easily upset", "not easily excited"], label: "Calm and peaceful", hint: "The definition says 'not easily upset or excited; calm and peaceful' -- a consistently even temperament." },
    ],
    synonyms: ["calm", "serene", "tranquil"],
  },
  {
    word: "dispel",
    partOfSpeech: "verb",
    definition: "To make a doubt, feeling, or belief disappear.",
    keyConcepts: [
      { keyword: "make disappear", matchTerms: ["disappear", "remov", "eliminat", "banish", "disperse", "scatter", "drive away", "chase away", "get rid of", "clear", "dissolv", "destroy", "end", "dismiss", "debunk", "quash", "allay", "refute"], label: "Make disappear", hint: "The definition says 'make...disappear' -- causing something to vanish completely." },
      { keyword: "doubt or belief", matchTerms: ["doubt", "feeling", "belief", "fear", "worry", "concern", "anxiety", "myth", "misconception", "illusion", "rumor", "rumour", "suspicion", "notion", "idea", "thought"], label: "A doubt, feeling, or belief", hint: "The definition says 'a doubt, feeling, or belief' -- targeting something intangible in the mind." },
    ],
    synonyms: ["banish", "eliminate", "dismiss"],
  },
  {
    word: "imminent",
    partOfSpeech: "adjective",
    definition: "About to happen.",
    keyConcepts: [
      { keyword: "about to happen", matchTerms: ["about to", "soon", "impending", "approaching", "coming", "near", "forthcoming", "close", "at hand", "upon us", "looming", "on the horizon", "inevitable", "expected", "moment", "any minute", "shortly", "imminent"], label: "About to happen", hint: "The definition says 'about to happen' -- very close in time, essentially now." },
    ],
    synonyms: ["impending", "approaching", "forthcoming"],
  },
  {
    word: "indignant",
    partOfSpeech: "adjective",
    definition: "Feeling or showing anger or annoyance at what is perceived as unfair treatment.",
    keyConcepts: [
      { keyword: "anger", matchTerms: ["anger", "angry", "annoyed", "annoyanc", "outraged", "upset", "furious", "incensed", "irate", "offended", "resentful", "displeas", "indignant"], label: "Feeling anger or annoyance", hint: "The definition says 'feeling or showing anger or annoyance' -- an emotional reaction." },
      { keyword: "unfair treatment", matchTerms: ["unfair", "unjust", "wrong", "treatment", "injustice", "perceived", "disrespect", "insult", "slight", "mistreat", "abuse", "exploitat", "oppression", "discriminat"], label: "At unfair treatment", hint: "The definition says 'at what is perceived as unfair treatment' -- the anger is triggered by injustice." },
    ],
    synonyms: ["outraged", "offended", "resentful"],
  },
  {
    word: "coalesce",
    partOfSpeech: "verb",
    definition: "To come together to form one mass or whole.",
    keyConcepts: [
      { keyword: "come together", matchTerms: ["come together", "join", "merge", "unite", "combine", "fuse", "blend", "mix", "consolidat", "converge", "integrate", "gather", "assemble"], label: "Come together", hint: "The definition says 'come together' -- separate parts joining." },
      { keyword: "form one whole", matchTerms: ["form", "one", "whole", "mass", "single", "unified", "entity", "unit", "body", "group", "aggregate", "collective", "complete"], label: "Form one mass or whole", hint: "The definition says 'to form one mass or whole' -- the result is a single unified thing." },
    ],
    synonyms: ["merge", "unite", "combine"],
  },
  {
    word: "austere",
    partOfSpeech: "adjective",
    definition: "Severe or strict in manner, attitude, or appearance; having no comforts or luxuries.",
    keyConcepts: [
      { keyword: "severe", matchTerms: ["severe", "strict", "stern", "harsh", "rigid", "forbidding", "serious", "solemn", "grave", "somber", "stark", "bleak", "plain", "spare", "bare", "unadorned", "simple", "minimal"], label: "Severe or strict", hint: "The definition says 'severe or strict in manner' -- no softness or indulgence." },
      { keyword: "no comforts", matchTerms: ["no comfort", "no luxury", "spartan", "ascetic", "frugal", "modest", "humble", "basic", "stripped", "plain", "unembellish", "functional", "utilitarian", "bare-bones"], label: "No comforts or luxuries", hint: "The definition says 'having no comforts or luxuries' -- stripped of excess." },
    ],
    synonyms: ["stern", "spartan", "severe"],
  },
  {
    word: "exonerate",
    partOfSpeech: "verb",
    definition: "To absolve someone from blame for a fault or wrongdoing.",
    keyConcepts: [
      { keyword: "absolve", matchTerms: ["absolv", "clear", "acquit", "vindicate", "exonerat", "pardon", "forgive", "free", "releas", "liberat", "discharg", "dismiss", "let off"], label: "Absolve from blame", hint: "The definition says 'absolve someone from blame' -- lifting the accusation." },
      { keyword: "fault or wrongdoing", matchTerms: ["blame", "fault", "wrongdoing", "accusation", "charge", "crime", "guilt", "responsibilit", "liability", "suspicion", "offense", "offence", "sin", "misdeed", "allegation"], label: "For a fault or wrongdoing", hint: "The definition says 'for a fault or wrongdoing' -- they were accused of something specific." },
    ],
    synonyms: ["absolve", "acquit", "vindicate"],
  },
  {
    word: "morose",
    partOfSpeech: "adjective",
    definition: "Sullen and ill-tempered.",
    keyConcepts: [
      { keyword: "sullen", matchTerms: ["sullen", "gloomy", "glum", "moody", "brooding", "grumpy", "grouchy", "sulky", "melancholy", "sad", "depressed", "somber", "dark", "dismal", "miserable", "unhappy", "ill-tempered", "bad-tempered", "sour", "dour", "churlish"], label: "Sullen and ill-tempered", hint: "The definition says 'sullen and ill-tempered' -- gloomy and not pleasant to be around." },
    ],
    synonyms: ["gloomy", "sullen", "grumpy"],
  },
  {
    word: "anomaly",
    partOfSpeech: "noun",
    definition: "Something that deviates from what is standard, normal, or expected.",
    keyConcepts: [
      { keyword: "deviates", matchTerms: ["deviat", "differ", "depart", "diverge", "irregular", "unusual", "abnormal", "atypical", "exception", "outlier", "oddity", "peculiar", "strange", "unexpected", "surprising", "rare", "uncommon", "anomal", "outside", "beyond", "not normal", "not standard", "not typical", "out of", "expected", "norm", "standard"], label: "Deviates from standard or normal", hint: "The definition says 'deviates from what is standard, normal, or expected' -- it doesn't fit the pattern." },
    ],
    synonyms: ["irregularity", "exception", "oddity"],
  },
  {
    word: "embellish",
    partOfSpeech: "verb",
    definition: "To make something more attractive by the addition of decorative details or features.",
    keyConcepts: [
      { keyword: "more attractive", matchTerms: ["attractive", "beautiful", "better", "prettier", "nicer", "enhance", "improve", "adorn", "beautif", "enrich", "ornament", "fancy", "elaborate", "dress up"], label: "Make more attractive", hint: "The definition says 'make something more attractive' -- improving appearance or appeal." },
      { keyword: "decorative details", matchTerms: ["decorat", "detail", "feature", "addition", "ornament", "embellishment", "flourish", "frill", "trim", "accessory", "accent", "touch", "element", "embroider", "exaggerat"], label: "By adding decorative details", hint: "The definition says 'by the addition of decorative details or features' -- adding extras for beauty." },
    ],
    synonyms: ["adorn", "decorate", "ornament"],
  },
  {
    word: "coherent",
    partOfSpeech: "adjective",
    definition: "Logical and consistent; forming a unified whole.",
    keyConcepts: [
      { keyword: "logical", matchTerms: ["logical", "consistent", "rational", "sensible", "reasoned", "sound", "clear", "intelligib", "comprehensib", "organized", "organised", "structured", "systematic", "orderly"], label: "Logical and consistent", hint: "The definition says 'logical and consistent' -- it makes sense and holds together." },
      { keyword: "unified whole", matchTerms: ["unified", "whole", "connected", "integrated", "cohesive", "together", "continuous", "flowing", "seamless", "complete", "united", "harmonious"], label: "Forming a unified whole", hint: "The definition says 'forming a unified whole' -- all the parts fit together." },
    ],
    synonyms: ["logical", "consistent", "cohesive"],
  },
  {
    word: "dubious",
    partOfSpeech: "adjective",
    definition: "Hesitating or doubting; not to be relied upon.",
    keyConcepts: [
      { keyword: "doubting", matchTerms: ["doubt", "hesitat", "uncertain", "unsure", "skeptic", "suspicious", "questionab", "wary", "mistrustful", "incredulous", "unconvinced", "dubious"], label: "Hesitating or doubting", hint: "The definition says 'hesitating or doubting' -- lacking confidence in something." },
      { keyword: "not reliable", matchTerms: ["not reliable", "unreliab", "untrustworth", "suspect", "questionab", "shady", "fishy", "dodgy", "iffy", "uncertain", "risky", "precarious"], label: "Not to be relied upon", hint: "The definition says 'not to be relied upon' -- you shouldn't trust it." },
    ],
    synonyms: ["doubtful", "questionable", "suspicious"],
  },
  {
    word: "perpetuate",
    partOfSpeech: "verb",
    definition: "To make something continue indefinitely.",
    keyConcepts: [
      { keyword: "make continue", matchTerms: ["continue", "maintain", "sustain", "preserve", "keep", "extend", "prolong", "carry on", "uphold", "perpetuat", "ensure", "keep alive", "keep going"], label: "Make continue", hint: "The definition says 'make something continue' -- causing persistence." },
      { keyword: "indefinitely", matchTerms: ["indefinit", "forever", "endless", "permanent", "ongoing", "lasting", "enduring", "unending", "without end", "perpetual", "eternal", "always", "continuously"], label: "Indefinitely", hint: "The definition says 'indefinitely' -- not just extending but making it go on and on." },
    ],
    synonyms: ["maintain", "sustain", "preserve"],
  },
  {
    word: "transient",
    partOfSpeech: "adjective",
    definition: "Lasting only for a short time; impermanent.",
    keyConcepts: [
      { keyword: "short time", matchTerms: ["short", "brief", "temporary", "fleeting", "passing", "momentary", "ephemeral", "impermanent", "transient", "quick", "short-lived", "limited", "fading", "disappearing"], label: "Lasting only a short time; impermanent", hint: "The definition says 'lasting only for a short time; impermanent' -- here today, gone tomorrow." },
    ],
    synonyms: ["temporary", "fleeting", "ephemeral"],
  },
  {
    word: "rigorous",
    partOfSpeech: "adjective",
    definition: "Extremely thorough and careful.",
    keyConcepts: [
      { keyword: "thorough", matchTerms: ["thorough", "careful", "meticulous", "exhaustiv", "painstaking", "detailed", "comprehensive", "precise", "exact", "strict", "demanding", "rigorous", "systematic", "diligent", "conscientious", "scrupulous", "intense", "extreme"], label: "Extremely thorough and careful", hint: "The definition says 'extremely thorough and careful' -- leaving nothing to chance." },
    ],
    synonyms: ["thorough", "meticulous", "strict"],
  },
  {
    word: "convoluted",
    partOfSpeech: "adjective",
    definition: "Extremely complex and difficult to follow.",
    keyConcepts: [
      { keyword: "complex", matchTerms: ["complex", "complicated", "intricate", "elaborate", "tangled", "twisted", "winding", "labyrinth", "convoluted", "confusing", "perplexing", "bewildering", "dense", "opaque", "impenetrab"], label: "Extremely complex", hint: "The definition says 'extremely complex' -- overwhelmingly complicated." },
      { keyword: "difficult to follow", matchTerms: ["difficult", "hard", "follow", "understand", "comprehend", "grasp", "make sense", "navigate", "parse", "decipher", "unclear", "incomprehensib", "confusing"], label: "Difficult to follow", hint: "The definition says 'difficult to follow' -- you can't easily track the logic or structure." },
    ],
    synonyms: ["complicated", "intricate", "tangled"],
  },
  {
    word: "precarious",
    partOfSpeech: "adjective",
    definition: "Not securely held or in position; dangerously likely to fall or collapse.",
    keyConcepts: [
      { keyword: "not secure", matchTerms: ["not secure", "insecure", "unstable", "unsteady", "shaky", "wobbly", "uncertain", "risky", "hazardous", "perilous", "dangerous", "vulnerable", "fragile", "delicate", "precarious", "tenuous"], label: "Not securely held", hint: "The definition says 'not securely held or in position' -- a fragile, unstable state." },
      { keyword: "likely to fall", matchTerms: ["fall", "collapse", "fail", "topple", "crumble", "break", "give way", "slip", "danger", "threat", "risk", "disaster", "catastroph", "ruin"], label: "Likely to fall or collapse", hint: "The definition says 'dangerously likely to fall or collapse' -- disaster feels close." },
    ],
    synonyms: ["unstable", "risky", "perilous"],
  },
  {
    word: "repudiate",
    partOfSpeech: "verb",
    definition: "To refuse to accept or be associated with.",
    keyConcepts: [
      { keyword: "refuse to accept", matchTerms: ["refuse", "reject", "deny", "disown", "renounce", "abandon", "disavow", "distance", "repudiat", "turn away", "cast off", "wash hands", "sever", "cut ties", "disclaim", "turn down", "decline"], label: "Refuse to accept or be associated with", hint: "The definition says 'refuse to accept or be associated with' -- a firm rejection." },
    ],
    synonyms: ["reject", "disown", "renounce"],
  },
  {
    word: "apprehensive",
    partOfSpeech: "adjective",
    definition: "Anxious or fearful that something bad or unpleasant will happen.",
    keyConcepts: [
      { keyword: "anxious", matchTerms: ["anxious", "fearful", "worried", "nervous", "uneasy", "concerned", "afraid", "scared", "dread", "trepidation", "apprehensive", "alarmed", "panicky", "on edge", "jittery", "tense"], label: "Anxious or fearful", hint: "The definition says 'anxious or fearful' -- worry about the future." },
      { keyword: "something bad", matchTerms: ["bad", "unpleasant", "negative", "danger", "harm", "trouble", "problem", "threat", "risk", "worst", "disaster", "terrible", "wrong", "happen", "will happen", "going to happen"], label: "That something bad will happen", hint: "The definition says 'that something bad or unpleasant will happen' -- the fear is forward-looking." },
    ],
    synonyms: ["anxious", "worried", "uneasy"],
  },
  {
    word: "misnomer",
    partOfSpeech: "noun",
    definition: "A wrong or inaccurate name or designation.",
    keyConcepts: [
      { keyword: "wrong name", matchTerms: ["wrong", "incorrect", "inaccurat", "misleading", "false", "improper", "inappropriat", "erroneous", "mistaken", "name", "term", "label", "designation", "title", "word", "description", "calling", "misnam"], label: "A wrong or inaccurate name", hint: "The definition says 'a wrong or inaccurate name or designation' -- the label doesn't fit what it describes." },
    ],
    synonyms: ["misnaming", "misdesignation", "mislabel"],
  },
  {
    word: "pernicious",
    partOfSpeech: "adjective",
    definition: "Having a harmful effect, especially in a gradual or subtle way.",
    keyConcepts: [
      { keyword: "harmful", matchTerms: ["harmful", "damaging", "destructiv", "injurious", "detrimental", "dangerous", "deadly", "toxic", "malicious", "evil", "wicked", "bad", "negative", "adverse"], label: "Harmful effect", hint: "The definition says 'having a harmful effect' -- causing real damage." },
      { keyword: "gradual or subtle", matchTerms: ["gradual", "subtle", "slow", "insidious", "creeping", "stealthy", "hidden", "imperceptib", "incremental", "unnoticed", "quiet", "under the surface", "covert", "indirect"], label: "Gradual or subtle", hint: "The definition says 'especially in a gradual or subtle way' -- the harm isn't immediately obvious." },
    ],
    synonyms: ["harmful", "insidious", "destructive"],
  },
  {
    word: "acumen",
    partOfSpeech: "noun",
    definition: "The ability to make good judgments and quick decisions.",
    keyConcepts: [
      { keyword: "good judgments", matchTerms: ["good judgment", "judgment", "judgement", "insight", "wisdom", "shrewd", "sharp", "astute", "perceptive", "discerning", "intelligent", "clever", "smart", "savvy", "keen", "acute"], label: "Good judgments", hint: "The definition says 'good judgments' -- the quality of decisions is high." },
      { keyword: "quick decisions", matchTerms: ["quick", "fast", "swift", "rapid", "prompt", "decision", "decisive", "thinking", "analysis", "reasoning", "ability", "skill", "talent", "capacity"], label: "Quick decisions", hint: "The definition says 'quick decisions' -- not just wise but also timely." },
    ],
    synonyms: ["shrewdness", "astuteness", "insight"],
  },
  {
    word: "enigmatic",
    partOfSpeech: "adjective",
    definition: "Difficult to interpret or understand; mysterious.",
    keyConcepts: [
      { keyword: "difficult to understand", matchTerms: ["difficult", "hard", "interpret", "understand", "fathom", "decipher", "figure out", "read", "puzzling", "perplexing", "baffling", "confusing", "inscrutable", "cryptic", "obscure", "opaque", "elusive"], label: "Difficult to interpret", hint: "The definition says 'difficult to interpret or understand' -- resisting easy explanation." },
      { keyword: "mysterious", matchTerms: ["mysterious", "mystery", "enigma", "secret", "unknown", "unexplained", "strange", "curious", "intriguing", "mystifying", "bewildering", "unfathomab"], label: "Mysterious", hint: "The definition says 'mysterious' -- there's something hidden or unknowable about it." },
    ],
    synonyms: ["mysterious", "cryptic", "puzzling"],
  },
  {
    word: "conflate",
    partOfSpeech: "verb",
    definition: "To combine two or more texts, ideas, or sets of information into one.",
    keyConcepts: [
      { keyword: "combine", matchTerms: ["combine", "merge", "blend", "mix", "fuse", "join", "unite", "lump together", "confuse", "equate", "treat as one", "muddle", "intermingle"], label: "Combine into one", hint: "The definition says 'combine...into one' -- merging separate things together." },
      { keyword: "two or more", matchTerms: ["two", "more", "multiple", "different", "separate", "distinct", "text", "idea", "set", "concept", "notion", "information", "thing", "various", "several"], label: "Two or more texts or ideas", hint: "The definition says 'two or more texts, ideas, or sets of information' -- distinct things being treated as one." },
    ],
    synonyms: ["merge", "combine", "confuse"],
  },
  {
    word: "vehement",
    partOfSpeech: "adjective",
    definition: "Showing strong feeling; forceful, passionate, or intense.",
    keyConcepts: [
      { keyword: "strong feeling", matchTerms: ["strong", "powerful", "intense", "passionate", "fervent", "ardent", "forceful", "fierce", "vigorous", "emphatic", "earnest", "heated", "fiery", "impassioned", "zealous", "vehement", "feeling", "emotion", "conviction"], label: "Showing strong feeling; forceful", hint: "The definition says 'showing strong feeling; forceful, passionate, or intense' -- deeply felt and powerfully expressed." },
    ],
    synonyms: ["passionate", "fierce", "intense"],
  },
  {
    word: "prudent",
    partOfSpeech: "adjective",
    definition: "Acting with or showing care and thought for the future.",
    keyConcepts: [
      { keyword: "care and thought", matchTerms: ["care", "thought", "careful", "cautious", "wise", "sensible", "judicious", "shrewd", "practical", "responsible", "measured", "deliberate", "calculated", "considered", "circumspect"], label: "Care and thought", hint: "The definition says 'care and thought' -- not reckless but deliberate." },
      { keyword: "for the future", matchTerms: ["future", "ahead", "long-term", "consequence", "foresight", "planning", "preparation", "anticipat", "provision", "forward-thinking", "tomorrow", "later"], label: "For the future", hint: "The definition says 'for the future' -- prudence is forward-looking." },
    ],
    synonyms: ["cautious", "wise", "judicious"],
  },
  {
    word: "disseminate",
    partOfSpeech: "verb",
    definition: "To spread or disperse something, especially information, widely.",
    keyConcepts: [
      { keyword: "spread widely", matchTerms: ["spread", "disperse", "distribut", "circulate", "broadcast", "propagat", "transmit", "share", "scatter", "diffuse", "publish", "promulgat", "relay", "pass on", "widely", "broadly", "far and wide", "extensively"], label: "Spread widely", hint: "The definition says 'spread or disperse...widely' -- distributing something across a broad area." },
      { keyword: "information", matchTerms: ["information", "knowledge", "news", "idea", "message", "data", "content", "material", "findings", "report", "word", "communication", "something"], label: "Especially information", hint: "The definition says 'especially information' -- typically applied to knowledge or news." },
    ],
    synonyms: ["spread", "distribute", "circulate"],
  },
  {
    word: "notorious",
    partOfSpeech: "adjective",
    definition: "Famous or well known, typically for some bad quality or deed.",
    keyConcepts: [
      { keyword: "famous", matchTerms: ["famous", "well known", "known", "recognized", "recognised", "renowned", "celebrated", "prominent", "notable", "famed", "talked about", "publicized"], label: "Famous or well known", hint: "The definition says 'famous or well known' -- widely recognized." },
      { keyword: "for something bad", matchTerms: ["bad", "negative", "infamous", "disreputable", "scandalous", "shameful", "criminal", "evil", "wicked", "villainous", "corrupt", "sinister", "questionab", "quality", "deed", "act", "behavior"], label: "Typically for something bad", hint: "The definition says 'typically for some bad quality or deed' -- the fame is tied to something negative." },
    ],
    synonyms: ["infamous", "disreputable", "scandalous"],
  },
  {
    word: "sporadic",
    partOfSpeech: "adjective",
    definition: "Occurring at irregular intervals or only in a few places; scattered or isolated.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "intermittent", "occasional", "infrequent", "random", "unpredictab", "periodic", "fitful", "on and off", "scattered", "isolated", "sporadic", "rare", "uncommon", "few", "here and there", "now and then"], label: "At irregular intervals; scattered", hint: "The definition says 'occurring at irregular intervals or only in a few places' -- not consistent or widespread." },
    ],
    synonyms: ["intermittent", "occasional", "scattered"],
  },
  {
    word: "aesthetic",
    partOfSpeech: "adjective",
    definition: "Concerned with beauty or the appreciation of beauty.",
    keyConcepts: [
      { keyword: "beauty", matchTerms: ["beauty", "beautiful", "attractive", "visual", "artistic", "art", "taste", "style", "design", "form", "appearance", "look", "pleasing", "elegant", "graceful", "appreciation", "aesthetic", "sensory", "perception"], label: "Concerned with beauty", hint: "The definition says 'concerned with beauty or the appreciation of beauty' -- focused on what is visually or artistically pleasing." },
    ],
    synonyms: ["artistic", "visual", "tasteful"],
  },
  {
    word: "instigate",
    partOfSpeech: "verb",
    definition: "To bring about or initiate an action or event.",
    keyConcepts: [
      { keyword: "bring about", matchTerms: ["bring about", "initiat", "start", "begin", "trigger", "cause", "provok", "incite", "spark", "set off", "launch", "kick off", "catalyz", "prompt", "set in motion", "foment", "stir up"], label: "Bring about or initiate", hint: "The definition says 'bring about or initiate' -- being the starting force." },
      { keyword: "action or event", matchTerms: ["action", "event", "change", "movement", "reaction", "process", "activity", "development", "incident", "situation", "conflict", "discussion", "debate", "investigation"], label: "An action or event", hint: "The definition says 'an action or event' -- something concrete that happens." },
    ],
    synonyms: ["initiate", "trigger", "provoke"],
  },
  {
    word: "extraneous",
    partOfSpeech: "adjective",
    definition: "Irrelevant or unrelated to the subject being dealt with.",
    keyConcepts: [
      { keyword: "irrelevant", matchTerms: ["irrelevant", "unrelated", "unnecessary", "beside the point", "off-topic", "immaterial", "inapplicab", "unconnected", "foreign", "outside", "external", "superfluous", "extra", "surplus", "peripheral", "tangential", "extraneous"], label: "Irrelevant or unrelated", hint: "The definition says 'irrelevant or unrelated to the subject being dealt with' -- it doesn't belong in the discussion." },
    ],
    synonyms: ["irrelevant", "unrelated", "unnecessary"],
  },
  {
    word: "predicate",
    partOfSpeech: "verb",
    definition: "To found or base something on.",
    keyConcepts: [
      { keyword: "base on", matchTerms: ["base", "found", "ground", "build", "establish", "root", "rest", "depend", "rely", "hinge", "center", "centre", "premis", "condition", "upon", "on", "contingent"], label: "Found or base something on", hint: "The definition says 'found or base something on' -- something else is the foundation." },
    ],
    synonyms: ["base", "found", "ground"],
  },
  {
    word: "recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "uncooperative", matchTerms: ["uncooperativ", "resistant", "defiant", "disobedient", "rebellious", "stubborn", "obstinate", "willful", "wilful", "intractable", "refractory", "wayward", "unruly", "insubordinat", "contrary"], label: "Obstinately uncooperative", hint: "The definition says 'obstinately uncooperative' -- stubbornly refusing to go along." },
      { keyword: "toward authority", matchTerms: ["authority", "discipline", "rule", "law", "order", "control", "power", "management", "leadership", "instruction", "direction", "command", "regulation", "govern"], label: "Toward authority or discipline", hint: "The definition says 'toward authority or discipline' -- the resistance is directed at those in charge." },
    ],
    synonyms: ["defiant", "stubborn", "unruly"],
  },
  {
    word: "supplant",
    partOfSpeech: "verb",
    definition: "To supersede and replace.",
    keyConcepts: [
      { keyword: "supersede", matchTerms: ["supersed", "replace", "displace", "overthrow", "oust", "dethrone", "take over", "take the place", "succeed", "substitute", "usurp", "push out", "crowd out", "edge out", "remove"], label: "Supersede and replace", hint: "The definition says 'supersede and replace' -- taking over the position of something else." },
    ],
    synonyms: ["replace", "displace", "supersede"],
  },
  {
    word: "admonish",
    partOfSpeech: "verb",
    definition: "To warn or reprimand someone firmly.",
    keyConcepts: [
      { keyword: "warn", matchTerms: ["warn", "caution", "alert", "advise", "counsel", "urge", "reprimand", "rebuke", "scold", "chastise", "chide", "reproach", "criticiz", "lecture", "berate", "censure"], label: "Warn or reprimand", hint: "The definition says 'warn or reprimand' -- a correction or caution directed at someone." },
      { keyword: "firmly", matchTerms: ["firm", "stern", "serious", "strong", "forceful", "emphatic", "authoritat", "direct", "clear", "unambiguous", "severe", "sharp"], label: "Firmly", hint: "The definition says 'firmly' -- not a gentle suggestion but a serious correction." },
    ],
    synonyms: ["reprimand", "rebuke", "scold"],
  },
  {
    word: "commensurate",
    partOfSpeech: "adjective",
    definition: "Corresponding in size or degree; in proportion.",
    keyConcepts: [
      { keyword: "corresponding", matchTerms: ["correspond", "proportion", "equal", "equivalent", "match", "comparable", "appropriate", "fitting", "suitable", "adequate", "consistent", "relative", "balanced", "fair", "justified", "warranted", "in line", "according"], label: "Corresponding in size or degree", hint: "The definition says 'corresponding in size or degree; in proportion' -- the two things are scaled appropriately to each other." },
    ],
    synonyms: ["proportionate", "corresponding", "equivalent"],
  },
  {
    word: "formidable",
    partOfSpeech: "adjective",
    definition: "Inspiring fear or respect through being impressively large, powerful, intense, or capable.",
    keyConcepts: [
      { keyword: "inspiring fear or respect", matchTerms: ["fear", "respect", "awe", "intimidat", "imposing", "daunting", "threatening", "impressive", "commanding", "striking", "overwhelm", "formidable", "reverence"], label: "Inspiring fear or respect", hint: "The definition says 'inspiring fear or respect' -- it evokes a strong reaction." },
      { keyword: "large or powerful", matchTerms: ["large", "powerful", "strong", "intense", "capab", "mighty", "great", "enormous", "massive", "significant", "considerable", "substantial", "potent", "skilled", "talented", "competent"], label: "Impressively large, powerful, or capable", hint: "The definition says 'impressively large, powerful, intense, or capable' -- the source of the awe." },
    ],
    synonyms: ["imposing", "daunting", "impressive"],
  },
  {
    word: "litigate",
    partOfSpeech: "verb",
    definition: "To take a dispute or claim to a court of law.",
    keyConcepts: [
      { keyword: "dispute or claim", matchTerms: ["dispute", "claim", "case", "conflict", "disagreement", "controversy", "matter", "issue", "grievance", "complaint", "lawsuit", "action", "suit"], label: "A dispute or claim", hint: "The definition says 'a dispute or claim' -- a formal disagreement." },
      { keyword: "court of law", matchTerms: ["court", "law", "legal", "judicial", "trial", "judge", "lawsuit", "litigat", "prosecut", "sue", "sue", "proceed", "tribunal", "justice"], label: "To a court of law", hint: "The definition says 'to a court of law' -- resolving it through the legal system." },
    ],
    synonyms: ["sue", "prosecute", "contest"],
  },
  {
    word: "paradigm",
    partOfSpeech: "noun",
    definition: "A typical example or pattern of something; a model.",
    keyConcepts: [
      { keyword: "typical example", matchTerms: ["typical", "example", "pattern", "model", "template", "standard", "archetype", "prototype", "ideal", "framework", "structure", "blueprint", "basis", "reference", "benchmark", "paradigm"], label: "A typical example or pattern", hint: "The definition says 'a typical example or pattern of something' -- the defining instance or structure." },
    ],
    synonyms: ["model", "example", "pattern"],
  },
  {
    word: "ostentatious",
    partOfSpeech: "adjective",
    definition: "Characterized by vulgar or pretentious display; designed to impress.",
    keyConcepts: [
      { keyword: "showy display", matchTerms: ["display", "show", "flashy", "showy", "garish", "gaudy", "extravagant", "lavish", "ornate", "flamboyant", "dramatic", "conspicuous", "loud", "over-the-top", "excessive", "vulgar", "pretentious", "ostentatious"], label: "Vulgar or pretentious display", hint: "The definition says 'vulgar or pretentious display' -- excessive showing off." },
      { keyword: "to impress", matchTerms: ["impress", "attention", "notice", "seen", "admire", "envy", "status", "wealth", "power", "flaunt", "boast", "brag", "show off", "exhib"], label: "Designed to impress", hint: "The definition says 'designed to impress' -- the purpose is to make others notice." },
    ],
    synonyms: ["showy", "flashy", "pretentious"],
  },
  {
    word: "contrite",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing remorse at the recognition that one has done wrong.",
    keyConcepts: [
      { keyword: "remorse", matchTerms: ["remorse", "remorseful", "sorry", "regret", "guilt", "shame", "penitent", "repentant", "apologetic", "contrite", "sorrowful", "rueful", "conscience-stricken"], label: "Feeling remorse", hint: "The definition says 'feeling or expressing remorse' -- genuine sorrow for actions." },
      { keyword: "done wrong", matchTerms: ["wrong", "wrongdoing", "mistake", "fault", "error", "misdeed", "sin", "transgress", "offense", "offence", "hurt", "harm", "bad", "recogni", "acknowledg", "aware", "realiz"], label: "Recognition of wrongdoing", hint: "The definition says 'at the recognition that one has done wrong' -- the remorse comes from self-awareness." },
    ],
    synonyms: ["remorseful", "penitent", "sorry"],
  },
  {
    word: "cogent",
    partOfSpeech: "adjective",
    definition: "Clear, logical, and convincing.",
    keyConcepts: [
      { keyword: "clear and logical", matchTerms: ["clear", "logical", "rational", "reasoned", "sound", "coherent", "well-reasoned", "well-structured", "systematic", "lucid", "intelligib"], label: "Clear and logical", hint: "The definition says 'clear, logical' -- easy to follow and well-reasoned." },
      { keyword: "convincing", matchTerms: ["convincing", "persuasiv", "compelling", "powerful", "strong", "forceful", "effective", "potent", "irresistib", "unanswerable", "conclusive", "decisive"], label: "Convincing", hint: "The definition says 'and convincing' -- it actually changes minds." },
    ],
    synonyms: ["compelling", "persuasive", "convincing"],
  },
  {
    word: "sanguine",
    partOfSpeech: "adjective",
    definition: "Optimistic or positive, especially in a difficult situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimistic", "positive", "hopeful", "confident", "cheerful", "upbeat", "buoyant", "bright", "encouraging", "assured", "expectant", "sanguine"], label: "Optimistic or positive", hint: "The definition says 'optimistic or positive' -- seeing the bright side." },
      { keyword: "difficult situation", matchTerms: ["difficult", "hard", "tough", "challenging", "adverse", "bad", "unfavorab", "unfavourab", "bleak", "grim", "dire", "crisis", "trouble", "especially", "despite", "even when", "situation"], label: "Especially in difficulty", hint: "The definition says 'especially in a difficult situation' -- optimism when things look bad." },
    ],
    synonyms: ["optimistic", "hopeful", "confident"],
  },
  {
    word: "conundrum",
    partOfSpeech: "noun",
    definition: "A confusing and difficult problem or question.",
    keyConcepts: [
      { keyword: "confusing", matchTerms: ["confusing", "perplexing", "puzzling", "baffling", "bewildering", "mystifying", "enigmatic", "complex", "intricate", "complicated", "knotty", "thorny"], label: "Confusing", hint: "The definition says 'confusing' -- it's hard to wrap your head around." },
      { keyword: "difficult problem", matchTerms: ["difficult", "hard", "tough", "challenging", "problem", "question", "puzzle", "riddle", "dilemma", "quandary", "issue", "mystery", "enigma", "conundrum"], label: "Difficult problem or question", hint: "The definition says 'difficult problem or question' -- not easily solved." },
    ],
    synonyms: ["puzzle", "riddle", "dilemma"],
  },
  {
    word: "deter",
    partOfSpeech: "verb",
    definition: "To discourage someone from doing something by instilling doubt or fear of the consequences.",
    keyConcepts: [
      { keyword: "discourage", matchTerms: ["discourag", "prevent", "dissuad", "stop", "put off", "warn off", "scare off", "intimidat", "inhibit", "restrain", "hold back", "daunt", "deter"], label: "Discourage from doing something", hint: "The definition says 'discourage someone from doing something' -- making them not want to act." },
      { keyword: "doubt or fear", matchTerms: ["doubt", "fear", "consequences", "punishment", "penalty", "threat", "risk", "danger", "worry", "concern", "repercussion", "outcome", "cost", "price", "result", "instill"], label: "By instilling doubt or fear", hint: "The definition says 'by instilling doubt or fear of the consequences' -- the mechanism is fear of what might happen." },
    ],
    synonyms: ["discourage", "dissuade", "prevent"],
  },
  {
    word: "efficacy",
    partOfSpeech: "noun",
    definition: "The ability to produce a desired or intended result.",
    keyConcepts: [
      { keyword: "ability to produce", matchTerms: ["ability", "capacity", "power", "capability", "potential", "effectiveness", "efficacy", "potency", "strength", "competence", "produce", "achieve", "accomplish", "deliver", "generate", "yield"], label: "Ability to produce", hint: "The definition says 'the ability to produce' -- the capacity to get things done." },
      { keyword: "desired result", matchTerms: ["desired", "intended", "result", "outcome", "effect", "goal", "objective", "target", "aim", "purpose", "end", "success", "impact", "expected"], label: "A desired or intended result", hint: "The definition says 'a desired or intended result' -- it actually achieves what it's supposed to." },
    ],
    synonyms: ["effectiveness", "potency", "success"],
  },
  {
    word: "idyllic",
    partOfSpeech: "adjective",
    definition: "Extremely happy, peaceful, or picturesque.",
    keyConcepts: [
      { keyword: "peaceful", matchTerms: ["happy", "peaceful", "perfect", "beautiful", "picturesque", "charming", "lovely", "serene", "tranquil", "pastoral", "blissful", "paradise", "heavenly", "ideal", "unspoiled", "quaint", "scenic", "delightful", "wonderful", "harmonious", "idyllic"], label: "Extremely happy, peaceful, or picturesque", hint: "The definition says 'extremely happy, peaceful, or picturesque' -- an almost perfect scene." },
    ],
    synonyms: ["peaceful", "perfect", "picturesque"],
  },
  {
    word: "juxtaposition",
    partOfSpeech: "noun",
    definition: "The fact of two things being seen or placed close together with contrasting effect.",
    keyConcepts: [
      { keyword: "placed close together", matchTerms: ["close together", "side by side", "next to", "adjacent", "alongside", "near", "placed", "seen", "positioned", "two things", "pair", "combined", "together"], label: "Placed close together", hint: "The definition says 'seen or placed close together' -- proximity is key." },
      { keyword: "contrasting effect", matchTerms: ["contrast", "contrasting", "difference", "comparison", "highlight", "tension", "opposing", "opposite", "dissimilar", "clash", "disparity", "effect", "impact"], label: "With contrasting effect", hint: "The definition says 'with contrasting effect' -- the closeness reveals the difference." },
    ],
    synonyms: ["contrast", "comparison", "proximity"],
  },
  {
    word: "languish",
    partOfSpeech: "verb",
    definition: "To lose or lack vitality; grow weak or feeble.",
    keyConcepts: [
      { keyword: "lose vitality", matchTerms: ["lose", "lack", "vitality", "energy", "strength", "vigor", "vigour", "life", "spirit", "decline", "deteriorat", "wither", "fade", "wane", "weaken", "feeble", "frail", "droop", "flag", "wilt", "languish"], label: "Lose or lack vitality; grow weak", hint: "The definition says 'lose or lack vitality; grow weak or feeble' -- slowly losing life force." },
    ],
    synonyms: ["wither", "decline", "weaken"],
  },
  {
    word: "magnanimous",
    partOfSpeech: "adjective",
    definition: "Very generous or forgiving, especially toward a rival or someone less powerful.",
    keyConcepts: [
      { keyword: "generous or forgiving", matchTerms: ["generous", "forgiving", "gracious", "kind", "noble", "big-hearted", "charitable", "benevolent", "altruistic", "merciful", "clemency", "lenient", "tolerant", "magnanimous"], label: "Generous or forgiving", hint: "The definition says 'very generous or forgiving' -- a largeness of spirit." },
      { keyword: "toward rival", matchTerms: ["rival", "enemy", "opponent", "adversary", "competitor", "less powerful", "weaker", "defeated", "inferior", "subordinat", "someone who wronged", "foe", "especially", "toward"], label: "Especially toward a rival or weaker person", hint: "The definition says 'especially toward a rival or someone less powerful' -- generosity where you could have been harsh." },
    ],
    synonyms: ["generous", "noble", "gracious"],
  },
  {
    word: "propensity",
    partOfSpeech: "noun",
    definition: "An inclination or natural tendency to behave in a particular way.",
    keyConcepts: [
      { keyword: "inclination", matchTerms: ["inclination", "tendency", "leaning", "predisposition", "proclivity", "proneness", "liability", "disposition", "bent", "penchant", "affinity", "propensity"], label: "An inclination or tendency", hint: "The definition says 'an inclination or natural tendency' -- a built-in lean toward something." },
      { keyword: "behave in a way", matchTerms: ["behav", "act", "do", "particular", "certain", "specific", "way", "manner", "pattern", "habit", "direction", "course"], label: "To behave in a particular way", hint: "The definition says 'to behave in a particular way' -- the tendency manifests as action." },
    ],
    synonyms: ["tendency", "inclination", "predisposition"],
  },
  {
    word: "replenish",
    partOfSpeech: "verb",
    definition: "To fill something up again; to restore to the former level or condition.",
    keyConcepts: [
      { keyword: "fill again", matchTerms: ["fill", "refill", "restock", "reload", "resupply", "replenish", "top up", "add", "replace", "renew", "refresh", "reinstat"], label: "Fill up again", hint: "The definition says 'fill something up again' -- bringing back what was used or lost." },
      { keyword: "restore", matchTerms: ["restore", "former", "level", "condition", "original", "previous", "back to", "return", "recover", "revive", "rebuild", "rehabilitat"], label: "Restore to former level", hint: "The definition says 'restore to the former level or condition' -- returning to a previous state." },
    ],
    synonyms: ["refill", "restock", "restore"],
  },
  {
    word: "trepidation",
    partOfSpeech: "noun",
    definition: "A feeling of fear or agitation about something that may happen.",
    keyConcepts: [
      { keyword: "fear", matchTerms: ["fear", "anxiety", "apprehension", "dread", "worry", "nervousness", "unease", "alarm", "fright", "agitation", "concern", "foreboding", "trepidation", "scared", "afraid"], label: "Fear or agitation", hint: "The definition says 'a feeling of fear or agitation' -- genuine worry or dread." },
      { keyword: "may happen", matchTerms: ["may happen", "might happen", "could happen", "future", "anticipat", "expect", "upcoming", "impending", "ahead", "about to", "going to", "what if", "possible", "uncertain", "something"], label: "About something that may happen", hint: "The definition says 'about something that may happen' -- the fear is about the unknown future." },
    ],
    synonyms: ["fear", "anxiety", "apprehension"],
  },
  {
    word: "vacillate",
    partOfSpeech: "verb",
    definition: "To alternate or waver between different opinions or actions.",
    keyConcepts: [
      { keyword: "waver", matchTerms: ["waver", "alternate", "fluctuate", "oscillate", "swing", "go back and forth", "shift", "seesaw", "hesitate", "dither", "equivocate", "vacillate", "change mind"], label: "Alternate or waver", hint: "The definition says 'alternate or waver' -- going back and forth without settling." },
      { keyword: "between opinions", matchTerms: ["opinion", "action", "position", "view", "choice", "option", "decision", "direction", "side", "alternative", "stance", "between", "different", "various", "multiple"], label: "Between different opinions or actions", hint: "The definition says 'between different opinions or actions' -- pulled in multiple directions." },
    ],
    synonyms: ["waver", "hesitate", "oscillate"],
  },
  {
    word: "peripheral",
    partOfSpeech: "adjective",
    definition: "Relating to or situated on the edge or outskirts; of secondary importance.",
    keyConcepts: [
      { keyword: "edge", matchTerms: ["edge", "outskirts", "outer", "border", "margin", "fringe", "boundary", "perimeter", "periphery", "rim", "side", "exterior", "outside"], label: "On the edge or outskirts", hint: "The definition says 'situated on the edge or outskirts' -- not at the center." },
      { keyword: "secondary importance", matchTerms: ["secondary", "minor", "lesser", "marginal", "ancillary", "subsidiary", "tangential", "incidental", "supplementary", "unimportant", "not central", "not main", "not primary"], label: "Of secondary importance", hint: "The definition says 'of secondary importance' -- not the main concern." },
    ],
    synonyms: ["marginal", "secondary", "outer"],
  },
  {
    word: "disparage",
    partOfSpeech: "verb",
    definition: "To regard or represent as being of little worth.",
    keyConcepts: [
      { keyword: "little worth", matchTerms: ["little worth", "worthless", "inferior", "low", "poor", "trivial", "insignifican", "unimportant", "small", "lesser", "diminish", "belittle", "demean", "degrade", "depreciat", "devalue", "mock", "ridicule", "disparag", "insult", "disrespect", "look down", "dismiss"], label: "Regard as of little worth", hint: "The definition says 'regard or represent as being of little worth' -- diminishing the value of something." },
    ],
    synonyms: ["belittle", "demean", "depreciate"],
  },
  {
    word: "fervent",
    partOfSpeech: "adjective",
    definition: "Having or displaying a passionate intensity.",
    keyConcepts: [
      { keyword: "passionate intensity", matchTerms: ["passionate", "intense", "ardent", "fervent", "fervid", "zealous", "enthusiastic", "eager", "burning", "fiery", "powerful", "strong", "deep", "heartfelt", "wholehearted", "sincere", "earnest", "devoted", "impassioned"], label: "Passionate intensity", hint: "The definition says 'having or displaying a passionate intensity' -- deeply felt and strongly expressed." },
    ],
    synonyms: ["passionate", "ardent", "intense"],
  },
  {
    word: "impetuous",
    partOfSpeech: "adjective",
    definition: "Acting or done quickly and without thought or care.",
    keyConcepts: [
      { keyword: "quickly", matchTerms: ["quick", "fast", "swift", "rapid", "hasty", "rash", "impulsive", "snap", "sudden", "spontaneous", "immediate", "instant"], label: "Acting quickly", hint: "The definition says 'acting or done quickly' -- speed without pause." },
      { keyword: "without thought", matchTerms: ["without thought", "thoughtless", "careless", "reckless", "unthinking", "heedless", "irresponsible", "ill-considered", "foolish", "unwise", "imprudent", "negligent", "inconsiderat"], label: "Without thought or care", hint: "The definition says 'without thought or care' -- no deliberation before acting." },
    ],
    synonyms: ["impulsive", "rash", "hasty"],
  },
  {
    word: "reiterate",
    partOfSpeech: "verb",
    definition: "To say something again or a number of times, typically for emphasis or clarity.",
    keyConcepts: [
      { keyword: "say again", matchTerms: ["say again", "state again", "tell again", "say over", "repeat", "restat", "reaffirm", "reiterat", "echo", "stress", "go over", "recapitulat", "retell", "revisit"], label: "Say again or repeat", hint: "The definition says 'say something again or a number of times' -- repetition is the core action." },
      { keyword: "for emphasis", matchTerms: ["emphasis", "emphasiz", "clarity", "clear", "reinforce", "stress", "highlight", "underline", "underscore", "drive home", "hammer home", "make sure", "make clear", "point", "importance"], label: "For emphasis or clarity", hint: "The definition says 'typically for emphasis or clarity' -- the repetition has a purpose." },
    ],
    synonyms: ["repeat", "restate", "reaffirm"],
  },
  {
    word: "meager",
    partOfSpeech: "adjective",
    definition: "Lacking in quantity or quality; inadequate.",
    keyConcepts: [
      { keyword: "lacking", matchTerms: ["lacking", "insufficient", "inadequat", "scant", "scanty", "slim", "small", "tiny", "paltry", "meager", "measly", "poor", "sparse", "thin", "modest", "deficient", "limited", "negligible", "pitiful", "miserable"], label: "Lacking in quantity or quality; inadequate", hint: "The definition says 'lacking in quantity or quality; inadequate' -- not enough to meet needs." },
    ],
    synonyms: ["scant", "sparse", "inadequate"],
  },
  {
    word: "acquit",
    partOfSpeech: "verb",
    definition: "To free someone from a criminal charge by a verdict of not guilty.",
    keyConcepts: [
      { keyword: "free from charge", matchTerms: ["free", "clear", "releas", "discharg", "absolv", "exonerat", "liberat", "acquit", "pardon", "let off", "dismiss", "drop", "reliev", "charge", "crime", "criminal", "fault", "blame", "accusation", "offense", "offence", "remov", "lift"], label: "Free from a criminal charge", hint: "The definition says 'free someone from a criminal charge' -- a legal release." },
      { keyword: "not guilty", matchTerms: ["not guilty", "innocent", "verdict", "judgment", "judgement", "trial", "court", "jury", "finding", "ruling", "decision", "cleared", "blameless", "without fault", "without blame", "no fault"], label: "By a verdict of not guilty", hint: "The definition says 'by a verdict of not guilty' -- a formal legal finding." },
    ],
    synonyms: ["exonerate", "absolve", "clear"],
  },
  {
    word: "dissent",
    partOfSpeech: "noun",
    definition: "The expression of opinions at variance with those previously, commonly, or officially held.",
    keyConcepts: [
      { keyword: "expression of opinions", matchTerms: ["express", "opinion", "view", "voice", "statement", "protest", "objection", "opposition", "disagreement", "dissent", "criticism", "challenge"], label: "Expression of opinions", hint: "The definition says 'the expression of opinions' -- voicing what you think." },
      { keyword: "at variance", matchTerms: ["variance", "different", "contrary", "opposing", "against", "disagree", "conflict", "deviat", "diverge", "challenge", "officia", "common", "majority", "mainstream", "orthodox", "established", "conventional", "prevailing"], label: "At variance with those commonly held", hint: "The definition says 'at variance with those...commonly, or officially held' -- going against the mainstream view." },
    ],
    synonyms: ["disagreement", "opposition", "protest"],
  },
  {
    word: "ambivalence",
    partOfSpeech: "noun",
    definition: "The state of having mixed feelings or contradictory ideas about something.",
    keyConcepts: [
      { keyword: "mixed feelings", matchTerms: ["mixed", "conflicting", "contradictory", "opposing", "torn", "divided", "uncertain", "unsure", "ambivalent", "indecisi", "hesitant", "wavering", "simultaneous", "both", "pulled", "feelings", "ideas", "state", "condition"], label: "Mixed feelings or contradictory ideas", hint: "The definition says 'mixed feelings or contradictory ideas' -- being pulled in two directions at once." },
    ],
    synonyms: ["uncertainty", "indecision", "conflict"],
  },
  {
    word: "bolster",
    partOfSpeech: "verb",
    definition: "To support or strengthen; to prop up.",
    keyConcepts: [
      { keyword: "support", matchTerms: ["support", "strengthen", "reinforce", "boost", "prop up", "shore up", "buttress", "undergird", "sustain", "back", "aid", "help", "fortif", "enhance", "improve", "increase", "build up", "uplift"], label: "Support or strengthen", hint: "The definition says 'support or strengthen; prop up' -- adding stability or power to something." },
    ],
    synonyms: ["support", "strengthen", "reinforce"],
  },
  {
    word: "disingenuous",
    partOfSpeech: "adjective",
    definition: "Not candid or sincere, typically by pretending that one knows less about something than one really does.",
    keyConcepts: [
      { keyword: "not sincere", matchTerms: ["not sincere", "insincere", "dishonest", "deceitful", "misleading", "false", "deceptiv", "duplicitous", "two-faced", "hypocritical", "untruthful", "disingenuous", "feigned"], label: "Not candid or sincere", hint: "The definition says 'not candid or sincere' -- deliberately not being straightforward." },
      { keyword: "pretending", matchTerms: ["pretend", "feign", "fake", "act", "posing", "playing", "knows less", "innocent", "naive", "unaware", "ignorant", "conceal", "hide", "mask", "disguise"], label: "Pretending to know less", hint: "The definition says 'pretending that one knows less...than one really does' -- calculated false innocence." },
    ],
    synonyms: ["insincere", "dishonest", "deceitful"],
  },
  {
    word: "epiphany",
    partOfSpeech: "noun",
    definition: "A moment of sudden revelation or insight.",
    keyConcepts: [
      { keyword: "sudden", matchTerms: ["sudden", "moment", "flash", "instant", "unexpected", "surprise", "abrupt", "quick", "out of nowhere", "struck", "hit", "dawn"], label: "Sudden", hint: "The definition says 'a moment of sudden' -- it comes all at once, not gradually." },
      { keyword: "revelation or insight", matchTerms: ["revelation", "insight", "realiz", "understand", "discover", "aware", "clarity", "eureka", "breakthrough", "illuminat", "enlighten", "comprehension", "grasp", "see", "perceiv", "epiphany", "aha"], label: "Revelation or insight", hint: "The definition says 'revelation or insight' -- a new understanding clicks into place." },
    ],
    synonyms: ["revelation", "insight", "realization"],
  },
  {
    word: "incisive",
    partOfSpeech: "adjective",
    definition: "Intelligently analytical and clear-thinking.",
    keyConcepts: [
      { keyword: "analytical", matchTerms: ["analytical", "analytic", "sharp", "keen", "acute", "penetrating", "perceptive", "astute", "shrewd", "discerning", "intelligent", "clever", "insightful", "incisive", "precise", "exact", "piercing"], label: "Intelligently analytical", hint: "The definition says 'intelligently analytical' -- cutting through to the core of things." },
      { keyword: "clear-thinking", matchTerms: ["clear", "thinking", "thought", "focused", "lucid", "coherent", "crisp", "articulate", "razor-sharp", "logical", "rational", "well-reasoned"], label: "Clear-thinking", hint: "The definition says 'clear-thinking' -- mental clarity and precision." },
    ],
    synonyms: ["sharp", "keen", "perceptive"],
  },
  {
    word: "opaque",
    partOfSpeech: "adjective",
    definition: "Not able to be seen through; not transparent.",
    keyConcepts: [
      { keyword: "not seen through", matchTerms: ["not see through", "not transparent", "opaque", "impenetrab", "dense", "thick", "cloudy", "murky", "dark", "blocked", "obscured", "solid", "non-transparent", "unclear", "hidden"], label: "Not able to be seen through; not transparent", hint: "The definition says 'not able to be seen through; not transparent' -- light or meaning doesn't pass through." },
    ],
    synonyms: ["impenetrable", "cloudy", "unclear"],
  },
  {
    word: "rectify",
    partOfSpeech: "verb",
    definition: "To put right; to correct.",
    keyConcepts: [
      { keyword: "put right", matchTerms: ["put right", "correct", "fix", "repair", "remedy", "resolve", "amend", "adjust", "reform", "improve", "redress", "rectif", "cure", "heal", "restore", "address", "straighten out", "set right", "make right"], label: "Put right; correct", hint: "The definition says 'put right; correct' -- fixing something that was wrong." },
    ],
    synonyms: ["correct", "fix", "remedy"],
  },
  {
    word: "stagnant",
    partOfSpeech: "adjective",
    definition: "Showing no activity; dull and sluggish.",
    keyConcepts: [
      { keyword: "no activity", matchTerms: ["no activity", "inactive", "still", "motionless", "static", "stationary", "idle", "dormant", "lifeless", "flat", "dull", "sluggish", "slow", "stagnant", "stuck", "unmoving", "unchanging", "moribund", "stale"], label: "No activity; dull and sluggish", hint: "The definition says 'showing no activity; dull and sluggish' -- nothing is moving or changing." },
    ],
    synonyms: ["inactive", "sluggish", "static"],
  },
  {
    word: "abate",
    partOfSpeech: "verb",
    definition: "To become less intense or widespread.",
    keyConcepts: [
      { keyword: "become less", matchTerms: ["less", "decrease", "diminish", "reduce", "subside", "ease", "weaken", "lessen", "decline", "fade", "die down", "let up", "wane", "ebb", "taper", "moderate", "recede", "relent", "slacken", "abate"], label: "Become less intense or widespread", hint: "The definition says 'become less intense or widespread' -- losing strength or reach." },
    ],
    synonyms: ["subside", "diminish", "decrease"],
  },
  {
    word: "discern",
    partOfSpeech: "verb",
    definition: "To perceive or recognize something.",
    keyConcepts: [
      { keyword: "perceive", matchTerms: ["perceiv", "recogniz", "detect", "notice", "see", "observe", "identify", "spot", "distinguish", "make out", "pick up", "sense", "tell", "determine", "ascertain", "realize", "realise", "apprehend", "discern"], label: "Perceive or recognize", hint: "The definition says 'perceive or recognize something' -- detecting or identifying, often something not obvious." },
    ],
    synonyms: ["perceive", "detect", "recognize"],
  },
  {
    word: "galvanize",
    partOfSpeech: "verb",
    definition: "To shock or excite someone into taking action.",
    keyConcepts: [
      { keyword: "shock or excite", matchTerms: ["shock", "excite", "electrif", "energiz", "inspir", "motivat", "stimulat", "provok", "arous", "stir", "jolt", "spur", "rouse", "awaken", "ignit", "fire up", "invigorate"], label: "Shock or excite", hint: "The definition says 'shock or excite someone' -- a sudden burst of motivation." },
      { keyword: "into action", matchTerms: ["action", "act", "move", "do", "respond", "react", "mobiliz", "rally", "engag", "participat", "step up", "take action", "into"], label: "Into taking action", hint: "The definition says 'into taking action' -- the result is doing something." },
    ],
    synonyms: ["motivate", "inspire", "energize"],
  },
  {
    word: "contemplate",
    partOfSpeech: "verb",
    definition: "To look at thoughtfully for a long time, or to think deeply about something.",
    keyConcepts: [
      { keyword: "think deeply", matchTerms: ["think", "ponder", "reflect", "consider", "meditat", "deliberat", "muse", "ruminate", "dwell", "contemplat", "study", "weigh", "mull"], label: "Think deeply about", hint: "The definition says 'think deeply about something' -- sustained, serious thought." },
    ],
    synonyms: ["ponder", "reflect", "consider"],
  },
  {
    word: "fathom",
    partOfSpeech: "verb",
    definition: "To understand something after much thought.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "comprehend", "grasp", "perceiv", "make sense", "figure out", "work out", "puzzle out", "get to the bottom", "penetrat", "decipher", "unravel"], label: "Understand", hint: "The definition says 'understand something after much thought' -- reaching comprehension of something difficult." },
    ],
    synonyms: ["understand", "comprehend", "grasp"],
  },
  {
    word: "jubilant",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing great happiness and triumph.",
    keyConcepts: [
      { keyword: "great happiness", matchTerms: ["happi", "joy", "joyful", "joyous", "elat", "delight", "ecstat", "euphori", "thrill", "exhilarat", "overjoyed", "bliss", "raptur"], label: "Great happiness", hint: "The definition says 'great happiness' -- overwhelming positive emotion." },
      { keyword: "triumph", matchTerms: ["triumph", "victori", "celebrat", "exult", "glory", "conquer", "win", "succeed", "accomplish", "cheer"], label: "And triumph", hint: "The definition says 'and triumph' -- the happiness comes from winning or achieving something." },
    ],
    synonyms: ["elated", "triumphant", "overjoyed"],
  },
  {
    word: "kindle",
    partOfSpeech: "verb",
    definition: "To light or set on fire; to arouse or inspire an emotion or feeling.",
    keyConcepts: [
      { keyword: "light or set on fire", matchTerms: ["light", "fire", "ignit", "burn", "flame", "spark", "blaze", "combust", "set alight", "set ablaze"], label: "Light or set on fire", hint: "The definition says 'light or set on fire' -- the literal meaning of starting a flame." },
      { keyword: "arouse emotion", matchTerms: ["arous", "inspir", "stir", "awaken", "provok", "stimulat", "excit", "trigger", "evok", "foment", "emotion", "feeling", "passion", "interest", "enthusiasm"], label: "Arouse or inspire emotion", hint: "The definition says 'arouse or inspire an emotion or feeling' -- metaphorically sparking something inside." },
    ],
    synonyms: ["ignite", "spark", "arouse"],
  },
  {
    word: "nurture",
    partOfSpeech: "verb",
    definition: "To care for and encourage the growth or development of.",
    keyConcepts: [
      { keyword: "care for", matchTerms: ["care", "tend", "look after", "nourish", "feed", "sustain", "protect", "cherish", "cultivat", "rear", "raise", "foster", "support"], label: "Care for", hint: "The definition says 'care for' -- providing what is needed." },
      { keyword: "encourage growth", matchTerms: ["encourage", "growth", "develop", "flourish", "thrive", "progress", "advance", "strengthen", "promote", "help grow", "build up", "matur"], label: "Encourage growth or development", hint: "The definition says 'encourage the growth or development of' -- actively helping something flourish." },
    ],
    synonyms: ["cultivate", "foster", "nourish"],
  },
  {
    word: "obligatory",
    partOfSpeech: "adjective",
    definition: "Required by a legal, moral, or other rule; compulsory.",
    keyConcepts: [
      { keyword: "required", matchTerms: ["requir", "compulsory", "mandatory", "obligat", "necessit", "binding", "enforced", "demanded", "stipulat", "prescribed", "must"], label: "Required", hint: "The definition says 'required by a legal, moral, or other rule' -- you have to do it." },
    ],
    synonyms: ["compulsory", "mandatory", "required"],
  },
  {
    word: "quarantine",
    partOfSpeech: "noun",
    definition: "A state of isolation imposed to prevent the spread of disease.",
    keyConcepts: [
      { keyword: "isolation", matchTerms: ["isolat", "separat", "confine", "restrict", "quarantin", "detain", "seclude", "segregat", "lockdown", "containment", "apart"], label: "State of isolation", hint: "The definition says 'a state of isolation' -- kept away from others." },
      { keyword: "prevent spread of disease", matchTerms: ["prevent", "spread", "disease", "infect", "contagi", "illness", "sickness", "epidem", "pandem", "health", "protect", "contain"], label: "Prevent spread of disease", hint: "The definition says 'to prevent the spread of disease' -- the isolation serves a medical purpose." },
    ],
    synonyms: ["isolation", "confinement", "seclusion"],
  },
  {
    word: "saturate",
    partOfSpeech: "verb",
    definition: "To cause something to become thoroughly soaked with water or another substance.",
    keyConcepts: [
      { keyword: "thoroughly soaked", matchTerms: ["soak", "drench", "saturate", "flood", "fill", "permeate", "impregnate", "steep", "waterlog", "inundat", "suffuse", "imbue", "smother", "cover", "engulf"], label: "Thoroughly soaked", hint: "The definition says 'thoroughly soaked' -- completely filled with liquid or substance." },
    ],
    synonyms: ["soak", "drench", "permeate"],
  },
  {
    word: "trivial",
    partOfSpeech: "adjective",
    definition: "Of little value or importance.",
    keyConcepts: [
      { keyword: "little value", matchTerms: ["little value", "unimportant", "insignificant", "minor", "petty", "small", "negligib", "trifling", "inconsequenti", "slight", "marginal", "paltry", "frivolous", "superficial", "meaningless", "irrelevant", "worthless"], label: "Of little value or importance", hint: "The definition says 'of little value or importance' -- not worth much attention." },
    ],
    synonyms: ["insignificant", "minor", "petty"],
  },
  {
    word: "versatile",
    partOfSpeech: "adjective",
    definition: "Able to adapt or be adapted to many different functions or activities.",
    keyConcepts: [
      { keyword: "adapt", matchTerms: ["adapt", "adjustab", "flexibl", "changeable", "convertib", "multifunctional", "all-purpose", "multi-purpose", "protean", "dynamic"], label: "Able to adapt", hint: "The definition says 'able to adapt or be adapted' -- capable of changing to fit." },
      { keyword: "many functions", matchTerms: ["many", "different", "various", "multiple", "diverse", "wide range", "numerous", "function", "activit", "purpose", "task", "role", "skill", "talent"], label: "Many different functions", hint: "The definition says 'to many different functions or activities' -- useful in lots of ways." },
    ],
    synonyms: ["adaptable", "flexible", "all-around"],
  },
  {
    word: "wary",
    partOfSpeech: "adjective",
    definition: "Feeling or showing caution about possible dangers or problems.",
    keyConcepts: [
      { keyword: "caution", matchTerms: ["caution", "careful", "vigilant", "watchful", "alert", "guarded", "circumspect", "prudent", "suspicious", "distrust", "heedful", "leery", "chary", "tentativ"], label: "Showing caution", hint: "The definition says 'showing caution' -- being on your guard." },
      { keyword: "possible dangers", matchTerms: ["danger", "problem", "risk", "threat", "harm", "trouble", "hazard", "peril", "pitfall", "uncertain"], label: "About possible dangers", hint: "The definition says 'about possible dangers or problems' -- the caution is directed at potential threats." },
    ],
    synonyms: ["cautious", "vigilant", "guarded"],
  },
  {
    word: "gregarious",
    partOfSpeech: "adjective",
    definition: "Fond of company; sociable and enjoying being with people.",
    keyConcepts: [
      { keyword: "fond of company", matchTerms: ["fond of company", "sociable", "social", "outgoing", "friendly", "extrovert", "convivial", "genial", "personable", "warm", "approachable", "affable", "companion"], label: "Fond of company; sociable", hint: "The definition says 'fond of company; sociable' -- actively enjoying being around people." },
    ],
    synonyms: ["sociable", "outgoing", "friendly"],
  },
  {
    word: "hostile",
    partOfSpeech: "adjective",
    definition: "Unfriendly; antagonistic; showing or feeling opposition or dislike.",
    keyConcepts: [
      { keyword: "unfriendly", matchTerms: ["unfriendly", "antagonis", "aggressiv", "belligeren", "combativ", "confrontation", "warlike", "pugnacious", "harsh", "mean", "nasty", "cold"], label: "Unfriendly; antagonistic", hint: "The definition says 'unfriendly; antagonistic' -- actively working against someone." },
      { keyword: "opposition or dislike", matchTerms: ["opposition", "dislike", "hatred", "animosity", "hostil", "enmity", "resent", "aversion", "contempt", "ill will", "malice", "rancor", "venom"], label: "Showing opposition or dislike", hint: "The definition says 'showing or feeling opposition or dislike' -- a strong negative feeling." },
    ],
    synonyms: ["antagonistic", "aggressive", "unfriendly"],
  },
  {
    word: "jeopardize",
    partOfSpeech: "verb",
    definition: "To put something or someone into a situation where there is a danger of loss or harm.",
    keyConcepts: [
      { keyword: "put in danger", matchTerms: ["danger", "risk", "endanger", "threaten", "jeopardiz", "imperil", "hazard", "compromis", "undermin", "put at risk", "expose"], label: "Put in danger", hint: "The definition says 'put into a situation where there is a danger' -- creating risk." },
      { keyword: "loss or harm", matchTerms: ["loss", "harm", "damage", "injury", "destruc", "ruin", "devastat", "detriment", "peril", "hurt"], label: "Of loss or harm", hint: "The definition says 'danger of loss or harm' -- the risk involves real negative consequences." },
    ],
    synonyms: ["endanger", "risk", "threaten"],
  },
  {
    word: "nominal",
    partOfSpeech: "adjective",
    definition: "Existing in name only; very small or insignificant compared to what is expected.",
    keyConcepts: [
      { keyword: "in name only", matchTerms: ["in name only", "titular", "symbolic", "token", "theoretical", "supposed", "ostensible", "so-called", "formal", "official", "purported"], label: "In name only", hint: "The definition says 'existing in name only' -- it has the label but not the substance." },
      { keyword: "very small", matchTerms: ["very small", "insignificant", "tiny", "minimal", "negligib", "trivial", "minor", "trifling", "paltry", "token", "meager", "pittanc"], label: "Very small or insignificant", hint: "The definition says 'very small or insignificant compared to what is expected' -- far less than you'd think." },
    ],
    synonyms: ["token", "symbolic", "minimal"],
  },
  {
    word: "ominous",
    partOfSpeech: "adjective",
    definition: "Giving the impression that something bad or unpleasant is going to happen; threatening.",
    keyConcepts: [
      { keyword: "impression of something bad", matchTerms: ["impression", "suggest", "signal", "portend", "forebod", "presag", "foreshadow", "warn", "hint", "indicat", "premonition"], label: "Giving the impression", hint: "The definition says 'giving the impression that' -- it's about the feeling something creates." },
      { keyword: "threatening", matchTerms: ["threatening", "menacing", "sinister", "dark", "grim", "dire", "foreboding", "bleak", "gloomy", "dreadful", "ominous", "baleful", "inauspicious"], label: "Something bad; threatening", hint: "The definition says 'something bad or unpleasant is going to happen; threatening' -- a sense of impending doom." },
    ],
    synonyms: ["threatening", "menacing", "sinister"],
  },
  {
    word: "quell",
    partOfSpeech: "verb",
    definition: "To put an end to something, typically by the use of force; to suppress.",
    keyConcepts: [
      { keyword: "put an end to", matchTerms: ["end", "stop", "suppress", "crush", "subdue", "quash", "stamp out", "squash", "extinguish", "silence", "defeat", "overcome", "conquer", "vanquish", "stifle"], label: "Put an end to", hint: "The definition says 'put an end to something' -- decisively stopping it." },
      { keyword: "by force", matchTerms: ["force", "power", "authority", "strength", "violenc", "might", "coercion", "dominat", "control", "command", "overpower"], label: "Typically by force", hint: "The definition says 'typically by the use of force' -- quelling isn't gentle." },
    ],
    synonyms: ["suppress", "crush", "subdue"],
  },
  {
    word: "eccentric",
    partOfSpeech: "adjective",
    definition: "Unconventional and slightly strange in behavior or appearance.",
    keyConcepts: [
      { keyword: "unconventional", matchTerms: ["unconventional", "unusual", "unorthodox", "nonconformist", "quirky", "odd", "peculiar", "idiosyncratic", "offbeat", "different", "original", "unique"], label: "Unconventional", hint: "The definition says 'unconventional' -- not following normal patterns." },
      { keyword: "slightly strange", matchTerms: ["strange", "weird", "bizarre", "outlandish", "erratic", "irregular", "abnormal", "curious", "remarkable", "noteworthy"], label: "Slightly strange", hint: "The definition says 'slightly strange in behavior or appearance' -- eccentric is strange but not alarming." },
    ],
    synonyms: ["quirky", "peculiar", "unconventional"],
  },
  {
    word: "frivolous",
    partOfSpeech: "adjective",
    definition: "Not having any serious purpose or value; carefree and superficial.",
    keyConcepts: [
      { keyword: "no serious purpose", matchTerms: ["no serious purpose", "pointless", "trivial", "unimportant", "petty", "silly", "foolish", "trifling", "flippant", "lightweight", "worthless", "meaningless", "idle"], label: "No serious purpose or value", hint: "The definition says 'not having any serious purpose or value' -- lacking substance." },
      { keyword: "superficial", matchTerms: ["superficial", "shallow", "lighthearted", "giddy", "flighty", "empty", "vain", "careless", "casual", "thoughtless"], label: "Carefree and superficial", hint: "The definition says 'carefree and superficial' -- not concerned with deeper matters." },
    ],
    synonyms: ["trivial", "flippant", "superficial"],
  },
  {
    word: "gullible",
    partOfSpeech: "adjective",
    definition: "Easily persuaded to believe something; easily deceived.",
    keyConcepts: [
      { keyword: "easily persuaded", matchTerms: ["easily persuad", "easily believe", "credulous", "naive", "trusting", "impressionab", "susceptibl", "gullibl", "unsuspecting", "unwary", "suggestib"], label: "Easily persuaded to believe", hint: "The definition says 'easily persuaded to believe something' -- quick to accept what's said." },
      { keyword: "easily deceived", matchTerms: ["easily deceived", "easily tricked", "fooled", "duped", "manipulat", "taken in", "misled", "exploited", "hoodwinked", "conned"], label: "Easily deceived", hint: "The definition says 'easily deceived' -- vulnerable to being misled." },
    ],
    synonyms: ["naive", "credulous", "trusting"],
  },
  {
    word: "indifferent",
    partOfSpeech: "adjective",
    definition: "Having no particular interest or sympathy; unconcerned.",
    keyConcepts: [
      { keyword: "no interest", matchTerms: ["no interest", "uninterested", "unconcerned", "apathetic", "indifferent", "detach", "aloof", "uninvolv", "disengag", "nonchalant", "passive", "unmotivat", "blas"], label: "No particular interest", hint: "The definition says 'having no particular interest' -- just not caring." },
      { keyword: "no sympathy", matchTerms: ["no sympathy", "unsympathetic", "uncar", "insensitiv", "callous", "cold", "heartless", "unmov", "dispassionat", "emotionless"], label: "No sympathy; unconcerned", hint: "The definition says 'no...sympathy; unconcerned' -- not just disinterested but unfeeling." },
    ],
    synonyms: ["apathetic", "unconcerned", "aloof"],
  },
  {
    word: "juxtapose",
    partOfSpeech: "verb",
    definition: "To place close together for contrasting effect.",
    keyConcepts: [
      { keyword: "place close together", matchTerms: ["place close", "place together", "put together", "side by side", "adjacent", "alongside", "next to", "near", "position", "arrang", "combin", "pair"], label: "Place close together", hint: "The definition says 'place close together' -- physically or conceptually putting things next to each other." },
      { keyword: "contrasting effect", matchTerms: ["contrast", "compar", "differ", "opposi", "highlight", "distinction", "tension", "clash", "conflict", "reveal", "emphasiz"], label: "For contrasting effect", hint: "The definition says 'for contrasting effect' -- the purpose is to show differences." },
    ],
    synonyms: ["contrast", "compare", "set side by side"],
  },
  {
    word: "legitimate",
    partOfSpeech: "adjective",
    definition: "Conforming to the law or to rules; justifiable and valid.",
    keyConcepts: [
      { keyword: "conforming to law", matchTerms: ["conform", "law", "legal", "lawful", "legitimate", "authorized", "official", "sanctioned", "permitted", "licensed", "rule", "regulat"], label: "Conforming to law or rules", hint: "The definition says 'conforming to the law or to rules' -- operating within established boundaries." },
      { keyword: "justifiable", matchTerms: ["justifiab", "valid", "genuine", "authentic", "proper", "rightful", "warranted", "reasonable", "well-founded", "sound", "credib"], label: "Justifiable and valid", hint: "The definition says 'justifiable and valid' -- having real merit or grounds." },
    ],
    synonyms: ["lawful", "valid", "genuine"],
  },
  {
    word: "negligent",
    partOfSpeech: "adjective",
    definition: "Failing to take proper care in doing something.",
    keyConcepts: [
      { keyword: "failing to take care", matchTerms: ["failing", "careless", "negligent", "irresponsib", "inattentiv", "neglectful", "lax", "slack", "remiss", "derelict", "sloppy", "reckless", "heedless"], label: "Failing to take proper care", hint: "The definition says 'failing to take proper care' -- not doing what a responsible person would do." },
    ],
    synonyms: ["careless", "neglectful", "irresponsible"],
  },
  {
    word: "ramification",
    partOfSpeech: "noun",
    definition: "A consequence of an action or event, especially when complex or unwelcome.",
    keyConcepts: [
      { keyword: "consequence", matchTerms: ["consequenc", "result", "outcome", "effect", "repercussion", "aftermath", "impact", "implicat", "fallout", "upshot", "byproduct"], label: "Consequence of an action", hint: "The definition says 'a consequence of an action or event' -- what follows from a decision." },
      { keyword: "complex or unwelcome", matchTerms: ["complex", "unwelcome", "complicat", "unintend", "unforeseen", "unexpected", "troubl", "problematic", "messy", "tangled", "far-reaching"], label: "Complex or unwelcome", hint: "The definition says 'especially when complex or unwelcome' -- ramifications tend to be messy and undesirable." },
    ],
    synonyms: ["consequence", "repercussion", "implication"],
  },
  {
    word: "unanimous",
    partOfSpeech: "adjective",
    definition: "Fully in agreement; united in opinion.",
    keyConcepts: [
      { keyword: "fully in agreement", matchTerms: ["fully", "agreement", "all agree", "everyone agrees", "complete consensus", "total", "unanimous", "united", "harmonious", "one voice", "like-minded", "concurr", "uncontested", "undisputed"], label: "Fully in agreement", hint: "The definition says 'fully in agreement' -- every single person agrees." },
    ],
    synonyms: ["united", "agreed", "harmonious"],
  },
  {
    word: "adamant",
    partOfSpeech: "adjective",
    definition: "Refusing to be persuaded or to change one's mind.",
    keyConcepts: [
      { keyword: "refusing to be persuaded", matchTerms: ["refusing", "persuad", "stubborn", "inflexibl", "unyielding", "firm", "resolut", "unwavering", "determined", "immovab", "insistent", "unshakeable", "steadfast", "headstrong", "intransigent"], label: "Refusing to be persuaded", hint: "The definition says 'refusing to be persuaded or to change one's mind' -- absolutely set in a position." },
    ],
    synonyms: ["stubborn", "unyielding", "resolute"],
  },
  {
    word: "cryptic",
    partOfSpeech: "adjective",
    definition: "Having a meaning that is mysterious or obscure; difficult to understand.",
    keyConcepts: [
      { keyword: "mysterious", matchTerms: ["mysterious", "mysteri", "obscure", "enigmatic", "puzzling", "baffling", "perplexing", "cryptic", "arcane", "inscrutable", "abstruse"], label: "Mysterious or obscure", hint: "The definition says 'mysterious or obscure' -- hidden or hard to access." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "unclear", "confus", "ambiguous", "incomprehensib", "unfathomab", "impenetrab", "elusive", "vague", "coded", "hidden"], label: "Difficult to understand", hint: "The definition says 'difficult to understand' -- you can't easily figure out what it means." },
    ],
    synonyms: ["enigmatic", "mysterious", "obscure"],
  },
  {
    word: "grandiose",
    partOfSpeech: "adjective",
    definition: "Impressive and imposing in appearance or style, especially pretentiously so.",
    keyConcepts: [
      { keyword: "impressive", matchTerms: ["impressive", "imposing", "magnificent", "grand", "majestic", "splendid", "lavish", "extravagant", "opulent", "elaborate", "monumental", "stately", "spectacular"], label: "Impressive and imposing", hint: "The definition says 'impressive and imposing in appearance or style' -- big and attention-grabbing." },
      { keyword: "pretentiously", matchTerms: ["pretentious", "overblown", "exaggerat", "inflated", "pompous", "ostentatious", "showy", "flashy", "bombastic", "overdone", "excessive", "theatrical"], label: "Especially pretentiously", hint: "The definition says 'especially pretentiously so' -- the impressiveness is often over-the-top." },
    ],
    synonyms: ["magnificent", "imposing", "pretentious"],
  },
  {
    word: "hedonistic",
    partOfSpeech: "adjective",
    definition: "Engaged in the pursuit of pleasure; devoted to enjoying oneself.",
    keyConcepts: [
      { keyword: "pursuit of pleasure", matchTerms: ["pursuit", "pleasure", "enjoyment", "indulgenc", "gratification", "self-indulg", "sensuali", "luxury", "delight", "satisfact", "appetite", "crave"], label: "Pursuit of pleasure", hint: "The definition says 'pursuit of pleasure' -- actively seeking pleasurable experiences." },
    ],
    synonyms: ["pleasure-seeking", "indulgent", "self-indulgent"],
  },
  {
    word: "impeccable",
    partOfSpeech: "adjective",
    definition: "In accordance with the highest standards of propriety; faultless.",
    keyConcepts: [
      { keyword: "highest standards", matchTerms: ["highest standard", "perfect", "flawless", "faultless", "immaculat", "exemplar", "excellent", "superb", "ideal", "impeccabl", "unblemish", "spotless", "pristine", "supreme", "consummat"], label: "Highest standards; faultless", hint: "The definition says 'in accordance with the highest standards of propriety; faultless' -- absolutely perfect, no mistakes." },
    ],
    synonyms: ["flawless", "perfect", "faultless"],
  },
  {
    word: "jurisdiction",
    partOfSpeech: "noun",
    definition: "The official power to make legal decisions and judgments; the extent of this power.",
    keyConcepts: [
      { keyword: "official power", matchTerms: ["official", "power", "authority", "control", "governance", "sovereignty", "dominion", "command", "competence", "right", "prerogative"], label: "Official power", hint: "The definition says 'the official power' -- formal, recognized authority." },
      { keyword: "legal decisions", matchTerms: ["legal", "decision", "judgment", "ruling", "law", "court", "judicial", "adjudicat", "enforc", "regulat", "legislat", "govern", "administrat"], label: "To make legal decisions", hint: "The definition says 'to make legal decisions and judgments' -- the power is specifically about law." },
    ],
    synonyms: ["authority", "control", "domain"],
  },
  {
    word: "keen",
    partOfSpeech: "adjective",
    definition: "Eager or enthusiastic; having a sharp edge or point.",
    keyConcepts: [
      { keyword: "eager", matchTerms: ["eager", "enthusiastic", "passionate", "avid", "ardent", "fervent", "zealous", "excited", "willing", "interested", "motivated", "hungry", "ready"], label: "Eager or enthusiastic", hint: "The definition says 'eager or enthusiastic' -- strongly wanting to do something." },
      { keyword: "sharp", matchTerms: ["sharp", "acute", "piercing", "penetrating", "incisive", "fine", "cutting", "honed", "razor", "pointed", "shrewd", "astute"], label: "Sharp", hint: "The definition also means 'having a sharp edge or point' -- keen can describe physical sharpness or mental acuity." },
    ],
    synonyms: ["eager", "sharp", "enthusiastic"],
  },
  {
    word: "liberate",
    partOfSpeech: "verb",
    definition: "To set someone or something free from a situation, especially imprisonment or oppression.",
    keyConcepts: [
      { keyword: "set free", matchTerms: ["set free", "free", "release", "emancipat", "deliver", "rescue", "unshackle", "unchain", "unbind", "let go", "discharg", "redeem"], label: "Set free", hint: "The definition says 'set someone or something free' -- removing constraints." },
      { keyword: "from oppression", matchTerms: ["oppression", "imprisonment", "captiv", "bondage", "slavery", "confinement", "tyranny", "subjugat", "domination", "restraint", "shackles"], label: "From imprisonment or oppression", hint: "The definition says 'from a situation, especially imprisonment or oppression' -- liberation fights injustice." },
    ],
    synonyms: ["free", "release", "emancipate"],
  },
  {
    word: "merit",
    partOfSpeech: "noun",
    definition: "The quality of being particularly good or worthy, especially deserving praise or reward.",
    keyConcepts: [
      { keyword: "particularly good", matchTerms: ["good", "worthy", "worthiness", "excellence", "quality", "virtue", "value", "caliber", "distinction", "superiority"], label: "Particularly good or worthy", hint: "The definition says 'the quality of being particularly good or worthy' -- having real value." },
      { keyword: "deserving praise", matchTerms: ["deserv", "praise", "reward", "recognition", "acknowledgment", "credit", "commend", "honor", "honour", "earn", "warrant"], label: "Deserving praise or reward", hint: "The definition says 'especially deserving praise or reward' -- merit earns recognition." },
    ],
    synonyms: ["worth", "value", "excellence"],
  },
  {
    word: "orthodox",
    partOfSpeech: "adjective",
    definition: "Conforming to what is generally or traditionally accepted as right or true; conventional.",
    keyConcepts: [
      { keyword: "conforming to accepted", matchTerms: ["conform", "accepted", "traditional", "established", "standard", "conventional", "mainstream", "normal", "customary", "orthodox", "prevailing", "sanctioned"], label: "Conforming to what is accepted", hint: "The definition says 'conforming to what is generally or traditionally accepted' -- following the established way." },
    ],
    synonyms: ["conventional", "traditional", "established"],
  },
  {
    word: "serene",
    partOfSpeech: "adjective",
    definition: "Calm, peaceful, and untroubled.",
    keyConcepts: [
      { keyword: "calm", matchTerms: ["calm", "peaceful", "tranquil", "placid", "still", "quiet", "composed", "relaxed", "undisturbed", "unruffled", "untroubl", "seren", "restful", "gentle", "soothing", "harmonious", "balmy"], label: "Calm, peaceful, and untroubled", hint: "The definition says 'calm, peaceful, and untroubled' -- a deep, undisturbed stillness." },
    ],
    synonyms: ["calm", "peaceful", "tranquil"],
  },
  {
    word: "threshold",
    partOfSpeech: "noun",
    definition: "The point of entry or beginning of something; the level at which something starts to take effect.",
    keyConcepts: [
      { keyword: "point of entry", matchTerms: ["point of entry", "beginning", "start", "onset", "entrance", "gateway", "doorway", "brink", "edge", "verge", "cusp", "opening"], label: "Point of entry or beginning", hint: "The definition says 'the point of entry or beginning of something' -- where you cross over." },
      { keyword: "level at which something starts", matchTerms: ["level", "limit", "boundary", "minimum", "mark", "line", "bar", "benchmark", "trigger", "tipping point", "cutoff", "take effect"], label: "Level at which something takes effect", hint: "The definition says 'the level at which something starts to take effect' -- below it nothing happens, above it everything changes." },
    ],
    synonyms: ["boundary", "limit", "brink"],
  },
  {
    word: "unequivocal",
    partOfSpeech: "adjective",
    definition: "Leaving no doubt; unambiguous and clear.",
    keyConcepts: [
      { keyword: "no doubt", matchTerms: ["no doubt", "certain", "definite", "conclusiv", "absolute", "categorical", "indisputab", "undeniab", "unquestionab", "unmistakab", "plain", "decisive", "emphatic"], label: "Leaving no doubt", hint: "The definition says 'leaving no doubt' -- there is zero uncertainty." },
      { keyword: "unambiguous", matchTerms: ["unambiguous", "clear", "explicit", "direct", "straightforward", "obvious", "transparent", "crystal clear", "black and white", "frank"], label: "Unambiguous and clear", hint: "The definition says 'unambiguous and clear' -- the meaning is completely plain." },
    ],
    synonyms: ["clear", "definite", "absolute"],
  },
  {
    word: "catastrophe",
    partOfSpeech: "noun",
    definition: "An event causing great and often sudden damage or suffering; a disaster.",
    keyConcepts: [
      { keyword: "great damage", matchTerms: ["great damage", "suffering", "destruction", "devastat", "ruin", "havoc", "calamity", "catastroph", "cataclysm", "tragedy", "crisis", "disaster", "debacle"], label: "Great damage or suffering", hint: "The definition says 'causing great...damage or suffering' -- the scale is massive." },
      { keyword: "sudden", matchTerms: ["sudden", "unexpected", "abrupt", "shocking", "dramatic", "violent", "swift", "overnight", "without warning", "unforeseen"], label: "Often sudden", hint: "The definition says 'often sudden' -- catastrophes tend to strike without much warning." },
    ],
    synonyms: ["disaster", "calamity", "tragedy"],
  },
  {
    word: "heinous",
    partOfSpeech: "adjective",
    definition: "Utterly odious or wicked; shockingly evil.",
    keyConcepts: [
      { keyword: "odious or wicked", matchTerms: ["odious", "wicked", "evil", "vile", "atrocious", "abominabl", "monstrous", "despicabl", "depraved", "villainous", "nefarious", "reprehensib", "diabolical"], label: "Utterly odious or wicked", hint: "The definition says 'utterly odious or wicked' -- the most extreme form of evil." },
      { keyword: "shockingly", matchTerms: ["shocking", "horrif", "appalling", "outrageous", "disgust", "revolting", "repulsiv", "unspeakab", "abhorrent", "ghastly", "gruesome", "horrific"], label: "Shockingly evil", hint: "The definition says 'shockingly evil' -- heinous acts provoke revulsion." },
    ],
    synonyms: ["atrocious", "monstrous", "abominable"],
  },
  {
    word: "lethal",
    partOfSpeech: "adjective",
    definition: "Sufficient to cause death; extremely dangerous.",
    keyConcepts: [
      { keyword: "cause death", matchTerms: ["cause death", "deadly", "fatal", "mortal", "kill", "lethal", "life-threatening", "terminat", "destroy", "annihilat"], label: "Sufficient to cause death", hint: "The definition says 'sufficient to cause death' -- capable of killing." },
      { keyword: "extremely dangerous", matchTerms: ["extremely dangerous", "hazardous", "perilous", "toxic", "poisonous", "venomous", "noxious", "destructiv", "devastating", "ruinous"], label: "Extremely dangerous", hint: "The definition says 'extremely dangerous' -- posing the highest level of threat." },
    ],
    synonyms: ["deadly", "fatal", "mortal"],
  },
  {
    word: "robust",
    partOfSpeech: "adjective",
    definition: "Strong and healthy; vigorous. Also: sturdy in construction.",
    keyConcepts: [
      { keyword: "strong and healthy", matchTerms: ["strong", "healthy", "vigorous", "hardy", "sturdy", "tough", "powerful", "resilient", "fit", "hale", "hearty", "sound", "solid", "durable", "rugged"], label: "Strong, healthy, and vigorous", hint: "The definition says 'strong and healthy; vigorous' -- robust things are built to last and perform well." },
    ],
    synonyms: ["sturdy", "vigorous", "strong"],
  },
  {
    word: "tranquil",
    partOfSpeech: "adjective",
    definition: "Free from disturbance; calm and peaceful.",
    keyConcepts: [
      { keyword: "free from disturbance", matchTerms: ["free from disturbance", "undisturbed", "untroubled", "serene", "still", "quiet", "hushed", "silent", "restful", "idyllic", "gentle"], label: "Free from disturbance", hint: "The definition says 'free from disturbance' -- nothing breaking the peace." },
      { keyword: "calm and peaceful", matchTerms: ["calm", "peaceful", "tranquil", "placid", "relaxed", "soothing", "composed", "mellow", "easy", "harmonious", "balmy"], label: "Calm and peaceful", hint: "The definition says 'calm and peaceful' -- a deep, settled stillness." },
    ],
    synonyms: ["calm", "peaceful", "serene"],
  },
  {
    word: "abstain",
    partOfSpeech: "verb",
    definition: "To restrain oneself from doing or enjoying something.",
    keyConcepts: [
      { keyword: "restrain oneself", matchTerms: ["restrain", "refrain", "hold back", "resist", "avoid", "forgo", "renounce", "decline", "withhold", "deny oneself", "go without", "give up"], label: "Restrain oneself", hint: "The definition says 'restrain oneself from doing or enjoying something' -- deliberately choosing not to partake." },
    ],
    synonyms: ["refrain", "forgo", "avoid"],
  },
  {
    word: "cohesive",
    partOfSpeech: "adjective",
    definition: "Characterized by forming a united whole; sticking together.",
    keyConcepts: [
      { keyword: "united whole", matchTerms: ["united", "whole", "unified", "together", "integrated", "connected", "bonded", "joined", "combined", "consolidated", "harmonious", "coheren"], label: "Forming a united whole", hint: "The definition says 'forming a united whole' -- the parts work together seamlessly." },
    ],
    synonyms: ["unified", "connected", "integrated"],
  },
  {
    word: "deficient",
    partOfSpeech: "adjective",
    definition: "Not having enough of a specified quality or ingredient; lacking.",
    keyConcepts: [
      { keyword: "not enough", matchTerms: ["not enough", "lacking", "insufficient", "inadequat", "scarce", "short", "deficient", "poor", "low", "wanting", "incomplete", "substandard"], label: "Not having enough; lacking", hint: "The definition says 'not having enough' -- falling short of what's needed." },
    ],
    synonyms: ["lacking", "insufficient", "inadequate"],
  },
  {
    word: "fertile",
    partOfSpeech: "adjective",
    definition: "Producing or capable of producing abundant vegetation or crops; inventive and creative.",
    keyConcepts: [
      { keyword: "producing abundantly", matchTerms: ["producing", "abundant", "rich", "fruitful", "productive", "prolific", "lush", "verdant", "bountiful", "luxuriant", "teeming", "generativ"], label: "Producing abundantly", hint: "The definition says 'producing or capable of producing abundant vegetation' -- rich and productive." },
      { keyword: "inventive", matchTerms: ["inventive", "creative", "imaginativ", "resourceful", "original", "innovative", "inspired", "ingenious", "visionary"], label: "Inventive and creative", hint: "The definition also says 'inventive and creative' -- a fertile mind generates many ideas." },
    ],
    synonyms: ["productive", "fruitful", "creative"],
  },
  {
    word: "gauge",
    partOfSpeech: "verb",
    definition: "To estimate or determine the magnitude, amount, or volume of something.",
    keyConcepts: [
      { keyword: "estimate or determine", matchTerms: ["estimate", "determine", "measure", "assess", "evaluat", "judge", "apprais", "calculat", "reckon", "compute", "quantif", "ascertain"], label: "Estimate or determine", hint: "The definition says 'estimate or determine' -- figuring out the size or amount of something." },
    ],
    synonyms: ["measure", "assess", "estimate"],
  },
  {
    word: "ignite",
    partOfSpeech: "verb",
    definition: "To catch fire or cause to catch fire; to arouse or inflame strong feelings.",
    keyConcepts: [
      { keyword: "catch fire", matchTerms: ["catch fire", "fire", "burn", "blaze", "flame", "light", "combust", "kindle", "spark", "set alight"], label: "Catch fire", hint: "The definition says 'catch fire or cause to catch fire' -- starting combustion." },
      { keyword: "arouse feelings", matchTerms: ["arouse", "inflame", "spark", "trigger", "provoke", "stir", "excite", "inspire", "stimulat", "foment", "enkindle", "feelings", "passion", "emotion"], label: "Arouse strong feelings", hint: "The definition says 'arouse or inflame strong feelings' -- metaphorically setting something ablaze." },
    ],
    synonyms: ["kindle", "spark", "inflame"],
  },
  {
    word: "jarring",
    partOfSpeech: "adjective",
    definition: "Incongruous in a striking or shocking way; causing a physical jolt.",
    keyConcepts: [
      { keyword: "incongruous", matchTerms: ["incongruous", "clashing", "discordant", "dissonant", "conflicting", "incompatible", "out of place", "mismatched", "unsuitable", "unsettling"], label: "Incongruous", hint: "The definition says 'incongruous in a striking or shocking way' -- jarringly out of harmony." },
      { keyword: "shocking", matchTerms: ["shocking", "startling", "jolting", "disturbing", "harsh", "abrupt", "sudden", "unpleasant", "off-putting", "grating", "rough"], label: "Striking or shocking", hint: "The definition says 'striking or shocking' -- making you flinch or recoil." },
    ],
    synonyms: ["discordant", "grating", "unsettling"],
  },
  {
    word: "kinetic",
    partOfSpeech: "adjective",
    definition: "Relating to or resulting from motion; full of energy and movement.",
    keyConcepts: [
      { keyword: "relating to motion", matchTerms: ["motion", "movement", "moving", "dynamic", "active", "energetic", "animated", "lively", "vibrant", "vigorous", "fast", "rapid", "brisk"], label: "Relating to motion", hint: "The definition says 'relating to or resulting from motion' -- kinetic energy is the energy of movement." },
    ],
    synonyms: ["dynamic", "energetic", "active"],
  },
  {
    word: "lavish",
    partOfSpeech: "adjective",
    definition: "Sumptuously rich, elaborate, or luxurious; very generous or extravagant.",
    keyConcepts: [
      { keyword: "sumptuously rich", matchTerms: ["sumptuous", "rich", "elaborate", "luxurious", "opulent", "grand", "magnificent", "splendid", "extravagant", "plush", "ornate", "decadent", "indulgent"], label: "Sumptuously rich or luxurious", hint: "The definition says 'sumptuously rich, elaborate, or luxurious' -- abundance beyond what's necessary." },
      { keyword: "very generous", matchTerms: ["generous", "extravagant", "bountiful", "liberal", "profuse", "abundant", "unstinting", "overflowing", "excessive", "prodigal"], label: "Very generous or extravagant", hint: "The definition says 'very generous or extravagant' -- giving or spending freely and abundantly." },
    ],
    synonyms: ["luxurious", "extravagant", "opulent"],
  },
  {
    word: "malleable",
    partOfSpeech: "adjective",
    definition: "Easily influenced; pliable. Also: able to be hammered or pressed into shape without breaking.",
    keyConcepts: [
      { keyword: "easily influenced", matchTerms: ["easily influenced", "pliable", "impressionable", "suggestib", "susceptibl", "adaptable", "flexible", "yielding", "compliant", "moldable", "ductile", "tractable"], label: "Easily influenced; pliable", hint: "The definition says 'easily influenced; pliable' -- can be shaped or persuaded without resistance." },
    ],
    synonyms: ["pliable", "flexible", "impressionable"],
  },
  {
    word: "novice",
    partOfSpeech: "noun",
    definition: "A person new to or inexperienced in a field or situation.",
    keyConcepts: [
      { keyword: "new or inexperienced", matchTerms: ["new", "inexperienced", "beginner", "novice", "newcomer", "amateur", "learner", "trainee", "rookie", "neophyte", "apprentic", "freshman", "recruit", "greenhorn", "starter"], label: "New or inexperienced", hint: "The definition says 'new to or inexperienced in a field' -- just starting out." },
    ],
    synonyms: ["beginner", "newcomer", "amateur"],
  },
  {
    word: "obscure",
    partOfSpeech: "adjective",
    definition: "Not discovered or known about; uncertain; not clearly expressed or easily understood.",
    keyConcepts: [
      { keyword: "not known", matchTerms: ["not known", "unknown", "unfamiliar", "unrecognized", "hidden", "forgotten", "overlooked", "minor", "obscure", "undiscovered", "little-known", "unheard-of"], label: "Not known about", hint: "The definition says 'not discovered or known about' -- existing in the shadows." },
      { keyword: "not clearly expressed", matchTerms: ["not clear", "unclear", "vague", "ambiguous", "confusing", "cryptic", "impenetrable", "abstruse", "opaque", "murky", "indistinct"], label: "Not clearly expressed", hint: "The definition says 'not clearly expressed or easily understood' -- hard to make sense of." },
    ],
    synonyms: ["unknown", "unclear", "vague"],
  },
  {
    word: "ponder",
    partOfSpeech: "verb",
    definition: "To think about something carefully, especially before making a decision.",
    keyConcepts: [
      { keyword: "think carefully", matchTerms: ["think carefully", "consider", "reflect", "contemplate", "deliberat", "meditat", "muse", "ruminate", "weigh", "mull", "brood", "cogitat", "study", "examine"], label: "Think carefully", hint: "The definition says 'think about something carefully' -- giving it sustained, serious thought." },
    ],
    synonyms: ["consider", "reflect", "contemplate"],
  },
  {
    word: "quaint",
    partOfSpeech: "adjective",
    definition: "Attractively unusual or old-fashioned.",
    keyConcepts: [
      { keyword: "attractively unusual", matchTerms: ["attractive", "unusual", "charming", "picturesque", "cute", "pretty", "lovely", "delightful", "endearing", "appealing", "whimsical", "quirky"], label: "Attractively unusual", hint: "The definition says 'attractively unusual' -- the unusualness is part of the charm." },
      { keyword: "old-fashioned", matchTerms: ["old-fashioned", "vintage", "antique", "retro", "classic", "traditional", "rustic", "bygone", "nostalgic", "timeless", "period"], label: "Old-fashioned", hint: "The definition says 'old-fashioned' -- quaint things evoke an earlier, simpler time." },
    ],
    synonyms: ["charming", "picturesque", "old-fashioned"],
  },
  {
    word: "rational",
    partOfSpeech: "adjective",
    definition: "Based on or in accordance with reason or logic.",
    keyConcepts: [
      { keyword: "based on reason", matchTerms: ["reason", "logic", "rational", "logical", "sensible", "sound", "coherent", "reasonab", "analytical", "systematic", "methodical", "objective", "clear-headed"], label: "Based on reason or logic", hint: "The definition says 'based on or in accordance with reason or logic' -- thinking clearly and systematically." },
    ],
    synonyms: ["logical", "reasonable", "sensible"],
  },
  {
    word: "tacit",
    partOfSpeech: "adjective",
    definition: "Understood or implied without being stated.",
    keyConcepts: [
      { keyword: "understood", matchTerms: ["understood", "implied", "implicit", "unspoken", "unstated", "unexpressed", "silent", "wordless", "assumed", "taken for granted", "inferred", "hinted"], label: "Understood or implied", hint: "The definition says 'understood or implied' -- everyone knows it even though nobody says it." },
      { keyword: "without being stated", matchTerms: ["without being stated", "not said", "not spoken", "not written", "not explicit", "not expressed", "not declared", "not announced", "not articulated"], label: "Without being stated", hint: "The definition says 'without being stated' -- the understanding exists below the surface." },
    ],
    synonyms: ["implicit", "unspoken", "implied"],
  },
  {
    word: "unilateral",
    partOfSpeech: "adjective",
    definition: "Performed by or affecting only one person, group, or country, without the agreement of others.",
    keyConcepts: [
      { keyword: "only one side", matchTerms: ["only one", "one side", "one-sided", "single", "sole", "individual", "independent", "alone", "by oneself", "autonomous"], label: "Only one person or group", hint: "The definition says 'performed by or affecting only one person, group, or country' -- done by one party alone." },
      { keyword: "without agreement", matchTerms: ["without agreement", "without consent", "without approval", "without consultation", "unilateral", "unilaterally", "independently", "arbitrarily", "imposed"], label: "Without the agreement of others", hint: "The definition says 'without the agreement of others' -- no consensus or cooperation sought." },
    ],
    synonyms: ["one-sided", "independent", "solo"],
  },
  {
    word: "yield",
    partOfSpeech: "verb",
    definition: "To produce or provide a result, gain, or financial return; to give way to demands or pressure.",
    keyConcepts: [
      { keyword: "produce result", matchTerms: ["produce", "provide", "generate", "return", "result", "output", "gain", "profit", "harvest", "bear", "deliver", "supply", "give"], label: "Produce or provide", hint: "The definition says 'produce or provide a result, gain, or financial return' -- what something gives back." },
      { keyword: "give way", matchTerms: ["give way", "surrender", "submit", "capitulate", "concede", "relent", "acquiesce", "defer", "comply", "bow", "succumb", "cave", "buckle"], label: "Give way to demands", hint: "The definition also says 'give way to demands or pressure' -- stopping resistance." },
    ],
    synonyms: ["produce", "surrender", "concede"],
  },
  {
    word: "abstract",
    partOfSpeech: "adjective",
    definition: "Existing in thought or as an idea but not having a physical or concrete existence.",
    keyConcepts: [
      { keyword: "existing in thought", matchTerms: ["thought", "idea", "concept", "theoretical", "intellectual", "mental", "notional", "philosophical", "hypothetical", "cerebral"], label: "Existing in thought", hint: "The definition says 'existing in thought or as an idea' -- purely in the realm of ideas." },
      { keyword: "not physical", matchTerms: ["not physical", "not concrete", "intangible", "immaterial", "non-physical", "incorporeal", "impalpable", "insubstantial", "formless", "shapeless"], label: "Not physical or concrete", hint: "The definition says 'not having a physical or concrete existence' -- you can't touch or see it." },
    ],
    synonyms: ["theoretical", "conceptual", "intangible"],
  },
  {
    word: "chronicle",
    partOfSpeech: "noun",
    definition: "A factual written account of important historical events in the order of their occurrence.",
    keyConcepts: [
      { keyword: "factual account", matchTerms: ["factual", "account", "record", "narrative", "report", "document", "log", "journal", "diary", "history", "annals", "register"], label: "Factual written account", hint: "The definition says 'a factual written account' -- documenting what actually happened." },
      { keyword: "historical events in order", matchTerms: ["historical", "events", "order", "chronological", "sequential", "timeline", "sequence", "succession", "progression", "important"], label: "Events in order of occurrence", hint: "The definition says 'important historical events in the order of their occurrence' -- a timeline of significant happenings." },
    ],
    synonyms: ["record", "history", "narrative"],
  },
  {
    word: "elicit",
    partOfSpeech: "verb",
    definition: "To evoke or draw out a response, answer, or fact from someone.",
    keyConcepts: [
      { keyword: "evoke or draw out", matchTerms: ["evoke", "draw out", "extract", "obtain", "get", "prompt", "provoke", "produce", "bring out", "bring forth", "wring", "coax", "elicit", "trigger"], label: "Evoke or draw out", hint: "The definition says 'evoke or draw out' -- causing something to come forth." },
      { keyword: "response or answer", matchTerms: ["response", "answer", "reaction", "reply", "fact", "information", "confession", "admission", "emotion", "feeling"], label: "A response, answer, or fact", hint: "The definition says 'a response, answer, or fact from someone' -- what you manage to get out of them." },
    ],
    synonyms: ["evoke", "extract", "provoke"],
  },
  {
    word: "grave",
    partOfSpeech: "adjective",
    definition: "Giving cause for alarm; serious and important.",
    keyConcepts: [
      { keyword: "cause for alarm", matchTerms: ["alarm", "serious", "severe", "critical", "dire", "urgent", "dangerous", "perilous", "threatening", "ominous", "grim", "somber", "solemn", "weighty", "important", "significant", "momentous"], label: "Giving cause for alarm; serious", hint: "The definition says 'giving cause for alarm; serious and important' -- demanding immediate, sober attention." },
    ],
    synonyms: ["serious", "severe", "critical"],
  },
  {
    word: "inhibit",
    partOfSpeech: "verb",
    definition: "To hinder, restrain, or prevent an action or process.",
    keyConcepts: [
      { keyword: "hinder or restrain", matchTerms: ["hinder", "restrain", "prevent", "block", "impede", "obstruct", "suppress", "curb", "check", "limit", "restrict", "constrain", "hold back", "stifle", "hamper"], label: "Hinder, restrain, or prevent", hint: "The definition says 'hinder, restrain, or prevent' -- stopping or slowing something down." },
    ],
    synonyms: ["restrain", "prevent", "suppress"],
  },
  {
    word: "loathe",
    partOfSpeech: "verb",
    definition: "To feel intense dislike or disgust for something or someone.",
    keyConcepts: [
      { keyword: "intense dislike", matchTerms: ["intense dislike", "hate", "hatred", "detest", "despise", "abhor", "revile", "loathe", "abominat", "execrate", "disgust", "repulse", "revulsion", "repugnan"], label: "Intense dislike or disgust", hint: "The definition says 'feel intense dislike or disgust' -- much stronger than just disliking." },
    ],
    synonyms: ["detest", "despise", "abhor"],
  },
  {
    word: "mediocre",
    partOfSpeech: "adjective",
    definition: "Of only moderate quality; not very good.",
    keyConcepts: [
      { keyword: "moderate quality", matchTerms: ["moderate quality", "average", "ordinary", "middling", "unremarkable", "unexceptional", "passable", "tolerable", "adequate", "fair", "so-so", "lackluster", "indifferent", "undistinguished", "pedestrian", "second-rate"], label: "Of only moderate quality; not very good", hint: "The definition says 'of only moderate quality; not very good' -- acceptable but nothing special." },
    ],
    synonyms: ["average", "ordinary", "lackluster"],
  },
  {
    word: "naive",
    partOfSpeech: "adjective",
    definition: "Showing a lack of experience, wisdom, or judgment; innocent and unsophisticated.",
    keyConcepts: [
      { keyword: "lack of experience", matchTerms: ["lack of experience", "inexperienc", "unworldly", "unsophisticat", "simple", "guileless", "innocent", "green", "raw", "sheltered", "artless", "credulous", "trusting", "gullible"], label: "Lacking experience or wisdom", hint: "The definition says 'showing a lack of experience, wisdom, or judgment' -- not yet worldly enough to know better." },
    ],
    synonyms: ["innocent", "unsophisticated", "inexperienced"],
  },
  {
    word: "overt",
    partOfSpeech: "adjective",
    definition: "Done or shown openly; plainly or readily apparent, not secret or hidden.",
    keyConcepts: [
      { keyword: "done openly", matchTerms: ["openly", "open", "public", "visible", "apparent", "obvious", "plain", "clear", "manifest", "undisguised", "unconcealed", "blatant", "explicit", "transparent"], label: "Done openly; apparent", hint: "The definition says 'done or shown openly; plainly or readily apparent' -- nothing hidden." },
    ],
    synonyms: ["open", "obvious", "explicit"],
  },
  {
    word: "permeate",
    partOfSpeech: "verb",
    definition: "To spread throughout something; to pervade.",
    keyConcepts: [
      { keyword: "spread throughout", matchTerms: ["spread throughout", "pervade", "penetrate", "percolat", "infuse", "suffuse", "saturate", "fill", "seep", "soak", "diffuse", "infiltrat", "imbue", "extend through", "pass through"], label: "Spread throughout; pervade", hint: "The definition says 'spread throughout something; pervade' -- getting into every part." },
    ],
    synonyms: ["pervade", "penetrate", "suffuse"],
  },
  {
    word: "rebuke",
    partOfSpeech: "verb",
    definition: "To express sharp disapproval or criticism of someone because of their behavior.",
    keyConcepts: [
      { keyword: "sharp disapproval", matchTerms: ["sharp disapproval", "criticism", "criticiz", "reproach", "reprimand", "admonish", "scold", "censure", "chastis", "berate", "condemn", "upbraid", "chide", "lambast"], label: "Express sharp disapproval", hint: "The definition says 'express sharp disapproval or criticism' -- a firm, pointed correction." },
      { keyword: "because of behavior", matchTerms: ["behavior", "conduct", "action", "deed", "wrongdoing", "misbehavior", "fault", "transgression", "offense", "mistake"], label: "Because of their behavior", hint: "The definition says 'because of their behavior' -- the rebuke is a response to something specific they did." },
    ],
    synonyms: ["reprimand", "scold", "admonish"],
  },
  {
    word: "solemn",
    partOfSpeech: "adjective",
    definition: "Formal and dignified; serious and without humor.",
    keyConcepts: [
      { keyword: "formal and dignified", matchTerms: ["formal", "dignified", "ceremonial", "stately", "majestic", "grand", "august", "imposing", "reverent", "ritual"], label: "Formal and dignified", hint: "The definition says 'formal and dignified' -- carrying weight and gravity." },
      { keyword: "serious", matchTerms: ["serious", "sober", "somber", "grave", "earnest", "stern", "grim", "unsmiling", "humorless", "no humor", "without humor", "no-nonsense", "sedate"], label: "Serious and without humor", hint: "The definition says 'serious and without humor' -- no lightness or levity." },
    ],
    synonyms: ["serious", "grave", "sober"],
  },
  {
    word: "terse",
    partOfSpeech: "adjective",
    definition: "Sparing in the use of words; abrupt or curt.",
    keyConcepts: [
      { keyword: "sparing in words", matchTerms: ["sparing", "few words", "brief", "short", "concise", "succinct", "laconic", "pithy", "clipped", "economical", "minimal"], label: "Sparing in words", hint: "The definition says 'sparing in the use of words' -- extremely brief." },
      { keyword: "abrupt", matchTerms: ["abrupt", "curt", "brusque", "blunt", "sharp", "snappy", "gruff", "unfriendly", "cold", "dismissive", "rude"], label: "Abrupt or curt", hint: "The definition says 'abrupt or curt' -- so brief it can feel unfriendly." },
    ],
    synonyms: ["concise", "curt", "laconic"],
  },
  {
    word: "uniform",
    partOfSpeech: "adjective",
    definition: "Not changing in form or character; remaining the same in all cases and at all times.",
    keyConcepts: [
      { keyword: "not changing", matchTerms: ["not changing", "consistent", "constant", "unchanging", "steady", "stable", "invariable", "even", "regular", "unvarying", "homogeneous", "identical", "same", "standard"], label: "Not changing; remaining the same", hint: "The definition says 'not changing in form or character; remaining the same' -- completely consistent throughout." },
    ],
    synonyms: ["consistent", "constant", "unchanging"],
  },
  {
    word: "adept",
    partOfSpeech: "adjective",
    definition: "Very skilled or proficient at something.",
    keyConcepts: [
      { keyword: "very skilled", matchTerms: ["very skilled", "proficient", "expert", "masterful", "accomplished", "talented", "gifted", "capable", "competent", "deft", "dexterous", "practiced", "seasoned", "polished", "virtuoso"], label: "Very skilled or proficient", hint: "The definition says 'very skilled or proficient' -- having a high level of ability." },
    ],
    synonyms: ["skilled", "proficient", "expert"],
  },
  {
    word: "concur",
    partOfSpeech: "verb",
    definition: "To be of the same opinion; to agree.",
    keyConcepts: [
      { keyword: "same opinion", matchTerms: ["same opinion", "agree", "accord", "concur", "consensus", "aligned", "in harmony", "see eye to eye", "like-minded", "unanimous", "assent", "consent", "endors", "affirm", "support"], label: "Same opinion; agree", hint: "The definition says 'be of the same opinion; agree' -- thinking alike." },
    ],
    synonyms: ["agree", "accord", "assent"],
  },
  {
    word: "forthright",
    partOfSpeech: "adjective",
    definition: "Direct and outspoken; straightforward and honest.",
    keyConcepts: [
      { keyword: "direct and outspoken", matchTerms: ["direct", "outspoken", "straightforward", "honest", "candid", "frank", "open", "plainspoken", "blunt", "upfront", "transparent", "forthcoming", "unreserved"], label: "Direct and outspoken; honest", hint: "The definition says 'direct and outspoken; straightforward and honest' -- saying what you mean without beating around the bush." },
    ],
    synonyms: ["candid", "frank", "direct"],
  },
  {
    word: "herald",
    partOfSpeech: "verb",
    definition: "To be a sign that something is about to happen; to announce or signal the approach of.",
    keyConcepts: [
      { keyword: "sign of something coming", matchTerms: ["sign", "signal", "announce", "indicate", "foreshadow", "portend", "presage", "foretell", "predict", "harbinger", "precursor", "usher in", "mark", "herald"], label: "Signal the approach of", hint: "The definition says 'be a sign that something is about to happen' -- foreshadowing what's next." },
    ],
    synonyms: ["announce", "signal", "foreshadow"],
  },
  {
    word: "lethargic",
    partOfSpeech: "adjective",
    definition: "Affected by lethargy; sluggish and apathetic.",
    keyConcepts: [
      { keyword: "sluggish", matchTerms: ["sluggish", "slow", "lazy", "listless", "languid", "torpid", "drowsy", "inactive", "inert", "tired", "fatigued", "weary", "lethargic", "enervat"], label: "Sluggish", hint: "The definition says 'sluggish' -- moving and thinking slowly." },
      { keyword: "apathetic", matchTerms: ["apathetic", "indifferent", "uninterested", "unmotivated", "passive", "disengag", "lifeless", "spiritless", "flat", "dull"], label: "Apathetic", hint: "The definition says 'apathetic' -- lacking the energy to care." },
    ],
    synonyms: ["sluggish", "listless", "apathetic"],
  },
  {
    word: "meander",
    partOfSpeech: "verb",
    definition: "To follow a winding course; to wander at random without direction.",
    keyConcepts: [
      { keyword: "winding course", matchTerms: ["winding", "course", "twisting", "curving", "serpentine", "zigzag", "circuitous", "sinuous", "snaking", "rambling"], label: "Follow a winding course", hint: "The definition says 'follow a winding course' -- not going straight." },
      { keyword: "wander without direction", matchTerms: ["wander", "random", "without direction", "aimless", "roam", "drift", "stroll", "amble", "ramble", "dawdle", "mosey", "saunter"], label: "Wander without direction", hint: "The definition says 'wander at random without direction' -- moving with no particular destination." },
    ],
    synonyms: ["wander", "ramble", "drift"],
  },
  {
    word: "negate",
    partOfSpeech: "verb",
    definition: "To nullify; to make ineffective or invalid.",
    keyConcepts: [
      { keyword: "nullify", matchTerms: ["nullify", "void", "cancel", "invalidat", "annul", "revoke", "repeal", "overturn", "undo", "reverse", "counteract", "neutraliz", "wipe out", "eliminat"], label: "Nullify; make ineffective", hint: "The definition says 'to nullify; make ineffective or invalid' -- completely canceling something out." },
    ],
    synonyms: ["nullify", "invalidate", "counteract"],
  },
  {
    word: "pertinent",
    partOfSpeech: "adjective",
    definition: "Relevant or applicable to a particular matter; apposite.",
    keyConcepts: [
      { keyword: "relevant", matchTerms: ["relevant", "applicable", "pertinent", "appropriate", "fitting", "suitable", "related", "connected", "germane", "material", "significant", "important", "to the point", "apropos"], label: "Relevant or applicable", hint: "The definition says 'relevant or applicable to a particular matter' -- directly related and useful." },
    ],
    synonyms: ["relevant", "applicable", "germane"],
  },
  {
    word: "mingle",
    partOfSpeech: "verb",
    definition: "To mix or cause to mix together; to move around and talk to people at a social event.",
    keyConcepts: [
      { keyword: "mix together", matchTerms: ["mix", "blend", "combin", "merg", "intermingle", "fuse", "amalgamat", "integrat"], label: "Mix together", hint: "The definition says 'mix or cause to mix together' -- things become intertwined." },
      { keyword: "socialize", matchTerms: ["social", "talk", "people", "interact", "convers", "network", "circulate", "chat", "gather", "party", "event"], label: "Socialize at an event", hint: "The definition says 'move around and talk to people at a social event' -- engaging with others in a group." },
    ],
    synonyms: ["mix", "socialize", "circulate"],
  },
  {
    word: "outweigh",
    partOfSpeech: "verb",
    definition: "To be heavier than; to be greater or more significant than.",
    keyConcepts: [
      { keyword: "greater or more significant", matchTerms: ["greater", "more significant", "more important", "exceed", "surpass", "outdo", "override", "predominat", "eclipse", "overshadow", "trump", "prevail"], label: "Be greater or more significant", hint: "The definition says 'be greater or more significant than' -- one side carries more weight." },
    ],
    synonyms: ["exceed", "surpass", "override"],
  },
  {
    word: "pamper",
    partOfSpeech: "verb",
    definition: "To indulge with every attention, comfort, and kindness; to spoil.",
    keyConcepts: [
      { keyword: "indulge", matchTerms: ["indulg", "spoil", "coddle", "cosset", "dote", "baby", "cater", "lavish", "treat", "shower", "humor", "gratif"], label: "Indulge with attention and comfort", hint: "The definition says 'indulge with every attention, comfort, and kindness' -- giving someone excessive care." },
    ],
    synonyms: ["spoil", "indulge", "coddle"],
  },
  {
    word: "relish",
    partOfSpeech: "verb",
    definition: "To enjoy greatly; to take great pleasure in.",
    keyConcepts: [
      { keyword: "enjoy greatly", matchTerms: ["enjoy", "pleasure", "delight", "savor", "savour", "love", "revel", "appreciat", "treasure", "cherish", "adore", "bask"], label: "Enjoy greatly; take pleasure in", hint: "The definition says 'enjoy greatly; take great pleasure in' -- savoring the experience." },
    ],
    synonyms: ["enjoy", "savor", "delight in"],
  },
  {
    word: "stumble",
    partOfSpeech: "verb",
    definition: "To trip or momentarily lose one's balance; to make a mistake or repeated mistakes.",
    keyConcepts: [
      { keyword: "trip or lose balance", matchTerms: ["trip", "lose balance", "fall", "stagger", "falter", "wobble", "lurch", "teeter", "totter", "misstep", "slip"], label: "Trip or lose balance", hint: "The definition says 'trip or momentarily lose one's balance' -- physically unsteady." },
      { keyword: "make mistakes", matchTerms: ["mistake", "error", "blunder", "fumble", "falter", "bungle", "botch", "flounder", "struggle", "err"], label: "Make a mistake", hint: "The definition says 'make a mistake or repeated mistakes' -- figuratively faltering." },
    ],
    synonyms: ["trip", "falter", "blunder"],
  },
  {
    word: "tedious",
    partOfSpeech: "adjective",
    definition: "Too long, slow, or dull; tiresome or monotonous.",
    keyConcepts: [
      { keyword: "too long or slow", matchTerms: ["long", "slow", "dragging", "drawn-out", "prolonged", "interminable", "endless", "lengthy", "protracted"], label: "Too long or slow", hint: "The definition says 'too long, slow, or dull' -- it goes on and on." },
      { keyword: "tiresome", matchTerms: ["tiresome", "monotonous", "boring", "dull", "wearisome", "dreary", "humdrum", "repetitive", "unexciting", "tedious", "mundane", "uninteresting"], label: "Tiresome or monotonous", hint: "The definition says 'tiresome or monotonous' -- painfully uninteresting." },
    ],
    synonyms: ["boring", "monotonous", "tiresome"],
  },
  {
    word: "uptight",
    partOfSpeech: "adjective",
    definition: "Anxious or angry in a tense and overly controlled way.",
    keyConcepts: [
      { keyword: "anxious or angry", matchTerms: ["anxious", "angry", "nervous", "stressed", "tense", "worried", "agitated", "edgy", "irritable", "frustrated", "uneasy"], label: "Anxious or angry", hint: "The definition says 'anxious or angry' -- a state of heightened negative emotion." },
      { keyword: "overly controlled", matchTerms: ["overly controlled", "rigid", "stiff", "repressed", "constrained", "inhibited", "wound up", "on edge", "high-strung", "prim", "formal"], label: "Tense and overly controlled", hint: "The definition says 'in a tense and overly controlled way' -- they keep everything bottled up tight." },
    ],
    synonyms: ["tense", "anxious", "stressed"],
  },
  {
    word: "vanquish",
    partOfSpeech: "verb",
    definition: "To defeat thoroughly in a battle, contest, or conflict.",
    keyConcepts: [
      { keyword: "defeat thoroughly", matchTerms: ["defeat", "conquer", "overcome", "subdue", "crush", "overpower", "rout", "trounce", "demolish", "annihilat", "beat", "triumph", "prevail", "master", "subjugat"], label: "Defeat thoroughly", hint: "The definition says 'defeat thoroughly' -- a total, decisive victory." },
    ],
    synonyms: ["conquer", "defeat", "overcome"],
  },
  {
    word: "adhere",
    partOfSpeech: "verb",
    definition: "To stick fast to a surface or substance; to follow or support a rule, belief, or person closely.",
    keyConcepts: [
      { keyword: "stick to", matchTerms: ["stick", "cling", "bond", "attach", "bind", "grip", "fix", "fasten", "hold", "affix", "glue"], label: "Stick fast to a surface", hint: "The definition says 'stick fast to a surface' -- physically clinging." },
      { keyword: "follow or support", matchTerms: ["follow", "support", "obey", "observe", "abide", "comply", "conform", "respect", "uphold", "maintain", "keep to", "stand by", "be faithful"], label: "Follow a rule or belief closely", hint: "The definition says 'follow or support a rule, belief, or person closely' -- staying committed." },
    ],
    synonyms: ["stick", "follow", "comply"],
  },
  {
    word: "blunt",
    partOfSpeech: "adjective",
    definition: "Having a worn-down edge or point; not sharp. Uncompromisingly forthright in manner or speech.",
    keyConcepts: [
      { keyword: "not sharp", matchTerms: ["not sharp", "dull", "worn", "rounded", "flat", "smooth", "thick"], label: "Not sharp; dull edge", hint: "The definition says 'having a worn-down edge or point; not sharp' -- the opposite of sharp." },
      { keyword: "forthright", matchTerms: ["forthright", "direct", "frank", "candid", "straightforward", "outspoken", "plain-spoken", "brusque", "curt", "tactless", "undiplomatic", "abrupt", "honest", "bluff"], label: "Uncompromisingly forthright", hint: "The definition says 'uncompromisingly forthright in manner or speech' -- saying things directly, sometimes to the point of rudeness." },
    ],
    synonyms: ["dull", "frank", "direct"],
  },
  {
    word: "dwindle",
    partOfSpeech: "verb",
    definition: "To diminish gradually in size, amount, or strength.",
    keyConcepts: [
      { keyword: "diminish gradually", matchTerms: ["diminish", "gradually", "shrink", "decrease", "declin", "lessen", "wane", "fade", "ebb", "taper", "drop", "reduc", "dwindl", "peter out", "slowly", "little by little"], label: "Diminish gradually", hint: "The definition says 'diminish gradually in size, amount, or strength' -- a slow, steady shrinking." },
    ],
    synonyms: ["diminish", "shrink", "decline"],
  },
  {
    word: "feeble",
    partOfSpeech: "adjective",
    definition: "Lacking physical strength, especially as a result of age or illness; weak and without energy or force.",
    keyConcepts: [
      { keyword: "lacking strength", matchTerms: ["lacking strength", "weak", "frail", "fragile", "infirm", "delicate", "faint", "powerless", "helpless", "impotent", "puny", "slight"], label: "Lacking physical strength", hint: "The definition says 'lacking physical strength' -- barely able to exert any force." },
      { keyword: "age or illness", matchTerms: ["age", "illness", "sick", "old", "elderly", "decrepit", "debilitat", "ailing", "unwell", "deteriorat"], label: "Especially from age or illness", hint: "The definition says 'especially as a result of age or illness' -- feebleness often comes from physical decline." },
    ],
    synonyms: ["weak", "frail", "infirm"],
  },
  {
    word: "glimpse",
    partOfSpeech: "noun",
    definition: "A momentary or partial view; a brief and incomplete look at something.",
    keyConcepts: [
      { keyword: "momentary view", matchTerms: ["momentary", "brief", "quick", "fleeting", "short", "passing", "flash", "instant", "glance", "peek", "glimpse"], label: "Momentary or brief", hint: "The definition says 'momentary or partial view' -- it happens fast." },
      { keyword: "partial or incomplete", matchTerms: ["partial", "incomplete", "limited", "fragment", "hint", "taste", "preview", "sneak peek", "snapshot", "impression", "fleeting", "brief", "momentary", "quick", "passing", "short", "flash", "transient", "cursory", "hasty", "glance"], label: "Partial or incomplete look", hint: "The definition says 'a brief and incomplete look' -- you don't see the whole picture." },
    ],
    synonyms: ["glance", "peek", "look"],
  },
  {
    word: "populate",
    partOfSpeech: "verb",
    definition: "To inhabit or fill a place with people or inhabitants; to add data to a database or form.",
    keyConcepts: [
      { keyword: "inhabit", matchTerms: ["inhabit", "live", "dwell", "reside", "settle", "occupy", "coloniz", "fill"], label: "Inhabit or fill with people", hint: "The definition says 'inhabit or fill a place with people' -- establishing a presence." },
      { keyword: "add data", matchTerms: ["data", "fill in", "enter", "input", "add", "insert", "load", "database", "form", "field"], label: "Add data to something", hint: "The definition also means 'add data to a database or form' -- filling in information." },
    ],
    synonyms: ["inhabit", "settle", "fill", "occupy"],
  },
  {
    word: "terrestrial",
    partOfSpeech: "adjective",
    definition: "Of or relating to the earth or land, as opposed to water, air, or space.",
    keyConcepts: [
      { keyword: "earth or land", matchTerms: ["earth", "land", "ground", "soil", "terra", "worldly", "planet", "globe"], label: "Relating to earth or land", hint: "The definition says 'of or relating to the earth or land' -- grounded, not aquatic or aerial." },
      { keyword: "not water or space", matchTerms: ["not water", "not air", "not space", "opposed to", "versus", "land-based", "ground-based", "earthbound", "earthly"], label: "As opposed to water, air, or space", hint: "The definition contrasts with water, air, or space -- specifically land-dwelling or earth-bound." },
    ],
    synonyms: ["earthly", "land-based", "worldly", "ground"],
  },
  {
    word: "turbulent",
    partOfSpeech: "adjective",
    definition: "Characterized by conflict, disorder, or confusion; moving violently or unsteadily.",
    keyConcepts: [
      { keyword: "conflict or disorder", matchTerms: ["conflict", "disorder", "chaos", "turmoil", "upheaval", "unrest", "confusion", "tumultuous", "stormy", "volatile", "unstable"], label: "Conflict, disorder, or confusion", hint: "The definition says 'characterized by conflict, disorder, or confusion' -- not calm or peaceful." },
      { keyword: "moving violently", matchTerms: ["violent", "unsteady", "rough", "choppy", "agitat", "wild", "fierce", "tempestuous", "bumpy", "rocky", "hectic"], label: "Moving violently or unsteadily", hint: "The definition says 'moving violently or unsteadily' -- physically rough movement." },
    ],
    synonyms: ["chaotic", "stormy", "volatile", "tumultuous", "rough"],
  },
  {
    word: "aromatic",
    partOfSpeech: "adjective",
    definition: "Having a pleasant and distinctive smell; fragrant.",
    keyConcepts: [
      { keyword: "pleasant smell", matchTerms: ["pleasant", "nice", "good", "sweet", "lovely", "delightful", "pleasing"], label: "Pleasant smell", hint: "The definition says 'pleasant and distinctive smell' -- it smells good." },
      { keyword: "fragrant", matchTerms: ["fragran", "smell", "scent", "aroma", "odor", "perfum", "redolen"], label: "Fragrant or distinctive scent", hint: "The definition says 'fragrant' -- having a noticeable, appealing odor." },
    ],
    synonyms: ["fragrant", "scented", "perfumed", "sweet-smelling"],
  },
  {
    word: "deceptive",
    partOfSpeech: "adjective",
    definition: "Giving an appearance or impression different from the true one; misleading.",
    keyConcepts: [
      { keyword: "different from true", matchTerms: ["different", "false", "untrue", "not true", "contrary", "opposite", "wrong impression"], label: "Different from the truth", hint: "The definition says 'different from the true one' -- not what it seems." },
      { keyword: "misleading", matchTerms: ["mislead", "deceiv", "trick", "fool", "illusion", "delud", "confus", "dishonest", "fraudulent"], label: "Misleading", hint: "The definition says 'misleading' -- causing someone to believe something false." },
    ],
    synonyms: ["misleading", "deceiving", "false", "illusory", "dishonest"],
  },
  {
    word: "deceitful",
    partOfSpeech: "adjective",
    definition: "Guilty of or involving deceit; deliberately misleading or dishonest.",
    keyConcepts: [
      { keyword: "involving deceit", matchTerms: ["deceit", "deceiv", "lie", "lying", "dishonest", "fraud", "cheat", "trick"], label: "Involving deceit", hint: "The definition says 'guilty of or involving deceit' -- actively practicing deception." },
      { keyword: "deliberately misleading", matchTerms: ["deliberat", "intentional", "purposeful", "mislead", "dishonest", "untruthful", "false", "duplicitous", "two-faced"], label: "Deliberately misleading", hint: "The definition says 'deliberately misleading or dishonest' -- it's intentional, not accidental." },
    ],
    synonyms: ["dishonest", "lying", "fraudulent", "duplicitous", "untruthful"],
  },
  {
    word: "abolish",
    partOfSpeech: "verb",
    definition: "To formally put an end to a system, practice, or institution.",
    keyConcepts: [
      { keyword: "formally end", matchTerms: ["formal", "official", "legal", "end", "terminat", "stop", "cease", "eliminat", "eradicat", "do away with", "get rid of"], label: "Formally put an end to", hint: "The definition says 'formally put an end to' -- an official, deliberate termination." },
      { keyword: "system or institution", matchTerms: ["system", "practice", "institution", "law", "rule", "custom", "tradition", "policy", "slavery", "regulation"], label: "A system, practice, or institution", hint: "The definition applies to 'a system, practice, or institution' -- something established." },
    ],
    synonyms: ["eliminate", "end", "eradicate", "annul", "repeal"],
  },
  {
    word: "courting",
    partOfSpeech: "verb",
    definition: "Pursuing a romantic relationship with someone; seeking to win favor or support.",
    keyConcepts: [
      { keyword: "romantic pursuit", matchTerms: ["romantic", "romance", "love", "woo", "date", "dating", "relationship", "attract", "pursue", "seduc", "flirt"], label: "Pursuing romantically", hint: "The definition says 'pursuing a romantic relationship' -- trying to win someone's affection." },
      { keyword: "seeking favor", matchTerms: ["favor", "support", "approv", "win over", "seek", "curry", "cultivat", "pursue", "attract"], label: "Seeking favor or support", hint: "The definition also says 'seeking to win favor or support' -- trying to gain approval." },
    ],
    synonyms: ["wooing", "pursuing", "dating", "romancing"],
  },
  {
    word: "despondent",
    partOfSpeech: "adjective",
    definition: "In low spirits from loss of hope or courage; dejected and disheartened.",
    keyConcepts: [
      { keyword: "low spirits", matchTerms: ["low spirits", "sad", "unhappy", "depress", "down", "gloomy", "melanchol", "sorrow", "miserable", "glum"], label: "In low spirits", hint: "The definition says 'in low spirits' -- feeling emotionally down." },
      { keyword: "loss of hope", matchTerms: ["hope", "hopeless", "discourag", "despair", "deject", "dishearten", "defeatist", "pessimist", "courage", "give up"], label: "Loss of hope or courage", hint: "The definition says 'from loss of hope or courage' -- feeling defeated." },
    ],
    synonyms: ["dejected", "disheartened", "hopeless", "depressed", "downcast"],
  },
  {
    word: "barrage",
    partOfSpeech: "noun",
    definition: "A concentrated outpouring or overwhelming quantity of something; heavy artillery fire.",
    keyConcepts: [
      { keyword: "concentrated outpouring", matchTerms: ["concentrat", "outpour", "flood", "torrent", "stream", "deluge", "shower", "volley", "burst", "wave", "bombardment"], label: "Concentrated outpouring", hint: "The definition says 'concentrated outpouring' -- a lot coming at once." },
      { keyword: "overwhelming quantity", matchTerms: ["overwhelm", "quantity", "mass", "multitude", "abundance", "excess", "barrage", "onslaught", "assault", "attack"], label: "Overwhelming quantity", hint: "The definition says 'overwhelming quantity of something' -- too much to handle." },
    ],
    synonyms: ["bombardment", "volley", "torrent", "deluge", "onslaught"],
  },
  {
    word: "perpetual",
    partOfSpeech: "adjective",
    definition: "Never ending or changing; occurring repeatedly without interruption.",
    keyConcepts: [
      { keyword: "never ending", matchTerms: ["never end", "endless", "eternal", "everlast", "permanent", "forever", "infinite", "constant", "continuous"], label: "Never ending", hint: "The definition says 'never ending or changing' -- it goes on indefinitely." },
      { keyword: "without interruption", matchTerms: ["without interrupt", "continuous", "unceasing", "uninterrupt", "constant", "persistent", "relentless", "incessant", "recurring", "repeated"], label: "Without interruption", hint: "The definition says 'occurring repeatedly without interruption' -- it keeps happening." },
    ],
    synonyms: ["eternal", "endless", "everlasting", "constant", "continuous"],
  },
  {
    word: "amnesia",
    partOfSpeech: "noun",
    definition: "A partial or total loss of memory, especially due to brain injury, shock, or illness.",
    keyConcepts: [
      { keyword: "loss of memory", matchTerms: ["loss", "lose", "lost", "memory", "memories", "forget", "forgotten", "recall", "remember"], label: "Loss of memory", hint: "The definition says 'partial or total loss of memory' -- unable to remember." },
      { keyword: "brain injury or shock", matchTerms: ["brain", "injury", "shock", "trauma", "illness", "accident", "damage", "medical", "condition"], label: "Due to injury, shock, or illness", hint: "The definition says 'due to brain injury, shock, or illness' -- there's a medical cause." },
    ],
    synonyms: ["memory loss", "forgetfulness", "blackout"],
  },
  {
    word: "panoramic",
    partOfSpeech: "adjective",
    definition: "Showing a wide, unobstructed view of an extensive area; comprehensive in scope.",
    keyConcepts: [
      { keyword: "wide view", matchTerms: ["wide", "broad", "expansive", "extensive", "sweeping", "vast", "open", "unobstruct", "clear", "view", "vista", "landscape"], label: "Wide, unobstructed view", hint: "The definition says 'wide, unobstructed view' -- you can see a lot." },
      { keyword: "comprehensive", matchTerms: ["comprehensiv", "complete", "thorough", "all-encompass", "full", "overall", "broad", "inclusive"], label: "Comprehensive in scope", hint: "The definition says 'comprehensive in scope' -- covering everything broadly." },
    ],
    synonyms: ["sweeping", "extensive", "wide", "comprehensive", "broad"],
  },
  {
    word: "botanical",
    partOfSpeech: "adjective",
    definition: "Of or relating to plants or the scientific study of plants.",
    keyConcepts: [
      { keyword: "relating to plants", matchTerms: ["plant", "plants", "flora", "vegetation", "herb", "flower", "tree", "leaf", "garden", "green", "nature", "organic"], label: "Relating to plants", hint: "The definition says 'of or relating to plants' -- concerning plant life." },
      { keyword: "scientific study", matchTerms: ["scien", "study", "botany", "biology", "research", "academic", "classification", "species"], label: "Scientific study of plants", hint: "The definition says 'scientific study of plants' -- botany as a discipline." },
    ],
    synonyms: ["plant-related", "herbal", "floral", "vegetable"],
  },
  {
    word: "immunization",
    partOfSpeech: "noun",
    definition: "The process of making a person or animal immune to infection, typically by vaccination.",
    keyConcepts: [
      { keyword: "making immune", matchTerms: ["immune", "immunity", "protect", "defense", "resist", "prevention", "safeguard"], label: "Making immune", hint: "The definition says 'making a person or animal immune to infection' -- building protection." },
      { keyword: "vaccination", matchTerms: ["vaccin", "shot", "inject", "inoculat", "jab", "dose", "needle", "medical"], label: "Typically by vaccination", hint: "The definition says 'typically by vaccination' -- the method of achieving immunity." },
    ],
    synonyms: ["vaccination", "inoculation", "protection"],
  },
  {
    word: "reluctant",
    partOfSpeech: "adjective",
    definition: "Unwilling and hesitant; disinclined to do something.",
    keyConcepts: [
      { keyword: "unwilling", matchTerms: ["unwilling", "not willing", "resist", "opposed", "against", "averse", "loath", "disinclined"], label: "Unwilling", hint: "The definition says 'unwilling' -- not wanting to do it." },
      { keyword: "hesitant", matchTerms: ["hesitan", "uncertain", "unsure", "doubtful", "wary", "cautious", "slow", "reticent", "hold back"], label: "Hesitant", hint: "The definition says 'hesitant' -- showing doubt or uncertainty about proceeding." },
    ],
    synonyms: ["unwilling", "hesitant", "disinclined", "loath", "averse"],
  },
  {
    word: "poised",
    partOfSpeech: "adjective",
    definition: "Having a composed and self-assured manner; ready and prepared for action.",
    keyConcepts: [
      { keyword: "composed", matchTerms: ["compos", "calm", "self-assured", "confident", "dignified", "graceful", "elegant", "collected", "balanced", "serene"], label: "Composed and self-assured", hint: "The definition says 'composed and self-assured manner' -- showing calm confidence." },
      { keyword: "ready", matchTerms: ["ready", "prepar", "set", "position", "about to", "on the verge", "brink", "waiting"], label: "Ready for action", hint: "The definition says 'ready and prepared for action' -- positioned to act." },
    ],
    synonyms: ["composed", "self-assured", "ready", "prepared", "graceful"],
  },
  {
    word: "capable",
    partOfSpeech: "adjective",
    definition: "Having the ability, fitness, or quality necessary to do or achieve something.",
    keyConcepts: [
      { keyword: "having ability", matchTerms: ["abil", "able", "can", "competent", "skilled", "proficient", "qualified", "talented"], label: "Having ability", hint: "The definition says 'having the ability' -- possessing the necessary skills." },
      { keyword: "achieve something", matchTerms: ["achieve", "accomplish", "do", "perform", "complete", "succeed", "attain", "manage"], label: "To achieve something", hint: "The definition says 'to do or achieve something' -- able to get results." },
    ],
    synonyms: ["able", "competent", "skilled", "proficient", "qualified"],
  },
  {
    word: "heritage",
    partOfSpeech: "noun",
    definition: "Property, traditions, or features that are passed down from previous generations.",
    keyConcepts: [
      { keyword: "passed down", matchTerms: ["pass", "inherit", "hand down", "transmit", "bequeath", "legacy", "ancestral", "generational"], label: "Passed down", hint: "The definition says 'passed down from previous generations' -- inherited from the past." },
      { keyword: "traditions or features", matchTerms: ["tradition", "custom", "culture", "history", "property", "estate", "feature", "characteristic", "value", "belief"], label: "Traditions or features", hint: "The definition includes 'property, traditions, or features' -- tangible or intangible inheritance." },
    ],
    synonyms: ["inheritance", "legacy", "tradition", "birthright"],
  },
  {
    word: "jovial",
    partOfSpeech: "adjective",
    definition: "Cheerful and friendly; characterized by good humor and hearty enjoyment.",
    keyConcepts: [
      { keyword: "cheerful", matchTerms: ["cheerful", "happy", "merry", "jolly", "joyful", "upbeat", "bright", "sunny", "buoyant"], label: "Cheerful and friendly", hint: "The definition says 'cheerful and friendly' -- a warm, positive demeanor." },
      { keyword: "good humor", matchTerms: ["humor", "humour", "laugh", "fun", "hearty", "enjoy", "convivial", "genial", "good-natured", "amiable"], label: "Good humor", hint: "The definition says 'characterized by good humor' -- enjoying life with others." },
    ],
    synonyms: ["cheerful", "jolly", "merry", "convivial", "genial"],
  },
  {
    word: "deplorable",
    partOfSpeech: "adjective",
    definition: "Deserving strong condemnation; shockingly bad in quality.",
    keyConcepts: [
      { keyword: "deserving condemnation", matchTerms: ["condemn", "disgrace", "shameful", "reprehen", "inexcusable", "unacceptable", "outrageous", "scandal"], label: "Deserving condemnation", hint: "The definition says 'deserving strong condemnation' -- morally wrong or unacceptable." },
      { keyword: "shockingly bad", matchTerms: ["shock", "terrible", "awful", "dreadful", "appalling", "wretched", "miserable", "lamentable", "abysmal", "dire"], label: "Shockingly bad", hint: "The definition says 'shockingly bad in quality' -- extremely poor." },
    ],
    synonyms: ["disgraceful", "shameful", "appalling", "lamentable", "wretched"],
  },
  {
    word: "intersect",
    partOfSpeech: "verb",
    definition: "To divide something by passing or lying across it; to meet and cross at a point.",
    keyConcepts: [
      { keyword: "divide by crossing", matchTerms: ["divid", "cross", "cut", "pass through", "traverse", "bisect", "split"], label: "Divide by crossing", hint: "The definition says 'divide something by passing or lying across it' -- cutting through." },
      { keyword: "meet at a point", matchTerms: ["meet", "converge", "join", "connect", "overlap", "point", "junction", "crossing"], label: "Meet and cross", hint: "The definition says 'meet and cross at a point' -- coming together at an intersection." },
    ],
    synonyms: ["cross", "bisect", "meet", "converge", "overlap"],
  },
  {
    word: "drawl",
    partOfSpeech: "verb/noun",
    definition: "To speak in a slow, lazy way with prolonged vowel sounds.",
    keyConcepts: [
      { keyword: "speak slowly", matchTerms: ["slow", "lazy", "leisur", "unhurried", "relaxed", "languid", "sluggish"], label: "Speak slowly", hint: "The definition says 'speak in a slow, lazy way' -- unhurried speech." },
      { keyword: "prolonged sounds", matchTerms: ["prolong", "stretch", "extend", "drag", "lengthen", "vowel", "drawn-out", "elongat"], label: "Prolonged vowel sounds", hint: "The definition says 'with prolonged vowel sounds' -- stretching out the words." },
    ],
    synonyms: ["drone", "speak slowly"],
  },
  {
    word: "redemption",
    partOfSpeech: "noun",
    definition: "The action of saving or being saved from sin, error, or evil; the act of regaining possession of something in exchange for payment.",
    keyConcepts: [
      { keyword: "saving from sin", matchTerms: ["sav", "rescu", "deliver", "sin", "error", "evil", "wrong", "fault", "salv", "atonement", "forgiv"], label: "Saving from sin or evil", hint: "The definition says 'saving or being saved from sin, error, or evil' -- deliverance from wrongdoing." },
      { keyword: "regaining possession", matchTerms: ["regain", "recover", "reclaim", "get back", "exchange", "payment", "buy back", "repurchase"], label: "Regaining possession", hint: "The definition says 'regaining possession of something in exchange for payment' -- buying back." },
    ],
    synonyms: ["salvation", "deliverance", "atonement", "recovery"],
  },
  {
    word: "conditional",
    partOfSpeech: "adjective",
    definition: "Subject to one or more conditions being met; not absolute.",
    keyConcepts: [
      { keyword: "subject to conditions", matchTerms: ["subject", "condition", "depend", "contingent", "provision", "stipulat", "requirement", "if", "provided"], label: "Subject to conditions", hint: "The definition says 'subject to one or more conditions being met' -- requires something else first." },
      { keyword: "not absolute", matchTerms: ["not absolute", "qualified", "limited", "restrict", "partial", "uncertain", "tentative"], label: "Not absolute", hint: "The definition says 'not absolute' -- there are strings attached." },
    ],
    synonyms: ["contingent", "dependent", "provisional", "qualified"],
  },
  {
    word: "substantial",
    partOfSpeech: "adjective",
    definition: "Of considerable importance, size, or worth; strongly built or made.",
    keyConcepts: [
      { keyword: "considerable importance", matchTerms: ["consider", "important", "signific", "large", "big", "sizable", "sizeable", "great", "major", "noteworthy", "worth"], label: "Considerable importance or size", hint: "The definition says 'of considerable importance, size, or worth' -- not trivial." },
      { keyword: "strongly built", matchTerms: ["strong", "sturdy", "solid", "robust", "durable", "well-built", "firm", "stable"], label: "Strongly built", hint: "The definition says 'strongly built or made' -- solid construction." },
    ],
    synonyms: ["significant", "considerable", "sizeable", "solid", "sturdy"],
  },
  {
    word: "converse",
    partOfSpeech: "verb",
    definition: "To engage in conversation; to talk with someone.",
    keyConcepts: [
      { keyword: "engage in conversation", matchTerms: ["convers", "talk", "speak", "chat", "discuss", "communicat", "dialogue", "exchange"], label: "Engage in conversation", hint: "The definition says 'engage in conversation' -- verbal interaction." },
      { keyword: "with someone", matchTerms: ["someone", "person", "people", "other", "together", "mutual", "interactive", "social"], label: "With someone", hint: "The definition says 'talk with someone' -- it's a two-way exchange." },
    ],
    synonyms: ["talk", "chat", "speak", "discuss", "communicate"],
  },
  {
    word: "deprive",
    partOfSpeech: "verb",
    definition: "To prevent someone from having or using something; to take away from.",
    keyConcepts: [
      { keyword: "prevent from having", matchTerms: ["prevent", "deny", "refuse", "withhold", "keep from", "stop", "block"], label: "Prevent from having", hint: "The definition says 'prevent someone from having or using something' -- blocking access." },
      { keyword: "take away", matchTerms: ["take away", "remove", "strip", "dispossess", "rob", "bereave", "divest"], label: "Take away", hint: "The definition says 'take away from' -- removing something possessed." },
    ],
    synonyms: ["deny", "strip", "dispossess", "rob", "withhold"],
  },
  {
    word: "dismantle",
    partOfSpeech: "verb",
    definition: "To take apart piece by piece; to destroy the structure of something.",
    keyConcepts: [
      { keyword: "take apart", matchTerms: ["take apart", "disassembl", "break down", "separate", "deconstruct", "strip", "undo"], label: "Take apart", hint: "The definition says 'take apart piece by piece' -- methodical deconstruction." },
      { keyword: "destroy structure", matchTerms: ["destroy", "structure", "demolish", "tear down", "remove", "eliminate", "abolish", "disband"], label: "Destroy structure", hint: "The definition says 'destroy the structure of something' -- ending its organized form." },
    ],
    synonyms: ["disassemble", "demolish", "take apart", "deconstruct"],
  },
  {
    word: "linger",
    partOfSpeech: "verb",
    definition: "To stay in a place longer than necessary; to be slow to disappear or die.",
    keyConcepts: [
      { keyword: "stay longer", matchTerms: ["stay", "remain", "wait", "loiter", "hang around", "tarry", "dawdle", "delay"], label: "Stay longer than necessary", hint: "The definition says 'stay in a place longer than necessary' -- not leaving when expected." },
      { keyword: "slow to disappear", matchTerms: ["slow", "disappear", "fade", "persist", "endure", "last", "continue", "die"], label: "Slow to disappear", hint: "The definition says 'slow to disappear or die' -- persisting beyond expectation." },
    ],
    synonyms: ["loiter", "remain", "tarry", "persist", "dawdle"],
  },
  {
    word: "gravitate",
    partOfSpeech: "verb",
    definition: "To move toward or be attracted to something or someone.",
    keyConcepts: [
      { keyword: "move toward", matchTerms: ["move", "toward", "draw", "pull", "drift", "tend", "incline", "lean"], label: "Move toward", hint: "The definition says 'move toward' -- physical or metaphorical movement." },
      { keyword: "attracted to", matchTerms: ["attract", "drawn", "pull", "magnetism", "affinity", "appeal", "interest"], label: "Attracted to", hint: "The definition says 'be attracted to' -- feeling a pull toward something." },
    ],
    synonyms: ["drift", "tend", "incline", "lean", "be drawn to"],
  },
  {
    word: "usher",
    partOfSpeech: "verb",
    definition: "To show or guide someone somewhere; to cause or mark the start of something new.",
    keyConcepts: [
      { keyword: "guide someone", matchTerms: ["guide", "show", "lead", "escort", "accompany", "direct", "conduct"], label: "Guide someone", hint: "The definition says 'show or guide someone somewhere' -- leading the way." },
      { keyword: "mark the start", matchTerms: ["start", "begin", "introduc", "herald", "initiat", "launch", "bring in", "new"], label: "Mark the start", hint: "The definition says 'cause or mark the start of something new' -- introducing a new era." },
    ],
    synonyms: ["guide", "escort", "lead", "herald", "introduce"],
  },
  {
    word: "capture",
    partOfSpeech: "verb",
    definition: "To take into one's possession or control by force; to record accurately in words or pictures.",
    keyConcepts: [
      { keyword: "take by force", matchTerms: ["take", "seize", "catch", "grab", "trap", "apprehend", "arrest", "possess", "control", "force"], label: "Take by force", hint: "The definition says 'take into one's possession or control by force' -- seizing something." },
      { keyword: "record accurately", matchTerms: ["record", "document", "preserv", "picture", "photograph", "portray", "depict", "convey", "express"], label: "Record accurately", hint: "The definition says 'record accurately in words or pictures' -- preserving a moment." },
    ],
    synonyms: ["seize", "catch", "trap", "record", "preserve"],
  },
  {
    word: "dangle",
    partOfSpeech: "verb",
    definition: "To hang or swing loosely; to offer something enticing to someone.",
    keyConcepts: [
      { keyword: "hang loosely", matchTerms: ["hang", "swing", "sway", "droop", "suspend", "loose", "drap"], label: "Hang loosely", hint: "The definition says 'hang or swing loosely' -- not firmly attached." },
      { keyword: "offer enticingly", matchTerms: ["offer", "entice", "tempt", "lure", "tease", "bait", "tantalize", "wave"], label: "Offer enticingly", hint: "The definition says 'offer something enticing to someone' -- tempting with a reward." },
    ],
    synonyms: ["hang", "swing", "suspend", "dip", "tempt"],
  },
  {
    word: "deposit",
    partOfSpeech: "verb",
    definition: "To put or set down in a specific place; to put money into a bank account.",
    keyConcepts: [
      { keyword: "put down", matchTerms: ["put", "set", "place", "lay", "leave", "drop", "position", "store"], label: "Put down", hint: "The definition says 'put or set down in a specific place' -- placing something somewhere." },
      { keyword: "bank account", matchTerms: ["bank", "account", "money", "fund", "save", "pay in", "credit"], label: "Into bank account", hint: "The definition says 'put money into a bank account' -- financial transaction." },
    ],
    synonyms: ["place", "put", "set down", "store", "bank"],
  },
  {
    word: "envelop",
    partOfSpeech: "verb",
    definition: "To wrap up, cover, or surround completely.",
    keyConcepts: [
      { keyword: "wrap or cover", matchTerms: ["wrap", "cover", "cloak", "shroud", "blanket", "veil", "drape", "sheath"], label: "Wrap or cover", hint: "The definition says 'wrap up, cover' -- enclosing something." },
      { keyword: "surround completely", matchTerms: ["surround", "encircl", "engulf", "enclose", "embrace", "swallow", "enfold", "immerse", "complet"], label: "Surround completely", hint: "The definition says 'surround completely' -- on all sides." },
    ],
    synonyms: ["wrap", "surround", "engulf", "shroud", "cloak"],
  },
  {
    word: "expose",
    partOfSpeech: "verb",
    definition: "To make something visible by uncovering it; to reveal the true nature of something.",
    keyConcepts: [
      { keyword: "make visible", matchTerms: ["visible", "uncover", "reveal", "show", "display", "bare", "open", "unveil"], label: "Make visible", hint: "The definition says 'make something visible by uncovering it' -- removing what hides it." },
      { keyword: "reveal true nature", matchTerms: ["reveal", "true", "nature", "unmask", "disclose", "bring to light", "lay bare", "betray"], label: "Reveal true nature", hint: "The definition says 'reveal the true nature of something' -- showing what's really there." },
    ],
    synonyms: ["reveal", "uncover", "disclose", "unmask", "bare"],
  },
  {
    word: "juggle",
    partOfSpeech: "verb",
    definition: "To continuously toss and catch objects; to cope with by adroitly managing multiple activities.",
    keyConcepts: [
      { keyword: "toss and catch", matchTerms: ["toss", "throw", "catch", "keep in air", "ball", "object", "perform"], label: "Toss and catch", hint: "The definition says 'continuously toss and catch objects' -- the classic circus skill." },
      { keyword: "manage multiple", matchTerms: ["manage", "multiple", "balanc", "handle", "cope", "deal with", "coordinate", "multitask"], label: "Manage multiple activities", hint: "The definition says 'cope with by adroitly managing multiple activities' -- keeping many things going at once." },
    ],
    synonyms: ["balance", "manage", "handle", "coordinate", "multitask"],
  },
  {
    word: "prune",
    partOfSpeech: "verb",
    definition: "To trim a tree or plant by cutting away dead or excess branches; to reduce or remove what is unnecessary.",
    keyConcepts: [
      { keyword: "trim by cutting", matchTerms: ["trim", "cut", "clip", "snip", "shear", "branch", "tree", "plant", "dead", "excess"], label: "Trim by cutting", hint: "The definition says 'trim a tree or plant by cutting away dead or excess branches' -- garden maintenance." },
      { keyword: "reduce unnecessary", matchTerms: ["reduce", "remove", "unnecessary", "eliminate", "pare", "cut back", "streamline", "slim down"], label: "Remove unnecessary", hint: "The definition says 'reduce or remove what is unnecessary' -- making leaner." },
    ],
    synonyms: ["trim", "cut", "clip", "pare", "reduce"],
  },
  {
    word: "advise",
    partOfSpeech: "verb",
    definition: "To offer suggestions about the best course of action; to give counsel or recommendations.",
    keyConcepts: [
      { keyword: "offer suggestions", matchTerms: ["suggest", "recommend", "offer", "propos", "counsel", "guidance", "direction"], label: "Offer suggestions", hint: "The definition says 'offer suggestions about the best course of action' -- helping someone decide." },
      { keyword: "give counsel", matchTerms: ["counsel", "guidance", "advice", "consult", "inform", "guide", "direct", "instruct"], label: "Give counsel", hint: "The definition says 'give counsel or recommendations' -- sharing wisdom." },
    ],
    synonyms: ["recommend", "counsel", "suggest", "guide", "urge"],
  },
  {
    word: "perceive",
    partOfSpeech: "verb",
    definition: "To become aware of through the senses; to understand or interpret in a particular way.",
    keyConcepts: [
      { keyword: "aware through senses", matchTerms: ["aware", "sens", "see", "hear", "feel", "notice", "detect", "observ", "recogniz"], label: "Aware through senses", hint: "The definition says 'become aware of through the senses' -- sensory detection." },
      { keyword: "interpret", matchTerms: ["interpret", "understand", "view", "regard", "consider", "think", "comprehend", "grasp"], label: "Interpret", hint: "The definition says 'understand or interpret in a particular way' -- how you make sense of it." },
    ],
    synonyms: ["sense", "detect", "notice", "observe", "understand"],
  },
  {
    word: "regard",
    partOfSpeech: "verb",
    definition: "To consider or think of in a particular way; to look at steadily.",
    keyConcepts: [
      { keyword: "consider", matchTerms: ["consider", "think", "view", "see", "deem", "judge", "rate", "reckon", "perceive"], label: "Consider", hint: "The definition says 'consider or think of in a particular way' -- forming an opinion." },
      { keyword: "look at steadily", matchTerms: ["look", "gaze", "stare", "watch", "observ", "eye", "view", "steadily"], label: "Look at steadily", hint: "The definition says 'look at steadily' -- attentive observation." },
    ],
    synonyms: ["consider", "view", "see", "deem", "observe"],
  },
  {
    word: "modify",
    partOfSpeech: "verb",
    definition: "To make partial changes to something; to alter without transforming completely.",
    keyConcepts: [
      { keyword: "partial changes", matchTerms: ["change", "alter", "adjust", "adapt", "revise", "amend", "tweak", "partial", "slight"], label: "Partial changes", hint: "The definition says 'make partial changes to something' -- not a complete overhaul." },
      { keyword: "without transforming completely", matchTerms: ["without", "not complet", "maintain", "keep", "preserve", "limit", "moderate", "temper"], label: "Without transforming completely", hint: "The definition says 'alter without transforming completely' -- the essence remains." },
    ],
    synonyms: ["alter", "adjust", "adapt", "change", "revise"],
  },
  {
    word: "refine",
    partOfSpeech: "verb",
    definition: "To remove impurities or unwanted elements; to improve by making small changes.",
    keyConcepts: [
      { keyword: "remove impurities", matchTerms: ["remov", "impur", "unwanted", "purif", "filter", "clean", "process", "distill"], label: "Remove impurities", hint: "The definition says 'remove impurities or unwanted elements' -- purification." },
      { keyword: "improve by small changes", matchTerms: ["improve", "small", "polish", "perfect", "enhance", "fine-tune", "hone", "develop"], label: "Improve by small changes", hint: "The definition says 'improve by making small changes' -- incremental betterment." },
    ],
    synonyms: ["purify", "polish", "improve", "perfect", "hone"],
  },
  {
    word: "adapt",
    partOfSpeech: "verb",
    definition: "To adjust or modify to suit new conditions or purposes.",
    keyConcepts: [
      { keyword: "adjust", matchTerms: ["adjust", "modif", "change", "alter", "tailor", "fit"], label: "Adjust", hint: "The definition says 'adjust or modify' -- making changes." },
      { keyword: "suit new conditions", matchTerms: ["suit", "new", "condition", "purpose", "environment", "situation", "circumstance"], label: "Suit new conditions", hint: "The definition says 'to suit new conditions or purposes' -- fitting a different context." },
    ],
    synonyms: ["adjust", "modify", "acclimate", "conform", "tailor"],
  },
  {
    word: "adequate",
    partOfSpeech: "adjective",
    definition: "Sufficient or satisfactory for a particular purpose; acceptable but not exceptional.",
    keyConcepts: [
      { keyword: "sufficient", matchTerms: ["sufficient", "enough", "satisf", "acceptable", "suitable"], label: "Sufficient", hint: "The definition says 'sufficient or satisfactory' -- meeting the requirement." },
      { keyword: "not exceptional", matchTerms: ["not exceptional", "acceptable", "passable", "tolerable", "decent", "fair"], label: "Not exceptional", hint: "The definition says 'acceptable but not exceptional' -- just good enough." },
    ],
    synonyms: ["sufficient", "satisfactory", "acceptable", "passable", "decent"],
  },
  {
    word: "adverse",
    partOfSpeech: "adjective",
    definition: "Unfavorable or harmful; working against one's interests.",
    keyConcepts: [
      { keyword: "unfavorable", matchTerms: ["unfavor", "negative", "bad", "harmful", "detrimental", "damaging"], label: "Unfavorable", hint: "The definition says 'unfavorable or harmful' -- not good." },
      { keyword: "against interests", matchTerms: ["against", "interest", "oppose", "contrary", "hostile", "disadvantage"], label: "Against interests", hint: "The definition says 'working against one's interests' -- opposing you." },
    ],
    synonyms: ["unfavorable", "harmful", "detrimental", "negative", "hostile"],
  },
  {
    word: "agreeable",
    partOfSpeech: "adjective",
    definition: "Pleasant and enjoyable; willing to agree or consent.",
    keyConcepts: [
      { keyword: "pleasant", matchTerms: ["pleasant", "enjoy", "nice", "pleasing", "delightful", "likeable"], label: "Pleasant", hint: "The definition says 'pleasant and enjoyable' -- nice to experience." },
      { keyword: "willing to agree", matchTerms: ["willing", "agree", "consent", "amenable", "accommodating", "cooperative"], label: "Willing to agree", hint: "The definition says 'willing to agree or consent' -- easy to work with." },
    ],
    synonyms: ["pleasant", "enjoyable", "amenable", "willing", "congenial"],
  },
  {
    word: "alternative",
    partOfSpeech: "noun",
    definition: "One of two or more available possibilities; a choice or option.",
    keyConcepts: [
      { keyword: "available possibilities", matchTerms: ["possibil", "available", "other", "different", "another"], label: "Available possibilities", hint: "The definition says 'available possibilities' -- things you could choose." },
      { keyword: "choice or option", matchTerms: ["choice", "option", "select", "pick", "substitute", "replacement"], label: "Choice or option", hint: "The definition says 'a choice or option' -- something else you could do." },
    ],
    synonyms: ["option", "choice", "substitute", "replacement", "backup"],
  },
  {
    word: "apparent",
    partOfSpeech: "adjective",
    definition: "Clearly visible or understood; seeming to be true but not necessarily so.",
    keyConcepts: [
      { keyword: "clearly visible", matchTerms: ["clear", "visible", "obvious", "evident", "plain", "manifest"], label: "Clearly visible", hint: "The definition says 'clearly visible or understood' -- easy to see." },
      { keyword: "seeming", matchTerms: ["seem", "appear", "ostensible", "surface", "outward", "supposed"], label: "Seeming", hint: "The definition says 'seeming to be true but not necessarily so' -- might not be real." },
    ],
    synonyms: ["obvious", "evident", "seeming", "ostensible", "clear"],
  },
  {
    word: "aspire",
    partOfSpeech: "verb",
    definition: "To have a strong desire to achieve something; to aim high.",
    keyConcepts: [
      { keyword: "strong desire", matchTerms: ["desire", "want", "wish", "hope", "dream", "yearn", "long"], label: "Strong desire", hint: "The definition says 'strong desire to achieve' -- wanting something badly." },
      { keyword: "aim high", matchTerms: ["aim", "high", "achiev", "goal", "ambition", "strive", "seek"], label: "Aim high", hint: "The definition says 'aim high' -- reaching for something great." },
    ],
    synonyms: ["aim", "strive", "dream", "hope", "seek"],
  },
  {
    word: "assess",
    partOfSpeech: "verb",
    definition: "To evaluate or estimate the nature, quality, or value of something.",
    keyConcepts: [
      { keyword: "evaluate", matchTerms: ["evaluat", "judge", "appraise", "review", "examine", "analyze"], label: "Evaluate", hint: "The definition says 'evaluate or estimate' -- making a judgment." },
      { keyword: "nature quality value", matchTerms: ["nature", "quality", "value", "worth", "merit", "condition"], label: "Nature, quality, or value", hint: "The definition says 'the nature, quality, or value' -- what something is like." },
    ],
    synonyms: ["evaluate", "appraise", "judge", "estimate", "analyze"],
  },
  {
    word: "assume",
    partOfSpeech: "verb",
    definition: "To take for granted without proof; to take on a responsibility or role.",
    keyConcepts: [
      { keyword: "take for granted", matchTerms: ["take for granted", "presume", "suppose", "believe", "expect", "without proof"], label: "Take for granted", hint: "The definition says 'take for granted without proof' -- believing without evidence." },
      { keyword: "take on responsibility", matchTerms: ["take on", "responsib", "role", "duty", "accept", "undertake"], label: "Take on responsibility", hint: "The definition says 'take on a responsibility or role' -- accepting a duty." },
    ],
    synonyms: ["presume", "suppose", "undertake", "adopt", "accept"],
  },
  {
    word: "attain",
    partOfSpeech: "verb",
    definition: "To succeed in achieving something, especially after effort.",
    keyConcepts: [
      { keyword: "succeed in achieving", matchTerms: ["succeed", "achiev", "accomplish", "reach", "gain", "obtain"], label: "Succeed in achieving", hint: "The definition says 'succeed in achieving' -- getting what you worked for." },
      { keyword: "after effort", matchTerms: ["effort", "work", "strive", "earn", "hard"], label: "After effort", hint: "The definition says 'especially after effort' -- it takes work." },
    ],
    synonyms: ["achieve", "accomplish", "reach", "gain", "obtain"],
  },
  {
    word: "aware",
    partOfSpeech: "adjective",
    definition: "Having knowledge or perception of a situation or fact; conscious of something.",
    keyConcepts: [
      { keyword: "having knowledge", matchTerms: ["knowledge", "know", "informed", "cognizant", "understand"], label: "Having knowledge", hint: "The definition says 'having knowledge or perception' -- knowing about it." },
      { keyword: "conscious of", matchTerms: ["conscious", "perceiv", "sense", "realiz", "notice", "alert"], label: "Conscious of", hint: "The definition says 'conscious of something' -- mentally present to it." },
    ],
    synonyms: ["conscious", "cognizant", "informed", "alert", "mindful"],
  },
  {
    word: "backlash",
    partOfSpeech: "noun",
    definition: "A strong negative reaction by a group of people to a change or event.",
    keyConcepts: [
      { keyword: "strong negative reaction", matchTerms: ["strong", "negative", "reaction", "response", "opposition", "resistance"], label: "Strong negative reaction", hint: "The definition says 'strong negative reaction' -- people pushing back hard." },
      { keyword: "to a change", matchTerms: ["change", "event", "decision", "action", "policy", "development"], label: "To a change or event", hint: "The definition says 'to a change or event' -- responding to something new." },
    ],
    synonyms: ["reaction", "retaliation", "repercussion", "resistance", "counteraction"],
  },
  {
    word: "baseline",
    partOfSpeech: "noun",
    definition: "A starting point used for comparison; a minimum standard or level.",
    keyConcepts: [
      { keyword: "starting point", matchTerms: ["start", "point", "beginning", "origin", "reference", "benchmark"], label: "Starting point", hint: "The definition says 'starting point used for comparison' -- where you begin measuring." },
      { keyword: "minimum standard", matchTerms: ["minimum", "standard", "level", "base", "foundation", "threshold"], label: "Minimum standard", hint: "The definition says 'minimum standard or level' -- the lowest acceptable point." },
    ],
    synonyms: ["benchmark", "standard", "reference", "foundation", "basis"],
  },
  {
    word: "bias",
    partOfSpeech: "noun",
    definition: "A tendency to favor or oppose something unfairly; prejudice.",
    keyConcepts: [
      { keyword: "tendency to favor", matchTerms: ["tendency", "favor", "lean", "inclin", "prefer", "partial"], label: "Tendency to favor", hint: "The definition says 'tendency to favor or oppose' -- leaning one way." },
      { keyword: "unfairly", matchTerms: ["unfair", "prejudice", "discriminat", "unjust", "one-sided", "skewed"], label: "Unfairly", hint: "The definition says 'unfairly' -- not based on facts." },
    ],
    synonyms: ["prejudice", "partiality", "favoritism", "inclination", "slant"],
  },
  {
    word: "burden",
    partOfSpeech: "noun",
    definition: "A heavy load to carry; a duty or responsibility that causes worry or hardship.",
    keyConcepts: [
      { keyword: "heavy load", matchTerms: ["heavy", "load", "weight", "carry", "bear"], label: "Heavy load", hint: "The definition says 'heavy load to carry' -- something weighing you down." },
      { keyword: "causes worry", matchTerms: ["duty", "responsib", "worry", "hardship", "trouble", "strain", "stress"], label: "Causes worry or hardship", hint: "The definition says 'causes worry or hardship' -- something difficult to bear." },
    ],
    synonyms: ["load", "weight", "responsibility", "obligation", "strain"],
  },
  {
    word: "calibrate",
    partOfSpeech: "verb",
    definition: "To adjust or fine-tune for accuracy; to mark with a standard scale of readings.",
    keyConcepts: [
      { keyword: "adjust for accuracy", matchTerms: ["adjust", "fine-tune", "accura", "precise", "correct", "set"], label: "Adjust for accuracy", hint: "The definition says 'adjust or fine-tune for accuracy' -- making it precise." },
      { keyword: "standard scale", matchTerms: ["standard", "scale", "measure", "mark", "reading", "graduat"], label: "Standard scale", hint: "The definition says 'mark with a standard scale' -- using consistent measurements." },
    ],
    synonyms: ["adjust", "fine-tune", "regulate", "standardize", "set"],
  },
  {
    word: "capacity",
    partOfSpeech: "noun",
    definition: "The maximum amount that something can contain or produce; an ability or role.",
    keyConcepts: [
      { keyword: "maximum amount", matchTerms: ["maximum", "amount", "contain", "hold", "volume", "limit", "produce"], label: "Maximum amount", hint: "The definition says 'maximum amount that something can contain' -- how much it can hold." },
      { keyword: "ability or role", matchTerms: ["ability", "role", "capabil", "function", "position", "power"], label: "Ability or role", hint: "The definition says 'an ability or role' -- what you can do." },
    ],
    synonyms: ["volume", "capability", "ability", "potential", "role"],
  },
  {
    word: "cautious",
    partOfSpeech: "adjective",
    definition: "Careful to avoid potential problems or dangers; not taking risks.",
    keyConcepts: [
      { keyword: "careful to avoid", matchTerms: ["careful", "avoid", "wary", "watchful", "alert", "prudent"], label: "Careful to avoid", hint: "The definition says 'careful to avoid potential problems' -- watching out for trouble." },
      { keyword: "not taking risks", matchTerms: ["risk", "danger", "safe", "hesitant", "guarded", "circumspect"], label: "Not taking risks", hint: "The definition says 'not taking risks' -- playing it safe." },
    ],
    synonyms: ["careful", "wary", "prudent", "guarded", "circumspect"],
  },
  {
    word: "clarify",
    partOfSpeech: "verb",
    definition: "To make something clearer or easier to understand; to remove confusion.",
    keyConcepts: [
      { keyword: "make clearer", matchTerms: ["clear", "easier", "understand", "explain", "illuminat", "elucidat"], label: "Make clearer", hint: "The definition says 'make something clearer' -- helping people get it." },
      { keyword: "remove confusion", matchTerms: ["remov", "confusion", "ambiguity", "doubt", "uncertain"], label: "Remove confusion", hint: "The definition says 'remove confusion' -- eliminating misunderstanding." },
    ],
    synonyms: ["explain", "elucidate", "illuminate", "simplify", "define"],
  },
  {
    word: "coincide",
    partOfSpeech: "verb",
    definition: "To occur at the same time or place; to correspond or agree.",
    keyConcepts: [
      { keyword: "occur at same time", matchTerms: ["occur", "same", "time", "place", "simultaneous", "together", "overlap"], label: "Occur at same time", hint: "The definition says 'occur at the same time or place' -- happening together." },
      { keyword: "correspond or agree", matchTerms: ["correspond", "agree", "match", "align", "accord", "concur"], label: "Correspond or agree", hint: "The definition says 'correspond or agree' -- matching up." },
    ],
    synonyms: ["overlap", "correspond", "concur", "synchronize", "align"],
  },
  {
    word: "collapse",
    partOfSpeech: "verb",
    definition: "To fall down or give way suddenly; to fail completely.",
    keyConcepts: [
      { keyword: "fall down suddenly", matchTerms: ["fall", "down", "sudden", "give way", "cave", "crumble", "tumble"], label: "Fall down suddenly", hint: "The definition says 'fall down or give way suddenly' -- structural failure." },
      { keyword: "fail completely", matchTerms: ["fail", "complet", "break down", "crash", "implode", "disintegrat"], label: "Fail completely", hint: "The definition says 'fail completely' -- total breakdown." },
    ],
    synonyms: ["fall", "crumble", "fail", "break down", "cave in"],
  },
  {
    word: "compatible",
    partOfSpeech: "adjective",
    definition: "Able to exist or work together without conflict; well-suited.",
    keyConcepts: [
      { keyword: "able to work together", matchTerms: ["work together", "exist", "function", "operat", "coexist"], label: "Able to work together", hint: "The definition says 'able to exist or work together' -- they function as a pair." },
      { keyword: "without conflict", matchTerms: ["without conflict", "harmonious", "suited", "match", "fit", "agreeable"], label: "Without conflict", hint: "The definition says 'without conflict' -- no clashing." },
    ],
    synonyms: ["harmonious", "consistent", "congruent", "suited", "matching"],
  },
  {
    word: "compensate",
    partOfSpeech: "verb",
    definition: "To give something to make up for loss or suffering; to balance out.",
    keyConcepts: [
      { keyword: "make up for", matchTerms: ["make up", "loss", "suffer", "damage", "pay", "reimburse", "repay"], label: "Make up for loss", hint: "The definition says 'make up for loss or suffering' -- giving something back." },
      { keyword: "balance out", matchTerms: ["balance", "offset", "counteract", "neutralize", "equalize"], label: "Balance out", hint: "The definition says 'balance out' -- evening things up." },
    ],
    synonyms: ["reimburse", "repay", "offset", "balance", "make up for"],
  },
  {
    word: "complement",
    partOfSpeech: "verb",
    definition: "To add to something in a way that enhances or improves it; to complete.",
    keyConcepts: [
      { keyword: "add to enhance", matchTerms: ["add", "enhance", "improve", "supplement", "augment", "enrich"], label: "Add to enhance", hint: "The definition says 'add to something in a way that enhances' -- making it better." },
      { keyword: "complete", matchTerms: ["complete", "round out", "perfect", "finish", "fulfill"], label: "Complete", hint: "The definition says 'to complete' -- making it whole." },
    ],
    synonyms: ["enhance", "supplement", "complete", "augment", "accompany"],
  },
  {
    word: "concurrent",
    partOfSpeech: "adjective",
    definition: "Happening at the same time; existing or operating simultaneously.",
    keyConcepts: [
      { keyword: "happening at same time", matchTerms: ["happen", "same time", "simultaneous", "together", "coincid"], label: "Happening at same time", hint: "The definition says 'happening at the same time' -- occurring together." },
      { keyword: "operating simultaneously", matchTerms: ["operat", "simultaneous", "parallel", "coexist", "alongside"], label: "Operating simultaneously", hint: "The definition says 'operating simultaneously' -- running at the same time." },
    ],
    synonyms: ["simultaneous", "parallel", "coinciding", "synchronous", "coexisting"],
  },
  {
    word: "consume",
    partOfSpeech: "verb",
    definition: "To use up a resource; to eat or drink something.",
    keyConcepts: [
      { keyword: "use up", matchTerms: ["use up", "resource", "deplet", "exhaust", "spend", "expend"], label: "Use up", hint: "The definition says 'use up a resource' -- spending until gone." },
      { keyword: "eat or drink", matchTerms: ["eat", "drink", "ingest", "devour", "swallow"], label: "Eat or drink", hint: "The definition says 'eat or drink something' -- taking in food." },
    ],
    synonyms: ["use", "eat", "devour", "deplete", "exhaust"],
  },
  {
    word: "controversial",
    partOfSpeech: "adjective",
    definition: "Causing or likely to cause disagreement or argument; disputed.",
    keyConcepts: [
      { keyword: "causing disagreement", matchTerms: ["caus", "disagree", "argument", "debate", "dispute", "contention"], label: "Causing disagreement", hint: "The definition says 'causing or likely to cause disagreement' -- people argue about it." },
      { keyword: "disputed", matchTerms: ["disputed", "contentious", "divisive", "polariz", "contested"], label: "Disputed", hint: "The definition says 'disputed' -- not everyone agrees." },
    ],
    synonyms: ["contentious", "disputed", "debatable", "divisive", "polarizing"],
  },
  {
    word: "convenient",
    partOfSpeech: "adjective",
    definition: "Fitting well with one's needs or plans; easy to use or access.",
    keyConcepts: [
      { keyword: "fitting with needs", matchTerms: ["fit", "need", "plan", "suit", "useful", "helpful"], label: "Fitting with needs", hint: "The definition says 'fitting well with one's needs' -- works for you." },
      { keyword: "easy to use", matchTerms: ["easy", "use", "access", "handy", "practical", "accessible"], label: "Easy to use", hint: "The definition says 'easy to use or access' -- not difficult." },
    ],
    synonyms: ["handy", "practical", "accessible", "useful", "suitable"],
  },
  {
    word: "coordinate",
    partOfSpeech: "verb",
    definition: "To organize different elements to work together effectively.",
    keyConcepts: [
      { keyword: "organize elements", matchTerms: ["organiz", "element", "part", "arrange", "manage", "direct"], label: "Organize elements", hint: "The definition says 'organize different elements' -- bringing things together." },
      { keyword: "work together effectively", matchTerms: ["work together", "effective", "harmonize", "synchronize", "integrate", "unify"], label: "Work together effectively", hint: "The definition says 'work together effectively' -- functioning as a unit." },
    ],
    synonyms: ["organize", "arrange", "harmonize", "synchronize", "integrate"],
  },
  {
    word: "crucial",
    partOfSpeech: "adjective",
    definition: "Of great importance; decisive or critical.",
    keyConcepts: [
      { keyword: "great importance", matchTerms: ["great", "import", "vital", "essential", "key", "significant"], label: "Great importance", hint: "The definition says 'of great importance' -- really matters." },
      { keyword: "decisive or critical", matchTerms: ["decisive", "critical", "pivotal", "determining", "turning point"], label: "Decisive or critical", hint: "The definition says 'decisive or critical' -- makes or breaks the outcome." },
    ],
    synonyms: ["critical", "vital", "essential", "pivotal", "key"],
  },
  {
    word: "cumulative",
    partOfSpeech: "adjective",
    definition: "Increasing by successive additions; growing as more is added.",
    keyConcepts: [
      { keyword: "successive additions", matchTerms: ["success", "addition", "accumul", "add up", "build", "compound"], label: "Successive additions", hint: "The definition says 'increasing by successive additions' -- adding up over time." },
      { keyword: "growing", matchTerms: ["grow", "increas", "mount", "expand", "snowball"], label: "Growing", hint: "The definition says 'growing as more is added' -- getting bigger." },
    ],
    synonyms: ["accumulating", "collective", "aggregate", "mounting", "compounding"],
  },
  {
    word: "defer",
    partOfSpeech: "verb",
    definition: "To put off to a later time; to yield respectfully to someone's opinion.",
    keyConcepts: [
      { keyword: "put off", matchTerms: ["put off", "later", "time", "postpone", "delay", "shelve"], label: "Put off", hint: "The definition says 'put off to a later time' -- not doing it now." },
      { keyword: "yield respectfully", matchTerms: ["yield", "respect", "opinion", "submit", "bow", "acquiesce"], label: "Yield respectfully", hint: "The definition says 'yield respectfully to someone's opinion' -- giving way to another." },
    ],
    synonyms: ["postpone", "delay", "yield", "submit", "acquiesce"],
  },
  {
    word: "demonstrate",
    partOfSpeech: "verb",
    definition: "To show clearly by giving proof or evidence; to explain by example.",
    keyConcepts: [
      { keyword: "show clearly", matchTerms: ["show", "clear", "proof", "evidence", "prove", "establish"], label: "Show clearly", hint: "The definition says 'show clearly by giving proof' -- making something evident." },
      { keyword: "explain by example", matchTerms: ["explain", "example", "illustrat", "display", "exhibit"], label: "Explain by example", hint: "The definition says 'explain by example' -- showing how it works." },
    ],
    synonyms: ["show", "prove", "illustrate", "exhibit", "display"],
  },
  {
    word: "denial",
    partOfSpeech: "noun",
    definition: "A refusal to accept something as true; a statement saying something is not true.",
    keyConcepts: [
      { keyword: "refusal to accept", matchTerms: ["refus", "accept", "reject", "disbelief", "unwilling"], label: "Refusal to accept", hint: "The definition says 'refusal to accept something as true' -- not believing." },
      { keyword: "statement not true", matchTerms: ["statement", "not true", "contradict", "disavow", "repudiat"], label: "Statement not true", hint: "The definition says 'statement saying something is not true' -- saying no." },
    ],
    synonyms: ["refusal", "rejection", "disavowal", "contradiction", "repudiation"],
  },
  {
    word: "dependable",
    partOfSpeech: "adjective",
    definition: "Trustworthy and reliable; able to be counted on.",
    keyConcepts: [
      { keyword: "trustworthy", matchTerms: ["trust", "reliable", "faithful", "loyal", "honest"], label: "Trustworthy", hint: "The definition says 'trustworthy and reliable' -- you can trust them." },
      { keyword: "counted on", matchTerms: ["count on", "rely", "depend", "consistent", "steady", "stable"], label: "Counted on", hint: "The definition says 'able to be counted on' -- always there." },
    ],
    synonyms: ["reliable", "trustworthy", "steady", "consistent", "faithful"],
  },
  {
    word: "derive",
    partOfSpeech: "verb",
    definition: "To obtain something from a source; to trace the origin of.",
    keyConcepts: [
      { keyword: "obtain from source", matchTerms: ["obtain", "source", "get", "draw", "extract", "gain"], label: "Obtain from source", hint: "The definition says 'obtain something from a source' -- getting it from somewhere." },
      { keyword: "trace origin", matchTerms: ["trace", "origin", "root", "stem", "come from", "descend"], label: "Trace origin", hint: "The definition says 'trace the origin of' -- finding where it comes from." },
    ],
    synonyms: ["obtain", "extract", "originate", "stem", "arise"],
  },
  {
    word: "desirable",
    partOfSpeech: "adjective",
    definition: "Worth having or wanting; pleasing or attractive.",
    keyConcepts: [
      { keyword: "worth having", matchTerms: ["worth", "having", "want", "sought", "valuable", "prized"], label: "Worth having", hint: "The definition says 'worth having or wanting' -- something you'd like." },
      { keyword: "pleasing", matchTerms: ["pleas", "attract", "appeal", "enviable", "covetable"], label: "Pleasing", hint: "The definition says 'pleasing or attractive' -- nice to have." },
    ],
    synonyms: ["attractive", "appealing", "sought-after", "enviable", "advantageous"],
  },
  {
    word: "detect",
    partOfSpeech: "verb",
    definition: "To discover or notice something, especially something hidden or subtle.",
    keyConcepts: [
      { keyword: "discover or notice", matchTerms: ["discover", "notice", "find", "spot", "perceiv", "identify"], label: "Discover or notice", hint: "The definition says 'discover or notice something' -- finding it." },
      { keyword: "hidden or subtle", matchTerms: ["hidden", "subtle", "faint", "obscur", "conceal", "unobvious"], label: "Hidden or subtle", hint: "The definition says 'especially something hidden or subtle' -- not easy to see." },
    ],
    synonyms: ["discover", "notice", "spot", "identify", "uncover"],
  },
  {
    word: "differentiate",
    partOfSpeech: "verb",
    definition: "To recognize or show the difference between things; to make distinct.",
    keyConcepts: [
      { keyword: "recognize difference", matchTerms: ["recogniz", "difference", "distinguish", "tell apart", "discern"], label: "Recognize difference", hint: "The definition says 'recognize or show the difference' -- seeing what's not the same." },
      { keyword: "make distinct", matchTerms: ["make", "distinct", "separate", "set apart", "unique"], label: "Make distinct", hint: "The definition says 'make distinct' -- creating a difference." },
    ],
    synonyms: ["distinguish", "discriminate", "separate", "discern", "contrast"],
  },
  {
    word: "disrupt",
    partOfSpeech: "verb",
    definition: "To interrupt the normal progress or activity of something; to cause disorder.",
    keyConcepts: [
      { keyword: "interrupt normal progress", matchTerms: ["interrupt", "normal", "progress", "activity", "disturb", "interfere"], label: "Interrupt normal progress", hint: "The definition says 'interrupt the normal progress' -- stopping the flow." },
      { keyword: "cause disorder", matchTerms: ["disorder", "chaos", "upset", "unsettle", "destabilize", "throw off"], label: "Cause disorder", hint: "The definition says 'cause disorder' -- making things chaotic." },
    ],
    synonyms: ["interrupt", "disturb", "upset", "interfere", "derail"],
  },
  {
    word: "distort",
    partOfSpeech: "verb",
    definition: "To twist out of shape; to give a misleading account or impression.",
    keyConcepts: [
      { keyword: "twist out of shape", matchTerms: ["twist", "shape", "warp", "bend", "deform", "contort"], label: "Twist out of shape", hint: "The definition says 'twist out of shape' -- changing the form." },
      { keyword: "misleading account", matchTerms: ["mislead", "account", "impression", "misrepresent", "falsif", "skew"], label: "Misleading account", hint: "The definition says 'give a misleading account' -- not telling it straight." },
    ],
    synonyms: ["warp", "twist", "misrepresent", "skew", "falsify"],
  },
  {
    word: "diverse",
    partOfSpeech: "adjective",
    definition: "Showing great variety; including people or things that are different from each other.",
    keyConcepts: [
      { keyword: "great variety", matchTerms: ["variety", "varied", "different", "range", "assort", "mixed"], label: "Great variety", hint: "The definition says 'showing great variety' -- many different kinds." },
      { keyword: "different from each other", matchTerms: ["different", "unlike", "distinct", "heterogeneous", "multifaceted"], label: "Different from each other", hint: "The definition says 'different from each other' -- not all the same." },
    ],
    synonyms: ["varied", "assorted", "mixed", "heterogeneous", "multifaceted"],
  },
  {
    word: "dominant",
    partOfSpeech: "adjective",
    definition: "Having power or influence over others; most important or prominent.",
    keyConcepts: [
      { keyword: "power over others", matchTerms: ["power", "influenc", "control", "authority", "command", "ruling"], label: "Power over others", hint: "The definition says 'having power or influence over others' -- being in charge." },
      { keyword: "most important", matchTerms: ["most", "important", "prominent", "main", "chief", "primary", "leading"], label: "Most important", hint: "The definition says 'most important or prominent' -- standing out above others." },
    ],
    synonyms: ["powerful", "commanding", "prevailing", "prominent", "chief"],
  },
  {
    word: "durable",
    partOfSpeech: "adjective",
    definition: "Able to withstand wear, pressure, or damage; long-lasting.",
    keyConcepts: [
      { keyword: "withstand wear", matchTerms: ["withstand", "wear", "pressure", "damage", "resist", "endur", "tough"], label: "Withstand wear", hint: "The definition says 'able to withstand wear, pressure, or damage' -- can take a beating." },
      { keyword: "long-lasting", matchTerms: ["long-lasting", "lasting", "permanent", "sturdy", "robust", "resilient"], label: "Long-lasting", hint: "The definition says 'long-lasting' -- doesn't break easily." },
    ],
    synonyms: ["sturdy", "robust", "resilient", "tough", "long-lasting"],
  },
  {
    word: "dynamic",
    partOfSpeech: "adjective",
    definition: "Characterized by constant change or activity; energetic and forceful.",
    keyConcepts: [
      { keyword: "constant change", matchTerms: ["constant", "change", "activity", "moving", "evolving", "shifting"], label: "Constant change", hint: "The definition says 'characterized by constant change' -- always moving." },
      { keyword: "energetic", matchTerms: ["energetic", "forceful", "vigorous", "lively", "active", "powerful"], label: "Energetic", hint: "The definition says 'energetic and forceful' -- full of energy." },
    ],
    synonyms: ["energetic", "active", "vigorous", "lively", "changing"],
  },
  {
    word: "eliminate",
    partOfSpeech: "verb",
    definition: "To completely remove or get rid of something.",
    keyConcepts: [
      { keyword: "completely remove", matchTerms: ["complet", "remove", "get rid", "eradicat", "abolish", "destroy"], label: "Completely remove", hint: "The definition says 'completely remove' -- taking it out entirely." },
      { keyword: "get rid of", matchTerms: ["rid", "discard", "expel", "exclude", "wipe out", "exterminate"], label: "Get rid of", hint: "The definition says 'get rid of something' -- making it gone." },
    ],
    synonyms: ["remove", "eradicate", "abolish", "exclude", "exterminate"],
  },
  {
    word: "emerge",
    partOfSpeech: "verb",
    definition: "To come out into view or existence; to become known or apparent.",
    keyConcepts: [
      { keyword: "come out into view", matchTerms: ["come out", "view", "appear", "surface", "arise", "materialize"], label: "Come out into view", hint: "The definition says 'come out into view' -- becoming visible." },
      { keyword: "become known", matchTerms: ["become", "known", "apparent", "evident", "reveal", "unfold"], label: "Become known", hint: "The definition says 'become known or apparent' -- coming to light." },
    ],
    synonyms: ["appear", "surface", "arise", "materialize", "unfold"],
  },
  {
    word: "emphasize",
    partOfSpeech: "verb",
    definition: "To give special importance or attention to something; to stress.",
    keyConcepts: [
      { keyword: "special importance", matchTerms: ["special", "import", "attention", "focus", "highlight", "underscore"], label: "Special importance", hint: "The definition says 'give special importance' -- making it stand out." },
      { keyword: "stress", matchTerms: ["stress", "accent", "accentuat", "point out", "underline"], label: "Stress", hint: "The definition says 'to stress' -- putting weight on it." },
    ],
    synonyms: ["stress", "highlight", "underscore", "accentuate", "underline"],
  },
  {
    word: "enable",
    partOfSpeech: "verb",
    definition: "To make possible or easy; to give someone the means or ability to do something.",
    keyConcepts: [
      { keyword: "make possible", matchTerms: ["make", "possible", "easy", "allow", "permit", "facilitate"], label: "Make possible", hint: "The definition says 'make possible or easy' -- opening the way." },
      { keyword: "give means or ability", matchTerms: ["give", "means", "ability", "empower", "equip", "authorize"], label: "Give means or ability", hint: "The definition says 'give someone the means or ability' -- providing what's needed." },
    ],
    synonyms: ["allow", "permit", "empower", "facilitate", "authorize"],
  },
  {
    word: "encounter",
    partOfSpeech: "verb",
    definition: "To unexpectedly meet or experience something, especially a difficulty.",
    keyConcepts: [
      { keyword: "unexpectedly meet", matchTerms: ["unexpect", "meet", "come across", "run into", "stumble upon"], label: "Unexpectedly meet", hint: "The definition says 'unexpectedly meet' -- not planned." },
      { keyword: "experience difficulty", matchTerms: ["experience", "difficult", "face", "confront", "problem", "challenge"], label: "Experience difficulty", hint: "The definition says 'especially a difficulty' -- often something hard." },
    ],
    synonyms: ["meet", "face", "confront", "experience", "come across"],
  },
  {
    word: "endure",
    partOfSpeech: "verb",
    definition: "To suffer through something painful or difficult; to last over time.",
    keyConcepts: [
      { keyword: "suffer through", matchTerms: ["suffer", "through", "painful", "difficult", "bear", "withstand", "tolerat"], label: "Suffer through", hint: "The definition says 'suffer through something painful' -- bearing hardship." },
      { keyword: "last over time", matchTerms: ["last", "time", "persist", "survive", "continue", "remain"], label: "Last over time", hint: "The definition says 'last over time' -- continuing to exist." },
    ],
    synonyms: ["bear", "withstand", "tolerate", "survive", "persist"],
  },
  {
    word: "enhance",
    partOfSpeech: "verb",
    definition: "To increase or improve the quality, value, or extent of something.",
    keyConcepts: [
      { keyword: "increase or improve", matchTerms: ["increase", "improve", "boost", "heighten", "elevat", "amplif"], label: "Increase or improve", hint: "The definition says 'increase or improve' -- making better." },
      { keyword: "quality value extent", matchTerms: ["quality", "value", "extent", "strength", "appeal", "effect"], label: "Quality, value, or extent", hint: "The definition says 'quality, value, or extent' -- various aspects to boost." },
    ],
    synonyms: ["improve", "boost", "augment", "elevate", "intensify"],
  },
  {
    word: "ensure",
    partOfSpeech: "verb",
    definition: "To make certain that something will happen or be the case.",
    keyConcepts: [
      { keyword: "make certain", matchTerms: ["make", "certain", "sure", "guarantee", "confirm", "secure"], label: "Make certain", hint: "The definition says 'make certain' -- removing doubt." },
      { keyword: "will happen", matchTerms: ["will", "happen", "occur", "result", "outcome", "achieve"], label: "Will happen", hint: "The definition says 'something will happen' -- guaranteeing the result." },
    ],
    synonyms: ["guarantee", "secure", "confirm", "assure", "verify"],
  },
  {
    word: "entire",
    partOfSpeech: "adjective",
    definition: "With no part left out; whole and complete.",
    keyConcepts: [
      { keyword: "no part left out", matchTerms: ["no part", "left out", "all", "every", "nothing missing"], label: "No part left out", hint: "The definition says 'with no part left out' -- everything included." },
      { keyword: "whole and complete", matchTerms: ["whole", "complete", "total", "full", "intact", "unbroken"], label: "Whole and complete", hint: "The definition says 'whole and complete' -- not partial." },
    ],
    synonyms: ["whole", "complete", "total", "full", "intact"],
  },
  {
    word: "equitable",
    partOfSpeech: "adjective",
    definition: "Fair and impartial; treating everyone equally.",
    keyConcepts: [
      { keyword: "fair and impartial", matchTerms: ["fair", "impartial", "just", "unbiased", "objective", "neutral"], label: "Fair and impartial", hint: "The definition says 'fair and impartial' -- not favoring anyone." },
      { keyword: "treating equally", matchTerms: ["treat", "equal", "even-handed", "balanced", "same"], label: "Treating equally", hint: "The definition says 'treating everyone equally' -- same treatment for all." },
    ],
    synonyms: ["fair", "just", "impartial", "unbiased", "even-handed"],
  },
  {
    word: "essential",
    partOfSpeech: "adjective",
    definition: "Absolutely necessary or extremely important; fundamental.",
    keyConcepts: [
      { keyword: "absolutely necessary", matchTerms: ["absolut", "necessary", "need", "required", "vital", "indispensable"], label: "Absolutely necessary", hint: "The definition says 'absolutely necessary' -- can't do without it." },
      { keyword: "fundamental", matchTerms: ["fundamental", "basic", "core", "key", "crucial", "critical"], label: "Fundamental", hint: "The definition says 'fundamental' -- at the heart of it." },
    ],
    synonyms: ["necessary", "vital", "crucial", "fundamental", "indispensable"],
  },
  {
    word: "evident",
    partOfSpeech: "adjective",
    definition: "Clearly seen or understood; obvious.",
    keyConcepts: [
      { keyword: "clearly seen", matchTerms: ["clear", "seen", "visible", "apparent", "plain", "manifest"], label: "Clearly seen", hint: "The definition says 'clearly seen' -- easy to see." },
      { keyword: "obvious", matchTerms: ["obvious", "understand", "unmistakable", "patent", "noticeable"], label: "Obvious", hint: "The definition says 'obvious' -- no doubt about it." },
    ],
    synonyms: ["obvious", "apparent", "clear", "plain", "manifest"],
  },
  {
    word: "excessive",
    partOfSpeech: "adjective",
    definition: "More than is necessary, normal, or desirable; too much.",
    keyConcepts: [
      { keyword: "more than necessary", matchTerms: ["more", "necessary", "normal", "desirable", "beyond", "over"], label: "More than necessary", hint: "The definition says 'more than is necessary' -- beyond what's needed." },
      { keyword: "too much", matchTerms: ["too much", "extreme", "immoderate", "unreasonable", "inordinate"], label: "Too much", hint: "The definition says 'too much' -- going overboard." },
    ],
    synonyms: ["extreme", "immoderate", "inordinate", "undue", "extravagant"],
  },
  {
    word: "exclude",
    partOfSpeech: "verb",
    definition: "To keep out or leave out; to prevent from being included.",
    keyConcepts: [
      { keyword: "keep out", matchTerms: ["keep out", "leave out", "bar", "prohibit", "reject", "ban"], label: "Keep out", hint: "The definition says 'keep out or leave out' -- not letting in." },
      { keyword: "prevent from being included", matchTerms: ["prevent", "includ", "omit", "except", "shut out"], label: "Prevent from being included", hint: "The definition says 'prevent from being included' -- making sure it's not part of it." },
    ],
    synonyms: ["omit", "bar", "reject", "prohibit", "ban"],
  },
  {
    word: "execute",
    partOfSpeech: "verb",
    definition: "To carry out or put into effect a plan or action; to perform.",
    keyConcepts: [
      { keyword: "carry out", matchTerms: ["carry out", "put into effect", "implement", "accomplish", "complete"], label: "Carry out", hint: "The definition says 'carry out or put into effect' -- doing what was planned." },
      { keyword: "perform", matchTerms: ["perform", "conduct", "do", "enact", "fulfill", "achieve"], label: "Perform", hint: "The definition says 'to perform' -- making it happen." },
    ],
    synonyms: ["implement", "perform", "accomplish", "carry out", "fulfill"],
  },
  {
    word: "exhaust",
    partOfSpeech: "verb",
    definition: "To use up completely; to make someone extremely tired.",
    keyConcepts: [
      { keyword: "use up completely", matchTerms: ["use up", "complet", "deplet", "drain", "consume", "empty"], label: "Use up completely", hint: "The definition says 'use up completely' -- nothing left." },
      { keyword: "make tired", matchTerms: ["tired", "fatigue", "weary", "wear out", "drain", "sap"], label: "Make tired", hint: "The definition says 'make someone extremely tired' -- no energy left." },
    ],
    synonyms: ["deplete", "drain", "tire", "fatigue", "wear out"],
  },
  {
    word: "expand",
    partOfSpeech: "verb",
    definition: "To become or make larger in size, amount, or scope.",
    keyConcepts: [
      { keyword: "become larger", matchTerms: ["become", "larger", "size", "grow", "increase", "extend"], label: "Become larger", hint: "The definition says 'become or make larger' -- getting bigger." },
      { keyword: "amount or scope", matchTerms: ["amount", "scope", "range", "scale", "extent", "broaden"], label: "Amount or scope", hint: "The definition says 'in size, amount, or scope' -- various ways to grow." },
    ],
    synonyms: ["grow", "enlarge", "extend", "increase", "broaden"],
  },
  {
    word: "exploit",
    partOfSpeech: "verb",
    definition: "To make full use of a resource; to use unfairly for one's own advantage.",
    keyConcepts: [
      { keyword: "make full use", matchTerms: ["make", "full", "use", "utilize", "capitalize", "harness"], label: "Make full use", hint: "The definition says 'make full use of a resource' -- getting the most out of it." },
      { keyword: "use unfairly", matchTerms: ["unfair", "advantage", "abuse", "take advantage", "manipulat"], label: "Use unfairly", hint: "The definition says 'use unfairly for one's own advantage' -- taking advantage of." },
    ],
    synonyms: ["utilize", "capitalize on", "abuse", "manipulate", "harness"],
  },
  {
    word: "extract",
    partOfSpeech: "verb",
    definition: "To remove or take out, especially by force or effort.",
    keyConcepts: [
      { keyword: "remove or take out", matchTerms: ["remove", "take out", "pull", "withdraw", "draw out"], label: "Remove or take out", hint: "The definition says 'remove or take out' -- getting it out." },
      { keyword: "by force or effort", matchTerms: ["force", "effort", "difficult", "struggle", "pry", "wrench"], label: "By force or effort", hint: "The definition says 'especially by force or effort' -- not easily removed." },
    ],
    synonyms: ["remove", "withdraw", "pull out", "obtain", "derive"],
  },
  {
    word: "feasible",
    partOfSpeech: "adjective",
    definition: "Possible to do easily or conveniently; likely to succeed.",
    keyConcepts: [
      { keyword: "possible to do", matchTerms: ["possible", "do", "achiev", "accomplish", "practic", "workable"], label: "Possible to do", hint: "The definition says 'possible to do' -- can be done." },
      { keyword: "likely to succeed", matchTerms: ["likely", "succeed", "viable", "realistic", "attainable"], label: "Likely to succeed", hint: "The definition says 'likely to succeed' -- has a good chance." },
    ],
    synonyms: ["possible", "practical", "viable", "workable", "achievable"],
  },
  {
    word: "forecast",
    partOfSpeech: "verb",
    definition: "To predict or estimate a future event or trend.",
    keyConcepts: [
      { keyword: "predict", matchTerms: ["predict", "foresee", "anticipat", "project", "prophesy"], label: "Predict", hint: "The definition says 'predict or estimate' -- saying what will happen." },
      { keyword: "future event", matchTerms: ["future", "event", "trend", "outcome", "development"], label: "Future event", hint: "The definition says 'a future event or trend' -- what's coming." },
    ],
    synonyms: ["predict", "project", "anticipate", "foresee", "estimate"],
  },
  {
    word: "fortify",
    partOfSpeech: "verb",
    definition: "To strengthen a place against attack; to invigorate or encourage.",
    keyConcepts: [
      { keyword: "strengthen against attack", matchTerms: ["strengthen", "attack", "defend", "protect", "reinforce", "secure"], label: "Strengthen against attack", hint: "The definition says 'strengthen a place against attack' -- building defenses." },
      { keyword: "invigorate", matchTerms: ["invigorat", "encourage", "bolster", "boost", "energize", "empower"], label: "Invigorate", hint: "The definition says 'invigorate or encourage' -- giving strength." },
    ],
    synonyms: ["strengthen", "reinforce", "bolster", "secure", "invigorate"],
  },
  {
    word: "fundamental",
    partOfSpeech: "adjective",
    definition: "Forming a necessary base or core; of central importance.",
    keyConcepts: [
      { keyword: "necessary base", matchTerms: ["necessary", "base", "core", "foundation", "basic", "essential"], label: "Necessary base", hint: "The definition says 'forming a necessary base' -- the foundation." },
      { keyword: "central importance", matchTerms: ["central", "import", "key", "crucial", "primary", "principal"], label: "Central importance", hint: "The definition says 'of central importance' -- at the heart of things." },
    ],
    synonyms: ["basic", "essential", "core", "primary", "foundational"],
  },
  {
    word: "generate",
    partOfSpeech: "verb",
    definition: "To produce or create something; to cause to arise.",
    keyConcepts: [
      { keyword: "produce or create", matchTerms: ["produce", "create", "make", "yield", "bring about"], label: "Produce or create", hint: "The definition says 'produce or create something' -- making it exist." },
      { keyword: "cause to arise", matchTerms: ["cause", "arise", "give rise", "spawn", "engender", "trigger"], label: "Cause to arise", hint: "The definition says 'cause to arise' -- bringing into being." },
    ],
    synonyms: ["produce", "create", "cause", "yield", "spawn"],
  },
  {
    word: "gradual",
    partOfSpeech: "adjective",
    definition: "Happening slowly over a period of time; not sudden.",
    keyConcepts: [
      { keyword: "happening slowly", matchTerms: ["happen", "slow", "steady", "incremental", "progressive", "bit by bit"], label: "Happening slowly", hint: "The definition says 'happening slowly' -- taking time." },
      { keyword: "not sudden", matchTerms: ["not sudden", "gentle", "moderate", "measured", "step by step"], label: "Not sudden", hint: "The definition says 'not sudden' -- no abrupt changes." },
    ],
    synonyms: ["slow", "steady", "incremental", "progressive", "moderate"],
  },
  {
    word: "guarantee",
    partOfSpeech: "verb",
    definition: "To promise with certainty that something will happen; to assure.",
    keyConcepts: [
      { keyword: "promise with certainty", matchTerms: ["promise", "certain", "assure", "pledge", "vow", "commit"], label: "Promise with certainty", hint: "The definition says 'promise with certainty' -- making a firm commitment." },
      { keyword: "will happen", matchTerms: ["will happen", "ensure", "secure", "warrant", "vouch"], label: "Will happen", hint: "The definition says 'something will happen' -- it's assured." },
    ],
    synonyms: ["assure", "ensure", "promise", "pledge", "warrant"],
  },
  {
    word: "harsh",
    partOfSpeech: "adjective",
    definition: "Unpleasantly rough or severe; cruel or unkind.",
    keyConcepts: [
      { keyword: "unpleasantly rough", matchTerms: ["unpleasant", "rough", "severe", "hard", "grating", "jarring"], label: "Unpleasantly rough", hint: "The definition says 'unpleasantly rough or severe' -- not gentle." },
      { keyword: "cruel or unkind", matchTerms: ["cruel", "unkind", "brutal", "stern", "strict", "merciless"], label: "Cruel or unkind", hint: "The definition says 'cruel or unkind' -- lacking warmth." },
    ],
    synonyms: ["severe", "cruel", "brutal", "stern", "rough"],
  },
  {
    word: "hesitate",
    partOfSpeech: "verb",
    definition: "To pause before doing something, often due to uncertainty or reluctance.",
    keyConcepts: [
      { keyword: "pause before doing", matchTerms: ["pause", "before", "doing", "wait", "delay", "hold back"], label: "Pause before doing", hint: "The definition says 'pause before doing something' -- not acting immediately." },
      { keyword: "uncertainty or reluctance", matchTerms: ["uncertain", "reluctan", "doubt", "unsure", "waver", "indecisive"], label: "Uncertainty or reluctance", hint: "The definition says 'due to uncertainty or reluctance' -- not sure or willing." },
    ],
    synonyms: ["pause", "waver", "delay", "vacillate", "falter"],
  },
  {
    word: "hypothetical",
    partOfSpeech: "adjective",
    definition: "Based on a hypothesis or assumption; imagined rather than real.",
    keyConcepts: [
      { keyword: "based on hypothesis", matchTerms: ["based", "hypothesis", "assumption", "theory", "suppos", "speculat"], label: "Based on hypothesis", hint: "The definition says 'based on a hypothesis' -- not proven." },
      { keyword: "imagined rather than real", matchTerms: ["imagin", "rather than", "real", "theoretical", "supposed", "potential"], label: "Imagined rather than real", hint: "The definition says 'imagined rather than real' -- just a possibility." },
    ],
    synonyms: ["theoretical", "supposed", "assumed", "speculative", "imaginary"],
  },
  {
    word: "identify",
    partOfSpeech: "verb",
    definition: "To recognize or establish what something is; to determine the identity of.",
    keyConcepts: [
      { keyword: "recognize", matchTerms: ["recogniz", "establish", "determine", "discern", "detect", "spot"], label: "Recognize", hint: "The definition says 'recognize or establish' -- figuring out what it is." },
      { keyword: "determine identity", matchTerms: ["identity", "name", "classify", "pinpoint", "distinguish"], label: "Determine identity", hint: "The definition says 'determine the identity of' -- knowing who or what." },
    ],
    synonyms: ["recognize", "determine", "distinguish", "pinpoint", "discern"],
  },
  {
    word: "illustrate",
    partOfSpeech: "verb",
    definition: "To explain or make clear by using examples or pictures.",
    keyConcepts: [
      { keyword: "explain or make clear", matchTerms: ["explain", "make clear", "clarify", "elucidat", "demonstrat"], label: "Explain or make clear", hint: "The definition says 'explain or make clear' -- helping people understand." },
      { keyword: "using examples", matchTerms: ["example", "picture", "diagram", "show", "depict", "portray"], label: "Using examples", hint: "The definition says 'by using examples or pictures' -- visual or concrete aid." },
    ],
    synonyms: ["demonstrate", "show", "depict", "clarify", "exemplify"],
  },
  {
    word: "impact",
    partOfSpeech: "noun",
    definition: "A strong effect or influence on something; the force of one thing hitting another.",
    keyConcepts: [
      { keyword: "strong effect", matchTerms: ["strong", "effect", "influence", "consequence", "impression", "bearing"], label: "Strong effect", hint: "The definition says 'strong effect or influence' -- makes a difference." },
      { keyword: "force of hitting", matchTerms: ["force", "hitting", "collision", "contact", "strike", "blow"], label: "Force of hitting", hint: "The definition says 'force of one thing hitting another' -- physical contact." },
    ],
    synonyms: ["effect", "influence", "consequence", "impression", "collision"],
  },
  {
    word: "implement",
    partOfSpeech: "verb",
    definition: "To put a plan or decision into effect; to carry out.",
    keyConcepts: [
      { keyword: "put into effect", matchTerms: ["put", "effect", "action", "practice", "enact", "execute"], label: "Put into effect", hint: "The definition says 'put a plan or decision into effect' -- making it happen." },
      { keyword: "carry out", matchTerms: ["carry out", "perform", "accomplish", "realize", "apply"], label: "Carry out", hint: "The definition says 'carry out' -- doing what was planned." },
    ],
    synonyms: ["execute", "enact", "apply", "carry out", "perform"],
  },
  {
    word: "improve",
    partOfSpeech: "verb",
    definition: "To make or become better in quality; to enhance.",
    keyConcepts: [
      { keyword: "make better", matchTerms: ["make", "better", "enhance", "upgrade", "ameliorat", "advance"], label: "Make better", hint: "The definition says 'make or become better' -- increasing quality." },
      { keyword: "quality", matchTerms: ["quality", "standard", "condition", "performance", "develop", "refine"], label: "Quality", hint: "The definition says 'better in quality' -- higher standard." },
    ],
    synonyms: ["enhance", "better", "upgrade", "refine", "advance"],
  },
  {
    word: "incentive",
    partOfSpeech: "noun",
    definition: "Something that motivates or encourages someone to do something.",
    keyConcepts: [
      { keyword: "motivates or encourages", matchTerms: ["motivat", "encourag", "induce", "prompt", "spur", "drive"], label: "Motivates or encourages", hint: "The definition says 'motivates or encourages' -- gives a reason to act." },
      { keyword: "to do something", matchTerms: ["do", "action", "behavior", "reward", "benefit", "stimulus"], label: "To do something", hint: "The definition says 'to do something' -- pushing toward action." },
    ],
    synonyms: ["motivation", "encouragement", "stimulus", "inducement", "reward"],
  },
  {
    word: "incidental",
    partOfSpeech: "adjective",
    definition: "Occurring as a minor part or by chance; not essential.",
    keyConcepts: [
      { keyword: "minor part", matchTerms: ["minor", "part", "secondary", "subordinate", "peripheral", "small"], label: "Minor part", hint: "The definition says 'occurring as a minor part' -- not the main thing." },
      { keyword: "by chance", matchTerms: ["chance", "accident", "coincident", "random", "unplanned"], label: "By chance", hint: "The definition says 'by chance' -- not intentional." },
    ],
    synonyms: ["minor", "secondary", "peripheral", "accidental", "casual"],
  },
  {
    word: "incline",
    partOfSpeech: "verb",
    definition: "To have a tendency or preference; to lean or slope.",
    keyConcepts: [
      { keyword: "have a tendency", matchTerms: ["tendency", "prefer", "disposed", "prone", "apt", "likely"], label: "Have a tendency", hint: "The definition says 'have a tendency or preference' -- leaning toward something." },
      { keyword: "lean or slope", matchTerms: ["lean", "slope", "tilt", "slant", "angle", "gradient"], label: "Lean or slope", hint: "The definition says 'lean or slope' -- not level." },
    ],
    synonyms: ["tend", "lean", "slope", "prefer", "dispose"],
  },
  {
    word: "incompatible",
    partOfSpeech: "adjective",
    definition: "Unable to exist or work together; conflicting or inconsistent.",
    keyConcepts: [
      { keyword: "unable to work together", matchTerms: ["unable", "work together", "coexist", "function", "clash"], label: "Unable to work together", hint: "The definition says 'unable to exist or work together' -- they don't mix." },
      { keyword: "conflicting", matchTerms: ["conflict", "inconsistent", "contradict", "oppose", "mismatch"], label: "Conflicting", hint: "The definition says 'conflicting or inconsistent' -- at odds." },
    ],
    synonyms: ["conflicting", "inconsistent", "mismatched", "clashing", "unsuitable"],
  },
  {
    word: "inconsistent",
    partOfSpeech: "adjective",
    definition: "Not staying the same; having contradictory elements.",
    keyConcepts: [
      { keyword: "not staying the same", matchTerms: ["not", "same", "chang", "variable", "erratic", "uneven"], label: "Not staying the same", hint: "The definition says 'not staying the same' -- varies unpredictably." },
      { keyword: "contradictory", matchTerms: ["contradict", "conflict", "incompatible", "discrepant", "at odds"], label: "Contradictory", hint: "The definition says 'having contradictory elements' -- doesn't match up." },
    ],
    synonyms: ["variable", "erratic", "contradictory", "irregular", "unpredictable"],
  },
  {
    word: "inevitable",
    partOfSpeech: "adjective",
    definition: "Certain to happen; unavoidable.",
    keyConcepts: [
      { keyword: "certain to happen", matchTerms: ["certain", "happen", "sure", "definite", "guaranteed", "bound"], label: "Certain to happen", hint: "The definition says 'certain to happen' -- will definitely occur." },
      { keyword: "unavoidable", matchTerms: ["unavoidable", "inescapable", "inevitabl", "destined", "fated"], label: "Unavoidable", hint: "The definition says 'unavoidable' -- can't be prevented." },
    ],
    synonyms: ["unavoidable", "inescapable", "certain", "destined", "fated"],
  },
  {
    word: "informal",
    partOfSpeech: "adjective",
    definition: "Relaxed and casual in style; not official or formal.",
    keyConcepts: [
      { keyword: "relaxed and casual", matchTerms: ["relaxed", "casual", "laid-back", "easygoing", "friendly"], label: "Relaxed and casual", hint: "The definition says 'relaxed and casual' -- not stiff." },
      { keyword: "not official", matchTerms: ["not official", "unofficial", "unceremonious", "unpretentious"], label: "Not official", hint: "The definition says 'not official or formal' -- no strict rules." },
    ],
    synonyms: ["casual", "relaxed", "unofficial", "unceremonious", "easygoing"],
  },
  {
    word: "initial",
    partOfSpeech: "adjective",
    definition: "Existing or occurring at the beginning; first.",
    keyConcepts: [
      { keyword: "at the beginning", matchTerms: ["beginning", "start", "first", "early", "opening", "commenc"], label: "At the beginning", hint: "The definition says 'at the beginning' -- the starting point." },
      { keyword: "first", matchTerms: ["first", "original", "primary", "earliest", "introductory"], label: "First", hint: "The definition says 'first' -- before all others." },
    ],
    synonyms: ["first", "original", "beginning", "opening", "primary"],
  },
  {
    word: "insert",
    partOfSpeech: "verb",
    definition: "To place or put something inside or into something else.",
    keyConcepts: [
      { keyword: "place inside", matchTerms: ["place", "inside", "into", "put", "introduce", "add"], label: "Place inside", hint: "The definition says 'place or put something inside' -- putting it in." },
      { keyword: "into something else", matchTerms: ["into", "something else", "between", "embed", "implant"], label: "Into something else", hint: "The definition says 'into something else' -- inside another thing." },
    ],
    synonyms: ["put in", "introduce", "add", "embed", "implant"],
  },
  {
    word: "inspect",
    partOfSpeech: "verb",
    definition: "To look at something carefully to check its quality or condition.",
    keyConcepts: [
      { keyword: "look carefully", matchTerms: ["look", "careful", "examine", "scrutinize", "study", "survey"], label: "Look carefully", hint: "The definition says 'look at something carefully' -- close examination." },
      { keyword: "check quality", matchTerms: ["check", "quality", "condition", "assess", "evaluate", "review"], label: "Check quality", hint: "The definition says 'check its quality or condition' -- making sure it's okay." },
    ],
    synonyms: ["examine", "check", "scrutinize", "survey", "review"],
  },
  {
    word: "instance",
    partOfSpeech: "noun",
    definition: "A particular example or case of something.",
    keyConcepts: [
      { keyword: "particular example", matchTerms: ["particular", "example", "specific", "individual", "single"], label: "Particular example", hint: "The definition says 'a particular example' -- one specific occurrence." },
      { keyword: "case of something", matchTerms: ["case", "occurrence", "occasion", "situation", "incident"], label: "Case of something", hint: "The definition says 'case of something' -- an occurrence." },
    ],
    synonyms: ["example", "case", "occurrence", "occasion", "illustration"],
  },
  {
    word: "instruct",
    partOfSpeech: "verb",
    definition: "To teach someone or tell them how to do something; to direct or order.",
    keyConcepts: [
      { keyword: "teach or tell how", matchTerms: ["teach", "tell", "how", "educate", "train", "show"], label: "Teach or tell how", hint: "The definition says 'teach someone or tell them how' -- giving knowledge." },
      { keyword: "direct or order", matchTerms: ["direct", "order", "command", "guide", "advise"], label: "Direct or order", hint: "The definition says 'direct or order' -- giving instructions." },
    ],
    synonyms: ["teach", "direct", "guide", "train", "order"],
  },
  {
    word: "integrate",
    partOfSpeech: "verb",
    definition: "To combine things so they work together as a whole; to bring into equal participation.",
    keyConcepts: [
      { keyword: "combine to work together", matchTerms: ["combine", "work together", "unify", "merge", "incorporate", "blend"], label: "Combine to work together", hint: "The definition says 'combine things so they work together' -- making them one." },
      { keyword: "equal participation", matchTerms: ["equal", "participat", "include", "desegregate", "unite"], label: "Equal participation", hint: "The definition says 'bring into equal participation' -- including everyone." },
    ],
    synonyms: ["combine", "merge", "unify", "incorporate", "blend"],
  },
  {
    word: "intense",
    partOfSpeech: "adjective",
    definition: "Very strong or extreme in degree or force; deeply felt.",
    keyConcepts: [
      { keyword: "very strong", matchTerms: ["very", "strong", "extreme", "powerful", "great", "severe"], label: "Very strong", hint: "The definition says 'very strong or extreme' -- not mild." },
      { keyword: "deeply felt", matchTerms: ["deep", "felt", "profound", "passionate", "fervent", "ardent"], label: "Deeply felt", hint: "The definition says 'deeply felt' -- with strong emotion." },
    ],
    synonyms: ["extreme", "powerful", "strong", "fierce", "profound"],
  },
  {
    word: "interact",
    partOfSpeech: "verb",
    definition: "To communicate or work with others; to have an effect on each other.",
    keyConcepts: [
      { keyword: "communicate or work with", matchTerms: ["communicat", "work with", "engage", "connect", "relate"], label: "Communicate or work with", hint: "The definition says 'communicate or work with others' -- engaging with people." },
      { keyword: "effect on each other", matchTerms: ["effect", "each other", "mutual", "reciprocal", "influence"], label: "Effect on each other", hint: "The definition says 'have an effect on each other' -- mutual influence." },
    ],
    synonyms: ["communicate", "engage", "relate", "connect", "cooperate"],
  },
  {
    word: "intervene",
    partOfSpeech: "verb",
    definition: "To become involved in a situation to change or prevent something.",
    keyConcepts: [
      { keyword: "become involved", matchTerms: ["become", "involved", "step in", "enter", "intercede", "mediate"], label: "Become involved", hint: "The definition says 'become involved in a situation' -- stepping in." },
      { keyword: "change or prevent", matchTerms: ["change", "prevent", "stop", "alter", "influence", "interfere"], label: "Change or prevent", hint: "The definition says 'to change or prevent something' -- affecting the outcome." },
    ],
    synonyms: ["interfere", "intercede", "mediate", "step in", "interpose"],
  },
  {
    word: "intuitive",
    partOfSpeech: "adjective",
    definition: "Based on instinct rather than conscious reasoning; easy to understand naturally.",
    keyConcepts: [
      { keyword: "based on instinct", matchTerms: ["based", "instinct", "gut", "feel", "innate", "natural"], label: "Based on instinct", hint: "The definition says 'based on instinct rather than conscious reasoning' -- just knowing." },
      { keyword: "easy to understand", matchTerms: ["easy", "understand", "natural", "obvious", "self-evident", "clear"], label: "Easy to understand", hint: "The definition says 'easy to understand naturally' -- makes sense without explanation." },
    ],
    synonyms: ["instinctive", "natural", "innate", "automatic", "spontaneous"],
  },
  {
    word: "irrelevant",
    partOfSpeech: "adjective",
    definition: "Not connected or related to the matter at hand; not important.",
    keyConcepts: [
      { keyword: "not connected", matchTerms: ["not connected", "unrelated", "beside the point", "off-topic", "extraneous"], label: "Not connected", hint: "The definition says 'not connected or related' -- doesn't apply." },
      { keyword: "not important", matchTerms: ["not important", "immaterial", "insignificant", "inconsequential", "trivial"], label: "Not important", hint: "The definition says 'not important' -- doesn't matter here." },
    ],
    synonyms: ["unrelated", "immaterial", "extraneous", "beside the point", "inapplicable"],
  },
  {
    word: "isolate",
    partOfSpeech: "verb",
    definition: "To set apart from others; to place alone or separate.",
    keyConcepts: [
      { keyword: "set apart", matchTerms: ["set apart", "separate", "detach", "segregate", "cut off"], label: "Set apart", hint: "The definition says 'set apart from others' -- making distinct." },
      { keyword: "place alone", matchTerms: ["alone", "single out", "quarantine", "seclude", "remove"], label: "Place alone", hint: "The definition says 'place alone or separate' -- away from the rest." },
    ],
    synonyms: ["separate", "segregate", "detach", "seclude", "quarantine"],
  },
  {
    word: "latent",
    partOfSpeech: "adjective",
    definition: "Present but not visible or active; hidden or dormant.",
    keyConcepts: [
      { keyword: "present but not visible", matchTerms: ["present", "not visible", "hidden", "concealed", "unseen"], label: "Present but not visible", hint: "The definition says 'present but not visible' -- there but not showing." },
      { keyword: "dormant", matchTerms: ["dormant", "inactive", "potential", "underlying", "suppressed"], label: "Dormant", hint: "The definition says 'hidden or dormant' -- waiting to emerge." },
    ],
    synonyms: ["hidden", "dormant", "potential", "concealed", "underlying"],
  },
  {
    word: "liberal",
    partOfSpeech: "adjective",
    definition: "Open to new ideas and willing to change; generous or ample.",
    keyConcepts: [
      { keyword: "open to new ideas", matchTerms: ["open", "new", "ideas", "tolerant", "broad-minded", "progressive"], label: "Open to new ideas", hint: "The definition says 'open to new ideas' -- accepting of change." },
      { keyword: "generous", matchTerms: ["generous", "ample", "abundant", "plentiful", "lavish", "giving"], label: "Generous", hint: "The definition says 'generous or ample' -- giving freely." },
    ],
    synonyms: ["open-minded", "tolerant", "generous", "progressive", "broad-minded"],
  },
  {
    word: "likelihood",
    partOfSpeech: "noun",
    definition: "The chance or probability that something will happen.",
    keyConcepts: [
      { keyword: "chance", matchTerms: ["chance", "probability", "odds", "prospect", "possibility"], label: "Chance", hint: "The definition says 'the chance or probability' -- how likely it is." },
      { keyword: "will happen", matchTerms: ["will happen", "occur", "event", "outcome", "expectation"], label: "Will happen", hint: "The definition says 'something will happen' -- future occurrence." },
    ],
    synonyms: ["probability", "chance", "possibility", "prospect", "odds"],
  },
  {
    word: "limit",
    partOfSpeech: "verb",
    definition: "To set or serve as a boundary; to restrict the extent of something.",
    keyConcepts: [
      { keyword: "set a boundary", matchTerms: ["set", "boundary", "cap", "ceiling", "maximum", "threshold"], label: "Set a boundary", hint: "The definition says 'set or serve as a boundary' -- defining the edge." },
      { keyword: "restrict extent", matchTerms: ["restrict", "extent", "constrain", "confine", "curb", "control"], label: "Restrict extent", hint: "The definition says 'restrict the extent' -- keeping within bounds." },
    ],
    synonyms: ["restrict", "constrain", "cap", "curb", "confine"],
  },
  {
    word: "maintain",
    partOfSpeech: "verb",
    definition: "To keep in good condition; to continue to have or hold.",
    keyConcepts: [
      { keyword: "keep in good condition", matchTerms: ["keep", "good", "condition", "preserve", "upkeep", "care for"], label: "Keep in good condition", hint: "The definition says 'keep in good condition' -- taking care of." },
      { keyword: "continue to have", matchTerms: ["continue", "have", "hold", "sustain", "retain", "persist"], label: "Continue to have", hint: "The definition says 'continue to have or hold' -- keeping possession." },
    ],
    synonyms: ["preserve", "sustain", "keep", "retain", "uphold"],
  },
  {
    word: "margin",
    partOfSpeech: "noun",
    definition: "The edge or border of something; an amount beyond what is necessary.",
    keyConcepts: [
      { keyword: "edge or border", matchTerms: ["edge", "border", "boundary", "perimeter", "rim", "side"], label: "Edge or border", hint: "The definition says 'the edge or border' -- the outer part." },
      { keyword: "amount beyond necessary", matchTerms: ["amount", "beyond", "necessary", "extra", "surplus", "buffer", "leeway"], label: "Amount beyond necessary", hint: "The definition says 'amount beyond what is necessary' -- extra room." },
    ],
    synonyms: ["edge", "border", "buffer", "leeway", "surplus"],
  },
  {
    word: "mediate",
    partOfSpeech: "verb",
    definition: "To intervene between parties to bring about agreement; to settle a dispute.",
    keyConcepts: [
      { keyword: "intervene between parties", matchTerms: ["intervene", "between", "parties", "middle", "go-between", "arbitrate"], label: "Intervene between parties", hint: "The definition says 'intervene between parties' -- being in the middle." },
      { keyword: "bring about agreement", matchTerms: ["agreement", "settle", "dispute", "resolve", "reconcile", "negotiate"], label: "Bring about agreement", hint: "The definition says 'bring about agreement' -- helping them agree." },
    ],
    synonyms: ["arbitrate", "negotiate", "reconcile", "intercede", "referee"],
  },
  {
    word: "monitor",
    partOfSpeech: "verb",
    definition: "To observe and check over a period of time; to keep track of.",
    keyConcepts: [
      { keyword: "observe and check", matchTerms: ["observe", "check", "watch", "survey", "supervise", "oversee"], label: "Observe and check", hint: "The definition says 'observe and check' -- keeping an eye on." },
      { keyword: "over time", matchTerms: ["over time", "period", "track", "follow", "record", "continuous"], label: "Over time", hint: "The definition says 'over a period of time' -- ongoing observation." },
    ],
    synonyms: ["observe", "watch", "track", "supervise", "oversee"],
  },
  {
    word: "motivate",
    partOfSpeech: "verb",
    definition: "To provide someone with a reason to act; to inspire or encourage.",
    keyConcepts: [
      { keyword: "provide reason to act", matchTerms: ["provide", "reason", "act", "cause", "drive", "prompt"], label: "Provide reason to act", hint: "The definition says 'provide someone with a reason to act' -- giving them a why." },
      { keyword: "inspire or encourage", matchTerms: ["inspire", "encourage", "stimulat", "spur", "energize", "galvanize"], label: "Inspire or encourage", hint: "The definition says 'inspire or encourage' -- pushing them forward." },
    ],
    synonyms: ["inspire", "encourage", "drive", "stimulate", "spur"],
  },
  {
    word: "mutual",
    partOfSpeech: "adjective",
    definition: "Experienced or done by each of two or more parties toward the other; shared.",
    keyConcepts: [
      { keyword: "by each toward the other", matchTerms: ["each", "toward", "other", "reciprocal", "two-way", "both"], label: "By each toward the other", hint: "The definition says 'done by each toward the other' -- goes both ways." },
      { keyword: "shared", matchTerms: ["shared", "common", "joint", "collective", "together"], label: "Shared", hint: "The definition says 'shared' -- held in common." },
    ],
    synonyms: ["reciprocal", "shared", "common", "joint", "collective"],
  },
  {
    word: "negotiate",
    partOfSpeech: "verb",
    definition: "To discuss something to reach an agreement; to find a way through an obstacle.",
    keyConcepts: [
      { keyword: "discuss to reach agreement", matchTerms: ["discuss", "reach", "agreement", "bargain", "deal", "settle", "terms"], label: "Discuss to reach agreement", hint: "The definition says 'discuss something to reach an agreement' -- working out terms." },
      { keyword: "find way through", matchTerms: ["find", "way", "through", "obstacle", "navigate", "maneuver", "handle"], label: "Find way through", hint: "The definition says 'find a way through an obstacle' -- getting past difficulties." },
    ],
    synonyms: ["bargain", "discuss", "mediate", "arrange", "navigate"],
  },
  {
    word: "notion",
    partOfSpeech: "noun",
    definition: "A general idea or concept; a belief or opinion.",
    keyConcepts: [
      { keyword: "general idea", matchTerms: ["general", "idea", "concept", "thought", "understanding", "impression"], label: "General idea", hint: "The definition says 'a general idea or concept' -- a thought about something." },
      { keyword: "belief or opinion", matchTerms: ["belief", "opinion", "view", "theory", "fancy", "whim"], label: "Belief or opinion", hint: "The definition says 'a belief or opinion' -- what someone thinks." },
    ],
    synonyms: ["idea", "concept", "belief", "opinion", "thought"],
  },
  {
    word: "obtain",
    partOfSpeech: "verb",
    definition: "To get or acquire something; to come into possession of.",
    keyConcepts: [
      { keyword: "get or acquire", matchTerms: ["get", "acquire", "gain", "secure", "procure", "attain"], label: "Get or acquire", hint: "The definition says 'get or acquire something' -- coming to have it." },
      { keyword: "come into possession", matchTerms: ["come into", "possession", "receive", "collect", "earn"], label: "Come into possession", hint: "The definition says 'come into possession of' -- now you have it." },
    ],
    synonyms: ["acquire", "get", "gain", "secure", "procure"],
  },
  {
    word: "offset",
    partOfSpeech: "verb",
    definition: "To counterbalance or compensate for something.",
    keyConcepts: [
      { keyword: "counterbalance", matchTerms: ["counterbalance", "balance", "neutralize", "cancel out", "counteract"], label: "Counterbalance", hint: "The definition says 'counterbalance' -- evening things out." },
      { keyword: "compensate for", matchTerms: ["compensate", "make up for", "counter", "mitigate", "equalize"], label: "Compensate for", hint: "The definition says 'compensate for something' -- making up for it." },
    ],
    synonyms: ["counterbalance", "compensate", "neutralize", "counteract", "cancel out"],
  },
  {
    word: "ongoing",
    partOfSpeech: "adjective",
    definition: "Continuing without stopping; in progress.",
    keyConcepts: [
      { keyword: "continuing", matchTerms: ["continu", "without stopping", "constant", "persistent", "unceasing"], label: "Continuing", hint: "The definition says 'continuing without stopping' -- keeps going." },
      { keyword: "in progress", matchTerms: ["in progress", "current", "active", "underway", "unfinished"], label: "In progress", hint: "The definition says 'in progress' -- happening now." },
    ],
    synonyms: ["continuing", "current", "in progress", "persistent", "unceasing"],
  },
  {
    word: "option",
    partOfSpeech: "noun",
    definition: "A choice or alternative available; the freedom to choose.",
    keyConcepts: [
      { keyword: "choice available", matchTerms: ["choice", "available", "alternative", "possibility", "selection"], label: "Choice available", hint: "The definition says 'a choice or alternative available' -- something you can pick." },
      { keyword: "freedom to choose", matchTerms: ["freedom", "choose", "right", "opportunity", "discretion"], label: "Freedom to choose", hint: "The definition says 'the freedom to choose' -- having the power to decide." },
    ],
    synonyms: ["choice", "alternative", "selection", "possibility", "preference"],
  },
  {
    word: "ordinary",
    partOfSpeech: "adjective",
    definition: "Normal or usual; not special or different.",
    keyConcepts: [
      { keyword: "normal or usual", matchTerms: ["normal", "usual", "regular", "typical", "standard", "common"], label: "Normal or usual", hint: "The definition says 'normal or usual' -- nothing out of the ordinary." },
      { keyword: "not special", matchTerms: ["not special", "different", "average", "plain", "unremarkable", "mundane"], label: "Not special", hint: "The definition says 'not special or different' -- just like the rest." },
    ],
    synonyms: ["normal", "usual", "common", "typical", "average"],
  },
  {
    word: "parallel",
    partOfSpeech: "adjective",
    definition: "Side by side at an equal distance; similar or corresponding.",
    keyConcepts: [
      { keyword: "side by side", matchTerms: ["side by side", "equal distance", "alongside", "running together"], label: "Side by side", hint: "The definition says 'side by side at an equal distance' -- never meeting." },
      { keyword: "similar or corresponding", matchTerms: ["similar", "corresponding", "analogous", "comparable", "equivalent"], label: "Similar or corresponding", hint: "The definition says 'similar or corresponding' -- alike in nature." },
    ],
    synonyms: ["similar", "corresponding", "analogous", "comparable", "equivalent"],
  },
  {
    word: "parameter",
    partOfSpeech: "noun",
    definition: "A limit or boundary that defines the scope of something; a factor or variable.",
    keyConcepts: [
      { keyword: "limit or boundary", matchTerms: ["limit", "boundary", "constraint", "guideline", "framework"], label: "Limit or boundary", hint: "The definition says 'a limit or boundary' -- what defines the edges." },
      { keyword: "factor or variable", matchTerms: ["factor", "variable", "element", "criterion", "specification"], label: "Factor or variable", hint: "The definition says 'a factor or variable' -- something that can change." },
    ],
    synonyms: ["limit", "boundary", "guideline", "variable", "specification"],
  },
  {
    word: "partial",
    partOfSpeech: "adjective",
    definition: "Existing only in part; not complete or whole.",
    keyConcepts: [
      { keyword: "only in part", matchTerms: ["part", "incomplete", "fragment", "portion", "some"], label: "Only in part", hint: "The definition says 'existing only in part' -- not the whole thing." },
      { keyword: "not complete", matchTerms: ["not complete", "whole", "unfinished", "limited", "fractional"], label: "Not complete", hint: "The definition says 'not complete or whole' -- something is missing." },
    ],
    synonyms: ["incomplete", "fragmentary", "limited", "fractional", "half"],
  },
  {
    word: "participate",
    partOfSpeech: "verb",
    definition: "To take part in an activity or event; to be involved.",
    keyConcepts: [
      { keyword: "take part in", matchTerms: ["take part", "activity", "event", "join", "engage", "contribute"], label: "Take part in", hint: "The definition says 'take part in an activity' -- being part of it." },
      { keyword: "be involved", matchTerms: ["involved", "share", "partake", "cooperate", "collaborate"], label: "Be involved", hint: "The definition says 'be involved' -- actively doing something." },
    ],
    synonyms: ["join", "engage", "take part", "contribute", "partake"],
  },
  {
    word: "persist",
    partOfSpeech: "verb",
    definition: "To continue firmly despite difficulty or opposition; to endure.",
    keyConcepts: [
      { keyword: "continue firmly", matchTerms: ["continue", "firmly", "keep on", "carry on", "persevere", "insist"], label: "Continue firmly", hint: "The definition says 'continue firmly' -- not giving up." },
      { keyword: "despite difficulty", matchTerms: ["despite", "difficult", "opposition", "obstacle", "challenge", "hardship"], label: "Despite difficulty", hint: "The definition says 'despite difficulty or opposition' -- even when it's hard." },
    ],
    synonyms: ["persevere", "continue", "endure", "insist", "carry on"],
  },
  {
    word: "predict",
    partOfSpeech: "verb",
    definition: "To say or estimate that something will happen in the future.",
    keyConcepts: [
      { keyword: "say will happen", matchTerms: ["say", "will happen", "foretell", "forecast", "prophesy", "foresee"], label: "Say will happen", hint: "The definition says 'say that something will happen' -- telling the future." },
      { keyword: "estimate future", matchTerms: ["estimate", "future", "anticipat", "expect", "project"], label: "Estimate future", hint: "The definition says 'estimate that something will happen in the future' -- making a guess about what's coming." },
    ],
    synonyms: ["forecast", "foresee", "anticipate", "foretell", "project"],
  },
  {
    word: "preference",
    partOfSpeech: "noun",
    definition: "A greater liking for one thing over another; a favored choice.",
    keyConcepts: [
      { keyword: "greater liking", matchTerms: ["greater", "liking", "favor", "prefer", "inclin", "lean toward"], label: "Greater liking", hint: "The definition says 'a greater liking for one thing' -- what you like more." },
      { keyword: "over another", matchTerms: ["over another", "choice", "alternative", "option", "instead of"], label: "Over another", hint: "The definition says 'over another' -- compared to something else." },
    ],
    synonyms: ["choice", "favorite", "inclination", "liking", "predilection"],
  },
  {
    word: "preliminary",
    partOfSpeech: "adjective",
    definition: "Done in preparation for something more important; introductory.",
    keyConcepts: [
      { keyword: "in preparation", matchTerms: ["preparation", "preparatory", "advance", "prior", "preceding"], label: "In preparation", hint: "The definition says 'done in preparation' -- getting ready for what's next." },
      { keyword: "introductory", matchTerms: ["introductory", "initial", "opening", "early", "first"], label: "Introductory", hint: "The definition says 'introductory' -- before the main event." },
    ],
    synonyms: ["preparatory", "introductory", "initial", "prior", "opening"],
  },
  {
    word: "preserve",
    partOfSpeech: "verb",
    definition: "To maintain something in its original state; to keep safe from harm.",
    keyConcepts: [
      { keyword: "maintain original state", matchTerms: ["maintain", "original", "state", "keep", "conserve", "protect"], label: "Maintain original state", hint: "The definition says 'maintain something in its original state' -- keeping it as it was." },
      { keyword: "keep safe from harm", matchTerms: ["safe", "harm", "protect", "safeguard", "defend", "shield"], label: "Keep safe from harm", hint: "The definition says 'keep safe from harm' -- protecting it." },
    ],
    synonyms: ["maintain", "protect", "conserve", "safeguard", "keep"],
  },
  {
    word: "priority",
    partOfSpeech: "noun",
    definition: "Something that is regarded as more important than others; precedence.",
    keyConcepts: [
      { keyword: "more important", matchTerms: ["more", "important", "first", "primary", "chief", "main"], label: "More important", hint: "The definition says 'regarded as more important' -- it comes first." },
      { keyword: "precedence", matchTerms: ["precedence", "preference", "rank", "order", "urgency"], label: "Precedence", hint: "The definition says 'precedence' -- taking priority over others." },
    ],
    synonyms: ["precedence", "importance", "preference", "urgency", "primacy"],
  },
  {
    word: "prominent",
    partOfSpeech: "adjective",
    definition: "Important or well-known; standing out so as to be easily seen.",
    keyConcepts: [
      { keyword: "important or well-known", matchTerms: ["important", "well-known", "famous", "notable", "distinguished", "eminent"], label: "Important or well-known", hint: "The definition says 'important or well-known' -- people recognize them." },
      { keyword: "standing out", matchTerms: ["stand out", "conspicuous", "noticeable", "visible", "striking"], label: "Standing out", hint: "The definition says 'standing out so as to be easily seen' -- hard to miss." },
    ],
    synonyms: ["notable", "distinguished", "conspicuous", "eminent", "outstanding"],
  },
  {
    word: "proportion",
    partOfSpeech: "noun",
    definition: "A part or share of a whole; the relationship of one thing to another in size or amount.",
    keyConcepts: [
      { keyword: "part of a whole", matchTerms: ["part", "share", "whole", "portion", "fraction", "percentage"], label: "Part of a whole", hint: "The definition says 'a part or share of a whole' -- how much of the total." },
      { keyword: "relationship in size", matchTerms: ["relationship", "size", "amount", "ratio", "scale", "relative"], label: "Relationship in size", hint: "The definition says 'the relationship in size or amount' -- how things compare." },
    ],
    synonyms: ["ratio", "share", "portion", "fraction", "percentage"],
  },
  {
    word: "prospect",
    partOfSpeech: "noun",
    definition: "The possibility of something happening; a person regarded as likely to succeed.",
    keyConcepts: [
      { keyword: "possibility of happening", matchTerms: ["possibil", "happen", "chance", "likelihood", "potential", "outlook"], label: "Possibility of happening", hint: "The definition says 'the possibility of something happening' -- what might come." },
      { keyword: "likely to succeed", matchTerms: ["likely", "succeed", "candidate", "potential", "promising"], label: "Likely to succeed", hint: "The definition says 'a person regarded as likely to succeed' -- has potential." },
    ],
    synonyms: ["possibility", "chance", "potential", "outlook", "candidate"],
  },
  {
    word: "protocol",
    partOfSpeech: "noun",
    definition: "The official procedure or system of rules governing affairs; accepted code of behavior.",
    keyConcepts: [
      { keyword: "official procedure", matchTerms: ["official", "procedure", "system", "rules", "guideline", "regulation"], label: "Official procedure", hint: "The definition says 'official procedure or system of rules' -- the proper way." },
      { keyword: "code of behavior", matchTerms: ["code", "behavior", "conduct", "etiquette", "convention", "custom"], label: "Code of behavior", hint: "The definition says 'accepted code of behavior' -- how to act." },
    ],
    synonyms: ["procedure", "rules", "convention", "etiquette", "guidelines"],
  },
  {
    word: "react",
    partOfSpeech: "verb",
    definition: "To respond to something in a particular way; to act in opposition.",
    keyConcepts: [
      { keyword: "respond to something", matchTerms: ["respond", "reply", "answer", "response", "return"], label: "Respond to something", hint: "The definition says 'respond to something' -- giving a response." },
      { keyword: "in a particular way", matchTerms: ["particular", "way", "manner", "behave", "act", "reciprocat"], label: "In a particular way", hint: "The definition says 'in a particular way' -- how you respond." },
    ],
    synonyms: ["respond", "reply", "answer", "retaliate", "reciprocate"],
  },
  {
    word: "reasonable",
    partOfSpeech: "adjective",
    definition: "Fair and sensible; not excessive or extreme.",
    keyConcepts: [
      { keyword: "fair and sensible", matchTerms: ["fair", "sensible", "rational", "logical", "sound", "wise"], label: "Fair and sensible", hint: "The definition says 'fair and sensible' -- makes sense." },
      { keyword: "not excessive", matchTerms: ["not excessive", "extreme", "moderate", "acceptable", "within reason"], label: "Not excessive", hint: "The definition says 'not excessive or extreme' -- in moderation." },
    ],
    synonyms: ["fair", "sensible", "rational", "moderate", "logical"],
  },
  {
    word: "recover",
    partOfSpeech: "verb",
    definition: "To return to a normal state after illness or difficulty; to get back something lost.",
    keyConcepts: [
      { keyword: "return to normal", matchTerms: ["return", "normal", "state", "heal", "recuperat", "improve", "bounce back"], label: "Return to normal", hint: "The definition says 'return to a normal state' -- getting better." },
      { keyword: "get back", matchTerms: ["get back", "lost", "regain", "retrieve", "reclaim", "recoup"], label: "Get back something lost", hint: "The definition says 'get back something lost' -- recovering what was yours." },
    ],
    synonyms: ["regain", "recuperate", "retrieve", "reclaim", "heal"],
  },
  {
    word: "reduce",
    partOfSpeech: "verb",
    definition: "To make smaller or less in amount, degree, or size.",
    keyConcepts: [
      { keyword: "make smaller", matchTerms: ["make", "smaller", "less", "decrease", "diminish", "lower", "cut"], label: "Make smaller", hint: "The definition says 'make smaller or less' -- bringing it down." },
      { keyword: "amount degree size", matchTerms: ["amount", "degree", "size", "quantity", "level", "extent"], label: "Amount, degree, or size", hint: "The definition says 'in amount, degree, or size' -- various measures." },
    ],
    synonyms: ["decrease", "diminish", "lower", "cut", "lessen"],
  },
  {
    word: "reinforce",
    partOfSpeech: "verb",
    definition: "To strengthen or support, especially with additional material or help.",
    keyConcepts: [
      { keyword: "strengthen or support", matchTerms: ["strengthen", "support", "bolster", "fortify", "buttress"], label: "Strengthen or support", hint: "The definition says 'strengthen or support' -- making it stronger." },
      { keyword: "additional material", matchTerms: ["additional", "material", "help", "extra", "supplement", "backup"], label: "Additional material", hint: "The definition says 'with additional material or help' -- adding more." },
    ],
    synonyms: ["strengthen", "bolster", "fortify", "support", "buttress"],
  },
  {
    word: "reject",
    partOfSpeech: "verb",
    definition: "To refuse to accept, consider, or use; to dismiss as inadequate.",
    keyConcepts: [
      { keyword: "refuse to accept", matchTerms: ["refuse", "accept", "decline", "turn down", "say no", "deny"], label: "Refuse to accept", hint: "The definition says 'refuse to accept' -- saying no." },
      { keyword: "dismiss as inadequate", matchTerms: ["dismiss", "inadequate", "discard", "rebuff", "spurn", "exclude"], label: "Dismiss as inadequate", hint: "The definition says 'dismiss as inadequate' -- not good enough." },
    ],
    synonyms: ["refuse", "decline", "dismiss", "spurn", "rebuff"],
  },
  {
    word: "rely",
    partOfSpeech: "verb",
    definition: "To depend on with full trust or confidence.",
    keyConcepts: [
      { keyword: "depend on", matchTerms: ["depend", "count on", "lean on", "trust", "bank on"], label: "Depend on", hint: "The definition says 'depend on' -- needing something." },
      { keyword: "trust or confidence", matchTerms: ["trust", "confidence", "faith", "belief", "assurance"], label: "Trust or confidence", hint: "The definition says 'with full trust or confidence' -- believing in it." },
    ],
    synonyms: ["depend", "count on", "trust", "lean on", "bank on"],
  },
  {
    word: "remove",
    partOfSpeech: "verb",
    definition: "To take away from a place or position; to eliminate.",
    keyConcepts: [
      { keyword: "take away", matchTerms: ["take away", "place", "position", "withdraw", "extract", "move"], label: "Take away", hint: "The definition says 'take away from a place' -- relocating it." },
      { keyword: "eliminate", matchTerms: ["eliminat", "get rid of", "delete", "erase", "abolish"], label: "Eliminate", hint: "The definition says 'eliminate' -- getting rid of it." },
    ],
    synonyms: ["take away", "eliminate", "withdraw", "extract", "delete"],
  },
  {
    word: "resolve",
    partOfSpeech: "verb",
    definition: "To settle or find a solution to a problem; to decide firmly.",
    keyConcepts: [
      { keyword: "settle or find solution", matchTerms: ["settle", "find", "solution", "solve", "fix", "clear up"], label: "Settle or find solution", hint: "The definition says 'settle or find a solution' -- fixing the problem." },
      { keyword: "decide firmly", matchTerms: ["decide", "firmly", "determine", "make up mind", "commit"], label: "Decide firmly", hint: "The definition says 'decide firmly' -- making a strong decision." },
    ],
    synonyms: ["solve", "settle", "determine", "decide", "fix"],
  },
  {
    word: "resource",
    partOfSpeech: "noun",
    definition: "A supply of something that can be used when needed; a source of help or information.",
    keyConcepts: [
      { keyword: "supply that can be used", matchTerms: ["supply", "used", "available", "stock", "reserve", "asset"], label: "Supply that can be used", hint: "The definition says 'a supply of something that can be used' -- something valuable." },
      { keyword: "source of help", matchTerms: ["source", "help", "information", "support", "aid", "reference"], label: "Source of help", hint: "The definition says 'a source of help or information' -- where to go for assistance." },
    ],
    synonyms: ["supply", "asset", "reserve", "source", "means"],
  },
  {
    word: "restrain",
    partOfSpeech: "verb",
    definition: "To hold back or prevent from doing something; to keep under control.",
    keyConcepts: [
      { keyword: "hold back", matchTerms: ["hold back", "prevent", "stop", "check", "curb", "inhibit"], label: "Hold back", hint: "The definition says 'hold back or prevent' -- stopping something." },
      { keyword: "keep under control", matchTerms: ["keep", "control", "contain", "limit", "restrict", "suppress"], label: "Keep under control", hint: "The definition says 'keep under control' -- not letting it loose." },
    ],
    synonyms: ["hold back", "control", "check", "curb", "contain"],
  },
  {
    word: "retain",
    partOfSpeech: "verb",
    definition: "To continue to have or keep; to not lose or let go of.",
    keyConcepts: [
      { keyword: "continue to have", matchTerms: ["continue", "have", "keep", "hold", "maintain", "preserve"], label: "Continue to have", hint: "The definition says 'continue to have or keep' -- keeping it." },
      { keyword: "not lose", matchTerms: ["not lose", "let go", "hold onto", "save", "reserve"], label: "Not lose", hint: "The definition says 'not lose or let go of' -- keeping possession." },
    ],
    synonyms: ["keep", "hold", "maintain", "preserve", "save"],
  },
  {
    word: "reverse",
    partOfSpeech: "verb",
    definition: "To move backward or in the opposite direction; to turn something the other way.",
    keyConcepts: [
      { keyword: "move backward", matchTerms: ["move", "backward", "back", "retreat", "revers"], label: "Move backward", hint: "The definition says 'move backward' -- going in reverse." },
      { keyword: "opposite direction", matchTerms: ["opposite", "direction", "invert", "flip", "turn around", "undo"], label: "Opposite direction", hint: "The definition says 'in the opposite direction' -- the other way." },
    ],
    synonyms: ["invert", "overturn", "undo", "flip", "turn around"],
  },
  {
    word: "simulate",
    partOfSpeech: "verb",
    definition: "To imitate the appearance or character of; to create a model of.",
    keyConcepts: [
      { keyword: "imitate appearance", matchTerms: ["imitat", "appearance", "character", "mimic", "replicate", "copy"], label: "Imitate appearance", hint: "The definition says 'imitate the appearance or character' -- copying something." },
      { keyword: "create a model", matchTerms: ["create", "model", "reproduc", "emulat", "represent"], label: "Create a model", hint: "The definition says 'create a model of' -- making a representation." },
    ],
    synonyms: ["imitate", "replicate", "mimic", "model", "emulate"],
  },
  {
    word: "source",
    partOfSpeech: "noun",
    definition: "A place or thing from which something originates; a person who provides information.",
    keyConcepts: [
      { keyword: "place thing originates", matchTerms: ["place", "thing", "originat", "come from", "beginning", "root", "origin"], label: "Place something originates", hint: "The definition says 'place or thing from which something originates' -- where it starts." },
      { keyword: "provides information", matchTerms: ["provid", "information", "person", "supplier", "reference"], label: "Provides information", hint: "The definition says 'a person who provides information' -- gives you the facts." },
    ],
    synonyms: ["origin", "root", "basis", "supplier", "reference"],
  },
  {
    word: "stable",
    partOfSpeech: "adjective",
    definition: "Not likely to change or fail; firmly established.",
    keyConcepts: [
      { keyword: "not likely to change", matchTerms: ["not", "likely", "change", "fail", "steady", "constant", "secure"], label: "Not likely to change", hint: "The definition says 'not likely to change or fail' -- dependable." },
      { keyword: "firmly established", matchTerms: ["firmly", "established", "solid", "fixed", "permanent", "lasting"], label: "Firmly established", hint: "The definition says 'firmly established' -- well-founded." },
    ],
    synonyms: ["steady", "secure", "solid", "constant", "permanent"],
  },
  {
    word: "standard",
    partOfSpeech: "noun",
    definition: "A level of quality or achievement; a rule or model for comparison.",
    keyConcepts: [
      { keyword: "level of quality", matchTerms: ["level", "quality", "achievement", "grade", "benchmark", "criterion"], label: "Level of quality", hint: "The definition says 'a level of quality' -- how good something should be." },
      { keyword: "rule for comparison", matchTerms: ["rule", "model", "comparison", "measure", "norm", "guideline"], label: "Rule for comparison", hint: "The definition says 'a rule or model for comparison' -- what to compare against." },
    ],
    synonyms: ["benchmark", "criterion", "norm", "measure", "guideline"],
  },
  {
    word: "strategy",
    partOfSpeech: "noun",
    definition: "A plan of action designed to achieve a long-term goal.",
    keyConcepts: [
      { keyword: "plan of action", matchTerms: ["plan", "action", "approach", "method", "scheme", "tactic"], label: "Plan of action", hint: "The definition says 'a plan of action' -- how you'll do it." },
      { keyword: "achieve long-term goal", matchTerms: ["achieve", "long-term", "goal", "objective", "aim", "target"], label: "Achieve long-term goal", hint: "The definition says 'achieve a long-term goal' -- big picture planning." },
    ],
    synonyms: ["plan", "approach", "tactic", "method", "scheme"],
  },
  {
    word: "sustain",
    partOfSpeech: "verb",
    definition: "To maintain or support over a period of time; to keep going.",
    keyConcepts: [
      { keyword: "maintain or support", matchTerms: ["maintain", "support", "keep", "preserve", "continue", "uphold"], label: "Maintain or support", hint: "The definition says 'maintain or support' -- keeping it going." },
      { keyword: "over time", matchTerms: ["over time", "period", "prolonged", "lasting", "endur"], label: "Over time", hint: "The definition says 'over a period of time' -- for the long term." },
    ],
    synonyms: ["maintain", "support", "uphold", "continue", "preserve"],
  },
  {
    word: "symbolic",
    partOfSpeech: "adjective",
    definition: "Serving as a symbol or representation of something; having significance beyond the literal.",
    keyConcepts: [
      { keyword: "serving as symbol", matchTerms: ["symbol", "represent", "stand for", "signif", "emblem", "token"], label: "Serving as symbol", hint: "The definition says 'serving as a symbol' -- standing for something else." },
      { keyword: "beyond the literal", matchTerms: ["beyond", "literal", "meaning", "figurative", "abstract", "deeper"], label: "Beyond the literal", hint: "The definition says 'significance beyond the literal' -- deeper meaning." },
    ],
    synonyms: ["representative", "emblematic", "figurative", "metaphorical", "significant"],
  },
  {
    word: "tactic",
    partOfSpeech: "noun",
    definition: "A specific action or method used to achieve a particular end.",
    keyConcepts: [
      { keyword: "specific action", matchTerms: ["specific", "action", "method", "move", "maneuver", "approach"], label: "Specific action", hint: "The definition says 'a specific action or method' -- a particular move." },
      { keyword: "achieve particular end", matchTerms: ["achieve", "particular", "end", "goal", "result", "purpose"], label: "Achieve particular end", hint: "The definition says 'to achieve a particular end' -- getting a specific result." },
    ],
    synonyms: ["strategy", "method", "approach", "maneuver", "move"],
  },
  {
    word: "temporary",
    partOfSpeech: "adjective",
    definition: "Lasting for only a limited period of time; not permanent.",
    keyConcepts: [
      { keyword: "limited period", matchTerms: ["limited", "period", "time", "short", "brief", "finite"], label: "Limited period", hint: "The definition says 'lasting for only a limited period' -- not forever." },
      { keyword: "not permanent", matchTerms: ["not permanent", "transient", "passing", "momentary", "interim"], label: "Not permanent", hint: "The definition says 'not permanent' -- will end." },
    ],
    synonyms: ["short-term", "brief", "transient", "passing", "interim"],
  },
  {
    word: "tendency",
    partOfSpeech: "noun",
    definition: "An inclination toward a particular way of behaving or thinking.",
    keyConcepts: [
      { keyword: "inclination toward", matchTerms: ["inclination", "toward", "lean", "propensity", "disposition", "prone"], label: "Inclination toward", hint: "The definition says 'an inclination toward' -- leaning in a direction." },
      { keyword: "way of behaving", matchTerms: ["way", "behaving", "thinking", "act", "habit", "pattern", "trend"], label: "Way of behaving", hint: "The definition says 'a particular way of behaving or thinking' -- how someone tends to act." },
    ],
    synonyms: ["inclination", "propensity", "disposition", "trend", "leaning"],
  },
  {
    word: "terminate",
    partOfSpeech: "verb",
    definition: "To bring to an end; to conclude or stop.",
    keyConcepts: [
      { keyword: "bring to an end", matchTerms: ["bring", "end", "finish", "stop", "cease", "conclude"], label: "Bring to an end", hint: "The definition says 'bring to an end' -- making it stop." },
      { keyword: "conclude or stop", matchTerms: ["conclude", "stop", "discontinue", "close", "complete"], label: "Conclude or stop", hint: "The definition says 'conclude or stop' -- ending it." },
    ],
    synonyms: ["end", "conclude", "stop", "finish", "discontinue"],
  },
  {
    word: "theoretical",
    partOfSpeech: "adjective",
    definition: "Based on or involving theory rather than practical application; hypothetical.",
    keyConcepts: [
      { keyword: "based on theory", matchTerms: ["based", "theory", "concept", "abstract", "academic", "intellectual"], label: "Based on theory", hint: "The definition says 'based on theory' -- ideas, not practice." },
      { keyword: "not practical", matchTerms: ["not practical", "application", "hypothetical", "speculative", "idealistic"], label: "Not practical", hint: "The definition says 'rather than practical application' -- in theory only." },
    ],
    synonyms: ["hypothetical", "abstract", "conceptual", "speculative", "academic"],
  },
  {
    word: "transform",
    partOfSpeech: "verb",
    definition: "To change completely in form, appearance, or character.",
    keyConcepts: [
      { keyword: "change completely", matchTerms: ["change", "complet", "total", "radical", "dramatic", "thorough"], label: "Change completely", hint: "The definition says 'change completely' -- a total transformation." },
      { keyword: "form appearance character", matchTerms: ["form", "appearance", "character", "nature", "shape", "structure"], label: "Form, appearance, or character", hint: "The definition says 'in form, appearance, or character' -- fundamental aspects." },
    ],
    synonyms: ["change", "convert", "alter", "metamorphose", "revolutionize"],
  },
  {
    word: "transition",
    partOfSpeech: "noun",
    definition: "The process of changing from one state or condition to another.",
    keyConcepts: [
      { keyword: "process of changing", matchTerms: ["process", "changing", "shift", "movement", "passage", "switch"], label: "Process of changing", hint: "The definition says 'the process of changing' -- how it happens." },
      { keyword: "one state to another", matchTerms: ["one", "state", "condition", "another", "phase", "stage"], label: "One state to another", hint: "The definition says 'from one state or condition to another' -- between two points." },
    ],
    synonyms: ["change", "shift", "passage", "switch", "conversion"],
  },
  {
    word: "trigger",
    partOfSpeech: "verb",
    definition: "To cause something to happen or exist; to set off.",
    keyConcepts: [
      { keyword: "cause to happen", matchTerms: ["cause", "happen", "exist", "start", "initiat", "spark", "prompt"], label: "Cause to happen", hint: "The definition says 'cause something to happen' -- making it start." },
      { keyword: "set off", matchTerms: ["set off", "activate", "provoke", "precipitat", "bring about"], label: "Set off", hint: "The definition says 'set off' -- starting a reaction." },
    ],
    synonyms: ["cause", "spark", "provoke", "initiate", "activate"],
  },
  {
    word: "ultimate",
    partOfSpeech: "adjective",
    definition: "Being the best or most extreme of its kind; final or fundamental.",
    keyConcepts: [
      { keyword: "best or most extreme", matchTerms: ["best", "most", "extreme", "greatest", "supreme", "utmost"], label: "Best or most extreme", hint: "The definition says 'being the best or most extreme' -- the highest level." },
      { keyword: "final or fundamental", matchTerms: ["final", "fundamental", "basic", "primary", "underlying", "essential"], label: "Final or fundamental", hint: "The definition says 'final or fundamental' -- at the core." },
    ],
    synonyms: ["supreme", "greatest", "final", "fundamental", "utmost"],
  },
  {
    word: "undergo",
    partOfSpeech: "verb",
    definition: "To experience or be subjected to something, typically something unpleasant.",
    keyConcepts: [
      { keyword: "experience or be subjected", matchTerms: ["experience", "subjected", "go through", "endure", "suffer", "face"], label: "Experience or be subjected", hint: "The definition says 'experience or be subjected to' -- having something happen to you." },
      { keyword: "typically unpleasant", matchTerms: ["unpleasant", "difficult", "challenging", "demanding", "ordeal"], label: "Typically unpleasant", hint: "The definition says 'typically something unpleasant' -- often not enjoyable." },
    ],
    synonyms: ["experience", "endure", "go through", "suffer", "face"],
  },
  {
    word: "underlying",
    partOfSpeech: "adjective",
    definition: "Being the basis or cause of something; fundamental but not obvious.",
    keyConcepts: [
      { keyword: "basis or cause", matchTerms: ["basis", "cause", "foundation", "root", "source", "reason"], label: "Basis or cause", hint: "The definition says 'being the basis or cause' -- what's beneath." },
      { keyword: "not obvious", matchTerms: ["not obvious", "hidden", "fundamental", "basic", "implicit", "latent"], label: "Not obvious", hint: "The definition says 'fundamental but not obvious' -- below the surface." },
    ],
    synonyms: ["fundamental", "basic", "hidden", "root", "essential"],
  },
  {
    word: "utilize",
    partOfSpeech: "verb",
    definition: "To make practical and effective use of something.",
    keyConcepts: [
      { keyword: "make use of", matchTerms: ["make", "use", "employ", "apply", "harness", "exploit"], label: "Make use of", hint: "The definition says 'make practical and effective use' -- putting it to work." },
      { keyword: "practical and effective", matchTerms: ["practical", "effective", "useful", "productive", "efficient"], label: "Practical and effective", hint: "The definition says 'practical and effective' -- actually helpful." },
    ],
    synonyms: ["use", "employ", "apply", "exploit", "harness"],
  },
  {
    word: "valid",
    partOfSpeech: "adjective",
    definition: "Having a sound basis in logic or fact; legally acceptable.",
    keyConcepts: [
      { keyword: "sound basis", matchTerms: ["sound", "basis", "logic", "fact", "reason", "legitimate", "justified"], label: "Sound basis", hint: "The definition says 'having a sound basis in logic or fact' -- well-founded." },
      { keyword: "legally acceptable", matchTerms: ["legal", "acceptable", "binding", "official", "enforceable", "in force"], label: "Legally acceptable", hint: "The definition says 'legally acceptable' -- recognized by law." },
    ],
    synonyms: ["legitimate", "sound", "justified", "legal", "well-founded"],
  },
  {
    word: "variable",
    partOfSpeech: "adjective",
    definition: "Liable to change; not consistent or fixed.",
    keyConcepts: [
      { keyword: "liable to change", matchTerms: ["liable", "change", "vary", "fluctuat", "shift", "alter"], label: "Liable to change", hint: "The definition says 'liable to change' -- can be different." },
      { keyword: "not consistent", matchTerms: ["not consistent", "fixed", "irregular", "unpredictable", "unstable", "inconstant"], label: "Not consistent", hint: "The definition says 'not consistent or fixed' -- doesn't stay the same." },
    ],
    synonyms: ["changeable", "inconsistent", "fluctuating", "unpredictable", "unstable"],
  },
  {
    word: "viable",
    partOfSpeech: "adjective",
    definition: "Capable of working successfully; feasible.",
    keyConcepts: [
      { keyword: "capable of working", matchTerms: ["capable", "working", "function", "succeed", "operat", "effective"], label: "Capable of working", hint: "The definition says 'capable of working successfully' -- it can function." },
      { keyword: "feasible", matchTerms: ["feasible", "practical", "possible", "workable", "realistic", "achievable"], label: "Feasible", hint: "The definition says 'feasible' -- can actually be done." },
    ],
    synonyms: ["feasible", "workable", "practical", "possible", "achievable"],
  },
  {
    word: "visible",
    partOfSpeech: "adjective",
    definition: "Able to be seen; perceptible to the eye.",
    keyConcepts: [
      { keyword: "able to be seen", matchTerms: ["able", "seen", "see", "view", "sight", "observable", "perceivable"], label: "Able to be seen", hint: "The definition says 'able to be seen' -- you can see it." },
      { keyword: "perceptible", matchTerms: ["perceptible", "eye", "apparent", "noticeable", "detectable", "discernible"], label: "Perceptible", hint: "The definition says 'perceptible to the eye' -- can be noticed visually." },
    ],
    synonyms: ["apparent", "observable", "noticeable", "discernible", "evident"],
  },
  {
    word: "unify",
    partOfSpeech: "verb",
    definition: "To make or become united, uniform, or whole; to bring together different parts.",
    keyConcepts: [
      { keyword: "unite", matchTerms: ["unite", "combine", "merge", "integrate", "consolidate", "join", "connect", "link", "cohere", "fuse", "bind"], label: "Make united", hint: "The definition says 'make or become united or whole' -- creating oneness." },
      { keyword: "different parts", matchTerms: ["different", "parts", "elements", "groups", "factions", "components", "areas", "aspects"], label: "Bring together parts", hint: "The definition says 'bring together different parts' -- joining what was separate." },
    ],
    synonyms: ["unite", "integrate", "consolidate"],
  },
  {
    word: "formal",
    partOfSpeech: "adjective",
    definition: "Following established conventions or rules; official and not informal.",
    keyConcepts: [
      { keyword: "convention", matchTerms: ["convention", "rules", "protocol", "procedure", "ceremony", "official", "standard", "established", "proper"], label: "Following conventions", hint: "The definition says 'following established conventions or rules' -- doing things the proper way." },
      { keyword: "official", matchTerms: ["official", "serious", "professional", "structured", "rigid", "solemn", "regulated", "proper", "authoritative"], label: "Official and not informal", hint: "The definition says 'official and not informal' -- the opposite of casual." },
    ],
    synonyms: ["official", "structured", "ceremonial"],
  },
  {
    word: "determined",
    partOfSpeech: "adjective",
    definition: "Having made a firm decision and being resolved not to change it; showing resolve.",
    keyConcepts: [
      { keyword: "firm decision", matchTerms: ["firm", "decided", "resolved", "committed", "intent", "set", "fixed", "unwavering", "dedicated", "certain"], label: "Firm decision", hint: "The definition says 'having made a firm decision' -- a definite commitment." },
      { keyword: "resolve", matchTerms: ["resolve", "willpower", "persistence", "tenacity", "grit", "determination", "drive", "stubbornness"], label: "Showing resolve", hint: "The definition says 'showing resolve' -- inner strength to stay the course." },
    ],
    synonyms: ["resolute", "steadfast", "committed"],
  },
  {
    word: "focus",
    partOfSpeech: "noun",
    definition: "The centre of interest or activity; close attention and concentration on something.",
    keyConcepts: [
      { keyword: "centre", matchTerms: ["centre", "center", "main point", "subject", "topic", "emphasis", "priority", "attention", "core", "target"], label: "Centre of interest", hint: "The definition says 'centre of interest or activity' -- what everything revolves around." },
      { keyword: "concentration", matchTerms: ["concentration", "attention", "effort", "diligence", "commitment", "dedication", "intent", "engagement"], label: "Close attention", hint: "The definition says 'close attention and concentration on something' -- directed mental energy." },
    ],
    synonyms: ["concentration", "centre", "attention"],
  },
  {
    word: "respond",
    partOfSpeech: "verb",
    definition: "To say something in reply; to react to something in a particular way.",
    keyConcepts: [
      { keyword: "reply", matchTerms: ["reply", "answer", "retort", "react", "address", "comment", "speak", "say", "counter"], label: "Say something in reply", hint: "The definition says 'say something in reply' -- giving an answer or response." },
      { keyword: "react", matchTerms: ["react", "act", "behave", "change", "move", "adapt", "address", "deal with", "handle"], label: "React to something", hint: "The definition says 'react to something in a particular way' -- the behavioral response." },
    ],
    synonyms: ["answer", "reply", "react"],
  },
  {
    word: "alert",
    partOfSpeech: "adjective",
    definition: "Watchful and ready to deal with any situation; quick to notice things.",
    keyConcepts: [
      { keyword: "watchful", matchTerms: ["watchful", "attentive", "vigilant", "observant", "aware", "conscious", "on guard", "sharp", "keen", "perceptive", "awake"], label: "Watchful and ready", hint: "The definition says 'watchful and ready to deal with any situation' -- active preparedness." },
      { keyword: "notice", matchTerms: ["notice", "detect", "perceive", "spot", "observe", "recognize", "discern", "see", "sense"], label: "Quick to notice", hint: "The definition says 'quick to notice things' -- attentiveness to what is happening." },
    ],
    synonyms: ["vigilant", "attentive", "watchful"],
  },
  {
    word: "afford",
    partOfSpeech: "verb",
    definition: "To have enough money or resources to pay for something; to provide an opportunity.",
    keyConcepts: [
      { keyword: "have enough", matchTerms: ["have enough", "pay for", "manage", "meet the cost", "buy", "sustain", "support", "fund"], label: "Have enough to pay", hint: "The definition says 'have enough money or resources to pay for something' -- financial capacity." },
      { keyword: "provide", matchTerms: ["provide", "give", "offer", "allow", "yield", "present", "supply", "create"], label: "Provide an opportunity", hint: "The definition says 'to provide an opportunity' -- making something possible." },
    ],
    synonyms: ["pay for", "provide", "manage"],
  },
  {
    word: "express",
    partOfSpeech: "verb",
    definition: "To convey a thought or feeling in words or by gestures; to squeeze out.",
    keyConcepts: [
      { keyword: "convey", matchTerms: ["convey", "communicate", "say", "put into words", "voice", "articulate", "share", "indicate", "portray"], label: "Convey a thought or feeling", hint: "The definition says 'convey a thought or feeling in words or by gestures' -- giving it form." },
      { keyword: "squeeze out", matchTerms: ["squeeze out", "extract", "press", "force out", "extract", "push out", "emit"], label: "Squeeze out", hint: "The definition says 'to squeeze out' -- the literal physical meaning." },
    ],
    synonyms: ["convey", "communicate", "voice"],
  },
  {
    word: "assert",
    partOfSpeech: "verb",
    definition: "To state a fact or belief confidently; to exercise power or authority.",
    keyConcepts: [
      { keyword: "state confidently", matchTerms: ["state confidently", "declare", "maintain", "claim", "insist", "argue", "profess", "pronounce"], label: "State confidently", hint: "The definition says 'state a fact or belief confidently' -- speaking without doubt." },
      { keyword: "exercise power", matchTerms: ["exercise power", "enforce", "impose", "use", "demonstrate", "show", "deploy", "wield", "press"], label: "Exercise authority", hint: "The definition says 'exercise power or authority' -- actively using one's standing." },
    ],
    synonyms: ["declare", "claim", "maintain"],
  },
  {
    word: "convince",
    partOfSpeech: "verb",
    definition: "To persuade someone to believe something or do something through argument or evidence.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuade", "influence", "sway", "win over", "bring around", "talk into", "induce", "coax", "urge"], label: "Persuade someone", hint: "The definition says 'persuade someone to believe something or do something' -- changing their mind." },
      { keyword: "evidence", matchTerms: ["evidence", "argument", "reason", "proof", "logic", "demonstration", "case", "showing", "explanation"], label: "Through argument or evidence", hint: "The definition says 'through argument or evidence' -- using reasoning to persuade." },
    ],
    synonyms: ["persuade", "sway", "win over"],
  },
  {
    word: "vibrant",
    partOfSpeech: "adjective",
    definition: "Full of energy, life, and excitement; bright and striking in color.",
    keyConcepts: [
      { keyword: "energy", matchTerms: ["energy", "life", "vitality", "enthusiasm", "vivacity", "vigor", "liveliness", "zest", "dynamism", "spark"], label: "Full of energy and life", hint: "The definition says 'full of energy, life, and excitement' -- alive and vigorous." },
      { keyword: "bright", matchTerms: ["bright", "vivid", "colorful", "striking", "bold", "rich", "intense", "radiant", "dazzling", "luminous"], label: "Bright and striking", hint: "The definition says 'bright and striking in color' -- visually alive." },
    ],
    synonyms: ["lively", "energetic", "vivid"],
  },
  {
    word: "imply",
    partOfSpeech: "verb",
    definition: "To suggest something without saying it directly; to indicate or hint at.",
    keyConcepts: [
      { keyword: "suggest", matchTerms: ["suggest", "hint", "indicate", "infer", "convey", "communicate", "signal", "allude to", "point to"], label: "Suggest without saying directly", hint: "The definition says 'suggest something without saying it directly' -- indirect communication." },
      { keyword: "indicate", matchTerms: ["indicate", "mean", "signify", "carry", "show", "express", "entail", "involve", "connote"], label: "Indicate or hint at", hint: "The definition says 'indicate or hint at' -- pointing to something without stating it." },
    ],
    synonyms: ["suggest", "hint", "indicate"],
  },
  {
    word: "admit",
    partOfSpeech: "verb",
    definition: "To confess to being true; to allow someone to enter.",
    keyConcepts: [
      { keyword: "confess", matchTerms: ["confess", "acknowledge", "concede", "grant", "accept", "own up", "recognize", "disclose"], label: "Confess to being true", hint: "The definition says 'confess to being true' -- owning something honestly." },
      { keyword: "allow entry", matchTerms: ["allow entry", "let in", "grant access", "accept", "receive", "welcome", "permit"], label: "Allow to enter", hint: "The definition says 'to allow someone to enter' -- granting physical access." },
    ],
    synonyms: ["confess", "acknowledge", "let in"],
  },
  {
    word: "bold",
    partOfSpeech: "adjective",
    definition: "Showing courage and willingness to take risks; standing out clearly and strikingly.",
    keyConcepts: [
      { keyword: "courageous", matchTerms: ["courageous", "brave", "daring", "confident", "fearless", "audacious", "intrepid", "adventurous", "assertive"], label: "Courageous and willing", hint: "The definition says 'showing courage and willingness to take risks' -- not fearful." },
      { keyword: "striking", matchTerms: ["striking", "vivid", "strong", "clear", "prominent", "conspicuous", "eye-catching", "distinct", "dramatic"], label: "Standing out strikingly", hint: "The definition says 'standing out clearly and strikingly' -- impossible to miss." },
    ],
    synonyms: ["daring", "brave", "striking"],
  },
  {
    word: "minimize",
    partOfSpeech: "verb",
    definition: "To reduce something to the smallest possible amount; to represent something as less important.",
    keyConcepts: [
      { keyword: "reduce", matchTerms: ["reduce", "decrease", "lessen", "lower", "shrink", "cut", "limit", "curtail", "diminish"], label: "Reduce to smallest amount", hint: "The definition says 'reduce something to the smallest possible amount' -- making it as small as possible." },
      { keyword: "downplay", matchTerms: ["downplay", "understate", "trivialize", "dismiss", "belittle", "underrate", "undervalue", "discount"], label: "Represent as less important", hint: "The definition says 'represent something as less important' -- making it seem smaller than it is." },
    ],
    synonyms: ["reduce", "downplay", "lessen"],
  },
  {
    word: "provide",
    partOfSpeech: "verb",
    definition: "To give something that is needed or wanted; to make something available.",
    keyConcepts: [
      { keyword: "give", matchTerms: ["give", "supply", "offer", "furnish", "deliver", "contribute", "present", "grant", "afford", "lend"], label: "Give something needed", hint: "The definition says 'give something that is needed or wanted' -- meeting a need." },
      { keyword: "available", matchTerms: ["available", "accessible", "ready", "at hand", "on hand", "present", "usable", "offered"], label: "Make available", hint: "The definition says 'make something available' -- putting it within reach." },
    ],
    synonyms: ["supply", "give", "furnish"],
  },
  {
    word: "regulate",
    partOfSpeech: "verb",
    definition: "To control or supervise something by means of rules or standards; to adjust something to work properly.",
    keyConcepts: [
      { keyword: "control", matchTerms: ["control", "govern", "oversee", "manage", "supervise", "administer", "monitor", "enforce", "restrict"], label: "Control by rules", hint: "The definition says 'control or supervise by means of rules or standards' -- formal management." },
      { keyword: "adjust", matchTerms: ["adjust", "set", "calibrate", "tune", "balance", "moderate", "stabilize", "normalize", "fix"], label: "Adjust to work properly", hint: "The definition says 'adjust something to work properly' -- technical control." },
    ],
    synonyms: ["control", "govern", "adjust"],
  },
  {
    word: "broad",
    partOfSpeech: "adjective",
    definition: "Having a large extent from side to side; covering a wide range of things.",
    keyConcepts: [
      { keyword: "large extent", matchTerms: ["large", "wide", "extensive", "expansive", "sweeping", "spacious", "vast", "open", "far-reaching"], label: "Large extent", hint: "The definition says 'having a large extent from side to side' -- physical or conceptual width." },
      { keyword: "wide range", matchTerms: ["wide range", "comprehensive", "general", "inclusive", "varied", "diverse", "all-encompassing", "wide-ranging"], label: "Wide range of things", hint: "The definition says 'covering a wide range of things' -- not narrow in scope." },
    ],
    synonyms: ["wide", "extensive", "comprehensive"],
  },
  {
    word: "propose",
    partOfSpeech: "verb",
    definition: "To put forward an idea, plan, or suggestion for consideration; to suggest.",
    keyConcepts: [
      { keyword: "put forward", matchTerms: ["put forward", "suggest", "submit", "present", "introduce", "recommend", "offer", "advance", "raise", "table"], label: "Put forward for consideration", hint: "The definition says 'put forward for consideration' -- offering something to be decided on." },
      { keyword: "idea", matchTerms: ["idea", "plan", "suggestion", "proposal", "motion", "option", "candidate", "solution", "scheme"], label: "An idea or plan", hint: "The definition says 'an idea, plan, or suggestion' -- the substance of what is proposed." },
    ],
    synonyms: ["suggest", "recommend", "submit"],
  },
  {
    word: "attach",
    partOfSpeech: "verb",
    definition: "To fasten or join one thing to another; to attribute a quality or value to something.",
    keyConcepts: [
      { keyword: "fasten", matchTerms: ["fasten", "connect", "join", "fix", "bind", "link", "secure", "clip", "tie", "add", "affix"], label: "Fasten to another", hint: "The definition says 'fasten or join one thing to another' -- making a physical connection." },
      { keyword: "attribute", matchTerms: ["attribute", "assign", "give", "place", "impute", "apply", "add", "associate", "link"], label: "Attribute to something", hint: "The definition says 'attribute a quality or value' -- associating something with it." },
    ],
    synonyms: ["fasten", "connect", "affix"],
  },
  {
    word: "distinct",
    partOfSpeech: "adjective",
    definition: "Noticeably different from others; clearly recognizable and not to be confused with others.",
    keyConcepts: [
      { keyword: "different", matchTerms: ["different", "separate", "unique", "individual", "unlike", "unlike others", "own", "distinguishable", "particular"], label: "Noticeably different", hint: "The definition says 'noticeably different from others' -- standing apart." },
      { keyword: "clear", matchTerms: ["clear", "recognizable", "obvious", "evident", "plain", "marked", "definite", "unmistakable", "unambiguous"], label: "Clearly recognizable", hint: "The definition says 'clearly recognizable' -- easy to identify as itself." },
    ],
    synonyms: ["separate", "unique", "clear"],
  },
  {
    word: "effective",
    partOfSpeech: "adjective",
    definition: "Successful in producing a desired or intended result; working well.",
    keyConcepts: [
      { keyword: "successful", matchTerms: ["successful", "productive", "efficient", "useful", "capable", "competent", "powerful", "functional", "good"], label: "Successful in producing results", hint: "The definition says 'successful in producing a desired result' -- getting things done." },
      { keyword: "result", matchTerms: ["result", "outcome", "effect", "impact", "change", "achievement", "goal", "end", "objective"], label: "Intended result", hint: "The definition says 'desired or intended result' -- the goal that is achieved." },
    ],
    synonyms: ["productive", "efficient", "successful"],
  },
  {
    word: "challenge",
    partOfSpeech: "noun",
    definition: "A difficult task or situation that tests one's abilities; an invitation to compete.",
    keyConcepts: [
      { keyword: "difficult task", matchTerms: ["difficult task", "test", "trial", "obstacle", "problem", "hardship", "demand", "difficulty", "struggle"], label: "Difficult task or test", hint: "The definition says 'a difficult task or situation that tests abilities' -- something hard to do." },
      { keyword: "compete", matchTerms: ["compete", "contest", "dare", "provoke", "invitation", "call out", "rival", "oppose", "dispute"], label: "Invitation to compete", hint: "The definition says 'an invitation to compete' -- a summons to test oneself against another." },
    ],
    synonyms: ["test", "obstacle", "dare"],
  },
  {
    word: "navigate",
    partOfSpeech: "verb",
    definition: "To plan and direct a course through an area; to manage a complex situation.",
    keyConcepts: [
      { keyword: "plan and direct", matchTerms: ["plan and direct", "steer", "guide", "pilot", "chart course", "map", "direct", "helm", "control"], label: "Plan and direct a course", hint: "The definition says 'plan and direct a course through an area' -- getting somewhere." },
      { keyword: "manage complex", matchTerms: ["manage complex", "cope with", "handle", "deal with", "find way through", "negotiate", "move through"], label: "Manage complex situation", hint: "The definition says 'manage a complex situation' -- the figurative sense." },
    ],
    synonyms: ["steer", "guide", "manage"],
  },
  {
    word: "specify",
    partOfSpeech: "verb",
    definition: "To state exactly what is required or intended; to name explicitly.",
    keyConcepts: [
      { keyword: "state exactly", matchTerms: ["state exactly", "define", "detail", "indicate", "identify", "declare", "describe", "name", "articulate"], label: "State exactly what is required", hint: "The definition says 'state exactly what is required or intended' -- precision in statement." },
      { keyword: "explicitly", matchTerms: ["explicitly", "clearly", "precisely", "directly", "specifically", "unambiguously", "in detail", "concretely"], label: "Name explicitly", hint: "The definition says 'name explicitly' -- leaving nothing to assumption." },
    ],
    synonyms: ["define", "detail", "stipulate"],
  },
  {
    word: "contribute",
    partOfSpeech: "verb",
    definition: "To give something in order to help achieve or provide something; to help bring about a result.",
    keyConcepts: [
      { keyword: "give", matchTerms: ["give", "donate", "provide", "add", "supply", "offer", "lend", "input", "invest", "chip in", "share"], label: "Give to help", hint: "The definition says 'give something in order to help achieve something' -- active giving." },
      { keyword: "help bring about", matchTerms: ["help", "support", "aid", "assist", "advance", "further", "promote", "enable", "produce", "cause", "play a part"], label: "Help bring about a result", hint: "The definition says 'help bring about a result' -- being part of the cause." },
    ],
    synonyms: ["add", "donate", "provide"],
  },
  {
    word: "inform",
    partOfSpeech: "verb",
    definition: "To give someone facts or information about something; to have an influence on.",
    keyConcepts: [
      { keyword: "give facts", matchTerms: ["give facts", "tell", "advise", "update", "brief", "notify", "educate", "enlighten", "communicate", "explain"], label: "Give facts or information", hint: "The definition says 'give someone facts or information' -- transferring knowledge." },
      { keyword: "influence", matchTerms: ["influence", "shape", "guide", "color", "affect", "underlie", "drive", "form", "inspire", "direct"], label: "Have an influence on", hint: "The definition says 'have an influence on' -- shaping something through knowledge." },
    ],
    synonyms: ["advise", "tell", "influence"],
  },
  {
    word: "process",
    partOfSpeech: "noun",
    definition: "A series of actions or steps taken to achieve an end; a natural series of changes.",
    keyConcepts: [
      { keyword: "series of actions", matchTerms: ["series", "steps", "stages", "sequence", "procedure", "method", "approach", "system", "workflow"], label: "Series of actions", hint: "The definition says 'a series of actions or steps taken to achieve an end' -- a structured path." },
      { keyword: "achieve", matchTerms: ["achieve", "produce", "result in", "lead to", "accomplish", "bring about", "create", "end", "outcome"], label: "To achieve an end", hint: "The definition says 'taken to achieve an end' -- the purpose of the process." },
    ],
    synonyms: ["procedure", "method", "sequence"],
  },
  {
    word: "sequence",
    partOfSpeech: "noun",
    definition: "A particular order in which related things follow each other; a series of events.",
    keyConcepts: [
      { keyword: "order", matchTerms: ["order", "arrangement", "progression", "series", "succession", "chain", "string", "line", "run", "flow"], label: "A particular order", hint: "The definition says 'a particular order in which related things follow each other' -- arranged flow." },
      { keyword: "series", matchTerms: ["series", "events", "steps", "actions", "episodes", "occurrences", "things", "items", "set"], label: "A series of events", hint: "The definition says 'a series of events' -- multiple things in a row." },
    ],
    synonyms: ["order", "series", "progression"],
  },
  {
    word: "engage",
    partOfSpeech: "verb",
    definition: "To attract and keep attention or interest; to participate actively in something.",
    keyConcepts: [
      { keyword: "attract", matchTerms: ["attract", "interest", "captivate", "involve", "draw in", "absorb", "occupy", "enthuse", "hold", "fascinate"], label: "Attract and keep attention", hint: "The definition says 'attract and keep attention or interest' -- holding someone's focus." },
      { keyword: "participate", matchTerms: ["participate", "take part", "join in", "involve", "interact", "commit", "connect", "contribute", "work on"], label: "Participate actively", hint: "The definition says 'participate actively in something' -- being genuinely involved." },
    ],
    synonyms: ["involve", "captivate", "participate"],
  },
  {
    word: "benefit",
    partOfSpeech: "noun",
    definition: "An advantage or profit gained from something; a payment made for a specific purpose.",
    keyConcepts: [
      { keyword: "advantage", matchTerms: ["advantage", "profit", "gain", "reward", "value", "good", "merit", "asset", "plus", "perk", "upside"], label: "Advantage or profit", hint: "The definition says 'advantage or profit gained from something' -- a positive outcome." },
      { keyword: "payment", matchTerms: ["payment", "allowance", "grant", "compensation", "assistance", "welfare", "entitlement", "support"], label: "A payment", hint: "The definition says 'a payment made for a specific purpose' -- formal financial help." },
    ],
    synonyms: ["advantage", "gain", "perk"],
  },
  {
    word: "define",
    partOfSpeech: "verb",
    definition: "To state the exact meaning of a word or phrase; to give the essential quality of.",
    keyConcepts: [
      { keyword: "state meaning", matchTerms: ["state meaning", "explain", "describe", "interpret", "clarify", "specify", "characterize", "identify"], label: "State the meaning", hint: "The definition says 'state the exact meaning of a word or phrase' -- explaining precisely." },
      { keyword: "essential quality", matchTerms: ["essential quality", "nature", "character", "mark", "distinguish", "outline", "determine"], label: "Give essential quality", hint: "The definition says 'give the essential quality of' -- capturing what makes it what it is." },
    ],
    synonyms: ["explain", "describe", "specify"],
  },
  {
    word: "enforce",
    partOfSpeech: "verb",
    definition: "To compel observance of or compliance with a law or rule; to make certain something happens.",
    keyConcepts: [
      { keyword: "compel", matchTerms: ["compel", "require", "demand", "impose", "make", "force", "oblige", "pressure", "insist", "mandate"], label: "Compel compliance", hint: "The definition says 'compel observance of or compliance with' -- requiring adherence." },
      { keyword: "law", matchTerms: ["law", "rule", "regulation", "standard", "policy", "requirement", "order", "directive", "norm"], label: "A law or rule", hint: "The definition says 'a law or rule' -- what is being enforced." },
    ],
    synonyms: ["implement", "impose", "apply"],
  },
  {
    word: "force",
    partOfSpeech: "noun",
    definition: "Strength or energy exerted; a group of people organized for a particular purpose.",
    keyConcepts: [
      { keyword: "strength or energy", matchTerms: ["strength", "energy", "power", "might", "pressure", "effort", "intensity", "exertion", "drive"], label: "Strength or energy", hint: "The definition says 'strength or energy exerted' -- physical or mental power." },
      { keyword: "organized group", matchTerms: ["organized group", "unit", "team", "body", "troops", "personnel", "squad", "corps", "service"], label: "Group organized for purpose", hint: "The definition says 'a group of people organized for a particular purpose' -- the collective sense." },
    ],
    synonyms: ["power", "strength", "energy"],
  },
  {
    word: "admire",
    partOfSpeech: "verb",
    definition: "To regard someone or something with wonder, pleasure, or approval.",
    keyConcepts: [
      { keyword: "regard with wonder", matchTerms: ["regard with wonder", "look up to", "appreciate", "value", "praise", "esteem", "respect", "admire"], label: "Regard with wonder", hint: "The definition says 'regard with wonder, pleasure, or approval' -- feeling impressed." },
      { keyword: "approval", matchTerms: ["approval", "respect", "high regard", "admiration", "appreciation", "esteem", "honor", "recognition"], label: "With approval", hint: "The definition says 'with wonder, pleasure, or approval' -- the positive feeling." },
    ],
    synonyms: ["respect", "appreciate", "esteem"],
  },
  {
    word: "heighten",
    partOfSpeech: "verb",
    definition: "To make or become more intense or extreme; to raise higher.",
    keyConcepts: [
      { keyword: "more intense", matchTerms: ["more intense", "increase", "intensify", "strengthen", "deepen", "amplify", "magnify", "sharpen", "raise", "escalate"], label: "Make more intense", hint: "The definition says 'make or become more intense or extreme' -- increasing force or degree." },
      { keyword: "raise", matchTerms: ["raise", "elevate", "lift", "increase", "boost", "enhance", "add to", "build up"], label: "Raise higher", hint: "The definition says 'raise higher' -- moving upward in level or degree." },
    ],
    synonyms: ["intensify", "increase", "amplify"],
  },
  {
    word: "deploy",
    partOfSpeech: "verb",
    definition: "To bring into effective action; to move troops or equipment into a position for action.",
    keyConcepts: [
      { keyword: "bring into action", matchTerms: ["bring into action", "use", "utilize", "employ", "apply", "activate", "implement", "put to work", "mobilize"], label: "Bring into effective action", hint: "The definition says 'bring into effective action' -- making use of something." },
      { keyword: "position", matchTerms: ["position", "place", "station", "move", "send", "dispatch", "distribute", "arrange", "set up"], label: "Move into position", hint: "The definition says 'move into a position for action' -- placing strategically." },
    ],
    synonyms: ["mobilize", "employ", "apply"],
  },
  {
    word: "create",
    partOfSpeech: "verb",
    definition: "To bring something new into existence; to produce through imagination or skill.",
    keyConcepts: [
      { keyword: "bring into existence", matchTerms: ["bring into existence", "make", "produce", "build", "form", "generate", "originate", "invent"], label: "Bring into existence", hint: "The definition says 'bring something new into existence' -- making the new." },
      { keyword: "imagination", matchTerms: ["imagination", "skill", "creativity", "artistry", "design", "craft", "talent", "ingenuity"], label: "Through imagination or skill", hint: "The definition says 'produce through imagination or skill' -- the creative means." },
    ],
    synonyms: ["make", "produce", "invent"],
  },
  {
    word: "abandon",
    partOfSpeech: "verb",
    definition: "To give up completely on someone or something; to leave without intending to return.",
    keyConcepts: [
      { keyword: "give up", matchTerms: ["give up", "relinquish", "desert", "forsake", "quit", "discard", "surrender", "renounce", "drop", "cease", "forgo"], label: "Give up completely", hint: "The definition says 'give up completely' -- a total withdrawal of support or presence." },
      { keyword: "leave", matchTerms: ["leave", "depart", "walk away", "flee", "strand", "maroon", "cast off", "withdraw", "exit"], label: "Leave without returning", hint: "The definition says 'leave without intending to return' -- permanent departure." },
    ],
    synonyms: ["desert", "forsake", "relinquish"],
  },
  {
    word: "explore",
    partOfSpeech: "verb",
    definition: "To travel through an unfamiliar area to learn about it; to examine or inquire into something.",
    keyConcepts: [
      { keyword: "travel", matchTerms: ["travel", "venture", "journey", "search", "roam", "survey", "discover", "go through", "navigate", "range"], label: "Travel to learn", hint: "The definition says 'travel through an unfamiliar area to learn about it' -- discovery." },
      { keyword: "examine", matchTerms: ["examine", "inquire", "investigate", "study", "probe", "look into", "research", "analyze", "consider"], label: "Examine or inquire", hint: "The definition says 'examine or inquire into something' -- intellectual exploration." },
    ],
    synonyms: ["investigate", "discover", "probe"],
  },
  {
    word: "thorough",
    partOfSpeech: "adjective",
    definition: "Done completely with great attention to detail; covering all aspects.",
    keyConcepts: [
      { keyword: "complete", matchTerms: ["complete", "exhaustive", "comprehensive", "full", "meticulous", "careful", "painstaking", "detailed", "in-depth"], label: "Done completely", hint: "The definition says 'done completely with great attention to detail' -- leaving nothing out." },
      { keyword: "detail", matchTerms: ["detail", "every aspect", "minutely", "carefully", "precisely", "rigorously", "systematically", "methodically"], label: "Attention to detail", hint: "The definition says 'great attention to detail' -- nothing overlooked." },
    ],
    synonyms: ["exhaustive", "meticulous", "comprehensive"],
  },
  {
    word: "verify",
    partOfSpeech: "verb",
    definition: "To make sure that something is true, accurate, or justified by examining it.",
    keyConcepts: [
      { keyword: "make sure", matchTerms: ["make sure", "confirm", "check", "validate", "prove", "establish", "corroborate", "substantiate", "attest"], label: "Make sure it is true", hint: "The definition says 'make sure that something is true, accurate, or justified' -- establishing certainty." },
      { keyword: "examine", matchTerms: ["examine", "inspect", "test", "review", "audit", "investigate", "scrutinize", "look into"], label: "By examining it", hint: "The definition says 'by examining it' -- the method used to verify." },
    ],
    synonyms: ["confirm", "validate", "check"],
  },
  {
    word: "assure",
    partOfSpeech: "verb",
    definition: "To tell someone something confidently to remove doubt; to make certain something will happen.",
    keyConcepts: [
      { keyword: "confidently tell", matchTerms: ["confidently tell", "promise", "guarantee", "pledge", "reassure", "affirm", "give word", "confirm"], label: "Tell confidently", hint: "The definition says 'tell someone something confidently to remove doubt' -- providing certainty." },
      { keyword: "make certain", matchTerms: ["make certain", "guarantee", "ensure", "secure", "confirm", "establish", "fix", "settle"], label: "Make certain", hint: "The definition says 'make certain something will happen' -- providing the guarantee." },
    ],
    synonyms: ["reassure", "guarantee", "confirm"],
  },
  {
    word: "acute",
    partOfSpeech: "adjective",
    definition: "Extremely severe or serious; having or showing a perceptive understanding.",
    keyConcepts: [
      { keyword: "severe", matchTerms: ["severe", "intense", "serious", "sharp", "critical", "extreme", "significant", "strong", "pressing"], label: "Extremely severe", hint: "The definition says 'extremely severe or serious' -- high intensity." },
      { keyword: "perceptive", matchTerms: ["perceptive", "sharp", "keen", "astute", "insightful", "clever", "discerning", "sensitive", "quick"], label: "Perceptive understanding", hint: "The definition says 'having or showing a perceptive understanding' -- sharp thinking." },
    ],
    synonyms: ["severe", "sharp", "perceptive"],
  },
  {
    word: "estimate",
    partOfSpeech: "verb",
    definition: "To form an approximate idea of value or number; to roughly calculate.",
    keyConcepts: [
      { keyword: "approximate idea", matchTerms: ["approximate idea", "rough calculation", "gauge", "judge", "assess", "reckon", "guess", "figure"], label: "Form an approximate idea", hint: "The definition says 'form an approximate idea of value or number' -- not exact but close." },
      { keyword: "calculate", matchTerms: ["calculate", "compute", "evaluate", "measure", "work out", "determine", "arrive at", "find"], label: "Roughly calculate", hint: "The definition says 'to roughly calculate' -- using judgment rather than precision." },
    ],
    synonyms: ["approximate", "gauge", "calculate"],
  },
  {
    word: "exceed",
    partOfSpeech: "verb",
    definition: "To be greater than a number or amount; to go beyond the limits of what is expected.",
    keyConcepts: [
      { keyword: "greater than", matchTerms: ["greater than", "surpass", "go beyond", "outdo", "top", "beat", "outstrip", "outpace", "eclipse"], label: "Greater than expected", hint: "The definition says 'be greater than a number or amount' -- going past a mark." },
      { keyword: "limits", matchTerms: ["limits", "boundary", "expectation", "threshold", "ceiling", "standard", "requirement", "norm", "benchmark"], label: "Beyond limits", hint: "The definition says 'go beyond the limits' -- surpassing what was set." },
    ],
    synonyms: ["surpass", "outstrip", "top"],
  },
  {
    word: "ability",
    partOfSpeech: "noun",
    definition: "The power or skill needed to do something; a natural or acquired talent.",
    keyConcepts: [
      { keyword: "skill", matchTerms: ["skill", "talent", "capacity", "capability", "competence", "aptitude", "proficiency", "expertise", "faculty", "power", "gift", "knack"], label: "Skill or talent", hint: "The definition says 'skill needed to do something' -- an acquired or natural competence." },
    ],
    synonyms: ["skill", "capability", "talent"],
  },
  {
    word: "structure",
    partOfSpeech: "noun",
    definition: "The arrangement of parts that form a whole; a building or other complex object.",
    keyConcepts: [
      { keyword: "arrangement", matchTerms: ["arrangement", "organization", "order", "system", "framework", "composition", "layout", "design", "pattern"], label: "Arrangement of parts", hint: "The definition says 'the arrangement of parts that form a whole' -- how things are put together." },
      { keyword: "building", matchTerms: ["building", "construction", "edifice", "object", "form", "creation", "installation", "complex"], label: "A building or complex object", hint: "The definition says 'a building or other complex object' -- a physical structure." },
    ],
    synonyms: ["framework", "arrangement", "building"],
  },
  {
    word: "flourish",
    partOfSpeech: "verb",
    definition: "To grow or develop in a healthy or vigorous way; to wave something dramatically.",
    keyConcepts: [
      { keyword: "grow", matchTerms: ["grow", "thrive", "prosper", "bloom", "develop", "succeed", "advance", "progress", "blossom", "expand"], label: "Grow or develop", hint: "The definition says 'grow or develop in a healthy or vigorous way' -- achieving full potential." },
      { keyword: "dramatically", matchTerms: ["dramatically", "wave", "brandish", "display", "show off", "gesture", "swing", "flaunt"], label: "Wave dramatically", hint: "The definition says 'wave something dramatically' -- a showy gesture." },
    ],
    synonyms: ["thrive", "prosper", "bloom"],
  },
  {
    word: "accept",
    partOfSpeech: "verb",
    definition: "To agree to receive or take something; to believe something is true.",
    keyConcepts: [
      { keyword: "receive", matchTerms: ["receive", "take", "get", "obtain", "welcome", "embrace", "take on", "acquire", "admit"], label: "Agree to receive", hint: "The definition says 'agree to receive or take something' -- willingly taking what is offered." },
      { keyword: "believe", matchTerms: ["believe", "acknowledge", "recognize", "admit", "concede", "grant", "agree", "affirm"], label: "Believe is true", hint: "The definition says 'believe something is true' -- intellectual acceptance." },
    ],
    synonyms: ["receive", "acknowledge", "take"],
  },
  {
    word: "unique",
    partOfSpeech: "adjective",
    definition: "Being the only one of its kind; unlike anything else.",
    keyConcepts: [
      { keyword: "only one", matchTerms: ["only one", "singular", "sole", "one of a kind", "special", "matchless", "unparalleled", "unrepeatable"], label: "Only one of its kind", hint: "The definition says 'being the only one of its kind' -- nothing else like it." },
      { keyword: "unlike", matchTerms: ["unlike", "different", "distinctive", "special", "individual", "extraordinary", "original", "incomparable"], label: "Unlike anything else", hint: "The definition says 'unlike anything else' -- the quality of distinctiveness." },
    ],
    synonyms: ["singular", "distinctive", "unparalleled"],
  },
  {
    word: "complex",
    partOfSpeech: "adjective",
    definition: "Made up of many interconnected parts; difficult to understand.",
    keyConcepts: [
      { keyword: "many parts", matchTerms: ["many parts", "intricate", "complicated", "multifaceted", "layered", "elaborate", "involved", "composite"], label: "Many interconnected parts", hint: "The definition says 'made up of many interconnected parts' -- structural complexity." },
      { keyword: "difficult", matchTerms: ["difficult", "hard to understand", "challenging", "confusing", "obscure", "involved", "nuanced", "subtle"], label: "Difficult to understand", hint: "The definition says 'difficult to understand' -- not easy to grasp." },
    ],
    synonyms: ["intricate", "complicated", "multifaceted"],
  },
  {
    word: "classify",
    partOfSpeech: "verb",
    definition: "To arrange things into classes or categories according to shared qualities.",
    keyConcepts: [
      { keyword: "arrange", matchTerms: ["arrange", "group", "sort", "organize", "order", "categorize", "catalog", "file", "rank", "label"], label: "Arrange into categories", hint: "The definition says 'arrange things into classes or categories' -- creating organized groups." },
      { keyword: "shared qualities", matchTerms: ["shared qualities", "characteristics", "features", "traits", "properties", "attributes", "type", "kind"], label: "According to shared qualities", hint: "The definition says 'according to shared qualities' -- the basis for classification." },
    ],
    synonyms: ["categorize", "sort", "group"],
  },
  {
    word: "defiant",
    partOfSpeech: "adjective",
    definition: "Showing bold resistance to authority or opposition; refusing to obey.",
    keyConcepts: [
      { keyword: "resistance", matchTerms: ["resistance", "opposition", "refusal", "rebellious", "challenge", "disobedience", "noncompliance", "protest"], label: "Bold resistance", hint: "The definition says 'bold resistance to authority or opposition' -- standing against." },
      { keyword: "disobey", matchTerms: ["disobey", "refuse", "defy", "rebel", "resist", "reject", "ignore", "flout", "violate", "break rules"], label: "Refusing to obey", hint: "The definition says 'refusing to obey' -- active non-compliance." },
    ],
    synonyms: ["rebellious", "resistant", "insubordinate"],
  },
  {
    word: "driven",
    partOfSpeech: "adjective",
    definition: "Highly motivated and determined to succeed; motivated by a strong desire to achieve.",
    keyConcepts: [
      { keyword: "motivated", matchTerms: ["motivated", "determined", "ambitious", "energetic", "purposeful", "focused", "dedicated", "relentless", "persistent"], label: "Highly motivated", hint: "The definition says 'highly motivated and determined to succeed' -- inner push toward goals." },
      { keyword: "achieve", matchTerms: ["achieve", "succeed", "excel", "accomplish", "reach goals", "rise", "win", "attain"], label: "Desire to achieve", hint: "The definition says 'motivated by a strong desire to achieve' -- achievement-oriented." },
    ],
    synonyms: ["motivated", "ambitious", "determined"],
  },
  {
    word: "decide",
    partOfSpeech: "verb",
    definition: "To make a choice or come to a resolution about something after consideration.",
    keyConcepts: [
      { keyword: "make a choice", matchTerms: ["make a choice", "choose", "select", "opt", "resolve", "determine", "settle", "conclude", "pick"], label: "Make a choice", hint: "The definition says 'make a choice or come to a resolution' -- ending the uncertainty." },
      { keyword: "consideration", matchTerms: ["consideration", "thought", "deliberation", "reflection", "weighing", "analysis", "judgment"], label: "After consideration", hint: "The definition says 'after consideration' -- the decision follows thought." },
    ],
    synonyms: ["choose", "resolve", "determine"],
  },
  {
    word: "depend",
    partOfSpeech: "verb",
    definition: "To rely on or require something for support or existence; to be contingent on.",
    keyConcepts: [
      { keyword: "rely on", matchTerms: ["rely on", "count on", "trust", "need", "lean on", "require", "hinge on", "rest on", "turn to"], label: "Rely on or require", hint: "The definition says 'rely on or require something for support' -- not independent." },
      { keyword: "contingent", matchTerms: ["contingent", "conditional", "subject to", "determined by", "based on", "tied to", "linked to"], label: "Be contingent on", hint: "The definition says 'to be contingent on' -- the outcome depends on something else." },
    ],
    synonyms: ["rely", "require", "hinge on"],
  },
  {
    word: "measure",
    partOfSpeech: "verb",
    definition: "To find the size, length, or amount of something using a standard unit.",
    keyConcepts: [
      { keyword: "find size", matchTerms: ["find size", "calculate", "determine", "assess", "gauge", "quantify", "evaluate", "compute", "estimate"], label: "Find the size or amount", hint: "The definition says 'find the size, length, or amount of something' -- quantifying." },
      { keyword: "standard unit", matchTerms: ["standard unit", "scale", "ruler", "meter", "instrument", "comparison", "reference", "benchmark"], label: "Using a standard unit", hint: "The definition says 'using a standard unit' -- a consistent basis for measurement." },
    ],
    synonyms: ["quantify", "assess", "gauge"],
  },
  {
    word: "tolerate",
    partOfSpeech: "verb",
    definition: "To allow something to happen or exist without objecting; to endure something unpleasant.",
    keyConcepts: [
      { keyword: "allow", matchTerms: ["allow", "permit", "accept", "put up with", "endure", "stand", "bear", "live with", "let be", "countenance"], label: "Allow without objecting", hint: "The definition says 'allow something to happen without objecting' -- passive acceptance." },
      { keyword: "endure", matchTerms: ["endure", "withstand", "suffer", "cope with", "bear", "stomach", "manage", "handle", "experience"], label: "Endure something unpleasant", hint: "The definition says 'endure something unpleasant' -- putting up with hardship." },
    ],
    synonyms: ["endure", "accept", "bear"],
  },
  {
    word: "correct",
    partOfSpeech: "adjective",
    definition: "Free from error; in accordance with fact or truth.",
    keyConcepts: [
      { keyword: "free from error", matchTerms: ["free from error", "accurate", "right", "exact", "true", "precise", "proper", "valid", "faultless"], label: "Free from error", hint: "The definition says 'free from error' -- no mistakes." },
      { keyword: "truth", matchTerms: ["truth", "fact", "reality", "standard", "principle", "expectation", "rule", "norm", "what is right"], label: "In accordance with truth", hint: "The definition says 'in accordance with fact or truth' -- matching reality." },
    ],
    synonyms: ["accurate", "right", "exact"],
  },
  {
    word: "overcome",
    partOfSpeech: "verb",
    definition: "To succeed in dealing with or gaining control over something difficult; to prevail.",
    keyConcepts: [
      { keyword: "succeed", matchTerms: ["succeed", "conquer", "beat", "defeat", "surmount", "master", "manage", "handle", "deal with", "triumph"], label: "Succeed in dealing with", hint: "The definition says 'succeed in dealing with or gaining control over something' -- winning out." },
      { keyword: "difficult", matchTerms: ["difficult", "obstacle", "challenge", "problem", "difficulty", "barrier", "adversity", "hardship", "struggle"], label: "Something difficult", hint: "The definition says 'something difficult' -- the nature of what must be overcome." },
    ],
    synonyms: ["conquer", "surmount", "prevail"],
  },
  {
    word: "analyze",
    partOfSpeech: "verb",
    definition: "To examine something in detail in order to understand it or draw conclusions from it.",
    keyConcepts: [
      { keyword: "examine", matchTerms: ["examine", "study", "investigate", "inspect", "scrutinize", "explore", "assess", "review", "evaluate", "dissect", "break down"], label: "Examine in detail", hint: "The definition says 'examine something in detail' -- careful close study." },
      { keyword: "understand", matchTerms: ["understand", "comprehend", "interpret", "conclude", "determine", "explain", "discover", "figure out", "make sense"], label: "To understand or conclude", hint: "The definition says 'in order to understand it or draw conclusions' -- the purpose of analysis." },
    ],
    synonyms: ["examine", "investigate", "study"],
  },
  {
    word: "pivot",
    partOfSpeech: "verb",
    definition: "To turn on a central point; to change direction or strategy completely.",
    keyConcepts: [
      { keyword: "turn", matchTerms: ["turn", "rotate", "swivel", "spin", "revolve", "swing", "shift", "move around"], label: "Turn on a central point", hint: "The definition says 'turn on a central point' -- rotation around a fixed axis." },
      { keyword: "change direction", matchTerms: ["change direction", "shift", "adjust", "redirect", "switch", "alter course", "adapt", "transform", "reorient"], label: "Change direction", hint: "The definition says 'change direction or strategy completely' -- a significant shift in approach." },
    ],
    synonyms: ["turn", "shift", "redirect"],
  },
  {
    word: "apt",
    partOfSpeech: "adjective",
    definition: "Appropriate or well-suited for a situation; tending to do something habitually.",
    keyConcepts: [
      { keyword: "appropriate", matchTerms: ["appropriate", "suitable", "fitting", "relevant", "pertinent", "proper", "right", "applicable", "correct", "spot-on"], label: "Appropriate or suitable", hint: "The definition says 'appropriate or well-suited' -- the right choice for the situation." },
      { keyword: "tend", matchTerms: ["tend", "inclined", "likely", "prone", "disposed", "liable", "given", "habitually", "naturally"], label: "Tends to do something", hint: "The definition says 'tending to do something habitually' -- a natural inclination." },
    ],
    synonyms: ["appropriate", "fitting", "suitable"],
  },
  {
    word: "holistic",
    partOfSpeech: "adjective",
    definition: "Dealing with or treating the whole of something rather than just its parts.",
    keyConcepts: [
      { keyword: "whole", matchTerms: ["whole", "entire", "complete", "total", "overall", "comprehensive", "integrated", "full", "all-encompassing"], label: "Dealing with the whole", hint: "The definition says 'dealing with the whole of something' -- not just isolated parts." },
      { keyword: "parts", matchTerms: ["parts", "elements", "components", "aspects", "sections", "fragments", "individual pieces"], label: "Rather than just parts", hint: "The definition says 'rather than just its parts' -- the contrast with reductionism." },
    ],
    synonyms: ["comprehensive", "integrated", "complete"],
  },
  {
    word: "notify",
    partOfSpeech: "verb",
    definition: "To formally inform someone of something; to make something known officially.",
    keyConcepts: [
      { keyword: "inform", matchTerms: ["inform", "tell", "alert", "advise", "warn", "update", "report", "communicate", "announce", "brief"], label: "Formally inform", hint: "The definition says 'formally inform someone of something' -- delivering official information." },
      { keyword: "official", matchTerms: ["official", "formal", "proper", "required", "legal", "mandatory", "due notice", "acknowledgment"], label: "Officially", hint: "The definition says 'make something known officially' -- following proper channels." },
    ],
    synonyms: ["inform", "alert", "advise"],
  },
  {
    word: "attempt",
    partOfSpeech: "verb",
    definition: "To make an effort to achieve something; to try to do something.",
    keyConcepts: [
      { keyword: "make an effort", matchTerms: ["make an effort", "try", "endeavor", "strive", "work", "go for", "have a go", "take a shot"], label: "Make an effort", hint: "The definition says 'make an effort to achieve something' -- active trying." },
      { keyword: "achieve", matchTerms: ["achieve", "accomplish", "succeed at", "do", "complete", "reach", "get", "attain", "manage"], label: "Try to achieve", hint: "The definition says 'try to do something' -- the goal behind the attempt." },
    ],
    synonyms: ["try", "endeavor", "strive"],
  },
  {
    word: "operate",
    partOfSpeech: "verb",
    definition: "To control or manage a machine or system; to function or work.",
    keyConcepts: [
      { keyword: "control or manage", matchTerms: ["control", "manage", "run", "work", "handle", "use", "drive", "control", "direct", "execute"], label: "Control or manage", hint: "The definition says 'control or manage a machine or system' -- being in charge of it." },
      { keyword: "function", matchTerms: ["function", "work", "run", "perform", "go", "act", "be in effect", "be operational", "proceed"], label: "Function or work", hint: "The definition says 'to function or work' -- being active and working." },
    ],
    synonyms: ["run", "manage", "function"],
  },
  {
    word: "barrier",
    partOfSpeech: "noun",
    definition: "A fence or obstacle that prevents movement; something that makes progress difficult.",
    keyConcepts: [
      { keyword: "obstacle", matchTerms: ["obstacle", "block", "wall", "fence", "boundary", "hindrance", "impediment", "obstruction", "hurdle"], label: "Obstacle preventing movement", hint: "The definition says 'a fence or obstacle that prevents movement' -- a physical blocker." },
      { keyword: "difficult", matchTerms: ["difficult", "makes hard", "prevents", "limits", "restricts", "stops", "challenges", "inhibits"], label: "Makes progress difficult", hint: "The definition says 'something that makes progress difficult' -- an impediment to advancement." },
    ],
    synonyms: ["obstacle", "hurdle", "impediment"],
  },
  {
    word: "conclude",
    partOfSpeech: "verb",
    definition: "To arrive at a judgment or decision through reasoning; to bring something to an end.",
    keyConcepts: [
      { keyword: "judgment", matchTerms: ["judgment", "decision", "determine", "reason", "deduce", "infer", "decide", "establish", "figure out", "gather"], label: "Arrive at a judgment", hint: "The definition says 'arrive at a judgment or decision through reasoning' -- reaching a conclusion." },
      { keyword: "end", matchTerms: ["end", "finish", "close", "complete", "wrap up", "terminate", "finalize", "settle", "resolve"], label: "Bring to an end", hint: "The definition says 'bring something to an end' -- finishing it." },
    ],
    synonyms: ["determine", "decide", "finish"],
  },
  {
    word: "logical",
    partOfSpeech: "adjective",
    definition: "Following valid reasoning; making sense in a rational and clear way.",
    keyConcepts: [
      { keyword: "reasoning", matchTerms: ["reasoning", "rational", "sensible", "reasoned", "sound", "coherent", "valid", "consistent", "systematic", "principled"], label: "Following valid reasoning", hint: "The definition says 'following valid reasoning' -- thoughts that connect correctly." },
      { keyword: "clear", matchTerms: ["clear", "makes sense", "understandable", "straightforward", "evident", "plain", "lucid", "transparent"], label: "Makes sense clearly", hint: "The definition says 'making sense in a rational and clear way' -- easy to follow the logic." },
    ],
    synonyms: ["rational", "reasoned", "coherent"],
  },
  {
    word: "straightforward",
    partOfSpeech: "adjective",
    definition: "Easy to understand or do; uncomplicated and honest.",
    keyConcepts: [
      { keyword: "easy", matchTerms: ["easy", "simple", "uncomplicated", "clear", "plain", "direct", "obvious", "no-nonsense", "intelligible"], label: "Easy to understand", hint: "The definition says 'easy to understand or do' -- no complications." },
      { keyword: "honest", matchTerms: ["honest", "frank", "open", "candid", "direct", "sincere", "transparent", "guileless", "upfront"], label: "Honest and direct", hint: "The definition says 'uncomplicated and honest' -- saying what is meant without complexity." },
    ],
    synonyms: ["simple", "direct", "honest"],
  },
  {
    word: "withstand",
    partOfSpeech: "verb",
    definition: "To remain undamaged or unaffected by something; to resist the effect of something.",
    keyConcepts: [
      { keyword: "remain undamaged", matchTerms: ["remain undamaged", "survive", "endure", "resist", "hold out", "stand up to", "bear", "weather", "cope with"], label: "Remain undamaged", hint: "The definition says 'remain undamaged or unaffected' -- coming through intact." },
      { keyword: "resist", matchTerms: ["resist", "oppose", "fight off", "counter", "block", "withstand", "refuse to yield"], label: "Resist the effect", hint: "The definition says 'resist the effect of something' -- not being changed by it." },
    ],
    synonyms: ["endure", "resist", "survive"],
  },
  {
    word: "advance",
    partOfSpeech: "verb",
    definition: "To move forward or make progress; to develop or improve.",
    keyConcepts: [
      { keyword: "move forward", matchTerms: ["move forward", "progress", "proceed", "go forward", "gain ground", "push ahead", "step up"], label: "Move forward", hint: "The definition says 'to move forward or make progress' -- forward motion." },
      { keyword: "develop", matchTerms: ["develop", "improve", "grow", "increase", "promote", "further", "elevate", "enhance", "raise"], label: "Develop or improve", hint: "The definition says 'to develop or improve' -- growth dimension." },
    ],
    synonyms: ["progress", "develop", "improve"],
  },
  {
    word: "aggravate",
    partOfSpeech: "verb",
    definition: "To make a problem or negative situation worse; to annoy or exasperate someone.",
    keyConcepts: [
      { keyword: "worsen", matchTerms: ["worsen", "exacerbate", "intensify", "inflame", "compound", "deepen", "heighten", "increase", "escalate", "magnify", "add to"], label: "Make worse", hint: "The definition says 'make a problem worse' -- adding to the severity." },
      { keyword: "annoy", matchTerms: ["annoy", "irritate", "exasperate", "frustrate", "irk", "vex", "bother", "provoke", "anger", "agitate", "pester"], label: "Annoy or exasperate", hint: "The definition says 'annoy or exasperate someone' -- causing irritation." },
    ],
    synonyms: ["exacerbate", "worsen", "irritate"],
  },
  {
    word: "factual",
    partOfSpeech: "adjective",
    definition: "Concerned with what is actually the case rather than interpretation; based on facts.",
    keyConcepts: [
      { keyword: "actually the case", matchTerms: ["actually the case", "real", "true", "accurate", "objective", "concrete", "verified", "correct", "literal"], label: "Actually the case", hint: "The definition says 'concerned with what is actually the case' -- grounded in reality." },
      { keyword: "based on facts", matchTerms: ["based on facts", "evidence-based", "documented", "proven", "confirmed", "verifiable", "empirical"], label: "Based on facts", hint: "The definition says 'based on facts' -- not interpretation or opinion." },
    ],
    synonyms: ["accurate", "true", "objective"],
  },
  {
    word: "accommodate",
    partOfSpeech: "verb",
    definition: "To provide space or resources for something; to adapt to another's needs or wishes.",
    keyConcepts: [
      { keyword: "provide", matchTerms: ["provide", "house", "hold", "contain", "fit", "make room", "supply", "offer", "furnish", "seat", "cater for"], label: "Provide space or resources", hint: "The definition says 'provide space or resources' -- making room available." },
      { keyword: "adapt", matchTerms: ["adapt", "adjust", "comply", "oblige", "flex", "modify", "yield", "meet", "satisfy", "fulfill"], label: "Adapt to needs", hint: "The definition says 'adapt to another's needs or wishes' -- being flexible and obliging." },
    ],
    synonyms: ["adapt", "house", "comply"],
  },
  {
    word: "revise",
    partOfSpeech: "verb",
    definition: "To reexamine or alter something in order to correct or improve it.",
    keyConcepts: [
      { keyword: "alter", matchTerms: ["alter", "change", "modify", "amend", "update", "edit", "correct", "adjust", "rework", "overhaul"], label: "Alter to improve", hint: "The definition says 'alter something in order to correct or improve it' -- making changes." },
      { keyword: "correct", matchTerms: ["correct", "improve", "fix", "refine", "better", "enhance", "perfect", "review", "reconsider"], label: "Correct or improve", hint: "The definition says 'correct or improve it' -- the purpose of revision." },
    ],
    synonyms: ["amend", "edit", "update"],
  },
  {
    word: "evolve",
    partOfSpeech: "verb",
    definition: "To develop gradually over time into a more complex or better form.",
    keyConcepts: [
      { keyword: "develop", matchTerms: ["develop", "change", "grow", "progress", "advance", "mature", "transform", "shift", "adapt", "unfold"], label: "Develop gradually", hint: "The definition says 'develop gradually over time' -- slow, ongoing change." },
      { keyword: "better", matchTerms: ["better", "complex", "improved", "advanced", "refined", "higher", "sophisticated", "adapted"], label: "More complex or better", hint: "The definition says 'into a more complex or better form' -- the direction of change." },
    ],
    synonyms: ["develop", "progress", "adapt"],
  },
  {
    word: "restore",
    partOfSpeech: "verb",
    definition: "To return something to its original condition; to bring back a previous state or practice.",
    keyConcepts: [
      { keyword: "original condition", matchTerms: ["original", "former", "previous", "prior", "old", "initial", "as it was", "better state", "repaired"], label: "Return to original condition", hint: "The definition says 'return something to its original condition' -- bringing back what was." },
      { keyword: "bring back", matchTerms: ["bring back", "reinstate", "revive", "renew", "reestablish", "rebuild", "recover", "rehabilitate", "revitalize"], label: "Bring back a state", hint: "The definition says 'bring back a previous state or practice' -- reestablishing something." },
    ],
    synonyms: ["revive", "renew", "reinstate"],
  },
  {
    word: "handle",
    partOfSpeech: "verb",
    definition: "To manage a situation, task, or problem; to touch or hold in the hands.",
    keyConcepts: [
      { keyword: "manage", matchTerms: ["manage", "deal with", "tackle", "address", "control", "take care of", "cope with", "oversee", "run"], label: "Manage a situation", hint: "The definition says 'manage a situation, task, or problem' -- taking charge of it." },
      { keyword: "touch", matchTerms: ["touch", "hold", "feel", "pick up", "grasp", "grip", "manipulate", "use", "operate"], label: "Touch or hold", hint: "The definition says 'touch or hold in the hands' -- physical interaction." },
    ],
    synonyms: ["manage", "deal with", "grip"],
  },
  {
    word: "agile",
    partOfSpeech: "adjective",
    definition: "Able to move quickly and easily; able to think and respond rapidly and effectively.",
    keyConcepts: [
      { keyword: "quick", matchTerms: ["quick", "swift", "fast", "nimble", "lithe", "deft", "sprightly", "brisk", "responsive", "rapid"], label: "Quick and easy", hint: "The definition says 'move quickly and easily' -- physical or mental nimbleness." },
      { keyword: "adapt", matchTerms: ["adapt", "flexible", "responsive", "versatile", "adjustable", "change", "pivot", "shift", "dynamic"], label: "Respond rapidly", hint: "The definition says 'respond rapidly and effectively' -- ability to adjust quickly." },
    ],
    synonyms: ["nimble", "flexible", "dexterous"],
  },
  {
    word: "critical",
    partOfSpeech: "adjective",
    definition: "Expressing disapproval or judgment; of vital importance to a particular matter.",
    keyConcepts: [
      { keyword: "disapproval", matchTerms: ["disapproval", "critical", "fault-finding", "judgmental", "negative", "disparaging", "harsh", "exacting"], label: "Expressing disapproval", hint: "The definition says 'expressing disapproval or judgment' -- evaluating unfavorably." },
      { keyword: "vital importance", matchTerms: ["vital importance", "crucial", "essential", "key", "pivotal", "necessary", "decisive", "critical"], label: "Vital importance", hint: "The definition says 'of vital importance to a particular matter' -- cannot be ignored." },
    ],
    synonyms: ["crucial", "essential", "judgmental"],
  },
  {
    word: "equip",
    partOfSpeech: "verb",
    definition: "To provide someone or something with necessary tools, skills, or resources.",
    keyConcepts: [
      { keyword: "provide", matchTerms: ["provide", "supply", "furnish", "give", "outfit", "prepare", "arm", "fit out", "stock", "ready"], label: "Provide tools or resources", hint: "The definition says 'provide someone with necessary tools or resources' -- giving what is needed." },
      { keyword: "necessary", matchTerms: ["necessary", "needed", "required", "essential", "relevant", "right", "appropriate", "useful"], label: "Necessary for purpose", hint: "The definition says 'necessary tools, skills, or resources' -- what is actually needed." },
    ],
    synonyms: ["prepare", "supply", "outfit"],
  },
  {
    word: "update",
    partOfSpeech: "verb",
    definition: "To make something more modern or current; to provide with the latest information.",
    keyConcepts: [
      { keyword: "make current", matchTerms: ["make current", "modernize", "revise", "upgrade", "refresh", "renew", "bring up to date", "amend"], label: "Make more current", hint: "The definition says 'make something more modern or current' -- keeping it fresh." },
      { keyword: "latest information", matchTerms: ["latest information", "news", "developments", "changes", "new data", "inform", "brief", "tell"], label: "Provide latest information", hint: "The definition says 'provide with the latest information' -- keeping someone informed." },
    ],
    synonyms: ["modernize", "revise", "refresh"],
  },
  {
    word: "safeguard",
    partOfSpeech: "verb",
    definition: "To protect something from harm or damage; to take measures to ensure safety.",
    keyConcepts: [
      { keyword: "protect", matchTerms: ["protect", "defend", "guard", "shield", "preserve", "secure", "shelter", "insulate", "maintain", "save"], label: "Protect from harm", hint: "The definition says 'protect something from harm or damage' -- keeping it safe." },
      { keyword: "measures", matchTerms: ["measures", "precautions", "steps", "actions", "policies", "rules", "controls", "procedures"], label: "Take measures", hint: "The definition says 'take measures to ensure safety' -- proactive protection." },
    ],
    synonyms: ["protect", "defend", "preserve"],
  },
  {
    word: "purpose",
    partOfSpeech: "noun",
    definition: "The reason for which something is done; the intended result of a plan.",
    keyConcepts: [
      { keyword: "reason for doing", matchTerms: ["reason", "motivation", "aim", "goal", "objective", "intention", "why", "meaning", "point"], label: "Reason for which done", hint: "The definition says 'the reason for which something is done' -- the why." },
      { keyword: "intended result", matchTerms: ["intended result", "outcome", "end", "target", "aspiration", "design", "plan", "function"], label: "Intended result", hint: "The definition says 'the intended result of a plan' -- what one is working toward." },
    ],
    synonyms: ["reason", "goal", "intention"],
  },
  {
    word: "ambition",
    partOfSpeech: "noun",
    definition: "A strong desire to achieve something great; the determination to succeed or excel.",
    keyConcepts: [
      { keyword: "desire", matchTerms: ["desire", "drive", "motivation", "hunger", "eagerness", "aspiration", "determination", "will", "want", "goal", "aim", "passion"], label: "Strong desire to achieve", hint: "The definition says 'strong desire to achieve something great' -- powerful internal drive." },
      { keyword: "succeed", matchTerms: ["succeed", "achieve", "accomplish", "attain", "excel", "reach", "rise", "advance", "progress", "climb"], label: "Determination to succeed", hint: "The definition says 'determination to succeed or excel' -- focused on achievement." },
    ],
    synonyms: ["drive", "aspiration", "determination"],
  },
  {
    word: "maximize",
    partOfSpeech: "verb",
    definition: "To make as great or large as possible; to use something to its fullest extent.",
    keyConcepts: [
      { keyword: "as great as possible", matchTerms: ["as great as possible", "optimize", "increase", "enlarge", "boost", "amplify", "raise", "enhance", "improve"], label: "Make as great as possible", hint: "The definition says 'make as great or large as possible' -- pushing to the limit." },
      { keyword: "fullest extent", matchTerms: ["fullest", "full use", "exploit", "leverage", "use up", "utilize", "capitalize", "take full advantage"], label: "Use to the fullest", hint: "The definition says 'use something to its fullest extent' -- getting everything out of it." },
    ],
    synonyms: ["optimize", "increase", "amplify"],
  },
  {
    word: "recognize",
    partOfSpeech: "verb",
    definition: "To identify something as already known; to acknowledge the existence or merit of something.",
    keyConcepts: [
      { keyword: "identify", matchTerms: ["identify", "know", "recall", "remember", "spot", "place", "distinguish", "notice", "perceive"], label: "Identify as known", hint: "The definition says 'identify something as already known' -- placing what is familiar." },
      { keyword: "acknowledge", matchTerms: ["acknowledge", "admit", "accept", "validate", "affirm", "appreciate", "appreciate", "honor", "confirm"], label: "Acknowledge merit", hint: "The definition says 'acknowledge the existence or merit of something' -- giving it its due." },
    ],
    synonyms: ["identify", "acknowledge", "know"],
  },
  {
    word: "affirm",
    partOfSpeech: "verb",
    definition: "To state confidently or firmly; to declare support for a value or belief.",
    keyConcepts: [
      { keyword: "state firmly", matchTerms: ["state firmly", "declare", "assert", "confirm", "maintain", "insist", "claim", "profess", "state"], label: "State confidently", hint: "The definition says 'state confidently or firmly' -- making a strong declaration." },
      { keyword: "support", matchTerms: ["support", "uphold", "endorse", "back", "validate", "ratify", "agree with", "stand by"], label: "Declare support", hint: "The definition says 'declare support for a value or belief' -- standing behind something." },
    ],
    synonyms: ["confirm", "declare", "assert"],
  },
  {
    word: "blend",
    partOfSpeech: "verb",
    definition: "To mix smoothly so that the components become indistinguishable; to combine harmoniously.",
    keyConcepts: [
      { keyword: "mix", matchTerms: ["mix", "combine", "merge", "fuse", "mingle", "integrate", "incorporate", "stir", "join", "amalgamate"], label: "Mix smoothly", hint: "The definition says 'mix smoothly so components become indistinguishable' -- thorough mixing." },
      { keyword: "harmoniously", matchTerms: ["harmoniously", "seamlessly", "naturally", "smoothly", "well", "comfortably", "together", "unified"], label: "Combine harmoniously", hint: "The definition says 'combine harmoniously' -- fitting together without friction." },
    ],
    synonyms: ["mix", "combine", "merge"],
  },
  {
    word: "pattern",
    partOfSpeech: "noun",
    definition: "A repeated design or form; a regular way in which something happens or is done.",
    keyConcepts: [
      { keyword: "repeated", matchTerms: ["repeated", "recurring", "regular", "consistent", "repetitive", "cyclical", "systematic", "ordered"], label: "A repeated design", hint: "The definition says 'a repeated design or form' -- something that recurs." },
      { keyword: "regular way", matchTerms: ["regular", "way", "behavior", "tendency", "habit", "structure", "arrangement", "sequence", "norm"], label: "A regular way of happening", hint: "The definition says 'a regular way in which something happens' -- a recognizable structure." },
    ],
    synonyms: ["design", "structure", "regularity"],
  },
  {
    word: "cope",
    partOfSpeech: "verb",
    definition: "To deal effectively with something difficult or stressful; to manage a challenging situation.",
    keyConcepts: [
      { keyword: "deal with", matchTerms: ["deal with", "handle", "manage", "face", "address", "tackle", "navigate", "endure", "withstand", "bear", "get through"], label: "Deal with difficulty", hint: "The definition says 'deal effectively with something difficult' -- managing a hard situation." },
      { keyword: "stressful", matchTerms: ["stressful", "challenging", "difficult", "hard", "demanding", "tough", "overwhelming", "adverse"], label: "Something stressful", hint: "The definition says 'something difficult or stressful' -- the nature of what must be coped with." },
    ],
    synonyms: ["manage", "handle", "endure"],
  },
  {
    word: "anchor",
    partOfSpeech: "noun",
    definition: "Something that provides stability or security; a person or thing that gives reliable support.",
    keyConcepts: [
      { keyword: "stability", matchTerms: ["stability", "support", "security", "grounding", "foundation", "steadiness", "hold", "firm", "solid", "fixed", "constancy"], label: "Provides stability", hint: "The definition says 'provides stability or security' -- something that keeps things steady." },
      { keyword: "support", matchTerms: ["support", "rely on", "depend on", "hold", "backup", "prop", "sustain", "brace", "undergird", "reinforce"], label: "Reliable support", hint: "The definition says 'gives reliable support' -- something to lean on." },
    ],
    synonyms: ["foundation", "support", "mainstay"],
  },
  {
    word: "concede",
    partOfSpeech: "verb",
    definition: "To admit that something is true or valid; to yield or give up something under pressure.",
    keyConcepts: [
      { keyword: "admit", matchTerms: ["admit", "acknowledge", "accept", "grant", "recognize", "allow", "agree", "confess", "own", "surrender"], label: "Admit something is true", hint: "The definition says 'admit that something is true or valid' -- acknowledging a point." },
      { keyword: "yield", matchTerms: ["yield", "give up", "surrender", "relinquish", "back down", "capitulate", "defer", "submit", "give in"], label: "Yield under pressure", hint: "The definition says 'yield or give up something under pressure' -- backing down." },
    ],
    synonyms: ["admit", "yield", "acknowledge"],
  },
  {
    word: "fulfill",
    partOfSpeech: "verb",
    definition: "To carry out a task or obligation; to achieve what was hoped for.",
    keyConcepts: [
      { keyword: "carry out", matchTerms: ["carry out", "complete", "perform", "execute", "satisfy", "meet", "deliver", "honor", "discharge", "realize"], label: "Carry out a task", hint: "The definition says 'carry out a task or obligation' -- completing what must be done." },
      { keyword: "achieve", matchTerms: ["achieve", "realize", "attain", "reach", "accomplish", "live up to", "come true", "bring about"], label: "Achieve what was hoped", hint: "The definition says 'achieve what was hoped for' -- matching expectations." },
    ],
    synonyms: ["complete", "satisfy", "achieve"],
  },
  {
    word: "confront",
    partOfSpeech: "verb",
    definition: "To face something difficult or threatening directly; to challenge someone about a problem.",
    keyConcepts: [
      { keyword: "face", matchTerms: ["face", "deal with", "tackle", "meet", "address", "stand up to", "encounter", "brave", "take on"], label: "Face something difficult", hint: "The definition says 'face something difficult or threatening directly' -- not avoiding it." },
      { keyword: "challenge", matchTerms: ["challenge", "question", "accuse", "call out", "oppose", "dispute", "confront", "rebuke", "reproach"], label: "Challenge someone", hint: "The definition says 'challenge someone about a problem' -- raising it directly with them." },
    ],
    synonyms: ["face", "tackle", "challenge"],
  },
  {
    word: "connect",
    partOfSpeech: "verb",
    definition: "To join or link things together; to form a relationship or association.",
    keyConcepts: [
      { keyword: "join", matchTerms: ["join", "link", "attach", "unite", "combine", "bridge", "tie", "bind", "hook up", "interface", "integrate"], label: "Join or link together", hint: "The definition says 'join or link things together' -- creating a physical or logical bond." },
      { keyword: "relationship", matchTerms: ["relationship", "association", "relation", "rapport", "bond", "affinity", "tie", "communication"], label: "Form a relationship", hint: "The definition says 'form a relationship or association' -- creating a human or conceptual link." },
    ],
    synonyms: ["link", "join", "relate"],
  },
  {
    word: "contend",
    partOfSpeech: "verb",
    definition: "To struggle to deal with something; to assert as a position in an argument.",
    keyConcepts: [
      { keyword: "struggle", matchTerms: ["struggle", "deal with", "cope", "face", "fight", "battle", "work against", "wrestle", "compete", "vie"], label: "Struggle to deal with", hint: "The definition says 'struggle to deal with something' -- working hard against difficulty." },
      { keyword: "assert", matchTerms: ["assert", "argue", "claim", "maintain", "hold", "insist", "say", "propose", "suggest", "declare"], label: "Assert a position", hint: "The definition says 'assert as a position in an argument' -- making an argument." },
    ],
    synonyms: ["argue", "struggle", "compete"],
  },
  {
    word: "orient",
    partOfSpeech: "verb",
    definition: "To position or align something in relation to its surroundings; to familiarize someone with a situation.",
    keyConcepts: [
      { keyword: "position", matchTerms: ["position", "align", "direct", "point", "place", "set", "angle", "face", "aim", "calibrate"], label: "Position or align", hint: "The definition says 'position or align something in relation to its surroundings' -- getting the direction right." },
      { keyword: "familiarize", matchTerms: ["familiarize", "introduce", "brief", "inform", "acclimatize", "guide", "acquaint", "prepare"], label: "Familiarize someone", hint: "The definition says 'familiarize someone with a situation' -- helping them find their bearings." },
    ],
    synonyms: ["align", "position", "acquaint"],
  },
  {
    word: "grasp",
    partOfSpeech: "verb",
    definition: "To seize and hold firmly; to understand something fully and clearly.",
    keyConcepts: [
      { keyword: "seize", matchTerms: ["seize", "grip", "hold", "clutch", "grab", "take hold of", "clasp", "catch", "snatch"], label: "Seize and hold firmly", hint: "The definition says 'seize and hold firmly' -- physical taking hold." },
      { keyword: "understand", matchTerms: ["understand", "comprehend", "follow", "absorb", "get", "take in", "appreciate", "fathom", "internalize"], label: "Understand fully", hint: "The definition says 'understand something fully and clearly' -- mental comprehension." },
    ],
    synonyms: ["understand", "comprehend", "grip"],
  },
  {
    word: "secure",
    partOfSpeech: "adjective",
    definition: "Fixed or held firmly in place; free from danger or threat.",
    keyConcepts: [
      { keyword: "fixed", matchTerms: ["fixed", "stable", "firm", "fastened", "locked", "anchored", "attached", "tied", "held", "immovable"], label: "Fixed firmly in place", hint: "The definition says 'fixed or held firmly in place' -- not loose or movable." },
      { keyword: "safe", matchTerms: ["safe", "protected", "free from danger", "free from threat", "guarded", "sheltered", "certain", "assured"], label: "Free from danger", hint: "The definition says 'free from danger or threat' -- safety and certainty." },
    ],
    synonyms: ["safe", "stable", "protected"],
  },
  {
    word: "ardent",
    partOfSpeech: "adjective",
    definition: "Very enthusiastic or passionate about something; showing deep and sincere feeling.",
    keyConcepts: [
      { keyword: "enthusiastic", matchTerms: ["enthusiastic", "passionate", "eager", "fervent", "keen", "zealous", "devoted", "intense", "committed", "excited", "avid"], label: "Very enthusiastic", hint: "The definition says 'very enthusiastic or passionate' -- strong positive energy." },
      { keyword: "sincere", matchTerms: ["sincere", "genuine", "heartfelt", "deep", "earnest", "conviction", "warmth", "dedication", "wholehearted"], label: "Sincere deep feeling", hint: "The definition says 'deep and sincere feeling' -- genuine emotional involvement." },
    ],
    synonyms: ["passionate", "fervent", "zealous"],
  },
  {
    word: "competent",
    partOfSpeech: "adjective",
    definition: "Having the necessary skill or knowledge to do something successfully.",
    keyConcepts: [
      { keyword: "skill", matchTerms: ["skill", "ability", "knowledge", "expertise", "proficiency", "capability", "qualification", "training"], label: "Necessary skill or knowledge", hint: "The definition says 'having the necessary skill or knowledge' -- possessing what is needed." },
      { keyword: "successfully", matchTerms: ["successfully", "well", "effectively", "adequately", "properly", "efficiently", "reliably", "correctly"], label: "Do something successfully", hint: "The definition says 'to do something successfully' -- getting it done right." },
    ],
    synonyms: ["capable", "skilled", "qualified"],
  },
  {
    word: "brisk",
    partOfSpeech: "adjective",
    definition: "Active, fast, and energetic; fresh and invigorating.",
    keyConcepts: [
      { keyword: "energetic", matchTerms: ["energetic", "lively", "active", "quick", "swift", "busy", "efficient", "dynamic", "snappy", "vigorous"], label: "Active and energetic", hint: "The definition says 'active, fast, and energetic' -- moving with purpose and speed." },
      { keyword: "fresh", matchTerms: ["fresh", "invigorating", "crisp", "sharp", "cool", "refreshing", "stimulating", "keen"], label: "Fresh and invigorating", hint: "The definition says 'fresh and invigorating' -- a pleasant, stimulating quality." },
    ],
    synonyms: ["lively", "energetic", "crisp"],
  },
  {
    word: "include",
    partOfSpeech: "verb",
    definition: "To make part of a whole or set; to consider someone or something as part of a group.",
    keyConcepts: [
      { keyword: "make part of", matchTerms: ["make part of", "incorporate", "add", "count in", "cover", "encompass", "embrace", "involve", "contain"], label: "Make part of a whole", hint: "The definition says 'make part of a whole or set' -- adding to a larger group." },
      { keyword: "consider", matchTerms: ["consider", "count", "treat as", "regard", "acknowledge", "recognize", "bring in", "admit", "allow"], label: "Consider as part of a group", hint: "The definition says 'consider someone or something as part of a group' -- giving them membership." },
    ],
    synonyms: ["incorporate", "involve", "encompass"],
  },
  {
    word: "indicate",
    partOfSpeech: "verb",
    definition: "To point out or make something known; to be a sign or symptom of something.",
    keyConcepts: [
      { keyword: "point out", matchTerms: ["point out", "show", "reveal", "signal", "flag", "suggest", "imply", "denote", "mark", "identify"], label: "Point out or show", hint: "The definition says 'point out or make something known' -- drawing attention to it." },
      { keyword: "sign", matchTerms: ["sign", "symptom", "signal", "evidence", "clue", "indication", "hint", "token", "pointer", "marker"], label: "A sign or symptom", hint: "The definition says 'be a sign or symptom of something' -- representing or suggesting." },
    ],
    synonyms: ["show", "signal", "suggest"],
  },
  {
    word: "appeal",
    partOfSpeech: "noun",
    definition: "A quality that attracts or interests people; a serious and earnest request.",
    keyConcepts: [
      { keyword: "attract", matchTerms: ["attract", "interest", "charm", "draw", "fascinate", "entice", "captivate", "please", "allure", "engage", "tempt"], label: "Quality that attracts", hint: "The definition says 'quality that attracts or interests people' -- a magnetic quality." },
      { keyword: "request", matchTerms: ["request", "plea", "call", "ask", "urge", "petition", "implore", "beg", "solicit", "entreat", "demand"], label: "A request or plea", hint: "The definition says 'serious and earnest request' -- urgently asking for something." },
    ],
    synonyms: ["attraction", "charm", "request"],
  },
  {
    word: "absorb",
    partOfSpeech: "verb",
    definition: "To take in or soak up something; to engage the full attention of someone.",
    keyConcepts: [
      { keyword: "take in", matchTerms: ["take in", "soak up", "soak", "assimilate", "incorporate", "internalize", "consume", "draw in", "engulf", "immerse", "ingest"], label: "Take in or soak up", hint: "The definition says 'take in or soak up' -- drawing something inward completely." },
      { keyword: "engage", matchTerms: ["engage", "captivate", "occupy", "engross", "fascinate", "rivet", "immerse", "involve", "hold", "consume", "grip"], label: "Engage fully", hint: "The definition says 'engage the full attention' -- completely holding one's focus." },
    ],
    synonyms: ["soak up", "assimilate", "engross"],
  },
  {
    word: "attitude",
    partOfSpeech: "noun",
    definition: "A settled way of thinking or feeling about something; a person's manner or behavior.",
    keyConcepts: [
      { keyword: "way of thinking", matchTerms: ["way of thinking", "viewpoint", "stance", "position", "outlook", "opinion", "mindset", "belief", "perspective"], label: "Way of thinking or feeling", hint: "The definition says 'a settled way of thinking or feeling about something' -- a mental disposition." },
      { keyword: "manner", matchTerms: ["manner", "behavior", "bearing", "demeanor", "conduct", "air", "approach", "style", "disposition"], label: "Manner or behavior", hint: "The definition says 'a person's manner or behavior' -- how it shows externally." },
    ],
    synonyms: ["outlook", "stance", "disposition"],
  },
  {
    word: "initiative",
    partOfSpeech: "noun",
    definition: "The ability to assess and take action without being told to; a new plan or program.",
    keyConcepts: [
      { keyword: "take action", matchTerms: ["take action", "act independently", "lead", "start", "self-start", "enterprise", "drive", "proactivity"], label: "Take action independently", hint: "The definition says 'take action without being told to' -- acting on one's own judgment." },
      { keyword: "plan", matchTerms: ["plan", "program", "proposal", "project", "scheme", "measure", "campaign", "effort", "strategy"], label: "A new plan or program", hint: "The definition says 'a new plan or program' -- a fresh course of action." },
    ],
    synonyms: ["drive", "enterprise", "plan"],
  },
  {
    word: "compress",
    partOfSpeech: "verb",
    definition: "To squeeze or press something into less space; to reduce to a smaller size or volume.",
    keyConcepts: [
      { keyword: "squeeze", matchTerms: ["squeeze", "press", "compact", "crush", "condense", "pack", "force", "flatten", "tighten", "reduce"], label: "Squeeze into less space", hint: "The definition says 'squeeze or press something into less space' -- reducing its volume." },
      { keyword: "reduce", matchTerms: ["reduce", "shorten", "abbreviate", "summarize", "truncate", "abridge", "minimize", "simplify"], label: "Reduce to smaller size", hint: "The definition says 'reduce to a smaller size or volume' -- making it smaller." },
    ],
    synonyms: ["condense", "compact", "squeeze"],
  },
  {
    word: "align",
    partOfSpeech: "verb",
    definition: "To put things in the correct relative position; to bring into agreement with.",
    keyConcepts: [
      { keyword: "position", matchTerms: ["position", "arrange", "line up", "order", "adjust", "place", "straighten", "calibrate", "orient", "set"], label: "Put in correct position", hint: "The definition says 'put things in the correct relative position' -- getting the arrangement right." },
      { keyword: "agree", matchTerms: ["agree", "correspond", "match", "accord", "coordinate", "harmonize", "fit", "cohere", "conform", "sync", "unite"], label: "Come into agreement", hint: "The definition says 'bring into agreement with' -- sharing direction or purpose." },
    ],
    synonyms: ["coordinate", "synchronize", "match"],
  },
  {
    word: "guided",
    partOfSpeech: "adjective",
    definition: "Led or directed by someone; controlled or influenced by principles.",
    keyConcepts: [
      { keyword: "led", matchTerms: ["led", "directed", "steered", "instructed", "advised", "mentored", "escorted", "overseen", "supervised"], label: "Led or directed", hint: "The definition says 'led or directed by someone' -- under another's guidance." },
      { keyword: "principles", matchTerms: ["principles", "values", "rules", "beliefs", "standards", "norms", "doctrine", "framework"], label: "Controlled by principles", hint: "The definition says 'controlled or influenced by principles' -- acting according to a code." },
    ],
    synonyms: ["directed", "led", "instructed"],
  },
  {
    word: "prepare",
    partOfSpeech: "verb",
    definition: "To make ready for an event or activity; to put things in order in advance.",
    keyConcepts: [
      { keyword: "make ready", matchTerms: ["make ready", "get ready", "set up", "arrange", "equip", "organize", "plan", "provision", "rehearse"], label: "Make ready", hint: "The definition says 'make ready for an event or activity' -- advance preparation." },
      { keyword: "in advance", matchTerms: ["in advance", "beforehand", "ahead of time", "prior to", "proactively", "in anticipation"], label: "Put in order in advance", hint: "The definition says 'put things in order in advance' -- doing it before it's needed." },
    ],
    synonyms: ["ready", "organize", "arrange"],
  },
  {
    word: "select",
    partOfSpeech: "verb",
    definition: "To carefully choose someone or something as being the best or most suitable.",
    keyConcepts: [
      { keyword: "choose", matchTerms: ["choose", "pick", "elect", "opt for", "decide on", "prefer", "favor", "identify", "handpick", "appoint"], label: "Carefully choose", hint: "The definition says 'carefully choose' -- deliberate selection from options." },
      { keyword: "best", matchTerms: ["best", "most suitable", "appropriate", "right", "ideal", "excellent", "top", "preferred", "optimal"], label: "Best or most suitable", hint: "The definition says 'the best or most suitable' -- choosing based on quality." },
    ],
    synonyms: ["choose", "pick", "appoint"],
  },
  {
    word: "achieve",
    partOfSpeech: "verb",
    definition: "To successfully reach a goal or accomplish something through effort.",
    keyConcepts: [
      { keyword: "reach a goal", matchTerms: ["goal", "objective", "target", "aim", "aspiration", "ambition", "result", "outcome", "success", "end"], label: "Reach a goal", hint: "The definition says 'reach a goal' -- arriving at an intended destination." },
      { keyword: "effort", matchTerms: ["effort", "work", "strive", "try", "struggle", "labor", "endeavor", "persevere", "accomplish", "attain", "earn"], label: "Through effort", hint: "The definition says 'through effort' -- success that is worked for." },
    ],
    synonyms: ["accomplish", "attain", "fulfill"],
  },
  {
    word: "develop",
    partOfSpeech: "verb",
    definition: "To grow or cause to grow more advanced; to create or produce something over time.",
    keyConcepts: [
      { keyword: "grow", matchTerms: ["grow", "advance", "progress", "mature", "expand", "evolve", "improve", "strengthen", "build", "increase"], label: "Grow more advanced", hint: "The definition says 'grow or cause to grow more advanced' -- increasing in sophistication." },
      { keyword: "create", matchTerms: ["create", "produce", "build", "make", "design", "form", "work on", "bring about", "elaborate", "construct"], label: "Create over time", hint: "The definition says 'create or produce something over time' -- gradual building." },
    ],
    synonyms: ["grow", "advance", "create"],
  },
  {
    word: "induce",
    partOfSpeech: "verb",
    definition: "To succeed in persuading someone to do something; to cause something to happen.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuade", "convince", "encourage", "lead", "prompt", "influence", "coax", "bring around", "move", "motivate"], label: "Persuade someone to do", hint: "The definition says 'succeed in persuading someone to do something' -- changing their course of action." },
      { keyword: "cause", matchTerms: ["cause", "bring about", "produce", "trigger", "generate", "lead to", "give rise to", "create", "result in"], label: "Cause something to happen", hint: "The definition says 'cause something to happen' -- active causation." },
    ],
    synonyms: ["persuade", "cause", "prompt"],
  },
  {
    word: "acclaim",
    partOfSpeech: "noun",
    definition: "Enthusiastic and widespread public praise or approval.",
    keyConcepts: [
      { keyword: "praise", matchTerms: ["praise", "approval", "applause", "commendation", "recognition", "admiration", "honor", "tribute", "kudos", "celebration", "acclamation"], label: "Enthusiastic praise", hint: "The definition says 'enthusiastic and widespread praise' -- strong positive recognition." },
    ],
    synonyms: ["praise", "applause", "recognition"],
  },
  {
    word: "organize",
    partOfSpeech: "verb",
    definition: "To arrange things into a structured and systematic order; to plan and coordinate an event.",
    keyConcepts: [
      { keyword: "arrange", matchTerms: ["arrange", "order", "structure", "sort", "classify", "categorize", "group", "systematize", "coordinate", "tidy"], label: "Arrange systematically", hint: "The definition says 'arrange things into a structured and systematic order' -- creating order." },
      { keyword: "plan", matchTerms: ["plan", "coordinate", "manage", "schedule", "set up", "run", "oversee", "orchestrate", "prepare"], label: "Plan and coordinate", hint: "The definition says 'plan and coordinate an event' -- bringing something together." },
    ],
    synonyms: ["arrange", "coordinate", "structure"],
  },
  {
    word: "reflect",
    partOfSpeech: "verb",
    definition: "To think carefully and deeply about something; to show or express a quality or situation.",
    keyConcepts: [
      { keyword: "think deeply", matchTerms: ["think deeply", "contemplate", "ponder", "consider", "meditate", "deliberate", "muse", "review", "ruminate"], label: "Think deeply about", hint: "The definition says 'think carefully and deeply about something' -- serious inner consideration." },
      { keyword: "show", matchTerms: ["show", "express", "reveal", "display", "indicate", "demonstrate", "mirror", "represent", "portray"], label: "Show a quality", hint: "The definition says 'show or express a quality or situation' -- manifesting something outwardly." },
    ],
    synonyms: ["ponder", "contemplate", "show"],
  },
  {
    word: "optimize",
    partOfSpeech: "verb",
    definition: "To make the best or most effective use of something; to improve something to its highest standard.",
    keyConcepts: [
      { keyword: "best use", matchTerms: ["best use", "maximize", "improve", "enhance", "refine", "perfect", "streamline", "fine-tune", "develop"], label: "Make best use of", hint: "The definition says 'make the best or most effective use of something' -- getting the most from it." },
      { keyword: "highest standard", matchTerms: ["highest", "best", "most effective", "peak", "ideal", "top", "superior", "optimal", "excellent"], label: "Highest standard", hint: "The definition says 'to its highest standard' -- the target of optimization." },
    ],
    synonyms: ["maximize", "improve", "refine"],
  },
  {
    word: "signal",
    partOfSpeech: "noun",
    definition: "An action or gesture used to convey information; an indication of something.",
    keyConcepts: [
      { keyword: "action or gesture", matchTerms: ["action", "gesture", "sign", "cue", "indicator", "movement", "marker", "symbol", "token"], label: "Action or gesture", hint: "The definition says 'an action or gesture used to convey information' -- a communicative act." },
      { keyword: "indication", matchTerms: ["indication", "hint", "clue", "evidence", "warning", "alert", "message", "sign", "pointer"], label: "Indication of something", hint: "The definition says 'an indication of something' -- it points to or suggests something." },
    ],
    synonyms: ["sign", "indicator", "cue"],
  },
  {
    word: "succeed",
    partOfSpeech: "verb",
    definition: "To achieve a desired aim or result; to come after something else in time or order.",
    keyConcepts: [
      { keyword: "achieve", matchTerms: ["achieve", "accomplish", "attain", "realize", "fulfill", "reach", "win", "triumph", "prosper", "prevail"], label: "Achieve a desired aim", hint: "The definition says 'achieve a desired aim or result' -- getting what was wanted." },
      { keyword: "come after", matchTerms: ["come after", "follow", "replace", "take over", "inherit", "assume", "step into", "supersede"], label: "Come after in order", hint: "The definition says 'come after something else in time or order' -- following in sequence." },
    ],
    synonyms: ["achieve", "accomplish", "prevail"],
  },
  {
    word: "categorize",
    partOfSpeech: "verb",
    definition: "To place something in a particular category or group; to classify.",
    keyConcepts: [
      { keyword: "place in category", matchTerms: ["place in category", "classify", "group", "sort", "arrange", "organize", "label", "assign", "identify"], label: "Place in a category", hint: "The definition says 'place something in a particular category or group' -- sorting by type." },
      { keyword: "classify", matchTerms: ["classify", "rank", "order", "separate", "distinguish", "define", "name", "catalog", "index"], label: "To classify", hint: "The definition says 'to classify' -- the act of sorting into types." },
    ],
    synonyms: ["classify", "sort", "group"],
  },
  {
    word: "establish",
    partOfSpeech: "verb",
    definition: "To set up or found something; to prove or demonstrate beyond doubt.",
    keyConcepts: [
      { keyword: "set up", matchTerms: ["set up", "found", "create", "build", "form", "start", "introduce", "institute", "inaugurate", "launch"], label: "Set up or found", hint: "The definition says 'set up or found something' -- bringing something into existence." },
      { keyword: "prove", matchTerms: ["prove", "demonstrate", "confirm", "verify", "show", "validate", "substantiate", "determine", "settle"], label: "Prove beyond doubt", hint: "The definition says 'prove or demonstrate beyond doubt' -- settling something definitively." },
    ],
    synonyms: ["found", "create", "prove"],
  },
  {
    word: "efficient",
    partOfSpeech: "adjective",
    definition: "Achieving maximum results with the least waste of time, effort, or resources.",
    keyConcepts: [
      { keyword: "maximum results", matchTerms: ["maximum", "best", "optimal", "productive", "effective", "high output", "greatest effect"], label: "Maximum results", hint: "The definition says 'achieving maximum results' -- the highest output." },
      { keyword: "least waste", matchTerms: ["least", "minimum", "no waste", "streamlined", "economical", "swift", "quick", "resource-saving", "lean"], label: "Least waste", hint: "The definition says 'least waste of time, effort, or resources' -- doing more with less." },
    ],
    synonyms: ["productive", "streamlined", "economical"],
  },
  {
    word: "dense",
    partOfSpeech: "adjective",
    definition: "Closely compacted together; hard to understand because of being complex or obscure.",
    keyConcepts: [
      { keyword: "compacted", matchTerms: ["compacted", "thick", "packed", "solid", "compressed", "concentrated", "crowded", "tight", "impenetrable"], label: "Closely compacted", hint: "The definition says 'closely compacted together' -- things tightly packed." },
      { keyword: "complex", matchTerms: ["complex", "difficult", "hard", "obscure", "impenetrable", "convoluted", "unclear", "incomprehensible"], label: "Hard to understand", hint: "The definition says 'hard to understand because of being complex or obscure' -- mental density." },
    ],
    synonyms: ["thick", "compact", "impenetrable"],
  },
  {
    word: "stimulate",
    partOfSpeech: "verb",
    definition: "To encourage activity or growth in something; to raise levels of physiological or nervous activity.",
    keyConcepts: [
      { keyword: "encourage", matchTerms: ["encourage", "promote", "boost", "spark", "trigger", "inspire", "motivate", "drive", "energize", "activate"], label: "Encourage activity or growth", hint: "The definition says 'encourage activity or growth in something' -- bringing things to life." },
      { keyword: "raise", matchTerms: ["raise", "increase", "heighten", "elevate", "intensify", "excite", "arouse", "provoke", "awaken", "stir"], label: "Raise activity levels", hint: "The definition says 'raise levels of physiological or nervous activity' -- increasing activity." },
    ],
    synonyms: ["encourage", "boost", "energize"],
  },
  {
    word: "qualify",
    partOfSpeech: "verb",
    definition: "To be entitled to something because of having certain qualities; to add conditions to a statement.",
    keyConcepts: [
      { keyword: "entitled", matchTerms: ["entitled", "eligible", "meet requirements", "satisfy conditions", "earn", "merit", "deserve", "be fit for"], label: "Be entitled", hint: "The definition says 'be entitled to something because of having certain qualities' -- meeting criteria." },
      { keyword: "conditions", matchTerms: ["conditions", "limits", "reservations", "exceptions", "caveats", "provisions", "restrictions", "clauses"], label: "Add conditions", hint: "The definition says 'add conditions to a statement' -- making it more precise or limited." },
    ],
    synonyms: ["be eligible", "limit", "modify"],
  },
  {
    word: "immense",
    partOfSpeech: "adjective",
    definition: "Extremely large or great in scale, size, or extent; huge.",
    keyConcepts: [
      { keyword: "extremely large", matchTerms: ["extremely large", "huge", "vast", "enormous", "massive", "gigantic", "colossal", "tremendous", "monumental", "great"], label: "Extremely large", hint: "The definition says 'extremely large or great in scale, size, or extent' -- very big indeed." },
      { keyword: "extent", matchTerms: ["extent", "scale", "size", "degree", "magnitude", "scope", "span", "reach", "proportion"], label: "Scale or extent", hint: "The definition says 'in scale, size, or extent' -- how the vastness is measured." },
    ],
    synonyms: ["huge", "vast", "enormous"],
  },
  {
    word: "grant",
    partOfSpeech: "verb",
    definition: "To give something formally or officially; to agree that something is true.",
    keyConcepts: [
      { keyword: "give officially", matchTerms: ["give", "award", "provide", "bestow", "confer", "allow", "allocate", "extend", "issue", "permit"], label: "Give formally or officially", hint: "The definition says 'give something formally or officially' -- an authorized gift or permission." },
      { keyword: "agree", matchTerms: ["agree", "concede", "admit", "acknowledge", "accept", "allow", "recognize", "affirm", "confirm"], label: "Agree something is true", hint: "The definition says 'agree that something is true' -- conceding a point." },
    ],
    synonyms: ["give", "award", "allow"],
  },
  {
    word: "arrange",
    partOfSpeech: "verb",
    definition: "To put things in a required or attractive order; to make plans or preparations for something.",
    keyConcepts: [
      { keyword: "order", matchTerms: ["order", "organize", "sort", "place", "set up", "structure", "lay out", "position", "group", "align", "sequence", "tidy"], label: "Put in order", hint: "The definition says 'put things in a required or attractive order' -- deliberate organization." },
      { keyword: "plan", matchTerms: ["plan", "prepare", "coordinate", "schedule", "organize", "set up", "manage", "establish", "orchestrate", "arrange"], label: "Make plans or preparations", hint: "The definition says 'make plans or preparations' -- organizing future actions." },
    ],
    synonyms: ["organize", "order", "coordinate"],
  },
  {
    word: "remedy",
    partOfSpeech: "noun",
    definition: "A solution or cure for a problem or difficulty; a medicine used to treat illness.",
    keyConcepts: [
      { keyword: "solution", matchTerms: ["solution", "cure", "fix", "answer", "response", "resolution", "corrective", "antidote", "treatment"], label: "A solution or cure", hint: "The definition says 'a solution or cure for a problem or difficulty' -- something that fixes it." },
      { keyword: "medicine", matchTerms: ["medicine", "treatment", "drug", "therapy", "prescription", "healing", "medical", "cure", "aid"], label: "A medicine or treatment", hint: "The definition says 'a medicine used to treat illness' -- medical healing." },
    ],
    synonyms: ["cure", "solution", "fix"],
  },
  {
    word: "balance",
    partOfSpeech: "noun",
    definition: "An even distribution of weight; a condition of stability; fairness.",
    keyConcepts: [
      { keyword: "even distribution", matchTerms: ["even distribution", "equilibrium", "proportion", "stability", "symmetry", "equality", "level"], label: "Even distribution", hint: "The definition says 'an even distribution of weight' -- things counterbalancing each other." },
      { keyword: "fairness", matchTerms: ["fairness", "impartiality", "equality", "justice", "equity", "even-handedness"], label: "Fairness", hint: "The definition says 'a condition of stability' and 'fairness' -- well-adjusted." },
    ],
    synonyms: ["equilibrium", "stability", "fairness"],
  },
  {
    word: "notable",
    partOfSpeech: "adjective",
    definition: "Worthy of attention or notice; remarkable or distinguished.",
    keyConcepts: [
      { keyword: "worthy of notice", matchTerms: ["worthy", "attention", "notice", "noteworthy", "significant", "important", "memorable", "interesting"], label: "Worthy of attention", hint: "The definition says 'worthy of attention or notice' -- deserving to be noted." },
      { keyword: "remarkable", matchTerms: ["remarkable", "distinguished", "outstanding", "exceptional", "eminent", "prominent", "celebrated", "famous"], label: "Remarkable or distinguished", hint: "The definition says 'remarkable or distinguished' -- standing out as special." },
    ],
    synonyms: ["remarkable", "distinguished", "significant"],
  },
  {
    word: "manage",
    partOfSpeech: "verb",
    definition: "To be in charge of something; to succeed in dealing with a difficult situation.",
    keyConcepts: [
      { keyword: "be in charge", matchTerms: ["be in charge", "run", "direct", "oversee", "supervise", "handle", "administer", "control", "lead"], label: "Be in charge", hint: "The definition says 'to be in charge of something' -- taking responsibility." },
      { keyword: "succeed in dealing", matchTerms: ["succeed in dealing", "cope", "handle", "navigate", "deal with", "work through", "accomplish"], label: "Succeed in dealing", hint: "The definition says 'succeed in dealing with a difficult situation' -- getting through it." },
    ],
    synonyms: ["run", "handle", "cope"],
  },
  {
    word: "interpret",
    partOfSpeech: "verb",
    definition: "To explain the meaning of something; to understand something in a particular way.",
    keyConcepts: [
      { keyword: "explain meaning", matchTerms: ["explain meaning", "translate", "decode", "clarify", "elucidate", "describe", "analyze", "construe"], label: "Explain the meaning", hint: "The definition says 'to explain the meaning of something' -- making it understandable." },
      { keyword: "understand", matchTerms: ["understand", "read", "take to mean", "construe", "gather", "perceive", "make sense of", "see as"], label: "Understand in a particular way", hint: "The definition says 'understand something in a particular way' -- a specific reading." },
    ],
    synonyms: ["explain", "construe", "translate"],
  },
  {
    word: "cease",
    partOfSpeech: "verb",
    definition: "To come or bring to an end; to stop happening or doing something.",
    keyConcepts: [
      { keyword: "stop", matchTerms: ["stop", "end", "finish", "halt", "quit", "discontinue", "desist", "break off", "terminate", "suspend"], label: "Come to an end", hint: "The definition says 'come or bring to an end' -- stopping completely." },
      { keyword: "happening", matchTerms: ["happening", "occurring", "going on", "continuing", "proceeding", "operating", "functioning"], label: "Stop happening", hint: "The definition says 'stop happening or doing something' -- the activity or process ends." },
    ],
    synonyms: ["stop", "end", "halt"],
  },
  {
    word: "detail",
    partOfSpeech: "noun",
    definition: "An individual feature, fact, or item; a small part of a larger whole.",
    keyConcepts: [
      { keyword: "individual feature", matchTerms: ["individual feature", "element", "item", "aspect", "particular", "point", "fact", "component"], label: "An individual feature", hint: "The definition says 'an individual feature, fact, or item' -- a single piece." },
      { keyword: "small part", matchTerms: ["small part", "minor element", "nuance", "subtlety", "fine point", "specificity", "precision"], label: "Small part of whole", hint: "The definition says 'a small part of a larger whole' -- it fits within something bigger." },
    ],
    synonyms: ["feature", "element", "particular"],
  },
  {
    word: "observe",
    partOfSpeech: "verb",
    definition: "To watch carefully and attentively; to make a comment or remark about something.",
    keyConcepts: [
      { keyword: "watch", matchTerms: ["watch", "study", "monitor", "notice", "examine", "survey", "witness", "look at", "attend to", "scrutinize"], label: "Watch carefully", hint: "The definition says 'watch carefully and attentively' -- close attention to what is happening." },
      { keyword: "comment", matchTerms: ["comment", "remark", "note", "mention", "say", "state", "point out", "reflect", "add"], label: "Make a comment", hint: "The definition says 'make a comment or remark' -- speaking about what is seen." },
    ],
    synonyms: ["watch", "notice", "remark"],
  },
  {
    word: "urgent",
    partOfSpeech: "adjective",
    definition: "Requiring immediate action or attention; pressing and important.",
    keyConcepts: [
      { keyword: "immediate", matchTerms: ["immediate", "pressing", "critical", "acute", "emergency", "requiring action", "time-sensitive", "top priority"], label: "Requiring immediate action", hint: "The definition says 'requiring immediate action or attention' -- cannot wait." },
      { keyword: "important", matchTerms: ["important", "serious", "vital", "crucial", "significant", "compelling", "grave", "dire"], label: "Pressing and important", hint: "The definition says 'pressing and important' -- the dual nature of urgency." },
    ],
    synonyms: ["pressing", "critical", "immediate"],
  },
  {
    word: "target",
    partOfSpeech: "noun",
    definition: "A person, object, or area at which something is aimed; an objective or goal to be achieved.",
    keyConcepts: [
      { keyword: "aim at", matchTerms: ["aim at", "goal", "objective", "focus", "intention", "purpose", "destination", "mark", "point", "recipient"], label: "Something aimed at", hint: "The definition says 'a person, object, or area at which something is aimed' -- the thing in the crosshairs." },
      { keyword: "achieve", matchTerms: ["achieve", "reach", "attain", "accomplish", "meet", "hit", "fulfill", "succeed at"], label: "Objective to achieve", hint: "The definition says 'an objective or goal to be achieved' -- something to work toward." },
    ],
    synonyms: ["goal", "objective", "aim"],
  },
  {
    word: "sensitive",
    partOfSpeech: "adjective",
    definition: "Quick to detect or respond to slight changes; easily hurt or upset by others.",
    keyConcepts: [
      { keyword: "quick to detect", matchTerms: ["quick to detect", "responsive", "perceptive", "aware", "attuned", "delicate", "fine", "precise", "alert"], label: "Quick to detect", hint: "The definition says 'quick to detect or respond to slight changes' -- high responsiveness." },
      { keyword: "easily hurt", matchTerms: ["easily hurt", "emotional", "vulnerable", "fragile", "tender", "thin-skinned", "affected", "upset"], label: "Easily hurt or upset", hint: "The definition says 'easily hurt or upset by others' -- emotional vulnerability." },
    ],
    synonyms: ["perceptive", "responsive", "emotional"],
  },
  {
    word: "channel",
    partOfSpeech: "verb",
    definition: "To direct something toward a particular purpose or course; to convey through a passage.",
    keyConcepts: [
      { keyword: "direct", matchTerms: ["direct", "guide", "steer", "route", "focus", "funnel", "lead", "aim", "deploy", "harness", "apply"], label: "Direct toward a purpose", hint: "The definition says 'direct something toward a particular purpose' -- sending energy or effort somewhere." },
      { keyword: "convey", matchTerms: ["convey", "carry", "transmit", "pass", "conduct", "pipe", "deliver", "transport", "move"], label: "Convey through a passage", hint: "The definition says 'convey through a passage' -- moving something along a path." },
    ],
    synonyms: ["direct", "guide", "route"],
  },
  {
    word: "active",
    partOfSpeech: "adjective",
    definition: "Moving about or doing many things; participating in an activity.",
    keyConcepts: [
      { keyword: "moving about", matchTerms: ["moving", "energetic", "busy", "lively", "dynamic", "engaged", "industrious", "working", "occupied"], label: "Moving about", hint: "The definition says 'moving about or doing many things' -- not passive or still." },
      { keyword: "participating", matchTerms: ["participating", "involved", "engaged", "contributing", "present", "operative", "functional"], label: "Participating in activity", hint: "The definition says 'participating in an activity' -- taking part." },
    ],
    synonyms: ["engaged", "energetic", "participating"],
  },
  {
    word: "appetite",
    partOfSpeech: "noun",
    definition: "A natural desire or craving for food or something else; a strong wish for something.",
    keyConcepts: [
      { keyword: "desire", matchTerms: ["desire", "craving", "hunger", "longing", "want", "wish", "urge", "need", "yearning", "thirst", "drive"], label: "Natural desire or craving", hint: "The definition says 'natural desire or craving' -- an instinctive pull toward something." },
    ],
    synonyms: ["craving", "desire", "hunger"],
  },
  {
    word: "strengthen",
    partOfSpeech: "verb",
    definition: "To make something more strong or durable; to improve or increase the effectiveness of.",
    keyConcepts: [
      { keyword: "make stronger", matchTerms: ["make stronger", "reinforce", "fortify", "toughen", "build up", "develop", "harden", "solidify", "improve"], label: "Make stronger", hint: "The definition says 'make something more strong or durable' -- increasing strength." },
      { keyword: "effectiveness", matchTerms: ["effectiveness", "power", "ability", "impact", "performance", "quality", "capacity", "force"], label: "Improve effectiveness", hint: "The definition says 'improve or increase the effectiveness of' -- making it work better." },
    ],
    synonyms: ["reinforce", "fortify", "boost"],
  },
  {
    word: "highlight",
    partOfSpeech: "verb",
    definition: "To draw attention to something or make it stand out; to mark or emphasize something important.",
    keyConcepts: [
      { keyword: "draw attention", matchTerms: ["draw attention", "emphasize", "stress", "point out", "mark", "indicate", "spotlight", "flag", "underline", "accentuate"], label: "Draw attention to", hint: "The definition says 'draw attention to something or make it stand out' -- making it noticeable." },
      { keyword: "important", matchTerms: ["important", "key", "significant", "notable", "main", "critical", "essential", "central", "priority"], label: "Something important", hint: "The definition says 'something important' -- worth drawing attention to." },
    ],
    synonyms: ["emphasize", "stress", "spotlight"],
  },
  {
    word: "invoke",
    partOfSpeech: "verb",
    definition: "To cite or call on something as authority; to call upon a deity or spirit.",
    keyConcepts: [
      { keyword: "cite", matchTerms: ["cite", "refer to", "appeal to", "call on", "use", "employ", "draw on", "mention", "evoke"], label: "Cite as authority", hint: "The definition says 'cite or call on something as authority' -- using it to back a claim." },
      { keyword: "call upon", matchTerms: ["call upon", "summon", "petition", "pray to", "request", "appeal to", "entreat"], label: "Call upon a deity", hint: "The definition says 'to call upon a deity or spirit' -- a spiritual or ceremonial calling." },
    ],
    synonyms: ["cite", "appeal to", "summon"],
  },
  {
    word: "genuine",
    partOfSpeech: "adjective",
    definition: "Truly what it is said to be; authentic and not artificial or pretended.",
    keyConcepts: [
      { keyword: "authentic", matchTerms: ["authentic", "real", "true", "original", "legitimate", "actual", "bona fide", "veritable", "pure"], label: "Truly authentic", hint: "The definition says 'truly what it is said to be' and 'authentic' -- the real thing." },
      { keyword: "sincere", matchTerms: ["sincere", "honest", "heartfelt", "earnest", "unfeigned", "natural", "true", "unpretending"], label: "Not pretended", hint: "The definition says 'not artificial or pretended' -- coming from a real place." },
    ],
    synonyms: ["authentic", "real", "sincere"],
  },
  {
    word: "adopt",
    partOfSpeech: "verb",
    definition: "To legally take another's child as one's own; to take up or start using something.",
    keyConcepts: [
      { keyword: "take as one's own", matchTerms: ["take as one's own", "accept", "take in", "welcome", "make one's own", "choose", "decide on"], label: "Take as one's own", hint: "The definition says 'legally take another's child as one's own' -- formal acceptance." },
      { keyword: "start using", matchTerms: ["start using", "take up", "embrace", "accept", "implement", "employ", "apply", "incorporate", "use"], label: "Take up or start using", hint: "The definition says 'take up or start using something' -- beginning to use or follow." },
    ],
    synonyms: ["take up", "embrace", "accept"],
  },
  {
    word: "trace",
    partOfSpeech: "verb",
    definition: "To follow a path or line; to find the origin or course of something.",
    keyConcepts: [
      { keyword: "follow a path", matchTerms: ["follow", "track", "map", "outline", "draw", "mark", "copy", "sketch", "go along"], label: "Follow a path or line", hint: "The definition says 'to follow a path or line' -- moving along it or depicting it." },
      { keyword: "find origin", matchTerms: ["find origin", "locate", "discover", "track down", "source", "detect", "determine", "identify"], label: "Find the origin", hint: "The definition says 'find the origin or course of something' -- tracing back to the start." },
    ],
    synonyms: ["follow", "track", "source"],
  },
  {
    word: "assign",
    partOfSpeech: "verb",
    definition: "To allocate a task or responsibility to someone; to designate or set aside for a purpose.",
    keyConcepts: [
      { keyword: "allocate", matchTerms: ["allocate", "give", "hand", "delegate", "entrust", "designate", "appoint", "charge", "commit", "task"], label: "Allocate a task", hint: "The definition says 'allocate a task or responsibility to someone' -- giving them something to do." },
      { keyword: "designate", matchTerms: ["designate", "set aside", "earmark", "reserve", "dedicate", "attribute", "name", "specify"], label: "Designate for purpose", hint: "The definition says 'designate or set aside for a purpose' -- directing something to a specific use." },
    ],
    synonyms: ["allocate", "delegate", "designate"],
  },
  {
    word: "manifest",
    partOfSpeech: "verb",
    definition: "To display or show clearly; to appear or become evident.",
    keyConcepts: [
      { keyword: "display", matchTerms: ["display", "show", "demonstrate", "exhibit", "reveal", "express", "present", "evidence", "make plain"], label: "Display or show clearly", hint: "The definition says 'display or show clearly' -- making something visible." },
      { keyword: "appear", matchTerms: ["appear", "emerge", "materialize", "become visible", "surface", "come out", "be seen", "arise"], label: "Appear or become evident", hint: "The definition says 'appear or become evident' -- coming into being." },
    ],
    synonyms: ["show", "reveal", "demonstrate"],
  },
  {
    word: "promote",
    partOfSpeech: "verb",
    definition: "To support or encourage something; to raise someone to a higher position.",
    keyConcepts: [
      { keyword: "support", matchTerms: ["support", "encourage", "advance", "advocate", "champion", "push", "publicize", "recommend", "back", "foster"], label: "Support or encourage", hint: "The definition says 'support or encourage something' -- helping it grow or succeed." },
      { keyword: "raise", matchTerms: ["raise", "elevate", "advance", "upgrade", "move up", "give higher position", "reward", "appoint"], label: "Raise to higher position", hint: "The definition says 'raise someone to a higher position' -- moving them up." },
    ],
    synonyms: ["advance", "support", "advocate"],
  },
  {
    word: "deduce",
    partOfSpeech: "verb",
    definition: "To reach a conclusion by reasoning from evidence or general principles.",
    keyConcepts: [
      { keyword: "reason", matchTerms: ["reason", "conclude", "infer", "work out", "figure out", "derive", "draw conclusion", "determine", "gather", "establish"], label: "Reach a conclusion by reasoning", hint: "The definition says 'reach a conclusion by reasoning' -- logical thinking." },
      { keyword: "evidence", matchTerms: ["evidence", "facts", "principles", "clues", "information", "data", "observation", "proof", "premise"], label: "From evidence or principles", hint: "The definition says 'from evidence or general principles' -- the basis for reasoning." },
    ],
    synonyms: ["infer", "conclude", "reason"],
  },
  {
    word: "precise",
    partOfSpeech: "adjective",
    definition: "Marked by exactness and accuracy; exact in every detail.",
    keyConcepts: [
      { keyword: "exact", matchTerms: ["exact", "accurate", "specific", "correct", "right", "detailed", "particular", "definite", "strict", "meticulous"], label: "Exact and accurate", hint: "The definition says 'marked by exactness and accuracy' -- no room for error." },
      { keyword: "detail", matchTerms: ["detail", "every aspect", "thoroughly", "carefully", "minute", "fine-grained", "careful", "particular"], label: "Exact in every detail", hint: "The definition says 'exact in every detail' -- full attention to specifics." },
    ],
    synonyms: ["exact", "accurate", "specific"],
  },
  {
    word: "accelerate",
    partOfSpeech: "verb",
    definition: "To increase in speed or rate; to cause something to happen sooner.",
    keyConcepts: [
      { keyword: "increase speed", matchTerms: ["increase speed", "speed up", "quicken", "hasten", "step up", "pick up pace", "boost", "intensify"], label: "Increase in speed", hint: "The definition says 'increase in speed or rate' -- going faster." },
      { keyword: "sooner", matchTerms: ["sooner", "earlier", "expedite", "advance", "bring forward", "rush", "hurry", "fast-track"], label: "Cause to happen sooner", hint: "The definition says 'cause something to happen sooner' -- shortening the time." },
    ],
    synonyms: ["speed up", "quicken", "hasten"],
  },
  {
    word: "accumulate",
    partOfSpeech: "verb",
    definition: "To gradually gather or amass a growing number or quantity of something.",
    keyConcepts: [
      { keyword: "gather", matchTerms: ["gather", "collect", "amass", "build up", "stockpile", "store", "acquire", "pile up", "grow", "increase"], label: "Gradually gather", hint: "The definition says 'gradually gather or amass' -- building up slowly." },
      { keyword: "quantity", matchTerms: ["quantity", "number", "amount", "store", "stock", "supply", "wealth", "mass", "pile"], label: "Growing quantity", hint: "The definition says 'a growing number or quantity' -- the result of accumulation." },
    ],
    synonyms: ["gather", "amass", "collect"],
  },
  {
    word: "acquire",
    partOfSpeech: "verb",
    definition: "To gain possession of something through effort or experience; to learn a skill.",
    keyConcepts: [
      { keyword: "gain", matchTerms: ["gain", "obtain", "get", "secure", "procure", "attain", "earn", "receive", "come by", "pick up", "accumulate"], label: "Gain possession", hint: "The definition says 'gain possession of something' -- coming to have it." },
      { keyword: "learn", matchTerms: ["learn", "develop", "build", "cultivate", "accumulate", "grow", "master", "pick up", "absorb"], label: "Learn or develop", hint: "The definition says 'to learn a skill' -- gaining through experience." },
    ],
    synonyms: ["obtain", "gain", "attain"],
  },
  {
    word: "activate",
    partOfSpeech: "verb",
    definition: "To make something operational or start working; to cause a process to begin.",
    keyConcepts: [
      { keyword: "operational", matchTerms: ["operational", "start", "turn on", "switch on", "trigger", "set off", "launch", "initiate", "enable"], label: "Make operational", hint: "The definition says 'make something operational or start working' -- bringing to life." },
      { keyword: "process", matchTerms: ["process", "system", "mechanism", "reaction", "chain", "response", "event", "function"], label: "Cause a process", hint: "The definition says 'to cause a process to begin' -- starting a sequence." },
    ],
    synonyms: ["start", "trigger", "initiate"],
  },
  {
    word: "address",
    partOfSpeech: "verb",
    definition: "To speak to someone formally; to deal with or focus attention on a problem.",
    keyConcepts: [
      { keyword: "speak to", matchTerms: ["speak to", "talk to", "direct", "greet", "communicate with", "approach", "contact", "write to"], label: "Speak to formally", hint: "The definition says 'to speak to someone formally' -- directed communication." },
      { keyword: "deal with", matchTerms: ["deal with", "tackle", "handle", "face", "confront", "attend to", "respond to", "focus on"], label: "Deal with a problem", hint: "The definition says 'deal with or focus attention on a problem' -- taking action on it." },
    ],
    synonyms: ["speak to", "tackle", "handle"],
  },
  {
    word: "alter",
    partOfSpeech: "verb",
    definition: "To change or cause to change in character or composition.",
    keyConcepts: [
      { keyword: "change", matchTerms: ["change", "modify", "adjust", "amend", "revise", "transform", "convert", "vary", "shift"], label: "Change character", hint: "The definition says 'to change or cause to change in character or composition' -- making it different." },
      { keyword: "composition", matchTerms: ["composition", "character", "nature", "form", "structure", "makeup", "substance", "content"], label: "Character or composition", hint: "The definition says 'in character or composition' -- what is being changed." },
    ],
    synonyms: ["change", "modify", "adjust"],
  },
  {
    word: "apply",
    partOfSpeech: "verb",
    definition: "To make use of something; to put one's talents or skills to use in a situation.",
    keyConcepts: [
      { keyword: "make use", matchTerms: ["make use", "use", "employ", "utilize", "exercise", "bring to bear", "implement", "practice"], label: "Make use of", hint: "The definition says 'make use of something' -- putting something into use." },
      { keyword: "skills", matchTerms: ["skills", "talents", "knowledge", "ability", "effort", "work", "put into practice", "bring to bear"], label: "Apply skills or effort", hint: "The definition says 'put one's talents or skills to use' -- active deployment." },
    ],
    synonyms: ["use", "employ", "utilize"],
  },
  {
    word: "argue",
    partOfSpeech: "verb",
    definition: "To give reasons or evidence in support of a position; to have a disagreement or quarrel.",
    keyConcepts: [
      { keyword: "reasons", matchTerms: ["reason", "evidence", "support", "logic", "case", "justify", "defend", "assert", "contend", "maintain", "claim", "make case"], label: "Give reasons or evidence", hint: "The definition says 'give reasons or evidence in support of a position' -- making a case." },
      { keyword: "disagree", matchTerms: ["disagree", "quarrel", "dispute", "debate", "fight", "contend", "clash", "challenge", "counter", "oppose", "bicker"], label: "Disagree or quarrel", hint: "The definition says 'have a disagreement or quarrel' -- opposing or challenging." },
    ],
    synonyms: ["debate", "dispute", "contend"],
  },
  {
    word: "arise",
    partOfSpeech: "verb",
    definition: "To come into existence or become apparent; to come up as an issue or situation.",
    keyConcepts: [
      { keyword: "come into existence", matchTerms: ["emerge", "appear", "surface", "develop", "occur", "come up", "materialize", "spring up", "originate", "start", "begin"], label: "Come into existence", hint: "The definition says 'come into existence or become apparent' -- something new appearing." },
      { keyword: "issue", matchTerms: ["issue", "topic", "question", "problem", "matter", "concern", "situation", "event", "circumstance", "complication"], label: "Come up as an issue", hint: "The definition says 'come up as an issue or situation' -- surfacing as something requiring attention." },
    ],
    synonyms: ["emerge", "occur", "surface"],
  },
  {
    word: "associate",
    partOfSpeech: "verb",
    definition: "To connect things in the mind; to join or work together.",
    keyConcepts: [
      { keyword: "connect in mind", matchTerms: ["connect", "link", "relate", "pair", "tie", "join", "combine", "correlate", "compare"], label: "Connect in the mind", hint: "The definition says 'to connect things in the mind' -- mental linking." },
      { keyword: "work together", matchTerms: ["work together", "partner", "collaborate", "affiliate", "align", "team up", "ally", "join"], label: "Join or work together", hint: "The definition says 'to join or work together' -- the cooperative dimension." },
    ],
    synonyms: ["connect", "link", "relate"],
  },
  {
    word: "attract",
    partOfSpeech: "verb",
    definition: "To cause to come toward; to appeal to or interest someone.",
    keyConcepts: [
      { keyword: "cause to come", matchTerms: ["cause to come", "draw", "pull", "bring in", "lure", "entice", "invite", "engage", "tempt"], label: "Cause to come toward", hint: "The definition says 'to cause to come toward' -- drawing something in." },
      { keyword: "appeal", matchTerms: ["appeal", "interest", "fascinate", "captivate", "charm", "please", "entice", "engage", "attract"], label: "Appeal to someone", hint: "The definition says 'to appeal to or interest someone' -- creating positive pull." },
    ],
    synonyms: ["draw", "appeal", "entice"],
  },
  {
    word: "avoid",
    partOfSpeech: "verb",
    definition: "To keep away from something; to prevent something from happening.",
    keyConcepts: [
      { keyword: "keep away", matchTerms: ["keep away", "steer clear", "evade", "dodge", "sidestep", "shun", "escape", "bypass", "refrain"], label: "Keep away from", hint: "The definition says 'to keep away from something' -- not going near it." },
      { keyword: "prevent", matchTerms: ["prevent", "stop", "preclude", "avert", "forestall", "circumvent", "head off"], label: "Prevent from happening", hint: "The definition says 'to prevent something from happening' -- stopping it before it occurs." },
    ],
    synonyms: ["evade", "steer clear", "prevent"],
  },
  {
    word: "become",
    partOfSpeech: "verb",
    definition: "To begin to be something; to grow to be or develop into.",
    keyConcepts: [
      { keyword: "begin to be", matchTerms: ["begin to be", "turn into", "change into", "grow into", "evolve into", "develop into", "transform"], label: "Begin to be something", hint: "The definition says 'to begin to be something' -- the start of a state." },
      { keyword: "develop into", matchTerms: ["develop into", "grow", "mature", "progress", "advance", "emerge", "transform", "morph"], label: "Grow to be", hint: "The definition says 'to grow to be or develop into' -- the process of becoming." },
    ],
    synonyms: ["turn into", "develop into", "grow"],
  },
  {
    word: "block",
    partOfSpeech: "verb",
    definition: "To obstruct or prevent movement, progress, or access.",
    keyConcepts: [
      { keyword: "obstruct", matchTerms: ["obstruct", "stop", "prevent", "hinder", "impede", "bar", "prohibit", "restrict", "thwart", "frustrate"], label: "Obstruct or prevent", hint: "The definition says 'obstruct or prevent movement, progress, or access' -- putting up a barrier." },
      { keyword: "movement", matchTerms: ["movement", "progress", "access", "passage", "flow", "advance", "activity", "action"], label: "Prevent movement or progress", hint: "The definition says 'movement, progress, or access' -- what is being blocked." },
    ],
    synonyms: ["obstruct", "prevent", "impede"],
  },
  {
    word: "characterize",
    partOfSpeech: "verb",
    definition: "To describe the typical or distinctive qualities of something; to be typical or representative of.",
    keyConcepts: [
      { keyword: "describe", matchTerms: ["describe", "portray", "depict", "define", "label", "identify", "represent", "distinguish", "mark", "typify", "capture"], label: "Describe distinctive qualities", hint: "The definition says 'describe the typical or distinctive qualities' -- capturing what makes something unique." },
      { keyword: "typical", matchTerms: ["typical", "characteristic", "distinctive", "defining", "representative", "feature", "quality", "trait", "nature", "essence"], label: "Be typical of", hint: "The definition says 'be typical or representative of' -- naturally defining something." },
    ],
    synonyms: ["describe", "define", "typify"],
  },
  {
    word: "circulate",
    partOfSpeech: "verb",
    definition: "To move continuously around a closed system; to spread or pass something widely among people.",
    keyConcepts: [
      { keyword: "move around", matchTerms: ["move", "flow", "rotate", "cycle", "travel", "go around", "loop", "pass through", "pump", "course"], label: "Move continuously around", hint: "The definition says 'move continuously around a closed system' -- ongoing circulation." },
      { keyword: "spread", matchTerms: ["spread", "distribute", "share", "disseminate", "pass on", "broadcast", "publicize", "send", "circulate", "propagate"], label: "Spread widely", hint: "The definition says 'spread or pass something widely among people' -- reaching many." },
    ],
    synonyms: ["spread", "distribute", "flow"],
  },
  {
    word: "claim",
    partOfSpeech: "verb",
    definition: "To state something as true without proof; to assert a right or ownership of something.",
    keyConcepts: [
      { keyword: "state as true", matchTerms: ["state", "assert", "maintain", "declare", "argue", "insist", "allege", "contend", "say", "profess", "announce"], label: "State as true", hint: "The definition says 'state something as true without proof' -- making an assertion." },
      { keyword: "right", matchTerms: ["right", "ownership", "title", "entitlement", "possession", "demand", "stake", "authority", "access", "assert"], label: "Assert a right", hint: "The definition says 'assert a right or ownership' -- claiming entitlement." },
    ],
    synonyms: ["assert", "maintain", "declare"],
  },
  {
    word: "combine",
    partOfSpeech: "verb",
    definition: "To bring or join things together into a single whole; to unite for a common purpose.",
    keyConcepts: [
      { keyword: "join together", matchTerms: ["join", "merge", "blend", "fuse", "mix", "unite", "integrate", "link", "connect", "consolidate"], label: "Bring together", hint: "The definition says 'bring or join things together into a single whole' -- creating unity." },
      { keyword: "purpose", matchTerms: ["purpose", "goal", "aim", "objective", "effort", "task", "cause", "mission"], label: "For a common purpose", hint: "The definition says 'unite for a common purpose' -- shared motivation." },
    ],
    synonyms: ["merge", "unite", "blend"],
  },
  {
    word: "commit",
    partOfSpeech: "verb",
    definition: "To carry out or perpetrate something; to pledge oneself to a course of action.",
    keyConcepts: [
      { keyword: "carry out", matchTerms: ["carry out", "perform", "do", "execute", "perpetrate", "undertake", "complete", "follow through"], label: "Carry out something", hint: "The definition says 'carry out or perpetrate something' -- doing it definitively." },
      { keyword: "pledge", matchTerms: ["pledge", "promise", "dedicate", "bind", "devote", "vow", "obligate", "resolve", "engage"], label: "Pledge to a course", hint: "The definition says 'pledge oneself to a course of action' -- binding oneself to it." },
    ],
    synonyms: ["pledge", "dedicate", "undertake"],
  },
  {
    word: "communicate",
    partOfSpeech: "verb",
    definition: "To share or exchange information, feelings, or ideas with others.",
    keyConcepts: [
      { keyword: "share", matchTerms: ["share", "exchange", "convey", "transmit", "pass on", "relay", "transfer", "express", "deliver", "impart"], label: "Share information", hint: "The definition says 'share or exchange information' -- moving something between people." },
      { keyword: "information", matchTerms: ["information", "feelings", "ideas", "message", "meaning", "thoughts", "knowledge", "news", "content"], label: "Information or ideas", hint: "The definition says 'information, feelings, or ideas' -- the substance of what is communicated." },
    ],
    synonyms: ["convey", "express", "transmit"],
  },
  {
    word: "compare",
    partOfSpeech: "verb",
    definition: "To note similarities and differences between things; to be similar or equal to.",
    keyConcepts: [
      { keyword: "note similarities", matchTerms: ["note similarities", "contrast", "evaluate", "assess", "measure", "weigh", "consider", "relate"], label: "Note similarities and differences", hint: "The definition says 'note similarities and differences between things' -- side-by-side analysis." },
      { keyword: "similar or equal", matchTerms: ["similar", "equal", "comparable", "match", "measure up", "correspond", "parallel", "rival"], label: "Be similar or equal", hint: "The definition says 'to be similar or equal to' -- the second sense of compare." },
    ],
    synonyms: ["contrast", "evaluate", "measure"],
  },
  {
    word: "compete",
    partOfSpeech: "verb",
    definition: "To try to be more successful than others in the same pursuit; to take part in a contest.",
    keyConcepts: [
      { keyword: "try to win", matchTerms: ["try to win", "strive", "contend", "rival", "challenge", "vie", "struggle", "fight", "battle", "race"], label: "Try to be more successful", hint: "The definition says 'try to be more successful than others' -- striving against rivals." },
      { keyword: "contest", matchTerms: ["contest", "competition", "race", "game", "match", "tournament", "challenge", "event", "pursuit"], label: "Take part in a contest", hint: "The definition says 'take part in a contest' -- formal competition." },
    ],
    synonyms: ["contend", "rival", "vie"],
  },
  {
    word: "complete",
    partOfSpeech: "adjective",
    definition: "Having all necessary parts; finished and whole.",
    keyConcepts: [
      { keyword: "all necessary parts", matchTerms: ["all necessary parts", "whole", "full", "entire", "comprehensive", "thorough", "total", "intact"], label: "All necessary parts", hint: "The definition says 'having all necessary parts' -- nothing missing." },
      { keyword: "finished", matchTerms: ["finished", "done", "concluded", "accomplished", "achieved", "through", "closed", "settled"], label: "Finished and whole", hint: "The definition says 'finished and whole' -- both senses combined." },
    ],
    synonyms: ["whole", "finished", "total"],
  },
  {
    word: "comply",
    partOfSpeech: "verb",
    definition: "To act in accordance with a rule or request; to behave in an obedient way.",
    keyConcepts: [
      { keyword: "act in accordance", matchTerms: ["act in accordance", "follow", "obey", "adhere", "conform", "abide by", "observe", "respect", "meet"], label: "Act in accordance", hint: "The definition says 'act in accordance with a rule or request' -- following what is required." },
      { keyword: "obedient", matchTerms: ["obedient", "submissive", "willing", "cooperative", "compliant", "responsive", "accommodating"], label: "Behave obediently", hint: "The definition says 'behave in an obedient way' -- doing what is asked." },
    ],
    synonyms: ["follow", "obey", "adhere"],
  },
  {
    word: "concentrate",
    partOfSpeech: "verb",
    definition: "To focus attention or mental effort; to gather in one place.",
    keyConcepts: [
      { keyword: "focus", matchTerms: ["focus", "direct attention", "pay attention", "apply", "fix", "devote", "center", "zero in", "think hard"], label: "Focus attention", hint: "The definition says 'focus attention or mental effort' -- directing the mind." },
      { keyword: "gather", matchTerms: ["gather", "collect", "bring together", "assemble", "condense", "consolidate", "converge", "pool"], label: "Gather in one place", hint: "The definition says 'gather in one place' -- physical or conceptual consolidation." },
    ],
    synonyms: ["focus", "center", "gather"],
  },
  {
    word: "conduct",
    partOfSpeech: "verb",
    definition: "To organize and carry out an activity; to behave in a particular way.",
    keyConcepts: [
      { keyword: "organize", matchTerms: ["organize", "carry out", "manage", "run", "lead", "direct", "administer", "oversee", "control", "execute"], label: "Organize and carry out", hint: "The definition says 'organize and carry out an activity' -- making it happen." },
      { keyword: "behave", matchTerms: ["behave", "act", "operate", "perform", "function", "manage oneself", "comport", "carry oneself"], label: "Behave in a way", hint: "The definition says 'to behave in a particular way' -- the manner of operating." },
    ],
    synonyms: ["manage", "run", "behave"],
  },
  {
    word: "confine",
    partOfSpeech: "verb",
    definition: "To keep within certain limits; to prevent someone from leaving a space.",
    keyConcepts: [
      { keyword: "limit", matchTerms: ["limit", "restrict", "contain", "bound", "constrain", "curb", "fence", "enclose", "keep within", "cap"], label: "Keep within limits", hint: "The definition says 'keep within certain limits' -- setting boundaries." },
      { keyword: "prevent leaving", matchTerms: ["prevent leaving", "imprison", "lock up", "detain", "trap", "shut in", "enclose", "hold"], label: "Prevent leaving", hint: "The definition says 'prevent someone from leaving a space' -- physical containment." },
    ],
    synonyms: ["restrict", "limit", "contain"],
  },
  {
    word: "conserve",
    partOfSpeech: "verb",
    definition: "To protect something from harm or destruction; to use something carefully to avoid waste.",
    keyConcepts: [
      { keyword: "protect", matchTerms: ["protect", "preserve", "safeguard", "maintain", "sustain", "keep", "save", "look after", "guard"], label: "Protect from harm", hint: "The definition says 'protect something from harm or destruction' -- keeping it safe." },
      { keyword: "avoid waste", matchTerms: ["avoid waste", "use carefully", "economize", "reduce consumption", "ration", "spare", "limit", "save"], label: "Avoid waste", hint: "The definition says 'use something carefully to avoid waste' -- responsible use." },
    ],
    synonyms: ["preserve", "protect", "save"],
  },
  {
    word: "consider",
    partOfSpeech: "verb",
    definition: "To think carefully about something; to take something into account.",
    keyConcepts: [
      { keyword: "think carefully", matchTerms: ["think carefully", "reflect on", "ponder", "deliberate", "weigh", "examine", "assess", "review"], label: "Think carefully about", hint: "The definition says 'to think carefully about something' -- serious mental attention." },
      { keyword: "take into account", matchTerms: ["take into account", "factor in", "include", "acknowledge", "heed", "respect", "allow for"], label: "Take into account", hint: "The definition says 'take something into account' -- including it in the reckoning." },
    ],
    synonyms: ["reflect", "weigh", "deliberate"],
  },
  {
    word: "consolidate",
    partOfSpeech: "verb",
    definition: "To make something stronger or more solid; to combine a number of things into a single unit.",
    keyConcepts: [
      { keyword: "make stronger", matchTerms: ["make stronger", "solidify", "reinforce", "stabilize", "strengthen", "secure", "cement", "firm up"], label: "Make stronger or solid", hint: "The definition says 'make something stronger or more solid' -- giving it more solidity." },
      { keyword: "combine", matchTerms: ["combine", "merge", "unify", "integrate", "join", "fuse", "bring together", "amalgamate"], label: "Combine into a unit", hint: "The definition says 'combine a number of things into a single unit' -- creating oneness." },
    ],
    synonyms: ["strengthen", "combine", "unite"],
  },
  {
    word: "contain",
    partOfSpeech: "verb",
    definition: "To keep something within limits; to have something as a component.",
    keyConcepts: [
      { keyword: "keep within limits", matchTerms: ["keep within limits", "hold", "control", "restrict", "limit", "confine", "restrain", "suppress"], label: "Keep within limits", hint: "The definition says 'keep something within limits' -- preventing overflow or escalation." },
      { keyword: "have as component", matchTerms: ["have", "include", "hold", "encompass", "involve", "incorporate", "carry", "comprise"], label: "Have as a component", hint: "The definition says 'to have something as a component' -- what is inside it." },
    ],
    synonyms: ["hold", "include", "limit"],
  },
  {
    word: "contrast",
    partOfSpeech: "noun",
    definition: "The state of being noticeably different when near or compared to something else.",
    keyConcepts: [
      { keyword: "noticeably different", matchTerms: ["noticeably different", "difference", "distinction", "divergence", "opposition", "unlike", "contrary"], label: "Noticeably different", hint: "The definition says 'noticeably different when near or compared to something' -- clear difference." },
      { keyword: "comparison", matchTerms: ["comparison", "comparison", "juxtaposition", "side-by-side", "relation", "proximity", "context"], label: "When compared", hint: "The definition says 'when near or compared to something else' -- difference revealed by proximity." },
    ],
    synonyms: ["difference", "distinction", "juxtaposition"],
  },
  {
    word: "control",
    partOfSpeech: "verb",
    definition: "To have power over something; to regulate or manage.",
    keyConcepts: [
      { keyword: "have power over", matchTerms: ["have power over", "command", "direct", "manage", "govern", "run", "oversee", "dominate", "rule"], label: "Have power over", hint: "The definition says 'to have power over something' -- being in charge." },
      { keyword: "regulate", matchTerms: ["regulate", "manage", "supervise", "constrain", "limit", "handle", "administer", "check", "restrain"], label: "Regulate or manage", hint: "The definition says 'to regulate or manage' -- keeping it in order." },
    ],
    synonyms: ["manage", "regulate", "command"],
  },
  {
    word: "convert",
    partOfSpeech: "verb",
    definition: "To change in form, character, or function; to cause someone to change their beliefs.",
    keyConcepts: [
      { keyword: "change form", matchTerms: ["change", "transform", "alter", "switch", "turn", "shift", "modify", "adapt", "transpose", "remake"], label: "Change in form or function", hint: "The definition says 'change in form, character, or function' -- becoming something different." },
      { keyword: "beliefs", matchTerms: ["beliefs", "faith", "religion", "views", "opinion", "mind", "convictions", "thinking", "position"], label: "Change someone's beliefs", hint: "The definition says 'cause someone to change their beliefs' -- persuading a change of faith or view." },
    ],
    synonyms: ["transform", "change", "switch"],
  },
  {
    word: "counter",
    partOfSpeech: "verb",
    definition: "To speak or act in opposition to something; to respond to an attack with a defense.",
    keyConcepts: [
      { keyword: "oppose", matchTerms: ["oppose", "challenge", "contradict", "refute", "rebut", "dispute", "respond", "answer", "push back"], label: "Oppose or challenge", hint: "The definition says 'speak or act in opposition to something' -- pushing back." },
      { keyword: "defend", matchTerms: ["defend", "respond", "reply", "neutralize", "block", "offset", "balance", "compensate", "mitigate"], label: "Respond with a defense", hint: "The definition says 'respond to an attack with a defense' -- countering the attack." },
    ],
    synonyms: ["oppose", "respond", "refute"],
  },
  {
    word: "declare",
    partOfSpeech: "verb",
    definition: "To announce something clearly and officially; to formally state a fact.",
    keyConcepts: [
      { keyword: "announce", matchTerms: ["announce", "proclaim", "state", "affirm", "assert", "make known", "broadcast", "pronounce", "publish"], label: "Announce clearly", hint: "The definition says 'announce something clearly and officially' -- making it public." },
      { keyword: "formally", matchTerms: ["formally", "officially", "legally", "solemnly", "definitively", "publicly", "on record"], label: "Formally state", hint: "The definition says 'to formally state a fact' -- in an official capacity." },
    ],
    synonyms: ["announce", "proclaim", "state"],
  },
  {
    word: "decline",
    partOfSpeech: "verb",
    definition: "To become smaller, fewer, or less; to politely refuse an offer or invitation.",
    keyConcepts: [
      { keyword: "become less", matchTerms: ["become less", "decrease", "fall", "drop", "reduce", "diminish", "deteriorate", "dwindle", "shrink", "wane"], label: "Become smaller or less", hint: "The definition says 'become smaller, fewer, or less' -- going downward." },
      { keyword: "refuse", matchTerms: ["refuse", "turn down", "reject", "say no", "deny", "rebuff", "pass on", "politely decline", "not accept"], label: "Politely refuse", hint: "The definition says 'politely refuse an offer or invitation' -- saying no graciously." },
    ],
    synonyms: ["decrease", "refuse", "diminish"],
  },
  {
    word: "decrease",
    partOfSpeech: "verb",
    definition: "To become or make smaller or fewer in size or number.",
    keyConcepts: [
      { keyword: "smaller", matchTerms: ["smaller", "fewer", "less", "reduced", "lower", "diminished", "cut", "shrink", "decline", "drop"], label: "Become smaller", hint: "The definition says 'become or make smaller or fewer in size or number' -- reduction." },
      { keyword: "in number", matchTerms: ["in number", "quantity", "amount", "level", "rate", "degree", "extent", "measure", "count"], label: "In size or number", hint: "The definition says 'in size or number' -- what is decreasing." },
    ],
    synonyms: ["reduce", "diminish", "shrink"],
  },
  {
    word: "delegate",
    partOfSpeech: "verb",
    definition: "To entrust a task or responsibility to another person; to appoint someone as a representative.",
    keyConcepts: [
      { keyword: "entrust", matchTerms: ["entrust", "assign", "hand over", "pass on", "give", "transfer", "commit", "allocate", "devolve"], label: "Entrust a task", hint: "The definition says 'entrust a task or responsibility to another person' -- giving it to someone else." },
      { keyword: "representative", matchTerms: ["representative", "deputy", "agent", "envoy", "spokesperson", "proxy", "stand-in", "assigned"], label: "Appoint as representative", hint: "The definition says 'appoint someone as a representative' -- formal authorization." },
    ],
    synonyms: ["assign", "entrust", "appoint"],
  },
  {
    word: "deliver",
    partOfSpeech: "verb",
    definition: "To bring and hand over something; to achieve a required result.",
    keyConcepts: [
      { keyword: "bring and hand over", matchTerms: ["bring", "hand over", "give", "supply", "present", "pass", "convey", "transfer", "provide"], label: "Bring and hand over", hint: "The definition says 'bring and hand over something' -- completing a transfer." },
      { keyword: "achieve result", matchTerms: ["achieve result", "produce", "fulfill", "accomplish", "meet", "come through", "carry out", "execute"], label: "Achieve a result", hint: "The definition says 'to achieve a required result' -- following through on a promise." },
    ],
    synonyms: ["bring", "achieve", "fulfill"],
  },
  {
    word: "describe",
    partOfSpeech: "verb",
    definition: "To give a detailed account of something in words; to portray in words.",
    keyConcepts: [
      { keyword: "account", matchTerms: ["account", "explain", "depict", "portray", "relate", "narrate", "report", "characterize", "outline", "sketch"], label: "Give a detailed account", hint: "The definition says 'give a detailed account of something' -- putting it into words." },
      { keyword: "words", matchTerms: ["words", "language", "speech", "writing", "verbal", "oral", "expression", "prose", "description"], label: "In words", hint: "The definition says 'in words' -- the medium of description." },
    ],
    synonyms: ["depict", "portray", "explain"],
  },
  {
    word: "design",
    partOfSpeech: "noun",
    definition: "A plan or drawing for making something; the purposeful arrangement of parts.",
    keyConcepts: [
      { keyword: "plan or drawing", matchTerms: ["plan", "drawing", "blueprint", "sketch", "layout", "draft", "scheme", "diagram", "outline"], label: "Plan or drawing", hint: "The definition says 'a plan or drawing for making something' -- a guide for creation." },
      { keyword: "purposeful arrangement", matchTerms: ["purposeful", "arrangement", "organization", "structure", "composition", "form", "pattern"], label: "Purposeful arrangement", hint: "The definition says 'the purposeful arrangement of parts' -- thoughtful composition." },
    ],
    synonyms: ["plan", "blueprint", "layout"],
  },
  {
    word: "disagree",
    partOfSpeech: "verb",
    definition: "To have a different opinion; to fail to agree with someone.",
    keyConcepts: [
      { keyword: "different opinion", matchTerms: ["different opinion", "oppose", "dispute", "contest", "counter", "object", "challenge", "differ"], label: "Have a different opinion", hint: "The definition says 'to have a different opinion' -- seeing it differently." },
      { keyword: "fail to agree", matchTerms: ["fail to agree", "conflict", "clash", "diverge", "contradict", "dissent", "resist", "refute"], label: "Fail to agree", hint: "The definition says 'to fail to agree with someone' -- the breakdown of consensus." },
    ],
    synonyms: ["differ", "oppose", "dispute"],
  },
  {
    word: "discard",
    partOfSpeech: "verb",
    definition: "To throw something away or get rid of it because it is no longer useful.",
    keyConcepts: [
      { keyword: "throw away", matchTerms: ["throw away", "get rid of", "dispose", "dump", "jettison", "abandon", "reject", "toss", "scrap", "drop"], label: "Throw away", hint: "The definition says 'throw something away or get rid of it' -- getting rid of something." },
      { keyword: "no longer useful", matchTerms: ["no longer useful", "useless", "unwanted", "unnecessary", "redundant", "obsolete", "outdated", "spent"], label: "No longer useful", hint: "The definition says 'because it is no longer useful' -- the reason for discarding." },
    ],
    synonyms: ["discard", "dump", "abandon"],
  },
  {
    word: "discover",
    partOfSpeech: "verb",
    definition: "To find or learn something for the first time; to become aware of something.",
    keyConcepts: [
      { keyword: "find", matchTerms: ["find", "uncover", "locate", "come across", "detect", "encounter", "stumble upon", "reveal", "turn up"], label: "Find for the first time", hint: "The definition says 'find or learn something for the first time' -- a new finding." },
      { keyword: "learn", matchTerms: ["learn", "realize", "find out", "understand", "become aware", "recognize", "comprehend", "grasp"], label: "Become aware of", hint: "The definition says 'become aware of something' -- recognizing something new." },
    ],
    synonyms: ["find", "uncover", "realize"],
  },
  {
    word: "discuss",
    partOfSpeech: "verb",
    definition: "To talk about a subject in detail; to consider a topic by talking or writing about it.",
    keyConcepts: [
      { keyword: "talk in detail", matchTerms: ["talk in detail", "converse", "deliberate", "debate", "explore", "exchange views", "go over", "review"], label: "Talk about in detail", hint: "The definition says 'talk about a subject in detail' -- thorough conversation." },
      { keyword: "consider", matchTerms: ["consider", "examine", "analyze", "assess", "look at", "address", "deal with", "treat", "take up"], label: "Consider a topic", hint: "The definition says 'consider a topic by talking or writing about it' -- active engagement." },
    ],
    synonyms: ["talk about", "debate", "explore"],
  },
  {
    word: "dismiss",
    partOfSpeech: "verb",
    definition: "To send away or allow to leave; to treat something as unworthy of serious consideration.",
    keyConcepts: [
      { keyword: "send away", matchTerms: ["send away", "discharge", "release", "let go", "remove", "disperse", "excuse"], label: "Send away or release", hint: "The definition says 'to send away or allow to leave' -- ending someone's presence." },
      { keyword: "unworthy", matchTerms: ["unworthy", "reject", "disregard", "wave aside", "brush off", "overlook", "minimize", "trivialize"], label: "Treat as unworthy", hint: "The definition says 'treat something as unworthy of serious consideration' -- not taking it seriously." },
    ],
    synonyms: ["reject", "disregard", "wave aside"],
  },
  {
    word: "display",
    partOfSpeech: "verb",
    definition: "To put something in a visible position; to show a quality or feeling.",
    keyConcepts: [
      { keyword: "put in view", matchTerms: ["put in view", "show", "exhibit", "present", "expose", "reveal", "demonstrate", "set out", "put on show"], label: "Put in a visible position", hint: "The definition says 'put something in a visible position' -- making it seen." },
      { keyword: "show quality", matchTerms: ["show", "manifest", "reveal", "express", "project", "exhibit", "demonstrate", "betray", "convey"], label: "Show a quality", hint: "The definition says 'show a quality or feeling' -- making an inner state visible." },
    ],
    synonyms: ["show", "exhibit", "present"],
  },
  {
    word: "dispose",
    partOfSpeech: "verb",
    definition: "To get rid of something; to arrange or place things in a particular order.",
    keyConcepts: [
      { keyword: "get rid of", matchTerms: ["get rid of", "discard", "throw away", "eliminate", "remove", "clear out", "destroy", "dump"], label: "Get rid of", hint: "The definition says 'to get rid of something' -- removing it from use or existence." },
      { keyword: "arrange", matchTerms: ["arrange", "place", "position", "order", "lay out", "set", "organize", "distribute"], label: "Arrange in order", hint: "The definition says 'arrange or place things in a particular order' -- deliberate placement." },
    ],
    synonyms: ["discard", "get rid of", "arrange"],
  },
  {
    word: "distinguish",
    partOfSpeech: "verb",
    definition: "To recognize or note the difference between things; to make oneself stand out.",
    keyConcepts: [
      { keyword: "recognize difference", matchTerms: ["recognize difference", "differentiate", "tell apart", "discriminate", "separate", "identify", "classify"], label: "Recognize the difference", hint: "The definition says 'recognize or note the difference between things' -- seeing distinctions." },
      { keyword: "stand out", matchTerms: ["stand out", "set apart", "mark", "characterize", "make notable", "single out", "define", "elevate"], label: "Make oneself stand out", hint: "The definition says 'to make oneself stand out' -- becoming notable or unique." },
    ],
    synonyms: ["differentiate", "discern", "stand out"],
  },
  {
    word: "divide",
    partOfSpeech: "verb",
    definition: "To separate into parts; to cause disagreement between people.",
    keyConcepts: [
      { keyword: "separate", matchTerms: ["separate", "split", "partition", "section", "share", "distribute", "segment", "cut", "break up"], label: "Separate into parts", hint: "The definition says 'separate into parts' -- breaking into pieces." },
      { keyword: "disagreement", matchTerms: ["disagreement", "conflict", "split", "alienate", "estrange", "drive apart", "cause friction", "polarize"], label: "Cause disagreement", hint: "The definition says 'cause disagreement between people' -- creating a rift." },
    ],
    synonyms: ["split", "separate", "partition"],
  },
  {
    word: "document",
    partOfSpeech: "verb",
    definition: "To record something in written or other permanent form; to provide evidence for.",
    keyConcepts: [
      { keyword: "record", matchTerms: ["record", "write down", "note", "register", "log", "file", "capture", "preserve", "report", "keep"], label: "Record in permanent form", hint: "The definition says 'record something in written or other permanent form' -- creating a lasting record." },
      { keyword: "evidence", matchTerms: ["evidence", "proof", "substantiate", "support", "back up", "verify", "cite", "authenticate", "confirm"], label: "Provide evidence for", hint: "The definition says 'provide evidence for' -- supplying proof." },
    ],
    synonyms: ["record", "note", "register"],
  },
  {
    word: "dominate",
    partOfSpeech: "verb",
    definition: "To have a commanding influence over; to be the most important feature of.",
    keyConcepts: [
      { keyword: "commanding influence", matchTerms: ["commanding influence", "control", "rule", "govern", "lead", "overshadow", "prevail", "be in charge"], label: "Commanding influence", hint: "The definition says 'have a commanding influence over' -- being in power." },
      { keyword: "most important", matchTerms: ["most important", "foreground", "stand out", "predominate", "tower over", "feature", "define"], label: "Most important feature", hint: "The definition says 'be the most important feature of' -- what draws the eye or attention." },
    ],
    synonyms: ["control", "rule", "prevail"],
  },
  {
    word: "drive",
    partOfSpeech: "noun",
    definition: "A strong motivation to achieve something; a journey in a vehicle.",
    keyConcepts: [
      { keyword: "motivation", matchTerms: ["motivation", "ambition", "determination", "energy", "force", "push", "desire", "initiative", "spirit"], label: "Strong motivation", hint: "The definition says 'a strong motivation to achieve something' -- inner fuel." },
      { keyword: "journey", matchTerms: ["journey", "trip", "ride", "outing", "travel", "excursion", "run"], label: "A journey in a vehicle", hint: "The definition says 'a journey in a vehicle' -- literal driving." },
    ],
    synonyms: ["motivation", "ambition", "trip"],
  },
  {
    word: "earn",
    partOfSpeech: "verb",
    definition: "To obtain something in return for effort or merit; to deserve to receive.",
    keyConcepts: [
      { keyword: "obtain through effort", matchTerms: ["obtain", "get", "receive", "gain", "make", "achieve", "win", "secure", "acquire", "come by"], label: "Obtain in return for effort", hint: "The definition says 'obtain something in return for effort or merit' -- merited reward." },
      { keyword: "deserve", matchTerms: ["deserve", "merit", "warrant", "be entitled to", "justify", "be worthy of", "be owed"], label: "Deserve to receive", hint: "The definition says 'to deserve to receive' -- the earning is justified." },
    ],
    synonyms: ["merit", "obtain", "deserve"],
  },
  {
    word: "empower",
    partOfSpeech: "verb",
    definition: "To give someone the authority, confidence, or means to do something; to make more capable.",
    keyConcepts: [
      { keyword: "give authority", matchTerms: ["give", "grant", "allow", "enable", "permit", "authorize", "entrust", "delegate", "equip", "provide means"], label: "Give authority or means", hint: "The definition says 'give someone the authority or means to do something' -- enabling." },
      { keyword: "confidence", matchTerms: ["confidence", "capability", "strength", "ability", "autonomy", "self-reliance", "capacity", "voice"], label: "Make more capable", hint: "The definition says 'make more capable' and 'confidence' -- strengthening someone." },
    ],
    synonyms: ["enable", "authorize", "equip"],
  },
  {
    word: "evaluate",
    partOfSpeech: "verb",
    definition: "To form an idea of the value or quality of something; to assess.",
    keyConcepts: [
      { keyword: "form an idea", matchTerms: ["form an idea", "assess", "judge", "appraise", "measure", "determine", "estimate", "rate", "review"], label: "Form an idea of value", hint: "The definition says 'to form an idea of the value or quality of something' -- making a judgment." },
      { keyword: "quality", matchTerms: ["quality", "value", "worth", "merit", "standard", "performance", "condition", "effectiveness"], label: "Of value or quality", hint: "The definition says 'of the value or quality of something' -- what is being assessed." },
    ],
    synonyms: ["assess", "appraise", "judge"],
  },
  {
    word: "examine",
    partOfSpeech: "verb",
    definition: "To inspect something carefully to assess its condition; to test knowledge formally.",
    keyConcepts: [
      { keyword: "inspect", matchTerms: ["inspect", "look at", "study", "scrutinize", "check", "assess", "review", "investigate", "analyze", "explore"], label: "Inspect carefully", hint: "The definition says 'inspect something carefully to assess its condition' -- close attention." },
      { keyword: "test", matchTerms: ["test", "quiz", "question", "assess", "evaluate", "probe", "interrogate", "interview"], label: "Test knowledge formally", hint: "The definition says 'test knowledge formally' -- formal assessment." },
    ],
    synonyms: ["inspect", "scrutinize", "test"],
  },
  {
    word: "exhibit",
    partOfSpeech: "verb",
    definition: "To display something for others to see; to show a quality or emotion.",
    keyConcepts: [
      { keyword: "display", matchTerms: ["display", "show", "present", "put on show", "demonstrate", "feature", "put forth", "reveal", "unveil"], label: "Display for others", hint: "The definition says 'display something for others to see' -- public showing." },
      { keyword: "show quality", matchTerms: ["show quality", "demonstrate", "manifest", "express", "reveal", "evidence", "portray", "convey"], label: "Show a quality", hint: "The definition says 'to show a quality or emotion' -- manifesting something internal." },
    ],
    synonyms: ["display", "show", "demonstrate"],
  },
  {
    word: "exist",
    partOfSpeech: "verb",
    definition: "To have reality or being; to be found in a place or under certain conditions.",
    keyConcepts: [
      { keyword: "have reality", matchTerms: ["have reality", "be real", "occur", "be present", "be found", "occur", "subsist", "live", "abide"], label: "Have reality or being", hint: "The definition says 'to have reality or being' -- actually being there." },
      { keyword: "under conditions", matchTerms: ["under conditions", "in a place", "in a way", "in some form", "persist", "survive", "continue"], label: "Found under conditions", hint: "The definition says 'be found in a place or under certain conditions' -- contextual existence." },
    ],
    synonyms: ["be", "occur", "live"],
  },
  {
    word: "explain",
    partOfSpeech: "verb",
    definition: "To make something clear by describing it in more detail; to give a reason for.",
    keyConcepts: [
      { keyword: "make clear", matchTerms: ["make clear", "clarify", "describe", "illustrate", "simplify", "detail", "define", "spell out"], label: "Make something clear", hint: "The definition says 'to make something clear by describing it in more detail' -- aiding understanding." },
      { keyword: "give a reason", matchTerms: ["give a reason", "justify", "account for", "rationalize", "show why", "demonstrate", "argue"], label: "Give a reason for", hint: "The definition says 'to give a reason for' -- the explanatory dimension." },
    ],
    synonyms: ["clarify", "describe", "justify"],
  },
  {
    word: "extend",
    partOfSpeech: "verb",
    definition: "To make something longer or bigger; to offer or reach out.",
    keyConcepts: [
      { keyword: "make longer", matchTerms: ["make longer", "lengthen", "increase", "stretch", "expand", "enlarge", "prolong", "widen", "grow"], label: "Make longer or bigger", hint: "The definition says 'make something longer or bigger' -- increasing its reach." },
      { keyword: "offer", matchTerms: ["offer", "reach out", "give", "provide", "present", "grant", "hold out", "put forward"], label: "Offer or reach out", hint: "The definition says 'to offer or reach out' -- a gesture of giving or connecting." },
    ],
    synonyms: ["lengthen", "expand", "offer"],
  },
  {
    word: "fail",
    partOfSpeech: "verb",
    definition: "To be unsuccessful in achieving something; to neglect to do something.",
    keyConcepts: [
      { keyword: "unsuccessful", matchTerms: ["unsuccessful", "not succeed", "fall short", "miss", "flop", "come up short", "not achieve"], label: "Not successful", hint: "The definition says 'be unsuccessful in achieving something' -- not reaching the goal." },
      { keyword: "neglect", matchTerms: ["neglect", "omit", "forget", "miss", "overlook", "not do", "lack", "skip", "let down"], label: "Neglect to do", hint: "The definition says 'to neglect to do something' -- the sin of omission." },
    ],
    synonyms: ["not succeed", "falter", "miss"],
  },
  {
    word: "filter",
    partOfSpeech: "verb",
    definition: "To remove unwanted material from something; to make something pass through a selective process.",
    keyConcepts: [
      { keyword: "remove", matchTerms: ["remove", "separate", "sift", "strain", "screen", "sort", "eliminate", "exclude", "purify", "clean"], label: "Remove unwanted material", hint: "The definition says 'remove unwanted material from something' -- selective removal." },
      { keyword: "selective", matchTerms: ["selective", "process", "screen", "choose", "allow through", "block", "refine", "regulate"], label: "Selective process", hint: "The definition says 'pass through a selective process' -- letting some things through and not others." },
    ],
    synonyms: ["sift", "screen", "strain"],
  },
  {
    word: "fix",
    partOfSpeech: "verb",
    definition: "To fasten something securely; to repair something; to decide on a time or place.",
    keyConcepts: [
      { keyword: "fasten", matchTerms: ["fasten", "secure", "attach", "anchor", "bind", "pin", "stabilize", "hold", "lock"], label: "Fasten securely", hint: "The definition says 'fasten something securely' -- making immovable." },
      { keyword: "repair", matchTerms: ["repair", "mend", "correct", "solve", "address", "sort out", "put right", "restore", "patch"], label: "Repair something", hint: "The definition says 'to repair something' -- making it work again." },
    ],
    synonyms: ["repair", "secure", "resolve"],
  },
  {
    word: "frame",
    partOfSpeech: "verb",
    definition: "To construct or structure something; to present information in a particular way.",
    keyConcepts: [
      { keyword: "construct", matchTerms: ["construct", "build", "make", "put together", "assemble", "design", "create", "compose", "form"], label: "Construct or structure", hint: "The definition says 'to construct or structure something' -- building a form." },
      { keyword: "present", matchTerms: ["present", "portray", "cast", "position", "contextualize", "interpret", "describe", "articulate"], label: "Present in a particular way", hint: "The definition says 'present information in a particular way' -- shaping how it is seen." },
    ],
    synonyms: ["construct", "present", "structure"],
  },
  {
    word: "function",
    partOfSpeech: "noun",
    definition: "The purpose or role of something; the activity proper to a person or institution.",
    keyConcepts: [
      { keyword: "purpose or role", matchTerms: ["purpose", "role", "job", "task", "duty", "use", "intention", "reason", "objective"], label: "Purpose or role", hint: "The definition says 'the purpose or role of something' -- what it is for." },
      { keyword: "proper activity", matchTerms: ["proper activity", "operation", "working", "performance", "activity", "service", "contribution"], label: "Proper activity", hint: "The definition says 'the activity proper to a person or institution' -- what they do." },
    ],
    synonyms: ["purpose", "role", "operation"],
  },
  {
    word: "gather",
    partOfSpeech: "verb",
    definition: "To bring together or accumulate things; to come together as a group.",
    keyConcepts: [
      { keyword: "bring together", matchTerms: ["bring together", "collect", "assemble", "compile", "accumulate", "stockpile", "pool", "amass"], label: "Bring together", hint: "The definition says 'bring together or accumulate things' -- collecting from various places." },
      { keyword: "come together", matchTerms: ["come together", "meet", "convene", "congregate", "assemble", "join", "converge"], label: "Come together as a group", hint: "The definition says 'come together as a group' -- people or things meeting." },
    ],
    synonyms: ["collect", "assemble", "amass"],
  },
  {
    word: "guide",
    partOfSpeech: "verb",
    definition: "To show or indicate the right direction to someone; to advise or direct someone's decisions.",
    keyConcepts: [
      { keyword: "direct", matchTerms: ["direct", "show the way", "steer", "lead", "navigate", "point", "orient", "escort", "conduct", "usher"], label: "Show the right direction", hint: "The definition says 'show or indicate the right direction' -- leading someone." },
      { keyword: "advise", matchTerms: ["advise", "counsel", "mentor", "support", "help", "assist", "influence", "instruct", "shape", "govern"], label: "Advise or direct", hint: "The definition says 'advise or direct someone's decisions' -- shaping choices." },
    ],
    synonyms: ["direct", "lead", "steer"],
  },
  {
    word: "ignore",
    partOfSpeech: "verb",
    definition: "To refuse to take notice of; to intentionally disregard.",
    keyConcepts: [
      { keyword: "refuse to notice", matchTerms: ["refuse to notice", "overlook", "disregard", "dismiss", "turn away from", "neglect", "snub", "blank"], label: "Refuse to take notice", hint: "The definition says 'refuse to take notice of' -- actively not acknowledging." },
      { keyword: "intentionally", matchTerms: ["intentionally", "deliberately", "on purpose", "consciously", "wilfully", "knowingly"], label: "Intentionally disregard", hint: "The definition says 'to intentionally disregard' -- a deliberate choice." },
    ],
    synonyms: ["disregard", "overlook", "dismiss"],
  },
  {
    word: "initiate",
    partOfSpeech: "verb",
    definition: "To cause something to begin; to formally admit someone to a group.",
    keyConcepts: [
      { keyword: "cause to begin", matchTerms: ["cause to begin", "start", "launch", "begin", "trigger", "open", "set off", "kick off", "introduce"], label: "Cause something to begin", hint: "The definition says 'to cause something to begin' -- being the origin." },
      { keyword: "admit to group", matchTerms: ["admit to group", "induct", "enroll", "welcome", "bring in", "install", "accept", "swear in"], label: "Formally admit to a group", hint: "The definition says 'formally admit someone to a group' -- the ceremonial dimension." },
    ],
    synonyms: ["start", "launch", "begin"],
  },
  {
    word: "input",
    partOfSpeech: "noun",
    definition: "What is put in to produce a result; a contribution to a discussion.",
    keyConcepts: [
      { keyword: "put in", matchTerms: ["put in", "contribution", "addition", "supply", "provision", "resource", "investment", "energy", "material"], label: "What is put in", hint: "The definition says 'what is put in to produce a result' -- the raw material." },
      { keyword: "discussion", matchTerms: ["discussion", "feedback", "suggestion", "opinion", "insight", "perspective", "idea", "response"], label: "Contribution to discussion", hint: "The definition says 'a contribution to a discussion' -- adding to the conversation." },
    ],
    synonyms: ["contribution", "suggestion", "resource"],
  },
  {
    word: "invest",
    partOfSpeech: "verb",
    definition: "To put money, time, or effort into something for a future return; to devote resources.",
    keyConcepts: [
      { keyword: "put resources in", matchTerms: ["put resources in", "commit", "spend", "devote", "allocate", "deploy", "contribute", "pour in"], label: "Put money or effort in", hint: "The definition says 'put money, time, or effort into something' -- committing resources." },
      { keyword: "future return", matchTerms: ["future return", "benefit", "yield", "profit", "outcome", "reward", "gain", "growth"], label: "For a future return", hint: "The definition says 'for a future return' -- expecting something back." },
    ],
    synonyms: ["commit", "devote", "contribute"],
  },
  {
    word: "involve",
    partOfSpeech: "verb",
    definition: "To include or affect someone or something; to require something as a necessary part.",
    keyConcepts: [
      { keyword: "include", matchTerms: ["include", "affect", "concern", "implicate", "engage", "bring in", "touch", "require", "cover", "encompass"], label: "Include or affect", hint: "The definition says 'include or affect someone or something' -- having them as a part." },
      { keyword: "require", matchTerms: ["require", "demand", "need", "entail", "call for", "necessitate", "consist of", "comprise"], label: "Require as necessary", hint: "The definition says 'require something as a necessary part' -- it must be there." },
    ],
    synonyms: ["include", "engage", "require"],
  },
  {
    word: "judge",
    partOfSpeech: "verb",
    definition: "To form an opinion or conclusion about something; to hear and decide a legal case.",
    keyConcepts: [
      { keyword: "form opinion", matchTerms: ["form opinion", "evaluate", "assess", "appraise", "decide", "determine", "conclude", "rate", "weigh"], label: "Form an opinion", hint: "The definition says 'to form an opinion or conclusion about something' -- making a judgment." },
      { keyword: "legal case", matchTerms: ["legal case", "court", "trial", "arbitrate", "adjudicate", "hear", "preside", "rule", "decide"], label: "Hear a legal case", hint: "The definition says 'hear and decide a legal case' -- the judicial dimension." },
    ],
    synonyms: ["evaluate", "assess", "adjudicate"],
  },
  {
    word: "launch",
    partOfSpeech: "verb",
    definition: "To set something in motion; to introduce a new product or initiative.",
    keyConcepts: [
      { keyword: "set in motion", matchTerms: ["set in motion", "start", "begin", "initiate", "commence", "kick off", "open", "trigger", "dispatch"], label: "Set in motion", hint: "The definition says 'set something in motion' -- starting it off." },
      { keyword: "introduce", matchTerms: ["introduce", "release", "unveil", "debut", "present", "roll out", "put out", "announce", "open"], label: "Introduce a product", hint: "The definition says 'introduce a new product or initiative' -- making it available." },
    ],
    synonyms: ["start", "introduce", "initiate"],
  },
  {
    word: "leverage",
    partOfSpeech: "verb",
    definition: "To use something to maximum advantage; to use borrowed capital to increase potential return.",
    keyConcepts: [
      { keyword: "maximum advantage", matchTerms: ["maximum advantage", "use", "exploit", "capitalize on", "draw on", "apply", "make use of", "harness"], label: "Use to maximum advantage", hint: "The definition says 'use something to maximum advantage' -- getting the most from it." },
      { keyword: "borrowed capital", matchTerms: ["borrowed capital", "debt", "finance", "investment", "credit", "loan", "multiplier", "magnify"], label: "Use borrowed capital", hint: "The definition says 'use borrowed capital to increase potential return' -- the financial sense." },
    ],
    synonyms: ["exploit", "use", "capitalize on"],
  },
  {
    word: "listen",
    partOfSpeech: "verb",
    definition: "To pay attention in order to hear something; to take notice of and act on advice.",
    keyConcepts: [
      { keyword: "pay attention to hear", matchTerms: ["pay attention", "hear", "attend", "be all ears", "tune in", "follow", "catch", "notice"], label: "Pay attention to hear", hint: "The definition says 'pay attention in order to hear something' -- active hearing." },
      { keyword: "take notice", matchTerms: ["take notice", "heed", "act on", "respond to", "consider", "respect", "follow", "obey"], label: "Take notice of advice", hint: "The definition says 'take notice of and act on advice' -- the responsive dimension." },
    ],
    synonyms: ["hear", "heed", "attend"],
  },
  {
    word: "locate",
    partOfSpeech: "verb",
    definition: "To discover the exact position of something; to find or establish something.",
    keyConcepts: [
      { keyword: "discover position", matchTerms: ["discover position", "find", "place", "identify", "pinpoint", "track down", "spot", "detect"], label: "Discover exact position", hint: "The definition says 'discover the exact position of something' -- finding it." },
      { keyword: "establish", matchTerms: ["establish", "set up", "situate", "place", "position", "base", "install", "put", "fix"], label: "Find or establish", hint: "The definition says 'find or establish something' -- setting it in a place." },
    ],
    synonyms: ["find", "place", "identify"],
  },
  {
    word: "merge",
    partOfSpeech: "verb",
    definition: "To combine or blend to form a single entity; to join together.",
    keyConcepts: [
      { keyword: "combine", matchTerms: ["combine", "blend", "unite", "join", "fuse", "integrate", "consolidate", "mix", "pool", "amalgamate"], label: "Combine into one", hint: "The definition says 'combine or blend to form a single entity' -- becoming one." },
      { keyword: "single entity", matchTerms: ["single entity", "whole", "unit", "one thing", "unified", "together", "combined", "undivided"], label: "Form a single entity", hint: "The definition says 'form a single entity' -- the result of merging." },
    ],
    synonyms: ["combine", "fuse", "unite"],
  },
  {
    word: "notice",
    partOfSpeech: "verb",
    definition: "To become aware of something; to pay attention to something.",
    keyConcepts: [
      { keyword: "become aware", matchTerms: ["become aware", "observe", "see", "spot", "detect", "perceive", "register", "note", "catch"], label: "Become aware of", hint: "The definition says 'to become aware of something' -- the moment of perception." },
      { keyword: "pay attention", matchTerms: ["pay attention", "heed", "attend to", "remark on", "acknowledge", "mention", "take note"], label: "Pay attention to", hint: "The definition says 'to pay attention to something' -- the active observing dimension." },
    ],
    synonyms: ["observe", "detect", "see"],
  },
  {
    word: "perform",
    partOfSpeech: "verb",
    definition: "To carry out an action or task; to act in a show or production.",
    keyConcepts: [
      { keyword: "carry out", matchTerms: ["carry out", "execute", "do", "undertake", "complete", "accomplish", "fulfill", "conduct", "engage in"], label: "Carry out a task", hint: "The definition says 'to carry out an action or task' -- doing it." },
      { keyword: "act in show", matchTerms: ["act in show", "play", "appear", "present", "stage", "give a performance", "demonstrate", "display"], label: "Act in a show", hint: "The definition says 'to act in a show or production' -- the artistic dimension." },
    ],
    synonyms: ["execute", "accomplish", "act"],
  },
  {
    word: "permit",
    partOfSpeech: "verb",
    definition: "To allow something to happen or be done; to give official permission for.",
    keyConcepts: [
      { keyword: "allow", matchTerms: ["allow", "let", "authorize", "approve", "enable", "sanction", "consent to", "tolerate", "give permission"], label: "Allow to happen", hint: "The definition says 'allow something to happen or be done' -- not preventing it." },
      { keyword: "official permission", matchTerms: ["official permission", "license", "authorize", "grant", "issue", "certify", "endorse", "approve"], label: "Official permission", hint: "The definition says 'give official permission for' -- formal authorization." },
    ],
    synonyms: ["allow", "authorize", "sanction"],
  },
  {
    word: "plan",
    partOfSpeech: "noun",
    definition: "A detailed proposal for doing something; a method worked out in advance.",
    keyConcepts: [
      { keyword: "detailed proposal", matchTerms: ["detailed proposal", "scheme", "strategy", "program", "outline", "design", "blueprint", "intention"], label: "A detailed proposal", hint: "The definition says 'a detailed proposal for doing something' -- the roadmap." },
      { keyword: "worked out in advance", matchTerms: ["worked out in advance", "prepared", "arranged", "organized", "methodical", "forethought"], label: "Worked out in advance", hint: "The definition says 'a method worked out in advance' -- prepared ahead of time." },
    ],
    synonyms: ["strategy", "scheme", "design"],
  },
  {
    word: "position",
    partOfSpeech: "noun",
    definition: "A place where someone or something is located; a point of view or stance.",
    keyConcepts: [
      { keyword: "place located", matchTerms: ["place", "location", "spot", "site", "post", "station", "place", "area", "setting"], label: "A place where located", hint: "The definition says 'a place where someone or something is located' -- physical location." },
      { keyword: "point of view", matchTerms: ["point of view", "stance", "opinion", "view", "stand", "belief", "attitude", "perspective"], label: "A point of view", hint: "The definition says 'a point of view or stance' -- where one stands intellectually." },
    ],
    synonyms: ["location", "stance", "point of view"],
  },
  {
    word: "present",
    partOfSpeech: "adjective",
    definition: "Existing or occurring now; being in a place at this time.",
    keyConcepts: [
      { keyword: "existing now", matchTerms: ["existing now", "current", "contemporary", "immediate", "today", "ongoing", "real-time"], label: "Existing or occurring now", hint: "The definition says 'existing or occurring now' -- in the current moment." },
      { keyword: "being in a place", matchTerms: ["being in a place", "here", "attending", "on hand", "available", "in attendance", "there"], label: "Being in a place", hint: "The definition says 'being in a place at this time' -- physical presence." },
    ],
    synonyms: ["current", "here", "attending"],
  },
  {
    word: "prevent",
    partOfSpeech: "verb",
    definition: "To stop something from happening; to make impossible.",
    keyConcepts: [
      { keyword: "stop from happening", matchTerms: ["stop from happening", "block", "hinder", "obstruct", "avert", "thwart", "forestall", "avoid"], label: "Stop from happening", hint: "The definition says 'to stop something from happening' -- intervention before the fact." },
      { keyword: "make impossible", matchTerms: ["make impossible", "preclude", "prohibit", "bar", "rule out", "disallow", "prevent", "stop"], label: "Make impossible", hint: "The definition says 'to make impossible' -- eliminating the chance entirely." },
    ],
    synonyms: ["stop", "block", "avert"],
  },
  {
    word: "produce",
    partOfSpeech: "verb",
    definition: "To make or manufacture something; to bring into existence.",
    keyConcepts: [
      { keyword: "make or manufacture", matchTerms: ["make", "manufacture", "create", "generate", "build", "construct", "output", "fabricate"], label: "Make or manufacture", hint: "The definition says 'to make or manufacture something' -- bringing it into being." },
      { keyword: "bring into existence", matchTerms: ["bring into existence", "yield", "result in", "give rise to", "create", "originate", "spawn"], label: "Bring into existence", hint: "The definition says 'to bring into existence' -- the broader creative sense." },
    ],
    synonyms: ["make", "create", "manufacture"],
  },
  {
    word: "raise",
    partOfSpeech: "verb",
    definition: "To lift something to a higher position; to increase a level or amount; to bring up a topic.",
    keyConcepts: [
      { keyword: "lift", matchTerms: ["lift", "elevate", "hoist", "move up", "hold up", "increase", "heighten", "boost", "promote", "improve"], label: "Lift to higher position", hint: "The definition says 'lift something to a higher position' -- moving upward." },
      { keyword: "bring up", matchTerms: ["bring up", "mention", "introduce", "present", "put forward", "suggest", "voice", "flag", "pose"], label: "Bring up a topic", hint: "The definition says 'bring up a topic' -- introducing it into discussion." },
    ],
    synonyms: ["lift", "increase", "bring up"],
  },
  {
    word: "reach",
    partOfSpeech: "verb",
    definition: "To stretch out to touch or arrive at; to achieve or attain.",
    keyConcepts: [
      { keyword: "stretch out to touch", matchTerms: ["stretch out", "extend", "access", "get to", "arrive at", "make it to", "attain", "accomplish"], label: "Stretch out to touch", hint: "The definition says 'to stretch out to touch or arrive at' -- physical reaching." },
      { keyword: "achieve", matchTerms: ["achieve", "attain", "accomplish", "fulfill", "hit", "meet", "realize", "succeed at", "complete"], label: "Achieve or attain", hint: "The definition says 'to achieve or attain' -- the goal-completion sense." },
    ],
    synonyms: ["attain", "arrive at", "achieve"],
  },
  {
    word: "realize",
    partOfSpeech: "verb",
    definition: "To become aware of something; to fulfill or achieve a goal.",
    keyConcepts: [
      { keyword: "become aware", matchTerms: ["become aware", "understand", "recognize", "grasp", "see", "comprehend", "register", "appreciate", "discover"], label: "Become aware", hint: "The definition says 'to become aware of something' -- recognition dawning." },
      { keyword: "achieve", matchTerms: ["achieve", "fulfill", "accomplish", "bring to life", "actualize", "make real", "execute", "reach"], label: "Fulfill or achieve", hint: "The definition says 'to fulfill or achieve a goal' -- making it actual." },
    ],
    synonyms: ["understand", "achieve", "fulfill"],
  },
  {
    word: "relate",
    partOfSpeech: "verb",
    definition: "To show or establish a connection between things; to tell a story.",
    keyConcepts: [
      { keyword: "connection", matchTerms: ["connection", "link", "associate", "connect", "correlate", "tie together", "reference", "correspond"], label: "Show a connection", hint: "The definition says 'show or establish a connection between things' -- linking them." },
      { keyword: "tell", matchTerms: ["tell", "narrate", "recount", "describe", "share", "report", "communicate", "convey"], label: "Tell a story", hint: "The definition says 'to tell a story' -- the narrative sense." },
    ],
    synonyms: ["connect", "link", "narrate"],
  },
  {
    word: "release",
    partOfSpeech: "verb",
    definition: "To allow something to move freely; to make information or a product available.",
    keyConcepts: [
      { keyword: "move freely", matchTerms: ["move freely", "let go", "free", "liberate", "discharge", "emit", "issue", "produce"], label: "Allow to move freely", hint: "The definition says 'allow something to move freely' -- removing a constraint." },
      { keyword: "make available", matchTerms: ["make available", "publish", "launch", "distribute", "issue", "announce", "unveil", "put out"], label: "Make available", hint: "The definition says 'make information or a product available' -- putting it out into the world." },
    ],
    synonyms: ["free", "publish", "launch"],
  },
  {
    word: "require",
    partOfSpeech: "verb",
    definition: "To need something; to make obligatory by rule or law.",
    keyConcepts: [
      { keyword: "need", matchTerms: ["need", "demand", "call for", "necessitate", "depend on", "want", "expect", "rely on"], label: "Need something", hint: "The definition says 'to need something' -- it is necessary." },
      { keyword: "make obligatory", matchTerms: ["make obligatory", "mandate", "compel", "enforce", "insist on", "stipulate", "prescribe"], label: "Make obligatory", hint: "The definition says 'to make obligatory by rule or law' -- formal demand." },
    ],
    synonyms: ["need", "demand", "mandate"],
  },
  {
    word: "review",
    partOfSpeech: "verb",
    definition: "To examine or assess something; to look back on or assess a past period.",
    keyConcepts: [
      { keyword: "examine", matchTerms: ["examine", "assess", "evaluate", "analyze", "check", "audit", "inspect", "survey", "look over"], label: "Examine or assess", hint: "The definition says 'examine or assess something' -- looking at it carefully." },
      { keyword: "look back", matchTerms: ["look back", "reconsider", "reflect on", "reassess", "revisit", "go over", "reexamine"], label: "Look back on a period", hint: "The definition says 'look back on or assess a past period' -- retrospective evaluation." },
    ],
    synonyms: ["assess", "evaluate", "examine"],
  },
  {
    word: "satisfy",
    partOfSpeech: "verb",
    definition: "To meet the expectations or needs of someone; to be sufficient for.",
    keyConcepts: [
      { keyword: "meet expectations", matchTerms: ["meet expectations", "fulfill", "please", "content", "gratify", "suffice", "answer", "accommodate"], label: "Meet expectations", hint: "The definition says 'meet the expectations or needs of someone' -- giving them what they need." },
      { keyword: "sufficient", matchTerms: ["sufficient", "adequate", "enough", "suitable", "competent", "fitting", "proper", "acceptable"], label: "Be sufficient", hint: "The definition says 'to be sufficient for' -- meeting the requirement." },
    ],
    synonyms: ["fulfill", "please", "suffice"],
  },
  {
    word: "serve",
    partOfSpeech: "verb",
    definition: "To perform duties or provide a service; to be useful for a purpose.",
    keyConcepts: [
      { keyword: "perform duties", matchTerms: ["perform duties", "work", "help", "assist", "aid", "attend", "provide", "give", "supply"], label: "Perform duties", hint: "The definition says 'perform duties or provide a service' -- doing for others." },
      { keyword: "useful for", matchTerms: ["useful for", "function as", "work as", "suit", "fill", "meet", "address", "satisfy"], label: "Useful for a purpose", hint: "The definition says 'to be useful for a purpose' -- fulfilling a function." },
    ],
    synonyms: ["help", "assist", "fulfill"],
  },
  {
    word: "share",
    partOfSpeech: "verb",
    definition: "To give a portion of something to others; to have or use jointly.",
    keyConcepts: [
      { keyword: "give a portion", matchTerms: ["give a portion", "divide", "distribute", "give part of", "offer", "contribute", "split", "allocate"], label: "Give a portion to others", hint: "The definition says 'to give a portion of something to others' -- distributing." },
      { keyword: "use jointly", matchTerms: ["use jointly", "participate in", "have in common", "co-own", "enjoy together", "pool", "cooperate"], label: "Have or use jointly", hint: "The definition says 'to have or use jointly' -- collective ownership." },
    ],
    synonyms: ["divide", "distribute", "give"],
  },
  {
    word: "simplify",
    partOfSpeech: "verb",
    definition: "To make something easier to do or understand; to reduce in complexity.",
    keyConcepts: [
      { keyword: "easier", matchTerms: ["easier", "clearer", "more accessible", "more understandable", "user-friendly", "streamline", "straightforward"], label: "Make easier", hint: "The definition says 'make something easier to do or understand' -- reducing difficulty." },
      { keyword: "complexity", matchTerms: ["complexity", "detail", "technicality", "confusion", "complication", "intricacy", "length", "difficulty"], label: "Reduce in complexity", hint: "The definition says 'reduce in complexity' -- cutting away the difficult parts." },
    ],
    synonyms: ["streamline", "clarify", "reduce"],
  },
  {
    word: "solve",
    partOfSpeech: "verb",
    definition: "To find a solution to a problem or question; to explain or clear up a difficulty.",
    keyConcepts: [
      { keyword: "find solution", matchTerms: ["find solution", "resolve", "answer", "fix", "work out", "crack", "address", "deal with"], label: "Find a solution", hint: "The definition says 'find a solution to a problem or question' -- making it go away." },
      { keyword: "explain", matchTerms: ["explain", "clarify", "clear up", "unravel", "interpret", "figure out", "decode", "untangle"], label: "Explain or clear up", hint: "The definition says 'to explain or clear up a difficulty' -- making it understandable." },
    ],
    synonyms: ["resolve", "answer", "fix"],
  },
  {
    word: "spend",
    partOfSpeech: "verb",
    definition: "To use money, time, or energy on something; to pass time in a particular way.",
    keyConcepts: [
      { keyword: "use money or time", matchTerms: ["use money", "use time", "use energy", "invest", "pay", "devote", "put in", "commit", "expend"], label: "Use money or time", hint: "The definition says 'use money, time, or energy on something' -- consuming resources." },
      { keyword: "pass time", matchTerms: ["pass time", "occupy", "fill", "use up", "get through", "while away", "engage in"], label: "Pass time", hint: "The definition says 'pass time in a particular way' -- how time is used." },
    ],
    synonyms: ["use", "devote", "expend"],
  },
  {
    word: "state",
    partOfSpeech: "verb",
    definition: "To express something clearly and precisely in speech or writing.",
    keyConcepts: [
      { keyword: "express clearly", matchTerms: ["express clearly", "say", "declare", "assert", "announce", "articulate", "specify", "put into words"], label: "Express clearly", hint: "The definition says 'to express something clearly and precisely' -- leaving no ambiguity." },
      { keyword: "in speech or writing", matchTerms: ["in speech", "in writing", "verbally", "formally", "explicitly", "on record", "aloud"], label: "In speech or writing", hint: "The definition says 'in speech or writing' -- the medium of the stating." },
    ],
    synonyms: ["declare", "assert", "express"],
  },
  {
    word: "submit",
    partOfSpeech: "verb",
    definition: "To give something for consideration; to accept the authority of another.",
    keyConcepts: [
      { keyword: "give for consideration", matchTerms: ["give for consideration", "hand in", "present", "offer", "send in", "file", "deliver", "turn in"], label: "Give for consideration", hint: "The definition says 'give something for consideration' -- presenting it to a decision-maker." },
      { keyword: "accept authority", matchTerms: ["accept authority", "yield", "comply", "defer", "surrender", "give in", "capitulate", "obey"], label: "Accept the authority of another", hint: "The definition says 'to accept the authority of another' -- deferring." },
    ],
    synonyms: ["present", "yield", "comply"],
  },
  {
    word: "suggest",
    partOfSpeech: "verb",
    definition: "To put forward an idea for consideration; to indicate or imply.",
    keyConcepts: [
      { keyword: "put forward idea", matchTerms: ["put forward", "propose", "recommend", "offer", "raise", "advance", "submit", "advocate"], label: "Put forward an idea", hint: "The definition says 'to put forward an idea for consideration' -- offering a possibility." },
      { keyword: "imply", matchTerms: ["imply", "indicate", "hint", "signal", "infer", "intimate", "point to", "connote"], label: "Indicate or imply", hint: "The definition says 'to indicate or imply' -- the indirect communication." },
    ],
    synonyms: ["propose", "recommend", "imply"],
  },
  {
    word: "support",
    partOfSpeech: "verb",
    definition: "To bear the weight of; to give assistance to; to advocate for.",
    keyConcepts: [
      { keyword: "bear weight", matchTerms: ["bear weight", "hold up", "sustain", "brace", "carry", "prop", "reinforce", "underpin"], label: "Bear the weight of", hint: "The definition says 'to bear the weight of' -- physical support." },
      { keyword: "give assistance", matchTerms: ["give assistance", "help", "assist", "back", "encourage", "promote", "champion", "advocate for"], label: "Give assistance", hint: "The definition says 'to give assistance to; to advocate for' -- active backing." },
    ],
    synonyms: ["assist", "back", "advocate"],
  },
  {
    word: "test",
    partOfSpeech: "verb",
    definition: "To take measures to check the quality or performance of something.",
    keyConcepts: [
      { keyword: "check quality", matchTerms: ["check quality", "examine", "assess", "evaluate", "measure", "probe", "try", "verify", "validate"], label: "Check quality or performance", hint: "The definition says 'take measures to check the quality or performance' -- finding out how good it is." },
      { keyword: "measures", matchTerms: ["measures", "procedures", "methods", "trials", "experiments", "challenges", "examinations"], label: "Taking measures", hint: "The definition says 'take measures' -- doing something specific to find out." },
    ],
    synonyms: ["examine", "assess", "evaluate"],
  },
  {
    word: "track",
    partOfSpeech: "verb",
    definition: "To follow the course or movements of something; to record progress over time.",
    keyConcepts: [
      { keyword: "follow movements", matchTerms: ["follow movements", "trace", "monitor", "watch", "observe", "tail", "keep tabs", "pursue"], label: "Follow movements", hint: "The definition says 'follow the course or movements of something' -- keeping it in sight." },
      { keyword: "record progress", matchTerms: ["record progress", "monitor", "log", "measure", "keep track", "note", "document", "check"], label: "Record progress", hint: "The definition says 'to record progress over time' -- maintaining a record." },
    ],
    synonyms: ["follow", "monitor", "record"],
  },
  {
    word: "translate",
    partOfSpeech: "verb",
    definition: "To convert words from one language to another; to transform or convert into something.",
    keyConcepts: [
      { keyword: "convert language", matchTerms: ["convert", "interpret", "render", "transcribe", "decode", "transfer", "make accessible"], label: "Convert language", hint: "The definition says 'convert words from one language to another' -- linguistic conversion." },
      { keyword: "transform", matchTerms: ["transform", "convert", "change", "turn into", "make", "adapt", "render", "shift", "reframe"], label: "Transform into something", hint: "The definition says 'transform or convert into something' -- broader conversion." },
    ],
    synonyms: ["convert", "interpret", "transform"],
  },
  {
    word: "treat",
    partOfSpeech: "verb",
    definition: "To behave toward someone in a particular way; to apply a remedy or process.",
    keyConcepts: [
      { keyword: "behave toward", matchTerms: ["behave toward", "regard", "handle", "deal with", "approach", "respond to", "act toward"], label: "Behave toward someone", hint: "The definition says 'to behave toward someone in a particular way' -- how one acts with them." },
      { keyword: "apply remedy", matchTerms: ["apply remedy", "medicate", "cure", "heal", "address", "fix", "process", "manage", "attend to"], label: "Apply a remedy", hint: "The definition says 'apply a remedy or process' -- medical or physical intervention." },
    ],
    synonyms: ["handle", "address", "medicate"],
  },
  {
    word: "absolute",
    partOfSpeech: "adjective",
    definition: "Not qualified or limited in any way; complete and total.",
    keyConcepts: [
      { keyword: "complete", matchTerms: ["complete", "total", "utter", "entire", "full", "unconditional", "unrestricted", "unlimited", "unqualified"], label: "Complete and total", hint: "The definition says 'complete and total' -- nothing held back." },
      { keyword: "not limited", matchTerms: ["not limited", "unrestricted", "unqualified", "without conditions", "pure", "definite", "certain"], label: "Not qualified or limited", hint: "The definition says 'not qualified or limited in any way' -- no exceptions." },
    ],
    synonyms: ["complete", "total", "unconditional"],
  },
  {
    word: "accessible",
    partOfSpeech: "adjective",
    definition: "Able to be reached or used easily; easy to understand or appreciate.",
    keyConcepts: [
      { keyword: "reachable", matchTerms: ["reachable", "available", "obtainable", "usable", "open", "approachable", "attainable", "within reach", "convenient"], label: "Able to be reached", hint: "The definition says 'able to be reached or used easily' -- within reach." },
      { keyword: "easy to understand", matchTerms: ["easy to understand", "clear", "simple", "friendly", "approachable", "comprehensible", "user-friendly"], label: "Easy to understand", hint: "The definition says 'easy to understand or appreciate' -- not requiring special knowledge." },
    ],
    synonyms: ["available", "approachable", "usable"],
  },
  {
    word: "actual",
    partOfSpeech: "adjective",
    definition: "Existing in fact; real rather than imagined or supposed.",
    keyConcepts: [
      { keyword: "existing in fact", matchTerms: ["existing in fact", "real", "genuine", "true", "authentic", "concrete", "definite", "factual", "verifiable"], label: "Existing in fact", hint: "The definition says 'existing in fact' -- not hypothetical." },
      { keyword: "real", matchTerms: ["real", "not imagined", "not supposed", "tangible", "actual", "certain", "established", "confirmed"], label: "Real rather than imagined", hint: "The definition says 'real rather than imagined or supposed' -- confirmed reality." },
    ],
    synonyms: ["real", "genuine", "true"],
  },
  {
    word: "affordable",
    partOfSpeech: "adjective",
    definition: "Inexpensive enough to be bought or obtained by most people.",
    keyConcepts: [
      { keyword: "inexpensive", matchTerms: ["inexpensive", "cheap", "low-cost", "budget", "reasonable", "within reach", "economical", "not expensive"], label: "Inexpensive enough", hint: "The definition says 'inexpensive enough to be bought' -- within financial reach." },
      { keyword: "most people", matchTerms: ["most people", "accessible", "available", "within means", "attainable", "general public", "ordinary"], label: "Attainable by most", hint: "The definition says 'bought or obtained by most people' -- widely accessible." },
    ],
    synonyms: ["cheap", "inexpensive", "accessible"],
  },
  {
    word: "aggressive",
    partOfSpeech: "adjective",
    definition: "Ready to attack or confront; pursuing a course of action forcefully.",
    keyConcepts: [
      { keyword: "attack", matchTerms: ["attack", "hostile", "belligerent", "combative", "confrontational", "forceful", "threatening", "violent"], label: "Ready to attack", hint: "The definition says 'ready to attack or confront' -- offensive stance." },
      { keyword: "forcefully", matchTerms: ["forcefully", "assertive", "pushy", "strong", "determined", "intense", "ambitious", "dynamic", "vigorous"], label: "Pursuing forcefully", hint: "The definition says 'pursuing a course of action forcefully' -- strong and determined." },
    ],
    synonyms: ["forceful", "assertive", "combative"],
  },
  {
    word: "ambitious",
    partOfSpeech: "adjective",
    definition: "Having a strong desire to succeed or achieve something great; requiring effort.",
    keyConcepts: [
      { keyword: "desire to succeed", matchTerms: ["desire to succeed", "driven", "motivated", "aspiring", "determined", "goal-oriented", "striving"], label: "Strong desire to succeed", hint: "The definition says 'having a strong desire to succeed' -- internal drive." },
      { keyword: "requiring effort", matchTerms: ["requiring effort", "challenging", "demanding", "big", "difficult", "large-scale", "substantial"], label: "Requiring effort", hint: "The definition says 'requiring effort' -- the task itself is hard." },
    ],
    synonyms: ["driven", "aspiring", "determined"],
  },
  {
    word: "analytical",
    partOfSpeech: "adjective",
    definition: "Relating to or using analysis; skilled at identifying the components of a problem.",
    keyConcepts: [
      { keyword: "analysis", matchTerms: ["analysis", "examining", "breaking down", "evaluating", "dissecting", "studying", "systematic", "logical"], label: "Relating to analysis", hint: "The definition says 'relating to or using analysis' -- working by examination." },
      { keyword: "skilled", matchTerms: ["skilled", "methodical", "logical", "sharp", "perceptive", "discerning", "precise", "careful", "focused"], label: "Skilled at identifying", hint: "The definition says 'skilled at identifying the components of a problem' -- problem-solving ability." },
    ],
    synonyms: ["logical", "systematic", "methodical"],
  },
  {
    word: "balanced",
    partOfSpeech: "adjective",
    definition: "Keeping or showing a balance; giving fair and equal treatment to all parts.",
    keyConcepts: [
      { keyword: "fair and equal", matchTerms: ["fair", "equal", "even-handed", "impartial", "unbiased", "just", "neutral", "objective", "measured"], label: "Fair and equal", hint: "The definition says 'giving fair and equal treatment to all parts' -- no favoritism." },
      { keyword: "equilibrium", matchTerms: ["equilibrium", "proportion", "stability", "symmetry", "well-rounded", "steady", "sensible"], label: "Keeping balance", hint: "The definition says 'keeping or showing a balance' -- not leaning too far in one direction." },
    ],
    synonyms: ["fair", "proportionate", "stable"],
  },
  {
    word: "beneficial",
    partOfSpeech: "adjective",
    definition: "Favorable or advantageous; resulting in good outcomes.",
    keyConcepts: [
      { keyword: "favorable", matchTerms: ["favorable", "advantageous", "helpful", "positive", "good", "useful", "valuable", "constructive"], label: "Favorable or advantageous", hint: "The definition says 'favorable or advantageous' -- working in one's favor." },
      { keyword: "good outcomes", matchTerms: ["good outcomes", "benefit", "improvement", "gain", "reward", "positive effect", "healthy"], label: "Resulting in good outcomes", hint: "The definition says 'resulting in good outcomes' -- the end result is positive." },
    ],
    synonyms: ["helpful", "advantageous", "useful"],
  },
  {
    word: "central",
    partOfSpeech: "adjective",
    definition: "At the most important position; forming the centre of something.",
    keyConcepts: [
      { keyword: "most important", matchTerms: ["most important", "key", "main", "principal", "primary", "chief", "foremost", "dominant", "pivotal"], label: "Most important position", hint: "The definition says 'at the most important position' -- the core of things." },
      { keyword: "centre", matchTerms: ["centre", "center", "middle", "core", "heart", "nucleus", "hub", "focal point"], label: "Forming the centre", hint: "The definition says 'forming the centre of something' -- physical or metaphorical middle." },
    ],
    synonyms: ["key", "main", "core"],
  },
  {
    word: "certain",
    partOfSpeech: "adjective",
    definition: "Known for sure; completely confident about something.",
    keyConcepts: [
      { keyword: "known for sure", matchTerms: ["known for sure", "definite", "sure", "established", "confirmed", "settled", "proven", "undoubted"], label: "Known for sure", hint: "The definition says 'known for sure' -- not in doubt." },
      { keyword: "confident", matchTerms: ["confident", "assured", "positive", "convinced", "clear", "satisfied", "unwavering", "secure"], label: "Completely confident", hint: "The definition says 'completely confident about something' -- total certainty." },
    ],
    synonyms: ["sure", "definite", "confident"],
  },
  {
    word: "clear",
    partOfSpeech: "adjective",
    definition: "Easy to perceive or understand; free from obscurity or doubt.",
    keyConcepts: [
      { keyword: "easy to understand", matchTerms: ["easy to understand", "plain", "obvious", "transparent", "straightforward", "lucid", "simple"], label: "Easy to understand", hint: "The definition says 'easy to perceive or understand' -- no barrier to comprehension." },
      { keyword: "free from doubt", matchTerms: ["free from doubt", "certain", "definite", "unambiguous", "unmistakable", "explicit", "precise"], label: "Free from obscurity", hint: "The definition says 'free from obscurity or doubt' -- nothing murky about it." },
    ],
    synonyms: ["plain", "obvious", "transparent"],
  },
  {
    word: "committed",
    partOfSpeech: "adjective",
    definition: "Feeling dedication and loyalty to a cause or goal; having made a firm decision.",
    keyConcepts: [
      { keyword: "dedication", matchTerms: ["dedication", "devoted", "loyal", "passionate", "invested", "engaged", "enthusiastic", "earnest"], label: "Dedicated and loyal", hint: "The definition says 'feeling dedication and loyalty to a cause or goal' -- strongly behind it." },
      { keyword: "firm decision", matchTerms: ["firm decision", "resolved", "decided", "unwavering", "certain", "definite", "set", "determined"], label: "Firm decision", hint: "The definition says 'having made a firm decision' -- not wavering." },
    ],
    synonyms: ["dedicated", "resolute", "devoted"],
  },
  {
    word: "compassionate",
    partOfSpeech: "adjective",
    definition: "Feeling or showing sympathy and concern for the suffering of others.",
    keyConcepts: [
      { keyword: "sympathy", matchTerms: ["sympathy", "concern", "care", "empathy", "kindness", "warmth", "feeling", "sensitivity"], label: "Feeling sympathy", hint: "The definition says 'feeling or showing sympathy and concern' -- emotionally attuned to others." },
      { keyword: "suffering", matchTerms: ["suffering", "pain", "hardship", "distress", "difficulty", "misfortune", "need"], label: "Concern for suffering", hint: "The definition says 'concern for the suffering of others' -- directed toward those in pain." },
    ],
    synonyms: ["sympathetic", "caring", "empathetic"],
  },
  {
    word: "competitive",
    partOfSpeech: "adjective",
    definition: "Relating to competition; having a strong desire to be more successful than others.",
    keyConcepts: [
      { keyword: "competition", matchTerms: ["competition", "contest", "rivalry", "match", "race", "striving", "challenging", "against others"], label: "Relating to competition", hint: "The definition says 'relating to competition' -- existing in a context of rivalry." },
      { keyword: "desire to win", matchTerms: ["desire to win", "driven", "ambitious", "rivalrous", "determined", "fierce", "aggressive", "relentless"], label: "Desire to be more successful", hint: "The definition says 'strong desire to be more successful than others' -- wanting to beat them." },
    ],
    synonyms: ["ambitious", "rivalrous", "driven"],
  },
  {
    word: "concrete",
    partOfSpeech: "adjective",
    definition: "Existing in a material or physical form; specific and definite rather than abstract.",
    keyConcepts: [
      { keyword: "material form", matchTerms: ["material form", "physical", "tangible", "real", "solid", "actual", "existing", "measurable", "visible"], label: "Existing in material form", hint: "The definition says 'existing in a material or physical form' -- can be perceived." },
      { keyword: "specific", matchTerms: ["specific", "definite", "clear", "precise", "exact", "explicit", "particular", "direct", "detailed"], label: "Specific and definite", hint: "The definition says 'specific and definite rather than abstract' -- not vague." },
    ],
    synonyms: ["specific", "tangible", "definite"],
  },
  {
    word: "confident",
    partOfSpeech: "adjective",
    definition: "Feeling or showing certainty about something; having trust in oneself.",
    keyConcepts: [
      { keyword: "certainty", matchTerms: ["certainty", "sure", "assured", "positive", "certain", "convinced", "secure", "definite", "unwavering"], label: "Feeling certainty", hint: "The definition says 'feeling or showing certainty about something' -- no doubt." },
      { keyword: "trust in oneself", matchTerms: ["trust in oneself", "self-assured", "bold", "composed", "poised", "self-reliant", "capable"], label: "Trust in oneself", hint: "The definition says 'having trust in oneself' -- personal belief in one's ability." },
    ],
    synonyms: ["assured", "certain", "self-assured"],
  },
  {
    word: "consistent",
    partOfSpeech: "adjective",
    definition: "Acting or done in the same way over time; not contradicting itself.",
    keyConcepts: [
      { keyword: "same way", matchTerms: ["same way", "regular", "steady", "uniform", "stable", "reliable", "predictable", "constant", "dependable"], label: "Acting the same way over time", hint: "The definition says 'acting or done in the same way over time' -- no variation." },
      { keyword: "not contradicting", matchTerms: ["not contradicting", "coherent", "logical", "aligned", "compatible", "harmonious", "noncontradictory"], label: "Not contradicting itself", hint: "The definition says 'not contradicting itself' -- internally sound." },
    ],
    synonyms: ["steady", "reliable", "uniform"],
  },
  {
    word: "dedicated",
    partOfSpeech: "adjective",
    definition: "Devoted to a particular purpose or cause; giving lots of time and effort to.",
    keyConcepts: [
      { keyword: "devoted", matchTerms: ["devoted", "committed", "loyal", "passionate", "driven", "focused", "purposeful", "earnest"], label: "Devoted to purpose", hint: "The definition says 'devoted to a particular purpose or cause' -- fully behind it." },
      { keyword: "effort", matchTerms: ["effort", "time", "energy", "work", "attention", "labor", "service", "sacrifice", "diligence"], label: "Giving time and effort", hint: "The definition says 'giving lots of time and effort' -- the commitment is active." },
    ],
    synonyms: ["devoted", "committed", "focused"],
  },
  {
    word: "detailed",
    partOfSpeech: "adjective",
    definition: "Having many small parts or features; giving attention to particulars.",
    keyConcepts: [
      { keyword: "many small parts", matchTerms: ["many small parts", "thorough", "comprehensive", "full", "in-depth", "exhaustive", "precise", "specific"], label: "Many small parts", hint: "The definition says 'having many small parts or features' -- richly specified." },
      { keyword: "attention to particulars", matchTerms: ["particulars", "specifics", "nuances", "fine points", "careful", "meticulous", "precise"], label: "Attention to particulars", hint: "The definition says 'giving attention to particulars' -- not skipping over details." },
    ],
    synonyms: ["thorough", "specific", "comprehensive"],
  },
  {
    word: "disciplined",
    partOfSpeech: "adjective",
    definition: "Behaving in a controlled and systematic way; having strong self-control.",
    keyConcepts: [
      { keyword: "controlled", matchTerms: ["controlled", "ordered", "systematic", "methodical", "structured", "regulated", "organized", "rigorous"], label: "Controlled and systematic", hint: "The definition says 'behaving in a controlled and systematic way' -- not impulsive." },
      { keyword: "self-control", matchTerms: ["self-control", "willpower", "restraint", "determination", "focused", "committed", "steadfast"], label: "Strong self-control", hint: "The definition says 'having strong self-control' -- overriding impulses." },
    ],
    synonyms: ["controlled", "methodical", "self-controlled"],
  },
  {
    word: "emerging",
    partOfSpeech: "adjective",
    definition: "Becoming visible or known for the first time; newly developing.",
    keyConcepts: [
      { keyword: "becoming visible", matchTerms: ["becoming visible", "coming up", "arising", "surfacing", "developing", "appearing", "new", "growing"], label: "Becoming visible", hint: "The definition says 'becoming visible or known for the first time' -- first appearance." },
      { keyword: "newly developing", matchTerms: ["newly developing", "nascent", "incipient", "rising", "budding", "evolving", "forming", "fresh"], label: "Newly developing", hint: "The definition says 'newly developing' -- at an early stage of growth." },
    ],
    synonyms: ["developing", "nascent", "rising"],
  },
  {
    word: "emotional",
    partOfSpeech: "adjective",
    definition: "Relating to emotions; arousing or expressing strong feelings.",
    keyConcepts: [
      { keyword: "relating to emotions", matchTerms: ["relating to emotions", "feeling", "affective", "expressive", "sensitive", "heartfelt", "personal"], label: "Relating to emotions", hint: "The definition says 'relating to emotions' -- the realm of feeling." },
      { keyword: "strong feelings", matchTerms: ["strong feelings", "intense", "moving", "stirring", "powerful", "deep", "passionate", "touching"], label: "Arousing strong feelings", hint: "The definition says 'arousing or expressing strong feelings' -- evokes a response." },
    ],
    synonyms: ["expressive", "feeling", "heartfelt"],
  },
  {
    word: "engaged",
    partOfSpeech: "adjective",
    definition: "Participating actively in something; deeply interested and involved.",
    keyConcepts: [
      { keyword: "participating actively", matchTerms: ["participating", "involved", "occupied", "busy", "committed", "working", "contributing"], label: "Participating actively", hint: "The definition says 'participating actively in something' -- fully in it." },
      { keyword: "deeply interested", matchTerms: ["deeply interested", "absorbed", "invested", "focused", "enthusiastic", "attentive", "keen"], label: "Deeply interested", hint: "The definition says 'deeply interested and involved' -- genuine investment." },
    ],
    synonyms: ["involved", "absorbed", "committed"],
  },
  {
    word: "exact",
    partOfSpeech: "adjective",
    definition: "Not approximately but precisely correct; accurate in every detail.",
    keyConcepts: [
      { keyword: "precisely correct", matchTerms: ["precisely correct", "accurate", "precise", "right", "error-free", "meticulous", "specific"], label: "Precisely correct", hint: "The definition says 'not approximately but precisely correct' -- no rounding." },
      { keyword: "every detail", matchTerms: ["every detail", "completely accurate", "perfectly", "thoroughly", "strictly", "rigorously"], label: "Accurate in every detail", hint: "The definition says 'accurate in every detail' -- full precision throughout." },
    ],
    synonyms: ["precise", "accurate", "specific"],
  },
  {
    word: "fair",
    partOfSpeech: "adjective",
    definition: "Treating people equally and without favoritism; just and in accordance with rules.",
    keyConcepts: [
      { keyword: "equal", matchTerms: ["equal", "impartial", "unbiased", "neutral", "even-handed", "balanced", "non-discriminatory", "just"], label: "Treating people equally", hint: "The definition says 'treating people equally and without favoritism' -- no preference." },
      { keyword: "just", matchTerms: ["just", "right", "proper", "correct", "reasonable", "legitimate", "lawful", "ethical", "moral", "fair"], label: "Just and according to rules", hint: "The definition says 'just and in accordance with rules' -- following proper standards." },
    ],
    synonyms: ["just", "impartial", "equitable"],
  },
  {
    word: "focused",
    partOfSpeech: "adjective",
    definition: "Directing one's attention toward a single goal or point; having clear purpose.",
    keyConcepts: [
      { keyword: "directing attention", matchTerms: ["directing attention", "concentrated", "intent", "attentive", "engaged", "diligent", "dedicated"], label: "Directing attention", hint: "The definition says 'directing one's attention toward a single goal' -- not distracted." },
      { keyword: "clear purpose", matchTerms: ["clear purpose", "purposeful", "driven", "goal-oriented", "deliberate", "determined", "steady"], label: "Clear purpose", hint: "The definition says 'having clear purpose' -- knowing what one is aiming for." },
    ],
    synonyms: ["concentrated", "purposeful", "intent"],
  },
  {
    word: "forward",
    partOfSpeech: "adjective",
    definition: "Directed toward the front or the future; bold or assertive in manner.",
    keyConcepts: [
      { keyword: "toward future", matchTerms: ["toward future", "ahead", "onward", "progressive", "advance", "moving forward", "forward-looking"], label: "Toward the future", hint: "The definition says 'directed toward the front or the future' -- in the direction of progress." },
      { keyword: "bold", matchTerms: ["bold", "assertive", "confident", "direct", "presumptuous", "uninhibited", "proactive", "pushing ahead"], label: "Bold or assertive", hint: "The definition says 'bold or assertive in manner' -- not holding back." },
    ],
    synonyms: ["ahead", "progressive", "assertive"],
  },
  {
    word: "functional",
    partOfSpeech: "adjective",
    definition: "Designed to be practical and useful; working or operating properly.",
    keyConcepts: [
      { keyword: "practical", matchTerms: ["practical", "useful", "purposeful", "utilitarian", "efficient", "applicable", "working", "serviceable"], label: "Practical and useful", hint: "The definition says 'designed to be practical and useful' -- serving its purpose." },
      { keyword: "working properly", matchTerms: ["working properly", "operational", "operative", "running", "in service", "functioning", "effective"], label: "Working or operating properly", hint: "The definition says 'working or operating properly' -- not broken or decorative." },
    ],
    synonyms: ["practical", "operational", "useful"],
  },
  {
    word: "global",
    partOfSpeech: "adjective",
    definition: "Relating to the whole world; comprehensive and involving all aspects.",
    keyConcepts: [
      { keyword: "whole world", matchTerms: ["whole world", "worldwide", "international", "universal", "planetary", "all nations", "everywhere"], label: "Relating to the whole world", hint: "The definition says 'relating to the whole world' -- not limited to one region." },
      { keyword: "comprehensive", matchTerms: ["comprehensive", "all-inclusive", "overall", "complete", "total", "general", "sweeping", "broad"], label: "Comprehensive", hint: "The definition says 'comprehensive and involving all aspects' -- nothing excluded." },
    ],
    synonyms: ["worldwide", "international", "comprehensive"],
  },
  {
    word: "honest",
    partOfSpeech: "adjective",
    definition: "Free from deceit; truthful and sincere.",
    keyConcepts: [
      { keyword: "free from deceit", matchTerms: ["free from deceit", "truthful", "sincere", "genuine", "transparent", "candid", "frank", "open"], label: "Free from deceit", hint: "The definition says 'free from deceit' -- not lying or hiding." },
      { keyword: "sincere", matchTerms: ["sincere", "authentic", "real", "straight", "direct", "forthright", "guileless", "unpretentious"], label: "Truthful and sincere", hint: "The definition says 'truthful and sincere' -- meaning what one says." },
    ],
    synonyms: ["truthful", "sincere", "candid"],
  },
  {
    word: "ideal",
    partOfSpeech: "adjective",
    definition: "Satisfying one's conception of what is perfect; most suitable.",
    keyConcepts: [
      { keyword: "perfect", matchTerms: ["perfect", "best possible", "optimal", "flawless", "excellent", "supreme", "quintessential", "exemplary"], label: "Satisfying conception of perfect", hint: "The definition says 'satisfying one's conception of what is perfect' -- the imagined best." },
      { keyword: "suitable", matchTerms: ["suitable", "appropriate", "fitting", "right", "best", "desirable", "preferred", "well-suited"], label: "Most suitable", hint: "The definition says 'most suitable' -- the best match for the need." },
    ],
    synonyms: ["perfect", "optimal", "exemplary"],
  },
  {
    word: "immediate",
    partOfSpeech: "adjective",
    definition: "Occurring or done at once; nearest in time or order.",
    keyConcepts: [
      { keyword: "at once", matchTerms: ["at once", "instant", "right away", "prompt", "quick", "without delay", "instantaneous", "now"], label: "Occurring at once", hint: "The definition says 'occurring or done at once' -- no waiting." },
      { keyword: "nearest in time", matchTerms: ["nearest in time", "direct", "closest", "most urgent", "next", "proximate", "adjacent"], label: "Nearest in time", hint: "The definition says 'nearest in time or order' -- what is right there." },
    ],
    synonyms: ["instant", "prompt", "direct"],
  },
  {
    word: "inclusive",
    partOfSpeech: "adjective",
    definition: "Including everything or everyone; not excluding any groups of people.",
    keyConcepts: [
      { keyword: "including everyone", matchTerms: ["including everyone", "encompassing", "broad", "comprehensive", "open", "universal", "welcoming", "diverse"], label: "Including everyone", hint: "The definition says 'including everything or everyone' -- no exclusions." },
      { keyword: "not excluding", matchTerms: ["not excluding", "equal", "fair", "accessible", "open to all", "non-discriminatory", "accepting"], label: "Not excluding groups", hint: "The definition says 'not excluding any groups' -- active inclusion." },
    ],
    synonyms: ["comprehensive", "open", "welcoming"],
  },
  {
    word: "independent",
    partOfSpeech: "adjective",
    definition: "Not depending on others; free from outside control or support.",
    keyConcepts: [
      { keyword: "not depending", matchTerms: ["not depending", "self-sufficient", "autonomous", "self-reliant", "free", "separate", "individual", "own"], label: "Not depending on others", hint: "The definition says 'not depending on others' -- standing alone." },
      { keyword: "control", matchTerms: ["control", "influence", "authority", "direction", "interference", "support", "backing", "reliance"], label: "Free from outside control", hint: "The definition says 'free from outside control or support' -- autonomous." },
    ],
    synonyms: ["autonomous", "self-reliant", "free"],
  },
  {
    word: "indirect",
    partOfSpeech: "adjective",
    definition: "Not going in a straight line; not stating something directly.",
    keyConcepts: [
      { keyword: "not straight line", matchTerms: ["not straight", "circuitous", "roundabout", "winding", "meandering", "off-course", "oblique"], label: "Not a straight line", hint: "The definition says 'not going in a straight line' -- taking a longer route." },
      { keyword: "not stating directly", matchTerms: ["not stating directly", "implied", "hinted", "allusive", "roundabout", "subtle", "veiled"], label: "Not stating directly", hint: "The definition says 'not stating something directly' -- implying rather than saying." },
    ],
    synonyms: ["roundabout", "oblique", "implied"],
  },
  {
    word: "informed",
    partOfSpeech: "adjective",
    definition: "Having or showing knowledge about a particular subject or situation.",
    keyConcepts: [
      { keyword: "knowledge", matchTerms: ["knowledge", "aware", "knowledgeable", "educated", "understanding", "up to date", "clued up"], label: "Having knowledge", hint: "The definition says 'having or showing knowledge about a particular subject' -- being in the know." },
      { keyword: "particular subject", matchTerms: ["particular subject", "relevant", "topic", "field", "area", "matter", "issue", "question"], label: "About a subject", hint: "The definition says 'about a particular subject or situation' -- specific knowledge." },
    ],
    synonyms: ["knowledgeable", "educated", "aware"],
  },
  {
    word: "innovative",
    partOfSpeech: "adjective",
    definition: "Featuring new methods or ideas; introducing something new and original.",
    keyConcepts: [
      { keyword: "new methods", matchTerms: ["new methods", "creative", "original", "fresh", "novel", "inventive", "pioneering", "groundbreaking", "cutting-edge"], label: "New methods or ideas", hint: "The definition says 'featuring new methods or ideas' -- doing things differently." },
      { keyword: "original", matchTerms: ["original", "unique", "unprecedented", "first-of-its-kind", "new", "revolutionary", "trailblazing"], label: "New and original", hint: "The definition says 'introducing something new and original' -- creating from scratch." },
    ],
    synonyms: ["creative", "original", "pioneering"],
  },
  {
    word: "intentional",
    partOfSpeech: "adjective",
    definition: "Done deliberately and on purpose; not accidental.",
    keyConcepts: [
      { keyword: "deliberate", matchTerms: ["deliberate", "planned", "purposeful", "calculated", "conscious", "designed", "premeditated", "considered"], label: "Done deliberately", hint: "The definition says 'done deliberately and on purpose' -- chosen, not random." },
      { keyword: "not accidental", matchTerms: ["not accidental", "on purpose", "meant", "voluntary", "willful", "mindful", "aware"], label: "Not accidental", hint: "The definition says 'not accidental' -- the opposite of coincidence." },
    ],
    synonyms: ["deliberate", "purposeful", "planned"],
  },
  {
    word: "interested",
    partOfSpeech: "adjective",
    definition: "Showing curiosity or concern about something; having a personal stake in something.",
    keyConcepts: [
      { keyword: "curious", matchTerms: ["curious", "engaged", "attentive", "fascinated", "keen", "invested", "concerned", "enthusiastic"], label: "Showing curiosity", hint: "The definition says 'showing curiosity or concern about something' -- paying attention." },
      { keyword: "personal stake", matchTerms: ["personal stake", "involved", "affected", "partial", "biased", "motivated", "invested"], label: "Personal stake", hint: "The definition says 'having a personal stake in something' -- not disinterested." },
    ],
    synonyms: ["curious", "engaged", "involved"],
  },
  {
    word: "measured",
    partOfSpeech: "adjective",
    definition: "Slow and regular in rhythm; carefully considered and controlled.",
    keyConcepts: [
      { keyword: "slow and regular", matchTerms: ["slow and regular", "steady", "even", "deliberate", "rhythmic", "unhurried", "controlled", "paced"], label: "Slow and regular", hint: "The definition says 'slow and regular in rhythm' -- a careful pace." },
      { keyword: "carefully considered", matchTerms: ["carefully considered", "restrained", "cautious", "thoughtful", "moderate", "calculated", "judicious"], label: "Carefully considered", hint: "The definition says 'carefully considered and controlled' -- not impulsive." },
    ],
    synonyms: ["deliberate", "controlled", "steady"],
  },
  {
    word: "mindful",
    partOfSpeech: "adjective",
    definition: "Conscious and aware of something; attentive to the present moment.",
    keyConcepts: [
      { keyword: "conscious", matchTerms: ["conscious", "aware", "attentive", "alert", "thoughtful", "heedful", "cognizant", "knowing"], label: "Conscious and aware", hint: "The definition says 'conscious and aware of something' -- actively noticing." },
      { keyword: "present moment", matchTerms: ["present moment", "now", "current", "immediate", "here", "engaged", "focused", "in the moment"], label: "Attentive to present moment", hint: "The definition says 'attentive to the present moment' -- mindfulness practice." },
    ],
    synonyms: ["aware", "attentive", "conscious"],
  },
  {
    word: "motivated",
    partOfSpeech: "adjective",
    definition: "Stimulated to take action; having a strong reason or desire to do something.",
    keyConcepts: [
      { keyword: "stimulated to act", matchTerms: ["stimulated", "driven", "prompted", "inspired", "moved", "energized", "pushed", "encouraged"], label: "Stimulated to take action", hint: "The definition says 'stimulated to take action' -- the impulse is there." },
      { keyword: "strong desire", matchTerms: ["strong desire", "driven", "ambitious", "determined", "eager", "purposeful", "goal-oriented"], label: "Having strong desire", hint: "The definition says 'having a strong reason or desire to do something' -- inner fuel." },
    ],
    synonyms: ["driven", "inspired", "determined"],
  },
  {
    word: "natural",
    partOfSpeech: "adjective",
    definition: "Existing in or derived from nature; not artificial or affected.",
    keyConcepts: [
      { keyword: "from nature", matchTerms: ["from nature", "organic", "wild", "native", "inherent", "innate", "biological", "elemental"], label: "Existing in nature", hint: "The definition says 'existing in or derived from nature' -- not made by humans." },
      { keyword: "not artificial", matchTerms: ["not artificial", "genuine", "authentic", "spontaneous", "unaffected", "real", "unforced"], label: "Not artificial", hint: "The definition says 'not artificial or affected' -- the opposite of contrived." },
    ],
    synonyms: ["organic", "genuine", "innate"],
  },
  {
    word: "necessary",
    partOfSpeech: "adjective",
    definition: "Required to be done or present; absolutely needed.",
    keyConcepts: [
      { keyword: "required", matchTerms: ["required", "needed", "essential", "mandatory", "obligatory", "compulsory", "vital", "indispensable"], label: "Required", hint: "The definition says 'required to be done or present' -- not optional." },
      { keyword: "absolutely needed", matchTerms: ["absolutely needed", "must have", "crucial", "critical", "fundamental", "key", "basic", "imperative"], label: "Absolutely needed", hint: "The definition says 'absolutely needed' -- without it things fall apart." },
    ],
    synonyms: ["essential", "required", "vital"],
  },
  {
    word: "optimal",
    partOfSpeech: "adjective",
    definition: "Best or most effective under specific conditions; maximally efficient.",
    keyConcepts: [
      { keyword: "best", matchTerms: ["best", "most effective", "ideal", "perfect", "finest", "top", "peak", "superior", "prime", "excellent"], label: "Best under conditions", hint: "The definition says 'best or most effective under specific conditions' -- the gold standard." },
      { keyword: "efficient", matchTerms: ["efficient", "maximally effective", "optimized", "streamlined", "high-performing", "productive"], label: "Maximally efficient", hint: "The definition says 'maximally efficient' -- nothing wasted." },
    ],
    synonyms: ["best", "ideal", "efficient"],
  },
  {
    word: "organized",
    partOfSpeech: "adjective",
    definition: "Arranged in a systematic order; having a structured and efficient approach.",
    keyConcepts: [
      { keyword: "systematic order", matchTerms: ["systematic", "ordered", "structured", "tidy", "neat", "methodical", "planned", "arranged", "classified"], label: "Systematic order", hint: "The definition says 'arranged in a systematic order' -- everything in its place." },
      { keyword: "structured approach", matchTerms: ["structured approach", "efficient", "managed", "coordinated", "disciplined", "logical"], label: "Structured and efficient approach", hint: "The definition says 'having a structured and efficient approach' -- good system." },
    ],
    synonyms: ["systematic", "structured", "tidy"],
  },
  {
    word: "original",
    partOfSpeech: "adjective",
    definition: "Present from the beginning; creative and not derivative; not a copy.",
    keyConcepts: [
      { keyword: "from the beginning", matchTerms: ["from the beginning", "first", "initial", "earliest", "founding", "primary", "source", "root"], label: "Present from the beginning", hint: "The definition says 'present from the beginning' -- the first instance." },
      { keyword: "not a copy", matchTerms: ["not a copy", "creative", "unique", "novel", "fresh", "innovative", "authentic", "genuine", "new"], label: "Not a copy", hint: "The definition says 'not a copy' -- primary rather than derivative." },
    ],
    synonyms: ["first", "unique", "authentic"],
  },
  {
    word: "personal",
    partOfSpeech: "adjective",
    definition: "Belonging to or affecting a particular person; relating to private matters.",
    keyConcepts: [
      { keyword: "belonging to a person", matchTerms: ["belonging to a person", "individual", "own", "private", "private", "one's own", "singular", "unique"], label: "Belonging to a person", hint: "The definition says 'belonging to or affecting a particular person' -- individual ownership." },
      { keyword: "private", matchTerms: ["private", "intimate", "confidential", "sensitive", "internal", "subjective", "individual", "specific"], label: "Relating to private matters", hint: "The definition says 'relating to private matters' -- not for everyone." },
    ],
    synonyms: ["individual", "private", "intimate"],
  },
  {
    word: "positive",
    partOfSpeech: "adjective",
    definition: "Constructive and confident; indicating presence or truth rather than absence.",
    keyConcepts: [
      { keyword: "constructive", matchTerms: ["constructive", "optimistic", "hopeful", "upbeat", "good", "beneficial", "encouraging", "favorable"], label: "Constructive and confident", hint: "The definition says 'constructive and confident' -- a helpful and forward-looking stance." },
      { keyword: "indicating presence", matchTerms: ["indicating presence", "confirming", "verified", "true", "certain", "definite", "affirmative"], label: "Indicating presence or truth", hint: "The definition says 'indicating presence or truth' -- the scientific or technical meaning." },
    ],
    synonyms: ["constructive", "optimistic", "affirmative"],
  },
  {
    word: "practical",
    partOfSpeech: "adjective",
    definition: "Relating to actual use or action rather than theory; sensible and realistic.",
    keyConcepts: [
      { keyword: "actual use", matchTerms: ["actual use", "applied", "real-world", "functional", "hands-on", "operative", "working", "concrete", "tangible"], label: "Relating to actual use", hint: "The definition says 'relating to actual use or action rather than theory' -- grounded in the real." },
      { keyword: "sensible", matchTerms: ["sensible", "realistic", "pragmatic", "reasonable", "workable", "down-to-earth", "useful", "rational"], label: "Sensible and realistic", hint: "The definition says 'sensible and realistic' -- not impractical or idealistic." },
    ],
    synonyms: ["sensible", "applied", "realistic"],
  },
  {
    word: "primary",
    partOfSpeech: "adjective",
    definition: "Of chief importance; earliest in time or order.",
    keyConcepts: [
      { keyword: "chief importance", matchTerms: ["chief importance", "main", "principal", "foremost", "key", "first", "most important", "top", "major"], label: "Chief importance", hint: "The definition says 'of chief importance' -- the most important one." },
      { keyword: "earliest", matchTerms: ["earliest", "first", "original", "initial", "foundational", "basic", "fundamental"], label: "Earliest in time or order", hint: "The definition says 'earliest in time or order' -- the first in a sequence." },
    ],
    synonyms: ["main", "chief", "principal"],
  },
  {
    word: "principal",
    partOfSpeech: "adjective",
    definition: "First in order of importance; a person in a leading position.",
    keyConcepts: [
      { keyword: "most important", matchTerms: ["most important", "chief", "leading", "primary", "foremost", "key", "main", "dominant", "central"], label: "First in importance", hint: "The definition says 'first in order of importance' -- the most significant." },
      { keyword: "leading person", matchTerms: ["leading person", "head", "director", "authority", "chief", "boss", "leader", "figurehead"], label: "Person in leading position", hint: "The definition says 'a person in a leading position' -- in charge." },
    ],
    synonyms: ["chief", "main", "leading"],
  },
  {
    word: "proactive",
    partOfSpeech: "adjective",
    definition: "Creating or controlling a situation by causing things to happen rather than responding.",
    keyConcepts: [
      { keyword: "creating", matchTerms: ["creating", "initiating", "causing", "anticipating", "acting ahead", "taking the lead", "preventing", "controlling"], label: "Creating or controlling", hint: "The definition says 'creating or controlling a situation by causing things to happen' -- acting first." },
      { keyword: "rather than responding", matchTerms: ["rather than responding", "anticipating", "forward-looking", "preparatory", "preventive", "initiative"], label: "Rather than just responding", hint: "The definition says 'rather than responding' -- the contrast with reactive behavior." },
    ],
    synonyms: ["initiative", "anticipatory", "forward-thinking"],
  },
  {
    word: "productive",
    partOfSpeech: "adjective",
    definition: "Producing a lot of work or results; achieving a great deal.",
    keyConcepts: [
      { keyword: "producing", matchTerms: ["producing", "generating", "creating", "yielding", "outputting", "delivering", "contributing", "efficient"], label: "Producing work or results", hint: "The definition says 'producing a lot of work or results' -- high output." },
      { keyword: "achieving", matchTerms: ["achieving", "successful", "efficient", "effective", "fruitful", "worthwhile", "useful", "beneficial"], label: "Achieving a great deal", hint: "The definition says 'achieving a great deal' -- making the most of time and effort." },
    ],
    synonyms: ["efficient", "fruitful", "effective"],
  },
  {
    word: "qualified",
    partOfSpeech: "adjective",
    definition: "Having the necessary qualifications, skills, or experience; limited or modified.",
    keyConcepts: [
      { keyword: "qualifications", matchTerms: ["qualifications", "skills", "experience", "training", "credentials", "expertise", "suitability", "competence"], label: "Having necessary qualifications", hint: "The definition says 'having the necessary qualifications, skills, or experience' -- meeting the bar." },
      { keyword: "limited", matchTerms: ["limited", "modified", "conditional", "restricted", "partial", "with reservations", "with conditions"], label: "Limited or modified", hint: "The definition says 'limited or modified' -- not absolute, with some conditions." },
    ],
    synonyms: ["certified", "competent", "eligible"],
  },
  {
    word: "relevant",
    partOfSpeech: "adjective",
    definition: "Closely connected to the matter at hand; appropriate and applicable.",
    keyConcepts: [
      { keyword: "closely connected", matchTerms: ["closely connected", "applicable", "pertinent", "related", "germane", "appropriate", "fitting", "on-topic"], label: "Closely connected", hint: "The definition says 'closely connected to the matter at hand' -- directly on-topic." },
      { keyword: "applicable", matchTerms: ["applicable", "useful", "important", "meaningful", "current", "significant", "helpful", "valid"], label: "Appropriate and applicable", hint: "The definition says 'appropriate and applicable' -- fitting the context." },
    ],
    synonyms: ["pertinent", "applicable", "appropriate"],
  },
  {
    word: "responsible",
    partOfSpeech: "adjective",
    definition: "Having an obligation to do something; being the cause of something.",
    keyConcepts: [
      { keyword: "obligation", matchTerms: ["obligation", "accountable", "answerable", "liable", "charged with", "in charge", "duty-bound"], label: "Having an obligation", hint: "The definition says 'having an obligation to do something' -- owning the duty." },
      { keyword: "being the cause", matchTerms: ["being the cause", "at fault", "culpable", "to blame", "responsible", "source", "origin"], label: "Being the cause", hint: "The definition says 'being the cause of something' -- the second sense, causal responsibility." },
    ],
    synonyms: ["accountable", "obligated", "culpable"],
  },
  {
    word: "rigid",
    partOfSpeech: "adjective",
    definition: "Unable to bend or be forced out of shape; not flexible in behavior or opinion.",
    keyConcepts: [
      { keyword: "unable to bend", matchTerms: ["unable to bend", "stiff", "inflexible", "firm", "hard", "solid", "unyielding", "unbending"], label: "Unable to bend", hint: "The definition says 'unable to bend or be forced out of shape' -- physical stiffness." },
      { keyword: "inflexible", matchTerms: ["inflexible", "unyielding", "stubborn", "strict", "intractable", "set", "uncompromising"], label: "Inflexible in behavior", hint: "The definition says 'not flexible in behavior or opinion' -- resistant to change." },
    ],
    synonyms: ["stiff", "inflexible", "unyielding"],
  },
  {
    word: "routine",
    partOfSpeech: "noun",
    definition: "A regular sequence of actions that is followed repeatedly; a standard procedure.",
    keyConcepts: [
      { keyword: "regular sequence", matchTerms: ["regular", "sequence", "practice", "habit", "regimen", "pattern", "procedure", "schedule"], label: "Regular sequence of actions", hint: "The definition says 'a regular sequence of actions that is followed repeatedly' -- habitual." },
      { keyword: "standard procedure", matchTerms: ["standard", "procedure", "protocol", "norm", "usual way", "default", "formula", "system"], label: "Standard procedure", hint: "The definition says 'a standard procedure' -- the established way of doing things." },
    ],
    synonyms: ["habit", "schedule", "procedure"],
  },
  {
    word: "selective",
    partOfSpeech: "adjective",
    definition: "Tending to choose carefully; relating to a process that selects.",
    keyConcepts: [
      { keyword: "choose carefully", matchTerms: ["choose carefully", "discriminating", "discerning", "particular", "picky", "careful", "choosy"], label: "Choose carefully", hint: "The definition says 'tending to choose carefully' -- not accepting everything." },
      { keyword: "process that selects", matchTerms: ["process that selects", "filtering", "screening", "admissions", "qualifying", "sorting", "choosing"], label: "Relating to selection", hint: "The definition says 'relating to a process that selects' -- the mechanism of selection." },
    ],
    synonyms: ["discriminating", "discerning", "careful"],
  },
  {
    word: "significant",
    partOfSpeech: "adjective",
    definition: "Important enough to merit attention; noteworthy or meaningful.",
    keyConcepts: [
      { keyword: "important", matchTerms: ["important", "consequential", "notable", "meaningful", "major", "serious", "substantial", "weighty"], label: "Important enough to notice", hint: "The definition says 'important enough to merit attention' -- worth noticing." },
      { keyword: "noteworthy", matchTerms: ["noteworthy", "considerable", "marked", "sizable", "appreciable", "nontrivial", "real", "genuine"], label: "Noteworthy or meaningful", hint: "The definition says 'noteworthy or meaningful' -- not negligible." },
    ],
    synonyms: ["important", "notable", "meaningful"],
  },
  {
    word: "simple",
    partOfSpeech: "adjective",
    definition: "Easily understood or done; not complicated or elaborate.",
    keyConcepts: [
      { keyword: "easily understood", matchTerms: ["easily understood", "clear", "plain", "straightforward", "obvious", "direct", "basic", "uncomplicated"], label: "Easily understood", hint: "The definition says 'easily understood or done' -- no difficulty needed." },
      { keyword: "not complicated", matchTerms: ["not complicated", "unadorned", "elementary", "pure", "plain", "modest", "unpretentious"], label: "Not complicated or elaborate", hint: "The definition says 'not complicated or elaborate' -- stripped down." },
    ],
    synonyms: ["easy", "clear", "uncomplicated"],
  },
  {
    word: "strategic",
    partOfSpeech: "adjective",
    definition: "Relating to the planning of how to achieve a goal; forming part of a long-term plan.",
    keyConcepts: [
      { keyword: "planning", matchTerms: ["planning", "deliberate", "calculated", "intentional", "purposeful", "designed", "targeted", "systematic"], label: "Relating to planning", hint: "The definition says 'relating to the planning of how to achieve a goal' -- big-picture thinking." },
      { keyword: "long-term plan", matchTerms: ["long-term", "goal", "vision", "direction", "roadmap", "future-oriented", "broad", "overarching"], label: "Part of long-term plan", hint: "The definition says 'forming part of a long-term plan' -- looking ahead." },
    ],
    synonyms: ["deliberate", "planned", "calculated"],
  },
  {
    word: "sufficient",
    partOfSpeech: "adjective",
    definition: "Enough to meet a need or purpose; adequate.",
    keyConcepts: [
      { keyword: "enough", matchTerms: ["enough", "adequate", "satisfactory", "ample", "acceptable", "competent", "suitable", "fitting", "proper"], label: "Enough for a purpose", hint: "The definition says 'enough to meet a need or purpose' -- the minimum required." },
      { keyword: "adequate", matchTerms: ["adequate", "meets standard", "passes muster", "satisfies requirement", "good enough", "does the job"], label: "Adequate", hint: "The definition says 'adequate' -- not excessive, not insufficient." },
    ],
    synonyms: ["adequate", "enough", "satisfactory"],
  },
  {
    word: "systematic",
    partOfSpeech: "adjective",
    definition: "Done according to a fixed plan or method; methodical.",
    keyConcepts: [
      { keyword: "fixed plan", matchTerms: ["fixed plan", "structured", "organized", "methodical", "ordered", "planned", "procedural", "logical"], label: "Done according to a fixed plan", hint: "The definition says 'done according to a fixed plan or method' -- following a structure." },
      { keyword: "methodical", matchTerms: ["methodical", "thorough", "careful", "diligent", "precise", "step-by-step", "regular", "systematic"], label: "Methodical", hint: "The definition says 'methodical' -- the core meaning." },
    ],
    synonyms: ["methodical", "structured", "organized"],
  },
  {
    word: "tactical",
    partOfSpeech: "adjective",
    definition: "Relating to tactics; carefully planned to achieve a specific end.",
    keyConcepts: [
      { keyword: "tactics", matchTerms: ["tactics", "strategy", "maneuver", "technique", "approach", "plan", "method", "practical", "operational"], label: "Relating to tactics", hint: "The definition says 'relating to tactics' -- the means to an end." },
      { keyword: "carefully planned", matchTerms: ["carefully planned", "deliberate", "calculated", "precise", "targeted", "designed", "skilled"], label: "Carefully planned", hint: "The definition says 'carefully planned to achieve a specific end' -- done with purpose." },
    ],
    synonyms: ["strategic", "deliberate", "calculated"],
  },
  {
    word: "targeted",
    partOfSpeech: "adjective",
    definition: "Aimed at a specific group or goal; deliberate and focused.",
    keyConcepts: [
      { keyword: "aimed at specific", matchTerms: ["aimed at specific", "deliberate", "focused", "intentional", "directed", "tailored", "precise"], label: "Aimed at specific group", hint: "The definition says 'aimed at a specific group or goal' -- not random." },
      { keyword: "focused", matchTerms: ["focused", "selective", "concentrated", "purposeful", "designed", "strategic", "calculated"], label: "Focused and deliberate", hint: "The definition says 'deliberate and focused' -- everything directed at the target." },
    ],
    synonyms: ["deliberate", "focused", "precise"],
  },
  {
    word: "thoughtful",
    partOfSpeech: "adjective",
    definition: "Absorbed in contemplation; showing consideration for others.",
    keyConcepts: [
      { keyword: "contemplation", matchTerms: ["contemplation", "reflective", "pensive", "meditative", "deliberate", "considered", "careful", "deep"], label: "Absorbed in contemplation", hint: "The definition says 'absorbed in contemplation' -- deeply thinking." },
      { keyword: "consideration for others", matchTerms: ["consideration", "caring", "kind", "attentive", "sensitive", "mindful", "empathetic"], label: "Consideration for others", hint: "The definition says 'showing consideration for others' -- being aware of their needs." },
    ],
    synonyms: ["reflective", "considerate", "caring"],
  },
  {
    word: "typical",
    partOfSpeech: "adjective",
    definition: "Having the distinctive qualities of a type; representative of a class.",
    keyConcepts: [
      { keyword: "distinctive qualities", matchTerms: ["distinctive qualities", "representative", "characteristic", "classic", "standard", "normal", "usual"], label: "Distinctive qualities of type", hint: "The definition says 'having the distinctive qualities of a type' -- embodying the category." },
      { keyword: "representative", matchTerms: ["representative", "exemplary", "archetypal", "normal", "average", "common", "ordinary", "expected"], label: "Representative of class", hint: "The definition says 'representative of a class' -- standing for the whole." },
    ],
    synonyms: ["representative", "characteristic", "standard"],
  },
  {
    word: "unified",
    partOfSpeech: "adjective",
    definition: "Made into a whole; brought together as one.",
    keyConcepts: [
      { keyword: "made into whole", matchTerms: ["made into whole", "combined", "integrated", "merged", "consolidated", "joined", "united", "one"], label: "Made into a whole", hint: "The definition says 'made into a whole' -- separate things becoming one." },
      { keyword: "brought together", matchTerms: ["brought together", "coordinated", "aligned", "cohesive", "harmonious", "consistent", "singular"], label: "Brought together as one", hint: "The definition says 'brought together as one' -- the result of unification." },
    ],
    synonyms: ["combined", "integrated", "united"],
  },
  {
    word: "useful",
    partOfSpeech: "adjective",
    definition: "Able to be used for a practical purpose; beneficial and effective.",
    keyConcepts: [
      { keyword: "practical purpose", matchTerms: ["practical purpose", "helpful", "functional", "handy", "serviceable", "effective", "productive", "applied"], label: "Practical purpose", hint: "The definition says 'able to be used for a practical purpose' -- serving a real need." },
      { keyword: "beneficial", matchTerms: ["beneficial", "valuable", "worthwhile", "advantageous", "good", "constructive", "positive", "rewarding"], label: "Beneficial and effective", hint: "The definition says 'beneficial and effective' -- genuinely helping." },
    ],
    synonyms: ["helpful", "functional", "beneficial"],
  },
  {
    word: "willing",
    partOfSpeech: "adjective",
    definition: "Ready to do something without being forced; consenting freely.",
    keyConcepts: [
      { keyword: "ready to do", matchTerms: ["ready", "prepared", "disposed", "inclined", "eager", "happy", "amenable", "content", "agreeable"], label: "Ready to do", hint: "The definition says 'ready to do something without being forced' -- voluntary readiness." },
      { keyword: "without being forced", matchTerms: ["without being forced", "voluntary", "freely", "unconstrained", "spontaneous", "on own accord"], label: "Without being forced", hint: "The definition says 'without being forced' -- the key of willingness." },
    ],
    synonyms: ["ready", "eager", "voluntary"],
  },
  {
    word: "approach",
    partOfSpeech: "noun",
    definition: "A way of dealing with something; a method or strategy for tackling a problem.",
    keyConcepts: [
      { keyword: "way of dealing", matchTerms: ["way", "method", "means", "strategy", "technique", "manner", "mode", "style", "path", "route"], label: "Way of dealing with", hint: "The definition says 'a way of dealing with something' -- a chosen method." },
      { keyword: "tackling", matchTerms: ["tackling", "solving", "handling", "addressing", "working on", "confronting", "managing", "dealing"], label: "Tackling a problem", hint: "The definition says 'for tackling a problem' -- the practical dimension." },
    ],
    synonyms: ["method", "strategy", "technique"],
  },
  {
    word: "behavior",
    partOfSpeech: "noun",
    definition: "The way in which a person or animal acts; the manner of conducting oneself.",
    keyConcepts: [
      { keyword: "way of acting", matchTerms: ["way of acting", "conduct", "actions", "manner", "performance", "response", "habits", "patterns"], label: "Way of acting", hint: "The definition says 'the way in which a person acts' -- observable actions." },
      { keyword: "manner", matchTerms: ["manner", "bearing", "demeanor", "deportment", "attitude", "style", "approach", "presentation"], label: "Manner of conducting", hint: "The definition says 'the manner of conducting oneself' -- how one carries oneself." },
    ],
    synonyms: ["conduct", "manner", "actions"],
  },
  {
    word: "belief",
    partOfSpeech: "noun",
    definition: "An acceptance that something exists or is true; trust or confidence in something.",
    keyConcepts: [
      { keyword: "acceptance", matchTerms: ["acceptance", "conviction", "view", "opinion", "faith", "trust", "assumption", "idea", "principle"], label: "Acceptance as true", hint: "The definition says 'an acceptance that something exists or is true' -- holding it as fact." },
      { keyword: "trust", matchTerms: ["trust", "confidence", "faith", "reliance", "dependence", "certainty", "credence", "assurance"], label: "Trust or confidence", hint: "The definition says 'trust or confidence in something' -- relying on it emotionally." },
    ],
    synonyms: ["conviction", "faith", "opinion"],
  },
  {
    word: "clarity",
    partOfSpeech: "noun",
    definition: "The quality of being clear and easy to understand; freedom from obscurity or confusion.",
    keyConcepts: [
      { keyword: "clear", matchTerms: ["clear", "transparent", "plain", "obvious", "understandable", "lucid", "straightforward", "simple", "easy to understand"], label: "Clear and easy to understand", hint: "The definition says 'clear and easy to understand' -- no confusion." },
      { keyword: "freedom from confusion", matchTerms: ["freedom from confusion", "precision", "directness", "simplicity", "coherence", "order", "definition"], label: "Freedom from obscurity", hint: "The definition says 'freedom from obscurity or confusion' -- not muddled." },
    ],
    synonyms: ["clearness", "transparency", "lucidity"],
  },
  {
    word: "commitment",
    partOfSpeech: "noun",
    definition: "The state or quality of being dedicated to a cause or activity; a pledge or undertaking.",
    keyConcepts: [
      { keyword: "dedicated", matchTerms: ["dedicated", "devoted", "loyal", "engaged", "faithful", "invested", "involved", "resolute", "steadfast"], label: "Being dedicated", hint: "The definition says 'dedicated to a cause or activity' -- all-in." },
      { keyword: "pledge", matchTerms: ["pledge", "promise", "obligation", "vow", "undertaking", "duty", "word", "agreement", "contract"], label: "A pledge or undertaking", hint: "The definition says 'a pledge or undertaking' -- a formal or personal promise." },
    ],
    synonyms: ["dedication", "pledge", "devotion"],
  },
  {
    word: "complexity",
    partOfSpeech: "noun",
    definition: "The state of being intricate and difficult to understand; many interconnected parts.",
    keyConcepts: [
      { keyword: "intricate", matchTerms: ["intricate", "difficult", "involved", "elaborate", "complicated", "nuanced", "layered", "deep"], label: "Intricate and difficult", hint: "The definition says 'the state of being intricate and difficult to understand' -- hard to grasp." },
      { keyword: "interconnected parts", matchTerms: ["interconnected parts", "multiple elements", "interrelated", "interdependent", "web", "system"], label: "Many interconnected parts", hint: "The definition says 'many interconnected parts' -- structural complexity." },
    ],
    synonyms: ["intricacy", "difficulty", "nuance"],
  },
  {
    word: "concept",
    partOfSpeech: "noun",
    definition: "An abstract idea or general notion; a plan or intention.",
    keyConcepts: [
      { keyword: "abstract idea", matchTerms: ["abstract idea", "notion", "idea", "thought", "principle", "theory", "construct", "representation"], label: "Abstract idea or notion", hint: "The definition says 'an abstract idea or general notion' -- existing as a mental category." },
      { keyword: "plan", matchTerms: ["plan", "intention", "design", "vision", "goal", "proposal", "scheme", "outline", "framework"], label: "A plan or intention", hint: "The definition says 'a plan or intention' -- the practical dimension of concept." },
    ],
    synonyms: ["idea", "notion", "principle"],
  },
  {
    word: "concern",
    partOfSpeech: "noun",
    definition: "A feeling of worry about something; something that matters to a person.",
    keyConcepts: [
      { keyword: "worry", matchTerms: ["worry", "anxiety", "unease", "apprehension", "care", "trouble", "fear", "disquiet", "preoccupation"], label: "A feeling of worry", hint: "The definition says 'a feeling of worry about something' -- anxious care." },
      { keyword: "matters", matchTerms: ["matters", "importance", "interest", "relevance", "business", "affair", "responsibility", "stake"], label: "Something that matters", hint: "The definition says 'something that matters to a person' -- a personal stake or interest." },
    ],
    synonyms: ["worry", "issue", "matter"],
  },
  {
    word: "consequence",
    partOfSpeech: "noun",
    definition: "A result or effect of an action or condition; something that follows logically.",
    keyConcepts: [
      { keyword: "result", matchTerms: ["result", "effect", "outcome", "impact", "repercussion", "aftermath", "upshot", "product", "end result"], label: "A result or effect", hint: "The definition says 'a result or effect of an action or condition' -- what follows." },
      { keyword: "follows logically", matchTerms: ["follows logically", "implication", "inference", "deduction", "natural result", "conclusion"], label: "Something that follows", hint: "The definition says 'something that follows logically' -- the logical endpoint." },
    ],
    synonyms: ["result", "outcome", "repercussion"],
  },
  {
    word: "culture",
    partOfSpeech: "noun",
    definition: "The ideas, customs, and social behavior of a particular society; refinement of the mind.",
    keyConcepts: [
      { keyword: "customs", matchTerms: ["customs", "traditions", "beliefs", "practices", "values", "norms", "way of life", "society", "behavior"], label: "Customs and social behavior", hint: "The definition says 'the ideas, customs, and social behavior of a particular society' -- its way of life." },
      { keyword: "refinement", matchTerms: ["refinement", "sophistication", "education", "cultivation", "arts", "knowledge", "intellectual"], label: "Refinement of the mind", hint: "The definition says 'refinement of the mind' -- the arts and intellectual dimension." },
    ],
    synonyms: ["tradition", "society", "refinement"],
  },
  {
    word: "decision",
    partOfSpeech: "noun",
    definition: "A choice made after consideration; a formal judgment or conclusion.",
    keyConcepts: [
      { keyword: "choice", matchTerms: ["choice", "selection", "option", "conclusion", "determination", "verdict", "ruling", "resolution"], label: "Choice after consideration", hint: "The definition says 'a choice made after consideration' -- deliberate selection." },
      { keyword: "formal judgment", matchTerms: ["formal judgment", "verdict", "ruling", "decree", "pronouncement", "finding", "declaration"], label: "Formal judgment", hint: "The definition says 'a formal judgment or conclusion' -- an official or authoritative decision." },
    ],
    synonyms: ["choice", "verdict", "resolution"],
  },
  {
    word: "direction",
    partOfSpeech: "noun",
    definition: "The course that must be taken; guidance or instruction on what to do.",
    keyConcepts: [
      { keyword: "course to take", matchTerms: ["course", "path", "way", "route", "bearing", "heading", "orientation", "aim", "trajectory"], label: "Course to take", hint: "The definition says 'the course that must be taken' -- a line of travel or action." },
      { keyword: "guidance", matchTerms: ["guidance", "instruction", "leadership", "management", "oversight", "advice", "command", "steering"], label: "Guidance on what to do", hint: "The definition says 'guidance or instruction on what to do' -- showing the way." },
    ],
    synonyms: ["course", "guidance", "path"],
  },
  {
    word: "diversity",
    partOfSpeech: "noun",
    definition: "The state of being varied or having a wide range; a range of different things.",
    keyConcepts: [
      { keyword: "varied", matchTerms: ["varied", "variety", "range", "breadth", "multiplicity", "mix", "assortment", "plurality", "spectrum"], label: "Being varied", hint: "The definition says 'the state of being varied or having a wide range' -- many different kinds." },
      { keyword: "different things", matchTerms: ["different things", "people", "ideas", "cultures", "backgrounds", "perspectives", "types", "forms"], label: "A range of different things", hint: "The definition says 'a range of different things' -- not uniform or homogeneous." },
    ],
    synonyms: ["variety", "range", "multiplicity"],
  },
  {
    word: "effort",
    partOfSpeech: "noun",
    definition: "A vigorous or determined attempt; the use of physical or mental energy.",
    keyConcepts: [
      { keyword: "determined attempt", matchTerms: ["determined attempt", "try", "endeavor", "striving", "work", "exertion", "application"], label: "A determined attempt", hint: "The definition says 'a vigorous or determined attempt' -- committed trying." },
      { keyword: "energy", matchTerms: ["energy", "exertion", "labor", "force", "work", "output", "power", "application", "drive"], label: "Use of energy", hint: "The definition says 'the use of physical or mental energy' -- the resource expended." },
    ],
    synonyms: ["attempt", "exertion", "work"],
  },
  {
    word: "element",
    partOfSpeech: "noun",
    definition: "A component part of a larger whole; one of the basic substances in chemistry.",
    keyConcepts: [
      { keyword: "component part", matchTerms: ["component", "part", "piece", "ingredient", "factor", "aspect", "unit", "constituent", "feature"], label: "A component part", hint: "The definition says 'a component part of a larger whole' -- one piece of something bigger." },
      { keyword: "basic substance", matchTerms: ["basic substance", "matter", "substance", "chemical", "mineral", "compound", "material", "atom"], label: "Basic substance", hint: "The definition says 'one of the basic substances in chemistry' -- a fundamental building block." },
    ],
    synonyms: ["component", "ingredient", "substance"],
  },
  {
    word: "emotion",
    partOfSpeech: "noun",
    definition: "A strong feeling such as love or fear; the mental state behind a feeling.",
    keyConcepts: [
      { keyword: "strong feeling", matchTerms: ["strong feeling", "feeling", "sentiment", "passion", "reaction", "response", "affect", "mood"], label: "A strong feeling", hint: "The definition says 'a strong feeling such as love or fear' -- intense inner state." },
      { keyword: "mental state", matchTerms: ["mental state", "psychological", "inner", "mind", "heart", "experience", "attitude", "awareness"], label: "Mental state behind feeling", hint: "The definition says 'the mental state behind a feeling' -- the cognitive dimension." },
    ],
    synonyms: ["feeling", "sentiment", "mood"],
  },
  {
    word: "emphasis",
    partOfSpeech: "noun",
    definition: "Special importance or attention given to something; the force or stress put on a word.",
    keyConcepts: [
      { keyword: "special importance", matchTerms: ["special importance", "attention", "focus", "priority", "stress", "weight", "significance", "prominence"], label: "Special importance", hint: "The definition says 'special importance or attention given to something' -- highlighting it." },
      { keyword: "stress on a word", matchTerms: ["stress", "accent", "force", "intonation", "inflection", "pronunciation", "spoken emphasis"], label: "Force or stress on a word", hint: "The definition says 'the force or stress put on a word' -- vocal dimension." },
    ],
    synonyms: ["stress", "importance", "priority"],
  },
  {
    word: "environment",
    partOfSpeech: "noun",
    definition: "The surroundings in which a person, animal, or plant lives; the natural world.",
    keyConcepts: [
      { keyword: "surroundings", matchTerms: ["surroundings", "setting", "context", "conditions", "circumstances", "atmosphere", "habitat", "world"], label: "Surroundings one lives in", hint: "The definition says 'the surroundings in which something lives' -- the context of existence." },
      { keyword: "natural world", matchTerms: ["natural world", "nature", "ecosystem", "ecology", "planet", "earth", "wilderness", "outdoors"], label: "The natural world", hint: "The definition says 'the natural world' -- the planet and its systems." },
    ],
    synonyms: ["surroundings", "habitat", "setting"],
  },
  {
    word: "evidence",
    partOfSpeech: "noun",
    definition: "The available facts or information that indicate whether a belief is true.",
    keyConcepts: [
      { keyword: "facts or information", matchTerms: ["facts", "information", "data", "proof", "signs", "clues", "grounds", "support", "documentation"], label: "Available facts", hint: "The definition says 'the available facts or information' -- the raw material for judgment." },
      { keyword: "indicate belief", matchTerms: ["indicate", "support", "prove", "show", "confirm", "suggest", "substantiate", "verify"], label: "Indicate whether true", hint: "The definition says 'indicate whether a belief is true' -- its function in reasoning." },
    ],
    synonyms: ["proof", "facts", "indication"],
  },
  {
    word: "expectation",
    partOfSpeech: "noun",
    definition: "A strong belief that something will happen; a belief that good things will come.",
    keyConcepts: [
      { keyword: "strong belief", matchTerms: ["strong belief", "anticipation", "hope", "assumption", "presumption", "conviction", "prediction", "outlook"], label: "Strong belief something will happen", hint: "The definition says 'a strong belief that something will happen' -- confident anticipation." },
      { keyword: "good things", matchTerms: ["good things", "hope", "optimism", "desired outcome", "wish", "aspiration", "standard", "requirement"], label: "Belief good things will come", hint: "The definition says 'a belief that good things will come' -- positive expectation." },
    ],
    synonyms: ["anticipation", "hope", "assumption"],
  },
  {
    word: "experience",
    partOfSpeech: "noun",
    definition: "Practical contact with something; the knowledge gained from doing or seeing things.",
    keyConcepts: [
      { keyword: "practical contact", matchTerms: ["practical contact", "hands-on", "involvement", "encounter", "participation", "exposure"], label: "Practical contact", hint: "The definition says 'practical contact with something' -- being there." },
      { keyword: "knowledge gained", matchTerms: ["knowledge gained", "wisdom", "learning", "insight", "skill", "background", "understanding"], label: "Knowledge gained", hint: "The definition says 'the knowledge gained from doing or seeing things' -- what experience teaches." },
    ],
    synonyms: ["practice", "knowledge", "involvement"],
  },
  {
    word: "feedback",
    partOfSpeech: "noun",
    definition: "Information about reactions to a product or performance, used to improve it.",
    keyConcepts: [
      { keyword: "information", matchTerms: ["information", "response", "reaction", "evaluation", "assessment", "input", "opinion", "commentary"], label: "Information about reactions", hint: "The definition says 'information about reactions to a product or performance' -- responses gathered." },
      { keyword: "improve", matchTerms: ["improve", "correct", "change", "adjust", "refine", "develop", "enhance", "grow", "better"], label: "Used to improve", hint: "The definition says 'used to improve it' -- the purpose of feedback." },
    ],
    synonyms: ["response", "input", "evaluation"],
  },
  {
    word: "framework",
    partOfSpeech: "noun",
    definition: "A basic structure or system that supports something; an outline of rules or principles.",
    keyConcepts: [
      { keyword: "basic structure", matchTerms: ["basic structure", "foundation", "system", "skeleton", "scaffold", "support", "architecture"], label: "Basic structure", hint: "The definition says 'a basic structure that supports something' -- the underlying form." },
      { keyword: "rules or principles", matchTerms: ["rules", "principles", "guidelines", "outline", "structure", "set of ideas", "model", "approach"], label: "Outline of rules or principles", hint: "The definition says 'an outline of rules or principles' -- the organizing logic." },
    ],
    synonyms: ["structure", "system", "foundation"],
  },
  {
    word: "goal",
    partOfSpeech: "noun",
    definition: "The object of a person's efforts or ambition; the purpose toward which work is directed.",
    keyConcepts: [
      { keyword: "object of efforts", matchTerms: ["object", "aim", "target", "objective", "end", "destination", "aspiration", "ambition", "intention"], label: "Object of efforts", hint: "The definition says 'the object of a person's efforts or ambition' -- what one is trying to reach." },
      { keyword: "purpose", matchTerms: ["purpose", "direction", "motivation", "reason", "meaning", "point", "driving force"], label: "Purpose of work", hint: "The definition says 'the purpose toward which work is directed' -- why one works." },
    ],
    synonyms: ["aim", "objective", "target"],
  },
  {
    word: "growth",
    partOfSpeech: "noun",
    definition: "The process of increasing in size, number, or importance; development.",
    keyConcepts: [
      { keyword: "increasing", matchTerms: ["increasing", "expansion", "rise", "gain", "development", "enlargement", "augmentation", "progress"], label: "Increasing in size or importance", hint: "The definition says 'the process of increasing in size, number, or importance' -- positive change." },
      { keyword: "development", matchTerms: ["development", "maturation", "evolution", "advancement", "improvement", "flourishing"], label: "Development", hint: "The definition says 'development' -- the broader sense of growth." },
    ],
    synonyms: ["development", "expansion", "progress"],
  },
  {
    word: "identity",
    partOfSpeech: "noun",
    definition: "The characteristics that make a person or thing unique; who someone is.",
    keyConcepts: [
      { keyword: "who someone is", matchTerms: ["who someone is", "self", "individuality", "character", "nature", "essence", "being", "person"], label: "Who someone is", hint: "The definition says 'who someone is' -- the core of selfhood." },
      { keyword: "unique characteristics", matchTerms: ["unique characteristics", "traits", "features", "qualities", "attributes", "defining marks"], label: "Characteristics that make unique", hint: "The definition says 'the characteristics that make a person or thing unique' -- what sets it apart." },
    ],
    synonyms: ["self", "individuality", "character"],
  },
  {
    word: "implication",
    partOfSpeech: "noun",
    definition: "A conclusion that can be drawn from something; the effect that something will have.",
    keyConcepts: [
      { keyword: "conclusion", matchTerms: ["conclusion", "inference", "meaning", "suggestion", "hint", "indication", "deduction", "interpretation"], label: "Conclusion that can be drawn", hint: "The definition says 'a conclusion that can be drawn from something' -- the logical follow-on." },
      { keyword: "effect", matchTerms: ["effect", "consequence", "impact", "outcome", "result", "significance", "ramification", "upshot"], label: "Effect that it will have", hint: "The definition says 'the effect that something will have' -- its downstream influence." },
    ],
    synonyms: ["inference", "consequence", "suggestion"],
  },
  {
    word: "insight",
    partOfSpeech: "noun",
    definition: "An accurate and deep understanding of something; an instance of this understanding.",
    keyConcepts: [
      { keyword: "understanding", matchTerms: ["understanding", "comprehension", "perception", "awareness", "grasp", "appreciation", "knowledge", "clarity"], label: "Accurate deep understanding", hint: "The definition says 'an accurate and deep understanding of something' -- genuine comprehension." },
      { keyword: "accurate", matchTerms: ["accurate", "penetrating", "sharp", "clear-eyed", "astute", "discerning", "perceptive", "true"], label: "Accurate understanding", hint: "The definition says 'accurate' and 'deep' -- not superficial, not mistaken." },
    ],
    synonyms: ["understanding", "perception", "clarity"],
  },
  {
    word: "interaction",
    partOfSpeech: "noun",
    definition: "Communication or direct involvement with someone or something.",
    keyConcepts: [
      { keyword: "communication", matchTerms: ["communication", "exchange", "dialogue", "engagement", "conversation", "contact", "connection"], label: "Communication with others", hint: "The definition says 'communication or direct involvement with someone' -- engaging with others." },
      { keyword: "involvement", matchTerms: ["involvement", "participation", "engagement", "relationship", "encounter", "dealing", "interface"], label: "Direct involvement", hint: "The definition says 'direct involvement with someone or something' -- active engagement." },
    ],
    synonyms: ["communication", "engagement", "exchange"],
  },
  {
    word: "knowledge",
    partOfSpeech: "noun",
    definition: "Facts, information, or understanding acquired through experience or education.",
    keyConcepts: [
      { keyword: "facts", matchTerms: ["facts", "information", "data", "content", "details", "substance", "learning", "understanding", "intelligence"], label: "Facts and information", hint: "The definition says 'facts, information, or understanding' -- what is known." },
      { keyword: "acquired", matchTerms: ["acquired", "learned", "gained", "developed", "gathered", "accumulated", "obtained", "studied", "experienced"], label: "Acquired through experience", hint: "The definition says 'acquired through experience or education' -- how it is gained." },
    ],
    synonyms: ["understanding", "information", "learning"],
  },
  {
    word: "language",
    partOfSpeech: "noun",
    definition: "A system of communication using spoken or written words; the vocabulary of a field.",
    keyConcepts: [
      { keyword: "system of communication", matchTerms: ["system", "communication", "words", "speech", "writing", "expression", "tongue", "idiom"], label: "System of communication", hint: "The definition says 'a system of communication using spoken or written words' -- how humans speak." },
      { keyword: "vocabulary", matchTerms: ["vocabulary", "terminology", "lexicon", "jargon", "dialect", "style", "usage", "form"], label: "Vocabulary of a field", hint: "The definition says 'the vocabulary of a field' -- specialized language." },
    ],
    synonyms: ["speech", "communication", "vocabulary"],
  },
  {
    word: "leadership",
    partOfSpeech: "noun",
    definition: "The action of leading a group; the quality of a good leader.",
    keyConcepts: [
      { keyword: "leading a group", matchTerms: ["leading", "guiding", "directing", "managing", "heading", "commanding", "overseeing", "running"], label: "Leading a group", hint: "The definition says 'the action of leading a group' -- being in charge." },
      { keyword: "good leader", matchTerms: ["good leader", "vision", "inspiration", "authority", "command", "influence", "quality", "character"], label: "Quality of a good leader", hint: "The definition says 'the quality of a good leader' -- the traits that make someone effective." },
    ],
    synonyms: ["guidance", "command", "management"],
  },
  {
    word: "logic",
    partOfSpeech: "noun",
    definition: "Reasoning conducted according to strict principles of validity; a system of reasoning.",
    keyConcepts: [
      { keyword: "reasoning", matchTerms: ["reasoning", "rationale", "argument", "thinking", "thought process", "deduction", "inference"], label: "Reasoning by principles", hint: "The definition says 'reasoning conducted according to strict principles of validity' -- structured thinking." },
      { keyword: "system", matchTerms: ["system", "framework", "method", "structure", "approach", "model", "set of rules", "sequence"], label: "System of reasoning", hint: "The definition says 'a system of reasoning' -- an organized way of thinking." },
    ],
    synonyms: ["reasoning", "rationale", "argument"],
  },
  {
    word: "mechanism",
    partOfSpeech: "noun",
    definition: "A system of parts working together; the way something works or is brought about.",
    keyConcepts: [
      { keyword: "system of parts", matchTerms: ["system", "structure", "device", "machine", "apparatus", "process", "assembly", "workings"], label: "System of parts", hint: "The definition says 'a system of parts working together' -- components in operation." },
      { keyword: "way it works", matchTerms: ["way it works", "process", "means", "method", "procedure", "operation", "how", "logic"], label: "The way it works", hint: "The definition says 'the way something works or is brought about' -- the underlying logic." },
    ],
    synonyms: ["system", "process", "workings"],
  },
  {
    word: "mindset",
    partOfSpeech: "noun",
    definition: "The established set of attitudes and beliefs held by someone.",
    keyConcepts: [
      { keyword: "attitudes", matchTerms: ["attitudes", "beliefs", "outlook", "perspective", "view", "thinking", "orientation", "disposition", "approach"], label: "Established attitudes", hint: "The definition says 'the established set of attitudes and beliefs held by someone' -- a mental framework." },
      { keyword: "established", matchTerms: ["established", "fixed", "settled", "ingrained", "entrenched", "persistent", "characteristic"], label: "Established beliefs", hint: "The definition says 'established' -- these are not temporary views." },
    ],
    synonyms: ["outlook", "attitude", "perspective"],
  },
  {
    word: "narrative",
    partOfSpeech: "noun",
    definition: "A spoken or written account of events; the way a story is told.",
    keyConcepts: [
      { keyword: "account of events", matchTerms: ["account", "story", "description", "report", "record", "chronicle", "tale", "telling"], label: "Account of events", hint: "The definition says 'a spoken or written account of events' -- telling what happened." },
      { keyword: "way a story is told", matchTerms: ["way a story is told", "perspective", "framing", "angle", "lens", "voice", "approach", "version"], label: "Way a story is told", hint: "The definition says 'the way a story is told' -- the craft of narration." },
    ],
    synonyms: ["story", "account", "telling"],
  },
  {
    word: "network",
    partOfSpeech: "noun",
    definition: "An interconnected group or system; a group of contacts for professional help.",
    keyConcepts: [
      { keyword: "interconnected group", matchTerms: ["interconnected group", "system", "web", "grid", "structure", "complex", "matrix", "mesh"], label: "Interconnected group or system", hint: "The definition says 'an interconnected group or system' -- everything connected." },
      { keyword: "contacts", matchTerms: ["contacts", "connections", "colleagues", "associates", "relationships", "links", "circle", "community"], label: "Group of contacts", hint: "The definition says 'a group of contacts for professional help' -- social capital." },
    ],
    synonyms: ["system", "connections", "web"],
  },
  {
    word: "obstacle",
    partOfSpeech: "noun",
    definition: "Something that blocks progress or makes it difficult to proceed; a barrier.",
    keyConcepts: [
      { keyword: "blocks progress", matchTerms: ["blocks progress", "barrier", "hindrance", "impediment", "difficulty", "challenge", "hurdle", "setback", "problem"], label: "Blocks progress", hint: "The definition says 'something that blocks progress' -- preventing forward movement." },
      { keyword: "proceed", matchTerms: ["proceed", "advance", "continue", "go ahead", "move forward", "progress", "carry on"], label: "Makes it difficult to proceed", hint: "The definition says 'makes it difficult to proceed' -- standing in the way." },
    ],
    synonyms: ["barrier", "impediment", "hurdle"],
  },
  {
    word: "opportunity",
    partOfSpeech: "noun",
    definition: "A time or set of circumstances that makes it possible to do something; a chance.",
    keyConcepts: [
      { keyword: "possible", matchTerms: ["possible", "favorable", "chance", "opening", "window", "scope", "prospect", "potential", "means"], label: "Makes something possible", hint: "The definition says 'circumstances that makes it possible to do something' -- a door opening." },
      { keyword: "chance", matchTerms: ["chance", "possibility", "occasion", "moment", "luck", "fortune", "timing", "break"], label: "A chance", hint: "The definition says 'a chance' -- a moment that may not come again." },
    ],
    synonyms: ["chance", "opening", "prospect"],
  },
  {
    word: "policy",
    partOfSpeech: "noun",
    definition: "A course of action adopted by an organization; a set of principles governing decisions.",
    keyConcepts: [
      { keyword: "course of action", matchTerms: ["course of action", "plan", "strategy", "approach", "practice", "procedure", "protocol", "method"], label: "Course of action", hint: "The definition says 'a course of action adopted by an organization' -- a chosen approach." },
      { keyword: "principles governing decisions", matchTerms: ["principles", "rules", "guidelines", "framework", "standards", "requirements", "regulations"], label: "Governing decisions", hint: "The definition says 'a set of principles governing decisions' -- the rules behind choices." },
    ],
    synonyms: ["plan", "procedure", "guidelines"],
  },
  {
    word: "potential",
    partOfSpeech: "noun",
    definition: "Latent qualities or abilities that may develop; the capacity for growth.",
    keyConcepts: [
      { keyword: "latent qualities", matchTerms: ["latent", "unrealized", "undeveloped", "dormant", "promising", "capable", "possible", "embryonic"], label: "Latent qualities", hint: "The definition says 'latent qualities or abilities that may develop' -- not yet realized." },
      { keyword: "capacity for growth", matchTerms: ["capacity", "possibility", "room to grow", "promise", "talent", "raw material", "future"], label: "Capacity for growth", hint: "The definition says 'the capacity for growth' -- what is possible." },
    ],
    synonyms: ["capacity", "promise", "possibility"],
  },
  {
    word: "practice",
    partOfSpeech: "noun",
    definition: "The application of an idea or skill repeatedly; the established method of doing something.",
    keyConcepts: [
      { keyword: "application repeatedly", matchTerms: ["application", "exercise", "training", "rehearsal", "habit", "repetition", "drill", "use"], label: "Applying a skill repeatedly", hint: "The definition says 'the application of an idea or skill repeatedly' -- learning by doing." },
      { keyword: "established method", matchTerms: ["established method", "custom", "tradition", "norm", "convention", "procedure", "routine"], label: "Established method", hint: "The definition says 'the established method of doing something' -- how it is usually done." },
    ],
    synonyms: ["application", "exercise", "custom"],
  },
  {
    word: "principle",
    partOfSpeech: "noun",
    definition: "A fundamental truth or rule that serves as the basis for behavior or reasoning.",
    keyConcepts: [
      { keyword: "fundamental", matchTerms: ["fundamental", "basic", "core", "underlying", "essential", "primary", "key", "foundational"], label: "A fundamental truth or rule", hint: "The definition says 'a fundamental truth or rule' -- something foundational." },
      { keyword: "behavior", matchTerms: ["behavior", "conduct", "reasoning", "action", "decision", "ethics", "morals", "belief", "standard"], label: "Serves as basis for behavior", hint: "The definition says 'serves as the basis for behavior or reasoning' -- guiding action." },
    ],
    synonyms: ["rule", "standard", "foundation"],
  },
  {
    word: "progress",
    partOfSpeech: "noun",
    definition: "Forward or onward movement toward a destination or goal; development.",
    keyConcepts: [
      { keyword: "forward movement", matchTerms: ["forward movement", "advance", "development", "improvement", "growth", "headway", "steps forward"], label: "Forward movement", hint: "The definition says 'forward or onward movement toward a goal' -- moving in the right direction." },
      { keyword: "development", matchTerms: ["development", "improvement", "evolution", "growth", "change", "refinement", "betterment", "advancement"], label: "Development", hint: "The definition says 'development' -- ongoing positive change." },
    ],
    synonyms: ["advancement", "development", "improvement"],
  },
  {
    word: "quality",
    partOfSpeech: "noun",
    definition: "The standard of something as measured against other things; a characteristic or feature.",
    keyConcepts: [
      { keyword: "standard", matchTerms: ["standard", "level", "grade", "caliber", "worth", "value", "excellence", "merit", "degree"], label: "Standard of something", hint: "The definition says 'the standard of something as measured against other things' -- how good it is." },
      { keyword: "characteristic", matchTerms: ["characteristic", "feature", "trait", "property", "attribute", "nature", "aspect", "element"], label: "A characteristic or feature", hint: "The definition says 'a characteristic or feature' -- what something is like." },
    ],
    synonyms: ["standard", "characteristic", "caliber"],
  },
  {
    word: "relationship",
    partOfSpeech: "noun",
    definition: "The way in which two or more people or things are connected; a connection between people.",
    keyConcepts: [
      { keyword: "connected", matchTerms: ["connected", "link", "bond", "tie", "association", "connection", "correlation", "interface"], label: "How things are connected", hint: "The definition says 'the way in which two or more things are connected' -- the nature of the link." },
      { keyword: "connection between people", matchTerms: ["connection", "bond", "partnership", "friendship", "rapport", "affiliation", "association"], label: "Connection between people", hint: "The definition says 'a connection between people' -- the interpersonal sense." },
    ],
    synonyms: ["connection", "bond", "association"],
  },
  {
    word: "relevance",
    partOfSpeech: "noun",
    definition: "The quality of being closely connected to the matter at hand; importance to the subject.",
    keyConcepts: [
      { keyword: "closely connected", matchTerms: ["closely connected", "applicable", "pertinent", "related", "germane", "appropriate", "fitting"], label: "Closely connected to matter", hint: "The definition says 'closely connected to the matter at hand' -- on-topic." },
      { keyword: "importance", matchTerms: ["importance", "significance", "weight", "bearing", "value", "meaningfulness", "merit", "necessity"], label: "Importance to the subject", hint: "The definition says 'importance to the subject' -- why it matters here." },
    ],
    synonyms: ["pertinence", "applicability", "significance"],
  },
  {
    word: "responsibility",
    partOfSpeech: "noun",
    definition: "A duty or obligation to deal with something or take blame if things go wrong.",
    keyConcepts: [
      { keyword: "duty", matchTerms: ["duty", "obligation", "commitment", "role", "task", "function", "charge", "accountability", "onus"], label: "Duty or obligation", hint: "The definition says 'a duty or obligation to deal with something' -- what one must do." },
      { keyword: "blame", matchTerms: ["blame", "accountability", "fault", "liability", "ownership", "credit", "consequence"], label: "Take blame if wrong", hint: "The definition says 'take blame if things go wrong' -- owning outcomes." },
    ],
    synonyms: ["duty", "obligation", "accountability"],
  },
  {
    word: "role",
    partOfSpeech: "noun",
    definition: "The function assumed by or assigned to someone; an actor's part in a play.",
    keyConcepts: [
      { keyword: "function", matchTerms: ["function", "duty", "job", "part", "position", "capacity", "task", "responsibility", "place"], label: "Function or duty", hint: "The definition says 'the function assumed by or assigned to someone' -- what they do." },
      { keyword: "actor's part", matchTerms: ["actor's part", "character", "performance", "portrayal", "acting", "stage role"], label: "Actor's part", hint: "The definition says 'an actor's part in a play' -- a performed character." },
    ],
    synonyms: ["function", "part", "position"],
  },
  {
    word: "scope",
    partOfSpeech: "noun",
    definition: "The extent of the area or subject matter covered by something; opportunity to do something.",
    keyConcepts: [
      { keyword: "extent", matchTerms: ["extent", "range", "scale", "breadth", "reach", "coverage", "span", "size", "area", "domain"], label: "Extent of area covered", hint: "The definition says 'the extent of the area or subject matter covered' -- how much it encompasses." },
      { keyword: "opportunity", matchTerms: ["opportunity", "room", "chance", "space", "latitude", "freedom", "potential", "possibility"], label: "Opportunity to do something", hint: "The definition says 'opportunity to do something' -- the freedom available within a situation." },
    ],
    synonyms: ["range", "extent", "breadth"],
  },
  {
    word: "significance",
    partOfSpeech: "noun",
    definition: "The quality of being worthy of attention; the meaning conveyed by something.",
    keyConcepts: [
      { keyword: "worthy of attention", matchTerms: ["worthy of attention", "importance", "weight", "consequence", "value", "merit", "moment", "gravity"], label: "Worthy of attention", hint: "The definition says 'the quality of being worthy of attention' -- it matters." },
      { keyword: "meaning", matchTerms: ["meaning", "implication", "symbolism", "message", "intent", "substance", "import", "purport"], label: "Meaning conveyed", hint: "The definition says 'the meaning conveyed by something' -- what it says or implies." },
    ],
    synonyms: ["importance", "meaning", "consequence"],
  },
  {
    word: "solution",
    partOfSpeech: "noun",
    definition: "A means of solving a problem; a mixture in which a substance is dissolved.",
    keyConcepts: [
      { keyword: "solving", matchTerms: ["solving", "answer", "fix", "remedy", "resolution", "response", "approach", "method", "outcome", "way"], label: "Means of solving a problem", hint: "The definition says 'a means of solving a problem' -- the answer to a difficulty." },
      { keyword: "mixture", matchTerms: ["mixture", "dissolved", "liquid", "compound", "blend", "chemical", "substance", "dilution", "preparation"], label: "A mixture of substances", hint: "The definition says 'a mixture in which a substance is dissolved' -- chemical solution." },
    ],
    synonyms: ["answer", "resolution", "remedy"],
  },
  {
    word: "system",
    partOfSpeech: "noun",
    definition: "A set of things working together as a whole; a method or set of procedures.",
    keyConcepts: [
      { keyword: "working together", matchTerms: ["working together", "network", "structure", "complex", "arrangement", "whole", "organization"], label: "Things working together", hint: "The definition says 'a set of things working together as a whole' -- integrated components." },
      { keyword: "method", matchTerms: ["method", "procedure", "process", "approach", "way", "scheme", "plan", "framework", "protocol"], label: "A method or procedure", hint: "The definition says 'a method or set of procedures' -- an organized approach." },
    ],
    synonyms: ["structure", "network", "method"],
  },
  {
    word: "tension",
    partOfSpeech: "noun",
    definition: "A feeling of anxiety or strain; a state of conflict between opposing forces.",
    keyConcepts: [
      { keyword: "anxiety or strain", matchTerms: ["anxiety", "strain", "stress", "pressure", "unease", "apprehension", "nervousness", "tightness"], label: "Anxiety or strain", hint: "The definition says 'a feeling of anxiety or strain' -- an uncomfortable state." },
      { keyword: "opposing forces", matchTerms: ["opposing forces", "conflict", "opposition", "disagreement", "friction", "incompatibility"], label: "Conflict between forces", hint: "The definition says 'a state of conflict between opposing forces' -- things pulling against each other." },
    ],
    synonyms: ["strain", "stress", "conflict"],
  },
  {
    word: "uncertainty",
    partOfSpeech: "noun",
    definition: "The state of being unsure; lack of confidence about something.",
    keyConcepts: [
      { keyword: "being unsure", matchTerms: ["being unsure", "doubt", "ambiguity", "unpredictability", "unknown", "vagueness", "instability"], label: "State of being unsure", hint: "The definition says 'the state of being unsure' -- not knowing for certain." },
      { keyword: "lack of confidence", matchTerms: ["lack of confidence", "hesitation", "indecision", "skepticism", "tentativeness", "question"], label: "Lack of confidence", hint: "The definition says 'lack of confidence about something' -- no certainty to stand on." },
    ],
    synonyms: ["doubt", "ambiguity", "unpredictability"],
  },
  {
    word: "value",
    partOfSpeech: "noun",
    definition: "The worth or importance of something; a principle that guides behavior.",
    keyConcepts: [
      { keyword: "worth or importance", matchTerms: ["worth", "importance", "significance", "merit", "benefit", "usefulness", "weight", "price", "quality"], label: "Worth or importance", hint: "The definition says 'the worth or importance of something' -- what it means to have it." },
      { keyword: "principle", matchTerms: ["principle", "ideal", "belief", "standard", "ethic", "norm", "conviction", "guide", "virtue"], label: "A principle guiding behavior", hint: "The definition says 'a principle that guides behavior' -- a moral value." },
    ],
    synonyms: ["worth", "importance", "principle"],
  },
  {
    word: "vision",
    partOfSpeech: "noun",
    definition: "The ability to plan for the future; an imaginative or vivid image in the mind.",
    keyConcepts: [
      { keyword: "plan for future", matchTerms: ["plan for future", "foresight", "direction", "strategy", "ambition", "goal", "purpose", "aim"], label: "Ability to plan for future", hint: "The definition says 'the ability to plan for the future' -- seeing what could be." },
      { keyword: "imaginative image", matchTerms: ["imaginative image", "picture", "dream", "idea", "concept", "imagination", "hallucination"], label: "Imaginative image", hint: "The definition says 'an imaginative or vivid image in the mind' -- a mental picture." },
    ],
    synonyms: ["foresight", "imagination", "ambition"],
  },
  {
    word: "abrupt",
    partOfSpeech: "adjective",
    definition: "Sudden and unexpected; lacking smoothness or courtesy in manner.",
    keyConcepts: [
      { keyword: "sudden", matchTerms: ["sudden", "unexpected", "quick", "sharp", "hasty", "immediate", "unannounced", "surprising", "swift", "without warning"], label: "Sudden and unexpected", hint: "The definition says 'sudden and unexpected' -- something that happens without preparation." },
      { keyword: "curt", matchTerms: ["curt", "blunt", "short", "rude", "brusque", "unceremonious", "discourteous", "terse", "impolite"], label: "Lacking courtesy", hint: "The definition says 'lacking smoothness or courtesy in manner' -- brusque behavior." },
    ],
    synonyms: ["sudden", "curt", "brusque"],
  },
  {
    word: "activist",
    partOfSpeech: "noun",
    definition: "A person who campaigns vigorously for political or social change.",
    keyConcepts: [
      { keyword: "campaigns", matchTerms: ["campaigns", "advocates", "fights", "works", "speaks out", "lobbies", "protests", "rallies", "pushes", "strives"], label: "Campaigns vigorously", hint: "The definition says 'campaigns vigorously' -- active and persistent effort." },
      { keyword: "change", matchTerms: ["change", "reform", "justice", "rights", "cause", "policy", "movement", "society", "politics"], label: "Political or social change", hint: "The definition says 'political or social change' -- what the activist works toward." },
    ],
    synonyms: ["campaigner", "advocate", "reformer"],
  },
  {
    word: "addition",
    partOfSpeech: "noun",
    definition: "The process of adding something to something else; a thing that has been added.",
    keyConcepts: [
      { keyword: "adding", matchTerms: ["adding", "including", "supplementing", "augmenting", "joining", "incorporating", "combining", "increasing"], label: "Process of adding", hint: "The definition says 'the process of adding something' -- the act of combining." },
      { keyword: "thing added", matchTerms: ["thing added", "supplement", "extra", "extension", "adjunct", "appendage", "bonus", "increase", "attachment"], label: "Thing that has been added", hint: "The definition says 'a thing that has been added' -- the new element itself." },
    ],
    synonyms: ["supplement", "extra", "inclusion"],
  },
  {
    word: "admirable",
    partOfSpeech: "adjective",
    definition: "Deserving respect and approval for having positive qualities.",
    keyConcepts: [
      { keyword: "deserving respect", matchTerms: ["deserving respect", "worthy", "praiseworthy", "commendable", "laudable", "meritorious", "estimable"], label: "Deserving respect", hint: "The definition says 'deserving respect and approval' -- earning positive regard." },
      { keyword: "positive qualities", matchTerms: ["positive qualities", "virtuous", "excellent", "good", "admirable", "noble", "impressive"], label: "Positive qualities", hint: "The definition says 'for having positive qualities' -- the source of admiration." },
    ],
    synonyms: ["praiseworthy", "commendable", "worthy"],
  },
  {
    word: "aftermath",
    partOfSpeech: "noun",
    definition: "The consequences or effects that follow a significant or unpleasant event.",
    keyConcepts: [
      { keyword: "consequences", matchTerms: ["consequences", "effects", "results", "outcome", "impact", "fallout", "repercussions", "wake", "residue"], label: "Consequences that follow", hint: "The definition says 'consequences or effects that follow' -- what comes after." },
      { keyword: "event", matchTerms: ["event", "disaster", "crisis", "conflict", "incident", "action", "occurrence", "upheaval", "tragedy"], label: "Follow a significant event", hint: "The definition says 'follow a significant or unpleasant event' -- the trigger for the aftermath." },
    ],
    synonyms: ["consequences", "fallout", "repercussions"],
  },
  {
    word: "agenda",
    partOfSpeech: "noun",
    definition: "A list of items to be discussed at a meeting; a hidden plan or personal motive.",
    keyConcepts: [
      { keyword: "list", matchTerms: ["list", "schedule", "plan", "programme", "order", "timetable", "itinerary", "roster", "lineup"], label: "List of items", hint: "The definition says 'a list of items to be discussed' -- a structured sequence of topics." },
      { keyword: "hidden motive", matchTerms: ["hidden", "motive", "aim", "purpose", "goal", "intent", "plan", "objective", "scheme", "design"], label: "Hidden plan or motive", hint: "The definition says 'a hidden plan or personal motive' -- an underlying intention." },
    ],
    synonyms: ["schedule", "plan", "motive"],
  },
  {
    word: "aggravation",
    partOfSpeech: "noun",
    definition: "The action of making a problem or situation worse; a source of irritation.",
    keyConcepts: [
      { keyword: "worsening", matchTerms: ["worsening", "intensification", "escalation", "compounding", "deepening", "exacerbation", "increase"], label: "Making worse", hint: "The definition says 'making a problem or situation worse' -- adding to the problem." },
      { keyword: "irritation", matchTerms: ["irritation", "annoyance", "frustration", "nuisance", "bother", "provocation", "vexation", "exasperation"], label: "Source of irritation", hint: "The definition says 'a source of irritation' -- something that bothers or annoys." },
    ],
    synonyms: ["irritation", "annoyance", "worsening"],
  },
  {
    word: "alliance",
    partOfSpeech: "noun",
    definition: "A union or association formed for mutual benefit; a formal agreement between parties.",
    keyConcepts: [
      { keyword: "union", matchTerms: ["union", "partnership", "coalition", "association", "confederation", "league", "bond", "connection"], label: "Union or association", hint: "The definition says 'a union or association formed for mutual benefit' -- joining together." },
      { keyword: "mutual", matchTerms: ["mutual", "shared", "common", "cooperative", "joint", "reciprocal", "bilateral", "collective"], label: "Mutual benefit", hint: "The definition says 'for mutual benefit' -- both sides gain something." },
    ],
    synonyms: ["partnership", "coalition", "union"],
  },
  {
    word: "analogy",
    partOfSpeech: "noun",
    definition: "A comparison made to show a similarity between two different things.",
    keyConcepts: [
      { keyword: "comparison", matchTerms: ["comparison", "parallel", "likeness", "similarity", "correspondence", "equivalent", "correlation"], label: "A comparison", hint: "The definition says 'a comparison made to show a similarity' -- drawing a parallel." },
      { keyword: "similarity", matchTerms: ["similarity", "resemblance", "connection", "relationship", "link", "match", "correspondence", "shared quality"], label: "Similarity between things", hint: "The definition says 'similarity between two different things' -- finding common ground." },
    ],
    synonyms: ["comparison", "parallel", "similarity"],
  },
  {
    word: "annoyance",
    partOfSpeech: "noun",
    definition: "The feeling of being slightly angry or impatient; something that causes this feeling.",
    keyConcepts: [
      { keyword: "feeling", matchTerms: ["feeling", "irritation", "frustration", "displeasure", "impatience", "vexation", "bother", "exasperation"], label: "Feeling of irritation", hint: "The definition says 'feeling of being slightly angry or impatient' -- mild negative emotion." },
      { keyword: "cause", matchTerms: ["cause", "source", "nuisance", "bother", "irritant", "problem", "trigger", "thing"], label: "Something that causes it", hint: "The definition says 'something that causes this feeling' -- the source of annoyance." },
    ],
    synonyms: ["irritation", "frustration", "nuisance"],
  },
  {
    word: "appraise",
    partOfSpeech: "verb",
    definition: "To assess the value or quality of something; to evaluate formally.",
    keyConcepts: [
      { keyword: "assess value", matchTerms: ["assess", "evaluate", "judge", "rate", "value", "estimate", "measure", "review", "examine"], label: "Assess value or quality", hint: "The definition says 'assess the value or quality of something' -- formal judgment." },
      { keyword: "formally", matchTerms: ["formally", "officially", "professionally", "systematically", "carefully", "rigorously"], label: "Evaluate formally", hint: "The definition says 'to evaluate formally' -- done in an official or structured way." },
    ],
    synonyms: ["evaluate", "assess", "estimate"],
  },
  {
    word: "aptitude",
    partOfSpeech: "noun",
    definition: "A natural ability or talent for something; a readiness or quickness to learn.",
    keyConcepts: [
      { keyword: "natural ability", matchTerms: ["natural ability", "talent", "gift", "knack", "flair", "skill", "faculty", "capacity", "bent"], label: "Natural ability or talent", hint: "The definition says 'a natural ability or talent for something' -- an innate strength." },
      { keyword: "learn", matchTerms: ["learn", "understand", "grasp", "absorb", "pick up", "develop", "master", "progress"], label: "Readiness to learn", hint: "The definition says 'readiness or quickness to learn' -- natural learning ability." },
    ],
    synonyms: ["talent", "gift", "knack"],
  },
  {
    word: "aspirational",
    partOfSpeech: "adjective",
    definition: "Relating to high ambitions or goals; inspiring hopes and desires.",
    keyConcepts: [
      { keyword: "high ambitions", matchTerms: ["high ambitions", "ambitious", "goal-oriented", "striving", "motivated", "hopeful", "forward-looking"], label: "High ambitions or goals", hint: "The definition says 'relating to high ambitions or goals' -- reaching for the best." },
      { keyword: "inspiring", matchTerms: ["inspiring", "motivating", "uplifting", "encouraging", "idealistic", "visionary", "dream-inspiring"], label: "Inspiring hopes and desires", hint: "The definition says 'inspiring hopes and desires' -- stirring others to want more." },
    ],
    synonyms: ["ambitious", "inspiring", "hopeful"],
  },
  {
    word: "automatic",
    partOfSpeech: "adjective",
    definition: "Working by itself without direct human control; done without conscious thought.",
    keyConcepts: [
      { keyword: "self-operating", matchTerms: ["self-operating", "self-acting", "mechanical", "motorized", "autonomous", "powered", "independent", "electronic"], label: "Working by itself", hint: "The definition says 'working by itself without direct human control' -- operates independently." },
      { keyword: "unconscious", matchTerms: ["unconscious", "instinctive", "reflex", "involuntary", "unthinking", "habitual", "spontaneous", "without thought"], label: "Without conscious thought", hint: "The definition says 'done without conscious thought' -- happens on its own." },
    ],
    synonyms: ["self-operating", "involuntary", "mechanical"],
  },
  {
    word: "awareness",
    partOfSpeech: "noun",
    definition: "Knowledge or understanding of a situation or subject; consciousness of something.",
    keyConcepts: [
      { keyword: "knowledge", matchTerms: ["knowledge", "understanding", "recognition", "perception", "consciousness", "insight", "appreciation", "grasp", "familiarity"], label: "Knowledge of a situation", hint: "The definition says 'knowledge or understanding of a situation' -- being informed." },
      { keyword: "consciousness", matchTerms: ["consciousness", "mindfulness", "attentiveness", "alertness", "cognizance", "realization", "sensitivity"], label: "Consciousness of something", hint: "The definition says 'consciousness of something' -- being mentally present to it." },
    ],
    synonyms: ["consciousness", "understanding", "mindfulness"],
  },
  {
    word: "backing",
    partOfSpeech: "noun",
    definition: "Support or help from others; material used to form a back or support.",
    keyConcepts: [
      { keyword: "support", matchTerms: ["support", "endorsement", "help", "approval", "assistance", "sponsorship", "patronage", "funding", "advocacy"], label: "Support from others", hint: "The definition says 'support or help from others' -- having others behind you." },
      { keyword: "material", matchTerms: ["material", "layer", "reinforcement", "lining", "padding", "base", "foundation", "structure"], label: "Material support", hint: "The definition says 'material used to form a back or support' -- physical backing." },
    ],
    synonyms: ["support", "endorsement", "sponsorship"],
  },
  {
    word: "benchmark",
    partOfSpeech: "noun",
    definition: "A standard or point of reference against which things are compared or assessed.",
    keyConcepts: [
      { keyword: "standard", matchTerms: ["standard", "reference", "measure", "criterion", "yardstick", "norm", "baseline", "marker", "point of comparison"], label: "Standard for comparison", hint: "The definition says 'a standard or point of reference' -- a measuring stick." },
      { keyword: "compare", matchTerms: ["compare", "assess", "evaluate", "measure", "judge", "rate", "rank", "gauge"], label: "Against which things are compared", hint: "The definition says 'against which things are compared or assessed' -- used for judgment." },
    ],
    synonyms: ["standard", "reference", "yardstick"],
  },
  {
    word: "blueprint",
    partOfSpeech: "noun",
    definition: "A design plan or drawing; a detailed plan for achieving something.",
    keyConcepts: [
      { keyword: "design plan", matchTerms: ["design plan", "drawing", "diagram", "schematic", "layout", "draft", "plan", "sketch", "specification"], label: "A design plan", hint: "The definition says 'a design plan or drawing' -- a detailed representation." },
      { keyword: "detailed plan", matchTerms: ["detailed plan", "roadmap", "strategy", "guide", "framework", "outline", "master plan", "vision"], label: "Detailed plan for achieving", hint: "The definition says 'a detailed plan for achieving something' -- the guide forward." },
    ],
    synonyms: ["plan", "design", "roadmap"],
  },
  {
    word: "boundaries",
    partOfSpeech: "noun",
    definition: "Lines that mark the limits of an area; the limits of acceptable behavior.",
    keyConcepts: [
      { keyword: "mark limits", matchTerms: ["mark limits", "border", "edge", "perimeter", "demarcation", "frontier", "extent", "confine"], label: "Mark limits of area", hint: "The definition says 'lines that mark the limits of an area' -- where something ends." },
      { keyword: "acceptable behavior", matchTerms: ["acceptable behavior", "personal limits", "rules", "norms", "standards", "expectations", "constraints"], label: "Limits of acceptable behavior", hint: "The definition says 'the limits of acceptable behavior' -- social and personal lines." },
    ],
    synonyms: ["limits", "borders", "parameters"],
  },
  {
    word: "breadth",
    partOfSpeech: "noun",
    definition: "The distance from one side to another; the wide range or scope of something.",
    keyConcepts: [
      { keyword: "distance side to side", matchTerms: ["distance", "width", "span", "extent", "spread", "expanse", "measure", "size"], label: "Distance side to side", hint: "The definition says 'the distance from one side to another' -- physical width." },
      { keyword: "wide range", matchTerms: ["wide range", "scope", "variety", "coverage", "diversity", "comprehensiveness", "scale", "breadth"], label: "Wide range or scope", hint: "The definition says 'wide range or scope of something' -- how much it covers." },
    ],
    synonyms: ["width", "scope", "range"],
  },
  {
    word: "buffer",
    partOfSpeech: "noun",
    definition: "Something that reduces shock or impact; a neutral area or person that prevents conflict.",
    keyConcepts: [
      { keyword: "reduces shock", matchTerms: ["reduces shock", "cushion", "protection", "insulation", "shield", "guard", "padding", "absorber"], label: "Reduces shock or impact", hint: "The definition says 'something that reduces shock or impact' -- absorbing force." },
      { keyword: "neutral area", matchTerms: ["neutral area", "zone", "intermediary", "separator", "barrier", "space", "gap", "mediator"], label: "Neutral area preventing conflict", hint: "The definition says 'a neutral area or person that prevents conflict' -- keeping parties apart." },
    ],
    synonyms: ["cushion", "shield", "intermediary"],
  },
  {
    word: "careful",
    partOfSpeech: "adjective",
    definition: "Making sure to avoid danger or mistakes; done with attention and caution.",
    keyConcepts: [
      { keyword: "avoid danger", matchTerms: ["avoid danger", "cautious", "watchful", "guarded", "prudent", "alert", "attentive", "wary"], label: "Avoid danger or mistakes", hint: "The definition says 'making sure to avoid danger or mistakes' -- protective alertness." },
      { keyword: "attention", matchTerms: ["attention", "thoroughness", "precision", "care", "diligence", "meticulousness", "deliberateness"], label: "Done with attention", hint: "The definition says 'done with attention and caution' -- careful execution." },
    ],
    synonyms: ["cautious", "attentive", "diligent"],
  },
  {
    word: "certainty",
    partOfSpeech: "noun",
    definition: "The quality of being reliably true; complete confidence that something is the case.",
    keyConcepts: [
      { keyword: "reliably true", matchTerms: ["reliably true", "definite", "confirmed", "guaranteed", "established", "undeniable", "fact"], label: "Reliably true", hint: "The definition says 'the quality of being reliably true' -- no doubt about it." },
      { keyword: "confidence", matchTerms: ["confidence", "assurance", "conviction", "sureness", "trust", "belief", "security"], label: "Complete confidence", hint: "The definition says 'complete confidence that something is the case' -- total trust." },
    ],
    synonyms: ["assurance", "confidence", "conviction"],
  },
  {
    word: "charitable",
    partOfSpeech: "adjective",
    definition: "Generous in giving to those in need; willing to see the best in others.",
    keyConcepts: [
      { keyword: "generous", matchTerms: ["generous", "giving", "philanthropic", "benevolent", "humanitarian", "kind", "open-handed", "liberal"], label: "Generous in giving", hint: "The definition says 'generous in giving to those in need' -- acting for others." },
      { keyword: "best in others", matchTerms: ["best in others", "forgiving", "tolerant", "lenient", "understanding", "kind", "compassionate"], label: "See the best in others", hint: "The definition says 'willing to see the best in others' -- generous in judgment too." },
    ],
    synonyms: ["generous", "benevolent", "giving"],
  },
  {
    word: "civic",
    partOfSpeech: "adjective",
    definition: "Relating to a city, town, or citizens; relating to one's duties as a citizen.",
    keyConcepts: [
      { keyword: "city or town", matchTerms: ["city", "town", "local", "municipal", "community", "urban", "public", "neighborhood", "borough"], label: "Relating to city or citizens", hint: "The definition says 'relating to a city, town, or citizens' -- local and community-based." },
      { keyword: "duties", matchTerms: ["duties", "responsibilities", "obligations", "rights", "participation", "public service", "engagement"], label: "Duties as a citizen", hint: "The definition says 'relating to one's duties as a citizen' -- what membership requires." },
    ],
    synonyms: ["municipal", "public", "community"],
  },
  {
    word: "clash",
    partOfSpeech: "noun",
    definition: "A violent conflict or disagreement; a collision or incompatibility between things.",
    keyConcepts: [
      { keyword: "conflict", matchTerms: ["conflict", "disagreement", "dispute", "opposition", "argument", "fight", "collision", "confrontation", "tension", "friction"], label: "Conflict or disagreement", hint: "The definition says 'violent conflict or disagreement' -- an opposition between forces." },
      { keyword: "incompatible", matchTerms: ["incompatible", "collide", "conflict", "contrast", "contradict", "differ", "opposite", "inconsistent"], label: "Incompatibility", hint: "The definition says 'incompatibility between things' -- things that cannot coexist easily." },
    ],
    synonyms: ["conflict", "collision", "dispute"],
  },
  {
    word: "closure",
    partOfSpeech: "noun",
    definition: "A feeling of resolution or completion after a difficult experience; the act of closing something.",
    keyConcepts: [
      { keyword: "resolution", matchTerms: ["resolution", "conclusion", "finality", "settlement", "peace", "acceptance", "moving on", "completion", "ending"], label: "Feeling of resolution", hint: "The definition says 'feeling of resolution or completion' -- emotional finishing." },
      { keyword: "closing", matchTerms: ["closing", "shut", "seal", "conclude", "complete", "wrap up", "finish", "end", "bring to close"], label: "The act of closing", hint: "The definition says 'the act of closing something' -- bringing something to an end." },
    ],
    synonyms: ["resolution", "ending", "finality"],
  },
  {
    word: "coherence",
    partOfSpeech: "noun",
    definition: "The quality of forming a logical, consistent, and unified whole.",
    keyConcepts: [
      { keyword: "logical", matchTerms: ["logical", "consistent", "rational", "sensible", "orderly", "clear", "connected", "systematic", "sound", "reasoned"], label: "Logical and consistent", hint: "The definition says 'logical, consistent' -- making sense throughout." },
      { keyword: "unified", matchTerms: ["unified", "whole", "integrated", "cohesive", "together", "connected", "harmonious", "organized", "single"], label: "Forming a unified whole", hint: "The definition says 'unified whole' -- all parts fitting together." },
    ],
    synonyms: ["consistency", "unity", "logic"],
  },
  {
    word: "collective",
    partOfSpeech: "adjective",
    definition: "Done by or shared among all members of a group; involving everyone together.",
    keyConcepts: [
      { keyword: "shared", matchTerms: ["shared", "joint", "combined", "communal", "united", "mutual", "cooperative", "team", "common", "together", "group"], label: "Done by a group", hint: "The definition says 'done by or shared among all members of a group' -- involving multiple people." },
      { keyword: "everyone", matchTerms: ["everyone", "all", "whole", "entire", "every member", "community", "group", "body"], label: "Involving everyone", hint: "The definition says 'involving everyone together' -- equally shared among all." },
    ],
    synonyms: ["communal", "shared", "joint"],
  },
  {
    word: "commend",
    partOfSpeech: "verb",
    definition: "To recommend someone or something as worthy; to present something as suitable.",
    keyConcepts: [
      { keyword: "recommend", matchTerms: ["recommend", "praise", "endorse", "advocate", "suggest", "approve", "support", "back", "champion"], label: "Recommend as worthy", hint: "The definition says 'recommend someone or something as worthy' -- speaking in their favor." },
      { keyword: "suitable", matchTerms: ["suitable", "appropriate", "worthy", "deserving", "good", "excellent", "admirable", "fitting"], label: "Present as suitable", hint: "The definition says 'present something as suitable' -- vouching for it." },
    ],
    synonyms: ["praise", "recommend", "endorse"],
  },
  {
    word: "compliant",
    partOfSpeech: "adjective",
    definition: "Meeting requirements or following rules; inclined to agree and do what others want.",
    keyConcepts: [
      { keyword: "meeting requirements", matchTerms: ["meeting requirements", "conforming", "following rules", "obedient", "submissive", "rule-abiding", "adherent"], label: "Meeting requirements", hint: "The definition says 'meeting requirements or following rules' -- doing what is required." },
      { keyword: "agreeable", matchTerms: ["agreeable", "willing", "cooperative", "accommodating", "yielding", "obliging", "pliable", "docile"], label: "Inclined to agree", hint: "The definition says 'inclined to agree and do what others want' -- easy to work with." },
    ],
    synonyms: ["obedient", "cooperative", "conforming"],
  },
  {
    word: "contentment",
    partOfSpeech: "noun",
    definition: "A state of happiness and satisfaction with one's situation.",
    keyConcepts: [
      { keyword: "happiness", matchTerms: ["happiness", "satisfaction", "fulfillment", "peace", "pleasure", "joy", "wellbeing", "ease", "comfort"], label: "State of happiness", hint: "The definition says 'a state of happiness and satisfaction' -- being at peace with what one has." },
      { keyword: "situation", matchTerms: ["situation", "circumstances", "life", "lot", "what one has", "position", "current state"], label: "With one's situation", hint: "The definition says 'with one's situation' -- the happiness comes from acceptance." },
    ],
    synonyms: ["satisfaction", "peace", "fulfillment"],
  },
  {
    word: "continuous",
    partOfSpeech: "adjective",
    definition: "Forming an unbroken whole without interruption; happening without pause.",
    keyConcepts: [
      { keyword: "unbroken", matchTerms: ["unbroken", "uninterrupted", "nonstop", "constant", "steady", "persistent", "ongoing", "ceaseless", "perpetual"], label: "Unbroken whole", hint: "The definition says 'forming an unbroken whole without interruption' -- no gaps." },
      { keyword: "without pause", matchTerms: ["without pause", "without stopping", "sustained", "relentless", "incessant", "unceasing", "flowing"], label: "Without pause", hint: "The definition says 'happening without pause' -- the continuous nature." },
    ],
    synonyms: ["uninterrupted", "constant", "ongoing"],
  },
  {
    word: "conviction",
    partOfSpeech: "noun",
    definition: "A firmly held belief or opinion; the legal finding of someone's guilt.",
    keyConcepts: [
      { keyword: "firmly held belief", matchTerms: ["firmly held", "belief", "view", "principle", "faith", "certainty", "commitment", "position"], label: "Firmly held belief", hint: "The definition says 'a firmly held belief or opinion' -- something deeply believed." },
      { keyword: "finding of guilt", matchTerms: ["finding of guilt", "verdict", "criminal", "sentence", "judgment", "law", "court", "prosecution"], label: "Legal finding of guilt", hint: "The definition says 'the legal finding of someone's guilt' -- a court determination." },
    ],
    synonyms: ["belief", "principle", "verdict"],
  },
  {
    word: "credibility",
    partOfSpeech: "noun",
    definition: "The quality of being trusted and believed; the ability to inspire trust.",
    keyConcepts: [
      { keyword: "trusted", matchTerms: ["trusted", "believable", "reliable", "dependable", "honest", "authentic", "genuine", "reputable", "sound"], label: "Quality of being trusted", hint: "The definition says 'the quality of being trusted and believed' -- that others put faith in it." },
      { keyword: "inspire trust", matchTerms: ["inspire trust", "confidence", "authority", "standing", "reputation", "esteem", "respect", "validity"], label: "Inspire trust", hint: "The definition says 'the ability to inspire trust' -- making others believe you." },
    ],
    synonyms: ["trustworthiness", "believability", "reliability"],
  },
  {
    word: "curiosity",
    partOfSpeech: "noun",
    definition: "A strong desire to know or learn about something; an unusual or interesting thing.",
    keyConcepts: [
      { keyword: "desire to know", matchTerms: ["desire to know", "interest", "inquisitiveness", "wonder", "fascination", "eagerness", "thirst for knowledge"], label: "Strong desire to know", hint: "The definition says 'a strong desire to know or learn about something' -- intellectual hunger." },
      { keyword: "unusual thing", matchTerms: ["unusual thing", "novelty", "wonder", "rarity", "oddity", "interesting object", "curio"], label: "An unusual or interesting thing", hint: "The definition says 'an unusual or interesting thing' -- the object sense of curiosity." },
    ],
    synonyms: ["inquisitiveness", "interest", "wonder"],
  },
  {
    word: "damage",
    partOfSpeech: "noun",
    definition: "Physical harm caused to something; a harmful effect on something.",
    keyConcepts: [
      { keyword: "harm", matchTerms: ["harm", "hurt", "injury", "destruction", "impairment", "ruin", "devastation", "deterioration", "loss", "spoiling"], label: "Physical harm", hint: "The definition says 'physical harm caused to something' -- something broken or harmed." },
      { keyword: "harmful effect", matchTerms: ["harmful", "effect", "consequence", "impact", "result", "deterioration", "undermining", "weakening", "erosion"], label: "Harmful effect", hint: "The definition says 'a harmful effect on something' -- negative impact." },
    ],
    synonyms: ["harm", "injury", "destruction"],
  },
  {
    word: "deadline",
    partOfSpeech: "noun",
    definition: "A time or date by which something must be completed or submitted.",
    keyConcepts: [
      { keyword: "time or date", matchTerms: ["time", "date", "cutoff", "due date", "target date", "end point", "limit", "moment"], label: "A time or date", hint: "The definition says 'a time or date by which something must be completed' -- a fixed point." },
      { keyword: "must be completed", matchTerms: ["must be completed", "done", "finished", "submitted", "delivered", "achieved", "met"], label: "Must be completed", hint: "The definition says 'must be completed or submitted' -- the obligation before the deadline." },
    ],
    synonyms: ["due date", "cutoff", "limit"],
  },
  {
    word: "debate",
    partOfSpeech: "noun",
    definition: "A formal discussion in which opposing arguments are put forward; a public argument.",
    keyConcepts: [
      { keyword: "discussion", matchTerms: ["discussion", "argument", "exchange", "dialogue", "conversation", "talk", "discourse", "deliberation"], label: "Formal discussion", hint: "The definition says 'formal discussion' -- a structured exchange of views." },
      { keyword: "opposing", matchTerms: ["opposing", "opposing sides", "counterargument", "for and against", "different views", "pros and cons", "disagreement"], label: "Opposing arguments", hint: "The definition says 'opposing arguments are put forward' -- there are two or more sides." },
    ],
    synonyms: ["argument", "discussion", "dispute"],
  },
  {
    word: "deepen",
    partOfSpeech: "verb",
    definition: "To make or become more intense, severe, or profound.",
    keyConcepts: [
      { keyword: "intense", matchTerms: ["intense", "profound", "stronger", "greater", "severe", "serious", "meaningful", "thorough", "rich"], label: "More intense or profound", hint: "The definition says 'make or become more intense, severe, or profound' -- going further." },
      { keyword: "make", matchTerms: ["make", "cause", "increase", "heighten", "enhance", "develop", "strengthen", "improve", "grow"], label: "Make something deeper", hint: "The definition says 'to make' -- the active causing of depth." },
    ],
    synonyms: ["intensify", "strengthen", "enhance"],
  },
  {
    word: "deflect",
    partOfSpeech: "verb",
    definition: "To cause something to change direction; to draw attention away from something.",
    keyConcepts: [
      { keyword: "change direction", matchTerms: ["change direction", "divert", "redirect", "bend", "deviate", "turn aside", "swerve", "bounce off"], label: "Change direction", hint: "The definition says 'cause something to change direction' -- altering the path." },
      { keyword: "draw away", matchTerms: ["draw away", "distract", "divert", "shift", "avert", "sidestep", "evade", "dodge", "avoid"], label: "Draw attention away", hint: "The definition says 'draw attention away from something' -- redirecting focus." },
    ],
    synonyms: ["divert", "redirect", "deflect"],
  },
  {
    word: "discipline",
    partOfSpeech: "noun",
    definition: "Training to follow rules; a branch of knowledge; the practice of self-control.",
    keyConcepts: [
      { keyword: "training", matchTerms: ["training", "control", "order", "regulation", "practice", "routine", "structure", "instruction", "rigor"], label: "Training and order", hint: "The definition says 'training to follow rules' -- maintaining control." },
      { keyword: "branch of knowledge", matchTerms: ["branch", "subject", "field", "study", "area", "domain", "specialty", "science"], label: "Branch of knowledge", hint: "The definition says 'a branch of knowledge' -- an academic or professional field." },
    ],
    synonyms: ["order", "field", "self-control"],
  },
  {
    word: "discontent",
    partOfSpeech: "noun",
    definition: "Dissatisfaction with one's circumstances; a feeling of wanting something better.",
    keyConcepts: [
      { keyword: "dissatisfaction", matchTerms: ["dissatisfaction", "unhappiness", "displeasure", "disappointment", "frustration", "resentment", "complaint"], label: "Dissatisfaction", hint: "The definition says 'dissatisfaction with one's circumstances' -- not being pleased." },
      { keyword: "wanting better", matchTerms: ["wanting better", "unfulfilled", "yearning", "restless", "deprived", "lacking", "seeking more"], label: "Wanting something better", hint: "The definition says 'a feeling of wanting something better' -- desire for improvement." },
    ],
    synonyms: ["dissatisfaction", "unhappiness", "unrest"],
  },
  {
    word: "distress",
    partOfSpeech: "noun",
    definition: "Extreme anxiety, sorrow, or pain; a state of danger or great difficulty.",
    keyConcepts: [
      { keyword: "extreme anxiety", matchTerms: ["extreme anxiety", "suffering", "anguish", "hardship", "grief", "worry", "agony", "torment", "pain"], label: "Extreme anxiety or suffering", hint: "The definition says 'extreme anxiety, sorrow, or pain' -- intense distress." },
      { keyword: "danger", matchTerms: ["danger", "difficulty", "trouble", "crisis", "emergency", "peril", "need", "hardship", "strain"], label: "State of danger", hint: "The definition says 'a state of danger or great difficulty' -- a critical situation." },
    ],
    synonyms: ["anguish", "suffering", "difficulty"],
  },
  {
    word: "distrust",
    partOfSpeech: "noun",
    definition: "Doubt or suspicion about the reliability or honesty of someone.",
    keyConcepts: [
      { keyword: "doubt", matchTerms: ["doubt", "suspicion", "skepticism", "mistrust", "uncertainty", "wariness", "reservation", "misgiving"], label: "Doubt or suspicion", hint: "The definition says 'doubt or suspicion about someone' -- not being sure of them." },
      { keyword: "reliability", matchTerms: ["reliability", "honesty", "truthfulness", "integrity", "motives", "trustworthiness", "intentions"], label: "About reliability or honesty", hint: "The definition says 'about the reliability or honesty of someone' -- what is doubted." },
    ],
    synonyms: ["suspicion", "mistrust", "skepticism"],
  },
  {
    word: "doubt",
    partOfSpeech: "noun",
    definition: "A feeling of uncertainty or lack of conviction; a reason for questioning.",
    keyConcepts: [
      { keyword: "uncertainty", matchTerms: ["uncertainty", "unsure", "skepticism", "hesitation", "suspicion", "question", "wavering", "mistrust"], label: "Feeling of uncertainty", hint: "The definition says 'a feeling of uncertainty or lack of conviction' -- not confident." },
      { keyword: "questioning", matchTerms: ["questioning", "reservations", "concern", "misgiving", "qualm", "reservation", "second thought"], label: "Reason for questioning", hint: "The definition says 'a reason for questioning' -- something that gives pause." },
    ],
    synonyms: ["uncertainty", "skepticism", "misgiving"],
  },
  {
    word: "downturn",
    partOfSpeech: "noun",
    definition: "A decline in economic or other activity; a period of decreasing success.",
    keyConcepts: [
      { keyword: "decline", matchTerms: ["decline", "decrease", "drop", "fall", "reduction", "recession", "slump", "contraction", "dip"], label: "A decline in activity", hint: "The definition says 'a decline in economic or other activity' -- things getting worse." },
      { keyword: "success", matchTerms: ["success", "performance", "growth", "prosperity", "output", "business", "trade", "activity"], label: "Period of decreasing success", hint: "The definition says 'a period of decreasing success' -- a trough." },
    ],
    synonyms: ["decline", "slump", "recession"],
  },
  {
    word: "eager",
    partOfSpeech: "adjective",
    definition: "Strongly wanting to do or have something; showing enthusiasm and keenness.",
    keyConcepts: [
      { keyword: "wanting", matchTerms: ["wanting", "keen", "enthusiastic", "motivated", "willing", "desirous", "ready", "longing", "hungry", "anxious"], label: "Strongly wanting", hint: "The definition says 'strongly wanting to do or have something' -- a strong positive desire." },
      { keyword: "enthusiasm", matchTerms: ["enthusiasm", "excitement", "zeal", "energy", "readiness", "keenness", "passion", "spirit", "drive"], label: "Showing enthusiasm", hint: "The definition says 'showing enthusiasm and keenness' -- positive energy toward something." },
    ],
    synonyms: ["keen", "enthusiastic", "motivated"],
  },
  {
    word: "ecosystem",
    partOfSpeech: "noun",
    definition: "A community of organisms interacting with their environment; an interconnected system.",
    keyConcepts: [
      { keyword: "community of organisms", matchTerms: ["community", "organisms", "habitat", "biome", "environment", "nature", "wildlife", "species", "ecology"], label: "Community of organisms", hint: "The definition says 'a community of organisms interacting with their environment' -- nature as a web." },
      { keyword: "interconnected system", matchTerms: ["interconnected", "system", "network", "web", "interdependent", "linked", "complex", "interdependence"], label: "Interconnected system", hint: "The definition says 'an interconnected system' -- everything affecting everything else." },
    ],
    synonyms: ["habitat", "network", "community"],
  },
  {
    word: "elevate",
    partOfSpeech: "verb",
    definition: "To raise to a higher position or level; to improve the quality of.",
    keyConcepts: [
      { keyword: "raise higher", matchTerms: ["raise", "lift", "boost", "promote", "uplift", "heighten", "increase", "advance", "upgrade"], label: "Raise to higher position", hint: "The definition says 'raise to a higher position or level' -- moving upward." },
      { keyword: "improve", matchTerms: ["improve", "enhance", "enrich", "refine", "dignify", "better", "strengthen", "perfect", "glorify"], label: "Improve the quality", hint: "The definition says 'to improve the quality of' -- increasing worth." },
    ],
    synonyms: ["raise", "uplift", "enhance"],
  },
  {
    word: "encode",
    partOfSpeech: "verb",
    definition: "To convert information into a coded form; to put a message into a system of signs.",
    keyConcepts: [
      { keyword: "convert", matchTerms: ["convert", "translate", "transform", "express", "represent", "store", "write", "compile", "format"], label: "Convert into coded form", hint: "The definition says 'convert information into a coded form' -- changing format." },
      { keyword: "signs", matchTerms: ["signs", "symbols", "code", "system", "language", "format", "characters", "notation", "cipher"], label: "A system of signs", hint: "The definition says 'put into a system of signs' -- using a structured system." },
    ],
    synonyms: ["convert", "translate", "encrypt"],
  },
  {
    word: "endorse",
    partOfSpeech: "verb",
    definition: "To declare public approval or support for something; to sign a document to authorize it.",
    keyConcepts: [
      { keyword: "approve", matchTerms: ["approve", "support", "back", "champion", "recommend", "advocate", "uphold", "commend", "sanction", "vouch for"], label: "Declare approval or support", hint: "The definition says 'declare public approval or support' -- publicly backing something." },
      { keyword: "authorize", matchTerms: ["authorize", "sign", "validate", "ratify", "certify", "confirm", "authenticate", "countersign"], label: "Sign to authorize", hint: "The definition says 'sign a document to authorize it' -- formal approval." },
    ],
    synonyms: ["approve", "support", "sanction"],
  },
  {
    word: "equality",
    partOfSpeech: "noun",
    definition: "The state of being equal in rights, opportunities, and status.",
    keyConcepts: [
      { keyword: "equal", matchTerms: ["equal", "same", "equivalent", "fair", "level", "balanced", "uniform", "even", "non-discriminatory"], label: "State of being equal", hint: "The definition says 'state of being equal' -- the same standing." },
      { keyword: "rights", matchTerms: ["rights", "opportunities", "status", "treatment", "access", "standing", "privilege", "recognition"], label: "In rights and opportunities", hint: "The definition says 'in rights, opportunities, and status' -- the dimensions of equality." },
    ],
    synonyms: ["fairness", "equity", "parity"],
  },
  {
    word: "erosion",
    partOfSpeech: "noun",
    definition: "The gradual destruction or wearing away of something; a decline.",
    keyConcepts: [
      { keyword: "gradual destruction", matchTerms: ["gradual destruction", "wearing away", "wearing down", "deterioration", "decay", "loss", "degradation"], label: "Gradual destruction", hint: "The definition says 'the gradual destruction or wearing away' -- slow damage." },
      { keyword: "decline", matchTerms: ["decline", "reduction", "loss", "diminishment", "weakening", "undermining", "attrition"], label: "A decline", hint: "The definition says 'a decline' -- gradual lessening over time." },
    ],
    synonyms: ["wearing away", "decline", "degradation"],
  },
  {
    word: "esteem",
    partOfSpeech: "noun",
    definition: "Respect and admiration held for someone; a high favorable opinion.",
    keyConcepts: [
      { keyword: "respect", matchTerms: ["respect", "admiration", "regard", "honor", "appreciation", "reverence", "value", "high opinion"], label: "Respect and admiration", hint: "The definition says 'respect and admiration held for someone' -- positive regard." },
      { keyword: "favorable opinion", matchTerms: ["favorable opinion", "approval", "good view", "positive assessment", "recognition", "regard"], label: "High favorable opinion", hint: "The definition says 'a high favorable opinion' -- the heart of esteem." },
    ],
    synonyms: ["respect", "admiration", "regard"],
  },
  {
    word: "ethical",
    partOfSpeech: "adjective",
    definition: "Relating to moral principles; morally right and acceptable.",
    keyConcepts: [
      { keyword: "moral", matchTerms: ["moral", "principled", "right", "good", "virtuous", "honest", "upright", "decent", "just", "honorable"], label: "Morally right", hint: "The definition says 'morally right and acceptable' -- conforming to moral standards." },
      { keyword: "principles", matchTerms: ["principles", "standards", "values", "code", "conduct", "norms", "integrity", "character"], label: "Relating to moral principles", hint: "The definition says 'relating to moral principles' -- guided by a moral framework." },
    ],
    synonyms: ["moral", "principled", "virtuous"],
  },
  {
    word: "exemplary",
    partOfSpeech: "adjective",
    definition: "Serving as a good example; representing the best of its kind.",
    keyConcepts: [
      { keyword: "good example", matchTerms: ["good example", "model", "ideal", "representative", "perfect", "finest", "outstanding", "optimal"], label: "A good example", hint: "The definition says 'serving as a good example' -- something to follow or emulate." },
      { keyword: "best of kind", matchTerms: ["best of kind", "excellent", "exceptional", "superior", "top", "admirable", "meritorious"], label: "Representing the best", hint: "The definition says 'representing the best of its kind' -- the finest specimen." },
    ],
    synonyms: ["model", "ideal", "outstanding"],
  },
  {
    word: "exert",
    partOfSpeech: "verb",
    definition: "To apply a force or pressure; to make a strenuous effort.",
    keyConcepts: [
      { keyword: "apply force", matchTerms: ["apply force", "use", "employ", "exercise", "put forth", "bring to bear", "deploy", "utilize"], label: "Apply a force", hint: "The definition says 'to apply a force or pressure' -- putting something into action." },
      { keyword: "strenuous effort", matchTerms: ["strenuous effort", "strain", "work hard", "push oneself", "try hard", "struggle", "labor"], label: "Make a strenuous effort", hint: "The definition says 'to make a strenuous effort' -- working hard." },
    ],
    synonyms: ["apply", "use", "push"],
  },
  {
    word: "expertise",
    partOfSpeech: "noun",
    definition: "A high level of knowledge or skill in a particular area; expert skill.",
    keyConcepts: [
      { keyword: "high level", matchTerms: ["high level", "mastery", "skill", "proficiency", "knowledge", "ability", "competence", "command", "authority"], label: "High level of knowledge", hint: "The definition says 'a high level of knowledge or skill in a particular area' -- advanced ability." },
      { keyword: "particular area", matchTerms: ["particular area", "field", "domain", "subject", "discipline", "specialty", "area of expertise"], label: "In a particular area", hint: "The definition says 'in a particular area' -- specialized knowledge." },
    ],
    synonyms: ["mastery", "skill", "proficiency"],
  },
  {
    word: "expression",
    partOfSpeech: "noun",
    definition: "The process of making thoughts or feelings known; a look on someone's face.",
    keyConcepts: [
      { keyword: "making known", matchTerms: ["making known", "communicating", "showing", "conveying", "stating", "articulating", "voicing", "demonstrating"], label: "Making thoughts or feelings known", hint: "The definition says 'making thoughts or feelings known' -- communicating inner life." },
      { keyword: "look on face", matchTerms: ["look", "face", "appearance", "gesture", "bearing", "manner", "signal", "indication", "showing emotion"], label: "Look on someone's face", hint: "The definition says 'a look on someone's face' -- facial expression." },
    ],
    synonyms: ["communication", "statement", "look"],
  },
  {
    word: "familiarity",
    partOfSpeech: "noun",
    definition: "Close acquaintance with or knowledge of something; the quality of being well known.",
    keyConcepts: [
      { keyword: "knowledge", matchTerms: ["knowledge", "acquaintance", "understanding", "experience", "awareness", "exposure", "intimacy"], label: "Knowledge from experience", hint: "The definition says 'close acquaintance with or knowledge of something' -- built through experience." },
      { keyword: "well known", matchTerms: ["well known", "recognized", "comfortable", "casual", "informal", "at ease", "accustomed", "used to"], label: "The quality of being well known", hint: "The definition says 'the quality of being well known' -- widespread recognition." },
    ],
    synonyms: ["acquaintance", "knowledge", "recognition"],
  },
  {
    word: "fault",
    partOfSpeech: "noun",
    definition: "A mistake or error; a weakness in someone's character; a crack in rock.",
    keyConcepts: [
      { keyword: "mistake", matchTerms: ["mistake", "error", "defect", "flaw", "imperfection", "shortcoming", "failing", "lapse", "slip", "blemish"], label: "A mistake or error", hint: "The definition says 'a mistake or error' -- something gone wrong." },
      { keyword: "weakness", matchTerms: ["weakness", "flaw", "character flaw", "shortcoming", "failing", "vulnerability", "deficiency", "frailty"], label: "Weakness in character", hint: "The definition says 'a weakness in someone's character' -- a personal failing." },
    ],
    synonyms: ["mistake", "flaw", "defect"],
  },
  {
    word: "freedom",
    partOfSpeech: "noun",
    definition: "The power or right to act, speak, or think as one wants; liberty.",
    keyConcepts: [
      { keyword: "power or right", matchTerms: ["power", "right", "liberty", "ability", "permission", "privilege", "entitlement", "authorization", "capacity"], label: "Power or right", hint: "The definition says 'the power or right to act, speak, or think as one wants' -- the ability to do so freely." },
      { keyword: "liberty", matchTerms: ["liberty", "independence", "autonomy", "self-determination", "release", "emancipation", "free will"], label: "Liberty", hint: "The definition says 'liberty' -- the state of being free." },
    ],
    synonyms: ["liberty", "independence", "autonomy"],
  },
  {
    word: "friction",
    partOfSpeech: "noun",
    definition: "Resistance encountered by a surface moving over another; disagreement or tension.",
    keyConcepts: [
      { keyword: "resistance", matchTerms: ["resistance", "drag", "grip", "traction", "abrasion", "rubbing", "opposition", "force", "impedance"], label: "Resistance between surfaces", hint: "The definition says 'resistance encountered by a surface moving over another' -- physical friction." },
      { keyword: "tension", matchTerms: ["tension", "disagreement", "conflict", "discord", "hostility", "strain", "antagonism", "clash", "difficulty"], label: "Disagreement or tension", hint: "The definition says 'disagreement or tension' -- social friction between people." },
    ],
    synonyms: ["resistance", "tension", "conflict"],
  },
  {
    word: "fruitful",
    partOfSpeech: "adjective",
    definition: "Producing useful results or good outcomes; productive and rewarding.",
    keyConcepts: [
      { keyword: "useful results", matchTerms: ["useful results", "productive", "successful", "rewarding", "beneficial", "valuable", "worthwhile", "profitable"], label: "Producing useful results", hint: "The definition says 'producing useful results or good outcomes' -- generative." },
      { keyword: "rewarding", matchTerms: ["rewarding", "satisfying", "fulfilling", "enriching", "meaningful", "positive", "worthwhile", "good"], label: "Productive and rewarding", hint: "The definition says 'productive and rewarding' -- worth the effort." },
    ],
    synonyms: ["productive", "rewarding", "beneficial"],
  },
  {
    word: "gateway",
    partOfSpeech: "noun",
    definition: "An opening or entrance, especially a large one; a means of access to something.",
    keyConcepts: [
      { keyword: "opening", matchTerms: ["opening", "entrance", "entry", "access point", "door", "portal", "passage", "threshold", "entryway"], label: "An opening or entrance", hint: "The definition says 'an opening or entrance, especially a large one' -- a physical entry point." },
      { keyword: "access", matchTerms: ["access", "means", "route", "way", "path", "bridge", "key", "connection", "entry point"], label: "Means of access", hint: "The definition says 'a means of access to something' -- the way to get there." },
    ],
    synonyms: ["entrance", "portal", "entry"],
  },
  {
    word: "generosity",
    partOfSpeech: "noun",
    definition: "The quality of being kind and giving more than necessary; liberality.",
    keyConcepts: [
      { keyword: "kind and giving", matchTerms: ["kind and giving", "generous", "charitable", "liberal", "openhanded", "magnanimous", "benevolent"], label: "Kind and giving", hint: "The definition says 'the quality of being kind and giving more than necessary' -- open-hearted." },
      { keyword: "more than necessary", matchTerms: ["more than necessary", "beyond required", "extra", "liberal", "unstinting", "ample", "lavish"], label: "More than necessary", hint: "The definition says 'giving more than necessary' -- not holding back." },
    ],
    synonyms: ["generousness", "liberality", "magnanimity"],
  },
  {
    word: "gesture",
    partOfSpeech: "noun",
    definition: "A movement of the body to express an idea or feeling; an action done to show consideration.",
    keyConcepts: [
      { keyword: "movement", matchTerms: ["movement", "motion", "sign", "signal", "expression", "action", "indication", "wave", "nod"], label: "Movement to express", hint: "The definition says 'a movement of the body to express an idea or feeling' -- a physical signal." },
      { keyword: "consideration", matchTerms: ["consideration", "show of goodwill", "kindness", "symbol", "token", "act", "demonstration", "signal"], label: "Show consideration", hint: "The definition says 'an action done to show consideration' -- a meaningful act." },
    ],
    synonyms: ["movement", "sign", "action"],
  },
  {
    word: "grounding",
    partOfSpeech: "noun",
    definition: "A thorough basic knowledge or education in a subject; the state of being stable.",
    keyConcepts: [
      { keyword: "basic knowledge", matchTerms: ["basic knowledge", "foundation", "training", "education", "understanding", "basis", "fundamentals"], label: "Thorough basic knowledge", hint: "The definition says 'a thorough basic knowledge or education in a subject' -- solid roots." },
      { keyword: "stable", matchTerms: ["stable", "centered", "balanced", "secure", "practical", "realistic", "down-to-earth", "steady"], label: "State of being stable", hint: "The definition says 'the state of being stable' -- well-anchored." },
    ],
    synonyms: ["foundation", "basis", "stability"],
  },
  {
    word: "harmony",
    partOfSpeech: "noun",
    definition: "A pleasing combination of different parts; a state of peaceful agreement.",
    keyConcepts: [
      { keyword: "pleasing combination", matchTerms: ["pleasing", "combination", "balance", "accord", "unity", "blend", "coherence", "consonance", "fit"], label: "Pleasing combination", hint: "The definition says 'a pleasing combination of different parts' -- parts that work together beautifully." },
      { keyword: "agreement", matchTerms: ["agreement", "peace", "cooperation", "understanding", "goodwill", "accord", "concord", "amity"], label: "Peaceful agreement", hint: "The definition says 'a state of peaceful agreement' -- no conflict." },
    ],
    synonyms: ["balance", "accord", "unity"],
  },
  {
    word: "ignorance",
    partOfSpeech: "noun",
    definition: "Lack of knowledge or information; unawareness of something.",
    keyConcepts: [
      { keyword: "lack of knowledge", matchTerms: ["lack of knowledge", "uninformed", "uneducated", "unaware", "not knowing", "inexperienced", "naive"], label: "Lack of knowledge", hint: "The definition says 'lack of knowledge or information' -- not knowing." },
      { keyword: "unawareness", matchTerms: ["unawareness", "oblivion", "blindness", "naivety", "inexperience", "unknowing", "unfamiliarity"], label: "Unawareness", hint: "The definition says 'unawareness of something' -- not being conscious of it." },
    ],
    synonyms: ["unawareness", "unknowing", "unfamiliarity"],
  },
  {
    word: "illusion",
    partOfSpeech: "noun",
    definition: "A false impression of reality; something that deceives by producing a false impression.",
    keyConcepts: [
      { keyword: "false impression", matchTerms: ["false impression", "misconception", "misperception", "error", "delusion", "mistake", "mirage", "fallacy"], label: "False impression of reality", hint: "The definition says 'a false impression of reality' -- not what it seems." },
      { keyword: "deceives", matchTerms: ["deceives", "tricks", "misleads", "confuses", "distorts", "fools", "creates false belief", "appears false"], label: "Something that deceives", hint: "The definition says 'something that deceives by producing a false impression' -- the mechanism." },
    ],
    synonyms: ["misconception", "mirage", "delusion"],
  },
  {
    word: "imbalance",
    partOfSpeech: "noun",
    definition: "A lack of proportion or difference in amount between related things.",
    keyConcepts: [
      { keyword: "lack of proportion", matchTerms: ["lack of proportion", "disproportion", "asymmetry", "unevenness", "inequality", "irregularity", "skew"], label: "Lack of proportion", hint: "The definition says 'a lack of proportion' -- things not being in their proper ratio." },
      { keyword: "difference", matchTerms: ["difference", "gap", "discrepancy", "inequity", "inconsistency", "variation", "disparity", "imbalance"], label: "Difference in amount", hint: "The definition says 'difference in amount between related things' -- the quantitative gap." },
    ],
    synonyms: ["disproportion", "inequality", "asymmetry"],
  },
  {
    word: "immutable",
    partOfSpeech: "adjective",
    definition: "Unchanging over time; not able to be changed.",
    keyConcepts: [
      { keyword: "unchanging", matchTerms: ["unchanging", "permanent", "fixed", "constant", "stable", "unalterable", "invariable", "eternal", "enduring"], label: "Unchanging over time", hint: "The definition says 'unchanging over time' -- stays the same no matter what." },
      { keyword: "not able to be changed", matchTerms: ["not able to be changed", "set in stone", "rigid", "absolute", "irreversible", "unmodifiable"], label: "Cannot be changed", hint: "The definition says 'not able to be changed' -- no modifications possible." },
    ],
    synonyms: ["permanent", "fixed", "unalterable"],
  },
  {
    word: "impasse",
    partOfSpeech: "noun",
    definition: "A situation in which no progress is possible; a deadlock.",
    keyConcepts: [
      { keyword: "no progress", matchTerms: ["no progress", "deadlock", "stalemate", "standstill", "dead end", "block", "halt", "gridlock"], label: "No progress possible", hint: "The definition says 'a situation in which no progress is possible' -- completely stuck." },
      { keyword: "deadlock", matchTerms: ["deadlock", "standoff", "stalemate", "logjam", "impasse", "freeze", "tie", "standstill"], label: "A deadlock", hint: "The definition says 'a deadlock' -- neither side can move forward." },
    ],
    synonyms: ["deadlock", "stalemate", "standstill"],
  },
  {
    word: "incentivize",
    partOfSpeech: "verb",
    definition: "To motivate or encourage someone by offering a reward or benefit.",
    keyConcepts: [
      { keyword: "motivate", matchTerms: ["motivate", "encourage", "reward", "induce", "prompt", "drive", "stimulate", "spur", "inspire"], label: "Motivate or encourage", hint: "The definition says 'motivate or encourage someone' -- getting them moving." },
      { keyword: "reward", matchTerms: ["reward", "benefit", "bonus", "payment", "prize", "advantage", "gain", "inducement", "incentive"], label: "By offering a reward", hint: "The definition says 'by offering a reward or benefit' -- the tool used." },
    ],
    synonyms: ["motivate", "encourage", "reward"],
  },
  {
    word: "independence",
    partOfSpeech: "noun",
    definition: "Freedom from outside control; the state of not relying on others.",
    keyConcepts: [
      { keyword: "freedom from control", matchTerms: ["freedom from control", "autonomy", "self-governance", "sovereignty", "liberty", "self-rule"], label: "Freedom from outside control", hint: "The definition says 'freedom from outside control' -- not subject to another." },
      { keyword: "not relying on others", matchTerms: ["not relying", "self-sufficient", "self-reliant", "autonomous", "free", "independent"], label: "Not relying on others", hint: "The definition says 'not relying on others' -- standing on one's own." },
    ],
    synonyms: ["autonomy", "freedom", "self-reliance"],
  },
  {
    word: "inquisitive",
    partOfSpeech: "adjective",
    definition: "Having a curious and investigative nature; eager to find out things.",
    keyConcepts: [
      { keyword: "curious", matchTerms: ["curious", "interested", "eager to know", "questioning", "investigative", "probing", "analytical"], label: "Curious and investigative", hint: "The definition says 'having a curious and investigative nature' -- always asking why." },
      { keyword: "find out", matchTerms: ["find out", "discover", "learn", "explore", "research", "inquire", "examine", "investigate"], label: "Eager to find out", hint: "The definition says 'eager to find out things' -- driven by the desire to know." },
    ],
    synonyms: ["curious", "investigative", "inquiring"],
  },
  {
    word: "instinct",
    partOfSpeech: "noun",
    definition: "An innate, typically fixed pattern of behavior; a natural tendency or ability.",
    keyConcepts: [
      { keyword: "innate", matchTerms: ["innate", "inborn", "natural", "inherent", "built-in", "automatic", "unconscious", "primitive", "instinctive"], label: "Innate pattern", hint: "The definition says 'an innate, typically fixed pattern of behavior' -- born with it." },
      { keyword: "tendency", matchTerms: ["tendency", "inclination", "impulse", "drive", "gut feeling", "intuition", "reflex", "sense", "reaction"], label: "Natural tendency", hint: "The definition says 'a natural tendency or ability' -- something we feel without reasoning." },
    ],
    synonyms: ["intuition", "gut feeling", "reflex"],
  },
  {
    word: "intersection",
    partOfSpeech: "noun",
    definition: "A point or line common to two different figures; a junction of roads.",
    keyConcepts: [
      { keyword: "common point", matchTerms: ["common point", "overlap", "meeting", "junction", "crossing", "convergence", "shared area", "contact"], label: "Point common to figures", hint: "The definition says 'a point or line common to two different figures' -- where they share space." },
      { keyword: "junction", matchTerms: ["junction", "crossroads", "crossing", "interchange", "fork", "connection", "where roads meet"], label: "Junction of roads", hint: "The definition says 'a junction of roads' -- where paths cross." },
    ],
    synonyms: ["junction", "crossing", "overlap"],
  },
  {
    word: "judgment",
    partOfSpeech: "noun",
    definition: "The ability to make considered decisions; an opinion or conclusion formed.",
    keyConcepts: [
      { keyword: "decisions", matchTerms: ["decisions", "assessment", "evaluation", "appraisal", "consideration", "determination", "verdict"], label: "Ability to make decisions", hint: "The definition says 'the ability to make considered decisions' -- discernment." },
      { keyword: "opinion", matchTerms: ["opinion", "view", "conclusion", "finding", "ruling", "assessment", "verdict", "perspective", "belief"], label: "Opinion or conclusion", hint: "The definition says 'an opinion or conclusion formed' -- a result of deliberation." },
    ],
    synonyms: ["discernment", "assessment", "verdict"],
  },
  {
    word: "kindness",
    partOfSpeech: "noun",
    definition: "The quality of being friendly, generous, and considerate.",
    keyConcepts: [
      { keyword: "friendly", matchTerms: ["friendly", "warm", "caring", "thoughtful", "gentle", "pleasant", "good-natured", "affectionate", "benevolent"], label: "Friendly and warm", hint: "The definition says 'being friendly' -- having a warm attitude toward others." },
      { keyword: "generous", matchTerms: ["generous", "considerate", "helpful", "giving", "supportive", "charitable", "compassionate", "selfless"], label: "Generous and considerate", hint: "The definition says 'generous, and considerate' -- giving and thinking of others." },
    ],
    synonyms: ["generosity", "compassion", "warmth"],
  },
  {
    word: "kinship",
    partOfSpeech: "noun",
    definition: "A close relationship based on shared origins or characteristics; family connection.",
    keyConcepts: [
      { keyword: "shared origins", matchTerms: ["shared origins", "ancestry", "blood", "family", "lineage", "heritage", "common descent"], label: "Shared origins", hint: "The definition says 'shared origins or characteristics' -- a biological or cultural bond." },
      { keyword: "connection", matchTerms: ["connection", "bond", "closeness", "affinity", "solidarity", "fellowship", "belonging", "relation"], label: "A close connection", hint: "The definition says 'a close relationship' -- the feeling of being linked." },
    ],
    synonyms: ["connection", "family", "affinity"],
  },
  {
    word: "landmark",
    partOfSpeech: "noun",
    definition: "A prominent object that identifies a place; an important event or development.",
    keyConcepts: [
      { keyword: "prominent object", matchTerms: ["prominent object", "feature", "marker", "point of reference", "signpost", "building", "location"], label: "Prominent object identifying a place", hint: "The definition says 'a prominent object that identifies a place' -- something notable in geography." },
      { keyword: "important event", matchTerms: ["important event", "milestone", "turning point", "breakthrough", "achievement", "historic moment"], label: "Important event or development", hint: "The definition says 'an important event or development' -- a historical marker." },
    ],
    synonyms: ["milestone", "marker", "turning point"],
  },
  {
    word: "legacy",
    partOfSpeech: "noun",
    definition: "Something handed down from a predecessor; money or property left to someone in a will.",
    keyConcepts: [
      { keyword: "handed down", matchTerms: ["handed down", "inheritance", "heritage", "tradition", "history", "imprint", "impact", "influence", "contribution"], label: "Something handed down", hint: "The definition says 'something handed down from a predecessor' -- passed on to future generations." },
      { keyword: "money", matchTerms: ["money", "property", "bequest", "estate", "gift", "endowment", "will", "inheritance", "settlement"], label: "Money or property in a will", hint: "The definition says 'money or property left to someone in a will' -- a formal bequest." },
    ],
    synonyms: ["inheritance", "heritage", "bequest"],
  },
  {
    word: "liberation",
    partOfSpeech: "noun",
    definition: "The act of setting someone free from imprisonment, slavery, or oppression.",
    keyConcepts: [
      { keyword: "setting free", matchTerms: ["setting free", "freeing", "release", "rescue", "emancipation", "independence", "deliverance", "salvation"], label: "Setting someone free", hint: "The definition says 'the act of setting someone free' -- active release." },
      { keyword: "oppression", matchTerms: ["oppression", "imprisonment", "slavery", "captivity", "tyranny", "constraint", "control", "domination"], label: "From imprisonment or oppression", hint: "The definition says 'from imprisonment, slavery, or oppression' -- what one is freed from." },
    ],
    synonyms: ["freedom", "emancipation", "release"],
  },
  {
    word: "light",
    partOfSpeech: "noun",
    definition: "The natural agent that makes things visible; understanding or information.",
    keyConcepts: [
      { keyword: "makes things visible", matchTerms: ["makes visible", "brightness", "illumination", "radiance", "glow", "shine", "ray", "beam"], label: "Makes things visible", hint: "The definition says 'the natural agent that makes things visible' -- physical light." },
      { keyword: "understanding", matchTerms: ["understanding", "information", "clarity", "insight", "knowledge", "revelation", "enlightenment"], label: "Understanding or information", hint: "The definition says 'understanding or information' -- metaphorical light." },
    ],
    synonyms: ["illumination", "brightness", "understanding"],
  },
  {
    word: "lineage",
    partOfSpeech: "noun",
    definition: "Direct descent from an ancestor; ancestry.",
    keyConcepts: [
      { keyword: "descent from ancestor", matchTerms: ["descent", "ancestry", "heritage", "roots", "bloodline", "family line", "origin", "genealogy"], label: "Descent from ancestor", hint: "The definition says 'direct descent from an ancestor' -- family line." },
      { keyword: "ancestry", matchTerms: ["ancestry", "heritage", "background", "history", "pedigree", "stock", "birth", "origin", "forebears"], label: "Ancestry", hint: "The definition says 'ancestry' -- where one comes from." },
    ],
    synonyms: ["ancestry", "heritage", "descent"],
  },
  {
    word: "integral",
    partOfSpeech: "adjective",
    definition: "Necessary to make a whole complete; essential and fundamental to something.",
    keyConcepts: [
      { keyword: "necessary", matchTerms: ["necessary", "essential", "vital", "required", "indispensable", "fundamental", "critical", "core", "central"], label: "Necessary to the whole", hint: "The definition says 'necessary to make a whole complete' -- without it, something is missing." },
      { keyword: "whole", matchTerms: ["whole", "complete", "unified", "entire", "full", "total", "together", "combined", "intact"], label: "Makes a complete whole", hint: "The definition says 'essential and fundamental to something' -- it is built in, not optional." },
    ],
    synonyms: ["essential", "fundamental", "core"],
  },
  {
    word: "compromise",
    partOfSpeech: "noun",
    definition: "An agreement reached by each side making concessions; a middle ground.",
    keyConcepts: [
      { keyword: "agreement", matchTerms: ["agreement", "settlement", "deal", "resolution", "middle ground", "accord", "arrangement", "understanding"], label: "An agreement reached", hint: "The definition says 'an agreement reached by each side' -- both parties accept something less than ideal." },
      { keyword: "concessions", matchTerms: ["concessions", "give and take", "trade-off", "sacrifice", "yielding", "meeting halfway", "adjustment"], label: "By making concessions", hint: "The definition says 'by each side making concessions' -- both sides give something up." },
    ],
    synonyms: ["agreement", "middle ground", "settlement"],
  },
  {
    word: "contemporary",
    partOfSpeech: "adjective",
    definition: "Living or occurring at the same time; belonging to or typical of the present day.",
    keyConcepts: [
      { keyword: "same time", matchTerms: ["same time", "coexisting", "concurrent", "simultaneous", "of the same era", "living together"], label: "At the same time", hint: "The definition says 'living or occurring at the same time' -- existing in the same period." },
      { keyword: "present day", matchTerms: ["present day", "modern", "current", "today", "recent", "up to date", "new", "now", "of today"], label: "Belonging to the present", hint: "The definition says 'belonging to or typical of the present day' -- modern and current." },
    ],
    synonyms: ["modern", "current", "present-day"],
  },
  {
    word: "scenario",
    partOfSpeech: "noun",
    definition: "A written outline of a situation or sequence of events; a possible course of events.",
    keyConcepts: [
      { keyword: "outline of situation", matchTerms: ["outline", "description", "plan", "setting", "context", "circumstances", "case", "situation"], label: "Outline of a situation", hint: "The definition says 'a written outline of a situation or sequence of events' -- a described context." },
      { keyword: "possible course", matchTerms: ["possible", "hypothetical", "potential", "what-if", "option", "version", "outcome", "projection"], label: "A possible course of events", hint: "The definition says 'a possible course of events' -- it may or may not happen." },
    ],
    synonyms: ["situation", "outline", "case"],
  },
  {
    word: "vulnerable",
    partOfSpeech: "adjective",
    definition: "Exposed to the possibility of harm or attack; easily hurt or influenced.",
    keyConcepts: [
      { keyword: "exposed to harm", matchTerms: ["exposed", "susceptible", "unprotected", "at risk", "open", "defenseless", "unguarded", "fragile"], label: "Exposed to harm", hint: "The definition says 'exposed to the possibility of harm or attack' -- lacking protection." },
      { keyword: "easily hurt", matchTerms: ["easily hurt", "sensitive", "fragile", "delicate", "impressionable", "affected", "open to influence"], label: "Easily hurt or influenced", hint: "The definition says 'easily hurt or influenced' -- emotional or physical openness." },
    ],
    synonyms: ["susceptible", "exposed", "fragile"],
  },
  {
    word: "doubtful",
    partOfSpeech: "adjective",
    definition: "Feeling uncertain; not clearly known or established; improbable.",
    keyConcepts: [
      { keyword: "uncertain", matchTerms: ["uncertain", "unsure", "skeptical", "hesitant", "unconvinced", "questioning", "wavering", "suspicious"], label: "Feeling uncertain", hint: "The definition says 'feeling uncertain' -- not having confidence in something." },
      { keyword: "improbable", matchTerms: ["improbable", "unlikely", "questionable", "dubious", "suspect", "debatable", "unclear", "unresolved"], label: "Improbable or not established", hint: "The definition says 'not clearly known or established; improbable' -- the facts are in question." },
    ],
    synonyms: ["uncertain", "skeptical", "unlikely"],
  },
  {
    word: "affect",
    partOfSpeech: "verb",
    definition: "To have an effect on something or someone; to produce a change in.",
    keyConcepts: [
      { keyword: "have an effect", matchTerms: ["have an effect", "impact", "influence", "change", "alter", "touch", "shape", "modify", "act on"], label: "Have an effect on", hint: "The definition says 'to have an effect on something or someone' -- making a difference." },
      { keyword: "produce change", matchTerms: ["produce change", "alter", "transform", "move", "stir", "disturb", "reach", "concern", "involve"], label: "Produce a change", hint: "The definition says 'to produce a change in' -- the outcome of the effect." },
    ],
    synonyms: ["influence", "impact", "change"],
  },
  {
    word: "effect",
    partOfSpeech: "noun",
    definition: "A change produced by a cause; the result or outcome of an action.",
    keyConcepts: [
      { keyword: "change produced", matchTerms: ["change", "result", "outcome", "consequence", "impact", "product", "upshot", "reaction", "response"], label: "Change produced by a cause", hint: "The definition says 'a change produced by a cause' -- what follows from something." },
      { keyword: "result", matchTerms: ["result", "outcome", "end", "conclusion", "aftermath", "product", "fruit", "yield", "repercussion"], label: "Result or outcome", hint: "The definition says 'the result or outcome of an action' -- the downstream consequence." },
    ],
    synonyms: ["result", "consequence", "outcome"],
  },
  {
    word: "persuasive",
    partOfSpeech: "adjective",
    definition: "Good at convincing people to believe or do something; compelling and effective.",
    keyConcepts: [
      { keyword: "convincing", matchTerms: ["convincing", "compelling", "influential", "effective", "forceful", "powerful", "strong", "persuading"], label: "Good at convincing", hint: "The definition says 'good at convincing people to believe or do something' -- it works." },
      { keyword: "compelling", matchTerms: ["compelling", "engaging", "moving", "stirring", "well-argued", "articulate", "logical", "appealing"], label: "Compelling and effective", hint: "The definition says 'compelling and effective' -- holds attention and changes minds." },
    ],
    synonyms: ["convincing", "compelling", "influential"],
  },
  {
    word: "accomplish",
    partOfSpeech: "verb",
    definition: "To achieve or complete something successfully.",
    keyConcepts: [
      { keyword: "achieve", matchTerms: ["achieve", "complete", "fulfill", "finish", "attain", "do", "carry out", "execute", "pull off", "succeed"], label: "Achieve or complete", hint: "The definition says 'to achieve or complete something successfully' -- getting it done." },
      { keyword: "successfully", matchTerms: ["successfully", "fully", "well", "properly", "effectively", "to completion", "through", "entirely"], label: "Successfully", hint: "The definition says 'successfully' -- not just attempting but actually finishing." },
    ],
    synonyms: ["achieve", "complete", "fulfill"],
  },
  {
    word: "common",
    partOfSpeech: "adjective",
    definition: "Occurring or found frequently; shared by or belonging to more than one.",
    keyConcepts: [
      { keyword: "occurring frequently", matchTerms: ["occurring frequently", "widespread", "typical", "ordinary", "regular", "usual", "everyday", "normal"], label: "Occurring frequently", hint: "The definition says 'occurring or found frequently' -- not rare." },
      { keyword: "shared", matchTerms: ["shared", "joint", "mutual", "collective", "communal", "public", "general", "universal", "combined"], label: "Shared by more than one", hint: "The definition says 'shared by or belonging to more than one' -- held in common." },
    ],
    synonyms: ["frequent", "shared", "ordinary"],
  },
  {
    word: "confirm",
    partOfSpeech: "verb",
    definition: "To establish the truth of something; to make an arrangement definite.",
    keyConcepts: [
      { keyword: "establish truth", matchTerms: ["establish truth", "verify", "validate", "prove", "corroborate", "affirm", "support", "substantiate"], label: "Establish the truth", hint: "The definition says 'to establish the truth of something' -- settling whether it is so." },
      { keyword: "make definite", matchTerms: ["make definite", "finalize", "settle", "secure", "fix", "arrange", "seal", "ratify", "lock in"], label: "Make definite", hint: "The definition says 'to make an arrangement definite' -- turning provisional into certain." },
    ],
    synonyms: ["verify", "validate", "affirm"],
  },
  {
    word: "conscious",
    partOfSpeech: "adjective",
    definition: "Aware of and responding to one's surroundings; intentional and deliberate.",
    keyConcepts: [
      { keyword: "aware", matchTerms: ["aware", "awake", "alert", "attentive", "cognizant", "mindful", "noticing", "perceiving", "sentient"], label: "Aware of surroundings", hint: "The definition says 'aware of and responding to one's surroundings' -- being present." },
      { keyword: "intentional", matchTerms: ["intentional", "deliberate", "purposeful", "knowing", "calculated", "considered", "planned", "wilful"], label: "Intentional and deliberate", hint: "The definition says 'intentional and deliberate' -- done with awareness." },
    ],
    synonyms: ["aware", "deliberate", "intentional"],
  },
  {
    word: "creative",
    partOfSpeech: "adjective",
    definition: "Involving the use of imagination to produce something new; inventive.",
    keyConcepts: [
      { keyword: "imagination", matchTerms: ["imagination", "inventive", "original", "innovative", "artistic", "expressive", "inspired", "novel"], label: "Using imagination", hint: "The definition says 'involving the use of imagination' -- not following a formula." },
      { keyword: "produce something new", matchTerms: ["produce something new", "original", "new", "unique", "fresh", "unprecedented", "pioneering"], label: "Produce something new", hint: "The definition says 'to produce something new' -- the output is original." },
    ],
    synonyms: ["inventive", "imaginative", "original"],
  },
  {
    word: "curious",
    partOfSpeech: "adjective",
    definition: "Eager to know or learn; strange or unusual.",
    keyConcepts: [
      { keyword: "eager to know", matchTerms: ["eager to know", "inquisitive", "interested", "questioning", "nosy", "wondering", "inquiring"], label: "Eager to know", hint: "The definition says 'eager to know or learn' -- driven by desire for knowledge." },
      { keyword: "strange", matchTerms: ["strange", "unusual", "odd", "peculiar", "interesting", "unexpected", "remarkable", "weird", "novel"], label: "Strange or unusual", hint: "The definition says 'strange or unusual' -- the second sense of curious." },
    ],
    synonyms: ["inquisitive", "eager", "unusual"],
  },
  {
    word: "danger",
    partOfSpeech: "noun",
    definition: "The possibility of harm or injury; a person or thing likely to cause harm.",
    keyConcepts: [
      { keyword: "possibility of harm", matchTerms: ["possibility of harm", "risk", "threat", "peril", "hazard", "menace", "jeopardy", "vulnerability"], label: "Possibility of harm", hint: "The definition says 'the possibility of harm or injury' -- something bad could happen." },
      { keyword: "cause harm", matchTerms: ["cause harm", "threat", "menace", "hazard", "risk", "source of trouble", "enemy", "problem"], label: "Likely to cause harm", hint: "The definition says 'a person or thing likely to cause harm' -- the dangerous entity." },
    ],
    synonyms: ["risk", "threat", "peril"],
  },
  {
    word: "demand",
    partOfSpeech: "verb",
    definition: "To ask for something forcefully; to require something as necessary.",
    keyConcepts: [
      { keyword: "ask forcefully", matchTerms: ["ask forcefully", "insist", "require", "request firmly", "claim", "assert", "call for", "press for"], label: "Ask forcefully", hint: "The definition says 'to ask for something forcefully' -- not a gentle request." },
      { keyword: "require", matchTerms: ["require", "need", "call for", "necessitate", "involve", "entail", "impose", "expect", "obligate"], label: "Require as necessary", hint: "The definition says 'to require something as necessary' -- it must happen." },
    ],
    synonyms: ["require", "insist", "call for"],
  },
  {
    word: "familiar",
    partOfSpeech: "adjective",
    definition: "Well known from long association; having a good knowledge of something.",
    keyConcepts: [
      { keyword: "well known", matchTerms: ["well known", "recognized", "known", "common", "customary", "everyday", "ordinary", "typical", "usual"], label: "Well known from association", hint: "The definition says 'well known from long association' -- encountered many times." },
      { keyword: "good knowledge", matchTerms: ["good knowledge", "acquainted with", "experienced in", "versed in", "informed", "comfortable with"], label: "Good knowledge of", hint: "The definition says 'having a good knowledge of something' -- well-acquainted with it." },
    ],
    synonyms: ["known", "recognizable", "acquainted"],
  },
  {
    word: "inspire",
    partOfSpeech: "verb",
    definition: "To fill someone with the urge to do something; to be the cause of a feeling.",
    keyConcepts: [
      { keyword: "fill with urge", matchTerms: ["fill with urge", "motivate", "encourage", "stimulate", "move", "energize", "galvanize", "spur", "drive"], label: "Fill with the urge", hint: "The definition says 'fill someone with the urge to do something' -- activating them." },
      { keyword: "cause a feeling", matchTerms: ["cause a feeling", "evoke", "produce", "spark", "create", "generate", "stir", "arouse", "awaken"], label: "Cause a feeling", hint: "The definition says 'to be the cause of a feeling' -- it originates in the person or thing." },
    ],
    synonyms: ["motivate", "encourage", "stimulate"],
  },
  {
    word: "link",
    partOfSpeech: "verb",
    definition: "To connect or join things together; to establish a relationship between.",
    keyConcepts: [
      { keyword: "connect", matchTerms: ["connect", "join", "attach", "tie", "bind", "bridge", "couple", "combine", "associate", "fasten"], label: "Connect or join", hint: "The definition says 'to connect or join things together' -- making a bond." },
      { keyword: "relationship", matchTerms: ["relationship", "association", "correlation", "relation", "connection", "bond", "tie", "thread"], label: "Establish a relationship", hint: "The definition says 'to establish a relationship between' -- showing they are related." },
    ],
    synonyms: ["connect", "join", "associate"],
  },
  {
    word: "outcome",
    partOfSpeech: "noun",
    definition: "The way a situation turns out; the result of a process or event.",
    keyConcepts: [
      { keyword: "way it turns out", matchTerms: ["way it turns out", "result", "consequence", "conclusion", "end", "resolution", "development"], label: "The way it turns out", hint: "The definition says 'the way a situation turns out' -- the final state of affairs." },
      { keyword: "result", matchTerms: ["result", "product", "effect", "aftermath", "upshot", "fruit", "answer", "verdict", "finding"], label: "Result of a process", hint: "The definition says 'the result of a process or event' -- what the process produces." },
    ],
    synonyms: ["result", "consequence", "conclusion"],
  },
  {
    word: "category",
    partOfSpeech: "noun",
    definition: "A class or group of things that share common characteristics.",
    keyConcepts: [
      { keyword: "class or group", matchTerms: ["class", "group", "type", "kind", "division", "section", "set", "classification", "bracket"], label: "Class or group", hint: "The definition says 'a class or group of things' -- an organized grouping." },
      { keyword: "common characteristics", matchTerms: ["common characteristics", "shared features", "similar", "alike", "related", "same type"], label: "Shared characteristics", hint: "The definition says 'that share common characteristics' -- what makes them a group." },
    ],
    synonyms: ["class", "group", "type"],
  },
  {
    word: "replace",
    partOfSpeech: "verb",
    definition: "To take the place of something; to put something new in the place of.",
    keyConcepts: [
      { keyword: "take the place", matchTerms: ["take the place", "succeed", "substitute", "supplant", "supersede", "displace", "swap", "fill in"], label: "Take the place of", hint: "The definition says 'to take the place of something' -- becoming the substitute." },
      { keyword: "put new in place", matchTerms: ["put new in place", "swap", "exchange", "switch", "change", "renew", "update", "refresh"], label: "Put something new in place", hint: "The definition says 'to put something new in the place of' -- the act of replacing." },
    ],
    synonyms: ["substitute", "succeed", "swap"],
  },
  {
    word: "similar",
    partOfSpeech: "adjective",
    definition: "Having a resemblance to another; comparable in appearance or nature.",
    keyConcepts: [
      { keyword: "resemblance", matchTerms: ["resemblance", "alike", "comparable", "like", "close", "related", "parallel", "corresponding", "equivalent"], label: "Having a resemblance", hint: "The definition says 'having a resemblance to another' -- they look or feel alike." },
      { keyword: "comparable", matchTerms: ["comparable", "much the same", "in common", "matching", "near", "approximate", "analogous"], label: "Comparable in nature", hint: "The definition says 'comparable in appearance or nature' -- close but not identical." },
    ],
    synonyms: ["alike", "comparable", "resembling"],
  },
  {
    word: "reliable",
    partOfSpeech: "adjective",
    definition: "Consistently good in quality or performance; able to be trusted or depended on.",
    keyConcepts: [
      { keyword: "consistently good", matchTerms: ["consistently good", "dependable", "trustworthy", "steady", "stable", "predictable", "faithful"], label: "Consistently good", hint: "The definition says 'consistently good in quality or performance' -- it never lets you down." },
      { keyword: "trusted", matchTerms: ["trusted", "dependable", "solid", "safe", "certain", "counted on", "responsible", "proven"], label: "Able to be trusted", hint: "The definition says 'able to be trusted or depended on' -- others can rely on it." },
    ],
    synonyms: ["dependable", "trustworthy", "consistent"],
  },
  {
    word: "flexible",
    partOfSpeech: "adjective",
    definition: "Able to change or be changed easily; willing to adapt to new circumstances.",
    keyConcepts: [
      { keyword: "change easily", matchTerms: ["change easily", "adaptable", "adjustable", "versatile", "elastic", "pliable", "malleable", "fluid"], label: "Able to change easily", hint: "The definition says 'able to change or be changed easily' -- not rigid." },
      { keyword: "adapt", matchTerms: ["adapt", "accommodate", "open", "cooperative", "willing", "responsive", "compromise", "yield"], label: "Willing to adapt", hint: "The definition says 'willing to adapt to new circumstances' -- open to change." },
    ],
    synonyms: ["adaptable", "pliable", "accommodating"],
  },
  {
    word: "intention",
    partOfSpeech: "noun",
    definition: "A plan or aim that one has in mind; the purpose behind an action.",
    keyConcepts: [
      { keyword: "plan or aim", matchTerms: ["plan", "aim", "goal", "objective", "purpose", "target", "design", "aspiration", "wish", "desire"], label: "A plan or aim", hint: "The definition says 'a plan or aim that one has in mind' -- what one intends to do." },
      { keyword: "purpose", matchTerms: ["purpose", "motive", "reason", "meaning", "motivation", "drive", "direction", "agenda", "end"], label: "Purpose behind action", hint: "The definition says 'the purpose behind an action' -- why it is done." },
    ],
    synonyms: ["aim", "purpose", "plan"],
  },
  {
    word: "version",
    partOfSpeech: "noun",
    definition: "A particular form of something that differs from other forms; an account of something.",
    keyConcepts: [
      { keyword: "particular form", matchTerms: ["particular form", "variant", "edition", "form", "type", "adaptation", "model", "iteration", "update"], label: "A particular form", hint: "The definition says 'a particular form of something that differs from other forms' -- one of several." },
      { keyword: "account", matchTerms: ["account", "description", "interpretation", "rendering", "telling", "representation", "perspective"], label: "An account of something", hint: "The definition says 'an account of something' -- one person's or source's telling of it." },
    ],
    synonyms: ["variant", "edition", "form"],
  },
  {
    word: "vigor",
    partOfSpeech: "noun",
    definition: "Physical strength and good health; effort, energy, and enthusiasm.",
    keyConcepts: [
      { keyword: "strength", matchTerms: ["strength", "energy", "vitality", "power", "health", "robustness", "stamina", "force", "life"], label: "Physical strength", hint: "The definition says 'physical strength and good health' -- bodily energy." },
      { keyword: "enthusiasm", matchTerms: ["enthusiasm", "drive", "zeal", "spirit", "gusto", "intensity", "passion", "verve"], label: "Effort and enthusiasm", hint: "The definition says 'effort, energy, and enthusiasm' -- doing things with full force." },
    ],
    synonyms: ["energy", "vitality", "strength"],
  },
  {
    word: "vindicate",
    partOfSpeech: "verb",
    definition: "To clear someone of blame or suspicion; to show a claim to be justified.",
    keyConcepts: [
      { keyword: "clear of blame", matchTerms: ["clear of blame", "exonerate", "acquit", "absolve", "free", "justify", "defend", "excuse"], label: "Clear of blame", hint: "The definition says 'to clear someone of blame or suspicion' -- restoring their good name." },
      { keyword: "justified", matchTerms: ["justified", "proven right", "confirmed", "validated", "upheld", "supported", "substantiated"], label: "Show claim to be justified", hint: "The definition says 'to show a claim to be justified' -- the truth backs them up." },
    ],
    synonyms: ["exonerate", "justify", "clear"],
  },
  {
    word: "volatile",
    partOfSpeech: "adjective",
    definition: "Liable to change rapidly and unpredictably; evaporating quickly.",
    keyConcepts: [
      { keyword: "rapid change", matchTerms: ["rapid change", "unstable", "unpredictable", "erratic", "fluctuating", "shifting", "inconsistent"], label: "Rapid and unpredictable change", hint: "The definition says 'liable to change rapidly and unpredictably' -- hard to pin down." },
      { keyword: "evaporating", matchTerms: ["evaporating", "vaporous", "unstable", "fleeting", "transient", "gaseous", "explosive"], label: "Evaporating quickly", hint: "The definition says 'evaporating quickly' -- the chemical meaning." },
    ],
    synonyms: ["unstable", "unpredictable", "erratic"],
  }
];
