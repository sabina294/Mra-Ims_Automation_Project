// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/49-special-collection/special-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_special_collection } from "./special-collection.po";

describe("49. Special Collection Module Test Cases", function () {
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

    it("49.01. Verify load the Special Collection list page successfully.", function () {
        create_special_collection.gridSpecialCollectionListPage();
    });

    it("49.02. Verify a new special collection record is created successfully when all required fields are filled with valid data.", function () {
        create_special_collection.createNewCollection();
    });

    it("49.03. Verify perform the correct action when the Action button is clicked.", function () {
        create_special_collection.actionButtonCheck();
    });

    it("49.04. Verify display Special Collection details including name and description successfully.", function () {
        create_special_collection.viewSpecialCollection();
    });

    it("49.05. Verify allow editing of an existing Special Collection successfully.", function () {
        create_special_collection.editSpecialCollection();
    });

    it("49.06. Verify reset the grid list successfully when the Reset button is clicked on the Special Collection page.", function () {
        create_special_collection.gridResetButtonCheck();
    });

    it("49.07. Verify create a new Special Collection record successfully when all required fields are filled with valid data.", function () {
        create_special_collection.gridRefreshButtonCheck();
    });

    it("49.08. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_special_collection.gridLanguageSwitchCheck();
    });

});
