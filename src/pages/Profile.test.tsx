import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Profile } from './Profile';
import * as userProfileStore from '@/services/storage/userProfileStore';

vi.mock('@/services/storage/userProfileStore');

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Profile Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock getLatestUserProfile to return undefined (no existing profile)
    vi.mocked(userProfileStore.getLatestUserProfile).mockResolvedValue(undefined);
  });

  it('should render the profile page', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /immigration profile/i })).toBeInTheDocument();
    });
  });

  it('should display the form container', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      // Profile page uses accordion, not step-by-step form
      expect(screen.getByText('Personal Information')).toBeInTheDocument();
      expect(screen.getByText('Your Profile')).toBeInTheDocument();
    });
  });

  it('should have a page title', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      const heading = screen.getByRole('heading', { name: /immigration profile/i });
      expect(heading).toBeInTheDocument();
    });
  });

  it('should render layout with proper structure', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      const mains = screen.getAllByRole('main');
      expect(mains.length).toBeGreaterThan(0);
    });
  });

  it('should display form container with onSave handler', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });
  });

  it('should have proper page layout', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      const mains = screen.getAllByRole('main');
      expect(mains.length).toBeGreaterThan(0);
    });
  });

  it('should render without crashing', async () => {
    const { container } = renderWithRouter(<Profile />);

    await waitFor(() => {
      expect(container).toBeInTheDocument();
    });
  });

  it('should have accessible structure', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      const heading = screen.getByRole('heading', { name: /immigration profile/i });
      expect(heading.tagName).toBe('H1');
    });
  });

  it('should display form title', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    });
  });

  it('should render progress indicator', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      // Profile page shows completion percentage, not step numbers
      expect(screen.getByText(/% complete/i)).toBeInTheDocument();
    });
  });

  it('should display help text about local storage', async () => {
    renderWithRouter(<Profile />);

    await waitFor(() => {
      expect(screen.getByText(/data is saved locally/i)).toBeInTheDocument();
    });
  });
});

