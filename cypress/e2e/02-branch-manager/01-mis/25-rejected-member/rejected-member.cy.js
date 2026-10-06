// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/25-rejected-member/rejected-member.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_member } from "./rejected-member.po";

describe("25. Rejected Member Module Test Cases", function () {
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
  it("25.01. Verify that a new rejected member record is created successfully when all required fields are provided with valid data", function () {
    create_rejected_member.createRejectedMember();
  });

  it("25.02. Verify that MFI Admin can successfully approve a rejected member record after creation", function () {
    create_rejected_member.myTaskRejectedMember();
  });

  it("25.03. Verify that the action button performs the expected operation when clicked", function () {
    create_rejected_member.actionButtonCheck();
  });

  it("25.04. Verify that search results are displayed correctly when searching by rejected member name", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.05. Verify that the user can view rejected member details including name and description", function () {
    create_rejected_member.viewRrejectedMember();
  });

  it("25.06. Verify that clicking the Go Back button on the rejected member view page redirects to the list page", function () {
    create_rejected_member.viewGoBackButton();
  });

  it("25.07. Verify that the reset button works correctly on the rejected member edit page", function () {
    create_rejected_member.editResetButton();
  });

  it("25.08. Verify that clicking the Go Back button on the rejected member edit page redirects to the list page", function () {
    create_rejected_member.editGoBackButton();
  });

  it("25.09. Verify that MFI Admin can successfully edit a rejected member record", function () {
    create_rejected_member.editRrejectedMember();
  });

  it("25.10. Verify that search results are displayed correctly when searching by rejected member name", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.11. Verify that the grid resets successfully when the reset button is clicked on the rejected member page", function () {
    create_rejected_member.gridResetButtonCheck();
  });

  it("25.12. Verify that the grid refresh button reloads the rejected member list successfully", function () {
    create_rejected_member.gridRefreshButtonCheck();
  });

  it("25.13. Verify that clicking the Search button on the rejected member grid page navigates to the rejected member list page", function () {
    create_rejected_member.gridSearchButtonCheck();
  });

  it("25.14. Verify that the Rejected Member breadcrumb displays the correct navigation hierarchy.", function () {
    create_rejected_member.listBreadcrumbCheck();
  });

  it("25.15. Verify that the rejected member grid displays all required columns.", function () {
    create_rejected_member.requiredGridColumnsCheck();
  });

  it("25.16. Verify that records contain a serial, member name, office and Rejected status, or show No Data.", function () {
    create_rejected_member.gridRecordDataCheck();
  });

  it("25.17. Verify that the office and search controls are available.", function () {
    create_rejected_member.searchControlsCheck();
  });

  it("25.18. Verify that a nonexistent search displays No Data.", function () {
    create_rejected_member.noResultSearchCheck();
  });

  it("25.19. Verify that Reset clears an unmatched search and restores the list.", function () {
    create_rejected_member.resetRestoresGridCheck();
  });

  it("25.20. Verify that Refresh keeps the Rejected Member list available.", function () {
    create_rejected_member.refreshListStateCheck();
  });

  it("25.21. Verify that Name displays the ascending sort indicator.", function () {
    create_rejected_member.nameAscendingSortCheck();
  });

  it("25.22. Verify that Name displays the descending sort indicator.", function () {
    create_rejected_member.nameDescendingSortCheck();
  });

  it("25.23. Verify that first-page pagination or the empty state displays correctly.", function () {
    create_rejected_member.paginationOrEmptyStateCheck();
  });

  it("25.24. Verify that the grid content successfully switches between English and Bangla languages", function () {
    create_rejected_member.gridLanguageSwitchCheck();
  });
});
