/**
 * Centralized Flowcharts Index
 * Single source of truth for all country flowchart mappings
 */

import { CountryCode } from '../../constants/countries';
import type { FlowchartDefinition } from '../../types/flowchart';
import { germanyFlowcharts } from './germany';
import { netherlandsFlowcharts } from './netherlands';
import { franceFlowcharts } from './france';
import { spainFlowcharts } from './spain';
import { italyFlowcharts } from './italy';
import { austriaFlowcharts } from './austria';
import { belgiumFlowcharts } from './belgium';
import { luxembourgFlowcharts } from './luxembourg';
import { irelandFlowcharts } from './ireland';
import { swedenFlowcharts } from './sweden';
import { denmarkFlowcharts } from './denmark';
import { finlandFlowcharts } from './finland';
import { portugalFlowcharts } from './portugal';
import { greeceFlowcharts } from './greece';
import { cyprusFlowcharts } from './cyprus';
import { maltaFlowcharts } from './malta';
import { polandFlowcharts } from './poland';
import { czechFlowcharts } from './czech-republic';
import { hungaryFlowcharts } from './hungary';
import { romaniaFlowcharts } from './romania';
import { bulgariaFlowcharts } from './bulgaria';
import { slovakiaFlowcharts } from './slovakia';
import { sloveniaFlowcharts } from './slovenia';
import { croatiaFlowcharts } from './croatia';
import { estoniaFlowcharts } from './estonia';
import { latviaFlowcharts } from './latvia';
import { lithuaniaFlowcharts } from './lithuania';

/**
 * Master mapping of all flowcharts by country code
 * This is the single source of truth for flowchart data
 */
export const ALL_FLOWCHARTS: Record<CountryCode, Record<string, FlowchartDefinition>> = {
  [CountryCode.DE]: germanyFlowcharts,
  [CountryCode.NL]: netherlandsFlowcharts,
  [CountryCode.FR]: franceFlowcharts,
  [CountryCode.ES]: spainFlowcharts,
  [CountryCode.IT]: italyFlowcharts,
  [CountryCode.AT]: austriaFlowcharts,
  [CountryCode.BE]: belgiumFlowcharts,
  [CountryCode.LU]: luxembourgFlowcharts,
  [CountryCode.IE]: irelandFlowcharts,
  [CountryCode.SE]: swedenFlowcharts,
  [CountryCode.DK]: denmarkFlowcharts,
  [CountryCode.FI]: finlandFlowcharts,
  [CountryCode.PT]: portugalFlowcharts,
  [CountryCode.GR]: greeceFlowcharts,
  [CountryCode.CY]: cyprusFlowcharts,
  [CountryCode.MT]: maltaFlowcharts,
  [CountryCode.PL]: polandFlowcharts,
  [CountryCode.CZ]: czechFlowcharts,
  [CountryCode.HU]: hungaryFlowcharts,
  [CountryCode.RO]: romaniaFlowcharts,
  [CountryCode.BG]: bulgariaFlowcharts,
  [CountryCode.SK]: slovakiaFlowcharts,
  [CountryCode.SI]: sloveniaFlowcharts,
  [CountryCode.HR]: croatiaFlowcharts,
  [CountryCode.EE]: estoniaFlowcharts,
  [CountryCode.LV]: latviaFlowcharts,
  [CountryCode.LT]: lithuaniaFlowcharts,
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

