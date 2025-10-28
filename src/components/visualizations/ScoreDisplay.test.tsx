import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScoreDisplay } from './ScoreDisplay';

describe('ScoreDisplay', () => {
  describe('Rendering', () => {
    it('renders score value', () => {
      render(<ScoreDisplay score={85} />);
      expect(screen.getByText('85')).toBeInTheDocument();
    });

    it('renders max score', () => {
      render(<ScoreDisplay score={85} />);
      expect(screen.getByText('/100')).toBeInTheDocument();
    });

    it('renders custom max score', () => {
      render(<ScoreDisplay score={42} maxScore={50} />);
      expect(screen.getByText('/50')).toBeInTheDocument();
    });

    it('renders label when provided', () => {
      render(<ScoreDisplay score={85} label="Overall Score" />);
      expect(screen.getByText('Overall Score')).toBeInTheDocument();
    });

    it('does not render label when not provided', () => {
      render(<ScoreDisplay score={85} />);
      expect(screen.queryByText('Overall Score')).not.toBeInTheDocument();
    });

    it('renders score label (Excellent)', () => {
      render(<ScoreDisplay score={85} />);
      expect(screen.getByText('Excellent')).toBeInTheDocument();
    });

    it('renders score label (Good)', () => {
      render(<ScoreDisplay score={65} />);
      expect(screen.getByText('Good')).toBeInTheDocument();
    });

    it('renders score label (Moderate)', () => {
      render(<ScoreDisplay score={45} />);
      expect(screen.getByText('Moderate')).toBeInTheDocument();
    });

    it('renders score label (Low)', () => {
      render(<ScoreDisplay score={25} />);
      expect(screen.getByText('Low')).toBeInTheDocument();
    });

    it('renders score label (Very Low)', () => {
      render(<ScoreDisplay score={10} />);
      expect(screen.getByText('Very Low')).toBeInTheDocument();
    });
  });

  describe('Progress Bar', () => {
    it('renders progress bar by default', () => {
      const { container } = render(<ScoreDisplay score={85} />);
      const progressBar = container.querySelector('.bg-primary');
      expect(progressBar).toBeInTheDocument();
    });

    it('does not render progress bar when showProgress is false', () => {
      const { container } = render(<ScoreDisplay score={85} showProgress={false} />);
      const progressBar = container.querySelector('.bg-primary');
      expect(progressBar).not.toBeInTheDocument();
    });

    it('sets correct width for progress bar', () => {
      const { container } = render(<ScoreDisplay score={75} />);
      const progressBar = container.querySelector('.bg-success');
      expect(progressBar).toHaveStyle({ width: '75%' });
    });

    it('sets correct width for custom max score', () => {
      const { container } = render(<ScoreDisplay score={25} maxScore={50} />);
      const progressBar = container.querySelector('.bg-danger');
      expect(progressBar).toHaveStyle({ width: '50%' });
    });
  });

  describe('Color Coding', () => {
    it('uses primary color for excellent scores (80-100)', () => {
      const { container } = render(<ScoreDisplay score={85} />);
      const scoreElement = screen.getByText('85');
      expect(scoreElement).toHaveClass('text-primary');
      const progressBar = container.querySelector('.bg-primary');
      expect(progressBar).toBeInTheDocument();
    });

    it('uses success color for good scores (60-79)', () => {
      const { container } = render(<ScoreDisplay score={65} />);
      const scoreElement = screen.getByText('65');
      expect(scoreElement).toHaveClass('text-success');
      const progressBar = container.querySelector('.bg-success');
      expect(progressBar).toBeInTheDocument();
    });

    it('uses warning color for moderate scores (40-59)', () => {
      const { container } = render(<ScoreDisplay score={45} />);
      const scoreElement = screen.getByText('45');
      expect(scoreElement).toHaveClass('text-warning');
      const progressBar = container.querySelector('.bg-warning');
      expect(progressBar).toBeInTheDocument();
    });

    it('uses danger color for low scores (0-39)', () => {
      const { container } = render(<ScoreDisplay score={25} />);
      const scoreElement = screen.getByText('25');
      expect(scoreElement).toHaveClass('text-danger');
      const progressBar = container.querySelector('.bg-danger');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies small size classes', () => {
      const { container } = render(<ScoreDisplay score={85} size="sm" />);
      const scoreElement = screen.getByText('85');
      expect(scoreElement).toHaveClass('text-data-sm');
      const progressBar = container.querySelector('.h-2');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies medium size classes (default)', () => {
      const { container } = render(<ScoreDisplay score={85} size="md" />);
      const scoreElement = screen.getByText('85');
      expect(scoreElement).toHaveClass('text-data');
      const progressBar = container.querySelector('.h-3');
      expect(progressBar).toBeInTheDocument();
    });

    it('applies large size classes', () => {
      const { container } = render(<ScoreDisplay score={85} size="lg" />);
      const scoreElement = screen.getByText('85');
      expect(scoreElement).toHaveClass('text-data-lg');
      const progressBar = container.querySelector('.h-4');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(<ScoreDisplay score={85} className="custom-class" />);
      const wrapper = container.firstChild;
      expect(wrapper).toHaveClass('custom-class');
    });
  });
});

