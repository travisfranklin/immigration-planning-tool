# EU Immigration Planning Application - Architecture

## Project Structure

```
immigration-pipeline/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── PersonalInfoForm.tsx
│   │   │   ├── FinancialInfoForm.tsx
│   │   │   ├── EducationForm.tsx
│   │   │   ├── CareerForm.tsx
│   │   │   ├── FamilyForm.tsx
│   │   │   └── LanguageForm.tsx
│   │   ├── dashboard/
│   │   │   ├── CountryRankingDashboard.tsx
│   │   │   ├── ViabilityScoreCard.tsx
│   │   │   └── RiskFactorDisplay.tsx
│   │   ├── flowchart/
│   │   │   ├── FlowchartViewer.tsx
│   │   │   ├── InteractiveFlowchart.tsx
│   │   │   └── StepDetailsPanel.tsx
│   │   ├── results/
│   │   │   ├── CountryResultsTable.tsx
│   │   │   ├── ScoreBreakdown.tsx
│   │   │   ├── RiskFactorsList.tsx
│   │   │   └── ContingenciesList.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Layout.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── services/
│   │   ├── storage/
│   │   │   ├── indexedDB.ts
│   │   │   ├── userProfileStore.ts
│   │   │   └── viabilityScoreStore.ts
│   │   ├── algorithm/
│   │   │   ├── viabilityCalculator.ts
│   │   │   ├── riskAnalyzer.ts
│   │   │   └── contingencyPlanner.ts
│   │   ├── data/
│   │   │   └── countryRules.ts
│   │   └── export/
│   │       ├── jsonExporter.ts
│   │       └── csvExporter.ts
│   ├── types/
│   │   ├── user.ts
│   │   ├── viability.ts
│   │   └── country.ts
│   ├── hooks/
│   │   ├── useUserProfile.ts
│   │   ├── useViabilityScores.ts
│   │   └── useLocalStorage.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── Results.tsx
│   │   ├── ResultDetail.tsx
│   │   ├── Flowchart.tsx
│   │   └── Settings.tsx
│   ├── App.tsx
│   └── main.tsx
├── tests/
│   ├── unit/
│   │   ├── algorithm.test.ts
│   │   ├── storage.test.ts
│   │   └── export.test.ts
│   ├── e2e/
│   │   ├── profile-creation.spec.ts
│   │   ├── viability-calculation.spec.ts
│   │   └── data-persistence.spec.ts
│   └── fixtures/
│       └── testData.ts
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── playwright.config.ts
├── data-schema.md
├── decisions.md
└── ARCHITECTURE.md
```

## Data Flow Architecture

```
User Input (Forms)
    ↓
Local State (React Hooks)
    ↓
IndexedDB Storage
    ↓
Viability Calculator
    ↓
Risk Analyzer
    ↓
Dashboard Display
```

## Component Hierarchy

```
App
├── Layout
│   ├── Header
│   ├── Sidebar
│   └── MainContent
│       ├── Home
│       ├── Profile
│       │   └── ProfileFormAccordion
│       │       ├── PersonalInfoForm
│       │       ├── FinancialInfoForm
│       │       ├── EducationForm
│       │       ├── CareerForm
│       │       ├── FamilyForm
│       │       └── LanguageForm
│       ├── Results
│       │   └── CountryResultsTable
│       ├── ResultDetail
│       │   ├── ScoreBreakdown
│       │   ├── RiskFactorsList
│       │   ├── ContingenciesList
│       │   └── InteractiveFlowchart
│       │       ├── FlowchartViewer
│       │       └── StepDetailsPanel
│       ├── Flowchart
│       │   └── FlowchartViewer
│       └── Settings
```

## Routing Structure

The application uses React Router with the following routes:

- `/` - Home page
- `/profile` - User profile form with accordion sections
- `/results` - Country rankings table with viability scores
- `/result-detail/:countryCode` - Detailed view for a specific country with interactive flowchart
- `/flowchart` - Standalone flowchart viewer
- `/settings` - Application settings

### Key Route Features

- **ResultDetail Route**: Accepts a country code parameter and displays:
  - Country viability score and breakdown
  - Risk factors and contingencies
  - Interactive flowchart with clickable steps
  - Step details panel
  - Shareable URL for easy sharing

## Storage Layer

### IndexedDB Schema
- **Database**: `immigration-app`
- **Stores**:
  - `userProfiles`: Stores user profile data
  - `viabilityScores`: Stores calculated viability scores
  - `countryRules`: Stores country-specific rules (static)

### Key Operations
- Create/Read/Update/Delete user profiles
- Calculate and cache viability scores
- Query scores by country or user
- Export/import data

## Algorithm Layer

### Viability Calculator
- Input: User profile, country rules
- Process: Calculate component scores and weighted average
- Output: Overall viability score (0-100)

### Risk Analyzer
- Input: User profile, country rules, viability score
- Process: Identify risk factors based on profile gaps
- Output: List of risk factors with severity

### Contingency Planner
- Input: User profile, identified risks
- Process: Generate contingency scenarios
- Output: List of scenarios with mitigation strategies

## Security & Privacy

- All data stored locally in IndexedDB
- No network requests for user data
- Optional encryption using Web Crypto API
- User can delete all data at any time
- No tracking or analytics

## Performance Considerations

- Lazy load country rules
- Cache viability scores
- Debounce form input to reduce recalculations
- Use React.memo for expensive components
- Optimize IndexedDB queries with proper indexing

