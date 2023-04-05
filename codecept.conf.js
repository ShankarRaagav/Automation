const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "Tests/automation.js", 
  output: "./output",
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: "chromium",
    },
    AssertWrapper: {
      require: "codeceptjs-assert",
    },
    MyPlaywright: {
      require: "./Helpers/playwrighthelper.js",
    },
  },
  include: {
    I: "./steps_file.js",
    TodosPage: "./Pages/todoPages.js",
    Omayo: "./Pages/omayo.js",  
  },
  name: "learningrepo-playwright",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
      defaultIgnoredSteps: [],
      ignoredSteps: ["amOnPage", "send*", "execute*", "run*", "assert*", "waitFor*", "waitEmail*"],
      minTimeout: 5000,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
      outputDir: "output/allure-results",
    },
    autoDelay: {
      enabled: true,
      delayBefore: "1000",
    },
  },
};
