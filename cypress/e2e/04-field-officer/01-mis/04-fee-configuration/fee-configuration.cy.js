// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/04-fee-configuration/fee-configuration.cy.js --browser chrome --headed

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

  it("04.04. Verify that clicking the Go Back button on the fee configuration View page redirects the user to the fee configuration List page.", function () {
    grid_fee_configuration.viewGoBackButton();
  });

  it("04.05. Verify that the fee configuration forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_fee_configuration.turnOnEditMode();
  });

  it("04.06. Verify the fee configuration edit reset button functions correctly.", function () {
    grid_fee_configuration.editResetButton();
  });

  it("04.07. Verify the fee configuration submit button functions correctly.", function () {
    grid_fee_configuration.editSubmitButton();
  });

  it("04.08. Verify that clicking the go back button on the fee configuration edit page redirects the user to the fee configuration list page.", function () {
    grid_fee_configuration.editGoBackButton();
  });

  it("04.09. Verify the user can filter inactive fee configurations using the status dropdown on the fee configuration list page.", function () {
    grid_fee_configuration.statusInactiveDropdownCheck();
  });

  it("04.10. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_fee_configuration.statusActiveDropdownCheck();
  });

  it("04.11. Verify the search returns correct results when searching by fee configuration name.", function () {
    grid_fee_configuration.searchInFeeConfigurationName();
  });

  it("04.12. Verify the grid list resets successfully when the reset button is clicked on the fee configuration page.", function () {
    grid_fee_configuration.gridResetButtonCheck();
  });

  it("04.13. Verify that the grid list is refreshed successfully when the refresh button is clicked on the fee configuration page.", function () {
    grid_fee_configuration.gridRefreshButtonCheck();
  });

  it("04.14. Verify that when the user clicks the Search button on the fee configuration grid page, the system redirects to the fee configuration List page..", function () {
    grid_fee_configuration.gridSearchButtonCheck();
  });

  it("04.15. Verify the Fee Configuration list breadcrumb.", function () {
    grid_fee_configuration.listBreadcrumbCheck();
  });

  it("04.16. Verify the required Fee Configuration grid columns.", function () {
    grid_fee_configuration.requiredGridColumnsCheck();
  });

  it("04.17. Verify valid Fee Configuration grid row data.", function () {
    grid_fee_configuration.gridRecordDataCheck();
  });

  it("04.18. Verify exact Fee Configuration name search.", function () {
    grid_fee_configuration.exactNameSearchCheck();
  });

  it("04.19. Verify partial Fee Configuration name search.", function () {
    grid_fee_configuration.partialNameSearchCheck();
  });

  it("04.20. Verify non-existing Fee Configuration search shows no records.", function () {
    grid_fee_configuration.noResultSearchCheck();
  });

  it("04.21. Verify Reset restores the Fee Configuration grid.", function () {
    grid_fee_configuration.resetRestoresGridCheck();
  });

  it("04.22. Verify Active filter results.", function () {
    grid_fee_configuration.activeStatusResultCheck();
  });

  it("04.23. Verify Fee Type Name ascending sorting.", function () {
    grid_fee_configuration.nameAscendingSortCheck();
  });

  it("04.24. Verify Fee Type Name descending sorting.", function () {
    grid_fee_configuration.nameDescendingSortCheck();
  });

  it("04.25. Verify Fee Configuration first-page pagination state.", function () {
    grid_fee_configuration.firstPagePaginationCheck();
  });

  it("04.26. Verify Fee Configuration View breadcrumb and grid-to-view data.", function () {
    grid_fee_configuration.viewPageDataAndBreadcrumbCheck();
  });

  it("04.27. Verify Fee Configuration Edit Mode fields and Reset behavior.", function () {
    grid_fee_configuration.editModeFieldsAndResetCheck();
  });

  it("04.28. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_fee_configuration.gridLanguageSwitchCheck();
  });
});
