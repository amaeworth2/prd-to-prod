# Prompt Template Master Guide
## FIFA Atlanta Navigator Project - Educational Workflow

This guide provides a complete workflow for students to use AI assistants (Claude/Gemini) to go from a Product Requirements Document (PRD) to fully implemented code.

---

## Overview of the Complete Workflow

```
Phase 1: Foundation Documents (Students → AI)
  └─> Generate: spec.md, guardrails.md, acceptance_criteria.md

Phase 2: Implementation (Students/AI → AI)
  └─> Execute: Individual tickets using AI coding assistants

Phase 3: Milestone Planning (Students → AI)
  └─> Generate: Epic-level milestones (MS-01, MS-02, etc.)
      └─> Each Epic contains Stories (MS-01.01, MS-01.02, etc.)
          └─> Each Story contains Tickets (MS-01.01-A, MS-01.01-B, etc.)
```

---

## What Students Will Build

A Next.js application featuring:
- **Epic 1 (MS-01)**: Project Setup & Core Features
  - Next.js project initialization
  - Google Maps integration (traffic & location)
  - MARTA Bus & Train API integration (with Codespaces proxy solution)
  - Mock FIFA team schedule display

- **Epic 2 (MS-02)**: Internationalization
  - Multi-language support (English, Spanish, German, Korean)
  - Language switcher UI
  - Translated content across the application

- **Epic 3 (MS-03)**: Polish & Animation (if time permits)
  - Smooth animations for transit vehicles (like Uber cars)
  - Enhanced UX and visual polish

---

## The Three Phases Explained

### Phase 1: Foundation Documents
**Who Does This**: Students
**Tool**: AI Assistant (Claude/Gemini)
**Input**: PRD.md (provided during class)
**Output**: Technical foundation documents

Students will feed the PRD to an AI assistant using 4 different prompt frameworks:
- **CRAFT**: Generate `spec.md` (technical specification)
- **DECIDE**: Generate `guardrails.md` (what to do/not do)
- **MAP**: Generate `acceptance_criteria.md` (how to verify success)
- **PROMPT**: Generate testing requirements

### Phase 2: Implementation
**Who Does This**: AI Coding Assistant (with student guidance)
**Tool**: Claude Code / Gemini Code
**Input**: Individual ticket files from Phase 3
**Output**: Working code

Students will feed each ticket to an AI coding assistant, which will:
1. Read the ticket requirements
2. Implement the code
3. Test the implementation
4. Verify acceptance criteria

### Phase 3: Milestone Planning
**Who Does This**: Students
**Tool**: AI Assistant (Claude/Gemini)
**Input**: Foundation documents from Phase 1
**Output**: Hierarchical milestone structure

Students will use AI to break down the project into:
- **Epics** (MS-01, MS-02): Major feature areas
- **Stories** (MS-01.01, MS-01.02): Specific features within an epic
- **Tickets** (MS-01.01-A, MS-01.01-B): Atomic implementation tasks

---

## File Structure Overview

```
docs/
├── PromptTemplates/
│   ├── 00-MASTER-GUIDE.md (this file)
│   ├── 01-PHASE-1-Foundation-Prompts.md
│   ├── 02-PHASE-2-Implementation-Prompts.md
│   └── 03-PHASE-3-Milestone-Prompts.md
```

---

## How to Use This Guide

1. **Instructor**: Present the PRD live during class
2. **Students**: Follow Phase 1 prompts to generate foundation docs
3. **Students**: Execute Phase 2 prompts to implement each ticket
4. **Students**: Use Phase 3 prompts to create milestone structure (documentation)
5. **Students**: Test and verify the final application

---

## Important Notes

- Phases 1 and 2 happen during class for actual development
- Phase 3 is for documenting what was built (creating the milestone structure)
- The AI assistant is a tool, not a replacement for understanding
- Students should review and understand all generated documents
- The hierarchical structure (Epic → Story → Ticket) is critical for organization

---

## Learning Objectives

By completing this workflow, students will learn:
1. How to work effectively with AI coding assistants
2. How to structure complex projects into manageable tasks
3. Modern web development with Next.js, TypeScript, and APIs
4. Environment-specific development (GitHub Codespaces)
5. Internationalization and accessibility best practices
6. The importance of proper documentation and planning

---

## Next Steps

Proceed to:
- **Phase 1**: [01-PHASE-1-Foundation-Prompts.md](./01-PHASE-1-Foundation-Prompts.md)

Once Phase 1 is complete, move to Phase 2, then Phase 3.
