// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/24-cancel-holiday/cancel-holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_cancel_holiday } from "./cancel-holiday.po";

describe("24. Cancel Holiday Module Test Cases", function () {
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

    it("24.01. Verify that the Cancel Holiday list page loads successfully.", function () {
        create_cancel_holiday.gridCancelHolidayListPage();
    });

    it("24.02. Verify that the grid list resets successfully when the Reset button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridResetButtonCheck();
    });

    it("24.03. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridRefreshButtonCheck();
    });

    it("24.04. Verify that the grid list is displayed successfully when the Draft button is enabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButton();
    });

    it("24.05. Verify that the grid list is displayed successfully when the Draft button is disabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButtonOff();
    });

    it("24.06. Verify that the Reset button functions correctly when clicked with empty inputs.", function () {
        create_cancel_holiday.createResetButtonCheck();
    });

    it("24.07. Verify the Field Officer create form exposes Submit, Draft and Go Back without an Approve button.", function () {
        create_cancel_holiday.createFormControlsCheck();
    });

    it("24.08. Verify that validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
        create_cancel_holiday.createSubmitButtonCheck();
    });

    it("24.09. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
        create_cancel_holiday.createDraftButtonCheck();
    });

    it("24.10. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createDraftOkButton();
    });

    it("24.11. Verify that clicking the Go Back button redirects the user successfully from the create page.", function () {
        create_cancel_holiday.createGoBackButtonCheck();
    });

    it("24.12. Verify that clicking the Search button on the Cancel Holiday grid page displays the correct search results.", function () {
        create_cancel_holiday.gridSearchButtonCheck();
    });

    it("24.13. Verify Cancel Holiday: the list breadcrumb is correct.", function () {
      create_cancel_holiday.listBreadcrumbCheck();
    });

    it("24.14. Verify Cancel Holiday: all required grid columns are visible.", function () {
      create_cancel_holiday.requiredGridColumnsCheck();
    });

    it("24.15. Verify Cancel Holiday: Refresh retains the list route and columns.", function () {
      create_cancel_holiday.refreshListCheck();
    });

    it("24.16. Verify Cancel Holiday: Draft can be enabled and disabled.", function () {
      create_cancel_holiday.draftToggleStateCheck();
    });

    it("24.17. Verify Cancel Holiday: the add button is visible and enabled.", function () {
      create_cancel_holiday.addButtonAvailableCheck();
    });

    it("24.18. Verify Cancel Holiday: the list displays valid cancellation rows or a No Data state.", function () {
      create_cancel_holiday.recordsOrEmptyStateCheck();
    });

    it("24.19. Verify that the grid list content changes successfully from English to Bangla.", function () {
        create_cancel_holiday.gridLanguageSwitchCheck();
    });
});