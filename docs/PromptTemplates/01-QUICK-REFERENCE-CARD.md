# Quick Reference Card for AI Assistants
## Framework Selection Cheat Sheet

Use this quick reference during class to rapidly select the right framework.

---

## The 30-Second Framework Selector

### Ask Yourself: What Type of Task Is This?

| If the task is... | Use Framework | Key Indicator |
|-------------------|---------------|---------------|
| Setting up tools, configs, or project structure | **S.P.A.R.K** | Needs educational explanation |
| Solving a problem with specific constraints | **F.O.C.U.S** | Has environmental or technical limitations |
| Building UI, designing interactions, or UX | **I.D.E.A** | User-facing visual/interaction design |
| Following a multi-step implementation process | **S.T.A.G.E** | Sequential phases of work |
| Defining success criteria or measuring outcomes | **M.A.P** | Needs metrics and verification |
| Creating tests or verification strategy | **P.R.O.M.P.T** | About testing and quality |
| Making architectural or tech stack decisions | **D.E.C.I.D.E** | Comparing options and tradeoffs |
| Integrating external tools/libraries | **C.R.A.F.T** | Technical integration work |

---

## Common Task Patterns in This Project

### Next.js & React Tasks

| Task | Framework | Why |
|------|-----------|-----|
| Initialize Next.js project | S.P.A.R.K | Educational setup |
| Create React component | C.R.A.F.T | Technical integration |
| Build language switcher UI | I.D.E.A | User interface design |
| Set up routing | S.T.A.G.E | Step-by-step process |

### API Integration Tasks

| Task | Framework | Why |
|------|-----------|-----|
| MARTA Bus API (standard) | C.R.A.F.T | Straightforward integration |
| MARTA Train API (with proxy) | F.O.C.U.S | Has Codespaces constraint |
| Google Maps setup | C.R.A.F.T | Library integration |
| Error handling strategy | P.R.O.M.P.T | Testing/verification |

### Database Tasks

| Task | Framework | Why |
|------|-----------|-----|
| Set up Prisma schema | S.P.A.R.K | Educational setup |
| Create seed data | S.T.A.G.E | Multi-phase process |
| Design data model | D.E.C.I.D.E | Architectural decision |

### Internationalization Tasks

| Task | Framework | Why |
|------|-----------|-----|
| Set up next-intl | S.P.A.R.K | Educational setup |
| Create translation files | S.T.A.G.E | Systematic process |
| Build language picker | I.D.E.A | UI/UX component |
| Define language strategy | D.E.C.I.D.E | Strategic choice |

### DevOps & Environment Tasks

| Task | Framework | Why |
|------|-----------|-----|
| Configure Codespaces | S.P.A.R.K | Educational setup |
| Environment detection logic | F.O.C.U.S | Constraint-solving |
| Set up env variables | C.R.A.F.T | Technical config |
| Deployment strategy | D.E.C.I.D.E | Platform choice |

---

## Red Flags: Wrong Framework Choices

### ❌ DON'T Use S.P.A.R.K When...
- Task has complex constraints (use F.O.C.U.S)
- Task is purely technical with no learning focus (use C.R.A.F.T)
- Task is about testing (use P.R.O.M.P.T)

### ❌ DON'T Use F.O.C.U.S When...
- There are no significant constraints (use C.R.A.F.T or S.T.A.G.E)
- Task is about UI design (use I.D.E.A)
- Task is setup without constraints (use S.P.A.R.K)

### ❌ DON'T Use I.D.E.A When...
- Task has no user-facing component (use C.R.A.F.T)
- Task is purely backend (use S.T.A.G.E or F.O.C.U.S)
- Task is about testing (use P.R.O.M.P.T)

### ❌ DON'T Use C.R.A.F.T When...
- Educational context is important (use S.P.A.R.K)
- There are major constraints to explain (use F.O.C.U.S)
- Task requires creative design thinking (use I.D.E.A)

---

## Framework Combinations

Some complex tasks may need multiple frameworks:

### Example: "Build Transit Marker Component"

**Break into sub-tasks**:
1. **Install Google Maps library** → C.R.A.F.T (technical setup)
2. **Design marker appearance** → I.D.E.A (visual design)
3. **Fetch and update data** → F.O.C.U.S (handling API constraints)
4. **Test marker behavior** → P.R.O.M.P.T (verification)

**Create 4 tickets**, each with appropriate framework.

---

## Template Section Quick Guide

### S.P.A.R.K Sections
- Situation
- Purpose
- Audience
- Roadmap (numbered steps)
- Knowledge (prerequisites + resources)

### F.O.C.U.S Sections
- Frame (the problem)
- Objective (the goal)
- Constraints (technical & business)
- Users (who it affects)
- Steps (solution approach)

### I.D.E.A Sections
- Issue (the UX problem)
- Details (requirements)
- Example (analogies/references)
- Action (the solution)

### C.R.A.F.T Sections
- Context (current vs desired state)
- Role (who is implementing)
- Action (what to build)
- Format (output structure)
- Tone (code style)

### S.T.A.G.E Sections
- Scenario (business context)
- Task (the implementation)
- Approach (architecture)
- Guardrails (do's and don'ts)
- Execution (phased steps)

### M.A.P Sections
- Metrics (success measures)
- Actions (what to do)
- Proof (verification methods)

### P.R.O.M.P.T Sections
- Problem (what to test)
- Roles (who tests what)
- Objectives (testing goals)
- Methods (testing approaches)
- Process (workflow)
- Timeframe (when to test)

### D.E.C.I.D.E Sections
- Define (the decision)
- Explore (options)
- Consider (consequences)
- Identify (values/priorities)
- Decide (recommendation)
- Evaluate (success indicators)

---

## Project-Specific Shortcuts

### For This FIFA Navigator Project:

**Always Reference**:
- ✅ Devcontainer (already set up)
- ✅ .env file (keys already there)
- ✅ Tech notes in docs/
- ✅ Codespaces as primary environment

**Common Constraints**:
- 🚫 Port 18096 blocked in Codespaces (MARTA Train)
- ✅ Use proxy: https://api.allorigins.win/raw?url=
- ✅ Detect with: process.env.CODESPACES
- ✅ Client-side keys need NEXT_PUBLIC_ prefix

**Tech Stack** (approved):
- Next.js 14+ (App Router)
- TypeScript (strict mode)
- Prisma (SQLite for dev)
- pnpm (not npm/yarn)
- @vis.gl/react-google-maps (not other libs)
- next-intl (for i18n)

---

## Decision Tree Flowchart

```
START: What am I being asked to do?
│
├─ Is it about SETUP or CONFIGURATION?
│  ├─ Educational focus? → S.P.A.R.K
│  ├─ Pure technical? → C.R.A.F.T
│  └─ Complex decision? → D.E.C.I.D.E
│
├─ Is there a CONSTRAINT or PROBLEM to solve?
│  ├─ Environment-specific? → F.O.C.U.S
│  ├─ Decision between options? → D.E.C.I.D.E
│  └─ Standard approach works? → C.R.A.F.T
│
├─ Is it about USER INTERFACE or UX?
│  ├─ Visual design? → I.D.E.A
│  ├─ Component structure? → C.R.A.F.T
│  └─ Animation/interaction? → I.D.E.A
│
├─ Is it about IMPLEMENTATION?
│  ├─ Multi-phase process? → S.T.A.G.E
│  ├─ Single component? → C.R.A.F.T
│  └─ Constrained environment? → F.O.C.U.S
│
├─ Is it about TESTING or VERIFICATION?
│  ├─ Testing strategy? → P.R.O.M.P.T
│  ├─ Metrics/measurement? → M.A.P
│  └─ Acceptance criteria? → M.A.P
│
└─ Is it about DECISION-MAKING?
   ├─ Comparing options? → D.E.C.I.D.E
   ├─ Defining metrics? → M.A.P
   └─ Planning approach? → S.T.A.G.E
```

---

## Example Rapid Selections

**Student says**: "We need to set up the Next.js project"
**You think**: Setup + Educational → **S.P.A.R.K**

**Student says**: "The train API is on port 18096 which is blocked"
**You think**: Constraint + Problem-solving → **F.O.C.U.S**

**Student says**: "Create a language switcher button"
**You think**: UI + User-facing → **I.D.E.A**

**Student says**: "Seed the database with match data"
**You think**: Multi-step implementation → **S.T.A.G.E**

**Student says**: "How do we know the map loaded correctly?"
**You think**: Verification + Testing → **P.R.O.M.P.T**

**Student says**: "Should we use SQLite or Postgres?"
**You think**: Decision + Tradeoffs → **D.E.C.I.D.E**

**Student says**: "Install the Google Maps React library"
**You think**: Technical integration → **C.R.A.F.T**

**Student says**: "What does success look like for this feature?"
**You think**: Metrics + Proof → **M.A.P**

---

## Remember

1. **One framework per ticket** (don't mix)
2. **Framework matches task type** (not personal preference)
3. **Students need clarity** (consistent structure helps)
4. **Reference existing resources** (don't recreate)
5. **Think hierarchy**: Epic → Story → Ticket

---

## When in Doubt

Use this priority order:
1. **Constraints?** → F.O.C.U.S
2. **UI/UX?** → I.D.E.A
3. **Testing?** → P.R.O.M.P.T
4. **Setup?** → S.P.A.R.K
5. **Implementation?** → C.R.A.F.T or S.T.A.G.E
6. **Decisions?** → D.E.C.I.D.E
7. **Metrics?** → M.A.P
