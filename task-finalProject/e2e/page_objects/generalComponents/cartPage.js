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

  get productInTheCart() {
    return "a[class='goods-table-cell__line goods-table-cell__line_title']";

  };

  get confirmAndPlaceOrder() {
    return '#checkout-block-submit'
  };
  get bonusAccount() {
    return 'div.deal-form-main__wrap span'
  };

  async changeItemQuantityInCart(quantity) {
    await this.page.click(this.fieldForQuantityOfGoods);
    await this.page.getByRole('cell', { name: '1 2 3 4 5 6 7 8 9 10+' }).getByText(quantity).click();
    await this.page.waitForSelector(await this.fieldForQuantityOfGoods);
    await this.page.waitForTimeout(1000);
    await this.page.isEnabled(this.fieldForQuantityOfGoods);
    return this.page.getAttribute(await this.fieldForQuantityOfGoods, 'value')

  };

  async removeItemFromCart() {
    await this.page.check(this.productCheckBoxAll);
    await this.page.waitForSelector(this.buttonDelete);
    await this.page.waitForTimeout(1000);
    await this.page.click(this.buttonDelete);
    await this.page.waitForSelector(this.buttonconfirmDelete);
    await this.page.click(this.buttonconfirmDelete);
    return this.page.innerText(this.textAboutCart);
  }
};

