// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/30-loan-waiver/loan-waiver.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_waiver } from "./loan-waiver.po";

describe("30. Loan waiver Module Test Cases", function () {
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

  it("30.01. Verify Loan waiver Grid List Page loads successfully", function () {
    create_loan_waiver.gridLoanWaiverListPage();
  });

  it("30.02. Verify successful creation of a Loan waiver record by branch manager role", function () {
    create_loan_waiver.createLoanWaiver();
  });

  // it("30.03. Verify successfully performs the action when the action button is clicked.", function () {
  //   create_loan_waiver.actionButtonCheck();
  // });

  //   it("30.04. Verify successful Loan waiver information View.", function () {
  //     create_loan_waiver.viewLoanWaiver();
  //   });

    it("30.05. Verify the user can filter inactive employee records using the status dropdown on the Loan waiver List page.", function () {
      create_loan_waiver.statusInactiveDropdownCheck();
    });

    it("30.06. Verify check if the filter for active results works correctly with the status dropdown ", function () {
      create_loan_waiver.statusActiveDropdownCheck();
    });

  it("30.07. Verify Successful Search Result by Loan waiver Name", function () {
    create_loan_waiver.searchInLoanWaivereName();
  });

    it("30.08. Verify Successful Reset of Grid List Using the Reset Button on Loan waiver Page.", function () {
      create_loan_waiver.gridResetButtonCheck();
    });

  it("30.09.Verify Successful Refresh of Grid List Using the Refresh Button on Loan waiver Page.", function () {
    create_loan_waiver.gridRefreshButtonCheck();
  });

  it("30.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_waiver.gridLanguageSwitchCheck();
  });
});
