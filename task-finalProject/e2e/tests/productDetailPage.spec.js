import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { UserFormPage } from '../page_objects/generalComponents/userFormPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { ProductDetailsPage } from '../page_objects/productDetailsPage';
import { ProductListingPage } from '../page_objects/ProductListingPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test productDetailPage oz.by website', async function () {
  let mainPage;
  let userForm;
  let topNavigation;
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
  test('Should check the price  on the product detail page', async () => {
    await topNavigation.searchProducts('Бульонница "Eclipse"');
    const price = await productDetails.priceProduct;
    await expect(price).toBeTruthy();
  });
  test('Should check bonus-label on the product detail page', async () => {
    await topNavigation.searchProducts('Машинка "Бублик"');
    await productListing.product('Машинка "Бублик"');
    const ratingStarsrOnThePage = await productDetails.bonusLabel;
    await expect(ratingStarsrOnThePage).toBeTruthy();
  });
  test('Should check the product description on the product detail page', async () => {
    await topNavigation.searchProducts('Подушка "7 котов"');
    const descriptionProduct = await baseElements.checkTextContent(productDetails.descriptionProduct);
    await expect(descriptionProduct).not.toEqual('');
  });
  test('Should be a product image on the product details page', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Термокружка (арт. BH-4456)');
    await productListing.product('Термокружка (арт. BH-4456)');
    const image = await productDetails.image;
    await expect(image).toBeTruthy();
  });
  test('Should check rating-stars on the product detail page', async () => {
    await topNavigation.searchProducts('Мягкая игрушка "Гусь" (90 см)');
    await productListing.product('Мягкая игрушка "Гусь" (90 см)');
    const ratingStarsrOnThePage = await productDetails.ratingStars;
    await expect(ratingStarsrOnThePage).toBeTruthy();
  });
  test('Should check the preview block on the product detail page', async () => {
    await topNavigation.searchProducts('Кружка "Кот" (черный)');
    await productListing.product('Кружка "Кот" (черный)');
    const previewBlock = await productDetails.previewBlock;
    await expect(previewBlock).toBeTruthy();
  });
  test('Should go to the product details page through the search field', async () => {
    await topNavigation.searchProducts('Таинственный сад');
    await productListing.product('Таинственный сад');
    const title = await baseElements.checkTextContent(productDetails.titleProductDetailsPage);
    await expect(title).toContain('Таинственный сад');
  });
});
