import type { DailyWord } from "./game-data"

// -----------------------------------------------------------------------
// PRACTICE WORD BANK  (unlimited play)
//
// Same rules as daily: concepts strictly from the official definition.
// -----------------------------------------------------------------------

export const practiceWords: DailyWord[] = [
  {
    word: "acquiesce",
    partOfSpeech: "verb",
    definition: "To accept something reluctantly but without protest.",
    keyConcepts: [
      { keyword: "accept", matchTerms: ["accept", "agree", "comply", "consent", "yield", "submit", "go along", "give in", "concede", "capitulat", "assent", "conform"], label: "Accept", hint: "The definition says 'accept' -- agreeing to something." },
      { keyword: "reluctantly", matchTerms: ["reluctant", "unwilling", "grudging", "hesitant", "without protest", "passive", "silent", "resign", "without objection", "without resist"], label: "Reluctantly but without protest", hint: "The definition says 'reluctantly but without protest' -- you don't fight it but you don't want it." },
    ],
    synonyms: ["comply", "consent", "yield"],
  },
  {
    word: "capricious",
    partOfSpeech: "adjective",
    definition: "Given to sudden and unaccountable changes of mood or behavior.",
    keyConcepts: [
      { keyword: "sudden changes", matchTerms: ["sudden", "abrupt", "unexpected", "unpredictab", "change", "shift", "swing", "fluctuat", "unsteady", "erratic", "fickle", "volatile", "inconstant"], label: "Sudden changes", hint: "The definition says 'sudden and unaccountable changes' -- quick, without warning." },
      { keyword: "mood or behavior", matchTerms: ["mood", "behavior", "behaviour", "temperament", "attitude", "disposition", "demeanor", "personality", "emotion", "mind"], label: "Of mood or behavior", hint: "The definition says 'of mood or behavior' -- it's about how someone acts or feels." },
    ],
    synonyms: ["fickle", "unpredictable", "whimsical"],
  },
  {
    word: "debilitate",
    partOfSpeech: "verb",
    definition: "To make someone very weak and infirm.",
    keyConcepts: [
      { keyword: "make weak", matchTerms: ["weak", "weaken", "infirm", "enfeeble", "impair", "incapacitat", "sap", "drain", "exhaust", "cripple", "disable", "undermin", "devastat", "wear down"], label: "Make very weak", hint: "The definition says 'make someone very weak and infirm' -- severely reducing strength." },
    ],
    synonyms: ["weaken", "enfeeble", "incapacitate"],
  },
  {
    word: "ebullient",
    partOfSpeech: "adjective",
    definition: "Cheerful and full of energy; enthusiastic.",
    keyConcepts: [
      { keyword: "cheerful", matchTerms: ["cheerful", "joyful", "joyous", "upbeat", "buoyant", "lively", "vivacious", "spirited", "elated", "exuberant", "bubbly", "enthusiastic", "energetic", "animated", "zestful", "vibrant"], label: "Cheerful and full of energy", hint: "The definition says 'cheerful and full of energy; enthusiastic' -- overflowing with positive energy." },
    ],
    synonyms: ["exuberant", "enthusiastic", "lively"],
  },
  {
    word: "fastidious",
    partOfSpeech: "adjective",
    definition: "Very attentive to and concerned about accuracy and detail.",
    keyConcepts: [
      { keyword: "attentive", matchTerms: ["attentiv", "concerned", "careful", "meticulous", "particular", "fussy", "picky", "exacting", "demanding", "precise", "rigorous", "thorough", "scrupulous", "perfectionist"], label: "Very attentive", hint: "The definition says 'very attentive to and concerned about' -- deeply focused and caring." },
      { keyword: "accuracy and detail", matchTerms: ["accuracy", "detail", "precision", "exactness", "correct", "perfect", "minute", "specific", "standard", "quality"], label: "Accuracy and detail", hint: "The definition says 'accuracy and detail' -- the concern is about getting things exactly right." },
    ],
    synonyms: ["meticulous", "particular", "fussy"],
  },
  {
    word: "gregarious",
    partOfSpeech: "adjective",
    definition: "Fond of company; sociable.",
    keyConcepts: [
      { keyword: "sociable", matchTerms: ["sociab", "social", "company", "outgoing", "friendly", "convivial", "extrovert", "affable", "personable", "approachable", "fond of people", "enjoy company", "like being around"], label: "Fond of company; sociable", hint: "The definition says 'fond of company; sociable' -- someone who enjoys being around others." },
    ],
    synonyms: ["sociable", "outgoing", "friendly"],
  },
  {
    word: "idiosyncratic",
    partOfSpeech: "adjective",
    definition: "Relating to or peculiar to an individual.",
    keyConcepts: [
      { keyword: "peculiar", matchTerms: ["peculiar", "unique", "individual", "personal", "distinctive", "characteristic", "singular", "quirky", "eccentric", "unusual", "uncommon", "one-of-a-kind", "their own", "own way"], label: "Peculiar to an individual", hint: "The definition says 'peculiar to an individual' -- distinctively personal." },
    ],
    synonyms: ["distinctive", "peculiar", "unique"],
  },
  {
    word: "juxtapose",
    partOfSpeech: "verb",
    definition: "To place close together or side by side for comparison or contrast.",
    keyConcepts: [
      { keyword: "place together", matchTerms: ["place", "put", "set", "position", "arrange", "side by side", "close together", "alongside", "next to", "adjacent", "pair", "bring together"], label: "Place close together", hint: "The definition says 'place close together or side by side' -- physically or conceptually adjacent." },
      { keyword: "comparison", matchTerms: ["comparison", "contrast", "compare", "differ", "highlight", "distinction", "parallel", "analogy", "similarity", "opposite"], label: "For comparison or contrast", hint: "The definition says 'for comparison or contrast' -- the purpose is to reveal differences or similarities." },
    ],
    synonyms: ["compare", "contrast", "pair"],
  },
  {
    word: "lethargic",
    partOfSpeech: "adjective",
    definition: "Affected by a lack of energy or enthusiasm; sluggish.",
    keyConcepts: [
      { keyword: "lack of energy", matchTerms: ["lack of energy", "no energy", "sluggish", "tired", "drowsy", "fatigued", "weary", "exhausted", "listless", "languish", "torpid", "inert", "lazy", "lethargic", "apathetic"], label: "Lacking energy or enthusiasm; sluggish", hint: "The definition says 'lack of energy or enthusiasm; sluggish' -- drained and slow." },
    ],
    synonyms: ["sluggish", "listless", "torpid"],
  },
  {
    word: "meander",
    partOfSpeech: "verb",
    definition: "To follow a winding course; to wander at random.",
    keyConcepts: [
      { keyword: "winding", matchTerms: ["winding", "twist", "turn", "curve", "bend", "zigzag", "snake", "weave", "ramble", "wander", "roam", "drift", "stroll", "amble", "stray", "deviat", "indirect", "circuitous"], label: "Follow a winding course; wander", hint: "The definition says 'follow a winding course; wander at random' -- moving without a straight path." },
    ],
    synonyms: ["wander", "roam", "ramble"],
  },
  {
    word: "nonchalant",
    partOfSpeech: "adjective",
    definition: "Feeling or appearing casually calm and relaxed; not displaying anxiety or interest.",
    keyConcepts: [
      { keyword: "casually calm", matchTerms: ["casual", "calm", "relaxed", "cool", "unconcerned", "indifferen", "unbothered", "unfazed", "laid-back", "easygoing", "collected", "composed", "carefree", "nonchalant"], label: "Casually calm and relaxed", hint: "The definition says 'casually calm and relaxed' -- effortlessly at ease." },
      { keyword: "not anxious", matchTerms: ["not anxious", "not worried", "not concerned", "without anxiety", "without worry", "untroubled", "unperturbed", "impassiv", "blasé", "detached", "aloof"], label: "Not displaying anxiety or interest", hint: "The definition says 'not displaying anxiety or interest' -- showing no visible concern." },
    ],
    synonyms: ["casual", "unconcerned", "indifferent"],
  },
  {
    word: "ostentatious",
    partOfSpeech: "adjective",
    definition: "Characterized by vulgar or pretentious display; designed to impress.",
    keyConcepts: [
      { keyword: "showy display", matchTerms: ["flashy", "showy", "garish", "gaudy", "extravagant", "lavish", "ornate", "flamboyant", "conspicuous", "over-the-top", "excessive", "vulgar", "pretentious", "ostentatious", "grandiose"], label: "Vulgar or pretentious display", hint: "The definition says 'vulgar or pretentious display' -- excessive showing off." },
      { keyword: "to impress", matchTerms: ["impress", "attention", "flaunt", "boast", "brag", "show off", "exhib", "parade", "swagger"], label: "Designed to impress", hint: "The definition says 'designed to impress' -- the purpose is to make others notice." },
    ],
    synonyms: ["showy", "flashy", "pretentious"],
  },
  {
    word: "perfunctory",
    partOfSpeech: "adjective",
    definition: "Carried out with a minimum of effort or reflection.",
    keyConcepts: [
      { keyword: "minimum effort", matchTerms: ["minimum effort", "little effort", "halfhearted", "careless", "cursory", "superficial", "mechanical", "automatic", "routine", "token", "going through the motions", "slipshod", "desultory", "lacklustre", "lackluster", "indifferen", "apathetic", "perfunctory"], label: "Minimum effort or reflection", hint: "The definition says 'minimum of effort or reflection' -- done just to get it done." },
    ],
    synonyms: ["cursory", "halfhearted", "superficial"],
  },
  {
    word: "quintessential",
    partOfSpeech: "adjective",
    definition: "Representing the most perfect or typical example of a quality or class.",
    keyConcepts: [
      { keyword: "most perfect example", matchTerms: ["perfect", "typical", "example", "represent", "ideal", "embodi", "epitom", "archetype", "definitive", "classic", "ultimate", "purest", "finest", "model", "paradig", "quintessential"], label: "Most perfect or typical example", hint: "The definition says 'most perfect or typical example' -- the defining instance of its kind." },
    ],
    synonyms: ["typical", "classic", "ideal"],
  },
  {
    word: "reticent",
    partOfSpeech: "adjective",
    definition: "Not revealing one's thoughts or feelings readily.",
    keyConcepts: [
      { keyword: "not revealing", matchTerms: ["not reveal", "reserved", "quiet", "silent", "private", "secretive", "guarded", "withdrawn", "uncommunicat", "tight-lipped", "closed", "reluctant", "hesitant", "shy", "introverted", "taciturn", "restrained"], label: "Not revealing thoughts or feelings", hint: "The definition says 'not revealing one's thoughts or feelings readily' -- keeping things to oneself." },
    ],
    synonyms: ["reserved", "taciturn", "guarded"],
  },
  {
    word: "superfluous",
    partOfSpeech: "adjective",
    definition: "Unnecessary, especially through being more than enough.",
    keyConcepts: [
      { keyword: "unnecessary", matchTerms: ["unnecessary", "unneeded", "excess", "extra", "surplus", "redundant", "more than enough", "too much", "spare", "leftover", "wasteful", "gratuitous", "expendab", "dispensab", "superfluous", "over and above", "exceeding"], label: "Unnecessary; more than enough", hint: "The definition says 'unnecessary, especially through being more than enough' -- beyond what's needed." },
    ],
    synonyms: ["unnecessary", "excess", "redundant"],
  },
  {
    word: "tenuous",
    partOfSpeech: "adjective",
    definition: "Very weak or slight.",
    keyConcepts: [
      { keyword: "weak or slight", matchTerms: ["weak", "slight", "thin", "slim", "flimsy", "fragile", "delicate", "feeble", "insubstantial", "shaky", "doubtful", "questionab", "uncertain", "precarious", "marginal", "barely", "hardly"], label: "Very weak or slight", hint: "The definition says 'very weak or slight' -- barely there, easily broken." },
    ],
    synonyms: ["flimsy", "slight", "weak"],
  },
  {
    word: "venerate",
    partOfSpeech: "verb",
    definition: "To regard with great respect; revere.",
    keyConcepts: [
      { keyword: "great respect", matchTerms: ["respect", "rever", "admir", "honor", "honour", "esteem", "worship", "exalt", "glorif", "praise", "look up to", "idoliz", "deferenc", "awe", "devotion", "high regard", "venerat"], label: "Regard with great respect; revere", hint: "The definition says 'regard with great respect; revere' -- deep, almost sacred admiration." },
    ],
    synonyms: ["revere", "respect", "admire"],
  },
  {
    word: "acrimony",
    partOfSpeech: "noun",
    definition: "Bitterness or ill feeling.",
    keyConcepts: [
      { keyword: "bitterness", matchTerms: ["bitter", "hostile", "resentment", "anger", "animosity", "ill feeling", "ill will", "rancor", "spite", "venom", "malice", "hatred", "antagonism", "acrimony", "bad blood", "harsh", "nasty", "toxic"], label: "Bitterness or ill feeling", hint: "The definition says 'bitterness or ill feeling' -- sharp, hostile emotion." },
    ],
    synonyms: ["bitterness", "hostility", "rancor"],
  },
  {
    word: "deference",
    partOfSpeech: "noun",
    definition: "Humble submission and respect.",
    keyConcepts: [
      { keyword: "humble submission", matchTerms: ["humble", "submission", "submit", "yield", "defer", "obedien", "complian", "acquiescen", "bow", "subordinat", "meek", "dutiful"], label: "Humble submission", hint: "The definition says 'humble submission' -- a willingness to yield to someone." },
      { keyword: "respect", matchTerms: ["respect", "regard", "esteem", "honor", "honour", "reverence", "admiration", "courteous", "polite", "considerat", "deferential"], label: "Respect", hint: "The definition says 'and respect' -- deference combines yielding with genuine regard." },
    ],
    synonyms: ["respect", "submission", "regard"],
  },
  {
    word: "equivocal",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; ambiguous.",
    keyConcepts: [
      { keyword: "more than one interpretation", matchTerms: ["more than one", "multiple", "several", "different", "various", "interpretation", "meaning", "reading", "ambiguous", "unclear", "uncertain", "vague", "indefinite", "equivocal", "double meaning"], label: "Open to more than one interpretation", hint: "The definition says 'open to more than one interpretation; ambiguous' -- the meaning isn't clear." },
    ],
    synonyms: ["ambiguous", "vague", "unclear"],
  },
  {
    word: "galvanize",
    partOfSpeech: "verb",
    definition: "To shock or excite someone into taking action.",
    keyConcepts: [
      { keyword: "shock or excite", matchTerms: ["shock", "excite", "electrif", "energiz", "inspir", "motivat", "stimulat", "provok", "arous", "stir", "jolt", "spur", "rouse", "awaken", "ignit", "fire up", "invigorate"], label: "Shock or excite", hint: "The definition says 'shock or excite someone' -- a sudden burst of motivation." },
      { keyword: "into action", matchTerms: ["into action", "take action", "mobiliz", "rally", "respond", "react", "step up"], label: "Into taking action", hint: "The definition says 'into taking action' -- the result is doing something." },
    ],
    synonyms: ["motivate", "inspire", "energize"],
  },
  {
    word: "placate",
    partOfSpeech: "verb",
    definition: "To make someone less angry or hostile.",
    keyConcepts: [
      { keyword: "less angry", matchTerms: ["less angry", "calm down", "sooth", "pacif", "appeas", "mollif", "placate", "conciliat", "defuse", "de-escalat", "assuag", "propitiat"], label: "Make less angry or hostile", hint: "The definition says 'make someone less angry or hostile' -- calming down someone upset." },
    ],
    synonyms: ["appease", "pacify", "mollify"],
  },
  {
    word: "salient",
    partOfSpeech: "adjective",
    definition: "Most noticeable or important.",
    keyConcepts: [
      { keyword: "noticeable", matchTerms: ["noticeable", "prominent", "striking", "conspicuous", "obvious", "apparent", "standout", "remarkable", "noteworthy", "outstanding", "salient"], label: "Most noticeable or important", hint: "The definition says 'most noticeable or important' -- it stands out above the rest." },
    ],
    synonyms: ["prominent", "notable", "significant"],
  },
  {
    word: "tacit",
    partOfSpeech: "adjective",
    definition: "Understood or implied without being stated.",
    keyConcepts: [
      { keyword: "understood", matchTerms: ["understood", "implied", "implicit", "unspoken", "unsaid", "unstated", "unwritten", "inferred", "assumed", "presumed", "taken for granted", "wordless", "silent", "indirect", "suggested", "hinted"], label: "Understood or implied", hint: "The definition says 'understood or implied' -- the meaning is there, not said outright." },
      { keyword: "without being stated", matchTerms: ["without being stated", "not stated", "not said", "not spoken", "not express", "not explicit", "not verbal", "not written"], label: "Without being stated", hint: "The definition says 'without being stated' -- no one has to say it explicitly." },
    ],
    synonyms: ["implied", "unspoken", "understood"],
  },
  {
    word: "vindictive",
    partOfSpeech: "adjective",
    definition: "Having or showing a strong or unreasoning desire for revenge.",
    keyConcepts: [
      { keyword: "desire for revenge", matchTerms: ["revenge", "reveng", "retaliat", "vengeance", "payback", "spite", "vindictive", "get back at", "get even", "settle scores", "vengeful"], label: "Desire for revenge", hint: "The definition says 'desire for revenge' -- wanting to hurt someone who wronged you." },
      { keyword: "unreasoning", matchTerms: ["unreasoning", "excessive", "obsessive", "irrational", "disproportionat", "cruel", "ruthless", "relentless", "bitter", "hateful", "malicious"], label: "Strong or unreasoning", hint: "The definition says 'strong or unreasoning' -- the desire is disproportionate or blind." },
    ],
    synonyms: ["vengeful", "spiteful", "revengeful"],
  },
  {
    word: "zealous",
    partOfSpeech: "adjective",
    definition: "Having or showing great energy or enthusiasm in pursuit of a cause or objective.",
    keyConcepts: [
      { keyword: "great energy", matchTerms: ["energetic", "enthusiastic", "passionate", "fervor", "fervour", "ardor", "ardour", "zeal", "vigor", "vigour", "dedication", "devotion", "commitment", "driven", "eager", "avid", "keen", "fiery", "spirited", "wholehearted"], label: "Great energy or enthusiasm", hint: "The definition says 'great energy or enthusiasm' -- intense passion driving action." },
      { keyword: "pursuit of a cause", matchTerms: ["pursuit", "cause", "objective", "goal", "mission", "purpose", "crusade", "campaign", "quest", "endeavor", "endeavour", "movement", "belief"], label: "In pursuit of a cause", hint: "The definition says 'in pursuit of a cause or objective' -- the energy is directed at something." },
    ],
    synonyms: ["passionate", "fervent", "enthusiastic"],
  },
]
