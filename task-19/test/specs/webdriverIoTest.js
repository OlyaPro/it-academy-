const { expect } = require('chai');
const topNavigation = require('../../page_objects/generalComponents/topNavigation');
const communityPage = require('../../page_objects/mainMenuTab/communityPage');
const apiPage = require('../../page_objects/mainMenuTab/apiPage');
const mainPage = require('../../page_objects/mainPage');

describe('webdriver.io test', () => {
  beforeEach(async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it('The side menu in the "Community" header should contain the word "Donate"', async () => {
    expect(await communityPage.searchtextInSideMenu('Donate')).to.contain('Donate');
  });
  it('should go to the "Automation Protocols" tab through the search field', async () => {
    expect(await topNavigation.searchDocumentOnRequest('Automation Protocols')).to.contain('Automation Protocols');
  });

  it("Checking for the presence of the Apium subtitle in the main 'Protocols' header in the side menu 'API' tab", async () => {
    expect(await apiPage.searchsubtitleInSideMenu('Appium')).to.contain('Appium');
  });
});
