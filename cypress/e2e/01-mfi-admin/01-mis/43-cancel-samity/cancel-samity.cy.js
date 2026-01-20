// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/43-cancel-samity/cancel-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_cancel_samity} from "./cancel-samity.po";

describe("43. Cancel Samity Module Test Cases", function () {
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

    it("43.01. Verify cancel samity List Page loads successfully.", function () {
        grid_cancel_samity.gridCancelSamityListPage();
    });

    it("43.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_cancel_samity.gridLanguageSwitchCheck();
    });
});
