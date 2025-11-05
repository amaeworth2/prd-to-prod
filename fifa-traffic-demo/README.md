# FIFA Traffic Navigator

A Next.js application for navigating FIFA events with real-time traffic and transit information.

## Features

- 🗺️ Google Maps integration with traffic layer
- 🚌 MARTA Bus & Train API integration
- ⚽ FIFA event schedule
- 🌍 Multi-language support (EN, ES, DE, KO)
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
```

### Development

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── [lang]/          # Internationalized routes
│   └── api/             # API routes
├── components/          # React components
├── lib/                 # Utility functions
└── types/               # TypeScript types
```

## Environment Variables

See `.env.example` for required environment variables:

- `NEXT_PUBLIC_GMAK` - Google Maps API key
- `MARTA_API_KEY` - MARTA Bus API key
- `MARTA_TRAIN_API_KEY` - MARTA Train API key

## License

MIT
