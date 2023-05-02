exports.ProductListingPage = class ProductListingPage {
  constructor(page) {
    this.page = page;

    this.productName = async (productName) => {
      return `img[alt='${await productName}']`;
    };
  }

  async getProduct(nameOfProduct) {
    const productSelector = await this.productName(nameOfProduct);
    await this.page.waitForSelector(productSelector);
    await this.page.isEnabled(productSelector);
    await this.page.click(productSelector);
  }
};
