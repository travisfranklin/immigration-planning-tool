/**
 * Validation Utilities
 * Provides validation functions for form fields
 */

/**
 * Validates that a field is not empty
 */
export function validateRequired(value: unknown, fieldName: string): string {
  if (value === null || value === undefined || value === '') {
    return `${fieldName} is required`;
  }
  return '';
}

/**
 * Validates email format
 */
export function validateEmail(email: string): string {
  if (!email) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
}

/**
 * Validates phone number format
 */
export function validatePhoneNumber(phone: string): string {
  if (!phone) {
    return 'Phone number is required';
  }
  // Accept various phone formats: +1-555-123-4567, 555-123-4567, +33123456789
  const phoneRegex = /^[\d\s\-+()]{10,}$/;
  if (!phoneRegex.test(phone)) {
    return 'Please enter a valid phone number';
  }
  return '';
}

/**
 * Validates date format and age (must be 18+)
 */
export function validateDate(dateStr: string): string {
  if (!dateStr) {
    return 'Date is required';
  }

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return 'Please enter a valid date';
  }

  // Check if date is in the future
  if (date > new Date()) {
    return 'Date cannot be in the future';
  }

  // Check if person is at least 18 years old
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  const dayDiff = today.getDate() - date.getDate();

  if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
    return 'You must be at least 18 years old';
  }

  return '';
}

/**
 * Validates that a number is positive
 */
export function validatePositiveNumber(value: number, fieldName: string): string {
  if (isNaN(value)) {
    return `${fieldName} must be a valid number`;
  }
  if (value <= 0) {
    return `${fieldName} must be greater than 0`;
  }
  return '';
}

/**
 * Validates language proficiency level (CEFR scale: A1-C2)
 */
export function validateLanguageProficiency(level: string): string {
  const validLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  if (!validLevels.includes(level)) {
    return 'Please select a valid proficiency level';
  }
  return '';
}

/**
 * Validates occupation code (4-digit code)
 */
export function validateOccupationCode(code: string): string {
  if (!code) {
    return 'Occupation code is required';
  }
  if (!/^\d{4}$/.test(code)) {
    return 'Occupation code must be 4 digits';
  }
  return '';
}

/**
 * Validates minimum string length
 */
export function validateMinLength(value: string, minLength: number, fieldName: string): string {
  if (value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters`;
  }
  return '';
}

/**
 * Validates maximum string length
 */
export function validateMaxLength(value: string, maxLength: number, fieldName: string): string {
  if (value.length > maxLength) {
    return `${fieldName} must not exceed ${maxLength} characters`;
  }
  return '';
}

/**
 * Validates a form step
 */
export function validateFormStep(
  step: number,
  data: Record<string, unknown>
): Record<string, string> {
  const errors: Record<string, string> = {};

  switch (step) {
    case 1: // Personal Info
      errors.firstName = validateRequired(data.firstName, 'First name');
      errors.lastName = validateRequired(data.lastName, 'Last name');
      errors.dateOfBirth = validateDate(data.dateOfBirth as string);
      errors.citizenship = validateRequired(data.citizenship, 'Citizenship');
      break;

    case 2: // Financial Info
      errors.annualIncome = validatePositiveNumber(data.annualIncome as number, 'Annual income');
      errors.savingsAmount = validatePositiveNumber(data.savingsAmount as number, 'Savings amount');
      break;

    case 3: // Education
      errors.educationLevel = validateRequired(data.educationLevel, 'Education level');
      errors.yearsOfExperience = validatePositiveNumber(data.yearsOfExperience as number, 'Years of experience');
      break;

    case 4: // Career
      errors.currentOccupation = validateRequired(data.currentOccupation, 'Current occupation');
      break;

    case 5: // Family
      errors.maritalStatus = validateRequired(data.maritalStatus, 'Marital status');
      break;

    case 6: // Language
      if (data.languages && Array.isArray(data.languages) && data.languages.length > 0) {
        data.languages.forEach((lang: unknown, index: number) => {
          if (lang && typeof lang === 'object' && 'proficiency' in lang) {
            const profError = validateLanguageProficiency(lang.proficiency as string);
            if (profError) {
              errors[`languages.${index}.proficiency`] = profError;
            }
          }
        });
      }
      break;

    case 7: // Country Selection
      errors.targetCountries = validateRequired(data.targetCountries, 'Target countries');
      errors.immigrationPath = validateRequired(data.immigrationPath, 'Immigration path');
      break;
  }

  // Remove empty error messages
  return Object.fromEntries(
    Object.entries(errors).filter(([, value]) => value !== '')
  );
}

