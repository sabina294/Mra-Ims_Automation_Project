// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/31-authorization/authorization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { authorization } from "./authorization.po";

describe("31. Authorization Module Test Cases", function () {
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

    it("31.01. Verify that the Authorization List page loads successfully.", function () {
        authorization.gridAuthorizationListPage();
    });

    it("31.02. Verify that the checkbox selection functionality works correctly.", function () {
        authorization.gridCheckboxCheck();
    });

    it("31.03. Verify that the Lock functionality works successfully with valid information.", function () {
        authorization.authorizationLock();
    });

    it("31.04. Verify that the Unlock functionality works successfully with valid information.", function () {
        authorization.authorizationUnlock();
    });

    // it("31.05. Verify that the Samity authorization functionality works correctly.", function () {
    //     authorization.authorizeSamity();
    // });


    it("31.06. Verify that grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        authorization.gridResetButtonCheck();
    });

    it("31.07. Verify that the Authorization grid refreshes successfully.", function () {
        authorization.gridRefreshButtonCheck();
    });

    it("31.08. Verify that the Pending On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButton();
    });

    it("31.09. Verify that the Pending Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridPendingFieldOfficerDropdownCheck();
    });

    it("31.10. Verify that the Pending Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButtonOff();
    });

    it("31.11. Verify that the History On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOnCheck();
    });

    it("31.12. Verify that the History Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryFieldOfficerDropdownCheck();
    });

    it("31.13. Verify that the History Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOffCheck();
    });

    it("31.14. Verify that the Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridFieldOfficerDropdownCheck();
    });

    it("31.15. Verify that the Samity dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridSamityDropdownCheck();
    });

    it("31.16. Verify the Authorization breadcrumb is correct.", function () {
        authorization.listBreadcrumbCheck();
    });

    it("31.17. Verify all required Authorization columns are visible.", function () {
        authorization.requiredGridColumnsCheck();
    });

    it("31.18. Verify the grid shows valid records and monetary amounts or No Data.", function () {
        authorization.recordsAndAmountsCheck();
    });

    it("31.19. Verify search and reset controls are available.", function () {
        authorization.searchControlsCheck();
    });

    it("31.20. Verify Refresh retains the Authorization list and renders records or No Data.", function () {
        authorization.refreshListStateCheck();
    });

    it("31.21. Verify pagination starts on page one or the empty state is displayed.", function () {
        authorization.paginationOrEmptyStateCheck();
    });

    it("31.22. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        authorization.gridLanguageSwitchCheck();
    });
});
