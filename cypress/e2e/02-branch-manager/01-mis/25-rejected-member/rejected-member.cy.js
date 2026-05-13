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

  it("25.14. Verify that the grid content successfully switches between English and Bangla languages", function () {
    create_rejected_member.gridLanguageSwitchCheck();
  });
});
