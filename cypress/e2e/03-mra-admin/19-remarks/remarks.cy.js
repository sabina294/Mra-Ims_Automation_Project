// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/19-remarks/remarks.cy.js --headed

import "cypress-file-upload";
import { create_remarks } from "./remarks.po";

describe("19. Remarks Module Test Cases.", function () {
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

  it("19.01. Verify that the Remarks list page loads successfully without any errors.", function () {
    create_remarks.gridRemarksListPage();
  });

  it("19.02. Verify that a new Remark is created successfully when all required fields are provided with valid data.", function () {
    create_remarks.createRemarks();
  });

  it("19.03. Verify that a Remark cannot be created without an English name, even when all other fields are valid.", function () {
    create_remarks.createWithoutNameEn();
  });

  it("19.04. Verify that a Remark cannot be created without a Bangla name, even when all other fields are valid.", function () {
    create_remarks.createWithoutNameBn();
  });

  it("19.05. Verify that a Remark cannot be created without selecting a status, even when all other fields are valid.", function () {
    create_remarks.createWithoutStatus();
  });

  it("19.06. Verify that a Remark cannot be created when any mandatory field is missing.", function () {
    create_remarks.createWithoutOneMandatoryField();
  });

  it("19.07. Verify that the appropriate action is performed successfully when the action button is clicked.", function () {
    create_remarks.actionButtonCheck();
  });

  it("19.08. Verify that the user can view all relevant details of a Remark, including its associated fields.", function () {
    create_remarks.viewRemarks();
  });

  it("19.09. Verify that clicking the Go Back button on the Remark view page redirects the user to the Remarks list page.", function () {
    create_remarks.viewGoBackButton();
  });

  it("19.10. Verify that the Remark form edit mode can be toggled on and off, and fields become enabled or return to view-only mode accordingly.", function () {
    create_remarks.turnOffOnEditMode();
  });

  it("19.11. Verify that the Remark name and description can be edited successfully.", function () {
    create_remarks.editRemarks();
  });

  it("19.12. Verify that the Remark edit Reset button functions correctly.", function () {
    create_remarks.editResetButton();
  });

  it("19.13. Verify that the Remark edit Submit button functions correctly.", function () {
    create_remarks.editSubmitButton();
  });

  it("19.14. Verify that clicking the Go Back button on the Remark edit page redirects the user to the Remarks list page.", function () {
    create_remarks.editGoBackButton();
  });

  it("19.15. Verify that the user can filter inactive Remarks using the Status dropdown on the Remarks list page.", function () {
    create_remarks.statusInactiveDropdownCheck();
  });

  it("19.16. Verify that active Remarks are filtered correctly using the Status dropdown.", function () {
    create_remarks.statusActiveDropdownCheck();
  });

  it("19.17. Verify that the search functionality returns correct results when searching by Remark name.", function () {
    create_remarks.searchInRemarksName();
  });

  it("19.18. Verify that the grid list resets successfully when the Reset button is clicked on the Remarks page.", function () {
    create_remarks.gridResetButtonCheck();
  });

  it("19.19. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Remarks page.", function () {
    create_remarks.gridRefreshButtonCheck();
  });

  it("19.20. Verify that the Remark creation Reset button clears all entered input values.", function () {
    create_remarks.createResetButtonCheck();
  });

  it("19.21. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs.", function () {
    create_remarks.createValidationMessageCheck();
  });

  it("19.22. Verify that clicking the Go Back button on the Remark creation page redirects the user to the Remarks list page.", function () {
    create_remarks.createGoBackButtonCheck();
  });

  it("19.23. Verify that the grid list content switches correctly from English to Bangla.", function () {
    create_remarks.gridLanguageSwitchCheck();
  });

});
