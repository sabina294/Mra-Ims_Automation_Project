// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/32-loan-disbursement/loan-disbursement.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_disbursement } from "./loan-disbursement.po";

describe("32. Loan Disbursement Module Test Cases", function () {
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
    it("32.01. Verify that the Loan Disbursement grid list page loads successfully", function () {
        create_loan_disbursement.gridLoanDisbursementListPage();
    });

    it("32.02. Verify that the Action button performs the expected operation when clicked", function () {
        create_loan_disbursement.actionButtonCheck();
    });

    it("32.03. Verify that Loan Disbursement details are displayed correctly in the View page", function () {
        create_loan_disbursement.viewLoanDisbursement();
    });

    it("32.04. Verify that clicking the 'Go Back' button from the View page redirects to the grid list page", function () {
        create_loan_disbursement.viewGoBackButton();
    });

    it("32.05. Verify that search functionality works correctly using Loan Disbursement name", function () {
        create_loan_disbursement.gridSearchButtonCheck();
    });

    it("32.06. Verify that the Reset button clears filters and reloads the grid list", function () {
        create_loan_disbursement.gridResetButtonCheck();
    });

    it("32.07. Verify that the Refresh button reloads the Loan Disbursement grid list successfully", function () {
        create_loan_disbursement.gridRefreshButtonCheck();
    });

    it("32.08. Verify successful loan disbursement from the grid list using the Disburse button", function () {
        create_loan_disbursement.loanDisburseButtonCheck();
    });

    it("32.09. Verify successful loan disbursement from the grid list using the Disburse submit button", function () {
        create_loan_disbursement.loanDisburseSubmitButtonCheck();
    });

    it("32.10. Verify that the grid list content updates correctly when switching language from English to Bangla", function () {
        create_loan_disbursement.gridLanguageSwitchCheck();
    });


});
