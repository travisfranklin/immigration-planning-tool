/**
 * Tests for Combobox Component
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { Combobox } from './Combobox';

describe('Combobox', () => {
  const mockOptions = [
    { value: 'Computer Science', label: 'Computer Science', category: 'STEM' },
    { value: 'Engineering', label: 'Engineering', category: 'STEM' },
    { value: 'Business', label: 'Business', category: 'Business' },
    { value: 'Medicine', label: 'Medicine', category: 'Healthcare' },
    { value: 'Law', label: 'Law', category: 'Legal' },
  ];

  let mockOnChange: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnChange = vi.fn();
  });

  describe('Rendering', () => {
    it('should render with label', () => {
      render(
        <Combobox
          label="Field of Study"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      expect(screen.getByLabelText(/field of study/i)).toBeInTheDocument();
    });

    it('should render with placeholder', () => {
      render(
        <Combobox
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          placeholder="Select or type..."
        />
      );

      expect(screen.getByPlaceholderText('Select or type...')).toBeInTheDocument();
    });

    it('should render with error message', () => {
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          error="This field is required"
        />
      );

      expect(screen.getByText('This field is required')).toBeInTheDocument();
    });

    it('should render with helper text', () => {
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          helperText="Select from the list"
        />
      );

      expect(screen.getByText('Select from the list')).toBeInTheDocument();
    });

    it('should show required indicator when required', () => {
      render(
        <Combobox
          label="Field of Study"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
          required
        />
      );

      expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('should display current value', () => {
      render(
        <Combobox
          label="Field"
          value="Computer Science"
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      expect(screen.getByDisplayValue('Computer Science')).toBeInTheDocument();
    });
  });

  describe('Dropdown Behavior', () => {
    it('should open dropdown when input is focused', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.click(input);

      // Check if options are visible
      expect(screen.getByText('Computer Science')).toBeInTheDocument();
      expect(screen.getByText('Engineering')).toBeInTheDocument();
    });

    it('should close dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Combobox
            label="Field"
            value=""
            onChange={mockOnChange}
            options={mockOptions}
          />
          <button>Outside</button>
        </div>
      );

      const input = screen.getByLabelText(/field/i);
      await user.click(input);

      // Dropdown should be open
      expect(screen.getByText('Computer Science')).toBeInTheDocument();

      // Click outside
      const outsideButton = screen.getByText('Outside');
      fireEvent.mouseDown(outsideButton);

      // Wait for dropdown to close
      await waitFor(() => {
        expect(screen.queryByText('Computer Science')).not.toBeInTheDocument();
      });
    });

    it('should close dropdown when pressing Escape', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.click(input);

      // Dropdown should be open
      expect(screen.getByText('Computer Science')).toBeInTheDocument();

      // Press Escape
      await user.keyboard('{Escape}');

      // Dropdown should be closed
      await waitFor(() => {
        expect(screen.queryByText('Computer Science')).not.toBeInTheDocument();
      });
    });
  });

  describe('Filtering', () => {
    it('should filter options based on input', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.type(input, 'comp');

      // Should show Computer Science
      expect(screen.getByText('Computer Science')).toBeInTheDocument();
      
      // Should not show unrelated options
      expect(screen.queryByText('Medicine')).not.toBeInTheDocument();
      expect(screen.queryByText('Law')).not.toBeInTheDocument();
    });

    it('should filter by category', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.type(input, 'stem');

      // Should show STEM options
      expect(screen.getByText('Computer Science')).toBeInTheDocument();
      expect(screen.getByText('Engineering')).toBeInTheDocument();
    });

    it('should show "no matching options" when no results', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.type(input, 'xyz123');

      expect(screen.getByText('No matching options found')).toBeInTheDocument();
    });
  });

  describe('Selection', () => {
    it('should call onChange when option is clicked', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.click(input);

      const option = screen.getByText('Computer Science');
      await user.click(option);

      expect(mockOnChange).toHaveBeenCalledWith('Computer Science');
    });

    it('should display selected value after clicking option with search filter', async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i) as HTMLInputElement;

      // Type search fragment
      await user.type(input, 'eng');
      expect(input.value).toBe('eng');

      // Click the Engineering option
      const option = screen.getByText('Engineering');
      await user.click(option);

      // Verify onChange was called with the full value
      expect(mockOnChange).toHaveBeenCalledWith('Engineering');

      // Simulate parent updating the value prop
      rerender(
        <Combobox
          label="Field"
          value="Engineering"
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      // The input should now show the selected value, not the search fragment
      await waitFor(() => {
        expect(input.value).toBe('Engineering');
      });
    });

    it('should show selected value immediately after clicking option', async () => {
      const user = userEvent.setup();

      // Create a wrapper component that manages the value state
      function ComboboxWrapper() {
        const [value, setValue] = useState('');
        return (
          <Combobox
            label="Field"
            value={value}
            onChange={setValue}
            options={mockOptions}
          />
        );
      }

      render(<ComboboxWrapper />);

      const input = screen.getByLabelText(/field/i) as HTMLInputElement;

      // Type search fragment
      await user.type(input, 'eng');
      expect(input.value).toBe('eng');

      // Click the Engineering option
      const option = screen.getByText('Engineering');
      await user.click(option);

      // The input should immediately show the selected value
      await waitFor(() => {
        expect(input.value).toBe('Engineering');
      });

      // Dropdown should be closed
      expect(screen.queryByText('Computer Science')).not.toBeInTheDocument();
    });

    it('should not revert to search fragment after clicking option', async () => {
      const user = userEvent.setup();

      // Create a wrapper component that manages the value state
      function ComboboxWrapper() {
        const [value, setValue] = useState('');
        return (
          <Combobox
            label="Field"
            value={value}
            onChange={setValue}
            options={mockOptions}
          />
        );
      }

      render(<ComboboxWrapper />);

      const input = screen.getByLabelText(/field/i) as HTMLInputElement;

      // Type search fragment
      await user.type(input, 'eng');
      expect(input.value).toBe('eng');

      // Click the Engineering option
      const option = screen.getByText('Engineering');
      await user.click(option);

      // Wait for the blur handler to complete (200ms delay)
      await new Promise(resolve => setTimeout(resolve, 250));

      // The input should still show the selected value, not the search fragment
      expect(input.value).toBe('Engineering');

      // Dropdown should be closed
      expect(screen.queryByText('Computer Science')).not.toBeInTheDocument();
    });

    it('should allow custom value entry', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.type(input, 'Custom Field');

      // Should show custom option
      expect(screen.getByText(/Use custom: "Custom Field"/i)).toBeInTheDocument();

      // Click the custom option
      const customOption = screen.getByText(/Use custom: "Custom Field"/i);
      await user.click(customOption);

      expect(mockOnChange).toHaveBeenCalledWith('Custom Field');
    });

    it('should call onChange when pressing Enter', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      await user.type(input, 'My Custom Value{Enter}');

      expect(mockOnChange).toHaveBeenCalledWith('My Custom Value');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      expect(input).toHaveAttribute('aria-expanded', 'false');
      expect(input).toHaveAttribute('aria-haspopup', 'listbox');
      expect(input).toHaveAttribute('aria-controls');
    });

    it('should update aria-expanded when opened', async () => {
      const user = userEvent.setup();
      render(
        <Combobox
          label="Field"
          value=""
          onChange={mockOnChange}
          options={mockOptions}
        />
      );

      const input = screen.getByLabelText(/field/i);
      expect(input).toHaveAttribute('aria-expanded', 'false');

      await user.click(input);

      expect(input).toHaveAttribute('aria-expanded', 'true');
    });
  });
});

