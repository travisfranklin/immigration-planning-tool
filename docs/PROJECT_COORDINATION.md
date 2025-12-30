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

### Documentation Standards

All roles maintain documentation in:
- **data-schema.md**: Data model (Architecture Engineer)
- **decisions.md**: Project decisions (Coordinator)
- **ARCHITECTURE.md**: System design (Architecture Engineer)
- **UI_WIREFRAMES.md**: UI specifications (UX Designer)
- **prompt_versions/eu_immigration_app_v0.1.yaml**: User stories (PM)
- **Code comments**: Implementation details (Frontend Engineer)
- **Test documentation**: Test strategy (QA Engineer)

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

---

**Document Owner**: Coordinator
**Last Updated**: 2025-12-29
