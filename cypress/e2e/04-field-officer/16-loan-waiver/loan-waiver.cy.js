// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/16-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("16. Loan waiver Module Test Cases", function () {
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

  it("16.01. Verify Loan waiver Grid List Page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  // it("16.02. Verify successful creation of a Loan waiver record by MFI-Admin role", function () {
  //   create_loan_waiver.createLoanWaiver();
  // });

  // it("16.03. Verify successfully performs the action when the action button is clicked.", function () {
  //   create_loan_waiver.actionButtonCheck();
  // });

  //   it("16.04. Verify successful Loan waiver information View.", function () {
  //     create_loan_waiver.viewLoanWaiver();
  //   });

  it("16.05. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_loan_waiver.statusSubmittedDropdownCheck();
  });

  it("16.06. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_loan_waiver.statusApprovedDropdownCheck();
  });

  it("16.07. Verify Successful Search Result by Loan waiver Name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

  it("16.08. Verify Successful Reset of Grid List Using the Reset Button on Loan waiver Page.", function () {
    create_loan_waiver.gridResetButtonCheck();
  });

  it("16.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan waiver Page.", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("16.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
