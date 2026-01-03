import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CountrySelectionForm } from './CountrySelectionForm';
import type { UserProfile } from '../../types/user';

describe('CountrySelectionForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    targetCountries: [],
    immigrationPath: 'work_visa',
    timelineMonths: 12,
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<CountrySelectionForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/immigration path/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/timeline/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add country/i })).toBeInTheDocument();
  });

  it('should display add country button', () => {
    render(<CountrySelectionForm {...getDefaultProps()} />);

    expect(screen.getByRole('button', { name: /add country/i })).toBeInTheDocument();
  });

  it('should add a country when button is clicked', async () => {
    const user = userEvent.setup();
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const addButton = screen.getByRole('button', { name: /add country/i });
    await user.click(addButton);

    expect(mockOnChange).toHaveBeenCalledWith('targetCountries', expect.arrayContaining([
      expect.objectContaining({ countryCode: '', hasJobOffer: false })
    ]));
  });

  it('should remove a country when remove button is clicked', async () => {
    const user = userEvent.setup();
    const filledData: Partial<UserProfile> = {
      ...mockData,
      targetCountries: [{ countryCode: 'DE', hasJobOffer: false }],
    };

    render(<CountrySelectionForm {...getDefaultProps()} data={filledData} />);

    const removeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(removeButton);

    expect(mockOnChange).toHaveBeenCalledWith('targetCountries', []);
  });

  it('should display error messages when provided', () => {
    const errors = {
      immigrationPath: 'Immigration path is required',
    };

    render(<CountrySelectionForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('Immigration path is required')).toBeInTheDocument();
  });

  it('should call onChange when immigration path is updated', async () => {
    const user = userEvent.setup();
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const pathSelect = screen.getByLabelText(/immigration path/i);
    await user.selectOptions(pathSelect, 'permanent_residency');

    expect(mockOnChange).toHaveBeenCalledWith('immigrationPath', 'permanent_residency');
  });

  it('should call onChange when timeline is updated', async () => {
    const user = userEvent.setup();
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const timelineInput = screen.getByLabelText(/timeline/i);
    await user.type(timelineInput, '24');

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('timelineMonths', expect.any(Number));
  });

  it('should call onChange when job offer checkbox is toggled for a country', async () => {
    const user = userEvent.setup();
    const filledData: Partial<UserProfile> = {
      ...mockData,
      targetCountries: [{ countryCode: 'DE', hasJobOffer: false }],
    };
    render(<CountrySelectionForm {...getDefaultProps()} data={filledData} />);

    const jobOfferCheckbox = screen.getByLabelText(/job offer/i);
    await user.click(jobOfferCheckbox);

    expect(mockOnChange).toHaveBeenCalledWith('targetCountries', [
      { countryCode: 'DE', hasJobOffer: true }
    ]);
  });

  it('should call onBlur when field loses focus', async () => {
    const user = userEvent.setup();
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const timelineInput = screen.getByLabelText(/timeline/i);
    await user.click(timelineInput);
    await user.tab();

    expect(mockOnBlur).toHaveBeenCalledWith('timelineMonths');
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      immigrationPath: 'work_visa',
      timelineMonths: 24,
      targetCountries: [{ countryCode: 'DE', hasJobOffer: true }],
    };

    render(<CountrySelectionForm {...getDefaultProps()} data={filledData} />);

    expect(screen.getByDisplayValue('24')).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const timelineInput = screen.getByLabelText(/timeline/i);
    expect(timelineInput).toHaveAttribute('type', 'number');
    expect(timelineInput).toHaveAttribute('required');
  });

  it('should display error styling when field has error', () => {
    const errors = {
      timelineMonths: 'Timeline is required',
    };

    render(<CountrySelectionForm {...getDefaultProps()} errors={errors} />);

    const timelineInput = screen.getByLabelText(/timeline/i);
    expect(timelineInput).toHaveClass('border-danger');
  });

  it('should have immigration path options', () => {
    render(<CountrySelectionForm {...getDefaultProps()} />);

    const pathSelect = screen.getByLabelText(/immigration path/i);
    const options = pathSelect.querySelectorAll('option');

    expect(options.length).toBeGreaterThan(0);
    expect(screen.getByText('Work Visa')).toBeInTheDocument();
    expect(screen.getByText('Permanent Residency')).toBeInTheDocument();
  });
});

