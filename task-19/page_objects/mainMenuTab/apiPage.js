const BasePage = require('../basePage');
const BaseElements = require('../../helpers/baseElements');
<<<<<<< HEAD

=======
const topNavigation = require('../generalComponents/topNavigation');
>>>>>>> 0555eaa519a82a3d6074f94b646f65978c1fd4a6


class ApiPage extends BasePage {
    get sideMenuProtocols() {
        return $("//*[contains(@class,'menu__list')]/a[@href='/docs/api/protocols']");
    }

    appiumSubHeader() {
        return $("//*[@class='menu__list']");
    }

    goToProtocols() {
        BaseElements.click(this.sideMenuProtocols);
    }

    async searchsubtitleInSideMenu(subtitle) {
        
        await this.goToProtocols();
        return this.appiumSubHeader().getText();
    }
}
module.exports = new ApiPage();
