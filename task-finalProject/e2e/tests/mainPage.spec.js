import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';

test.describe('test mainPage oz.by website', async function () {
  let mainPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');
  });

  test('Should go to the main page', async ({ page }) => {
    await expect(page.url()).toBe('https://oz.by/');
  });
});
