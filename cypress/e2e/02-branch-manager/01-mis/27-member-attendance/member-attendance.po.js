import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MemberAttendance {
  test_data = Cypress.env("TEST_DATA");

  gridMemberAttendanceListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.MEMBER, COMMON.MENUS.MEMBER_ATTENDANCE);
      cy.log(messages.ui.gridListMessage);
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
      const maData = data.branchManager.memberAttendanceFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(maData.samity);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/member/member-attendance/list");
    cy.location("pathname").should("eq", "/mfi-mis/member/member-attendance/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Member Attendance", ["Member"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns([
      "#", "Samity Id", "Samity Name", "Samity Type", "MFI Program",
      "Locked By", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "attendance samities").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        [1, 2].forEach((index) => {
          expect(cells.eq(index).text().trim(), "samity identifier/name").not.to.equal("");
        });
      });
    });
    cy.log(messages.ui.recordIdCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.contains("nz-select .ant-select-selection-placeholder", /^\s*Select Field Officer\s*$/)
      .should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  samityNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS)
      .eq(2).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "samity name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 2);
      });
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_MEMBER_ATTENDANCE");
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

export const member_attendance = new MemberAttendance();
