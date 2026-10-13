// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/16-loan-penalty/loan-penalty.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_penalty } from "./loan-penalty.po";
import { create_staging_data } from "../../../../support/page-objects/staging-data.po";

describe("16. Loan Penalty Module Test Cases", function () {
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

  it("16.01. Verify complete BM staging and FO collection workflow", function () {
    cy.fixture(test_data).then((d) => {
      cy.logout();
      cy.loginAsBranchManager(baseURL, d);
      create_staging_data.gridStagingDataListPage();
      cy.wait(2000);
      create_staging_data.startProcessStagingData();
      create_staging_data.refreshButtonCheck();
      cy.logout();
      cy.loginAsFieldOfficer(baseURL, d);
    });
  });
  it("16.02. Verify that the Loan Penalty Grid List page loads successfully.", function () {
    create_loan_penalty.gridLoanPenaltyListPage();
  });

  it("16.03. Verify that the Reset button functions correctly on the Loan Penalty Create page.", function () {
    create_loan_penalty.createResetButton();
  });

  it("16.04. Verify that clicking the Go Back button on the Loan Penalty Create page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.createGoBackButton();
  });

  it("16.05. Verify that the can successfully add a new Loan Penalty row using the Add Icon button.", function () {
    create_loan_penalty.createAddIconPenalty();
  });

  it("16.06. Verify that the can successfully remove a Loan Penalty row using the Remove Icon button.", function () {
    create_loan_penalty.createRemoveIconPenalty();
  });

  it("16.07. Verify successful creation of a Loan Penalty record.", function () {
    create_loan_penalty.createLoanPenalty();
  });

  it("16.08. Verify that the Action button functions correctly on the Loan Penalty List page.", function () {
    create_loan_penalty.actionButtonCheck();
  });

  it("16.09. Verify successful viewing of Loan Penalty information.", function () {
    create_loan_penalty.viewLoanPenalty();
  });

  it("16.10. Verify that clicking the Go Back button on the Loan Penalty View page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.viewGoBackButton();
  });

  it("16.11. Verify that clicking the Unsubmitted button from the Action menu redirects the user to the Unsubmitted Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedButtonCheck();
  });

  it("16.12. Verify that clicking the Go Back button on the Unsubmitted Loan Penalty page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.gridActionUnsubmittedGoBackButton();
  });

  it("16.13. Verify that the Unsubmitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.UnsubmittedButtonCheck();
  });

  it("16.14. Verify that clicking the Edit Draft action opens the Loan Penalty Edit page successfully.", function () {
    create_loan_penalty.editDraftButtonCheck();
  });

  it("16.15. Verify that clicking the Go Back button on the Loan Penalty Edit page redirects the user to the Loan Penalty List page.", function () {
    create_loan_penalty.editGoBackButtonCheck();
  });

  it("16.16. Verify that the Save button functions correctly on the Loan Penalty Edit page.", function () {
    create_loan_penalty.editSaveButtonCheck();
  });

  it("16.17. Verify that the Submit action functions correctly for a Loan Penalty record.", function () {
    create_loan_penalty.gridActionSubmitButtonCheck();
  });

  it("16.18. Verify that the Submitted Loan Penalty List page is displayed successfully.", function () {
    create_loan_penalty.submittedButtonCheck();
  });

  it("16.19. Verify that the Status dropdown successfully filters Submitted Loan Penalty records.", function () {
    create_loan_penalty.statusSubmittedDropdownCheck();
  });

  it("16.20. Verify that the Status dropdown successfully filters Approved Loan Penalty records.", function () {
    create_loan_penalty.statusApprovedDropdownCheck();
  });

  it("16.21. Verify successful search results using the Loan Penalty name.", function () {
    create_loan_penalty.searchInLoanPenaltyName();
  });

  it("16.22. Verify successful reset of the Loan Penalty Grid List using the Reset button.", function () {
    create_loan_penalty.gridResetButtonCheck();
  });

  it("16.23. Verify successful refresh of the Loan Penalty Grid List using the Refresh button.", function () {
    create_loan_penalty.gridRefreshButtonCheck();
  });

  it("16.24. Verify that clicking the Search button displays filtered Loan Penalty records successfully.", function () {
    create_loan_penalty.gridSearchButtonCheck();
  });

  it("16.25. Verify Loan Penalty: the list displays the correct breadcrumb.", function () {
    create_loan_penalty.listBreadcrumbCheck();
  });

  it("16.26. Verify Loan Penalty: the grid displays all required columns.", function () {
    create_loan_penalty.requiredGridColumnsCheck();
  });

  it("16.27. Verify Loan Penalty: the grid displays valid records and amounts or a visible empty state.", function () {
    create_loan_penalty.recordsOrEmptyStateCheck();
  });

  it("16.28. Verify Loan Penalty: office, samity, status, date and search controls are visible.", function () {
    create_loan_penalty.filterControlsCheck();
  });

  it("16.29. Verify Loan Penalty: a non-existing search displays No Data.", function () {
    create_loan_penalty.noResultSearchCheck();
  });

  it("16.30. Verify Loan Penalty: Reset clears search and displays records or No Data.", function () {
    create_loan_penalty.resetSearchCheck();
  });

  it("16.31. Verify Loan Penalty: Refresh retains the list columns and valid grid state.", function () {
    create_loan_penalty.refreshListStateCheck();
  });

  it("16.32. Verify Loan Penalty: the Add New button is visible and enabled.", function () {
    create_loan_penalty.addButtonCheck();
  });

  it("16.33. Verify that the Grid List content changes correctly when switching the language from English to Bangla.", function () {
    create_loan_penalty.gridLanguageSwitchCheck();
  });
});
