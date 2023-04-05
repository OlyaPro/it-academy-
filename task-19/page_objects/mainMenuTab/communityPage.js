const BasePage = require('../basePage');
<<<<<<< HEAD

=======
const topNavigation = require('../generalComponents/topNavigation');
>>>>>>> 0555eaa519a82a3d6074f94b646f65978c1fd4a6

class CommunityPage extends BasePage {
  sideHeaderDonate() {
    return $("//*[@href='/community/donate']");
  }

  async searchtextInSideMenu(text) {
    
    return this.sideHeaderDonate().getText();
  }
}

module.exports = new CommunityPage();
