# EU Immigration Planning Application - Decision Log

## Project Decisions

### D001: Technology Stack
**Date**: 2025-10-18  
**Decision**: Use React + Vite + TypeScript for frontend, IndexedDB for local storage  
**Rationale**: 
- React provides modern component architecture and ecosystem
- Vite offers fast development and build times
- TypeScript ensures type safety for complex data structures
- IndexedDB is the standard for client-side data persistence in browsers
- No backend required (local-first principle)

**Status**: APPROVED

---

### D002: Data Storage Approach
**Date**: 2025-10-18  
**Decision**: Use IndexedDB with optional Web Crypto API encryption  
**Rationale**:
- IndexedDB provides sufficient storage capacity (typically 50MB+)
- Supports complex queries and indexing
- Optional encryption protects sensitive financial/personal data
- No server-side persistence maintains privacy principle
- User can export/delete data at any time

**Status**: APPROVED

---

### D003: Viability Algorithm Weights
**Date**: 2025-10-18  
**Decision**: 
- Career Score: 30% (highest priority)
- Financial Score: 25%
- Education Score: 20%
- Language Score: 15%
- Family Score: 10%

**Rationale**:
- Career alignment is most critical for work visa eligibility
- Financial stability is essential for all immigration paths
- Education provides foundation for career opportunities
- Language proficiency affects integration and employment
- Family situation impacts quality of life but less critical for visa eligibility

**Status**: APPROVED

---

### D004: Country Rules Data
**Date**: 2025-10-18  
**Decision**: Embed country rules as static JSON data in the application  
**Rationale**:
- Maintains local-first principle (no server lookups)
- Rules are relatively stable and can be updated via app releases
- Reduces complexity of data synchronization
- Users can manually update rules if needed

**Status**: APPROVED

---

### D005: UI Framework for Flowcharts
**Date**: 2025-10-18  
**Decision**: Use Mermaid.js for flowchart visualization  
**Rationale**:
- Lightweight and easy to integrate
- Supports complex flowcharts with conditional paths
- Can be rendered client-side without external dependencies
- Supports export to SVG/PNG

**Status**: APPROVED

---

### D006: MVP Feature Scope
**Date**: 2025-10-18  
**Decision**: 
Phase 1 MVP includes:
1. User profile data collection form
2. Viability score calculation for 5 target countries (DE, NL, FR, ES, IT)
3. Country ranking dashboard
4. Basic risk factor display
5. Data persistence and export

**Rationale**:
- Focuses on core value proposition
- Manageable scope for initial release
- Can expand to more countries and features in future phases

**Status**: APPROVED

---

### D007: Conflict Resolution Protocol
**Date**: 2025-10-18  
**Decision**: 
- PM and Architecture Engineer resolve data conflicts
- UX Designer and Frontend Engineer resolve UI complexity conflicts
- Coordinator mediates cross-functional conflicts
- All decisions logged in this document

**Status**: APPROVED

---

## Pending Decisions

None at this time.

## Resolved Conflicts

None at this time.

