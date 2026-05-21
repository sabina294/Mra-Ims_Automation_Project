// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/38-loan-provision-write-off/loan-provision-write-off.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_provision_write_off } from "./loan-provision-write-off.po";

describe("38. Loan Provision Write-Off Module Test Cases", function () {
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

    it("38.01. Verify Loan Provision Write-Off Grid List Page loads successfully", function () {
        create_loan_provision_write_off.gridLoanProvisionWriteOffListPage();
    });

    it("38.02. Verify check that the Loan Provision Write-Off office selection works correctly from the dropdown on the Loan Provision Write-Off  list page.", function () {
        create_loan_provision_write_off.selectofficeDropdown();
    });

    it("38.03. Verify that the user can filter the inactive Loan Provision Write-Off using the Status Dropdown on the Loan Provision Write-Off List page.", function () {
        create_loan_provision_write_off.statusSubmittedDropdownCheck();
    });

    it("38.04. Verify Filter Active Result by Status Dropdown", function () {
        create_loan_provision_write_off.statusApprovedDropdownCheck();
    });

    it("38.05. Verify Successful Search Result by Loan Provision Write-Off Name", function () {
        create_loan_provision_write_off.searchInLoanProvisionWriteOffName();
    });

    it("38.06. Verify Successful Reset of Grid List Using the Reset Button on Loan Provision Write-Off Page.", function () {
        create_loan_provision_write_off.gridResetButtonCheck();
    });

    it("38.07. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Provision Write-Off Page.", function () {
        create_loan_provision_write_off.gridRefreshButtonCheck();
    });

    it("38.08. Verify that when the user clicks the Search button on the Loan Provision Write-Off grid page, the system redirects to the Loan Provision Write-Off List page..", function () {
        create_loan_provision_write_off.gridSearchButtonCheck();
    });

    it("38.09. Verify check that the grid list content changes correctly from english to bangla.", function () {
        create_loan_provision_write_off.gridLanguageSwitchCheck();
    });
});
