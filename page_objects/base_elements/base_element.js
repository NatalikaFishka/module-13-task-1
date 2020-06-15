class Element {
  constructor(selector) {
    this.selector = selector;
    this.element = element(by.css(selector));
  }
  getElement() {
    return this.element;
  };

  async click() {
    await this.element.click();
  };

  async getText() {
    const elementText = await this.element.getText();
    return elementText;
  };

  async isDisplayed() {
    const isElementDisplayed = await this.element.isDisplayed();
    return isElementDisplayed;
  };

  async sendKeys(key) {
    await this.element.sendKeys(key);
  };

  async waitToDisplay() {
    await browser.wait(async () => await this.element.isPresent(), 5000);
    const isDisplayed = await browser.wait(async () => await this.element.isDisplayed(), 5000);
    return isDisplayed;
  };

  waitToNotDisplay() {
    return browser.wait(async () => !(await this.element.isPresent()) || !(await this.element.isDisplayed()), 5000);
  }
};

module.exports = Element;