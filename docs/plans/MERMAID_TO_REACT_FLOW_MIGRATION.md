# Migration Plan: Mermaid → React Flow

**Status**: PROPOSED
**Created**: 2025-12-28
**Owner**: Engineering Team

---

## Executive Summary

Replace all Mermaid.js flowcharts with react-flow for better interactivity, modern UI, and easier editing.

### Current State
- **29 flowchart files** (one per country) with Mermaid syntax
- **3 components**: `FlowchartViewer`, `InteractiveFlowchart`, `StepDetailsPanel`
- **2 pages**: `ResultDetail`, `AllFlowcharts`
- **Pain Points**:
  - Mermaid syntax is difficult to edit (string-based, no IDE support)
  - Limited interactivity (click handlers require DOM manipulation)
  - Hard to customize styling beyond theme variables
  - No drag-and-drop or visual editing
  - SVG rendering can be slow for complex diagrams

### Target State
- **React Flow** library with programmatic node/edge definitions
- **Modern UI**: Smooth animations, pan/zoom, minimap, controls
- **Better DX**: TypeScript types, React components, easier to edit
- **Enhanced UX**: Drag nodes, collapsible sections, progress tracking
- **Maintainability**: Reusable node components, centralized styling

---

## Technology Overview

### React Flow Features
- **Node-based UI library** for React (https://reactflow.dev/)
- **Built-in features**:
  - Pan, zoom, minimap
  - Custom node components
  - Edge routing and styling
  - Drag and drop
  - Selection, multi-select
  - Undo/redo support
  - Export to PNG/SVG
- **TypeScript support**: Full type safety
- **Performance**: Virtual rendering for large graphs
- **Customization**: Complete control over node/edge appearance

### Package Info
```bash
npm install reactflow
# or
pnpm add reactflow
```

**Bundle size**: ~150KB (vs Mermaid ~500KB)
**License**: MIT

---

## Migration Phases

### Phase 1: Foundation & Proof of Concept (Week 1)
**Goal**: Install react-flow, create basic node types, convert 1 flowchart

#### Tasks
1. **Install Dependencies**
   - [ ] Install `reactflow` package
   - [ ] Update `package.json` and lock file

2. **Create Node Type Components**
   - [ ] `ProcessStepNode.tsx` - Regular process steps
   - [ ] `DecisionNode.tsx` - Conditional branches (diamond shape)
   - [ ] `StartEndNode.tsx` - Start/end nodes (rounded)
   - [ ] `DocumentNode.tsx` - Document collection steps

3. **Create Utility Functions**
   - [ ] `mermaidToReactFlow.ts` - Parser to convert Mermaid → React Flow format
   - [ ] `flowchartLayoutEngine.ts` - Auto-layout algorithm (dagre or elkjs)
   - [ ] `nodeStyler.ts` - Apply design system colors to nodes

4. **Update Type Definitions**
   - [ ] Extend `FlowchartDefinition` to support both formats during migration
   - [ ] Create `ReactFlowData` type for nodes/edges

5. **Proof of Concept**
   - [ ] Convert Germany EU Blue Card flowchart to React Flow
   - [ ] Create `ReactFlowViewer.tsx` component
   - [ ] Test in `ResultDetail` page with feature flag

**Deliverable**: Working React Flow flowchart for 1 program

---

### Phase 2: Core Components & Migration Tools (Week 2)
**Goal**: Build reusable components, create migration script

#### Tasks
1. **Build Core Components**
   - [ ] `ReactFlowViewer.tsx` - Main viewer component (replaces `FlowchartViewer`)
   - [ ] `FlowchartControls.tsx` - Zoom, fit view, minimap toggle
   - [ ] `FlowchartMinimap.tsx` - Overview map for navigation
   - [ ] `ProgressTracker.tsx` - Show completed vs remaining steps

2. **Enhanced Step Details Panel**
   - [ ] Update `StepDetailsPanel.tsx` to work with React Flow
   - [ ] Add "Mark as Complete" checkbox
   - [ ] Add progress indicator
   - [ ] Add estimated time remaining

3. **Create Migration Script**
   - [ ] `scripts/migrateMermaidToReactFlow.ts` - Automated converter
   - [ ] Parse Mermaid syntax → Extract nodes/edges
   - [ ] Generate React Flow JSON format
   - [ ] Preserve step metadata (documents, notes, duration)

4. **Testing Infrastructure**
   - [ ] Update `FlowchartViewer.test.tsx` for React Flow
   - [ ] Add visual regression tests (Playwright/Chromatic)

**Deliverable**: Migration script + core components

---



### Phase 3: Batch Migration (Week 3)
**Goal**: Convert all 29 country flowcharts to React Flow

#### Tasks
1. **Run Migration Script**
   - [ ] Convert all flowcharts in `src/data/flowcharts/*.ts`
   - [ ] Generate new format alongside old (dual support)
   - [ ] Validate all conversions (no data loss)

2. **Update Data Files**
   - [ ] Add `reactFlowData` field to `FlowchartDefinition`
   - [ ] Keep `mermaidDiagram` field for rollback safety
   - [ ] Update all 29 country files

3. **Feature Flag Implementation**
   - [ ] Add `USE_REACT_FLOW` feature flag
   - [ ] Update `FlowchartViewer` to switch based on flag
   - [ ] Default to Mermaid (safe rollback)

4. **Quality Assurance**
   - [ ] Visual comparison: Mermaid vs React Flow for each flowchart
   - [ ] Test all interactive features (click, select, zoom)
   - [ ] Performance testing (load time, render time)

**Deliverable**: All flowcharts available in both formats

---

### Phase 4: Enhanced Features (Week 4)
**Goal**: Add features impossible with Mermaid

#### Tasks
1. **Progress Tracking**
   - [ ] Add `completedSteps` to user profile
   - [ ] Visual indicators on nodes (checkmarks, progress rings)
   - [ ] "Mark as Complete" button in step details
   - [ ] Persist progress in IndexedDB

2. **Interactive Features**
   - [ ] Collapsible sub-processes (expand/collapse groups)
   - [ ] Highlight critical path (longest duration)
   - [ ] Filter by step type (documents, decisions, actions)
   - [ ] Search within flowchart

3. **Modern UI Enhancements**
   - [ ] Smooth animations (node transitions, edge drawing)
   - [ ] Minimap with viewport indicator
   - [ ] Keyboard shortcuts (arrow keys, zoom, fit)
   - [ ] Touch gestures for mobile (pinch zoom, pan)

4. **Export Improvements**
   - [ ] Export to PNG with higher resolution
   - [ ] Export to PDF with step details
   - [ ] Export progress report (completed vs remaining)

**Deliverable**: Feature-rich React Flow implementation

---

### Phase 5: Cleanup & Optimization (Week 5)
**Goal**: Remove Mermaid, optimize bundle size, finalize migration

#### Tasks
1. **Remove Mermaid Dependencies**
   - [ ] Delete `mermaidDiagram` field from all flowcharts
   - [ ] Remove `mermaid` package from `package.json`
   - [ ] Delete `src/config/mermaid.config.ts`
   - [ ] Update type definitions (remove Mermaid references)

2. **Code Cleanup**
   - [ ] Remove old `FlowchartViewer` (Mermaid version)
   - [ ] Remove feature flag code
   - [ ] Rename `ReactFlowViewer` → `FlowchartViewer`
   - [ ] Update all imports

3. **Performance Optimization**
   - [ ] Lazy load React Flow (code splitting)
   - [ ] Memoize node components
   - [ ] Optimize edge rendering (reduce re-renders)
   - [ ] Add loading states

4. **Documentation**
   - [ ] Update `ARCHITECTURE.md` with React Flow details
   - [ ] Create `FLOWCHART_EDITING_GUIDE.md` for adding new flowcharts
   - [ ] Update decision log (D005: Mermaid → React Flow)
   - [ ] Add JSDoc comments to all components

5. **Final Testing**
   - [ ] Full regression test suite
   - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
   - [ ] Mobile testing (iOS, Android)
   - [ ] Accessibility audit (keyboard nav, screen readers)

**Deliverable**: Production-ready React Flow implementation

---

## Data Structure Changes

### Before (Mermaid)
```typescript
export interface FlowchartDefinition {
  programId: string;
  countryCode: string;
  programName: string;
  mermaidDiagram: string; // ❌ String-based, hard to edit
  steps: FlowchartStep[];
  totalEstimatedDuration: string;
  complexity: 'low' | 'medium' | 'high';
  successRate?: string;
}
```

### After (React Flow)
```typescript
export interface FlowchartDefinition {
  programId: string;
  countryCode: string;
  programName: string;
  reactFlowData: {
    nodes: Node[]; // ✅ Typed, programmatic
    edges: Edge[];
  };
  steps: FlowchartStep[];
  totalEstimatedDuration: string;
  complexity: 'low' | 'medium' | 'high';
  successRate?: string;
}

// React Flow Node Type
export interface ProcessNode extends Node {
  id: string;
  type: 'process' | 'decision' | 'start' | 'end' | 'document';
  position: { x: number; y: number };
  data: {
    label: string;
    stepId: string; // Links to FlowchartStep
    status?: 'pending' | 'in-progress' | 'completed';
    estimatedDuration?: string;
  };
}
```

---

## Component Architecture

### New Component Structure
```
src/components/flowchart/
├── ReactFlowViewer.tsx          # Main viewer (replaces FlowchartViewer)
├── InteractiveFlowchart.tsx     # Wrapper with details panel (updated)
├── StepDetailsPanel.tsx          # Step details (updated for progress)
├── FlowchartControls.tsx         # Zoom, fit, minimap controls (NEW)
├── FlowchartMinimap.tsx          # Overview map (NEW)
├── ProgressTracker.tsx           # Progress indicator (NEW)
└── nodes/
    ├── ProcessStepNode.tsx       # Regular steps (NEW)
    ├── DecisionNode.tsx          # Conditional branches (NEW)
    ├── StartEndNode.tsx          # Start/end nodes (NEW)
    └── DocumentNode.tsx          # Document steps (NEW)
```

### Example: ProcessStepNode Component

```typescript
import { Handle, Position } from 'reactflow';

interface ProcessStepNodeProps {
  data: {
    label: string;
    stepId: string;
    status?: 'pending' | 'in-progress' | 'completed';
    estimatedDuration?: string;
  };
  selected: boolean;
}

export function ProcessStepNode({ data, selected }: ProcessStepNodeProps) {
  const statusColors = {
    pending: 'bg-gray-100 border-gray-400',
    'in-progress': 'bg-primary-100 border-primary',
    completed: 'bg-success-100 border-success',
  };

  return (
    <div className={`
      px-4 py-3 border-2 rounded-none
      ${statusColors[data.status || 'pending']}
      ${selected ? 'ring-2 ring-primary' : ''}
    `}>
      <Handle type="target" position={Position.Top} />

      <div className="font-bold text-body">{data.label}</div>
      {data.estimatedDuration && (
        <div className="text-body-sm text-gray-600 mt-1">
          {data.estimatedDuration}
        </div>
      )}

      {data.status === 'completed' && (
        <div className="absolute -top-2 -right-2 bg-success text-white w-6 h-6 flex items-center justify-center">
          ✓
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
```

---

## Migration Script Example

### Mermaid Parser

```typescript
// scripts/migrateMermaidToReactFlow.ts

import { Node, Edge } from 'reactflow';
import dagre from 'dagre';

export function parseMermaidToReactFlow(mermaidDiagram: string): {
  nodes: Node[];
  edges: Edge[];
} {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Parse Mermaid syntax
  const lines = mermaidDiagram.split('\n').filter(l => l.trim());

  lines.forEach(line => {
    // Match node definitions: Start([Start Process])
    const nodeMatch = line.match(/(\w+)\[(.+?)\]/);
    if (nodeMatch) {
      const [, id, label] = nodeMatch;
      nodes.push({
        id,
        type: getNodeType(label),
        position: { x: 0, y: 0 }, // Will be calculated by layout
        data: { label: label.replace(/[\[\]\(\)]/g, ''), stepId: id },
      });
    }

    // Match edges: Start --> Step1
    const edgeMatch = line.match(/(\w+)\s*-->\s*(\w+)/);
    if (edgeMatch) {
      const [, source, target] = edgeMatch;
      edges.push({
        id: `${source}-${target}`,
        source,
        target,
        type: 'smoothstep',
      });
    }
  });

  // Auto-layout using dagre
  return applyDagreLayout(nodes, edges);
}

function getNodeType(label: string): string {
  if (label.includes('Start') || label.includes('End')) return 'start-end';
  if (label.includes('?')) return 'decision';
  if (label.includes('Document')) return 'document';
  return 'process';
}
```

---

## Design System Integration

### Node Styling (German/Scandinavian Aesthetic)

```typescript
// src/constants/flowchartStyles.ts

export const FLOWCHART_NODE_STYLES = {
  process: {
    background: '#FFFFFF',
    border: '2px solid #1F2937', // Black border
    borderRadius: '0px', // Sharp corners
    padding: '12px 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: '500',
  },

  decision: {
    background: '#FFF9E6', // Light yellow
    border: '2px solid #FF9B00', // Orange Peel
    borderRadius: '0px',
    transform: 'rotate(45deg)', // Diamond shape
  },

  start: {
    background: '#E8F9F0', // Light green
    border: '2px solid #75E3B3', // Aquamarine
    borderRadius: '0px',
  },

  completed: {
    background: '#E8F9F0',
    border: '2px solid #75E3B3',
    opacity: 0.7,
  },
};

export const FLOWCHART_EDGE_STYLES = {
  default: {
    stroke: '#1F2937',
    strokeWidth: 2,
    type: 'smoothstep', // Clean, angular edges
  },

  conditional: {
    stroke: '#FF9B00',
    strokeWidth: 2,
    strokeDasharray: '5,5', // Dashed for conditional paths
  },
};
```

---

## Risk Mitigation

### Risks & Mitigation Strategies

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Data loss during migration** | High | Low | Keep both formats during transition, validate all conversions |
| **Performance regression** | Medium | Medium | Benchmark before/after, lazy load React Flow, optimize renders |
| **User confusion with new UI** | Medium | Low | Gradual rollout with feature flag, user testing |
| **Bundle size increase** | Low | Low | React Flow is smaller than Mermaid (150KB vs 500KB) |
| **Breaking existing features** | High | Low | Comprehensive test suite, visual regression tests |

### Rollback Plan

1. Keep `mermaidDiagram` field during Phases 1-4
2. Feature flag allows instant rollback to Mermaid
3. If critical issues found in Phase 5, revert commits and restore Mermaid

---

## Success Metrics

### Phase 1-2 (Foundation)

- [ ] 1 flowchart converted successfully
- [ ] All interactive features working (click, zoom, pan)
- [ ] No performance regression vs Mermaid

### Phase 3-4 (Migration & Features)

- [ ] All 29 flowcharts converted
- [ ] Progress tracking functional
- [ ] User testing feedback positive (>80% satisfaction)

### Phase 5 (Cleanup)

- [ ] Bundle size reduced by >300KB
- [ ] Page load time improved by >20%
- [ ] Zero accessibility violations
- [ ] All tests passing (unit, integration, visual)

---

## Timeline Summary

| Phase | Duration | Key Deliverable |
|-------|----------|-----------------|
| Phase 1: Foundation | Week 1 | 1 working React Flow flowchart |
| Phase 2: Core Components | Week 2 | Migration script + reusable components |
| Phase 3: Batch Migration | Week 3 | All 29 flowcharts in both formats |
| Phase 4: Enhanced Features | Week 4 | Progress tracking, modern UI |
| Phase 5: Cleanup | Week 5 | Production-ready, Mermaid removed |

**Total Duration**: 5 weeks
**Effort**: ~120-150 hours

---

## Next Steps

1. **Review & Approve Plan**: Stakeholder sign-off
2. **Create GitHub Issues**: Break down tasks into trackable issues
3. **Set Up Project Board**: Track progress through phases
4. **Begin Phase 1**: Install react-flow, create POC

---

## References

- [React Flow Documentation](https://reactflow.dev/)
- [React Flow Examples](https://reactflow.dev/examples)
- [Dagre Layout Algorithm](https://github.com/dagrejs/dagre)
- [Current Mermaid Config](../../src/config/mermaid.config.ts)
- [Flowchart Type Definitions](../../src/types/flowchart.ts)

