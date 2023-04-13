
exports.CartPage = class CartPage {

    constructor(page) {

        this.page = page;
        this.fieldForQuantityOfGoods = '.i-amount-select input';
        this.updatedQuantity = 'div.i-amount-select>input';
        this.productCheckBoxAll = "[name='checkAll']";
        this.buttonDelete = '.i-button.i-button_danger.i-button_small.remove';
        this.buttonconfirmDelete = '.i-button.i-button_danger.i-button_small.remove-yes';
        this.textAboutCart = '.i-textual__plain';
        this.buttonMoveToFavourites = '.i-button.i-button_small.addto-favs';
        this.buttonConfirmMoveToFavourites = "div.goods-table-popup__cell>button[class = 'i-button i-button_danger i-button_small addto-favs-yes']";

    };

    productInTheCart() {
        return "a[class='goods-table-cell__line goods-table-cell__line_title']";

    };

    async changeItemQuantityInCart(quantity) {
        await this.page.click(this.fieldForQuantityOfGoods);
        await this.page.getByRole('cell', { name: '1 2 3 4 5 6 7 8 9 10+' }).getByText(quantity).click();
        await this.page.waitForTimeout(1000);
        return await this.page.getAttribute(this.fieldForQuantityOfGoods, 'value')

    };

    async removeItemFromCart() {
        await this.page.check(this.productCheckBoxAll);
        await this.page.waitForLoadState();
        await this.page.click(this.buttonDelete);
        await this.page.click(this.buttonconfirmDelete);
        return await this.page.innerText(this.textAboutCart);
    }
};

