const Header = require('./header');
const Footer = require('./footer');
const LogInModal = require('./login_modal');
const EC = protractor.ExpectedConditions;

class BasePage {
  constructor() {
    this.Header = new Header();
    this.Footer = new Footer();
    this.LogInModal = new LogInModal();
  };

  async open(url) {
    await browser.get(url);
  };

  async getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();
    return currentUrl;
  };

  async getTitle() {
    const pageTitle = await browser.getTitle();
    return pageTitle;
  };

  sleep(waitInMilliseconds) {
    return browser.sleep(waitInMilliseconds);
  };

  goBack() {
    return browser.navigate().back();
  };

  waitForUrl(url) {
    return browser.wait(EC.urlIs(url), 5000);
  };

  async scrollToElement(element) {
    const { y } = await element.getLocation();
    await browser.executeScript('window.scrollTo(0,arguments[0]);', y);
    return;
  };

  setSessionStorage(key, value) {
    return browser.executeScript(`window.sessionStorage.setItem('${key}', ${value});`);
  };

  addCookie(key, value) {
    return browser.manage().addCookie({ name: key, value: value });
  };

  getCookie(key) {
    return browser.manage().getCookie(key);
  };
};

module.exports = BasePage;