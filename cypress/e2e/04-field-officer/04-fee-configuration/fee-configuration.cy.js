// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/04-fee-configuration/fee-configuration.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_fee_configuration } from "./fee-configuration.po";

describe("04. Fee Configuration Module Test Cases ", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("04.01. Verify the fee configuration list page loads without errors.", function () {
    grid_fee_configuration.gridFeeConfigurationListPage();
  });

  it("04.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_fee_configuration.actionButtonCheck();
  });

  it("04.03. Verify the user can view all relevant details of a fee configuration, including its associated fields.", function () {
    grid_fee_configuration.viewFeeConfiguration();
  });

  it("04.04. Verify that the fee configuration forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_fee_configuration.turnOnEditMode();
  });

  it("04.05. Verify the fee configuration edit reset button functions correctly.", function () {
    grid_fee_configuration.editResetButton();
  });

  it("04.06. Verify the fee configuration submit button functions correctly.", function () {
    grid_fee_configuration.editSubmitButton();
  });

  it("04.07. Verify that clicking the go back button on the fee configuration edit page redirects the user to the fee configuration list page.", function () {
    grid_fee_configuration.editGoBackButton();
  });

  it("04.08. Verify the user can filter inactive fee configurations using the status dropdown on the fee configuration list page.", function () {
    grid_fee_configuration.statusInactiveDropdownCheck();
  });

  it("04.09. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_fee_configuration.statusActiveDropdownCheck();
  });

  it("04.10. Verify the search returns correct results when searching by fee configuration name.", function () {
    grid_fee_configuration.searchInFeeConfigurationName();
  });

  it("04.11. Verify the grid list resets successfully when the reset button is clicked on the fee configuration page.", function () {
    grid_fee_configuration.gridResetButtonCheck();
  });

  it("04.12. Verify that the grid list is refreshed successfully when the refresh button is clicked on the fee configuration page.", function () {
    grid_fee_configuration.gridRefreshButtonCheck();
  });

  it("04.13. Verify that when the user clicks the Search button on the fee configuration grid page, the system redirects to the fee configuration List page..", function () {
    grid_fee_configuration.gridSearchButtonCheck();
  });

  it("04.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_fee_configuration.gridLanguageSwitchCheck();
  });
});
