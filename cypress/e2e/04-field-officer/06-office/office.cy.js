// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/06-office/office.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_office } from "./office.po";

describe("06. Office Module Test Cases", function () {
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

  it("06.01. Verify the office list page loads without errors.", function () {
    grid_office.gridOfficePage();
  });

  it("06.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_office.actionButtonCheck();
  });

  it("06.03. Verify the user can view all relevant details of a office, including its associated fields.", function () {
    grid_office.viewOffice();
  });

  it("06.04. Verify that clicking the go back button on the office view page redirects the user to the office list page.", function () {
    grid_office.viewGoBackButton();
  });

  it("06.05. Verify the user can filter inactive offices using the status dropdown on the office list page.", function () {
    grid_office.statusInactiveDropdownCheck();
  });

  it("06.06. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_office.statusActiveDropdownCheck();
  });

  it("06.07. Verify the search returns correct results when searching by office name.", function () {
    grid_office.searchInOfficeManagementName();
  });

  it("06.08. Verify the grid list resets successfully when the reset button is clicked on the office page.", function () {
    grid_office.gridResetButtonCheck();
  });

  it("06.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the office page.", function () {
    grid_office.gridRefreshButtonCheck();
  });

  it("06.10. Verify that the checkbox functions correctly.", function () {
    grid_office.gridCheckboxCheck();
  });

  it("06.11. Verify that the checkbox lock button operates correctly when selected.", function () {
    grid_office.gridCheckboxLockButtonCheck();
  });

  it("06.12. Verify that the checkbox unlock button operates correctly when selected.", function () {
    grid_office.gridCheckboxUnlockButtonCheck();
  });

  it("06.13. Verify display the grid list successfully when the Draft button on is clicked on the office page", function () {
    grid_office.gridDraftButton();
  });

  it("06.14. Verify display the grid list successfully when the Draft button off is clicked on the office page", function () {
    grid_office.gridDraftButtonOff();
  });

  it("06.15. Verify that the checkbox functions correctly.", function () {
    grid_office.gridCheckboxCheck();
  });

  it("06.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_office.gridLanguageSwitchCheck();
  });
});
