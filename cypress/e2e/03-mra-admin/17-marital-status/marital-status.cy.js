// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/17-marital-status/marital-status.cy.js --headed

import "cypress-file-upload";
import { create_marital_status } from "./marital-status.po";

describe("17. Marital Status Module Test Cases.", function () {
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

  it("17.01. Verify that the marital status list page loads without errors.", function () {
    create_marital_status.gridMaritalStatusListPage();
  });

  it("17.02. Verify that a new marital status is created successfully when all required fields are filled with valid data.", function () {
    create_marital_status.createMaritalStatus();
  });

  it("17.03. Verify that creating a marital status without an English name fails, even if all other fields are valid.", function () {
    create_marital_status.createWithoutNameEn();
  });

  it("17.04. Verify that creating a marital status without a Bangla name fails, even if all other fields are valid.", function () {
    create_marital_status.createWithoutNameBn();
  });

  it("17.05. Verify that creating a marital status without selecting a status fails, even if all other fields are valid.", function () {
    create_marital_status.createWithoutStatus();
  });

  it("17.06. Verify that a marital status cannot be created when any mandatory field is missing.", function () {
    create_marital_status.createWithoutOneMandatoryField();
  });

  it("17.07. Verify that the action button performs the expected operation successfully.", function () {
    create_marital_status.actionButtonCheck();
  });

  it("17.08. Verify that a user can view all details of a marital status, including associated fields.", function () {
    create_marital_status.viewMaritalStatus();
  });

  it("17.09. Verify that clicking the 'Go Back' button on the marital status view page returns the user to the list page.", function () {
    create_marital_status.viewGoBackButton();
  });

  it("17.10. Verify that the edit mode toggle works correctly: all fields are disabled in view-only mode and enabled in edit mode.", function () {
    create_marital_status.turnOffOnEditMode();
  });

  it("17.11. Verify that the marital status name and description can be edited successfully.", function () {
    create_marital_status.editMaritalStatus();
  });

  it("17.12. Verify that the edit reset button clears all input values in the edit form.", function () {
    create_marital_status.editResetButton();
  });

  it("17.13. Verify that the edit submit button updates the marital status correctly.", function () {
    create_marital_status.editSubmitButton();
  });

  it("17.14. Verify that clicking the 'Go Back' button on the edit page returns the user to the marital status list page.", function () {
    create_marital_status.editGoBackButton();
  });

  it("17.15. Verify that the user can filter inactive marital statuses using the status dropdown on the list page.", function () {
    create_marital_status.statusInactiveDropdownCheck();
  });

  it("17.16. Verify that active marital statuses are filtered correctly using the status dropdown.", function () {
    create_marital_status.statusActiveDropdownCheck();
  });

  it("17.17. Verify that searching by marital status name returns the correct results.", function () {
    create_marital_status.searchInMaritalStatusName();
  });

  it("17.18. Verify that the grid list resets successfully when the reset button is clicked.", function () {
    create_marital_status.gridResetButtonCheck();
  });

  it("17.19. Verify that the grid list refreshes successfully when the refresh button is clicked.", function () {
    create_marital_status.gridRefreshButtonCheck();
  });

  it("17.20. Verify that the creation reset button clears all input values in the create form.", function () {
    create_marital_status.createResetButtonCheck();
  });

  it("17.21. Verify that validation messages are displayed for required fields when submitting with empty inputs.", function () {
    create_marital_status.createValidationMessageCheck();
  });

  it("17.22. Verify that clicking the 'Go Back' button on the create page returns the user to the marital status list page.", function () {
    create_marital_status.createGoBackButtonCheck();
  });

  it("17.23. Verify that when the user clicks the Search button on the marital status grid page, the system redirects to the marital status List page..", function () {
    create_marital_status.gridSearchButtonCheck();
  });

  it("17.24. Verify that the grid list content switches correctly between English and Bangla.", function () {
    create_marital_status.gridLanguageSwitchCheck();
  });

});
