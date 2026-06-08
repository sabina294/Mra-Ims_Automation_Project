// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/14-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_account_management } from "./loan-account-management.po";

describe("14. Loan Account Management Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("14.01. Verify Loan Account Management  Grid List Page loads successfully", function () {
    grid_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("14.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_loan_account_management.actionButtonCheck();
  });

  it('14.03. Verify successful Loan Account Management  information View.', function () {
    grid_loan_account_management.viewLoanAccountManagement();
  });

  it("14.04. Verify that clicking the go back button on the loan account management view page redirects the user to the loan account management list page.", function () {
    grid_loan_account_management.viewGoBackButton();
  });

  it("14.05. Verify that the user can filter the inactive Loan Account Management s using the Status Dropdown on the Loan Account Management  List page.", function () {
    grid_loan_account_management.statusInactiveDropdownCheck();
  });

  it("14.06. Verify Filter Active Result by Status Dropdown", function () {
    grid_loan_account_management.statusActiveDropdownCheck();
  });

  it("14.07. Verify Successful Search Result by Loan Account Management  Name", function () {
    grid_loan_account_management.searchInLoanAccountName();
  });

  it("14.08. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Management  Page.", function () {
    grid_loan_account_management.gridResetButtonCheck();
  });

  it("14.09. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Management  Page.", function () {
    grid_loan_account_management.gridRefreshButtonCheck();
  });

  it("14.10. Verify that when the user clicks the Search button on the loan account management grid page, the system redirects to the loan account management List page..", function () {
    grid_loan_account_management.gridSearchButtonCheck();
  });

  it("14.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_account_management.gridLanguageSwitchCheck();
  });
});
