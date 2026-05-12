// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/56-loan-adjustment/loan-adjustment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_adjustment } from "./loan-adjustment.po";

describe("56. Loan Adjustment Module Test Cases", function () {
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

    it("56.01. Verify Loan Adjustment Grid List Page loads successfully", function () {
        grid_loan_adjustment.gridLoanAdjustmentListPage();
    });

    it("56.02. Verify Successful Search Result by Loan Adjustment Name", function () {
        grid_loan_adjustment.searchInLoanAdjustmentName();
    });

    it('56.03. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_loan_adjustment.statusOfficeDropdownCheck();
    });

    it("56.04. Verify Successful Reset of Grid List Using the Reset Button on Loan Adjustment  Page.", function () {
        grid_loan_adjustment.gridResetButtonCheck();
    });

    it("56.05. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Adjustment  Page.", function () {
        grid_loan_adjustment.gridRefreshButtonCheck();
    });

    it("56.06. Verify that when the user clicks the Search button on the loan adjustment grid page, the system redirects to the loan adjustment List page..", function () {
        grid_loan_adjustment.gridSearchButtonCheck();
    });

    it("56.07. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_loan_adjustment.gridLanguageSwitchCheck();
    });
});
