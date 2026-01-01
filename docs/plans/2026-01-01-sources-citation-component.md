# Plan: SourcesCitation Component

**Date:** 2026-01-01  
**Status:** In Progress  
**Feature:** Add source citations to ResultDetail page after ContingenciesList

---

## Overview

Create a `SourcesCitation` component to display official government sources and references for visa program information, improving transparency and legal compliance.

### Key Behavior

- **Dynamic content** — Like all components below ProgramTabs (ScoreBreakdown, RiskFactorsList, InteractiveFlowchart, ContingenciesList), SourcesCitation updates when the user selects a different program tab
- **Single source per program** — Currently displays one official government URL per selected program
- **Future-ready** — Design accommodates expansion to multiple sources per program

---

## Team Roles & Responsibilities

| Role | Responsibility | Deliverable |
|------|---------------|-------------|
| **Coordinator** | Write plan, track progress | This document |
| **UX Designer** | Define component design | Design spec below |
| **Architecture Engineer** | Define data structure | Type definitions |
| **Frontend Engineer** | Implement component | `SourcesCitation.tsx` |
| **QA Engineer** | Write/run tests | Test coverage |

---

## Design Specification (UX Designer)

### Visual Design
Following German/Scandinavian design principles (Dieter Rams, Ulm School):
- **Minimal, functional layout** — Sharp corners, 2px borders (consistent with ContingenciesList)
- **Clear typography** — Uppercase section header, readable body text
- **Muted colors** — Use neutral backgrounds, not primary colors
- **External link indicator** — Clear visual for outbound links
- **Numbered sources** — Consistent with contingency plan pattern

### Component Structure

Current (single source per program):

```text
┌─────────────────────────────────────────────────────┐
│ SOURCES                                             │
│ Official government information for this program    │
├─────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────┐ │
│ │ 01 │ Program Name — Official Government Site    │ │
│ │    │ [→ Visit Official Source]                  │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

Future-ready (multiple sources — design accommodates this):

```text
┌─────────────────────────────────────────────────────┐
│ SOURCES                                             │
│ Official government information for this program    │
├─────────────────────────────────────────────────────┤
│ │ 01 │ Government Immigration Portal   [→ Link]   │ │
│ │ 02 │ Embassy Information              [→ Link]   │ │
│ │ 03 │ Application Requirements         [→ Link]   │ │
└─────────────────────────────────────────────────────┘
```

---

## Architecture (Architecture Engineer)

### Data Source

- Use existing `officialUrl` field from `VisaProgram` interface in `src/types/viability.ts`
- Look up programs from `ALL_VISA_PROGRAMS` in `src/data/visaPrograms.ts`
- Component receives `programId` and looks up the corresponding program's officialUrl

### Props Interface

```typescript
interface SourcesCitationProps {
  programId: string;  // Active program ID (changes when user selects different tab)
}
```

### Behavior

- When `programId` changes (user selects different program tab), component re-renders with new source
- Looks up program from `ALL_VISA_PROGRAMS` by `programId`
- Displays `officialUrl` if present; shows fallback message if missing

### Dependencies

- `src/data/visaPrograms.ts` — ALL_VISA_PROGRAMS lookup
- No new types needed — uses existing VisaProgram

---

## Implementation Tasks

### Task 1: Create SourcesCitation Component (Frontend Engineer)

- [ ] Create `src/components/results/SourcesCitation.tsx`
- [ ] Follow ContingenciesList design patterns (2px borders, uppercase headers)
- [ ] Look up program from ALL_VISA_PROGRAMS by programId
- [ ] Display program name and officialUrl with external link icon
- [ ] Handle missing URLs gracefully (show "No official source available")
- [ ] Use list structure for future expandability
- [ ] Ensure responsive design

### Task 2: Integrate into ResultDetail (Frontend Engineer)

- [ ] Import SourcesCitation component
- [ ] Add after ContingenciesList in the main content area
- [ ] Pass `activeProgramId` prop (component updates when tab changes)

### Task 3: Testing (QA Engineer)

- [ ] Add component tests to existing test file or new test
- [ ] Test with programs that have officialUrl
- [ ] Test with programs missing officialUrl
- [ ] Test that component updates when programId changes
- [ ] Test responsive behavior

---

## Acceptance Criteria

1. SourcesCitation component renders after ContingenciesList
2. Shows official government URL for the active program
3. External links open in new tab with proper security (rel="noopener noreferrer")
4. Gracefully handles programs without officialUrl
5. Follows existing design patterns (sharp corners, 2px borders, uppercase headers)
6. Build passes with no TypeScript errors
7. ESLint passes with no errors
8. All tests pass

---

## Notes

- This addresses LEGAL-003 from the Legal Review: "Success rate citations lack citation or methodology"
- Using existing `officialUrl` field means no data migration needed
- Component should update when user switches between program tabs

---

**Coordinator Sign-off:** Plan approved, ready for implementation
