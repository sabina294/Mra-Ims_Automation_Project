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

    it("47.01. Verify that the Staging Data list page loads successfully.", function () {
        grid_staging_data.gridStagingDataListPage();
    });

    it("47.02. Verify that the Refresh button works successfully for MFI Admin role.", function () {
        grid_staging_data.refreshButtonCheck();
    });

    it("47.03. Verify that the Office selection dropdown functions correctly for MFI Admin role.", function () {
        grid_staging_data.selectOfficeDropdownCheck();
    });

    it("47.04. Verify that the Samity selection dropdown functions correctly for MFI Admin role.", function () {
        grid_staging_data.selectSamityDropdownCheck();
    });

    it("47.05. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
        grid_staging_data.gridLanguageSwitchCheck();
    });
});