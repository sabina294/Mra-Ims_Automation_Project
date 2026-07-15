// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/45-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("45. Regular Collection Module Test Cases", function () {
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
    it("45.01. Verify that the Regular Collection list page loads successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("45.02. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("45.03. Verify that the correct details page opens when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("45.04. Verify that the Regular Collection amount is accepted and the collection process is completed successfully.", function () {
        create_regular_collection.collectionProcess();
    });

    it("45.05. Verify that the Regular Collection data is saved successfully and the collection process is completed.", function () {
        create_regular_collection.collectionSave();
    });

    it("45.06. Verify that the Regular Collection details, including name and description, are displayed successfully.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("45.07. Verify that clicking the Go Back button on the Regular Collection view page redirects the user to the Regular Collection list page.", function () {
        create_regular_collection.viewGoBackButton();
    });

    it("45.08. Verify that an existing Regular Collection can be edited successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("45.09. Verify that the Regular Collection edit form is saved successfully when the Save button is clicked.", function () {
        create_regular_collection.editSaveButton();
    });

    it("45.10. Verify that clicking the Go Back button on the Regular Collection form redirects the user successfully.", function () {
        create_regular_collection.collectionGoBack();
    });

    it("45.11. Verify that the Regular Collection form is submitted successfully when the Submit button is clicked.", function () {
        create_regular_collection.collectionSubmit();
    });

    it("45.12. Verify that the grid list is reset successfully when the Reset button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("45.13. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Regular Collection page.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

    it("45.14. Verify that the Grid History button displays the data information successfully when enabled.", function () {
        create_regular_collection.gridHistoryButtonOnCheck();
    });

    it("45.15. Verify that the Field Officer dropdown filters the grid list successfully on the Regular Collection page.", function () {
        create_regular_collection.fieldOfficerDropdownCheck();
    });

    it("45.16. Verify that the Grid History button displays the data information successfully when disabled.", function () {
        create_regular_collection.gridHistoryButtonOffCheck();
    });

    it("45.17. Verify that the Grid  Field Officer dropdown filters displays the data information successfully when disabled.", function () {
        create_regular_collection.fieldOfficerDropdownCheck();
    });

    it("45.18. Verify that the Samity dropdown filters displays the data information successfully when disabled.", function () {
        create_regular_collection.gridSamityDropdownCheck();
    });

    it("45.19. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_regular_collection.gridLanguageSwitchCheck();
    });

});
