/**
 * Header Component
 * Global navigation header with desktop and mobile support
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UI_CONTAINER } from '../../constants/uiStyles';

export type PageType = 'home' | 'profile' | 'results' | 'flowchart' | 'settings';

interface HeaderProps {
  currentPage?: PageType;
}

interface NavLink {
  path: string;
  label: string;
  page: PageType;
}

const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home', page: 'home' },
  { path: '/profile', label: 'Profile', page: 'profile' },
  { path: '/results', label: 'Results', page: 'results' },
  { path: '/flowchart', label: 'Flowcharts', page: 'flowchart' },
  { path: '/settings', label: 'Settings', page: 'settings' },
];

export function Header({ currentPage }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine active page from location if not explicitly provided
  const activePage = currentPage || getPageFromPath(location.pathname);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (page: PageType) => activePage === page;

  return (
    <>
      {/* Desktop Header - Bold, minimalist design */}
      <header className="bg-white">
        <div className={`${UI_CONTAINER.lg} px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-20">
            {/* Logo/Title - Bold, uppercase */}
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center gap-2 text-h3 font-bold tracking-wide text-black hover:text-primary transition-colors duration-fast"
            >
              <span className="hidden sm:inline">reloca.to</span>
              <span className="sm:hidden">reloca.to</span>
            </button>

            {/* Desktop Navigation - Sharp, bold */}
            <nav className="hidden md:flex items-center gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-3 py-2 text-label uppercase font-bold tracking-wide transition-colors duration-fast border-b-4 ${
                    isActive(link.page)
                      ? 'text-primary border-primary'
                      : 'text-black border-transparent hover:text-primary hover:border-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button - Sharp, bold */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-primary transition-colors duration-fast border-2 border-transparent hover:border-black"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Bold, sharp design */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out Menu - Sharp corners, bold borders */}
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-white border-r-4 border-black z-50 md:hidden transform transition-transform duration-200 ease-out">
            {/* Menu Header - Bold, uppercase */}
            <div className="flex items-center justify-between p-4 border-b-4 border-black">
              <span className="text-h4 font-bold uppercase tracking-wide text-black">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-black hover:text-primary transition-colors duration-fast border-2 border-transparent hover:border-black"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items - Sharp, bold */}
            <nav className="p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full text-left px-3 py-3 text-body-sm font-bold uppercase tracking-wide transition-colors duration-fast mb-2 border-l-4 ${
                    isActive(link.page)
                      ? 'text-primary border-primary bg-gray-100'
                      : 'text-black border-transparent hover:text-primary hover:border-primary hover:bg-gray-100'
                  }`}
                >
                  {getIconForPage(link.page)} {link.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}

/**
 * Helper function to determine current page from pathname
 */
function getPageFromPath(pathname: string): PageType {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/profile')) return 'profile';
  if (pathname.startsWith('/results')) return 'results';
  if (pathname.startsWith('/flowchart')) return 'flowchart';
  if (pathname.startsWith('/settings')) return 'settings';
  return 'home';
}

/**
 * Helper function to get icon for each page
 */
function getIconForPage(page: PageType): string {
  switch (page) {
    case 'home':
      return '🏠';
    case 'profile':
      return '👤';
    case 'results':
      return '📊';
    case 'flowchart':
      return '📋';
    case 'settings':
      return '⚙️';
    default:
      return '';
  }
}

