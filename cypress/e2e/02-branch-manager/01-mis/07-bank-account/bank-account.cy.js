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

  it("07.01. Verify that the bank account list page loads successfully without any errors.", function () {
    create_bank_account.gridBankAccountListPage();
  });

  it("07.02. Verify that a new bank account is created successfully when all required fields are provided with valid data.", function () {
    create_bank_account.createBankAccount();
  });

  it("07.03. Verify that a bank account cannot be created without selecting a bank, even if all other fields are valid.", function () {
    create_bank_account.createWithoutBank();
  });

  it("07.04. Verify that a bank account cannot be created without selecting a bank branch, even if all other fields are valid.", function () {
    create_bank_account.createWithoutBankBranch();
  });

  it("07.05. Verify that a bank account cannot be created without providing the account name (English), even if all other fields are valid.", function () {
    create_bank_account.createWithoutNameEn();
  });

  it("07.06. Verify that a bank account cannot be created without providing the account name (Bangla), even if all other fields are valid.", function () {
    create_bank_account.createWithoutNameBn();
  });

  it("07.07. Verify that a bank account cannot be created without selecting the account type, even if all other fields are valid.", function () {
    create_bank_account.createWithoutAccType();
  });

  it("07.08. Verify that a bank account cannot be created without providing the account number, even if all other fields are valid.", function () {
    create_bank_account.createWithoutAccNumber();
  });

  it("07.09. Verify that a bank account cannot be created without selecting the status, even if all other fields are valid.", function () {
    create_bank_account.createWithoutStatus();
  });

  it("07.10. Verify that the action button performs the expected operation successfully.", function () {
    create_bank_account.actionButtonCheck();
  });

  it("07.11. Verify that the user can view all relevant details of a bank account.", function () {
    create_bank_account.viewBankAccount();
  });

  it("07.12. Verify that the Go Back button on the bank account view page redirects the user to the bank account list page.", function () {
    create_bank_account.viewGoBackButton();
  });

  it("07.13. Verify that edit mode can be toggled on and off, and all fields switch between editable and read-only states accordingly.", function () {
    create_bank_account.turnOffEditMode();
  });

  it("07.14. Verify that bank account details (name and description) can be updated successfully.", function () {
    create_bank_account.editBankAccount();
  });

  it("07.15. Verify that the reset button in edit mode clears or restores the original values correctly.", function () {
    create_bank_account.editResetButton();
  });

  it("07.16. Verify that the submit button in edit mode updates the bank account successfully.", function () {
    create_bank_account.editSubmitButton();
  });

  it("07.17. Verify that the Go Back button on the edit page redirects the user to the bank account list page.", function () {
    create_bank_account.editGoBackButton();
  });

  it("07.18. Verify that inactive bank accounts can be filtered correctly using the status dropdown.", function () {
    create_bank_account.statusInactiveDropdownCheck();
  });

  it("07.19. Verify that active bank accounts are filtered correctly using the status dropdown.", function () {
    create_bank_account.statusActiveDropdownCheck();
  });

  it("07.20. Verify that searching by bank account name returns the correct results.", function () {
    create_bank_account.searchInBankAccountName();
  });

  it("07.21. Verify that the reset button clears all filters and restores the default grid state.", function () {
    create_bank_account.gridResetButtonCheck();
  });

  it("07.22. Verify that the refresh button reloads the bank account grid data successfully.", function () {
    create_bank_account.gridRefreshButtonCheck();
  });

  it("07.23. Verify that the reset button in the create form clears all entered input fields.", function () {
    create_bank_account.createResetButtonCheck();
  });

  it("07.24. Verify that validation messages are displayed when required fields are left empty during submission.", function () {
    create_bank_account.createValidationMessageCheck();
  });

  it("07.25. Verify that the Go Back button on the create page redirects the user to the bank account list page.", function () {
    create_bank_account.createGoBackButtonCheck();
  });

  it("07.26. Verify that clicking the Search button on the bank account grid navigates and returns correct filtered results.", function () {
    create_bank_account.gridSearchButtonCheck();
  });

  it("07.27. Verify that the grid content correctly switches between English and Bangla languages.", function () {
    create_bank_account.gridLanguageSwitchCheck();
  });
});
