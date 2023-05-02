exports.BaseElements = class BaseElements {

    constructor(page) {
        this.page = page;
    }

    async click(selector) {
        await this.page.waitForSelector(selector)
        await this.page.click(selector);
    }

    async checkTextContent(selector) {
        return this.page.textContent(selector);
    };

    async getText(selector) {
        return this.page.getByText(selector);
    };

}
