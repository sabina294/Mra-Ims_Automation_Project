import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RrejectedMember {
  test_data = Cypress.env("TEST_DATA");

  createRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.selectMenu("menu-member", "submenu-member-management");
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      cy.formController("office_id").type(rejmData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(rejmData.smity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_name_en").type(rejmData.memberNameEn);
      cy.formController("date_of_birth").click();
      cy.get(".ant-picker-header-year-btn").click();
      cy.get(".ant-picker-header-super-prev-btn").click();
      cy.get(".ant-picker-header-super-prev-btn").click();
      cy.contains("2005").click();
      cy.wait(3000);
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.formController("mfi_program_id")
        .type(rejmData.mfiProgram)
        .type("{enter}");
      cy.formController("savings_product_id")
        .type(rejmData.savingsId)
        .type("{enter}");
      cy.formController("gender").click();
      cy.get('.ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input').click();

      cy.formController("occupation").type(rejmData.occupation).type("{enter}");
      cy.formController("contactNo").type(rejmData.memberMobileNo);
      cy.get('#nz-tabs-1-tab-1').click();
      cy.formController("nid_number").type(rejmData.nidNumber);
      cy.get("#nz-tabs-1-tab-2").click();
      cy.formController("father_name_en").type(rejmData.fatherNameEn);
      cy.formController("mother_name_en").type(rejmData.motherNameEn);
      cy.get("#nz-tabs-1-tab-3").click();
      cy.formController("res_division_id")
        .type(rejmData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(rejmData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(rejmData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(rejmData.adressEn);
      cy.imsId("ck-box").click();
      cy.get("#nz-tabs-1-tab-4").click();
      cy.get("#nz-tabs-1-tab-5").click();
      cy.imsId("btn_photo_image_id").attachFile("employeePhoto1.jpg");
      cy.wait(3000);
      cy.imsId("btn_nid_front_doc_id").attachFile("nidPront1.jpg");
      cy.wait(3000);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(rejmData.messageSaveMember)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-management").click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.wait(2000);

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-reject").click();
      cy.formController("approver_remarks").type(rejmData.rejectRemarks);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(rejmData.messageRejectedMember)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully reject the rejected member ");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-member", "submenu-rejected-member");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  searchInRejectMemberName() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  viewRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();

      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.formController("office_id")
        .type(rejmData.SelectOffice)
        .type("{enter}");
      cy.log("Rejected member status office dropdown check successfully");
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId("btn-mis-table-action-edit").click();
    cy.imsId(COMMON.BUTTONS.RESET).click();

    cy.log(messages.ui.editResetMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-edit").click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.editMessage);
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.mfiAdmin.createRejectedMemberFrom;
      cy.formController("office_id").type(rejmData.office);
      cy.log("Successfully select office in the rejected member");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_rejected_member = new RrejectedMember();
