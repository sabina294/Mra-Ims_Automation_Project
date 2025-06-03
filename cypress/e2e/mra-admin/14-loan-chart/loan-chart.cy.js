// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/14-loan-chart/loan-chart.cy.js --headed

import "cypress-file-upload";
import { update_loan_chart } from "./loan-chart.po";

describe("14. Loan classification chart Grid list,Update,View,Inactive,Active,Search,Reset,Refresh,create Reset,Go back and Language switch bangla Tests.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("14.01. Verify that the Loan Chart List page loads successfully.", function () {
    update_loan_chart.gridLoanChartListPage();
  });

  it("14.02. Successfully update an existing Loan Classification Chart with valid required field values.", function () {
    update_loan_chart.updateloanchart();
  });

  it("14.03. Verify that the user can successfully view the detailed information of a Loan Classification Chart, including all relevant fields.", function () {
    update_loan_chart.viewloanchart();
  });

  it("14.04. Verify that the user can filter the inactive Loan Charts using the Status dropdown on the Loan Chart List page.", function () {
    update_loan_chart.statusInactiveDropdownCheck();
  });

  it("14.05. Verify Filter Active Result by Status Dropdown", function () {
    update_loan_chart.statusActiveDropdownCheck();
  });

  it("14.06. Verify Successful Search Result by Loan Chart Name", function () {
    update_loan_chart.searchInChartName();
  });

  it("14.07. Verify Successful Reset of Grid List Using the Reset Button on Loan Chart Page.", function () {
    update_loan_chart.gridResetButtonCheck();
  });

  it("14.08. Verify Successful Refresh of Grid List Using the Refresh Button on Loan Chart Page.", function () {
    update_loan_chart.gridRefreshButtonCheck();
  });

  it("14.09. Verify that clicking the Go Back button on the Loan Chart Create page navigates the user back to the Loan Chart List page.", function () {
    update_loan_chart.createGoBackButtonCheck();
  });

  it("14.10. Verify that the grid list content successfully switches from English to Bangla.", function () {
    update_loan_chart.gridLanguageSwitchCheck();
  });
  
});
