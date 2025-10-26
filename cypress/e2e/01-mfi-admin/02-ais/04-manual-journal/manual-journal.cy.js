// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/02-ais/04-manual-journal/manual-journal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_manual_journal } from "./manual-journal.po";

describe("04. Manual Journal Module Test Cases", function () {
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
            cy.switchModule("AIS");

        });
    });

    after(() => {
        cy.logout();
    });

    it("04.01. Verify the manual journal list page loads correctly.", function () {
        create_manual_journal.gridManualJournalListPage();
    });

    it("04.02. Verify a manual journal record is created successfully when all required fields are filled with valid data.", function () {
        create_manual_journal.createManualJournal();
    });

    it("04.03. Verify successfully performs the action when the action button is clicked.", function () {
        create_manual_journal.actionButtonCheck();
    });

    it("04.04. Verify the user can view all relevant details of a manual journal, including its associated fields.", function () {
        create_manual_journal.viewManualJournal();
    });

    it("04.05. Verify the user can go back of a manual journal, including its associated fields.", function () {
        create_manual_journal.goBackManualJournal();
    });

    it("04.06. Verify the user can filter inactive manual journals using the status dropdown on the manual journal list page.", function () {
        create_manual_journal.statusApproveDropdownCheck();
    });

    it("04.07. Verify the active result is filtered correctly by the status dropdown.", function () {
        create_manual_journal.statusRejectedDropdownCheck();
    });

    it("04.08. Verify the search returns correct results when searching by manual journal name.", function () {
        create_manual_journal.searchName();
    });

    it("04.09. Verify the grid list resets successfully when the reset button is clicked on the manual journal page.", function () {
        create_manual_journal.gridResetButtonCheck();
    });

    it("04.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the manual journal page.", function () {
        create_manual_journal.gridRefreshButtonCheck();
    });

    it("04.11. Verify the manual journal creation reset button clears all entered input values.", function () {
        create_manual_journal.createResetButtonCheck();
    });

    it("04.12. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
        create_manual_journal.createValidationMessageCheck();
    });

    it("04.13. Verify that clicking the go back button on the manual journal create page redirects the user to the manual journal list page.", function () {
        create_manual_journal.createGoBackButtonCheck();
    });

    it("04.14. Verify that clicking the delete button on the manual journal create page redirects the user to the manual journal list page.", function () {
        create_manual_journal.createDeleteButtonCheck();
    });

    it("04.15. Verify that clicking the Add New Journal Details button on the Manual Journal Create page redirects the user to the Manual Journal List page.", function () {
        create_manual_journal.createNewJournalDetailsButtonCheck();
    });

    it("04.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_manual_journal.gridLanguageSwitchCheck();
    });

});
