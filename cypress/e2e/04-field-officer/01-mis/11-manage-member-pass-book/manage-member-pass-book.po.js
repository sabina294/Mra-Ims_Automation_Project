import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberPassbook {
  test_data = Cypress.env("TEST_DATA");

  gridMemberPassbookListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MANAGE_MEMBER_PASS_BOOK);
      cy.log(messages.ui.gridListMessage);
    });
  }

  detailsListMemberPassbook() {
    cy.fixture(this.test_data).then((data) => {
      const mmptData = data.fieldOfficer.memberPassbookFrom;
      cy.formController("samity_id").type(mmptData.samity).type("{enter}");
      cy.formController("member_id").type(mmptData.member).type("{enter}");
      cy.formController("account_no").type(mmptData.account).type("{enter}");
      cy.wait(3000);

      cy.log(messages.ui.viewMessage);
    });
  }

  openPassbookForChecks() {
    cy.visit("/mfi-mis/member/member-passbook");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-passbook");
    cy.formController("samity_id").should("be.visible");
  }

  passbookLabel(text) {
    return cy.get(COMMON.FORM.LABEL).filter((_, label) =>
      label.textContent.replace(/\s+/g, " ").replace(/\*/g, "").trim() === text
    ).first();
  }

  selectPassbookOption(control, value) {
    cy.formController(control).should("not.have.class", "ant-select-disabled").type(value);
    cy.formController(control).type("{enter}");
    cy.formController(control).find("nz-select-item").should("contain.text", value);
  }

  breadcrumbCheck() {
    this.openPassbookForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Member")
      .and("contain.text", "Manage Member Pass Book");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  formFieldsCheck() {
    this.openPassbookForChecks();
    ["Office", "Samity", "Member", "Account", "From Date", "To Date"].forEach((label) => {
      this.passbookLabel(label).should("be.visible");
    });
    ["office_id", "samity_id", "member_id", "account_no"].forEach((control) => {
      cy.formController(control).should("be.visible");
    });
  }

  requiredIndicatorsCheck() {
    this.openPassbookForChecks();
    ["Office", "Samity", "Member", "Account"].forEach((label) => {
      this.passbookLabel(label).should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.log(messages.ui.requiredFieldIndicatorCheck);
  }

  optionalDateFieldsCheck() {
    this.openPassbookForChecks();
    ["From Date", "To Date"].forEach((label) => {
      this.passbookLabel(label).should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    ["Select From Date", "Select To Date"].forEach((placeholder) => {
      cy.get(`input[placeholder="${placeholder}"]`).should("be.visible").and("have.value", "");
    });
    cy.log(messages.ui.optionalFieldIndicatorCheck);
  }

  assignedOfficeCheck() {
    this.openPassbookForChecks();
    cy.formController("office_id").should("have.class", "ant-select-disabled");
    cy.formController("office_id").find("nz-select-item").should(($item) => {
      expect($item.text().trim(), "assigned office").not.to.equal("");
    });
  }

  initialDropdownStateCheck() {
    this.openPassbookForChecks();
    cy.formController("samity_id").should("not.have.class", "ant-select-disabled");
    ["member_id", "account_no"].forEach((control) => {
      cy.formController(control).should("have.class", "ant-select-disabled");
    });
  }

  samityEnablesMemberCheck() {
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      this.selectPassbookOption("samity_id", data.fieldOfficer.memberPassbookFrom.samity);
      cy.formController("member_id").should("not.have.class", "ant-select-disabled");
      cy.formController("member_id").find("input").should("be.enabled");
      cy.formController("account_no").should("have.class", "ant-select-disabled");
    });
    cy.log(messages.ui.dependentDropdown);
  }

  memberEnablesAccountCheck() {
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      const passbook = data.fieldOfficer.memberPassbookFrom;
      this.selectPassbookOption("samity_id", passbook.samity);
      this.selectPassbookOption("member_id", passbook.member);
      cy.formController("account_no").should("not.have.class", "ant-select-disabled");
      cy.formController("account_no").find("input").should("be.enabled");
      this.selectPassbookOption("account_no", passbook.account);
    });
    cy.log(messages.ui.dependentDropdown);
  }

  gridLanguageSwitchCheck() {
      cy.imsId(COMMON.BUTTONS.PROFILE).click();
      cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
      cy.log(messages.ui.languageSwitchMessage);
  }
}

export const manage_member_passbook = new MemberPassbook();
