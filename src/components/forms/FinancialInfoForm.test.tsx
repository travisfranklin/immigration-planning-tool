import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FinancialInfoForm } from './FinancialInfoForm';
import type { UserProfile } from '../../types/user';

describe('FinancialInfoForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    annualIncome: 0,
    savingsAmount: 0,
    employmentStatus: 'employed',
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<FinancialInfoForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/annual income/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/savings amount/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/employment status/i)).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      annualIncome: 'Annual income is required',
      savingsAmount: 'Savings amount is required',
    };

    render(<FinancialInfoForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('Annual income is required')).toBeInTheDocument();
    expect(screen.getByText('Savings amount is required')).toBeInTheDocument();
  });

  it('should call onChange when annual income is updated', async () => {
    const user = userEvent.setup();
    render(<FinancialInfoForm {...getDefaultProps()} />);

    const incomeInput = screen.getByLabelText(/annual income/i);
    await user.type(incomeInput, '50000');

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('annualIncome', expect.any(Number));
  });

  it('should call onChange when savings amount is updated', async () => {
    const user = userEvent.setup();
    render(<FinancialInfoForm {...getDefaultProps()} />);

    const savingsInput = screen.getByLabelText(/savings amount/i);
    await user.type(savingsInput, '100000');

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('savingsAmount', expect.any(Number));
  });

  it('should call onChange when employment status is updated', async () => {
    const user = userEvent.setup();
    render(<FinancialInfoForm {...getDefaultProps()} />);

    const statusSelect = screen.getByLabelText(/employment status/i);
    await user.selectOptions(statusSelect, 'self_employed');

    expect(mockOnChange).toHaveBeenCalledWith('employmentStatus', 'self_employed');
  });

  it('should call onBlur when field loses focus', async () => {
    const user = userEvent.setup();
    render(<FinancialInfoForm {...getDefaultProps()} />);

    const incomeInput = screen.getByLabelText(/annual income/i);
    await user.click(incomeInput);
    await user.tab();

    expect(mockOnBlur).toHaveBeenCalledWith('annualIncome');
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      annualIncome: 75000,
      savingsAmount: 250000,
      employmentStatus: 'employed',
    };

    render(<FinancialInfoForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('75000')).toBeInTheDocument();
    expect(screen.getByDisplayValue('250000')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<FinancialInfoForm {...getDefaultProps()} />);

    const incomeInput = screen.getByLabelText(/annual income/i);
    expect(incomeInput).toHaveAttribute('type', 'number');
    expect(incomeInput).toHaveAttribute('required');
  });

  it('should display error styling when field has error', () => {
    const errors = {
      annualIncome: 'Annual income is required',
    };

    render(<FinancialInfoForm {...getDefaultProps()} errors={errors} />);

    const incomeInput = screen.getByLabelText(/annual income/i);
    expect(incomeInput).toHaveClass('border-danger-600');
  });
});

