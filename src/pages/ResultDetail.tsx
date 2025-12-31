/**
 * ResultDetail Page
 * Displays detailed country information with interactive flowchart
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import type { ViabilityScore } from '../types/viability';
import { ScoreBreakdown } from '../components/results/ScoreBreakdown';
import { RiskFactorsList } from '../components/results/RiskFactorsList';
import { ContingenciesList } from '../components/results/ContingenciesList';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorState } from '../components/ErrorState';
import { InteractiveFlowchart } from '../components/flowchart/InteractiveFlowchart';
import { AlternativeProgramsList } from '../components/results/AlternativeProgramsList';
import { isValidCountryCode } from '../constants/countries';
import {
  decodeResultsFromUrl,
  isValidViabilityScore,
  generateShareUrl,
  copyToClipboard,
} from '../utils/shareableResults';
import { ALL_FLOWCHARTS } from '../data/flowcharts';

export const ResultDetail: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedScore, setSelectedScore] = useState<ViabilityScore | null>(null);
  const [isSharedView, setIsSharedView] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);

  useEffect(() => {
    loadResultDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode, searchParams]);

  const loadResultDetail = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check for encoded results in URL first (shared view)
      const encodedResults = searchParams.get('results');

      if (encodedResults) {
        try {
          const decodedScore = decodeResultsFromUrl(encodedResults);

          if (!isValidViabilityScore(decodedScore)) {
            throw new Error('Invalid viability score data');
          }

          setSelectedScore(decodedScore);
          setIsSharedView(true);
          setIsLoading(false);
          return;
        } catch (err) {
          console.error('Failed to load shared results:', err);
          setError('Invalid or corrupted shared results. Please request a new share link.');
          setIsLoading(false);
          return;
        }
      }

      // Original logic: Load from IndexedDB
      if (!countryCode || !isValidCountryCode(countryCode)) {
        setError('Invalid country code');
        setIsLoading(false);
        return;
      }

      // Get user profile
      const profiles = await getAllUserProfiles();
      if (profiles.length === 0) {
        setError('No profile found. Please complete your profile first.');
        setIsLoading(false);
        return;
      }

      // Get viability scores
      const scores = await getUserViabilityScores(profiles[0].id);
      const score = scores.find((s) => s.countryCode === countryCode);

      if (!score) {
        setError(`No viability score found for ${countryCode}`);
        setIsLoading(false);
        return;
      }

      setSelectedScore(score);
      setIsLoading(false);
    } catch (err) {
      console.error('Error loading result detail:', err);
      setError('Failed to load result details. Please try again.');
      setIsLoading(false);
    }
  };

  const handleShareResults = async () => {
    if (!selectedScore) return;

    try {
      const shareUrl = generateShareUrl(selectedScore);
      const copied = await copyToClipboard(shareUrl);

      if (copied) {
        setCopySuccess(true);
        // Reset success message after 2 seconds
        setTimeout(() => setCopySuccess(false), 2000);
      } else {
        alert('Failed to copy link. Please try again.');
      }
    } catch (error) {
      console.error('Share error:', error);
      alert('Failed to generate share link. Please try again.');
    }
  };

  if (isLoading) {
    return <LoadingSpinner fullScreen size="lg" message="Loading result details..." />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        actionText="Back to Results"
        onAction={() => navigate('/results')}
      />
    );
  }

  if (!selectedScore) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Not Found</h2>
          <p className="text-gray-600 mb-4 text-center">Result details not found</p>
          <Button
            onClick={() => navigate('/results')}
            className="w-full"
          >
            Back to Results
          </Button>
        </div>
      </div>
    );
  }

  const countryFlowcharts = countryCode && isValidCountryCode(countryCode) ? ALL_FLOWCHARTS[countryCode] : undefined;

  // Determine which program's flowchart to display
  // If selectedProgramId is set, use that; otherwise use the recommended program
  const activeProgramId = selectedProgramId || selectedScore.recommendedProgram?.programId;
  const activeFlowchart = activeProgramId && countryFlowcharts
    ? countryFlowcharts[activeProgramId]
    : null;

  // Get the active program's name for display
  const getActiveProgramName = (): string => {
    if (selectedProgramId) {
      // Check if it's an alternative program
      const altProgram = selectedScore.alternativePrograms?.find(p => p.programId === selectedProgramId);
      if (altProgram) return altProgram.programName;
    }
    return selectedScore.recommendedProgram?.programName || 'Unknown Program';
  };

  // Handler to switch flowchart to an alternative program
  const handleViewAlternativeFlowchart = (programId: string) => {
    setSelectedProgramId(programId);
    // Scroll to the flowchart section
    const flowchartSection = document.getElementById('flowchart-section');
    if (flowchartSection) {
      flowchartSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler to switch back to recommended program
  const handleBackToRecommended = () => {
    setSelectedProgramId(null);
  };

  return (
    <Layout currentPage="results">
      {/* Shared View Banner with Legal Disclaimer */}
      {isSharedView && (
        <>
          <div className="bg-warning border-t-4 border-b-4 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black uppercase text-label">Shared View</p>
                  <p className="text-body-sm text-black">
                    This result was shared with you. To save your own results, create a profile and calculate your viability scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-100 border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <p className="text-body-sm text-neutral-700 text-center">
                <strong className="font-semibold">⚠️ Not Legal Advice.</strong> This shared result is for informational purposes only and does not constitute legal or immigration advice.
                Immigration requirements change frequently and vary by individual circumstances.
                Always consult a qualified immigration attorney before making any decisions.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Header Section - Bold, Editorial */}
      <div className="bg-white border-black">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={() => navigate('/results')}
              variant="ghost"
              size="md"
              className="pl-0"
            >
              ← Back to Rankings
            </Button>

            {/* Share Button (only show in non-shared view) */}
            {!isSharedView && selectedScore && (
              <Button
                onClick={handleShareResults}
                variant="secondary"
                size="md"
              >
                {copySuccess ? 'Link Copied!' : 'Share Results'}
              </Button>
            )}
          </div>

          {/* Country Header with Large Score */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-display font-extrabold text-black mb-2 uppercase tracking-tight">
                {selectedScore.countryName}
              </h1>
              <p className="text-body-lg text-gray-700 capitalize">
                {selectedScore.viabilityLevel.replace('_', ' ')} Viability
              </p>
            </div>

            {/* Large Score Display */}
            <div className="text-right">
              <div className="text-data-lg font-bold text-black leading-none">
                {selectedScore.overallScore}
              </div>
              <div className="text-h4 text-gray-700 uppercase tracking-wide">/100</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Program - Bold Highlight */}
      {selectedScore.recommendedProgram && (
        <div className="bg-primary border-t-4 border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 py-8">
            <h2 className="text-label uppercase font-bold text-white mb-2">Recommended Visa Program</h2>
            <h3 className="text-h1 font-bold text-white mb-3 uppercase tracking-wide break-words">
              {selectedScore.recommendedProgram.programName}
            </h3>
            <p className="text-body-lg text-white mb-6">{selectedScore.recommendedProgram.matchReason}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Type</div>
                <div className="text-body font-bold text-white capitalize">
                  {selectedScore.recommendedProgram.programType.replace('_', ' ')}
                </div>
              </div>
              <div>
                <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Eligibility Score</div>
                <div className="text-body font-bold text-white">{selectedScore.recommendedProgram.eligibilityScore}/100</div>
              </div>
              <div>
                <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Job Offer Required</div>
                <div className="text-body font-bold text-white">
                  {selectedScore.recommendedProgram.requiresJobOffer ? 'Yes' : 'No'}
                </div>
              </div>
              <div>
                <div className="text-label-sm uppercase font-bold text-primary-200 mb-1">Timeline</div>
                <div className="text-body font-bold text-white">{selectedScore.estimatedTimelineMonths} months</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content: Data-Driven Dashboard */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8 space-y-8">
          {/* Component Scores and Risk Assessment - Above Flowchart */}
          {/* Score Breakdown */}
          <ScoreBreakdown componentScores={selectedScore.componentScores} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            

            {/* Risk Factors */}
            <RiskFactorsList
              riskFactors={selectedScore.riskFactors}
              overallRiskLevel={selectedScore.overallRiskLevel}
            />
          </div>

          {/* Interactive Flowchart - Center Section */}
          <div id="flowchart-section">
            {/* Flowchart Header - Shows current program */}
            <div className="bg-white border-2 border-black border-b-0 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="text-label uppercase font-bold text-gray-700">Viewing Flowchart:</span>
                <h4 className="text-h4 font-bold text-black uppercase break-words">{getActiveProgramName()}</h4>
              </div>
              {selectedProgramId && (
                <button
                  onClick={handleBackToRecommended}
                  className="px-4 py-2 bg-gray-200 text-black border-2 border-black hover:bg-black hover:text-white transition-colors font-bold uppercase text-label"
                >
                  ← Back to Recommended
                </button>
              )}
            </div>

            {activeFlowchart ? (
              <InteractiveFlowchart flowchart={activeFlowchart} />
            ) : (
              <div className="bg-white border-2 border-black p-12 text-center">
                <p className="text-body text-gray-700">No flowchart available for this program yet.</p>
              </div>
            )}
          </div>

          {/* Contingencies and Alternatives - Below Flowchart */}
          <div className="space-y-8">
            {/* Contingencies Row */}
            <ContingenciesList contingencies={selectedScore.contingencies} />

            {/* Alternative Programs Row */}
            {selectedScore.alternativePrograms && selectedScore.alternativePrograms.length > 0 && (
              <AlternativeProgramsList
                programs={selectedScore.alternativePrograms}
                countryCode={countryCode || ''}
                onViewFlowchart={handleViewAlternativeFlowchart}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

