import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { UserFormPage } from '../page_objects/generalComponents/userFormPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { PromAndDiscPage } from '../page_objects/mainNaviListOfTheSideMenu/promAndDiscPage';
import { CommByPhone } from '../page_objects/generalComponents/commByPhone';
import { ProductDetailsPage } from '../page_objects/productDetailsPage';
import { FooterPage } from '../page_objects/generalComponents/footerPage';
import { ProductListingPage } from '../page_objects/ProductListingPage';
import { CartPage } from '../page_objects/generalComponents/cartPage';
import { BonusProgramPage } from '../page_objects/generalComponents/bonusProgramPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test oz.by website', async function () {
  let commByPhone;
  let mainPage;
  let topNavigation;
  let userForm;
  let promotionsAndDiscounts;
  let productDetails;
  let footer;
  let productListing;
  let cart;
  let bonusProgram;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://oz.by/');

    mainPage = new MainPage(page);
    topNavigation = new TopNavigationPage(page);
    userForm = new UserFormPage(page);
    promotionsAndDiscounts = new PromAndDiscPage(page);
    commByPhone = new CommByPhone(page);
    productDetails = new ProductDetailsPage(page);
    footer = new FooterPage(page);
    productListing = new ProductListingPage(page);
    cart = new CartPage(page);
    bonusProgram = new BonusProgramPage(page);
    baseElements = new BaseElements(page);
  });

  test('Should go to the main page', async ({ page }) => {
    await expect(page.url()).toBe('https://oz.by/');
  });

  test('Should check radio button "interval time" in the form of "Ordering a callback" in the header', async () => {
    await baseElements.click(topNavigation.callbackForm());
    const radioButtonTimeInterval = await commByPhone.checkStatusRadioButtonWithTimeInterval();
    await expect(radioButtonTimeInterval).toBe(true);
  });

  test('Should open the "Акции и скидки" page', async () => {
    await baseElements.click(mainPage.ItemPromAndDiscPageInSideNavMenu());
    const titlePromAndDiscPage = await baseElements.checkTextContent(promotionsAndDiscounts.header());
    await expect(titlePromAndDiscPage).toContain('Акции и скидки');
  });

  test('Should check the error message in the registration form', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.registerByPhoneNumber('293888888');
    const messageAboutNumberPhone = await baseElements.checkTextContent(userForm.errorMessageAboutPhoneNumber());
    await expect(messageAboutNumberPhone).toBe('Введите номер мобильного телефона белорусских операторов');
  });

  test('Should check the price  on the product detail page', async () => {
    await topNavigation.searchProducts('Бульонница "Eclipse"');
    const price = await productDetails.priceProduct();
    await expect(price).toBeTruthy();
  });

  test('Should login with valid credentials', async () => {
    await baseElements.click(topNavigation.formLogin());
    await expect(await userForm.loginByEmailAndPass()).toContain('oz');
  });

  test('Should check bonus-label on the product detail page', async () => {
    await topNavigation.searchProducts('Машинка "Бублик"');
    await productListing.product('Машинка "Бублик"');
    const ratingStarsrOnThePage = await productDetails.bonusLabel();
    await expect(ratingStarsrOnThePage).toBeTruthy();
  });

  test('Footer should have links', async () => {
    expect(await footer.getFooterLinks()).toBeTruthy();
  });

  test('Should be a link to the text content in the footer', async () => {
    const footerLink = await baseElements.checkTextContent(footer.footerLinksCount());
    expect(await footerLink).not.toEqual('');
  });

  test('Should add the product to the cart', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Десять негритят');
    await productListing.product('Десять негритят');
    await baseElements.click(productDetails.cart());
    await baseElements.click(topNavigation.shoppingCart());
    const item = await baseElements.checkTextContent(cart.productInTheCart());
    await expect(item).toContain('Десять негритят');
  });

  test('Should change item quantity in the cart', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Десять негритят');
    await productListing.product('Десять негритят');
    await baseElements.click(productDetails.cart());
    await baseElements.click(topNavigation.shoppingCart());
    const ItemQuantityInCart = await cart.changeItemQuantityInCart('2');
    await expect(await ItemQuantityInCart).toContainEqual('2');
  });

  test('Should check the product description on the product detail page', async () => {
    await topNavigation.searchProducts('Подушка "7 котов"');
    const descriptionProduct = await baseElements.checkTextContent(productDetails.descriptionProduct());
    await expect(descriptionProduct).not.toEqual('');
  });

  test('Should open Bonus Program tab', async () => {
    await baseElements.click(topNavigation.linkToTheBonusProgram());
    const headerBonusProgramPage = await baseElements.checkTextContent(bonusProgram.headerPage());
    await expect(headerBonusProgramPage).toContain('Кешбэк за покупки');
  });

  test('Should be a product image on the product details page', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Термокружка (арт. BH-4456)');
    await productListing.product('Термокружка (арт. BH-4456)');
    const image = await productDetails.image();
    await expect(image).toBeTruthy();
  });

  test('Should check the product counter next to the Favorites navigation', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Подарочный набор "Кот"');
    await productListing.product('Подарочный набор "Кот"');
    await productDetails.addFavourites();
    const numberNearFavoriteNav = await topNavigation.NumberNextFavoritesNav();
    await expect(numberNearFavoriteNav).toBeTruthy();
  });

  test('Should check rating-stars on the product detail page', async () => {
    await topNavigation.searchProducts('Мягкая игрушка "Гусь" (90 см)');
    await productListing.product('Мягкая игрушка "Гусь" (90 см)');
    const ratingStarsrOnThePage = await productDetails.ratingStars();
    await expect(ratingStarsrOnThePage).toBeTruthy();
  });

  test('Should go to the product details page through the search field', async () => {
    await topNavigation.searchProducts('Шампунь для волос "Масло какао"');
    const title = await baseElements.checkTextContent(productDetails.titleProductDetailsPage());
    await expect(title).toContain('Шампунь для волос "Масло какао"');
  });

  test('Should remove all item from cart', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.loginByEmailAndPass();
    await topNavigation.searchProducts('Десять негритят');
    await productListing.product('Десять негритят');
    await baseElements.click(productDetails.cart());
    await baseElements.click(topNavigation.shoppingCart());
    const pageAfterDeleteInfo = await cart.removeItemFromCart();
    await expect(pageAfterDeleteInfo).toContain('Чтобы найти товары, используйте поиск');
  });

  test('Should check the message when re-registering on the site', async () => {
    await baseElements.click(topNavigation.formLogin());
    await userForm.registerByPhoneNumber('+375293589819');
    const messageAboutReRegistration = await baseElements.checkTextContent(userForm.messageAboutReRegistration());
    await expect(messageAboutReRegistration).toContain('Этот номер уже зарегистрирован');
  });

  test('Should check the preview block on the product detail page', async () => {
    await topNavigation.searchProducts('Кружка "Кот" (черный)');
    await productListing.product('Кружка "Кот" (черный)');
    const previewBlock = await productDetails.previewBlock();
    await expect(previewBlock).toBeTruthy();
  });
});
