import type { DailyWord } from "./game-data"

// Hard mode word list - 220 words, randomized order
// Start date: February 26, 2026 (today)
export const hardWords: DailyWord[] = [
  // ===== EXISTING ENTRIES (preserved from original) =====
  
  {
    word: "acerbic",
    definition: "Sharp and direct in speech or manner, often in a cutting way.",
    keyConcepts: [
      { keyword: "sharp", matchTerms: ["sharp", "cutting", "biting", "harsh", "pointed", "piercing"], label: "Sharp in manner", hint: "The definition emphasizes sharpness -- not physically, but in how one speaks or acts." },
      { keyword: "direct", matchTerms: ["direct", "blunt", "straightforward", "forthright", "frank"], label: "Direct communication", hint: "Being direct means not softening or hiding the message." },
    ],
    synonyms: ["caustic", "biting", "mordant", "sharp", "tart"],
    partOfSpeech: "adjective",
  },
  {
    word: "anathema",
    definition: "Something or someone that is intensely disliked or loathed.",
    keyConcepts: [
      { keyword: "disliked", matchTerms: ["dislik", "hat", "loath", "detest", "abhor", "despis", "revis"], label: "Intensely disliked", hint: "The definition emphasizes strong negative feelings -- beyond mere dislike." },
      { keyword: "cursed", matchTerms: ["curs", "damn", "condemn", "forbidden", "taboo", "ban"], label: "Cursed or forbidden", hint: "Originally a religious term for something formally cursed or denounced." },
    ],
    synonyms: ["abomination", "bane", "curse", "pariah"],
    partOfSpeech: "noun",
  },
  {
    word: "anodyne",
    definition: "Not likely to cause offense or disagreement; bland and inoffensive.",
    keyConcepts: [
      { keyword: "inoffensive", matchTerms: ["inoffensive", "harmless", "bland", "mild", "gentle", "soft"], label: "Inoffensive", hint: "The definition emphasizes avoiding offense -- being safe and unremarkable." },
      { keyword: "bland", matchTerms: ["bland", "dull", "boring", "uninteresting", "plain", "neutral"], label: "Bland quality", hint: "Something anodyne lacks strong character or impact." },
    ],
    synonyms: ["bland", "innocuous", "inoffensive", "mild"],
    partOfSpeech: "adjective",
  },
  {
    word: "apocryphal",
    definition: "Of doubtful authenticity, although widely believed to be true.",
    keyConcepts: [
      { keyword: "doubtful", matchTerms: ["doubt", "question", "uncertain", "unverif", "suspect", "dubious"], label: "Doubtful authenticity", hint: "The definition questions whether something is actually true or genuine." },
      { keyword: "believed", matchTerms: ["believ", "accept", "spread", "told", "popular", "famous", "legend"], label: "Widely believed", hint: "Despite being questionable, the story is commonly accepted or repeated." },
    ],
    synonyms: ["dubious", "questionable", "unverified", "legendary", "mythical"],
    partOfSpeech: "adjective",
  },
  {
    word: "baleful",
    definition: "Threatening harm; menacing or malevolent in intent or effect.",
    keyConcepts: [
      { keyword: "threatening", matchTerms: ["threaten", "menac", "ominous", "sinister", "danger", "harmful"], label: "Threatening harm", hint: "The definition emphasizes a sense of impending harm or evil." },
      { keyword: "malevolent", matchTerms: ["malevolent", "evil", "malicious", "hostile", "hateful", "wicked"], label: "Malevolent intent", hint: "There's an underlying ill will or desire to cause harm." },
    ],
    synonyms: ["menacing", "sinister", "malevolent", "ominous"],
    partOfSpeech: "adjective",
  },
  {
    word: "belligerent",
    definition: "Hostile and aggressive; eager to fight or argue.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostil", "aggress", "antagoni", "combative", "confrontation"], label: "Hostile attitude", hint: "The definition emphasizes an aggressive, confrontational stance." },
      { keyword: "eager", matchTerms: ["eager", "ready", "willing", "inclined", "looking for", "want"], label: "Eager to fight", hint: "Not just hostile, but actively seeking conflict." },
    ],
    synonyms: ["aggressive", "combative", "pugnacious", "hostile", "warlike"],
    partOfSpeech: "adjective",
  },
  {
    word: "bombastic",
    definition: "High-sounding language with little meaning; inflated and pretentious speech.",
    keyConcepts: [
      { keyword: "inflated", matchTerms: ["inflat", "exagger", "grandiose", "pompous", "overblown", "puffed"], label: "Inflated speech", hint: "The definition describes language that's puffed up beyond its substance." },
      { keyword: "pretentious", matchTerms: ["pretentious", "showy", "ostentatious", "affected", "self-import"], label: "Pretentious style", hint: "The speaker tries to impress but lacks genuine substance." },
    ],
    synonyms: ["pompous", "grandiloquent", "pretentious", "turgid", "overblown"],
    partOfSpeech: "adjective",
  },
  {
    word: "bucolic",
    definition: "Relating to the pleasant aspects of the countryside and rural life.",
    keyConcepts: [
      { keyword: "countryside", matchTerms: ["country", "rural", "pastoral", "rustic", "farm", "agrarian"], label: "Countryside setting", hint: "The definition places this firmly in a rural, non-urban context." },
      { keyword: "pleasant", matchTerms: ["pleasant", "peaceful", "idyllic", "charm", "serene", "tranquil"], label: "Pleasant quality", hint: "Not just rural, but idealized and charming." },
    ],
    synonyms: ["pastoral", "rustic", "rural", "idyllic", "countrified"],
    partOfSpeech: "adjective",
  },
  {
    word: "capricious",
    definition: "Given to sudden and unaccountable changes of mood or behavior.",
    keyConcepts: [
      { keyword: "sudden", matchTerms: ["sudden", "abrupt", "quick", "unexpected", "unpredictable"], label: "Sudden changes", hint: "The definition emphasizes how quickly changes occur." },
      { keyword: "unaccountable", matchTerms: ["unaccountable", "inexplicable", "random", "arbitrary", "whim", "fickle"], label: "Without reason", hint: "The changes seem to have no logical explanation." },
    ],
    synonyms: ["fickle", "mercurial", "volatile", "erratic", "changeable"],
    partOfSpeech: "adjective",
  },
  {
    word: "catharsis",
    definition: "The release of strong emotions, bringing relief and renewal.",
    keyConcepts: [
      { keyword: "release", matchTerms: ["releas", "discharg", "let out", "express", "vent", "purge", "free"], label: "Emotional release", hint: "The definition describes letting out pent-up feelings." },
      { keyword: "relief", matchTerms: ["relief", "renew", "cleans", "purif", "heal", "restor"], label: "Brings relief", hint: "After the release comes a sense of lightness or renewal." },
    ],
    synonyms: ["release", "purging", "cleansing", "relief", "liberation"],
    partOfSpeech: "noun",
  },
  {
    word: "chimerical",
    definition: "Existing only in imagination; wildly fanciful or unrealistic.",
    keyConcepts: [
      { keyword: "imaginary", matchTerms: ["imagin", "fantast", "unreal", "illusory", "fanciful", "dream"], label: "Exists in imagination", hint: "The definition places this firmly outside reality." },
      { keyword: "unrealistic", matchTerms: ["unrealistic", "impossible", "impractical", "absurd", "wild"], label: "Wildly unrealistic", hint: "Not just imaginative, but impossibly so." },
    ],
    synonyms: ["fanciful", "fantastical", "illusory", "utopian", "visionary"],
    partOfSpeech: "adjective",
  },
  {
    word: "colloquial",
    definition: "Used in ordinary or familiar conversation; informal language.",
    keyConcepts: [
      { keyword: "informal", matchTerms: ["informal", "casual", "everyday", "relaxed", "unofficial"], label: "Informal language", hint: "The definition describes language that's not formal or official." },
      { keyword: "conversational", matchTerms: ["convers", "spoken", "everyday", "familiar", "ordinary", "common"], label: "Conversational style", hint: "The kind of language used in regular speech, not writing." },
    ],
    synonyms: ["informal", "conversational", "vernacular", "everyday", "casual"],
    partOfSpeech: "adjective",
  },
  {
    word: "complacency",
    definition: "A feeling of smug satisfaction with oneself, often while unaware of potential dangers.",
    keyConcepts: [
      { keyword: "smug", matchTerms: ["smug", "self-satisf", "content", "pleased", "comfortable"], label: "Smug satisfaction", hint: "The definition describes excessive comfort with one's situation." },
      { keyword: "unaware", matchTerms: ["unaware", "ignor", "blind", "overlook", "danger", "risk", "threat"], label: "Unaware of danger", hint: "The satisfaction comes despite lurking problems." },
    ],
    synonyms: ["self-satisfaction", "smugness", "contentment", "comfortableness"],
    partOfSpeech: "noun",
  },
  {
    word: "contempt",
    definition: "The feeling that a person or thing is beneath consideration; disdain.",
    keyConcepts: [
      { keyword: "beneath", matchTerms: ["beneath", "below", "inferior", "worthless", "unworthy", "low"], label: "Beneath consideration", hint: "The definition describes viewing something as too low to matter." },
      { keyword: "disdain", matchTerms: ["disdain", "scorn", "disrespect", "derision", "dismissive"], label: "Disdain", hint: "A strong feeling of looking down on someone or something." },
    ],
    synonyms: ["disdain", "scorn", "derision", "disrespect", "denigration"],
    partOfSpeech: "noun",
  },
  {
    word: "demagogue",
    definition: "A political leader who seeks support by appealing to popular desires and prejudices rather than rational argument.",
    keyConcepts: [
      { keyword: "popular", matchTerms: ["popular", "mass", "crowd", "public", "emotion", "passion"], label: "Appeals to popular desires", hint: "The definition describes targeting what the masses want to hear." },
      { keyword: "prejudices", matchTerms: ["prejudic", "bias", "fear", "hate", "scapegoat", "division"], label: "Exploits prejudices", hint: "The appeal often plays on existing fears or hatreds." },
    ],
    synonyms: ["agitator", "rabble-rouser", "firebrand", "populist"],
    partOfSpeech: "noun",
  },
  {
    word: "demur",
    definition: "To raise objections or show reluctance.",
    keyConcepts: [
      { keyword: "objections", matchTerms: ["object", "protest", "disagree", "oppose", "challenge", "resist"], label: "Raise objections", hint: "The definition describes voicing disagreement or concern." },
      { keyword: "reluctance", matchTerms: ["reluctan", "hesita", "unwilling", "reserv", "doubt"], label: "Show reluctance", hint: "There's hesitation or unwillingness to proceed." },
    ],
    synonyms: ["object", "protest", "take exception", "balk", "hesitate"],
    partOfSpeech: "verb",
  },
  {
    word: "desultory",
    definition: "Lacking a plan, purpose, or enthusiasm; random and unfocused.",
    keyConcepts: [
      { keyword: "lacking", matchTerms: ["lack", "without", "absent", "missing", "devoid"], label: "Lacking purpose", hint: "The definition emphasizes the absence of direction." },
      { keyword: "random", matchTerms: ["random", "aimless", "unfocus", "scatter", "haphazard", "erratic"], label: "Random and unfocused", hint: "Actions or thoughts jump around without connection." },
    ],
    synonyms: ["aimless", "haphazard", "random", "unfocused", "erratic"],
    partOfSpeech: "adjective",
  },
  {
    word: "diffident",
    definition: "Modest or shy because of a lack of self-confidence.",
    keyConcepts: [
      { keyword: "modest", matchTerms: ["modest", "humble", "unassuming", "reserved", "retiring"], label: "Modest manner", hint: "The definition describes someone who doesn't put themselves forward." },
      { keyword: "shy", matchTerms: ["shy", "timid", "self-conscious", "insecure", "uncertain"], label: "Shy due to insecurity", hint: "The modesty stems from lacking confidence." },
    ],
    synonyms: ["shy", "timid", "bashful", "self-effacing", "unassuming"],
    partOfSpeech: "adjective",
  },
  {
    word: "dilettante",
    definition: "A person who cultivates an interest in a subject without commitment or deep knowledge.",
    keyConcepts: [
      { keyword: "interest", matchTerms: ["interest", "dabbl", "amateur", "superficial", "casual"], label: "Surface interest", hint: "The definition describes engagement that stays shallow." },
      { keyword: "without", matchTerms: ["without", "lack", "shallow", "superficial", "uncommitted"], label: "Lacks commitment", hint: "There's no deep dedication or serious study." },
    ],
    synonyms: ["amateur", "dabbler", "nonprofessional", "trifler"],
    partOfSpeech: "noun",
  },
  {
    word: "disabuse",
    definition: "To persuade someone that an idea or belief is mistaken.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuad", "convinc", "show", "prove", "demonstrate", "enlighten"], label: "Persuade someone", hint: "The definition involves changing someone's mind." },
      { keyword: "mistaken", matchTerms: ["mistak", "wrong", "false", "error", "incorrect", "illusion"], label: "Idea is mistaken", hint: "The belief being corrected was false to begin with." },
    ],
    synonyms: ["correct", "enlighten", "undeceive", "set straight"],
    partOfSpeech: "verb",
  },
  {
    word: "duplicity",
    definition: "Deceitfulness; double-dealing or deliberate deceptiveness.",
    keyConcepts: [
      { keyword: "deceitfulness", matchTerms: ["deceit", "dishonest", "lying", "fraud", "treacher"], label: "Deceitfulness", hint: "The definition emphasizes deliberate dishonesty." },
      { keyword: "double", matchTerms: ["double", "two-faced", "hypocrit", "false", "betray"], label: "Double-dealing", hint: "Saying one thing while meaning or doing another." },
    ],
    synonyms: ["deceit", "deception", "dishonesty", "treachery", "double-dealing"],
    partOfSpeech: "noun",
  },
  {
    word: "effete",
    definition: "Affected, overrefined, and ineffectual; lacking vigor or force.",
    keyConcepts: [
      { keyword: "affected", matchTerms: ["affected", "pretentious", "overrefin", "decadent", "precious"], label: "Affected manner", hint: "The definition describes excessive refinement to the point of artificiality." },
      { keyword: "ineffectual", matchTerms: ["ineffectual", "weak", "feeble", "impotent", "exhausted"], label: "Lacking vigor", hint: "Despite pretensions, there's no real strength or effectiveness." },
    ],
    synonyms: ["decadent", "overrefined", "effeminate", "weak", "enervated"],
    partOfSpeech: "adjective",
  },
  {
    word: "egregious",
    definition: "Outstandingly bad; shocking in a negative way.",
    keyConcepts: [
      { keyword: "bad", matchTerms: ["bad", "terrible", "awful", "horr", "atroc", "flagrant", "gross"], label: "Outstandingly bad", hint: "The definition emphasizes extreme negativity." },
      { keyword: "shocking", matchTerms: ["shock", "outrag", "appall", "glar", "blatant", "conspicuous"], label: "Shockingly obvious", hint: "The badness is so extreme it can't be ignored." },
    ],
    synonyms: ["flagrant", "glaring", "gross", "outrageous", "shocking"],
    partOfSpeech: "adjective",
  },
  {
    word: "equanimity",
    definition: "Mental calmness and evenness of temper, especially in difficult situations.",
    keyConcepts: [
      { keyword: "calmness", matchTerms: ["calm", "compos", "serene", "tranquil", "peace", "steady"], label: "Mental calmness", hint: "The definition describes a state of inner peace." },
      { keyword: "evenness", matchTerms: ["even", "balanc", "stable", "level", "poise", "equilibrium"], label: "Even temper", hint: "Emotions stay balanced rather than swinging to extremes." },
    ],
    synonyms: ["composure", "calmness", "serenity", "poise", "self-possession"],
    partOfSpeech: "noun",
  },
  {
    word: "equivocate",
    definition: "To use ambiguous language so as to conceal the truth or avoid commitment.",
    keyConcepts: [
      { keyword: "ambiguous", matchTerms: ["ambigu", "vague", "unclear", "evasive", "mislead"], label: "Uses ambiguous language", hint: "The definition describes deliberately unclear communication." },
      { keyword: "conceal", matchTerms: ["conceal", "hide", "avoid", "evade", "dodge", "hedge"], label: "Conceals truth", hint: "The vagueness serves to hide what one really means." },
    ],
    synonyms: ["prevaricate", "hedge", "evade", "dodge", "waffle"],
    partOfSpeech: "verb",
  },
  {
    word: "esoteric",
    definition: "Intended for or understood by only a small group with specialized knowledge.",
    keyConcepts: [
      { keyword: "small", matchTerms: ["small", "few", "select", "limit", "exclusive", "niche"], label: "Small group", hint: "The definition restricts access to a limited audience." },
      { keyword: "specialized", matchTerms: ["special", "expert", "insider", "obscure", "arcane"], label: "Specialized knowledge", hint: "Understanding requires expertise most people don't have." },
    ],
    synonyms: ["arcane", "obscure", "abstruse", "recondite", "cryptic"],
    partOfSpeech: "adjective",
  },
  {
    word: "excoriate",
    definition: "To criticize someone severely.",
    keyConcepts: [
      { keyword: "criticize", matchTerms: ["critic", "attack", "denounc", "condemn", "censur", "rebuk"], label: "Criticize severely", hint: "The definition describes harsh, intense criticism." },
      { keyword: "severely", matchTerms: ["sever", "harsh", "fierce", "brutal", "scathing", "savage"], label: "Severe intensity", hint: "This goes well beyond mild disapproval." },
    ],
    synonyms: ["denounce", "condemn", "lambaste", "censure", "castigate"],
    partOfSpeech: "verb",
  },
  {
    word: "exigent",
    definition: "Pressing; demanding immediate action or attention.",
    keyConcepts: [
      { keyword: "pressing", matchTerms: ["press", "urgent", "critical", "acute", "crucial"], label: "Pressing urgency", hint: "The definition emphasizes immediate need." },
      { keyword: "demanding", matchTerms: ["demand", "requir", "need", "necessitat", "compel"], label: "Demands action", hint: "The situation insists on a response." },
    ],
    synonyms: ["urgent", "pressing", "demanding", "critical", "imperative"],
    partOfSpeech: "adjective",
  },
  {
    word: "facetious",
    definition: "Treating serious issues with deliberately inappropriate humor.",
    keyConcepts: [
      { keyword: "serious", matchTerms: ["serious", "grave", "solemn", "important", "weighty"], label: "Serious issues", hint: "The definition involves topics that normally warrant gravity." },
      { keyword: "inappropriate", matchTerms: ["inappropriat", "flippant", "glib", "irreverent", "frivolous", "joking"], label: "Inappropriate humor", hint: "The humor doesn't fit the seriousness of the situation." },
    ],
    synonyms: ["flippant", "glib", "frivolous", "tongue-in-cheek", "playful"],
    partOfSpeech: "adjective",
  },
  {
    word: "fallacious",
    definition: "Based on a mistaken belief or faulty reasoning.",
    keyConcepts: [
      { keyword: "mistaken", matchTerms: ["mistak", "false", "wrong", "incorrect", "erroneous"], label: "Mistaken belief", hint: "The definition identifies the foundation as untrue." },
      { keyword: "faulty", matchTerms: ["faulty", "flawed", "unsound", "invalid", "illogical"], label: "Faulty reasoning", hint: "The logic itself is broken or deceptive." },
    ],
    synonyms: ["false", "erroneous", "invalid", "unfounded", "specious"],
    partOfSpeech: "adjective",
  },
  {
    word: "fatuous",
    definition: "Silly and pointless; showing a lack of intelligence or thought.",
    keyConcepts: [
      { keyword: "silly", matchTerms: ["silly", "foolish", "stupid", "inane", "asinine", "vapid"], label: "Silly quality", hint: "The definition describes something lacking seriousness." },
      { keyword: "pointless", matchTerms: ["pointless", "meaningless", "empty", "vacuous", "shallow"], label: "Pointless", hint: "There's no substance or value to be found." },
    ],
    synonyms: ["foolish", "silly", "inane", "vacuous", "asinine"],
    partOfSpeech: "adjective",
  },
  {
    word: "feckless",
    definition: "Lacking initiative or strength of character; irresponsible.",
    keyConcepts: [
      { keyword: "lacking", matchTerms: ["lack", "without", "deficient", "weak", "absent"], label: "Lacking initiative", hint: "The definition describes a fundamental absence." },
      { keyword: "irresponsible", matchTerms: ["irresponsib", "careless", "reckless", "negligent", "ineffective"], label: "Irresponsible", hint: "Unable or unwilling to act responsibly." },
    ],
    synonyms: ["ineffective", "irresponsible", "worthless", "incompetent", "useless"],
    partOfSpeech: "adjective",
  },
  {
    word: "furtive",
    definition: "Attempting to avoid notice or attention, typically because of guilt.",
    keyConcepts: [
      { keyword: "avoid", matchTerms: ["avoid", "escap", "evade", "hide", "conceal", "secret"], label: "Avoiding notice", hint: "The definition describes trying not to be seen." },
      { keyword: "guilt", matchTerms: ["guilt", "shame", "wrong", "suspicious", "sneaky", "stealthy"], label: "Suggests guilt", hint: "The secrecy implies something to hide." },
    ],
    synonyms: ["secretive", "stealthy", "sneaky", "surreptitious", "covert"],
    partOfSpeech: "adjective",
  },
  {
    word: "garrulous",
    definition: "Excessively talkative, especially about trivial matters.",
    keyConcepts: [
      { keyword: "talkative", matchTerms: ["talkativ", "chatty", "loquacious", "verbose", "wordy"], label: "Excessively talkative", hint: "The definition describes talking far too much." },
      { keyword: "trivial", matchTerms: ["trivial", "unimport", "pointless", "rambling", "meandering"], label: "About trivial matters", hint: "The excessive talk lacks substance." },
    ],
    synonyms: ["talkative", "loquacious", "verbose", "chatty", "voluble"],
    partOfSpeech: "adjective",
  },
  {
    word: "gratuitous",
    definition: "Uncalled for; lacking good reason or justification.",
    keyConcepts: [
      { keyword: "uncalled", matchTerms: ["uncalled", "unnecessar", "unwarranted", "unjustif", "needless"], label: "Uncalled for", hint: "The definition describes something that wasn't needed." },
      { keyword: "lacking", matchTerms: ["lack", "without", "no", "absent", "missing"], label: "Lacks justification", hint: "There's no good reason for it." },
    ],
    synonyms: ["unnecessary", "unwarranted", "unjustified", "needless", "superfluous"],
    partOfSpeech: "adjective",
  },
  {
    word: "hackneyed",
    definition: "Overused and lacking originality or freshness.",
    keyConcepts: [
      { keyword: "overused", matchTerms: ["overus", "worn", "stale", "tired", "clich"], label: "Overused", hint: "The definition describes something used too many times." },
      { keyword: "lacking", matchTerms: ["lack", "unoriginal", "banal", "trite", "predictable"], label: "Lacks originality", hint: "Whatever freshness it had is long gone." },
    ],
    synonyms: ["cliched", "trite", "banal", "stale", "overused"],
    partOfSpeech: "adjective",
  },
  {
    word: "hubris",
    definition: "Excessive pride or self-confidence, especially leading to downfall.",
    keyConcepts: [
      { keyword: "excessive", matchTerms: ["excess", "extreme", "overwhelming", "overween", "outsized"], label: "Excessive pride", hint: "The definition emphasizes pride beyond reasonable limits." },
      { keyword: "downfall", matchTerms: ["downfall", "ruin", "destruction", "nemesis", "disaster"], label: "Leads to downfall", hint: "This kind of pride typically ends badly." },
    ],
    synonyms: ["arrogance", "conceit", "pride", "haughtiness", "self-importance"],
    partOfSpeech: "noun",
  },
  {
    word: "iconoclastic",
    definition: "Challenging or rejecting established beliefs, customs, or institutions.",
    keyConcepts: [
      { keyword: "challenging", matchTerms: ["challeng", "question", "attack", "defy", "oppose", "resist"], label: "Challenging authority", hint: "The definition describes actively confronting established norms." },
      { keyword: "established", matchTerms: ["establish", "tradition", "convention", "orthodox", "institution"], label: "Rejects established norms", hint: "The target is things widely accepted or revered." },
    ],
    synonyms: ["nonconformist", "radical", "rebellious", "subversive", "unorthodox"],
    partOfSpeech: "adjective",
  },
  {
    word: "ignominious",
    definition: "Deserving or causing public disgrace or shame.",
    keyConcepts: [
      { keyword: "disgrace", matchTerms: ["disgrac", "shame", "dishonor", "humiliat", "embarrass"], label: "Public disgrace", hint: "The definition involves damage to reputation." },
      { keyword: "public", matchTerms: ["public", "open", "visible", "notorious", "known"], label: "Known publicly", hint: "The shame is exposed for others to see." },
    ],
    synonyms: ["shameful", "humiliating", "disgraceful", "dishonorable", "degrading"],
    partOfSpeech: "adjective",
  },
  {
    word: "implacable",
    definition: "Unable to be appeased or placated; relentlessly unforgiving.",
    keyConcepts: [
      { keyword: "unable", matchTerms: ["unable", "cannot", "impossible", "won't", "refuse"], label: "Cannot be appeased", hint: "The definition describes an absolute resistance to calming." },
      { keyword: "relentless", matchTerms: ["relentless", "unforgiving", "persistent", "unyield", "inexorable"], label: "Relentlessly unforgiving", hint: "The hostility continues without letting up." },
    ],
    synonyms: ["unforgiving", "relentless", "inexorable", "merciless", "unappeasable"],
    partOfSpeech: "adjective",
  },
  {
    word: "impunity",
    definition: "Exemption from punishment or freedom from harmful consequences.",
    keyConcepts: [
      { keyword: "exemption", matchTerms: ["exempt", "free", "escap", "avoid", "without"], label: "Exemption from punishment", hint: "The definition describes avoiding the normal consequences." },
      { keyword: "consequences", matchTerms: ["consequen", "punishment", "penalt", "repercussion", "harm"], label: "No harmful consequences", hint: "Actions that should have penalties don't." },
    ],
    synonyms: ["immunity", "exemption", "freedom", "liberty", "license"],
    partOfSpeech: "noun",
  },
  {
    word: "ineffable",
    definition: "Too great or extreme to be expressed or described in words.",
    keyConcepts: [
      { keyword: "great", matchTerms: ["great", "extreme", "profound", "intense", "overwhelming"], label: "Too great", hint: "The definition describes something beyond normal scale." },
      { keyword: "expressed", matchTerms: ["express", "describ", "word", "articulat", "convey"], label: "Beyond words", hint: "Language itself falls short." },
    ],
    synonyms: ["indescribable", "inexpressible", "unspeakable", "unutterable"],
    partOfSpeech: "adjective",
  },
  {
    word: "inexorable",
    definition: "Impossible to stop or prevent; inevitable.",
    keyConcepts: [
      { keyword: "impossible", matchTerms: ["impossib", "cannot", "unable", "unstoppable"], label: "Impossible to stop", hint: "The definition describes something that won't yield." },
      { keyword: "inevitable", matchTerms: ["inevitab", "certain", "unavoidable", "inescapable", "relentless"], label: "Inevitable outcome", hint: "It will happen regardless of efforts to prevent it." },
    ],
    synonyms: ["relentless", "unstoppable", "inevitable", "unyielding", "implacable"],
    partOfSpeech: "adjective",
  },
  {
    word: "inimical",
    definition: "Tending to obstruct or harm; hostile or unfriendly.",
    keyConcepts: [
      { keyword: "obstruct", matchTerms: ["obstruct", "hinder", "impede", "block", "harmful", "damage"], label: "Tends to harm", hint: "The definition describes something that works against." },
      { keyword: "hostile", matchTerms: ["hostil", "unfriendly", "adverse", "antagonistic", "opposed"], label: "Hostile in nature", hint: "There's inherent opposition or ill will." },
    ],
    synonyms: ["hostile", "harmful", "adverse", "detrimental", "antagonistic"],
    partOfSpeech: "adjective",
  },
  {
    word: "insatiable",
    definition: "Impossible to satisfy; always wanting more.",
    keyConcepts: [
      { keyword: "impossible", matchTerms: ["impossib", "cannot", "never", "unable", "unquenchable"], label: "Impossible to satisfy", hint: "The definition describes a need that can't be met." },
      { keyword: "wanting", matchTerms: ["want", "crav", "desir", "hunger", "thirst", "greedy"], label: "Always wanting more", hint: "No amount is ever enough." },
    ],
    synonyms: ["unquenchable", "voracious", "greedy", "ravenous", "insatiate"],
    partOfSpeech: "adjective",
  },
  {
    word: "insidious",
    definition: "Proceeding in a gradual, subtle way, but with harmful effects.",
    keyConcepts: [
      { keyword: "gradual", matchTerms: ["gradual", "slow", "incremental", "subtle", "creeping", "stealthy"], label: "Gradual progression", hint: "The definition describes something that advances slowly." },
      { keyword: "harmful", matchTerms: ["harmful", "danger", "damag", "destructive", "malicious"], label: "Harmful effects", hint: "Despite the subtlety, the outcome is negative." },
    ],
    synonyms: ["treacherous", "crafty", "subtle", "sly", "cunning"],
    partOfSpeech: "adjective",
  },
  {
    word: "inveigle",
    definition: "To persuade someone through deception or flattery.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuad", "convinc", "coax", "entice", "lure", "seduce"], label: "Persuade someone", hint: "The definition involves getting someone to do something." },
      { keyword: "deception", matchTerms: ["decept", "flatter", "manipulat", "trick", "cunning", "wile"], label: "Through deception", hint: "The persuasion isn't honest or straightforward." },
    ],
    synonyms: ["coax", "cajole", "wheedle", "beguile", "entice"],
    partOfSpeech: "verb",
  },
  {
    word: "irascible",
    definition: "Having or showing a tendency to be easily angered.",
    keyConcepts: [
      { keyword: "tendency", matchTerms: ["tendency", "prone", "inclin", "likely", "predispos"], label: "Tendency to anger", hint: "The definition describes a consistent pattern." },
      { keyword: "easily", matchTerms: ["easily", "quick", "readily", "short", "hair-trigger"], label: "Easily angered", hint: "It doesn't take much to set them off." },
    ],
    synonyms: ["irritable", "quick-tempered", "hot-tempered", "testy", "touchy"],
    partOfSpeech: "adjective",
  },
  {
    word: "laconic",
    definition: "Using very few words; brief and to the point.",
    keyConcepts: [
      { keyword: "few", matchTerms: ["few", "brief", "short", "concise", "terse", "minimal"], label: "Using few words", hint: "The definition emphasizes extreme brevity." },
      { keyword: "point", matchTerms: ["point", "direct", "succinct", "pithy", "economical"], label: "To the point", hint: "What's said is focused and purposeful." },
    ],
    synonyms: ["terse", "concise", "brief", "succinct", "pithy"],
    partOfSpeech: "adjective",
  },
  {
    word: "ludicrous",
    definition: "So foolish or unreasonable as to be amusing; ridiculous.",
    keyConcepts: [
      { keyword: "foolish", matchTerms: ["foolish", "absurd", "ridicul", "preposterous", "nonsens"], label: "Foolish quality", hint: "The definition describes something that defies good sense." },
      { keyword: "amusing", matchTerms: ["amus", "laughab", "comic", "farcical", "funny"], label: "Amusingly so", hint: "The foolishness provokes laughter." },
    ],
    synonyms: ["absurd", "ridiculous", "preposterous", "laughable", "farcical"],
    partOfSpeech: "adjective",
  },
  {
    word: "maelstrom",
    definition: "A powerful whirlpool; a situation of confused and violent turmoil.",
    keyConcepts: [
      { keyword: "whirlpool", matchTerms: ["whirlpool", "vortex", "swirl", "eddy", "spin"], label: "Powerful whirlpool", hint: "The definition evokes circular, pulling force." },
      { keyword: "turmoil", matchTerms: ["turmoil", "chaos", "confusion", "upheaval", "disorder"], label: "Violent turmoil", hint: "Everything is thrown into disorder." },
    ],
    synonyms: ["whirlpool", "turmoil", "chaos", "tumult", "pandemonium"],
    partOfSpeech: "noun",
  },
  {
    word: "mordant",
    definition: "Having or showing a sharp wit; bitingly sarcastic.",
    keyConcepts: [
      { keyword: "sharp", matchTerms: ["sharp", "keen", "cutting", "incisive", "piercing"], label: "Sharp wit", hint: "The definition describes mental sharpness that cuts." },
      { keyword: "biting", matchTerms: ["biting", "caustic", "acerbic", "scathing", "sarcastic"], label: "Bitingly sarcastic", hint: "The humor has teeth -- it can wound." },
    ],
    synonyms: ["caustic", "acerbic", "biting", "scathing", "trenchant"],
    partOfSpeech: "adjective",
  },
  {
    word: "myopic",
    definition: "Lacking foresight or intellectual insight; narrow-minded.",
    keyConcepts: [
      { keyword: "lacking", matchTerms: ["lack", "without", "deficient", "short", "limit"], label: "Lacking foresight", hint: "The definition describes an inability to see ahead." },
      { keyword: "narrow", matchTerms: ["narrow", "limit", "restrict", "shortsight", "tunnel"], label: "Narrow-minded", hint: "Vision is constrained to immediate concerns." },
    ],
    synonyms: ["shortsighted", "narrow-minded", "unimaginative", "provincial"],
    partOfSpeech: "adjective",
  },
  {
    word: "nihilistic",
    definition: "Rejecting all religious and moral principles, believing life is meaningless.",
    keyConcepts: [
      { keyword: "rejecting", matchTerms: ["reject", "deny", "dismiss", "repudiat", "abandon"], label: "Rejects principles", hint: "The definition describes active rejection of values." },
      { keyword: "meaningless", matchTerms: ["meaningless", "pointless", "purposeless", "futile", "empty"], label: "Life is meaningless", hint: "There's no inherent purpose or value to existence." },
    ],
    synonyms: ["pessimistic", "cynical", "negative", "anarchic", "hopeless"],
    partOfSpeech: "adjective",
  },
  {
    word: "nonchalant",
    definition: "Feeling or appearing casually calm and relaxed; not displaying anxiety or interest.",
    keyConcepts: [
      { keyword: "casual", matchTerms: ["casual", "relaxed", "unconcern", "indifferent", "laid-back"], label: "Casually calm", hint: "The definition describes an easy, unbothered demeanor." },
      { keyword: "anxiety", matchTerms: ["anxiety", "worry", "concern", "stress", "interest"], label: "No anxiety shown", hint: "Whatever might worry others doesn't register." },
    ],
    synonyms: ["casual", "unconcerned", "indifferent", "blasé", "insouciant"],
    partOfSpeech: "adjective",
  },
  {
    word: "obdurate",
    definition: "Stubbornly refusing to change one's opinion or course of action.",
    keyConcepts: [
      { keyword: "stubbornly", matchTerms: ["stubborn", "obstinate", "inflexib", "unyield", "adamant"], label: "Stubbornly refusing", hint: "The definition emphasizes determined resistance to change." },
      { keyword: "change", matchTerms: ["change", "alter", "modify", "budge", "relent"], label: "Refuses to change", hint: "Neither opinions nor actions will shift." },
    ],
    synonyms: ["stubborn", "unyielding", "inflexible", "intransigent", "adamant"],
    partOfSpeech: "adjective",
  },
  {
    word: "officious",
    definition: "Asserting authority or interfering in an annoyingly domineering way.",
    keyConcepts: [
      { keyword: "asserting", matchTerms: ["assert", "impos", "push", "aggressive", "overstep"], label: "Asserting authority", hint: "The definition describes claiming power beyond one's role." },
      { keyword: "interfering", matchTerms: ["interfer", "meddl", "intrusive", "busybod", "nosy"], label: "Annoyingly interfering", hint: "Getting involved where not wanted." },
    ],
    synonyms: ["meddlesome", "interfering", "intrusive", "bossy", "overbearing"],
    partOfSpeech: "adjective",
  },
  {
    word: "pecuniary",
    definition: "Relating to or consisting of money.",
    keyConcepts: [
      { keyword: "relating", matchTerms: ["relat", "concern", "involv", "pertain", "connect"], label: "Relating to money", hint: "The definition makes this about financial matters." },
      { keyword: "money", matchTerms: ["money", "financial", "monetary", "fiscal", "economic", "cash"], label: "About money", hint: "The subject is currency and finances." },
    ],
    synonyms: ["financial", "monetary", "fiscal", "economic"],
    partOfSpeech: "adjective",
  },
  {
    word: "pedantic",
    definition: "Excessively concerned with minor details or rules; showing off learning.",
    keyConcepts: [
      { keyword: "excessively", matchTerms: ["excess", "overly", "too", "obsess", "extreme"], label: "Excessive concern", hint: "The definition emphasizes going beyond what's reasonable." },
      { keyword: "details", matchTerms: ["detail", "minor", "trivial", "technicali", "rule", "precise"], label: "Focus on minor details", hint: "Attention goes to small matters others would overlook." },
    ],
    synonyms: ["fussy", "fastidious", "punctilious", "nitpicking", "academic"],
    partOfSpeech: "adjective",
  },
  {
    word: "peremptory",
    definition: "Insisting on immediate attention or obedience, especially in a domineering way.",
    keyConcepts: [
      { keyword: "immediate", matchTerms: ["immediat", "instant", "urgent", "now", "demanding"], label: "Demands immediate action", hint: "The definition describes insistence on promptness." },
      { keyword: "domineering", matchTerms: ["domineer", "authorit", "imperious", "dictat", "bossy"], label: "Domineering manner", hint: "The demand comes with an air of superiority." },
    ],
    synonyms: ["imperious", "dictatorial", "authoritative", "commanding", "bossy"],
    partOfSpeech: "adjective",
  },
  {
    word: "perfunctory",
    definition: "Carried out with minimal effort; done merely as a duty.",
    keyConcepts: [
      { keyword: "minimal", matchTerms: ["minimal", "little", "least", "token", "superficial"], label: "Minimal effort", hint: "The definition describes doing the bare minimum." },
      { keyword: "duty", matchTerms: ["duty", "obligat", "routine", "formali", "mechanical"], label: "Done as mere duty", hint: "There's no genuine engagement, just going through motions." },
    ],
    synonyms: ["cursory", "superficial", "mechanical", "routine", "halfhearted"],
    partOfSpeech: "adjective",
  },
  {
    word: "philistine",
    definition: "A person who is hostile or indifferent to culture and the arts.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostil", "indifferen", "dismiss", "contempt", "scorn"], label: "Hostile to culture", hint: "The definition describes active or passive rejection." },
      { keyword: "culture", matchTerms: ["cultur", "art", "aesthetic", "refin", "intellectual"], label: "Regarding culture and arts", hint: "The target is artistic and cultural pursuits." },
    ],
    synonyms: ["uncultured", "lowbrow", "ignoramus", "barbarian", "boor"],
    partOfSpeech: "noun",
  },
  {
    word: "platitude",
    definition: "A remark or statement that has been used too often to be meaningful.",
    keyConcepts: [
      { keyword: "remark", matchTerms: ["remark", "statement", "saying", "phrase", "express", "cliche"], label: "A remark or statement", hint: "The definition describes a verbal expression." },
      { keyword: "overused", matchTerms: ["overus", "worn", "stale", "trite", "banal", "hackney"], label: "Used too often", hint: "Repetition has drained it of meaning." },
    ],
    synonyms: ["cliche", "truism", "banality", "bromide", "commonplace"],
    partOfSpeech: "noun",
  },
  {
    word: "poignant",
    definition: "Evoking a keen sense of sadness or regret.",
    keyConcepts: [
      { keyword: "evoking", matchTerms: ["evok", "arous", "stir", "provok", "trigger", "elicit"], label: "Evokes emotion", hint: "The definition describes calling forth feelings." },
      { keyword: "sadness", matchTerms: ["sad", "sorrow", "grief", "regret", "melanchol", "bitter"], label: "Sadness or regret", hint: "The emotions stirred are bittersweet." },
    ],
    synonyms: ["moving", "touching", "affecting", "plaintive", "bittersweet"],
    partOfSpeech: "adjective",
  },
  {
    word: "polemic",
    definition: "A strong verbal or written attack on someone or something.",
    keyConcepts: [
      { keyword: "strong", matchTerms: ["strong", "fierce", "aggressive", "forceful", "vigorous"], label: "Strong attack", hint: "The definition emphasizes intensity." },
      { keyword: "attack", matchTerms: ["attack", "critic", "assault", "denounc", "condemn"], label: "Verbal or written attack", hint: "The target is assailed through words." },
    ],
    synonyms: ["diatribe", "tirade", "invective", "denunciation", "attack"],
    partOfSpeech: "noun",
  },
  {
    word: "probity",
    definition: "The quality of having strong moral principles; honesty and decency.",
    keyConcepts: [
      { keyword: "moral", matchTerms: ["moral", "ethic", "principl", "virtue", "integrit"], label: "Strong moral principles", hint: "The definition describes a solid ethical foundation." },
      { keyword: "honesty", matchTerms: ["honest", "decent", "upright", "honorable", "trustworth"], label: "Honesty and decency", hint: "These qualities are reliably present." },
    ],
    synonyms: ["integrity", "honesty", "uprightness", "rectitude", "virtue"],
    partOfSpeech: "noun",
  },
  {
    word: "profligate",
    definition: "Recklessly extravagant or wasteful; shamelessly immoral.",
    keyConcepts: [
      { keyword: "recklessly", matchTerms: ["reckless", "excess", "extravagan", "wasteful", "lavish"], label: "Recklessly wasteful", hint: "The definition describes spending without care." },
      { keyword: "immoral", matchTerms: ["immoral", "dissolut", "debauch", "corrupt", "degenerat"], label: "Shamelessly immoral", hint: "Moral restraints are abandoned." },
    ],
    synonyms: ["extravagant", "wasteful", "dissolute", "debauched", "decadent"],
    partOfSpeech: "adjective",
  },
  {
    word: "pugnacious",
    definition: "Eager or quick to argue, quarrel, or fight.",
    keyConcepts: [
      { keyword: "eager", matchTerms: ["eager", "ready", "willing", "inclin", "looking for"], label: "Eager to fight", hint: "The definition describes actively seeking conflict." },
      { keyword: "quarrel", matchTerms: ["quarrel", "argue", "fight", "combat", "conflict", "confrontat"], label: "To argue or fight", hint: "The inclination is toward verbal or physical combat." },
    ],
    synonyms: ["combative", "aggressive", "belligerent", "quarrelsome", "contentious"],
    partOfSpeech: "adjective",
  },
  {
    word: "quagmire",
    definition: "A soft boggy area of land; a complex or difficult situation.",
    keyConcepts: [
      { keyword: "boggy", matchTerms: ["bog", "marsh", "swamp", "mud", "mire", "soft"], label: "Boggy area", hint: "The definition describes soft, wet ground." },
      { keyword: "difficult", matchTerms: ["difficult", "complex", "predicament", "mess", "trap", "stuck"], label: "Difficult situation", hint: "Figuratively, a place where one gets stuck." },
    ],
    synonyms: ["swamp", "bog", "morass", "predicament", "mire"],
    partOfSpeech: "noun",
  },
  {
    word: "quiescent",
    definition: "In a state of quietness or inactivity; dormant.",
    keyConcepts: [
      { keyword: "quietness", matchTerms: ["quiet", "still", "calm", "peaceful", "tranquil"], label: "State of quietness", hint: "The definition describes absence of activity." },
      { keyword: "dormant", matchTerms: ["dormant", "inactive", "latent", "sleeping", "resting"], label: "Dormant state", hint: "Things are temporarily suspended, not ended." },
    ],
    synonyms: ["inactive", "dormant", "still", "latent", "passive"],
    partOfSpeech: "adjective",
  },
  {
    word: "quixotic",
    definition: "Extremely idealistic; unrealistic and impractical.",
    keyConcepts: [
      { keyword: "idealistic", matchTerms: ["idealist", "romantic", "vision", "dream", "utopian"], label: "Extremely idealistic", hint: "The definition describes lofty aspirations." },
      { keyword: "impractical", matchTerms: ["impractical", "unrealist", "foolish", "naive", "fanciful"], label: "Unrealistic and impractical", hint: "The ideals don't translate to reality." },
    ],
    synonyms: ["idealistic", "romantic", "visionary", "impractical", "unrealistic"],
    partOfSpeech: "adjective",
  },
  {
    word: "rancorous",
    definition: "Characterized by bitterness or resentment.",
    keyConcepts: [
      { keyword: "bitterness", matchTerms: ["bitter", "acrimon", "hostile", "harsh", "venomous"], label: "Characterized by bitterness", hint: "The definition describes a sour, hostile quality." },
      { keyword: "resentment", matchTerms: ["resent", "grudge", "malice", "spite", "ill will"], label: "Resentment", hint: "There's lingering anger about past wrongs." },
    ],
    synonyms: ["bitter", "resentful", "malicious", "spiteful", "acrimonious"],
    partOfSpeech: "adjective",
  },
  {
    word: "salient",
    definition: "Most noticeable or important; prominent.",
    keyConcepts: [
      { keyword: "noticeable", matchTerms: ["notic", "prominent", "conspicuous", "obvious", "striking"], label: "Most noticeable", hint: "The definition emphasizes standing out." },
      { keyword: "important", matchTerms: ["import", "significant", "key", "main", "chief", "principal"], label: "Most important", hint: "This is what matters most." },
    ],
    synonyms: ["prominent", "notable", "conspicuous", "striking", "important"],
    partOfSpeech: "adjective",
  },
  {
    word: "sardonic",
    definition: "Grimly mocking or cynical.",
    keyConcepts: [
      { keyword: "grimly", matchTerms: ["grim", "bitter", "dark", "harsh", "mordant"], label: "Grim quality", hint: "The definition adds a dark edge to the humor." },
      { keyword: "mocking", matchTerms: ["mock", "scorn", "deris", "sneer", "contempt", "sarcastic"], label: "Mocking or cynical", hint: "There's ridicule or disbelief in the tone." },
    ],
    synonyms: ["cynical", "mocking", "derisive", "scornful", "sneering"],
    partOfSpeech: "adjective",
  },
  {
    word: "sedulous",
    definition: "Showing dedication and diligence; persevering.",
    keyConcepts: [
      { keyword: "dedication", matchTerms: ["dedicat", "devot", "commit", "assiduous", "earnest"], label: "Showing dedication", hint: "The definition describes committed effort." },
      { keyword: "diligence", matchTerms: ["diligen", "industri", "hardwork", "thorough", "careful"], label: "Diligent effort", hint: "Work is done carefully and persistently." },
    ],
    synonyms: ["diligent", "assiduous", "industrious", "conscientious", "persevering"],
    partOfSpeech: "adjective",
  },
  {
    word: "serendipity",
    definition: "The occurrence of events by chance in a happy or beneficial way.",
    keyConcepts: [
      { keyword: "chance", matchTerms: ["chance", "accident", "coinciden", "luck", "fortuit", "unexpect"], label: "By chance", hint: "The definition emphasizes unplanned occurrence." },
      { keyword: "beneficial", matchTerms: ["benefic", "happy", "fortunate", "lucky", "positive"], label: "Happy or beneficial", hint: "The random event turns out well." },
    ],
    synonyms: ["luck", "fortune", "chance", "providence", "happenstance"],
    partOfSpeech: "noun",
  },
  {
    word: "solicitous",
    definition: "Showing interest or concern for someone's well-being.",
    keyConcepts: [
      { keyword: "interest", matchTerms: ["interest", "attentive", "concerned", "caring", "thoughtful"], label: "Shows interest", hint: "The definition describes active engagement." },
      { keyword: "well-being", matchTerms: ["well-being", "welfare", "comfort", "health", "happiness"], label: "For someone's well-being", hint: "The concern is for another's welfare." },
    ],
    synonyms: ["concerned", "attentive", "caring", "considerate", "anxious"],
    partOfSpeech: "adjective",
  },
  {
    word: "spurious",
    definition: "Not genuine; false or fake.",
    keyConcepts: [
      { keyword: "genuine", matchTerms: ["genuine", "authentic", "real", "true", "legitimate"], label: "Not genuine", hint: "The definition negates authenticity." },
      { keyword: "false", matchTerms: ["false", "fake", "counterfeit", "bogus", "fraudulent"], label: "False or fake", hint: "It pretends to be what it's not." },
    ],
    synonyms: ["false", "fake", "bogus", "counterfeit", "fraudulent"],
    partOfSpeech: "adjective",
  },
  {
    word: "subversive",
    definition: "Seeking to undermine or overthrow an established system or authority.",
    keyConcepts: [
      { keyword: "undermine", matchTerms: ["undermin", "destabil", "weaken", "sabotag", "erode"], label: "Seeks to undermine", hint: "The definition describes working against from within." },
      { keyword: "established", matchTerms: ["establish", "author", "system", "institution", "order"], label: "Established authority", hint: "The target is existing power structures." },
    ],
    synonyms: ["seditious", "revolutionary", "treasonous", "dissident", "insurgent"],
    partOfSpeech: "adjective",
  },
  {
    word: "supplicate",
    definition: "To ask or beg for something earnestly or humbly.",
    keyConcepts: [
      { keyword: "ask", matchTerms: ["ask", "beg", "plead", "entreat", "implore", "beseech"], label: "Ask or beg", hint: "The definition describes making a request." },
      { keyword: "humbly", matchTerms: ["humble", "earnest", "desperate", "submissive", "reverent"], label: "Earnestly or humbly", hint: "The asking comes from a position of need." },
    ],
    synonyms: ["beg", "plead", "entreat", "implore", "beseech"],
    partOfSpeech: "verb",
  },
  {
    word: "surreptitious",
    definition: "Kept secret, especially because it would not be approved of.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "hidden", "covert", "clandestine", "concealed"], label: "Kept secret", hint: "The definition describes deliberate concealment." },
      { keyword: "approved", matchTerms: ["approv", "sanction", "permit", "allow", "accept"], label: "Not approved of", hint: "Secrecy is needed because others would disapprove." },
    ],
    synonyms: ["secret", "stealthy", "clandestine", "covert", "furtive"],
    partOfSpeech: "adjective",
  },
  {
    word: "taciturn",
    definition: "Reserved or uncommunicative; saying little.",
    keyConcepts: [
      { keyword: "reserved", matchTerms: ["reserv", "quiet", "withdrawn", "reticent", "introverted"], label: "Reserved manner", hint: "The definition describes someone who holds back." },
      { keyword: "little", matchTerms: ["little", "few", "sparing", "minimal", "brief"], label: "Says little", hint: "Words are used sparingly." },
    ],
    synonyms: ["reticent", "uncommunicative", "quiet", "reserved", "silent"],
    partOfSpeech: "adjective",
  },
  {
    word: "truculent",
    definition: "Eager or quick to argue or fight; aggressively defiant.",
    keyConcepts: [
      { keyword: "eager", matchTerms: ["eager", "quick", "ready", "inclin", "prone"], label: "Eager to argue or fight", hint: "The definition describes a tendency toward conflict." },
      { keyword: "defiant", matchTerms: ["defiant", "aggressive", "belligerent", "hostile", "fierce"], label: "Aggressively defiant", hint: "There's combative resistance." },
    ],
    synonyms: ["aggressive", "belligerent", "pugnacious", "combative", "hostile"],
    partOfSpeech: "adjective",
  },
  {
    word: "vapid",
    definition: "Offering nothing stimulating or challenging; dull and uninspired.",
    keyConcepts: [
      { keyword: "nothing", matchTerms: ["nothing", "lack", "devoid", "empty", "without"], label: "Offers nothing stimulating", hint: "The definition describes absence of interest." },
      { keyword: "dull", matchTerms: ["dull", "bland", "boring", "flat", "lifeless", "insipid"], label: "Dull and uninspired", hint: "There's no spark or life to engage with." },
    ],
    synonyms: ["dull", "insipid", "bland", "flat", "lifeless"],
    partOfSpeech: "adjective",
  },
  {
    word: "vindictive",
    definition: "Having a strong desire for revenge; spiteful.",
    keyConcepts: [
      { keyword: "revenge", matchTerms: ["reveng", "retaliat", "vengeance", "payback", "retribut"], label: "Desire for revenge", hint: "The definition describes wanting to get back at someone." },
      { keyword: "spiteful", matchTerms: ["spite", "malicious", "bitter", "resentful", "mean"], label: "Spiteful nature", hint: "There's ill will driving the desire." },
    ],
    synonyms: ["vengeful", "spiteful", "resentful", "malicious", "revengeful"],
    partOfSpeech: "adjective",
  },
  {
    word: "vitriol",
    definition: "Cruel and bitter criticism.",
    keyConcepts: [
      { keyword: "cruel", matchTerms: ["cruel", "harsh", "savage", "vicious", "brutal"], label: "Cruel quality", hint: "The definition describes criticism that hurts." },
      { keyword: "bitter", matchTerms: ["bitter", "scathing", "caustic", "venomous", "acrimon"], label: "Bitter criticism", hint: "The tone is acidic and corrosive." },
    ],
    synonyms: ["venom", "spite", "malice", "bitterness", "acrimony"],
    partOfSpeech: "noun",
  },
  {
    word: "vociferous",
    definition: "Expressing opinions loudly and forcefully.",
    keyConcepts: [
      { keyword: "loudly", matchTerms: ["loud", "noisy", "clam", "volum", "strident"], label: "Expressed loudly", hint: "The definition emphasizes volume." },
      { keyword: "forcefully", matchTerms: ["forceful", "vigorous", "vehement", "emphatic", "insistent"], label: "Forcefully stated", hint: "The opinions come with conviction." },
    ],
    synonyms: ["loud", "clamorous", "outspoken", "strident", "vehement"],
    partOfSpeech: "adjective",
  },
  {
    word: "winnow",
    definition: "To remove unwanted elements from something; to separate the good from the bad.",
    keyConcepts: [
      { keyword: "remove", matchTerms: ["remov", "eliminat", "discard", "get rid", "weed"], label: "Remove unwanted", hint: "The definition describes taking away what's not needed." },
      { keyword: "separate", matchTerms: ["separat", "sort", "sift", "distinguish", "filter"], label: "Separate good from bad", hint: "The process involves making distinctions." },
    ],
    synonyms: ["sift", "separate", "filter", "sort", "cull"],
    partOfSpeech: "verb",
  },
  {
    word: "zeitgeist",
    definition: "The defining spirit or mood of a particular period of history.",
    keyConcepts: [
      { keyword: "spirit", matchTerms: ["spirit", "mood", "atmosphere", "feeling", "tenor"], label: "Defining spirit", hint: "The definition describes the intangible essence of an era." },
      { keyword: "period", matchTerms: ["period", "era", "time", "age", "epoch"], label: "Of a particular period", hint: "This relates to a specific historical moment." },
    ],
    synonyms: ["spirit of the age", "ethos", "mood", "atmosphere", "trend"],
    partOfSpeech: "noun",
  },
  {
    word: "anecdotal",
    definition: "Based on personal accounts rather than facts or research.",
    keyConcepts: [
      { keyword: "personal", matchTerms: ["personal", "individu", "subjective", "firsthand", "story"], label: "Based on personal accounts", hint: "The definition involves individual experiences." },
      { keyword: "facts", matchTerms: ["fact", "research", "evidence", "data", "proof", "scientific"], label: "Rather than facts", hint: "This contrasts with rigorous evidence." },
    ],
    synonyms: ["informal", "unreliable", "unscientific", "hearsay", "unverified"],
    partOfSpeech: "adjective",
  },
  {
    word: "assertive",
    definition: "Having or showing a confident and forceful personality.",
    keyConcepts: [
      { keyword: "confident", matchTerms: ["confiden", "self-assur", "bold", "assured", "certain"], label: "Confident personality", hint: "The definition describes self-assurance." },
      { keyword: "forceful", matchTerms: ["forceful", "strong", "decisive", "firm", "determined"], label: "Forceful manner", hint: "The confidence is expressed clearly." },
    ],
    synonyms: ["confident", "self-assured", "bold", "forceful", "decisive"],
    partOfSpeech: "adjective",
  },
  {
    word: "awkward",
    definition: "Causing difficulty or discomfort; lacking grace or ease.",
    keyConcepts: [
      { keyword: "difficulty", matchTerms: ["difficult", "uncomfort", "embarrass", "clumsy", "inconven"], label: "Causes difficulty", hint: "The definition describes creating problems." },
      { keyword: "grace", matchTerms: ["grace", "ease", "smooth", "comfort", "natural"], label: "Lacking grace", hint: "Movement or interaction isn't fluid." },
    ],
    synonyms: ["clumsy", "uncomfortable", "embarrassing", "ungainly", "difficult"],
    partOfSpeech: "adjective",
  },
  {
    word: "biased",
    definition: "Unfairly prejudiced for or against something.",
    keyConcepts: [
      { keyword: "unfairly", matchTerms: ["unfair", "unjust", "partial", "slanted", "skewed"], label: "Unfairly prejudiced", hint: "The definition describes lack of objectivity." },
      { keyword: "prejudiced", matchTerms: ["prejudic", "favor", "against", "one-sided", "partisan"], label: "For or against", hint: "The prejudice has a direction." },
    ],
    synonyms: ["prejudiced", "partial", "one-sided", "partisan", "slanted"],
    partOfSpeech: "adjective",
  },
  {
    word: "cabal",
    definition: "A secret political group or faction plotting against authority.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "covert", "hidden", "clandestine", "conspir"], label: "Secret group", hint: "The definition emphasizes secrecy." },
      { keyword: "plotting", matchTerms: ["plot", "schem", "conspir", "plan", "intrigue"], label: "Plotting against authority", hint: "The group works against established power." },
    ],
    synonyms: ["conspiracy", "faction", "clique", "junta", "coterie"],
    partOfSpeech: "noun",
  },
  {
    word: "charisma",
    definition: "Compelling attractiveness or charm that inspires devotion in others.",
    keyConcepts: [
      { keyword: "attractiveness", matchTerms: ["attract", "charm", "appeal", "magnet", "allur"], label: "Compelling attractiveness", hint: "The definition describes drawing people in." },
      { keyword: "inspires", matchTerms: ["inspir", "devotion", "follow", "loyal", "admiration"], label: "Inspires devotion", hint: "Others are moved to follow or admire." },
    ],
    synonyms: ["charm", "appeal", "magnetism", "allure", "presence"],
    partOfSpeech: "noun",
  },
  {
    word: "condescending",
    definition: "Having an attitude of patronizing superiority.",
    keyConcepts: [
      { keyword: "patronizing", matchTerms: ["patroniz", "talk down", "superior", "dismiss", "disdain"], label: "Patronizing attitude", hint: "The definition describes treating others as inferior." },
      { keyword: "superiority", matchTerms: ["superior", "arrogant", "haughty", "snobbish", "lofty"], label: "Sense of superiority", hint: "The person sees themselves as above others." },
    ],
    synonyms: ["patronizing", "supercilious", "disdainful", "superior", "snobbish"],
    partOfSpeech: "adjective",
  },
  {
    word: "constraint",
    definition: "A limitation or restriction on action or behavior.",
    keyConcepts: [
      { keyword: "limitation", matchTerms: ["limit", "restrict", "bound", "confin", "curb"], label: "A limitation", hint: "The definition describes something that restricts." },
      { keyword: "action", matchTerms: ["action", "behavior", "freedom", "movement", "choice"], label: "On action or behavior", hint: "What's limited is activity or conduct." },
    ],
    synonyms: ["restriction", "limitation", "restraint", "curb", "check"],
    partOfSpeech: "noun",
  },
  {
    word: "corrosive",
    definition: "Tending to cause damage gradually; destructive or harmful.",
    keyConcepts: [
      { keyword: "damage", matchTerms: ["damag", "destroy", "harm", "erode", "deteriorat"], label: "Causes damage", hint: "The definition describes harmful effects." },
      { keyword: "gradually", matchTerms: ["gradual", "slow", "over time", "progressive", "incremental"], label: "Gradually", hint: "The damage happens over time." },
    ],
    synonyms: ["destructive", "erosive", "damaging", "harmful", "caustic"],
    partOfSpeech: "adjective",
  },
  {
    word: "deliberate",
    definition: "Done consciously and intentionally; carefully considered.",
    keyConcepts: [
      { keyword: "consciously", matchTerms: ["conscious", "intentional", "purposeful", "willful", "planned"], label: "Done consciously", hint: "The definition describes awareness in action." },
      { keyword: "considered", matchTerms: ["consider", "thought", "careful", "measured", "calculated"], label: "Carefully considered", hint: "Action is taken after reflection." },
    ],
    synonyms: ["intentional", "planned", "calculated", "conscious", "purposeful"],
    partOfSpeech: "adjective",
  },
  {
    word: "delusional",
    definition: "Characterized by or holding false beliefs despite evidence to the contrary.",
    keyConcepts: [
      { keyword: "false", matchTerms: ["false", "untrue", "wrong", "mistaken", "erroneous"], label: "False beliefs", hint: "The definition describes beliefs that aren't true." },
      { keyword: "evidence", matchTerms: ["evidence", "proof", "fact", "reality", "contradict"], label: "Despite evidence", hint: "The beliefs persist despite contrary proof." },
    ],
    synonyms: ["deluded", "mistaken", "irrational", "unrealistic", "self-deceiving"],
    partOfSpeech: "adjective",
  },
  {
    word: "derivative",
    definition: "Imitative of the work of another; not original.",
    keyConcepts: [
      { keyword: "imitative", matchTerms: ["imitat", "copy", "borrowed", "unoriginal", "second-hand"], label: "Imitative of another", hint: "The definition describes copying from elsewhere." },
      { keyword: "original", matchTerms: ["original", "new", "fresh", "innovative", "creative"], label: "Not original", hint: "Originality is absent." },
    ],
    synonyms: ["unoriginal", "imitative", "copied", "secondary", "borrowed"],
    partOfSpeech: "adjective",
  },
  {
    word: "disillusioned",
    definition: "Disappointed in someone or something that one previously admired.",
    keyConcepts: [
      { keyword: "disappointed", matchTerms: ["disappoint", "let down", "disenchant", "disaffect", "bitter"], label: "Disappointed", hint: "The definition describes unfulfilled expectations." },
      { keyword: "previously", matchTerms: ["previous", "former", "once", "used to", "past"], label: "Previously admired", hint: "Admiration existed before but is now gone." },
    ],
    synonyms: ["disenchanted", "disappointed", "disillusioned", "cynical", "let down"],
    partOfSpeech: "adjective",
  },
  {
    word: "dissolve",
    definition: "To cause to disappear or come to an end; to break up.",
    keyConcepts: [
      { keyword: "disappear", matchTerms: ["disappear", "vanish", "melt", "fade", "dissipat"], label: "Cause to disappear", hint: "The definition describes elimination." },
      { keyword: "end", matchTerms: ["end", "terminat", "finish", "conclude", "break up"], label: "Come to an end", hint: "Something ceases to exist." },
    ],
    synonyms: ["melt", "disintegrate", "disperse", "end", "terminate"],
    partOfSpeech: "verb",
  },
  {
    word: "empathetic",
    definition: "Showing the ability to understand and share the feelings of another.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "comprehend", "grasp", "appreciat", "recogniz"], label: "Understand feelings", hint: "The definition involves grasping others' emotions." },
      { keyword: "share", matchTerms: ["share", "feel", "connect", "relat", "identify"], label: "Share feelings", hint: "There's emotional connection, not just understanding." },
    ],
    synonyms: ["understanding", "compassionate", "sympathetic", "sensitive", "perceptive"],
    partOfSpeech: "adjective",
  },
  {
    word: "erroneous",
    definition: "Wrong; incorrect or based on mistaken information.",
    keyConcepts: [
      { keyword: "wrong", matchTerms: ["wrong", "incorrect", "false", "inaccurat", "untrue"], label: "Wrong", hint: "The definition describes something that's not right." },
      { keyword: "mistaken", matchTerms: ["mistak", "error", "fault", "flaw", "defect"], label: "Based on mistakes", hint: "The foundation is faulty information." },
    ],
    synonyms: ["incorrect", "wrong", "false", "inaccurate", "mistaken"],
    partOfSpeech: "adjective",
  },
  {
    word: "exaggerate",
    definition: "To represent something as being larger or more extreme than it is.",
    keyConcepts: [
      { keyword: "represent", matchTerms: ["represent", "portray", "describ", "depict", "present"], label: "Represent something", hint: "The definition involves describing." },
      { keyword: "larger", matchTerms: ["larger", "more", "bigger", "greater", "extreme", "overstat"], label: "Larger than it is", hint: "The representation exceeds reality." },
    ],
    synonyms: ["overstate", "embellish", "amplify", "magnify", "inflate"],
    partOfSpeech: "verb",
  },
  {
    word: "existential",
    definition: "Relating to existence, especially human existence and its meaning.",
    keyConcepts: [
      { keyword: "existence", matchTerms: ["exist", "being", "life", "reality", "living"], label: "Relating to existence", hint: "The definition concerns fundamental being." },
      { keyword: "meaning", matchTerms: ["meaning", "purpose", "significance", "nature", "essence"], label: "Human existence and meaning", hint: "Questions about why and how we exist." },
    ],
    synonyms: ["philosophical", "fundamental", "metaphysical", "ontological"],
    partOfSpeech: "adjective",
  },
  {
    word: "explicit",
    definition: "Stated clearly and in detail, leaving no room for confusion.",
    keyConcepts: [
      { keyword: "clearly", matchTerms: ["clear", "plain", "definite", "direct", "straightforward"], label: "Stated clearly", hint: "The definition emphasizes clarity." },
      { keyword: "confusion", matchTerms: ["confusion", "doubt", "ambiguity", "misunderstand", "uncertain"], label: "No confusion", hint: "The meaning is unmistakable." },
    ],
    synonyms: ["clear", "unambiguous", "definite", "precise", "express"],
    partOfSpeech: "adjective",
  },
  {
    word: "gaslighting",
    definition: "Manipulating someone into questioning their own reality or sanity.",
    keyConcepts: [
      { keyword: "manipulating", matchTerms: ["manipulat", "deceiv", "trick", "control", "exploit"], label: "Manipulating someone", hint: "The definition involves psychological control." },
      { keyword: "questioning", matchTerms: ["question", "doubt", "sanity", "reality", "perception"], label: "Question their reality", hint: "The victim doubts their own perceptions." },
    ],
    synonyms: ["manipulating", "deceiving", "psychologically abusing", "brainwashing"],
    partOfSpeech: "noun",
  },
  {
    word: "implicit",
    definition: "Implied though not plainly expressed; understood though not stated.",
    keyConcepts: [
      { keyword: "implied", matchTerms: ["impl", "suggest", "hint", "infer", "tacit"], label: "Implied", hint: "The definition describes indirect communication." },
      { keyword: "expressed", matchTerms: ["express", "stat", "said", "spoken", "explicit"], label: "Not plainly expressed", hint: "The meaning isn't directly stated." },
    ],
    synonyms: ["implied", "tacit", "understood", "unspoken", "inferred"],
    partOfSpeech: "adjective",
  },
  {
    word: "manipulative",
    definition: "Exercising unscrupulous control or influence over others.",
    keyConcepts: [
      { keyword: "unscrupulous", matchTerms: ["unscrupul", "devious", "cunning", "scheming", "deceit"], label: "Unscrupulous control", hint: "The definition describes dishonest influence." },
      { keyword: "control", matchTerms: ["control", "influence", "exploit", "use", "manage"], label: "Control over others", hint: "Others are being directed unfairly." },
    ],
    synonyms: ["scheming", "calculating", "devious", "cunning", "crafty"],
    partOfSpeech: "adjective",
  },
  {
    word: "patronizing",
    definition: "Treating with an apparent kindness that betrays condescension.",
    keyConcepts: [
      { keyword: "kindness", matchTerms: ["kind", "friendly", "helpful", "benevolent", "gracious"], label: "Apparent kindness", hint: "The definition describes a surface positivity." },
      { keyword: "condescension", matchTerms: ["condescend", "superior", "talk down", "demean", "belittl"], label: "Betrays condescension", hint: "Underlying attitude is one of superiority." },
    ],
    synonyms: ["condescending", "superior", "disdainful", "supercilious", "snobbish"],
    partOfSpeech: "adjective",
  },
  {
    word: "pretentious",
    definition: "Attempting to impress by affecting greater importance or merit than actually possessed.",
    keyConcepts: [
      { keyword: "impress", matchTerms: ["impress", "show off", "flaunt", "display", "exhibit"], label: "Attempting to impress", hint: "The definition describes trying to look good." },
      { keyword: "greater", matchTerms: ["greater", "more", "exaggerat", "inflat", "overstat"], label: "Greater than possessed", hint: "The claims exceed reality." },
    ],
    synonyms: ["affected", "ostentatious", "pompous", "showy", "grandiose"],
    partOfSpeech: "adjective",
  },
  {
    word: "proportionate",
    definition: "Corresponding in size or amount to something else.",
    keyConcepts: [
      { keyword: "corresponding", matchTerms: ["correspond", "match", "fit", "suit", "align"], label: "Corresponding", hint: "The definition describes appropriate relationship." },
      { keyword: "size", matchTerms: ["size", "amount", "degree", "extent", "scale"], label: "In size or amount", hint: "The relationship is about quantity." },
    ],
    synonyms: ["commensurate", "corresponding", "relative", "balanced", "appropriate"],
    partOfSpeech: "adjective",
  },
  {
    word: "provocative",
    definition: "Causing annoyance, anger, or another strong reaction, especially deliberately.",
    keyConcepts: [
      { keyword: "causing", matchTerms: ["caus", "produc", "elicit", "trigger", "provok"], label: "Causing reaction", hint: "The definition describes prompting a response." },
      { keyword: "strong", matchTerms: ["strong", "intense", "anger", "annoy", "outrage"], label: "Strong reaction", hint: "The response is emotional or intense." },
    ],
    synonyms: ["inflammatory", "incendiary", "controversial", "stimulating", "challenging"],
    partOfSpeech: "adjective",
  },
  {
    word: "reductive",
    definition: "Presenting a complex topic or problem in an oversimplified way.",
    keyConcepts: [
      { keyword: "complex", matchTerms: ["complex", "complic", "nuanced", "intricate", "detailed"], label: "Complex topic", hint: "The definition involves something multifaceted." },
      { keyword: "oversimplified", matchTerms: ["oversimplif", "simplistic", "narrow", "shallow", "basic"], label: "Oversimplified", hint: "Important complexity is lost." },
    ],
    synonyms: ["simplistic", "oversimplified", "narrow", "limiting", "diminishing"],
    partOfSpeech: "adjective",
  },
  {
    word: "resentment",
    definition: "Bitter indignation at having been treated unfairly.",
    keyConcepts: [
      { keyword: "bitter", matchTerms: ["bitter", "angry", "hostile", "grudge", "animosity"], label: "Bitter feeling", hint: "The definition describes a negative emotion." },
      { keyword: "unfairly", matchTerms: ["unfair", "unjust", "wrong", "mistreat", "aggriev"], label: "Treated unfairly", hint: "The feeling stems from perceived injustice." },
    ],
    synonyms: ["bitterness", "indignation", "animosity", "grudge", "displeasure"],
    partOfSpeech: "noun",
  },
  {
    word: "scapegoat",
    definition: "A person who is blamed for the wrongdoings of others.",
    keyConcepts: [
      { keyword: "blamed", matchTerms: ["blam", "fault", "accus", "hold responsible", "target"], label: "Blamed", hint: "The definition involves assigning fault." },
      { keyword: "others", matchTerms: ["other", "someone else", "another", "different", "elsewhere"], label: "For others' wrongdoings", hint: "The real culprits escape blame." },
    ],
    synonyms: ["whipping boy", "fall guy", "victim", "target", "patsy"],
    partOfSpeech: "noun",
  },
  {
    word: "discerning",
    definition: "Having or showing good judgment and keen perception.",
    keyConcepts: [
      { keyword: "good judgment", matchTerms: ["judgment", "judgement", "wise", "shrewd", "astute", "discriminat"], label: "Good judgment", hint: "The definition describes quality decision-making." },
      { keyword: "keen perception", matchTerms: ["percept", "insight", "aware", "observ", "sharp", "acute", "penetrat"], label: "Keen perception", hint: "The definition describes sharp awareness." },
    ],
    synonyms: ["perceptive", "astute", "shrewd", "judicious", "discriminating"],
    partOfSpeech: "adjective",
  },
  {
    word: "discombobulated",
    definition: "Confused and disconcerted; thrown into disorder.",
    keyConcepts: [
      { keyword: "confused", matchTerms: ["confus", "bewild", "perplex", "baffl", "fluster", "muddl"], label: "Confused", hint: "The definition describes mental confusion." },
      { keyword: "disconcerted", matchTerms: ["disconcert", "unsettle", "disturb", "discompos", "rattl", "thrown off"], label: "Disconcerted", hint: "The definition describes being unsettled." },
    ],
    synonyms: ["confused", "flustered", "bewildered", "disoriented", "rattled"],
    partOfSpeech: "adjective",
  },
  {
    word: "vexed",
    definition: "Annoyed, frustrated, or worried; also, a problem that is difficult and much debated.",
    keyConcepts: [
      { keyword: "annoyed", matchTerms: ["annoy", "irritat", "frustrat", "bother", "irk", "exasperat"], label: "Annoyed or frustrated", hint: "The definition describes irritation." },
      { keyword: "difficult problem", matchTerms: ["difficult", "problem", "troubl", "debat", "complex", "contentious"], label: "Difficult problem", hint: "A vexed question is one that's hard to resolve." },
    ],
    synonyms: ["annoyed", "irritated", "frustrated", "troubled", "agitated"],
    partOfSpeech: "adjective",
  },
  {
    word: "sycophant",
    definition: "A person who acts obsequiously toward someone important to gain advantage.",
    keyConcepts: [
      { keyword: "obsequious", matchTerms: ["flatter", "fawn", "grovel", "servil", "obsequi", "insincer"], label: "Flattering behavior", hint: "The definition describes excessive flattery." },
      { keyword: "gain advantage", matchTerms: ["advantage", "gain", "favor", "benefit", "self-interest", "manipul"], label: "For personal gain", hint: "The behavior has a self-serving motive." },
    ],
    synonyms: ["flatterer", "toady", "yes-man", "bootlicker", "brown-noser"],
    partOfSpeech: "noun",
  },
  {
    word: "cacophony",
    definition: "A harsh, discordant mixture of sounds.",
    keyConcepts: [
      { keyword: "harsh", matchTerms: ["harsh", "jarr", "grat", "unpleas", "discord", "clashing"], label: "Harsh sounds", hint: "The sounds are unpleasant." },
      { keyword: "mixture of sounds", matchTerms: ["mix", "noise", "sound", "din", "racket", "clamor"], label: "Mixture of sounds", hint: "Multiple sounds combine." },
    ],
    synonyms: ["din", "racket", "discord", "dissonance", "clamor"],
    partOfSpeech: "noun",
  },
  {
    word: "superfluous",
    definition: "Unnecessary; more than what is needed or wanted.",
    keyConcepts: [
      { keyword: "unnecessary", matchTerms: ["unnecess", "unneeded", "needless", "redundan", "pointless"], label: "Unnecessary", hint: "It's not required." },
      { keyword: "excess", matchTerms: ["excess", "extra", "surplus", "more than", "too much", "spare"], label: "More than needed", hint: "There's more than enough." },
    ],
    synonyms: ["unnecessary", "redundant", "excess", "surplus", "needless"],
    partOfSpeech: "adjective",
  },
  {
    word: "vicarious",
    definition: "Experienced through imaginative participation in another person's experience.",
    keyConcepts: [
      { keyword: "through another", matchTerms: ["another", "other", "someone else", "secondhand", "indirect"], label: "Through another person", hint: "The experience is not your own." },
      { keyword: "imaginative participation", matchTerms: ["imagin", "experienc", "feel", "liv", "empathi", "participat"], label: "Imaginative experience", hint: "You mentally participate in their experience." },
    ],
    synonyms: ["indirect", "secondhand", "surrogate", "empathetic", "substituted"],
    partOfSpeech: "adjective",
  },
  {
    word: "consummate",
    definition: "Showing great skill and flair; complete or perfect.",
    keyConcepts: [
      { keyword: "great skill", matchTerms: ["skill", "expert", "master", "accomplish", "polished", "virtuos"], label: "Great skill", hint: "Done with expertise." },
      { keyword: "perfect", matchTerms: ["perfect", "complete", "supreme", "ultimate", "ideal", "flawless"], label: "Complete or perfect", hint: "The highest degree." },
    ],
    synonyms: ["perfect", "complete", "accomplished", "supreme", "masterful"],
    partOfSpeech: "adjective",
  },
  {
    word: "compound",
    definition: "A thing composed of two or more separate elements; a mixture.",
    keyConcepts: [
      { keyword: "two or more elements", matchTerms: ["element", "part", "compon", "ingredi", "constitu", "combin"], label: "Multiple elements", hint: "Made of separate parts." },
      { keyword: "mixture", matchTerms: ["mix", "blend", "combin", "fusion", "amalgam", "composit"], label: "A mixture", hint: "Things joined together." },
    ],
    synonyms: ["mixture", "combination", "blend", "composite", "amalgam"],
    partOfSpeech: "noun",
  },
  {
    word: "duplicate",
    definition: "An exact copy of something.",
    keyConcepts: [
      { keyword: "exact copy", matchTerms: ["copy", "replica", "reproduct", "clone", "double", "match"], label: "Exact copy", hint: "Identical to the original." },
      { keyword: "of something", matchTerms: ["identic", "same", "twin", "facsimile", "mirror"], label: "Of the original", hint: "A second version." },
    ],
    synonyms: ["copy", "replica", "clone", "double", "reproduction"],
    partOfSpeech: "noun",
  },
  {
    word: "compendium",
    definition: "A collection of concise but detailed information about a particular subject.",
    keyConcepts: [
      { keyword: "collection", matchTerms: ["collect", "compil", "gather", "assembl", "antholog", "digest", "summary", "handbook", "reference"], label: "A collection", hint: "The definition says 'a collection' -- multiple things gathered together." },
      { keyword: "concise but detailed", matchTerms: ["concis", "brief", "succinct", "detail", "comprehensiv", "thorough", "condensed", "summary"], label: "Concise but detailed", hint: "The definition says 'concise but detailed information' -- brief yet thorough." },
    ],
    synonyms: ["collection", "compilation", "anthology", "digest", "handbook"],
    partOfSpeech: "noun",
  },
  {
    word: "apoplectic",
    definition: "Overcome with extreme anger; furious to the point of being unable to speak coherently.",
    keyConcepts: [
      { keyword: "extreme anger", matchTerms: ["anger", "angry", "rage", "raging", "furious", "fury", "livid", "incensed", "enrag", "irate", "wrathful"], label: "Extreme anger", hint: "The definition says 'overcome with extreme anger' -- intensely mad." },
      { keyword: "unable to speak", matchTerms: ["speak", "speech", "coherent", "sputter", "incoherent", "beside oneself", "speechless", "lost for words", "overwhelm"], label: "Unable to speak coherently", hint: "The definition says 'unable to speak coherently' -- so angry they can't function properly." },
    ],
    synonyms: ["furious", "enraged", "livid", "incensed", "wrathful"],
    partOfSpeech: "adjective",
  },
  {
    word: "consensual",
    definition: "Relating to or involving consent, especially mutual consent by all parties involved.",
    keyConcepts: [
      { keyword: "involving consent", matchTerms: ["consent", "agree", "agreement", "approv", "permission", "willing", "voluntary"], label: "Involving consent", hint: "The definition says 'involving consent' -- agreement is required." },
      { keyword: "mutual", matchTerms: ["mutual", "shared", "joint", "reciprocal", "both parties", "all parties", "bilateral", "together"], label: "Mutual consent by all", hint: "The definition says 'mutual consent by all parties involved' -- everyone agrees." },
    ],
    synonyms: ["agreed", "mutual", "voluntary", "willing"],
    partOfSpeech: "adjective",
  },
  {
    word: "opportunistic",
    definition: "Exploiting chances or circumstances for personal gain, often without regard for principles.",
    keyConcepts: [
      { keyword: "exploiting chances", matchTerms: ["exploit", "opportun", "chance", "circumstance", "advantage", "capitalize", "seize", "grab", "take advantage"], label: "Exploiting chances", hint: "The definition says 'exploiting chances or circumstances' -- taking advantage of situations." },
      { keyword: "without principles", matchTerms: ["principle", "ethics", "moral", "unscrupulous", "selfish", "self-interest", "personal gain", "expedient", "pragmatic"], label: "Without regard for principles", hint: "The definition says 'often without regard for principles' -- willing to compromise values." },
    ],
    synonyms: ["exploitative", "calculating", "self-serving", "pragmatic", "expedient"],
    partOfSpeech: "adjective",
  },
  {
    word: "suffrage",
    definition: "The right to vote in political elections.",
    keyConcepts: [
      { keyword: "right to vote", matchTerms: ["right", "vote", "voting", "ballot", "franchise", "elector", "enfranchis"], label: "The right to vote", hint: "The definition says 'the right to vote' -- having the ability to cast a ballot." },
      { keyword: "political elections", matchTerms: ["politic", "election", "democrat", "civic", "citizen", "government"], label: "In political elections", hint: "The definition says 'in political elections' -- participating in choosing leaders." },
    ],
    synonyms: ["franchise", "voting rights", "ballot"],
    partOfSpeech: "noun",
  },
  {
    word: "addendum",
    definition: "An item of additional material added at the end of a book or document.",
    keyConcepts: [
      { keyword: "additional material", matchTerms: ["addition", "extra", "supplement", "append", "attachment", "annex", "rider", "postscript"], label: "Additional material", hint: "The definition says 'additional material' -- something extra added on." },
      { keyword: "at the end", matchTerms: ["end", "after", "following", "conclud", "final", "back", "appended", "attached"], label: "Added at the end", hint: "The definition says 'added at the end of a book or document' -- comes after the main content." },
    ],
    synonyms: ["supplement", "appendix", "addition", "postscript", "attachment"],
    partOfSpeech: "noun",
  },
  {
    word: "omnipotent",
    definition: "Having unlimited or universal power; able to do anything.",
    keyConcepts: [
      { keyword: "unlimited power", matchTerms: ["unlimit", "infinite", "boundless", "power", "powerful", "supreme", "absolute", "total", "complete"], label: "Unlimited power", hint: "The definition says 'unlimited or universal power' -- no restrictions on ability." },
      { keyword: "able to do anything", matchTerms: ["anything", "everything", "all-powerful", "almighty", "godlike", "divine", "capable", "invincible"], label: "Able to do anything", hint: "The definition says 'able to do anything' -- no limits on what can be accomplished." },
    ],
    synonyms: ["all-powerful", "almighty", "supreme", "invincible"],
    partOfSpeech: "adjective",
  },
  {
    word: "agnostic",
    definition: "A person who believes that the existence of God is unknown or unknowable; holding no strong opinion.",
    keyConcepts: [
      { keyword: "existence unknown", matchTerms: ["unknown", "unknow", "uncertain", "unsure", "doubt", "question", "existence", "god", "divine", "spiritual"], label: "Existence is unknown", hint: "The definition says 'the existence of God is unknown or unknowable' -- cannot be proven." },
      { keyword: "no strong opinion", matchTerms: ["no opinion", "neutral", "undecid", "noncommit", "open-minded", "neither", "impartial", "fence"], label: "No strong opinion", hint: "The definition says 'holding no strong opinion' -- not taking a definite stance." },
    ],
    synonyms: ["doubter", "skeptic", "nonbeliever", "freethinker"],
    partOfSpeech: "noun",
  },
  {
    word: "capitulate",
    definition: "To cease to resist an opponent or demand; to surrender.",
    keyConcepts: [
      { keyword: "cease to resist", matchTerms: ["cease", "stop", "resist", "give up", "give in", "yield", "relent", "concede", "back down"], label: "Cease to resist", hint: "The definition says 'cease to resist' -- stopping the fight." },
      { keyword: "surrender", matchTerms: ["surrender", "submit", "capitulat", "defeat", "accept", "acquiesce", "cave", "buckle", "fold"], label: "Surrender", hint: "The definition says 'surrender' -- accepting defeat." },
    ],
    synonyms: ["surrender", "yield", "submit", "concede", "give in"],
    partOfSpeech: "verb",
  },
  {
    word: "derelict",
    definition: "In a very poor condition as a result of disuse and neglect; a person without a home or job.",
    keyConcepts: [
      { keyword: "poor condition", matchTerms: ["poor", "bad", "dilapidat", "decay", "run-down", "crumbl", "ruined", "deteriorat", "abandoned", "decrepit"], label: "Poor condition from neglect", hint: "The definition says 'very poor condition as a result of disuse and neglect' -- falling apart." },
      { keyword: "homeless person", matchTerms: ["homeless", "vagrant", "tramp", "drifter", "outcast", "beggar", "down-and-out", "unemployed", "jobless"], label: "Person without home or job", hint: "The definition also means 'a person without a home or job' -- someone marginalized." },
    ],
    synonyms: ["abandoned", "dilapidated", "neglected", "vagrant", "homeless"],
    partOfSpeech: "adjective/noun",
  },
  {
    word: "dereliction",
    definition: "The shameful failure to fulfill one's obligations; the state of being abandoned and neglected.",
    keyConcepts: [
      { keyword: "failure of duty", matchTerms: ["fail", "failure", "duty", "obligation", "responsib", "neglect", "negligent", "shirk", "derelict"], label: "Failure to fulfill obligations", hint: "The definition says 'shameful failure to fulfill one's obligations' -- not doing what you should." },
      { keyword: "abandoned state", matchTerms: ["abandon", "neglect", "disuse", "decay", "ruin", "disrepair", "deteriorat"], label: "State of being abandoned", hint: "The definition also means 'state of being abandoned and neglected' -- left to fall apart." },
    ],
    synonyms: ["neglect", "negligence", "abandonment", "failure"],
    partOfSpeech: "noun",
  },
  {
    word: "amnesty",
    definition: "An official pardon for people who have committed political offenses; forgiveness granted by authority.",
    keyConcepts: [
      { keyword: "official pardon", matchTerms: ["official", "pardon", "forgive", "forgiveness", "absolv", "exonerat", "clemency", "mercy", "reprieve"], label: "Official pardon", hint: "The definition says 'official pardon' -- formal forgiveness from authority." },
      { keyword: "political offenses", matchTerms: ["politic", "offense", "crime", "criminal", "prisoner", "rebel", "dissident", "protest", "illegal", "conviction"], label: "For political offenses", hint: "The definition says 'for people who have committed political offenses' -- often dissidents or rebels." },
    ],
    synonyms: ["pardon", "forgiveness", "clemency", "reprieve", "absolution"],
    partOfSpeech: "noun",
  },
  {
    word: "bespoke",
    definition: "Made to order according to the buyer's specifications; custom-made.",
    keyConcepts: [
      { keyword: "made to order", matchTerms: ["made to order", "order", "custom", "tailor", "commission", "personalis", "individual", "specific"], label: "Made to order", hint: "The definition says 'made to order' -- created specifically for someone." },
      { keyword: "buyer's specifications", matchTerms: ["specification", "requirement", "request", "buyer", "customer", "client", "unique", "one-of-a-kind", "handmade", "crafted"], label: "According to specifications", hint: "The definition says 'according to the buyer's specifications' -- customized to exact needs." },
    ],
    synonyms: ["custom-made", "tailored", "made-to-order", "personalized"],
    partOfSpeech: "adjective",
  },
  {
    word: "correlate",
    definition: "To have a mutual relationship or connection; to establish a relationship between two things.",
    keyConcepts: [
      { keyword: "mutual relationship", matchTerms: ["mutual", "relationship", "relation", "connect", "connection", "link", "associat", "correspond", "parallel"], label: "Mutual relationship", hint: "The definition says 'have a mutual relationship or connection' -- things are linked together." },
      { keyword: "establish connection", matchTerms: ["establish", "show", "demonstrat", "prove", "find", "identify", "determine", "relate", "tie", "match"], label: "Establish a relationship", hint: "The definition says 'establish a relationship between two things' -- showing how they connect." },
    ],
    synonyms: ["connect", "associate", "link", "relate", "correspond"],
    partOfSpeech: "verb",
  },
  {
    word: "contract",
    definition: "To decrease in size, number, or range; to catch or develop a disease.",
    keyConcepts: [
      { keyword: "decrease in size", matchTerms: ["decrease", "shrink", "reduce", "smaller", "tighten", "constrict", "compress", "narrow", "lessen"], label: "Decrease in size", hint: "The definition says 'decrease in size, number, or range' -- getting smaller." },
      { keyword: "catch disease", matchTerms: ["catch", "develop", "disease", "illness", "infect", "acquire", "get", "come down with", "sick"], label: "Catch a disease", hint: "The definition also says 'catch or develop a disease' -- becoming ill." },
    ],
    synonyms: ["shrink", "reduce", "catch", "acquire"],
    partOfSpeech: "verb",
  },
  {
    word: "defunct",
    definition: "No longer existing or functioning; dead or extinct.",
    keyConcepts: [
      { keyword: "no longer existing", matchTerms: ["no longer", "not exist", "gone", "ceased", "ended", "finished", "terminated", "dissolved", "closed"], label: "No longer existing", hint: "The definition says 'no longer existing or functioning' -- it's over." },
      { keyword: "dead or extinct", matchTerms: ["dead", "extinct", "obsolete", "expired", "inactive", "inoperative", "kaput", "finished"], label: "Dead or extinct", hint: "The definition says 'dead or extinct' -- completely finished." },
    ],
    synonyms: ["extinct", "dead", "obsolete", "inactive", "inoperative"],
    partOfSpeech: "adjective",
  },
  {
    word: "episodic",
    definition: "Occurring occasionally and at irregular intervals; consisting of separate episodes.",
    keyConcepts: [
      { keyword: "occasionally", matchTerms: ["occasion", "irregular", "intermittent", "sporadic", "periodic", "infrequent", "scattered", "random"], label: "Occasionally", hint: "The definition says 'occurring occasionally and at irregular intervals' -- not constant." },
      { keyword: "separate episodes", matchTerms: ["episode", "separate", "distinct", "part", "segment", "installment", "chapter", "scene", "serial"], label: "Separate episodes", hint: "The definition says 'consisting of separate episodes' -- divided into parts." },
    ],
    synonyms: ["sporadic", "intermittent", "occasional", "irregular"],
    partOfSpeech: "adjective",
  },
  {
    word: "affluent",
    definition: "Having a great deal of money; wealthy and prosperous.",
    keyConcepts: [
      { keyword: "great deal of money", matchTerms: ["money", "rich", "wealth", "fortune", "prosper", "well-off", "well-to-do", "moneyed", "loaded"], label: "Having money", hint: "The definition says 'having a great deal of money' -- financially well-off." },
      { keyword: "wealthy", matchTerms: ["wealthy", "prosper", "opulent", "luxur", "comfortable", "privileged", "successful", "thriving"], label: "Wealthy and prosperous", hint: "The definition says 'wealthy and prosperous' -- living comfortably." },
    ],
    synonyms: ["wealthy", "rich", "prosperous", "well-off", "opulent"],
    partOfSpeech: "adjective",
  },
  {
    word: "perturb",
    definition: "To make someone anxious or unsettled; to disturb the normal state of something.",
    keyConcepts: [
      { keyword: "make anxious", matchTerms: ["anxious", "anxiety", "worried", "unsettle", "agitat", "distress", "trouble", "bother", "concern", "alarm"], label: "Make anxious", hint: "The definition says 'make someone anxious or unsettled' -- causing worry." },
      { keyword: "disturb normal", matchTerms: ["disturb", "disrupt", "upset", "unbalance", "throw off", "destabiliz", "disorder", "affect", "alter"], label: "Disturb normal state", hint: "The definition says 'disturb the normal state' -- disrupting equilibrium." },
    ],
    synonyms: ["disturb", "unsettle", "agitate", "worry", "disquiet"],
    partOfSpeech: "verb",
  },
  {
    word: "excruciating",
    definition: "Intensely painful; causing great physical or mental suffering.",
    keyConcepts: [
      { keyword: "intensely painful", matchTerms: ["intense", "painful", "pain", "agony", "agoniz", "tortur", "unbearable", "severe", "extreme", "acute"], label: "Intensely painful", hint: "The definition says 'intensely painful' -- extreme pain." },
      { keyword: "great suffering", matchTerms: ["suffer", "torment", "distress", "misery", "anguish", "harrowing", "grueling", "terrible", "awful"], label: "Great suffering", hint: "The definition says 'causing great physical or mental suffering' -- deeply agonizing." },
    ],
    synonyms: ["agonizing", "painful", "unbearable", "torturous", "harrowing"],
    partOfSpeech: "adjective",
  },
  {
    word: "stupendous",
    definition: "Extremely impressive; amazingly large, excellent, or great.",
    keyConcepts: [
      { keyword: "extremely impressive", matchTerms: ["impressive", "amazing", "astonish", "astound", "stagger", "remarkable", "extraordinar", "phenomenal", "incredible"], label: "Extremely impressive", hint: "The definition says 'extremely impressive' -- causing amazement." },
      { keyword: "amazingly large", matchTerms: ["large", "huge", "enormous", "massive", "great", "vast", "tremendous", "immense", "colossal", "excellent"], label: "Amazingly large or great", hint: "The definition says 'amazingly large, excellent, or great' -- exceptional in scale or quality." },
    ],
    synonyms: ["amazing", "tremendous", "remarkable", "extraordinary", "phenomenal"],
    partOfSpeech: "adjective",
  },
  {
    word: "fissure",
    definition: "A long, narrow opening or crack, especially in rock or the earth's surface.",
    keyConcepts: [
      { keyword: "narrow opening", matchTerms: ["narrow", "opening", "crack", "split", "gap", "crevice", "cleft", "breach", "rift", "fracture"], label: "Narrow opening", hint: "The definition says 'a long, narrow opening or crack' -- a thin gap." },
      { keyword: "in rock or earth", matchTerms: ["rock", "earth", "ground", "surface", "geological", "fault", "rupture", "break"], label: "In rock or earth", hint: "The definition says 'especially in rock or the earth's surface' -- geological context." },
    ],
    synonyms: ["crack", "crevice", "split", "rift", "fracture"],
    partOfSpeech: "noun",
  },
  {
    word: "despot",
    definition: "A ruler or other person who holds absolute power, typically exercising it cruelly.",
    keyConcepts: [
      { keyword: "absolute power", matchTerms: ["absolute", "power", "authority", "control", "ruler", "dictator", "tyrant", "autocrat", "sovereign"], label: "Absolute power", hint: "The definition says 'holds absolute power' -- complete authority." },
      { keyword: "exercised cruelly", matchTerms: ["cruel", "tyrann", "oppress", "harsh", "brutal", "authoritarian", "domineering", "ruthless", "iron fist"], label: "Exercised cruelly", hint: "The definition says 'typically exercising it cruelly' -- using power harshly." },
    ],
    synonyms: ["tyrant", "dictator", "autocrat", "oppressor"],
    partOfSpeech: "noun",
  },
  {
    word: "collude",
    definition: "To cooperate in a secret or unlawful way to deceive or cheat others.",
    keyConcepts: [
      { keyword: "secret cooperation", matchTerms: ["secret", "cooperat", "conspir", "plot", "scheme", "conniv", "collaborate", "together", "coordinate"], label: "Secret cooperation", hint: "The definition says 'cooperate in a secret or unlawful way' -- working together covertly." },
      { keyword: "deceive or cheat", matchTerms: ["deceiv", "cheat", "defraud", "trick", "swindle", "mislead", "dishonest", "corrupt", "fraud"], label: "To deceive or cheat", hint: "The definition says 'to deceive or cheat others' -- harmful intent." },
    ],
    synonyms: ["conspire", "connive", "scheme", "plot"],
    partOfSpeech: "verb",
  },
  {
    word: "egotistic",
    definition: "Excessively conceited or self-centered; having an inflated sense of self-importance.",
    keyConcepts: [
      { keyword: "excessively conceited", matchTerms: ["conceit", "vain", "arrogant", "narcissist", "self-absorbed", "selfish", "self-centered"], label: "Excessively conceited", hint: "The definition says 'excessively conceited or self-centered' -- focused on oneself." },
      { keyword: "inflated self-importance", matchTerms: ["inflat", "self-import", "ego", "proud", "superior", "boastful", "smug", "self-satisfied"], label: "Inflated self-importance", hint: "The definition says 'inflated sense of self-importance' -- thinking too highly of oneself." },
    ],
    synonyms: ["conceited", "narcissistic", "self-centered", "vain", "arrogant"],
    partOfSpeech: "adjective",
  },
  {
    word: "affront",
    definition: "An action or remark that causes outrage or offense; to insult or offend someone openly.",
    keyConcepts: [
      { keyword: "causes outrage", matchTerms: ["outrage", "offense", "offend", "insult", "slight", "indignity", "disrespect", "provok"], label: "Causes outrage", hint: "The definition says 'an action or remark that causes outrage or offense' -- something that angers." },
      { keyword: "insult openly", matchTerms: ["insult", "openly", "public", "deliberate", "direct", "bold", "brazen", "confront"], label: "Insult openly", hint: "The definition says 'to insult or offend someone openly' -- done without hiding." },
    ],
    synonyms: ["insult", "offense", "slight", "indignity"],
    partOfSpeech: "noun/verb",
  },
  {
    word: "conglomerate",
    definition: "A large corporation formed by merging different businesses; a mass of various materials gathered together.",
    keyConcepts: [
      { keyword: "large corporation", matchTerms: ["large", "corporation", "company", "business", "merger", "enterprise", "firm", "multinational", "holding"], label: "Large corporation", hint: "The definition says 'a large corporation formed by merging different businesses' -- a big combined company." },
      { keyword: "various materials together", matchTerms: ["various", "material", "gather", "collect", "mix", "diverse", "different", "combined", "mass", "heterogen"], label: "Various things together", hint: "The definition says 'a mass of various materials gathered together' -- different things combined." },
    ],
    synonyms: ["corporation", "conglomeration", "combination", "aggregate"],
    partOfSpeech: "noun",
  },
  {
    word: "harangue",
    definition: "A lengthy and aggressive speech; to lecture someone at length in an aggressive manner.",
    keyConcepts: [
      { keyword: "lengthy speech", matchTerms: ["lengthy", "long", "speech", "lecture", "tirade", "diatribe", "rant", "sermon", "discourse"], label: "Lengthy speech", hint: "The definition says 'a lengthy and aggressive speech' -- going on and on." },
      { keyword: "aggressive manner", matchTerms: ["aggressive", "forceful", "attack", "criticiz", "berat", "scold", "rebuke", "reprimand", "bombastic", "vehement"], label: "Aggressive manner", hint: "The definition says 'in an aggressive manner' -- not gentle or brief." },
    ],
    synonyms: ["tirade", "diatribe", "rant", "lecture"],
    partOfSpeech: "noun/verb",
  },
  {
    word: "beguile",
    definition: "To charm or enchant someone, often in a deceptive way; to trick into doing something.",
    keyConcepts: [
      { keyword: "charm or enchant", matchTerms: ["charm", "enchant", "captivat", "fascinate", "entrance", "allure", "attract", "seduc", "bewitch"], label: "Charm or enchant", hint: "The definition says 'charm or enchant someone' -- making someone delighted." },
      { keyword: "deceptive trick", matchTerms: ["deceptive", "deceiv", "trick", "mislead", "manipulat", "dupe", "fool", "lure", "entice"], label: "Often deceptive", hint: "The definition says 'often in a deceptive way' -- the charm may hide trickery." },
    ],
    synonyms: ["charm", "enchant", "deceive", "captivate", "seduce"],
    partOfSpeech: "verb",
  },
  {
    word: "tumultuous",
    definition: "Making a loud, confused noise; excited, confused, or disorderly.",
    keyConcepts: [
      { keyword: "loud confused noise", matchTerms: ["loud", "noise", "noisy", "confused", "uproar", "clamor", "din", "commotion", "racket", "chaos"], label: "Loud confused noise", hint: "The definition says 'making a loud, confused noise' -- chaotic sound." },
      { keyword: "excited or disorderly", matchTerms: ["excit", "disorder", "turbulent", "stormy", "tempestuous", "wild", "hectic", "frenzied", "riotous", "boisterous"], label: "Excited or disorderly", hint: "The definition says 'excited, confused, or disorderly' -- lacking calm order." },
    ],
    synonyms: ["chaotic", "turbulent", "stormy", "riotous", "boisterous"],
    partOfSpeech: "adjective",
  },
  {
    word: "flagrant",
    definition: "Conspicuously or obviously offensive; shockingly noticeable.",
    keyConcepts: [
      { keyword: "conspicuously offensive", matchTerms: ["conspicuous", "obvious", "blatant", "glaring", "offensive", "brazen", "shameless", "outrageous"], label: "Conspicuously offensive", hint: "The definition says 'conspicuously or obviously offensive' -- impossible to miss." },
      { keyword: "shockingly noticeable", matchTerms: ["shock", "notic", "egregious", "gross", "extreme", "overt", "undisguised", "bold"], label: "Shockingly noticeable", hint: "The definition says 'shockingly noticeable' -- stands out for the wrong reasons." },
    ],
    synonyms: ["blatant", "glaring", "brazen", "egregious", "gross"],
    partOfSpeech: "adjective",
  },
  {
    word: "aloof",
    definition: "Not friendly or forthcoming; cool and distant in manner.",
    keyConcepts: [
      { keyword: "not friendly", matchTerms: ["not friendly", "unfriendly", "cold", "cool", "reserved", "standoffish", "unapproach", "withdrawn"], label: "Not friendly", hint: "The definition says 'not friendly or forthcoming' -- keeping others at arm's length." },
      { keyword: "distant in manner", matchTerms: ["distant", "detach", "remote", "indifferent", "haughty", "superior", "removed", "apart"], label: "Distant in manner", hint: "The definition says 'cool and distant in manner' -- emotionally unavailable." },
    ],
    synonyms: ["distant", "detached", "reserved", "standoffish", "remote"],
    partOfSpeech: "adjective",
  },
  {
    word: "astute",
    definition: "Having an ability to accurately assess situations and turn them to one's advantage; shrewd.",
    keyConcepts: [
      { keyword: "accurately assess", matchTerms: ["accurate", "assess", "perceiv", "understand", "discern", "judg", "insight", "sharp", "keen"], label: "Accurately assess", hint: "The definition says 'ability to accurately assess situations' -- seeing clearly." },
      { keyword: "turn to advantage", matchTerms: ["advantage", "benefit", "clever", "shrewd", "cunning", "savvy", "smart", "calculating", "opportun"], label: "Turn to advantage", hint: "The definition says 'turn them to one's advantage' -- making situations work for you." },
    ],
    synonyms: ["shrewd", "sharp", "clever", "perceptive", "canny"],
    partOfSpeech: "adjective",
  },
  {
    word: "shrewd",
    definition: "Having sharp powers of judgment; clever in practical matters.",
    keyConcepts: [
      { keyword: "sharp judgment", matchTerms: ["sharp", "judgment", "judgement", "astute", "keen", "perceptive", "discerning", "wise"], label: "Sharp judgment", hint: "The definition says 'having sharp powers of judgment' -- making good assessments." },
      { keyword: "clever in practical matters", matchTerms: ["clever", "practical", "smart", "cunning", "savvy", "canny", "business", "worldly", "pragmatic"], label: "Clever in practical matters", hint: "The definition says 'clever in practical matters' -- street-smart wisdom." },
    ],
    synonyms: ["astute", "sharp", "clever", "canny", "perceptive"],
    partOfSpeech: "adjective",
  },
  {
    word: "incorrigible",
    definition: "Not able to be corrected, improved, or reformed; beyond redemption.",
    keyConcepts: [
      { keyword: "not able to be corrected", matchTerms: ["not", "unable", "cannot", "correct", "fix", "change", "reform", "cure", "remedy"], label: "Cannot be corrected", hint: "The definition says 'not able to be corrected, improved, or reformed' -- unchangeable." },
      { keyword: "beyond redemption", matchTerms: ["beyond", "hopeless", "irredeemable", "hardened", "inveterate", "habitual", "chronic"], label: "Beyond redemption", hint: "The definition says 'beyond redemption' -- past the point of saving." },
    ],
    synonyms: ["irredeemable", "hopeless", "inveterate", "hardened", "unreformable"],
    partOfSpeech: "adjective",
  },
  {
    word: "boorish",
    definition: "Rough and bad-mannered; coarse and unrefined.",
    keyConcepts: [
      { keyword: "bad-mannered", matchTerms: ["bad manner", "rude", "impolite", "discourteous", "uncouth", "ill-bred", "crude", "vulgar"], label: "Bad-mannered", hint: "The definition says 'rough and bad-mannered' -- lacking social grace." },
      { keyword: "coarse and unrefined", matchTerms: ["coarse", "unrefined", "crude", "rough", "uncultured", "unsophistic", "loutish", "oafish"], label: "Coarse and unrefined", hint: "The definition says 'coarse and unrefined' -- lacking polish." },
    ],
    synonyms: ["crude", "uncouth", "vulgar", "rude", "loutish"],
    partOfSpeech: "adjective",
  },
  {
    word: "caustic",
    definition: "Able to burn or corrode organic tissue; sarcastic in a scathing way.",
    keyConcepts: [
      { keyword: "burn or corrode", matchTerms: ["burn", "corrod", "acid", "chemical", "erosive", "destroy", "tissue", "damage"], label: "Burn or corrode", hint: "The definition says 'able to burn or corrode organic tissue' -- chemically damaging." },
      { keyword: "scathingly sarcastic", matchTerms: ["sarcastic", "scathing", "biting", "cutting", "harsh", "acerbic", "mordant", "bitter", "cruel"], label: "Scathingly sarcastic", hint: "The definition says 'sarcastic in a scathing way' -- words that wound." },
    ],
    synonyms: ["corrosive", "acidic", "biting", "acerbic", "scathing"],
    partOfSpeech: "adjective",
  },
  {
    word: "judicious",
    definition: "Having or showing good judgment; sensible and wise.",
    keyConcepts: [
      { keyword: "good judgment", matchTerms: ["good", "judgment", "judgement", "wise", "sound", "prudent", "discerning", "astute"], label: "Good judgment", hint: "The definition says 'having or showing good judgment' -- making smart decisions." },
      { keyword: "sensible and wise", matchTerms: ["sensible", "wise", "reasonabl", "rational", "thoughtful", "careful", "consider", "circumspect"], label: "Sensible and wise", hint: "The definition says 'sensible and wise' -- well-considered choices." },
    ],
    synonyms: ["wise", "prudent", "sensible", "discerning", "shrewd"],
    partOfSpeech: "adjective",
  },
  {
    word: "litigious",
    definition: "Inclined to go to law to settle disputes; relating to lawsuits.",
    keyConcepts: [
      { keyword: "inclined to go to law", matchTerms: ["law", "legal", "sue", "lawsuit", "court", "litigat", "lawyer", "dispute", "inclined"], label: "Inclined to go to law", hint: "The definition says 'inclined to go to law to settle disputes' -- quick to sue." },
      { keyword: "relating to lawsuits", matchTerms: ["lawsuit", "litigation", "legal action", "court case", "judicial", "contentious", "quarrelsome"], label: "Relating to lawsuits", hint: "The definition says 'relating to lawsuits' -- legal proceedings." },
    ],
    synonyms: ["contentious", "quarrelsome", "disputatious", "argumentative"],
    partOfSpeech: "adjective",
  },
  {
    word: "regime",
    definition: "A government or system of rule, especially an authoritarian one; a systematic way of doing things.",
    keyConcepts: [
      { keyword: "government or system", matchTerms: ["government", "system", "rule", "administration", "authority", "leadership", "power", "control"], label: "Government or system", hint: "The definition says 'a government or system of rule' -- those in charge." },
      { keyword: "authoritarian", matchTerms: ["authoritarian", "strict", "dictator", "oppressive", "totalitarian", "autocrat", "tyrann", "rigid"], label: "Often authoritarian", hint: "The definition says 'especially an authoritarian one' -- often implies strict control." },
      { keyword: "systematic way", matchTerms: ["systematic", "routine", "program", "method", "plan", "schedule", "regimen", "regular"], label: "Systematic way", hint: "The definition also means 'a systematic way of doing things' -- an organized approach." },
    ],
    synonyms: ["government", "administration", "rule", "system", "regimen"],
    partOfSpeech: "noun",
  },
  {
    word: "aberrant",
    definition: "Departing from an accepted standard; deviating from the normal type.",
    keyConcepts: [
      { keyword: "departing from standard", matchTerms: ["depart", "standard", "deviat", "abnormal", "unusual", "atypical", "irregular"], label: "Departing from standard", hint: "The definition says 'departing from an accepted standard' -- not following the norm." },
      { keyword: "deviating from normal", matchTerms: ["deviat", "normal", "type", "anomalous", "divergent", "exceptional", "odd"], label: "Deviating from normal", hint: "The definition says 'deviating from the normal type' -- straying from what's typical." },
    ],
    synonyms: ["abnormal", "deviant", "anomalous", "atypical", "irregular"],
    partOfSpeech: "adjective",
  },
  {
    word: "abrasive",
    definition: "Harsh or rough in manner; tending to annoy or cause ill will.",
    keyConcepts: [
      { keyword: "harsh or rough", matchTerms: ["harsh", "rough", "coarse", "grating", "irritating", "caustic"], label: "Harsh or rough", hint: "The definition says 'harsh or rough in manner' -- not gentle." },
      { keyword: "tending to annoy", matchTerms: ["annoy", "ill will", "offensive", "rude", "brusque", "cutting", "sharp"], label: "Tending to annoy", hint: "The definition says 'tending to annoy or cause ill will' -- rubs people the wrong way." },
    ],
    synonyms: ["harsh", "caustic", "brusque", "cutting", "grating"],
    partOfSpeech: "adjective",
  },
  {
    word: "acrimonious",
    definition: "Angry and bitter in tone or manner; harsh and sharp in language.",
    keyConcepts: [
      { keyword: "angry and bitter", matchTerms: ["angry", "bitter", "hostile", "resentful", "rancorous", "vitriolic"], label: "Angry and bitter", hint: "The definition says 'angry and bitter in tone' -- full of resentment." },
      { keyword: "harsh in language", matchTerms: ["harsh", "sharp", "language", "caustic", "cutting", "venomous", "scathing"], label: "Harsh in language", hint: "The definition says 'harsh and sharp in language' -- biting words." },
    ],
    synonyms: ["bitter", "caustic", "rancorous", "vitriolic", "hostile"],
    partOfSpeech: "adjective",
  },
  {
    word: "adversarial",
    definition: "Involving conflict or opposition; characteristic of an opponent or enemy.",
    keyConcepts: [
      { keyword: "involving conflict", matchTerms: ["conflict", "opposition", "hostile", "combative", "confrontational", "contentious"], label: "Involving conflict", hint: "The definition says 'involving conflict or opposition' -- at odds with each other." },
      { keyword: "opponent or enemy", matchTerms: ["opponent", "enemy", "rival", "antagonist", "adversary", "foe"], label: "Opponent or enemy", hint: "The definition says 'characteristic of an opponent' -- like enemies." },
    ],
    synonyms: ["hostile", "antagonistic", "combative", "confrontational", "opposing"],
    partOfSpeech: "adjective",
  },
  {
    word: "advantageous",
    definition: "Involving or creating favorable circumstances; beneficial or profitable.",
    keyConcepts: [
      { keyword: "favorable circumstances", matchTerms: ["favorable", "circumstances", "opportune", "auspicious", "propitious", "fortunate"], label: "Favorable circumstances", hint: "The definition says 'creating favorable circumstances' -- sets you up well." },
      { keyword: "beneficial", matchTerms: ["beneficial", "profitable", "useful", "helpful", "gain", "positive", "rewarding"], label: "Beneficial", hint: "The definition says 'beneficial or profitable' -- works in your favor." },
    ],
    synonyms: ["beneficial", "profitable", "favorable", "useful", "helpful"],
    partOfSpeech: "adjective",
  },
  {
    word: "amplify",
    definition: "To increase the strength or amount of something; to make larger or more powerful.",
    keyConcepts: [
      { keyword: "increase strength", matchTerms: ["increase", "strength", "amount", "intensify", "boost", "magnify", "enhance"], label: "Increase strength", hint: "The definition says 'increase the strength or amount' -- making it more." },
      { keyword: "make larger", matchTerms: ["larger", "powerful", "expand", "extend", "augment", "heighten", "escalate"], label: "Make larger", hint: "The definition says 'make larger or more powerful' -- scaling up." },
    ],
    synonyms: ["increase", "magnify", "intensify", "boost", "enhance"],
    partOfSpeech: "verb",
  },
  {
    word: "anachronistic",
    definition: "Belonging to a period other than that being portrayed; out of date.",
    keyConcepts: [
      { keyword: "wrong period", matchTerms: ["period", "time", "era", "historical", "misplaced", "chronological", "temporal"], label: "Wrong period", hint: "The definition says 'belonging to a period other than that being portrayed' -- wrong time." },
      { keyword: "out of date", matchTerms: ["out of date", "outdated", "obsolete", "archaic", "old-fashioned", "antiquated"], label: "Out of date", hint: "The definition says 'out of date' -- no longer current." },
    ],
    synonyms: ["outdated", "obsolete", "archaic", "antiquated", "old-fashioned"],
    partOfSpeech: "adjective",
  },
  {
    word: "antagonistic",
    definition: "Showing or feeling active opposition or hostility toward someone.",
    keyConcepts: [
      { keyword: "active opposition", matchTerms: ["active", "opposition", "oppose", "against", "contrary", "resistant"], label: "Active opposition", hint: "The definition says 'showing active opposition' -- working against." },
      { keyword: "hostility", matchTerms: ["hostil", "unfriendly", "aggressive", "combative", "belligerent", "adversarial"], label: "Hostility", hint: "The definition says 'hostility toward someone' -- ill will." },
    ],
    synonyms: ["hostile", "opposing", "unfriendly", "adversarial", "combative"],
    partOfSpeech: "adjective",
  },
  {
    word: "arrogant",
    definition: "Having an exaggerated sense of one's own importance or abilities; overbearingly proud.",
    keyConcepts: [
      { keyword: "exaggerated sense of importance", matchTerms: ["exaggerat", "sense", "importance", "abilities", "superior", "self-important", "conceited"], label: "Exaggerated importance", hint: "The definition says 'exaggerated sense of one's own importance' -- thinks too highly of oneself." },
      { keyword: "overbearingly proud", matchTerms: ["overbear", "proud", "haughty", "pompous", "presumptuous", "supercilious"], label: "Overbearingly proud", hint: "The definition says 'overbearingly proud' -- excessive pride." },
    ],
    synonyms: ["conceited", "haughty", "pompous", "presumptuous", "supercilious"],
    partOfSpeech: "adjective",
  },
  {
    word: "authoritative",
    definition: "Commanding and self-confident; recognized as being reliable or accurate.",
    keyConcepts: [
      { keyword: "commanding", matchTerms: ["command", "self-confident", "assertive", "decisive", "forceful", "masterful"], label: "Commanding", hint: "The definition says 'commanding and self-confident' -- speaks with authority." },
      { keyword: "reliable or accurate", matchTerms: ["reliable", "accurate", "trustworthy", "definitive", "official", "credible", "expert"], label: "Reliable or accurate", hint: "The definition says 'recognized as being reliable' -- can be trusted." },
    ],
    synonyms: ["commanding", "definitive", "reliable", "official", "expert"],
    partOfSpeech: "adjective",
  },
  {
    word: "autonomous",
    definition: "Having the freedom to govern itself or control its own affairs; self-governing.",
    keyConcepts: [
      { keyword: "freedom to govern", matchTerms: ["freedom", "govern", "control", "self-determin", "sovereign", "self-ruling"], label: "Freedom to govern", hint: "The definition says 'freedom to govern itself' -- ruling itself." },
      { keyword: "self-governing", matchTerms: ["self-govern", "independent", "self-direct", "self-sufficient", "free", "sovereign"], label: "Self-governing", hint: "The definition says 'self-governing' -- makes its own decisions." },
    ],
    synonyms: ["independent", "self-governing", "sovereign", "self-sufficient", "free"],
    partOfSpeech: "adjective",
  },
  {
    word: "bellwether",
    definition: "An indicator or predictor of something; a leader or trendsetter.",
    keyConcepts: [
      { keyword: "indicator or predictor", matchTerms: ["indicator", "predictor", "sign", "signal", "harbinger", "barometer", "gauge"], label: "Indicator or predictor", hint: "The definition says 'an indicator or predictor' -- shows what's coming." },
      { keyword: "leader or trendsetter", matchTerms: ["leader", "trendsetter", "forerunner", "pioneer", "pacesetter", "guide"], label: "Leader or trendsetter", hint: "The definition says 'a leader or trendsetter' -- others follow." },
    ],
    synonyms: ["indicator", "harbinger", "leader", "trendsetter", "barometer"],
    partOfSpeech: "noun",
  },
  {
    word: "blatant",
    definition: "Done openly and unashamedly; completely lacking in subtlety.",
    keyConcepts: [
      { keyword: "done openly", matchTerms: ["open", "unasham", "obvious", "overt", "flagrant", "brazen", "bold"], label: "Done openly", hint: "The definition says 'done openly and unashamedly' -- not hiding it." },
      { keyword: "lacking subtlety", matchTerms: ["lacking subtlety", "glaring", "conspicuous", "unmistakable", "undisguised", "shameless"], label: "Lacking subtlety", hint: "The definition says 'completely lacking in subtlety' -- impossible to miss." },
    ],
    synonyms: ["obvious", "flagrant", "glaring", "brazen", "shameless"],
    partOfSpeech: "adjective",
  },
  {
    word: "brazen",
    definition: "Bold and shameless; showing no embarrassment about one's behavior.",
    keyConcepts: [
      { keyword: "bold and shameless", matchTerms: ["bold", "shameless", "audacious", "impudent", "insolent", "unabashed"], label: "Bold and shameless", hint: "The definition says 'bold and shameless' -- no apologies." },
      { keyword: "no embarrassment", matchTerms: ["no embarrassment", "unembarrassed", "unashamed", "barefaced", "brash", "forward"], label: "No embarrassment", hint: "The definition says 'showing no embarrassment' -- doesn't feel bad about it." },
    ],
    synonyms: ["bold", "shameless", "audacious", "impudent", "unabashed"],
    partOfSpeech: "adjective",
  },
  {
    word: "censorious",
    definition: "Severely critical of others; quick to find fault.",
    keyConcepts: [
      { keyword: "severely critical", matchTerms: ["severe", "critical", "harsh", "judgmental", "condemnatory", "disapproving"], label: "Severely critical", hint: "The definition says 'severely critical of others' -- harsh judgment." },
      { keyword: "quick to find fault", matchTerms: ["quick", "fault", "criticize", "nitpick", "carping", "captious", "hypercritical"], label: "Quick to find fault", hint: "The definition says 'quick to find fault' -- always looking for problems." },
    ],
    synonyms: ["critical", "judgmental", "fault-finding", "carping", "hypercritical"],
    partOfSpeech: "adjective",
  },
  {
    word: "circumspect",
    definition: "Wary and unwilling to take risks; careful to consider all circumstances.",
    keyConcepts: [
      { keyword: "wary and unwilling", matchTerms: ["wary", "unwilling", "risk", "cautious", "careful", "guarded", "prudent"], label: "Wary and unwilling", hint: "The definition says 'wary and unwilling to take risks' -- playing it safe." },
      { keyword: "consider all circumstances", matchTerms: ["consider", "circumstanc", "thoughtful", "deliberat", "vigilant", "watchful"], label: "Consider all circumstances", hint: "The definition says 'careful to consider all circumstances' -- thinking things through." },
    ],
    synonyms: ["cautious", "careful", "prudent", "guarded", "wary"],
    partOfSpeech: "adjective",
  },
  {
    word: "coercive",
    definition: "Using force or threats to persuade someone; compelling through pressure.",
    keyConcepts: [
      { keyword: "using force or threats", matchTerms: ["force", "threat", "intimidat", "pressure", "compel", "bully", "strong-arm"], label: "Using force or threats", hint: "The definition says 'using force or threats to persuade' -- not voluntary." },
      { keyword: "compelling through pressure", matchTerms: ["compel", "pressure", "coerce", "constrain", "obligate", "impose"], label: "Compelling through pressure", hint: "The definition says 'compelling through pressure' -- making someone do it." },
    ],
    synonyms: ["forceful", "compelling", "oppressive", "intimidating", "pressuring"],
    partOfSpeech: "adjective",
  },
  {
    word: "combative",
    definition: "Ready or eager to fight or argue; aggressively competitive.",
    keyConcepts: [
      { keyword: "ready to fight", matchTerms: ["ready", "fight", "argue", "aggressive", "belligerent", "pugnacious", "hostile"], label: "Ready to fight", hint: "The definition says 'ready or eager to fight' -- looking for a battle." },
      { keyword: "aggressively competitive", matchTerms: ["aggressive", "competitive", "confrontational", "contentious", "quarrelsome", "militant"], label: "Aggressively competitive", hint: "The definition says 'aggressively competitive' -- wants to win at all costs." },
    ],
    synonyms: ["aggressive", "belligerent", "pugnacious", "hostile", "confrontational"],
    partOfSpeech: "adjective",
  },
  {
    word: "complicit",
    definition: "Involved with others in an illegal activity or wrongdoing; being an accomplice.",
    keyConcepts: [
      { keyword: "involved in wrongdoing", matchTerms: ["involved", "illegal", "wrongdoing", "crime", "guilty", "implicated", "participat"], label: "Involved in wrongdoing", hint: "The definition says 'involved with others in an illegal activity' -- part of the crime." },
      { keyword: "being an accomplice", matchTerms: ["accomplice", "partner", "conspirator", "accessory", "collaborator", "abettor"], label: "Being an accomplice", hint: "The definition says 'being an accomplice' -- helping do wrong." },
    ],
    synonyms: ["involved", "implicated", "guilty", "colluding", "conspiring"],
    partOfSpeech: "adjective",
  },
  {
    word: "conscientious",
    definition: "Wishing to do what is right; thorough and careful in one's work.",
    keyConcepts: [
      { keyword: "wishing to do right", matchTerms: ["wish", "right", "moral", "ethical", "principled", "scrupulous", "dutiful"], label: "Wishing to do right", hint: "The definition says 'wishing to do what is right' -- having a conscience." },
      { keyword: "thorough and careful", matchTerms: ["thorough", "careful", "diligent", "meticulous", "painstaking", "attentive"], label: "Thorough and careful", hint: "The definition says 'thorough and careful in one's work' -- doing a good job." },
    ],
    synonyms: ["diligent", "careful", "thorough", "meticulous", "scrupulous"],
    partOfSpeech: "adjective",
  },
  {
    word: "consequential",
    definition: "Following as a result or effect; important in significance or outcome.",
    keyConcepts: [
      { keyword: "following as result", matchTerms: ["follow", "result", "effect", "resulting", "ensuing", "subsequent"], label: "Following as result", hint: "The definition says 'following as a result' -- comes from something else." },
      { keyword: "important in significance", matchTerms: ["important", "significan", "outcome", "momentous", "weighty", "substantial", "major"], label: "Important in significance", hint: "The definition says 'important in significance' -- matters a lot." },
    ],
    synonyms: ["significant", "important", "momentous", "substantial", "weighty"],
    partOfSpeech: "adjective",
  },
  {
    word: "conservative",
    definition: "Favoring traditional views and values; cautious about change or innovation.",
    keyConcepts: [
      { keyword: "favoring traditional", matchTerms: ["favor", "traditional", "convention", "established", "orthodox", "classic"], label: "Favoring traditional", hint: "The definition says 'favoring traditional views and values' -- preferring the old ways." },
      { keyword: "cautious about change", matchTerms: ["cautious", "change", "innovation", "risk-averse", "moderate", "careful", "restrained"], label: "Cautious about change", hint: "The definition says 'cautious about change or innovation' -- slow to adopt new things." },
    ],
    synonyms: ["traditional", "cautious", "conventional", "moderate", "restrained"],
    partOfSpeech: "adjective",
  },
  {
    word: "contentious",
    definition: "Causing or likely to cause an argument; involving heated disagreement.",
    keyConcepts: [
      { keyword: "causing argument", matchTerms: ["caus", "argument", "controversy", "dispute", "conflict", "debate"], label: "Causing argument", hint: "The definition says 'causing or likely to cause an argument' -- sparks conflict." },
      { keyword: "heated disagreement", matchTerms: ["heated", "disagreement", "divisive", "polarizing", "combative", "quarrelsome"], label: "Heated disagreement", hint: "The definition says 'involving heated disagreement' -- people fight about it." },
    ],
    synonyms: ["controversial", "disputed", "divisive", "argumentative", "combative"],
    partOfSpeech: "adjective",
  },
  {
    word: "corroborative",
    definition: "Serving to confirm or support a statement, theory, or finding.",
    keyConcepts: [
      { keyword: "serving to confirm", matchTerms: ["confirm", "support", "verify", "validate", "substantiat", "back up"], label: "Serving to confirm", hint: "The definition says 'serving to confirm or support' -- adds proof." },
      { keyword: "statement or theory", matchTerms: ["statement", "theory", "finding", "evidence", "testimony", "claim"], label: "Statement or theory", hint: "The definition says 'a statement, theory, or finding' -- something claimed." },
    ],
    synonyms: ["confirming", "supporting", "substantiating", "validating", "verifying"],
    partOfSpeech: "adjective",
  },
  {
    word: "counterproductive",
    definition: "Having the opposite of the desired effect; hindering the achievement of a goal.",
    keyConcepts: [
      { keyword: "opposite of desired effect", matchTerms: ["opposite", "desired", "effect", "contrary", "reverse", "backfire"], label: "Opposite of desired effect", hint: "The definition says 'having the opposite of the desired effect' -- backfires." },
      { keyword: "hindering achievement", matchTerms: ["hinder", "achievement", "goal", "obstruct", "impede", "undermine", "sabotage"], label: "Hindering achievement", hint: "The definition says 'hindering the achievement of a goal' -- getting in the way." },
    ],
    synonyms: ["harmful", "detrimental", "self-defeating", "unhelpful", "obstructive"],
    partOfSpeech: "adjective",
  },
  {
    word: "debilitating",
    definition: "Causing weakness or loss of strength; severely impairing function.",
    keyConcepts: [
      { keyword: "causing weakness", matchTerms: ["caus", "weakness", "weaken", "drain", "exhaust", "sap", "enfeeble"], label: "Causing weakness", hint: "The definition says 'causing weakness or loss of strength' -- makes you weak." },
      { keyword: "impairing function", matchTerms: ["impair", "function", "crippling", "disabling", "incapacitat", "paralyzing"], label: "Impairing function", hint: "The definition says 'severely impairing function' -- can't work properly." },
    ],
    synonyms: ["weakening", "crippling", "incapacitating", "disabling", "exhausting"],
    partOfSpeech: "adjective",
  },
  {
    word: "definitive",
    definition: "Done or reached decisively and with authority; serving as a standard or reference.",
    keyConcepts: [
      { keyword: "decisively with authority", matchTerms: ["decisive", "authority", "final", "conclusive", "ultimate", "absolute"], label: "Decisively with authority", hint: "The definition says 'done decisively and with authority' -- the final word." },
      { keyword: "standard or reference", matchTerms: ["standard", "reference", "authoritative", "classic", "benchmark", "quintessential"], label: "Standard or reference", hint: "The definition says 'serving as a standard or reference' -- the one to look to." },
    ],
    synonyms: ["conclusive", "authoritative", "final", "ultimate", "decisive"],
    partOfSpeech: "adjective",
  },
  {
    word: "dehumanizing",
    definition: "Depriving someone of human qualities or dignity; degrading.",
    keyConcepts: [
      { keyword: "depriving of human qualities", matchTerms: ["depriv", "human", "qualities", "dignity", "humanity", "personhood"], label: "Depriving of human qualities", hint: "The definition says 'depriving someone of human qualities' -- treating them as less than human." },
      { keyword: "degrading", matchTerms: ["degrad", "demean", "humiliat", "belittl", "debase", "objectify"], label: "Degrading", hint: "The definition says 'degrading' -- lowering their worth." },
    ],
    synonyms: ["degrading", "demeaning", "humiliating", "debasing", "objectifying"],
    partOfSpeech: "adjective",
  },
  {
    word: "demoralizing",
    definition: "Causing someone to lose confidence or hope; disheartening.",
    keyConcepts: [
      { keyword: "lose confidence", matchTerms: ["lose", "confidence", "hope", "spirit", "morale", "discourag"], label: "Lose confidence", hint: "The definition says 'causing someone to lose confidence' -- breaks their spirit." },
      { keyword: "disheartening", matchTerms: ["dishearten", "deflat", "dispirit", "depress", "crush", "undermin"], label: "Disheartening", hint: "The definition says 'disheartening' -- takes away hope." },
    ],
    synonyms: ["discouraging", "disheartening", "dispiriting", "deflating", "crushing"],
    partOfSpeech: "adjective",
  },
  {
    word: "destructive",
    definition: "Causing great damage or harm; tending to destroy or undermine.",
    keyConcepts: [
      { keyword: "causing damage", matchTerms: ["caus", "damage", "harm", "devastat", "ruin", "wreck", "ravage"], label: "Causing damage", hint: "The definition says 'causing great damage or harm' -- breaks things." },
      { keyword: "tending to destroy", matchTerms: ["destroy", "undermine", "demolish", "annihilat", "dismantle", "wreck"], label: "Tending to destroy", hint: "The definition says 'tending to destroy or undermine' -- tears down." },
    ],
    synonyms: ["damaging", "harmful", "devastating", "ruinous", "detrimental"],
    partOfSpeech: "adjective",
  },
  {
    word: "detached",
    definition: "Separate or disconnected; not emotionally involved or objective.",
    keyConcepts: [
      { keyword: "separate or disconnected", matchTerms: ["separate", "disconnect", "apart", "isolated", "removed", "independent"], label: "Separate or disconnected", hint: "The definition says 'separate or disconnected' -- not attached." },
      { keyword: "not emotionally involved", matchTerms: ["not emotion", "objective", "impartial", "aloof", "dispassionate", "indifferent"], label: "Not emotionally involved", hint: "The definition says 'not emotionally involved' -- keeps distance." },
    ],
    synonyms: ["disconnected", "aloof", "objective", "impartial", "dispassionate"],
    partOfSpeech: "adjective",
  },
  {
    word: "discernible",
    definition: "Able to be perceived or recognized; distinguishable.",
    keyConcepts: [
      { keyword: "able to be perceived", matchTerms: ["able", "perceiv", "recogniz", "detect", "notice", "see", "observe"], label: "Able to be perceived", hint: "The definition says 'able to be perceived or recognized' -- can be detected." },
      { keyword: "distinguishable", matchTerms: ["distinguish", "identifiable", "visible", "apparent", "noticeable", "evident"], label: "Distinguishable", hint: "The definition says 'distinguishable' -- can tell it apart." },
    ],
    synonyms: ["perceptible", "noticeable", "detectable", "visible", "apparent"],
    partOfSpeech: "adjective",
  },
  {
    word: "discretionary",
    definition: "Available for use at one's own judgment; not required or fixed.",
    keyConcepts: [
      { keyword: "at one's own judgment", matchTerms: ["own", "judgment", "choice", "decision", "option", "preference"], label: "At one's own judgment", hint: "The definition says 'available for use at one's own judgment' -- you decide." },
      { keyword: "not required", matchTerms: ["not required", "fixed", "optional", "elective", "voluntary", "flexible"], label: "Not required", hint: "The definition says 'not required or fixed' -- up to you." },
    ],
    synonyms: ["optional", "elective", "voluntary", "flexible", "arbitrary"],
    partOfSpeech: "adjective",
  },
  {
    word: "dismissive",
    definition: "Showing that something is unworthy of consideration; rejecting or disregarding.",
    keyConcepts: [
      { keyword: "unworthy of consideration", matchTerms: ["unworthy", "consideration", "trivial", "unimportant", "insignificant", "beneath"], label: "Unworthy of consideration", hint: "The definition says 'showing that something is unworthy of consideration' -- not worth thinking about." },
      { keyword: "rejecting or disregarding", matchTerms: ["reject", "disregard", "ignore", "brush off", "scorn", "disdain", "contempt"], label: "Rejecting or disregarding", hint: "The definition says 'rejecting or disregarding' -- pushing aside." },
    ],
    synonyms: ["contemptuous", "disdainful", "scornful", "disparaging", "condescending"],
    partOfSpeech: "adjective",
  },
  {
    word: "disproportionate",
    definition: "Too large or too small in relation to something else; out of proportion.",
    keyConcepts: [
      { keyword: "too large or too small", matchTerms: ["too large", "too small", "excessive", "inadequate", "unbalanced", "unequal"], label: "Too large or too small", hint: "The definition says 'too large or too small' -- wrong size." },
      { keyword: "out of proportion", matchTerms: ["out of proportion", "uneven", "asymmetric", "lopsided", "skewed", "incommensurate"], label: "Out of proportion", hint: "The definition says 'out of proportion' -- doesn't match up." },
    ],
    synonyms: ["excessive", "unequal", "unbalanced", "incommensurate", "lopsided"],
    partOfSpeech: "adjective",
  },
  {
    word: "disruptive",
    definition: "Causing or tending to cause disruption; innovative in a way that upsets the status quo.",
    keyConcepts: [
      { keyword: "causing disruption", matchTerms: ["caus", "disruption", "interrupt", "disturb", "unsettle", "disorder"], label: "Causing disruption", hint: "The definition says 'causing or tending to cause disruption' -- breaks the flow." },
      { keyword: "upsets status quo", matchTerms: ["innovative", "upsets", "status quo", "revolutionary", "transformative", "radical"], label: "Upsets status quo", hint: "The definition says 'innovative in a way that upsets the status quo' -- changes everything." },
    ],
    synonyms: ["disturbing", "unsettling", "troublesome", "revolutionary", "transformative"],
    partOfSpeech: "adjective",
  },
  {
    word: "divisive",
    definition: "Tending to cause disagreement or hostility between people; creating division.",
    keyConcepts: [
      { keyword: "cause disagreement", matchTerms: ["caus", "disagreement", "hostility", "conflict", "discord", "strife"], label: "Cause disagreement", hint: "The definition says 'tending to cause disagreement or hostility' -- makes people fight." },
      { keyword: "creating division", matchTerms: ["creating", "division", "polariz", "split", "alienat", "estrang"], label: "Creating division", hint: "The definition says 'creating division' -- splits people apart." },
    ],
    synonyms: ["polarizing", "contentious", "controversial", "alienating", "splitting"],
    partOfSpeech: "adjective",
  },
  {
    word: "elusive",
    definition: "Difficult to find, catch, or achieve; skillfully evading capture.",
    keyConcepts: [
      { keyword: "difficult to find", matchTerms: ["difficult", "find", "catch", "achieve", "hard to grasp", "slippery"], label: "Difficult to find", hint: "The definition says 'difficult to find, catch, or achieve' -- hard to get." },
      { keyword: "skillfully evading", matchTerms: ["evad", "captur", "escap", "evasive", "fleeting", "intangible"], label: "Skillfully evading", hint: "The definition says 'skillfully evading capture' -- slips away." },
    ],
    synonyms: ["evasive", "slippery", "fleeting", "intangible", "hard to catch"],
    partOfSpeech: "adjective",
  },
  {
    word: "embittered",
    definition: "Made bitter or resentful by unfair treatment; feeling angry and disappointed.",
    keyConcepts: [
      { keyword: "made bitter", matchTerms: ["bitter", "resentful", "unfair", "treatment", "sour", "cynical"], label: "Made bitter", hint: "The definition says 'made bitter or resentful by unfair treatment' -- turned sour." },
      { keyword: "angry and disappointed", matchTerms: ["angry", "disappointed", "disillusion", "hurt", "aggrieved", "disenfranchised"], label: "Angry and disappointed", hint: "The definition says 'feeling angry and disappointed' -- let down." },
    ],
    synonyms: ["resentful", "bitter", "cynical", "disillusioned", "aggrieved"],
    partOfSpeech: "adjective",
  },
  {
    word: "empirical",
    definition: "Based on observation or experience rather than theory; verifiable by observation.",
    keyConcepts: [
      { keyword: "based on observation", matchTerms: ["based", "observation", "experience", "practical", "hands-on", "experimental"], label: "Based on observation", hint: "The definition says 'based on observation or experience' -- from real evidence." },
      { keyword: "rather than theory", matchTerms: ["rather than theory", "verifiable", "factual", "measurable", "demonstrable", "concrete"], label: "Rather than theory", hint: "The definition says 'rather than theory' -- not just ideas." },
    ],
    synonyms: ["observational", "experiential", "practical", "factual", "experimental"],
    partOfSpeech: "adjective",
  },
  {
    word: "enduring",
    definition: "Lasting over a long period of time; able to withstand hardship.",
    keyConcepts: [
      { keyword: "lasting long", matchTerms: ["lasting", "long", "period", "time", "permanent", "persistent", "durable"], label: "Lasting long", hint: "The definition says 'lasting over a long period of time' -- doesn't fade." },
      { keyword: "withstand hardship", matchTerms: ["withstand", "hardship", "survive", "resilient", "steadfast", "stalwart"], label: "Withstand hardship", hint: "The definition says 'able to withstand hardship' -- tough and lasting." },
    ],
    synonyms: ["lasting", "durable", "permanent", "persistent", "resilient"],
    partOfSpeech: "adjective",
  },
  {
    word: "enlightened",
    definition: "Having or showing a rational and well-informed outlook; spiritually aware.",
    keyConcepts: [
      { keyword: "rational and well-informed", matchTerms: ["rational", "well-informed", "knowledgeable", "educated", "wise", "progressive"], label: "Rational and well-informed", hint: "The definition says 'having a rational and well-informed outlook' -- knows better." },
      { keyword: "spiritually aware", matchTerms: ["spiritual", "aware", "awakened", "illuminated", "insightful", "conscious"], label: "Spiritually aware", hint: "The definition says 'spiritually aware' -- higher understanding." },
    ],
    synonyms: ["informed", "educated", "wise", "progressive", "aware"],
    partOfSpeech: "adjective",
  },
  {
    word: "entrenched",
    definition: "Firmly established and difficult to change; deeply rooted.",
    keyConcepts: [
      { keyword: "firmly established", matchTerms: ["firm", "established", "fixed", "set", "ingrained", "embedded"], label: "Firmly established", hint: "The definition says 'firmly established' -- solidly in place." },
      { keyword: "difficult to change", matchTerms: ["difficult", "change", "immovable", "stubborn", "persistent", "rooted", "deep"], label: "Difficult to change", hint: "The definition says 'difficult to change' -- won't budge." },
    ],
    synonyms: ["established", "ingrained", "deep-rooted", "embedded", "fixed"],
    partOfSpeech: "adjective",
  },
  {
    word: "estranged",
    definition: "No longer close or affectionate to someone; alienated.",
    keyConcepts: [
      { keyword: "no longer close", matchTerms: ["no longer", "close", "affectionate", "distant", "separated", "apart"], label: "No longer close", hint: "The definition says 'no longer close or affectionate' -- relationship ended." },
      { keyword: "alienated", matchTerms: ["alienat", "isolated", "detached", "disaffected", "withdrawn", "removed"], label: "Alienated", hint: "The definition says 'alienated' -- pushed away." },
    ],
    synonyms: ["alienated", "separated", "distant", "divided", "isolated"],
    partOfSpeech: "adjective",
  },
  {
    word: "exclusionary",
    definition: "Tending to exclude people from a group or activity; restrictive.",
    keyConcepts: [
      { keyword: "tending to exclude", matchTerms: ["exclude", "keep out", "bar", "prohibit", "reject", "omit"], label: "Tending to exclude", hint: "The definition says 'tending to exclude people' -- keeping them out." },
      { keyword: "restrictive", matchTerms: ["restrictive", "selective", "discriminatory", "limiting", "narrow", "closed"], label: "Restrictive", hint: "The definition says 'restrictive' -- limits who can participate." },
    ],
    synonyms: ["restrictive", "discriminatory", "selective", "limiting", "closed"],
    partOfSpeech: "adjective",
  },
  {
    word: "exploitative",
    definition: "Taking unfair advantage of someone for one's own benefit; using selfishly.",
    keyConcepts: [
      { keyword: "unfair advantage", matchTerms: ["unfair", "advantage", "take advantage", "abuse", "misuse", "manipulat"], label: "Unfair advantage", hint: "The definition says 'taking unfair advantage of someone' -- using them." },
      { keyword: "for own benefit", matchTerms: ["own benefit", "selfish", "self-serving", "predatory", "opportunistic", "parasitic"], label: "For own benefit", hint: "The definition says 'for one's own benefit' -- profiting at their expense." },
    ],
    synonyms: ["abusive", "manipulative", "predatory", "opportunistic", "selfish"],
    partOfSpeech: "adjective",
  },
  {
    word: "formative",
    definition: "Having a lasting influence on character or development; shaping.",
    keyConcepts: [
      { keyword: "lasting influence", matchTerms: ["lasting", "influence", "impact", "effect", "impression", "significant"], label: "Lasting influence", hint: "The definition says 'having a lasting influence' -- leaves a mark." },
      { keyword: "on character or development", matchTerms: ["character", "development", "growth", "shaping", "molding", "defining"], label: "On character or development", hint: "The definition says 'on character or development' -- shapes who you become." },
    ],
    synonyms: ["influential", "shaping", "developmental", "defining", "foundational"],
    partOfSpeech: "adjective",
  },
  {
    word: "fortuitous",
    definition: "Happening by chance rather than intention; lucky or fortunate.",
    keyConcepts: [
      { keyword: "happening by chance", matchTerms: ["happen", "chance", "accident", "coincidenc", "unplanned", "random"], label: "Happening by chance", hint: "The definition says 'happening by chance rather than intention' -- not planned." },
      { keyword: "lucky or fortunate", matchTerms: ["lucky", "fortunate", "serendipitous", "providential", "auspicious", "favorable"], label: "Lucky or fortunate", hint: "The definition says 'lucky or fortunate' -- good luck." },
    ],
    synonyms: ["accidental", "lucky", "serendipitous", "chance", "providential"],
    partOfSpeech: "adjective",
  },
  {
    word: "hierarchical",
    definition: "Arranged in a graded order or ranking; having levels of authority.",
    keyConcepts: [
      { keyword: "graded order", matchTerms: ["graded", "order", "rank", "tier", "level", "graduated", "layered"], label: "Graded order", hint: "The definition says 'arranged in a graded order' -- organized by rank." },
      { keyword: "levels of authority", matchTerms: ["level", "authority", "power", "structured", "stratified", "organized"], label: "Levels of authority", hint: "The definition says 'having levels of authority' -- some above others." },
    ],
    synonyms: ["ranked", "tiered", "stratified", "graded", "structured"],
    partOfSpeech: "adjective",
  },
  {
    word: "hypocritical",
    definition: "Behaving in a way that contradicts one's stated beliefs or feelings; insincere.",
    keyConcepts: [
      { keyword: "contradicts stated beliefs", matchTerms: ["contradict", "stated", "beliefs", "inconsistent", "double", "two-faced"], label: "Contradicts stated beliefs", hint: "The definition says 'behaving in a way that contradicts one's stated beliefs' -- says one thing, does another." },
      { keyword: "insincere", matchTerms: ["insincere", "false", "phony", "fake", "deceitful", "duplicitous"], label: "Insincere", hint: "The definition says 'insincere' -- not genuine." },
    ],
    synonyms: ["insincere", "two-faced", "phony", "deceitful", "duplicitous"],
    partOfSpeech: "adjective",
  },
  {
    word: "idealistic",
    definition: "Characterized by high ideals that may be unrealistic; visionary.",
    keyConcepts: [
      { keyword: "high ideals", matchTerms: ["high", "ideals", "principled", "noble", "lofty", "ambitious"], label: "High ideals", hint: "The definition says 'characterized by high ideals' -- aiming for perfection." },
      { keyword: "may be unrealistic", matchTerms: ["unrealistic", "impractical", "utopian", "naive", "romantic", "quixotic"], label: "May be unrealistic", hint: "The definition says 'that may be unrealistic' -- perhaps not achievable." },
    ],
    synonyms: ["visionary", "utopian", "romantic", "optimistic", "quixotic"],
    partOfSpeech: "adjective",
  },
  {
    word: "illusory",
    definition: "Based on illusion; not real or true despite appearances.",
    keyConcepts: [
      { keyword: "based on illusion", matchTerms: ["illusion", "deceptive", "misleading", "false", "imaginary", "phantom"], label: "Based on illusion", hint: "The definition says 'based on illusion' -- tricks you." },
      { keyword: "not real despite appearances", matchTerms: ["not real", "true", "appearances", "seeming", "apparent", "fake", "fictitious"], label: "Not real despite appearances", hint: "The definition says 'not real or true despite appearances' -- looks real but isn't." },
    ],
    synonyms: ["false", "deceptive", "imaginary", "unreal", "misleading"],
    partOfSpeech: "adjective",
  },
  {
    word: "implausible",
    definition: "Not seeming reasonable or probable; difficult to believe.",
    keyConcepts: [
      { keyword: "not reasonable", matchTerms: ["not reasonable", "probable", "unlikely", "doubtful", "questionable", "dubious"], label: "Not reasonable", hint: "The definition says 'not seeming reasonable or probable' -- doesn't add up." },
      { keyword: "difficult to believe", matchTerms: ["difficult", "believe", "incredible", "far-fetched", "unconvincing", "unbelievable"], label: "Difficult to believe", hint: "The definition says 'difficult to believe' -- hard to accept." },
    ],
    synonyms: ["unlikely", "unbelievable", "unconvincing", "far-fetched", "dubious"],
    partOfSpeech: "adjective",
  },
  {
    word: "inadvertent",
    definition: "Not resulting from or achieved through deliberate planning; unintentional.",
    keyConcepts: [
      { keyword: "not deliberate", matchTerms: ["not deliberat", "planning", "accidental", "unplanned", "unwitting", "chance"], label: "Not deliberate", hint: "The definition says 'not resulting from deliberate planning' -- wasn't meant to happen." },
      { keyword: "unintentional", matchTerms: ["unintentional", "mistake", "oversight", "careless", "thoughtless", "involuntary"], label: "Unintentional", hint: "The definition says 'unintentional' -- by accident." },
    ],
    synonyms: ["unintentional", "accidental", "unplanned", "unwitting", "careless"],
    partOfSpeech: "adjective",
  },
  {
    word: "indiscriminate",
    definition: "Done at random or without careful judgment; not making distinctions.",
    keyConcepts: [
      { keyword: "at random", matchTerms: ["random", "without", "judgment", "haphazard", "arbitrary", "aimless"], label: "At random", hint: "The definition says 'done at random' -- no pattern." },
      { keyword: "not making distinctions", matchTerms: ["not making", "distinction", "undiscriminating", "wholesale", "blanket", "sweeping"], label: "Not making distinctions", hint: "The definition says 'not making distinctions' -- treats everything the same." },
    ],
    synonyms: ["random", "arbitrary", "haphazard", "wholesale", "undiscriminating"],
    partOfSpeech: "adjective",
  },
  {
    word: "inequitable",
    definition: "Unfair or unjust; not treating people equally.",
    keyConcepts: [
      { keyword: "unfair or unjust", matchTerms: ["unfair", "unjust", "biased", "partial", "one-sided", "discriminatory"], label: "Unfair or unjust", hint: "The definition says 'unfair or unjust' -- not right." },
      { keyword: "not treating equally", matchTerms: ["not", "treating", "equal", "unequal", "imbalanced", "disproportionate"], label: "Not treating equally", hint: "The definition says 'not treating people equally' -- some get more than others." },
    ],
    synonyms: ["unfair", "unjust", "unequal", "biased", "partial"],
    partOfSpeech: "adjective",
  },
  {
    word: "inflexible",
    definition: "Unwilling to change or compromise; rigid and unbending.",
    keyConcepts: [
      { keyword: "unwilling to change", matchTerms: ["unwilling", "change", "compromise", "stubborn", "obstinate", "unyielding"], label: "Unwilling to change", hint: "The definition says 'unwilling to change or compromise' -- won't budge." },
      { keyword: "rigid and unbending", matchTerms: ["rigid", "unbending", "stiff", "fixed", "immutable", "immovable"], label: "Rigid and unbending", hint: "The definition says 'rigid and unbending' -- can't be bent." },
    ],
    synonyms: ["rigid", "stubborn", "unyielding", "unbending", "obstinate"],
    partOfSpeech: "adjective",
  },
  {
    word: "inhibited",
    definition: "Unable to act in a relaxed and natural way; restrained or held back.",
    keyConcepts: [
      { keyword: "unable to act naturally", matchTerms: ["unable", "act", "relaxed", "natural", "self-conscious", "uncomfortable"], label: "Unable to act naturally", hint: "The definition says 'unable to act in a relaxed and natural way' -- feeling constrained." },
      { keyword: "restrained", matchTerms: ["restrain", "held back", "repressed", "reserved", "shy", "withdrawn"], label: "Restrained", hint: "The definition says 'restrained or held back' -- holding oneself back." },
    ],
    synonyms: ["reserved", "restrained", "self-conscious", "repressed", "shy"],
    partOfSpeech: "adjective",
  },
  {
    word: "insular",
    definition: "Ignorant of or uninterested in ideas beyond one's own experience; narrow-minded.",
    keyConcepts: [
      { keyword: "ignorant of outside ideas", matchTerms: ["ignorant", "uninterested", "ideas", "outside", "provincial", "parochial"], label: "Ignorant of outside ideas", hint: "The definition says 'ignorant of or uninterested in ideas beyond one's own experience' -- closed off." },
      { keyword: "narrow-minded", matchTerms: ["narrow-minded", "limited", "isolated", "inward-looking", "blinkered", "restricted"], label: "Narrow-minded", hint: "The definition says 'narrow-minded' -- can't see beyond themselves." },
    ],
    synonyms: ["narrow-minded", "provincial", "parochial", "isolated", "limited"],
    partOfSpeech: "adjective",
  },
  {
    word: "intangible",
    definition: "Unable to be touched or grasped; not having physical presence.",
    keyConcepts: [
      { keyword: "unable to be touched", matchTerms: ["unable", "touch", "grasp", "incorporeal", "immaterial", "abstract"], label: "Unable to be touched", hint: "The definition says 'unable to be touched or grasped' -- can't feel it." },
      { keyword: "not physical", matchTerms: ["not physical", "presence", "invisible", "ethereal", "impalpable", "insubstantial"], label: "Not physical", hint: "The definition says 'not having physical presence' -- exists but isn't solid." },
    ],
    synonyms: ["abstract", "immaterial", "incorporeal", "impalpable", "ethereal"],
    partOfSpeech: "adjective",
  },
  {
    word: "intermittent",
    definition: "Occurring at irregular intervals; not continuous or steady.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "interval", "sporadic", "occasional", "periodic", "scattered"], label: "Irregular intervals", hint: "The definition says 'occurring at irregular intervals' -- comes and goes." },
      { keyword: "not continuous", matchTerms: ["not continuous", "steady", "broken", "interrupted", "fitful", "on and off"], label: "Not continuous", hint: "The definition says 'not continuous or steady' -- stops and starts." },
    ],
    synonyms: ["sporadic", "occasional", "irregular", "periodic", "fitful"],
    partOfSpeech: "adjective",
  },
  {
    word: "intrusive",
    definition: "Causing disruption or annoyance through being unwelcome; invasive.",
    keyConcepts: [
      { keyword: "causing disruption", matchTerms: ["caus", "disruption", "annoyance", "disturbing", "bothersome", "interfering"], label: "Causing disruption", hint: "The definition says 'causing disruption or annoyance' -- gets in the way." },
      { keyword: "unwelcome", matchTerms: ["unwelcome", "invasive", "intruding", "pushy", "obtrusive", "prying"], label: "Unwelcome", hint: "The definition says 'through being unwelcome' -- not wanted there." },
    ],
    synonyms: ["invasive", "obtrusive", "interfering", "meddlesome", "pushy"],
    partOfSpeech: "adjective",
  },
  {
    word: "marginalized",
    definition: "Treated as insignificant or peripheral; pushed to the edge of society.",
    keyConcepts: [
      { keyword: "treated as insignificant", matchTerms: ["insignificant", "peripheral", "unimportant", "neglect", "overlook", "dismiss"], label: "Treated as insignificant", hint: "The definition says 'treated as insignificant or peripheral' -- not considered important." },
      { keyword: "edge of society", matchTerms: ["edge", "society", "exclude", "disenfranchise", "sidelined", "ostracize"], label: "Edge of society", hint: "The definition says 'pushed to the edge of society' -- left out." },
    ],
    synonyms: ["excluded", "sidelined", "disenfranchised", "neglected", "overlooked"],
    partOfSpeech: "adjective",
  },
  {
    word: "myriad",
    definition: "A countless or extremely great number; innumerable.",
    keyConcepts: [
      { keyword: "countless number", matchTerms: ["countless", "number", "innumerable", "endless", "infinite", "limitless"], label: "Countless number", hint: "The definition says 'a countless or extremely great number' -- too many to count." },
      { keyword: "extremely great", matchTerms: ["extreme", "great", "vast", "multitude", "numerous", "many"], label: "Extremely great", hint: "The definition says 'extremely great number' -- a huge amount." },
    ],
    synonyms: ["countless", "innumerable", "numerous", "multitudinous", "endless"],
    partOfSpeech: "adjective",
  },
  {
    word: "nuanced",
    definition: "Characterized by subtle distinctions or variations; showing delicate complexity.",
    keyConcepts: [
      { keyword: "subtle distinctions", matchTerms: ["subtle", "distinction", "variation", "fine", "delicate", "gradation"], label: "Subtle distinctions", hint: "The definition says 'characterized by subtle distinctions' -- small but important differences." },
      { keyword: "delicate complexity", matchTerms: ["delicate", "complex", "sophisticated", "refined", "intricate", "layered"], label: "Delicate complexity", hint: "The definition says 'showing delicate complexity' -- many layers of meaning." },
    ],
    synonyms: ["subtle", "refined", "sophisticated", "complex", "intricate"],
    partOfSpeech: "adjective",
  },
  {
    word: "objectionable",
    definition: "Arousing distaste or opposition; offensive or unacceptable.",
    keyConcepts: [
      { keyword: "arousing distaste", matchTerms: ["arous", "distaste", "opposition", "dislik", "disapproval", "repugnant"], label: "Arousing distaste", hint: "The definition says 'arousing distaste or opposition' -- people don't like it." },
      { keyword: "offensive", matchTerms: ["offensive", "unacceptable", "disagreeable", "repulsive", "deplorable", "intolerable"], label: "Offensive", hint: "The definition says 'offensive or unacceptable' -- not okay." },
    ],
    synonyms: ["offensive", "unacceptable", "disagreeable", "repugnant", "deplorable"],
    partOfSpeech: "adjective",
  },
  {
    word: "obstructive",
    definition: "Causing a blockage or obstacle; deliberately creating difficulties.",
    keyConcepts: [
      { keyword: "causing blockage", matchTerms: ["caus", "blockage", "obstacle", "barrier", "hindrance", "impediment"], label: "Causing blockage", hint: "The definition says 'causing a blockage or obstacle' -- in the way." },
      { keyword: "creating difficulties", matchTerms: ["creat", "difficult", "deliberat", "unhelpful", "uncooperative", "thwart"], label: "Creating difficulties", hint: "The definition says 'deliberately creating difficulties' -- making things hard." },
    ],
    synonyms: ["hindering", "blocking", "unhelpful", "impeding", "uncooperative"],
    partOfSpeech: "adjective",
  },
  {
    word: "overbearing",
    definition: "Unpleasantly dominating; attempting to control others in an oppressive way.",
    keyConcepts: [
      { keyword: "unpleasantly dominating", matchTerms: ["unpleasant", "dominat", "control", "bossy", "dictatorial", "imperious"], label: "Unpleasantly dominating", hint: "The definition says 'unpleasantly dominating' -- too controlling." },
      { keyword: "oppressive way", matchTerms: ["oppressive", "way", "heavy-handed", "tyrannical", "autocratic", "high-handed"], label: "Oppressive way", hint: "The definition says 'attempting to control in an oppressive way' -- pushes people around." },
    ],
    synonyms: ["domineering", "bossy", "dictatorial", "imperious", "autocratic"],
    partOfSpeech: "adjective",
  },
  {
    word: "overstated",
    definition: "Expressed too strongly; exaggerated beyond what is accurate.",
    keyConcepts: [
      { keyword: "expressed too strongly", matchTerms: ["express", "too strongly", "excessive", "extreme", "inflated", "overblown"], label: "Expressed too strongly", hint: "The definition says 'expressed too strongly' -- more than necessary." },
      { keyword: "exaggerated", matchTerms: ["exaggerat", "beyond", "accurate", "overemphasiz", "overdone", "embellish"], label: "Exaggerated", hint: "The definition says 'exaggerated beyond what is accurate' -- blown out of proportion." },
    ],
    synonyms: ["exaggerated", "overblown", "inflated", "embellished", "overemphasized"],
    partOfSpeech: "adjective",
  },
  {
    word: "paradoxical",
    definition: "Seemingly absurd or self-contradictory; having contradictory qualities.",
    keyConcepts: [
      { keyword: "seemingly absurd", matchTerms: ["seem", "absurd", "strange", "puzzling", "baffling", "perplexing"], label: "Seemingly absurd", hint: "The definition says 'seemingly absurd or self-contradictory' -- doesn't make sense at first." },
      { keyword: "contradictory qualities", matchTerms: ["contradict", "qualities", "inconsistent", "ironic", "anomalous", "conflicting"], label: "Contradictory qualities", hint: "The definition says 'having contradictory qualities' -- opposites together." },
    ],
    synonyms: ["contradictory", "inconsistent", "ironic", "puzzling", "anomalous"],
    partOfSpeech: "adjective",
  },
  {
    word: "pervasive",
    definition: "Spreading widely throughout an area or group of people; prevalent.",
    keyConcepts: [
      { keyword: "spreading widely", matchTerms: ["spread", "widely", "throughout", "everywhere", "extensive", "far-reaching"], label: "Spreading widely", hint: "The definition says 'spreading widely throughout' -- gets everywhere." },
      { keyword: "prevalent", matchTerms: ["prevalent", "common", "ubiquitous", "omnipresent", "rife", "rampant"], label: "Prevalent", hint: "The definition says 'prevalent' -- found everywhere." },
    ],
    synonyms: ["widespread", "prevalent", "ubiquitous", "omnipresent", "extensive"],
    partOfSpeech: "adjective",
  },
  {
    word: "polarizing",
    definition: "Causing division into two opposing groups; creating strong contrasting positions.",
    keyConcepts: [
      { keyword: "causing division", matchTerms: ["caus", "division", "opposing", "split", "divide", "separate"], label: "Causing division", hint: "The definition says 'causing division into two opposing groups' -- splits people." },
      { keyword: "contrasting positions", matchTerms: ["contrast", "positions", "extreme", "opposed", "conflict", "contentious"], label: "Contrasting positions", hint: "The definition says 'creating strong contrasting positions' -- people take sides." },
    ],
    synonyms: ["divisive", "controversial", "contentious", "splitting", "alienating"],
    partOfSpeech: "adjective",
  },
  {
    word: "presumptive",
    definition: "Based on presumption rather than proof; giving grounds for a belief.",
    keyConcepts: [
      { keyword: "based on presumption", matchTerms: ["based", "presumption", "assumption", "supposed", "probable", "likely"], label: "Based on presumption", hint: "The definition says 'based on presumption rather than proof' -- assumed, not proven." },
      { keyword: "giving grounds for belief", matchTerms: ["grounds", "belief", "infer", "deduc", "reason", "expect"], label: "Giving grounds for belief", hint: "The definition says 'giving grounds for a belief' -- reasonable to assume." },
    ],
    synonyms: ["assumed", "supposed", "probable", "likely", "expected"],
    partOfSpeech: "adjective",
  },
  {
    word: "prohibitive",
    definition: "Serving to forbid or restrict; so high as to prevent purchase or use.",
    keyConcepts: [
      { keyword: "forbid or restrict", matchTerms: ["forbid", "restrict", "prevent", "ban", "bar", "disallow"], label: "Forbid or restrict", hint: "The definition says 'serving to forbid or restrict' -- stops you." },
      { keyword: "so high as to prevent", matchTerms: ["so high", "prevent", "purchase", "use", "cost", "price", "expensive"], label: "So high as to prevent", hint: "The definition says 'so high as to prevent purchase' -- too expensive." },
    ],
    synonyms: ["forbidding", "restrictive", "excessive", "exorbitant", "steep"],
    partOfSpeech: "adjective",
  },
  {
    word: "provisional",
    definition: "Arranged or existing for the present but likely to change; temporary.",
    keyConcepts: [
      { keyword: "for the present", matchTerms: ["present", "now", "current", "interim", "stopgap", "short-term"], label: "For the present", hint: "The definition says 'arranged for the present' -- just for now." },
      { keyword: "likely to change", matchTerms: ["likely", "change", "temporary", "conditional", "tentative", "subject to change"], label: "Likely to change", hint: "The definition says 'but likely to change' -- not permanent." },
    ],
    synonyms: ["temporary", "interim", "tentative", "conditional", "stopgap"],
    partOfSpeech: "adjective",
  },
  {
    word: "reactionary",
    definition: "Opposing political or social progress or reform; extremely conservative.",
    keyConcepts: [
      { keyword: "opposing progress", matchTerms: ["oppos", "progress", "reform", "change", "resist", "anti-reform"], label: "Opposing progress", hint: "The definition says 'opposing political or social progress' -- against change." },
      { keyword: "extremely conservative", matchTerms: ["extreme", "conservative", "regressive", "traditional", "backward-looking", "right-wing"], label: "Extremely conservative", hint: "The definition says 'extremely conservative' -- wants to go back." },
    ],
    synonyms: ["conservative", "traditional", "regressive", "right-wing", "ultraconservative"],
    partOfSpeech: "adjective",
  },
  {
    word: "reconciliatory",
    definition: "Intended to restore friendly relations; aimed at making peace.",
    keyConcepts: [
      { keyword: "restore friendly relations", matchTerms: ["restore", "friendly", "relations", "repair", "mend", "heal"], label: "Restore friendly relations", hint: "The definition says 'intended to restore friendly relations' -- bringing back harmony." },
      { keyword: "making peace", matchTerms: ["peace", "conciliat", "pacify", "appeas", "harmonize", "settle"], label: "Making peace", hint: "The definition says 'aimed at making peace' -- ending conflict." },
    ],
    synonyms: ["conciliatory", "peacemaking", "pacifying", "appeasing", "harmonizing"],
    partOfSpeech: "adjective",
  },
  {
    word: "regressive",
    definition: "Returning to a less developed or earlier state; moving backward.",
    keyConcepts: [
      { keyword: "returning to earlier state", matchTerms: ["return", "earlier", "state", "previous", "former", "revert"], label: "Returning to earlier state", hint: "The definition says 'returning to a less developed or earlier state' -- going back." },
      { keyword: "moving backward", matchTerms: ["moving", "backward", "decline", "retreat", "deteriorat", "retrogress"], label: "Moving backward", hint: "The definition says 'moving backward' -- opposite of progress." },
    ],
    synonyms: ["backward", "retrograde", "declining", "deteriorating", "reverting"],
    partOfSpeech: "adjective",
  },
  {
    word: "resentful",
    definition: "Feeling or expressing bitterness or indignation at being treated unfairly.",
    keyConcepts: [
      { keyword: "feeling bitterness", matchTerms: ["feel", "bitter", "indignation", "anger", "grudge", "hostil"], label: "Feeling bitterness", hint: "The definition says 'feeling or expressing bitterness' -- sour feelings." },
      { keyword: "treated unfairly", matchTerms: ["treated", "unfair", "wronged", "aggrieved", "offended", "hurt"], label: "Treated unfairly", hint: "The definition says 'at being treated unfairly' -- feels wronged." },
    ],
    synonyms: ["bitter", "aggrieved", "indignant", "grudging", "embittered"],
    partOfSpeech: "adjective",
  },
  {
    word: "retaliatory",
    definition: "Characterized by a desire to hurt someone in return for harm done; vengeful.",
    keyConcepts: [
      { keyword: "hurt in return", matchTerms: ["hurt", "return", "harm", "payback", "revenge", "reciprocat"], label: "Hurt in return", hint: "The definition says 'desire to hurt someone in return for harm done' -- getting back at them." },
      { keyword: "vengeful", matchTerms: ["vengeful", "revengeful", "vindictive", "punitive", "reprisal", "counter"], label: "Vengeful", hint: "The definition says 'vengeful' -- wants revenge." },
    ],
    synonyms: ["vengeful", "vindictive", "punitive", "revengeful", "counter"],
    partOfSpeech: "adjective",
  },
  {
    word: "sanctioned",
    definition: "Given official permission or approval; authorized or endorsed.",
    keyConcepts: [
      { keyword: "official permission", matchTerms: ["official", "permission", "approval", "authorized", "legal", "legitimate"], label: "Official permission", hint: "The definition says 'given official permission or approval' -- allowed by authorities." },
      { keyword: "endorsed", matchTerms: ["endorse", "support", "ratif", "approve", "validate", "back"], label: "Endorsed", hint: "The definition says 'authorized or endorsed' -- backed officially." },
    ],
    synonyms: ["authorized", "approved", "endorsed", "permitted", "ratified"],
    partOfSpeech: "adjective",
  },
  {
    word: "substantive",
    definition: "Having a firm basis in reality; important, meaningful, or considerable.",
    keyConcepts: [
      { keyword: "firm basis in reality", matchTerms: ["firm", "basis", "reality", "real", "solid", "tangible", "concrete"], label: "Firm basis in reality", hint: "The definition says 'having a firm basis in reality' -- actually exists." },
      { keyword: "important and meaningful", matchTerms: ["important", "meaningful", "considerable", "significant", "substantial", "weighty"], label: "Important and meaningful", hint: "The definition says 'important, meaningful, or considerable' -- matters." },
    ],
    synonyms: ["significant", "substantial", "meaningful", "considerable", "important"],
    partOfSpeech: "adjective",
  },
  {
    word: "systemic",
    definition: "Relating to a system as a whole; affecting an entire system or organization.",
    keyConcepts: [
      { keyword: "relating to system as whole", matchTerms: ["relat", "system", "whole", "overall", "comprehensive", "total"], label: "Relating to system as whole", hint: "The definition says 'relating to a system as a whole' -- the entire structure." },
      { keyword: "affecting entire system", matchTerms: ["affect", "entire", "organization", "widespread", "pervasive", "institutional"], label: "Affecting entire system", hint: "The definition says 'affecting an entire system' -- throughout everything." },
    ],
    synonyms: ["systematic", "structural", "organizational", "institutional", "pervasive"],
    partOfSpeech: "adjective",
  },
  {
    word: "transactional",
    definition: "Relating to the conducting of business; based on exchange of goods or services.",
    keyConcepts: [
      { keyword: "conducting business", matchTerms: ["conduct", "business", "commerce", "trade", "deal", "commercial"], label: "Conducting business", hint: "The definition says 'relating to the conducting of business' -- about deals." },
      { keyword: "exchange of goods", matchTerms: ["exchange", "goods", "services", "reciprocal", "give-and-take", "quid pro quo"], label: "Exchange of goods", hint: "The definition says 'based on exchange of goods or services' -- trading." },
    ],
    synonyms: ["commercial", "business", "exchange-based", "reciprocal", "mercantile"],
    partOfSpeech: "adjective",
  },
  {
    word: "transformative",
    definition: "Causing a major change in form, nature, or character; revolutionary.",
    keyConcepts: [
      { keyword: "causing major change", matchTerms: ["caus", "major", "change", "dramatic", "profound", "fundamental", "radical"], label: "Causing major change", hint: "The definition says 'causing a major change' -- big transformation." },
      { keyword: "in form or character", matchTerms: ["form", "nature", "character", "revolutionar", "groundbreaking", "game-changing"], label: "In form or character", hint: "The definition says 'in form, nature, or character' -- changes what it is." },
    ],
    synonyms: ["revolutionary", "radical", "groundbreaking", "life-changing", "profound"],
    partOfSpeech: "adjective",
  },
  {
    word: "understated",
    definition: "Presented or expressed with restraint; subtle rather than obvious.",
    keyConcepts: [
      { keyword: "expressed with restraint", matchTerms: ["express", "restraint", "modest", "muted", "low-key", "downplay"], label: "Expressed with restraint", hint: "The definition says 'presented or expressed with restraint' -- not making a big deal." },
      { keyword: "subtle rather than obvious", matchTerms: ["subtle", "rather than", "obvious", "understated", "quiet", "unassuming"], label: "Subtle rather than obvious", hint: "The definition says 'subtle rather than obvious' -- doesn't shout." },
    ],
    synonyms: ["subtle", "restrained", "modest", "muted", "low-key"],
    partOfSpeech: "adjective",
  },
  {
    word: "unfounded",
    definition: "Having no foundation or basis in fact; groundless.",
    keyConcepts: [
      { keyword: "no foundation", matchTerms: ["no foundation", "basis", "fact", "unsupported", "unsubstantiat", "baseless"], label: "No foundation", hint: "The definition says 'having no foundation or basis in fact' -- nothing to support it." },
      { keyword: "groundless", matchTerms: ["groundless", "unwarranted", "unjustified", "idle", "spurious", "fabricat"], label: "Groundless", hint: "The definition says 'groundless' -- no evidence." },
    ],
    synonyms: ["baseless", "groundless", "unsubstantiated", "unsupported", "unwarranted"],
    partOfSpeech: "adjective",
  },
  {
    word: "unsustainable",
    definition: "Not able to be maintained at the current rate or level; not environmentally sound.",
    keyConcepts: [
      { keyword: "not able to be maintained", matchTerms: ["not", "maintain", "current", "rate", "level", "continue", "keep up"], label: "Not able to be maintained", hint: "The definition says 'not able to be maintained at the current rate' -- can't keep going." },
      { keyword: "not environmentally sound", matchTerms: ["environmental", "sound", "viable", "harmful", "depleting", "destructive"], label: "Not environmentally sound", hint: "The definition says 'not environmentally sound' -- bad for the planet." },
    ],
    synonyms: ["untenable", "unviable", "unworkable", "impractical", "harmful"],
    partOfSpeech: "adjective",
  },


  // ===== PDF-SOURCED ENTRIES (183 words) =====

  // [PDF]
  {
    word: "abase",
    definition: "To lower in rank, status, or dignity; to degrade or humble someone.",
    keyConcepts: [
      { keyword: "lower", matchTerms: ["lower", "degrade", "humble", "demean", "diminish", "reduce", "debase", "strip", "dishonor", "belittle", "shame", "disgrace"], label: "To lower in rank", hint: "The definition says 'lower in rank, status, or dignity' — bringing someone down." },
    ],
    synonyms: ["degrade", "humble", "demean", "belittle", "dishonor"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "abdicate",
    definition: "To formally give up a position of power or responsibility, especially a throne.",
    keyConcepts: [
      { keyword: "give up", matchTerms: ["give up", "relinquish", "renounce", "surrender", "abandon", "resign", "step down", "vacate", "yield", "forsake", "forgo", "release"], label: "Give up power", hint: "The definition says 'give up a position of power' — voluntarily stepping away." },
      { keyword: "responsibility", matchTerms: ["responsibility", "duty", "power", "throne", "office", "position", "role", "authority", "obligation", "rule"], label: "Position of responsibility", hint: "The definition says 'power or responsibility' — a formal role being surrendered." },
    ],
    synonyms: ["relinquish", "renounce", "resign", "step down", "yield"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "abeyance",
    definition: "A state of temporary suspension or inactivity; something held in pause.",
    keyConcepts: [
      { keyword: "temporary", matchTerms: ["temporary", "suspension", "pause", "halt", "delay", "inactivity", "dormant", "pending", "interim", "standstill", "waiting", "hold"], label: "Temporary suspension", hint: "The definition says 'temporary suspension or inactivity' — things on hold, not ended." },
    ],
    synonyms: ["suspension", "dormancy", "pause", "hiatus", "standstill"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "abhor",
    definition: "To regard with intense disgust or hatred; to detest completely.",
    keyConcepts: [
      { keyword: "intense disgust", matchTerms: ["disgust", "hatred", "detest", "loathe", "despise", "hate", "abominate", "execrate", "revile", "scorn", "repulse", "repel"], label: "Intense disgust", hint: "The definition says 'intense disgust or hatred' — a visceral, powerful aversion." },
    ],
    synonyms: ["detest", "loathe", "despise", "execrate", "hate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "abjure",
    definition: "To formally renounce or repudiate a belief, claim, or practice, often under oath.",
    keyConcepts: [
      { keyword: "renounce", matchTerms: ["renounce", "repudiate", "recant", "retract", "abandon", "disavow", "forswear", "reject", "deny", "relinquish", "give up", "withdraw"], label: "Formally renounce", hint: "The definition says 'formally renounce' — publicly and solemnly giving something up." },
      { keyword: "oath", matchTerms: ["oath", "sworn", "formal", "official", "legal", "solemn", "vow", "pledge", "binding", "ceremony"], label: "Under oath", hint: "The definition says 'often under oath' — this is a serious, official act." },
    ],
    synonyms: ["renounce", "recant", "retract", "forswear", "repudiate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "abridge",
    definition: "To shorten a text or work by omitting parts while retaining the main ideas.",
    keyConcepts: [
      { keyword: "shorten", matchTerms: ["shorten", "condense", "reduce", "cut", "trim", "compress", "abbreviate", "truncate", "summarize", "edit", "pare", "prune"], label: "To shorten", hint: "The definition says 'shorten by omitting parts' — making something smaller." },
      { keyword: "main ideas", matchTerms: ["main", "idea", "essence", "core", "substance", "meaning", "content", "gist", "point", "spirit", "key", "central"], label: "Retaining main ideas", hint: "The definition says 'retaining the main ideas' — not just cutting but preserving meaning." },
    ],
    synonyms: ["condense", "shorten", "truncate", "abbreviate", "compress"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "abyss",
    definition: "A deep or bottomless chasm; anything profound, immeasurable, or infinite.",
    keyConcepts: [
      { keyword: "bottomless", matchTerms: ["bottomless", "deep", "chasm", "void", "gulf", "depth", "infinite", "immeasurable", "fathomless", "unfathomable", "vast", "profound"], label: "Bottomless depth", hint: "The definition says 'bottomless chasm' — a depth that seems to have no end." },
    ],
    synonyms: ["chasm", "void", "gulf", "depth", "pit"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "activism",
    definition: "The use of vigorous action and campaigns to achieve political or social change.",
    keyConcepts: [
      { keyword: "vigorous action", matchTerms: ["action", "campaign", "advocacy", "protest", "movement", "activism", "agitation", "effort", "push", "drive", "fight", "cause"], label: "Vigorous action", hint: "The definition says 'vigorous action and campaigns' — active, energetic effort." },
      { keyword: "change", matchTerms: ["change", "reform", "progress", "social", "political", "transformation", "justice", "rights", "movement", "cause", "goal"], label: "To achieve change", hint: "The definition says 'achieve political or social change' — the purpose of the action." },
    ],
    synonyms: ["advocacy", "campaigning", "agitation", "protest", "reform"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "acumen",
    definition: "The ability to make quick, accurate judgments; keen insight and good sense.",
    keyConcepts: [
      { keyword: "keen insight", matchTerms: ["insight", "judgment", "acuity", "shrewdness", "perception", "discernment", "intelligence", "wisdom", "astuteness", "perspicacity", "sharpness", "wit"], label: "Keen insight", hint: "The definition says 'keen insight and good sense' — sharp mental perception." },
      { keyword: "quick", matchTerms: ["quick", "sharp", "rapid", "fast", "immediate", "instant", "prompt", "ready", "alert", "nimble", "astute", "clever"], label: "Quick judgment", hint: "The definition says 'quick, accurate judgments' — speed combined with accuracy." },
    ],
    synonyms: ["shrewdness", "astuteness", "discernment", "perspicacity", "sharpness"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "adhere",
    definition: "To stick firmly to a surface, belief, or plan; to follow closely without deviation.",
    keyConcepts: [
      { keyword: "stick", matchTerms: ["stick", "cling", "attach", "hold", "bond", "bind", "follow", "comply", "observe", "keep", "maintain", "uphold"], label: "To stick or cling", hint: "The definition says 'stick firmly' — remaining fixed whether physically or in principle." },
    ],
    synonyms: ["stick", "cling", "comply", "follow", "observe"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "admonish",
    definition: "To warn or reprimand someone firmly but not harshly; to caution or advise.",
    keyConcepts: [
      { keyword: "warn", matchTerms: ["warn", "reprimand", "caution", "advise", "rebuke", "scold", "counsel", "urge", "remind", "chide", "correct", "reproach"], label: "To warn or reprimand", hint: "The definition says 'warn or reprimand' — a correction delivered with care." },
      { keyword: "firmly", matchTerms: ["firmly", "firmly but", "not harshly", "gentle", "mild", "earnest", "serious", "direct", "sincere", "measured"], label: "Done firmly", hint: "The definition says 'firmly but not harshly' — the tone is serious but not cruel." },
    ],
    synonyms: ["reprimand", "caution", "rebuke", "counsel", "warn"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "affable",
    definition: "Friendly, good-natured, and easy to talk to; pleasant in manner.",
    keyConcepts: [
      { keyword: "friendly", matchTerms: ["friendly", "pleasant", "warm", "approachable", "genial", "amiable", "congenial", "sociable", "agreeable", "good-natured", "personable", "welcoming"], label: "Friendly and warm", hint: "The definition says 'friendly, good-natured' — radiating warmth and openness." },
    ],
    synonyms: ["amiable", "genial", "congenial", "approachable", "personable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "affectation",
    definition: "Behavior or speech adopted to impress others that is artificial or insincere.",
    keyConcepts: [
      { keyword: "artificial", matchTerms: ["artificial", "insincere", "fake", "pretentious", "contrived", "affected", "mannered", "unnatural", "put-on", "performed", "forced", "phony"], label: "Artificial behavior", hint: "The definition says 'artificial or insincere' — it's a pose, not genuine." },
      { keyword: "impress", matchTerms: ["impress", "appearance", "effect", "image", "show", "display", "performance", "pretense", "posture", "seem", "appear", "project"], label: "To impress others", hint: "The definition says 'adopted to impress others' — the behavior is for an audience." },
    ],
    synonyms: ["pretension", "pose", "artificiality", "mannerism", "insincerity"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "aggrandize",
    definition: "To make something appear greater or more important than it actually is; to exaggerate.",
    keyConcepts: [
      { keyword: "greater", matchTerms: ["greater", "larger", "bigger", "important", "exaggerate", "inflate", "magnify", "enhance", "boost", "elevate", "overstate", "glorify"], label: "Make appear greater", hint: "The definition says 'appear greater or more important' — inflating beyond reality." },
    ],
    synonyms: ["exaggerate", "inflate", "magnify", "overstate", "glorify"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "alacrity",
    definition: "Brisk and cheerful readiness; eager willingness to act without hesitation.",
    keyConcepts: [
      { keyword: "cheerful readiness", matchTerms: ["readiness", "eagerness", "willingness", "enthusiasm", "promptness", "speed", "zeal", "keenness", "briskness", "quickness", "alacrity", "sprightliness"], label: "Cheerful readiness", hint: "The definition says 'brisk and cheerful readiness' — enthusiastic and quick." },
    ],
    synonyms: ["eagerness", "readiness", "enthusiasm", "promptness", "willingness"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "alienate",
    definition: "To cause someone to feel isolated, hostile, or estranged from a person or group.",
    keyConcepts: [
      { keyword: "isolated", matchTerms: ["isolat", "estrang", "distant", "hostile", "unfriendly", "detach", "separate", "cut off", "push away", "withdraw", "excluded", "marginalized"], label: "Cause isolation", hint: "The definition says 'feel isolated or estranged' — creating distance and disconnection." },
    ],
    synonyms: ["estrange", "isolate", "distance", "detach", "ostracize"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "amalgamate",
    definition: "To combine or unite separate elements into a single unified whole.",
    keyConcepts: [
      { keyword: "combine", matchTerms: ["combine", "unite", "merge", "blend", "fuse", "integrate", "consolidate", "join", "incorporate", "unify", "pool", "mix"], label: "To combine", hint: "The definition says 'combine or unite' — bringing separate things together." },
      { keyword: "unified whole", matchTerms: ["unified", "whole", "single", "one", "together", "complete", "cohesive", "integrated", "collective", "combined", "total"], label: "Into a unified whole", hint: "The definition says 'single unified whole' — the result is one integrated thing." },
    ],
    synonyms: ["merge", "unite", "combine", "fuse", "integrate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "ameliorate",
    definition: "To make a bad or unsatisfactory situation better or more bearable.",
    keyConcepts: [
      { keyword: "better", matchTerms: ["better", "improve", "relieve", "ease", "alleviate", "mitigate", "enhance", "upgrade", "amend", "reform", "remedy", "help"], label: "Make better", hint: "The definition says 'make better or more bearable' — improving without necessarily fixing." },
    ],
    synonyms: ["improve", "alleviate", "mitigate", "relieve", "better"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "anachronism",
    definition: "Something that belongs to a different time period and is out of place in the present.",
    keyConcepts: [
      { keyword: "different time", matchTerms: ["time", "period", "era", "age", "epoch", "historical", "outdated", "out of place", "wrong era", "past", "misplaced", "belongs"], label: "Wrong time period", hint: "The definition says 'belongs to a different time period' — displaced in history." },
      { keyword: "out of place", matchTerms: ["out of place", "incongruous", "misplaced", "inappropriate", "inconsistent", "anachronistic", "jarring", "odd", "strange", "unsuitable"], label: "Out of place", hint: "The definition says 'out of place in the present' — it doesn't fit its current context." },
    ],
    synonyms: ["archaism", "relic", "throwback", "incongruity", "misplacement"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "analogous",
    definition: "Comparable in function or structure to something else; serving as a useful analogy.",
    keyConcepts: [
      { keyword: "comparable", matchTerms: ["comparable", "similar", "parallel", "equivalent", "corresponding", "like", "akin", "related", "resembling", "analogous", "alike", "matching"], label: "Comparable", hint: "The definition says 'comparable in function or structure' — having meaningful similarity." },
    ],
    synonyms: ["comparable", "similar", "parallel", "equivalent", "corresponding"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "precursor",
    definition: "A thing that comes before and signals or leads to something that follows.",
    keyConcepts: [
      { keyword: "comes before", matchTerms: ["before", "precede", "prior", "earlier", "ahead", "leading", "preliminary", "forerunner", "predecessor", "antecedent", "advance", "herald"], label: "Comes before", hint: "The definition says 'comes before' — it arrives ahead of what it announces." },
      { keyword: "signals", matchTerms: ["signals", "indicates", "announces", "heralds", "foreshadows", "suggests", "portends", "warns", "hints", "presages", "leads to", "points toward"], label: "Signals what follows", hint: "The definition says 'signals or leads to something that follows' — it's not just a chronological predecessor but a meaningful one." },
    ],
    synonyms: ["forerunner", "harbinger", "herald", "antecedent", "predecessor"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "prescient",
    definition: "Having or showing knowledge of events before they take place; far-sighted.",
    keyConcepts: [
      { keyword: "knowledge of events before", matchTerms: ["knowledge", "events", "before", "foresight", "predict", "prophetic", "clairvoyant", "visionary", "anticipate", "foresee", "ahead", "future"], label: "Knowledge before events", hint: "The definition says 'knowledge of events before they take place' — knowing what hasn't happened yet." },
    ],
    synonyms: ["prophetic", "far-sighted", "visionary", "clairvoyant", "farsighted"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "presumptuous",
    definition: "Failing to observe proper boundaries; behaving too boldly and overstepping one's place.",
    keyConcepts: [
      { keyword: "overstepping", matchTerms: ["overstepping", "transgressing", "exceeding", "crossing lines", "bold", "forward", "impertinent", "audacious", "arrogant", "brash", "improper", "insolent"], label: "Overstepping", hint: "The definition says 'overstepping one's place' — going beyond what is appropriate." },
      { keyword: "proper boundaries", matchTerms: ["boundaries", "limits", "place", "role", "propriety", "decorum", "etiquette", "convention", "permission", "authority", "scope", "appropriate"], label: "Proper boundaries", hint: "The definition says 'failing to observe proper boundaries' — there are recognized limits being ignored." },
    ],
    synonyms: ["arrogant", "bold", "impertinent", "audacious", "forward"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "prevaricate",
    definition: "To speak or act in an evasive way so as to avoid telling the full truth.",
    keyConcepts: [
      { keyword: "evasive", matchTerms: ["evasive", "equivocate", "dodge", "avoid", "hedge", "evade", "sidestep", "mislead", "distort", "obscure", "obfuscate", "weasel"], label: "Evasive", hint: "The definition says 'in an evasive way' — not direct, not forthcoming." },
      { keyword: "avoid telling the truth", matchTerms: ["avoid truth", "deceive", "mislead", "equivocate", "lie", "fudge", "twist", "conceal", "withhold", "distort", "shade", "spin"], label: "Avoid telling truth", hint: "The definition says 'avoid telling the full truth' — there is something being withheld or distorted." },
    ],
    synonyms: ["equivocate", "hedge", "evade", "dissemble", "obfuscate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "principled",
    definition: "Acting according to moral rules and strong personal values; guided by principle.",
    keyConcepts: [
      { keyword: "moral rules", matchTerms: ["moral", "ethics", "values", "principles", "standards", "beliefs", "integrity", "conscience", "virtue", "honor", "righteousness", "code"], label: "Moral rules", hint: "The definition says 'moral rules and strong personal values' — behavior guided by an internal ethical code." },
      { keyword: "guided by principle", matchTerms: ["guided", "principle", "conviction", "consistent", "firm", "steadfast", "unwavering", "incorruptible", "honest", "upright", "strict", "reliable"], label: "Guided by principle", hint: "The definition says 'guided by principle' — the values direct behavior, not convenience or self-interest." },
    ],
    synonyms: ["ethical", "moral", "honorable", "upright", "virtuous"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "proclivity",
    definition: "A natural tendency or inclination toward a particular behavior or interest.",
    keyConcepts: [
      { keyword: "natural tendency", matchTerms: ["tendency", "inclination", "predisposition", "leaning", "penchant", "propensity", "bent", "predilection", "disposition", "liking", "preference", "impulse"], label: "Natural tendency", hint: "The definition says 'natural tendency' — something one gravitates toward without necessarily choosing to." },
    ],
    synonyms: ["tendency", "inclination", "predisposition", "propensity", "penchant"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "prodigious",
    definition: "Remarkably large or impressive in amount, extent, or degree; extraordinary.",
    keyConcepts: [
      { keyword: "remarkably large", matchTerms: ["remarkably large", "impressive", "enormous", "exceptional", "extraordinary", "stupendous", "immense", "vast", "tremendous", "considerable", "monumental", "staggering"], label: "Remarkably large", hint: "The definition says 'remarkably large or impressive' — it exceeds what is expected." },
    ],
    synonyms: ["extraordinary", "exceptional", "enormous", "impressive", "remarkable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "profound",
    definition: "Having deep insight or understanding; intellectually demanding and significant.",
    keyConcepts: [
      { keyword: "deep insight", matchTerms: ["deep", "insight", "understanding", "knowledge", "wisdom", "penetrating", "perceptive", "thoughtful", "weighty", "serious", "substantive", "meaningful"], label: "Deep insight", hint: "The definition says 'deep insight or understanding' — going far below the surface." },
    ],
    synonyms: ["deep", "insightful", "weighty", "meaningful", "penetrating"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "proliferate",
    definition: "To increase rapidly in number or extent; to multiply and spread quickly.",
    keyConcepts: [
      { keyword: "increase rapidly", matchTerms: ["increase rapidly", "multiply", "spread", "expand", "grow", "explode", "surge", "balloon", "escalate", "propagate", "reproduce", "burgeon"], label: "Increase rapidly", hint: "The definition says 'increase rapidly in number' — fast growth, not slow accumulation." },
    ],
    synonyms: ["multiply", "spread", "expand", "burgeon", "propagate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "propensity",
    definition: "An inclination or tendency to behave in a particular way; a natural disposition.",
    keyConcepts: [
      { keyword: "inclination", matchTerms: ["inclination", "tendency", "disposition", "predisposition", "bent", "leaning", "penchant", "proclivity", "habit", "impulse", "readiness", "appetite"], label: "Inclination", hint: "The definition says 'inclination or tendency to behave' — a pull toward certain actions." },
    ],
    synonyms: ["tendency", "inclination", "predisposition", "proclivity", "disposition"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "prosaic",
    definition: "Having the style of ordinary, factual writing; commonplace and unromantic.",
    keyConcepts: [
      { keyword: "commonplace", matchTerms: ["commonplace", "ordinary", "dull", "mundane", "unimaginative", "pedestrian", "plain", "flat", "routine", "uninspiring", "humdrum", "banal"], label: "Commonplace and dull", hint: "The definition says 'commonplace and unromantic' — nothing elevated or interesting." },
    ],
    synonyms: ["mundane", "ordinary", "pedestrian", "dull", "unremarkable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "prudent",
    definition: "Acting with care and wise judgment about the future; practical and cautious.",
    keyConcepts: [
      { keyword: "wise judgment", matchTerms: ["wise", "judgment", "careful", "thoughtful", "sensible", "judicious", "discerning", "deliberate", "foresighted", "cautious", "calculating", "measured"], label: "Wise judgment", hint: "The definition says 'wise judgment about the future' — thinking ahead and weighing consequences." },
    ],
    synonyms: ["wise", "cautious", "judicious", "sensible", "circumspect"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "puerile",
    definition: "Childishly silly and immature; not deserving serious consideration.",
    keyConcepts: [
      { keyword: "childishly", matchTerms: ["childish", "immature", "juvenile", "infantile", "silly", "naive", "unsophisticated", "simple-minded", "petty", "trivial", "foolish", "irresponsible"], label: "Childishly immature", hint: "The definition says 'childishly silly and immature' — the behavior is beneath adulthood." },
    ],
    synonyms: ["childish", "immature", "juvenile", "infantile", "silly"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "quandary",
    definition: "A state of uncertainty or confusion about what to do in a difficult situation.",
    keyConcepts: [
      { keyword: "uncertainty", matchTerms: ["uncertainty", "confusion", "indecision", "dilemma", "perplexity", "doubt", "puzzlement", "hesitation", "difficulty", "predicament", "stalemate", "limbo"], label: "Uncertainty", hint: "The definition says 'uncertainty or confusion' — not knowing which way to go." },
      { keyword: "difficult situation", matchTerms: ["difficult", "situation", "problem", "predicament", "bind", "fix", "spot", "challenge", "impasse", "crossroads", "crisis", "trouble"], label: "Difficult situation", hint: "The definition says 'in a difficult situation' — the quandary arises from something genuinely hard." },
    ],
    synonyms: ["dilemma", "predicament", "uncertainty", "perplexity", "impasse"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "recalcitrant",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "uncooperative", matchTerms: ["uncooperative", "resistant", "defiant", "disobedient", "rebellious", "obstinate", "stubborn", "refractory", "intractable", "recalcitrant", "headstrong", "contrary"], label: "Uncooperative", hint: "The definition says 'obstinately uncooperative' — actively refusing to go along." },
      { keyword: "authority", matchTerms: ["authority", "discipline", "control", "rules", "supervision", "management", "order", "hierarchy", "institution", "power", "establishment", "structure"], label: "Toward authority", hint: "The definition says 'toward authority or discipline' — the resistance is directed at those in charge." },
    ],
    synonyms: ["defiant", "uncooperative", "rebellious", "obstinate", "refractory"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "recant",
    definition: "To withdraw or disavow a previously held statement or belief, often publicly.",
    keyConcepts: [
      { keyword: "withdraw", matchTerms: ["withdraw", "disavow", "retract", "renounce", "take back", "repudiate", "reverse", "rescind", "abandon", "abjure", "forswear", "revoke"], label: "Withdraw", hint: "The definition says 'withdraw or disavow' — taking back what was said or believed." },
      { keyword: "previously held", matchTerms: ["previously held", "earlier", "former", "past", "prior", "once-stated", "original", "old", "established", "stated", "expressed", "declared"], label: "Previously held belief", hint: "The definition says 'previously held statement or belief' — there is a reversal from a prior position." },
    ],
    synonyms: ["retract", "withdraw", "renounce", "disavow", "repudiate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "rhetoric",
    definition: "The art of persuasive speaking or writing; language designed to have a persuasive effect.",
    keyConcepts: [
      { keyword: "persuasive", matchTerms: ["persuasive", "convincing", "compelling", "eloquent", "effective", "influential", "impactful", "forceful", "moving", "stirring", "appealing", "affecting"], label: "Persuasive", hint: "The definition says 'persuasive speaking or writing' — the goal is to influence the audience." },
      { keyword: "language", matchTerms: ["language", "speech", "writing", "discourse", "words", "expression", "style", "diction", "prose", "oration", "text", "argument"], label: "Use of language", hint: "The definition says 'language designed to have a persuasive effect' — it's about how language is crafted and deployed." },
    ],
    synonyms: ["oratory", "eloquence", "persuasion", "discourse", "speechcraft"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "sanguine",
    definition: "Optimistic and positive, especially in a difficult or worrying situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimistic", "hopeful", "positive", "confident", "cheerful", "upbeat", "buoyant", "encouraged", "expectant", "assured", "bright", "bullish"], label: "Optimistic", hint: "The definition says 'optimistic and positive' — looking on the bright side." },
      { keyword: "difficult situation", matchTerms: ["difficult", "worrying", "challenging", "adverse", "trying", "hard", "uncertain", "troubled", "crisis", "hardship", "despite circumstances", "against odds"], label: "In a difficult situation", hint: "The definition says 'especially in a difficult or worrying situation' — the optimism persists even when things are bad." },
    ],
    synonyms: ["optimistic", "hopeful", "positive", "confident", "upbeat"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "saturate",
    definition: "To fill something completely so that no more can be absorbed; to soak thoroughly.",
    keyConcepts: [
      { keyword: "fill completely", matchTerms: ["fill completely", "soak", "drench", "flood", "permeate", "suffuse", "imbue", "steep", "inundate", "overwhelm", "overload", "pervade"], label: "Fill completely", hint: "The definition says 'fill something completely' — beyond full, to the point of overflow." },
    ],
    synonyms: ["soak", "drench", "permeate", "flood", "suffuse"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "scintilla",
    definition: "A tiny trace or spark of something; an extremely small amount.",
    keyConcepts: [
      { keyword: "tiny trace", matchTerms: ["tiny", "trace", "spark", "bit", "iota", "jot", "hint", "shred", "particle", "grain", "atom", "flicker"], label: "Tiny trace", hint: "The definition says 'tiny trace or spark' — the smallest possible presence of something." },
    ],
    synonyms: ["trace", "iota", "particle", "hint", "shred"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "sporadic",
    definition: "Occurring at irregular intervals and not in a regular pattern; scattered and occasional.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "occasional", "intermittent", "scattered", "infrequent", "random", "unpredictable", "patchy", "on and off", "inconsistent", "erratic", "fitful"], label: "Irregular intervals", hint: "The definition says 'irregular intervals' — it happens sometimes but not on any dependable schedule." },
    ],
    synonyms: ["intermittent", "occasional", "irregular", "scattered", "fitful"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "stymie",
    definition: "To block or hinder the progress of someone or something; to prevent advancement.",
    keyConcepts: [
      { keyword: "block", matchTerms: ["block", "hinder", "obstruct", "thwart", "impede", "prevent", "stop", "frustrate", "hamper", "foil", "check", "derail"], label: "To block", hint: "The definition says 'block or hinder the progress' — putting an obstacle in the way." },
    ],
    synonyms: ["hinder", "obstruct", "thwart", "impede", "frustrate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "sublime",
    definition: "Of such excellence and beauty as to inspire awe; elevated and majestic in quality.",
    keyConcepts: [
      { keyword: "inspire awe", matchTerms: ["inspire awe", "awe-inspiring", "breathtaking", "transcendent", "majestic", "magnificent", "elevated", "exalted", "overwhelming", "stunning", "reverential", "overpowering"], label: "Inspire awe", hint: "The definition says 'inspire awe' — it elevates the observer beyond the ordinary." },
      { keyword: "excellence and beauty", matchTerms: ["excellence", "beauty", "perfection", "nobility", "grandeur", "greatness", "magnificence", "splendor", "glory", "ideal", "supreme", "ultimate"], label: "Excellence and beauty", hint: "The definition says 'excellence and beauty' — the quality is both morally and aesthetically elevated." },
    ],
    synonyms: ["transcendent", "majestic", "exalted", "magnificent", "awe-inspiring"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "substantiate",
    definition: "To provide evidence to support or prove the truth of something.",
    keyConcepts: [
      { keyword: "provide evidence", matchTerms: ["provide evidence", "prove", "support", "verify", "confirm", "corroborate", "validate", "demonstrate", "establish", "back up", "justify", "document"], label: "Provide evidence", hint: "The definition says 'provide evidence to support' — making claims credible through proof." },
      { keyword: "truth", matchTerms: ["truth", "validity", "accuracy", "claim", "assertion", "argument", "statement", "hypothesis", "contention", "allegation", "position", "belief"], label: "Support the truth", hint: "The definition says 'support or prove the truth' — the goal is establishing that something is real or correct." },
    ],
    synonyms: ["prove", "verify", "corroborate", "confirm", "support"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "supplant",
    definition: "To take the place of someone or something, especially by force or cunning.",
    keyConcepts: [
      { keyword: "take the place of", matchTerms: ["take the place of", "replace", "displace", "oust", "supersede", "succeed", "substitute", "unseat", "overthrow", "remove", "usurp", "dislodge"], label: "Take the place of", hint: "The definition says 'take the place of' — what was there before is now gone." },
      { keyword: "force or cunning", matchTerms: ["force", "cunning", "scheming", "deception", "manipulation", "treachery", "plotting", "strategy", "underhanded", "sneaky", "calculated", "deliberate"], label: "By force or cunning", hint: "The definition says 'especially by force or cunning' — the replacement is not straightforward or fair." },
    ],
    synonyms: ["replace", "oust", "displace", "supersede", "usurp"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "tacit",
    definition: "Understood or implied without being directly stated; silently assumed.",
    keyConcepts: [
      { keyword: "implied", matchTerms: ["implied", "unstated", "unspoken", "understood", "assumed", "inferred", "indirect", "covert", "silent", "unvoiced", "unexpressed", "read between the lines"], label: "Implied without stating", hint: "The definition says 'implied without being directly stated' — meaning exists but no words convey it explicitly." },
    ],
    synonyms: ["implied", "unspoken", "understood", "implicit", "unstated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "ubiquitous",
    definition: "Present, appearing, or found everywhere at the same time.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "omnipresent", "pervasive", "universal", "all-pervasive", "rampant", "widespread", "prevalent", "constant", "inescapable", "unavoidable", "saturating"], label: "Found everywhere", hint: "The definition says 'found everywhere' — there is no escaping its presence." },
    ],
    synonyms: ["omnipresent", "pervasive", "universal", "widespread", "inescapable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "unprecedented",
    definition: "Never done or known before; having no prior example or parallel in history.",
    keyConcepts: [
      { keyword: "never done before", matchTerms: ["never done before", "first", "new", "novel", "original", "unique", "singular", "historic", "groundbreaking", "uncharted", "path-breaking", "first-ever"], label: "Never done before", hint: "The definition says 'never done or known before' — there is no comparable case." },
      { keyword: "no prior example", matchTerms: ["no prior example", "unparalleled", "unmatched", "without precedent", "new ground", "first time", "no comparison", "history", "record", "benchmark", "baseline", "reference"], label: "No prior example", hint: "The definition says 'no prior example or parallel' — there is nothing to compare it to." },
    ],
    synonyms: ["unparalleled", "unheard-of", "novel", "historic", "first"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "anarchy",
    definition: "A state of disorder due to the absence of authority or government control.",
    keyConcepts: [
      { keyword: "disorder", matchTerms: ["disorder", "chaos", "lawlessness", "turmoil", "upheaval", "confusion", "mayhem", "anarchy", "unrest", "instability", "pandemonium", "bedlam"], label: "State of disorder", hint: "The definition says 'state of disorder' — breakdown of structure and control." },
      { keyword: "absence", matchTerms: ["absence", "lack", "without", "no", "removal", "void", "breakdown", "collapse", "failure", "overthrow", "abolition"], label: "Absence of authority", hint: "The definition says 'absence of authority' — disorder arises because nothing is in charge." },
    ],
    synonyms: ["chaos", "lawlessness", "disorder", "mayhem", "bedlam"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "annul",
    definition: "To declare invalid or legally void; to cancel or abolish an official agreement.",
    keyConcepts: [
      { keyword: "invalid", matchTerms: ["invalid", "void", "null", "cancel", "abolish", "nullify", "repeal", "revoke", "rescind", "terminate", "dissolve", "invalidate"], label: "Declare invalid", hint: "The definition says 'declare invalid or legally void' — erasing its legal effect." },
    ],
    synonyms: ["nullify", "void", "cancel", "revoke", "rescind"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "antagonize",
    definition: "To cause someone to become hostile or unfriendly; to provoke or irritate.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostile", "unfriendly", "provoke", "irritate", "aggravate", "alienate", "anger", "offend", "incite", "inflame", "upset", "arouse"], label: "Cause hostility", hint: "The definition says 'become hostile or unfriendly' — creating opposition or enmity." },
    ],
    synonyms: ["provoke", "alienate", "irritate", "aggravate", "incense"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "antithetical",
    definition: "Directly opposed or contrasted; being the exact opposite of something.",
    keyConcepts: [
      { keyword: "directly opposed", matchTerms: ["opposed", "opposite", "contrary", "contradictory", "conflicting", "antithetical", "incompatible", "at odds", "counter", "inverse", "reverse", "contrasted"], label: "Directly opposed", hint: "The definition says 'directly opposed or contrasted' — not just different but fundamentally contrary." },
    ],
    synonyms: ["contrary", "opposed", "contradictory", "incompatible", "opposite"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "arbiter",
    definition: "A person empowered to judge or settle a dispute; one whose authority is final.",
    keyConcepts: [
      { keyword: "judge", matchTerms: ["judge", "arbitrate", "settle", "decide", "umpire", "referee", "mediator", "authority", "adjudicate", "rule", "determine", "resolve"], label: "One who judges", hint: "The definition says 'judge or settle a dispute' — an authoritative decision-maker." },
      { keyword: "final", matchTerms: ["final", "ultimate", "authoritative", "supreme", "definitive", "conclusive", "decisive", "binding", "absolute", "unquestioned", "unchallenged"], label: "Final authority", hint: "The definition says 'authority is final' — there is no appeal beyond this person." },
    ],
    synonyms: ["judge", "mediator", "adjudicator", "umpire", "referee"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "arcane",
    definition: "Known or understood by only a few; mysterious, secret, or esoteric.",
    keyConcepts: [
      { keyword: "few", matchTerms: ["few", "select", "limited", "exclusive", "obscure", "specialist", "insider", "privileged", "initiated", "rare", "hidden", "secret"], label: "Known by few", hint: "The definition says 'known by only a few' — not common or widely accessible knowledge." },
      { keyword: "mysterious", matchTerms: ["mysterious", "secret", "esoteric", "cryptic", "occult", "obscure", "hidden", "enigmatic", "abstruse", "recondite", "inscrutable", "unknowable"], label: "Mysterious quality", hint: "The definition says 'mysterious or secret' — there's an air of the unknowable." },
    ],
    synonyms: ["esoteric", "mysterious", "obscure", "cryptic", "recondite"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "archaic",
    definition: "Belonging to an earlier period; no longer in common use or outdated.",
    keyConcepts: [
      { keyword: "earlier period", matchTerms: ["earlier", "old", "ancient", "past", "historical", "bygone", "former", "antique", "dated", "vintage", "traditional", "obsolete"], label: "Earlier period", hint: "The definition says 'belonging to an earlier period' — it comes from a different age." },
      { keyword: "outdated", matchTerms: ["outdated", "obsolete", "old-fashioned", "antiquated", "superseded", "disused", "extinct", "defunct", "outmoded", "archaic", "no longer used", "stale"], label: "No longer used", hint: "The definition says 'no longer in common use' — it has been left behind." },
    ],
    synonyms: ["antiquated", "obsolete", "ancient", "outdated", "outmoded"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "arduous",
    definition: "Requiring great effort or exertion; extremely difficult and tiring.",
    keyConcepts: [
      { keyword: "great effort", matchTerms: ["effort", "exertion", "labor", "struggle", "toil", "work", "energy", "difficulty", "taxing", "demanding", "challenging", "strenuous"], label: "Requiring great effort", hint: "The definition says 'requiring great effort or exertion' — it takes a lot out of you." },
    ],
    synonyms: ["strenuous", "grueling", "laborious", "exhausting", "demanding"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "articulate",
    definition: "Able to express ideas clearly and fluently; skilled at using language effectively.",
    keyConcepts: [
      { keyword: "express", matchTerms: ["express", "communicate", "speak", "convey", "explain", "describe", "voice", "articulate", "state", "present", "phrase", "put into words"], label: "Able to express", hint: "The definition says 'express ideas clearly' — translating thought into effective language." },
      { keyword: "clearly", matchTerms: ["clearly", "fluently", "effectively", "well", "precisely", "coherently", "distinctly", "eloquently", "skillfully", "lucidly", "logically", "persuasively"], label: "Clearly and fluently", hint: "The definition says 'clearly and fluently' — not just expressing but doing so with ease and precision." },
    ],
    synonyms: ["eloquent", "fluent", "expressive", "lucid", "coherent"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "artifact",
    definition: "An object made by humans, especially one of historical or cultural significance.",
    keyConcepts: [
      { keyword: "made by humans", matchTerms: ["made", "crafted", "created", "produced", "manufactured", "constructed", "fashioned", "handmade", "man-made", "human", "cultural", "historical"], label: "Made by humans", hint: "The definition says 'made by humans' — distinguishing it from natural objects." },
      { keyword: "historical", matchTerms: ["historical", "cultural", "significance", "ancient", "archaeological", "relic", "remnant", "heritage", "past", "tradition", "old", "excavated"], label: "Historical significance", hint: "The definition says 'historical or cultural significance' — valued for its connection to the past." },
    ],
    synonyms: ["relic", "remnant", "object", "item", "creation"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "artless",
    definition: "Without cunning or deception; natural and sincere; free from artifice.",
    keyConcepts: [
      { keyword: "without deception", matchTerms: ["without deception", "sincere", "natural", "genuine", "innocent", "naive", "open", "honest", "unaffected", "candid", "transparent", "unpretentious"], label: "Without deception", hint: "The definition says 'without cunning or deception' — nothing hidden or calculated." },
    ],
    synonyms: ["genuine", "sincere", "naive", "ingenuous", "unpretentious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "ascertain",
    definition: "To find out something with certainty; to discover a fact definitively.",
    keyConcepts: [
      { keyword: "certainty", matchTerms: ["certainty", "certain", "definitive", "confirm", "verify", "establish", "determine", "discover", "learn", "find out", "ascertain", "prove"], label: "Find out with certainty", hint: "The definition says 'with certainty' — not guessing but confirming beyond doubt." },
    ],
    synonyms: ["determine", "confirm", "verify", "establish", "discover"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "ascetic",
    definition: "Characterized by severe self-discipline and abstention from physical pleasures.",
    keyConcepts: [
      { keyword: "self-discipline", matchTerms: ["self-discipline", "abstinence", "austere", "spartan", "strict", "denial", "restraint", "frugal", "simple", "rigorous", "puritanical", "severe"], label: "Severe self-discipline", hint: "The definition says 'severe self-discipline' — an unusually strict approach to life." },
      { keyword: "pleasures", matchTerms: ["pleasure", "comfort", "luxury", "indulgence", "physical", "sensual", "material", "enjoyment", "gratification", "desire", "appetite", "want"], label: "Abstention from pleasures", hint: "The definition says 'abstention from physical pleasures' — deliberately avoiding comforts." },
    ],
    synonyms: ["austere", "spartan", "abstemious", "self-denying", "puritanical"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "assiduous",
    definition: "Showing great care, attention, and persistent effort in one's work.",
    keyConcepts: [
      { keyword: "persistent", matchTerms: ["persistent", "diligent", "tireless", "industrious", "dedicated", "hard-working", "thorough", "careful", "attentive", "meticulous", "conscientious", "steadfast"], label: "Persistent effort", hint: "The definition says 'persistent effort' — keeping at it without giving up." },
      { keyword: "care", matchTerms: ["care", "attention", "detail", "thoroughness", "precision", "exactness", "caution", "watchfulness", "application", "devotion", "focus", "commitment"], label: "Great care", hint: "The definition says 'great care and attention' — not just working hard but working carefully." },
    ],
    synonyms: ["diligent", "industrious", "persistent", "meticulous", "tireless"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "audacious",
    definition: "Showing a willingness to take bold risks; daring and fearlessly original.",
    keyConcepts: [
      { keyword: "bold", matchTerms: ["bold", "daring", "fearless", "brave", "courageous", "reckless", "adventurous", "audacious", "gutsy", "intrepid", "nervy", "presumptuous"], label: "Bold and daring", hint: "The definition says 'bold risks' — doing what others wouldn't dare." },
    ],
    synonyms: ["daring", "bold", "fearless", "brazen", "intrepid"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "august",
    definition: "Inspiring reverence and admiration; having impressive dignity or grandeur.",
    keyConcepts: [
      { keyword: "reverence", matchTerms: ["reverence", "admiration", "dignity", "grandeur", "respect", "awe", "majesty", "imposing", "noble", "stately", "venerable", "commanding"], label: "Inspiring reverence", hint: "The definition says 'inspiring reverence and admiration' — commanding profound respect." },
    ],
    synonyms: ["venerable", "majestic", "dignified", "imposing", "stately"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "avarice",
    definition: "Extreme greed for wealth or material gain; an insatiable desire to accumulate.",
    keyConcepts: [
      { keyword: "extreme greed", matchTerms: ["greed", "covetousness", "acquisitiveness", "cupidity", "miserliness", "avarice", "rapacity", "materialism", "desire for wealth", "money-hungry", "avaricious"], label: "Extreme greed", hint: "The definition says 'extreme greed' — not just wanting more but an obsessive craving." },
      { keyword: "insatiable", matchTerms: ["insatiable", "unquenchable", "never satisfied", "endless", "unrelenting", "constant", "relentless", "boundless", "inexhaustible", "voracious", "limitless", "unceasing"], label: "Insatiable desire", hint: "The definition says 'insatiable desire' — it can never be satisfied." },
    ],
    synonyms: ["greed", "covetousness", "cupidity", "rapacity", "acquisitiveness"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "canonical",
    definition: "Conforming to established rules or standards; recognized as authoritative or orthodox.",
    keyConcepts: [
      { keyword: "established", matchTerms: ["established", "standard", "orthodox", "authoritative", "accepted", "recognized", "official", "approved", "traditional", "classic", "definitive", "sanctioned"], label: "Established standard", hint: "The definition says 'established rules or standards' — the recognized benchmark." },
    ],
    synonyms: ["authoritative", "orthodox", "standard", "accepted", "definitive"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "censure",
    definition: "Strong official disapproval or condemnation of an action or person.",
    keyConcepts: [
      { keyword: "official disapproval", matchTerms: ["disapproval", "condemnation", "reprimand", "rebuke", "criticism", "censure", "denunciation", "blame", "reproach", "admonishment", "formal", "official"], label: "Official disapproval", hint: "The definition says 'official disapproval or condemnation' — a formal judgment." },
    ],
    synonyms: ["condemnation", "reprimand", "rebuke", "criticism", "reproach"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "chauvinism",
    definition: "Excessive belief in the superiority of one's own group, nation, or sex.",
    keyConcepts: [
      { keyword: "excessive belief", matchTerms: ["excessive", "belief", "superiority", "fanatical", "blind", "bigoted", "prejudiced", "bias", "conviction", "devotion", "zealous", "extreme"], label: "Excessive belief", hint: "The definition says 'excessive belief in superiority' — beyond normal pride into bias." },
      { keyword: "superiority", matchTerms: ["superiority", "better", "dominant", "supreme", "above", "superior", "higher", "greater", "privilege", "patriotism", "nationalism", "sexism"], label: "Own group's superiority", hint: "The definition says 'superiority of one's own group' — an us-vs-them mentality taken too far." },
    ],
    synonyms: ["jingoism", "nationalism", "bigotry", "prejudice", "bias"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "chicanery",
    definition: "The use of clever but deceptive arguments or trickery to achieve a goal.",
    keyConcepts: [
      { keyword: "deceptive", matchTerms: ["deceptive", "trickery", "cunning", "devious", "dishonest", "manipulative", "scheming", "underhanded", "sly", "crafty", "fraudulent", "misleading"], label: "Deceptive tactics", hint: "The definition says 'deceptive arguments or trickery' — dishonest cleverness." },
      { keyword: "clever", matchTerms: ["clever", "cunning", "artful", "shrewd", "ingenious", "sophisticated", "skillful", "crafty", "calculated", "strategic", "tricky", "wily"], label: "Clever manipulation", hint: "The definition says 'clever but deceptive' — it takes skill but is used dishonestly." },
    ],
    synonyms: ["trickery", "deception", "duplicity", "guile", "subterfuge"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "chronological",
    definition: "Arranged in the order in which events occurred in time; time-sequenced.",
    keyConcepts: [
      { keyword: "order", matchTerms: ["order", "sequence", "arranged", "sequential", "organized", "systematic", "structured", "ranked", "sorted", "listed", "categorized", "classified"], label: "Arranged in order", hint: "The definition says 'arranged in order' — items are placed deliberately." },
      { keyword: "time", matchTerms: ["time", "temporal", "historical", "date", "era", "period", "sequence", "timeline", "when", "occurrence", "event", "chronology"], label: "By time", hint: "The definition says 'occurred in time' — it's specifically ordered by when things happened." },
    ],
    synonyms: ["sequential", "time-ordered", "dated", "temporal", "successive"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "circumscribe",
    definition: "To restrict or limit the range or scope of something strictly.",
    keyConcepts: [
      { keyword: "restrict", matchTerms: ["restrict", "limit", "confine", "constrain", "bound", "contain", "curb", "narrow", "define", "delineate", "control", "regulate"], label: "To restrict", hint: "The definition says 'restrict or limit' — putting boundaries around something." },
    ],
    synonyms: ["restrict", "limit", "confine", "constrain", "bound"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "complementary",
    definition: "Combining in a way that enhances each other's qualities; mutually completing.",
    keyConcepts: [
      { keyword: "combining", matchTerms: ["combining", "together", "pair", "complement", "mutual", "reciprocal", "joint", "cooperative", "linked", "connected", "interrelated", "partnered"], label: "Combining together", hint: "The definition says 'combining in a way' — it only works when both parts are present." },
      { keyword: "enhances", matchTerms: ["enhance", "improve", "complete", "strengthen", "enrich", "fulfill", "supplement", "support", "balance", "offset", "supply", "fill"], label: "Enhances qualities", hint: "The definition says 'enhances each other's qualities' — each makes the other better." },
    ],
    synonyms: ["supplementary", "matching", "paired", "compatible", "harmonious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "conciliatory",
    definition: "Intended to make peace or reduce conflict; willing to make concessions.",
    keyConcepts: [
      { keyword: "peace", matchTerms: ["peace", "reconcile", "appease", "soothe", "calm", "placate", "mollify", "harmony", "agreement", "compromise", "goodwill", "mediation"], label: "Making peace", hint: "The definition says 'make peace or reduce conflict' — reaching toward resolution." },
      { keyword: "concessions", matchTerms: ["concessions", "compromise", "yield", "give", "accommodate", "flexible", "willing", "humble", "lenient", "forgiving", "open", "understanding"], label: "Willing to concede", hint: "The definition says 'willing to make concessions' — not holding firm but giving ground." },
    ],
    synonyms: ["appeasing", "placating", "mollifying", "reconciliatory", "accommodating"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "confer",
    definition: "To have a discussion in order to reach a decision; to grant or bestow something.",
    keyConcepts: [
      { keyword: "discussion", matchTerms: ["discussion", "consult", "deliberate", "talk", "meet", "exchange", "debate", "advise", "negotiate", "discuss", "converse", "dialogue"], label: "To have a discussion", hint: "The definition says 'discussion in order to reach a decision' — a purposeful exchange." },
    ],
    synonyms: ["consult", "deliberate", "discuss", "bestow", "grant"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "connoisseur",
    definition: "A person with expert knowledge and refined taste, especially in art or food.",
    keyConcepts: [
      { keyword: "expert", matchTerms: ["expert", "authority", "specialist", "judge", "critic", "knowledgeable", "learned", "skilled", "experienced", "sophisticated", "accomplished", "proficient"], label: "Expert knowledge", hint: "The definition says 'expert knowledge' — this person genuinely knows their subject deeply." },
      { keyword: "refined taste", matchTerms: ["refined", "taste", "discerning", "discriminating", "cultivated", "appreciation", "aesthetic", "palate", "judgment", "sophisticated", "fastidious", "selective"], label: "Refined taste", hint: "The definition says 'refined taste' — the ability to distinguish quality from mediocrity." },
    ],
    synonyms: ["expert", "authority", "critic", "aficionado", "maven"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "connote",
    definition: "To suggest or imply a meaning beyond the literal definition of a word.",
    keyConcepts: [
      { keyword: "suggest", matchTerms: ["suggest", "imply", "hint", "indicate", "evoke", "convey", "insinuate", "signal", "intimate", "mean", "represent", "symbolize"], label: "To suggest or imply", hint: "The definition says 'suggest or imply' — communicating beyond what is literally stated." },
      { keyword: "beyond", matchTerms: ["beyond", "additional", "associated", "secondary", "indirect", "unstated", "underlying", "implicit", "figurative", "emotional", "cultural", "contextual"], label: "Beyond literal meaning", hint: "The definition says 'beyond the literal definition' — the word carries extra associations." },
    ],
    synonyms: ["imply", "suggest", "indicate", "evoke", "signify"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "conversant",
    definition: "Familiar with or knowledgeable about a subject through practice or study.",
    keyConcepts: [
      { keyword: "knowledgeable", matchTerms: ["knowledgeable", "familiar", "informed", "versed", "experienced", "acquainted", "aware", "proficient", "practiced", "schooled", "well-read", "trained"], label: "Knowledgeable about", hint: "The definition says 'knowledgeable about a subject' — having genuine understanding." },
    ],
    synonyms: ["familiar", "knowledgeable", "acquainted", "versed", "informed"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "cosmopolitan",
    definition: "Familiar with and at ease in many different countries and cultures; worldly.",
    keyConcepts: [
      { keyword: "many cultures", matchTerms: ["cultures", "countries", "nations", "international", "global", "diverse", "multicultural", "worldly", "broad", "universal", "inclusive", "varied"], label: "Many cultures", hint: "The definition says 'many different countries and cultures' — breadth of exposure." },
      { keyword: "at ease", matchTerms: ["ease", "comfortable", "familiar", "worldly", "sophisticated", "cultured", "polished", "urbane", "broad-minded", "tolerant", "open", "versatile"], label: "At ease in the world", hint: "The definition says 'at ease' — not just exposed but genuinely comfortable across differences." },
    ],
    synonyms: ["worldly", "sophisticated", "urbane", "international", "cultured"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "covert",
    definition: "Not openly acknowledged or displayed; secret and hidden from view.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "hidden", "clandestine", "concealed", "undercover", "covert", "disguised", "veiled", "surreptitious", "stealthy", "furtive", "incognito"], label: "Secret and hidden", hint: "The definition says 'secret and hidden' — kept deliberately out of sight." },
    ],
    synonyms: ["secret", "clandestine", "concealed", "undercover", "surreptitious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "credulous",
    definition: "Too willing to believe things without sufficient evidence; easily deceived.",
    keyConcepts: [
      { keyword: "willing to believe", matchTerms: ["believe", "trust", "accept", "gullible", "naive", "unsuspecting", "credulous", "deceived", "manipulated", "fooled", "taken in", "swallow"], label: "Willing to believe", hint: "The definition says 'willing to believe' — the disposition to accept without questioning." },
      { keyword: "without evidence", matchTerms: ["without evidence", "insufficient", "uncritical", "unquestioning", "blindly", "readily", "easily", "hasty", "careless", "indiscriminate", "thoughtless"], label: "Without sufficient evidence", hint: "The definition says 'without sufficient evidence' — belief isn't grounded in proof." },
    ],
    synonyms: ["gullible", "naive", "unsuspecting", "trusting", "impressionable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "culminate",
    definition: "To reach the highest or final point; to come to a climax after a long development.",
    keyConcepts: [
      { keyword: "highest point", matchTerms: ["highest", "peak", "pinnacle", "apex", "climax", "zenith", "summit", "culmination", "top", "final", "ultimate", "acme"], label: "Highest point", hint: "The definition says 'highest or final point' — the moment everything has been building toward." },
    ],
    synonyms: ["peak", "climax", "conclude", "cap", "crest"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "debase",
    definition: "To lower the quality, value, or moral character of something or someone.",
    keyConcepts: [
      { keyword: "lower", matchTerms: ["lower", "reduce", "diminish", "degrade", "corrupt", "depreciate", "deteriorate", "cheapen", "tarnish", "taint", "pollute", "contaminate"], label: "To lower quality", hint: "The definition says 'lower the quality or value' — making something worth less." },
    ],
    synonyms: ["degrade", "corrupt", "cheapen", "tarnish", "diminish"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "debunk",
    definition: "To expose the falseness or exaggeration of a claim or belief.",
    keyConcepts: [
      { keyword: "expose", matchTerms: ["expose", "reveal", "uncover", "disprove", "discredit", "contradict", "refute", "challenge", "invalidate", "demolish", "puncture", "unmask"], label: "To expose", hint: "The definition says 'expose the falseness' — bringing hidden untruth into the open." },
      { keyword: "falseness", matchTerms: ["false", "fake", "myth", "claim", "belief", "misconception", "exaggeration", "fallacy", "fraud", "error", "deception", "misinformation"], label: "Falseness of a claim", hint: "The definition says 'falseness or exaggeration of a claim' — the target is something widely believed but wrong." },
    ],
    synonyms: ["disprove", "expose", "refute", "discredit", "contradict"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "deference",
    definition: "Respectful submission to the opinion or authority of another person.",
    keyConcepts: [
      { keyword: "respectful submission", matchTerms: ["submission", "respect", "yield", "defer", "comply", "obey", "honor", "bow", "reverence", "regard", "acknowledge", "concede"], label: "Respectful submission", hint: "The definition says 'respectful submission' — it is both yielding AND honoring." },
      { keyword: "authority", matchTerms: ["authority", "opinion", "judgment", "expertise", "status", "seniority", "knowledge", "experience", "rank", "position", "power", "leadership"], label: "To another's authority", hint: "The definition says 'opinion or authority' — deferring to someone's superior position or knowledge." },
    ],
    synonyms: ["submission", "respect", "deference", "compliance", "regard"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "deleterious",
    definition: "Causing harm or damage, especially in a gradual or subtle way.",
    keyConcepts: [
      { keyword: "harm", matchTerms: ["harm", "damage", "injure", "hurt", "impair", "adverse", "detrimental", "destructive", "negative", "unhealthy", "toxic", "poisonous"], label: "Causing harm", hint: "The definition says 'causing harm or damage' — something with a negative effect." },
      { keyword: "gradual", matchTerms: ["gradual", "subtle", "slow", "insidious", "creeping", "cumulative", "incremental", "imperceptible", "progressive", "over time", "hidden", "unnoticed"], label: "Gradual or subtle", hint: "The definition says 'gradual or subtle' — the harm may not be obvious at first." },
    ],
    synonyms: ["harmful", "damaging", "injurious", "detrimental", "adverse"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "denigrate",
    definition: "To unfairly criticize or attack the reputation of a person or thing.",
    keyConcepts: [
      { keyword: "unfairly criticize", matchTerms: ["criticize", "belittle", "disparage", "attack", "defame", "slander", "malign", "vilify", "demean", "discredit", "undermine", "besmirch"], label: "Unfairly criticize", hint: "The definition says 'unfairly criticize' — the criticism goes beyond what is deserved." },
      { keyword: "reputation", matchTerms: ["reputation", "character", "name", "standing", "image", "honor", "integrity", "credibility", "dignity", "esteem", "status", "worth"], label: "Attack reputation", hint: "The definition says 'attack the reputation' — the target is how someone is perceived." },
    ],
    synonyms: ["disparage", "belittle", "malign", "defame", "discredit"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "denote",
    definition: "To be a name or symbol for something; to indicate or represent directly.",
    keyConcepts: [
      { keyword: "indicate", matchTerms: ["indicate", "represent", "mean", "signify", "stand for", "refer to", "name", "label", "identify", "designate", "mark", "specify"], label: "To indicate directly", hint: "The definition says 'indicate or represent directly' — the literal, explicit meaning." },
    ],
    synonyms: ["indicate", "signify", "represent", "mean", "stand for"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "deride",
    definition: "To mock or laugh at with contempt; to treat as ridiculous or unworthy.",
    keyConcepts: [
      { keyword: "mock", matchTerms: ["mock", "ridicule", "scorn", "jeer", "sneer", "taunt", "belittle", "scoff", "deride", "dismiss", "disdain", "laugh at"], label: "To mock", hint: "The definition says 'mock or laugh at' — treating with open contempt." },
      { keyword: "contempt", matchTerms: ["contempt", "disdain", "scorn", "disrespect", "condescension", "dismissiveness", "disregard", "belittlement", "derision", "ridicule", "low regard"], label: "With contempt", hint: "The definition says 'with contempt' — the attitude behind the mockery is deep disrespect." },
    ],
    synonyms: ["mock", "ridicule", "scorn", "jeer", "taunt"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "dichotomy",
    definition: "A division into two sharply contrasting groups or sets of ideas.",
    keyConcepts: [
      { keyword: "division", matchTerms: ["division", "split", "separation", "distinction", "contrast", "opposition", "difference", "divergence", "fork", "duality", "binary", "polarity"], label: "A division", hint: "The definition says 'division into two' — a splitting into parts." },
      { keyword: "contrasting", matchTerms: ["contrasting", "opposing", "conflicting", "contradictory", "incompatible", "polarized", "sharply different", "antithetical", "mutually exclusive", "divergent"], label: "Sharply contrasting", hint: "The definition says 'sharply contrasting' — the two sides are very different, not just slightly so." },
    ],
    synonyms: ["division", "split", "contrast", "duality", "polarity"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "dictum",
    definition: "A formal or authoritative statement of principle; a widely quoted saying.",
    keyConcepts: [
      { keyword: "authoritative", matchTerms: ["authoritative", "formal", "official", "binding", "ruling", "pronouncement", "decree", "declaration", "mandate", "edict", "command", "law"], label: "Authoritative statement", hint: "The definition says 'formal or authoritative statement' — it carries weight and recognition." },
      { keyword: "principle", matchTerms: ["principle", "rule", "maxim", "truth", "saying", "proverb", "axiom", "tenet", "doctrine", "belief", "guideline", "motto"], label: "Statement of principle", hint: "The definition says 'statement of principle' — it encapsulates a guiding truth or rule." },
    ],
    synonyms: ["maxim", "saying", "ruling", "decree", "pronouncement"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "didactic",
    definition: "Intended to teach or instruct, often in a moral or overly preachy way.",
    keyConcepts: [
      { keyword: "teach", matchTerms: ["teach", "instruct", "educate", "inform", "guide", "lesson", "preach", "moralize", "lecture", "enlighten", "explain", "illustrate"], label: "Intended to teach", hint: "The definition says 'intended to teach or instruct' — the primary purpose is instruction." },
      { keyword: "moral", matchTerms: ["moral", "ethics", "virtue", "values", "lesson", "principle", "preachy", "righteous", "improving", "edifying", "moralizing", "sanctimonious"], label: "Moral lesson", hint: "The definition says 'moral or overly preachy' — it teaches with a pointed ethical agenda." },
    ],
    synonyms: ["instructive", "educational", "preachy", "moralistic", "pedagogic"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "diffuse",
    definition: "Spread out over a wide area; not concentrated or focused in one place.",
    keyConcepts: [
      { keyword: "spread out", matchTerms: ["spread", "dispersed", "scattered", "distributed", "wide", "broad", "extensive", "pervasive", "diluted", "disseminated", "unfocused", "diffuse"], label: "Spread out", hint: "The definition says 'spread out over a wide area' — not concentrated." },
      { keyword: "not focused", matchTerms: ["not focused", "unfocused", "lacking concentration", "diluted", "vague", "rambling", "wordy", "verbose", "digressive", "scattered", "diffuse", "meandering"], label: "Not concentrated", hint: "The definition says 'not concentrated' — energy or meaning is spread too thin." },
    ],
    synonyms: ["scattered", "dispersed", "spread", "unfocused", "diluted"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "digress",
    definition: "To deviate from the main topic in speech or writing; to go off on a tangent.",
    keyConcepts: [
      { keyword: "deviate", matchTerms: ["deviate", "stray", "wander", "diverge", "depart", "drift", "sidetrack", "turn aside", "veer", "ramble", "tangent", "meander"], label: "To deviate", hint: "The definition says 'deviate from the main topic' — moving away from the central subject." },
      { keyword: "main topic", matchTerms: ["topic", "subject", "point", "focus", "main idea", "thread", "argument", "discourse", "narrative", "theme", "purpose", "direction"], label: "From the main topic", hint: "The definition says 'main topic' — there is a proper course being abandoned." },
    ],
    synonyms: ["deviate", "stray", "wander", "ramble", "sidetrack"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "dilatory",
    definition: "Slow to act or respond; tending to cause delay or procrastinate.",
    keyConcepts: [
      { keyword: "slow", matchTerms: ["slow", "delay", "procrastinate", "tardy", "late", "unhurried", "leisurely", "lagging", "dawdling", "postponing", "stalling", "dragging"], label: "Slow to act", hint: "The definition says 'slow to act or respond' — failing to move with appropriate speed." },
      { keyword: "delay", matchTerms: ["delay", "postpone", "defer", "stall", "drag out", "put off", "hold back", "obstruct", "hinder", "impede", "stretch out", "prolong"], label: "Causing delay", hint: "The definition says 'tending to cause delay' — the slowness has a consequence." },
    ],
    synonyms: ["slow", "tardy", "procrastinating", "delaying", "dawdling"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "discomfiting",
    definition: "Causing a feeling of unease, embarrassment, or confusion; unsettling.",
    keyConcepts: [
      { keyword: "unease", matchTerms: ["unease", "embarrassment", "discomfort", "awkward", "unsettling", "confusing", "disconcerting", "disturbing", "upsetting", "perplexing", "troubling", "destabilizing"], label: "Causing unease", hint: "The definition says 'feeling of unease, embarrassment, or confusion' — a destabilizing effect." },
    ],
    synonyms: ["unsettling", "disconcerting", "embarrassing", "awkward", "perplexing"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "discrete",
    definition: "Individually separate and distinct; existing as individual, unconnected parts.",
    keyConcepts: [
      { keyword: "separate", matchTerms: ["separate", "distinct", "individual", "independent", "isolated", "unconnected", "different", "unique", "detached", "divided", "apart", "discontinuous"], label: "Individually separate", hint: "The definition says 'individually separate and distinct' — each part stands alone." },
    ],
    synonyms: ["separate", "distinct", "individual", "detached", "unconnected"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "disingenuous",
    definition: "Not candid or sincere; pretending to be unaware or innocent while having hidden motives.",
    keyConcepts: [
      { keyword: "not sincere", matchTerms: ["not sincere", "insincere", "dishonest", "deceptive", "misleading", "false", "fake", "pretending", "hypocritical", "two-faced", "calculated", "manipulative"], label: "Not sincere", hint: "The definition says 'not candid or sincere' — there's a hidden reality beneath the surface." },
      { keyword: "hidden motives", matchTerms: ["hidden", "motives", "agenda", "intentions", "purpose", "ulterior", "concealed", "disguised", "undisclosed", "secret", "real reason", "underlying"], label: "Hidden motives", hint: "The definition says 'hidden motives' — the person knows more or wants more than they let on." },
    ],
    synonyms: ["insincere", "dishonest", "calculating", "hypocritical", "two-faced"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "disseminate",
    definition: "To spread information, ideas, or knowledge widely among many people.",
    keyConcepts: [
      { keyword: "spread", matchTerms: ["spread", "distribute", "broadcast", "circulate", "share", "propagate", "disperse", "disseminate", "publish", "release", "convey", "transmit"], label: "To spread widely", hint: "The definition says 'spread widely' — reaching as many people as possible." },
      { keyword: "information", matchTerms: ["information", "ideas", "knowledge", "news", "message", "content", "data", "material", "findings", "beliefs", "teachings", "views"], label: "Spread information", hint: "The definition says 'information, ideas, or knowledge' — something intellectual being distributed." },
    ],
    synonyms: ["distribute", "broadcast", "circulate", "spread", "propagate"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "dissent",
    definition: "The holding or expression of an opinion contrary to an official or mainstream view.",
    keyConcepts: [
      { keyword: "contrary opinion", matchTerms: ["contrary", "opposing", "different", "disagreement", "objection", "protest", "dissent", "deviation", "non-conformity", "rejection", "challenge", "alternative"], label: "Contrary opinion", hint: "The definition says 'opinion contrary to' — it goes against what is established." },
      { keyword: "official view", matchTerms: ["official", "mainstream", "established", "authority", "institution", "consensus", "accepted", "orthodox", "majority", "dominant", "government", "body"], label: "Against official view", hint: "The definition says 'official or mainstream view' — the opposition is to something with recognized status." },
    ],
    synonyms: ["disagreement", "objection", "protest", "opposition", "nonconformity"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "ebullient",
    definition: "Overflowing with enthusiasm, energy, and excitement; cheerful and vivacious.",
    keyConcepts: [
      { keyword: "overflowing", matchTerms: ["overflowing", "exuberant", "bubbling", "effusive", "irrepressible", "abundant", "brimming", "bursting", "gushing", "vivacious", "animated", "spirited"], label: "Overflowing energy", hint: "The definition says 'overflowing with enthusiasm' — the energy can't be contained." },
      { keyword: "enthusiasm", matchTerms: ["enthusiasm", "energy", "excitement", "joy", "zest", "vitality", "liveliness", "vigor", "spirit", "passion", "delight", "cheerfulness"], label: "With enthusiasm", hint: "The definition says 'enthusiasm, energy, and excitement' — all positive energy." },
    ],
    synonyms: ["exuberant", "effervescent", "vivacious", "enthusiastic", "buoyant"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "eccentric",
    definition: "Departing from conventional or accepted behavior in an unconventional way; odd.",
    keyConcepts: [
      { keyword: "unconventional", matchTerms: ["unconventional", "unusual", "odd", "peculiar", "quirky", "idiosyncratic", "nonconformist", "irregular", "weird", "strange", "offbeat", "individual"], label: "Unconventional", hint: "The definition says 'unconventional way' — different from the norm in a distinctive manner." },
      { keyword: "behavior", matchTerms: ["behavior", "manner", "conduct", "character", "personality", "habit", "style", "practice", "attitude", "way", "approach", "disposition"], label: "Departing from behavior norms", hint: "The definition says 'departing from conventional behavior' — it's seen in how someone acts." },
    ],
    synonyms: ["unconventional", "quirky", "odd", "peculiar", "idiosyncratic"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "eclectic",
    definition: "Deriving ideas from a broad and diverse range of sources or styles.",
    keyConcepts: [
      { keyword: "diverse", matchTerms: ["diverse", "varied", "mixed", "broad", "wide-ranging", "multifaceted", "heterogeneous", "assorted", "different", "various", "multiple", "wide"], label: "Diverse range", hint: "The definition says 'broad and diverse range' — it comes from many different places." },
      { keyword: "sources", matchTerms: ["sources", "styles", "influences", "traditions", "schools", "disciplines", "areas", "fields", "backgrounds", "origins", "approaches", "methods"], label: "Range of sources", hint: "The definition says 'range of sources or styles' — selecting from many distinct traditions." },
    ],
    synonyms: ["diverse", "varied", "wide-ranging", "multifaceted", "catholic"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "efficacy",
    definition: "The ability to produce the intended result; effectiveness in achieving a goal.",
    keyConcepts: [
      { keyword: "intended result", matchTerms: ["intended", "result", "effect", "outcome", "goal", "purpose", "aim", "objective", "success", "achievement", "impact", "output"], label: "Intended result", hint: "The definition says 'intended result' — it's about producing exactly what was sought." },
      { keyword: "ability", matchTerms: ["ability", "power", "capacity", "capability", "strength", "potency", "effectiveness", "efficiency", "performance", "productivity", "reliability", "force"], label: "Ability to produce", hint: "The definition says 'ability to produce' — the capacity to actually make something happen." },
    ],
    synonyms: ["effectiveness", "potency", "efficiency", "capability", "power"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "egalitarian",
    definition: "Believing in or based on the principle that all people are equal and deserve equal rights.",
    keyConcepts: [
      { keyword: "equal", matchTerms: ["equal", "equality", "fair", "just", "democratic", "impartial", "balanced", "equitable", "uniform", "same", "unbiased", "neutral"], label: "All people equal", hint: "The definition says 'all people are equal' — no hierarchies, no special treatment." },
      { keyword: "rights", matchTerms: ["rights", "treatment", "opportunity", "access", "privilege", "status", "respect", "dignity", "entitlement", "freedom", "consideration", "standing"], label: "Equal rights", hint: "The definition says 'deserve equal rights' — the equality is in what people are owed." },
    ],
    synonyms: ["equalitarian", "democratic", "fair", "impartial", "just"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "elicit",
    definition: "To draw out or provoke a response, reaction, or information from someone.",
    keyConcepts: [
      { keyword: "draw out", matchTerms: ["draw out", "provoke", "evoke", "call forth", "bring out", "extract", "prompt", "induce", "generate", "produce", "cause", "stimulate"], label: "To draw out", hint: "The definition says 'draw out or provoke' — pulling something out that wasn't freely given." },
      { keyword: "response", matchTerms: ["response", "reaction", "information", "answer", "reply", "emotion", "feeling", "behavior", "action", "data", "opinion", "comment"], label: "A response or reaction", hint: "The definition says 'response, reaction, or information' — the result of the elicitation." },
    ],
    synonyms: ["evoke", "provoke", "extract", "draw out", "prompt"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "eloquent",
    definition: "Fluent and persuasive in speech or writing; able to express ideas with clarity and force.",
    keyConcepts: [
      { keyword: "fluent", matchTerms: ["fluent", "articulate", "expressive", "persuasive", "compelling", "forceful", "clear", "moving", "effective", "polished", "coherent", "powerful"], label: "Fluent and persuasive", hint: "The definition says 'fluent and persuasive' — not just clear but also convincing." },
    ],
    synonyms: ["articulate", "fluent", "expressive", "persuasive", "forceful"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "eminent",
    definition: "Famous and respected within a particular field; standing out for achievements or status.",
    keyConcepts: [
      { keyword: "famous", matchTerms: ["famous", "renowned", "distinguished", "celebrated", "prominent", "notable", "illustrious", "respected", "acclaimed", "preeminent", "outstanding", "recognized"], label: "Famous and respected", hint: "The definition says 'famous and respected' — this person is known AND admired." },
      { keyword: "particular field", matchTerms: ["field", "area", "profession", "domain", "discipline", "sphere", "subject", "industry", "career", "specialty", "realm", "category"], label: "In a particular field", hint: "The definition says 'within a particular field' — the eminence is specific, not general." },
    ],
    synonyms: ["distinguished", "renowned", "prominent", "notable", "celebrated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "emulate",
    definition: "To try to equal or surpass another person or thing by copying their example.",
    keyConcepts: [
      { keyword: "equal or surpass", matchTerms: ["equal", "surpass", "match", "rival", "exceed", "outdo", "beat", "better", "compete", "challenge", "meet", "overtake"], label: "Equal or surpass", hint: "The definition says 'equal or surpass' — the goal is to be as good as or better." },
      { keyword: "copying", matchTerms: ["copy", "imitate", "model", "follow", "mirror", "replicate", "reproduce", "take after", "learn from", "adopt", "simulate", "mimic"], label: "By copying", hint: "The definition says 'by copying their example' — imitation is the means to competition." },
    ],
    synonyms: ["imitate", "copy", "rival", "match", "mirror"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "endemic",
    definition: "Native to and regularly found in a particular place or population; locally common.",
    keyConcepts: [
      { keyword: "native", matchTerms: ["native", "local", "indigenous", "specific", "natural", "inherent", "characteristic", "belonging", "originating", "confined", "exclusive", "particular"], label: "Native to a place", hint: "The definition says 'native to a particular place' — it originated there and belongs there." },
      { keyword: "regularly found", matchTerms: ["regularly", "commonly", "frequently", "consistently", "always", "prevalent", "widespread", "typical", "usual", "normal", "recurrent", "persistent"], label: "Regularly found", hint: "The definition says 'regularly found' — it's not a surprise or anomaly but an expected presence." },
    ],
    synonyms: ["native", "indigenous", "local", "prevalent", "widespread"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "enervate",
    definition: "To weaken or drain of energy, vitality, or strength; to make someone feel exhausted.",
    keyConcepts: [
      { keyword: "weaken", matchTerms: ["weaken", "drain", "exhaust", "tire", "deplete", "sap", "debilitate", "enfeeble", "devitalize", "impair", "reduce", "diminish"], label: "To weaken", hint: "The definition says 'weaken or drain' — removing what gives something life or force." },
      { keyword: "energy", matchTerms: ["energy", "vitality", "strength", "vigor", "force", "power", "stamina", "drive", "spirit", "life", "motivation", "capacity"], label: "Drain of energy", hint: "The definition says 'energy, vitality, or strength' — what is being taken away." },
    ],
    synonyms: ["weaken", "exhaust", "debilitate", "sap", "drain"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "engender",
    definition: "To cause or give rise to a feeling, situation, or condition; to bring into being.",
    keyConcepts: [
      { keyword: "cause", matchTerms: ["cause", "produce", "generate", "create", "bring about", "give rise", "foster", "cultivate", "spark", "trigger", "inspire", "develop"], label: "To cause", hint: "The definition says 'cause or give rise to' — being the origin of something." },
      { keyword: "feeling", matchTerms: ["feeling", "situation", "condition", "emotion", "attitude", "response", "outcome", "result", "effect", "state", "quality", "characteristic"], label: "A feeling or situation", hint: "The definition says 'a feeling, situation, or condition' — the things that are engendered." },
    ],
    synonyms: ["cause", "produce", "generate", "create", "foster"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "enigma",
    definition: "A person or thing that is mysterious, puzzling, or difficult to understand.",
    keyConcepts: [
      { keyword: "mysterious", matchTerms: ["mysterious", "puzzling", "baffling", "inexplicable", "inscrutable", "incomprehensible", "obscure", "ambiguous", "complex", "cryptic", "perplexing", "confounding"], label: "Mysterious", hint: "The definition says 'mysterious, puzzling' — resisting easy understanding." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "hard to read", "impenetrable", "elusive", "unknowable", "opaque", "unclear", "obscure", "hidden", "complex", "deep", "challenging"], label: "Difficult to understand", hint: "The definition says 'difficult to understand' — it is genuinely resistant to being figured out." },
    ],
    synonyms: ["mystery", "puzzle", "riddle", "paradox", "conundrum"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "entitlement",
    definition: "The belief that one deserves special privileges or treatment, often without justification.",
    keyConcepts: [
      { keyword: "belief", matchTerms: ["belief", "assumption", "expectation", "conviction", "attitude", "sense", "feeling", "perception", "idea", "notion", "claim", "view"], label: "Belief one deserves", hint: "The definition says 'belief that one deserves' — it is a mental stance, not a fact." },
      { keyword: "privileges", matchTerms: ["privileges", "special treatment", "rights", "benefits", "advantages", "concessions", "favors", "accommodations", "exemptions", "deference", "consideration", "access"], label: "Special privileges", hint: "The definition says 'special privileges or treatment' — expecting more than others receive." },
    ],
    synonyms: ["presumption", "privilege", "right", "claim", "expectation"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "ephemeral",
    definition: "Lasting for only a very short time; passing quickly and not enduring.",
    keyConcepts: [
      { keyword: "very short time", matchTerms: ["short time", "brief", "fleeting", "transient", "temporary", "momentary", "passing", "transitory", "impermanent", "short-lived", "quick", "instantaneous"], label: "Very short time", hint: "The definition says 'only a very short time' — it barely lasts before it's gone." },
    ],
    synonyms: ["transient", "fleeting", "momentary", "short-lived", "impermanent"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "equitable",
    definition: "Fair and impartial; treating all parties with justice and without favoritism.",
    keyConcepts: [
      { keyword: "fair", matchTerms: ["fair", "just", "impartial", "balanced", "unbiased", "equal", "neutral", "objective", "disinterested", "evenhanded", "reasonable", "proportionate"], label: "Fair and impartial", hint: "The definition says 'fair and impartial' — neither side gets special advantage." },
    ],
    synonyms: ["fair", "just", "impartial", "balanced", "unbiased"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "erratic",
    definition: "Not even or regular; unpredictable and inconsistent in behavior or movement.",
    keyConcepts: [
      { keyword: "unpredictable", matchTerms: ["unpredictable", "inconsistent", "irregular", "variable", "volatile", "changeable", "unstable", "capricious", "random", "unsteady", "fluctuating", "sporadic"], label: "Unpredictable", hint: "The definition says 'unpredictable and inconsistent' — you can't rely on it to behave in any set way." },
    ],
    synonyms: ["unpredictable", "inconsistent", "irregular", "volatile", "capricious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "erudite",
    definition: "Having or showing deep, often scholarly knowledge; highly educated and learned.",
    keyConcepts: [
      { keyword: "deep knowledge", matchTerms: ["knowledge", "learning", "scholarship", "wisdom", "education", "expertise", "literacy", "culture", "intellect", "understanding", "insight", "academic"], label: "Deep knowledge", hint: "The definition says 'deep, often scholarly knowledge' — not casual familiarity but serious study." },
    ],
    synonyms: ["learned", "scholarly", "knowledgeable", "erudite", "educated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "eschew",
    definition: "To deliberately avoid or abstain from something; to shun as undesirable.",
    keyConcepts: [
      { keyword: "avoid", matchTerms: ["avoid", "abstain", "shun", "forgo", "forswear", "refrain", "reject", "steer clear", "keep away", "bypass", "evade", "sidestep"], label: "Deliberately avoid", hint: "The definition says 'deliberately avoid or abstain' — a conscious, purposeful choice." },
    ],
    synonyms: ["avoid", "shun", "abstain", "forgo", "forswear"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "ethos",
    definition: "The characteristic spirit or fundamental values of a culture, community, or group.",
    keyConcepts: [
      { keyword: "characteristic spirit", matchTerms: ["spirit", "character", "values", "culture", "identity", "nature", "essence", "attitude", "philosophy", "outlook", "temperament", "disposition"], label: "Characteristic spirit", hint: "The definition says 'characteristic spirit' — the underlying tone that defines a group." },
      { keyword: "culture", matchTerms: ["culture", "community", "group", "society", "organization", "nation", "movement", "institution", "tradition", "people", "collective", "body"], label: "Of a culture or group", hint: "The definition says 'culture, community, or group' — an ethos belongs to a collective, not an individual." },
    ],
    synonyms: ["character", "spirit", "values", "philosophy", "culture"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "eulogy",
    definition: "A speech or piece of writing praising a person, especially one who has recently died.",
    keyConcepts: [
      { keyword: "praising", matchTerms: ["praising", "tribute", "honor", "celebrate", "commend", "extol", "laud", "glorify", "appreciate", "commemorate", "remember", "acclaim"], label: "Praising a person", hint: "The definition says 'praising a person' — the purpose is to honor and celebrate." },
      { keyword: "died", matchTerms: ["died", "death", "funeral", "deceased", "passed", "memorial", "mourning", "loss", "obituary", "late", "gone", "farewell"], label: "Who has died", hint: "The definition says 'recently died' — a eulogy is most commonly associated with loss and mourning." },
    ],
    synonyms: ["tribute", "encomium", "panegyric", "oration", "testimonial"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "exacerbate",
    definition: "To make an already bad situation worse or more severe.",
    keyConcepts: [
      { keyword: "worse", matchTerms: ["worse", "aggravate", "intensify", "inflame", "heighten", "increase", "compound", "deepen", "amplify", "escalate", "deteriorate", "magnify"], label: "Make worse", hint: "The definition says 'make worse or more severe' — things were already bad and now they are more so." },
      { keyword: "already bad", matchTerms: ["already bad", "existing problem", "situation", "condition", "difficulty", "tension", "conflict", "suffering", "pain", "issue", "trouble", "complication"], label: "Already bad situation", hint: "The definition says 'already bad situation' — exacerbation requires a pre-existing problem." },
    ],
    synonyms: ["aggravate", "worsen", "intensify", "inflame", "compound"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "exacting",
    definition: "Making great demands; requiring very precise and careful attention to standards.",
    keyConcepts: [
      { keyword: "great demands", matchTerms: ["demands", "requirements", "standards", "expectations", "criteria", "conditions", "rigor", "strictness", "precision", "exactness", "accuracy", "thoroughness"], label: "Making great demands", hint: "The definition says 'making great demands' — a high bar is set and enforced." },
      { keyword: "precise", matchTerms: ["precise", "careful", "meticulous", "exact", "rigorous", "accurate", "fastidious", "thorough", "strict", "demanding", "uncompromising", "detailed"], label: "Precise attention", hint: "The definition says 'precise and careful' — not just demanding but demanding exactness specifically." },
    ],
    synonyms: ["demanding", "rigorous", "strict", "meticulous", "fastidious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "exhaustive",
    definition: "Covering every aspect of a topic thoroughly; leaving nothing out.",
    keyConcepts: [
      { keyword: "every aspect", matchTerms: ["every aspect", "complete", "comprehensive", "thorough", "all-encompassing", "inclusive", "total", "entire", "full", "whole", "broad", "detailed"], label: "Every aspect", hint: "The definition says 'every aspect' — nothing is overlooked or skipped." },
      { keyword: "leaving nothing out", matchTerms: ["leaving nothing", "complete", "thorough", "full", "exhaustive", "comprehensive", "all-inclusive", "systematic", "rigorous", "meticulous", "painstaking", "definitive"], label: "Leaving nothing out", hint: "The definition says 'leaving nothing out' — the completeness is the defining quality." },
    ],
    synonyms: ["comprehensive", "thorough", "complete", "all-inclusive", "definitive"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "expedient",
    definition: "Convenient and practical, often at the expense of moral considerations.",
    keyConcepts: [
      { keyword: "convenient", matchTerms: ["convenient", "practical", "useful", "effective", "advantageous", "suitable", "serviceable", "efficient", "pragmatic", "opportunistic", "sensible", "tactical"], label: "Convenient and practical", hint: "The definition says 'convenient and practical' — it works, and that's what matters." },
      { keyword: "moral considerations", matchTerms: ["moral", "ethics", "principles", "values", "conscience", "integrity", "fairness", "honor", "right", "wrong", "scruples", "ideals"], label: "At expense of morals", hint: "The definition says 'at the expense of moral considerations' — expediency trades ethics for results." },
    ],
    synonyms: ["practical", "convenient", "pragmatic", "useful", "politic"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "fanatical",
    definition: "Filled with excessive and uncritical devotion to a cause, belief, or activity.",
    keyConcepts: [
      { keyword: "excessive devotion", matchTerms: ["excessive", "devotion", "obsessive", "extreme", "zealous", "fervent", "intense", "passionate", "radical", "dogmatic", "blind", "unreasoning"], label: "Excessive devotion", hint: "The definition says 'excessive devotion' — going far beyond normal commitment." },
      { keyword: "uncritical", matchTerms: ["uncritical", "blind", "unquestioning", "unreasoning", "rigid", "inflexible", "dogmatic", "close-minded", "absolute", "unwavering", "unthinking", "irrational"], label: "Uncritical belief", hint: "The definition says 'uncritical devotion' — reason and doubt have been switched off." },
    ],
    synonyms: ["zealous", "obsessive", "fervent", "extreme", "radical"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "fastidious",
    definition: "Very attentive to accuracy and detail; hard to please due to high standards.",
    keyConcepts: [
      { keyword: "attentive to detail", matchTerms: ["attentive", "detail", "precise", "meticulous", "careful", "thorough", "exacting", "particular", "fussy", "scrupulous", "demanding", "perfectionist"], label: "Attentive to detail", hint: "The definition says 'attentive to accuracy and detail' — nothing escapes notice." },
      { keyword: "high standards", matchTerms: ["high standards", "hard to please", "discerning", "selective", "demanding", "exacting", "fussy", "critical", "discriminating", "picky", "difficult", "choosy"], label: "Hard to please", hint: "The definition says 'hard to please due to high standards' — ordinary quality won't satisfy." },
    ],
    synonyms: ["meticulous", "precise", "exacting", "fussy", "discriminating"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "feasible",
    definition: "Possible to achieve or accomplish; likely to work in practice.",
    keyConcepts: [
      { keyword: "possible", matchTerms: ["possible", "achievable", "workable", "viable", "realistic", "practicable", "manageable", "attainable", "doable", "plausible", "reasonable", "sensible"], label: "Possible to achieve", hint: "The definition says 'possible to achieve or accomplish' — not just theoretical but actually doable." },
    ],
    synonyms: ["possible", "viable", "workable", "practicable", "achievable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "felicitous",
    definition: "Well-suited to the occasion; pleasing and aptly chosen.",
    keyConcepts: [
      { keyword: "well-suited", matchTerms: ["well-suited", "apt", "appropriate", "fitting", "perfect", "ideal", "suitable", "timely", "pertinent", "relevant", "happy", "fortunate"], label: "Well-suited", hint: "The definition says 'well-suited to the occasion' — it fits exactly right." },
      { keyword: "pleasing", matchTerms: ["pleasing", "delightful", "charming", "agreeable", "satisfying", "elegant", "graceful", "apt", "inspired", "excellent", "successful", "effective"], label: "Pleasing and apt", hint: "The definition says 'pleasing and aptly chosen' — not just correct but enjoyable in its correctness." },
    ],
    synonyms: ["apt", "fitting", "appropriate", "inspired", "well-chosen"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "finesse",
    definition: "Skill and delicacy in handling a difficult situation; subtle and refined technique.",
    keyConcepts: [
      { keyword: "skill", matchTerms: ["skill", "delicacy", "subtlety", "refinement", "technique", "artistry", "tact", "dexterity", "mastery", "craft", "elegance", "grace"], label: "Skill and delicacy", hint: "The definition says 'skill and delicacy' — not brute force but careful, precise handling." },
      { keyword: "difficult situation", matchTerms: ["difficult situation", "challenge", "problem", "obstacle", "complexity", "sensitivity", "nuance", "complication", "predicament", "negotiation", "conflict", "task"], label: "In a difficult situation", hint: "The definition says 'handling a difficult situation' — finesse matters most under pressure." },
    ],
    synonyms: ["skill", "delicacy", "tact", "subtlety", "artistry"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "florid",
    definition: "Elaborately ornate in style or color; excessively showy or flowery in language.",
    keyConcepts: [
      { keyword: "ornate", matchTerms: ["ornate", "elaborate", "decorative", "showy", "flowery", "baroque", "overwrought", "embellished", "fancy", "busy", "extravagant", "flamboyant"], label: "Elaborately ornate", hint: "The definition says 'elaborately ornate' — decorated to an excessive degree." },
      { keyword: "excessively showy", matchTerms: ["excessively showy", "overdone", "flamboyant", "ostentatious", "gaudy", "pompous", "pretentious", "affected", "overwrought", "verbose", "bombastic", "grandiose"], label: "Excessively showy", hint: "The definition says 'excessively showy or flowery' — it has gone too far." },
    ],
    synonyms: ["ornate", "flowery", "baroque", "elaborate", "flamboyant"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "foreshadow",
    definition: "To be a warning or indication of something that will happen in the future.",
    keyConcepts: [
      { keyword: "warning", matchTerms: ["warning", "indication", "sign", "signal", "portent", "omen", "hint", "presage", "foretell", "anticipate", "predict", "suggest"], label: "A warning or indication", hint: "The definition says 'warning or indication' — it points forward to what's coming." },
      { keyword: "future", matchTerms: ["future", "upcoming", "later", "subsequent", "coming", "eventual", "ahead", "forthcoming", "impending", "approaching", "pending", "next"], label: "Of the future", hint: "The definition says 'will happen in the future' — the foreshadowing precedes the event." },
    ],
    synonyms: ["presage", "portend", "prefigure", "herald", "suggest"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "frenetic",
    definition: "Fast, energetic, and frantic; characterized by wild activity or excitement.",
    keyConcepts: [
      { keyword: "frantic", matchTerms: ["frantic", "frenzied", "wild", "hectic", "chaotic", "manic", "intense", "furious", "fierce", "turbulent", "breathless", "disordered"], label: "Frantic and wild", hint: "The definition says 'frantic' — energy with an edge of disorder or urgency." },
      { keyword: "fast", matchTerms: ["fast", "energetic", "rapid", "vigorous", "intense", "active", "busy", "rushing", "speeding", "urgent", "restless", "driven"], label: "Fast and energetic", hint: "The definition says 'fast, energetic' — movement and activity at high speed." },
    ],
    synonyms: ["frenzied", "hectic", "frantic", "manic", "wild"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "frugal",
    definition: "Sparing in the use of resources; careful not to waste money or food.",
    keyConcepts: [
      { keyword: "sparing", matchTerms: ["sparing", "economical", "thrifty", "careful", "conservative", "restrained", "moderate", "prudent", "saving", "measured", "judicious", "minimal"], label: "Sparing with resources", hint: "The definition says 'sparing in the use of resources' — using only what is needed." },
      { keyword: "waste", matchTerms: ["waste", "squander", "excessive", "extravagant", "lavish", "spend", "use up", "exhaust", "deplete", "dissipate", "indulge", "overconsume"], label: "Careful not to waste", hint: "The definition says 'careful not to waste' — the defining concern is avoiding excess." },
    ],
    synonyms: ["thrifty", "economical", "sparing", "abstemious", "parsimonious"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "futile",
    definition: "Incapable of producing any useful result; pointless and without effect.",
    keyConcepts: [
      { keyword: "no useful result", matchTerms: ["no result", "pointless", "ineffective", "useless", "unproductive", "vain", "fruitless", "wasted", "hopeless", "unsuccessful", "empty", "in vain"], label: "No useful result", hint: "The definition says 'incapable of producing any useful result' — effort with no payoff." },
    ],
    synonyms: ["pointless", "fruitless", "useless", "vain", "ineffectual"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "gauche",
    definition: "Lacking social grace or tact; awkward in a way that causes embarrassment.",
    keyConcepts: [
      { keyword: "lacking social grace", matchTerms: ["lacking social grace", "tactless", "awkward", "clumsy", "inept", "insensitive", "crude", "blundering", "unsophisticated", "embarrassing", "unpolished", "ungainly"], label: "Lacking social grace", hint: "The definition says 'lacking social grace or tact' — not knowing how to behave." },
      { keyword: "embarrassment", matchTerms: ["embarrassment", "awkward", "uncomfortable", "cringe", "inappropriate", "offensive", "out of place", "clumsy", "unfortunate", "regrettable", "tactless", "indiscreet"], label: "Causing embarrassment", hint: "The definition says 'causes embarrassment' — the awkwardness has a social cost." },
    ],
    synonyms: ["tactless", "awkward", "clumsy", "inept", "unsophisticated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "germane",
    definition: "Relevant and appropriate to the matter being discussed; pertinent.",
    keyConcepts: [
      { keyword: "relevant", matchTerms: ["relevant", "pertinent", "applicable", "appropriate", "related", "connected", "fitting", "apt", "on point", "material", "on topic", "useful"], label: "Relevant", hint: "The definition says 'relevant and appropriate' — it fits the discussion at hand." },
    ],
    synonyms: ["relevant", "pertinent", "applicable", "fitting", "apt"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "glib",
    definition: "Speaking fluently but without sincerity or depth; superficially plausible.",
    keyConcepts: [
      { keyword: "without sincerity", matchTerms: ["without sincerity", "superficial", "shallow", "insincere", "hollow", "facile", "empty", "pat", "smooth", "slick", "flippant", "offhand"], label: "Without sincerity", hint: "The definition says 'without sincerity or depth' — the words flow easily but mean little." },
      { keyword: "fluently", matchTerms: ["fluently", "smooth", "easy", "ready", "quick", "facile", "effortless", "confident", "articulate", "ready-made", "well-rehearsed", "polished"], label: "Speaking fluently", hint: "The definition says 'speaking fluently' — the delivery is easy, which is part of the deception." },
    ],
    synonyms: ["facile", "superficial", "slick", "shallow", "insincere"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "gregarious",
    definition: "Fond of company and social interaction; enjoying the company of others.",
    keyConcepts: [
      { keyword: "fond of company", matchTerms: ["fond of company", "sociable", "outgoing", "social", "extroverted", "friendly", "convivial", "affable", "approachable", "warm", "engaging", "people-oriented"], label: "Fond of company", hint: "The definition says 'fond of company and social interaction' — genuinely enjoying being with others." },
    ],
    synonyms: ["sociable", "outgoing", "extroverted", "convivial", "social"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "hegemony",
    definition: "Leadership or dominance of one group over others, especially in political or cultural terms.",
    keyConcepts: [
      { keyword: "dominance", matchTerms: ["dominance", "leadership", "control", "authority", "supremacy", "influence", "power", "ascendancy", "sway", "mastery", "rule", "command"], label: "Dominance", hint: "The definition says 'leadership or dominance' — one party is clearly on top." },
      { keyword: "one group over others", matchTerms: ["group", "nation", "state", "class", "power", "bloc", "culture", "institution", "over others", "superiority", "hierarchy", "domination"], label: "One group over others", hint: "The definition says 'one group over others' — the relationship is unequal." },
    ],
    synonyms: ["dominance", "supremacy", "leadership", "authority", "ascendancy"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "heterogeneous",
    definition: "Made up of different kinds of elements; diverse and varied in composition.",
    keyConcepts: [
      { keyword: "different kinds", matchTerms: ["different kinds", "diverse", "varied", "mixed", "assorted", "disparate", "unlike", "dissimilar", "miscellaneous", "multifarious", "eclectic", "various"], label: "Different kinds", hint: "The definition says 'different kinds of elements' — diversity is the defining quality." },
    ],
    synonyms: ["diverse", "varied", "mixed", "disparate", "assorted"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "homogeneous",
    definition: "Made up of the same kind of elements; uniform and consistent throughout.",
    keyConcepts: [
      { keyword: "same kind", matchTerms: ["same kind", "uniform", "consistent", "identical", "alike", "similar", "undifferentiated", "standardized", "regular", "unvaried", "equal", "matching"], label: "Same kind", hint: "The definition says 'same kind of elements' — uniformity is the defining quality." },
      { keyword: "throughout", matchTerms: ["throughout", "entirely", "wholly", "across", "all through", "completely", "totally", "uniformly", "consistently", "everywhere", "without variation"], label: "Uniform throughout", hint: "The definition says 'uniform and consistent throughout' — no variation from any angle." },
    ],
    synonyms: ["uniform", "consistent", "identical", "standardized", "undifferentiated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "iconoclast",
    definition: "A person who attacks or challenges established beliefs, traditions, or institutions.",
    keyConcepts: [
      { keyword: "attacks", matchTerms: ["attacks", "challenges", "opposes", "questions", "rejects", "undermines", "criticizes", "defies", "subverts", "disrupts", "rebels against", "confronts"], label: "Attacks or challenges", hint: "The definition says 'attacks or challenges' — active opposition, not just skepticism." },
      { keyword: "established beliefs", matchTerms: ["established beliefs", "traditions", "institutions", "orthodoxy", "convention", "norms", "dogma", "status quo", "accepted wisdom", "sacred cows", "authority", "customs"], label: "Established beliefs", hint: "The definition says 'established beliefs, traditions, or institutions' — the targets are things others revere." },
    ],
    synonyms: ["rebel", "dissenter", "nonconformist", "heretic", "radical"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "idiosyncrasy",
    definition: "A distinctive characteristic or habit that is peculiar to an individual.",
    keyConcepts: [
      { keyword: "distinctive", matchTerms: ["distinctive", "peculiar", "characteristic", "unique", "individual", "personal", "specific", "particular", "singular", "unusual", "uncommon", "trademark"], label: "Distinctive characteristic", hint: "The definition says 'distinctive characteristic' — it stands out as unique to that person." },
      { keyword: "individual", matchTerms: ["individual", "person", "particular", "one's own", "personal", "private", "unique", "specific", "someone", "unique to", "characteristic of", "belonging to"], label: "Peculiar to an individual", hint: "The definition says 'peculiar to an individual' — it identifies that one person." },
    ],
    synonyms: ["quirk", "mannerism", "eccentricity", "peculiarity", "trait"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "incongruous",
    definition: "Not fitting or in harmony with the surrounding environment; out of place.",
    keyConcepts: [
      { keyword: "not fitting", matchTerms: ["not fitting", "out of place", "inappropriate", "inconsistent", "incompatible", "mismatched", "jarring", "discordant", "unsuitable", "inharmonious", "clashing", "alien"], label: "Not fitting", hint: "The definition says 'not fitting' — there is a mismatch between thing and context." },
      { keyword: "surrounding environment", matchTerms: ["environment", "context", "setting", "surroundings", "situation", "background", "place", "location", "atmosphere", "circumstances", "conditions", "backdrop"], label: "With surroundings", hint: "The definition says 'surrounding environment' — what matters is how it relates to its context." },
    ],
    synonyms: ["inappropriate", "inconsistent", "out of place", "incompatible", "mismatched"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "inconsequential",
    definition: "Not important or significant; too small or trivial to matter.",
    keyConcepts: [
      { keyword: "not important", matchTerms: ["not important", "insignificant", "trivial", "minor", "negligible", "trifling", "immaterial", "irrelevant", "meaningless", "petty", "unimportant", "small"], label: "Not important", hint: "The definition says 'not important or significant' — it registers no real weight." },
    ],
    synonyms: ["insignificant", "trivial", "minor", "negligible", "trifling"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "indolent",
    definition: "Disinclined to work or exert effort; habitually lazy.",
    keyConcepts: [
      { keyword: "disinclined to work", matchTerms: ["disinclined", "lazy", "idle", "slothful", "lethargic", "inactive", "sluggish", "inert", "apathetic", "unmotivated", "listless", "passive"], label: "Disinclined to work", hint: "The definition says 'disinclined to work' — an aversion to effort." },
    ],
    synonyms: ["lazy", "idle", "slothful", "sluggish", "inert"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "infallible",
    definition: "Incapable of making errors; never wrong or failing.",
    keyConcepts: [
      { keyword: "incapable of errors", matchTerms: ["incapable of errors", "never wrong", "perfect", "flawless", "unerring", "reliable", "certain", "dependable", "accurate", "faultless", "trustworthy", "unfailing"], label: "Incapable of errors", hint: "The definition says 'incapable of making errors' — no mistakes are possible." },
    ],
    synonyms: ["perfect", "unerring", "flawless", "certain", "reliable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "ingenuous",
    definition: "Innocent and unsuspecting; sincere and candid without hidden motives.",
    keyConcepts: [
      { keyword: "innocent", matchTerms: ["innocent", "sincere", "candid", "guileless", "naive", "artless", "honest", "open", "genuine", "straightforward", "unpretentious", "direct"], label: "Innocent and sincere", hint: "The definition says 'innocent and unsuspecting' — pure in motive and perception." },
      { keyword: "without hidden motives", matchTerms: ["without hidden motives", "transparent", "honest", "genuine", "candid", "open", "frank", "truthful", "above board", "straightforward", "uncalculating", "artless"], label: "Without hidden motives", hint: "The definition says 'without hidden motives' — what you see is genuinely what is there." },
    ],
    synonyms: ["naive", "sincere", "artless", "candid", "guileless"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "ingrained",
    definition: "Firmly established as a habit or belief; deeply rooted in someone's character.",
    keyConcepts: [
      { keyword: "firmly established", matchTerms: ["firmly established", "deeply rooted", "entrenched", "fixed", "embedded", "set", "habitual", "deep-seated", "persistent", "lasting", "abiding", "permanent"], label: "Firmly established", hint: "The definition says 'firmly established' — it has taken hold and won't easily shift." },
      { keyword: "habit or belief", matchTerms: ["habit", "belief", "attitude", "value", "pattern", "behavior", "character", "nature", "instinct", "disposition", "tendency", "conviction"], label: "As habit or belief", hint: "The definition says 'as a habit or belief' — something behavioral or mental, not physical." },
    ],
    synonyms: ["entrenched", "deep-seated", "rooted", "habitual", "fixed"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "inherent",
    definition: "Existing as a permanent and essential feature of something; built-in by nature.",
    keyConcepts: [
      { keyword: "permanent", matchTerms: ["permanent", "essential", "intrinsic", "natural", "innate", "built-in", "fundamental", "basic", "core", "native", "inseparable", "constitutive"], label: "Permanent feature", hint: "The definition says 'permanent and essential feature' — it cannot be removed without changing the thing itself." },
    ],
    synonyms: ["intrinsic", "innate", "essential", "fundamental", "native"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "iniquity",
    definition: "Grossly unfair or immoral behavior; great wickedness or injustice.",
    keyConcepts: [
      { keyword: "immoral behavior", matchTerms: ["immoral", "wickedness", "evil", "sin", "wrongdoing", "depravity", "corruption", "vice", "transgression", "injustice", "misconduct", "villainy"], label: "Immoral behavior", hint: "The definition says 'immoral behavior' — deliberate wrongdoing." },
      { keyword: "grossly unfair", matchTerms: ["grossly unfair", "unjust", "inequitable", "wrong", "egregious", "outrageous", "offensive", "abominable", "heinous", "flagrant", "extreme", "severe"], label: "Grossly unfair", hint: "The definition says 'grossly unfair' — not merely unfair but deeply, obviously so." },
    ],
    synonyms: ["wickedness", "injustice", "evil", "sin", "wrongdoing"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "insinuate",
    definition: "To suggest or hint at something unpleasant indirectly; to imply without stating directly.",
    keyConcepts: [
      { keyword: "suggest indirectly", matchTerms: ["suggest", "hint", "imply", "infer", "intimate", "indicate", "allude", "signal", "convey", "whisper", "plant", "insinuate"], label: "Suggest indirectly", hint: "The definition says 'suggest or hint indirectly' — the message is sent without being stated." },
      { keyword: "unpleasant", matchTerms: ["unpleasant", "negative", "critical", "damaging", "accusatory", "offensive", "disparaging", "derogatory", "undermining", "suspicious", "malicious", "sinister"], label: "Something unpleasant", hint: "The definition says 'something unpleasant' — what is being insinuated is usually negative." },
    ],
    synonyms: ["hint", "imply", "intimate", "suggest", "allude"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "intransigent",
    definition: "Refusing to agree or compromise; uncompromisingly rigid in one's position.",
    keyConcepts: [
      { keyword: "refusing to compromise", matchTerms: ["refusing to compromise", "unyielding", "inflexible", "rigid", "stubborn", "obstinate", "uncompromising", "hardline", "immovable", "steadfast", "firm", "entrenched"], label: "Refusing to compromise", hint: "The definition says 'refusing to agree or compromise' — no middle ground will be found." },
    ],
    synonyms: ["unyielding", "inflexible", "rigid", "stubborn", "uncompromising"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "intrinsic",
    definition: "Belonging naturally and essentially to something; inherent to its very nature.",
    keyConcepts: [
      { keyword: "naturally", matchTerms: ["naturally", "essentially", "inherently", "fundamentally", "innately", "built-in", "constitutionally", "by nature", "inseparably", "organically", "internally", "necessarily"], label: "Naturally belonging", hint: "The definition says 'belonging naturally' — no external force put it there." },
      { keyword: "very nature", matchTerms: ["nature", "essence", "core", "substance", "identity", "character", "being", "makeup", "foundation", "heart", "base", "self"], label: "Inherent to its nature", hint: "The definition says 'inherent to its very nature' — you cannot separate it from what the thing is." },
    ],
    synonyms: ["inherent", "essential", "innate", "fundamental", "natural"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "inundate",
    definition: "To overwhelm with a large number or amount; to flood with more than can be handled.",
    keyConcepts: [
      { keyword: "overwhelm", matchTerms: ["overwhelm", "flood", "swamp", "bury", "submerge", "deluge", "drown", "overload", "engulf", "saturate", "overcome", "bury"], label: "To overwhelm", hint: "The definition says 'overwhelm with a large number' — more arrives than can be dealt with." },
      { keyword: "more than can be handled", matchTerms: ["more than can be handled", "excessive", "unmanageable", "too much", "overflowing", "surplus", "beyond capacity", "unbearable", "oppressive", "crushing", "relentless"], label: "More than can be handled", hint: "The definition says 'more than can be handled' — the quantity defeats the recipient's capacity." },
    ],
    synonyms: ["overwhelm", "flood", "swamp", "deluge", "engulf"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "lavish",
    definition: "Sumptuously rich, elaborate, or luxurious; giving or using more than is necessary.",
    keyConcepts: [
      { keyword: "luxurious", matchTerms: ["luxurious", "opulent", "sumptuous", "extravagant", "elaborate", "rich", "generous", "abundant", "plentiful", "profuse", "liberal", "unstinting"], label: "Luxurious and rich", hint: "The definition says 'sumptuously rich, elaborate, or luxurious' — exceeding ordinary measure." },
      { keyword: "more than necessary", matchTerms: ["more than necessary", "excessive", "overabundant", "profuse", "unstinting", "liberal", "overgenerous", "immoderate", "unrestrained", "indulgent", "wasteful", "beyond measure"], label: "More than necessary", hint: "The definition says 'more than is necessary' — the excess is part of what defines it." },
    ],
    synonyms: ["opulent", "extravagant", "sumptuous", "generous", "abundant"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "lethargic",
    definition: "Affected by lethargy; sluggish, drowsy, and lacking energy or enthusiasm.",
    keyConcepts: [
      { keyword: "sluggish", matchTerms: ["sluggish", "drowsy", "tired", "exhausted", "listless", "slow", "torpid", "languid", "inert", "apathetic", "dull", "heavy"], label: "Sluggish", hint: "The definition says 'sluggish, drowsy' — moving through life at a reduced pace." },
      { keyword: "lacking energy", matchTerms: ["lacking energy", "without enthusiasm", "unmotivated", "lifeless", "passive", "indolent", "lethargic", "weak", "feeble", "spiritless", "flat", "inert"], label: "Lacking energy", hint: "The definition says 'lacking energy or enthusiasm' — the inner drive has gone quiet." },
    ],
    synonyms: ["sluggish", "drowsy", "listless", "torpid", "languid"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "livid",
    definition: "Furiously angry; also discolored as if bruised, typically pale or bluish.",
    keyConcepts: [
      { keyword: "furiously angry", matchTerms: ["furiously angry", "enraged", "incensed", "infuriated", "seething", "irate", "outraged", "fuming", "apoplectic", "wrathful", "beside oneself", "extremely angry"], label: "Furiously angry", hint: "The definition says 'furiously angry' — beyond irritation, at the extreme end of anger." },
    ],
    synonyms: ["furious", "enraged", "incensed", "irate", "infuriated"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "lugubrious",
    definition: "Looking or sounding mournful and dismal, often to an exaggerated degree.",
    keyConcepts: [
      { keyword: "mournful", matchTerms: ["mournful", "dismal", "gloomy", "melancholy", "doleful", "woeful", "sorrowful", "despondent", "funereal", "somber", "plaintive", "dejected"], label: "Mournful and dismal", hint: "The definition says 'mournful and dismal' — expressing deep gloom." },
      { keyword: "exaggerated", matchTerms: ["exaggerated", "overdone", "theatrical", "excessive", "dramatic", "affected", "overwrought", "performed", "deliberately", "too much", "extreme", "over-the-top"], label: "Often exaggerated", hint: "The definition says 'often to an exaggerated degree' — the sadness may be performed or overdone." },
    ],
    synonyms: ["mournful", "gloomy", "doleful", "dismal", "melancholy"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "magnanimous",
    definition: "Generously forgiving or tolerant, especially toward a defeated rival or enemy.",
    keyConcepts: [
      { keyword: "generously forgiving", matchTerms: ["forgiving", "generous", "tolerant", "gracious", "noble", "charitable", "big-hearted", "benevolent", "kind", "lenient", "understanding", "merciful"], label: "Generously forgiving", hint: "The definition says 'generously forgiving or tolerant' — giving more grace than required." },
      { keyword: "defeated rival", matchTerms: ["defeated rival", "enemy", "opponent", "adversary", "loser", "vanquished", "challenger", "competitor", "foe", "someone weaker", "those who wronged", "former enemy"], label: "Toward a defeated rival", hint: "The definition says 'especially toward a defeated rival or enemy' — magnanimity most counts in victory." },
    ],
    synonyms: ["generous", "gracious", "forgiving", "noble", "charitable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "malleable",
    definition: "Able to be shaped or influenced; easily changed or adapted.",
    keyConcepts: [
      { keyword: "shaped", matchTerms: ["shaped", "molded", "formed", "bent", "altered", "changed", "adapted", "modified", "transformed", "influenced", "manipulated", "guided"], label: "Able to be shaped", hint: "The definition says 'able to be shaped' — it yields to external force." },
      { keyword: "influenced", matchTerms: ["influenced", "persuaded", "directed", "swayed", "guided", "steered", "moved", "convinced", "changed", "receptive", "responsive", "open"], label: "Easily influenced", hint: "The definition says 'easily changed or adapted' — it doesn't resist modification." },
    ],
    synonyms: ["pliable", "flexible", "adaptable", "pliant", "yielding"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "maudlin",
    definition: "Weakly sentimental in a self-pitying or tearful way; excessively emotional.",
    keyConcepts: [
      { keyword: "sentimental", matchTerms: ["sentimental", "emotional", "tearful", "weepy", "gushing", "soppy", "mushy", "saccharine", "bathetic", "overwrought", "saccharine", "cloying"], label: "Weakly sentimental", hint: "The definition says 'weakly sentimental' — the emotion is excessive but lacking real depth." },
      { keyword: "self-pitying", matchTerms: ["self-pitying", "self-indulgent", "pathetic", "whiny", "plaintive", "pitiful", "sorry for oneself", "indulgent", "moaning", "lamenting", "wallowing", "dramatic"], label: "Self-pitying", hint: "The definition says 'self-pitying or tearful way' — the emotion is turned inward, wallowing." },
    ],
    synonyms: ["sentimental", "tearful", "weepy", "soppy", "lachrymose"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "metaphysical",
    definition: "Relating to abstract ideas about the nature of existence, reality, and being.",
    keyConcepts: [
      { keyword: "abstract ideas", matchTerms: ["abstract", "philosophical", "theoretical", "speculative", "conceptual", "intangible", "immaterial", "transcendent", "beyond physical", "intellectual", "non-empirical", "hypothetical"], label: "Abstract ideas", hint: "The definition says 'abstract ideas' — not grounded in material reality." },
      { keyword: "existence", matchTerms: ["existence", "reality", "being", "nature", "essence", "consciousness", "universe", "fundamental", "substance", "truth", "ultimate", "first principles"], label: "About existence", hint: "The definition says 'nature of existence, reality, and being' — the deepest possible questions." },
    ],
    synonyms: ["philosophical", "abstract", "transcendent", "theoretical", "spiritual"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "meticulous",
    definition: "Showing great attention to detail; extremely careful and precise.",
    keyConcepts: [
      { keyword: "great attention to detail", matchTerms: ["attention to detail", "careful", "precise", "thorough", "exact", "painstaking", "scrupulous", "fastidious", "methodical", "rigorous", "accurate", "conscientious"], label: "Great attention to detail", hint: "The definition says 'great attention to detail' — nothing small is overlooked." },
    ],
    synonyms: ["precise", "careful", "thorough", "painstaking", "scrupulous"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "modicum",
    definition: "A small quantity of something, especially something desirable or necessary.",
    keyConcepts: [
      { keyword: "small quantity", matchTerms: ["small quantity", "little", "bit", "trace", "touch", "grain", "ounce", "shred", "hint", "amount", "measure", "degree"], label: "Small quantity", hint: "The definition says 'a small quantity' — not much, just enough to mention." },
      { keyword: "desirable or necessary", matchTerms: ["desirable", "necessary", "needed", "wanted", "valuable", "important", "useful", "scarce", "worthwhile", "precious", "limited", "rare"], label: "Of something desirable", hint: "The definition says 'especially something desirable or necessary' — the smallness matters more when the thing is valued." },
    ],
    synonyms: ["bit", "trace", "touch", "amount", "measure"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "morose",
    definition: "Sullen, ill-tempered, and gloomy; silently bad-humored.",
    keyConcepts: [
      { keyword: "sullen", matchTerms: ["sullen", "gloomy", "glum", "dour", "surly", "brooding", "somber", "melancholy", "despondent", "somber", "dark", "withdrawn"], label: "Sullen and gloomy", hint: "The definition says 'sullen, ill-tempered, and gloomy' — a combination of bad mood and quiet withdrawal." },
    ],
    synonyms: ["sullen", "gloomy", "glum", "dour", "brooding"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "nascent",
    definition: "Just coming into existence and beginning to develop; emerging in its early stages.",
    keyConcepts: [
      { keyword: "coming into existence", matchTerms: ["coming into existence", "emerging", "developing", "forming", "growing", "evolving", "arising", "beginning", "incipient", "budding", "fledgling", "new"], label: "Coming into existence", hint: "The definition says 'just coming into existence' — it has barely appeared." },
      { keyword: "early stages", matchTerms: ["early stages", "beginning", "infancy", "dawn", "start", "birth", "initial", "formative", "embryonic", "rudimentary", "primitive", "foundational"], label: "In early stages", hint: "The definition says 'beginning to develop' — it is young and not yet fully formed." },
    ],
    synonyms: ["emerging", "developing", "incipient", "budding", "embryonic"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "notoriety",
    definition: "The state of being famous for a negative reason; infamy.",
    keyConcepts: [
      { keyword: "famous", matchTerms: ["famous", "known", "recognized", "notorious", "prominent", "public", "visible", "celebrated", "talked about", "renowned", "well-known", "infamous"], label: "Famous", hint: "The definition says 'state of being famous' — widely known." },
      { keyword: "negative reason", matchTerms: ["negative", "bad", "disgraceful", "shameful", "scandalous", "criminal", "disreputable", "unflattering", "embarrassing", "problematic", "unsavory", "notorious"], label: "For a negative reason", hint: "The definition says 'negative reason' — the fame is unwanted and unflattering." },
    ],
    synonyms: ["infamy", "disrepute", "ignominy", "ill-fame", "scandal"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "nuance",
    definition: "A subtle difference in meaning, tone, or expression; a delicate distinction.",
    keyConcepts: [
      { keyword: "subtle difference", matchTerms: ["subtle", "difference", "distinction", "variation", "shade", "degree", "gradation", "refinement", "complexity", "depth", "delicacy", "precision"], label: "Subtle difference", hint: "The definition says 'subtle difference' — small but meaningful." },
      { keyword: "meaning or tone", matchTerms: ["meaning", "tone", "expression", "interpretation", "connotation", "implication", "color", "mood", "character", "quality", "feeling", "sense"], label: "In meaning or tone", hint: "The definition says 'in meaning, tone, or expression' — nuance lives in the way things are communicated." },
    ],
    synonyms: ["subtlety", "distinction", "gradation", "shade", "refinement"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "obsequious",
    definition: "Excessively eager to serve or please; obedient and flattering to an excessive degree.",
    keyConcepts: [
      { keyword: "excessively eager", matchTerms: ["excessively eager", "servile", "groveling", "fawning", "sycophantic", "flattering", "ingratiating", "toadying", "kowtowing", "submissive", "compliant", "unctuous"], label: "Excessively eager", hint: "The definition says 'excessively eager to serve' — the eagerness goes too far." },
      { keyword: "please", matchTerms: ["please", "serve", "flatter", "appease", "satisfy", "accommodate", "defer to", "comply with", "indulge", "court", "win favor", "ingratiate"], label: "To serve or please", hint: "The definition says 'serve or please' — the focus is always on the other person's satisfaction." },
    ],
    synonyms: ["servile", "fawning", "sycophantic", "subservient", "unctuous"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "obsolete",
    definition: "No longer in use or production; outdated and replaced by something newer.",
    keyConcepts: [
      { keyword: "no longer in use", matchTerms: ["no longer in use", "outdated", "disused", "discontinued", "superseded", "retired", "abandoned", "extinct", "phased out", "archaic", "antiquated", "past"], label: "No longer in use", hint: "The definition says 'no longer in use' — it has been set aside." },
      { keyword: "replaced", matchTerms: ["replaced", "superseded", "updated", "improved upon", "succeeded", "surpassed", "overridden", "new version", "modern alternative", "upgraded", "substituted"], label: "Replaced by newer", hint: "The definition says 'replaced by something newer' — it was set aside for something better." },
    ],
    synonyms: ["outdated", "antiquated", "archaic", "superseded", "outmoded"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "onerous",
    definition: "Involving a great deal of effort and difficulty; burdensome and oppressive.",
    keyConcepts: [
      { keyword: "burdensome", matchTerms: ["burdensome", "oppressive", "heavy", "demanding", "taxing", "exhausting", "difficult", "hard", "trying", "weighty", "crushing", "onerous"], label: "Burdensome", hint: "The definition says 'burdensome and oppressive' — it weighs on those who bear it." },
      { keyword: "great effort", matchTerms: ["great effort", "difficulty", "exertion", "toil", "labor", "work", "struggle", "strain", "challenge", "hardship", "trouble", "obligation"], label: "Involving great effort", hint: "The definition says 'involving a great deal of effort and difficulty' — it takes a lot." },
    ],
    synonyms: ["burdensome", "oppressive", "taxing", "demanding", "arduous"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "opaque",
    definition: "Not transparent; difficult to understand or interpret clearly.",
    keyConcepts: [
      { keyword: "not transparent", matchTerms: ["not transparent", "unclear", "impenetrable", "murky", "obscure", "muddy", "cloudy", "dark", "dense", "cryptic", "inscrutable", "incomprehensible"], label: "Not transparent", hint: "The definition says 'not transparent' — you cannot see through it." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "hard to interpret", "confusing", "ambiguous", "obscure", "complex", "baffling", "unintelligible", "vague", "puzzling", "perplexing", "abstruse"], label: "Difficult to understand", hint: "The definition says 'difficult to understand or interpret' — it resists being made sense of." },
    ],
    synonyms: ["unclear", "impenetrable", "murky", "obscure", "incomprehensible"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "opprobrium",
    definition: "Harsh criticism or public disgrace resulting from shameful conduct.",
    keyConcepts: [
      { keyword: "harsh criticism", matchTerms: ["harsh criticism", "scorn", "censure", "condemnation", "reproach", "rebuke", "denunciation", "disapproval", "contempt", "vilification", "censure", "derision"], label: "Harsh criticism", hint: "The definition says 'harsh criticism' — strong negative judgment, publicly expressed." },
      { keyword: "public disgrace", matchTerms: ["public disgrace", "shame", "dishonor", "infamy", "ignominy", "humiliation", "scandal", "disrepute", "stigma", "loss of reputation", "embarrassment", "obloquy"], label: "Public disgrace", hint: "The definition says 'public disgrace' — the shame is visible to the world." },
    ],
    synonyms: ["disgrace", "censure", "condemnation", "infamy", "ignominy"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "pariah",
    definition: "A person who is rejected or avoided by society; an outcast.",
    keyConcepts: [
      { keyword: "rejected", matchTerms: ["rejected", "excluded", "avoided", "shunned", "ostracized", "cast out", "marginalized", "isolated", "unwanted", "despised", "untouchable", "expelled"], label: "Rejected by society", hint: "The definition says 'rejected or avoided by society' — actively pushed out." },
      { keyword: "outcast", matchTerms: ["outcast", "exile", "leper", "outsider", "untouchable", "misfit", "reject", "unwanted person", "social exile", "persona non grata", "expelled", "marginalized"], label: "An outcast", hint: "The definition says 'an outcast' — someone placed firmly outside the social group." },
    ],
    synonyms: ["outcast", "exile", "untouchable", "reject", "social outcast"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "partisan",
    definition: "Strongly supporting a particular cause or party in a biased way; one-sided.",
    keyConcepts: [
      { keyword: "strongly supporting", matchTerms: ["strongly supporting", "loyal", "devoted", "committed", "dedicated", "fervent", "zealous", "fanatical", "one-sided", "partial", "prejudiced", "biased"], label: "Strongly supporting", hint: "The definition says 'strongly supporting' — committed beyond neutrality." },
      { keyword: "biased", matchTerms: ["biased", "one-sided", "partial", "prejudiced", "slanted", "unfair", "factional", "sectarian", "tendentious", "interested", "non-objective", "tendentious"], label: "In a biased way", hint: "The definition says 'in a biased way' — the support is not impartial." },
    ],
    synonyms: ["biased", "one-sided", "factional", "sectarian", "partial"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "paucity",
    definition: "The presence of something in only small or insufficient quantities; scarcity.",
    keyConcepts: [
      { keyword: "small quantities", matchTerms: ["small quantities", "scarcity", "lack", "shortage", "insufficiency", "dearth", "deficiency", "meagerness", "sparseness", "inadequacy", "fewness", "rarity"], label: "Small quantities", hint: "The definition says 'only small or insufficient quantities' — not enough." },
    ],
    synonyms: ["scarcity", "shortage", "dearth", "lack", "deficiency"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "permeate",
    definition: "To spread throughout something; to penetrate every part of a substance or space.",
    keyConcepts: [
      { keyword: "spread throughout", matchTerms: ["spread throughout", "penetrate", "infuse", "pervade", "saturate", "fill", "suffuse", "flow through", "imbue", "seep into", "diffuse", "percolate"], label: "Spread throughout", hint: "The definition says 'spread throughout' — reaching every corner." },
      { keyword: "every part", matchTerms: ["every part", "all through", "entirely", "completely", "wholly", "throughout", "everywhere", "pervasively", "fully", "totally", "all aspects", "all areas"], label: "Every part", hint: "The definition says 'penetrate every part' — nothing is untouched." },
    ],
    synonyms: ["pervade", "saturate", "infuse", "penetrate", "suffuse"],
    partOfSpeech: "verb",
  },

  // [PDF]
  {
    word: "pernicious",
    definition: "Having a harmful effect in a subtle or gradual way; insidiously destructive.",
    keyConcepts: [
      { keyword: "harmful", matchTerms: ["harmful", "destructive", "damaging", "dangerous", "injurious", "deadly", "fatal", "lethal", "ruinous", "toxic", "corrosive", "corrupting"], label: "Harmful effect", hint: "The definition says 'harmful effect' — the outcome is negative." },
      { keyword: "subtle or gradual", matchTerms: ["subtle", "gradual", "insidious", "creeping", "slow", "hidden", "imperceptible", "quiet", "stealthy", "inconspicuous", "unnoticed", "cumulative"], label: "Subtle or gradual", hint: "The definition says 'subtle or gradual way' — the harm builds slowly and isn't immediately obvious." },
    ],
    synonyms: ["harmful", "insidious", "destructive", "damaging", "corrosive"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "plausible",
    definition: "Seeming reasonable or probable; appearing to be valid or true on the surface.",
    keyConcepts: [
      { keyword: "seeming reasonable", matchTerms: ["seeming reasonable", "believable", "credible", "convincing", "probable", "likely", "tenable", "defensible", "viable", "logical", "plausible", "persuasive"], label: "Seeming reasonable", hint: "The definition says 'seeming reasonable or probable' — it passes a basic test of credibility." },
      { keyword: "on the surface", matchTerms: ["on the surface", "appearance", "face value", "apparently", "ostensibly", "seemingly", "at first glance", "superficially", "without deep examination", "apparent", "prima facie"], label: "On the surface", hint: "The definition says 'on the surface' — plausibility doesn't guarantee truth, just the appearance of it." },
    ],
    synonyms: ["believable", "credible", "convincing", "probable", "tenable"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "plethora",
    definition: "A large or excessive amount of something; an overabundance.",
    keyConcepts: [
      { keyword: "excessive amount", matchTerms: ["excessive", "overabundance", "surplus", "glut", "surfeit", "excess", "superabundance", "profusion", "wealth", "flood", "oversupply", "too much"], label: "Excessive amount", hint: "The definition says 'large or excessive amount' — more than is needed or wanted." },
    ],
    synonyms: ["abundance", "excess", "surplus", "glut", "overabundance"],
    partOfSpeech: "noun",
  },

  // [PDF]
  {
    word: "pragmatic",
    definition: "Dealing with problems in a practical and realistic way rather than theoretically.",
    keyConcepts: [
      { keyword: "practical", matchTerms: ["practical", "realistic", "sensible", "rational", "reasonable", "workable", "functional", "useful", "applied", "results-oriented", "hands-on", "down-to-earth"], label: "Practical", hint: "The definition says 'practical and realistic' — concerned with what actually works." },
      { keyword: "rather than theoretically", matchTerms: ["rather than theoretical", "not ideological", "not abstract", "not idealistic", "not dogmatic", "not principle-based", "not hypothetical", "not rigid", "empirical", "flexible", "adaptive", "contextual"], label: "Not theoretical", hint: "The definition says 'rather than theoretically' — pragmatism bypasses ideology for results." },
    ],
    synonyms: ["practical", "realistic", "sensible", "down-to-earth", "functional"],
    partOfSpeech: "adjective",
  },

  // [PDF]
  {
    word: "precarious",
    definition: "Not securely held or in position; likely to fall or fail; dangerously uncertain.",
    keyConcepts: [
      { keyword: "not secure", matchTerms: ["not secure", "unstable", "unsafe", "unreliable", "fragile", "vulnerable", "shaky", "unsteady", "tenuous", "uncertain", "perilous", "risky"], label: "Not secure", hint: "The definition says 'not securely held' — there is no firm foundation." },
      { keyword: "likely to fail", matchTerms: ["likely to fail", "dangerous", "uncertain", "hazardous", "doubtful", "at risk", "threatened", "in jeopardy", "critical", "volatile", "unpredictable", "exposed"], label: "Likely to fail", hint: "The definition says 'likely to fall or fail' — instability makes a bad outcome probable." },
    ],
    synonyms: ["unstable", "uncertain", "risky", "tenuous", "vulnerable"],
    partOfSpeech: "adjective",
  },

];
