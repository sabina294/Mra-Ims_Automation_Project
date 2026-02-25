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

  it("25.01. Verify a new rejected member record is created successfully when all required fields are filled with valid data", function () {
    create_rejected_member.createRejectedMember();
  });

  it("25.02. Verify mfi-admin to successfully approve an rejected member record after creation. ", function () {
    create_rejected_member.myTaskRejectedMember();
  });

  it("25.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_rejected_member.actionButtonCheck();
  });

  it("25.04. Verify that the search results are displayed correctly when searching by rejected member name.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.05. Verify the user can successfully view the rejected member information, including the name and description.", function () {
    create_rejected_member.viewRrejectedMember();
  });

  it("25.06. Verify that clicking the go back button on the rejected member view page redirects the user to the rejected member list page.", function () {
    create_rejected_member.viewGoBackButton();
  });

  it("25.07. Verify the rejected member edit reset button functions correctly.", function () {
    create_rejected_member.editResetButton();
  });

  it("25.08. Verify that clicking the go back button on the rejected member edit page redirects the user to the rejected member list page.", function () {
    create_rejected_member.editGoBackButton();
  });

  it("25.09. Verify editing functionality for rejected member record by MFI-Admin role", function () {
    create_rejected_member.editRrejectedMember();
  });

  it("25.10. Verify that the search results are displayed correctly when searching by rejected member name.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.11. Verify the grid list resets successfully when the reset button is clicked on the rejected member page", function () {
    create_rejected_member.gridResetButtonCheck();
  });

  it("25.12. Verify a new rejected member record is created successfully when all required fields are filled with valid data", function () {
    create_rejected_member.gridRefreshButtonCheck();
  });

  it("25.13. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_rejected_member.gridLanguageSwitchCheck();
  });
});
