export interface Card {
  name: string;
  suit?: string;
  rank?: string;
  number?: number;
  keywords: string[];
  uprightMeaning: string[];
  reversedMeaning: string[];
  type: 'major' | 'minor';
  symbol?: string;
}

export interface DrawnCard {
  card: Card;
  position: string;
  reversed: boolean;
}

// Complete Major Arcana definitions
export const MAJOR_ARCANA: Card[] = [
  {
    name: "The Fool",
    number: 0,
    type: "major",
    symbol: "☽",
    keywords: ["new beginnings", "innocence", "spontaneity", "free spirit", "journey"],
    uprightMeaning: [
      "Fresh starts and new adventures",
      "Taking a leap of faith",
      "Embracing the unknown with optimism",
      "Living in the moment",
      "Unlimited potential"
    ],
    reversedMeaning: [
      "Recklessness and poor judgment",
      "Naivety leading to mistakes",
      "Fear of taking risks",
      "Missed opportunities",
      "Foolish decisions"
    ]
  },
  {
    name: "The Magician",
    number: 1,
    type: "major",
    symbol: "★",
    keywords: ["manifestation", "willpower", "skill", "resourcefulness", "action"],
    uprightMeaning: [
      "Having all the tools needed for success",
      "Focused determination and willpower",
      "Turning ideas into reality",
      "Skilled communication",
      "Taking inspired action"
    ],
    reversedMeaning: [
      "Manipulation or deception",
      "Wasted talent or potential",
      "Lack of focus or direction",
      "Trickery and illusion",
      "Poor planning"
    ]
  },
  {
    name: "The High Priestess",
    number: 2,
    type: "major",
    symbol: "☾",
    keywords: ["intuition", "mystery", "subconscious", "spiritual insight", "hidden knowledge"],
    uprightMeaning: [
      "Trusting your intuition",
      "Hidden knowledge being revealed",
      "Spiritual wisdom and understanding",
      "The power of the feminine",
      "Going within for answers"
    ],
    reversedMeaning: [
      "Ignoring intuition",
      "Hidden agendas or secrets",
      "Disconnection from inner wisdom",
      "Superficial knowledge",
      "Lack of spiritual connection"
    ]
  },
  {
    name: "The Empress",
    number: 3,
    type: "major",
    symbol: "♀",
    keywords: ["fertility", "femininity", "beauty", "nature", "abundance"],
    uprightMeaning: [
      "Creative abundance and fertility",
      "Nurturing and maternal energy",
      "Connection with nature",
      "Sensual pleasures and beauty",
      "Material and emotional abundance"
    ],
    reversedMeaning: [
      "Creative blocks",
      "Neglecting self-care",
      "Dependence on others",
      "Infertility or reproductive issues",
      "Material lack or insecurity"
    ]
  },
  {
    name: "The Emperor",
    number: 4,
    type: "major",
    symbol: "♔",
    keywords: ["authority", "structure", "control", "father figure", "leadership"],
    uprightMeaning: [
      "Taking charge and leadership",
      "Establishing order and structure",
      "Paternal influence or energy",
      "Building solid foundations",
      "Protection and security"
    ],
    reversedMeaning: [
      "Tyranny or abuse of power",
      "Excessive control or rigidity",
      "Father issues or conflicts",
      "Lack of discipline",
      "Chaos from lack of structure"
    ]
  },
  {
    name: "The Hierophant",
    number: 5,
    type: "major",
    symbol: "🕎",
    keywords: ["tradition", "conformity", "education", "belief systems", "institutions"],
    uprightMeaning: [
      "Following established traditions",
      "Seeking guidance from mentors",
      "Formal education or training",
      "Religious or spiritual guidance",
      "Group identity and belonging"
    ],
    reversedMeaning: [
      "Challenging tradition",
      "Unconventional approaches",
      "Breaking free from conformity",
      "Questioning beliefs",
      "Personal belief systems"
    ]
  },
  {
    name: "The Lovers",
    number: 6,
    type: "major",
    symbol: "♡",
    keywords: ["love", "harmony", "relationships", "values", "choices"],
    uprightMeaning: [
      "Deep connections and partnerships",
      "Important choices about relationships",
      "Harmony and mutual attraction",
      "Values alignment",
      "Soulmate connections"
    ],
    reversedMeaning: [
      "Disharmony in relationships",
      "Poor choices in love",
      "Imbalance or codependency",
      "Values conflicts",
      "Self-love needed"
    ]
  },
  {
    name: "The Chariot",
    number: 7,
    type: "major",
    symbol: "⚔",
    keywords: ["control", "willpower", "victory", "determination", "travel"],
    uprightMeaning: [
      "Triumph through determination",
      "Taking control of your destiny",
      "Forward movement and progress",
      "Overcoming obstacles",
      "Victory after struggle"
    ],
    reversedMeaning: [
      "Lack of control or direction",
      "Aggression or force",
      "Obstacles and delays",
      "Inner conflicts",
      "Lack of determination"
    ]
  },
  {
    name: "Strength",
    number: 8,
    type: "major",
    symbol: "∞",
    keywords: ["inner strength", "courage", "patience", "compassion", "self-control"],
    uprightMeaning: [
      "Inner strength and courage",
      "Gentle control over situations",
      "Patience and compassion",
      "Taming inner beasts",
      "Spiritual fortitude"
    ],
    reversedMeaning: [
      "Self-doubt and weakness",
      "Lack of confidence",
      "Raw emotions uncontrolled",
      "Abuse of strength",
      "Giving up too easily"
    ]
  },
  {
    name: "The Hermit",
    number: 9,
    type: "major",
    symbol: "☸",
    keywords: ["soul searching", "introspection", "solitude", "guidance", "wisdom"],
    uprightMeaning: [
      "Seeking inner wisdom",
      "Time for solitude and reflection",
      "Spiritual enlightenment",
      "Being a guide to others",
      "Finding your own path"
    ],
    reversedMeaning: [
      "Extreme isolation",
      "Loneliness and withdrawal",
      "Refusing help or guidance",
      "Fear of introspection",
      "Avoiding inner work"
    ]
  },
  {
    name: "Wheel of Fortune",
    number: 10,
    type: "major",
    symbol: "☯",
    keywords: ["cycles", "destiny", "turning point", "luck", "change"],
    uprightMeaning: [
      "Major life changes",
      "Turning points and cycles",
      "Good fortune and luck",
      "Karmic lessons",
      "Destiny unfolding"
    ],
    reversedMeaning: [
      "Bad luck or misfortune",
      "Resistance to change",
      "Breaking negative cycles",
      "Karma catching up",
      "External forces affecting life"
    ]
  },
  {
    name: "Justice",
    number: 11,
    type: "major",
    symbol: "⚖",
    keywords: ["justice", "truth", "fairness", "law", "balance"],
    uprightMeaning: [
      "Fair and just outcomes",
      "Truth being revealed",
      "Legal matters resolved",
      "Karmic justice",
      "Balanced decisions"
    ],
    reversedMeaning: [
      "Injustice or unfairness",
      "Legal complications",
      "Dishonesty exposed",
      "Lack of accountability",
      "Biased decisions"
    ]
  },
  {
    name: "The Hanged Man",
    number: 12,
    type: "major",
    symbol: "†",
    keywords: ["surrender", "perspective", "sacrifice", "waiting", "contemplation"],
    uprightMeaning: [
      "Voluntary sacrifice",
      "New perspectives gained",
      "Surrendering control",
      "Spiritual awakening",
      "Seeing things differently"
    ],
    reversedMeaning: [
      "Stalling or delays",
      "Resistance to change",
      "Martyrdom complex",
      "Missed opportunities",
      "Stuck in limbo"
    ]
  },
  {
    name: "Death",
    number: 13,
    type: "major",
    symbol: "☠",
    keywords: ["transformation", "endings", "beginnings", "transition", "renewal"],
    uprightMeaning: [
      "Major transformation",
      "Endings leading to beginnings",
      "Releasing the past",
      "Profound change",
      "Rebirth and renewal"
    ],
    reversedMeaning: [
      "Resistance to change",
      "Fear of endings",
      "Stagnation",
      "Inability to let go",
      "Fear of the unknown"
    ]
  },
  {
    name: "Temperance",
    number: 14,
    type: "major",
    symbol: "⚗",
    keywords: ["balance", "patience", "moderation", "harmony", "healing"],
    uprightMeaning: [
      "Finding balance and moderation",
      "Patience and timing",
      "Blending opposing forces",
      "Healing and renewal",
      "Divine timing"
    ],
    reversedMeaning: [
      "Imbalance or excess",
      "Lack of moderation",
      "Impatience",
      "Conflicting elements",
      "Disharmony"
    ]
  },
  {
    name: "The Devil",
    number: 15,
    type: "major",
    symbol: "⛧",
    keywords: ["bondage", "addiction", "materialism", "sexuality", "shadow self"],
    uprightMeaning: [
      "Feeling trapped or bound",
      "Addictions and dependencies",
      "Material obsessions",
      "Sexual energy",
      "Confronting shadows"
    ],
    reversedMeaning: [
      "Breaking free from bondage",
      "Overcoming addictions",
      "Releasing attachments",
      "Reclaiming power",
      "Spiritual awakening"
    ]
  },
  {
    name: "The Tower",
    number: 16,
    type: "major",
    symbol: "⚡",
    keywords: ["upheaval", "chaos", "revelation", "awakening", "breakthrough"],
    uprightMeaning: [
      "Sudden upheaval or crisis",
      "Destruction of false foundations",
      "Shocking revelations",
      "Breakthrough moments",
      "Liberation through chaos"
    ],
    reversedMeaning: [
      "Avoiding necessary change",
      "Fear of upheaval",
      "Delaying the inevitable",
      "Internal transformation",
      "Gradual change"
    ]
  },
  {
    name: "The Star",
    number: 17,
    type: "major",
    symbol: "✦",
    keywords: ["hope", "inspiration", "renewal", "healing", "guidance"],
    uprightMeaning: [
      "Renewed hope and faith",
      "Healing and renewal",
      "Divine inspiration",
      "Wishes coming true",
      "Connection to purpose"
    ],
    reversedMeaning: [
      "Loss of faith",
      "Disconnection from spirit",
      "Despair or hopelessness",
      "Unfulfilled wishes",
      "Feeling lost"
    ]
  },
  {
    name: "The Moon",
    number: 18,
    type: "major",
    symbol: "☾",
    keywords: ["illusion", "intuition", "dreams", "subconscious", "confusion"],
    uprightMeaning: [
      "Navigating through illusion",
      "Strong intuition",
      "Dreams and psychic abilities",
      "Hidden fears surfacing",
      "Mystery and uncertainty"
    ],
    reversedMeaning: [
      "Confusion lifting",
      "Secrets revealed",
      "Overcoming fears",
      "Clarity emerging",
      "Mental confusion"
    ]
  },
  {
    name: "The Sun",
    number: 19,
    type: "major",
    symbol: "☀",
    keywords: ["joy", "success", "vitality", "enlightenment", "positivity"],
    uprightMeaning: [
      "Pure joy and happiness",
      "Success and achievement",
      "Vitality and energy",
      "Clear truth revealed",
      "Positive outcomes"
    ],
    reversedMeaning: [
      "Temporary setbacks",
      "Lack of enthusiasm",
      "Ego issues",
      "False optimism",
      "Inner child wounds"
    ]
  },
  {
    name: "Judgement",
    number: 20,
    type: "major",
    symbol: "✝",
    keywords: ["rebirth", "inner calling", "absolution", "awakening", "reckoning"],
    uprightMeaning: [
      "Spiritual awakening",
      "Answering your calling",
      "Karmic reckoning",
      "Forgiveness and absolution",
      "Rebirth and renewal"
    ],
    reversedMeaning: [
      "Self-doubt and criticism",
      "Avoiding self-examination",
      "Fear of judgment",
      "Missing your calling",
      "Refusing to learn"
    ]
  },
  {
    name: "The World",
    number: 21,
    type: "major",
    symbol: "⊕",
    keywords: ["completion", "accomplishment", "fulfillment", "wholeness", "success"],
    uprightMeaning: [
      "Major accomplishment",
      "Cycle completion",
      "Worldly success",
      "Integration and wholeness",
      "Cosmic consciousness"
    ],
    reversedMeaning: [
      "Incomplete goals",
      "Lack of closure",
      "Delays in achievement",
      "Seeking external validation",
      "Almost there"
    ]
  }
];

// Minor Arcana with proper meanings by suit and rank
export function generateMinorArcana(): Card[] {
  const minorArcana: Card[] = [];
  
  const suitMeanings = {
    "Wands": {
      element: "fire",
      symbol: "🜂",
      themes: ["creativity", "passion", "action", "inspiration", "spirituality"]
    },
    "Cups": {
      element: "water", 
      symbol: "🜄",
      themes: ["emotions", "relationships", "intuition", "spirituality", "love"]
    },
    "Swords": {
      element: "air",
      symbol: "🜁", 
      themes: ["thoughts", "communication", "conflict", "clarity", "truth"]
    },
    "Pentacles": {
      element: "earth",
      symbol: "🜃",
      themes: ["material", "work", "money", "health", "practical"]
    }
  };

  // Ace through King meanings for each suit
  const rankMeanings = {
    "Ace": {
      core: "new beginnings, potential, opportunity",
      upright: "Pure potential and new opportunities in the suit's domain",
      reversed: "Missed opportunities, delays, or blocked energy"
    },
    "Two": {
      core: "balance, partnership, duality",
      upright: "Choices, partnerships, or balance in the suit's realm",
      reversed: "Imbalance, indecision, or broken partnerships"
    },
    "Three": {
      core: "growth, creativity, collaboration",
      upright: "Initial achievement, group efforts, or creative output",
      reversed: "Lack of teamwork, scattered energy, or delays"
    },
    "Four": {
      core: "stability, foundation, stagnation",
      upright: "Stability and solid foundations, but possible complacency",
      reversed: "Instability, breaking free from limitations"
    },
    "Five": {
      core: "conflict, change, instability",
      upright: "Challenges, conflicts, or necessary changes",
      reversed: "Recovery from conflict, avoiding confrontation"
    },
    "Six": {
      core: "harmony, support, reciprocity",
      upright: "Harmony restored, help given or received",
      reversed: "Imbalance in giving/receiving, lack of support"
    },
    "Seven": {
      core: "assessment, perseverance, hidden factors",
      upright: "Evaluation, persistence despite challenges",
      reversed: "Giving up too soon, lack of perseverance"
    },
    "Eight": {
      core: "movement, power, rapid change",
      upright: "Quick progress, mastery, or dedication",
      reversed: "Delays, abuse of power, or burnout"
    },
    "Nine": {
      core: "near completion, satisfaction, anxiety",
      upright: "Nearing goals, satisfaction, or final challenges",
      reversed: "Incomplete goals, dissatisfaction, or exhaustion"
    },
    "Ten": {
      core: "completion, excess, renewal",
      upright: "Completion of a cycle, fulfillment, or burden",
      reversed: "Inability to complete, avoiding responsibility"
    },
    "Page": {
      core: "messages, new ideas, learning",
      upright: "New ideas, messages, or learning opportunities",
      reversed: "Bad news, delays in communication, immaturity"
    },
    "Knight": {
      core: "action, adventure, impulsiveness",
      upright: "Taking action, pursuing goals with passion",
      reversed: "Recklessness, aggression, or lack of direction"
    },
    "Queen": {
      core: "nurturing, intuitive, mature feminine",
      upright: "Mastery of the suit's emotional/intuitive aspects",
      reversed: "Neglect, manipulation, or emotional imbalance"
    },
    "King": {
      core: "authority, control, mature masculine",
      upright: "Mastery and leadership in the suit's domain",
      reversed: "Abuse of power, weakness, or poor leadership"
    }
  };

  for (const suit of SUITS) {
    const suitInfo = suitMeanings[suit];
    
    for (let i = 0; i < RANKS.length; i++) {
      const rank = RANKS[i];
      const rankInfo = rankMeanings[rank];
      
      minorArcana.push({
        name: `${rank} of ${suit}`,
        suit: suit,
        rank: rank,
        type: "minor",
        symbol: suitInfo.symbol,
        keywords: [...suitInfo.themes, ...rankInfo.core.split(", ")],
        uprightMeaning: [
          `${rankInfo.upright} related to ${suitInfo.themes.join(", ")}`,
          `${rank} energy manifesting through ${suit} (${suitInfo.element})`,
          `Focus on ${suitInfo.themes[0]} and ${suitInfo.themes[1]}`
        ],
        reversedMeaning: [
          `${rankInfo.reversed} in matters of ${suitInfo.themes.join(", ")}`,
          `Blocked or excessive ${suit} energy`,
          `Need to address ${suitInfo.themes[0]} issues`
        ]
      });
    }
  }
  
  return minorArcana;
}

export const SUITS = ["Wands", "Cups", "Swords", "Pentacles"];
export const RANKS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"];
export const FULL_DECK: Card[] = [...MAJOR_ARCANA, ...generateMinorArcana()];
