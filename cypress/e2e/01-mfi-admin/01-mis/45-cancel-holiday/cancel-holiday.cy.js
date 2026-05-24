// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/45-cancel-holiday/cancel-holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_cancel_holiday } from "./cancel-holiday.po";

describe("24. Cancel Holiday Module Test Cases", function () {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");

    before(() => {
        cy.fixture(test_data).then((d) => {
            cy.login(
                baseURL,
                d.credential.mfiAdminUserId,
                d.credential.mfiAdminPassword
            );
            cy.changeLanguage("english");
        });
    });

    after(() => {
        cy.logout();
    });

    it("45.01. Verify that the Cancel Holiday list page loads successfully.", function () {
        create_cancel_holiday.gridCancelHolidayListPage();
    });

    it("45.02. Verify that the grid list resets successfully when the Reset button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridResetButtonCheck();
    });

    it("45.03. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridRefreshButtonCheck();
    });

    it("45.04. Verify that the grid list is displayed successfully when the Draft button is enabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButton();
    });

    it("45.05. Verify that the grid list is displayed successfully when the Draft button is disabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButtonOff();
    });

    it("45.06. Verify that the Reset button functions correctly when clicked with empty inputs.", function () {
        create_cancel_holiday.createResetButtonCheck();
    });

    it("45.07. Verify that validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
        create_cancel_holiday.createApproveButtonCheck();
    });

    it("45.08. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createOkButton();
    });

    it("45.09. Verify that validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
        create_cancel_holiday.createSubmitButtonCheck();
    });

    it("45.10. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
        create_cancel_holiday.createDraftButtonCheck();
    });

    it("45.11. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createDraftOkButton();
    });

    it("45.12. Verify that clicking the Go Back button redirects the user successfully from the create page.", function () {
        create_cancel_holiday.createGoBackButtonCheck();
    });

    it("45.13. Verify that clicking the Search button on the Cancel Holiday grid page displays the correct search results.", function () {
        create_cancel_holiday.gridSearchButtonCheck();
    });

    it("45.14. Verify that the grid list content changes successfully from English to Bangla.", function () {
        create_cancel_holiday.gridLanguageSwitchCheck();
    });
});