// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/45-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_staging_data } from "../../../../support/page-objects/staging-data.po";

describe("45. Staging Data Module Test Cases", function () {
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

  it("45.01. Verify that the Staging Data Grid List page loads successfully", function () {
    create_staging_data.gridStagingDataListPage();
  });

  it("45.02. Verify that the Staging Data Generate List page loads successfully", function () {
    create_staging_data.startProcessStagingData();
  });

  it("45.03. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Staging Data page", function () {
    create_staging_data.refreshButtonCheck();
  });

  it("45.04. Verify that the grid list updates successfully when a Field Officer is selected from the dropdown on the Staging Data page", function () {
    create_staging_data.fieldOfficerDropdownCheck();
  });

  it("45.05. Verify that the grid list updates successfully when a Samity is selected from the dropdown on the Staging Data page", function () {
    create_staging_data.samityDropdownCheck();
  });

  it("45.06. Verify that the grid list updates successfully when a Status is selected from the dropdown on the Staging Data page", function () {
    create_staging_data.StatusDropdownCheck();
  });

  it("45.07. Verify that the search button is available and functions correctly in the Staging Data list", function () {
    create_staging_data.searchButtonCheck();
  });

  it("45.08. Verify that the Delete button is available and functions correctly in the Staging Data list", function () {
    create_staging_data.deleteButtonCheck();
  });

  it("45.09. Verify that the grid list content changes correctly from English to Bangla", function () {
    create_staging_data.gridLanguageSwitchCheck();
  });

});
