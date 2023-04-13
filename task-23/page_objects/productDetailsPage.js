exports.ProductDetailsPage = class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.buttonFavourites = "//div[@class='b-product__media']//*[@class='b-product-action__text b-product-action__text_in']"
    }
    titleProductDetailsPage() {
        return '.b-product-title__heading>h1';
    }

    cart() {
        return '.i-button__text';
    };
    image() {
        return '.pswipe-gallery-trigger';
    };

    ratingStars() {
        return 'b-product-title__rating-stars b-product-title__rating-stars';
    };

    bonusLabel() {
        return 'bonus-label bonus-label_lg';
    };

    descriptionProduct() {
        return '#truncatedBlock.b-description__sub';
    };

    priceProduct() {
        return "//*[@class='b-product-control__row']/span/text()[position()=1]";
    };

    previewBlock() {
        return "div.b-gallery";
    };

    async addFavourites() {
        await this.page.waitForSelector(this.buttonFavourites);
        await this.page.waitForTimeout(1000);
        await this.page.click(this.buttonFavourites);
    }
};