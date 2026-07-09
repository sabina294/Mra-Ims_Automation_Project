// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/42-cancel-holiday/cancel-holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_cancel_holiday } from "./cancel-holiday.po";

describe("42. Cancel Holiday Module Test Cases", function () {
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

    it("42.01. Verify that the Cancel Holiday list page loads successfully.", function () {
        create_cancel_holiday.gridCancelHolidayListPage();
    });

    it("42.02. Verify that the grid list resets successfully when the Reset button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridResetButtonCheck();
    });

    it("42.03. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridRefreshButtonCheck();
    });

    it("42.04. Verify that the grid list is displayed successfully when the Draft button is enabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButton();
    });

    it("42.05. Verify that the grid list is displayed successfully when the Draft button is disabled on the Cancel Holiday page.", function () {
        create_cancel_holiday.gridDraftButtonOff();
    });

    it("42.06. Verify that the Reset button functions correctly when clicked with empty inputs.", function () {
        create_cancel_holiday.createResetButtonCheck();
    });

    it("42.07. Verify that validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
        create_cancel_holiday.createApproveButtonCheck();
    });

    it("42.08. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createOkButton();
    });

    it("42.09. Verify that validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
        create_cancel_holiday.createSubmitButtonCheck();
    });

    it("42.10. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
        create_cancel_holiday.createDraftButtonCheck();
    });

    it("42.11. Verify that the cancel holiday 'OK' button functions correctly.", function () {
        create_cancel_holiday.createDraftOkButton();
    });

    it("42.12. Verify that clicking the Go Back button redirects the user successfully from the create page.", function () {
        create_cancel_holiday.createGoBackButtonCheck();
    });

    it("42.13. Verify that clicking the Search button on the Cancel Holiday grid page displays the correct search results.", function () {
        create_cancel_holiday.gridSearchButtonCheck();
    });

    it("42.14. Verify that the grid list content changes successfully from English to Bangla.", function () {
        create_cancel_holiday.gridLanguageSwitchCheck();
    });
});