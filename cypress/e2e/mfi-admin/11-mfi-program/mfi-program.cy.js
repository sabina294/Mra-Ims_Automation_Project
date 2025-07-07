// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/11-mfi-program/mfi-program.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_mfi_program } from "./mfi-program.po";

describe("11. MFI program Module Test Cases", function () {
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

  it("11.01. Verify the mfi program list page loads without errors.", function () {
    create_mfi_program.gridMfiProgramListPage();
  });

  it("11.02. Verify a new mfi program is created successfully when all required fields are filled with valid data.", function () {
    create_mfi_program.createMfiProgram();
  });

  it("11.03. Verify that a mfi program cannot be created without a mfi program name english, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutNameEn();
  });

  it("11.04. Verify that a mfi program cannot be created without a mfi program name bangla, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutNameBn();
  });

  it("11.05. Verify that a mfi program cannot be created without a short name, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutShortName();
  });

  it("11.06. Verify that a mfi program cannot be created without a funding category, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutFundingCategory();
  });

  it("11.07. Verify that a mfi program cannot be created without a loan fund, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutLoanFund();
  });

  it("11.08. Verify that a mfi program cannot be created without status, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutStatus();
  });

  it("11.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_mfi_program.actionButtonCheck();
  });

  it("11.10. Verify the user can view all relevant details of a mfi program, including its associated fields.", function () {
    create_mfi_program.viewMfiProgram();
  });

  it("11.11. Verify that the mfi program forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_mfi_program.turnOffEditMode();
  });

  it("11.12. Verify the mfi program name and description can be edited successfully.", function () {
    create_mfi_program.editMfiProgram();
  });

  it("11.13. Verify the mfi program edit reset button functions correctly.", function () {
    create_mfi_program.editResetButton();
  });

  it("11.14. Verify the mfi program edit submit button functions correctly.", function () {
    create_mfi_program.editSubmitButton();
  });

  it("11.15. Verify that clicking the go back button on the mfi program edit page redirects the user to the mfi program list page.", function () {
    create_mfi_program.editGoBackButton();
  });

  it("11.16. Verify the user can filter inactive mfi programs using the status dropdown on the mfi program list page.", function () {
    create_mfi_program.statusInactiveDropdownCheck();
  });

  it("11.17. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_mfi_program.statusActiveDropdownCheck();
  });

  it("11.18. Verify the search returns correct results when searching by mfi program name.", function () {
    create_mfi_program.searchInMfiProgramName();
  });

  it("11.19. Verify the grid list resets successfully when the reset button is clicked on the mfi program page.", function () {
    create_mfi_program.gridResetButtonCheck();
  });

  it("11.20. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi program page.", function () {
    create_mfi_program.gridRefreshButtonCheck();
  });

  it("11.21. Verify the mfi program creation reset button clears all entered input values.", function () {
    create_mfi_program.createResetButtonCheck();
  });

  it("11.22. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_mfi_program.createValidationMessageCheck();
  });

  it("11.23. Verify that clicking the go back button on the mfi program create page redirects the user to the mfi program list page.", function () {
    create_mfi_program.createGoBackButtonCheck();
  });

  it("11.24. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_mfi_program.gridLanguageSwitchCheck();
  });
});
