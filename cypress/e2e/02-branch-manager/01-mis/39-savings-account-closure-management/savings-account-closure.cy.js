// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/39-savings-account-closure-management/savings-account-closure.cy.js --browser chrome --headed

import { savings_account_closure } from "./savings-account-closure.po";

describe("39. Savings Account Closure Management Module Test Cases", function () {
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

    it("39.01. Verify that the Savings Account Closure Management list page loads successfully.", function () {
        savings_account_closure.gridSavingsAccountClosureListPage();
    });

    it("39.02. Verify that inactive closure records can be filtered by status.", function () {
        savings_account_closure.statusInactiveDropdownCheck();
    });

    it("39.03. Verify that active closure records can be filtered by status.", function () {
        savings_account_closure.statusActiveDropdownCheck();
    });

    it("39.04. Verify that searching by savings account returns matching closure records.", function () {
        savings_account_closure.searchSavingsAccountClosure();
    });

    it("39.05. Verify that the Reset button clears the closure grid filters.", function () {
        savings_account_closure.gridResetButtonCheck();
    });

    it("39.06. Verify that the Refresh button reloads the closure grid.", function () {
        savings_account_closure.gridRefreshButtonCheck();
    });

    it("39.07. Verify that the Search button displays matching closure records.", function () {
        savings_account_closure.gridSearchButtonCheck();
    });

    it("39.08. Verify validation messages appear when Reset is clicked with empty required fields", function () {
        savings_account_closure.createResetButtonCheck();
    });

    it("39.09. Verify validation messages appear when Draft is clicked with empty required fields", function () {
        savings_account_closure.createDraftButtonCheck();
    });

    it("39.10. Verify validation messages appear when Submit is clicked with empty required fields", function () {
        savings_account_closure.createSubmitButtonCheck();
    });

    it("39.11. Verify validation messages appear when Go Back is clicked with empty required fields", function () {
        savings_account_closure.createGoBackButtonCheck();
    });

    it("39.12. Verify that the breadcrumb displays the savings account closure hierarchy.", function () {
        savings_account_closure.listBreadcrumbCheck();
    });

    it("39.13. Verify that all closure list columns are visible.", function () {
        savings_account_closure.requiredGridColumnsCheck();
    });

    it("39.14. Verify that the list displays closure data and numeric closing amounts or a visible empty state.", function () {
        savings_account_closure.gridRecordsOrEmptyCheck();
    });

    it("39.15. Verify that office, status and search controls are available.", function () {
        savings_account_closure.searchControlsCheck();
    });

    it("39.16. Verify that an unmatched search displays No Data.", function () {
        savings_account_closure.noResultSearchCheck();
    });

    it("39.17. Verify that Reset clears an unmatched search and displays records or the empty state.", function () {
        savings_account_closure.resetSearchInputCheck();
    });

    it("39.18. Verify that Refresh retains the closure list route and displays records or the empty state.", function () {
        savings_account_closure.refreshListStateCheck();
    });

    it("39.19. Verify that the Create Savings Encashment button is visible and enabled.", function () {
        savings_account_closure.createEncashmentButtonCheck();
    });

    it("39.20. Verify that the savings account ID ascending sort indicator is selected.", function () {
        savings_account_closure.accountIdAscendingSortCheck();
    });

    it("39.21. Verify that the savings account ID descending sort indicator is selected.", function () {
        savings_account_closure.accountIdDescendingSortCheck();
    });

    it("39.22. Verify that the closure grid switches from English to Bangla.", function () {
        savings_account_closure.gridLanguageSwitchCheck();
    });
});
