// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/27-loan-disbursement/loan-disbursement.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_disbursement } from "./loan-disbursement.po";

describe("27. Loan Disbursement Module Test Cases", function () {
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

    it("27.01. Verify Loan Disbursement Grid List Page loads successfully", function () {
        create_loan_disbursement.gridLoanDisbursementListPage();
    });

    it("27.02. Verify successfully performs the action when the action button is clicked.", function () {
        create_loan_disbursement.actionButtonCheck();
    });

    it('27.03. Verify successful Loan Disbursement information View.', function () {
        create_loan_disbursement.viewLoanDisbursement();
    });

    it("27.04. Verify Successful Search Result by Loan Disbursement Name", function () {
        create_loan_disbursement.searchInLoanDisbursementName();
    });

    it('27.05. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        create_loan_disbursement.statusOfficeDropdownCheck();
    });

    it("27.06. Verify Successful Reset of Grid List Using the Reset Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridResetButtonCheck();
    });

    it("27.07. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridRefreshButtonCheck();
    });

    it("27.08. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_loan_disbursement.gridLanguageSwitchCheck();
    });
});
