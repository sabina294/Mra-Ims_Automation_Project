// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/27-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_management } from "./loan-account-management.po";

describe("27. Loan Account Management Module Test Cases", function () {
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

  it("27.01. Verify Loan Account Management  Grid List Page loads successfully", function () {
    create_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("27.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_management.actionButtonCheck();
  });

  it('27.03. Verify successful Loan Account Management  information View.', function () {
    create_loan_account_management.viewLoanAccountManagement();
  });

  it("27.04. Verify that clicking the go back button on the loan account management view page redirects the user to the loan account management list page.", function () {
    create_loan_account_management.viewGoBackButton();
  });

  it("27.05. Verify that the user can filter the inactive Loan Account Management s using the Status Dropdown on the Loan Account Management  List page.", function () {
    create_loan_account_management.statusInactiveDropdownCheck();
  });

  it("27.06. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_account_management.statusActiveDropdownCheck();
  });

  it("27.07. Verify Successful Search Result by Loan Account Management  Name", function () {
    create_loan_account_management.searchInLoanAccountName();
  });

  it('27.08. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_loan_account_management.statusOfficeDropdownCheck();
  });

  it("27.09. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Management  Page.", function () {
    create_loan_account_management.gridResetButtonCheck();
  });

  it("27.10. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Management  Page.", function () {
    create_loan_account_management.gridRefreshButtonCheck();
  });

  it("27.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_management.gridLanguageSwitchCheck();
  });
});
