import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EducationForm } from './EducationForm';
import type { UserProfile } from '../../types/user';

describe('EducationForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    educationLevel: 'bachelor',
    fieldOfStudy: '',
    yearsOfExperience: 0,
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<EducationForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/education level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/field of study/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/years of experience/i)).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      educationLevel: 'Education level is required',
      fieldOfStudy: 'Field of study is required',
    };

    render(<EducationForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('Education level is required')).toBeInTheDocument();
    expect(screen.getByText('Field of study is required')).toBeInTheDocument();
  });

  it('should call onChange when education level is updated', async () => {
    const user = userEvent.setup();
    render(<EducationForm {...getDefaultProps()} />);

    const levelSelect = screen.getByLabelText(/education level/i);
    await user.selectOptions(levelSelect, 'master');

    expect(mockOnChange).toHaveBeenCalledWith('educationLevel', 'master');
  });

  it('should call onChange when field of study is updated', async () => {
    const user = userEvent.setup();
    render(<EducationForm {...getDefaultProps()} />);

    const fieldInput = screen.getByLabelText(/field of study/i);
    await user.type(fieldInput, 'Computer Science');

    // Click outside to trigger onChange (Combobox behavior)
    await user.click(document.body);

    // Wait for the delayed onChange to fire
    await new Promise(resolve => setTimeout(resolve, 250));

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('fieldOfStudy', expect.any(String));
  });

  it('should call onChange when years of experience is updated', async () => {
    const user = userEvent.setup();
    render(<EducationForm {...getDefaultProps()} />);

    const yearsInput = screen.getByLabelText(/years of experience/i);
    await user.type(yearsInput, '5');

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('yearsOfExperience', expect.any(Number));
  });

  it('should call onBlur when field loses focus', async () => {
    const user = userEvent.setup();
    render(<EducationForm {...getDefaultProps()} />);

    const fieldInput = screen.getByLabelText(/field of study/i);
    await user.click(fieldInput);
    await user.tab();

    // Wait for the delayed onBlur to fire (Combobox has 200ms delay)
    await new Promise(resolve => setTimeout(resolve, 250));

    expect(mockOnBlur).toHaveBeenCalledWith('fieldOfStudy');
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      educationLevel: 'master',
      fieldOfStudy: 'Computer Science',
      yearsOfExperience: 5,
    };

    render(<EducationForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('Computer Science')).toBeInTheDocument();
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<EducationForm {...getDefaultProps()} />);

    const fieldInput = screen.getByLabelText(/field of study/i);
    expect(fieldInput).toHaveAttribute('type', 'text');
    // Combobox has aria attributes instead of required attribute
    expect(fieldInput).toHaveAttribute('aria-expanded');
    expect(fieldInput).toHaveAttribute('aria-haspopup', 'listbox');
  });

  it('should display error styling when field has error', () => {
    const errors = {
      fieldOfStudy: 'Field of study is required',
    };

    render(<EducationForm {...getDefaultProps()} errors={errors} />);

    const fieldInput = screen.getByLabelText(/field of study/i);
    expect(fieldInput).toHaveClass('border-danger');
  });

  it('should have education level options', () => {
    render(<EducationForm {...getDefaultProps()} />);

    const levelSelect = screen.getByLabelText(/education level/i);
    const options = levelSelect.querySelectorAll('option');

    expect(options.length).toBeGreaterThan(0);
    expect(screen.getByText('Bachelor')).toBeInTheDocument();
    expect(screen.getByText('Master')).toBeInTheDocument();
  });
});

