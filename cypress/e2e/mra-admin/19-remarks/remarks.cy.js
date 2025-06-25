// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/19-remarks/remarks.cy.js --headed

import "cypress-file-upload";
import { create_remarks } from "./remarks.po";

describe("19. Remarks Test.", function () {
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

  it("19.01. Verify the remarks list page loads without errors.", function () {
    create_remarks.gridRemarksListPage();
  });

  it("19.02. Verify a new remarks is created successfully when all required fields are filled with valid data.", function () {
    create_remarks.createRemarks();
  });

  it("19.03. Verify creating a remark without an name en,even if all other fields are valid.", function () {
    create_remarks.createWithoutNameEn();
  });

  it("19.04. Verify creating a remark without an name bn,even if all other fields are valid.", function () {
    create_remarks.createWithoutNameBn();
  });

  it("19.05. Verify creating a remark without an status,even if all other fields are valid.", function () {
    create_remarks.createWithoutStatus();
  });

  it("19.06. Verify check if a remarks cannot be created when a mandatory field is missing.", function () {
    create_remarks.createWithoutOneMandatoryField();
  });

  it("19.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_remarks.actionButtonCheck();
  });

  it("19.08. Verify the user can view all relevant details of a remarks, including its associated fields.", function () {
    create_remarks.viewRemarks();
  });

  it("19.09. Verify that the remarks forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_remarks.turnOffOnEditMode();
  });

  it("19.10. Verify the remarks name and description can be edited successfully.", function () {
    create_remarks.editRemarks();
  });

  it("19.11. Verify the remarks edit reset button functions correctly.", function () {
    create_remarks.editResetButton();
  });

  it("19.12. Verify the remarks edit submit button functions correctly.", function () {
    create_remarks.editSubmitButton();
  });

  it("19.13. Verify that clicking the go back button on the remarks edit page redirects the user to the remarks list page.", function () {
    create_remarks.editGoBackButton();
  });

  it("19.14. Verify the user can filter inactive remarkss using the status dropdown on the remarks list page.", function () {
    create_remarks.statusInactiveDropdownCheck();
  });

  it("19.15. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_remarks.statusActiveDropdownCheck();
  });

  it("19.16. Verify the search returns correct results when searching by remarks name.", function () {
    create_remarks.searchInRemarksName();
  });

  it("19.17. Verify the grid list resets successfully when the reset button is clicked on the remarks page.", function () {
    create_remarks.gridResetButtonCheck();
  });

  it("19.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the remarks page.", function () {
    create_remarks.gridRefreshButtonCheck();
  });

  it("19.19. Verify the remarks creation reset button clears all entered input values.", function () {
    create_remarks.createResetButtonCheck();
  });

  it("19.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_remarks.createValidationMessageCheck();
  });

  it("19.21. Verify that clicking the go back button on the remarks create page redirects the user to the remarks list page.", function () {
    create_remarks.createGoBackButtonCheck();
  });

  it("19.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_remarks.gridLanguageSwitchCheck();
  });
});
