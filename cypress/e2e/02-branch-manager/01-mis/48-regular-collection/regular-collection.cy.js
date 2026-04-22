// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/48-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("48. Regular Collection Module Test Cases", function () {
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

    it("48.01. Verify load the Regular Collection list page successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("48.02. Verify perform the correct action when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("48.03. Verify open the correct details when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("48.04. Verify accept the Regular Collection amount and complete the collection process successfully.", function () {
        create_regular_collection.collectionProcess();
    });

    it("48.05. Verify accept the Regular Collection save and complete the collection process successfully.", function () {
        create_regular_collection.collectionSave();
    });

    it("48.06. Verify display Regular Collection details including name and description successfully.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("48.07. Verify that clicking the go back button on the regular collection view page redirects the user to the regular collection list page.", function () {
        create_regular_collection.viewGoBackButton();
    });

    it("48.08. Verify allow editing of an existing Regular Collection successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("48.09. Verify the Regular Collection edit form successfully when the save button is clicked.", function () {
        create_regular_collection.editSaveButton();
    });

    it("48.10. Verify the Regular Collection form successfully when the go back button is clicked.", function () {
        create_regular_collection.collectionGoBack();
    });

    it("48.11. Verify the Regular Collection form successfully when the Submit button is clicked..", function () {
        create_regular_collection.collectionSubmit();
    });

    it("48.12. Verify reset the grid list successfully when the Reset button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("48.13. Verify create a new Regular Collection record successfully when all required fields are filled with valid data.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

    it("48.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_regular_collection.gridLanguageSwitchCheck();
    });

});
