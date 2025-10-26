/**
 * User Profile Types
 * Defines the complete data structure for user profiles
 */

export type EducationLevel = 'high_school' | 'bachelor' | 'master' | 'phd' | '';
export type LanguageProficiency = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type ImmigrationPath = 'work_visa' | 'permanent_residency' | 'citizenship' | 'all' | '';
export type EmploymentStatus = 'employed' | 'self_employed' | 'unemployed' | 'student' | '';
export type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed' | '';

export interface Language {
  language: string;
  proficiency: LanguageProficiency;
}

export interface FamilyMember {
  name: string;
  relationship: 'spouse' | 'child' | 'parent' | 'sibling' | 'other';
  citizenship: string;
  immigrationStatus?: string;
}

export interface UserProfile {
  id: string;
  createdAt: number;
  updatedAt: number;

  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  citizenship: 'US' | 'CA' | 'MX' | 'OTHER' | '';
  
  // Financial Information
  annualIncome: number;
  savingsAmount: number;
  employmentStatus: EmploymentStatus;

  // Education Information
  educationLevel: EducationLevel;
  fieldOfStudy: string;
  yearsOfExperience: number;

  // Career Information
  currentOccupation: string;
  occupationCode?: string; // ISCO-08 code

  // Language Information
  languages: Language[];

  // Family Information
  maritalStatus: MaritalStatus;
  familyMembers: FamilyMember[];

  // Immigration Goals
  targetCountries: string[];
  immigrationPath: ImmigrationPath;
  timelineMonths?: number;

  // Additional Information
  hasJobOffer: boolean;
  jobOfferCountry?: string;
}

export interface UserProfileFormData {
  personalInfo?: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  financialInfo?: {
    annualIncome: number;
    savingsAmount: number;
    employmentStatus: string;
  };
  educationInfo?: {
    educationLevel: EducationLevel;
    fieldOfStudy: string;
    yearsOfExperience: number;
  };
  careerInfo?: {
    currentOccupation: string;
  };
  languageInfo?: Language[];
  familyInfo?: {
    maritalStatus: string;
    familyMembers: FamilyMember[];
  };
  immigrationGoals?: {
    targetCountries: string[];
    immigrationPath: ImmigrationPath;
    timelineMonths?: number;
  };
}

