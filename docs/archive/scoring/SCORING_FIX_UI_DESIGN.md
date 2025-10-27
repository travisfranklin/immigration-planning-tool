# UI Design Specifications - Scoring Threshold Fix

**Feature**: Eligibility Status Indicators  
**Designer**: UX Designer  
**Date**: 2025-10-19  
**Status**: Ready for Implementation  

---

## Design Overview

### Goals
1. Make eligibility status immediately visible
2. Clearly distinguish "not eligible" from "low score"
3. Provide actionable information about missing requirements
4. Maintain clean, uncluttered UI

### Design Principles
- **Clarity First**: Eligibility status should be unmistakable
- **Accessibility**: WCAG 2.1 AA compliant (color contrast, screen readers)
- **Progressive Disclosure**: Show critical info first, details on demand
- **Consistency**: Use existing design system components

---

## Component Specifications

### 1. Eligibility Badge

#### Visual Design

**Not Eligible Badge**:
```
┌─────────────────────┐
│ ⚠️ NOT ELIGIBLE     │  ← Red background (#DC2626)
└─────────────────────┘    White text (#FFFFFF)
                           Bold font weight
                           12px padding, 6px border-radius
```

**Eligible Badges** (existing viability levels):
```
┌─────────────────┐
│ ✓ EXCELLENT     │  ← Green (#059669)
└─────────────────┘

┌─────────────────┐
│ ✓ GOOD          │  ← Blue (#2563EB)
└─────────────────┘

┌─────────────────┐
│ ⚠ MODERATE      │  ← Yellow (#D97706)
└─────────────────┘

┌─────────────────┐
│ ⚠ LOW           │  ← Orange (#EA580C)
└─────────────────┘
```

#### CSS Specifications
```css
.eligibility-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.eligibility-badge--not-eligible {
  background-color: #DC2626; /* red-600 */
  color: #FFFFFF;
}

.eligibility-badge--excellent {
  background-color: #059669; /* emerald-600 */
  color: #FFFFFF;
}

.eligibility-badge--good {
  background-color: #2563EB; /* blue-600 */
  color: #FFFFFF;
}

.eligibility-badge--moderate {
  background-color: #D97706; /* amber-600 */
  color: #FFFFFF;
}

.eligibility-badge--low {
  background-color: #EA580C; /* orange-600 */
  color: #FFFFFF;
}
```

#### Accessibility
- **ARIA Label**: `aria-label="Eligibility status: Not eligible"`
- **Role**: `role="status"`
- **Color Contrast**: All badges meet WCAG AA (4.5:1 minimum)
- **Icon + Text**: Icons supplement text, not replace it

---

### 2. Results Card Layout (Updated)

#### Desktop Layout (≥768px)
```
┌─────────────────────────────────────────────────────────────┐
│  🇩🇪 Germany                                    ⚠️ NOT ELIGIBLE │
│                                                               │
│  Overall Score: 25 / 100                                     │
│  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                               │
│  ⚠️ Missing Requirements:                                     │
│  • Bachelor's degree required (you have: High School)        │
│  • Minimum salary: €58,400/year (you have: €45,000/year)    │
│                                                               │
│  Recommended Program: Germany EU Blue Card                   │
│  Program Type: Work Visa                                     │
│                                                               │
│  [View Details] [View Alternatives]                          │
└─────────────────────────────────────────────────────────────┘
```

#### Mobile Layout (<768px)
```
┌──────────────────────────────┐
│  🇩🇪 Germany                  │
│  ⚠️ NOT ELIGIBLE              │
│                              │
│  Score: 25 / 100             │
│  ████░░░░░░░░░░░░░░░░░░░░░  │
│                              │
│  ⚠️ Missing Requirements     │
│  [Tap to expand]             │
│                              │
│  [View Details]              │
└──────────────────────────────┘
```

---

### 3. Missing Requirements Section

#### Expanded View
```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ Missing Requirements                                      │
│                                                               │
│  ❌ Education                                                 │
│     Bachelor's degree required                               │
│     You have: High School                                    │
│     → Consider completing a Bachelor's degree                │
│                                                               │
│  ❌ Salary                                                    │
│     Minimum: €58,400/year                                    │
│     You have: €45,000/year                                   │
│     You're 77% of the way there (need €13,400 more)         │
│     → Negotiate salary increase or seek higher-paying role   │
│                                                               │
│  ✅ Job Offer                                                 │
│     Required: Yes                                            │
│     You have: Yes ✓                                          │
└─────────────────────────────────────────────────────────────┘
```

#### Component Structure
```tsx
<div className="missing-requirements">
  <h3 className="missing-requirements__title">
    <AlertIcon /> Missing Requirements
  </h3>
  
  <div className="missing-requirements__list">
    {missingRequirements.map(req => (
      <div className="requirement-item requirement-item--missing">
        <div className="requirement-item__header">
          <XIcon className="text-danger-600" />
          <span className="requirement-item__category">{req.category}</span>
        </div>
        <div className="requirement-item__details">
          <p className="requirement-item__required">Required: {req.required}</p>
          <p className="requirement-item__current">You have: {req.current}</p>
          {req.progress && (
            <p className="requirement-item__progress">{req.progress}</p>
          )}
          {req.suggestion && (
            <p className="requirement-item__suggestion">
              → {req.suggestion}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
```

---

### 4. Score Display (Updated)

#### Before (Current)
```
Overall Score: 71 / 100
████████████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░
Good Viability
```

#### After (With Eligibility)
```
⚠️ NOT ELIGIBLE

Overall Score: 25 / 100
████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Very Low Viability

Note: Score is capped at 25 because you don't meet mandatory requirements.
```

#### For Eligible Programs
```
✓ ELIGIBLE

Overall Score: 85 / 100
████████████████████████████████████████████░░░░░░░░░░░░░░░
Excellent Viability

Competitive Score: 85 (You meet all requirements and have a strong profile)
```

---

### 5. Alternative Programs Section (Updated)

#### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  Alternative Programs                                         │
│                                                               │
│  ✅ Germany Job Seeker Visa                                   │
│     Score: 78 / 100  │  Good Viability                       │
│     Why: Lower education requirements, no job offer needed   │
│     [View Details]                                            │
│                                                               │
│  ✅ Netherlands DAFT                                          │
│     Score: 92 / 100  │  Excellent Viability                  │
│     Why: US citizens only, low investment requirement         │
│     [View Details]                                            │
│                                                               │
│  ❌ France Talent Passport                                    │
│     Not Eligible  │  Requires Master's degree                │
│     [View Details]                                            │
└─────────────────────────────────────────────────────────────┘
```

---

### 6. Help Text / Tooltip

#### Tooltip Content
```
┌─────────────────────────────────────────────────────────────┐
│  ℹ️ Understanding Your Score                                  │
│                                                               │
│  Eligibility vs. Competitiveness                             │
│                                                               │
│  • NOT ELIGIBLE: You don't meet one or more mandatory        │
│    requirements. Your application would be automatically     │
│    rejected. Score is capped at 25.                          │
│                                                               │
│  • LOW VIABILITY: You meet basic requirements, but your      │
│    profile is less competitive compared to other applicants. │
│                                                               │
│  • GOOD/EXCELLENT: You meet requirements and have a strong   │
│    competitive profile.                                      │
└─────────────────────────────────────────────────────────────┘
```

#### Placement
- Info icon (ℹ️) next to "Overall Score" label
- Tooltip appears on hover (desktop) or tap (mobile)
- Also available as expandable section on mobile

---

## Color Palette

### Eligibility Status Colors
```
Not Eligible:  #DC2626 (red-600)    - Background
               #FFFFFF (white)      - Text
               
Excellent:     #059669 (emerald-600) - Background
               #FFFFFF (white)       - Text
               
Good:          #2563EB (blue-600)    - Background
               #FFFFFF (white)       - Text
               
Moderate:      #D97706 (amber-600)   - Background
               #FFFFFF (white)       - Text
               
Low:           #EA580C (orange-600)  - Background
               #FFFFFF (white)       - Text
```

### Semantic Colors
```
Success:       #10B981 (emerald-500)
Warning:       #F59E0B (amber-500)
Danger:        #EF4444 (red-500)
Info:          #3B82F6 (blue-500)
```

---

## Typography

### Badge Text
- **Font Family**: Inter, system-ui, sans-serif
- **Font Size**: 0.875rem (14px)
- **Font Weight**: 600 (Semi-bold)
- **Text Transform**: Uppercase
- **Letter Spacing**: 0.025em

### Requirement Text
- **Category**: 0.875rem, 600 weight
- **Details**: 0.875rem, 400 weight
- **Suggestion**: 0.875rem, 400 weight, italic

---

## Spacing & Layout

### Card Padding
- **Desktop**: 24px
- **Mobile**: 16px

### Section Spacing
- **Between sections**: 20px
- **Within sections**: 12px

### Badge Spacing
- **Internal padding**: 6px 12px
- **Icon gap**: 6px
- **Margin from title**: 12px

---

## Responsive Behavior

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: ≥ 1024px

### Mobile Adaptations
1. Stack badge below country name
2. Collapse missing requirements by default
3. Show "Tap to expand" for details
4. Full-width buttons

### Tablet Adaptations
1. Badge inline with country name
2. Two-column layout for alternatives
3. Condensed spacing

---

## Accessibility Checklist

- [ ] Color contrast ≥ 4.5:1 for all text
- [ ] Icons have text alternatives
- [ ] Badges have ARIA labels
- [ ] Keyboard navigation works
- [ ] Screen reader announces status changes
- [ ] Focus indicators visible
- [ ] Touch targets ≥ 44x44px (mobile)
- [ ] No information conveyed by color alone

---

## Animation & Transitions

### Badge Appearance
```css
.eligibility-badge {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Missing Requirements Expand/Collapse
```css
.missing-requirements__list {
  transition: max-height 0.3s ease-in-out;
}
```

---

## Implementation Notes

### Reusable Components
1. **Badge Component**: Already exists, extend with new variants
2. **Alert Component**: Use for missing requirements section
3. **Tooltip Component**: Use for help text
4. **Progress Bar**: Already exists, no changes needed

### New Components Needed
1. **RequirementItem**: Display individual requirement status
2. **EligibilityIndicator**: Wrapper for badge + tooltip

---

**Document Owner**: UX Designer  
**Created**: 2025-10-19  
**Status**: Ready for Frontend Implementation

