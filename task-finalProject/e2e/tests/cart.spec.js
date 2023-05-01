import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { UserFormPage } from '../page_objects/generalComponents/userFormPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { ProductDetailsPage } from '../page_objects/productDetailsPage';
import { ProductListingPage } from '../page_objects/ProductListingPage';
import { CartPage } from '../page_objects/generalComponents/cartPage';
import { BaseElements } from '../helpers/baseElements';

test.describe('test cartPage oz.by website', async function () {
  let mainPage;
  let topNavigation;
  let userForm;
  let productDetails;
  let productListing;
  let cart;
  let baseElements;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    baseElements = new BaseElements(page);
    userForm = new UserFormPage(page);
    topNavigation = new TopNavigationPage(page);
    productDetails = new ProductDetailsPage(page);
    productListing = new ProductListingPage(page);
    cart = new CartPage(page);

    await mainPage.navigateAndAcceptCookie('https://oz.by/');
    await baseElements.click(topNavigation.formLogin);
    await userForm.loginByEmailAndPass();
  });

  test('Should add the product to the cart', async () => {
    await topNavigation.searchProducts('Десять негритят');
    await productListing.getproduct('Десять негритят');
    await baseElements.click(productDetails.cart);
    await baseElements.click(topNavigation.shoppingCart);
    const item = await baseElements.checkTextContent(cart.productInTheCart);
    await expect(item).toContain('Десять негритят');
  });

  test('Should change item quantity in the cart', async () => {
    await topNavigation.searchProducts('Десять негритят');
    await productListing.getproduct('Десять негритят');
    await baseElements.click(productDetails.cart);
    await baseElements.click(topNavigation.shoppingCart);
    const itemQuantityInCart = await cart.changeItemQuantityInCart('2');
    const expectedQuantity = '2';
    await expect(await itemQuantityInCart).toEqual(expectedQuantity);
  });

  test("Should check the presence of the 'Confirm and Place Order' form", async () => {
    await topNavigation.searchProducts('Десять негритят');
    await productListing.getproduct('Десять негритят');
    await baseElements.click(productDetails.cart);
    await baseElements.click(topNavigation.shoppingCart);
    const ConfirmAndPlaceOrder = await baseElements.getText(cart.confirmAndPlaceOrder);
    await expect(ConfirmAndPlaceOrder).toBeTruthy();
  });

  test("Should check the presence bonus account in the 'Confirm and Place Order' form", async () => {
    await topNavigation.searchProducts('Десять негритят');
    await productListing.getproduct('Десять негритят');
    await baseElements.click(productDetails.cart);
    await baseElements.click(topNavigation.shoppingCart);
    const bonusAccount = await baseElements.checkTextContent(cart.bonusAccount);
    await expect(bonusAccount).toContain('Бонусный счёт');
  });

  test('Should remove all item from cart', async () => {
    await topNavigation.searchProducts('Десять негритят');
    await productListing.getproduct('Десять негритят');
    await baseElements.click(productDetails.cart);
    await baseElements.click(topNavigation.shoppingCart);
    const pageAfterDeleteInfo = await cart.removeItemFromCart();
    await expect(pageAfterDeleteInfo).toContain('Чтобы найти товары, используйте поиск');
  });
});
