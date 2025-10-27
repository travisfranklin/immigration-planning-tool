/**
 * UI Style Constants
 * Centralized definitions for common layout classes, spacing, and style patterns
 */

/**
 * Container widths and centering
 */
export const UI_CONTAINER = {
  /** Extra small container: max-w-2xl mx-auto */
  xs: 'max-w-2xl mx-auto',
  /** Small container: max-w-4xl mx-auto */
  sm: 'max-w-4xl mx-auto',
  /** Medium container: max-w-5xl mx-auto */
  md: 'max-w-5xl mx-auto',
  /** Large container: max-w-7xl mx-auto */
  lg: 'max-w-7xl mx-auto',
} as const;

/**
 * Common spacing patterns
 */
export const UI_SPACING = {
  /** Section spacing: mb-8 */
  section: 'mb-8',
  /** Card spacing: mb-6 */
  card: 'mb-6',
  /** Small spacing: mb-4 */
  small: 'mb-4',
  /** Tiny spacing: mb-2 */
  tiny: 'mb-2',
} as const;

/**
 * Common padding patterns
 */
export const UI_PADDING = {
  /** Button padding: px-4 py-2 */
  button: 'px-4 py-2',
  /** Card padding: px-6 py-4 */
  card: 'px-6 py-4',
  /** Large card padding: p-8 */
  cardLarge: 'p-8',
  /** Small padding: p-4 */
  small: 'p-4',
  /** Page padding: px-4 */
  page: 'px-4',
} as const;

/**
 * Common card styles
 */
export const UI_CARD = {
  /** Standard card: bg-white rounded-lg shadow-sm */
  base: 'bg-white rounded-lg shadow-sm',
  /** Card with border: bg-white rounded-lg shadow-sm border border-gray-200 */
  bordered: 'bg-white rounded-lg shadow-sm border border-gray-200',
  /** Card with medium shadow: bg-white rounded-lg shadow-md */
  elevated: 'bg-white rounded-lg shadow-md',
} as const;

/**
 * Common text styles
 */
export const UI_TEXT = {
  /** Page heading: text-3xl font-bold text-gray-900 */
  pageHeading: 'text-3xl font-bold text-gray-900',
  /** Section heading: text-xl font-semibold text-gray-900 */
  sectionHeading: 'text-xl font-semibold text-gray-900',
  /** Card heading: text-lg font-semibold text-gray-900 */
  cardHeading: 'text-lg font-semibold text-gray-900',
  /** Subtitle: text-gray-600 */
  subtitle: 'text-gray-600',
  /** Muted text: text-gray-500 */
  muted: 'text-gray-500',
  /** Small text: text-sm text-gray-600 */
  small: 'text-sm text-gray-600',
} as const;

/**
 * Common layout patterns
 */
export const UI_LAYOUT = {
  /** Full screen centered: min-h-screen bg-gray-50 flex items-center justify-center */
  fullScreenCenter: 'min-h-screen bg-gray-50 flex items-center justify-center',
  /** Page background: min-h-screen bg-gray-50 */
  pageBackground: 'min-h-screen bg-gray-50',
  /** Flex center: flex items-center justify-center */
  flexCenter: 'flex items-center justify-center',
  /** Flex between: flex items-center justify-between */
  flexBetween: 'flex items-center justify-between',
  /** Flex column: flex flex-col */
  flexColumn: 'flex flex-col',
  /** Grid 2 columns: grid grid-cols-2 gap-4 */
  grid2: 'grid grid-cols-2 gap-4',
  /** Grid 3 columns: grid grid-cols-3 gap-4 */
  grid3: 'grid grid-cols-3 gap-4',
} as const;

