// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/51-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("51. Loan waiver Module Test Cases", function () {
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
  it("51.01. Verify that the Loan Waiver Grid List page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  it("51.02. Verify that clicking the Add icon button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createAddIconButtonCheck();
  });

  it("51.03. Verify that clicking the Remove icon button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createRemoveIconButtonCheck();
  });

  it("51.04. Verify that validation messages are displayed for required fields when the Submit button is clicked with empty inputs", function () {
    create_loan_waiver.createValidationMessageCheck();
  });

  // it("51.05. Verify that clicking the Draft button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
  //   create_loan_waiver.createDraftButtonCheck();
  // });

  it("51.06. Verify that clicking the Go Back button on the Loan Waiver Create page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.createGoBackButtonCheck();
  });

  it("51.07. Verify that clicking the Reset button on the Loan Waiver Create page clears all entered input values", function () {
    create_loan_waiver.createResetButtonCheck();
  });

  it("51.08. Verify successful creation of a Loan Waiver record by the Branch Manager role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  it("51.09. Verify that the Action button performs the expected operation successfully", function () {
    create_loan_waiver.actionButtonCheck();
  });

  it("51.10. Verify successful viewing of Loan Waiver information", function () {
    create_loan_waiver.viewLoanWaiver();
  });

  it("51.11. Verify that clicking the Go Back button on the Loan Waiver View page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.viewGoBackButton();
  });

  it("51.12. Verify that the user can filter inactive Loan Waiver records using the Status dropdown on the Loan Waiver List page", function () {
    create_loan_waiver.statusInactiveDropdownCheck();
  });

  it("51.13. Verify that the Status dropdown correctly filters active Loan Waiver records", function () {
    create_loan_waiver.statusActiveDropdownCheck();
  });

  it("51.14. Verify successful search results by Loan Waiver name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("51.15. Verify successful reset of the Grid List using the Reset button on the Loan Waiver page", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("51.16. Verify successful refresh of the Grid List using the Refresh button on the Loan Waiver page", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("51.17. Verify that clicking the Search button on the Loan Waiver Grid page redirects the user to the Loan Waiver List page", function () {
    create_loan_waiver.gridSearchButtonCheck();
  });

  it("51.18. Verify that the Grid List content changes correctly when switching the language from English to Bangla", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
