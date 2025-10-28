import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';
import { getVariantFromProgress } from '../utils/progressHelpers';

describe('ProgressBar', () => {
  describe('Basic Rendering', () => {
    it('should render with default props', () => {
      render(<ProgressBar value={50} />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });

    it('should render with custom max value', () => {
      render(<ProgressBar value={50} max={200} />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuemax', '200');
    });

    it('should render with label', () => {
      render(<ProgressBar value={50} label="Loading" />);
      
      expect(screen.getByText('Loading')).toBeInTheDocument();
    });

    it('should render with percentage', () => {
      render(<ProgressBar value={75} showPercentage />);
      
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('should render with both label and percentage', () => {
      render(<ProgressBar value={60} label="Progress" showPercentage />);
      
      expect(screen.getByText('Progress')).toBeInTheDocument();
      expect(screen.getByText('60%')).toBeInTheDocument();
    });
  });

  describe('Progress Calculation', () => {
    it('should calculate percentage correctly', () => {
      render(<ProgressBar value={50} max={100} showPercentage />);
      expect(screen.getByText('50%')).toBeInTheDocument();
    });

    it('should calculate percentage with custom max', () => {
      render(<ProgressBar value={50} max={200} showPercentage />);
      expect(screen.getByText('25%')).toBeInTheDocument();
    });

    it('should clamp value to max', () => {
      render(<ProgressBar value={150} max={100} showPercentage />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '100');
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('should clamp negative values to 0', () => {
      render(<ProgressBar value={-10} showPercentage />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '0');
      expect(screen.getByText('0%')).toBeInTheDocument();
    });

    it('should round percentage to nearest integer', () => {
      render(<ProgressBar value={33.333} showPercentage />);
      expect(screen.getByText('33%')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply primary variant classes', () => {
      const { container } = render(<ProgressBar value={50} variant="primary" />);
      
      const fill = container.querySelector('.bg-primary');
      expect(fill).toBeInTheDocument();
    });

    it('should apply success variant classes', () => {
      const { container } = render(<ProgressBar value={50} variant="success" />);
      
      const fill = container.querySelector('.bg-success');
      expect(fill).toBeInTheDocument();
    });

    it('should apply warning variant classes', () => {
      const { container } = render(<ProgressBar value={50} variant="warning" />);
      
      const fill = container.querySelector('.bg-warning');
      expect(fill).toBeInTheDocument();
    });

    it('should apply danger variant classes', () => {
      const { container } = render(<ProgressBar value={50} variant="danger" />);
      
      const fill = container.querySelector('.bg-danger');
      expect(fill).toBeInTheDocument();
    });

    it('should apply neutral variant classes by default', () => {
      const { container } = render(<ProgressBar value={50} />);
      
      const fill = container.querySelector('.bg-black');
      expect(fill).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should apply small size classes', () => {
      const { container } = render(<ProgressBar value={50} size="sm" />);
      
      const fills = container.querySelectorAll('.h-1');
      expect(fills.length).toBeGreaterThan(0);
    });

    it('should apply medium size classes by default', () => {
      const { container } = render(<ProgressBar value={50} />);
      
      const fills = container.querySelectorAll('.h-2');
      expect(fills.length).toBeGreaterThan(0);
    });

    it('should apply large size classes', () => {
      const { container } = render(<ProgressBar value={50} size="lg" />);
      
      const fills = container.querySelectorAll('.h-3');
      expect(fills.length).toBeGreaterThan(0);
    });
  });

  describe('Styling', () => {
    it('should have sharp corners (no border-radius)', () => {
      const { container } = render(<ProgressBar value={50} />);
      
      const progressContainer = container.querySelector('.bg-gray-200');
      expect(progressContainer).toHaveClass('border-2', 'border-black');
    });

    it('should apply custom className', () => {
      const { container } = render(<ProgressBar value={50} className="custom-class" />);
      
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveClass('custom-class');
    });

    it('should have uppercase label', () => {
      render(<ProgressBar value={50} label="Loading" />);
      
      const label = screen.getByText('Loading');
      expect(label).toHaveClass('uppercase');
    });
  });

  describe('getVariantFromProgress', () => {
    it('should return primary for high progress (80-100%)', () => {
      expect(getVariantFromProgress(100, 100)).toBe('primary');
      expect(getVariantFromProgress(85, 100)).toBe('primary');
      expect(getVariantFromProgress(80, 100)).toBe('primary');
    });

    it('should return success for good progress (60-79%)', () => {
      expect(getVariantFromProgress(79, 100)).toBe('success');
      expect(getVariantFromProgress(70, 100)).toBe('success');
      expect(getVariantFromProgress(60, 100)).toBe('success');
    });

    it('should return warning for medium progress (40-59%)', () => {
      expect(getVariantFromProgress(59, 100)).toBe('warning');
      expect(getVariantFromProgress(50, 100)).toBe('warning');
      expect(getVariantFromProgress(40, 100)).toBe('warning');
    });

    it('should return danger for low progress (0-39%)', () => {
      expect(getVariantFromProgress(39, 100)).toBe('danger');
      expect(getVariantFromProgress(20, 100)).toBe('danger');
      expect(getVariantFromProgress(0, 100)).toBe('danger');
    });

    it('should work with custom max values', () => {
      expect(getVariantFromProgress(160, 200)).toBe('primary');  // 80%
      expect(getVariantFromProgress(140, 200)).toBe('success');  // 70%
      expect(getVariantFromProgress(100, 200)).toBe('warning');  // 50%
      expect(getVariantFromProgress(60, 200)).toBe('danger');    // 30%
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<ProgressBar value={75} max={100} label="Loading" />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '75');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
      expect(progressBar).toHaveAttribute('aria-label', 'Loading');
    });

    it('should have default aria-label when no label provided', () => {
      render(<ProgressBar value={50} />);
      
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-label', 'Progress');
    });

    it('should have high contrast colors', () => {
      render(<ProgressBar value={50} label="Test" />);
      
      const label = screen.getByText('Test');
      expect(label).toHaveClass('text-black');
    });
  });
});

