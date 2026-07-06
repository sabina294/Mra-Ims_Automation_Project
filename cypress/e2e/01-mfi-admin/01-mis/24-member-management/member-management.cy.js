// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/24-member-management/member-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_member_management } from "./member-management.po";

describe("24. Member Management Module Test Cases", function () {
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

  it("24.01. Verify that the Member Management list page loads successfully.", function () {
    create_member_management.gridMemberManagementListPage();
  });

  it("24.02. Verify that a new Member Management record is created successfully with valid required data.", function () {
    create_member_management.createMemberManagement();
  });

  it("24.03. Verify that the MFI Admin can successfully approve a Member Management record after creation.", function () {
    create_member_management.approveMemberManagement();
  });

  it("24.04. Verify that the action button performs the expected action successfully.", function () {
    create_member_management.actionButtonCheck();
  });

  it("24.05. Verify that the user can successfully view Member Management information, including name and description.", function () {
    create_member_management.viewMemberManagement();
  });

  it("24.06. Verify that clicking the Go Back button on the Member Management view page redirects the user to the Member Management list page.", function () {
    create_member_management.viewGoBackButton();
  });

  it("24.07. Verify that the reset button functions correctly on the Member Management edit page.", function () {
    create_member_management.editResetButton();
  });

  it("24.08. Verify that the Draft button functions correctly on the Member Management edit page.", function () {
    create_member_management.editDraftButton();
  });

  it("24.09. Verify that the Submit button functions correctly on the Member Management edit page.", function () {
    create_member_management.editSubmitButton();
  });

  it("24.10. Verify that the Approve button functions correctly on the Member Management edit page.", function () {
    create_member_management.editApproveButton();
  });

  it("24.11. Verify that clicking the Go Back button on the Member Management edit page redirects the user to the Member Management list page.", function () {
    create_member_management.editGoBackButton();
  });

  it("24.12. Verify the editing functionality of a Member Management record by the MFI Admin role.", function () {
    create_member_management.editMemberManagement();
  });

  it("24.13. Verify that inactive records can be filtered successfully using the status dropdown on the Member Management list page.", function () {
    create_member_management.statusInactiveDropdownCheck();
  });

  it("24.14. Verify that active records can be filtered successfully using the status dropdown on the Member Management list page.", function () {
    create_member_management.statusActiveDropdownCheck();
  });

  it("24.15. Verify that the correct search results are displayed when searching by Member Management name.", function () {
    create_member_management.searchInMemberManagementName();
  });

  it("24.16. Verify that the grid list resets successfully when the Reset button is clicked on the Member Management page.", function () {
    create_member_management.gridResetButtonCheck();
  });

  it("24.17. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Member Management page.", function () {
    create_member_management.gridRefreshButtonCheck();
  });

  it("24.18. Verify that the checkbox functions correctly on the Member Management grid page.", function () {
    create_member_management.gridCheckboxCheck();
  });

  it("24.19. Verify that the Lock button functions correctly when records are selected using the checkbox.", function () {
    create_member_management.gridCheckboxLockButtonCheck();
  });

  it("24.20. Verify that the Unlock button functions correctly when records are selected using the checkbox.", function () {
    create_member_management.gridCheckboxUnlockButtonCheck();
  });

  it("24.21. Verify that the grid list is displayed successfully when the Draft button is enabled on the Member Management page.", function () {
    create_member_management.gridDraftButton();
  });

  it("24.22. Verify that the grid list is displayed successfully when the Draft button is disabled on the Member Management page.", function () {
    create_member_management.gridDraftButtonOff();
  });

  it("24.23. Verify that the office selection works correctly from the office dropdown on the Member Management list page.", function () {
    create_member_management.selectofficeDropdown();
  });

  it("24.24. Verify that validation messages appear for required fields when the Approve button is clicked with empty inputs.", function () {
    create_member_management.createApproveButtonCheck();
  });

  it("24.25. Verify that validation messages appear for required fields when the Submit button is clicked with empty inputs.", function () {
    create_member_management.createSubmitButtonCheck();
  });

  it("24.26. Verify that validation messages appear for required fields when the Draft button is clicked with empty inputs.", function () {
    create_member_management.createDraftButtonCheck();
  });

  it("24.27. Verify that the Reset button functions correctly when clicked with empty inputs.", function () {
    create_member_management.createResetButtonCheck();
  });

  it("24.28. Verify that clicking the Go Back button redirects the user successfully from the create page.", function () {
    create_member_management.createGoBackButtonCheck();
  });

  it("24.29. Verify that clicking the Search button on the Member Management grid page displays the correct search results.", function () {
    create_member_management.gridSearchButtonCheck();
  });

  it("24.30. Verify that the grid list content changes successfully from English to Bangla.", function () {
    create_member_management.gridLanguageSwitchCheck();
  });
});
