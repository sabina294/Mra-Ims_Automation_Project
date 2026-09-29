// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/30-authorization/authorization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { authorization } from "./authorization.po";

describe("30. Authorization Module Test Cases", function () {
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

    it("30.01. Verify that the Authorization List page loads successfully.", function () {
        authorization.gridAuthorizationListPage();
    });

    it("30.02. Verify that the checkbox selection functionality works correctly.", function () {
        authorization.gridCheckboxCheck();
    });

    it("30.03. Verify that the Lock functionality works successfully with valid information.", function () {
        authorization.authorizationLock();
    });

    it("30.04. Verify that the Unlock functionality works successfully with valid information.", function () {
        authorization.authorizationUnlock();
    });

    // it("30.05. Verify that the Samity authorization functionality works correctly.", function () {
    //     authorization.authorizeSamity();
    // });


    it("30.06. Verify that grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        authorization.gridResetButtonCheck();
    });

    it("30.07. Verify that the Authorization grid refreshes successfully.", function () {
        authorization.gridRefreshButtonCheck();
    });

    it("30.08. Verify that the Pending On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButton();
    });

    it("30.09. Verify that the Pending Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridPendingFieldOfficerDropdownCheck();
    });

    it("30.10. Verify that the Pending Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButtonOff();
    });

    it("30.11. Verify that the History On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOnCheck();
    });

    it("30.12. Verify that the History Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryFieldOfficerDropdownCheck();
    });

    it("30.13. Verify that the History Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOffCheck();
    });

    it("30.14. Verify that the Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridFieldOfficerDropdownCheck();
    });

    it("30.15. Verify that the Samity dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridSamityDropdownCheck();
    });

    it("30.16. Verify the Authorization breadcrumb is correct.", function () {
        authorization.listBreadcrumbCheck();
    });

    it("30.17. Verify all required Authorization columns are visible.", function () {
        authorization.requiredGridColumnsCheck();
    });

    it("30.18. Verify the grid shows valid records and monetary amounts or No Data.", function () {
        authorization.recordsAndAmountsCheck();
    });

    it("30.19. Verify search and reset controls are available.", function () {
        authorization.searchControlsCheck();
    });

    it("30.20. Verify Refresh retains the Authorization list and renders records or No Data.", function () {
        authorization.refreshListStateCheck();
    });

    it("30.21. Verify pagination starts on page one or the empty state is displayed.", function () {
        authorization.paginationOrEmptyStateCheck();
    });

    it("30.22. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        authorization.gridLanguageSwitchCheck();
    });
});
