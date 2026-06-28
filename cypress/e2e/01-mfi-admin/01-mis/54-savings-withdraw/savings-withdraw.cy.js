// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/54-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_savings_withdraw } from "./savings-withdraw.po";

describe("54. Savings Withdraw Module Test Cases", function () {
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

    it("54.01. Verify Savings Withdraw  Grid List Page loads successfully", function () {
        grid_savings_withdraw.gridSavingsWithdrawListPage();
    });

    it('54.02. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_savings_withdraw.statusOfficeDropdownCheck();
    });

    it("54.03. Verify display the grid list successfully when the History button on is clicked on the member management page", function () {
        grid_savings_withdraw.gridHistoryOnButton();
    });

    it("54.04. Verify display the grid list successfully when the History button off is clicked on the member management page", function () {
        grid_savings_withdraw.gridHistoryButtonOff();
    });

    it("54.05. Verify Successful Reset of Grid List Using the Reset Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridResetButtonCheck();
    });

    it("54.06. Verify Successful Refresh of Grid List Using the Refresh Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridRefreshButtonCheck();
    });

    it("54.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_savings_withdraw.gridLanguageSwitchCheck();
    });
});
