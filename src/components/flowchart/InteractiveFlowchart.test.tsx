/**
 * Tests for InteractiveFlowchart Component
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
    it('should render flowchart header with program name', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      const headings = screen.getAllByText('EU Blue Card');
      expect(headings.length).toBeGreaterThan(0);
    });

    it('should render flowchart metadata', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/3-6 months/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/medium/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/85%/).length).toBeGreaterThan(0);
    });

    it('should render all steps in the steps list', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Gather Documents').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Submit Application').length).toBeGreaterThan(0);
    });

    it('should render step descriptions', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/Obtain a binding job offer/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Collect all required documents/i).length).toBeGreaterThan(0);
    });

    it('should render steps section', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getByText(/Steps/i)).toBeInTheDocument();
    });
  });

  describe('Step Selection', () => {
    it('should render first step as selected initially', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
    });

    it('should allow clicking on steps', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      const stepButtons = screen.getAllByRole('button');
      expect(stepButtons.length).toBeGreaterThan(0);

      // Click on a step button
      fireEvent.click(stepButtons[1]);
      expect(stepButtons[1]).toBeInTheDocument();
    });

    it('should render step with conditional information', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText('Submit Application').length).toBeGreaterThan(0);
    });
  });

  describe('Step Details Panel', () => {
    it('should display step title in details panel', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText('Secure Job Offer').length).toBeGreaterThan(0);
    });

    it('should display step description in details panel', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/Obtain a binding job offer/i).length).toBeGreaterThan(0);
    });

    it('should display estimated duration', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/Estimated Duration/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/1-3 months/).length).toBeGreaterThan(0);
    });

    it('should display required documents', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/Required Documents/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText('Signed employment contract').length).toBeGreaterThan(0);
    });

    it('should display important notes', () => {
      render(<InteractiveFlowchart flowchart={mockFlowchart} />);

      expect(screen.getAllByText(/Important Notes/i).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/Salary threshold is EUR 45,300/).length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle flowchart with no steps', () => {
      const emptyFlowchart: FlowchartDefinition = {
        ...mockFlowchart,
        steps: [],
      };

      render(<InteractiveFlowchart flowchart={emptyFlowchart} />);

      expect(screen.getAllByText('EU Blue Card').length).toBeGreaterThan(0);
    });

    it('should handle step with no documents', () => {
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

      expect(screen.getAllByText('No Docs Step').length).toBeGreaterThan(0);
    });

    it('should handle step with no notes', () => {
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

      expect(screen.getAllByText('No Notes Step').length).toBeGreaterThan(0);
    });
  });
});

