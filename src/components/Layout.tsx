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
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {sidebar && (
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200">
          {sidebar}
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {showHeader && <Header currentPage={currentPage} />}

        {/* Content */}
        <main className="flex-1">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

