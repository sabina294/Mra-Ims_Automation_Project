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

  it("03.01. Verify that the Designation List page loads successfully without any errors.", function () {
    create_designation.gridDesignationListPage();
  });

  it("03.02. Verify that a new designation is created successfully when all required fields are filled with valid data.", function () {
    create_designation.createDesignation();
  });

  it("03.03. Verify that a designation cannot be created without entering the Designation Name (English), even if all other fields contain valid data.", function () {
    create_designation.createWithoutNameEn();
  });

  it("03.04. Verify that a designation cannot be created without entering the Designation Name (Bangla), even if all other fields contain valid data.", function () {
    create_designation.createWithoutNameBn();
  });

  it("03.05. Verify that a designation cannot be created without entering the Designation Short Name, even if all other fields contain valid data.", function () {
    create_designation.createWithoutShortName();
  });

  it("03.06. Verify that a designation cannot be created without selecting a status, even if all other fields contain valid data.", function () {
    create_designation.createWithoutStatus();
  });

  it("03.07. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_designation.actionButtonCheck();
  });

  it("03.08. Verify that the user can view all relevant designation details along with associated information.", function () {
    create_designation.viewDesignation();
  });

  it("03.09. Verify that clicking the Go Back button on the designation view page redirects the user to the Designation List page.", function () {
    create_designation.viewGoBackButton();
  });

  it("03.10. Verify that the designation form edit mode can be toggled on and off successfully, and all fields return to view-only mode when disabled.", function () {
    create_designation.turnOffEditMode();
  });

  it("03.11. Verify that the designation name and description can be edited successfully.", function () {
    create_designation.editDesignation();
  });

  it("03.12. Verify that the Reset button on the designation edit form functions correctly.", function () {
    create_designation.editResetButton();
  });

  it("03.13. Verify that the Submit button on the designation edit form functions correctly.", function () {
    create_designation.editSubmitButton();
  });

  it("03.14. Verify that clicking the Go Back button on the designation edit page redirects the user to the Designation List page.", function () {
    create_designation.editGoBackButton();
  });

  it("03.15. Verify that the user can filter inactive designations using the Status dropdown on the Designation List page.", function () {
    create_designation.statusInactiveDropdownCheck();
  });

  it("03.16. Verify that active designations are filtered correctly using the Status dropdown.", function () {
    create_designation.statusActiveDropdownCheck();
  });

  it("03.17. Verify that the search functionality returns the correct results when searching by designation name.", function () {
    create_designation.searchInDesignationName();
  });

  it("03.18. Verify that the grid list resets successfully when the Reset button is clicked on the Designation page.", function () {
    create_designation.gridResetButtonCheck();
  });

  it("03.19. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Designation page.", function () {
    create_designation.gridRefreshButtonCheck();
  });

  it("03.20. Verify that the designation creation Reset button clears all entered input values successfully.", function () {
    create_designation.createResetButtonCheck();
  });

  it("03.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_designation.createValidationMessageCheck();
  });

  it("03.22. Verify that clicking the Go Back button on the designation creation page redirects the user to the Designation List page.", function () {
    create_designation.createGoBackButtonCheck();
  });

  it("03.23. Verify that clicking the Search button on the designation grid page redirects the user to the Designation List page.", function () {
    create_designation.gridSearchButtonCheck();
  });

  it("03.24. Verify that the grid list content changes correctly from English to Bangla after switching the language.", function () {
    create_designation.gridLanguageSwitchCheck();
  });
});
