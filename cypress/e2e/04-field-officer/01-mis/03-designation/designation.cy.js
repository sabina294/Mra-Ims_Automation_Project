// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/03-designation/designation.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_designation } from "./designation.po";

describe("03. Designation Module Test Cases", function () {
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

  it("03.01. Verify the designation list page loads without errors.", function () {
    grid_designation.gridDesignationListPage();
  });

  it("03.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_designation.actionButtonCheck();
  });

  it("03.03. Verify the user can view all relevant details of a designation, including its associated fields.", function () {
    grid_designation.viewDesignation();
  });

  it("03.04. Verify that clicking the Go Back button on the designation View page redirects the user to the designation List page.", function () {
    grid_designation.viewGoBackButton();
  });

  it("03.05. Verify that clicking the go back button on the designation edit page redirects the user to the designation list page.", function () {
    grid_designation.editGoBackButton();
  });

  it("03.06. Verify the user can filter inactive designations using the status dropdown on the designation list page.", function () {
    grid_designation.statusInactiveDropdownCheck();
  });

  it("03.07. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_designation.statusActiveDropdownCheck();
  });

  it("03.08. Verify the search returns correct results when searching by designation name.", function () {
    grid_designation.searchInDesignationName();
  });

  it("03.09. Verify the grid list resets successfully when the reset button is clicked on the designation page.", function () {
    grid_designation.gridResetButtonCheck();
  });

  it("03.10. Verify that the grid list is refreshed successfully when the refresh button is clicked on the designation page.", function () {
    grid_designation.gridRefreshButtonCheck();
  });

  it("03.11. Verify that when the user clicks the Search button on the designation grid page, the system redirects to the designation List page..", function () {
    grid_designation.gridSearchButtonCheck();
  });

  it("03.12. Verify that the Designation List page displays the correct breadcrumb navigation.", function () {
    grid_designation.listBreadcrumbCheck();
  });

  it("03.13. Verify that the Designation grid displays all required columns.", function () {
    grid_designation.requiredGridColumnsCheck();
  });

  it("03.14. Verify that each displayed designation row contains valid data.", function () {
    grid_designation.gridRecordDataCheck();
  });

  it("03.15. Verify that an exact designation-name search returns the matching designation.", function () {
    grid_designation.exactDesignationSearchCheck();
  });

  it("03.16. Verify that a partial designation-name search returns matching designations.", function () {
    grid_designation.partialDesignationSearchCheck();
  });

  it("03.17. Verify that searching for a non-existing designation displays no records.", function () {
    grid_designation.noResultSearchCheck();
  });

  it("03.18. Verify that Reset clears the search criteria and restores the designation list.", function () {
    grid_designation.resetRestoresGridCheck();
  });

  it("03.19. Verify that the Active status filter displays only active designations.", function () {
    grid_designation.activeStatusResultCheck();
  });

  it("03.20. Verify that the Designation Name column supports ascending sorting.", function () {
    grid_designation.designationNameAscendingSortCheck();
  });

  it("03.21. Verify that the Designation Name column supports descending sorting.", function () {
    grid_designation.designationNameDescendingSortCheck();
  });

  it("03.22. Verify that the Designation grid pagination is in the correct first-page state.", function () {
    grid_designation.firstPagePaginationCheck();
  });

  it("03.23. Verify that the Designation View page breadcrumb and displayed data match the selected grid record.", function () {
    grid_designation.viewPageDataAndBreadcrumbCheck();
  });

  it("03.24. Verify that Edit Mode exposes the editable designation fields and Reset clears unsaved input values.", function () {
    grid_designation.editModeFieldsAndResetCheck();
  });

  it("03.25. Verify that the grid content language switches correctly between English and Bangla.", function () {
    grid_designation.gridLanguageSwitchCheck();
  });
});
