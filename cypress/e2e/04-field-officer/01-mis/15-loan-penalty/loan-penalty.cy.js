// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/15-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";

describe("15. Loan Penalty Module Test Cases", function () {
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

  it("15.01. Verify complete BM staging and FO collection workflow", function () {
    cy.fixture(test_data).then((d) => {
      cy.logout();
      cy.loginAsBranchManager(baseURL, d);
      create_loan_penalty.startProcessStagingData(d);
      cy.logout();
      cy.loginAsFieldOfficer(baseURL, d);
    });
  });

  it("15.02. Verify that the Loan Penalty Grid List page loads successfully.", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("15.03. Verify that the Reset button functions correctly on the Loan Penalty Create page.", function () {
    create_loan_penalty.createResetButton();
  });

  it("15.04. Verify that clicking the Go Back button on the Loan Penalty Create page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.createGoBackButton();
  });

  it("15.05. Verify that the can successfully add a new Loan Penalty row using the Add Icon button.", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("15.06. Verify that the can successfully remove a Loan Penalty row using the Remove Icon button.", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("15.07. Verify successful creation of a Loan Penalty record.", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("15.08. Verify that the Action button functions correctly on the Loan Penalty List page.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("15.09. Verify successful viewing of Loan Penalty information.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("15.10. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("15.11. Verify that clicking the Unsubmitted button from the Action menu redirects the user to the Unsubmitted Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedButtonCheck();
  });

  it("15.12. Verify that clicking the Go Back button on the Unsubmitted Loan Penalty page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedGoBackButton();
  });

  it("15.13. Verify that the Unsubmitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.UnsubmittedButtonCheck();
  });

  it("15.14. Verify that clicking the Edit Draft action opens the Loan Penalty Edit page successfully.", function () {
    create_loan_penalty.editDraftButtonCheck();
  });

  it("15.15. Verify that clicking the Go Back button on the Loan Penalty Edit page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.editGoBackButtonCheck();
  });

  it("15.16. Verify that the Save button functions correctly on the Loan Penalty Edit page.", function () {
    create_loan_penalty.editSaveButtonCheck();
  });

  it("15.17. Verify that the Submit action functions correctly for a Loan Penalty record.", function () {
    create_loan_penalty.gridActionSubmitButtonCheck();
  });

  it("15.18. Verify that the Submitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.submittedButtonCheck();
  });

  it("15.19. Verify that the Status dropdown successfully filters Submitted Loan Penalty records.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("15.20. Verify that the Status dropdown successfully filters Approved Loan Penalty records.", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("15.21. Verify successful search results using the Loan Penalty name.", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("15.22. Verify successful reset of the Loan Penalty Grid List using the Reset button.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("15.23. Verify successful refresh of the Loan Penalty Grid List using the Refresh button.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("15.24. Verify that clicking the Search button displays filtered Loan Penalty records successfully.", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("15.25. Verify that the Grid List content changes correctly when switching the language from English to Bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
