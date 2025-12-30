/**
 * Centralized Flowcharts Index
 * Single source of truth for all country flowchart mappings
 *
 * Uses the template-based composition system for all 27 EU countries.
 * See src/data/flowcharts/programs/ for individual country implementations.
 */

import { CountryCode } from '../../constants/countries';
import type { FlowchartDefinition } from '../../types/flowchart';

// Import from new template-based programs
import { germanyFlowchartsNew } from './programs/germany';
import { netherlandsFlowchartsNew } from './programs/netherlands';
import { franceFlowchartsNew } from './programs/france';
import { spainFlowchartsNew } from './programs/spain';
import { italyFlowchartsNew } from './programs/italy';
import { austriaFlowchartsNew } from './programs/austria';
import { belgiumFlowchartsNew } from './programs/belgium';
import { luxembourgFlowchartsNew } from './programs/luxembourg';
import { irelandFlowchartsNew } from './programs/ireland';
import { swedenFlowchartsNew } from './programs/sweden';
import { denmarkFlowchartsNew } from './programs/denmark';
import { finlandFlowchartsNew } from './programs/finland';
import { portugalFlowchartsNew } from './programs/portugal';
import { greeceFlowchartsNew } from './programs/greece';
import { cyprusFlowchartsNew } from './programs/cyprus';
import { maltaFlowchartsNew } from './programs/malta';
import { polandFlowchartsNew } from './programs/poland';
import { czechRepublicFlowchartsNew } from './programs/czech-republic';
import { hungaryFlowchartsNew } from './programs/hungary';
import { romaniaFlowchartsNew } from './programs/romania';
import { bulgariaFlowchartsNew } from './programs/bulgaria';
import { slovakiaFlowchartsNew } from './programs/slovakia';
import { sloveniaFlowchartsNew } from './programs/slovenia';
import { croatiaFlowchartsNew } from './programs/croatia';
import { estoniaFlowchartsNew } from './programs/estonia';
import { latviaFlowchartsNew } from './programs/latvia';
import { lithuaniaFlowchartsNew } from './programs/lithuania';

/**
 * Master mapping of all flowcharts by country code
 * This is the single source of truth for flowchart data
 *
 * All flowcharts are now built using the template-based composition system,
 * which enables bulk updates to common steps while preserving country-specific overrides.
 */
export const ALL_FLOWCHARTS: Record<CountryCode, Record<string, FlowchartDefinition>> = {
  [CountryCode.DE]: germanyFlowchartsNew,
  [CountryCode.NL]: netherlandsFlowchartsNew,
  [CountryCode.FR]: franceFlowchartsNew,
  [CountryCode.ES]: spainFlowchartsNew,
  [CountryCode.IT]: italyFlowchartsNew,
  [CountryCode.AT]: austriaFlowchartsNew,
  [CountryCode.BE]: belgiumFlowchartsNew,
  [CountryCode.LU]: luxembourgFlowchartsNew,
  [CountryCode.IE]: irelandFlowchartsNew,
  [CountryCode.SE]: swedenFlowchartsNew,
  [CountryCode.DK]: denmarkFlowchartsNew,
  [CountryCode.FI]: finlandFlowchartsNew,
  [CountryCode.PT]: portugalFlowchartsNew,
  [CountryCode.GR]: greeceFlowchartsNew,
  [CountryCode.CY]: cyprusFlowchartsNew,
  [CountryCode.MT]: maltaFlowchartsNew,
  [CountryCode.PL]: polandFlowchartsNew,
  [CountryCode.CZ]: czechRepublicFlowchartsNew,
  [CountryCode.HU]: hungaryFlowchartsNew,
  [CountryCode.RO]: romaniaFlowchartsNew,
  [CountryCode.BG]: bulgariaFlowchartsNew,
  [CountryCode.SK]: slovakiaFlowchartsNew,
  [CountryCode.SI]: sloveniaFlowchartsNew,
  [CountryCode.HR]: croatiaFlowchartsNew,
  [CountryCode.EE]: estoniaFlowchartsNew,
  [CountryCode.LV]: latviaFlowchartsNew,
  [CountryCode.LT]: lithuaniaFlowchartsNew,
};

/**
 * Get all flowcharts for a specific country
 * @param code - The country code
 * @returns Record of program IDs to flowchart definitions, or empty object if not found
 */
export function getFlowchartsForCountry(code: CountryCode): Record<string, FlowchartDefinition> {
  return ALL_FLOWCHARTS[code] || {};
}

/**
 * Get a specific flowchart by country and program ID
 * @param countryCode - The country code
 * @param programId - The program ID
 * @returns The flowchart definition, or undefined if not found
 */
export function getFlowchart(countryCode: CountryCode, programId: string): FlowchartDefinition | undefined {
  return ALL_FLOWCHARTS[countryCode]?.[programId];
}

