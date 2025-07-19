import { Card, DrawnCard, FULL_DECK } from './cards/deck';
import { Spread, SpreadType, SPREADS } from './spreads/spreads';

export class TarotEngine {
  private deck: Card[];
  
  constructor() {
    this.deck = [...FULL_DECK];
  }
  
  private shuffleDeck(): void {
    // Fisher-Yates shuffle algorithm
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  
  private determineReversed(): boolean {
    // 30-50% chance of reversal for more natural distribution
    const chance = 0.3 + Math.random() * 0.2;
    return Math.random() < chance;
  }
  
  drawCards(count: number): DrawnCard[] {
    this.shuffleDeck();
    const drawnCards: DrawnCard[] = [];
    
    for (let i = 0; i < count && i < this.deck.length; i++) {
      drawnCards.push({
        card: this.deck[i],
        position: `Position ${i + 1}`,
        reversed: this.determineReversed()
      });
    }
    
    return drawnCards;
  }
  
  performReading(spreadType: SpreadType): {
    spread: Spread;
    cards: DrawnCard[];
    timestamp: string;
  } {
    const spread = SPREADS[spreadType];
    if (!spread) {
      throw new Error(`Unknown spread type: ${spreadType}`);
    }
    
    const cards = this.drawCards(spread.positions.length);
    
    // Assign proper position names
    cards.forEach((drawnCard, index) => {
      drawnCard.position = spread.positions[index].name;
    });
    
    return {
      spread,
      cards,
      timestamp: new Date().toISOString()
    };
  }
  
  interpretYesNo(card: DrawnCard): {
    answer: 'yes' | 'no' | 'maybe';
    explanation: string;
  } {
    // Simple yes/no interpretation logic
    const positiveCards = ['The Sun', 'The Star', 'The World', 'Ace of Cups', 'Nine of Cups', 'Ten of Cups'];
    const negativeCards = ['The Tower', 'Death', 'Five of Swords', 'Three of Swords', 'Five of Cups', 'Ten of Swords'];
    
    const cardName = card.card.name;
    
    if (!card.reversed && positiveCards.includes(cardName)) {
      return { answer: 'yes', explanation: 'The cards indicate a positive outcome' };
    } else if (!card.reversed && negativeCards.includes(cardName)) {
      return { answer: 'no', explanation: 'The cards suggest challenges ahead' };
    } else if (card.reversed) {
      // Reversed cards often indicate delays or need for reconsideration
      return { answer: 'maybe', explanation: 'The reversed card suggests uncertainty or delays' };
    }
    
    // Default to maybe for neutral cards
    return { answer: 'maybe', explanation: 'The outcome is uncertain and depends on your actions' };
  }
  
  getAvailableSpreads(): string[] {
    return Object.keys(SPREADS);
  }
}
