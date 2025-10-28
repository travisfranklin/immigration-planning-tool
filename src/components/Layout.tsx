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
  sidebar?: React.ReactNode;
}

export function Layout({ children, currentPage, showHeader = true, sidebar }: LayoutProps) {
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
      </div>
    </div>
  );
}

