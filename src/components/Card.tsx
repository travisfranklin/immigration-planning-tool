/**
 * Card Component
 *
 * Bold, minimalist card following German functionalism and Scandinavian design
 *
 * Design Principles:
 * - Sharp corners (no border-radius)
 * - 2px solid black border
 * - No shadows (flat, honest design)
 * - Generous padding (32px)
 * - Uppercase, bold title
 * - 2px divider line under title
 * - High contrast
 */

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  className?: string;
}

export function Card({ children, title, subtitle, footer, className = '' }: CardProps) {
  return (
    <div className={`bg-white border-2 border-black ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="px-4 py-3 border-b-2 border-black">
          {title && (
            <h3 className="text-h4 font-bold uppercase tracking-wide text-black">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-body-sm text-gray-700 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="px-4 py-3 bg-gray-100 border-t-2 border-black">
          {footer}
        </div>
      )}
    </div>
  );
}

