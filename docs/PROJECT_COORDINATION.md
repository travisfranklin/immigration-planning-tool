# EU Immigration Planning Application - Project Coordination Guide

## Project Overview

**Mission**: Design and build a local-first application for US citizens to plan and determine the viability of their immigration path to various EU countries.

**Core Principle**: All user data must be stored locally on the user's system with no server-side persistence.

**Target Users**: US citizens considering immigration to the EU

## Organizational Structure

### Roles & Responsibilities

#### 1. Coordinator
**Responsibilities**:
- Oversee project timeline and milestones
- Ensure alignment between all roles
- Enforce coordination protocols
- Resolve cross-functional conflicts
- Update project documentation
- Track progress against plan

**Key Artifacts**:
- decisions.md (maintains decision log)
- PROJECT_COORDINATION.md (this file)
- Task tracking and status updates

#### 2. Product Manager (PM)
**Responsibilities**:
- Define MVP feature set
- Prioritize data points for viability algorithm
- Create and maintain user stories
- Manage feature scope
- Communicate with stakeholders
- Validate product decisions

**Key Artifacts**:
- prompt_versions/eu_immigration_app_v0.1.yaml (user stories)
- decisions.md (product decisions)
- Feature prioritization matrix

#### 3. UX Designer
**Responsibilities**:
- Develop wireframes and mockups
- Design data collection forms
- Design country viability dashboard
- Design country-specific flowcharts
- Ensure modern, user-friendly experience
- Validate accessibility (WCAG 2.1 AA)

**Key Artifacts**:
- UI_WIREFRAMES.md (wireframes and design specs)
- Design system documentation
- Accessibility checklist

#### 4. Architecture Engineer
**Responsibilities**:
- Design local data storage model
- Define viability algorithm structure
- Design data abstraction layer
- Define system architecture
- Ensure scalability and performance
- Review technical decisions

**Key Artifacts**:
- data-schema.md (data model and storage schema)
- ARCHITECTURE.md (system architecture)
- Algorithm specifications

#### 5. Frontend Engineer
**Responsibilities**:
- Implement UI based on UX designs
- Integrate local data storage
- Implement viability algorithm logic
- Implement display components
- Optimize performance
- Maintain code quality

**Key Artifacts**:
- Source code (src/ directory)
- Component implementations
- Algorithm implementations

#### 6. QA Automation Engineer
**Responsibilities**:
- Define E2E test strategy
- Implement automated tests
- Validate data integrity
- Validate algorithm accuracy
- Validate UI functionality
- Maintain test suite

**Key Artifacts**:
- tests/ directory (unit and E2E tests)
- Test specifications
- Test coverage reports

## Coordination Protocols

### Decision-Making Process

1. **Proposal**: Role identifies need for decision
2. **Discussion**: Relevant roles discuss options
3. **Decision**: Coordinator facilitates consensus
4. **Documentation**: Decision logged in decisions.md
5. **Communication**: All roles notified of decision
6. **Implementation**: Roles implement per decision

### Conflict Resolution

#### Data Conflicts
- **Parties**: PM + Architecture Engineer
- **Process**: 
  1. Identify conflict (e.g., required data compromises privacy)
  2. Propose client-side compromise or scope reduction
  3. Document in decisions.md
  4. Implement agreed solution

#### UI Complexity Conflicts
- **Parties**: UX Designer + Frontend Engineer
- **Process**:
  1. Identify complexity issue (e.g., flowchart visualization)
  2. Simplify visualization while preserving critical info
  3. Document in decisions.md
  4. Implement simplified solution

#### Cross-Functional Conflicts
- **Parties**: Coordinator + all relevant roles
- **Process**:
  1. Coordinator facilitates discussion
  2. Roles present perspectives
  3. Coordinator makes final decision
  4. Document in decisions.md

### Communication Cadence

- **Daily**: Async updates in task tracking system
- **Weekly**: Sync meeting (30 min) - status, blockers, decisions
- **Bi-weekly**: Design review (1 hour) - UI/UX validation
- **Bi-weekly**: Architecture review (1 hour) - technical decisions
- **As-needed**: Ad-hoc discussions for urgent issues

### Documentation Standards

All roles maintain documentation in:
- **data-schema.md**: Data model (Architecture Engineer)
- **decisions.md**: Project decisions (Coordinator)
- **ARCHITECTURE.md**: System design (Architecture Engineer)
- **UI_WIREFRAMES.md**: UI specifications (UX Designer)
- **prompt_versions/eu_immigration_app_v0.1.yaml**: User stories (PM)
- **Code comments**: Implementation details (Frontend Engineer)
- **Test documentation**: Test strategy (QA Engineer)

## Project Phases

### Phase 1: Architecture Design & Data Schema ✅ COMPLETE
**Duration**: 1 week
**Lead**: Architecture Engineer + UX Designer
**Deliverables**:
- [x] Data schema definition
- [x] Architecture design
- [x] UI wireframes
- [x] Project documentation
- [x] User stories and MVP scope

### Phase 2: Local Storage & Core Forms ✅ COMPLETE
**Duration**: 2-3 weeks
**Lead**: Frontend Engineer
**Deliverables**:
- [x] IndexedDB integration
- [x] User profile forms
- [x] Form validation
- [x] Local data persistence
- [x] Basic dashboard layout

### Phase 3: Multi-Step Forms ✅ COMPLETE
**Duration**: 2-3 weeks
**Lead**: Frontend Engineer
**Deliverables**:
- [x] Multi-step form container
- [x] Auto-save functionality
- [x] Form state management
- [x] Navigation between steps
- [x] Data persistence fixes

### Phase 4: Form Validation & Testing ✅ COMPLETE
**Duration**: 1-2 weeks
**Lead**: Frontend Engineer + QA Engineer
**Deliverables**:
- [x] Comprehensive form validation
- [x] Unit tests for all forms
- [x] E2E tests for form flows
- [x] Data persistence tests
- [x] Bug fixes and polish

### Phase 5: Data Persistence Fixes ✅ COMPLETE
**Duration**: 1 week
**Lead**: Frontend Engineer
**Deliverables**:
- [x] Fixed auto-save issues
- [x] Resolved React Strict Mode conflicts
- [x] Improved form state management
- [x] All tests passing

### Phase 6: Viability Algorithm & Results ✅ COMPLETE
**Duration**: 2-3 weeks
**Lead**: Architecture Engineer + Frontend Engineer
**Deliverables**:
- [x] Viability algorithm implementation (27 visa programs)
- [x] Path-aware scoring system
- [x] Risk factor analysis
- [x] Contingency scenario planning
- [x] Results UI with rankings
- [x] Algorithm tests

### Phase 7: Immigration Flowcharts & Data Management 🔄 IN PROGRESS (75%)
**Duration**: 2-3 weeks
**Lead**: Frontend Engineer + UX Designer
**Deliverables**:
- [x] Flowchart type definitions
- [x] Mermaid.js integration
- [x] FlowchartViewer component
- [x] Germany flowcharts (5 programs)
- [x] Export service (JSON, CSV, Text)
- [x] Import service with validation
- [x] Settings page
- [ ] Flowcharts for other countries (20 programs)
- [ ] Tests for Phase 7 features

### Phase 8: Interactive Result Details with Flowchart Integration ✅ COMPLETE (100%)
**Duration**: 1-2 weeks
**Lead**: Frontend Engineer + UX Designer
**Deliverables**:
- [x] ResultDetail page component (/result-detail/:countryCode)
- [x] Interactive flowchart component with clickable steps
- [x] Side panel for step details
- [x] Merge flowchart and detail view concepts
- [x] Shareable URLs for result details
- [x] Update Results page navigation
- [x] Tests for ResultDetail page and interactive flowchart
- [x] Update documentation

## Validation Checkpoints

### Phase 1 Validation ✅ COMPLETE

- [x] Data schema supports all requirements
- [x] Architecture maintains local-first principle
- [x] UI design is modern and accessible
- [x] Viability algorithm is mathematically sound
- [x] Technology stack is appropriate
- [x] MVP scope is achievable

### Phase 2 Validation ✅ COMPLETE

- [x] All form data persists to IndexedDB
- [x] Forms validate input correctly
- [x] Multi-step form navigation works
- [x] Data survives browser refresh
- [x] Mobile responsive design works
- [x] Unit tests pass (>80% coverage)

### Phase 3 Validation ✅ COMPLETE

- [x] Multi-step form container implemented
- [x] Auto-save functionality working
- [x] Form state management robust
- [x] Navigation between steps smooth
- [x] All tests passing

### Phase 4 Validation ✅ COMPLETE

- [x] Form validation comprehensive
- [x] Unit tests for all forms
- [x] E2E tests for form flows
- [x] Data persistence verified
- [x] Bug fixes completed

### Phase 5 Validation ✅ COMPLETE

- [x] Auto-save issues resolved
- [x] React Strict Mode conflicts fixed
- [x] Form state management improved
- [x] All tests passing (186/186)

### Phase 6 Validation ✅ COMPLETE

- [x] Viability scores calculate correctly
- [x] Risk factors identified accurately
- [x] Contingency scenarios are relevant
- [x] Results UI displays correctly
- [x] Algorithm tests pass
- [x] Performance is acceptable

### Phase 7 Validation 🔄 IN PROGRESS

- [x] Flowcharts display correctly
- [x] Export/import functionality works
- [x] Settings page functional
- [x] Data management features complete
- [ ] All country flowcharts complete
- [ ] Phase 7 tests written and passing

### Phase 8 Validation ✅ COMPLETE

- [x] ResultDetail page displays correctly
- [x] Interactive flowchart allows clicking on steps
- [x] Side panel shows step details
- [x] URLs are shareable and work correctly
- [ ] Results page navigation updated
- [ ] All tests passing
- [ ] Documentation updated

## Key Principles

### 1. Local-First Architecture
- All user data stored locally (IndexedDB)
- No server-side persistence
- No network transmission of user data
- User maintains complete control

### 2. User Privacy
- No tracking or analytics
- No cookies or identifiers
- User can export/delete all data
- Optional encryption for sensitive data

### 3. Data-Driven Decisions
- All decisions logged in decisions.md
- Rationale documented for each decision
- Conflicts resolved through discussion
- Changes tracked and communicated

### 4. Quality & Testing
- Unit tests for all business logic
- E2E tests for user workflows
- Accessibility testing (WCAG 2.1 AA)
- Performance testing and optimization

### 5. Documentation
- All decisions documented
- Architecture clearly defined
- User stories prioritized
- Code well-commented

## Success Metrics

### Project Success
- [ ] MVP delivered on schedule
- [ ] All user stories implemented
- [ ] Zero critical bugs
- [ ] >80% test coverage
- [ ] WCAG 2.1 AA compliance

### User Success
- [ ] Users can create profile in <5 minutes
- [ ] Viability scores are accurate
- [ ] Users understand risk factors
- [ ] Users can export data
- [ ] Users trust data privacy

### Team Success
- [ ] All roles aligned on decisions
- [ ] No unresolved conflicts
- [ ] Documentation is complete
- [ ] Code quality is high
- [ ] Team communication is effective

## Next Steps

1. **Coordinator**: Schedule Phase 2 kickoff meeting
2. **Frontend Engineer**: Review Phase 2 Implementation Guide
3. **Architecture Engineer**: Prepare IndexedDB specifications
4. **QA Engineer**: Prepare test strategy for Phase 2
5. **All Roles**: Review and approve Phase 2 plan

---

**Document Owner**: Coordinator
**Last Updated**: 2025-10-25
**Next Review**: After Phase 8 completion

