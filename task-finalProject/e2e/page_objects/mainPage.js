exports.MainPage = class MainPage {

    constructor(page) {
        this.page = page;
        this.acceptButton = '#button-accept-cookie';
    }
    async navigateAndAcceptCookie(url) {
        await this.page.goto(url);
        await this.page.waitForSelector(this.acceptButton);
        await this.page.click(this.acceptButton);
        
    }

    get ItemPromAndDiscPageInSideNavMenu() {
        return 'li.main-nav__list__li:nth-child(1) > a'
    }

}

