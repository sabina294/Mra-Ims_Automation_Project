// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/27-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_staging_data } from "./staging-data.po";

describe("27. Staging Data Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("27.01. Verify Staging data grid List page loads successfully", function () {
    create_staging_data.gridStagingDataListPage();
  });

  it("27.02. Verify Staging data generate List page loads successfully", function () {
    create_staging_data.startProcessStagingData();
  });

  it("27.03. Verify that the grid list is refreshed successfully when the refresh button is clicked on the staging data page.", function () {
    create_staging_data.refreshButtonCheck();
  });
});
