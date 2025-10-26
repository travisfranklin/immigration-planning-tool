import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import { calculateAllCountryViabilities } from '../services/viability/calculator';
import { saveViabilityScore, getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import type { ViabilityScore } from '../types/viability';
import { CountryResultsTable } from '../components/results/CountryResultsTable';
import { Layout } from '../components/Layout';

export const Results: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scores, setScores] = useState<ViabilityScore[]>([]);

  useEffect(() => {
    loadResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadResults = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Get user profile
      const profiles = await getAllUserProfiles();
      if (profiles.length === 0) {
        setError('No profile found. Please complete your profile first.');
        setIsLoading(false);
        return;
      }

      const profile = profiles[0];

      // Check if we have existing scores
      const existingScores = await getUserViabilityScores(profile.id);

      if (existingScores.length > 0) {
        // Use existing scores - sort by score (descending), then by country name (ascending) for stable ordering
        const sorted = [...existingScores].sort((a: ViabilityScore, b: ViabilityScore) => {
          const scoreDiff = b.overallScore - a.overallScore;
          if (scoreDiff !== 0) return scoreDiff;
          return a.countryName.localeCompare(b.countryName);
        });
        setScores(sorted);
      } else {
        // Calculate new scores
        await calculateResults(profile.id);
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading results:', err);
      setError('Failed to load results. Please try again.');
      setIsLoading(false);
    }
  };

  const calculateResults = async (userId: string) => {
    try {
      setIsCalculating(true);
      setError(null);

      // Get user profile
      const profiles = await getAllUserProfiles();
      if (profiles.length === 0) {
        throw new Error('No profile found');
      }

      const profile = profiles[0];

      // Calculate viability scores for all countries
      const calculatedScores = await calculateAllCountryViabilities(userId, profile);

      // Save scores to IndexedDB
      for (const score of calculatedScores) {
        await saveViabilityScore(score);
      }

      // Ensure scores are sorted by overall score (highest first), then by country name for stable ordering
      const sortedScores = [...calculatedScores].sort((a: ViabilityScore, b: ViabilityScore) => {
        const scoreDiff = b.overallScore - a.overallScore;
        if (scoreDiff !== 0) return scoreDiff;
        return a.countryName.localeCompare(b.countryName);
      });
      setScores(sortedScores);
      setIsCalculating(false);
    } catch (err) {
      console.error('Error calculating results:', err);
      setError('Failed to calculate results. Please try again.');
      setIsCalculating(false);
    }
  };

  const handleRecalculate = async () => {
    const profiles = await getAllUserProfiles();
    if (profiles.length > 0) {
      await calculateResults(profiles[0].id);
    }
  };

  const handleViewDetails = (countryCode: string) => {
    navigate(`/result-detail/${countryCode}`);
  };

  const handleViewFlowchart = (countryCode: string, programId: string) => {
    navigate(`/flowchart?country=${countryCode}&program=${programId}&from=results`);
  };

  const handleExportResults = () => {
    const dataStr = JSON.stringify(scores, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `immigration-viability-results-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
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
            onClick={() => navigate('/profile')}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Profile
          </button>
        </div>
      </div>
    );
  }

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-semibold">Calculating viability scores...</p>
          <p className="text-gray-500 text-sm mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  // Rankings View
  return (
    <Layout currentPage="results">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Immigration Viability Results</h1>
          <p className="text-gray-600">
            All {scores.length} EU countries ranked by your viability score based on your profile
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={handleRecalculate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            🔄 Recalculate Scores
          </button>
          <button
            onClick={handleExportResults}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            📥 Export Results
          </button>
          <button
            onClick={() => navigate('/profile')}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            ← Back to Profile
          </button>
        </div>

        {scores.length === 0 && (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
            <p className="text-gray-600 mb-4">No results available yet.</p>
            <button
              onClick={handleRecalculate}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Calculate Viability Scores
            </button>
          </div>
        )}

        {scores.length > 0 && (
          <CountryResultsTable
            scores={scores}
            onViewDetails={handleViewDetails}
            onViewFlowchart={handleViewFlowchart}
          />
        )}
      </div>
    </Layout>
  );
};

