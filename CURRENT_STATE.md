# Current Project State

**Last Updated**: 2025-10-18  
**Phase**: Phase 2 (40% Complete)  
**Status**: 🟢 Running & Functional

---

## 🚀 Quick Start

### Start Development Server
```bash
npm run dev
```
Server runs on: http://localhost:5173/

### Build for Production
```bash
npm run build
```

### Run Tests
```bash
npm run test
```

### Lint Code
```bash
npm lint
```

---

## 📁 Project Structure

```
immigration-pipeline/
├── src/
│   ├── components/          # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/storage/   # IndexedDB operations
│   ├── types/              # TypeScript interfaces
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── index.html              # HTML template
```

---

## 🔧 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Node.js | 24.10.0 |
| Frontend | React | 19.1.1 |
| Build | Vite | 7.1.7 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS | Latest |
| Storage | IndexedDB | Browser API |
| Routing | React Router | Latest |
| Testing | Vitest | Latest |
| E2E Testing | Playwright | Latest |

---

## 📦 Key Dependencies

### Production
- react@19.1.1
- react-dom@19.1.1
- react-router-dom (routing)
- zustand (state management - ready)

### Development
- vite@7.1.7
- typescript@5.9.3
- tailwindcss (styling)
- vitest (unit testing)
- @testing-library/react (component testing)
- @playwright/test (E2E testing)
- eslint (linting)

---

## 🗄️ Database Schema

### IndexedDB Stores

#### userProfiles
```typescript
{
  id: string,
  createdAt: number,
  updatedAt: number,
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  citizenship: "US",
  annualIncome: number,
  savingsAmount: number,
  employmentStatus: string,
  educationLevel: string,
  fieldOfStudy: string,
  yearsOfExperience: number,
  currentOccupation: string,
  industryType: string,
  languages: Language[],
  maritalStatus: string,
  familyMembers: FamilyMember[],
  targetCountries: string[],
  immigrationPath: string,
  timelineMonths?: number,
  hasHealthInsurance: boolean,
  hasJobOffer: boolean,
  jobOfferCountry?: string
}
```

#### viabilityScores
```typescript
{
  id: string,
  userId: string,
  countryCode: string,
  countryName: string,
  createdAt: number,
  updatedAt: number,
  componentScores: {
    career: number,
    financial: number,
    education: number,
    language: number,
    family: number
  },
  overallScore: number,
  viabilityLevel: string,
  riskFactors: RiskFactor[],
  overallRiskLevel: string,
  contingencies: Contingency[],
  recommendedPath?: string,
  estimatedTimelineMonths?: number,
  notes?: string
}
```

#### countryRules
```typescript
{
  countryCode: string,
  countryName: string,
  region: string,
  workVisa: WorkVisaRequirements,
  permanentResidency: PermanentResidencyRequirements,
  citizenship: CitizenshipRequirements,
  officialLanguages: string[],
  costOfLiving: string,
  qualityOfLife: number,
  economicStability: number,
  specialPrograms?: string[],
  notes?: string
}
```

---

## 🎨 UI Components Available

### Layout
- `<Layout>` - Main layout wrapper with header, sidebar, content

### Form Components
- `<Input>` - Text input with label, error, helper text
- `<Select>` - Dropdown with label, error, helper text
- `<Button>` - Button with variants (primary, secondary, danger, success, warning)

### Content Components
- `<Card>` - Card container with title, content, footer

---

## 🪝 Custom Hooks Available

### useUserProfile
```typescript
const {
  profile,
  loading,
  error,
  createProfile,
  updateProfile,
  deleteProfile,
  loadProfile,
  loadLatestProfile
} = useUserProfile(userId?)
```

### useViabilityScores
```typescript
const {
  scores,
  ranking,
  loading,
  error,
  createScore,
  updateScore,
  deleteScore,
  loadUserScores,
  loadUserRanking,
  deleteAllUserScores
} = useViabilityScores(userId?)
```

### useLocalStorage
```typescript
const {
  value,
  loading,
  error,
  setValue,
  removeValue
} = useLocalStorage<T>(key, initialValue?)
```

---

## 🔐 Privacy & Security

✅ **All data stored locally** - IndexedDB on user's device  
✅ **No server communication** - No data leaves the browser  
✅ **No tracking** - No analytics or telemetry  
✅ **No cookies** - No third-party tracking  
✅ **User control** - Users can export/delete all data  

---

## 📊 Current Routes

| Route | Component | Status |
|-------|-----------|--------|
| / | Home | ✅ Complete |
| /profile | Profile (TBD) | ⏳ Planned |
| /dashboard | Dashboard (TBD) | ⏳ Planned |
| /results | Results (TBD) | ⏳ Planned |

---

## 🧪 Testing Setup

### Unit Tests
```bash
npm run test
```
Uses Vitest + @testing-library/react

### E2E Tests
```bash
npm run test:e2e
```
Uses Playwright

### Coverage
```bash
npm run test:coverage
```

---

## 🎯 MVP Features (Phase 2)

- ✅ Project initialization
- ✅ IndexedDB storage
- ✅ Type definitions
- ✅ Custom hooks
- ✅ UI components
- ✅ Routing setup
- 🔄 Form components
- 🔄 Multi-step form
- ⏳ Viability algorithm
- ⏳ Dashboard
- ⏳ Testing

---

## 🚨 Known Issues

None currently - all systems operational ✅

---

## 📝 Environment Variables

None required for MVP - all data is local

---

## 🔗 Important Files

| File | Purpose |
|------|---------|
| src/App.tsx | Main app component, DB init |
| src/services/storage/indexedDB.ts | Core storage operations |
| src/types/user.ts | User profile types |
| src/types/viability.ts | Viability score types |
| src/hooks/useUserProfile.ts | Profile management hook |
| tailwind.config.js | Tailwind theme |
| vite.config.ts | Vite configuration |

---

## 💡 Tips for Development

1. **Use custom hooks** for data management
2. **Leverage TypeScript** for type safety
3. **Use Tailwind classes** for styling
4. **Test with IndexedDB** for persistence
5. **Check browser DevTools** for storage inspection

---

## 🎓 Documentation

- [START_HERE.md](./START_HERE.md) - Project overview
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
- [data-schema.md](./data-schema.md) - Data model
- [PHASE_2_IMPLEMENTATION_GUIDE.md](./PHASE_2_IMPLEMENTATION_GUIDE.md) - Implementation tasks
- [PHASE_2_PROGRESS.md](./PHASE_2_PROGRESS.md) - Current progress
- [PHASE_2_SESSION_SUMMARY.md](./PHASE_2_SESSION_SUMMARY.md) - Session summary

---

**Status**: 🟢 Ready for Development  
**Next Task**: Form Components  
**Estimated Completion**: 2025-10-25

