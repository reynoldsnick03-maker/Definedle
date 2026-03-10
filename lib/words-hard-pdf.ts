import type { DailyWord } from "./game-data"

// PDF-sourced hard words (Manhattan Prep GRE list) — 219 words
// Marked as PDF-sourced in the word list modal
export const hardWordsPdf: DailyWord[] = [
  {
    word: "abase",
    partOfSpeech: "verb",
    definition: "To lower in rank, status, or dignity; to degrade or humble someone.",
    keyConcepts: [
      { keyword: "lower", matchTerms: ["lower", "degrade", "humble", "demean", "diminish", "reduce", "debase", "strip", "dishonor", "belittle", "shame", "disgrace"], label: "To lower in rank", hint: "The definition says 'lower in rank, status, or dignity' — bringing someone down." },
    ],
    synonyms: ["degrade", "humble", "demean", "belittle", "dishonor"],
  },
  {
    word: "abdicate",
    partOfSpeech: "verb",
    definition: "To formally give up a position of power or responsibility, especially a throne.",
    keyConcepts: [
      { keyword: "give up", matchTerms: ["give up", "relinquish", "renounce", "surrender", "abandon", "resign", "step down", "vacate", "yield", "forsake", "forgo", "release"], label: "Give up power", hint: "The definition says 'give up a position of power' — voluntarily stepping away." },
      { keyword: "responsibility", matchTerms: ["responsibility", "duty", "power", "throne", "office", "position", "role", "authority", "obligation", "rule"], label: "Position of responsibility", hint: "The definition says 'power or responsibility' — a formal role being surrendered." },
    ],
    synonyms: ["relinquish", "renounce", "resign", "step down", "yield"],
  },
  {
    word: "abeyance",
    partOfSpeech: "noun",
    definition: "A state of temporary suspension or inactivity; something held in pause.",
    keyConcepts: [
      { keyword: "temporary", matchTerms: ["temporary", "suspension", "pause", "halt", "delay", "inactivity", "dormant", "pending", "interim", "standstill", "waiting", "hold"], label: "Temporary suspension", hint: "The definition says 'temporary suspension or inactivity' — things on hold, not ended." },
    ],
    synonyms: ["suspension", "dormancy", "pause", "hiatus", "standstill"],
  },
  {
    word: "abhor",
    partOfSpeech: "verb",
    definition: "To regard with intense disgust or hatred; to detest completely.",
    keyConcepts: [
      { keyword: "intense disgust", matchTerms: ["disgust", "hatred", "detest", "loathe", "despise", "hate", "abominate", "execrate", "revile", "scorn", "repulse", "repel"], label: "Intense disgust", hint: "The definition says 'intense disgust or hatred' — a visceral, powerful aversion." },
    ],
    synonyms: ["detest", "loathe", "despise", "execrate", "hate"],
  },
  {
    word: "abjure",
    partOfSpeech: "verb",
    definition: "To formally renounce or repudiate a belief, claim, or practice, often under oath.",
    keyConcepts: [
      { keyword: "renounce", matchTerms: ["renounce", "repudiate", "recant", "retract", "abandon", "disavow", "forswear", "reject", "deny", "relinquish", "give up", "withdraw"], label: "Formally renounce", hint: "The definition says 'formally renounce' — publicly and solemnly giving something up." },
      { keyword: "oath", matchTerms: ["oath", "sworn", "formal", "official", "legal", "solemn", "vow", "pledge", "binding", "ceremony"], label: "Under oath", hint: "The definition says 'often under oath' — this is a serious, official act." },
    ],
    synonyms: ["renounce", "recant", "retract", "forswear", "repudiate"],
  },
  {
    word: "abridge",
    partOfSpeech: "verb",
    definition: "To shorten a text or work by omitting parts while retaining the main ideas.",
    keyConcepts: [
      { keyword: "shorten", matchTerms: ["shorten", "condense", "reduce", "cut", "trim", "compress", "abbreviate", "truncate", "summarize", "edit", "pare", "prune"], label: "To shorten", hint: "The definition says 'shorten by omitting parts' — making something smaller." },
      { keyword: "main ideas", matchTerms: ["main", "idea", "essence", "core", "substance", "meaning", "content", "gist", "point", "spirit", "key", "central"], label: "Retaining main ideas", hint: "The definition says 'retaining the main ideas' — not just cutting but preserving meaning." },
    ],
    synonyms: ["condense", "shorten", "truncate", "abbreviate", "compress"],
  },
  {
    word: "abyss",
    partOfSpeech: "noun",
    definition: "A deep or bottomless chasm; anything profound, immeasurable, or infinite.",
    keyConcepts: [
      { keyword: "bottomless", matchTerms: ["bottomless", "deep", "chasm", "void", "gulf", "depth", "infinite", "immeasurable", "fathomless", "unfathomable", "vast", "profound"], label: "Bottomless depth", hint: "The definition says 'bottomless chasm' — a depth that seems to have no end." },
    ],
    synonyms: ["chasm", "void", "gulf", "depth", "pit"],
  },
  {
    word: "activism",
    partOfSpeech: "noun",
    definition: "The use of vigorous action and campaigns to achieve political or social change.",
    keyConcepts: [
      { keyword: "vigorous action", matchTerms: ["action", "campaign", "advocacy", "protest", "movement", "activism", "agitation", "effort", "push", "drive", "fight", "cause"], label: "Vigorous action", hint: "The definition says 'vigorous action and campaigns' — active, energetic effort." },
      { keyword: "change", matchTerms: ["change", "reform", "progress", "social", "political", "transformation", "justice", "rights", "movement", "cause", "goal"], label: "To achieve change", hint: "The definition says 'achieve political or social change' — the purpose of the action." },
    ],
    synonyms: ["advocacy", "campaigning", "agitation", "protest", "reform"],
  },
  {
    word: "acumen",
    partOfSpeech: "noun",
    definition: "The ability to make quick, accurate judgments; keen insight and good sense.",
    keyConcepts: [
      { keyword: "keen insight", matchTerms: ["insight", "judgment", "acuity", "shrewdness", "perception", "discernment", "intelligence", "wisdom", "astuteness", "perspicacity", "sharpness", "wit"], label: "Keen insight", hint: "The definition says 'keen insight and good sense' — sharp mental perception." },
      { keyword: "quick", matchTerms: ["quick", "sharp", "rapid", "fast", "immediate", "instant", "prompt", "ready", "alert", "nimble", "astute", "clever"], label: "Quick judgment", hint: "The definition says 'quick, accurate judgments' — speed combined with accuracy." },
    ],
    synonyms: ["shrewdness", "astuteness", "discernment", "perspicacity", "sharpness"],
  },
  {
    word: "adhere",
    partOfSpeech: "verb",
    definition: "To stick firmly to a surface, belief, or plan; to follow closely without deviation.",
    keyConcepts: [
      { keyword: "stick", matchTerms: ["stick", "cling", "attach", "hold", "bond", "bind", "follow", "comply", "observe", "keep", "maintain", "uphold"], label: "To stick or cling", hint: "The definition says 'stick firmly' — remaining fixed whether physically or in principle." },
    ],
    synonyms: ["stick", "cling", "comply", "follow", "observe"],
  },
  {
    word: "admonish",
    partOfSpeech: "verb",
    definition: "To warn or reprimand someone firmly but not harshly; to caution or advise.",
    keyConcepts: [
      { keyword: "warn", matchTerms: ["warn", "reprimand", "caution", "advise", "rebuke", "scold", "counsel", "urge", "remind", "chide", "correct", "reproach"], label: "To warn or reprimand", hint: "The definition says 'warn or reprimand' — a correction delivered with care." },
      { keyword: "firmly", matchTerms: ["firmly", "firmly but", "not harshly", "gentle", "mild", "earnest", "serious", "direct", "sincere", "measured"], label: "Done firmly", hint: "The definition says 'firmly but not harshly' — the tone is serious but not cruel." },
    ],
    synonyms: ["reprimand", "caution", "rebuke", "counsel", "warn"],
  },
  {
    word: "affable",
    partOfSpeech: "adjective",
    definition: "Friendly, good-natured, and easy to talk to; pleasant in manner.",
    keyConcepts: [
      { keyword: "friendly", matchTerms: ["friendly", "pleasant", "warm", "approachable", "genial", "amiable", "congenial", "sociable", "agreeable", "good-natured", "personable", "welcoming"], label: "Friendly and warm", hint: "The definition says 'friendly, good-natured' — radiating warmth and openness." },
    ],
    synonyms: ["amiable", "genial", "congenial", "approachable", "personable"],
  },
  {
    word: "affectation",
    partOfSpeech: "noun",
    definition: "Behavior or speech adopted to impress others that is artificial or insincere.",
    keyConcepts: [
      { keyword: "artificial", matchTerms: ["artificial", "insincere", "fake", "pretentious", "contrived", "affected", "mannered", "unnatural", "put-on", "performed", "forced", "phony"], label: "Artificial behavior", hint: "The definition says 'artificial or insincere' — it's a pose, not genuine." },
      { keyword: "impress", matchTerms: ["impress", "appearance", "effect", "image", "show", "display", "performance", "pretense", "posture", "seem", "appear", "project"], label: "To impress others", hint: "The definition says 'adopted to impress others' — the behavior is for an audience." },
    ],
    synonyms: ["pretension", "pose", "artificiality", "mannerism", "insincerity"],
  },
  {
    word: "aggrandize",
    partOfSpeech: "verb",
    definition: "To make something appear greater or more important than it actually is; to exaggerate.",
    keyConcepts: [
      { keyword: "greater", matchTerms: ["greater", "larger", "bigger", "important", "exaggerate", "inflate", "magnify", "enhance", "boost", "elevate", "overstate", "glorify"], label: "Make appear greater", hint: "The definition says 'appear greater or more important' — inflating beyond reality." },
    ],
    synonyms: ["exaggerate", "inflate", "magnify", "overstate", "glorify"],
  },
  {
    word: "alacrity",
    partOfSpeech: "noun",
    definition: "Brisk and cheerful readiness; eager willingness to act without hesitation.",
    keyConcepts: [
      { keyword: "cheerful readiness", matchTerms: ["readiness", "eagerness", "willingness", "enthusiasm", "promptness", "speed", "zeal", "keenness", "briskness", "quickness", "alacrity", "sprightliness"], label: "Cheerful readiness", hint: "The definition says 'brisk and cheerful readiness' — enthusiastic and quick." },
    ],
    synonyms: ["eagerness", "readiness", "enthusiasm", "promptness", "willingness"],
  },
  {
    word: "alienate",
    partOfSpeech: "verb",
    definition: "To cause someone to feel isolated, hostile, or estranged from a person or group.",
    keyConcepts: [
      { keyword: "isolated", matchTerms: ["isolat", "estrang", "distant", "hostile", "unfriendly", "detach", "separate", "cut off", "push away", "withdraw", "excluded", "marginalized"], label: "Cause isolation", hint: "The definition says 'feel isolated or estranged' — creating distance and disconnection." },
    ],
    synonyms: ["estrange", "isolate", "distance", "detach", "ostracize"],
  },
  {
    word: "amalgamate",
    partOfSpeech: "verb",
    definition: "To combine or unite separate elements into a single unified whole.",
    keyConcepts: [
      { keyword: "combine", matchTerms: ["combine", "unite", "merge", "blend", "fuse", "integrate", "consolidate", "join", "incorporate", "unify", "pool", "mix"], label: "To combine", hint: "The definition says 'combine or unite' — bringing separate things together." },
      { keyword: "unified whole", matchTerms: ["unified", "whole", "single", "one", "together", "complete", "cohesive", "integrated", "collective", "combined", "total"], label: "Into a unified whole", hint: "The definition says 'single unified whole' — the result is one integrated thing." },
    ],
    synonyms: ["merge", "unite", "combine", "fuse", "integrate"],
  },
  {
    word: "ameliorate",
    partOfSpeech: "verb",
    definition: "To make a bad or unsatisfactory situation better or more bearable.",
    keyConcepts: [
      { keyword: "better", matchTerms: ["better", "improve", "relieve", "ease", "alleviate", "mitigate", "enhance", "upgrade", "amend", "reform", "remedy", "help"], label: "Make better", hint: "The definition says 'make better or more bearable' — improving without necessarily fixing." },
    ],
    synonyms: ["improve", "alleviate", "mitigate", "relieve", "better"],
  },
  {
    word: "anachronism",
    partOfSpeech: "noun",
    definition: "Something that belongs to a different time period and is out of place in the present.",
    keyConcepts: [
      { keyword: "different time", matchTerms: ["time", "period", "era", "age", "epoch", "historical", "outdated", "out of place", "wrong era", "past", "misplaced", "belongs"], label: "Wrong time period", hint: "The definition says 'belongs to a different time period' — displaced in history." },
      { keyword: "out of place", matchTerms: ["out of place", "incongruous", "misplaced", "inappropriate", "inconsistent", "anachronistic", "jarring", "odd", "strange", "unsuitable"], label: "Out of place", hint: "The definition says 'out of place in the present' — it doesn't fit its current context." },
    ],
    synonyms: ["archaism", "relic", "throwback", "incongruity", "misplacement"],
  },
  {
    word: "analogous",
    partOfSpeech: "adjective",
    definition: "Comparable in function or structure to something else; serving as a useful analogy.",
    keyConcepts: [
      { keyword: "comparable", matchTerms: ["comparable", "similar", "parallel", "equivalent", "corresponding", "like", "akin", "related", "resembling", "analogous", "alike", "matching"], label: "Comparable", hint: "The definition says 'comparable in function or structure' — having meaningful similarity." },
    ],
    synonyms: ["comparable", "similar", "parallel", "equivalent", "corresponding"],
  },
  {
    word: "anarchy",
    partOfSpeech: "noun",
    definition: "A state of disorder due to the absence of authority or government control.",
    keyConcepts: [
      { keyword: "disorder", matchTerms: ["disorder", "chaos", "lawlessness", "turmoil", "upheaval", "confusion", "mayhem", "anarchy", "unrest", "instability", "pandemonium", "bedlam"], label: "State of disorder", hint: "The definition says 'state of disorder' — breakdown of structure and control." },
      { keyword: "absence", matchTerms: ["absence", "lack", "without", "no", "removal", "void", "breakdown", "collapse", "failure", "overthrow", "abolition"], label: "Absence of authority", hint: "The definition says 'absence of authority' — disorder arises because nothing is in charge." },
    ],
    synonyms: ["chaos", "lawlessness", "disorder", "mayhem", "bedlam"],
  },
  {
    word: "annul",
    partOfSpeech: "verb",
    definition: "To declare invalid or legally void; to cancel or abolish an official agreement.",
    keyConcepts: [
      { keyword: "invalid", matchTerms: ["invalid", "void", "null", "cancel", "abolish", "nullify", "repeal", "revoke", "rescind", "terminate", "dissolve", "invalidate"], label: "Declare invalid", hint: "The definition says 'declare invalid or legally void' — erasing its legal effect." },
    ],
    synonyms: ["nullify", "void", "cancel", "revoke", "rescind"],
  },
  {
    word: "antagonize",
    partOfSpeech: "verb",
    definition: "To cause someone to become hostile or unfriendly; to provoke or irritate.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostile", "unfriendly", "provoke", "irritate", "aggravate", "alienate", "anger", "offend", "incite", "inflame", "upset", "arouse"], label: "Cause hostility", hint: "The definition says 'become hostile or unfriendly' — creating opposition or enmity." },
    ],
    synonyms: ["provoke", "alienate", "irritate", "aggravate", "incense"],
  },
  {
    word: "antithetical",
    partOfSpeech: "adjective",
    definition: "Directly opposed or contrasted; being the exact opposite of something.",
    keyConcepts: [
      { keyword: "directly opposed", matchTerms: ["opposed", "opposite", "contrary", "contradictory", "conflicting", "antithetical", "incompatible", "at odds", "counter", "inverse", "reverse", "contrasted"], label: "Directly opposed", hint: "The definition says 'directly opposed or contrasted' — not just different but fundamentally contrary." },
    ],
    synonyms: ["contrary", "opposed", "contradictory", "incompatible", "opposite"],
  },
  {
    word: "arbiter",
    partOfSpeech: "noun",
    definition: "A person empowered to judge or settle a dispute; one whose authority is final.",
    keyConcepts: [
      { keyword: "judge", matchTerms: ["judge", "arbitrate", "settle", "decide", "umpire", "referee", "mediator", "authority", "adjudicate", "rule", "determine", "resolve"], label: "One who judges", hint: "The definition says 'judge or settle a dispute' — an authoritative decision-maker." },
      { keyword: "final", matchTerms: ["final", "ultimate", "authoritative", "supreme", "definitive", "conclusive", "decisive", "binding", "absolute", "unquestioned", "unchallenged"], label: "Final authority", hint: "The definition says 'authority is final' — there is no appeal beyond this person." },
    ],
    synonyms: ["judge", "mediator", "adjudicator", "umpire", "referee"],
  },
  {
    word: "arcane",
    partOfSpeech: "adjective",
    definition: "Known or understood by only a few; mysterious, secret, or esoteric.",
    keyConcepts: [
      { keyword: "few", matchTerms: ["few", "select", "limited", "exclusive", "obscure", "specialist", "insider", "privileged", "initiated", "rare", "hidden", "secret"], label: "Known by few", hint: "The definition says 'known by only a few' — not common or widely accessible knowledge." },
      { keyword: "mysterious", matchTerms: ["mysterious", "secret", "esoteric", "cryptic", "occult", "obscure", "hidden", "enigmatic", "abstruse", "recondite", "inscrutable", "unknowable"], label: "Mysterious quality", hint: "The definition says 'mysterious or secret' — there's an air of the unknowable." },
    ],
    synonyms: ["esoteric", "mysterious", "obscure", "cryptic", "recondite"],
  },
  {
    word: "archaic",
    partOfSpeech: "adjective",
    definition: "Belonging to an earlier period; no longer in common use or outdated.",
    keyConcepts: [
      { keyword: "earlier period", matchTerms: ["earlier", "old", "ancient", "past", "historical", "bygone", "former", "antique", "dated", "vintage", "traditional", "obsolete"], label: "Earlier period", hint: "The definition says 'belonging to an earlier period' — it comes from a different age." },
      { keyword: "outdated", matchTerms: ["outdated", "obsolete", "old-fashioned", "antiquated", "superseded", "disused", "extinct", "defunct", "outmoded", "archaic", "no longer used", "stale"], label: "No longer used", hint: "The definition says 'no longer in common use' — it has been left behind." },
    ],
    synonyms: ["antiquated", "obsolete", "ancient", "outdated", "outmoded"],
  },
  {
    word: "arduous",
    partOfSpeech: "adjective",
    definition: "Requiring great effort or exertion; extremely difficult and tiring.",
    keyConcepts: [
      { keyword: "great effort", matchTerms: ["effort", "exertion", "labor", "struggle", "toil", "work", "energy", "difficulty", "taxing", "demanding", "challenging", "strenuous"], label: "Requiring great effort", hint: "The definition says 'requiring great effort or exertion' — it takes a lot out of you." },
    ],
    synonyms: ["strenuous", "grueling", "laborious", "exhausting", "demanding"],
  },
  {
    word: "articulate",
    partOfSpeech: "adjective",
    definition: "Able to express ideas clearly and fluently; skilled at using language effectively.",
    keyConcepts: [
      { keyword: "express", matchTerms: ["express", "communicate", "speak", "convey", "explain", "describe", "voice", "articulate", "state", "present", "phrase", "put into words"], label: "Able to express", hint: "The definition says 'express ideas clearly' — translating thought into effective language." },
      { keyword: "clearly", matchTerms: ["clearly", "fluently", "effectively", "well", "precisely", "coherently", "distinctly", "eloquently", "skillfully", "lucidly", "logically", "persuasively"], label: "Clearly and fluently", hint: "The definition says 'clearly and fluently' — not just expressing but doing so with ease and precision." },
    ],
    synonyms: ["eloquent", "fluent", "expressive", "lucid", "coherent"],
  },
  {
    word: "artifact",
    partOfSpeech: "noun",
    definition: "An object made by humans, especially one of historical or cultural significance.",
    keyConcepts: [
      { keyword: "made by humans", matchTerms: ["made", "crafted", "created", "produced", "manufactured", "constructed", "fashioned", "handmade", "man-made", "human", "cultural", "historical"], label: "Made by humans", hint: "The definition says 'made by humans' — distinguishing it from natural objects." },
      { keyword: "historical", matchTerms: ["historical", "cultural", "significance", "ancient", "archaeological", "relic", "remnant", "heritage", "past", "tradition", "old", "excavated"], label: "Historical significance", hint: "The definition says 'historical or cultural significance' — valued for its connection to the past." },
    ],
    synonyms: ["relic", "remnant", "object", "item", "creation"],
  },
  {
    word: "artless",
    partOfSpeech: "adjective",
    definition: "Without cunning or deception; natural and sincere; free from artifice.",
    keyConcepts: [
      { keyword: "free from", matchTerms: ["without deception", "sincere", "natural", "genuine", "innocent", "naive", "open", "honest", "unaffected", "candid", "transparent", "unpretentious"], label: "Free from", hint: "The definition says 'without cunning or deception' — nothing hidden or calculated." },
    ],
    synonyms: ["genuine", "sincere", "naive", "ingenuous", "unpretentious"],
  },
  {
    word: "ascertain",
    partOfSpeech: "verb",
    definition: "To find out something with certainty; to discover a fact definitively.",
    keyConcepts: [
      { keyword: "certainty", matchTerms: ["certainty", "certain", "definitive", "confirm", "verify", "establish", "determine", "discover", "learn", "find out", "ascertain", "prove"], label: "Find out with certainty", hint: "The definition says 'with certainty' — not guessing but confirming beyond doubt." },
    ],
    synonyms: ["determine", "confirm", "verify", "establish", "discover"],
  },
  {
    word: "ascetic",
    partOfSpeech: "adjective",
    definition: "Characterized by severe self-discipline and abstention from physical pleasures.",
    keyConcepts: [
      { keyword: "self-discipline", matchTerms: ["self-discipline", "abstinence", "austere", "spartan", "strict", "denial", "restraint", "frugal", "simple", "rigorous", "puritanical", "severe"], label: "Severe self-discipline", hint: "The definition says 'severe self-discipline' — an unusually strict approach to life." },
      { keyword: "pleasures", matchTerms: ["pleasure", "comfort", "luxury", "indulgence", "physical", "sensual", "material", "enjoyment", "gratification", "desire", "appetite", "want"], label: "Abstention from pleasures", hint: "The definition says 'abstention from physical pleasures' — deliberately avoiding comforts." },
    ],
    synonyms: ["austere", "spartan", "abstemious", "self-denying", "puritanical"],
  },
  {
    word: "assiduous",
    partOfSpeech: "adjective",
    definition: "Showing great care, attention, and persistent effort in one's work.",
    keyConcepts: [
      { keyword: "persistent", matchTerms: ["persistent", "diligent", "tireless", "industrious", "dedicated", "hard-working", "thorough", "careful", "attentive", "meticulous", "conscientious", "steadfast"], label: "Persistent effort", hint: "The definition says 'persistent effort' — keeping at it without giving up." },
      { keyword: "care", matchTerms: ["care", "attention", "detail", "thoroughness", "precision", "exactness", "caution", "watchfulness", "application", "devotion", "focus", "commitment"], label: "Great care", hint: "The definition says 'great care and attention' — not just working hard but working carefully." },
    ],
    synonyms: ["diligent", "industrious", "persistent", "meticulous", "tireless"],
  },
  {
    word: "audacious",
    partOfSpeech: "adjective",
    definition: "Showing a willingness to take bold risks; daring and fearlessly original.",
    keyConcepts: [
      { keyword: "bold", matchTerms: ["bold", "daring", "fearless", "brave", "courageous", "reckless", "adventurous", "audacious", "gutsy", "intrepid", "nervy", "presumptuous"], label: "Bold and daring", hint: "The definition says 'bold risks' — doing what others wouldn't dare." },
    ],
    synonyms: ["daring", "bold", "fearless", "brazen", "intrepid"],
  },
  {
    word: "august",
    partOfSpeech: "adjective",
    definition: "Inspiring reverence and admiration; having impressive dignity or grandeur.",
    keyConcepts: [
      { keyword: "reverence", matchTerms: ["reverence", "admiration", "dignity", "grandeur", "respect", "awe", "majesty", "imposing", "noble", "stately", "venerable", "commanding"], label: "Inspiring reverence", hint: "The definition says 'inspiring reverence and admiration' — commanding profound respect." },
    ],
    synonyms: ["venerable", "majestic", "dignified", "imposing", "stately"],
  },
  {
    word: "avarice",
    partOfSpeech: "noun",
    definition: "Extreme greed for wealth or material gain; an insatiable desire to accumulate.",
    keyConcepts: [
      { keyword: "extreme greed", matchTerms: ["greed", "covetousness", "acquisitiveness", "cupidity", "miserliness", "avarice", "rapacity", "materialism", "desire for wealth", "money-hungry", "avaricious"], label: "Extreme greed", hint: "The definition says 'extreme greed' — not just wanting more but an obsessive craving." },
      { keyword: "insatiable", matchTerms: ["insatiable", "unquenchable", "never satisfied", "endless", "unrelenting", "constant", "relentless", "boundless", "inexhaustible", "voracious", "limitless", "unceasing"], label: "Insatiable desire", hint: "The definition says 'insatiable desire' — it can never be satisfied." },
    ],
    synonyms: ["greed", "covetousness", "cupidity", "rapacity", "acquisitiveness"],
  },
  {
    word: "canonical",
    partOfSpeech: "adjective",
    definition: "Conforming to established rules or standards; recognized as authoritative or orthodox.",
    keyConcepts: [
      { keyword: "established", matchTerms: ["established", "standard", "orthodox", "authoritative", "accepted", "recognized", "official", "approved", "traditional", "classic", "definitive", "sanctioned"], label: "Established standard", hint: "The definition says 'established rules or standards' — the recognized benchmark." },
    ],
    synonyms: ["authoritative", "orthodox", "standard", "accepted", "definitive"],
  },
  {
    word: "censure",
    partOfSpeech: "noun",
    definition: "Strong official disapproval or condemnation of an action or person.",
    keyConcepts: [
      { keyword: "official disapproval", matchTerms: ["disapproval", "condemnation", "reprimand", "rebuke", "criticism", "censure", "denunciation", "blame", "reproach", "admonishment", "formal", "official"], label: "Official disapproval", hint: "The definition says 'official disapproval or condemnation' — a formal judgment." },
    ],
    synonyms: ["condemnation", "reprimand", "rebuke", "criticism", "reproach"],
  },
  {
    word: "chauvinism",
    partOfSpeech: "noun",
    definition: "Excessive belief in the superiority of one's own group, nation, or sex.",
    keyConcepts: [
      { keyword: "excessive belief", matchTerms: ["excessive", "belief", "superiority", "fanatical", "blind", "bigoted", "prejudiced", "bias", "conviction", "devotion", "zealous", "extreme"], label: "Excessive belief", hint: "The definition says 'excessive belief in superiority' — beyond normal pride into bias." },
      { keyword: "superiority", matchTerms: ["superiority", "better", "dominant", "supreme", "above", "superior", "higher", "greater", "privilege", "patriotism", "nationalism", "sexism"], label: "Own group's superiority", hint: "The definition says 'superiority of one's own group' — an us-vs-them mentality taken too far." },
    ],
    synonyms: ["jingoism", "nationalism", "bigotry", "prejudice", "bias"],
  },
  {
    word: "chicanery",
    partOfSpeech: "noun",
    definition: "The use of clever but deceptive arguments or trickery to achieve a goal.",
    keyConcepts: [
      { keyword: "deceptive", matchTerms: ["deceptive", "trickery", "cunning", "devious", "dishonest", "manipulative", "scheming", "underhanded", "sly", "crafty", "fraudulent", "misleading"], label: "Deceptive tactics", hint: "The definition says 'deceptive arguments or trickery' — dishonest cleverness." },
      { keyword: "clever", matchTerms: ["clever", "cunning", "artful", "shrewd", "ingenious", "sophisticated", "skillful", "crafty", "calculated", "strategic", "tricky", "wily"], label: "Clever manipulation", hint: "The definition says 'clever but deceptive' — it takes skill but is used dishonestly." },
    ],
    synonyms: ["trickery", "deception", "duplicity", "guile", "subterfuge"],
  },
  {
    word: "chronological",
    partOfSpeech: "adjective",
    definition: "Arranged in the order in which events occurred in time; time-sequenced.",
    keyConcepts: [
      { keyword: "order", matchTerms: ["order", "sequence", "arranged", "sequential", "organized", "systematic", "structured", "ranked", "sorted", "listed", "categorized", "classified"], label: "Arranged in order", hint: "The definition says 'arranged in order' — items are placed deliberately." },
      { keyword: "time", matchTerms: ["time", "temporal", "historical", "date", "era", "period", "sequence", "timeline", "when", "occurrence", "event", "chronology"], label: "By time", hint: "The definition says 'occurred in time' — it's specifically ordered by when things happened." },
    ],
    synonyms: ["sequential", "time-ordered", "dated", "temporal", "successive"],
  },
  {
    word: "circumscribe",
    partOfSpeech: "verb",
    definition: "To restrict or limit the range or scope of something strictly.",
    keyConcepts: [
      { keyword: "restrict", matchTerms: ["restrict", "limit", "confine", "constrain", "bound", "contain", "curb", "narrow", "define", "delineate", "control", "regulate"], label: "To restrict", hint: "The definition says 'restrict or limit' — putting boundaries around something." },
    ],
    synonyms: ["restrict", "limit", "confine", "constrain", "bound"],
  },
  {
    word: "circumspect",
    partOfSpeech: "adjective",
    definition: "Careful to consider all circumstances and consequences before acting; cautious.",
    keyConcepts: [
      { keyword: "careful", matchTerms: ["careful", "cautious", "wary", "prudent", "judicious", "guarded", "watchful", "considered", "thoughtful", "deliberate", "measured", "calculated"], label: "Careful in action", hint: "The definition says 'careful to consider all circumstances' — nothing is done hastily." },
      { keyword: "consequences", matchTerms: ["consequences", "circumstances", "outcome", "result", "implications", "effects", "risks", "ramifications", "aftermath", "considerations", "possibilities", "impact"], label: "Considering consequences", hint: "The definition says 'circumstances and consequences' — thinking through what could happen." },
    ],
    synonyms: ["cautious", "prudent", "wary", "judicious", "discreet"],
  },
  {
    word: "complementary",
    partOfSpeech: "adjective",
    definition: "Combining in a way that enhances each other's qualities; mutually completing.",
    keyConcepts: [
      { keyword: "combining", matchTerms: ["combining", "together", "pair", "complement", "mutual", "reciprocal", "joint", "cooperative", "linked", "connected", "interrelated", "partnered"], label: "Combining together", hint: "The definition says 'combining in a way' — it only works when both parts are present." },
      { keyword: "enhances", matchTerms: ["enhance", "improve", "complete", "strengthen", "enrich", "fulfill", "supplement", "support", "balance", "offset", "supply", "fill"], label: "Enhances qualities", hint: "The definition says 'enhances each other's qualities' — each makes the other better." },
    ],
    synonyms: ["supplementary", "matching", "paired", "compatible", "harmonious"],
  },
  {
    word: "conciliatory",
    partOfSpeech: "adjective",
    definition: "Intended to make peace or reduce conflict; willing to make concessions.",
    keyConcepts: [
      { keyword: "peace", matchTerms: ["peace", "reconcile", "appease", "soothe", "calm", "placate", "mollify", "harmony", "agreement", "compromise", "goodwill", "mediation"], label: "Making peace", hint: "The definition says 'make peace or reduce conflict' — reaching toward resolution." },
      { keyword: "concessions", matchTerms: ["concessions", "compromise", "yield", "give", "accommodate", "flexible", "willing", "humble", "lenient", "forgiving", "open", "understanding"], label: "Willing to concede", hint: "The definition says 'willing to make concessions' — not holding firm but giving ground." },
    ],
    synonyms: ["appeasing", "placating", "mollifying", "reconciliatory", "accommodating"],
  },
  {
    word: "confer",
    partOfSpeech: "verb",
    definition: "To have a discussion in order to reach a decision; to grant or bestow something.",
    keyConcepts: [
      { keyword: "discussion", matchTerms: ["discussion", "consult", "deliberate", "talk", "meet", "exchange", "debate", "advise", "negotiate", "discuss", "converse", "dialogue"], label: "To have a discussion", hint: "The definition says 'discussion in order to reach a decision' — a purposeful exchange." },
    ],
    synonyms: ["consult", "deliberate", "discuss", "bestow", "grant"],
  },
  {
    word: "connoisseur",
    partOfSpeech: "noun",
    definition: "A person with expert knowledge and refined taste, especially in art or food.",
    keyConcepts: [
      { keyword: "expert", matchTerms: ["expert", "authority", "specialist", "judge", "critic", "knowledgeable", "learned", "skilled", "experienced", "sophisticated", "accomplished", "proficient"], label: "Expert knowledge", hint: "The definition says 'expert knowledge' — this person genuinely knows their subject deeply." },
      { keyword: "refined taste", matchTerms: ["refined", "taste", "discerning", "discriminating", "cultivated", "appreciation", "aesthetic", "palate", "judgment", "sophisticated", "fastidious", "selective"], label: "Refined taste", hint: "The definition says 'refined taste' — the ability to distinguish quality from mediocrity." },
    ],
    synonyms: ["expert", "authority", "critic", "aficionado", "maven"],
  },
  {
    word: "connote",
    partOfSpeech: "verb",
    definition: "To suggest or imply a meaning beyond the literal definition of a word.",
    keyConcepts: [
      { keyword: "suggest", matchTerms: ["suggest", "imply", "hint", "indicate", "evoke", "convey", "insinuate", "signal", "intimate", "mean", "represent", "symbolize"], label: "To suggest or imply", hint: "The definition says 'suggest or imply' — communicating beyond what is literally stated." },
      { keyword: "beyond", matchTerms: ["beyond", "additional", "associated", "secondary", "indirect", "unstated", "underlying", "implicit", "figurative", "emotional", "cultural", "contextual"], label: "Beyond literal meaning", hint: "The definition says 'beyond the literal definition' — the word carries extra associations." },
    ],
    synonyms: ["imply", "suggest", "indicate", "evoke", "signify"],
  },
  {
    word: "conversant",
    partOfSpeech: "adjective",
    definition: "Familiar with or knowledgeable about a subject through practice or study.",
    keyConcepts: [
      { keyword: "knowledgeable", matchTerms: ["knowledgeable", "familiar", "informed", "versed", "experienced", "acquainted", "aware", "proficient", "practiced", "schooled", "well-read", "trained"], label: "Knowledgeable about", hint: "The definition says 'knowledgeable about a subject' — having genuine understanding." },
    ],
    synonyms: ["familiar", "knowledgeable", "acquainted", "versed", "informed"],
  },
  {
    word: "cosmopolitan",
    partOfSpeech: "adjective",
    definition: "Familiar with and at ease in many different countries and cultures; worldly.",
    keyConcepts: [
      { keyword: "many different countries", matchTerms: ["cultures", "countries", "nations", "international", "global", "diverse", "multicultural", "worldly", "broad", "universal", "inclusive", "varied"], label: "Many different countries", hint: "The definition says 'many different countries and cultures' — breadth of exposure." },
      { keyword: "at ease", matchTerms: ["ease", "comfortable", "familiar", "worldly", "sophisticated", "cultured", "polished", "urbane", "broad-minded", "tolerant", "open", "versatile"], label: "At ease in the world", hint: "The definition says 'at ease' — not just exposed but genuinely comfortable across differences." },
    ],
    synonyms: ["worldly", "sophisticated", "urbane", "international", "cultured"],
  },
  {
    word: "covert",
    partOfSpeech: "adjective",
    definition: "Not openly acknowledged or displayed; secret and hidden from view.",
    keyConcepts: [
      { keyword: "secret", matchTerms: ["secret", "hidden", "clandestine", "concealed", "undercover", "covert", "disguised", "veiled", "surreptitious", "stealthy", "furtive", "incognito"], label: "Secret and hidden", hint: "The definition says 'secret and hidden' — kept deliberately out of sight." },
    ],
    synonyms: ["secret", "clandestine", "concealed", "undercover", "surreptitious"],
  },
  {
    word: "credulous",
    partOfSpeech: "adjective",
    definition: "Too willing to believe things without sufficient evidence; easily deceived.",
    keyConcepts: [
      { keyword: "willing to believe", matchTerms: ["believe", "trust", "accept", "gullible", "naive", "unsuspecting", "credulous", "deceived", "manipulated", "fooled", "taken in", "swallow"], label: "Willing to believe", hint: "The definition says 'willing to believe' — the disposition to accept without questioning." },
      { keyword: "sufficient evidence", matchTerms: ["without evidence", "insufficient", "uncritical", "unquestioning", "blindly", "readily", "easily", "hasty", "careless", "indiscriminate", "thoughtless"], label: "Sufficient evidence", hint: "The definition says 'without sufficient evidence' — belief isn't grounded in proof." },
    ],
    synonyms: ["gullible", "naive", "unsuspecting", "trusting", "impressionable"],
  },
  {
    word: "culminate",
    partOfSpeech: "verb",
    definition: "To reach the highest or final point; to come to a climax after a long development.",
    keyConcepts: [
      { keyword: "highest or final point", matchTerms: ["highest", "peak", "pinnacle", "apex", "climax", "zenith", "summit", "culmination", "top", "final", "ultimate", "acme"], label: "Highest or final point", hint: "The definition says 'highest or final point' — the moment everything has been building toward." },
    ],
    synonyms: ["peak", "climax", "conclude", "cap", "crest"],
  },
  {
    word: "debase",
    partOfSpeech: "verb",
    definition: "To lower the quality, value, or moral character of something or someone.",
    keyConcepts: [
      { keyword: "lower", matchTerms: ["lower", "reduce", "diminish", "degrade", "corrupt", "depreciate", "deteriorate", "cheapen", "tarnish", "taint", "pollute", "contaminate"], label: "To lower quality", hint: "The definition says 'lower the quality or value' — making something worth less." },
    ],
    synonyms: ["degrade", "corrupt", "cheapen", "tarnish", "diminish"],
  },
  {
    word: "debunk",
    partOfSpeech: "verb",
    definition: "To expose the falseness or exaggeration of a claim or belief.",
    keyConcepts: [
      { keyword: "expose", matchTerms: ["expose", "reveal", "uncover", "disprove", "discredit", "contradict", "refute", "challenge", "invalidate", "demolish", "puncture", "unmask"], label: "To expose", hint: "The definition says 'expose the falseness' — bringing hidden untruth into the open." },
      { keyword: "falseness", matchTerms: ["false", "fake", "myth", "claim", "belief", "misconception", "exaggeration", "fallacy", "fraud", "error", "deception", "misinformation"], label: "Falseness of a claim", hint: "The definition says 'falseness or exaggeration of a claim' — the target is something widely believed but wrong." },
    ],
    synonyms: ["disprove", "expose", "refute", "discredit", "contradict"],
  },
  {
    word: "deference",
    partOfSpeech: "noun",
    definition: "Respectful submission to the opinion or authority of another person.",
    keyConcepts: [
      { keyword: "respectful submission", matchTerms: ["submission", "respect", "yield", "defer", "comply", "obey", "honor", "bow", "reverence", "regard", "acknowledge", "concede"], label: "Respectful submission", hint: "The definition says 'respectful submission' — it is both yielding AND honoring." },
      { keyword: "authority", matchTerms: ["authority", "opinion", "judgment", "expertise", "status", "seniority", "knowledge", "experience", "rank", "position", "power", "leadership"], label: "To another's authority", hint: "The definition says 'opinion or authority' — deferring to someone's superior position or knowledge." },
    ],
    synonyms: ["submission", "respect", "deference", "compliance", "regard"],
  },
  {
    word: "deleterious",
    partOfSpeech: "adjective",
    definition: "Causing harm or damage, especially in a gradual or subtle way.",
    keyConcepts: [
      { keyword: "harm", matchTerms: ["harm", "damage", "injure", "hurt", "impair", "adverse", "detrimental", "destructive", "negative", "unhealthy", "toxic", "poisonous"], label: "Causing harm", hint: "The definition says 'causing harm or damage' — something with a negative effect." },
      { keyword: "gradual", matchTerms: ["gradual", "subtle", "slow", "insidious", "creeping", "cumulative", "incremental", "imperceptible", "progressive", "over time", "hidden", "unnoticed"], label: "Gradual or subtle", hint: "The definition says 'gradual or subtle' — the harm may not be obvious at first." },
    ],
    synonyms: ["harmful", "damaging", "injurious", "detrimental", "adverse"],
  },
  {
    word: "denigrate",
    partOfSpeech: "verb",
    definition: "To unfairly criticize or attack the reputation of a person or thing.",
    keyConcepts: [
      { keyword: "unfairly criticize", matchTerms: ["criticize", "belittle", "disparage", "attack", "defame", "slander", "malign", "vilify", "demean", "discredit", "undermine", "besmirch"], label: "Unfairly criticize", hint: "The definition says 'unfairly criticize' — the criticism goes beyond what is deserved." },
      { keyword: "reputation", matchTerms: ["reputation", "character", "name", "standing", "image", "honor", "integrity", "credibility", "dignity", "esteem", "status", "worth"], label: "Attack reputation", hint: "The definition says 'attack the reputation' — the target is how someone is perceived." },
    ],
    synonyms: ["disparage", "belittle", "malign", "defame", "discredit"],
  },
  {
    word: "denote",
    partOfSpeech: "verb",
    definition: "To be a name or symbol for something; to indicate or represent directly.",
    keyConcepts: [
      { keyword: "indicate", matchTerms: ["indicate", "represent", "mean", "signify", "stand for", "refer to", "name", "label", "identify", "designate", "mark", "specify"], label: "To indicate directly", hint: "The definition says 'indicate or represent directly' — the literal, explicit meaning." },
    ],
    synonyms: ["indicate", "signify", "represent", "mean", "stand for"],
  },
  {
    word: "deride",
    partOfSpeech: "verb",
    definition: "To mock or laugh at with contempt; to treat as ridiculous or unworthy.",
    keyConcepts: [
      { keyword: "mock", matchTerms: ["mock", "ridicule", "scorn", "jeer", "sneer", "taunt", "belittle", "scoff", "deride", "dismiss", "disdain", "laugh at"], label: "To mock", hint: "The definition says 'mock or laugh at' — treating with open contempt." },
      { keyword: "contempt", matchTerms: ["contempt", "disdain", "scorn", "disrespect", "condescension", "dismissiveness", "disregard", "belittlement", "derision", "ridicule", "low regard"], label: "With contempt", hint: "The definition says 'with contempt' — the attitude behind the mockery is deep disrespect." },
    ],
    synonyms: ["mock", "ridicule", "scorn", "jeer", "taunt"],
  },
  {
    word: "derivative",
    partOfSpeech: "adjective",
    definition: "Lacking originality; derived from an existing source rather than being new.",
    keyConcepts: [
      { keyword: "lacking originality", matchTerms: ["lacking originality", "unoriginal", "copied", "imitative", "borrowed", "secondhand", "recycled", "derived", "rehashed", "plagiarized", "clichéd", "formulaic"], label: "Lacking originality", hint: "The definition says 'lacking originality' — nothing new or fresh." },
      { keyword: "existing source", matchTerms: ["existing", "source", "original", "based on", "drawn from", "taken from", "adapted", "influenced", "inspired", "derived", "imitated", "copied"], label: "From an existing source", hint: "The definition says 'derived from an existing source' — it starts from something already made." },
    ],
    synonyms: ["imitative", "unoriginal", "secondhand", "copied", "formulaic"],
  },
  {
    word: "desultory",
    partOfSpeech: "adjective",
    definition: "Lacking a plan or enthusiasm; randomly jumping from one thing to another.",
    keyConcepts: [
      { keyword: "lacking a plan", matchTerms: ["lacking plan", "random", "aimless", "unsystematic", "haphazard", "erratic", "scattered", "disconnected", "irregular", "disorganized", "unmethodical", "incoherent"], label: "Lacking a plan", hint: "The definition says 'lacking a plan' — there's no logic or structure to it." },
      { keyword: "randomly", matchTerms: ["randomly", "jumping", "shifting", "wandering", "straying", "drifting", "moving", "switching", "changing", "digressing", "roaming", "meandering"], label: "Randomly jumping around", hint: "The definition says 'randomly jumping from one thing to another' — no sustained focus." },
    ],
    synonyms: ["aimless", "haphazard", "erratic", "random", "unmethodical"],
  },
  {
    word: "dichotomy",
    partOfSpeech: "noun",
    definition: "A division into two sharply contrasting groups or sets of ideas.",
    keyConcepts: [
      { keyword: "division", matchTerms: ["division", "split", "separation", "distinction", "contrast", "opposition", "difference", "divergence", "fork", "duality", "binary", "polarity"], label: "A division", hint: "The definition says 'division into two' — a splitting into parts." },
      { keyword: "contrasting", matchTerms: ["contrasting", "opposing", "conflicting", "contradictory", "incompatible", "polarized", "sharply different", "antithetical", "mutually exclusive", "divergent"], label: "Sharply contrasting", hint: "The definition says 'sharply contrasting' — the two sides are very different, not just slightly so." },
    ],
    synonyms: ["division", "split", "contrast", "duality", "polarity"],
  },
  {
    word: "dictum",
    partOfSpeech: "noun",
    definition: "A formal or authoritative statement of principle; a widely quoted saying.",
    keyConcepts: [
      { keyword: "authoritative", matchTerms: ["authoritative", "formal", "official", "binding", "ruling", "pronouncement", "decree", "declaration", "mandate", "edict", "command", "law"], label: "Authoritative statement", hint: "The definition says 'formal or authoritative statement' — it carries weight and recognition." },
      { keyword: "principle", matchTerms: ["principle", "rule", "maxim", "truth", "saying", "proverb", "axiom", "tenet", "doctrine", "belief", "guideline", "motto"], label: "Statement of principle", hint: "The definition says 'statement of principle' — it encapsulates a guiding truth or rule." },
    ],
    synonyms: ["maxim", "saying", "ruling", "decree", "pronouncement"],
  },
  {
    word: "didactic",
    partOfSpeech: "adjective",
    definition: "Intended to teach or instruct, often in a moral or overly preachy way.",
    keyConcepts: [
      { keyword: "teach", matchTerms: ["teach", "instruct", "educate", "inform", "guide", "lesson", "preach", "moralize", "lecture", "enlighten", "explain", "illustrate"], label: "Intended to teach", hint: "The definition says 'intended to teach or instruct' — the primary purpose is instruction." },
      { keyword: "moral", matchTerms: ["moral", "ethics", "virtue", "values", "lesson", "principle", "preachy", "righteous", "improving", "edifying", "moralizing", "sanctimonious"], label: "Moral lesson", hint: "The definition says 'moral or overly preachy' — it teaches with a pointed ethical agenda." },
    ],
    synonyms: ["instructive", "educational", "preachy", "moralistic", "pedagogic"],
  },
  {
    word: "diffident",
    partOfSpeech: "adjective",
    definition: "Modest and shy because of a lack of self-confidence; reluctant to assert oneself.",
    keyConcepts: [
      { keyword: "shy", matchTerms: ["shy", "modest", "timid", "reserved", "retiring", "meek", "bashful", "hesitant", "unassuming", "self-conscious", "withdrawn", "introverted"], label: "Shy and modest", hint: "The definition says 'modest and shy' — a quiet, unassertive presence." },
      { keyword: "self-confidence", matchTerms: ["self-confidence", "confidence", "assurance", "belief", "self-esteem", "certainty", "boldness", "assertiveness", "conviction", "security", "poise", "courage"], label: "Lack of self-confidence", hint: "The definition says 'lack of self-confidence' — the diffidence stems from inner doubt." },
    ],
    synonyms: ["timid", "shy", "modest", "reserved", "unassuming"],
  },
  {
    word: "diffuse",
    partOfSpeech: "adjective",
    definition: "Spread out over a wide area; not concentrated or focused in one place.",
    keyConcepts: [
      { keyword: "spread out", matchTerms: ["spread", "dispersed", "scattered", "distributed", "wide", "broad", "extensive", "pervasive", "diluted", "disseminated", "unfocused", "diffuse"], label: "Spread out", hint: "The definition says 'spread out over a wide area' — not concentrated." },
      { keyword: "not concentrated", matchTerms: ["not focused", "unfocused", "lacking concentration", "diluted", "vague", "rambling", "wordy", "verbose", "digressive", "scattered", "diffuse", "meandering"], label: "Not concentrated", hint: "The definition says 'not concentrated' — energy or meaning is spread too thin." },
    ],
    synonyms: ["scattered", "dispersed", "spread", "unfocused", "diluted"],
  },
  {
    word: "digress",
    partOfSpeech: "verb",
    definition: "To deviate from the main topic in speech or writing; to go off on a tangent.",
    keyConcepts: [
      { keyword: "deviate", matchTerms: ["deviate", "stray", "wander", "diverge", "depart", "drift", "sidetrack", "turn aside", "veer", "ramble", "tangent", "meander"], label: "To deviate", hint: "The definition says 'deviate from the main topic' — moving away from the central subject." },
      { keyword: "main topic", matchTerms: ["topic", "subject", "point", "focus", "main idea", "thread", "argument", "discourse", "narrative", "theme", "purpose", "direction"], label: "From the main topic", hint: "The definition says 'main topic' — there is a proper course being abandoned." },
    ],
    synonyms: ["deviate", "stray", "wander", "ramble", "sidetrack"],
  },
  {
    word: "dilatory",
    partOfSpeech: "adjective",
    definition: "Slow to act or respond; tending to cause delay or procrastinate.",
    keyConcepts: [
      { keyword: "slow", matchTerms: ["slow", "delay", "procrastinate", "tardy", "late", "unhurried", "leisurely", "lagging", "dawdling", "postponing", "stalling", "dragging"], label: "Slow to act", hint: "The definition says 'slow to act or respond' — failing to move with appropriate speed." },
      { keyword: "delay", matchTerms: ["delay", "postpone", "defer", "stall", "drag out", "put off", "hold back", "obstruct", "hinder", "impede", "stretch out", "prolong"], label: "Causing delay", hint: "The definition says 'tending to cause delay' — the slowness has a consequence." },
    ],
    synonyms: ["slow", "tardy", "procrastinating", "delaying", "dawdling"],
  },
  {
    word: "dilettante",
    partOfSpeech: "noun",
    definition: "A person who cultivates an interest in a subject without serious commitment or expertise.",
    keyConcepts: [
      { keyword: "without serious commitment", matchTerms: ["without commitment", "superficial", "casual", "amateur", "dabbler", "hobbyist", "non-expert", "surface-level", "passing interest", "playful", "unserious", "light"], label: "Without serious commitment", hint: "The definition says 'without serious commitment' — the involvement is shallow." },
      { keyword: "cultivates an interest", matchTerms: ["interest", "hobby", "pursuit", "practice", "involvement", "engagement", "enjoyment", "appreciation", "flair", "taste", "amateur", "casual"], label: "Cultivates an interest", hint: "The definition says 'cultivates an interest' — there is genuine (if shallow) engagement." },
    ],
    synonyms: ["dabbler", "amateur", "hobbyist", "trifler", "nonprofessional"],
  },
  {
    word: "disabuse",
    partOfSpeech: "verb",
    definition: "To free someone from a mistaken belief or false impression.",
    keyConcepts: [
      { keyword: "free", matchTerms: ["free", "correct", "enlighten", "undeceive", "set straight", "clear up", "rectify", "disillusion", "inform", "educate", "show the truth", "dispel"], label: "To free from error", hint: "The definition says 'free someone' — releasing them from something they're trapped in." },
      { keyword: "mistaken belief", matchTerms: ["mistaken", "false", "error", "misconception", "illusion", "wrong", "incorrect", "myth", "delusion", "misunderstanding", "impression", "assumption"], label: "Mistaken belief", hint: "The definition says 'mistaken belief or false impression' — the thing being corrected is a specific falsehood." },
    ],
    synonyms: ["correct", "enlighten", "undeceive", "disillusion", "set straight"],
  },
  {
    word: "discerning",
    partOfSpeech: "adjective",
    definition: "Having good judgment and the ability to distinguish what is excellent or true.",
    keyConcepts: [
      { keyword: "good judgment", matchTerms: ["good judgment", "perceptive", "astute", "shrewd", "wise", "insightful", "perspicacious", "discriminating", "acute", "sharp", "intelligent", "thoughtful"], label: "Good judgment", hint: "The definition says 'good judgment' — the capacity to evaluate accurately." },
      { keyword: "distinguish", matchTerms: ["distinguish", "differentiate", "discern", "detect", "identify", "separate", "notice", "recognize", "perceive", "discriminate", "tell apart", "see"], label: "Ability to distinguish", hint: "The definition says 'distinguish what is excellent or true' — making meaningful distinctions." },
    ],
    synonyms: ["perceptive", "astute", "judicious", "perspicacious", "discriminating"],
  },
  {
    word: "discomfiting",
    partOfSpeech: "adjective",
    definition: "Causing a feeling of unease, embarrassment, or confusion; unsettling.",
    keyConcepts: [
      { keyword: "unease", matchTerms: ["unease", "embarrassment", "discomfort", "awkward", "unsettling", "confusing", "disconcerting", "disturbing", "upsetting", "perplexing", "troubling", "destabilizing"], label: "Causing unease", hint: "The definition says 'feeling of unease, embarrassment, or confusion' — a destabilizing effect." },
    ],
    synonyms: ["unsettling", "disconcerting", "embarrassing", "awkward", "perplexing"],
  },
  {
    word: "discrete",
    partOfSpeech: "adjective",
    definition: "Individually separate and distinct; existing as individual, unconnected parts.",
    keyConcepts: [
      { keyword: "separate", matchTerms: ["separate", "distinct", "individual", "independent", "isolated", "unconnected", "different", "unique", "detached", "divided", "apart", "discontinuous"], label: "Individually separate", hint: "The definition says 'individually separate and distinct' — each part stands alone." },
    ],
    synonyms: ["separate", "distinct", "individual", "detached", "unconnected"],
  },
  {
    word: "disingenuous",
    partOfSpeech: "adjective",
    definition: "Not candid or sincere; pretending to be unaware or innocent while having hidden motives.",
    keyConcepts: [
      { keyword: "not candid or sincere", matchTerms: ["not sincere", "insincere", "dishonest", "deceptive", "misleading", "false", "fake", "pretending", "hypocritical", "two-faced", "calculated", "manipulative"], label: "Not candid or sincere", hint: "The definition says 'not candid or sincere' — there's a hidden reality beneath the surface." },
      { keyword: "hidden motives", matchTerms: ["hidden", "motives", "agenda", "intentions", "purpose", "ulterior", "concealed", "disguised", "undisclosed", "secret", "real reason", "underlying"], label: "Hidden motives", hint: "The definition says 'hidden motives' — the person knows more or wants more than they let on." },
    ],
    synonyms: ["insincere", "dishonest", "calculating", "hypocritical", "two-faced"],
  },
  {
    word: "disseminate",
    partOfSpeech: "verb",
    definition: "To spread information, ideas, or knowledge widely among many people.",
    keyConcepts: [
      { keyword: "spread", matchTerms: ["spread", "distribute", "broadcast", "circulate", "share", "propagate", "disperse", "disseminate", "publish", "release", "convey", "transmit"], label: "To spread widely", hint: "The definition says 'spread widely' — reaching as many people as possible." },
      { keyword: "information", matchTerms: ["information", "ideas", "knowledge", "news", "message", "content", "data", "material", "findings", "beliefs", "teachings", "views"], label: "Spread information", hint: "The definition says 'information, ideas, or knowledge' — something intellectual being distributed." },
    ],
    synonyms: ["distribute", "broadcast", "circulate", "spread", "propagate"],
  },
  {
    word: "dissent",
    partOfSpeech: "noun",
    definition: "The holding or expression of an opinion contrary to an official or mainstream view.",
    keyConcepts: [
      { keyword: "opinion contrary", matchTerms: ["contrary", "opposing", "different", "disagreement", "objection", "protest", "dissent", "deviation", "non-conformity", "rejection", "challenge", "alternative"], label: "Opinion contrary", hint: "The definition says 'opinion contrary to' — it goes against what is established." },
      { keyword: "official or mainstream view", matchTerms: ["official", "mainstream", "established", "authority", "institution", "consensus", "accepted", "orthodox", "majority", "dominant", "government", "body"], label: "Official or mainstream view", hint: "The definition says 'official or mainstream view' — the opposition is to something with recognized status." },
    ],
    synonyms: ["disagreement", "objection", "protest", "opposition", "nonconformity"],
  },
  {
    word: "ebullient",
    partOfSpeech: "adjective",
    definition: "Overflowing with enthusiasm, energy, and excitement; cheerful and vivacious.",
    keyConcepts: [
      { keyword: "overflowing", matchTerms: ["overflowing", "exuberant", "bubbling", "effusive", "irrepressible", "abundant", "brimming", "bursting", "gushing", "vivacious", "animated", "spirited"], label: "Overflowing energy", hint: "The definition says 'overflowing with enthusiasm' — the energy can't be contained." },
      { keyword: "enthusiasm", matchTerms: ["enthusiasm", "energy", "excitement", "joy", "zest", "vitality", "liveliness", "vigor", "spirit", "passion", "delight", "cheerfulness"], label: "With enthusiasm", hint: "The definition says 'enthusiasm, energy, and excitement' — all positive energy." },
    ],
    synonyms: ["exuberant", "effervescent", "vivacious", "enthusiastic", "buoyant"],
  },
  {
    word: "eccentric",
    partOfSpeech: "adjective",
    definition: "Departing from conventional or accepted behavior in an unconventional way; odd.",
    keyConcepts: [
      { keyword: "unconventional", matchTerms: ["unconventional", "unusual", "odd", "peculiar", "quirky", "idiosyncratic", "nonconformist", "irregular", "weird", "strange", "offbeat", "individual"], label: "Unconventional", hint: "The definition says 'unconventional way' — different from the norm in a distinctive manner." },
      { keyword: "behavior", matchTerms: ["behavior", "manner", "conduct", "character", "personality", "habit", "style", "practice", "attitude", "way", "approach", "disposition"], label: "Departing from behavior norms", hint: "The definition says 'departing from conventional behavior' — it's seen in how someone acts." },
    ],
    synonyms: ["unconventional", "quirky", "odd", "peculiar", "idiosyncratic"],
  },
  {
    word: "eclectic",
    partOfSpeech: "adjective",
    definition: "Deriving ideas from a broad and diverse range of sources or styles.",
    keyConcepts: [
      { keyword: "diverse", matchTerms: ["diverse", "varied", "mixed", "broad", "wide-ranging", "multifaceted", "heterogeneous", "assorted", "different", "various", "multiple", "wide"], label: "Diverse range", hint: "The definition says 'broad and diverse range' — it comes from many different places." },
      { keyword: "sources", matchTerms: ["sources", "styles", "influences", "traditions", "schools", "disciplines", "areas", "fields", "backgrounds", "origins", "approaches", "methods"], label: "Range of sources", hint: "The definition says 'range of sources or styles' — selecting from many distinct traditions." },
    ],
    synonyms: ["diverse", "varied", "wide-ranging", "multifaceted", "catholic"],
  },
  {
    word: "efficacy",
    partOfSpeech: "noun",
    definition: "The ability to produce the intended result; effectiveness in achieving a goal.",
    keyConcepts: [
      { keyword: "intended result", matchTerms: ["intended", "result", "effect", "outcome", "goal", "purpose", "aim", "objective", "success", "achievement", "impact", "output"], label: "Intended result", hint: "The definition says 'intended result' — it's about producing exactly what was sought." },
      { keyword: "ability", matchTerms: ["ability", "power", "capacity", "capability", "strength", "potency", "effectiveness", "efficiency", "performance", "productivity", "reliability", "force"], label: "Ability to produce", hint: "The definition says 'ability to produce' — the capacity to actually make something happen." },
    ],
    synonyms: ["effectiveness", "potency", "efficiency", "capability", "power"],
  },
  {
    word: "egalitarian",
    partOfSpeech: "adjective",
    definition: "Believing in or based on the principle that all people are equal and deserve equal rights.",
    keyConcepts: [
      { keyword: "equal", matchTerms: ["equal", "equality", "fair", "just", "democratic", "impartial", "balanced", "equitable", "uniform", "same", "unbiased", "neutral"], label: "All people equal", hint: "The definition says 'all people are equal' — no hierarchies, no special treatment." },
      { keyword: "rights", matchTerms: ["rights", "treatment", "opportunity", "access", "privilege", "status", "respect", "dignity", "entitlement", "freedom", "consideration", "standing"], label: "Equal rights", hint: "The definition says 'deserve equal rights' — the equality is in what people are owed." },
    ],
    synonyms: ["equalitarian", "democratic", "fair", "impartial", "just"],
  },
  {
    word: "egregious",
    partOfSpeech: "adjective",
    definition: "Outstandingly bad or shocking; conspicuously offensive to the point of notoriety.",
    keyConcepts: [
      { keyword: "outstandingly bad", matchTerms: ["outstandingly bad", "shocking", "glaring", "flagrant", "gross", "blatant", "conspicuous", "notorious", "extreme", "unacceptable", "appalling", "heinous"], label: "Outstandingly bad", hint: "The definition says 'outstandingly bad or shocking' — bad in a way that stands out." },
    ],
    synonyms: ["flagrant", "glaring", "gross", "blatant", "outrageous"],
  },
  {
    word: "elicit",
    partOfSpeech: "verb",
    definition: "To draw out or provoke a response, reaction, or information from someone.",
    keyConcepts: [
      { keyword: "draw out", matchTerms: ["draw out", "provoke", "evoke", "call forth", "bring out", "extract", "prompt", "induce", "generate", "produce", "cause", "stimulate"], label: "To draw out", hint: "The definition says 'draw out or provoke' — pulling something out that wasn't freely given." },
      { keyword: "response", matchTerms: ["response", "reaction", "information", "answer", "reply", "emotion", "feeling", "behavior", "action", "data", "opinion", "comment"], label: "A response or reaction", hint: "The definition says 'response, reaction, or information' — the result of the elicitation." },
    ],
    synonyms: ["evoke", "provoke", "extract", "draw out", "prompt"],
  },
  {
    word: "eloquent",
    partOfSpeech: "adjective",
    definition: "Fluent and persuasive in speech or writing; able to express ideas with clarity and force.",
    keyConcepts: [
      { keyword: "fluent", matchTerms: ["fluent", "articulate", "expressive", "persuasive", "compelling", "forceful", "clear", "moving", "effective", "polished", "coherent", "powerful"], label: "Fluent and persuasive", hint: "The definition says 'fluent and persuasive' — not just clear but also convincing." },
    ],
    synonyms: ["articulate", "fluent", "expressive", "persuasive", "forceful"],
  },
  {
    word: "eminent",
    partOfSpeech: "adjective",
    definition: "Famous and respected within a particular field; standing out for achievements or status.",
    keyConcepts: [
      { keyword: "famous", matchTerms: ["famous", "renowned", "distinguished", "celebrated", "prominent", "notable", "illustrious", "respected", "acclaimed", "preeminent", "outstanding", "recognized"], label: "Famous and respected", hint: "The definition says 'famous and respected' — this person is known AND admired." },
      { keyword: "particular field", matchTerms: ["field", "area", "profession", "domain", "discipline", "sphere", "subject", "industry", "career", "specialty", "realm", "category"], label: "In a particular field", hint: "The definition says 'within a particular field' — the eminence is specific, not general." },
    ],
    synonyms: ["distinguished", "renowned", "prominent", "notable", "celebrated"],
  },
  {
    word: "emulate",
    partOfSpeech: "verb",
    definition: "To try to equal or surpass another person or thing by copying their example.",
    keyConcepts: [
      { keyword: "equal or surpass", matchTerms: ["equal", "surpass", "match", "rival", "exceed", "outdo", "beat", "better", "compete", "challenge", "meet", "overtake"], label: "Equal or surpass", hint: "The definition says 'equal or surpass' — the goal is to be as good as or better." },
      { keyword: "copying", matchTerms: ["copy", "imitate", "model", "follow", "mirror", "replicate", "reproduce", "take after", "learn from", "adopt", "simulate", "mimic"], label: "By copying", hint: "The definition says 'by copying their example' — imitation is the means to competition." },
    ],
    synonyms: ["imitate", "copy", "rival", "match", "mirror"],
  },
  {
    word: "endemic",
    partOfSpeech: "adjective",
    definition: "Native to and regularly found in a particular place or population; locally common.",
    keyConcepts: [
      { keyword: "native", matchTerms: ["native", "local", "indigenous", "specific", "natural", "inherent", "characteristic", "belonging", "originating", "confined", "exclusive", "particular"], label: "Native to a place", hint: "The definition says 'native to a particular place' — it originated there and belongs there." },
      { keyword: "regularly found", matchTerms: ["regularly", "commonly", "frequently", "consistently", "always", "prevalent", "widespread", "typical", "usual", "normal", "recurrent", "persistent"], label: "Regularly found", hint: "The definition says 'regularly found' — it's not a surprise or anomaly but an expected presence." },
    ],
    synonyms: ["native", "indigenous", "local", "prevalent", "widespread"],
  },
  {
    word: "enervate",
    partOfSpeech: "verb",
    definition: "To weaken or drain of energy, vitality, or strength; to make someone feel exhausted.",
    keyConcepts: [
      { keyword: "weaken", matchTerms: ["weaken", "drain", "exhaust", "tire", "deplete", "sap", "debilitate", "enfeeble", "devitalize", "impair", "reduce", "diminish"], label: "To weaken", hint: "The definition says 'weaken or drain' — removing what gives something life or force." },
      { keyword: "energy", matchTerms: ["energy", "vitality", "strength", "vigor", "force", "power", "stamina", "drive", "spirit", "life", "motivation", "capacity"], label: "Drain of energy", hint: "The definition says 'energy, vitality, or strength' — what is being taken away." },
    ],
    synonyms: ["weaken", "exhaust", "debilitate", "sap", "drain"],
  },
  {
    word: "engender",
    partOfSpeech: "verb",
    definition: "To cause or give rise to a feeling, situation, or condition; to bring into being.",
    keyConcepts: [
      { keyword: "cause", matchTerms: ["cause", "produce", "generate", "create", "bring about", "give rise", "foster", "cultivate", "spark", "trigger", "inspire", "develop"], label: "To cause", hint: "The definition says 'cause or give rise to' — being the origin of something." },
      { keyword: "feeling", matchTerms: ["feeling", "situation", "condition", "emotion", "attitude", "response", "outcome", "result", "effect", "state", "quality", "characteristic"], label: "A feeling or situation", hint: "The definition says 'a feeling, situation, or condition' — the things that are engendered." },
    ],
    synonyms: ["cause", "produce", "generate", "create", "foster"],
  },
  {
    word: "enigma",
    partOfSpeech: "noun",
    definition: "A person or thing that is mysterious, puzzling, or difficult to understand.",
    keyConcepts: [
      { keyword: "mysterious", matchTerms: ["mysterious", "puzzling", "baffling", "inexplicable", "inscrutable", "incomprehensible", "obscure", "ambiguous", "complex", "cryptic", "perplexing", "confounding"], label: "Mysterious", hint: "The definition says 'mysterious, puzzling' — resisting easy understanding." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "hard to read", "impenetrable", "elusive", "unknowable", "opaque", "unclear", "obscure", "hidden", "complex", "deep", "challenging"], label: "Difficult to understand", hint: "The definition says 'difficult to understand' — it is genuinely resistant to being figured out." },
    ],
    synonyms: ["mystery", "puzzle", "riddle", "paradox", "conundrum"],
  },
  {
    word: "entitlement",
    partOfSpeech: "noun",
    definition: "The belief that one deserves special privileges or treatment, often without justification.",
    keyConcepts: [
      { keyword: "belief", matchTerms: ["belief", "assumption", "expectation", "conviction", "attitude", "sense", "feeling", "perception", "idea", "notion", "claim", "view"], label: "Belief one deserves", hint: "The definition says 'belief that one deserves' — it is a mental stance, not a fact." },
      { keyword: "privileges", matchTerms: ["privileges", "special treatment", "rights", "benefits", "advantages", "concessions", "favors", "accommodations", "exemptions", "deference", "consideration", "access"], label: "Special privileges", hint: "The definition says 'special privileges or treatment' — expecting more than others receive." },
    ],
    synonyms: ["presumption", "privilege", "right", "claim", "expectation"],
  },
  {
    word: "ephemeral",
    partOfSpeech: "adjective",
    definition: "Lasting for only a very short time; passing quickly and not enduring.",
    keyConcepts: [
      { keyword: "very short time", matchTerms: ["short time", "brief", "fleeting", "transient", "temporary", "momentary", "passing", "transitory", "impermanent", "short-lived", "quick", "instantaneous"], label: "Very short time", hint: "The definition says 'only a very short time' — it barely lasts before it's gone." },
    ],
    synonyms: ["transient", "fleeting", "momentary", "short-lived", "impermanent"],
  },
  {
    word: "equanimity",
    partOfSpeech: "noun",
    definition: "Mental calmness and composure, especially in difficult situations; emotional stability.",
    keyConcepts: [
      { keyword: "calmness", matchTerms: ["calmness", "composure", "stability", "serenity", "tranquility", "balance", "equability", "poise", "steadiness", "peacefulness", "collectedness", "self-control"], label: "Mental calmness", hint: "The definition says 'mental calmness and composure' — a quiet steadiness of mind." },
      { keyword: "difficult situations", matchTerms: ["difficult", "adversity", "stress", "crisis", "hardship", "challenge", "pressure", "trouble", "hardship", "distress", "turmoil", "strain"], label: "In difficult situations", hint: "The definition says 'especially in difficult situations' — the equanimity matters most under pressure." },
    ],
    synonyms: ["composure", "serenity", "poise", "steadiness", "tranquility"],
  },
  {
    word: "equitable",
    partOfSpeech: "adjective",
    definition: "Fair and impartial; treating all parties with justice and without favoritism.",
    keyConcepts: [
      { keyword: "fair", matchTerms: ["fair", "just", "impartial", "balanced", "unbiased", "equal", "neutral", "objective", "disinterested", "evenhanded", "reasonable", "proportionate"], label: "Fair and impartial", hint: "The definition says 'fair and impartial' — neither side gets special advantage." },
    ],
    synonyms: ["fair", "just", "impartial", "balanced", "unbiased"],
  },
  {
    word: "equivocate",
    partOfSpeech: "verb",
    definition: "To use deliberately vague language to avoid committing to a clear position.",
    keyConcepts: [
      { keyword: "vague", matchTerms: ["vague", "ambiguous", "unclear", "evasive", "noncommittal", "hedging", "waffling", "prevaricating", "misleading", "obscure", "indirect", "imprecise"], label: "Deliberately vague", hint: "The definition says 'deliberately vague' — the imprecision is intentional." },
      { keyword: "avoid committing", matchTerms: ["avoid", "evade", "hedge", "dodge", "sidestep", "circumvent", "escape", "refuse", "stall", "delay", "deflect", "withhold"], label: "Avoid committing", hint: "The definition says 'avoid committing to a clear position' — not taking a definite stand." },
    ],
    synonyms: ["hedge", "evade", "prevaricate", "waffle", "obfuscate"],
  },
  {
    word: "erratic",
    partOfSpeech: "adjective",
    definition: "Not even or regular; unpredictable and inconsistent in behavior or movement.",
    keyConcepts: [
      { keyword: "unpredictable", matchTerms: ["unpredictable", "inconsistent", "irregular", "variable", "volatile", "changeable", "unstable", "capricious", "random", "unsteady", "fluctuating", "sporadic"], label: "Unpredictable", hint: "The definition says 'unpredictable and inconsistent' — you can't rely on it to behave in any set way." },
    ],
    synonyms: ["unpredictable", "inconsistent", "irregular", "volatile", "capricious"],
  },
  {
    word: "erroneous",
    partOfSpeech: "adjective",
    definition: "Containing or based on an error; wrong or mistaken.",
    keyConcepts: [
      { keyword: "wrong", matchTerms: ["wrong", "incorrect", "false", "mistaken", "inaccurate", "flawed", "faulty", "untrue", "invalid", "unsound", "misleading", "errant"], label: "Wrong or mistaken", hint: "The definition says 'wrong or mistaken' — it departs from what is true or correct." },
    ],
    synonyms: ["incorrect", "wrong", "mistaken", "false", "inaccurate"],
  },
  {
    word: "erudite",
    partOfSpeech: "adjective",
    definition: "Having or showing deep, often scholarly knowledge; highly educated and learned.",
    keyConcepts: [
      { keyword: "deep, often scholarly knowledge", matchTerms: ["knowledge", "learning", "scholarship", "wisdom", "education", "expertise", "literacy", "culture", "intellect", "understanding", "insight", "academic"], label: "Deep, often scholarly knowledge", hint: "The definition says 'deep, often scholarly knowledge' — not casual familiarity but serious study." },
    ],
    synonyms: ["learned", "scholarly", "knowledgeable", "erudite", "educated"],
  },
  {
    word: "eschew",
    partOfSpeech: "verb",
    definition: "To deliberately avoid or abstain from something; to shun as undesirable.",
    keyConcepts: [
      { keyword: "avoid", matchTerms: ["avoid", "abstain", "shun", "forgo", "forswear", "refrain", "reject", "steer clear", "keep away", "bypass", "evade", "sidestep"], label: "Deliberately avoid", hint: "The definition says 'deliberately avoid or abstain' — a conscious, purposeful choice." },
    ],
    synonyms: ["avoid", "shun", "abstain", "forgo", "forswear"],
  },
  {
    word: "esoteric",
    partOfSpeech: "adjective",
    definition: "Intended for or understood by only a small group with special knowledge or interest.",
    keyConcepts: [
      { keyword: "small group", matchTerms: ["small group", "few", "select", "initiated", "specialist", "insider", "elite", "exclusive", "limited", "narrow", "restricted", "chosen"], label: "Small group", hint: "The definition says 'only a small group' — most people are excluded from understanding." },
      { keyword: "special knowledge", matchTerms: ["special knowledge", "expertise", "training", "initiation", "study", "background", "understanding", "insight", "familiarity", "learning", "scholarship", "mastery"], label: "Special knowledge", hint: "The definition says 'special knowledge or interest' — access requires something beyond common experience." },
    ],
    synonyms: ["arcane", "obscure", "cryptic", "abstruse", "recondite"],
  },
  {
    word: "ethos",
    partOfSpeech: "noun",
    definition: "The characteristic spirit or fundamental values of a culture, community, or group.",
    keyConcepts: [
      { keyword: "characteristic spirit", matchTerms: ["spirit", "character", "values", "culture", "identity", "nature", "essence", "attitude", "philosophy", "outlook", "temperament", "disposition"], label: "Characteristic spirit", hint: "The definition says 'characteristic spirit' — the underlying tone that defines a group." },
      { keyword: "culture", matchTerms: ["culture", "community", "group", "society", "organization", "nation", "movement", "institution", "tradition", "people", "collective", "body"], label: "Of a culture or group", hint: "The definition says 'culture, community, or group' — an ethos belongs to a collective, not an individual." },
    ],
    synonyms: ["character", "spirit", "values", "philosophy", "culture"],
  },
  {
    word: "eulogy",
    partOfSpeech: "noun",
    definition: "A speech or piece of writing praising a person, especially one who has recently died.",
    keyConcepts: [
      { keyword: "praising", matchTerms: ["praising", "tribute", "honor", "celebrate", "commend", "extol", "laud", "glorify", "appreciate", "commemorate", "remember", "acclaim"], label: "Praising a person", hint: "The definition says 'praising a person' — the purpose is to honor and celebrate." },
      { keyword: "died", matchTerms: ["died", "death", "funeral", "deceased", "passed", "memorial", "mourning", "loss", "obituary", "late", "gone", "farewell"], label: "Who has died", hint: "The definition says 'recently died' — a eulogy is most commonly associated with loss and mourning." },
    ],
    synonyms: ["tribute", "encomium", "panegyric", "oration", "testimonial"],
  },
  {
    word: "exacerbate",
    partOfSpeech: "verb",
    definition: "To make an already bad situation worse or more severe.",
    keyConcepts: [
      { keyword: "worse", matchTerms: ["worse", "aggravate", "intensify", "inflame", "heighten", "increase", "compound", "deepen", "amplify", "escalate", "deteriorate", "magnify"], label: "Make worse", hint: "The definition says 'make worse or more severe' — things were already bad and now they are more so." },
      { keyword: "already bad", matchTerms: ["already bad", "existing problem", "situation", "condition", "difficulty", "tension", "conflict", "suffering", "pain", "issue", "trouble", "complication"], label: "Already bad situation", hint: "The definition says 'already bad situation' — exacerbation requires a pre-existing problem." },
    ],
    synonyms: ["aggravate", "worsen", "intensify", "inflame", "compound"],
  },
  {
    word: "exacting",
    partOfSpeech: "adjective",
    definition: "Making great demands; requiring very precise and careful attention to standards.",
    keyConcepts: [
      { keyword: "great demands", matchTerms: ["demands", "requirements", "standards", "expectations", "criteria", "conditions", "rigor", "strictness", "precision", "exactness", "accuracy", "thoroughness"], label: "Making great demands", hint: "The definition says 'making great demands' — a high bar is set and enforced." },
      { keyword: "precise", matchTerms: ["precise", "careful", "meticulous", "exact", "rigorous", "accurate", "fastidious", "thorough", "strict", "demanding", "uncompromising", "detailed"], label: "Precise attention", hint: "The definition says 'precise and careful' — not just demanding but demanding exactness specifically." },
    ],
    synonyms: ["demanding", "rigorous", "strict", "meticulous", "fastidious"],
  },
  {
    word: "exhaustive",
    partOfSpeech: "adjective",
    definition: "Covering every aspect of a topic thoroughly; leaving nothing out.",
    keyConcepts: [
      { keyword: "every aspect", matchTerms: ["every aspect", "complete", "comprehensive", "thorough", "all-encompassing", "inclusive", "total", "entire", "full", "whole", "broad", "detailed"], label: "Every aspect", hint: "The definition says 'every aspect' — nothing is overlooked or skipped." },
      { keyword: "leaving nothing out", matchTerms: ["leaving nothing", "complete", "thorough", "full", "exhaustive", "comprehensive", "all-inclusive", "systematic", "rigorous", "meticulous", "painstaking", "definitive"], label: "Leaving nothing out", hint: "The definition says 'leaving nothing out' — the completeness is the defining quality." },
    ],
    synonyms: ["comprehensive", "thorough", "complete", "all-inclusive", "definitive"],
  },
  {
    word: "exigent",
    partOfSpeech: "adjective",
    definition: "Requiring urgent attention or action; pressing and demanding.",
    keyConcepts: [
      { keyword: "urgent", matchTerms: ["urgent", "pressing", "immediate", "critical", "crucial", "important", "compelling", "emergency", "acute", "demanding", "serious", "imperative"], label: "Requiring urgency", hint: "The definition says 'urgent attention or action' — it cannot wait." },
    ],
    synonyms: ["urgent", "pressing", "critical", "compelling", "acute"],
  },
  {
    word: "expedient",
    partOfSpeech: "adjective",
    definition: "Convenient and practical, often at the expense of moral considerations.",
    keyConcepts: [
      { keyword: "convenient", matchTerms: ["convenient", "practical", "useful", "effective", "advantageous", "suitable", "serviceable", "efficient", "pragmatic", "opportunistic", "sensible", "tactical"], label: "Convenient and practical", hint: "The definition says 'convenient and practical' — it works, and that's what matters." },
      { keyword: "moral considerations", matchTerms: ["moral", "ethics", "principles", "values", "conscience", "integrity", "fairness", "honor", "right", "wrong", "scruples", "ideals"], label: "At expense of morals", hint: "The definition says 'at the expense of moral considerations' — expediency trades ethics for results." },
    ],
    synonyms: ["practical", "convenient", "pragmatic", "useful", "politic"],
  },
  {
    word: "fanatical",
    partOfSpeech: "adjective",
    definition: "Filled with excessive and uncritical devotion to a cause, belief, or activity.",
    keyConcepts: [
      { keyword: "excessive and uncritical devotion", matchTerms: ["excessive", "devotion", "obsessive", "extreme", "zealous", "fervent", "intense", "passionate", "radical", "dogmatic", "blind", "unreasoning"], label: "Excessive and uncritical devotion", hint: "The definition says 'excessive devotion' — going far beyond normal commitment." },
      { keyword: "uncritical", matchTerms: ["uncritical", "blind", "unquestioning", "unreasoning", "rigid", "inflexible", "dogmatic", "close-minded", "absolute", "unwavering", "unthinking", "irrational"], label: "Uncritical belief", hint: "The definition says 'uncritical devotion' — reason and doubt have been switched off." },
    ],
    synonyms: ["zealous", "obsessive", "fervent", "extreme", "radical"],
  },
  {
    word: "fastidious",
    partOfSpeech: "adjective",
    definition: "Very attentive to accuracy and detail; hard to please due to high standards.",
    keyConcepts: [
      { keyword: "attentive to accuracy and detail", matchTerms: ["attentive", "detail", "precise", "meticulous", "careful", "thorough", "exacting", "particular", "fussy", "scrupulous", "demanding", "perfectionist"], label: "Attentive to accuracy and detail", hint: "The definition says 'attentive to accuracy and detail' — nothing escapes notice." },
      { keyword: "high standards", matchTerms: ["high standards", "hard to please", "discerning", "selective", "demanding", "exacting", "fussy", "critical", "discriminating", "picky", "difficult", "choosy"], label: "Hard to please", hint: "The definition says 'hard to please due to high standards' — ordinary quality won't satisfy." },
    ],
    synonyms: ["meticulous", "precise", "exacting", "fussy", "discriminating"],
  },
  {
    word: "fatuous",
    partOfSpeech: "adjective",
    definition: "Foolish or silly in a smug or pointlessly self-satisfied way.",
    keyConcepts: [
      { keyword: "foolish", matchTerms: ["foolish", "silly", "stupid", "inane", "witless", "mindless", "vacuous", "empty", "absurd", "senseless", "ridiculous", "asinine"], label: "Foolish", hint: "The definition says 'foolish or silly' — lacking genuine intelligence or substance." },
      { keyword: "smug", matchTerms: ["smug", "self-satisfied", "complacent", "pompous", "self-important", "conceited", "vain", "arrogant", "oblivious", "blissful", "satisfied", "contented"], label: "Smugly self-satisfied", hint: "The definition says 'smug or pointlessly self-satisfied' — the foolishness comes with unearned confidence." },
    ],
    synonyms: ["inane", "vapid", "vacuous", "smug", "foolish"],
  },
  {
    word: "feasible",
    partOfSpeech: "adjective",
    definition: "Possible to achieve or accomplish; likely to work in practice.",
    keyConcepts: [
      { keyword: "possible", matchTerms: ["possible", "achievable", "workable", "viable", "realistic", "practicable", "manageable", "attainable", "doable", "plausible", "reasonable", "sensible"], label: "Possible to achieve", hint: "The definition says 'possible to achieve or accomplish' — not just theoretical but actually doable." },
    ],
    synonyms: ["possible", "viable", "workable", "practicable", "achievable"],
  },
  {
    word: "felicitous",
    partOfSpeech: "adjective",
    definition: "Well-suited to the occasion; pleasing and aptly chosen.",
    keyConcepts: [
      { keyword: "well-suited", matchTerms: ["well-suited", "apt", "appropriate", "fitting", "perfect", "ideal", "suitable", "timely", "pertinent", "relevant", "happy", "fortunate"], label: "Well-suited", hint: "The definition says 'well-suited to the occasion' — it fits exactly right." },
      { keyword: "pleasing", matchTerms: ["pleasing", "delightful", "charming", "agreeable", "satisfying", "elegant", "graceful", "apt", "inspired", "excellent", "successful", "effective"], label: "Pleasing and apt", hint: "The definition says 'pleasing and aptly chosen' — not just correct but enjoyable in its correctness." },
    ],
    synonyms: ["apt", "fitting", "appropriate", "inspired", "well-chosen"],
  },
  {
    word: "finesse",
    partOfSpeech: "noun",
    definition: "Skill and delicacy in handling a difficult situation; subtle and refined technique.",
    keyConcepts: [
      { keyword: "skill", matchTerms: ["skill", "delicacy", "subtlety", "refinement", "technique", "artistry", "tact", "dexterity", "mastery", "craft", "elegance", "grace"], label: "Skill and delicacy", hint: "The definition says 'skill and delicacy' — not brute force but careful, precise handling." },
      { keyword: "difficult situation", matchTerms: ["difficult situation", "challenge", "problem", "obstacle", "complexity", "sensitivity", "nuance", "complication", "predicament", "negotiation", "conflict", "task"], label: "In a difficult situation", hint: "The definition says 'handling a difficult situation' — finesse matters most under pressure." },
    ],
    synonyms: ["skill", "delicacy", "tact", "subtlety", "artistry"],
  },
  {
    word: "florid",
    partOfSpeech: "adjective",
    definition: "Elaborately ornate in style or color; excessively showy or flowery in language.",
    keyConcepts: [
      { keyword: "ornate", matchTerms: ["ornate", "elaborate", "decorative", "showy", "flowery", "baroque", "overwrought", "embellished", "fancy", "busy", "extravagant", "flamboyant"], label: "Elaborately ornate", hint: "The definition says 'elaborately ornate' — decorated to an excessive degree." },
      { keyword: "excessively showy", matchTerms: ["excessively showy", "overdone", "flamboyant", "ostentatious", "gaudy", "pompous", "pretentious", "affected", "overwrought", "verbose", "bombastic", "grandiose"], label: "Excessively showy", hint: "The definition says 'excessively showy or flowery' — it has gone too far." },
    ],
    synonyms: ["ornate", "flowery", "baroque", "elaborate", "flamboyant"],
  },
  {
    word: "foreshadow",
    partOfSpeech: "verb",
    definition: "To be a warning or indication of something that will happen in the future.",
    keyConcepts: [
      { keyword: "warning", matchTerms: ["warning", "indication", "sign", "signal", "portent", "omen", "hint", "presage", "foretell", "anticipate", "predict", "suggest"], label: "A warning or indication", hint: "The definition says 'warning or indication' — it points forward to what's coming." },
      { keyword: "future", matchTerms: ["future", "upcoming", "later", "subsequent", "coming", "eventual", "ahead", "forthcoming", "impending", "approaching", "pending", "next"], label: "Of the future", hint: "The definition says 'will happen in the future' — the foreshadowing precedes the event." },
    ],
    synonyms: ["presage", "portend", "prefigure", "herald", "suggest"],
  },
  {
    word: "frenetic",
    partOfSpeech: "adjective",
    definition: "Fast, energetic, and frantic; characterized by wild activity or excitement.",
    keyConcepts: [
      { keyword: "frantic", matchTerms: ["frantic", "frenzied", "wild", "hectic", "chaotic", "manic", "intense", "furious", "fierce", "turbulent", "breathless", "disordered"], label: "Frantic and wild", hint: "The definition says 'frantic' — energy with an edge of disorder or urgency." },
      { keyword: "fast", matchTerms: ["fast", "energetic", "rapid", "vigorous", "intense", "active", "busy", "rushing", "speeding", "urgent", "restless", "driven"], label: "Fast and energetic", hint: "The definition says 'fast, energetic' — movement and activity at high speed." },
    ],
    synonyms: ["frenzied", "hectic", "frantic", "manic", "wild"],
  },
  {
    word: "frugal",
    partOfSpeech: "adjective",
    definition: "Sparing in the use of resources; careful not to waste money or food.",
    keyConcepts: [
      { keyword: "sparing", matchTerms: ["sparing", "economical", "thrifty", "careful", "conservative", "restrained", "moderate", "prudent", "saving", "measured", "judicious", "minimal"], label: "Sparing with resources", hint: "The definition says 'sparing in the use of resources' — using only what is needed." },
      { keyword: "waste", matchTerms: ["waste", "squander", "excessive", "extravagant", "lavish", "spend", "use up", "exhaust", "deplete", "dissipate", "indulge", "overconsume"], label: "Careful not to waste", hint: "The definition says 'careful not to waste' — the defining concern is avoiding excess." },
    ],
    synonyms: ["thrifty", "economical", "sparing", "abstemious", "parsimonious"],
  },
  {
    word: "furtive",
    partOfSpeech: "adjective",
    definition: "Done in a quick and secretive way to avoid notice; sly and stealthy.",
    keyConcepts: [
      { keyword: "secretive", matchTerms: ["secretive", "stealthy", "covert", "sly", "sneaky", "clandestine", "hidden", "concealed", "undercover", "discreet", "quiet", "unobtrusive"], label: "Secretive", hint: "The definition says 'secretive way to avoid notice' — intentionally staying hidden." },
      { keyword: "avoid notice", matchTerms: ["avoid notice", "undetected", "unseen", "under the radar", "inconspicuous", "discreet", "elude", "escape", "hidden", "shadowy", "guarded", "surreptitious"], label: "To avoid notice", hint: "The definition says 'to avoid notice' — the secrecy has a specific purpose." },
    ],
    synonyms: ["stealthy", "secretive", "sly", "clandestine", "surreptitious"],
  },
  {
    word: "futile",
    partOfSpeech: "adjective",
    definition: "Incapable of producing any useful result; pointless and without effect.",
    keyConcepts: [
      { keyword: "any useful result", matchTerms: ["no result", "pointless", "ineffective", "useless", "unproductive", "vain", "fruitless", "wasted", "hopeless", "unsuccessful", "empty", "in vain"], label: "No useful result", hint: "The definition says 'incapable of producing any useful result' — effort with no payoff." },
    ],
    synonyms: ["pointless", "fruitless", "useless", "vain", "ineffectual"],
  },
  {
    word: "gauche",
    partOfSpeech: "adjective",
    definition: "Lacking social grace or tact; awkward in a way that causes embarrassment.",
    keyConcepts: [
      { keyword: "lacking social grace", matchTerms: ["lacking social grace", "tactless", "awkward", "clumsy", "inept", "insensitive", "crude", "blundering", "unsophisticated", "embarrassing", "unpolished", "ungainly"], label: "Lacking social grace", hint: "The definition says 'lacking social grace or tact' — not knowing how to behave." },
      { keyword: "embarrassment", matchTerms: ["embarrassment", "awkward", "uncomfortable", "cringe", "inappropriate", "offensive", "out of place", "clumsy", "unfortunate", "regrettable", "tactless", "indiscreet"], label: "Causing embarrassment", hint: "The definition says 'causes embarrassment' — the awkwardness has a social cost." },
    ],
    synonyms: ["tactless", "awkward", "clumsy", "inept", "unsophisticated"],
  },
  {
    word: "germane",
    partOfSpeech: "adjective",
    definition: "Relevant and appropriate to the matter being discussed; pertinent.",
    keyConcepts: [
      { keyword: "relevant", matchTerms: ["relevant", "pertinent", "applicable", "appropriate", "related", "connected", "fitting", "apt", "on point", "material", "on topic", "useful"], label: "Relevant", hint: "The definition says 'relevant and appropriate' — it fits the discussion at hand." },
    ],
    synonyms: ["relevant", "pertinent", "applicable", "fitting", "apt"],
  },
  {
    word: "glib",
    partOfSpeech: "adjective",
    definition: "Speaking fluently but without sincerity or depth; superficially plausible.",
    keyConcepts: [
      { keyword: "without sincerity", matchTerms: ["without sincerity", "superficial", "shallow", "insincere", "hollow", "facile", "empty", "pat", "smooth", "slick", "flippant", "offhand"], label: "Without sincerity", hint: "The definition says 'without sincerity or depth' — the words flow easily but mean little." },
      { keyword: "fluently", matchTerms: ["fluently", "smooth", "easy", "ready", "quick", "facile", "effortless", "confident", "articulate", "ready-made", "well-rehearsed", "polished"], label: "Speaking fluently", hint: "The definition says 'speaking fluently' — the delivery is easy, which is part of the deception." },
    ],
    synonyms: ["facile", "superficial", "slick", "shallow", "insincere"],
  },
  {
    word: "gregarious",
    partOfSpeech: "adjective",
    definition: "Fond of company and social interaction; enjoying the company of others.",
    keyConcepts: [
      { keyword: "fond of company", matchTerms: ["fond of company", "sociable", "outgoing", "social", "extroverted", "friendly", "convivial", "affable", "approachable", "warm", "engaging", "people-oriented"], label: "Fond of company", hint: "The definition says 'fond of company and social interaction' — genuinely enjoying being with others." },
    ],
    synonyms: ["sociable", "outgoing", "extroverted", "convivial", "social"],
  },
  {
    word: "hackneyed",
    partOfSpeech: "adjective",
    definition: "Overused to the point of losing meaning or impact; lacking freshness or originality.",
    keyConcepts: [
      { keyword: "overused", matchTerms: ["overused", "clichéd", "trite", "stale", "tired", "worn-out", "commonplace", "banal", "formulaic", "predictable", "stock", "unoriginal"], label: "Overused", hint: "The definition says 'overused to the point of' — repetition has drained it of value." },
      { keyword: "losing meaning", matchTerms: ["losing meaning", "impact", "power", "force", "effect", "significance", "resonance", "freshness", "originality", "substance", "depth", "value"], label: "Losing meaning", hint: "The definition says 'losing meaning or impact' — it once meant something but no longer does." },
    ],
    synonyms: ["trite", "clichéd", "stale", "overused", "banal"],
  },
  {
    word: "harangue",
    partOfSpeech: "noun",
    definition: "A lengthy and aggressive speech criticizing or urging someone forcefully.",
    keyConcepts: [
      { keyword: "aggressive speech", matchTerms: ["aggressive", "forceful", "tirade", "rant", "lecture", "rebuke", "denunciation", "diatribe", "attack", "blast", "broadside", "invective"], label: "Aggressive speech", hint: "The definition says 'aggressive speech' — not just strong words but combative delivery." },
      { keyword: "lengthy", matchTerms: ["lengthy", "long", "extended", "prolonged", "drawn-out", "sustained", "persistent", "continuous", "ongoing", "relentless", "exhausting", "protracted"], label: "Lengthy", hint: "The definition says 'lengthy' — a harangue goes on, hammering the point repeatedly." },
    ],
    synonyms: ["tirade", "rant", "lecture", "diatribe", "invective"],
  },
  {
    word: "hegemony",
    partOfSpeech: "noun",
    definition: "Leadership or dominance of one group over others, especially in political or cultural terms.",
    keyConcepts: [
      { keyword: "dominance", matchTerms: ["dominance", "leadership", "control", "authority", "supremacy", "influence", "power", "ascendancy", "sway", "mastery", "rule", "command"], label: "Dominance", hint: "The definition says 'leadership or dominance' — one party is clearly on top." },
      { keyword: "one group over others", matchTerms: ["group", "nation", "state", "class", "power", "bloc", "culture", "institution", "over others", "superiority", "hierarchy", "domination"], label: "One group over others", hint: "The definition says 'one group over others' — the relationship is unequal." },
    ],
    synonyms: ["dominance", "supremacy", "leadership", "authority", "ascendancy"],
  },
  {
    word: "heterogeneous",
    partOfSpeech: "adjective",
    definition: "Made up of different kinds of elements; diverse and varied in composition.",
    keyConcepts: [
      { keyword: "different kinds", matchTerms: ["different kinds", "diverse", "varied", "mixed", "assorted", "disparate", "unlike", "dissimilar", "miscellaneous", "multifarious", "eclectic", "various"], label: "Different kinds", hint: "The definition says 'different kinds of elements' — diversity is the defining quality." },
    ],
    synonyms: ["diverse", "varied", "mixed", "disparate", "assorted"],
  },
  {
    word: "homogeneous",
    partOfSpeech: "adjective",
    definition: "Made up of the same kind of elements; uniform and consistent throughout.",
    keyConcepts: [
      { keyword: "same kind", matchTerms: ["same kind", "uniform", "consistent", "identical", "alike", "similar", "undifferentiated", "standardized", "regular", "unvaried", "equal", "matching"], label: "Same kind", hint: "The definition says 'same kind of elements' — uniformity is the defining quality." },
      { keyword: "throughout", matchTerms: ["throughout", "entirely", "wholly", "across", "all through", "completely", "totally", "uniformly", "consistently", "everywhere", "without variation"], label: "Uniform throughout", hint: "The definition says 'uniform and consistent throughout' — no variation from any angle." },
    ],
    synonyms: ["uniform", "consistent", "identical", "standardized", "undifferentiated"],
  },
  {
    word: "iconoclast",
    partOfSpeech: "noun",
    definition: "A person who attacks or challenges established beliefs, traditions, or institutions.",
    keyConcepts: [
      { keyword: "attacks", matchTerms: ["attacks", "challenges", "opposes", "questions", "rejects", "undermines", "criticizes", "defies", "subverts", "disrupts", "rebels against", "confronts"], label: "Attacks or challenges", hint: "The definition says 'attacks or challenges' — active opposition, not just skepticism." },
      { keyword: "established beliefs", matchTerms: ["established beliefs", "traditions", "institutions", "orthodoxy", "convention", "norms", "dogma", "status quo", "accepted wisdom", "sacred cows", "authority", "customs"], label: "Established beliefs", hint: "The definition says 'established beliefs, traditions, or institutions' — the targets are things others revere." },
    ],
    synonyms: ["rebel", "dissenter", "nonconformist", "heretic", "radical"],
  },
  {
    word: "idiosyncrasy",
    partOfSpeech: "noun",
    definition: "A distinctive characteristic or habit that is peculiar to an individual.",
    keyConcepts: [
      { keyword: "distinctive", matchTerms: ["distinctive", "peculiar", "characteristic", "unique", "individual", "personal", "specific", "particular", "singular", "unusual", "uncommon", "trademark"], label: "Distinctive characteristic", hint: "The definition says 'distinctive characteristic' — it stands out as unique to that person." },
      { keyword: "individual", matchTerms: ["individual", "person", "particular", "one's own", "personal", "private", "unique", "specific", "someone", "unique to", "characteristic of", "belonging to"], label: "Peculiar to an individual", hint: "The definition says 'peculiar to an individual' — it identifies that one person." },
    ],
    synonyms: ["quirk", "mannerism", "eccentricity", "peculiarity", "trait"],
  },
  {
    word: "incongruous",
    partOfSpeech: "adjective",
    definition: "Not fitting or in harmony with the surrounding environment; out of place.",
    keyConcepts: [
      { keyword: "not fitting", matchTerms: ["not fitting", "out of place", "inappropriate", "inconsistent", "incompatible", "mismatched", "jarring", "discordant", "unsuitable", "inharmonious", "clashing", "alien"], label: "Not fitting", hint: "The definition says 'not fitting' — there is a mismatch between thing and context." },
      { keyword: "surrounding environment", matchTerms: ["environment", "context", "setting", "surroundings", "situation", "background", "place", "location", "atmosphere", "circumstances", "conditions", "backdrop"], label: "With surroundings", hint: "The definition says 'surrounding environment' — what matters is how it relates to its context." },
    ],
    synonyms: ["inappropriate", "inconsistent", "out of place", "incompatible", "mismatched"],
  },
  {
    word: "inconsequential",
    partOfSpeech: "adjective",
    definition: "Not important or significant; too small or trivial to matter.",
    keyConcepts: [
      { keyword: "not important", matchTerms: ["not important", "insignificant", "trivial", "minor", "negligible", "trifling", "immaterial", "irrelevant", "meaningless", "petty", "unimportant", "small"], label: "Not important", hint: "The definition says 'not important or significant' — it registers no real weight." },
    ],
    synonyms: ["insignificant", "trivial", "minor", "negligible", "trifling"],
  },
  {
    word: "indolent",
    partOfSpeech: "adjective",
    definition: "Disinclined to work or exert effort; habitually lazy.",
    keyConcepts: [
      { keyword: "disinclined to work", matchTerms: ["disinclined", "lazy", "idle", "slothful", "lethargic", "inactive", "sluggish", "inert", "apathetic", "unmotivated", "listless", "passive"], label: "Disinclined to work", hint: "The definition says 'disinclined to work' — an aversion to effort." },
    ],
    synonyms: ["lazy", "idle", "slothful", "sluggish", "inert"],
  },
  {
    word: "infallible",
    partOfSpeech: "adjective",
    definition: "Incapable of making errors; never wrong or failing.",
    keyConcepts: [
      { keyword: "incapable of making errors", matchTerms: ["incapable of errors", "never wrong", "perfect", "flawless", "unerring", "reliable", "certain", "dependable", "accurate", "faultless", "trustworthy", "unfailing"], label: "Incapable of making errors", hint: "The definition says 'incapable of making errors' — no mistakes are possible." },
    ],
    synonyms: ["perfect", "unerring", "flawless", "certain", "reliable"],
  },
  {
    word: "ingenuous",
    partOfSpeech: "adjective",
    definition: "Innocent and unsuspecting; sincere and candid without hidden motives.",
    keyConcepts: [
      { keyword: "innocent", matchTerms: ["innocent", "sincere", "candid", "guileless", "naive", "artless", "honest", "open", "genuine", "straightforward", "unpretentious", "direct"], label: "Innocent and sincere", hint: "The definition says 'innocent and unsuspecting' — pure in motive and perception." },
      { keyword: "without hidden motives", matchTerms: ["without hidden motives", "transparent", "honest", "genuine", "candid", "open", "frank", "truthful", "above board", "straightforward", "uncalculating", "artless"], label: "Without hidden motives", hint: "The definition says 'without hidden motives' — what you see is genuinely what is there." },
    ],
    synonyms: ["naive", "sincere", "artless", "candid", "guileless"],
  },
  {
    word: "ingrained",
    partOfSpeech: "adjective",
    definition: "Firmly established as a habit or belief; deeply rooted in someone's character.",
    keyConcepts: [
      { keyword: "firmly established", matchTerms: ["firmly established", "deeply rooted", "entrenched", "fixed", "embedded", "set", "habitual", "deep-seated", "persistent", "lasting", "abiding", "permanent"], label: "Firmly established", hint: "The definition says 'firmly established' — it has taken hold and won't easily shift." },
      { keyword: "habit or belief", matchTerms: ["habit", "belief", "attitude", "value", "pattern", "behavior", "character", "nature", "instinct", "disposition", "tendency", "conviction"], label: "As habit or belief", hint: "The definition says 'as a habit or belief' — something behavioral or mental, not physical." },
    ],
    synonyms: ["entrenched", "deep-seated", "rooted", "habitual", "fixed"],
  },
  {
    word: "inherent",
    partOfSpeech: "adjective",
    definition: "Existing as a permanent and essential feature of something; built-in by nature.",
    keyConcepts: [
      { keyword: "permanent", matchTerms: ["permanent", "essential", "intrinsic", "natural", "innate", "built-in", "fundamental", "basic", "core", "native", "inseparable", "constitutive"], label: "Permanent feature", hint: "The definition says 'permanent and essential feature' — it cannot be removed without changing the thing itself." },
    ],
    synonyms: ["intrinsic", "innate", "essential", "fundamental", "native"],
  },
  {
    word: "inimical",
    partOfSpeech: "adjective",
    definition: "Hostile or harmful in effect; tending to obstruct or damage.",
    keyConcepts: [
      { keyword: "hostile", matchTerms: ["hostile", "harmful", "damaging", "adverse", "threatening", "antagonistic", "unfriendly", "destructive", "detrimental", "injurious", "oppositional", "contrary"], label: "Hostile", hint: "The definition says 'hostile or harmful' — it is working against something." },
      { keyword: "obstruct", matchTerms: ["obstruct", "damage", "harm", "hinder", "impede", "undermine", "thwart", "block", "prevent", "sabotage", "oppose", "work against"], label: "Tends to obstruct", hint: "The definition says 'tending to obstruct or damage' — the harm is directional, aimed at something specific." },
    ],
    synonyms: ["hostile", "harmful", "adverse", "antagonistic", "detrimental"],
  },
  {
    word: "iniquity",
    partOfSpeech: "noun",
    definition: "Grossly unfair or immoral behavior; great wickedness or injustice.",
    keyConcepts: [
      { keyword: "immoral behavior", matchTerms: ["immoral", "wickedness", "evil", "sin", "wrongdoing", "depravity", "corruption", "vice", "transgression", "injustice", "misconduct", "villainy"], label: "Immoral behavior", hint: "The definition says 'immoral behavior' — deliberate wrongdoing." },
      { keyword: "grossly unfair", matchTerms: ["grossly unfair", "unjust", "inequitable", "wrong", "egregious", "outrageous", "offensive", "abominable", "heinous", "flagrant", "extreme", "severe"], label: "Grossly unfair", hint: "The definition says 'grossly unfair' — not merely unfair but deeply, obviously so." },
    ],
    synonyms: ["wickedness", "injustice", "evil", "sin", "wrongdoing"],
  },
  {
    word: "insinuate",
    partOfSpeech: "verb",
    definition: "To suggest or hint at something unpleasant indirectly; to imply without stating directly.",
    keyConcepts: [
      { keyword: "suggest or hint", matchTerms: ["suggest", "hint", "imply", "infer", "intimate", "indicate", "allude", "signal", "convey", "whisper", "plant", "insinuate"], label: "Suggest or hint", hint: "The definition says 'suggest or hint indirectly' — the message is sent without being stated." },
      { keyword: "unpleasant", matchTerms: ["unpleasant", "negative", "critical", "damaging", "accusatory", "offensive", "disparaging", "derogatory", "undermining", "suspicious", "malicious", "sinister"], label: "Something unpleasant", hint: "The definition says 'something unpleasant' — what is being insinuated is usually negative." },
    ],
    synonyms: ["hint", "imply", "intimate", "suggest", "allude"],
  },
  {
    word: "insular",
    partOfSpeech: "adjective",
    definition: "Ignorant of or uninterested in cultures or ideas beyond one's own narrow experience.",
    keyConcepts: [
      { keyword: "narrow experience", matchTerms: ["narrow", "limited", "parochial", "provincial", "small-minded", "confined", "restricted", "isolated", "closed", "sheltered", "inward-looking", "myopic"], label: "Narrow experience", hint: "The definition says 'narrow experience' — the world seen through a very small window." },
      { keyword: "uninterested in", matchTerms: ["uninterested", "ignorant", "indifferent", "dismissive", "closed-minded", "incurious", "hostile", "resistant", "unreceptive", "intolerant", "insular", "blinkered"], label: "Uninterested in others", hint: "The definition says 'ignorant of or uninterested in' — both lacking knowledge and lacking the desire to know." },
    ],
    synonyms: ["parochial", "provincial", "narrow-minded", "isolated", "inward-looking"],
  },
  {
    word: "intransigent",
    partOfSpeech: "adjective",
    definition: "Refusing to agree or compromise; uncompromisingly rigid in one's position.",
    keyConcepts: [
      { keyword: "refusing to agree or compromise", matchTerms: ["refusing to compromise", "unyielding", "inflexible", "rigid", "stubborn", "obstinate", "uncompromising", "hardline", "immovable", "steadfast", "firm", "entrenched"], label: "Refusing to agree or compromise", hint: "The definition says 'refusing to agree or compromise' — no middle ground will be found." },
    ],
    synonyms: ["unyielding", "inflexible", "rigid", "stubborn", "uncompromising"],
  },
  {
    word: "intrinsic",
    partOfSpeech: "adjective",
    definition: "Belonging naturally and essentially to something; inherent to its very nature.",
    keyConcepts: [
      { keyword: "naturally", matchTerms: ["naturally", "essentially", "inherently", "fundamentally", "innately", "built-in", "constitutionally", "by nature", "inseparably", "organically", "internally", "necessarily"], label: "Naturally belonging", hint: "The definition says 'belonging naturally' — no external force put it there." },
      { keyword: "very nature", matchTerms: ["nature", "essence", "core", "substance", "identity", "character", "being", "makeup", "foundation", "heart", "base", "self"], label: "Inherent to its nature", hint: "The definition says 'inherent to its very nature' — you cannot separate it from what the thing is." },
    ],
    synonyms: ["inherent", "essential", "innate", "fundamental", "natural"],
  },
  {
    word: "inundate",
    partOfSpeech: "verb",
    definition: "To overwhelm with a large number or amount; to flood with more than can be handled.",
    keyConcepts: [
      { keyword: "overwhelm", matchTerms: ["overwhelm", "flood", "swamp", "bury", "submerge", "deluge", "drown", "overload", "engulf", "saturate", "overcome", "bury"], label: "To overwhelm", hint: "The definition says 'overwhelm with a large number' — more arrives than can be dealt with." },
      { keyword: "more than can be handled", matchTerms: ["more than can be handled", "excessive", "unmanageable", "too much", "overflowing", "surplus", "beyond capacity", "unbearable", "oppressive", "crushing", "relentless"], label: "More than can be handled", hint: "The definition says 'more than can be handled' — the quantity defeats the recipient's capacity." },
    ],
    synonyms: ["overwhelm", "flood", "swamp", "deluge", "engulf"],
  },
  {
    word: "laconic",
    partOfSpeech: "adjective",
    definition: "Using very few words; brief and concise in speech or expression.",
    keyConcepts: [
      { keyword: "few words", matchTerms: ["few words", "brief", "concise", "terse", "succinct", "short", "clipped", "pithy", "compact", "compressed", "economical", "spare"], label: "Using few words", hint: "The definition says 'using very few words' — maximum meaning with minimum language." },
    ],
    synonyms: ["terse", "concise", "succinct", "brief", "pithy"],
  },
  {
    word: "lavish",
    partOfSpeech: "adjective",
    definition: "Sumptuously rich, elaborate, or luxurious; giving or using more than is necessary.",
    keyConcepts: [
      { keyword: "luxurious", matchTerms: ["luxurious", "opulent", "sumptuous", "extravagant", "elaborate", "rich", "generous", "abundant", "plentiful", "profuse", "liberal", "unstinting"], label: "Luxurious and rich", hint: "The definition says 'sumptuously rich, elaborate, or luxurious' — exceeding ordinary measure." },
      { keyword: "more than is necessary", matchTerms: ["more than necessary", "excessive", "overabundant", "profuse", "unstinting", "liberal", "overgenerous", "immoderate", "unrestrained", "indulgent", "wasteful", "beyond measure"], label: "More than is necessary", hint: "The definition says 'more than is necessary' — the excess is part of what defines it." },
    ],
    synonyms: ["opulent", "extravagant", "sumptuous", "generous", "abundant"],
  },
  {
    word: "lethargic",
    partOfSpeech: "adjective",
    definition: "Affected by lethargy; sluggish, drowsy, and lacking energy or enthusiasm.",
    keyConcepts: [
      { keyword: "sluggish", matchTerms: ["sluggish", "drowsy", "tired", "exhausted", "listless", "slow", "torpid", "languid", "inert", "apathetic", "dull", "heavy"], label: "Sluggish", hint: "The definition says 'sluggish, drowsy' — moving through life at a reduced pace." },
      { keyword: "lacking energy", matchTerms: ["lacking energy", "without enthusiasm", "unmotivated", "lifeless", "passive", "indolent", "lethargic", "weak", "feeble", "spiritless", "flat", "inert"], label: "Lacking energy", hint: "The definition says 'lacking energy or enthusiasm' — the inner drive has gone quiet." },
    ],
    synonyms: ["sluggish", "drowsy", "listless", "torpid", "languid"],
  },
  {
    word: "livid",
    partOfSpeech: "adjective",
    definition: "Furiously angry; also discolored as if bruised, typically pale or bluish.",
    keyConcepts: [
      { keyword: "furiously angry", matchTerms: ["furiously angry", "enraged", "incensed", "infuriated", "seething", "irate", "outraged", "fuming", "apoplectic", "wrathful", "beside oneself", "extremely angry"], label: "Furiously angry", hint: "The definition says 'furiously angry' — beyond irritation, at the extreme end of anger." },
    ],
    synonyms: ["furious", "enraged", "incensed", "irate", "infuriated"],
  },
  {
    word: "lugubrious",
    partOfSpeech: "adjective",
    definition: "Looking or sounding mournful and dismal, often to an exaggerated degree.",
    keyConcepts: [
      { keyword: "mournful", matchTerms: ["mournful", "dismal", "gloomy", "melancholy", "doleful", "woeful", "sorrowful", "despondent", "funereal", "somber", "plaintive", "dejected"], label: "Mournful and dismal", hint: "The definition says 'mournful and dismal' — expressing deep gloom." },
      { keyword: "exaggerated", matchTerms: ["exaggerated", "overdone", "theatrical", "excessive", "dramatic", "affected", "overwrought", "performed", "deliberately", "too much", "extreme", "over-the-top"], label: "Often exaggerated", hint: "The definition says 'often to an exaggerated degree' — the sadness may be performed or overdone." },
    ],
    synonyms: ["mournful", "gloomy", "doleful", "dismal", "melancholy"],
  },
  {
    word: "magnanimous",
    partOfSpeech: "adjective",
    definition: "Generously forgiving or tolerant, especially toward a defeated rival or enemy.",
    keyConcepts: [
      { keyword: "generously forgiving", matchTerms: ["forgiving", "generous", "tolerant", "gracious", "noble", "charitable", "big-hearted", "benevolent", "kind", "lenient", "understanding", "merciful"], label: "Generously forgiving", hint: "The definition says 'generously forgiving or tolerant' — giving more grace than required." },
      { keyword: "defeated rival", matchTerms: ["defeated rival", "enemy", "opponent", "adversary", "loser", "vanquished", "challenger", "competitor", "foe", "someone weaker", "those who wronged", "former enemy"], label: "Toward a defeated rival", hint: "The definition says 'especially toward a defeated rival or enemy' — magnanimity most counts in victory." },
    ],
    synonyms: ["generous", "gracious", "forgiving", "noble", "charitable"],
  },
  {
    word: "malleable",
    partOfSpeech: "adjective",
    definition: "Able to be shaped or influenced; easily changed or adapted.",
    keyConcepts: [
      { keyword: "shaped", matchTerms: ["shaped", "molded", "formed", "bent", "altered", "changed", "adapted", "modified", "transformed", "influenced", "manipulated", "guided"], label: "Able to be shaped", hint: "The definition says 'able to be shaped' — it yields to external force." },
      { keyword: "influenced", matchTerms: ["influenced", "persuaded", "directed", "swayed", "guided", "steered", "moved", "convinced", "changed", "receptive", "responsive", "open"], label: "Easily influenced", hint: "The definition says 'easily changed or adapted' — it doesn't resist modification." },
    ],
    synonyms: ["pliable", "flexible", "adaptable", "pliant", "yielding"],
  },
  {
    word: "maudlin",
    partOfSpeech: "adjective",
    definition: "Weakly sentimental in a self-pitying or tearful way; excessively emotional.",
    keyConcepts: [
      { keyword: "sentimental", matchTerms: ["sentimental", "emotional", "tearful", "weepy", "gushing", "soppy", "mushy", "saccharine", "bathetic", "overwrought", "saccharine", "cloying"], label: "Weakly sentimental", hint: "The definition says 'weakly sentimental' — the emotion is excessive but lacking real depth." },
      { keyword: "self-pitying", matchTerms: ["self-pitying", "self-indulgent", "pathetic", "whiny", "plaintive", "pitiful", "sorry for oneself", "indulgent", "moaning", "lamenting", "wallowing", "dramatic"], label: "Self-pitying", hint: "The definition says 'self-pitying or tearful way' — the emotion is turned inward, wallowing." },
    ],
    synonyms: ["sentimental", "tearful", "weepy", "soppy", "lachrymose"],
  },
  {
    word: "metaphysical",
    partOfSpeech: "adjective",
    definition: "Relating to abstract ideas about the nature of existence, reality, and being.",
    keyConcepts: [
      { keyword: "abstract ideas", matchTerms: ["abstract", "philosophical", "theoretical", "speculative", "conceptual", "intangible", "immaterial", "transcendent", "beyond physical", "intellectual", "non-empirical", "hypothetical"], label: "Abstract ideas", hint: "The definition says 'abstract ideas' — not grounded in material reality." },
      { keyword: "existence", matchTerms: ["existence", "reality", "being", "nature", "essence", "consciousness", "universe", "fundamental", "substance", "truth", "ultimate", "first principles"], label: "About existence", hint: "The definition says 'nature of existence, reality, and being' — the deepest possible questions." },
    ],
    synonyms: ["philosophical", "abstract", "transcendent", "theoretical", "spiritual"],
  },
  {
    word: "meticulous",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; extremely careful and precise.",
    keyConcepts: [
      { keyword: "great attention to detail", matchTerms: ["attention to detail", "careful", "precise", "thorough", "exact", "painstaking", "scrupulous", "fastidious", "methodical", "rigorous", "accurate", "conscientious"], label: "Great attention to detail", hint: "The definition says 'great attention to detail' — nothing small is overlooked." },
    ],
    synonyms: ["precise", "careful", "thorough", "painstaking", "scrupulous"],
  },
  {
    word: "modicum",
    partOfSpeech: "noun",
    definition: "A small quantity of something, especially something desirable or necessary.",
    keyConcepts: [
      { keyword: "small quantity", matchTerms: ["small quantity", "little", "bit", "trace", "touch", "grain", "ounce", "shred", "hint", "amount", "measure", "degree"], label: "Small quantity", hint: "The definition says 'a small quantity' — not much, just enough to mention." },
      { keyword: "desirable or necessary", matchTerms: ["desirable", "necessary", "needed", "wanted", "valuable", "important", "useful", "scarce", "worthwhile", "precious", "limited", "rare"], label: "Of something desirable", hint: "The definition says 'especially something desirable or necessary' — the smallness matters more when the thing is valued." },
    ],
    synonyms: ["bit", "trace", "touch", "amount", "measure"],
  },
  {
    word: "morose",
    partOfSpeech: "adjective",
    definition: "Sullen, ill-tempered, and gloomy; silently bad-humored.",
    keyConcepts: [
      { keyword: "sullen", matchTerms: ["sullen", "gloomy", "glum", "dour", "surly", "brooding", "somber", "melancholy", "despondent", "somber", "dark", "withdrawn"], label: "Sullen and gloomy", hint: "The definition says 'sullen, ill-tempered, and gloomy' — a combination of bad mood and quiet withdrawal." },
    ],
    synonyms: ["sullen", "gloomy", "glum", "dour", "brooding"],
  },
  {
    word: "myopic",
    partOfSpeech: "adjective",
    definition: "Lacking foresight or long-term thinking; concerned only with immediate issues.",
    keyConcepts: [
      { keyword: "lacking foresight", matchTerms: ["lacking foresight", "short-sighted", "narrow", "limited", "blinkered", "near-sighted", "unable to see ahead", "unconcerned with future", "tunnel vision", "present-focused", "immediate", "shortsighted"], label: "Lacking foresight", hint: "The definition says 'lacking foresight' — unable or unwilling to think ahead." },
      { keyword: "immediate issues", matchTerms: ["immediate", "short-term", "present", "current", "now", "today", "near-term", "close-up", "visible", "obvious", "urgent", "pressing"], label: "Focused on immediate issues", hint: "The definition says 'concerned only with immediate issues' — the horizon is very close." },
    ],
    synonyms: ["shortsighted", "narrow", "blinkered", "limited", "near-sighted"],
  },
  {
    word: "nascent",
    partOfSpeech: "adjective",
    definition: "Just coming into existence and beginning to develop; emerging in its early stages.",
    keyConcepts: [
      { keyword: "coming into existence", matchTerms: ["coming into existence", "emerging", "developing", "forming", "growing", "evolving", "arising", "beginning", "incipient", "budding", "fledgling", "new"], label: "Coming into existence", hint: "The definition says 'just coming into existence' — it has barely appeared." },
      { keyword: "early stages", matchTerms: ["early stages", "beginning", "infancy", "dawn", "start", "birth", "initial", "formative", "embryonic", "rudimentary", "primitive", "foundational"], label: "In early stages", hint: "The definition says 'beginning to develop' — it is young and not yet fully formed." },
    ],
    synonyms: ["emerging", "developing", "incipient", "budding", "embryonic"],
  },
  {
    word: "notoriety",
    partOfSpeech: "noun",
    definition: "The state of being famous for a negative reason; infamy.",
    keyConcepts: [
      { keyword: "famous", matchTerms: ["famous", "known", "recognized", "notorious", "prominent", "public", "visible", "celebrated", "talked about", "renowned", "well-known", "infamous"], label: "Famous", hint: "The definition says 'state of being famous' — widely known." },
      { keyword: "negative reason", matchTerms: ["negative", "bad", "disgraceful", "shameful", "scandalous", "criminal", "disreputable", "unflattering", "embarrassing", "problematic", "unsavory", "notorious"], label: "For a negative reason", hint: "The definition says 'negative reason' — the fame is unwanted and unflattering." },
    ],
    synonyms: ["infamy", "disrepute", "ignominy", "ill-fame", "scandal"],
  },
  {
    word: "nuance",
    partOfSpeech: "noun",
    definition: "A subtle difference in meaning, tone, or expression; a delicate distinction.",
    keyConcepts: [
      { keyword: "subtle difference", matchTerms: ["subtle", "difference", "distinction", "variation", "shade", "degree", "gradation", "refinement", "complexity", "depth", "delicacy", "precision"], label: "Subtle difference", hint: "The definition says 'subtle difference' — small but meaningful." },
      { keyword: "meaning, tone", matchTerms: ["meaning", "tone", "expression", "interpretation", "connotation", "implication", "color", "mood", "character", "quality", "feeling", "sense"], label: "Meaning, tone", hint: "The definition says 'in meaning, tone, or expression' — nuance lives in the way things are communicated." },
    ],
    synonyms: ["subtlety", "distinction", "gradation", "shade", "refinement"],
  },
  {
    word: "obdurate",
    partOfSpeech: "adjective",
    definition: "Stubbornly refusing to change one's position; hardened against moral persuasion.",
    keyConcepts: [
      { keyword: "stubbornly refusing", matchTerms: ["stubbornly", "refusing", "unyielding", "inflexible", "obstinate", "resistant", "immovable", "unbending", "resolute", "firm", "hardened", "unresponsive"], label: "Stubbornly refusing", hint: "The definition says 'stubbornly refusing to change' — resistance that cannot be moved." },
      { keyword: "moral persuasion", matchTerms: ["moral persuasion", "argument", "plea", "reason", "appeals", "conscience", "feelings", "empathy", "pressure", "advice", "influence", "entreaty"], label: "Against moral persuasion", hint: "The definition says 'hardened against moral persuasion' — unresponsive even to ethical arguments." },
    ],
    synonyms: ["stubborn", "unyielding", "inflexible", "obstinate", "hardened"],
  },
  {
    word: "obsequious",
    partOfSpeech: "adjective",
    definition: "Excessively eager to serve or please; obedient and flattering to an excessive degree.",
    keyConcepts: [
      { keyword: "excessively eager", matchTerms: ["excessively eager", "servile", "groveling", "fawning", "sycophantic", "flattering", "ingratiating", "toadying", "kowtowing", "submissive", "compliant", "unctuous"], label: "Excessively eager", hint: "The definition says 'excessively eager to serve' — the eagerness goes too far." },
      { keyword: "please", matchTerms: ["please", "serve", "flatter", "appease", "satisfy", "accommodate", "defer to", "comply with", "indulge", "court", "win favor", "ingratiate"], label: "To serve or please", hint: "The definition says 'serve or please' — the focus is always on the other person's satisfaction." },
    ],
    synonyms: ["servile", "fawning", "sycophantic", "subservient", "unctuous"],
  },
  {
    word: "obsolete",
    partOfSpeech: "adjective",
    definition: "No longer in use or production; outdated and replaced by something newer.",
    keyConcepts: [
      { keyword: "no longer in use", matchTerms: ["no longer in use", "outdated", "disused", "discontinued", "superseded", "retired", "abandoned", "extinct", "phased out", "archaic", "antiquated", "past"], label: "No longer in use", hint: "The definition says 'no longer in use' — it has been set aside." },
      { keyword: "replaced", matchTerms: ["replaced", "superseded", "updated", "improved upon", "succeeded", "surpassed", "overridden", "new version", "modern alternative", "upgraded", "substituted"], label: "Replaced by newer", hint: "The definition says 'replaced by something newer' — it was set aside for something better." },
    ],
    synonyms: ["outdated", "antiquated", "archaic", "superseded", "outmoded"],
  },
  {
    word: "onerous",
    partOfSpeech: "adjective",
    definition: "Involving a great deal of effort and difficulty; burdensome and oppressive.",
    keyConcepts: [
      { keyword: "burdensome", matchTerms: ["burdensome", "oppressive", "heavy", "demanding", "taxing", "exhausting", "difficult", "hard", "trying", "weighty", "crushing", "onerous"], label: "Burdensome", hint: "The definition says 'burdensome and oppressive' — it weighs on those who bear it." },
      { keyword: "great deal of effort", matchTerms: ["great effort", "difficulty", "exertion", "toil", "labor", "work", "struggle", "strain", "challenge", "hardship", "trouble", "obligation"], label: "Great deal of effort", hint: "The definition says 'involving a great deal of effort and difficulty' — it takes a lot." },
    ],
    synonyms: ["burdensome", "oppressive", "taxing", "demanding", "arduous"],
  },
  {
    word: "opaque",
    partOfSpeech: "adjective",
    definition: "Not transparent; difficult to understand or interpret clearly.",
    keyConcepts: [
      { keyword: "not transparent", matchTerms: ["not transparent", "unclear", "impenetrable", "murky", "obscure", "muddy", "cloudy", "dark", "dense", "cryptic", "inscrutable", "incomprehensible"], label: "Not transparent", hint: "The definition says 'not transparent' — you cannot see through it." },
      { keyword: "difficult to understand", matchTerms: ["difficult to understand", "hard to interpret", "confusing", "ambiguous", "obscure", "complex", "baffling", "unintelligible", "vague", "puzzling", "perplexing", "abstruse"], label: "Difficult to understand", hint: "The definition says 'difficult to understand or interpret' — it resists being made sense of." },
    ],
    synonyms: ["unclear", "impenetrable", "murky", "obscure", "incomprehensible"],
  },
  {
    word: "opprobrium",
    partOfSpeech: "noun",
    definition: "Harsh criticism or public disgrace resulting from shameful conduct.",
    keyConcepts: [
      { keyword: "harsh criticism", matchTerms: ["harsh criticism", "scorn", "censure", "condemnation", "reproach", "rebuke", "denunciation", "disapproval", "contempt", "vilification", "censure", "derision"], label: "Harsh criticism", hint: "The definition says 'harsh criticism' — strong negative judgment, publicly expressed." },
      { keyword: "public disgrace", matchTerms: ["public disgrace", "shame", "dishonor", "infamy", "ignominy", "humiliation", "scandal", "disrepute", "stigma", "loss of reputation", "embarrassment", "obloquy"], label: "Public disgrace", hint: "The definition says 'public disgrace' — the shame is visible to the world." },
    ],
    synonyms: ["disgrace", "censure", "condemnation", "infamy", "ignominy"],
  },
  {
    word: "pariah",
    partOfSpeech: "noun",
    definition: "A person who is rejected or avoided by society; an outcast.",
    keyConcepts: [
      { keyword: "rejected", matchTerms: ["rejected", "excluded", "avoided", "shunned", "ostracized", "cast out", "marginalized", "isolated", "unwanted", "despised", "untouchable", "expelled"], label: "Rejected by society", hint: "The definition says 'rejected or avoided by society' — actively pushed out." },
      { keyword: "outcast", matchTerms: ["outcast", "exile", "leper", "outsider", "untouchable", "misfit", "reject", "unwanted person", "social exile", "persona non grata", "expelled", "marginalized"], label: "An outcast", hint: "The definition says 'an outcast' — someone placed firmly outside the social group." },
    ],
    synonyms: ["outcast", "exile", "untouchable", "reject", "social outcast"],
  },
  {
    word: "partisan",
    partOfSpeech: "adjective",
    definition: "Strongly supporting a particular cause or party in a biased way; one-sided.",
    keyConcepts: [
      { keyword: "strongly supporting", matchTerms: ["strongly supporting", "loyal", "devoted", "committed", "dedicated", "fervent", "zealous", "fanatical", "one-sided", "partial", "prejudiced", "biased"], label: "Strongly supporting", hint: "The definition says 'strongly supporting' — committed beyond neutrality." },
      { keyword: "biased", matchTerms: ["biased", "one-sided", "partial", "prejudiced", "slanted", "unfair", "factional", "sectarian", "tendentious", "interested", "non-objective", "tendentious"], label: "In a biased way", hint: "The definition says 'in a biased way' — the support is not impartial." },
    ],
    synonyms: ["biased", "one-sided", "factional", "sectarian", "partial"],
  },
  {
    word: "paucity",
    partOfSpeech: "noun",
    definition: "The presence of something in only small or insufficient quantities; scarcity.",
    keyConcepts: [
      { keyword: "small or insufficient quantities", matchTerms: ["small quantities", "scarcity", "lack", "shortage", "insufficiency", "dearth", "deficiency", "meagerness", "sparseness", "inadequacy", "fewness", "rarity"], label: "Small or insufficient quantities", hint: "The definition says 'only small or insufficient quantities' — not enough." },
    ],
    synonyms: ["scarcity", "shortage", "dearth", "lack", "deficiency"],
  },
  {
    word: "pedantic",
    partOfSpeech: "adjective",
    definition: "Excessively concerned with minor details and rules, especially in academic matters.",
    keyConcepts: [
      { keyword: "excessively concerned", matchTerms: ["excessively concerned", "obsessed", "preoccupied", "fixated", "overly focused", "nitpicking", "fussy", "finicky", "precise", "strict", "rigid", "dogmatic"], label: "Excessively concerned", hint: "The definition says 'excessively concerned' — the concern goes beyond what's warranted." },
      { keyword: "minor details", matchTerms: ["minor details", "rules", "technicalities", "formalities", "trivialities", "nitpicking", "hair-splitting", "pedantry", "procedure", "correctness", "exactness", "precision"], label: "Minor details and rules", hint: "The definition says 'minor details and rules' — focusing on the small at the expense of the big." },
    ],
    synonyms: ["nitpicking", "overprecise", "fussy", "academic", "meticulous"],
  },
  {
    word: "perfunctory",
    partOfSpeech: "adjective",
    definition: "Carried out with minimal effort and little care; done merely as a routine duty.",
    keyConcepts: [
      { keyword: "minimal effort", matchTerms: ["minimal effort", "cursory", "superficial", "careless", "hasty", "halfhearted", "token", "mechanical", "automatic", "routine", "desultory", "going-through-the-motions"], label: "Minimal effort", hint: "The definition says 'minimal effort and little care' — the work is phoned in." },
      { keyword: "routine duty", matchTerms: ["routine duty", "obligation", "task", "formality", "requirement", "duty", "chore", "habit", "custom", "expectation", "procedure", "protocol"], label: "Routine duty", hint: "The definition says 'merely as a routine duty' — done because it must be, not because it matters." },
    ],
    synonyms: ["cursory", "superficial", "hasty", "halfhearted", "mechanical"],
  },
  {
    word: "permeate",
    partOfSpeech: "verb",
    definition: "To spread throughout something; to penetrate every part of a substance or space.",
    keyConcepts: [
      { keyword: "spread throughout", matchTerms: ["spread throughout", "penetrate", "infuse", "pervade", "saturate", "fill", "suffuse", "flow through", "imbue", "seep into", "diffuse", "percolate"], label: "Spread throughout", hint: "The definition says 'spread throughout' — reaching every corner." },
      { keyword: "every part", matchTerms: ["every part", "all through", "entirely", "completely", "wholly", "throughout", "everywhere", "pervasively", "fully", "totally", "all aspects", "all areas"], label: "Every part", hint: "The definition says 'penetrate every part' — nothing is untouched." },
    ],
    synonyms: ["pervade", "saturate", "infuse", "penetrate", "suffuse"],
  },
  {
    word: "pernicious",
    partOfSpeech: "adjective",
    definition: "Having a harmful effect in a subtle or gradual way; insidiously destructive.",
    keyConcepts: [
      { keyword: "harmful", matchTerms: ["harmful", "destructive", "damaging", "dangerous", "injurious", "deadly", "fatal", "lethal", "ruinous", "toxic", "corrosive", "corrupting"], label: "Harmful effect", hint: "The definition says 'harmful effect' — the outcome is negative." },
      { keyword: "subtle or gradual", matchTerms: ["subtle", "gradual", "insidious", "creeping", "slow", "hidden", "imperceptible", "quiet", "stealthy", "inconspicuous", "unnoticed", "cumulative"], label: "Subtle or gradual", hint: "The definition says 'subtle or gradual way' — the harm builds slowly and isn't immediately obvious." },
    ],
    synonyms: ["harmful", "insidious", "destructive", "damaging", "corrosive"],
  },
  {
    word: "pervasive",
    partOfSpeech: "adjective",
    definition: "Spreading widely throughout an area or group; present everywhere.",
    keyConcepts: [
      { keyword: "spreading widely", matchTerms: ["spreading widely", "present everywhere", "widespread", "ubiquitous", "omnipresent", "all-pervasive", "rife", "prevalent", "diffuse", "extensive", "sweeping", "far-reaching"], label: "Spreading widely", hint: "The definition says 'spreading widely' — the reach is broad and continuing." },
    ],
    synonyms: ["widespread", "ubiquitous", "omnipresent", "prevalent", "extensive"],
  },
  {
    word: "platitude",
    partOfSpeech: "noun",
    definition: "A remark or statement that is overused to the point of being meaningless.",
    keyConcepts: [
      { keyword: "overused", matchTerms: ["overused", "trite", "hackneyed", "clichéd", "stale", "commonplace", "banal", "worn-out", "tired", "stock", "predictable", "formulaic"], label: "Overused", hint: "The definition says 'overused to the point of' — repetition has drained it of impact." },
      { keyword: "meaningless", matchTerms: ["meaningless", "empty", "hollow", "vacuous", "vapid", "shallow", "pointless", "without substance", "trivial", "bland", "unremarkable", "dull"], label: "Meaningless", hint: "The definition says 'being meaningless' — whatever value it once had is now gone." },
    ],
    synonyms: ["cliché", "truism", "banality", "commonplace", "bromide"],
  },
  {
    word: "plausible",
    partOfSpeech: "adjective",
    definition: "Seeming reasonable or probable; appearing to be valid or true on the surface.",
    keyConcepts: [
      { keyword: "seeming reasonable", matchTerms: ["seeming reasonable", "believable", "credible", "convincing", "probable", "likely", "tenable", "defensible", "viable", "logical", "plausible", "persuasive"], label: "Seeming reasonable", hint: "The definition says 'seeming reasonable or probable' — it passes a basic test of credibility." },
      { keyword: "on the surface", matchTerms: ["on the surface", "appearance", "face value", "apparently", "ostensibly", "seemingly", "at first glance", "superficially", "without deep examination", "apparent", "prima facie"], label: "On the surface", hint: "The definition says 'on the surface' — plausibility doesn't guarantee truth, just the appearance of it." },
    ],
    synonyms: ["believable", "credible", "convincing", "probable", "tenable"],
  },
  {
    word: "plethora",
    partOfSpeech: "noun",
    definition: "A large or excessive amount of something; an overabundance.",
    keyConcepts: [
      { keyword: "excessive amount", matchTerms: ["excessive", "overabundance", "surplus", "glut", "surfeit", "excess", "superabundance", "profusion", "wealth", "flood", "oversupply", "too much"], label: "Excessive amount", hint: "The definition says 'large or excessive amount' — more than is needed or wanted." },
    ],
    synonyms: ["abundance", "excess", "surplus", "glut", "overabundance"],
  },
  {
    word: "pragmatic",
    partOfSpeech: "adjective",
    definition: "Dealing with problems in a practical and realistic way rather than theoretically.",
    keyConcepts: [
      { keyword: "practical", matchTerms: ["practical", "realistic", "sensible", "rational", "reasonable", "workable", "functional", "useful", "applied", "results-oriented", "hands-on", "down-to-earth"], label: "Practical", hint: "The definition says 'practical and realistic' — concerned with what actually works." },
      { keyword: "rather than theoretically", matchTerms: ["rather than theoretical", "not ideological", "not abstract", "not idealistic", "not dogmatic", "not principle-based", "not hypothetical", "not rigid", "empirical", "flexible", "adaptive", "contextual"], label: "Not theoretical", hint: "The definition says 'rather than theoretically' — pragmatism bypasses ideology for results." },
    ],
    synonyms: ["practical", "realistic", "sensible", "down-to-earth", "functional"],
  },
  {
    word: "precarious",
    partOfSpeech: "adjective",
    definition: "Not securely held; dependent on uncertain circumstances and likely to fail.",
    keyConcepts: [
      { keyword: "not securely held", matchTerms: ["insecure", "unstable", "unsteady", "shaky", "uncertain", "risky", "dangerous", "unsafe", "fragile", "vulnerable", "tenuous", "unreliable"], label: "Not securely held", hint: "The definition says 'not securely held' — it could give way at any moment." },
      { keyword: "uncertain circumstances", matchTerms: ["uncertain", "circumstances", "chance", "luck", "contingency", "unpredictable", "variable", "precarious", "dependent", "conditional", "whim", "arbitrary"], label: "Uncertain circumstances", hint: "The definition says 'dependent on uncertain circumstances' — stability relies on things that could easily change." },
    ],
    synonyms: ["unstable", "insecure", "uncertain", "risky", "perilous"],
  },
  {
    word: "precursor",
    partOfSpeech: "noun",
    definition: "A thing that comes before and signals or leads to something that follows.",
    keyConcepts: [
      { keyword: "comes before", matchTerms: ["before", "precede", "prior", "earlier", "ahead", "leading", "preliminary", "forerunner", "predecessor", "antecedent", "advance", "herald"], label: "Comes before", hint: "The definition says 'comes before' — it arrives ahead of what it announces." },
      { keyword: "signals", matchTerms: ["signals", "indicates", "announces", "heralds", "foreshadows", "suggests", "portends", "warns", "hints", "presages", "leads to", "points toward"], label: "Signals what follows", hint: "The definition says 'signals or leads to something that follows' — it's not just a chronological predecessor but a meaningful one." },
    ],
    synonyms: ["forerunner", "harbinger", "herald", "antecedent", "predecessor"],
  },
  {
    word: "prescient",
    partOfSpeech: "adjective",
    definition: "Having or showing knowledge of events before they take place; far-sighted.",
    keyConcepts: [
      { keyword: "knowledge of events before", matchTerms: ["knowledge", "events", "before", "foresight", "predict", "prophetic", "clairvoyant", "visionary", "anticipate", "foresee", "ahead", "future"], label: "Knowledge before events", hint: "The definition says 'knowledge of events before they take place' — knowing what hasn't happened yet." },
    ],
    synonyms: ["prophetic", "far-sighted", "visionary", "clairvoyant", "farsighted"],
  },
  {
    word: "presumptuous",
    partOfSpeech: "adjective",
    definition: "Failing to observe proper boundaries; behaving too boldly and overstepping one's place.",
    keyConcepts: [
      { keyword: "overstepping", matchTerms: ["overstepping", "transgressing", "exceeding", "crossing lines", "bold", "forward", "impertinent", "audacious", "arrogant", "brash", "improper", "insolent"], label: "Overstepping", hint: "The definition says 'overstepping one's place' — going beyond what is appropriate." },
      { keyword: "proper boundaries", matchTerms: ["boundaries", "limits", "place", "role", "propriety", "decorum", "etiquette", "convention", "permission", "authority", "scope", "appropriate"], label: "Proper boundaries", hint: "The definition says 'failing to observe proper boundaries' — there are recognized limits being ignored." },
    ],
    synonyms: ["arrogant", "bold", "impertinent", "audacious", "forward"],
  },
  {
    word: "pretentious",
    partOfSpeech: "adjective",
    definition: "Attempting to impress by claiming greater importance or abilities than one actually has.",
    keyConcepts: [
      { keyword: "attempting to impress", matchTerms: ["impress", "show off", "pose", "pretend", "perform", "affect", "display", "flaunt", "project", "boast", "parade", "claim"], label: "Attempting to impress", hint: "The definition says 'attempting to impress' — it's a performance directed at others." },
      { keyword: "claiming greater importance", matchTerms: ["greater importance", "exaggerated", "inflated", "overblown", "pompous", "grandiose", "false", "undeserved", "unjustified", "hollow", "vain", "arrogant"], label: "Claiming greater importance", hint: "The definition says 'greater importance or abilities than one actually has' — the claim exceeds the reality." },
    ],
    synonyms: ["pompous", "showy", "affected", "vain", "ostentatious"],
  },
  {
    word: "prevaricate",
    partOfSpeech: "verb",
    definition: "To speak or act in an evasive way so as to avoid telling the full truth.",
    keyConcepts: [
      { keyword: "evasive", matchTerms: ["evasive", "equivocate", "dodge", "avoid", "hedge", "evade", "sidestep", "mislead", "distort", "obscure", "obfuscate", "weasel"], label: "Evasive", hint: "The definition says 'in an evasive way' — not direct, not forthcoming." },
      { keyword: "avoid telling the full truth", matchTerms: ["avoid truth", "deceive", "mislead", "equivocate", "lie", "fudge", "twist", "conceal", "withhold", "distort", "shade", "spin"], label: "Avoid telling the full truth", hint: "The definition says 'avoid telling the full truth' — there is something being withheld or distorted." },
    ],
    synonyms: ["equivocate", "hedge", "evade", "dissemble", "obfuscate"],
  },
  {
    word: "principled",
    partOfSpeech: "adjective",
    definition: "Acting according to moral rules and strong personal values; guided by principle.",
    keyConcepts: [
      { keyword: "moral rules", matchTerms: ["moral", "ethics", "values", "principles", "standards", "beliefs", "integrity", "conscience", "virtue", "honor", "righteousness", "code"], label: "Moral rules", hint: "The definition says 'moral rules and strong personal values' — behavior guided by an internal ethical code." },
      { keyword: "guided by principle", matchTerms: ["guided", "principle", "conviction", "consistent", "firm", "steadfast", "unwavering", "incorruptible", "honest", "upright", "strict", "reliable"], label: "Guided by principle", hint: "The definition says 'guided by principle' — the values direct behavior, not convenience or self-interest." },
    ],
    synonyms: ["ethical", "moral", "honorable", "upright", "virtuous"],
  },
  {
    word: "proclivity",
    partOfSpeech: "noun",
    definition: "A natural tendency or inclination toward a particular behavior or interest.",
    keyConcepts: [
      { keyword: "natural tendency", matchTerms: ["tendency", "inclination", "predisposition", "leaning", "penchant", "propensity", "bent", "predilection", "disposition", "liking", "preference", "impulse"], label: "Natural tendency", hint: "The definition says 'natural tendency' — something one gravitates toward without necessarily choosing to." },
    ],
    synonyms: ["tendency", "inclination", "predisposition", "propensity", "penchant"],
  },
  {
    word: "prodigious",
    partOfSpeech: "adjective",
    definition: "Remarkably large or impressive in amount, extent, or degree; extraordinary.",
    keyConcepts: [
      { keyword: "remarkably large", matchTerms: ["remarkably large", "impressive", "enormous", "exceptional", "extraordinary", "stupendous", "immense", "vast", "tremendous", "considerable", "monumental", "staggering"], label: "Remarkably large", hint: "The definition says 'remarkably large or impressive' — it exceeds what is expected." },
    ],
    synonyms: ["extraordinary", "exceptional", "enormous", "impressive", "remarkable"],
  },
  {
    word: "profligate",
    partOfSpeech: "adjective",
    definition: "Recklessly extravagant or wasteful in use of resources; licentious and immoral.",
    keyConcepts: [
      { keyword: "recklessly extravagant", matchTerms: ["extravagant", "wasteful", "reckless", "squandering", "excessive", "lavish", "improvident", "prodigal", "dissolute", "spendthrift", "immoderate", "unrestrained"], label: "Recklessly extravagant", hint: "The definition says 'recklessly extravagant or wasteful' — there is no care for what is being consumed." },
      { keyword: "immoral", matchTerms: ["immoral", "licentious", "dissolute", "debauched", "depraved", "dissipated", "wanton", "shameless", "corrupt", "decadent", "reprobate", "sinful"], label: "Immoral", hint: "The definition says 'licentious and immoral' — the wastefulness extends to behavior, not just resources." },
    ],
    synonyms: ["wasteful", "extravagant", "dissolute", "licentious", "dissipated"],
  },
  {
    word: "profound",
    partOfSpeech: "adjective",
    definition: "Having deep insight or understanding; intellectually demanding and significant.",
    keyConcepts: [
      { keyword: "deep insight", matchTerms: ["deep", "insight", "understanding", "knowledge", "wisdom", "penetrating", "perceptive", "thoughtful", "weighty", "serious", "substantive", "meaningful"], label: "Deep insight", hint: "The definition says 'deep insight or understanding' — going far below the surface." },
    ],
    synonyms: ["deep", "insightful", "weighty", "meaningful", "penetrating"],
  },
  {
    word: "prohibitive",
    partOfSpeech: "adjective",
    definition: "So high in cost or difficulty as to prevent use or participation; restrictive.",
    keyConcepts: [
      { keyword: "so high in cost or difficulty", matchTerms: ["prevent", "forbid", "deter", "stop", "bar", "block", "preclude", "disqualify", "rule out", "exclude", "too great", "unaffordable"], label: "So high in cost or difficulty", hint: "The definition says 'so high as to prevent' — the level crosses a threshold into impossibility." },
      { keyword: "cost or difficulty", matchTerms: ["cost", "price", "expense", "fee", "difficulty", "burden", "barrier", "obstacle", "challenge", "threshold", "requirement", "investment"], label: "Cost or difficulty", hint: "The definition says 'high in cost or difficulty' — what is prohibitive is either financial or practical." },
    ],
    synonyms: ["restrictive", "excessive", "unaffordable", "deterrent", "forbidding"],
  },
  {
    word: "proliferate",
    partOfSpeech: "verb",
    definition: "To increase rapidly in number or extent; to multiply and spread quickly.",
    keyConcepts: [
      { keyword: "increase rapidly", matchTerms: ["increase rapidly", "multiply", "spread", "expand", "grow", "explode", "surge", "balloon", "escalate", "propagate", "reproduce", "burgeon"], label: "Increase rapidly", hint: "The definition says 'increase rapidly in number' — fast growth, not slow accumulation." },
    ],
    synonyms: ["multiply", "spread", "expand", "burgeon", "propagate"],
  },
  {
    word: "propensity",
    partOfSpeech: "noun",
    definition: "An inclination or tendency to behave in a particular way; a natural disposition.",
    keyConcepts: [
      { keyword: "inclination", matchTerms: ["inclination", "tendency", "disposition", "predisposition", "bent", "leaning", "penchant", "proclivity", "habit", "impulse", "readiness", "appetite"], label: "Inclination", hint: "The definition says 'inclination or tendency to behave' — a pull toward certain actions." },
    ],
    synonyms: ["tendency", "inclination", "predisposition", "proclivity", "disposition"],
  },
  {
    word: "prosaic",
    partOfSpeech: "adjective",
    definition: "Having the style of ordinary, factual writing; commonplace and unromantic.",
    keyConcepts: [
      { keyword: "commonplace", matchTerms: ["commonplace", "ordinary", "dull", "mundane", "unimaginative", "pedestrian", "plain", "flat", "routine", "uninspiring", "humdrum", "banal"], label: "Commonplace and dull", hint: "The definition says 'commonplace and unromantic' — nothing elevated or interesting." },
    ],
    synonyms: ["mundane", "ordinary", "pedestrian", "dull", "unremarkable"],
  },
  {
    word: "prudent",
    partOfSpeech: "adjective",
    definition: "Acting with care and wise judgment about the future; practical and cautious.",
    keyConcepts: [
      { keyword: "wise judgment", matchTerms: ["wise", "judgment", "careful", "thoughtful", "sensible", "judicious", "discerning", "deliberate", "foresighted", "cautious", "calculating", "measured"], label: "Wise judgment", hint: "The definition says 'wise judgment about the future' — thinking ahead and weighing consequences." },
    ],
    synonyms: ["wise", "cautious", "judicious", "sensible", "circumspect"],
  },
  {
    word: "puerile",
    partOfSpeech: "adjective",
    definition: "Childishly silly and immature; not deserving serious consideration.",
    keyConcepts: [
      { keyword: "childishly", matchTerms: ["childish", "immature", "juvenile", "infantile", "silly", "naive", "unsophisticated", "simple-minded", "petty", "trivial", "foolish", "irresponsible"], label: "Childishly immature", hint: "The definition says 'childishly silly and immature' — the behavior is beneath adulthood." },
    ],
    synonyms: ["childish", "immature", "juvenile", "infantile", "silly"],
  },
  {
    word: "pugnacious",
    partOfSpeech: "adjective",
    definition: "Eager or quick to argue or fight; aggressively quarrelsome and combative.",
    keyConcepts: [
      { keyword: "eager or quick to argue or fight", matchTerms: ["eager to fight", "combative", "aggressive", "belligerent", "hostile", "argumentative", "quarrelsome", "confrontational", "provocative", "irascible", "truculent", "feisty"], label: "Eager or quick to argue or fight", hint: "The definition says 'eager or quick to argue or fight' — seeking, not just responding to, conflict." },
    ],
    synonyms: ["combative", "belligerent", "aggressive", "quarrelsome", "truculent"],
  },
  {
    word: "quandary",
    partOfSpeech: "noun",
    definition: "A state of uncertainty or confusion about what to do in a difficult situation.",
    keyConcepts: [
      { keyword: "uncertainty", matchTerms: ["uncertainty", "confusion", "indecision", "dilemma", "perplexity", "doubt", "puzzlement", "hesitation", "difficulty", "predicament", "stalemate", "limbo"], label: "Uncertainty", hint: "The definition says 'uncertainty or confusion' — not knowing which way to go." },
      { keyword: "difficult situation", matchTerms: ["difficult", "situation", "problem", "predicament", "bind", "fix", "spot", "challenge", "impasse", "crossroads", "crisis", "trouble"], label: "Difficult situation", hint: "The definition says 'in a difficult situation' — the quandary arises from something genuinely hard." },
    ],
    synonyms: ["dilemma", "predicament", "uncertainty", "perplexity", "impasse"],
  },
  {
    word: "recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority or discipline.",
    keyConcepts: [
      { keyword: "uncooperative", matchTerms: ["uncooperative", "resistant", "defiant", "disobedient", "rebellious", "obstinate", "stubborn", "refractory", "intractable", "recalcitrant", "headstrong", "contrary"], label: "Uncooperative", hint: "The definition says 'obstinately uncooperative' — actively refusing to go along." },
      { keyword: "authority", matchTerms: ["authority", "discipline", "control", "rules", "supervision", "management", "order", "hierarchy", "institution", "power", "establishment", "structure"], label: "Toward authority", hint: "The definition says 'toward authority or discipline' — the resistance is directed at those in charge." },
    ],
    synonyms: ["defiant", "uncooperative", "rebellious", "obstinate", "refractory"],
  },
  {
    word: "recant",
    partOfSpeech: "verb",
    definition: "To withdraw or disavow a previously held statement or belief, often publicly.",
    keyConcepts: [
      { keyword: "withdraw", matchTerms: ["withdraw", "disavow", "retract", "renounce", "take back", "repudiate", "reverse", "rescind", "abandon", "abjure", "forswear", "revoke"], label: "Withdraw", hint: "The definition says 'withdraw or disavow' — taking back what was said or believed." },
      { keyword: "previously held", matchTerms: ["previously held", "earlier", "former", "past", "prior", "once-stated", "original", "old", "established", "stated", "expressed", "declared"], label: "Previously held belief", hint: "The definition says 'previously held statement or belief' — there is a reversal from a prior position." },
    ],
    synonyms: ["retract", "withdraw", "renounce", "disavow", "repudiate"],
  },
  {
    word: "rhetoric",
    partOfSpeech: "noun",
    definition: "The art of persuasive speaking or writing; language designed to have a persuasive effect.",
    keyConcepts: [
      { keyword: "persuasive", matchTerms: ["persuasive", "convincing", "compelling", "eloquent", "effective", "influential", "impactful", "forceful", "moving", "stirring", "appealing", "affecting"], label: "Persuasive", hint: "The definition says 'persuasive speaking or writing' — the goal is to influence the audience." },
      { keyword: "language", matchTerms: ["language", "speech", "writing", "discourse", "words", "expression", "style", "diction", "prose", "oration", "text", "argument"], label: "Use of language", hint: "The definition says 'language designed to have a persuasive effect' — it's about how language is crafted and deployed." },
    ],
    synonyms: ["oratory", "eloquence", "persuasion", "discourse", "speechcraft"],
  },
  {
    word: "sanguine",
    partOfSpeech: "adjective",
    definition: "Optimistic and positive, especially in a difficult or worrying situation.",
    keyConcepts: [
      { keyword: "optimistic", matchTerms: ["optimistic", "hopeful", "positive", "confident", "cheerful", "upbeat", "buoyant", "encouraged", "expectant", "assured", "bright", "bullish"], label: "Optimistic", hint: "The definition says 'optimistic and positive' — looking on the bright side." },
      { keyword: "difficult or worrying situation", matchTerms: ["difficult", "worrying", "challenging", "adverse", "trying", "hard", "uncertain", "troubled", "crisis", "hardship", "despite circumstances", "against odds"], label: "Difficult or worrying situation", hint: "The definition says 'especially in a difficult or worrying situation' — the optimism persists even when things are bad." },
    ],
    synonyms: ["optimistic", "hopeful", "positive", "confident", "upbeat"],
  },
  {
    word: "sardonic",
    partOfSpeech: "adjective",
    definition: "Grimly mocking or cynical; expressing contempt through irony and scorn.",
    keyConcepts: [
      { keyword: "mocking", matchTerms: ["mocking", "cynical", "scornful", "contemptuous", "derisive", "sneering", "ironic", "sarcastic", "dry", "cutting", "bitter", "caustic"], label: "Mocking", hint: "The definition says 'grimly mocking or cynical' — the humor has a bitter, dark quality." },
      { keyword: "contempt", matchTerms: ["contempt", "disdain", "scorn", "disrespect", "derision", "ridicule", "sneer", "condescension", "disregard", "dismissiveness", "low regard", "superiority"], label: "Expressing contempt", hint: "The definition says 'expressing contempt' — the mockery communicates a deep disrespect." },
    ],
    synonyms: ["cynical", "mocking", "scornful", "ironic", "contemptuous"],
  },
  {
    word: "saturate",
    partOfSpeech: "verb",
    definition: "To fill something completely so that no more can be absorbed; to soak thoroughly.",
    keyConcepts: [
      { keyword: "fill something completely", matchTerms: ["fill completely", "soak", "drench", "flood", "permeate", "suffuse", "imbue", "steep", "inundate", "overwhelm", "overload", "pervade"], label: "Fill something completely", hint: "The definition says 'fill something completely' — beyond full, to the point of overflow." },
    ],
    synonyms: ["soak", "drench", "permeate", "flood", "suffuse"],
  },
  {
    word: "salient",
    partOfSpeech: "adjective",
    definition: "Most noticeable or important; standing out prominently from the surroundings.",
    keyConcepts: [
      { keyword: "most noticeable", matchTerms: ["noticeable", "prominent", "striking", "conspicuous", "obvious", "notable", "remarkable", "distinctive", "clear", "marked", "visible", "stand out"], label: "Most noticeable", hint: "The definition says 'most noticeable or important' — it draws the eye and attention." },
    ],
    synonyms: ["prominent", "notable", "striking", "conspicuous", "outstanding"],
  },
  {
    word: "scintilla",
    partOfSpeech: "noun",
    definition: "A tiny trace or spark of something; an extremely small amount.",
    keyConcepts: [
      { keyword: "tiny trace", matchTerms: ["tiny", "trace", "spark", "bit", "iota", "jot", "hint", "shred", "particle", "grain", "atom", "flicker"], label: "Tiny trace", hint: "The definition says 'tiny trace or spark' — the smallest possible presence of something." },
    ],
    synonyms: ["trace", "iota", "particle", "hint", "shred"],
  },
  {
    word: "sedulous",
    partOfSpeech: "adjective",
    definition: "Showing dedication and persistent effort; diligently attentive and hardworking.",
    keyConcepts: [
      { keyword: "persistent effort", matchTerms: ["persistent", "diligent", "dedicated", "tireless", "steadfast", "thorough", "assiduous", "conscientious", "industrious", "careful", "attentive", "hardworking"], label: "Persistent effort", hint: "The definition says 'persistent effort' — keeping at it consistently over time." },
    ],
    synonyms: ["diligent", "assiduous", "industrious", "persistent", "dedicated"],
  },
  {
    word: "sporadic",
    partOfSpeech: "adjective",
    definition: "Occurring at irregular intervals and not in a regular pattern; scattered and occasional.",
    keyConcepts: [
      { keyword: "irregular intervals", matchTerms: ["irregular", "occasional", "intermittent", "scattered", "infrequent", "random", "unpredictable", "patchy", "on and off", "inconsistent", "erratic", "fitful"], label: "Irregular intervals", hint: "The definition says 'irregular intervals' — it happens sometimes but not on any dependable schedule." },
    ],
    synonyms: ["intermittent", "occasional", "irregular", "scattered", "fitful"],
  },
  {
    word: "stymie",
    partOfSpeech: "verb",
    definition: "To block or hinder the progress of someone or something; to prevent advancement.",
    keyConcepts: [
      { keyword: "block", matchTerms: ["block", "hinder", "obstruct", "thwart", "impede", "prevent", "stop", "frustrate", "hamper", "foil", "check", "derail"], label: "To block", hint: "The definition says 'block or hinder the progress' — putting an obstacle in the way." },
    ],
    synonyms: ["hinder", "obstruct", "thwart", "impede", "frustrate"],
  },
  {
    word: "sublime",
    partOfSpeech: "adjective",
    definition: "Of such excellence and beauty as to inspire awe; elevated and majestic in quality.",
    keyConcepts: [
      { keyword: "inspire awe", matchTerms: ["inspire awe", "awe-inspiring", "breathtaking", "transcendent", "majestic", "magnificent", "elevated", "exalted", "overwhelming", "stunning", "reverential", "overpowering"], label: "Inspire awe", hint: "The definition says 'inspire awe' — it elevates the observer beyond the ordinary." },
      { keyword: "excellence and beauty", matchTerms: ["excellence", "beauty", "perfection", "nobility", "grandeur", "greatness", "magnificence", "splendor", "glory", "ideal", "supreme", "ultimate"], label: "Excellence and beauty", hint: "The definition says 'excellence and beauty' — the quality is both morally and aesthetically elevated." },
    ],
    synonyms: ["transcendent", "majestic", "exalted", "magnificent", "awe-inspiring"],
  },
  {
    word: "substantiate",
    partOfSpeech: "verb",
    definition: "To provide evidence to support or prove the truth of something.",
    keyConcepts: [
      { keyword: "provide evidence", matchTerms: ["provide evidence", "prove", "support", "verify", "confirm", "corroborate", "validate", "demonstrate", "establish", "back up", "justify", "document"], label: "Provide evidence", hint: "The definition says 'provide evidence to support' — making claims credible through proof." },
      { keyword: "truth", matchTerms: ["truth", "validity", "accuracy", "claim", "assertion", "argument", "statement", "hypothesis", "contention", "allegation", "position", "belief"], label: "Support the truth", hint: "The definition says 'support or prove the truth' — the goal is establishing that something is real or correct." },
    ],
    synonyms: ["prove", "verify", "corroborate", "confirm", "support"],
  },
  {
    word: "supplant",
    partOfSpeech: "verb",
    definition: "To take the place of someone or something, especially by force or cunning.",
    keyConcepts: [
      { keyword: "take the place of", matchTerms: ["take the place of", "replace", "displace", "oust", "supersede", "succeed", "substitute", "unseat", "overthrow", "remove", "usurp", "dislodge"], label: "Take the place of", hint: "The definition says 'take the place of' — what was there before is now gone." },
      { keyword: "force or cunning", matchTerms: ["force", "cunning", "scheming", "deception", "manipulation", "treachery", "plotting", "strategy", "underhanded", "sneaky", "calculated", "deliberate"], label: "By force or cunning", hint: "The definition says 'especially by force or cunning' — the replacement is not straightforward or fair." },
    ],
    synonyms: ["replace", "oust", "displace", "supersede", "usurp"],
  },
  {
    word: "tacit",
    partOfSpeech: "adjective",
    definition: "Understood or implied without being directly stated; silently assumed.",
    keyConcepts: [
      { keyword: "implied", matchTerms: ["implied", "unstated", "unspoken", "understood", "assumed", "inferred", "indirect", "covert", "silent", "unvoiced", "unexpressed", "read between the lines"], label: "Implied without stating", hint: "The definition says 'implied without being directly stated' — meaning exists but no words convey it explicitly." },
    ],
    synonyms: ["implied", "unspoken", "understood", "implicit", "unstated"],
  },
  {
    word: "taciturn",
    partOfSpeech: "adjective",
    definition: "Tending to be quiet and say very little; reserved and uncommunicative.",
    keyConcepts: [
      { keyword: "quiet", matchTerms: ["quiet", "silent", "reserved", "uncommunicative", "reticent", "withdrawn", "tightlipped", "close-mouthed", "closed off", "private", "introverted", "guarded"], label: "Quiet and reserved", hint: "The definition says 'quiet and say very little' — words are used sparingly, if at all." },
    ],
    synonyms: ["reserved", "reticent", "quiet", "uncommunicative", "tight-lipped"],
  },
  {
    word: "truculent",
    partOfSpeech: "adjective",
    definition: "Eager or quick to argue or fight; aggressively defiant and uncooperative.",
    keyConcepts: [
      { keyword: "eager or quick to argue or fight", matchTerms: ["eager to fight", "defiant", "hostile", "aggressive", "belligerent", "combative", "confrontational", "ferocious", "fierce", "uncooperative", "antagonistic", "fierce"], label: "Eager or quick to argue or fight", hint: "The definition says 'eager or quick to argue or fight' — a hair-trigger for conflict." },
    ],
    synonyms: ["belligerent", "aggressive", "defiant", "hostile", "combative"],
  },
  {
    word: "ubiquitous",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere at the same time.",
    keyConcepts: [
      { keyword: "everywhere", matchTerms: ["everywhere", "omnipresent", "pervasive", "universal", "all-pervasive", "rampant", "widespread", "prevalent", "constant", "inescapable", "unavoidable", "saturating"], label: "Found everywhere", hint: "The definition says 'found everywhere' — there is no escaping its presence." },
    ],
    synonyms: ["omnipresent", "pervasive", "universal", "widespread", "inescapable"],
  },
  {
    word: "unprecedented",
    partOfSpeech: "adjective",
    definition: "Never done or known before; having no prior example or parallel in history.",
    keyConcepts: [
      { keyword: "never done or known before", matchTerms: ["never done before", "first", "new", "novel", "original", "unique", "singular", "historic", "groundbreaking", "uncharted", "path-breaking", "first-ever"], label: "Never done or known before", hint: "The definition says 'never done or known before' — there is no comparable case." },
      { keyword: "no prior example", matchTerms: ["no prior example", "unparalleled", "unmatched", "without precedent", "new ground", "first time", "no comparison", "history", "record", "benchmark", "baseline", "reference"], label: "No prior example", hint: "The definition says 'no prior example or parallel' — there is nothing to compare it to." },
    ],
    synonyms: ["unparalleled", "unheard-of", "novel", "historic", "first"],
  },
  {
    word: "winnow",
    partOfSpeech: "verb",
    definition: "To separate the valuable from the worthless; to remove inferior elements through careful analysis.",
    keyConcepts: [
      { keyword: "separate", matchTerms: ["separate", "sift", "sort", "filter", "eliminate", "select", "distinguish", "isolate", "pare down", "refine", "identify", "extract"], label: "To separate", hint: "The definition says 'separate the valuable from the worthless' — an act of discrimination and selection." },
      { keyword: "inferior elements", matchTerms: ["inferior", "worthless", "useless", "surplus", "irrelevant", "extraneous", "poor quality", "unneeded", "waste", "chaff", "flawed", "substandard"], label: "Remove inferior elements", hint: "The definition says 'remove inferior elements' — the goal is to keep only what is best." },
    ],
    synonyms: ["sift", "filter", "sort", "cull", "separate"],
  },
]
