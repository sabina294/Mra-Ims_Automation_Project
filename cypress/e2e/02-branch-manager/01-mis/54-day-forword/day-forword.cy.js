// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/54-day-forward/day-forward.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_day_forward } from "./day-forword.po";

describe("54. Day Forward Module Test Cases", function () {
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

    it("54.01. Verify day forward mis List Page loads successfully.", function () {
        grid_day_forward.gridDayForwardListPage();
    });

    // it("54.02. Verify the successful execution of the forward day routine.", function () {
    //     grid_day_forward.gridDayForwardDayRoutine();
    // });

    // it("54.03. Verify the successful execution of the delete button.", function () {
    //     grid_day_forward.gridDeleteButtonCheck();
    // });

    it("54.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_day_forward.gridLanguageSwitchCheck();
    });
});
