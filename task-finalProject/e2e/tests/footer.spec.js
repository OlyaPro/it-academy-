import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { FooterPage } from '../page_objects/generalComponents/footerPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test footer oz.by website', async function () {
  let footer;
  let mainPage;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');

    footer = new FooterPage(page);
    baseElements = new BaseElements(page);
  });

  test('Footer should have links', async () => {
    expect(await footer.getFooterLinks()).toBeTruthy();
  });

  test('Should be a link to the text content in the footer', async () => {
    const footerLink = await baseElements.checkTextContent(footer.footerLinksCount);
    expect(await footerLink).not.toEqual('');
  });
});
