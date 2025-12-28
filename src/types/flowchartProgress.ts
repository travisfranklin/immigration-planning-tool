/**
 * Flowchart Progress Type Definitions
 * Tracks user progress through immigration process flowcharts
 */

export interface FlowchartStepProgress {
  stepId: string;
  status: 'pending' | 'in-progress' | 'completed';
  completedAt?: Date;
  notes?: string;
}

export interface FlowchartProgress {
  id: string; // Format: `${userId}-${programId}`
  userId: string;
  programId: string;
  countryCode: string;
  steps: Record<string, FlowchartStepProgress>; // stepId -> progress
  createdAt: Date;
  updatedAt: Date;
}

