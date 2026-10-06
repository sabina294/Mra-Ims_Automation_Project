// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/22-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("22. Samity Day Change Module Test Cases", function () {
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
  it("22.01. Verify Samity Day Change list page loads successfully", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("22.02. Verify Reset button clears filters and form data successfully", function () {
    samity_day_change.dayChangeResetButtonCheck();
  });

  it("22.03. Verify Submit button works correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeSubmitButtonCheck();
  });

  it("22.04. Verify Approve button works correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeApproveButtonCheck();
  });

  it("22.05. Verify Go Back button navigates correctly on Samity Day Change page", function () {
    samity_day_change.dayChangeGoBackButtonCheck();
  });

  it("22.06. Verify Create a new Samity Day Change with valid information", function () {
    samity_day_change.samityDayChange();
  });

  it("22.07. Verify that the newly created Samity Day Change record appears in the My Tasks list.", function () {
    samity_day_change.myTaskMenuSamityDayChange();
  });

  it("22.08. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    samity_day_change.myTaskResetButtonCheck();
  });

  it("22.09. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    samity_day_change.myTaskRefreshButtonCheck();
  });

  // it("22.10. Verify Approve Samity Day Change successfully after creation", function () {
  //   samity_day_change.approveSamityDayChange();
  // });

  it("22.11. Verify Action button performs expected operation successfully", function () {
    samity_day_change.actionButtonCheck();
  });

  it("22.12. Verify View Samity Day Change details including name and description", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("22.13. Verify Go Back button redirects to Samity Day Change list page from view page", function () {
    samity_day_change.viewGoBackButton();
  });

  it("22.14. Verify Filter inactive records using Status dropdown on list page", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("22.15. Verify Filter active records using Status dropdown on list page", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("22.16. Verify Search results are displayed correctly by Samity Day Change name", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("22.17. Verify Reset grid list successfully using Reset button", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("22.18. Verify Refresh grid list successfully using Refresh button", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("22.19. Verify Search button redirects to Samity Day Change list page successfully", function () {
    samity_day_change.gridSearchButtonCheck();
  });

  it("22.20. Verify Display Draft records when Draft filter is enabled", function () {
    samity_day_change.gridDraftButton();
  });

  it("22.21. Verify Hide Draft records when Draft filter is disabled", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("22.22. Verify that the Samity Day Change breadcrumb displays the correct navigation hierarchy.", function () {
    samity_day_change.listBreadcrumbCheck();
  });

  it("22.23. Verify that the Samity Day Change grid displays all required columns.", function () {
    samity_day_change.requiredGridColumnsCheck();
  });

  it("22.24. Verify that samity records contain a serial, samity ID, name and status, or show No Data.", function () {
    samity_day_change.gridRecordDataCheck();
  });

  it("22.25. Verify that the office, Draft and search controls are available.", function () {
    samity_day_change.searchControlsCheck();
  });

  it("22.26. Verify that searching by an existing samity name returns matching records.", function () {
    samity_day_change.samityNameSearchCheck();
  });

  it("22.27. Verify that searching by a partial samity name returns matching records.", function () {
    samity_day_change.samityPartialNameSearchCheck();
  });

  it("22.28. Verify that a nonexistent search displays No Data.", function () {
    samity_day_change.noResultSearchCheck();
  });

  it("22.29. Verify that Reset clears an unmatched search and restores the list.", function () {
    samity_day_change.resetRestoresGridCheck();
  });

  it("22.30. Verify that Refresh keeps the Samity Day Change list available.", function () {
    samity_day_change.refreshListStateCheck();
  });

  it("22.31. Verify that Samity Name displays the ascending sort indicator.", function () {
    samity_day_change.nameAscendingSortCheck();
  });

  it("22.32. Verify that Samity Name displays the descending sort indicator.", function () {
    samity_day_change.nameDescendingSortCheck();
  });

  it("22.33. Verify that the first-page pagination controls or empty state display correctly.", function () {
    samity_day_change.paginationOrEmptyStateCheck();
  });

  it("22.34. Verify that the Active status filter returns only Active samity records.", function () {
    samity_day_change.activeStatusResultCheck();
  });

  it("22.35. Verify Grid updates correctly when switching language from English to Bangla", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
