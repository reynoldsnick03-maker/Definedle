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
    etymology: "Latin acerbus, from acer (sharp, keen).",
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
    etymology: "Greek anathema (a thing devoted to evil, accursed thing).",
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
    etymology: "Greek anodynos -- an (without) + odyne (pain).",
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
    etymology: "Greek apokryphos (hidden, obscure), from apokryptein (to hide away).",
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
    etymology: "Old English bealu (evil, harm, calamity) + -ful.",
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
    etymology: "Latin bellum (war) + gerere (to wage).",
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
    etymology: "From bombast, originally cotton padding used to stuff garments -- puffed up.",
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
    etymology: "Greek boukolikos, from boukolos (cowherd) -- bous (ox) + kolos (tending).",
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
    etymology: "Italian capriccio (sudden start), perhaps from capra (goat) -- goats' unpredictable leaping.",
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
    etymology: "Greek katharsis (purification, cleansing), from kathairein (to purify).",
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
    etymology: "Greek khimaira, the Chimera -- a mythological creature combining parts of different animals.",
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
    etymology: "Latin colloquium (conversation), from com (together) + loqui (to speak).",
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
    etymology: "Latin complacere (to please greatly), from com (intensive) + placere (to please).",
  },
  {
    word: "conflate",
    definition: "To combine two or more things into one, often erroneously.",
    keyConcepts: [
      { keyword: "combine", matchTerms: ["combin", "merge", "blend", "mix", "fuse", "join", "unite"], label: "Combine into one", hint: "The definition describes merging separate things together." },
      { keyword: "erroneously", matchTerms: ["error", "mistake", "wrong", "confus", "incorrectly", "improperly"], label: "Often mistakenly", hint: "The combination frequently leads to confusion or error." },
    ],
    synonyms: ["merge", "combine", "blend", "confuse", "mix up"],
    partOfSpeech: "verb",
    etymology: "Latin conflare -- con (together) + flare (to blow).",
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
    etymology: "Latin contemptus, from contemnere (to despise).",
  },
  {
    word: "convoluted",
    definition: "Extremely complex and difficult to follow.",
    keyConcepts: [
      { keyword: "complex", matchTerms: ["complex", "complicated", "intricate", "elaborate", "tangled"], label: "Extremely complex", hint: "The definition emphasizes excessive complexity." },
      { keyword: "difficult", matchTerms: ["difficult", "hard", "confus", "unclear", "incomprehensible"], label: "Hard to follow", hint: "The complexity makes understanding very challenging." },
    ],
    synonyms: ["complex", "complicated", "intricate", "tangled", "labyrinthine"],
    partOfSpeech: "adjective",
    etymology: "Latin convolutus (rolled together), from con + volvere (to roll).",
  },
  {
    word: "cynical",
    definition: "Believing that people are motivated purely by self-interest; distrustful of sincerity.",
    keyConcepts: [
      { keyword: "self-interest", matchTerms: ["self-interest", "selfish", "ulterior", "motiv", "gain"], label: "Assumes self-interest", hint: "The definition describes assuming the worst about people's motives." },
      { keyword: "distrustful", matchTerms: ["distrust", "skeptic", "doubt", "suspicious", "disbeliev"], label: "Distrustful", hint: "A cynical person doesn't believe in others' good intentions." },
    ],
    synonyms: ["skeptical", "distrustful", "pessimistic", "jaded", "misanthropic"],
    partOfSpeech: "adjective",
    etymology: "Greek kynikos (dog-like), from the Cynic philosophers who rejected social conventions.",
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
    etymology: "Greek demagogos -- demos (people) + agogos (leading), from agein (to lead).",
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
    etymology: "Old French demorer, from Latin demorari -- de (completely) + morari (to delay).",
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
    etymology: "Latin desultorius, from desultor -- a circus rider who leaps from horse to horse.",
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
    etymology: "Latin diffidere (to mistrust), from dis (away) + fidere (to trust).",
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
    etymology: "Italian dilettante (lover of the arts), from dilettare (to delight).",
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
    etymology: "French desabuser -- des (away, from) + abuser (to deceive, abuse).",
  },
  {
    word: "dogmatic",
    definition: "Inclined to lay down principles as incontrovertibly true, without consideration of evidence.",
    keyConcepts: [
      { keyword: "principles", matchTerms: ["principl", "belief", "doctrine", "tenet", "rule", "assertion"], label: "Lays down principles", hint: "The definition describes declaring things as absolute truth." },
      { keyword: "without", matchTerms: ["without", "ignor", "regardless", "dismiss", "inflexib"], label: "Ignores evidence", hint: "Beliefs are held rigidly despite contrary evidence." },
    ],
    synonyms: ["doctrinaire", "opinionated", "assertive", "insistent", "rigid"],
    partOfSpeech: "adjective",
    etymology: "Greek dogma (opinion, belief), from dokein (to seem good, think).",
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
    etymology: "Latin duplex (twofold), from duo (two) + plicare (to fold).",
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
    etymology: "Latin effetus -- ex (out) + fetus (breeding).",
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
    etymology: "Latin egregius (outstanding), from ex (out of) + grex (flock). Originally a compliment.",
  },
  {
    word: "emollient",
    definition: "Having a softening or soothing effect, especially on skin or on feelings.",
    keyConcepts: [
      { keyword: "softening", matchTerms: ["soften", "smooth", "moistur", "supple", "gentle"], label: "Softening effect", hint: "The definition describes making something less rough or harsh." },
      { keyword: "soothing", matchTerms: ["sooth", "calm", "ease", "comfort", "reliev", "pacif"], label: "Soothing quality", hint: "Brings comfort or relief, whether physical or emotional." },
    ],
    synonyms: ["soothing", "softening", "mollifying", "calming"],
    partOfSpeech: "adjective",
    etymology: "Latin emollire -- e (out) + mollire (to soften), from mollis (soft).",
  },
  {
    word: "ephemeral",
    definition: "Lasting for a very short time; fleeting.",
    keyConcepts: [
      { keyword: "short", matchTerms: ["short", "brief", "momentary", "transient", "temporary"], label: "Very short duration", hint: "The definition emphasizes extreme brevity." },
      { keyword: "fleeting", matchTerms: ["fleeting", "passing", "vanish", "disappear", "fading"], label: "Fleeting nature", hint: "It comes and goes quickly, leaving little trace." },
    ],
    synonyms: ["transient", "fleeting", "momentary", "brief", "short-lived"],
    partOfSpeech: "adjective",
    etymology: "Greek ephemeros -- epi (on) + hemera (day).",
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
    etymology: "Latin aequanimitas -- aequus (equal, even) + animus (mind, spirit).",
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
    etymology: "Latin aequivocus -- aequus (equal) + vox (voice) -- speaking in two ways.",
  },
  {
    word: "ersatz",
    definition: "An inferior substitute or imitation.",
    keyConcepts: [
      { keyword: "inferior", matchTerms: ["inferior", "poor", "cheap", "lesser", "low-quality"], label: "Inferior quality", hint: "The definition emphasizes that it's worse than the original." },
      { keyword: "substitute", matchTerms: ["substitut", "imitat", "replac", "fake", "artificial", "counterfeit"], label: "Substitute or imitation", hint: "It's meant to stand in for something genuine." },
    ],
    synonyms: ["artificial", "imitation", "fake", "substitute", "synthetic"],
    partOfSpeech: "adjective",
    etymology: "German Ersatz, from ersetzen (to replace).",
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
    etymology: "Greek esoterikos (inner), from esotero (more within).",
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
    etymology: "Latin excoriare -- ex (off) + corium (skin, hide).",
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
    etymology: "Latin exigere -- ex (out) + agere (to drive).",
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
    etymology: "Latin facetus (witty, elegant).",
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
    etymology: "Latin fallacia (deception), from fallax (deceitful).",
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
    etymology: "Latin fatuus (foolish, insipid).",
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
    etymology: "Scottish feck (effect, value) + -less -- literally 'without effect.'",
  },
  {
    word: "frivolous",
    definition: "Not having any serious purpose or value; trivial.",
    keyConcepts: [
      { keyword: "serious", matchTerms: ["serious", "important", "significant", "substantial", "weighty"], label: "Lacks seriousness", hint: "The definition emphasizes absence of gravity or purpose." },
      { keyword: "trivial", matchTerms: ["trivial", "petty", "minor", "insignificant", "superficial"], label: "Trivial nature", hint: "Matters little in the grand scheme." },
    ],
    synonyms: ["trivial", "petty", "trifling", "flippant", "superficial"],
    partOfSpeech: "adjective",
    etymology: "Latin frivolus (silly, empty, trifling).",
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
    etymology: "Latin furtivus (stolen, hidden), from fur (thief).",
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
    etymology: "Latin garrulus (talkative), from garrire (to chatter).",
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
    etymology: "Latin gratuitus (free, spontaneous), from gratia (favor).",
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
    etymology: "From Hackney, a London borough where horses were hired out -- overworked horses.",
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
    etymology: "Greek hybris (insolence, outrage against the gods).",
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
    etymology: "Greek eikonoklastes -- eikon (image, likeness) + klastes (breaker).",
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
    etymology: "Latin ignobilis -- in (not) + gnobilis, older form of nobilis (noble).",
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
    etymology: "Latin implacabilis, from im (not) + placare (to calm, soothe, please).",
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
    etymology: "Latin impunitas, from im (not) + poena (penalty).",
  },
  {
    word: "incisive",
    definition: "Intelligently analytical and clear-thinking.",
    keyConcepts: [
      { keyword: "analytical", matchTerms: ["analyt", "penetrat", "keen", "sharp", "astute", "perceptive"], label: "Intelligently analytical", hint: "The definition describes mental sharpness that cuts to the core." },
      { keyword: "clear", matchTerms: ["clear", "lucid", "precise", "direct", "focused"], label: "Clear-thinking", hint: "Thoughts and expressions are crisp and unmuddled." },
    ],
    synonyms: ["penetrating", "keen", "sharp", "perceptive", "astute"],
    partOfSpeech: "adjective",
    etymology: "Latin incidere (to cut into), from in + caedere (to cut).",
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
    etymology: "Latin ineffabilis, from in (not) + effari (to utter).",
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
    etymology: "Latin inexorabilis, from in (not) + exorare (to prevail upon).",
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
    etymology: "Latin inimicalis, from inimicus -- in (not) + amicus (friend).",
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
    etymology: "Latin insatiabilis, from in (not) + satiare (to satisfy).",
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
    etymology: "Latin insidiosus (cunning), from insidiae (ambush).",
  },
  {
    word: "insouciant",
    definition: "Showing a casual lack of concern; carefree.",
    keyConcepts: [
      { keyword: "casual", matchTerms: ["casual", "nonchalant", "relaxed", "unconcerned", "indifferent"], label: "Casual manner", hint: "The definition describes an easy, unbothered attitude." },
      { keyword: "carefree", matchTerms: ["carefree", "lightheart", "blithe", "unworried", "breezy"], label: "Carefree attitude", hint: "Concerns that would trouble others don't register." },
    ],
    synonyms: ["nonchalant", "carefree", "unconcerned", "blithe", "indifferent"],
    partOfSpeech: "adjective",
    etymology: "French insouciant, from in (not) + soucier (to care).",
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
    etymology: "Anglo-French enveogler (to blind, delude).",
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
    etymology: "Latin irascibilis, from irasci, from ira (anger).",
  },
  {
    word: "jejune",
    definition: "Naive, simplistic, and superficial; lacking substance.",
    keyConcepts: [
      { keyword: "naive", matchTerms: ["naive", "childish", "immature", "unsophistic", "innocent"], label: "Naive quality", hint: "The definition describes a lack of worldly understanding." },
      { keyword: "superficial", matchTerms: ["superficial", "shallow", "empty", "thin", "lacking"], label: "Lacking substance", hint: "There's no depth or richness." },
    ],
    synonyms: ["naive", "simplistic", "unsophisticated", "puerile", "vapid"],
    partOfSpeech: "adjective",
    etymology: "Latin jejunus -- the jejunum (part of the small intestine) is named from the same root.",
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
    etymology: "From Laconia (Sparta), whose people were famous for brief speech.",
  },
  {
    word: "lethargic",
    definition: "Affected by a lack of energy; sluggish and apathetic.",
    keyConcepts: [
      { keyword: "lack", matchTerms: ["lack", "without", "low", "deficient", "drained"], label: "Lack of energy", hint: "The definition describes an energy deficit." },
      { keyword: "sluggish", matchTerms: ["sluggish", "slow", "drowsy", "torpid", "listless", "languid"], label: "Sluggish state", hint: "Movement and thought are slowed." },
    ],
    synonyms: ["sluggish", "listless", "languid", "torpid", "enervated"],
    partOfSpeech: "adjective",
    etymology: "Greek lethargia (drowsiness), from lethe (forgetfulness).",
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
    etymology: "Latin ludicrus (sportive), from ludus (play, game).",
  },
  {
    word: "lugubrious",
    definition: "Looking or sounding sad and dismal; mournful.",
    keyConcepts: [
      { keyword: "sad", matchTerms: ["sad", "sorrow", "grief", "melanchol", "gloomy", "morose"], label: "Sad appearance", hint: "The definition describes an outward show of sadness." },
      { keyword: "dismal", matchTerms: ["dismal", "dreary", "bleak", "somber", "funereal", "doleful"], label: "Dismal quality", hint: "There's a heaviness and darkness to it." },
    ],
    synonyms: ["mournful", "doleful", "melancholy", "sorrowful", "woeful"],
    partOfSpeech: "adjective",
    etymology: "Latin lugubris, from lugere (to mourn).",
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
    etymology: "Dutch maelstrom -- malen (to grind) + stroom (stream).",
  },
  {
    word: "magniloquent",
    definition: "Using high-flown or bombastic language; grandly eloquent.",
    keyConcepts: [
      { keyword: "high-flown", matchTerms: ["high-flown", "lofty", "grandiose", "elevated", "pompous"], label: "High-flown language", hint: "The definition describes speech that aims high." },
      { keyword: "bombastic", matchTerms: ["bombast", "inflated", "pretentious", "overwrought", "flowery"], label: "Bombastic style", hint: "The grandeur may exceed the substance." },
    ],
    synonyms: ["grandiloquent", "pompous", "bombastic", "pretentious", "rhetorical"],
    partOfSpeech: "adjective",
    etymology: "Latin grandiloquus -- grandis (grand, great) + loqui (to speak).",
  },
  {
    word: "mellifluous",
    definition: "Sweet or musical; pleasant to hear.",
    keyConcepts: [
      { keyword: "sweet", matchTerms: ["sweet", "honeyed", "rich", "smooth", "mellow"], label: "Sweet sound", hint: "The definition describes something pleasing to the ear." },
      { keyword: "pleasant", matchTerms: ["pleasant", "agreeable", "soothing", "melodious", "harmonious"], label: "Pleasant to hear", hint: "The sound brings pleasure rather than grating." },
    ],
    synonyms: ["sweet-sounding", "melodious", "dulcet", "honeyed", "euphonious"],
    partOfSpeech: "adjective",
    etymology: "Latin mellifluus -- mel (honey) + fluere (to flow).",
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
    etymology: "French mordant, from mordre, from Latin mordere (to bite).",
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
    etymology: "Greek myopia (nearsightedness), from myein (to close) + ops (eye).",
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
    etymology: "Latin nihil (nothing) + -ism -- the doctrine of nothing.",
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
    etymology: "French nonchalant, from non (not) + chaloir (to concern).",
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
    etymology: "Latin obdurare, from ob (against) + durare (to harden), from durus (hard).",
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
    etymology: "Latin officiosus, from officium (duty, service).",
  },
  {
    word: "ossify",
    definition: "To turn into bone; to become rigid and set in one's ways.",
    keyConcepts: [
      { keyword: "bone", matchTerms: ["bone", "harden", "calcif", "solidif", "petrif"], label: "Turn into bone", hint: "The definition describes a hardening process." },
      { keyword: "rigid", matchTerms: ["rigid", "inflexib", "fixed", "unchang", "stuck", "set"], label: "Become rigid", hint: "Flexibility is lost; things become fixed." },
    ],
    synonyms: ["harden", "solidify", "petrify", "fossilize", "calcify"],
    partOfSpeech: "verb",
    etymology: "Latin os (bone) + -ify (to make).",
  },
  {
    word: "palpable",
    definition: "So intense as to be almost felt physically; easily perceived.",
    keyConcepts: [
      { keyword: "intense", matchTerms: ["intense", "strong", "powerful", "overwhelming", "tangible"], label: "Intense quality", hint: "The definition describes something very strong." },
      { keyword: "perceived", matchTerms: ["perceiv", "felt", "sens", "detect", "notic", "obvious"], label: "Easily perceived", hint: "It's unmistakably present." },
    ],
    synonyms: ["tangible", "perceptible", "noticeable", "obvious", "unmistakable"],
    partOfSpeech: "adjective",
    etymology: "Latin palpare (to touch gently, stroke).",
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
    etymology: "Latin impecuniosus -- in (not) + pecuniosus, from pecunia (money), from pecu (cattle).",
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
    etymology: "Italian pedante (teacher), perhaps from Greek paideuein (to teach).",
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
    etymology: "Latin peremptorius (destructive, decisive), from perimere (to destroy).",
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
    etymology: "Latin perfunctorius (careless), from perfungi (to get through with).",
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
    etymology: "From the Philistines, ancient enemies of the Israelites, used by German students for 'townspeople.'",
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
    etymology: "French platitude (flatness, dullness), from plat (flat).",
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
    etymology: "Old French poignant (pricking, stinging), from Latin pungere (to prick).",
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
    etymology: "Greek polemikos, from polemos (war).",
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
    etymology: "Latin probitas, from probus (good, honest).",
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
    etymology: "Latin profligatus, from profligare -- pro (forward) + fligere (to strike).",
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
    etymology: "Latin pugnax, from pugnare (to fight), from pugnus (fist).",
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
    etymology: "Quag (marshy ground) + mire (swampy ground).",
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
    etymology: "Latin quiescere, from quies (rest, quiet).",
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
    etymology: "From Don Quixote, the idealistic knight in Cervantes' novel.",
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
    etymology: "Old French rancor, from Latin rancorem, from rancere (to stink).",
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
    etymology: "Latin saliens (leaping), from salire (to leap) -- originally 'leaping out.'",
  },
  {
    word: "sanguine",
    definition: "Optimistic or positive, especially in a difficult situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimist", "hopeful", "positive", "confident", "cheerful"], label: "Optimistic attitude", hint: "The definition describes a positive outlook." },
      { keyword: "difficult", matchTerms: ["difficult", "challeng", "adverse", "tough", "despite"], label: "Despite difficulties", hint: "The optimism persists even when things are hard." },
    ],
    synonyms: ["optimistic", "hopeful", "confident", "positive", "buoyant"],
    partOfSpeech: "adjective",
    etymology: "Latin sanguineus, from sanguis (blood).",
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
    etymology: "Greek sardonios, possibly from a Sardinian plant (herba sardonia).",
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
    etymology: "Latin sedulus, from sedulo, from se (without) + dolus (trickery).",
  },
  {
    word: "sentimental",
    definition: "Having or arousing feelings of tenderness, sadness, or nostalgia.",
    keyConcepts: [
      { keyword: "tenderness", matchTerms: ["tender", "gentle", "soft", "warm", "affection"], label: "Feelings of tenderness", hint: "The definition describes gentle, caring emotions." },
      { keyword: "nostalgia", matchTerms: ["nostalg", "yearn", "wistful", "longing", "reminiscent"], label: "Sadness or nostalgia", hint: "Often involves looking back with emotion." },
    ],
    synonyms: ["emotional", "nostalgic", "romantic", "tender", "mawkish"],
    partOfSpeech: "adjective",
    etymology: "Latin sentire (to feel).",
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
    etymology: "Coined by Horace Walpole from the fairy tale 'The Three Princes of Serendip.'",
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
    etymology: "Latin sollicitus (anxious), from sollus (entire) + ciere (to set in motion).",
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
    etymology: "Latin spurius (illegitimate, false).",
  },
  {
    word: "stoic",
    definition: "Enduring pain or hardship without showing feelings or complaining.",
    keyConcepts: [
      { keyword: "enduring", matchTerms: ["endur", "bear", "withstand", "tolerat", "suffer"], label: "Enduring hardship", hint: "The definition describes bearing difficulty." },
      { keyword: "without", matchTerms: ["without", "suppress", "hide", "conceal", "uncomplain"], label: "Without showing feelings", hint: "Emotions are kept internal rather than expressed." },
    ],
    synonyms: ["impassive", "unemotional", "uncomplaining", "resigned", "long-suffering"],
    partOfSpeech: "adjective",
    etymology: "Greek stoikos, from Stoa Poikile (Painted Porch) where Stoic philosophers taught.",
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
    etymology: "Latin subvertere -- sub (from below) + vertere (to turn).",
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
    etymology: "Latin supplicare, from sub (under, from below) + plicare (to fold).",
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
    etymology: "Latin surreptitius, from surripere (to snatch secretly).",
  },
  {
    word: "sybaritic",
    definition: "Fond of sensuous luxury or pleasure; self-indulgent.",
    keyConcepts: [
      { keyword: "luxury", matchTerms: ["luxur", "comfort", "opulen", "lavish", "extravagan"], label: "Fond of luxury", hint: "The definition describes love of fine things." },
      { keyword: "pleasure", matchTerms: ["pleasure", "indulg", "hedon", "sensual", "gratif"], label: "Self-indulgent pleasure", hint: "Physical and sensual enjoyment is prioritized." },
    ],
    synonyms: ["hedonistic", "luxurious", "self-indulgent", "decadent", "voluptuous"],
    partOfSpeech: "adjective",
    etymology: "From Sybaris, a Greek colony in southern Italy.",
  },
  {
    word: "sycophantic",
    definition: "Behaving in an obsequious way to gain advantage; excessively flattering.",
    keyConcepts: [
      { keyword: "obsequious", matchTerms: ["obsequi", "servile", "fawning", "grovel", "toady"], label: "Obsequious behavior", hint: "The definition describes excessive deference." },
      { keyword: "flattering", matchTerms: ["flatter", "prais", "compliment", "ingratiat", "butter"], label: "Excessive flattery", hint: "The praise is calculated rather than sincere." },
    ],
    synonyms: ["obsequious", "fawning", "servile", "toadying", "ingratiating"],
    partOfSpeech: "adjective",
    etymology: "Greek sykophantes -- sykon (fig) + phainein (to show).",
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
    etymology: "Latin tacitus (silent), from tacere (to be silent).",
  },
  {
    word: "tenacious",
    definition: "Holding firmly to something; persistent and determined.",
    keyConcepts: [
      { keyword: "firmly", matchTerms: ["firm", "tight", "strong", "secure", "grip"], label: "Holding firmly", hint: "The definition describes a strong grip." },
      { keyword: "persistent", matchTerms: ["persistent", "determin", "resolut", "dogged", "stubborn"], label: "Persistent and determined", hint: "The effort doesn't let up." },
    ],
    synonyms: ["persistent", "determined", "resolute", "dogged", "persevering"],
    partOfSpeech: "adjective",
    etymology: "Latin tenax (holding fast), from tenere (to hold).",
  },
  {
    word: "torpid",
    definition: "Mentally or physically inactive; lethargic and sluggish.",
    keyConcepts: [
      { keyword: "inactive", matchTerms: ["inactiv", "idle", "dormant", "still", "motionless"], label: "Mentally or physically inactive", hint: "The definition describes absence of activity." },
      { keyword: "sluggish", matchTerms: ["sluggish", "letharg", "slow", "languid", "listless"], label: "Lethargic and sluggish", hint: "Movement and thought are slowed." },
    ],
    synonyms: ["lethargic", "sluggish", "inactive", "listless", "languid"],
    partOfSpeech: "adjective",
    etymology: "Latin torpidus, from torpere (to be numb or sluggish).",
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
    etymology: "Latin truculentus (fierce, savage), from trux (fierce).",
  },
  {
    word: "turgid",
    definition: "Swollen and distended; pompous or bombastic in language.",
    keyConcepts: [
      { keyword: "swollen", matchTerms: ["swollen", "bloat", "distend", "puff", "inflat"], label: "Swollen and distended", hint: "The definition describes excessive fullness." },
      { keyword: "pompous", matchTerms: ["pompous", "bombast", "grandios", "pretentious", "overblown"], label: "Pompous language", hint: "Language is puffed up beyond its substance." },
    ],
    synonyms: ["swollen", "bloated", "pompous", "bombastic", "pretentious"],
    partOfSpeech: "adjective",
    etymology: "Latin turgidus, from turgere (to swell).",
  },
  {
    word: "unequivocal",
    definition: "Leaving no doubt; completely clear and unambiguous.",
    keyConcepts: [
      { keyword: "doubt", matchTerms: ["doubt", "uncertain", "question", "ambiguous", "vague"], label: "Leaves no doubt", hint: "The definition negates uncertainty." },
      { keyword: "clear", matchTerms: ["clear", "definite", "absolute", "unmistak", "decisive"], label: "Completely clear", hint: "The meaning is obvious and direct." },
    ],
    synonyms: ["unambiguous", "clear", "definite", "unmistakable", "categorical"],
    partOfSpeech: "adjective",
    etymology: "Un- (not) + Latin aequivocus -- aequus (equal) + vox (voice).",
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
    etymology: "Latin vapidus (flat-tasting, insipid).",
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
    etymology: "Latin vindicare (to claim, avenge).",
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
    etymology: "Latin vitreolus (glassy), later meaning sulfuric acid -- something that burns.",
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
    etymology: "Latin vociferari -- vox (voice) + ferre (to carry).",
  },
  {
    word: "whimsical",
    definition: "Playfully quaint or fanciful, especially in an appealing way.",
    keyConcepts: [
      { keyword: "playful", matchTerms: ["playful", "lightheart", "fun", "merry", "frisky"], label: "Playful quality", hint: "The definition describes a lighthearted spirit." },
      { keyword: "fanciful", matchTerms: ["fanciful", "imagin", "quirky", "capricious", "eccentric"], label: "Quaint or fanciful", hint: "There's charm in the unexpectedness." },
    ],
    synonyms: ["fanciful", "playful", "quirky", "capricious", "imaginative"],
    partOfSpeech: "adjective",
    etymology: "From whim (a sudden fancy), of uncertain origin.",
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
    etymology: "Old English windwian, from wind.",
  },
  {
    word: "zealous",
    definition: "Having great energy or enthusiasm for a cause or objective.",
    keyConcepts: [
      { keyword: "energy", matchTerms: ["energy", "vigor", "passion", "fervor", "ardor"], label: "Great energy", hint: "The definition describes intense drive." },
      { keyword: "enthusiasm", matchTerms: ["enthusi", "eager", "devot", "dedicat", "commit"], label: "Enthusiasm for a cause", hint: "The energy is directed at something specific." },
    ],
    synonyms: ["passionate", "fervent", "enthusiastic", "ardent", "devoted"],
    partOfSpeech: "adjective",
    etymology: "Greek zelos (zeal, ardor).",
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
    etymology: "German Zeitgeist -- Zeit (time) + Geist (spirit, ghost).",
  },

  // ===== NEW ENTRIES (to be created) =====
  
  {
    word: "acknowledge",
    definition: "To accept or admit the existence or truth of something.",
    keyConcepts: [
      { keyword: "accept", matchTerms: ["accept", "admit", "recogniz", "concede", "grant"], label: "Accept or admit", hint: "The definition involves accepting something as true." },
      { keyword: "existence", matchTerms: ["exist", "truth", "reality", "fact", "presence"], label: "Existence or truth", hint: "What's being acknowledged is real or valid." },
    ],
    synonyms: ["admit", "recognize", "accept", "concede", "confess"],
    partOfSpeech: "verb",
    etymology: "Old English oncnawan, from on + cnawan (to know). Related to 'know.'",
  },
  {
    word: "accurate",
    definition: "Correct in all details; free from errors.",
    keyConcepts: [
      { keyword: "correct", matchTerms: ["correct", "right", "true", "exact", "precise"], label: "Correct in details", hint: "The definition emphasizes being right." },
      { keyword: "errors", matchTerms: ["error", "mistake", "fault", "flaw", "inaccura"], label: "Free from errors", hint: "Nothing is wrong or mistaken." },
    ],
    synonyms: ["precise", "exact", "correct", "true", "faithful"],
    partOfSpeech: "adjective",
    etymology: "Latin accuratus (prepared with care), from ad (to) + cura (care).",
  },
  {
    word: "ambiguous",
    definition: "Open to more than one interpretation; not clear or decided.",
    keyConcepts: [
      { keyword: "interpretation", matchTerms: ["interpret", "meaning", "understand", "read", "constru"], label: "Multiple interpretations", hint: "The definition allows for different readings." },
      { keyword: "clear", matchTerms: ["clear", "definite", "certain", "decided", "obvious"], label: "Not clear", hint: "The meaning isn't obvious or fixed." },
    ],
    synonyms: ["unclear", "vague", "equivocal", "obscure", "cryptic"],
    partOfSpeech: "adjective",
    etymology: "Latin ambiguus (shifting, doubtful), from ambigere -- ambi (both ways) + agere (to drive).",
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
    etymology: "Greek anekdota (things unpublished), from an (not) + ekdotos (published).",
  },
  {
    word: "anticipate",
    definition: "To expect or predict something; to act in advance of.",
    keyConcepts: [
      { keyword: "expect", matchTerms: ["expect", "predict", "foresee", "forecast", "envision"], label: "Expect or predict", hint: "The definition involves looking ahead." },
      { keyword: "advance", matchTerms: ["advance", "ahead", "before", "prior", "prepar"], label: "Act in advance", hint: "Action is taken before something happens." },
    ],
    synonyms: ["expect", "foresee", "predict", "await", "prepare for"],
    partOfSpeech: "verb",
    etymology: "Latin anticipare -- ante (before) + capere (to take).",
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
    etymology: "Latin asserere (to claim), from ad (to) + serere (to join).",
  },
  {
    word: "attentive",
    definition: "Paying close attention; alert and observant.",
    keyConcepts: [
      { keyword: "attention", matchTerms: ["attention", "focus", "concentrat", "mindful", "heed"], label: "Paying close attention", hint: "The definition emphasizes careful focus." },
      { keyword: "observant", matchTerms: ["observant", "alert", "watchful", "aware", "vigilant"], label: "Alert and observant", hint: "Nothing escapes notice." },
    ],
    synonyms: ["alert", "observant", "watchful", "mindful", "vigilant"],
    partOfSpeech: "adjective",
    etymology: "Latin attendere -- ad (to) + tendere (to stretch).",
  },
  {
    word: "auspicious",
    definition: "Conducive to success; favorable or promising.",
    keyConcepts: [
      { keyword: "success", matchTerms: ["success", "fortunate", "lucky", "prosper", "good"], label: "Conducive to success", hint: "The definition points to positive outcomes." },
      { keyword: "favorable", matchTerms: ["favorab", "promis", "hopeful", "encouragin", "bright"], label: "Favorable signs", hint: "Conditions suggest things will go well." },
    ],
    synonyms: ["favorable", "promising", "propitious", "fortunate", "opportune"],
    partOfSpeech: "adjective",
    etymology: "Latin auspicium (divination by birds), from avis (bird) + specere (to look).",
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
    etymology: "Middle English awke (turned the wrong way) + -ward. From Old Norse ofugr (turned backward).",
  },
  {
    word: "benevolent",
    definition: "Well-meaning and kindly; showing goodwill.",
    keyConcepts: [
      { keyword: "kindly", matchTerms: ["kind", "generous", "caring", "compassion", "warm"], label: "Well-meaning and kindly", hint: "The definition describes positive intentions." },
      { keyword: "goodwill", matchTerms: ["goodwill", "charit", "altruist", "philanthrop", "helpful"], label: "Shows goodwill", hint: "There's genuine desire to help others." },
    ],
    synonyms: ["kind", "generous", "charitable", "compassionate", "altruistic"],
    partOfSpeech: "adjective",
    etymology: "Latin benevolens -- bene (well) + volens (wishing), from velle (to wish).",
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
    etymology: "French biais (oblique, slant), of uncertain origin.",
  },
  {
    word: "brief",
    definition: "Of short duration; using few words.",
    keyConcepts: [
      { keyword: "short", matchTerms: ["short", "quick", "fleeting", "momentary", "transient"], label: "Short duration", hint: "The definition emphasizes brevity in time." },
      { keyword: "few", matchTerms: ["few", "concise", "succinct", "terse", "compact"], label: "Using few words", hint: "Communication is economical." },
    ],
    synonyms: ["short", "concise", "succinct", "quick", "fleeting"],
    partOfSpeech: "adjective",
    etymology: "Latin brevis (short). Related to 'abbreviate.'",
  },
  {
    word: "busy",
    definition: "Having a great deal to do; occupied with activity.",
    keyConcepts: [
      { keyword: "great", matchTerms: ["great", "much", "lot", "full", "packed"], label: "Great deal to do", hint: "The definition describes having many tasks." },
      { keyword: "occupied", matchTerms: ["occupi", "engag", "active", "working", "involv"], label: "Occupied with activity", hint: "Time and attention are filled." },
    ],
    synonyms: ["occupied", "engaged", "active", "hectic", "industrious"],
    partOfSpeech: "adjective",
    etymology: "Old English bisig (anxious, careful). Of Germanic origin.",
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
    etymology: "Hebrew qabbalah (received tradition), from qabal (to receive).",
  },
  {
    word: "calm",
    definition: "Not showing or feeling nervousness, anger, or other strong emotions.",
    keyConcepts: [
      { keyword: "showing", matchTerms: ["show", "display", "exhibit", "express", "reveal"], label: "Not showing", hint: "The definition describes outward composure." },
      { keyword: "emotions", matchTerms: ["emotion", "nervous", "anger", "agitat", "stress"], label: "Strong emotions", hint: "Intense feelings are absent or controlled." },
    ],
    synonyms: ["peaceful", "tranquil", "serene", "composed", "placid"],
    partOfSpeech: "adjective",
    etymology: "Greek kauma (heat of the day) -- the time when activity stops.",
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
    etymology: "Greek kharisma (divine gift), from kharis (grace, favor).",
  },
  {
    word: "coherent",
    definition: "Logical and consistent; able to be understood.",
    keyConcepts: [
      { keyword: "logical", matchTerms: ["logic", "rational", "reason", "sensib", "sound"], label: "Logical and consistent", hint: "The definition describes clear reasoning." },
      { keyword: "understood", matchTerms: ["understand", "comprehensible", "clear", "intellig", "lucid"], label: "Able to be understood", hint: "The meaning comes through clearly." },
    ],
    synonyms: ["logical", "consistent", "clear", "lucid", "intelligible"],
    partOfSpeech: "adjective",
    etymology: "Latin cohaerere -- co (together) + haerere (to stick).",
  },
  {
    word: "concise",
    definition: "Giving a lot of information clearly and in few words.",
    keyConcepts: [
      { keyword: "information", matchTerms: ["inform", "content", "substance", "meaning", "detail"], label: "Lot of information", hint: "The definition describes rich content." },
      { keyword: "few", matchTerms: ["few", "brief", "short", "succinct", "compact"], label: "In few words", hint: "Expression is economical." },
    ],
    synonyms: ["brief", "succinct", "terse", "pithy", "compact"],
    partOfSpeech: "adjective",
    etymology: "Latin concisus (cut short), from concidere -- con + caedere (to cut).",
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
    etymology: "Latin condescendere -- con (together) + descendere (to descend).",
  },
  {
    word: "consequence",
    definition: "A result or effect of an action or condition.",
    keyConcepts: [
      { keyword: "result", matchTerms: ["result", "effect", "outcome", "product", "upshot"], label: "A result or effect", hint: "The definition describes what follows from something." },
      { keyword: "action", matchTerms: ["action", "condition", "cause", "event", "circumstance"], label: "Of an action", hint: "Something prior leads to this." },
    ],
    synonyms: ["result", "effect", "outcome", "repercussion", "aftermath"],
    partOfSpeech: "noun",
    etymology: "Latin consequentia, from consequi -- con (together) + sequi (to follow).",
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
    etymology: "Latin constringere -- con (together) + stringere (to draw tight).",
  },
  {
    word: "context",
    definition: "The circumstances that form the setting for an event or idea.",
    keyConcepts: [
      { keyword: "circumstances", matchTerms: ["circumstanc", "condition", "situation", "background", "environment"], label: "Circumstances", hint: "The definition involves surrounding factors." },
      { keyword: "setting", matchTerms: ["setting", "framework", "backdrop", "surroundings", "milieu"], label: "Form the setting", hint: "These factors frame or shape meaning." },
    ],
    synonyms: ["circumstances", "background", "setting", "situation", "framework"],
    partOfSpeech: "noun",
    etymology: "Latin contextus (a joining together), from contexere -- con + texere (to weave).",
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
    etymology: "Latin corrodere -- cor (intensive) + rodere (to gnaw).",
  },
  {
    word: "credible",
    definition: "Able to be believed; convincing.",
    keyConcepts: [
      { keyword: "believed", matchTerms: ["believ", "trust", "accept", "credit", "plausible"], label: "Able to be believed", hint: "The definition involves trustworthiness." },
      { keyword: "convincing", matchTerms: ["convinc", "persuasive", "compel", "reliable", "sound"], label: "Convincing", hint: "It successfully persuades." },
    ],
    synonyms: ["believable", "plausible", "convincing", "trustworthy", "reliable"],
    partOfSpeech: "adjective",
    etymology: "Latin credibilis, from credere (to believe).",
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
    etymology: "Latin deliberatus, from deliberare -- de + librare (to weigh), from libra (scales).",
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
    etymology: "Latin deludere (to mock, deceive) -- de + ludere (to play).",
  },
  {
    word: "dependent",
    definition: "Relying on someone or something for support or existence.",
    keyConcepts: [
      { keyword: "relying", matchTerms: ["rely", "depend", "need", "require", "lean"], label: "Relying on", hint: "The definition describes needing external support." },
      { keyword: "support", matchTerms: ["support", "help", "assistance", "sustenance", "maintenance"], label: "For support", hint: "Something external is needed to continue." },
    ],
    synonyms: ["reliant", "contingent", "subordinate", "conditional", "subject to"],
    partOfSpeech: "adjective",
    etymology: "Latin dependere -- de (down) + pendere (to hang).",
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
    etymology: "Latin derivare -- de (away) + rivus (stream).",
  },
  {
    word: "detrimental",
    definition: "Tending to cause harm; damaging.",
    keyConcepts: [
      { keyword: "harm", matchTerms: ["harm", "hurt", "injur", "damag", "impair"], label: "Causes harm", hint: "The definition describes negative effects." },
      { keyword: "damaging", matchTerms: ["damag", "destructive", "hurtful", "adverse", "negative"], label: "Damaging quality", hint: "The effect is clearly negative." },
    ],
    synonyms: ["harmful", "damaging", "injurious", "adverse", "deleterious"],
    partOfSpeech: "adjective",
    etymology: "Latin detrimentum (a rubbing away, loss), from deterere -- de + terere (to rub).",
  },
  {
    word: "direct",
    definition: "Going straight to the point; frank and clear.",
    keyConcepts: [
      { keyword: "straight", matchTerms: ["straight", "immediate", "shortest", "linear", "undeviat"], label: "Straight to the point", hint: "The definition describes not taking detours." },
      { keyword: "frank", matchTerms: ["frank", "honest", "open", "candid", "forthright"], label: "Frank and clear", hint: "Communication is honest and transparent." },
    ],
    synonyms: ["straightforward", "frank", "candid", "plain", "explicit"],
    partOfSpeech: "adjective",
    etymology: "Latin directus, from dirigere -- di (apart) + regere (to guide).",
  },
  {
    word: "discrete",
    definition: "Individually separate and distinct.",
    keyConcepts: [
      { keyword: "separate", matchTerms: ["separat", "apart", "individual", "independent", "detached"], label: "Individually separate", hint: "The definition describes things that don't overlap." },
      { keyword: "distinct", matchTerms: ["distinct", "different", "unique", "particular", "specific"], label: "Distinct", hint: "Each item is clearly its own." },
    ],
    synonyms: ["separate", "distinct", "individual", "detached", "unconnected"],
    partOfSpeech: "adjective",
    etymology: "Latin discretus (separated), from discernere -- dis (apart) + cernere (to separate).",
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
    etymology: "Dis- (removal) + illusion, from Latin illudere (to mock).",
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
    etymology: "Latin dissolvere -- dis (apart) + solvere (to loosen).",
  },
  {
    word: "earnest",
    definition: "Showing sincere and intense conviction; serious in intention.",
    keyConcepts: [
      { keyword: "sincere", matchTerms: ["sincer", "genuine", "honest", "heartfelt", "authentic"], label: "Sincere conviction", hint: "The definition describes genuine feeling." },
      { keyword: "serious", matchTerms: ["serious", "solemn", "grave", "intense", "determined"], label: "Serious intention", hint: "The approach is not casual or frivolous." },
    ],
    synonyms: ["sincere", "serious", "solemn", "heartfelt", "fervent"],
    partOfSpeech: "adjective",
    etymology: "Old English eornost (seriousness, battle). Of Germanic origin.",
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
    etymology: "Greek empatheia -- en (in) + pathos (feeling).",
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
    etymology: "Latin errare (to wander, stray).",
  },
  {
    word: "evaluate",
    definition: "To assess or judge the value, quality, or importance of something.",
    keyConcepts: [
      { keyword: "assess", matchTerms: ["assess", "judg", "apprais", "examin", "analyz"], label: "Assess or judge", hint: "The definition involves making determinations." },
      { keyword: "value", matchTerms: ["value", "quality", "worth", "merit", "importance"], label: "Value or quality", hint: "What's being determined is worth." },
    ],
    synonyms: ["assess", "appraise", "judge", "analyze", "review"],
    partOfSpeech: "verb",
    etymology: "French evaluer, from e- (out) + value, from Latin valere (to be strong).",
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
    etymology: "Latin exaggerare -- ex (thoroughly) + aggerare (to heap up).",
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
    etymology: "Latin existere -- ex (out) + sistere (to cause to stand).",
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
    etymology: "Latin explicitus (unfolded), from explicare -- ex + plicare (to fold).",
  },
  {
    word: "flexible",
    definition: "Capable of bending easily; willing to change or compromise.",
    keyConcepts: [
      { keyword: "bending", matchTerms: ["bend", "pliable", "supple", "malleable", "elastic"], label: "Capable of bending", hint: "The definition describes physical or metaphorical adaptability." },
      { keyword: "change", matchTerms: ["change", "adapt", "adjust", "compromis", "accommodat"], label: "Willing to change", hint: "There's openness to different approaches." },
    ],
    synonyms: ["adaptable", "versatile", "pliable", "adjustable", "accommodating"],
    partOfSpeech: "adjective",
    etymology: "Latin flexibilis, from flectere (to bend).",
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
    etymology: "From the 1944 film 'Gaslight,' where a husband manipulates his wife into doubting her sanity.",
  },
  {
    word: "gregarious",
    definition: "Fond of company; sociable and outgoing.",
    keyConcepts: [
      { keyword: "company", matchTerms: ["company", "people", "social", "group", "crowd"], label: "Fond of company", hint: "The definition describes enjoying being with others." },
      { keyword: "sociable", matchTerms: ["sociable", "outgoing", "friendly", "extrovert", "convivial"], label: "Sociable and outgoing", hint: "Social interaction comes naturally." },
    ],
    synonyms: ["sociable", "outgoing", "friendly", "convivial", "extroverted"],
    partOfSpeech: "adjective",
    etymology: "Latin gregarius (of a flock), from grex (flock, herd).",
  },
  {
    word: "harmless",
    definition: "Not able or likely to cause harm; inoffensive.",
    keyConcepts: [
      { keyword: "harm", matchTerms: ["harm", "hurt", "injur", "damag", "danger"], label: "Not causing harm", hint: "The definition negates harmful potential." },
      { keyword: "inoffensive", matchTerms: ["inoffensive", "innocent", "benign", "safe", "gentle"], label: "Inoffensive", hint: "No threat is posed." },
    ],
    synonyms: ["innocuous", "safe", "benign", "inoffensive", "gentle"],
    partOfSpeech: "adjective",
    etymology: "Old English hearm (harm) + -less. Of Germanic origin.",
  },
  {
    word: "hesitant",
    definition: "Tentative, unsure, or slow in acting or speaking.",
    keyConcepts: [
      { keyword: "tentative", matchTerms: ["tentativ", "uncertain", "unsure", "wavering", "indecisive"], label: "Tentative or unsure", hint: "The definition describes lack of confidence." },
      { keyword: "slow", matchTerms: ["slow", "reluctan", "cautious", "halting", "falter"], label: "Slow in acting", hint: "Action is delayed by uncertainty." },
    ],
    synonyms: ["uncertain", "reluctant", "tentative", "indecisive", "wavering"],
    partOfSpeech: "adjective",
    etymology: "Latin haesitare (to stick fast, stammer), from haerere (to stick).",
  },
  {
    word: "impartial",
    definition: "Treating all rivals or disputants equally; fair and unbiased.",
    keyConcepts: [
      { keyword: "equally", matchTerms: ["equal", "fair", "even-handed", "neutral", "objective"], label: "Treats all equally", hint: "The definition describes balanced treatment." },
      { keyword: "unbiased", matchTerms: ["unbias", "neutral", "objective", "disinterested", "detached"], label: "Fair and unbiased", hint: "No side is favored." },
    ],
    synonyms: ["unbiased", "neutral", "fair", "objective", "disinterested"],
    partOfSpeech: "adjective",
    etymology: "Im- (not) + partial, from Latin pars (part) -- not taking a part/side.",
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
    etymology: "Latin implicitus (entangled), from implicare -- in + plicare (to fold).",
  },
  {
    word: "incognito",
    definition: "Having one's true identity concealed; in disguise.",
    keyConcepts: [
      { keyword: "identity", matchTerms: ["identity", "name", "self", "person", "who"], label: "True identity concealed", hint: "The definition involves hiding who one is." },
      { keyword: "disguise", matchTerms: ["disguis", "hidden", "anonymous", "unrecogniz", "secret"], label: "In disguise", hint: "Appearance or identity is altered." },
    ],
    synonyms: ["anonymous", "disguised", "unrecognized", "undercover", "in disguise"],
    partOfSpeech: "adverb",
    etymology: "Latin incognitus -- in (not) + cognitus (known), from cognoscere (to know).",
  },
  {
    word: "indifferent",
    definition: "Having no particular interest or concern; uncaring.",
    keyConcepts: [
      { keyword: "interest", matchTerms: ["interest", "concern", "care", "attention", "regard"], label: "No interest", hint: "The definition describes absence of engagement." },
      { keyword: "uncaring", matchTerms: ["uncaring", "apathetic", "uninterested", "detached", "unmoved"], label: "Uncaring attitude", hint: "There's no emotional investment." },
    ],
    synonyms: ["apathetic", "unconcerned", "uninterested", "detached", "aloof"],
    partOfSpeech: "adjective",
    etymology: "Latin indifferens -- in (not) + differens (differing).",
  },
  {
    word: "influence",
    definition: "The capacity to have an effect on someone's character, development, or behavior.",
    keyConcepts: [
      { keyword: "capacity", matchTerms: ["capacit", "power", "abil", "potential", "force"], label: "Capacity to affect", hint: "The definition describes the power to change things." },
      { keyword: "effect", matchTerms: ["effect", "impact", "change", "alter", "shape"], label: "Have an effect", hint: "There's a resulting change." },
    ],
    synonyms: ["power", "sway", "impact", "effect", "authority"],
    partOfSpeech: "noun",
    etymology: "Latin influere (to flow in) -- in + fluere (to flow). Originally an astrological term.",
  },
  {
    word: "integrity",
    definition: "The quality of being honest and having strong moral principles.",
    keyConcepts: [
      { keyword: "honest", matchTerms: ["honest", "truthful", "sincere", "trustworthy", "upright"], label: "Being honest", hint: "The definition involves truthfulness." },
      { keyword: "moral", matchTerms: ["moral", "ethic", "principl", "virtue", "standard"], label: "Strong moral principles", hint: "There's a solid ethical foundation." },
    ],
    synonyms: ["honesty", "uprightness", "probity", "rectitude", "honor"],
    partOfSpeech: "noun",
    etymology: "Latin integritas (wholeness), from integer (whole, complete).",
  },
  {
    word: "intention",
    definition: "A thing intended; an aim or plan.",
    keyConcepts: [
      { keyword: "intended", matchTerms: ["intend", "mean", "plan", "purpose", "goal"], label: "Thing intended", hint: "The definition describes what one means to do." },
      { keyword: "aim", matchTerms: ["aim", "plan", "objective", "target", "design"], label: "Aim or plan", hint: "There's a specific objective in mind." },
    ],
    synonyms: ["aim", "purpose", "plan", "goal", "objective"],
    partOfSpeech: "noun",
    etymology: "Latin intentio (a stretching out), from intendere -- in + tendere (to stretch).",
  },
  {
    word: "interpret",
    definition: "To explain the meaning of something; to understand in a particular way.",
    keyConcepts: [
      { keyword: "explain", matchTerms: ["explain", "clarif", "elucidat", "expound", "translat"], label: "Explain meaning", hint: "The definition involves making sense of something." },
      { keyword: "understand", matchTerms: ["understand", "constru", "read", "perceiv", "view"], label: "Understand in a way", hint: "There's a particular take or reading." },
    ],
    synonyms: ["explain", "construe", "understand", "read", "decipher"],
    partOfSpeech: "verb",
    etymology: "Latin interpretari (to explain), from interpres (agent, translator).",
  },
  {
    word: "intuition",
    definition: "The ability to understand something immediately, without conscious reasoning.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "know", "sense", "perceiv", "grasp"], label: "Understand immediately", hint: "The definition describes instant comprehension." },
      { keyword: "without", matchTerms: ["without", "beyond", "absent", "instinct", "gut"], label: "Without conscious reasoning", hint: "Logic isn't the path to this understanding." },
    ],
    synonyms: ["instinct", "insight", "hunch", "gut feeling", "sixth sense"],
    partOfSpeech: "noun",
    etymology: "Latin intueri (to look at, consider) -- in + tueri (to watch, guard).",
  },
  {
    word: "irony",
    definition: "The expression of meaning through language that signifies the opposite.",
    keyConcepts: [
      { keyword: "expression", matchTerms: ["express", "statement", "language", "words", "speech"], label: "Expression of meaning", hint: "The definition involves communication." },
      { keyword: "opposite", matchTerms: ["opposit", "contrary", "revers", "contradict", "incongruous"], label: "Signifies the opposite", hint: "What's said differs from what's meant." },
    ],
    synonyms: ["sarcasm", "satire", "mockery", "paradox", "incongruity"],
    partOfSpeech: "noun",
    etymology: "Greek eironeia (dissimulation, feigned ignorance), from eiron (dissembler).",
  },
  {
    word: "justify",
    definition: "To show or prove to be right or reasonable.",
    keyConcepts: [
      { keyword: "show", matchTerms: ["show", "demonstrat", "prove", "establish", "confirm"], label: "Show or prove", hint: "The definition involves making a case." },
      { keyword: "reasonable", matchTerms: ["reasonabl", "right", "valid", "legitim", "warrant"], label: "Right or reasonable", hint: "The goal is to establish validity." },
    ],
    synonyms: ["defend", "vindicate", "warrant", "validate", "rationalize"],
    partOfSpeech: "verb",
    etymology: "Latin justificare -- justus (just) + facere (to make).",
  },
  {
    word: "logical",
    definition: "Characterized by clear, sound reasoning.",
    keyConcepts: [
      { keyword: "clear", matchTerms: ["clear", "coherent", "consistent", "rational", "systematic"], label: "Clear reasoning", hint: "The definition describes understandable thought." },
      { keyword: "sound", matchTerms: ["sound", "valid", "reasonabl", "sensible", "cogent"], label: "Sound reasoning", hint: "The logic holds up to scrutiny." },
    ],
    synonyms: ["rational", "reasonable", "sensible", "coherent", "valid"],
    partOfSpeech: "adjective",
    etymology: "Greek logikos, from logos (word, reason, discourse).",
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
    etymology: "Latin manipulus (handful), from manus (hand) + plere (to fill).",
  },
  {
    word: "methodical",
    definition: "Done in a systematic and orderly way.",
    keyConcepts: [
      { keyword: "systematic", matchTerms: ["systematic", "organiz", "structur", "logical", "planned"], label: "Systematic approach", hint: "The definition describes following a system." },
      { keyword: "orderly", matchTerms: ["orderly", "neat", "tidy", "disciplin", "careful"], label: "Orderly way", hint: "Things are done in proper sequence." },
    ],
    synonyms: ["systematic", "orderly", "organized", "disciplined", "meticulous"],
    partOfSpeech: "adjective",
    etymology: "Greek methodikos, from methodos -- meta (after) + hodos (way, journey).",
  },
  {
    word: "minimal",
    definition: "Of a minimum amount, quantity, or degree; negligibly small.",
    keyConcepts: [
      { keyword: "minimum", matchTerms: ["minimum", "least", "smallest", "lowest", "basic"], label: "Minimum amount", hint: "The definition describes the smallest possible." },
      { keyword: "small", matchTerms: ["small", "tiny", "negligible", "slight", "bare"], label: "Negligibly small", hint: "The quantity is very limited." },
    ],
    synonyms: ["minimum", "least", "smallest", "nominal", "negligible"],
    partOfSpeech: "adjective",
    etymology: "Latin minimus (smallest), superlative of minor (smaller).",
  },
  {
    word: "moderate",
    definition: "Average in amount, intensity, or degree; not extreme.",
    keyConcepts: [
      { keyword: "average", matchTerms: ["average", "medium", "middle", "reasonable", "fair"], label: "Average amount", hint: "The definition describes the middle ground." },
      { keyword: "extreme", matchTerms: ["extreme", "excessive", "radical", "intense", "drastic"], label: "Not extreme", hint: "Extremes are avoided." },
    ],
    synonyms: ["reasonable", "temperate", "measured", "modest", "middle-of-the-road"],
    partOfSpeech: "adjective",
    etymology: "Latin moderatus, from moderari (to regulate), from modus (measure).",
  },
  {
    word: "motivation",
    definition: "The reason or reasons for acting or behaving in a particular way.",
    keyConcepts: [
      { keyword: "reason", matchTerms: ["reason", "cause", "purpose", "rationale", "grounds"], label: "Reason for acting", hint: "The definition describes what drives behavior." },
      { keyword: "acting", matchTerms: ["act", "behav", "do", "perform", "conduct"], label: "Acting in a way", hint: "Behavior is the result." },
    ],
    synonyms: ["incentive", "drive", "impetus", "stimulus", "reason"],
    partOfSpeech: "noun",
    etymology: "Latin motivus (moving), from movere (to move).",
  },
  {
    word: "neutral",
    definition: "Not supporting either side in a conflict or dispute; impartial.",
    keyConcepts: [
      { keyword: "supporting", matchTerms: ["support", "favor", "side with", "align", "back"], label: "Not supporting either side", hint: "The definition describes non-alignment." },
      { keyword: "impartial", matchTerms: ["impartial", "unbiased", "objective", "fair", "detached"], label: "Impartial stance", hint: "No preference is shown." },
    ],
    synonyms: ["impartial", "unbiased", "objective", "uncommitted", "nonpartisan"],
    partOfSpeech: "adjective",
    etymology: "Latin neutralis, from neuter -- ne (not) + uter (either).",
  },
  {
    word: "objective",
    definition: "Not influenced by personal feelings; based on facts.",
    keyConcepts: [
      { keyword: "personal", matchTerms: ["personal", "feeling", "emotion", "bias", "prejudic"], label: "Not influenced by feelings", hint: "The definition excludes subjective factors." },
      { keyword: "facts", matchTerms: ["fact", "evidence", "reality", "truth", "data"], label: "Based on facts", hint: "The foundation is verifiable information." },
    ],
    synonyms: ["impartial", "unbiased", "factual", "neutral", "dispassionate"],
    partOfSpeech: "adjective",
    etymology: "Latin objectivus, from objectum (thing presented to the mind), from obicere (to throw before).",
  },
  {
    word: "optimistic",
    definition: "Hopeful and confident about the future.",
    keyConcepts: [
      { keyword: "hopeful", matchTerms: ["hope", "positive", "bright", "encouraging", "upbeat"], label: "Hopeful outlook", hint: "The definition describes positive expectations." },
      { keyword: "confident", matchTerms: ["confiden", "certain", "assured", "expect", "believ"], label: "Confident about future", hint: "There's assurance about what's ahead." },
    ],
    synonyms: ["hopeful", "positive", "confident", "upbeat", "sanguine"],
    partOfSpeech: "adjective",
    etymology: "Latin optimus (best). Related to Leibniz's philosophy that this is the 'best of all possible worlds.'",
  },
  {
    word: "outcome",
    definition: "The way a thing turns out; a result or consequence.",
    keyConcepts: [
      { keyword: "turns", matchTerms: ["turn", "end", "result", "conclude", "finish"], label: "Way something turns out", hint: "The definition describes the end state." },
      { keyword: "result", matchTerms: ["result", "consequence", "effect", "product", "upshot"], label: "A result", hint: "It's what follows from prior events." },
    ],
    synonyms: ["result", "consequence", "effect", "conclusion", "end"],
    partOfSpeech: "noun",
    etymology: "Out- + come. A straightforward English compound.",
  },
  {
    word: "overlook",
    definition: "To fail to notice or consider something; to disregard.",
    keyConcepts: [
      { keyword: "fail", matchTerms: ["fail", "miss", "neglect", "omit", "skip"], label: "Fail to notice", hint: "The definition describes missing something." },
      { keyword: "disregard", matchTerms: ["disregard", "ignore", "dismiss", "excuse", "forgive"], label: "Disregard", hint: "Something isn't given proper attention." },
    ],
    synonyms: ["miss", "ignore", "neglect", "disregard", "pass over"],
    partOfSpeech: "verb",
    etymology: "Over- + look. Originally 'to look over from above,' later 'to fail to notice.'",
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
    etymology: "Latin patronus (protector), from pater (father). A patron 'looks down' as a father might.",
  },
  {
    word: "persistent",
    definition: "Continuing firmly despite difficulty or opposition.",
    keyConcepts: [
      { keyword: "continuing", matchTerms: ["continu", "persist", "keep", "maintain", "endur"], label: "Continuing firmly", hint: "The definition describes not giving up." },
      { keyword: "difficulty", matchTerms: ["difficult", "opposition", "obstacle", "challenge", "hardship"], label: "Despite difficulty", hint: "Obstacles don't stop the effort." },
    ],
    synonyms: ["persevering", "tenacious", "determined", "resolute", "dogged"],
    partOfSpeech: "adjective",
    etymology: "Latin persistere -- per (through) + sistere (to stand).",
  },
  {
    word: "perspective",
    definition: "A particular attitude toward or way of regarding something.",
    keyConcepts: [
      { keyword: "attitude", matchTerms: ["attitude", "viewpoint", "outlook", "stance", "position"], label: "Particular attitude", hint: "The definition describes a mental stance." },
      { keyword: "regarding", matchTerms: ["regard", "view", "see", "consider", "perceiv"], label: "Way of regarding", hint: "It's how something is seen." },
    ],
    synonyms: ["viewpoint", "standpoint", "outlook", "angle", "approach"],
    partOfSpeech: "noun",
    etymology: "Latin perspicere (to look through) -- per + specere (to look).",
  },
  {
    word: "pragmatic",
    definition: "Dealing with things sensibly and realistically; practical.",
    keyConcepts: [
      { keyword: "sensibly", matchTerms: ["sensibl", "reasonabl", "rational", "level-headed", "wise"], label: "Dealing sensibly", hint: "The definition describes good judgment." },
      { keyword: "practical", matchTerms: ["practical", "realistic", "workable", "feasible", "functional"], label: "Realistic and practical", hint: "Focus is on what actually works." },
    ],
    synonyms: ["practical", "realistic", "sensible", "matter-of-fact", "down-to-earth"],
    partOfSpeech: "adjective",
    etymology: "Greek pragmatikos (relating to fact), from pragma (deed, act).",
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
    etymology: "Latin praetendere (to stretch forth, claim) -- prae (before) + tendere (to stretch).",
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
    etymology: "Latin proportio -- pro (for) + portio (part, share).",
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
    etymology: "Latin provocare (to call forth, challenge) -- pro + vocare (to call).",
  },
  {
    word: "rational",
    definition: "Based on or in accordance with reason or logic.",
    keyConcepts: [
      { keyword: "reason", matchTerms: ["reason", "logic", "thought", "intellect", "judgment"], label: "Based on reason", hint: "The definition grounds things in thinking." },
      { keyword: "logic", matchTerms: ["logic", "sensible", "sound", "coherent", "valid"], label: "In accordance with logic", hint: "The approach follows logical principles." },
    ],
    synonyms: ["logical", "reasonable", "sensible", "sound", "coherent"],
    partOfSpeech: "adjective",
    etymology: "Latin rationalis, from ratio (reckoning, reason).",
  },
  {
    word: "reconcile",
    definition: "To restore friendly relations; to make compatible or consistent.",
    keyConcepts: [
      { keyword: "restore", matchTerms: ["restor", "repair", "mend", "heal", "reunite"], label: "Restore relations", hint: "The definition involves fixing something broken." },
      { keyword: "compatible", matchTerms: ["compatibl", "consistent", "harmoniz", "align", "balance"], label: "Make compatible", hint: "Different things are brought into agreement." },
    ],
    synonyms: ["reunite", "harmonize", "resolve", "settle", "accommodate"],
    partOfSpeech: "verb",
    etymology: "Latin reconciliare -- re (again) + conciliare (to bring together), from concilium (council).",
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
    etymology: "Latin reducere (to lead back) -- re (back) + ducere (to lead).",
  },
  {
    word: "relevant",
    definition: "Closely connected or appropriate to what is being considered.",
    keyConcepts: [
      { keyword: "connected", matchTerms: ["connect", "relat", "link", "pertinent", "applicable"], label: "Closely connected", hint: "The definition describes meaningful relationship." },
      { keyword: "appropriate", matchTerms: ["appropriat", "suitable", "fitting", "apt", "proper"], label: "Appropriate to topic", hint: "It fits what's being discussed." },
    ],
    synonyms: ["pertinent", "applicable", "germane", "appropriate", "material"],
    partOfSpeech: "adjective",
    etymology: "Latin relevare (to raise up, lighten) -- re + levare (to lift).",
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
    etymology: "French ressentir (to feel strongly) -- re (intensive) + sentir (to feel).",
  },
  {
    word: "resilient",
    definition: "Able to recover quickly from difficulties; tough and adaptable.",
    keyConcepts: [
      { keyword: "recover", matchTerms: ["recover", "bounce back", "rebound", "overcome", "withstand"], label: "Recover quickly", hint: "The definition describes bouncing back." },
      { keyword: "tough", matchTerms: ["tough", "strong", "hardy", "robust", "durable"], label: "Tough and adaptable", hint: "There's underlying strength." },
    ],
    synonyms: ["tough", "hardy", "adaptable", "flexible", "strong"],
    partOfSpeech: "adjective",
    etymology: "Latin resilire (to spring back) -- re (back) + salire (to jump).",
  },
  {
    word: "restrained",
    definition: "Characterized by reserve or moderation; unemotional.",
    keyConcepts: [
      { keyword: "reserve", matchTerms: ["reserv", "self-control", "disciplin", "contain", "hold back"], label: "Characterized by reserve", hint: "The definition describes holding back." },
      { keyword: "moderation", matchTerms: ["moderat", "temper", "subdued", "muted", "understated"], label: "Moderation", hint: "Expression is kept in check." },
    ],
    synonyms: ["controlled", "moderate", "subdued", "muted", "understated"],
    partOfSpeech: "adjective",
    etymology: "Latin restringere -- re (back) + stringere (to draw tight).",
  },
  {
    word: "risk",
    definition: "The possibility of loss, harm, or failure.",
    keyConcepts: [
      { keyword: "possibility", matchTerms: ["possibil", "chance", "likelihood", "potential", "prospect"], label: "Possibility", hint: "The definition describes something that might happen." },
      { keyword: "harm", matchTerms: ["harm", "loss", "damage", "danger", "failure"], label: "Of loss or harm", hint: "The potential outcome is negative." },
    ],
    synonyms: ["danger", "hazard", "peril", "threat", "gamble"],
    partOfSpeech: "noun",
    etymology: "Italian risco or rischio, possibly from Arabic rizq (fortune, luck).",
  },
  {
    word: "sarcasm",
    definition: "The use of irony to mock or convey contempt.",
    keyConcepts: [
      { keyword: "irony", matchTerms: ["irony", "mock", "ridicul", "deris", "satir"], label: "Use of irony", hint: "The definition involves saying the opposite of what's meant." },
      { keyword: "contempt", matchTerms: ["contempt", "scorn", "disdain", "disrespect", "hostil"], label: "Convey contempt", hint: "The purpose is to show disdain." },
    ],
    synonyms: ["irony", "mockery", "ridicule", "derision", "scorn"],
    partOfSpeech: "noun",
    etymology: "Greek sarkasmos (a sneer), from sarkazein (to tear flesh) -- sarx (flesh).",
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
    etymology: "Hebrew azazel (the goat sent into the wilderness in Leviticus, bearing the sins of the people).",
  },
  {
    word: "scrutinize",
    definition: "To examine or inspect closely and thoroughly.",
    keyConcepts: [
      { keyword: "examine", matchTerms: ["examin", "inspect", "study", "analyz", "investigat"], label: "Examine closely", hint: "The definition involves careful looking." },
      { keyword: "thoroughly", matchTerms: ["thorough", "careful", "detailed", "meticulous", "rigorous"], label: "Thoroughly", hint: "Nothing is overlooked." },
    ],
    synonyms: ["examine", "inspect", "analyze", "study", "investigate"],
    partOfSpeech: "verb",
    etymology: "Latin scrutinium (a search), from scrutari (to examine, search), from scruta (rubbish, trash).",
  },
  {
    word: "skeptical",
    definition: "Not easily convinced; having doubts or reservations.",
    keyConcepts: [
      { keyword: "convinced", matchTerms: ["convinc", "persuad", "certain", "sure", "believ"], label: "Not easily convinced", hint: "The definition describes resistance to belief." },
      { keyword: "doubts", matchTerms: ["doubt", "question", "uncertain", "reserv", "suspicious"], label: "Having doubts", hint: "There's questioning rather than acceptance." },
    ],
    synonyms: ["doubtful", "questioning", "dubious", "unconvinced", "cynical"],
    partOfSpeech: "adjective",
    etymology: "Greek skeptikos (inquiring), from skeptesthai (to look, consider).",
  },
  {
    word: "speculate",
    definition: "To form a theory without firm evidence; to conjecture.",
    keyConcepts: [
      { keyword: "theory", matchTerms: ["theor", "hypothes", "guess", "suppos", "assume"], label: "Form a theory", hint: "The definition involves proposing ideas." },
      { keyword: "evidence", matchTerms: ["evidence", "proof", "firm", "certain", "solid"], label: "Without firm evidence", hint: "The theory lacks solid backing." },
    ],
    synonyms: ["conjecture", "theorize", "hypothesize", "guess", "surmise"],
    partOfSpeech: "verb",
    etymology: "Latin speculari (to observe), from specula (watchtower), from specere (to look).",
  },
  {
    word: "steady",
    definition: "Firmly fixed, supported, or balanced; regular and even.",
    keyConcepts: [
      { keyword: "firmly", matchTerms: ["firm", "stable", "secure", "solid", "fixed"], label: "Firmly fixed", hint: "The definition describes solidity." },
      { keyword: "regular", matchTerms: ["regular", "even", "consistent", "uniform", "constant"], label: "Regular and even", hint: "There's consistency over time." },
    ],
    synonyms: ["stable", "firm", "constant", "consistent", "unwavering"],
    partOfSpeech: "adjective",
    etymology: "Old English stede (place, position). Related to 'stead' and 'instead.'",
  },
  {
    word: "subtle",
    definition: "So delicate or precise as to be difficult to analyze or describe.",
    keyConcepts: [
      { keyword: "delicate", matchTerms: ["delicat", "fine", "slight", "faint", "gentle"], label: "Delicate quality", hint: "The definition describes something refined." },
      { keyword: "difficult", matchTerms: ["difficult", "hard", "elusive", "nuanced", "complex"], label: "Difficult to analyze", hint: "It's not easily pinned down." },
    ],
    synonyms: ["delicate", "understated", "nuanced", "fine", "elusive"],
    partOfSpeech: "adjective",
    etymology: "Latin subtilis (fine, thin), from sub (under) + tela (web, woven material).",
  },
  {
    word: "sufficient",
    definition: "Enough; adequate for the purpose.",
    keyConcepts: [
      { keyword: "enough", matchTerms: ["enough", "adequat", "ample", "plenty", "satisfactory"], label: "Enough", hint: "The definition describes meeting a need." },
      { keyword: "purpose", matchTerms: ["purpose", "need", "requirement", "demand", "task"], label: "For the purpose", hint: "It fulfills what's required." },
    ],
    synonyms: ["enough", "adequate", "ample", "satisfactory", "sufficient"],
    partOfSpeech: "adjective",
    etymology: "Latin sufficere (to supply, be adequate) -- sub (under) + facere (to make).",
  },
  {
    word: "superficial",
    definition: "Existing or occurring at or on the surface; lacking depth.",
    keyConcepts: [
      { keyword: "surface", matchTerms: ["surfac", "shallow", "outer", "external", "skin-deep"], label: "On the surface", hint: "The definition describes the outermost layer." },
      { keyword: "depth", matchTerms: ["depth", "deep", "thorough", "profound", "substantial"], label: "Lacking depth", hint: "There's nothing underneath." },
    ],
    synonyms: ["shallow", "cursory", "surface-level", "skin-deep", "trivial"],
    partOfSpeech: "adjective",
    etymology: "Latin superficialis, from superficies (surface) -- super (above) + facies (face).",
  },
  {
    word: "tentative",
    definition: "Not certain or fixed; provisional or hesitant.",
    keyConcepts: [
      { keyword: "certain", matchTerms: ["certain", "definite", "fixed", "firm", "settled"], label: "Not certain", hint: "The definition describes uncertainty." },
      { keyword: "hesitant", matchTerms: ["hesitant", "uncertain", "provisional", "cautious", "tentativ"], label: "Hesitant", hint: "There's reluctance to commit." },
    ],
    synonyms: ["uncertain", "provisional", "hesitant", "preliminary", "unsure"],
    partOfSpeech: "adjective",
    etymology: "Latin tentare (to try, test), from tendere (to stretch).",
  },
  {
    word: "tolerant",
    definition: "Showing willingness to allow the existence of opinions or behavior that differ from one's own.",
    keyConcepts: [
      { keyword: "willingness", matchTerms: ["willing", "open", "accept", "allow", "permit"], label: "Showing willingness", hint: "The definition describes openness." },
      { keyword: "differ", matchTerms: ["differ", "disagree", "other", "diverse", "alternative"], label: "Opinions that differ", hint: "The views accepted are not one's own." },
    ],
    synonyms: ["accepting", "open-minded", "liberal", "forbearing", "permissive"],
    partOfSpeech: "adjective",
    etymology: "Latin tolerare (to bear, endure).",
  },
  {
    word: "transparent",
    definition: "Easy to perceive or detect; open and honest.",
    keyConcepts: [
      { keyword: "perceive", matchTerms: ["perceiv", "see", "detect", "recogniz", "discern"], label: "Easy to perceive", hint: "The definition describes visibility." },
      { keyword: "honest", matchTerms: ["honest", "open", "frank", "candid", "forthright"], label: "Open and honest", hint: "Nothing is hidden." },
    ],
    synonyms: ["clear", "obvious", "open", "honest", "candid"],
    partOfSpeech: "adjective",
    etymology: "Latin transparere -- trans (through) + parere (to appear).",
  },
  {
    word: "trustworthy",
    definition: "Able to be relied on as honest or truthful.",
    keyConcepts: [
      { keyword: "relied", matchTerms: ["rely", "depend", "count", "trust", "believe"], label: "Able to be relied on", hint: "The definition describes dependability." },
      { keyword: "honest", matchTerms: ["honest", "truthful", "sincere", "genuine", "upright"], label: "Honest or truthful", hint: "The basis for trust is integrity." },
    ],
    synonyms: ["reliable", "dependable", "honest", "faithful", "responsible"],
    partOfSpeech: "adjective",
    etymology: "Old English treowe (faithful) + worthy. Of Germanic origin.",
  },
  {
    word: "undermine",
    definition: "To weaken or damage gradually or insidiously.",
    keyConcepts: [
      { keyword: "weaken", matchTerms: ["weaken", "erode", "damage", "sabotag", "subvert"], label: "Weaken or damage", hint: "The definition describes causing harm." },
      { keyword: "gradually", matchTerms: ["gradual", "slow", "subtl", "insidious", "stealth"], label: "Gradually", hint: "The harm happens over time, not suddenly." },
    ],
    synonyms: ["weaken", "sabotage", "subvert", "erode", "damage"],
    partOfSpeech: "verb",
    etymology: "Under- + mine (to dig). Originally to dig tunnels beneath fortifications.",
  },
  {
    word: "utility",
    definition: "The state of being useful, profitable, or beneficial.",
    keyConcepts: [
      { keyword: "useful", matchTerms: ["useful", "practical", "functional", "serviceable", "helpful"], label: "Being useful", hint: "The definition describes serving a purpose." },
      { keyword: "beneficial", matchTerms: ["benefic", "advantag", "valuable", "worthwhile", "productive"], label: "Profitable or beneficial", hint: "There's positive value." },
    ],
    synonyms: ["usefulness", "practicality", "functionality", "benefit", "value"],
    partOfSpeech: "noun",
    etymology: "Latin utilitas, from utilis (useful), from uti (to use).",
  },
  {
    word: "validate",
    definition: "To confirm the truth or value of something.",
    keyConcepts: [
      { keyword: "confirm", matchTerms: ["confirm", "verify", "prove", "substantiat", "corroborat"], label: "Confirm", hint: "The definition involves establishing truth." },
      { keyword: "value", matchTerms: ["value", "worth", "legitim", "valid", "authentic"], label: "Truth or value", hint: "What's confirmed is significance or correctness." },
    ],
    synonyms: ["confirm", "verify", "substantiate", "authenticate", "ratify"],
    partOfSpeech: "verb",
    etymology: "Latin validus (strong), from valere (to be strong).",
  },
  {
    word: "versatile",
    definition: "Able to adapt to many different functions or activities.",
    keyConcepts: [
      { keyword: "adapt", matchTerms: ["adapt", "adjust", "change", "flexible", "pliable"], label: "Able to adapt", hint: "The definition describes flexibility." },
      { keyword: "different", matchTerms: ["different", "various", "many", "diverse", "multiple"], label: "Many different functions", hint: "The range of applications is broad." },
    ],
    synonyms: ["adaptable", "flexible", "multifaceted", "all-around", "multipurpose"],
    partOfSpeech: "adjective",
    etymology: "Latin versatilis (turning), from versare (to turn often), from vertere (to turn).",
  },
  {
    word: "voluntary",
    definition: "Done, given, or acting of one's own free will.",
    keyConcepts: [
      { keyword: "free", matchTerms: ["free", "willing", "choice", "optional", "unprompted"], label: "Of one's own free will", hint: "The definition emphasizes choice." },
      { keyword: "acting", matchTerms: ["act", "do", "give", "perform", "participate"], label: "Done or given", hint: "Action is taken without compulsion." },
    ],
    synonyms: ["willing", "optional", "unforced", "spontaneous", "discretionary"],
    partOfSpeech: "adjective",
    etymology: "Latin voluntarius, from voluntas (will), from velle (to wish).",
  },
  {
    word: "wary",
    definition: "Feeling or showing caution about possible dangers or problems.",
    keyConcepts: [
      { keyword: "caution", matchTerms: ["caution", "careful", "vigilant", "alert", "guarded"], label: "Showing caution", hint: "The definition describes watchfulness." },
      { keyword: "dangers", matchTerms: ["danger", "risk", "problem", "threat", "harm"], label: "About possible dangers", hint: "The concern is about potential negatives." },
    ],
    synonyms: ["cautious", "careful", "vigilant", "guarded", "circumspect"],
    partOfSpeech: "adjective",
    etymology: "Old English waer (aware, cautious). Of Germanic origin.",
  },
  {
    word: "willingness",
    definition: "The quality of being ready or eager to do something.",
    keyConcepts: [
      { keyword: "ready", matchTerms: ["ready", "prepar", "willing", "disposed", "inclin"], label: "Being ready", hint: "The definition describes preparedness." },
      { keyword: "eager", matchTerms: ["eager", "keen", "enthusiast", "happy", "glad"], label: "Eager to do", hint: "There's positive inclination." },
    ],
    synonyms: ["readiness", "eagerness", "inclination", "disposition", "openness"],
    partOfSpeech: "noun",
    etymology: "Old English willan (to wish, will) + -ness. Of Germanic origin.",
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
    etymology: "Latin discernere -- dis (apart) + cernere (to separate, sift).",
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
    etymology: "American English, fanciful alteration of discompose or discomfort. Origin uncertain, possibly humorous coinage.",
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
    etymology: "Latin vexare (to shake, agitate, annoy).",
  },
  {
    word: "tessellate",
    definition: "To cover a surface with repeated geometric shapes that fit together without gaps or overlaps.",
    keyConcepts: [
      { keyword: "repeated shapes", matchTerms: ["repeat", "pattern", "tile", "mosaic", "geometr", "shape"], label: "Repeated shapes", hint: "The definition describes a pattern of shapes." },
      { keyword: "no gaps", matchTerms: ["gap", "overlap", "fit", "cover", "seamless", "interlock", "together"], label: "Fitting without gaps", hint: "The shapes must fit perfectly together." },
    ],
    synonyms: ["tile", "mosaic", "pattern", "interlock", "pave"],
    partOfSpeech: "verb",
    etymology: "Latin tessella (small square stone), diminutive of tessera (a square tablet or die used in mosaics).",
  },
  {
    word: "juxtapose",
    definition: "To place things side by side, especially for comparison or contrast.",
    keyConcepts: [
      { keyword: "side by side", matchTerms: ["side", "next", "adjacent", "togeth", "place", "put", "position"], label: "Side by side", hint: "The definition describes physical or conceptual placement." },
      { keyword: "comparison", matchTerms: ["compar", "contrast", "highlight", "differ", "similar"], label: "For comparison", hint: "The purpose is to compare or contrast." },
    ],
    synonyms: ["compare", "contrast", "place alongside", "set side by side"],
    partOfSpeech: "verb",
    etymology: "French juxtaposer -- Latin juxta (near) + French poser (to place).",
  },
  {
    word: "ephemeral",
    definition: "Lasting for a very short time; fleeting.",
    keyConcepts: [
      { keyword: "short time", matchTerms: ["short", "brief", "moment", "tempor", "transient", "passing"], label: "Short-lived", hint: "The definition describes brief duration." },
      { keyword: "fleeting", matchTerms: ["fleet", "quick", "vanish", "disappear", "fade", "imperma"], label: "Fleeting", hint: "It passes quickly." },
    ],
    synonyms: ["fleeting", "transient", "momentary", "brief", "short-lived"],
    partOfSpeech: "adjective",
    etymology: "Greek ephemeros -- epi (on) + hemera (day). Originally meant 'lasting only a day'.",
  },
  {
    word: "ubiquitous",
    definition: "Present, appearing, or found everywhere.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "omnipres", "pervasi", "widespread", "universal"], label: "Everywhere", hint: "The definition describes being in all places." },
      { keyword: "present", matchTerms: ["present", "found", "appear", "exist", "common", "prevalent"], label: "Present throughout", hint: "It can be found in many places." },
    ],
    synonyms: ["omnipresent", "pervasive", "universal", "widespread", "prevalent"],
    partOfSpeech: "adjective",
    etymology: "Latin ubique (everywhere) -- ubi (where) + que (any).",
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
    etymology: "Greek sykophantes (informer, slanderer) -- sykon (fig) + phainein (to show).",
  },
  {
    word: "perfunctory",
    definition: "Carried out with minimal effort or interest; done as a routine duty.",
    keyConcepts: [
      { keyword: "minimal effort", matchTerms: ["minimal", "little", "half-heart", "careless", "superfic", "cursory"], label: "Minimal effort", hint: "The definition describes lack of care." },
      { keyword: "routine duty", matchTerms: ["routine", "duty", "obligat", "automat", "mechan", "going through"], label: "Done routinely", hint: "It's done out of obligation, not interest." },
    ],
    synonyms: ["cursory", "superficial", "half-hearted", "mechanical", "indifferent"],
    partOfSpeech: "adjective",
    etymology: "Latin perfunctorius -- perfungi (to get through with) -- per (through) + fungi (perform).",
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
    etymology: "Greek kakophonia -- kakos (bad) + phone (sound).",
  },
  {
    word: "ostentatious",
    definition: "Characterized by vulgar or pretentious display; designed to impress.",
    keyConcepts: [
      { keyword: "showy display", matchTerms: ["show", "display", "flashy", "gaudy", "flamboyant", "extravag"], label: "Showy display", hint: "The definition describes excessive showing off." },
      { keyword: "impress others", matchTerms: ["impress", "attention", "pretent", "boast", "flaunt", "conspic"], label: "To impress", hint: "The purpose is to attract attention." },
    ],
    synonyms: ["showy", "flashy", "pretentious", "flamboyant", "gaudy"],
    partOfSpeech: "adjective",
    etymology: "Latin ostentare (to display) -- frequentative of ostendere (to show).",
  },
  {
    word: "recalcitrant",
    definition: "Stubbornly uncooperative toward authority or discipline.",
    keyConcepts: [
      { keyword: "stubborn", matchTerms: ["stubborn", "obstina", "defian", "resist", "unylield", "headstrong"], label: "Stubbornly resistant", hint: "The definition describes persistent resistance." },
      { keyword: "uncooperative", matchTerms: ["uncooper", "disobedi", "rebel", "refus", "unwilling", "insubord"], label: "Uncooperative", hint: "There's refusal to comply." },
    ],
    synonyms: ["defiant", "uncooperative", "obstinate", "intractable", "rebellious"],
    partOfSpeech: "adjective",
    etymology: "Latin recalcitrare (to kick back) -- re (back) + calcitrare (to kick) from calx (heel).",
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
    etymology: "Latin superfluus -- super (over) + fluere (to flow). Literally 'overflowing'.",
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
    etymology: "Latin vicarius (substituted) -- vicis (change, turn, place).",
  },
  {
    word: "gregarious",
    definition: "Fond of company; sociable and outgoing.",
    keyConcepts: [
      { keyword: "fond of company", matchTerms: ["compan", "people", "social", "friend", "group", "crowd"], label: "Fond of company", hint: "The definition describes enjoying being with others." },
      { keyword: "sociable", matchTerms: ["sociab", "outgoing", "friendl", "extrovert", "congenial", "affable"], label: "Sociable", hint: "The person is warm and welcoming." },
    ],
    synonyms: ["sociable", "outgoing", "friendly", "convivial", "extroverted"],
    partOfSpeech: "adjective",
    etymology: "Latin gregarius -- grex (flock, herd). Originally described animals living in flocks.",
  },
  {
    word: "capricious",
    definition: "Given to sudden and unaccountable changes of mood or behavior.",
    keyConcepts: [
      { keyword: "sudden changes", matchTerms: ["sudden", "quick", "unpredict", "erratic", "whims", "impuls"], label: "Sudden changes", hint: "Changes happen unexpectedly." },
      { keyword: "mood or behavior", matchTerms: ["mood", "behav", "temperament", "fickle", "inconsist", "mercur"], label: "In mood or behavior", hint: "It relates to how someone acts or feels." },
    ],
    synonyms: ["fickle", "unpredictable", "changeable", "mercurial", "erratic"],
    partOfSpeech: "adjective",
    etymology: "Italian capriccioso -- capriccio (sudden start) possibly from capro (goat), suggesting the leaping of a goat.",
  },
  {
    word: "lethargic",
    definition: "Affected by a lack of energy; sluggish and apathetic.",
    keyConcepts: [
      { keyword: "lack of energy", matchTerms: ["energy", "tire", "exhaust", "weary", "fatigue", "drowsy"], label: "Lack of energy", hint: "The definition describes low energy." },
      { keyword: "sluggish", matchTerms: ["sluggish", "slow", "listless", "inactiv", "apathet", "torpid"], label: "Sluggish", hint: "Movement or action is reduced." },
    ],
    synonyms: ["sluggish", "tired", "listless", "torpid", "languid"],
    partOfSpeech: "adjective",
    etymology: "Greek lethargia -- lethe (forgetfulness) + argos (idle).",
  },
  {
    word: "nonchalant",
    definition: "Appearing casually calm and relaxed; not displaying anxiety or interest.",
    keyConcepts: [
      { keyword: "casually calm", matchTerms: ["calm", "cool", "relax", "casual", "laid-back", "composed"], label: "Casually calm", hint: "The definition describes easy composure." },
      { keyword: "not anxious", matchTerms: ["unworri", "unbother", "indifferen", "unconcern", "carefree", "blase"], label: "Not showing concern", hint: "There's an absence of worry." },
    ],
    synonyms: ["casual", "indifferent", "unconcerned", "cool", "blasé"],
    partOfSpeech: "adjective",
    etymology: "French nonchalant -- non (not) + chaloir (to concern) from Latin calere (to be warm).",
  },
  {
    word: "surreptitious",
    definition: "Kept secret because it would not be approved of; done stealthily.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "hidden", "covert", "clandes", "conceal", "furtive"], label: "Kept secret", hint: "The action is hidden from others." },
      { keyword: "stealthy", matchTerms: ["stealth", "sneak", "sly", "underhand", "quiet", "subvers"], label: "Done stealthily", hint: "It's done to avoid detection." },
    ],
    synonyms: ["secret", "covert", "stealthy", "clandestine", "furtive"],
    partOfSpeech: "adjective",
    etymology: "Latin surrepticius -- surripere (to steal secretly) -- sub (under) + rapere (to seize).",
  },
  {
    word: "tenacious",
    definition: "Holding firmly to something; persistent and determined.",
    keyConcepts: [
      { keyword: "holding firmly", matchTerms: ["hold", "grip", "cling", "stick", "grasp", "retain"], label: "Holding firmly", hint: "There's a strong grip or attachment." },
      { keyword: "persistent", matchTerms: ["persist", "determin", "resolut", "stubborn", "dogged", "relentless"], label: "Persistent", hint: "The effort continues despite difficulty." },
    ],
    synonyms: ["persistent", "determined", "resolute", "dogged", "steadfast"],
    partOfSpeech: "adjective",
    etymology: "Latin tenax -- tenere (to hold).",
  },
  {
    word: "ambivalent",
    definition: "Having mixed or contradictory feelings about something.",
    keyConcepts: [
      { keyword: "mixed feelings", matchTerms: ["mix", "conflict", "contradict", "opposing", "uncertain", "torn"], label: "Mixed feelings", hint: "Feelings pull in different directions." },
      { keyword: "about something", matchTerms: ["feel", "emotion", "attitude", "opinion", "undecid", "waver"], label: "Emotional conflict", hint: "There's internal disagreement." },
    ],
    synonyms: ["uncertain", "undecided", "conflicted", "torn", "wavering"],
    partOfSpeech: "adjective",
    etymology: "Latin ambi (both) + valere (to be strong). Coined in psychology around 1910.",
  },
  {
    word: "pragmatic",
    definition: "Dealing with things sensibly and realistically rather than theoretically.",
    keyConcepts: [
      { keyword: "sensible", matchTerms: ["sensibl", "practic", "realistic", "rational", "logical", "level-head"], label: "Sensible approach", hint: "The approach is grounded and reasonable." },
      { keyword: "not theoretical", matchTerms: ["real", "actual", "concret", "applied", "hands-on", "workable"], label: "Not theoretical", hint: "Focus is on what works, not abstract ideas." },
    ],
    synonyms: ["practical", "realistic", "sensible", "matter-of-fact", "down-to-earth"],
    partOfSpeech: "adjective",
    etymology: "Greek pragmatikos -- pragma (deed, act) from prassein (to do).",
  },
  {
    word: "meticulous",
    definition: "Showing great attention to detail; very careful and precise.",
    keyConcepts: [
      { keyword: "attention to detail", matchTerms: ["detail", "thorough", "careful", "exact", "precis", "minute"], label: "Attention to detail", hint: "Small details are noticed and addressed." },
      { keyword: "careful", matchTerms: ["careful", "painstak", "diligen", "conscient", "scrupul", "fastidi"], label: "Very careful", hint: "Great care is taken." },
    ],
    synonyms: ["careful", "thorough", "precise", "painstaking", "scrupulous"],
    partOfSpeech: "adjective",
    etymology: "Latin meticulosus (fearful) -- metus (fear). Original meaning shifted from 'timid' to 'overly careful'.",
  },
  {
  word: "vindictive",
  definition: "Having or showing a strong desire for revenge.",
  keyConcepts: [
  { keyword: "revenge", matchTerms: ["revenge", "vengean", "retali", "payback", "punish", "aveng"], label: "Desire for revenge", hint: "The definition describes wanting to get back at someone." },
  { keyword: "strong desire", matchTerms: ["spite", "malice", "bitter", "resentful", "hostile", "grudge"], label: "Strong negative feeling", hint: "There's intense ill will." },
  ],
  synonyms: ["vengeful", "spiteful", "resentful", "malicious", "unforgiving"],
  partOfSpeech: "adjective",
  etymology: "Latin vindicta (vengeance) -- vindicare (to claim, avenge).",
  },
  // Word-class pairs: same word, different part of speech, different meaning
  {
    word: "deliberate",
    definition: "Done consciously and intentionally; not accidental.",
    keyConcepts: [
      { keyword: "intentional", matchTerms: ["intention", "purpose", "conscious", "meant", "planned", "willful"], label: "Intentional", hint: "The action was done on purpose." },
      { keyword: "not accidental", matchTerms: ["accident", "careful", "consider", "thought", "calculat"], label: "Not accidental", hint: "It wasn't by chance or mistake." },
    ],
    synonyms: ["intentional", "purposeful", "calculated", "premeditated", "conscious"],
    partOfSpeech: "adjective",
    etymology: "Latin deliberare -- de (down) + librare (to weigh).",
  },
  {
    word: "deliberate",
    definition: "To engage in long and careful consideration; to discuss formally.",
    keyConcepts: [
      { keyword: "careful consideration", matchTerms: ["consider", "think", "ponder", "weigh", "reflect", "contempl"], label: "Careful consideration", hint: "It involves thinking deeply." },
      { keyword: "discuss formally", matchTerms: ["discuss", "debate", "confer", "consult", "meet", "talk"], label: "Formal discussion", hint: "Often done in groups or committees." },
    ],
    synonyms: ["consider", "ponder", "debate", "discuss", "contemplate"],
    partOfSpeech: "verb",
    etymology: "Latin deliberare -- de (down) + librare (to weigh).",
  },
  {
    word: "elaborate",
    definition: "Involving many carefully arranged parts or details; intricate.",
    keyConcepts: [
      { keyword: "many details", matchTerms: ["detail", "complex", "intricate", "ornate", "fancy", "decorat"], label: "Many details", hint: "It has lots of parts or decoration." },
      { keyword: "carefully arranged", matchTerms: ["careful", "arrang", "crafted", "design", "sophistic"], label: "Carefully arranged", hint: "Not simple or plain." },
    ],
    synonyms: ["intricate", "detailed", "complex", "ornate", "sophisticated"],
    partOfSpeech: "adjective",
    etymology: "Latin elaborare -- e (out) + laborare (to work).",
  },
  {
    word: "elaborate",
    definition: "To develop or present in further detail; to expand upon.",
    keyConcepts: [
      { keyword: "further detail", matchTerms: ["detail", "explain", "expand", "develop", "clarify", "flesh out"], label: "Add detail", hint: "To give more information." },
      { keyword: "expand upon", matchTerms: ["expand", "extend", "build", "add", "enlarge", "amplify"], label: "Expand upon", hint: "To make something fuller or more complete." },
    ],
    synonyms: ["expand", "explain", "develop", "clarify", "expound"],
    partOfSpeech: "verb",
    etymology: "Latin elaborare -- e (out) + laborare (to work).",
  },
  {
    word: "moderate",
    definition: "Average in amount, intensity, or degree; not extreme.",
    keyConcepts: [
      { keyword: "average", matchTerms: ["average", "medium", "middle", "reasonable", "modest", "temperat"], label: "Average amount", hint: "Neither too much nor too little." },
      { keyword: "not extreme", matchTerms: ["extreme", "mild", "gentle", "balanced", "restrain", "measured"], label: "Not extreme", hint: "Avoiding excess in either direction." },
    ],
    synonyms: ["average", "medium", "reasonable", "temperate", "mild"],
    partOfSpeech: "adjective",
    etymology: "Latin moderatus -- moderare (to regulate, control).",
  },
  {
    word: "moderate",
    definition: "To make or become less extreme, intense, or violent; to preside over a discussion.",
    keyConcepts: [
      { keyword: "less extreme", matchTerms: ["reduce", "lessen", "ease", "soften", "temper", "tone down"], label: "Reduce intensity", hint: "To make something less severe." },
      { keyword: "preside over", matchTerms: ["preside", "chair", "lead", "mediat", "facilitat", "oversee"], label: "Preside over", hint: "To guide or control a discussion." },
    ],
    synonyms: ["regulate", "temper", "mediate", "chair", "preside"],
    partOfSpeech: "verb",
    etymology: "Latin moderare (to regulate, control).",
  },
  {
    word: "intimate",
    definition: "Closely acquainted; very personal or private.",
    keyConcepts: [
      { keyword: "closely acquainted", matchTerms: ["close", "familiar", "personal", "dear", "friend", "warm"], label: "Closely acquainted", hint: "A close relationship." },
      { keyword: "private", matchTerms: ["private", "personal", "secret", "confiden", "inner", "deep"], label: "Very private", hint: "Not shared widely." },
    ],
    synonyms: ["close", "personal", "familiar", "private", "confidential"],
    partOfSpeech: "adjective",
    etymology: "Latin intimare (to make known) -- intimus (innermost).",
  },
  {
    word: "intimate",
    definition: "To suggest or hint at something indirectly.",
    keyConcepts: [
      { keyword: "suggest", matchTerms: ["suggest", "imply", "hint", "indicat", "insinuat", "allude"], label: "Suggest indirectly", hint: "Not stated directly." },
      { keyword: "indirectly", matchTerms: ["indirect", "subtle", "implied", "unspoken", "covert"], label: "Done indirectly", hint: "The meaning is implied rather than explicit." },
    ],
    synonyms: ["suggest", "imply", "hint", "insinuate", "indicate"],
    partOfSpeech: "verb",
    etymology: "Latin intimare (to make known) -- intimus (innermost).",
  },
  {
    word: "articulate",
    definition: "Having or showing the ability to speak fluently and coherently.",
    keyConcepts: [
      { keyword: "speak fluently", matchTerms: ["fluent", "eloqu", "express", "well-spoken", "clear", "coherent"], label: "Speaks fluently", hint: "Good at expressing themselves." },
      { keyword: "coherently", matchTerms: ["coherent", "lucid", "understand", "intelligib", "logical"], label: "Coherent speech", hint: "Easy to follow and understand." },
    ],
    synonyms: ["eloquent", "fluent", "expressive", "well-spoken", "coherent"],
    partOfSpeech: "adjective",
    etymology: "Latin articulare (to divide into joints, utter distinctly).",
  },
  {
    word: "articulate",
    definition: "To express an idea or feeling fluently and clearly.",
    keyConcepts: [
      { keyword: "express clearly", matchTerms: ["express", "convey", "communicat", "state", "voice", "verbalis"], label: "Express clearly", hint: "To put into words." },
      { keyword: "fluently", matchTerms: ["fluent", "clear", "well", "effective", "precise", "distinct"], label: "Done fluently", hint: "With skill and clarity." },
    ],
    synonyms: ["express", "convey", "communicate", "voice", "enunciate"],
    partOfSpeech: "verb",
    etymology: "Latin articulare (to divide into joints, utter distinctly).",
  },
  {
    word: "appropriate",
    definition: "Suitable or proper in the circumstances.",
    keyConcepts: [
      { keyword: "suitable", matchTerms: ["suitab", "fit", "proper", "right", "correct", "apt"], label: "Suitable", hint: "It fits the situation." },
      { keyword: "circumstances", matchTerms: ["circumstan", "context", "situation", "occasion", "setting"], label: "For the circumstances", hint: "Depends on the context." },
    ],
    synonyms: ["suitable", "proper", "fitting", "apt", "correct"],
    partOfSpeech: "adjective",
    etymology: "Latin appropriare -- ad (to) + proprius (own, proper).",
  },
  {
    word: "appropriate",
    definition: "To take something for one's own use, often without permission.",
    keyConcepts: [
      { keyword: "take for oneself", matchTerms: ["take", "seize", "claim", "acquire", "commandeer", "expropri"], label: "Take for oneself", hint: "To make something your own." },
      { keyword: "without permission", matchTerms: ["without", "unauthor", "steal", "misappropri", "usurp"], label: "Often unauthorized", hint: "May involve taking improperly." },
    ],
    synonyms: ["take", "seize", "commandeer", "expropriate", "claim"],
    partOfSpeech: "verb",
    etymology: "Latin appropriare -- ad (to) + proprius (own, proper).",
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
    etymology: "Latin consummare -- con (together) + summa (sum, total).",
  },
  {
    word: "consummate",
    definition: "To make complete or perfect; to finalize, especially a marriage or deal.",
    keyConcepts: [
      { keyword: "make complete", matchTerms: ["complet", "finish", "conclude", "finaliz", "accomplish", "fulfill"], label: "Make complete", hint: "To bring to completion." },
      { keyword: "finalize", matchTerms: ["final", "seal", "close", "conclude", "execute", "ratify"], label: "Finalize formally", hint: "Often used for marriages or agreements." },
    ],
    synonyms: ["complete", "finalize", "conclude", "fulfill", "accomplish"],
    partOfSpeech: "verb",
    etymology: "Latin consummare -- con (together) + summa (sum, total).",
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
    etymology: "Latin componere -- com (together) + ponere (to put).",
  },
  {
    word: "compound",
    definition: "To make something bad worse; to intensify or add to.",
    keyConcepts: [
      { keyword: "make worse", matchTerms: ["worse", "worsen", "exacerbat", "aggravat", "intensif", "heighten"], label: "Make worse", hint: "To add to a problem." },
      { keyword: "add to", matchTerms: ["add", "increas", "multipl", "magnif", "amplif"], label: "Add to or intensify", hint: "Building on what exists." },
    ],
    synonyms: ["worsen", "exacerbate", "intensify", "aggravate", "magnify"],
    partOfSpeech: "verb",
    etymology: "Latin componere -- com (together) + ponere (to put).",
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
    etymology: "Latin duplicare -- duplex (twofold) -- duo (two) + plicare (to fold).",
  },
  {
    word: "duplicate",
    definition: "To make an exact copy of something; to repeat or replicate.",
    keyConcepts: [
      { keyword: "make a copy", matchTerms: ["copy", "replic", "reproduc", "clone", "recreat"], label: "Make a copy", hint: "To create an identical version." },
      { keyword: "repeat", matchTerms: ["repeat", "redo", "double", "mirror", "match"], label: "Repeat or replicate", hint: "To do again identically." },
    ],
    synonyms: ["copy", "replicate", "reproduce", "clone", "repeat"],
    partOfSpeech: "verb",
    etymology: "Latin duplicare -- duplex (twofold) -- duo (two) + plicare (to fold).",
  },
  {
    word: "approximate",
    definition: "Close to the actual but not completely accurate; roughly estimated.",
    keyConcepts: [
      { keyword: "close to actual", matchTerms: ["close", "near", "rough", "about", "around", "almost"], label: "Close to actual", hint: "Not exact but nearby." },
      { keyword: "not accurate", matchTerms: ["estimat", "imprecis", "inexact", "ballpark", "loose"], label: "Not completely accurate", hint: "An estimation rather than exact." },
    ],
    synonyms: ["rough", "estimated", "near", "close", "inexact"],
    partOfSpeech: "adjective",
    etymology: "Latin approximare -- ad (to) + proximus (nearest).",
  },
  {
    word: "approximate",
    definition: "To come close to or estimate something; to resemble.",
    keyConcepts: [
      { keyword: "come close to", matchTerms: ["close", "approach", "near", "border", "verge"], label: "Come close to", hint: "To get near to something." },
      { keyword: "estimate", matchTerms: ["estimat", "guess", "reckon", "gauge", "judge"], label: "To estimate", hint: "To calculate roughly." },
    ],
    synonyms: ["approach", "estimate", "near", "resemble", "border on"],
    partOfSpeech: "verb",
    etymology: "Latin approximare -- ad (to) + proximus (nearest).",
  },
  // ── compendium ──
  {
    word: "compendium",
    definition: "A collection of concise but detailed information about a particular subject.",
    keyConcepts: [
      { keyword: "collection", matchTerms: ["collect", "compil", "gather", "assembl", "antholog", "digest", "summary", "handbook", "reference"], label: "A collection", hint: "The definition says 'a collection' -- multiple things gathered together." },
      { keyword: "concise but detailed", matchTerms: ["concis", "brief", "succinct", "detail", "comprehensiv", "thorough", "condensed", "summary"], label: "Concise but detailed", hint: "The definition says 'concise but detailed information' -- brief yet thorough." },
    ],
    synonyms: ["collection", "compilation", "anthology", "digest", "handbook"],
    partOfSpeech: "noun",
    etymology: "Latin compendium (saving, shortcut) -- compendere (to weigh together).",
  },
  // ── apoplectic ──
  {
    word: "apoplectic",
    definition: "Overcome with extreme anger; furious to the point of being unable to speak coherently.",
    keyConcepts: [
      { keyword: "extreme anger", matchTerms: ["anger", "angry", "rage", "raging", "furious", "fury", "livid", "incensed", "enrag", "irate", "wrathful"], label: "Extreme anger", hint: "The definition says 'overcome with extreme anger' -- intensely mad." },
      { keyword: "unable to speak", matchTerms: ["speak", "speech", "coherent", "sputter", "incoherent", "beside oneself", "speechless", "lost for words", "overwhelm"], label: "Unable to speak coherently", hint: "The definition says 'unable to speak coherently' -- so angry they can't function properly." },
    ],
    synonyms: ["furious", "enraged", "livid", "incensed", "wrathful"],
    partOfSpeech: "adjective",
    etymology: "Greek apoplektikos -- apoplexia (stroke).",
  },
  // ── consensual ──
  {
    word: "consensual",
    definition: "Relating to or involving consent, especially mutual consent by all parties involved.",
    keyConcepts: [
      { keyword: "involving consent", matchTerms: ["consent", "agree", "agreement", "approv", "permission", "willing", "voluntary"], label: "Involving consent", hint: "The definition says 'involving consent' -- agreement is required." },
      { keyword: "mutual", matchTerms: ["mutual", "shared", "joint", "reciprocal", "both parties", "all parties", "bilateral", "together"], label: "Mutual consent by all", hint: "The definition says 'mutual consent by all parties involved' -- everyone agrees." },
    ],
    synonyms: ["agreed", "mutual", "voluntary", "willing"],
    partOfSpeech: "adjective",
    etymology: "Latin consentire (to agree) -- con (together) + sentire (to feel).",
  },
  // ── opportunistic ──
  {
    word: "opportunistic",
    definition: "Exploiting chances or circumstances for personal gain, often without regard for principles.",
    keyConcepts: [
      { keyword: "exploiting chances", matchTerms: ["exploit", "opportun", "chance", "circumstance", "advantage", "capitalize", "seize", "grab", "take advantage"], label: "Exploiting chances", hint: "The definition says 'exploiting chances or circumstances' -- taking advantage of situations." },
      { keyword: "without principles", matchTerms: ["principle", "ethics", "moral", "unscrupulous", "selfish", "self-interest", "personal gain", "expedient", "pragmatic"], label: "Without regard for principles", hint: "The definition says 'often without regard for principles' -- willing to compromise values." },
    ],
    synonyms: ["exploitative", "calculating", "self-serving", "pragmatic", "expedient"],
    partOfSpeech: "adjective",
    etymology: "Latin opportunus (favorable) -- ob (toward) + portus (harbor).",
  },
  // ── suffrage ──
  {
    word: "suffrage",
    definition: "The right to vote in political elections.",
    keyConcepts: [
      { keyword: "right to vote", matchTerms: ["right", "vote", "voting", "ballot", "franchise", "elector", "enfranchis"], label: "The right to vote", hint: "The definition says 'the right to vote' -- having the ability to cast a ballot." },
      { keyword: "political elections", matchTerms: ["politic", "election", "democrat", "civic", "citizen", "government"], label: "In political elections", hint: "The definition says 'in political elections' -- participating in choosing leaders." },
    ],
    synonyms: ["franchise", "voting rights", "ballot"],
    partOfSpeech: "noun",
    etymology: "Latin suffragium (voting tablet, vote).",
  },
  // ── addendum ──
  {
    word: "addendum",
    definition: "An item of additional material added at the end of a book or document.",
    keyConcepts: [
      { keyword: "additional material", matchTerms: ["addition", "extra", "supplement", "append", "attachment", "annex", "rider", "postscript"], label: "Additional material", hint: "The definition says 'additional material' -- something extra added on." },
      { keyword: "at the end", matchTerms: ["end", "after", "following", "conclud", "final", "back", "appended", "attached"], label: "Added at the end", hint: "The definition says 'added at the end of a book or document' -- comes after the main content." },
    ],
    synonyms: ["supplement", "appendix", "addition", "postscript", "attachment"],
    partOfSpeech: "noun",
    etymology: "Latin addendum (thing to be added) -- addere (to add).",
  },
  // ── omnipotent ──
  {
    word: "omnipotent",
    definition: "Having unlimited or universal power; able to do anything.",
    keyConcepts: [
      { keyword: "unlimited power", matchTerms: ["unlimit", "infinite", "boundless", "power", "powerful", "supreme", "absolute", "total", "complete"], label: "Unlimited power", hint: "The definition says 'unlimited or universal power' -- no restrictions on ability." },
      { keyword: "able to do anything", matchTerms: ["anything", "everything", "all-powerful", "almighty", "godlike", "divine", "capable", "invincible"], label: "Able to do anything", hint: "The definition says 'able to do anything' -- no limits on what can be accomplished." },
    ],
    synonyms: ["all-powerful", "almighty", "supreme", "invincible"],
    partOfSpeech: "adjective",
    etymology: "Latin omnipotens -- omnis (all) + potens (powerful).",
  },
  // ── agnostic ──
  {
    word: "agnostic",
    definition: "A person who believes that the existence of God is unknown or unknowable; holding no strong opinion.",
    keyConcepts: [
      { keyword: "existence unknown", matchTerms: ["unknown", "unknow", "uncertain", "unsure", "doubt", "question", "existence", "god", "divine", "spiritual"], label: "Existence is unknown", hint: "The definition says 'the existence of God is unknown or unknowable' -- cannot be proven." },
      { keyword: "no strong opinion", matchTerms: ["no opinion", "neutral", "undecid", "noncommit", "open-minded", "neither", "impartial", "fence"], label: "No strong opinion", hint: "The definition says 'holding no strong opinion' -- not taking a definite stance." },
    ],
    synonyms: ["doubter", "skeptic", "nonbeliever", "freethinker"],
    partOfSpeech: "noun",
    etymology: "Greek agnostos (unknown) -- a (not) + gnostos (known).",
  },
  // ── capitulate ──
  {
    word: "capitulate",
    definition: "To cease to resist an opponent or demand; to surrender.",
    keyConcepts: [
      { keyword: "cease to resist", matchTerms: ["cease", "stop", "resist", "give up", "give in", "yield", "relent", "concede", "back down"], label: "Cease to resist", hint: "The definition says 'cease to resist' -- stopping the fight." },
      { keyword: "surrender", matchTerms: ["surrender", "submit", "capitulat", "defeat", "accept", "acquiesce", "cave", "buckle", "fold"], label: "Surrender", hint: "The definition says 'surrender' -- accepting defeat." },
    ],
    synonyms: ["surrender", "yield", "submit", "concede", "give in"],
    partOfSpeech: "verb",
    etymology: "Latin capitulare (to draw up under headings) -- caput (head).",
  },
  // ── onomatopoeia ──
  {
    word: "onomatopoeia",
    definition: "The formation of a word from a sound associated with what it represents, such as 'buzz' or 'sizzle'.",
    keyConcepts: [
      { keyword: "word from sound", matchTerms: ["word", "sound", "noise", "represent", "imitat", "mimic", "echo", "resembl"], label: "Word formed from sound", hint: "The definition says 'formation of a word from a sound' -- the word sounds like the thing." },
      { keyword: "associated with", matchTerms: ["associat", "connect", "link", "relat", "buzz", "sizzle", "bang", "crash", "meow", "splash", "pop", "hiss"], label: "Sound it represents", hint: "The definition says 'associated with what it represents' -- like 'buzz' or 'sizzle'." },
    ],
    synonyms: ["sound word", "echoism", "imitative word"],
    partOfSpeech: "noun",
    etymology: "Greek onomatopoiia -- onoma (name) + poiein (to make).",
  },
  // ── derelict ──
  {
    word: "derelict",
    definition: "In a very poor condition as a result of disuse and neglect; a person without a home or job.",
    keyConcepts: [
      { keyword: "poor condition", matchTerms: ["poor", "bad", "dilapidat", "decay", "run-down", "crumbl", "ruined", "deteriorat", "abandoned", "decrepit"], label: "Poor condition from neglect", hint: "The definition says 'very poor condition as a result of disuse and neglect' -- falling apart." },
      { keyword: "homeless person", matchTerms: ["homeless", "vagrant", "tramp", "drifter", "outcast", "beggar", "down-and-out", "unemployed", "jobless"], label: "Person without home or job", hint: "The definition also means 'a person without a home or job' -- someone marginalized." },
    ],
    synonyms: ["abandoned", "dilapidated", "neglected", "vagrant", "homeless"],
    partOfSpeech: "adjective/noun",
    etymology: "Latin derelictus (abandoned) -- derelinquere (to forsake).",
  },
  // ── dereliction ──
  {
    word: "dereliction",
    definition: "The shameful failure to fulfill one's obligations; the state of being abandoned and neglected.",
    keyConcepts: [
      { keyword: "failure of duty", matchTerms: ["fail", "failure", "duty", "obligation", "responsib", "neglect", "negligent", "shirk", "derelict"], label: "Failure to fulfill obligations", hint: "The definition says 'shameful failure to fulfill one's obligations' -- not doing what you should." },
      { keyword: "abandoned state", matchTerms: ["abandon", "neglect", "disuse", "decay", "ruin", "disrepair", "deteriorat"], label: "State of being abandoned", hint: "The definition also means 'state of being abandoned and neglected' -- left to fall apart." },
    ],
    synonyms: ["neglect", "negligence", "abandonment", "failure"],
    partOfSpeech: "noun",
    etymology: "Latin derelictio -- derelinquere (to forsake).",
  },
  // ── amnesty ──
  {
    word: "amnesty",
    definition: "An official pardon for people who have committed political offenses; forgiveness granted by authority.",
    keyConcepts: [
      { keyword: "official pardon", matchTerms: ["official", "pardon", "forgive", "forgiveness", "absolv", "exonerat", "clemency", "mercy", "reprieve"], label: "Official pardon", hint: "The definition says 'official pardon' -- formal forgiveness from authority." },
      { keyword: "political offenses", matchTerms: ["politic", "offense", "crime", "criminal", "prisoner", "rebel", "dissident", "protest", "illegal", "conviction"], label: "For political offenses", hint: "The definition says 'for people who have committed political offenses' -- often dissidents or rebels." },
    ],
    synonyms: ["pardon", "forgiveness", "clemency", "reprieve", "absolution"],
    partOfSpeech: "noun",
    etymology: "Greek amnestia (forgetfulness) -- a (not) + mnestis (remembrance).",
  },
  // ── bespoke ──
  {
    word: "bespoke",
    definition: "Made to order according to the buyer's specifications; custom-made.",
    keyConcepts: [
      { keyword: "made to order", matchTerms: ["made to order", "order", "custom", "tailor", "commission", "personalis", "individual", "specific"], label: "Made to order", hint: "The definition says 'made to order' -- created specifically for someone." },
      { keyword: "buyer's specifications", matchTerms: ["specification", "requirement", "request", "buyer", "customer", "client", "unique", "one-of-a-kind", "handmade", "crafted"], label: "According to specifications", hint: "The definition says 'according to the buyer's specifications' -- customized to exact needs." },
    ],
    synonyms: ["custom-made", "tailored", "made-to-order", "personalized"],
    partOfSpeech: "adjective",
    etymology: "Past participle of bespeak (to speak for, order).",
  },
  // ── correlate ──
  {
    word: "correlate",
    definition: "To have a mutual relationship or connection; to establish a relationship between two things.",
    keyConcepts: [
      { keyword: "mutual relationship", matchTerms: ["mutual", "relationship", "relation", "connect", "connection", "link", "associat", "correspond", "parallel"], label: "Mutual relationship", hint: "The definition says 'have a mutual relationship or connection' -- things are linked together." },
      { keyword: "establish connection", matchTerms: ["establish", "show", "demonstrat", "prove", "find", "identify", "determine", "relate", "tie", "match"], label: "Establish a relationship", hint: "The definition says 'establish a relationship between two things' -- showing how they connect." },
    ],
    synonyms: ["connect", "associate", "link", "relate", "correspond"],
    partOfSpeech: "verb",
    etymology: "Latin correlatus -- com (together) + relatus (related).",
  },
  // ── cudgel ──
  {
    word: "cudgel",
    definition: "A short thick stick used as a weapon; to beat with a cudgel.",
    keyConcepts: [
      { keyword: "thick stick", matchTerms: ["stick", "club", "bat", "baton", "rod", "staff", "thick", "heavy", "blunt"], label: "A thick stick", hint: "The definition says 'a short thick stick' -- a blunt weapon." },
      { keyword: "weapon or beat", matchTerms: ["weapon", "beat", "hit", "strike", "bludgeon", "attack", "assault", "pummel"], label: "Used as weapon", hint: "The definition says 'used as a weapon' or 'to beat with' -- for striking." },
    ],
    synonyms: ["club", "bludgeon", "truncheon", "baton"],
    partOfSpeech: "noun/verb",
    etymology: "Old English cycgel.",
  },
  // ── contract (verb) ──
  {
    word: "contract",
    definition: "To decrease in size, number, or range; to catch or develop a disease.",
    keyConcepts: [
      { keyword: "decrease in size", matchTerms: ["decrease", "shrink", "reduce", "smaller", "tighten", "constrict", "compress", "narrow", "lessen"], label: "Decrease in size", hint: "The definition says 'decrease in size, number, or range' -- getting smaller." },
      { keyword: "catch disease", matchTerms: ["catch", "develop", "disease", "illness", "infect", "acquire", "get", "come down with", "sick"], label: "Catch a disease", hint: "The definition also says 'catch or develop a disease' -- becoming ill." },
    ],
    synonyms: ["shrink", "reduce", "catch", "acquire"],
    partOfSpeech: "verb",
    etymology: "Latin contrahere -- con (together) + trahere (to draw).",
  },
  // ── contract (adjective - contracted) ──
  {
    word: "contracted",
    definition: "Having become smaller or shorter; bound by the terms of an agreement.",
    keyConcepts: [
      { keyword: "become smaller", matchTerms: ["smaller", "shorter", "shrunk", "reduced", "tightened", "constricted", "compressed"], label: "Become smaller", hint: "The definition says 'having become smaller or shorter' -- reduced in size." },
      { keyword: "bound by agreement", matchTerms: ["bound", "agreement", "contract", "obligat", "commit", "hired", "engaged", "agreed"], label: "Bound by agreement", hint: "The definition also says 'bound by the terms of an agreement' -- legally committed." },
    ],
    synonyms: ["shrunk", "reduced", "bound", "obligated"],
    partOfSpeech: "adjective",
    etymology: "Latin contrahere -- con (together) + trahere (to draw).",
  },
  // ── defunct ──
  {
    word: "defunct",
    definition: "No longer existing or functioning; dead or extinct.",
    keyConcepts: [
      { keyword: "no longer existing", matchTerms: ["no longer", "not exist", "gone", "ceased", "ended", "finished", "terminated", "dissolved", "closed"], label: "No longer existing", hint: "The definition says 'no longer existing or functioning' -- it's over." },
      { keyword: "dead or extinct", matchTerms: ["dead", "extinct", "obsolete", "expired", "inactive", "inoperative", "kaput", "finished"], label: "Dead or extinct", hint: "The definition says 'dead or extinct' -- completely finished." },
    ],
    synonyms: ["extinct", "dead", "obsolete", "inactive", "inoperative"],
    partOfSpeech: "adjective",
    etymology: "Latin defunctus (dead) -- defungi (to finish).",
  },
  // ── episodic ──
  {
    word: "episodic",
    definition: "Occurring occasionally and at irregular intervals; consisting of separate episodes.",
    keyConcepts: [
      { keyword: "occasionally", matchTerms: ["occasion", "irregular", "intermittent", "sporadic", "periodic", "infrequent", "scattered", "random"], label: "Occasionally", hint: "The definition says 'occurring occasionally and at irregular intervals' -- not constant." },
      { keyword: "separate episodes", matchTerms: ["episode", "separate", "distinct", "part", "segment", "installment", "chapter", "scene", "serial"], label: "Separate episodes", hint: "The definition says 'consisting of separate episodes' -- divided into parts." },
    ],
    synonyms: ["sporadic", "intermittent", "occasional", "irregular"],
    partOfSpeech: "adjective",
    etymology: "Greek epeisodion (addition) -- epi (upon) + eisodos (entrance).",
  },
  // ── affluent ──
  {
    word: "affluent",
    definition: "Having a great deal of money; wealthy and prosperous.",
    keyConcepts: [
      { keyword: "great deal of money", matchTerms: ["money", "rich", "wealth", "fortune", "prosper", "well-off", "well-to-do", "moneyed", "loaded"], label: "Having money", hint: "The definition says 'having a great deal of money' -- financially well-off." },
      { keyword: "wealthy", matchTerms: ["wealthy", "prosper", "opulent", "luxur", "comfortable", "privileged", "successful", "thriving"], label: "Wealthy and prosperous", hint: "The definition says 'wealthy and prosperous' -- living comfortably." },
    ],
    synonyms: ["wealthy", "rich", "prosperous", "well-off", "opulent"],
    partOfSpeech: "adjective",
    etymology: "Latin affluere (to flow toward) -- ad (to) + fluere (to flow).",
  },
  // ── effluence ──
  {
    word: "effluence",
    definition: "Something that flows out or emanates from a source; an outflow or emanation.",
    keyConcepts: [
      { keyword: "flows out", matchTerms: ["flow", "out", "emanat", "discharge", "stream", "pour", "issue", "emerge", "escape"], label: "Flows out", hint: "The definition says 'something that flows out' -- moving outward from a source." },
      { keyword: "emanation", matchTerms: ["emanat", "emission", "outflow", "output", "release", "exud", "radiat", "source"], label: "Emanation from source", hint: "The definition says 'emanates from a source' -- originating from somewhere." },
    ],
    synonyms: ["outflow", "emanation", "discharge", "emission"],
    partOfSpeech: "noun",
    etymology: "Latin effluere (to flow out) -- ex (out) + fluere (to flow).",
  },
  // ── perturb ──
  {
    word: "perturb",
    definition: "To make someone anxious or unsettled; to disturb the normal state of something.",
    keyConcepts: [
      { keyword: "make anxious", matchTerms: ["anxious", "anxiety", "worried", "unsettle", "agitat", "distress", "trouble", "bother", "concern", "alarm"], label: "Make anxious", hint: "The definition says 'make someone anxious or unsettled' -- causing worry." },
      { keyword: "disturb normal", matchTerms: ["disturb", "disrupt", "upset", "unbalance", "throw off", "destabiliz", "disorder", "affect", "alter"], label: "Disturb normal state", hint: "The definition says 'disturb the normal state' -- disrupting equilibrium." },
    ],
    synonyms: ["disturb", "unsettle", "agitate", "worry", "disquiet"],
    partOfSpeech: "verb",
    etymology: "Latin perturbare -- per (through) + turbare (to disturb).",
  },
  // ── excruciating ──
  {
    word: "excruciating",
    definition: "Intensely painful; causing great physical or mental suffering.",
    keyConcepts: [
      { keyword: "intensely painful", matchTerms: ["intense", "painful", "pain", "agony", "agoniz", "tortur", "unbearable", "severe", "extreme", "acute"], label: "Intensely painful", hint: "The definition says 'intensely painful' -- extreme pain." },
      { keyword: "great suffering", matchTerms: ["suffer", "torment", "distress", "misery", "anguish", "harrowing", "grueling", "terrible", "awful"], label: "Great suffering", hint: "The definition says 'causing great physical or mental suffering' -- deeply agonizing." },
    ],
    synonyms: ["agonizing", "painful", "unbearable", "torturous", "harrowing"],
    partOfSpeech: "adjective",
    etymology: "Latin excruciare (to torture) -- ex (out) + cruciare (to crucify).",
  },
  // ── hermetic ──
  {
    word: "hermetic",
    definition: "Completely airtight; relating to an ancient occult tradition; isolated from outside influences.",
    keyConcepts: [
      { keyword: "airtight", matchTerms: ["airtight", "sealed", "tight", "impermeable", "watertight", "closed", "secure", "vacuum"], label: "Airtight", hint: "The definition says 'completely airtight' -- nothing can get in or out." },
      { keyword: "isolated", matchTerms: ["isolat", "secluded", "insulated", "cut off", "separate", "protected", "removed", "occult", "esoteric", "mysterious"], label: "Isolated from outside", hint: "The definition says 'isolated from outside influences' -- protected from external contact." },
    ],
    synonyms: ["airtight", "sealed", "isolated", "secluded"],
    partOfSpeech: "adjective",
    etymology: "Greek Hermes Trismegistus (legendary alchemist).",
  },
  // ── stupendous ──
  {
    word: "stupendous",
    definition: "Extremely impressive; amazingly large, excellent, or great.",
    keyConcepts: [
      { keyword: "extremely impressive", matchTerms: ["impressive", "amazing", "astonish", "astound", "stagger", "remarkable", "extraordinar", "phenomenal", "incredible"], label: "Extremely impressive", hint: "The definition says 'extremely impressive' -- causing amazement." },
      { keyword: "amazingly large", matchTerms: ["large", "huge", "enormous", "massive", "great", "vast", "tremendous", "immense", "colossal", "excellent"], label: "Amazingly large or great", hint: "The definition says 'amazingly large, excellent, or great' -- exceptional in scale or quality." },
    ],
    synonyms: ["amazing", "tremendous", "remarkable", "extraordinary", "phenomenal"],
    partOfSpeech: "adjective",
    etymology: "Latin stupendus (to be wondered at) -- stupere (to be stunned).",
  },
  // ── fissure ──
  {
    word: "fissure",
    definition: "A long, narrow opening or crack, especially in rock or the earth's surface.",
    keyConcepts: [
      { keyword: "narrow opening", matchTerms: ["narrow", "opening", "crack", "split", "gap", "crevice", "cleft", "breach", "rift", "fracture"], label: "Narrow opening", hint: "The definition says 'a long, narrow opening or crack' -- a thin gap." },
      { keyword: "in rock or earth", matchTerms: ["rock", "earth", "ground", "surface", "geological", "fault", "rupture", "break"], label: "In rock or earth", hint: "The definition says 'especially in rock or the earth's surface' -- geological context." },
    ],
    synonyms: ["crack", "crevice", "split", "rift", "fracture"],
    partOfSpeech: "noun",
    etymology: "Latin fissura -- findere (to split).",
  },
  // ── despot ──
  {
    word: "despot",
    definition: "A ruler or other person who holds absolute power, typically exercising it cruelly.",
    keyConcepts: [
      { keyword: "absolute power", matchTerms: ["absolute", "power", "authority", "control", "ruler", "dictator", "tyrant", "autocrat", "sovereign"], label: "Absolute power", hint: "The definition says 'holds absolute power' -- complete authority." },
      { keyword: "exercised cruelly", matchTerms: ["cruel", "tyrann", "oppress", "harsh", "brutal", "authoritarian", "domineering", "ruthless", "iron fist"], label: "Exercised cruelly", hint: "The definition says 'typically exercising it cruelly' -- using power harshly." },
    ],
    synonyms: ["tyrant", "dictator", "autocrat", "oppressor"],
    partOfSpeech: "noun",
    etymology: "Greek despotes (master, lord).",
  },
  // ── dapper ──
  {
    word: "dapper",
    definition: "Neat and trim in dress and appearance; stylishly dressed.",
    keyConcepts: [
      { keyword: "neat and trim", matchTerms: ["neat", "trim", "tidy", "smart", "spruce", "well-groomed", "clean", "crisp", "polished"], label: "Neat and trim", hint: "The definition says 'neat and trim in dress and appearance' -- well put together." },
      { keyword: "stylish", matchTerms: ["stylish", "fashion", "elegant", "sharp", "chic", "dashing", "debonair", "suave", "sophisticated"], label: "Stylishly dressed", hint: "The definition says 'stylishly dressed' -- looking good with effort." },
    ],
    synonyms: ["smart", "stylish", "spruce", "debonair", "elegant"],
    partOfSpeech: "adjective",
    etymology: "Middle Dutch dapper (brave, strong).",
  },
  // ── blasé ──
  {
    word: "blasé",
    definition: "Unimpressed or indifferent due to overexposure; bored from excessive worldly pleasures.",
    keyConcepts: [
      { keyword: "unimpressed", matchTerms: ["unimpress", "indifferen", "unconcern", "nonchalant", "unmoved", "apathetic", "casual", "cool"], label: "Unimpressed", hint: "The definition says 'unimpressed or indifferent' -- not easily excited." },
      { keyword: "due to overexposure", matchTerms: ["overexpos", "excessive", "too much", "jaded", "world-weary", "satiat", "bored", "tired", "seen it all"], label: "Due to overexposure", hint: "The definition says 'due to overexposure' -- having seen too much to care." },
    ],
    synonyms: ["indifferent", "jaded", "nonchalant", "unimpressed", "world-weary"],
    partOfSpeech: "adjective",
    etymology: "French blasé (exhausted by pleasure).",
  },
  // ── collude ──
  {
    word: "collude",
    definition: "To cooperate in a secret or unlawful way to deceive or cheat others.",
    keyConcepts: [
      { keyword: "secret cooperation", matchTerms: ["secret", "cooperat", "conspir", "plot", "scheme", "conniv", "collaborate", "together", "coordinate"], label: "Secret cooperation", hint: "The definition says 'cooperate in a secret or unlawful way' -- working together covertly." },
      { keyword: "deceive or cheat", matchTerms: ["deceiv", "cheat", "defraud", "trick", "swindle", "mislead", "dishonest", "corrupt", "fraud"], label: "To deceive or cheat", hint: "The definition says 'to deceive or cheat others' -- harmful intent." },
    ],
    synonyms: ["conspire", "connive", "scheme", "plot"],
    partOfSpeech: "verb",
    etymology: "Latin colludere -- com (together) + ludere (to play).",
  },
  // ── egotistic ──
  {
    word: "egotistic",
    definition: "Excessively conceited or self-centered; having an inflated sense of self-importance.",
    keyConcepts: [
      { keyword: "excessively conceited", matchTerms: ["conceit", "vain", "arrogant", "narcissist", "self-absorbed", "selfish", "self-centered"], label: "Excessively conceited", hint: "The definition says 'excessively conceited or self-centered' -- focused on oneself." },
      { keyword: "inflated self-importance", matchTerms: ["inflat", "self-import", "ego", "proud", "superior", "boastful", "smug", "self-satisfied"], label: "Inflated self-importance", hint: "The definition says 'inflated sense of self-importance' -- thinking too highly of oneself." },
    ],
    synonyms: ["conceited", "narcissistic", "self-centered", "vain", "arrogant"],
    partOfSpeech: "adjective",
    etymology: "Latin ego (I) + -istic.",
  },
  // ── affront ──
  {
    word: "affront",
    definition: "An action or remark that causes outrage or offense; to insult or offend someone openly.",
    keyConcepts: [
      { keyword: "causes outrage", matchTerms: ["outrage", "offense", "offend", "insult", "slight", "indignity", "disrespect", "provok"], label: "Causes outrage", hint: "The definition says 'an action or remark that causes outrage or offense' -- something that angers." },
      { keyword: "insult openly", matchTerms: ["insult", "openly", "public", "deliberate", "direct", "bold", "brazen", "confront"], label: "Insult openly", hint: "The definition says 'to insult or offend someone openly' -- done without hiding." },
    ],
    synonyms: ["insult", "offense", "slight", "indignity"],
    partOfSpeech: "noun/verb",
    etymology: "Old French afronter (to confront) -- Latin ad (to) + frons (forehead).",
  },
  // ── conglomerate ──
  {
    word: "conglomerate",
    definition: "A large corporation formed by merging different businesses; a mass of various materials gathered together.",
    keyConcepts: [
      { keyword: "large corporation", matchTerms: ["large", "corporation", "company", "business", "merger", "enterprise", "firm", "multinational", "holding"], label: "Large corporation", hint: "The definition says 'a large corporation formed by merging different businesses' -- a big combined company." },
      { keyword: "various materials together", matchTerms: ["various", "material", "gather", "collect", "mix", "diverse", "different", "combined", "mass", "heterogen"], label: "Various things together", hint: "The definition says 'a mass of various materials gathered together' -- different things combined." },
    ],
    synonyms: ["corporation", "conglomeration", "combination", "aggregate"],
    partOfSpeech: "noun",
    etymology: "Latin conglomerare -- con (together) + glomerare (to wind into a ball).",
  },
  // ── foist ──
  {
    word: "foist",
    definition: "To impose an unwelcome or unnecessary thing on someone; to force upon.",
    keyConcepts: [
      { keyword: "impose unwelcome", matchTerms: ["impose", "unwelcome", "unwanted", "force", "thrust", "push", "inflict", "burden", "saddle"], label: "Impose unwelcome thing", hint: "The definition says 'impose an unwelcome or unnecessary thing' -- forcing something undesired." },
      { keyword: "force upon", matchTerms: ["force", "upon", "on", "onto", "palm off", "pass off", "unload", "dump", "fob off"], label: "Force upon someone", hint: "The definition says 'force upon' -- making someone accept something." },
    ],
    synonyms: ["impose", "force", "thrust", "palm off", "inflict"],
    partOfSpeech: "verb",
    etymology: "Dutch vuisten (to take in hand).",
  },
  // ── harangue ──
  {
    word: "harangue",
    definition: "A lengthy and aggressive speech; to lecture someone at length in an aggressive manner.",
    keyConcepts: [
      { keyword: "lengthy speech", matchTerms: ["lengthy", "long", "speech", "lecture", "tirade", "diatribe", "rant", "sermon", "discourse"], label: "Lengthy speech", hint: "The definition says 'a lengthy and aggressive speech' -- going on and on." },
      { keyword: "aggressive manner", matchTerms: ["aggressive", "forceful", "attack", "criticiz", "berat", "scold", "rebuke", "reprimand", "bombastic", "vehement"], label: "Aggressive manner", hint: "The definition says 'in an aggressive manner' -- not gentle or brief." },
    ],
    synonyms: ["tirade", "diatribe", "rant", "lecture"],
    partOfSpeech: "noun/verb",
    etymology: "Old French harangue (public address).",
  },
  // ── beguile ──
  {
    word: "beguile",
    definition: "To charm or enchant someone, often in a deceptive way; to trick into doing something.",
    keyConcepts: [
      { keyword: "charm or enchant", matchTerms: ["charm", "enchant", "captivat", "fascinate", "entrance", "allure", "attract", "seduc", "bewitch"], label: "Charm or enchant", hint: "The definition says 'charm or enchant someone' -- making someone delighted." },
      { keyword: "deceptive trick", matchTerms: ["deceptive", "deceiv", "trick", "mislead", "manipulat", "dupe", "fool", "lure", "entice"], label: "Often deceptive", hint: "The definition says 'often in a deceptive way' -- the charm may hide trickery." },
    ],
    synonyms: ["charm", "enchant", "deceive", "captivate", "seduce"],
    partOfSpeech: "verb",
    etymology: "be- (thoroughly) + guile (deceit).",
  },
  // ── tumultuous ──
  {
    word: "tumultuous",
    definition: "Making a loud, confused noise; excited, confused, or disorderly.",
    keyConcepts: [
      { keyword: "loud confused noise", matchTerms: ["loud", "noise", "noisy", "confused", "uproar", "clamor", "din", "commotion", "racket", "chaos"], label: "Loud confused noise", hint: "The definition says 'making a loud, confused noise' -- chaotic sound." },
      { keyword: "excited or disorderly", matchTerms: ["excit", "disorder", "turbulent", "stormy", "tempestuous", "wild", "hectic", "frenzied", "riotous", "boisterous"], label: "Excited or disorderly", hint: "The definition says 'excited, confused, or disorderly' -- lacking calm order." },
    ],
    synonyms: ["chaotic", "turbulent", "stormy", "riotous", "boisterous"],
    partOfSpeech: "adjective",
    etymology: "Latin tumultus (commotion).",
  },
  // ── tautological ──
  {
    word: "tautological",
    definition: "Using different words to say the same thing; needlessly repetitive in meaning.",
    keyConcepts: [
      { keyword: "same thing", matchTerms: ["same", "repeat", "redundant", "identical", "duplicate", "restat", "echo"], label: "Saying the same thing", hint: "The definition says 'using different words to say the same thing' -- repetition of meaning." },
      { keyword: "needlessly repetitive", matchTerms: ["needless", "unnecessary", "superfluous", "redundant", "repetit", "circular", "pleonastic"], label: "Needlessly repetitive", hint: "The definition says 'needlessly repetitive in meaning' -- adds nothing new." },
    ],
    synonyms: ["redundant", "repetitive", "pleonastic", "circular"],
    partOfSpeech: "adjective",
    etymology: "Greek tautologia -- tauto (the same) + logos (word).",
  },
  // ── flagrant ──
  {
    word: "flagrant",
    definition: "Conspicuously or obviously offensive; shockingly noticeable.",
    keyConcepts: [
      { keyword: "conspicuously offensive", matchTerms: ["conspicuous", "obvious", "blatant", "glaring", "offensive", "brazen", "shameless", "outrageous"], label: "Conspicuously offensive", hint: "The definition says 'conspicuously or obviously offensive' -- impossible to miss." },
      { keyword: "shockingly noticeable", matchTerms: ["shock", "notic", "egregious", "gross", "extreme", "overt", "undisguised", "bold"], label: "Shockingly noticeable", hint: "The definition says 'shockingly noticeable' -- stands out for the wrong reasons." },
    ],
    synonyms: ["blatant", "glaring", "brazen", "egregious", "gross"],
    partOfSpeech: "adjective",
    etymology: "Latin flagrans (burning) -- flagrare (to burn).",
  },
  // ── aloof ──
  {
    word: "aloof",
    definition: "Not friendly or forthcoming; cool and distant in manner.",
    keyConcepts: [
      { keyword: "not friendly", matchTerms: ["not friendly", "unfriendly", "cold", "cool", "reserved", "standoffish", "unapproach", "withdrawn"], label: "Not friendly", hint: "The definition says 'not friendly or forthcoming' -- keeping others at arm's length." },
      { keyword: "distant in manner", matchTerms: ["distant", "detach", "remote", "indifferent", "haughty", "superior", "removed", "apart"], label: "Distant in manner", hint: "The definition says 'cool and distant in manner' -- emotionally unavailable." },
    ],
    synonyms: ["distant", "detached", "reserved", "standoffish", "remote"],
    partOfSpeech: "adjective",
    etymology: "Dutch loef (windward) -- nautical term for keeping distance.",
  },
  // ── astute ──
  {
    word: "astute",
    definition: "Having an ability to accurately assess situations and turn them to one's advantage; shrewd.",
    keyConcepts: [
      { keyword: "accurately assess", matchTerms: ["accurate", "assess", "perceiv", "understand", "discern", "judg", "insight", "sharp", "keen"], label: "Accurately assess", hint: "The definition says 'ability to accurately assess situations' -- seeing clearly." },
      { keyword: "turn to advantage", matchTerms: ["advantage", "benefit", "clever", "shrewd", "cunning", "savvy", "smart", "calculating", "opportun"], label: "Turn to advantage", hint: "The definition says 'turn them to one's advantage' -- making situations work for you." },
    ],
    synonyms: ["shrewd", "sharp", "clever", "perceptive", "canny"],
    partOfSpeech: "adjective",
    etymology: "Latin astutus (crafty) -- astus (craft, cunning).",
  },
  // ── shrewd ──
  {
    word: "shrewd",
    definition: "Having sharp powers of judgment; clever in practical matters.",
    keyConcepts: [
      { keyword: "sharp judgment", matchTerms: ["sharp", "judgment", "judgement", "astute", "keen", "perceptive", "discerning", "wise"], label: "Sharp judgment", hint: "The definition says 'having sharp powers of judgment' -- making good assessments." },
      { keyword: "clever in practical matters", matchTerms: ["clever", "practical", "smart", "cunning", "savvy", "canny", "business", "worldly", "pragmatic"], label: "Clever in practical matters", hint: "The definition says 'clever in practical matters' -- street-smart wisdom." },
    ],
    synonyms: ["astute", "sharp", "clever", "canny", "perceptive"],
    partOfSpeech: "adjective",
    etymology: "Middle English shrewed (wicked) -- from shrew.",
  },
  // ── incorrigible ──
  {
    word: "incorrigible",
    definition: "Not able to be corrected, improved, or reformed; beyond redemption.",
    keyConcepts: [
      { keyword: "not able to be corrected", matchTerms: ["not", "unable", "cannot", "correct", "fix", "change", "reform", "cure", "remedy"], label: "Cannot be corrected", hint: "The definition says 'not able to be corrected, improved, or reformed' -- unchangeable." },
      { keyword: "beyond redemption", matchTerms: ["beyond", "hopeless", "irredeemable", "hardened", "inveterate", "habitual", "chronic"], label: "Beyond redemption", hint: "The definition says 'beyond redemption' -- past the point of saving." },
    ],
    synonyms: ["irredeemable", "hopeless", "inveterate", "hardened", "unreformable"],
    partOfSpeech: "adjective",
    etymology: "Latin incorrigibilis -- in (not) + corrigere (to correct).",
  },
  // ── boorish ──
  {
    word: "boorish",
    definition: "Rough and bad-mannered; coarse and unrefined.",
    keyConcepts: [
      { keyword: "bad-mannered", matchTerms: ["bad manner", "rude", "impolite", "discourteous", "uncouth", "ill-bred", "crude", "vulgar"], label: "Bad-mannered", hint: "The definition says 'rough and bad-mannered' -- lacking social grace." },
      { keyword: "coarse and unrefined", matchTerms: ["coarse", "unrefined", "crude", "rough", "uncultured", "unsophistic", "loutish", "oafish"], label: "Coarse and unrefined", hint: "The definition says 'coarse and unrefined' -- lacking polish." },
    ],
    synonyms: ["crude", "uncouth", "vulgar", "rude", "loutish"],
    partOfSpeech: "adjective",
    etymology: "Dutch boer (farmer) -- implying rustic manners.",
  },
  // ── caustic ──
  {
    word: "caustic",
    definition: "Able to burn or corrode organic tissue; sarcastic in a scathing way.",
    keyConcepts: [
      { keyword: "burn or corrode", matchTerms: ["burn", "corrod", "acid", "chemical", "erosive", "destroy", "tissue", "damage"], label: "Burn or corrode", hint: "The definition says 'able to burn or corrode organic tissue' -- chemically damaging." },
      { keyword: "scathingly sarcastic", matchTerms: ["sarcastic", "scathing", "biting", "cutting", "harsh", "acerbic", "mordant", "bitter", "cruel"], label: "Scathingly sarcastic", hint: "The definition says 'sarcastic in a scathing way' -- words that wound." },
    ],
    synonyms: ["corrosive", "acidic", "biting", "acerbic", "scathing"],
    partOfSpeech: "adjective",
    etymology: "Greek kaustikos (capable of burning) -- kaiein (to burn).",
  },
  // ── judicious ──
  {
    word: "judicious",
    definition: "Having or showing good judgment; sensible and wise.",
    keyConcepts: [
      { keyword: "good judgment", matchTerms: ["good", "judgment", "judgement", "wise", "sound", "prudent", "discerning", "astute"], label: "Good judgment", hint: "The definition says 'having or showing good judgment' -- making smart decisions." },
      { keyword: "sensible and wise", matchTerms: ["sensible", "wise", "reasonabl", "rational", "thoughtful", "careful", "consider", "circumspect"], label: "Sensible and wise", hint: "The definition says 'sensible and wise' -- well-considered choices." },
    ],
    synonyms: ["wise", "prudent", "sensible", "discerning", "shrewd"],
    partOfSpeech: "adjective",
    etymology: "Latin judicium (judgment) -- judex (judge).",
  },
  // ── litigious ──
  {
    word: "litigious",
    definition: "Inclined to go to law to settle disputes; relating to lawsuits.",
    keyConcepts: [
      { keyword: "inclined to go to law", matchTerms: ["law", "legal", "sue", "lawsuit", "court", "litigat", "lawyer", "dispute", "inclined"], label: "Inclined to go to law", hint: "The definition says 'inclined to go to law to settle disputes' -- quick to sue." },
      { keyword: "relating to lawsuits", matchTerms: ["lawsuit", "litigation", "legal action", "court case", "judicial", "contentious", "quarrelsome"], label: "Relating to lawsuits", hint: "The definition says 'relating to lawsuits' -- legal proceedings." },
    ],
    synonyms: ["contentious", "quarrelsome", "disputatious", "argumentative"],
    partOfSpeech: "adjective",
    etymology: "Latin litigiosus -- litigare (to go to law).",
  },
  // ── turbulent ──
  {
    word: "turbulent",
    definition: "Characterized by conflict, disorder, or confusion; not controlled or calm.",
    keyConcepts: [
      { keyword: "conflict or disorder", matchTerms: ["conflict", "disorder", "chaos", "confusion", "upheaval", "turmoil", "unrest", "strife"], label: "Conflict or disorder", hint: "The definition says 'characterized by conflict, disorder, or confusion' -- chaotic state." },
      { keyword: "not calm", matchTerms: ["not calm", "unstable", "wild", "stormy", "violent", "rough", "agitat", "tempestuous", "volatile"], label: "Not calm", hint: "The definition says 'not controlled or calm' -- lacking peace." },
    ],
    synonyms: ["chaotic", "stormy", "volatile", "tumultuous", "wild"],
    partOfSpeech: "adjective",
    etymology: "Latin turbulentus -- turba (crowd, disturbance).",
  },
  // ── regime ──
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
    etymology: "French régime -- Latin regimen (rule, guidance).",
  },
  // ── aberrant ──
  {
    word: "aberrant",
    definition: "Departing from an accepted standard; deviating from the normal type.",
    keyConcepts: [
      { keyword: "departing from standard", matchTerms: ["depart", "standard", "deviat", "abnormal", "unusual", "atypical", "irregular"], label: "Departing from standard", hint: "The definition says 'departing from an accepted standard' -- not following the norm." },
      { keyword: "deviating from normal", matchTerms: ["deviat", "normal", "type", "anomalous", "divergent", "exceptional", "odd"], label: "Deviating from normal", hint: "The definition says 'deviating from the normal type' -- straying from what's typical." },
    ],
    synonyms: ["abnormal", "deviant", "anomalous", "atypical", "irregular"],
    partOfSpeech: "adjective",
    etymology: "Latin aberrans -- aberrare (to wander away).",
  },
  // ── abrasive ──
  {
    word: "abrasive",
    definition: "Harsh or rough in manner; tending to annoy or cause ill will.",
    keyConcepts: [
      { keyword: "harsh or rough", matchTerms: ["harsh", "rough", "coarse", "grating", "irritating", "caustic"], label: "Harsh or rough", hint: "The definition says 'harsh or rough in manner' -- not gentle." },
      { keyword: "tending to annoy", matchTerms: ["annoy", "ill will", "offensive", "rude", "brusque", "cutting", "sharp"], label: "Tending to annoy", hint: "The definition says 'tending to annoy or cause ill will' -- rubs people the wrong way." },
    ],
    synonyms: ["harsh", "caustic", "brusque", "cutting", "grating"],
    partOfSpeech: "adjective",
    etymology: "Latin abradere (to scrape off).",
  },
  // ── accountable ──
  {
    word: "accountable",
    definition: "Required or expected to justify actions or decisions; responsible.",
    keyConcepts: [
      { keyword: "required to justify", matchTerms: ["required", "justify", "explain", "answer for", "answerable", "liable"], label: "Required to justify", hint: "The definition says 'required to justify actions' -- must explain yourself." },
      { keyword: "responsible", matchTerms: ["responsible", "liable", "obligated", "duty", "beholden", "chargeable"], label: "Responsible", hint: "The definition says 'responsible' -- held to account." },
    ],
    synonyms: ["responsible", "answerable", "liable", "obligated", "beholden"],
    partOfSpeech: "adjective",
    etymology: "Old French aconter (to count, reckon).",
  },
  // ── acrimonious ──
  {
    word: "acrimonious",
    definition: "Angry and bitter in tone or manner; harsh and sharp in language.",
    keyConcepts: [
      { keyword: "angry and bitter", matchTerms: ["angry", "bitter", "hostile", "resentful", "rancorous", "vitriolic"], label: "Angry and bitter", hint: "The definition says 'angry and bitter in tone' -- full of resentment." },
      { keyword: "harsh in language", matchTerms: ["harsh", "sharp", "language", "caustic", "cutting", "venomous", "scathing"], label: "Harsh in language", hint: "The definition says 'harsh and sharp in language' -- biting words." },
    ],
    synonyms: ["bitter", "caustic", "rancorous", "vitriolic", "hostile"],
    partOfSpeech: "adjective",
    etymology: "Latin acrimonia (sharpness, pungency).",
  },
  // ── adaptable ──
  {
    word: "adaptable",
    definition: "Able to adjust to new conditions or circumstances; flexible.",
    keyConcepts: [
      { keyword: "able to adjust", matchTerms: ["able", "adjust", "change", "modify", "accommodate", "conform"], label: "Able to adjust", hint: "The definition says 'able to adjust to new conditions' -- can change as needed." },
      { keyword: "flexible", matchTerms: ["flexible", "versatile", "malleable", "pliant", "resilient", "responsive"], label: "Flexible", hint: "The definition says 'flexible' -- bends without breaking." },
    ],
    synonyms: ["flexible", "versatile", "adjustable", "malleable", "resilient"],
    partOfSpeech: "adjective",
    etymology: "Latin adaptare (to fit).",
  },
  // ── adversarial ──
  {
    word: "adversarial",
    definition: "Involving conflict or opposition; characteristic of an opponent or enemy.",
    keyConcepts: [
      { keyword: "involving conflict", matchTerms: ["conflict", "opposition", "hostile", "combative", "confrontational", "contentious"], label: "Involving conflict", hint: "The definition says 'involving conflict or opposition' -- at odds with each other." },
      { keyword: "opponent or enemy", matchTerms: ["opponent", "enemy", "rival", "antagonist", "adversary", "foe"], label: "Opponent or enemy", hint: "The definition says 'characteristic of an opponent' -- like enemies." },
    ],
    synonyms: ["hostile", "antagonistic", "combative", "confrontational", "opposing"],
    partOfSpeech: "adjective",
    etymology: "Latin adversarius (opponent).",
  },
  // ── advantageous ──
  {
    word: "advantageous",
    definition: "Involving or creating favorable circumstances; beneficial or profitable.",
    keyConcepts: [
      { keyword: "favorable circumstances", matchTerms: ["favorable", "circumstances", "opportune", "auspicious", "propitious", "fortunate"], label: "Favorable circumstances", hint: "The definition says 'creating favorable circumstances' -- sets you up well." },
      { keyword: "beneficial", matchTerms: ["beneficial", "profitable", "useful", "helpful", "gain", "positive", "rewarding"], label: "Beneficial", hint: "The definition says 'beneficial or profitable' -- works in your favor." },
    ],
    synonyms: ["beneficial", "profitable", "favorable", "useful", "helpful"],
    partOfSpeech: "adjective",
    etymology: "Old French avantage (advantage).",
  },
  // ── amplify ──
  {
    word: "amplify",
    definition: "To increase the strength or amount of something; to make larger or more powerful.",
    keyConcepts: [
      { keyword: "increase strength", matchTerms: ["increase", "strength", "amount", "intensify", "boost", "magnify", "enhance"], label: "Increase strength", hint: "The definition says 'increase the strength or amount' -- making it more." },
      { keyword: "make larger", matchTerms: ["larger", "powerful", "expand", "extend", "augment", "heighten", "escalate"], label: "Make larger", hint: "The definition says 'make larger or more powerful' -- scaling up." },
    ],
    synonyms: ["increase", "magnify", "intensify", "boost", "enhance"],
    partOfSpeech: "verb",
    etymology: "Latin amplificare (to enlarge).",
  },
  // ── anachronistic ──
  {
    word: "anachronistic",
    definition: "Belonging to a period other than that being portrayed; out of date.",
    keyConcepts: [
      { keyword: "wrong period", matchTerms: ["period", "time", "era", "historical", "misplaced", "chronological", "temporal"], label: "Wrong period", hint: "The definition says 'belonging to a period other than that being portrayed' -- wrong time." },
      { keyword: "out of date", matchTerms: ["out of date", "outdated", "obsolete", "archaic", "old-fashioned", "antiquated"], label: "Out of date", hint: "The definition says 'out of date' -- no longer current." },
    ],
    synonyms: ["outdated", "obsolete", "archaic", "antiquated", "old-fashioned"],
    partOfSpeech: "adjective",
    etymology: "Greek anachronismos (wrong time reference).",
  },
  // ── antagonistic ──
  {
    word: "antagonistic",
    definition: "Showing or feeling active opposition or hostility toward someone.",
    keyConcepts: [
      { keyword: "active opposition", matchTerms: ["active", "opposition", "oppose", "against", "contrary", "resistant"], label: "Active opposition", hint: "The definition says 'showing active opposition' -- working against." },
      { keyword: "hostility", matchTerms: ["hostil", "unfriendly", "aggressive", "combative", "belligerent", "adversarial"], label: "Hostility", hint: "The definition says 'hostility toward someone' -- ill will." },
    ],
    synonyms: ["hostile", "opposing", "unfriendly", "adversarial", "combative"],
    partOfSpeech: "adjective",
    etymology: "Greek antagonistes (opponent, competitor).",
  },
  // ── arrogant ──
  {
    word: "arrogant",
    definition: "Having an exaggerated sense of one's own importance or abilities; overbearingly proud.",
    keyConcepts: [
      { keyword: "exaggerated sense of importance", matchTerms: ["exaggerat", "sense", "importance", "abilities", "superior", "self-important", "conceited"], label: "Exaggerated importance", hint: "The definition says 'exaggerated sense of one's own importance' -- thinks too highly of oneself." },
      { keyword: "overbearingly proud", matchTerms: ["overbear", "proud", "haughty", "pompous", "presumptuous", "supercilious"], label: "Overbearingly proud", hint: "The definition says 'overbearingly proud' -- excessive pride." },
    ],
    synonyms: ["conceited", "haughty", "pompous", "presumptuous", "supercilious"],
    partOfSpeech: "adjective",
    etymology: "Latin arrogare (to claim for oneself).",
  },
  // ── authoritative ──
  {
    word: "authoritative",
    definition: "Commanding and self-confident; recognized as being reliable or accurate.",
    keyConcepts: [
      { keyword: "commanding", matchTerms: ["command", "self-confident", "assertive", "decisive", "forceful", "masterful"], label: "Commanding", hint: "The definition says 'commanding and self-confident' -- speaks with authority." },
      { keyword: "reliable or accurate", matchTerms: ["reliable", "accurate", "trustworthy", "definitive", "official", "credible", "expert"], label: "Reliable or accurate", hint: "The definition says 'recognized as being reliable' -- can be trusted." },
    ],
    synonyms: ["commanding", "definitive", "reliable", "official", "expert"],
    partOfSpeech: "adjective",
    etymology: "Latin auctoritas (authority, influence).",
  },
  // ── autonomous ──
  {
    word: "autonomous",
    definition: "Having the freedom to govern itself or control its own affairs; self-governing.",
    keyConcepts: [
      { keyword: "freedom to govern", matchTerms: ["freedom", "govern", "control", "self-determin", "sovereign", "self-ruling"], label: "Freedom to govern", hint: "The definition says 'freedom to govern itself' -- ruling itself." },
      { keyword: "self-governing", matchTerms: ["self-govern", "independent", "self-direct", "self-sufficient", "free", "sovereign"], label: "Self-governing", hint: "The definition says 'self-governing' -- makes its own decisions." },
    ],
    synonyms: ["independent", "self-governing", "sovereign", "self-sufficient", "free"],
    partOfSpeech: "adjective",
    etymology: "Greek autonomos (having its own laws).",
  },
  // ── bellwether ──
  {
    word: "bellwether",
    definition: "An indicator or predictor of something; a leader or trendsetter.",
    keyConcepts: [
      { keyword: "indicator or predictor", matchTerms: ["indicator", "predictor", "sign", "signal", "harbinger", "barometer", "gauge"], label: "Indicator or predictor", hint: "The definition says 'an indicator or predictor' -- shows what's coming." },
      { keyword: "leader or trendsetter", matchTerms: ["leader", "trendsetter", "forerunner", "pioneer", "pacesetter", "guide"], label: "Leader or trendsetter", hint: "The definition says 'a leader or trendsetter' -- others follow." },
    ],
    synonyms: ["indicator", "harbinger", "leader", "trendsetter", "barometer"],
    partOfSpeech: "noun",
    etymology: "Middle English -- bell + wether (castrated ram leading a flock).",
  },
  // ── blatant ──
  {
    word: "blatant",
    definition: "Done openly and unashamedly; completely lacking in subtlety.",
    keyConcepts: [
      { keyword: "done openly", matchTerms: ["open", "unasham", "obvious", "overt", "flagrant", "brazen", "bold"], label: "Done openly", hint: "The definition says 'done openly and unashamedly' -- not hiding it." },
      { keyword: "lacking subtlety", matchTerms: ["lacking subtlety", "glaring", "conspicuous", "unmistakable", "undisguised", "shameless"], label: "Lacking subtlety", hint: "The definition says 'completely lacking in subtlety' -- impossible to miss." },
    ],
    synonyms: ["obvious", "flagrant", "glaring", "brazen", "shameless"],
    partOfSpeech: "adjective",
    etymology: "Coined by Edmund Spenser, possibly from Latin blatire (to babble).",
  },
  // ── brazen ──
  {
    word: "brazen",
    definition: "Bold and shameless; showing no embarrassment about one's behavior.",
    keyConcepts: [
      { keyword: "bold and shameless", matchTerms: ["bold", "shameless", "audacious", "impudent", "insolent", "unabashed"], label: "Bold and shameless", hint: "The definition says 'bold and shameless' -- no apologies." },
      { keyword: "no embarrassment", matchTerms: ["no embarrassment", "unembarrassed", "unashamed", "barefaced", "brash", "forward"], label: "No embarrassment", hint: "The definition says 'showing no embarrassment' -- doesn't feel bad about it." },
    ],
    synonyms: ["bold", "shameless", "audacious", "impudent", "unabashed"],
    partOfSpeech: "adjective",
    etymology: "Old English bræsen (made of brass).",
  },
  // ── calculated ──
  {
    word: "calculated",
    definition: "Done with full awareness of the likely consequences; deliberately planned.",
    keyConcepts: [
      { keyword: "full awareness", matchTerms: ["aware", "consequenc", "deliberat", "intentional", "conscious", "knowing"], label: "Full awareness", hint: "The definition says 'done with full awareness of consequences' -- knowing what will happen." },
      { keyword: "deliberately planned", matchTerms: ["deliberat", "planned", "premeditat", "purposeful", "strategic", "considered"], label: "Deliberately planned", hint: "The definition says 'deliberately planned' -- thought out in advance." },
    ],
    synonyms: ["deliberate", "intentional", "premeditated", "strategic", "planned"],
    partOfSpeech: "adjective",
    etymology: "Latin calculare (to reckon, compute).",
  },
  // ── censorious ──
  {
    word: "censorious",
    definition: "Severely critical of others; quick to find fault.",
    keyConcepts: [
      { keyword: "severely critical", matchTerms: ["severe", "critical", "harsh", "judgmental", "condemnatory", "disapproving"], label: "Severely critical", hint: "The definition says 'severely critical of others' -- harsh judgment." },
      { keyword: "quick to find fault", matchTerms: ["quick", "fault", "criticize", "nitpick", "carping", "captious", "hypercritical"], label: "Quick to find fault", hint: "The definition says 'quick to find fault' -- always looking for problems." },
    ],
    synonyms: ["critical", "judgmental", "fault-finding", "carping", "hypercritical"],
    partOfSpeech: "adjective",
    etymology: "Latin censorius (relating to a censor).",
  },
  // ── circumspect ──
  {
    word: "circumspect",
    definition: "Wary and unwilling to take risks; careful to consider all circumstances.",
    keyConcepts: [
      { keyword: "wary and unwilling", matchTerms: ["wary", "unwilling", "risk", "cautious", "careful", "guarded", "prudent"], label: "Wary and unwilling", hint: "The definition says 'wary and unwilling to take risks' -- playing it safe." },
      { keyword: "consider all circumstances", matchTerms: ["consider", "circumstanc", "thoughtful", "deliberat", "vigilant", "watchful"], label: "Consider all circumstances", hint: "The definition says 'careful to consider all circumstances' -- thinking things through." },
    ],
    synonyms: ["cautious", "careful", "prudent", "guarded", "wary"],
    partOfSpeech: "adjective",
    etymology: "Latin circumspicere (to look around).",
  },
  // ── coercive ──
  {
    word: "coercive",
    definition: "Using force or threats to persuade someone; compelling through pressure.",
    keyConcepts: [
      { keyword: "using force or threats", matchTerms: ["force", "threat", "intimidat", "pressure", "compel", "bully", "strong-arm"], label: "Using force or threats", hint: "The definition says 'using force or threats to persuade' -- not voluntary." },
      { keyword: "compelling through pressure", matchTerms: ["compel", "pressure", "coerce", "constrain", "obligate", "impose"], label: "Compelling through pressure", hint: "The definition says 'compelling through pressure' -- making someone do it." },
    ],
    synonyms: ["forceful", "compelling", "oppressive", "intimidating", "pressuring"],
    partOfSpeech: "adjective",
    etymology: "Latin coercere (to restrain, control).",
  },
  // ── collaborative ──
  {
    word: "collaborative",
    definition: "Involving two or more parties working together; produced by cooperation.",
    keyConcepts: [
      { keyword: "working together", matchTerms: ["work together", "joint", "combined", "collective", "cooperative", "team"], label: "Working together", hint: "The definition says 'two or more parties working together' -- joint effort." },
      { keyword: "produced by cooperation", matchTerms: ["cooperat", "partner", "mutual", "shared", "united", "coordinated"], label: "Produced by cooperation", hint: "The definition says 'produced by cooperation' -- working as a team." },
    ],
    synonyms: ["cooperative", "joint", "collective", "combined", "shared"],
    partOfSpeech: "adjective",
    etymology: "Latin collaborare (to labor together).",
  },
  // ── combative ──
  {
    word: "combative",
    definition: "Ready or eager to fight or argue; aggressively competitive.",
    keyConcepts: [
      { keyword: "ready to fight", matchTerms: ["ready", "fight", "argue", "aggressive", "belligerent", "pugnacious", "hostile"], label: "Ready to fight", hint: "The definition says 'ready or eager to fight' -- looking for a battle." },
      { keyword: "aggressively competitive", matchTerms: ["aggressive", "competitive", "confrontational", "contentious", "quarrelsome", "militant"], label: "Aggressively competitive", hint: "The definition says 'aggressively competitive' -- wants to win at all costs." },
    ],
    synonyms: ["aggressive", "belligerent", "pugnacious", "hostile", "confrontational"],
    partOfSpeech: "adjective",
    etymology: "Latin combattere (to fight with).",
  },
  // ── complicit ──
  {
    word: "complicit",
    definition: "Involved with others in an illegal activity or wrongdoing; being an accomplice.",
    keyConcepts: [
      { keyword: "involved in wrongdoing", matchTerms: ["involved", "illegal", "wrongdoing", "crime", "guilty", "implicated", "participat"], label: "Involved in wrongdoing", hint: "The definition says 'involved with others in an illegal activity' -- part of the crime." },
      { keyword: "being an accomplice", matchTerms: ["accomplice", "partner", "conspirator", "accessory", "collaborator", "abettor"], label: "Being an accomplice", hint: "The definition says 'being an accomplice' -- helping do wrong." },
    ],
    synonyms: ["involved", "implicated", "guilty", "colluding", "conspiring"],
    partOfSpeech: "adjective",
    etymology: "Latin complicare (to fold together).",
  },
  // ── conscientious ──
  {
    word: "conscientious",
    definition: "Wishing to do what is right; thorough and careful in one's work.",
    keyConcepts: [
      { keyword: "wishing to do right", matchTerms: ["wish", "right", "moral", "ethical", "principled", "scrupulous", "dutiful"], label: "Wishing to do right", hint: "The definition says 'wishing to do what is right' -- having a conscience." },
      { keyword: "thorough and careful", matchTerms: ["thorough", "careful", "diligent", "meticulous", "painstaking", "attentive"], label: "Thorough and careful", hint: "The definition says 'thorough and careful in one's work' -- doing a good job." },
    ],
    synonyms: ["diligent", "careful", "thorough", "meticulous", "scrupulous"],
    partOfSpeech: "adjective",
    etymology: "Latin conscientia (conscience, knowledge within oneself).",
  },
  // ── consequential ──
  {
    word: "consequential",
    definition: "Following as a result or effect; important in significance or outcome.",
    keyConcepts: [
      { keyword: "following as result", matchTerms: ["follow", "result", "effect", "resulting", "ensuing", "subsequent"], label: "Following as result", hint: "The definition says 'following as a result' -- comes from something else." },
      { keyword: "important in significance", matchTerms: ["important", "significan", "outcome", "momentous", "weighty", "substantial", "major"], label: "Important in significance", hint: "The definition says 'important in significance' -- matters a lot." },
    ],
    synonyms: ["significant", "important", "momentous", "substantial", "weighty"],
    partOfSpeech: "adjective",
    etymology: "Latin consequi (to follow closely).",
  },
  // ── conservative ──
  {
    word: "conservative",
    definition: "Favoring traditional views and values; cautious about change or innovation.",
    keyConcepts: [
      { keyword: "favoring traditional", matchTerms: ["favor", "traditional", "convention", "established", "orthodox", "classic"], label: "Favoring traditional", hint: "The definition says 'favoring traditional views and values' -- preferring the old ways." },
      { keyword: "cautious about change", matchTerms: ["cautious", "change", "innovation", "risk-averse", "moderate", "careful", "restrained"], label: "Cautious about change", hint: "The definition says 'cautious about change or innovation' -- slow to adopt new things." },
    ],
    synonyms: ["traditional", "cautious", "conventional", "moderate", "restrained"],
    partOfSpeech: "adjective",
    etymology: "Latin conservare (to preserve).",
  },
  // ── constructive ──
  {
    word: "constructive",
    definition: "Serving a useful purpose; intended to be helpful or improve something.",
    keyConcepts: [
      { keyword: "serving useful purpose", matchTerms: ["useful", "purpose", "productive", "beneficial", "positive", "valuable"], label: "Serving useful purpose", hint: "The definition says 'serving a useful purpose' -- actually helps." },
      { keyword: "intended to improve", matchTerms: ["intended", "helpful", "improve", "build", "develop", "advance", "contribute"], label: "Intended to improve", hint: "The definition says 'intended to be helpful or improve something' -- making things better." },
    ],
    synonyms: ["helpful", "productive", "positive", "beneficial", "useful"],
    partOfSpeech: "adjective",
    etymology: "Latin construere (to build together).",
  },
  // ── contentious ──
  {
    word: "contentious",
    definition: "Causing or likely to cause an argument; involving heated disagreement.",
    keyConcepts: [
      { keyword: "causing argument", matchTerms: ["caus", "argument", "controversy", "dispute", "conflict", "debate"], label: "Causing argument", hint: "The definition says 'causing or likely to cause an argument' -- sparks conflict." },
      { keyword: "heated disagreement", matchTerms: ["heated", "disagreement", "divisive", "polarizing", "combative", "quarrelsome"], label: "Heated disagreement", hint: "The definition says 'involving heated disagreement' -- people fight about it." },
    ],
    synonyms: ["controversial", "disputed", "divisive", "argumentative", "combative"],
    partOfSpeech: "adjective",
    etymology: "Latin contentiosus (quarrelsome).",
  },
  // ── conventional ──
  {
    word: "conventional",
    definition: "Based on or in accordance with what is generally done or believed; traditional.",
    keyConcepts: [
      { keyword: "generally done", matchTerms: ["general", "done", "believed", "accepted", "standard", "typical", "usual"], label: "Generally done", hint: "The definition says 'in accordance with what is generally done' -- following the norm." },
      { keyword: "traditional", matchTerms: ["traditional", "customary", "established", "orthodox", "mainstream", "normal"], label: "Traditional", hint: "The definition says 'traditional' -- the usual way." },
    ],
    synonyms: ["traditional", "standard", "typical", "orthodox", "customary"],
    partOfSpeech: "adjective",
    etymology: "Latin conventio (assembly, agreement).",
  },
  // ── corroborative ──
  {
    word: "corroborative",
    definition: "Serving to confirm or support a statement, theory, or finding.",
    keyConcepts: [
      { keyword: "serving to confirm", matchTerms: ["confirm", "support", "verify", "validate", "substantiat", "back up"], label: "Serving to confirm", hint: "The definition says 'serving to confirm or support' -- adds proof." },
      { keyword: "statement or theory", matchTerms: ["statement", "theory", "finding", "evidence", "testimony", "claim"], label: "Statement or theory", hint: "The definition says 'a statement, theory, or finding' -- something claimed." },
    ],
    synonyms: ["confirming", "supporting", "substantiating", "validating", "verifying"],
    partOfSpeech: "adjective",
    etymology: "Latin corroborare (to strengthen).",
  },
  // ── counterproductive ──
  {
    word: "counterproductive",
    definition: "Having the opposite of the desired effect; hindering the achievement of a goal.",
    keyConcepts: [
      { keyword: "opposite of desired effect", matchTerms: ["opposite", "desired", "effect", "contrary", "reverse", "backfire"], label: "Opposite of desired effect", hint: "The definition says 'having the opposite of the desired effect' -- backfires." },
      { keyword: "hindering achievement", matchTerms: ["hinder", "achievement", "goal", "obstruct", "impede", "undermine", "sabotage"], label: "Hindering achievement", hint: "The definition says 'hindering the achievement of a goal' -- getting in the way." },
    ],
    synonyms: ["harmful", "detrimental", "self-defeating", "unhelpful", "obstructive"],
    partOfSpeech: "adjective",
    etymology: "Counter- + productive.",
  },
  // ── debilitating ──
  {
    word: "debilitating",
    definition: "Causing weakness or loss of strength; severely impairing function.",
    keyConcepts: [
      { keyword: "causing weakness", matchTerms: ["caus", "weakness", "weaken", "drain", "exhaust", "sap", "enfeeble"], label: "Causing weakness", hint: "The definition says 'causing weakness or loss of strength' -- makes you weak." },
      { keyword: "impairing function", matchTerms: ["impair", "function", "crippling", "disabling", "incapacitat", "paralyzing"], label: "Impairing function", hint: "The definition says 'severely impairing function' -- can't work properly." },
    ],
    synonyms: ["weakening", "crippling", "incapacitating", "disabling", "exhausting"],
    partOfSpeech: "adjective",
    etymology: "Latin debilitare (to weaken).",
  },
  // ── decisive ──
  {
    word: "decisive",
    definition: "Settling an issue or producing a definite result; able to make decisions quickly.",
    keyConcepts: [
      { keyword: "settling an issue", matchTerms: ["settl", "issue", "definite", "result", "conclusive", "determining", "final"], label: "Settling an issue", hint: "The definition says 'settling an issue or producing a definite result' -- ends the question." },
      { keyword: "make decisions quickly", matchTerms: ["decision", "quickly", "resolute", "determined", "firm", "unhesitating"], label: "Make decisions quickly", hint: "The definition says 'able to make decisions quickly' -- doesn't hesitate." },
    ],
    synonyms: ["conclusive", "definitive", "determined", "resolute", "firm"],
    partOfSpeech: "adjective",
    etymology: "Latin decidere (to cut off, determine).",
  },
  // ── definitive ──
  {
    word: "definitive",
    definition: "Done or reached decisively and with authority; serving as a standard or reference.",
    keyConcepts: [
      { keyword: "decisively with authority", matchTerms: ["decisive", "authority", "final", "conclusive", "ultimate", "absolute"], label: "Decisively with authority", hint: "The definition says 'done decisively and with authority' -- the final word." },
      { keyword: "standard or reference", matchTerms: ["standard", "reference", "authoritative", "classic", "benchmark", "quintessential"], label: "Standard or reference", hint: "The definition says 'serving as a standard or reference' -- the one to look to." },
    ],
    synonyms: ["conclusive", "authoritative", "final", "ultimate", "decisive"],
    partOfSpeech: "adjective",
    etymology: "Latin definitivus (defining, limiting).",
  },
  // ── dehumanizing ──
  {
    word: "dehumanizing",
    definition: "Depriving someone of human qualities or dignity; degrading.",
    keyConcepts: [
      { keyword: "depriving of human qualities", matchTerms: ["depriv", "human", "qualities", "dignity", "humanity", "personhood"], label: "Depriving of human qualities", hint: "The definition says 'depriving someone of human qualities' -- treating them as less than human." },
      { keyword: "degrading", matchTerms: ["degrad", "demean", "humiliat", "belittl", "debase", "objectify"], label: "Degrading", hint: "The definition says 'degrading' -- lowering their worth." },
    ],
    synonyms: ["degrading", "demeaning", "humiliating", "debasing", "objectifying"],
    partOfSpeech: "adjective",
    etymology: "De- + humanize.",
  },
  // ── demoralizing ──
  {
    word: "demoralizing",
    definition: "Causing someone to lose confidence or hope; disheartening.",
    keyConcepts: [
      { keyword: "lose confidence", matchTerms: ["lose", "confidence", "hope", "spirit", "morale", "discourag"], label: "Lose confidence", hint: "The definition says 'causing someone to lose confidence' -- breaks their spirit." },
      { keyword: "disheartening", matchTerms: ["dishearten", "deflat", "dispirit", "depress", "crush", "undermin"], label: "Disheartening", hint: "The definition says 'disheartening' -- takes away hope." },
    ],
    synonyms: ["discouraging", "disheartening", "dispiriting", "deflating", "crushing"],
    partOfSpeech: "adjective",
    etymology: "French démoraliser (to corrupt morals).",
  },
  // ── destructive ──
  {
    word: "destructive",
    definition: "Causing great damage or harm; tending to destroy or undermine.",
    keyConcepts: [
      { keyword: "causing damage", matchTerms: ["caus", "damage", "harm", "devastat", "ruin", "wreck", "ravage"], label: "Causing damage", hint: "The definition says 'causing great damage or harm' -- breaks things." },
      { keyword: "tending to destroy", matchTerms: ["destroy", "undermine", "demolish", "annihilat", "dismantle", "wreck"], label: "Tending to destroy", hint: "The definition says 'tending to destroy or undermine' -- tears down." },
    ],
    synonyms: ["damaging", "harmful", "devastating", "ruinous", "detrimental"],
    partOfSpeech: "adjective",
    etymology: "Latin destruere (to pull down).",
  },
  // ── detached ──
  {
    word: "detached",
    definition: "Separate or disconnected; not emotionally involved or objective.",
    keyConcepts: [
      { keyword: "separate or disconnected", matchTerms: ["separate", "disconnect", "apart", "isolated", "removed", "independent"], label: "Separate or disconnected", hint: "The definition says 'separate or disconnected' -- not attached." },
      { keyword: "not emotionally involved", matchTerms: ["not emotion", "objective", "impartial", "aloof", "dispassionate", "indifferent"], label: "Not emotionally involved", hint: "The definition says 'not emotionally involved' -- keeps distance." },
    ],
    synonyms: ["disconnected", "aloof", "objective", "impartial", "dispassionate"],
    partOfSpeech: "adjective",
    etymology: "French détacher (to unfasten).",
  },
  // ── discernible ──
  {
    word: "discernible",
    definition: "Able to be perceived or recognized; distinguishable.",
    keyConcepts: [
      { keyword: "able to be perceived", matchTerms: ["able", "perceiv", "recogniz", "detect", "notice", "see", "observe"], label: "Able to be perceived", hint: "The definition says 'able to be perceived or recognized' -- can be detected." },
      { keyword: "distinguishable", matchTerms: ["distinguish", "identifiable", "visible", "apparent", "noticeable", "evident"], label: "Distinguishable", hint: "The definition says 'distinguishable' -- can tell it apart." },
    ],
    synonyms: ["perceptible", "noticeable", "detectable", "visible", "apparent"],
    partOfSpeech: "adjective",
    etymology: "Latin discernere (to separate, distinguish).",
  },
  // ── discretionary ──
  {
    word: "discretionary",
    definition: "Available for use at one's own judgment; not required or fixed.",
    keyConcepts: [
      { keyword: "at one's own judgment", matchTerms: ["own", "judgment", "choice", "decision", "option", "preference"], label: "At one's own judgment", hint: "The definition says 'available for use at one's own judgment' -- you decide." },
      { keyword: "not required", matchTerms: ["not required", "fixed", "optional", "elective", "voluntary", "flexible"], label: "Not required", hint: "The definition says 'not required or fixed' -- up to you." },
    ],
    synonyms: ["optional", "elective", "voluntary", "flexible", "arbitrary"],
    partOfSpeech: "adjective",
    etymology: "Medieval Latin discretionarius (of discretion).",
  },
  // ── dismissive ──
  {
    word: "dismissive",
    definition: "Showing that something is unworthy of consideration; rejecting or disregarding.",
    keyConcepts: [
      { keyword: "unworthy of consideration", matchTerms: ["unworthy", "consideration", "trivial", "unimportant", "insignificant", "beneath"], label: "Unworthy of consideration", hint: "The definition says 'showing that something is unworthy of consideration' -- not worth thinking about." },
      { keyword: "rejecting or disregarding", matchTerms: ["reject", "disregard", "ignore", "brush off", "scorn", "disdain", "contempt"], label: "Rejecting or disregarding", hint: "The definition says 'rejecting or disregarding' -- pushing aside." },
    ],
    synonyms: ["contemptuous", "disdainful", "scornful", "disparaging", "condescending"],
    partOfSpeech: "adjective",
    etymology: "Latin dimittere (to send away).",
  },
  // ── disproportionate ──
  {
    word: "disproportionate",
    definition: "Too large or too small in relation to something else; out of proportion.",
    keyConcepts: [
      { keyword: "too large or too small", matchTerms: ["too large", "too small", "excessive", "inadequate", "unbalanced", "unequal"], label: "Too large or too small", hint: "The definition says 'too large or too small' -- wrong size." },
      { keyword: "out of proportion", matchTerms: ["out of proportion", "uneven", "asymmetric", "lopsided", "skewed", "incommensurate"], label: "Out of proportion", hint: "The definition says 'out of proportion' -- doesn't match up." },
    ],
    synonyms: ["excessive", "unequal", "unbalanced", "incommensurate", "lopsided"],
    partOfSpeech: "adjective",
    etymology: "Dis- + proportionate.",
  },
  // ── disruptive ──
  {
    word: "disruptive",
    definition: "Causing or tending to cause disruption; innovative in a way that upsets the status quo.",
    keyConcepts: [
      { keyword: "causing disruption", matchTerms: ["caus", "disruption", "interrupt", "disturb", "unsettle", "disorder"], label: "Causing disruption", hint: "The definition says 'causing or tending to cause disruption' -- breaks the flow." },
      { keyword: "upsets status quo", matchTerms: ["innovative", "upsets", "status quo", "revolutionary", "transformative", "radical"], label: "Upsets status quo", hint: "The definition says 'innovative in a way that upsets the status quo' -- changes everything." },
    ],
    synonyms: ["disturbing", "unsettling", "troublesome", "revolutionary", "transformative"],
    partOfSpeech: "adjective",
    etymology: "Latin disrumpere (to break apart).",
  },
  // ── divisive ──
  {
    word: "divisive",
    definition: "Tending to cause disagreement or hostility between people; creating division.",
    keyConcepts: [
      { keyword: "cause disagreement", matchTerms: ["caus", "disagreement", "hostility", "conflict", "discord", "strife"], label: "Cause disagreement", hint: "The definition says 'tending to cause disagreement or hostility' -- makes people fight." },
      { keyword: "creating division", matchTerms: ["creating", "division", "polariz", "split", "alienat", "estrang"], label: "Creating division", hint: "The definition says 'creating division' -- splits people apart." },
    ],
    synonyms: ["polarizing", "contentious", "controversial", "alienating", "splitting"],
    partOfSpeech: "adjective",
    etymology: "Latin dividere (to divide).",
  },
  // ── elusive ──
  {
    word: "elusive",
    definition: "Difficult to find, catch, or achieve; skillfully evading capture.",
    keyConcepts: [
      { keyword: "difficult to find", matchTerms: ["difficult", "find", "catch", "achieve", "hard to grasp", "slippery"], label: "Difficult to find", hint: "The definition says 'difficult to find, catch, or achieve' -- hard to get." },
      { keyword: "skillfully evading", matchTerms: ["evad", "captur", "escap", "evasive", "fleeting", "intangible"], label: "Skillfully evading", hint: "The definition says 'skillfully evading capture' -- slips away." },
    ],
    synonyms: ["evasive", "slippery", "fleeting", "intangible", "hard to catch"],
    partOfSpeech: "adjective",
    etymology: "Latin eludere (to escape from).",
  },
  // ── embittered ──
  {
    word: "embittered",
    definition: "Made bitter or resentful by unfair treatment; feeling angry and disappointed.",
    keyConcepts: [
      { keyword: "made bitter", matchTerms: ["bitter", "resentful", "unfair", "treatment", "sour", "cynical"], label: "Made bitter", hint: "The definition says 'made bitter or resentful by unfair treatment' -- turned sour." },
      { keyword: "angry and disappointed", matchTerms: ["angry", "disappointed", "disillusion", "hurt", "aggrieved", "disenfranchised"], label: "Angry and disappointed", hint: "The definition says 'feeling angry and disappointed' -- let down." },
    ],
    synonyms: ["resentful", "bitter", "cynical", "disillusioned", "aggrieved"],
    partOfSpeech: "adjective",
    etymology: "En- + bitter.",
  },
  // ── empirical ──
  {
    word: "empirical",
    definition: "Based on observation or experience rather than theory; verifiable by observation.",
    keyConcepts: [
      { keyword: "based on observation", matchTerms: ["based", "observation", "experience", "practical", "hands-on", "experimental"], label: "Based on observation", hint: "The definition says 'based on observation or experience' -- from real evidence." },
      { keyword: "rather than theory", matchTerms: ["rather than theory", "verifiable", "factual", "measurable", "demonstrable", "concrete"], label: "Rather than theory", hint: "The definition says 'rather than theory' -- not just ideas." },
    ],
    synonyms: ["observational", "experiential", "practical", "factual", "experimental"],
    partOfSpeech: "adjective",
    etymology: "Greek empeirikos (experienced).",
  },
  // ── enduring ──
  {
    word: "enduring",
    definition: "Lasting over a long period of time; able to withstand hardship.",
    keyConcepts: [
      { keyword: "lasting long", matchTerms: ["lasting", "long", "period", "time", "permanent", "persistent", "durable"], label: "Lasting long", hint: "The definition says 'lasting over a long period of time' -- doesn't fade." },
      { keyword: "withstand hardship", matchTerms: ["withstand", "hardship", "survive", "resilient", "steadfast", "stalwart"], label: "Withstand hardship", hint: "The definition says 'able to withstand hardship' -- tough and lasting." },
    ],
    synonyms: ["lasting", "durable", "permanent", "persistent", "resilient"],
    partOfSpeech: "adjective",
    etymology: "Latin indurare (to make hard).",
  },
  // ── enlightened ──
  {
    word: "enlightened",
    definition: "Having or showing a rational and well-informed outlook; spiritually aware.",
    keyConcepts: [
      { keyword: "rational and well-informed", matchTerms: ["rational", "well-informed", "knowledgeable", "educated", "wise", "progressive"], label: "Rational and well-informed", hint: "The definition says 'having a rational and well-informed outlook' -- knows better." },
      { keyword: "spiritually aware", matchTerms: ["spiritual", "aware", "awakened", "illuminated", "insightful", "conscious"], label: "Spiritually aware", hint: "The definition says 'spiritually aware' -- higher understanding." },
    ],
    synonyms: ["informed", "educated", "wise", "progressive", "aware"],
    partOfSpeech: "adjective",
    etymology: "En- + lighten.",
  },
  // ── entrenched ──
  {
    word: "entrenched",
    definition: "Firmly established and difficult to change; deeply rooted.",
    keyConcepts: [
      { keyword: "firmly established", matchTerms: ["firm", "established", "fixed", "set", "ingrained", "embedded"], label: "Firmly established", hint: "The definition says 'firmly established' -- solidly in place." },
      { keyword: "difficult to change", matchTerms: ["difficult", "change", "immovable", "stubborn", "persistent", "rooted", "deep"], label: "Difficult to change", hint: "The definition says 'difficult to change' -- won't budge." },
    ],
    synonyms: ["established", "ingrained", "deep-rooted", "embedded", "fixed"],
    partOfSpeech: "adjective",
    etymology: "En- + trench.",
  },
  // ── estranged ──
  {
    word: "estranged",
    definition: "No longer close or affectionate to someone; alienated.",
    keyConcepts: [
      { keyword: "no longer close", matchTerms: ["no longer", "close", "affectionate", "distant", "separated", "apart"], label: "No longer close", hint: "The definition says 'no longer close or affectionate' -- relationship ended." },
      { keyword: "alienated", matchTerms: ["alienat", "isolated", "detached", "disaffected", "withdrawn", "removed"], label: "Alienated", hint: "The definition says 'alienated' -- pushed away." },
    ],
    synonyms: ["alienated", "separated", "distant", "divided", "isolated"],
    partOfSpeech: "adjective",
    etymology: "Latin extraneare (to treat as a stranger).",
  },
  // ── exclusionary ──
  {
    word: "exclusionary",
    definition: "Tending to exclude people from a group or activity; restrictive.",
    keyConcepts: [
      { keyword: "tending to exclude", matchTerms: ["exclude", "keep out", "bar", "prohibit", "reject", "omit"], label: "Tending to exclude", hint: "The definition says 'tending to exclude people' -- keeping them out." },
      { keyword: "restrictive", matchTerms: ["restrictive", "selective", "discriminatory", "limiting", "narrow", "closed"], label: "Restrictive", hint: "The definition says 'restrictive' -- limits who can participate." },
    ],
    synonyms: ["restrictive", "discriminatory", "selective", "limiting", "closed"],
    partOfSpeech: "adjective",
    etymology: "Latin excludere (to shut out).",
  },
  // ── exploitative ──
  {
    word: "exploitative",
    definition: "Taking unfair advantage of someone for one's own benefit; using selfishly.",
    keyConcepts: [
      { keyword: "unfair advantage", matchTerms: ["unfair", "advantage", "take advantage", "abuse", "misuse", "manipulat"], label: "Unfair advantage", hint: "The definition says 'taking unfair advantage of someone' -- using them." },
      { keyword: "for own benefit", matchTerms: ["own benefit", "selfish", "self-serving", "predatory", "opportunistic", "parasitic"], label: "For own benefit", hint: "The definition says 'for one's own benefit' -- profiting at their expense." },
    ],
    synonyms: ["abusive", "manipulative", "predatory", "opportunistic", "selfish"],
    partOfSpeech: "adjective",
    etymology: "Latin exploitare (to accomplish).",
  },
  // ── formative ──
  {
    word: "formative",
    definition: "Having a lasting influence on character or development; shaping.",
    keyConcepts: [
      { keyword: "lasting influence", matchTerms: ["lasting", "influence", "impact", "effect", "impression", "significant"], label: "Lasting influence", hint: "The definition says 'having a lasting influence' -- leaves a mark." },
      { keyword: "on character or development", matchTerms: ["character", "development", "growth", "shaping", "molding", "defining"], label: "On character or development", hint: "The definition says 'on character or development' -- shapes who you become." },
    ],
    synonyms: ["influential", "shaping", "developmental", "defining", "foundational"],
    partOfSpeech: "adjective",
    etymology: "Latin formare (to form).",
  },
  // ── fortuitous ──
  {
    word: "fortuitous",
    definition: "Happening by chance rather than intention; lucky or fortunate.",
    keyConcepts: [
      { keyword: "happening by chance", matchTerms: ["happen", "chance", "accident", "coincidenc", "unplanned", "random"], label: "Happening by chance", hint: "The definition says 'happening by chance rather than intention' -- not planned." },
      { keyword: "lucky or fortunate", matchTerms: ["lucky", "fortunate", "serendipitous", "providential", "auspicious", "favorable"], label: "Lucky or fortunate", hint: "The definition says 'lucky or fortunate' -- good luck." },
    ],
    synonyms: ["accidental", "lucky", "serendipitous", "chance", "providential"],
    partOfSpeech: "adjective",
    etymology: "Latin fortuitus (happening by chance).",
  },
  // ── grounded ──
  {
    word: "grounded",
    definition: "Well-balanced and sensible; based on a solid foundation.",
    keyConcepts: [
      { keyword: "well-balanced", matchTerms: ["well-balanced", "sensible", "stable", "level-headed", "practical", "down-to-earth"], label: "Well-balanced", hint: "The definition says 'well-balanced and sensible' -- has their feet on the ground." },
      { keyword: "solid foundation", matchTerms: ["solid", "foundation", "based", "rooted", "founded", "established"], label: "Solid foundation", hint: "The definition says 'based on a solid foundation' -- built on something real." },
    ],
    synonyms: ["sensible", "stable", "level-headed", "practical", "down-to-earth"],
    partOfSpeech: "adjective",
    etymology: "From ground.",
  },
  // ── habitual ──
  {
    word: "habitual",
    definition: "Done constantly or as a habit; regular or usual.",
    keyConcepts: [
      { keyword: "done constantly", matchTerms: ["constant", "habit", "repeat", "routine", "regular", "frequent"], label: "Done constantly", hint: "The definition says 'done constantly or as a habit' -- keeps doing it." },
      { keyword: "regular or usual", matchTerms: ["regular", "usual", "customary", "typical", "normal", "accustomed"], label: "Regular or usual", hint: "The definition says 'regular or usual' -- happens all the time." },
    ],
    synonyms: ["regular", "customary", "routine", "frequent", "chronic"],
    partOfSpeech: "adjective",
    etymology: "Latin habitus (condition, habit).",
  },
  // ── hierarchical ──
  {
    word: "hierarchical",
    definition: "Arranged in a graded order or ranking; having levels of authority.",
    keyConcepts: [
      { keyword: "graded order", matchTerms: ["graded", "order", "rank", "tier", "level", "graduated", "layered"], label: "Graded order", hint: "The definition says 'arranged in a graded order' -- organized by rank." },
      { keyword: "levels of authority", matchTerms: ["level", "authority", "power", "structured", "stratified", "organized"], label: "Levels of authority", hint: "The definition says 'having levels of authority' -- some above others." },
    ],
    synonyms: ["ranked", "tiered", "stratified", "graded", "structured"],
    partOfSpeech: "adjective",
    etymology: "Greek hierarchia (rule of a high priest).",
  },
  // ── hypocritical ──
  {
    word: "hypocritical",
    definition: "Behaving in a way that contradicts one's stated beliefs or feelings; insincere.",
    keyConcepts: [
      { keyword: "contradicts stated beliefs", matchTerms: ["contradict", "stated", "beliefs", "inconsistent", "double", "two-faced"], label: "Contradicts stated beliefs", hint: "The definition says 'behaving in a way that contradicts one's stated beliefs' -- says one thing, does another." },
      { keyword: "insincere", matchTerms: ["insincere", "false", "phony", "fake", "deceitful", "duplicitous"], label: "Insincere", hint: "The definition says 'insincere' -- not genuine." },
    ],
    synonyms: ["insincere", "two-faced", "phony", "deceitful", "duplicitous"],
    partOfSpeech: "adjective",
    etymology: "Greek hypokrites (actor, pretender).",
  },
  // ── idealistic ──
  {
    word: "idealistic",
    definition: "Characterized by high ideals that may be unrealistic; visionary.",
    keyConcepts: [
      { keyword: "high ideals", matchTerms: ["high", "ideals", "principled", "noble", "lofty", "ambitious"], label: "High ideals", hint: "The definition says 'characterized by high ideals' -- aiming for perfection." },
      { keyword: "may be unrealistic", matchTerms: ["unrealistic", "impractical", "utopian", "naive", "romantic", "quixotic"], label: "May be unrealistic", hint: "The definition says 'that may be unrealistic' -- perhaps not achievable." },
    ],
    synonyms: ["visionary", "utopian", "romantic", "optimistic", "quixotic"],
    partOfSpeech: "adjective",
    etymology: "Greek idea (form, pattern).",
  },
  // ── illusory ──
  {
    word: "illusory",
    definition: "Based on illusion; not real or true despite appearances.",
    keyConcepts: [
      { keyword: "based on illusion", matchTerms: ["illusion", "deceptive", "misleading", "false", "imaginary", "phantom"], label: "Based on illusion", hint: "The definition says 'based on illusion' -- tricks you." },
      { keyword: "not real despite appearances", matchTerms: ["not real", "true", "appearances", "seeming", "apparent", "fake", "fictitious"], label: "Not real despite appearances", hint: "The definition says 'not real or true despite appearances' -- looks real but isn't." },
    ],
    synonyms: ["false", "deceptive", "imaginary", "unreal", "misleading"],
    partOfSpeech: "adjective",
    etymology: "Latin illusio (a mocking).",
  },
  // ── imperative ──
  {
    word: "imperative",
    definition: "Of vital importance; absolutely necessary or urgent.",
    keyConcepts: [
      { keyword: "vital importance", matchTerms: ["vital", "importance", "essential", "critical", "crucial", "paramount"], label: "Vital importance", hint: "The definition says 'of vital importance' -- really matters." },
      { keyword: "absolutely necessary", matchTerms: ["absolut", "necessary", "urgent", "pressing", "compulsory", "mandatory"], label: "Absolutely necessary", hint: "The definition says 'absolutely necessary or urgent' -- must be done." },
    ],
    synonyms: ["essential", "crucial", "vital", "urgent", "necessary"],
    partOfSpeech: "adjective",
    etymology: "Latin imperare (to command).",
  },
  // ── implausible ──
  {
    word: "implausible",
    definition: "Not seeming reasonable or probable; difficult to believe.",
    keyConcepts: [
      { keyword: "not reasonable", matchTerms: ["not reasonable", "probable", "unlikely", "doubtful", "questionable", "dubious"], label: "Not reasonable", hint: "The definition says 'not seeming reasonable or probable' -- doesn't add up." },
      { keyword: "difficult to believe", matchTerms: ["difficult", "believe", "incredible", "far-fetched", "unconvincing", "unbelievable"], label: "Difficult to believe", hint: "The definition says 'difficult to believe' -- hard to accept." },
    ],
    synonyms: ["unlikely", "unbelievable", "unconvincing", "far-fetched", "dubious"],
    partOfSpeech: "adjective",
    etymology: "Latin in- + plausibilis (worthy of applause).",
  },
  // ── inadvertent ──
  {
    word: "inadvertent",
    definition: "Not resulting from or achieved through deliberate planning; unintentional.",
    keyConcepts: [
      { keyword: "not deliberate", matchTerms: ["not deliberat", "planning", "accidental", "unplanned", "unwitting", "chance"], label: "Not deliberate", hint: "The definition says 'not resulting from deliberate planning' -- wasn't meant to happen." },
      { keyword: "unintentional", matchTerms: ["unintentional", "mistake", "oversight", "careless", "thoughtless", "involuntary"], label: "Unintentional", hint: "The definition says 'unintentional' -- by accident." },
    ],
    synonyms: ["unintentional", "accidental", "unplanned", "unwitting", "careless"],
    partOfSpeech: "adjective",
    etymology: "Latin inadvertens (not paying attention).",
  },
  // ── incongruous ──
  {
    word: "incongruous",
    definition: "Not in harmony or keeping with the surroundings; out of place.",
    keyConcepts: [
      { keyword: "not in harmony", matchTerms: ["not", "harmony", "keeping", "discord", "clash", "incompatible", "inconsistent"], label: "Not in harmony", hint: "The definition says 'not in harmony or keeping' -- doesn't fit." },
      { keyword: "out of place", matchTerms: ["out of place", "inappropriate", "unsuitable", "mismatched", "odd", "jarring"], label: "Out of place", hint: "The definition says 'out of place' -- doesn't belong there." },
    ],
    synonyms: ["inappropriate", "incompatible", "inconsistent", "unsuitable", "mismatched"],
    partOfSpeech: "adjective",
    etymology: "Latin incongruus (not agreeing).",
  },
  // ── indiscriminate ──
  {
    word: "indiscriminate",
    definition: "Done at random or without careful judgment; not making distinctions.",
    keyConcepts: [
      { keyword: "at random", matchTerms: ["random", "without", "judgment", "haphazard", "arbitrary", "aimless"], label: "At random", hint: "The definition says 'done at random' -- no pattern." },
      { keyword: "not making distinctions", matchTerms: ["not making", "distinction", "undiscriminating", "wholesale", "blanket", "sweeping"], label: "Not making distinctions", hint: "The definition says 'not making distinctions' -- treats everything the same." },
    ],
    synonyms: ["random", "arbitrary", "haphazard", "wholesale", "undiscriminating"],
    partOfSpeech: "adjective",
    etymology: "Latin in- + discriminare (to distinguish).",
  },
  // ── inequitable ──
  {
    word: "inequitable",
    definition: "Unfair or unjust; not treating people equally.",
    keyConcepts: [
      { keyword: "unfair or unjust", matchTerms: ["unfair", "unjust", "biased", "partial", "one-sided", "discriminatory"], label: "Unfair or unjust", hint: "The definition says 'unfair or unjust' -- not right." },
      { keyword: "not treating equally", matchTerms: ["not", "treating", "equal", "unequal", "imbalanced", "disproportionate"], label: "Not treating equally", hint: "The definition says 'not treating people equally' -- some get more than others." },
    ],
    synonyms: ["unfair", "unjust", "unequal", "biased", "partial"],
    partOfSpeech: "adjective",
    etymology: "Latin in- + aequitas (fairness).",
  },
  // ── inflexible ──
  {
    word: "inflexible",
    definition: "Unwilling to change or compromise; rigid and unbending.",
    keyConcepts: [
      { keyword: "unwilling to change", matchTerms: ["unwilling", "change", "compromise", "stubborn", "obstinate", "unyielding"], label: "Unwilling to change", hint: "The definition says 'unwilling to change or compromise' -- won't budge." },
      { keyword: "rigid and unbending", matchTerms: ["rigid", "unbending", "stiff", "fixed", "immutable", "immovable"], label: "Rigid and unbending", hint: "The definition says 'rigid and unbending' -- can't be bent." },
    ],
    synonyms: ["rigid", "stubborn", "unyielding", "unbending", "obstinate"],
    partOfSpeech: "adjective",
    etymology: "Latin inflexibilis (that cannot be bent).",
  },
  // ── influential ──
  {
    word: "influential",
    definition: "Having great influence on someone or something; powerful in shaping opinions.",
    keyConcepts: [
      { keyword: "great influence", matchTerms: ["great", "influence", "impact", "effect", "sway", "weight", "power"], label: "Great influence", hint: "The definition says 'having great influence' -- makes a difference." },
      { keyword: "shaping opinions", matchTerms: ["shaping", "opinions", "persuasive", "authoritative", "leading", "prominent"], label: "Shaping opinions", hint: "The definition says 'powerful in shaping opinions' -- changes minds." },
    ],
    synonyms: ["powerful", "authoritative", "prominent", "leading", "significant"],
    partOfSpeech: "adjective",
    etymology: "Latin influere (to flow in).",
  },
  // ── inhibited ──
  {
    word: "inhibited",
    definition: "Unable to act in a relaxed and natural way; restrained or held back.",
    keyConcepts: [
      { keyword: "unable to act naturally", matchTerms: ["unable", "act", "relaxed", "natural", "self-conscious", "uncomfortable"], label: "Unable to act naturally", hint: "The definition says 'unable to act in a relaxed and natural way' -- feeling constrained." },
      { keyword: "restrained", matchTerms: ["restrain", "held back", "repressed", "reserved", "shy", "withdrawn"], label: "Restrained", hint: "The definition says 'restrained or held back' -- holding oneself back." },
    ],
    synonyms: ["reserved", "restrained", "self-conscious", "repressed", "shy"],
    partOfSpeech: "adjective",
    etymology: "Latin inhibere (to hold in, restrain).",
  },
  // ── insular ──
  {
    word: "insular",
    definition: "Ignorant of or uninterested in ideas beyond one's own experience; narrow-minded.",
    keyConcepts: [
      { keyword: "ignorant of outside ideas", matchTerms: ["ignorant", "uninterested", "ideas", "outside", "provincial", "parochial"], label: "Ignorant of outside ideas", hint: "The definition says 'ignorant of or uninterested in ideas beyond one's own experience' -- closed off." },
      { keyword: "narrow-minded", matchTerms: ["narrow-minded", "limited", "isolated", "inward-looking", "blinkered", "restricted"], label: "Narrow-minded", hint: "The definition says 'narrow-minded' -- can't see beyond themselves." },
    ],
    synonyms: ["narrow-minded", "provincial", "parochial", "isolated", "limited"],
    partOfSpeech: "adjective",
    etymology: "Latin insula (island).",
  },
  // ── intangible ──
  {
    word: "intangible",
    definition: "Unable to be touched or grasped; not having physical presence.",
    keyConcepts: [
      { keyword: "unable to be touched", matchTerms: ["unable", "touch", "grasp", "incorporeal", "immaterial", "abstract"], label: "Unable to be touched", hint: "The definition says 'unable to be touched or grasped' -- can't feel it." },
      { keyword: "not physical", matchTerms: ["not physical", "presence", "invisible", "ethereal", "impalpable", "insubstantial"], label: "Not physical", hint: "The definition says 'not having physical presence' -- exists but isn't solid." },
    ],
    synonyms: ["abstract", "immaterial", "incorporeal", "impalpable", "ethereal"],
    partOfSpeech: "adjective",
    etymology: "Latin in- + tangere (to touch).",
  },
  // ── intermittent ──
  {
    word: "intermittent",
    definition: "Occurring at irregular intervals; not continuous or steady.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "interval", "sporadic", "occasional", "periodic", "scattered"], label: "Irregular intervals", hint: "The definition says 'occurring at irregular intervals' -- comes and goes." },
      { keyword: "not continuous", matchTerms: ["not continuous", "steady", "broken", "interrupted", "fitful", "on and off"], label: "Not continuous", hint: "The definition says 'not continuous or steady' -- stops and starts." },
    ],
    synonyms: ["sporadic", "occasional", "irregular", "periodic", "fitful"],
    partOfSpeech: "adjective",
    etymology: "Latin intermittere (to discontinue).",
  },
  // ── intrusive ──
  {
    word: "intrusive",
    definition: "Causing disruption or annoyance through being unwelcome; invasive.",
    keyConcepts: [
      { keyword: "causing disruption", matchTerms: ["caus", "disruption", "annoyance", "disturbing", "bothersome", "interfering"], label: "Causing disruption", hint: "The definition says 'causing disruption or annoyance' -- gets in the way." },
      { keyword: "unwelcome", matchTerms: ["unwelcome", "invasive", "intruding", "pushy", "obtrusive", "prying"], label: "Unwelcome", hint: "The definition says 'through being unwelcome' -- not wanted there." },
    ],
    synonyms: ["invasive", "obtrusive", "interfering", "meddlesome", "pushy"],
    partOfSpeech: "adjective",
    etymology: "Latin intrudere (to thrust in).",
  },
  // ── liberating ──
  {
    word: "liberating",
    definition: "Providing a feeling of freedom from restrictions; setting free.",
    keyConcepts: [
      { keyword: "feeling of freedom", matchTerms: ["feeling", "freedom", "free", "release", "emancipat", "relief"], label: "Feeling of freedom", hint: "The definition says 'providing a feeling of freedom' -- feels free." },
      { keyword: "from restrictions", matchTerms: ["restriction", "constraint", "limit", "bound", "unfetter", "unshackle"], label: "From restrictions", hint: "The definition says 'freedom from restrictions' -- breaking loose." },
    ],
    synonyms: ["freeing", "emancipating", "releasing", "unbinding", "empowering"],
    partOfSpeech: "adjective",
    etymology: "Latin liberare (to set free).",
  },
  // ── marginalized ──
  {
    word: "marginalized",
    definition: "Treated as insignificant or peripheral; pushed to the edge of society.",
    keyConcepts: [
      { keyword: "treated as insignificant", matchTerms: ["insignificant", "peripheral", "unimportant", "neglect", "overlook", "dismiss"], label: "Treated as insignificant", hint: "The definition says 'treated as insignificant or peripheral' -- not considered important." },
      { keyword: "edge of society", matchTerms: ["edge", "society", "exclude", "disenfranchise", "sidelined", "ostracize"], label: "Edge of society", hint: "The definition says 'pushed to the edge of society' -- left out." },
    ],
    synonyms: ["excluded", "sidelined", "disenfranchised", "neglected", "overlooked"],
    partOfSpeech: "adjective",
    etymology: "Latin margo (edge, border).",
  },
  // ── misguided ──
  {
    word: "misguided",
    definition: "Having or showing faulty judgment or reasoning; wrongly directed.",
    keyConcepts: [
      { keyword: "faulty judgment", matchTerms: ["faulty", "judgment", "reasoning", "wrong", "mistaken", "erroneous", "flawed"], label: "Faulty judgment", hint: "The definition says 'having faulty judgment or reasoning' -- thinking wrong." },
      { keyword: "wrongly directed", matchTerms: ["wrongly", "directed", "ill-advised", "unwise", "foolish", "misled"], label: "Wrongly directed", hint: "The definition says 'wrongly directed' -- going the wrong way." },
    ],
    synonyms: ["mistaken", "erroneous", "ill-advised", "foolish", "unwise"],
    partOfSpeech: "adjective",
    etymology: "Mis- + guided.",
  },
  // ── misleading ──
  {
    word: "misleading",
    definition: "Giving the wrong idea or impression; deceptive.",
    keyConcepts: [
      { keyword: "wrong idea", matchTerms: ["wrong", "idea", "impression", "false", "inaccurate", "distort"], label: "Wrong idea", hint: "The definition says 'giving the wrong idea or impression' -- not the truth." },
      { keyword: "deceptive", matchTerms: ["deceptive", "deceitful", "dishonest", "confusing", "delusive", "illusory"], label: "Deceptive", hint: "The definition says 'deceptive' -- tricks you." },
    ],
    synonyms: ["deceptive", "confusing", "deceiving", "false", "delusive"],
    partOfSpeech: "adjective",
    etymology: "Mis- + leading.",
  },
  // ── myriad ──
  {
    word: "myriad",
    definition: "A countless or extremely great number; innumerable.",
    keyConcepts: [
      { keyword: "countless number", matchTerms: ["countless", "number", "innumerable", "endless", "infinite", "limitless"], label: "Countless number", hint: "The definition says 'a countless or extremely great number' -- too many to count." },
      { keyword: "extremely great", matchTerms: ["extreme", "great", "vast", "multitude", "numerous", "many"], label: "Extremely great", hint: "The definition says 'extremely great number' -- a huge amount." },
    ],
    synonyms: ["countless", "innumerable", "numerous", "multitudinous", "endless"],
    partOfSpeech: "adjective",
    etymology: "Greek myrias (ten thousand).",
  },
  // ── nuanced ──
  {
    word: "nuanced",
    definition: "Characterized by subtle distinctions or variations; showing delicate complexity.",
    keyConcepts: [
      { keyword: "subtle distinctions", matchTerms: ["subtle", "distinction", "variation", "fine", "delicate", "gradation"], label: "Subtle distinctions", hint: "The definition says 'characterized by subtle distinctions' -- small but important differences." },
      { keyword: "delicate complexity", matchTerms: ["delicate", "complex", "sophisticated", "refined", "intricate", "layered"], label: "Delicate complexity", hint: "The definition says 'showing delicate complexity' -- many layers of meaning." },
    ],
    synonyms: ["subtle", "refined", "sophisticated", "complex", "intricate"],
    partOfSpeech: "adjective",
    etymology: "French nuance (shade, subtlety).",
  },
  // ── objectionable ──
  {
    word: "objectionable",
    definition: "Arousing distaste or opposition; offensive or unacceptable.",
    keyConcepts: [
      { keyword: "arousing distaste", matchTerms: ["arous", "distaste", "opposition", "dislik", "disapproval", "repugnant"], label: "Arousing distaste", hint: "The definition says 'arousing distaste or opposition' -- people don't like it." },
      { keyword: "offensive", matchTerms: ["offensive", "unacceptable", "disagreeable", "repulsive", "deplorable", "intolerable"], label: "Offensive", hint: "The definition says 'offensive or unacceptable' -- not okay." },
    ],
    synonyms: ["offensive", "unacceptable", "disagreeable", "repugnant", "deplorable"],
    partOfSpeech: "adjective",
    etymology: "Latin obiectare (to throw against).",
  },
  // ── obstructive ──
  {
    word: "obstructive",
    definition: "Causing a blockage or obstacle; deliberately creating difficulties.",
    keyConcepts: [
      { keyword: "causing blockage", matchTerms: ["caus", "blockage", "obstacle", "barrier", "hindrance", "impediment"], label: "Causing blockage", hint: "The definition says 'causing a blockage or obstacle' -- in the way." },
      { keyword: "creating difficulties", matchTerms: ["creat", "difficult", "deliberat", "unhelpful", "uncooperative", "thwart"], label: "Creating difficulties", hint: "The definition says 'deliberately creating difficulties' -- making things hard." },
    ],
    synonyms: ["hindering", "blocking", "unhelpful", "impeding", "uncooperative"],
    partOfSpeech: "adjective",
    etymology: "Latin obstruere (to block up).",
  },
  // ── overbearing ──
  {
    word: "overbearing",
    definition: "Unpleasantly dominating; attempting to control others in an oppressive way.",
    keyConcepts: [
      { keyword: "unpleasantly dominating", matchTerms: ["unpleasant", "dominat", "control", "bossy", "dictatorial", "imperious"], label: "Unpleasantly dominating", hint: "The definition says 'unpleasantly dominating' -- too controlling." },
      { keyword: "oppressive way", matchTerms: ["oppressive", "way", "heavy-handed", "tyrannical", "autocratic", "high-handed"], label: "Oppressive way", hint: "The definition says 'attempting to control in an oppressive way' -- pushes people around." },
    ],
    synonyms: ["domineering", "bossy", "dictatorial", "imperious", "autocratic"],
    partOfSpeech: "adjective",
    etymology: "Over- + bearing.",
  },
  // ── overstated ──
  {
    word: "overstated",
    definition: "Expressed too strongly; exaggerated beyond what is accurate.",
    keyConcepts: [
      { keyword: "expressed too strongly", matchTerms: ["express", "too strongly", "excessive", "extreme", "inflated", "overblown"], label: "Expressed too strongly", hint: "The definition says 'expressed too strongly' -- more than necessary." },
      { keyword: "exaggerated", matchTerms: ["exaggerat", "beyond", "accurate", "overemphasiz", "overdone", "embellish"], label: "Exaggerated", hint: "The definition says 'exaggerated beyond what is accurate' -- blown out of proportion." },
    ],
    synonyms: ["exaggerated", "overblown", "inflated", "embellished", "overemphasized"],
    partOfSpeech: "adjective",
    etymology: "Over- + stated.",
  },
  // ── paradoxical ──
  {
    word: "paradoxical",
    definition: "Seemingly absurd or self-contradictory; having contradictory qualities.",
    keyConcepts: [
      { keyword: "seemingly absurd", matchTerms: ["seem", "absurd", "strange", "puzzling", "baffling", "perplexing"], label: "Seemingly absurd", hint: "The definition says 'seemingly absurd or self-contradictory' -- doesn't make sense at first." },
      { keyword: "contradictory qualities", matchTerms: ["contradict", "qualities", "inconsistent", "ironic", "anomalous", "conflicting"], label: "Contradictory qualities", hint: "The definition says 'having contradictory qualities' -- opposites together." },
    ],
    synonyms: ["contradictory", "inconsistent", "ironic", "puzzling", "anomalous"],
    partOfSpeech: "adjective",
    etymology: "Greek paradoxos (contrary to expectation).",
  },
  // ── pervasive ──
  {
    word: "pervasive",
    definition: "Spreading widely throughout an area or group of people; prevalent.",
    keyConcepts: [
      { keyword: "spreading widely", matchTerms: ["spread", "widely", "throughout", "everywhere", "extensive", "far-reaching"], label: "Spreading widely", hint: "The definition says 'spreading widely throughout' -- gets everywhere." },
      { keyword: "prevalent", matchTerms: ["prevalent", "common", "ubiquitous", "omnipresent", "rife", "rampant"], label: "Prevalent", hint: "The definition says 'prevalent' -- found everywhere." },
    ],
    synonyms: ["widespread", "prevalent", "ubiquitous", "omnipresent", "extensive"],
    partOfSpeech: "adjective",
    etymology: "Latin pervadere (to go through).",
  },
  // ── polarizing ──
  {
    word: "polarizing",
    definition: "Causing division into two opposing groups; creating strong contrasting positions.",
    keyConcepts: [
      { keyword: "causing division", matchTerms: ["caus", "division", "opposing", "split", "divide", "separate"], label: "Causing division", hint: "The definition says 'causing division into two opposing groups' -- splits people." },
      { keyword: "contrasting positions", matchTerms: ["contrast", "positions", "extreme", "opposed", "conflict", "contentious"], label: "Contrasting positions", hint: "The definition says 'creating strong contrasting positions' -- people take sides." },
    ],
    synonyms: ["divisive", "controversial", "contentious", "splitting", "alienating"],
    partOfSpeech: "adjective",
    etymology: "From pole (opposite ends).",
  },
  // ── presumptive ──
  {
    word: "presumptive",
    definition: "Based on presumption rather than proof; giving grounds for a belief.",
    keyConcepts: [
      { keyword: "based on presumption", matchTerms: ["based", "presumption", "assumption", "supposed", "probable", "likely"], label: "Based on presumption", hint: "The definition says 'based on presumption rather than proof' -- assumed, not proven." },
      { keyword: "giving grounds for belief", matchTerms: ["grounds", "belief", "infer", "deduc", "reason", "expect"], label: "Giving grounds for belief", hint: "The definition says 'giving grounds for a belief' -- reasonable to assume." },
    ],
    synonyms: ["assumed", "supposed", "probable", "likely", "expected"],
    partOfSpeech: "adjective",
    etymology: "Latin praesumptivus (taking beforehand).",
  },
  // ── problematic ──
  {
    word: "problematic",
    definition: "Constituting or presenting a problem; difficult to deal with.",
    keyConcepts: [
      { keyword: "presenting a problem", matchTerms: ["present", "problem", "issue", "concern", "trouble", "complicat"], label: "Presenting a problem", hint: "The definition says 'constituting or presenting a problem' -- causes issues." },
      { keyword: "difficult to deal with", matchTerms: ["difficult", "deal", "troublesome", "awkward", "challenging", "thorny"], label: "Difficult to deal with", hint: "The definition says 'difficult to deal with' -- hard to handle." },
    ],
    synonyms: ["troublesome", "difficult", "challenging", "complicated", "thorny"],
    partOfSpeech: "adjective",
    etymology: "Greek problema (something thrown forward).",
  },
  // ── productive ──
  {
    word: "productive",
    definition: "Producing or able to produce large amounts; achieving significant results.",
    keyConcepts: [
      { keyword: "producing large amounts", matchTerms: ["produc", "large", "amount", "much", "yield", "prolific", "fertile"], label: "Producing large amounts", hint: "The definition says 'producing or able to produce large amounts' -- makes a lot." },
      { keyword: "achieving results", matchTerms: ["achiev", "result", "effective", "efficient", "useful", "fruitful"], label: "Achieving results", hint: "The definition says 'achieving significant results' -- gets things done." },
    ],
    synonyms: ["fruitful", "prolific", "effective", "efficient", "constructive"],
    partOfSpeech: "adjective",
    etymology: "Latin producere (to bring forth).",
  },
  // ── prohibitive ──
  {
    word: "prohibitive",
    definition: "Serving to forbid or restrict; so high as to prevent purchase or use.",
    keyConcepts: [
      { keyword: "forbid or restrict", matchTerms: ["forbid", "restrict", "prevent", "ban", "bar", "disallow"], label: "Forbid or restrict", hint: "The definition says 'serving to forbid or restrict' -- stops you." },
      { keyword: "so high as to prevent", matchTerms: ["so high", "prevent", "purchase", "use", "cost", "price", "expensive"], label: "So high as to prevent", hint: "The definition says 'so high as to prevent purchase' -- too expensive." },
    ],
    synonyms: ["forbidding", "restrictive", "excessive", "exorbitant", "steep"],
    partOfSpeech: "adjective",
    etymology: "Latin prohibere (to hold back).",
  },
  // ── provisional ──
  {
    word: "provisional",
    definition: "Arranged or existing for the present but likely to change; temporary.",
    keyConcepts: [
      { keyword: "for the present", matchTerms: ["present", "now", "current", "interim", "stopgap", "short-term"], label: "For the present", hint: "The definition says 'arranged for the present' -- just for now." },
      { keyword: "likely to change", matchTerms: ["likely", "change", "temporary", "conditional", "tentative", "subject to change"], label: "Likely to change", hint: "The definition says 'but likely to change' -- not permanent." },
    ],
    synonyms: ["temporary", "interim", "tentative", "conditional", "stopgap"],
    partOfSpeech: "adjective",
    etymology: "Latin provisio (a providing).",
  },
  // ── reactionary ──
  {
    word: "reactionary",
    definition: "Opposing political or social progress or reform; extremely conservative.",
    keyConcepts: [
      { keyword: "opposing progress", matchTerms: ["oppos", "progress", "reform", "change", "resist", "anti-reform"], label: "Opposing progress", hint: "The definition says 'opposing political or social progress' -- against change." },
      { keyword: "extremely conservative", matchTerms: ["extreme", "conservative", "regressive", "traditional", "backward-looking", "right-wing"], label: "Extremely conservative", hint: "The definition says 'extremely conservative' -- wants to go back." },
    ],
    synonyms: ["conservative", "traditional", "regressive", "right-wing", "ultraconservative"],
    partOfSpeech: "adjective",
    etymology: "French réactionnaire.",
  },
  // ── reconciliatory ──
  {
    word: "reconciliatory",
    definition: "Intended to restore friendly relations; aimed at making peace.",
    keyConcepts: [
      { keyword: "restore friendly relations", matchTerms: ["restore", "friendly", "relations", "repair", "mend", "heal"], label: "Restore friendly relations", hint: "The definition says 'intended to restore friendly relations' -- bringing back harmony." },
      { keyword: "making peace", matchTerms: ["peace", "conciliat", "pacify", "appeas", "harmonize", "settle"], label: "Making peace", hint: "The definition says 'aimed at making peace' -- ending conflict." },
    ],
    synonyms: ["conciliatory", "peacemaking", "pacifying", "appeasing", "harmonizing"],
    partOfSpeech: "adjective",
    etymology: "Latin reconciliare (to bring together again).",
  },
  // ── regressive ──
  {
    word: "regressive",
    definition: "Returning to a less developed or earlier state; moving backward.",
    keyConcepts: [
      { keyword: "returning to earlier state", matchTerms: ["return", "earlier", "state", "previous", "former", "revert"], label: "Returning to earlier state", hint: "The definition says 'returning to a less developed or earlier state' -- going back." },
      { keyword: "moving backward", matchTerms: ["moving", "backward", "decline", "retreat", "deteriorat", "retrogress"], label: "Moving backward", hint: "The definition says 'moving backward' -- opposite of progress." },
    ],
    synonyms: ["backward", "retrograde", "declining", "deteriorating", "reverting"],
    partOfSpeech: "adjective",
    etymology: "Latin regredi (to go back).",
  },
  // ── resentful ──
  {
    word: "resentful",
    definition: "Feeling or expressing bitterness or indignation at being treated unfairly.",
    keyConcepts: [
      { keyword: "feeling bitterness", matchTerms: ["feel", "bitter", "indignation", "anger", "grudge", "hostil"], label: "Feeling bitterness", hint: "The definition says 'feeling or expressing bitterness' -- sour feelings." },
      { keyword: "treated unfairly", matchTerms: ["treated", "unfair", "wronged", "aggrieved", "offended", "hurt"], label: "Treated unfairly", hint: "The definition says 'at being treated unfairly' -- feels wronged." },
    ],
    synonyms: ["bitter", "aggrieved", "indignant", "grudging", "embittered"],
    partOfSpeech: "adjective",
    etymology: "French ressentir (to feel strongly).",
  },
  // ── resistant ──
  {
    word: "resistant",
    definition: "Offering resistance to something; not affected by something.",
    keyConcepts: [
      { keyword: "offering resistance", matchTerms: ["offer", "resistance", "oppose", "withstand", "defy", "repel"], label: "Offering resistance", hint: "The definition says 'offering resistance to something' -- pushes back." },
      { keyword: "not affected", matchTerms: ["not affected", "immune", "impervious", "unsusceptible", "unaffected", "proof"], label: "Not affected", hint: "The definition says 'not affected by something' -- doesn't respond to it." },
    ],
    synonyms: ["opposing", "impervious", "immune", "defiant", "unyielding"],
    partOfSpeech: "adjective",
    etymology: "Latin resistere (to stand against).",
  },
  // ── retaliatory ──
  {
    word: "retaliatory",
    definition: "Characterized by a desire to hurt someone in return for harm done; vengeful.",
    keyConcepts: [
      { keyword: "hurt in return", matchTerms: ["hurt", "return", "harm", "payback", "revenge", "reciprocat"], label: "Hurt in return", hint: "The definition says 'desire to hurt someone in return for harm done' -- getting back at them." },
      { keyword: "vengeful", matchTerms: ["vengeful", "revengeful", "vindictive", "punitive", "reprisal", "counter"], label: "Vengeful", hint: "The definition says 'vengeful' -- wants revenge." },
    ],
    synonyms: ["vengeful", "vindictive", "punitive", "revengeful", "counter"],
    partOfSpeech: "adjective",
    etymology: "Latin retaliare (to repay in kind).",
  },
  // ── sanctioned ──
  {
    word: "sanctioned",
    definition: "Given official permission or approval; authorized or endorsed.",
    keyConcepts: [
      { keyword: "official permission", matchTerms: ["official", "permission", "approval", "authorized", "legal", "legitimate"], label: "Official permission", hint: "The definition says 'given official permission or approval' -- allowed by authorities." },
      { keyword: "endorsed", matchTerms: ["endorse", "support", "ratif", "approve", "validate", "back"], label: "Endorsed", hint: "The definition says 'authorized or endorsed' -- backed officially." },
    ],
    synonyms: ["authorized", "approved", "endorsed", "permitted", "ratified"],
    partOfSpeech: "adjective",
    etymology: "Latin sanctio (decree, ordinance).",
  },
  // ── self-serving ──
  {
    word: "self-serving",
    definition: "Having concern for one's own welfare above others; serving one's own interests.",
    keyConcepts: [
      { keyword: "concern for own welfare", matchTerms: ["concern", "own", "welfare", "interest", "benefit", "advantage"], label: "Concern for own welfare", hint: "The definition says 'having concern for one's own welfare above others' -- puts self first." },
      { keyword: "serving own interests", matchTerms: ["serv", "interest", "selfish", "egotistical", "self-centered", "opportunistic"], label: "Serving own interests", hint: "The definition says 'serving one's own interests' -- looking out for number one." },
    ],
    synonyms: ["selfish", "egotistical", "self-centered", "opportunistic", "self-interested"],
    partOfSpeech: "adjective",
    etymology: "Self- + serving.",
  },
  // ── situational ──
  {
    word: "situational",
    definition: "Relating to or dependent on a set of circumstances; context-specific.",
    keyConcepts: [
      { keyword: "dependent on circumstances", matchTerms: ["depend", "circumstanc", "condition", "context", "case", "scenario"], label: "Dependent on circumstances", hint: "The definition says 'dependent on a set of circumstances' -- varies by situation." },
      { keyword: "context-specific", matchTerms: ["context", "specific", "particular", "variable", "conditional", "relative"], label: "Context-specific", hint: "The definition says 'context-specific' -- depends on the situation." },
    ],
    synonyms: ["contextual", "circumstantial", "conditional", "contingent", "case-specific"],
    partOfSpeech: "adjective",
    etymology: "Latin situare (to place).",
  },
  // ── subordinate ──
  {
    word: "subordinate",
    definition: "Lower in rank or position; placed in or occupying a less important position.",
    keyConcepts: [
      { keyword: "lower in rank", matchTerms: ["lower", "rank", "position", "junior", "inferior", "lesser"], label: "Lower in rank", hint: "The definition says 'lower in rank or position' -- not as high up." },
      { keyword: "less important", matchTerms: ["less important", "secondary", "subsidiary", "auxiliary", "ancillary", "dependent"], label: "Less important", hint: "The definition says 'occupying a less important position' -- secondary role." },
    ],
    synonyms: ["junior", "inferior", "secondary", "lesser", "subsidiary"],
    partOfSpeech: "adjective",
    etymology: "Latin subordinare (to place in a lower order).",
  },
  // ── substantive ──
  {
    word: "substantive",
    definition: "Having a firm basis in reality; important, meaningful, or considerable.",
    keyConcepts: [
      { keyword: "firm basis in reality", matchTerms: ["firm", "basis", "reality", "real", "solid", "tangible", "concrete"], label: "Firm basis in reality", hint: "The definition says 'having a firm basis in reality' -- actually exists." },
      { keyword: "important and meaningful", matchTerms: ["important", "meaningful", "considerable", "significant", "substantial", "weighty"], label: "Important and meaningful", hint: "The definition says 'important, meaningful, or considerable' -- matters." },
    ],
    synonyms: ["significant", "substantial", "meaningful", "considerable", "important"],
    partOfSpeech: "adjective",
    etymology: "Latin substantivus (self-existent).",
  },
  // ── systemic ──
  {
    word: "systemic",
    definition: "Relating to a system as a whole; affecting an entire system or organization.",
    keyConcepts: [
      { keyword: "relating to system as whole", matchTerms: ["relat", "system", "whole", "overall", "comprehensive", "total"], label: "Relating to system as whole", hint: "The definition says 'relating to a system as a whole' -- the entire structure." },
      { keyword: "affecting entire system", matchTerms: ["affect", "entire", "organization", "widespread", "pervasive", "institutional"], label: "Affecting entire system", hint: "The definition says 'affecting an entire system' -- throughout everything." },
    ],
    synonyms: ["systematic", "structural", "organizational", "institutional", "pervasive"],
    partOfSpeech: "adjective",
    etymology: "Greek systema (organized whole).",
  },
  // ── transactional ──
  {
    word: "transactional",
    definition: "Relating to the conducting of business; based on exchange of goods or services.",
    keyConcepts: [
      { keyword: "conducting business", matchTerms: ["conduct", "business", "commerce", "trade", "deal", "commercial"], label: "Conducting business", hint: "The definition says 'relating to the conducting of business' -- about deals." },
      { keyword: "exchange of goods", matchTerms: ["exchange", "goods", "services", "reciprocal", "give-and-take", "quid pro quo"], label: "Exchange of goods", hint: "The definition says 'based on exchange of goods or services' -- trading." },
    ],
    synonyms: ["commercial", "business", "exchange-based", "reciprocal", "mercantile"],
    partOfSpeech: "adjective",
    etymology: "Latin transactio (a settlement).",
  },
  // ── transformative ──
  {
    word: "transformative",
    definition: "Causing a major change in form, nature, or character; revolutionary.",
    keyConcepts: [
      { keyword: "causing major change", matchTerms: ["caus", "major", "change", "dramatic", "profound", "fundamental", "radical"], label: "Causing major change", hint: "The definition says 'causing a major change' -- big transformation." },
      { keyword: "in form or character", matchTerms: ["form", "nature", "character", "revolutionar", "groundbreaking", "game-changing"], label: "In form or character", hint: "The definition says 'in form, nature, or character' -- changes what it is." },
    ],
    synonyms: ["revolutionary", "radical", "groundbreaking", "life-changing", "profound"],
    partOfSpeech: "adjective",
    etymology: "Latin transformare (to change shape).",
  },
  // ── understated ──
  {
    word: "understated",
    definition: "Presented or expressed with restraint; subtle rather than obvious.",
    keyConcepts: [
      { keyword: "expressed with restraint", matchTerms: ["express", "restraint", "modest", "muted", "low-key", "downplay"], label: "Expressed with restraint", hint: "The definition says 'presented or expressed with restraint' -- not making a big deal." },
      { keyword: "subtle rather than obvious", matchTerms: ["subtle", "rather than", "obvious", "understated", "quiet", "unassuming"], label: "Subtle rather than obvious", hint: "The definition says 'subtle rather than obvious' -- doesn't shout." },
    ],
    synonyms: ["subtle", "restrained", "modest", "muted", "low-key"],
    partOfSpeech: "adjective",
    etymology: "Under- + stated.",
  },
  // ── unfounded ──
  {
    word: "unfounded",
    definition: "Having no foundation or basis in fact; groundless.",
    keyConcepts: [
      { keyword: "no foundation", matchTerms: ["no foundation", "basis", "fact", "unsupported", "unsubstantiat", "baseless"], label: "No foundation", hint: "The definition says 'having no foundation or basis in fact' -- nothing to support it." },
      { keyword: "groundless", matchTerms: ["groundless", "unwarranted", "unjustified", "idle", "spurious", "fabricat"], label: "Groundless", hint: "The definition says 'groundless' -- no evidence." },
    ],
    synonyms: ["baseless", "groundless", "unsubstantiated", "unsupported", "unwarranted"],
    partOfSpeech: "adjective",
    etymology: "Un- + founded.",
  },
  // ── unsustainable ──
  {
    word: "unsustainable",
    definition: "Not able to be maintained at the current rate or level; not environmentally sound.",
    keyConcepts: [
      { keyword: "not able to be maintained", matchTerms: ["not", "maintain", "current", "rate", "level", "continue", "keep up"], label: "Not able to be maintained", hint: "The definition says 'not able to be maintained at the current rate' -- can't keep going." },
      { keyword: "not environmentally sound", matchTerms: ["environmental", "sound", "viable", "harmful", "depleting", "destructive"], label: "Not environmentally sound", hint: "The definition says 'not environmentally sound' -- bad for the planet." },
    ],
    synonyms: ["untenable", "unviable", "unworkable", "impractical", "harmful"],
    partOfSpeech: "adjective",
    etymology: "Un- + sustainable.",
  },
]
