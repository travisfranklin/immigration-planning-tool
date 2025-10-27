# Feature Specification: Interactive Result Detail Page with Flowchart Integration

## Overview

Merge the separate "Flowchart" and "Detail View" concepts into a single, unified "Result Detail" page that displays comprehensive country information alongside an interactive flowchart where users can click on individual steps to view detailed information about that step.

## User Flow

```
1. User completes profile → /profile
2. User views results → /results (rankings table)
3. User clicks on a country → /result-detail/:countryCode
4. Result Detail page shows:
   - Country header with viability score
   - Recommended program info
   - Score breakdown
   - Risk factors
   - Contingencies
   - Interactive flowchart (NEW)
   - Alternative programs
5. User can click on flowchart steps to see details
6. User can share the URL: /result-detail/DE (shareable link)
```

## New Route Structure

### Current Routes
- `/results` - Rankings table with inline detail view
- `/flowchart` - Standalone flowchart viewer

### New Routes
- `/results` - Rankings table only (no inline detail view)
- `/result-detail/:countryCode` - Unified detail + flowchart view (NEW)
- `/flowchart` - Standalone flowchart viewer (unchanged, for reference)

## Page Layout: ResultDetail (/result-detail/:countryCode)

### Top Section
- Back button to /results
- Country header with viability score
- Recommended program card

### Main Content Area (Two-Column Layout)
**Left Column (60%)**:
- Score breakdown
- Risk factors
- Contingencies
- Alternative programs

**Right Column (40%)**:
- Interactive flowchart (NEW)
- Selected step details panel (NEW)

### Interactive Flowchart Component

**Features**:
- Display flowchart using Mermaid.js (existing)
- Make flowchart steps clickable
- Highlight selected step
- Show step details in side panel
- Display step information:
  - Step title
  - Description
  - Timeline/duration
  - Required documents
  - Important notes
  - Common issues

**Behavior**:
- First step auto-selected on page load
- Clicking a step updates the side panel
- Side panel scrolls independently
- Mobile: Stack vertically (flowchart above, details below)

## Component Structure

```
ResultDetail.tsx (new page)
├── Header section
├── Two-column layout
│   ├── Left column
│   │   ├── ScoreBreakdown
│   │   ├── RiskFactorsList
│   │   ├── ContingenciesList
│   │   └── AlternativePrograms
│   └── Right column
│       └── InteractiveFlowchart (new component)
│           ├── FlowchartViewer (existing)
│           └── StepDetailsPanel (new component)
```

## Data Requirements

### FlowchartDefinition Enhancement
Current flowchart steps need to include:
```typescript
interface FlowchartStep {
  id: string;
  title: string;
  description: string;
  timeline?: string;
  documents?: string[];
  notes?: string[];
  commonIssues?: string[];
}
```

## Implementation Phases

### Phase 1: Create ResultDetail Page
1. Create `/result-detail/:countryCode` route
2. Fetch country viability score from URL parameter
3. Display existing detail components (score, risks, contingencies)
4. Add breadcrumb navigation

### Phase 2: Create InteractiveFlowchart Component
1. Create InteractiveFlowchart wrapper component
2. Integrate existing FlowchartViewer
3. Add step selection state management
4. Create StepDetailsPanel component

### Phase 3: Update Results Page
1. Remove inline detail view from Results.tsx
2. Update "View Details" button to navigate to `/result-detail/:countryCode`
3. Simplify Results.tsx code

### Phase 4: Testing & Polish
1. Write unit tests for ResultDetail page
2. Write E2E tests for navigation flow
3. Test shareable URLs
4. Mobile responsiveness testing

## Shareable URLs

Users can share result details with URLs like:
- `https://app.example.com/result-detail/DE` - Germany
- `https://app.example.com/result-detail/NL` - Netherlands
- `https://app.example.com/result-detail/FR` - France

These URLs work independently and don't require the user to have completed a profile first (they show the default/example data).

## Navigation Updates

### Results Page
- "View Details" button → Navigate to `/result-detail/:countryCode`
- Remove inline detail view rendering

### ResultDetail Page
- Back button → Navigate to `/results`
- Breadcrumb: Home > Results > [Country Name]

### Header Navigation
- No changes needed (ResultDetail is not a main nav item)

## Accessibility Considerations

- Flowchart steps should be keyboard navigable
- Step details panel should announce changes to screen readers
- Color contrast for selected step highlight
- ARIA labels for interactive elements

## Mobile Responsiveness

- Desktop: Two-column layout (flowchart on right)
- Tablet: Two-column layout with adjusted widths
- Mobile: Single column (flowchart above, details below)

## Success Criteria

- [ ] ResultDetail page displays all country information
- [ ] Interactive flowchart allows clicking on steps
- [ ] Step details panel updates when step is clicked
- [ ] URLs are shareable and work correctly
- [ ] Results page navigation updated
- [ ] All tests passing
- [ ] Mobile responsive
- [ ] Accessibility compliant

