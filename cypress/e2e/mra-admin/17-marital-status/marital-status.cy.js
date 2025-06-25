// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/17-marital-status/marital-status.cy.js --headed

import "cypress-file-upload";
import { create_marital_status } from "./marital-status.po";

describe("17. Marital Status Test.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("17.01. Verify the marital status list page loads without errors.", function () {
    create_marital_status.gridMaritalStatusListPage();
  });

  it("17.02. Verify a new marital status is created successfully when all required fields are filled with valid data.", function () {
    create_marital_status.createMaritalStatus();
  });

  it("17.03. Verify creating a marital status without an name en,even if all other fields are valid.", function () {
    create_marital_status.createWithoutNameEn();
  });

  it("17.04. Verify creating a marital status without an name bn,even if all other fields are valid.", function () {
    create_marital_status.createWithoutNameBn();
  });

  it("17.05. Verify creating a marital status without an status,even if all other fields are valid.", function () {
    create_marital_status.createWithoutStatus();
  });

  it("17.06. Verify check if a marital status cannot be created when a mandatory field is missing.", function () {
    create_marital_status.createWithoutOneMandatoryField();
  });

  it("17.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_marital_status.actionButtonCheck();
  });

  it("17.08. Verify the user can view all relevant details of a marital status, including its associated fields.", function () {
    create_marital_status.viewMaritalStatus();
  });

  it("17.09. Verify that the marital status forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_marital_status.turnOffOnEditMode();
  });

  it("17.10. Verify the marital status name and description can be edited successfully.", function () {
    create_marital_status.editMaritalStatus();
  });

  it("17.11. Verify the marital status edit reset button functions correctly.", function () {
    create_marital_status.editResetButton();
  });

  it("17.12. Verify the marital status edit submit button functions correctly.", function () {
    create_marital_status.editSubmitButton();
  });

  it("17.13. Verify that clicking the go back button on the marital status edit page redirects the user to the marital status list page.", function () {
    create_marital_status.editGoBackButton();
  });

  it("17.14. Verify the user can filter inactive marital status using the status dropdown on the marital status list page.", function () {
    create_marital_status.statusInactiveDropdownCheck();
  });

  it("17.15. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_marital_status.statusActiveDropdownCheck();
  });

  it("17.16. Verify the search returns correct results when searching by marital status name.", function () {
    create_marital_status.searchInMaritalStatusName();
  });

  it("17.17. Verify the grid list resets successfully when the reset button is clicked on the marital status page.", function () {
    create_marital_status.gridResetButtonCheck();
  });

  it("17.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the marital status page.", function () {
    create_marital_status.gridRefreshButtonCheck();
  });

  it("17.19. Verify the marital status creation reset button clears all entered input values.", function () {
    create_marital_status.createResetButtonCheck();
  });

  it("17.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_marital_status.createValidationMessageCheck();
  });

  it("17.21. Verify that clicking the go back button on the marital status create page redirects the user to the marital status list page.", function () {
    create_marital_status.createGoBackButtonCheck();
  });

  it("17.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_marital_status.gridLanguageSwitchCheck();
  });
});
