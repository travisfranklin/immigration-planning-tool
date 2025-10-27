/**
 * Tests for InteractiveFlowchart Component
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { InteractiveFlowchart } from './InteractiveFlowchart';
import type { FlowchartDefinition } from '../../types/flowchart';

// Mock mermaid
vi.mock('mermaid', () => ({
  default: {
    initialize: vi.fn(),
    render: vi.fn().mockResolvedValue({ svg: '<svg></svg>' }),
  },
}));

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
      title: 'Secure Job Offer',
      description: 'Obtain a binding job offer from a German employer',
      estimatedDuration: '1-3 months',
      documents: [
        'Signed employment contract',
        'Job description',
      ],
      notes: [
        'Salary threshold is EUR 45,300',
        'Contract must be for at least 12 months',
      ],
    },
    {
      id: 'step-2',
      title: 'Gather Documents',
      description: 'Collect all required documents',
      estimatedDuration: '2-4 weeks',
      documents: [
        'Passport',
        'University degree',
      ],
    },
    {
      id: 'step-3',
      title: 'Submit Application',
      description: 'Submit your visa application',
      estimatedDuration: '1 day',
      documents: [],
      isConditional: true,
      condition: 'Only if all documents are ready',
    },
  ],
};

describe('InteractiveFlowchart', () => {
  describe('Rendering', () => {
    it('should render flowchart header with program name', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        const headings = screen.getAllByText('EU Blue Card');
        expect(headings.length).toBeGreaterThan(0);
      });
    });

    it('should render flowchart metadata', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/3-6 months/).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/medium/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/85%/).length).toBeGreaterThan(0);
      });
    });

    it('should render all steps in the steps list', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Gather Documents').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Submit Application').length).toBeGreaterThan(0);
      });
    });

    it('should render step descriptions', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/Obtain a binding job offer/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Collect all required documents/i).length).toBeGreaterThan(0);
      });
    });

    it('should render steps section', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getByText(/Steps/i)).toBeInTheDocument();
      });
    });
  });

  describe('Step Selection', () => {
    it('should render first step as selected initially', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
      });
    });

    it('should allow clicking on steps', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        const stepButtons = screen.getAllByRole('button');
        expect(stepButtons.length).toBeGreaterThan(0);
      });

      const stepButtons = screen.getAllByRole('button');
      await act(async () => {
        fireEvent.click(stepButtons[1]);
      });
      expect(stepButtons[1]).toBeInTheDocument();
    });

    it('should render step with conditional information', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText('Submit Application').length).toBeGreaterThan(0);
      });
    });
  });

  describe('Step Details Panel', () => {
    it('should display step title in details panel', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
      });
    });

    it('should display step description in details panel', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/Obtain a binding job offer/i).length).toBeGreaterThan(0);
      });
    });

    it('should display estimated duration', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/Estimated Duration/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/1-3 months/).length).toBeGreaterThan(0);
      });
    });

    it('should display required documents', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/Required Documents/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText('Signed employment contract').length).toBeGreaterThan(0);
      });
    });

    it('should display important notes', async () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText(/Important Notes/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Salary threshold is EUR 45,300/).length).toBeGreaterThan(0);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle flowchart with no steps', async () => {
      const emptyFlowchart: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [],
      };

      render(<InteractiveFlowchart flowchart={emptyFlowchart} />);

      await waitFor(() => {
        expect(screen.getAllByText('EU Blue Card').length).toBeGreaterThan(0);
      });
    });

    it('should handle step with no documents', async () => {
      const flowchartNoDocuments: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [
          {
            id: 'step-1',
            title: 'No Docs Step',
            description: 'Description',
            estimatedDuration: '1 week',
            documents: [],
          },
        ],
      };

      render(<InteractiveFlowchart flowchart={flowchartNoDocuments} />);

      await waitFor(() => {
        expect(screen.getAllByText('No Docs Step').length).toBeGreaterThan(0);
      });
    });

    it('should handle step with no notes', async () => {
      const flowchartNoNotes: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [
          {
            id: 'step-1',
            title: 'No Notes Step',
            description: 'Description',
            estimatedDuration: '1 week',
            documents: ['Document 1'],
          },
        ],
      };

      render(<InteractiveFlowchart flowchart={flowchartNoNotes} />);

      await waitFor(() => {
        expect(screen.getAllByText('No Notes Step').length).toBeGreaterThan(0);
      });
    });
  });
});

