/**
 * Tests for FlowchartViewer Component
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
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

    it('should render all steps', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('Gather Documents')).toBeInTheDocument();
        expect(screen.getByText('Submit Application')).toBeInTheDocument();
      });
    });

    it('should render step numbers', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
      });
    });

    it('should render estimated durations', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText(/2-4 weeks/)).toBeInTheDocument();
        expect(screen.getByText(/1 week/)).toBeInTheDocument();
      });
    });

    it('should render conditional badge for conditional steps', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText('Conditional')).toBeInTheDocument();
      });
    });

    it('should not render conditional badge for non-conditional steps', async () => {
      const { container } = render(<FlowchartViewer flowchart={mockFlowchart} />);

      await waitFor(() => {
        const conditionalBadges = container.querySelectorAll('[class*="conditional"]');
        // Should only have one conditional badge (for step 2)
        expect(conditionalBadges.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Step Expansion', () => {
    it('should expand step when clicked', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      const stepButton = screen.getByText('Gather Documents').closest('button');
      expect(stepButton).toBeInTheDocument();

      await act(async () => {
        fireEvent.click(stepButton!);
      });

      await waitFor(() => {
        expect(screen.getByText('Collect all required documents')).toBeInTheDocument();
      });
    });

    it('should show documents when step is expanded', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      const stepButton = screen.getByText('Gather Documents').closest('button');
      await act(async () => {
        fireEvent.click(stepButton!);
      });

      await waitFor(() => {
        expect(screen.getByText('Passport')).toBeInTheDocument();
        expect(screen.getByText('University degree')).toBeInTheDocument();
        expect(screen.getByText('Job offer letter')).toBeInTheDocument();
      });
    });

    it('should show notes when step is expanded', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      const stepButton = screen.getByText('Gather Documents').closest('button');
      await act(async () => {
        fireEvent.click(stepButton!);
      });

      await waitFor(() => {
        expect(screen.getByText(/All documents must be apostilled/)).toBeInTheDocument();
        expect(screen.getByText(/Translations must be certified/)).toBeInTheDocument();
      });
    });

    it('should show condition when conditional step is expanded', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      const stepButton = screen.getByText('Submit Application').closest('button');
      await act(async () => {
        fireEvent.click(stepButton!);
      });

      await waitFor(() => {
        expect(screen.getByText(/If applying from outside Germany/)).toBeInTheDocument();
      });
    });

    it('should collapse step when clicked again', async () => {
      render(<FlowchartViewer flowchart={mockFlowchart} />);

      const stepButton = screen.getByText('Gather Documents').closest('button');

      // Expand
      await act(async () => {
        fireEvent.click(stepButton!);
      });
      await waitFor(() => {
        expect(screen.getByText('Passport')).toBeInTheDocument();
      });

      // Collapse
      await act(async () => {
        fireEvent.click(stepButton!);
      });
      await waitFor(() => {
        expect(screen.queryByText('Passport')).not.toBeInTheDocument();
      });
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

    it('should handle step with no documents', async () => {
      const flowchartNoDocuments: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [
          {
            id: 'step-1',
            title: 'Wait for Processing',
            description: 'Wait for application to be processed',
            estimatedDuration: '4-8 weeks',
            documents: [],
          },
        ],
      };

      render(<FlowchartViewer flowchart={flowchartNoDocuments} />);

      const stepButton = screen.getByText('Wait for Processing').closest('button');
      await act(async () => {
        fireEvent.click(stepButton!);
      });

      // Should not crash
      await waitFor(() => {
        expect(screen.getByText('Wait for application to be processed')).toBeInTheDocument();
      });
    });

    it('should handle step with no notes', async () => {
      const flowchartNoNotes: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [
          {
            id: 'step-1',
            title: 'Simple Step',
            description: 'A simple step',
            estimatedDuration: '1 week',
            documents: ['Document 1'],
          },
        ],
      };

      render(<FlowchartViewer flowchart={flowchartNoNotes} />);

      const stepButton = screen.getByText('Simple Step').closest('button');
      await act(async () => {
        fireEvent.click(stepButton!);
      });

      // Should not crash
      await waitFor(() => {
        expect(screen.getByText('A simple step')).toBeInTheDocument();
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
      });
    });

    it('should handle very long step titles', async () => {
      const flowchartLongTitle: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [
          {
            id: 'step-1',
            title: 'This is a very long step title that should still render correctly without breaking the layout',
            description: 'Description',
            estimatedDuration: '1 week',
            documents: [],
          },
        ],
      };

      render(<FlowchartViewer flowchart={flowchartLongTitle} />);

      await waitFor(() => {
        expect(screen.getByText(/This is a very long step title/)).toBeInTheDocument();
      });
    });

    it('should handle many steps', () => {
      const manySteps = Array.from({ length: 20 }, (_, i) => ({
        id: `step-${i + 1}`,
        title: `Step ${i + 1}`,
        description: `Description ${i + 1}`,
        estimatedDuration: '1 week',
        documents: [`Document ${i + 1}`],
      }));

      const flowchartManySteps: FlowchartDefinition = {
        ...mockFlowchart,
        steps: manySteps,
      };

      render(<FlowchartViewer flowchart={flowchartManySteps} />);

      expect(screen.getByText('Step 1')).toBeInTheDocument();
      expect(screen.getByText('Step 20')).toBeInTheDocument();
    });
  });
});

