/**
 * Tests for CountrySilhouette Component
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CountrySilhouette } from './CountrySilhouette';
import { hasCountrySilhouette } from '../constants/countrySilhouettes';

describe('CountrySilhouette', () => {
  describe('Rendering', () => {
    it('renders SVG for Germany (DE)', () => {
      render(<CountrySilhouette countryCode="DE" />);
      const svg = screen.getByRole('img', { name: /DE country outline/i });
      expect(svg).toBeInTheDocument();
      expect(svg.tagName.toLowerCase()).toBe('svg');
    });

    it('renders SVG for Netherlands (NL)', () => {
      render(<CountrySilhouette countryCode="NL" />);
      const svg = screen.getByRole('img', { name: /NL country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders SVG for France (FR)', () => {
      render(<CountrySilhouette countryCode="FR" />);
      const svg = screen.getByRole('img', { name: /FR country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders SVG for Spain (ES)', () => {
      render(<CountrySilhouette countryCode="ES" />);
      const svg = screen.getByRole('img', { name: /ES country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders SVG for Italy (IT)', () => {
      render(<CountrySilhouette countryCode="IT" />);
      const svg = screen.getByRole('img', { name: /IT country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders nothing for unsupported country code', () => {
      const { container } = render(<CountrySilhouette countryCode="AT" />);
      expect(container.querySelector('svg')).toBeNull();
    });
  });

  describe('Props', () => {
    it('applies custom size', () => {
      render(<CountrySilhouette countryCode="DE" size={100} />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('width', '100');
      expect(svg).toHaveAttribute('height', '100');
    });

    it('applies default size of 64', () => {
      render(<CountrySilhouette countryCode="DE" />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('width', '64');
      expect(svg).toHaveAttribute('height', '64');
    });

    it('applies custom className', () => {
      render(<CountrySilhouette countryCode="DE" className="custom-class" />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveClass('custom-class');
      expect(svg).toHaveClass('country-silhouette');
    });

    it('applies custom fill color', () => {
      render(<CountrySilhouette countryCode="DE" fill="#FF0000" />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('fill', '#FF0000');
    });

    it('uses currentColor as default fill', () => {
      render(<CountrySilhouette countryCode="DE" />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('fill', 'currentColor');
    });

    it('applies custom ariaLabel', () => {
      render(<CountrySilhouette countryCode="DE" ariaLabel="Germany border" />);
      const svg = screen.getByRole('img', { name: 'Germany border' });
      expect(svg).toBeInTheDocument();
    });
  });

  describe('hasCountrySilhouette helper', () => {
    it('returns true for supported MVP countries', () => {
      expect(hasCountrySilhouette('DE')).toBe(true);
      expect(hasCountrySilhouette('NL')).toBe(true);
      expect(hasCountrySilhouette('FR')).toBe(true);
      expect(hasCountrySilhouette('ES')).toBe(true);
      expect(hasCountrySilhouette('IT')).toBe(true);
    });

    it('returns false for unsupported countries', () => {
      expect(hasCountrySilhouette('AT')).toBe(false);
      expect(hasCountrySilhouette('BE')).toBe(false);
      expect(hasCountrySilhouette('PL')).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('has role="img" for screen readers', () => {
      render(<CountrySilhouette countryCode="DE" />);
      const svg = screen.getByRole('img');
      expect(svg).toBeInTheDocument();
    });

    it('has aria-label for accessibility', () => {
      render(<CountrySilhouette countryCode="FR" />);
      const svg = screen.getByRole('img');
      expect(svg).toHaveAttribute('aria-label', 'FR country outline');
    });
  });
});

