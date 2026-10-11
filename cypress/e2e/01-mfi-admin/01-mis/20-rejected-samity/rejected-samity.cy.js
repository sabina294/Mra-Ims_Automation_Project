// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/20-rejected-samity/rejected-samity.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_samity } from "./rejected-samity.po";

describe("20. Rejected Samity Module Test Cases", function () {
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

  it("20.01. Verify a new rejected samity record is created successfully when all required fields are filled with valid data.", function () {
    create_rejected_samity.createRejectSamity();
  });

  it("20.02. Verify successfully approve an rejected samity record after creation.", function () {
    create_rejected_samity.approveRejectedSamity();
  });

  it("20.03. Verify the rejected samity list page loads correctly.", function () {
    create_rejected_samity.gridRejectedSamityListPage();
  });

  it("20.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_rejected_samity.actionButtonCheck();
  });

  it("20.05. Verify the user can successfully view the rejected samity information, including the name and description.", function () {
    create_rejected_samity.viewRejectedSamity();
  });

  it("20.06. Verify that clicking the go back button on the rejected samity view page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.viewGoBackButton();
  });

  it("20.07. Verify the rejected samity edit reset button functions correctly.", function () {
    create_rejected_samity.editResetButton();
  });

  it("20.08. Verify the rejected samity edit draft button functions correctly.", function () {
    create_rejected_samity.editDraftButton();
  });

  it("20.09. Verify the rejected samity edit submit button functions correctly.", function () {
    create_rejected_samity.editSubmitButton();
  });

  it("20.10. Verify that clicking the go back button on the rejected samity edit page redirects the user to the rejected samity list page.", function () {
    create_rejected_samity.editGoBackButton();
  });

  it("20.11. Verify that the search results are displayed correctly when searching by rejected samity name.", function () {
    create_rejected_samity.searchInRejectSamityName();
  });

  it("20.12. Verify the grid list resets successfully when the reset button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridResetButtonCheck();
  });

  it("20.13. Verify that when the user clicks the Search button on the rejected samity grid page, the system redirects to the rejected samity List page..", function () {
    create_rejected_samity.gridSearchButtonCheck();
  });

  it("20.14. Verify that the grid list is refreshed successfully when the refresh button is clicked on the rejected samity page.", function () {
    create_rejected_samity.gridRefreshButtonCheck();
  });

  it("20.15. Verify check that the rejected samity  office selection works correctly from the dropdown on the rejected samity list page.", function () {
    create_rejected_samity.selectofficeDropdown();
  });

  it("20.16. Verify that the Rejected Samity grid displays all required columns correctly.", function () {
    create_rejected_samity.gridColumnsCheck();
  });

  it("20.17. Verify that the Rejected Samity grid displays valid record information in each required column.", function () {
    create_rejected_samity.gridRecordDataCheck();
  });

  it("20.18. Verify that an exact Samity Name search displays the matching rejected Samity record.", function () {
    create_rejected_samity.exactSamityNameSearchCheck();
  });

  it("20.19. Verify that clearing the Samity Name search restores the rejected Samity grid.", function () {
    create_rejected_samity.clearSearchCheck();
  });

  it("20.20. Verify that the Samity Name column can be sorted in ascending order.", function () {
    create_rejected_samity.samityNameAscendingSortCheck();
  });

  it("20.21. Verify that the Samity Name column can be sorted in descending order.", function () {
    create_rejected_samity.samityNameDescendingSortCheck();
  });

  it("20.22. Verify that the Rejected Samity pagination and total-record information are displayed correctly.", function () {
    create_rejected_samity.paginationAndTotalCheck();
  });

  it("20.23. Verify that the Previous pagination button is disabled on the first page.", function () {
    create_rejected_samity.previousPageDisabledCheck();
  });

  it("20.24. Verify that the Next pagination button is disabled when the grid has only one page.", function () {
    create_rejected_samity.nextPageBoundaryCheck();
  });

  it("20.25. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_rejected_samity.gridLanguageSwitchCheck();
  });
});
