exports.ProductDetailsPage = class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.buttonFavouritesIn = "//div[@class='b-product__media']//*[@class='b-product-action__text b-product-action__text_in']";
    this.buttonFavouritesOut = "//div[@class='b-product__media']//*[@class='b-product-action__text b-product-action__text_out']";
  }

  get titleProductDetailsPage() {
    return '.b-product-title__heading>h1';
  }

  get cart() {
    return '.i-button__text';
  }
  get image() {
    return '.pswipe-gallery-trigger';
  }

  get ratingStars() {
    return 'b-product-title__rating-stars b-product-title__rating-stars';
  }

  get bonusLabel() {
    return 'bonus-label bonus-label_lg';
  }

  get descriptionProduct() {
    return '#truncatedBlock.b-description__sub';
  }

  get priceProduct() {
    return "//*[@class='b-product-control__row']/span/text()[position()=1]";
  }

  get previewBlock() {
    return 'div.b-gallery';
  }

  async checkFavoriteItemsCounter() {
    await this.page.waitForSelector(this.buttonFavouritesIn);
    await this.page.click(this.buttonFavouritesIn);
    const buttonFavouritesOut = await this.page.waitForSelector(this.buttonFavouritesOut);
    await buttonFavouritesOut.click();
    await this.page.waitForTimeout(1000);
  }
};
