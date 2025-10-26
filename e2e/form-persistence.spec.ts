import { test, expect } from '@playwright/test';

/**
 * E2E Tests: Form Data Persistence
 * Verifies that all form fields save properly and persist across page refreshes
 */

test.describe('Form Data Persistence', () => {
  test('Step 1: Personal Info fields persist after blur and refresh', async ({ browser }) => {
    // Create a new context for this test to ensure clean IndexedDB
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/profile');
    
    // Wait for form to load
    await page.waitForSelector('input[placeholder="John"]');

    // Fill in Step 1 fields
    await page.fill('input[placeholder="John"]', 'John');
    await page.fill('input[placeholder="Doe"]', 'Smith');
    await page.fill('input[type="date"]', '1990-05-15');

    // Blur each field to trigger save
    await page.locator('input[placeholder="John"]').blur();
    await page.locator('input[placeholder="Doe"]').blur();
    await page.locator('input[type="date"]').blur();

    // Wait a bit for save to complete
    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Wait for form to load
    await page.waitForSelector('input[placeholder="John"]');

    // Verify all fields are still filled
    const firstName = await page.inputValue('input[placeholder="John"]');
    const lastName = await page.inputValue('input[placeholder="Doe"]');
    const dateOfBirth = await page.inputValue('input[type="date"]');

    expect(firstName).toBe('John');
    expect(lastName).toBe('Smith');
    expect(dateOfBirth).toBe('1990-05-15');
  });

  test('Step 2: Financial Info fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 2
    await page.click('button:has-text("Next")');
    await page.waitForSelector('input[placeholder="50000"]');

    // Fill in Step 2 fields
    await page.fill('input[placeholder="50000"]', '75000');
    await page.fill('input[placeholder="10000"]', '25000');
    
    // Select employment status
    await page.selectOption('select', 'self_employed');

    // Blur fields to trigger save
    await page.locator('input[placeholder="50000"]').blur();
    await page.locator('input[placeholder="10000"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 2
    await page.click('button:has-text("Next")');
    await page.waitForSelector('input[placeholder="50000"]');

    // Verify fields are still filled
    const income = await page.inputValue('input[placeholder="50000"]');
    const savings = await page.inputValue('input[placeholder="10000"]');
    const employment = await page.locator('select').inputValue();

    expect(income).toBe('75000');
    expect(savings).toBe('25000');
    expect(employment).toBe('self_employed');
  });

  test('Step 3: Education fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 3
    await page.click('button:has-text("Next")');
    await page.click('button:has-text("Next")');
    await page.waitForSelector('select');

    // Fill in Step 3 fields
    await page.selectOption('select:nth-of-type(1)', 'master');
    await page.fill('input[placeholder="Computer Science"]', 'Data Science');
    await page.fill('input[type="number"]', '8');

    // Blur fields to trigger save
    await page.locator('input[placeholder="Computer Science"]').blur();
    await page.locator('input[type="number"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 3
    await page.click('button:has-text("Next")');
    await page.click('button:has-text("Next")');
    await page.waitForSelector('select');

    // Verify fields are still filled
    const education = await page.locator('select:nth-of-type(1)').inputValue();
    const fieldOfStudy = await page.inputValue('input[placeholder="Computer Science"]');
    const experience = await page.inputValue('input[type="number"]');

    expect(education).toBe('master');
    expect(fieldOfStudy).toBe('Data Science');
    expect(experience).toBe('8');
  });

  test('Step 4: Career fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 4
    for (let i = 0; i < 3; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('input[placeholder="Software Engineer"]');

    // Fill in Step 4 fields
    await page.fill('input[placeholder="Software Engineer"]', 'Data Engineer');
    await page.fill('input[placeholder="Technology"]', 'Tech');

    // Blur fields to trigger save
    await page.locator('input[placeholder="Software Engineer"]').blur();
    await page.locator('input[placeholder="Technology"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 4
    for (let i = 0; i < 3; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('input[placeholder="Software Engineer"]');

    // Verify fields are still filled
    const occupation = await page.inputValue('input[placeholder="Software Engineer"]');
    const industry = await page.inputValue('input[placeholder="Technology"]');

    expect(occupation).toBe('Data Engineer');
    expect(industry).toBe('Tech');
  });

  test('Step 5: Family fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 5
    for (let i = 0; i < 4; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('select');

    // Select marital status
    await page.selectOption('select', 'married');

    // Add a family member
    await page.click('button:has-text("Add Family Member")');
    await page.waitForSelector('input[placeholder="John Smith"]');

    // Fill in family member details
    await page.fill('input[placeholder="John Smith"]', 'Jane Doe');
    await page.selectOption('select:nth-of-type(2)', 'spouse');
    await page.fill('input[placeholder="US"]', 'CA');

    // Blur fields to trigger save
    await page.locator('input[placeholder="John Smith"]').blur();
    await page.locator('input[placeholder="US"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 5
    for (let i = 0; i < 4; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('select');

    // Verify marital status is still set
    const maritalStatus = await page.locator('select:nth-of-type(1)').inputValue();
    expect(maritalStatus).toBe('married');

    // Verify family member is still there
    const familyName = await page.inputValue('input[placeholder="John Smith"]');
    const familyCitizenship = await page.inputValue('input[placeholder="US"]');

    expect(familyName).toBe('Jane Doe');
    expect(familyCitizenship).toBe('CA');
  });

  test('Step 6: Language fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 6
    for (let i = 0; i < 5; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('button:has-text("Add Language")');

    // Add a language
    await page.click('button:has-text("Add Language")');
    await page.waitForSelector('input[placeholder="English"]');

    // Fill in language details
    await page.fill('input[placeholder="English"]', 'German');
    await page.selectOption('select', 'B2');

    // Blur fields to trigger save
    await page.locator('input[placeholder="English"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 6
    for (let i = 0; i < 5; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('input[placeholder="English"]');

    // Verify language is still there
    const language = await page.inputValue('input[placeholder="English"]');
    const proficiency = await page.locator('select').inputValue();

    expect(language).toBe('German');
    expect(proficiency).toBe('B2');
  });

  test('Step 7: Country Selection fields persist after blur and refresh', async ({ page }) => {
    await page.goto('/profile');

    // Navigate to Step 7
    for (let i = 0; i < 6; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('button:has-text("Add Country")');

    // Add a country
    await page.click('button:has-text("Add Country")');
    await page.waitForSelector('select');

    // Select a country
    await page.selectOption('select:nth-of-type(1)', 'Germany');

    // Select immigration path
    await page.selectOption('select:nth-of-type(2)', 'work_visa');

    // Fill in timeline
    await page.fill('input[type="number"]', '12');

    // Blur fields to trigger save
    await page.locator('input[type="number"]').blur();

    await page.waitForTimeout(500);

    // Refresh the page
    await page.reload();

    // Navigate back to Step 7
    for (let i = 0; i < 6; i++) {
      await page.click('button:has-text("Next")');
    }
    await page.waitForSelector('select');

    // Verify fields are still filled
    const country = await page.locator('select:nth-of-type(1)').inputValue();
    const path = await page.locator('select:nth-of-type(2)').inputValue();
    const timeline = await page.inputValue('input[type="number"]');

    expect(country).toBe('Germany');
    expect(path).toBe('work_visa');
    expect(timeline).toBe('12');
  });

  test('All steps: Complete form persists after full refresh', async ({ page }) => {
    await page.goto('/profile');

    // Step 1: Personal Info
    await page.fill('input[placeholder="John"]', 'John');
    await page.fill('input[placeholder="Doe"]', 'Smith');
    await page.fill('input[type="date"]', '1990-05-15');
    await page.locator('input[placeholder="John"]').blur();
    await page.locator('input[placeholder="Doe"]').blur();
    await page.locator('input[type="date"]').blur();

    await page.waitForTimeout(300);

    // Refresh and verify Step 1
    await page.reload();
    await page.waitForSelector('input[placeholder="John"]');

    let firstName = await page.inputValue('input[placeholder="John"]');
    expect(firstName).toBe('John');

    // Navigate to Step 2
    await page.click('button:has-text("Next")');
    await page.waitForSelector('input[placeholder="50000"]');

    // Step 2: Financial Info
    await page.fill('input[placeholder="50000"]', '75000');
    await page.fill('input[placeholder="10000"]', '25000');
    await page.locator('input[placeholder="50000"]').blur();
    await page.locator('input[placeholder="10000"]').blur();

    await page.waitForTimeout(300);

    // Refresh and verify both steps
    await page.reload();
    await page.waitForSelector('input[placeholder="John"]');

    firstName = await page.inputValue('input[placeholder="John"]');
    expect(firstName).toBe('John');

    await page.click('button:has-text("Next")');
    await page.waitForSelector('input[placeholder="50000"]');

    const income = await page.inputValue('input[placeholder="50000"]');
    expect(income).toBe('75000');
  });
});

