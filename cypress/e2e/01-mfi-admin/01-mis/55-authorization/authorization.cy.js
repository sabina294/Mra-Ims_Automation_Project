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

    it("55.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_authroization.gridLanguageSwitchCheck();
    });
});
