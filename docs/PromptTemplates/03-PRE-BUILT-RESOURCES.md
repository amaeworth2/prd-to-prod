# Pre-Built Resources Reference
## What Students Already Have in Their Environment

This document catalogs all the pre-configured resources available to students so AI assistants can reference them when generating prompts.

---

## DevContainer Configuration

### Location
`.devcontainer/devcontainer.json`

### What's Included
```json
{
  "name": "FIFA Navigator Dev Environment",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    }
  },
  "postCreateCommand": "pnpm install && pnpm prisma generate",
  "forwardPorts": [3000, 5555],
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "Prisma.prisma",
        "bradlc.vscode-tailwindcss"
      ]
    }
  }
}
```

### What This Means for Students
- ✅ Node.js 20 pre-installed
- ✅ pnpm pre-installed
- ✅ Dependencies auto-install on Codespace launch
- ✅ Prisma client auto-generated
- ✅ Ports 3000 (Next.js) and 5555 (Prisma Studio) forwarded
- ✅ VS Code extensions for ESLint, Prettier, Prisma, Tailwind

### When Generating Prompts
**Always mention**: "Your devcontainer is already configured with everything you need. Dependencies will install automatically when you launch the Codespace."

**Never tell students to**:
- Install Node.js, install pnpm globally, configure VS Code extensions manually
- Modify .devcontainer in any way
- Install system packages or configure the container
- Change any devcontainer settings

**The devcontainer is DONE. Students don't touch it.**

---

## Environment Variables (.env)

### Location
`.env` (students add their keys)
`.env.example` (template provided)

### Pre-Configured Variables
```bash
# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# MARTA APIs
MARTA_BUS_API_KEY=your_key_here
MARTA_TRAIN_API_KEY=your_key_here

# Database
DATABASE_URL="file:./dev.db"

# Environment Detection (auto-set by Codespaces)
CODESPACES=true
GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN=auto-set
```

### What Students Need to Do
Students must:
1. Bring their own API keys from:
   - Google Cloud Console (Maps API)
   - MARTA Developer Portal (Bus & Train APIs)
2. Add keys to their .env file (copy from .env.example and fill in)
3. Restart dev server after adding keys

**Note**: The .env file itself is NOT pre-created (in .gitignore). Students copy .env.example to .env and add their keys.

### What's Auto-Configured
- `DATABASE_URL`: Already set to SQLite file path
- `CODESPACES`: Auto-set by GitHub when in Codespaces
- `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`: Auto-set by GitHub

### When Generating Prompts
**Always mention**: "Your .env file is already set up with the correct variable names. Just add your API keys."

**Always include**: Instructions on where to get API keys if not already provided.

**Security reminder**: "Never commit .env to git. It's already in .gitignore."

---

## Tech Notes in docs/

### Available Tech Notes

#### 1. docs/TechNotes/MARTA-Bus-API.md
**Content**:
- API endpoint: `https://developerservices.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus`
- Authentication: API key in URL
- Response format: JSON array
- Field mapping:
  - `VEHICLE` → vehicle ID
  - `LATITUDE` → latitude
  - `LONGITUDE` → longitude
  - `ROUTE` → route number/name
- Update frequency: ~30 seconds
- Example request and response

#### 2. docs/TechNotes/MARTA-Train-API.md
**Content**:
- API endpoint: `https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=YOUR_KEY`
- **Important**: Port 18096 is blocked by GitHub Codespaces
- Authentication: API key in query param
- Response format: JSON array
- Field mapping:
  - `TRAIN_ID` → train ID (may have duplicates, must deduplicate)
  - `LATITUDE` → latitude
  - `LONGITUDE` → longitude
  - `LINE` → line name (Red, Gold, Blue, Green)
- Update frequency: ~30 seconds
- Example request and response

#### 3. docs/TechNotes/Codespaces-Proxy-Solution.md
**Content**:
- **Problem**: Codespaces blocks outbound connections to non-standard ports (18096)
- **Solution**: Use CORS proxy only in Codespaces
- **Proxy**: `https://api.allorigins.win/raw?url=`
- **Usage**: `https://api.allorigins.win/raw?url=${encodeURIComponent(TRAIN_API_URL)}`
- **Environment Detection**:
  ```typescript
  function isRunningInCodespaces(): boolean {
    return process.env.CODESPACES === 'true' ||
           !!process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN;
  }
  ```
- **Important**: Only use proxy in Codespaces, NOT in production
- Example implementation code

#### 4. docs/TechNotes/Google-Maps-Integration.md
**Content**:
- **Approved library**: `@vis.gl/react-google-maps`
- **Why this library**: Official Google-maintained, React 18 compatible, TypeScript support
- **Installation**: `pnpm add @vis.gl/react-google-maps`
- **API key**: Must use `NEXT_PUBLIC_` prefix for client-side access
- **Basic usage**:
  ```typescript
  import { APIProvider, Map } from '@vis.gl/react-google-maps';

  <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
    <Map defaultCenter={{ lat: 33.749, lng: -84.388 }} defaultZoom={12} />
  </APIProvider>
  ```
- **Atlanta coordinates**: `{ lat: 33.749, lng: -84.388 }`
- Marker examples
- Styling tips

#### 5. docs/TechNotes/i18n-Next-Setup.md
**Content**:
- **Approved library**: `next-intl`
- **Why this library**: Next.js App Router compatible, no page reloads, locale detection
- **Installation**: `pnpm add next-intl`
- **Required languages**: English (en), Spanish (es), German (de), Korean (ko)
- **Folder structure**:
  ```
  messages/
  ├── en.json
  ├── es.json
  ├── de.json
  └── ko.json
  ```
- **Basic setup code** for providers and hooks
- **Translation file structure** example
- **Usage in components**:
  ```typescript
  import { useTranslations } from 'next-intl';
  const t = useTranslations('namespace');
  <h1>{t('key')}</h1>
  ```

#### 6. docs/TechNotes/Prisma-SQLite-Setup.md
**Content**:
- **Why SQLite**: Simple for development, no server needed, file-based
- **Schema location**: `prisma/schema.prisma`
- **Commands**:
  - Init: `pnpm prisma init --datasource-provider sqlite`
  - Migrate: `pnpm prisma migrate dev --name init`
  - Studio: `pnpm prisma studio`
  - Generate: `pnpm prisma generate`
- **Recommended models** for this project:
  - Event (FIFA matches)
  - Venue (stadiums)
  - User (language preferences)
- **Example schema**
- **Seed data** approach

### When Generating Prompts
**Always reference relevant tech notes**: "See docs/TechNotes/Codespaces-Proxy-Solution.md for the proxy implementation details."

**Never reinvent**: If a tech note covers it, reference it instead of explaining from scratch.

**Link specifically**: Point to exact file, not just "docs folder."

---

## Project Structure (Already Created)

### Folder Structure
```
fifa-navigator/
├── .devcontainer/
│   └── devcontainer.json          ✅ Pre-configured
├── docs/
│   └── TechNotes/                 ✅ Pre-written guides
│       ├── MARTA-Bus-API.md
│       ├── MARTA-Train-API.md
│       ├── Codespaces-Proxy-Solution.md
│       ├── Google-Maps-Integration.md
│       ├── i18n-Next-Setup.md
│       └── Prisma-SQLite-Setup.md
├── .env.example                   ✅ Template provided
├── .gitignore                     ✅ Pre-configured
├── package.json                   ✅ Will be created by students
├── next.config.mjs                ✅ Will be created by students
├── tsconfig.json                  ✅ Will be created by students
└── README.md                      ✅ Basic project info
```

### What Students Will Create
```
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/
│   │       ├── transit/route.ts
│   │       └── events/route.ts
│   ├── components/
│   │   ├── MapView.tsx
│   │   ├── TransitMarkers.tsx
│   │   ├── EventList.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── lib/
│   │   ├── marta.ts
│   │   └── codespaces.ts
│   ├── types/
│   │   └── transit.ts
│   └── contexts/
│       └── LanguageContext.tsx
├── prisma/
│   ├── schema.prisma
│   ├── dev.db                     (generated)
│   └── seed.ts
└── messages/
    ├── en.json
    ├── es.json
    ├── de.json
    └── ko.json
```

---

## Tech Stack (Approved & Pre-Decided)

### Core Framework
- **Next.js**: Version 14+ with App Router
- **TypeScript**: Version 5+ in strict mode
- **Package Manager**: pnpm (not npm or yarn)

### Database
- **ORM**: Prisma
- **Database**: SQLite for development
- **Client**: Auto-generated by Prisma

### Styling
- **Framework**: Tailwind CSS
- **Approach**: Utility-first
- **Config**: Default Next.js Tailwind setup

### Maps
- **Library**: `@vis.gl/react-google-maps`
- **API**: Google Maps JavaScript API
- **Not Allowed**: react-google-maps, google-map-react, or other alternatives

### APIs
- **MARTA Bus**: REST API, direct connection
- **MARTA Train**: REST API, proxy in Codespaces
- **Google Maps**: JavaScript API

### Internationalization
- **Library**: next-intl
- **Languages**: EN, ES, DE, KO
- **Approach**: JSON translation files

### When Generating Prompts
**Always enforce approved tech**: "You must use @vis.gl/react-google-maps. Do not use any other Google Maps library."

**Never suggest alternatives**: Don't say "or you could use X instead."

**Reference decisions**: "We've chosen SQLite for development because..."

---

## Commands Available

### Development
```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Database
```bash
# Create migration
pnpm prisma migrate dev --name [migration_name]

# Open Prisma Studio
pnpm prisma studio

# Generate Prisma Client
pnpm prisma generate

# Seed database
pnpm prisma db seed
```

### Linting & Formatting
```bash
# Run ESLint
pnpm lint

# Run Prettier (if configured)
pnpm format
```

### When Generating Prompts
**Use exact commands**: Always use `pnpm`, never `npm` or `yarn`.

**Explain what commands do**: "This command creates a new database migration and applies it."

---

## What Students DON'T Have (Yet)

❌ .env file with their actual API keys (they copy .env.example → .env and add keys)
❌ Next.js project initialized
❌ package.json and dependencies
❌ Prisma schema defined
❌ Any React components
❌ Any API routes
❌ Translation files
❌ Seed data

These will be created during the class following the generated prompts.

**Important**: Students should NEVER need to touch .devcontainer - it's fully configured and working.

---

## How to Reference Resources in Prompts

### Good Examples ✅

"Your devcontainer is already configured with Node.js 20 and pnpm. Dependencies will install automatically when you launch the Codespace."

"See docs/TechNotes/Codespaces-Proxy-Solution.md for the complete proxy implementation pattern."

"Your .env file has the correct variable names. Just add your Google Maps API key after `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=`"

"Reference docs/TechNotes/MARTA-Train-API.md for the API endpoint and field mappings."

### Bad Examples ❌

"First, install Node.js on your machine." (❌ Already in devcontainer)

"You'll need to figure out how to handle the Codespaces port blocking." (❌ Tech note covers this)

"Use any Google Maps library you prefer." (❌ Specific library is approved)

"Store your API keys however you want." (❌ .env structure is defined)

---

## Quick Checklist for Prompt Generation

When generating any prompt, verify you've:

- [ ] Referenced the devcontainer (don't ask students to install tools)
- [ ] Pointed to relevant tech notes (don't reinvent documentation)
- [ ] Used approved tech stack (enforce the decisions)
- [ ] Mentioned .env structure (guide students to right format)
- [ ] Used correct commands (pnpm, not npm/yarn)
- [ ] Linked to specific docs files (be precise)
- [ ] Explained available environment variables
- [ ] Noted which VS Code extensions are pre-installed

---

## Summary for AI Assistants

**Students arrive with**:
- Configured development environment (devcontainer)
- Documentation (tech notes in docs/)
- Environment structure (.env.example)
- Project scaffolding (folders, .gitignore, README)

**Students need to do**:
- Get API keys and add to .env
- Initialize Next.js project
- Implement features following generated prompts
- Test and verify

**You (AI) need to**:
- Generate prompts that reference existing resources
- Use appropriate frameworks for each task type
- Never reinvent what's already documented
- Enforce approved tech stack
- Provide clear, actionable instructions
