# Scoring Threshold Fix - Project Plan

**Date**: 2025-10-19  
**Priority**: High  
**Issue**: Overall score calculation doesn't account for hard pass/fail thresholds in visa programs  
**Impact**: Users may see "Good" viability scores for programs they're not eligible for  

---

## Problem Statement

### Current Behavior
The `calculateOverallScore()` function calculates a weighted average of component scores (0-100), where:
- High scores in one area can compensate for low scores in another
- A user can get a "Good" (60+) overall score even if they fail hard requirements

### Example Problem
**User Profile**:
- Career: 100, Financial: 100, Education: 20, Language: 100, Family: 100

**Germany EU Blue Card** (requires Bachelor's degree):
- Weights: Career 0.35, Financial 0.25, Education 0.30, Language 0.05, Family 0.05
- **Calculated Score**: 71 ✅ "Good" viability
- **Reality**: ❌ **REJECTED** - doesn't meet minimum education requirement!

### Root Cause
The overall score calculation ignores the eligibility check that happens earlier in the flow. The `programMatcher.ts` filters out ineligible programs, but the score doesn't reflect this.

---

## Solution Design

### Approach: Two-Stage Scoring System

**Stage 1: Hard Requirements Check** (Pass/Fail)
- Check if user meets all mandatory requirements
- Examples: minimum salary, education level, citizenship, job offer

**Stage 2: Competitive Scoring** (0-100)
- Only calculated if Stage 1 passes
- Weighted average of component scores
- Reflects how competitive the application is

**Overall Score Logic**:
- If hard requirements NOT met: Score capped at 25 (max "Very Low" viability)
- If hard requirements met: Full weighted score (0-100)

---

## Team Assignments

### 1. Product Manager (PM)
**Tasks**:
- [ ] Define user-facing messaging for ineligible programs
- [ ] Decide how to display "Not Eligible" vs "Low Score" in UI
- [ ] Create user stories for improved scoring display
- [ ] Validate that new scoring aligns with user expectations

**Deliverables**:
- User stories for scoring improvements
- UI messaging guidelines
- Acceptance criteria

### 2. UX Designer
**Tasks**:
- [ ] Design visual indicators for eligibility status
- [ ] Create mockups for "Not Eligible" badge/indicator
- [ ] Design improved results card showing both eligibility and score
- [ ] Ensure accessibility of new indicators

**Deliverables**:
- UI mockups for eligibility indicators
- Design specs for results display
- Accessibility checklist

### 3. Architecture Engineer
**Tasks**:
- [ ] Design updated scoring algorithm architecture
- [ ] Define new interfaces/types for two-stage scoring
- [ ] Document threshold logic for each visa program type
- [ ] Review and approve implementation approach

**Deliverables**:
- Updated algorithm specification
- Type definitions for scoring result
- Architecture documentation

### 4. Frontend Engineer
**Tasks**:
- [ ] Update `calculateOverallScore()` to accept eligibility info
- [ ] Modify `calculateCountryViability()` to pass eligibility data
- [ ] Add `meetsHardRequirements` field to ViabilityScore interface
- [ ] Update Results UI to show eligibility status
- [ ] Add visual indicators for ineligible programs

**Deliverables**:
- Updated calculator.ts
- Updated viability.ts types
- Updated Results UI components
- Code review ready

### 5. QA Automation Engineer
**Tasks**:
- [ ] Write tests for ineligible program scoring
- [ ] Write tests for edge cases (barely meets/doesn't meet requirements)
- [ ] Update existing tests that may be affected
- [ ] Validate scoring accuracy across all 27 visa programs

**Deliverables**:
- New test suite for threshold logic
- Updated existing tests
- Test coverage report

### 6. Coordinator
**Tasks**:
- [ ] Facilitate team coordination
- [ ] Track progress on all tasks
- [ ] Resolve any blockers or conflicts
- [ ] Update project documentation
- [ ] Ensure all deliverables are completed

**Deliverables**:
- This project plan
- Progress tracking
- Updated PROJECT_COORDINATION.md

---

## Implementation Plan

### Phase 1: Design & Planning (PM, UX, Architecture)
**Duration**: 1-2 hours

1. **PM**: Define user stories and acceptance criteria
2. **UX**: Create mockups for eligibility indicators
3. **Architecture**: Design two-stage scoring system
4. **All**: Review and approve approach

### Phase 2: Implementation (Frontend Engineer)
**Duration**: 2-3 hours

1. Update type definitions in `src/types/viability.ts`
2. Modify `calculateOverallScore()` in `src/services/viability/calculator.ts`
3. Update `calculateCountryViability()` to pass eligibility data
4. Update Results UI components to show eligibility status

### Phase 3: Testing (QA Engineer)
**Duration**: 1-2 hours

1. Write tests for threshold logic
2. Test edge cases
3. Update existing tests
4. Validate across all visa programs

### Phase 4: Review & Deploy (All)
**Duration**: 30 minutes

1. Code review
2. Test validation
3. Documentation update
4. Final approval

---

## Technical Specification

### Updated Type Definitions

```typescript
// src/types/viability.ts

export interface ViabilityScore {
  // ... existing fields ...
  
  // NEW: Eligibility information
  meetsHardRequirements: boolean;
  missingRequirements: string[];
  competitiveScore: number; // Score if eligible (0-100)
  
  // MODIFIED: overallScore now reflects eligibility
  overallScore: number; // 0-25 if not eligible, competitiveScore if eligible
}
```

### Updated Calculator Function

```typescript
// src/services/viability/calculator.ts

export function calculateOverallScore(
  componentScores: ComponentScore,
  programWeights: VisaProgram['weights'],
  eligibilityCheck: { isEligible: boolean; score: number }
): { overallScore: number; competitiveScore: number } {
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
  
  // If not eligible, cap overall score at 25
  const overallScore = eligibilityCheck.isEligible
    ? roundedCompetitiveScore
    : Math.min(25, eligibilityCheck.score);
  
  return {
    overallScore,
    competitiveScore: roundedCompetitiveScore,
  };
}
```

### Updated UI Display

```tsx
// Results card should show:
{!score.meetsHardRequirements && (
  <Badge variant="danger">Not Eligible</Badge>
)}

{score.meetsHardRequirements && (
  <Badge variant={getViabilityVariant(score.viabilityLevel)}>
    {score.viabilityLevel}
  </Badge>
)}

{score.missingRequirements.length > 0 && (
  <div className="missing-requirements">
    <h4>Missing Requirements:</h4>
    <ul>
      {score.missingRequirements.map(req => (
        <li key={req}>{req}</li>
      ))}
    </ul>
  </div>
)}
```

---

## Success Criteria

### Functional Requirements
- [ ] Ineligible programs show score ≤ 25 (Very Low viability)
- [ ] Eligible programs show full competitive score (0-100)
- [ ] UI clearly indicates eligibility status
- [ ] Missing requirements are displayed to user
- [ ] All existing tests still pass
- [ ] New tests validate threshold logic

### User Experience
- [ ] Users can immediately see if they're eligible
- [ ] Users understand why they're not eligible
- [ ] Users can distinguish between "not eligible" and "low score"
- [ ] No false hope for ineligible programs

### Technical Quality
- [ ] Code is well-documented
- [ ] Types are properly defined
- [ ] Tests cover edge cases
- [ ] Performance is not degraded

---

## Risk Mitigation

### Risk 1: Breaking Existing Functionality
**Mitigation**: 
- Run full test suite before and after changes
- Use feature flag if needed for gradual rollout
- Keep backward compatibility where possible

### Risk 2: UI Confusion
**Mitigation**:
- Clear visual indicators (badges, colors)
- Helpful messaging explaining eligibility
- User testing with sample profiles

### Risk 3: Performance Impact
**Mitigation**:
- Eligibility check already happens in programMatcher
- No additional computation needed
- Just passing data through the flow

---

## Timeline

**Total Estimated Time**: 4-6 hours

- **Phase 1 (Design)**: 1-2 hours
- **Phase 2 (Implementation)**: 2-3 hours
- **Phase 3 (Testing)**: 1-2 hours
- **Phase 4 (Review)**: 30 minutes

**Target Completion**: Same day

---

## Next Steps

1. **Coordinator**: Share this plan with all team members
2. **PM**: Start on user stories and messaging
3. **UX Designer**: Start on mockups
4. **Architecture Engineer**: Review and approve technical approach
5. **Frontend Engineer**: Wait for design approval, then implement
6. **QA Engineer**: Prepare test cases while implementation is in progress

---

**Document Owner**: Coordinator  
**Created**: 2025-10-19  
**Status**: Ready for Team Review

