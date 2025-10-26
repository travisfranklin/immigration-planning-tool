import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompactCountryRow } from './CompactCountryRow';
import type { ViabilityScore } from '../../types/viability';

// Mock viability score data
const mockScore: ViabilityScore = {
  id: 'score_AT_123',
  userId: 'user_123',
  countryCode: 'AT',
  countryName: 'Austria',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  componentScores: {
    career: 70,
    financial: 65,
    education: 60,
    language: 50,
    family: 55,
  },
  overallScore: 62,
  viabilityLevel: 'moderate',
  meetsHardRequirements: true,
  missingRequirements: [],
  competitiveScore: 62,
  riskFactors: [
    {
      id: 'risk_1',
      category: 'financial',
      severity: 'medium',
      description: 'Income slightly below recommended threshold',
      mitigation: 'Consider increasing savings or finding higher-paying job',
    },
    {
      id: 'risk_2',
      category: 'language',
      severity: 'medium',
      description: 'German language proficiency may be required',
      mitigation: 'Start learning German or take language courses',
    },
  ],
  overallRiskLevel: 'medium',
  contingencies: [],
  recommendedProgram: {
    programId: 'AT_RWR',
    programName: 'Red-White-Red Card',
    programType: 'work',
    eligibilityScore: 62,
    matchReason: 'Good match for skilled workers',
    alignsWithUserPath: true,
    alignsWithTimeline: true,
    requiresJobOffer: true,
  },
  alternativePrograms: [
    {
      programId: 'AT_STARTUP',
      programName: 'Startup Visa',
      programType: 'entrepreneur',
      eligibilityScore: 45,
      whyNotRecommended: 'Lower overall score (45 vs 62)',
    },
  ],
  estimatedTimelineMonths: 8,
  userPreferenceBoost: 0,
};

const mockScoreNotEligible: ViabilityScore = {
  ...mockScore,
  id: 'score_LT_123',
  countryCode: 'LT',
  countryName: 'Lithuania',
  overallScore: 18,
  viabilityLevel: 'very_low',
  meetsHardRequirements: false,
  missingRequirements: [
    'Minimum income requirement not met',
    'Language proficiency requirement not met',
  ],
  competitiveScore: 45,
};

describe('CompactCountryRow', () => {
  describe('Rendering - Collapsed State', () => {
    it('should render rank badge', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('#6')).toBeInTheDocument();
    });

    it('should render country name', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('Austria')).toBeInTheDocument();
    });

    it('should render overall score', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('62/100')).toBeInTheDocument();
    });

    it('should render recommended program name', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('Red-White-Red Card')).toBeInTheDocument();
    });

    it('should render viability badge for eligible country', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('moderate')).toBeInTheDocument();
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('should render "Not Eligible" badge for ineligible country', () => {
      render(
        <CompactCountryRow
          score={mockScoreNotEligible}
          rank={27}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getByText('Not Eligible')).toBeInTheDocument();
      expect(screen.getByText('⚠️')).toBeInTheDocument();
    });

    it('should not render expanded content initially', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Component scores should not be visible
      expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
      expect(screen.queryByText('View Full Details')).not.toBeInTheDocument();
    });
  });

  describe('Expand/Collapse Interaction', () => {
    it('should expand when clicked', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Click the row
      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      // Expanded content should be visible
      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
        expect(screen.getByText('View Full Details')).toBeInTheDocument();
      });
    });

    it('should collapse when clicked again', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
      });

      // Collapse
      await user.click(button);

      await waitFor(() => {
        expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
      });
    });

    it('should expand with Enter key', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      button.focus();
      await user.keyboard('{Enter}');

      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
      });
    });

    it('should expand with Space key', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      button.focus();
      await user.keyboard(' ');

      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
      });
    });

    it('should collapse with Escape key when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand first
      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
      });

      // Press Escape
      await user.keyboard('{Escape}');

      await waitFor(() => {
        expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
      });
    });
  });

  describe('Expanded Content', () => {
    it('should display component scores when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Component Scores')).toBeInTheDocument();
        expect(screen.getByText('70')).toBeInTheDocument(); // career
        expect(screen.getByText('65')).toBeInTheDocument(); // financial
        expect(screen.getByText('60')).toBeInTheDocument(); // education
        expect(screen.getByText('50')).toBeInTheDocument(); // language
        expect(screen.getByText('55')).toBeInTheDocument(); // family
      });
    });

    it('should display risk level when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Risk Level')).toBeInTheDocument();
        expect(screen.getByText(/medium/i)).toBeInTheDocument();
        expect(screen.getByText(/2 risks/i)).toBeInTheDocument();
      });
    });

    it('should display timeline when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Timeline')).toBeInTheDocument();
        expect(screen.getByText('8 months')).toBeInTheDocument();
      });
    });

    it('should display alternative programs count when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('+1 alternative program available')).toBeInTheDocument();
      });
    });

    it('should display missing requirements for ineligible country', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScoreNotEligible}
          rank={27}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Lithuania.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText('Missing Requirements')).toBeInTheDocument();
        expect(screen.getByText('Minimum income requirement not met')).toBeInTheDocument();
        expect(screen.getByText('Language proficiency requirement not met')).toBeInTheDocument();
      });
    });
  });

  describe('CTA Buttons', () => {
    it('should call onViewDetails when "View Full Details" is clicked', async () => {
      const user = userEvent.setup();
      const onViewDetails = vi.fn();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={onViewDetails}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand first
      const expandButton = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(expandButton);

      // Click "View Full Details"
      const detailsButton = await screen.findByRole('button', { name: 'View Full Details' });
      await user.click(detailsButton);

      expect(onViewDetails).toHaveBeenCalledWith('AT');
    });

    it('should call onViewFlowchart when "View Flowchart" is clicked', async () => {
      const user = userEvent.setup();
      const onViewFlowchart = vi.fn();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={onViewFlowchart}
        />
      );

      // Expand first
      const expandButton = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(expandButton);

      // Click "View Flowchart"
      const flowchartButton = await screen.findByRole('button', { name: /View Flowchart/i });
      await user.click(flowchartButton);

      expect(onViewFlowchart).toHaveBeenCalledWith('AT', 'AT_RWR');
    });

    it('should not render "View Flowchart" button when onViewFlowchart is not provided', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
        />
      );

      // Expand first
      const expandButton = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(expandButton);

      await waitFor(() => {
        expect(screen.getByText('View Full Details')).toBeInTheDocument();
      });

      expect(screen.queryByRole('button', { name: /View Flowchart/i })).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button).toHaveAttribute('aria-controls', 'country-details-AT');
    });

    it('should update aria-expanded when expanded', async () => {
      const user = userEvent.setup();
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', { name: /Austria.*Expand details/i });
      await user.click(button);

      await waitFor(() => {
        expect(button).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should have descriptive aria-label', () => {
      render(
        <CompactCountryRow
          score={mockScore}
          rank={6}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const button = screen.getByRole('button', {
        name: 'Austria, rank 6, score 62 out of 100. Expand details.',
      });
      expect(button).toBeInTheDocument();
    });
  });
});

