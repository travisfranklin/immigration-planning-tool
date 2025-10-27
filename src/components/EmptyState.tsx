/**
 * EmptyState Component
 * Displays a consistent empty state UI with optional icon, title, message, and action button
 */

import { Button } from './Button';

export interface EmptyStateProps {
  /** Icon to display (emoji or text) */
  icon?: string;
  /** Title text */
  title?: string;
  /** Message text (required) */
  message: string;
  /** Optional action button configuration */
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
  };
  /** Additional CSS classes */
  className?: string;
}

export function EmptyState({
  icon = '📭',
  title,
  message,
  action,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center ${className}`}>
      <div className="text-5xl mb-4">{icon}</div>
      {title && <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>}
      <p className="text-gray-600 mb-4">{message}</p>
      {action && (
        <Button
          onClick={action.onClick}
          variant={action.variant || 'primary'}
          size={action.size || 'lg'}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

