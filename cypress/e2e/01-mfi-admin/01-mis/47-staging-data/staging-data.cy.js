// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/47-staging-data/staging-data.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_staging_data } from "./staging-data.po";

describe("47. Staging Data Module Test Cases", function () {
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

    it("47.01. Verify staging data List Page loads successfully.", function () {
        grid_staging_data.gridStagingDataListPage();
    });

    it("47.02. Verify that the Refresh button works successfully by MFI-Admin role", function () {
        grid_staging_data.refreshButtonCheck();
    });

    it("47.03. Verify that the select office dropdown functions correctly by MFI-Admin role", function () {
        grid_staging_data.selectOfficeDropdownCheck();
    });

    it("47.04. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_staging_data.gridLanguageSwitchCheck();
    });
});
