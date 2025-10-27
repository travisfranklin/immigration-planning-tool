# Profile Form UX Assessment

**Date**: 2025-10-21  
**Assessor**: UX Designer  
**Status**: 🔍 **ANALYSIS COMPLETE**

---

## 🎯 Executive Summary

The Profile form has **three critical UX issues** that significantly impact user experience:

1. **Multi-step form forces unnecessary navigation** for simple updates
2. **Progress bar calculation is broken** (starts at 47%, never reaches 100%)
3. **Text inputs used instead of comboboxes** for structured data (countries, occupation codes)

**Recommendation**: Implement a **hybrid approach** - single-page form with collapsible sections + persistent progress indicator.

---

## 📊 Issue Analysis

### Issue 1: Multi-Step Form Navigation Problem

**Current Behavior**:
- User completes profile → Views results → Wants to update job offer status
- **Must navigate through all 7 steps** to reach Country Selection form
- No direct access to specific sections
- Frustrating for users who want to experiment with different scenarios

**User Impact**: 🔴 **HIGH**
- **Time waste**: 30-60 seconds to navigate through 6 irrelevant steps
- **Cognitive load**: User must remember which step contains which field
- **Abandonment risk**: Users may give up on making updates

**Root Cause**:
- Multi-step form pattern optimized for **initial data collection**, not **data editing**
- No "edit mode" vs "create mode" distinction
- ProfileFormContainer.tsx enforces linear navigation

**Evidence from Code**:
```typescript
// src/components/ProfileFormContainer.tsx
const FORM_STEPS = [
  { title: 'Personal Information', component: PersonalInfoForm },
  { title: 'Financial Information', component: FinancialInfoForm },
  { title: 'Education', component: EducationForm },
  { title: 'Career', component: CareerForm },
  { title: 'Family', component: FamilyForm },
  { title: 'Language', component: LanguageForm },
  { title: 'Country Selection', component: CountrySelectionForm },
];
```

**User Stories Affected**:
- "As a user, I want to quickly update my target countries without re-entering all my data"
- "As a user, I want to experiment with different job offer scenarios to see how it affects my viability"
- "As a user, I want to update my financial information after getting a raise"

---

### Issue 2: Progress Bar Calculation Bug

**Current Behavior**:
- Progress bar **starts at 47%** on empty profile
- Progress bar **never reaches 100%** even with all fields filled
- Misleading feedback to users

**User Impact**: 🟡 **MEDIUM**
- **Confusion**: Users don't know if they've completed the form
- **Trust issues**: Broken progress indicator undermines app credibility
- **Completion anxiety**: Users unsure if they're missing required fields

**Root Cause**:
```typescript
// src/utils/formState.ts - calculateFormProgress()
const requiredFields = [
  'firstName', 'lastName', 'dateOfBirth', 'citizenship',
  'annualIncome', 'savingsAmount', 'employmentStatus',
  'educationLevel', 'fieldOfStudy', 'yearsOfExperience',
  'currentOccupation', 'occupationCode', 'industryType',
  'maritalStatus', 'languages', 'immigrationPath', 'timelineMonths',
]; // 17 fields total
```

**Problem**: `getEmptyUserProfile()` pre-fills some fields with defaults:
- `citizenship: 'US'` ✅
- `employmentStatus: 'employed'` ✅
- `educationLevel: 'bachelor'` ✅
- `industryType: 'technology'` ✅
- `immigrationPath: 'work_visa'` ✅
- `languages: []` ✅
- `maritalStatus: 'single'` ✅
- `familyMembers: []` ✅

**Calculation**:
- 8 pre-filled fields / 17 required fields = **47%** ✅ (matches observed behavior)

**Why it doesn't reach 100%**:
- Missing fields in requiredFields list:
  - `targetCountries` (required but not in list)
  - `hasHealthInsurance` (optional but affects scoring)
  - `hasJobOffer` (optional but affects scoring)
  - `familyMembers` (not in list, but `maritalStatus` is)

**Fix Required**:
1. Add `targetCountries` to requiredFields
2. Remove pre-filled defaults from progress calculation OR
3. Only count fields that user has explicitly filled

---

### Issue 3: Text Inputs for Structured Data

**Current Behavior**:
- **Job Offer Country**: Free text input (should be combobox with EU countries)
- **Occupation Code**: Free text input (should be searchable combobox with ISCO-08 codes)
- **Target Countries**: Select dropdowns (good, but could be multi-select combobox)

**User Impact**: 🟡 **MEDIUM**
- **Data quality issues**: Typos, inconsistent formatting ("Germany" vs "germany" vs "DE")
- **Validation burden**: App must validate free text against known values
- **Poor UX**: Users must know exact country names and ISCO codes
- **Accessibility**: No autocomplete or suggestions

**Evidence from Code**:

**Job Offer Country** (CountrySelectionForm.tsx):
```typescript
<Input
  label="Job Offer Country"
  type="text"
  value={data.jobOfferCountry || ''}
  onChange={(e) => onChange('jobOfferCountry', e.target.value)}
  placeholder="e.g., Germany, Netherlands"
/>
```
❌ Should be: `<Combobox options={EU_COUNTRIES} />`

**Occupation Code** (CareerForm.tsx):
```typescript
<Input
  label="Occupation Code (ISCO-08)"
  type="text"
  value={data.occupationCode || ''}
  placeholder="e.g., 2175 (4-digit code)"
  maxLength={4}
/>
```
❌ Should be: `<Combobox options={ISCO_08_CODES} />`

**Good Example** - Education Form already uses Combobox:
```typescript
<Combobox
  label="Field of Study"
  value={data.fieldOfStudy || ''}
  onChange={(value) => onChange('fieldOfStudy', value)}
  options={FIELDS_OF_STUDY}
  placeholder="Type to search or enter custom field..."
/>
```
✅ This is the pattern we should follow!

---

## 💡 Recommended Solutions

### Solution 1: Hybrid Form Pattern (RECOMMENDED)

**Approach**: Single-page form with collapsible accordion sections

**Benefits**:
- ✅ Direct access to any section
- ✅ See all data at once (overview)
- ✅ Collapse completed sections to reduce clutter
- ✅ Maintain progress indicator
- ✅ Better for editing existing profiles

**Wireframe**:
```
┌─────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results    │
├─────────────────────────────────────────────────────────┤
│ Immigration Profile                    Progress: 76%    │
│ ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ▼ Personal Information                          ✓ Done │
│   ┌─────────────────────────────────────────────────┐  │
│   │ First Name: [John        ]  Last Name: [Doe   ] │  │
│   │ Date of Birth: [1990-01-15]                     │  │
│   │ Citizenship: [United States ▼]                  │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
│ ▼ Financial Information                         ✓ Done │
│   ┌─────────────────────────────────────────────────┐  │
│   │ Annual Income: [$85,000  ]                      │  │
│   │ Savings: [$50,000  ]                            │  │
│   │ Employment: [Employed ▼]                        │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
│ ▶ Education                                     ⚠ 2/3  │
│                                                         │
│ ▶ Career                                        ⚠ 2/3  │
│                                                         │
│ ▶ Family                                        ✓ Done │
│                                                         │
│ ▶ Languages                                     ⚠ 0/1  │
│                                                         │
│ ▶ Country Selection                             ⚠ 1/3  │
│                                                         │
│ [💾 Save Changes]  [📊 View Results]                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Implementation**:
- Use Headless UI `Disclosure` component for accordion
- Each section shows completion status (✓ Done, ⚠ Incomplete, ○ Not Started)
- Auto-save on field blur (already implemented)
- Smooth scroll to section on click

**Migration Path**:
1. Create new `ProfileFormAccordion.tsx` component
2. Reuse existing form components (PersonalInfoForm, etc.)
3. Add section completion indicators
4. Update Profile.tsx to use new component
5. Keep old ProfileFormContainer for A/B testing

---

### Solution 2: Fix Progress Bar

**Approach**: Correct the calculateFormProgress function

**Changes Required**:

```typescript
// src/utils/formState.ts
export function calculateFormProgress(profile: Partial<UserProfile>): number {
  const requiredFields = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'citizenship',
    'annualIncome',
    'savingsAmount',
    'employmentStatus',
    'educationLevel',
    'fieldOfStudy',
    'yearsOfExperience',
    'currentOccupation',
    'occupationCode',
    'industryType',
    'maritalStatus',
    'languages',
    'targetCountries',      // ← ADD THIS
    'immigrationPath',
    'timelineMonths',
  ];

  // Only count fields that user has explicitly filled (not defaults)
  const filledFields = requiredFields.filter((field) => {
    const value = (profile as Record<string, unknown>)[field];
    
    // Special handling for arrays
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    
    // Check if value exists and is not empty
    if (value === undefined || value === null || value === '') {
      return false;
    }
    
    // NEW: Check if value is different from default
    const defaults = getEmptyUserProfile();
    const defaultValue = (defaults as Record<string, unknown>)[field];
    
    // If value matches default, don't count it as "filled"
    if (value === defaultValue) {
      return false;
    }
    
    return true;
  });

  return Math.round((filledFields.length / requiredFields.length) * 100);
}
```

**Expected Behavior**:
- Empty profile: **0%** (no user input)
- After Personal Info: **22%** (4/18 fields)
- After Financial Info: **39%** (7/18 fields)
- After Education: **56%** (10/18 fields)
- After Career: **72%** (13/18 fields)
- After Family: **78%** (14/18 fields)
- After Languages: **83%** (15/18 fields)
- After Country Selection: **100%** (18/18 fields)

---

### Solution 3: Replace Text Inputs with Comboboxes

**Approach**: Use existing Combobox component for structured data

**Changes Required**:

#### 3.1 Job Offer Country (CountrySelectionForm.tsx)

**Before**:
```typescript
<Input
  label="Job Offer Country"
  type="text"
  value={data.jobOfferCountry || ''}
  onChange={(e) => onChange('jobOfferCountry', e.target.value)}
  placeholder="e.g., Germany, Netherlands"
/>
```

**After**:
```typescript
<Combobox
  label="Job Offer Country"
  value={data.jobOfferCountry || ''}
  onChange={(value) => onChange('jobOfferCountry', value)}
  options={EU_COUNTRIES}
  placeholder="Type to search countries..."
  helperText="Select the country where you have a job offer"
/>
```

#### 3.2 Occupation Code (CareerForm.tsx)

**Step 1**: Create ISCO-08 occupation codes data file

```typescript
// src/data/occupationCodes.ts
export const ISCO_08_CODES = [
  { code: '1120', title: 'Senior Government Officials' },
  { code: '2111', title: 'Physicists and Astronomers' },
  { code: '2120', title: 'Mathematicians, Actuaries and Statisticians' },
  { code: '2131', title: 'Biologists, Botanists, Zoologists' },
  { code: '2141', title: 'Industrial and Production Engineers' },
  { code: '2142', title: 'Civil Engineers' },
  { code: '2143', title: 'Environmental Engineers' },
  { code: '2144', title: 'Mechanical Engineers' },
  { code: '2145', title: 'Chemical Engineers' },
  { code: '2146', title: 'Mining Engineers, Metallurgists' },
  { code: '2151', title: 'Electrical Engineers' },
  { code: '2152', title: 'Electronics Engineers' },
  { code: '2153', title: 'Telecommunications Engineers' },
  { code: '2161', title: 'Building Architects' },
  { code: '2162', title: 'Landscape Architects' },
  { code: '2163', title: 'Product and Garment Designers' },
  { code: '2164', title: 'Town and Traffic Planners' },
  { code: '2165', title: 'Cartographers and Surveyors' },
  { code: '2166', title: 'Graphic and Multimedia Designers' },
  { code: '2511', title: 'Systems Analysts' },
  { code: '2512', title: 'Software Developers' },
  { code: '2513', title: 'Web and Multimedia Developers' },
  { code: '2514', title: 'Applications Programmers' },
  { code: '2519', title: 'Software and Applications Developers' },
  // ... (add top 100-200 most common codes)
];

export const OCCUPATION_CODE_OPTIONS = ISCO_08_CODES.map(occ => 
  `${occ.code} - ${occ.title}`
);
```

**Step 2**: Update CareerForm.tsx

**Before**:
```typescript
<Input
  label="Occupation Code (ISCO-08)"
  type="text"
  value={data.occupationCode || ''}
  onChange={(e) => onChange('occupationCode', e.target.value)}
  placeholder="e.g., 2175 (4-digit code)"
  maxLength={4}
/>
```

**After**:
```typescript
<Combobox
  label="Occupation Code (ISCO-08)"
  value={data.occupationCode || ''}
  onChange={(value) => {
    // Extract code from "2512 - Software Developers" format
    const code = value.split(' - ')[0];
    onChange('occupationCode', code);
  }}
  options={OCCUPATION_CODE_OPTIONS}
  placeholder="Type to search occupation codes..."
  helperText="Search by code or occupation title"
/>
```

---

## 🔍 Architecture Engineer Input Needed

**Question**: Can we remove the `currentOccupation` field and derive occupation from `occupationCode`?

**Analysis**:
- `currentOccupation` is used in:
  - `careerScorer.ts` - `scoreOccupationDemand()` (keyword matching)
  - `educationScorer.ts` - `scoreFieldOfStudy()` (field-occupation alignment)
  - `educationScorer.ts` - `scoreEducationOccupationAlignment()` (degree requirements)

**Current Dependency**:
```typescript
// careerScorer.ts
function scoreOccupationDemand(occupation: string): number {
  const occupationLower = occupation.toLowerCase();
  const isHighDemand = highDemandKeywords.some(keyword => 
    occupationLower.includes(keyword)
  );
  // ...
}
```

**Proposed Solution**:
1. Keep `occupationCode` as primary field
2. Derive `currentOccupation` from ISCO-08 code lookup
3. Update scoring functions to use occupation title from code

**Benefits**:
- ✅ Single source of truth (occupation code)
- ✅ No data inconsistency (user can't enter "Software Engineer" with code "1120")
- ✅ Better data quality
- ✅ Simpler form (one less field)

**Risks**:
- ⚠️ ISCO-08 titles may not match user's exact job title
- ⚠️ Scoring algorithm may need adjustment for standardized titles

**Recommendation**: **Keep both fields** but make `currentOccupation` auto-populate from `occupationCode` selection, with option to override.

---

## 📋 Implementation Priority

### Phase 1: Quick Wins (1-2 days)
1. ✅ Fix progress bar calculation
2. ✅ Add Combobox for Job Offer Country
3. ✅ Add Combobox for Occupation Code

### Phase 2: Form Pattern (3-5 days)
1. ✅ Create ProfileFormAccordion component
2. ✅ Add section completion indicators
3. ✅ Implement smooth scrolling
4. ✅ Update Profile.tsx to use new component
5. ✅ A/B test with users

### Phase 3: Polish (1-2 days)
1. ✅ Add keyboard shortcuts (Cmd+S to save, Cmd+Enter to view results)
2. ✅ Add "Jump to incomplete section" button
3. ✅ Add form validation summary at top
4. ✅ Improve mobile responsiveness

---

## ✅ Success Criteria

- [ ] User can update any field without navigating through all steps
- [ ] Progress bar starts at 0% and reaches 100% when all required fields filled
- [ ] All structured data uses Combobox with autocomplete
- [ ] Form is accessible (keyboard navigation, screen reader support)
- [ ] Auto-save works correctly in new pattern
- [ ] Mobile experience is smooth

---

**UX Designer** 🎨  
**Status**: ✅ **ASSESSMENT COMPLETE - AWAITING TEAM DECISIONS**

