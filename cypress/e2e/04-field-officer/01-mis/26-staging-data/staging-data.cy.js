// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/26-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_staging_data } from "./staging-data.po";

describe("26. Staging Data Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("26.01. Verify Staging Data Grid List Page loads successfully", function () {
    grid_staging_data.gridStagingDataListPage();
  });

  it("26.02. Verify Staging data dropdown select field officer List page loads successfully", function () {
    grid_staging_data.selectFieldOfficer();
  });

  it("26.03. Verify Staging data dropdown select samity List page loads successfully", function () {
    grid_staging_data.selectSamity();
  });

  it("26.04. Verify that the Refresh button works successfully", function () {
    grid_staging_data.refreshButtonCheck();
  });

  it("26.05. Verify Staging Data: the list displays the correct breadcrumb.", function () {
    grid_staging_data.listBreadcrumbCheck();
  });

  it("26.06. Verify Staging Data: the grid displays all required columns.", function () {
    grid_staging_data.requiredGridColumnsCheck();
  });

  it("26.07. Verify Staging Data: grid rows contain valid record data.", function () {
    grid_staging_data.gridRecordDataCheck();
  });

  it("26.08. Verify Staging Data: total members is a non-negative integer.", function () {
    grid_staging_data.memberCountCheck();
  });

  it("26.09. Verify Staging Data: clearing search restores the original record.", function () {
    grid_staging_data.clearSearchRestoresGridCheck();
  });

  it("26.10. Verify Staging Data: Refresh keeps the list available.", function () {
    grid_staging_data.refreshRetainsListCheck();
  });

  it("26.11. Verify Staging Data: Samity Name supports ascending sorting.", function () {
    grid_staging_data.ascendingSortCheck();
  });

  it("26.12. Verify Staging Data: Samity Name supports descending sorting.", function () {
    grid_staging_data.descendingSortCheck();
  });

  it("26.13. Verify Staging Data: pagination starts on page one with Previous disabled.", function () {
    grid_staging_data.firstPagePaginationCheck();
  });

  it("26.14. Verify Samity IDs are unique on the displayed page.", function () {
    grid_staging_data.uniqueSamityIdsCheck();
  });

  it("26.15. Verify the Field Officer filter returns the selected officer records.", function () {
    grid_staging_data.fieldOfficerResultCheck();
  });

  it("26.16. Verify the Samity filter returns the selected Samity.", function () {
    grid_staging_data.samityResultCheck();
  });

  it("26.17. Verify the Status filter returns only the selected status.", function () {
    grid_staging_data.statusResultCheck();
  });

  it("26.18. Verify Next and Previous change pages or remain disabled at the single-page boundary.", function () {
    grid_staging_data.nextPreviousPageCheck();
  });

  it("26.19. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_staging_data.gridLanguageSwitchCheck();
  });
});
