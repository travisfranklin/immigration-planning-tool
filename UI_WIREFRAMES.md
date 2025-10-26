# EU Immigration Planning Application - UI Wireframes

## Design Principles
- **Clean & Modern**: Minimalist design with clear information hierarchy
- **Accessible**: WCAG 2.1 AA compliance, keyboard navigation support
- **Responsive**: Mobile-first design, works on all screen sizes
- **Local-First**: Clear indication that data is stored locally
- **Progressive Disclosure**: Show essential info first, details on demand

## Navigation Architecture

### Global Navigation Header
All pages now include a persistent navigation header:

```
┌─────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results    │
│                                Flowcharts  Settings      │
└─────────────────────────────────────────────────────────┘
```

**Features**:
- Always visible across all pages
- Active page highlighted in blue
- Mobile: Hamburger menu with slide-out drawer
- Quick access to all major sections

## Page Layouts

### 1. Welcome/Onboarding Page
```
┌─────────────────────────────────────────┐
│  EU Immigration Planner                 │
├─────────────────────────────────────────┤
│                                         │
│  Welcome to Your Immigration Journey    │
│                                         │
│  This app helps you determine your      │
│  viability for immigration to EU        │
│  countries. All data stays on your      │
│  device - no cloud storage.             │
│                                         │
│  [Start New Profile] [Import Profile]   │
│                                         │
└─────────────────────────────────────────┘
```

### 2. Profile Creation - Accordion Form (UPDATED - Phase 2)
```
┌──────────────────────────────────────────────────────────┐
│  EU Immigration Planner                                  │
├──────────────────────────────────────────────────────────┤
│ Your Profile                    [Jump to Incomplete]     │
│ 47% complete • 4 sections remaining        [Saving...]  │
│ ████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ ✓ Personal Information                            ▼     │
│   Basic details about you                               │
│   ┌────────────────────────────────────────────┐        │
│   │ First Name: [John____________]             │        │
│   │ Last Name:  [Doe_____________]             │        │
│   │ Date of Birth: [01/01/1990___]             │        │
│   │ Citizenship: [United States ▼]             │        │
│   └────────────────────────────────────────────┘        │
│                                                          │
│ ⚠ Financial Information                           ▶     │
│   Income and savings                                    │
│                                                          │
│ ○ Education                                       ▶     │
│   Academic background                                   │
│                                                          │
│ ○ Career                                          ▶     │
│   Work experience and occupation                        │
│                                                          │
│ ○ Family                                          ▶     │
│   Marital status and dependents                         │
│                                                          │
│ ○ Language                                        ▶     │
│   Language proficiency                                  │
│                                                          │
│ ○ Country Selection                               ▶     │
│   Target countries and preferences                      │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ ℹ All changes are saved automatically                   │
└──────────────────────────────────────────────────────────┘
```

**Features**:
- **Single-Page Accordion**: All 7 sections accessible on one page
- **Status Indicators**:
  - ✓ Complete (green checkmark)
  - ⚠ Incomplete (amber warning)
  - ○ Not Started (gray circle)
- **Sticky Header**: Progress bar and "Jump to Incomplete" button always visible
- **Direct Access**: Click any section to expand/collapse
- **Multiple Sections Open**: Can expand multiple sections simultaneously
- **Auto-Save**: 2-second debounce with save status indicator
- **Smooth Scrolling**: "Jump to Incomplete" scrolls to first incomplete section
- **Mobile Responsive**: Adapts to small screens with touch-friendly targets

**Replaced**: Multi-step form (7 sequential steps) → Accordion form (direct access)

### 3. Country Selection
```
┌─────────────────────────────────────────┐
│  EU Immigration Planner                 │
├─────────────────────────────────────────┤
│ Step 5/6: Target Countries              │
│ ███████████████░░░░░░░░░░░░░░░░░░░░░░░ │
├─────────────────────────────────────────┤
│                                         │
│ Select countries you're interested in:  │
│                                         │
│ ☑ Germany (DE)                          │
│ ☑ Netherlands (NL)                      │
│ ☐ France (FR)                           │
│ ☑ Spain (ES)                            │
│ ☐ Italy (IT)                            │
│ ☐ Portugal (PT)                         │
│                                         │
│ [Previous] [Next]                       │
│                                         │
└─────────────────────────────────────────┘
```

### 4. Country Ranking Dashboard (UPDATED - Tiered Display)
```
┌──────────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results         │
│                                Flowcharts  Settings           │
├──────────────────────────────────────────────────────────────┤
│ Immigration Viability Results                                │
│ Countries ranked by your viability score                     │
│                                                              │
│ [🔄 Recalculate] [📥 Export] [← Back to Profile]            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 🏆 TOP MATCHES (5 countries)                                │
│                                                              │
│ ┌────────────────────────┐  ┌────────────────────────┐      │
│ │ #1 🇩🇪 Germany          │  │ #2 🇳🇱 Netherlands      │      │
│ │ ✓ Excellent   82/100   │  │ ✓ Good         78/100  │      │
│ │                        │  │                        │      │
│ │ EU Blue Card           │  │ Highly Skilled Migrant │      │
│ │                        │  │                        │      │
│ │ Career: 90  Financial: │  │ Career: 85  Financial: │      │
│ │ 85  Education: 80      │  │ 80  Education: 75      │      │
│ │ Language: 75  Family:  │  │ Language: 70  Family:  │      │
│ │ 70                     │  │ 75                     │      │
│ │                        │  │                        │      │
│ │ Risk: Medium (2 risks) │  │ Risk: Low (1 risk)     │      │
│ │ Timeline: 6-12 months  │  │ Timeline: 8-14 months  │      │
│ │                        │  │                        │      │
│ │ [View Full Details]    │  │ [View Full Details]    │      │
│ │ [📋 View Flowchart]    │  │ [📋 View Flowchart]    │      │
│ └────────────────────────┘  └────────────────────────┘      │
│                                                              │
│ ... (3 more full cards for ranks 3-5)                       │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ 📊 ALL OTHER COUNTRIES (22 countries)                       │
│ Click any country to expand details                         │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ #6  🇦🇹 Austria              ✓ Moderate  62/100      ▶  ││
│ │     Red-White-Red Card                                   ││
│ └──────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ #7  🇧🇪 Belgium              ✓ Moderate  58/100      ▶  ││
│ │     Highly Skilled Worker Permit                         ││
│ └──────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ #8  🇸🇪 Sweden              ✓ Moderate  55/100      ▼  ││
│ │     Work Permit for Skilled Workers                      ││
│ │ ┌────────────────────────────────────────────────────────┐│
│ │ │ Component Scores:                                      ││
│ │ │ Career: 70  Financial: 65  Education: 60               ││
│ │ │ Language: 50  Family: 55                               ││
│ │ │                                                        ││
│ │ │ Risk: Medium (3 risks)  Timeline: 10-16 months         ││
│ │ │                                                        ││
│ │ │ [View Full Details]  [📋 View Flowchart]              ││
│ │ └────────────────────────────────────────────────────────┘│
│ └──────────────────────────────────────────────────────────┘│
│                                                              │
│ ... (14 more compact rows for ranks 9-27)                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**NEW FEATURES** (October 2025):
- **Tiered Display**: Top 5 countries shown as full cards, remaining 22 as compact rows
- **Expandable Rows**: Click any compact row to expand and see full details
- **Progressive Disclosure**: Reduces scrolling by ~40% while maintaining access to all data
- **Section Headers**: Clear visual separation between top matches and other countries
- **Accordion Behavior**: Only one compact row expanded at a time
- **Keyboard Accessible**: Tab, Enter, Space, Escape navigation
- **Mobile Responsive**: Adapts to small screens with touch-friendly targets

**PREVIOUS FEATURES**:
- Global navigation header
- "View Flowchart" button on each country card
- Clicking flowchart button navigates to `/flowchart?country=DE&program=de_eu_blue_card`
- Context preserved via URL parameters

### 5. Country Detail Page
```
┌─────────────────────────────────────────┐
│  EU Immigration Planner                 │
├─────────────────────────────────────────┤
│ Germany - Detailed Analysis             │
├─────────────────────────────────────────┤
│                                         │
│ Overall Viability: 82/100 ████████░░░░ │
│                                         │
│ Component Scores:                       │
│ • Career Score: 90/100 ██████████░░░░  │
│ • Financial Score: 85/100 █████████░░░ │
│ • Education Score: 80/100 ████████░░░░ │
│ • Language Score: 75/100 ███████░░░░░░ │
│ • Family Score: 70/100 ███████░░░░░░░░ │
│                                         │
│ Risk Factors:                           │
│ ⚠️  HIGH: Language proficiency below    │
│     requirement (B1 required, you have  │
│     A2)                                 │
│ ⚠️  MEDIUM: Savings below recommended   │
│     amount                              │
│                                         │
│ [View Flowchart] [Back to Rankings]     │
│                                         │
└─────────────────────────────────────────┘
```

### 6. Immigration Process Flowchart (UPDATED - Context-Aware)
```
┌─────────────────────────────────────────────────────────┐
│ 🇪🇺 EU Immigration Planner    Home  Profile  Results    │
│                                Flowcharts  Settings      │
├─────────────────────────────────────────────────────────┤
│ Home > Results > Flowchart                              │
│                                                         │
│ Immigration Process Flowcharts                          │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │ 💡 Recommended for you based on your profile:       ││
│ │    Germany - EU Blue Card (Score: 82/100)           ││
│ │                                                     ││
│ │ Your top countries:                                 ││
│ │ [#1 Germany] [#2 Netherlands] [#3 Spain]           ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ Country: [Germany ▼]    Program: [EU Blue Card ▼]      │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐│
│ │                                                     ││
│ │        ┌─────────────────┐                          ││
│ │        │ Job Search      │                          ││
│ │        │ (3-6 months)    │                          ││
│ │        └────────┬────────┘                          ││
│ │                 │                                   ││
│ │        ┌────────▼────────┐                          ││
│ │        │ Job Offer       │                          ││
│ │        │ (Secured)       │                          ││
│ │        └────────┬────────┘                          ││
│ │                 │                                   ││
│ │        [Mermaid Flowchart Visualization]            ││
│ │                                                     ││
│ └─────────────────────────────────────────────────────┘│
│                                                         │
│ [← Back to Results]              [Next: Netherlands →] │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**NEW FEATURES**:
- Global navigation header
- Breadcrumb navigation (Home > Results > Flowchart)

---

## Form Field Types (UPDATED - Phase 1)

### Standard Input Fields
- **Text Input**: First Name, Last Name, Current Occupation
- **Date Input**: Date of Birth
- **Number Input**: Annual Income, Savings Amount, Years of Experience, Timeline (months)

### Combobox Fields (Searchable Dropdowns)
**NEW in Phase 1**: Replaced text inputs with searchable comboboxes for structured data

#### Job Offer Country
```
┌────────────────────────────────────────┐
│ Job Offer Country                      │
│ ┌────────────────────────────────────┐ │
│ │ Type to search countries...      ▼│ │
│ └────────────────────────────────────┘ │
│ ┌────────────────────────────────────┐ │
│ │ Austria                            │ │
│ │ Belgium                            │ │
│ │ Germany                            │ │
│ │ Netherlands                        │ │
│ │ ... (27 EU countries)              │ │
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

**Features**:
- Searchable dropdown (type to filter)
- 27 EU countries
- Prevents typos and data quality issues
- Keyboard accessible (arrow keys, Enter to select)

#### Occupation Code (ISCO-08)
```
┌────────────────────────────────────────┐
│ Occupation Code (ISCO-08)              │
│ ┌────────────────────────────────────┐ │
│ │ Type to search...                ▼│ │
│ └────────────────────────────────────┘ │
│ ┌────────────────────────────────────┐ │
│ │ Information Technology             │ │
│ │   2511 - Systems Analysts          │ │
│ │   2512 - Software Developers       │ │
│ │   2513 - Web Developers            │ │
│ │ Engineering                        │ │
│ │   2141 - Industrial Engineers      │ │
│ │   2142 - Civil Engineers           │ │
│ │ ... (200+ occupation codes)        │ │
│ └────────────────────────────────────┘ │
└────────────────────────────────────────┘
```

**Features**:
- Searchable by code OR occupation title
- 200+ ISCO-08 occupation codes
- Grouped by category (IT, Engineering, Healthcare, etc.)
- Auto-suggests occupation title when code is selected
- Prevents invalid occupation codes
- Keyboard accessible

**Smart Auto-Suggestion**:
```
User selects: "2512 - Software Developers"
  ↓
Occupation Code field: "2512"
  ↓
Current Occupation field: "Software Developers" (auto-filled)
```

### Select Dropdowns
- **Citizenship**: Country dropdown
- **Education Level**: Bachelor, Master, PhD, etc.
- **Employment Status**: Employed, Self-employed, Unemployed, etc.
- **Marital Status**: Single, Married, etc.
- **Immigration Path**: Work visa, Study visa, etc.

### Multi-Select
- **Target Countries**: Checkbox list of EU countries
- **Languages**: Add multiple languages with proficiency levels

---

## Component Patterns

### Accordion Pattern (NEW - Phase 2)
Used in: Profile page

**Behavior**:
- Click section header to expand/collapse
- Multiple sections can be open simultaneously
- Chevron icon rotates to indicate state (▶ collapsed, ▼ expanded)
- Smooth scroll to section when using "Jump to Incomplete"
- Keyboard accessible (Tab to navigate, Enter/Space to toggle)

**Status Indicators**:
- ✓ **Complete** (green): All required fields filled, no validation errors
- ⚠ **Incomplete** (amber): Some fields filled, but has errors or missing required fields
- ○ **Not Started** (gray): No fields filled yet

**Accessibility**:
- ARIA labels on status icons
- `aria-expanded` on section buttons
- `role="progressbar"` on progress bar
- `aria-live="polite"` on save status
- Custom focus styles (blue ring)
- Screen reader friendly

---
- Recommendation banner showing user's score for current country
- Quick navigation to top 3 countries
- URL parameters pre-select country and program
- Next/Previous country navigation based on user's rankings
- Back to Results button

## Color Scheme
- **Primary**: #2563EB (Blue) - Main actions, links
- **Success**: #10B981 (Green) - High viability scores
- **Warning**: #F59E0B (Amber) - Medium risk factors
- **Danger**: #EF4444 (Red) - High risk factors
- **Neutral**: #6B7280 (Gray) - Secondary text, borders
- **Background**: #F9FAFB (Light Gray) - Page background

## Typography
- **Headings**: Inter, Bold, 24-32px
- **Body**: Inter, Regular, 14-16px
- **Labels**: Inter, Medium, 12-14px

## Component Specifications

### CountryRankingCard (Full Card)
Used for: Top 5 countries on Results page

**Features**:
- Display country flag, name, overall score
- Show component scores as mini progress bars
- Include "View Details" and "View Flowchart" buttons
- Responsive: Stack on mobile, side-by-side on desktop
- Height: ~250-300px per card

### CompactCountryRow (NEW - October 2025)
Used for: Countries ranked 6-27 on Results page

**Collapsed State** (60px height):
- Rank badge (#6, #7, etc.)
- Country flag and name
- Overall score (e.g., 62/100)
- Recommended program name
- Viability badge (✓ Moderate, ⚠️ Not Eligible, etc.)
- Chevron icon (▶ collapsed, ▼ expanded)

**Expanded State** (180px height):
- All collapsed state content
- Component scores (Career, Financial, Education, Language, Family)
- Risk level and count (e.g., "Medium (3 risks)")
- Timeline (e.g., "8 months")
- Alternative programs count (e.g., "+1 alternative program available")
- Missing requirements (for ineligible countries)
- CTAs: "View Full Details" and "View Flowchart" buttons

**Behavior**:
- Click anywhere on row to expand/collapse
- Accordion behavior: Only one row expanded at a time
- Smooth animation (0.3s fadeIn)
- Keyboard accessible:
  - Tab to navigate between rows
  - Enter or Space to toggle expand/collapse
  - Escape to collapse when expanded

**Accessibility**:
- `aria-expanded` attribute (true/false)
- `aria-controls` points to expanded content ID
- `aria-label` describes rank, country, score, and state
- Focus ring on keyboard navigation
- Screen reader announces all state changes

**Space Savings**:
- Collapsed: 60px vs 250px (76% reduction)
- 22 compact rows: ~1,320px vs ~5,500px (76% reduction)
- Overall page: ~2,045px vs ~3,375px (40% reduction)

### Risk Factor Badge
- Color-coded by severity (Red/Amber/Green)
- Icon + description
- Expandable for more details

### Progress Indicator
- Multi-step form progress bar
- Shows current step and total steps
- Visual feedback on completion

