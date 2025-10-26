import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressIndicator } from './ProgressIndicator';

describe('ProgressIndicator', () => {
  it('should render progress bar', () => {
    render(<ProgressIndicator currentStep={1} totalSteps={7} progress={14} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  it('should display correct progress percentage', () => {
    render(<ProgressIndicator currentStep={1} totalSteps={7} progress={14} />);

    expect(screen.getByText('14%')).toBeInTheDocument();
  });

  it('should display current step and total steps', () => {
    render(<ProgressIndicator currentStep={3} totalSteps={7} progress={43} />);

    expect(screen.getByText('Step 3 of 7')).toBeInTheDocument();
  });

  it('should render all step indicators', () => {
    render(<ProgressIndicator currentStep={1} totalSteps={7} progress={14} />);

    const steps = screen.getAllByRole('button');
    expect(steps).toHaveLength(7);
  });

  it('should highlight current step', () => {
    render(<ProgressIndicator currentStep={3} totalSteps={7} progress={43} />);

    const steps = screen.getAllByRole('button');
    expect(steps[2]).toHaveClass('bg-primary-600');
  });

  it('should show completed steps', () => {
    render(<ProgressIndicator currentStep={4} totalSteps={7} progress={57} />);

    const steps = screen.getAllByRole('button');
    // Steps 1-3 should be completed (have checkmark or different styling)
    expect(steps[0]).toHaveClass('bg-success-600');
    expect(steps[1]).toHaveClass('bg-success-600');
    expect(steps[2]).toHaveClass('bg-success-600');
  });

  it('should show incomplete steps', () => {
    render(<ProgressIndicator currentStep={2} totalSteps={7} progress={29} />);

    const steps = screen.getAllByRole('button');
    // Steps 3-7 should be incomplete
    expect(steps[2]).toHaveClass('bg-gray-300');
    expect(steps[6]).toHaveClass('bg-gray-300');
  });

  it('should update progress bar width based on progress', () => {
    const { rerender } = render(
      <ProgressIndicator currentStep={1} totalSteps={7} progress={14} />
    );

    let progressFill = screen.getByRole('progressbar').querySelector('div');
    expect(progressFill).toHaveStyle('width: 14%');

    rerender(<ProgressIndicator currentStep={4} totalSteps={7} progress={57} />);

    progressFill = screen.getByRole('progressbar').querySelector('div');
    expect(progressFill).toHaveStyle('width: 57%');
  });

  it('should handle 0% progress', () => {
    render(<ProgressIndicator currentStep={1} totalSteps={7} progress={0} />);

    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('should handle 100% progress', () => {
    render(<ProgressIndicator currentStep={7} totalSteps={7} progress={100} />);

    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('should display step labels', () => {
    render(<ProgressIndicator currentStep={1} totalSteps={7} progress={14} />);

    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Financial')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Career')).toBeInTheDocument();
    expect(screen.getByText('Family')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('should be accessible with proper ARIA attributes', () => {
    render(<ProgressIndicator currentStep={3} totalSteps={7} progress={43} />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '43');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
  });
});

