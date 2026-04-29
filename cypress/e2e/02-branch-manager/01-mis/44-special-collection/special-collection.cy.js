// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/44-special-collection/special-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_special_collection } from "./special-collection.po";

describe("44. Special Collection Module Test Cases", function () {
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
    it("44.01. Verify that the Special Collection list page loads successfully.", function () {
        create_special_collection.gridSpecialCollectionListPage();
    });

    it("44.02. Verify that a new Special Collection record is created successfully when all required fields are filled with valid data.", function () {
        create_special_collection.createNewCollection();
    });

    it("44.03. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_special_collection.actionButtonCheck();
    });

    it("44.04. Verify that the Special Collection details, including name and description, are displayed successfully.", function () {
        create_special_collection.viewSpecialCollection();
    });

    it("44.05. Verify that clicking the Go Back button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewGoBackButton();
    });

    it("44.06. Verify that an existing Special Collection can be edited successfully.", function () {
        create_special_collection.editSpecialCollection();
    });

    it("44.07. Verify that clicking the Go Back button on the edit page redirects the user to the Special Collection list page.", function () {
        create_special_collection.editGoBackButton();
    });

    it("44.08. Verify that clicking the Save button on the page the Special Collection successfully.", function () {
        create_special_collection.saveCollection();
    });

    it("44.09. Verify that clicking the Reset button resets the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridResetButtonCheck();
    });

    it("44.10. Verify that clicking the Refresh button reloads the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridRefreshButtonCheck();
    });

    it("44.11. Verify that the Grid History button displays the data information successfully when enabled.", function () {
        create_special_collection.gridHistoryButtonOnCheck();
    });

    it("44.12. Verify that the Field Officer dropdown filters the grid list successfully on the Special Collection page.", function () {
        create_special_collection.fieldOfficerDropdownCheck();
    });

    it("44.13. Verify that the Grid History button displays the data information successfully when disabled.", function () {
        create_special_collection.gridHistoryButtonOffCheck();
    });

    it("44.14. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_special_collection.gridLanguageSwitchCheck();
    });

});
