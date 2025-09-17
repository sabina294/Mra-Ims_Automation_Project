// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/13-day-end-process-ais/day-end-process-ais.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_end_process_ais} from "./day-end-process-ais.po";

describe("12. Day End Process Module Test Cases", function () {
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

    it("12.01. Verify the day end process page loads correctly.", function () {
        grid_day_end_process_ais.gridDayEndProcessPage();
    });

    it("12.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_end_process_ais.gridLanguageSwitchCheck();
    });
});
