exports.UserFormPage = class UserFormPage {
  constructor(page) {
    this.page = page;
    this.LoginButton = '.i-popup__line #loginFormRegisterLink';
    this.phoneNumber = '#registerForm input[name="cl_phone"]';
    this.LoginByEmailLink = '#loginFormLoginEmailLink';
    this.emailInput = "div.i-input-group__inner div [placeholder='Электронная почта']";
    this.passwordInput = "[placeholder='Пароль']";
    this.buttonSubmit = '//div[@data-tab-content="email"]//button[@class="i-button i-button_full-width i-button_large i-button_primary i-popup__form-button"]'
    this.userName = '.top-panel__userbar__user__name__inner';

  };
  async registerByPhoneNumber(phoneNumber) {
    await this.page.click(this.LoginButton);
    await this.page.fill(this.phoneNumber, phoneNumber);
    await this.page.getByRole('button', { name: 'Зарегистрироваться и войти' }).click();

  };
  get errorMessageAboutPhoneNumber() {
    return 'div.i-input-group__popover_visible #test>div.i-popover__main>div';
  };

  get messageAboutReRegistration() {
    return '//div[@class="i-popover__line"][contains(text(), "Этот номер уже зарегистрирован")]';
  };

  async loginByEmailAndPass() {
    await this.page.click(this.LoginByEmailLink);
    await this.page.waitForSelector(this.LoginByEmailLink);
    await this.page.fill(this.emailInput, 'oi277176@gmail.com');
    await this.page.fill(this.passwordInput, 'zxVbI5');
    await this.page.isEnabled(this.buttonSubmit);
    await this.page.click(this.buttonSubmit);
    await this.page.waitForNavigation();

  };
}



