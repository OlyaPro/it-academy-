const BasePage = require('../basePage');

class DocsPage extends BasePage {
    automationProtocols() {
        return $("//h1[text()='Automation Protocols']");
      }
      getAutomationProtocolsTitle() {
       return this.automationProtocols().getTitle();
      }
  }
  
  module.exports = new DocsPage();