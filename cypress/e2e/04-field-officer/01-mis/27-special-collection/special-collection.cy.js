// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/27-special-collection/special-collection.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_special_collection } from "./special-collection.po";

describe("27. Special Collection Module Test Cases", function () {
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
    it("27.01. Verify that the Special Collection list page loads successfully.", function () {
        create_special_collection.gridSpecialCollectionListPage();
    });

    it("27.02. Verify that a new Special Collection record is deleted successfully when all required fields are filled with valid data.", function () {
        create_special_collection.deleteNewCollection();
    });

    it("27.03. Verify that a new Special Collection record is created successfully when all required fields are filled with valid data.", function () {
        create_special_collection.createNewCollection();
    });

    it("27.04. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_special_collection.actionButtonCheck();
    });

    it("27.05. Verify that the Special Collection details, including name and description, are displayed successfully.", function () {
        create_special_collection.viewSpecialCollection();
    });

    it("27.06. Verify that clicking the Go Back button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewGoBackButton();
    });

    it("27.07. Verify that an existing Special Collection can be edited successfully.", function () {
        create_special_collection.editSpecialCollection();
    });

    it("27.08. Verify that clicking the Go Back button on the edit page redirects the user to the Special Collection list page.", function () {
        create_special_collection.editGoBackButton();
    });

    it("27.09. Verify that clicking the Submit button on the page the Special Collection successfully.", function () {
        create_special_collection.submitCollection();
    });

    it("27.10. Verify that clicking unsubmitted the view button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewUnsubmitted();
    });

    it("27.11. Verify that clicking the unsubmitted Go Back button on the Special Collection view page redirects the user to the Special Collection list page.", function () {
        create_special_collection.viewGoBackButtonUnsubmitted();
    });

    it("27.12. Verify that clicking the Unsubmitted button from the Action menu redirects the user to the Unsubmitted Special Collection List page.", function () {
        create_special_collection.gridActionUnsubmittedButtonCheck();
    });

    it("27.13. Verify that clicking the Go Back button on the Unsubmitted Special Collection page redirects the user to the Special Collection List page.", function () {
        create_special_collection.gridActionUnsubmittedGoBackButton();
    });

    it("27.14. Verify that the Unsubmitted Special Collection List page is displayed successfully.", function () {
        create_special_collection.UnsubmittedButtonCheck();
    });

    it("27.15. Verify that clicking the Reset button resets the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridResetButtonCheck();
    });

    it("27.16. Verify that clicking the Refresh button reloads the grid list successfully on the Special Collection page.", function () {
        create_special_collection.gridRefreshButtonCheck();
    });

    it("27.17. Verify that the Grid History button displays the data information successfully when enabled.", function () {
        create_special_collection.gridHistoryButtonOnCheck();
    });

    it("27.18. Verify that the Field Officer dropdown filters the grid list successfully on the Special Collection page.", function () {
        create_special_collection.fieldOfficerDropdownCheck();
    });

    it("27.19. Verify that the Grid History button displays the data information successfully when disabled.", function () {
        create_special_collection.gridHistoryButtonOffCheck();
    });

    it("27.20. Verify that the Grid  Field Officer dropdown filters displays the data information successfully when disabled.", function () {
        create_special_collection.fieldOfficerDropdownCheck();
    });

    it("27.21. Verify that the Samity dropdown filters displays the data information successfully when disabled.", function () {
        create_special_collection.gridSamityDropdownCheck();
    });

    it("27.22. Verify that the grid list content changes correctly from English to Bangla.", function () {
        create_special_collection.gridLanguageSwitchCheck();
    });

});
