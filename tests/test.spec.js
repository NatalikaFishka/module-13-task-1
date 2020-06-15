const { browser } = require("protractor");
const constants = require('../constants');
const PageFactory = require('../page_objects/pageFactory');

describe('Test training.by with appium on AVD', () => {

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
    browser.executeScript('window.sessionStorage.clear();');
    browser.manage().deleteAllCookies();
  });

  it('Go to training.by and verify correct page title', async () => {
    const currentPage = PageFactory.getPage('Home')
    await currentPage.open();
    const pageTitle = await currentPage.getTitle();
    expect(pageTitle).toEqual(constants.EXPECTED_HOME_PAGE_TITLE);
  });

  it(`Go to training.by and and confirm that there is ${constants.LANGUAGE_OPTIONS_COUNT} available language options`, async () => {
    const currentPage = PageFactory.getPage('Home')
    await currentPage.open();
    await currentPage.Header.languageButton.click();
    const countOfLang = await currentPage.Header.languageSelectionPanel.getCount();
    expect(countOfLang).toEqual(constants.LANGUAGE_OPTIONS_COUNT);
  });

  it('Go to training.by and switch to English language', async () => {
    const currentPage = PageFactory.getPage('Home')
    await currentPage.open();
    await currentPage.Header.languageButton.click();
    await currentPage.Header.languageSelectionPanel.clickElementByText(constants.ENGLISH_LANGUAGE_OPTION);
    let isUrlMatch = await currentPage.waitForUrl(constants.ENGLISH_HOME_PAGE_URL);
    expect(isUrlMatch).toBeTruthy();
  });
})