// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/49-loan-adjustment/loan-adjustment.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_adjustment } from "./loan-adjustment.po";

describe("49. Loan Adjustment Module Test Cases", function () {
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

    it("49.01. Verify Loan Adjustment Grid List Page loads successfully", function () {
        grid_loan_adjustment.gridLoanAdjustmentListPage();
    });

    it("49.02. Verify Successful Search Result by Loan Adjustment Name", function () {
        grid_loan_adjustment.searchInLoanAdjustmentName();
    });

    it('49.03. Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
        grid_loan_adjustment.statusOfficeDropdownCheck();
    });

    it("49.04. Verify Successful Reset of Grid List Using the Reset Button on Loan Adjustment  Page.", function () {
        grid_loan_adjustment.gridResetButtonCheck();
    });

    it("49.05. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Adjustment  Page.", function () {
        grid_loan_adjustment.gridRefreshButtonCheck();
    });

    it("49.06. Verify check that the grid list content changes correctly from english to bangla.", function () {
        grid_loan_adjustment.gridLanguageSwitchCheck();
    });
});
