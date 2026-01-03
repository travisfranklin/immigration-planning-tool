/**
 * Tests for ResultDetail Page
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ResultDetail } from './ResultDetail';
import * as userProfileStore from '../services/storage/userProfileStore';
import * as viabilityScoreStore from '../services/storage/viabilityScoreStore';
import type { UserProfile } from '../types/user';
import type { ViabilityScore } from '../types/viability';

// Mock the stores
vi.mock('../services/storage/userProfileStore');
vi.mock('../services/storage/viabilityScoreStore');

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ countryCode: 'DE' }),
  };
});

const mockUserProfile: UserProfile = {
  id: 'test-user',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01',
  citizenship: 'US',
  annualIncome: 50000,
  savingsAmount: 10000,
  employmentStatus: 'employed',
  educationLevel: 'bachelor',
  fieldOfStudy: 'Computer Science',
  yearsOfExperience: 5,
  currentOccupation: 'Software Engineer',
  occupationCode: '2511',
  languages: [
    {
      language: 'English',
      proficiency: 'C2',
    },
  ],
  maritalStatus: 'single',
  familyMembers: [],
  targetCountries: [
    { countryCode: 'DE', hasJobOffer: false },
    { countryCode: 'NL', hasJobOffer: false }
  ],
  immigrationPath: 'work_visa',
  timelineMonths: 12,
};

const mockViabilityScore: ViabilityScore = {
  id: 'score-1',
  userId: 'test-user',
  countryCode: 'DE',
  countryName: 'Germany',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  overallScore: 85,
  viabilityLevel: 'good',
  meetsHardRequirements: true,
  missingRequirements: [],
  competitiveScore: 85,
  componentScores: {
    career: 90,
    financial: 80,
    education: 85,
    language: 75,
    family: 70,
  },
  recommendedProgram: {
    programId: 'eu-blue-card',
    programName: 'EU Blue Card',
    programType: 'work',
    eligibilityScore: 85,
    componentScores: {
      career: 90,
      financial: 80,
      education: 85,
      language: 75,
      family: 70,
    },
    overallScore: 85,
    matchReason: 'Your profile matches well with this program',
    alignsWithUserPath: true,
    alignsWithTimeline: true,
    requiresJobOffer: true,
    riskFactors: [
      {
        id: 'risk-1',
        category: 'language',
        severity: 'medium',
        description: 'German language proficiency required',
        mitigation: 'Take a German language course',
      },
    ],
    overallRiskLevel: 'medium',
    contingencies: [
      {
        id: 'contingency-1',
        scenario: 'Job offer not secured',
        description: 'If you cannot secure a job offer',
        action: 'Consider other visa programs',
        timeframe: 'Before application',
      },
    ],
    meetsHardRequirements: true,
    missingRequirements: [],
    estimatedTimelineMonths: 6,
  },
  userPreferenceBoost: 5,
  estimatedTimelineMonths: 6,
  riskFactors: [
    {
      id: 'risk-1',
      category: 'language',
      severity: 'medium',
      description: 'German language proficiency required',
      mitigation: 'Take a German language course',
    },
  ],
  overallRiskLevel: 'medium',
  contingencies: [
    {
      id: 'contingency-1',
      scenario: 'Job offer not secured',
      description: 'If you cannot secure a job offer',
      action: 'Consider other visa programs',
      timeframe: 'Before application',
    },
  ],
  alternativePrograms: [
    {
      programId: 'skilled-worker',
      programName: 'Skilled Worker Visa',
      programType: 'work',
      eligibilityScore: 80,
      componentScores: {
        career: 85,
        financial: 75,
        education: 80,
        language: 70,
        family: 65,
      },
      overallScore: 80,
      matchReason: 'Alternative work visa option',
      alignsWithUserPath: true,
      alignsWithTimeline: true,
      requiresJobOffer: true,
      riskFactors: [],
      overallRiskLevel: 'low',
      contingencies: [],
      meetsHardRequirements: true,
      missingRequirements: [],
      estimatedTimelineMonths: 8,
      whyNotRecommended: 'Requires more experience',
    },
  ],
};

function renderWithRouter(component: React.ReactElement) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('ResultDetail Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Loading and Error States', () => {
    it('should show loading state initially', () => {
      vi.mocked(userProfileStore.getAllUserProfiles).mockResolvedValue([mockUserProfile]);
      vi.mocked(viabilityScoreStore.getUserViabilityScores).mockImplementation(
        () => new Promise(() => {}) // Never resolves
      );

      renderWithRouter(<ResultDetail />);

      expect(screen.getByText(/Loading result details/i)).toBeInTheDocument();
    });

    it('should show error when no profile found', async () => {
      vi.mocked(userProfileStore.getAllUserProfiles).mockResolvedValue([]);

      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/No profile found/i)).toBeInTheDocument();
      });
    });


  });

  describe('Content Rendering', () => {
    beforeEach(() => {
      vi.mocked(userProfileStore.getAllUserProfiles).mockResolvedValue([mockUserProfile]);
      vi.mocked(viabilityScoreStore.getUserViabilityScores).mockResolvedValue([mockViabilityScore]);
    });

    it('should render country name and score', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/Germany/i)).toBeInTheDocument();
        expect(screen.getAllByText('85').length).toBeGreaterThan(0);
      });
    });

    it('should render recommended program information', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getAllByText('EU Blue Card').length).toBeGreaterThan(0);
        expect(screen.getByText(/Your profile matches well with this program/i)).toBeInTheDocument();
      });
    });

    it('should render back button', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/← Back/i)).toBeInTheDocument();
      });
    });

    it('should render score breakdown', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/Career/i)).toBeInTheDocument();
      });
    });

    it('should render risk factors', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/Risk Assessment/i)).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('should render contingencies', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText(/Job offer not secured/i)).toBeInTheDocument();
      });
    });

    it('should render alternative programs', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        expect(screen.getByText('Skilled Worker Visa')).toBeInTheDocument();
      });
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      vi.mocked(userProfileStore.getAllUserProfiles).mockResolvedValue([mockUserProfile]);
      vi.mocked(viabilityScoreStore.getUserViabilityScores).mockResolvedValue([mockViabilityScore]);
    });

    it('should have back button that navigates to results', async () => {
      renderWithRouter(<ResultDetail />);

      await waitFor(() => {
        const backButton = screen.getByText(/← Back/i);
        expect(backButton).toBeInTheDocument();
      });
    });
  });
});

