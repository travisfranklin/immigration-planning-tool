/**
 * ShareResultButton Component
 * Reusable button for sharing viability results via URL
 */

import React, { useState } from 'react';
import type { ViabilityScore } from '../../types/viability';
import { generateShareUrl, copyToClipboard } from '../../utils/shareableResults';

interface ShareResultButtonProps {
  score: ViabilityScore;
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
}

export const ShareResultButton: React.FC<ShareResultButtonProps> = ({ 
  score, 
  variant = 'secondary',
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleShare = async () => {
    try {
      const shareUrl = generateShareUrl(score);
      const success = await copyToClipboard(shareUrl);
      
      if (success) {
        setCopied(true);
        setError(null);
        
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      } else {
        setError('Failed to copy link');
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      console.error('Share error:', err);
      setError('Failed to generate share link');
      setTimeout(() => setError(null), 3000);
    }
  };

  const baseClasses = 'flex items-center gap-2 font-medium transition-colors relative';
  
  const variantClasses = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
    secondary: 'px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50',
    icon: 'p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded',
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        title="Share this result"
        disabled={copied}
      >
        {variant !== 'icon' && (
          <>
            <span>{copied ? '✓' : '📤'}</span>
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </>
        )}
        {variant === 'icon' && <span className="text-xl">📤</span>}
      </button>
      
      {error && (
        <div className="absolute top-full left-0 mt-1 px-2 py-1 bg-red-100 border border-red-300 rounded text-xs text-red-700 whitespace-nowrap z-10">
          {error}
        </div>
      )}
    </div>
  );
};

