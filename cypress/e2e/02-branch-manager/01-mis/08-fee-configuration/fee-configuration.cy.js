// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/08-fee-configuration/fee-configuration.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_fee_configuration } from "./fee-configuration.po";

describe("08. Fee Configuration Module Test Cases ", function () {
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

  it("08.01. Verify that the Fee Configuration list page loads successfully without errors.", function () {
    grid_fee_configuration.gridFeeConfigurationListPage();
  });

  it("08.02. Verify that the action button performs the expected operation successfully.", function () {
    grid_fee_configuration.actionButtonCheck();
  });

  it("08.03. Verify that the user can view all details of a Fee Configuration including associated fields.", function () {
    grid_fee_configuration.viewFeeConfiguration();
  });

  it("08.04. Verify that clicking the Go Back button on the Fee Configuration view page redirects to the list page.", function () {
    grid_fee_configuration.viewGoBackButton();
  });

  it("08.05. Verify that edit mode can be toggled on and off and all fields switch between editable and read-only states.", function () {
    grid_fee_configuration.turnOnEditMode();
  });

  it("08.06. Verify that the Reset button in edit mode restores the original Fee Configuration data.", function () {
    grid_fee_configuration.editResetButton();
  });

  it("08.07. Verify that the Submit button successfully updates the Fee Configuration.", function () {
    grid_fee_configuration.editSubmitButton();
  });

  it("08.08. Verify that clicking the Go Back button on the edit page redirects to the Fee Configuration list page.", function () {
    grid_fee_configuration.editGoBackButton();
  });

  it("08.09. Verify that inactive Fee Configurations can be filtered using the status dropdown.", function () {
    grid_fee_configuration.statusInactiveDropdownCheck();
  });

  it("08.10. Verify that active Fee Configurations are correctly filtered using the status dropdown.", function () {
    grid_fee_configuration.statusActiveDropdownCheck();
  });

  it("08.11. Verify that searching by Fee Configuration name returns the correct results.", function () {
    grid_fee_configuration.searchInFeeConfigurationName();
  });

  it("08.12. Verify that clicking the Reset button clears all filters and resets the grid list.", function () {
    grid_fee_configuration.gridResetButtonCheck();
  });

  it("08.13. Verify that clicking the Refresh button reloads the Fee Configuration grid list successfully.", function () {
    grid_fee_configuration.gridRefreshButtonCheck();
  });

  it("08.14. Verify that clicking the Search button navigates to and displays the Fee Configuration list page correctly.", function () {
    grid_fee_configuration.gridSearchButtonCheck();
  });

  it("08.15. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_fee_configuration.gridLanguageSwitchCheck();
  });
});
