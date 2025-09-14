// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/29-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty} from "./loan-penalty.po";

describe("29. Loan Penalty Module Test Cases", function () {
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

  it("29.01. Verify Loan Penalty Grid List Page loads successfully", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

//   it("29.02. Verify successful creation of a Loan Penalty record by MFI-Admin role", function () {
//     create_loan_penalty.createLoanPenalty();
//   });

//   it("29.03. Verify successful creation of a new loan penalty record", function () {
//     create_loan_penalty.approveLoanPenalty();
//   });

//   it("29.04. Verify successfully performs the action when the action button is clicked.", function () {
//     create_loan_penalty.actionButtonCheck();
//   });

//   it("29.05. Verify successful loan penalty information View.", function () {
//     create_loan_penalty.viewLoanPenalty();
//   });

//   it("29.06. Verify editing functionality for loan penalty record by MFI-Admin role", function () {
//     create_loan_penalty.editLoanPenalty();
//   });

  it("29.07. Verify that the user can filter the inactive Loan Penalty using the Status Dropdown on the Loan Penalty List page.", function () {
    create_loan_penalty.statusInactiveDropdownCheck();
  });

  it("29.08. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_penalty.statusActiveDropdownCheck();
  });

  it("29.09. Verify Successful Search Result by Loan penalty Name", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("29.10. Verify Successful Reset of Grid List Using the Reset Button on Loan penalty Page.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("29.11. Verify Successful Refresh of Grid List Using the Refresh Button on Loan penalty Page.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("29.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
