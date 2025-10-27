# EU Immigration Planning Application

**A local-first web application for US citizens to plan and determine their immigration viability to EU countries.**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Tests](https://img.shields.io/badge/tests-3206%2F3207-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)]()
[![React](https://img.shields.io/badge/React-19.1.1-blue)]()

---

## 🎯 Overview

This application helps US citizens evaluate their immigration options to 5 EU countries (Germany, Netherlands, France, Spain, Italy) across 27 different visa programs. All data is stored locally on the user's device with **zero server-side persistence**.

**Core Principle**: Complete privacy. Your data never leaves your device.

---

## ✨ Features

### ✅ Fully Implemented

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

- **Immigration Flowcharts** - Interactive process guides
  - Interactive Mermaid.js flowcharts
  - Step-by-step visa process guides
  - Document checklists
  - All 5 countries complete (25 programs)

- **Data Management** - Full control over your data
  - Export data (JSON, CSV, Text)
  - Import data with validation
  - Clear/delete functionality
  - Settings page

- **Code Quality** - Production-ready codebase
  - 3,207 comprehensive tests
  - Reusable component library
  - Centralized constants and utilities
  - Zero linting errors

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

```text
immigration-pipeline/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── forms/        # Form components
│   │   ├── results/      # Results display components
│   │   ├── layout/       # Layout components
│   │   └── ...           # LoadingSpinner, ErrorState, Toast, etc.
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   ├── Results.tsx
│   │   ├── ResultDetail.tsx
│   │   ├── Flowchart.tsx
│   │   └── Settings.tsx
│   ├── services/         # Business logic
│   │   ├── storage/      # IndexedDB layer
│   │   ├── viability/    # Scoring algorithm
│   │   └── export/       # Export/import services
│   ├── constants/        # Centralized constants
│   ├── contexts/         # React contexts
│   ├── types/            # TypeScript definitions
│   ├── data/             # Static data (flowcharts, rules)
│   └── utils/            # Utility functions
├── docs/                 # Documentation
│   ├── architecture/     # Architecture docs
│   ├── guides/           # Developer guides
│   └── archive/          # Historical documentation
├── tests/                # Unit tests
└── e2e/                  # E2E tests
```

---

## 📚 Documentation

### Essential Reading
- **[docs/START_HERE.md](./docs/START_HERE.md)** - 🚀 Start here! Quick navigation guide
- **[docs/PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md)** - Comprehensive project overview
- **[docs/guides/SCORING_SYSTEM_GUIDE.md](./docs/guides/SCORING_SYSTEM_GUIDE.md)** - ⭐ Complete scoring system documentation

### Architecture & Design
- **[docs/architecture/ARCHITECTURE.md](./docs/architecture/ARCHITECTURE.md)** - Technical architecture
- **[docs/architecture/data-schema.md](./docs/architecture/data-schema.md)** - Data model and schema
- **[docs/architecture/UI_WIREFRAMES.md](./docs/architecture/UI_WIREFRAMES.md)** - UI specifications

### Developer Guides
- **[docs/guides/QUICK_REFERENCE.md](./docs/guides/QUICK_REFERENCE.md)** - Developer quick reference
- **[docs/guides/FORMS_QUICK_REFERENCE.md](./docs/guides/FORMS_QUICK_REFERENCE.md)** - Forms reference

### Project Management
- **[docs/PROJECT_COORDINATION.md](./docs/PROJECT_COORDINATION.md)** - Team coordination
- **[docs/decisions.md](./docs/decisions.md)** - Project decisions log

**See [docs/INDEX.md](./docs/INDEX.md) for complete documentation index.**

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

**Current Test Status**: 3,206/3,207 tests passing ✅

---

## 🔒 Privacy & Security

- **Local-First**: All data stored in IndexedDB
- **No Server**: Zero server-side persistence
- **No Tracking**: No analytics or cookies
- **User Control**: Export/delete all data anytime
- **No Network**: User data never transmitted

---

## 📊 Current Status

**Development**: ✅ Complete
**Build**: ✅ Passing
**Tests**: ✅ 3,206/3,207 Passing
**Linting**: ✅ 0 Errors
**Production Ready**: ✅ Yes

---

## 🤝 Contributing

This is a private project. For team members:

1. Review [docs/PROJECT_COORDINATION.md](./docs/PROJECT_COORDINATION.md)
2. Check your role-specific documentation in [docs/](./docs/)
3. Follow the established patterns and conventions
4. Ensure all tests pass before committing

---

## 📄 License

Private project - All rights reserved

---

## 🙏 Acknowledgments

Built with React, TypeScript, and Vite. Flowcharts powered by Mermaid.js.
