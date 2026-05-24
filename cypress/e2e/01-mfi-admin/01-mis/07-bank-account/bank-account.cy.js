// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/07-bank-account/bank-account.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_bank_account } from "./bank-account.po";

describe("07. Bank Account Module Test Cases", function () {
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

  it("07.01. Verify that the bank account list page loads successfully without any errors.", function () {
    create_bank_account.gridBankAccountListPage();
  });

  it("07.02. Verify that a new bank account is created successfully when all required fields are filled with valid data.", function () {
    create_bank_account.createBankAccount();
  });

  it("07.03. Verify that a bank account cannot be created without selecting a bank, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutBank();
  });

  it("07.04. Verify that a bank account cannot be created without selecting a bank branch, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutBankBranch();
  });

  it("07.05. Verify that a bank account cannot be created without entering the account name in English, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutNameEn();
  });

  it("07.06. Verify that a bank account cannot be created without entering the account name in Bangla, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutNameBn();
  });

  it("07.07. Verify that a bank account cannot be created without selecting an account type, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutAccType();
  });

  it("07.08. Verify that a bank account cannot be created without entering an account number, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutAccNumber();
  });

  it("07.09. Verify that a bank account cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_bank_account.createWithoutStatus();
  });

  it("07.10. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_bank_account.actionButtonCheck();
  });

  it("07.11. Verify that the user can view all relevant details of a bank account, including its associated information.", function () {
    create_bank_account.viewBankAccount();
  });

  it("07.12. Verify that clicking the Go Back button on the bank account view page redirects the user to the bank account list page.", function () {
    create_bank_account.viewGoBackButton();
  });

  it("07.13. Verify that edit mode on the bank account form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_bank_account.turnOffEditMode();
  });

  it("07.14. Verify that the bank account name and description can be edited successfully.", function () {
    create_bank_account.editBankAccount();
  });

  it("07.15. Verify that the Reset button on the bank account edit page clears all modified values correctly.", function () {
    create_bank_account.editResetButton();
  });

  it("07.16. Verify that the Submit button on the bank account edit page updates the data successfully.", function () {
    create_bank_account.editSubmitButton();
  });

  it("07.17. Verify that clicking the Go Back button on the bank account edit page redirects the user to the bank account list page.", function () {
    create_bank_account.editGoBackButton();
  });

  it("07.18. Verify that inactive bank accounts can be filtered correctly using the status dropdown on the bank account list page.", function () {
    create_bank_account.statusInactiveDropdownCheck();
  });

  it("07.19. Verify that active bank accounts are filtered correctly using the status dropdown on the bank account list page.", function () {
    create_bank_account.statusActiveDropdownCheck();
  });

  it("07.20. Verify that the search functionality returns correct results when searching by bank account name.", function () {
    create_bank_account.searchInBankAccountName();
  });

  it("07.21. Verify that the grid list is reset successfully when the Reset button is clicked on the bank account page.", function () {
    create_bank_account.gridResetButtonCheck();
  });

  it("07.22. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the bank account page.", function () {
    create_bank_account.gridRefreshButtonCheck();
  });

  it("07.23. Verify that pagination works correctly on the last page of the bank account list.", function () {
    create_bank_account.paginationCheck();
  });

  it("07.24. Verify that the Reset button on the bank account creation page clears all entered input values.", function () {
    create_bank_account.createResetButtonCheck();
  });

  it("07.25. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_bank_account.createValidationMessageCheck();
  });

  it("07.26. Verify that clicking the Go Back button on the bank account creation page redirects the user to the bank account list page.", function () {
    create_bank_account.createGoBackButtonCheck();
  });

  it("07.27. Verify that clicking the Search button on the bank account grid page displays the correct filtered results.", function () {
    create_bank_account.gridSearchButtonCheck();
  });

  it("07.28. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_bank_account.gridLanguageSwitchCheck();
  });
});
