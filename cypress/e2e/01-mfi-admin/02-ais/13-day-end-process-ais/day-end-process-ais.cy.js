// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/13-day-end-process-ais/day-end-process-ais.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_end_process_ais } from "./day-end-process-ais.po";

describe("13. Day End Process Module Test Cases", function () {
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

    it("13.01. Verify the day end process page loads correctly.", function () {
        grid_day_end_process_ais.gridDayEndProcessPage();
    });

    it("13.02. Verify that clicking the preview button on the day end process page redirects the user to the process list page.", function () {
        grid_day_end_process_ais.processPreviewButtonCheck();
    });

    it("13.03. Verify that clicking the go back button on the day end process page redirects the user to the process list page.", function () {
        grid_day_end_process_ais.processGoBackButtonCheck();
    });

    it("13.04. Verify that clicking the previous button on the day end process page redirects the user to the process list page.", function () {
        grid_day_end_process_ais.processPreviousButtonCheck();
    });

    it("13.05. Verify that clicking the search button on the day end process page redirects the user to the process list page.", function () {
        grid_day_end_process_ais.processSearchButtonCheck();
    });

    it("13.06. Verify that clicking the previous preview button on the day end process page redirects the user to the process list page.", function () {
        grid_day_end_process_ais.PreviousPreviewButtonCheck();
    });

    it("13.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_end_process_ais.gridLanguageSwitchCheck();
    });
});
