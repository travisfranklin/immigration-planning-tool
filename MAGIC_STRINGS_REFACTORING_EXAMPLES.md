# Magic Strings Refactoring: Before & After Examples

---

## Example 1: Country Code Handling

### BEFORE (Magic Strings)
```typescript
// src/pages/ResultDetail.tsx
const countryCode = searchParams.get('country');
if (!countryCode) {
  setError('Country code not provided');
  return;
}

const countryFlowcharts = FLOWCHARTS[countryCode]; // No type safety!
if (!countryFlowcharts) {
  setError(`No flowcharts for ${countryCode}`);
  return;
}

// Later in component
navigate(`/flowchart?country=${countryCode}&program=${programId}`);
```

**Problems:**
- ❌ No validation that countryCode is valid
- ❌ FLOWCHARTS[countryCode] could be undefined
- ❌ No IDE autocomplete
- ❌ Easy to typo country codes in URLs

### AFTER (Enums)
```typescript
// src/constants/countries.ts
export enum CountryCode {
  DE = 'DE',
  NL = 'NL',
  FR = 'FR',
  ES = 'ES',
  IT = 'IT',
  AT = 'AT',
  BE = 'BE',
  BG = 'BG',
  // ... all 27 countries
}

export const isValidCountryCode = (code: unknown): code is CountryCode => {
  return typeof code === 'string' && code in CountryCode;
};

// src/pages/ResultDetail.tsx
const countryParam = searchParams.get('country');
if (!isValidCountryCode(countryParam)) {
  setError('Invalid country code');
  return;
}

// Now countryParam is typed as CountryCode
const countryFlowcharts = FLOWCHARTS[countryParam]; // Type-safe!
if (!countryFlowcharts) {
  setError(`No flowcharts for ${countryParam}`);
  return;
}

// Type-safe navigation
navigate(`/flowchart?country=${CountryCode.AT}&program=${programId}`);
```

**Benefits:**
- ✅ Compile-time validation
- ✅ IDE autocomplete for country codes
- ✅ Impossible to pass invalid country code
- ✅ Self-documenting code

---

## Example 2: Program ID Lookup (The Recent Bug)

### BEFORE (Magic Strings - Caused Austria Startup Visa Bug)
```typescript
// src/data/flowcharts/austria.ts
export const austriaFlowcharts: Record<string, FlowchartDefinition> = {
  'at_eu_blue_card': { programId: 'at_eu_blue_card', ... },
  'at_startup': { programId: 'at_startup', ... }, // ❌ Key doesn't match programId!
  'at_self_employed': { programId: 'at_self_employed', ... },
};

// src/pages/ResultDetail.tsx
const recommendedFlowchart = countryFlowcharts
  ? countryFlowcharts[selectedScore.recommendedProgram.programId]
  : null; // ❌ Lookup fails because key format doesn't match!

// src/pages/Flowchart.tsx
const programParam = searchParams.get('program');
if (programs[programParam]) { // ❌ No validation
  return programParam;
}
```

**The Bug:**
- programId = 'at_startup'
- flowchart key = 'at_startup'
- But lookup logic expected 'startup' (without country prefix)
- Result: "No flowchart available" error

### AFTER (Enums - Bug Prevention)
```typescript
// src/constants/programIds.ts
export enum AustriaProgramId {
  EU_BLUE_CARD = 'at_eu_blue_card',
  STARTUP = 'at_startup',
  SELF_EMPLOYED = 'at_self_employed',
  FAMILY_REUNIFICATION = 'at_family_reunification',
  RED_WHITE_RED = 'at_red_white_red',
}

export type AllProgramIds = AustriaProgramId | GermanyProgramId | /* ... */;

export const isValidProgramId = (id: unknown): id is AllProgramIds => {
  return typeof id === 'string' && id.match(/^[a-z]{2}_[a-z_]+$/);
};

// src/data/flowcharts/austria.ts
export const austriaFlowcharts: Record<AustriaProgramId, FlowchartDefinition> = {
  [AustriaProgramId.EU_BLUE_CARD]: { programId: AustriaProgramId.EU_BLUE_CARD, ... },
  [AustriaProgramId.STARTUP]: { programId: AustriaProgramId.STARTUP, ... },
  [AustriaProgramId.SELF_EMPLOYED]: { programId: AustriaProgramId.SELF_EMPLOYED, ... },
};

// src/pages/ResultDetail.tsx
const programId = selectedScore.recommendedProgram?.programId;
if (!isValidProgramId(programId)) {
  setError('Invalid program ID');
  return;
}

// Now fully type-safe!
const recommendedFlowchart = countryFlowcharts?.[programId];

// src/pages/Flowchart.tsx
const programParam = searchParams.get('program');
if (!isValidProgramId(programParam)) {
  setError('Invalid program ID');
  return;
}

// Type-safe lookup
const flowchart = FLOWCHARTS[countryCode][programParam];
```

**Bug Prevention:**
- ✅ Compiler ensures key matches programId
- ✅ Type system prevents mismatches
- ✅ IDE catches typos immediately
- ✅ Impossible to have inconsistent keys

---

## Example 3: Form Section Management

### BEFORE (Magic Strings & Numbers)
```typescript
// src/components/ProfileFormAccordion.tsx
const FORM_SECTIONS: FormSection[] = [
  { id: 'personal', title: 'Personal Information', stepNumber: 1, ... },
  { id: 'financial', title: 'Financial Information', stepNumber: 2, ... },
  { id: 'education', title: 'Education', stepNumber: 3, ... },
  { id: 'career', title: 'Career', stepNumber: 4, ... },
  { id: 'family', title: 'Family', stepNumber: 5, ... },
  { id: 'language', title: 'Language', stepNumber: 6, ... },
  { id: 'countries', title: 'Country Selection', stepNumber: 7, ... },
];

// src/utils/validation.ts
export const validateFormStep = (stepNumber: number, data: Partial<UserProfile>) => {
  // ❌ Magic number! What if someone passes 99?
  if (stepNumber === 1) { /* validate personal */ }
  if (stepNumber === 2) { /* validate financial */ }
  // ...
};

// src/utils/formState.ts
export const isFormStepValid = (stepNumber: number, formData: Partial<UserProfile>) => {
  // ❌ Another magic number reference
  const step = FORM_SECTIONS.find(s => s.stepNumber === stepNumber);
  if (!step) return false; // Silent failure!
  // ...
};
```

**Problems:**
- ❌ Step numbers are magic numbers (1-7)
- ❌ No validation that step number is valid
- ❌ Adding/removing sections requires updating multiple places
- ❌ Easy to create mismatches between id and stepNumber

### AFTER (Enums)
```typescript
// src/constants/formSections.ts
export enum FormSectionId {
  PERSONAL = 'personal',
  FINANCIAL = 'financial',
  EDUCATION = 'education',
  CAREER = 'career',
  FAMILY = 'family',
  LANGUAGE = 'language',
  COUNTRIES = 'countries',
}

export const FORM_SECTION_METADATA: Record<FormSectionId, {
  title: string;
  description: string;
  stepNumber: number;
  component: React.ComponentType<any>;
}> = {
  [FormSectionId.PERSONAL]: {
    title: 'Personal Information',
    description: 'Basic details about you',
    stepNumber: 1,
    component: PersonalInfoForm,
  },
  [FormSectionId.FINANCIAL]: {
    title: 'Financial Information',
    description: 'Income and savings',
    stepNumber: 2,
    component: FinancialInfoForm,
  },
  // ... rest of sections
};

export const FORM_STEP_TO_SECTION: Record<number, FormSectionId> = {
  1: FormSectionId.PERSONAL,
  2: FormSectionId.FINANCIAL,
  3: FormSectionId.EDUCATION,
  4: FormSectionId.CAREER,
  5: FormSectionId.FAMILY,
  6: FormSectionId.LANGUAGE,
  7: FormSectionId.COUNTRIES,
};

export const isValidFormStep = (step: unknown): step is number => {
  return typeof step === 'number' && step in FORM_STEP_TO_SECTION;
};

export const getSectionIdForStep = (step: number): FormSectionId => {
  if (!isValidFormStep(step)) {
    throw new Error(`Invalid form step: ${step}`);
  }
  return FORM_STEP_TO_SECTION[step];
};

// src/utils/validation.ts
export const validateFormStep = (stepNumber: number, data: Partial<UserProfile>) => {
  if (!isValidFormStep(stepNumber)) {
    throw new Error(`Invalid form step: ${stepNumber}`);
  }
  
  const sectionId = getSectionIdForStep(stepNumber);
  
  // Type-safe validation
  switch (sectionId) {
    case FormSectionId.PERSONAL:
      return validatePersonalInfo(data);
    case FormSectionId.FINANCIAL:
      return validateFinancialInfo(data);
    // ...
  }
};

// src/components/ProfileFormAccordion.tsx
const FORM_SECTIONS = Object.entries(FORM_SECTION_METADATA).map(
  ([id, metadata]) => ({
    id: id as FormSectionId,
    ...metadata,
  })
);

// Usage
const sectionId = FormSectionId.PERSONAL; // IDE autocomplete!
const metadata = FORM_SECTION_METADATA[sectionId];
```

**Benefits:**
- ✅ No magic numbers
- ✅ Single source of truth
- ✅ Adding sections is safe (compiler catches missing entries)
- ✅ Type-safe step validation
- ✅ IDE autocomplete everywhere

---

## Example 4: Education Level Comparison

### BEFORE (Magic Strings)
```typescript
// src/services/viability/scorers/educationScorer.ts
export const scoreEducation = (userLevel: string, required: string): number => {
  const levels = ['high_school', 'bachelor', 'master', 'phd'];
  const userIndex = levels.indexOf(userLevel);
  const requiredIndex = levels.indexOf(required);
  
  if (userIndex === -1 || requiredIndex === -1) {
    return 0; // ❌ Silent failure!
  }
  
  if (userIndex >= requiredIndex) {
    return 100;
  }
  return 0;
};

// src/data/visaPrograms.ts
{ minEducationLevel: 'bachelor', ... } // ❌ Magic string
{ minEducationLevel: 'master', ... }   // ❌ Magic string
```

**Problems:**
- ❌ Levels array is duplicated
- ❌ No validation of input strings
- ❌ Silent failures (returns 0)
- ❌ Hard to add new levels

### AFTER (Enums)
```typescript
// src/constants/education.ts
export enum EducationLevel {
  HIGH_SCHOOL = 'high_school',
  BACHELOR = 'bachelor',
  MASTER = 'master',
  PHD = 'phd',
}

export const EDUCATION_LEVEL_RANK: Record<EducationLevel, number> = {
  [EducationLevel.HIGH_SCHOOL]: 1,
  [EducationLevel.BACHELOR]: 2,
  [EducationLevel.MASTER]: 3,
  [EducationLevel.PHD]: 4,
};

export const meetsEducationRequirement = (
  userLevel: EducationLevel | null,
  required: EducationLevel
): boolean => {
  if (!userLevel) return false;
  return EDUCATION_LEVEL_RANK[userLevel] >= EDUCATION_LEVEL_RANK[required];
};

// src/services/viability/scorers/educationScorer.ts
export const scoreEducation = (
  userLevel: EducationLevel | null,
  required: EducationLevel
): number => {
  if (!userLevel) return 0;
  
  if (meetsEducationRequirement(userLevel, required)) {
    return 100;
  }
  return 0;
};

// src/data/visaPrograms.ts
{
  minEducationLevel: EducationLevel.BACHELOR,
  ...
}
{
  minEducationLevel: EducationLevel.MASTER,
  ...
}
```

**Benefits:**
- ✅ Single source of truth for levels
- ✅ Type-safe comparison
- ✅ Reusable comparison logic
- ✅ Easy to add new levels
- ✅ No silent failures

---

## Example 5: Viability Score Thresholds

### BEFORE (Magic Numbers)
```typescript
// src/services/viability/calculator.ts
export const calculateViabilityLevel = (score: number): ViabilityLevel => {
  if (score >= 85) return 'excellent';      // ❌ Magic number
  if (score >= 70) return 'good';           // ❌ Magic number
  if (score >= 50) return 'moderate';       // ❌ Magic number
  if (score >= 30) return 'low';            // ❌ Magic number
  return 'very_low';
};

// src/components/results/ScoreBreakdown.tsx
const getColor = (level: ViabilityLevel): string => {
  if (level === 'excellent') return '#10b981';  // ❌ Magic color
  if (level === 'good') return '#3b82f6';       // ❌ Magic color
  if (level === 'moderate') return '#f59e0b';   // ❌ Magic color
  if (level === 'low') return '#ef4444';        // ❌ Magic color
  return '#7f1d1d';                             // ❌ Magic color
};
```

**Problems:**
- ❌ Thresholds scattered across codebase
- ❌ Colors duplicated in multiple components
- ❌ Hard to adjust thresholds globally
- ❌ No documentation of what levels mean

### AFTER (Enums with Metadata)
```typescript
// src/constants/viability.ts
export enum ViabilityLevel {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  MODERATE = 'moderate',
  LOW = 'low',
  VERY_LOW = 'very_low',
}

export const VIABILITY_THRESHOLDS: Record<ViabilityLevel, number> = {
  [ViabilityLevel.EXCELLENT]: 85,
  [ViabilityLevel.GOOD]: 70,
  [ViabilityLevel.MODERATE]: 50,
  [ViabilityLevel.LOW]: 30,
  [ViabilityLevel.VERY_LOW]: 0,
};

export const VIABILITY_COLORS: Record<ViabilityLevel, string> = {
  [ViabilityLevel.EXCELLENT]: '#10b981',
  [ViabilityLevel.GOOD]: '#3b82f6',
  [ViabilityLevel.MODERATE]: '#f59e0b',
  [ViabilityLevel.LOW]: '#ef4444',
  [ViabilityLevel.VERY_LOW]: '#7f1d1d',
};

export const VIABILITY_DESCRIPTIONS: Record<ViabilityLevel, string> = {
  [ViabilityLevel.EXCELLENT]: 'Excellent match - Strong eligibility',
  [ViabilityLevel.GOOD]: 'Good match - Likely eligible',
  [ViabilityLevel.MODERATE]: 'Moderate match - May be eligible',
  [ViabilityLevel.LOW]: 'Low match - Unlikely eligible',
  [ViabilityLevel.VERY_LOW]: 'Very low match - Not eligible',
};

export const calculateViabilityLevel = (score: number): ViabilityLevel => {
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.EXCELLENT]) return ViabilityLevel.EXCELLENT;
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.GOOD]) return ViabilityLevel.GOOD;
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.MODERATE]) return ViabilityLevel.MODERATE;
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.LOW]) return ViabilityLevel.LOW;
  return ViabilityLevel.VERY_LOW;
};

// src/components/results/ScoreBreakdown.tsx
import { VIABILITY_COLORS, VIABILITY_DESCRIPTIONS } from '@/constants/viability';

const getColor = (level: ViabilityLevel): string => {
  return VIABILITY_COLORS[level];
};

const getDescription = (level: ViabilityLevel): string => {
  return VIABILITY_DESCRIPTIONS[level];
};
```

**Benefits:**
- ✅ Single source of truth
- ✅ Easy to adjust thresholds
- ✅ Consistent colors everywhere
- ✅ Self-documenting descriptions
- ✅ No duplication

---

## Migration Strategy

### Step 1: Create Constants
```bash
mkdir -p src/constants
touch src/constants/countries.ts
touch src/constants/programIds.ts
touch src/constants/formSections.ts
touch src/constants/education.ts
touch src/constants/languages.ts
touch src/constants/viability.ts
```

### Step 2: Update Type Definitions
```typescript
// src/types/user.ts
import { EducationLevel, LanguageProficiency } from '@/constants/education';
import { LanguageProficiency } from '@/constants/languages';

export interface UserProfile {
  educationLevel: EducationLevel | null;
  languages: Array<{ language: string; proficiency: LanguageProficiency }>;
  // ...
}
```

### Step 3: Update Components Incrementally
- Start with highest-impact areas (country codes, program IDs)
- Update one component at a time
- Run tests after each change
- Use find-and-replace carefully

### Step 4: Update Tests
- Update test fixtures to use enums
- Add tests for validation functions
- Verify type safety

---

## Conclusion

These refactorings transform the codebase from fragile magic strings to robust, type-safe enums. The investment pays dividends in reduced bugs, better IDE support, and easier maintenance.

