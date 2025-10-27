# Architecture Specification - Scoring Threshold Fix

**Feature**: Two-Stage Scoring System  
**Architect**: Architecture Engineer  
**Date**: 2025-10-19  
**Status**: Approved for Implementation  

---

## Architecture Overview

### Current Architecture (Problematic)
```
User Profile
     ↓
programMatcher.checkEligibility() → { isEligible, missingRequirements, score }
     ↓
[Eligibility info DISCARDED] ❌
     ↓
calculateComponentScores() → { career, financial, education, language, family }
     ↓
calculateOverallScore() → weighted average (0-100)
     ↓
ViabilityScore { overallScore: 71 } ← MISLEADING!
```

**Problem**: Eligibility check happens but result is not used in final score.

### New Architecture (Fixed)
```
User Profile
     ↓
programMatcher.checkEligibility() → { isEligible, missingRequirements, score }
     ↓
[Eligibility info PRESERVED] ✅
     ↓
calculateComponentScores() → { career, financial, education, language, family }
     ↓
calculateOverallScore(componentScores, weights, eligibilityCheck) 
     ↓
     ├─ If NOT eligible → overallScore = min(25, eligibilityScore)
     └─ If eligible → overallScore = competitiveScore (0-100)
     ↓
ViabilityScore { 
  overallScore: 25,
  meetsHardRequirements: false,
  missingRequirements: [...],
  competitiveScore: 71
}
```

**Solution**: Eligibility check result flows through to final score calculation.

---

## Type Definitions

### Updated ViabilityScore Interface

```typescript
// src/types/viability.ts

export interface ViabilityScore {
  id: string;
  userId: string;
  countryCode: string;
  countryName: string;
  createdAt: number;
  updatedAt: number;

  // Component Scores (unchanged)
  componentScores: ComponentScore;

  // Overall Score (MODIFIED - now reflects eligibility)
  overallScore: number; // 0-25 if not eligible, 0-100 if eligible
  viabilityLevel: ViabilityLevel; // Derived from overallScore
  
  // NEW: Eligibility Information
  meetsHardRequirements: boolean; // True if user meets all mandatory requirements
  missingRequirements: string[]; // List of requirements user doesn't meet
  competitiveScore: number; // 0-100, the "true" score if user were eligible

  // Risk Assessment (unchanged)
  riskFactors: RiskFactor[];
  overallRiskLevel: 'low' | 'medium' | 'high';

  // Contingencies (unchanged)
  contingencies: Contingency[];

  // Program-specific info (unchanged)
  recommendedProgram?: {
    programId: string;
    programName: string;
    programType: VisaProgramType;
    eligibilityScore: number;
    matchReason: string;
    alignsWithUserPath: boolean;
    alignsWithTimeline: boolean;
    requiresJobOffer: boolean;
  };

  // Alternative programs (unchanged)
  alternativePrograms?: Array<{
    programId: string;
    programName: string;
    programType: VisaProgramType;
    eligibilityScore: number;
    whyNotRecommended: string;
  }>;

  // User preference alignment (unchanged)
  userPreferenceBoost: number;

  // Additional Info (unchanged)
  recommendedPath?: string;
  estimatedTimelineMonths?: number;
  notes?: string;
}
```

### New Return Type for calculateOverallScore

```typescript
// src/services/viability/calculator.ts

export interface OverallScoreResult {
  overallScore: number; // Final score (capped if not eligible)
  competitiveScore: number; // Weighted average (0-100)
  meetsHardRequirements: boolean; // Eligibility status
}

export function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights'],
  eligibilityCheck: { isEligible: boolean; score: number }
): OverallScoreResult;
```

---

## Algorithm Specification

### Two-Stage Scoring Logic

#### Stage 1: Hard Requirements Check
**Input**: User profile + Program requirements  
**Output**: `{ isEligible: boolean, missingRequirements: string[], score: number }`  
**Location**: `src/services/viability/programMatcher.ts::checkEligibility()`  

**Logic** (already implemented):
```typescript
function checkEligibility(profile: UserProfile, program: VisaProgram) {
  const missing: string[] = [];
  let score = 100;
  
  // Check citizenship
  if (req.citizenship && !req.citizenship.includes(profile.citizenship)) {
    return { isEligible: false, missingRequirements: [...], score: 0 };
  }
  
  // Check education
  if (req.minEducationLevel && userEducation < requiredEducation) {
    missing.push("Education requirement not met");
    score -= 30;
  }
  
  // Check salary
  if (req.minSalary && profile.annualIncome < req.minSalary) {
    missing.push("Minimum salary requirement not met");
    score -= 25;
  }
  
  // ... other checks ...
  
  return {
    isEligible: missing.length === 0,
    missingRequirements: missing,
    score: Math.max(0, score)
  };
}
```

#### Stage 2: Competitive Scoring
**Input**: Component scores + Program weights  
**Output**: Competitive score (0-100)  
**Location**: `src/services/viability/calculator.ts::calculateOverallScore()`  

**Logic** (to be updated):
```typescript
function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights'],
  eligibilityCheck: { isEligible: boolean; score: number }
): OverallScoreResult {
  // Calculate competitive score (weighted average)
  const competitiveScore = 
    componentScores.career * programWeights.career +
    componentScores.financial * programWeights.financial +
    componentScores.education * programWeights.education +
    componentScores.language * programWeights.language +
    componentScores.family * programWeights.family;
  
  const roundedCompetitiveScore = Math.round(
    Math.max(0, Math.min(100, competitiveScore))
  );
  
  // Determine overall score based on eligibility
  let overallScore: number;
  
  if (eligibilityCheck.isEligible) {
    // User meets all requirements - use full competitive score
    overallScore = roundedCompetitiveScore;
  } else {
    // User doesn't meet requirements - cap at 25 (Very Low)
    // Use the lower of: eligibility score or 25
    overallScore = Math.min(25, eligibilityCheck.score);
  }
  
  return {
    overallScore,
    competitiveScore: roundedCompetitiveScore,
    meetsHardRequirements: eligibilityCheck.isEligible,
  };
}
```

---

## Data Flow

### Complete Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User Profile Input                                        │
│    { education, salary, experience, ... }                   │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Program Matching                                          │
│    getBestProgramsForCountry(profile, countryCode)          │
│    → Returns top 5 programs for country                     │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Eligibility Check (for each program)                     │
│    checkEligibility(profile, program)                       │
│    → { isEligible, missingRequirements, score }             │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Select Best Program                                       │
│    bestMatch = sortedMatches[0]                             │
│    PRESERVE eligibility info ✅                              │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Calculate Component Scores                                │
│    calculateComponentScores(profile, bestProgram)           │
│    → { career, financial, education, language, family }     │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Calculate Overall Score (UPDATED)                         │
│    calculateOverallScore(                                    │
│      componentScores,                                        │
│      bestProgram.weights,                                    │
│      eligibilityCheck ← NEW PARAMETER                        │
│    )                                                         │
│    → { overallScore, competitiveScore, meetsHardReqs }      │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. Build ViabilityScore Object                              │
│    {                                                         │
│      overallScore,           ← Capped if not eligible       │
│      competitiveScore,       ← NEW                          │
│      meetsHardRequirements,  ← NEW                          │
│      missingRequirements,    ← NEW                          │
│      componentScores,                                        │
│      riskFactors,                                            │
│      ...                                                     │
│    }                                                         │
└────────────────────────┬────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. Return to UI                                              │
│    Display eligibility badge + score + missing requirements │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Changes

### File 1: `src/types/viability.ts`

**Changes**:
1. Add new fields to `ViabilityScore` interface
2. Keep all existing fields unchanged
3. Ensure backward compatibility

```typescript
export interface ViabilityScore {
  // ... existing fields ...
  
  // NEW FIELDS (add these)
  meetsHardRequirements: boolean;
  missingRequirements: string[];
  competitiveScore: number;
}
```

### File 2: `src/services/viability/calculator.ts`

**Changes**:
1. Update `calculateOverallScore()` signature
2. Add eligibility parameter
3. Return structured result
4. Update `calculateCountryViability()` to pass eligibility data

```typescript
// BEFORE
export function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights']
): number {
  // ...
}

// AFTER
export interface OverallScoreResult {
  overallScore: number;
  competitiveScore: number;
  meetsHardRequirements: boolean;
}

export function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights'],
  eligibilityCheck: { isEligible: boolean; score: number }
): OverallScoreResult {
  // ... new implementation ...
}
```

**Update `calculateCountryViability()`**:
```typescript
// Line 196: Get eligibility info from bestMatch
const eligibilityCheck = {
  isEligible: bestMatch.isEligible,
  score: bestMatch.eligibilityScore,
};

// Line 217: Pass eligibility to calculateOverallScore
const scoreResult = calculateOverallScore(
  componentScores,
  bestProgram.weights,
  eligibilityCheck // NEW PARAMETER
);

// Line 243: Build ViabilityScore with new fields
return {
  // ... existing fields ...
  overallScore: scoreResult.overallScore,
  competitiveScore: scoreResult.competitiveScore,
  meetsHardRequirements: scoreResult.meetsHardRequirements,
  missingRequirements: bestMatch.missingRequirements,
  // ... rest of fields ...
};
```

### File 3: UI Components (Results Display)

**Changes**:
1. Update `CountryCard` component to show eligibility badge
2. Add `MissingRequirements` component
3. Update score display logic

---

## Backward Compatibility

### Database Migration
**Not needed** - IndexedDB schema doesn't change, only adding new fields.

### Existing Data
- Old `ViabilityScore` objects won't have new fields
- UI should handle missing fields gracefully
- Default values: `meetsHardRequirements = true`, `missingRequirements = []`, `competitiveScore = overallScore`

### API Compatibility
- All existing function signatures remain compatible
- New parameter is added (not replacing existing ones)
- Return type changes from `number` to `OverallScoreResult` (breaking change, but internal only)

---

## Performance Considerations

### Computational Complexity
- **No change**: Eligibility check already happens in `programMatcher`
- **No additional computation**: Just passing data through
- **Memory impact**: Minimal (3 new fields per ViabilityScore)

### Optimization Opportunities
- Cache eligibility results if checking same program multiple times
- Lazy-load missing requirements details (only when user expands)

---

## Testing Strategy

### Unit Tests
1. Test `calculateOverallScore()` with eligible user
2. Test `calculateOverallScore()` with ineligible user
3. Test edge cases (barely meets/doesn't meet requirements)
4. Test all 27 visa programs

### Integration Tests
1. Test full flow from profile to viability score
2. Test UI displays eligibility correctly
3. Test missing requirements list

### Edge Cases
1. User meets all requirements → full competitive score
2. User meets no requirements → score = 0
3. User meets some requirements → score capped at 25
4. User barely meets requirements (e.g., exactly minimum salary)
5. Multiple missing requirements → all listed

---

## Security Considerations

### Data Privacy
- No new PII collected
- Missing requirements don't expose sensitive data
- All data remains local (IndexedDB)

### Input Validation
- Validate eligibility check result structure
- Handle malformed data gracefully
- Prevent score manipulation

---

## Rollout Plan

### Phase 1: Backend Changes
1. Update type definitions
2. Update calculator functions
3. Run unit tests

### Phase 2: UI Changes
1. Add eligibility badge component
2. Update results display
3. Add missing requirements section

### Phase 3: Testing
1. Run full test suite
2. Manual testing with sample profiles
3. Accessibility testing

### Phase 4: Deployment
1. Build and deploy
2. Monitor for issues
3. Gather user feedback

---

## Success Metrics

### Technical Metrics
- [ ] All tests pass
- [ ] No performance degradation
- [ ] Type safety maintained
- [ ] Code coverage ≥ 80%

### Functional Metrics
- [ ] Ineligible programs show score ≤ 25
- [ ] Eligible programs show full score
- [ ] Missing requirements displayed correctly
- [ ] UI updates in real-time

---

**Document Owner**: Architecture Engineer  
**Created**: 2025-10-19  
**Status**: Approved - Ready for Implementation

