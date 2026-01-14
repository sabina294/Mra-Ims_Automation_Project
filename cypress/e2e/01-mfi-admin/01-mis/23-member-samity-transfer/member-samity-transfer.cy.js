
// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/23-member-samity-transfer/member-samity-transfer.cy.js --browser chrome --headed

import "cypress-file-upload";
import { member_samity_transfer } from "./member-samity-transfer.po";

describe("23. Member Samity Transfer Module Test Cases", function () {
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

  it("23.01.Verify Member Samity Transfer Grid List Page loads successfully.", function () {
    member_samity_transfer.gridMemberSamityTransferListPage();
  });

  it('23.02. Verify successful processing of a new  samity transfer by MFI-Admin role', function () {
    member_samity_transfer.newSamityTransfer();
  })

  it("23.03. Verify mfi-admin to successfully approve an  new  samity transfer record after transfer.", function () {
    member_samity_transfer.transferApprove();
  });

  it("23.04. Verify successfully performs the action when the action button is clicked.", function () {
    member_samity_transfer.actionButtonCheck();
  });

  it("23.05. Verify successful Member Samity Transfer information View.", function () {
    member_samity_transfer.viewMemberSamityTransfer();
  });

  it("23.06. Verify that clicking the go back button on the Member Samity Transfer view page redirects the user to the Member Samity Transfer list page.", function () {
    member_samity_transfer.viewGoBackButton();
  });

  it("23.07. Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferResetButtonCheck();
  });

  it("23.08. Verify Successful Submit of Grid List Using the Submit Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferSubmitButtonCheck();
  });

  it("23.09. Verify Successful Approve of Grid List Using the Approve Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.transferApproveButtonCheck();
  });

  it("23.10. Verify validation messages appear for required fields when the go back button is clicked with empty inputs.", function () {
    member_samity_transfer.transferGoBackButtonCheck();
  });

  it("23.11. Verify that the user can filter the inactive Member Samity Transfers using the Status Dropdown on the Member Samity Transfer List page.", function () {
    member_samity_transfer.statusInactiveDropdownCheck();
  });

  it("23.12. Verify Filter Active Result by Status Dropdown", function () {
    member_samity_transfer.statusActiveDropdownCheck();
  });

  it("23.13. Verify Successful Search Result by Member Samity Transfer Name", function () {
    member_samity_transfer.searchInMemberSamityTransferName();
  });

  it('23.14.  Verify the functionality and expected behavior of the "Successful Office Status" dropdown.', function () {
    member_samity_transfer.statusOfficeDropdownCheck();
  });

  it("23.15. Verify Successful Reset of Grid List Using the Reset Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridResetButtonCheck();
  });

  it("23.16. Verify Successful Refresh of Grid List Using the Refresh Button on Member Samity Transfer Page.", function () {
    member_samity_transfer.gridRefreshButtonCheck();
  });

  it("23.17. Verify display the grid list successfully when the Draft button on is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButton();
  });

  it("23.18. Verify display the grid list successfully when the Draft button off is clicked on the Member Samity Transfer page", function () {
    member_samity_transfer.gridDraftButtonOff();
  });

  it("23.19. Verify check that the grid list content changes correctly from english to bangla.", function () {
    member_samity_transfer.gridLanguageSwitchCheck();
  });
});
