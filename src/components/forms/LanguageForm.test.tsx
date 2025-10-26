import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageForm } from './LanguageForm';
import type { UserProfile } from '../../types/user';

describe('LanguageForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    languages: [{ language: 'English', proficiency: 'C1' }],
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render language form fields', () => {
    render(<LanguageForm {...getDefaultProps()} />);

    expect(screen.getByDisplayValue('English')).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      languages: 'At least one language is required',
    };

    render(<LanguageForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('At least one language is required')).toBeInTheDocument();
  });

  it('should display add language button', () => {
    render(<LanguageForm {...getDefaultProps()} data={{ languages: [] }} />);

    expect(screen.getByRole('button', { name: /add language/i })).toBeInTheDocument();
  });

  it('should add a language when button is clicked', async () => {
    const user = userEvent.setup();
    render(<LanguageForm {...getDefaultProps()} data={{ languages: [] }} />);

    const addButton = screen.getByRole('button', { name: /add language/i });
    await user.click(addButton);

    expect(mockOnChange).toHaveBeenCalledWith('languages', expect.arrayContaining([
      expect.objectContaining({
        language: '',
        proficiency: 'B1',
      }),
    ]));
  });

  it('should display pre-filled language data', () => {
    const filledData: Partial<UserProfile> = {
      languages: [
        { language: 'English', proficiency: 'C1' },
        { language: 'German', proficiency: 'B2' },
      ],
    };

    render(<LanguageForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('English')).toBeInTheDocument();
    expect(screen.getByDisplayValue('German')).toBeInTheDocument();
  });

  it('should remove a language when remove button is clicked', async () => {
    const user = userEvent.setup();
    const filledData: Partial<UserProfile> = {
      languages: [{ language: 'English', proficiency: 'C1' }],
    };

    render(<LanguageForm {...getDefaultProps()} data={filledData} />);

    const removeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(removeButton);

    expect(mockOnChange).toHaveBeenCalledWith('languages', []);
  });

  it('should display multiple languages', () => {
    const filledData: Partial<UserProfile> = {
      languages: [
        { language: 'English', proficiency: 'C1' },
        { language: 'German', proficiency: 'B2' },
        { language: 'French', proficiency: 'B1' },
      ],
    };

    render(<LanguageForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('English')).toBeInTheDocument();
    expect(screen.getByDisplayValue('German')).toBeInTheDocument();
    expect(screen.getByDisplayValue('French')).toBeInTheDocument();
  });

  it('should display CEFR scale information', () => {
    render(<LanguageForm {...getDefaultProps()} />);

    expect(screen.getByText(/CEFR scale/i)).toBeInTheDocument();
  });

  it('should display language information text', () => {
    render(<LanguageForm {...getDefaultProps()} />);

    expect(screen.getByText(/language proficiency is crucial/i)).toBeInTheDocument();
  });
});

