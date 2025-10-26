/**
 * Program ID Constants
 * Centralized definitions for all visa program IDs by country
 */

import type { CountryCode } from './countries';

// Germany Program IDs
export const GermanyProgramId = {
  EU_BLUE_CARD: 'de_eu_blue_card',
  WORK_VISA: 'de_work_visa',
  JOB_SEEKER: 'de_job_seeker',
  FAMILY_REUNIFICATION: 'de_family_reunification',
} as const;

// Netherlands Program IDs
export const NetherlandsProgramId = {
  DAFT: 'nl_daft',
  HIGHLY_SKILLED: 'nl_highly_skilled',
  ORIENTATION_YEAR: 'nl_orientation_year',
  SELF_EMPLOYMENT: 'nl_self_employment',
  FAMILY_REUNIFICATION: 'nl_family_reunification',
} as const;

// France Program IDs
export const FranceProgramId = {
  TALENT_PASSPORT: 'fr_talent_passport',
  ENTREPRENEUR: 'fr_entrepreneur',
  INVESTOR: 'fr_investor',
  STUDENT: 'fr_student',
  FAMILY_REUNIFICATION: 'fr_family_reunification',
} as const;

// Spain Program IDs
export const SpainProgramId = {
  GOLDEN_VISA: 'es_golden_visa',
  NON_LUCRATIVE: 'es_non_lucrative',
  DIGITAL_NOMAD: 'es_digital_nomad',
  HIGHLY_QUALIFIED: 'es_highly_qualified',
  FAMILY_REUNIFICATION: 'es_family_reunification',
} as const;

// Italy Program IDs
export const ItalyProgramId = {
  GOLDEN_VISA: 'it_golden_visa',
  ELECTIVE_RESIDENCY: 'it_elective_residency',
  STARTUP: 'it_startup',
  SELF_EMPLOYMENT: 'it_self_employment',
  FAMILY_REUNIFICATION: 'it_family_reunification',
} as const;

// Austria Program IDs
export const AustriaProgramId = {
  EU_BLUE_CARD: 'at_eu_blue_card',
  RED_WHITE_RED: 'at_red_white_red',
  STARTUP: 'at_startup',
  SELF_EMPLOYED: 'at_self_employed',
  FAMILY_REUNIFICATION: 'at_family_reunification',
} as const;

// Belgium Program IDs
export const BelgiumProgramId = {
  EU_BLUE_CARD: 'be_eu_blue_card',
  HIGHLY_SKILLED: 'be_highly_skilled',
  PROFESSIONAL_CARD: 'be_professional_card',
  STARTUP: 'be_startup',
  FAMILY_REUNIFICATION: 'be_family_reunification',
} as const;

// Luxembourg Program IDs
export const LuxembourgProgramId = {
  EU_BLUE_CARD: 'lu_eu_blue_card',
  HIGHLY_SKILLED: 'lu_highly_skilled',
  STARTUP: 'lu_startup',
  FAMILY_REUNIFICATION: 'lu_family_reunification',
} as const;

// Ireland Program IDs
export const IrelandProgramId = {
  CRITICAL_SKILLS: 'ie_critical_skills',
  STARTUP: 'ie_startup',
  INTRA_COMPANY_TRANSFER: 'ie_intra_company_transfer',
  FAMILY_REUNIFICATION: 'ie_family_reunification',
} as const;

// Sweden Program IDs
export const SwedenProgramId = {
  WORK_PERMIT: 'se_work_permit',
  STARTUP: 'se_startup',
  STUDENT: 'se_student',
  FAMILY_REUNIFICATION: 'se_family_reunification',
} as const;

// Denmark Program IDs
export const DenmarkProgramId = {
  WORK_PERMIT: 'dk_work_permit',
  STARTUP: 'dk_startup',
  STUDENT: 'dk_student',
  FAMILY_REUNIFICATION: 'dk_family_reunification',
} as const;

// Finland Program IDs
export const FinlandProgramId = {
  EU_BLUE_CARD: 'fi_eu_blue_card',
  STARTUP: 'fi_startup',
  STUDENT: 'fi_student',
  FAMILY_REUNIFICATION: 'fi_family_reunification',
} as const;

// Portugal Program IDs
export const PortugalProgramId = {
  GOLDEN_VISA: 'pt_golden_visa',
  DIGITAL_NOMAD: 'pt_digital_nomad',
  STARTUP: 'pt_startup',
  FAMILY_REUNIFICATION: 'pt_family_reunification',
} as const;

// Greece Program IDs
export const GreeceProgramId = {
  GOLDEN_VISA: 'gr_golden_visa',
  STARTUP: 'gr_startup',
  DIGITAL_NOMAD: 'gr_digital_nomad',
  FAMILY_REUNIFICATION: 'gr_family_reunification',
} as const;

// Cyprus Program IDs
export const CyprusProgramId = {
  GOLDEN_VISA: 'cy_golden_visa',
  STARTUP: 'cy_startup',
  STUDENT: 'cy_student',
  FAMILY_REUNIFICATION: 'cy_family_reunification',
} as const;

// Malta Program IDs
export const MaltaProgramId = {
  STARTUP: 'mt_startup',
  INVESTOR: 'mt_investor',
  STUDENT: 'mt_student',
  FAMILY_REUNIFICATION: 'mt_family_reunification',
} as const;

// Poland Program IDs
export const PolandProgramId = {
  WORK_PERMIT: 'pl_work_permit',
  STARTUP: 'pl_startup',
  STUDENT: 'pl_student',
  FAMILY_REUNIFICATION: 'pl_family_reunification',
} as const;

// Czech Republic Program IDs
export const CzechProgramId = {
  WORK_PERMIT: 'cz_work_permit',
  STARTUP: 'cz_startup',
  STUDENT: 'cz_student',
  FAMILY_REUNIFICATION: 'cz_family_reunification',
} as const;

// Hungary Program IDs
export const HungaryProgramId = {
  WORK_PERMIT: 'hu_work_permit',
  STARTUP: 'hu_startup',
  STUDENT: 'hu_student',
  FAMILY_REUNIFICATION: 'hu_family_reunification',
} as const;

// Romania Program IDs
export const RomaniaProgramId = {
  WORK_PERMIT: 'ro_work_permit',
  STARTUP: 'ro_startup',
  STUDENT: 'ro_student',
  FAMILY_REUNIFICATION: 'ro_family_reunification',
} as const;

// Bulgaria Program IDs
export const BulgariaProgramId = {
  EU_BLUE_CARD: 'bg_eu_blue_card',
  STARTUP_VISA: 'bg_startup_visa',
  WORK_PERMIT: 'bg_work_permit',
  SELF_EMPLOYMENT: 'bg_self_employment',
  FAMILY_REUNIFICATION: 'bg_family_reunification',
} as const;

// Slovakia Program IDs
export const SlovakiaProgramId = {
  WORK_PERMIT: 'sk_work_permit',
  STARTUP: 'sk_startup',
  STUDENT: 'sk_student',
  FAMILY_REUNIFICATION: 'sk_family_reunification',
} as const;

// Slovenia Program IDs
export const SloveniaProgramId = {
  EU_BLUE_CARD: 'si_eu_blue_card',
  STARTUP: 'si_startup',
  STUDENT: 'si_student',
  FAMILY_REUNIFICATION: 'si_family_reunification',
} as const;

// Croatia Program IDs
export const CroatiaProgramId = {
  WORK_PERMIT: 'hr_work_permit',
  STARTUP: 'hr_startup',
  STUDENT: 'hr_student',
  FAMILY_REUNIFICATION: 'hr_family_reunification',
} as const;

// Estonia Program IDs
export const EstoniaProgramId = {
  EU_BLUE_CARD: 'ee_eu_blue_card',
  STARTUP: 'ee_startup',
  STUDENT: 'ee_student',
  FAMILY_REUNIFICATION: 'ee_family_reunification',
} as const;

// Latvia Program IDs
export const LatviaProgramId = {
  WORK_PERMIT: 'lv_work_permit',
  STARTUP: 'lv_startup',
  STUDENT: 'lv_student',
  FAMILY_REUNIFICATION: 'lv_family_reunification',
} as const;

// Lithuania Program IDs
export const LithuaniaProgramId = {
  WORK_PERMIT: 'lt_work_permit',
  STARTUP: 'lt_startup',
  STUDENT: 'lt_student',
  FAMILY_REUNIFICATION: 'lt_family_reunification',
} as const;

// Union type of all program IDs
export type GermanyProgramIdType = typeof GermanyProgramId[keyof typeof GermanyProgramId];
export type NetherlandsProgramIdType = typeof NetherlandsProgramId[keyof typeof NetherlandsProgramId];
export type FranceProgramIdType = typeof FranceProgramId[keyof typeof FranceProgramId];
export type SpainProgramIdType = typeof SpainProgramId[keyof typeof SpainProgramId];
export type ItalyProgramIdType = typeof ItalyProgramId[keyof typeof ItalyProgramId];
export type AustriaProgramIdType = typeof AustriaProgramId[keyof typeof AustriaProgramId];
export type BelgiumProgramIdType = typeof BelgiumProgramId[keyof typeof BelgiumProgramId];
export type LuxembourgProgramIdType = typeof LuxembourgProgramId[keyof typeof LuxembourgProgramId];
export type IrelandProgramIdType = typeof IrelandProgramId[keyof typeof IrelandProgramId];
export type SwedenProgramIdType = typeof SwedenProgramId[keyof typeof SwedenProgramId];
export type DenmarkProgramIdType = typeof DenmarkProgramId[keyof typeof DenmarkProgramId];
export type FinlandProgramIdType = typeof FinlandProgramId[keyof typeof FinlandProgramId];
export type PortugalProgramIdType = typeof PortugalProgramId[keyof typeof PortugalProgramId];
export type GreeceProgramIdType = typeof GreeceProgramId[keyof typeof GreeceProgramId];
export type CyprusProgramIdType = typeof CyprusProgramId[keyof typeof CyprusProgramId];
export type MaltaProgramIdType = typeof MaltaProgramId[keyof typeof MaltaProgramId];
export type PolandProgramIdType = typeof PolandProgramId[keyof typeof PolandProgramId];
export type CzechProgramIdType = typeof CzechProgramId[keyof typeof CzechProgramId];
export type HungaryProgramIdType = typeof HungaryProgramId[keyof typeof HungaryProgramId];
export type RomaniaProgramIdType = typeof RomaniaProgramId[keyof typeof RomaniaProgramId];
export type BulgariaProgramIdType = typeof BulgariaProgramId[keyof typeof BulgariaProgramId];
export type SlovakiaProgramIdType = typeof SlovakiaProgramId[keyof typeof SlovakiaProgramId];
export type SloveniaProgramIdType = typeof SloveniaProgramId[keyof typeof SloveniaProgramId];
export type CroatiaProgramIdType = typeof CroatiaProgramId[keyof typeof CroatiaProgramId];
export type EstoniaProgramIdType = typeof EstoniaProgramId[keyof typeof EstoniaProgramId];
export type LatviaProgramIdType = typeof LatviaProgramId[keyof typeof LatviaProgramId];
export type LithuaniaProgramIdType = typeof LithuaniaProgramId[keyof typeof LithuaniaProgramId];

export type AllProgramIds =
  | GermanyProgramIdType
  | NetherlandsProgramIdType
  | FranceProgramIdType
  | SpainProgramIdType
  | ItalyProgramIdType
  | AustriaProgramIdType
  | BelgiumProgramIdType
  | LuxembourgProgramIdType
  | IrelandProgramIdType
  | SwedenProgramIdType
  | DenmarkProgramIdType
  | FinlandProgramIdType
  | PortugalProgramIdType
  | GreeceProgramIdType
  | CyprusProgramIdType
  | MaltaProgramIdType
  | PolandProgramIdType
  | CzechProgramIdType
  | HungaryProgramIdType
  | RomaniaProgramIdType
  | BulgariaProgramIdType
  | SlovakiaProgramIdType
  | SloveniaProgramIdType
  | CroatiaProgramIdType
  | EstoniaProgramIdType
  | LatviaProgramIdType
  | LithuaniaProgramIdType;

/**
 * Type guard to validate program IDs
 */
export const isValidProgramId = (id: unknown): id is AllProgramIds => {
  if (typeof id !== 'string') return false;
  // Program IDs follow pattern: {countryCode}_{programName}
  return /^[a-z]{2}_[a-z_]+$/.test(id);
};

/**
 * Extract country code from program ID
 */
export const getProgramCountryCode = (programId: AllProgramIds): CountryCode => {
  const code = programId.substring(0, 2).toUpperCase();
  const countryCode = code as CountryCode;
  return countryCode;
};

/**
 * Extract program name (without country prefix) from program ID
 */
export const getProgramName = (programId: AllProgramIds): string => {
  return programId.substring(3); // Remove "XX_" prefix
};

