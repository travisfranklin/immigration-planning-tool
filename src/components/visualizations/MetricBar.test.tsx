import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricBar, getVariantFromPercentage } from './MetricBar';

describe('MetricBar', () => {
  describe('Rendering', () => {
    it('renders label', () => {
      render(<MetricBar label="Career" value={75} />);
      expect(screen.getByText('Career')).toBeInTheDocument();
    });

    it('renders value', () => {
      render(<MetricBar label="Career" value={75} />);
      expect(screen.getByText('75')).toBeInTheDocument();
    });

    it('renders unit when provided', () => {
      render(<MetricBar label="Timeline" value={6} unit="mo" />);
      expect(screen.getByText('mo')).toBeInTheDocument();
    });

    it('renders percentage when showPercentage is true', () => {
      render(<MetricBar label="Career" value={75} showPercentage={true} />);
      expect(screen.getByText('75%')).toBeInTheDocument();
    });

    it('calculates percentage correctly with custom maxValue', () => {
      render(<MetricBar label="Career" value={25} maxValue={50} showPercentage={true} />);
      expect(screen.getByText('50%')).toBeInTheDocument();
    });
  });

  describe('Progress Bar', () => {
    it('renders progress bar with correct width', () => {
      const { container } = render(<MetricBar label="Career" value={75} variant="success" />);
      const progressBar = container.querySelector('.bg-success');
      expect(progressBar).toHaveStyle({ width: '75%' });
    });

    it('calculates width correctly with custom maxValue', () => {
      const { container } = render(<MetricBar label="Career" value={25} maxValue={50} variant="success" />);
      const progressBar = container.querySelector('.bg-success');
      expect(progressBar).toHaveStyle({ width: '50%' });
    });

    it('caps width at 100% for values exceeding maxValue', () => {
      const { container } = render(<MetricBar label="Career" value={150} maxValue={100} variant="primary" />);
      const progressBar = container.querySelector('.bg-primary');
      expect(progressBar).toHaveStyle({ width: '100%' });
    });
  });

  describe('Color Variants', () => {
    it('applies primary variant classes', () => {
      const { container } = render(<MetricBar label="Career" value={85} variant="primary" />);
      const valueElement = screen.getByText('85');
      expect(valueElement).toHaveClass('text-primary');
      const progressBar = container.querySelector('.bg-primary');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies success variant classes', () => {
      const { container } = render(<MetricBar label="Career" value={65} variant="success" />);
      const valueElement = screen.getByText('65');
      expect(valueElement).toHaveClass('text-success');
      const progressBar = container.querySelector('.bg-success');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies warning variant classes', () => {
      const { container } = render(<MetricBar label="Career" value={45} variant="warning" />);
      const valueElement = screen.getByText('45');
      expect(valueElement).toHaveClass('text-warning');
      const progressBar = container.querySelector('.bg-warning');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies danger variant classes', () => {
      const { container } = render(<MetricBar label="Career" value={25} variant="danger" />);
      const valueElement = screen.getByText('25');
      expect(valueElement).toHaveClass('text-danger');
      const progressBar = container.querySelector('.bg-danger');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies neutral variant classes by default', () => {
      const { container } = render(<MetricBar label="Career" value={50} />);
      const valueElement = screen.getByText('50');
      expect(valueElement).toHaveClass('text-black');
      const progressBar = container.querySelector('.bg-black');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('renders inline layout with label, value, and bar', () => {
      const { container } = render(<MetricBar label="Career" value={75} />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('flex', 'items-center', 'gap-4');
    });

    it('applies custom className', () => {
      const { container } = render(<MetricBar label="Career" value={75} className="custom-class" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('custom-class');
    });
  });

  describe('getVariantFromPercentage', () => {
    it('returns primary for 80-100%', () => {
      expect(getVariantFromPercentage(85)).toBe('primary');
      expect(getVariantFromPercentage(100)).toBe('primary');
    });

    it('returns success for 60-79%', () => {
      expect(getVariantFromPercentage(65)).toBe('success');
      expect(getVariantFromPercentage(79)).toBe('success');
    });

    it('returns warning for 40-59%', () => {
      expect(getVariantFromPercentage(45)).toBe('warning');
      expect(getVariantFromPercentage(59)).toBe('warning');
    });

    it('returns danger for 0-39%', () => {
      expect(getVariantFromPercentage(25)).toBe('danger');
      expect(getVariantFromPercentage(0)).toBe('danger');
    });
  });
});

