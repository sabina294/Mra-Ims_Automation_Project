// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/12-mfi-program/mfi-program.cy.js --browser chrome --headed


import "cypress-file-upload";
import { create_mfi_program } from "./mfi-program.po";

describe("12. MFI program Module Test Cases", function () {
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

  it("12.01. Verify the mfi program list page loads without errors.", function () {
    create_mfi_program.gridMfiProgramListPage();
  });

  it("12.02. Verify a new mfi program is created successfully when all required fields are filled with valid data.", function () {
    create_mfi_program.createMfiProgram();
  });

  it("12.03. Verify that a mfi program cannot be created without a mfi program name english, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutNameEn();
  });

  it("12.04. Verify that a mfi program cannot be created without a mfi program name bangla, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutNameBn();
  });

  it("12.05. Verify that a mfi program cannot be created without a short name, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutShortName();
  });

  it("12.06. Verify that a mfi program cannot be created without a funding category, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutFundingCategory();
  });

  it("12.07. Verify that a mfi program cannot be created without a loan fund, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutLoanFund();
  });

  it("12.08. Verify that a mfi program cannot be created without status, even if all other fields are valid.", function () {
    create_mfi_program.createWithoutStatus();
  });

  it("12.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_mfi_program.actionButtonCheck();
  });

  it("12.10. Verify the user can view all relevant details of a mfi program, including its associated fields.", function () {
    create_mfi_program.viewMfiProgram();
  });

  it("12.11. Verify that clicking the go back button on the mfi program view page redirects the user to the mfi program list page.", function () {
    create_mfi_program.viewGoBackButton();
  });

  it("12.12. Verify that the mfi program forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_mfi_program.turnOffEditMode();
  });

  it("12.13. Verify the mfi program name and description can be edited successfully.", function () {
    create_mfi_program.editMfiProgram();
  });

  it("12.14. Verify the mfi program edit reset button functions correctly.", function () {
    create_mfi_program.editResetButton();
  });

  it("12.15. Verify the mfi program edit submit button functions correctly.", function () {
    create_mfi_program.editSubmitButton();
  });

  it("12.16. Verify that clicking the go back button on the mfi program edit page redirects the user to the mfi program list page.", function () {
    create_mfi_program.editGoBackButton();
  });

  it("12.17. Verify the user can filter inactive mfi programs using the status dropdown on the mfi program list page.", function () {
    create_mfi_program.statusInactiveDropdownCheck();
  });

  it("12.18. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_mfi_program.statusActiveDropdownCheck();
  });

  it("12.19. Verify the search returns correct results when searching by mfi program name.", function () {
    create_mfi_program.searchInMfiProgramName();
  });

  it("12.20. Verify the grid list resets successfully when the reset button is clicked on the mfi program page.", function () {
    create_mfi_program.gridResetButtonCheck();
  });

  it("12.21. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi program page.", function () {
    create_mfi_program.gridRefreshButtonCheck();
  });

  it("12.22. Verify the mfi program creation reset button clears all entered input values.", function () {
    create_mfi_program.createResetButtonCheck();
  });

  it("12.23. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_mfi_program.createValidationMessageCheck();
  });

  it("12.24. Verify that clicking the go back button on the mfi program create page redirects the user to the mfi program list page.", function () {
    create_mfi_program.createGoBackButtonCheck();
  });

  it("12.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_mfi_program.gridLanguageSwitchCheck();
  });
});
