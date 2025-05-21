require("dotenv").config();
const dotenv = require("dotenv");
const path = require("path");
const env = process.env.CYPRESS_ENV || "local";
const envPath = path.resolve(__dirname, `cypress/env/.env.${env}`);

dotenv.config({ path: envPath });
console.log(`[CYPRESS CONFIG] Loaded environment: ${envPath}`);
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
  env: {
    BASE_URL: process.env.CYPRESS_BASE_URL,
    TEST_DATA: process.env.CYPRESS_TEST_DATA,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true,
  },
});
