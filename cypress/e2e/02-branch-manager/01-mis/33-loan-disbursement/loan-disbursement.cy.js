// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/33-loan-disbursement/loan-disbursement.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_disbursement } from "./loan-disbursement.po";

describe("33. Loan Disbursement Module Test Cases", function () {
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
    it("33.01. Verify that the Loan Disbursement grid list page loads successfully", function () {
        create_loan_disbursement.gridLoanDisbursementListPage();
    });

    it("33.02. Verify that the Action button performs the expected operation when clicked", function () {
        create_loan_disbursement.actionButtonCheck();
    });

    it("33.03. Verify that Loan Disbursement details are displayed correctly in the View page", function () {
        create_loan_disbursement.viewLoanDisbursement();
    });

    it("33.04. Verify that clicking the 'Go Back' button from the View page redirects to the grid list page", function () {
        create_loan_disbursement.viewGoBackButton();
    });

    it("33.05. Verify that search functionality works correctly using Loan Disbursement name", function () {
        create_loan_disbursement.gridSearchButtonCheck();
    });

    it("33.06. Verify that the Reset button clears filters and reloads the grid list", function () {
        create_loan_disbursement.gridResetButtonCheck();
    });

    it("33.07. Verify that the Refresh button reloads the Loan Disbursement grid list successfully", function () {
        create_loan_disbursement.gridRefreshButtonCheck();
    });

    it("33.08. Verify that enabling the disbursed filter displays the correct grid list data.", function () {
        create_loan_disbursement.gridDisbursedButton();
    });

    it("33.09. Verify that disabling the disbursed filter updates the grid list correctly.", function () {
        create_loan_disbursement.gridDisbursedButtonOff();
    });

    it("33.10. Verify successful loan disbursement from the grid list using the Disburse button", function () {
        create_loan_disbursement.loanDisburseButtonCheck();
    });

    it("33.11. Verify successful loan disbursement from the grid list using the Disburse submit button", function () {
        create_loan_disbursement.loanDisburseSubmitButtonCheck();
    });

    it("33.12. Verify that the Loan Disbursement breadcrumb is correct.", function () {
        create_loan_disbursement.listBreadcrumbCheck();
    });

    it("33.13. Verify that all required loan disbursement columns are displayed.", function () {
        create_loan_disbursement.requiredGridColumnsCheck();
    });

    it("33.14. Verify that loan records contain valid identifiers, amounts and terms, or show No Data.", function () {
        create_loan_disbursement.gridRecordDataCheck();
    });

    it("33.15. Verify that office, Disbursed toggle and search controls are available.", function () {
        create_loan_disbursement.searchControlsCheck();
    });

    it("33.16. Verify that a nonexistent search displays No Data.", function () {
        create_loan_disbursement.noResultSearchCheck();
    });

    it("33.17. Verify that Reset clears an unmatched search and restores the list.", function () {
        create_loan_disbursement.resetRestoresGridCheck();
    });

    it("33.18. Verify that Refresh keeps the Loan Disbursement list available.", function () {
        create_loan_disbursement.refreshListStateCheck();
    });

    it("33.19. Verify that Member Name displays the ascending sort indicator.", function () {
        create_loan_disbursement.nameAscendingSortCheck();
    });

    it("33.20. Verify that Member Name displays the descending sort indicator.", function () {
        create_loan_disbursement.nameDescendingSortCheck();
    });

    it("33.21. Verify that first-page pagination or the empty state displays correctly.", function () {
        create_loan_disbursement.paginationOrEmptyStateCheck();
    });

    it("33.22. Verify that the grid list content updates correctly when switching language from English to Bangla", function () {
        create_loan_disbursement.gridLanguageSwitchCheck();
    });


});
