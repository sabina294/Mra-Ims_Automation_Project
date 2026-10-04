// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/28-regular-collection/regular-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_regular_collection } from "./regular-collection.po";

describe("28. Regular Collection Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");
    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.fieldOfficerUserId,
                d.credential.fieldOfficerPassword
            );
            cy.changeLanguage("english");
        });
    });

    after(() => {
        cy.logout();
    });

    it("28.01. Verify that the Regular Collection list page is loaded successfully.", function () {
        create_regular_collection.gridRegularCollectionListPage();
    });

    it("28.02. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_regular_collection.actionButtonCheck();
    });

    it("28.03. Verify that the Regular Collection details page is opened successfully when the Open button is clicked.", function () {
        create_regular_collection.openButtonCheck();
    });

    it("28.04. Verify that the Regular Collection amount is entered successfully and the collection process is completed.", function () {
        create_regular_collection.collectionProcess();
    });

    it("28.05. Verify that the Regular Collection data is saved successfully and the collection process is completed.", function () {
        create_regular_collection.collectionSave();
    });

    it("28.06. Verify that the Regular Collection details, including name and description, are displayed successfully on the view page.", function () {
        create_regular_collection.viewRegularCollection();
    });

    it("28.07. Verify that clicking the Go Back button from the Regular Collection view page redirects the user to the Regular Collection list page.", function () {
        create_regular_collection.viewGoBackButton();
    });

    it("28.08. Verify that an existing Regular Collection record can be edited successfully.", function () {
        create_regular_collection.editRegularCollection();
    });

    it("28.09. Verify that the Regular Collection edit form is saved successfully when the Save button is clicked.", function () {
        create_regular_collection.editSaveButton();
    });

    it("28.10. Verify that clicking the Go Back button from the Regular Collection form redirects the user successfully.", function () {
        create_regular_collection.collectionGoBack();
    });

    it("28.11. Verify that the Regular Collection form is submitted successfully when the Submit button is clicked.", function () {
        create_regular_collection.collectionSubmit();
    });

    it("28.12. Verify that the Regular Collection can be unsubmitted successfully from the Action menu.", function () {
        create_regular_collection.actionCollectionUnsubmit();
    });

    it("28.13. Verify that the Regular Collection form is unsubmitted successfully when the Unsubmit button is clicked.", function () {
        create_regular_collection.collectionUnsubmit();
    });

    it("28.14. Verify that the Regular Collection form can be submitted again successfully after unsubmission.", function () {
        create_regular_collection.againCollectionSubmit();
    });

    it("28.15. Verify that the Regular Collection grid list is reset successfully when the Reset button is clicked.", function () {
        create_regular_collection.gridResetButtonCheck();
    });

    it("28.16. Verify that the Regular Collection grid list is refreshed successfully when the Refresh button is clicked.", function () {
        create_regular_collection.gridRefreshButtonCheck();
    });

    it("28.17. Verify that the Grid History button displays historical data successfully when enabled.", function () {
        create_regular_collection.gridHistoryButtonOnCheck();
    });

    it("28.18. Verify that the Field Officer dropdown filters the Regular Collection grid list successfully.", function () {
        create_regular_collection.fieldOfficerDropdownCheck();
    });

    it("28.19. Verify that the Grid History button does not display historical data when disabled.", function () {
        create_regular_collection.gridHistoryButtonOffCheck();
    });

    it("28.20. Verify that the Grid  Field Officer dropdown filters displays the data information successfully when disabled.", function () {
        create_regular_collection.fieldOfficerDropdownCheck();
    });

    it("28.21. Verify that the Samity dropdown filters displays the data information successfully when disabled.", function () {
        create_regular_collection.gridSamityDropdownCheck();
    });

    it("28.22. Verify the Regular Collection breadcrumb is correct.", function () {
        create_regular_collection.listBreadcrumbCheck();
    });

    it("28.23. Verify all required collection columns are visible.", function () {
        create_regular_collection.requiredGridColumnsCheck();
    });

    it("28.24. Verify rows contain Samity, field officer and status data.", function () {
        create_regular_collection.gridRecordDataCheck();
    });

    it("28.25. Verify numeric collection totals equal loan plus savings collection.", function () {
        create_regular_collection.collectionTotalsCheck();
    });

    it("28.26. Verify search and reset controls are available.", function () {
        create_regular_collection.searchControlsCheck();
    });

    it("28.27. Verify Refresh retains the list route, columns and records.", function () {
        create_regular_collection.refreshListCheck();
    });

    it("28.28. Verify pagination starts on page one with Previous disabled.", function () {
        create_regular_collection.firstPagePaginationCheck();
    });

    it("28.29. Verify that the Regular Collection grid list content switches correctly between English and Bangla languages.", function () {
        create_regular_collection.gridLanguageSwitchCheck();
    });
});
