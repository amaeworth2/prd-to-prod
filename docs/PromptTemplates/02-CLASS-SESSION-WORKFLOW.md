# Class Session Workflow
## How to Use These Templates During "From PRD to Prod"

This document explains the LIVE workflow during the class session.

---

## Class Setup (Before Students Arrive)

### What's Already Done ✅
- GitHub repository created
- Devcontainer configured and tested
- .env file template created with placeholder keys
- Tech notes written and placed in docs/
- Example PRD structure prepared

### What Students Will Do 🎯
1. Launch Codespace (devcontainer builds automatically - 2-3 min)
2. Copy .env.example to .env: `cp .env.example .env`
3. Add their API keys to .env
4. Listen to live PRD presentation
5. Generate implementation prompts using AI
6. Build the application
7. Test and verify

**Important**: Students do NOT touch .devcontainer - it's fully configured.

---

## Phase 1: PRD Presentation (Instructor-Led)

### Timing: 15-20 minutes

**Instructor Will**:
- Present the FIFA Navigator concept
- Walk through requirements:
  - Next.js application structure
  - Google Maps integration needs
  - MARTA API requirements (Bus + Train)
  - Mock FIFA schedule requirements
  - Multi-language support (EN, ES, DE, KO)
  - Smooth animations for transit vehicles
- Highlight key constraints:
  - Codespaces environment
  - Port 18096 blocking issue
  - Must work in dev AND production
  - Accessibility requirements

**Students Should**:
- Take notes
- Ask clarifying questions
- Begin thinking about Epic/Story structure

---

## Phase 2: Structure Planning (Student + AI Collaboration)

### Timing: 10-15 minutes

**Students Ask AI** (Claude/Gemini):
```
I just heard a PRD for a FIFA Navigator app. Help me break it down into Epics and Stories.

Here's what we're building:
[Student pastes their notes from the PRD presentation]

Here's what we already have set up:
- Devcontainer with Next.js, TypeScript, Prisma
- .env file with API keys
- Tech notes in docs/ folder

Use the Epic → Story → Ticket structure to organize this work.
```

**AI Should** (using Meta-Framework Guide):
1. Analyze the requirements
2. Suggest Epic structure:
   - Epic MS-01: Project Core Features
   - Epic MS-02: Internationalization
   - Epic MS-03: Polish & Animation (if time)
3. Break each Epic into Stories
4. Identify dependencies
5. Suggest implementation order

**Output**:
```
Epic MS-01: Project Core Features
├─ Story MS-01.01: Next.js Project Setup
├─ Story MS-01.02: Google Maps Integration
├─ Story MS-01.03: MARTA API Integration
└─ Story MS-01.04: FIFA Schedule Display

Epic MS-02: Internationalization
├─ Story MS-02.01: i18n Infrastructure
└─ Story MS-02.02: Language Switcher UI
```

---

## Phase 3: Ticket Generation (Student + AI Collaboration)

### Timing: 5-10 minutes per Story

**For Each Story, Students Ask AI**:
```
Break down Story MS-[XX].[YY]: [Story Name] into implementation tickets.

Story context:
[Paste the Story description from Phase 2]

What we have available:
- Tech notes: docs/MARTA-API-Guide.md, docs/Codespaces-Proxy.md
- Environment variables: Already configured in .env
- Devcontainer: Already set up

Generate detailed implementation prompts using the appropriate framework from the prompt_framework.gif.
```

**AI Should**:
1. Identify 2-4 tickets per Story
2. Select appropriate framework for each ticket
3. Generate complete prompt using template
4. Include references to tech notes
5. Include specific commands and code
6. Include verification steps

**Example Output**:

```markdown
## Ticket MS-01.03-B: MARTA Train API with Proxy

**Framework Selected**: F.O.C.U.S (because of Codespaces constraint)

### Frame
The MARTA Train API runs on port 18096, which GitHub Codespaces blocks...

[Complete prompt follows template structure]

### Available Resources
- **Tech Note**: See docs/Codespaces-Proxy.md for proxy details
- **Environment**: MARTA_TRAIN_API_KEY already in .env
- **Test Command**: curl http://localhost:3000/api/transit

[Rest of prompt...]
```

---

## Phase 4: Implementation (Student + AI Code Assistant)

### Timing: 60-90 minutes (bulk of class time)

**For Each Ticket**:

1. **Student copies** the generated prompt from Phase 3
2. **Student pastes** to Claude Code or Gemini in their Codespace
3. **AI implements** the ticket following the prompt
4. **Student reviews** the code
5. **Student tests** using verification steps
6. **Student confirms** acceptance criteria met
7. **Move to next ticket**

**Implementation Order** (strict dependencies):
```
MS-01.01 (Setup)
    ↓ MUST BE FIRST
MS-01.02 (Google Maps)
    ↓ Needs MS-01.01
MS-01.03 (MARTA APIs)
    ↓ Needs MS-01.01, MS-01.02
MS-01.04 (Schedule)
    ↓ Needs MS-01.01
MS-02.01 (i18n Setup)
    ↓ Needs all MS-01
MS-02.02 (Language UI)
    ↓ Needs MS-02.01, MUST BE LAST
```

**Student Workflow Per Ticket**:
```bash
# 1. Read the ticket prompt
# 2. Feed prompt to AI coding assistant
# 3. Let AI implement
# 4. Test implementation
pnpm dev
# Open browser, test feature
# 5. Verify acceptance criteria
# 6. Mark complete, move to next
```

---

## Phase 5: Integration Testing (Student-Led)

### Timing: 15-20 minutes

**Students Verify**:
- [ ] Application runs without errors
- [ ] Map displays centered on Atlanta
- [ ] Bus markers appear (blue)
- [ ] Train markers appear (red)
- [ ] Markers update every 30 seconds
- [ ] FIFA schedule displays correctly
- [ ] Language switcher works for all 4 languages
- [ ] All text translates correctly
- [ ] No console errors
- [ ] Performance is acceptable (<3s load)

**Using Verification Checklist**:
```
Open browser console
Navigate to http://localhost:3000

Visual Check:
✅ Map visible and interactive
✅ Blue markers (buses) on map
✅ Red markers (trains) on map
✅ Schedule list visible
✅ Language switcher in top-right

Functional Check:
✅ Click event → map centers on venue
✅ Change language → text updates
✅ Wait 30s → markers update position

API Check:
✅ Open http://localhost:3000/api/transit
✅ See JSON with buses and trains arrays
✅ Open http://localhost:3000/api/events
✅ See JSON with match schedule

Console Check:
✅ "Using proxy" or "Direct connection" logged
✅ No red errors
✅ No CORS issues
```

---

## Phase 6: Reflection & Documentation (Student-Led)

### Timing: 10-15 minutes

**Students Answer**:
1. **What did you build?**
   - [Brief description]

2. **What frameworks did you use and why?**
   - MS-01.01 used S.P.A.R.K because...
   - MS-01.03-B used F.O.C.U.S because...
   - etc.

3. **What was the most challenging part?**
   - [Technical challenge]
   - [How it was solved]

4. **How did the AI assistant help?**
   - [Specific examples]

5. **What would you do differently?**
   - [Improvements]

**Optional: Create Milestone Docs**
If time permits, students can use Phase 3 prompts from the old templates to generate milestone documentation for their portfolio.

---

## Instructor Checkpoints

### Checkpoint 1: After Phase 2 (Structure Planning)
**Verify**: All students have Epic/Story structure
**Help with**: Students stuck on how to organize features

### Checkpoint 2: After MS-01.01 (First Ticket)
**Verify**: All students have working Next.js app
**Help with**: Dev environment issues, dependency problems

### Checkpoint 3: After MS-01.02 (Maps)
**Verify**: All students see a map on screen
**Help with**: API key issues, Google Maps configuration

### Checkpoint 4: After MS-01.03 (APIs)
**Verify**: All students see transit markers
**Help with**: MARTA API issues, proxy configuration

### Checkpoint 5: Before End of Class
**Verify**: All core features working
**Help with**: Integration issues, testing problems

---

## Common Issues & Solutions

### Issue: "My map won't load"
**Check**:
- Is NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in .env?
- Did you restart dev server after adding key?
- Any console errors about API key?

**Fix**:
```bash
# Verify env var
echo $NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
# Restart server
# Ctrl+C, then pnpm dev
```

### Issue: "No train data appears"
**Check**:
- Is MARTA_TRAIN_API_KEY in .env?
- Does console say "Using proxy" in Codespaces?
- Any CORS errors in console?

**Fix**:
- Reference docs/Codespaces-Proxy.md
- Verify environment detection logic
- Check proxy URL format

### Issue: "Translations don't work"
**Check**:
- Are all 4 .json files in messages/ folder?
- Is NextIntlClientProvider wrapping app?
- Is language context initialized?

**Fix**:
- Review MS-02.01 ticket implementation
- Check import paths
- Verify translation file structure

### Issue: "AI generated wrong code"
**Check**:
- Did you use the correct framework prompt?
- Did prompt include all context (tech notes, env vars)?
- Did AI have access to existing code?

**Fix**:
- Regenerate prompt with more specific context
- Show AI the error message
- Reference tech notes explicitly

---

## Timing Guide (3-Hour Class)

```
0:00 - 0:15   Phase 1: PRD Presentation
0:15 - 0:30   Phase 2: Structure Planning
0:30 - 0:45   Phase 3: Ticket Generation
0:45 - 2:15   Phase 4: Implementation (bulk)
  ↓
  0:45 - 1:00   MS-01.01 (Setup)
  1:00 - 1:20   MS-01.02 (Maps)
  1:20 - 1:45   MS-01.03 (APIs)
  1:45 - 2:00   MS-01.04 (Schedule)
  2:00 - 2:15   MS-02.01 & MS-02.02 (i18n)
  ↓
2:15 - 2:35   Phase 5: Integration Testing
2:35 - 2:50   Phase 6: Reflection
2:50 - 3:00   Q&A and Wrap-up
```

---

## Success Criteria for the Class

**All students should leave with**:
- ✅ Working FIFA Navigator application
- ✅ Understanding of Epic → Story → Ticket structure
- ✅ Experience using AI with different prompt frameworks
- ✅ Knowledge of environment-specific development (Codespaces)
- ✅ Practical API integration experience
- ✅ Understanding of i18n implementation

**Students should be able to**:
- Explain why different frameworks were chosen
- Identify when to use each framework for future projects
- Debug environment-specific issues
- Structure complex projects hierarchically
- Work effectively with AI coding assistants

---

## Post-Class (Optional Homework)

**Students can**:
1. Deploy to Vercel
2. Add more FIFA teams/matches
3. Implement Epic MS-03 (animations)
4. Add more languages
5. Generate full milestone documentation for portfolio
6. Write blog post about their experience

**Using**:
- Existing prompts and frameworks
- Tech notes as reference
- Working code as starting point
