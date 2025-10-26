# Magic Strings Analysis: EU Immigration Planning Tool
## Comprehensive Refactoring Recommendations

**Date**: 2025-10-26  
**Status**: Analysis Complete  
**Scope**: Entire application (Forms, Flowcharts, Results, Storage)

---

## Executive Summary

This application contains **significant magic string usage** across multiple domains that creates maintenance risks and typo-related bugs. We've identified **7 major categories** where enums, constants, or reference patterns would dramatically improve code quality and reduce runtime errors.

**Key Finding**: The recent flowchart lookup bug (Austria Startup Visa showing "No flowchart available") was directly caused by inconsistent string formatting across the codebase. Proper enums would have prevented this entirely.

---

## 1. COUNTRY CODES & NAMES

### Current State (Magic Strings)
```typescript
// src/components/forms/CountrySelectionForm.tsx
const EU_COUNTRIES = [
  'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic',
  'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece',
  'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg',
  'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden'
];

// src/pages/ResultDetail.tsx
const countryCode = searchParams.get('country');
const countryFlowcharts = FLOWCHARTS[countryCode];

// src/pages/Flowchart.tsx
const selectedCountry = searchParams.get('country');
if (countryParam && FLOWCHARTS[countryParam]) { ... }
```

### Problems
- ❌ Country names duplicated in multiple files
- ❌ No validation that country codes are valid
- ❌ URL parameters use raw strings (no type safety)
- ❌ Inconsistent formatting (DE vs 'de' vs 'Germany')
- ❌ Recent bug: flowchart keys used both `de_` and `de` prefixes

### Recommended Solution

**Create `src/constants/countries.ts`:**
```typescript
export enum CountryCode {
  DE = 'DE',
  NL = 'NL',
  FR = 'FR',
  ES = 'ES',
  IT = 'IT',
  AT = 'AT',
  BE = 'BE',
  // ... all 27 countries
}

export const COUNTRY_DISPLAY_NAMES: Record<CountryCode, string> = {
  [CountryCode.DE]: 'Germany',
  [CountryCode.NL]: 'Netherlands',
  // ...
};

export const ALL_COUNTRY_CODES = Object.values(CountryCode);

export const isValidCountryCode = (code: unknown): code is CountryCode => {
  return typeof code === 'string' && code in CountryCode;
};
```

**Usage:**
```typescript
// Type-safe URL parameter handling
const countryParam = searchParams.get('country');
if (!isValidCountryCode(countryParam)) {
  setError('Invalid country code');
  return;
}
const countryFlowcharts = FLOWCHARTS[countryParam]; // Type-safe!
```

---

## 2. VISA PROGRAM TYPES

### Current State (Magic Strings)
```typescript
// src/types/viability.ts
export type VisaProgramType = 
  | 'work' 
  | 'entrepreneur' 
  | 'investor' 
  | 'digital_nomad' 
  | 'family_reunification' 
  | 'student' 
  | 'job_seeker' 
  | 'passive-income' 
  | 'other';

// src/data/visaPrograms.ts - Used as magic strings
{ type: 'work', ... }
{ type: 'entrepreneur', ... }
{ type: 'family_reunification', ... }
```

### Problems
- ❌ Type union is hard to maintain
- ❌ No centralized list of valid types
- ❌ Inconsistent naming: `passive-income` (hyphen) vs `family_reunification` (underscore)
- ❌ No validation when creating programs
- ❌ Scoring logic references types as strings

### Recommended Solution

**Create `src/constants/visaPrograms.ts`:**
```typescript
export enum VisaProgramType {
  WORK = 'work',
  ENTREPRENEUR = 'entrepreneur',
  INVESTOR = 'investor',
  DIGITAL_NOMAD = 'digital_nomad',
  FAMILY_REUNIFICATION = 'family_reunification',
  STUDENT = 'student',
  JOB_SEEKER = 'job_seeker',
  PASSIVE_INCOME = 'passive_income', // Fixed: consistent underscore
  OTHER = 'other',
}

export const PROGRAM_TYPE_LABELS: Record<VisaProgramType, string> = {
  [VisaProgramType.WORK]: 'Work Visa',
  [VisaProgramType.ENTREPRENEUR]: 'Entrepreneur/Startup',
  // ...
};

export const isValidProgramType = (type: unknown): type is VisaProgramType => {
  return typeof type === 'string' && type in VisaProgramType;
};
```

---

## 3. FLOWCHART KEYS & PROGRAM IDs

### Current State (Magic Strings)
```typescript
// src/data/flowcharts/austria.ts
export const austriaFlowcharts: Record<string, FlowchartDefinition> = {
  'at_eu_blue_card': { programId: 'at_eu_blue_card', ... },
  'at_startup': { programId: 'at_startup', ... },
  'at_self_employed': { programId: 'at_self_employed', ... },
};

// src/pages/ResultDetail.tsx
const recommendedFlowchart = countryFlowcharts
  ? countryFlowcharts[selectedScore.recommendedProgram.programId]
  : null;

// src/pages/Flowchart.tsx
const programParam = searchParams.get('program');
if (programs[programParam]) { ... }
```

### Problems
- ❌ **RECENT BUG**: Inconsistent key formats caused "No flowchart available" error
- ❌ No validation that programId matches flowchart key
- ❌ URL parameters use raw strings
- ❌ Flowchart keys must match programIds exactly (fragile)
- ❌ No type safety when accessing flowcharts

### Recommended Solution

**Create `src/constants/programIds.ts`:**
```typescript
export enum AustriaProgramId {
  EU_BLUE_CARD = 'at_eu_blue_card',
  STARTUP = 'at_startup',
  SELF_EMPLOYED = 'at_self_employed',
  FAMILY_REUNIFICATION = 'at_family_reunification',
  RED_WHITE_RED = 'at_red_white_red',
}

export enum GermanyProgramId {
  EU_BLUE_CARD = 'de_eu_blue_card',
  WORK_VISA = 'de_work_visa',
  JOB_SEEKER = 'de_job_seeker',
  // ...
}

// Union of all program IDs
export type AllProgramIds = AustriaProgramId | GermanyProgramId | /* ... */;

export const isValidProgramId = (id: unknown): id is AllProgramIds => {
  return typeof id === 'string' && id.match(/^[a-z]{2}_[a-z_]+$/);
};

export const getProgramCountryCode = (programId: AllProgramIds): CountryCode => {
  const code = programId.substring(0, 2).toUpperCase();
  if (!isValidCountryCode(code)) throw new Error(`Invalid country code: ${code}`);
  return code as CountryCode;
};
```

**Usage:**
```typescript
// Type-safe flowchart lookup
const programId = searchParams.get('program');
if (!isValidProgramId(programId)) {
  setError('Invalid program ID');
  return;
}
const flowchart = FLOWCHARTS[countryCode][programId]; // Fully type-safe!
```

---

## 4. FORM SECTION IDs

### Current State (Magic Strings)
```typescript
// src/components/ProfileFormAccordion.tsx
const FORM_SECTIONS: FormSection[] = [
  { id: 'personal', title: 'Personal Information', ... },
  { id: 'financial', title: 'Financial Information', ... },
  { id: 'education', title: 'Education', ... },
  { id: 'career', title: 'Career', ... },
  { id: 'family', title: 'Family', ... },
  { id: 'language', title: 'Language', ... },
  { id: 'countries', title: 'Country Selection', ... },
];

// src/utils/formState.ts
const stepNumber = 1; // Magic number!
const isValid = isFormStepValid(stepNumber, formData);

// src/utils/validation.ts
const stepErrors = validateFormStep(stepNumber, formData);
```

### Problems
- ❌ Form section IDs are magic strings
- ❌ Step numbers are magic numbers (1-7)
- ❌ No validation that step number is valid
- ❌ Mismatch between section ID and step number causes bugs
- ❌ Hard to add/remove sections without breaking code

### Recommended Solution

**Create `src/constants/formSections.ts`:**
```typescript
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
  // ...
};

export const FORM_STEP_TO_SECTION: Record<number, FormSectionId> = {
  1: FormSectionId.PERSONAL,
  2: FormSectionId.FINANCIAL,
  // ...
};

export const isValidFormStep = (step: unknown): step is number => {
  return typeof step === 'number' && step >= 1 && step <= 7;
};
```

---

## 5. USER PROFILE FIELD NAMES

### Current State (Magic Strings)
```typescript
// src/pages/Profile.tsx
if (currentProfileIdRef.current && !currentProfileIdRef.current.startsWith('profile_')) {
  // Magic string: 'profile_'
}

// src/utils/formState.ts
const mergeFormData = (existing, updates) => {
  // References fields like 'firstName', 'lastName', 'annualIncome' as strings
};

// src/components/forms/PersonalInfoForm.tsx
onChange('firstName', value);
onChange('lastName', value);
onChange('dateOfBirth', value);
```

### Problems
- ❌ Field names are magic strings
- ❌ No validation that field names are valid
- ❌ Typos in field names cause silent failures
- ❌ Refactoring field names requires grep-and-replace
- ❌ No IDE autocomplete for field names

### Recommended Solution

**Create `src/constants/userProfileFields.ts`:**
```typescript
export enum UserProfileField {
  ID = 'id',
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  DATE_OF_BIRTH = 'dateOfBirth',
  CITIZENSHIP = 'citizenship',
  ANNUAL_INCOME = 'annualIncome',
  SAVINGS_AMOUNT = 'savingsAmount',
  EMPLOYMENT_STATUS = 'employmentStatus',
  EDUCATION_LEVEL = 'educationLevel',
  FIELD_OF_STUDY = 'fieldOfStudy',
  YEARS_OF_EXPERIENCE = 'yearsOfExperience',
  CURRENT_OCCUPATION = 'currentOccupation',
  OCCUPATION_CODE = 'occupationCode',
  LANGUAGES = 'languages',
  MARITAL_STATUS = 'maritalStatus',
  FAMILY_MEMBERS = 'familyMembers',
  TARGET_COUNTRIES = 'targetCountries',
  IMMIGRATION_PATH = 'immigrationPath',
  TIMELINE_MONTHS = 'timelineMonths',
  HAS_JOB_OFFER = 'hasJobOffer',
  JOB_OFFER_COUNTRY = 'jobOfferCountry',
}

export const PROFILE_ID_PREFIX = 'profile_';

export const isValidProfileField = (field: unknown): field is UserProfileField => {
  return typeof field === 'string' && field in UserProfileField;
};
```

**Usage:**
```typescript
// Type-safe field updates
onChange(UserProfileField.FIRST_NAME, value); // IDE autocomplete!

// Type-safe field access
const firstName = profile[UserProfileField.FIRST_NAME];

// Type-safe validation
if (!isValidProfileField(fieldName)) {
  throw new Error(`Invalid field: ${fieldName}`);
}
```

---

## 6. EDUCATION LEVELS & LANGUAGE PROFICIENCY

### Current State (Magic Strings)
```typescript
// src/types/user.ts
export type EducationLevel = 'high_school' | 'bachelor' | 'master' | 'phd' | '';
export type LanguageProficiency = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// src/data/visaPrograms.ts - Used as magic strings
{ minEducationLevel: 'bachelor', ... }
{ minLanguageProficiency: 'B1', ... }

// src/components/forms/EducationForm.tsx
value={data.educationLevel || ''}
```

### Problems
- ❌ Type unions are hard to maintain
- ❌ Empty string '' is used as "not set" (confusing)
- ❌ No labels for display (e.g., "Bachelor's Degree")
- ❌ No validation when comparing levels
- ❌ Scoring logic compares strings directly

### Recommended Solution

**Create `src/constants/education.ts`:**
```typescript
export enum EducationLevel {
  HIGH_SCHOOL = 'high_school',
  BACHELOR = 'bachelor',
  MASTER = 'master',
  PHD = 'phd',
}

export const EDUCATION_LEVEL_LABELS: Record<EducationLevel, string> = {
  [EducationLevel.HIGH_SCHOOL]: "High School",
  [EducationLevel.BACHELOR]: "Bachelor's Degree",
  [EducationLevel.MASTER]: "Master's Degree",
  [EducationLevel.PHD]: "PhD",
};

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
```

**Create `src/constants/languages.ts`:**
```typescript
export enum LanguageProficiency {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export const LANGUAGE_PROFICIENCY_LABELS: Record<LanguageProficiency, string> = {
  [LanguageProficiency.A1]: 'A1 - Elementary',
  [LanguageProficiency.A2]: 'A2 - Elementary',
  [LanguageProficiency.B1]: 'B1 - Intermediate',
  [LanguageProficiency.B2]: 'B2 - Upper Intermediate',
  [LanguageProficiency.C1]: 'C1 - Advanced',
  [LanguageProficiency.C2]: 'C2 - Mastery',
};

export const LANGUAGE_PROFICIENCY_RANK: Record<LanguageProficiency, number> = {
  [LanguageProficiency.A1]: 1,
  [LanguageProficiency.A2]: 2,
  [LanguageProficiency.B1]: 3,
  [LanguageProficiency.B2]: 4,
  [LanguageProficiency.C1]: 5,
  [LanguageProficiency.C2]: 6,
};

export const meetsLanguageRequirement = (
  userLevel: LanguageProficiency | null,
  required: LanguageProficiency
): boolean => {
  if (!userLevel) return false;
  return LANGUAGE_PROFICIENCY_RANK[userLevel] >= LANGUAGE_PROFICIENCY_RANK[required];
};
```

---

## 7. VIABILITY SCORE LEVELS & RISK FACTORS

### Current State (Magic Strings)
```typescript
// src/types/viability.ts
export type ViabilityLevel = 'excellent' | 'good' | 'moderate' | 'low' | 'very_low';

// src/services/viability/calculator.ts - Used as magic strings
if (score >= 85) return 'excellent';
if (score >= 70) return 'good';
if (score >= 50) return 'moderate';
if (score >= 30) return 'low';
return 'very_low';

// src/components/results/ScoreBreakdown.tsx
const color = viabilityLevel === 'excellent' ? 'green' : 'red';
```

### Problems
- ❌ Thresholds are magic numbers (85, 70, 50, 30)
- ❌ Color mapping is scattered across components
- ❌ No centralized definition of what each level means
- ❌ Hard to adjust thresholds globally

### Recommended Solution

**Create `src/constants/viability.ts`:**
```typescript
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
  [ViabilityLevel.EXCELLENT]: '#10b981', // green
  [ViabilityLevel.GOOD]: '#3b82f6',      // blue
  [ViabilityLevel.MODERATE]: '#f59e0b',  // amber
  [ViabilityLevel.LOW]: '#ef4444',       // red
  [ViabilityLevel.VERY_LOW]: '#7f1d1d',  // dark red
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
```

---

## Implementation Priority

### Phase 1 (Critical - Prevents Bugs)
1. **Country Codes** - Prevents URL parameter bugs
2. **Program IDs** - Prevents flowchart lookup bugs (like the recent Austria Startup Visa issue)
3. **Form Section IDs** - Prevents form validation bugs

### Phase 2 (High - Improves Maintainability)
4. **Visa Program Types** - Improves scoring logic
5. **User Profile Fields** - Enables safe refactoring
6. **Education/Language Levels** - Improves comparison logic

### Phase 3 (Medium - Improves UX)
7. **Viability Levels** - Centralizes UI logic

---

## Expected Benefits

✅ **Type Safety**: IDE autocomplete for all string values  
✅ **Typo Prevention**: Compile-time errors instead of runtime bugs  
✅ **Maintainability**: Single source of truth for each domain  
✅ **Refactoring Safety**: Rename enums, not grep-and-replace  
✅ **Documentation**: Self-documenting code with enum names  
✅ **Testing**: Easier to test with known valid values  
✅ **Performance**: Potential for tree-shaking unused values  

---

## Estimated Effort

- **Phase 1**: 2-3 days (high impact)
- **Phase 2**: 3-4 days (medium impact)
- **Phase 3**: 1-2 days (low impact)
- **Total**: ~1 week for complete refactoring

---

## Conclusion

This application would benefit significantly from systematic enum usage. The recent flowchart bug is a perfect example of how magic strings create maintenance nightmares. By implementing these recommendations, we can make the codebase more robust, maintainable, and developer-friendly.

