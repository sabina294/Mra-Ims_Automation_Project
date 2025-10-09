// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/43-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_savings_withdraw } from "./savings-withdraw.po";

describe("43. Savings Withdraw Module Test Cases", function () {
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

    it("43.01. Verify Savings Withdraw  Grid List Page loads successfully", function () {
        grid_savings_withdraw.gridSavingsWithdrawListPage();
    });

    it("43.02. Verify successfully performs the action when the action button is clicked.", function () {
        grid_savings_withdraw.actionButtonCheck();
    });

    it('43.03. Verify successful Savings Withdraw information View.', function () {
        grid_savings_withdraw.viewSavingsWithdraw();
    });

    it("43.04. Verify that clicking the go back button on the Savings Withdraw view page redirects the user to the Savings Withdraw list page.", function () {
        grid_savings_withdraw.viewGoBackButtonCheck();
    });

    it("43.05. Verify Successful Search Result by Savings Withdraw Name", function () {
        grid_savings_withdraw.searchInSavingsWithdrawName();
    });

    it('43.06. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_savings_withdraw.statusOfficeDropdownCheck();
    });

    it("43.07. Verify Successful Reset of Grid List Using the Reset Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridResetButtonCheck();
    });

    it("43.08. Verify Successful Refresh of Grid List Using the Refresh Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridRefreshButtonCheck();
    });

    it("43.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_savings_withdraw.gridLanguageSwitchCheck();
    });
});
