// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/20-mfi-management/mfi-management.cy.js --headed

import "cypress-file-upload";
import { create_mfi_management } from "./mfi-management.po";

describe("20. MFI Management Module Test Cases.", function () {
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

  it("20.01. Verify the mfi management list page loads without errors.", function () {
    create_mfi_management.gridMfiManagementListPage();
  });

  it("20.02. Verify a new mfi management is created successfully when all required fields are filled with valid data.", function () {
    create_mfi_management.createMfi();
  });

  it("20.03. Verify a new mfi management is created successfully when all fields are filled with valid data.", function () {
    create_mfi_management.createAllField();
  });

  it("20.04. Verify that a mfi management cannot be created without filling in the mandatory field.", function () {
    create_mfi_management.createWithoutOneMandatoryField();
  });

  it("20.05. Verify mfi management creation fails when mandatory fields are missing.", function () {
    create_mfi_management.createWithoutMandatoryField();
  });

  it("20.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_mfi_management.actionButtonCheck();
  });

  it("20.07. Verify the user can view all relevant details of a mfi management, including its associated fields.", function () {
    create_mfi_management.viewMfi();
  });

  it("20.08. Verify that the mfi management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_mfi_management.turnOffOnEditMode();
  });

  it("20.09. Verify the mfi management name and description can be edited successfully.", function () {
    create_mfi_management.editMfi();
  });

  it("20.10. Verify the mfi management edit reset button functions correctly.", function () {
    create_mfi_management.editResetButton();
  });

  it("20.11. Verify that clicking the go back button on the mfi management edit page redirects the user to the mfi management list page.", function () {
    create_mfi_management.editGoBackButton();
  });

  it("20.12. Verify the user can filter inactive mfi managements using the status dropdown on the mfi management list page.", function () {
    create_mfi_management.statusInactiveDropdownCheck();
  });

  it("20.13. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_mfi_management.statusActiveDropdownCheck();
  });

  it("20.14. Verify the search returns correct results when searching by mfi management name.", function () {
    create_mfi_management.searchInMfiManagementName();
  });

  it("20.15. Verify the grid list resets successfully when the reset button is clicked on the mfi management page.", function () {
    create_mfi_management.gridResetButtonCheck();
  });

  it("20.16. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi management page.", function () {
    create_mfi_management.gridRefreshButtonCheck();
  });

  it("20.17. Verify display the grid list successfully when the Draft button on is clicked on the mfi management page", function () {
    create_mfi_management.gridDraftButton();
  });

  it("20.18. Verify display the grid list successfully when the Draft button off is clicked on the mfi management page", function () {
    create_mfi_management.gridDraftButtonOff();
  });

  it("20.19. Verify that the checkbox functions correctly.", function () {
    create_mfi_management.gridCheckboxCheck();
  });

  it("20.20. Verify the mfi management creation reset button clears all entered input values.", function () {
    create_mfi_management.createResetButtonCheck();
  });

  it("20.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_mfi_management.createValidationMessageCheck();
  });

  it("20.22. Verify that clicking the go back button on the mfi management create page redirects the user to the mfi management list page.", function () {
    create_mfi_management.createGoBackButtonCheck();
  });

  it("20.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_mfi_management.gridLanguageSwitchCheck();
  });
});
