// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/20-member-management/member-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_member_management } from "./member-management.po";

describe("20. Member Management Module Test Cases", function () {
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

  it("20.01. Verify the member management list page loads correctly.", function () {
    create_member_management.gridMemberManagementListPage();
  });

  it("20.02. Verify a new member management record is created successfully when all required fields are filled with valid data.", function () {
    create_member_management.createMemberManagement();
  });

  it("20.03. Verify mfi-admin to successfully approve an member management record after creation.", function () {
    create_member_management.approveMemberManagement();
  });

  it("20.04. Verify successfully performs the action when the action button is clicked.", function () {
    create_member_management.actionButtonCheck();
  });

  it("20.05. Verify the user can successfully view the member management information, including the name and description.", function () {
    create_member_management.viewMemberManagement();
  });

  //   it("20.06. Verify editing functionality for Member Management record by MFI-Admin role", function () {
  //     create_member_management.editMemberManagement();
  //   });

  it("20.07. Verify the member management edit reset button functions correctly.", function () {
    create_member_management.editResetButton();
  });

  it("20.08. Verify that clicking the go back button on the member management edit page redirects the user to the member management list page.", function () {
    create_member_management.editGoBackButton();
  });

  it("20.09. Verify the user can filter inactive employee records using the status dropdown on the member management List page.", function () {
    create_member_management.statusInactiveDropdownCheck();
  });

  it("20.10. Verify check if the filter for active results works correctly with the status dropdown ", function () {
    create_member_management.statusActiveDropdownCheck();
  });

  it("20.11. Verify that the search results are displayed correctly when searching by member management name.", function () {
    create_member_management.searchInMemberManagementName();
  });

  it("20.12. Verify the grid list resets successfully when the reset button is clicked on the member management page", function () {
    create_member_management.gridResetButtonCheck();
  });

  it("20.13. Verify a new member management record is created successfully when all required fields are filled with valid data", function () {
    create_member_management.gridRefreshButtonCheck();
  });

  it("20.14. Verify display the grid list successfully when the Draft button on is clicked on the member management page", function () {
    create_member_management.gridDraftButton();
  });

  it("20.15. Verify display the grid list successfully when the Draft button off is clicked on the member management page", function () {
    create_member_management.gridDraftButtonOff();
  });

  it("20.16. Verify check that the member management  office selection works correctly from the dropdown on the samity list page.", function () {
    create_member_management.selectofficeDropdown();
  });

  it("20.17. Verify validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
    create_member_management.createApproveButtonCheck();
  });

  it("20.18. Verify validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
    create_member_management.createSubmitButtonCheck();
  });

  it("20.19. Verify validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
    create_member_management.createDraftButtonCheck();
  });

  // it("20.20. Verify validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
  //   create_member_management.createResetButtonCheck();
  // });

  it("20.21. Verify validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
    create_member_management.createGoBackButtonCheck();
  });

  it("20.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_member_management.gridLanguageSwitchCheck();
  });
});
