// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/43-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("43. Regular Collection Module Test Cases", function () {
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
    it("43.01. Verify that the Regular Collection list page loads successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("43.02. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("43.03. Verify that the correct details page opens when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("43.04. Verify that the Regular Collection amount is accepted and the collection process is completed successfully.", function () {
        create_regular_collection.collectionProcess();
    });

    it("43.05. Verify that the Regular Collection data is saved successfully and the collection process is completed.", function () {
        create_regular_collection.collectionSave();
    });

    it("43.06. Verify that the Regular Collection details, including name and description, are displayed successfully.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("43.07. Verify that clicking the Go Back button on the Regular Collection view page redirects the user to the Regular Collection list page.", function () {
        create_regular_collection.viewGoBackButton();
    });

    it("43.08. Verify that an existing Regular Collection can be edited successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("43.09. Verify that the Regular Collection edit form is saved successfully when the Save button is clicked.", function () {
        create_regular_collection.editSaveButton();
    });

    it("43.10. Verify that clicking the Go Back button on the Regular Collection form redirects the user successfully.", function () {
        create_regular_collection.collectionGoBack();
    });

    it("43.11. Verify that the Regular Collection form is submitted successfully when the Submit button is clicked.", function () {
        create_regular_collection.collectionSubmit();
    });

    it("43.12. Verify that the grid list is reset successfully when the Reset button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("43.13. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

    it("43.14. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_regular_collection.gridLanguageSwitchCheck();
    });

});
