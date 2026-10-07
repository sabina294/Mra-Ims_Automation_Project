// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/35-loan-provision/loan-provision.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_loan_provision } from "./loan-provision.po";

describe("35. Loan provision Module Test Cases", function () {
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

  it("35.01. Verify Loan Provision Grid List Page loads successfully", function () {
    grid_loan_provision.gridLoanProvisionListPage();
  });

  it("35.02. Verify that the Loan Provision breadcrumb is correct.", function () {
    grid_loan_provision.breadcrumbCheck();
  });

  it("35.03. Verify that all four summary labels are visible.", function () {
    grid_loan_provision.summaryLabelsCheck();
  });

  it("35.04. Verify that all required detail columns are displayed.", function () {
    grid_loan_provision.columnsCheck();
  });

  it("35.05. Verify that all five provision categories and Bangla titles are displayed.", function () {
    grid_loan_provision.categoryRowsCheck();
  });

  it("35.06. Verify that account counts and monetary values are valid nonnegative numbers.", function () {
    grid_loan_provision.numericValuesCheck();
  });

  it("35.07. Verify that accumulation rates are percentages between zero and one hundred.", function () {
    grid_loan_provision.accumulationRatesCheck();
  });

  it("35.08. Verify that remaining principal does not exceed loan principal.", function () {
    grid_loan_provision.remainingPrincipalCheck();
  });

  it("35.09. Verify that Submit is visible and enabled.", function () {
    grid_loan_provision.submitControlCheck();
  });

  it("35.10. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_loan_provision.gridLanguageSwitchCheck();
  });
});
