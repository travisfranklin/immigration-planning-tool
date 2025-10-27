/**
 * Toast Component Tests
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast, ToastContainer } from './Toast';

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders toast with message', () => {
      const onClose = vi.fn();
      render(<Toast id="1" message="Test message" type="success" onClose={onClose} />);
      
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('renders success toast with correct styling', () => {
      const onClose = vi.fn();
      const { container } = render(<Toast id="1" message="Success!" type="success" onClose={onClose} />);
      
      const toast = container.querySelector('.bg-green-50');
      expect(toast).toBeInTheDocument();
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('renders error toast with correct styling', () => {
      const onClose = vi.fn();
      const { container } = render(<Toast id="1" message="Error!" type="error" onClose={onClose} />);

      const toast = container.querySelector('.bg-red-50');
      expect(toast).toBeInTheDocument();
      const icons = screen.getAllByText('✕');
      expect(icons.length).toBeGreaterThan(0); // Icon and close button both have ✕
    });

    it('renders info toast with correct styling', () => {
      const onClose = vi.fn();
      const { container } = render(<Toast id="1" message="Info!" type="info" onClose={onClose} />);
      
      const toast = container.querySelector('.bg-blue-50');
      expect(toast).toBeInTheDocument();
      expect(screen.getByText('ℹ')).toBeInTheDocument();
    });

    it('renders warning toast with correct styling', () => {
      const onClose = vi.fn();
      const { container } = render(<Toast id="1" message="Warning!" type="warning" onClose={onClose} />);
      
      const toast = container.querySelector('.bg-yellow-50');
      expect(toast).toBeInTheDocument();
      expect(screen.getByText('⚠')).toBeInTheDocument();
    });
  });

  describe('Auto-dismiss', () => {
    it('auto-dismisses after default duration (5000ms)', () => {
      const onClose = vi.fn();
      render(<Toast id="1" message="Test" type="success" onClose={onClose} />);

      expect(onClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(5000);

      expect(onClose).toHaveBeenCalledWith('1');
    });

    it('auto-dismisses after custom duration', () => {
      const onClose = vi.fn();
      render(<Toast id="1" message="Test" type="success" duration={3000} onClose={onClose} />);

      vi.advanceTimersByTime(2999);
      expect(onClose).not.toHaveBeenCalled();

      vi.advanceTimersByTime(1);

      expect(onClose).toHaveBeenCalledWith('1');
    });
  });

  describe('User Interaction', () => {
    it('closes when close button is clicked', async () => {
      vi.useRealTimers(); // Use real timers for user interaction
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<Toast id="1" message="Test" type="success" onClose={onClose} />);

      const closeButton = screen.getByLabelText('Close');
      await user.click(closeButton);

      expect(onClose).toHaveBeenCalledWith('1');
      vi.useFakeTimers(); // Restore fake timers
    });
  });

  describe('Accessibility', () => {
    it('has alert role', () => {
      const onClose = vi.fn();
      render(<Toast id="1" message="Test" type="success" onClose={onClose} />);
      
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('close button has accessible label', () => {
      const onClose = vi.fn();
      render(<Toast id="1" message="Test" type="success" onClose={onClose} />);
      
      expect(screen.getByLabelText('Close')).toBeInTheDocument();
    });
  });
});

describe('ToastContainer', () => {
  it('renders nothing when toasts array is empty', () => {
    const { container } = render(<ToastContainer toasts={[]} onClose={vi.fn()} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('renders multiple toasts', () => {
    const toasts = [
      { id: '1', message: 'First toast', type: 'success' as const },
      { id: '2', message: 'Second toast', type: 'error' as const },
      { id: '3', message: 'Third toast', type: 'info' as const },
    ];
    
    render(<ToastContainer toasts={toasts} onClose={vi.fn()} />);
    
    expect(screen.getByText('First toast')).toBeInTheDocument();
    expect(screen.getByText('Second toast')).toBeInTheDocument();
    expect(screen.getByText('Third toast')).toBeInTheDocument();
  });

  it('applies top-right position by default', () => {
    const toasts = [{ id: '1', message: 'Test', type: 'success' as const }];
    const { container } = render(<ToastContainer toasts={toasts} onClose={vi.fn()} />);
    
    const toastContainer = container.querySelector('.top-4.right-4');
    expect(toastContainer).toBeInTheDocument();
  });

  it('applies custom position', () => {
    const toasts = [{ id: '1', message: 'Test', type: 'success' as const }];
    const { container } = render(<ToastContainer toasts={toasts} onClose={vi.fn()} position="bottom-left" />);
    
    const toastContainer = container.querySelector('.bottom-4.left-4');
    expect(toastContainer).toBeInTheDocument();
  });

  it('applies top-center position correctly', () => {
    const toasts = [{ id: '1', message: 'Test', type: 'success' as const }];
    const { container } = render(<ToastContainer toasts={toasts} onClose={vi.fn()} position="top-center" />);
    
    const toastContainer = container.querySelector('.top-4');
    expect(toastContainer).toBeInTheDocument();
    expect(toastContainer?.classList.contains('left-1/2')).toBe(true);
  });

  it('passes onClose to individual toasts', async () => {
    vi.useRealTimers(); // Use real timers for user interaction
    const user = userEvent.setup();
    const onClose = vi.fn();
    const toasts = [{ id: '1', message: 'Test', type: 'success' as const }];

    render(<ToastContainer toasts={toasts} onClose={onClose} />);

    const closeButton = screen.getByLabelText('Close');
    await user.click(closeButton);

    expect(onClose).toHaveBeenCalledWith('1');
    vi.useFakeTimers(); // Restore fake timers
  });
});

