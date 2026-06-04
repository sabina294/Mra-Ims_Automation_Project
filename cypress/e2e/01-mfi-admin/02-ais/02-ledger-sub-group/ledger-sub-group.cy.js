// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/02-ledger-sub-group/ledger-sub-group.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_ledger_sub_group } from "./ledger-sub-group.po";

describe("02. Ledger Sub Group Module Test Cases", function () {
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
            cy.switchModule("AIS");
        });
    });


    after(() => {
        cy.logout();
    });

    it("02.01. Verify that the Ledger Sub Group list page loads successfully.", function () {
        create_ledger_sub_group.gridLedgerSubGroupListPage();
    });

    it("02.02. Verify that a Ledger Sub Group is created successfully when all required fields contain valid data.", function () {
        create_ledger_sub_group.createLedgerSubGroup();
    });

    it("02.03. Verify that a Ledger Sub Group cannot be created without selecting a Group ID, even when all other required fields contain valid data.", function () {
        create_ledger_sub_group.createwithoutGroupId();
    });

    it("02.04. Verify that a Ledger Sub Group cannot be created without entering the English Name, even when all other required fields contain valid data.", function () {
        create_ledger_sub_group.createwithoutNameEnglish();
    });

    it("02.05. Verify that a Ledger Sub Group cannot be created without entering the Bangla Name, even when all other required fields contain valid data.", function () {
        create_ledger_sub_group.createwithoutNameBangla();
    });

    it("02.06. Verify that a Ledger Sub Group cannot be created without selecting a Balance Sheet Item, even when all other required fields contain valid data.", function () {
        create_ledger_sub_group.createwithoutBalanceSheetItem();
    });

    it("02.07. Verify that a Ledger Sub Group cannot be created without selecting a Status, even when all other required fields contain valid data.", function () {
        create_ledger_sub_group.createwithoutStatus();
    });

    it("02.08. Verify that the Action button performs the expected action when clicked.", function () {
        create_ledger_sub_group.actionButtonCheck();
    });

    it("02.09. Verify that Edit Mode can be toggled on and off and that all fields return to view-only mode when Edit Mode is disabled.", function () {
        create_ledger_sub_group.turnOffEditMode();
    });

    it("02.10. Verify that the Edit Reset button clears all modified values and restores the original data.", function () {
        create_ledger_sub_group.editResetButton();
    });

    it("02.11. Verify that the Edit Submit button updates the Ledger Sub Group successfully.", function () {
        create_ledger_sub_group.editSubmitButton();
    });

    it("02.12. Verify that clicking the Go Back button on the Edit page redirects the user to the Ledger Sub Group list page.", function () {
        create_ledger_sub_group.editGoBackButton();
    });

    it("02.13. Verify that inactive Ledger Sub Groups can be filtered successfully using the Status dropdown.", function () {
        create_ledger_sub_group.statusInactiveDropdownCheck();
    });

    it("02.14. Verify that active Ledger Sub Groups are filtered correctly using the Status dropdown.", function () {
        create_ledger_sub_group.statusActiveDropdownCheck();
    });

    it("02.15. Verify that Ledger Sub Groups are filtered correctly by Ledger Group ID.", function () {
        create_ledger_sub_group.statusLedgerGroupIdDropdownCheck();
    });

    it("02.16. Verify that the search functionality returns the correct results when searching by Ledger Sub Group Name.", function () {
        create_ledger_sub_group.searchName();
    });

    it("02.17. Verify that the grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        create_ledger_sub_group.gridResetButtonCheck();
    });

    it("02.18. Verify that the grid list is refreshed successfully when the Refresh button is clicked.", function () {
        create_ledger_sub_group.gridRefreshButtonCheck();
    });

    it("02.19. Verify that the Ledger Sub Group dropdown functions correctly and displays the expected results.", function () {
        create_ledger_sub_group.gridLedgerSubGroupDropdown();
    });

    it("02.20. Verify that the Create Reset button clears all entered values from the Ledger Sub Group creation form.", function () {
        create_ledger_sub_group.createResetButtonCheck();
    });

    it("02.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
        create_ledger_sub_group.createValidationMessageCheck();
    });

    it("02.22. Verify that clicking the Go Back button on the Create page redirects the user to the Ledger Sub Group list page.", function () {
        create_ledger_sub_group.createGoBackButtonCheck();
    });

    it("02.23. Verify that the grid content is displayed correctly when switching the application language from English to Bangla.", function () {
        create_ledger_sub_group.gridLanguageSwitchCheck();
    });

});
