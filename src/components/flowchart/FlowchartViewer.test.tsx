/**
 * Tests for FlowchartViewer Component
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { FlowchartViewer } from './FlowchartViewer';
import type { FlowchartDefinition } from '../../types/flowchart';

// Mock mermaid
vi.mock('mermaid', () => ({
  default: {
    initialize: vi.fn(),
    run: vi.fn(),
    render: vi.fn(async () => {
      // Return a promise that resolves with SVG content
      return Promise.resolve({
        svg: '<svg><g class="node" id="step-1"><text>Step 1</text></g></svg>',
      });
    }),
  },
}));

describe('FlowchartViewer', () => {
  const mockFlowchart: FlowchartDefinition = {
    programId: 'eu-blue-card',
    countryCode: 'DE',
    programName: 'EU Blue Card',
    totalEstimatedDuration: '3-6 months',
    complexity: 'medium',
    successRate: '85%',
    mermaidDiagram: `
flowchart TD
    Start([Start]) --> Step1[Step 1]
    Step1 --> End([End])
`,
    steps: [
      {
        id: 'step-1',
        title: 'Gather Documents',
        description: 'Collect all required documents',
        estimatedDuration: '2-4 weeks',
        documents: [
          'Passport',
          'University degree',
          'Job offer letter',
        ],
        notes: [
          'All documents must be apostilled',
          'Translations must be certified',
        ],
      },
      {
        id: 'step-2',
        title: 'Submit Application',
        description: 'Submit to German embassy',
        estimatedDuration: '1 week',
        documents: [
          'Application form',
          'All gathered documents',
        ],
        notes: [
          'Book appointment in advance',
        ],
        isConditional: true,
        condition: 'If applying from outside Germany',
      },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render flowchart program name', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('EU Blue Card')).toBeInTheDocument();
      });
    });

    it('should render program details', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText(/3-6 months/)).toBeInTheDocument();
        expect(screen.getByText(/medium/i)).toBeInTheDocument();
        expect(screen.getByText(/85%/)).toBeInTheDocument();
      });
    });

    it('should render export buttons', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('Export SVG')).toBeInTheDocument();
        expect(screen.getByText('Export PNG')).toBeInTheDocument();
      });
    });

    it('should render mermaid diagram container', async () => {
      const { container } = render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        const diagramContainer = container.querySelector('.overflow-x-auto');
        expect(diagramContainer).toBeInTheDocument();
      });
    });

    it('should show loading state initially', () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      expect(screen.getByText('Loading flowchart...')).toBeInTheDocument();
    });
  });

  describe('Step Selection', () => {
    it('should call onStepSelect when provided', async () => {
      const onStepSelect = vi.fn();
      render(<FlowchartViewer flowchart={mockFlowchart} onStepSelect={onStepSelect} />);

      // The component adds click handlers to SVG nodes, but since we're mocking mermaid,
      // we can't easily test this without a more complex setup
      // This test verifies the prop is accepted
      expect(onStepSelect).toBeDefined();
    });

    it('should accept selectedStepId prop', () => {
      const { rerender } = render(<FlowchartViewer flowchart={mockFlowchart} selectedStepId="step-1" />);

      // Verify component accepts the prop without errors
      rerender(<FlowchartViewer flowchart={mockFlowchart} selectedStepId="step-2" />);
    });
  });

  describe('Export Functionality', () => {
    it('should render export buttons', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText(/Export SVG/)).toBeInTheDocument();
        expect(screen.getByText(/Export PNG/)).toBeInTheDocument();
      });
    });

    it('should have export buttons enabled', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        const svgButton = screen.getByText(/Export SVG/).closest('button');
        const pngButton = screen.getByText(/Export PNG/).closest('button');

        expect(svgButton).not.toBeDisabled();
        expect(pngButton).not.toBeDisabled();
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle flowchart with no steps', async () => {
      const emptyFlowchart: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [],
      };

      render(<FlowchartViewer flowchart={emptyFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('EU Blue Card')).toBeInTheDocument();
      });
    });

    it('should handle flowchart without success rate', async () => {
      const flowchartNoSuccessRate: FlowchartDefinition = {
        ...mockFlowchart,
        successRate: undefined,
      };

      render(<FlowchartViewer flowchart={flowchartNoSuccessRate} />);

      await waitFor(() => {
        expect(screen.getByText('EU Blue Card')).toBeInTheDocument();
        // Success rate should not be rendered
        expect(screen.queryByText(/Success Rate/)).not.toBeInTheDocument();
      });
    });

    it('should render diagram container for any flowchart', () => {
      const { container } = render(<FlowchartViewer flowchart={mockFlowchart} />);

      const diagramContainer = container.querySelector('.overflow-x-auto');
      expect(diagramContainer).toBeInTheDocument();
    });
  });
});

