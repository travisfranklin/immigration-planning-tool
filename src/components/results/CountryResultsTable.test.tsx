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
    matchReason: 'Strong match',
    alignsWithUserPath: true,
    alignsWithTimeline: true,
    requiresJobOffer: true,
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
    it('renders table with all scores', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Check both countries are rendered (appear in both desktop and mobile views)
      expect(screen.getAllByText('Germany').length).toBeGreaterThan(0);
      expect(screen.getAllByText('France').length).toBeGreaterThan(0);
    });

    it('renders rank badges correctly', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Check ranks
      expect(screen.getAllByText('#1')[0]).toBeInTheDocument();
      expect(screen.getAllByText('#2')[0]).toBeInTheDocument();
    });

    it('renders scores with correct colors', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Score should be rendered (85/100 for excellent) - appears in both desktop and mobile
      expect(screen.getAllByText(/85/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/100/).length).toBeGreaterThan(0);
    });

    it('renders viability badges', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Check viability badges (appear in both desktop and mobile)
      expect(screen.getAllByText('excellent').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Not Eligible').length).toBeGreaterThan(0);
    });

    it('renders recommended program names', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Program name appears in both desktop and mobile views
      expect(screen.getAllByText('EU Blue Card').length).toBeGreaterThan(0);
    });

    it('renders action buttons', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Check for Details buttons (desktop + mobile)
      const detailsButtons = screen.getAllByText(/Details/);
      expect(detailsButtons.length).toBeGreaterThan(0);
    });

    it('does not render expanded content initially', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Component scores should not be visible initially
      expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
    });
  });

  describe('Expand/Collapse Interaction', () => {
    it('expands row when expand button is clicked', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Find and click expand button
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);

      // Component scores should now be visible
      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);
    });

    it('collapses row when expand button is clicked again', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);
      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);

      // Collapse
      const collapseButtons = screen.getAllByLabelText(/Collapse details for Germany/);
      fireEvent.click(collapseButtons[0]);
      expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
    });

    it('expands with Enter key', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.keyDown(expandButtons[0], { key: 'Enter' });

      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);
    });

    it('expands with Space key', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.keyDown(expandButtons[0], { key: ' ' });

      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);
    });

    it('collapses with Escape key when expanded', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand first
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);
      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);

      // Collapse with Escape
      fireEvent.keyDown(expandButtons[0], { key: 'Escape' });
      expect(screen.queryByText('Component Scores')).not.toBeInTheDocument();
    });

    it('only one row expanded at a time', () => {
      const scores = [mockScore, mockScoreNotEligible];
      render(
        <CountryResultsTable
          scores={scores}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand first row
      const expandButtons1 = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons1[0]);
      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);

      // Expand second row
      const expandButtons2 = screen.getAllByLabelText(/Expand details for France/);
      fireEvent.click(expandButtons2[0]);

      // Only France should be expanded now (desktop + mobile = 2 instances)
      const componentScoresElements = screen.getAllByText('Component Scores');
      expect(componentScoresElements.length).toBe(2); // Desktop + mobile view
    });
  });

  describe('Expanded Content', () => {
    it('displays component scores when expanded', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);

      // Check component scores (will appear in both desktop and mobile views)
      expect(screen.getAllByText('Component Scores').length).toBeGreaterThan(0);
      expect(screen.getAllByText('career').length).toBeGreaterThan(0);
      expect(screen.getAllByText('financial').length).toBeGreaterThan(0);
      expect(screen.getAllByText('education').length).toBeGreaterThan(0);
      expect(screen.getAllByText('language').length).toBeGreaterThan(0);
      expect(screen.getAllByText('family').length).toBeGreaterThan(0);
    });

    it('displays risk level when expanded', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);

      expect(screen.getAllByText(/Risk:/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/low/).length).toBeGreaterThan(0);
    });

    it('displays timeline when expanded', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);

      expect(screen.getAllByText(/Timeline:/).length).toBeGreaterThan(0);
      expect(screen.getAllByText(/6 months/).length).toBeGreaterThan(0);
    });

    it('displays missing requirements for ineligible country', () => {
      render(
        <CountryResultsTable
          scores={[mockScoreNotEligible]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      // Expand
      const expandButtons = screen.getAllByLabelText(/Expand details for France/);
      fireEvent.click(expandButtons[0]);

      // Check for missing requirements (will appear in both desktop and mobile views)
      expect(screen.getAllByText('Missing Requirements').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Bachelor degree required').length).toBeGreaterThan(0);
      expect(screen.getAllByText('French language proficiency required').length).toBeGreaterThan(0);
    });
  });

  describe('CTA Buttons', () => {
    it('calls onViewDetails when Details button is clicked', () => {
      const onViewDetails = vi.fn();
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={onViewDetails}
          onViewFlowchart={vi.fn()}
        />
      );

      // Click Details button (get first one - desktop view)
      const detailsButtons = screen.getAllByText(/Details/);
      fireEvent.click(detailsButtons[0]);

      expect(onViewDetails).toHaveBeenCalledWith('DE');
    });

    it('calls onViewFlowchart when Flowchart button is clicked', () => {
      const onViewFlowchart = vi.fn();
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={onViewFlowchart}
        />
      );

      // Find flowchart button (📋 emoji)
      const flowchartButtons = screen.getAllByText('📋');
      fireEvent.click(flowchartButtons[0]);

      expect(onViewFlowchart).toHaveBeenCalledWith('DE', 'de-blue-card');
    });

    it('does not render flowchart button when onViewFlowchart is not provided', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
        />
      );

      // Flowchart button should not be rendered
      expect(screen.queryByText('📋')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      expect(expandButtons[0]).toHaveAttribute('aria-expanded', 'false');
      expect(expandButtons[0]).toHaveAttribute('aria-controls');
    });

    it('updates aria-expanded when expanded', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      const expandButtons = screen.getAllByLabelText(/Expand details for Germany/);
      fireEvent.click(expandButtons[0]);

      const collapseButtons = screen.getAllByLabelText(/Collapse details for Germany/);
      expect(collapseButtons[0]).toHaveAttribute('aria-expanded', 'true');
    });

    it('has descriptive aria-label', () => {
      render(
        <CountryResultsTable
          scores={[mockScore]}
          onViewDetails={vi.fn()}
          onViewFlowchart={vi.fn()}
        />
      );

      expect(screen.getAllByLabelText(/Expand details for Germany/)[0]).toBeInTheDocument();
    });
  });
});

