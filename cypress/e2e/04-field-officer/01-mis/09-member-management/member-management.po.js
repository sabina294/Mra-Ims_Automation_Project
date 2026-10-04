import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
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

      const memData = data.fieldOfficer.createMemberFrom;
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
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .contains('15')
        .click();
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
      cy.get('#nz-tabs-1-tab-2').click();
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
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.search);
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
      const memData = data.fieldOfficer.createMemberFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.editResetMessage);
    });
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);

  }

  editMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(memData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  profileViewMemberManagement() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.memberNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_PROFILE).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  profileViewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(memData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(memData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMemberManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  createSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_7).click();
    // cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).filter((_, row) => {
      const cells = Cypress.$(row).find("td");
      return !cells.eq(9).text().trim() &&
        cells.find('input[type="checkbox"]:not(:disabled)').length;
    }).first().should("exist").then(($row) => {
      this.memberLockedByTest = $row.find("td").eq(2).text().trim();
      expect(this.memberLockedByTest, "member selected for locking").not.to.equal("");
      cy.wrap($row).find('input[type="checkbox"]').check({ force: true });
    });
    cy.imsId(COMMON.BUTTONS.LOCK).should("not.be.disabled").click();
    cy.then(() => {
      cy.get(COMMON.TABLE.VISIBLE_ROWS).contains("td", this.memberLockedByTest)
        .closest("tr").find("td").eq(9).invoke("text").should("match", /\S/);
    });
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.then(() => {
      expect(this.memberLockedByTest, "member locked by the preceding lock test").to.be.a("string").and.not.equal("");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).contains("td", this.memberLockedByTest)
        .closest("tr").find('input[type="checkbox"]').check({ force: true });
      cy.imsId(COMMON.BUTTONS.UNLOCK).should("be.visible").and("not.be.disabled").click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).contains("td", this.memberLockedByTest)
        .closest("tr").find("td").eq(9).invoke("text").should("match", /^\s*$/);
    });
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


  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const memData = data.fieldOfficer.createMemberFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(memData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/member/member-management/list");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-management/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true });
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Member Management", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns([
      "#", "Member Id", "Name", "Office Id", "Office", "Samity Id",
      "Samity Name", "Contact No", "Locked By", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "member records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        [2, 3, 4, 5, 6, 7].forEach((index) => {
          expect(cells.eq(index).text().trim(), "member and office/samity data").not.to.equal("");
        });
        expect(["Active", "Inactive", "Closed"]).to.include(cells.eq(10).text().trim());
      });
    });
    cy.log(messages.ui.recordIdCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.contains("nz-select .ant-select-selection-placeholder", /^\s*Select Field Officer\s*$/)
      .should("be.visible");
    cy.contains("nz-select .ant-select-selection-placeholder", /^\s*Select Samity\s*$/).should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  memberNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(3).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "member name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 3);
      });
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("MEMBER_MANAGEMENT");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    configurationGridChecks.reset();
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_member_management = new MemberManagementCreation();
