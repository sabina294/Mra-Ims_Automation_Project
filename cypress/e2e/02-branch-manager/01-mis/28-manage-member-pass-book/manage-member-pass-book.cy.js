// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/28-manage-member-pass-book/manage-member-pass-book.cy.js --browser chrome --headed

import "cypress-file-upload";
import { manage_member_passbook } from "./manage-member-pass-book.po";

describe("28. Member Passbook Module Test Cases", function () {
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
  it("28.01. Verify Manage  Member Pass Book List Page loads successfully.", function () {
    manage_member_passbook.gridMemberPassbookListPage();
  });

  it("28.02.Verify successful Manage Member Pass Book Passbook Detail Page by Branch Manager role", function () {
    manage_member_passbook.detailsListMemberPassbook();
  });

  it("28.03. Verify that the Member Pass Book breadcrumb displays the correct navigation hierarchy.", function () {
    manage_member_passbook.breadcrumbCheck();
  });

  it("28.04. Verify that all passbook form fields are visible.", function () {
    manage_member_passbook.formFieldsCheck();
  });

  it("28.05. Verify that Office, Samity, Member and Account display required indicators.", function () {
    manage_member_passbook.requiredIndicatorsCheck();
  });

  it("28.06. Verify that From Date and To Date are optional and initially empty.", function () {
    manage_member_passbook.optionalDateFieldsCheck();
  });

  it("28.07. Verify that the assigned office is selected and disabled.", function () {
    manage_member_passbook.assignedOfficeCheck();
  });

  it("28.08. Verify that Member and Account remain disabled before selecting a Samity.", function () {
    manage_member_passbook.initialDropdownStateCheck();
  });

  it("28.09. Verify that selecting a Samity enables Member while Account remains disabled.", function () {
    manage_member_passbook.samityEnablesMemberCheck();
  });

  it("28.10. Verify that selecting a Member enables Account and allows account selection.", function () {
    manage_member_passbook.memberEnablesAccountCheck();
  });

  it("28.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    manage_member_passbook.gridLanguageSwitchCheck();
  });
});
