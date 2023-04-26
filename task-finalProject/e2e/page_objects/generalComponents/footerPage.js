exports.FooterPage = class FooterPage {
    constructor(page) {
      this.page = page;
      this.footer = '.footer-full__nav';
    };
    
    async getFooterLinks() {
    await this.page.waitForLoadState('load');
    return await this.page.waitForSelector(this.footer);
    };
  
    get footerLinksCount() {
     return '.footer-full__nav li>a:nth-child(1)'; 
    }
  };
  
  

  