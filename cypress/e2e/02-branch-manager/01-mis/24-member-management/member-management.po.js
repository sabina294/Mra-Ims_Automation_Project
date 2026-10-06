import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class MemberManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMemberManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_MANAGEMENT);
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
    cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_MANAGEMENT);
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

  openListForChecks() {
    cy.visit("/mfi-mis/member/member-management/list");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-management/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Member Management", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Member Id", "Name", "Office Id", "Office", "Samity Id", "Samity Name", "Contact No", "Locked By", "Status", "Actions"]);
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
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(2).text().trim(), "member ID").not.to.equal("");
        expect(cells.eq(3).text().trim(), "member name").not.to.equal("");
        expect(cells.eq(10).text().trim(), "status").not.to.equal("");
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
    cy.contains("nz-select", "Select Field Officer").should("be.visible");
    cy.contains("nz-select", "Select Samity").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_MEMBER_MANAGEMENT");
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
    cy.location("pathname").should("eq", "/mfi-mis/member/member-management/list");
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

  memberNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 3);
      });
  }

  memberPartialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        configurationGridChecks.partialSearch(name);
      });
  }

  activeStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "active member records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).find("td").eq(10).text().trim()).to.equal("Active");
      });
    });
    cy.log(messages.ui.dropdownActiveMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_member_management = new MemberManagementCreation();
