import type { DailyWord } from "./game-data"

// -----------------------------------------------------------------------
// 365 DAILY WORDS
//
// RULE: every key concept MUST be directly present in the official
//       definition. If the definition doesn't express an idea, it is
//       NOT a concept. Words may have 1, 2 or 3 concepts -- never force.
// -----------------------------------------------------------------------

export const dailyWords: DailyWord[] = [
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
  // DAY 15-30
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
    word: "volatile",
    partOfSpeech: "adjective",
    definition: "Liable to change rapidly and unpredictably, especially for the worse.",
    keyConcepts: [
      { keyword: "change rapidly", matchTerms: ["change", "rapid", "quick", "sudden", "fast", "swift", "fluctuat", "shift", "swing", "veer", "unstable", "erratic", "turbulent", "chaotic", "wild"], label: "Change rapidly", hint: "The definition says 'change rapidly' -- fast, dramatic shifts." },
      { keyword: "unpredictably", matchTerms: ["unpredictab", "uncertain", "unreliab", "irregular", "inconsistent", "capricious", "fickle", "mercurial", "whimsical", "volatile", "unforeseeable"], label: "Unpredictably", hint: "The definition says 'unpredictably' -- you can't anticipate what happens next." },
    ],
    synonyms: ["unstable", "unpredictable", "erratic"],
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
  // DAY 21-30
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
  // DAY 30-60
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
  // DAY 50-80
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
  // DAY 60-90
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
    word: "vindicate",
    partOfSpeech: "verb",
    definition: "To clear someone of blame or suspicion; to show to be right or justified.",
    keyConcepts: [
      { keyword: "clear of blame", matchTerms: ["clear", "exonerat", "absolv", "acquit", "free", "innocent", "blame", "suspicion", "accusation", "charge", "wrongdoing", "vindicate", "defend", "justify", "pardon"], label: "Clear of blame or suspicion", hint: "The definition says 'clear someone of blame or suspicion' -- removing wrongful accusation." },
      { keyword: "shown right", matchTerms: ["right", "correct", "justified", "just", "legitimate", "valid", "warranted", "reason", "prove", "show", "demonstrat", "confirm", "establish", "true"], label: "Show to be right or justified", hint: "The definition says 'show to be right or justified' -- proving something was valid all along." },
    ],
    synonyms: ["exonerate", "justify", "absolve"],
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
  // DAY 70-100
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
    word: "ameliorate",
    partOfSpeech: "verb",
    definition: "To make something bad or unsatisfactory better.",
    keyConcepts: [
      { keyword: "make better", matchTerms: ["better", "improve", "enhance", "upgrade", "reform", "rectif", "remedy", "fix", "correct", "amend", "boost", "uplift", "progress", "advance"], label: "Make better", hint: "The definition says 'make...better' -- improving something that was bad." },
      { keyword: "something bad", matchTerms: ["bad", "unsatisfactory", "poor", "problem", "issue", "situation", "condition", "flaw", "defect", "weakness", "shortcoming", "negative"], label: "Something bad or unsatisfactory", hint: "The definition says 'something bad or unsatisfactory' -- the starting point is a negative state." },
    ],
    synonyms: ["improve", "enhance", "better"],
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
  // DAY 80-120
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
  // DAY 90-120
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
  // DAY 97-130
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
    word: "pragmatism",
    partOfSpeech: "noun",
    definition: "An approach that evaluates theories or beliefs in terms of the success of their practical application.",
    keyConcepts: [
      { keyword: "evaluates", matchTerms: ["evaluat", "assess", "judge", "measur", "test", "consider", "approach", "attitude", "mindset", "philosophy", "framework", "method"], label: "Evaluates theories or beliefs", hint: "The definition says 'evaluates theories or beliefs' -- judging ideas by a standard." },
      { keyword: "practical application", matchTerms: ["practical", "application", "practice", "real-world", "result", "outcome", "consequence", "success", "effectiveness", "usefulness", "work", "function", "applied", "action"], label: "By practical application", hint: "The definition says 'in terms of the success of their practical application' -- what works matters most." },
    ],
    synonyms: ["practicality", "realism", "utilitarianism"],
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
  // DAY 111-140
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
  // DAY 131-170
  {
    word: "ubiquity",
    partOfSpeech: "noun",
    definition: "The fact of appearing everywhere or of being very common.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "all places", "omnipresent", "pervasive", "widespread", "universal", "all around", "throughout", "prevalent", "common", "frequent", "abundant", "appearing"], label: "Appearing everywhere; very common", hint: "The definition says 'appearing everywhere or of being very common' -- found in every direction you look." },
    ],
    synonyms: ["omnipresence", "pervasiveness", "prevalence"],
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
  // DAY 141-170
  {
    word: "assiduous",
    partOfSpeech: "adjective",
    definition: "Showing great care and perseverance.",
    keyConcepts: [
      { keyword: "great care", matchTerms: ["care", "careful", "attentiv", "thorough", "meticulous", "painstaking", "diligent", "conscientious", "dedicated", "devoted", "industrious", "hard-working", "tireless"], label: "Great care", hint: "The definition says 'great care' -- deeply attentive to quality." },
      { keyword: "perseverance", matchTerms: ["persever", "persist", "sustained", "steady", "constant", "relentless", "unflagging", "untiring", "indefatigable", "dogged", "determined", "tenacious", "unremitting", "continuous"], label: "Perseverance", hint: "The definition says 'and perseverance' -- sustained effort over time." },
    ],
    synonyms: ["diligent", "meticulous", "industrious"],
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
    word: "verbose",
    partOfSpeech: "adjective",
    definition: "Using or expressed in more words than are needed.",
    keyConcepts: [
      { keyword: "more words than needed", matchTerms: ["more words", "too many words", "wordy", "long-winded", "rambling", "lengthy", "excessive", "unnecessary", "overlong", "prolix", "verbose", "overwrit", "repetiti", "padded", "inflated", "bloated", "redundant"], label: "More words than needed", hint: "The definition says 'more words than are needed' -- using excess language." },
    ],
    synonyms: ["wordy", "long-winded", "prolix"],
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
  // DAY 155-170
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
    word: "obfuscate",
    partOfSpeech: "verb",
    definition: "To render obscure, unclear, or unintelligible.",
    keyConcepts: [
      { keyword: "render unclear", matchTerms: ["obscure", "unclear", "unintelligib", "confuse", "muddle", "cloud", "fog", "blur", "darken", "hide", "conceal", "mask", "complicate", "obfuscat", "bewilder", "mystify", "perplex"], label: "Render obscure or unclear", hint: "The definition says 'render obscure, unclear, or unintelligible' -- making something harder to understand." },
    ],
    synonyms: ["obscure", "confuse", "complicate"],
  },
  // DAY 163-200
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
    word: "copious",
    partOfSpeech: "adjective",
    definition: "Abundant in supply or quantity.",
    keyConcepts: [
      { keyword: "abundant", matchTerms: ["abundant", "plenty", "plentiful", "ample", "generous", "large", "vast", "great", "extensive", "profuse", "lavish", "rich", "bountiful", "copious", "overflowing", "considerable", "substantial"], label: "Abundant in supply or quantity", hint: "The definition says 'abundant in supply or quantity' -- there's a lot of it." },
    ],
    synonyms: ["abundant", "plentiful", "ample"],
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
  // DAY 176-200
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
  // DAY 201-230
  {
    word: "apprehensive",
    partOfSpeech: "adjective",
    definition: "Anxious or fearful that something bad or unpleasant will happen.",
    keyConcepts: [
      { keyword: "anxious", matchTerms: ["anxious", "nervous", "worried", "uneasy", "fearful", "afraid", "dread", "tense", "concern", "alarm"], label: "Anxious or fearful", hint: "The definition says 'anxious or fearful' -- a state of worry." },
      { keyword: "something bad will happen", matchTerms: ["something bad", "unpleasant", "danger", "threat", "harm", "trouble", "misfortune", "negative", "impending", "anticipat"], label: "Something bad will happen", hint: "The definition says 'something bad or unpleasant will happen' -- the fear is forward-looking." },
    ],
    synonyms: ["anxious", "worried", "fearful"],
  },
  {
    word: "candid",
    partOfSpeech: "adjective",
    definition: "Truthful and straightforward; frank.",
    keyConcepts: [
      { keyword: "truthful", matchTerms: ["truthful", "honest", "sincere", "genuine", "authentic", "open", "transparent", "forthright", "candid", "direct", "blunt", "upfront", "plainspoken"], label: "Truthful and straightforward", hint: "The definition says 'truthful and straightforward; frank' -- saying what you actually think." },
    ],
    synonyms: ["frank", "honest", "forthright"],
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
    word: "deter",
    partOfSpeech: "verb",
    definition: "To discourage someone from doing something by instilling doubt or fear.",
    keyConcepts: [
      { keyword: "discourage", matchTerms: ["discourag", "prevent", "dissuad", "stop", "put off", "warn", "inhibit", "restrain", "hinder", "repel", "scare", "frighten"], label: "Discourage from doing something", hint: "The definition says 'discourage someone from doing something' -- making them not want to act." },
      { keyword: "doubt or fear", matchTerms: ["doubt", "fear", "hesitat", "uncertain", "intimidat", "threat", "consequenc", "risk", "penalty", "punish"], label: "By instilling doubt or fear", hint: "The definition says 'by instilling doubt or fear' -- the discouragement works through apprehension." },
    ],
    synonyms: ["discourage", "dissuade", "prevent"],
  },
  {
    word: "elaborate",
    partOfSpeech: "adjective",
    definition: "Involving many carefully arranged parts or details; detailed and complicated.",
    keyConcepts: [
      { keyword: "many parts", matchTerms: ["many", "numerous", "multiple", "complex", "intricate", "complic", "extensive", "detailed", "thorough", "comprehensive", "sophisticated"], label: "Many carefully arranged parts", hint: "The definition says 'involving many carefully arranged parts or details' -- lots of interlocking pieces." },
    ],
    synonyms: ["intricate", "detailed", "complex"],
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
    word: "gratitude",
    partOfSpeech: "noun",
    definition: "The quality of being thankful; readiness to show appreciation for and to return kindness.",
    keyConcepts: [
      { keyword: "thankful", matchTerms: ["thankful", "grateful", "appreciat", "gratitude", "indebt", "recogniz", "acknowledg", "bless"], label: "Being thankful", hint: "The definition says 'the quality of being thankful' -- a feeling of thanks." },
      { keyword: "return kindness", matchTerms: ["return", "kindness", "reciprocat", "repay", "give back", "generous", "goodwill", "favor", "favour", "benevolenc"], label: "Readiness to return kindness", hint: "The definition says 'readiness to show appreciation for and to return kindness' -- gratitude includes giving back." },
    ],
    synonyms: ["thankfulness", "appreciation", "gratefulness"],
  },
  {
    word: "hinder",
    partOfSpeech: "verb",
    definition: "To create difficulties for someone or something, resulting in delay or obstruction.",
    keyConcepts: [
      { keyword: "create difficulties", matchTerms: ["difficult", "obstruct", "impede", "hamper", "block", "inhibit", "restrict", "constrain", "interfere", "thwart", "frustrat", "stall"], label: "Create difficulties", hint: "The definition says 'create difficulties' -- making progress harder." },
      { keyword: "delay", matchTerms: ["delay", "slow", "hold up", "hold back", "set back", "retard", "stall", "prevent", "curb", "check", "encumber"], label: "Resulting in delay or obstruction", hint: "The definition says 'resulting in delay or obstruction' -- the outcome is slowed progress." },
    ],
    synonyms: ["impede", "hamper", "obstruct"],
  },
  {
    word: "impartial",
    partOfSpeech: "adjective",
    definition: "Treating all rivals or disputants equally; fair and just.",
    keyConcepts: [
      { keyword: "equally", matchTerms: ["equal", "even-handed", "unbiased", "neutral", "objective", "balanced", "impartial", "non-partisan", "disinterested", "detach"], label: "Treating all equally", hint: "The definition says 'treating all rivals or disputants equally' -- no favoritism." },
      { keyword: "fair", matchTerms: ["fair", "just", "equitab", "right", "honest", "principled", "ethical", "honorabl", "above board", "scrupulous"], label: "Fair and just", hint: "The definition says 'fair and just' -- impartiality is a moral quality." },
    ],
    synonyms: ["fair", "unbiased", "neutral"],
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
    word: "lucid",
    partOfSpeech: "adjective",
    definition: "Expressed clearly; easy to understand.",
    keyConcepts: [
      { keyword: "clear", matchTerms: ["clear", "clarity", "plain", "transparent", "intelligib", "comprehensib", "coherent", "articulat", "explicit", "straightforward", "accessible", "simple", "unambiguous", "crisp", "sharp"], label: "Expressed clearly", hint: "The definition says 'expressed clearly; easy to understand' -- lucid communication is effortlessly clear." },
    ],
    synonyms: ["clear", "coherent", "intelligible"],
  },
  {
    word: "mundane",
    partOfSpeech: "adjective",
    definition: "Lacking interest or excitement; dull and ordinary.",
    keyConcepts: [
      { keyword: "lacking interest", matchTerms: ["lacking interest", "uninteresting", "boring", "dull", "tedious", "monotonous", "humdrum", "dreary", "bland", "tiresome", "wearisome", "uninspir", "unexcit", "dry"], label: "Lacking interest or excitement", hint: "The definition says 'lacking interest or excitement' -- nothing to hold your attention." },
      { keyword: "ordinary", matchTerms: ["ordinary", "everyday", "routine", "commonplace", "banal", "prosaic", "unremarkab", "pedestrian", "usual", "regular", "normal", "plain", "run-of-the-mill"], label: "Dull and ordinary", hint: "The definition says 'dull and ordinary' -- nothing special or noteworthy." },
    ],
    synonyms: ["boring", "dull", "ordinary"],
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
    word: "plausible",
    partOfSpeech: "adjective",
    definition: "Seeming reasonable or probable.",
    keyConcepts: [
      { keyword: "reasonable", matchTerms: ["reasonable", "probable", "likely", "believab", "credibl", "conceivab", "feasib", "plausib", "convinc", "logical", "rational", "possible", "sound", "tenable", "viable"], label: "Seeming reasonable or probable", hint: "The definition says 'seeming reasonable or probable' -- it could be true." },
    ],
    synonyms: ["believable", "credible", "likely"],
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
    word: "reconcile",
    partOfSpeech: "verb",
    definition: "To restore friendly relations between; to make compatible or consistent.",
    keyConcepts: [
      { keyword: "restore relations", matchTerms: ["restore", "friendly", "relations", "reunite", "make up", "resolve", "mend", "repair", "heal", "settle", "patch up", "bring together"], label: "Restore friendly relations", hint: "The definition says 'restore friendly relations between' -- fixing a broken relationship." },
      { keyword: "make compatible", matchTerms: ["compatibl", "consistent", "harmoniz", "align", "match", "balance", "integrat", "unif", "bring in line", "adjust", "accommodat", "agree"], label: "Make compatible or consistent", hint: "The definition says 'make compatible or consistent' -- getting two things to work together." },
    ],
    synonyms: ["resolve", "reunite", "harmonize"],
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
    word: "undermine",
    partOfSpeech: "verb",
    definition: "To damage or weaken someone or something, especially gradually or insidiously.",
    keyConcepts: [
      { keyword: "damage or weaken", matchTerms: ["damage", "weaken", "erode", "diminish", "sabotag", "destabiliz", "compromise", "impair", "hurt", "reduce", "lessen", "subvert", "corrode"], label: "Damage or weaken", hint: "The definition says 'damage or weaken' -- making something less strong or effective." },
      { keyword: "gradually", matchTerms: ["gradual", "slowly", "insidious", "subtle", "incremental", "bit by bit", "steadily", "progressiv", "covert", "secret", "hidden", "stealthi", "quiet"], label: "Especially gradually or insidiously", hint: "The definition says 'especially gradually or insidiously' -- the damage happens slowly and often unseen." },
    ],
    synonyms: ["weaken", "erode", "sabotage"],
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
    word: "yearn",
    partOfSpeech: "verb",
    definition: "To have an intense feeling of longing for something.",
    keyConcepts: [
      { keyword: "intense longing", matchTerms: ["intense", "longing", "desire", "crave", "ache", "hunger", "thirst", "pine", "wish", "want", "need", "miss", "hanker", "covet", "passionate"], label: "Intense longing", hint: "The definition says 'intense feeling of longing' -- a deep, powerful desire for something." },
    ],
    synonyms: ["long", "crave", "pine"],
  },
  {
    word: "advocate",
    partOfSpeech: "verb",
    definition: "To publicly recommend or support a particular cause or policy.",
    keyConcepts: [
      { keyword: "publicly recommend", matchTerms: ["publicly", "recommend", "support", "champion", "promot", "endors", "back", "defend", "campaign", "push for", "argue for", "speak for", "stand up for", "lobby"], label: "Publicly recommend or support", hint: "The definition says 'publicly recommend or support' -- openly backing something." },
      { keyword: "cause or policy", matchTerms: ["cause", "policy", "position", "idea", "belief", "principle", "movement", "reform", "initiative", "proposal"], label: "A particular cause or policy", hint: "The definition says 'a particular cause or policy' -- the support is directed at something specific." },
    ],
    synonyms: ["champion", "promote", "endorse"],
  },
  {
    word: "benevolent",
    partOfSpeech: "adjective",
    definition: "Well-meaning and kindly; showing goodwill.",
    keyConcepts: [
      { keyword: "well-meaning", matchTerms: ["well-meaning", "kindly", "kind", "generous", "charitable", "compassionat", "caring", "warm", "gentle", "benign", "altruistic", "philanthropic", "considerat", "tender"], label: "Well-meaning and kindly", hint: "The definition says 'well-meaning and kindly' -- genuinely wanting to help." },
      { keyword: "goodwill", matchTerms: ["goodwill", "good intentions", "benevolenc", "humanitari", "magnanimous", "selfless", "gracious", "bountiful", "giving", "noble"], label: "Showing goodwill", hint: "The definition says 'showing goodwill' -- a disposition of wanting good things for others." },
    ],
    synonyms: ["kind", "charitable", "generous"],
  },
  {
    word: "coerce",
    partOfSpeech: "verb",
    definition: "To persuade someone to do something by using force or threats.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuad", "compel", "pressure", "make", "forc", "coerce", "push", "drive", "oblige", "constrain", "bully", "intimidat"], label: "Persuade someone", hint: "The definition says 'persuade someone to do something' -- getting them to act." },
      { keyword: "force or threats", matchTerms: ["force", "threat", "intimidat", "violent", "aggress", "power", "duress", "bully", "menac", "blackmail", "harass", "extort"], label: "By using force or threats", hint: "The definition says 'by using force or threats' -- the persuasion isn't voluntary." },
    ],
    synonyms: ["force", "compel", "pressure"],
  },
  {
    word: "diligent",
    partOfSpeech: "adjective",
    definition: "Having or showing careful and persistent effort.",
    keyConcepts: [
      { keyword: "careful", matchTerms: ["careful", "thorough", "meticulous", "conscienti", "painstaking", "attentiv", "precise", "scrupulous", "rigorous"], label: "Careful", hint: "The definition says 'careful' -- paying close attention to what you're doing." },
      { keyword: "persistent", matchTerms: ["persistent", "steady", "industrious", "hardworking", "tireless", "dedicated", "committed", "unflagging", "assiduous", "tenacious", "disciplined", "devoted", "constant"], label: "Persistent effort", hint: "The definition says 'persistent effort' -- keeping at it over time." },
    ],
    synonyms: ["industrious", "hardworking", "meticulous"],
  },
  {
    word: "exacerbate",
    partOfSpeech: "verb",
    definition: "To make a problem, bad situation, or negative feeling worse.",
    keyConcepts: [
      { keyword: "make worse", matchTerms: ["worse", "worsen", "aggravat", "intensif", "heighten", "amplif", "escalat", "inflam", "compound", "increase", "magnif", "deepen", "exacerbat"], label: "Make worse", hint: "The definition says 'make...worse' -- increasing the severity of something already negative." },
    ],
    synonyms: ["worsen", "aggravate", "intensify"],
  },
  // DAY 231-260
  {
    word: "fluctuate",
    partOfSpeech: "verb",
    definition: "To rise and fall irregularly in number or amount.",
    keyConcepts: [
      { keyword: "rise and fall", matchTerms: ["rise and fall", "go up and down", "vary", "swing", "oscillat", "waver", "shift", "change", "alter", "move", "undulat"], label: "Rise and fall", hint: "The definition says 'rise and fall' -- going up then down then up again." },
      { keyword: "irregularly", matchTerms: ["irregular", "unpredictab", "erratic", "inconsistent", "unstable", "unsteady", "variable", "uneven", "volatile", "sporadic"], label: "Irregularly", hint: "The definition says 'irregularly' -- the changes don't follow a pattern." },
    ],
    synonyms: ["vary", "oscillate", "waver"],
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
    word: "imminent",
    partOfSpeech: "adjective",
    definition: "About to happen; impending.",
    keyConcepts: [
      { keyword: "about to happen", matchTerms: ["about to happen", "impending", "approaching", "forthcoming", "near", "close", "looming", "upon us", "at hand", "around the corner", "on the horizon", "inevitable", "unavoidable", "coming soon", "momentarily"], label: "About to happen; impending", hint: "The definition says 'about to happen; impending' -- very close in time." },
    ],
    synonyms: ["impending", "approaching", "forthcoming"],
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
    word: "lament",
    partOfSpeech: "verb",
    definition: "To mourn a loss or express passionate grief about something.",
    keyConcepts: [
      { keyword: "mourn", matchTerms: ["mourn", "grieve", "sorrow", "weep", "cry", "wail", "bemoan", "bewail", "deplore", "regret"], label: "Mourn a loss", hint: "The definition says 'mourn a loss' -- deep sadness over something gone." },
      { keyword: "passionate grief", matchTerms: ["passionate", "grief", "heartbreak", "anguish", "despair", "torment", "agony", "painful", "intense sadness", "devastat"], label: "Express passionate grief", hint: "The definition says 'express passionate grief' -- the mourning is deep and vocal." },
    ],
    synonyms: ["mourn", "grieve", "bewail"],
  },
  {
    word: "meticulous",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; very careful and precise.",
    keyConcepts: [
      { keyword: "attention to detail", matchTerms: ["attention", "detail", "thorough", "careful", "precise", "exact", "painstaking", "scrupulous", "fastidious", "methodical", "rigorous", "diligent", "conscienti", "perfectionist"], label: "Great attention to detail", hint: "The definition says 'great attention to detail' -- nothing escapes notice." },
    ],
    synonyms: ["thorough", "careful", "precise"],
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
    word: "perpetuate",
    partOfSpeech: "verb",
    definition: "To make something continue indefinitely.",
    keyConcepts: [
      { keyword: "make continue", matchTerms: ["make continue", "maintain", "sustain", "preserv", "prolong", "extend", "keep alive", "keep going", "carry on", "uphold", "entrench", "reinforce", "perpetuat"], label: "Make something continue", hint: "The definition says 'make something continue' -- actively keeping it going." },
      { keyword: "indefinitely", matchTerms: ["indefinit", "forever", "endlessly", "permanent", "ongoing", "lasting", "unending", "without end", "ceaseless", "eternal"], label: "Indefinitely", hint: "The definition says 'continue indefinitely' -- no planned end point." },
    ],
    synonyms: ["maintain", "sustain", "prolong"],
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
    word: "refute",
    partOfSpeech: "verb",
    definition: "To prove a statement or theory to be wrong or false.",
    keyConcepts: [
      { keyword: "prove wrong", matchTerms: ["prove wrong", "prove false", "disprove", "debunk", "contradict", "counter", "rebut", "invalidat", "discredit", "demolish", "overturn", "refut", "negate", "deny", "challenge"], label: "Prove wrong or false", hint: "The definition says 'prove a statement or theory to be wrong or false' -- definitively showing something is incorrect." },
    ],
    synonyms: ["disprove", "debunk", "rebut"],
  },
  {
    word: "scrutinize",
    partOfSpeech: "verb",
    definition: "To examine or inspect closely and thoroughly.",
    keyConcepts: [
      { keyword: "examine closely", matchTerms: ["examine", "inspect", "study", "analyz", "investigat", "review", "survey", "observ", "scruti", "probe", "dissect", "pore over", "check", "audit", "apprais", "assess", "evaluat"], label: "Examine closely and thoroughly", hint: "The definition says 'examine or inspect closely and thoroughly' -- looking at something with great care." },
    ],
    synonyms: ["examine", "inspect", "analyze"],
  },
  {
    word: "tenacious",
    partOfSpeech: "adjective",
    definition: "Tending to keep a firm hold of something; persistent and determined.",
    keyConcepts: [
      { keyword: "firm hold", matchTerms: ["firm hold", "grip", "cling", "grasp", "hold on", "not let go", "resolut", "steadfast", "unwavering", "unflinching", "unyielding", "stubbornly"], label: "Keeping a firm hold", hint: "The definition says 'tending to keep a firm hold' -- refusing to let go." },
      { keyword: "persistent", matchTerms: ["persistent", "determined", "dogged", "relentless", "persever", "tireless", "indefatigab", "unrelenting", "single-minded", "driven", "committ", "dedicated"], label: "Persistent and determined", hint: "The definition says 'persistent and determined' -- not giving up no matter what." },
    ],
    synonyms: ["persistent", "determined", "dogged"],
  },
  {
    word: "ubiquitous",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "omnipresent", "pervasive", "widespread", "universal", "all-pervading", "prevalent", "common", "far-reaching", "all around", "inescapable", "all over", "ever-present", "across"], label: "Present everywhere", hint: "The definition says 'present, appearing, or found everywhere' -- you encounter it wherever you go." },
    ],
    synonyms: ["omnipresent", "pervasive", "widespread"],
  },
  {
    word: "vindicate",
    partOfSpeech: "verb",
    definition: "To clear someone of blame or suspicion; to prove to be right or justified.",
    keyConcepts: [
      { keyword: "clear of blame", matchTerms: ["clear", "blame", "suspicion", "exonerat", "absolv", "acquit", "free", "discharg", "pardon", "redeem", "rehabilitat"], label: "Clear of blame", hint: "The definition says 'clear someone of blame or suspicion' -- removing an accusation." },
      { keyword: "prove right", matchTerms: ["prove right", "justified", "justify", "confirm", "validat", "substantiat", "verify", "uphold", "support", "back up", "demonstrat"], label: "Prove right or justified", hint: "The definition says 'prove to be right or justified' -- showing a decision or action was correct." },
    ],
    synonyms: ["exonerate", "justify", "validate"],
  },
  // DAY 261-290
  {
    word: "alleviate",
    partOfSpeech: "verb",
    definition: "To make suffering, a problem, or a bad situation less severe.",
    keyConcepts: [
      { keyword: "make less severe", matchTerms: ["less severe", "reduce", "lessen", "diminish", "ease", "relieve", "mitigat", "alleviat", "lighten", "soothe", "soften", "moderate", "palliat", "dull", "calm"], label: "Make less severe", hint: "The definition says 'make...less severe' -- not eliminating, but easing the burden." },
    ],
    synonyms: ["ease", "relieve", "mitigate"],
  },
  {
    word: "brevity",
    partOfSpeech: "noun",
    definition: "Concise and exact use of words in writing or speech; shortness of time.",
    keyConcepts: [
      { keyword: "concise", matchTerms: ["concise", "brief", "short", "succinct", "terse", "pithy", "compact", "crisp", "economical", "to the point", "condensed"], label: "Concise use of words", hint: "The definition says 'concise and exact use of words' -- saying much with few words." },
    ],
    synonyms: ["conciseness", "succinctness", "briefness"],
  },
  {
    word: "complacent",
    partOfSpeech: "adjective",
    definition: "Showing smug or uncritical satisfaction with oneself or one's achievements.",
    keyConcepts: [
      { keyword: "smug satisfaction", matchTerms: ["smug", "satisfaction", "self-satisfied", "self-congratulat", "pleased with oneself", "content", "unconcern", "untroubl", "complacen"], label: "Smug satisfaction", hint: "The definition says 'smug or uncritical satisfaction' -- a lazy sense of being good enough." },
      { keyword: "uncritical", matchTerms: ["uncritical", "unaware", "oblivious", "blind", "ignoring", "overconfid", "dismissive", "careless", "lazy", "apathetic", "indifferent", "not concern"], label: "Uncritical", hint: "The definition says 'uncritical' -- not examining whether things are actually as good as assumed." },
    ],
    synonyms: ["self-satisfied", "smug", "unconcerned"],
  },
  {
    word: "denounce",
    partOfSpeech: "verb",
    definition: "To publicly declare to be wrong or evil; to condemn openly.",
    keyConcepts: [
      { keyword: "publicly declare", matchTerms: ["publicly", "declare", "announce", "proclaim", "state", "voice", "speak out", "call out", "openly", "outspoken"], label: "Publicly declare", hint: "The definition says 'publicly declare' -- making the condemnation open and known." },
      { keyword: "wrong or evil", matchTerms: ["wrong", "evil", "condemn", "criticiz", "censure", "attack", "vilif", "stigmatiz", "decry", "repudiat", "damn", "berate", "castigat", "pillory"], label: "Wrong or evil; condemn", hint: "The definition says 'to be wrong or evil; to condemn openly' -- strong moral judgment." },
    ],
    synonyms: ["condemn", "criticize", "censure"],
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
    word: "hypothesis",
    partOfSpeech: "noun",
    definition: "A proposed explanation made on the basis of limited evidence as a starting point for further investigation.",
    keyConcepts: [
      { keyword: "proposed explanation", matchTerms: ["proposed", "explanation", "theory", "idea", "proposition", "assumption", "conjecture", "supposition", "thesis", "premis", "postulat"], label: "Proposed explanation", hint: "The definition says 'a proposed explanation' -- a suggested answer, not a proven one." },
      { keyword: "starting point for investigation", matchTerms: ["starting point", "investigat", "research", "experiment", "test", "further", "basis", "evidence", "limited", "preliminary", "initial", "tentative", "unproven"], label: "Starting point for investigation", hint: "The definition says 'as a starting point for further investigation' -- a hypothesis needs to be tested." },
    ],
    synonyms: ["theory", "conjecture", "proposition"],
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
    word: "mitigate",
    partOfSpeech: "verb",
    definition: "To make less severe, serious, or painful.",
    keyConcepts: [
      { keyword: "make less severe", matchTerms: ["less severe", "less serious", "less painful", "reduce", "diminish", "lessen", "alleviat", "ease", "reliev", "moderate", "soften", "temper", "lighten", "dull", "cushion", "blunt", "mitigat"], label: "Make less severe", hint: "The definition says 'make less severe, serious, or painful' -- reducing the impact of something negative." },
    ],
    synonyms: ["alleviate", "lessen", "reduce"],
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
    word: "obsolete",
    partOfSpeech: "adjective",
    definition: "No longer produced or used; out of date.",
    keyConcepts: [
      { keyword: "no longer used", matchTerms: ["no longer", "outdated", "out of date", "old-fashioned", "antiquated", "archaic", "defunct", "retired", "discarded", "abandoned", "superseded", "replaced", "bygone", "dated", "extinct"], label: "No longer produced or used", hint: "The definition says 'no longer produced or used' -- it's been left behind." },
    ],
    synonyms: ["outdated", "antiquated", "defunct"],
  },
  {
    word: "paradox",
    partOfSpeech: "noun",
    definition: "A seemingly absurd or self-contradictory statement or proposition that may prove to be true.",
    keyConcepts: [
      { keyword: "self-contradictory", matchTerms: ["contradict", "self-contradict", "inconsisten", "opposing", "conflicting", "impossible", "absurd", "illogical", "oxymoron", "ironic"], label: "Seemingly self-contradictory", hint: "The definition says 'seemingly absurd or self-contradictory' -- it appears to make no sense." },
      { keyword: "may prove true", matchTerms: ["may prove true", "actually true", "deeper truth", "reveal", "insight", "wisdom", "surprisingly", "unexpectedly", "hidden meaning", "beneath the surface"], label: "May prove to be true", hint: "The definition says 'may prove to be true' -- beneath the contradiction lies real truth." },
    ],
    synonyms: ["contradiction", "anomaly", "puzzle"],
  },
  // DAY 291-320
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
    word: "stagnant",
    partOfSpeech: "adjective",
    definition: "Having no activity, growth, or development; showing no advancement.",
    keyConcepts: [
      { keyword: "no activity", matchTerms: ["no activity", "no growth", "no development", "inactive", "still", "motionless", "static", "stagnant", "dormant", "idle", "lifeless", "inert", "sluggish", "flat", "stuck"], label: "No activity or growth", hint: "The definition says 'having no activity, growth, or development' -- nothing is happening." },
    ],
    synonyms: ["inactive", "static", "dormant"],
  },
  {
    word: "tangible",
    partOfSpeech: "adjective",
    definition: "Clear and definite; real; able to be touched or felt.",
    keyConcepts: [
      { keyword: "clear and real", matchTerms: ["clear", "definite", "real", "concret", "actual", "substantia", "solid", "physical", "material", "palpable", "perceptib", "evident", "visible", "measurabl"], label: "Clear, definite, and real", hint: "The definition says 'clear and definite; real' -- you can point to it, it's not abstract." },
      { keyword: "able to be touched", matchTerms: ["touch", "felt", "tactile", "tangible", "handle", "hold", "grasp", "sense", "texture"], label: "Able to be touched or felt", hint: "The definition says 'able to be touched or felt' -- physically present." },
    ],
    synonyms: ["concrete", "real", "palpable"],
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
    word: "volatile",
    partOfSpeech: "adjective",
    definition: "Liable to change rapidly and unpredictably, especially for the worse.",
    keyConcepts: [
      { keyword: "change rapidly", matchTerms: ["change", "rapidly", "quickly", "suddenly", "shift", "swing", "fluctuat", "unstable", "erratic", "turbulent", "explosive", "tempestuous"], label: "Liable to change rapidly", hint: "The definition says 'liable to change rapidly' -- things can shift fast." },
      { keyword: "unpredictably", matchTerms: ["unpredictab", "uncertain", "unreliab", "capricious", "mercurial", "fitful", "inconsistent", "unsteady", "wildly", "dangerously", "for the worse"], label: "Unpredictably, especially for the worse", hint: "The definition says 'unpredictably, especially for the worse' -- the changes tend to be negative." },
    ],
    synonyms: ["unpredictable", "unstable", "erratic"],
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
    word: "benign",
    partOfSpeech: "adjective",
    definition: "Gentle and kindly; not harmful in effect.",
    keyConcepts: [
      { keyword: "gentle", matchTerms: ["gentle", "kindly", "kind", "mild", "tender", "warm", "amiable", "good-natured", "benevolent", "gracious", "compassionat"], label: "Gentle and kindly", hint: "The definition says 'gentle and kindly' -- a warm, non-threatening quality." },
      { keyword: "not harmful", matchTerms: ["not harmful", "harmless", "innocuous", "safe", "non-threatening", "non-malignant", "non-dangerous", "inoffensiv", "mild", "benign"], label: "Not harmful in effect", hint: "The definition says 'not harmful in effect' -- having no negative impact." },
    ],
    synonyms: ["harmless", "gentle", "mild"],
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
    word: "diminish",
    partOfSpeech: "verb",
    definition: "To make or become less in size, importance, or value.",
    keyConcepts: [
      { keyword: "make less", matchTerms: ["make less", "become less", "reduce", "decrease", "lessen", "shrink", "decline", "dwindl", "wane", "fade", "recede", "taper", "ebb", "contract", "degrad", "lower", "drop"], label: "Make or become less", hint: "The definition says 'make or become less in size, importance, or value' -- getting smaller or weaker." },
    ],
    synonyms: ["reduce", "decrease", "lessen"],
  },
  {
    word: "eloquent",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing.",
    keyConcepts: [
      { keyword: "fluent", matchTerms: ["fluent", "articulat", "well-spoken", "smooth", "polished", "graceful", "expressive", "silver-tongued", "eloquent", "masterful", "skilled", "gifted"], label: "Fluent", hint: "The definition says 'fluent' -- words come easily and beautifully." },
      { keyword: "persuasive", matchTerms: ["persuasiv", "convinc", "compel", "powerful", "moving", "stirring", "effectiv", "forceful", "impactful", "impassion", "inspiring", "riveting", "captivat"], label: "Persuasive in speaking or writing", hint: "The definition says 'persuasive in speaking or writing' -- eloquence moves people." },
    ],
    synonyms: ["articulate", "expressive", "persuasive"],
  },
  {
    word: "futile",
    partOfSpeech: "adjective",
    definition: "Incapable of producing any useful result; pointless.",
    keyConcepts: [
      { keyword: "incapable of result", matchTerms: ["incapable", "useless", "pointless", "fruitless", "vain", "hopeless", "ineffectu", "ineffectiv", "unavailing", "unsuccessful", "wasted", "worthless", "meaningless", "empty", "in vain", "to no avail"], label: "Incapable of producing useful result; pointless", hint: "The definition says 'incapable of producing any useful result; pointless' -- no matter what you do, it won't work." },
    ],
    synonyms: ["pointless", "useless", "fruitless"],
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
  // DAY 321-365
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
    word: "notorious",
    partOfSpeech: "adjective",
    definition: "Famous or well known, typically for some bad quality or deed.",
    keyConcepts: [
      { keyword: "well known", matchTerms: ["famous", "well known", "recognized", "prominent", "renowned", "celebrated", "infamous", "notorious", "famed", "legendary"], label: "Famous or well known", hint: "The definition says 'famous or well known' -- widely recognized." },
      { keyword: "for something bad", matchTerms: ["bad quality", "bad deed", "negative", "scandal", "crime", "wrongdoing", "infam", "disreputable", "disgraceful", "shameful", "villainous", "criminal"], label: "For some bad quality or deed", hint: "The definition says 'typically for some bad quality or deed' -- notorious fame is negative fame." },
    ],
    synonyms: ["infamous", "disreputable", "scandalous"],
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
    word: "precarious",
    partOfSpeech: "adjective",
    definition: "Not securely held or in position; dangerously likely to fall or collapse.",
    keyConcepts: [
      { keyword: "not securely held", matchTerms: ["not secure", "unstable", "unsteady", "shaky", "wobbly", "insecure", "uncertain", "unreliab", "risky", "delicate", "fragile", "tenuous", "flimsy"], label: "Not securely held", hint: "The definition says 'not securely held or in position' -- barely hanging on." },
      { keyword: "likely to fall", matchTerms: ["likely to fall", "collapse", "danger", "peril", "hazard", "vulnerable", "at risk", "on the edge", "on the brink", "teetering", "tottering", "topple"], label: "Dangerously likely to fall", hint: "The definition says 'dangerously likely to fall or collapse' -- could give way at any moment." },
    ],
    synonyms: ["unstable", "insecure", "risky"],
  },
  {
    word: "rhetoric",
    partOfSpeech: "noun",
    definition: "The art of effective or persuasive speaking or writing; language designed to have a persuasive or impressive effect.",
    keyConcepts: [
      { keyword: "persuasive language", matchTerms: ["persuasiv", "language", "speech", "writing", "oratory", "eloquenc", "articulat", "communic", "discourse", "argument", "rhetoric"], label: "Persuasive speaking or writing", hint: "The definition says 'effective or persuasive speaking or writing' -- using language to influence." },
      { keyword: "designed to impress", matchTerms: ["designed", "impress", "effect", "impact", "influenc", "craft", "techniqu", "style", "art", "skill", "deliberat", "calculat"], label: "Designed to have effect", hint: "The definition says 'language designed to have a persuasive or impressive effect' -- rhetoric is strategic." },
    ],
    synonyms: ["oratory", "eloquence", "persuasion"],
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
    word: "verbose",
    partOfSpeech: "adjective",
    definition: "Using or expressed in more words than are needed.",
    keyConcepts: [
      { keyword: "more words than needed", matchTerms: ["more words than needed", "wordy", "lengthy", "long-winded", "rambling", "prolix", "diffuse", "drawn-out", "overlong", "repetitious", "redundant", "padded", "bloated", "excessive"], label: "More words than needed", hint: "The definition says 'using or expressed in more words than are needed' -- saying in 50 words what could be said in 10." },
    ],
    synonyms: ["wordy", "long-winded", "prolix"],
  },
  {
    word: "arbitrary",
    partOfSpeech: "adjective",
    definition: "Based on random choice or personal whim, rather than any reason or system.",
    keyConcepts: [
      { keyword: "random choice", matchTerms: ["random", "chance", "haphazard", "unpredictab", "unsystemat", "capricious", "whim", "whimsical", "impulsive"], label: "Based on random choice", hint: "The definition says 'based on random choice or personal whim' -- no logic behind it." },
      { keyword: "not based on reason", matchTerms: ["not reason", "no reason", "no system", "irrational", "unjustif", "unfounded", "groundless", "baseless", "without basis", "unreasonab", "subjective", "rather than"], label: "Rather than reason or system", hint: "The definition says 'rather than any reason or system' -- the opposite of methodical." },
    ],
    synonyms: ["random", "capricious", "whimsical"],
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
    word: "disparity",
    partOfSpeech: "noun",
    definition: "A great difference between things, especially an unfair one.",
    keyConcepts: [
      { keyword: "great difference", matchTerms: ["great difference", "gap", "inequality", "imbalance", "discrepancy", "divergence", "unevenness", "contrast", "mismatch", "divide", "chasm", "gulf"], label: "Great difference", hint: "The definition says 'a great difference' -- a significant gap between two things." },
      { keyword: "especially unfair", matchTerms: ["unfair", "unjust", "inequitable", "unequal", "biased", "lopsided", "disproportionat", "skewed", "asymmetric"], label: "Especially unfair", hint: "The definition says 'especially an unfair one' -- the difference carries a sense of injustice." },
    ],
    synonyms: ["inequality", "discrepancy", "gap"],
  },
  {
    word: "empathy",
    partOfSpeech: "noun",
    definition: "The ability to understand and share the feelings of another.",
    keyConcepts: [
      { keyword: "understand feelings", matchTerms: ["understand", "comprehend", "recogniz", "perceiv", "appreciat", "aware", "insight", "sensitiv", "attun", "identify with"], label: "Understand the feelings", hint: "The definition says 'the ability to understand' -- cognitively grasping how someone feels." },
      { keyword: "share feelings", matchTerms: ["share", "feelings", "emotions", "feel", "connect", "relate", "resonate", "experience", "compassion", "sympathy", "another", "others", "someone else"], label: "Share the feelings of another", hint: "The definition says 'and share the feelings of another' -- not just understanding but actually feeling it yourself." },
    ],
    synonyms: ["compassion", "understanding", "sympathy"],
  },
  {
    word: "formidable",
    partOfSpeech: "adjective",
    definition: "Inspiring fear or respect through being impressively large, powerful, or capable.",
    keyConcepts: [
      { keyword: "inspiring fear or respect", matchTerms: ["inspir", "fear", "respect", "awe", "intimidat", "daunting", "imposing", "commanding", "overwhelm", "fearsome", "redoubtabl"], label: "Inspiring fear or respect", hint: "The definition says 'inspiring fear or respect' -- making others take notice." },
      { keyword: "large powerful capable", matchTerms: ["large", "powerful", "capable", "strong", "mighty", "forceful", "potent", "dominant", "skilled", "talented", "impressive", "remarkable", "extraordinary"], label: "Impressively large, powerful, or capable", hint: "The definition says 'through being impressively large, powerful, or capable' -- the source of the intimidation." },
    ],
    synonyms: ["imposing", "daunting", "impressive"],
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
    word: "integrity",
    partOfSpeech: "noun",
    definition: "The quality of being honest and having strong moral principles.",
    keyConcepts: [
      { keyword: "honest", matchTerms: ["honest", "truthful", "sincere", "trustworth", "honorabl", "upright", "ethical", "principled", "integrit", "forthright", "transparent", "straight"], label: "Being honest", hint: "The definition says 'the quality of being honest' -- telling the truth and being genuine." },
      { keyword: "strong moral principles", matchTerms: ["moral", "principl", "virtue", "character", "conscience", "values", "standards", "ethics", "rectitude", "decency", "righteousness", "scrupulous"], label: "Strong moral principles", hint: "The definition says 'having strong moral principles' -- a deep commitment to doing what's right." },
    ],
    synonyms: ["honesty", "uprightness", "virtue"],
    altDefinitions: [
      {
        definition: "The state of being whole and undivided; structural soundness.",
        keyConcepts: [
          { keyword: "whole", matchTerms: ["whole", "complete", "undivid", "intact", "unbroken", "unified", "together", "cohesive", "sound", "solid"], label: "Whole and undivided", hint: "Integrity can also mean being whole and undivided -- nothing broken or missing." },
          { keyword: "structural soundness", matchTerms: ["structur", "sound", "strong", "stable", "reliable", "durable", "condition", "quality", "robust", "uncompromis"], label: "Structural soundness", hint: "Integrity also refers to the soundness of a structure or system." },
        ],
      },
    ],
  },
  {
    word: "juxtaposition",
    partOfSpeech: "noun",
    definition: "The fact of two things being seen or placed close together for contrasting effect.",
    keyConcepts: [
      { keyword: "placed close together", matchTerms: ["placed close", "side by side", "adjacent", "alongside", "together", "near", "next to", "pairing", "combin", "arrang"], label: "Placed close together", hint: "The definition says 'being seen or placed close together' -- put next to each other." },
      { keyword: "contrasting effect", matchTerms: ["contrast", "compar", "differ", "opposi", "highlight", "distinction", "tension", "clash", "reveal", "emphasiz"], label: "For contrasting effect", hint: "The definition says 'for contrasting effect' -- the closeness highlights the differences." },
    ],
    synonyms: ["contrast", "comparison", "pairing"],
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
    word: "magnanimous",
    partOfSpeech: "adjective",
    definition: "Very generous or forgiving, especially toward a rival or someone less powerful.",
    keyConcepts: [
      { keyword: "generous or forgiving", matchTerms: ["generous", "forgiving", "charitable", "gracious", "noble", "big-hearted", "kind", "merciful", "lenient", "benevolent", "selfless", "altruistic", "clement"], label: "Very generous or forgiving", hint: "The definition says 'very generous or forgiving' -- showing extraordinary kindness." },
      { keyword: "toward a rival", matchTerms: ["rival", "less powerful", "enemy", "opponent", "adversary", "weaker", "subordinat", "inferior", "defeated", "vanquished", "underdog"], label: "Toward a rival or someone less powerful", hint: "The definition says 'especially toward a rival or someone less powerful' -- magnanimity is most notable when you have the upper hand." },
    ],
    synonyms: ["generous", "noble", "gracious"],
  },
  {
    word: "nostalgia",
    partOfSpeech: "noun",
    definition: "A sentimental longing or wistful affection for the past.",
    keyConcepts: [
      { keyword: "sentimental longing", matchTerms: ["sentimental", "longing", "yearning", "wistful", "pining", "aching", "bittersweet", "tender", "emotional", "romantic", "fond"], label: "Sentimental longing", hint: "The definition says 'a sentimental longing or wistful affection' -- a warm but sad feeling." },
      { keyword: "for the past", matchTerms: ["past", "memory", "memories", "rememb", "former", "bygone", "childhood", "youth", "old times", "ago", "earlier", "once was", "used to be", "looking back"], label: "For the past", hint: "The definition says 'for the past' -- nostalgia is always backward-looking." },
    ],
    synonyms: ["longing", "wistfulness", "sentimentality"],
  },
  {
    word: "opaque",
    partOfSpeech: "adjective",
    definition: "Not able to be seen through; not transparent. Also: difficult to understand.",
    keyConcepts: [
      { keyword: "not transparent", matchTerms: ["not transparent", "not see through", "blocks light", "impenetrab", "cloudy", "murky", "dark", "dense", "thick", "solid", "obscur"], label: "Not able to be seen through", hint: "The definition says 'not able to be seen through; not transparent' -- light cannot pass through." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "unclear", "confus", "obscur", "incomprehensib", "cryptic", "unintelligib", "impenetrab", "mystif", "baffling", "abstruse"], label: "Difficult to understand", hint: "The definition also says 'difficult to understand' -- opaque writing or reasoning blocks comprehension." },
    ],
    synonyms: ["cloudy", "murky", "obscure"],
  },
  {
    word: "prolific",
    partOfSpeech: "adjective",
    definition: "Present in large numbers or quantities; producing much fruit, foliage, or many works.",
    keyConcepts: [
      { keyword: "large quantities", matchTerms: ["large", "quantities", "abundant", "numerous", "plentiful", "copious", "profuse", "prolific", "extensive", "voluminous", "prodigious"], label: "Present in large quantities", hint: "The definition says 'present in large numbers or quantities' -- a lot of output." },
      { keyword: "producing much", matchTerms: ["producing", "productive", "creative", "fertile", "fruitful", "generative", "output", "yield", "work", "writing", "art", "inventive", "industrious"], label: "Producing much", hint: "The definition says 'producing much fruit, foliage, or many works' -- prolific people or things create abundantly." },
    ],
    synonyms: ["productive", "fertile", "abundant"],
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
    word: "skeptical",
    partOfSpeech: "adjective",
    definition: "Not easily convinced; having doubts or reservations.",
    keyConcepts: [
      { keyword: "not easily convinced", matchTerms: ["not easily convinced", "doubtful", "doubting", "questioning", "uncertain", "unconvinced", "incredulous", "disbeliev", "suspicious", "mistrustful", "distrustful", "wary", "cynical"], label: "Not easily convinced", hint: "The definition says 'not easily convinced' -- requiring proof before believing." },
      { keyword: "doubts or reservations", matchTerms: ["doubts", "reservations", "hesitation", "qualms", "misgivings", "reluctanc", "caution", "concern", "uncertain", "unease"], label: "Having doubts or reservations", hint: "The definition says 'having doubts or reservations' -- holding back from full acceptance." },
    ],
    synonyms: ["doubtful", "questioning", "cynical"],
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
    word: "utilitarian",
    partOfSpeech: "adjective",
    definition: "Designed to be useful or practical rather than attractive.",
    keyConcepts: [
      { keyword: "useful or practical", matchTerms: ["useful", "practical", "functional", "utilitarian", "pragmatic", "efficient", "serviceable", "workable", "handy", "purposeful", "applied"], label: "Useful or practical", hint: "The definition says 'designed to be useful or practical' -- serving a purpose." },
      { keyword: "rather than attractive", matchTerms: ["rather than attractive", "not attractive", "plain", "simple", "unadorned", "no-frills", "austere", "spartan", "basic", "stripped-down", "unglamorous", "aesthet"], label: "Rather than attractive", hint: "The definition says 'rather than attractive' -- function over form." },
    ],
    synonyms: ["practical", "functional", "pragmatic"],
  },
  {
    word: "vulnerable",
    partOfSpeech: "adjective",
    definition: "Susceptible to physical or emotional attack or harm; exposed to danger.",
    keyConcepts: [
      { keyword: "susceptible to harm", matchTerms: ["susceptibl", "harm", "attack", "danger", "exposed", "unprotected", "defenseless", "helpless", "at risk", "open to", "prey", "weak", "fragil", "vulnerabl"], label: "Susceptible to attack or harm", hint: "The definition says 'susceptible to physical or emotional attack or harm' -- lacking protection." },
    ],
    synonyms: ["exposed", "defenseless", "unprotected"],
  },
  {
    word: "wistful",
    partOfSpeech: "adjective",
    definition: "Having or showing a feeling of vague or regretful longing.",
    keyConcepts: [
      { keyword: "regretful longing", matchTerms: ["regretful", "longing", "yearning", "wishful", "pining", "melanchol", "bittersweet", "nostalgic", "wistful", "sad", "pensiv", "reflectiv", "dreamy", "mournful"], label: "Vague or regretful longing", hint: "The definition says 'vague or regretful longing' -- a gentle sadness about something wished for." },
    ],
    synonyms: ["longing", "yearning", "melancholy"],
  },
  {
    word: "zeal",
    partOfSpeech: "noun",
    definition: "Great energy or enthusiasm in pursuit of a cause or an objective.",
    keyConcepts: [
      { keyword: "great energy", matchTerms: ["great energy", "enthusiasm", "passion", "fervor", "fervour", "ardor", "ardour", "vigor", "vigour", "eagerness", "dedicat", "devot", "commitment", "drive", "fire", "intensity"], label: "Great energy or enthusiasm", hint: "The definition says 'great energy or enthusiasm' -- burning passion." },
      { keyword: "pursuit of cause", matchTerms: ["pursuit", "cause", "objective", "goal", "mission", "purpose", "quest", "endeavor", "endeavour", "crusade", "campaign", "ambition"], label: "In pursuit of a cause", hint: "The definition says 'in pursuit of a cause or an objective' -- the energy is directed at something." },
    ],
    synonyms: ["enthusiasm", "passion", "fervor"],
  },
  // DAYS 366-440 (extra buffer so we always have enough)
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
    word: "erratic",
    partOfSpeech: "adjective",
    definition: "Not even or regular in pattern; unpredictable and inconsistent.",
    keyConcepts: [
      { keyword: "not regular", matchTerms: ["not regular", "irregular", "uneven", "inconsistent", "unpredictab", "unreliab", "fitful", "sporadic", "random", "chaotic", "haphazard", "unstable", "variable"], label: "Not regular; unpredictable", hint: "The definition says 'not even or regular in pattern; unpredictable' -- all over the place." },
    ],
    synonyms: ["unpredictable", "inconsistent", "irregular"],
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
    word: "succinct",
    partOfSpeech: "adjective",
    definition: "Briefly and clearly expressed.",
    keyConcepts: [
      { keyword: "briefly", matchTerms: ["briefly", "brief", "short", "concise", "compact", "terse", "pithy", "crisp", "to the point", "condensed", "economical", "laconic", "snappy"], label: "Briefly expressed", hint: "The definition says 'briefly...expressed' -- using as few words as possible." },
      { keyword: "clearly", matchTerms: ["clearly", "clear", "precise", "exact", "direct", "straightforward", "unambiguous", "well-put", "sharp", "neat"], label: "Clearly expressed", hint: "The definition says 'clearly expressed' -- not just short, but also easy to understand." },
    ],
    synonyms: ["concise", "brief", "pithy"],
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
    word: "vigor",
    partOfSpeech: "noun",
    definition: "Physical strength and good health; effort, energy, and enthusiasm.",
    keyConcepts: [
      { keyword: "physical strength", matchTerms: ["physical strength", "strong", "healthy", "robust", "fit", "vital", "hardy", "sturdy", "powerful", "able-bodied"], label: "Physical strength and health", hint: "The definition says 'physical strength and good health' -- a body that works well." },
      { keyword: "energy and enthusiasm", matchTerms: ["energy", "enthusiasm", "effort", "vitality", "dynamism", "drive", "spirit", "zest", "verve", "pep", "gusto", "passion", "intensity"], label: "Energy and enthusiasm", hint: "The definition says 'effort, energy, and enthusiasm' -- vigor powers action." },
    ],
    synonyms: ["vitality", "energy", "strength"],
  },
  {
    word: "whimsical",
    partOfSpeech: "adjective",
    definition: "Playfully quaint or fanciful, especially in an appealing way.",
    keyConcepts: [
      { keyword: "playfully fanciful", matchTerms: ["playful", "fanciful", "imaginative", "capricious", "quirky", "eccentric", "lighthearted", "fun", "amusing", "delightful", "charming", "unusual", "unpredictable", "spontaneous"], label: "Playfully fanciful", hint: "The definition says 'playfully quaint or fanciful' -- light, creative, and a little offbeat." },
    ],
    synonyms: ["fanciful", "quirky", "playful"],
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
    word: "dormant",
    partOfSpeech: "adjective",
    definition: "Having normal physical functions suspended or slowed; inactive but capable of becoming active.",
    keyConcepts: [
      { keyword: "suspended or slowed", matchTerms: ["suspended", "slowed", "inactive", "sleeping", "resting", "hibernat", "latent", "quiescent", "idle", "still", "inert", "stagnant"], label: "Functions suspended or slowed", hint: "The definition says 'having normal physical functions suspended or slowed' -- temporarily shut down." },
      { keyword: "capable of becoming active", matchTerms: ["capable of becoming active", "potential", "latent", "underlying", "waiting", "ready", "poised", "smoldering", "lurking", "hidden", "dormant"], label: "Capable of becoming active", hint: "The definition says 'inactive but capable of becoming active' -- it can wake up at any time." },
    ],
    synonyms: ["inactive", "latent", "hibernating"],
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
    word: "frugal",
    partOfSpeech: "adjective",
    definition: "Sparing or economical with regard to money or food.",
    keyConcepts: [
      { keyword: "sparing", matchTerms: ["sparing", "economical", "thrifty", "frugal", "careful", "prudent", "saving", "conserving", "modest", "austere", "simple", "plain", "spartan", "meager"], label: "Sparing or economical", hint: "The definition says 'sparing or economical' -- using only what's necessary, nothing wasted." },
    ],
    synonyms: ["thrifty", "economical", "sparing"],
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
    word: "vehement",
    partOfSpeech: "adjective",
    definition: "Showing strong feeling; forceful, passionate, or intense.",
    keyConcepts: [
      { keyword: "strong feeling", matchTerms: ["strong feeling", "forceful", "passionate", "intense", "fervent", "fierce", "ardent", "vigorous", "zealous", "emphatic", "powerful", "impassioned", "earnest", "heated"], label: "Showing strong feeling; intense", hint: "The definition says 'showing strong feeling; forceful, passionate, or intense' -- delivered with real conviction." },
    ],
    synonyms: ["passionate", "forceful", "intense"],
  },
  {
    word: "wane",
    partOfSpeech: "verb",
    definition: "To decrease gradually in power, size, intensity, or extent.",
    keyConcepts: [
      { keyword: "decrease gradually", matchTerms: ["decrease", "gradually", "diminish", "decline", "fade", "dwindle", "ebb", "recede", "weaken", "lessen", "shrink", "subside", "taper", "wither", "abate"], label: "Decrease gradually", hint: "The definition says 'decrease gradually in power, size, intensity, or extent' -- slowly getting less." },
    ],
    synonyms: ["diminish", "decline", "fade"],
  },
  {
    word: "zenith",
    partOfSpeech: "noun",
    definition: "The time at which something is most powerful or successful; the peak.",
    keyConcepts: [
      { keyword: "most powerful", matchTerms: ["most powerful", "most successful", "peak", "summit", "pinnacle", "apex", "climax", "height", "top", "acme", "crowning point", "high point", "crest", "prime"], label: "Most powerful or successful; peak", hint: "The definition says 'the time at which something is most powerful or successful' -- the absolute highest point." },
    ],
    synonyms: ["peak", "pinnacle", "summit"],
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
    word: "deviate",
    partOfSpeech: "verb",
    definition: "To depart from an established course or accepted standard.",
    keyConcepts: [
      { keyword: "depart from", matchTerms: ["depart", "stray", "diverge", "veer", "wander", "drift", "swerve", "differ", "digress", "deviate", "move away", "turn aside"], label: "Depart from a course", hint: "The definition says 'depart from an established course' -- going off the expected path." },
      { keyword: "accepted standard", matchTerms: ["course", "standard", "norm", "plan", "path", "rule", "expectation", "convention", "tradition", "protocol", "routine"], label: "Established course or standard", hint: "The definition says 'an established course or accepted standard' -- there's a baseline to deviate from." },
    ],
    synonyms: ["diverge", "stray", "veer"],
  },
  {
    word: "exonerate",
    partOfSpeech: "verb",
    definition: "To absolve someone from blame for a fault or wrongdoing, especially after due consideration.",
    keyConcepts: [
      { keyword: "absolve from blame", matchTerms: ["absolve", "blame", "clear", "free", "acquit", "vindicate", "exculpat", "discharge", "pardon", "forgive", "reliev", "declare innocent"], label: "Absolve from blame", hint: "The definition says 'absolve someone from blame for a fault or wrongdoing' -- officially clearing them." },
    ],
    synonyms: ["absolve", "vindicate", "acquit"],
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
    word: "impede",
    partOfSpeech: "verb",
    definition: "To delay or prevent someone or something by obstructing them; to hinder.",
    keyConcepts: [
      { keyword: "delay or prevent", matchTerms: ["delay", "prevent", "obstruct", "hinder", "block", "hamper", "restrict", "inhibit", "slow", "hold up", "hold back", "stall", "thwart", "retard", "interfere"], label: "Delay or prevent by obstructing", hint: "The definition says 'delay or prevent someone or something by obstructing them' -- getting in the way." },
    ],
    synonyms: ["hinder", "obstruct", "hamper"],
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
    word: "replenish",
    partOfSpeech: "verb",
    definition: "To fill something up again; to restore to the former level or condition.",
    keyConcepts: [
      { keyword: "fill up again", matchTerms: ["fill up again", "refill", "restock", "resupply", "replenish", "reload", "top up", "replace", "renew", "restore", "refresh", "revive", "rejuvenat"], label: "Fill up again; restore", hint: "The definition says 'fill something up again; restore to the former level' -- bringing it back to where it was." },
    ],
    synonyms: ["refill", "restock", "restore"],
  },
  {
    word: "sporadic",
    partOfSpeech: "adjective",
    definition: "Occurring at irregular intervals or only in a few places; scattered or isolated.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "infrequent", "occasional", "intermittent", "erratic", "random", "unpredictab", "periodic", "fitful", "scattered", "isolated", "rare", "uncommon", "sparse", "few"], label: "Occurring at irregular intervals", hint: "The definition says 'occurring at irregular intervals or only in a few places' -- happening now and then, without pattern." },
    ],
    synonyms: ["intermittent", "occasional", "scattered"],
  },
  // ── 346. kindle ──
  {
    word: "kindle",
    partOfSpeech: "verb",
    definition: "To light or set on fire; to arouse or inspire an emotion or feeling.",
    keyConcepts: [
      { keyword: "set on fire", matchTerms: ["fire", "light", "ignit", "burn", "flame", "spark", "blaze", "combust"], label: "Light or set on fire", hint: "The definition says 'light or set on fire' -- literally starting a flame." },
      { keyword: "arouse emotion", matchTerms: ["arous", "inspir", "stir", "provok", "awaken", "excite", "stimulat", "evoke", "trigger", "incit", "inflam"], label: "Arouse or inspire emotion", hint: "The definition says 'arouse or inspire an emotion or feeling' -- figuratively sparking something inside." },
    ],
    synonyms: ["ignite", "inspire", "arouse"],
  },
  // ── 347. mingle ──
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
  // ── 348. outweigh ──
  {
    word: "outweigh",
    partOfSpeech: "verb",
    definition: "To be heavier than; to be greater or more significant than.",
    keyConcepts: [
      { keyword: "greater or more significant", matchTerms: ["greater", "more significant", "more important", "exceed", "surpass", "outdo", "override", "predominat", "eclipse", "overshadow", "trump", "prevail"], label: "Be greater or more significant", hint: "The definition says 'be greater or more significant than' -- one side carries more weight." },
    ],
    synonyms: ["exceed", "surpass", "override"],
  },
  // ── 349. pamper ──
  {
    word: "pamper",
    partOfSpeech: "verb",
    definition: "To indulge with every attention, comfort, and kindness; to spoil.",
    keyConcepts: [
      { keyword: "indulge", matchTerms: ["indulg", "spoil", "coddle", "cosset", "dote", "baby", "cater", "lavish", "treat", "shower", "humor", "gratif"], label: "Indulge with attention and comfort", hint: "The definition says 'indulge with every attention, comfort, and kindness' -- giving someone excessive care." },
    ],
    synonyms: ["spoil", "indulge", "coddle"],
  },
  // ── 350. relish ──
  {
    word: "relish",
    partOfSpeech: "verb",
    definition: "To enjoy greatly; to take great pleasure in.",
    keyConcepts: [
      { keyword: "enjoy greatly", matchTerms: ["enjoy", "pleasure", "delight", "savor", "savour", "love", "revel", "appreciat", "treasure", "cherish", "adore", "bask"], label: "Enjoy greatly; take pleasure in", hint: "The definition says 'enjoy greatly; take great pleasure in' -- savoring the experience." },
    ],
    synonyms: ["enjoy", "savor", "delight in"],
  },
  // ── 351. stumble ──
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
  // ── 352. tedious ──
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
  // ── 353. uptight ──
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
  // ── 354. vanquish ──
  {
    word: "vanquish",
    partOfSpeech: "verb",
    definition: "To defeat thoroughly in a battle, contest, or conflict.",
    keyConcepts: [
      { keyword: "defeat thoroughly", matchTerms: ["defeat", "conquer", "overcome", "subdue", "crush", "overpower", "rout", "trounce", "demolish", "annihilat", "beat", "triumph", "prevail", "master", "subjugat"], label: "Defeat thoroughly", hint: "The definition says 'defeat thoroughly' -- a total, decisive victory." },
    ],
    synonyms: ["conquer", "defeat", "overcome"],
  },
  // ── 355. wary ──
  {
    word: "wary",
    partOfSpeech: "adjective",
    definition: "Feeling or showing caution about possible dangers or problems.",
    keyConcepts: [
      { keyword: "caution about danger", matchTerms: ["caution", "careful", "watchful", "alert", "vigilant", "guarded", "circumspect", "suspicious", "leery", "distrustful", "heedful", "chary", "prudent"], label: "Cautious about dangers", hint: "The definition says 'showing caution about possible dangers or problems' -- on guard against threats." },
    ],
    synonyms: ["cautious", "careful", "watchful"],
  },
  // ── 356. yearn ──
  {
    word: "yearn",
    partOfSpeech: "verb",
    definition: "To have an intense feeling of longing for something, typically something one has lost or been separated from.",
    keyConcepts: [
      { keyword: "intense longing", matchTerms: ["intense", "longing", "desire", "crave", "ache", "pine", "hunger", "thirst", "wish", "want", "miss", "hanker", "covet"], label: "Intense longing", hint: "The definition says 'intense feeling of longing' -- a deep, powerful desire." },
      { keyword: "for something lost", matchTerms: ["lost", "separated", "apart", "away", "absent", "gone", "past", "former", "distant", "unattainable", "out of reach"], label: "For something lost or distant", hint: "The definition says 'typically something one has lost or been separated from' -- yearning often involves absence." },
    ],
    synonyms: ["long", "crave", "pine"],
  },
  // ── 357. zeal ──
  {
    word: "zeal",
    partOfSpeech: "noun",
    definition: "Great energy or enthusiasm in pursuit of a cause or an objective.",
    keyConcepts: [
      { keyword: "great energy or enthusiasm", matchTerms: ["energy", "enthusiasm", "passion", "fervor", "fervour", "ardor", "ardour", "eagerness", "devotion", "vigor", "vigour", "intensity", "drive", "fire", "gusto"], label: "Great energy or enthusiasm", hint: "The definition says 'great energy or enthusiasm' -- burning with motivation." },
      { keyword: "pursuit of cause", matchTerms: ["pursuit", "cause", "objective", "goal", "mission", "purpose", "crusade", "campaign", "quest", "endeavor", "endeavour"], label: "In pursuit of a cause", hint: "The definition says 'in pursuit of a cause or an objective' -- zeal is directed at something specific." },
    ],
    synonyms: ["enthusiasm", "passion", "fervor"],
  },
  // ── 358. adhere ──
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
  // ── 359. blunt ──
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
  // ── 360. cultivate ──
  {
    word: "cultivate",
    partOfSpeech: "verb",
    definition: "To prepare and use land for growing crops; to try to develop or improve a quality or skill.",
    keyConcepts: [
      { keyword: "prepare land for crops", matchTerms: ["land", "grow", "crops", "farm", "plant", "till", "harvest", "soil", "garden", "agricultur"], label: "Prepare land for crops", hint: "The definition says 'prepare and use land for growing crops' -- the agricultural meaning." },
      { keyword: "develop or improve", matchTerms: ["develop", "improve", "foster", "nurture", "refine", "hone", "strengthen", "build", "encourage", "promote", "advance", "enhance", "work on"], label: "Develop or improve a quality", hint: "The definition says 'try to develop or improve a quality or skill' -- deliberately nurturing growth." },
    ],
    synonyms: ["grow", "develop", "nurture"],
  },
  // ── 361. dwindle ──
  {
    word: "dwindle",
    partOfSpeech: "verb",
    definition: "To diminish gradually in size, amount, or strength.",
    keyConcepts: [
      { keyword: "diminish gradually", matchTerms: ["diminish", "gradually", "shrink", "decrease", "declin", "lessen", "wane", "fade", "ebb", "taper", "drop", "reduc", "dwindl", "peter out", "slowly", "little by little"], label: "Diminish gradually", hint: "The definition says 'diminish gradually in size, amount, or strength' -- a slow, steady shrinking." },
    ],
    synonyms: ["diminish", "shrink", "decline"],
  },
  // ── 362. feeble ──
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
  // ── 363. glimpse ──
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
  // ── 364. hinder ──
  {
    word: "hinder",
    partOfSpeech: "verb",
    definition: "To create difficulties for someone or something, resulting in delay or obstruction.",
    keyConcepts: [
      { keyword: "create difficulties", matchTerms: ["difficult", "obstruct", "imped", "hamper", "block", "prevent", "inhibit", "restrain", "restrict", "thwart", "frustrat", "interfere", "stall", "slow", "hold back", "set back"], label: "Create difficulties; obstruct", hint: "The definition says 'create difficulties for someone or something' -- making progress harder." },
      { keyword: "delay", matchTerms: ["delay", "slow down", "retard", "decelerat", "stall", "hold up", "detain", "postpone"], label: "Resulting in delay", hint: "The definition says 'resulting in delay or obstruction' -- the effect is that things take longer." },
    ],
    synonyms: ["obstruct", "impede", "hamper"],
  },
  // ── 365. ignite ──
  {
    word: "ignite",
    partOfSpeech: "verb",
    definition: "To catch fire or cause to catch fire; to arouse or inflame strong feelings.",
    keyConcepts: [
      { keyword: "catch fire", matchTerms: ["fire", "catch fire", "burn", "light", "combust", "flame", "blaze", "kindle", "spark", "set alight", "set ablaze"], label: "Catch fire or cause fire", hint: "The definition says 'catch fire or cause to catch fire' -- literally starting combustion." },
      { keyword: "arouse strong feelings", matchTerms: ["arous", "inflam", "provok", "stir", "excite", "inspir", "trigger", "incit", "enrag", "passion", "stimulat", "galvaniz"], label: "Arouse strong feelings", hint: "The definition says 'arouse or inflame strong feelings' -- metaphorically sparking intense emotion." },
    ],
    synonyms: ["kindle", "inflame", "spark"],
  },
  // ── 366. populate ──
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
  // ── 367. terrestrial ──
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
  // ── 368. turbulent ──
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
  // ── 369. aromatic ──
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
  // ── 370. deceptive ──
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
  // ── 371. deceitful ──
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
  // ── 372. abolish ──
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
  // ── 373. courting ──
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
  // ── 374. despondent ──
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
  // ── 375. barrage ──
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
  // ── 376. perpetual ──
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
  // ── 377. amnesia ──
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
  // ── 378. panoramic ──
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
  // ── 379. botanical ──
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
  // ── 380. immunization ──
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
  // ── 381. reluctant ──
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
  // ── 382. poised ──
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
  // ── 383. capable ──
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
  // ── 384. heritage ──
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
  // ── 385. jovial ──
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
  // ── 386. deplorable ──
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
  // ── 387. intersect ──
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
  // ─��� 388. drawl ──
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
  // ── 389. redemption ──
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
  // ── 390. conditional ──
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
  // ── 391. substantial ──
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
  // ── 392. converse ──
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
  // ── 393. deprive ──
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
  // ── 394. quaint ──
  {
    word: "quaint",
    partOfSpeech: "adjective",
    definition: "Attractively unusual or old-fashioned; charmingly strange.",
    keyConcepts: [
      { keyword: "attractively unusual", matchTerms: ["attract", "unusual", "peculiar", "curious", "odd", "unique", "distinctive", "charm", "appeal"], label: "Attractively unusual", hint: "The definition says 'attractively unusual' -- strange but in a good way." },
      { keyword: "old-fashioned", matchTerms: ["old-fashion", "old fashion", "vintage", "antique", "traditional", "classic", "retro", "nostalgic", "bygone"], label: "Old-fashioned", hint: "The definition says 'old-fashioned' -- from an earlier time." },
    ],
    synonyms: ["charming", "picturesque", "old-fashioned", "whimsical"],
  },
  // ── 395. dismantle ──
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
  // ── 396. linger ──
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
  // ── 397. gravitate ──
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
  // ── 398. usher ──
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
  // ── 399. capture ──
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
  // ── 400. dangle ──
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
  // ── 401. deposit ──
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
  // ── 402. envelop ──
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
  // ── 403. expose ──
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
  // ── 404. juggle ──
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
  // ── 405. prune ──
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
  // ── 406. wring ──
  {
    word: "wring",
    partOfSpeech: "verb",
    definition: "To squeeze and twist something to force liquid from it; to obtain something with difficulty.",
    keyConcepts: [
      { keyword: "squeeze and twist", matchTerms: ["squeeze", "twist", "compress", "press", "squash", "liquid", "water", "wet"], label: "Squeeze and twist", hint: "The definition says 'squeeze and twist something to force liquid from it' -- removing moisture." },
      { keyword: "obtain with difficulty", matchTerms: ["obtain", "get", "extract", "force", "difficulty", "hard", "effort", "struggle"], label: "Obtain with difficulty", hint: "The definition says 'obtain something with difficulty' -- not easily given." },
    ],
    synonyms: ["squeeze", "twist", "extract", "press", "force"],
  },
  // ── 407. advise ──
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
  // ── 408. rectify ──
  {
    word: "rectify",
    partOfSpeech: "verb",
    definition: "To put right; to correct an error or remove a problem.",
    keyConcepts: [
      { keyword: "put right", matchTerms: ["right", "correct", "fix", "repair", "remedy", "amend", "adjust"], label: "Put right", hint: "The definition says 'put right' -- making something correct again." },
      { keyword: "remove a problem", matchTerms: ["remove", "problem", "error", "mistake", "fault", "resolve", "solve", "address"], label: "Remove a problem", hint: "The definition says 'correct an error or remove a problem' -- eliminating what's wrong." },
    ],
    synonyms: ["correct", "fix", "remedy", "amend", "repair"],
  },
  // ── 409. perceive ──
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
  // ── 410. regard ──
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
  // ── 411. modify ──
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
  // ── 412. refine ──
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
]
