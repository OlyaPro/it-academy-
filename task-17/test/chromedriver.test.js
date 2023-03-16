const { Builder, By } = require("selenium-webdriver");
const { expect } = require('chai');


describe('Chromedriver test', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
    });
    beforeEach(async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        
    });
    after(async () => {
        await driver.quit();
    });

    it('should check the text of the main title "ChromeDriver"', async () => {
        const mainTitle = await driver.findElement(By.css("h1[dir='ltr'] span"));
        expect(await mainTitle.getText()).to.contain('ChromeDriver');    
    });

    it('should check that the main title is "Chrome Extensions" with the new highlight', async function () {
        await driver.findElement(By.css('ul li:nth-child(3) div.PsKE7e.qV4dIc div a')).click();
        const newMainTitle = await driver.findElement(By.css("h1[dir='ltr'] span"));
        await driver.executeScript('arguments[0].style.backgroundColor = "green"', newMainTitle);
        expect(await newMainTitle.getText()).to.equal('Chrome Extensions');
    });

    it('should check that the first link contains the word "driver" when searching for "driver" on the search page', async function () {
        await driver.findElement(By.css("span svg[class='vu8Pwe tCHXDc YSH9J']")).click();
        await driver.findElement(By.css("div input[type='search']")).sendKeys('driver');
        await driver.findElement(By.css("span svg[class='vu8Pwe']")).click();
        const firstLinkText = await driver.findElement(By.css("div:nth-child(1) > div > div.yDWqEe > b"));
        expect(await firstLinkText.getText()).to.include('driver');
    });

    it('should check that the URL contains "/mobile-emulation" in the "Mobile Emulation" tab', async function () {
        await driver.findElement(By.css(' li.VsJjtf.oXBWEc  div  div a')).click();
        await driver.findElement(By.linkText('Mobile Emulation')).click();
        let CurrentUrl = await driver.getCurrentUrl();
        expect(CurrentUrl).to.include('/mobile-emulation');
    });
});