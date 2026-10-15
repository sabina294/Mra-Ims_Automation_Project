// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/28-manage-member-pass-book/manage-member-pass-book.cy.js --browser chrome --headed

import "cypress-file-upload";
import { manage_member_passbook } from "./manage-member-pass-book.po";

describe("28. Member Passbook Module Test Cases", function () {
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
  it("28.01. Verify Manage Member Passbook List Page loads successfully.", function () {
    manage_member_passbook.gridMemberPassbookListPage();
  });

  it("28.02. Verify check that the grid list content changes correctly from english to bangla.", function () {
    manage_member_passbook.gridLanguageSwitchCheck();
  });

  it("28.03. Verify that the breadcrumb displays Home, Member and Manage Member Pass Book.", function () {
    manage_member_passbook.breadcrumbCheck();
  });

  it("28.04. Verify that all passbook form fields and labels are visible.", function () {
    manage_member_passbook.formFieldsCheck();
  });

  it("28.05. Verify that Office, Samity, Member and Account show required indicators.", function () {
    manage_member_passbook.requiredIndicatorsCheck();
  });

  it("28.06. Verify that From Date and To Date are optional and initially empty.", function () {
    manage_member_passbook.optionalDateFieldsCheck();
  });

  it("28.07. Verify that Office is enabled and dependent dropdowns are initially disabled.", function () {
    manage_member_passbook.initialDropdownStateCheck();
  });

  it("28.08. Verify that selecting an Office enables Samity while Member and Account remain disabled.", function () {
    manage_member_passbook.officeEnablesSamityCheck();
  });

});
