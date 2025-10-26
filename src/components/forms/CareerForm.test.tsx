import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CareerForm } from './CareerForm';
import type { UserProfile } from '../../types/user';

describe('CareerForm', () => {
  let mockOnChange: ReturnType<typeof vi.fn>;
  let mockOnBlur: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
    mockOnBlur = vi.fn();
  });

  const mockData: Partial<UserProfile> = {
    currentOccupation: '',
    occupationCode: '',
  };

  const getDefaultProps = () => ({
    data: mockData,
    errors: {},
    onChange: mockOnChange,
    onBlur: mockOnBlur,
  });

  it('should render all form fields', () => {
    render(<CareerForm {...getDefaultProps()} />);

    expect(screen.getByLabelText(/occupation code/i)).toBeInTheDocument();
  });

  it('should display error messages when provided', () => {
    const errors = {
      occupationCode: 'Occupation code is required',
    };

    render(<CareerForm {...getDefaultProps()} errors={errors} />);

    expect(screen.getByText('Occupation code is required')).toBeInTheDocument();
  });

  it('should call onChange when occupation code is updated', async () => {
    const user = userEvent.setup();
    render(<CareerForm {...getDefaultProps()} />);

    const codeInput = screen.getByLabelText(/occupation code/i);
    await user.click(codeInput);

    // Type to search for an occupation code
    await user.type(codeInput, '2512');

    // Click on the matching option from the dropdown
    const option = await screen.findByText(/2512 - Software Developers/i);
    await user.click(option);

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith('occupationCode', '2512');
  });

  it('should display pre-filled data', () => {
    const filledData: Partial<UserProfile> = {
      currentOccupation: 'Software Engineer',
      occupationCode: '2512',
    };

    render(<CareerForm {...getDefaultProps()} data={filledData} />);
    // Combobox displays the code value
    expect(screen.getByDisplayValue('2512')).toBeInTheDocument();
  });
});

