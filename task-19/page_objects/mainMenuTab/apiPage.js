const BasePage = require('../basePage');
const BaseElements = require('../../helpers/baseElements');
const topNavigation = require('../generalComponents/topNavigation');



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
