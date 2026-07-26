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

    it("04.01. Verify that the Manual Journal list page loads successfully with all required grid elements.", function () {
        create_manual_journal.gridManualJournalListPage();
    });

    it("04.02. Verify that a manual journal is created successfully when all mandatory fields are populated with valid data.", function () {
        create_manual_journal.createManualJournal();
    });

    it("04.03. Verify that the system prevents manual journal creation without a reference number, even when all other required fields are valid.", function () {
        create_manual_journal.createWithoutReferenceNumber();
    });

    it("04.04. Verify that the system prevents manual journal creation without a description, even when all other required fields are valid.", function () {
        create_manual_journal.createWithoutDescription();
    });

    it("04.05. Verify that the system prevents manual journal creation without selecting a ledger in the Journal Details section.", function () {
        create_manual_journal.createWithoutJournalDetailsLedger();
    });

    it("04.06. Verify that the system prevents manual journal creation without entering a description in the Journal Details section.", function () {
        create_manual_journal.createWithoutJournalDetailsDescription();
    });

    it("04.07. Verify that the system prevents manual journal creation without entering a debit amount in the Journal Details section.", function () {
        create_manual_journal.createWithoutJournalDetailsDebitedAmount();
    });

    it("04.08. Verify that the system prevents manual journal creation without entering a credit amount in the Journal Details section.", function () {
        create_manual_journal.createWithoutJournalDetailsCreditedAmount();
    });

    it("04.09. Verify that the created manual journal record appears in My Tasks.", function () {
        create_manual_journal.myTaskMenuManualJournal();
    });

    it("04.10. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
        create_manual_journal.myTaskResetButtonCheck();
    });

    it("04.11. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
        create_manual_journal.myTaskRefreshButtonCheck();
    });

    it("04.12. Verify that the successfully approve a manual journal after creation.", function () {
        create_manual_journal.approveManualJournal();
    });

    it("04.13. Verify that the Action button performs the expected operation when clicked.", function () {
        create_manual_journal.actionButtonCheck();
    });

    it("04.14. Verify that the user can view the complete details of a manual journal record.", function () {
        create_manual_journal.viewManualJournal();
    });

    it("04.15. Verify that the Go Back button navigates the user to the Manual Journal list page.", function () {
        create_manual_journal.goBackManualJournal();
    });

    it("04.16. Verify that the search functionality returns the correct results when searching for a manual journal.", function () {
        create_manual_journal.searchName();
    });

    it("04.17. Verify that the grid is reset successfully when the Reset button is clicked.", function () {
        create_manual_journal.gridResetButtonCheck();
    });

    it("04.18. Verify that the grid is refreshed successfully when the Refresh button is clicked.", function () {
        create_manual_journal.gridRefreshButtonCheck();
    });

    it("04.19. Verify that the grid list is displayed successfully when the Draft button is enabled on the Member Management page.", function () {
        create_manual_journal.gridDraftButton();
    });

    it("04.20. Verify that the grid list is displayed successfully when the Draft button is disabled on the Member Management page.", function () {
        create_manual_journal.gridDraftButtonOff();
    });

    it("04.21. Verify that clicking the Search button reloads and displays the filtered results on the Manual Journal list page.", function () {
        create_manual_journal.gridSearchButtonCheck();
    });

    it("04.22. Verify that the Reset button on the create page clears all input fields successfully.", function () {
        create_manual_journal.createResetButtonCheck();
    });

    it("04.23. Verify that validation messages are displayed when submitting the form without completing the required fields.", function () {
        create_manual_journal.createValidationMessageCheck();
    });

    it("04.24. Verify that validation messages are displayed when submitting the form without completing the required fields.", function () {
        create_manual_journal.createDraftButtonCheck();
    });

    it("04.25. Verify that validation messages are displayed when submitting the form without completing the required fields.", function () {
        create_manual_journal.createApproveButtonCheck();
    });

    it("04.26. Verify that clicking the Go Back button on the create page redirects the user to the Manual Journal list page.", function () {
        create_manual_journal.createGoBackButtonCheck();
    });

    it("04.27. Verify that clicking the Delete button removes the manual journal record successfully.", function () {
        create_manual_journal.createDeleteButtonCheck();
    });

    it("04.28. Verify that clicking the 'Add New Journal Details' button allows the user to add multiple journal detail entries successfully.", function () {
        create_manual_journal.createNewJournalDetailsButtonCheck();
    });

    it("04.29. Verify that the grid content is updated correctly when switching the language from English to Bangla.", function () {
        create_manual_journal.gridLanguageSwitchCheck();
    });
});
