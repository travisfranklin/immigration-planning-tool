/**
 * ProgressBar Component
 * 
 * Bold, geometric progress bar following German functionalism
 * 
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - Solid fills (no gradients)
 * - 8px height (bold, visible)
 * - Color coding by progress/variant
 * - High contrast
 * - No decorative effects
 */



export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value (default: 100) */
  max?: number;
  /** Optional label to display */
  label?: string;
  /** Show percentage text */
  showPercentage?: boolean;
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Optional className for custom styling */
  className?: string;
}

/**
 * Get background color classes based on variant
 */
function getVariantClasses(variant: ProgressBarProps['variant']): string {
  switch (variant) {
    case 'primary':
      return 'bg-primary';  // Electric Indigo
    case 'success':
      return 'bg-success';  // Aquamarine
    case 'warning':
      return 'bg-warning';  // Orange Peel
    case 'danger':
      return 'bg-danger';   // Red-Orange
    case 'neutral':
    default:
      return 'bg-black';    // Smoky Black
  }
}

/**
 * Get height classes based on size
 */
function getSizeClasses(size: ProgressBarProps['size']): string {
  switch (size) {
    case 'sm':
      return 'h-1';  // 8px
    case 'md':
      return 'h-2';  // 16px
    case 'lg':
      return 'h-3';  // 24px
    default:
      return 'h-2';  // 16px default
  }
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = false,
  variant = 'neutral',
  size = 'md',
  className = '',
}: ProgressBarProps) {
  // Clamp value between 0 and max
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = (clampedValue / max) * 100;
  
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  return (
    <div className={`w-full ${className}`}>
      {/* Label and Percentage */}
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-1">
          {label && (
            <span className="text-label uppercase font-bold tracking-wide text-black">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-label font-bold font-mono text-black">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar Container */}
      <div className={`w-full bg-gray-200 border-2 border-black ${sizeClasses}`}>
        {/* Progress Bar Fill */}
        <div
          className={`${sizeClasses} ${variantClasses} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || 'Progress'}
        />
      </div>
    </div>
  );
}

