# MCP Tarot Tool

A Model Context Protocol (MCP) server that provides tarot card reading capabilities. Perfect for when you need "a way to get things moving" - providing structured randomness for reflection and decision-making.

## Features

- Multiple spread types:
  - Celtic Cross (10 cards) - comprehensive life situations
  - Three Card (Past/Present/Future) 
  - Single Card - daily guidance
  - Yes/No - simple decision making
- Realistic card reversal probabilities (30-50%)
- Full 78-card deck (22 Major Arcana + 56 Minor Arcana)
- Context-aware readings with optional questions

## Installation

```bash
npm install
npm run build
```

## Configuration

Add to your MCP client configuration:

```json
{
  "tools": {
    "tarot": {
      "command": "node",
      "args": ["/path/to/mcp-tarot-tool/build/index.js"]
    }
  }
}
```

## Usage

The tool provides three main functions:

### 1. Draw Tarot Cards
Perform a full reading with a specific spread:
```
draw_tarot_cards(spread: "celtic-cross", question: "Should I change careers?")
```

### 2. Quick Guidance  
Get a single card for immediate insight:
```
quick_guidance(situation: "Feeling stuck on this project")
```

### 3. List Spreads
See all available spread types:
```
list_spreads()
```

## Philosophy

This tool embraces tarot as a projection system and thinking tool rather than mystical divination. It's designed to:
- Break mental blocks
- Provide new perspectives
- Encourage reflection
- Add structured randomness to decision-making

As discovered in our own Celtic Cross reading about whether to build this tool - sometimes the cards tell you that you don't need something, and then you realize that's exactly why you should build it!

## Development

```bash
npm run dev  # Watch mode for development
npm run build  # Build for production
```

## License

MIT
