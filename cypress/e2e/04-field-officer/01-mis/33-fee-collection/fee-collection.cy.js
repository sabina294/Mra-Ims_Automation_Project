// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/33-fee-collection/fee-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_fee_collection } from "./fee-collection.po";

describe("33. Fee Collection Module Test Cases ", function () {
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

    it("33.01. Verify that the Fee Collection list page loads successfully without any errors.", function () {
        grid_fee_collection.gridFeeCollectionListPage();
    });

    it("33.02. Verify that a new Fee Collection can be created successfully.", function () {
        grid_fee_collection.createFeeCollection();
    });

    it("33.03. Verify that the Fee Collection can be submitted successfully.", function () {
        grid_fee_collection.submitFeeCollection();
    });

    it("33.04. Verify that the action button performs the expected action successfully.", function () {
        grid_fee_collection.actionButtonCheck();
    });

    it("33.05. Verify that the user can view all relevant details of a Fee Collection, including associated information.", function () {
        grid_fee_collection.viewFeeCollection();
    });

    it("33.06. Verify that clicking the Go Back button on the Fee Collection View page redirects the user to the Fee Collection list page.", function () {
        grid_fee_collection.viewGoBackButton();
    });

    it("33.07. Verify that the Edit Mode toggle enables and disables fields correctly on the Fee Collection edit page.", function () {
        grid_fee_collection.actionEditMode();
    });

    it("33.08. Verify that the Reset button functions correctly on the Fee Collection edit page.", function () {
        grid_fee_collection.editResetButton();
    });

    it("33.09. Verify that the Submit button functions correctly on the Fee Collection edit page.", function () {
        grid_fee_collection.editSubmitButton();
    });

    it("33.10. Verify that clicking the Go Back button on the Fee Collection edit page redirects the user to the Fee Collection list page.", function () {
        grid_fee_collection.editGoBackButton();
    });

    it("33.11. Verify that searching by Fee Collection name returns the correct results.", function () {
        grid_fee_collection.searchInFeeCollectionName();
    });

    it("33.12. Verify that the grid list is reset successfully when the Reset button is clicked.", function () {
        grid_fee_collection.gridResetButtonCheck();
    });

    it("33.13. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
        grid_fee_collection.gridRefreshButtonCheck();
    });

    it("33.14. Verify that enabling the Draft filter displays the correct grid list data.", function () {
        grid_fee_collection.gridDraftButton();
    });

    it("33.15. Verify that disabling the Draft filter updates the grid list correctly.", function () {
        grid_fee_collection.gridDraftButtonOff();
    });

    it("33.16. Verify that clicking the Reset button clears all input fields on the Fee Collection creation form.", function () {
        grid_fee_collection.createResetButtonCheck();
    });

    it("33.17. Verify that validation messages are displayed when mandatory fields are submitted empty on the Fee Collection creation form.", function () {
        grid_fee_collection.createValidationMessageCheck();
    });

    it("33.18. Verify that clicking the Go Back button on the Fee Collection creation page redirects the user to the list page.", function () {
        grid_fee_collection.createGoBackButtonCheck();
    });

    it("33.19. Verify that clicking the Search button navigates the user to the Fee Collection search page successfully.", function () {
        grid_fee_collection.gridSearchButtonCheck();
    });

    it("33.20. Verify the Fee Collection breadcrumb is correct.", function () {
        grid_fee_collection.listBreadcrumbCheck();
    });

    it("33.21. Verify all required Fee Collection columns are visible.", function () {
        grid_fee_collection.requiredGridColumnsCheck();
    });

    it("33.22. Verify search and reset controls are available.", function () {
        grid_fee_collection.searchControlsCheck();
    });

    it("33.23. Verify Add Fee Collection is visible and enabled.", function () {
        grid_fee_collection.addButtonAvailableCheck();
    });

    it("33.24. Verify the grid displays valid fee records and amounts or No Data.", function () {
        grid_fee_collection.recordsOrEmptyStateCheck();
    });

    it("33.25. Verify Refresh retains the list route and renders records or No Data.", function () {
        grid_fee_collection.refreshListStateCheck();
    });

    it("33.26. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
        grid_fee_collection.gridLanguageSwitchCheck();
    });
});
