// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/13-loan-account-proposal-management/loan-account-proposal-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_proposal_management } from "./loan-account-proposal-management.po";

describe("13. Loan Account Proposal Management Module Test Cases", function () {
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

  it("13.01. Verify Loan Account Proposal Management  Grid List Page loads successfully", function () {
    create_loan_account_proposal_management.gridLoanAccountProposalManagementListPage();
  });

  it("13.02. Verify successful creation of a Loan Account Proposal Management", function () {
    create_loan_account_proposal_management.createLoanAccountProposalManagement();
  });

  it("13.03. Verify successful creation of a Loan Account Proposal Management view schedules check", function () {
    create_loan_account_proposal_management.viewSchedulesCheck();
  });

  it("13.04. Verify successful creation of a Loan Account Proposal Management view schedules cancel button check", function () {
    create_loan_account_proposal_management.viewSchedulesCancelButtonCheck();
  });

  it("13.05. Verify that the system prevents loan account creation when Samity is not provided", function () {
    create_loan_account_proposal_management.createWithoutSamity();
  });

  it("13.06. Verify that the system prevents loan account creation when Member is not provided", function () {
    create_loan_account_proposal_management.createWithoutMember();
  });

  it("13.07. Verify that the system prevents loan account creation when Lending Category is not provided", function () {
    create_loan_account_proposal_management.createWithoutLendingCategory();
  });

  it("13.08. Verify that the system prevents loan account creation when Economic Sector is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicSector();
  });

  it("13.09. Verify that the system prevents loan account creation when Economic Activity is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicActivity();
  });

  it("13.10. Verify that the system prevents loan account creation when Economic Purpose is not provided", function () {
    create_loan_account_proposal_management.createWithoutEconomicPurpose();
  });

  it("13.11. Verify that the system prevents loan account creation when Loan Product is not provided", function () {
    create_loan_account_proposal_management.createWithoutLoanProduct();
  });

  it("13.12. Verify that the system prevents loan account creation when Applied Loan Amount is not provided", function () {
    create_loan_account_proposal_management.createWithoutAppliedLoanAmount();
  });

  it("13.13. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_proposal_management.actionButtonCheck();
  });

  it("13.14. Verify successful Loan Account Proposal Management  information View.", function () {
    create_loan_account_proposal_management.viewLoanAccountProposalManagement();
  });

  it("13.15. Verify that clicking the go back button on the loan account proposal management view page redirects the user to the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.viewGoBackButton();
  });

  it("13.16. Verify that the user can filter the inactive Loan Account Proposal Management s using the Status Dropdown on the Loan Account Proposal Management  List page.", function () {
    create_loan_account_proposal_management.statusInactiveDropdownCheck();
  });

  it("13.17. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_account_proposal_management.statusActiveDropdownCheck();
  });

  it("13.18. Verify Successful Search Result by Loan Account Proposal Management  Name", function () {
    create_loan_account_proposal_management.searchInLoanAccountProposalName();
  });

  it("13.19. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridResetButtonCheck();
  });

  it("13.20. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridRefreshButtonCheck();
  });

  it("13.21. Verify the loan account proposal management creation Guarantor button clears all entered input values.", function () {
    create_loan_account_proposal_management.createAddGuarantorButtonCheck();
  });

  it("13.22. Verify the loan account proposal management creation Remove button clears all entered input values.", function () {
    create_loan_account_proposal_management.createRemoveButtonCheck();
  });

  it("13.23. Verify the loan account proposal management creation reset button clears all entered input values.", function () {
    create_loan_account_proposal_management.createResetButtonCheck();
  });

  it("13.24. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createValidationMessageCheck();
  });

  it("13.25. Verify validation messages appear for required fields when the draft button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createDraftButtonCheck();
  });

  it("13.26. Verify that clicking the go back button on the loan account proposal management create page redirects the user to the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.createGoBackButtonCheck();
  });

  it("13.27. Verify that when the user clicks the Search button on the loan account proposal management grid page, the system redirects to the loan account proposal management List page..", function () {
    create_loan_account_proposal_management.gridSearchButtonCheck();
  });

  it("13.28. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_proposal_management.gridLanguageSwitchCheck();
  });
});
