// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/38-savings-account-closure-management/savings-account-closure.cy.js --browser chrome --headed

import { savings_account_closure } from "./savings-account-closure.po";

describe("38. Savings Account Closure Management Module Test Cases", function () {
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

    it("38.01. Verify that the Savings Account Closure Management list page loads successfully.", function () {
        savings_account_closure.gridSavingsAccountClosureListPage();
    });

    it("38.02. Verify that inactive closure records can be filtered by status.", function () {
        savings_account_closure.statusInactiveDropdownCheck();
    });

    it("38.03. Verify that active closure records can be filtered by status.", function () {
        savings_account_closure.statusActiveDropdownCheck();
    });

    it("38.04. Verify that searching by savings account returns matching closure records.", function () {
        savings_account_closure.searchSavingsAccountClosure();
    });

    it("38.05. Verify that the Reset button clears the closure grid filters.", function () {
        savings_account_closure.gridResetButtonCheck();
    });

    it("38.06. Verify that the Refresh button reloads the closure grid.", function () {
        savings_account_closure.gridRefreshButtonCheck();
    });

    it("38.07. Verify that the Search button displays matching closure records.", function () {
        savings_account_closure.gridSearchButtonCheck();
    });

    it("38.08. Verify that the closure grid switches from English to Bangla.", function () {
        savings_account_closure.gridLanguageSwitchCheck();
    });
});
