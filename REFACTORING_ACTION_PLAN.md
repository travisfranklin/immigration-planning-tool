# Refactoring Action Plan

**Date**: 2025-10-26  
**Status**: Ready to Execute  
**Total Effort**: 15.5 hours  
**Priority**: High

---

## 🎯 Executive Summary

This action plan addresses **14 categories** of code duplication and magic strings identified in the codebase audit. The plan is divided into 4 phases, prioritized by impact and effort.

**Key Metrics**:
- 🔴 **2 Critical Issues** (FLOWCHARTS duplication, hardcoded colors)
- 🟡 **2 High-Priority Issues** (Loading spinners, error states)
- 🟠 **5 Moderate Issues** (Inline buttons, toast system, etc.)
- 🟢 **5 Low-Priority Issues** (Text strings, magic numbers, etc.)

---

## 📋 Phase 1: Critical Fixes (2 hours)

### 1.1 Consolidate FLOWCHARTS Mapping (1 hour)

**Problem**: FLOWCHARTS object duplicated in 3 files (270 lines total)

**Files to Create**:
```
src/data/flowcharts/index.ts
```

**Implementation**:
```typescript
// src/data/flowcharts/index.ts
import { CountryCode } from '../../constants/countries';
import type { FlowchartDefinition } from '../../types/flowchart';
import { germanyFlowcharts } from './germany';
import { netherlandsFlowcharts } from './netherlands';
// ... import all 27 countries

export const ALL_FLOWCHARTS: Record<CountryCode, Record<string, FlowchartDefinition>> = {
  [CountryCode.DE]: germanyFlowcharts,
  [CountryCode.NL]: netherlandsFlowcharts,
  [CountryCode.FR]: franceFlowcharts,
  [CountryCode.ES]: spainFlowcharts,
  [CountryCode.IT]: italyFlowcharts,
  [CountryCode.AT]: austriaFlowcharts,
  [CountryCode.BE]: belgiumFlowcharts,
  [CountryCode.LU]: luxembourgFlowcharts,
  [CountryCode.IE]: irelandFlowcharts,
  [CountryCode.SE]: swedenFlowcharts,
  [CountryCode.DK]: denmarkFlowcharts,
  [CountryCode.FI]: finlandFlowcharts,
  [CountryCode.PT]: portugalFlowcharts,
  [CountryCode.GR]: greeceFlowcharts,
  [CountryCode.CY]: cyprusFlowcharts,
  [CountryCode.MT]: maltaFlowcharts,
  [CountryCode.PL]: polandFlowcharts,
  [CountryCode.CZ]: czechFlowcharts,
  [CountryCode.HU]: hungaryFlowcharts,
  [CountryCode.RO]: romaniaFlowcharts,
  [CountryCode.BG]: bulgariaFlowcharts,
  [CountryCode.SK]: slovakiaFlowcharts,
  [CountryCode.SI]: sloveniaFlowcharts,
  [CountryCode.HR]: croatiaFlowcharts,
  [CountryCode.EE]: estoniaFlowcharts,
  [CountryCode.LV]: latviaFlowcharts,
  [CountryCode.LT]: lithuaniaFlowcharts,
};

export function getFlowchartsForCountry(code: CountryCode): Record<string, FlowchartDefinition> {
  return ALL_FLOWCHARTS[code] || {};
}

export function getFlowchart(countryCode: CountryCode, programId: string): FlowchartDefinition | undefined {
  return ALL_FLOWCHARTS[countryCode]?.[programId];
}
```

**Files to Update**:
1. `src/pages/Flowchart.tsx` - Remove FLOWCHARTS, import from index
2. `src/pages/ResultDetail.tsx` - Remove FLOWCHARTS, import from index
3. `src/data/flowcharts/flowcharts.test.ts` - Import from index

**Testing**:
```bash
npm run build
npm test -- src/data/flowcharts/flowcharts.test.ts
```

---

### 1.2 Add Missing Button Variants (1 hour)

**Problem**: Inline buttons not using Button component (15+ instances)

**Files to Update**:
```
src/components/Button.tsx
src/pages/Results.tsx
src/pages/Profile.tsx
src/pages/ResultDetail.tsx
src/pages/Flowchart.tsx
src/pages/Settings.tsx
```

**Step 1**: Add missing variants to Button.tsx
```typescript
// src/components/Button.tsx
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  danger: 'bg-danger-600 text-white hover:bg-danger-700',
  success: 'bg-success-600 text-white hover:bg-success-700',  // ADD THIS
  warning: 'bg-warning-600 text-white hover:bg-warning-700',
  ghost: 'text-gray-700 hover:text-primary-600 hover:bg-gray-100',  // ADD THIS
};
```

**Step 2**: Replace inline buttons in Results.tsx
```tsx
// Before
<button
  onClick={handleRecalculate}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
>
  🔄 Recalculate Scores
</button>

// After
<Button variant="primary" onClick={handleRecalculate}>
  🔄 Recalculate Scores
</Button>
```

**Step 3**: Replace all other inline buttons (Profile, ResultDetail, Flowchart, Settings)

**Testing**:
```bash
npm run dev
# Manually test all buttons work correctly
```

---

## 📋 Phase 2: High-Impact Fixes (4 hours)

### 2.1 Create LoadingSpinner Component (1 hour)

**Files to Create**:
```
src/components/LoadingSpinner.tsx
src/components/LoadingSpinner.test.tsx
```

**Implementation**:
```typescript
// src/components/LoadingSpinner.tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({ 
  size = 'md', 
  message, 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-16 w-16',
  };
  
  const spinner = (
    <div className="text-center">
      <div 
        className={`animate-spin rounded-full border-b-2 border-primary-600 mx-auto mb-4 ${sizeClasses[size]}`}
        role="status"
        aria-label="Loading"
      />
      {message && <p className="text-gray-600">{message}</p>}
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }
  
  return spinner;
}
```

**Files to Update**:
1. `src/components/index.ts` - Export LoadingSpinner
2. `src/pages/Results.tsx` - Replace 2 loading spinners
3. `src/pages/ResultDetail.tsx` - Replace 1 loading spinner
4. `src/pages/Profile.tsx` - Replace 1 loading spinner
5. `src/components/Button.tsx` - Replace inline spinner

**Testing**:
```bash
npm test -- src/components/LoadingSpinner.test.tsx
```

---

### 2.2 Create ErrorState Component (1 hour)

**Files to Create**:
```
src/components/ErrorState.tsx
src/components/ErrorState.test.tsx
```

**Implementation**:
```typescript
// src/components/ErrorState.tsx
import { Button } from './Button';

interface ErrorStateProps {
  title?: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  fullScreen?: boolean;
  icon?: string;
}

export function ErrorState({ 
  title = 'Error',
  message, 
  actionText,
  onAction,
  fullScreen = true,
  icon = '⚠️'
}: ErrorStateProps) {
  const content = (
    <div className="bg-white rounded-lg shadow-md border border-red-200 p-8 max-w-md">
      <div className="text-red-600 text-5xl mb-4 text-center">{icon}</div>
      <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{message}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction} className="w-full">
          {actionText}
        </Button>
      )}
    </div>
  );
  
  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        {content}
      </div>
    );
  }
  
  return content;
}
```

**Files to Update**:
1. `src/components/index.ts` - Export ErrorState
2. `src/pages/Results.tsx` - Replace error state
3. `src/pages/ResultDetail.tsx` - Replace error state

---

### 2.3 Create EmptyState Component (30 min)

**Files to Create**:
```
src/components/EmptyState.tsx
```

**Implementation**:
```typescript
// src/components/EmptyState.tsx
import { Button } from './Button';

interface EmptyStateProps {
  icon?: string;
  title?: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };
}

export function EmptyState({ icon, title, message, action }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
      {icon && <div className="text-5xl mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>}
      <p className="text-gray-600 mb-4">{message}</p>
      {action && (
        <Button variant={action.variant || 'primary'} onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
```

**Files to Update**:
1. `src/pages/Results.tsx` - Replace empty state
2. `src/pages/Flowchart.tsx` - Replace empty state

---

### 2.4 Create Toast System (1.5 hours)

**Files to Create**:
```
src/components/Toast.tsx
src/hooks/useToast.ts
src/contexts/ToastContext.tsx
```

**Implementation**: See detailed implementation in audit document

**Files to Update**:
1. `src/pages/Settings.tsx` - Replace inline toast system

---

## 📋 Phase 3: Polish (5 hours)

### 3.1 Create UI Constants (2 hours)

**Files to Create**:
```
src/constants/uiStyles.ts
src/constants/messages.ts
src/constants/config.ts
```

### 3.2 Consolidate Score Colors (30 min)

**Files to Update**:
```
src/constants/viability.ts
src/components/results/ScoreBreakdown.tsx
```

---

## 📋 Phase 4: Nice-to-Have (4.5 hours)

### 4.1 Text Strings Constants (1 hour)
### 4.2 Magic Numbers Constants (30 min)
### 4.3 File Naming Utility (15 min)
### 4.4 Version Number from package.json (5 min)

---

## ✅ Checklist

### Phase 1 (Critical)
- [ ] Create `src/data/flowcharts/index.ts`
- [ ] Update Flowchart.tsx to use centralized FLOWCHARTS
- [ ] Update ResultDetail.tsx to use centralized FLOWCHARTS
- [ ] Update flowcharts.test.ts to use centralized FLOWCHARTS
- [ ] Add `success` and `ghost` variants to Button.tsx
- [ ] Replace inline buttons in Results.tsx
- [ ] Replace inline buttons in Profile.tsx
- [ ] Replace inline buttons in ResultDetail.tsx
- [ ] Replace inline buttons in Flowchart.tsx
- [ ] Replace inline buttons in Settings.tsx
- [ ] Run tests: `npm test`
- [ ] Run build: `npm run build`

### Phase 2 (High-Impact)
- [ ] Create LoadingSpinner component
- [ ] Write LoadingSpinner tests
- [ ] Replace loading spinners in Results.tsx
- [ ] Replace loading spinners in ResultDetail.tsx
- [ ] Replace loading spinners in Profile.tsx
- [ ] Replace loading spinner in Button.tsx
- [ ] Create ErrorState component
- [ ] Write ErrorState tests
- [ ] Replace error states in Results.tsx
- [ ] Replace error states in ResultDetail.tsx
- [ ] Create EmptyState component
- [ ] Replace empty states in Results.tsx
- [ ] Replace empty states in Flowchart.tsx
- [ ] Create Toast system (Toast, useToast, ToastContext)
- [ ] Replace inline toast in Settings.tsx
- [ ] Run tests: `npm test`

### Phase 3 (Polish)
- [ ] Create UI constants file
- [ ] Consolidate score color logic
- [ ] Update components to use constants
- [ ] Run tests: `npm test`

### Phase 4 (Nice-to-Have)
- [ ] Create messages constants
- [ ] Create config constants
- [ ] Create file naming utility
- [ ] Use package.json version
- [ ] Run tests: `npm test`

---

## 🧪 Testing Strategy

After each phase:
```bash
# Run all tests
npm test

# Run build
npm run build

# Manual testing
npm run dev
# Test all affected pages manually
```

---

## 📊 Success Metrics

- **Code Reduction**: ~400 lines of duplicated code removed
- **Maintainability**: Single source of truth for all patterns
- **Consistency**: All buttons, loading states, errors look the same
- **Developer Experience**: Easier to add new features
- **Test Coverage**: All new components have tests

---

**Ready to Execute!**

