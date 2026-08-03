// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/53-authorization/authorization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { authorization } from "./authorization.po";

describe("53. Authorization Module Test Cases", function () {
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

    it("53.01. Verify that the Authorization List page loads successfully.", function () {
        authorization.gridAuthorizationListPage();
    });

    it("53.02. Verify that the checkbox selection functionality works correctly.", function () {
        authorization.gridCheckboxCheck();
    });

    it("53.03. Verify that the Lock functionality works successfully with valid information.", function () {
        authorization.authorizationLock();
    });

    it("53.04. Verify that the Unlock functionality works successfully with valid information.", function () {
        authorization.authorizationUnlock();
    });

    it("53.05. Verify that the Samity authorization functionality works correctly.", function () {
        authorization.authorizeSamity();
    });

    // it("53.05. Verify that the  single Samity authorization functionality works correctly.", function () {
    //     authorization.authorizeSingleSamity();
    // });

    it("53.06. Verify that grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        authorization.gridResetButtonCheck();
    });

    it("53.07. Verify that the Authorization grid refreshes successfully.", function () {
        authorization.gridRefreshButtonCheck();
    });

    it("53.08. Verify that the Pending On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButton();
    });

    it("53.09. Verify that the Pending Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridPendingFieldOfficerDropdownCheck();
    });

    it("53.10. Verify that the Pending Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridDraftButtonOff();
    });

    it("53.11. Verify that the History On list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOnCheck();
    });

    it("53.12. Verify that the History Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryFieldOfficerDropdownCheck();
    });

    it("53.13. Verify that the History Off list is displayed correctly in the Authorization grid.", function () {
        authorization.gridHistoryButtonOffCheck();
    });

    it("53.14. Verify that the Field Officer dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridFieldOfficerDropdownCheck();
    });

    it("53.15. Verify that the Samity dropdown list is displayed correctly in the Authorization grid.", function () {
        authorization.gridSamityDropdownCheck();
    });

    // it("53.16. Verify that the Samity unauthorization functionality works correctly.", function () {
    //     authorization.UnauthorizeSamity();
    // });

    it("53.17. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
        authorization.gridLanguageSwitchCheck();
    });
});