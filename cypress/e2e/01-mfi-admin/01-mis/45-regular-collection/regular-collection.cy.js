// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/45-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_regural_collection } from "./regular-collection.po";

describe("45. Regular Collection Module Test Cases", function () {
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

    it("45.01. Verify Regular Collection Grid List Page loads successfully", function () {
        grid_regural_collection.gridRegularCollectionListPage();
    });

    it("45.02. Verify Successful Search Result by Regular Collection Name", function () {
        grid_regural_collection.searchInRegularCollectionName();
    });

    it('45.03. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_regural_collection.statusOfficeDropdownCheck();
    });

    it("45.04. Verify Successful Reset of Grid List Using the Reset Button on Regular Collection  Page.", function () {
        grid_regural_collection.gridResetButtonCheck();
    });

    it("45.05. Verify Successful Refresh of Grid List Using the Refresh Button on Regular Collection  Page.", function () {
        grid_regural_collection.gridRefreshButtonCheck();
    });

    it("45.06. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_regural_collection.gridLanguageSwitchCheck();
    });
});
