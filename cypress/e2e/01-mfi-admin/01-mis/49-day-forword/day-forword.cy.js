// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/49-day-forward/day-forward.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_forward } from "./day-forword.po";

describe("49. Day Forward Module Test Cases", function () {
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

    it("49.01. Verify day forward mis List Page loads successfully.", function () {
        grid_day_forward.gridDayForwardListPage();
    });

    // it("49.02. Verify the successful execution of the forward day routine.", function () {
    //     grid_day_forward.gridDayForwardDayRoutine();
    // });

    it("49.03. Verify the successful execution of the delete button.", function () {
        grid_day_forward.gridDeleteButtonCheck();
    });

    it("49.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_forward.gridLanguageSwitchCheck();
    });
});
