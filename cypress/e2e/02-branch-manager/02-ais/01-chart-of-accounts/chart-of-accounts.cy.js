// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/01-chart-of-accounts/chart-of-accounts.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_chart_of_accounts } from "./chart-of-accounts.po";

describe("01. Chart Of Accounts Module Test Cases", function () {
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
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("01.01. Verify the chart of accounts list page loads correctly.", function () {
        grid_chart_of_accounts.gridChartOfAccountsListPage();
    });

    it("01.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_chart_of_accounts.gridLanguageSwitchCheck();
    });
});
