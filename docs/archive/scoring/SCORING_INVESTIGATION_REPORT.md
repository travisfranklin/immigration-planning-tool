# Scoring System Investigation Report

**Date**: 2025-10-20  
**Team**: Full Team Investigation  
**Status**: ✅ Investigation Complete - Fixes Needed

---

## Executive Summary

The team investigated three potential issues in the viability scoring system based on real user data. We found **2 bugs** and **1 working-as-designed feature** that may need UX improvements.

---

## Issues Investigated

### Issue #1: Netherlands DAFT Inconsistency ⚠️ **BUG FOUND**

**Symptom**:
```json
{
  "countryName": "Netherlands",
  "meetsHardRequirements": true,
  "missingRequirements": [
    "Requires business plan (consider self-employment)"
  ]
}
```

**Problem**: User is marked as "eligible" (`meetsHardRequirements: true`) but has items in the `missingRequirements` array. This is contradictory.

**Root Cause**:
- **File**: `src/services/viability/programMatcher.ts`
- **Lines**: 181-184, 203

```typescript
// Line 181-184: Business plan check
if (req.requiresBusinessPlan && profile.employmentStatus !== 'self_employed') {
  missing.push('Requires business plan (consider self-employment)');
  score -= 30;  // Only deducts 30 points
}

// Line 203: Eligibility determination
const isEligible = score >= 50 && missing.length < 3;
// Result: score = 70, missing.length = 1
// isEligible = true (70 >= 50 AND 1 < 3) ✅
```

**Analysis**:
The business plan requirement is treated as a "soft requirement" (only -30 points) rather than a "hard requirement" (immediate disqualification). This allows users to be marked as "eligible" even though they have missing requirements.

**Design Question**: Is a business plan a hard requirement or a soft requirement?
- **Hard requirement**: User MUST have it to apply (like citizenship)
- **Soft requirement**: User SHOULD have it but can work on it (like language proficiency)

For DAFT, a business plan is typically required for the application, but users can prepare it after deciding to pursue the visa. This makes it a **soft requirement**.

**The Bug**: Soft requirements should NOT be added to the `missingRequirements` array. They should be tracked separately as "recommendations" or "preparation needed".

---

### Issue #2: eligibilityScore vs matchReason Mismatch ⚠️ **BUG FOUND**

**Symptom**:
```json
{
  "recommendedProgram": {
    "programName": "DAFT (Dutch-American Friendship Treaty)",
    "eligibilityScore": 100,
    "matchReason": "You meet 70% of requirements"
  }
}
```

**Problem**: The `eligibilityScore` (100) doesn't match the percentage in `matchReason` (70%). This is confusing for users.

**Root Cause**:
- **File**: `src/services/viability/programMatcher.ts` → `src/services/viability/preferenceScorer.ts`
- **Lines**: 248-250 (programMatcher), 252 (preferenceScorer)

**Flow**:
1. `matchUserToPrograms()` calculates `matchReason` using raw `eligibility.score` (70%)
   ```typescript
   const matchReason = eligibility.isEligible
     ? `You meet ${Math.round(eligibility.score)}% of requirements`  // 70%
     : `Missing ${eligibility.missingRequirements.length} key requirements`;
   ```

2. `applyPreferenceAdjustments()` boosts `eligibilityScore` from 70 to 100
   ```typescript
   const adjustedScore = Math.max(0, Math.min(100, match.eligibilityScore + preferenceBoost));
   // 70 + 30 = 100
   ```

3. `matchReason` is never updated after the boost

**The Bug**: The `matchReason` reflects the base eligibility score (70%) but the `eligibilityScore` reflects the boosted score (100%). These should be consistent.

**Possible Fixes**:
1. **Option A**: Update `matchReason` after preference boosts
   - "You meet 70% of requirements (+30 preference boost = 100%)"
   
2. **Option B**: Show both scores separately
   - `baseEligibilityScore: 70`
   - `boostedEligibilityScore: 100`
   - `matchReason: "You meet 70% of base requirements"`

3. **Option C**: Don't include percentage in `matchReason`
   - `matchReason: "Good match for your profile"`

---

### Issue #3: Preference Boost Inflation ✅ **WORKING AS DESIGNED**

**Symptom**:
All countries show:
```json
{
  "competitiveScore": 78,
  "overallScore": 100,
  "userPreferenceBoost": 30-50
}
```

**Question**: Is a 50-point boost too generous? Can it inflate scores too much?

**Analysis**:

**Individual Boost Values**:
| Boost Type | Max Value | Condition |
|------------|-----------|-----------|
| Job Offer | +35 | Has job offer & program requires it |
| Job Offer Country | +25 | Job offer is in this country |
| Target Country | +15 | User selected this country |
| Timeline | +15 | Program fits user's timeline |
| Immigration Path | +10 | Program aligns with user's path |
| Path to PR/Citizenship | +10 | Program has clear path |
| Family | +20 | Has dependents & family program |

**Maximum Theoretical Boost**: 35 + 25 + 15 + 15 + 10 + 10 + 20 = **130 points**  
**Actual Cap**: **±50 points** (line 238 in preferenceScorer.ts)

**Impact Example**:
- User with competitive score of 51 (moderate viability)
- Gets +50 preference boost
- Final score: 101 → capped at 100 (excellent viability)

**Verdict**: ✅ **Working as designed**

The preference boost system is intentionally generous to reflect that user preferences and circumstances (like having a job offer) are very important factors in immigration success. A user with a job offer in hand is genuinely in a much better position than one without, even if their "competitive" qualifications are similar.

**Recommendation**: Keep the current system but improve UX to show users:
1. Base competitive score (78)
2. Preference boost breakdown (+30: job offer, +15: target country, etc.)
3. Final overall score (100)

This transparency will help users understand why they got a high score.

---

## Summary of Findings

| Issue | Status | Severity | Fix Required |
|-------|--------|----------|--------------|
| #1: Netherlands DAFT Inconsistency | 🐛 Bug | Medium | Yes - Separate soft/hard requirements |
| #2: eligibilityScore vs matchReason | 🐛 Bug | Low | Yes - Update matchReason or show both scores |
| #3: Preference Boost Inflation | ✅ Working | N/A | No - But improve UX transparency |

---

## Recommended Fixes

### Fix #1: Separate Soft and Hard Requirements

**Change**: Create two separate arrays in the eligibility check result:
- `missingHardRequirements`: Requirements that make user ineligible
- `recommendedPreparation`: Things user should prepare (soft requirements)

**Implementation**:
```typescript
// In programMatcher.ts
export interface EligibilityResult {
  isEligible: boolean;
  missingHardRequirements: string[];  // NEW: Only hard requirements
  recommendedPreparation: string[];   // NEW: Soft requirements
  score: number;
}

// Business plan is a soft requirement
if (req.requiresBusinessPlan && profile.employmentStatus !== 'self_employed') {
  recommendedPreparation.push('Prepare business plan');  // Not a blocker
  score -= 30;
}

// Citizenship is a hard requirement
if (req.citizenship && !req.citizenship.includes(profile.citizenship)) {
  missingHardRequirements.push(`Must be citizen of: ${req.citizenship.join(', ')}`);
  return { isEligible: false, missingHardRequirements, recommendedPreparation, score: 0 };
}

// Eligibility based only on hard requirements
const isEligible = missingHardRequirements.length === 0;
```

**UI Impact**:
- Show `missingHardRequirements` in red "Not Eligible" section
- Show `recommendedPreparation` in yellow "Preparation Needed" section

---

### Fix #2: Update matchReason After Preference Boosts

**Change**: Recalculate `matchReason` after preference boosts are applied.

**Implementation**:
```typescript
// In preferenceScorer.ts
export function applyPreferenceAdjustments(
  matches: ProgramMatchResult[],
  profile: UserProfile
): ProgramMatchResult[] {
  return matches.map(match => {
    const preferenceBoost = calculateTotalPreferenceBoost(match.program, profile);
    const adjustedScore = Math.max(0, Math.min(100, match.eligibilityScore + preferenceBoost));
    
    // NEW: Update matchReason to reflect boosted score
    const newMatchReason = match.isEligible
      ? preferenceBoost > 0
        ? `You meet ${Math.round(match.eligibilityScore)}% of requirements (+${preferenceBoost} preference boost)`
        : `You meet ${Math.round(adjustedScore)}% of requirements`
      : match.matchReason;  // Keep original for ineligible programs
    
    return {
      ...match,
      eligibilityScore: adjustedScore,
      matchReason: newMatchReason,  // NEW: Updated match reason
    };
  });
}
```

---

### Fix #3: Improve UX Transparency (Optional Enhancement)

**Change**: Add a score breakdown to help users understand their scores.

**Implementation**:
```typescript
// In ViabilityScore type
export interface ViabilityScore {
  // ... existing fields ...
  
  // NEW: Score breakdown for transparency
  scoreBreakdown?: {
    baseCompetitiveScore: number;      // 78
    preferenceBoostDetails: {          // Breakdown of +30
      targetCountry?: number;          // +15
      jobOffer?: number;               // +35
      timeline?: number;               // +15
      // ... etc
    };
    totalPreferenceBoost: number;      // +30
    finalScore: number;                // 100 (capped)
  };
}
```

**UI Impact**:
Show an expandable "Score Breakdown" section that explains:
- "Your base qualifications score: 78/100"
- "Preference boosts:"
  - "✓ Target country (+15)"
  - "✓ Job offer (+35, capped at +30)"
- "Final score: 100/100"

---

## Next Steps

1. **Frontend Engineer**: Implement Fix #1 (separate soft/hard requirements)
2. **Frontend Engineer**: Implement Fix #2 (update matchReason)
3. **QA Engineer**: Create tests for the fixes
4. **UX Designer**: Design score breakdown UI (optional Fix #3)
5. **Team**: Review and approve changes

---

## Impact Assessment

**User Impact**: 🟢 **Positive**
- Users will see clearer, more accurate eligibility information
- No breaking changes to existing data
- Better understanding of their scores

**Technical Impact**: 🟡 **Medium**
- Need to update `EligibilityResult` interface
- Need to update all callers of `checkEligibility()`
- Need to update UI components
- Need to add/update tests

**Timeline**: 1-2 days for implementation + testing

---

**Investigation Complete** ✅

