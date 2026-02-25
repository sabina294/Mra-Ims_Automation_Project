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

  it("30.01. Verify Loan Account Proposal Management  Grid List Page loads successfully", function () {
    create_loan_account_proposal_management.gridLoanAccountProposalManagementListPage();
  });

  // it("30.02. Verify successful creation of a Loan Account Proposal Management record by MFI-Admin role", function () {
  //   create_loan_account_proposal_management.createLoanAccountProposalManagement();
  // });

  // it("30.03. Verify successfully approve a loan account proposal management record after creation.", function () {
  //   create_loan_account_proposal_management.approveLoanAccountProposal();
  // });

  it("30.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_loan_account_proposal_management.actionButtonCheck();
  });

  it("30.05. Verify successful Loan Account Proposal Management  information View.", function () {
    create_loan_account_proposal_management.viewLoanAccountProposalManagement();
  });

  it("30.06. Verify that clicking the go back button on the Loan Account Proposal Management  view page redirects the user to the Loan Account Proposal Management list page.", function () {
    create_loan_account_proposal_management.viewGoBackButton();
  });

  it("30.07. Verify that the user can filter the approve Status Dropdown on the Loan Account Proposal Management  List page.", function () {
    create_loan_account_proposal_management.statusApproveDropdownCheck();
  });

  it("30.08. Verify Filter rejected Result by Status Dropdown", function () {
    create_loan_account_proposal_management.statusRejectedDropdownCheck();
  });

  it("30.09. Verify Successful Search Result by Loan Account Proposal Management  Name", function () {
    create_loan_account_proposal_management.searchInLoanAccountProposalName();
  });

  it("30.10. Verify Successful Reset of Grid List Using the Reset Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridResetButtonCheck();
  });

  it("30.11. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Account Proposal Management  Page.", function () {
    create_loan_account_proposal_management.gridRefreshButtonCheck();
  });

  // it("30.12. Verify successful draft of a Loan Account Proposal Management record by MFI-Admin role", function () {
  //   create_loan_account_proposal_management.draftLoanAccountProposalManagement();
  // });

  // it("30.13. Verify display the grid list successfully when the Draft button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftButton();
  // });

  // it("30.14. Verify display the grid list successfully when the Draft button off is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftButtonOff();
  // });

  // it("30.15. Verify display the grid list successfully when the Draft action button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftActionButton();
  // });

  // it("30.16. Verify display the grid list successfully when the Draft edit button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftEditButton();
  // });

  // it("30.17. Verify display the grid list successfully when the Draft edit reset button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftEditResetButton();
  // });

  // it("30.18. Verify display the grid list successfully when the Draft edit draft button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftEditDraftButton();
  // });

  // it("30.19. Verify display the grid list successfully when the Draft edit submit button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftEditSubmitButton();
  // });

  // it("30.20. Verify display the grid list successfully when the Draft edit go back button on is clicked on the loan account proposal management page", function () {
  //   create_loan_account_proposal_management.gridDraftEditGoBackButton();
  // });

  it("30.21. Verify the loan account proposal management creation Guarantor button clears all entered input values.", function () {
    create_loan_account_proposal_management.createAddGuarantorButtonCheck();
  });

  it("30.22. Verify the loan account proposal management creation Remove button clears all entered input values.", function () {
    create_loan_account_proposal_management.createRemoveButtonCheck();
  });

  it("30.23. Verify the loan account proposal management creation reset button clears all entered input values.", function () {
    create_loan_account_proposal_management.createResetButtonCheck();
  });

  it("30.24. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createValidationMessageCheck();
  });

  it("30.25. Verify validation messages appear for required fields when the draft button is clicked with empty inputs.", function () {
    create_loan_account_proposal_management.createDraftButtonCheck();
  });

  it("30.26. Verify that clicking the go back button on the loan account proposal management list page.", function () {
    create_loan_account_proposal_management.createGoBackButtonCheck();
  });

  it("30.27. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_account_proposal_management.gridLanguageSwitchCheck();
  });
});
