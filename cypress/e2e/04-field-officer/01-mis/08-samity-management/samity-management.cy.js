// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/08-samity-management/samity-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_samity_management } from "./samity-management.po";

describe("08. Samity management Module Test Cases", function () {
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

  it("08.01. Verify the samity management list page loads correctly.", function () {
    grid_samity_management.gridSamityManagementListPage();
  });

  it("08.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_samity_management.actionButtonCheck();
  });

  it("08.03. Verify the user can successfully view the samity management information, including the name and description.", function () {
    grid_samity_management.viewSamity();
  });

  it("08.04. Verify that clicking the go back button on the samity management view page redirects the user to the samity management list page.", function () {
    grid_samity_management.viewGoBackButton();
  });

  it("08.05. Verify that the samity management forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_samity_management.turnOnEditMode();
  });

  it("08.06. Verify the samity management edit reset button functions correctly.", function () {
    grid_samity_management.editResetButton();
  });

  it("08.07. Verify the samity management submit button functions correctly.", function () {
    grid_samity_management.editSubmitButton();
  });

  // it("08.08. Verify the samity management approve button functions correctly.", function () {
  //   grid_samity_management.editApproveButton();
  // });

  it("08.09. Verify the samity management draft button functions correctly.", function () {
    grid_samity_management.editDraftButton();
  });

  it("08.10. Verify that clicking the go back button on the samity management edit page redirects the user to the samity management list page.", function () {
    grid_samity_management.editGoBackButton();
  });

  it("08.11. Verify the user can filter inactive employee records using the status dropdown on the samity management List page.", function () {
    grid_samity_management.statusInactiveDropdownCheck();
  });

  it("08.12. Verify check if the filter for active results works correctly with the status dropdown.", function () {
    grid_samity_management.statusActiveDropdownCheck();
  });

  it("08.13. Verify that the search results are displayed correctly when searching by samity management name.", function () {
    grid_samity_management.searchInSamityManagementName();
  });

  it("08.14. Verify the grid list resets successfully when the reset button is clicked on the samity management page.", function () {
    grid_samity_management.gridResetButtonCheck();
  });

  it("08.15. Verify that the grid list is refreshed successfully when the refresh button is clicked on the samity management page.", function () {
    grid_samity_management.gridRefreshButtonCheck();
  });

  it("08.16. Verify that the checkbox functions correctly.", function () {
    grid_samity_management.gridCheckboxCheck();
  });

  it("08.17. Verify that the checkbox lock button operates correctly when selected.", function () {
    grid_samity_management.gridCheckboxLockButtonCheck();
  });

  it("08.18. Verify that the checkbox unlock button operates correctly when selected.", function () {
    grid_samity_management.gridCheckboxUnlockButtonCheck();
  });

  it("08.19. Verify display the grid list successfully when the Draft button on is clicked on the Samity Management page", function () {
    grid_samity_management.gridDraftButton();
  });

  it("08.20. Verify display the grid list successfully when the Draft button off is clicked on the Samity Management page", function () {
    grid_samity_management.gridDraftButtonOff();
  });

  it("08.21. Verify that when the user clicks the Search button on the samity management grid page, the system redirects to the samity management List page..", function () {
    grid_samity_management.gridSearchButtonCheck();
  });

  it("08.22. Verify that the list breadcrumb is correct.", function () {
    grid_samity_management.listBreadcrumbCheck();
  });

  it("08.23. Verify that all required grid columns are visible.", function () {
    grid_samity_management.requiredGridColumnsCheck();
  });

  it("08.24. Verify that grid rows contain valid identifiers, names and status.", function () {
    grid_samity_management.gridRecordDataCheck();
  });

  it("08.25. Verify that a partial name search returns matching records.", function () {
    grid_samity_management.partialNameSearchCheck();
  });

  it("08.26. Verify that a non-existing search displays no records.", function () {
    grid_samity_management.noResultSearchCheck();
  });

  it("08.27. Verify that Reset clears the search and restores the grid.", function () {
    grid_samity_management.resetRestoresGridCheck();
  });

  it("08.28. Verify that the Active filter returns only active records.", function () {
    grid_samity_management.activeStatusResultCheck();
  });

  it("08.29. Verify that the name column supports ascending sorting.", function () {
    grid_samity_management.nameAscendingSortCheck();
  });

  it("08.30. Verify that the name column supports descending sorting.", function () {
    grid_samity_management.nameDescendingSortCheck();
  });

  it("08.31. Verify that first-page pagination is correct.", function () {
    grid_samity_management.firstPagePaginationCheck();
  });

  it("08.32. Verify that View data matches the selected row and Go Back returns to the list.", function () {
    grid_samity_management.viewPageDataCheck();
  });

  it("08.33. Verify that the grid language switches from English to Bangla.", function () {
    grid_samity_management.gridLanguageSwitchCheck();
  });

});
