# EU Immigration Planning Application

**A local-first web application for US citizens to plan and determine their immigration viability to EU countries.**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Tests](https://img.shields.io/badge/tests-186%2F186-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)]()
[![React](https://img.shields.io/badge/React-19.1.1-blue)]()

---

## 🎯 Overview

This application helps US citizens evaluate their immigration options to 5 EU countries (Germany, Netherlands, France, Spain, Italy) across 27 different visa programs. All data is stored locally on the user's device with **zero server-side persistence**.

**Core Principle**: Complete privacy. Your data never leaves your device.

---

## ✨ Features

### ✅ Implemented (Phase 1-6 Complete)

- **Multi-Step Profile Forms** - Comprehensive data collection
  - Personal information
  - Financial details
  - Education and career history
  - Language proficiency
  - Family information
  - Immigration goals

- **Viability Scoring Algorithm** - Intelligent path-aware scoring
  - Evaluates 27 visa programs across 5 countries
  - Path-specific scoring (Work Visa, PR, Citizenship)
  - Risk factor analysis
  - Contingency planning
  - Timeline estimation

- **Results Dashboard** - Clear, actionable insights
  - Country rankings with detailed breakdowns
  - Recommended visa programs
  - Risk factors and mitigation strategies
  - Export functionality

- **Immigration Flowcharts** (Phase 7 - 75% Complete)
  - Interactive Mermaid.js flowcharts
  - Step-by-step visa process guides
  - Document checklists
  - Germany flowcharts complete (5 programs)

- **Data Management** (Phase 7 - 100% Complete)
  - Export data (JSON, CSV, Text)
  - Import data with validation
  - Clear/delete functionality
  - Settings page

### 🔄 In Progress

- Flowcharts for Netherlands, France, Spain, Italy (20 programs)
- Comprehensive testing for Phase 7 features

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd immigration-pipeline

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run unit tests
npm run test:e2e     # Run E2E tests
npm run lint         # Run ESLint
```

---

## 🏗️ Tech Stack

- **Frontend**: React 19.1.1 + TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM
- **Storage**: IndexedDB (local-first)
- **Testing**: Vitest + Playwright
- **Flowcharts**: Mermaid.js 11.4.1

---

## 📁 Project Structure

```
immigration-pipeline/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Buttons, cards, inputs
│   │   ├── forms/        # Form components
│   │   └── flowchart/    # Flowchart viewer
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── Results.tsx
│   │   ├── Flowchart.tsx
│   │   └── Settings.tsx
│   ├── services/         # Business logic
│   │   ├── storage/      # IndexedDB layer
│   │   ├── viability/    # Scoring algorithm
│   │   └── export/       # Export/import services
│   ├── types/            # TypeScript definitions
│   ├── data/             # Static data (flowcharts, rules)
│   └── utils/            # Utility functions
├── tests/                # Unit tests
└── e2e/                  # E2E tests
```

---

## 📚 Documentation

- **[START_HERE.md](./START_HERE.md)** - Quick navigation guide
- **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Comprehensive project overview
- **[SCORING_SYSTEM_GUIDE.md](./SCORING_SYSTEM_GUIDE.md)** - ⭐ Complete scoring system documentation
- **[PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md)** - Team coordination and phases
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture
- **[PHASE_7_PROGRESS.md](./PHASE_7_PROGRESS.md)** - Current phase status

---

## 🧪 Testing

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

**Current Test Status**: 186/186 tests passing ✅

---

## 🔒 Privacy & Security

- **Local-First**: All data stored in IndexedDB
- **No Server**: Zero server-side persistence
- **No Tracking**: No analytics or cookies
- **User Control**: Export/delete all data anytime
- **No Network**: User data never transmitted

---

## 📊 Current Status

**Phase 7**: 75% Complete
**Build**: ✅ Passing
**Tests**: ✅ 186/186 Passing
**Linting**: ✅ 0 Errors

---

## 🤝 Contributing

This is a private project. For team members:

1. Review [PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md)
2. Check your role-specific documentation
3. Follow the established patterns and conventions
4. Ensure all tests pass before committing

---

## 📄 License

Private project - All rights reserved

---

## 🙏 Acknowledgments

Built with React, TypeScript, and Vite. Flowcharts powered by Mermaid.js.
