// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/23-samity-close/samity-close.cy.js --browser chrome --headed

import "cypress-file-upload";
import { Samity_close } from "./samity-close.po";

describe("23. Samity Close Module Test Cases", function () {
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

  it("23.01. Verify that the Samity Close list page loads successfully", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("23.02. Verify that a Samity Close record can be created with valid information", function () {
    Samity_close.samityClose();
  });

  it("23.03. Verify that the newly created Samity Close record appears in the My Tasks list.", function () {
    Samity_close.myTaskMenuSamityClose();
  });

  it("23.04. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    Samity_close.myTaskResetButtonCheck();
  });

  it("23.05. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    Samity_close.myTaskRefreshButtonCheck();
  });

  it("23.06. Verify that a Samity Close record can be successfully approved after creation", function () {
    Samity_close.approveSamityClose();
  });

  it("23.07. Verify that the action button performs the expected operation when clicked", function () {
    Samity_close.actionButtonCheck();
  });

  it("23.08. Verify that the user can view Samity Close details including name and description", function () {
    Samity_close.viewSamityClose();
  });

  it("23.09. Verify that clicking the Go Back button redirects the user to the Samity Close list page", function () {
    Samity_close.viewGoBackButton();
  });

  it("23.10. Verify that inactive Samity Close records can be filtered using the Status dropdown", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("23.11. Verify that active Samity Close records can be filtered using the Status dropdown", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("23.12. Verify that correct results are displayed when searching by Samity Close name", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("23.13. Verify that the grid list resets successfully when the Reset button is clicked", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("23.14. Verify that the grid list refreshes successfully when the Refresh button is clicked", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("23.15. Verify that clicking the Search button redirects the user to the Samity Close list page", function () {
    Samity_close.gridSearchButtonCheck();
  });

  it("23.16. Verify that the grid displays draft records when the Draft filter is enabled", function () {
    Samity_close.gridDraftButton();
  });

  it("23.17. Verify that the grid hides draft records when the Draft filter is disabled", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("23.18. Verify that the Samity Close breadcrumb displays the correct navigation hierarchy.", function () {
    Samity_close.listBreadcrumbCheck();
  });

  it("23.19. Verify that the Samity Close grid displays all required columns.", function () {
    Samity_close.requiredGridColumnsCheck();
  });

  it("23.20. Verify that samity records contain a serial, samity ID, name and status, or show No Data.", function () {
    Samity_close.gridRecordDataCheck();
  });

  it("23.21. Verify that the office, Draft and search controls are available.", function () {
    Samity_close.searchControlsCheck();
  });

  it("23.22. Verify that searching by an existing samity name returns matching records.", function () {
    Samity_close.samityNameSearchCheck();
  });

  it("23.23. Verify that searching by a partial samity name returns matching records.", function () {
    Samity_close.samityPartialNameSearchCheck();
  });

  it("23.24. Verify that a nonexistent search displays No Data.", function () {
    Samity_close.noResultSearchCheck();
  });

  it("23.25. Verify that Reset clears an unmatched search and restores the list.", function () {
    Samity_close.resetRestoresGridCheck();
  });

  it("23.26. Verify that Refresh keeps the Samity Close list available.", function () {
    Samity_close.refreshListStateCheck();
  });

  it("23.27. Verify that Samity Name displays the ascending sort indicator.", function () {
    Samity_close.nameAscendingSortCheck();
  });

  it("23.28. Verify that Samity Name displays the descending sort indicator.", function () {
    Samity_close.nameDescendingSortCheck();
  });

  it("23.29. Verify that the first-page pagination controls or empty state display correctly.", function () {
    Samity_close.paginationOrEmptyStateCheck();
  });

  it("23.30. Verify that the Active status filter returns only Active samity records.", function () {
    Samity_close.activeStatusResultCheck();
  });

  it("23.31. Verify that the grid content updates correctly when switching language from English to Bangla", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
