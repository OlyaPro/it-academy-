import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { PromAndDiscPage } from '../page_objects/mainNaviListOfTheSideMenu/promAndDiscPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test promoDiscountPage oz.by website', async function () {
  let mainPage;
  let promotionsAndDiscounts;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');
    promotionsAndDiscounts = new PromAndDiscPage(page);
    baseElements = new BaseElements(page);
  });

  test('Should open the "Акции и скидки" page', async () => {
    await baseElements.click(mainPage.ItemPromAndDiscPageInSideNavMenu);
    const titlePromAndDiscPage = await baseElements.checkTextContent(promotionsAndDiscounts.header);
    await expect(titlePromAndDiscPage).toContain('Акции и скидки');
  });
});
