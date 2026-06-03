// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/55-authorization/authorization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_authroization } from "./authorization.po";

describe("55. Authorization Module Test Cases", function () {
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
        });
    });

    after(() => {
        cy.logout();
    });

    it("55.01. Verify authorization List Page loads successfully.", function () {
        grid_authroization.gridAuthorizationListPage();
    });

    it("55.02. Verify that grid filters and search criteria are reset successfully when the Reset button is clicked.", function () {
        grid_authroization.gridResetButtonCheck();
    });

    it("55.03. Verify that the Authorization grid refreshes successfully.", function () {
        grid_authroization.gridRefreshButtonCheck();
    });

    it("55.04. Verify that the Pending On list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridDraftButton();
    });

    it("55.05. Verify that the Pending Office dropdown list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridPendingOfficeDropdownCheck();
    });

    it("55.06. Verify that the Pending Off list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridDraftButtonOff();
    });

    it("55.07. Verify that the History On list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridHistoryButtonOnCheck();
    });

    it("55.08. Verify that the History Office dropdown list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridHistoryOfficeDropdownCheck();
    });

    it("55.09. Verify that the History Off list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridHistoryButtonOffCheck();
    });

    it("55.10. Verify that the Office dropdown list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridOfficeDropdownCheck();
    });

    it("55.11. Verify that the Samity dropdown list is displayed correctly in the Authorization grid.", function () {
        grid_authroization.gridSamityDropdownCheck();
    });

    it("55.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_authroization.gridLanguageSwitchCheck();
    });
});
