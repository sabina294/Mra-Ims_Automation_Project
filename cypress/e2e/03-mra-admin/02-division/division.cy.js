// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/02-division/division.cy.js --headed

import "cypress-file-upload";
import { create_division } from "./division.po";

describe("02. Division Module Test Cases.", function () {
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

  it("02.01. Verify that the Division List page loads successfully without any errors.", function () {
    create_division.gridDivisionListPage();
  });

  it("02.02. Verify that a new division is created successfully when all mandatory fields are filled with valid data.", function () {
    create_division.createDivision();
  });

  it("02.03. Verify that the system does not allow division creation when the English division name is not provided.", function () {
    create_division.createWithoutNameEn();
  });

  it("02.04. Verify that the system does not allow division creation when the Bangla division name is not provided.", function () {
    create_division.createWithoutNameBn();
  });

  it("02.05. Verify that the system does not allow division creation when the division code is not provided.", function () {
    create_division.createWithoutDivisionCode();
  });

  it("02.06. Verify that the system does not allow division creation when the established year is not provided.", function () {
    create_division.createWithoutEstabYear();
  });

  it("02.07. Verify that the system does not allow division creation when the status field is not selected.", function () {
    create_division.createWithoutStatus();
  });

  it("02.08. Verify that the correct action options are displayed and functional when the action button is clicked from the division list.", function () {
    create_division.actionButtonCheck();
  });

  it("02.09. Verify that all division details are displayed correctly on the Division View page.", function () {
    create_division.viewDivision();
  });

  it("02.10. Verify that clicking the Go Back button on the Division View page redirects the user to the Division List page.", function () {
    create_division.viewGoBackButton();
  });

  it("02.11. Verify that edit mode can be turned off and all fields become disabled or view-only.", function () {
    create_division.turnOffEditMode();
  });

  it("02.12. Verify that the division name and description can be updated successfully in edit mode.", function () {
    create_division.editDivision();
  });

  it("02.13. Verify that clicking the Reset button on the Division Edit page restores the original values.", function () {
    create_division.editResetButton();
  });

  it("02.14. Verify that updated division information is saved successfully after clicking the Submit button.", function () {
    create_division.editSubmitButton();
  });

  it("02.15. Verify that clicking the Go Back button on the Division Edit page redirects the user to the Division List page.", function () {
    create_division.editGoBackButton();
  });

  it("02.16. Verify that inactive divisions are filtered correctly using the Status dropdown.", function () {
    create_division.statusInactiveDropdownCheck();
  });

  it("02.17. Verify that active divisions are filtered correctly using the Status dropdown.", function () {
    create_division.statusActiveDropdownCheck();
  });

  it("02.18. Verify that the search functionality returns accurate results when searching by division name.", function () {
    create_division.searchInDivisionName();
  });

  it("02.19. Verify that the division grid resets successfully when the Reset button is clicked.", function () {
    create_division.gridResetButtonCheck();
  });

  it("02.20. Verify that the division grid refreshes successfully when the Refresh button is clicked.", function () {
    create_division.gridRefreshButtonCheck();
  });

  it("02.21. Verify that when the user clicks the Search button on the Division grid page, the system redirects to the Division List page..", function () {
    create_division.gridSearchButtonCheck();
  });

  it("02.22. Verify that the Reset button on the Create Division form clears all entered input values.", function () {
    create_division.createResetButtonCheck();
  });

  it("02.23. Verify that validation messages are displayed for all required fields when submitting the form with empty inputs.", function () {
    create_division.createValidationMessageCheck();
  });

  it("02.24. Verify that clicking the Go Back button on the Create Division page redirects the user to the Division List page.", function () {
    create_division.createGoBackButtonCheck();
  });

  it("02.25. Verify that the division grid content updates correctly when switching the language from English to Bangla.", function () {
    create_division.gridLanguageSwitchCheck();
  });

});
