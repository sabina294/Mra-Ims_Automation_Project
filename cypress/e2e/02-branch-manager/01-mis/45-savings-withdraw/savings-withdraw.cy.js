// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/45-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_withdraw } from "./savings-withdraw.po";

describe("45. Savings Withdraw Module Test Cases", function () {
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
    it("45.01. Verify that the Savings Withdraw List page loads successfully.", function () {
        create_savings_withdraw.gridSavingsWithdrawListPage();
    });

    it("45.02. Verify that a new Savings Withdraw record can be created successfully with valid required data.", function () {
        create_savings_withdraw.createNewWithdraw();
    });

    it("45.03. Verify that a new Savings Withdraw record is saved successfully after providing valid required information.", function () {
        create_savings_withdraw.saveNewWithdraw();
    });

    it("45.04. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_savings_withdraw.actionButtonCheck();
    });

    it("45.05. Verify that Savings Withdraw details, including name and description, are displayed successfully.", function () {
        create_savings_withdraw.viewWithdraw();
    });

    it("45.06. Verify that the Go Back button works correctly from the Savings Withdraw details page.", function () {
        create_savings_withdraw.viewGoBack();
    });

    it("45.07. Verify that the grid list is reset successfully when the Reset button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridResetButtonCheck();
    });

    it("45.08. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridRefreshButtonCheck();
    });

    it("45.09. Verify that the grid list is filtered correctly when a Samity is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridSamityDropdownCheck();
    });

    it("45.10. Verify that the Grid History button displays the data information successfully when History is enabled.", function () {
        create_savings_withdraw.gridHistoryButtonOnCheck();
    });

    it("45.11. Verify that the grid list is filtered correctly when a Field Officer is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.samityDropdownCheck();
    });

    it("45.12. Verify that the Grid History button displays the data information successfully when History is disabled.", function () {
        create_savings_withdraw.gridHistoryButtonOffCheck();
    });

    it("45.13. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_savings_withdraw.gridLanguageSwitchCheck();
    });
});
