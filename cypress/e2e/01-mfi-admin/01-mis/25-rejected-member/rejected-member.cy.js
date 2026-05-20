// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/25-rejected-member/rejected-member.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_rejected_member } from "./rejected-member.po";

describe("25. Rejected Member Module Test Cases", function () {
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

  it("25.01. Verify that a new rejected member record is created successfully when all required fields are filled with valid data.", function () {
    create_rejected_member.createRejectedMember();
  });

  it("25.02. Verify that the MFI Admin can successfully approve a rejected member record after creation.", function () {
    create_rejected_member.myTaskRejectedMember();
  });

  it("25.03. Verify that the appropriate action is performed successfully when the action button is clicked.", function () {
    create_rejected_member.actionButtonCheck();
  });

  it("25.04. Verify that the search results are displayed correctly when searching by rejected member name.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.05. Verify that the user can successfully view rejected member information, including the member name and description.", function () {
    create_rejected_member.viewRrejectedMember();
  });

  it("25.06. Verify that clicking the Go Back button on the rejected member view page redirects the user to the rejected member list page.", function () {
    create_rejected_member.viewGoBackButton();
  });

  it("25.07. Verify that the user can filter rejected member records using the status dropdown on the rejected member list page.", function () {
    create_rejected_member.statusOfficeDropdownCheck();
  });

  it("25.08. Verify that the rejected member edit reset button functions correctly.", function () {
    create_rejected_member.editResetButton();
  });

  it("25.09. Verify that clicking the Go Back button on the rejected member edit page redirects the user to the rejected member list page.", function () {
    create_rejected_member.editGoBackButton();
  });

  it("25.10. Verify the editing functionality of a rejected member record by the MFI Admin role.", function () {
    create_rejected_member.editRrejectedMember();
  });

  it("25.11. Verify that the search results are displayed correctly when searching by rejected member name after editing.", function () {
    create_rejected_member.searchInRejectMemberName();
  });

  it("25.12. Verify that the grid list resets successfully when the Reset button is clicked on the rejected member page.", function () {
    create_rejected_member.gridResetButtonCheck();
  });

  it("25.13. Verify that clicking the Search button on the rejected member grid page redirects the user to the rejected member list page.", function () {
    create_rejected_member.gridSearchButtonCheck();
  });

  it("25.14. Verify that the rejected member grid page refresh button functions correctly.", function () {
    create_rejected_member.gridRefreshButtonCheck();
  });

  it("25.15. Verify that the office selection works correctly from the office dropdown on the rejected member list page.", function () {
    create_rejected_member.selectofficeDropdown();
  });

  it("25.16. Verify that the grid list content changes correctly from English to Bangla.", function () {
    create_rejected_member.gridLanguageSwitchCheck();
  });
});
