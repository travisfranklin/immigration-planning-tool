# Viability Scoring System - Comprehensive Guide

**Version**: 2.0  
**Last Updated**: 2025-10-25  
**Status**: Complete Documentation

---

## Table of Contents

1. [Overview](#overview)
2. [Two-Stage Scoring System](#two-stage-scoring-system)
3. [Overall Score Calculation](#overall-score-calculation)
4. [Component Scores](#component-scores)
5. [Score Interpretation](#score-interpretation)
6. [Program-Specific Weights](#program-specific-weights)
7. [Examples](#examples)

---

## Overview

The viability scoring system evaluates a user's immigration prospects by analyzing **5 key components** and calculating both an **eligibility status** and a **competitive score**. The system uses a two-stage approach to ensure users understand both whether they qualify and how competitive they are.

### Key Principles

- **Transparent**: All scoring logic is deterministic and explainable
- **Fair**: Based on objective criteria aligned with actual visa requirements
- **Comprehensive**: Considers all major factors that affect immigration success
- **Honest**: Clearly distinguishes between eligibility and competitiveness

---

## Two-Stage Scoring System

### Stage 1: Eligibility Check (Pass/Fail)

**Purpose**: Determine if the user meets mandatory hard requirements.

**Hard Requirements** (varies by program):
- Minimum education level (e.g., Bachelor's degree)
- Minimum salary/income threshold
- Job offer requirement
- Minimum years of experience
- Minimum investment amount
- Language proficiency minimums

**Result**: 
- `meetsHardRequirements`: `true` or `false`
- `missingRequirements`: Array of unmet requirements

### Stage 2: Competitive Scoring (0-100)

**Purpose**: Calculate how competitive the user is among eligible candidates.

**Process**:
1. Calculate 5 component scores (0-100 each)
2. Apply program-specific weights
3. Calculate weighted average = **Competitive Score**

**Final Overall Score**:
```typescript
if (meetsHardRequirements === false) {
  overallScore = min(25, eligibilityScore)  // Capped at "Very Low"
} else {
  overallScore = competitiveScore  // Full 0-100 range
}
```

---

## Overall Score Calculation

### Default Component Weights

```
Overall Score = (
  Career Score      × 0.30  (30%) +
  Financial Score   × 0.25  (25%) +
  Education Score   × 0.20  (20%) +
  Language Score    × 0.15  (15%) +
  Family Score      × 0.10  (10%)
)
```

**Note**: Individual visa programs may override these weights (see [Program-Specific Weights](#program-specific-weights)).

---

## Component Scores

Each component score is calculated from multiple sub-factors, each with its own weight.

### 1. Career Score (0-100)

**Weight in Overall Score**: 30% (default)

**Sub-Components**:

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Experience | 20% | Years of professional experience |
| Employment Status | 15% | Current employment situation |
| Occupation Demand | 20% | Demand for occupation in target country |
| Job Offer | 25% | Whether user has job offer |
| Salary | 20% | Income level vs. program requirements |

#### Experience Scoring

```
15+ years:  100 points
10-14 years: 90 points
7-9 years:   80 points
5-6 years:   70 points
3-4 years:   60 points
1-2 years:   50 points
<1 year:     40 points

If below program minimum: (actual / required) × 50
```

#### Employment Status Scoring

**For Work/Digital Nomad Visas**:
- Employed: 100 points
- Self-employed: 90 points
- Unemployed: 40 points
- Student: 30 points

**For Entrepreneur/Investor Visas**:
- Self-employed: 100 points
- Employed: 70 points
- Unemployed: 50 points
- Student: 40 points

**For Job Seeker Visas**:
- Unemployed: 100 points
- Student: 90 points
- Employed: 80 points
- Self-employed: 70 points

#### Occupation Demand Scoring

**High-Demand Occupations** (90 points):
- Software, engineer, developer, programmer, data scientist
- Doctor, nurse, physician, healthcare
- Teacher, professor, researcher
- Architect, designer

**Medium-Demand Occupations** (70 points):
- Manager, analyst, consultant, accountant
- Marketing, sales, business
- Technician, specialist

**Other Occupations**: 50 points

#### Job Offer Scoring

**If program requires job offer**:
- Has offer: 100 points
- No offer: 0 points (fails eligibility)

**If program doesn't require job offer**:
- Has offer: 80 points (bonus)
- No offer: 60 points

#### Salary Scoring

**With Salary Requirement**:
```
≥ 150% of minimum:  100 points
≥ 120% of minimum:   90 points
≥ 100% of minimum:   80 points
≥  80% of minimum:   60 points
≥  60% of minimum:   40 points
<  60% of minimum:   20 points
```

**Without Salary Requirement**:
```
≥ $100,000:  100 points
≥  $75,000:   90 points
≥  $50,000:   80 points
≥  $35,000:   70 points
≥  $25,000:   60 points
<  $25,000:   50 points
```

---

### 2. Financial Score (0-100)

**Weight in Overall Score**: 25% (default), 80% (investor visas)

**Sub-Components** (Standard Visas):

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Income | 30% | Annual income level |
| Savings | 25% | Total savings/liquid assets |
| Cost of Living | 20% | Ability to afford target country |
| Investment Capacity | 5% | Ability to invest |
| Financial Stability | 20% | Overall financial health |

**Sub-Components** (Investor Visas):

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Income | 15% | Annual income level |
| Savings | 20% | Total savings/liquid assets |
| Cost of Living | 15% | Ability to afford target country |
| Investment Capacity | 35% | Ability to meet investment requirement |
| Financial Stability | 15% | Overall financial health |

#### Income Scoring

**With Income Requirement**:
```
≥ 200% of minimum:  100 points
≥ 150% of minimum:   90 points
≥ 120% of minimum:   80 points
≥ 100% of minimum:   70 points
≥  80% of minimum:   50 points
≥  60% of minimum:   30 points
<  60% of minimum:   10 points
```

**Without Income Requirement**:
```
≥ $150,000:  100 points
≥ $100,000:   95 points
≥  $75,000:   90 points
≥  $60,000:   85 points
≥  $50,000:   80 points
≥  $40,000:   70 points
≥  $30,000:   60 points
≥  $20,000:   50 points
<  $20,000:   30 points
```

#### Savings Scoring

**With Savings/Investment Requirement**:
```
≥ 200% of minimum:  100 points
≥ 150% of minimum:   90 points
≥ 120% of minimum:   80 points
≥ 100% of minimum:   70 points
≥  80% of minimum:   50 points
≥  60% of minimum:   30 points
<  60% of minimum:   10 points
```

**Without Savings Requirement**:
```
≥ $500,000:  100 points
≥ $250,000:   95 points
≥ $100,000:   90 points
≥  $75,000:   85 points
≥  $50,000:   80 points
≥  $30,000:   70 points
≥  $20,000:   60 points
≥  $10,000:   50 points
≥   $5,000:   40 points
<   $5,000:   20 points
```

#### Cost of Living Scoring

**Annual Cost of Living** (single person):
- Germany (DE): €24,000
- Netherlands (NL): €26,000
- France (FR): €22,000
- Spain (ES): €18,000
- Italy (IT): €20,000

**Family Size Multipliers**:
- 0 dependents: 1.0×
- 1 dependent (spouse): 1.5×
- 2 dependents (spouse + 1 child): 1.8×
- 3 dependents (spouse + 2 children): 2.0×
- 4+ dependents: 2.0× + 0.2× per additional

**Scoring**:
```
Years of expenses = (income + savings) / (cost × multiplier)

≥ 5 years:  100 points
≥ 4 years:   90 points
≥ 3 years:   80 points
≥ 2 years:   70 points
≥ 1.5 years: 60 points
≥ 1 year:    50 points
< 1 year:    30 points
```

#### Investment Capacity Scoring

```
Can meet requirement × 2:    100 points
Can meet requirement × 1.5:   90 points
Can meet requirement × 1.2:   80 points
Can meet requirement:         70 points
80% of requirement:           50 points
60% of requirement:           30 points
< 60% of requirement:         10 points
```

#### Financial Stability Scoring

Based on income-to-savings ratio and employment status:
```
High stability (employed + good ratio):  90 points
Medium stability:                        70 points
Low stability:                           50 points
```

---

### 3. Education Score (0-100)

**Weight in Overall Score**: 20% (default), 30% (EU Blue Card)

**Sub-Components**:

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Education Level | 50% | Highest degree attained |
| Field of Study | 30% | Relevance of field |
| Education-Occupation Alignment | 20% | Degree matches occupation |

#### Education Level Scoring

**With Education Requirement**:
```
PhD:      Exceeds requirement by 3 levels → 100 points
Master:   Exceeds requirement by 2 levels →  90 points
Bachelor: Exceeds requirement by 1 level  →  80 points
Meets requirement exactly:                   70 points
Below requirement:                           20 points
```

**Without Education Requirement**:
```
PhD:         100 points
Master:       90 points
Bachelor:     80 points
High School:  60 points
```

#### Field of Study Scoring

**High-Demand Fields** (90 points):
- Computer Science, Software, Engineering, Data Science
- Medicine, Nursing, Healthcare, Pharmacy
- Business, Finance, Economics, Accounting
- Mathematics, Physics, Chemistry, Biology

**Medium-Demand Fields** (70 points):
- Education, Psychology, Social Sciences
- Arts, Design, Architecture
- Law, Political Science

**Other Fields**: 50 points

**Field-Occupation Match Bonus**: +10 points if field aligns with occupation

---

### 4. Language Score (0-100)

**Weight in Overall Score**: 15% (default), 5% (work visas)

**Sub-Components**:

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Country Language | 50% | Proficiency in target country's language |
| English Proficiency | 25% | English language skills |
| Multilingualism | 15% | Number of languages spoken |
| Learning Potential | 10% | Ability to learn new language |

#### Country Language Scoring

**Language Proficiency Levels** (CEFR):
- C2: Native/Mastery (rank 6)
- C1: Advanced (rank 5)
- B2: Upper Intermediate (rank 4)
- B1: Intermediate (rank 3)
- A2: Elementary (rank 2)
- A1: Beginner (rank 1)

**With Language Requirement**:
```
Exceeds requirement:
  Base score: 70 points
  +6 points per level above requirement

Below requirement:
  Score = max(20, (userLevel / requiredLevel) × 60)
```

**Without Language Requirement**:
```
C2: 100 points
C1:  95 points
B2:  85 points
B1:  75 points
A2:  60 points
A1:  50 points
```

**Country Languages**:
- Germany (DE): German
- Netherlands (NL): Dutch
- France (FR): French
- Spain (ES): Spanish
- Italy (IT): Italian

#### English Proficiency Scoring

```
C2: 100 points
C1:  95 points
B2:  85 points
B1:  70 points
A2:  50 points
A1:  30 points
No English: 20 points
```

#### Multilingualism Scoring

```
5+ languages: 100 points
4 languages:   90 points
3 languages:   80 points
2 languages:   70 points
1 language:    50 points
```

#### Learning Potential Scoring

Based on existing language skills and education:
```
High potential (multilingual + higher education):  90 points
Medium potential:                                   70 points
Low potential:                                      50 points
```

---

### 5. Family Score (0-100)

**Weight in Overall Score**: 10% (default), 5% (work visas)

**Sub-Components**:

| Sub-Factor | Weight | Description |
|------------|--------|-------------|
| Family Ties in Country | 40% | Family already in target country |
| Marital Status | 25% | Marital status and dependents |
| Family Adaptability | 20% | Family's ability to adapt |
| Financial Capacity | 15% | Ability to support family |

#### Family Ties Scoring

**For Family Reunification Visas**:
- Has family in country: 100 points
- No family in country: 0 points (fails eligibility)

**For Other Visas**:
- Has family in country: 90 points (strong bonus)
- No family in country: 50 points (neutral)

#### Marital Status Scoring

```
Single:                    80 points (most flexible)
Married, no children:      75 points
Married, 1 child:          70 points
Married, 2 children:       65 points
Married, 3+ children:      60 points
Single parent:             55 points
```

#### Family Adaptability Scoring

```
Family already in country:     95 points
No dependents:                 80 points
1 dependent:                   75 points
2 dependents:                  70 points
3+ dependents:                 65 points
```

#### Financial Capacity Scoring

Based on income/savings relative to family size:
```
Can support family for 3+ years:  90 points
Can support family for 2 years:   75 points
Can support family for 1 year:    60 points
Marginal support:                 40 points
Insufficient:                     20 points
```

---

## Score Interpretation

### Viability Levels

| Score Range | Level | Meaning |
|-------------|-------|---------|
| 80-100 | Excellent | Very strong candidate, high success probability |
| 60-79 | Good | Solid candidate, good success probability |
| 40-59 | Moderate | Viable but may face challenges |
| 20-39 | Low | Significant challenges, consider alternatives |
| 0-19 | Very Low | Not recommended, major obstacles |

### Special Cases

**Not Eligible (meetsHardRequirements = false)**:
- Overall score capped at 25 (Very Low)
- Red "NOT ELIGIBLE" badge displayed
- Missing requirements clearly listed
- Competitive score shown for reference

**Eligible but Low Score**:
- User meets minimums but faces competition
- May need to improve specific components
- Consider alternative programs or countries

---

## Program-Specific Weights

Different visa programs emphasize different factors. Here are examples:

### Work Visas (e.g., EU Blue Card)

```typescript
weights: {
  career: 0.35,      // 35% - Most important
  financial: 0.25,   // 25%
  education: 0.30,   // 30% - Very important
  language: 0.05,    // 5%  - Less critical
  family: 0.05,      // 5%  - Less critical
}
```

**Focus**: Career qualifications and education

### Investor Visas (e.g., Golden Visa)

```typescript
weights: {
  career: 0.05,      // 5%  - Not important
  financial: 0.80,   // 80% - Dominant factor
  education: 0.05,   // 5%  - Not important
  language: 0.05,    // 5%  - Not important
  family: 0.05,      // 5%  - Not important
}
```

**Focus**: Financial capacity to invest

### Entrepreneur Visas

```typescript
weights: {
  career: 0.40,      // 40% - Business experience
  financial: 0.35,   // 35% - Startup capital
  education: 0.15,   // 15%
  language: 0.05,    // 5%
  family: 0.05,      // 5%
}
```

**Focus**: Entrepreneurial background and funding

### Digital Nomad Visas

```typescript
weights: {
  career: 0.35,      // 35% - Remote work capability
  financial: 0.40,   // 40% - Income stability
  education: 0.10,   // 10%
  language: 0.10,    // 10%
  family: 0.05,      // 5%
}
```

**Focus**: Remote income and financial independence

### Family Reunification Visas

```typescript
weights: {
  career: 0.10,      // 10%
  financial: 0.30,   // 30% - Support capacity
  education: 0.05,   // 5%
  language: 0.15,    // 15%
  family: 0.40,      // 40% - Most important
}
```

**Focus**: Family ties and financial support

---

## Examples

### Example 1: Strong Tech Worker

**Profile**:
- Occupation: Software Engineer
- Experience: 8 years
- Employment: Employed
- Salary: $95,000
- Education: Bachelor's in Computer Science
- Savings: $75,000
- Languages: English (C2), German (B1)
- Family: Single

**Target**: Germany EU Blue Card

**Component Scores**:
- Career: 88 (high demand occupation, good experience, good salary)
- Financial: 85 (good income and savings)
- Education: 85 (Bachelor's meets requirement, STEM field)
- Language: 72 (B1 German, excellent English)
- Family: 80 (single, flexible)

**Calculation**:
```
Overall = (88 × 0.35) + (85 × 0.25) + (85 × 0.30) + (72 × 0.05) + (80 × 0.05)
        = 30.8 + 21.25 + 25.5 + 3.6 + 4.0
        = 85.15 → 85
```

**Result**: **85 - Excellent** ✅ Eligible, very competitive

---

### Example 2: Investor with Limited Language Skills

**Profile**:
- Occupation: Business Owner
- Experience: 15 years
- Employment: Self-employed
- Income: $200,000
- Savings: $600,000
- Education: Bachelor's in Business
- Languages: English (C1)
- Family: Married, 2 children

**Target**: Spain Golden Visa (€500k investment)

**Component Scores**:
- Career: 75 (good experience, self-employed)
- Financial: 95 (well above investment requirement)
- Education: 80 (Bachelor's degree)
- Language: 60 (no Spanish, good English)
- Family: 65 (married with children)

**Calculation**:
```
Overall = (75 × 0.05) + (95 × 0.80) + (80 × 0.05) + (60 × 0.05) + (65 × 0.05)
        = 3.75 + 76.0 + 4.0 + 3.0 + 3.25
        = 90.0
```

**Result**: **90 - Excellent** ✅ Eligible, financial strength compensates for language

---

### Example 3: Recent Graduate (Not Eligible)

**Profile**:
- Occupation: Junior Developer
- Experience: 1 year
- Employment: Employed
- Salary: $45,000
- Education: High School
- Savings: $5,000
- Languages: English (C2)
- Family: Single

**Target**: Germany EU Blue Card (requires Bachelor's + €58,400 salary)

**Component Scores**:
- Career: 65 (good occupation, limited experience, below salary)
- Financial: 55 (below requirements)
- Education: 20 (doesn't meet Bachelor's requirement)
- Language: 65 (no German, excellent English)
- Family: 80 (single, flexible)

**Eligibility Check**: ❌ FAILS
- Missing: Bachelor's degree
- Missing: Minimum salary (€58,400)

**Competitive Score** (if eligible):
```
= (65 × 0.35) + (55 × 0.25) + (20 × 0.30) + (65 × 0.05) + (80 × 0.05)
= 22.75 + 13.75 + 6.0 + 3.25 + 4.0
= 49.75 → 50
```

**Final Overall Score**: **25** (capped due to ineligibility)

**Result**: **25 - Very Low** ❌ Not Eligible
- Recommendation: Complete Bachelor's degree, gain experience, increase salary

---

## Summary

The viability scoring system provides:

1. **Clear Eligibility Status**: Pass/fail on hard requirements
2. **Competitive Assessment**: How you compare to other candidates
3. **Detailed Breakdown**: Understand strengths and weaknesses
4. **Actionable Insights**: Know what to improve
5. **Program-Specific Evaluation**: Different weights for different visa types

**Key Takeaway**: A high competitive score doesn't guarantee eligibility, and meeting minimum requirements doesn't guarantee a high score. Both factors matter for immigration success.

---

## Related Documentation

- **[SCORING_THRESHOLD_FIX_COMPLETE.md](./SCORING_THRESHOLD_FIX_COMPLETE.md)** - Technical implementation of two-stage scoring
- **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - High-level project overview
- **[data-schema.md](./data-schema.md)** - Data model and storage schema
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture

---

**Document Version**: 2.0
**Last Updated**: 2025-10-25
**Maintained By**: Development Team

