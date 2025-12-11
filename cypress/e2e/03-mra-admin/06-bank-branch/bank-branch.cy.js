// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/06-bank-branch/bank-branch.cy.js --headed

import "cypress-file-upload";
import { create_bank_branch } from "./bank-branch.po";

describe("06. Bank Branch Module Test Cases.", function () {
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

  it("06.01. Verify the bank branch list page loads without errors.", function () {
    create_bank_branch.gridBankBranchListPage();
  });

  it("06.02. Verify a new bank branch is created successfully when all required fields are filled with valid data.", function () {
    create_bank_branch.createBankBranch();
  });

  it("06.03. Verify a new bank branch is created successfully when all fields are filled with valid data.", function () {
    create_bank_branch.createAllField();
  });

  it("06.04. Verify that a bank branch cannot be created without filling in the mandatory field.", function () {
    create_bank_branch.createWithoutOneMandatoryField();
  });

  it("06.05. Verify bank branch creation fails when mandatory fields are missing.", function () {
    create_bank_branch.createWithoutMandatoryField();
  });

  it("06.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_bank_branch.actionButtonCheck();
  });

  it("06.07. Verify the user can view all relevant details of a bank branch, including its associated fields.", function () {
    create_bank_branch.viewBankBranch();
  });

  it("06.08. Verify that clicking the go back button on the bank branch view page redirects the user to the bank branch list page.", function () {
    create_bank_branch.viewGoBackButton();
  });

  it("06.09. Verify that the bank branch forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_bank_branch.turnOffOnEditMode();
  });

  it("06.10. Verify the bank branch name and description can be edited successfully.", function () {
    create_bank_branch.editBankBranch();
  });

  it("06.11. Verify the bank branch edit reset button functions correctly.", function () {
    create_bank_branch.editResetButton();
  });

  it("06.12. Verify that clicking the go back button on the bank branch  edit page redirects the user to the bank branch list page.", function () {
    create_bank_branch.editGoBackButton();
  });

  it("06.13. Verify the user can filter inactive banks using the status dropdown on the bank branch list page.", function () {
    create_bank_branch.statusInactiveDropdownCheck();
  });

  it("06.14. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_bank_branch.statusActiveDropdownCheck();
  });

  it("06.15. Verify check that the bank branch selection works correctly from the dropdown on the bank list page.", function () {
    create_bank_branch.selectBankDropdown();
  });

  it("06.16. Verify the search returns correct results when searching by bank  branch name.", function () {
    create_bank_branch.searchInBankBranchName();
  });

  it("06.17. Verify the grid list resets successfully when the reset button is clicked on the bank branch page.", function () {
    create_bank_branch.gridResetButtonCheck();
  });

  it("06.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the bank branch page.", function () {
    create_bank_branch.gridRefreshButtonCheck();
  });

  it("06.19. Verify pagination functions as expected on the last page of the bank branch list.", function () {
    create_bank_branch.paginationCheck();
  });

  it("06.20. Verify the bank branch creation reset button clears all entered input values.", function () {
    create_bank_branch.createResetButtonCheck();
  });

  it("06.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_bank_branch.createValidationMessageCheck();
  });

  it("06.22. Verify that clicking the go back button on the bank branch create page redirects the user to the bank branch list page.", function () {
    create_bank_branch.createGoBackButtonCheck();
  });

  it("06.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_bank_branch.gridLanguageSwitchCheck();
  });
});
