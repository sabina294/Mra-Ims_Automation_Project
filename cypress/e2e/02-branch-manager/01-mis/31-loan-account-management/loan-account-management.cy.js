// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/31-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_management } from "./loan-account-management.po";

describe("31. Loan Account Management Module Test Cases", function () {
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

  it("31.01. Verify Loan Account Management  Grid List Page loads successfully", function () {
    create_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("31.02. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_management.actionButtonCheck();
  });

  it('31.03. Verify successful Loan Account Management  information View.', function () {
    create_loan_account_management.viewLoanAccountManagement();
  });

  it("31.04. Verify that clicking the go back button on the Loan Account Management  view page redirects the user to the Loan Account Management list page.", function () {
    create_loan_account_management.viewGoBackButton();
  });

  it("31.05. Verify that the user can filter the inactive Loan Account Management s using the Status Dropdown on the Loan Account Management  List page.", function () {
    create_loan_account_management.statusInactiveDropdownCheck();
  });

  it("31.06. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_account_management.statusActiveDropdownCheck();
  });

  it("31.07. Verify Successful Search Result by Loan Account Management  Name", function () {
    create_loan_account_management.searchInLoanAccountName();
  });

  it("31.08. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Management  Page.", function () {
    create_loan_account_management.gridResetButtonCheck();
  });

  it("31.09. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Management  Page.", function () {
    create_loan_account_management.gridRefreshButtonCheck();
  });

  it("31.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_management.gridLanguageSwitchCheck();
  });
});
