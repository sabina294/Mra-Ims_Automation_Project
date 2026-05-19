import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class MemberManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMemberManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-management");
      cy.log("Successfully Member management list page.");
    });
  }

  createMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var memData = data.branchManager.createMemberFrom;
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
      cy.imsId("ck-box").click();
      cy.get("#nz-tabs-1-tab-4").click();
      cy.get("#nz-tabs-1-tab-5").click();
      cy.imsId("btn_photo_image_id").attachFile("employeePhoto1.jpg");
      cy.wait(3000);
      cy.imsId("btn_nid_front_doc_id").attachFile("nidPront1.jpg");
      cy.wait(3000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(memData.messageSaveMember)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created member management");
    });
  }

  approveMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-management").click();
      cy.formController("search_text").type(memData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.get("app-confirmation-modal")
        .contains(memData.messageApproveMember)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully approved the member management ");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-member", "submenu-member-management");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the member management list page."
    );
  }

  viewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.formController("search_text").type(memData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the member management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Member management list page");
  }

  profileViewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      // cy.formController("search_text").type(memData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-profile").click();
      cy.log("Successfully profile viewed the member management list page");
    });
  }

  profileViewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully profile view go back the  member management list page");
  }

  editMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(memData.memberNameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-edit").click();
      cy.imsId("btn-go-back").click();
      // cy.imsId("btn-submit").click();

      // cy.imsId("btn-yes").click();

      // cy.get("app-confirmation-modal")
      //   .contains(memData.messageUpdateMember)
      //   .and("be.visible");
      // cy.imsId("btn-ok").click();

      cy.log("Member Management updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-mis-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-mis-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(memData.selectStatus).type("{enter}");
      cy.log("Member management status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.formController("status").type(memData.statusSelect).type("{enter}");
      cy.log("Member management status active dropdown check successfully");
    });
  }

  searchInMemberManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(memData.memberNameEn);
      cy.log("Successfully search in the Member management");
    });
  }

  createApproveButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful approve button check.");
  }

  createSubmitButtonCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button check.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
  }

  createResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful reset button check.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }


  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Member management "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var memData = data.branchManager.createMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(memData.memberNameEn);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-2").click();
    // cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    // cy.imsId("btn-lock").click();
    // cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    // cy.imsId("row-checkbox-2").click();
    // cy.imsId("btn-unlock").click();
    // cy.log("Checkbox unlock button should be clickable and functional.");
  }

  gridDraftButton() {
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_member_management = new MemberManagementCreation();
