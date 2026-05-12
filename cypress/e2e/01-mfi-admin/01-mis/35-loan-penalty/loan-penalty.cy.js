// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/35-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("35. Loan Penalty Module Test Cases", function () {
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

  it("35.01. Verify Loan Penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  //   it("35.02. Verify successful creation of a Loan Penalty record by MFI-Admin role", function () {
  //     create_loan_penalty.createLoanPenalty();
  //   });

  //   it("35.03. Verify successful creation of a new loan penalty record", function () {
  //     create_loan_penalty.approveLoanPenalty();
  //   });

  //   it("35.04. Verify successfully performs the action when the action button is clicked.", function () {
  //     create_loan_penalty.actionButtonCheck();
  //   });

  //   it("35.05. Verify successful loan penalty information View.", function () {
  //     create_loan_penalty.viewLoanPenalty();
  //   });

  //   it("35.06. Verify editing functionality for loan penalty record by MFI-Admin role", function () {
  //     create_loan_penalty.editLoanPenalty();
  //   });

  it("35.07. Verify check that the Loan Penalty office selection works correctly from the dropdown on the Loan Penalty  list page.", function () {
    create_loan_penalty.selectofficeDropdown();
  });

  it("35.08. Verify that the user can filter the inactive Loan Penalty using the Status Dropdown on the Loan Penalty List page.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("35.09. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("35.10. Verify Successful Search Result by Loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("35.11. Verify Successful Reset of Grid List Using the Reset Button on Loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("35.12. Verify Successful Refresh of Grid List Using the Refresh Button on Loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("35.13. Verify that when the user clicks the Search button on the Loan penalty grid page, the system redirects to the Loan penalty List page..", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("35.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
