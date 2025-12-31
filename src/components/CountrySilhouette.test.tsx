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

    it('renders SVG for Austria (AT)', () => {
      render(<CountrySilhouette countryCode="AT" />);
      const svg = screen.getByRole('img', { name: /AT country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders SVG for Poland (PL)', () => {
      render(<CountrySilhouette countryCode="PL" />);
      const svg = screen.getByRole('img', { name: /PL country outline/i });
      expect(svg).toBeInTheDocument();
    });

    it('renders SVG for Sweden (SE)', () => {
      render(<CountrySilhouette countryCode="SE" />);
      const svg = screen.getByRole('img', { name: /SE country outline/i });
      expect(svg).toBeInTheDocument();
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

    it('applies custom ariaLabel', () => {
      render(<CountrySilhouette countryCode="DE" ariaLabel="Germany border" />);
      const svg = screen.getByRole('img', { name: 'Germany border' });
      expect(svg).toBeInTheDocument();
    });
  });

  describe('hasCountrySilhouette helper', () => {
    it('returns true for all EU countries', () => {
      // MVP countries
      expect(hasCountrySilhouette('DE')).toBe(true);
      expect(hasCountrySilhouette('NL')).toBe(true);
      expect(hasCountrySilhouette('FR')).toBe(true);
      expect(hasCountrySilhouette('ES')).toBe(true);
      expect(hasCountrySilhouette('IT')).toBe(true);

      // Phase 2 countries
      expect(hasCountrySilhouette('AT')).toBe(true);
      expect(hasCountrySilhouette('BE')).toBe(true);
      expect(hasCountrySilhouette('LU')).toBe(true);
      expect(hasCountrySilhouette('IE')).toBe(true);

      // Other EU countries
      expect(hasCountrySilhouette('PL')).toBe(true);
      expect(hasCountrySilhouette('SE')).toBe(true);
      expect(hasCountrySilhouette('GR')).toBe(true);
    });

    it('returns false for non-EU countries', () => {
      expect(hasCountrySilhouette('US')).toBe(false);
      expect(hasCountrySilhouette('GB')).toBe(false);
      expect(hasCountrySilhouette('CH')).toBe(false);
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

