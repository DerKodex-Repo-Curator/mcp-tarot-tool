export interface SpreadPosition {
  position: number;
  name: string;
  description: string;
}

export interface Spread {
  name: string;
  positions: SpreadPosition[];
  description: string;
}

export const CELTIC_CROSS: Spread = {
  name: "Celtic Cross",
  description: "A comprehensive 10-card spread that explores past, present, and future influences",
  positions: [
    {
      position: 1,
      name: "Present Situation",
      description: "Your current situation or the heart of the matter"
    },
    {
      position: 2,
      name: "Challenge/Cross",
      description: "What crosses you - the immediate challenge or obstacle"
    },
    {
      position: 3,
      name: "Distant Past",
      description: "Root causes and deep influences from your history"
    },
    {
      position: 4,
      name: "Recent Past",
      description: "Recent events affecting the situation"
    },
    {
      position: 5,
      name: "Possible Future",
      description: "Potential outcome if current path continues"
    },
    {
      position: 6,
      name: "Immediate Future",
      description: "What's coming in the near future"
    },
    {
      position: 7,
      name: "Your Approach",
      description: "Your current approach to the situation"
    },
    {
      position: 8,
      name: "External Influences",
      description: "Environmental factors and outside influences"
    },
    {
      position: 9,
      name: "Hopes and Fears",
      description: "Your inner hopes or fears about the situation"
    },
    {
      position: 10,
      name: "Final Outcome",
      description: "The likely outcome if things continue"
    }
  ]
};

export const THREE_CARD: Spread = {
  name: "Three Card",
  description: "A simple but powerful spread for quick insights",
  positions: [
    {
      position: 1,
      name: "Past",
      description: "Past influences on the situation"
    },
    {
      position: 2,
      name: "Present",
      description: "Current situation"
    },
    {
      position: 3,
      name: "Future",
      description: "Likely outcome or future influence"
    }
  ]
};

export const SINGLE_CARD: Spread = {
  name: "Single Card",
  description: "Draw one card for daily guidance or simple questions",
  positions: [
    {
      position: 1,
      name: "Card of the Day",
      description: "Guidance or energy for the day"
    }
  ]
};

export const YES_NO: Spread = {
  name: "Yes/No",
  description: "A single card draw interpreted for yes/no questions",
  positions: [
    {
      position: 1,
      name: "Answer",
      description: "The answer to your yes/no question"
    }
  ]
};

export const SPREADS = {
  "celtic-cross": CELTIC_CROSS,
  "three-card": THREE_CARD,
  "single-card": SINGLE_CARD,
  "yes-no": YES_NO
};

export type SpreadType = keyof typeof SPREADS;
