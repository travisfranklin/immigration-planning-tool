import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import { calculateAllCountryViabilities } from '../services/viability/calculator';
import { saveViabilityScore, getUserViabilityScores } from '../services/storage/viabilityScoreStore';
import type { ViabilityScore } from '../types/viability';
import { CountryResultsTable } from '../components/results/CountryResultsTable';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorState } from '../components/ErrorState';
import { EmptyState } from '../components/EmptyState';
import { UI_CONTAINER } from '../constants/uiStyles';

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
    return <LoadingSpinner fullScreen size="lg" message="Loading results..." />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        actionText="Go to Profile"
        onAction={() => navigate('/profile')}
      />
    );
  }

  if (isCalculating) {
    return (
      <LoadingSpinner
        fullScreen
        size="lg"
        message="Calculating viability scores..."
        secondaryMessage="This may take a moment"
      />
    );
  }

  // Rankings View
  return (
    <Layout currentPage="results">
      <div className={UI_CONTAINER.lg}>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Immigration Viability Results</h1>
          <p className="text-gray-600">
            All {scores.length} EU countries ranked by your viability score based on your profile
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div className="flex gap-4">
            <Button
              onClick={() => navigate('/profile')}
              variant="ghost"
            >
              ← Back to Profile
            </Button>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={handleExportResults}
              variant="secondary"
            >
              Export Results
            </Button>
            <Button
              onClick={handleRecalculate}
              variant="primary"
            >
              Recalculate Scores
            </Button>
          </div>
        </div>

        {scores.length === 0 && (
          <EmptyState
            message="No results available yet."
            action={{
              label: 'Calculate Viability Scores',
              onClick: handleRecalculate,
            }}
          />
        )}

        {scores.length > 0 && (
          <CountryResultsTable
            scores={scores}
            onViewDetails={handleViewDetails}
          />
        )}
      </div>
    </Layout>
  );
};

