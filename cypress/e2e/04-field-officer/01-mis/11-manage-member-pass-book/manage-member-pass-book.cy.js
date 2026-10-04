// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/04-field-officer/01-mis/11-manage-member-pass-book/manage-member-pass-book.cy.js --browser chrome --headed

import "cypress-file-upload";
import { manage_member_passbook } from "./manage-member-pass-book.po";

describe("11. Member Passbook Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.fieldOfficerUserId,
        d.credential.fieldOfficerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });
  it("11.01. Verify Manage Member Pass Book List Page loads successfully.", function () {
    manage_member_passbook.gridMemberPassbookListPage();
  });

  it("11.02. Verify Manage Member Pass Book details for the Field Officer role", function () {
    manage_member_passbook.detailsListMemberPassbook();
  });

  it("11.03. Verify Member Passbook: the correct breadcrumb is displayed.", function () {
    manage_member_passbook.breadcrumbCheck();
  });

  it("11.04. Verify Member Passbook: all passbook fields are visible.", function () {
    manage_member_passbook.formFieldsCheck();
  });

  it("11.05. Verify Member Passbook: Office, Samity, Member and Account show required indicators.", function () {
    manage_member_passbook.requiredIndicatorsCheck();
  });

  it("11.06. Verify Member Passbook: date fields are optional and initially empty.", function () {
    manage_member_passbook.optionalDateFieldsCheck();
  });

  it("11.07. Verify Member Passbook: the assigned office is populated and disabled.", function () {
    manage_member_passbook.assignedOfficeCheck();
  });

  it("11.08. Verify Member Passbook: Member and Account remain disabled before Samity selection.", function () {
    manage_member_passbook.initialDropdownStateCheck();
  });

  it("11.09. Verify Member Passbook: selecting Samity enables Member while Account remains disabled.", function () {
    manage_member_passbook.samityEnablesMemberCheck();
  });

  it("11.10. Verify Member Passbook: selecting Member enables Account selection.", function () {
    manage_member_passbook.memberEnablesAccountCheck();
  });

  it("11.11. Verify check that the grid list content changes correctly from english to bangla.", function () {
    manage_member_passbook.gridLanguageSwitchCheck();
  });
});
