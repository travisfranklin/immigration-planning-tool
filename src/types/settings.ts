/**
 * Settings Type Definitions
 * Defines user preferences and application settings
 */

import { APP_VERSION } from '../constants/app';

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en'; // Extensible for future languages
export type Units = 'metric' | 'imperial';

export interface DisplayPreferences {
  theme: Theme;
  language: Language;
  units: Units;
}

export interface CalculationPreferences {
  excludedCountries: string[]; // Country codes to exclude from calculations
  customWeights?: {
    career?: number;
    financial?: number;
    education?: number;
    language?: number;
    family?: number;
  };
}

export interface PrivacySettings {
  encryptData: boolean;
  autoClearOnClose: boolean;
}

export interface AppSettings {
  id: string;
  display: DisplayPreferences;
  calculation: CalculationPreferences;
  privacy: PrivacySettings;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}

export const DEFAULT_SETTINGS: Omit<AppSettings, 'id' | 'createdAt' | 'updatedAt'> = {
  display: {
    theme: 'system',
    language: 'en',
    units: 'metric',
  },
  calculation: {
    excludedCountries: [],
  },
  privacy: {
    encryptData: false,
    autoClearOnClose: false,
  },
  version: APP_VERSION,
};

