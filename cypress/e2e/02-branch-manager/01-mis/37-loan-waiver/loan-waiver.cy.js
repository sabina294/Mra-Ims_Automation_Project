// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/37-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("37. Loan waiver Module Test Cases", function () {
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

  it("37.01. Verify Loan waiver Grid List Page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

   it("37.02. Verify that clicking the add icon  button on the loan waiver create page redirects the user to the loan waiver list page.", function () {
    create_loan_waiver.createAddIconButtonCheck();
  });

  it("37.03. Verify that clicking the remove icon  button on the loan waiver create page redirects the user to the loan waiver list page.", function () {
    create_loan_waiver.createRemoveIconButtonCheck();
  });

  it("37.04. Verify the loan waiver creation reset button clears all entered input values.", function () {
    create_loan_waiver.createResetButtonCheck();
  });

  it("37.05. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_waiver.createValidationMessageCheck();
  });

  it("37.06. Verify that clicking the draft button on the loan waiver create page redirects the user to the loan waiver list page.", function () {
    create_loan_waiver.createDraftButtonCheck();
  });

   it("37.07. Verify that clicking the go back button on the loan waiver create page redirects the user to the loan waiver list page.", function () {
    create_loan_waiver.createGoBackButtonCheck();
  });

  it("37.08. Verify successful creation of a Loan waiver record by branch manager role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  it("37.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_waiver.actionButtonCheck();
  });

  it("37.10. Verify successful Loan waiver information View.", function () {
    create_loan_waiver.viewLoanWaiver();
  });

  it("37.11. Verify that clicking the go back button on the Loan waiver view page redirects the user to the Loan waiver list page.", function () {
    create_loan_waiver.viewGoBackButton();
  });

  it("37.11. Verify the user can filter inactive employee records using the status dropdown on the Loan waiver List page.", function () {
    create_loan_waiver.statusInactiveDropdownCheck();
  });

  it("37.12. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_waiver.statusActiveDropdownCheck();
  });

  it("37.13. Verify Successful Search Result by Loan waiver Name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("37.14. Verify Successful Reset of Grid List Using the Reset Button on Loan waiver Page.", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("37.15.Verify Successful Refresh of Grid List Using the Refresh Button on Loan waiver Page.", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("37.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
