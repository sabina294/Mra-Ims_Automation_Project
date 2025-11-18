// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/28-loan-disbursement/loan-disbursement.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_disbursement } from "./loan-disbursement.po";

describe("28. Loan Disbursement Module Test Cases", function () {
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

    it("28.01. Verify Loan Disbursement Grid List Page loads successfully", function () {
        create_loan_disbursement.gridLoanDisbursementListPage();
    });

    it("28.02. Verify successfully performs the action when the action button is clicked.", function () {
        create_loan_disbursement.actionButtonCheck();
    });

    it('28.03. Verify successful Loan Disbursement information View.', function () {
        create_loan_disbursement.viewLoanDisbursement();
    });

    it('28.04. Verify that the “Go Back” button works correctly on the Loan Disbursement Information View page.', function () {
        create_loan_disbursement.GoBackButton();
    });

    it("28.05. Verify Successful Search Result by Loan Disbursement Name", function () {
        create_loan_disbursement.searchInLoanDisbursementName();
    });

    it('28.06. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        create_loan_disbursement.statusOfficeDropdownCheck();
    });

    it("28.07. Verify Successful Reset of Grid List Using the Reset Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridResetButtonCheck();
    });

    it("28.08. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridRefreshButtonCheck();
    });

    it("28.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_loan_disbursement.gridLanguageSwitchCheck();
    });
});
