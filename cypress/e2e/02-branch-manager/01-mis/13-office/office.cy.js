// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/13-office/office.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_office } from "./office.po";

describe("13. Office Module Test Cases", function () {
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

  it("13.01. Verify the office list page loads without errors.", function () {
    grid_office.gridOfficePage();
  });

  it("13.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_office.actionButtonCheck();
  });

  it("13.03. Verify the user can view all relevant details of a office, including its associated fields.", function () {
    grid_office.viewOffice();
  });

  it("13.04. Verify that clicking the go back button on the office view page redirects the user to the office list page.", function () {
    grid_office.viewGoBackButton();
  });

  it("13.05. Verify the user can filter inactive offices using the status dropdown on the office list page.", function () {
    grid_office.statusInactiveDropdownCheck();
  });

  it("13.06. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_office.statusActiveDropdownCheck();
  });

  it("13.07. Verify the search returns correct results when searching by office name.", function () {
    grid_office.searchInOfficeManagementName();
  });

  it("13.08. Verify the grid list resets successfully when the reset button is clicked on the office page.", function () {
    grid_office.gridResetButtonCheck();
  });

  it("13.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the office page.", function () {
    grid_office.gridRefreshButtonCheck();
  });

  it("13.10. Verify display the grid list successfully when the Draft button on is clicked on the office page", function () {
    grid_office.gridDraftButton();
  });

  it("13.11. Verify display the grid list successfully when the Draft button off is clicked on the office page", function () {
    grid_office.gridDraftButtonOff();
  });

  it("13.12. Verify that the checkbox functions correctly.", function () {
    grid_office.gridCheckboxCheck();
  });

  it("13.13. Verify that the checkbox lock button operates correctly when selected.", function () {
    grid_office.gridCheckboxLockButtonCheck();
  });

  it("13.14. Verify that the checkbox unlock button operates correctly when selected.", function () {
    grid_office.gridCheckboxUnlockButtonCheck();
  });

  it("13.15. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_office.gridLanguageSwitchCheck();
  });
});
