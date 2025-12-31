/**
 * Viability Level Constants
 * Centralized definitions for viability scoring thresholds and metadata
 */

export const ViabilityLevel = {
  EXCELLENT: 'excellent',
  GOOD: 'good',
  MODERATE: 'moderate',
  LOW: 'low',
  VERY_LOW: 'very_low',
} as const;

export type ViabilityLevel = typeof ViabilityLevel[keyof typeof ViabilityLevel];

/**
 * Score thresholds for each viability level
 * A score must be >= threshold to achieve that level
 */
export const VIABILITY_THRESHOLDS: Record<ViabilityLevel, number> = {
  [ViabilityLevel.EXCELLENT]: 85,
  [ViabilityLevel.GOOD]: 70,
  [ViabilityLevel.MODERATE]: 50,
  [ViabilityLevel.LOW]: 30,
  [ViabilityLevel.VERY_LOW]: 0,
};

/**
 * Display labels for viability levels
 */
export const VIABILITY_LEVEL_LABELS: Record<ViabilityLevel, string> = {
  [ViabilityLevel.EXCELLENT]: 'Excellent',
  [ViabilityLevel.GOOD]: 'Good',
  [ViabilityLevel.MODERATE]: 'Moderate',
  [ViabilityLevel.LOW]: 'Low',
  [ViabilityLevel.VERY_LOW]: 'Very Low',
};

/**
 * Descriptions for viability levels
 */
export const VIABILITY_LEVEL_DESCRIPTIONS: Record<ViabilityLevel, string> = {
  [ViabilityLevel.EXCELLENT]: 'Excellent match - Strong eligibility',
  [ViabilityLevel.GOOD]: 'Good match - Likely eligible',
  [ViabilityLevel.MODERATE]: 'Moderate match - May be eligible',
  [ViabilityLevel.LOW]: 'Low match - Unlikely eligible',
  [ViabilityLevel.VERY_LOW]: 'Very low match - Not eligible',
};

/**
 * Type guard to validate viability levels
 */
export const isValidViabilityLevel = (level: unknown): level is ViabilityLevel => {
  return typeof level === 'string' && level in ViabilityLevel;
};

/**
 * Calculate viability level from score
 */
export const calculateViabilityLevel = (score: number): ViabilityLevel => {
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.EXCELLENT]) {
    return ViabilityLevel.EXCELLENT;
  }
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.GOOD]) {
    return ViabilityLevel.GOOD;
  }
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.MODERATE]) {
    return ViabilityLevel.MODERATE;
  }
  if (score >= VIABILITY_THRESHOLDS[ViabilityLevel.LOW]) {
    return ViabilityLevel.LOW;
  }
  return ViabilityLevel.VERY_LOW;
};

/**
 * SCORE LABELS AND THRESHOLDS
 * Human-readable labels for score ranges (0-100 scale)
 */

/**
 * Get human-readable label for a score (0-100)
 * Used for displaying score quality in UI
 */
export const getScoreLabel = (score: number): string => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Low';
  return 'Very Low';
};

/**
 * COMPONENT SCORE METADATA
 * Labels and descriptions for the five component scores
 */

export type ComponentScoreType = 'career' | 'financial' | 'education' | 'language' | 'family';

/**
 * Display labels for component score types
 */
export const COMPONENT_LABELS: Record<ComponentScoreType, string> = {
  career: 'Career',
  financial: 'Financial',
  education: 'Education',
  language: 'Language',
  family: 'Family',
};

/**
 * Descriptions for component score types
 * Explains what factors contribute to each component score
 */
export const COMPONENT_DESCRIPTIONS: Record<ComponentScoreType, string> = {
  career: 'Work experience, occupation demand, job offer status',
  financial: 'Income, savings, cost of living alignment',
  education: 'Education level, field of study relevance',
  language: 'Language proficiency and learning potential',
  family: 'Family ties, marital status, adaptability',
};

/**
 * Get component label by key
 */
export const getComponentLabel = (component: ComponentScoreType): string => {
  return COMPONENT_LABELS[component];
};

/**
 * Get component description by key
 */
export const getComponentDescription = (component: ComponentScoreType): string => {
  return COMPONENT_DESCRIPTIONS[component];
};

/**
 * DATACARD VARIANT MAPPING
 * Maps scores to DataCard component variants
 * Note: DataCard doesn't have 'danger-dark' variant, so 0-19 maps to 'danger'
 */

export type DataCardVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral';

/**
 * Get DataCard variant based on score (0-100)
 * Used for DataCard component color theming
 */
export const getDataCardVariant = (score: number): DataCardVariant => {
  if (score >= 80) return 'success';   // Excellent: Aquamarine
  if (score >= 60) return 'primary';   // Good: Electric Indigo
  if (score >= 40) return 'warning';   // Moderate: Orange Peel
  if (score >= 0) return 'danger';     // Low/Very Low: Red-Orange
  return 'neutral';
};

/**
 * SCORE COLOR FUNCTIONS
 * Centralized color logic for all score displays (0-100 scale)
 *
 * Color mapping using design system palette:
 * - 80-100: Success (Aquamarine) - Excellent performance
 * - 60-79: Primary (Electric Indigo) - Good performance
 * - 40-59: Warning (Orange Peel) - Moderate performance
 * - 20-39: Danger (Red-Orange) - Low performance
 * - 0-19: Danger Dark - Very low performance
 */

/**
 * Get Tailwind background color class for a score (0-100)
 * Used for progress bars and score indicators
 */
export const getScoreColorClass = (score: number): string => {
  if (score >= 80) return 'bg-success';
  if (score >= 60) return 'bg-primary';
  if (score >= 40) return 'bg-warning';
  if (score >= 20) return 'bg-danger';
  return 'bg-danger-dark';
};

/**
 * Get Tailwind text color class for a score (0-100)
 * Used for score text display
 */
export const getScoreTextColorClass = (score: number): string => {
  if (score >= 80) return 'text-success-dark';
  if (score >= 60) return 'text-primary-dark';
  if (score >= 40) return 'text-warning-dark';
  if (score >= 20) return 'text-danger';
  return 'text-danger-dark';
};

/**
 * Get Tailwind border color class for a score (0-100)
 * Used for bordered elements
 */
export const getScoreBorderColorClass = (score: number): string => {
  if (score >= 80) return 'border-success';
  if (score >= 60) return 'border-primary';
  if (score >= 40) return 'border-warning';
  if (score >= 20) return 'border-danger';
  return 'border-danger-dark';
};

/**
 * Get all color classes for a score (bg, text, border)
 * Convenience function for components that need multiple color classes
 */
export const getScoreColorClasses = (score: number): { bg: string; text: string; border: string } => {
  return {
    bg: getScoreColorClass(score),
    text: getScoreTextColorClass(score),
    border: getScoreBorderColorClass(score),
  };
};

/**
 * RISK LEVEL COLOR FUNCTIONS
 * Centralized color logic for risk assessment displays
 *
 * Color mapping:
 * - Low: Success (Aquamarine) - Minimal risk
 * - Medium: Warning (Orange Peel) - Moderate risk
 * - High: Danger (Red-Orange) - Significant risk
 */

export type RiskLevel = 'low' | 'medium' | 'high';

/**
 * Get Tailwind background color class for a risk level
 */
export const getRiskColorClass = (level: RiskLevel): string => {
  switch (level) {
    case 'low':
      return 'bg-success';
    case 'medium':
      return 'bg-warning';
    case 'high':
      return 'bg-danger';
    default:
      return 'bg-gray-300';
  }
};

/**
 * Get Tailwind text color class for a risk level
 */
export const getRiskTextColorClass = (level: RiskLevel): string => {
  switch (level) {
    case 'low':
      return 'text-success-dark';
    case 'medium':
      return 'text-warning-dark';
    case 'high':
      return 'text-danger';
    default:
      return 'text-gray-700';
  }
};

/**
 * Get Tailwind border color class for a risk level
 */
export const getRiskBorderColorClass = (level: RiskLevel): string => {
  switch (level) {
    case 'low':
      return 'border-success';
    case 'medium':
      return 'border-warning';
    case 'high':
      return 'border-danger';
    default:
      return 'border-gray-300';
  }
};

/**
 * Get all color classes for a risk level (bg, text, border)
 * Convenience function for components that need multiple color classes
 */
export const getRiskColorClasses = (level: RiskLevel): { bg: string; text: string; border: string } => {
  return {
    bg: getRiskColorClass(level),
    text: getRiskTextColorClass(level),
    border: getRiskBorderColorClass(level),
  };
};

