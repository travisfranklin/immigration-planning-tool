/**
 * CountrySilhouette Component
 * 
 * Renders a stylized SVG silhouette of a country's border.
 * Used in the ResultDetail Country Header for visual identification.
 * 
 * Design Principles (German/Scandinavian):
 * - Minimalist, functional design
 * - Single color (inherits currentColor or uses specified fill)
 * - Clean lines, no decorative effects
 * - Scales responsively
 */

import React from 'react';
import type { CountryCode } from '../constants/countries';
import { getCountrySilhouette } from '../constants/countrySilhouettes';

export interface CountrySilhouetteProps {
  /** Two-letter ISO country code */
  countryCode: CountryCode;
  /** Size in pixels (width and height) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Fill color (defaults to currentColor) */
  fill?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * Renders an SVG silhouette of a country's border
 */
export const CountrySilhouette: React.FC<CountrySilhouetteProps> = ({
  countryCode,
  size = 64,
  className = '',
  fill = 'currentColor',
  ariaLabel,
}) => {
  const silhouette = getCountrySilhouette(countryCode);
  
  // If no silhouette available, render nothing
  if (!silhouette) {
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={silhouette.viewBox}
      fill={fill}
      className={`country-silhouette ${className}`}
      role="img"
      aria-label={ariaLabel || `${countryCode} country outline`}
    >
      {silhouette.paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
};



