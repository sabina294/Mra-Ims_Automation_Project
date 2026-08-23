import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMemberManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-management");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const memData = data.branchManager.createMemberFrom;
      cy.formController("samity_id").type(memData.smity).type("{enter}");
      cy.wait(1000);
      cy.formController("member_name_en").type(memData.memberNameEn);
      cy.formController("date_of_birth").click();
      cy.wait(2000);
      cy.get(".ant-picker-header-year-btn").click();
      cy.get(".ant-picker-header-super-prev-btn").click();
      cy.get(".ant-picker-header-super-prev-btn").click();
      cy.contains("2005").click();
      cy.wait(3000);
      cy.contains("11").click({ force: true });
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(memData.mfiProgram)
        .type("{enter}");
      cy.formController("savings_product_id")
        .type(memData.savingsId)
        .type("{enter}");
      cy.formController("gender").click();
      cy.get('.ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input').click();

      cy.formController("occupation").type(memData.occupation).type("{enter}");
      cy.formController("contactNo").type(memData.memberMobileNo);
      cy.get('#nz-tabs-1-tab-1').click();
      cy.formController("nid_number").type(memData.nidNumber);
      cy.get("#nz-tabs-1-tab-2").click();
      cy.formController("father_name_en").type(memData.fatherNameEn);
      cy.formController("mother_name_en").type(memData.motherNameEn);
      cy.get("#nz-tabs-1-tab-3").click();
      cy.formController("res_division_id")
        .type(memData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(memData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(memData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(memData.adressEn);
      cy.imsId(COMMON.CHECKBOXES.GENERIC).click();
      cy.get("#nz-tabs-1-tab-4").click();
      cy.get("#nz-tabs-1-tab-5").click();
      cy.imsId(COMMON.UPLOADS.PHOTO).attachFile("employeePhoto1.jpg");
      cy.wait(3000);
      cy.imsId(COMMON.UPLOADS.NID_FRONT).attachFile("nidPront1.jpg");
      cy.wait(3000);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(memData.messageSaveMember)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskMenuMember() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_MEMBER_MANAGEMENT).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.refreshSuccess);
  }

  myTaskSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchSuccess);
    });
  }

  approveMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-member", "submenu-member-management");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  profileViewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_PROFILE).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  profileViewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      // cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.editMessage);
    });
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(memData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(memData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMemberManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }


  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.branchManager.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_9).click();
    // cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_9).click();
    cy.imsId(COMMON.BUTTONS.UNLOCK).click();
    cy.log(messages.ui.unlockSuccess);
  }

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_member_management = new MemberManagementCreation();
