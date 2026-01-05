class RrejectedMember {
  test_data = Cypress.env("TEST_DATA");

  createRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-member", "submenu-member-management");
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
      cy.contains("13").click({ force: true });
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

  myTaskRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      var rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-member-management").click();
      cy.formController("search_text").type(rejmData.memberNameEn);
      cy.wait(2000);

      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-reject").click();
      cy.formController("approver_remarks").type(rejmData.rejectRemarks);
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(rejmData.messageRejectedMember)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully reject the rejected member ");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-member", "submenu-rejected-member");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the rejected management list page."
    );
  }

  searchInRejectMemberName() {
    cy.fixture(this.test_data).then((data) => {
      var rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(rejmData.memberNameEn);
      cy.log("Successfully search in the rejected member");
    });
  }

  viewRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      var rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(rejmData.memberNameEn);
      cy.imsId("toggle-action").first().click();

      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the rejected member list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the rejected member list page");
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

  editRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      var rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-mis-table-action-edit").click();
      cy.imsId("btn-go-back").click();

      // cy.imsId("btn-submit").click();
      // cy.imsId("btn-yes").click();

      // cy.get("app-confirmation-modal")
      //   .contains(rejmData.messageUpdateRejectedMember)
      //   .and("be.visible");
      // cy.imsId("btn-ok").click();

      cy.log("Reject member updated successfully");
    });
  }
  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the rejected member "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_rejected_member = new RrejectedMember();
