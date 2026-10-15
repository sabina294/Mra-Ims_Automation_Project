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
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      const mmptData = data.mfiAdmin.memberPassbookFrom;
      this.selectPassbookOption("office_id", mmptData.office);
      this.selectPassbookOption("samity_id", mmptData.samity);
      this.selectPassbookOption("member_id", mmptData.member);
      this.selectPassbookOption("account_no", mmptData.account);

      cy.log(messages.ui.viewMessage);
    });
  }

  openPassbookForChecks() {
    cy.visit("/mfi-mis/member/member-passbook");
    cy.changeLanguage("english");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-passbook");
    cy.formController("samity_id").should("be.visible");
  }

  passbookLabel(text) {
    return cy.get(COMMON.FORM.LABEL).filter((_, label) =>
      label.textContent.replace(/\s+/g, " ").replace(/\*/g, "").trim() === text
    ).first();
  }

  selectPassbookOption(control, value) {
    // Search the actual input and wait for the async options before selecting.
    // Labels include IDs and names; a member's name is the searchable part.
    const memberName = value.match(/\(([^)]+)\)/);
    const search = control === "member_id" && memberName
      ? memberName[1].trim()
      : value.split(" (")[0].trim();
    cy.formController(control).should("be.visible")
      .and("not.have.class", "ant-select-disabled").click();
    cy.formController(control).find("input").should("be.enabled")
      .clear().type(search, { parseSpecialCharSequences: false });
    cy.get(COMMON.SELECT.VISIBLE_DROPDOWN)
      .contains(COMMON.SELECT.OPTION, search)
      .should("be.visible").and("not.have.class", "ant-select-item-option-disabled")
      .click();
    cy.formController(control).find("nz-select-item")
      .should("contain.text", search);
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

  officeEnablesSamityCheck() {
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      this.selectPassbookOption("office_id", data.mfiAdmin.memberPassbookFrom.office);
      cy.formController("samity_id").should("not.have.class", "ant-select-disabled");
      cy.formController("samity_id").find("input").should("be.enabled");
      ["member_id", "account_no"].forEach((control) => {
        cy.formController(control).should("have.class", "ant-select-disabled");
      });
    });
    cy.log(messages.ui.dependentDropdown);
  }

  initialDropdownStateCheck() {
    this.openPassbookForChecks();
    cy.formController("office_id").should("not.have.class", "ant-select-disabled");
    cy.formController("office_id").find("input").should("be.enabled");
    ["samity_id", "member_id", "account_no"].forEach((control) => {
      cy.formController(control).should("have.class", "ant-select-disabled");
    });
  }

  samityEnablesMemberCheck() {
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      this.selectPassbookOption("office_id", data.mfiAdmin.memberPassbookFrom.office);
      this.selectPassbookOption("samity_id", data.mfiAdmin.memberPassbookFrom.samity);
      cy.formController("member_id").should("not.have.class", "ant-select-disabled");
      cy.formController("member_id").find("input").should("be.enabled");
      cy.formController("account_no").should("have.class", "ant-select-disabled");
    });
    cy.log(messages.ui.dependentDropdown);
  }

  memberEnablesAccountCheck() {
    this.openPassbookForChecks();
    cy.fixture(this.test_data).then((data) => {
      const passbook = data.mfiAdmin.memberPassbookFrom;
      this.selectPassbookOption("office_id", passbook.office);
      this.selectPassbookOption("samity_id", passbook.samity);
      this.selectPassbookOption("member_id", passbook.member);
      cy.formController("account_no").should("not.have.class", "ant-select-disabled");
      cy.formController("account_no").find("input").should("be.enabled");
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
