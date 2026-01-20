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

    it("02.01. Verify the ledger sub group list page loads correctly.", function () {
        create_ledger_sub_group.gridLedgerSubGroupListPage();
    });

    it("02.02. Verify a ledger sub group record is created successfully when all required fields are filled with valid data.", function () {
        create_ledger_sub_group.createLedgerSubGroup();
    });

    it("02.03. Verify that a ledger sub group cannot be created without a group id, even if all other fields are valid..", function () {
        create_ledger_sub_group.createwithoutGroupId();
    });

    it("02.04. Verify that a ledger sub group cannot be created without a name english, even if all other fields are valid..", function () {
        create_ledger_sub_group.createwithoutNameEnglish();
    });

    it("02.05. Verify that a ledger sub group cannot be created without a name bangla, even if all other fields are valid..", function () {
        create_ledger_sub_group.createwithoutNameBangla();
    });

    it("02.06. Verify successfully performs the action when the action button is clicked.", function () {
        create_ledger_sub_group.actionButtonCheck();
    });

    it("02.07. Verify that the ledger sub group forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
        create_ledger_sub_group.turnOffEditMode();
    });

    it("02.08. Verify the ledger sub group edit reset button functions correctly.", function () {
        create_ledger_sub_group.editResetButton();
    });

    it("02.09. Verify that clicking the go back button on the ledger sub group edit page redirects the user to the ledger sub group list page.", function () {
        create_ledger_sub_group.editGoBackButton();
    });

    it("02.10. Verify the ledger sub group edit submit button functions correctly.", function () {
        create_ledger_sub_group.editSubmitButton();
    });

    it("02.11. Verify the user can filter inactive ledger sub groups using the status dropdown on the ledger sub group list page.", function () {
        create_ledger_sub_group.statusInactiveDropdownCheck();
    });

    it("02.12. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_ledger_sub_group.statusActiveDropdownCheck();
    });

    it("02.13. Verify the ledger group id result is filtered correctly by the status dropdown.", function () {
        create_ledger_sub_group.statusLedgerGroupIdDropdownCheck();
    });

    it("02.14. Verify the search returns correct results when searching by ledger sub group name.", function () {
        create_ledger_sub_group.searchName();
    });

    it("02.15. Verify the grid list resets successfully when the reset button is clicked on the ledger sub group page.", function () {
        create_ledger_sub_group.gridResetButtonCheck();
    });

    it("02.16. Verify that the grid list is refreshed successfully when the refresh button is clicked on the ledger sub group page.", function () {
        create_ledger_sub_group.gridRefreshButtonCheck();
    });

    it("02.17. Verify that the grid list is ledger sub group dropdown successfully when the refresh button is clicked on the ledger sub group page.", function () {
        create_ledger_sub_group.gridLedgerSubGroupDropdown();
    });

    it("02.18. Verify the ledger sub group creation reset button clears all entered input values.", function () {
        create_ledger_sub_group.createResetButtonCheck();
    });

    it("02.19. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_ledger_sub_group.createValidationMessageCheck();
    });

    it("02.20. Verify that clicking the go back button on the ledger sub group create page redirects the user to the ledger sub group list page.", function () {
        create_ledger_sub_group.createGoBackButtonCheck();
    });

    it("02.21. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_ledger_sub_group.gridLanguageSwitchCheck();
    });

});
