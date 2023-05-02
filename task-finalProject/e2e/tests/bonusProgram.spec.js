import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { BonusProgramPage } from '../page_objects/generalComponents/bonusProgramPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test bonusProgramPage oz.by website', async function () {
  let mainPage;
  let topNavigation;
  let bonusProgram;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');

    topNavigation = new TopNavigationPage(page);
    bonusProgram = new BonusProgramPage(page);
    baseElements = new BaseElements(page);
  });
  test('Should open Bonus Program tab', async () => {
    await baseElements.click(topNavigation.linkToTheBonusProgram);
    const headerBonusProgramPage = await baseElements.checkTextContent(bonusProgram.headerPage);
    await expect(headerBonusProgramPage).toContain('Кешбэк за покупки');
  });
});
