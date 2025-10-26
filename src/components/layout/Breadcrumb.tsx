/**
 * Breadcrumb Component
 * Navigation breadcrumb trail for showing current location
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const navigate = useNavigate();

  if (items.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-gray-400" aria-hidden="true">
                &gt;
              </span>
            )}
            {item.path && !isLast ? (
              <button
                onClick={() => navigate(item.path!)}
                className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className={isLast ? 'text-gray-900 font-medium' : 'text-gray-600'}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

