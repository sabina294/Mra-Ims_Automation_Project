// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/30-savings-withdraw/savings-withdraw.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_savings_withdraw } from "./savings-withdraw.po";

describe("30. Savings Withdraw Module Test Cases", function () {
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

    after(() => {2
        cy.logout();
    });

    it("30.01. Verify that the Savings Withdraw list page loads successfully.", function () {
        create_savings_withdraw.gridSavingsWithdrawListPage();
    });

    it("30.02. Verify that a new Savings Withdraw record can be created successfully with valid required data.", function () {
        create_savings_withdraw.createNewWithdraw();
    });

    it("30.03. Verify that the new Savings Withdraw record is saved successfully after providing valid required information.", function () {
        create_savings_withdraw.saveNewWithdraw();
    });

    it("30.04. Verify that the correct action options are displayed when the Action button is clicked.", function () {
        create_savings_withdraw.actionButtonCheck();
    });

    it("30.05. Verify that the Savings Withdraw details, including name and description, are displayed successfully.", function () {
        create_savings_withdraw.viewWithdraw();
    });

    it("30.06. Verify that the Go Back button works correctly from the Savings Withdraw details page.", function () {
        create_savings_withdraw.viewGoBack();
    });

    it("30.07. Verify that the Savings Withdraw record can be unsubmitted successfully from the Action menu.", function () {
        create_savings_withdraw.actionWithdrawUnsubmit();
    });

    it("30.08. Verify that the user can navigate back successfully after unsubmission from the details page.", function () {
        create_savings_withdraw.actionWithdrawUnsubmitGoBack();
    });

    it("30.09. Verify that the Savings Withdraw record is unsubmitted successfully when the Unsubmit button is clicked.", function () {
        create_savings_withdraw.withdrawUnsubmit();
    });

    it("30.10. Verify that an existing Savings Withdraw record can be edited successfully.", function () {
        create_savings_withdraw.actionEditSavingsWithdraw();
    });

    it("30.11. Verify that the Savings Withdraw edit form is saved successfully when the Draft button is clicked.", function () {
        create_savings_withdraw.editDraftButton();
    });

    it("30.12. Verify that clicking the Go Back button from the Savings Withdraw edit form redirects the user successfully.", function () {
        create_savings_withdraw.editGoBack();
    });

    it("30.13. Verify that the Savings Withdraw record can be submitted successfully from the Action menu.", function () {
        create_savings_withdraw.actionWithdrawSubmit();
    });

    it("30.14. Verify that the Go Back button works correctly from the Savings Withdraw Action page.", function () {
        create_savings_withdraw.actionWithdrawGoBack();
    });

    it("30.15. Verify that the Savings Withdraw record can be submitted successfully.", function () {
        create_savings_withdraw.withdrawSubmit();
    });

    it("30.16. Verify that the Savings Withdraw record can be deleted successfully from the Action menu.", function () {
        create_savings_withdraw.withdrawDeleteProcess();
    });

    it("30.17. Verify that the delete option is displayed correctly from the Savings Withdraw Action menu.", function () {
        create_savings_withdraw.withdrawActionDelete();
    });

    it("30.18. Verify that the Savings Withdraw record is deleted successfully.", function () {
        create_savings_withdraw.withdrawDelete();
    });

    it("30.19. Verify that a new Savings Withdraw record can be created successfully after deletion.", function () {
        create_savings_withdraw.withdrawAgain();
    });

    it("30.20. Verify that the newly created Savings Withdraw record is saved successfully after providing valid required information.", function () {
        create_savings_withdraw.againSaveNewWithdraw();
    });

    it("30.21. Verify that the grid list is reset successfully when the Reset button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridResetButtonCheck();
    });

    it("30.22. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridRefreshButtonCheck();
    });

    it("30.23. Verify that the grid list is filtered correctly when a Samity is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.gridSamityDropdownCheck();
    });

    it("30.24. Verify that the Grid History button displays data successfully when History is enabled.", function () {
        create_savings_withdraw.gridHistoryButtonOnCheck();
    });

    it("30.25. Verify that the grid list is filtered correctly when a Field Officer is selected from the dropdown on the Savings Withdraw page.", function () {
        create_savings_withdraw.samityDropdownCheck();
    });

    it("30.26. Verify that the Grid History button displays data successfully when History is disabled.", function () {
        create_savings_withdraw.gridHistoryButtonOffCheck();
    });

    it("30.27. Verify Savings Withdraw: the breadcrumb is correct.", function () {
        create_savings_withdraw.listBreadcrumbCheck();
    });

    it("30.28. Verify Savings Withdraw: all required grid columns are visible.", function () {
        create_savings_withdraw.requiredGridColumnsCheck();
    });

    it("30.29. Verify Savings Withdraw: the grid shows valid records and amounts or No Data.", function () {
        create_savings_withdraw.recordsAndAmountsCheck();
    });

    it("30.30. Verify Savings Withdraw: search and reset controls are available.", function () {
        create_savings_withdraw.searchControlsCheck();
    });

    it("30.31. Verify Savings Withdraw: the New button is visible and enabled.", function () {
        create_savings_withdraw.newButtonAvailableCheck();
    });

    it("30.32. Verify Savings Withdraw: Refresh retains the list and renders records or No Data.", function () {
        create_savings_withdraw.refreshListStateCheck();
    });

    it("30.33. Verify Savings Withdraw: pagination starts on page one or the empty state is displayed.", function () {
        create_savings_withdraw.paginationOrEmptyStateCheck();
    });

    it("30.34. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
        create_savings_withdraw.gridLanguageSwitchCheck();
    });
});
