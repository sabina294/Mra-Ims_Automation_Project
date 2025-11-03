// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/44-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("44. Regular Collection Module Test Cases", function () {
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

    it("44.01. Verify load the Regular Collection list page successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("44.02. Verify perform the correct action when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("44.03. Verify open the correct details when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("44.04. Verify accept the Regular Collection amount and complete the collection process successfully.", function () {
        create_regular_collection.collectionCheck();
    });

    it("44.05. Verify display Regular Collection details including name and description successfully.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("44.06. Verify allow editing of an existing Regular Collection successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("44.07. Verify reset the Regular Collection edit form successfully when the Reset button is clicked.", function () {
        create_regular_collection.editResetButton();
    });

    it("44.08. Verify reset the grid list successfully when the Reset button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("44.09. Verify create a new Regular Collection record successfully when all required fields are filled with valid data.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

    it("44.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_regular_collection.gridLanguageSwitchCheck();
    });

});
