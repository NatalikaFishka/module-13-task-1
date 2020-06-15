const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['tests/*.spec.js'],
  capabilities: {
    browserName: 'Chrome',
    platformName: 'Android',
    deviceName: 'myDevice',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--disable-fre', '--no-default-browser-check', '--no-first-run'],
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },
  rootElement: 'html.ng-scope',
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: false,
      displaySpecDuration: true
    }));
  }
}