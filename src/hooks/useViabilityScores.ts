/**
 * useViabilityScores Hook
 * Manages viability scores state and operations
 */

import { useState, useEffect, useCallback } from 'react';
import type { ViabilityScore } from '../types/viability';
import {
  createViabilityScore,
  getUserViabilityScores,
  getUserCountryRanking,
  updateViabilityScore,
  deleteViabilityScore,
  deleteUserViabilityScores,
} from '../services/storage/viabilityScoreStore';

interface UseViabilityScoresReturn {
  scores: ViabilityScore[];
  ranking: ViabilityScore[];
  loading: boolean;
  error: Error | null;
  createScore: (score: Omit<ViabilityScore, 'id' | 'createdAt' | 'updatedAt'>) => Promise<ViabilityScore>;
  updateScore: (scoreId: string, updates: Partial<ViabilityScore>) => Promise<ViabilityScore>;
  deleteScore: (scoreId: string) => Promise<void>;
  loadUserScores: (userId: string) => Promise<void>;
  loadUserRanking: (userId: string) => Promise<void>;
  deleteAllUserScores: (userId: string) => Promise<void>;
}

export function useViabilityScores(userId?: string): UseViabilityScoresReturn {
  const [scores, setScores] = useState<ViabilityScore[]>([]);
  const [ranking, setRanking] = useState<ViabilityScore[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadUserScores = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const loadedScores = await getUserViabilityScores(id);
      setScores(loadedScores);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load scores'));
    } finally {
      setLoading(false);
    }
  }, []);

  const loadUserRanking = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const rankedScores = await getUserCountryRanking(id);
      setRanking(rankedScores);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load ranking'));
    } finally {
      setLoading(false);
    }
  }, []);

  const createScore = useCallback(
    async (scoreData: Omit<ViabilityScore, 'id' | 'createdAt' | 'updatedAt'>) => {
      setLoading(true);
      setError(null);
      try {
        const newScore = await createViabilityScore(scoreData);
        setScores((prev) => [...prev, newScore]);
        return newScore;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to create score');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateScore = useCallback(
    async (scoreId: string, updates: Partial<ViabilityScore>) => {
      setLoading(true);
      setError(null);
      try {
        const updated = await updateViabilityScore(scoreId, updates);
        setScores((prev) => prev.map((s) => (s.id === scoreId ? updated : s)));
        return updated;
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to update score');
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteScore = useCallback(async (scoreId: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteViabilityScore(scoreId);
      setScores((prev) => prev.filter((s) => s.id !== scoreId));
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to delete score');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteAllUserScores = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUserViabilityScores(id);
      setScores([]);
      setRanking([]);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to delete scores');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Load scores on mount if userId is provided
  useEffect(() => {
    if (userId) {
      loadUserScores(userId);
      loadUserRanking(userId);
    }
  }, [userId, loadUserScores, loadUserRanking]);

  return {
    scores,
    ranking,
    loading,
    error,
    createScore,
    updateScore,
    deleteScore,
    loadUserScores,
    loadUserRanking,
    deleteAllUserScores,
  };
}

