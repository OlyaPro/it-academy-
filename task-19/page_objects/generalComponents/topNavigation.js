const BasePage = require('../basePage');
const BaseElements = require('../../helpers/baseElements');



class TopNavigation extends BasePage {
  get apiLink() {
    return $("//*[@class='navbar__items']/a[@href='/docs/api']");
  }
  goToAPI() {
    BaseElements.click(this.apiLink);
  }
  get communityLink() {
    return $("//*[@class='navbar__items']/a[position()=6]");
  }
  goToCommunity() {
    BaseElements.click(this.communityLink);
  }
  get searchField() {
    return $('.DocSearch-Button-Placeholder');
  }

  get searchInput() {
    return $('.DocSearch-Input');
  }

  get SearchDocument() {
    return $("//*[@class='DocSearch-Hit']/a/div");
  }

  titleDocument() {
    return $("//h1[text()='Automation Protocols']");
  }

  async searchDocumentOnRequest(docName) {
    await BaseElements.click(this.searchField);
    await this.searchInput.setValue(docName);
    await BaseElements.click(this.SearchDocument);
    return this.titleDocument().getTitle()

  }

}
module.exports = new TopNavigation();
