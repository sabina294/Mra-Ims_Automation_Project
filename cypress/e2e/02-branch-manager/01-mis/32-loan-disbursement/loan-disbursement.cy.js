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

    it("32.01. Verify Loan Disbursement Grid List Page loads successfully", function () {
        create_loan_disbursement.gridLoanDisbursementListPage();
    });

    // it("32.02. Verify successfully performs the action when the action button is clicked.", function () {
    //     create_loan_disbursement.actionButtonCheck();
    // });

    // it('32.03. Verify successful Loan Disbursement information View.', function () {
    //     create_loan_disbursement.viewLoanDisbursement();
    // });

    it("32.04. Verify Successful Search Result by Loan Disbursement Name", function () {
        create_loan_disbursement.searchInLoanDisbursementName();
    });

    it("32.05. Verify Successful Reset of Grid List Using the Reset Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridResetButtonCheck();
    });

    it("32.06. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Disbursement  Page.", function () {
        create_loan_disbursement.gridRefreshButtonCheck();
    });

    it("32.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_loan_disbursement.gridLanguageSwitchCheck();
    });
});
