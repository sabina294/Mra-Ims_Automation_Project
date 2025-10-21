// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/30-loan-rebate/loan-rebate.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_loan_rebate } from "./loan-rebate.po";

describe("30. Loan Rebate Module Test Cases", function () {
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

  it("30.01. Verify Loan Rebate Grid List Page loads successfully", function () {
    create_loan_rebate.gridLoanRebateListPage();
  });

  it("30.02. Verify successful creation of a Loan Rebate record by MFI-Admin role", function () {
    create_loan_rebate.createLoanRebate();
  });

  //   it("30.03. Verify successful creation of a new loan rebate record", function () {
  //     create_loan_rebate.approveLoanRebate();
  //   });

    it("30.04. Verify successfully performs the action when the action button is clicked.", function () {
      create_loan_rebate.actionButtonCheck();
    });

    it("30.05. Verify successful loan rebate information View.", function () {
      create_loan_rebate.viewLoanRebate();
    });

  //   it("30.06. Verify editing functionality for loan rebate record by MFI-Admin role", function () {
  //     create_loan_rebate.editLoanRebate();
  //   });

  it("30.07. Verify that the user can filter the inactive Loan Rebate using the Status Dropdown on the Loan Rebate List page.", function () {
    create_loan_rebate.statusInactiveDropdownCheck();
  });

  it("30.08. Verify Filter Active Result by Status Dropdown", function () {
    create_loan_rebate.statusActiveDropdownCheck();
  });

  it("30.09. Verify Successful Search Result by Loan rebate Name", function () {
    create_loan_rebate.searchInLoanRebateName();
  });

  it("30.10. Verify check that the Loan Rebate office selection works correctly from the dropdown on the loan rebate list page.", function () {
    create_loan_rebate.selectofficeDropdown();
  });

  it("30.11. Verify Successful Reset of Grid List Using the Reset Button on Loan rebate Page.", function () {
    create_loan_rebate.gridResetButtonCheck();
  });

  it("30.12. Verify Successful Refresh of Grid List Using the Refresh Button on Loan rebate Page.", function () {
    create_loan_rebate.gridRefreshButtonCheck();
  });

  it("30.14. Verify that clicking the add icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createAddIconButtonCheck();
  });

  it("30.15. Verify that clicking the remove icon  button on the loan rebate create page redirects the user to the loan rebate list page.", function () {
    create_loan_rebate.createRemoveIconButtonCheck();
  });

  it("30.16. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_loan_rebate.gridLanguageSwitchCheck();
  });
});
