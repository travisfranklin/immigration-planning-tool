import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PersonalInfoForm } from './PersonalInfoForm';
import type { UserProfile } from '../../types/user';

describe('PersonalInfoForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    citizenship: 'US',
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<PersonalInfoForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/citizenship/i)).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      firstName: 'First name is required',
      lastName: 'Last name is required',
    };

    render(<PersonalInfoForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
  });

  it('should call onChange when first name is updated', async () => {
    const user = userEvent.setup();
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    await user.type(firstNameInput, 'John');

    // onChange is called for each character typed
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('firstName', expect.any(String));
  });

  it('should call onChange when last name is updated', async () => {
    const user = userEvent.setup();
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const lastNameInput = screen.getByLabelText(/last name/i);
    await user.type(lastNameInput, 'Doe');

    // onChange is called for each character typed
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('lastName', expect.any(String));
  });

  it('should call onChange when date of birth is updated', async () => {
    const user = userEvent.setup();
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const dateInput = screen.getByLabelText(/date of birth/i);
    await user.type(dateInput, '1990-01-15');

    expect(mockOnChange).toHaveBeenCalledWith('dateOfBirth', '1990-01-15');
  });

  it('should call onChange when citizenship is updated', async () => {
    const user = userEvent.setup();
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const citizenshipSelect = screen.getByLabelText(/citizenship/i);
    await user.selectOptions(citizenshipSelect, 'US');

    expect(mockOnChange).toHaveBeenCalledWith('citizenship', 'US');
  });

  it('should call onBlur when field loses focus', async () => {
    const user = userEvent.setup();
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    await user.click(firstNameInput);
    await user.tab();

    expect(mockOnBlur).toHaveBeenCalledWith('firstName');
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-15',
      citizenship: 'US',
    };

    render(<PersonalInfoForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('John')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1990-01-15')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<PersonalInfoForm {...getDefaultProps()} />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(firstNameInput).toHaveAttribute('required');
  });

  it('should display error styling when field has error', () => {
    const errors = {
      firstName: 'First name is required',
    };

    render(<PersonalInfoForm {...getDefaultProps()} errors={errors} />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput).toHaveClass('border-danger');
  });
});

