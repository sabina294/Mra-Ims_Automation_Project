// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/31-loan-adjustment/loan-adjustment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_adjustment } from "./loan-adjustment.po";

describe("31. Loan Adjustment Module Test Cases", function () {
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

    it("31.01. Verify that the Loan Adjustment list page loads successfully.", function () {
        create_loan_adjustment.gridLoanAdjustmentListPage();
    });

    it("31.02. Verify that a new Loan Adjustment record can be created successfully with valid required data.", function () {
        create_loan_adjustment.createNewLoanAdjustment();
    });

    it("31.03. Verify that the new Loan Adjustment record is saved successfully after providing valid required information.", function () {
        create_loan_adjustment.saveNewLoanAdjustment();
    });

    it("31.04. Verify that the correct action options are displayed when the Action button is clicked.", function () {
        create_loan_adjustment.actionButtonCheck();
    });

    it("31.05. Verify that the Loan Adjustment details, including name and description, are displayed successfully.", function () {
        create_loan_adjustment.viewLoanAdjustment();
    });

    it("31.06. Verify that the Go Back button works correctly from the Loan Adjustment details page.", function () {
        create_loan_adjustment.viewGoBack();
    });

    it("31.07. Verify that the Loan Adjustment record can be unsubmitted successfully from the Action menu.", function () {
        create_loan_adjustment.actionLoanAdjustmentUnsubmit();
    });

    it("31.08. Verify that the user can navigate back successfully after unsubmission from the details page.", function () {
        create_loan_adjustment.actionLoanAdjustmentUnsubmitGoBack();
    });

    it("31.09. Verify that the Loan Adjustment record is unsubmitted successfully when the Unsubmit button is clicked.", function () {
        create_loan_adjustment.loanAdjustmentUnsubmit();
    });

    it("31.10. Verify that an existing Loan Adjustment record can be edited successfully.", function () {
        create_loan_adjustment.actionEditLoanAdjustment();
    });

    it("31.11. Verify that clicking the Go Back button from the Loan Adjustment edit form redirects the user successfully.", function () {
        create_loan_adjustment.editGoBack();
    });

    it("31.12. Verify that the Loan Adjustment record can be submitted successfully from the Action menu.", function () {
        create_loan_adjustment.actionLoanAdjustmentSubmit();
    });

    it("31.13. Verify that the Go Back button works correctly from the Loan Adjustment Action page.", function () {
        create_loan_adjustment.actionLoanAdjustmentGoBack();
    });

    it("31.14. Verify that the Loan Adjustment record can be submitted successfully.", function () {
        create_loan_adjustment.loanAdjustmentSubmit();
    });

    it("31.15. Verify that the Loan Adjustment record can be deleted successfully from the Action menu.", function () {
        create_loan_adjustment.loanAdjustmentDeleteProcess();
    });

    it("31.16. Verify that the delete option is displayed correctly from the Loan Adjustment Action menu.", function () {
        create_loan_adjustment.loanAdjustmentActionDelete();
    });

    it("31.17. Verify that the delete go back option is displayed correctly from the Loan Adjustment Action menu.", function () {
        create_loan_adjustment.loanAdjustmentActionDeleteGoBack();
    });

    it("31.18. Verify that the Loan Adjustment record is deleted successfully.", function () {
        create_loan_adjustment.loanAdjustmentDelete();
    });

    it("31.19. Verify that a new Loan Adjustment record can be created successfully after deletion.", function () {
        create_loan_adjustment.loanAdjustmentAgain();
    });

    it("31.20. Verify that the newly created Loan Adjustment record is saved successfully after providing valid required information.", function () {
        create_loan_adjustment.againSaveNewLoanAdjustment();
    });

    it("31.21. Verify that the Loan Adjustment edit form is saved successfully when the Draft button is clicked.", function () {
        create_loan_adjustment.editDraftButton();
    });

    it("31.22. Verify that the Loan Adjustment edit form is saved successfully when the submit button is clicked.", function () {
        create_loan_adjustment.editSubmitButton();
    });

    it("31.23. Verify that the grid list is reset successfully when the Reset button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridResetButtonCheck();
    });

    it("31.24. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridRefreshButtonCheck();
    });

    it("31.25. Verify Loan Adjustment: the breadcrumb is correct.", function () {
        create_loan_adjustment.listBreadcrumbCheck();
    });

    it("31.26. Verify Loan Adjustment: all required grid columns are visible.", function () {
        create_loan_adjustment.requiredGridColumnsCheck();
    });

    it("31.27. Verify Loan Adjustment: the grid shows valid records and amounts or No Data.", function () {
        create_loan_adjustment.recordsAndAmountsCheck();
    });

    it("31.28. Verify Loan Adjustment: search and reset controls are available.", function () {
        create_loan_adjustment.searchControlsCheck();
    });

    it("31.29. Verify Loan Adjustment: the New button is visible and enabled.", function () {
        create_loan_adjustment.newButtonAvailableCheck();
    });

    it("31.30. Verify Loan Adjustment: Refresh retains the list and renders records or No Data.", function () {
        create_loan_adjustment.refreshListStateCheck();
    });

    it("31.31. Verify Loan Adjustment: pagination starts on page one or the empty state is displayed.", function () {
        create_loan_adjustment.paginationOrEmptyStateCheck();
    });

    it("31.32. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
        create_loan_adjustment.gridLanguageSwitchCheck();
    });
});