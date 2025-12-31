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

// Import SVG files directly for all EU countries
import AtSvg from '../assets/country-silhouettes/at.svg?react';
import BeSvg from '../assets/country-silhouettes/be.svg?react';
import BgSvg from '../assets/country-silhouettes/bg.svg?react';
import HrSvg from '../assets/country-silhouettes/hr.svg?react';
import CySvg from '../assets/country-silhouettes/cy.svg?react';
import CzSvg from '../assets/country-silhouettes/cz.svg?react';
import DkSvg from '../assets/country-silhouettes/dk.svg?react';
import EeSvg from '../assets/country-silhouettes/ee.svg?react';
import FiSvg from '../assets/country-silhouettes/fi.svg?react';
import FrSvg from '../assets/country-silhouettes/fr.svg?react';
import DeSvg from '../assets/country-silhouettes/de.svg?react';
import GrSvg from '../assets/country-silhouettes/gr.svg?react';
import HuSvg from '../assets/country-silhouettes/hu.svg?react';
import IeSvg from '../assets/country-silhouettes/ie.svg?react';
import ItSvg from '../assets/country-silhouettes/it.svg?react';
import LvSvg from '../assets/country-silhouettes/lv.svg?react';
import LtSvg from '../assets/country-silhouettes/lt.svg?react';
import LuSvg from '../assets/country-silhouettes/lu.svg?react';
import MtSvg from '../assets/country-silhouettes/mt.svg?react';
import NlSvg from '../assets/country-silhouettes/nl.svg?react';
import PlSvg from '../assets/country-silhouettes/pl.svg?react';
import PtSvg from '../assets/country-silhouettes/pt.svg?react';
import RoSvg from '../assets/country-silhouettes/ro.svg?react';
import SkSvg from '../assets/country-silhouettes/sk.svg?react';
import SiSvg from '../assets/country-silhouettes/si.svg?react';
import EsSvg from '../assets/country-silhouettes/es.svg?react';
import SeSvg from '../assets/country-silhouettes/se.svg?react';

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
const COUNTRY_SVG_MAP: Record<CountryCode, React.FC<React.SVGProps<SVGSVGElement>>> = {
  AT: AtSvg,
  BE: BeSvg,
  BG: BgSvg,
  HR: HrSvg,
  CY: CySvg,
  CZ: CzSvg,
  DK: DkSvg,
  EE: EeSvg,
  FI: FiSvg,
  FR: FrSvg,
  DE: DeSvg,
  GR: GrSvg,
  HU: HuSvg,
  IE: IeSvg,
  IT: ItSvg,
  LV: LvSvg,
  LT: LtSvg,
  LU: LuSvg,
  MT: MtSvg,
  NL: NlSvg,
  PL: PlSvg,
  PT: PtSvg,
  RO: RoSvg,
  SK: SkSvg,
  SI: SiSvg,
  ES: EsSvg,
  SE: SeSvg,
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



