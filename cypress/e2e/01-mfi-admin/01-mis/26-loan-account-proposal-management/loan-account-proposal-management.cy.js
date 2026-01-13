// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/26-loan-account-proposal-management/loan-account-proposal-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_proposal_management } from "./loan-account-proposal-management.po";

describe("26. Loan Account Proposal Management Module Test Cases", function () {
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

  it("26.01. Verify Loan Account Proposal Management  Grid List Page loads successfully", function () {
    create_loan_account_proposal_management.gridLoanAccountProposalManagementListPage();
  });

  it("26.02. Verify successful creation of a Loan Account Proposal Management record by MFI-Admin role", function () {
    create_loan_account_proposal_management.createLoanAccountProposalManagement();
  });

  it("26.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_proposal_management.actionButtonCheck();
  });

  it("26.04. Verify successful Loan Account Proposal Management  information View.", function () {
    create_loan_account_proposal_management.viewLoanAccountProposalManagement();
  });

  it("26.05. Verify that the user can filter the inactive Loan Account Proposal Management s using the Status Dropdown on the Loan Account Proposal Management  List page.", function () {
    create_loan_account_proposal_management.statusInactiveDropdownCheck();
  });

  it("26.06. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_account_proposal_management.statusActiveDropdownCheck();
  });

  it("26.07. Verify Successful Search Result by Loan Account Proposal Management  Name", function () {
    create_loan_account_proposal_management.searchInLoanAccountProposalName();
  });

  it('26.08. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_loan_account_proposal_management.statusOfficeDropdownCheck();
  });

  it("26.09. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridResetButtonCheck();
  });

  it("26.10. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridRefreshButtonCheck();
  });

  it("26.11. Verify display the grid list successfully when the Draft button on is clicked on the loan account proposal management page", function () {
    create_loan_account_proposal_management.gridDraftButton();
  });

  it("26.12. Verify display the grid list successfully when the Draft button off is clicked on the loan account proposal management page", function () {
    create_loan_account_proposal_management.gridDraftButtonOff();
  });

  it("26.13. Verify the loan account proposal management creation reset button clears all entered input values.", function () {
    create_loan_account_proposal_management.createResetButtonCheck();
  });

  it("26.14. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createValidationMessageCheck();
  });

  it("26.15. Verify that clicking the go back button on the loan account proposal management create page redirects the user to the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.createGoBackButtonCheck();
  });

  it("26.26. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_proposal_management.gridLanguageSwitchCheck();
  });
});
