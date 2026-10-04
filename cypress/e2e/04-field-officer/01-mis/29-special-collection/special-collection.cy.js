// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/29-special-collection/special-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_special_collection } from "./special-collection.po";

describe("29. Special Collection Module Test Cases", function () {
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
    it("29.01. Verify that the Special Collection list page loads successfully.", function () {
        create_special_collection.gridSpecialCollectionListPage();
    });

    it("29.02. Verify that a new Special Collection record is deleted successfully when all required fields are filled with valid data.", function () {
        create_special_collection.deleteNewCollection();
    });

    it("29.03. Verify that a new Special Collection record is created successfully when all required fields are filled with valid data.", function () {
        create_special_collection.createNewCollection();
    });

    it("29.04. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_special_collection.actionButtonCheck();
    });

    it("29.05. Verify that the Special Collection details, including name and description, are displayed successfully.", function () {
        create_special_collection.viewSpecialCollection();
    });

    it("29.06. Verify that clicking the Go Back button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewGoBackButton();
    });

    it("29.07. Verify that an existing Special Collection can be edited successfully.", function () {
        create_special_collection.editSpecialCollection();
    });

    it("29.08. Verify that clicking the Go Back button on the edit page redirects the user to the Special Collection list page.", function () {
        create_special_collection.editGoBackButton();
    });

    it("29.09. Verify that clicking the Submit button on the page the Special Collection successfully.", function () {
        create_special_collection.submitCollection();
    });

    it("29.10. Verify that clicking unsubmitted the view button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewUnsubmitted();
    });

    it("29.11. Verify that clicking the unsubmitted Go Back button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewGoBackButtonUnsubmitted();
    });

    it("29.12. Verify that clicking the Unsubmitted button from the Action menu redirects the user to the Unsubmitted Special Collection List page.", function () {
        create_special_collection.gridActionUnsubmittedButtonCheck();
    });

    it("29.13. Verify that clicking the Go Back button on the Unsubmitted Special Collection page redirects the user to the Special Collection List page.", function () {
        create_special_collection.gridActionUnsubmittedGoBackButton();
    });

    it("29.14. Verify that the Unsubmitted Special Collection List page is displayed successfully.", function () {
        create_special_collection.UnsubmittedButtonCheck();
    });

    it("29.15. Verify that clicking the Reset button resets the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridResetButtonCheck();
    });

    it("29.16. Verify that clicking the Refresh button reloads the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridRefreshButtonCheck();
    });

    it("29.17. Verify that the Grid History button displays the data information successfully when enabled.", function () {
        create_special_collection.gridHistoryButtonOnCheck();
    });

    it("29.18. Verify that the Field Officer dropdown filters the grid list successfully on the Special Collection page.", function () {
        create_special_collection.fieldOfficerDropdownCheck();
    });

    it("29.19. Verify that the Grid History button displays the data information successfully when disabled.", function () {
        create_special_collection.gridHistoryButtonOffCheck();
    });

    it("29.20. Verify that the Grid  Field Officer dropdown filters displays the data information successfully when disabled.", function () {
        create_special_collection.fieldOfficerDropdownCheck();
    });

    it("29.21. Verify that the Samity dropdown filters displays the data information successfully when disabled.", function () {
        create_special_collection.gridSamityDropdownCheck();
    });

    it("29.22. Verify Special Collection: the breadcrumb is correct.", function () {
        create_special_collection.listBreadcrumbCheck();
    });

    it("29.23. Verify Special Collection: all required grid columns are visible.", function () {
        create_special_collection.requiredGridColumnsCheck();
    });

    it("29.24. Verify Special Collection: the grid shows valid records and amounts or No Data.", function () {
        create_special_collection.recordsAndAmountsCheck();
    });

    it("29.25. Verify Special Collection: search and reset controls are available.", function () {
        create_special_collection.searchControlsCheck();
    });

    it("29.26. Verify Special Collection: the New button is visible and enabled.", function () {
        create_special_collection.newButtonAvailableCheck();
    });

    it("29.27. Verify Special Collection: Refresh retains the list and renders records or No Data.", function () {
        create_special_collection.refreshListStateCheck();
    });

    it("29.28. Verify Special Collection: pagination starts on page one or the empty state is displayed.", function () {
        create_special_collection.paginationOrEmptyStateCheck();
    });

    it("29.29. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_special_collection.gridLanguageSwitchCheck();
    });

});
