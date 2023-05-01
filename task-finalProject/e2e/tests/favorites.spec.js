import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { UserFormPage } from '../page_objects/generalComponents/userFormPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { ProductDetailsPage } from '../page_objects/productDetailsPage';
import { ProductListingPage } from '../page_objects/ProductListingPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test favorites oz.by website', async function () {
  let mainPage;
  let topNavigation;
  let userForm;
  let productDetails;
  let productListing;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');

    topNavigation = new TopNavigationPage(page);
    userForm = new UserFormPage(page);
    productDetails = new ProductDetailsPage(page);
    productListing = new ProductListingPage(page);
    baseElements = new BaseElements(page);
  });

  test('Should check the product counter next to the Favorites navigation', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Подарочный набор "Кот"');
    await productListing.getproduct('Подарочный набор "Кот"');
    await productDetails.checkFavoriteItemsCounter();
    const numberNearFavoriteNav = await baseElements.checkTextContent(await topNavigation.numberNextFavoritesNav);
    await expect(numberNearFavoriteNav).toEqual('0');
  });
});
