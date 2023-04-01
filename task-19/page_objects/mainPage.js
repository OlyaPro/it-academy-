const BasePage = require('./basePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.watchMoreFeatures = "//*[@class='features_PIRx']";
  }
}

module.exports = new MainPage();
