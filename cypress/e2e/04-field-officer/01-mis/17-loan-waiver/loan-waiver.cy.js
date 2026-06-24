// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/17-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("17. Loan waiver Module Test Cases", function () {
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

  it("17.01. Verify Loan waiver Grid List Page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  it("17.02. Verify that the draft button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createDraftButton();
  });

  it("17.03. Verify that the submit button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createSubmitButton();
  });

  it("17.04. Verify that the go back button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createGoBackButton();
  });

  it("17.05. Verify that the reset button functions correctly on the loan waiver Create page.", function () {
    create_loan_waiver.createResetButton();
  });

  it("16.06. Verify that the can successfully add a new Waiver row using the Add Icon button.", function () {
    create_loan_waiver.createAddIconWaiver();
  });

  it("16.07. Verify that the can successfully remove a Waiver row using the Remove Icon button.", function () {
    create_loan_waiver.createRemoveIconWaiver();
  });

  it("17.08. Verify successful creation of a Loan waiver record by MFI-Admin role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  it("17.09. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_waiver.actionButtonCheck();
  });

  it("17.10. Verify successful Loan waiver information View.", function () {
    create_loan_waiver.viewLoanWaiver();
  });

  it("17.11. Verify that clicking the Go Back button on the Loan waiver View page redirects the user to the Loan waiver List page.", function () {
    create_loan_waiver.viewGoBackButton();
  });

  it("17.12. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_waiver.statusSubmittedDropdownCheck();
  });

  it("17.13. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_waiver.statusApprovedDropdownCheck();
  });

  it("17.14. Verify Successful Search Result by Loan waiver Name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("17.15. Verify Successful Reset of Grid List Using the Reset Button on Loan waiver Page.", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("17.16. Verify Successful Refresh of Grid List Using the Refresh Button on Loan waiver Page.", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("17.17. Verify that when the user clicks the Search button on the loan waiver grid page, the system redirects to the loan waiver List page..", function () {
    create_loan_waiver.gridSearchButtonCheck();
  });

  it("17.18. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
