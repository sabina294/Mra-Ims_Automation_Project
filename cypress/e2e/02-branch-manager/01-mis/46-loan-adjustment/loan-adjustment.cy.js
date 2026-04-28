// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/46-loan-adjustment/loan-adjustment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_adjustment } from "./loan-adjustment.po";

describe("46. Loan Adjustment Module Test Cases", function () {
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

    it("46.01. Verify that the Loan Adjustment List page loads successfully.", function () {
        create_loan_adjustment.gridLoanAdjustmentListPage();
    });

    it("46.02. Verify that a new Loan Adjustment record is created successfully when all required fields are filled with valid data.", function () {
        create_loan_adjustment.createNewLoanAdjustment();
    });

    it("46.03. Verify that the Loan Adjustment record is saved successfully after entering all required valid information.", function () {
        create_loan_adjustment.saveNewLoanAdjustment();
    });

    it("46.04. Verify that the correct action is performed when the Action button is clicked.", function () {
        create_loan_adjustment.actionButtonCheck();
    });

    it("46.05. Verify that Loan Adjustment details, including name and description, are displayed successfully.", function () {
        create_loan_adjustment.viewLoanAdjustment();
    });

    it("46.06. Verify that the Go Back button from the Loan Adjustment details page works successfully.", function () {
        create_loan_adjustment.viewGoBack();
    });

    it("46.07. Verify that the grid list is reset successfully when the Reset button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridResetButtonCheck();
    });

    it("46.08. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the Loan Adjustment page.", function () {
        create_loan_adjustment.gridRefreshButtonCheck();
    });

    it("46.09. Verify that clicking the Search button on the Loan Adjustment grid page redirects the user to the Loan Adjustment List page successfully.", function () {
        create_loan_adjustment.gridSearchButtonCheck();
    });

    it("46.10. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
        create_loan_adjustment.createDraftButtonCheck();
    });

    it("46.11. Verify that validation messages appear for required fields when the Go Back button is clicked with empty inputs.", function () {
        create_loan_adjustment.createGoBackButtonCheck();
    });

    it("46.12. Verify that the grid list content changes correctly from English to Bangla after language switching.", function () {
        create_loan_adjustment.gridLanguageSwitchCheck();
    });
});
