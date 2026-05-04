// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/02-ledger-sub-group/ledger-sub-group.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_ledger_sub_group } from "./ledger-sub-group.po";

describe("02. Ledger Sub Group Module Test Cases", function () {
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
            cy.switchModule("AIS");
        });
    });

    after(() => {
        cy.logout();
    });

    it("02.01. Verify that the Ledger Sub Group list page loads successfully.", function () {
        create_ledger_sub_group.gridLedgerSubGroupListPage();
    });

    it("02.02. Verify that a Ledger Sub Group is created successfully with valid required data.", function () {
        create_ledger_sub_group.createLedgerSubGroup();
    });

    it("02.03. Verify that a Ledger Sub Group cannot be created without a Group ID.", function () {
        create_ledger_sub_group.createwithoutGroupId();
    });

    it("02.04. Verify that a Ledger Sub Group cannot be created without an English name.", function () {
        create_ledger_sub_group.createwithoutNameEnglish();
    });

    it("02.05. Verify that a Ledger Sub Group cannot be created without a Bangla name.", function () {
        create_ledger_sub_group.createwithoutNameBangla();
    });

    it("02.06. Verify that a Ledger Sub Group cannot be created without selecting a Balance Sheet Item.", function () {
        create_ledger_sub_group.createwithoutBalanceSheetItem();
    });

    it("02.07. Verify that a Ledger Sub Group cannot be created without selecting a Status.", function () {
        create_ledger_sub_group.createwithoutStatus();
    });

    it("02.08. Verify that the Action button performs the expected operation.", function () {
        create_ledger_sub_group.actionButtonCheck();
    });

    it("02.09. Verify that edit mode can be toggled on/off and fields behave accordingly (enabled/disabled).", function () {
        create_ledger_sub_group.turnOffEditMode();
    });

    it("02.10. Verify that clicking the Go Back button from edit mode redirects to the list page.", function () {
        create_ledger_sub_group.turnOffEditModeGoBackButtonCheck();
    });

    it("02.11. Verify that the Edit button functions correctly.", function () {
        create_ledger_sub_group.editButton();
    });

    it("02.12. Verify that the Reset button in edit mode clears updated values.", function () {
        create_ledger_sub_group.editResetButton();
    });

    it("02.13. Verify validation messages are displayed correctly in edit mode.", function () {
        create_ledger_sub_group.editValidationMessageCheck();
    });

    it("02.14. Verify that clicking Go Back from the edit page redirects to the list page.", function () {
        create_ledger_sub_group.editGoBackButton();
    });

    it("02.15. Verify that the Submit button updates the Ledger Sub Group successfully.", function () {
        create_ledger_sub_group.editSubmitButton();
    });

    it("02.16. Verify that inactive Ledger Sub Groups can be filtered using the Status dropdown.", function () {
        create_ledger_sub_group.statusInactiveDropdownCheck();
    });

    it("02.17. Verify that active Ledger Sub Groups are filtered correctly using the Status dropdown.", function () {
        create_ledger_sub_group.statusActiveDropdownCheck();
    });

    it("02.18. Verify that filtering by Ledger Group ID returns correct results.", function () {
        create_ledger_sub_group.ledgerGroupId();
    });

    it("02.19. Verify that searching by Ledger Sub Group name returns correct results.", function () {
        create_ledger_sub_group.searchName();
    });

    it("02.20. Verify that the Reset button clears all applied filters on the grid.", function () {
        create_ledger_sub_group.gridResetButtonCheck();
    });

    it("02.21. Verify that the Refresh button reloads the grid data successfully.", function () {
        create_ledger_sub_group.gridRefreshButtonCheck();
    });

    it("02.22. Verify that the Ledger Sub Group dropdown displays data correctly.", function () {
        create_ledger_sub_group.gridLedgerSubGroupDropdown();
    });

    it("02.23. Verify that the Reset button clears all input fields on the create form.", function () {
        create_ledger_sub_group.createResetButtonCheck();
    });

    it("02.24. Verify that validation messages are displayed when submitting empty required fields.", function () {
        create_ledger_sub_group.createValidationMessageCheck();
    });

    it("02.25. Verify that clicking Go Back from the create page redirects to the list page.", function () {
        create_ledger_sub_group.createGoBackButtonCheck();
    });

    it("02.26. Verify that grid content updates correctly when switching language from English to Bangla.", function () {
        create_ledger_sub_group.gridLanguageSwitchCheck();
    });

});
