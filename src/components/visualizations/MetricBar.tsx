/**
 * MetricBar Component
 * 
 * Inline metric bar with label + value + bar in one line
 * 
 * Design Principles:
 * - Inline layout (label, value, bar)
 * - Bold, geometric design
 * - Sharp corners (no border-radius)
 * - Color-coded variants
 * - High contrast
 * - Minimal, functional design
 */

export interface MetricBarProps {
  /** Metric label */
  label: string;
  /** Current value */
  value: number;
  /** Maximum value (default: 100) */
  maxValue?: number;
  /** Optional unit (e.g., "%", "pts", "months") */
  unit?: string;
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Show percentage instead of raw value */
  showPercentage?: boolean;
  /** Optional className for custom styling */
  className?: string;
}

/**
 * Get color classes based on variant
 */
function getVariantClasses(variant: MetricBarProps['variant']): { text: string; bg: string } {
  switch (variant) {
    case 'primary':
      return { text: 'text-primary', bg: 'bg-primary' };
    case 'success':
      return { text: 'text-success', bg: 'bg-success' };
    case 'warning':
      return { text: 'text-warning', bg: 'bg-warning' };
    case 'danger':
      return { text: 'text-danger', bg: 'bg-danger' };
    case 'neutral':
    default:
      return { text: 'text-black', bg: 'bg-black' };
  }
}

/**
 * Automatically determine variant based on percentage
 */
// eslint-disable-next-line react-refresh/only-export-components
export function getVariantFromPercentage(percentage: number): MetricBarProps['variant'] {
  if (percentage >= 80) return 'primary';
  if (percentage >= 60) return 'success';
  if (percentage >= 40) return 'warning';
  return 'danger';
}

export function MetricBar({
  label,
  value,
  maxValue = 100,
  unit,
  variant = 'neutral',
  showPercentage = false,
  className = '',
}: MetricBarProps) {
  const colors = getVariantClasses(variant);
  const percentage = (value / maxValue) * 100;
  const displayValue = showPercentage ? `${Math.round(percentage)}%` : value;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Label - Fixed width for alignment */}
      <div className="w-32 flex-shrink-0">
        <span className="text-body-sm font-bold text-black uppercase tracking-wide">
          {label}
        </span>
      </div>

      {/* Value - Fixed width for alignment */}
      <div className="w-16 flex-shrink-0 text-right">
        <span className={`text-body font-bold font-mono ${colors.text}`}>
          {displayValue}
          {!showPercentage && unit && <span className="text-body-sm">{unit}</span>}
        </span>
      </div>

      {/* Bar - Flexible width */}
      <div className="flex-1 min-w-0">
        <div className="w-full bg-gray-200 h-3 border-2 border-black">
          <div
            className={`${colors.bg} h-full transition-all duration-500`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

