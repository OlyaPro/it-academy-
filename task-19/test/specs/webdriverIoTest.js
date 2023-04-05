const { expect } = require('chai');
const topNavigation = require('../../page_objects/generalComponents/topNavigation');
const communityPage = require('../../page_objects/mainMenuTab/communityPage');
const apiPage = require('../../page_objects/mainMenuTab/apiPage');
const mainPage = require('../../page_objects/mainPage');
const docsPage = require('../../page_objects/mainMenuTab/docsPage');

describe('webdriver.io test', () => {
  beforeEach(async () => {
    await mainPage.navigate('https://webdriver.io/');
  });

  it('The side menu in the "Community" header should contain the word "Donate"', async () => {
    await topNavigation.goToCommunity();
    expect(await communityPage.searchtextInSideMenu('Donate')).to.contain('Donate');
  });
  it('should go to the "Automation Protocols" tab through the search field', async () => {
    await topNavigation.searchDocumentOnRequest('Automation Protocols');
    const title = await docsPage.getAutomationProtocolsTitle();
    expect(title).to.contain('Automation Protocols');
  });

  it("Checking for the presence of the Apium subtitle in the main 'Protocols' header in the side menu 'API' tab", async () => {
    await topNavigation.goToAPI();
    expect(await apiPage.searchsubtitleInSideMenu('Appium')).to.contain('Appium');
  });
});
