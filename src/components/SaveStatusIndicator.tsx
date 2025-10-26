/**
 * SaveStatusIndicator Component
 * Displays the current save status (saving, saved, or error)
 */

interface SaveStatusIndicatorProps {
  isSaving: boolean;
  lastSaved: number | null;
  error: Error | null;
}

export function SaveStatusIndicator({
  isSaving,
  lastSaved,
  error,
}: SaveStatusIndicatorProps) {
  // Don't render if nothing to show
  if (!isSaving && !lastSaved && !error) {
    return null;
  }

  if (isSaving) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-2 text-sm text-blue-600"
      >
        <div className="animate-spin">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        <span>Saving...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        role="status"
        aria-live="assertive"
        className="flex items-center gap-2 text-sm text-danger-600"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <span>Save failed</span>
      </div>
    );
  }

  if (lastSaved) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-2 text-sm text-success-600"
      >
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span>Saved</span>
      </div>
    );
  }

  return null;
}

