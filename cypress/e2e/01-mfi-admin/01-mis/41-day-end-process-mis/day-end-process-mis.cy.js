// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/41-day-end-process-mis/day-end-process-mis.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_end_process} from "./day-end-process-mis.po";

describe("41. Day End Process Module Test Cases", function () {
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

    it("41.01. Verify day end process mis List Page loads successfully.", function () {
        grid_day_end_process.gridDayEndProcessListPage();
    });

    it("41.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_end_process.gridLanguageSwitchCheck();
    });
});
