# Occupation Field Dependency Analysis

**Date**: 2025-10-21  
**Analyst**: Architecture Engineer  
**Status**: 🔍 **ANALYSIS COMPLETE**

---

## 🎯 Executive Summary

**Question**: Can we remove `currentOccupation` field and derive occupation from `occupationCode` instead?

**Answer**: **NO - Keep both fields, but make them work together**

**Recommendation**: 
1. Keep `currentOccupation` as the primary user-facing field
2. Keep `occupationCode` as optional metadata for precise classification
3. Auto-suggest occupation code based on currentOccupation input
4. Use currentOccupation for scoring (more flexible, better UX)

---

## 📊 Current System Architecture

### Data Model (UserProfile)

```typescript
// src/types/user.ts
export interface UserProfile {
  // ... other fields
  
  // Career Information
  currentOccupation: string;      // Free text, required
  occupationCode?: string;        // ISCO-08 code, optional
  industryType: string;           // Select dropdown, required
}
```

**Current Status**:
- `currentOccupation`: **Required** field
- `occupationCode`: **Optional** field (note the `?`)
- Both stored independently

---

## 🔍 Dependency Analysis

### 1. Viability Scoring System

#### careerScorer.ts

**Function**: `scoreOccupationDemand(occupation: string)`

```typescript
function scoreOccupationDemand(occupation: string): number {
  const highDemandKeywords = [
    'software', 'engineer', 'developer', 'programmer', 'data scientist',
    'doctor', 'nurse', 'physician', 'healthcare',
    'teacher', 'professor', 'researcher',
    'architect', 'designer',
  ];
  
  const occupationLower = occupation.toLowerCase();
  const isHighDemand = highDemandKeywords.some(keyword => 
    occupationLower.includes(keyword)
  );
  
  if (isHighDemand) return 90;
  // ... medium demand check
  return 50;
}
```

**Dependency**: ✅ **Uses `currentOccupation`**
- Performs **keyword matching** on free text
- Flexible: matches "Senior Software Engineer", "Software Developer", "Full Stack Developer"
- Would break with ISCO codes: "2512" doesn't contain "software"

**Impact if removed**: 🔴 **CRITICAL** - Scoring would fail

---

#### educationScorer.ts

**Function 1**: `scoreFieldOfStudy(fieldOfStudy: string, occupation: string)`

```typescript
function scoreFieldOfStudy(fieldOfStudy: string, occupation: string): number {
  const field = fieldOfStudy.toLowerCase();
  const job = occupation.toLowerCase();
  
  // Check if field aligns with occupation
  const fieldAligns = field.includes(job) || job.includes(field);
  
  if (isHighDemand && fieldAligns) return 100;
  if (isHighDemand) return 85;
  if (fieldAligns) return 80;
  // ...
}
```

**Dependency**: ✅ **Uses `currentOccupation`**
- Checks alignment between field of study and occupation
- Example: "Computer Science" + "Software Engineer" = high alignment
- Would break with codes: "Computer Science" + "2512" = no alignment detected

**Impact if removed**: 🔴 **CRITICAL** - Education scoring would be inaccurate

---

**Function 2**: `scoreEducationOccupationAlignment(profile: UserProfile)`

```typescript
function scoreEducationOccupationAlignment(profile: UserProfile): number {
  const occupation = profile.currentOccupation.toLowerCase();
  
  const advancedDegreeOccupations = [
    'doctor', 'physician', 'surgeon', 'professor', 'researcher',
    'scientist', 'architect', 'lawyer', 'engineer',
  ];
  
  const requiresAdvancedDegree = advancedDegreeOccupations.some(keyword => 
    occupation.includes(keyword)
  );
  
  if (requiresAdvancedDegree) {
    if (educationLevel === 'phd' || educationLevel === 'master') return 100;
    // ...
  }
  // ...
}
```

**Dependency**: ✅ **Uses `currentOccupation`**
- Determines if occupation requires advanced degree
- Keyword-based matching
- Would break with codes

**Impact if removed**: 🔴 **CRITICAL** - Education-occupation alignment scoring would fail

---

### 2. Occupation Code Usage

**Current Usage**: ❌ **NONE**

**Search Results**:
```bash
$ grep -r "occupationCode" src/services/viability/
# No results
```

**Conclusion**: `occupationCode` is **collected but not used** in scoring!

---

## 💡 Why Keyword Matching is Better Than Codes

### Flexibility

**Keyword Matching** (Current):
- ✅ Matches variations: "Software Engineer", "Senior Software Developer", "Full Stack Engineer"
- ✅ Handles compound titles: "Software Engineer & Team Lead"
- ✅ Works with emerging roles: "AI/ML Engineer", "DevOps Engineer"
- ✅ User-friendly: People know their job title

**ISCO-08 Codes** (Proposed):
- ❌ Rigid: "2512 - Software Developers" only
- ❌ Doesn't capture seniority: Senior vs Junior
- ❌ Doesn't capture specialization: Frontend vs Backend vs Full Stack
- ❌ User-hostile: Most people don't know their ISCO code

### Data Quality

**Keyword Matching**:
- ✅ Natural language input
- ✅ Easy to validate (non-empty string)
- ✅ Flexible scoring algorithm

**ISCO-08 Codes**:
- ⚠️ Requires user to look up code
- ⚠️ Risk of incorrect classification
- ⚠️ Limited to ~400 codes (doesn't cover all occupations)

### Scoring Accuracy

**Example**: User is a "Senior Machine Learning Engineer"

**With Keyword Matching**:
```typescript
occupation = "Senior Machine Learning Engineer"
// Matches: "engineer", "machine learning" (high demand)
// Score: 90 ✅
```

**With ISCO-08 Code**:
```typescript
occupationCode = "2512" // Software Developers
occupationTitle = "Software Developers"
// Matches: "developer" (high demand)
// Score: 90 ✅
// BUT: Loses "machine learning" specialization
// AND: Loses "senior" level information
```

---

## 🏗️ Recommended Architecture

### Option 1: Keep Both Fields (RECOMMENDED)

**Approach**: Use `currentOccupation` as primary, `occupationCode` as optional metadata

**Benefits**:
- ✅ No breaking changes to scoring system
- ✅ Maintains flexibility
- ✅ Adds structured data for future use
- ✅ Best user experience

**Implementation**:
```typescript
// User enters: "Software Engineer"
// System suggests: "2512 - Software Developers"
// User can accept or ignore

// Scoring uses: currentOccupation (flexible keyword matching)
// Future features can use: occupationCode (structured queries)
```

**Form UX**:
```
Current Occupation: [Software Engineer                    ]
                    ↓ (auto-suggest)
Occupation Code:    [2512 - Software Developers ▼] (optional)
```

---

### Option 2: Derive Occupation from Code (NOT RECOMMENDED)

**Approach**: User selects code, system derives occupation title

**Problems**:
- ❌ Loses specialization ("Machine Learning Engineer" → "Software Developers")
- ❌ Loses seniority ("Senior" → generic title)
- ❌ Requires rewriting all scoring functions
- ❌ Worse user experience (must know ISCO code)
- ❌ Breaking change to existing data

**Migration Complexity**: 🔴 **HIGH**
- Rewrite `scoreOccupationDemand()`
- Rewrite `scoreFieldOfStudy()`
- Rewrite `scoreEducationOccupationAlignment()`
- Update all tests
- Migrate existing user data

---

### Option 3: Hybrid Approach (ALTERNATIVE)

**Approach**: Make `occupationCode` required, but allow custom `currentOccupation`

**Implementation**:
```typescript
interface UserProfile {
  occupationCode: string;           // Required: ISCO-08 code
  currentOccupation?: string;       // Optional: Custom title override
  industryType: string;
}

// Scoring logic:
const occupation = profile.currentOccupation || 
                   getOccupationTitle(profile.occupationCode);
```

**Benefits**:
- ✅ Structured data for all users
- ✅ Flexibility for custom titles
- ✅ Backward compatible with scoring

**Drawbacks**:
- ⚠️ More complex form logic
- ⚠️ Requires ISCO-08 code lookup table
- ⚠️ Still requires keyword matching for scoring

---

## 📋 Impact Assessment

### If We Remove `currentOccupation`

| Component | Impact | Severity | Effort to Fix |
|-----------|--------|----------|---------------|
| `careerScorer.ts` | Keyword matching breaks | 🔴 Critical | High |
| `educationScorer.ts` | Field alignment breaks | 🔴 Critical | High |
| `educationScorer.ts` | Degree requirement check breaks | 🔴 Critical | High |
| Form validation | Must validate ISCO codes | 🟡 Medium | Medium |
| User experience | Must know/lookup ISCO code | 🔴 Critical | N/A |
| Data migration | Existing profiles need codes | 🟡 Medium | Medium |
| **TOTAL** | **System-wide breaking changes** | 🔴 **CRITICAL** | **HIGH** |

### If We Keep Both Fields

| Component | Impact | Severity | Effort |
|-----------|--------|----------|--------|
| Form UX | Add combobox for occupation code | 🟢 Low | Low |
| Scoring | No changes needed | 🟢 None | None |
| Data model | Already supports both | 🟢 None | None |
| **TOTAL** | **Minimal changes** | 🟢 **LOW** | **LOW** |

---

## 🎯 Final Recommendation

### Keep Both Fields with Enhanced UX

**Data Model** (No changes):
```typescript
interface UserProfile {
  currentOccupation: string;      // Required, primary field
  occupationCode?: string;        // Optional, metadata
  industryType: string;
}
```

**Form UX** (Enhanced):
```typescript
// CareerForm.tsx
<Input
  label="Current Occupation"
  type="text"
  value={data.currentOccupation || ''}
  onChange={(e) => {
    onChange('currentOccupation', e.target.value);
    // Auto-suggest occupation code based on input
    const suggestedCode = findMatchingISCOCode(e.target.value);
    if (suggestedCode) {
      onChange('occupationCode', suggestedCode);
    }
  }}
  placeholder="e.g., Software Engineer, Project Manager"
  required
/>

<Combobox
  label="Occupation Code (ISCO-08)"
  value={data.occupationCode || ''}
  onChange={(value) => onChange('occupationCode', value)}
  options={ISCO_08_CODES}
  placeholder="Optional: Select for precise classification"
  helperText="Auto-suggested based on your occupation"
/>
```

**Scoring** (No changes):
- Continue using `currentOccupation` for keyword matching
- Ignore `occupationCode` in scoring (for now)
- Future: Use `occupationCode` for advanced features (occupation demand forecasting, etc.)

**Benefits**:
1. ✅ **Zero breaking changes** to scoring system
2. ✅ **Better UX** - users enter natural job titles
3. ✅ **Structured data** - occupation codes for future use
4. ✅ **Flexible scoring** - keyword matching works for all variations
5. ✅ **Low effort** - minimal code changes

**Risks**:
- ⚠️ Occupation code may not match occupation title (acceptable - it's optional metadata)

---

## 🚀 Implementation Plan

### Phase 1: Enhance Form UX (Recommended)
1. Keep `currentOccupation` as required text input
2. Add `occupationCode` as optional Combobox
3. Implement auto-suggestion logic
4. No changes to scoring system

### Phase 2: Future Enhancements (Optional)
1. Build ISCO-08 code lookup table
2. Add occupation demand forecasting using codes
3. Add occupation-specific visa program recommendations
4. Use codes for international occupation matching

---

## ✅ Decision

**Architecture Engineer Recommendation**: 

**DO NOT remove `currentOccupation` field**

**Rationale**:
1. Critical dependency in 3 scoring functions
2. Keyword matching is more flexible than codes
3. Better user experience with free text
4. No benefit to removing it
5. High risk, low reward

**Alternative**: Enhance the form UX to make occupation code entry easier (Combobox), but keep it optional.

---

**Architecture Engineer** 🏗️  
**Status**: ✅ **ANALYSIS COMPLETE - RECOMMENDATION: KEEP BOTH FIELDS**

