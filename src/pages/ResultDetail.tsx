/**
 * ResultDetail Page
 * Displays detailed country information with interactive flowchart
 */

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import type { ViabilityScore } from '../types/viability';
import { ScoreBreakdown } from '../components/results/ScoreBreakdown';
import { RiskFactorsList } from '../components/results/RiskFactorsList';
import { ContingenciesList } from '../components/results/ContingenciesList';
import { Layout } from '../components/Layout';
import { InteractiveFlowchart } from '../components/flowchart/InteractiveFlowchart';
import { germanyFlowcharts } from '../data/flowcharts/germany';
import { netherlandsFlowcharts } from '../data/flowcharts/netherlands';
import { franceFlowcharts } from '../data/flowcharts/france';
import { spainFlowcharts } from '../data/flowcharts/spain';
import { italyFlowcharts } from '../data/flowcharts/italy';
import { austriaFlowcharts } from '../data/flowcharts/austria';
import { belgiumFlowcharts } from '../data/flowcharts/belgium';
import { luxembourgFlowcharts } from '../data/flowcharts/luxembourg';
import { irelandFlowcharts } from '../data/flowcharts/ireland';
import { swedenFlowcharts } from '../data/flowcharts/sweden';
import { denmarkFlowcharts } from '../data/flowcharts/denmark';
import { finlandFlowcharts } from '../data/flowcharts/finland';
import { portugalFlowcharts } from '../data/flowcharts/portugal';
import { greeceFlowcharts } from '../data/flowcharts/greece';
import { cyprusFlowcharts } from '../data/flowcharts/cyprus';
import { maltaFlowcharts } from '../data/flowcharts/malta';
import { polandFlowcharts } from '../data/flowcharts/poland';
import { czechFlowcharts } from '../data/flowcharts/czech-republic';
import { hungaryFlowcharts } from '../data/flowcharts/hungary';
import { romaniaFlowcharts } from '../data/flowcharts/romania';
import { bulgariaFlowcharts } from '../data/flowcharts/bulgaria';
import { slovakiaFlowcharts } from '../data/flowcharts/slovakia';
import { sloveniaFlowcharts } from '../data/flowcharts/slovenia';
import { croatiaFlowcharts } from '../data/flowcharts/croatia';
import { estoniaFlowcharts } from '../data/flowcharts/estonia';
import { latviaFlowcharts } from '../data/flowcharts/latvia';
import { lithuaniaFlowcharts } from '../data/flowcharts/lithuania';
import type { FlowchartDefinition } from '../types/flowchart';

const FLOWCHARTS: Record<string, Record<string, FlowchartDefinition>> = {
  DE: germanyFlowcharts,
  NL: netherlandsFlowcharts,
  FR: franceFlowcharts,
  ES: spainFlowcharts,
  IT: italyFlowcharts,
  AT: austriaFlowcharts,
  BE: belgiumFlowcharts,
  LU: luxembourgFlowcharts,
  IE: irelandFlowcharts,
  SE: swedenFlowcharts,
  DK: denmarkFlowcharts,
  FI: finlandFlowcharts,
  PT: portugalFlowcharts,
  GR: greeceFlowcharts,
  CY: cyprusFlowcharts,
  MT: maltaFlowcharts,
  PL: polandFlowcharts,
  CZ: czechFlowcharts,
  HU: hungaryFlowcharts,
  RO: romaniaFlowcharts,
  BG: bulgariaFlowcharts,
  SK: slovakiaFlowcharts,
  SI: sloveniaFlowcharts,
  HR: croatiaFlowcharts,
  EE: estoniaFlowcharts,
  LV: latviaFlowcharts,
  LT: lithuaniaFlowcharts,
};

export const ResultDetail: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedScore, setSelectedScore] = useState<ViabilityScore | null>(null);

  useEffect(() => {
    loadResultDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCode]);

  const loadResultDetail = async () => {
    try {
      setIsLoading(true);
      setError(null);

      if (!countryCode) {
        setError('Country code not provided');
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading result details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md border border-red-200 p-8 max-w-md">
          <div className="text-red-600 text-5xl mb-4 text-center">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Error</h2>
          <p className="text-gray-600 mb-4 text-center">{error}</p>
          <button
            onClick={() => navigate('/results')}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Results
          </button>
        </div>
      </div>
    );
  }

  if (!selectedScore) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Not Found</h2>
          <p className="text-gray-600 mb-4 text-center">Result details not found</p>
          <button
            onClick={() => navigate('/results')}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Results
          </button>
        </div>
      </div>
    );
  }

  const countryFlowcharts = countryCode ? FLOWCHARTS[countryCode] : undefined;

  // Get flowchart key from programId
  // Flowcharts can use either underscore format (e.g., "bg_startup_visa") or hyphen format (e.g., "eu-blue-card")
  const getFlowchartKey = (programId: string): string => {
    // Remove country prefix (e.g., "de_" from "de_eu_blue_card")
    const withoutCountry = programId.replace(/^[a-z]{2}_/, '');

    // Try both formats: original with underscores and converted with hyphens
    // This handles both old hyphen-based keys and new underscore-based keys
    return withoutCountry.replace(/_/g, '-');
  };

  const recommendedFlowchart = selectedScore.recommendedProgram && countryFlowcharts
    ? countryFlowcharts[getFlowchartKey(selectedScore.recommendedProgram.programId)] ||
      countryFlowcharts[selectedScore.recommendedProgram.programId]
    : null;

  return (
    <Layout currentPage="results">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/results')}
          className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to Rankings
        </button>

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

