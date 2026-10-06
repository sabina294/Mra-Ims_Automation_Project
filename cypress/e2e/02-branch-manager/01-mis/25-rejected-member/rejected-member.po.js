import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class RrejectedMember {
  test_data = Cypress.env("TEST_DATA");

  createRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_MANAGEMENT);
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

  myTaskRejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_MEMBER_MANAGEMENT).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.wait(2000);

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.REJECT_LOWERCASE).click();
      cy.formController("approver_remarks").type(rejmData.rejectRemarks);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(rejmData.messageRejectedMember)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.rejectSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.REJECTED_MEMBER);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  searchInRejectMemberName() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  viewRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.branchManager.createRejectedMemberFrom;
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

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).first().click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.editResetMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editRrejectedMember() {
    cy.fixture(this.test_data).then((data) => {
      const rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.YES).click();

      // cy.get("app-confirmation-modal")
      //   .contains(rejmData.messageUpdateRejectedMember)
      //   .and("be.visible");
      // cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
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
      const rejmData = data.branchManager.createRejectedMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rejmData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/member/rejected-member/list");
    cy.location("pathname").should("eq", "/mfi-mis/member/rejected-member/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Rejected Member", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Member Id", "Name", "Office Id", "Samity Id", "Contact No", "Status", "Actions"]);
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        // Rejected applications can have no assigned Member ID.
        expect(cells.eq(3).text().trim(), "office ID").not.to.equal("");
        expect(cells.eq(2).text().trim(), "member name").not.to.equal("");
        expect(cells.eq(6).text().trim(), "status").to.equal("Rejected");
      });
    });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRecordsOrEmptyCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_REJECTED_MEMBER");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridResetSuccess);
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/member/rejected-member/list");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  nameAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Name", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Name", COMMON.SORT.DESCENDING);
  }

  paginationOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find("tr:not(.ant-table-placeholder):visible").length) {
        configurationGridChecks.pagination();
      } else {
        cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
      }
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_rejected_member = new RrejectedMember();
