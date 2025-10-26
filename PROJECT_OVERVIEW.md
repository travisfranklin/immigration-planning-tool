# EU Immigration Planning Application - Project Overview

## 🎯 Mission Statement

Design and build a **local-first application** for US citizens to plan and determine the viability of their immigration path (work visa, permanent residency, or citizenship) to various EU countries.

**Core Principle**: All user data is stored locally on the user's system with no server-side persistence.

## 📊 Project Scope

### Target Users
- US citizens considering immigration to the EU
- Age: 25-65
- Education: High school to PhD
- Career: Various occupations
- Family status: Single to families with dependents

### Geographic Scope (MVP)
- 🇩🇪 Germany
- 🇳🇱 Netherlands
- 🇫🇷 France
- 🇪🇸 Spain
- 🇮🇹 Italy

### Immigration Paths
- Work Visa
- Permanent Residency
- Citizenship

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│  (React Components - Forms, Dashboard, Flowcharts)      │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Business Logic Layer                        │
│  (Viability Calculator, Risk Analyzer, Contingencies)   │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Data Abstraction Layer                      │
│  (User Profile Store, Viability Score Store)            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              Local Storage Layer                         │
│  (IndexedDB - No Server Persistence)                    │
└─────────────────────────────────────────────────────────┘
```

## 📈 Viability Algorithm

### Scoring Formula
```
Overall Score = (
  Career Score × 0.30 +
  Financial Score × 0.25 +
  Education Score × 0.20 +
  Language Score × 0.15 +
  Family Score × 0.10
)
```

### Component Scores
| Component | Weight | Factors |
|-----------|--------|---------|
| Career | 30% | Occupation demand, salary alignment, experience |
| Financial | 25% | Income, savings, cost-of-living |
| Education | 20% | Education level, field relevance |
| Language | 15% | Proficiency vs. country requirements |
| Family | 10% | Family situation, country policies |

### Score Interpretation
- **80-100**: Excellent viability
- **60-79**: Good viability
- **40-59**: Moderate viability
- **20-39**: Low viability
- **0-19**: Very low viability

## 🔒 Data Privacy & Security

### Privacy Guarantees
✅ All data stored locally (IndexedDB)  
✅ No server-side persistence  
✅ No network transmission of user data  
✅ No tracking or analytics  
✅ User can export/delete all data  
✅ Optional encryption for sensitive data  

### Data Lifecycle
1. User enters data in forms
2. Data validated client-side
3. Data stored in IndexedDB
4. Data used for calculations
5. Results displayed locally
6. User can export or delete data

## 📋 MVP Feature Set

### Phase 1: Architecture & Design ✅
- [x] Data schema definition
- [x] System architecture
- [x] UI wireframes
- [x] User stories
- [x] Project documentation

### Phase 2: Local Storage & Forms (In Progress)
- [ ] IndexedDB integration
- [ ] User profile forms
- [ ] Form validation
- [ ] Data persistence
- [ ] Basic dashboard

### Phase 3: Algorithm & Flowcharts (Planned)
- [ ] Viability algorithm
- [ ] Risk analysis
- [ ] Contingency planning
- [ ] Flowchart visualization
- [ ] Algorithm tests

### Phase 4: Testing & Polish (Planned)
- [ ] E2E test suite
- [ ] Data integrity tests
- [ ] Algorithm accuracy tests
- [ ] UI functionality tests
- [ ] Performance optimization

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | React 18 + TypeScript | Modern, type-safe, component-based |
| Build | Vite | Fast development, optimized builds |
| Styling | Tailwind CSS | Utility-first, responsive design |
| Storage | IndexedDB | Client-side persistence, no server |
| Visualization | Mermaid.js | Lightweight flowcharts |
| Testing | Playwright + Vitest | Comprehensive E2E and unit testing |

## 📊 Data Model

### User Profile
```typescript
{
  id: string
  firstName: string
  lastName: string
  dateOfBirth: date
  citizenship: "US"
  
  // Financial
  annualIncome: number
  savingsAmount: number
  
  // Education
  educationLevel: "high_school" | "bachelor" | "master" | "phd"
  fieldOfStudy: string
  
  // Career
  currentOccupation: string
  yearsOfExperience: number
  
  // Family
  maritalStatus: string
  dependents: number
  
  // Goals
  targetCountries: string[]
  immigrationPath: "work_visa" | "permanent_residency" | "citizenship"
  timelineMonths: number
  
  // Languages
  languages: { language: string, proficiency: "A1"-"C2" }[]
}
```

### Viability Score
```typescript
{
  id: string
  userId: string
  countryCode: string
  
  // Component Scores
  financialScore: number (0-100)
  educationScore: number (0-100)
  careerScore: number (0-100)
  languageScore: number (0-100)
  familyScore: number (0-100)
  
  // Overall
  overallScore: number (0-100)
  
  // Risk & Contingency
  riskFactors: { category, severity, description }[]
  contingencies: { scenario, probability, mitigation }[]
}
```

## 🎨 User Interface

### Main Pages
1. **Onboarding**: Welcome and project overview
2. **Profile Form**: Multi-step data collection (6 steps)
3. **Dashboard**: Country ranking by viability score
4. **Country Details**: Detailed analysis for selected country
5. **Flowchart**: Immigration process visualization
6. **Settings**: Data export/import, preferences

### Design System
- **Colors**: Blue (primary), Green (success), Amber (warning), Red (danger)
- **Typography**: Inter font family
- **Spacing**: 8px base unit
- **Responsive**: Mobile-first, breakpoints at 640px, 1024px, 1280px

## 📅 Project Timeline

| Phase | Duration | Status | Deliverables |
|-------|----------|--------|--------------|
| Phase 1 | 1 week | ✅ Complete | Architecture, design, documentation |
| Phase 2 | 2-3 weeks | 🔄 In Progress | Storage, forms, persistence |
| Phase 3 | 2-3 weeks | ⏳ Planned | Algorithm, flowcharts, analysis |
| Phase 4 | 1-2 weeks | ⏳ Planned | Testing, optimization, polish |
| **Total** | **6-9 weeks** | | **MVP Ready** |

## 👥 Team Structure

| Role | Responsibilities | Key Artifacts |
|------|------------------|---------------|
| Coordinator | Timeline, alignment, decisions | decisions.md, PROJECT_COORDINATION.md |
| PM | Features, scope, stories | eu_immigration_app_v0.1.yaml |
| UX Designer | Wireframes, design system | UI_WIREFRAMES.md |
| Architecture Engineer | Data model, system design | data-schema.md, ARCHITECTURE.md |
| Frontend Engineer | Implementation | src/ directory |
| QA Engineer | Testing, quality | tests/ directory |

## ✅ Success Criteria

### Project Success
- MVP delivered on schedule
- All user stories implemented
- Zero critical bugs
- >80% test coverage
- WCAG 2.1 AA compliance

### User Success
- Profile creation in <5 minutes
- Accurate viability scores
- Clear risk factor display
- Data export capability
- Trust in data privacy

### Technical Success
- No network requests for user data
- Data persists across sessions
- Algorithm calculations accurate
- UI responsive and accessible
- Performance optimized

## 📚 Documentation

| Document | Purpose | Owner |
|----------|---------|-------|
| README.md | Project overview, quick start | Coordinator |
| data-schema.md | Data model and storage | Architecture Engineer |
| ARCHITECTURE.md | System design | Architecture Engineer |
| UI_WIREFRAMES.md | UI specifications | UX Designer |
| decisions.md | Project decisions | Coordinator |
| PROJECT_COORDINATION.md | Team coordination | Coordinator |
| PHASE_1_SUMMARY.md | Phase 1 deliverables | Coordinator |
| PHASE_2_IMPLEMENTATION_GUIDE.md | Phase 2 tasks | Frontend Engineer |

## 🚀 Getting Started

1. **Review Documentation**: Read README.md and ARCHITECTURE.md
2. **Understand Data Model**: Review data-schema.md
3. **Review User Stories**: Check eu_immigration_app_v0.1.yaml
4. **Phase 2 Kickoff**: Follow PHASE_2_IMPLEMENTATION_GUIDE.md
5. **Development**: Start with project initialization

---

**Project Status**: Phase 1 Complete ✅ | Phase 2 Ready to Start 🚀  
**Last Updated**: 2025-10-18  
**Next Milestone**: Phase 2 Completion (2-3 weeks)

