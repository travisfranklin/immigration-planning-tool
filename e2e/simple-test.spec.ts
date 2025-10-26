/* eslint-disable @typescript-eslint/no-explicit-any */
import { test, expect } from '@playwright/test';

test('Simple test: Fill form, blur, refresh, and check values persist', async ({ page }) => {
  await page.goto('/profile');
  await page.waitForSelector('input[placeholder="John"]', { timeout: 15000 });

  // Fill in Step 1 fields
  await page.fill('input[placeholder="John"]', 'John');
  await page.fill('input[placeholder="Doe"]', 'Smith');
  await page.fill('input[type="date"]', '1990-05-15');

  // Check values are filled
  const firstName = await page.inputValue('input[placeholder="John"]');
  const lastName = await page.inputValue('input[placeholder="Doe"]');
  const dateOfBirth = await page.inputValue('input[type="date"]');

  console.log('Before blur - firstName:', firstName);
  console.log('Before blur - lastName:', lastName);
  console.log('Before blur - dateOfBirth:', dateOfBirth);

  expect(firstName).toBe('John');
  expect(lastName).toBe('Smith');
  expect(dateOfBirth).toBe('1990-05-15');

  // Blur each field to trigger save by pressing Tab
  console.log('Tabbing out of first name field');

  // Add a marker to the page when blur happens
  await page.evaluate(() => {
    window.blurCount = 0;
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        window.blurCount = (window.blurCount || 0) + 1;
        console.log('Blur event triggered, count:', window.blurCount);
      });
    });
  });

  await page.locator('input[placeholder="John"]').press('Tab');

  // Check blur count
  const blurCount = await page.evaluate(() => window.blurCount);
  console.log('Blur count after first Tab:', blurCount);

  // Check if onBlur callback was called
  const blurCallCount = await page.evaluate(() => (window as any).blurCallCount);
  console.log('onBlur callback count after first Tab:', blurCallCount);

  console.log('Tabbing out of last name field');
  await page.locator('input[placeholder="Doe"]').press('Tab');
  console.log('Tabbing out of date of birth field');
  await page.locator('input[type="date"]').press('Tab');

  // Check final blur call count
  const finalBlurCallCount = await page.evaluate(() => (window as any).blurCallCount);
  console.log('Final onBlur callback count:', finalBlurCallCount);

  // Wait for save to complete
  console.log('Waiting for save to complete');
  await page.waitForTimeout(2000);

  // Check values are still there
  const firstNameAfter = await page.inputValue('input[placeholder="John"]');
  const lastNameAfter = await page.inputValue('input[placeholder="Doe"]');
  const dateOfBirthAfter = await page.inputValue('input[type="date"]');

  console.log('After blur - firstName:', firstNameAfter);
  console.log('After blur - lastName:', lastNameAfter);
  console.log('After blur - dateOfBirth:', dateOfBirthAfter);

  expect(firstNameAfter).toBe('John');
  expect(lastNameAfter).toBe('Smith');
  expect(dateOfBirthAfter).toBe('1990-05-15');

  // Check save markers
  const profileLoadCount = await page.evaluate(() => (window as any).profileLoadCount);
  const profileFormContainerRenderCount = await page.evaluate(() => (window as any).profileFormContainerRenderCount);
  const performSaveCallCount = await page.evaluate(() => (window as any).performSaveCallCount);
  const onSaveCallCount = await page.evaluate(() => (window as any).onSaveCallCount);
  const performSaveSkipped = await page.evaluate(() => (window as any).performSaveSkipped);
  const saveError = await page.evaluate(() => (window as any).saveError);
  const skipReason = await page.evaluate(() => (window as any).skipReason);
  const useAutoSaveInitCount = await page.evaluate(() => (window as any).useAutoSaveInitCount);
  const useAutoSaveCleanupCount = await page.evaluate(() => (window as any).useAutoSaveCleanupCount);

  console.log('profileLoadCount:', profileLoadCount);
  console.log('profileFormContainerRenderCount:', profileFormContainerRenderCount);
  console.log('useAutoSaveInitCount:', useAutoSaveInitCount);
  console.log('useAutoSaveCleanupCount:', useAutoSaveCleanupCount);
  console.log('performSaveCallCount:', performSaveCallCount);
  console.log('onSaveCallCount:', onSaveCallCount);
  console.log('performSaveSkipped:', performSaveSkipped);
  console.log('skipReason:', skipReason);
  console.log('saveError:', saveError);

  // Check IndexedDB directly
  console.log('Checking IndexedDB...');
  const dbData = await page.evaluate(async () => {
    return new Promise((resolve) => {
      const request = indexedDB.open('immigration-pipeline', 1);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction('userProfiles', 'readonly');
        const store = transaction.objectStore('userProfiles');
        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = () => {
          resolve(getAllRequest.result);
        };
      };
    });
  });
  console.log('IndexedDB data:', dbData);
  expect(dbData).toBeDefined();
  expect(Array.isArray(dbData)).toBe(true);
  expect(dbData.length).toBeGreaterThan(0);

  // Now refresh the page
  console.log('Refreshing page...');
  await page.reload();
  await page.waitForSelector('input[placeholder="John"]', { timeout: 15000 });

  // Check values persist after refresh
  const firstNameRefresh = await page.inputValue('input[placeholder="John"]');
  const lastNameRefresh = await page.inputValue('input[placeholder="Doe"]');
  const dateOfBirthRefresh = await page.inputValue('input[type="date"]');

  console.log('After refresh - firstName:', firstNameRefresh);
  console.log('After refresh - lastName:', lastNameRefresh);
  console.log('After refresh - dateOfBirth:', dateOfBirthRefresh);

  expect(firstNameRefresh).toBe('John');
  expect(lastNameRefresh).toBe('Smith');
  expect(dateOfBirthRefresh).toBe('1990-05-15');
});

