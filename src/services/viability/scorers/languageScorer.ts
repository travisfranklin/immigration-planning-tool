/**
 * Language Scorer
 * Calculates language component score based on language proficiency
 */

import type { UserProfile, LanguageProficiency } from '../../../types/user';
import type { VisaProgram } from '../../../types/viability';

/**
 * Get language proficiency rank (for comparison)
 */
function getLanguageProficiencyRank(level: LanguageProficiency): number {
  const ranks: Record<LanguageProficiency, number> = {
    A1: 1,
    A2: 2,
    B1: 3,
    B2: 4,
    C1: 5,
    C2: 6,
  };
  return ranks[level];
}

/**
 * Map country codes to primary languages
 */
const COUNTRY_LANGUAGES: Record<string, string> = {
  // MVP Countries
  DE: 'German',
  NL: 'Dutch',
  FR: 'French',
  ES: 'Spanish',
  IT: 'Italian',
  // Phase 8 Countries
  AT: 'German',
  BE: 'Dutch', // Belgium has Dutch and French, using Dutch as primary
  LU: 'French', // Luxembourg has French, German, and Luxembourgish
  IE: 'English',
  // Phase 9 Countries (Nordic)
  SE: 'Swedish',
  DK: 'Danish',
  FI: 'Finnish',
  // Phase 10 Countries (Mediterranean/Southern Europe)
  PT: 'Portuguese',
  GR: 'Greek',
  CY: 'Greek', // Cyprus has Greek and Turkish
  MT: 'Maltese',
  // Phase 11 Countries (Eastern Europe - Tier 1)
  PL: 'Polish',
  CZ: 'Czech',
  HU: 'Hungarian',
  RO: 'Romanian',
  BG: 'Bulgarian',
  // Phase 12 Countries (Eastern Europe Tier 2 + Baltics)
  SK: 'Slovak',
  SI: 'Slovenian',
  HR: 'Croatian',
  EE: 'Estonian',
  LV: 'Latvian',
  LT: 'Lithuanian',
};

/**
 * Get user's proficiency in a specific language
 */
function getUserLanguageProficiency(profile: UserProfile, language: string | undefined): LanguageProficiency | null {
  // Return null if language is undefined
  if (!language) {
    return null;
  }

  const userLanguage = profile.languages.find(
    lang => lang.language && lang.language.toLowerCase() === language.toLowerCase()
  );
  return userLanguage?.proficiency || null;
}

/**
 * Score based on target country language proficiency
 */
function scoreCountryLanguage(profile: UserProfile, program: VisaProgram): number {
  const requiredLanguage = COUNTRY_LANGUAGES[program.countryCode];
  const userProficiency = getUserLanguageProficiency(profile, requiredLanguage);
  
  if (!userProficiency) {
    // User doesn't speak the language
    const minRequired = program.requirements.minLanguageProficiency;
    
    if (minRequired) {
      return 10; // Very low score if language is required
    }
    
    return 40; // Low but not terrible if not required
  }
  
  const userRank = getLanguageProficiencyRank(userProficiency);
  const minRequired = program.requirements.minLanguageProficiency;
  
  if (!minRequired) {
    // No requirement - score based on proficiency level
    if (userRank >= 6) return 100; // C2
    if (userRank >= 5) return 95;  // C1
    if (userRank >= 4) return 85;  // B2
    if (userRank >= 3) return 75;  // B1
    if (userRank >= 2) return 60;  // A2
    return 50; // A1
  }
  
  const requiredRank = getLanguageProficiencyRank(minRequired);
  
  // User doesn't meet minimum
  if (userRank < requiredRank) {
    return Math.max(20, (userRank / requiredRank) * 60);
  }
  
  // User meets or exceeds minimum
  const excessRanks = userRank - requiredRank;
  return 70 + (excessRanks * 6); // 70 for meeting, +6 for each level above
}

/**
 * Score based on English proficiency
 * English is valuable in all EU countries for work
 */
function scoreEnglishProficiency(profile: UserProfile): number {
  const englishProficiency = getUserLanguageProficiency(profile, 'English');
  
  if (!englishProficiency) {
    return 40; // Low score if no English
  }
  
  const rank = getLanguageProficiencyRank(englishProficiency);
  
  if (rank >= 6) return 100; // C2
  if (rank >= 5) return 95;  // C1
  if (rank >= 4) return 90;  // B2
  if (rank >= 3) return 80;  // B1
  if (rank >= 2) return 65;  // A2
  return 50; // A1
}

/**
 * Score based on total number of languages
 * Multilingualism is valuable
 */
function scoreMultilingualism(profile: UserProfile): number {
  const languageCount = profile.languages.length;
  
  if (languageCount >= 4) return 100;
  if (languageCount >= 3) return 90;
  if (languageCount >= 2) return 75;
  if (languageCount >= 1) return 60;
  
  return 40; // No languages listed
}

/**
 * Score based on language learning potential
 * If user speaks related languages, they can learn the target language more easily
 */
function scoreLanguageLearningPotential(profile: UserProfile, program: VisaProgram): number {
  const targetLanguage = COUNTRY_LANGUAGES[program.countryCode];

  // If target language is undefined, return default score
  if (!targetLanguage) {
    return 60;
  }

  const userLanguages = profile.languages
    .filter(l => l.language) // Filter out entries with undefined/null language
    .map(l => l.language.toLowerCase());

  // Language families
  const romanLanguages = ['french', 'spanish', 'italian', 'portuguese', 'romanian'];
  const germanicLanguages = ['german', 'dutch', 'english', 'swedish', 'norwegian', 'danish'];
  const slavicLanguages = ['polish', 'czech', 'slovak', 'slovenian', 'croatian', 'bulgarian'];
  const balticLanguages = ['latvian', 'lithuanian'];
  const finnoUgricLanguages = ['finnish', 'estonian', 'hungarian'];

  const targetIsRomance = romanLanguages.includes(targetLanguage.toLowerCase());
  const targetIsGermanic = germanicLanguages.includes(targetLanguage.toLowerCase());
  const targetIsSlavic = slavicLanguages.includes(targetLanguage.toLowerCase());
  const targetIsBaltic = balticLanguages.includes(targetLanguage.toLowerCase());
  const targetIsFinnoUgric = finnoUgricLanguages.includes(targetLanguage.toLowerCase());

  // Check if user speaks related languages
  if (targetIsRomance) {
    const speaksRelated = userLanguages.some(lang => romanLanguages.includes(lang));
    if (speaksRelated) return 90;
  }

  if (targetIsGermanic) {
    const speaksRelated = userLanguages.some(lang => germanicLanguages.includes(lang));
    if (speaksRelated) return 90;
  }

  if (targetIsSlavic) {
    const speaksRelated = userLanguages.some(lang => slavicLanguages.includes(lang));
    if (speaksRelated) return 90;
  }

  if (targetIsBaltic) {
    const speaksRelated = userLanguages.some(lang => balticLanguages.includes(lang));
    if (speaksRelated) return 90;
  }

  if (targetIsFinnoUgric) {
    const speaksRelated = userLanguages.some(lang => finnoUgricLanguages.includes(lang));
    if (speaksRelated) return 90;
  }

  // User speaks English (helpful for learning any language)
  if (userLanguages.includes('english')) return 75;

  // User speaks multiple languages (shows language learning ability)
  if (userLanguages.length >= 2) return 70;

  return 60;
}

/**
 * Calculate overall language score
 */
export function calculateLanguageScore(profile: UserProfile, program: VisaProgram): number {
  const countryLanguageScore = scoreCountryLanguage(profile, program);
  const englishScore = scoreEnglishProficiency(profile);
  const multilingualismScore = scoreMultilingualism(profile);
  const learningPotentialScore = scoreLanguageLearningPotential(profile, program);
  
  // Weight the sub-components
  const weights = {
    countryLanguage: 0.50,  // Target country language is most important
    english: 0.25,          // English is valuable
    multilingualism: 0.15,  // Multiple languages is a bonus
    learningPotential: 0.10, // Ability to learn is helpful
  };
  
  const totalScore = 
    countryLanguageScore * weights.countryLanguage +
    englishScore * weights.english +
    multilingualismScore * weights.multilingualism +
    learningPotentialScore * weights.learningPotential;
  
  return Math.round(Math.max(0, Math.min(100, totalScore)));
}

/**
 * Get detailed breakdown of language score
 */
export function getLanguageScoreBreakdown(profile: UserProfile, program: VisaProgram): {
  totalScore: number;
  components: Array<{ name: string; score: number; weight: number }>;
  targetLanguage: string;
  userProficiency: string | null;
} {
  const countryLanguageScore = scoreCountryLanguage(profile, program);
  const englishScore = scoreEnglishProficiency(profile);
  const multilingualismScore = scoreMultilingualism(profile);
  const learningPotentialScore = scoreLanguageLearningPotential(profile, program);
  
  const targetLanguage = COUNTRY_LANGUAGES[program.countryCode];
  const userProficiency = getUserLanguageProficiency(profile, targetLanguage);
  
  return {
    totalScore: calculateLanguageScore(profile, program),
    components: [
      { name: `${targetLanguage} Proficiency`, score: Math.round(countryLanguageScore), weight: 0.50 },
      { name: 'English Proficiency', score: Math.round(englishScore), weight: 0.25 },
      { name: 'Multilingualism', score: Math.round(multilingualismScore), weight: 0.15 },
      { name: 'Learning Potential', score: Math.round(learningPotentialScore), weight: 0.10 },
    ],
    targetLanguage,
    userProficiency,
  };
}

