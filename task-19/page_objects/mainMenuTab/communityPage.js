const BasePage = require('../basePage');
const topNavigation = require('..//generalComponents/topNavigation');

class CommunityPage extends BasePage {
  sideHeaderDonate() {
    return $("//*[@href='/community/donate']");
  }

  async searchtextInSideMenu(text) {
    await topNavigation.goToCommunity();
    return this.sideHeaderDonate().getText();
  }
}

module.exports = new CommunityPage();
