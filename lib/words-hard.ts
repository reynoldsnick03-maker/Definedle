import type { DailyWord } from "./game-data"

// -----------------------------------------------------------------------
// HARD MODE WORDS (365 words target)
//
// These are words people recognize and use but struggle to define precisely.
// The gap between "I know this word" and "I can articulate what it means"
// is what makes hard mode hard.
//
// RULES:
// - Every word MUST have 2-3 key concepts, each directly from the definition
// - matchTerms are NARROW -- near-synonyms only, no loose associations
// - Synonyms list includes the obvious one-word answers people would reach for
// - NO overlap with words-daily.ts or words-practice.ts
// -----------------------------------------------------------------------

export const hardWords: DailyWord[] = [
  // ── 1. sarcasm ──
  {
    word: "sarcasm",
    partOfSpeech: "noun",
    definition: "The use of irony to mock or convey contempt.",
    keyConcepts: [
      { keyword: "irony", matchTerms: ["iron", "opposite", "say the opposite", "don't mean", "doesn't mean", "contrary", "insincer"], label: "Uses irony", hint: "Sarcasm specifically operates through irony -- saying the opposite of what you mean." },
      { keyword: "mock", matchTerms: ["mock", "ridicul", "taunt", "make fun", "derid", "belittl", "scorn", "sneer", "jeer", "insult"], label: "To mock or ridicule", hint: "The definition says 'to mock' -- sarcasm has a target, it's meant to cut." },
      { keyword: "contempt", matchTerms: ["contempt", "disdain", "disrespect", "scorn", "hostil", "meanness", "cruelty", "harsh", "biting", "cutting"], label: "Conveys contempt", hint: "The definition says 'convey contempt' -- sarcasm isn't playful, it carries real disdain." },
    ],
    synonyms: ["mockery", "irony", "ridicule", "derision"],
    etymology: "Greek sarkasmos, from sarkazein -- from sarx (flesh).",
  },
  // ── 2. charisma ──
  {
    word: "charisma",
    partOfSpeech: "noun",
    definition: "A compelling attractiveness or charm that can inspire devotion in others.",
    keyConcepts: [
      { keyword: "compelling", matchTerms: ["compel", "magnetic", "captivat", "attract", "draw", "allur", "enchant", "fascinat", "irresist", "engaging"], label: "Compelling attractiveness", hint: "The definition says 'compelling attractiveness' -- it's not just likability, it's a magnetic pull." },
      { keyword: "charm", matchTerms: ["charm", "appeal", "likab", "personalit", "presenc", "aura", "grace", "warmth"], label: "Charm or personal appeal", hint: "The definition says 'charm' -- a quality of the person themselves." },
      { keyword: "inspire devotion", matchTerms: ["inspir", "devot", "follow", "loyal", "influenc", "lead", "persuad", "motivat", "rally", "move"], label: "Inspires devotion in others", hint: "The definition says 'inspire devotion in others' -- charisma produces followers and believers." },
    ],
    synonyms: ["charm", "magnetism", "appeal", "allure"],
    etymology: "Greek kharisma, from kharis (grace, beauty).",
  },
  // ── 3. awkward ──
  {
    word: "awkward",
    partOfSpeech: "adjective",
    definition: "Causing or feeling embarrassment or inconvenience; lacking ease or grace.",
    keyConcepts: [
      { keyword: "embarrassment", matchTerms: ["embarrass", "uncomfortab", "uneas", "self-conscious", "cringe", "sheepish", "flustered"], label: "Causes embarrassment", hint: "The definition says 'causing or feeling embarrassment' -- the emotional discomfort." },
      { keyword: "inconvenience", matchTerms: ["inconveni", "difficult", "clumsy", "unwieldy", "cumbersom", "tricky", "problematic", "hard to handle"], label: "Inconvenient or difficult to handle", hint: "The definition also says 'inconvenience' -- awkward can describe physical difficulty, not just social." },
      { keyword: "lacking grace", matchTerms: ["grace", "ungainly", "clumsy", "ungraceful", "stiff", "stilted", "inelegant", "uncoordinat", "gauche"], label: "Lacking ease or grace", hint: "The definition says 'lacking ease or grace' -- the absence of smoothness." },
    ],
    synonyms: ["clumsy", "uncomfortable", "ungainly"],
    etymology: "Middle English auk from Old Norse afugr + -ward.",
  },
  // ── 4. pretentious ──
  {
    word: "pretentious",
    partOfSpeech: "adjective",
    definition: "Attempting to impress by affecting greater importance, talent, or culture than is actually possessed.",
    keyConcepts: [
      { keyword: "attempting to impress", matchTerms: ["impress", "show off", "flaunt", "display", "boast", "postur", "peacock", "parade"], label: "Attempting to impress", hint: "The definition says 'attempting to impress' -- the core motivation is performing for others." },
      { keyword: "affecting greater", matchTerms: ["affect", "pretend", "fake", "feign", "exaggerat", "overstat", "inflat", "claim", "act as if", "put on", "front"], label: "Affecting greater importance than real", hint: "The definition says 'affecting greater importance, talent, or culture' -- presenting a false version." },
      { keyword: "not actually possessed", matchTerms: ["actual", "possess", "real", "genuinely", "truly", "deserv", "earn", "authenti", "without having", "undeserv", "hollow", "superficial", "shallow"], label: "More than is actually possessed", hint: "The definition says 'than is actually possessed' -- the gap between the performance and reality." },
    ],
    synonyms: ["showy", "ostentatious", "affected", "pompous"],
    etymology: "French pretentieux, from Latin praetendere -- prae (before) + tendere (to stretch).",
  },
  // ── 5. condescending ──
  {
    word: "condescending",
    partOfSpeech: "adjective",
    definition: "Having or showing a feeling of patronizing superiority.",
    keyConcepts: [
      { keyword: "patronizing", matchTerms: ["patroniz", "talk down", "belittl", "demeaning", "diminish", "treat as less", "treat as inferior", "infantiliz"], label: "Patronizing manner", hint: "The definition says 'patronizing' -- treating someone as if they need your gracious help." },
      { keyword: "superiority", matchTerms: ["superior", "above", "better than", "higher", "arrogant", "haughty", "snobbish", "look down", "beneath"], label: "Feeling of superiority", hint: "The definition says 'superiority' -- the belief that you're above the other person." },
    ],
    synonyms: ["patronizing", "supercilious", "disdainful"],
    etymology: "Latin condescendere -- con (together) + descendere (to descend).",
  },
  // ── 6. intuition ──
  {
    word: "intuition",
    partOfSpeech: "noun",
    definition: "The ability to understand something instinctively, without the need for conscious reasoning.",
    keyConcepts: [
      { keyword: "understand", matchTerms: ["understand", "know", "grasp", "comprehend", "perceiv", "sense", "feel", "apprehend", "recogniz"], label: "Understanding or knowing", hint: "The definition says 'the ability to understand something' -- intuition produces knowledge." },
      { keyword: "instinctively", matchTerms: ["instinct", "gut", "innate", "natural", "immediate", "automatic", "spontaneous", "inherent"], label: "Instinctively, not learned", hint: "The definition says 'instinctively' -- it comes from within, not from study." },
      { keyword: "without reasoning", matchTerms: ["without reason", "without think", "without logic", "without analyz", "not conscious", "unconscious", "irrational", "non-rational", "beyond logic", "can't explain", "subconscious"], label: "Without conscious reasoning", hint: "The definition says 'without the need for conscious reasoning' -- the knowing bypasses logical thought." },
    ],
    synonyms: ["instinct", "gut feeling", "sixth sense", "hunch"],
    etymology: "Latin intuitio, from intueri -- in (at) + tueri (to look).",
  },
  // ── 7. irony ──
  {
    word: "irony",
    partOfSpeech: "noun",
    definition: "The expression of meaning using language that normally signifies the opposite, typically for humorous or emphatic effect.",
    keyConcepts: [
      { keyword: "opposite meaning", matchTerms: ["opposite", "contrary", "revers", "invert", "contradict", "doesn't mean", "different from", "not what"], label: "Saying the opposite of what is meant", hint: "The definition says 'language that normally signifies the opposite' -- the gap between said and meant." },
      { keyword: "expression", matchTerms: ["express", "language", "words", "speech", "say", "communicat", "convey", "state", "remark"], label: "Through language or expression", hint: "The definition says 'expression of meaning using language' -- irony is a linguistic device." },
      { keyword: "humorous or emphatic", matchTerms: ["humor", "humour", "funny", "comic", "amusement", "emphatic", "emphasis", "effect", "dramatic", "witty", "jest"], label: "For humorous or emphatic effect", hint: "The definition says 'for humorous or emphatic effect' -- irony serves a purpose." },
    ],
    synonyms: ["sarcasm", "satire", "mockery"],
    etymology: "Greek eironeia, from eiron (dissembler).",
  },
  // ── 8. gaslighting ──
  {
    word: "gaslighting",
    partOfSpeech: "noun",
    definition: "The act of manipulating someone into questioning their own perception of reality.",
    keyConcepts: [
      { keyword: "manipulating", matchTerms: ["manipulat", "control", "deceiv", "trick", "coerce", "exploit", "twist", "distort", "brainwash"], label: "Manipulating someone", hint: "The definition says 'manipulating someone' -- it's deliberate psychological control." },
      { keyword: "questioning", matchTerms: ["question", "doubt", "unsure", "confus", "uncertain", "destabiliz", "undermin", "erode", "shak", "lose confidence"], label: "Making them question themselves", hint: "The definition says 'questioning their own perception' -- the victim doubts their own mind." },
      { keyword: "reality", matchTerms: ["reality", "perception", "sanity", "memory", "experience", "truth", "judgment", "what happened", "what they saw", "senses"], label: "Their perception of reality", hint: "The definition says 'perception of reality' -- it targets the victim's grasp on what's real." },
    ],
    synonyms: ["manipulation", "psychological abuse", "deception"],
    etymology: "From the 1944 film Gaslight.",
  },
  // ── 9. passive-aggressive ──
  {
    word: "passive-aggressive",
    partOfSpeech: "adjective",
    definition: "Indirectly expressing hostility, often through stubbornness, procrastination, or deliberate inefficiency.",
    keyConcepts: [
      { keyword: "indirect", matchTerms: ["indirect", "subtle", "covert", "hidden", "not open", "not direct", "underhanded", "backhanded", "roundabout", "implied"], label: "Expressed indirectly", hint: "The definition says 'indirectly expressing' -- the hostility is never stated openly." },
      { keyword: "hostility", matchTerms: ["hostil", "anger", "aggress", "resent", "antagoni", "negativity", "displeasure", "frustr", "animosity"], label: "Hostility or anger", hint: "The definition says 'hostility' -- there's real anger underneath, it's just hidden." },
      { keyword: "through actions", matchTerms: ["stubborn", "procrastinat", "inefficien", "delay", "forget", "ignor", "silent treatment", "withhold", "sabotag", "drag feet", "uncooperat", "sulk", "obstruct"], label: "Through actions like stubbornness or delay", hint: "The definition says 'through stubbornness, procrastination, or deliberate inefficiency' -- it manifests in behavior, not words." },
    ],
    synonyms: ["indirect", "uncooperative", "obstructive"],
    etymology: "Coined by US military psychiatrist Colonel William Menninger in 1945.",
  },
  // ── 10. pedantic ──
  {
    word: "pedantic",
    partOfSpeech: "adjective",
    definition: "Excessively concerned with minor details or rules, especially in teaching.",
    keyConcepts: [
      { keyword: "excessively", matchTerms: ["excess", "overly", "too much", "obsess", "fixat", "extreme", "disproportion", "undul"], label: "Excessively or overly", hint: "The definition says 'excessively concerned' -- pedantic implies going overboard, not just being careful." },
      { keyword: "minor details", matchTerms: ["minor", "detail", "trivial", "small", "petty", "unimportant", "insignificant", "nitpick", "hair-split", "technicality", "minutia"], label: "Minor details or rules", hint: "The definition says 'minor details or rules' -- pedantic people focus on things that don't really matter." },
    ],
    synonyms: ["nitpicking", "fussy", "academic", "finicky"],
    etymology: "Italian pedante, perhaps from Latin paedagogare.",
  },
  // ── 11. vicarious ──
  {
    word: "vicarious",
    partOfSpeech: "adjective",
    definition: "Experienced in the imagination through the feelings or actions of another person.",
    keyConcepts: [
      { keyword: "experienced", matchTerms: ["experienc", "felt", "lived", "undergon", "enjoy", "suffer", "sensation", "undergo"], label: "Experienced or felt", hint: "The definition says 'experienced' -- you genuinely feel something, even if it's not happening to you." },
      { keyword: "imagination", matchTerms: ["imaginat", "imagin", "mental", "in your mind", "indirect", "secondhand", "not firsthand", "not direct", "by proxy", "substitut"], label: "Through imagination, not firsthand", hint: "The definition says 'in the imagination' -- it's a mental experience, not a physical one." },
      { keyword: "another person", matchTerms: ["another", "someone else", "other person", "others", "through them", "their", "watching", "observ", "witness"], label: "Through another person", hint: "The definition says 'through the feelings or actions of another person' -- someone else is the vehicle." },
    ],
    synonyms: ["indirect", "secondhand", "surrogate"],
    etymology: "Latin vicarius, from vicis (change, alternation).",
  },
  // ── 12. facetious ──
  {
    word: "facetious",
    partOfSpeech: "adjective",
    definition: "Treating serious issues with deliberately inappropriate humor.",
    keyConcepts: [
      { keyword: "serious issues", matchTerms: ["serious", "important", "grave", "solemn", "weighty", "significant", "somber", "heavy"], label: "Regarding serious issues", hint: "The definition says 'serious issues' -- facetious specifically targets things that matter." },
      { keyword: "inappropriate", matchTerms: ["inappropriat", "unsuitable", "improper", "ill-timed", "misplaced", "wrong time", "out of place", "tasteless", "flippant", "glib"], label: "Deliberately inappropriate", hint: "The definition says 'deliberately inappropriate' -- the humor is knowingly wrong for the moment." },
      { keyword: "humor", matchTerms: ["humor", "humour", "joke", "jest", "funny", "comic", "witty", "light", "playful", "tongue-in-cheek", "not serious"], label: "Using humor", hint: "The definition says 'humor' -- facetious is fundamentally about making light of something." },
    ],
    synonyms: ["flippant", "glib", "tongue-in-cheek", "jocular"],
    etymology: "French facetieux, from Latin facetia, from facetus.",
  },
  // ── 13. perfunctory ──
  {
    word: "perfunctory",
    partOfSpeech: "adjective",
    definition: "Carried out with a minimum of effort or reflection.",
    keyConcepts: [
      { keyword: "minimum effort", matchTerms: ["minimum", "effort", "half-heart", "token", "cursory", "superficial", "careless", "lazy", "mechanical", "going through the motion", "bare minimum"], label: "Minimum of effort", hint: "The definition says 'minimum of effort' -- perfunctory actions do the bare minimum." },
      { keyword: "no reflection", matchTerms: ["reflect", "thought", "care", "consider", "attention", "automatic", "mindless", "indifferen", "routine", "rote", "autopilot", "unthinking"], label: "Without reflection or care", hint: "The definition says 'or reflection' -- there's no genuine thought or engagement behind it." },
    ],
    synonyms: ["cursory", "mechanical", "half-hearted", "token"],
    etymology: "Latin perfunctorius, from perfungi -- per (through) + fungi (to perform).",
  },
  // ── 14. insidious ─�����
  {
    word: "insidious",
    partOfSpeech: "adjective",
    definition: "Proceeding in a gradual, subtle way but with very harmful effects.",
    keyConcepts: [
      { keyword: "gradual", matchTerms: ["gradual", "slow", "incremental", "creeping", "progressive", "step by step", "over time", "bit by bit", "imperceptib"], label: "Gradual and subtle", hint: "The definition says 'gradual, subtle way' -- insidious things don't announce themselves." },
      { keyword: "harmful", matchTerms: ["harmful", "damage", "danger", "destruct", "toxic", "malicious", "sinister", "pernicious", "devastat", "corrosiv", "nefarious"], label: "Very harmful effects", hint: "The definition says 'very harmful effects' -- the slow pace makes it more dangerous, not less." },
    ],
    synonyms: ["stealthy", "treacherous", "pernicious", "sinister"],
    etymology: "Latin insidiosus, from insidiae, from insidere -- in (in) + sedere (to sit).",
  },
  // ── 15. cognitive dissonance ──
  {
    word: "cognitive dissonance",
    partOfSpeech: "noun",
    definition: "The mental discomfort experienced when holding two or more contradictory beliefs or values simultaneously.",
    keyConcepts: [
      { keyword: "mental discomfort", matchTerms: ["discomfort", "stress", "tension", "unease", "anxiety", "confus", "distress", "conflict", "turmoil", "friction"], label: "Mental discomfort or tension", hint: "The definition says 'mental discomfort' -- it produces genuine psychological distress." },
      { keyword: "contradictory beliefs", matchTerms: ["contradict", "conflicting", "inconsisten", "incompatib", "opposing", "clashing", "at odds", "don't align", "don't match", "hypocrit"], label: "Contradictory beliefs or values", hint: "The definition says 'contradictory beliefs or values' -- the beliefs can't both be true." },
      { keyword: "simultaneously", matchTerms: ["simultaneous", "same time", "at once", "together", "both", "two", "multiple", "holding", "coexist"], label: "Held at the same time", hint: "The definition says 'simultaneously' -- the tension comes from holding them at the same time." },
    ],
    synonyms: ["internal conflict", "contradiction", "hypocrisy"],
    etymology: "Latin cognitio + dissonantia, from dis (apart) + sonare (to sound).",
  },
  // ── 16. catharsis ──
  {
    word: "catharsis",
    partOfSpeech: "noun",
    definition: "The process of releasing, and thereby providing relief from, strong or repressed emotions.",
    keyConcepts: [
      { keyword: "releasing", matchTerms: ["releas", "let out", "express", "vent", "purge", "discharg", "unload", "free", "liberat", "outpouring"], label: "Releasing or letting out", hint: "The definition says 'releasing' -- catharsis is about getting something OUT." },
      { keyword: "relief", matchTerms: ["relief", "heal", "cleanse", "therapeutic", "comfort", "ease", "lighter", "better", "resolution", "peace", "calm"], label: "Providing relief", hint: "The definition says 'providing relief from' -- the release produces genuine emotional relief." },
      { keyword: "strong emotions", matchTerms: ["strong", "emotion", "feeling", "repress", "pent-up", "bottled", "suppress", "deep", "intense", "overwhelm"], label: "Strong or repressed emotions", hint: "The definition says 'strong or repressed emotions' -- catharsis deals with feelings that have built up." },
    ],
    synonyms: ["release", "purging", "emotional release", "purification"],
    etymology: "Greek katharsis, from kathairein, from katharos (pure).",
  },
  // ── 17. sardonic ──
  {
    word: "sardonic",
    partOfSpeech: "adjective",
    definition: "Grimly mocking or cynical.",
    keyConcepts: [
      { keyword: "grimly", matchTerms: ["grim", "dark", "bitter", "bleak", "harsh", "cold", "dry", "humorless", "joyless", "mirthless", "wry"], label: "Grim or dark in tone", hint: "The definition says 'grimly' -- sardonic isn't lighthearted, it has a dark, bitter edge." },
      { keyword: "mocking", matchTerms: ["mock", "derisiv", "scornful", "sneering", "contemptuous", "ridiculing", "taunting", "jeering", "caustic", "cutting"], label: "Mocking or scornful", hint: "The definition says 'mocking' -- there's an active element of disdain toward the target." },
    ],
    synonyms: ["cynical", "mocking", "scornful", "caustic"],
    etymology: "Greek sardonios, possibly from a Sardinian plant (herba sardonia) said to cause facial contortions.",
  },
  // ── 18. palpable ──
  {
    word: "palpable",
    partOfSpeech: "adjective",
    definition: "So intense as to be almost able to be touched or felt; readily perceived by the senses.",
    keyConcepts: [
      { keyword: "intense", matchTerms: ["intense", "strong", "powerful", "overwhelm", "thick", "heavy", "dense", "pervasiv", "immense"], label: "So intense or strong", hint: "The definition says 'so intense' -- palpable describes an extreme degree of something." },
      { keyword: "almost touchable", matchTerms: ["touch", "feel", "felt", "physical", "tangible", "almost", "as if", "seem", "like you could", "in the air", "thick enough", "tactile"], label: "Almost able to be touched or felt", hint: "The definition says 'almost able to be touched or felt' -- it's so strong it's nearly physical." },
    ],
    synonyms: ["tangible", "perceptible", "noticeable", "obvious"],
    etymology: "Latin palpabilis, from palpare (to touch gently, stroke).",
  },
  // ── 19. entitlement ──
  {
    word: "entitlement",
    partOfSpeech: "noun",
    definition: "The belief that one is inherently deserving of privileges or special treatment.",
    keyConcepts: [
      { keyword: "belief", matchTerms: ["belief", "feeling", "sense", "attitude", "assumption", "expectation", "conviction", "mindset"], label: "A belief or feeling", hint: "The definition says 'the belief' -- entitlement is a mindset, not a fact." },
      { keyword: "inherently deserving", matchTerms: ["inherent", "deserv", "ow", "due", "right", "should have", "expect", "demand", "claim"], label: "Inherently deserving", hint: "The definition says 'inherently deserving' -- believing it's owed to you without earning it." },
      { keyword: "privileges", matchTerms: ["privilege", "special", "treatment", "favor", "favour", "benefit", "advantage", "exception", "preferenc"], label: "Privileges or special treatment", hint: "The definition says 'privileges or special treatment' -- wanting more than what's standard." },
    ],
    synonyms: ["privilege", "right", "prerogative"],
    etymology: "Old French entitlement, from entitler, from Latin titulus (title, inscription).",
  },
  // ── 20. superficial ──
  {
    word: "superficial",
    partOfSpeech: "adjective",
    definition: "Existing or occurring at or on the surface; not thorough, deep, or complete.",
    keyConcepts: [
      { keyword: "surface", matchTerms: ["surface", "shallow", "outer", "external", "skin-deep", "top-level", "thin", "cursory"], label: "At the surface", hint: "The definition says 'at or on the surface' -- superficial doesn't go beneath." },
      { keyword: "not deep", matchTerms: ["not deep", "not thorough", "not complete", "lacking depth", "incomplete", "partial", "limited", "basic", "simplistic", "token", "perfunctor"], label: "Not thorough or deep", hint: "The definition says 'not thorough, deep, or complete' -- it lacks substance." },
    ],
    synonyms: ["shallow", "surface-level", "cursory", "trivial"],
    etymology: "Latin superficialis, from superficies -- super (above) + facies (face, form).",
  },
  // ── 21. colloquial ──
  {
    word: "colloquial",
    partOfSpeech: "adjective",
    definition: "Used in ordinary or familiar conversation; not formal or literary.",
    keyConcepts: [
      { keyword: "conversation", matchTerms: ["conversation", "everyday", "ordinary", "familiar", "casual", "informal", "spoken", "daily", "common", "natural"], label: "Ordinary conversation", hint: "The definition says 'ordinary or familiar conversation' -- the way people actually talk." },
      { keyword: "not formal", matchTerms: ["not formal", "informal", "not literary", "relaxed", "colloqui", "slang", "vernacular", "everyday", "casual", "unofficial"], label: "Not formal or literary", hint: "The definition says 'not formal or literary' -- colloquial is the opposite of elevated language." },
    ],
    synonyms: ["informal", "conversational", "vernacular", "casual"],
    etymology: "Latin colloquialis, from colloquium -- con (together) + loqui (to speak).",
  },
  // ── 22. delusional ──
  {
    word: "delusional",
    partOfSpeech: "adjective",
    definition: "Characterized by holding false beliefs that are resistant to reason or confrontation with actual fact.",
    keyConcepts: [
      { keyword: "false beliefs", matchTerms: ["false", "untrue", "wrong", "incorrect", "mistaken", "imagin", "fabricat", "fiction", "illusory", "not real"], label: "Holding false beliefs", hint: "The definition says 'holding false beliefs' -- the beliefs are objectively wrong." },
      { keyword: "resistant to reason", matchTerms: ["resist", "despite", "refus", "won't accept", "unreason", "irrational", "stubborn", "persist", "unshak", "unwaver", "denial", "ignor", "reject", "evidence", "fact", "proof"], label: "Resistant to reason or evidence", hint: "The definition says 'resistant to reason or confrontation with actual fact' -- evidence doesn't change the belief." },
    ],
    synonyms: ["deluded", "irrational", "misguided"],
    etymology: "Latin delusio, from deludere -- de (down) + ludere (to play).",
  },
  // ── 23. esoteric ──
  {
    word: "esoteric",
    partOfSpeech: "adjective",
    definition: "Intended for or likely to be understood by only a small number of people with specialized knowledge.",
    keyConcepts: [
      { keyword: "understood by few", matchTerms: ["small number", "few", "limit", "rare", "select", "elite", "niche", "exclusive", "inner circle", "initiated"], label: "Understood by only a few", hint: "The definition says 'only a small number of people' -- esoteric knowledge is exclusive." },
      { keyword: "specialized knowledge", matchTerms: ["special", "knowledge", "expert", "technical", "obscur", "complex", "advanced", "arcane", "academic", "scholarly", "secret"], label: "Requiring specialized knowledge", hint: "The definition says 'with specialized knowledge' -- you need expertise to access it." },
    ],
    synonyms: ["obscure", "arcane", "abstruse", "cryptic"],
    etymology: "Greek esoterikos, from esotero (more within).",
  },
  // ── 24. provocative ──
  {
    word: "provocative",
    partOfSpeech: "adjective",
    definition: "Causing annoyance, anger, or another strong reaction, especially deliberately.",
    keyConcepts: [
      { keyword: "strong reaction", matchTerms: ["reaction", "response", "anger", "annoy", "outrage", "controversy", "stir", "inflam", "agitat", "arous", "excit", "emotion"], label: "Causing a strong reaction", hint: "The definition says 'causing annoyance, anger, or another strong reaction' -- it pushes buttons." },
      { keyword: "deliberately", matchTerms: ["deliberat", "intentional", "on purpose", "calculated", "designed to", "meant to", "aimed at", "conscious", "willful"], label: "Especially deliberately", hint: "The definition says 'especially deliberately' -- provocative acts are usually intentional." },
    ],
    synonyms: ["inflammatory", "controversial", "incendiary", "contentious"],
    etymology: "Latin provocare -- pro (forth) + vocare (to call).",
  },
  // ── 25. sentimental ──
  {
    word: "sentimental",
    partOfSpeech: "adjective",
    definition: "Prompted by feelings of tenderness, sadness, or nostalgia rather than by logic or reason.",
    keyConcepts: [
      { keyword: "tenderness", matchTerms: ["tender", "warm", "fond", "affection", "loving", "sweet", "emotional", "heartfelt", "soft", "touching"], label: "Feelings of tenderness or sadness", hint: "The definition says 'tenderness, sadness, or nostalgia' -- sentimental is driven by soft emotions." },
      { keyword: "rather than logic", matchTerms: ["rather than", "not logic", "not reason", "not rational", "emotional", "irrational", "heart", "feeling", "instinct", "impuls"], label: "Rather than logic or reason", hint: "The definition says 'rather than by logic or reason' -- the head gives way to the heart." },
    ],
    synonyms: ["emotional", "nostalgic", "tender", "maudlin"],
    etymology: "French sentimental, from Latin sentire. Popularised by Laurence Sterne's 1768 novel A Sentimental Journey.",
  },
  // ── 26. anecdotal ──
  {
    word: "anecdotal",
    partOfSpeech: "adjective",
    definition: "Based on personal accounts rather than facts or research; not necessarily true or reliable.",
    keyConcepts: [
      { keyword: "personal accounts", matchTerms: ["personal", "account", "story", "experience", "individual", "firsthand", "testimony", "example", "one person"], label: "Based on personal accounts", hint: "The definition says 'personal accounts' -- anecdotal evidence comes from individual stories." },
      { keyword: "not reliable", matchTerms: ["not reliab", "unreliab", "not proven", "unverif", "not scientific", "not systematic", "not research", "informal", "not necessari", "questionab", "subjective"], label: "Not necessarily reliable", hint: "The definition says 'not necessarily true or reliable' -- anecdotal doesn't meet the standard of proof." },
    ],
    synonyms: ["informal", "unverified", "hearsay", "unscientific"],
    etymology: "Greek anekdotos -- an (not) + ekdotos, from ekdidonai (to give out).",
  },
  // ── 27. resentment ──
  {
    word: "resentment",
    partOfSpeech: "noun",
    definition: "Bitter indignation at having been treated unfairly.",
    keyConcepts: [
      { keyword: "bitter indignation", matchTerms: ["bitter", "indignat", "anger", "hostil", "animosity", "grudge", "rancor", "spite", "venom", "seethe", "fume", "smolder"], label: "Bitter indignation or anger", hint: "The definition says 'bitter indignation' -- resentment is a slow-burning, toxic anger." },
      { keyword: "treated unfairly", matchTerms: ["unfair", "unjust", "wrong", "mistreat", "slight", "disrespect", "overlook", "betrayed", "cheated", "taken advantage", "wronged"], label: "At having been treated unfairly", hint: "The definition says 'at having been treated unfairly' -- resentment is specifically a response to perceived injustice." },
    ],
    synonyms: ["bitterness", "grudge", "animosity", "indignation"],
    etymology: "French ressentir -- re (intensive) + sentir (to feel).",
  },
  // ── 28. contempt ──
  {
    word: "contempt",
    partOfSpeech: "noun",
    definition: "The feeling that a person or a thing is beneath consideration, worthless, or deserving scorn.",
    keyConcepts: [
      { keyword: "beneath consideration", matchTerms: ["beneath", "below", "unworthy", "not worth", "insignificant", "inferior", "lowly", "dismiss", "disregard", "look down"], label: "Beneath consideration", hint: "The definition says 'beneath consideration' -- contempt sees the target as not even worth thinking about." },
      { keyword: "worthless", matchTerms: ["worthless", "no value", "pathetic", "despicab", "wretched", "pitiful", "deplorab", "contemptib"], label: "Worthless or despicable", hint: "The definition says 'worthless' -- the target has no value in the eyes of the person feeling contempt." },
      { keyword: "scorn", matchTerms: ["scorn", "disdain", "derision", "disgust", "loath", "revulsion", "hatred", "disrespect", "sneering"], label: "Deserving scorn", hint: "The definition says 'deserving scorn' -- contempt produces active, visible disdain." },
    ],
    synonyms: ["scorn", "disdain", "derision", "loathing"],
    etymology: "Latin contemptus, from contemnere -- con (intensive) + temnere (to slight).",
  },
  // ── 29. indifferent ──
  {
    word: "indifferent",
    partOfSpeech: "adjective",
    definition: "Having no particular interest or sympathy; unconcerned.",
    keyConcepts: [
      { keyword: "no interest", matchTerms: ["no interest", "not interest", "unconcern", "uncar", "detach", "disengag", "uninvest", "unmov", "untouched"], label: "No particular interest", hint: "The definition says 'no particular interest or sympathy' -- indifference is the absence of caring." },
      { keyword: "unconcerned", matchTerms: ["unconcern", "unbother", "nonchalant", "untroubled", "impassive", "cold", "aloof", "distant", "apathetic"], label: "Unconcerned", hint: "The definition says 'unconcerned' -- it doesn't register as mattering." },
    ],
    synonyms: ["unconcerned", "apathetic", "disinterested", "unmoved"],
    etymology: "Latin indifferens -- in (not) + differens (differing).",
  },
  // ── 30. zealous ──
  {
    word: "zealous",
    partOfSpeech: "adjective",
    definition: "Having or showing great energy or enthusiasm in pursuit of a cause or an objective.",
    keyConcepts: [
      { keyword: "great energy", matchTerms: ["great", "energy", "passion", "fervor", "ardor", "intensity", "fire", "enthusiasm", "vigor", "fervid", "fierce"], label: "Great energy or enthusiasm", hint: "The definition says 'great energy or enthusiasm' -- zealous implies burning intensity." },
      { keyword: "pursuit of a cause", matchTerms: ["pursuit", "cause", "objective", "goal", "mission", "purpose", "crusade", "dedicat", "commit", "devot", "driven", "determined"], label: "In pursuit of a cause or objective", hint: "The definition says 'in pursuit of a cause or an objective' -- zealousness is directed at something specific." },
    ],
    synonyms: ["passionate", "fervent", "enthusiastic", "fanatical"],
    etymology: "Greek zelos (zeal, ardor).",
  },
  // ── 31. poignant ──
  {
    word: "poignant",
    partOfSpeech: "adjective",
    definition: "Evoking a keen sense of sadness or regret.",
    keyConcepts: [
      { keyword: "keen", matchTerms: ["keen", "sharp", "deep", "intense", "profound", "piercing", "acute", "powerful", "moving", "touching", "emotional", "heartfelt"], label: "A keen, sharp feeling", hint: "The definition says 'keen sense' -- poignant sadness is sharp and piercing, not dull." },
      { keyword: "sadness or regret", matchTerms: ["sadness", "sad", "sorrow", "regret", "melanchol", "bittersweet", "wistful", "grief", "loss", "longing", "pain", "heartbreak", "tender"], label: "Of sadness or regret", hint: "The definition says 'sadness or regret' -- poignant is specifically about loss or what might have been." },
    ],
    synonyms: ["moving", "touching", "bittersweet", "heartfelt"],
    etymology: "French poignant, from poindre, from Latin pungere (to prick, sting).",
  },
  // ── 32. tenacious ──
  {
    word: "tenacious",
    partOfSpeech: "adjective",
    definition: "Tending to keep a firm hold of something; not readily relinquishing a position or principle.",
    keyConcepts: [
      { keyword: "firm hold", matchTerms: ["firm", "hold", "grip", "cling", "stick", "persist", "hang on", "not let go", "unyielding"], label: "Keeping a firm hold", hint: "The definition says 'keep a firm hold' -- tenacious means gripping tightly and not letting go." },
      { keyword: "not relinquishing", matchTerms: ["not relinquish", "refus", "won't give up", "determined", "resolut", "relentless", "dogged", "stubborn", "persever", "unwaver", "steadfast", "tireless"], label: "Not readily giving up", hint: "The definition says 'not readily relinquishing' -- tenacious people don't quit." },
    ],
    synonyms: ["persistent", "determined", "dogged", "resolute"],
    etymology: "Latin tenax, from tenere (to hold). Related to tenant, tenure, tendon.",
  },
  // ── 33. sanctimonious ──
  {
    word: "sanctimonious",
    partOfSpeech: "adjective",
    definition: "Making a show of being morally superior to other people.",
    keyConcepts: [
      { keyword: "show", matchTerms: ["show", "display", "perform", "pretend", "act", "flaunt", "parade", "postur", "project", "outward"], label: "Making a show of", hint: "The definition says 'making a show' -- it's a performance, not genuine virtue." },
      { keyword: "morally superior", matchTerms: ["moral", "superior", "righteous", "holier", "pious", "virtuous", "above", "better than", "high ground", "self-righteous", "smug"], label: "Being morally superior", hint: "The definition says 'morally superior to other people' -- looking down on others' morality." },
    ],
    synonyms: ["self-righteous", "pious", "holier-than-thou", "smug"],
    etymology: "Latin sanctimonia, from sanctus (holy).",
  },
  // ── 34. tangential ──
  {
    word: "tangential",
    partOfSpeech: "adjective",
    definition: "Relating to something only in a superficial or barely relevant way; diverging from a previous course.",
    keyConcepts: [
      { keyword: "barely relevant", matchTerms: ["barely", "hardly", "slight", "marginal", "peripher", "indirect", "remote", "loose", "tenuous", "weak connect"], label: "Barely relevant or peripheral", hint: "The definition says 'only in a superficial or barely relevant way' -- the connection is thin." },
      { keyword: "diverging", matchTerms: ["diverg", "stray", "wander", "off-topic", "off track", "deviat", "side", "digress", "unrelat", "away from"], label: "Diverging from the main point", hint: "The definition says 'diverging from a previous course' -- going off on a tangent." },
    ],
    synonyms: ["peripheral", "irrelevant", "digressive", "off-topic"],
    etymology: "Latin tangere (to touch). A tangent line in geometry touches a circle at one point.",
  },
  // ── 35. egregious ──
  {
    word: "egregious",
    partOfSpeech: "adjective",
    definition: "Outstandingly bad; shockingly terrible.",
    keyConcepts: [
      { keyword: "outstandingly", matchTerms: ["outstandingly", "remarkably", "extraordinarily", "exceptionally", "strikingly", "conspicuous", "flagrant", "blatant", "glaring", "obvious"], label: "Outstandingly or conspicuously", hint: "The definition says 'outstandingly' -- egregious things stand out for how bad they are." },
      { keyword: "bad", matchTerms: ["bad", "terrible", "awful", "shocking", "appalling", "atrocious", "abysmal", "horrendous", "heinous", "deplorab", "inexcusab", "unforgivab"], label: "Bad or shocking", hint: "The definition says 'shockingly terrible' -- egregious is bad to a degree that astonishes." },
    ],
    synonyms: ["flagrant", "appalling", "atrocious", "outrageous"],
    etymology: "Latin egregius -- e (out of) + grex (flock). Originally a compliment.",
  },
  // ── 36. incongruous ──
  {
    word: "incongruous",
    partOfSpeech: "adjective",
    definition: "Not in harmony or keeping with the surroundings or other aspects of something.",
    keyConcepts: [
      { keyword: "not in harmony", matchTerms: ["not in harmon", "clash", "conflict", "discord", "mismatch", "inconsisten", "incompatib", "jarring", "at odds", "doesn't fit"], label: "Not in harmony", hint: "The definition says 'not in harmony or keeping' -- incongruous things clash with their context." },
      { keyword: "surroundings", matchTerms: ["surround", "context", "environment", "setting", "rest", "other", "alongside", "out of place", "doesn't belong", "anomal", "odd", "strange"], label: "With the surroundings", hint: "The definition says 'with the surroundings or other aspects' -- it's about misfit within a context." },
    ],
    synonyms: ["incompatible", "jarring", "out of place", "mismatched"],
    etymology: "Latin incongruus -- in (not) + congruus, from congruere (to come together).",
  },
  // ── 37. anachronism ──
  {
    word: "anachronism",
    partOfSpeech: "noun",
    definition: "A thing belonging or appropriate to a period other than that in which it exists.",
    keyConcepts: [
      { keyword: "belonging to another period", matchTerms: ["belong", "another", "different", "period", "era", "time", "age", "epoch", "past", "future", "historical"], label: "Belonging to a different period", hint: "The definition says 'belonging to a period other than that in which it exists' -- it's from the wrong time." },
      { keyword: "out of its time", matchTerms: ["out of", "wrong time", "misplaced", "outdated", "old-fashioned", "obsolete", "archaic", "doesn't belong", "temporal", "historically inaccurate"], label: "Existing outside its proper time", hint: "The definition says 'other than that in which it exists' -- an anachronism is a time mismatch." },
    ],
    synonyms: ["relic", "throwback", "holdover"],
    etymology: "Greek anakhronismos -- ana (backward) + khronos (time).",
  },
  // ── 38. serendipity ──
  {
    word: "serendipity",
    partOfSpeech: "noun",
    definition: "The occurrence and development of events by chance in a happy or beneficial way.",
    keyConcepts: [
      { keyword: "by chance", matchTerms: ["chance", "accident", "coincidence", "unexpected", "unplanned", "random", "luck", "fortuit", "unforeseen"], label: "By chance or accident", hint: "The definition says 'by chance' -- serendipity isn't planned, it just happens." },
      { keyword: "happy or beneficial", matchTerms: ["happy", "beneficial", "fortunate", "lucky", "positive", "good", "pleasant", "wonderful", "delightful", "favorable", "favourabl", "reward"], label: "In a happy or beneficial way", hint: "The definition says 'in a happy or beneficial way' -- the chance occurrence turns out well." },
    ],
    synonyms: ["luck", "fortune", "chance", "happenstance"],
    etymology: "Coined by Horace Walpole in 1754 from the fairy tale The Three Princes of Serendip (Sri Lanka).",
  },
  // ── 39. vernacular ──
  {
    word: "vernacular",
    partOfSpeech: "noun",
    definition: "The language or dialect spoken by the ordinary people in a particular country or region.",
    keyConcepts: [
      { keyword: "language or dialect", matchTerms: ["language", "dialect", "speech", "tongue", "idiom", "lingo", "parlance", "jargon", "slang", "terminology"], label: "A language or dialect", hint: "The definition says 'the language or dialect' -- vernacular is a specific way of speaking." },
      { keyword: "ordinary people", matchTerms: ["ordinary", "common", "everyday", "regular", "native", "local", "popular", "people", "masses", "public", "folk"], label: "Spoken by ordinary people", hint: "The definition says 'spoken by the ordinary people' -- not academics or elites." },
      { keyword: "particular region", matchTerms: ["particular", "region", "country", "area", "place", "community", "group", "culture", "district", "territory"], label: "In a particular country or region", hint: "The definition says 'in a particular country or region' -- vernacular is geographically specific." },
    ],
    synonyms: ["dialect", "idiom", "slang", "common tongue"],
    etymology: "Latin vernaculus, from verna (a home-born slave).",
  },
  // ── 40. whimsical ──
  {
    word: "whimsical",
    partOfSpeech: "adjective",
    definition: "Playfully quaint or fanciful, especially in an appealing and amusing way.",
    keyConcepts: [
      { keyword: "playful", matchTerms: ["playful", "lightheart", "fun", "merry", "jovial", "cheery", "spirited", "joyful", "frolic", "impish", "mischiev"], label: "Playfully", hint: "The definition says 'playfully' -- whimsical has a lighthearted, child-like quality." },
      { keyword: "quaint or fanciful", matchTerms: ["quaint", "fanciful", "imaginat", "fantast", "dreamy", "magical", "fairy", "enchant", "quirky", "eccentric", "unusual", "peculiar", "charming"], label: "Quaint or fanciful", hint: "The definition says 'quaint or fanciful' -- whimsical things feel like they belong in a storybook." },
      { keyword: "appealing", matchTerms: ["appeal", "amus", "delight", "charm", "endear", "attract", "captur", "wonderful", "enchant", "lovable"], label: "In an appealing and amusing way", hint: "The definition says 'in an appealing and amusing way' -- whimsical is charming, not weird." },
    ],
    synonyms: ["fanciful", "playful", "quirky", "capricious"],
    etymology: "From whimsy, origin uncertain but probably Scandinavian. Possibly related to Old Norse hvima.",
  },
  // ── 41. corrosive ──
  {
    word: "corrosive",
    partOfSpeech: "adjective",
    definition: "Tending to cause damage or deterioration through persistent action over time.",
    keyConcepts: [
      { keyword: "causing damage", matchTerms: ["damage", "destruct", "deteriorat", "degrad", "decay", "erode", "eat away", "wear", "dissolv", "break down", "weaken"], label: "Causing damage or deterioration", hint: "The definition says 'cause damage or deterioration' -- corrosive things destroy over time." },
      { keyword: "gradual action", matchTerms: ["gradual", "slow", "persistent", "steady", "ongoing", "continuous", "relentless", "cumulative", "chemical", "over time", "progressive"], label: "Through persistent or gradual action", hint: "Corrosion is a slow process -- the damage accumulates gradually." },
    ],
    synonyms: ["destructive", "erosive", "caustic", "damaging"],
    etymology: "Latin corrodere -- con (intensive) + rodere (to gnaw). Related to rodent.",
  },
  // ── 42. inflammatory ──
  {
    word: "inflammatory",
    partOfSpeech: "adjective",
    definition: "Intended or tending to arouse angry or violent feelings.",
    keyConcepts: [
      { keyword: "intended to arouse", matchTerms: ["intended", "tending", "designed", "meant", "arous", "provok", "incit", "stir", "inflam", "trigger", "spark", "fuel"], label: "Intended to arouse", hint: "The definition says 'intended or tending to arouse' -- inflammatory things are provocative by design." },
      { keyword: "angry feelings", matchTerms: ["angry", "violent", "hostile", "outrage", "fury", "rage", "passion", "heated", "intense", "divisive", "confrontation", "aggression"], label: "Angry or violent feelings", hint: "The definition says 'angry or violent feelings' -- inflammatory speech pushes people toward anger." },
    ],
    synonyms: ["provocative", "incendiary", "seditious", "rabble-rousing"],
    etymology: "Latin inflammare -- in (into) + flammare (to flame).",
  },
  // ── 43. capricious ──
  {
    word: "capricious",
    partOfSpeech: "adjective",
    definition: "Given to sudden and unaccountable changes of mood or behavior.",
    keyConcepts: [
      { keyword: "sudden changes", matchTerms: ["sudden", "abrupt", "quick", "instant", "unexpected", "unpredictab", "erratic", "volatile", "without warning"], label: "Sudden changes", hint: "The definition says 'sudden' -- capricious shifts happen fast and without warning." },
      { keyword: "unaccountable", matchTerms: ["unaccountab", "unexplain", "no reason", "without cause", "irrational", "arbitrary", "whimsical", "random", "illogical"], label: "Unaccountable or unexplained", hint: "The definition says 'unaccountable' -- there's no discernible reason for the change." },
      { keyword: "mood or behavior", matchTerms: ["mood", "behavior", "behaviour", "temperament", "attitude", "feeling", "mind", "opinion", "decision", "direction"], label: "Of mood or behavior", hint: "The definition says 'mood or behavior' -- capricious applies to how someone feels and acts." },
    ],
    synonyms: ["fickle", "unpredictable", "mercurial", "erratic"],
    etymology: "Italian capriccioso, from capriccio -- possibly from capra (goat).",
  },
  // ── 44. lethargic ──
  {
    word: "lethargic",
    partOfSpeech: "adjective",
    definition: "Affected by a lack of energy or enthusiasm; sluggish and apathetic.",
    keyConcepts: [
      { keyword: "lack of energy", matchTerms: ["lack", "energy", "tired", "fatigue", "exhaust", "weary", "drowsy", "slow", "sluggish", "dragging", "listless"], label: "Lacking energy", hint: "The definition says 'lack of energy' -- lethargic means your body feels heavy and slow." },
      { keyword: "apathetic", matchTerms: ["apathetic", "indifferen", "unmotivat", "enthusiasm", "no interest", "no drive", "no passion", "uncar", "disengag", "passive"], label: "Lacking enthusiasm; apathetic", hint: "The definition says 'sluggish and apathetic' -- lethargic affects both body and mind." },
    ],
    synonyms: ["sluggish", "listless", "torpid", "languid"],
    etymology: "Greek lethargia, from lethe + argos (idle). In Greek myth, Lethe was a river in the underworld.",
  },
  // ── 45. derivative ──
  {
    word: "derivative",
    partOfSpeech: "adjective",
    definition: "Imitative of the work of another person, and usually disapproved of for that reason.",
    keyConcepts: [
      { keyword: "imitative", matchTerms: ["imitat", "copy", "copying", "borrowed", "unoriginal", "reproduc", "mimic", "rehash", "plagiari", "stolen", "lifted"], label: "Imitative or copied", hint: "The definition says 'imitative of the work of another person' -- derivative means it's not original." },
      { keyword: "disapproved", matchTerms: ["disapprov", "negative", "criticism", "uncreative", "stale", "uninspir", "lacking", "no originality", "hackneyed", "formulaic", "clich", "generic"], label: "Usually disapproved of", hint: "The definition says 'usually disapproved of for that reason' -- calling something derivative is a criticism." },
    ],
    synonyms: ["unoriginal", "imitative", "copied", "secondhand"],
    altDefinitions: [
      {
        definition: "Something that is based on, derived from, or taken from another source; not original.",
        keyConcepts: [
          { keyword: "from another source", matchTerms: ["source", "another", "based on", "taken from", "derived", "origin", "secondary", "come from", "stem", "root", "related", "connected", "closely"], label: "From another source", hint: "A derivative comes from or is based on something else." },
          { keyword: "not original", matchTerms: ["not original", "unoriginal", "secondary", "borrow", "adapt", "copy", "reproduc", "offshoot", "spinoff", "byproduct", "variant"], label: "Not original; secondary", hint: "A derivative is not the original -- it's something produced from it." },
        ],
      },
    ],
  },
  // ── 46. antithesis ──
  {
    word: "antithesis",
    partOfSpeech: "noun",
    definition: "A person or thing that is the direct opposite of someone or something else.",
    keyConcepts: [
      { keyword: "direct opposite", matchTerms: ["opposite", "contrary", "reverse", "contrast", "contradicting", "polar", "counter", "inverse", "antithetical", "opposing", "opposed"], label: "The direct opposite", hint: "The definition says 'the direct opposite' -- antithesis is not just different, it's diametrically opposed." },
      { keyword: "of someone or something", matchTerms: ["someone", "something", "person", "thing", "other", "another", "compared to", "versus", "against"], label: "Of someone or something else", hint: "The definition says 'of someone or something else' -- antithesis exists in relation to another thing." },
    ],
    synonyms: ["opposite", "contrary", "reverse", "converse"],
    etymology: "Greek antithesis -- anti (against) + thesis (a setting, placing).",
  },
  // ── 47. unequivocal ──
  {
    word: "unequivocal",
    partOfSpeech: "adjective",
    definition: "Leaving no doubt; unambiguous.",
    keyConcepts: [
      { keyword: "no doubt", matchTerms: ["no doubt", "certain", "definit", "absolute", "undeniab", "indisputab", "unmistakab", "conclusiv", "decisive", "beyond question"], label: "Leaving no doubt", hint: "The definition says 'leaving no doubt' -- unequivocal means there's zero room for uncertainty." },
      { keyword: "unambiguous", matchTerms: ["unambiguous", "clear", "plain", "explicit", "direct", "straightforward", "obvious", "transparent", "crystal clear", "black and white"], label: "Unambiguous and clear", hint: "The definition says 'unambiguous' -- the meaning is completely clear." },
    ],
    synonyms: ["clear", "definite", "absolute", "unambiguous"],
    etymology: "Latin un- (not) + aequivocus -- aequus (equal) + vocare (to call).",
  },
  // ── 48. pretextual ──
  {
    word: "pretextual",
    partOfSpeech: "adjective",
    definition: "Using a false reason or excuse to disguise the real intention behind an action.",
    keyConcepts: [
      { keyword: "false reason", matchTerms: ["false", "fake", "fabricat", "made up", "invented", "untrue", "dishonest", "reason", "excuse", "justification", "pretext"], label: "A false reason or excuse", hint: "The definition says 'a false reason or excuse' -- the stated purpose isn't the real one." },
      { keyword: "disguise real intention", matchTerms: ["disguis", "hide", "conceal", "cover", "mask", "real", "true", "actual", "intention", "motive", "purpose", "ulterior"], label: "To disguise the real intention", hint: "The definition says 'to disguise the real intention' -- there's a hidden agenda." },
    ],
    synonyms: ["deceptive", "misleading", "disingenuous"],
    etymology: "Latin praetextum, from praetexere -- prae (in front) + texere (to weave).",
  },
  // ── 49-100: NEW WORDS ──
  {
    word: "complacency",
    partOfSpeech: "noun",
    definition: "A feeling of smug or uncritical satisfaction with oneself or one's achievements.",
    keyConcepts: [
      { keyword: "smug satisfaction", matchTerms: ["smug", "self-satisf", "pleased", "content", "comfortable", "satisfied", "proud", "unconcern"], label: "Smug satisfaction", hint: "The definition says 'smug or uncritical satisfaction' -- it's self-congratulatory, not humble." },
      { keyword: "uncritical", matchTerms: ["uncritical", "unaware", "blind", "ignoran", "oblivious", "naiv", "overlook", "fail to notice", "without question"], label: "Uncritical and unaware", hint: "The definition says 'uncritical' -- complacent people don't examine themselves or their situation." },
    ],
    synonyms: ["self-satisfaction", "smugness", "contentment"],
    etymology: "Latin complacentia, from complacere -- com (intensive) + placere (to please).",
  },
  {
    word: "nonchalant",
    partOfSpeech: "adjective",
    definition: "Feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm.",
    keyConcepts: [
      { keyword: "casually calm", matchTerms: ["casual", "calm", "relaxed", "cool", "laid-back", "easygoing", "unruffled", "composed", "collected"], label: "Casually calm and relaxed", hint: "The definition says 'casually calm and relaxed' -- nonchalance is effortless coolness." },
      { keyword: "not displaying anxiety", matchTerms: ["not display", "not show", "no anxiety", "no interest", "no enthusiasm", "indifferen", "unbother", "uncar", "unfaz", "unmov"], label: "Not displaying concern or interest", hint: "The definition says 'not displaying anxiety, interest, or enthusiasm' -- the absence of visible emotion." },
    ],
    synonyms: ["casual", "indifferent", "unconcerned", "blasé"],
    etymology: "French nonchalant -- non (not) + chaloir, from Latin calere (to be warm).",
  },
  {
    word: "vindictive",
    partOfSpeech: "adjective",
    definition: "Having or showing a strong or unreasoning desire for revenge.",
    keyConcepts: [
      { keyword: "strong desire", matchTerms: ["strong", "intense", "powerful", "burning", "deep", "fierce", "unreason", "obsessiv", "compulsiv"], label: "A strong or unreasoning desire", hint: "The definition says 'strong or unreasoning' -- the desire for revenge is intense and may be irrational." },
      { keyword: "revenge", matchTerms: ["revenge", "retaliat", "vengeance", "payback", "get back", "punish", "spite", "avenge", "retribut", "settle a score"], label: "For revenge", hint: "The definition says 'desire for revenge' -- vindictive people want to hurt back." },
    ],
    synonyms: ["vengeful", "spiteful", "retaliatory", "revengeful"],
    etymology: "Latin vindicta, from vindicare (to claim, avenge). Related to vindicate.",
  },
  {
    word: "patronizing",
    partOfSpeech: "adjective",
    definition: "Apparently kind or helpful but betraying a feeling of superiority.",
    keyConcepts: [
      { keyword: "apparently kind", matchTerms: ["apparent", "seeming", "kind", "helpful", "benevolent", "generous", "surface", "outward", "pretend", "act of"], label: "Apparently kind or helpful", hint: "The definition says 'apparently kind or helpful' -- the surface looks positive." },
      { keyword: "betraying superiority", matchTerms: ["betray", "superior", "condescend", "look down", "beneath", "above", "arrogant", "haughty", "talk down", "belittl", "demeaning"], label: "Betraying a feeling of superiority", hint: "The definition says 'betraying a feeling of superiority' -- the kindness is a disguise for looking down." },
    ],
    synonyms: ["condescending", "supercilious", "demeaning"],
    etymology: "Latin patronus, from pater (father).",
  },
  {
    word: "obtuse",
    partOfSpeech: "adjective",
    definition: "Annoyingly insensitive or slow to understand.",
    keyConcepts: [
      { keyword: "annoyingly", matchTerms: ["annoy", "frustrat", "irritat", "infuriat", "exasperat", "maddening", "willful", "deliberat"], label: "Annoyingly", hint: "The definition says 'annoyingly' -- obtuse implies the slow understanding irritates others." },
      { keyword: "slow to understand", matchTerms: ["slow", "understand", "dense", "thick", "stupid", "dull", "dim", "clueless", "insensitiv", "not get it", "miss the point", "unaware"], label: "Slow to understand or insensitive", hint: "The definition says 'insensitive or slow to understand' -- obtuse people don't pick up on what's obvious." },
    ],
    synonyms: ["dense", "thick", "dim", "slow"],
    etymology: "Latin obtusus, from obtundere -- ob (against) + tundere (to beat).",
  },
  {
    word: "grandiose",
    partOfSpeech: "adjective",
    definition: "Impressive or magnificent in appearance or style, but often excessively so or intended to seem more important than it really is.",
    keyConcepts: [
      { keyword: "impressive", matchTerms: ["impress", "magnific", "grand", "extravagan", "lavish", "elaborate", "spectacul", "ambitio", "epic", "monumental"], label: "Impressive or magnificent", hint: "The definition says 'impressive or magnificent' -- grandiose has genuine scale." },
      { keyword: "excessively so", matchTerms: ["excess", "over the top", "overblown", "inflat", "exaggerat", "pretentious", "pompous", "bombastic", "overdon", "too much"], label: "Excessively or self-importantly", hint: "The definition says 'often excessively so' -- grandiose crosses the line from impressive to absurd." },
    ],
    synonyms: ["extravagant", "pompous", "ostentatious", "magnificent"],
    etymology: "Italian grandioso, from Latin grandis (great, large).",
  },
  {
    word: "existential",
    partOfSpeech: "adjective",
    definition: "Relating to or concerned with existence, especially human existence and its meaning or purpose.",
    keyConcepts: [
      { keyword: "existence", matchTerms: ["exist", "being", "life", "living", "reality", "the human condition", "mortal", "alive"], label: "Relating to existence", hint: "The definition says 'relating to existence' -- existential concerns the fundamental fact of being." },
      { keyword: "meaning or purpose", matchTerms: ["meaning", "purpose", "significanc", "why", "point", "reason for", "worth", "value of life", "identity", "self", "who we are"], label: "Meaning or purpose of existence", hint: "The definition says 'meaning or purpose' -- existential questions ask why we're here." },
    ],
    synonyms: ["philosophical", "metaphysical", "fundamental"],
    etymology: "Latin existere -- ex (out) + sistere (to stand).",
  },
  {
    word: "sanguine",
    partOfSpeech: "adjective",
    definition: "Optimistic or positive, especially in a difficult situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimist", "positive", "hopeful", "confident", "upbeat", "cheerful", "encouraged", "buoyant", "bright", "assured"], label: "Optimistic or positive", hint: "The definition says 'optimistic or positive' -- sanguine means maintaining hope and confidence." },
      { keyword: "difficult situation", matchTerms: ["difficult", "situation", "adversity", "challenge", "trouble", "hardship", "despite", "even when", "regardless", "in the face of"], label: "Especially in difficulty", hint: "The definition says 'especially in a difficult situation' -- sanguine optimism persists when things are hard." },
    ],
    synonyms: ["optimistic", "hopeful", "confident", "buoyant"],
    etymology: "Latin sanguineus, from sanguis (blood). From the medieval four humors.",
  },
  {
    word: "vitriol",
    partOfSpeech: "noun",
    definition: "Cruel and bitter criticism or speech.",
    keyConcepts: [
      { keyword: "cruel", matchTerms: ["cruel", "harsh", "vicious", "savage", "brutal", "merciless", "venom", "poison", "toxic", "malicious"], label: "Cruel and harsh", hint: "The definition says 'cruel' -- vitriol is speech designed to wound." },
      { keyword: "bitter criticism", matchTerms: ["bitter", "criticism", "attack", "hostil", "hatr", "contempt", "abus", "scathing", "caustic", "condemn", "denounc", "tirade"], label: "Bitter criticism or speech", hint: "The definition says 'bitter criticism or speech' -- vitriol is expressed through language." },
    ],
    synonyms: ["venom", "hostility", "bile", "invective"],
    etymology: "Latin vitriolum, from vitrum (glass) -- the crystals of sulfuric acid look like glass.",
  },
  {
    word: "hubris",
    partOfSpeech: "noun",
    definition: "Excessive pride or self-confidence, especially when it leads to downfall.",
    keyConcepts: [
      { keyword: "excessive pride", matchTerms: ["excess", "pride", "arrogant", "overconfiden", "self-confiden", "ego", "conceit", "vanity", "haughti", "boastful"], label: "Excessive pride or self-confidence", hint: "The definition says 'excessive pride or self-confidence' -- hubris is arrogance beyond measure." },
      { keyword: "leads to downfall", matchTerms: ["downfall", "ruin", "destruction", "failure", "collapse", "fall", "demise", "undoing", "consequenc", "punishment", "nemesis"], label: "Leading to downfall", hint: "The definition says 'especially when it leads to downfall' -- hubris carries the seeds of its own destruction." },
    ],
    synonyms: ["arrogance", "conceit", "overconfidence", "pride"],
    etymology: "Greek hybris. Central theme in Greek tragedy.",
  },
  {
    word: "platitude",
    partOfSpeech: "noun",
    definition: "A remark or statement that has been used too often to be interesting or thoughtful.",
    keyConcepts: [
      { keyword: "used too often", matchTerms: ["used too often", "overused", "cliche", "trite", "banal", "stale", "worn out", "hackneyed", "tired", "repetit", "common"], label: "Used too often", hint: "The definition says 'used too often' -- platitudes have been said so many times they've lost impact." },
      { keyword: "not interesting or thoughtful", matchTerms: ["not interest", "not thoughtful", "meaningless", "empty", "shallow", "superficial", "uninspir", "hollow", "vapid", "dull", "boring", "generic"], label: "Not interesting or thoughtful", hint: "The definition says 'to be interesting or thoughtful' -- platitudes lack genuine insight." },
    ],
    synonyms: ["cliché", "truism", "banality", "bromide"],
    etymology: "French platitude, from plat (flat).",
  },
  {
    word: "subversive",
    partOfSpeech: "adjective",
    definition: "Seeking or intended to undermine the power and authority of an established system or institution.",
    keyConcepts: [
      { keyword: "undermine", matchTerms: ["undermin", "overthrow", "destabiliz", "weaken", "challenge", "disrupt", "threaten", "subvert", "erode", "topple"], label: "Seeking to undermine", hint: "The definition says 'seeking to undermine' -- subversive activity works to weaken from within." },
      { keyword: "established system", matchTerms: ["establish", "system", "institution", "authority", "power", "government", "regime", "order", "status quo", "structur", "rule"], label: "An established system or authority", hint: "The definition says 'the power and authority of an established system' -- subversion targets the existing order." },
    ],
    synonyms: ["revolutionary", "seditious", "rebellious", "dissident"],
    etymology: "Latin subversus, from subvertere -- sub (under) + vertere (to turn).",
  },
  {
    word: "cantankerous",
    partOfSpeech: "adjective",
    definition: "Bad-tempered, argumentative, and uncooperative.",
    keyConcepts: [
      { keyword: "bad-tempered", matchTerms: ["bad-temper", "grumpy", "grouchy", "cranky", "irritabl", "cross", "surly", "curmudgeon", "ornery", "peevish", "crotchety"], label: "Bad-tempered or grumpy", hint: "The definition says 'bad-tempered' -- cantankerous people are perpetually in a bad mood." },
      { keyword: "argumentative", matchTerms: ["argumentat", "quarrelsom", "combativ", "contentious", "belligeren", "confrontation", "disagreeabl", "difficult", "uncooperat", "stubborn"], label: "Argumentative and uncooperative", hint: "The definition says 'argumentative and uncooperative' -- they fight and resist at every turn." },
    ],
    synonyms: ["grumpy", "irritable", "quarrelsome", "curmudgeonly"],
    etymology: "Origin uncertain -- possibly from Middle English contak + -erous, or Anglo-Irish alteration of contentious.",
  },
  {
    word: "insatiable",
    partOfSpeech: "adjective",
    definition: "Impossible to satisfy; always wanting more.",
    keyConcepts: [
      { keyword: "impossible to satisfy", matchTerms: ["impossible", "never satisf", "unsatisf", "unquench", "unfill", "bottomless", "endless", "limit", "inexhaust"], label: "Impossible to satisfy", hint: "The definition says 'impossible to satisfy' -- no amount is ever enough." },
      { keyword: "always wanting more", matchTerms: ["always", "more", "constant", "never enough", "craving", "hunger", "thirst", "desire", "greed", "voracious", "ravenous"], label: "Always wanting more", hint: "The definition says 'always wanting more' -- the appetite is perpetual." },
    ],
    synonyms: ["voracious", "unquenchable", "greedy", "ravenous"],
    etymology: "Latin insatiabilis -- in (not) + satiare, from satis (enough).",
  },
  {
    word: "belligerent",
    partOfSpeech: "adjective",
    definition: "Hostile and aggressive; eager to fight or argue.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostile", "aggressive", "combativ", "antagonist", "confrontation", "threatening", "menacing", "warlike", "pugnacious"], label: "Hostile and aggressive", hint: "The definition says 'hostile and aggressive' -- belligerent people radiate threat." },
      { keyword: "eager to fight", matchTerms: ["eager", "fight", "argue", "quarrel", "conflict", "combative", "looking for", "itching", "provocat", "contentious", "feisty"], label: "Eager to fight or argue", hint: "The definition says 'eager to fight or argue' -- belligerent people actively seek confrontation." },
    ],
    synonyms: ["aggressive", "combative", "pugnacious", "hostile"],
    etymology: "Latin belligerare -- bellum (war) + gerere (to carry on). Related to bellicose.",
  },
  {
    word: "auspicious",
    partOfSpeech: "adjective",
    definition: "Conducive to success; favorable.",
    keyConcepts: [
      { keyword: "conducive to success", matchTerms: ["success", "conduciv", "lead to", "promis", "encouraging", "propitious", "fortunate", "opportun", "bode well"], label: "Conducive to success", hint: "The definition says 'conducive to success' -- auspicious conditions point toward a good outcome." },
      { keyword: "favorable", matchTerms: ["favorable", "favourabl", "positive", "good", "lucky", "hopeful", "bright", "optimistic", "advantageous", "beneficial"], label: "Favorable", hint: "The definition says 'favorable' -- things look good, conditions are right." },
    ],
    synonyms: ["favorable", "promising", "propitious", "fortunate"],
    etymology: "Latin auspicium -- avis (bird) + specere (to look).",
  },
  {
    word: "solicitous",
    partOfSpeech: "adjective",
    definition: "Characterized by or showing excessive concern or attention for someone's well-being.",
    keyConcepts: [
      { keyword: "excessive concern", matchTerms: ["excess", "concern", "worry", "anxious", "attentiv", "caring", "considerat", "doting", "hovering", "overprotectiv"], label: "Excessive concern or attention", hint: "The definition says 'excessive concern or attention' -- solicitous care can feel smothering." },
      { keyword: "for well-being", matchTerms: ["well-being", "welfare", "comfort", "health", "happiness", "safety", "needs", "care for", "look after", "tend to"], label: "For someone's well-being", hint: "The definition says 'for someone's well-being' -- the focus is on keeping someone comfortable." },
    ],
    synonyms: ["attentive", "concerned", "caring", "doting"],
    etymology: "Latin sollicitus -- sollus (whole, entire) + citus (set in motion).",
  },
  {
    word: "duplicitous",
    partOfSpeech: "adjective",
    definition: "Deceitful; speaking or acting in two different ways concerning the same matter to different people.",
    keyConcepts: [
      { keyword: "deceitful", matchTerms: ["deceit", "dishonest", "lying", "fraudulent", "deceptiv", "treacherous", "untrustworthy", "scheming"], label: "Deceitful", hint: "The definition says 'deceitful' -- duplicitous people cannot be trusted." },
      { keyword: "two different ways", matchTerms: ["two", "double", "different", "contradicting", "both sides", "two-faced", "say one thing", "do another", "inconsisten", "playing"], label: "Acting two different ways", hint: "The definition says 'two different ways' -- saying one thing to one person and something different to another." },
    ],
    synonyms: ["deceitful", "two-faced", "treacherous", "dishonest"],
    etymology: "Latin duplicitas, from duplex -- duo (two) + plicare (to fold).",
  },
  {
    word: "sycophant",
    partOfSpeech: "noun",
    definition: "A person who acts obsequiously toward someone important in order to gain advantage.",
    keyConcepts: [
      { keyword: "obsequiously", matchTerms: ["obsequi", "flatter", "grovel", "fawn", "kowtow", "suck up", "boot-lick", "toady", "cringe", "servile", "submissiv", "ingratiat"], label: "Acts obsequiously or fawningly", hint: "The definition says 'acts obsequiously' -- the behavior is excessively servile." },
      { keyword: "gain advantage", matchTerms: ["gain", "advantage", "benefit", "favor", "favour", "profit", "self-interest", "opportuni", "advance", "reward", "ulterior"], label: "In order to gain advantage", hint: "The definition says 'in order to gain advantage' -- the flattery isn't genuine, it's strategic." },
    ],
    synonyms: ["flatterer", "toady", "yes-man", "bootlicker"],
    etymology: "Greek sykophantes -- sykon (fig) + phainein (to show).",
  },
  {
    word: "nepotism",
    partOfSpeech: "noun",
    definition: "The practice of favoring relatives or friends, especially by giving them jobs, regardless of merit.",
    keyConcepts: [
      { keyword: "favoring relatives", matchTerms: ["favor", "favour", "preferenc", "relativ", "family", "friend", "connection", "insider", "cronyism", "kin", "son", "daughter"], label: "Favoring relatives or friends", hint: "The definition says 'favoring relatives or friends' -- nepotism is about personal relationships." },
      { keyword: "regardless of merit", matchTerms: ["regardless", "merit", "qualif", "competence", "deserv", "earn", "abilit", "skill", "talent", "unqualif", "undeserv"], label: "Regardless of merit or qualifications", hint: "The definition says 'regardless of merit' -- the job goes to who you know, not what you can do." },
    ],
    synonyms: ["favoritism", "cronyism", "bias", "partiality"],
  },
  {
    word: "scapegoat",
    partOfSpeech: "noun",
    definition: "A person who is blamed for the wrongdoings or mistakes of others.",
    keyConcepts: [
      { keyword: "blamed", matchTerms: ["blamed", "fault", "accus", "held responsib", "singled out", "target", "punish", "condemn"], label: "Blamed or held responsible", hint: "The definition says 'blamed' -- the scapegoat receives the punishment." },
      { keyword: "wrongdoings of others", matchTerms: ["others", "wrongdoing", "mistake", "someone else", "not their fault", "innocent", "undeserv", "unfair", "instead of", "in place of", "substitute"], label: "For the wrongdoings of others", hint: "The definition says 'wrongdoings or mistakes of others' -- the blame is misplaced." },
    ],
    synonyms: ["fall guy", "whipping boy", "patsy"],
  },
  {
    word: "solipsistic",
    partOfSpeech: "adjective",
    definition: "Characterized by extreme self-absorption or the belief that one's own experience is the only reality that matters.",
    keyConcepts: [
      { keyword: "extreme self-absorption", matchTerms: ["self-absorb", "self-center", "egocentric", "narcissist", "self-obsess", "self-involv", "inward", "preoccup"], label: "Extreme self-absorption", hint: "The definition says 'extreme self-absorption' -- total focus on the self." },
      { keyword: "own experience only reality", matchTerms: ["own experience", "only reality", "only matter", "perspective", "world revolv", "nothing else", "exist", "others don't matter", "disregard", "ignor"], label: "Own experience is the only reality", hint: "The definition says 'one's own experience is the only reality that matters' -- other people's experiences are dismissed." },
    ],
    synonyms: ["self-absorbed", "egocentric", "narcissistic"],
  },
  {
    word: "perfidious",
    partOfSpeech: "adjective",
    definition: "Deceitful and untrustworthy; characterized by betrayal of trust.",
    keyConcepts: [
      { keyword: "deceitful", matchTerms: ["deceit", "dishonest", "untrustworthy", "treacherous", "duplicitous", "lying", "false", "fraud"], label: "Deceitful and untrustworthy", hint: "The definition says 'deceitful and untrustworthy' -- perfidious people are fundamentally dishonest." },
      { keyword: "betrayal of trust", matchTerms: ["betray", "trust", "disloy", "backstab", "traitor", "double-cross", "break faith", "violat"], label: "Betrayal of trust", hint: "The definition says 'betrayal of trust' -- what makes it perfidious is that trust was given and broken." },
    ],
    synonyms: ["treacherous", "disloyal", "faithless", "traitorous"],
  },
  {
    word: "iconoclastic",
    partOfSpeech: "adjective",
    definition: "Characterized by attacking or challenging cherished beliefs or established values and practices.",
    keyConcepts: [
      { keyword: "attacking or challenging", matchTerms: ["attack", "challeng", "reject", "defy", "overthrow", "question", "criticiz", "oppos", "rebel", "destroy", "tear down", "dismantle"], label: "Attacking or challenging", hint: "The definition says 'attacking or challenging' -- iconoclasts don't just disagree, they actively push back." },
      { keyword: "cherished beliefs", matchTerms: ["cherish", "belief", "establish", "tradition", "convention", "norm", "institution", "value", "practice", "sacred", "orthodoxy", "status quo"], label: "Cherished beliefs or established values", hint: "The definition says 'cherished beliefs or established values' -- the targets are things people hold dear." },
    ],
    synonyms: ["rebellious", "heretical", "nonconformist", "radical"],
  },
  {
    word: "schadenfreude",
    partOfSpeech: "noun",
    definition: "Pleasure derived from the misfortune or suffering of others.",
    keyConcepts: [
      { keyword: "pleasure", matchTerms: ["pleasure", "enjoyment", "delight", "satisfaction", "joy", "happiness", "amusement", "glee", "gratif"], label: "Pleasure or enjoyment", hint: "The definition says 'pleasure' -- schadenfreude is a positive feeling for the person experiencing it." },
      { keyword: "misfortune of others", matchTerms: ["misfortune", "suffering", "pain", "failure", "bad luck", "trouble", "downfall", "hardship", "loss", "others", "someone else"], label: "From others' misfortune", hint: "The definition says 'from the misfortune or suffering of others' -- the pleasure is specifically at someone else's expense." },
    ],
    synonyms: ["gloating", "malicious joy"],
  },
  {
    word: "euphemism",
    partOfSpeech: "noun",
    definition: "A mild or indirect word or expression substituted for one considered too harsh or blunt.",
    keyConcepts: [
      { keyword: "mild or indirect", matchTerms: ["mild", "indirect", "gentle", "soft", "polite", "tactful", "delicate", "diplomatic", "inoffensiv", "neutral"], label: "A mild or indirect expression", hint: "The definition says 'mild or indirect' -- euphemisms soften the language." },
      { keyword: "substituted for harsh", matchTerms: ["substitut", "replac", "instead of", "in place of", "harsh", "blunt", "offensive", "unpleasant", "taboo", "direct", "uncomfortab", "sensitiv"], label: "Substituted for something too harsh", hint: "The definition says 'substituted for one considered too harsh or blunt' -- there's an uncomfortable truth being softened." },
    ],
    synonyms: ["understatement", "polite term", "circumlocution"],
  },
  {
    word: "machiavellian",
    partOfSpeech: "adjective",
    definition: "Cunning, scheming, and unscrupulous, especially in politics or advancing one's career.",
    keyConcepts: [
      { keyword: "cunning", matchTerms: ["cunning", "scheming", "calculat", "manipulat", "craftiy", "shrewd", "deceptiv", "devious", "clever", "strategic", "conniv"], label: "Cunning and scheming", hint: "The definition says 'cunning, scheming' -- machiavellian implies strategic ruthlessness." },
      { keyword: "unscrupulous", matchTerms: ["unscrupul", "ruthless", "immoral", "amoral", "no ethic", "dishonest", "corrupt", "underhanded", "exploit", "self-serving", "ends justify the means"], label: "Unscrupulous", hint: "The definition says 'unscrupulous' -- willing to do anything, regardless of morality, to win." },
    ],
    synonyms: ["cunning", "devious", "ruthless", "scheming"],
  },
  {
    word: "vapid",
    partOfSpeech: "adjective",
    definition: "Offering nothing that is stimulating or challenging; bland and dull.",
    keyConcepts: [
      { keyword: "nothing stimulating", matchTerms: ["nothing", "stimulat", "interest", "substance", "depth", "content", "intellectual", "thought", "engag", "compel", "empty"], label: "Nothing stimulating or challenging", hint: "The definition says 'nothing that is stimulating or challenging' -- vapid things are devoid of substance." },
      { keyword: "bland and dull", matchTerms: ["bland", "dull", "boring", "flat", "lifeless", "insipid", "tedious", "uninspir", "lacklust", "mediocre", "forgettab"], label: "Bland and dull", hint: "The definition says 'bland and dull' -- vapid is the absence of anything interesting." },
    ],
    synonyms: ["insipid", "bland", "dull", "vacuous"],
  },
  {
    word: "acrimonious",
    partOfSpeech: "adjective",
    definition: "Angry and bitter, especially in speech or debate.",
    keyConcepts: [
      { keyword: "angry and bitter", matchTerms: ["angry", "bitter", "hostile", "resentful", "rancorous", "venom", "harsh", "sharp", "nasty", "vicious", "spiteful"], label: "Angry and bitter", hint: "The definition says 'angry and bitter' -- acrimonious exchanges are poisoned by hostility." },
      { keyword: "in speech or debate", matchTerms: ["speech", "debate", "argument", "discussion", "exchang", "dispute", "quarrel", "conflict", "confrontat", "words", "language"], label: "Especially in speech or debate", hint: "The definition says 'especially in speech or debate' -- acrimonious typically describes heated exchanges." },
    ],
    synonyms: ["bitter", "hostile", "rancorous", "caustic"],
  },
  {
    word: "mercurial",
    partOfSpeech: "adjective",
    definition: "Subject to sudden or unpredictable changes of mood or mind.",
    keyConcepts: [
      { keyword: "sudden changes", matchTerms: ["sudden", "rapid", "quick", "abrupt", "unpredictab", "erratic", "volatile", "unstable", "without warning", "unexpected"], label: "Sudden or unpredictable changes", hint: "The definition says 'sudden or unpredictable' -- mercurial shifts are impossible to forecast." },
      { keyword: "mood or mind", matchTerms: ["mood", "mind", "temperament", "emotion", "behavior", "behaviour", "feeling", "disposition", "attitude", "demeanor"], label: "Of mood or mind", hint: "The definition says 'mood or mind' -- mercurial describes an emotional or mental state, not physical change." },
    ],
    synonyms: ["volatile", "unpredictable", "capricious", "fickle"],
  },
  {
    word: "pernicious",
    partOfSpeech: "adjective",
    definition: "Having a harmful effect, especially in a gradual or subtle way.",
    keyConcepts: [
      { keyword: "harmful", matchTerms: ["harmful", "damage", "destruct", "injurious", "detriment", "toxic", "deadly", "lethal", "malign", "ruinous", "devastating"], label: "Having a harmful effect", hint: "The definition says 'having a harmful effect' -- pernicious things cause real damage." },
      { keyword: "gradual or subtle", matchTerms: ["gradual", "subtle", "slow", "insidious", "creeping", "imperceptib", "unnoticed", "hidden", "stealth", "incremental"], label: "Especially gradually or subtly", hint: "The definition says 'especially in a gradual or subtle way' -- the harm sneaks up on you." },
    ],
    synonyms: ["harmful", "insidious", "destructive", "malicious"],
  },
  {
    word: "pedestal",
    partOfSpeech: "noun",
    definition: "A position of great respect or admiration in which someone is placed, often unrealistically.",
    keyConcepts: [
      { keyword: "great respect", matchTerms: ["respect", "admir", "rever", "worship", "idealiz", "elevat", "exalt", "glorif", "esteem", "venerat"], label: "A position of great respect", hint: "The definition says 'great respect or admiration' -- putting someone on a pedestal means looking up to them." },
      { keyword: "often unrealistically", matchTerms: ["unrealistic", "idealis", "exaggerat", "inflat", "perfect", "flawless", "beyond reproach", "too high", "overestimat", "illusion"], label: "Often unrealistically", hint: "The definition says 'often unrealistically' -- the admiration may not match the reality." },
    ],
    synonyms: ["pinnacle", "high regard", "idealization"],
  },
  {
    word: "equivocate",
    partOfSpeech: "verb",
    definition: "To use ambiguous language so as to conceal the truth or avoid committing to a position.",
    keyConcepts: [
      { keyword: "ambiguous language", matchTerms: ["ambiguous", "vague", "unclear", "evasiv", "indirect", "mislead", "hedge", "waffle", "noncommitt", "double-speak"], label: "Using ambiguous language", hint: "The definition says 'use ambiguous language' -- the words are deliberately unclear." },
      { keyword: "conceal truth", matchTerms: ["conceal", "hide", "avoid", "truth", "position", "commit", "evade", "dodge", "sidestep", "not answer", "mislead"], label: "To conceal truth or avoid committing", hint: "The definition says 'conceal the truth or avoid committing to a position' -- equivocation has a deceptive purpose." },
    ],
    synonyms: ["hedge", "prevaricate", "dodge", "waffle"],
  },
  {
    word: "perennial",
    partOfSpeech: "adjective",
    definition: "Lasting for an indefinite time; enduring or continually recurring.",
    keyConcepts: [
      { keyword: "lasting indefinitely", matchTerms: ["lasting", "indefinite", "permanent", "endur", "persistent", "ongoing", "eternal", "everlasting", "timeless", "abiding"], label: "Lasting indefinitely", hint: "The definition says 'lasting for an indefinite time' -- perennial things don't have an end date." },
      { keyword: "continually recurring", matchTerms: ["continual", "recurring", "repeated", "cyclical", "constant", "perpetual", "chronic", "regular", "return", "come back"], label: "Enduring or continually recurring", hint: "The definition says 'continually recurring' -- perennial issues keep coming back." },
    ],
    synonyms: ["enduring", "perpetual", "persistent", "recurring"],
  },
  {
    word: "recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "obstinately uncooperative", matchTerms: ["obstinat", "uncooperat", "defiant", "stubborn", "resistant", "refusing", "rebellious", "willful", "disobedient", "intractab"], label: "Obstinately uncooperative", hint: "The definition says 'obstinately uncooperative' -- recalcitrant people dig in their heels." },
      { keyword: "toward authority", matchTerms: ["authority", "discipline", "rule", "control", "order", "instruction", "command", "regulation", "management", "power"], label: "Toward authority or discipline", hint: "The definition says 'toward authority or discipline' -- recalcitrance is aimed at those trying to impose order." },
    ],
    synonyms: ["defiant", "unruly", "disobedient", "obstinate"],
  },
  {
    word: "ambiguous",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; not having one obvious meaning.",
    keyConcepts: [
      { keyword: "more than one interpretation", matchTerms: ["more than one", "multiple", "several", "different", "various", "many", "two or more", "dual", "interpretation", "reading", "meaning"], label: "More than one interpretation", hint: "The definition says 'open to more than one interpretation' -- ambiguous things can be understood in multiple ways." },
      { keyword: "not obvious", matchTerms: ["not obvious", "unclear", "uncertain", "vague", "confus", "doubtful", "indefinit", "nebulous", "equivocal", "cryptic"], label: "Not having one obvious meaning", hint: "The definition says 'not having one obvious meaning' -- there's genuine uncertainty about what is meant." },
    ],
    synonyms: ["unclear", "vague", "equivocal", "cryptic"],
  },
  {
    word: "stoic",
    partOfSpeech: "adjective",
    definition: "Enduring pain or hardship without showing feelings or complaining.",
    keyConcepts: [
      { keyword: "enduring hardship", matchTerms: ["endur", "bear", "withstand", "tolerat", "suffer", "pain", "hardship", "difficult", "adversity", "struggle", "tough"], label: "Enduring pain or hardship", hint: "The definition says 'enduring pain or hardship' -- stoic people face difficulty without breaking." },
      { keyword: "without showing feelings", matchTerms: ["without show", "not show", "hide", "suppress", "conceal", "composure", "unemotional", "unmov", "impassive", "silent", "complain", "restrain", "calm"], label: "Without showing feelings or complaining", hint: "The definition says 'without showing feelings or complaining' -- the suffering is kept inside." },
    ],
    synonyms: ["impassive", "unemotional", "uncomplaining", "resigned"],
  },
  {
    word: "gregarious",
    partOfSpeech: "adjective",
    definition: "Fond of company; sociable and enjoying being with other people.",
    keyConcepts: [
      { keyword: "fond of company", matchTerms: ["fond", "company", "social", "sociable", "people", "outgoing", "extrovert", "friendly", "convivial", "genial"], label: "Fond of company", hint: "The definition says 'fond of company' -- gregarious people actively seek out others." },
      { keyword: "enjoying being with others", matchTerms: ["enjoy", "being with", "others", "group", "crowd", "gathering", "party", "commun", "togetherness", "companionship", "interact"], label: "Enjoying being with others", hint: "The definition says 'enjoying being with other people' -- it's a genuine preference, not just tolerance." },
    ],
    synonyms: ["sociable", "outgoing", "extroverted", "convivial"],
  },
  {
    word: "obsequious",
    partOfSpeech: "adjective",
    definition: "Obedient or attentive to an excessive or servile degree.",
    keyConcepts: [
      { keyword: "obedient or attentive", matchTerms: ["obedient", "attentiv", "compliant", "dutiful", "defer", "submissiv", "accommodat", "eager to please", "sycophant", "fawn"], label: "Obedient or attentive", hint: "The definition says 'obedient or attentive' -- obsequious people go out of their way to serve." },
      { keyword: "excessive or servile", matchTerms: ["excess", "servile", "grovel", "cringe", "slavish", "boot-lick", "toady", "kowtow", "pathetic", "undignif", "demeaning"], label: "To an excessive or servile degree", hint: "The definition says 'to an excessive or servile degree' -- it crosses the line from polite to pathetic." },
    ],
    synonyms: ["servile", "sycophantic", "fawning", "groveling"],
  },
  {
    word: "efficacious",
    partOfSpeech: "adjective",
    definition: "Successful in producing a desired or intended result; effective.",
    keyConcepts: [
      { keyword: "successful", matchTerms: ["success", "effective", "work", "function", "accomplish", "achiev", "produc", "deliver", "perform", "proven"], label: "Successful in producing results", hint: "The definition says 'successful in producing' -- efficacious things actually work." },
      { keyword: "desired result", matchTerms: ["desired", "intended", "result", "outcome", "effect", "goal", "purpose", "aim", "target", "end"], label: "A desired or intended result", hint: "The definition says 'a desired or intended result' -- efficacious means it achieves what it's supposed to." },
    ],
    synonyms: ["effective", "potent", "productive", "successful"],
  },
  {
    word: "myopic",
    partOfSpeech: "adjective",
    definition: "Lacking imagination, foresight, or intellectual insight; narrow in perspective.",
    keyConcepts: [
      { keyword: "lacking foresight", matchTerms: ["lack", "foresight", "short-sight", "narrow", "limit", "tunnel vision", "unable to see", "blind", "ignorant", "small-minded"], label: "Lacking foresight or imagination", hint: "The definition says 'lacking imagination, foresight, or intellectual insight' -- unable to see beyond the immediate." },
      { keyword: "narrow perspective", matchTerms: ["narrow", "perspectiv", "view", "restrict", "confin", "insulat", "parochial", "provincial", "blinkered", "small", "shallow"], label: "Narrow in perspective", hint: "The definition says 'narrow in perspective' -- myopic thinking can't see the bigger picture." },
    ],
    synonyms: ["short-sighted", "narrow-minded", "blinkered"],
  },
  {
    word: "quixotic",
    partOfSpeech: "adjective",
    definition: "Exceedingly idealistic; unrealistic and impractical.",
    keyConcepts: [
      { keyword: "exceedingly idealistic", matchTerms: ["idealist", "romantic", "dream", "visionary", "utopian", "noble", "lofty", "high-minded", "aspir", "imagin"], label: "Exceedingly idealistic", hint: "The definition says 'exceedingly idealistic' -- quixotic pursuits aim for impossible perfection." },
      { keyword: "unrealistic", matchTerms: ["unrealistic", "impractical", "unattainab", "impossible", "foolish", "naive", "fanciful", "deluded", "hopeless", "futile", "doomed"], label: "Unrealistic and impractical", hint: "The definition says 'unrealistic and impractical' -- quixotic goals can never actually be achieved." },
    ],
    synonyms: ["idealistic", "romantic", "impractical", "utopian"],
  },
  {
    word: "reductive",
    partOfSpeech: "adjective",
    definition: "Presenting a subject or problem in a simplified form, especially to a misleading degree.",
    keyConcepts: [
      { keyword: "simplified", matchTerms: ["simplif", "simple", "basic", "dumbed down", "narrow", "condensed", "stripped down", "minimal", "bare", "crude"], label: "Presenting in simplified form", hint: "The definition says 'in a simplified form' -- reductive thinking strips away complexity." },
      { keyword: "misleading degree", matchTerms: ["mislead", "distort", "inaccurat", "unfair", "oversimplif", "too simple", "misrepresent", "incomplete", "false", "ignor"], label: "To a misleading degree", hint: "The definition says 'especially to a misleading degree' -- the simplification loses something important." },
    ],
    synonyms: ["oversimplified", "simplistic", "crude"],
  },
  {
    word: "salient",
    partOfSpeech: "adjective",
    definition: "Most noticeable or important; standing out from the rest.",
    keyConcepts: [
      { keyword: "most noticeable", matchTerms: ["noticeab", "prominent", "conspicuous", "striking", "obvious", "stand out", "eye-catching", "visible", "clear", "apparent"], label: "Most noticeable", hint: "The definition says 'most noticeable' -- salient things jump out at you." },
      { keyword: "important", matchTerms: ["important", "significant", "key", "crucial", "essential", "main", "primary", "central", "critical", "relevant", "noteworthy"], label: "Important or significant", hint: "The definition says 'or important' -- salient points are the ones that matter most." },
    ],
    synonyms: ["prominent", "notable", "conspicuous", "key"],
  },
  {
    word: "beguile",
    partOfSpeech: "verb",
    definition: "To charm or enchant someone, sometimes in a deceptive way.",
    keyConcepts: [
      { keyword: "charm or enchant", matchTerms: ["charm", "enchant", "captivat", "fascinate", "allur", "entice", "attract", "seduce", "mesmeriz", "entrance", "delight"], label: "To charm or enchant", hint: "The definition says 'charm or enchant' -- beguiling produces a spell-like effect." },
      { keyword: "sometimes deceptive", matchTerms: ["deceptiv", "deceiv", "mislead", "trick", "lure", "manipulat", "false", "illusory", "cunning", "sly", "disingenuous"], label: "Sometimes in a deceptive way", hint: "The definition says 'sometimes in a deceptive way' -- beguiling can be a tool of manipulation." },
    ],
    synonyms: ["enchant", "captivate", "charm", "deceive"],
  },
  {
    word: "taciturn",
    partOfSpeech: "adjective",
    definition: "Reserved or uncommunicative in speech; saying little.",
    keyConcepts: [
      { keyword: "reserved", matchTerms: ["reserved", "quiet", "silent", "withdrawn", "introverted", "aloof", "private", "reticent", "guarded", "tight-lipped"], label: "Reserved in speech", hint: "The definition says 'reserved or uncommunicative in speech' -- taciturn people keep to themselves." },
      { keyword: "saying little", matchTerms: ["saying little", "few words", "brief", "terse", "laconic", "not talkativ", "unforthcoming", "uncommunicat", "monosyllab"], label: "Saying little", hint: "The definition says 'saying little' -- when taciturn people speak, it's minimal." },
    ],
    synonyms: ["quiet", "reserved", "laconic", "reticent"],
  },
  {
    word: "spurious",
    partOfSpeech: "adjective",
    definition: "Not being what it purports to be; false or fake.",
    keyConcepts: [
      { keyword: "not what it purports", matchTerms: ["not what", "purport", "claim", "appear", "pretend", "seem", "supposed", "alleged", "profess"], label: "Not being what it claims to be", hint: "The definition says 'not being what it purports to be' -- there's a gap between appearance and reality." },
      { keyword: "false or fake", matchTerms: ["false", "fake", "fabricat", "counterfeit", "fraudulent", "bogus", "phony", "forg", "illegitimate", "baseless", "unfounded"], label: "False or fake", hint: "The definition says 'false or fake' -- spurious things lack authenticity." },
    ],
    synonyms: ["false", "bogus", "fraudulent", "counterfeit"],
  },
  {
    word: "reprehensible",
    partOfSpeech: "adjective",
    definition: "Deserving condemnation; morally wrong and unacceptable.",
    keyConcepts: [
      { keyword: "deserving condemnation", matchTerms: ["deserv", "condemn", "censure", "blameworth", "inexcusab", "unforgivab", "disgrace", "shameful", "outrage", "denounc"], label: "Deserving condemnation", hint: "The definition says 'deserving condemnation' -- reprehensible acts warrant public judgment." },
      { keyword: "morally wrong", matchTerms: ["moral", "wrong", "unaccept", "deplorab", "despicab", "vile", "wicked", "evil", "corrupt", "heinous", "unconscionab"], label: "Morally wrong and unacceptable", hint: "The definition says 'morally wrong and unacceptable' -- it violates fundamental ethical standards." },
    ],
    synonyms: ["deplorable", "despicable", "shameful", "inexcusable"],
  },
  {
    word: "furtive",
    partOfSpeech: "adjective",
    definition: "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble.",
    keyConcepts: [
      { keyword: "avoiding notice", matchTerms: ["avoid", "notice", "attention", "secretiv", "stealth", "sneaky", "covert", "hidden", "conceal", "surreptitious", "discreet", "undercover"], label: "Attempting to avoid notice", hint: "The definition says 'attempting to avoid notice or attention' -- furtive actions are designed not to be seen." },
      { keyword: "because of guilt", matchTerms: ["guilt", "trouble", "discovery", "caught", "fear", "wrong", "suspicio", "illicit", "forbidden", "shady", "ashamed", "uneasy"], label: "Because of guilt or fear of discovery", hint: "The definition says 'because of guilt or a belief that discovery would lead to trouble' -- furtiveness implies something to hide." },
    ],
    synonyms: ["secretive", "sneaky", "surreptitious", "stealthy"],
  },
  {
    word: "convoluted",
    partOfSpeech: "adjective",
    definition: "Extremely complex and difficult to follow; intricately twisted or tangled.",
    keyConcepts: [
      { keyword: "extremely complex", matchTerms: ["extreme", "complex", "complic", "intricate", "elaborate", "involved", "confus", "bewild", "labyrinth", "dense"], label: "Extremely complex", hint: "The definition says 'extremely complex' -- convoluted things have too many moving parts." },
      { keyword: "difficult to follow", matchTerms: ["difficult", "follow", "understand", "unclear", "hard to grasp", "tangled", "twisted", "winding", "circuitous", "roundabout", "meandering"], label: "Difficult to follow", hint: "The definition says 'difficult to follow' -- you lose the thread trying to understand it." },
    ],
    synonyms: ["complicated", "intricate", "tangled", "labyrinthine"],
  },
  {
    word: "sycophantic",
    partOfSpeech: "adjective",
    definition: "Behaving in an excessively flattering way to gain favor from someone in authority.",
    keyConcepts: [
      { keyword: "excessively flattering", matchTerms: ["excess", "flatter", "prais", "compli", "grovel", "fawn", "obsequi", "toady", "ingratiat", "suck up", "boot-lick"], label: "Excessively flattering", hint: "The definition says 'excessively flattering' -- the praise is overdone and transparently insincere." },
      { keyword: "gain favor", matchTerms: ["gain", "favor", "favour", "advantage", "benefit", "approval", "authority", "power", "influenc", "advance", "self-interest", "opportun", "manipulat"], label: "To gain favor from authority", hint: "The definition says 'to gain favor from someone in authority' -- the flattery has an ulterior motive." },
    ],
    synonyms: ["fawning", "servile", "obsequious", "toadying"],
  },
  // ── 77. abstruse ──
  {
    word: "abstruse",
    partOfSpeech: "adjective",
    definition: "Difficult to understand; obscure.",
    keyConcepts: [
      { keyword: "difficult to understand", matchTerms: ["difficult", "hard", "complex", "complicated", "incomprehensib", "impenetrab", "confus", "baffling", "bewildering", "perplexing"], label: "Difficult to understand", hint: "The definition says 'difficult to understand' -- abstruse ideas resist easy comprehension." },
      { keyword: "obscure", matchTerms: ["obscure", "arcane", "esoteric", "recondite", "cryptic", "opaque", "dense", "abstract", "unfamiliar", "specialized"], label: "Obscure", hint: "The definition says 'obscure' -- not widely known or easily accessible." },
    ],
    synonyms: ["obscure", "arcane", "recondite"],
  },
  // ── 78. didactic ──
  {
    word: "didactic",
    partOfSpeech: "adjective",
    definition: "Intended to teach, particularly in having moral instruction as an ulterior motive.",
    keyConcepts: [
      { keyword: "intended to teach", matchTerms: ["intended to teach", "instruct", "educat", "lesson", "teaching", "pedagogical", "informativ", "enlighten", "edifying"], label: "Intended to teach", hint: "The definition says 'intended to teach' -- the primary purpose is educational." },
      { keyword: "moral instruction", matchTerms: ["moral", "preachy", "moralis", "lectur", "sermon", "heavy-handed", "patroniz", "condescend", "superior", "sanctimonious", "overbearing", "ulterior"], label: "Moral instruction as ulterior motive", hint: "The definition says 'moral instruction as an ulterior motive' -- didactic often implies being annoyingly preachy." },
    ],
    synonyms: ["instructive", "preachy", "moralizing"],
  },
  // ── 79. fatuous ──
  {
    word: "fatuous",
    partOfSpeech: "adjective",
    definition: "Silly and pointless; showing a lack of intelligence or thought.",
    keyConcepts: [
      { keyword: "silly and pointless", matchTerms: ["silly", "pointless", "foolish", "stupid", "absurd", "ridiculous", "inane", "asinine", "vacuous", "mindless", "brainless"], label: "Silly and pointless", hint: "The definition says 'silly and pointless' -- devoid of substance." },
      { keyword: "lack of intelligence", matchTerms: ["lack of intelligence", "unintelligent", "thoughtless", "vapid", "empty-headed", "dim", "witless", "obtuse", "dull", "dense"], label: "Showing lack of intelligence", hint: "The definition says 'showing a lack of intelligence or thought' -- fatuous remarks betray shallow thinking." },
    ],
    synonyms: ["foolish", "inane", "vacuous"],
  },
  // ── 80. gratuitous ──
  {
    word: "gratuitous",
    partOfSpeech: "adjective",
    definition: "Uncalled for; lacking good reason; unnecessary and unjustified.",
    keyConcepts: [
      { keyword: "uncalled for", matchTerms: ["uncalled for", "unwarranted", "unjustifi", "unnecessary", "needless", "unprovoked", "undeserved", "excessive", "superfluous", "wanton", "groundless"], label: "Uncalled for", hint: "The definition says 'uncalled for' -- there's no reason for it." },
      { keyword: "lacking good reason", matchTerms: ["lacking reason", "pointless", "purposeless", "motiveless", "baseless", "unprovoking", "random", "arbitrary", "indiscriminat"], label: "Lacking good reason", hint: "The definition says 'lacking good reason' -- gratuitous acts have no justification." },
  ],
  synonyms: ["unnecessary", "unjustified", "unwarranted", "excessive"],
  altDefinitions: [
    {
      definition: "Given or done free of charge; without payment.",
      keyConcepts: [
        { keyword: "free", matchTerms: ["free", "no charge", "no cost", "gratis", "without payment", "complimentary", "unpaid", "voluntary", "pro bono", "donated"], label: "Free of charge", hint: "Gratuitous can also mean 'given freely, without payment.'" },
        { keyword: "given", matchTerms: ["given", "provided", "offered", "supplied", "bestow", "grant", "furnish", "present"], label: "Given or done", hint: "Something gratuitous is provided without expectation of payment." },
      ],
    },
  ],
  },
  // ── 81. laconic ──
  {
    word: "laconic",
    partOfSpeech: "adjective",
    definition: "Using very few words to express something; concise to the point of seeming rude.",
    keyConcepts: [
      { keyword: "very few words", matchTerms: ["few words", "brief", "concise", "terse", "succinct", "pithy", "short", "clipped", "curt", "monosyllab", "sparing", "economical"], label: "Using very few words", hint: "The definition says 'using very few words' -- laconic people say as little as possible." },
      { keyword: "seeming rude", matchTerms: ["seeming rude", "blunt", "brusque", "curt", "abrupt", "gruff", "cold", "unfriendly", "dismissive", "terse"], label: "To the point of seeming rude", hint: "The definition says 'concise to the point of seeming rude' -- so few words it can feel dismissive." },
    ],
    synonyms: ["terse", "succinct", "curt"],
  },
  // ── 82. truculent ──
  {
    word: "truculent",
    partOfSpeech: "adjective",
    definition: "Eager or quick to argue or fight; aggressively defiant.",
    keyConcepts: [
      { keyword: "eager to argue", matchTerms: ["eager to argue", "argumentativ", "combativ", "quarrelsom", "contentious", "belligeren", "confrontation", "pugnaciou", "hostile", "aggressive"], label: "Eager to argue or fight", hint: "The definition says 'eager or quick to argue or fight' -- looking for conflict." },
      { keyword: "aggressively defiant", matchTerms: ["aggressiv", "defiant", "fierce", "ferocious", "intimidat", "menacing", "threatening", "savage", "violent", "brutish", "surly"], label: "Aggressively defiant", hint: "The definition says 'aggressively defiant' -- not just disagreeing but doing so with real hostility." },
    ],
    synonyms: ["belligerent", "combative", "aggressive"],
  },
  // ── 83. unctuous ──
  {
    word: "unctuous",
    partOfSpeech: "adjective",
    definition: "Excessively or ingratiatingly flattering; oily and smug.",
    keyConcepts: [
      { keyword: "excessively flattering", matchTerms: ["excessiv", "flatter", "ingratiat", "fawning", "sycophant", "obsequious", "groveling", "servile", "toady", "smarmy"], label: "Excessively flattering", hint: "The definition says 'excessively or ingratiatingly flattering' -- overdone praise that feels insincere." },
      { keyword: "oily and smug", matchTerms: ["oily", "smug", "slick", "smooth", "greasy", "slimy", "insincere", "phony", "false", "glib", "suave", "saccharine"], label: "Oily and smug", hint: "The definition says 'oily and smug' -- there's a slippery, self-satisfied quality to it." },
    ],
    synonyms: ["smarmy", "obsequious", "insincere"],
  },
  // ── 84. vociferous ──
  {
    word: "vociferous",
    partOfSpeech: "adjective",
    definition: "Vehement or clamorous in expressing one's views; loud and forceful.",
    keyConcepts: [
      { keyword: "vehement", matchTerms: ["vehement", "clamorous", "outspoken", "vocal", "forceful", "emphatic", "insistent", "strident", "passionate", "fervent", "fiery"], label: "Vehement in expressing views", hint: "The definition says 'vehement or clamorous in expressing one's views' -- not holding back." },
      { keyword: "loud", matchTerms: ["loud", "noisy", "thunderous", "boisterous", "raucous", "uproarious", "deafening", "piercing", "shrill", "blaring", "roaring"], label: "Loud and forceful", hint: "The definition says 'loud and forceful' -- vociferous people make themselves heard." },
    ],
    synonyms: ["outspoken", "vocal", "strident"],
  },
  // ── 85. bellicose ──
  {
    word: "bellicose",
    partOfSpeech: "adjective",
    definition: "Demonstrating aggression and willingness to fight.",
    keyConcepts: [
      { keyword: "aggression", matchTerms: ["aggression", "aggressive", "hostile", "combative", "belligerent", "pugnacious", "warlike", "militant", "confrontational", "threatening"], label: "Demonstrating aggression", hint: "The definition says 'demonstrating aggression' -- openly showing a fighting disposition." },
      { keyword: "willingness to fight", matchTerms: ["willingness to fight", "eager to fight", "war", "battle", "conflict", "combat", "violent", "fierce", "hawkish", "martial"], label: "Willingness to fight", hint: "The definition says 'willingness to fight' -- bellicose people are ready for conflict." },
    ],
    synonyms: ["aggressive", "warlike", "pugnacious"],
  },
  // ── 86. cabal ──
  {
    word: "cabal",
    partOfSpeech: "noun",
    definition: "A secret political clique or faction engaged in plots or intrigues.",
    keyConcepts: [
      { keyword: "secret group", matchTerms: ["secret", "clique", "faction", "group", "circle", "coterie", "cabal", "cell", "ring", "syndicate", "conspira"], label: "Secret clique or faction", hint: "The definition says 'a secret political clique or faction' -- operating in the shadows." },
      { keyword: "plots or intrigues", matchTerms: ["plots", "intrigue", "scheme", "conspir", "machination", "maneuver", "manipulation", "covert", "clandestine", "subversive", "underhanded"], label: "Engaged in plots", hint: "The definition says 'engaged in plots or intrigues' -- cabals work behind the scenes to advance their agenda." },
    ],
    synonyms: ["conspiracy", "faction", "clique"],
  },
  // ── 87. deleterious ──
  {
    word: "deleterious",
    partOfSpeech: "adjective",
    definition: "Causing harm or damage.",
    keyConcepts: [
      { keyword: "causing harm", matchTerms: ["causing harm", "harmful", "damaging", "injurious", "detrimental", "destructiv", "adverse", "negative", "toxic", "noxious", "baneful", "pernicious", "prejudicial", "hurtful", "ruinous"], label: "Causing harm or damage", hint: "The definition says 'causing harm or damage' -- having a negative, destructive effect." },
    ],
    synonyms: ["harmful", "damaging", "detrimental"],
  },
  // ── 88. flagrant ──
  {
    word: "flagrant",
    partOfSpeech: "adjective",
    definition: "Conspicuously or obviously offensive; shockingly noticeable.",
    keyConcepts: [
      { keyword: "conspicuously offensive", matchTerms: ["conspicuous", "obvious", "blatant", "glaring", "brazen", "bold", "shameless", "barefaced", "outright", "undisguised", "overt", "egregious"], label: "Conspicuously offensive", hint: "The definition says 'conspicuously or obviously offensive' -- impossible to miss or excuse." },
      { keyword: "shockingly noticeable", matchTerms: ["shocking", "noticeable", "outrageous", "scandalous", "appalling", "heinous", "gross", "atrocious", "unconscionabl", "inexcusabl"], label: "Shockingly noticeable", hint: "The definition says 'shockingly noticeable' -- the violation is so bold it provokes outrage." },
    ],
    synonyms: ["blatant", "glaring", "brazen"],
  },
  // ── 89. hackneyed ──
  {
    word: "hackneyed",
    partOfSpeech: "adjective",
    definition: "Lacking significance through having been overused; unoriginal and trite.",
    keyConcepts: [
      { keyword: "overused", matchTerms: ["overused", "worn out", "tired", "stale", "exhausted", "cliché", "clichéd", "played out", "beaten to death", "overdone", "well-worn"], label: "Overused", hint: "The definition says 'having been overused' -- repeated so many times it's lost all freshness." },
      { keyword: "unoriginal", matchTerms: ["unoriginal", "trite", "banal", "commonplace", "pedestrian", "stereotyp", "formulaic", "predictabl", "uninspir", "dull", "bland"], label: "Unoriginal and trite", hint: "The definition says 'unoriginal and trite' -- nothing new or interesting about it." },
    ],
    synonyms: ["cliched", "trite", "overused"],
  },
  // ── 90. litigious ──
  {
    word: "litigious",
    partOfSpeech: "adjective",
    definition: "Unreasonably prone to go to law to settle disputes; inclined to sue.",
    keyConcepts: [
      { keyword: "prone to go to law", matchTerms: ["prone to law", "lawsuit", "sue", "litigat", "legal action", "court", "prosecut", "claim", "petition", "file suit"], label: "Prone to go to law", hint: "The definition says 'prone to go to law to settle disputes' -- reaching for lawyers first." },
      { keyword: "unreasonably", matchTerms: ["unreasonab", "excessiv", "eager", "quick", "readily", "habitually", "compulsiv", "frivolous", "aggressive", "combative"], label: "Unreasonably", hint: "The definition says 'unreasonably' -- the tendency to sue is disproportionate." },
    ],
    synonyms: ["quarrelsome", "disputatious", "contentious"],
  },
  // ── 91. magniloquent ──
  {
    word: "magniloquent",
    partOfSpeech: "adjective",
    definition: "Using high-flown or bombastic language; speaking in a grand or pompous way.",
    keyConcepts: [
      { keyword: "high-flown language", matchTerms: ["high-flown", "bombastic", "grandios", "inflated", "extravagant", "ornate", "flowery", "elaborate", "rhetorical", "overblown"], label: "High-flown language", hint: "The definition says 'using high-flown or bombastic language' -- words that sound impressive but are overdone." },
      { keyword: "pompous", matchTerms: ["pompous", "pretentious", "grand", "self-important", "boastful", "ostentatious", "theatrical", "dramatic", "showy", "vainglorious"], label: "Grand or pompous", hint: "The definition says 'speaking in a grand or pompous way' -- magniloquent speakers love the sound of their own voice." },
    ],
    synonyms: ["bombastic", "pompous", "grandiloquent"],
  },
  // ── 92. nihilistic ──
  {
    word: "nihilistic",
    partOfSpeech: "adjective",
    definition: "Rejecting all religious and moral principles in the belief that life is meaningless.",
    keyConcepts: [
      { keyword: "rejecting principles", matchTerms: ["reject", "deny", "abandon", "dismiss", "repudiat", "renounce", "moral", "religious", "principle", "value", "belief", "ethics"], label: "Rejecting moral principles", hint: "The definition says 'rejecting all religious and moral principles' -- refusing to accept any guiding values." },
      { keyword: "life is meaningless", matchTerms: ["meaningless", "pointless", "purposeless", "futile", "absurd", "empty", "void", "nothing matters", "hopeless", "despair", "existential"], label: "Life is meaningless", hint: "The definition says 'in the belief that life is meaningless' -- nihilism sees no inherent purpose in existence." },
    ],
    synonyms: ["cynical", "pessimistic", "fatalistic"],
  },
  // ── 93. querulous ──
  {
    word: "querulous",
    partOfSpeech: "adjective",
    definition: "Complaining in a petulant or whining manner.",
    keyConcepts: [
      { keyword: "complaining", matchTerms: ["complain", "grumbl", "moan", "whine", "gripe", "nag", "carp", "kvetch", "lament", "murmur", "grouch", "fault-finding"], label: "Complaining", hint: "The definition says 'complaining' -- constantly finding things wrong." },
      { keyword: "petulant or whining", matchTerms: ["petulant", "whining", "peevish", "irritabl", "cranky", "fretful", "testy", "snappish", "sulky", "childish", "impatient", "waspish"], label: "Petulant or whining manner", hint: "The definition says 'in a petulant or whining manner' -- the complaints are delivered in an annoying, childish way." },
    ],
    synonyms: ["whining", "peevish", "petulant"],
  },
  // ── 94. tendentious ──
  {
    word: "tendentious",
    partOfSpeech: "adjective",
    definition: "Expressing or intending to promote a particular cause or point of view, especially a controversial one.",
    keyConcepts: [
      { keyword: "promoting a cause", matchTerms: ["promoting", "cause", "point of view", "agenda", "bias", "partisan", "one-sided", "slanted", "skewed", "propagandistic", "advocacy"], label: "Promoting a point of view", hint: "The definition says 'intending to promote a particular cause or point of view' -- not neutral or balanced." },
      { keyword: "especially controversial", matchTerms: ["controversial", "disputed", "contentious", "divisive", "provocativ", "polemic", "inflammatory", "charged", "sensitive", "polariz"], label: "Especially controversial", hint: "The definition says 'especially a controversial one' -- tendentious content pushes a contested position." },
    ],
    synonyms: ["biased", "partisan", "one-sided"],
  },
  // ── 95. umbrage ──
  {
    word: "umbrage",
    partOfSpeech: "noun",
    definition: "Offence or annoyance, especially as a result of a perceived slight.",
    keyConcepts: [
      { keyword: "offence or annoyance", matchTerms: ["offenc", "offens", "annoyance", "displeasure", "indignation", "resentment", "irritation", "anger", "pique", "hurt", "affront"], label: "Offence or annoyance", hint: "The definition says 'offence or annoyance' -- feeling insulted or put out." },
      { keyword: "perceived slight", matchTerms: ["perceived slight", "slight", "insult", "snub", "disrespect", "rebuff", "put-down", "belittl", "dismissal", "disparag"], label: "As a result of a perceived slight", hint: "The definition says 'as a result of a perceived slight' -- the offence may be real or imagined." },
    ],
    synonyms: ["offence", "indignation", "resentment"],
  },
  // ── 96. venal ──
  {
    word: "venal",
    partOfSpeech: "adjective",
    definition: "Showing or motivated by susceptibility to bribery; corrupt.",
    keyConcepts: [
      { keyword: "susceptibility to bribery", matchTerms: ["bribery", "bribe", "buyable", "purchasabl", "corrupt", "corruptibl", "dishonest", "crooked", "fraudulent", "shady"], label: "Susceptible to bribery", hint: "The definition says 'susceptibility to bribery' -- willing to be bought." },
      { keyword: "corrupt", matchTerms: ["corrupt", "unethical", "unprincipled", "immoral", "mercenary", "greedy", "avaricious", "self-serving", "exploitativ", "predatory", "venal"], label: "Corrupt", hint: "The definition says 'corrupt' -- venal people put personal gain above principles." },
    ],
    synonyms: ["corrupt", "bribable", "mercenary"],
  },
  // ── 97. winsome ──
  {
    word: "winsome",
    partOfSpeech: "adjective",
    definition: "Attractive or appealing in appearance or character; charming in a fresh and innocent way.",
    keyConcepts: [
      { keyword: "attractive or appealing", matchTerms: ["attractive", "appealing", "endearing", "engaging", "delightful", "lovely", "pleasing", "likeable", "winning", "captivating", "enchanting"], label: "Attractive or appealing", hint: "The definition says 'attractive or appealing in appearance or character' -- draws people in." },
      { keyword: "charming in innocent way", matchTerms: ["charming", "innocent", "sweet", "wholesome", "fresh", "pure", "genuine", "guileless", "artless", "disarming", "natural", "unaffected"], label: "Charming in an innocent way", hint: "The definition says 'charming in a fresh and innocent way' -- winsome charm isn't calculated, it's natural." },
    ],
    synonyms: ["charming", "endearing", "engaging"],
  },
  // ── 98. bifurcate ──
  {
    word: "bifurcate",
    partOfSpeech: "verb",
    definition: "To divide into two branches or forks.",
    keyConcepts: [
      { keyword: "divide", matchTerms: ["divide", "split", "separate", "fork", "branch", "diverge", "part", "break", "cleave", "partition"], label: "Divide", hint: "The definition says 'divide into' -- splitting apart." },
      { keyword: "two branches", matchTerms: ["two", "branches", "forks", "paths", "parts", "halves", "directions", "ways", "prongs", "arms", "streams"], label: "Two branches or forks", hint: "The definition says 'two branches or forks' -- specifically splitting into exactly two." },
    ],
    synonyms: ["divide", "split", "fork"],
  },
  // ── 99. circumlocution ──
  {
    word: "circumlocution",
    partOfSpeech: "noun",
    definition: "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive.",
    keyConcepts: [
      { keyword: "many words where fewer would do", matchTerms: ["many words", "fewer would do", "wordy", "verbose", "long-winded", "rambling", "roundabout", "indirect", "circuitous", "meandering"], label: "Many words where fewer would do", hint: "The definition says 'the use of many words where fewer would do' -- talking around the point." },
      { keyword: "deliberate vagueness", matchTerms: ["deliberat", "vague", "evasiv", "avoid", "obscure", "ambiguous", "unclear", "noncommittal", "misleading", "deceptiv"], label: "Deliberately vague or evasive", hint: "The definition says 'in a deliberate attempt to be vague or evasive' -- the wordiness is intentional misdirection." },
    ],
    synonyms: ["wordiness", "verbosity", "evasion"],
  },
  // ── 100. dilettante ──
  {
    word: "dilettante",
    partOfSpeech: "noun",
    definition: "A person who cultivates an area of interest without real commitment or knowledge; an amateur.",
    keyConcepts: [
      { keyword: "without real commitment", matchTerms: ["without commitment", "superficial", "shallow", "casual", "dabbl", "half-hearted", "amateurish", "uncommitted", "dilettant", "not serious"], label: "Without real commitment", hint: "The definition says 'without real commitment or knowledge' -- skimming the surface." },
      { keyword: "amateur", matchTerms: ["amateur", "novice", "non-expert", "inexperienced", "unskilled", "hobbyist", "tinkerer", "pretender", "poseur", "wannabe"], label: "An amateur", hint: "The definition says 'an amateur' -- a dilettante plays at expertise without earning it." },
    ],
    synonyms: ["amateur", "dabbler", "hobbyist"],
  },
  // ── 101. epistemic ──
  {
    word: "epistemic",
    partOfSpeech: "adjective",
    definition: "Relating to knowledge or the conditions for acquiring it.",
    keyConcepts: [
      { keyword: "relating to knowledge", matchTerms: ["relating to knowledge", "knowledge", "knowing", "cogniti", "intellectual", "understanding", "awareness", "comprehension", "epistem", "philosophical"], label: "Relating to knowledge", hint: "The definition says 'relating to knowledge' -- about the nature of what we know." },
      { keyword: "conditions for acquiring", matchTerms: ["conditions", "acquiring", "justification", "belief", "truth", "evidence", "reason", "certainty", "proof", "validity", "methodology"], label: "Conditions for acquiring it", hint: "The definition says 'the conditions for acquiring it' -- what makes knowledge possible or valid." },
    ],
    synonyms: ["cognitive", "intellectual", "philosophical"],
  },
  // ── 102. fallacious ──
  {
    word: "fallacious",
    partOfSpeech: "adjective",
    definition: "Based on a mistaken belief; logically unsound.",
    keyConcepts: [
      { keyword: "mistaken belief", matchTerms: ["mistaken", "belief", "false", "incorrect", "wrong", "erroneous", "flawed", "faulty", "invalid", "untrue", "misleading", "deceptiv"], label: "Based on mistaken belief", hint: "The definition says 'based on a mistaken belief' -- built on a wrong foundation." },
      { keyword: "logically unsound", matchTerms: ["logically unsound", "illogical", "irrational", "unreasonabl", "spurious", "specious", "sophistic", "defectiv", "weak", "untenable"], label: "Logically unsound", hint: "The definition says 'logically unsound' -- the reasoning doesn't hold up to scrutiny." },
    ],
    synonyms: ["false", "erroneous", "specious"],
  },
  // ── 103. garrulous ──
  {
    word: "garrulous",
    partOfSpeech: "adjective",
    definition: "Excessively talkative, especially on trivial matters.",
    keyConcepts: [
      { keyword: "excessively talkative", matchTerms: ["excessiv", "talkative", "chatty", "loquacious", "voluble", "verbose", "long-winded", "rambling", "prattling", "babbling", "gabby", "mouthy"], label: "Excessively talkative", hint: "The definition says 'excessively talkative' -- talking far more than is welcome." },
      { keyword: "trivial matters", matchTerms: ["trivial", "unimportant", "inconsequential", "petty", "small talk", "gossip", "inane", "mundane", "pointless", "idle"], label: "On trivial matters", hint: "The definition says 'especially on trivial matters' -- garrulous people talk a lot about nothing." },
    ],
    synonyms: ["talkative", "chatty", "loquacious"],
  },
  // ── 104. harangue ──
  {
    word: "harangue",
    partOfSpeech: "noun",
    definition: "A lengthy and aggressive speech; a forceful or angry tirade.",
    keyConcepts: [
      { keyword: "lengthy speech", matchTerms: ["lengthy", "speech", "long", "extended", "prolonged", "lecture", "sermon", "diatribe", "monologue", "oration"], label: "Lengthy speech", hint: "The definition says 'a lengthy...speech' -- it goes on and on." },
      { keyword: "aggressive or angry", matchTerms: ["aggressive", "angry", "forceful", "tirade", "rant", "outburst", "berat", "scold", "criticiz", "denounc", "attack", "admonish", "lambast"], label: "Aggressive; a tirade", hint: "The definition says 'aggressive...forceful or angry tirade' -- a harangue is hostile and relentless." },
    ],
    synonyms: ["tirade", "rant", "diatribe"],
  },
  // ── 105. inscrutable ──
  {
    word: "inscrutable",
    partOfSpeech: "adjective",
    definition: "Impossible to understand or interpret; enigmatic.",
    keyConcepts: [
      { keyword: "impossible to understand", matchTerms: ["impossible to understand", "incomprehensib", "unfathomab", "impenetrab", "indecipherab", "unreadab", "baffling", "mystif", "perplex", "bewilder"], label: "Impossible to understand", hint: "The definition says 'impossible to understand or interpret' -- completely resistant to analysis." },
      { keyword: "enigmatic", matchTerms: ["enigmatic", "mysterious", "cryptic", "opaque", "obscure", "sphinx-like", "poker-faced", "blank", "expressionless", "deadpan"], label: "Enigmatic", hint: "The definition says 'enigmatic' -- inscrutable people or things give nothing away." },
    ],
    synonyms: ["enigmatic", "mysterious", "impenetrable"],
  },
  // ── 106. recalcitrant ──
  {
    word: "recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "obstinately uncooperative", matchTerms: ["obstinate", "uncooperat", "stubborn", "defiant", "resistant", "willful", "headstrong", "intransigen", "immovab", "pigheaded"], label: "Obstinately uncooperative", hint: "The definition says 'obstinately uncooperative' -- refusing to budge no matter what." },
      { keyword: "toward authority", matchTerms: ["authority", "discipline", "rules", "orders", "instruction", "command", "control", "management", "governance", "regulation", "direction"], label: "Toward authority or discipline", hint: "The definition says 'toward authority or discipline' -- specifically resisting those in charge." },
    ],
    synonyms: ["defiant", "unruly", "intransigent"],
  },
  // ── 107. soliloquy ──
  {
    word: "soliloquy",
    partOfSpeech: "noun",
    definition: "An act of speaking one's thoughts aloud when by oneself or regardless of any hearers.",
    keyConcepts: [
      { keyword: "speaking aloud", matchTerms: ["speaking aloud", "talk", "speech", "verbal", "out loud", "vocalize", "utter", "say", "monologue", "express"], label: "Speaking one's thoughts aloud", hint: "The definition says 'speaking one's thoughts aloud' -- the internal becomes external." },
      { keyword: "by oneself", matchTerms: ["by oneself", "alone", "to oneself", "no audience", "regardless of hearers", "unheard", "private", "inner thoughts", "thinking out loud"], label: "When alone or regardless of listeners", hint: "The definition says 'when by oneself or regardless of any hearers' -- it's not directed at anyone." },
    ],
    synonyms: ["monologue", "speech", "aside"],
  },
  // ── 108. malfeasance ──
  {
    word: "malfeasance",
    partOfSpeech: "noun",
    definition: "Wrongdoing, especially by a public official; illegal or dishonest activity by someone in a position of trust.",
    keyConcepts: [
      { keyword: "wrongdoing", matchTerms: ["wrongdoing", "misconduct", "crime", "offense", "violation", "corruption", "fraud", "abuse", "malpractice", "illegality", "dishonesty"], label: "Wrongdoing or misconduct", hint: "The definition says 'wrongdoing' -- acts that are illegal or deeply unethical." },
      { keyword: "by someone in authority", matchTerms: ["public official", "position of trust", "authority", "office", "government", "leader", "power", "institution", "responsibil", "duty"], label: "By someone in a position of trust", hint: "The definition says 'by a public official' or 'someone in a position of trust' -- the wrongdoing is worse because of who's doing it." },
    ],
    synonyms: ["misconduct", "corruption", "malpractice"],
  },
  // ── 110. perfidious ──
  {
    word: "perfidious",
    partOfSpeech: "adjective",
    definition: "Deceitful and untrustworthy; deliberately treacherous.",
    keyConcepts: [
      { keyword: "deceitful", matchTerms: ["deceit", "dishonest", "lying", "false", "deceptiv", "fraudulent", "duplicitous", "scheming", "two-faced"], label: "Deceitful and untrustworthy", hint: "The definition says 'deceitful and untrustworthy' -- you cannot take a perfidious person at their word." },
      { keyword: "treacherous", matchTerms: ["treacherous", "betray", "disloyal", "unfaithful", "backstab", "double-cross", "traitorous", "faithless", "serpentine"], label: "Deliberately treacherous", hint: "The definition says 'deliberately treacherous' -- the betrayal is calculated, not accidental." },
    ],
    synonyms: ["treacherous", "disloyal", "faithless"],
  },
  // ── 111. misanthrope ──
  {
    word: "misanthrope",
    partOfSpeech: "noun",
    definition: "A person who dislikes humankind and avoids human society.",
    keyConcepts: [
      { keyword: "dislikes humankind", matchTerms: ["dislik", "hat", "despis", "detest", "loath", "contempt for", "aversion to", "hostil", "humanity", "humankind", "people", "mankind", "human"], label: "Dislikes humankind", hint: "The definition says 'dislikes humankind' -- a blanket rejection of humanity as a whole." },
      { keyword: "avoids society", matchTerms: ["avoid", "society", "withdraw", "isolat", "reclu", "hermit", "solitary", "antisocial", "unsociab", "shun"], label: "Avoids human society", hint: "The definition says 'avoids human society' -- misanthropes don't just dislike people, they stay away." },
    ],
    synonyms: ["cynic", "recluse", "hermit"],
  },
  // ── 112. temerity ──
  {
    word: "temerity",
    partOfSpeech: "noun",
    definition: "Excessive confidence or boldness; audacity.",
    keyConcepts: [
      { keyword: "excessive confidence", matchTerms: ["excess", "confidence", "bold", "audacious", "brazen", "brash", "presumptu", "impudent", "reckless", "foolhardy", "daring"], label: "Excessive confidence or boldness", hint: "The definition says 'excessive confidence or boldness' -- going beyond what's appropriate or wise." },
      { keyword: "audacity", matchTerms: ["audacity", "nerve", "gall", "cheek", "effrontery", "impertinenc", "insolenc", "chutzpah", "shameless"], label: "Audacity", hint: "The definition says 'audacity' -- temerity implies a shocking disregard for limits." },
    ],
    synonyms: ["audacity", "boldness", "nerve", "gall"],
  },
  // ── 113. propitiate ──
  {
    word: "propitiate",
    partOfSpeech: "verb",
    definition: "To win or regain the favor of someone by doing something that pleases them.",
    keyConcepts: [
      { keyword: "win or regain favor", matchTerms: ["win favor", "regain", "appeas", "pacif", "pleas", "satisf", "mollif", "conciliat", "reconcil", "make amends", "atone"], label: "Win or regain favor", hint: "The definition says 'win or regain the favor' -- getting back in someone's good graces." },
      { keyword: "doing something pleasing", matchTerms: ["doing something", "pleas", "gift", "sacrifice", "offering", "gesture", "act", "effort", "accommodat", "compli"], label: "By doing something that pleases them", hint: "The definition says 'by doing something that pleases them' -- propitiation requires action, not just words." },
    ],
    synonyms: ["appease", "placate", "mollify"],
  },
  // ── 114. truculent ──
  {
    word: "internecine",
    partOfSpeech: "adjective",
    definition: "Destructive to both sides in a conflict; relating to conflict within a group.",
    keyConcepts: [
      { keyword: "destructive to both sides", matchTerms: ["destructiv", "both sides", "mutual", "reciprocal", "ruinous", "devastating", "self-destructiv", "costly", "bloody", "fierce"], label: "Destructive to both sides", hint: "The definition says 'destructive to both sides' -- neither party wins." },
      { keyword: "within a group", matchTerms: ["within", "internal", "civil", "infight", "faction", "among themselves", "intra-", "domestic", "fratricidal", "in-group"], label: "Conflict within a group", hint: "The definition says 'relating to conflict within a group' -- it's an internal battle, not against outsiders." },
    ],
    synonyms: ["internal", "civil", "fratricidal"],
  },
  // ── 115. spurious ──
  {
    word: "spurious",
    partOfSpeech: "adjective",
    definition: "Not being what it purports to be; false or fake.",
    keyConcepts: [
      { keyword: "not genuine", matchTerms: ["not genuine", "false", "fake", "fraudulent", "counterfeit", "bogus", "phony", "sham", "fabricat", "forged", "inauthentic"], label: "Not what it purports to be", hint: "The definition says 'not being what it purports to be' -- presenting a false identity." },
      { keyword: "deceptive", matchTerms: ["deceptiv", "misleading", "dishonest", "deceitful", "duplicitous", "specious", "unfounded", "baseless", "illegitimate"], label: "False or fake", hint: "The definition says 'false or fake' -- lacking authenticity or validity." },
    ],
    synonyms: ["false", "bogus", "counterfeit"],
  },
  // ── 116. parsimonious ──
  {
    word: "parsimonious",
    partOfSpeech: "adjective",
    definition: "Extremely unwilling to spend money or use resources; excessively frugal.",
    keyConcepts: [
      { keyword: "unwilling to spend", matchTerms: ["unwilling to spend", "tight", "stingy", "miserly", "cheap", "penny-pinch", "penurious", "niggardly", "skinflint", "scrooge"], label: "Extremely unwilling to spend", hint: "The definition says 'extremely unwilling to spend money or use resources' -- holding on to every penny." },
      { keyword: "excessively frugal", matchTerms: ["excess", "frugal", "thrift", "economic", "sparing", "meager", "scanty", "insufficient", "restrictiv", "austere"], label: "Excessively frugal", hint: "The definition says 'excessively frugal' -- parsimony goes beyond being careful with money into being unreasonable about it." },
    ],
    synonyms: ["stingy", "miserly", "tight-fisted"],
  },
  // ── 117. dogmatic ──
  {
    word: "dogmatic",
    partOfSpeech: "adjective",
    definition: "Inclined to lay down principles as incontrovertibly true, without consideration of evidence or the opinions of others.",
    keyConcepts: [
      { keyword: "lay down principles", matchTerms: ["lay down", "principles", "assert", "insist", "decree", "proclaim", "dictate", "pronounce", "authoritat", "rigid", "inflexib"], label: "Laying down principles as truth", hint: "The definition says 'lay down principles as incontrovertibly true' -- presenting beliefs as absolute facts." },
      { keyword: "without consideration", matchTerms: ["without consider", "evidence", "opinion", "close-minded", "narrow", "intolerant", "unquestioning", "blind", "stubborn", "unyielding"], label: "Without considering evidence or others", hint: "The definition says 'without consideration of evidence or the opinions of others' -- refusing to entertain alternative views." },
    ],
    synonyms: ["opinionated", "doctrinaire", "authoritarian"],
  },
  // ── 118. obsequious ──
  {
    word: "obsequious",
    partOfSpeech: "adjective",
    definition: "Obedient or attentive to an excessive or servile degree.",
    keyConcepts: [
      { keyword: "excessively obedient", matchTerms: ["excess", "obedient", "compliant", "submissiv", "servile", "slavish", "subservient", "groveling", "kowtowing", "cringing"], label: "Excessively obedient or attentive", hint: "The definition says 'obedient or attentive to an excessive or servile degree' -- the deference is overdone." },
      { keyword: "servile", matchTerms: ["servile", "fawning", "sycophant", "toady", "bootlick", "ingratiat", "unctuous", "flattering", "deferential", "meek"], label: "To a servile degree", hint: "The definition says 'servile degree' -- obsequious behavior strips away dignity in pursuit of approval." },
    ],
    synonyms: ["servile", "fawning", "sycophantic"],
  },
  // ── 119. casuistry ──
  {
    word: "casuistry",
    partOfSpeech: "noun",
    definition: "The use of clever but unsound reasoning, especially in relation to moral questions; sophistry.",
    keyConcepts: [
      { keyword: "clever but unsound reasoning", matchTerms: ["clever", "unsound", "reasoning", "logic", "argument", "rational", "sophistry", "specious", "fallacious", "misleading"], label: "Clever but unsound reasoning", hint: "The definition says 'clever but unsound reasoning' -- it sounds convincing but doesn't hold up." },
      { keyword: "moral questions", matchTerms: ["moral", "ethical", "question", "dilemma", "principle", "right and wrong", "justif", "rationaliz", "excus"], label: "Especially regarding moral questions", hint: "The definition says 'especially in relation to moral questions' -- using tricky logic to justify questionable behavior." },
    ],
    synonyms: ["sophistry", "specious reasoning", "quibbling"],
  },
  // ── 120. inimical ──
  {
    word: "inimical",
    partOfSpeech: "adjective",
    definition: "Tending to obstruct or harm; hostile and unfriendly.",
    keyConcepts: [
      { keyword: "tending to obstruct", matchTerms: ["obstruct", "hinder", "impede", "block", "hamper", "thwart", "undermine", "counterproductiv", "detrimental", "adverse"], label: "Tending to obstruct or harm", hint: "The definition says 'tending to obstruct or harm' -- working against something." },
      { keyword: "hostile", matchTerms: ["hostile", "unfriendly", "antagonist", "opposed", "adversarial", "inimical", "combativ", "aggressive", "unwelcoming", "against"], label: "Hostile and unfriendly", hint: "The definition says 'hostile and unfriendly' -- openly opposed." },
    ],
    synonyms: ["hostile", "harmful", "adverse"],
  },
  // ── 121-150: NEW WORDS ──
  // ── 121. ersatz ──
  {
    word: "ersatz",
    partOfSpeech: "adjective",
    definition: "Made or used as a substitute, typically an inferior one, for something else.",
    keyConcepts: [
      { keyword: "substitute", matchTerms: ["substitut", "replacement", "imitation", "replica", "stand-in", "proxy", "alternative", "surrogate", "makeshift"], label: "A substitute", hint: "The definition says 'made or used as a substitute' -- standing in for the real thing." },
      { keyword: "inferior", matchTerms: ["inferior", "cheap", "poor", "artificial", "synthetic", "fake", "shoddy", "substandard", "second-rate", "knock-off"], label: "Typically inferior", hint: "The definition says 'typically an inferior one' -- ersatz versions don't measure up to the original." },
    ],
    synonyms: ["imitation", "artificial", "substitute"],
  },
  // ── 122. lugubrious ──
  {
    word: "lugubrious",
    partOfSpeech: "adjective",
    definition: "Looking or sounding sad and dismal; mournful to an exaggerated degree.",
    keyConcepts: [
      { keyword: "sad and dismal", matchTerms: ["sad", "dismal", "gloomy", "melanchol", "somber", "doleful", "sorrowful", "dreary", "bleak", "depressing", "woeful"], label: "Sad and dismal", hint: "The definition says 'looking or sounding sad and dismal' -- permeated with sadness." },
      { keyword: "exaggerated mourning", matchTerms: ["mournful", "exaggerat", "overdone", "theatrical", "dramatic", "excessive", "overblown", "self-pitying", "wailing", "lamenting"], label: "Mournful to an exaggerated degree", hint: "The definition says 'mournful to an exaggerated degree' -- the sadness feels overdone or performative." },
    ],
    synonyms: ["mournful", "gloomy", "doleful"],
  },
  // ── 123. specious ──
  {
    word: "specious",
    partOfSpeech: "adjective",
    definition: "Superficially plausible but actually wrong; misleading in appearance.",
    keyConcepts: [
      { keyword: "superficially plausible", matchTerms: ["superficial", "plausib", "appearing", "seeming", "on the surface", "at first glance", "ostensib", "convincing", "reasonable-sounding"], label: "Superficially plausible", hint: "The definition says 'superficially plausible' -- it looks right on the surface." },
      { keyword: "actually wrong", matchTerms: ["actually wrong", "false", "incorrect", "misleading", "deceptiv", "fallacious", "unsound", "invalid", "erroneous", "flawed", "spurious"], label: "But actually wrong", hint: "The definition says 'but actually wrong' -- beneath the surface, it doesn't hold up." },
    ],
    synonyms: ["misleading", "deceptive", "fallacious"],
  },
  // ── 124. opprobrium ──
  {
    word: "opprobrium",
    partOfSpeech: "noun",
    definition: "Harsh criticism or censure; the public disgrace arising from shameful conduct.",
    keyConcepts: [
      { keyword: "harsh criticism", matchTerms: ["harsh", "criticism", "censure", "condemnation", "denunciation", "rebuke", "reproach", "blame", "castigation", "excoriation"], label: "Harsh criticism or censure", hint: "The definition says 'harsh criticism or censure' -- severe public judgment." },
      { keyword: "public disgrace", matchTerms: ["public", "disgrace", "shame", "infamy", "dishonor", "humiliation", "ignominy", "stigma", "notoriety", "scandal"], label: "Public disgrace from shameful conduct", hint: "The definition says 'the public disgrace arising from shameful conduct' -- opprobrium marks someone as shameful." },
    ],
    synonyms: ["disgrace", "shame", "infamy"],
  },
  // ── 125. soporific ──
  {
    word: "soporific",
    partOfSpeech: "adjective",
    definition: "Tending to induce drowsiness or sleep; tediously boring.",
    keyConcepts: [
      { keyword: "induce drowsiness", matchTerms: ["induce", "drowsi", "sleep", "sleepy", "somnolen", "sedativ", "hypnotic", "tranquiliz", "narcotic", "dulling"], label: "Tending to induce drowsiness", hint: "The definition says 'tending to induce drowsiness or sleep' -- literally making you sleepy." },
      { keyword: "tediously boring", matchTerms: ["tedious", "boring", "dull", "monotonous", "droning", "lifeless", "uninspiring", "uninteresting", "mind-numbing", "yawn"], label: "Tediously boring", hint: "The definition says 'tediously boring' -- so dull it puts you to sleep." },
    ],
    synonyms: ["sleep-inducing", "boring", "sedative"],
  },
  // ── 126. mendacious ──
  {
    word: "mendacious",
    partOfSpeech: "adjective",
    definition: "Not telling the truth; lying or dishonest.",
    keyConcepts: [
      { keyword: "not telling truth", matchTerms: ["not telling the truth", "lying", "dishonest", "untruthful", "deceitful", "false", "fabricat", "misleading", "deceptiv", "duplicitous"], label: "Not telling the truth", hint: "The definition says 'not telling the truth' -- mendacious people deliberately misrepresent facts." },
    ],
    synonyms: ["lying", "dishonest", "deceitful"],
  },
  // ── 127. pusillanimous ──
  {
    word: "pusillanimous",
    partOfSpeech: "adjective",
    definition: "Showing a lack of courage or determination; timid.",
    keyConcepts: [
      { keyword: "lack of courage", matchTerms: ["lack of courage", "cowardly", "timid", "faint-hearted", "spineless", "weak", "gutless", "fearful", "craven", "lily-livered"], label: "Lacking courage", hint: "The definition says 'showing a lack of courage or determination' -- too afraid to act." },
      { keyword: "timid", matchTerms: ["timid", "meek", "shy", "shrinking", "hesitant", "irresolute", "indecisive", "wavering", "submissive"], label: "Timid", hint: "The definition says 'timid' -- pusillanimous people shrink from confrontation or risk." },
    ],
    synonyms: ["cowardly", "timid", "spineless"],
  },
  // ── 128. cacophony ──
  {
    word: "cacophony",
    partOfSpeech: "noun",
    definition: "A harsh, discordant mixture of sounds.",
    keyConcepts: [
      { keyword: "harsh", matchTerms: ["harsh", "jarring", "grating", "strident", "shrill", "piercing", "rasping", "screeching", "abrasive", "ear-splitting"], label: "Harsh", hint: "The definition says 'harsh' -- the sounds are unpleasant to hear." },
      { keyword: "discordant mixture", matchTerms: ["discordant", "mixture", "clashing", "dissonant", "chaotic", "jumbled", "confused", "noise", "din", "clamor", "racket", "commotion"], label: "Discordant mixture of sounds", hint: "The definition says 'discordant mixture of sounds' -- multiple sounds clashing together." },
    ],
    synonyms: ["din", "racket", "discord"],
  },
  // ── 129. ineffable ──
  {
    word: "ineffable",
    partOfSpeech: "adjective",
    definition: "Too great or extreme to be expressed or described in words.",
    keyConcepts: [
      { keyword: "too great", matchTerms: ["too great", "extreme", "overwhelm", "profound", "immense", "transcend", "beyond", "indescrib", "unimaginab", "awe-inspiring"], label: "Too great or extreme", hint: "The definition says 'too great or extreme' -- ineffable things exceed our capacity." },
      { keyword: "cannot be expressed in words", matchTerms: ["express", "describ", "words", "language", "articulat", "convey", "communicat", "unutterable", "unspeakab", "nameless", "wordless"], label: "Cannot be expressed in words", hint: "The definition says 'to be expressed or described in words' -- language fails to capture it." },
    ],
    synonyms: ["indescribable", "inexpressible", "unutterable"],
  },
  // ── 130. hegemony ──
  {
    word: "hegemony",
    partOfSpeech: "noun",
    definition: "Leadership or dominance, especially by one country or social group over others.",
    keyConcepts: [
      { keyword: "leadership or dominance", matchTerms: ["leadership", "dominan", "supremacy", "authority", "control", "power", "rule", "command", "ascendancy", "preeminence"], label: "Leadership or dominance", hint: "The definition says 'leadership or dominance' -- being on top and calling the shots." },
      { keyword: "over others", matchTerms: ["over others", "one country", "one group", "social group", "political", "cultural", "economic", "imperial", "colonial", "subjugat"], label: "Especially by one group over others", hint: "The definition says 'especially by one country or social group over others' -- hegemony implies an unequal power relationship." },
    ],
    synonyms: ["dominance", "supremacy", "authority"],
  },
  // ── 131. enervate ──
  {
    word: "enervate",
    partOfSpeech: "verb",
    definition: "To cause someone to feel drained of energy or vitality; to weaken.",
    keyConcepts: [
      { keyword: "drained of energy", matchTerms: ["drain", "energy", "vitality", "exhaust", "fatigue", "tire", "deplete", "sap", "weaken", "debilitat", "devitaliz"], label: "Drained of energy or vitality", hint: "The definition says 'drained of energy or vitality' -- leaving someone with nothing left." },
      { keyword: "weaken", matchTerms: ["weaken", "undermine", "diminish", "reduce", "impair", "enfeeble", "prostrate", "incapacitat", "listless", "languish"], label: "To weaken", hint: "The definition says 'to weaken' -- enervation strips away strength." },
    ],
    synonyms: ["exhaust", "weaken", "debilitate"],
  },
  // ── 132. quagmire ──
  {
    word: "quagmire",
    partOfSpeech: "noun",
    definition: "A soft, boggy area of land that gives way underfoot; a complex or hazardous situation that is difficult to escape.",
    keyConcepts: [
      { keyword: "difficult situation", matchTerms: ["difficult", "situation", "predicament", "mess", "trap", "entanglement", "morass", "mire", "swamp", "bog", "muddle"], label: "A difficult situation", hint: "The definition says 'a complex or hazardous situation' -- you're stuck in something bad." },
      { keyword: "hard to escape", matchTerms: ["hard to escape", "trapped", "stuck", "mired", "bogged down", "entangled", "ensnared", "no way out", "sinking", "deepening"], label: "Difficult to escape from", hint: "The definition says 'difficult to escape' -- the more you struggle, the deeper you sink." },
    ],
    synonyms: ["morass", "mire", "predicament"],
  },
  // ── 133. bombastic ──
  {
    word: "bombastic",
    partOfSpeech: "adjective",
    definition: "High-sounding but with little meaning; inflated and pretentious.",
    keyConcepts: [
      { keyword: "high-sounding", matchTerms: ["high-sounding", "grand", "lofty", "impressive", "pompous", "grandiose", "ostentatious", "overblown", "theatrical", "dramatic"], label: "High-sounding", hint: "The definition says 'high-sounding' -- the words are big and impressive-sounding." },
      { keyword: "little meaning", matchTerms: ["little meaning", "empty", "hollow", "superficial", "shallow", "meaningless", "vacuous", "substance", "inflat", "pretentious", "windy"], label: "But with little meaning", hint: "The definition says 'with little meaning' -- beneath the impressive words, there's nothing of substance." },
    ],
    synonyms: ["pompous", "grandiose", "inflated"],
  },
  // ── 134. ignominious ──
  {
    word: "ignominious",
    partOfSpeech: "adjective",
    definition: "Deserving or causing public disgrace or shame; humiliating.",
    keyConcepts: [
      { keyword: "public disgrace", matchTerms: ["public", "disgrace", "shame", "dishonor", "infamy", "scandal", "embarrassment", "humiliat", "degrading", "mortifying"], label: "Causing public disgrace", hint: "The definition says 'deserving or causing public disgrace' -- the shame is visible to all." },
      { keyword: "humiliating", matchTerms: ["humiliat", "degrading", "demeaning", "inglorious", "ignoble", "shameful", "dishonorable", "contemptible", "despicable", "wretched"], label: "Humiliating", hint: "The definition says 'humiliating' -- ignominy strips away dignity." },
    ],
    synonyms: ["shameful", "disgraceful", "humiliating"],
  },
  // ── 135. anathema ──
  {
    word: "anathema",
    partOfSpeech: "noun",
    definition: "Something or someone that one vehemently dislikes; a strong curse or denunciation.",
    keyConcepts: [
      { keyword: "vehemently dislikes", matchTerms: ["vehement", "dislik", "hat", "detest", "abhor", "despis", "loath", "repuls", "revolting", "abominat", "cannot stand"], label: "Vehemently disliked", hint: "The definition says 'vehemently dislikes' -- anathema describes the strongest possible aversion." },
      { keyword: "curse or denunciation", matchTerms: ["curse", "denounc", "condemn", "ban", "excommunicat", "forbidden", "taboo", "proscrib", "outcast", "pariah"], label: "A strong curse", hint: "The definition says 'a strong curse or denunciation' -- anathema carries the weight of formal condemnation." },
    ],
    synonyms: ["abomination", "curse", "bane"],
  },
  // ── 136. surreptitious ──
  {
    word: "surreptitious",
    partOfSpeech: "adjective",
    definition: "Kept secret, especially because it would not be approved of.",
    keyConcepts: [
      { keyword: "kept secret", matchTerms: ["secret", "hidden", "covert", "clandestine", "concealed", "stealthy", "furtive", "undercover", "disguised", "sneaky", "under the radar"], label: "Kept secret", hint: "The definition says 'kept secret' -- deliberately hidden from view." },
      { keyword: "not approved of", matchTerms: ["not approved", "illicit", "unauthorized", "forbidden", "improper", "underhanded", "dishonest", "illegitimate", "wrongful", "guilty", "shameful"], label: "Because it would not be approved", hint: "The definition says 'especially because it would not be approved of' -- the secrecy exists because others would object." },
    ],
    synonyms: ["covert", "stealthy", "clandestine"],
  },
  // ── 137. recondite ──
  {
    word: "recondite",
    partOfSpeech: "adjective",
    definition: "Little known; dealing with very profound or difficult subject matter.",
    keyConcepts: [
      { keyword: "little known", matchTerms: ["little known", "obscur", "unknown", "unfamiliar", "rare", "esoteric", "arcane", "hidden", "forgotten", "neglected"], label: "Little known", hint: "The definition says 'little known' -- most people have never encountered it." },
      { keyword: "difficult subject matter", matchTerms: ["difficult", "abstruse", "complex", "profound", "deep", "dense", "impenetrab", "incomprehensib", "challenging", "specialized", "advanced"], label: "Profound or difficult subject matter", hint: "The definition says 'dealing with very profound or difficult subject matter' -- intellectually demanding." },
    ],
    synonyms: ["obscure", "abstruse", "arcane"],
  },
  // ── 138. acerbic ──
  {
    word: "acerbic",
    partOfSpeech: "adjective",
    definition: "Sharp and forthright in manner or speech; harshly critical.",
    keyConcepts: [
      { keyword: "sharp and forthright", matchTerms: ["sharp", "forthright", "biting", "cutting", "incisive", "pointed", "trenchant", "keen", "piercing", "acrid", "acid"], label: "Sharp and forthright", hint: "The definition says 'sharp and forthright' -- acerbic speech cuts right through." },
      { keyword: "harshly critical", matchTerms: ["harsh", "critical", "caustic", "scathing", "sardonic", "withering", "searing", "stinging", "astringent", "tart", "bitter"], label: "Harshly critical", hint: "The definition says 'harshly critical' -- acerbic comments leave a mark." },
    ],
    synonyms: ["caustic", "biting", "sharp"],
  },
  // ── 139. meretricious ──
  {
    word: "meretricious",
    partOfSpeech: "adjective",
    definition: "Apparently attractive but having in reality no value or integrity.",
    keyConcepts: [
      { keyword: "apparently attractive", matchTerms: ["apparent", "attractive", "flashy", "showy", "glittering", "eye-catching", "alluring", "seductive", "enticing", "glamorous"], label: "Apparently attractive", hint: "The definition says 'apparently attractive' -- it catches the eye and draws you in." },
      { keyword: "no real value", matchTerms: ["no value", "no integrity", "worthless", "hollow", "empty", "superficial", "shallow", "cheap", "tawdry", "trashy", "gaudy", "tasteless"], label: "No real value or integrity", hint: "The definition says 'having in reality no value or integrity' -- all surface, no substance." },
    ],
    synonyms: ["flashy", "gaudy", "tawdry"],
  },
  // ── 140. vituperative ──
  {
    word: "vituperative",
    partOfSpeech: "adjective",
    definition: "Bitter and abusive in language or criticism.",
    keyConcepts: [
      { keyword: "bitter", matchTerms: ["bitter", "harsh", "fierce", "savage", "vicious", "venomous", "virulent", "vitriolic", "rancorous", "acrimonious"], label: "Bitter", hint: "The definition says 'bitter' -- vituperative language is fueled by deep hostility." },
      { keyword: "abusive", matchTerms: ["abusive", "insulting", "offensive", "scathing", "scurrilous", "defamatory", "slanderous", "invective", "diatribe", "tirade", "verbal attack"], label: "Abusive in language", hint: "The definition says 'abusive in language or criticism' -- the words are weaponized to wound." },
    ],
    synonyms: ["abusive", "scathing", "venomous"],
  },
  // ── 141. apocryphal ──
  {
    word: "apocryphal",
    partOfSpeech: "adjective",
    definition: "Of doubtful authenticity, although widely circulated as being true.",
    keyConcepts: [
      { keyword: "doubtful authenticity", matchTerms: ["doubtful", "authenti", "unverifi", "unsubstantiat", "questionab", "unconfirm", "unproven", "suspect", "dubious", "untrue"], label: "Of doubtful authenticity", hint: "The definition says 'of doubtful authenticity' -- probably not true." },
      { keyword: "widely circulated as true", matchTerms: ["widely circulat", "believed", "accepted", "popular", "well-known", "legendary", "mythical", "fabled", "rumored", "told as true"], label: "Widely circulated as being true", hint: "The definition says 'widely circulated as being true' -- many people believe it, but that doesn't make it real." },
    ],
    synonyms: ["fictitious", "mythical", "unverified"],
  },
  // ── 142. impunity ──
  {
    word: "impunity",
    partOfSpeech: "noun",
    definition: "Exemption from punishment or freedom from the injurious consequences of an action.",
    keyConcepts: [
      { keyword: "exemption from punishment", matchTerms: ["exemption", "punishment", "penalty", "consequence", "immunity", "protection", "shielded", "untouchabl", "above the law", "scot-free"], label: "Exemption from punishment", hint: "The definition says 'exemption from punishment' -- facing no consequences." },
      { keyword: "freedom from consequences", matchTerms: ["freedom", "consequence", "repercussion", "without penalty", "unaccountab", "no accountability", "get away with", "escape", "avoid"], label: "Freedom from injurious consequences", hint: "The definition says 'freedom from the injurious consequences' -- acting without any negative fallout." },
    ],
    synonyms: ["immunity", "exemption", "license"],
  },
  // ── 143. obstreperous ──
  {
    word: "obstreperous",
    partOfSpeech: "adjective",
    definition: "Noisy and difficult to control; unruly.",
    keyConcepts: [
      { keyword: "noisy", matchTerms: ["noisy", "loud", "boisterous", "rowdy", "raucous", "clamorous", "vociferous", "uproarious", "riotous", "tumultuous"], label: "Noisy", hint: "The definition says 'noisy' -- obstreperous people make a lot of noise." },
      { keyword: "difficult to control", matchTerms: ["difficult to control", "unruly", "unmanageab", "uncontrollabl", "disorderly", "disruptive", "defiant", "rebellious", "wayward", "wild"], label: "Difficult to control; unruly", hint: "The definition says 'difficult to control' -- they resist being managed or directed." },
    ],
    synonyms: ["unruly", "rowdy", "boisterous"],
  },
  // ── 144. pellucid ──
  {
    word: "pellucid",
    partOfSpeech: "adjective",
    definition: "Translucently clear; easily understood.",
    keyConcepts: [
      { keyword: "translucently clear", matchTerms: ["translucent", "clear", "transparent", "limpid", "crystallin", "pure", "see-through", "glass", "bright", "lucid"], label: "Translucently clear", hint: "The definition says 'translucently clear' -- you can see right through to the meaning." },
      { keyword: "easily understood", matchTerms: ["easily understood", "comprehensib", "intelligib", "straightforward", "simple", "plain", "accessible", "unambiguous", "perspicuous"], label: "Easily understood", hint: "The definition says 'easily understood' -- pellucid writing or speech is immediately accessible." },
    ],
    synonyms: ["clear", "lucid", "transparent"],
  },
  // ── 145. mendacity ──
  {
    word: "mendacity",
    partOfSpeech: "noun",
    definition: "Untruthfulness; the tendency to lie.",
    keyConcepts: [
      { keyword: "untruthfulness", matchTerms: ["untruthful", "dishonest", "lying", "deceit", "deception", "falsehood", "fabricat", "prevarica", "mendacious", "duplicitous"], label: "Untruthfulness", hint: "The definition says 'untruthfulness' -- a fundamental lack of honesty." },
      { keyword: "tendency to lie", matchTerms: ["tendency", "habit", "pattern", "chronic", "habitual", "compulsiv", "persistent", "recurring", "consistent", "systematic"], label: "The tendency to lie", hint: "The definition says 'the tendency to lie' -- mendacity is not a single lie but a character trait." },
    ],
    synonyms: ["dishonesty", "deceitfulness", "lying"],
  },
  // ── 146. sycophantic ──
  {
    word: "oleaginous",
    partOfSpeech: "adjective",
    definition: "Exaggeratedly and distastefully complimentary; obsequious.",
    keyConcepts: [
      { keyword: "exaggeratedly complimentary", matchTerms: ["exaggerat", "compliment", "flatter", "prais", "fawning", "gushing", "effusive", "saccharine", "cloying", "excessive"], label: "Exaggeratedly complimentary", hint: "The definition says 'exaggeratedly and distastefully complimentary' -- over-the-top praise." },
      { keyword: "distastefully", matchTerms: ["distasteful", "repulsiv", "slimy", "oily", "smarmy", "unctuous", "creepy", "nauseating", "revolting", "greasy"], label: "Distastefully", hint: "The definition says 'distastefully' -- the compliments produce revulsion rather than gratitude." },
    ],
    synonyms: ["smarmy", "unctuous", "oily"],
  },
  // ── 147. tautological ──
  {
    word: "tautological",
    partOfSpeech: "adjective",
    definition: "Using different words to say the same thing; needlessly repetitive.",
    keyConcepts: [
      { keyword: "same thing", matchTerms: ["same thing", "same idea", "repeat", "redundant", "circular", "identical meaning", "restat", "rephras", "echo", "mirror"], label: "Saying the same thing", hint: "The definition says 'using different words to say the same thing' -- no new information is added." },
      { keyword: "needlessly repetitive", matchTerms: ["needless", "repetitiv", "unnecessar", "redundant", "superfluous", "excessive", "verbose", "wordy", "pleonasm"], label: "Needlessly repetitive", hint: "The definition says 'needlessly repetitive' -- the repetition serves no purpose." },
    ],
    synonyms: ["redundant", "repetitive", "circular"],
  },
  // ── 148. churlish ──
  {
    word: "churlish",
    partOfSpeech: "adjective",
    definition: "Rude in a mean-spirited and surly way.",
    keyConcepts: [
      { keyword: "rude", matchTerms: ["rude", "impolite", "discourteous", "ill-mannered", "ungracious", "boorish", "uncouth", "crude", "coarse", "vulgar"], label: "Rude", hint: "The definition says 'rude' -- basic lack of courtesy." },
      { keyword: "mean-spirited and surly", matchTerms: ["mean-spirited", "surly", "grumpy", "ill-tempered", "unfriendly", "hostile", "unkind", "ungenerous", "begrudging", "petty", "spiteful", "bitter"], label: "Mean-spirited and surly", hint: "The definition says 'in a mean-spirited and surly way' -- churlish rudeness comes from a sour disposition." },
    ],
    synonyms: ["rude", "surly", "ungracious"],
  },
  // ── 149. insouciant ──
  {
    word: "insouciant",
    partOfSpeech: "adjective",
    definition: "Showing a casual lack of concern; carefree and unbothered.",
    keyConcepts: [
      { keyword: "casual lack of concern", matchTerms: ["casual", "lack of concern", "unconcerned", "indifferen", "careless", "blasé", "nonchalant", "relaxed", "unworried", "carefree"], label: "Casual lack of concern", hint: "The definition says 'showing a casual lack of concern' -- breezily unbothered." },
      { keyword: "carefree", matchTerms: ["carefree", "unbothered", "lighthearted", "breezy", "happy-go-lucky", "easygoing", "laid-back", "free-spirited", "untroubled", "merry"], label: "Carefree and unbothered", hint: "The definition says 'carefree and unbothered' -- insouciance is a joyful lack of worry." },
    ],
    synonyms: ["carefree", "nonchalant", "unconcerned"],
  },
  // ── 150. philistine ──
  {
    word: "philistine",
    partOfSpeech: "noun",
    definition: "A person who is hostile or indifferent to culture and the arts, or who has no understanding of them.",
    keyConcepts: [
      { keyword: "hostile or indifferent", matchTerms: ["hostile", "indifferen", "dismissive", "contemptuous", "scornful", "uninterested", "uncultured", "unrefined", "anti-intellectual", "ignorant"], label: "Hostile or indifferent to culture", hint: "The definition says 'hostile or indifferent to culture and the arts' -- actively rejecting or ignoring cultural refinement." },
      { keyword: "no understanding of arts", matchTerms: ["no understanding", "culture", "arts", "literature", "music", "beauty", "aesthetic", "sophisticat", "refinement", "taste", "appreciat"], label: "No understanding of the arts", hint: "The definition says 'no understanding of them' -- philistines lack cultural literacy." },
    ],
    synonyms: ["barbarian", "lowbrow", "boor"],
  },
  // ── 151. penurious ──
  {
    word: "penurious",
    partOfSpeech: "adjective",
    definition: "Extremely poor; poverty-stricken.",
    keyConcepts: [
      { keyword: "extremely poor", matchTerms: ["extremely poor", "poverty", "destitut", "impoverish", "indigent", "needy", "penniless", "broke", "bankrupt", "insolvent", "pauperized"], label: "Extremely poor", hint: "The definition says 'extremely poor' -- severe lack of financial resources." },
    ],
    synonyms: ["destitute", "impoverished", "indigent"],
  },
  // ── 152. recidivist ──
  {
    word: "recidivist",
    partOfSpeech: "noun",
    definition: "A convicted criminal who reoffends, especially repeatedly.",
    keyConcepts: [
      { keyword: "criminal who reoffends", matchTerms: ["criminal", "reoffend", "repeat", "again", "habitual", "chronic", "persistent", "serial", "relaps", "return to crime"], label: "Reoffends repeatedly", hint: "The definition says 'who reoffends, especially repeatedly' -- they keep going back to criminal behavior." },
    ],
    synonyms: ["repeat offender", "habitual criminal"],
  },
  // ── 153. lachrymose ──
  {
    word: "lachrymose",
    partOfSpeech: "adjective",
    definition: "Tearful or given to weeping; inducing tears.",
    keyConcepts: [
      { keyword: "tearful", matchTerms: ["tearful", "weeping", "crying", "sobbing", "mournful", "sad", "sorrowful", "emotional", "sentimental", "weepy"], label: "Tearful or given to weeping", hint: "The definition says 'tearful or given to weeping' -- prone to or characterized by tears." },
    ],
    synonyms: ["tearful", "weepy", "mournful"],
  },
  // ── 154. trenchant ──
  {
    word: "trenchant",
    partOfSpeech: "adjective",
    definition: "Vigorous or incisive in expression or style; sharply focused and effective.",
    keyConcepts: [
      { keyword: "vigorous or incisive", matchTerms: ["vigorous", "incisive", "sharp", "keen", "penetrat", "cutting", "forceful", "powerful", "pointed", "direct", "decisive"], label: "Vigorous or incisive", hint: "The definition says 'vigorous or incisive' -- trenchant writing cuts right to the heart of things." },
      { keyword: "effective", matchTerms: ["effective", "clear", "focused", "compelling", "cogent", "convincing", "articulate", "eloquent", "astute", "perceptive"], label: "Sharply focused and effective", hint: "The definition says 'sharply focused and effective' -- no wasted words or muddled thinking." },
    ],
    synonyms: ["incisive", "sharp", "penetrating"],
  },
  // ── 155. ludicrous ──
  {
    word: "ludicrous",
    partOfSpeech: "adjective",
    definition: "So foolish, unreasonable, or out of place as to be amusing; ridiculous.",
    keyConcepts: [
      { keyword: "foolish or unreasonable", matchTerms: ["foolish", "unreasonabl", "absurd", "preposterous", "nonsensical", "outrageous", "farcical", "laughabl", "comical", "asinine"], label: "Foolish or unreasonable", hint: "The definition says 'so foolish, unreasonable, or out of place' -- it defies reasonable expectations." },
      { keyword: "amusing", matchTerms: ["amusing", "ridiculous", "funny", "hilarious", "laughabl", "comic", "humorous", "farcical", "entertainment", "absurdly funny"], label: "Amusing in its absurdity", hint: "The definition says 'as to be amusing' -- it's so extreme that it becomes funny." },
    ],
    synonyms: ["ridiculous", "absurd", "preposterous"],
  },
  // ── 156. truculent ──
  {
    word: "inexorable",
    partOfSpeech: "adjective",
    definition: "Impossible to stop or prevent; relentless and unyielding.",
    keyConcepts: [
      { keyword: "impossible to stop", matchTerms: ["impossible to stop", "unstoppabl", "inevitab", "unavoidab", "irresistibl", "inescapab", "certain", "fated", "destined", "predetermined"], label: "Impossible to stop or prevent", hint: "The definition says 'impossible to stop or prevent' -- it's coming whether you like it or not." },
      { keyword: "relentless", matchTerms: ["relentless", "unyielding", "unremitting", "persistent", "unceasing", "implacab", "merciless", "pitiless", "ruthless", "inflexibl"], label: "Relentless and unyielding", hint: "The definition says 'relentless and unyielding' -- inexorable forces don't bend or slow down." },
    ],
    synonyms: ["relentless", "unstoppable", "inevitable"],
  },
  // ── 157. feckless ──
  {
    word: "feckless",
    partOfSpeech: "adjective",
    definition: "Lacking initiative or strength of character; irresponsible.",
    keyConcepts: [
      { keyword: "lacking initiative", matchTerms: ["lacking initiative", "passive", "lazy", "indolen", "idle", "shiftless", "unambitious", "aimless", "purposeless", "directionless"], label: "Lacking initiative", hint: "The definition says 'lacking initiative or strength of character' -- feckless people don't step up." },
      { keyword: "irresponsible", matchTerms: ["irresponsibl", "careless", "reckless", "negligent", "useless", "incompetent", "inept", "hopeless", "worthless", "unreliable"], label: "Irresponsible", hint: "The definition says 'irresponsible' -- you can't count on a feckless person." },
    ],
    synonyms: ["useless", "incompetent", "irresponsible"],
  },
  // ── 158. oppugn ──
  {
    word: "raffish",
    partOfSpeech: "adjective",
    definition: "Unconventional and slightly disreputable, especially in an attractive manner.",
    keyConcepts: [
      { keyword: "unconventional", matchTerms: ["unconventional", "bohemian", "unorthodox", "nonconformist", "eccentric", "maverick", "free-spirited", "rebellious", "rakish"], label: "Unconventional", hint: "The definition says 'unconventional' -- not following the usual rules or expectations." },
      { keyword: "slightly disreputable but attractive", matchTerms: ["disreputabl", "attractiv", "charm", "allur", "appeal", "rogue", "scoundrel", "dashing", "debonair", "devil-may-care"], label: "Slightly disreputable but attractive", hint: "The definition says 'slightly disreputable, especially in an attractive manner' -- the bad-boy appeal." },
    ],
    synonyms: ["rakish", "bohemian", "debonair"],
  },
  // ── 159. loquacious ──
  {
    word: "loquacious",
    partOfSpeech: "adjective",
    definition: "Tending to talk a great deal; talkative.",
    keyConcepts: [
      { keyword: "talk a great deal", matchTerms: ["talk a great deal", "talkative", "chatty", "verbose", "voluble", "garrulous", "gabby", "long-winded", "rambling", "prattling"], label: "Tending to talk a great deal", hint: "The definition says 'tending to talk a great deal' -- loquacious people rarely stop talking." },
    ],
    synonyms: ["talkative", "chatty", "garrulous"],
  },
  // ── 160. prodigal ──
  {
    word: "prodigal",
    partOfSpeech: "adjective",
    definition: "Spending money or resources freely and recklessly; wastefully extravagant.",
    keyConcepts: [
      { keyword: "spending freely", matchTerms: ["spending", "freely", "lavish", "extravagan", "generous", "liberal", "profuse", "abundant", "copious"], label: "Spending freely", hint: "The definition says 'spending money or resources freely' -- prodigal people don't hold back." },
      { keyword: "recklessly wasteful", matchTerms: ["reckless", "wasteful", "squander", "dissipat", "improvident", "imprudent", "irresponsibl", "profligat", "unrestrain"], label: "Recklessly wasteful", hint: "The definition says 'recklessly; wastefully extravagant' -- the spending is unwise and unsustainable." },
    ],
    synonyms: ["extravagant", "wasteful", "profligate"],
  },
  // ── 161. peremptory ──
  {
    word: "peremptory",
    partOfSpeech: "adjective",
    definition: "Insisting on immediate attention or obedience, especially in a brusquely imperious way.",
    keyConcepts: [
      { keyword: "immediate obedience", matchTerms: ["immediate", "obedience", "attention", "command", "demand", "order", "urgent", "authoritat", "imperative", "non-negotiabl"], label: "Insisting on immediate obedience", hint: "The definition says 'insisting on immediate attention or obedience' -- no delays or questions allowed." },
      { keyword: "brusquely imperious", matchTerms: ["brusque", "imperious", "dictatorial", "bossy", "domineering", "overbearing", "arrogant", "haughty", "high-handed", "curt"], label: "Brusquely imperious", hint: "The definition says 'in a brusquely imperious way' -- the commands are delivered with cold authority." },
    ],
    synonyms: ["imperious", "dictatorial", "bossy"],
  },
  // ── 162. diffident ──
  {
    word: "diffident",
    partOfSpeech: "adjective",
    definition: "Modest or shy because of a lack of self-confidence.",
    keyConcepts: [
      { keyword: "modest or shy", matchTerms: ["modest", "shy", "reserved", "retiring", "timid", "quiet", "self-effacing", "unassuming", "demure", "bashful"], label: "Modest or shy", hint: "The definition says 'modest or shy' -- holding back rather than putting yourself forward." },
      { keyword: "lack of self-confidence", matchTerms: ["lack of self-confidence", "insecure", "uncertain", "self-doubt", "hesitant", "tentative", "unsure", "anxious", "nervous", "uncomfortable"], label: "Because of lacking self-confidence", hint: "The definition says 'because of a lack of self-confidence' -- the shyness stems from self-doubt, not choice." },
    ],
    synonyms: ["shy", "timid", "unassuming"],
  },
  // ── 163. maelstrom ──
  {
    word: "maelstrom",
    partOfSpeech: "noun",
    definition: "A powerful whirlpool; a situation or state of confused movement or violent turmoil.",
    keyConcepts: [
      { keyword: "powerful whirlpool", matchTerms: ["whirlpool", "vortex", "swirl", "eddy", "torrent", "current", "surge", "turbulence", "storm"], label: "Powerful whirlpool", hint: "The definition says 'a powerful whirlpool' -- an overwhelming force that pulls everything in." },
      { keyword: "violent turmoil", matchTerms: ["violent", "turmoil", "chaos", "confusion", "upheaval", "tumult", "pandemonium", "bedlam", "disorder", "mayhem", "havoc"], label: "Violent turmoil or confusion", hint: "The definition says 'a situation of confused movement or violent turmoil' -- everything is spinning out of control." },
    ],
    synonyms: ["turmoil", "chaos", "whirlpool"],
  },
  // ── 164. sagacious ──
  {
    word: "sagacious",
    partOfSpeech: "adjective",
    definition: "Having or showing keen mental discernment and good judgment; wise.",
    keyConcepts: [
      { keyword: "keen discernment", matchTerms: ["keen", "discernment", "perceptiv", "astute", "shrewd", "insightful", "acute", "sharp", "penetrating", "canny"], label: "Keen mental discernment", hint: "The definition says 'keen mental discernment' -- seeing things that others miss." },
      { keyword: "good judgment", matchTerms: ["good judgment", "wise", "prudent", "judicious", "sensible", "sage", "sapient", "perspicacious", "intelligent", "learned"], label: "Good judgment; wise", hint: "The definition says 'good judgment; wise' -- sagacious people make sound decisions." },
    ],
    synonyms: ["wise", "shrewd", "astute"],
  },
  // ── 165. inveterate ──
  {
    word: "inveterate",
    partOfSpeech: "adjective",
    definition: "Having a particular habit, activity, or interest that is long-established and unlikely to change.",
    keyConcepts: [
      { keyword: "long-established", matchTerms: ["long-established", "habitual", "chronic", "hardened", "entrenched", "ingrained", "deep-seated", "deep-rooted", "confirmed", "committed"], label: "Long-established", hint: "The definition says 'long-established' -- this has been going on for a very long time." },
      { keyword: "unlikely to change", matchTerms: ["unlikely to change", "incurable", "incorrigible", "irredeemable", "hopeless", "obstinate", "dyed-in-the-wool", "stubborn", "fixed", "set in ways"], label: "Unlikely to change", hint: "The definition says 'unlikely to change' -- inveterate habits are deeply entrenched." },
    ],
    synonyms: ["habitual", "chronic", "hardened"],
  },
  // ── 166. torpid ──
  {
    word: "torpid",
    partOfSpeech: "adjective",
    definition: "Mentally or physically inactive; lethargic and sluggish.",
    keyConcepts: [
      { keyword: "inactive", matchTerms: ["inactive", "idle", "dormant", "inert", "stagnant", "motionless", "still", "passive", "immobile", "sedentary"], label: "Mentally or physically inactive", hint: "The definition says 'mentally or physically inactive' -- barely functioning." },
      { keyword: "lethargic", matchTerms: ["lethargic", "sluggish", "listless", "languid", "apathetic", "dull", "drowsy", "somnolent", "stupefied", "numb"], label: "Lethargic and sluggish", hint: "The definition says 'lethargic and sluggish' -- moving or thinking extremely slowly." },
    ],
    synonyms: ["lethargic", "sluggish", "dormant"],
  },
  // ── 167. calumny ──
  {
    word: "calumny",
    partOfSpeech: "noun",
    definition: "The making of false and defamatory statements about someone in order to damage their reputation; slander.",
    keyConcepts: [
      { keyword: "false statements", matchTerms: ["false", "statement", "lie", "untrue", "fabricat", "made up", "invented", "fictitious", "baseless", "unfounded"], label: "False and defamatory statements", hint: "The definition says 'false and defamatory statements' -- not just criticism but outright lies." },
      { keyword: "damage reputation", matchTerms: ["damage", "reputation", "slander", "defam", "libel", "smear", "malign", "vilify", "traduce", "besmirch", "disparage"], label: "To damage someone's reputation", hint: "The definition says 'in order to damage their reputation' -- calumny is weaponized falsehood." },
    ],
    synonyms: ["slander", "defamation", "libel"],
  },
  // ── 168. ebullience ──
  {
    word: "ebullience",
    partOfSpeech: "noun",
    definition: "The quality of being cheerful and full of energy; exuberance.",
    keyConcepts: [
      { keyword: "cheerful", matchTerms: ["cheerful", "joyful", "enthusiastic", "buoyant", "vivacious", "animated", "spirited", "lively", "effervescent", "exuberant", "bubbling"], label: "Cheerful and full of energy", hint: "The definition says 'cheerful and full of energy' -- overflowing with positive feeling." },
    ],
    synonyms: ["exuberance", "enthusiasm", "vivacity"],
  },
  // ── 169. pugnacious ──
  {
    word: "pugnacious",
    partOfSpeech: "adjective",
    definition: "Eager or quick to argue, quarrel, or fight.",
    keyConcepts: [
      { keyword: "eager to argue", matchTerms: ["eager", "quick to argue", "quarrel", "fight", "combativ", "aggressive", "contentious", "confrontational", "belligeren", "bellicose"], label: "Eager to argue or fight", hint: "The definition says 'eager or quick to argue, quarrel, or fight' -- pugnacious people look for conflict." },
    ],
    synonyms: ["combative", "aggressive", "belligerent"],
  },
  // ── 170. perspicacious ─��
  {
    word: "perspicacious",
    partOfSpeech: "adjective",
    definition: "Having a ready insight into and understanding of things; perceptive.",
    keyConcepts: [
      { keyword: "ready insight", matchTerms: ["insight", "understand", "perceiv", "discern", "astute", "shrewd", "acute", "keen", "sharp", "penetrating", "clear-sighted"], label: "Ready insight and understanding", hint: "The definition says 'having a ready insight into and understanding of things' -- quickly seeing what's really going on." },
    ],
    synonyms: ["perceptive", "astute", "discerning"],
    etymology: "Latin perspicax, from perspicere -- per (through) + specere (to look).",
  },
  // ── 171. dilatory ──
  {
    word: "dilatory",
    partOfSpeech: "adjective",
    definition: "Slow to act; intended to cause delay.",
    keyConcepts: [
      { keyword: "slow to act", matchTerms: ["slow to act", "sluggish", "tardy", "unhurried", "leisurely", "dawdling", "procrastinat", "laggard", "behind"], label: "Slow to act", hint: "The definition says 'slow to act' -- taking far too long to get things done." },
      { keyword: "intended to delay", matchTerms: ["intended to delay", "stalling", "delaying", "obstructing", "impeding", "hindering", "temporizing", "filibuster", "foot-dragging"], label: "Intended to cause delay", hint: "The definition says 'intended to cause delay' -- dilatory tactics are deliberate time-wasting." },
    ],
    synonyms: ["slow", "tardy", "procrastinating"],
    etymology: "Latin dilatorius, from differre -- dis (apart) + ferre (to carry).",
  },
  // ── 172. contumacious ──
  {
    word: "contumacious",
    partOfSpeech: "adjective",
    definition: "Stubbornly or willfully disobedient to authority.",
    keyConcepts: [
      { keyword: "stubbornly disobedient", matchTerms: ["stubborn", "willful", "disobedient", "defiant", "rebellious", "insubordinat", "mutinous", "refractory", "obstinate", "recalcitrant", "unruly"], label: "Stubbornly disobedient", hint: "The definition says 'stubbornly or willfully disobedient' -- refusing to comply, and proud of it." },
      { keyword: "to authority", matchTerms: ["authority", "court", "law", "rule", "order", "regulation", "government", "command", "power"], label: "To authority", hint: "The definition says 'to authority' -- specifically defying those who hold power." },
    ],
    synonyms: ["rebellious", "defiant", "insubordinate"],
    etymology: "Latin contumax, possibly from con (intensive) + tumere (to swell).",
  },
  // ── 173. mellifluous ──
  {
    word: "mellifluous",
    partOfSpeech: "adjective",
    definition: "Sweet or musical; pleasant to hear.",
    keyConcepts: [
      { keyword: "sweet or musical", matchTerms: ["sweet", "musical", "melodious", "harmonious", "dulcet", "honeyed", "smooth", "soft", "rich", "warm", "soothing"], label: "Sweet or musical", hint: "The definition says 'sweet or musical' -- mellifluous sounds are like honey to the ear." },
      { keyword: "pleasant to hear", matchTerms: ["pleasant", "hear", "listen", "beautiful", "euphonious", "lilting", "lyrical", "flowing", "silvery", "golden", "velvet"], label: "Pleasant to hear", hint: "The definition says 'pleasant to hear' -- you want to keep listening." },
    ],
    synonyms: ["melodious", "dulcet", "harmonious"],
    etymology: "Latin mellifluus -- mel (honey) + fluere (to flow).",
  },
  // ── 174. pecuniary ──
  {
    word: "pecuniary",
    partOfSpeech: "adjective",
    definition: "Relating to or consisting of money; financial.",
    keyConcepts: [
      { keyword: "relating to money", matchTerms: ["money", "financial", "monetary", "fiscal", "economic", "cash", "funds", "capital", "wealth", "income", "profit"], label: "Relating to or consisting of money", hint: "The definition says 'relating to or consisting of money' -- pecuniary matters are about finances." },
    ],
    synonyms: ["financial", "monetary", "fiscal"],
    etymology: "Latin pecuniarius, from pecunia, from pecu (cattle) -- livestock was early currency.",
  },
  // ── 175. diatribe ──
  {
    word: "diatribe",
    partOfSpeech: "noun",
    definition: "A forceful and bitter verbal attack against someone or something.",
    keyConcepts: [
      { keyword: "forceful and bitter", matchTerms: ["forceful", "bitter", "fierce", "angry", "hostile", "harsh", "scathing", "venomous", "vitriolic", "savage"], label: "Forceful and bitter", hint: "The definition says 'forceful and bitter' -- a diatribe is an aggressive assault." },
      { keyword: "verbal attack", matchTerms: ["verbal", "attack", "tirade", "rant", "harangue", "invective", "denunciation", "condemnation", "criticism", "broadside"], label: "Verbal attack", hint: "The definition says 'verbal attack against someone or something' -- words used as weapons." },
    ],
    synonyms: ["tirade", "harangue", "invective"],
    etymology: "Greek diatribe -- dia (through) + tribein (to rub, wear).",
  },
  // ── 176. malcontent ──
  {
    word: "malcontent",
    partOfSpeech: "noun",
    definition: "A person who is dissatisfied and rebellious; a chronic complainer.",
    keyConcepts: [
      { keyword: "dissatisfied", matchTerms: ["dissatisf", "discontent", "unhappy", "displeas", "frustr", "resentful", "bitter", "grumbling", "complain"], label: "Dissatisfied", hint: "The definition says 'dissatisfied' -- perpetually unhappy with the way things are." },
      { keyword: "rebellious", matchTerms: ["rebellious", "rebel", "dissident", "agitator", "troublemaker", "insurgent", "mutinous", "seditious", "defiant", "subversive"], label: "Rebellious", hint: "The definition says 'rebellious' -- malcontents don't just complain, they resist." },
    ],
    synonyms: ["agitator", "dissident", "troublemaker"],
    etymology: "French malcontent -- mal (bad, ill) + content (satisfied).",
  },
  // ── 177. impervious ──
  {
    word: "impervious",
    partOfSpeech: "adjective",
    definition: "Not allowing fluid to pass through; unable to be affected by something.",
    keyConcepts: [
      { keyword: "not allowing to pass through", matchTerms: ["not allow", "pass through", "impenetrabl", "waterproof", "sealed", "resistant", "barrier", "block", "impermeable"], label: "Not allowing to pass through", hint: "The definition says 'not allowing fluid to pass through' -- physically or metaphorically sealed." },
      { keyword: "unable to be affected", matchTerms: ["unable to be affected", "unaffected", "immune", "invulnerabl", "resistant", "insensitive", "indifferent", "untouched", "unmoved"], label: "Unable to be affected", hint: "The definition says 'unable to be affected by something' -- nothing gets through the armor." },
    ],
    synonyms: ["impenetrable", "resistant", "immune"],
    etymology: "Latin impervius, from im (not) + pervius, from per (through) + via (way, road).",
  },
  // ── 178. supplicate ──
  {
    word: "supplicate",
    partOfSpeech: "verb",
    definition: "To ask or beg for something earnestly or humbly.",
    keyConcepts: [
      { keyword: "ask or beg", matchTerms: ["ask", "beg", "plead", "implore", "beseech", "entreat", "appeal", "petition", "request", "pray"], label: "Ask or beg for something", hint: "The definition says 'ask or beg for something' -- making a request from a position of need." },
      { keyword: "earnestly or humbly", matchTerms: ["earnest", "humble", "desperate", "sincere", "heartfelt", "fervent", "devout", "submissive", "prostrate", "on one's knees"], label: "Earnestly or humbly", hint: "The definition says 'earnestly or humbly' -- supplication involves deep sincerity and humility." },
    ],
    synonyms: ["beg", "plead", "implore"],
    etymology: "Latin supplicare, from sub (under, from below) + plicare (to fold).",
  },
  // ── 179. truculent ──
  {
    word: "implacable",
    partOfSpeech: "adjective",
    definition: "Unable to be placated or appeased; relentlessly hostile.",
    keyConcepts: [
      { keyword: "unable to be appeased", matchTerms: ["unable to be appeased", "unappeasab", "unforgiving", "unrelenting", "unyielding", "inflexibl", "intransigen", "merciless", "pitiless"], label: "Unable to be appeased", hint: "The definition says 'unable to be placated or appeased' -- nothing will calm them down." },
      { keyword: "relentlessly hostile", matchTerms: ["relentless", "hostile", "implacabl", "uncompromis", "inexorabl", "ruthless", "remorseless", "unsparing", "vindictive"], label: "Relentlessly hostile", hint: "The definition says 'relentlessly hostile' -- the hostility never lets up." },
    ],
    synonyms: ["unforgiving", "relentless", "merciless"],
    etymology: "Latin implacabilis, from im (not) + placare (to calm, soothe, please).",
  },
  // ── 180. mendacious ──
  {
    word: "perquisite",
    partOfSpeech: "noun",
    definition: "A special right, advantage, or benefit granted to a particular person or group; a perk.",
    keyConcepts: [
      { keyword: "special right or benefit", matchTerms: ["special", "right", "advantage", "benefit", "privilege", "perk", "bonus", "entitlement", "prerogative", "fringe benefit"], label: "A special right or benefit", hint: "The definition says 'a special right, advantage, or benefit' -- something extra that others don't get." },
      { keyword: "granted to particular group", matchTerms: ["grant", "particular", "person", "group", "exclusive", "select", "certain", "position", "status", "rank"], label: "Granted to a particular person or group", hint: "The definition says 'granted to a particular person or group' -- perquisites belong to those in certain positions." },
    ],
    synonyms: ["perk", "privilege", "benefit"],
    etymology: "Latin perquisitum, from perquirere -- per (thoroughly) + quaerere (to seek).",
  },
  // ── 181. obdurate ──
  {
    word: "obdurate",
    partOfSpeech: "adjective",
    definition: "Stubbornly refusing to change one's opinion or course of action.",
    keyConcepts: [
      { keyword: "stubbornly refusing", matchTerms: ["stubborn", "refus", "obstinate", "headstrong", "unyielding", "immovable", "intransigen", "inflexibl", "rigid", "adamant", "resolute"], label: "Stubbornly refusing to change", hint: "The definition says 'stubbornly refusing to change' -- obdurate people will not budge no matter what." },
    ],
    synonyms: ["stubborn", "unyielding", "intransigent"],
    etymology: "Latin obdurare, from ob (against) + durare (to harden), from durus (hard).",
  },
  // ── 182. salacious ──
  {
    word: "salacious",
    partOfSpeech: "adjective",
    definition: "Having or conveying undue or inappropriate interest in sexual matters.",
    keyConcepts: [
      { keyword: "inappropriate interest", matchTerms: ["inappropriate", "undue", "excessive", "prurient", "lurid", "lewd", "indecent", "smutty", "vulgar", "crude", "lascivious"], label: "Undue or inappropriate interest", hint: "The definition says 'undue or inappropriate interest' -- the sexual focus is unwelcome or excessive." },
      { keyword: "sexual matters", matchTerms: ["sexual", "erotic", "titillating", "suggestive", "risqué", "bawdy", "raunchy", "obscene", "pornographic", "licentious"], label: "In sexual matters", hint: "The definition says 'in sexual matters' -- salacious content is specifically about sex." },
    ],
    synonyms: ["lewd", "indecent", "prurient"],
    etymology: "Latin salax, from salire (to leap).",
  },
  // ── 183-200: FINAL BATCH ──
  {
    word: "precipitous",
    partOfSpeech: "adjective",
    definition: "Dangerously high or steep; done suddenly and without careful consideration.",
    keyConcepts: [
      { keyword: "dangerously steep", matchTerms: ["danger", "steep", "high", "sheer", "abrupt", "vertigin", "dizzying", "dramatic", "sharp", "extreme"], label: "Dangerously steep", hint: "The definition says 'dangerously high or steep' -- a sheer, frightening drop." },
      { keyword: "sudden and unconsidered", matchTerms: ["sudden", "without careful", "hasty", "rash", "reckless", "impulsiv", "impetuous", "premature", "ill-considered", "abrupt"], label: "Sudden and without consideration", hint: "The definition says 'done suddenly and without careful consideration' -- precipitous decisions are dangerously hasty." },
    ],
    synonyms: ["steep", "hasty", "rash"],
    etymology: "Latin praecipitium, from praeceps -- prae (before, ahead) + caput (head).",
  },
  {
    word: "dissolute",
    partOfSpeech: "adjective",
    definition: "Lax in morals; given to immoral or improper conduct.",
    keyConcepts: [
      { keyword: "lax in morals", matchTerms: ["lax", "morals", "immoral", "improper", "unethical", "unprincipled", "corrupt", "degenerat", "debauch", "decadent", "licentious"], label: "Lax in morals", hint: "The definition says 'lax in morals' -- dissolute people abandon moral standards." },
      { keyword: "improper conduct", matchTerms: ["improper", "conduct", "behavior", "indulgen", "excess", "hedonist", "profligat", "dissipat", "reckless", "wild", "wanton"], label: "Given to improper conduct", hint: "The definition says 'given to immoral or improper conduct' -- a lifestyle of excess and indulgence." },
    ],
    synonyms: ["debauched", "decadent", "profligate"],
    etymology: "Latin dissolutus, past participle of dissolvere -- dis (apart) + solvere (to loosen).",
  },
  {
    word: "edify",
    partOfSpeech: "verb",
    definition: "To instruct or benefit someone, especially morally or spiritually.",
    keyConcepts: [
      { keyword: "instruct or benefit", matchTerms: ["instruct", "benefit", "enlighten", "educate", "improve", "uplift", "elevate", "teach", "inform", "better"], label: "Instruct or benefit", hint: "The definition says 'instruct or benefit someone' -- edifying experiences make you better." },
      { keyword: "morally or spiritually", matchTerms: ["moral", "spiritual", "intellectual", "character", "soul", "mind", "wisdom", "virtue", "growth", "development"], label: "Morally or spiritually", hint: "The definition says 'especially morally or spiritually' -- edification targets the inner person." },
    ],
    synonyms: ["enlighten", "instruct", "uplift"],
    etymology: "Latin aedificare, from aedes (dwelling, temple) + facere (to make).",
  },
  {
    word: "pejorative",
    partOfSpeech: "adjective",
    definition: "Expressing contempt or disapproval; having a negative connotation.",
    keyConcepts: [
      { keyword: "expressing contempt", matchTerms: ["contempt", "disapproval", "disparaging", "derogatory", "demeaning", "belittling", "disdainful", "scornful", "condescending"], label: "Expressing contempt or disapproval", hint: "The definition says 'expressing contempt or disapproval' -- pejorative language is meant to put something down." },
      { keyword: "negative connotation", matchTerms: ["negative", "connotation", "offensive", "insulting", "degrading", "uncomplimentary", "unflattering", "critical", "hostile"], label: "Having a negative connotation", hint: "The definition says 'having a negative connotation' -- the word itself carries a built-in judgment." },
    ],
    synonyms: ["derogatory", "disparaging", "demeaning"],
    etymology: "Latin peiorare, from peior (worse).",
  },
  {
    word: "quiescent",
    partOfSpeech: "adjective",
    definition: "In a state or period of inactivity or dormancy.",
    keyConcepts: [
      { keyword: "inactive", matchTerms: ["inactive", "dormant", "still", "quiet", "calm", "resting", "idle", "latent", "passive", "motionless", "inert", "stagnant"], label: "In a state of inactivity", hint: "The definition says 'in a state or period of inactivity or dormancy' -- quiet and still, but not necessarily permanently." },
    ],
    synonyms: ["dormant", "inactive", "latent"],
    etymology: "Latin quiescere, from quies (rest, quiet).",
  },
  {
    word: "stolid",
    partOfSpeech: "adjective",
    definition: "Calm, dependable, and showing little emotion or animation.",
    keyConcepts: [
      { keyword: "calm and dependable", matchTerms: ["calm", "dependable", "steady", "reliable", "unflappable", "composed", "stoic", "even-tempered", "patient", "solid"], label: "Calm and dependable", hint: "The definition says 'calm, dependable' -- stolid people are rocks you can count on." },
      { keyword: "little emotion", matchTerms: ["little emotion", "unemotional", "impassive", "expressionless", "phlegmatic", "apathetic", "indifferent", "unresponsive", "wooden", "dull"], label: "Showing little emotion", hint: "The definition says 'showing little emotion or animation' -- outwardly flat and unreactive." },
    ],
    synonyms: ["impassive", "unemotional", "phlegmatic"],
    etymology: "Latin stolidus, possibly related to stultus (foolish).",
  },
  {
    word: "internalize",
    partOfSpeech: "verb",
    definition: "To make attitudes or behavior part of one's nature by learning or unconscious assimilation.",
    keyConcepts: [
      { keyword: "make part of nature", matchTerms: ["make part of", "nature", "absorb", "incorporat", "integrat", "assimilat", "adopt", "embrace", "take in", "accept", "embody"], label: "Make part of one's nature", hint: "The definition says 'make attitudes or behavior part of one's nature' -- it becomes who you are." },
      { keyword: "by learning or unconscious", matchTerms: ["learning", "unconscious", "assimilation", "gradually", "over time", "without realizing", "automatic", "deep", "ingrained", "habitual"], label: "Through learning or unconscious assimilation", hint: "The definition says 'by learning or unconscious assimilation' -- it can happen without you knowing." },
    ],
    synonyms: ["absorb", "assimilate", "incorporate"],
    etymology: "Latin internus, from inter (between, within) + -ize (to make).",
  },
  {
    word: "rancorous",
    partOfSpeech: "adjective",
    definition: "Showing deep-seated resentment or ill will.",
    keyConcepts: [
      { keyword: "deep-seated resentment", matchTerms: ["deep-seated", "resentment", "bitterness", "grudge", "animosity", "hostility", "spite", "malice", "venom", "acrimony"], label: "Deep-seated resentment", hint: "The definition says 'deep-seated resentment' -- rancor runs deep and has been building." },
      { keyword: "ill will", matchTerms: ["ill will", "hatred", "malevolence", "vindictiv", "vengeful", "venomous", "toxic", "poisonous", "corrosive", "destructive"], label: "Showing ill will", hint: "The definition says 'ill will' -- rancorous people actively wish harm on others." },
    ],
    synonyms: ["bitter", "resentful", "spiteful"],
    etymology: "Old French rancor, from Latin rancorem, from rancere (to stink).",
  },
  {
    word: "ossify",
    partOfSpeech: "verb",
    definition: "To turn into bone or bony tissue; to cease developing and become set in a rigidly conventional pattern.",
    keyConcepts: [
      { keyword: "become rigid", matchTerms: ["rigid", "harden", "stiff", "inflexib", "fixed", "frozen", "petrif", "solidif", "calcif", "crystalliz"], label: "Become rigid and fixed", hint: "The definition says 'turn into bone' or 'become set' -- ossification is the process of hardening." },
      { keyword: "cease developing", matchTerms: ["cease developing", "stop growing", "stagnate", "conventional", "traditional", "conservative", "backward", "stuck", "unchanging", "fossilized"], label: "Cease developing; become conventional", hint: "The definition says 'cease developing and become set in a rigidly conventional pattern' -- no more growth or adaptation." },
    ],
    synonyms: ["harden", "rigidify", "petrify"],
    etymology: "Latin os (bone) + -ify (to make).",
  },
  {
    word: "byzantine",
    partOfSpeech: "adjective",
    definition: "Excessively complicated and typically involving a great deal of administrative detail; characterized by intrigue.",
    keyConcepts: [
      { keyword: "excessively complicated", matchTerms: ["excessiv", "complicat", "complex", "convolut", "labyrinthine", "tortuous", "elaborate", "intricate", "tangled", "impenetrab"], label: "Excessively complicated", hint: "The definition says 'excessively complicated' -- byzantine systems are impossibly complex." },
      { keyword: "involving intrigue", matchTerms: ["intrigue", "scheming", "political", "bureaucrat", "administration", "red tape", "machination", "conspiracy", "devious", "underhanded"], label: "Involving intrigue and bureaucracy", hint: "The definition says 'involving a great deal of administrative detail; characterized by intrigue' -- byzantine also suggests scheming and politics." },
    ],
    synonyms: ["complex", "labyrinthine", "convoluted"],
    etymology: "From Byzantium (Constantinople), capital of the Eastern Roman Empire.",
  },
  {
    word: "demur",
    partOfSpeech: "verb",
    definition: "To raise doubts or objections or show reluctance.",
    keyConcepts: [
      { keyword: "raise doubts or objections", matchTerms: ["raise doubts", "objection", "protest", "challenge", "question", "disagree", "dissent", "oppose", "resist", "cavil"], label: "Raise doubts or objections", hint: "The definition says 'raise doubts or objections' -- expressing hesitation or disagreement." },
      { keyword: "show reluctance", matchTerms: ["reluctance", "reluctant", "hesitat", "balk", "waver", "pause", "hold back", "shy away", "recoil", "unwilling"], label: "Show reluctance", hint: "The definition says 'show reluctance' -- demurring is a polite way of pushing back." },
    ],
    synonyms: ["object", "protest", "hesitate"],
    etymology: "Old French demorer, from Latin demorari -- de (completely) + morari (to delay).",
  },
  {
    word: "perfidy",
    partOfSpeech: "noun",
    definition: "Deceitfulness; untrustworthiness; deliberate betrayal of trust.",
    keyConcepts: [
      { keyword: "deceitfulness", matchTerms: ["deceit", "dishonest", "treachery", "duplicity", "fraud", "falsehood", "lying", "deception", "bad faith"], label: "Deceitfulness", hint: "The definition says 'deceitfulness; untrustworthiness' -- perfidy is fundamental dishonesty." },
      { keyword: "betrayal of trust", matchTerms: ["betrayal", "trust", "disloyalty", "faithless", "traitor", "backstab", "double-cross", "infidel", "treason", "sellout"], label: "Deliberate betrayal of trust", hint: "The definition says 'deliberate betrayal of trust' -- perfidy is calculated treachery." },
    ],
    synonyms: ["treachery", "betrayal", "duplicity"],
    etymology: "Latin perfidia, from perfidus -- per (to destruction) + fides (faith).",
  },
  {
    word: "incipient",
    partOfSpeech: "adjective",
    definition: "In an initial stage; beginning to happen or develop.",
    keyConcepts: [
      { keyword: "initial stage", matchTerms: ["initial", "stage", "early", "beginning", "start", "embryonic", "nascent", "budding", "emerging", "dawning", "infant", "fledgling"], label: "In an initial stage", hint: "The definition says 'in an initial stage' -- just getting started, not yet fully formed." },
      { keyword: "beginning to develop", matchTerms: ["beginning", "develop", "forming", "growing", "arising", "appearing", "surfacing", "germinating", "taking shape"], label: "Beginning to happen or develop", hint: "The definition says 'beginning to happen or develop' -- incipient things are in their earliest phase." },
    ],
    synonyms: ["nascent", "emerging", "budding"],
    etymology: "Latin incipiens, present participle of incipere -- in (into) + capere (to take).",
  },
  // ── 219. abnegate ──
  {
    word: "abnegate",
    partOfSpeech: "verb",
    definition: "To renounce or reject something desired or valuable; to deny oneself.",
    keyConcepts: [
      { keyword: "renounce", matchTerms: ["renounc", "reject", "give up", "abandon", "surrender", "relinquish", "forgo", "forsak", "sacrifice", "abstain", "deny oneself"], label: "Renounce or reject", hint: "The definition says 'renounce or reject something desired or valuable' -- deliberately giving up what you want." },
    ],
    synonyms: ["renounce", "relinquish", "forgo"],
    etymology: "Latin abnegare -- ab (away) + negare (to deny).",
  },
  // ── 220. apotheosis ──
  {
    word: "apotheosis",
    partOfSpeech: "noun",
    definition: "The highest point in the development of something; a culmination or climax. The elevation of someone to divine status.",
    keyConcepts: [
      { keyword: "highest point", matchTerms: ["highest", "point", "peak", "pinnacle", "summit", "apex", "zenith", "culmination", "climax", "crown", "acme", "ultimate"], label: "Highest point or culmination", hint: "The definition says 'the highest point in the development of something' -- the absolute peak." },
      { keyword: "divine status", matchTerms: ["divine", "god", "deif", "glorif", "exalt", "worship", "idoliz", "ideal", "perfect", "sublime", "transcend"], label: "Elevation to divine status", hint: "The definition says 'elevation of someone to divine status' -- being treated as godlike." },
    ],
    synonyms: ["pinnacle", "culmination", "zenith"],
    etymology: "Greek apotheosis, from apo (change) + theos (god).",
  },
  // ── 221. bellicose ──
  {
    word: "bellicose",
    partOfSpeech: "adjective",
    definition: "Demonstrating aggression and willingness to fight.",
    keyConcepts: [
      { keyword: "aggression", matchTerms: ["aggress", "hostile", "combativ", "pugnacious", "militant", "warlike", "belligeren", "confrontational", "quarrelsome", "antagonistic"], label: "Demonstrating aggression", hint: "The definition says 'demonstrating aggression' -- actively showing hostility." },
      { keyword: "willingness to fight", matchTerms: ["willing", "fight", "battle", "war", "conflict", "combat", "contentious", "truculent", "fierce", "violent"], label: "Willingness to fight", hint: "The definition says 'willingness to fight' -- eager for confrontation." },
    ],
    synonyms: ["aggressive", "combative", "pugnacious"],
    etymology: "Latin bellicosus, from bellicus, from bellum (war).",
  },
  // ── 222. calumny ──
  {
    word: "calumny",
    partOfSpeech: "noun",
    definition: "The making of false and defamatory statements about someone in order to damage their reputation; slander.",
    keyConcepts: [
      { keyword: "false statements", matchTerms: ["false", "statement", "lie", "untrue", "fabricat", "fictitious", "baseless", "unfounded", "defamatory", "slanderous", "libelous"], label: "False and defamatory statements", hint: "The definition says 'false and defamatory statements' -- the claims are lies designed to harm." },
      { keyword: "damage reputation", matchTerms: ["damage", "reputation", "slander", "libel", "defam", "smear", "vilif", "malign", "tarnish", "discredit", "destroy"], label: "To damage reputation", hint: "The definition says 'in order to damage their reputation' -- the purpose is reputational harm." },
    ],
    synonyms: ["slander", "defamation", "libel"],
    etymology: "Latin calumnia, possibly related to calvi (to deceive).",
  },
  // ── 223. chimerical ──
  {
    word: "chimerical",
    partOfSpeech: "adjective",
    definition: "Existing only as the product of unchecked imagination; fantastically visionary or improbable.",
    keyConcepts: [
      { keyword: "product of imagination", matchTerms: ["imagination", "imaginary", "unreal", "fantast", "illusory", "fanciful", "dream", "visionary", "fictitious", "mythical"], label: "Product of imagination", hint: "The definition says 'existing only as the product of unchecked imagination' -- not based in reality." },
      { keyword: "improbable", matchTerms: ["improbabl", "unrealistic", "impossib", "far-fetched", "utopian", "quixotic", "wild", "absurd", "delusional", "preposterous"], label: "Fantastically improbable", hint: "The definition says 'fantastically visionary or improbable' -- too outlandish to actually happen." },
    ],
    synonyms: ["fanciful", "illusory", "unrealistic"],
    etymology: "Greek khimaira, the Chimera -- a mythological creature combining parts of different animals.",
  },
  // ── 224. conflate ──
  {
    word: "conflate",
    partOfSpeech: "verb",
    definition: "To combine two or more texts, ideas, or sets of information into one, often mistakenly treating distinct things as identical.",
    keyConcepts: [
      { keyword: "combine into one", matchTerms: ["combin", "merge", "blend", "fuse", "mix", "unite", "lump together", "join", "consolidat"], label: "Combine into one", hint: "The definition says 'combine two or more texts, ideas, or sets of information into one' -- merging separate things." },
      { keyword: "mistakenly identical", matchTerms: ["mistaken", "identical", "confus", "equat", "interchange", "muddle", "blur", "indistinguish", "mix up", "error"], label: "Mistakenly treating as identical", hint: "The definition says 'often mistakenly treating distinct things as identical' -- the combining creates false equivalence." },
    ],
    synonyms: ["merge", "confuse", "equate"],
    etymology: "Latin conflare -- con (together) + flare (to blow).",
  },
  // ── 225. concomitant ──
  {
    word: "concomitant",
    partOfSpeech: "adjective",
    definition: "Naturally accompanying or associated with something; concurrent.",
    keyConcepts: [
      { keyword: "naturally accompanying", matchTerms: ["naturally", "accompan", "associated", "concurrent", "coexist", "coincid", "alongside", "attendant", "parallel", "simultaneous", "corresponding", "related", "linked"], label: "Naturally accompanying", hint: "The definition says 'naturally accompanying or associated with something' -- it comes along as a natural part." },
    ],
    synonyms: ["accompanying", "concurrent", "attendant"],
    etymology: "Latin concomitari -- con (together) + comitari, from comes (companion).",
  },
  // ── 226. deleterious ──
  {
    word: "deleterious",
    partOfSpeech: "adjective",
    definition: "Causing harm or damage.",
    keyConcepts: [
      { keyword: "causing harm", matchTerms: ["caus", "harm", "damage", "injur", "detriment", "destructive", "noxious", "pernicious", "adverse", "toxic", "harmful", "hurtful", "negative", "damaging", "ruinous"], label: "Causing harm or damage", hint: "The definition says 'causing harm or damage' -- deleterious effects are harmful ones." },
    ],
    synonyms: ["harmful", "damaging", "detrimental"],
    etymology: "Greek deleterios, from deleisthai (to hurt, injure).",
  },
  // ── 227. demagogue ──
  {
    word: "demagogue",
    partOfSpeech: "noun",
    definition: "A political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument.",
    keyConcepts: [
      { keyword: "political leader", matchTerms: ["political", "leader", "politician", "populist", "agitator", "rabble-rouser", "firebrand", "orator"], label: "Political leader", hint: "The definition says 'a political leader' -- demagogues operate in the political sphere." },
      { keyword: "appeals to prejudice", matchTerms: ["appeal", "prejudic", "desire", "emotion", "fear", "passion", "manipulat", "exploit", "pander", "inflam", "incite", "stir up", "populis", "sentiment"], label: "Appeals to desires and prejudices", hint: "The definition says 'appealing to the desires and prejudices of ordinary people rather than by using rational argument' -- manipulation over reason." },
    ],
    synonyms: ["agitator", "rabble-rouser", "populist"],
    etymology: "Greek demagogos -- demos (people) + agogos (leading), from agein (to lead).",
  },
  // ── 228. desultory ──
  {
    word: "desultory",
    partOfSpeech: "adjective",
    definition: "Lacking a plan, purpose, or enthusiasm; occurring randomly or intermittently.",
    keyConcepts: [
      { keyword: "lacking plan or purpose", matchTerms: ["lacking", "plan", "purpose", "aimless", "directionless", "unfocused", "random", "haphazard", "unmethodical", "unsystematic", "halfhearted", "casual", "indifferen"], label: "Lacking plan or purpose", hint: "The definition says 'lacking a plan, purpose, or enthusiasm' -- going nowhere in particular." },
      { keyword: "occurring randomly", matchTerms: ["random", "intermittent", "sporadic", "fitful", "irregular", "erratic", "scattered", "disconnected", "rambling", "meandering"], label: "Occurring randomly", hint: "The definition says 'occurring randomly or intermittently' -- not sustained or focused." },
    ],
    synonyms: ["aimless", "haphazard", "halfhearted"],
    etymology: "Latin desultorius, from desultor -- a circus rider who leaps from horse to horse.",
  },
  // ── 229. disabuse ──
  {
    word: "disabuse",
    partOfSpeech: "verb",
    definition: "To persuade someone that an idea or belief is mistaken.",
    keyConcepts: [
      { keyword: "persuade", matchTerms: ["persuad", "convinc", "correct", "enlighten", "set straight", "undeceiv", "show", "demonstrat", "reveal", "open eyes"], label: "Persuade someone", hint: "The definition says 'to persuade someone' -- actively correcting their thinking." },
      { keyword: "belief is mistaken", matchTerms: ["idea", "belief", "mistaken", "wrong", "false", "incorrect", "error", "misconception", "illusion", "delusion", "misunderstand"], label: "That a belief is mistaken", hint: "The definition says 'that an idea or belief is mistaken' -- freeing someone from a false idea." },
    ],
    synonyms: ["correct", "enlighten", "undeceive"],
    etymology: "French desabuser -- des (away, from) + abuser (to deceive, abuse).",
  },
  // ── 230. ebullience ──
  {
    word: "ebullience",
    partOfSpeech: "noun",
    definition: "The quality of being cheerful and full of energy; exuberance.",
    keyConcepts: [
      { keyword: "cheerful and energetic", matchTerms: ["cheerful", "energy", "enthusias", "exuberan", "lively", "vivacious", "spirited", "effervescen", "buoyant", "animated", "joyful", "vibrant", "bubbly"], label: "Cheerful and full of energy", hint: "The definition says 'the quality of being cheerful and full of energy' -- overflowing with positive vitality." },
    ],
    synonyms: ["exuberance", "enthusiasm", "vivacity"],
    etymology: "Latin ebullire -- e (out) + bullire (to boil, bubble).",
  },
  // ── 231. effete ──
  {
    word: "effete",
    partOfSpeech: "adjective",
    definition: "No longer effective; weak or decadent, especially as a result of overrefinement.",
    keyConcepts: [
      { keyword: "no longer effective", matchTerms: ["no longer effective", "ineffect", "exhausted", "spent", "worn out", "depleted", "past its prime", "feeble", "impotent", "powerless"], label: "No longer effective", hint: "The definition says 'no longer effective' -- the strength has been drained." },
      { keyword: "weak or decadent", matchTerms: ["weak", "decaden", "overrefin", "pamper", "soft", "delicate", "spoiled", "dainty", "precious", "affected", "mannered"], label: "Weak or decadent from overrefinement", hint: "The definition says 'weak or decadent, especially as a result of overrefinement' -- softened by excess." },
    ],
    synonyms: ["decadent", "enervated", "overrefined"],
    etymology: "Latin effetus -- ex (out) + fetus (breeding).",
  },
  // ── 232. enervate ──
  {
    word: "enervate",
    partOfSpeech: "verb",
    definition: "To cause someone to feel drained of energy or vitality; to weaken.",
    keyConcepts: [
      { keyword: "drained of energy", matchTerms: ["drain", "energy", "vitality", "exhaust", "deplet", "sap", "tire", "weaken", "fatigue", "debilitat", "enfeebl", "devitaliz", "wear out", "wear down"], label: "Drained of energy or vitality", hint: "The definition says 'to feel drained of energy or vitality' -- the life force is being sucked out." },
    ],
    synonyms: ["weaken", "exhaust", "debilitate"],
    etymology: "Latin enervare -- e (out of) + nervus (sinew, nerve).",
  },
  // ── 233. ephemeral ──
  {
    word: "ephemeral",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time; transient.",
    keyConcepts: [
      { keyword: "very short time", matchTerms: ["short time", "brief", "fleeting", "transient", "momentary", "passing", "temporary", "impermanent", "short-lived", "evanescent", "fugitive", "transitory"], label: "Lasting a very short time", hint: "The definition says 'lasting for a very short time' -- here one moment, gone the next." },
    ],
    synonyms: ["fleeting", "transient", "short-lived"],
    etymology: "Greek ephemeros -- epi (on) + hemera (day).",
  },
  // ── 234. epistolary ──
  {
    word: "epistolary",
    partOfSpeech: "adjective",
    definition: "Relating to the writing of letters; written in the form of a series of letters.",
    keyConcepts: [
      { keyword: "relating to letters", matchTerms: ["letter", "letters", "correspond", "epistl", "mail", "written", "writing", "missive", "dispatch", "communic"], label: "Relating to letters", hint: "The definition says 'relating to the writing of letters' -- epistolary works use letter-writing as their form." },
    ],
    synonyms: ["letter-writing", "correspondence"],
    etymology: "Latin epistola, from Greek epistole -- epi (upon) + stellein (to send).",
  },
  // ── 235. excoriate ──
  {
    word: "excoriate",
    partOfSpeech: "verb",
    definition: "To censure or criticize severely; to strip the skin from.",
    keyConcepts: [
      { keyword: "criticize severely", matchTerms: ["censur", "criticiz", "condemn", "denounc", "lambast", "berat", "castigat", "rebuk", "upbraid", "vilif", "attack", "assail", "savage"], label: "Censure or criticize severely", hint: "The definition says 'to censure or criticize severely' -- harsh, blistering criticism." },
    ],
    synonyms: ["condemn", "lambaste", "castigate"],
    etymology: "Latin excoriare -- ex (off) + corium (skin, hide).",
  },
  // ── 236. exigent ──
  {
    word: "exigent",
    partOfSpeech: "adjective",
    definition: "Pressing; demanding immediate action or attention.",
    keyConcepts: [
      { keyword: "pressing and demanding", matchTerms: ["press", "demand", "urgent", "critical", "crucial", "imperative", "compel", "insistent", "acute", "dire", "immediate", "emergent"], label: "Pressing; demanding immediate action", hint: "The definition says 'pressing; demanding immediate action or attention' -- cannot be delayed." },
    ],
    synonyms: ["urgent", "pressing", "imperative"],
    etymology: "Latin exigere -- ex (out) + agere (to drive).",
  },
  // ── 237. expatiate ──
  {
    word: "expatiate",
    partOfSpeech: "verb",
    definition: "To speak or write at length or in detail about a subject.",
    keyConcepts: [
      { keyword: "speak at length", matchTerms: ["speak", "write", "length", "detail", "elaborat", "expound", "discourse", "hold forth", "dilat", "go on", "rambl", "extensive", "thorough", "exhaustive"], label: "Speak or write at length", hint: "The definition says 'speak or write at length or in detail' -- going into extensive, possibly excessive detail." },
    ],
    synonyms: ["elaborate", "expound", "discourse"],
    etymology: "Latin expatiare -- ex (out) + spatiari (to walk), from spatium (space).",
  },
  // ── 238. extirpate ──
  {
    word: "extirpate",
    partOfSpeech: "verb",
    definition: "To root out and destroy completely; to eradicate.",
    keyConcepts: [
      { keyword: "root out and destroy", matchTerms: ["root out", "destroy", "eradicat", "eliminat", "exterminat", "annihilat", "abolish", "wipe out", "stamp out", "remove", "uproot", "obliterat", "expung"], label: "Root out and destroy completely", hint: "The definition says 'root out and destroy completely' -- total elimination from the root." },
    ],
    synonyms: ["eradicate", "eliminate", "annihilate"],
    etymology: "Latin extirpare -- ex (out) + stirps (root, stem).",
  },
  // ── 239. febrile ──
  {
    word: "febrile",
    partOfSpeech: "adjective",
    definition: "Having or showing the symptoms of a fever; characterized by a great deal of nervous excitement or energy.",
    keyConcepts: [
      { keyword: "fever", matchTerms: ["fever", "feverish", "hot", "temperature", "burning", "pyrexia", "inflam", "sick", "ill"], label: "Of or relating to fever", hint: "The definition says 'having or showing the symptoms of a fever' -- literally or figuratively feverish." },
      { keyword: "nervous excitement", matchTerms: ["nervous", "excitement", "energy", "frenetic", "frantic", "hectic", "agitat", "restless", "manic", "frenzied", "overwrought", "hyperactiv"], label: "Nervous excitement or energy", hint: "The definition says 'characterized by a great deal of nervous excitement or energy' -- intensely agitated." },
    ],
    synonyms: ["feverish", "frenetic", "frantic"],
    etymology: "Latin febrilis, from febris (fever).",
  },
  // ── 240. grandiloquent ──
  {
    word: "grandiloquent",
    partOfSpeech: "adjective",
    definition: "Pompous or extravagant in language, style, or manner, especially in a way that is intended to impress.",
    keyConcepts: [
      { keyword: "pompous language", matchTerms: ["pompous", "extravagan", "language", "speech", "bombastic", "inflated", "overblown", "flowery", "ornate", "grandiose", "pretentious", "lofty", "verbose", "rhetorical"], label: "Pompous or extravagant language", hint: "The definition says 'pompous or extravagant in language, style, or manner' -- using overly grand words." },
      { keyword: "intended to impress", matchTerms: ["intend", "impress", "show off", "ostentatious", "affected", "theatrical", "dramatic", "showy"], label: "Intended to impress", hint: "The definition says 'intended to impress' -- the grandiose language is meant to dazzle the audience." },
    ],
    synonyms: ["bombastic", "pompous", "pretentious"],
    etymology: "Latin grandiloquus -- grandis (grand, great) + loqui (to speak).",
  },
  // ── 241. hegemony ──
  {
    word: "hegemony",
    partOfSpeech: "noun",
    definition: "Leadership or dominance, especially by one country or social group over others.",
    keyConcepts: [
      { keyword: "leadership or dominance", matchTerms: ["leadership", "dominance", "supremacy", "authority", "control", "power", "command", "rule", "sovereignty", "preeminenc", "ascendancy", "influence"], label: "Leadership or dominance", hint: "The definition says 'leadership or dominance' -- being in the controlling position." },
      { keyword: "over others", matchTerms: ["over others", "country", "social group", "nation", "state", "class", "society", "subordinat", "inferior", "subject", "lesser"], label: "Over other groups or countries", hint: "The definition says 'especially by one country or social group over others' -- hegemony is always relative." },
    ],
    synonyms: ["dominance", "supremacy", "authority"],
    etymology: "Greek hegemonia, from hegemon, from hegeisthai (to lead).",
  },
  // ���─ 242. iconoclast ──
  {
    word: "iconoclast",
    partOfSpeech: "noun",
    definition: "A person who attacks or criticizes cherished beliefs or institutions.",
    keyConcepts: [
      { keyword: "attacks or criticizes", matchTerms: ["attack", "criticiz", "challeng", "question", "reject", "denounc", "defy", "rebel", "subvert", "overturn", "dismantle", "destroy"], label: "Attacks or criticizes", hint: "The definition says 'attacks or criticizes' -- iconoclasts actively tear things down." },
      { keyword: "cherished beliefs", matchTerms: ["cherish", "belief", "institution", "tradition", "convention", "established", "sacred", "revered", "orthodox", "dogma", "custom", "norm", "status quo", "mainstream"], label: "Cherished beliefs or institutions", hint: "The definition says 'cherished beliefs or institutions' -- they target things society holds dear." },
    ],
    synonyms: ["rebel", "nonconformist", "dissident"],
    etymology: "Greek eikonoklastes -- eikon (image, likeness) + klastes (breaker).",
  },
  // ── 243. ignoble ──
  {
    word: "ignoble",
    partOfSpeech: "adjective",
    definition: "Not honorable in character or purpose; base and shameful.",
    keyConcepts: [
      { keyword: "not honorable", matchTerms: ["not honorabl", "dishonor", "dishonour", "base", "shameful", "disgrace", "contempt", "vile", "despicabl", "ignomin", "low", "mean", "sordid", "wretched", "unworthy"], label: "Not honorable; base and shameful", hint: "The definition says 'not honorable in character or purpose; base and shameful' -- morally low." },
    ],
    synonyms: ["dishonorable", "base", "shameful"],
    etymology: "Latin ignobilis -- in (not) + gnobilis, older form of nobilis (noble).",
  },
  // ── 244. impecunious ──
  {
    word: "impecunious",
    partOfSpeech: "adjective",
    definition: "Having little or no money; poor.",
    keyConcepts: [
      { keyword: "no money", matchTerms: ["no money", "little money", "poor", "impoverish", "pennil", "destitut", "indigent", "needy", "bankrupt", "broke", "insolvent", "poverty", "moneyless", "without funds"], label: "Having little or no money", hint: "The definition says 'having little or no money; poor' -- financially destitute." },
    ],
    synonyms: ["poor", "penniless", "destitute"],
    etymology: "Latin impecuniosus -- in (not) + pecuniosus, from pecunia (money), from pecu (cattle).",
  },
  // ── 245. inchoate ──
  {
    word: "inchoate",
    partOfSpeech: "adjective",
    definition: "Just begun and so not fully formed or developed; rudimentary.",
    keyConcepts: [
      { keyword: "just begun", matchTerms: ["just begun", "beginning", "start", "initial", "early", "nascent", "incipient", "embryonic", "fledgling", "budding", "infant"], label: "Just begun", hint: "The definition says 'just begun' -- still in the earliest stage." },
      { keyword: "not fully formed", matchTerms: ["not fully formed", "undeveloped", "rudimentary", "immature", "incomplete", "unfinished", "partial", "rough", "crude", "formless", "amorphous", "unshap"], label: "Not fully formed or developed", hint: "The definition says 'not fully formed or developed; rudimentary' -- still taking shape." },
    ],
    synonyms: ["rudimentary", "nascent", "undeveloped"],
    etymology: "Latin inchoatus, past participle of inchoare -- possibly from in + cohum (the strap yoking oxen to a plow).",
  },
  // ── 246. indefatigable ──
  {
    word: "indefatigable",
    partOfSpeech: "adjective",
    definition: "Persisting tirelessly; never showing signs of fatigue.",
    keyConcepts: [
      { keyword: "persisting tirelessly", matchTerms: ["persist", "tireless", "untiring", "unflagging", "inexhaustibl", "unrelenting", "relentless", "unwavering", "dogged", "tenacious", "unceasing", "energetic", "determined", "assiduous", "diligent", "industrious"], label: "Persisting tirelessly", hint: "The definition says 'persisting tirelessly; never showing signs of fatigue' -- they never run out of energy." },
    ],
    synonyms: ["tireless", "unflagging", "relentless"],
    etymology: "Latin indefatigabilis -- in (not) + defatigare (to tire out), from de (completely) + fatigare (to weary).",
  },
  // ── 247. inimical ──
  {
    word: "inimical",
    partOfSpeech: "adjective",
    definition: "Tending to obstruct or harm; unfriendly or hostile.",
    keyConcepts: [
      { keyword: "tending to harm", matchTerms: ["harm", "obstruct", "damag", "detriment", "injurious", "adverse", "destructive", "pernicious", "counter", "contrary"], label: "Tending to obstruct or harm", hint: "The definition says 'tending to obstruct or harm' -- working against something." },
      { keyword: "unfriendly or hostile", matchTerms: ["unfriendly", "hostile", "antagonistic", "adverse", "opposed", "malevolent", "ill-disposed", "unwelcoming", "threatening"], label: "Unfriendly or hostile", hint: "The definition says 'unfriendly or hostile' -- the attitude is actively against." },
    ],
    synonyms: ["hostile", "harmful", "antagonistic"],
    etymology: "Latin inimicalis, from inimicus -- in (not) + amicus (friend).",
  },
  // ── 248. inscrutable ──
  {
    word: "inscrutable",
    partOfSpeech: "adjective",
    definition: "Impossible to understand or interpret; mysterious.",
    keyConcepts: [
      { keyword: "impossible to understand", matchTerms: ["impossibl", "understand", "interpret", "decipher", "read", "fathom", "comprehend", "impenetrab", "unfathom", "enigmatic", "mysterious", "opaque", "cryptic", "baffling", "puzzling", "inexplicable"], label: "Impossible to understand", hint: "The definition says 'impossible to understand or interpret' -- completely unreadable." },
    ],
    synonyms: ["enigmatic", "mysterious", "unfathomable"],
    etymology: "Latin inscrutabilis -- in (not) + scrutari (to search, examine), from scruta (rags, trash).",
  },
  // ── 249. invidious ──
  {
    word: "invidious",
    partOfSpeech: "adjective",
    definition: "Likely to arouse or incur resentment or anger in others; unfairly discriminating.",
    keyConcepts: [
      { keyword: "arouse resentment", matchTerms: ["arous", "resentment", "anger", "hostility", "ill will", "envy", "jealousy", "bitter", "offensive", "objectionabl", "obnoxious"], label: "Likely to arouse resentment", hint: "The definition says 'likely to arouse or incur resentment or anger in others' -- provokes bad feelings." },
      { keyword: "unfairly discriminating", matchTerms: ["unfair", "discriminat", "unjust", "partial", "biased", "prejudic", "inequitable"], label: "Unfairly discriminating", hint: "The definition says 'unfairly discriminating' -- invidious comparisons treat things unequally." },
    ],
    synonyms: ["resentful", "offensive", "unfair"],
    etymology: "Latin invidiosus, from invidia -- in (upon) + videre (to see).",
  },
  // ── 250. irascible ──
  {
    word: "irascible",
    partOfSpeech: "adjective",
    definition: "Having or showing a tendency to be easily angered.",
    keyConcepts: [
      { keyword: "easily angered", matchTerms: ["easily angered", "quick-tempered", "irritabl", "short-tempered", "hot-tempered", "testy", "touchy", "cantankerous", "choleric", "grumpy", "cranky", "petulant", "snappy", "peevish", "fractious"], label: "Tendency to be easily angered", hint: "The definition says 'tendency to be easily angered' -- they have a very short fuse." },
    ],
    synonyms: ["irritable", "testy", "cantankerous"],
    etymology: "Latin irascibilis, from irasci, from ira (anger).",
  },
  // ── 251. jejune ──
  {
    word: "jejune",
    partOfSpeech: "adjective",
    definition: "Naive, simplistic, and superficial; lacking substance or interest.",
    keyConcepts: [
      { keyword: "naive and simplistic", matchTerms: ["naive", "simplistic", "superficial", "shallow", "puerile", "childish", "immature", "unsophisticated", "ingenuous", "callow"], label: "Naive and simplistic", hint: "The definition says 'naive, simplistic, and superficial' -- lacking depth or worldliness." },
      { keyword: "lacking substance", matchTerms: ["lacking", "substance", "interest", "dull", "bland", "dry", "vapid", "insipid", "uninteresting", "tedious", "banal", "trite"], label: "Lacking substance or interest", hint: "The definition says 'lacking substance or interest' -- there's nothing meaty to engage with." },
    ],
    synonyms: ["naive", "superficial", "vapid"],
    etymology: "Latin jejunus -- the jejunum (part of the small intestine) is named from the same root.",
  },
  // ── 252. lachrymose ──
  {
    word: "lachrymose",
    partOfSpeech: "adjective",
    definition: "Tearful or given to weeping; inducing tears; sad.",
    keyConcepts: [
      { keyword: "tearful", matchTerms: ["tearful", "weeping", "crying", "tears", "sob", "wail", "mournful", "sorrowful", "melancholy", "sad", "doleful", "lugubrious", "plaintive", "grief"], label: "Tearful or inducing tears", hint: "The definition says 'tearful or given to weeping; inducing tears' -- connected to crying and sadness." },
    ],
    synonyms: ["tearful", "mournful", "sorrowful"],
    etymology: "Latin lacrimosus, from lacrima (a tear).",
  },
  // ── 253. lassitude ──
  {
    word: "lassitude",
    partOfSpeech: "noun",
    definition: "A state of physical or mental weariness; lack of energy.",
    keyConcepts: [
      { keyword: "weariness", matchTerms: ["wearin", "weary", "tired", "fatigue", "exhaust", "lethargy", "listless", "languor", "torpor", "drain", "sluggish", "enervat"], label: "Physical or mental weariness", hint: "The definition says 'a state of physical or mental weariness' -- deep tiredness." },
      { keyword: "lack of energy", matchTerms: ["lack of energy", "no energy", "apathy", "inertia", "malaise", "debility", "prostration", "weakness"], label: "Lack of energy", hint: "The definition says 'lack of energy' -- no drive to do anything." },
    ],
    synonyms: ["weariness", "lethargy", "fatigue"],
    etymology: "Latin lassitudo, from lassus (faint, weary).",
  },
  // ── 254. lugubrious ──
  {
    word: "lugubrious",
    partOfSpeech: "adjective",
    definition: "Looking or sounding sad and dismal; mournful.",
    keyConcepts: [
      { keyword: "sad and dismal", matchTerms: ["sad", "dismal", "gloomy", "mournful", "melancholy", "sorrowful", "doleful", "dreary", "funereal", "somber", "bleak", "depress", "woeful", "morose", "plaintive"], label: "Looking or sounding sad and dismal", hint: "The definition says 'looking or sounding sad and dismal' -- exaggeratedly mournful." },
    ],
    synonyms: ["mournful", "gloomy", "doleful"],
    etymology: "Latin lugubris, from lugere (to mourn).",
  },
  // ── 255. malfeasance ──
  {
    word: "malfeasance",
    partOfSpeech: "noun",
    definition: "Wrongdoing, especially by a public official; illegal or dishonest activity.",
    keyConcepts: [
      { keyword: "wrongdoing", matchTerms: ["wrongdoing", "misconduct", "illegal", "dishonest", "corruption", "crime", "fraud", "malpractice", "abuse", "violation", "offense", "offence", "transgression"], label: "Wrongdoing; illegal activity", hint: "The definition says 'wrongdoing, especially by a public official' -- criminal or corrupt behavior." },
      { keyword: "public official", matchTerms: ["public", "official", "government", "authority", "office", "position", "power", "trust", "duty", "elected"], label: "Especially by a public official", hint: "The definition says 'especially by a public official' -- malfeasance often involves abuse of power." },
    ],
    synonyms: ["misconduct", "corruption", "wrongdoing"],
    etymology: "Anglo-French malfaisance -- mal (evil, bad) + faisance (doing), from faire (to do).",
  },
  // ── 256. meretricious ──
  {
    word: "meretricious",
    partOfSpeech: "adjective",
    definition: "Apparently attractive but having in reality no value or integrity; showy but cheap.",
    keyConcepts: [
      { keyword: "apparently attractive", matchTerms: ["apparently", "attractive", "appealing", "alluring", "eye-catching", "flashy", "showy", "gaudy", "garish", "glitzy", "glamorous"], label: "Apparently attractive", hint: "The definition says 'apparently attractive' -- it looks good on the surface." },
      { keyword: "no real value", matchTerms: ["no value", "no integrity", "cheap", "worthless", "hollow", "superficial", "fake", "false", "misleading", "deceptive", "insincere", "tawdry", "tasteless", "vulgar"], label: "No real value or integrity", hint: "The definition says 'having in reality no value or integrity' -- the appeal is a facade." },
    ],
    synonyms: ["gaudy", "tawdry", "flashy"],
    etymology: "Latin meretricius, from meretrix, from merere (to earn money).",
  },
  // ── 257. mordant ──
  {
    word: "mordant",
    partOfSpeech: "adjective",
    definition: "Having or showing a sharp or critical quality; biting in wit or expression.",
    keyConcepts: [
      { keyword: "sharp and critical", matchTerms: ["sharp", "critical", "biting", "cutting", "caustic", "incisive", "acerbic", "sardonic", "scathing", "trenchant", "acid", "stinging", "piercing", "harsh"], label: "Sharp or critical quality", hint: "The definition says 'having or showing a sharp or critical quality' -- mordant commentary cuts deep." },
      { keyword: "biting wit", matchTerms: ["wit", "humor", "humour", "sarcas", "irony", "clever", "dry", "dark", "pointed", "barbed"], label: "Biting in wit or expression", hint: "The definition says 'biting in wit or expression' -- humor that stings." },
    ],
    synonyms: ["caustic", "acerbic", "sardonic"],
    etymology: "French mordant, from mordre, from Latin mordere (to bite).",
  },
  // ── 258. nadir ──
  {
    word: "nadir",
    partOfSpeech: "noun",
    definition: "The lowest point in the fortunes of a person or organization; the point of greatest adversity.",
    keyConcepts: [
      { keyword: "lowest point", matchTerms: ["lowest", "point", "bottom", "depths", "rock bottom", "minimum", "trough", "floor", "pit"], label: "Lowest point", hint: "The definition says 'the lowest point' -- the very bottom of the arc." },
      { keyword: "greatest adversity", matchTerms: ["greatest adversity", "worst", "bleakest", "darkest", "crisis", "despair", "downfall", "ruin", "misfortune", "hardship", "decline"], label: "Of greatest adversity", hint: "The definition says 'the point of greatest adversity' -- things can't get any worse from here." },
    ],
    synonyms: ["low point", "bottom", "depths"],
    etymology: "Arabic nazir (opposite to), as in nazir as-samt (opposite the zenith).",
  },
  // ── 259. obsequious ──
  {
    word: "obsequious",
    partOfSpeech: "adjective",
    definition: "Obedient or attentive to an excessive or servile degree; fawning.",
    keyConcepts: [
      { keyword: "excessively obedient", matchTerms: ["obedien", "attentiv", "excessive", "servile", "submissiv", "subservient", "compliant", "deferential", "groveling", "grovelling", "sycophantic", "slavish"], label: "Excessively obedient or attentive", hint: "The definition says 'obedient or attentive to an excessive or servile degree' -- overdoing the submission." },
      { keyword: "fawning", matchTerms: ["fawning", "flattering", "ingratiat", "toadying", "bootlicking", "kowtowing", "cringing", "unctuous", "oily", "smarmy"], label: "Fawning", hint: "The definition says 'fawning' -- desperate to please those in power." },
    ],
    synonyms: ["sycophantic", "servile", "fawning"],
    etymology: "Latin obsequiosus, from obsequi -- ob (toward) + sequi (to follow).",
  },
  // ── 260. officious ──
  {
    word: "officious",
    partOfSpeech: "adjective",
    definition: "Asserting authority or interfering in a domineering way, especially in trivial matters.",
    keyConcepts: [
      { keyword: "asserting authority", matchTerms: ["assert", "authority", "interfere", "meddl", "intrusive", "busybody", "nosy", "pushy", "domineering", "bossy", "overbearing", "imperious"], label: "Asserting authority; interfering", hint: "The definition says 'asserting authority or interfering in a domineering way' -- sticking their nose where it doesn't belong." },
      { keyword: "trivial matters", matchTerms: ["trivial", "petty", "minor", "unimportant", "small", "insignificant", "unnecessary", "excessive", "overzealo"], label: "Especially in trivial matters", hint: "The definition says 'especially in trivial matters' -- making a big deal out of nothing." },
    ],
    synonyms: ["meddlesome", "intrusive", "domineering"],
    etymology: "Latin officiosus, from officium (duty, service).",
  },
  // ── 261. opprobrium ──
  {
    word: "opprobrium",
    partOfSpeech: "noun",
    definition: "Harsh criticism or censure; the public disgrace arising from shameful conduct.",
    keyConcepts: [
      { keyword: "harsh criticism", matchTerms: ["harsh", "criticism", "censur", "condemnation", "denounc", "reproach", "rebuk", "scorn", "vilif", "obloquy"], label: "Harsh criticism or censure", hint: "The definition says 'harsh criticism or censure' -- severe public rebuke." },
      { keyword: "public disgrace", matchTerms: ["public", "disgrace", "shame", "dishonor", "dishonour", "infamy", "humiliation", "ignominy", "stigma", "notoriety"], label: "Public disgrace from shameful conduct", hint: "The definition says 'public disgrace arising from shameful conduct' -- the shame that follows wrongdoing." },
    ],
    synonyms: ["disgrace", "infamy", "censure"],
    etymology: "Latin opprobrium -- ob (against) + probrum (shameful act, infamy).",
  },
  // ── 262. palimpsest ──
  {
    word: "palimpsest",
    partOfSpeech: "noun",
    definition: "A manuscript or piece of writing material on which the original writing has been effaced to make room for later writing, but traces of the original remain.",
    keyConcepts: [
      { keyword: "original erased", matchTerms: ["original", "erased", "effaced", "overwritten", "replaced", "removed", "scraped", "cleared", "wiped", "obscured", "covered"], label: "Original writing effaced", hint: "The definition says 'original writing has been effaced to make room for later writing' -- the old text was removed." },
      { keyword: "traces remain", matchTerms: ["traces", "remain", "visible", "beneath", "under", "layers", "ghost", "faint", "residual", "vestige", "remnant", "echo"], label: "But traces of the original remain", hint: "The definition says 'but traces of the original remain' -- the past shows through." },
    ],
    synonyms: ["overwritten text", "layered manuscript"],
    etymology: "Greek palimpsestos -- palin (again) + psestos (scraped), from psen (to rub smooth).",
  },
  // ── 263. parsimonious ──
  {
    word: "parsimonious",
    partOfSpeech: "adjective",
    definition: "Excessively unwilling to spend money or use resources; miserly.",
    keyConcepts: [
      { keyword: "unwilling to spend", matchTerms: ["unwilling", "spend", "money", "cheap", "stingy", "miserly", "tight-fisted", "penny-pinching", "frugal", "thrifty", "niggardly", "mean", "closefisted", "skinflint"], label: "Excessively unwilling to spend", hint: "The definition says 'excessively unwilling to spend money or use resources' -- extreme cheapness." },
    ],
    synonyms: ["miserly", "stingy", "tight-fisted"],
    etymology: "Latin parsimonia, from parcere (to spare, refrain).",
  },
  // ── 264. penchant ──
  {
    word: "penchant",
    partOfSpeech: "noun",
    definition: "A strong or habitual liking for something or tendency to do something.",
    keyConcepts: [
      { keyword: "strong liking", matchTerms: ["strong", "liking", "fondness", "taste", "preference", "affinity", "inclination", "predilection", "proclivity", "weakness", "love", "passion", "appetite"], label: "A strong liking or tendency", hint: "The definition says 'a strong or habitual liking for something or tendency to do something' -- a natural pull toward something." },
    ],
    synonyms: ["fondness", "predilection", "inclination"],
    etymology: "French penchant, present participle of pencher, from Latin pendere (to hang, weigh).",
  },
  // ── 265. penurious ──
  {
    word: "penurious",
    partOfSpeech: "adjective",
    definition: "Extremely poor; poverty-stricken. Also: excessively unwilling to spend money.",
    keyConcepts: [
      { keyword: "extremely poor", matchTerms: ["extreme", "poor", "poverty", "destitut", "impoverish", "indigent", "pennil", "needy", "broke", "bankrupt"], label: "Extremely poor", hint: "The definition says 'extremely poor; poverty-stricken' -- living in dire financial circumstances." },
      { keyword: "unwilling to spend", matchTerms: ["unwilling to spend", "stingy", "miserly", "cheap", "tight", "parsimonious", "frugal", "mean", "closefist"], label: "Unwilling to spend money", hint: "The definition also says 'excessively unwilling to spend money' -- penurious can also mean miserly." },
    ],
    synonyms: ["destitute", "impoverished", "miserly"],
    etymology: "Latin penuria. Related to Greek penia and peina.",
  },
  // ── 266. perspicacious ──
  {
    word: "perspicacious",
    partOfSpeech: "adjective",
    definition: "Having a ready insight into and understanding of things; shrewd.",
    keyConcepts: [
      { keyword: "ready insight", matchTerms: ["insight", "understanding", "perceiv", "perceptiv", "discern", "astute", "shrewd", "sharp", "keen", "penetrating", "acute", "sagacious", "wise", "clever", "intelligent", "quick-witted"], label: "Having ready insight and understanding", hint: "The definition says 'having a ready insight into and understanding of things' -- naturally quick to grasp the truth." },
    ],
    synonyms: ["shrewd", "astute", "perceptive"],
    etymology: "Latin perspicax, from perspicere -- per (through) + specere (to look).",
  },
  // ── 267. plangent ──
  {
    word: "plangent",
    partOfSpeech: "adjective",
    definition: "Having a loud, reverberating sound; expressing or suggesting sadness.",
    keyConcepts: [
      { keyword: "loud reverberating", matchTerms: ["loud", "reverberat", "resonant", "ringing", "booming", "thundering", "echoing", "deep", "sonorous", "rumbling"], label: "Loud and reverberating", hint: "The definition says 'having a loud, reverberating sound' -- a deep, echoing tone." },
      { keyword: "suggesting sadness", matchTerms: ["sadness", "sad", "mournful", "melancholy", "sorrowful", "plaintive", "doleful", "wistful", "poignant", "haunting"], label: "Expressing or suggesting sadness", hint: "The definition says 'expressing or suggesting sadness' -- the sound carries emotional weight." },
    ],
    synonyms: ["resonant", "mournful", "reverberating"],
    etymology: "Latin plangens, from plangere (to beat, strike, lament).",
  },
  // ── 268. polemic ──
  {
    word: "polemic",
    partOfSpeech: "noun",
    definition: "A strong verbal or written attack on someone or something; a controversial argument.",
    keyConcepts: [
      { keyword: "strong attack", matchTerms: ["strong", "attack", "assault", "critique", "criticism", "diatribe", "tirade", "denunciation", "invective", "broadside", "salvo"], label: "Strong verbal or written attack", hint: "The definition says 'a strong verbal or written attack' -- polemics are aggressive." },
      { keyword: "controversial argument", matchTerms: ["controversial", "argument", "debate", "dispute", "contentious", "divisive", "provocative", "combative", "adversarial", "aggressive"], label: "Controversial argument", hint: "The definition says 'a controversial argument' -- polemics take a forceful side." },
    ],
    synonyms: ["diatribe", "invective", "attack"],
    etymology: "Greek polemikos, from polemos (war).",
  },
  // ── 269. probity ──
  {
    word: "probity",
    partOfSpeech: "noun",
    definition: "The quality of having strong moral principles; honesty and decency.",
    keyConcepts: [
      { keyword: "strong moral principles", matchTerms: ["moral", "principle", "ethics", "integrity", "virtue", "righteousness", "upright", "rectitude", "honor", "honour", "honest", "decency", "character", "conscience", "incorrupt"], label: "Strong moral principles; honesty", hint: "The definition says 'the quality of having strong moral principles; honesty and decency' -- deep ethical integrity." },
    ],
    synonyms: ["integrity", "honesty", "rectitude"],
    etymology: "Latin probitas, from probus (good, honest).",
  },
  // ── 270. profligate ──
  {
    word: "profligate",
    partOfSpeech: "adjective",
    definition: "Recklessly extravagant or wasteful in the use of resources; shamelessly immoral.",
    keyConcepts: [
      { keyword: "recklessly extravagant", matchTerms: ["reckless", "extravagan", "wasteful", "lavish", "prodigal", "spendthrift", "squander", "excessive", "immoderate", "improvident"], label: "Recklessly extravagant or wasteful", hint: "The definition says 'recklessly extravagant or wasteful' -- spending without thought." },
      { keyword: "shamelessly immoral", matchTerms: ["shameless", "immoral", "dissolute", "debauch", "degenerat", "decaden", "licentious", "wanton", "corrupt"], label: "Shamelessly immoral", hint: "The definition says 'shamelessly immoral' -- profligacy often extends to behavior as well." },
    ],
    synonyms: ["wasteful", "extravagant", "dissolute"],
    etymology: "Latin profligatus, from profligare -- pro (forward) + fligere (to strike).",
  },
  // ── 271. propitiate ──
  {
    word: "propitiate",
    partOfSpeech: "verb",
    definition: "To win or regain the favor of a god, spirit, or person by doing something that pleases them.",
    keyConcepts: [
      { keyword: "win or regain favor", matchTerms: ["win", "regain", "favor", "favour", "appeas", "placate", "conciliat", "pacif", "mollif", "satisfy", "please", "make amends"], label: "Win or regain favor", hint: "The definition says 'win or regain the favor of' -- trying to get back on someone's good side." },
      { keyword: "by pleasing them", matchTerms: ["pleas", "offering", "sacrifice", "gift", "gesture", "atonement", "reconciliat", "peace", "olive branch"], label: "By doing something that pleases them", hint: "The definition says 'by doing something that pleases them' -- propitiation requires an offering of some kind." },
    ],
    synonyms: ["appease", "placate", "mollify"],
    etymology: "Latin propitiare, from propitius (favorable, gracious).",
  },
  // ── 272. proscribe ──
  {
    word: "proscribe",
    partOfSpeech: "verb",
    definition: "To forbid, especially by law; to condemn or denounce.",
    keyConcepts: [
      { keyword: "forbid by law", matchTerms: ["forbid", "law", "ban", "prohibit", "outlaw", "bar", "interdict", "restrict", "disallow", "veto", "embargo", "suppress"], label: "Forbid, especially by law", hint: "The definition says 'to forbid, especially by law' -- an official prohibition." },
      { keyword: "condemn or denounce", matchTerms: ["condemn", "denounc", "censur", "reject", "exile", "banish", "ostraciz", "blacklist"], label: "Condemn or denounce", hint: "The definition says 'to condemn or denounce' -- proscribing involves both banning and condemning." },
    ],
    synonyms: ["forbid", "ban", "prohibit"],
    etymology: "Latin proscribere -- pro (before) + scribere (to write).",
  },
  // ── 273. pusillanimous ──
  {
    word: "pusillanimous",
    partOfSpeech: "adjective",
    definition: "Showing a lack of courage or determination; timid.",
    keyConcepts: [
      { keyword: "lack of courage", matchTerms: ["lack of courage", "cowardly", "timid", "fearful", "spineless", "faint-hearted", "craven", "weak", "lily-livered", "gutless", "meek", "submissive", "shrinking", "cower"], label: "Showing lack of courage; timid", hint: "The definition says 'showing a lack of courage or determination; timid' -- too scared to act." },
    ],
    synonyms: ["cowardly", "timid", "spineless"],
    etymology: "Latin pusillanimis -- pusillus (very small) + animus (spirit, courage).",
  },
  // ── 274. querulous ──
  {
    word: "querulous",
    partOfSpeech: "adjective",
    definition: "Complaining in a petulant or whining manner.",
    keyConcepts: [
      { keyword: "complaining", matchTerms: ["complain", "grumbl", "whine", "moan", "gripe", "nag", "carp", "kvetch", "fuss", "fret", "lament"], label: "Complaining", hint: "The definition says 'complaining' -- querulous people never stop voicing grievances." },
      { keyword: "petulant or whining", matchTerms: ["petulant", "whining", "peevish", "irritable", "cranky", "sulky", "testy", "fretful", "snappish", "waspish", "captious", "cantankerous"], label: "In a petulant or whining manner", hint: "The definition says 'in a petulant or whining manner' -- the complaints have a childish, annoying quality." },
    ],
    synonyms: ["whining", "petulant", "peevish"],
    etymology: "Latin querulus, from queri (to complain).",
  },
  // ── 275. recalcitrant ──
  {
    word: "recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "obstinately uncooperative", matchTerms: ["obstinat", "uncooperativ", "defiant", "rebellious", "resistant", "disobedient", "stubborn", "intransigen", "refractory", "wayward", "willful", "headstrong", "contrary", "unruly", "unmanageabl"], label: "Obstinately uncooperative", hint: "The definition says 'having an obstinately uncooperative attitude' -- refusing to go along." },
      { keyword: "toward authority", matchTerms: ["authority", "discipline", "control", "rule", "order", "management", "instruction", "command", "law", "regulation"], label: "Toward authority or discipline", hint: "The definition says 'toward authority or discipline' -- recalcitrance is specifically about resisting those in charge." },
    ],
    synonyms: ["defiant", "unruly", "stubborn"],
    etymology: "Latin recalcitrare -- re (back) + calcitrare (to kick), from calx (heel).",
  },
  // ── 276. recondite ──
  {
    word: "recondite",
    partOfSpeech: "adjective",
    definition: "Little known; abstruse; dealing with very profound or difficult subject matter.",
    keyConcepts: [
      { keyword: "little known", matchTerms: ["little known", "obscur", "esoteric", "arcane", "abstruse", "hidden", "secret", "uncommon", "rare", "unusual", "unfamiliar", "unknown"], label: "Little known; obscure", hint: "The definition says 'little known; abstruse' -- outside common knowledge." },
      { keyword: "difficult subject matter", matchTerms: ["difficult", "subject", "profound", "complex", "deep", "scholarly", "academic", "erudite", "intellectual", "specialized", "technical"], label: "Dealing with difficult subject matter", hint: "The definition says 'dealing with very profound or difficult subject matter' -- not easy to grasp." },
    ],
    synonyms: ["obscure", "esoteric", "abstruse"],
    etymology: "Latin reconditus, from recondere -- re (back) + condere (to store, hide).",
  },
  // ── 277. redoubtable ──
  {
    word: "redoubtable",
    partOfSpeech: "adjective",
    definition: "Formidable, especially as an opponent; commanding respect or fear.",
    keyConcepts: [
      { keyword: "formidable", matchTerms: ["formidabl", "fearsome", "daunting", "imposing", "powerful", "mighty", "strong", "intimidat", "impressive", "awesome", "commanding"], label: "Formidable; especially as opponent", hint: "The definition says 'formidable, especially as an opponent' -- someone you'd rather not face." },
      { keyword: "commanding respect", matchTerms: ["command", "respect", "fear", "aw", "rever", "admiration", "esteem", "veneration", "deference"], label: "Commanding respect or fear", hint: "The definition says 'commanding respect or fear' -- their strength earns deference." },
    ],
    synonyms: ["formidable", "fearsome", "impressive"],
    etymology: "French redoutable, from redouter -- re (intensive) + douter (to doubt, fear).",
  },
  // ── 278. remonstrate ──
  {
    word: "remonstrate",
    partOfSpeech: "verb",
    definition: "To make a forcefully reproachful protest; to argue or plead in opposition.",
    keyConcepts: [
      { keyword: "forceful protest", matchTerms: ["forceful", "protest", "object", "complain", "argue", "challenge", "reproach", "rebuk", "admonish", "chid", "upbraid"], label: "Forcefully reproachful protest", hint: "The definition says 'make a forcefully reproachful protest' -- strong vocal objection." },
      { keyword: "plead in opposition", matchTerms: ["plead", "opposition", "oppos", "resist", "dissent", "disagree", "contend", "reason", "urge", "appeal", "expostulat"], label: "Argue or plead in opposition", hint: "The definition says 'argue or plead in opposition' -- trying to change someone's mind through vigorous debate." },
    ],
    synonyms: ["protest", "object", "argue"],
    etymology: "Latin remonstrare -- re (again) + monstrare (to show).",
  },
  // ── 279. reprobate ──
  {
    word: "reprobate",
    partOfSpeech: "noun",
    definition: "An unprincipled or depraved person; someone morally corrupt.",
    keyConcepts: [
      { keyword: "unprincipled", matchTerms: ["unprincipled", "depraved", "immoral", "corrupt", "wicked", "sinful", "villainous", "degenerat", "dissolute", "debauched", "shameless", "scoundrel", "rogue"], label: "Unprincipled or depraved person", hint: "The definition says 'an unprincipled or depraved person' -- lacking any moral compass." },
    ],
    synonyms: ["scoundrel", "villain", "rogue"],
    etymology: "Latin reprobatus, from reprobare -- re (back) + probare (to approve, test).",
  },
  // ── 280. sanguine ──
  {
    word: "sanguine",
    partOfSpeech: "adjective",
    definition: "Optimistic or positive, especially in an apparently difficult situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimistic", "positive", "hopeful", "confident", "upbeat", "cheerful", "buoyant", "assured", "expectant", "encouraged", "bright", "rosy"], label: "Optimistic or positive", hint: "The definition says 'optimistic or positive' -- seeing the bright side." },
      { keyword: "in difficult situation", matchTerms: ["difficult", "situation", "adversity", "challenge", "hardship", "despite", "nevertheless", "regardless", "even when", "bad times", "trouble"], label: "In a difficult situation", hint: "The definition says 'especially in an apparently difficult situation' -- maintaining hope when things look bad." },
    ],
    synonyms: ["optimistic", "hopeful", "confident"],
    etymology: "Latin sanguineus, from sanguis (blood).",
  },
  // ── 281. sardonic ──
  {
    word: "sardonic",
    partOfSpeech: "adjective",
    definition: "Grimly mocking or cynical; disdainfully humorous.",
    keyConcepts: [
      { keyword: "grimly mocking", matchTerms: ["grim", "mocking", "scornful", "sneering", "derisive", "contemptuous", "disdainful", "bitter", "caustic", "acerbic", "mordant", "wry", "ironic"], label: "Grimly mocking or cynical", hint: "The definition says 'grimly mocking or cynical' -- dark humor laced with contempt." },
    ],
    synonyms: ["cynical", "mocking", "derisive"],
    etymology: "Greek sardonios, possibly from a Sardinian plant (herba sardonia).",
  },
  // ── 282. sartorial ──
  {
    word: "sartorial",
    partOfSpeech: "adjective",
    definition: "Relating to tailoring, clothes, or style of dress.",
    keyConcepts: [
      { keyword: "relating to clothes", matchTerms: ["cloth", "clothing", "dress", "tailor", "fashion", "garment", "apparel", "attire", "wardrobe", "outfit", "style", "wear", "sewing", "fabric"], label: "Relating to clothes or style of dress", hint: "The definition says 'relating to tailoring, clothes, or style of dress' -- sartorial is about how people dress." },
    ],
    synonyms: ["clothing-related", "fashion", "dress"],
    etymology: "Latin sartor, from sarcire (to patch, mend).",
  },
  // ── 283. scurrilous ──
  {
    word: "scurrilous",
    partOfSpeech: "adjective",
    definition: "Making or spreading scandalous claims about someone with the intention of damaging their reputation; humorously insulting.",
    keyConcepts: [
      { keyword: "scandalous claims", matchTerms: ["scandalous", "claims", "defamatory", "slanderous", "libelous", "malicious", "baseless", "false", "abusive", "vituperative", "calumnious"], label: "Making scandalous claims", hint: "The definition says 'making or spreading scandalous claims about someone' -- spreading damaging falsehoods." },
      { keyword: "damaging reputation", matchTerms: ["damag", "reputation", "smear", "discredit", "vilify", "malign", "tarnish", "attack", "destroy"], label: "With intention of damaging reputation", hint: "The definition says 'with the intention of damaging their reputation' -- the goal is to destroy someone's standing." },
    ],
    synonyms: ["defamatory", "slanderous", "abusive"],
    etymology: "Latin scurrilis, from scurra (buffoon, jester).",
  },
  // ── 284. sedulous ──
  {
    word: "sedulous",
    partOfSpeech: "adjective",
    definition: "Showing dedication and diligence; persevering and hard-working.",
    keyConcepts: [
      { keyword: "dedication and diligence", matchTerms: ["dedication", "diligence", "diligent", "industrious", "hardworking", "assiduous", "painstaking", "meticulous", "thorough", "conscientious", "attentive", "careful", "persistent", "tireless", "devoted"], label: "Showing dedication and diligence", hint: "The definition says 'showing dedication and diligence' -- persistently putting in the work." },
    ],
    synonyms: ["diligent", "industrious", "assiduous"],
    etymology: "Latin sedulus, from sedulo, from se (without) + dolus (trickery).",
  },
  // ── 285. sibilant ──
  {
    word: "sibilant",
    partOfSpeech: "adjective",
    definition: "Making or characterized by a hissing sound.",
    keyConcepts: [
      { keyword: "hissing sound", matchTerms: ["hissing", "sound", "hiss", "whisper", "sizzle", "fizz", "lisp", "rustle", "shh", "snake", "sssss", "sharp", "soft"], label: "Characterized by a hissing sound", hint: "The definition says 'making or characterized by a hissing sound' -- like the sound of an S or SH." },
    ],
    synonyms: ["hissing", "whispering", "fizzing"],
    etymology: "Latin sibilans, from sibilare (to hiss, whistle).",
  },
  // ── 286. solecism ──
  {
    word: "solecism",
    partOfSpeech: "noun",
    definition: "A grammatical mistake in speech or writing; a breach of good manners or etiquette.",
    keyConcepts: [
      { keyword: "grammatical mistake", matchTerms: ["grammatical", "mistake", "error", "blunder", "incorrect", "wrong", "improper", "usage", "language", "speech", "writing", "syntax"], label: "Grammatical mistake", hint: "The definition says 'a grammatical mistake in speech or writing' -- a language error." },
      { keyword: "breach of etiquette", matchTerms: ["breach", "manners", "etiquette", "faux pas", "gaffe", "indiscretion", "impropriety", "social error", "tactless", "blunder"], label: "Breach of good manners", hint: "The definition says 'a breach of good manners or etiquette' -- solecisms can also be social mistakes." },
    ],
    synonyms: ["blunder", "gaffe", "impropriety"],
    etymology: "Greek soloikismos, from Soloi, an Athenian colony in Cilicia.",
  },
  // ── 287. specious ──
  {
    word: "specious",
    partOfSpeech: "adjective",
    definition: "Superficially plausible but actually wrong; misleading in appearance.",
    keyConcepts: [
      { keyword: "superficially plausible", matchTerms: ["superficial", "plausible", "appear", "seem", "surface", "convincing", "reasonable", "believable", "credible", "ostensible"], label: "Superficially plausible", hint: "The definition says 'superficially plausible' -- it looks right on the surface." },
      { keyword: "actually wrong", matchTerms: ["actually wrong", "false", "incorrect", "misleading", "deceptive", "fallacious", "spurious", "fraudulent", "bogus", "unsound", "flawed", "erroneous"], label: "But actually wrong; misleading", hint: "The definition says 'but actually wrong; misleading in appearance' -- the plausibility is a lie." },
    ],
    synonyms: ["misleading", "fallacious", "deceptive"],
    etymology: "Latin speciosus, from species (appearance).",
  },
  // ── 288. superannuated ──
  {
    word: "superannuated",
    partOfSpeech: "adjective",
    definition: "Outdated or old-fashioned; too old to be effective or useful.",
    keyConcepts: [
      { keyword: "outdated", matchTerms: ["outdated", "old-fashioned", "obsolete", "antiquated", "archaic", "outmoded", "passe", "defunct", "anachronistic", "behind the times"], label: "Outdated or old-fashioned", hint: "The definition says 'outdated or old-fashioned' -- no longer current." },
      { keyword: "too old to be useful", matchTerms: ["too old", "ineffective", "useless", "worn out", "past it", "decrepit", "enfeebled", "retired", "pensioned", "past its prime", "over the hill"], label: "Too old to be effective", hint: "The definition says 'too old to be effective or useful' -- age has made it obsolete." },
    ],
    synonyms: ["outdated", "obsolete", "antiquated"],
    etymology: "Medieval Latin superannuatus -- super (beyond) + annus (year).",
  },
  // ── 289. supine ──
  {
    word: "supine",
    partOfSpeech: "adjective",
    definition: "Lying face upward; failing to act or protest as a result of moral weakness or indolence.",
    keyConcepts: [
      { keyword: "lying face upward", matchTerms: ["lying", "face up", "upward", "flat on back", "reclin", "prostrate", "horizontal", "recumbent"], label: "Lying face upward", hint: "The definition says 'lying face upward' -- the physical position." },
      { keyword: "failing to act", matchTerms: ["fail", "act", "protest", "passive", "inactive", "submissive", "lazy", "indolent", "apathetic", "lethargic", "spineless", "compliant", "acquiescent"], label: "Failing to act from weakness", hint: "The definition says 'failing to act or protest as a result of moral weakness or indolence' -- too passive to do anything about it." },
    ],
    synonyms: ["passive", "indolent", "submissive"],
    etymology: "Latin supinus, from sub (under) + a root meaning 'up.'",
  },
  // ── 290. sybaritic ──
  {
    word: "sybaritic",
    partOfSpeech: "adjective",
    definition: "Fond of sensuous luxury or pleasure; self-indulgent.",
    keyConcepts: [
      { keyword: "fond of luxury", matchTerms: ["fond", "luxury", "luxurious", "pleasure", "sensuous", "opulent", "lavish", "extravagan", "sumptuous", "hedonistic", "voluptuous", "epicurean", "decaden"], label: "Fond of sensuous luxury", hint: "The definition says 'fond of sensuous luxury or pleasure' -- living for physical pleasures." },
      { keyword: "self-indulgent", matchTerms: ["self-indulgen", "indulgen", "pamper", "spoiled", "decadent", "excessive", "gratif", "pleasure-seeking"], label: "Self-indulgent", hint: "The definition says 'self-indulgent' -- sybarites deny themselves nothing." },
    ],
    synonyms: ["hedonistic", "luxurious", "self-indulgent"],
    etymology: "From Sybaris, a Greek colony in southern Italy.",
  },
  // ── 291. sycophant ──
  {
    word: "sycophant",
    partOfSpeech: "noun",
    definition: "A person who acts obsequiously toward someone important in order to gain advantage; a flatterer.",
    keyConcepts: [
      { keyword: "acts obsequiously", matchTerms: ["obsequious", "servile", "fawning", "groveling", "grovelling", "submissive", "slavish", "toady", "bootlick", "kowtow", "cringe"], label: "Acts obsequiously", hint: "The definition says 'acts obsequiously toward someone important' -- excessively deferential behavior." },
      { keyword: "to gain advantage", matchTerms: ["gain", "advantage", "benefit", "favor", "favour", "profit", "reward", "advancement", "self-interest", "ulterior", "opportunist", "flatter"], label: "To gain advantage; a flatterer", hint: "The definition says 'in order to gain advantage; a flatterer' -- the fawning is calculated." },
    ],
    synonyms: ["flatterer", "toady", "bootlicker"],
    etymology: "Greek sykophantes -- sykon (fig) + phainein (to show). The true origin is debated.",
  },
  // ── 292. tendentious ──
  {
    word: "tendentious",
    partOfSpeech: "adjective",
    definition: "Expressing or intending to promote a particular cause or point of view, especially a controversial one.",
    keyConcepts: [
      { keyword: "promoting a viewpoint", matchTerms: ["promot", "cause", "point of view", "viewpoint", "opinion", "agenda", "bias", "biased", "partisan", "one-sided", "slanted", "skewed", "propagandist"], label: "Promoting a particular viewpoint", hint: "The definition says 'intending to promote a particular cause or point of view' -- there's an agenda behind it." },
      { keyword: "controversial", matchTerms: ["controversial", "contentious", "divisive", "polarizing", "provocative", "dispute", "debate", "arguabl"], label: "Especially a controversial one", hint: "The definition says 'especially a controversial one' -- tendentious arguments are inherently divisive." },
    ],
    synonyms: ["biased", "partisan", "one-sided"],
    etymology: "German tendenzioes, from Latin tendere (to stretch, aim toward).",
  },
  // ── 293. threnody ──
  {
    word: "threnody",
    partOfSpeech: "noun",
    definition: "A song, hymn, or poem of mourning composed or performed as a memorial to a dead person.",
    keyConcepts: [
      { keyword: "song or poem", matchTerms: ["song", "hymn", "poem", "lament", "elegy", "dirge", "composition", "piece", "verse", "ode", "musical"], label: "Song, hymn, or poem", hint: "The definition says 'a song, hymn, or poem' -- a creative work." },
      { keyword: "mourning the dead", matchTerms: ["mourn", "dead", "death", "memorial", "funeral", "grief", "loss", "tribute", "remembrance", "commemorate", "honor", "honour", "farewell"], label: "Of mourning for the dead", hint: "The definition says 'of mourning composed as a memorial to a dead person' -- a tribute to someone who has passed." },
    ],
    synonyms: ["elegy", "dirge", "lament"],
    etymology: "Greek threnodia -- threnos (wailing, dirge) + oide (song, ode).",
  },
  // ── 294. timorous ──
  {
    word: "timorous",
    partOfSpeech: "adjective",
    definition: "Showing or suffering from nervousness, fear, or a lack of confidence.",
    keyConcepts: [
      { keyword: "nervousness or fear", matchTerms: ["nervous", "fear", "afraid", "frightened", "scared", "anxious", "apprehensive", "timid", "shy", "meek", "diffident", "trembling", "quaking", "cowering", "skittish"], label: "Showing nervousness or fear", hint: "The definition says 'showing nervousness, fear, or a lack of confidence' -- easily scared and unsure." },
    ],
    synonyms: ["timid", "fearful", "nervous"],
    etymology: "Latin timorosus, from timor (fear), from timere (to fear).",
  },
  // ── 295. trenchant ──
  {
    word: "trenchant",
    partOfSpeech: "adjective",
    definition: "Vigorous or incisive in expression or style; sharp and penetrating in analysis.",
    keyConcepts: [
      { keyword: "vigorous and incisive", matchTerms: ["vigorous", "incisive", "sharp", "cutting", "penetrating", "keen", "pointed", "forceful", "powerful", "effective", "clear", "decisive", "direct", "emphatic"], label: "Vigorous or incisive in expression", hint: "The definition says 'vigorous or incisive in expression or style' -- cutting right to the heart of the matter." },
    ],
    synonyms: ["incisive", "sharp", "penetrating"],
    etymology: "Old French trenchant, from trenchier, from Latin truncare (to cut off).",
  },
  // ── 296. turgid ──
  {
    word: "turgid",
    partOfSpeech: "adjective",
    definition: "Swollen and distended; using language that is pompous or bombastic.",
    keyConcepts: [
      { keyword: "swollen", matchTerms: ["swollen", "distended", "bloated", "inflated", "puffy", "engorged", "enlarged", "bulging", "congested", "tumid"], label: "Swollen and distended", hint: "The definition says 'swollen and distended' -- physically puffed up." },
      { keyword: "pompous language", matchTerms: ["pompous", "bombastic", "grandiloquent", "overblown", "verbose", "inflated", "pretentious", "extravagant", "overwrought", "florid", "flowery", "ornate"], label: "Pompous or bombastic language", hint: "The definition says 'using language that is pompous or bombastic' -- needlessly overblown prose." },
    ],
    synonyms: ["bombastic", "pompous", "bloated"],
    etymology: "Latin turgidus, from turgere (to swell).",
  },
  // ── 297. unctuous ──
  {
    word: "unctuous",
    partOfSpeech: "adjective",
    definition: "Excessively or ingratiatingly flattering; oily in manner.",
    keyConcepts: [
      { keyword: "excessively flattering", matchTerms: ["excessive", "flattering", "ingratiat", "smarmy", "oily", "slick", "glib", "smooth", "suave", "insincere", "sycophantic", "fawning", "obsequious", "honeyed"], label: "Excessively flattering; oily", hint: "The definition says 'excessively or ingratiatingly flattering; oily in manner' -- their charm feels slippery and fake." },
    ],
    synonyms: ["smarmy", "oily", "ingratiating"],
    etymology: "Latin unctuosus, from unctum (ointment), from ungere (to anoint).",
  },
  // ── 298. venal ──
  {
    word: "venal",
    partOfSpeech: "adjective",
    definition: "Showing or motivated by susceptibility to bribery; morally corrupt.",
    keyConcepts: [
      { keyword: "susceptible to bribery", matchTerms: ["bribery", "bribe", "corrupt", "buyabl", "purchasabl", "dishonest", "mercenary", "crooked", "unprincipled", "unscrupulous", "bent"], label: "Susceptible to bribery", hint: "The definition says 'showing susceptibility to bribery' -- willing to be bought." },
      { keyword: "morally corrupt", matchTerms: ["moral", "corrupt", "dishonest", "unethical", "degraded", "depraved", "shameless", "base"], label: "Morally corrupt", hint: "The definition says 'morally corrupt' -- venal people have sold their integrity." },
    ],
    synonyms: ["corrupt", "bribable", "mercenary"],
    etymology: "Latin venalis, from venum (sale).",
  },
  // ── 299. vertiginous ──
  {
    word: "vertiginous",
    partOfSpeech: "adjective",
    definition: "Causing vertigo, especially by being extremely high or steep; relating to or affected by dizziness.",
    keyConcepts: [
      { keyword: "causing vertigo", matchTerms: ["vertigo", "dizzy", "dizziness", "disorienting", "giddy", "lightheaded", "unsteady", "nauseating", "spinning", "reeling"], label: "Causing vertigo or dizziness", hint: "The definition says 'causing vertigo' -- makes your head spin." },
      { keyword: "extremely high or steep", matchTerms: ["extreme", "high", "steep", "towering", "precipitous", "sheer", "lofty", "elevated", "dizzying heights", "plunging", "abyssal"], label: "Extremely high or steep", hint: "The definition says 'especially by being extremely high or steep' -- the height triggers the dizziness." },
    ],
    synonyms: ["dizzying", "giddy", "precipitous"],
    etymology: "Latin vertiginosus, from vertigo (whirling), from vertere (to turn).",
  },
  // ── 300. vitiate ──
  {
    word: "vitiate",
    partOfSpeech: "verb",
    definition: "To spoil or impair the quality or efficiency of; to make legally invalid.",
    keyConcepts: [
      { keyword: "spoil or impair", matchTerms: ["spoil", "impair", "damage", "debase", "degrade", "corrupt", "diminish", "reduce", "weaken", "undermin", "taint", "contaminate", "mar", "ruin"], label: "Spoil or impair quality", hint: "The definition says 'to spoil or impair the quality or efficiency of' -- making something worse." },
      { keyword: "make legally invalid", matchTerms: ["legal", "invalid", "void", "nullif", "annul", "negate", "revoke", "abolish", "quash", "overturn"], label: "Make legally invalid", hint: "The definition says 'to make legally invalid' -- vitiate can render contracts unenforceable." },
    ],
    synonyms: ["impair", "corrupt", "invalidate"],
    etymology: "Latin vitiare, from vitium (fault, defect, vice).",
  },
  // ── 301. voluble ──
  {
    word: "voluble",
    partOfSpeech: "adjective",
    definition: "Speaking or spoken incessantly and fluently; characterized by a ready and continuous flow of words.",
    keyConcepts: [
      { keyword: "speaking incessantly", matchTerms: ["speak", "incessant", "continuous", "nonstop", "ceaseless", "unending", "constant", "endless", "persistent", "chatter", "loquacious", "garrulous", "talkative", "verbose"], label: "Speaking incessantly and fluently", hint: "The definition says 'speaking incessantly and fluently' -- the words just keep flowing." },
    ],
    synonyms: ["talkative", "loquacious", "garrulous"],
    etymology: "Latin volubilis, from volvere (to turn, roll).",
  },
  // ── 302. winnow ──
  {
    word: "winnow",
    partOfSpeech: "verb",
    definition: "To remove unwanted elements from a group or collection; to blow chaff from grain.",
    keyConcepts: [
      { keyword: "remove unwanted", matchTerms: ["remove", "unwanted", "separate", "sift", "sort", "filter", "cull", "weed out", "eliminate", "pare down", "reduce", "narrow", "thin out", "select"], label: "Remove unwanted elements", hint: "The definition says 'remove unwanted elements from a group or collection' -- separating what you want from what you don't." },
    ],
    synonyms: ["sift", "separate", "cull"],
    etymology: "Old English windwian, from wind.",
  },
  // ── 303. zeitgeist ──
  {
    word: "zeitgeist",
    partOfSpeech: "noun",
    definition: "The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time.",
    keyConcepts: [
      { keyword: "spirit of a period", matchTerms: ["spirit", "mood", "atmosphere", "climate", "ethos", "tenor", "temper", "character", "attitude", "sensibility", "feeling"], label: "Defining spirit or mood", hint: "The definition says 'the defining spirit or mood of a particular period' -- the vibe of an era." },
      { keyword: "of a period of history", matchTerms: ["period", "history", "time", "era", "age", "epoch", "generation", "moment", "culture", "society", "ideas", "beliefs"], label: "Of a particular historical period", hint: "The definition says 'of a particular period of history as shown by the ideas and beliefs of the time' -- zeitgeist is time-bound." },
    ],
    synonyms: ["spirit of the age", "ethos", "mood"],
    etymology: "German Zeitgeist -- Zeit (time) + Geist (spirit, ghost).",
  },
  // ── 304. acerbic ──
  {
    word: "acerbic",
    partOfSpeech: "adjective",
    definition: "Sharp and forthright in expression; harsh or severe in tone, especially of speech or literary style.",
    keyConcepts: [
      { keyword: "sharp expression", matchTerms: ["sharp", "forthright", "cutting", "biting", "caustic", "mordant", "acid", "acrid", "trenchant", "incisive", "harsh", "severe", "stinging", "scathing"], label: "Sharp and forthright in expression", hint: "The definition says 'sharp and forthright in expression' -- acerbic language cuts deep." },
    ],
    synonyms: ["caustic", "biting", "sharp"],
    etymology: "Latin acerbus, from acer (sharp, keen).",
  },
  // ── 305. anodyne ──
  {
    word: "anodyne",
    partOfSpeech: "adjective",
    definition: "Not likely to provoke dissent or offense; inoffensive, often deliberately so; bland.",
    keyConcepts: [
      { keyword: "not likely to offend", matchTerms: ["not likely", "provoke", "offense", "inoffensive", "harmless", "bland", "mild", "gentle", "tame", "neutral", "safe", "unobjectionabl", "uncontroversial", "innocuous", "anodyne"], label: "Not likely to offend; bland", hint: "The definition says 'not likely to provoke dissent or offense' -- deliberately avoiding anything provocative." },
    ],
    synonyms: ["bland", "inoffensive", "innocuous"],
    etymology: "Greek anodynos -- an (without) + odyne (pain).",
  },
  // ── 306. baleful ──
  {
    word: "baleful",
    partOfSpeech: "adjective",
    definition: "Threatening harm; menacing; having a harmful or destructive effect.",
    keyConcepts: [
      { keyword: "threatening harm", matchTerms: ["threaten", "harm", "menac", "sinister", "ominous", "malevolent", "malign", "evil", "wicked", "hostile", "dire", "foreboding", "dark", "destructive", "pernicious", "deadly"], label: "Threatening harm; menacing", hint: "The definition says 'threatening harm; menacing' -- radiating danger and ill intent." },
    ],
    synonyms: ["menacing", "sinister", "malevolent"],
    etymology: "Old English bealu (evil, harm, calamity) + -ful.",
  },
  // ── 307. bucolic ──
  {
    word: "bucolic",
    partOfSpeech: "adjective",
    definition: "Relating to the pleasant aspects of the countryside and country life; pastoral.",
    keyConcepts: [
      { keyword: "pleasant countryside", matchTerms: ["pleasant", "countryside", "country", "rural", "pastoral", "rustic", "idyllic", "agrarian", "farm", "field", "meadow", "nature", "tranquil", "peaceful", "serene"], label: "Pleasant aspects of countryside", hint: "The definition says 'relating to the pleasant aspects of the countryside and country life' -- an idealized vision of rural living." },
    ],
    synonyms: ["pastoral", "rural", "rustic"],
    etymology: "Greek boukolikos, from boukolos (cowherd) -- bous (ox) + kolos (tending).",
  },
  // ── 308. cachinnate ──
  {
    word: "cachinnate",
    partOfSpeech: "verb",
    definition: "To laugh loudly and uncontrollably.",
    keyConcepts: [
      { keyword: "laugh loudly", matchTerms: ["laugh", "loud", "uncontroll", "roar", "howl", "guffaw", "cackle", "shriek", "hysterical", "boisterous", "raucous", "convulsive", "belly laugh"], label: "Laugh loudly and uncontrollably", hint: "The definition says 'to laugh loudly and uncontrollably' -- not a polite giggle but a full-body eruption." },
    ],
    synonyms: ["guffaw", "cackle", "roar with laughter"],
    etymology: "Latin cachinnare, probably imitative of the sound of laughter.",
  },
  // ── 309. captious ──
  {
    word: "captious",
    partOfSpeech: "adjective",
    definition: "Tending to find fault or raise petty objections; overly critical.",
    keyConcepts: [
      { keyword: "find fault", matchTerms: ["find fault", "fault-finding", "critical", "nitpick", "cavil", "carp", "quibbl", "pedantic", "petty", "hairsplitting", "hypercritical", "censorious", "overcritical"], label: "Tending to find fault", hint: "The definition says 'tending to find fault or raise petty objections' -- always looking for something wrong." },
    ],
    synonyms: ["nitpicking", "fault-finding", "carping"],
    etymology: "Latin captiosus, from captio (a taking, deception), from capere (to take, seize).",
  },
  // ── 310. circumlocution ──
  {
    word: "circumlocution",
    partOfSpeech: "noun",
    definition: "The use of many words where fewer would do, especially in a deliberate attempt to be vague or evasive.",
    keyConcepts: [
      { keyword: "using many words", matchTerms: ["many words", "wordy", "verbose", "long-winded", "prolix", "rambling", "roundabout", "indirect", "circuitous", "meandering", "digressive", "periphrastic"], label: "Using many words where fewer would do", hint: "The definition says 'the use of many words where fewer would do' -- talking around the point." },
      { keyword: "vague or evasive", matchTerms: ["vague", "evasive", "deliberat", "avoid", "hedge", "obfuscate", "obscure", "equivocat", "prevaricating", "beating around the bush"], label: "Deliberately vague or evasive", hint: "The definition says 'in a deliberate attempt to be vague or evasive' -- using wordiness as a smokescreen." },
    ],
    synonyms: ["verbosity", "wordiness", "periphrasis"],
    etymology: "Latin circumlocutio -- circum (around) + loqui (to speak).",
  },
  // ── 311. contumacious ──
  {
    word: "contumacious",
    partOfSpeech: "adjective",
    definition: "Stubbornly or willfully disobedient to authority.",
    keyConcepts: [
      { keyword: "stubbornly disobedient", matchTerms: ["stubborn", "willful", "disobedient", "defiant", "rebellious", "insubordinat", "recalcitrant", "refractory", "intractable", "obstinate", "resistant", "unruly", "uncooperativ", "contrary"], label: "Stubbornly disobedient to authority", hint: "The definition says 'stubbornly or willfully disobedient to authority' -- openly refusing to comply." },
    ],
    synonyms: ["defiant", "rebellious", "insubordinate"],
    etymology: "Latin contumax, perhaps from con (intensive) + tumere (to swell).",
  },
  // ── 312. crepuscular ──
  {
    word: "crepuscular",
    partOfSpeech: "adjective",
    definition: "Of, resembling, or relating to twilight; active during twilight hours.",
    keyConcepts: [
      { keyword: "relating to twilight", matchTerms: ["twilight", "dusk", "dawn", "dim", "half-light", "fading light", "gloaming", "evening", "morning", "dusky", "shadowy", "murky", "hazy", "softly lit"], label: "Relating to twilight", hint: "The definition says 'relating to twilight' -- the in-between light of dusk or dawn." },
    ],
    synonyms: ["twilit", "dim", "dusky"],
    etymology: "Latin crepusculum, possibly related to creper (dark, obscure).",
  },
  // ── 313. diaphanous ──
  {
    word: "diaphanous",
    partOfSpeech: "adjective",
    definition: "Light, delicate, and translucent; so fine as to be almost transparent.",
    keyConcepts: [
      { keyword: "light and translucent", matchTerms: ["light", "delicate", "translucent", "transparent", "sheer", "thin", "fine", "gossamer", "filmy", "gauzy", "wispy", "ethereal", "airy", "see-through", "flimsy"], label: "Light, delicate, and translucent", hint: "The definition says 'light, delicate, and translucent' -- almost see-through." },
    ],
    synonyms: ["sheer", "translucent", "gossamer"],
    etymology: "Greek diaphanes -- dia (through) + phainein (to show).",
  },
  // ── 314. dolorous ──
  {
    word: "dolorous",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing great sorrow or distress.",
    keyConcepts: [
      { keyword: "great sorrow", matchTerms: ["sorrow", "distress", "grief", "sadness", "mourning", "anguish", "heartbreak", "woe", "misery", "pain", "suffering", "lamentation", "mournful", "sorrowful", "woeful", "plaintive", "melancholy"], label: "Feeling great sorrow or distress", hint: "The definition says 'feeling or expressing great sorrow or distress' -- deep, visible grief." },
    ],
    synonyms: ["mournful", "sorrowful", "grieving"],
    etymology: "Latin dolorosus, from dolor (pain, grief).",
  },
  // ── 315. effulgent ──
  {
    word: "effulgent",
    partOfSpeech: "adjective",
    definition: "Shining brightly; radiant; emanating joy or goodness.",
    keyConcepts: [
      { keyword: "shining brightly", matchTerms: ["shining", "bright", "radiant", "brilliant", "luminous", "gleaming", "glowing", "blazing", "dazzling", "resplendent", "incandescent", "lustrous", "splendid"], label: "Shining brightly; radiant", hint: "The definition says 'shining brightly; radiant' -- emitting powerful light." },
    ],
    synonyms: ["radiant", "brilliant", "luminous"],
    etymology: "Latin effulgere -- ex (out) + fulgere (to shine).",
  },
  // ── 316. emollient ──
  {
    word: "emollient",
    partOfSpeech: "adjective",
    definition: "Having the quality of softening or soothing the skin; attempting to avoid confrontation or anger; calming.",
    keyConcepts: [
      { keyword: "softening or soothing", matchTerms: ["soften", "sooth", "calm", "gentle", "mild", "smooth", "moisturiz", "heal", "reliev", "comfort", "ease", "palliat"], label: "Softening or soothing", hint: "The definition says 'softening or soothing' -- making something gentler." },
      { keyword: "avoiding confrontation", matchTerms: ["avoid", "confrontation", "anger", "conciliat", "pacif", "placating", "diplomatic", "tactful", "appeasing", "mollif", "peacemaking"], label: "Avoiding confrontation; calming", hint: "The definition says 'attempting to avoid confrontation or anger' -- emollient words smooth things over." },
    ],
    synonyms: ["soothing", "calming", "conciliatory"],
    etymology: "Latin emollire -- e (out) + mollire (to soften), from mollis (soft).",
  },
  // ── 317. equanimity ──
  {
    word: "equanimity",
    partOfSpeech: "noun",
    definition: "Mental calmness, composure, and evenness of temper, especially in a difficult situation.",
    keyConcepts: [
      { keyword: "mental calmness", matchTerms: ["mental", "calm", "composure", "poise", "serenity", "tranquil", "peace", "steady", "balanced", "collected", "cool", "unflappable", "even-tempered", "stoic", "stability", "stable", "emotional", "evenness", "level-headed"], label: "Mental calmness and composure", hint: "The definition says 'mental calmness, composure, and evenness of temper' -- inner peace that stays stable." },
      { keyword: "in difficult situation", matchTerms: ["difficult", "situation", "stress", "pressure", "adversity", "crisis", "challenge", "under fire", "hardship", "turmoil", "chaos", "tension", "strain", "duress", "trial", "ordeal", "trouble"], label: "Especially in difficult situations", hint: "The definition says 'especially in a difficult situation' -- equanimity is calm under pressure." },
    ],
    synonyms: ["composure", "poise", "serenity"],
    etymology: "Latin aequanimitas -- aequus (equal, even) + animus (mind, spirit).",
  },
  // ── 318. ersatz ──
  {
    word: "ersatz",
    partOfSpeech: "adjective",
    definition: "Made or used as a substitute, typically an inferior one, for something else; not genuine.",
    keyConcepts: [
      { keyword: "substitute", matchTerms: ["substitut", "replacement", "imitation", "alternative", "stand-in", "makeshift", "stopgap", "fill-in", "surrogate", "proxy"], label: "Made as a substitute", hint: "The definition says 'made or used as a substitute' -- serving in place of the real thing." },
      { keyword: "inferior and not genuine", matchTerms: ["inferior", "not genuine", "fake", "artificial", "synthetic", "counterfeit", "sham", "bogus", "phony", "mock", "pseudo", "knock-off", "cheap"], label: "Inferior; not genuine", hint: "The definition says 'typically an inferior one; not genuine' -- it's a poor copy." },
    ],
    synonyms: ["imitation", "artificial", "substitute"],
    etymology: "German Ersatz, from ersetzen (to replace).",
  },
]
