// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/53-special-collection/special-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_special_collection } from "./special-collection.po";

describe("53. Special Collection Module Test Cases", function () {
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

    it("53.01. Verify special Collection Grid List Page loads successfully", function () {
        grid_special_collection.gridSpecialCollectionListPage();
    });

    // it("53.02. Verify Successful Search Result by special Collection Name", function () {
    //     grid_special_collection.searchInSpecialCollectionName();
    // });

    it('53.03. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_special_collection.statusOfficeDropdownCheck();
    });

    it("53.04. Verify Successful Reset of Grid List Using the Reset Button on special Collection  Page.", function () {
        grid_special_collection.gridResetButtonCheck();
    });

    it("53.05. Verify Successful Refresh of Grid List Using the Refresh Button on special Collection  Page.", function () {
        grid_special_collection.gridRefreshButtonCheck();
    });

    it("53.06. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_special_collection.gridLanguageSwitchCheck();
    });
});
