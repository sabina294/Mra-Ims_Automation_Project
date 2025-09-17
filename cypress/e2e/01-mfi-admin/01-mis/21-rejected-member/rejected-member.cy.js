// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/21-rejected-member/rejected-member.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_member } from "./rejected-member.po";

describe("21. Rejected Member Module Test Cases", function () {
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

  it("21.01.  Verify a new rejected member record is created successfully when all required fields are filled with valid data", function () {
    create_rejected_member.createRejectedMember();
  });

  it("21.02. Verify mfi-admin to successfully approve an rejected member record after creation. ", function () {
    create_rejected_member.myTaskRejectedMember();
  });

  it("21.03. Verify successfully performs the action when the action button is clicked.", function () {
    create_rejected_member.actionButtonCheck();
  });

  it("21.04. Verify that the search results are displayed correctly when searching by rejected member name.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("21.05. Verify the user can successfully view the rejected member information, including the name and description.", function () {
    create_rejected_member.viewRrejectedMember();
  });

  it("21.06. Verify the user can filter rejected member records using the status dropdown on the rejected member List page.", function () {
    create_rejected_member.statusOfficeDropdownCheck();
  });

  it("21.07. Verify the rejected member edit reset button functions correctly.", function () {
    create_rejected_member.editResetButton();
  });

  it("21.08. Verify that clicking the go back button on the rejected member edit page redirects the user to the rejected member list page.", function () {
    create_rejected_member.editGoBackButton();
  });

  it("21.09. Verify editing functionality for rejected member record by MFI-Admin role", function () {
    create_rejected_member.editRrejectedMember();
  });

  it("21.10. Verify that the search results are displayed correctly when searching by rejected member name.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("21.11. Verify the grid list resets successfully when the reset button is clicked on the rejected member page", function () {
    create_rejected_member.gridResetButtonCheck();
  });

  it("21.12. Verify a new rejected member record is created successfully when all required fields are filled with valid data", function () {
    create_rejected_member.gridRefreshButtonCheck();
  });

  it("21.13. Verify check that the rejected member  office selection works correctly from the dropdown on the samity list page.", function () {
    create_rejected_member.selectofficeDropdown();
  });

  it("21.14. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_rejected_member.gridLanguageSwitchCheck();
  });
});
