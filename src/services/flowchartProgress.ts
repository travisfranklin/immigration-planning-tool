/**
 * Flowchart Progress Service
 * Manages user progress through immigration process flowcharts
 */

import { getRecord, updateRecord, addRecord, STORE_NAMES } from './storage/indexedDB';
import type { FlowchartProgress, FlowchartStepProgress } from '../types/flowchartProgress';

/**
 * Get flowchart progress for a specific user and program
 */
export async function getFlowchartProgress(
  userId: string,
  programId: string
): Promise<FlowchartProgress | null> {
  const id = `${userId}-${programId}`;
  try {
    const progress = await getRecord<FlowchartProgress>(STORE_NAMES.FLOWCHART_PROGRESS, id);
    return progress || null;
  } catch (error) {
    console.error('Error getting flowchart progress:', error);
    return null;
  }
}

/**
 * Update step status in flowchart progress
 */
export async function updateStepStatus(
  userId: string,
  programId: string,
  countryCode: string,
  stepId: string,
  status: 'pending' | 'in-progress' | 'completed',
  notes?: string
): Promise<void> {
  const id = `${userId}-${programId}`;
  
  try {
    // Get existing progress or create new
    let progress = await getFlowchartProgress(userId, programId);
    
    if (!progress) {
      // Create new progress record
      progress = {
        id,
        userId,
        programId,
        countryCode,
        steps: {},
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    // Update step progress
    const stepProgress: FlowchartStepProgress = {
      stepId,
      status,
      notes,
    };

    if (status === 'completed') {
      stepProgress.completedAt = new Date();
    }

    progress.steps[stepId] = stepProgress;
    progress.updatedAt = new Date();

    // Save to IndexedDB
    try {
      await updateRecord(STORE_NAMES.FLOWCHART_PROGRESS, progress);
    } catch {
      // If update fails (record doesn't exist), add it
      await addRecord(STORE_NAMES.FLOWCHART_PROGRESS, progress);
    }
  } catch (error) {
    console.error('Error updating step status:', error);
    throw error;
  }
}

/**
 * Get step status from progress
 */
export function getStepStatus(
  progress: FlowchartProgress | null,
  stepId: string
): 'pending' | 'in-progress' | 'completed' {
  if (!progress || !progress.steps[stepId]) {
    return 'pending';
  }
  return progress.steps[stepId].status;
}

/**
 * Get progress statistics
 */
export function getProgressStats(progress: FlowchartProgress | null, totalSteps: number) {
  if (!progress) {
    return {
      total: totalSteps,
      completed: 0,
      inProgress: 0,
      pending: totalSteps,
      percentComplete: 0,
    };
  }

  const steps = Object.values(progress.steps);
  const completed = steps.filter(s => s.status === 'completed').length;
  const inProgress = steps.filter(s => s.status === 'in-progress').length;
  const pending = totalSteps - completed - inProgress;

  return {
    total: totalSteps,
    completed,
    inProgress,
    pending,
    percentComplete: Math.round((completed / totalSteps) * 100),
  };
}

/**
 * Reset all progress for a flowchart
 */
export async function resetFlowchartProgress(
  userId: string,
  programId: string
): Promise<void> {
  try {
    const progress = await getFlowchartProgress(userId, programId);
    if (progress) {
      progress.steps = {};
      progress.updatedAt = new Date();
      await updateRecord(STORE_NAMES.FLOWCHART_PROGRESS, progress);
    }
  } catch (error) {
    console.error('Error resetting flowchart progress:', error);
    throw error;
  }
}

