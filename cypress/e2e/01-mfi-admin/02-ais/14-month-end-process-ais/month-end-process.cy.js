// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/14-month-end-process-ais/month-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_month_end_process_ais } from "./month-end-process.po.js";

describe("14. Month End Process Module Test Cases", function () {
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

    it("14.01. Verify the month end process page loads correctly.", function () {
        grid_month_end_process_ais.gridMonthEndProcessPage();
    });

    it("14.02. Verify that clicking the preview button on the month end process page redirects the user to the process list page.", function () {
        grid_month_end_process_ais.processPreviewButtonCheck();
    });

    it("14.03. Verify that clicking the go back button on the month end process page redirects the user to the process list page.", function () {
        grid_month_end_process_ais.processGoBackButtonCheck();
    });

    it("14.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_month_end_process_ais.gridLanguageSwitchCheck();
    });
});
