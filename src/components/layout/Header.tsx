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
      {/* Desktop Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className={`${UI_CONTAINER.lg} px-4 sm:px-6 lg:px-8`}>
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              <span className="text-2xl">🇪🇺</span>
              <span className="hidden sm:inline">EU Immigration Planner</span>
              <span className="sm:hidden">EU Planner</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.page)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out Menu */}
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-200 ease-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors mb-1 ${
                    isActive(link.page)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
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

