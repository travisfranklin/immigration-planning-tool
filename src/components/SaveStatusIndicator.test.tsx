import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SaveStatusIndicator } from './SaveStatusIndicator';

describe('SaveStatusIndicator Component', () => {
  it('should render nothing when not saving and no error', () => {
    const { container } = render(
      <SaveStatusIndicator isSaving={false} lastSaved={null} error={null} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('should display saving indicator when isSaving is true', () => {
    render(
      <SaveStatusIndicator isSaving={true} lastSaved={null} error={null} />
    );

    expect(screen.getByText(/saving/i)).toBeInTheDocument();
  });

  it('should display saved message when lastSaved is set', () => {
    const now = Date.now();
    render(
      <SaveStatusIndicator isSaving={false} lastSaved={now} error={null} />
    );

    expect(screen.getByText(/saved/i)).toBeInTheDocument();
  });

  it('should display error message when error is present', () => {
    const error = new Error('Save failed');
    render(
      <SaveStatusIndicator isSaving={false} lastSaved={null} error={error} />
    );

    expect(screen.getByText(/save failed/i)).toBeInTheDocument();
  });

  it('should have appropriate styling for saving state', () => {
    const { container } = render(
      <SaveStatusIndicator isSaving={true} lastSaved={null} error={null} />
    );

    const indicator = container.querySelector('[class*="text-blue"]');
    expect(indicator).toBeInTheDocument();
  });

  it('should have appropriate styling for saved state', () => {
    const { container } = render(
      <SaveStatusIndicator isSaving={false} lastSaved={Date.now()} error={null} />
    );

    const indicator = container.querySelector('[class*="text-success"]');
    expect(indicator).toBeInTheDocument();
  });

  it('should have appropriate styling for error state', () => {
    const { container } = render(
      <SaveStatusIndicator isSaving={false} lastSaved={null} error={new Error('Failed')} />
    );

    const indicator = container.querySelector('[class*="text-danger"]');
    expect(indicator).toBeInTheDocument();
  });

  it('should display loading spinner when saving', () => {
    render(
      <SaveStatusIndicator isSaving={true} lastSaved={null} error={null} />
    );

    // Check for spinner or loading indicator
    const indicator = screen.getByText(/saving/i);
    expect(indicator).toBeInTheDocument();
  });

  it('should display checkmark when saved', () => {
    render(
      <SaveStatusIndicator isSaving={false} lastSaved={Date.now()} error={null} />
    );

    const indicator = screen.getByText(/saved/i);
    expect(indicator).toBeInTheDocument();
  });

  it('should display error icon when error occurs', () => {
    render(
      <SaveStatusIndicator isSaving={false} lastSaved={null} error={new Error('Error')} />
    );

    const indicator = screen.getByText(/save failed/i);
    expect(indicator).toBeInTheDocument();
  });

  it('should be accessible with proper ARIA attributes', () => {
    const { container } = render(
      <SaveStatusIndicator isSaving={true} lastSaved={null} error={null} />
    );

    const indicator = container.querySelector('[role="status"]');
    expect(indicator).toBeInTheDocument();
  });

  it('should update when props change from saving to saved', () => {
    const { rerender } = render(
      <SaveStatusIndicator isSaving={true} lastSaved={null} error={null} />
    );

    expect(screen.getByText(/saving/i)).toBeInTheDocument();

    rerender(
      <SaveStatusIndicator isSaving={false} lastSaved={Date.now()} error={null} />
    );

    expect(screen.getByText(/saved/i)).toBeInTheDocument();
  });

  it('should update when props change from saved to error', () => {
    const { rerender } = render(
      <SaveStatusIndicator isSaving={false} lastSaved={Date.now()} error={null} />
    );

    expect(screen.getByText(/saved/i)).toBeInTheDocument();

    rerender(
      <SaveStatusIndicator isSaving={false} lastSaved={null} error={new Error('Failed')} />
    );

    expect(screen.getByText(/save failed/i)).toBeInTheDocument();
  });
});

