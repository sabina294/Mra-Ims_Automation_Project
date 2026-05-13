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
  it("13.01. Verify that the office list page loads successfully without errors.", function () {
    grid_office.gridOfficePage();
  });

  it("13.02. Verify that the action button performs the expected action successfully.", function () {
    grid_office.actionButtonCheck();
  });

  it("13.03. Verify that the user can view all relevant office details, including associated fields.", function () {
    grid_office.viewOffice();
  });

  it("13.04. Verify that clicking the Go Back button on the office view page redirects to the office list page.", function () {
    grid_office.viewGoBackButton();
  });

  it("13.05. Verify that inactive offices can be filtered using the status dropdown on the office list page.", function () {
    grid_office.statusInactiveDropdownCheck();
  });

  it("13.06. Verify that active offices are correctly filtered using the status dropdown.", function () {
    grid_office.statusActiveDropdownCheck();
  });

  it("13.07. Verify that searching by office name returns the correct results.", function () {
    grid_office.searchInOfficeManagementName();
  });

  it("13.08. Verify that clicking the Search button on the office grid page redirects to the office list page.", function () {
    grid_office.gridSearchButtonCheck();
  });

  it("13.09. Verify that the office grid resets successfully when the Reset button is clicked.", function () {
    grid_office.gridResetButtonCheck();
  });

  it("13.10. Verify that the office grid refreshes successfully when the Refresh button is clicked.", function () {
    grid_office.gridRefreshButtonCheck();
  });

  it("13.11. Verify that draft mode is enabled and the grid list is displayed correctly when the Draft button is turned on.", function () {
    grid_office.gridDraftButton();
  });

  it("13.12. Verify that draft mode is disabled and the grid list updates correctly when the Draft button is turned off.", function () {
    grid_office.gridDraftButtonOff();
  });

  it("13.13. Verify that the checkbox functionality works correctly.", function () {
    grid_office.gridCheckboxCheck();
  });

  it("13.14. Verify that the checkbox lock button works correctly when selected.", function () {
    grid_office.gridCheckboxLockButtonCheck();
  });

  it("13.15. Verify that the checkbox unlock button works correctly when selected.", function () {
    grid_office.gridCheckboxUnlockButtonCheck();
  });

  it("13.16. Verify that the grid list content switches correctly between English and Bangla.", function () {
    grid_office.gridLanguageSwitchCheck();
  });
});
