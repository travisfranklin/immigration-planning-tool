# 🎨 Navigation Wireframes

## Visual Mockups for Enhanced Navigation

---

## 1. Global Navigation Header (Desktop)

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results  Flowcharts  ⚙️ │
│                                ▔▔▔▔                                  │
└─────────────────────────────────────────────────────────────────────┘
                                 └─ Active page underline
```

**Specifications**:
- Logo/title: Left-aligned, 20px font, bold
- Navigation links: Center, 16px font, 16px spacing
- Active page: Blue underline (2px), blue text
- Settings icon: Right-aligned, 24px
- Background: White (#FFFFFF)
- Border-bottom: 1px solid #E5E7EB
- Height: 64px

---

## 2. Global Navigation Header (Mobile)

```
┌─────────────────────────────────────┐
│ ☰  EU Immigration Planner        ⚙️ │
└─────────────────────────────────────┘

When hamburger clicked:
┌─────────────────────────────────────┐
│ ✕  Menu                             │
├─────────────────────────────────────┤
│                                     │
│  🏠 Home                            │
│  👤 Profile                         │
│  📊 Results                         │
│  📋 Flowcharts                      │
│  ⚙️  Settings                       │
│                                     │
└─────────────────────────────────────┘
```

**Specifications**:
- Hamburger icon: Left, 24px
- Slide-out drawer: Full height, 280px width
- Overlay: Semi-transparent black (rgba(0,0,0,0.5))
- Animation: Slide from left, 200ms ease-out
- Close on overlay click or ✕ button

---

## 3. Results Page with Flowchart Integration

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results  Flowcharts  ⚙️ │
│                                            ▔▔▔▔▔▔▔                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Your Viability Rankings                                           │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ 1. 🇩🇪 Germany                              Score: 82/100   │  │
│  │    ├─ Career: 90  ├─ Financial: 85                          │  │
│  │    ├─ Education: 80  ├─ Language: 75                        │  │
│  │    └─ Family: 70                                             │  │
│  │                                                              │  │
│  │    Recommended: EU Blue Card                                │  │
│  │    Timeline: 3-4 months                                     │  │
│  │                                                              │  │
│  │    [View Full Details]  [📋 View Flowchart]  ← NEW BUTTON   │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ 2. 🇳🇱 Netherlands                           Score: 78/100   │  │
│  │    ├─ Career: 85  ├─ Financial: 80                          │  │
│  │    ├─ Education: 75  ├─ Language: 70                        │  │
│  │    └─ Family: 75                                             │  │
│  │                                                              │  │
│  │    Recommended: Highly Skilled Migrant                      │  │
│  │    Timeline: 2-3 months                                     │  │
│  │                                                              │  │
│  │    [View Full Details]  [📋 View Flowchart]                 │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**New Features**:
- "View Flowchart" button on each country card
- Icon: 📋 (flowchart symbol)
- Style: Secondary button (white bg, blue border)
- Placement: Next to "View Full Details"

---

## 4. Flowchart Page with Context (From Results)

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results  Flowcharts  ⚙️ │
│                                                      ▔▔▔▔▔▔▔▔▔▔    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Home > Results > Flowchart                                        │
│                                                                     │
│  Immigration Process Flowcharts                                    │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ 💡 Recommended for you based on your profile:               │  │
│  │    Germany - EU Blue Card (Score: 82/100)                   │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Country: [Germany ▼]    Program: [EU Blue Card ▼]          │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │              [Mermaid Flowchart Visualization]              │  │
│  │                                                              │  │
│  │  Start → Job Offer → Salary Check → Documents → Submit     │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  [← Back to Results]                    [View Netherlands →]      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**New Features**:
- Breadcrumb navigation (Home > Results > Flowchart)
- Recommendation banner (blue background)
- Pre-selected country and program from URL params
- "Back to Results" button (left)
- "Next Country" navigation (right)

---

## 5. Flowchart Page (Standalone Access)

```
┌─────────────────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results  Flowcharts  ⚙️ │
│                                                      ▔▔▔▔▔▔▔▔▔▔    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Home > Flowcharts                                                 │
│                                                                     │
│  Immigration Process Flowcharts                                    │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │ Country: [Germany ▼]    Program: [EU Blue Card ▼]          │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │              [Mermaid Flowchart Visualization]              │  │
│  │                                                              │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  [← Back to Home]                                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Differences from Context-Aware**:
- No recommendation banner (user hasn't completed profile)
- Breadcrumb: Home > Flowcharts (not Results)
- Back button goes to Home (not Results)
- No "Next Country" navigation

---

## 6. Country Ranking Card - Detailed View

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. 🇩🇪 Germany                                  Score: 82/100   │
│    ✓ Excellent                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Component Scores:                                               │
│ Career: 90  Financial: 85  Education: 80  Language: 75         │
│ Family: 70                                                      │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ 💼 Recommended Program                                      ││
│ │ EU Blue Card - Highly Skilled Worker                        ││
│ │ Match reason: High salary, relevant degree                  ││
│ └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│ ⚠️ Overall Risk: Low                                           │
│ 📅 Estimated Timeline: 3-4 months                              │
│ 📋 +2 alternative programs available                           │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐│
│ │ [View Full Details]        [📋 View Flowchart]             ││
│ └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

**Button Specifications**:
- **View Full Details**: Primary button (blue bg, white text)
- **View Flowchart**: Secondary button (white bg, blue border, blue text)
- Both buttons: Same height (40px), rounded corners (8px)
- Icon on Flowchart button: 📋 (left side, 16px)
- Hover state: Flowchart button → light blue background

---

## 7. Mobile Navigation Flow

```
Step 1: Results Page (Mobile)
┌─────────────────────────────────┐
│ ☰  EU Immigration Planner    ⚙️ │
├─────────────────────────────────┤
│ Your Viability Rankings         │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 1. 🇩🇪 Germany              │ │
│ │    Score: 82/100            │ │
│ │                             │ │
│ │ [View Details]              │ │
│ │ [📋 View Flowchart]         │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘

Step 2: Tap "View Flowchart"
         ↓

Step 3: Flowchart Page (Mobile)
┌─────────────────────────────────┐
│ ☰  EU Immigration Planner    ⚙️ │
├─────────────────────────────────┤
│ Home > Results > Flowchart      │
│                                 │
│ 💡 Recommended:                 │
│ Germany - EU Blue Card          │
│                                 │
│ Country: [Germany ▼]            │
│ Program: [EU Blue Card ▼]       │
│                                 │
│ [Flowchart - Scrollable]        │
│                                 │
│ [← Back]  [Next Country →]     │
└─────────────────────────────────┘
```

---

## 8. Breadcrumb Component

```
Desktop:
Home > Results > Flowchart
▔▔▔▔   ▔▔▔▔▔▔▔   ▔▔▔▔▔▔▔▔▔
└─ Clickable links with underline on hover

Mobile:
← Results
  └─ Back button with previous page name
```

**Specifications**:
- Font size: 14px
- Color: Gray-600 (inactive), Blue-600 (active)
- Separator: `>` (gray-400)
- Hover: Underline, blue-700
- Mobile: Show only back button with previous page

---

## 9. Quick Actions Section (Future Enhancement)

```
┌─────────────────────────────────────────────────────────────────┐
│ Your Viability Rankings                                         │
├─────────────────────────────────────────────────────────────────┤
│ 📊 Quick Actions:                                               │
│ [Compare Top 3]  [Export PDF]  [Edit Profile]  [View All]      │
├─────────────────────────────────────────────────────────────────┤
│ 1. 🇩🇪 Germany          Score: 82/100                           │
│    ...                                                           │
└─────────────────────────────────────────────────────────────────┘
```

**Features** (Future):
- Compare Top 3: Side-by-side flowchart comparison
- Export PDF: Download results as PDF
- Edit Profile: Quick link back to profile
- View All: Expand to show all countries

---

## 10. URL Structure Examples

```
Standard Flowchart Access:
/flowchart
→ Shows: Germany, first available program

Context-Aware from Results:
/flowchart?country=DE&program=de_eu_blue_card
→ Shows: Germany, EU Blue Card pre-selected

Invalid Parameters:
/flowchart?country=INVALID&program=INVALID
→ Fallback: Germany, first available program
→ Show warning: "Country or program not found, showing default"

Deep Link Sharing:
/flowchart?country=NL&program=nl_highly_skilled
→ Anyone can access this URL
→ Pre-selects Netherlands, Highly Skilled Migrant
```

---

## 📐 Design Tokens

### Colors
```
Primary Blue:    #2563EB (blue-600)
Primary Hover:   #1D4ED8 (blue-700)
Secondary:       #FFFFFF (white)
Border:          #2563EB (blue-600)
Text:            #1F2937 (gray-900)
Text Secondary:  #6B7280 (gray-600)
Background:      #F9FAFB (gray-50)
```

### Spacing
```
Header Height:   64px (desktop), 56px (mobile)
Button Height:   40px
Button Padding:  12px 24px
Card Padding:    24px
Gap:             16px
```

### Typography
```
Page Title:      32px, bold
Section Title:   24px, semibold
Body:            16px, regular
Small:           14px, regular
```

### Shadows
```
Header:          0 1px 3px rgba(0,0,0,0.1)
Card:            0 1px 3px rgba(0,0,0,0.1)
Card Hover:      0 4px 6px rgba(0,0,0,0.1)
```

---

**UX Designer** 🎨
**Date**: 2025-10-21
**Status**: ✅ **READY FOR DEVELOPMENT**

