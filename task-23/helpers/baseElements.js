exports.BaseElements = class BaseElements {

    constructor(page) {
        this.page = page;
    }

    async click(selectorOrElement) {
        await this.page.click(selectorOrElement);
    }

    async checkTextContent(selectorOrElement) {
        return await this.page.textContent(selectorOrElement);
    };

}
