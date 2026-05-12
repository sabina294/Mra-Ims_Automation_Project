// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/51-month-end-process/month-end-process.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_month_end_process} from "./month-end-process.po";

describe("51. Month End Process Module Test Cases", function () {
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

    it("51.01. Verify month end process List Page loads successfully.", function () {
        grid_month_end_process.gridMonthEndProcessListPage();
    });

    it("51.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_month_end_process.gridLanguageSwitchCheck();
    });
});
