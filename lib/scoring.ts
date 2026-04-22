import type { DailyWord } from "./game-data"

export interface ConceptResult {
  keyword: string
  label: string
  hint: string
  matched: boolean
  nearMiss?: boolean // almost matched (30-39% coverage) - shows as yellow
  matchedWords?: string[] // which user words triggered this match (for transparency)
  matchedTerm?: string // which matchTerm was matched (for transparency)
}

export interface ScoreBreakdown {
  concepts: { earned: number; max: number }
  clarity: { earned: number; max: number; relevantWords: string[]; ignoredWords: string[]; irrelevantWords: string[] }
  // Legacy fields kept for backwards compatibility
  precision: { earned: number; max: number; ratio: number; relevantCount: number; totalMeaningful: number; irrelevantWords: string[] }
  detail: { earned: number; max: number; wordCount: number }
  hintPenalty: number
}

export interface ScoreResult {
  score: number
  feedback: string
  concepts: ConceptResult[]
  synonymWarning: boolean
  missedSummary: string | null
  breakdown: ScoreBreakdown
  altDefinitionUsed?: string // the alt definition text if the alt scored better
}

// ── Antonym pairs ──
// Maps a word to its opposite(s). Used to recognize that "not moving" = "stationary"
const ANTONYM_MAP: Record<string, string[]> = {
  // Movement
  "moving": ["stationary", "still", "motionless", "static", "fixed", "immobile", "unmoving"],
  "changing": ["constant", "unchanging", "stable", "fixed", "static", "permanent", "steady"],
  "active": ["passive", "inactive", "idle", "dormant", "inert"],
  "dynamic": ["static", "stationary", "fixed", "stable"],
  // Temperature
  "hot": ["cold", "cool", "chilly", "frigid"],
  "cold": ["hot", "warm", "heated"],
  // Size
  "big": ["small", "tiny", "little", "minute"],
  "large": ["small", "tiny", "little", "minute"],
  "small": ["big", "large", "huge", "enormous"],
  // Light
  "bright": ["dark", "dim", "dull", "murky"],
  "dark": ["bright", "light", "luminous", "radiant"],
  // Speed
  "fast": ["slow", "sluggish", "leisurely"],
  "quick": ["slow", "sluggish", "leisurely"],
  "slow": ["fast", "quick", "rapid", "swift"],
  // Strength
  "strong": ["weak", "feeble", "frail"],
  "weak": ["strong", "powerful", "robust"],
  // Emotion
  "happy": ["sad", "unhappy", "miserable", "sorrowful"],
  "sad": ["happy", "joyful", "cheerful", "glad"],
  // State
  "alive": ["dead", "deceased", "lifeless"],
  "dead": ["alive", "living", "animate"],
  "open": ["closed", "shut", "sealed"],
  "closed": ["open", "unsealed"],
  "full": ["empty", "vacant", "hollow"],
  "empty": ["full", "filled", "occupied"],
  // Quality
  "good": ["bad", "poor", "terrible"],
  "bad": ["good", "excellent", "fine"],
  "true": ["false", "untrue", "incorrect"],
  "false": ["true", "correct", "accurate"],
  "clear": ["unclear", "vague", "obscure", "ambiguous", "confusing"],
  "certain": ["uncertain", "unsure", "doubtful"],
  "known": ["unknown", "unfamiliar", "mysterious"],
  // Social
  "public": ["private", "secret", "confidential"],
  "private": ["public", "open", "shared"],
  "willing": ["unwilling", "reluctant", "hesitant"],
  "voluntary": ["involuntary", "forced", "compulsory"],
}

// ── Synonym clusters ──
// Each array is a group of semantically equivalent words. When checking if a
// user's word matches a matchTerm, we also check if they share a synonym cluster.
// This catches "relieve" matching "free", "sufficient" matching "enough", etc.
const SYNONYM_CLUSTERS: string[][] = [
  // ══════════════════════════════════════
  // CORE VERBS -- the most common actions players will use in definitions
  // ══════════════════════════════════════
  ["free", "releas", "liberat", "reliev", "absolv", "exonerat", "acquit", "pardon", "discharg", "let off", "let go", "emancipat"],
  ["explain", "clarif", "elucidat", "illuminat", "describ", "spell out", "make clear", "expound", "elaborat"],
  ["understand", "comprehend", "grasp", "fathom", "perceiv", "discern", "recogniz", "realiz", "apprehend"],
  ["reduce", "lessen", "decrease", "diminish", "curtail", "shrink", "cut back", "alleviat", "mitigat", "ease", "soften", "lower", "weaken", "minimiz"],
  ["increase", "grow", "expand", "escalat", "intensif", "amplif", "heighten", "boost", "multiply", "proliferat", "raise", "elevat", "enhanc", "augment", "swell"],
  ["hide", "conceal", "obscur", "mask", "disguis", "cover", "bury", "suppress", "withhold"],
  ["show", "reveal", "display", "expos", "demonstrat", "exhibit", "manifest", "present", "unveil", "uncover"],
  ["stop", "prevent", "block", "halt", "cease", "hinder", "imped", "inhibit", "obstruct", "restrain", "deter", "thwart", "suppress"],
  ["start", "begin", "initiat", "commence", "launch", "trigger", "instigat", "spark", "originat", "introduc"],
  ["help", "assist", "support", "facilitat", "enable", "benefit", "contribut"],
  ["harm", "hurt", "damage", "injur", "impair", "wound", "destroy", "ruin", "wreck", "devastat"],
  ["agree", "consent", "approv", "accept", "endors", "concur", "comply"],
  ["refuse", "reject", "deny", "declin", "repudiat", "rebuff", "turn down", "dismiss"],
  ["change", "alter", "modify", "transform", "shift", "convert", "adjust", "revise", "adapt", "amend"],
  ["make", "creat", "produc", "build", "construct", "form", "generat", "craft", "fabricat", "manufactur", "develop"],
  ["break", "shatter", "fractur", "crack", "smash", "ruptur", "demolish", "wreck"],
  ["fix", "repair", "mend", "restor", "correct", "remedy", "rectif"],
  ["give", "provid", "supply", "offer", "grant", "bestow", "confer", "donat", "present", "furnish", "deliver"],
  ["take", "seiz", "grab", "acquir", "obtain", "captur", "claim", "confiscat", "appropriat"],
  ["buy", "purchas", "procur", "acquir", "pay for", "invest in", "transact"],
  ["keep", "retain", "maintain", "preserv", "conserv", "sustain", "uphold", "hold"],
  ["lose", "forfeit", "sacrific", "surrender", "relinquish", "abandon", "give up"],
  ["want", "desir", "wish", "crave", "covet", "yearn", "long for", "aspir"],
  ["think", "believ", "consider", "ponder", "reflect", "contemplat", "deliberat", "muse", "cogitat"],
  ["know", "recogniz", "realiz", "awar", "cognizant", "conscious", "familiar"],
  ["like", "enjoy", "appreciat", "relish", "savor", "favour", "favor", "prefer"],
  ["hate", "detest", "loath", "despis", "abhor", "revil", "disdain"],
  ["choose", "select", "pick", "opt", "elect", "prefer", "decide on"],
  ["force", "compel", "coerc", "oblig", "coercion", "pressure", "constrain", "impose"],
  ["allow", "permit", "let", "enabl", "authoriz", "sanction", "tolerat"],
  ["forbid", "prohibit", "ban", "bar", "restrict", "outlaw", "proscrib"],
  ["try", "attempt", "endeavor", "endeavour", "strive", "seek"],
  ["succeed", "achiev", "accomplish", "attain", "triumph", "prevail", "prosper"],
  ["fail", "falter", "flounder", "collapse", "miscarry"],
  ["copy", "imitat", "mimic", "replicat", "duplicat", "emulat", "reproduc"],
  ["protect", "defend", "guard", "shield", "shelter", "safeguard", "preserv"],
  ["attack", "assault", "strik", "invad", "aggress"],
  ["lead", "guid", "direct", "steer", "conduct", "command", "govern"],
  ["follow", "trail", "pursu", "track", "shadow", "obey", "comply"],
  ["join", "connect", "link", "unit", "merg", "combin", "attach", "fus"],
  ["separate", "divid", "split", "sever", "detach", "disconnect", "isolat", "segregat", "part"],
  ["mix", "blend", "combin", "merg", "fus", "mingle", "amalgamat"],
  ["attract", "draw", "lure", "entic", "tempt", "allur", "captivat", "appeal"],
  ["repel", "repuls", "deter", "discourag", "disgust", "revolt"],
  ["endur", "tolerat", "bear", "withstand", "suffer", "weather", "abid"],
  ["praise", "compliment", "commend", "laud", "extol", "applaud", "acclaim"],
  ["criticiz", "censur", "condemn", "denounc", "disparag", "rebuk", "reprimand", "admonish", "chastis"],
  ["forgiv", "pardon", "excus", "absolv", "exonerat", "overlook"],
  ["punish", "penaliz", "disciplin", "chastis", "castigat", "sanction"],
  ["promis", "pledg", "vow", "swear", "commit", "guarante"],
  ["threaten", "menac", "intimidat", "bully", "coerce"],
  ["trust", "rely", "depend", "count on", "faith", "confid"],
  ["doubt", "question", "suspect", "mistrust", "distrust", "skeptic"],
  ["remember", "recall", "recollect", "reminisce"],
  ["forget", "overlook", "neglect", "disregard"],
  ["notice", "observ", "spot", "detect", "perceiv", "discern", "recogniz", "see"],
  ["ignore", "disregard", "overlook", "neglect", "dismiss", "snub"],
  ["speak", "talk", "communicat", "express", "articulat", "voic", "utter", "stat", "say", "declar", "assert", "proclaim"],
  ["repeat", "restat", "reiterat", "reaffirm", "recapitulat", "retell", "echo", "say again", "state again"],
  ["listen", "hear", "attend", "heed", "pay attention"],
  ["write", "compos", "draft", "author", "inscrib", "pen", "record"],
  ["teach", "educat", "instruct", "train", "tutor", "mentor", "coach"],
  ["learn", "study", "absorb", "acquir", "pick up", "master"],
  ["persuad", "convinc", "influenc", "sway", "coax", "urge", "induc"],
  ["warn", "caution", "alert", "advis", "notify"],
  ["suggest", "propos", "recommend", "advis", "advocate", "urge"],
  ["admit", "confess", "acknowledg", "concede", "own up"],
  ["boast", "brag", "flaunt", "show off", "gloat", "vaunt"],
  ["complain", "grumbl", "whine", "gripe", "lament", "protest", "object"],
  ["mock", "ridicul", "tease", "taunt", "derid", "scoff", "jeer", "scorn"],
  // ── Judgment & analysis ──
  ["examin", "inspect", "scrutin", "analyz", "assess", "evaluat", "review", "survey"],
  ["judg", "evaluat", "assess", "apprais", "critic", "rate"],
  ["decid", "determin", "resolv", "conclud", "settl"],
  ["guess", "estimat", "speculat", "surmis", "conjectur", "suppos", "assum", "hypothes", "presume"],
  ["confirm", "verify", "validat", "corroborat", "substantiat", "prove", "affirm"],
  ["deny", "refut", "contradict", "disput", "challeng", "contest", "rebut"],
  // ── Movement & direction ──
  ["move", "travel", "proceed", "advanc", "progress", "journey", "migrat", "relocat"],
  ["occur", "happen", "take place", "arise", "manifest", "transpir", "emerg", "befall"],
  ["return", "revert", "restor", "recover", "bounc", "rebound", "go back", "come back"],
  ["gather", "collect", "assembl", "accumulat", "amass", "compil", "hoard", "stockpil"],
  ["scatter", "dispers", "spread", "distribut", "disseminat", "diffus"],
  ["rise", "ascend", "climb", "soar", "mount", "elevat"],
  ["fall", "drop", "plunge", "tumbl", "collaps", "descend", "sink", "plummet"],
  ["push", "shove", "thrust", "propel", "press"],
  ["pull", "drag", "draw", "tug", "haul", "yank"],
  ["send", "dispatch", "transmit", "convey", "forward", "deliver"],
  ["receiv", "get", "obtain", "accept", "collect", "acquir"],
  ["wait", "delay", "pause", "hesitat", "linger", "stall"],
  ["hurry", "rush", "hasten", "expedit", "accelerat", "speed up"],
  // ══════════════════════════════════════
  // ADJECTIVES & STATES -- descriptors players use in definitions
  // ══════════════════════════════════════
  ["important", "significant", "crucial", "vital", "essential", "critical", "major", "paramount", "consequential", "pivotal"],
  ["unimportant", "trivial", "insignificant", "minor", "negligibl", "petty", "inconsequential"],
  ["small", "tiny", "minor", "slight", "minute", "subtle", "fine", "delicate", "modest", "meager"],
  ["large", "huge", "enormous", "vast", "immense", "massive", "great", "substantial", "considerable", "sizeable", "tremendous"],
  ["harmful", "terrible", "awful", "dreadful", "horrible", "negative", "adverse", "detrimental", "damaging", "noxious", "toxic", "pernicious"],
  ["ineffective", "ineffectual", "futile", "useless", "pointless", "fruitless", "vain", "worthless", "unproductive", "impotent", "powerless"],
  ["beneficial", "excellent", "positive", "favorab", "favourab", "advantageous", "wholesome", "constructiv"],
  ["fast", "quick", "rapid", "swift", "speedy", "prompt", "hasty", "abrupt", "sudden", "brisk"],
  ["slow", "gradual", "sluggish", "leisurely", "unhurried", "plodding"],
  ["enough", "sufficient", "adequate", "ample"],
  ["unnecessary", "unneeded", "superfluous", "redundant", "excess", "surplus", "extra", "spare", "gratuitous"],
  ["strong", "powerful", "intense", "forceful", "potent", "vigorous", "mighty", "robust", "formidable"],
  ["weak", "feeble", "frail", "fragile", "flimsy", "faint", "infirm", "powerless", "impotent"],
  ["angry", "furious", "irate", "outraged", "incensed", "indignant", "enraged", "wrathful", "livid", "infuriated"],
  ["happy", "joyful", "glad", "pleased", "delighted", "cheerful", "elated", "content", "satisfied", "blissful", "euphoric"],
  ["sad", "unhappy", "sorrowful", "miserable", "gloomy", "melancholy", "dejected", "depressed", "despondent", "mournful", "grief"],
  ["scared", "afraid", "fearful", "frightened", "terrified", "anxious", "nervous", "worried", "apprehensiv", "alarmed", "panicked"],
  ["calm", "seren", "tranquil", "peaceful", "placid", "compos", "unruffled", "relaxed", "stabl", "steady", "poise", "balanced", "equanimity", "even-tempered", "self-possess", "level-headed", "imperturbab"],
  ["excited", "thrilled", "enthusiastic", "eager", "animated", "exhilarated", "ecstatic"],
  ["tired", "weary", "exhausted", "fatigued", "drained", "spent"],
  ["fake", "false", "counterfeit", "fraudulent", "phony", "bogus", "sham", "pretend", "insincere", "fabricated"],
  ["real", "genuine", "authentic", "actual", "legitimate", "sincere", "honest", "true", "veritable"],
  ["old", "ancient", "archaic", "outdated", "obsolete", "antiquated", "dated", "former", "bygone"],
  ["novel", "fresh", "modern", "recent", "contemporary", "innovativ", "cutting-edge", "current"],
  ["permanent", "lasting", "enduring", "perpetual", "eternal", "everlasting", "indefinit", "abiding"],
  ["temporary", "fleeting", "transient", "ephemeral", "impermanent", "momentary", "short-lived", "brief", "passing"],
  ["careful", "cautious", "meticulous", "thorough", "diligent", "attentiv", "scrupulous", "prudent", "mindful"],
  ["careless", "reckless", "negligent", "sloppy", "haphazard", "thoughtless", "inattentiv"],
  ["clear", "obvious", "evident", "apparent", "plain", "distinct", "unambiguous", "explicit", "transparent", "overt"],
  ["unclear", "vague", "ambiguous", "obscur", "murky", "nebulous", "confus", "cryptic", "enigmatic"],
  ["certain", "sure", "confident", "definite", "positive", "convinc", "assured"],
  ["uncertain", "doubtful", "unsure", "dubious", "skeptic", "hesitant", "indecisiv", "wavering"],
  ["brave", "courageous", "bold", "daring", "fearless", "valiant", "intrepid", "heroic", "gallant"],
  ["cowardly", "timid", "fearful", "spineless", "faint-hearted", "craven"],
  ["generous", "charitable", "giving", "benevolent", "magnanimous", "altruistic", "liberal", "munificent"],
  ["selfish", "greedy", "self-centered", "egotistic", "stingy", "miserly", "avaricious"],
  ["wise", "sagacious", "prudent", "judicious", "astute", "shrewd", "sensible", "practical", "perceptiv", "insightful"],
  ["foolish", "stupid", "reckless", "imprudent", "unwise", "senseless", "absurd", "asinine", "inane"],
  ["honest", "truthful", "candid", "frank", "forthright", "transparent", "straightforward", "sincere", "upfront"],
  ["dishonest", "deceitful", "lying", "fraudulent", "deceptiv", "untruthful", "duplicitous", "mendacious"],
  ["polite", "courteous", "civil", "respectful", "mannered", "gracious", "cordial", "affable"],
  ["rude", "impolite", "discourteous", "disrespectful", "insolent", "impertinent", "brash", "brusque", "curt"],
  ["beautiful", "gorgeous", "stunning", "lovely", "attractiv", "handsome", "elegant", "exquisit"],
  ["ugly", "hideous", "unsightly", "grotesque", "repulsiv", "unattractive"],
  ["rich", "wealthy", "affluent", "prosperous", "opulent", "well-off"],
  ["poor", "impoverished", "destitut", "needy", "indigent", "penniless"],
  ["clean", "pure", "spotless", "pristine", "immaculat", "unsullied", "untainted"],
  ["dirty", "filthy", "grimy", "squalid", "unclean", "soiled", "tainted", "contaminated", "corrupt"],
  ["hard", "difficult", "challenging", "tough", "arduous", "demanding", "strenuous", "grueling", "tension", "tense", "strain", "stress", "adversity", "hardship", "tribulation", "duress", "ordeal", "trial"],
  ["easy", "simple", "straightforward", "effortless", "uncomplicated", "elementary"],
  ["deep", "profound", "thorough", "intense", "penetrating"],
  ["shallow", "superficial", "cursory", "surface-level"],
  ["stubborn", "obstinat", "persistent", "tenacious", "resolut", "unyielding", "inflexibl", "headstrong", "adamant", "intransigent"],
  ["flexible", "suppl", "pliant", "adaptabl", "versatil", "accommodating", "open-minded"],
  ["proud", "arrogant", "haughty", "conceited", "vain", "pompous", "self-important"],
  ["humble", "modest", "unassuming", "meek", "self-effacing", "unpretentious"],
  ["cruel", "ruthless", "merciless", "brutal", "savage", "vicious", "heartless", "callous", "pitiless"],
  ["kind", "compassionat", "merciful", "tender", "gentle", "caring", "sympathetic", "benign", "warm-hearted"],
  ["lazy", "idle", "indolent", "slothful", "lethargic", "sluggish", "apathetic"],
  ["diligent", "industrious", "hardworking", "assiduous", "conscientious", "tireless"],
  ["secret", "hidden", "confidential", "privat", "clandestin", "covert", "furtiv", "surreptitious", "stealth"],
  ["public", "open", "overt", "transparent", "unconcealed"],
  ["common", "ordinary", "usual", "typical", "normal", "standard", "conventional", "mundane", "everyday"],
  ["rare", "uncommon", "unusual", "exceptional", "extraordinar", "scarce", "infrequent", "singular", "unique"],
  ["occasional", "sporadic", "intermittent", "periodic", "irregular", "infrequent", "scattered", "episodic", "spasmodic"],
  ["strange", "weird", "odd", "bizarre", "peculiar", "unusual", "quirky", "eccentric", "anomalous"],
  ["familiar", "known", "recognizable", "accustomed", "customary"],
  ["empty", "vacant", "hollow", "void", "barren", "desolat"],
  ["full", "complete", "loaded", "packed", "brimming", "replete", "saturat"],
  ["loud", "noisy", "boisterous", "deafening", "thunderous", "clamorous"],
  ["quiet", "silent", "hushed", "muted", "subdued", "still"],
  ["sharp", "keen", "acute", "pointed", "incisiv", "piercing"],
  ["dull", "blunt", "bland", "tedious", "monotonous", "boring", "uninteresting"],
  ["rigid", "stiff", "inflexibl", "firm", "unyielding"],
  ["smooth", "sleek", "polished", "even", "seamless"],
  ["rough", "coarse", "harsh", "rugged", "uneven", "jagged"],
  ["bright", "luminous", "radiant", "brilliant", "vivid", "dazzling", "gleaming"],
  ["dark", "dim", "gloomy", "shadowy", "murky", "somber", "bleak", "dismal"],
  // ══════════════════════════════════════
  // NOUNS & ABSTRACT CONCEPTS -- definition building blocks
  // ══════════════════════════════════════
  ["blame", "fault", "guilt", "responsib", "accusation", "charge", "crime", "criminal", "offense", "offence", "wrongdoing", "culpability"],
  ["proof", "evidence", "confirmation", "verification", "substantiat", "corroborat", "testimony", "demonstrat"],
  ["opinion", "belief", "perspectiv", "stance", "viewpoint", "standpoint", "position", "conviction", "sentiment"],
  ["meaning", "definition", "sense", "significance", "connotation", "import"],
  ["example", "instance", "illustration", "case", "specimen", "sample"],
  ["type", "kind", "sort", "category", "class", "variety", "genre", "species", "breed"],
  ["part", "portion", "section", "piece", "segment", "fragment", "component", "element"],
  ["whole", "entire", "complete", "total", "full", "aggregate"],
  ["cause", "reason", "source", "origin", "root", "basis", "ground", "motive", "catalyst"],
  ["result", "effect", "outcome", "consequence", "impact", "product", "repercussion", "aftermath"],
  ["rule", "regulation", "principle", "guideline", "standard", "norm", "law", "decree", "mandate"],
  ["method", "approach", "technique", "procedure", "system", "process", "strategy", "tactic", "manner", "fashion", "mode"],
  ["purpose", "goal", "aim", "objective", "intention", "target", "ambition", "aspiration"],
  ["quality", "trait", "characteristic", "attribute", "property", "feature", "aspect"],
  ["problem", "issue", "dilemma", "predicament", "quandary", "difficulty", "challenge", "obstacle", "complication"],
  ["answer", "solution", "resolution", "remedy", "response", "reply"],
  ["idea", "concept", "notion", "thought", "theory", "hypothesis"],
  ["feeling", "emotion", "emotional", "sentiment", "sensation", "mood", "affect", "temperament", "temper", "disposition"],
  ["group", "collection", "assemblage", "cluster", "body", "ensemble", "cohort"],
  ["person", "individual", "human", "someone", "somebody", "figure"],
  ["place", "location", "site", "spot", "area", "region", "territory", "domain"],
  ["time", "period", "moment", "instant", "duration", "interval", "era", "epoch", "phase"],
  ["power", "authority", "control", "dominion", "influenc", "clout", "supremacy", "sovereignty"],
  ["money", "wealth", "riches", "fortune", "capital", "funds", "assets", "resources"],
  ["danger", "risk", "threat", "peril", "hazard", "jeopardy", "menace"],
  ["safety", "security", "protection", "shelter", "refuge", "sanctuary"],
  ["freedom", "liberty", "independence", "autonomy", "sovereignty"],
  ["limit", "boundary", "border", "constraint", "restriction", "ceiling", "threshold", "cap"],
  ["skill", "ability", "talent", "competenc", "aptitude", "expertise", "proficiency", "knack"],
  ["mistake", "error", "blunder", "fault", "flaw", "slip", "oversight", "gaffe"],
  ["truth", "fact", "reality", "veracity", "accuracy", "authenticity"],
  ["lie", "falsehood", "fabrication", "untruth", "deception", "fiction", "fib"],
  ["knowledge", "wisdom", "learning", "erudition", "insight", "awareness", "understanding"],
  ["ignorance", "naivety", "oblivion", "unawareness", "innocence"],
  ["respect", "admiration", "esteem", "regard", "reverence", "deference", "veneration"],
  ["contempt", "disdain", "scorn", "derision", "disrespect"],
  ["reward", "prize", "compensation", "recompense", "bonus", "incentive"],
  ["punishment", "penalty", "sanction", "retribution", "consequence", "reprisal"],
  ["beginning", "start", "onset", "commencement", "origin", "inception", "dawn", "outset"],
  ["end", "conclusion", "finish", "termination", "cessation", "culmination", "finale"],
  ["success", "achievement", "accomplishment", "victory", "triumph"],
  ["failure", "defeat", "collapse", "fiasco", "downfall", "setback"],
  // ── Additional semantic links ──
  ["stress", "tension", "strain", "distress", "burden", "duress", "anguish"],
  ["stabl", "stability", "steady", "balanc", "equilibri", "even-keeled", "grounded", "centered"],
  ["mental", "emotional", "psychological", "inner", "internal", "cognitiv"],
  ["adversity", "hardship", "tribulation", "trial", "ordeal", "misfortune", "afflict"],
  ["brief", "fleeting", "momentary", "transient", "passing", "cursory", "short-lived"],
  ["partial", "incomplete", "fragment", "limited", "imperfect", "unfinished"],
  ["entity", "party", "organization", "institution", "body", "agency", "faction"],
  ["apply", "affect", "pertain", "concern", "relate", "involve", "impact", "influenc"],
  ["agree", "agreement", "consent", "approval", "endorsement", "sanction", "assent", "permission", "authoriz"],
  ["alone", "sole", "solo", "single", "individual", "lone", "solitary", "unilateral", "one-sided", "independent"],
]

// Build a lookup: word-stem -> cluster index, for fast synonym checking
const synonymLookup = new Map<string, number>()
SYNONYM_CLUSTERS.forEach((cluster, idx) => {
  for (const word of cluster) {
    synonymLookup.set(word.toLowerCase(), idx)
  }
})

// Check if a word matches a synonym cluster key.
// Uses stem-prefix matching: both must share a 4+ char prefix OR one must
// START WITH the other (not just contain it) to avoid false chains like
// "recover" -> "cover" -> hide cluster.
function matchesClusterKey(word: string, key: string): boolean {
  if (word === key) return true
  if (key.length < 4 || word.length < 4) return false
  // Word starts with the key (e.g. "relieving" starts with "reliev")
  if (word.startsWith(key)) return true
  // Key starts with the word (e.g. "reliev" starts with... no, other way)
  if (key.startsWith(word) && word.length >= 4) return true
  // Share a 4-char prefix (e.g. "released" and "releas" share "rele")
  if (word.slice(0, 4) === key.slice(0, 4) && word.length >= 5 && key.length >= 5) return true
  return false
}

export function areSynonyms(a: string, b: string): boolean {
  if (a.length < 4 || b.length < 4) return false
  // Find cluster(s) for word a
  const aClusters = new Set<number>()
  for (const [key, idx] of synonymLookup) {
    if (matchesClusterKey(a, key)) {
      aClusters.add(idx)
    }
  }
  if (aClusters.size === 0) return false
  // Check if word b belongs to any of the same clusters
  for (const [key, idx] of synonymLookup) {
    if (!aClusters.has(idx)) continue
    if (matchesClusterKey(b, key)) {
      return true
    }
  }
  return false
}

// For multi-word matchTerms like "say again", check if the user's input contains
// a synonymous phrase -- i.e. each word in the term has a synonym-level match in
// the input. This catches "state again" matching "say again", "tell once more"
// matching "say again" (via "tell"~"say"), etc.
function phraseMatchesBySynonym(input: string, phraseWords: string[]): boolean {
  const inputWords = input.split(/\s+/)

  // Every content word in the phrase must have a match in the input
  for (const pw of phraseWords) {
    if (pw.length <= 3 && STOP_WORDS.has(pw)) continue // skip stop words in the phrase
    let found = false
    for (const iw of inputWords) {
      // Direct stem match
      if (iw === pw || (iw.length >= 4 && pw.length >= 4 && iw.startsWith(pw)) || (iw.length >= 4 && pw.length >= 4 && pw.startsWith(iw))) {
        found = true
        break
      }
      // Synonym match
      if (iw.length >= 3 && pw.length >= 3 && areSynonyms(iw, pw)) {
        found = true
        break
      }
    }
    if (!found) return false
  }
  return true
}

// Standalone terms that are so generic they match almost any definition.
// These are ONLY blocked as single-word matchTerms -- they still work inside
// multi-word phrases like "no reason", "lack of energy", "not anxious", etc.
const IGNORED_STANDALONE_TERMS = new Set([
  "not", "no", "without", "lack", "absence",
  "great", "deep", "large", "much", "many", "lot", "big", "vast",
  "good", "bad", "nice", "right", "wrong",
  "thing", "things", "stuff", "something", "anything",
  "act", "action", "do", "move", "feel", "feeling",
  "show", "display", "appear", "form",
  "way", "area", "place", "situation",
  "people", "person", "someone", "others",
  "new", "different", "important", "particular", "specific",
  "into", "one", "more",
])

// Check whether a short term (<=4 chars) appears as a whole word in the input,
// while longer terms can match as substrings (supporting stems like "reduc" -> "reducing").
// Also generates common morphological variants so e.g. "deduce" matches "deduction".
function termMatches(input: string, term: string): boolean {
  const t = term.toLowerCase()

  // Multi-word terms: check both exact substring and synonym-based phrase matching
  if (t.includes(" ")) {
    if (input.includes(t)) return true
    const phraseWords = t.split(/\s+/)
    return phraseMatchesBySynonym(input, phraseWords)
  }

  // Skip standalone generic terms that match too many unrelated definitions
  if (IGNORED_STANDALONE_TERMS.has(t)) return false

  if (t.length <= 4) {
    // Whole-word match for short terms to avoid false positives
    const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`)
    return re.test(input)
  }

  // Direct substring check first (fast path)
  if (input.includes(t)) return true

  // Generate stem variants to catch morphological relatives:
  // "deduce" -> "deduction", "produce" -> "production", "describe" -> "description", etc.
  const variants: string[] = []
  if (t.endsWith("e")) {
    // drop trailing -e: deduce -> deduc (matches deduction, deductive)
    variants.push(t.slice(0, -1))
  }
  if (t.endsWith("ce")) {
    // -ce -> -ct: deduce -> deduct, produce -> product
    variants.push(t.slice(0, -2) + "ct")
  }
  if (t.endsWith("de")) {
    // -de -> -s: conclude -> conclus (matches conclusion)
    variants.push(t.slice(0, -2) + "s")
  }
  if (t.endsWith("ade")) {
    // persuade -> persuas (matches persuasion)
    variants.push(t.slice(0, -3) + "as")
  }
  if (t.endsWith("ibe")) {
    // describe -> descript (matches description)
    variants.push(t.slice(0, -3) + "ipt")
  }
  if (t.endsWith("ive")) {
    // descriptive -> descript (matches description)
    variants.push(t.slice(0, -3) + "ipt")
    variants.push(t.slice(0, -3))
  }
  if (t.endsWith("tion") || t.endsWith("sion")) {
    // deduction -> deduc, conclusion -> conclus
    variants.push(t.slice(0, -4))
    variants.push(t.slice(0, -3))
  }
  if (t.endsWith("ment")) {
    // judgment -> judg
    variants.push(t.slice(0, -4))
  }
  if (t.endsWith("ness")) {
    // awareness -> aware
    variants.push(t.slice(0, -4))
  }
  if (t.endsWith("ity") || t.endsWith("ety")) {
    // clarity -> clar, anxiety -> anxiet
    variants.push(t.slice(0, -3))
  }
  if (t.endsWith("ous") || t.endsWith("ious")) {
    // ambiguous -> ambigu
    variants.push(t.slice(0, -3))
  }
  if (t.endsWith("ful")) {
    // meaningful -> meaning
    variants.push(t.slice(0, -3))
  }
  if (t.endsWith("less")) {
    // careless -> care
    variants.push(t.slice(0, -4))
  }
  if (t.endsWith("ly")) {
    // quickly -> quick
    variants.push(t.slice(0, -2))
  }
  if (t.endsWith("ing")) {
    // running -> run, defining -> defin
    variants.push(t.slice(0, -3))
    variants.push(t.slice(0, -3) + "e")
  }
  if (t.endsWith("ed")) {
    // defined -> defin, examined -> examin
    variants.push(t.slice(0, -2))
    variants.push(t.slice(0, -2) + "e")
    if (t.length > 4 && t[t.length - 3] === t[t.length - 4]) {
      // stopped -> stop (doubled consonant)
      variants.push(t.slice(0, -3))
    }
  }

  if (variants.some((v) => v.length > 4 && input.includes(v))) return true

  // Synonym cluster check: see if any input word is a synonym of the term
  const inputWords = input.split(/\s+/)
  for (const iw of inputWords) {
    if (iw.length < 3) continue
    if (areSynonyms(t, iw)) return true
  }

  return false
}

// Stop words to filter out from fuzzy matching
const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "shall",
  "should", "may", "might", "must", "can", "could", "of", "in", "to",
  "for", "with", "on", "at", "from", "by", "about", "as", "into",
  "through", "during", "before", "after", "above", "below", "between",
  "but", "and", "or", "nor", "not", "no", "so", "if", "than", "too",
  "very", "just", "that", "this", "it", "its", "they", "them", "their",
  "we", "us", "our", "you", "your", "he", "she", "him", "her", "his",
  "what", "which", "who", "whom", "when", "where", "why", "how",
  "all", "each", "every", "both", "few", "more", "most", "some", "any",
  "such", "only", "own", "same", "other", "also", "then", "says",
  "one", "two", "especially", "rather", "being", "something", "someone",
])

// Negation words that flip the meaning of the following word(s)
const NEGATION_WORDS = new Set([
  "not", "never", "no", "none", "neither", "nor", "nobody", "nothing",
  "nowhere", "without", "lack", "lacking", "lacks", "unable", "cannot",
  "can't", "won't", "wouldn't", "shouldn't", "couldn't", "doesn't",
  "don't", "didn't", "isn't", "aren't", "wasn't", "weren't", "hasn't",
  "haven't", "hadn't", "opposite", "contrary", "antithesis", "un", "in",
])

// Extract meaningful words from a string (lowercase, no stop words, no short words)
// Also returns which words are negated (preceded by a negation word)
function meaningfulWordsWithNegation(text: string): { words: string[]; negatedWords: Set<string> } {
  const lower = text.toLowerCase().replace(/[^a-z\s'-]/g, " ")
  const allWords = lower.split(/\s+/)
  const meaningful: string[] = []
  const negatedWords = new Set<string>()
  
  let negationActive = false
  let negationDistance = 0
  
  for (const word of allWords) {
    // Check if this word is a negation marker
    if (NEGATION_WORDS.has(word) || (word.startsWith("un") && word.length > 3)) {
      negationActive = true
      negationDistance = 0
      continue
    }
    
    // Skip stop words and short words for meaningful extraction
    if (word.length <= 3 || STOP_WORDS.has(word)) {
      // But increment negation distance even for skipped words
      if (negationActive) negationDistance++
      continue
    }
    
    meaningful.push(word)
    
    // Mark as negated if within 3 words of a negation marker
    if (negationActive && negationDistance <= 3) {
      negatedWords.add(word)
    }
    
    negationDistance++
    
    // Reset negation after 4 words distance
    if (negationDistance > 4) {
      negationActive = false
    }
  }
  
  return { words: meaningful, negatedWords }
}

// Legacy function for backward compatibility
function meaningfulWords(text: string): string[] {
  return meaningfulWordsWithNegation(text).words
}

// Check if two words share a common root by comparing prefixes and substrings.
// Handles pairs like "crime"/"criminal", "relieve"/"relief", "free"/"freedom", etc.
// STRICT: Avoids false positives like "reality" matching "unrealist" or "idealism" matching "idealist"
export function stemMatch(a: string, b: string): boolean {
  if (a === b) return true
  
  // One contains the other as a substring (but must be substantial overlap)
  // e.g., "idealist" contains "ideal" - this is valid
  // But "unrealist" contains "real" which could match "reality" - we need to be careful
  if (a.length >= 4 && b.includes(a) && a.length >= b.length * 0.6) return true
  if (b.length >= 4 && a.includes(b) && b.length >= a.length * 0.6) return true
  
  // Share a 5-character prefix (stricter than 4 to reduce false positives)
  // This catches crime/criminal, charge/charged, but not real/unrealist
  if (a.length >= 5 && b.length >= 5 && a.slice(0, 5) === b.slice(0, 5)) return true
  
  // Synonym cluster match - this is the primary way we handle related words
  if (a.length >= 3 && b.length >= 3 && areSynonyms(a, b)) return true
  
  return false
}

// Check if a user's input fuzzy-matches a concept by overlapping meaningful
// words with the concept's definition, label, and hint text.
// Returns matched words when enough of the concept's key vocabulary appears in the input.
// Also returns nearMiss flag for 25-39% coverage (close but not quite).
// Negated words are excluded from matching since they indicate the opposite meaning.
function fuzzyConceptMatch(inputWords: string[], negatedWords: Set<string>, concept: { label: string; hint: string; keyword: string }): { matched: boolean; nearMiss: boolean; matchedWords: string[] } {
  const conceptText = `${concept.label} ${concept.hint} ${concept.keyword}`
  const conceptWords = meaningfulWords(conceptText)

  // De-duplicate concept words
  const unique = [...new Set(conceptWords)]
  if (unique.length === 0) return { matched: false, nearMiss: false, matchedWords: [] }

  // Filter out negated input words - they indicate the opposite meaning
  const nonNegatedInputWords = inputWords.filter(w => !negatedWords.has(w))

  // Count how many concept words appear via stem matching with any non-negated input word
  let hits = 0
  const matchedWords: string[] = []
  for (const cw of unique) {
    for (const iw of nonNegatedInputWords) {
      if (stemMatch(cw, iw)) {
        hits++
        if (!matchedWords.includes(iw)) matchedWords.push(iw)
        break
      }
    }
  }

  const ratio = hits / unique.length
  // Full match: at least 2 hits AND 40%+ coverage
  const matched = hits >= 2 && ratio >= 0.4
  // Near miss: at least 1 hit AND 25-39% coverage (close but not quite)
  const nearMiss = !matched && hits >= 1 && ratio >= 0.25 && ratio < 0.4
  return { matched, nearMiss, matchedWords: (matched || nearMiss) ? matchedWords : [] }
}

// Score a user definition against a single set of keyConcepts + definition text.
// Returns an intermediate result used to compare primary vs alternate definitions.

// ── Global Concept Dictionary ─────────────────────────────────────────────────
// Each key is a concept name. Values are word stems/synonyms that express that concept.
// Words reference these keys via the optional `clarityConceptKeys` field.
// This is the central semantic layer — tune here, fix everywhere.

export const GLOBAL_CONCEPTS: Record<string, string[]> = {
  // ── Emotions ──
  ANGER:        ["anger", "annoyance", "displeasure", "irritation", "resentment", "fury", "wrath", "indignation", "outrage", "aggravation", "vexation", "ire", "rage", "angry", "furious", "irate", "incensed", "aggrieved"],
  SADNESS:      ["sadness", "sorrow", "grief", "misery", "unhappiness", "melancholy", "despair", "dejection", "distress", "heartache", "woe", "sad", "sorrowful", "mournful", "despondent"],
  FEAR:         ["fear", "anxiety", "dread", "terror", "fright", "apprehension", "trepidation", "alarm", "panic", "scared", "fearful", "afraid", "frightened", "terrified"],
  JOY:          ["joy", "happiness", "delight", "pleasure", "elation", "gladness", "contentment", "bliss", "euphoria", "cheerfulness", "happy", "joyful", "elated", "pleased", "delighted"],
  SHAME:        ["shame", "embarrassment", "humiliation", "disgrace", "mortification", "remorse", "guilt", "ashamed", "humiliated", "disgraced"],
  PRIDE:        ["pride", "arrogance", "conceit", "vanity", "haughtiness", "self-importance", "pomposity", "proud", "arrogant", "conceited", "vain"],
  CONTEMPT:     ["contempt", "disdain", "scorn", "derision", "disrespect", "condescension", "sneering", "dismissive"],
  LOVE:         ["love", "affection", "fondness", "adoration", "devotion", "tenderness", "care", "attachment", "loving", "affectionate", "devoted"],
  HATE:         ["hate", "hatred", "loathing", "abhorrence", "disgust", "aversion", "hostility", "animosity", "detest", "despise", "abhor"],
  ENVY:         ["envy", "jealousy", "covetousness", "resentment", "enviousness", "jealous", "envious", "covetous"],

  // ── Expression / Communication ──
  EXPRESSION:   ["expressing", "showing", "displaying", "manifesting", "exhibiting", "conveying", "demonstrating", "revealing", "indicating", "reflecting", "signalling", "communicating"],
  SPEAKING:     ["speaking", "saying", "stating", "declaring", "asserting", "uttering", "voicing", "proclaiming", "announcing", "telling", "talking"],
  WRITING:      ["writing", "recording", "documenting", "composing", "drafting", "inscribing", "noting"],

  // ── Actions ──
  GIVING:       ["giving", "providing", "supplying", "offering", "granting", "bestowing", "donating", "presenting", "furnishing", "delivering"],
  TAKING:       ["taking", "seizing", "grabbing", "acquiring", "obtaining", "capturing", "claiming", "removing", "extracting"],
  HELPING:      ["helping", "assisting", "supporting", "aiding", "facilitating", "enabling", "benefiting"],
  HARMING:      ["harming", "hurting", "damaging", "injuring", "wounding", "destroying", "ruining"],
  STOPPING:     ["stopping", "preventing", "blocking", "halting", "ceasing", "hindering", "impeding", "inhibiting", "restraining"],
  STARTING:     ["starting", "beginning", "initiating", "commencing", "launching", "triggering"],
  MOVING:       ["moving", "travelling", "proceeding", "advancing", "progressing", "migrating"],
  CHANGING:     ["changing", "altering", "modifying", "transforming", "shifting", "converting", "adjusting"],
  MAKING:       ["making", "creating", "producing", "building", "constructing", "forming", "generating", "crafting"],
  HIDING:       ["hiding", "concealing", "obscuring", "masking", "disguising", "covering", "suppressing"],
  SHOWING_ACTION: ["showing", "revealing", "displaying", "exposing", "demonstrating", "exhibiting"],

  // ── Qualities ──
  UNFAIRNESS:   ["unfair", "unjust", "inequitable", "wrongful", "unreasonable", "biased", "partial", "one-sided", "discriminatory"],
  FAIRNESS:     ["fair", "just", "equitable", "reasonable", "impartial", "unbiased"],
  BADNESS:      ["bad", "poor", "terrible", "awful", "dreadful", "horrible", "negative", "adverse", "harmful", "detrimental", "damaging", "noxious"],
  GOODNESS:     ["good", "excellent", "positive", "beneficial", "favorable", "advantageous", "wholesome"],
  IMPORTANCE:   ["important", "significant", "crucial", "vital", "essential", "critical", "major", "paramount"],
  SMALLNESS:    ["small", "tiny", "minor", "slight", "minute", "subtle", "little", "minimal"],
  LARGENESS:    ["large", "huge", "enormous", "vast", "immense", "massive", "great", "substantial"],
  STRENGTH:     ["strong", "powerful", "intense", "forceful", "potent", "vigorous", "great", "extreme", "severe", "deep", "profound"],
  WEAKNESS:     ["weak", "feeble", "frail", "fragile", "faint", "powerless", "ineffective"],
  SPEED:        ["fast", "quick", "rapid", "swift", "speedy", "prompt", "hasty"],
  SLOWNESS:     ["slow", "gradual", "sluggish", "leisurely", "unhurried"],
  CLARITY_Q:    ["clear", "obvious", "evident", "apparent", "plain", "distinct", "explicit", "transparent"],
  VAGUENESS:    ["vague", "ambiguous", "obscure", "unclear", "murky", "nebulous"],
  HONESTY:      ["honest", "truthful", "candid", "frank", "sincere", "genuine", "authentic"],
  DECEPTION:    ["dishonest", "deceitful", "lying", "fraudulent", "deceptive", "false", "fake"],
  KINDNESS:     ["kind", "compassionate", "gentle", "caring", "sympathetic", "benevolent", "generous"],
  CRUELTY:      ["cruel", "ruthless", "merciless", "brutal", "harsh", "severe", "callous"],
  INTELLIGENCE: ["intelligent", "smart", "clever", "wise", "astute", "shrewd", "perceptive", "insightful"],
  FOOLISHNESS:  ["foolish", "stupid", "reckless", "unwise", "absurd", "senseless"],

  // ── States ──
  FREQUENCY:    ["frequent", "regular", "recurring", "repeated", "constant", "persistent", "continual"],
  INFREQUENCY:  ["infrequent", "occasional", "rare", "sporadic", "intermittent", "irregular", "scattered", "uncommon", "seldom", "sometimes"],
  PERMANENCE:   ["permanent", "lasting", "enduring", "perpetual", "eternal", "indefinite", "abiding"],
  TEMPORARINESS:["temporary", "fleeting", "transient", "brief", "short-lived", "momentary", "passing"],
  CERTAINTY:    ["certain", "sure", "definite", "confident", "positive", "assured", "inevitable"],
  UNCERTAINTY:  ["uncertain", "doubtful", "unsure", "dubious", "hesitant", "questionable"],
  PRESENCE:     ["present", "existing", "occurring", "happening", "taking place", "in existence"],
  ABSENCE:      ["absent", "missing", "lacking", "without", "devoid", "empty"],
  BEGINNING:    ["beginning", "start", "onset", "commencement", "origin", "inception", "arising"],
  ENDING:       ["ending", "conclusion", "finish", "termination", "cessation", "completion"],
  PROXIMITY:    ["near", "close", "imminent", "approaching", "forthcoming", "about to", "impending"],

  // ── Perception / Thought ──
  UNDERSTANDING:["understanding", "comprehending", "grasping", "knowing", "recognising", "realising", "perceiving"],
  BELIEVING:    ["believing", "thinking", "considering", "supposing", "assuming", "presuming"],
  PERCEIVING:   ["perceiving", "noticing", "observing", "seeing", "detecting", "discerning"],
  JUDGING:      ["judging", "evaluating", "assessing", "appraising", "rating", "criticising"],

  // ── People / Social ──
  PERSON:       ["person", "individual", "human", "someone", "people", "one"],
  GROUP:        ["group", "collection", "body", "assembly", "organisation", "institution"],
  AUTHORITY:    ["authority", "power", "control", "dominion", "influence", "command", "leadership"],
  TREATMENT:    ["treatment", "handling", "dealing with", "behaviour toward", "conduct toward"],

  // ── Cause / Effect ──
  CAUSE:        ["cause", "reason", "source", "origin", "root", "basis", "motive", "catalyst"],
  RESULT:       ["result", "effect", "outcome", "consequence", "impact", "product"],

  // ── Degree/Intensity modifiers (neutral — don't penalise) ──
  INTENSIFIER:  ["very", "extremely", "highly", "greatly", "deeply", "strongly", "particularly", "especially", "notably", "remarkably", "exceptionally", "utterly", "completely", "thoroughly"],
}

// Build lookup: word/stem → set of concept keys
const CONCEPT_LOOKUP = new Map<string, Set<string>>()
for (const [key, terms] of Object.entries(GLOBAL_CONCEPTS)) {
  for (const term of terms) {
    const t = term.toLowerCase()
    if (!CONCEPT_LOOKUP.has(t)) CONCEPT_LOOKUP.set(t, new Set())
    CONCEPT_LOOKUP.get(t)!.add(key)
  }
}

// Check if a word maps to any concept key
function wordToConceptKeys(word: string): Set<string> {
  const w = word.toLowerCase()
  const result = new Set<string>()
  for (const [term, keys] of CONCEPT_LOOKUP) {
    if (w === term || (w.length >= 4 && term.length >= 4 && (w.startsWith(term.slice(0,5)) || term.startsWith(w.slice(0,5))))) {
      for (const k of keys) result.add(k)
    }
  }
  return result
}

// Classify a player word as relevant, neutral (intensifier), or irrelevant
// relative to a set of expected concept keys
function classifyWord(word: string, expectedConceptKeys: Set<string>): "relevant" | "neutral" | "irrelevant" {
  const keys = wordToConceptKeys(word)
  if (keys.size === 0) return "irrelevant"
  // Check if it's purely an intensifier
  if (keys.has("INTENSIFIER") && keys.size === 1) return "neutral"
  // Check if any of its concept keys overlap with expected
  for (const k of keys) {
    if (expectedConceptKeys.has(k)) return "relevant"
  }
  // Has concepts but none match expected — still not fully irrelevant
  // Check synonym clusters as fallback
  return "irrelevant"
}

// ── Clarity Scoring ───────────────────────────────────────────────────────────
// Replaces precision (0-10) + detail (0-15) with a single Clarity (0-25) score.
// Penalty-based: starts at 25, deducts for irrelevant words and contradictions.
// No brevity penalty when all concepts are matched.

interface ClarityResult {
  clarity: number
  relevantWords: string[]
  ignoredWords: string[]
  irrelevantWords: string[]
  debug: {
    conceptsHit: string[]
    conceptsMissed: string[]
    rawPenalty: number
  }
}

function computeClarity(
  inputMeaningful: string[],
  negatedWords: Set<string>,
  keyConcepts: DailyWord["keyConcepts"],
  synonyms: string[],
  definitionText: string,
  matchedConceptCount: number,
  totalConceptCount: number,
): ClarityResult {
  // Build the full set of expected concept keys from keyConcepts matchTerms + official def
  const expectedKeys = new Set<string>()
  const conceptsHit: string[] = []
  const conceptsMissed: string[] = []

  // Add concept keys from keyConcept match terms and labels
  for (const kc of keyConcepts) {
    const allTerms = [...kc.matchTerms, kc.keyword, kc.label, kc.hint]
    for (const term of allTerms) {
      for (const w of term.toLowerCase().split(/\s+/)) {
        const keys = wordToConceptKeys(w)
        for (const k of keys) expectedKeys.add(k)
      }
    }
  }

  // Add concept keys from official definition words
  for (const w of meaningfulWords(definitionText)) {
    const keys = wordToConceptKeys(w)
    for (const k of keys) expectedKeys.add(k)
  }

  // Add concept keys from synonyms
  for (const syn of synonyms) {
    const keys = wordToConceptKeys(syn.toLowerCase())
    for (const k of keys) expectedKeys.add(k)
  }

  // Classify each player word
  const relevantWords: string[] = []
  const ignoredWords: string[] = []
  const irrelevantWords: string[] = []

  for (const w of inputMeaningful) {
    if (negatedWords.has(w)) {
      ignoredWords.push(w)
      continue
    }
    const classification = classifyWord(w, expectedKeys)
    if (classification === "relevant") {
      relevantWords.push(w)
    } else if (classification === "neutral") {
      ignoredWords.push(w)
    } else {
      // One more check: synonym clusters (existing areSynonyms function)
      const isRelatedViaSynonym = [...expectedKeys].some(key => {
        const keyTerms = GLOBAL_CONCEPTS[key] || []
        return keyTerms.some(t => areSynonyms(w, t))
      })
      if (isRelatedViaSynonym) {
        relevantWords.push(w)
      } else {
        // Also check against official def words via stemMatch
        const defWords = meaningfulWords(definitionText)
        const matchesOfficialDef = defWords.some(dw => stemMatch(w, dw))
        if (matchesOfficialDef) {
          relevantWords.push(w)
        } else {
          irrelevantWords.push(w)
        }
      }
    }
  }

  // Compute clarity score — penalty-based
  let clarity = 25
  const allConceptsHit = matchedConceptCount === totalConceptCount

  // Penalty per irrelevant word — but only count meaningful irrelevant words
  // Small penalty (1pt) per irrelevant word, max deduction 5pts from irrelevance
  const irrelevancePenalty = Math.min(irrelevantWords.length * 1.5, 5)
  clarity -= irrelevancePenalty

  // If concepts are NOT fully matched, cap clarity at 22
  // (can't get perfect clarity if you missed the meaning)
  if (!allConceptsHit) {
    const conceptRatio = totalConceptCount > 0 ? matchedConceptCount / totalConceptCount : 0
    const maxClarity = 22 - Math.round((1 - conceptRatio) * 5)
    clarity = Math.min(clarity, maxClarity)
  }

  // No brevity penalty when all concepts hit
  // If concepts missed and answer is very short (< 2 meaningful words), add small penalty
  if (!allConceptsHit && inputMeaningful.length < 2) {
    clarity -= 3
  }

  clarity = Math.max(0, Math.round(clarity))

  return {
    clarity,
    relevantWords,
    ignoredWords,
    irrelevantWords,
    debug: {
      conceptsHit,
      conceptsMissed,
      rawPenalty: 25 - clarity,
    }
  }
}


function scoreAgainstDefinition(
  input: string,
  inputMeaningful: string[],
  negatedWords: Set<string>,
  words: string[],
  keyConcepts: DailyWord["keyConcepts"],
  synonyms: string[],
  definitionText: string,
): { concepts: ConceptResult[]; matchedCount: number; conceptScore: number; precisionScore: number; precisionRatio: number; relevantWords: number; irrelevantWords: string[]; lengthScore: number; synonymWarning: boolean; clarityResult: ClarityResult } {
  const conceptCount = keyConcepts.length

  // Extract meaningful words from the official definition for overlap checking
  const officialDefWords = meaningfulWords(definitionText.toLowerCase())
  
  const concepts: ConceptResult[] = keyConcepts.map((concept) => {
    // Find explicit match and track which term matched
    let explicitMatchTerm: string | undefined
    for (const t of concept.matchTerms) {
      if (termMatches(input, t)) {
        explicitMatchTerm = t
        break
      }
    }
    
    // If no explicit match, try fuzzy matching
    const fuzzyResult = !explicitMatchTerm ? fuzzyConceptMatch(inputMeaningful, negatedWords, concept) : { matched: false, nearMiss: false, matchedWords: [] }
    
    let matched = !!explicitMatchTerm || fuzzyResult.matched
    let nearMiss = !matched && fuzzyResult.nearMiss
    let matchedWords = explicitMatchTerm ? undefined : ((fuzzyResult.matched || fuzzyResult.nearMiss) ? fuzzyResult.matchedWords : undefined)
    
    // FALLBACK: Definition overlap check
    // If still no match, check if player used words that appear directly in the official definition
    // This catches cases like "expected" in both player and official definition
    if (!matched && !nearMiss) {
      const nonNegatedInput = inputMeaningful.filter(w => !negatedWords.has(w))
      const overlapWords: string[] = []
      
      for (const iw of nonNegatedInput) {
        // Check if input word appears in official definition (stem match)
        for (const ow of officialDefWords) {
          if (stemMatch(iw, ow)) {
            overlapWords.push(iw)
            break
          }
        }
      }
      
      // If 2+ words overlap with official definition, it's a match
      // If 1 word overlaps, it's a near-miss
      if (overlapWords.length >= 2) {
        matched = true
        matchedWords = overlapWords
      } else if (overlapWords.length === 1) {
        nearMiss = true
        matchedWords = overlapWords
      }
    }
    
    return {
      keyword: concept.keyword,
      label: concept.label,
      hint: concept.hint,
      matched,
      nearMiss,
      matchedTerm: explicitMatchTerm,
      matchedWords,
    }
  })

  const matchedCount = concepts.filter((c) => c.matched).length
  // Round based on ratio so full credit always = exactly 75 regardless of concept count
  const conceptScore = conceptCount > 0 ? Math.round((matchedCount / conceptCount) * 75) : 0

  // Synonym-only penalty - use token-based matching, not substring
  let synonymWarning = false
  const inputTokens = input.toLowerCase().split(/\s+/)
  const isSynonymOnly = synonyms.some((syn) => {
    const synLower = syn.toLowerCase()
    // Check for exact token match or stem match, not substring
    return inputTokens.some(token => token === synLower || stemMatch(token, synLower))
  })
  // Only penalize if the answer is basically just a synonym with no real definition
  // Changed from hard cap (35) to a penalty (-20) so good attempts aren't crushed
  if (isSynonymOnly && words.length <= 3 && matchedCount <= conceptCount / 2) {
    synonymWarning = true
  }

  // Precision
  const allConceptVocab = keyConcepts.flatMap((c) => c.matchTerms.map((t) => t.toLowerCase()))
  const conceptLabelHintVocab = keyConcepts.flatMap((c) =>
    meaningfulWords(`${c.label} ${c.hint}`)
  )
  const synonymVocab = synonyms.map((s) => s.toLowerCase())
  const officialMeaningful = meaningfulWords(definitionText.toLowerCase())
  const allValidVocab = [...allConceptVocab, ...synonymVocab, ...officialMeaningful, ...conceptLabelHintVocab]

  let relevantWords = 0
  const irrelevantWords: string[] = []
  
  // Helper: check if a word's antonyms are in the valid vocabulary
  function negatedWordIsRelevant(word: string): boolean {
    const antonyms = ANTONYM_MAP[word] || []
    for (const antonym of antonyms) {
      if (allValidVocab.some((v) => antonym === v || stemMatch(antonym, v))) {
        return true
      }
    }
    return false
  }
  
  for (const iw of inputMeaningful) {
    // If the word is negated (e.g., "not moving"), check if its antonym is relevant
    // "not moving" should be treated as "stationary" which may be in the vocab
    if (negatedWords.has(iw)) {
      if (negatedWordIsRelevant(iw)) {
        // The negation expresses a concept that's in our vocabulary (e.g., "not moving" = "stationary")
        relevantWords++
      }
      // Either way, don't add to irrelevantWords - negation is intentional
      continue
    }
    
    const isRelevant =
      allValidVocab.some((v) => iw === v || stemMatch(iw, v)) ||
      allValidVocab.some((v) => areSynonyms(iw, v))
    if (isRelevant) {
      relevantWords++
    } else {
      irrelevantWords.push(iw)
    }
  }
  
  // Count negated words that are relevant for the total meaningful count
  let relevantNegatedCount = 0
  for (const nw of negatedWords) {
    if (negatedWordIsRelevant(nw)) {
      relevantNegatedCount++
    }
  }
  
  // Adjust the total for precision calculation - include relevant negated words
  const nonNegatedCount = inputMeaningful.length - negatedWords.size + relevantNegatedCount
  const rawPrecisionRatio = nonNegatedCount > 0
    ? relevantWords / nonNegatedCount
    : 0

  // Precision scoring: no automatic 100% - always based on actual word relevance
  // This ensures players need precise language even when concepts are matched
  const conceptRatio = conceptCount > 0 ? matchedCount / conceptCount : 0
  let precisionRatio = rawPrecisionRatio
  
  // Penalize very short answers - you can't get full precision credit with just 2-3 words
  // This prevents gaming with etymology phrases or minimal answers
  const minMeaningfulWords = 4
  if (nonNegatedCount < minMeaningfulWords) {
    const shortnessPenalty = nonNegatedCount / minMeaningfulWords
    precisionRatio = precisionRatio * shortnessPenalty
  }
  
  if (conceptRatio >= 1.0) {
    // All concepts captured - give a bonus but don't auto-max
    precisionRatio = Math.max(precisionRatio, 0.7)
  } else if (conceptRatio >= 0.75) {
    precisionRatio = Math.max(precisionRatio, 0.5)
  } else if (conceptRatio >= 0.5) {
    precisionRatio = Math.max(precisionRatio, 0.3)
  }
  const precisionScore = Math.round(precisionRatio * 10)

  // Detail
  const wc = words.length
  const officialWc = definitionText.trim().split(/\s+/).length
  const targetWc = Math.max(officialWc, 3)
  const detailRatio = Math.min(wc / targetWc, 1)
  const lengthScore = Math.round(Math.pow(detailRatio, 0.6) * 15)

  // Compute clarity score (new system)
  const clarityResult = computeClarity(
    inputMeaningful, negatedWords, keyConcepts, synonyms, definitionText, matchedCount, conceptCount
  )

  return { concepts, matchedCount, conceptScore, precisionScore, precisionRatio, relevantWords, irrelevantWords, lengthScore, synonymWarning, clarityResult }
}

// Normalize text for comparison: lowercase, strip punctuation, collapse spaces
function normalizeForComparison(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")  // Replace punctuation with space
    .replace(/\s+/g, " ")       // Collapse multiple spaces
    .trim()
}

// Check if user input closely matches the official definition
function isOfficialDefinitionMatch(userInput: string, officialDef: string, altDefs?: { definition: string }[]): boolean {
  if (!userInput || !officialDef) return false
  
  const normalizedUser = normalizeForComparison(userInput)
  const normalizedOfficial = normalizeForComparison(officialDef)
  
  if (!normalizedUser || !normalizedOfficial) return false
  
  // Exact match
  if (normalizedUser === normalizedOfficial) return true
  
  // Very close match (90%+ of words overlap in same order)
  const userWords = normalizedUser.split(" ").filter(w => w.length > 2)
  const officialWords = normalizedOfficial.split(" ").filter(w => w.length > 2)
  
  if (userWords.length >= 3 && officialWords.length >= 3) {
    let matchCount = 0
    for (const uw of userWords) {
      if (officialWords.some(ow => ow === uw || stemMatch(ow, uw))) {
        matchCount++
      }
    }
    const overlapRatio = matchCount / Math.max(userWords.length, officialWords.length)
    if (overlapRatio >= 0.85) return true
  }
  
  // Check alt definitions too
  if (altDefs && Array.isArray(altDefs)) {
    for (const alt of altDefs) {
      if (!alt?.definition) continue
      const normalizedAlt = normalizeForComparison(alt.definition)
      if (normalizedUser === normalizedAlt) return true
      
      const altWords = normalizedAlt.split(" ").filter(w => w.length > 2)
      if (userWords.length >= 3 && altWords.length >= 3) {
        let matchCount = 0
        for (const uw of userWords) {
          if (altWords.some(aw => aw === uw || stemMatch(aw, uw))) {
            matchCount++
          }
        }
        const overlapRatio = matchCount / Math.max(userWords.length, altWords.length)
        if (overlapRatio >= 0.85) return true
      }
    }
  }
  
  return false
}

export function scoreDefinition(
  userDefinition: string,
  dailyWord: DailyWord,
  usedHint = false,
  ): ScoreResult {
  const raw = userDefinition.toLowerCase().trim()
  const words = raw.split(/\s+/)

  // ══════════════════════════════════════════════════════════════════════════
  // FIX #1: If user essentially typed the dictionary definition, give 95-100
  // ══════════════════════════════════════════════════════════════════════════
  if (isOfficialDefinitionMatch(raw, dailyWord.definition, dailyWord.altDefinitions)) {
    const conceptCount = dailyWord.keyConcepts.length
    const concepts: ConceptResult[] = dailyWord.keyConcepts.map(c => ({
      keyword: c.keyword,
      label: c.label,
      hint: c.hint,
      matched: true,
      matchedTerm: "official definition",
    }))
    
    return {
      score: usedHint ? 95 : 100,
      feedback: "You matched the official definition almost exactly. Well done!",
      concepts,
      synonymWarning: false,
      missedSummary: null,
      breakdown: {
        concepts: { earned: 75, max: 75 },
        clarity: { earned: usedHint ? 20 : 25, max: 25, relevantWords: words, ignoredWords: [], irrelevantWords: [] },
        precision: { earned: 10, max: 10, ratio: 1, relevantCount: words.length, totalMeaningful: words.length, irrelevantWords: [] },
        detail: { earned: usedHint ? 8 : 13, max: 15, wordCount: words.length },
        hintPenalty: usedHint ? 5 : 0,
      },
    }
  }

  // Strip the target word itself (and morphological variants) from the input
  const stem = dailyWord.word.toLowerCase()
  const input = words
    .filter((w) => {
      if (w === stem) return false
      if (w.startsWith(stem) && w.length <= stem.length + 4) return false
      return true
    })
    .join(" ")

  const { words: inputMeaningful, negatedWords } = meaningfulWordsWithNegation(input)

  // Score against the primary definition
  const primary = scoreAgainstDefinition(input, inputMeaningful, negatedWords, words, dailyWord.keyConcepts, dailyWord.synonyms, dailyWord.definition)

  // Score against alternate definitions and pick the best
  let best = primary
  let bestTotal = primary.conceptScore + primary.precisionScore + primary.lengthScore
  let altDefinitionUsed: string | undefined = undefined

  if (dailyWord.altDefinitions) {
    for (const alt of dailyWord.altDefinitions) {
      const altResult = scoreAgainstDefinition(input, inputMeaningful, negatedWords, words, alt.keyConcepts, dailyWord.synonyms, alt.definition)
      const altTotal = altResult.conceptScore + altResult.precisionScore + altResult.lengthScore
      // Prefer higher concept matches first, then total score
      if (altResult.matchedCount > best.matchedCount || (altResult.matchedCount === best.matchedCount && altTotal > bestTotal)) {
        best = altResult
        bestTotal = altTotal
        altDefinitionUsed = alt.definition
      }
    }
  }

  const { concepts, matchedCount, conceptScore, precisionScore, precisionRatio, relevantWords, irrelevantWords, lengthScore, synonymWarning, clarityResult } = best
  const conceptCount = best.concepts.length
  const missedConcepts = concepts.filter((c) => !c.matched)
  const wc = words.length

  // --- Total (new: concepts + clarity) ---
  const clarityScore = clarityResult.clarity
  let score = conceptScore + clarityScore

  // Cap at 96 for very short answers (< 4 words) — a 2-word answer isn't a definition
  // "About to happen" style exact matches are handled by isOfficialDefinitionMatch above
  if (wc < 4) {
    score = Math.min(score, 96)
  }

  // Override: all concepts + high clarity + minimum length = 100
  if (conceptScore === 75 && clarityScore >= 23 && wc >= 4) {
    score = 100
  }

  // Apply synonym penalty (-20 instead of hard cap to 35)
  if (synonymWarning) {
    score = Math.max(0, score - 20)
  }

  // Apply hint penalty
  const hintPenalty = usedHint ? 5 : 0
  score -= hintPenalty
  
  // Clamp
  score = Math.max(0, Math.min(100, score))
  score = Math.round(score)

  // --- Feedback ---
  const pick = (options: string[]) => options[(score + words.length) % options.length]

  let feedback: string
  if (matchedCount === conceptCount) {
    if (score >= 100) {
      feedback = pick([
        "Perfect. You nailed it.",
        "Flawless. That definition could be in the dictionary.",
        "Spot on. You clearly know this word inside out.",
      ])
    } else if (score >= 90) {
      feedback = pick([
        "Superb. You captured the meaning with real accuracy.",
        "Impressive. You hit every key idea.",
        "Well done. A thorough and precise definition.",
      ])
    } else if (score >= 70) {
      feedback = pick([
        "Excellent. You got every core concept.",
        "Strong work. All the key ideas are there.",
        "Nice. You covered the essential meaning well.",
      ])
    } else {
      feedback = pick([
        "You captured the key ideas. Try adding more detail for a higher score.",
        "Good instincts. Flesh it out a bit more next time.",
        "You know the meaning. A fuller explanation would score even higher.",
      ])
    }
  } else if (matchedCount > 0) {
    if (missedConcepts.length === 1) {
      feedback = `You were on the right track but missed one idea: ${missedConcepts[0].label.toLowerCase()}.`
    } else {
      const hitLabels = concepts.filter((c) => c.matched).map((c) => c.label.toLowerCase())
      feedback = `You touched on ${hitLabels.join(" and ")}, but missed the other core idea${missedConcepts.length > 1 ? "s" : ""}.`
    }
  } else {
    feedback = pick([
      "This one was tough. Review the concepts below to see what the word really means.",
      "Not quite. Check the breakdown below to learn the key ideas.",
      "Tricky word. The concepts below show what the definition covers.",
    ])
  }

  // --- Missed concept summary ---
  let missedSummary: string | null = null
  if (missedConcepts.length > 0 && missedConcepts.length < conceptCount) {
    if (missedConcepts.length === 1) {
      missedSummary = `Your definition covered the word well, but didn't capture the idea of "${missedConcepts[0].label.toLowerCase()}." ${missedConcepts[0].hint}`
    } else {
      missedSummary = `Your definition was missing the ideas of ${missedConcepts.map((c) => `"${c.label.toLowerCase()}"`).join(" and ")}. Expand on these to strengthen your answer.`
    }
  } else if (missedConcepts.length === conceptCount) {
    missedSummary = "The core ideas were missing from your definition. Review each concept below."
  }

  return {
    score,
    feedback,
    concepts,
    synonymWarning,
    missedSummary,
    altDefinitionUsed,
    breakdown: {
      concepts: { earned: conceptScore, max: 75 },
      clarity: { earned: clarityScore, max: 25, relevantWords: clarityResult.relevantWords, ignoredWords: clarityResult.ignoredWords, irrelevantWords: clarityResult.irrelevantWords },
      // Legacy fields for backwards compat with results-panel
      precision: { earned: precisionScore, max: 10, ratio: precisionRatio, relevantCount: relevantWords, totalMeaningful: inputMeaningful.length, irrelevantWords: clarityResult.irrelevantWords },
      detail: { earned: lengthScore, max: 15, wordCount: wc },
      hintPenalty,
    },
  }
}
