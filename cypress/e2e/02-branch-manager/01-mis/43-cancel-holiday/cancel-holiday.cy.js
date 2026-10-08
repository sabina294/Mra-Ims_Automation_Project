// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/43-cancel-holiday/cancel-holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_cancel_holiday } from "./cancel-holiday.po";

describe("43. Cancel Holiday Module Test Cases", function () {
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

    it("43.01. Verify that the Cancel Holiday list page loads successfully.", function () {
        create_cancel_holiday.gridCancelHolidayListPage();
    });

    it("43.02. Verify that the grid list resets successfully when the Reset button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridResetButtonCheck();
    });

    it("43.03. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridRefreshButtonCheck();
    });

    it("43.04. Verify that the grid list is displayed successfully when the Draft button is enabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButton();
    });

    it("43.05. Verify that the grid list is displayed successfully when the Draft button is disabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButtonOff();
    });

    it("43.06. Verify that the Reset button functions correctly when clicked with empty inputs.", function () {
        create_cancel_holiday.createResetButtonCheck();
    });

    it("43.07. Verify that validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
        create_cancel_holiday.createApproveButtonCheck();
    });

    it("43.08. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createOkButton();
    });

    it("43.09. Verify that validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
        create_cancel_holiday.createSubmitButtonCheck();
    });

    it("43.10. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
        create_cancel_holiday.createDraftButtonCheck();
    });

    it("43.11. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createDraftOkButton();
    });

    it("43.12. Verify that clicking the Go Back button redirects the user successfully from the create page.", function () {
        create_cancel_holiday.createGoBackButtonCheck();
    });

    it("43.13. Verify that clicking the Search button on the Cancel Holiday grid page displays the correct search results.", function () {
        create_cancel_holiday.gridSearchButtonCheck();
    });

    it("43.14. Verify that the Cancel Holiday breadcrumb is displayed.", function () {
        create_cancel_holiday.listBreadcrumbCheck();
    });

    it("43.15. Verify that all Cancel Holiday grid columns are visible.", function () {
        create_cancel_holiday.requiredGridColumnsCheck();
    });

    it("43.16. Verify that the grid shows required cancellation data or a visible empty state.", function () {
        create_cancel_holiday.gridRecordsOrEmptyCheck();
    });

    it("43.17. Verify that draft, search, Reset and Refresh controls are available.", function () {
        create_cancel_holiday.searchControlsCheck();
    });

    it("43.18. Verify that an unmatched search displays No Data.", function () {
        create_cancel_holiday.noResultSearchCheck();
    });

    it("43.19. Verify that Reset clears an unmatched search and displays records or the empty state.", function () {
        create_cancel_holiday.resetSearchInputCheck();
    });

    it("43.20. Verify that Refresh retains the Cancel Holiday route and displays records or the empty state.", function () {
        create_cancel_holiday.refreshListStateCheck();
    });

    it("43.21. Verify that the Cancel Holiday button is visible and enabled.", function () {
        create_cancel_holiday.cancelHolidayButtonCheck();
    });

    it("43.22. Verify that the grid list content changes successfully from English to Bangla.", function () {
        create_cancel_holiday.gridLanguageSwitchCheck();
    });
});