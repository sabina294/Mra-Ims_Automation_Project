// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/50-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("50. Loan Rebate Module Test Cases", function () {
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

  it("50.01. Verify that the Loan Rebate Grid List page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("50.02. Verify that the Reset button on the Loan Rebate Create page clears all entered input values", function () {
    create_loan_rebate.createResetButtonCheck();
  });

  it("50.03. Verify that validation messages are displayed for required fields when submitting the form with empty inputs", function () {
    create_loan_rebate.createValidationMessageCheck();
  });

  it("50.04. Verify that clicking the Draft button on the Loan Rebate Create page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.createDraftButtonCheck();
  });

  it("50.05. Verify that clicking the Go Back button on the Loan Rebate Create page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.createGoBackButtonCheck();
  });

  it("50.06. Verify that clicking the Add icon button on the Loan Rebate Create page functions successfully", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("50.07. Verify that clicking the Remove icon button on the Loan Rebate Create page functions successfully", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("50.08. Verify successful creation of a Loan Rebate record by the Branch Manager role", function () {
    create_loan_rebate.createLoanRebate();
  });

  it("50.09. Verify that the Action button performs the expected operation successfully", function () {
    create_loan_rebate.actionButtonCheck();
  });

  it("50.10. Verify successful viewing of Loan Rebate information", function () {
    create_loan_rebate.viewLoanRebate();
  });

  it("50.11. Verify that clicking the Go Back button on the Loan Rebate View page redirects the user to the Loan Rebate List page", function () {
    create_loan_rebate.viewGoBackButton();
  });

  it("50.12. Verify that the user can filter inactive Loan Rebate records using the Status dropdown", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("50.13. Verify that the user can filter active Loan Rebate records using the Status dropdown", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("50.14. Verify successful search results by Loan Rebate name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("50.15. Verify successful reset of the Grid List using the Reset button on the Loan Rebate page", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("50.16. Verify successful refresh of the Grid List using the Refresh button on the Loan Rebate page", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("50.17. Verify that clicking the Search button on the Loan Rebate Grid page displays the correct search results", function () {
    create_loan_rebate.gridSearchButtonCheck();
  });

  it("50.18. Verify that the Grid List content changes correctly from English to Bangla after language switch", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});