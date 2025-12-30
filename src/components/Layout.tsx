/**
 * Layout Component
 * Main layout wrapper for the application
 */

import React from 'react';
import { Header, type PageType } from './layout/Header';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: PageType;
  showHeader?: boolean;
  showFooter?: boolean;
  sidebar?: React.ReactNode;
}

export function Layout({ children, currentPage, showHeader = true, showFooter = true, sidebar }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      {sidebar && (
        <aside className="w-64 bg-white border-r-2 border-black">
          {sidebar}
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {showHeader && <Header currentPage={currentPage} />}

        {/* Content - No default padding, pages handle their own layout */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer Disclaimer */}
        {showFooter && (
          <footer className="bg-neutral-100 border-t-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <p className="text-body-sm text-neutral-600 text-center">
                <strong className="font-semibold">Not Legal Advice.</strong> This tool provides general information only and does not constitute legal or immigration advice.
                Immigration laws change frequently. Consult a qualified immigration attorney before making any decisions.
                <a href="/" className="underline hover:text-black ml-1">Full disclaimer</a>.
              </p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

