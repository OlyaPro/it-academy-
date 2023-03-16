const { expect } = require('chai');

describe('webdriver.io test', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  after(async () => {
    await browser.closeWindow();
  });
  it('should check that the side menu contains the word "Donate" in the main header "Community"', async () => {
    await $("//*[@class='navbar__items']/a[position()=6]").click();
    expect(await $("//*[@href='/community/donate']").getText()).to.contain('Donate');
  });

  it('should go to the "Automation Protocols" tab through the search field', async () => {
    await $('.DocSearch-Button-Placeholder').click();
    await $('.DocSearch-Input').setValue('Automation Protocols');
    await $("//*[@class='DocSearch-Hit']/a/div  ").click();
    expect(await $("//h1[text()='Automation Protocols']").getTitle()).to.contain('Automation Protocols');
  });

  it("check the presence of the 'Apium' subheader under the 'Protocols' main header in the side menu, displayed upon select the 'API'from the main menu", async () => {
    await $("//*[@class='navbar__items']/a[@href='/docs/api']").click();
    await $("//*[contains(@class,'menu__list')]/a[@href='/docs/api/protocols']").click();
    const appiumSubHeader = await $("//*[@href='/docs/api/appium']");
    expect(await appiumSubHeader.getText()).to.equal('Appium');
  });
});
