exports.TopNavigationPage = class TopNavigationPage {
    constructor(page) {
        this.page = page;
        this.searchBtnItem = '.top-panel__search__btn__item';
    };

    linkToTheBonusProgram() {
        return "li:nth-child(7) a[href*='/bonus']";
    };
    callbackForm() {
        return "[onclick='PhoneCall.open(); return false;']";
    };

    formLogin() {
        return '.top-panel__userbar__auth__lbl';
    };

    shoppingCart() {
        return '.top-panel__userbar__cart__item u';
    };

    NumberNextFavoritesNav() {
        return 'top-panel__userbar__favs__count'
    };
    async searchProducts(product) {
        const searchField = await this.page.getByPlaceholder('Введите название товара');
        await searchField.fill(product);
        const searchBtnItem = await this.page.waitForSelector(this.searchBtnItem);
        await searchBtnItem.click();
    }
}