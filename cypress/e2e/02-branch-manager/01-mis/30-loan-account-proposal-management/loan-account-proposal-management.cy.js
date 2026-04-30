// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/30-loan-account-proposal-management/loan-account-proposal-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_proposal_management } from "./loan-account-proposal-management.po";

describe("30. Loan Account Proposal Management Module Test Cases", function () {
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

  it("30.01. Verify that the Loan Account Proposal Management grid list page loads successfully", function () {
    create_loan_account_proposal_management.gridLoanAccountProposalManagementListPage();
  });

  it("30.02. Verify successful creation of a Loan Account Proposal Management", function () {
    create_loan_account_proposal_management.createLoanAccountProposalManagement();
  });

  it("30.03. Verify successful creation of a Loan Account Proposal Management view schedules check", function () {
    create_loan_account_proposal_management.loanAccountProposalManagementViewSchedulesCheck();
  });

  it("30.04. Verify successful creation of a Loan Account Proposal Management view schedules close button check", function () {
    create_loan_account_proposal_management.loanAccountProposalManagementViewSchedulesCloseButtonCheck();
  });

  it("30.05. Verify that the system prevents loan account creation when Samity is not provided", function () {
    create_loan_account_proposal_management.createWithoutSamity();
  });

  it("30.06. Verify that the system prevents loan account creation when Member is not provided", function () {
    create_loan_account_proposal_management.createWithoutMember();
  });

  it("30.07. Verify that the system prevents loan account creation when Lending Category is not provided", function () {
    create_loan_account_proposal_management.createWithoutLendingCategory();
  });

  it("30.08. Verify that the system prevents loan account creation when Economic Sector is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicSector();
  });

  it("30.09. Verify that the system prevents loan account creation when Economic Activity is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicActivity();
  });

  it("30.10 Verify that the system prevents loan account creation when Economic Purpose is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicPurpose();
  });

  it("30.11. Verify that a Loan Account Proposal Management record can be successfully approved after creation", function () {
    create_loan_account_proposal_management.approveLoanAccountProposal();
  });

  it("30.12. Verify that action buttons perform their expected operations successfully", function () {
    create_loan_account_proposal_management.actionButtonCheck();
  });

  it("30.13. Verify that Loan Account Proposal Management details can be viewed successfully", function () {
    create_loan_account_proposal_management.viewLoanAccountProposalManagement();
  });

  it("30.14. Verify that the Go Back button on the view page redirects to the Loan Account Proposal Management list page", function () {
    create_loan_account_proposal_management.viewGoBackButton();
  });

  it("30.15. Verify that Approved status filter works correctly on the Loan Account Proposal Management list page", function () {
    create_loan_account_proposal_management.statusApproveDropdownCheck();
  });

  it("30.16. Verify that Rejected status filter works correctly on the Loan Account Proposal Management list page", function () {
    create_loan_account_proposal_management.statusRejectedDropdownCheck();
  });

  it("30.17. Verify that search functionality works correctly by Loan Account Proposal Management name", function () {
    create_loan_account_proposal_management.searchInLoanAccountProposalName();
  });

  it("30.18. Verify that the Reset button clears all filters and resets the grid list", function () {
    create_loan_account_proposal_management.gridResetButtonCheck();
  });

  it("30.19. Verify that the Refresh button reloads the grid list successfully", function () {
    create_loan_account_proposal_management.gridRefreshButtonCheck();
  });

  it("30.20. Verify that enabling Draft filter displays the correct grid list", function () {
    create_loan_account_proposal_management.gridDraftButton();
  });

  it("30.21 Verify that disabling Draft filter updates the grid list correctly", function () {
    create_loan_account_proposal_management.gridDraftButtonOff();
  });

  it("30.22. Verify that clicking the Add Guarantor button resets input fields successfully", function () {
    create_loan_account_proposal_management.createAddGuarantorButtonCheck();
  });

  it("30.23. Verify that clicking the Remove button clears all entered input values", function () {
    create_loan_account_proposal_management.createRemoveButtonCheck();
  });

  it("30.24. Verify that clicking the Reset button clears all input fields in the creation form", function () {
    create_loan_account_proposal_management.createResetButtonCheck();
  });

  it("30.25. Verify that validation messages are displayed when required fields are submitted empty", function () {
    create_loan_account_proposal_management.createValidationMessageCheck();
  });

  it("30.26. Verify that validation messages are displayed when draft is submitted with empty required fields", function () {
    create_loan_account_proposal_management.createDraftButtonCheck();
  });

  it("30.27. Verify that the Go Back button on the creation page redirects to the list page", function () {
    create_loan_account_proposal_management.createGoBackButtonCheck();
  });

  it("30.28. Verify that clicking the Search button redirects to the Loan Account Proposal Management list page", function () {
    create_loan_account_proposal_management.gridSearchButtonCheck();
  });

  it("30.29. Verify that grid list language switches correctly between English and Bangla", function () {
    create_loan_account_proposal_management.gridLanguageSwitchCheck();
  });
});
