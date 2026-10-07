// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/32-loan-account-management/loan-account-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_account_management } from "./loan-account-management.po";

describe("32. Loan Account Management Module Test Cases", function () {
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

  it("32.01. Verify that the Loan Account Management grid list page loads successfully", function () {
    create_loan_account_management.gridLoanAccountManagementListPage();
  });

  it("32.02. Verify that the action button performs the expected action successfully", function () {
    create_loan_account_management.actionButtonCheck();
  });

  it("32.03. Verify that Loan Account Management details can be viewed successfully", function () {
    create_loan_account_management.viewLoanAccountManagement();
  });

  it("32.04. Verify that clicking the Go Back button redirects the user to the Loan Account Management list page", function () {
    create_loan_account_management.viewGoBackButton();
  });

  it("32.05. Verify that inactive Loan Account Management records can be filtered using the Status dropdown", function () {
    create_loan_account_management.statusInactiveDropdownCheck();
  });

  it("32.06. Verify that active Loan Account Management records can be filtered using the Status dropdown", function () {
    create_loan_account_management.statusActiveDropdownCheck();
  });

  it("32.07. Verify that the user can successfully search Loan Account Management records by name", function () {
    create_loan_account_management.searchInLoanAccountName();
  });

  it("32.08. Verify that the Reset button clears all filters and restores the default grid list", function () {
    create_loan_account_management.gridResetButtonCheck();
  });

  it("32.09. Verify that the Refresh button reloads the Loan Account Management grid list successfully", function () {
    create_loan_account_management.gridRefreshButtonCheck();
  });

  it("32.10. Verify that clicking the Search button redirects and displays the Loan Account Management list page correctly", function () {
    create_loan_account_management.gridSearchButtonCheck();
  });

  it("32.11. Verify that the Loan Account Management breadcrumb is correct.", function () {
    create_loan_account_management.listBreadcrumbCheck();
  });

  it("32.12. Verify that all required grid columns are displayed.", function () {
    create_loan_account_management.requiredGridColumnsCheck();
  });

  it("32.13. Verify that loan rows contain identifiers, member names, products and status.", function () {
    create_loan_account_management.gridRecordDataCheck();
  });

  it("32.14. Verify that loan amounts, terms and installment amounts are valid numbers.", function () {
    create_loan_account_management.loanAmountsCheck();
  });

  it("32.15. Verify that office, samity, status and search controls are visible.", function () {
    create_loan_account_management.searchControlsCheck();
  });

  it("32.16. Verify that an existing member name search returns matching records.", function () {
    create_loan_account_management.memberNameSearchCheck();
  });

  it("32.17. Verify that a partial member name search returns matching records.", function () {
    create_loan_account_management.partialMemberNameSearchCheck();
  });

  it("32.18. Verify that a nonexistent search displays No Data.", function () {
    create_loan_account_management.noResultSearchCheck();
  });

  it("32.19. Verify that Reset clears an unmatched search and restores records.", function () {
    create_loan_account_management.resetRestoresGridCheck();
  });

  it("32.20. Verify that Member Name displays the ascending sort indicator.", function () {
    create_loan_account_management.nameAscendingSortCheck();
  });

  it("32.21. Verify that Member Name displays the descending sort indicator.", function () {
    create_loan_account_management.nameDescendingSortCheck();
  });

  it("32.22. Verify that first-page pagination controls display correctly.", function () {
    create_loan_account_management.firstPagePaginationCheck();
  });

  it("32.23. Verify that the Active filter returns only Active loan accounts.", function () {
    create_loan_account_management.activeStatusResultCheck();
  });

  it("32.24. Verify that the grid list content switches correctly between English and Bangla", function () {
    create_loan_account_management.gridLanguageSwitchCheck();
  });
});
