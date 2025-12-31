import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataCard } from './DataCard';
import { getDataCardVariant } from '@/constants/viability';

describe('DataCard', () => {
  describe('Basic Rendering', () => {
    it('should render title and value', () => {
      render(<DataCard title="Score" value={85} />);

      expect(screen.getByText('Score')).toBeInTheDocument();
      expect(screen.getByText('85')).toBeInTheDocument();
    });

    it('should render with unit', () => {
      render(<DataCard title="Score" value={85} unit="%" />);
      
      expect(screen.getByText('85')).toBeInTheDocument();
      expect(screen.getByText('%')).toBeInTheDocument();
    });

    it('should render with subtitle', () => {
      render(<DataCard title="Score" value={85} subtitle="Overall viability" />);
      
      expect(screen.getByText('Overall viability')).toBeInTheDocument();
    });

    it('should render with children', () => {
      render(
        <DataCard title="Score" value={85}>
          <div>Additional content</div>
        </DataCard>
      );
      
      expect(screen.getByText('Additional content')).toBeInTheDocument();
    });

    it('should render string values', () => {
      render(<DataCard title="Status" value="Active" />);
      
      expect(screen.getByText('Active')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply primary variant classes', () => {
      const { container } = render(<DataCard title="Score" value={85} variant="primary" />);
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-primary');
    });

    it('should apply success variant classes', () => {
      const { container } = render(<DataCard title="Score" value={70} variant="success" />);

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-success-dark');
    });

    it('should apply warning variant classes', () => {
      const { container } = render(<DataCard title="Score" value={50} variant="warning" />);
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-warning');
    });

    it('should apply danger variant classes', () => {
      const { container } = render(<DataCard title="Score" value={30} variant="danger" />);
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-danger');
    });

    it('should apply neutral variant classes by default', () => {
      const { container } = render(<DataCard title="Score" value={50} />);
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('border-black');
    });
  });

  describe('Styling', () => {
    it('should have sharp corners (no border-radius)', () => {
      const { container } = render(<DataCard title="Score" value={85} />);
      
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('bg-white');
      expect(card).toHaveClass('border-2');
    });

    it('should apply custom className', () => {
      const { container } = render(<DataCard title="Score" value={85} className="custom-class" />);

      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-class');
    });

    it('should have uppercase title', () => {
      render(<DataCard title="Score" value={85} />);

      const title = screen.getByText('Score');
      expect(title).toHaveClass('uppercase');
    });
  });

  describe('getDataCardVariant', () => {
    it('should return secondary for high scores (80-100)', () => {
      expect(getDataCardVariant(100)).toBe('success');
      expect(getDataCardVariant(85)).toBe('success');
      expect(getDataCardVariant(80)).toBe('success');
    });

    it('should return success for good scores (60-79)', () => {
      expect(getDataCardVariant(79)).toBe('primary');
      expect(getDataCardVariant(70)).toBe('primary');
      expect(getDataCardVariant(60)).toBe('primary');
    });

    it('should return warning for medium scores (40-59)', () => {
      expect(getDataCardVariant(59)).toBe('warning');
      expect(getDataCardVariant(50)).toBe('warning');
      expect(getDataCardVariant(40)).toBe('warning');
    });

    it('should return danger for low scores (0-39)', () => {
      expect(getDataCardVariant(39)).toBe('danger');
      expect(getDataCardVariant(20)).toBe('danger');
      expect(getDataCardVariant(0)).toBe('danger');
    });

    it('should return neutral for negative scores', () => {
      expect(getDataCardVariant(-1)).toBe('neutral');
      expect(getDataCardVariant(-10)).toBe('neutral');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<DataCard title="Score" value={85} />);

      const title = screen.getByRole('heading', { level: 3 });
      expect(title).toHaveTextContent('Score');
    });

    it('should have high contrast text', () => {
      render(<DataCard title="Score" value={85} />);

      const title = screen.getByText('Score');
      expect(title).toHaveClass('text-black');
    });
  });
});

