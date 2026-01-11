// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/03-designation/designation.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_designation } from "./designation.po";

describe("03. Designation Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("03.01. Verify the designation list page loads without errors.", function () {
    create_designation.gridDesignationListPage();
  });

  it("03.02. Verify a new designation is created successfully when all required fields are filled with valid data.", function () {
    create_designation.createDesignation();
  });

  it("03.03. Verify that a designation cannot be created without a designation name english, even if all other fields are valid.", function () {
    create_designation.createWithoutNameEn();
  });

  it("03.04. Verify that a designation cannot be created without a designation name bangla, even if all other fields are valid.", function () {
    create_designation.createWithoutNameBn();
  });

  it("03.05. Verify that a designation cannot be created without a designation short name bangla, even if all other fields are valid.", function () {
    create_designation.createWithoutShortName();
  });

  it("03.06. Verify that a designation cannot be created without status, even if all other fields are valid.", function () {
    create_designation.createWithoutStatus();
  });

  it("03.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_designation.actionButtonCheck();
  });

  it("03.08. Verify the user can view all relevant details of a designation, including its associated fields.", function () {
    create_designation.viewDesignation();
  });

  it("03.09. Verify that clicking the go back button on the designation view page redirects the user to the designation list page.", function () {
    create_designation.viewGoBackButton();
  });

  it("03.10. Verify that the designation forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_designation.turnOffEditMode();
  });

  it("03.11. Verify the designation name and description can be edited successfully.", function () {
    create_designation.editDesignation();
  });

  it("03.12. Verify the designation edit reset button functions correctly.", function () {
    create_designation.editResetButton();
  });

  it("03.13. Verify the designation edit submit button functions correctly.", function () {
    create_designation.editSubmitButton();
  });

  it("03.14. Verify that clicking the go back button on the designation edit page redirects the user to the designation list page.", function () {
    create_designation.editGoBackButton();
  });

  it("03.15. Verify the user can filter inactive designations using the status dropdown on the designation list page.", function () {
    create_designation.statusInactiveDropdownCheck();
  });

  it("03.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_designation.statusActiveDropdownCheck();
  });

  it("03.17. Verify the search returns correct results when searching by designation name.", function () {
    create_designation.searchInDesignationName();
  });

  it("03.18. Verify the grid list resets successfully when the reset button is clicked on the designation page.", function () {
    create_designation.gridResetButtonCheck();
  });

  it("03.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the designation page.", function () {
    create_designation.gridRefreshButtonCheck();
  });

  it("03.20. Verify the designation creation reset button clears all entered input values.", function () {
    create_designation.createResetButtonCheck();
  });

  it("03.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_designation.createValidationMessageCheck();
  });

  it("03.22. Verify that clicking the go back button on the designation create page redirects the user to the designation list page.", function () {
    create_designation.createGoBackButtonCheck();
  });

  it("03.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_designation.gridLanguageSwitchCheck();
  });
});
