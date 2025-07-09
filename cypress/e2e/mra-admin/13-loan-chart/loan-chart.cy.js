// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/13-loan-chart/loan-chart.cy.js --headed

import "cypress-file-upload";
import { update_loan_chart } from "./loan-chart.po";

describe("13. Loan Cassification Chart Module Test Cases.", function () {
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

  it("13.01. Verify the loan classification chart list page loads without errors.", function () {
    update_loan_chart.gridLoanChartListPage();
  });

  it("13.02. Verify that an existing loan classification chart is updated correctly with valid required field values.", function () {
    update_loan_chart.updateloanchart();
  });

  it("13.03. Verify successfully performs the action when the action button is clicked.", function () {
    update_loan_chart.actionButtonCheck();
  });

  it("13.04. Verify the user can view the detailed information of a Loan classification chart with all relevant fields displayed.", function () {
    update_loan_chart.viewloanchart();
  });

  it("13.05. Verify the loan chart edit reset button functions correctly.", function () {
    update_loan_chart.editResetButton();
  });

  it("13.06. Verify that clicking the go back button on the loan chart edit page redirects the user to the loan chart list page.", function () {
    update_loan_chart.editGoBackButton();
  });

  it("13.07. Verify check that the user can filter inactive loan charts using the status dropdown on the loan chart list page.", function () {
    update_loan_chart.statusInactiveDropdownCheck();
  });

  it("13.08. Verify check if the filter by status dropdown correctly filters active results.", function () {
    update_loan_chart.statusActiveDropdownCheck();
  });

  it("13.09. Verify that the search results are accurate when filtered by loan chart name.", function () {
    update_loan_chart.searchInChartName();
  });

  it("13.10. Verify the grid list resets successfully when the reset button is clicked on the loan chart page.", function () {
    update_loan_chart.gridResetButtonCheck();
  });

  it("13.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the loan chart page.", function () {
    update_loan_chart.gridRefreshButtonCheck();
  });

  it("13.12. Verify that clicking the go back button on the loan chart create page redirects the user to the loan chart list page.", function () {
    update_loan_chart.createGoBackButtonCheck();
  });

  it("13.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
    update_loan_chart.gridLanguageSwitchCheck();
  });
});
