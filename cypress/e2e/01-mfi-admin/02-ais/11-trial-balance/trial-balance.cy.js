// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/11-trial-balance/trial-balance.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_trial_balance } from "./trial-balance.po";

describe("11. Trial Balance Module Test Cases", function () {
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

    it("11.01. Verify the trial balance list page loads correctly.", function () {
        create_trial_balance.gridTrialBalanceListPage();
    });

    // it("11.02. Verify check that the trial balance office selection works correctly from the dropdown on the trial balance list page.", function () {
    //     create_trial_balance.selectofficeDropdown();
    // });

    it("11.03. Verify the grid list resets successfully when the refresh button is clicked on the trial balance page", function () {
        create_trial_balance.gridRefreshButtonCheck();
    });

    it("11.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_trial_balance.gridLanguageSwitchCheck();
    });

    it("11.05. Verify that clicking the go back button on the trial balance grid page redirects the user to the trial balance list page.", function () {
        create_trial_balance.gridGoBackButtonCheck();
    });

});
