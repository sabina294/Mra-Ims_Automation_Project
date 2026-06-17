// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/28-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_withdraw } from "./savings-withdraw.po";

describe("28. Savings Withdraw Module Test Cases", function () {
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

    it("28.01. Verify that the Savings Withdraw list page loads successfully.", function () {
        create_savings_withdraw.gridSavingsWithdrawListPage();
    });

    it("28.02. Verify that a new Savings Withdraw record can be created successfully with valid required data.", function () {
        create_savings_withdraw.createNewWithdraw();
    });

    it("28.03. Verify that the new Savings Withdraw record is saved successfully after providing valid required information.", function () {
        create_savings_withdraw.saveNewWithdraw();
    });

    it("28.04. Verify that the correct action options are displayed when the Action button is clicked.", function () {
        create_savings_withdraw.actionButtonCheck();
    });

    it("28.05. Verify that the Savings Withdraw details, including name and description, are displayed successfully.", function () {
        create_savings_withdraw.viewWithdraw();
    });

    it("28.06. Verify that the Go Back button works correctly from the Savings Withdraw details page.", function () {
        create_savings_withdraw.viewGoBack();
    });

    it("28.07. Verify that the Savings Withdraw record can be unsubmitted successfully from the Action menu.", function () {
        create_savings_withdraw.actionWithdrawUnsubmit();
    });

    it("28.08. Verify that the user can navigate back successfully after unsubmission from the details page.", function () {
        create_savings_withdraw.actionWithdrawUnsubmitGoBack();
    });

    it("28.09. Verify that the Savings Withdraw record is unsubmitted successfully when the Unsubmit button is clicked.", function () {
        create_savings_withdraw.withdrawUnsubmit();
    });

    it("28.10. Verify that an existing Savings Withdraw record can be edited successfully.", function () {
        create_savings_withdraw.actionEditSavingsWithdraw();
    });

    it("28.11. Verify that the Savings Withdraw edit form is saved successfully when the Draft button is clicked.", function () {
        create_savings_withdraw.editDraftButton();
    });

    it("28.12. Verify that clicking the Go Back button from the Savings Withdraw edit form redirects the user successfully.", function () {
        create_savings_withdraw.editGoBack();
    });

    it("28.13. Verify that the Savings Withdraw record can be submitted successfully from the Action menu.", function () {
        create_savings_withdraw.actionWithdrawSubmit();
    });

    it("28.14. Verify that the Go Back button works correctly from the Savings Withdraw Action page.", function () {
        create_savings_withdraw.actionWithdrawGoBack();
    });

    it("28.15. Verify that the Savings Withdraw record can be submitted successfully.", function () {
        create_savings_withdraw.withdrawSubmit();
    });

    it("28.16. Verify that the Savings Withdraw record can be deleted successfully from the Action menu.", function () {
        create_savings_withdraw.withdrawDeleteProcess();
    });

    it("28.17. Verify that the delete option is displayed correctly from the Savings Withdraw Action menu.", function () {
        create_savings_withdraw.withdrawActionDelete();
    });

    it("28.18. Verify that the Savings Withdraw record is deleted successfully.", function () {
        create_savings_withdraw.withdrawDelete();
    });

    it("28.19. Verify that a new Savings Withdraw record can be created successfully after deletion.", function () {
        create_savings_withdraw.withdrawAgain();
    });

    it("28.20. Verify that the newly created Savings Withdraw record is saved successfully after providing valid required information.", function () {
        create_savings_withdraw.againSaveNewWithdraw();
    });

    it("28.21. Verify that the grid list is reset successfully when the Reset button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridResetButtonCheck();
    });

    it("28.22. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridRefreshButtonCheck();
    });

    it("28.23. Verify that the grid list is filtered correctly when a Samity is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridSamityDropdownCheck();
    });

    it("28.24. Verify that the Grid History button displays data successfully when History is enabled.", function () {
        create_savings_withdraw.gridHistoryButtonOnCheck();
    });

    it("28.25. Verify that the grid list is filtered correctly when a Field Officer is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.samityDropdownCheck();
    });

    it("28.26. Verify that the Grid History button displays data successfully when History is disabled.", function () {
        create_savings_withdraw.gridHistoryButtonOffCheck();
    });

    it("28.27. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
        create_savings_withdraw.gridLanguageSwitchCheck();
    });
});
