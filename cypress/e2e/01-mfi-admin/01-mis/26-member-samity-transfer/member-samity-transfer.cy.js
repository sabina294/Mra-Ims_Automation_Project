
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/26-member-samity-transfer/member-samity-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_samity_transfer } from "./member-samity-transfer.po";

describe("26. Member Samity Transfer Module Test Cases", function () {
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

  it("26.01.Verify Member Samity Transfer Grid List Page loads successfully.", function () {
    member_samity_transfer.gridMemberSamityTransferListPage();
  });

  it('26.02. Verify successful processing of a new  samity transfer by MFI-Admin role', function () {
    member_samity_transfer.newSamityTransfer();
  })

  it("26.03. Verify mfi-admin to successfully approve an  new  samity transfer record after transfer.", function () {
    member_samity_transfer.transferApprove();
  });

  it("26.04. Verify successfully performs the action when the action button is clicked.", function () {
    member_samity_transfer.actionButtonCheck();
  });

  it("26.05. Verify successful Member Samity Transfer information View.", function () {
    member_samity_transfer.viewMemberSamityTransfer();
  });

  it("26.06. Verify that clicking the go back button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.viewGoBackButton();
  });

  it("26.07. Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferResetButtonCheck();
  });

  it("26.08. Verify Successful Submit of Grid List Using the Submit Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferSubmitButtonCheck();
  });

  it("26.09. Verify Successful Approve of Grid List Using the Approve Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferApproveButtonCheck();
  });

  it("26.10. Verify system validation when Member Samity Transfer is submitted without selecting a new samity change.", function () {
    member_samity_transfer.newSamityChangeName();
  });

  it("26.11. Verify validation messages appear for required fields when the go back button is clicked with empty inputs.", function () {
    member_samity_transfer.transferGoBackButtonCheck();
  });

  it("26.12. Verify that the user can filter the inactive Member Samity Transfers using the Status Dropdown on the Member Samity Transfer List page.", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("26.13. Verify Filter Active Result by Status Dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("26.14. Verify Successful Search Result by Member Samity Transfer Name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it('26.15.  Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    member_samity_transfer.statusOfficeDropdownCheck();
  });

  it("26.16. Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("26.17. Verify that when the user clicks the Search button on the Member Samity Transfer grid page, the system redirects to the Member Samity Transfer List page..", function () {
    member_samity_transfer.gridSearchButtonCheck();
  });

  it("26.18. Verify Successful Refresh of Grid List Using the Refresh Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("26.19. Verify display the grid list successfully when the Draft button on is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButton();
  });

  it("26.20. Verify display the grid list successfully when the Draft button off is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButtonOff();
  });

  it("26.21. Verify check that the grid list content changes correctly from english to bangla.", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
