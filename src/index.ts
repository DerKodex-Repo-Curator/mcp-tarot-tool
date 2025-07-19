#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { TarotEngine } from './tarot-engine';
import { SpreadType } from './spreads/spreads';

const server = new Server(
  {
    name: 'mcp-tarot-tool',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const tarotEngine = new TarotEngine();

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'draw_tarot_cards',
        description: 'Draw tarot cards for a specific spread type',
        inputSchema: {
          type: 'object',
          properties: {
            spread: {
              type: 'string',
              description: 'Type of spread',
              enum: ['celtic-cross', 'three-card', 'single-card', 'yes-no']
            },
            question: {
              type: 'string',
              description: 'Optional question or context for the reading'
            }
          },
          required: ['spread']
        }
      },
      {
        name: 'list_spreads',
        description: 'List all available tarot spreads',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'quick_guidance',
        description: 'Draw a single card for quick guidance - a way to get things moving',
        inputSchema: {
          type: 'object',
          properties: {
            situation: {
              type: 'string',
              description: 'Brief description of what you need guidance on'
            }
          }
        }
      }
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'draw_tarot_cards') {
    const { spread, question } = request.params.arguments as {
      spread: SpreadType;
      question?: string;
    };
    
    try {
      const reading = tarotEngine.performReading(spread);
      
      let result = `🔮 ${reading.spread.name} Reading`;
      if (question) {
        result += `\\nQuestion: ${question}`;
      }
      result += `\\n\\n${reading.spread.description}\\n\\n`;
      
      reading.cards.forEach((drawnCard, index) => {
        const position = reading.spread.positions[index];
        const orientation = drawnCard.reversed ? '(Reversed)' : '';
        
        result += `**${position.name}**: ${drawnCard.card.name} ${orientation}\\n`;
        result += `*${position.description}*\\n`;
        
        const meanings = drawnCard.reversed 
          ? drawnCard.card.reversedMeaning 
          : drawnCard.card.uprightMeaning;
        
        result += `Keywords: ${drawnCard.card.keywords.join(', ')}\\n`;
        result += `Meaning: ${meanings[0]}\\n\\n`;
      });
      
      // Special handling for yes/no spreads
      if (spread === 'yes-no' && reading.cards.length > 0) {
        const interpretation = tarotEngine.interpretYesNo(reading.cards[0]);
        result += `\\n**Answer: ${interpretation.answer.toUpperCase()}**\\n`;
        result += interpretation.explanation;
      }
      
      return {
        content: [
          {
            type: 'text',
            text: result,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Error performing reading: ${error}`,
          },
        ],
      };
    }
  }
  
  if (request.params.name === 'list_spreads') {
    const spreads = tarotEngine.getAvailableSpreads();
    return {
      content: [
        {
          type: 'text',
          text: `Available tarot spreads:\\n${spreads.map(s => `- ${s}`).join('\\n')}`,
        },
      ],
    };
  }
  
  if (request.params.name === 'quick_guidance') {
    const { situation } = request.params.arguments as { situation?: string };
    
    const reading = tarotEngine.performReading('single-card');
    const card = reading.cards[0];
    const orientation = card.reversed ? '(Reversed)' : '';
    
    let result = `✨ Quick Guidance`;
    if (situation) {
      result += ` for: ${situation}`;
    }
    result += `\\n\\n`;
    
    result += `**${card.card.name} ${orientation}**\\n`;
    result += `Keywords: ${card.card.keywords.join(', ')}\\n\\n`;
    
    const meanings = card.reversed 
      ? card.card.reversedMeaning 
      : card.card.uprightMeaning;
    
    result += `Message: ${meanings[0]}\\n\\n`;
    result += `This card suggests a way to get things moving in your situation.`;
    
    return {
      content: [
        {
          type: 'text',
          text: result,
        },
      ],
    };
  }
  
  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('MCP Tarot Tool server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
