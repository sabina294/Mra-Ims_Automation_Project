// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/49-loan-adjustment/loan-adjustment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_adjustment } from "./loan-adjustment.po";

describe("49. Loan Adjustment Module Test Cases", function () {
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

    it("49.01. Verify that the Loan Adjustment list page loads successfully.", function () {
        create_loan_adjustment.gridLoanAdjustmentListPage();
    });

    it("49.02. Verify that a new Loan Adjustment record can be created successfully with valid required data.", function () {
        create_loan_adjustment.createNewLoanAdjustment();
    });

    it("49.03. Verify that the new Loan Adjustment record is saved successfully after providing valid required information.", function () {
        create_loan_adjustment.saveNewLoanAdjustment();
    });

    it("49.04. Verify that the correct action options are displayed when the Action button is clicked.", function () {
        create_loan_adjustment.actionButtonCheck();
    });

    it("49.05. Verify that the Loan Adjustment details, including name and description, are displayed successfully.", function () {
        create_loan_adjustment.viewLoanAdjustment();
    });

    it("49.06. Verify that the Go Back button works correctly from the Loan Adjustment details page.", function () {
        create_loan_adjustment.viewGoBack();
    });

    it("49.07. Verify that the Loan Adjustment record can be unsubmitted successfully from the Action menu.", function () {
        create_loan_adjustment.actionLoanAdjustmentUnsubmit();
    });

    it("49.08. Verify that the user can navigate back successfully after unsubmission from the details page.", function () {
        create_loan_adjustment.actionLoanAdjustmentUnsubmitGoBack();
    });

    it("49.09. Verify that the Loan Adjustment record is unsubmitted successfully when the Unsubmit button is clicked.", function () {
        create_loan_adjustment.loanAdjustmentUnsubmit();
    });

    it("49.10. Verify that an existing Loan Adjustment record can be edited successfully.", function () {
        create_loan_adjustment.actionEditLoanAdjustment();
    });

    it("49.11. Verify that clicking the Go Back button from the Loan Adjustment edit form redirects the user successfully.", function () {
        create_loan_adjustment.editGoBack();
    });

    it("49.12. Verify that the Loan Adjustment record can be submitted successfully from the Action menu.", function () {
        create_loan_adjustment.actionLoanAdjustmentSubmit();
    });

    it("49.13. Verify that the Go Back button works correctly from the Loan Adjustment Action page.", function () {
        create_loan_adjustment.actionLoanAdjustmentGoBack();
    });

    it("49.14. Verify that the Loan Adjustment record can be submitted successfully.", function () {
        create_loan_adjustment.loanAdjustmentSubmit();
    });

    it("49.15. Verify that the Loan Adjustment record can be deleted successfully from the Action menu.", function () {
        create_loan_adjustment.loanAdjustmentDeleteProcess();
    });

    it("49.16. Verify that the delete option is displayed correctly from the Loan Adjustment Action menu.", function () {
        create_loan_adjustment.loanAdjustmentActionDelete();
    });

    it("49.17. Verify that the delete go back option is displayed correctly from the Loan Adjustment Action menu.", function () {
        create_loan_adjustment.loanAdjustmentActionDeleteGoBack();
    });

    it("49.18. Verify that the Loan Adjustment record is deleted successfully.", function () {
        create_loan_adjustment.loanAdjustmentDelete();
    });

    it("49.19. Verify that a new Loan Adjustment record can be created successfully after deletion.", function () {
        create_loan_adjustment.loanAdjustmentAgain();
    });

    it("49.20. Verify that the newly created Loan Adjustment record is saved successfully after providing valid required information.", function () {
        create_loan_adjustment.againSaveNewLoanAdjustment();
    });

    it("49.21. Verify that the Loan Adjustment edit form is saved successfully when the Draft button is clicked.", function () {
        create_loan_adjustment.editDraftButton();
    });

    it("49.22. Verify that the Loan Adjustment edit form is saved successfully when the submit button is clicked.", function () {
        create_loan_adjustment.editSubmitButton();
    });

    it("49.23. Verify that the grid list is reset successfully when the Reset button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridResetButtonCheck();
    });

    it("49.24. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridRefreshButtonCheck();
    });

    it("49.25. Verify that the Loan Adjustment breadcrumb displays the correct navigation hierarchy.", function () {
        create_loan_adjustment.listBreadcrumbCheck();
    });

    it("49.26. Verify that the Loan Adjustment grid displays all required columns.", function () {
        create_loan_adjustment.requiredGridColumnsCheck();
    });

    it("49.27. Verify that adjustment records contain required data and numeric amounts, or display No Data.", function () {
        create_loan_adjustment.gridRecordDataCheck();
    });

    it("49.28. Verify that a selected office, search controls and New Adjustment button are available.", function () {
        create_loan_adjustment.listControlsCheck();
    });

    it("49.29. Verify that the grid list content changes correctly when switching the language from English to Bangla.", function () {
        create_loan_adjustment.gridLanguageSwitchCheck();
    });
});
