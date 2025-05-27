require("dotenv").config();
const dotenv = require("dotenv");
const path = require("path");
const env = process.env.CYPRESS_ENV || "local";
const { defineConfig } = require("cypress");
const envPath = path.resolve(__dirname, `cypress/env/.env.${env}`);
const mochawesome = require("cypress-mochawesome-reporter/plugin");
dotenv.config({ path: envPath });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      mochawesome(on);

      return config;
    },
    video: false,
    testIsolation: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    redirectionLimit: 20,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 3000,
    defaultCommandTimeout: 30000,
    execTimeout: 30000,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    jsonDir: "cypress/reports/json",
    embeddedScreenshots: false,
    overwrite: true,
    html: true,
    json: true,
    inline: true,
    saveJson: true,
  },
  env: {
    BASE_URL: process.env.CYPRESS_BASE_URL,
    TEST_DATA: process.env.CYPRESS_TEST_DATA,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
