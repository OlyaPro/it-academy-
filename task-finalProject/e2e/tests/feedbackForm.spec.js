import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { CommByPhone } from '../page_objects/generalComponents/commByPhone';
import { BaseElements } from '../helpers/baseElements';

test.describe('test feedbackForm oz.by website', async function () {
  let commByPhone;
  let mainPage;
  let topNavigation;
  let baseElements;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');
    topNavigation = new TopNavigationPage(page);
    commByPhone = new CommByPhone(page);
    baseElements = new BaseElements(page);
  });

  test('Should check radio button "interval time" in the form of "Ordering a callback" in the header', async () => {
    await baseElements.click(topNavigation.callbackForm);
    const radioButtonTimeInterval = await commByPhone.checkStatusRadioButtonWithTimeInterval();
    await expect(radioButtonTimeInterval).toBe(true);
  });
});
