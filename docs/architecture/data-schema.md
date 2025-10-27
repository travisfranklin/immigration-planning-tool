# EU Immigration Planning Application - Data Schema

## Overview
This document defines the data model for the local-first EU immigration planning application. All data is stored locally using IndexedDB with no server-side persistence.

## Local Storage Schema

### User Profile
```typescript
interface UserProfile {
  id: string; // UUID
  createdAt: timestamp;
  updatedAt: timestamp;
  
  // Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: date;
  citizenship: "US"; // Currently US only
  
  // Financial Information
  annualIncome: number; // USD
  savingsAmount: number; // USD
  investmentAssets: number; // USD
  hasHealthInsurance: boolean;
  
  // Education
  educationLevel: "high_school" | "bachelor" | "master" | "phd";
  fieldOfStudy: string;
  yearsOfExperience: number;
  
  // Career
  currentOccupation: string;
  occupationCategory: string; // ISCO-08 classification
  yearsInCurrentRole: number;
  
  // Family
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  dependents: number;
  spouseEducation?: string;
  spouseOccupation?: string;
  
  // Immigration Goals
  targetCountries: string[]; // ISO 3166-1 alpha-2 codes (e.g., ["DE", "NL", "FR"])
  immigrationPath: "work_visa" | "permanent_residency" | "citizenship" | "all";
  timelineMonths: number; // Desired timeline
  
  // Language Skills
  languages: {
    language: string; // e.g., "German", "Dutch"
    proficiency: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  }[];
}
```

### Viability Score
```typescript
interface ViabilityScore {
  id: string;
  userId: string;
  countryCode: string;
  immigrationPath: string;
  
  // Component Scores (0-100)
  financialScore: number;
  educationScore: number;
  careerScore: number;
  languageScore: number;
  familyScore: number;
  
  // Overall Score (0-100)
  overallScore: number;
  
  // Risk Factors
  riskFactors: {
    category: string;
    severity: "low" | "medium" | "high";
    description: string;
  }[];
  
  // Contingency Scenarios
  contingencies: {
    scenario: string;
    probability: "low" | "medium" | "high";
    mitigation: string;
  }[];
  
  calculatedAt: timestamp;
}
```

### Country Rules Database
```typescript
interface CountryRules {
  countryCode: string;
  countryName: string;
  
  workVisa: {
    minSalary: number; // EUR
    minEducation: string;
    languageRequirement: string;
    processingTimeWeeks: number;
    validityYears: number;
  };
  
  permanentResidency: {
    yearsAsResident: number;
    languageRequirement: string;
    incomeRequirement: number;
    processingTimeWeeks: number;
  };
  
  citizenship: {
    yearsAsResident: number;
    languageRequirement: string;
    civicKnowledgeTest: boolean;
    processingTimeWeeks: number;
  };
}
```

## Algorithm Definition

### Viability Score Calculation
The viability score is calculated as a weighted average of component scores:

```
overallScore = (
  financialScore * 0.25 +
  educationScore * 0.20 +
  careerScore * 0.30 +
  languageScore * 0.15 +
  familyScore * 0.10
)
```

### Component Scoring Rules
- **Financial Score**: Based on income, savings, and country cost-of-living
- **Education Score**: Based on education level and field relevance
- **Career Score**: Based on occupation demand and salary alignment
- **Language Score**: Based on language proficiency and country requirements
- **Family Score**: Based on family situation and country family policies

### Risk Factor Identification
Risk factors are identified based on:
- Income below country minimum
- Language proficiency below requirement
- Education mismatch with occupation
- Family separation concerns
- Healthcare/insurance gaps

## Data Privacy & Security
- All data stored in IndexedDB (browser local storage)
- No network transmission of user data
- Optional local encryption using Web Crypto API
- User can export/delete all data at any time
- No cookies or tracking mechanisms

