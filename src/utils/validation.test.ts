import { describe, it, expect } from 'vitest';
import {
  validateEmail,
  validatePhoneNumber,
  validateDate,
  validatePositiveNumber,
  validateLanguageProficiency,
  validateOccupationCode,
  validateRequired,
  validateMinLength,
  validateMaxLength,
} from './validation';

describe('Validation Utilities', () => {
  describe('validateRequired', () => {
    it('should return error for empty string', () => {
      expect(validateRequired('', 'Field')).toBe('Field is required');
    });

    it('should return error for null', () => {
      expect(validateRequired(null, 'Field')).toBe('Field is required');
    });

    it('should return error for undefined', () => {
      expect(validateRequired(undefined, 'Field')).toBe('Field is required');
    });

    it('should return empty string for valid value', () => {
      expect(validateRequired('John', 'Name')).toBe('');
    });
  });

  describe('validateEmail', () => {
    it('should accept valid email addresses', () => {
      expect(validateEmail('user@example.com')).toBe('');
      expect(validateEmail('john.doe@company.co.uk')).toBe('');
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid')).not.toBe('');
      expect(validateEmail('user@')).not.toBe('');
      expect(validateEmail('@example.com')).not.toBe('');
    });

    it('should reject empty email', () => {
      expect(validateEmail('')).not.toBe('');
    });
  });

  describe('validatePhoneNumber', () => {
    it('should accept valid phone numbers', () => {
      expect(validatePhoneNumber('+1-555-123-4567')).toBe('');
      expect(validatePhoneNumber('555-123-4567')).toBe('');
      expect(validatePhoneNumber('+33123456789')).toBe('');
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhoneNumber('123')).not.toBe('');
      expect(validatePhoneNumber('abc')).not.toBe('');
    });
  });

  describe('validateDate', () => {
    it('should accept valid dates', () => {
      expect(validateDate('1990-01-15')).toBe('');
      expect(validateDate('2000-12-31')).toBe('');
    });

    it('should reject invalid dates', () => {
      expect(validateDate('invalid')).not.toBe('');
      expect(validateDate('2025-13-01')).not.toBe('');
      expect(validateDate('2025-01-32')).not.toBe('');
    });

    it('should reject future dates', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      const futureDateStr = futureDate.toISOString().split('T')[0];
      expect(validateDate(futureDateStr)).not.toBe('');
    });

    it('should reject dates for people under 18', () => {
      const recentDate = new Date();
      recentDate.setFullYear(recentDate.getFullYear() - 17);
      const recentDateStr = recentDate.toISOString().split('T')[0];
      expect(validateDate(recentDateStr)).not.toBe('');
    });
  });

  describe('validatePositiveNumber', () => {
    it('should accept positive numbers', () => {
      expect(validatePositiveNumber(100, 'Amount')).toBe('');
      expect(validatePositiveNumber(0.01, 'Amount')).toBe('');
    });

    it('should reject negative numbers', () => {
      expect(validatePositiveNumber(-100, 'Amount')).not.toBe('');
    });

    it('should reject zero', () => {
      expect(validatePositiveNumber(0, 'Amount')).not.toBe('');
    });

    it('should reject non-numbers', () => {
      expect(validatePositiveNumber(NaN, 'Amount')).not.toBe('');
    });
  });

  describe('validateLanguageProficiency', () => {
    it('should accept valid proficiency levels', () => {
      expect(validateLanguageProficiency('A1')).toBe('');
      expect(validateLanguageProficiency('B2')).toBe('');
      expect(validateLanguageProficiency('C2')).toBe('');
    });

    it('should reject invalid proficiency levels', () => {
      expect(validateLanguageProficiency('D1')).not.toBe('');
      expect(validateLanguageProficiency('invalid')).not.toBe('');
    });
  });

  describe('validateOccupationCode', () => {
    it('should accept valid occupation codes', () => {
      expect(validateOccupationCode('1234')).toBe('');
      expect(validateOccupationCode('0000')).toBe('');
    });

    it('should reject invalid occupation codes', () => {
      expect(validateOccupationCode('123')).not.toBe('');
      expect(validateOccupationCode('12345')).not.toBe('');
      expect(validateOccupationCode('abcd')).not.toBe('');
    });
  });

  describe('validateMinLength', () => {
    it('should accept strings meeting minimum length', () => {
      expect(validateMinLength('hello', 3, 'Text')).toBe('');
      expect(validateMinLength('hello', 5, 'Text')).toBe('');
    });

    it('should reject strings below minimum length', () => {
      expect(validateMinLength('hi', 3, 'Text')).not.toBe('');
    });
  });

  describe('validateMaxLength', () => {
    it('should accept strings within maximum length', () => {
      expect(validateMaxLength('hello', 10, 'Text')).toBe('');
      expect(validateMaxLength('hello', 5, 'Text')).toBe('');
    });

    it('should reject strings exceeding maximum length', () => {
      expect(validateMaxLength('hello world', 5, 'Text')).not.toBe('');
    });
  });
});

