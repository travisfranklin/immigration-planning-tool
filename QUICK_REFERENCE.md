# EU Immigration Planning Application - Quick Reference Card

## 🎯 Project at a Glance

**Mission**: Local-first app for US citizens to plan EU immigration  
**Core Principle**: All data stored locally, no server persistence  
**Status**: Phase 1 Complete ✅ | Phase 2 Ready 🚀  
**Timeline**: 6-9 weeks total  

---

## 📊 Viability Algorithm (Quick Formula)

```
Overall Score = (
  Career × 0.30 +
  Financial × 0.25 +
  Education × 0.20 +
  Language × 0.15 +
  Family × 0.10
)
```

**Score Ranges**:
- 80-100: Excellent ✅
- 60-79: Good ✅
- 40-59: Moderate ⚠️
- 20-39: Low ⚠️
- 0-19: Very Low ❌

---

## 🏗️ Architecture Layers

```
UI Layer (React Components)
    ↓
Business Logic (Calculator, Analyzer, Planner)
    ↓
Data Abstraction (Stores)
    ↓
IndexedDB (Local Storage)
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/          (6 form components)
│   ├── dashboard/      (Dashboard components)
│   ├── layout/         (Layout components)
│   └── common/         (Reusable components)
├── services/
│   ├── storage/        (IndexedDB operations)
│   ├── algorithm/      (Calculations)
│   ├── data/           (Country rules)
│   └── export/         (Export functionality)
├── types/              (TypeScript interfaces)
├── hooks/              (Custom React hooks)
└── pages/              (Page components)
```

---

## 🔑 Key Data Structures

### UserProfile
```typescript
{
  id, firstName, lastName, dateOfBirth, citizenship,
  annualIncome, savingsAmount, investmentAssets,
  educationLevel, fieldOfStudy, yearsOfExperience,
  currentOccupation, yearsInCurrentRole,
  maritalStatus, dependents, spouseEducation,
  targetCountries[], immigrationPath, timelineMonths,
  languages: { language, proficiency }[]
}
```

### ViabilityScore
```typescript
{
  id, userId, countryCode, immigrationPath,
  financialScore, educationScore, careerScore,
  languageScore, familyScore, overallScore,
  riskFactors[], contingencies[]
}
```

---

## 🛠️ Technology Stack

| Purpose | Technology |
|---------|-----------|
| Frontend | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Storage | IndexedDB |
| Visualization | Mermaid.js |
| Testing | Playwright + Vitest |

---

## 📋 MVP Features (Phase 2)

- [x] User profile data collection (6 forms)
- [x] Multi-step form navigation
- [x] Local data persistence (IndexedDB)
- [x] Form validation
- [x] Basic dashboard layout
- [ ] Viability score calculation (Phase 3)
- [ ] Country ranking display (Phase 3)
- [ ] Risk factor display (Phase 3)

---

## 🌍 Supported Countries (MVP)

| Country | Code | Work Visa | PR | Citizenship |
|---------|------|-----------|----|----|
| Germany | DE | ✅ | ✅ | ✅ |
| Netherlands | NL | ✅ | ✅ | ✅ |
| France | FR | ✅ | ✅ | ✅ |
| Spain | ES | ✅ | ✅ | ✅ |
| Italy | IT | ✅ | ✅ | ✅ |

---

## 📚 Documentation Map

| Document | Purpose | Audience |
|----------|---------|----------|
| README.md | Quick start | Everyone |
| PROJECT_OVERVIEW.md | High-level summary | Stakeholders |
| ARCHITECTURE.md | System design | Engineers |
| data-schema.md | Data model | Engineers |
| UI_WIREFRAMES.md | UI specs | Designers |
| PROJECT_COORDINATION.md | Team structure | Team leads |
| decisions.md | Decision log | Everyone |
| PHASE_2_IMPLEMENTATION_GUIDE.md | Implementation tasks | Developers |
| eu_immigration_app_v0.1.yaml | User stories | PM, Developers |
| INDEX.md | Documentation index | Everyone |

---

## 🚀 Getting Started (Phase 2)

```bash
# 1. Initialize project
npm create vite@latest immigration-pipeline -- --template react-ts

# 2. Install dependencies
npm install react-router-dom zustand
npm install -D tailwindcss postcss autoprefixer

# 3. Start development
npm run dev

# 4. Follow PHASE_2_IMPLEMENTATION_GUIDE.md
```

---

## 🧪 Testing Commands

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage

# Build
npm run build

# Preview
npm run preview
```

---

## 🔒 Privacy Checklist

- [ ] No network requests for user data
- [ ] All data in IndexedDB (local only)
- [ ] No cookies or tracking
- [ ] User can export data
- [ ] User can delete data
- [ ] Optional encryption enabled
- [ ] No third-party analytics

---

## 📊 Component Checklist (Phase 2)

### Forms
- [ ] PersonalInfoForm
- [ ] FinancialInfoForm
- [ ] EducationForm
- [ ] CareerForm
- [ ] FamilyForm
- [ ] LanguageForm
- [ ] CountrySelectionForm

### Layout
- [ ] Header
- [ ] Sidebar
- [ ] Layout wrapper

### Common
- [ ] Button
- [ ] Card
- [ ] Input
- [ ] Select
- [ ] Modal
- [ ] ProgressBar

### Pages
- [ ] ProfilePage
- [ ] DashboardPage (Phase 3)
- [ ] CountryDetailPage (Phase 3)
- [ ] SettingsPage (Phase 3)

---

## 🎨 Design System

**Colors**:
- Primary: #2563EB (Blue)
- Success: #10B981 (Green)
- Warning: #F59E0B (Amber)
- Danger: #EF4444 (Red)
- Neutral: #6B7280 (Gray)

**Typography**:
- Headings: Inter Bold 24-32px
- Body: Inter Regular 14-16px
- Labels: Inter Medium 12-14px

**Spacing**: 8px base unit

---

## 🔄 Phase Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Phase 1 | 1 week | ✅ Complete |
| Phase 2 | 2-3 weeks | 🔄 In Progress |
| Phase 3 | 2-3 weeks | ⏳ Planned |
| Phase 4 | 1-2 weeks | ⏳ Planned |

---

## 👥 Team Roles

| Role | Responsibilities |
|------|------------------|
| Coordinator | Timeline, alignment, decisions |
| PM | Features, scope, stories |
| UX Designer | Wireframes, design system |
| Architecture Engineer | Data model, system design |
| Frontend Engineer | Implementation |
| QA Engineer | Testing, quality |

---

## ✅ Success Criteria

- MVP delivered on schedule
- All user stories implemented
- Zero critical bugs
- >80% test coverage
- WCAG 2.1 AA compliance
- No network requests for user data
- Data persists across sessions

---

## 📞 Quick Links

- **Start Here**: [README.md](./README.md)
- **High-Level Overview**: [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)
- **Implementation Guide**: [PHASE_2_IMPLEMENTATION_GUIDE.md](./PHASE_2_IMPLEMENTATION_GUIDE.md)
- **Data Model**: [data-schema.md](./data-schema.md)
- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **User Stories**: [eu_immigration_app_v0.1.yaml](./prompt_versions/eu_immigration_app_v0.1.yaml)
- **All Docs**: [INDEX.md](./INDEX.md)

---

**Last Updated**: 2025-10-18  
**Current Phase**: Phase 1 Complete ✅ | Phase 2 Ready 🚀

