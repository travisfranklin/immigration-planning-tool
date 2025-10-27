# Documentation Reorganization Plan

## Overview
Reorganizing 66 markdown files into a clean `/docs` structure with archived historical documents.

## Categorization

### ✅ KEEP - Core Documentation (13 files)
**Location**: `/docs/` (root level or organized subdirectories)

#### Essential Entry Points (3 files)
1. `README.md` - Project overview, quick start → **ROOT** (stays at repository root)
2. `START_HERE.md` - Navigation hub → `/docs/START_HERE.md`
3. `PROJECT_OVERVIEW.md` - High-level summary → `/docs/PROJECT_OVERVIEW.md`

#### Architecture & Design (4 files)
4. `ARCHITECTURE.md` - System architecture → `/docs/architecture/ARCHITECTURE.md`
5. `data-schema.md` - Data model → `/docs/architecture/data-schema.md`
6. `UI_WIREFRAMES.md` - UI specifications → `/docs/architecture/UI_WIREFRAMES.md`
7. `VISUAL_GUIDE.md` - Visual diagrams → `/docs/architecture/VISUAL_GUIDE.md`

#### Project Management (2 files)
8. `PROJECT_COORDINATION.md` - Team structure → `/docs/PROJECT_COORDINATION.md`
9. `decisions.md` - Project decisions log → `/docs/decisions.md`

#### Developer Guides (4 files)
10. `QUICK_REFERENCE.md` - Developer quick reference → `/docs/guides/QUICK_REFERENCE.md`
11. `FORMS_QUICK_REFERENCE.md` - Forms reference → `/docs/guides/FORMS_QUICK_REFERENCE.md`
12. `SCORING_SYSTEM_GUIDE.md` - Scoring algorithm → `/docs/guides/SCORING_SYSTEM_GUIDE.md`
13. `EU_EXPANSION_PLAN.md` - Future expansion → `/docs/EU_EXPANSION_PLAN.md`

### 📦 ARCHIVE - Historical Documentation (53 files)
**Location**: `/docs/archive/`

#### Accessibility & Audits (3 files)
- `ACCESSIBILITY_AUDIT_REPORT.md`
- `AUDIT_SUMMARY.md`
- `CODE_DUPLICATION_AND_MAGIC_STRINGS_AUDIT.md`

#### Build & Performance (2 files)
- `BUILD_FIXES_SUMMARY.md`
- `PERFORMANCE_TEST_REPORT.md`

#### Completion Reports (3 files)
- `COMPLETION_REPORT.md`
- `EXECUTIVE_SUMMARY.md`
- `INDEX.md` (old index, will be replaced)

#### Current State Snapshots (3 files)
- `CURRENT_STATE.md`
- `CURRENT_STATUS.md`
- `DOCUMENTATION_UPDATE_SUMMARY.md`

#### Feature Implementations (8 files)
- `BADGE_UX_IMPROVEMENTS.md`
- `FAMILY_REUNIFICATION_IMPLEMENTATION.md`
- `FEATURE_SPEC_RESULT_DETAIL.md`
- `FIELD_OF_STUDY_COMBOBOX_IMPLEMENTATION.md`
- `NAVIGATION_IMPLEMENTATION_SUMMARY.md`
- `SHAREABLE_RESULTS_IMPLEMENTATION.md`
- `SHAREABLE_RESULTS_PROPOSAL.md`
- `SHAREABLE_RESULTS_README.md`

#### Field & Form Fixes (4 files)
- `CITIZENSHIP_FIELD_FIX.md`
- `FAMILY_FORM_CITIZENSHIP_UPDATE.md`
- `LANGUAGE_FORM_SELECT_UPDATE.md`
- `OCCUPATION_FIELD_ANALYSIS.md`

#### Flowchart Work (3 files)
- `FLOWCHART_SYNTAX_FIXES_COMPLETE.md`
- `FLOWCHART_TESTS_COMPLETE.md`
- `FLOWCHART_UPDATE_PLAN.md`

#### Magic Strings Refactoring (3 files)
- `MAGIC_STRINGS_ANALYSIS.md`
- `MAGIC_STRINGS_IMPLEMENTATION_SUMMARY.md`
- `MAGIC_STRINGS_REFACTORING_EXAMPLES.md`

#### Navigation Work (2 files)
- `NAVIGATION_PLAN.md`
- `NAVIGATION_WIREFRAMES.md`

#### Profile UX Work (5 files)
- `PROFILE_FORM_PRODUCT_DECISION.md`
- `PROFILE_UX_ASSESSMENT.md`
- `PROFILE_UX_IMPLEMENTATION_SUMMARY.md`
- `PROFILE_UX_PHASE_2_COMPLETE.md`
- `PROFILE_UX_PHASE_3_COMPLETE.md`

#### Refactoring Work (3 files)
- `READY_FOR_PHASE_3.md`
- `REFACTORING_ACTION_PLAN.md`
- `TASK_3.4_COMPLETION_SUMMARY.md`
- `TASK_3.4_EFFORT_ANALYSIS.md`

#### Results Page Work (5 files)
- `RESULTS_PAGE_IMPLEMENTATION_COMPLETE.md`
- `RESULTS_PAGE_PRODUCT_DECISION.md`
- `RESULTS_PAGE_REDESIGN_V2.md`
- `RESULTS_PAGE_UX_DESIGN.md`
- `RESULTS_PAGE_V2_COMPLETE.md`

#### Scoring System Fixes (9 files)
- `LANGUAGE_SCORER_BUG_FIX.md`
- `SCORING_DOCUMENTATION_COMPLETE.md`
- `SCORING_FIXES_COMPLETE.md`
- `SCORING_FIX_ARCHITECTURE.md`
- `SCORING_FIX_UI_DESIGN.md`
- `SCORING_FIX_USER_STORIES.md`
- `SCORING_INVESTIGATION_REPORT.md`
- `SCORING_THRESHOLD_FIX.md`
- `SCORING_THRESHOLD_FIX_COMPLETE.md`

#### Shareable Results (1 file)
- `SHAREABLE_RESULTS_COMPARISON.md`

## New Directory Structure

```
/
├── README.md (stays at root)
├── package.json
├── src/
├── docs/
│   ├── START_HERE.md
│   ├── PROJECT_OVERVIEW.md
│   ├── PROJECT_COORDINATION.md
│   ├── decisions.md
│   ├── EU_EXPANSION_PLAN.md
│   ├── INDEX.md (NEW - updated index)
│   ├── architecture/
│   │   ├── ARCHITECTURE.md
│   │   ├── data-schema.md
│   │   ├── UI_WIREFRAMES.md
│   │   └── VISUAL_GUIDE.md
│   ├── guides/
│   │   ├── QUICK_REFERENCE.md
│   │   ├── FORMS_QUICK_REFERENCE.md
│   │   └── SCORING_SYSTEM_GUIDE.md
│   └── archive/
│       ├── accessibility/
│       │   ├── ACCESSIBILITY_AUDIT_REPORT.md
│       │   ├── AUDIT_SUMMARY.md
│       │   └── CODE_DUPLICATION_AND_MAGIC_STRINGS_AUDIT.md
│       ├── builds/
│       │   ├── BUILD_FIXES_SUMMARY.md
│       │   └── PERFORMANCE_TEST_REPORT.md
│       ├── features/
│       │   ├── BADGE_UX_IMPROVEMENTS.md
│       │   ├── FAMILY_REUNIFICATION_IMPLEMENTATION.md
│       │   ├── FEATURE_SPEC_RESULT_DETAIL.md
│       │   ├── FIELD_OF_STUDY_COMBOBOX_IMPLEMENTATION.md
│       │   ├── NAVIGATION_IMPLEMENTATION_SUMMARY.md
│       │   ├── SHAREABLE_RESULTS_IMPLEMENTATION.md
│       │   ├── SHAREABLE_RESULTS_PROPOSAL.md
│       │   ├── SHAREABLE_RESULTS_README.md
│       │   └── SHAREABLE_RESULTS_COMPARISON.md
│       ├── flowcharts/
│       │   ├── FLOWCHART_SYNTAX_FIXES_COMPLETE.md
│       │   ├── FLOWCHART_TESTS_COMPLETE.md
│       │   └── FLOWCHART_UPDATE_PLAN.md
│       ├── forms/
│       │   ├── CITIZENSHIP_FIELD_FIX.md
│       │   ├── FAMILY_FORM_CITIZENSHIP_UPDATE.md
│       │   ├── LANGUAGE_FORM_SELECT_UPDATE.md
│       │   └── OCCUPATION_FIELD_ANALYSIS.md
│       ├── navigation/
│       │   ├── NAVIGATION_PLAN.md
│       │   └── NAVIGATION_WIREFRAMES.md
│       ├── profile-ux/
│       │   ├── PROFILE_FORM_PRODUCT_DECISION.md
│       │   ├── PROFILE_UX_ASSESSMENT.md
│       │   ├── PROFILE_UX_IMPLEMENTATION_SUMMARY.md
│       │   ├── PROFILE_UX_PHASE_2_COMPLETE.md
│       │   └── PROFILE_UX_PHASE_3_COMPLETE.md
│       ├── refactoring/
│       │   ├── MAGIC_STRINGS_ANALYSIS.md
│       │   ├── MAGIC_STRINGS_IMPLEMENTATION_SUMMARY.md
│       │   ├── MAGIC_STRINGS_REFACTORING_EXAMPLES.md
│       │   ├── READY_FOR_PHASE_3.md
│       │   ├── REFACTORING_ACTION_PLAN.md
│       │   ├── TASK_3.4_COMPLETION_SUMMARY.md
│       │   └── TASK_3.4_EFFORT_ANALYSIS.md
│       ├── results-page/
│       │   ├── RESULTS_PAGE_IMPLEMENTATION_COMPLETE.md
│       │   ├── RESULTS_PAGE_PRODUCT_DECISION.md
│       │   ├── RESULTS_PAGE_REDESIGN_V2.md
│       │   ├── RESULTS_PAGE_UX_DESIGN.md
│       │   └── RESULTS_PAGE_V2_COMPLETE.md
│       ├── scoring/
│       │   ├── LANGUAGE_SCORER_BUG_FIX.md
│       │   ├── SCORING_DOCUMENTATION_COMPLETE.md
│       │   ├── SCORING_FIXES_COMPLETE.md
│       │   ├── SCORING_FIX_ARCHITECTURE.md
│       │   ├── SCORING_FIX_UI_DESIGN.md
│       │   ├── SCORING_FIX_USER_STORIES.md
│       │   ├── SCORING_INVESTIGATION_REPORT.md
│       │   ├── SCORING_THRESHOLD_FIX.md
│       │   └── SCORING_THRESHOLD_FIX_COMPLETE.md
│       └── snapshots/
│           ├── COMPLETION_REPORT.md
│           ├── CURRENT_STATE.md
│           ├── CURRENT_STATUS.md
│           ├── DOCUMENTATION_UPDATE_SUMMARY.md
│           ├── EXECUTIVE_SUMMARY.md
│           └── INDEX.md (old)
└── prompt_versions/
    └── eu_immigration_app_v0.1.yaml
```

## Actions Required

1. ✅ Create directory structure
2. ✅ Move files to new locations
3. ✅ Update core documentation with current state
4. ✅ Create new INDEX.md
5. ✅ Update all internal links
6. ✅ Test and commit

