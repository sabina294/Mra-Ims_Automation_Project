// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/52-cancel-samity/cancel-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { cancel_samity } from "./cancel-samity.po";

describe("52. Cancel Samity Module Test Cases", function () {
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

    it("52.01. Verify that the Cancel Samity list page loads successfully.", function () {
        cancel_samity.gridCancelSamityListPage();
    });

    it("52.02. Verify that the checkbox selection functionality works correctly.", function () {
        cancel_samity.gridCheckboxCheck();
    });

    it("52.03. Verify that multiple Samities can be canceled successfully with valid information.", function () {
        cancel_samity.cancelMultipleSamity();
    });

    it("52.04. Verify that the Restore Samity functionality works correctly.", function () {
        cancel_samity.restoreSamity();
    });

    it("52.05. Verify that a single Samity can be canceled successfully.", function () {
        cancel_samity.cancelSamity();
    });

    it("52.06. Verify that the Submit Cancel Samity functionality works correctly.", function () {
        cancel_samity.submitCancelSamity();
    });

    it("52.07. Verify that the grid list content changes correctly when switching language from English to Bangla.", function () {
        cancel_samity.gridLanguageSwitchCheck();
    });
});