// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/13-loan-chart/loan-chart.cy.js --headed

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

  it("13.01. Verify that the Loan Classification Chart list page loads successfully without any errors.", function () {
    update_loan_chart.gridLoanChartListPage();
  });

  // it("13.02. Verify that an existing Loan Classification Chart can be updated successfully with valid required field values.", function () {
  //   update_loan_chart.updateLoanChart();
  // });

  it("13.03. Verify that the appropriate action is performed when the action button is clicked.", function () {
    update_loan_chart.actionButtonCheck();
  });

  it("13.04. Verify that the user can view the detailed information of a Loan Classification Chart with all relevant fields displayed.", function () {
    update_loan_chart.viewloanchart();
  });

  it("13.05. Verify that clicking the Go Back button on the Loan Classification Chart view page redirects the user to the Loan Classification Chart list page.", function () {
    update_loan_chart.viewGoBackButton();
  });

  it("13.06. Verify that the Loan Classification Chart edit reset button resets all editable fields correctly.", function () {
    update_loan_chart.editResetButton();
  });

  it("13.07. Verify that the Loan Classification Chart edit submit button updates the data successfully with valid inputs.", function () {
    update_loan_chart.editSubmitButton();
  });

  it("13.08. Verify that clicking the Go Back button on the Loan Classification Chart edit page redirects the user to the Loan Classification Chart list page.", function () {
    update_loan_chart.editGoBackButton();
  });

  it("13.09. Verify that the user can filter inactive Loan Classification Charts using the status dropdown.", function () {
    update_loan_chart.statusInactiveDropdownCheck();
  });

  it("13.10. Verify that the status dropdown correctly filters active Loan Classification Charts.", function () {
    update_loan_chart.statusActiveDropdownCheck();
  });

  it("13.11. Verify that the search results are accurate when filtering by Loan Classification Chart name.", function () {
    update_loan_chart.searchInChartName();
  });

  it("13.12. Verify that clicking the reset button clears all filters and resets the grid list successfully.", function () {
    update_loan_chart.gridResetButtonCheck();
  });

  it("13.13. Verify that clicking the refresh button reloads the grid list successfully.", function () {
    update_loan_chart.gridRefreshButtonCheck();
  });

  it("13.14. Verify that clicking the Go Back button on the Loan Classification Chart create page redirects the user to the list page.", function () {
    update_loan_chart.createGoBackButtonCheck();
  });

  it("13.15. Verify that when the user clicks the Search button on the Loan Classification Chart  grid page, the system redirects to the Loan Classification Chart  List page..", function () {
    update_loan_chart.gridSearchButtonCheck();
  });

  it("13.16. Verify that the grid list content switches correctly between English and Bangla.", function () {
    update_loan_chart.gridLanguageSwitchCheck();
  });
});
