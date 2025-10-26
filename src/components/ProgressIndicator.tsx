/**
 * ProgressIndicator Component
 * Displays multi-step form progress with visual indicators
 */

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

const STEP_LABELS = ['Personal', 'Financial', 'Education', 'Career', 'Family', 'Language', 'Country'];

export function ProgressIndicator({
  currentStep,
  totalSteps,
  progress,
}: ProgressIndicatorProps) {
  return (
    <div className="w-full space-y-4">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-semibold text-primary-600">{progress}%</span>
        </div>

        <div
          className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <button
              key={stepNumber}
              type="button"
              disabled
              className={`
                flex-1 py-2 px-1 rounded-lg font-medium text-xs transition-colors
                flex flex-col items-center justify-center gap-1
                ${
                  isCompleted
                    ? 'bg-success-600 text-white'
                    : isCurrent
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                }
              `}
              aria-label={`Step ${stepNumber}: ${STEP_LABELS[index]}`}
            >
              <span className="text-lg">
                {isCompleted ? '✓' : stepNumber}
              </span>
              <span className="hidden sm:inline text-xs">
                {STEP_LABELS[index]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

