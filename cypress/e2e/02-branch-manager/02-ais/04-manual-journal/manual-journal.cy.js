// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/02-ais/04-manual-journal/manual-journal.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_manual_journal } from "./manual-journal.po";

describe("04. Manual Journal Module Test Cases", function () {
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

    it("04.03. Verify that the system prevents manual journal creation without a reference number, even when all other fields are valid.", function () {
        create_manual_journal.createWithoutReferenceNumber();
    });

    it("04.04. Verify that the system prevents manual journal creation without a description, even when all other fields are valid.", function () {
        create_manual_journal.createWithoutDescription();
    });

    it("04.05. Verify that the system prevents manual journal creation without selecting a journal details ledger.", function () {
        create_manual_journal.createWithoutJournalDetailsLedger();
    });

    it("04.06. Verify that the system prevents manual journal creation without entering a journal details description.", function () {
        create_manual_journal.createWithoutJournalDetailsDescription();
    });

    it("04.07. Verify that the system prevents manual journal creation without entering a debited amount in journal details.", function () {
        create_manual_journal.createWithoutJournalDetailsDebitedAmount();
    });

    it("04.08. Verify that the system prevents manual journal creation without entering a credited amount in journal details.", function () {
        create_manual_journal.createWithoutJournalDetailsCreditedAmount();
    });

    it("04.09. Verify that the action button performs the expected operation when clicked.", function () {
        create_manual_journal.actionButtonCheck();
    });

    it("04.10. Verify that the user can view complete details of a manual journal record.", function () {
        create_manual_journal.viewManualJournal();
    });

    it("04.11. Verify that the Go Back button navigates the user to the previous/manual journal list page.", function () {
        create_manual_journal.goBackManualJournal();
    });

    it("04.12. Verify that inactive manual journals are filtered correctly using the status dropdown.", function () {
        create_manual_journal.statusApproveDropdownCheck();
    });

    it("04.13. Verify that active/rejected manual journals are filtered correctly using the status dropdown.", function () {
        create_manual_journal.statusRejectedDropdownCheck();
    });

    it("04.14. Verify that the search functionality returns correct results when searching by manual journal name.", function () {
        create_manual_journal.searchName();
    });

    it("04.15. Verify that the grid resets successfully when the Reset button is clicked.", function () {
        create_manual_journal.gridResetButtonCheck();
    });

    it("04.16. Verify that the grid refreshes successfully when the Refresh button is clicked.", function () {
        create_manual_journal.gridRefreshButtonCheck();
    });

    it("04.17. Verify that clicking the Search button reloads and displays filtered results on the manual journal list page.", function () {
        create_manual_journal.gridSearchButtonCheck();
    });

    it("04.18. Verify that the Reset button on the create page clears all input fields.", function () {
        create_manual_journal.createResetButtonCheck();
    });

    it("04.19. Verify that validation messages are displayed when submitting the form with empty required fields.", function () {
        create_manual_journal.createValidationMessageCheck();
    });

    it("04.20. Verify that clicking the Go Back button on the create page redirects to the manual journal list page.", function () {
        create_manual_journal.createGoBackButtonCheck();
    });

    it("04.21. Verify that clicking the Delete button redirects the user to the manual journal list page.", function () {
        create_manual_journal.createDeleteButtonCheck();
    });

    it("04.22. Verify that clicking the 'Add New Journal Details' button allows adding new journal detail entries correctly.", function () {
        create_manual_journal.createNewJournalDetailsButtonCheck();
    });

    it("04.23. Verify that the grid content updates correctly when switching language from English to Bangla.", function () {
        create_manual_journal.gridLanguageSwitchCheck();
    });

});
