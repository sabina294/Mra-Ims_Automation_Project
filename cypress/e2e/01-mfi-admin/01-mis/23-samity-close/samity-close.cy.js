// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/23-samity-close/samity-close.cy.js --browser chrome --headed

import "cypress-file-upload";
import { Samity_close } from "./samity-close.po";

describe("23. Samity Close Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("23.01. Verify that the Samity Close List page loads successfully.", function () {
    Samity_close.gridSamityCloseListPage();
  });

  it("23.02. Verify that an MFI Admin can successfully create a Samity Close with valid information.", function () {
    Samity_close.samityClose();
  });

  it("23.03. Verify that the created Samity Close record appears in My Tasks.", function () {
    Samity_close.myTaskMenuSamityClose();
  });

  it("23.04. Verify that the Office dropdown filter works correctly on the My Tasks page.", function () {
    Samity_close.myTaskSamityOfficeDropdownCheck();
  });

  it("23.05. Verify that the Reset button clears all applied filters on the My Tasks page.", function () {
    Samity_close.myTaskResetButtonCheck();
  });

  it("23.06. Verify that the Refresh button reloads the My Tasks list successfully.", function () {
    Samity_close.myTaskRefreshButtonCheck();
  });

  it("23.07. Verify that the MFI Admin can successfully approve a Samity Close record after creation.", function () {
    Samity_close.approveSamityClose();
  });

  it("23.08. Verify that the action button performs successfully when clicked.", function () {
    Samity_close.actionButtonCheck();
  });

  it("23.09. Verify that the user can successfully view the Samity Close information, including the name and description.", function () {
    Samity_close.viewSamityClose();
  });

  it("23.10. Verify that clicking the Go Back button on the Samity Close View page redirects the user to the Samity Close List page.", function () {
    Samity_close.viewGoBackButton();
  });

  it("23.11. Verify that the user can filter inactive records using the Status dropdown on the Samity Close List page.", function () {
    Samity_close.statusInactiveDropdownCheck();
  });

  it("23.12. Verify that the active status filter works correctly using the Status dropdown.", function () {
    Samity_close.statusActiveDropdownCheck();
  });

  it("23.13. Verify that the search results are displayed correctly when searching by Samity Close name.", function () {
    Samity_close.searchInSamityCloseName();
  });

  it("23.14. Verify that the grid list resets successfully when the Reset button is clicked on the Samity Close page.", function () {
    Samity_close.gridResetButtonCheck();
  });

  it("23.15. Verify that clicking the Search button on the Samity Close Grid page redirects the user to the Samity Close List page.", function () {
    Samity_close.gridSearchButtonCheck();
  });

  it("23.16. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Samity Close page.", function () {
    Samity_close.gridRefreshButtonCheck();
  });

  it("23.17. Verify that the grid list is displayed successfully when the Draft button is enabled on the Samity Close page.", function () {
    Samity_close.gridDraftButton();
  });

  it("23.18. Verify that the grid list is displayed successfully when the Draft button is disabled on the Samity Close page.", function () {
    Samity_close.gridDraftButtonOff();
  });

  it("23.19. Verify that the office selection works correctly from the dropdown on the Samity Close List page.", function () {
    Samity_close.selectofficeDropdown();
  });

  it("23.20. Verify that the Samity Close grid displays all required columns correctly.", function () {
    Samity_close.gridRequiredColumnsCheck();
  });

  it("23.21. Verify that clicking the Action button displays both View and Close options.", function () {
    Samity_close.actionMenuOptionsCheck();
  });

  it("23.22. Verify that grid records can be sorted by Samity ID.", function () {
    Samity_close.samityIdSortCheck();
  });

  it("23.23. Verify that grid records can be sorted by Samity Name.", function () {
    Samity_close.samityNameSortCheck();
  });

  it("23.24. Verify that grid records can be sorted by Samity Type, Field Officer, and Samity Day.", function () {
    Samity_close.otherSortableColumnsCheck();
  });

  it("23.25. Verify that the Next and Previous pagination buttons work correctly.", function () {
    Samity_close.nextPreviousPaginationCheck();
  });

  it("23.26. Verify that selecting a different page size updates the number of grid records.", function () {
    Samity_close.pageSizeChangeCheck();
  });

  it("23.27. Verify that an empty result is displayed when no Samity matches the search criteria.", function () {
    Samity_close.emptySearchResultCheck();
  });

  it("23.28. Verify that Status, Draft, and Search filters work correctly when applied together.", function () {
    Samity_close.combinedFiltersCheck();
  });

  it("23.29. Verify that the grid list content changes successfully from English to Bangla.", function () {
    Samity_close.gridLanguageSwitchCheck();
  });
});
