# Phase 3: Milestone Structure Generation Prompts
## Creating Documentation in Epic → Story → Ticket Format

After completing the implementation (Phase 2), students will use these prompts to generate structured milestone documentation that matches the organizational pattern used in this project (MS-01, MS-01.01, MS-01.01-A).

---

## Purpose of Phase 3

Phase 3 is about **documenting what was built** in a structured, hierarchical format that:
- Organizes features into logical groupings (Epics)
- Breaks down each Epic into Stories
- Breaks down each Story into atomic Tickets
- Provides clear acceptance criteria for each level
- Demonstrates understanding of project structure

This documentation will help students:
1. Reflect on what they built
2. Understand how to structure complex projects
3. Create reusable templates for future projects
4. Prepare documentation for portfolios

---

## Prerequisites

Before starting Phase 3:
- ✅ Complete implementation of all features (Phase 2)
- ✅ All features tested and working
- ✅ Understanding of what was built
- ✅ Access to spec.md, guardrails.md, and acceptance_criteria.md from Phase 1

---

## Understanding the Hierarchy

```
EPIC (MS-01)
├── STORY (MS-01.01)
│   ├── TICKET (MS-01.01-A)
│   └── TICKET (MS-01.01-B)
├── STORY (MS-01.02)
│   ├── TICKET (MS-01.02-A)
│   ├── TICKET (MS-01.02-B)
│   └── TICKET (MS-01.02-C)
```

**Epic**: Major feature area (e.g., "Project Setup & Core Features")
**Story**: Specific feature within an epic (e.g., "Google Maps Integration")
**Ticket**: Single atomic task (e.g., "Create MapView Component")

---

## Prompt 1: Generate Epic Structure (MAP Framework)

### Instructions for Students
Use this prompt to create the high-level Epic structure:

```
I need you to use the MAP framework to help me organize my Atlanta FIFA Navigator project into Epics (major feature areas).

# METRICS
For each Epic, we need to define:
- Clear scope boundaries
- Dependencies between Epics
- Success criteria for the entire Epic
- Time/complexity estimate

# ACTIONS
Analyze the following features that were implemented:
1. Next.js project setup with Prisma and TypeScript
2. Google Maps integration with Atlanta center point
3. MARTA Bus API integration
4. MARTA Train API with Codespaces proxy solution
5. Real-time transit markers on map
6. Mock FIFA schedule database and display
7. i18n setup for 4 languages
8. Language switcher component

Group these into logical Epics following this pattern:
- Epic MS-01: [Name] - [Description]
- Epic MS-02: [Name] - [Description]
- Epic MS-03: [Name] - [Description] (if needed)

# PROOF
For each Epic, provide:
- Epic ID and name
- Purpose statement
- List of Stories within this Epic (high-level, no details yet)
- Dependencies (which Epics must come first)
- Overall acceptance criteria for the Epic

## Context from Project

Here is our spec.md:
[PASTE spec.md]

Here are our guardrails:
[PASTE guardrails.md]

Here are our acceptance criteria:
[PASTE acceptance_criteria.md]

## Output Format

Generate a document that lists each Epic with:

### Epic MS-XX: [Epic Name]

**Purpose**: [One paragraph describing why this Epic exists]

**Scope**: [What is included in this Epic]

**Dependencies**: [Which Epics must be completed first]

**Stories in this Epic**:
- MS-XX.01: [Story name]
- MS-XX.02: [Story name]
- MS-XX.03: [Story name]

**Epic Success Criteria**:
- [ ] [Overall criterion 1]
- [ ] [Overall criterion 2]

**Estimated Complexity**: [Low/Medium/High]

---

Please generate the Epic structure now.
```

---

## Prompt 2: Generate Stories for Each Epic (S.P.A.R.K Framework)

### Instructions for Students
After getting the Epic structure, use this prompt for EACH epic to break it down into Stories:

```
I need you to use the S.P.A.R.K framework to break down Epic MS-[XX] into detailed Stories.

# SITUATION
We have completed Epic MS-[XX]: [Epic Name]. Now we need to document the specific features (Stories) that were implemented as part of this Epic.

# PURPOSE
Create detailed Story-level documentation that:
- Breaks the Epic into logical feature units
- Provides clear acceptance criteria for each Story
- Shows dependencies between Stories
- Uses appropriate prompting frameworks for each Story

# AUDIENCE
This documentation is for:
- Students learning project structure
- AI assistants that might implement similar features
- Instructors evaluating the project
- Future developers maintaining the code

# ROADMAP
For Epic MS-[XX], identify 3-5 Stories that represent distinct features or components.

# KNOWLEDGE

## Epic Information
[PASTE THE EPIC DESCRIPTION FROM PROMPT 1 OUTPUT]

## Implemented Features
Here are the features that were implemented in this Epic:
[LIST THE SPECIFIC FEATURES THAT WERE BUILT]

## Available Prompt Frameworks
Choose the most appropriate framework for each Story:
- **S.P.A.R.K**: For educational/setup tasks
- **F.O.C.U.S**: For problem-solving with constraints
- **I.D.E.A**: For creative/design tasks
- **S.T.A.G.E**: For implementation tasks
- **M.A.P**: For planning/organization tasks

## Output Format for Each Story

### Story MS-[XX].[YY]: [Story Name]

**Framework Used**: [Framework Name]

**Description**: [2-3 sentences describing what this Story accomplishes]

**Why This Framework**: [1 sentence explaining why this framework fits]

**Dependencies**:
- Requires: MS-[XX].[YY] (if any)
- Enables: MS-[XX].[YY] (if any)

**Tickets in this Story**:
- MS-[XX].[YY]-A: [Ticket name]
- MS-[XX].[YY]-B: [Ticket name]
- MS-[XX].[YY]-C: [Ticket name] (if needed)

**Story Acceptance Criteria**:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

**Learning Outcomes**:
- Outcome 1: [What students learn from this Story]
- Outcome 2: [What students learn from this Story]

---

Please generate the Stories for Epic MS-[XX] now.
```

---

## Prompt 3: Generate Tickets for Each Story (CRAFT Framework)

### Instructions for Students
For EACH Story, use this prompt to break it down into atomic Tickets:

```
I need you to use the CRAFT framework to break down Story MS-[XX].[YY] into detailed implementation Tickets.

# CONTEXT
We are documenting Story MS-[XX].[YY]: [Story Name]. This Story was successfully implemented and needs to be broken down into the specific tasks (Tickets) that were completed.

# ROLE
You are a technical documentation specialist creating atomic, actionable tickets that:
- Can be implemented independently
- Have clear acceptance criteria
- Reference specific files and code
- Include verification steps

# ACTION
For Story MS-[XX].[YY], identify 2-4 Tickets that represent atomic implementation tasks.

## Story Information
[PASTE THE STORY DESCRIPTION FROM PROMPT 2 OUTPUT]

## Implementation Details
Here's what was actually implemented:
[DESCRIBE THE SPECIFIC CODE, COMPONENTS, FILES THAT WERE CREATED]

For example:
- Created components/MapView.tsx
- Installed @vis.gl/react-google-maps
- Updated app/page.tsx to render map
- Configured environment variables

# FORMAT
For each Ticket, use the SAME framework that was chosen for the parent Story.

## Ticket Template

Create a complete markdown file for each Ticket following this structure:

---
### Ticket MS-[XX].[YY]-[Z]: [Ticket Name]

**Framework**: [Same framework as Story]

#### [Framework Section 1]
[Content specific to the framework - see existing milestone files for examples]

#### [Framework Section 2]
[Content specific to the framework]

[Continue with all framework sections...]

---

**Learning Outcomes**:
- **Outcome 1**: [Specific technical skill learned]
- **Outcome 2**: [Specific technical skill learned]

---

**Context from Source Docs**:
- **Business Rationale (PRD)**: [Why this matters to users]
- **WBS Alignment**: [Which phase/task this belongs to]
- **Dependencies**: [What must be done first]
- **Files to Create/Modify**:
  - [List specific files]

**Acceptance Criteria**:
- [ ] [Specific, testable criterion 1]
- [ ] [Specific, testable criterion 2]
- [ ] [Specific, testable criterion 3]

---

**Guardrails**:
- **Technology Stack**: [Approved technologies for this ticket]
- **Security**: [Security requirements]
- **Performance**: [Performance requirements]
- **Scope Boundaries**: [What NOT to do in this ticket]

---

**Implementation Checklist**:
- [ ] **Task 1**: [Specific action]
  - **Command/Action**: [Exact command or code to write]
  - **Acceptance**: [How to verify this task]

- [ ] **Task 2**: [Specific action]
  - **Command/Action**: [Exact command or code to write]
  - **Acceptance**: [How to verify this task]

[Continue for all tasks...]

---

**Testing Requirements**:
- [ ] **Manual Verification**:
  1. [Step-by-step testing instructions]
  2. [What to confirm]
  3. [Expected results]

---

**Success Criteria**:
This ticket is complete when:
1. [Overall success criterion 1]
2. [Overall success criterion 2]
3. [All acceptance criteria met]

---

# TONE
Technical, precise, and educational. Include helpful explanations and "why" context.

Please generate detailed Ticket documentation for Story MS-[XX].[YY] now, creating one complete markdown document per Ticket.
```

---

## Prompt 4: Generate Master Milestone Summary (DECIDE Framework)

### Instructions for Students
After creating all Epics, Stories, and Tickets, use this final prompt to create a summary document:

```
I need you to use the DECIDE framework to create a master milestone summary document for the Atlanta FIFA Navigator project.

# DEFINE THE PROBLEM
We have created a detailed hierarchical structure of Epics, Stories, and Tickets. Now we need a single summary document that provides an overview of the entire project structure and serves as a navigation guide.

# EXPLORE OPTIONS
Consider different ways to organize this:
- Chronological order (implementation sequence)
- Feature grouping (by Epic)
- Dependency tree (what requires what)
- Complexity-based (simple to complex)

# CONSIDER CONSEQUENCES
The summary should:
- Help students understand the big picture
- Allow quick navigation to specific Tickets
- Show dependencies clearly
- Demonstrate project scope

# IDENTIFY VALUES
Our priorities:
1. Clarity over completeness
2. Visual organization
3. Quick reference capability
4. Educational value

# DECIDE AND COMMIT
Create a `MILESTONE-SUMMARY.md` file with:

## Project Overview
[Brief description of the entire project]

## Epic Overview

### MS-01: [Epic Name]
**Purpose**: [One sentence]
**Stories**: [Count]
**Tickets**: [Count]
**Status**: ✅ Completed

#### Stories in MS-01:
- **MS-01.01**: [Story Name] - [Framework] - [Ticket count]
- **MS-01.02**: [Story Name] - [Framework] - [Ticket count]
- **MS-01.03**: [Story Name] - [Framework] - [Ticket count]

### MS-02: [Epic Name]
**Purpose**: [One sentence]
**Stories**: [Count]
**Tickets**: [Count]
**Status**: ✅ Completed

#### Stories in MS-02:
- **MS-02.01**: [Story Name] - [Framework] - [Ticket count]
- **MS-02.02**: [Story Name] - [Framework] - [Ticket count]

## Dependency Graph

```
MS-01.01 (Setup)
    ↓
MS-01.02 (Maps) ← Must complete MS-01.01
    ↓
MS-01.03 (Transit APIs) ← Must complete MS-01.02
    ↓
MS-01.04 (Schedule) ← Must complete MS-01.01
    ↓
MS-02.01 (i18n) ← Must complete all MS-01
    ↓
MS-02.02 (Language UI) ← Must complete MS-02.01
```

## Implementation Order

Recommended sequence:
1. MS-01.01 (Project Setup) - **MUST BE FIRST**
2. MS-01.02 (Google Maps)
3. MS-01.03 (MARTA APIs)
4. MS-01.04 (Schedule Display)
5. MS-02.01 (i18n Setup)
6. MS-02.02 (Language Switcher) - **MUST BE LAST**

## Framework Distribution

Track which frameworks were used where:
- **S.P.A.R.K**: MS-01.01, MS-01.02-A (Educational setup tasks)
- **F.O.C.U.S**: MS-01.03-A, MS-01.03-B (Problem-solving with constraints)
- **I.D.E.A**: MS-01.03-C, MS-02.01-B (Creative/design tasks)
- **S.T.A.G.E**: MS-01.04 (Implementation tasks)
- **M.A.P**: MS-02.01-A (Planning tasks)

## Quick Reference

### By Framework:
- **Need setup/educational content?** → Use S.P.A.R.K examples
- **Need problem-solving with constraints?** → Use F.O.C.U.S examples
- **Need creative/UI work?** → Use I.D.E.A examples
- **Need implementation guidance?** → Use S.T.A.G.E examples
- **Need planning/organization?** → Use M.A.P examples

### By Technology:
- **Next.js setup**: MS-01.01
- **Google Maps**: MS-01.02-A, MS-01.02-B, MS-01.02-C
- **MARTA APIs**: MS-01.03-A, MS-01.03-B
- **Real-time markers**: MS-01.03-C
- **Database/Prisma**: MS-01.01, MS-01.04
- **i18n/translations**: MS-02.01-A, MS-02.01-B

## Statistics

- **Total Epics**: 2
- **Total Stories**: [count]
- **Total Tickets**: [count]
- **Frameworks Used**: 5 (S.P.A.R.K, F.O.C.U.S, I.D.E.A, S.T.A.G.E, M.A.P)
- **Technologies**: Next.js, TypeScript, Prisma, Google Maps, MARTA APIs, next-intl
- **Languages Supported**: 4 (EN, ES, DE, KO)

# EVALUATE
Review to ensure:
- All Epics, Stories, and Tickets are listed
- Dependencies are clear
- Navigation is intuitive
- Educational value is evident

---

Here is the Epic and Story structure we created:
[PASTE ALL EPIC AND STORY SUMMARIES]

Please generate the master milestone summary document now.
```

---

## Phase 3 Deliverables

By the end of Phase 3, students should have:

### Folder Structure:
```
docs/
├── ForCode/
│   ├── Milestones/
│   │   ├── MILESTONE-SUMMARY.md
│   │   ├── MS-01.01-Project-Setup.md
│   │   ├── MS-01.02-A-Base-Map-Component.md
│   │   ├── MS-01.02-B-Map-Styling.md
│   │   ├── MS-01.03-A-Bus-API-Integration.md
│   │   ├── MS-01.03-B-Train-API-and-Proxy.md
│   │   ├── MS-01.03-C-Transit-Markers.md
│   │   ├── MS-01.04-Schedule-Display.md
│   │   ├── MS-02.01-A-i18n-Setup.md
│   │   ├── MS-02.01-B-Language-Switcher.md
```

### Document Checklist:
- [ ] MILESTONE-SUMMARY.md (navigation and overview)
- [ ] All Epic descriptions
- [ ] All Story descriptions
- [ ] All Ticket implementation guides
- [ ] Each Ticket uses appropriate framework
- [ ] All acceptance criteria documented
- [ ] All dependencies mapped
- [ ] All learning outcomes stated

---

## Tips for Success

1. **Be Specific**: Reference actual file names and line numbers
2. **Be Complete**: Include all implementation details
3. **Be Educational**: Explain WHY, not just WHAT
4. **Be Consistent**: Use the same format for similar tickets
5. **Cross-reference**: Link related tickets and dependencies

---

## Reflection Questions

After completing Phase 3, students should be able to answer:

1. **Organization**: Why are features grouped into these specific Epics?
2. **Dependencies**: Why must MS-01.01 come before MS-01.02?
3. **Frameworks**: Why was S.P.A.R.K chosen for setup tasks but F.O.C.U.S for API integration?
4. **Atomic Tasks**: Why is MS-01.03-B a separate ticket from MS-01.03-A?
5. **Reusability**: How could these milestone templates be reused for a different project?

---

## Phase 3 Completion

Phase 3 is complete when:
- [ ] All Epics documented
- [ ] All Stories documented
- [ ] All Tickets documented with complete implementation guides
- [ ] MILESTONE-SUMMARY.md created
- [ ] Documentation reviewed for accuracy
- [ ] Students understand the hierarchical structure
- [ ] Reflection questions answered

Congratulations! You have completed the full workflow from PRD to implementation to documentation.
