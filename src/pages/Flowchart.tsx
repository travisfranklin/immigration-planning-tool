/**
 * Flowchart Page
 * Displays immigration process flowcharts for different visa programs
 */

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FlowchartViewer } from '../components/flowchart/FlowchartViewer';
import { Layout } from '../components/Layout';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import type { ViabilityScore } from '../types/viability';
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

const COUNTRIES = [
  { code: 'DE', name: 'Germany' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'FR', name: 'France' },
  { code: 'ES', name: 'Spain' },
  { code: 'IT', name: 'Italy' },
  { code: 'AT', name: 'Austria' },
  { code: 'BE', name: 'Belgium' },
  { code: 'LU', name: 'Luxembourg' },
  { code: 'IE', name: 'Ireland' },
  { code: 'SE', name: 'Sweden' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'GR', name: 'Greece' },
  { code: 'CY', name: 'Cyprus' },
  { code: 'MT', name: 'Malta' },
  { code: 'PL', name: 'Poland' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'HU', name: 'Hungary' },
  { code: 'RO', name: 'Romania' },
  { code: 'BG', name: 'Bulgaria' },
  { code: 'SK', name: 'Slovakia' },
  { code: 'SI', name: 'Slovenia' },
  { code: 'HR', name: 'Croatia' },
  { code: 'EE', name: 'Estonia' },
  { code: 'LV', name: 'Latvia' },
  { code: 'LT', name: 'Lithuania' },
];

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

export function Flowchart() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  // Get URL parameters
  const countryParam = searchParams.get('country');
  const programParam = searchParams.get('program');
  const fromResults = searchParams.get('from') === 'results';

  // State for user viability scores
  const [userScores, setUserScores] = useState<ViabilityScore[]>([]);
  const [isLoadingScores, setIsLoadingScores] = useState(true);

  // Initialize state from URL params or defaults
  const [selectedCountry, setSelectedCountry] = useState(() => {
    if (countryParam && FLOWCHARTS[countryParam]) {
      return countryParam;
    }
    return 'DE';
  });

  const [selectedProgram, setSelectedProgram] = useState(() => {
    const programs = FLOWCHARTS[selectedCountry] || {};
    if (programParam) {
      // Try the programParam directly first
      if (programs[programParam]) {
        return programParam;
      }
      // If not found, try converting from full programId format (e.g., "de_eu_blue_card" -> "eu_blue_card")
      const flowchartKey = programParam.replace(/^[a-z]{2}_/, '');
      if (programs[flowchartKey]) {
        return flowchartKey;
      }
    }
    return Object.keys(programs)[0] || 'eu_blue_card';
  });

  // Load user viability scores
  useEffect(() => {
    const loadScores = async () => {
      try {
        const profiles = await getAllUserProfiles();
        if (profiles.length > 0) {
          const scores = await getUserViabilityScores(profiles[0].id);
          setUserScores(scores.sort((a, b) => b.overallScore - a.overallScore));
        }
      } catch (error) {
        console.error('Failed to load viability scores:', error);
      } finally {
        setIsLoadingScores(false);
      }
    };
    loadScores();
  }, []);

  const availablePrograms = FLOWCHARTS[selectedCountry] || {};
  const currentFlowchart = availablePrograms[selectedProgram];

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    // Reset to first program in the new country
    const programs = FLOWCHARTS[countryCode];
    if (programs) {
      const firstProgram = Object.keys(programs)[0];
      setSelectedProgram(firstProgram);
      // Update URL
      navigate(`/flowchart?country=${countryCode}&program=${firstProgram}`);
    }
  };

  const handleProgramChange = (programId: string) => {
    setSelectedProgram(programId);
    // Update URL
    navigate(`/flowchart?country=${selectedCountry}&program=${programId}`);
  };

  // Find current country score
  const currentCountryScore = userScores.find(s => s.countryCode === selectedCountry);
  const topScores = userScores.slice(0, 3);

  // Get next/previous countries from user's top scores
  const currentIndex = userScores.findIndex(s => s.countryCode === selectedCountry);
  const hasNext = currentIndex >= 0 && currentIndex < userScores.length - 1;
  const hasPrevious = currentIndex > 0;
  const nextCountry = hasNext ? userScores[currentIndex + 1] : null;
  const previousCountry = hasPrevious ? userScores[currentIndex - 1] : null;

  return (
    <Layout currentPage="flowchart">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb
          items={
            fromResults
              ? [
                  { label: 'Home', path: '/' },
                  { label: 'Results', path: '/results' },
                  { label: 'Flowchart' },
                ]
              : [
                  { label: 'Home', path: '/' },
                  { label: 'Flowcharts' },
                ]
          }
        />

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Immigration Process Flowcharts</h1>
          <p className="mt-2 text-gray-600">
            Step-by-step visual guides for each visa program
          </p>
        </div>

        {/* Recommendation Banner */}
        {!isLoadingScores && currentCountryScore && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  Recommended for you based on your profile
                </h3>
                <p className="text-sm text-blue-800">
                  {currentCountryScore.countryName} - {currentFlowchart?.programName || 'Selected Program'}{' '}
                  <span className="font-semibold">(Score: {currentCountryScore.overallScore}/100)</span>
                </p>
                {topScores.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs text-blue-700">Your top countries:</span>
                    {topScores.map((score, idx) => (
                      <button
                        key={score.countryCode}
                        onClick={() => handleCountryChange(score.countryCode)}
                        className={`text-xs px-2 py-1 rounded ${
                          score.countryCode === selectedCountry
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                        }`}
                      >
                        #{idx + 1} {score.countryName}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Country and Program Selectors */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Country Selector */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Program Selector */}
            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                Visa Program
              </label>
              <select
                id="program"
                value={selectedProgram}
                onChange={(e) => handleProgramChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(availablePrograms).map(([id, flowchart]) => (
                  <option key={id} value={id}>
                    {flowchart.programName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Flowchart Viewer */}
        {currentFlowchart ? (
          <FlowchartViewer flowchart={currentFlowchart} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-gray-500">No flowchart available for this program yet.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            {fromResults && (
              <button
                onClick={() => navigate('/results')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <span>←</span>
                <span>Back to Results</span>
              </button>
            )}
          </div>

          {userScores.length > 0 && (hasPrevious || hasNext) && (
            <div className="flex gap-3">
              {hasPrevious && previousCountry && (
                <button
                  onClick={() => handleCountryChange(previousCountry.countryCode)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <span>←</span>
                  <span>Previous: {previousCountry.countryName}</span>
                </button>
              )}
              {hasNext && nextCountry && (
                <button
                  onClick={() => handleCountryChange(nextCountry.countryCode)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <span>Next: {nextCountry.countryName}</span>
                  <span>→</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

