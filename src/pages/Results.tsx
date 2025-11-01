import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUserProfiles } from '../services/storage/userProfileStore';
import { calculateAllCountryViabilities } from '../services/viability/calculator';
import { saveViabilityScore, getUserViabilityScores, deleteUserViabilityScores } from '../services/storage/viabilityScoreStore';
import type { ViabilityScore } from '../types/viability';
import { CountryResultsTable } from '../components/results/CountryResultsTable';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorState } from '../components/ErrorState';
import { EmptyState } from '../components/EmptyState';

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

      // Determine if we need to recalculate
      let needsRecalculation = false;

      if (existingScores.length === 0) {
        // No existing scores - need to calculate
        needsRecalculation = true;
      } else {
        // Check if profile has been updated since scores were calculated
        // Find the oldest score's createdAt timestamp
        const oldestScoreTimestamp = Math.min(...existingScores.map(s => s.createdAt));

        // If profile was updated after the scores were created, recalculate
        if (profile.updatedAt > oldestScoreTimestamp) {
          needsRecalculation = true;
          console.log('Profile has changed since last calculation. Recalculating scores...');
        }
      }

      if (needsRecalculation) {
        // Calculate new scores (this will also delete old scores)
        await calculateResults(profile.id);
      } else {
        // Use existing scores - sort by score (descending), then by country name (ascending) for stable ordering
        const sorted = [...existingScores].sort((a: ViabilityScore, b: ViabilityScore) => {
          const scoreDiff = b.overallScore - a.overallScore;
          if (scoreDiff !== 0) return scoreDiff;
          return a.countryName.localeCompare(b.countryName);
        });
        setScores(sorted);
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

      // Delete all existing viability scores for this user
      await deleteUserViabilityScores(userId);

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

  // Rankings View - Data-Driven Dashboard
  return (
    <Layout currentPage="results">
      {/* Header Section - Bold, Editorial */}
      <div className="bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-h1 font-bold text-black mb-3 uppercase tracking-wide">
            Immigration Viability Results
          </h1>
          <p className="text-body-lg text-gray-700">
            All {scores.length} EU countries ranked by your viability score based on your profile
          </p>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-gray-50 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-between gap-4">
            <Button
              onClick={() => navigate('/profile')}
              variant="ghost"
              size="md"
            >
              ← Back to Profile
            </Button>
            <div className="flex gap-3">
              <Button
                onClick={handleExportResults}
                variant="secondary"
                size="md"
              >
                Export Results
              </Button>
              <Button
                onClick={handleRecalculate}
                variant="primary"
                size="md"
              >
                Recalculate Scores
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </Layout>
  );
};

