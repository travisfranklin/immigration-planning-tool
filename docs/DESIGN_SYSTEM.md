# Design System Documentation

## Overview

The EU Immigration Planning Tool design system embodies **German functionalism** (Dieter Rams, Bauhaus, Ulm School of Design) and **Scandinavian minimalism** with a modern, bold, data-driven aesthetic.

### Design Principles

1. **"Weniger, aber besser"** (Less, but better) - Dieter Rams
2. **Form follows function** - Every element serves a purpose
3. **Bold, not timid** - Confident colors and typography
4. **High contrast** - WCAG AAA accessibility (21:1 for black on white)
5. **Sharp precision** - No rounded corners or decorative effects
6. **Data-driven** - Information clarity through custom visualizations
7. **Honest design** - No fake depth, shadows, or skeuomorphism

---

## Color Palette

### Primary Colors

Our color palette is **bold, modern, and vibrant** - moving away from generic blues and greens to create a distinctive, memorable brand.

#### Electric Indigo (Primary)
```css
--color-primary: #5731F5
--color-primary-light: #7859F7
--color-primary-dark: #3E1FD1
```
**Usage**: Primary actions, high scores, important milestones (visas, permits)
**Character**: Bold, modern, energetic, confident

#### Aquamarine (Success)
```css
--color-success: #75E3B3
--color-success-light: #9EECC9
--color-success-dark: #4FD69A
```
**Usage**: Success states, positive feedback, start/completion nodes
**Character**: Fresh, positive, calming, optimistic

#### Orange Peel (Warning)
```css
--color-warning: #FF9B00
--color-warning-light: #FFB133
--color-warning-dark: #E68A00
```
**Usage**: Warnings, caution states, alternative paths
**Character**: Vibrant, warm, alerting, attention-grabbing

#### Chartreuse (Accent)
```css
--color-accent: #E0FC2F
--color-accent-light: #E9FD66
--color-accent-dark: #C8E01A
```
**Usage**: Accents, highlights, active states, decision points
**Character**: High-energy, eye-catching, dynamic, bold

#### Red-Orange (Danger)
```css
--color-danger: #FF4D00
--color-danger-light: #FF7033
--color-danger-dark: #CC3D00
```
**Usage**: Errors, negative states, end/denial nodes
**Character**: Clear, urgent, unambiguous, bold

### Neutral Colors

#### Smoky Black
```css
--color-black: #0F0D03
```
**Usage**: Text, borders, icons
**Character**: Modern, sophisticated (not pure black)

#### Snow
```css
--color-white: #FFFCFF
```
**Usage**: Backgrounds, button text, card fills
**Character**: Warm white (not pure white)

#### Grays
```css
--color-gray-900: #1A1814  /* Near black */
--color-gray-700: #424038  /* Dark gray */
--color-gray-500: #757369  /* Medium gray */
--color-gray-300: #BDBBB5  /* Light gray */
--color-gray-100: #E4E2F5  /* Lavender web - very light */
```
**Usage**: Secondary text, borders, disabled states, subtle backgrounds

### Background Colors

```css
--bg-primary: #FFFCFF     /* Snow - main background */
--bg-secondary: #F9F7FA   /* Subtle contrast */
--bg-accent: #E4E2F5      /* Lavender web - cards, panels */
```

### Color Usage Guidelines

1. **High Contrast**: Always ensure WCAG AAA compliance (21:1 for black on white)
2. **Functional Color**: Color should indicate meaning, not just decoration
3. **Limited Palette**: Use only what's necessary for clarity
4. **Bold Choices**: Prefer saturated colors over pastels
5. **Consistent Mapping**: Same color = same meaning across the app

---

## Typography

### Font Families

```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
--font-mono: 'JetBrains Mono', 'Courier New', monospace
```

**Inter**: Clean, modern, highly readable sans-serif for all UI text
**JetBrains Mono**: Monospace font for data, numbers, metrics

### Type Scale

#### Display (Hero Sections)
```css
font-size: 72px
line-height: 1.1
font-weight: 800 (extra bold)
```
**Usage**: Hero headlines, landing page titles
**Example**: "PLAN YOUR EU IMMIGRATION"

#### Headlines
```css
H1: 48px / 1.2 / 700 (bold)
H2: 36px / 1.3 / 700 (bold)
H3: 24px / 1.4 / 600 (semibold)
H4: 20px / 1.4 / 600 (semibold)
```
**Usage**: Page titles (H1), section titles (H2), card titles (H3)

#### Body Text
```css
Large:  18px / 1.6 / 500 (medium)
Base:   16px / 1.6 / 400 (regular)
Small:  14px / 1.5 / 400 (regular)
```
**Usage**: Content, descriptions, form labels

#### Data (Numbers & Metrics)
```css
Large:  64px / 1.0 / 700 (bold, monospace)
Base:   32px / 1.2 / 600 (semibold, monospace)
Small:  24px / 1.3 / 600 (semibold, monospace)
```
**Usage**: Viability scores, statistics, metrics
**Font**: JetBrains Mono for clarity

#### Labels (UI Elements)
```css
Base:   12px / 1.4 / 600 (semibold)
Small:  10px / 1.3 / 700 (bold)
```
**Usage**: Form labels, badges, tags, metadata

### Typography Guidelines

1. **Hierarchy through size & weight** - Not color
2. **Black text on white** - Maximum contrast (21:1)
3. **Generous line height** - 1.5-1.6 for body text
4. **Tight leading for headlines** - 1.1-1.3 for impact
5. **Uppercase for emphasis** - Buttons, labels, section headers
6. **Monospace for data** - Numbers, scores, metrics

---

## Spacing System

### 8px Base Unit

All spacing follows an 8px base unit for consistency and rhythm.

```css
--space-1:  8px
--space-2:  16px
--space-3:  24px
--space-4:  32px
--space-5:  40px
--space-6:  48px
--space-8:  64px
--space-10: 80px
--space-12: 96px
--space-16: 128px
--space-20: 160px
```

### Spacing Guidelines

1. **Generous margins** - Minimum 64px between major sections
2. **Breathing room** - 32px padding in cards/panels
3. **Tight grouping** - 8-16px between related elements
4. **Consistent rhythm** - Always use the 8px scale
5. **Asymmetric layouts** - Not everything needs to be centered

### Common Patterns

- **Section spacing**: 64px (space-8)
- **Card spacing**: 48px (space-6)
- **Element spacing**: 32px (space-4)
- **Inline spacing**: 16px (space-2)
- **Tight spacing**: 8px (space-1)

---

## Layout System

### Grid Structure

```css
--grid-columns: 12
--grid-gutter: 32px (desktop)
--grid-gutter-tablet: 24px
--grid-gutter-mobile: 16px
```

### Container Widths

```css
--container-sm: 640px   /* Forms, narrow content */
--container-md: 896px   /* Standard content */
--container-lg: 1280px  /* Wide content, dashboards */
--container-xl: 1536px  /* Full-width data viz */
```

### Breakpoints

```css
--breakpoint-sm: 640px
--breakpoint-md: 768px
--breakpoint-lg: 1024px
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

### Layout Guidelines

1. **12-column grid** - Flexible, responsive layouts
2. **Generous gutters** - 32px on desktop, scales down on mobile
3. **Asymmetric layouts** - Create visual interest
4. **Clear sections** - Use grid to organize content
5. **Responsive** - Mobile-first approach

---

## Borders & Strokes

### Border Widths

```css
--border-width-thin: 1px
--border-width-base: 2px
--border-width-thick: 4px
```

### Border Radius

```css
--border-radius: 0px  /* Sharp corners - no rounding */
```

**Principle**: German functionalism - no decorative rounding. All corners are sharp and precise.

### Border Guidelines

1. **Sharp corners** - Always 0px border-radius
2. **Functional weight** - 2px for standard, 4px for emphasis
3. **Black borders** - Use smoky black (#0F0D03)
4. **Stroke hierarchy** - Weight indicates importance
5. **No shadows** - Borders define edges, not shadows

---

## Shadows

```css
--shadow-none: none
```

**Principle**: No shadows. German functionalism dictates honest, flat design without fake depth.

---

## Component Patterns

### Buttons

**Structure**:
- Sharp corners (border-radius: 0)
- Generous padding (16px 32px)
- Uppercase, bold text (14px)
- 2px border for secondary
- No shadows

**Variants**:
- **Primary**: Electric indigo background, snow text
- **Secondary**: Snow background, smoky black border, smoky black text
- **Success**: Aquamarine background, smoky black text
- **Warning**: Orange peel background, smoky black text
- **Danger**: Red-orange background, snow text

**States**:
- **Hover**: Brighten or invert colors
- **Active**: 2px inset (pressed effect)
- **Disabled**: 50% opacity

### Cards

**Structure**:
- Snow background (#FFFCFF)
- 2px smoky black border
- Sharp corners (border-radius: 0)
- 32px padding
- No shadows

**Title**:
- 18px bold, uppercase
- 2px divider line below

### Forms

**Inputs/Selects**:
- Sharp corners
- 2px smoky black border
- 12px 16px padding
- Focus: 4px accent border

**Labels**:
- 12px uppercase, bold
- Smoky black color

### Data Visualization

**Score Display**:
- 64px monospace, bold
- Color-coded by range
- Generous spacing

**Progress Bars**:
- 8px height
- Solid color fills
- Sharp corners
- No gradients

**Metric Bars**:
- Inline layout (label, value, bar)
- Bold, geometric
- Color-coded

---

## Accessibility

### WCAG AAA Compliance

- **Text contrast**: 21:1 (black on white)
- **Large text**: 7:1 minimum
- **UI components**: 3:1 minimum
- **Focus indicators**: 4px accent border
- **Keyboard navigation**: Full support

### Guidelines

1. **High contrast** - Always use smoky black on snow
2. **Clear focus states** - 4px chartreuse border
3. **Semantic HTML** - Proper heading hierarchy
4. **Alt text** - All images and icons
5. **Keyboard accessible** - All interactive elements

---

## Usage Examples

### Page Title
```tsx
<h1 className="text-h1 mb-4">Immigration Viability Results</h1>
```

### Data Display
```tsx
<div className="text-data-lg text-primary">85</div>
```

### Button
```tsx
<button className="bg-primary text-white px-4 py-2 font-bold uppercase">
  Get Started
</button>
```

### Card
```tsx
<div className="bg-primary border-2 border-black p-4">
  <h3 className="text-h3 uppercase mb-2">Germany</h3>
  <div className="border-t-2 border-black pt-2">
    Content
  </div>
</div>
```

---

**Document Owner**: UX Designer
**Last Updated**: 2025-10-28
**Status**: ACTIVE

