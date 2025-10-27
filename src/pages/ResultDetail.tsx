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

  const recommendedFlowchart = selectedScore.recommendedProgram && countryFlowcharts
    ? countryFlowcharts[selectedScore.recommendedProgram.programId]
    : null;

  return (
    <Layout currentPage="results">
      <div className="max-w-7xl mx-auto">
        {/* Shared View Banner */}
        {isSharedView && (
          <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📤</span>
              <div>
                <p className="font-semibold text-blue-900">Shared View</p>
                <p className="text-sm text-blue-700">
                  This result was shared with you. To save your own results, create a profile and calculate your viability scores.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Back Button and Share Button Row */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <Button
            onClick={() => navigate('/results')}
            variant="ghost"
          >
            ← Back to Rankings
          </Button>

          {/* Share Button (only show in non-shared view) */}
          {!isSharedView && selectedScore && (
            <Button
              onClick={handleShareResults}
              variant="primary"
            >
              <span>{copySuccess ? '✓' : '📤'}</span>
              <span>{copySuccess ? 'Link Copied!' : 'Share Results'}</span>
            </Button>
          )}
        </div>

        {/* Country Header */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedScore.countryName}</h1>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-blue-600">{selectedScore.overallScore}/100</div>
            <div>
              <p className="text-sm text-gray-600">Viability Level</p>
              <p className="text-lg font-semibold text-gray-900 capitalize">
                {selectedScore.viabilityLevel.replace('_', ' ')}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Program */}
        {selectedScore.recommendedProgram && (
          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Recommended Visa Program</h2>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">
              {selectedScore.recommendedProgram.programName}
            </h3>
            <p className="text-blue-700 mb-3">{selectedScore.recommendedProgram.matchReason}</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-blue-900">Type:</span>{' '}
                <span className="text-blue-800 capitalize">
                  {selectedScore.recommendedProgram.programType.replace('_', ' ')}
                </span>
              </div>
              <div>
                <span className="font-semibold text-blue-900">Eligibility Score:</span>{' '}
                <span className="text-blue-800">{selectedScore.recommendedProgram.eligibilityScore}/100</span>
              </div>
              <div>
                <span className="font-semibold text-blue-900">Requires Job Offer:</span>{' '}
                <span className="text-blue-800">
                  {selectedScore.recommendedProgram.requiresJobOffer ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="font-semibold text-blue-900">Timeline:</span>{' '}
                <span className="text-blue-800">{selectedScore.estimatedTimelineMonths} months</span>
              </div>
            </div>
          </div>
        )}

        {/* Main Content: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Score Breakdown */}
            <ScoreBreakdown componentScores={selectedScore.componentScores} />

            {/* Risk Factors */}
            <RiskFactorsList
              riskFactors={selectedScore.riskFactors}
              overallRiskLevel={selectedScore.overallRiskLevel}
            />

            {/* Contingencies */}
            <ContingenciesList contingencies={selectedScore.contingencies} />

            {/* Alternative Programs */}
            {selectedScore.alternativePrograms && selectedScore.alternativePrograms.length > 0 && (
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Alternative Programs</h3>
                <div className="space-y-3">
                  {selectedScore.alternativePrograms.map((program) => (
                    <div key={program.programId} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{program.programName}</h4>
                        <span className="text-sm font-semibold text-gray-600">
                          {program.eligibilityScore}/100
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{program.whyNotRecommended}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Flowchart */}
          <div className="lg:col-span-2">
            {recommendedFlowchart ? (
              <InteractiveFlowchart flowchart={recommendedFlowchart} />
            ) : (
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-12 text-center">
                <p className="text-gray-500">No flowchart available for this program yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

