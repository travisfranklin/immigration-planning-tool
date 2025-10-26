# User Stories - Scoring Threshold Fix

**Epic**: Improve Viability Scoring Accuracy  
**Priority**: High  
**Created**: 2025-10-19  

---

## User Story 1: Clear Eligibility Status

**As a** user reviewing my viability results  
**I want to** immediately see if I'm eligible for each visa program  
**So that** I don't waste time pursuing programs I don't qualify for  

### Acceptance Criteria
- [ ] Each country result card shows an eligibility badge/indicator
- [ ] "Not Eligible" badge is clearly visible and distinct from score badges
- [ ] Eligible programs show normal viability level badges (Excellent, Good, etc.)
- [ ] Badge colors follow accessibility guidelines (WCAG 2.1 AA)

### UI Messaging
- **Not Eligible**: Red/danger badge with "Not Eligible" text
- **Eligible**: Normal viability badges (green/blue/yellow based on score)

---

## User Story 2: Understanding Missing Requirements

**As a** user who is not eligible for a program  
**I want to** see exactly which requirements I'm missing  
**So that** I can work towards meeting them or choose alternative programs  

### Acceptance Criteria
- [ ] Missing requirements are listed clearly for ineligible programs
- [ ] Each missing requirement is specific and actionable
- [ ] Requirements are shown in plain language (not technical jargon)
- [ ] List is collapsible/expandable to avoid cluttering the UI

### UI Messaging Examples
- "Minimum salary: €58,400/year (you have: €45,000/year)"
- "Education: Bachelor's degree required (you have: High School)"
- "Job offer required (you don't have a job offer)"
- "US citizenship required (you have: [other citizenship])"

---

## User Story 3: Distinguishing Eligibility from Competitiveness

**As a** user comparing different visa programs  
**I want to** understand the difference between "not eligible" and "low competitive score"  
**So that** I can make informed decisions about which programs to pursue  

### Acceptance Criteria
- [ ] Ineligible programs show score ≤ 25 with "Not Eligible" indicator
- [ ] Eligible but low-scoring programs show actual score with "Low" viability
- [ ] Tooltip or help text explains the difference
- [ ] Results are sorted with eligible programs first

### UI Messaging
**Help Text**:
> **Eligibility vs. Competitiveness**
> 
> - **Not Eligible**: You don't meet one or more mandatory requirements. Your application would be automatically rejected.
> - **Low Viability**: You meet the basic requirements, but your profile is less competitive compared to other applicants.

---

## User Story 4: Accurate Overall Scores

**As a** user viewing my viability scores  
**I want** the overall score to reflect whether I'm actually eligible  
**So that** I have realistic expectations about my chances  

### Acceptance Criteria
- [ ] Ineligible programs show overall score ≤ 25 (Very Low)
- [ ] Eligible programs show full competitive score (0-100)
- [ ] Score calculation is transparent and documented
- [ ] Users can see both eligibility status and competitive score

### Scoring Logic
- **Not Eligible**: Overall score capped at 25 (max "Very Low" viability)
- **Eligible**: Overall score = competitive score (weighted average of components)

---

## User Story 5: Actionable Next Steps

**As a** user who is not eligible for my preferred program  
**I want to** see alternative programs I might qualify for  
**So that** I can adjust my immigration strategy  

### Acceptance Criteria
- [ ] Alternative programs section shows only eligible programs
- [ ] Ineligible alternatives are marked clearly
- [ ] Suggestions include programs with similar goals (work, entrepreneur, etc.)
- [ ] Each alternative shows eligibility status

### UI Messaging
**For Ineligible Primary Program**:
> You're not currently eligible for **Germany EU Blue Card**. Consider these alternatives:
> - ✅ **Germany Job Seeker Visa** (Eligible - Good viability)
> - ✅ **Netherlands DAFT** (Eligible - Excellent viability)
> - ❌ **France Talent Passport** (Not Eligible - requires Master's degree)

---

## User Story 6: Progress Tracking

**As a** user working towards meeting requirements  
**I want to** see how close I am to eligibility  
**So that** I can track my progress and stay motivated  

### Acceptance Criteria
- [ ] For near-miss requirements, show how close user is
- [ ] Provide specific targets (e.g., "Need €13,400 more in salary")
- [ ] Show which requirements are easiest to meet
- [ ] Update in real-time as user updates their profile

### UI Messaging Examples
- "You're 77% of the way to the minimum salary requirement"
- "Complete a Bachelor's degree to become eligible"
- "Increase savings by €2,500 to meet minimum investment"

---

## Messaging Guidelines

### Tone & Voice
- **Clear**: Use plain language, avoid jargon
- **Honest**: Don't sugarcoat ineligibility
- **Helpful**: Provide actionable guidance
- **Encouraging**: Show paths forward when possible

### Color Coding
- **Red/Danger**: Not eligible, critical missing requirements
- **Yellow/Warning**: Close to threshold, needs improvement
- **Green/Success**: Eligible, meets requirements
- **Blue/Info**: Additional information, tips

### Terminology
- Use "Not Eligible" instead of "Rejected" or "Disqualified"
- Use "Requirements" instead of "Criteria" or "Conditions"
- Use "Competitive Score" instead of "Ranking" or "Rating"
- Use "Viability" instead of "Chance" or "Probability"

---

## Edge Cases

### Edge Case 1: Barely Meets Requirements
**Scenario**: User has exactly the minimum salary (€58,400)  
**Behavior**: Show as eligible with appropriate competitive score  
**Message**: "✅ Meets minimum requirements"

### Edge Case 2: Multiple Missing Requirements
**Scenario**: User missing 3+ requirements  
**Behavior**: Show all missing requirements, prioritize by importance  
**Message**: "Missing 3 key requirements: [list in order of importance]"

### Edge Case 3: Citizenship-Specific Programs
**Scenario**: User not eligible due to citizenship (e.g., DAFT requires US citizenship)  
**Behavior**: Show clear citizenship requirement  
**Message**: "This program is only available to US citizens"

### Edge Case 4: Age Restrictions
**Scenario**: User too old/young for program  
**Behavior**: Show age requirement clearly  
**Message**: "Age requirement: 18-35 years (you are: 42 years)"

---

## Success Metrics

### User Understanding
- [ ] 90%+ of users understand eligibility status
- [ ] Users can identify missing requirements
- [ ] Users know what actions to take

### User Satisfaction
- [ ] Reduced confusion about viability scores
- [ ] Increased trust in scoring accuracy
- [ ] Positive feedback on clarity

### Behavioral Metrics
- [ ] Users update profiles to meet requirements
- [ ] Users explore alternative programs
- [ ] Reduced time spent on ineligible programs

---

## Implementation Priority

### Must Have (P0)
1. Eligibility badge on results cards
2. Missing requirements list
3. Capped scores for ineligible programs
4. Clear visual distinction

### Should Have (P1)
1. Help text explaining eligibility vs. competitiveness
2. Alternative program suggestions
3. Progress indicators for near-miss requirements

### Nice to Have (P2)
1. Detailed tooltips for each requirement
2. Interactive "what-if" scenarios
3. Personalized recommendations

---

## Acceptance Testing Scenarios

### Scenario 1: Fully Eligible User
**Given**: User meets all requirements for Germany EU Blue Card  
**When**: User views results  
**Then**: 
- No "Not Eligible" badge shown
- Full competitive score displayed (e.g., 85 - "Excellent")
- No missing requirements listed

### Scenario 2: Completely Ineligible User
**Given**: User has high school education, no job offer, low salary  
**When**: User views Germany EU Blue Card results  
**Then**:
- "Not Eligible" badge shown in red
- Overall score ≤ 25 ("Very Low")
- Missing requirements listed: "Bachelor's degree required", "Job offer required", "Minimum salary €58,400"

### Scenario 3: Partially Eligible User
**Given**: User meets education and job offer requirements but salary is 80% of minimum  
**When**: User views results  
**Then**:
- "Not Eligible" badge shown
- Overall score ≤ 25
- Missing requirement: "Minimum salary: €58,400/year (you have: €46,720/year)"
- Progress indicator: "You're 80% of the way to the minimum salary"

---

**Document Owner**: Product Manager  
**Created**: 2025-10-19  
**Status**: Ready for UX Design

