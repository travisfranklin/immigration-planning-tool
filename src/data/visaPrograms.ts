/**
 * Visa Programs Data
 * Comprehensive data for all visa programs across MVP countries
 */

import type { VisaProgram } from '../types/viability';

/**
 * Germany Visa Programs
 */
export const GERMANY_PROGRAMS: VisaProgram[] = [
  {
    id: 'de_eu_blue_card',
    countryCode: 'DE',
    countryName: 'Germany',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 48300, // EUR per year (2025) - €43,760 for shortage occupations
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.30,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 75,
    description: 'For highly skilled workers with a university degree and job offer in Germany',
    officialUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card',
    notes: 'Fast track to permanent residency (21-33 months with language skills)',
  },
  {
    id: 'de_job_seeker',
    countryCode: 'DE',
    countryName: 'Germany',
    name: 'Job Seeker Visa',
    type: 'job_seeker',
    requirements: {
      minEducationLevel: 'bachelor',
      minSavings: 5000, // EUR - proof of funds
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.20,
      education: 0.35,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 6,
    validityYears: 0.5, // 6 months
    pathToPermanentResidency: false,
    pathToCitizenship: false,
    applicationFee: 75,
    description: 'For qualified professionals to search for employment in Germany',
    officialUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/jobseekers',
    notes: 'Can be converted to work visa once job is found',
  },
  {
    id: 'de_freelance',
    countryCode: 'DE',
    countryName: 'Germany',
    name: 'Freelance Visa (Freiberufler)',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 10000, // EUR - recommended
      minYearsExperience: 3,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.20,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 75,
    description: 'For self-employed professionals and freelancers',
    officialUrl: 'https://www.make-it-in-germany.com/en/visa-residence/types/self-employment',
    notes: 'Requires proof of clients or contracts',
  },
  {
    id: 'de_work_visa',
    countryCode: 'DE',
    countryName: 'Germany',
    name: 'Standard Work Visa',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minEducationLevel: 'high_school',
    },
    weights: {
      career: 0.35,
      financial: 0.20,
      education: 0.25,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 10,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 75,
    description: 'Standard work permit for qualified workers with job offer',
    notes: 'May require labor market test',
  },
  {
    id: 'de_family_reunification',
    countryCode: 'DE',
    countryName: 'Germany',
    name: 'Family Reunification Visa',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
      minLanguageProficiency: 'A1', // Basic German required
    },
    weights: {
      career: 0.05,
      financial: 0.20,
      education: 0.05,
      language: 0.20,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 75,
    description: 'For family members of German residents',
    officialUrl: 'https://www.make-it-in-germany.com/en/living-in-germany/family-life/spouses-joining-citizens-non-eu',
    notes: 'Sponsor must have adequate housing and income',
  },
];

/**
 * Netherlands Visa Programs
 */
export const NETHERLANDS_PROGRAMS: VisaProgram[] = [
  {
    id: 'nl_eu_blue_card',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 68256, // EUR per year (30+) - reduced: €54,612/year (2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 4, // 2-4 weeks
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 210, // 2025 IND fee schedule
    description: 'EU Blue Card for highly skilled workers with higher education degree. High salary threshold but excellent quality of life.',
    officialUrl: 'https://ind.nl/en/residence-permits/work/european-blue-card-residence-permit',
    notes: 'Salary threshold: €68,256/year (30+), €54,612/year (reduced - 2025). Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'nl_daft',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'DAFT (Dutch-American Friendship Treaty)',
    type: 'entrepreneur',
    requirements: {
      citizenship: ['US'],
      minInvestment: 4500, // EUR startup capital
      requiresBusinessPlan: true,
    },
    weights: {
      career: 0.20,
      financial: 0.40,
      education: 0.15,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 8,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 350, // 2025 IND fee schedule
    description: 'Special visa for US citizens to start a business in the Netherlands',
    officialUrl: 'https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person',
    notes: 'Unique to US citizens, very accessible',
  },
  {
    id: 'nl_highly_skilled',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'Highly Skilled Migrant Visa',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minSalary: 68256, // EUR per year 30+ (€5,688/month) - under 30: €49,680/year (2025)
      minEducationLevel: 'bachelor',
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 4,
    validityYears: 5,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 210, // 2025 IND fee schedule
    description: 'For highly skilled workers with job offer from recognized sponsor',
    officialUrl: 'https://ind.nl/en/residence-permits/work/highly-skilled-migrant',
    notes: 'Employer must be recognized sponsor',
  },
  {
    id: 'nl_orientation_year',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'Orientation Year for Graduates',
    type: 'job_seeker',
    requirements: {
      minEducationLevel: 'bachelor',
      maxAge: 30, // Within 3 years of graduation
      requiresJobOffer: false,
    },
    weights: {
      career: 0.25,
      financial: 0.20,
      education: 0.40,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 6,
    validityYears: 1,
    pathToPermanentResidency: false,
    pathToCitizenship: false,
    applicationFee: 210, // 2025 IND fee schedule
    description: 'For recent graduates from top universities to find work',
    officialUrl: 'https://ind.nl/en/residence-permits/work/residence-permit-for-orientation-year',
    notes: 'Requires degree from top 200 university within last 3 years',
  },
  {
    id: 'nl_self_employment',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 15000, // EUR recommended
      minYearsExperience: 3,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    applicationFee: 350, // 2025 IND fee schedule
    description: 'For entrepreneurs starting a business in the Netherlands',
    officialUrl: 'https://ind.nl/en/residence-permits/work/residence-permit-self-employed-person',
    notes: 'Points-based system, requires business plan approval',
  },
  {
    id: 'nl_family_reunification',
    countryCode: 'NL',
    countryName: 'Netherlands',
    name: 'Family Reunification Visa',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
      minSavings: 0,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 5,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Dutch residents',
    officialUrl: 'https://ind.nl/en/family',
    notes: 'Sponsor must meet income requirements',
  },
];

/**
 * France Visa Programs
 */
export const FRANCE_PROGRAMS: VisaProgram[] = [
  {
    id: 'fr_blue_card',
    countryCode: 'FR',
    countryName: 'France',
    name: 'EU Blue Card (Carte Bleue Européenne)',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minSalary: 59373, // EUR per year (1.5x average gross salary - Aug 2025)
      minEducationLevel: 'bachelor',
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Provides EU-wide mobility after 12 months.',
    officialUrl: 'https://www.welcometofrance.com/en/fiche/talent-passport',
    notes: 'Salary threshold: €59,373/year (2025). Requires 3+ years higher education or 5 years experience. Family can join with Talent-Family permit. EU mobility after 12 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'fr_talent_passport',
    countryCode: 'FR',
    countryName: 'France',
    name: 'Talent Passport – Qualified Employee',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minSalary: 39582, // EUR per year (Aug 2025 ministerial order - 8% reduction)
      minEducationLevel: 'master',
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For qualified employees with master\'s degree and job offer. Lower salary threshold than EU Blue Card but without EU-wide mobility.',
    officialUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F16922?lang=en',
    notes: 'Salary threshold: €39,582/year (2025). Requires master\'s degree. Part of Passeport Talent categories. Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'fr_skills_talents',
    countryCode: 'FR',
    countryName: 'France',
    name: 'Skills and Talents Visa',
    type: 'work',
    requirements: {
      minYearsExperience: 5,
      minEducationLevel: 'bachelor',
    },
    weights: {
      career: 0.40,
      financial: 0.20,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For individuals with exceptional talent in their field',
    officialUrl: 'https://france-visas.gouv.fr/en/france-visas/international-talents-and-economic-attractiveness',
    notes: 'Requires proof of exceptional achievements or recognition',
  },
  {
    id: 'fr_french_tech',
    countryCode: 'FR',
    countryName: 'France',
    name: 'French Tech Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 30000, // EUR recommended for startup
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.20,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For tech startup founders, employees, and investors',
    officialUrl: 'https://lafrenchtech.gouv.fr/en/come-work-in-france/french-tech-visa/',
    notes: 'Startup must be part of French Tech ecosystem',
  },
  {
    id: 'fr_work_visa',
    countryCode: 'FR',
    countryName: 'France',
    name: 'Standard Work Visa',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minEducationLevel: 'high_school',
    },
    weights: {
      career: 0.30,
      financial: 0.25,
      education: 0.20,
      language: 0.15,
      family: 0.10,
    },
    processingTimeWeeks: 12,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit for qualified workers',
    officialUrl: 'https://france-visas.gouv.fr/en/professional-purpose',
    notes: 'Requires labor market test in most cases',
  },
  {
    id: 'fr_family_reunification',
    countryCode: 'FR',
    countryName: 'France',
    name: 'Family Reunification Visa',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
      minLanguageProficiency: 'A1',
    },
    weights: {
      career: 0.05,
      financial: 0.20,
      education: 0.05,
      language: 0.20,
      family: 0.50,
    },
    processingTimeWeeks: 16,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of French residents',
    officialUrl: 'https://france-visas.gouv.fr/en/family-of-foreign-national-residing-in-france',
    notes: 'Sponsor must have stable income and adequate housing',
  },
];

/**
 * Spain Visa Programs
 */
export const SPAIN_PROGRAMS: VisaProgram[] = [
  {
    id: 'es_eu_blue_card',
    countryCode: 'ES',
    countryName: 'Spain',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 38844, // EUR per year (1.5x average gross annual salary)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly skilled workers with a job offer and higher education',
    officialUrl: 'https://www.exteriores.gob.es/',
    notes: 'EU-wide mobility after 18 months; can move to another EU country',
  },
  {
    id: 'es_non_lucrative',
    countryCode: 'ES',
    countryName: 'Spain',
    name: 'Non-Lucrative Visa',
    type: 'other',
    requirements: {
      minPassiveIncome: 28800, // EUR per year
      minSavings: 30000, // EUR recommended
      requiresJobOffer: false,
    },
    weights: {
      career: 0.05,
      financial: 0.70,
      education: 0.05,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For retirees and remote workers with passive income',
    notes: 'Cannot work in Spain, but can receive foreign income',
  },
  {
    id: 'es_digital_nomad',
    countryCode: 'ES',
    countryName: 'Spain',
    name: 'Digital Nomad Visa',
    type: 'digital_nomad',
    requirements: {
      minSalary: 28008, // EUR per year (2,334/month)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.40,
      education: 0.15,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For remote workers employed by non-Spanish companies',
    notes: 'Must work remotely for company outside Spain',
  },
  {
    id: 'es_highly_qualified',
    countryCode: 'ES',
    countryName: 'Spain',
    name: 'Highly Qualified Professional Visa',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minEducationLevel: 'bachelor',
      minSalary: 40077, // EUR per year (2025 threshold)
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 10,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly qualified professionals with job offer',
    officialUrl: 'https://www.exteriores.gob.es/',
    notes: 'Requires university degree and relevant experience. €40,077/year salary threshold (2025). Reduced threshold (0.8×) available for young workers (<3 years since graduation).',
  },
  {
    id: 'es_family_reunification',
    countryCode: 'ES',
    countryName: 'Spain',
    name: 'Family Reunification Visa',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 16,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Spanish residents',
    notes: 'Sponsor must have adequate income and housing',
  },
];

/**
 * Italy Visa Programs
 */
export const ITALY_PROGRAMS: VisaProgram[] = [
  {
    id: 'it_eu_blue_card',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 33500, // EUR per year (1.5x average gross annual salary - 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 12, // 60-90 days (Nulla Osta + visa)
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Subject to Decreto Flussi quota system.',
    officialUrl: 'https://vistoperitalia.esteri.it/',
    notes: 'Salary threshold: €26,000-33,500/year depending on sector. Subject to annual quota (Decreto Flussi). Nulla Osta required. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'it_golden_visa',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'Golden Visa (Investor Visa)',
    type: 'investor',
    requirements: {
      minInvestment: 500000, // EUR (2M government bonds OR 500k company OR 1M startup)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.05,
      financial: 0.80,
      education: 0.05,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For investors making significant investment in Italy',
    notes: 'Multiple investment options available',
  },
  {
    id: 'it_self_employment',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 20000, // EUR recommended
      minYearsExperience: 3,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 16,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For entrepreneurs and freelancers',
    notes: 'Requires proof of business viability',
  },
  {
    id: 'it_highly_skilled',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'Highly Skilled Worker Visa',
    type: 'work',
    requirements: {
      requiresJobOffer: true,
      minEducationLevel: 'bachelor',
      minSalary: 25000, // EUR per year (approximate)
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For skilled workers with job offer',
    notes: 'Subject to annual quota system',
  },
  {
    id: 'it_digital_nomad',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'Digital Nomad Visa',
    type: 'digital_nomad',
    requirements: {
      minSalary: 28000, // EUR per year
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.40,
      education: 0.15,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 10,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For remote workers (new 2024)',
    notes: 'Must work remotely for company outside Italy',
  },
  {
    id: 'it_family_reunification',
    countryCode: 'IT',
    countryName: 'Italy',
    name: 'Family Reunification Visa',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 20,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Italian residents',
    notes: 'Sponsor must have adequate income and housing',
  },
];

/**
 * Austria Visa Programs (Phase 8)
 */
export const AUSTRIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'at_eu_blue_card',
    countryCode: 'AT',
    countryName: 'Austria',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 51500, // EUR per year (2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.30,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly skilled workers with university degree and job offer in Austria',
    officialUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/eubluecard/',
    notes: 'Fast track to permanent residency (21 months with language skills). Exception for IT: 3 years experience instead of degree.',
  },
  {
    id: 'at_red_white_red',
    countryCode: 'AT',
    countryName: 'Austria',
    name: 'Red-White-Red Card (Very Highly Qualified)',
    type: 'work',
    requirements: {
      minSalary: 38700, // EUR per year (€3,225/month * 12)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
      minPoints: 70, // Points-based system
    },
    weights: {
      career: 0.40,
      financial: 0.20,
      education: 0.30,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Points-based visa for very highly qualified workers (minimum 70 points)',
    officialUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers/',
    notes: 'Points awarded for qualifications, experience, language, age. Job Seeker Visa available (6 months).',
  },
  {
    id: 'at_startup',
    countryCode: 'AT',
    countryName: 'Austria',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 30000, // EUR minimum capital with 50% equity share
    },
    weights: {
      career: 0.25,
      financial: 0.40,
      education: 0.20,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For entrepreneurs with innovative business ideas',
    officialUrl: 'https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/start-up-founders/',
    notes: 'Requires €30,000 minimum capital with 50% equity share. €50,000 additional investment capital earns bonus points. Points-based system (70+ points required).',
  },
  {
    id: 'at_self_employed',
    countryCode: 'AT',
    countryName: 'Austria',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 100000, // EUR minimum investment transfer
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For self-employed individuals with relevant qualifications',
    notes: 'Requires €100,000 minimum investment transfer OR job creation OR know-how transfer. Must demonstrate macroeconomic benefit to Austria.',
  },
  {
    id: 'at_family_reunification',
    countryCode: 'AT',
    countryName: 'Austria',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Austrian residents',
    notes: 'Sponsor must have adequate income and housing',
  },
];

/**
 * Belgium Visa Programs (Phase 8)
 */
export const BELGIUM_PROGRAMS: VisaProgram[] = [
  {
    id: 'be_eu_blue_card',
    countryCode: 'BE',
    countryName: 'Belgium',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 66738, // EUR per year (Brussels/Wallonia 2025) - Flanders: €63,586
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.30,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly skilled workers with university degree and job offer in Belgium',
    officialUrl: 'https://dofi.ibz.be/en',
    notes: 'Regional salary differences: Brussels €66,377, Flanders €61,011, Wallonia €56,112. Multilingual country (Dutch, French, German).',
  },
  {
    id: 'be_highly_skilled',
    countryCode: 'BE',
    countryName: 'Belgium',
    name: 'Highly Skilled Worker Permit (Single Permit)',
    type: 'work',
    requirements: {
      minSalary: 51613, // EUR per year (30+ years old, 2025)
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 10,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Single Permit combining work and residence permit for skilled workers',
    officialUrl: 'https://dofi.ibz.be/en',
    notes: 'Lower salary for under 30: €41,290/year. Fast-track family reunification available (€5,000/month income).',
  },
  {
    id: 'be_professional_card',
    countryCode: 'BE',
    countryName: 'Belgium',
    name: 'Professional Card (Self-Employment)',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 18600, // EUR estimated (3 months living expenses)
    },
    weights: {
      career: 0.25,
      financial: 0.40,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 14,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For self-employed individuals and freelancers',
    officialUrl: 'https://dofi.ibz.be/en',
    notes: 'Business plan must show economic benefit to Belgium. Regional approval required.',
  },
  {
    id: 'be_startup',
    countryCode: 'BE',
    countryName: 'Belgium',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 50000, // EUR estimated
    },
    weights: {
      career: 0.25,
      financial: 0.40,
      education: 0.20,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For innovative startups recognized by approved accelerator/incubator',
    notes: 'Requires recognition by approved Belgian accelerator or incubator',
  },
  {
    id: 'be_family_reunification',
    countryCode: 'BE',
    countryName: 'Belgium',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
      minSalary: 60000, // EUR per year (€5,000/month gross - 2025 requirement effective August 2025)
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 1,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Belgian residents',
    officialUrl: 'https://dofi.ibz.be/en',
    notes: 'New 2025 requirement (effective August 2025): Sponsor must earn €5,000 gross/month minimum. Fast-track available for Single Permit holders.',
  },
];

/**
 * Luxembourg Visa Programs (Phase 8)
 */
export const LUXEMBOURG_PROGRAMS: VisaProgram[] = [
  {
    id: 'lu_eu_blue_card',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 63408, // EUR per year (2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 12, // Up to 3 months (90 days) for work authorization + visa
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with university degree. One of the highest salary thresholds in EU (€63,408/year). Strong financial services sector.',
    officialUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html',
    notes: 'One of the highest salaries in EU. Strong financial services sector. Job offer must be minimum 6 months. First 12 months: valid for specific profession/sector. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lu_highly_qualified',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    name: 'Highly Qualified Worker Permit',
    type: 'work',
    requirements: {
      minSalary: 58968, // EUR per year (2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 10,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly qualified workers with competitive salary',
    officialUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/hautement-qualifie/salarie-hautement-qualifie.html',
    notes: 'Alternative to EU Blue Card. €58,968/year salary threshold (2025). Strong financial services sector.',
  },
  {
    id: 'lu_investor',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    name: 'Investor Visa (Business Investor Permit)',
    type: 'investor',
    requirements: {
      minInvestment: 500000, // EUR estimated
    },
    weights: {
      career: 0.05,
      financial: 0.80,
      education: 0.05,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 14,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For investors making significant investment in Luxembourg business',
    notes: 'Often referred to as "Golden Visa". Requires significant capital investment in Luxembourg economy.',
  },
  {
    id: 'lu_self_employed',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    name: 'Self-Employment Authorization',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 50000, // EUR estimated
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For self-employed individuals with business plan',
    officialUrl: 'https://guichet.public.lu/en/',
    notes: 'Business plan must demonstrate economic benefit to Luxembourg',
  },
  {
    id: 'lu_family_reunification',
    countryCode: 'LU',
    countryName: 'Luxembourg',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Luxembourg residents',
    officialUrl: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/membre-famille/regroupement-familial.html',
    notes: 'Sponsor must have adequate income and housing',
  },
];

/**
 * Ireland Visa Programs (Phase 8)
 */
export const IRELAND_PROGRAMS: VisaProgram[] = [
  {
    id: 'ie_critical_skills',
    countryCode: 'IE',
    countryName: 'Ireland',
    name: 'Critical Skills Employment Permit',
    type: 'work',
    requirements: {
      minSalary: 44000, // EUR per year (2025 expected)
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.25,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For skilled workers in critical skills occupations',
    officialUrl: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/',
    notes: 'English-speaking country (major advantage). Fast track to PR (2 years). €64,000/year without degree requirement. Critical Skills Occupation List updated regularly.',
  },
  {
    id: 'ie_general_employment',
    countryCode: 'IE',
    countryName: 'Ireland',
    name: 'General Employment Permit',
    type: 'work',
    requirements: {
      minSalary: 34000, // EUR per year (2025)
      requiresJobOffer: true,
      minYearsExperience: 0,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.25,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 10,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'General work permit for skilled workers',
    officialUrl: 'https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/',
    notes: 'Labor market test required (no suitable EEA worker available). Path to PR after 5 years.',
  },
  {
    id: 'ie_step',
    countryCode: 'IE',
    countryName: 'Ireland',
    name: 'Startup Entrepreneur Programme (STEP)',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minInvestment: 50000, // EUR from approved source
    },
    weights: {
      career: 0.25,
      financial: 0.40,
      education: 0.20,
      language: 0.10,
      family: 0.05,
    },
    processingTimeWeeks: 14,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For entrepreneurs with innovative business ideas',
    officialUrl: 'https://www.irishimmigration.ie/coming-to-work-in-ireland/what-are-my-options-for-working-in-ireland/coming-to-work-for-more-than-90-days/start-up-entrepreneur-programme-step/',
    notes: '€50,000 must be from approved source (not personal funds). High-potential startups. Approval from evaluation committee required.',
  },
  {
    id: 'ie_investor',
    countryCode: 'IE',
    countryName: 'Ireland',
    name: 'Investor Programme',
    type: 'investor',
    requirements: {
      minInvestment: 1000000, // EUR in Irish enterprise
      minSavings: 2000000, // EUR net worth
    },
    weights: {
      career: 0.05,
      financial: 0.80,
      education: 0.05,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 14,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For high-net-worth individuals making significant investment',
    notes: '€1,000,000 investment in Irish enterprise OR €500,000 in approved fund (minimum 3 years). €2,000,000 net worth required. Good character required.',
  },
  {
    id: 'ie_family_reunification',
    countryCode: 'IE',
    countryName: 'Ireland',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.05,
      financial: 0.25,
      education: 0.05,
      language: 0.15,
      family: 0.50,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Irish residents',
    officialUrl: 'https://www.irishimmigration.ie/',
    notes: 'Sponsor must have adequate income, accommodation, and health insurance',
  },
];

/**
 * Sweden Visa Programs (Phase 9)
 */
export const SWEDEN_PROGRAMS: VisaProgram[] = [
  {
    id: 'se_work_permit',
    countryCode: 'SE',
    countryName: 'Sweden',
    name: 'Work Permit for Skilled Workers',
    type: 'work',
    requirements: {
      minSalary: 13800, // EUR per year (~13,000 SEK/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.20,
      education: 0.20,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12, // 2-4 months
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Flexible work permit for skilled workers with a job offer from a Swedish employer. No specific occupation list required.',
    officialUrl: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden.html',
    notes: 'Very flexible system. Employer must advertise position in EU for 10 days. Salary must meet Swedish collective agreement standards. Fast track to PR in 4 years.',
  },
  {
    id: 'se_eu_blue_card',
    countryCode: 'SE',
    countryName: 'Sweden',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 56400, // EUR per year (~53,000 SEK/month)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.35,
      financial: 0.25,
      education: 0.30,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 12,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For highly skilled workers with university degree and high-salary job offer in Sweden.',
    officialUrl: 'https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/eu-blue-cards.html',
    notes: 'Higher salary threshold than regular work permit. EU-wide mobility after 18 months. Fast track to PR in 4 years.',
  },
  {
    id: 'se_self_employment',
    countryCode: 'SE',
    countryName: 'Sweden',
    name: 'Self-Employment Permit',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 20000, // EUR - estimated for business and living costs
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.15,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 16, // 3-6 months
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For entrepreneurs who want to start or run a business in Sweden. No minimum investment amount specified.',
    officialUrl: 'https://www.migrationsverket.se/English/Private-individuals/Working-in-Sweden/Self-employment.html',
    notes: 'Must demonstrate business viability and relevant experience. Business must be registered in Sweden. Can be sole proprietor or start company.',
  },
  {
    id: 'se_researcher',
    countryCode: 'SE',
    countryName: 'Sweden',
    name: 'Researcher/Academic Permit',
    type: 'work',
    requirements: {
      minEducationLevel: 'phd',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.30,
      financial: 0.15,
      education: 0.45,
      language: 0.05,
      family: 0.05,
    },
    processingTimeWeeks: 8,
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For researchers and academics with PhD or equivalent conducting research at Swedish universities or research institutions.',
    officialUrl: 'https://www.migrationsverket.se/en/you-want-to-apply/work.html',
    notes: 'Faster processing than regular work permit. Strong academic sector in Sweden. English widely used in research.',
  },
  {
    id: 'se_family_reunification',
    countryCode: 'SE',
    countryName: 'Sweden',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.10,
      language: 0.10,
      family: 0.50,
    },
    processingTimeWeeks: 26, // 6-12 months
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For family members of Swedish residents or citizens. Includes spouses, partners, and children.',
    officialUrl: 'https://www.migrationsverket.se/English/Private-individuals/Moving-to-someone-in-Sweden.html',
    notes: 'Sponsor must have adequate housing and income. Same-sex partnerships recognized. Family members can work immediately upon arrival.',
  },
];

/**
 * Denmark Visa Programs (Phase 9)
 */
export const DENMARK_PROGRAMS: VisaProgram[] = [
  {
    id: 'dk_eu_blue_card',
    countryCode: 'DK',
    countryName: 'Denmark',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 68900, // EUR per year (DKK 514,000/year - 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days with Fast-Track
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with high salary threshold. Fast-Track processing available.',
    officialUrl: 'https://nyidanmark.dk/en-GB/You-want-to-apply',
    notes: 'Denmark has one of the highest EU Blue Card salary thresholds (DKK 514,000/year - 2025). Application fee: DKK 6,055 (~€810). PR in 4 years, citizenship in 9 years.',
  },
  {
    id: 'dk_fast_track',
    countryCode: 'DK',
    countryName: 'Denmark',
    name: 'Fast-Track Scheme',
    type: 'work',
    requirements: {
      minSalary: 68900, // EUR per year (DKK 514,000/year - 2025) OR 50,300 for recent graduates
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 4, // 30 days or less
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Fastest work permit in Denmark for employees of certified Fast-Track companies. Processing in 30 days or less.',
    officialUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track',
    notes: 'Employer must be on certified Fast-Track list. Lower salary threshold (DKK 375,000/€50,300) for recent graduates (within 3 years). Application fee: DKK 6,055 (~€810).',
  },
  {
    id: 'dk_pay_limit',
    countryCode: 'DK',
    countryName: 'Denmark',
    name: 'Pay Limit Scheme',
    type: 'work',
    requirements: {
      minSalary: 68900, // EUR per year (DKK 514,000/year - 2025)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.35,
      financial: 0.35,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Most flexible Danish work permit - only requirement is high salary. No education or occupation restrictions.',
    officialUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-limit-scheme',
    notes: 'No education requirement. No occupation list. Only requirement is salary of DKK 514,000/year (€68,900 - 2025). Application fee: DKK 6,055 (~€810).',
  },
  {
    id: 'dk_startup',
    countryCode: 'DK',
    countryName: 'Denmark',
    name: 'Startup Denmark',
    type: 'entrepreneur',
    requirements: {
      requiresBusinessPlan: true,
      minSavings: 6700, // EUR (DKK 50,000)
    },
    weights: {
      career: 0.30,
      financial: 0.30,
      education: 0.20,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 12, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Residence permit for innovative entrepreneurs. Business plan must be approved by expert panel.',
    officialUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Start-up-Denmark',
    notes: 'Must present business plan to expert panel. Business must be innovative and scalable. Initial permit for 2 years, renewable for 3 years. Can bring co-founders.',
  },
  {
    id: 'dk_family_reunification',
    countryCode: 'DK',
    countryName: 'Denmark',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.20,
      financial: 0.20,
      education: 0.10,
      language: 0.20,
      family: 0.30,
    },
    processingTimeWeeks: 14, // 60-120 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have residence permits in Denmark. Requirements vary based on sponsor\'s permit type.',
    officialUrl: 'https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family',
    notes: 'Requirements vary based on sponsor\'s permit type. Fast-Track/EU Blue Card holders have easier family reunification. Language requirements may apply. Housing requirements must be met.',
  },
];

/**
 * Finland Visa Programs (Phase 9)
 */
export const FINLAND_PROGRAMS: VisaProgram[] = [
  {
    id: 'fi_eu_blue_card',
    countryCode: 'FI',
    countryName: 'Finland',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 45924, // EUR per year (€3,827/month in 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Lower salary threshold than most Nordic countries (€45,924/year).',
    officialUrl: 'https://migri.fi/en/eu-blue-card',
    notes: 'Lower salary threshold than Sweden/Denmark. Can work for any employer after 2 years. PR in 4 years, citizenship in 5 years. Family members can join immediately.',
  },
  {
    id: 'fi_specialist',
    countryCode: 'FI',
    countryName: 'Finland',
    name: 'Residence Permit for Specialists',
    type: 'work',
    requirements: {
      minSalary: 45924, // EUR per year (€3,827/month - 2025)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Most popular Finnish work permit for specialists. Lower salary requirement (€36,000/year) and flexible education requirements.',
    officialUrl: 'https://migri.fi/en/working-in-finland/income-requirement',
    notes: 'More flexible than EU Blue Card. No specific education requirement if sufficient experience. Popular for tech workers. Can be extended. PR in 4 years, citizenship in 5 years.',
  },
  {
    id: 'fi_startup',
    countryCode: 'FI',
    countryName: 'Finland',
    name: 'Startup Entrepreneur Permit',
    type: 'entrepreneur',
    requirements: {
      minSavings: 12000, // EUR (€1,000/month for 1 year)
      requiresBusinessPlan: true,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For innovative startup entrepreneurs. Business plan must be approved by Business Finland or authorized accelerator.',
    officialUrl: 'https://migri.fi/en/start-up-entrepreneur',
    notes: 'Must get approval from authorized startup accelerator/incubator. Can bring co-founders. Access to Finnish startup ecosystem (Helsinki, Espoo). Renewable if business progressing. PR in 4 years, citizenship in 5 years.',
  },
  {
    id: 'fi_self_employment',
    countryCode: 'FI',
    countryName: 'Finland',
    name: 'Self-Employment Permit',
    type: 'entrepreneur',
    requirements: {
      minSavings: 17500, // EUR (€15,000-€20,000 recommended)
      requiresBusinessPlan: true,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 14, // 90-120 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'For freelancers, consultants, and traditional business owners. Must demonstrate business viability and sufficient income.',
    officialUrl: 'https://migri.fi/en/entrepreneur',
    notes: 'For freelancers, consultants, traditional businesses. Must demonstrate business viability. Income must meet minimum threshold (€1,000/month). Relevant experience or education required. Can be extended. PR in 4 years, citizenship in 5 years.',
  },
  {
    id: 'fi_family_reunification',
    countryCode: 'FI',
    countryName: 'Finland',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresFamilyInCountry: true,
    },
    weights: {
      career: 0.15,
      financial: 0.20,
      education: 0.10,
      language: 0.15,
      family: 0.40,
    },
    processingTimeWeeks: 20, // 90-180 days
    validityYears: 4,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members in Finland. Sponsor must have A permit (continuous) or P permit (permanent) with adequate income and housing.',
    officialUrl: 'https://migri.fi/en/moving-to-finland-to-be-with-family',
    notes: 'Same-sex partnerships recognized. Family members can work immediately. Sponsor must have adequate housing (minimum 10m² per person). Income requirement varies by family size. PR in 4 years, citizenship in 5 years.',
  },
];

/**
 * All Visa Programs
 */
/**
 * Portugal Visa Programs (Phase 10)
 */
export const PORTUGAL_PROGRAMS: VisaProgram[] = [
  {
    id: 'pt_eu_blue_card',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 21030, // EUR per year (1.5x average gross annual salary - 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 8, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. One of the lowest salary thresholds in the EU.',
    officialUrl: 'https://www.sef.pt/en/pages/conteudo-detalhe.aspx?nID=21',
    notes: 'Salary threshold: €21,030/year (2025) - one of the lowest in EU. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pt_golden_visa',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'Golden Visa (Investment)',
    type: 'investor',
    requirements: {
      minInvestment: 500000, // EUR (real estate) or €400k in low-density areas
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.60,
      education: 0.05,
      language: 0.05,
      family: 0.20,
    },
    processingTimeWeeks: 16, // 90-180 days average
    validityYears: 1, // Initially 1 year, renewable for 2-year periods
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Golden Visa through investment in real estate (€500k), capital transfer (€1.5M), or business (€500k creating 5+ jobs). Very flexible residency requirements (7 days/year).',
    officialUrl: 'https://www.sef.pt/en/pages/conteudo-detalhe.aspx?nID=62',
    notes: 'One of most popular Golden Visa programs in EU. Only 7 days/year minimum stay required. Family members included. PR in 5 years, citizenship in 5 years with A2 Portuguese. Access to Schengen area.',
  },
  {
    id: 'pt_d7_visa',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'D7 Visa (Passive Income)',
    type: 'passive-income',
    requirements: {
      minSalary: 9120, // EUR per year (€760/month - Portuguese minimum wage)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.15,
      financial: 0.50,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'D7 Visa for those with passive income (pension, rental income, dividends, remote work). Minimum €760/month required. EXTREMELY popular with digital nomads and retirees.',
    officialUrl: 'https://www.portugal.gov.pt/',
    notes: 'Most popular visa for digital nomads and retirees. Very affordable (€760/month). Must spend 183+ days/year in Portugal. Can work remotely for foreign companies. PR in 5 years, citizenship in 5 years. Non-habitual resident tax regime available (0-10% tax for 10 years).',
  },
  {
    id: 'pt_digital_nomad',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'Digital Nomad Visa (D8)',
    type: 'digital_nomad',
    requirements: {
      minSalary: 41760, // EUR per year (€3,480/month - 4x minimum wage)
      minSavings: 36480, // EUR (alternative to income)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.40,
      education: 0.10,
      language: 0.10,
      family: 0.10,
    },
    processingTimeWeeks: 8, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'D8 Digital Nomad Visa for remote workers. Higher income threshold than D7 but specifically designed for digital nomads.',
    officialUrl: 'https://www.sef.pt/en/pages/conteudo-detalhe.aspx?nID=21',
    notes: 'Income: €3,480/month OR €36,480 savings. Must work remotely for non-Portuguese company. Can bring family. PR in 5 years, citizenship in 5 years. Non-habitual resident tax regime available.',
  },
  {
    id: 'pt_tech_visa',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'Tech Visa',
    type: 'work',
    requirements: {
      minSalary: 15960, // EUR per year (€1,330/month - 1.5x Portuguese minimum wage)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days - FAST!
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Fast-track visa for tech workers with job offer from certified Portuguese tech company. Lower salary requirement (€1,330/month) than most EU countries.',
    officialUrl: 'https://www.iapmei.pt/techvisa',
    notes: 'Fast processing (30-60 days). Company must be certified by IAPMEI. Growing tech scene in Lisbon and Porto. Lower salary threshold than most EU tech visas. Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pt_startup_visa',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 5000, // EUR recommended minimum (€5k-€10k)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Initially 1 year, renewable for 2-year periods
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup Visa for entrepreneurs with innovative business idea approved by certified incubator. Growing startup ecosystem in Lisbon.',
    officialUrl: 'https://www.iapmei.pt/PRODUTOS-E-SERVICOS/Empreendedorismo-Inovacao/Empreendedorismo/Apoios-e-Incentivos/Startup-Visa.aspx',
    notes: 'Must be accepted by IAPMEI-certified incubator. Growing startup ecosystem in Lisbon and Porto. Can bring co-founders. Family members included. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pt_family_reunification',
    countryCode: 'PT',
    countryName: 'Portugal',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 14, // 90-120 days
    validityYears: 2, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Portuguese residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://imigrante.sef.pt/en/',
    notes: 'Same-sex marriages recognized. Family members can work and study. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 5 years.',
  },
];

/**
 * Greece Visa Programs (Phase 10)
 */
export const GREECE_PROGRAMS: VisaProgram[] = [
  {
    id: 'gr_eu_blue_card',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 31919, // EUR per year (1.5x average gross annual salary - 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 8, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Mediterranean lifestyle with lower cost of living.',
    officialUrl: 'https://migration.gov.gr/en/',
    notes: 'Salary threshold: €31,918.83/year (2025). Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'gr_golden_visa',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'Golden Visa (Investment)',
    type: 'investor',
    requirements: {
      minInvestment: 400000, // EUR (real estate) - tiered system: €800k Athens/Thessaloniki/Islands, €400k other areas
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.60,
      education: 0.05,
      language: 0.05,
      family: 0.20,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 5,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Golden Visa through real estate investment. Tiered system: €800,000 in Athens/Thessaloniki/popular islands, €400,000 in other areas. No minimum stay requirement!',
    officialUrl: 'https://migration.gov.gr/en/',
    notes: 'Tiered investment thresholds (2024): €800k for Athens/Thessaloniki/Mykonos/Santorini, €400k for other areas. No minimum stay required. Family members included. Can rent out property. PR in 5 years, citizenship in 7 years. Access to Schengen area.',
  },
  {
    id: 'gr_digital_nomad',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'Digital Nomad Visa',
    type: 'work',
    requirements: {
      minSalary: 42000, // EUR per year (€3,500/month)
      requiresJobOffer: false, // Remote work for non-Greek company
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable for 2 years
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Digital Nomad Visa for remote workers earning €3,500/month. 50% income tax reduction for first year! Can work from Greek islands.',
    officialUrl: 'https://www.gov.gr/en/',
    notes: 'Launched in 2021. 50% income tax reduction for first year! Can work from Greek islands. Growing digital nomad community. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'gr_independent_means',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'Independent Means Visa',
    type: 'passive-income',
    requirements: {
      minSalary: 24000, // EUR per year (€2,000/month)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.15,
      financial: 0.50,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Independent Means Visa for those with passive income (€2,000/month). Perfect for retirees. Very low cost of living in Greece.',
    officialUrl: 'https://migration.gov.gr/en/',
    notes: 'For retirees and those with passive income. €2,000/month (+20% for spouse, +15% per child). Must spend 183+ days/year in Greece. Very low cost of living. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'gr_work_permit',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 14400, // EUR per year (€1,200/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 14, // 90-120 days
    validityYears: 2, // 1-2 years, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Greek employer. Growing tech sector in Athens and Thessaloniki.',
    officialUrl: 'https://migration.gov.gr/en/',
    notes: 'Employer must prove no suitable Greek/EU candidate. Growing tech sector in Athens and Thessaloniki. Family members can join. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'gr_family_reunification',
    countryCode: 'GR',
    countryName: 'Greece',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 14, // 90-120 days
    validityYears: 2, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Greek residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://migration.gov.gr/en/',
    notes: 'Family members can work and study. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 7 years.',
  },
];

/**
 * Cyprus Visa Programs (Phase 10)
 */
export const CYPRUS_PROGRAMS: VisaProgram[] = [
  {
    id: 'cy_golden_visa',
    countryCode: 'CY',
    countryName: 'Cyprus',
    name: 'Golden Visa (Permanent Residence)',
    type: 'investor',
    requirements: {
      minInvestment: 300000, // EUR (real estate or business)
      minSalary: 50000, // EUR per year income requirement
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.60,
      education: 0.05,
      language: 0.05,
      family: 0.20,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 999, // Permanent (renewable every 5 years)
    pathToPermanentResidency: true, // This IS permanent residence
    pathToCitizenship: true,
    description: 'Golden Visa through €300k investment in real estate or business. Immediate permanent residence! English is official language.',
    officialUrl: 'https://www.mip.gov.cy/dmmip/md.nsf/immigrationpfi_en/immigrationpfi_en?OpenDocument',
    notes: 'One of fastest PR programs in EU - immediate permanent residence! English is official language. Low corporate tax (12.5%). Requires €50k annual income. Family included. Citizenship in 7 years.',
  },
  {
    id: 'cy_startup_visa',
    countryCode: 'CY',
    countryName: 'Cyprus',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 20000, // EUR minimum funds
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup Visa for entrepreneurs with innovative business idea. English-speaking environment, EU market access.',
    officialUrl: 'https://www.investcyprus.org.cy/',
    notes: 'Must be approved by Cyprus Deputy Ministry of Research. Growing startup ecosystem. English is official language. Tax benefits for startups. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'cy_work_permit',
    countryCode: 'CY',
    countryName: 'Cyprus',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 18000, // EUR per year (€1,500/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 3, // 1-3 years, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Work permit with job offer from Cypriot employer. English is official language - major advantage!',
    officialUrl: 'https://www.moi.gov.cy/moi/crmd/',
    notes: 'English is official language (huge advantage!). Growing tech and finance sectors. Family can join. PR in 5 years, citizenship in 7 years.',
  },
  {
    id: 'cy_digital_nomad',
    countryCode: 'CY',
    countryName: 'Cyprus',
    name: 'Digital Nomad Visa',
    type: 'work',
    requirements: {
      minSalary: 42000, // EUR per year (€3,500/month)
      requiresJobOffer: false, // Remote work for non-Cypriot company
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // 1 year, renewable for 2 more years
    pathToPermanentResidency: false, // Does not lead to PR
    pathToCitizenship: false,
    description: 'Digital Nomad Visa for remote workers earning €3,500/month. English-speaking, warm climate year-round. ⚠️ LIMITED TO 500 VISAS PER YEAR.',
    officialUrl: 'https://www.moi.gov.cy/moi/crmd/',
    notes: '⚠️ LIMITED TO 500 VISAS PER YEAR - apply early! Launched in 2021. Tax benefits. English is official language. Warm climate year-round. Good internet infrastructure. Does NOT lead to PR (temporary program). Renewable for up to 3 years total.',
  },
  {
    id: 'cy_family_reunification',
    countryCode: 'CY',
    countryName: 'Cyprus',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      minSalary: 18000, // EUR per year sponsor income (€1,500/month + €500 per dependent)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 3, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Cyprus residence permit. English-speaking environment.',
    officialUrl: 'https://www.moi.gov.cy/moi/crmd/',
    notes: 'English-speaking environment. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 7 years.',
  },
];

/**
 * Malta Visa Programs (Phase 10)
 */
export const MALTA_PROGRAMS: VisaProgram[] = [
  {
    id: 'mt_eu_blue_card',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 34956, // EUR per year (1.5x average gross annual salary - 2025)
      minEducationLevel: 'bachelor',
      requiresJobOffer: true,
    },
    weights: {
      career: 0.40,
      financial: 0.25,
      education: 0.20,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 13, // ~90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. English-speaking EU country with Mediterranean climate.',
    officialUrl: 'https://identitymalta.com/eu-blue-card/',
    notes: 'Salary threshold: €34,956/year (2025). Application fee: €300. Processing: ~90 days. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'mt_mprp',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'Malta Permanent Residence Programme (MPRP)',
    type: 'investor',
    requirements: {
      minInvestment: 300000, // EUR (property purchase) or €10k/year rent + €68k govt contribution
      minSalary: 100000, // EUR per year OR €500k assets
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.60,
      education: 0.05,
      language: 0.05,
      family: 0.20,
    },
    processingTimeWeeks: 20, // 120-180 days
    validityYears: 999, // Permanent
    pathToPermanentResidency: true, // This IS permanent residence
    pathToCitizenship: true,
    description: 'Malta Permanent Residence Programme through property investment or rental. English is official language. Immediate PR!',
    officialUrl: 'https://residencymalta.gov.mt/',
    notes: 'English is official language! Immediate permanent residence. Options: Buy (€300k-€350k) or Rent (€10k-€12k/year). Government contribution: €28k (rent) or €68k (buy). Requires €100k annual income OR €500k assets. No minimum stay. Citizenship in 5 years.',
  },
  {
    id: 'mt_nomad_residence',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'Nomad Residence Permit',
    type: 'work',
    requirements: {
      minSalary: 32400, // EUR per year (€2,700/month)
      requiresJobOffer: false, // Remote work for non-Maltese company
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // 1 year, renewable for up to 3 years total
    pathToPermanentResidency: false, // Does not lead to PR
    pathToCitizenship: false,
    description: 'Nomad Residence Permit for remote workers earning €2,700/month. Flat 15% tax rate on foreign income! English is official language.',
    officialUrl: 'https://nomad.residencymalta.gov.mt/',
    notes: 'Launched in 2021. Flat 15% tax rate on foreign income! English is official language. EU member. Good internet. Warm climate. Does NOT lead to PR (temporary program). Renewable for up to 3 years total.',
  },
  {
    id: 'mt_highly_skilled',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'Highly Skilled Worker Permit',
    type: 'work',
    requirements: {
      minSalary: 30000, // EUR per year
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 3, // 1-3 years, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Highly Skilled Worker Permit with job offer from Maltese employer. English is official language. Strong finance, gaming, and tech sectors.',
    officialUrl: 'https://jobsplus.gov.mt/',
    notes: 'English is official language! Growing tech, gaming (iGaming hub of Europe), and finance sectors. Family can join. PR in 5 years, citizenship in 5 years. Small but well-connected business community.',
  },
  {
    id: 'mt_startup_visa',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 15000, // EUR recommended minimum (€15k-€25k)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup Visa for entrepreneurs with innovative business idea. English-speaking, EU market access, tax incentives.',
    officialUrl: 'https://identitymalta.com/',
    notes: 'Must be approved by Malta Enterprise. Growing startup ecosystem. English is official language. EU market access. Tax incentives for startups. Small but well-connected. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'mt_family_reunification',
    countryCode: 'MT',
    countryName: 'Malta',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 14, // 90-120 days
    validityYears: 3, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Malta residence permit. English-speaking environment.',
    officialUrl: 'https://identitymalta.com/',
    notes: 'English is official language. Family members can work and study. Same-sex marriages recognized. Includes spouse, children, dependent parents. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 5 years.',
  },
];

/**
 * Poland Visa Programs (Phase 11)
 */
export const POLAND_PROGRAMS: VisaProgram[] = [
  {
    id: 'pl_eu_blue_card',
    countryCode: 'PL',
    countryName: 'Poland',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 27200, // EUR per year (PLN 114,231/year ~€2,270/month - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Lower salary threshold (€1,800/month) than Western Europe. Growing tech sector in Warsaw, Kraków, Wrocław.',
    officialUrl: 'https://www.gov.pl/web/uw-mazowiecki/en',
    notes: 'Lower salary threshold than Western Europe. Growing tech sector in Warsaw, Kraków, Wrocław. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years (with Polish language B1).',
  },
  {
    id: 'pl_work_permit',
    countryCode: 'PL',
    countryName: 'Poland',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 10800, // EUR per year (PLN 4,000/month ~€900/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Polish employer. Very low salary threshold (€900/month). Most common work visa.',
    officialUrl: 'https://www.gov.pl/web/uw-mazowiecki/en',
    notes: 'Most common work visa. Very low salary threshold. Employer must prove no suitable Polish/EU candidate. Family can join. Renewable. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pl_business_harbour',
    countryCode: 'PL',
    countryName: 'Poland',
    name: 'Poland Business Harbour (Startup Visa)',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 4500, // EUR (PLN 20,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Fast-track startup visa for entrepreneurs with innovative business idea. Acceptance by Polish startup accelerator required. Growing startup ecosystem.',
    officialUrl: 'https://www.gov.pl/web/uw-mazowiecki/en',
    notes: 'Fast-track program for startups. Growing startup ecosystem in Warsaw, Kraków. Access to accelerators and mentorship. Can bring co-founders. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pl_self_employment',
    countryCode: 'PL',
    countryName: 'Poland',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 6700, // EUR (PLN 30,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Poland required. Low cost of living, large market (38M people).',
    officialUrl: 'https://www.gov.pl/web/uw-mazowiecki/en',
    notes: 'For freelancers and entrepreneurs. Low cost of living. Growing market (38M people). Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'pl_family_reunification',
    countryCode: 'PL',
    countryName: 'Poland',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 3, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Polish residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.gov.pl/web/uw-mazowiecki/en',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 5 years.',
  },
];

/**
 * Czech Republic Visa Programs (Phase 11)
 */
export const CZECH_PROGRAMS: VisaProgram[] = [
  {
    id: 'cz_eu_blue_card',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 33240, // EUR per year (1.5x average gross annual salary)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Prague is major tech hub with high quality of life. Central European location.',
    officialUrl: 'https://mv.gov.cz/mvcren/article/third-country-nationals-third-country-nationals.aspx',
    notes: 'Prague is major tech hub. High quality of life. Central European location. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'cz_employee_card',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    name: 'Employee Card',
    type: 'work',
    requirements: {
      minSalary: 12000, // EUR per year (CZK 25,000/month ~€1,000/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Combined work permit and residence permit in one card. Faster than separate applications. Moderate salary threshold (€1,000/month).',
    officialUrl: 'https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/employee-card/',
    notes: 'Combines work permit and residence permit. Faster than separate applications. Family can join. Renewable. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'cz_startup_visa',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 8000, // EUR (CZK 200,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Prague has vibrant startup scene. Acceptance by CzechInvest or startup accelerator required.',
    officialUrl: 'https://czechstartups.gov.cz/en/start-up-visa/',
    notes: 'Prague has vibrant startup scene. Access to EU market. English widely spoken in business. Can bring co-founders. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'cz_self_employment',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    name: 'Self-Employment Visa (živnostenský list)',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 10000, // EUR (CZK 250,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 17, // 60-120 days (2025)
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Trade license (živnostenský list) required. Low bureaucracy, easy to obtain.',
    officialUrl: 'https://ipc.gov.cz/en/',
    notes: 'For freelancers and entrepreneurs. Trade license easy to obtain. Low bureaucracy. Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'cz_family_reunification',
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 12, // 60-120 days
    validityYears: 2, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Czech residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://ipc.gov.cz/en/',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 5 years.',
  },
];

/**
 * Hungary Visa Programs (Phase 11)
 */
export const HUNGARY_PROGRAMS: VisaProgram[] = [
  {
    id: 'hu_eu_blue_card',
    countryCode: 'HU',
    countryName: 'Hungary',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 26400, // EUR per year (HUF 883,671/month ~€2,200/month - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Budapest has growing tech scene. Very low cost of living. Lower salary threshold (€1,500/month).',
    officialUrl: 'https://oif.gov.hu/en/',
    notes: 'Budapest has growing tech scene. Very low cost of living. Central European location. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hu_work_permit',
    countryCode: 'HU',
    countryName: 'Hungary',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 9000, // EUR per year (HUF 300,000/month ~€750/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Hungarian employer. Very low salary threshold (€750/month). Very low cost of living.',
    officialUrl: 'https://oif.gov.hu/en/',
    notes: 'Very low salary threshold. Very low cost of living. Employer must prove no suitable Hungarian/EU candidate. Family can join. Renewable. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hu_white_card',
    countryCode: 'HU',
    countryName: 'Hungary',
    name: 'White Card (Startup Visa)',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 5000, // EUR (HUF 2,000,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'White Card startup visa for entrepreneurs with innovative business idea. Budapest startup scene growing. Very low operating costs. 9% corporate tax.',
    officialUrl: 'https://oif.gov.hu/en/',
    notes: 'Budapest startup scene growing. Very low operating costs. 9% corporate tax (one of lowest in EU). Access to EU market. Can bring co-founders. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hu_self_employment',
    countryCode: 'HU',
    countryName: 'Hungary',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 7500, // EUR (HUF 3,000,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Hungary required. Very low cost of living. 9% corporate tax.',
    officialUrl: 'https://oif.gov.hu/en/',
    notes: 'For freelancers and entrepreneurs. Very low cost of living. 9% corporate tax (one of lowest in EU). Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hu_family_reunification',
    countryCode: 'HU',
    countryName: 'Hungary',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 2, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Hungarian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://oif.gov.hu/en/',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 8 years.',
  },
];

/**
 * Romania Visa Programs (Phase 11)
 */
export const ROMANIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'ro_eu_blue_card',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 32880, // EUR per year (RON 162,936/year ~€2,740/month - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Bucharest is major tech hub. Very low cost of living. Fastest internet in EU!',
    officialUrl: 'https://igi.mai.gov.ro/en/residence-permit/',
    notes: 'Bucharest is major tech hub. Very low cost of living. Fastest internet in EU! Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ro_work_permit',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 9600, // EUR per year (RON 4,000/month ~€800/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Romanian employer. Very low salary threshold (€800/month). Very low cost of living. Growing tech sector.',
    officialUrl: 'https://igi.mai.gov.ro/en/employment-and-posting/',
    notes: 'Very low salary threshold. Very low cost of living. Growing tech sector. Employer must prove no suitable Romanian/EU candidate. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ro_startup_visa',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 4000, // EUR (RON 20,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Bucharest startup ecosystem growing. Very low operating costs. Fastest internet in EU!',
    officialUrl: 'https://igi.mai.gov.ro/en/residence-permit/',
    notes: 'Bucharest startup ecosystem growing. Very low operating costs. Fastest internet in EU (great for tech!). Can bring co-founders. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ro_self_employment',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 6000, // EUR (RON 30,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Romania required. Very low cost of living. 16% flat tax.',
    officialUrl: 'https://igi.mai.gov.ro/en/residence-permit/',
    notes: 'For freelancers and entrepreneurs. Very low cost of living. 16% flat tax. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ro_digital_nomad',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'Digital Nomad Visa',
    type: 'digital_nomad',
    requirements: {
      minSalary: 45600, // EUR per year (€3,800/month)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.40,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 4, // 30 days
    validityYears: 1, // 12 months, renewable
    pathToPermanentResidency: false, // Can convert to other visa
    pathToCitizenship: false, // Can convert to other visa
    description: 'Digital Nomad Visa for remote workers. Fastest internet in EU! Very low cost of living. Bucharest is major tech hub.',
    officialUrl: 'https://igi.mai.gov.ro/en/residence-permit/',
    notes: 'Income: €3,800/month. Fastest internet in EU! Very low cost of living. 12-month validity, renewable. Can convert to other visa types for PR/citizenship path.',
  },
  {
    id: 'ro_family_reunification',
    countryCode: 'RO',
    countryName: 'Romania',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Romanian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://igi.mai.gov.ro/en/residence-permit/',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 8 years.',
  },
];

/**
 * Bulgaria Visa Programs (Phase 11)
 */
export const BULGARIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'bg_eu_blue_card',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 9933, // EUR per year (LOWEST in EU - 1.5x average gross annual salary)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 3,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. LOWEST salary threshold in EU! Sofia has growing tech scene. LOWEST cost of living in EU! 10% flat tax rate.',
    officialUrl: 'https://www.mvr.bg/en/migration',
    notes: 'LOWEST salary threshold in EU! Sofia has growing tech scene. LOWEST cost of living in EU! 10% flat tax rate. Black Sea coast. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'bg_work_permit',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    name: 'Work Permit (Type D Visa)',
    type: 'work',
    requirements: {
      minSalary: 9000, // EUR per year (BGN 1,500/month ~€750/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Bulgarian employer. Very low salary threshold (€750/month). LOWEST cost of living in EU! 10% flat tax.',
    officialUrl: 'https://www.mvr.bg/en/migration',
    notes: 'Very low salary threshold. LOWEST cost of living in EU! 10% flat tax rate. Employer must prove no suitable Bulgarian/EU candidate. Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'bg_startup_visa',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 5000, // EUR (BGN 10,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Sofia startup scene growing. LOWEST operating costs in EU! 10% flat tax.',
    officialUrl: 'https://www.mvr.bg/en/migration',
    notes: 'Sofia startup scene growing. LOWEST operating costs in EU! 10% flat tax. Can bring co-founders. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'bg_self_employment',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 7500, // EUR (BGN 15,000)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Bulgaria required. LOWEST cost of living in EU! 10% flat tax (lowest in EU!).',
    officialUrl: 'https://www.mvr.bg/en/migration',
    notes: 'For freelancers and entrepreneurs. LOWEST cost of living in EU! 10% flat tax (lowest in EU!). Family can join. PR in 5 years, citizenship in 5 years.',
  },
  {
    id: 'bg_family_reunification',
    countryCode: 'BG',
    countryName: 'Bulgaria',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Bulgarian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.mvr.bg/en/migration',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 5 years.',
  },
];

/**
 * Slovakia Visa Programs (Phase 12)
 */
export const SLOVAKIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'sk_eu_blue_card',
    countryCode: 'SK',
    countryName: 'Slovakia',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 20592, // EUR per year (€1,716/month - 1.2x avg wage 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 4, // 30 days (2025)
    validityYears: 3, // 3 years (2025)
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers with higher education degree. Bratislava proximity to Vienna. Low cost of living. Central European location.',
    officialUrl: 'https://www.minv.sk/?residencies',
    notes: 'Application fee: €250 (2025). Processing: 30 days. Validity: 3 years. Bratislava proximity to Vienna. Low cost of living. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'sk_work_permit',
    countryCode: 'SK',
    countryName: 'Slovakia',
    name: 'Work Permit (Employee Card)',
    type: 'work',
    requirements: {
      minSalary: 9600, // EUR per year (€800/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Slovak employer. Very low salary threshold (€800/month). Low cost of living. Bratislava tech scene.',
    officialUrl: 'https://www.minv.sk/?residencies',
    notes: 'Very low salary threshold. Low cost of living. Bratislava tech scene. Employer must prove no suitable Slovak/EU candidate. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'sk_startup_visa',
    countryCode: 'SK',
    countryName: 'Slovakia',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 5000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Bratislava startup ecosystem. Low operating costs. Proximity to Vienna.',
    officialUrl: 'https://www.minv.sk/?residencies',
    notes: 'Bratislava startup ecosystem. Low operating costs. Proximity to Vienna. Can bring co-founders. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'sk_self_employment',
    countryCode: 'SK',
    countryName: 'Slovakia',
    name: 'Self-Employment Visa (Trade License)',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 7500, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Trade license (živnostenský list) required. Low cost of living. Central European location.',
    officialUrl: 'https://www.minv.sk/?residencies',
    notes: 'For freelancers and entrepreneurs. Trade license (živnostenský list) required. Low cost of living. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'sk_family_reunification',
    countryCode: 'SK',
    countryName: 'Slovakia',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Slovak residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.minv.sk/?residencies',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 8 years.',
  },
];

/**
 * Slovenia Visa Programs (Phase 12)
 */
export const SLOVENIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'si_eu_blue_card',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 24000, // EUR per year (€2,000/month)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Highest quality of life in Eastern Europe. Alpine beauty (Lake Bled!). Ljubljana charm.',
    officialUrl: 'https://www.gov.si/en/topics/entry-and-residence/',
    notes: 'Highest quality of life in Eastern Europe. Alpine beauty (Lake Bled!). Ljubljana charm. Small, manageable country. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'si_work_permit',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'Work Permit (Single Permit)',
    type: 'work',
    requirements: {
      minSalary: 14400, // EUR per year (€1,200/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Single permit combining work and residence permit. Highest quality of life in Eastern Europe. Alpine beauty. Ljubljana charm.',
    officialUrl: 'https://www.gov.si/en/topics/entry-and-residence/',
    notes: 'Single permit (work + residence). Highest quality of life in Eastern Europe. Alpine beauty. Employer must prove no suitable Slovenian/EU candidate. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'si_startup_visa',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 8000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Ljubljana startup scene. High quality of life. Alpine beauty.',
    officialUrl: 'https://www.startup.si/',
    notes: 'Ljubljana startup scene. High quality of life. Alpine beauty (Lake Bled!). Can bring co-founders. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'si_self_employment',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 10000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Slovenia required. High quality of life. Alpine beauty.',
    officialUrl: 'https://www.gov.si/en/topics/entry-and-residence/',
    notes: 'For freelancers and entrepreneurs. High quality of life. Alpine beauty. Small, manageable country. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'si_digital_nomad',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'Digital Nomad Visa',
    type: 'digital_nomad',
    requirements: {
      minSalary: 24000, // EUR per year (€2,000/month - estimated)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.40,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 4, // 30 days
    validityYears: 1, // 12 months
    pathToPermanentResidency: false, // Can convert to other visa
    pathToCitizenship: false, // Can convert to other visa
    description: 'Digital Nomad Visa for remote workers. Launched November 21, 2025. Alpine beauty (Lake Bled!). High quality of life.',
    officialUrl: 'https://www.gov.si/en/topics/entry-and-residence/',
    notes: 'NEW: Launched November 21, 2025. 12-month permit. Alpine beauty (Lake Bled!). High quality of life. Small, manageable country. Can convert to other visa types for PR/citizenship path.',
  },
  {
    id: 'si_family_reunification',
    countryCode: 'SI',
    countryName: 'Slovenia',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Slovenian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.gov.si/en/topics/entry-and-residence/',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 10 years.',
  },
];

/**
 * Croatia Visa Programs (Phase 12)
 */
export const CROATIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'hr_eu_blue_card',
    countryCode: 'HR',
    countryName: 'Croatia',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 24846, // EUR per year (€2,070/month - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Adriatic Sea coastline! Mediterranean lifestyle. Growing tech scene (Zagreb, Split).',
    officialUrl: 'https://mup.gov.hr/aliens-281621/281621',
    notes: 'Adriatic Sea coastline! Mediterranean lifestyle. Growing tech scene (Zagreb, Split). EU\'s newest member (2013). Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hr_work_permit',
    countryCode: 'HR',
    countryName: 'Croatia',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 10800, // EUR per year (€900/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Croatian employer. Adriatic Sea coastline! Mediterranean lifestyle. Growing tech scene.',
    officialUrl: 'https://mup.gov.hr/aliens-281621/281621',
    notes: 'Adriatic Sea coastline! Mediterranean lifestyle. Growing tech scene. Employer must prove no suitable Croatian/EU candidate. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hr_digital_nomad',
    countryCode: 'HR',
    countryName: 'Croatia',
    name: 'Digital Nomad Visa',
    type: 'work',
    requirements: {
      minSalary: 39540, // EUR per year (€3,295/month - 2025) - remote work
      requiresJobOffer: false, // Remote work, not local job
    },
    weights: {
      career: 0.35,
      financial: 0.35,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 4, // 30 days
    validityYears: 1.5, // 18 months (extended in 2025)
    pathToPermanentResidency: false, // Can convert to other visa
    pathToCitizenship: false, // Can convert to other visa
    description: 'Digital Nomad Visa for remote workers. Adriatic Sea coastline! Mediterranean lifestyle. Work from paradise!',
    officialUrl: 'https://mup.gov.hr/aliens-281621/temporary-stay-of-digital-nomads-286853/286853',
    notes: 'For remote workers and freelancers. 18-month validity (2025 extension). Alternative: €59,310 savings proof. Can convert to other visa types for PR/citizenship path.',
  },
  {
    id: 'hr_self_employment',
    countryCode: 'HR',
    countryName: 'Croatia',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 7500, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Croatia required. Adriatic Sea coastline!',
    officialUrl: 'https://mup.gov.hr/aliens-281621/281621',
    notes: 'For freelancers and entrepreneurs. Adriatic Sea coastline! Mediterranean lifestyle. Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'hr_family_reunification',
    countryCode: 'HR',
    countryName: 'Croatia',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Croatian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://mup.gov.hr/aliens-281621/281621',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 8 years.',
  },
];

/**
 * Estonia Visa Programs (Phase 12)
 */
export const ESTONIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'ee_eu_blue_card',
    countryCode: 'EE',
    countryName: 'Estonia',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 30336, // EUR per year (€2,528/month - 1.5x avg gross salary 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Most tech-forward country in EU! E-government services. Tallinn startup ecosystem.',
    officialUrl: 'https://www.politsei.ee/en',
    notes: 'Most tech-forward country in EU! E-government services. Tallinn startup ecosystem. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ee_digital_nomad',
    countryCode: 'EE',
    countryName: 'Estonia',
    name: 'Digital Nomad Visa',
    type: 'work',
    requirements: {
      minSalary: 54000, // EUR per year (€4,500/month - 2025) - remote work
      requiresJobOffer: false, // Remote work, not local job
    },
    weights: {
      career: 0.35,
      financial: 0.35,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 4, // 30 days
    validityYears: 1, // Renewable
    pathToPermanentResidency: false, // Can convert to other visa
    pathToCitizenship: false, // Can convert to other visa
    description: 'Digital Nomad Visa for remote workers. Most tech-forward country! E-government services. Work from Tallinn!',
    officialUrl: 'https://www.politsei.ee/en',
    notes: 'For remote workers and freelancers. Most tech-forward country! E-government services. Tallinn startup ecosystem. Valid for 1 year, renewable. Can convert to other visa types for PR/citizenship path.',
  },
  {
    id: 'ee_startup_visa',
    countryCode: 'EE',
    countryName: 'Estonia',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 16000, // EUR (includes living expenses)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1.5, // 18 months
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs. Acceptance by Startup Estonia committee required. Most tech-forward country! Tallinn startup ecosystem.',
    officialUrl: 'https://startupestonia.ee/startup-visa',
    notes: 'Acceptance by Startup Estonia committee required. Most tech-forward country! Tallinn startup ecosystem. E-government services. Can bring co-founders. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ee_e_residency_business',
    countryCode: 'EE',
    countryName: 'Estonia',
    name: 'E-Residency + Business Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 5000, // EUR + E-Residency fee (€100-€200)
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'E-Residency + Business Visa. UNIQUE program! Run Estonian company remotely, then relocate. E-government services.',
    officialUrl: 'https://e-resident.gov.ee/',
    notes: 'UNIQUE E-Residency program! Run Estonian company remotely, then relocate. E-government services. Most tech-forward country! Family can join. PR in 5 years, citizenship in 8 years.',
  },
  {
    id: 'ee_family_reunification',
    countryCode: 'EE',
    countryName: 'Estonia',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Estonian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.politsei.ee/en',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 8 years.',
  },
];

/**
 * Latvia Visa Programs (Phase 12)
 */
export const LATVIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'lv_eu_blue_card',
    countryCode: 'LV',
    countryName: 'Latvia',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 24720, // EUR per year (€2,060/month - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Riga tech scene. Low cost of living. Baltic Sea coast. Art Nouveau architecture.',
    officialUrl: 'https://www.pmlp.gov.lv/en',
    notes: 'Riga tech scene. Low cost of living. Baltic Sea coast. Art Nouveau architecture. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lv_work_permit',
    countryCode: 'LV',
    countryName: 'Latvia',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 10800, // EUR per year (€900/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Latvian employer. Riga tech scene. Low cost of living. Baltic Sea coast.',
    officialUrl: 'https://www.pmlp.gov.lv/en',
    notes: 'Riga tech scene. Low cost of living. Baltic Sea coast. Employer must prove no suitable Latvian/EU candidate. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lv_startup_visa',
    countryCode: 'LV',
    countryName: 'Latvia',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 6000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs with innovative business idea. Riga tech scene. Low operating costs. Baltic Sea coast.',
    officialUrl: 'https://www.pmlp.gov.lv/en',
    notes: 'Riga tech scene. Low operating costs. Baltic Sea coast. Can bring co-founders. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lv_self_employment',
    countryCode: 'LV',
    countryName: 'Latvia',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 8000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Latvia required. Low cost of living. Baltic Sea coast.',
    officialUrl: 'https://www.pmlp.gov.lv/en',
    notes: 'For freelancers and entrepreneurs. Low cost of living. Baltic Sea coast. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lv_family_reunification',
    countryCode: 'LV',
    countryName: 'Latvia',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Latvian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.pmlp.gov.lv/en',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 10 years.',
  },
];

/**
 * Lithuania Visa Programs (Phase 12)
 */
export const LITHUANIA_PROGRAMS: VisaProgram[] = [
  {
    id: 'lt_eu_blue_card',
    countryCode: 'LT',
    countryName: 'Lithuania',
    name: 'EU Blue Card',
    type: 'work',
    requirements: {
      minSalary: 30000, // EUR per year (1.5x avg gross monthly wage - 2025)
      requiresJobOffer: true,
      requiresEducation: true,
    },
    weights: {
      career: 0.40,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.10,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 2,
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'EU Blue Card for highly skilled workers. Vilnius tech hub. Low cost of living. Fast-growing economy.',
    officialUrl: 'https://www.migracija.lt/en/as-esu-aukstos-kvalifikacijos-darbuotojas',
    notes: 'Vilnius tech hub. Low cost of living. Fast-growing economy. Family can join. Can work throughout EU after 18 months. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lt_work_permit',
    countryCode: 'LT',
    countryName: 'Lithuania',
    name: 'Work Permit',
    type: 'work',
    requirements: {
      minSalary: 10800, // EUR per year (€900/month)
      requiresJobOffer: true,
    },
    weights: {
      career: 0.45,
      financial: 0.25,
      education: 0.10,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Standard work permit with job offer from Lithuanian employer. Vilnius tech hub. Low cost of living. Fast-growing economy.',
    officialUrl: 'https://www.migracija.lt/en',
    notes: 'Vilnius tech hub. Low cost of living. Fast-growing economy. Employer must prove no suitable Lithuanian/EU candidate. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lt_startup_visa',
    countryCode: 'LT',
    countryName: 'Lithuania',
    name: 'Startup Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 6000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.35,
      financial: 0.30,
      education: 0.15,
      language: 0.05,
      family: 0.15,
    },
    processingTimeWeeks: 6, // 30-60 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Startup visa for entrepreneurs. Acceptance by Startup Lithuania required. Vilnius tech hub. Low operating costs.',
    officialUrl: 'https://www.migracija.lt/en',
    notes: 'Acceptance by Startup Lithuania required. Vilnius tech hub. Low operating costs. Can bring co-founders. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lt_self_employment',
    countryCode: 'LT',
    countryName: 'Lithuania',
    name: 'Self-Employment Visa',
    type: 'entrepreneur',
    requirements: {
      minInvestment: 8000, // EUR
      requiresJobOffer: false,
    },
    weights: {
      career: 0.30,
      financial: 0.35,
      education: 0.10,
      language: 0.10,
      family: 0.15,
    },
    processingTimeWeeks: 10, // 30-90 days
    validityYears: 1, // Initially 1 year, renewable
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Self-employment visa for freelancers and entrepreneurs. Business registration in Lithuania required. Low cost of living.',
    officialUrl: 'https://www.migracija.lt/en',
    notes: 'For freelancers and entrepreneurs. Low cost of living. Fast-growing economy. Family can join. PR in 5 years, citizenship in 10 years.',
  },
  {
    id: 'lt_family_reunification',
    countryCode: 'LT',
    countryName: 'Lithuania',
    name: 'Family Reunification',
    type: 'family_reunification',
    requirements: {
      requiresJobOffer: false,
    },
    weights: {
      career: 0.10,
      financial: 0.20,
      education: 0.05,
      language: 0.10,
      family: 0.55,
    },
    processingTimeWeeks: 10, // 60-90 days
    validityYears: 1, // Tied to sponsor's permit
    pathToPermanentResidency: true,
    pathToCitizenship: true,
    description: 'Join family members who have valid Lithuanian residence permit. Includes spouse, children, and parents.',
    officialUrl: 'https://www.migracija.lt/en',
    notes: 'Includes spouse, children, parents. Family members can work and study. Same-sex partnerships recognized. Validity tied to sponsor\'s permit. PR in 5 years, citizenship in 10 years.',
  },
];

export const ALL_VISA_PROGRAMS: VisaProgram[] = [
  ...GERMANY_PROGRAMS,
  ...NETHERLANDS_PROGRAMS,
  ...FRANCE_PROGRAMS,
  ...SPAIN_PROGRAMS,
  ...ITALY_PROGRAMS,
  ...AUSTRIA_PROGRAMS,
  ...BELGIUM_PROGRAMS,
  ...LUXEMBOURG_PROGRAMS,
  ...IRELAND_PROGRAMS,
  ...SWEDEN_PROGRAMS,
  ...DENMARK_PROGRAMS,
  ...FINLAND_PROGRAMS,
  ...PORTUGAL_PROGRAMS,
  ...GREECE_PROGRAMS,
  ...CYPRUS_PROGRAMS,
  ...MALTA_PROGRAMS,
  ...POLAND_PROGRAMS,
  ...CZECH_PROGRAMS,
  ...HUNGARY_PROGRAMS,
  ...ROMANIA_PROGRAMS,
  ...BULGARIA_PROGRAMS,
  ...SLOVAKIA_PROGRAMS,
  ...SLOVENIA_PROGRAMS,
  ...CROATIA_PROGRAMS,
  ...ESTONIA_PROGRAMS,
  ...LATVIA_PROGRAMS,
  ...LITHUANIA_PROGRAMS,
];

/**
 * Get visa programs by country code
 */
export function getVisaProgramsByCountry(countryCode: string): VisaProgram[] {
  return ALL_VISA_PROGRAMS.filter(program => program.countryCode === countryCode);
}

/**
 * Get visa program by ID
 */
export function getVisaProgramById(programId: string): VisaProgram | undefined {
  return ALL_VISA_PROGRAMS.find(program => program.id === programId);
}

/**
 * Get all visa programs of a specific type
 */
export function getVisaProgramsByType(type: string): VisaProgram[] {
  return ALL_VISA_PROGRAMS.filter(program => program.type === type);
}
