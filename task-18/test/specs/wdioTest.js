const { expect } = require('chai');

describe('webdriver.io test', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  after(async () => {
    await browser.closeWindow();
  });
  it('should check that the side menu contains the word "Donate" in the main header "Community"', async () => {
    await $('div:nth-child(1)>a:nth-child(7)').click();
    expect(await $(`ul li:nth-child(6)>a`).getText()).to.contain('Donate');
  });

  it('should go to the "Automation Protocols" tab through the search field', async () => {
    await $('.DocSearch-Button-Placeholder').click();
    await $('.DocSearch-Input').setValue('Automation Protocols');
    await $('li#docsearch-item-0 >a > div').click();
    expect(await $(`div.theme-doc-markdown.markdown header h1`).getTitle()).to.contain('Automation Protocols');
  });

  it('should check for the presence of the "Apium" subheader of the main header "Protocols" of the side menu', async () => {
    await $('div:nth-child(1) > a:nth-child(4)').click();
    await $('ul > li:nth-child(2) > div > a').click();
    const appiumSubHeader = await $(`li:nth-child(2) ul li:nth-child(1) a`);
    expect(await appiumSubHeader.getText()).to.equal('Appium');
  });
});
