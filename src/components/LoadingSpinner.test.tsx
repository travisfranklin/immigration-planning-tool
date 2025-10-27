/**
 * LoadingSpinner Component Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  describe('Basic Rendering', () => {
    it('renders spinner with default props', () => {
      render(<LoadingSpinner />);
      const spinner = screen.getByRole('status', { name: /loading/i });
      expect(spinner).toBeInTheDocument();
    });

    it('renders with custom message', () => {
      render(<LoadingSpinner message="Loading results..." />);
      expect(screen.getByText('Loading results...')).toBeInTheDocument();
    });

    it('renders with secondary message', () => {
      render(
        <LoadingSpinner
          message="Calculating viability scores..."
          secondaryMessage="This may take a moment"
        />
      );
      expect(screen.getByText('Calculating viability scores...')).toBeInTheDocument();
      expect(screen.getByText('This may take a moment')).toBeInTheDocument();
    });

    it('renders without message when not provided', () => {
      const { container } = render(<LoadingSpinner />);
      const paragraphs = container.querySelectorAll('p');
      expect(paragraphs).toHaveLength(0);
    });
  });

  describe('Size Variants', () => {
    it('renders small spinner', () => {
      const { container } = render(<LoadingSpinner size="sm" />);
      const spinner = container.querySelector('.h-4.w-4');
      expect(spinner).toBeInTheDocument();
    });

    it('renders medium spinner (default)', () => {
      const { container } = render(<LoadingSpinner />);
      const spinner = container.querySelector('.h-8.w-8');
      expect(spinner).toBeInTheDocument();
    });

    it('renders large spinner', () => {
      const { container } = render(<LoadingSpinner size="lg" />);
      const spinner = container.querySelector('.h-16.w-16');
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Full Screen Mode', () => {
    it('renders in full screen mode', () => {
      const { container } = render(<LoadingSpinner fullScreen />);
      const fullScreenContainer = container.querySelector('.min-h-screen');
      expect(fullScreenContainer).toBeInTheDocument();
      expect(fullScreenContainer).toHaveClass('bg-gray-50', 'flex', 'items-center', 'justify-center');
    });

    it('does not render full screen by default', () => {
      const { container } = render(<LoadingSpinner />);
      const fullScreenContainer = container.querySelector('.min-h-screen');
      expect(fullScreenContainer).not.toBeInTheDocument();
    });

    it('renders full screen with message', () => {
      render(<LoadingSpinner fullScreen message="Loading your profile..." />);
      expect(screen.getByText('Loading your profile...')).toBeInTheDocument();
      const spinner = screen.getByRole('status', { name: /loading/i });
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container: _container } = render(<LoadingSpinner className="custom-class" />);
      const textCenter = _container.querySelector('.text-center');
      expect(textCenter).toHaveClass('custom-class');
    });

    it('has correct spinner styling', () => {
      render(<LoadingSpinner />);
      const spinner = screen.getByRole('status', { name: /loading/i });
      expect(spinner).toHaveClass(
        'animate-spin',
        'rounded-full',
        'border-b-2',
        'border-blue-600',
        'mx-auto',
        'mb-4'
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA role', () => {
      render(<LoadingSpinner />);
      const spinner = screen.getByRole('status');
      expect(spinner).toBeInTheDocument();
    });

    it('has proper ARIA label', () => {
      render(<LoadingSpinner />);
      const spinner = screen.getByLabelText('Loading');
      expect(spinner).toBeInTheDocument();
    });
  });

  describe('Message Styling', () => {
    it('applies correct styling to primary message', () => {
      render(<LoadingSpinner message="Loading..." />);
      const message = screen.getByText('Loading...');
      expect(message).toHaveClass('text-gray-600');
    });

    it('applies correct styling to secondary message', () => {
      render(<LoadingSpinner secondaryMessage="Please wait" />);
      const secondaryMessage = screen.getByText('Please wait');
      expect(secondaryMessage).toHaveClass('text-gray-500', 'text-sm', 'mt-2');
    });
  });
});

