import { test, expect } from '@playwright/test';
import { MainPage } from '../page_objects/mainPage';
import { UserFormPage } from '../page_objects/generalComponents/userFormPage';
import { TopNavigationPage } from '../page_objects/generalComponents/topNavigationPage';
import { BaseElements } from '../helpers/baseElements';
import { PersonalAccountPage } from '../page_objects/generalComponents/personalAccountPage';

test.describe('test userFormPage oz.by website', async function () {
  let mainPage;
  let topNavigation;
  let userForm;
  let baseElements;
  let personalAccount;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.navigateAndAcceptCookie('https://oz.by/');
    topNavigation = new TopNavigationPage(page);
    userForm = new UserFormPage(page);
    baseElements = new BaseElements(page);
    personalAccount = new PersonalAccountPage(page);
  });
  test('Registration form should show error message on invalid input', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.registerByPhoneNumber('173999999');
    const messageAboutNumberPhone = await baseElements.checkTextContent(userForm.errorMessageAboutPhoneNumber);
    await expect(messageAboutNumberPhone).toBe('Введите номер мобильного телефона белорусских операторов');
  });
  test('Should login with valid credentials', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.loginByEmailAndPass();
    const userName = await baseElements.checkTextContent(topNavigation.userName);
    await expect(userName).toContain('oz');
  });
  test('Re-registration should show user-friendly message', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.registerByPhoneNumber('375293589819');
    const messageAboutReRegistration = await baseElements.checkTextContent(userForm.messageAboutReRegistration);
    await expect(messageAboutReRegistration).toContain('Этот номер уже зарегистрирован');
  });
  test('Should successfully log out from the personal account ', async () => {
    await baseElements.click(topNavigation.formLogin);
    await userForm.loginByEmailAndPass();
    await baseElements.click(topNavigation.userName);
    await baseElements.click(personalAccount.exitButton);
    const loginButton = await baseElements.checkTextContent(topNavigation.formLogin);
    await expect(loginButton).toContain('Войти');
  });
});
