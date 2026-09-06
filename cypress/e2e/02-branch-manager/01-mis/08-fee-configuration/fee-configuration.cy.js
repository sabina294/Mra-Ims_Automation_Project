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

  it("08.15. Verify the Fee Configuration list breadcrumb.", function () {
    grid_fee_configuration.listBreadcrumbCheck();
  });

  it("08.16. Verify the required Fee Configuration grid columns.", function () {
    grid_fee_configuration.requiredGridColumnsCheck();
  });

  it("08.17. Verify valid Fee Configuration grid row data.", function () {
    grid_fee_configuration.gridRecordDataCheck();
  });

  it("08.18. Verify exact Fee Configuration name search.", function () {
    grid_fee_configuration.exactNameSearchCheck();
  });

  it("08.19. Verify partial Fee Configuration name search.", function () {
    grid_fee_configuration.partialNameSearchCheck();
  });

  it("08.20. Verify non-existing Fee Configuration search shows no records.", function () {
    grid_fee_configuration.noResultSearchCheck();
  });

  it("08.21. Verify Reset restores the Fee Configuration grid.", function () {
    grid_fee_configuration.resetRestoresGridCheck();
  });

  it("08.22. Verify Active filter results.", function () {
    grid_fee_configuration.activeStatusResultCheck();
  });

  it("08.23. Verify Fee Type Name ascending sorting.", function () {
    grid_fee_configuration.nameAscendingSortCheck();
  });

  it("08.24. Verify Fee Type Name descending sorting.", function () {
    grid_fee_configuration.nameDescendingSortCheck();
  });

  it("08.25. Verify Fee Configuration first-page pagination state.", function () {
    grid_fee_configuration.firstPagePaginationCheck();
  });

  it("08.26. Verify Fee Configuration View breadcrumb and grid-to-view data.", function () {
    grid_fee_configuration.viewPageDataAndBreadcrumbCheck();
  });

  it("08.27. Verify Fee Configuration Edit Mode fields and Reset behavior.", function () {
    grid_fee_configuration.editModeFieldsAndResetCheck();
  });

  it("08.28. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_fee_configuration.gridLanguageSwitchCheck();
  });
});
