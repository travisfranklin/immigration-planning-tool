/**
 * Flowchart Page
 * Displays immigration process flowcharts for different visa programs
 */

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FlowchartViewer } from '../components/flowchart/FlowchartViewer';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { EmptyState } from '../components/EmptyState';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import type { ViabilityScore } from '../types/viability';
import { CountryCode, COUNTRY_DISPLAY_NAMES, isValidCountryCode, ALL_COUNTRY_CODES } from '../constants/countries';
import { ALL_FLOWCHARTS } from '../data/flowcharts';

const COUNTRIES = ALL_COUNTRY_CODES.map((code) => ({
  code,
  name: COUNTRY_DISPLAY_NAMES[code],
}));

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
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(() => {
    if (countryParam && isValidCountryCode(countryParam) && ALL_FLOWCHARTS[countryParam]) {
      return countryParam;
    }
    return CountryCode.DE;
  });

  const [selectedProgram, setSelectedProgram] = useState(() => {
    const programs = ALL_FLOWCHARTS[selectedCountry] || {};
    if (programParam && programs[programParam]) {
      return programParam;
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

  const availablePrograms = ALL_FLOWCHARTS[selectedCountry] || {};
  const currentFlowchart = availablePrograms[selectedProgram];

  const handleCountryChange = (countryCode: string) => {
    if (!isValidCountryCode(countryCode)) {
      console.error(`Invalid country code: ${countryCode}`);
      return;
    }
    setSelectedCountry(countryCode);
    // Reset to first program in the new country
    const programs = ALL_FLOWCHARTS[countryCode];
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
          <EmptyState message="No flowchart available for this program yet." />
        )}

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            {fromResults && (
              <Button
                onClick={() => navigate('/results')}
                variant="ghost"
              >
                <span>←</span>
                <span>Back to Results</span>
              </Button>
            )}
          </div>

          {userScores.length > 0 && (hasPrevious || hasNext) && (
            <div className="flex gap-3">
              {hasPrevious && previousCountry && (
                <Button
                  onClick={() => handleCountryChange(previousCountry.countryCode)}
                  variant="secondary"
                >
                  <span>←</span>
                  <span>Previous: {previousCountry.countryName}</span>
                </Button>
              )}
              {hasNext && nextCountry && (
                <Button
                  onClick={() => handleCountryChange(nextCountry.countryCode)}
                  variant="primary"
                >
                  <span>Next: {nextCountry.countryName}</span>
                  <span>→</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

