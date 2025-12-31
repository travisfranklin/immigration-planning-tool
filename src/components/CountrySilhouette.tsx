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
 *
 * SVG Source: djaiss/mapsicon (MIT-style license)
 * https://github.com/djaiss/mapsicon
 */

import React from 'react';
import type { CountryCode } from '../constants/countries';

// Import SVG files directly
import DeSvg from '../assets/country-silhouettes/de.svg?react';
import NlSvg from '../assets/country-silhouettes/nl.svg?react';
import FrSvg from '../assets/country-silhouettes/fr.svg?react';
import EsSvg from '../assets/country-silhouettes/es.svg?react';
import ItSvg from '../assets/country-silhouettes/it.svg?react';

export interface CountrySilhouetteProps {
  /** Two-letter ISO country code */
  countryCode: CountryCode;
  /** Size in pixels (width and height) */
  size?: number;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * Map of country codes to their SVG components
 */
const COUNTRY_SVG_MAP: Partial<Record<CountryCode, React.FC<React.SVGProps<SVGSVGElement>>>> = {
  DE: DeSvg,
  NL: NlSvg,
  FR: FrSvg,
  ES: EsSvg,
  IT: ItSvg,
};

/**
 * Renders an SVG silhouette of a country's border
 */
export const CountrySilhouette: React.FC<CountrySilhouetteProps> = ({
  countryCode,
  size = 64,
  className = '',
  ariaLabel,
}) => {
  const SvgComponent = COUNTRY_SVG_MAP[countryCode];

  // If no silhouette available, render nothing
  if (!SvgComponent) {
    return null;
  }

  return (
    <SvgComponent
      width={size}
      height={size}
      className={`country-silhouette ${className}`}
      role="img"
      aria-label={ariaLabel || `${countryCode} country outline`}
    />
  );
};



