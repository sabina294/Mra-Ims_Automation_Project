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

    // it("54.02. Verify successfully performs the action when the action button is clicked.", function () {
    //     grid_savings_withdraw.actionButtonCheck();
    // });

    // it('54.03. Verify successful Savings Withdraw information View.', function () {
    //     grid_savings_withdraw.viewSavingsWithdraw();
    // });

    // it("54.04. Verify that clicking the go back button on the Savings Withdraw view page redirects the user to the Savings Withdraw list page.", function () {
    //     grid_savings_withdraw.viewGoBackButtonCheck();
    // });

    // it("54.05. Verify Successful Search Result by Savings Withdraw Name", function () {
    //     grid_savings_withdraw.searchInSavingsWithdrawName();
    // });

    it('54.06. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_savings_withdraw.statusOfficeDropdownCheck();
    });

    // it("54.07. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    //     grid_savings_withdraw.statusDraftDropdownCheck();
    // });

    // it("54.08. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    //     grid_savings_withdraw.statusSubmittedDropdownCheck();
    // });

    it("54.09. Verify display the grid list successfully when the History button on is clicked on the member management page", function () {
        grid_savings_withdraw.gridHistoryOnButton();
    });

    it("54.10. Verify display the grid list successfully when the History button off is clicked on the member management page", function () {
        grid_savings_withdraw.gridHistoryButtonOff();
    });

    it("54.11. Verify Successful Reset of Grid List Using the Reset Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridResetButtonCheck();
    });

    it("54.12. Verify Successful Refresh of Grid List Using the Refresh Button on Savings Withdraw Page.", function () {
        grid_savings_withdraw.gridRefreshButtonCheck();
    });

    it("54.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_savings_withdraw.gridLanguageSwitchCheck();
    });
});
