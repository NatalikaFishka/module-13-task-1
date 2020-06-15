class Collection {
  constructor(selector) {
    this.collection = element.all(by.css(selector));
  };
  async getCount() {
    const collectionCount = await this.collection.count();
    return collectionCount;
  };

  async getTexts() {
    const collectionTexts = await this.collection.getText();
    return collectionTexts;
  };

  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.collection.getText();
    const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
      throw new Error(`No element with [${textToClick}] text found!`);
    }
    await this.collection.get(elementToClickIndex).click();
  };

  async getElementByText(innerText) {
    const arrayOfElementTexts = await this.collection.getText();
    const elementIndex = arrayOfElementTexts.indexOf(innerText);
    if (elementIndex === -1) {
      throw new Error(`No element with [${innerText}] text found!`);
    }
    const elementByText = await this.collection.get(elementIndex);
    return elementByText;
  };
};

module.exports = Collection;