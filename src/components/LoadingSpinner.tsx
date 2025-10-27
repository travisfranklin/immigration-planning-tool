/**
 * LoadingSpinner Component
 * Reusable loading spinner with size variants and optional message
 */

interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: 'sm' | 'md' | 'lg';
  /** Optional loading message to display */
  message?: string;
  /** Optional secondary message (smaller text below main message) */
  secondaryMessage?: string;
  /** Whether to render in full-screen centered mode */
  fullScreen?: boolean;
  /** Custom className for the spinner container */
  className?: string;
}

export function LoadingSpinner({
  size = 'md',
  message,
  secondaryMessage,
  fullScreen = false,
  className = '',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-16 w-16',
  };

  const spinner = (
    <div className={`text-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-b-2 border-blue-600 mx-auto mb-4 ${sizeClasses[size]}`}
        role="status"
        aria-label="Loading"
      />
      {message && <p className="text-gray-600">{message}</p>}
      {secondaryMessage && <p className="text-gray-500 text-sm mt-2">{secondaryMessage}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}

