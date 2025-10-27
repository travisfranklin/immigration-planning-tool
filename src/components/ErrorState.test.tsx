/**
 * ErrorState Component Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorState } from './ErrorState';

describe('ErrorState', () => {
  describe('Basic Rendering', () => {
    it('renders with required props', () => {
      render(<ErrorState message="Something went wrong" />);
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('renders default title when not provided', () => {
      render(<ErrorState message="Test error" />);
      expect(screen.getByText('Error')).toBeInTheDocument();
    });

    it('renders custom title', () => {
      render(<ErrorState title="Custom Error" message="Test error" />);
      expect(screen.getByText('Custom Error')).toBeInTheDocument();
      expect(screen.queryByText('Error')).not.toBeInTheDocument();
    });

    it('renders default icon when not provided', () => {
      render(<ErrorState message="Test error" />);
      expect(screen.getByText('⚠️')).toBeInTheDocument();
    });

    it('renders custom icon', () => {
      render(<ErrorState message="Test error" icon="🚫" />);
      expect(screen.getByText('🚫')).toBeInTheDocument();
      expect(screen.queryByText('⚠️')).not.toBeInTheDocument();
    });
  });

  describe('Action Button', () => {
    it('renders action button when actionText and onAction provided', () => {
      const handleAction = vi.fn();
      render(<ErrorState message="Test error" actionText="Retry" onAction={handleAction} />);
      expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    });

    it('does not render action button when only actionText provided', () => {
      render(<ErrorState message="Test error" actionText="Retry" />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('does not render action button when only onAction provided', () => {
      const handleAction = vi.fn();
      render(<ErrorState message="Test error" onAction={handleAction} />);
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('calls onAction when button clicked', async () => {
      const user = userEvent.setup();
      const handleAction = vi.fn();
      render(<ErrorState message="Test error" actionText="Retry" onAction={handleAction} />);
      
      const button = screen.getByRole('button', { name: /retry/i });
      await user.click(button);
      
      expect(handleAction).toHaveBeenCalledTimes(1);
    });

    it('renders button with full width', () => {
      const handleAction = vi.fn();
      render(<ErrorState message="Test error" actionText="Retry" onAction={handleAction} />);
      const button = screen.getByRole('button', { name: /retry/i });
      expect(button).toHaveClass('w-full');
    });
  });

  describe('Full Screen Mode', () => {
    it('renders in full screen mode by default', () => {
      const { container } = render(<ErrorState message="Test error" />);
      const fullScreenContainer = container.querySelector('.min-h-screen');
      expect(fullScreenContainer).toBeInTheDocument();
      expect(fullScreenContainer).toHaveClass('bg-gray-50', 'flex', 'items-center', 'justify-center', 'p-4');
    });

    it('does not render full screen when fullScreen is false', () => {
      const { container } = render(<ErrorState message="Test error" fullScreen={false} />);
      const fullScreenContainer = container.querySelector('.min-h-screen');
      expect(fullScreenContainer).not.toBeInTheDocument();
    });

    it('renders full screen with all props', () => {
      const handleAction = vi.fn();
      const { container } = render(
        <ErrorState
          title="Network Error"
          message="Failed to connect"
          actionText="Retry"
          onAction={handleAction}
          fullScreen
          icon="🌐"
        />
      );
      
      expect(container.querySelector('.min-h-screen')).toBeInTheDocument();
      expect(screen.getByText('Network Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to connect')).toBeInTheDocument();
      expect(screen.getByText('🌐')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('applies correct styling to error container', () => {
      const { container } = render(<ErrorState message="Test error" fullScreen={false} />);
      const errorContainer = container.querySelector('.bg-white');
      expect(errorContainer).toHaveClass(
        'bg-white',
        'rounded-lg',
        'shadow-md',
        'border',
        'border-red-200',
        'p-8',
        'max-w-md'
      );
    });

    it('applies custom className', () => {
      const { container } = render(<ErrorState message="Test error" className="custom-class" fullScreen={false} />);
      const errorContainer = container.querySelector('.bg-white');
      expect(errorContainer).toHaveClass('custom-class');
    });

    it('applies correct styling to icon', () => {
      const { container } = render(<ErrorState message="Test error" fullScreen={false} />);
      const iconContainer = container.querySelector('.text-red-600.text-5xl');
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer).toHaveClass('text-red-600', 'text-5xl', 'mb-4', 'text-center');
    });

    it('applies correct styling to title', () => {
      render(<ErrorState message="Test error" />);
      const title = screen.getByText('Error');
      expect(title).toHaveClass('text-xl', 'font-bold', 'text-gray-900', 'mb-2', 'text-center');
    });

    it('applies correct styling to message', () => {
      render(<ErrorState message="Test error" />);
      const message = screen.getByText('Test error');
      expect(message).toHaveClass('text-gray-600', 'mb-4', 'text-center');
    });
  });

  describe('Real-world Scenarios', () => {
    it('renders profile not found error', () => {
      const handleGoToProfile = vi.fn();
      render(
        <ErrorState
          message="No profile found. Please complete your profile first."
          actionText="Go to Profile"
          onAction={handleGoToProfile}
        />
      );
      
      expect(screen.getByText('No profile found. Please complete your profile first.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /go to profile/i })).toBeInTheDocument();
    });

    it('renders invalid country code error', () => {
      const handleBackToResults = vi.fn();
      render(
        <ErrorState
          message="Invalid country code"
          actionText="Back to Results"
          onAction={handleBackToResults}
        />
      );
      
      expect(screen.getByText('Invalid country code')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /back to results/i })).toBeInTheDocument();
    });

    it('renders network error with custom icon', () => {
      const handleRetry = vi.fn();
      render(
        <ErrorState
          title="Network Error"
          message="Failed to load result details. Please try again."
          actionText="Retry"
          onAction={handleRetry}
          icon="🌐"
        />
      );
      
      expect(screen.getByText('Network Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to load result details. Please try again.')).toBeInTheDocument();
      expect(screen.getByText('🌐')).toBeInTheDocument();
    });
  });
});

