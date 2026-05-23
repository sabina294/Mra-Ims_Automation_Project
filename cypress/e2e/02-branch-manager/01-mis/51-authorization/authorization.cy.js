// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/51-authorization/authorization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { authorization } from "./authorization.po";

describe("51. Authorization Module Test Cases", function () {
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

    it("51.01. Verify that the Authorization List page loads successfully.", function () {
        authorization.gridAuthorizationListPage();
    });

    it("51.02. Verify that the checkbox selection functionality works correctly.", function () {
        authorization.gridCheckboxCheck();
    });

    it("51.03. Verify that the Lock functionality works successfully with valid information.", function () {
        authorization.authorizationLock();
    });

    it("51.04. Verify that the Unlock functionality works successfully with valid information.", function () {
        authorization.authorizationUnlock();
    });

    it("51.05. Verify that the Samity authorization functionality works correctly.", function () {
        authorization.authorizeSamity();
    });

    it("51.06. Verify that grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        authorization.gridResetButtonCheck();
    });

    it("51.07. Verify that the Authorization grid refreshes successfully.", function () {
        authorization.gridRefreshButtonCheck();
    });

    it("51.08. Verify that the Pending On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButton();
    });

    it("51.09. Verify that the Pending Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridPendingFieldOfficerDropdownCheck();
    });

    it("51.10. Verify that the Pending Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButtonOff();
    });

    it("51.11. Verify that the History On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOnCheck();
    });

    it("51.12. Verify that the History Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryFieldOfficerDropdownCheck();
    });

    it("51.13. Verify that the History Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOffCheck();
    });

    it("51.14. Verify that the Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridFieldOfficerDropdownCheck();
    });

    it("51.15. Verify that the Samity dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridSamityDropdownCheck();
    });

    // it("51.16. Verify that the Samity unauthorization functionality works correctly.", function () {
    //     authorization.UnauthorizeSamity();
    // });

    it("51.17. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        authorization.gridLanguageSwitchCheck();
    });
});