# Shareable Results - Implementation Guide

## Prerequisites

Before starting implementation, ensure you understand:

1. **Current Architecture**:
   - Results are stored in IndexedDB (`viabilityScoreStore`)
   - ResultDetail page loads from IndexedDB using `getUserViabilityScores()`
   - No backend API currently exists
   - Export functionality already exists in Results page

2. **Data Structure**:
   - `ViabilityScore` type contains all result data (~2.5KB JSON)
   - No PII (personally identifiable information) in ViabilityScore
   - Safe to share via URL

3. **Browser Support**:
   - Target: Modern browsers (Chrome, Firefox, Safari, Edge)
   - No IE11 support required
   - URL length limits: 2000+ chars (we'll use ~800)

---

## Step-by-Step Implementation

### Step 1: Install Dependencies

```bash
# Install compression library
npm install lz-string

# Install TypeScript types
npm install --save-dev @types/lz-string
```

**Verify installation**:
```bash
npm list lz-string
# Should show: lz-string@1.5.0 (or latest version)
```

### Step 2: Create Utility Functions

**File**: `src/utils/shareableResults.ts`

```typescript
import LZ from 'lz-string';
import type { ViabilityScore } from '../types/viability';

/**
 * Encode a ViabilityScore to a URL-safe compressed string
 * Uses LZ compression + Base64 encoding for minimal URL length
 */
export function encodeResultsToUrl(score: ViabilityScore): string {
  try {
    const json = JSON.stringify(score);
    const compressed = LZ.compressToBase64(json);
    return compressed;
  } catch (error) {
    console.error('Failed to encode results:', error);
    throw new Error('Failed to encode results for sharing');
  }
}

/**
 * Decode a URL-safe string back to ViabilityScore
 */
export function decodeResultsFromUrl(encoded: string): ViabilityScore {
  try {
    const json = LZ.decompressFromBase64(encoded);
    if (!json) {
      throw new Error('Failed to decompress data');
    }
    const score = JSON.parse(json);
    return score as ViabilityScore;
  } catch (error) {
    console.error('Failed to decode results:', error);
    throw new Error('Invalid or corrupted shared results');
  }
}

/**
 * Type guard to validate ViabilityScore structure
 */
export function isValidViabilityScore(data: unknown): data is ViabilityScore {
  if (!data || typeof data !== 'object') return false;
  
  const score = data as Record<string, unknown>;
  
  return (
    typeof score.id === 'string' &&
    typeof score.countryCode === 'string' &&
    typeof score.countryName === 'string' &&
    typeof score.overallScore === 'number' &&
    typeof score.viabilityLevel === 'string' &&
    typeof score.componentScores === 'object' &&
    typeof score.riskFactors === 'object' &&
    Array.isArray(score.riskFactors)
  );
}

/**
 * Generate a shareable URL for a result
 */
export function generateShareUrl(score: ViabilityScore): string {
  const encoded = encodeResultsToUrl(score);
  const baseUrl = window.location.origin;
  return `${baseUrl}/result-detail/${score.countryCode}?results=${encoded}`;
}

/**
 * Copy text to clipboard with feedback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
}
```

### Step 3: Update ResultDetail Page

**File**: `src/pages/ResultDetail.tsx`

Key changes:
1. Import new utilities
2. Check for `results` query parameter
3. Load from URL if present, otherwise from IndexedDB
4. Add "Shared View" indicator
5. Add share button

```typescript
import { useSearchParams } from 'react-router-dom';
import { 
  decodeResultsFromUrl, 
  isValidViabilityScore,
  generateShareUrl,
  copyToClipboard 
} from '../utils/shareableResults';

export function ResultDetail() {
  const [searchParams] = useSearchParams();
  const [isSharedView, setIsSharedView] = useState(false);
  
  const loadResultDetail = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check for encoded results in URL first
      const encodedResults = searchParams.get('results');
      
      if (encodedResults) {
        // Load from shared URL
        try {
          const decodedScore = decodeResultsFromUrl(encodedResults);
          
          if (!isValidViabilityScore(decodedScore)) {
            throw new Error('Invalid viability score data');
          }
          
          setScore(decodedScore);
          setIsSharedView(true);
          setIsLoading(false);
          return;
        } catch (err) {
          console.error('Failed to load shared results:', err);
          setError('Invalid or corrupted shared results. Please try again.');
          setIsLoading(false);
          return;
        }
      }

      // Original logic: Load from IndexedDB
      if (!countryCode || !isValidCountryCode(countryCode)) {
        setError('Invalid country code');
        setIsLoading(false);
        return;
      }

      const profiles = await getAllUserProfiles();
      if (profiles.length === 0) {
        setError('No profile found. Please complete your profile first.');
        setIsLoading(false);
        return;
      }

      const scores = await getUserViabilityScores(profiles[0].id);
      const score = scores.find((s) => s.countryCode === countryCode);

      if (!score) {
        setError(`No viability score found for ${countryCode}`);
        setIsLoading(false);
        return;
      }

      setScore(score);
      setIsLoading(false);
    } catch (err) {
      console.error('Error loading result detail:', err);
      setError('Failed to load result details. Please try again.');
      setIsLoading(false);
    }
  };

  const handleShareResults = async () => {
    if (!score) return;
    
    const shareUrl = generateShareUrl(score);
    const copied = await copyToClipboard(shareUrl);
    
    if (copied) {
      // Show success message (toast/notification)
      alert('Share link copied to clipboard!');
    } else {
      alert('Failed to copy link. Please try again.');
    }
  };

  return (
    <Layout>
      {isSharedView && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
          <p className="text-blue-800">
            📤 <strong>Shared View</strong> - This result was shared with you
          </p>
        </div>
      )}
      
      {score && !isSharedView && (
        <button 
          onClick={handleShareResults}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          📤 Share Results
        </button>
      )}
      
      {/* Rest of component */}
    </Layout>
  );
}
```

### Step 4: Add Share Button to Results Page

**File**: `src/pages/Results.tsx`

Add share button to each result row:

```typescript
import { generateShareUrl, copyToClipboard } from '../utils/shareableResults';

const handleShareResult = async (score: ViabilityScore) => {
  const shareUrl = generateShareUrl(score);
  const copied = await copyToClipboard(shareUrl);
  
  if (copied) {
    alert('Share link copied to clipboard!');
  }
};

// In the results table, add a share button column
<button 
  onClick={() => handleShareResult(score)}
  className="text-blue-600 hover:text-blue-800"
  title="Share this result"
>
  📤 Share
</button>
```

### Step 5: Create Share Button Component (Optional)

**File**: `src/components/results/ShareResultButton.tsx`

```typescript
import React, { useState } from 'react';
import type { ViabilityScore } from '../../types/viability';
import { generateShareUrl, copyToClipboard } from '../../utils/shareableResults';

interface ShareResultButtonProps {
  score: ViabilityScore;
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
}

export function ShareResultButton({
  score,
  variant = 'secondary',
  className = ''
}: ShareResultButtonProps) {
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
      }
    } catch (err) {
      console.error('Share error:', err);
      setError('Failed to generate share link');
    }
  };

  const baseClasses = 'flex items-center gap-2 font-medium transition-colors';

  const variantClasses = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700',
    secondary: 'px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50',
    icon: 'p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded',
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        title="Share this result"
      >
        {variant !== 'icon' && (
          <>
            <span>{copied ? '✓' : '📤'}</span>
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </>
        )}
        {variant === 'icon' && <span>📤</span>}
      </button>

      {error && (
        <div className="absolute top-full mt-1 text-xs text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}
```

### Step 6: Update Tests

**File**: `src/utils/shareableResults.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import {
  encodeResultsToUrl,
  decodeResultsFromUrl,
  isValidViabilityScore,
  generateShareUrl,
} from './shareableResults';
import type { ViabilityScore } from '../types/viability';

const mockScore: ViabilityScore = {
  id: 'test-1',
  userId: 'user-1',
  countryCode: 'AT',
  countryName: 'Austria',
  createdAt: Date.now(),
  updatedAt: Date.now(),
  overallScore: 85,
  viabilityLevel: 'good',
  meetsHardRequirements: true,
  missingRequirements: [],
  competitiveScore: 85,
  componentScores: {
    career: 90,
    financial: 80,
    education: 85,
    language: 75,
    family: 70,
  },
  riskFactors: [],
  overallRiskLevel: 'low',
  contingencies: [],
  userPreferenceBoost: 0,
};

describe('shareableResults', () => {
  describe('encodeResultsToUrl', () => {
    it('should encode results to a string', () => {
      const encoded = encodeResultsToUrl(mockScore);

      expect(typeof encoded).toBe('string');
      expect(encoded.length).toBeGreaterThan(0);
      expect(encoded.length).toBeLessThan(2000); // URL length check
    });

    it('should produce consistent encoding', () => {
      const encoded1 = encodeResultsToUrl(mockScore);
      const encoded2 = encodeResultsToUrl(mockScore);

      expect(encoded1).toBe(encoded2);
    });
  });

  describe('decodeResultsFromUrl', () => {
    it('should decode encoded results', () => {
      const encoded = encodeResultsToUrl(mockScore);
      const decoded = decodeResultsFromUrl(encoded);

      expect(decoded.countryCode).toBe('AT');
      expect(decoded.countryName).toBe('Austria');
      expect(decoded.overallScore).toBe(85);
      expect(decoded.componentScores.career).toBe(90);
    });

    it('should handle invalid encoded data', () => {
      expect(() => decodeResultsFromUrl('invalid')).toThrow();
      expect(() => decodeResultsFromUrl('')).toThrow();
      expect(() => decodeResultsFromUrl('!@#$%^&*()')).toThrow();
    });

    it('should roundtrip encode/decode', () => {
      const encoded = encodeResultsToUrl(mockScore);
      const decoded = decodeResultsFromUrl(encoded);

      expect(decoded).toEqual(mockScore);
    });
  });

  describe('isValidViabilityScore', () => {
    it('should validate correct viability scores', () => {
      expect(isValidViabilityScore(mockScore)).toBe(true);
    });

    it('should reject invalid data', () => {
      expect(isValidViabilityScore({})).toBe(false);
      expect(isValidViabilityScore(null)).toBe(false);
      expect(isValidViabilityScore(undefined)).toBe(false);
      expect(isValidViabilityScore('string')).toBe(false);
      expect(isValidViabilityScore(123)).toBe(false);
    });

    it('should reject incomplete scores', () => {
      const incomplete = { countryCode: 'AT' };
      expect(isValidViabilityScore(incomplete)).toBe(false);
    });
  });

  describe('generateShareUrl', () => {
    it('should generate valid URL', () => {
      // Mock window.location.origin
      Object.defineProperty(window, 'location', {
        value: { origin: 'https://example.com' },
        writable: true,
      });

      const url = generateShareUrl(mockScore);

      expect(url).toContain('https://example.com');
      expect(url).toContain('/result-detail/AT');
      expect(url).toContain('?results=');
    });
  });
});
```

**File**: `src/pages/ResultDetail.test.tsx` (Add new tests)

```typescript
describe('ResultDetail - Shared View', () => {
  it('should load results from URL parameter', async () => {
    const encoded = encodeResultsToUrl(mockViabilityScore);

    // Mock useSearchParams to return encoded results
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams({ results: encoded }),
      vi.fn(),
    ]);

    renderWithRouter(<ResultDetail />);

    await waitFor(() => {
      expect(screen.getByText('Austria')).toBeInTheDocument();
      expect(screen.getByText(/Shared View/i)).toBeInTheDocument();
    });
  });

  it('should show error for invalid shared data', async () => {
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams({ results: 'invalid-data' }),
      vi.fn(),
    ]);

    renderWithRouter(<ResultDetail />);

    await waitFor(() => {
      expect(screen.getByText(/Invalid or corrupted shared results/i)).toBeInTheDocument();
    });
  });

  it('should not show share button in shared view', async () => {
    const encoded = encodeResultsToUrl(mockViabilityScore);

    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams({ results: encoded }),
      vi.fn(),
    ]);

    renderWithRouter(<ResultDetail />);

    await waitFor(() => {
      expect(screen.queryByText(/Share Results/i)).not.toBeInTheDocument();
    });
  });
});
```

## Complete Implementation Checklist

### Development Phase

#### Core Utilities
- [ ] Install `lz-string` dependency
- [ ] Create `src/utils/shareableResults.ts`
- [ ] Implement `encodeResultsToUrl()`
- [ ] Implement `decodeResultsFromUrl()`
- [ ] Implement `isValidViabilityScore()`
- [ ] Implement `generateShareUrl()`
- [ ] Implement `copyToClipboard()`
- [ ] Add error handling for all functions
- [ ] Write unit tests for utilities

#### ResultDetail Page Updates
- [ ] Import `useSearchParams` from react-router-dom
- [ ] Import shareable utilities
- [ ] Add `isSharedView` state
- [ ] Update `loadResultDetail()` to check URL params
- [ ] Add shared view banner component
- [ ] Add share button (only in non-shared view)
- [ ] Handle encoding errors gracefully
- [ ] Handle decoding errors gracefully
- [ ] Update tests for shared view

#### Optional: Share Button Component
- [ ] Create `src/components/results/ShareResultButton.tsx`
- [ ] Implement copy feedback (success/error states)
- [ ] Add multiple variants (primary, secondary, icon)
- [ ] Add loading state during copy
- [ ] Write component tests

#### Optional: Results Page Integration
- [ ] Add share button to CountryResultsTable
- [ ] Add share button to CountryRankingCard
- [ ] Test share from results page

### Testing Phase

#### Unit Tests
- [ ] Test `encodeResultsToUrl()` with valid data
- [ ] Test `decodeResultsFromUrl()` with valid data
- [ ] Test roundtrip encode/decode
- [ ] Test invalid data handling
- [ ] Test URL length constraints
- [ ] Test `isValidViabilityScore()` type guard
- [ ] Test `generateShareUrl()` URL format
- [ ] Test `copyToClipboard()` success/failure

#### Integration Tests
- [ ] Test ResultDetail loads from URL params
- [ ] Test ResultDetail shows shared view banner
- [ ] Test ResultDetail hides share button in shared view
- [ ] Test ResultDetail falls back to IndexedDB
- [ ] Test error display for invalid URLs
- [ ] Test share button copies URL
- [ ] Test copied URL can be decoded

#### Manual Testing
- [ ] Share button copies URL to clipboard
- [ ] Copied URL opens in new tab
- [ ] Shared URL works in incognito mode
- [ ] Shared URL works in different browser
- [ ] Shared view shows banner
- [ ] Shared view is read-only
- [ ] Invalid URLs show error message
- [ ] URL length < 2000 characters
- [ ] Works on mobile (iOS Safari)
- [ ] Works on mobile (Android Chrome)
- [ ] Works on desktop (Chrome)
- [ ] Works on desktop (Firefox)
- [ ] Works on desktop (Safari)
- [ ] Works on desktop (Edge)

#### Accessibility Testing
- [ ] Share button has proper ARIA labels
- [ ] Keyboard navigation works
- [ ] Screen reader announces copy success
- [ ] Error messages are accessible
- [ ] Focus management is correct

### Pre-Deployment Checklist

#### Code Quality
- [ ] All TypeScript errors resolved
- [ ] All tests passing
- [ ] No console errors in browser
- [ ] Code follows project conventions
- [ ] Comments added for complex logic
- [ ] No hardcoded values (use constants)

#### Documentation
- [ ] Update README if needed
- [ ] Add JSDoc comments to utilities
- [ ] Update ARCHITECTURE.md if needed
- [ ] Create user-facing documentation

#### Performance
- [ ] URL encoding is fast (<100ms)
- [ ] URL decoding is fast (<100ms)
- [ ] No memory leaks
- [ ] No unnecessary re-renders

### Deployment Phase

#### Pre-Deploy
- [ ] Create feature branch
- [ ] Commit all changes
- [ ] Push to remote
- [ ] Create pull request
- [ ] Code review completed
- [ ] All CI/CD checks passing

#### Deploy
- [ ] Merge to main branch
- [ ] Deploy to staging environment
- [ ] Test on staging
- [ ] Deploy to production
- [ ] Monitor for errors

#### Post-Deploy
- [ ] Test share functionality in production
- [ ] Monitor error logs
- [ ] Monitor analytics (if enabled)
- [ ] Gather user feedback
- [ ] Document any issues

### Rollback Plan

If issues are discovered after deployment:

1. **Immediate**: Disable share button via feature flag (if implemented)
2. **Short-term**: Revert deployment to previous version
3. **Long-term**: Fix issues and redeploy

**Rollback Criteria**:
- Share button causes crashes
- Shared URLs don't load
- Data corruption detected
- Security vulnerability found

## Deployment Timeline

### Week 1: Development
- **Day 1-2**: Implement core utilities and tests
- **Day 3-4**: Update ResultDetail page
- **Day 5**: Create share button component

### Week 2: Testing & Polish
- **Day 1-2**: Write comprehensive tests
- **Day 3**: Manual testing across browsers
- **Day 4**: Fix bugs and polish UX
- **Day 5**: Code review and documentation

### Week 3: Deployment
- **Day 1**: Deploy to staging
- **Day 2**: Staging testing
- **Day 3**: Deploy to production
- **Day 4-5**: Monitor and gather feedback

## Success Metrics

### Technical Metrics
- [ ] 0 encoding/decoding errors in production
- [ ] <100ms average encoding time
- [ ] <100ms average decoding time
- [ ] 100% test coverage for utilities
- [ ] 0 accessibility violations

### User Metrics
- [ ] Share button click rate > 5%
- [ ] Shared URL success rate > 95%
- [ ] User satisfaction score > 4/5
- [ ] 0 user-reported bugs

## Future Enhancements

### Phase 2: UX Improvements (1-2 weeks)
- [ ] Add toast notifications instead of alerts
- [ ] Add share dialog with multiple options
- [ ] Add "Copy Link" and "Email Link" buttons
- [ ] Add social media share buttons
- [ ] Add QR code generation
- [ ] Add "Save to My Results" button in shared view

### Phase 3: Backend Storage (4-6 weeks)
- [ ] Design API endpoints
- [ ] Set up database (PostgreSQL)
- [ ] Implement share token generation
- [ ] Add expiration logic
- [ ] Add analytics tracking
- [ ] Add access controls
- [ ] Migrate existing URL shares to backend

### Phase 4: Advanced Features (2-4 weeks)
- [ ] Share multiple countries at once
- [ ] Share comparison view
- [ ] Share with annotations/notes
- [ ] Share with custom branding
- [ ] Share via email directly
- [ ] Share history/management

## Troubleshooting Guide

### Issue: "Failed to encode results"
**Cause**: ViabilityScore object is malformed or too large
**Solution**: Validate score structure, check for circular references

### Issue: "Invalid or corrupted shared results"
**Cause**: URL was truncated or modified
**Solution**: Ask user to request new share link

### Issue: "Failed to copy to clipboard"
**Cause**: Browser permissions or HTTPS requirement
**Solution**: Show manual copy fallback, ensure HTTPS

### Issue: URL too long
**Cause**: ViabilityScore has excessive data
**Solution**: Review data structure, increase compression

### Issue: Shared view not loading
**Cause**: URL parameter not detected
**Solution**: Check useSearchParams implementation, verify routing

## Support & Maintenance

### Monitoring
- Monitor error logs for encoding/decoding failures
- Track share button usage via analytics
- Monitor URL length distribution
- Track browser compatibility issues

### Maintenance Tasks
- Update lz-string library quarterly
- Review and update compression algorithm if needed
- Monitor for new browser compatibility issues
- Update documentation as needed

### Contact
For questions or issues:
- Technical: [Your team's Slack channel]
- Product: [Product manager]
- Security: [Security team]

