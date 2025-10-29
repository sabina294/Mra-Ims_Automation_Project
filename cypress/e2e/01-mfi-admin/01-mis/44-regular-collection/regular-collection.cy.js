// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/44-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_regural_collection } from "./regular-collection.po";

describe("44. Regular Collection Module Test Cases", function () {
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

    it("44.01. Verify Regural Collection Grid List Page loads successfully", function () {
        grid_regural_collection.gridRegularCollectionListPage();
    });

    it("44.02. Verify Successful Search Result by Regural Collection Name", function () {
        grid_regural_collection.searchInRegularCollectionName();
    });

    it('44.03. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_regural_collection.statusOfficeDropdownCheck();
    });

    it("44.04. Verify Successful Reset of Grid List Using the Reset Button on Regural Collection  Page.", function () {
        grid_regural_collection.gridResetButtonCheck();
    });

    it("44.05. Verify Successful Refresh of Grid List Using the Refresh Button on Regural Collection  Page.", function () {
        grid_regural_collection.gridRefreshButtonCheck();
    });

    it("44.06. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_regural_collection.gridLanguageSwitchCheck();
    });
});
