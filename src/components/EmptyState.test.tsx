/**
 * Tests for EmptyState Component
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  describe('Basic Rendering', () => {
    it('should render with message only', () => {
      render(<EmptyState message="No items found" />);
      
      expect(screen.getByText('No items found')).toBeInTheDocument();
    });

    it('should render with default icon', () => {
      const { container } = render(<EmptyState message="No items" />);
      
      expect(container.querySelector('.text-5xl')).toHaveTextContent('📭');
    });

    it('should render with custom icon', () => {
      const { container } = render(<EmptyState message="No items" icon="🔍" />);
      
      expect(container.querySelector('.text-5xl')).toHaveTextContent('🔍');
    });

    it('should render with title', () => {
      render(<EmptyState message="No items found" title="Empty List" />);
      
      expect(screen.getByText('Empty List')).toBeInTheDocument();
      expect(screen.getByText('No items found')).toBeInTheDocument();
    });

    it('should render without title when not provided', () => {
      const { container } = render(<EmptyState message="No items" />);
      
      const title = container.querySelector('h2');
      expect(title).not.toBeInTheDocument();
    });
  });

  describe('Action Button', () => {
    it('should render action button when provided', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick }}
        />
      );
      
      expect(screen.getByRole('button', { name: 'Add Item' })).toBeInTheDocument();
    });

    it('should call onClick when action button is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick }}
        />
      );
      
      await user.click(screen.getByRole('button', { name: 'Add Item' }));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not render action button when not provided', () => {
      render(<EmptyState message="No items" />);
      
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should use primary variant by default', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick }}
        />
      );

      const button = screen.getByRole('button', { name: 'Add Item' });
      expect(button).toHaveClass('bg-primary-600');
    });

    it('should use custom variant when provided', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick, variant: 'secondary' }}
        />
      );
      
      const button = screen.getByRole('button', { name: 'Add Item' });
      expect(button).toHaveClass('bg-gray-200');
    });

    it('should use lg size by default', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick }}
        />
      );
      
      const button = screen.getByRole('button', { name: 'Add Item' });
      expect(button).toHaveClass('px-6', 'py-3');
    });

    it('should use custom size when provided', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          message="No items"
          action={{ label: 'Add Item', onClick: handleClick, size: 'sm' }}
        />
      );

      const button = screen.getByRole('button', { name: 'Add Item' });
      expect(button).toHaveClass('px-3', 'py-1');
    });
  });

  describe('Styling', () => {
    it('should apply default styling', () => {
      const { container } = render(<EmptyState message="No items" />);
      
      const emptyState = container.firstChild as HTMLElement;
      expect(emptyState).toHaveClass('bg-white', 'rounded-lg', 'shadow-md', 'border', 'border-gray-200', 'p-8', 'text-center');
    });

    it('should apply custom className', () => {
      const { container } = render(<EmptyState message="No items" className="custom-class" />);
      
      const emptyState = container.firstChild as HTMLElement;
      expect(emptyState).toHaveClass('custom-class');
    });

    it('should apply correct text styling to message', () => {
      render(<EmptyState message="No items" />);
      
      const message = screen.getByText('No items');
      expect(message).toHaveClass('text-gray-600', 'mb-4');
    });

    it('should apply correct styling to title', () => {
      render(<EmptyState message="No items" title="Empty" />);
      
      const title = screen.getByText('Empty');
      expect(title).toHaveClass('text-xl', 'font-semibold', 'text-gray-900', 'mb-2');
    });

    it('should apply correct styling to icon', () => {
      const { container } = render(<EmptyState message="No items" icon="🔍" />);
      
      const icon = container.querySelector('.text-5xl');
      expect(icon).toHaveClass('mb-4');
    });
  });

  describe('Real-world Scenarios', () => {
    it('should render empty results state', () => {
      const handleRecalculate = vi.fn();
      render(
        <EmptyState
          message="No results available yet."
          action={{ label: 'Calculate Viability Scores', onClick: handleRecalculate }}
        />
      );
      
      expect(screen.getByText('No results available yet.')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Calculate Viability Scores' })).toBeInTheDocument();
    });

    it('should render empty flowchart state', () => {
      render(
        <EmptyState
          message="No flowchart available for this program yet."
        />
      );
      
      expect(screen.getByText('No flowchart available for this program yet.')).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should render with all props', () => {
      const handleClick = vi.fn();
      render(
        <EmptyState
          icon="🎯"
          title="No Data"
          message="There is no data to display"
          action={{ label: 'Load Data', onClick: handleClick, variant: 'success', size: 'md' }}
          className="my-custom-class"
        />
      );
      
      expect(screen.getByText('🎯')).toBeInTheDocument();
      expect(screen.getByText('No Data')).toBeInTheDocument();
      expect(screen.getByText('There is no data to display')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Load Data' })).toBeInTheDocument();
    });
  });
});

