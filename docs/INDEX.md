# Documentation Index

**Last Updated**: December 30, 2025
**Project Status**: Production Ready ✅  
**Tests**: 3,206/3,207 Passing ✅

---

## 🚀 Quick Start

**New to the project?** Start here:

1. **[START_HERE.md](./START_HERE.md)** - Navigation hub for all roles
2. **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - High-level project summary
3. **[guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md)** - Developer quick reference

---

## 📚 Core Documentation

### Essential Entry Points

| Document | Description | Audience |
|----------|-------------|----------|
| **[START_HERE.md](./START_HERE.md)** | Navigation hub with role-specific paths | Everyone |
| **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** | Comprehensive project overview | Everyone |
| **[PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md)** | Team structure and coordination | PM, Leads |
| **[decisions.md](./decisions.md)** | Project decisions log | Leads, Architects |
| **[EU_EXPANSION_PLAN.md](./EU_EXPANSION_PLAN.md)** | Future expansion plans | PM, Product |

---

## 🏗️ Architecture & Design

### System Architecture

| Document | Description | Audience |
|----------|-------------|----------|
| **[architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md)** | Complete system architecture | Engineers, Architects |
| **[architecture/data-schema.md](./architecture/data-schema.md)** | Data model and storage schema | Engineers, QA |
| **[architecture/UI_WIREFRAMES.md](./architecture/UI_WIREFRAMES.md)** | UI specifications and wireframes | Engineers, Designers |
| **[architecture/VISUAL_GUIDE.md](./architecture/VISUAL_GUIDE.md)** | Visual diagrams and flowcharts | Everyone |

### Key Architectural Concepts

- **Local-First**: All data stored in IndexedDB, zero server persistence
- **Three-Tier Architecture**: Presentation → Services → Storage
- **Path-Aware Scoring**: Intelligent visa program evaluation
- **Component-Based**: Reusable React components with TypeScript

---

## 📖 Developer Guides

### Quick References

| Document | Description | Use When |
|----------|-------------|----------|
| **[guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md)** | Developer quick reference card | Daily development |
| **[guides/FORMS_QUICK_REFERENCE.md](./guides/FORMS_QUICK_REFERENCE.md)** | Forms API and patterns | Working with forms |
| **[guides/SCORING_SYSTEM_GUIDE.md](./guides/SCORING_SYSTEM_GUIDE.md)** | ⭐ Complete scoring algorithm | Understanding scoring |

### Development Workflow

```bash
# Setup
npm install
npm run dev

# Testing
npm test              # Unit tests
npm run test:e2e      # E2E tests
npm run test:coverage # Coverage report

# Building
npm run build         # Production build
npm run preview       # Preview build
npm run lint          # Lint code
```

---

## 📦 Archive

Historical documentation from completed work is organized in `/docs/archive/`:

### Archive Categories

| Category | Location | Contents |
|----------|----------|----------|
| **Accessibility** | `archive/accessibility/` | Accessibility audits and code quality reports |
| **Builds** | `archive/builds/` | Build fixes and performance reports |
| **Features** | `archive/features/` | Feature implementation summaries |
| **Flowcharts** | `archive/flowcharts/` | Flowchart implementation work and tracking |
| **Forms** | `archive/forms/` | Form field fixes and updates |
| **Navigation** | `archive/navigation/` | Navigation implementation |
| **Profile UX** | `archive/profile-ux/` | Profile form UX improvements |
| **Redesign** | `archive/redesign/` | Application redesign (German/Scandinavian design) |
| **Refactoring** | `archive/refactoring/` | Code refactoring work |
| **Results Page** | `archive/results-page/` | Results page redesigns |
| **Scoring** | `archive/scoring/` | Scoring system fixes |
| **Snapshots** | `archive/snapshots/` | Project state snapshots |

**Note**: Archive documents are historical records of completed work. For current information, refer to core documentation above.

---

## 🎯 By Role

### Frontend Engineer

**Start Here**:
1. [guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md)
2. [architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md)
3. [architecture/data-schema.md](./architecture/data-schema.md)
4. [guides/FORMS_QUICK_REFERENCE.md](./guides/FORMS_QUICK_REFERENCE.md)

**Key Concepts**:
- Component library in `src/components/`
- Centralized constants in `src/constants/`
- React contexts for state management
- IndexedDB for local storage

### QA/Test Engineer

**Start Here**:
1. [architecture/data-schema.md](./architecture/data-schema.md)
2. [guides/SCORING_SYSTEM_GUIDE.md](./guides/SCORING_SYSTEM_GUIDE.md)
3. [architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md)

**Testing Resources**:
- 3,207 unit tests in `src/` (co-located with components)
- E2E tests in `e2e/`
- Test coverage: `npm run test:coverage`

### UX/Product Designer

**Start Here**:
1. [architecture/UI_WIREFRAMES.md](./architecture/UI_WIREFRAMES.md)
2. [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)
3. [architecture/VISUAL_GUIDE.md](./architecture/VISUAL_GUIDE.md)

**Design System**:
- Tailwind CSS for styling
- Centralized UI constants in `src/constants/uiStyles.ts`
- Reusable components: LoadingSpinner, ErrorState, EmptyState, Toast

### Architecture/Tech Lead

**Start Here**:
1. [architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md)
2. [architecture/data-schema.md](./architecture/data-schema.md)
3. [decisions.md](./decisions.md)
4. [PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md)

**Key Decisions**:
- Local-first architecture (IndexedDB)
- Path-aware scoring algorithm
- Component-based architecture
- TypeScript for type safety

### Project Manager

**Start Here**:
1. [PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md)
2. [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)
3. [decisions.md](./decisions.md)
4. [EU_EXPANSION_PLAN.md](./EU_EXPANSION_PLAN.md)

**Project Status**:
- ✅ All phases complete
- ✅ 3,206/3,207 tests passing
- ✅ Production ready
- 📋 Future: EU expansion to additional countries

---

## 🔍 Finding Information

### By Topic

| Topic | Document |
|-------|----------|
| **Getting Started** | [START_HERE.md](./START_HERE.md) |
| **Project Overview** | [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) |
| **System Architecture** | [architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md) |
| **Data Model** | [architecture/data-schema.md](./architecture/data-schema.md) |
| **UI Design** | [architecture/UI_WIREFRAMES.md](./architecture/UI_WIREFRAMES.md) |
| **Scoring Algorithm** | [guides/SCORING_SYSTEM_GUIDE.md](./guides/SCORING_SYSTEM_GUIDE.md) |
| **Forms** | [guides/FORMS_QUICK_REFERENCE.md](./guides/FORMS_QUICK_REFERENCE.md) |
| **Team Coordination** | [PROJECT_COORDINATION.md](./PROJECT_COORDINATION.md) |
| **Decisions** | [decisions.md](./decisions.md) |
| **Future Plans** | [EU_EXPANSION_PLAN.md](./EU_EXPANSION_PLAN.md) |

### By Task

| Task | Document |
|------|----------|
| **Set up development environment** | [guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md) |
| **Understand the codebase** | [architecture/ARCHITECTURE.md](./architecture/ARCHITECTURE.md) |
| **Add a new form field** | [guides/FORMS_QUICK_REFERENCE.md](./guides/FORMS_QUICK_REFERENCE.md) |
| **Modify scoring logic** | [guides/SCORING_SYSTEM_GUIDE.md](./guides/SCORING_SYSTEM_GUIDE.md) |
| **Add a new country** | [EU_EXPANSION_PLAN.md](./EU_EXPANSION_PLAN.md) |
| **Write tests** | [guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md) |
| **Review project decisions** | [decisions.md](./decisions.md) |

---

## 📊 Project Statistics

- **Total Tests**: 3,207 (3,206 passing)
- **Test Coverage**: High
- **Build Status**: ✅ Passing
- **Linting Errors**: 0
- **TypeScript Errors**: 0
- **Production Ready**: ✅ Yes

---

## 🔗 External Resources

- **Repository**: [GitHub](https://github.com/travisfranklin/immigration-planning-tool)
- **Tech Stack**:
  - React 19.1.1
  - TypeScript 5.9.3
  - Vite 7.1.7
  - Tailwind CSS v3
  - Mermaid.js 11.12.0

---

## 📝 Document Maintenance

### Updating Documentation

When updating documentation:

1. **Core docs** (this directory): Update for current project state
2. **Archive docs** (`archive/`): Do not modify - historical record only
3. **This index**: Update when adding/removing core documentation

### Documentation Standards

- Use Markdown format
- Include last updated date
- Link to related documents
- Keep archive separate from current docs

---

**Questions?** Start with [START_HERE.md](./START_HERE.md) for role-specific guidance.

**Current Status?** See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) for latest project state.

**Need quick help?** Check [guides/QUICK_REFERENCE.md](./guides/QUICK_REFERENCE.md).

