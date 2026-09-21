// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/06-office/office.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_office } from "./office.po";

describe("06. Office Module Test Cases", function () {
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

  it("06.01. Verify the office list page loads without errors.", function () {
    grid_office.gridOfficePage();
  });

  it("06.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_office.actionButtonCheck();
  });

  it("06.03. Verify the user can view all relevant details of a office, including its associated fields.", function () {
    grid_office.viewOffice();
  });

  it("06.04. Verify that clicking the go back button on the office view page redirects the user to the office list page.", function () {
    grid_office.viewGoBackButton();
  });

  it("06.05. Verify the user can filter inactive offices using the status dropdown on the office list page.", function () {
    grid_office.statusInactiveDropdownCheck();
  });

  it("06.06. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_office.statusActiveDropdownCheck();
  });

  it("06.07. Verify the search returns correct results when searching by office name.", function () {
    grid_office.searchInOfficeManagementName();
  });

  it("06.08. Verify the grid list resets successfully when the reset button is clicked on the office page.", function () {
    grid_office.gridResetButtonCheck();
  });

  it("06.09. Verify that the grid list is refreshed successfully when the refresh button is clicked on the office page.", function () {
    grid_office.gridRefreshButtonCheck();
  });

  it("06.10. Verify that the checkbox functions correctly.", function () {
    grid_office.gridCheckboxCheck();
  });

  it("06.11. Verify display the grid list successfully when the Draft button on is clicked on the office page", function () {
    grid_office.gridDraftButton();
  });

  it("06.12. Verify display the grid list successfully when the Draft button off is clicked on the office page", function () {
    grid_office.gridDraftButtonOff();
  });

  it("06.13. Verify that when the user clicks the Search button on the office grid page, the system redirects to the office List page..", function () {
    grid_office.gridSearchButtonCheck();
  });

  it("06.14. Verify that the Office List breadcrumb is displayed correctly.", function () {
    grid_office.listBreadcrumbCheck();
  });

  it("06.15. Verify that all required Office grid columns are visible.", function () {
    grid_office.requiredGridColumnsCheck();
  });

  it("06.16. Verify that Office rows contain a valid number, ID, name, type and status.", function () {
    grid_office.gridRecordDataCheck();
  });

  it("06.18. Verify that searching by a partial office name returns matching offices.", function () {
    grid_office.partialNameSearchCheck();
  });

  it("06.19. Verify that a non-existing office search displays no records.", function () {
    grid_office.noResultSearchCheck();
  });

  it("06.20. Verify that Reset clears the search and restores the Office grid.", function () {
    grid_office.resetRestoresGridCheck();
  });

  it("06.21. Verify that the Active filter displays only active offices.", function () {
    grid_office.activeStatusResultCheck();
  });

  it("06.22. Verify that the Office Name column supports ascending sorting.", function () {
    grid_office.nameAscendingSortCheck();
  });

  it("06.23. Verify that the Office Name column supports descending sorting.", function () {
    grid_office.nameDescendingSortCheck();
  });

  it("06.24. Verify that the Office grid has the correct first-page pagination state.", function () {
    grid_office.firstPagePaginationCheck();
  });

  it("06.25. Verify that Office details match the selected row and Go Back returns to the list.", function () {
    grid_office.viewPageDataCheck();
  });

  it("06.26. Verify that the grid content switches from English to Bangla.", function () {
    grid_office.gridLanguageSwitchCheck();
  });

});
