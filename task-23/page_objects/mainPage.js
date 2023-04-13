
exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;

    }
    async navigate(url) {
        await this.page.goto(url);
    }

    get ItemPromAndDiscPageInSideNavMenu() {
        return 'li.main-nav__list__li:nth-child(1) > a'

    }

}

