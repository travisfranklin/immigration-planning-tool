/**
 * ErrorState Component
 * Reusable error state display with optional action button
 */

import { Button } from './Button';

interface ErrorStateProps {
  /** Error title */
  title?: string;
  /** Error message to display */
  message: string;
  /** Optional action button text */
  actionText?: string;
  /** Optional action button click handler */
  onAction?: () => void;
  /** Whether to render in full-screen centered mode */
  fullScreen?: boolean;
  /** Custom icon (emoji or text) */
  icon?: string;
  /** Custom className for the error container */
  className?: string;
}

export function ErrorState({
  title = 'Error',
  message,
  actionText,
  onAction,
  fullScreen = true,
  icon = '⚠️',
  className = '',
}: ErrorStateProps) {
  const content = (
    <div className={`bg-white rounded-lg shadow-md border border-red-200 p-8 max-w-md ${className}`}>
      <div className="text-red-600 text-5xl mb-4 text-center">{icon}</div>
      <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">{title}</h2>
      <p className="text-gray-600 mb-4 text-center">{message}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction} className="w-full">
          {actionText}
        </Button>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        {content}
      </div>
    );
  }

  return content;
}

