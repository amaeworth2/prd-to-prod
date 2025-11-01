# Phase 2: Implementation Prompts for AI Coding Assistants
## Executing Individual Tickets with Claude Code or Gemini

These prompts are designed to be fed to AI coding assistants (Claude Code, Gemini Code) to implement specific features. Each ticket should be implemented one at a time, in order.

---

## Prerequisites

Before starting Phase 2, ensure you have:
- ✅ All Phase 1 foundation documents (spec.md, guardrails.md, acceptance_criteria.md)
- ✅ GitHub Codespace running
- ✅ API keys ready (Google Maps, MARTA Bus, MARTA Train)
- ✅ Understanding of the project structure

---

## How to Use These Prompts

1. **Copy the prompt template** for the ticket you're implementing
2. **Replace placeholders** with actual content from your Phase 1 documents
3. **Paste to Claude Code or Gemini** in your development environment
4. **Review the implementation** before accepting
5. **Test according to acceptance criteria**
6. **Mark ticket complete** only after all tests pass

---

## Epic MS-01: Project Setup & Core Features

### Ticket MS-01.01: Project Setup

#### Prompt Template (S.P.A.R.K Framework)

```
You are an AI coding assistant helping me set up the Atlanta FIFA Navigator project.

# SITUATION
I'm starting a new Next.js project from scratch in a GitHub Codespace. I need a complete, reproducible development environment that:
- Uses Next.js 14+ with App Router
- Uses TypeScript in strict mode
- Uses Prisma ORM with SQLite
- Uses pnpm as the package manager
- Automatically sets up when the Codespace launches

# PURPOSE
Create a project foundation that allows any developer to clone the repository, launch a Codespace, and immediately start developing without manual setup steps.

# AUDIENCE
This is for a student learning full-stack web development. The setup must be clear, well-documented, and follow best practices.

# ROADMAP
1. Initialize Next.js project with all required dependencies
2. Set up Prisma with SQLite
3. Configure Tailwind CSS
4. Create .devcontainer configuration for Codespaces
5. Create environment variable templates

# KNOWLEDGE
Here are the requirements from our spec.md:
[PASTE RELEVANT SECTIONS FROM spec.md]

Here are the guardrails we must follow:
[PASTE RELEVANT SECTIONS FROM guardrails.md]

Here are the acceptance criteria:
[PASTE RELEVANT SECTIONS FROM acceptance_criteria.md]

## IMPLEMENTATION INSTRUCTIONS

Please implement this milestone following these exact steps:

1. **Initialize Next.js**:
   - Use command: `pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
   - Confirm the project structure uses the App Router

2. **Install and Configure Prisma**:
   - Install Prisma: `pnpm add -D prisma` and `pnpm add @prisma/client`
   - Initialize: `pnpm prisma init --datasource-provider sqlite`
   - Create the following Prisma schema:

```prisma
// This is your Prisma schema file
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Event {
  id        String   @id @default(cuid())
  homeTeam  String
  awayTeam  String
  venue     String
  venueId   String
  date      DateTime
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Venue {
  id        String   @id @default(cuid())
  name      String
  address   String
  latitude  Float
  longitude Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model User {
  id        String   @id @default(cuid())
  language  String   @default("en")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

3. **Create Environment Files**:
   - Create `.env` with: `DATABASE_URL="file:./dev.db"`
   - Create `.env.example` with placeholder values for all required API keys

4. **Configure Codespaces**:
   - Create `.devcontainer/devcontainer.json`
   - Create `.devcontainer/postCreate.sh` that runs `pnpm install` and `pnpm prisma migrate dev`

5. **Run Initial Migration**:
   - Execute: `pnpm prisma migrate dev --name init`

## VERIFICATION

After implementation, verify:
- [ ] `pnpm dev` starts without errors
- [ ] `prisma/dev.db` file exists
- [ ] No TypeScript errors
- [ ] Project follows all guardrails

Please implement this now.
```

---

### Ticket MS-01.02-A: Base Map Component

#### Prompt Template (S.P.A.R.K Framework)

```
You are an AI coding assistant helping me build the base map component for the Atlanta FIFA Navigator.

# SITUATION
The project is initialized, but the main page is blank. I need to integrate Google Maps as the primary visual element of the application.

# PURPOSE
Create a full-screen, interactive Google Map centered on Atlanta that will serve as the canvas for all other features (transit markers, venue pins, etc.).

# AUDIENCE
This is for a student learning React and third-party API integration. The implementation should demonstrate best practices for client-side API integration in Next.js.

# ROADMAP
1. Install the approved Google Maps library (@vis.gl/react-google-maps)
2. Create a reusable MapView component
3. Configure API key loading from environment variables
4. Apply full-screen styling
5. Render the component on the main page

# KNOWLEDGE
Here are the requirements from our spec.md:
[PASTE MAP COMPONENT REQUIREMENTS FROM spec.md]

Here are the guardrails:
- MUST use @vis.gl/react-google-maps (not other libraries)
- API key MUST use NEXT_PUBLIC_ prefix for client-side access
- Map MUST load in under 3 seconds
- MUST be full-screen with no scrollbars

Here are the acceptance criteria:
- [ ] Map renders and fills entire screen
- [ ] Map is centered on Atlanta (33.749, -84.388)
- [ ] Map is interactive (pan and zoom)
- [ ] No console errors

## IMPLEMENTATION INSTRUCTIONS

1. **Install the library**:
   ```bash
   pnpm add @vis.gl/react-google-maps
   ```

2. **Create `src/components/MapView.tsx`**:
   - Make it a client component (`'use client'`)
   - Import APIProvider and Map from @vis.gl/react-google-maps
   - Center on Atlanta coordinates
   - Set zoom level to 12
   - Use gestureHandling: 'greedy' for smooth interaction
   - Disable default UI controls

3. **Update `src/app/page.tsx`**:
   - Import and render the MapView component
   - Apply h-screen and w-screen classes

4. **Update `src/app/globals.css`**:
   - Ensure html and body are 100% height
   - Set overflow: hidden to prevent scrollbars

5. **Update `.env.example`**:
   - Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY placeholder

## IMPORTANT NOTES

- The API key MUST be accessed via `process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- The student will need to create their own `.env.local` file with their actual key
- Include helpful comments explaining the Next.js client-side environment variable pattern

## VERIFICATION

After implementation, verify:
- [ ] Map renders successfully
- [ ] Map is full-screen
- [ ] Can pan and zoom
- [ ] No console errors
- [ ] Follows all guardrails

Please implement this now.
```

---

### Ticket MS-01.03-A: MARTA Bus API Integration

#### Prompt Template (F.O.C.U.S Framework)

```
You are an AI coding assistant helping me integrate the MARTA Bus API.

# FRAME
We need to fetch real-time bus location data from MARTA's API and display it on our map. This data will update every 30 seconds to show buses moving through Atlanta.

# OBJECTIVE
Create a server-side data fetching function that:
1. Calls the MARTA Bus API with proper authentication
2. Transforms the API response into our standardized format
3. Handles errors gracefully
4. Caches responses appropriately

# CONSTRAINTS
- API calls MUST be server-side only (API key must not be exposed to client)
- Must use Next.js 14 Route Handlers
- Must implement 30-second cache revalidation
- Must return empty array on error (not throw exceptions)
- Must transform data to match TransitVehicle type

# USERS
- Students learning server-side API integration in Next.js
- End users who will see real-time bus positions on the map

# STEPS

## 1. Define the TypeScript type:

Create or update `src/types/transit.ts`:
```typescript
export interface TransitVehicle {
  id: string;
  lat: number;
  lon: number;
  route: string;
  type: 'bus' | 'train';
}
```

## 2. Create data fetching utility:

Create `src/lib/marta.ts`:
- Import the TransitVehicle type
- Create constant for MARTA Bus API URL (include API key from env)
- Create async function `fetchBusData()` that:
  - Fetches from MARTA API with 30s revalidation
  - Checks response.ok before parsing
  - Transforms each bus into TransitVehicle format
  - Returns empty array on any error
  - Logs errors to console

MARTA Bus API details:
- Endpoint: `https://developerservices.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus`
- Response format: Array of objects with VEHICLE, LATITUDE, LONGITUDE, ROUTE fields
- Map to: id (VEHICLE), lat (LATITUDE), lon (LONGITUDE), route (ROUTE), type ('bus')

## 3. Create API route:

Create `src/app/api/transit/route.ts`:
- Import fetchBusData
- Export async GET function
- Call fetchBusData()
- Return JSON response with { buses }
- Handle errors with 500 status

## 4. Update environment files:

- Add MARTA_BUS_API_KEY to `.env.example`
- Document that student needs to add their key to `.env.local`

## GUARDRAILS TO FOLLOW
[PASTE RELEVANT GUARDRAILS FROM guardrails.md]

## ACCEPTANCE CRITERIA
[PASTE RELEVANT CRITERIA FROM acceptance_criteria.md]

## VERIFICATION

After implementation, verify:
- [ ] `/api/transit` endpoint returns bus data
- [ ] Data matches TransitVehicle type
- [ ] API key is not exposed to client
- [ ] Returns empty array on error
- [ ] Response is cached for 30s

Please implement this now.
```

---

### Ticket MS-01.03-B: MARTA Train API with Codespaces Proxy

#### Prompt Template (F.O.C.U.S Framework)

```
You are an AI coding assistant helping me integrate the MARTA Train API with environment-aware proxy logic.

# FRAME
The MARTA Train API runs on port 18096, which is blocked by GitHub Codespaces for security reasons. We need to implement conditional logic that:
- Uses a CORS proxy when running in Codespaces
- Uses direct connection in production (Vercel)
- Automatically detects the environment

# OBJECTIVE
Create an environment-aware data fetching function that seamlessly works in both Codespaces and production without manual configuration.

# CONSTRAINTS
- Proxy MUST ONLY be used in Codespaces (not production)
- Must use process.env variables for environment detection
- Approved proxy: https://api.allorigins.win/raw?url=
- Must encodeURIComponent when passing URL to proxy
- Must deduplicate trains by TRAIN_ID
- Must log which connection method is being used

# USERS
- Students working in GitHub Codespaces (will use proxy automatically)
- Production users (will use direct connection)

# STEPS

## 1. Create environment detection utility:

Create `src/lib/codespaces.ts`:
```typescript
export function isRunningInCodespaces(): boolean {
  return process.env.CODESPACES === 'true' ||
         !!process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN;
}
```

## 2. Add train data fetching to `src/lib/marta.ts`:

- Import isRunningInCodespaces
- Create constant for MARTA Train API URL (port 18096 with API key)
- Create async function `fetchTrainData()` that:
  - Detects environment using isRunningInCodespaces()
  - If Codespaces: wraps URL with proxy and logs "Using proxy for MARTA Train API"
  - If not Codespaces: uses direct URL and logs "Using direct connection"
  - Fetches with 30s revalidation
  - Parses JSON array response
  - Deduplicates by TRAIN_ID (use Map)
  - Transforms to TransitVehicle format
  - Returns empty array on error

MARTA Train API details:
- Endpoint: `https://developerservices.itsmarta.com:18096/itsmarta/railrealtimearrivals/developerservices/traindata?apiKey=YOUR_KEY`
- Response format: Array with TRAIN_ID, LATITUDE, LONGITUDE, LINE fields
- Map to: id (TRAIN_ID), lat (LATITUDE), lon (LONGITUDE), route (LINE), type ('train')
- Note: API may return duplicate TRAIN_ID entries - must deduplicate

## 3. Update API route `src/app/api/transit/route.ts`:

- Import fetchTrainData
- Fetch both buses and trains in parallel using Promise.all
- Return JSON with { buses, trains }

## 4. Update environment files:

- Add MARTA_TRAIN_API_KEY to `.env.example`

## CRITICAL GUARDRAILS

**Environment Detection**:
- MUST check CODESPACES env var explicitly
- MUST NOT use proxy in production
- MUST log which method is being used

**Security**:
- API key MUST be in environment variable
- MUST use encodeURIComponent when building proxy URL
- MUST be server-side only

**Data Quality**:
- MUST deduplicate trains by TRAIN_ID
- MUST handle empty responses gracefully

## ACCEPTANCE CRITERIA
[PASTE RELEVANT CRITERIA FROM acceptance_criteria.md]

## VERIFICATION

Test in Codespaces:
- [ ] Console shows "Using proxy" message
- [ ] `/api/transit` returns train data
- [ ] No CORS errors

Test in production (or locally):
- [ ] Console shows "Direct connection" message
- [ ] `/api/transit` returns train data
- [ ] No port blocking issues

Please implement this now, paying special attention to the environment detection logic.
```

---

### Ticket MS-01.03-C: Display Transit Markers on Map

#### Prompt Template (I.D.E.A Framework)

```
You are an AI coding assistant helping me display real-time transit vehicles on the map.

# ISSUE
The map is visible, and we have transit data from the API, but users can't see where the buses and trains are. We need visual markers on the map that update in real-time.

# DETAILS
Requirements:
- Fetch transit data from `/api/transit` endpoint
- Display markers for each bus and train
- Different colors for buses vs trains
- Update positions every 30 seconds
- Show route information on marker hover
- Handle loading and error states gracefully

Technical approach:
- Use React state to store transit data
- Use useEffect to fetch data on mount and set up interval
- Use @vis.gl/react-google-maps AdvancedMarker component
- Color code: Buses (blue), Trains (red)

# EXAMPLE
Similar to how Uber shows cars moving on the map, our buses and trains should appear as markers that update their positions smoothly as new data comes in.

# ACTION

## 1. Create TransitMarkers component:

Create `src/components/TransitMarkers.tsx`:
- Make it a client component
- Import AdvancedMarker from @vis.gl/react-google-maps
- Import TransitVehicle type
- Create state for buses and trains
- Create state for loading and error
- Create useEffect to:
  - Fetch from `/api/transit` on mount
  - Set up 30-second interval for updates
  - Clean up interval on unmount
- Render AdvancedMarker for each vehicle
- Use different background colors for bus vs train
- Show route number inside marker
- Add title attribute for hover info

## 2. Update MapView component:

In `src/components/MapView.tsx`:
- Import TransitMarkers
- Render TransitMarkers inside the Map component

## 3. Add error handling:

- Log fetch errors to console
- Continue showing previous data if fetch fails
- Show user-friendly message if initial load fails

## STYLING

Marker appearance:
- Size: 32x32px
- Border radius: 50% (circular)
- Text: white, centered, bold
- Bus color: #3B82F6 (blue)
- Train color: #EF4444 (red)
- Box shadow for visibility

## GUARDRAILS
[PASTE RELEVANT GUARDRAILS FROM guardrails.md]

## ACCEPTANCE CRITERIA
[PASTE RELEVANT CRITERIA FROM acceptance_criteria.md]

## VERIFICATION

After implementation, verify:
- [ ] Markers appear on map
- [ ] Buses are blue, trains are red
- [ ] Markers update every 30 seconds
- [ ] Route info shows on hover
- [ ] No console errors
- [ ] Works even if API temporarily fails

Please implement this now.
```

---

### Ticket MS-01.04: Display Mock FIFA Schedule

#### Prompt Template (S.T.A.G.E Framework)

```
You are an AI coding assistant helping me create and display a mock FIFA match schedule.

# SCENARIO
Users need to see upcoming FIFA matches in Atlanta so they can plan their transit. We need to seed the database with realistic mock data and create a UI component to display it.

# TASK
1. Create seed data with 10 mock FIFA matches
2. Create API endpoint to fetch events
3. Create EventList component to display matches
4. Make clicking an event center the map on that venue

# APPROACH

## Part 1: Database Seeding

Create `prisma/seed.ts`:
- Import PrismaClient
- Create 3 venue objects (Mercedes-Benz Stadium, etc.) with real Atlanta coordinates
- Create 10 match objects with realistic teams, dates, and venues
- Use prisma.venue.upsert() and prisma.event.upsert()
- Handle both venues and events

Sample data structure:
```typescript
const venues = [
  {
    id: 'venue-1',
    name: 'Mercedes-Benz Stadium',
    address: '1 AMB Drive NW, Atlanta, GA 30313',
    latitude: 33.7553,
    longitude: -84.4006
  },
  // ... more venues
];

const events = [
  {
    id: 'event-1',
    homeTeam: 'Brazil',
    awayTeam: 'Argentina',
    venue: 'Mercedes-Benz Stadium',
    venueId: 'venue-1',
    date: new Date('2026-06-15T19:00:00')
  },
  // ... more events
];
```

Update package.json:
```json
"prisma": {
  "seed": "tsx prisma/seed.ts"
}
```

## Part 2: API Endpoint

Create `src/app/api/events/route.ts`:
- Import PrismaClient
- Create singleton instance
- Export async GET function
- Fetch all events, ordered by date
- Include venue data in response
- Return JSON
- Handle errors with 500 status

## Part 3: EventList Component

Create `src/components/EventList.tsx`:
- Make it a client component
- Accept onEventClick callback prop
- Fetch events from `/api/events`
- Display loading state
- Display events in a styled list
- Show: teams, venue name, formatted date/time
- Make each event clickable
- Call onEventClick with venue coordinates

## Part 4: Update MapView

In `src/components/MapView.tsx`:
- Add state for map center
- Create handler to update center when event is clicked
- Add EventList component in a sidebar
- Pass event click handler
- Update Map component to use center state

## GUARDRAILS
[PASTE RELEVANT GUARDRAILS FROM guardrails.md]

## EXECUTION
1. Implement seed script
2. Run: `pnpm prisma db seed`
3. Implement API route
4. Implement EventList component
5. Update MapView
6. Test end-to-end

## VERIFICATION

After implementation, verify:
- [ ] Seed script runs successfully
- [ ] Database contains 10 events
- [ ] `/api/events` returns event data
- [ ] EventList displays matches
- [ ] Clicking event centers map
- [ ] Dates are formatted correctly
- [ ] No console errors

Please implement this now, starting with the seed script.
```

---

## Epic MS-02: Internationalization

### Ticket MS-02.01-A: i18n Setup

#### Prompt Template (F.O.C.U.S Framework)

```
You are an AI coding assistant helping me set up internationalization for 4 languages.

# FRAME
The application is currently English-only, but we need to support users who speak Spanish, German, and Korean. We need a robust i18n system that allows seamless language switching without page reloads.

# OBJECTIVE
Set up next-intl library with 4 languages and create translation files for all static text in the application.

# CONSTRAINTS
- Must support: English (en), Spanish (es), German (de), Korean (ko)
- Must not require page reload to change language
- Must store user language preference
- Translation keys must be organized by feature/component
- Must support RTL if needed in future

# USERS
- English speakers (primary)
- Spanish speakers (FIFA fans from Latin America)
- German speakers (European visitors)
- Korean speakers (Asian visitors)

# STEPS

## 1. Install next-intl:

```bash
pnpm add next-intl
```

## 2. Create translation files:

Create `messages/en.json`:
```json
{
  "common": {
    "appName": "Atlanta FIFA Navigator",
    "loading": "Loading...",
    "error": "An error occurred"
  },
  "map": {
    "transit": {
      "buses": "Buses",
      "trains": "Trains",
      "route": "Route {route}"
    }
  },
  "events": {
    "title": "Upcoming Matches",
    "at": "at",
    "vs": "vs"
  },
  "language": {
    "select": "Select Language",
    "en": "English",
    "es": "Español",
    "de": "Deutsch",
    "ko": "한국어"
  }
}
```

Create `messages/es.json`, `messages/de.json`, `messages/ko.json` with translations.

## 3. Configure next-intl:

Create `src/i18n.ts`:
- Import and configure next-intl
- Set up locale detection
- Export functions for translation

Update `next.config.mjs`:
- Add i18n configuration

## 4. Create language context:

Create `src/contexts/LanguageContext.tsx`:
- Create context for current language
- Create provider with state
- Store preference in localStorage
- Export hook: useLanguage()

## 5. Update root layout:

In `src/app/layout.tsx`:
- Wrap application in NextIntlClientProvider
- Wrap in LanguageProvider
- Load appropriate message file based on language

## GUARDRAILS
[PASTE RELEVANT GUARDRAILS FROM guardrails.md]

## ACCEPTANCE CRITERIA
- [ ] 4 translation files exist with complete translations
- [ ] Application doesn't break when language changes
- [ ] Translation keys follow consistent naming convention
- [ ] Default language is English

Please implement the i18n infrastructure now.
```

---

### Ticket MS-02.01-B: Language Switcher Component

#### Prompt Template (I.D.E.A Framework)

```
You are an AI coding assistant helping me create a language switcher UI component.

# ISSUE
Users need a clear, accessible way to change the application language. The switcher should be always visible and show the current language.

# DETAILS
Requirements:
- Display flags or language codes
- Show current selection
- Dropdown or button group style
- Accessible (keyboard navigation)
- Persist selection
- No page reload

Design:
- Position: Top-right corner of map
- Style: Floating button with dropdown
- Options: EN | ES | DE | KO
- Current language highlighted

# EXAMPLE
Similar to Google Translate's language selector - compact, clear, and intuitive.

# ACTION

## 1. Create LanguageSwitcher component:

Create `src/components/LanguageSwitcher.tsx`:
- Make it a client component
- Import useLanguage hook
- Create state for dropdown open/closed
- Map language codes to display names
- Render floating button with current language
- Render dropdown menu with all options
- Call setLanguage from context when user selects
- Close dropdown after selection

Styling:
- Position: absolute, top-right
- Z-index: high (above map)
- Background: white with shadow
- Hover effects
- Smooth transitions

## 2. Update MapView:

In `src/components/MapView.tsx`:
- Import LanguageSwitcher
- Add to component tree
- Position in top-right corner

## 3. Translate all components:

Update these components to use useTranslations():
- EventList.tsx
- TransitMarkers.tsx
- Error messages

Replace hardcoded text with translation keys:
```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('events');
<h2>{t('title')}</h2>
```

## 4. Add accessibility:

- Aria labels for language options
- Keyboard navigation (Tab, Enter, Escape)
- Screen reader announcements
- Focus management

## GUARDRAILS
[PASTE RELEVANT GUARDRAILS FROM guardrails.md]

## ACCEPTANCE CRITERIA
[PASTE RELEVANT CRITERIA FROM acceptance_criteria.md]

## VERIFICATION

After implementation, verify:
- [ ] Language switcher visible in top-right
- [ ] Current language is highlighted
- [ ] Clicking changes language immediately
- [ ] All text updates to new language
- [ ] Selection persists on page reload
- [ ] Keyboard navigation works
- [ ] No console errors

Please implement this now.
```

---

## Phase 2 Completion Checklist

After implementing all tickets, verify:

### Epic MS-01 Verification:
- [ ] Project runs in Codespaces without manual setup
- [ ] Map displays full-screen centered on Atlanta
- [ ] Real-time bus markers appear (blue)
- [ ] Real-time train markers appear (red)
- [ ] Markers update every 30 seconds
- [ ] Train API uses proxy in Codespaces
- [ ] Mock match schedule displays
- [ ] Clicking event centers map on venue

### Epic MS-02 Verification:
- [ ] All 4 languages work (EN, ES, DE, KO)
- [ ] Language switcher is visible and functional
- [ ] Language preference persists
- [ ] No English fallbacks in other languages
- [ ] All components are translated

### Overall Verification:
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] All acceptance criteria met
- [ ] Performance targets met (<3s load time)
- [ ] All guardrails followed

---

## Next Steps

Once all implementations and tests pass, proceed to:
- **Phase 3**: [03-PHASE-3-Milestone-Prompts.md](./03-PHASE-3-Milestone-Prompts.md) to document your work in milestone format
