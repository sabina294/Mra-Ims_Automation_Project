// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/30-loan-account-proposal-management/loan-account-proposal-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_proposal_management } from "./loan-account-proposal-management.po";

describe("30. Loan Account Proposal Management Module Test Cases", function () {
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

  it("30.01. Verify Loan Account Proposal Management  Grid List Page loads successfully", function () {
    create_loan_account_proposal_management.gridLoanAccountProposalManagementListPage();
  });

  it("30.02. Verify successful creation of a Loan Account Proposal Management record by MFI-Admin role", function () {
    create_loan_account_proposal_management.createLoanAccountProposalManagement();
  });

  it("30.03. Verify successful creation of a Loan Account Proposal Management view schedules check", function () {
    create_loan_account_proposal_management.loanAccountProposalManagementViewSchedulesCheck();
  });

  it("30.04. Verify successful creation of a Loan Account Proposal Management view schedules close button check", function () {
    create_loan_account_proposal_management.loanAccountProposalManagementViewSchedulesCloseButtonCheck();
  });

  it("30.05. Verify successfully approve a loan account proposal management record after creation.", function () {
    create_loan_account_proposal_management.approveLoanAccountProposal();
  });

  it("30.06. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_proposal_management.actionButtonCheck();
  });

  it("30.07. Verify successful Loan Account Proposal Management  information View.", function () {
    create_loan_account_proposal_management.viewLoanAccountProposalManagement();
  });

  it("30.08. Verify that clicking the go back button on the loan account proposal management view page redirects the user to the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.viewGoBackButton();
  });

  it("30.09. Verify that the system prevents loan account creation when Office is not provided", function () {
    create_loan_account_proposal_management.createWithoutOffice();
  });

  it("30.10. Verify that the system prevents loan account creation when Samity is not provided", function () {
    create_loan_account_proposal_management.createWithoutSamity();
  });

  it("30.11. Verify that the system prevents loan account creation when Member is not provided", function () {
    create_loan_account_proposal_management.createWithoutMember();
  });

  it("30.12. Verify that the system prevents loan account creation when Lending Category is not provided", function () {
    create_loan_account_proposal_management.createWithoutLendingCategory();
  });

  it("30.13. Verify that the system prevents loan account creation when Economic Sector is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicSector();
  });

  it("30.14. Verify that the system prevents loan account creation when Economic Activity is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicActivity();
  });

  it("30.15. Verify that the system prevents loan account creation when Economic Purpose is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicPurpose();
  });

  it("30.16. Verify that the user can filter the inactive Loan Account Proposal Management s using the Status Dropdown on the Loan Account Proposal Management  List page.", function () {
    create_loan_account_proposal_management.statusInactiveDropdownCheck();
  });

  it("30.17. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_account_proposal_management.statusActiveDropdownCheck();
  });

  it("30.18. Verify Successful Search Result by Loan Account Proposal Management  Name", function () {
    create_loan_account_proposal_management.searchInLoanAccountProposalName();
  });

  it('30.19. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    create_loan_account_proposal_management.statusOfficeDropdownCheck();
  });

  it("30.20. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridResetButtonCheck();
  });

  it("30.21. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridRefreshButtonCheck();
  });

  it("30.22. Verify display the grid list successfully when the Draft button on is clicked on the loan account proposal management page", function () {
    create_loan_account_proposal_management.gridDraftButton();
  });

  it("30.23. Verify display the grid list successfully when the Draft button off is clicked on the loan account proposal management page", function () {
    create_loan_account_proposal_management.gridDraftButtonOff();
  });

  it("30.24. Verify successful draft of a Loan Account Proposal Management record by MFI-Admin role", function () {
    create_loan_account_proposal_management.draftLoanAccountProposalManagement();
  });

  it("30.25. Verify the loan account proposal management creation Guarantor button clears all entered input values.", function () {
    create_loan_account_proposal_management.createAddGuarantorButtonCheck();
  });

  it("30.26. Verify the loan account proposal management creation Remove button clears all entered input values.", function () {
    create_loan_account_proposal_management.createRemoveButtonCheck();
  });

  it("30.27. Verify the loan account proposal management creation reset button clears all entered input values.", function () {
    create_loan_account_proposal_management.createResetButtonCheck();
  });

  it("30.28. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createValidationMessageCheck();
  });

  it("30.29. Verify validation messages appear for required fields when the draft button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createDraftButtonCheck();
  });

  it("30.30. Verify that clicking the go back button on the loan account proposal management create page redirects the user to the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.createGoBackButtonCheck();
  });

  it("30.31. Verify that when the user clicks the Search button on the loan account proposal management grid page, the system redirects to the loan account proposal management List page..", function () {
    create_loan_account_proposal_management.gridSearchButtonCheck();
  });

  it("30.32. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_proposal_management.gridLanguageSwitchCheck();
  });
});
