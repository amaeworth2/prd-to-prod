# Instructor Quick-Start Guide
## Setting Up and Running "From PRD to Prod"

This guide is for instructors preparing to teach the class.

---

## Pre-Class Setup Checklist

### 1 Week Before Class

- [ ] **Create GitHub Repository**
  - Initialize with .gitignore (Node.js template)
  - Add README with project overview
  - Set repository to public or ensure students have access

- [ ] **Verify DevContainer is Complete**
  - `.devcontainer/devcontainer.json` is already built and tested
  - Test that it launches successfully in Codespaces
  - Verify Node.js 20 and pnpm are available
  - Verify VS Code extensions install automatically
  - **Students will NOT touch this - it's done**

- [ ] **Create Tech Notes**
  - Write docs/TechNotes/MARTA-Bus-API.md
  - Write docs/TechNotes/MARTA-Train-API.md
  - Write docs/TechNotes/Codespaces-Proxy-Solution.md
  - Write docs/TechNotes/Google-Maps-Integration.md
  - Write docs/TechNotes/i18n-Next-Setup.md
  - Write docs/TechNotes/Prisma-SQLite-Setup.md
  - Include code examples in each

- [ ] **Verify Environment Template Exists**
  - `.env.example` should exist with all required variables
  - Should have comments explaining where to get each API key
  - Should include links to API key registration pages
  - **NOTE**: Actual .env file is NOT in repo (gitignored) - students create it

- [ ] **Add Prompt Templates to Repo**
  - Copy all files from docs/PromptTemplates/
  - Ensure students can access them
  - Test that links between documents work

- [ ] **Test the Full Workflow**
  - Launch a fresh Codespace
  - Follow student workflow start to finish
  - Verify all tech notes are accurate
  - Time how long each phase takes
  - Document any issues encountered

### 3 Days Before Class

- [ ] **Get API Keys**
  - Google Maps API key (enable Maps JavaScript API)
  - MARTA Bus API key
  - MARTA Train API key
  - Test that all keys work

- [ ] **Prepare PRD Presentation**
  - Create slides or talking points
  - Include diagrams/screenshots of final app
  - Prepare answers to common questions
  - Have example requirements ready

- [ ] **Send Pre-Class Email to Students**
  ```
  Subject: FIFA Navigator Class - Action Required

  Hi everyone,

  Before class, please:

  1. **Get API keys** (bring them to class - you'll need them!):
     - Google Maps: https://console.cloud.google.com/
       - Create project → Enable Maps JavaScript API → Create credentials
     - MARTA APIs: https://www.itsmarta.com/app-developer-resources.aspx
       - Register for developer account → Get Bus and Train API keys

  2. **Ensure you have GitHub Codespaces access**:
     - Free tier should be sufficient
     - Verify at: https://github.com/codespaces

  3. **Review the prompt framework image**:
     - Located in docs/FromProd/prompt_framework.gif
     - Familiarize yourself with framework names (SPARK, FOCUS, IDEA, etc.)

  4. **First steps in class**:
     - Launch Codespace (will take 2-3 minutes to build)
     - Copy .env.example to .env
     - Add your API keys to .env
     - Run: pnpm dev

  See you in class!
  ```

### Day Before Class

- [ ] **Final Environment Test**
  - Launch new Codespace from main branch
  - Verify devcontainer builds in <5 minutes
  - Check all tech notes are accessible
  - Verify .env.example is present

- [ ] **Prepare Backup Plans**
  - Have API keys ready to share if students forget theirs
  - Have pre-built checkpoints in case students fall behind
  - Prepare troubleshooting guide for common issues

- [ ] **Set Up Class Demo Environment**
  - Launch your own Codespace for live demonstrations
  - Test screen sharing setup
  - Verify students can see your terminal clearly

---

## Class Day Setup

### 30 Minutes Before Class

- [ ] Test internet connection
- [ ] Open instructor Codespace
- [ ] Open prompt template docs
- [ ] Have framework image visible (prompt_framework.gif)
- [ ] Open example PRD (or prepare to write live)
- [ ] Test screen share with terminal and browser

### As Students Arrive

- [ ] Help students launch their Codespaces (will auto-build)
- [ ] Verify students have their API keys ready
- [ ] Instruct students: `cp .env.example .env` then edit .env with their keys
- [ ] Quick environment check: `pnpm --version` should work (will be 8.x)
- [ ] Verify devcontainer built successfully (Node 20, pnpm installed)

---

## Class Execution Guide

### Opening (5 minutes)

**Say**:
- "Today we're doing 'From PRD to Prod' - going from requirements to working code in 3 hours"
- "You have a pre-configured environment with tech notes and examples"
- "We'll use AI (Claude/Gemini) with different prompt frameworks to structure our work"
- "The project: FIFA Navigator for Atlanta World Cup visitors"

**Show**:
- Final application demo (if you've built it beforehand)
- Project repository structure
- Tech notes location
- Prompt templates location

### Phase 1: PRD Presentation (15-20 minutes)

**Present requirements**:
```
We're building the Atlanta FIFA Navigator:

User Story:
"As a FIFA visitor to Atlanta, I want to navigate to matches
using real-time transit data so I can plan my journey efficiently."

Core Features:
1. Interactive map of Atlanta
2. Real-time MARTA bus and train locations
3. FIFA match schedule with venues
4. Multi-language support (EN, ES, DE, KO)

Technical Requirements:
- Next.js 14 with App Router
- Google Maps for visualization
- MARTA APIs for real-time transit
- Must work in GitHub Codespaces
- Smooth animations for transit vehicles

Key Constraint:
- MARTA Train API uses port 18096 (blocked in Codespaces)
- Need environment-aware solution

Success Criteria:
- Map loads in <3 seconds
- Transit markers update every 30 seconds
- Language switching works instantly
- No API keys exposed to client
```

**Take questions** - students should understand what they're building and why.

### Phase 2: Structure Planning (10-15 minutes)

**Instruct students**:
1. "Open a new chat with Claude or Gemini"
2. "Tell the AI: 'I need to break down this PRD into Epics and Stories'"
3. "Paste the requirements I just presented"
4. "Ask for Epic → Story structure"

**Circulate and help**:
- Check that students are getting logical Epic/Story breakdowns
- Verify they understand dependencies
- Help refine structure if needed

**Expected output students should have**:
```
Epic MS-01: Core Features
├─ Story MS-01.01: Project Setup
├─ Story MS-01.02: Google Maps
├─ Story MS-01.03: MARTA APIs
└─ Story MS-01.04: Schedule

Epic MS-02: Internationalization
├─ Story MS-01.01: i18n Setup
└─ Story MS-01.02: Language UI
```

**Checkpoint**: Everyone should have this structure before moving on.

### Phase 3: Ticket Generation (10-15 minutes)

**Instruct students**:
1. "Now we'll break each Story into tickets"
2. "For MS-01.01 (Project Setup), ask AI to generate implementation prompts"
3. "Reference the meta-framework guide (docs/PromptTemplates/00-META-FRAMEWORK-GUIDE.md)"
4. "AI should choose appropriate framework and generate detailed prompt"

**Show example**:
```
Student asks AI:
"Break down Story MS-01.01: Project Setup into implementation tickets.
Use the framework templates from docs/PromptTemplates/.
We have devcontainer, tech notes, and .env already set up."

AI should respond with:
"Ticket MS-01.01-A: Initialize Next.js Project
Framework: S.P.A.R.K (educational setup)
[Complete prompt following S.P.A.R.K template...]"
```

**Circulate and help**:
- Verify students are getting complete prompts with all template sections
- Check that appropriate frameworks are being selected
- Help students who aren't getting good AI responses

**Checkpoint**: Students should have detailed prompts for first 2-3 tickets.

### Phase 4: Implementation (60-90 minutes)

**Instruct students**:
1. "Start with MS-01.01-A"
2. "Copy the generated prompt"
3. "Paste it into Claude Code or Gemini in your Codespace"
4. "Let the AI implement"
5. "Test using the verification steps"
6. "Mark complete and move to next ticket"

**Implementation order** (enforce this):
```
MS-01.01 → MS-01.02 → MS-01.03 → MS-01.04 → MS-02.01 → MS-02.02
```

#### Checkpoint 1: After MS-01.01 (Setup)
**Time**: ~15 minutes into Phase 4

**Verify everyone has**:
- [ ] Next.js project initialized
- [ ] `pnpm dev` runs without errors
- [ ] Can see Next.js welcome page in browser
- [ ] Prisma is configured with schema
- [ ] Database migration completed

**Common issues**:
- pnpm install fails → Check internet connection
- Prisma migration fails → Check DATABASE_URL in .env
- Port 3000 already in use → Kill other processes

#### Checkpoint 2: After MS-01.02 (Maps)
**Time**: ~35 minutes into Phase 4

**Verify everyone has**:
- [ ] Google Map visible on screen
- [ ] Map centered on Atlanta
- [ ] Map is interactive (can pan/zoom)
- [ ] No console errors about API key

**Common issues**:
- Map doesn't load → Check NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
- API key error → Verify key is enabled for Maps JavaScript API
- Blank screen → Check console for errors, verify import statements

#### Checkpoint 3: After MS-01.03 (APIs)
**Time**: ~60 minutes into Phase 4

**Verify everyone has**:
- [ ] Blue bus markers on map
- [ ] Red train markers on map
- [ ] Console shows "Using proxy" or "Direct connection"
- [ ] /api/transit endpoint returns data

**Common issues**:
- No train data → Check proxy implementation, verify MARTA_TRAIN_API_KEY
- CORS errors → Check environment detection logic
- No markers appear → Check TransitMarkers component rendering

#### Checkpoint 4: After MS-01.04 (Schedule)
**Time**: ~80 minutes into Phase 4

**Verify everyone has**:
- [ ] List of FIFA matches displays
- [ ] Database has seed data
- [ ] Clicking event centers map
- [ ] /api/events endpoint returns data

**Common issues**:
- Empty schedule → Check seed script ran: `pnpm prisma db seed`
- Database errors → Check Prisma schema, verify migrations
- Event click doesn't work → Check event handler in EventList

#### Checkpoint 5: After MS-02 (i18n)
**Time**: ~100 minutes into Phase 4

**Verify everyone has**:
- [ ] Language switcher visible
- [ ] All 4 languages work
- [ ] Text updates immediately
- [ ] No page reload on language change

**Common issues**:
- Translations don't work → Check translation files exist
- English fallbacks → Check translation keys match
- Language doesn't persist → Check localStorage implementation

### Phase 5: Integration Testing (15-20 minutes)

**Provide testing checklist**:
```
Open your application and verify:

Visual:
□ Map fills screen
□ Blue bus markers present
□ Red train markers present
□ Schedule list visible
□ Language switcher in corner

Functional:
□ Can pan and zoom map
□ Markers update (wait 30s)
□ Can click event → map centers
□ Can switch languages → text updates
□ All 4 languages display correctly

Technical:
□ No errors in console
□ API endpoints respond (test in browser)
□ Environment detection works (check logs)
□ Performance acceptable (<3s load)
```

**Have students test each other's apps** - pair programming style.

### Phase 6: Reflection (10-15 minutes)

**Discussion questions**:
1. "Which framework did you use for the Train API ticket and why?"
   - Expected: F.O.C.U.S (constraint-solving)

2. "Why did MS-01.01 need to come before MS-01.02?"
   - Expected: Dependencies (setup before features)

3. "What was the most challenging part?"
   - Discuss solutions as a class

4. "How did the prompt frameworks help organize your work?"
   - Reinforce the structure: Epic → Story → Ticket

5. "If you were building a different app, which frameworks would you use?"
   - Apply learning to new contexts

**Have students share**:
- Screenshots of their working apps
- Interesting bugs they solved
- Creative improvements they made

### Wrap-Up (5-10 minutes)

**Summarize**:
- "You went from PRD to working application in 3 hours"
- "You used 8 different prompt frameworks appropriately"
- "You structured complex work hierarchically"
- "You solved real constraints (Codespaces port blocking)"
- "You worked effectively with AI coding assistants"

**Next steps** (optional homework):
- Deploy to Vercel
- Add more features (Epic MS-03: Animations)
- Generate full milestone documentation
- Write blog post about the experience

**Resources**:
- All prompt templates stay in the repo
- Tech notes are reference material
- Can reuse this structure for other projects

---

## Troubleshooting Guide for Instructors

### "My Codespace won't start"
- Check GitHub Codespaces quota (free tier limits)
- Try rebuilding container
- Check devcontainer.json syntax
- Try launching from different browser

### "Dependencies won't install"
- Check internet connection in Codespace
- Try: `pnpm install --force`
- Check package.json for syntax errors
- Verify pnpm version: `pnpm --version`

### "Map won't load"
- Verify API key is correct (no spaces, correct prefix)
- Check Maps JavaScript API is enabled in Google Cloud
- Check billing is enabled (Google requires card on file)
- Look for specific error in console
- Test key with curl: `curl "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY"`

### "Train API not working"
- Check if in Codespaces: `echo $CODESPACES`
- Verify proxy URL is correct
- Check encodeURIComponent is used
- Test direct URL (should fail in Codespaces)
- Check MARTA_TRAIN_API_KEY is valid

### "AI is generating bad prompts"
- Make sure student referenced meta-framework guide
- Check student provided enough context
- Have student be more specific about constraints
- Show example of good prompt request
- Use instructor's AI session to generate example

### "Student is way behind"
- Provide checkpoint code to catch them up
- Pair them with student who's ahead
- Focus on completing MS-01 (core features)
- MS-02 (i18n) can be optional/homework
- Prioritize learning over completion

### "Student finished early"
- Have them help others
- Add Epic MS-03 (animation improvements)
- Deploy to Vercel
- Add more FIFA teams/matches
- Implement additional languages
- Generate milestone documentation

---

## Post-Class Checklist

- [ ] Collect student feedback
- [ ] Note any tech note improvements needed
- [ ] Update troubleshooting guide with new issues
- [ ] Save example student implementations
- [ ] Update timing estimates if needed
- [ ] Share resources for continued learning

---

## Materials Needed

### Digital
- [ ] GitHub repository with all resources
- [ ] API keys (backup set for students who forget)
- [ ] Screen sharing setup
- [ ] Prompt framework image (prompt_framework.gif)

### Documentation
- [ ] Instructor guide (this document)
- [ ] Student handout (workflow summary)
- [ ] Troubleshooting quick reference
- [ ] API key registration instructions

### Optional
- [ ] Pre-recorded demo of final app
- [ ] Checkpoint branches (MS-01-complete, MS-02-complete)
- [ ] Slide deck with PRD details
- [ ] Assessment rubric (if graded)

---

## Success Metrics

**Class is successful if**:
- 80%+ of students complete MS-01 (core features)
- 60%+ of students complete MS-02 (i18n)
- All students understand Epic → Story → Ticket structure
- Students can explain which framework to use when
- No major blockers stop the entire class
- Students leave with working application

**Bonus success**:
- Students deploy to Vercel
- Students generate full milestone docs
- Students can apply framework selection to new projects
- Students report confidence working with AI assistants

---

## Contact for Issues

If you encounter issues with:
- **DevContainer**: Check GitHub Codespaces docs
- **MARTA API**: Contact MARTA developer support
- **Google Maps**: Check Google Cloud console status
- **Prompt templates**: Review meta-framework guide
- **This guide**: [Your contact info]

---

## Version History

- v1.0: Initial instructor guide
- [Add versions as you iterate]

---

## Quick Command Reference

```bash
# Check environment
node --version        # Should be 20.x
pnpm --version        # Should be 8.x
echo $CODESPACES     # Should be "true" in Codespaces

# Common fixes
pnpm install --force
pnpm prisma generate
pnpm prisma migrate dev
pnpm prisma db seed

# Testing
pnpm dev                                   # Start app
curl http://localhost:3000/api/transit     # Test API
curl http://localhost:3000/api/events      # Test API

# Clean slate
rm -rf node_modules .next
rm -f prisma/dev.db
pnpm install
pnpm prisma migrate dev
```

Good luck with your class! 🚀
