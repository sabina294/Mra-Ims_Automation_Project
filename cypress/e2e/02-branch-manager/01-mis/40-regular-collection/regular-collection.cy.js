// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/40-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("40. Regular Collection Module Test Cases", function () {
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

    it("40.01. Verify load the Regular Collection list page successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("40.02. Verify perform the correct action when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("40.03. Verify open the correct details when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("40.04. Verify accept the Regular Collection amount and complete the collection process successfully.", function () {
        create_regular_collection.collectionCheck();
    });

    it("40.05. Verify display Regular Collection details including name and description successfully.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("40.06. Verify allow editing of an existing Regular Collection successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("40.07. Verify reset the Regular Collection edit form successfully when the Reset button is clicked.", function () {
        create_regular_collection.editResetButton();
    });

    it("40.08. Verify reset the grid list successfully when the Reset button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("40.09. Verify create a new Regular Collection record successfully when all required fields are filled with valid data.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

});
