const BasePage = require('../basePage');



class CommunityPage extends BasePage {
  sideHeaderDonate() {
    return $("//*[@href='/community/donate']");
  }

  async searchtextInSideMenu(text) {
    
    return this.sideHeaderDonate().getText();
  }
}

module.exports = new CommunityPage();
