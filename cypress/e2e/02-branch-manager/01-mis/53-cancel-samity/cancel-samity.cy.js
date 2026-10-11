// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/53-cancel-samity/cancel-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { cancel_samity } from "../../../../support/page-objects/cancel-samity.po";

describe("53. Cancel Samity Module Test Cases", function () {
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

    it("53.01. Verify that the Cancel Samity list page loads successfully.", function () {
        cancel_samity.gridCancelSamityListPage();
    });

    it("53.02. Verify that the checkbox selection functionality works correctly.", function () {
        cancel_samity.gridCheckboxCheck();
    });

    it("53.03. Verify that multiple Samities can be canceled successfully with valid information.", function () {
        cancel_samity.cancelMultipleSamity();
    });

    it("53.04. Verify that the Restore Samity functionality works correctly.", function () {
        cancel_samity.restoreSamity();
    });

    it("53.05. Verify that a single Samity can be canceled successfully.", function () {
        cancel_samity.cancelSamity();
    });

    it("53.06. Verify that the Submit Cancel Samity functionality works correctly.", function () {
        cancel_samity.submitCancelSamity();
    });

    it("53.07. Verify that the Cancel Samity breadcrumb is displayed.", function () {
        cancel_samity.breadcrumbCheck();
    });

    it("53.08. Verify that branch, business day and system status headings are visible.", function () {
        cancel_samity.summaryLabelsCheck();
    });

    it("53.09. Verify that all Cancel Samity columns are visible.", function () {
        cancel_samity.columnsCheck();
    });

    it("53.10. Verify that samity, field officer and search controls are available.", function () {
        cancel_samity.searchControlsCheck();
    });

    it("53.11. Verify that the grid displays required samity data and weekdays or a visible empty state.", function () {
        cancel_samity.recordsOrEmptyCheck();
    });

    it("53.12. Verify that Cancel Multiple and Restore Multiple controls are visible.", function () {
        cancel_samity.bulkControlsCheck();
    });

    it("53.13. Verify that the branch selector displays a selected branch.", function () {
        cancel_samity.selectedBranchCheck();
    });

    it("53.14. Verify that Cancel Multiple and Restore Multiple are disabled when no samity is selected.", function () {
        cancel_samity.bulkControlsWithoutSelectionCheck();
    });

    it("53.15. Verify that the grid list content changes correctly when switching language from English to Bangla.", function () {
        cancel_samity.gridLanguageSwitchCheck();
    });
});
