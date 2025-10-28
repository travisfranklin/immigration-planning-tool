import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FamilyForm } from './FamilyForm';
import type { UserProfile } from '../../types/user';

describe('FamilyForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    maritalStatus: 'single',
    familyMembers: [],
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/marital status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of dependents/i)).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      maritalStatus: 'Marital status is required',
    };

    render(<FamilyForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('Marital status is required')).toBeInTheDocument();
  });

  it('should call onChange when marital status is updated', async () => {
    const user = userEvent.setup();
    render(<FamilyForm {...getDefaultProps()} />);

    const statusSelect = screen.getByLabelText(/marital status/i);
    await user.selectOptions(statusSelect, 'married');

    expect(mockOnChange).toHaveBeenCalledWith('maritalStatus', 'married');
  });

  it('should display number of dependents as read-only', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    const dependentsInput = screen.getByLabelText(/number of dependents/i) as HTMLInputElement;
    expect(dependentsInput.readOnly).toBe(true);
    expect(dependentsInput.value).toBe('0');
  });

  it('should display add family member button', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    expect(screen.getByRole('button', { name: /add family member/i })).toBeInTheDocument();
  });

  it('should add a family member when button is clicked', async () => {
    const user = userEvent.setup();
    render(<FamilyForm {...getDefaultProps()} />);

    const addButton = screen.getByRole('button', { name: /add family member/i });
    await user.click(addButton);

    expect(mockOnChange).toHaveBeenCalledWith('familyMembers', expect.arrayContaining([
      expect.objectContaining({
        name: '',
        relationship: 'spouse',
        citizenship: '',
      }),
    ]));
  });

  it('should display family member form fields when members exist', () => {
    const filledData: Partial<UserProfile> = {
      maritalStatus: 'married',
      familyMembers: [{ name: 'John Smith', relationship: 'spouse', citizenship: 'US' }],
    };

    render(<FamilyForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('John Smith')).toBeInTheDocument();
    // Citizenship is now a select, so we check for the selected option
    const citizenshipSelect = screen.getAllByLabelText(/citizenship/i)[0] as HTMLSelectElement;
    expect(citizenshipSelect.value).toBe('US');
    expect(screen.getByText('Family Member 1')).toBeInTheDocument();
  });

  it('should remove a family member when remove button is clicked', async () => {
    const user = userEvent.setup();
    const filledData: Partial<UserProfile> = {
      maritalStatus: 'married',
      familyMembers: [{ name: 'Spouse', relationship: 'spouse', citizenship: 'US' }],
    };

    render(<FamilyForm {...getDefaultProps()} data={filledData} />);

    const removeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(removeButton);

    expect(mockOnChange).toHaveBeenCalledWith('familyMembers', []);
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      maritalStatus: 'married',
      familyMembers: [{ name: 'Spouse', relationship: 'spouse', citizenship: 'US' }],
    };

    render(<FamilyForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    const statusSelect = screen.getByLabelText(/marital status/i);
    expect(statusSelect).toHaveAttribute('required');
  });

  it('should display marital status error styling when field has error', () => {
    const errors = {
      maritalStatus: 'Marital status is required',
    };

    render(<FamilyForm {...getDefaultProps()} errors={errors} />);

    const statusSelect = screen.getByLabelText(/marital status/i);
    expect(statusSelect).toHaveClass('border-danger');
  });

  it('should have marital status options', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    const statusSelect = screen.getByLabelText(/marital status/i);
    const options = statusSelect.querySelectorAll('option');

    expect(options.length).toBeGreaterThan(0);
    expect(screen.getByText('Single')).toBeInTheDocument();
    expect(screen.getByText('Married')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes for dependents field', () => {
    render(<FamilyForm {...getDefaultProps()} />);

    const dependentsInput = screen.getByLabelText(/number of dependents/i) as HTMLInputElement;
    expect(dependentsInput).toHaveAttribute('type', 'number');
    expect(dependentsInput.readOnly).toBe(true);
  });
});

