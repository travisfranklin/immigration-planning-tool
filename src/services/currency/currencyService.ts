/**
 * Currency Conversion Service
 * Fetches exchange rates from the European Central Bank (ECB) API
 * and converts amounts between USD and EUR for viability calculations.
 */

// ECB API endpoint for daily USD/EUR exchange rate
const ECB_API_URL = 'https://data-api.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A';

// Cache duration: 24 hours (rates are updated daily at ~2:15 PM CET)
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000;

// Fallback rate if API fails (approximate market rate)
const FALLBACK_USD_TO_EUR_RATE = 0.85;

interface CachedRate {
  rate: number;
  timestamp: number;
}

let cachedRate: CachedRate | null = null;

/**
 * Parse the ECB CSV response to extract the exchange rate
 * The ECB returns USD per EUR (e.g., 1.17 means 1 EUR = 1.17 USD)
 * We need EUR per USD for conversion (e.g., 0.85 means 1 USD = 0.85 EUR)
 */
function parseEcbCsvResponse(csvData: string): number | null {
  const lines = csvData.trim().split('\n');
  if (lines.length < 2) return null;

  // Get the data row (skip header)
  const dataLine = lines[1];
  const columns = dataLine.split(',');

  // OBS_VALUE is the 8th column (index 7) - this is USD per EUR
  const usdPerEur = parseFloat(columns[7]);
  if (isNaN(usdPerEur) || usdPerEur <= 0) return null;

  // Convert to EUR per USD
  return 1 / usdPerEur;
}

/**
 * Fetch the current USD to EUR exchange rate from ECB
 */
async function fetchExchangeRate(): Promise<number> {
  try {
    const response = await fetch(
      `${ECB_API_URL}?lastNObservations=1&format=csvdata`,
      {
        method: 'GET',
        headers: {
          Accept: 'text/csv',
        },
      }
    );

    if (!response.ok) {
      console.warn(`ECB API returned status ${response.status}, using fallback rate`);
      return FALLBACK_USD_TO_EUR_RATE;
    }

    const csvData = await response.text();
    const rate = parseEcbCsvResponse(csvData);

    if (rate === null) {
      console.warn('Failed to parse ECB response, using fallback rate');
      return FALLBACK_USD_TO_EUR_RATE;
    }

    return rate;
  } catch (error) {
    console.warn('Failed to fetch ECB exchange rate, using fallback rate:', error);
    return FALLBACK_USD_TO_EUR_RATE;
  }
}

/**
 * Get the USD to EUR exchange rate with caching
 */
export async function getUsdToEurRate(): Promise<number> {
  const now = Date.now();

  // Return cached rate if still valid
  if (cachedRate && now - cachedRate.timestamp < CACHE_DURATION_MS) {
    return cachedRate.rate;
  }

  // Fetch fresh rate
  const rate = await fetchExchangeRate();

  // Cache the rate
  cachedRate = {
    rate,
    timestamp: now,
  };

  return rate;
}

/**
 * Convert USD to EUR using the current exchange rate
 */
export async function convertUsdToEur(amountUsd: number): Promise<number> {
  if (amountUsd <= 0) return 0;

  const rate = await getUsdToEurRate();
  return Math.round(amountUsd * rate);
}

/**
 * Convert EUR to USD using the current exchange rate
 */
export async function convertEurToUsd(amountEur: number): Promise<number> {
  if (amountEur <= 0) return 0;

  const rate = await getUsdToEurRate();
  return Math.round(amountEur / rate);
}

/**
 * Clear the cached exchange rate (useful for testing)
 */
export function clearRateCache(): void {
  cachedRate = null;
}

/**
 * Get cache status for debugging
 */
export function getCacheStatus(): { isCached: boolean; rate: number | null; ageMs: number | null } {
  if (!cachedRate) {
    return { isCached: false, rate: null, ageMs: null };
  }

  return {
    isCached: true,
    rate: cachedRate.rate,
    ageMs: Date.now() - cachedRate.timestamp,
  };
}

