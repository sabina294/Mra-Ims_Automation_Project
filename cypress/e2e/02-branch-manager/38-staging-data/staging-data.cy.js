// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/38-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_staging_data } from "./staging-data.po";

describe("38. Staging Data Module Test Cases", function () {
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

  it("38.01. Verify Staging data grid List page loads successfully", function () {
    create_staging_data.gridStagingDataListPage();
  });

  // it("38.02. Verify that the grid list is refreshed successfully when the refresh button is clicked on the staging data page.", function () {
  //   create_staging_data.gridRefreshButtonCheck();
  // });
});
