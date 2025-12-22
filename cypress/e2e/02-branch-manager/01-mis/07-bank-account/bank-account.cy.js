// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/07-bank-account/bank-account.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_bank_account } from "./bank-account.po";

describe("07. Bank Account Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("07.01. Verify the bank account list page loads without errors.", function () {
    create_bank_account.gridBankAccountListPage();
  });

  it("07.02. Verify a new bank account is created successfully when all required fields are filled with valid data.", function () {
    create_bank_account.createBankAccount();
  });

  it("07.03. Verify that a bank account cannot be created without a bank, even if all other fields are valid.", function () {
    create_bank_account.createWithoutBank();
  });

  it("07.04. Verify that a bank account cannot be created without a bank branch, even if all other fields are valid.", function () {
    create_bank_account.createWithoutBankBranch();
  });

  it("07.05. Verify that a bank account cannot be created without a account name english, even if all other fields are valid.", function () {
    create_bank_account.createWithoutNameEn();
  });

  it("07.06. Verify that a bank account cannot be created without a bank account name bangla, even if all other fields are valid.", function () {
    create_bank_account.createWithoutNameBn();
  });

  it("07.07. Verify that a bank account cannot be created without a account type, even if all other fields are valid.", function () {
    create_bank_account.createWithoutAccType();
  });

  it("07.08. Verify that a bank account cannot be created without a account number, even if all other fields are valid.", function () {
    create_bank_account.createWithoutAccNumber();
  });

  it("07.09. Verify that a bank account cannot be created without a status, even if all other fields are valid.", function () {
    create_bank_account.createWithoutStatus();
  });

  it("07.10. Verify successfully performs the action when the action button is clicked.", function () {
    create_bank_account.actionButtonCheck();
  });

  it("07.11. Verify the user can view all relevant details of a bank account, including its associated fields.", function () {
    create_bank_account.viewBankAccount();
  });

  it("07.12. Verify that clicking the go back button on the bank account view page redirects the user to the bank account list page.", function () {
    create_bank_account.viewGoBackButton();
  });

  it("07.13. Verify that the bank account forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_bank_account.turnOffEditMode();
  });

  it("07.14. Verify the bank account name and description can be edited successfully.", function () {
    create_bank_account.editBankAccount();
  });

  it("07.15. Verify the bank account edit reset button functions correctly.", function () {
    create_bank_account.editResetButton();
  });

  it("07.16. Verify the bank account edit submit button functions correctly.", function () {
    create_bank_account.editSubmitButton();
  });

  it("07.17. Verify that clicking the go back button on the bank account edit page redirects the user to the bank account list page.", function () {
    create_bank_account.editGoBackButton();
  });

  it("07.18. Verify the user can filter inactive bank accounts using the status dropdown on the bank account list page.", function () {
    create_bank_account.statusInactiveDropdownCheck();
  });

  it("07.19. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_bank_account.statusActiveDropdownCheck();
  });

  it("07.20. Verify the search returns correct results when searching by bank account name.", function () {
    create_bank_account.searchInBankAccountName();
  });

  it("07.21. Verify the grid list resets successfully when the reset button is clicked on the bank account page.", function () {
    create_bank_account.gridResetButtonCheck();
  });

  it("07.22. Verify that the grid list is refreshed successfully when the refresh button is clicked on the bank account page.", function () {
    create_bank_account.gridRefreshButtonCheck();
  });

  it("07.23. Verify the bank account creation reset button clears all entered input values.", function () {
    create_bank_account.createResetButtonCheck();
  });

  it("07.24. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_bank_account.createValidationMessageCheck();
  });

  it("07.25. Verify that clicking the go back button on the bank account create page redirects the user to the bank account list page.", function () {
    create_bank_account.createGoBackButtonCheck();
  });

  it("07.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_bank_account.gridLanguageSwitchCheck();
  });
});
