/**
 * Tests for Currency Service
 * Tests exchange rate fetching, caching, and conversion logic
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  getUsdToEurRate,
  convertUsdToEur,
  convertEurToUsd,
  clearRateCache,
  getCacheStatus,
} from './currencyService';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Currency Service', () => {
  beforeEach(() => {
    clearRateCache();
    vi.clearAllMocks();
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getUsdToEurRate', () => {
    it('should fetch exchange rate from ECB API', async () => {
      // ECB returns USD per EUR (e.g., 1.10 means 1 EUR = 1.10 USD)
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      const rate = await getUsdToEurRate();

      // 1 EUR = 1.10 USD, so 1 USD = 1/1.10 EUR ≈ 0.909
      expect(rate).toBeCloseTo(1 / 1.1, 2);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('should cache the exchange rate', async () => {
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      // First call should fetch
      await getUsdToEurRate();
      expect(mockFetch).toHaveBeenCalledTimes(1);

      // Second call should use cache
      await getUsdToEurRate();
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('should return fallback rate when API fails', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });

      const rate = await getUsdToEurRate();

      expect(rate).toBe(0.85); // Fallback rate
      expect(console.warn).toHaveBeenCalled();
    });

    it('should return fallback rate when fetch throws', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const rate = await getUsdToEurRate();

      expect(rate).toBe(0.85); // Fallback rate
      expect(console.warn).toHaveBeenCalled();
    });

    it('should return fallback rate when CSV parsing fails', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve('invalid csv data'),
      });

      const rate = await getUsdToEurRate();

      expect(rate).toBe(0.85); // Fallback rate
    });
  });

  describe('convertUsdToEur', () => {
    it('should convert USD to EUR using fetched rate', async () => {
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      const eurAmount = await convertUsdToEur(100);

      // $100 USD at rate 1/1.1 ≈ €91
      expect(eurAmount).toBe(Math.round(100 / 1.1));
    });

    it('should return 0 for zero or negative amounts', async () => {
      expect(await convertUsdToEur(0)).toBe(0);
      expect(await convertUsdToEur(-100)).toBe(0);
    });

    it('should round to nearest integer', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      const result = await convertUsdToEur(99);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('convertEurToUsd', () => {
    it('should convert EUR to USD using fetched rate', async () => {
      const mockCsvResponse = `KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`;

      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(mockCsvResponse),
      });

      const usdAmount = await convertEurToUsd(91);

      // €91 EUR at rate 1/1.1, reverse is €91 / (1/1.1) = €91 * 1.1 ≈ $100
      expect(usdAmount).toBe(Math.round(91 * 1.1));
    });

    it('should return 0 for zero or negative amounts', async () => {
      expect(await convertEurToUsd(0)).toBe(0);
      expect(await convertEurToUsd(-100)).toBe(0);
    });
  });

  describe('getCacheStatus', () => {
    it('should return not cached when cache is empty', () => {
      const status = getCacheStatus();
      expect(status.isCached).toBe(false);
      expect(status.rate).toBeNull();
      expect(status.ageMs).toBeNull();
    });

    it('should return cached status after fetching rate', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      await getUsdToEurRate();

      const status = getCacheStatus();
      expect(status.isCached).toBe(true);
      expect(status.rate).toBeCloseTo(1 / 1.1, 2);
      expect(status.ageMs).toBeGreaterThanOrEqual(0);
    });
  });

  describe('clearRateCache', () => {
    it('should clear the cached rate', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve(`KEY,FREQ,CURRENCY,CURRENCY_DENOM,EXR_TYPE,EXR_SUFFIX,TIME_PERIOD,OBS_VALUE
EXR.D.USD.EUR.SP00.A,D,USD,EUR,SP00,A,2024-01-15,1.10`),
      });

      await getUsdToEurRate();
      expect(getCacheStatus().isCached).toBe(true);

      clearRateCache();
      expect(getCacheStatus().isCached).toBe(false);

      // Next call should fetch again
      await getUsdToEurRate();
      expect(mockFetch).toHaveBeenCalledTimes(2);
    });
  });
});

