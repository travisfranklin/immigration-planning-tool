import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CountryResultsTable } from './CountryResultsTable';
import type { ViabilityScore } from '../../types/viability';

const mockScore: ViabilityScore = {
  id: 'test-score-1',
  userId: 'test-user',
  countryCode: 'DE',
  countryName: 'Germany',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  overallScore: 85,
  viabilityLevel: 'excellent',
  meetsHardRequirements: true,
  competitiveScore: 85,
  userPreferenceBoost: 5,
  componentScores: {
    career: 80,
    financial: 90,
    education: 85,
    language: 75,
    family: 70,
  },
  recommendedProgram: {
    programId: 'de-blue-card',
    programName: 'EU Blue Card',
    programType: 'work',
    eligibilityScore: 85,
    componentScores: { career: 90, financial: 90, education: 85, language: 75, family: 70 },
    overallScore: 85,
    matchReason: 'Strong match',
    alignsWithUserPath: true,
    alignsWithTimeline: true,
    requiresJobOffer: true,
    riskFactors: [],
    overallRiskLevel: 'low',
    contingencies: [],
    meetsHardRequirements: true,
    missingRequirements: [],
    estimatedTimelineMonths: 6,
  },
  alternativePrograms: [],
  riskFactors: [],
  contingencies: [],
  overallRiskLevel: 'low',
  estimatedTimelineMonths: 6,
  missingRequirements: [],
};

const mockScoreNotEligible: ViabilityScore = {
  ...mockScore,
  id: 'test-score-2',
  countryCode: 'FR',
  countryName: 'France',
  overallScore: 45,
  viabilityLevel: 'low',
  meetsHardRequirements: false,
  missingRequirements: ['Bachelor degree required', 'French language proficiency required'],
};

describe('CountryResultsTable', () => {
  describe('Rendering', () => {
    it('renders DataCard grid with all scores', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
        />
      );

      // Check both countries are rendered in DataCard titles
      expect(screen.getByText(/#1 DE Germany/)).toBeInTheDocument();
      expect(screen.getByText(/#2 FR France/)).toBeInTheDocument();
    });

    it('renders rank badges correctly in DataCard titles', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
        />
      );

      // Check ranks in titles
      expect(screen.getByText(/#1 DE Germany/)).toBeInTheDocument();
      expect(screen.getByText(/#2 FR France/)).toBeInTheDocument();
    });

    it('renders scores with correct values', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Score should be rendered (85/100 for excellent)
      expect(screen.getByText('85')).toBeInTheDocument();
      expect(screen.getByText('/100')).toBeInTheDocument();
    });

    it('renders viability badges', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
        />
      );

      // Check viability badges
      expect(screen.getByText('excellent')).toBeInTheDocument();
      expect(screen.getByText('Not Eligible')).toBeInTheDocument();
    });

    it('renders recommended program names as subtitles', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Program name appears as DataCard subtitle
      expect(screen.getByText('EU Blue Card')).toBeInTheDocument();
    });

    it('renders View Details button', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Check for View Details button
      expect(screen.getByText('View Details →')).toBeInTheDocument();
    });

    it('renders timeline and risk information', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Check quick stats
      expect(screen.getByText('Timeline:')).toBeInTheDocument();
      expect(screen.getByText('6 months')).toBeInTheDocument();
      expect(screen.getByText('Risk:')).toBeInTheDocument();
      expect(screen.getByText('low')).toBeInTheDocument();
    });
  });

  describe('Button Interactions', () => {
    it('calls onViewDetails when View Details button is clicked', () => {
      const mockOnViewDetails = vi.fn();
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={mockOnViewDetails}
        />
      );

      // Click View Details button
      const detailsButton = screen.getByText('View Details →');
      fireEvent.click(detailsButton);

      // Should call onViewDetails with country code
      expect(mockOnViewDetails).toHaveBeenCalledWith('DE');
    });

    it('calls onViewDetails with correct country code for multiple scores', () => {
      const mockOnViewDetails = vi.fn();
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={mockOnViewDetails}
        />
      );

      // Click second View Details button (France)
      const detailsButtons = screen.getAllByText('View Details →');
      fireEvent.click(detailsButtons[1]);

      // Should call onViewDetails with France's country code
      expect(mockOnViewDetails).toHaveBeenCalledWith('FR');
    });
  });

  describe('DataCard Grid Layout', () => {
    it('renders grid container with correct classes', () => {
      const { container } = render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Check for grid layout classes
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3');
    });

    it('renders multiple DataCards in grid', () => {
      const scores = [mockScore, mockScoreNotEligible];
      const { container } = render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
        />
      );

      // Should have 2 DataCards
      const cards = container.querySelectorAll('.border-2');
      expect(cards.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('Badge Variants', () => {
    it('renders correct badge variant for eligible country', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Should show excellent badge with checkmark
      expect(screen.getByText('excellent')).toBeInTheDocument();
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('renders not-eligible badge for ineligible country', () => {
      render(
        <CountryResultsTable
          scores={[mockScoreNotEligible]}
          onViewDetails={vi.fn()}
        />
      );

      // Should show Not Eligible badge with warning icon
      expect(screen.getByText('Not Eligible')).toBeInTheDocument();
      expect(screen.getByText('⚠️')).toBeInTheDocument();
    });
  });

  describe('Color Coding', () => {
    it('applies correct color variant based on score', () => {
      const { container } = render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Score 85 (>=80) uses 'success' variant via getDataCardVariant
      // DataCard applies 'text-success-dark' class for success variant
      const successElements = container.querySelectorAll('.text-success-dark');
      expect(successElements.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('has accessible button labels', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // View Details button should be accessible
      const detailsButton = screen.getByText('View Details →');
      expect(detailsButton).toBeInTheDocument();
      expect(detailsButton.tagName).toBe('BUTTON');
    });

    it('buttons are keyboard accessible', () => {
      const mockOnViewDetails = vi.fn();
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={mockOnViewDetails}
        />
      );

      const detailsButton = screen.getByText('View Details →');

      // Should be focusable
      detailsButton.focus();
      expect(document.activeElement).toBe(detailsButton);
    });
  });
});

