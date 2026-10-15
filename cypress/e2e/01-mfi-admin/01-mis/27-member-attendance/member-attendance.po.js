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

    actionButtonCheck() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.log(
            messages.ui.actionMessage
        );
    }

    searchInMemberAttendanceName() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(matData.search);
            cy.log(messages.ui.searchMessage);
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController("office_id").type(matData.SelectOffice).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();

            cy.log(messages.ui.officeDropdownMessage);
        });
    }
    gridResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.gridResetSuccess);
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const matData = data.mfiAdmin.memberAttendanceFrom;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(matData.search);
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

    // Keep these list checks independent of the earlier list interactions.
    openListForChecks() {
      cy.visit("/mfi-mis/member/member-attendance/list");
      cy.changeLanguage("english");
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
        expect($rows.length, "samity records").to.be.greaterThan(0);
        $rows.each((_, row) => {
          const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
          expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
          [1, 2, 3].forEach((index) => {
            expect(cells.eq(index).text().trim(), `required column ${index}`).not.to.equal("");
          });
          const statuses = cells.toArray().map((cell) => Cypress.$(cell).text().trim())
            .filter((value) => ["Active", "Inactive"].includes(value));
          expect(statuses, "one valid status per samity row").to.have.length(1);
        });
      });
    }

    partialNameSearchCheck() {
      this.openListForChecks();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
        .invoke("text").then((text) => {
          const name = text.trim();
          expect(name, "samity name to search").not.to.equal("");
          // Use a proper substring even when the samity has a single-word name.
          const partialName = name.slice(0, Math.max(1, Math.floor(name.length / 2)));
          configurationGridChecks.exactSearch(partialName, 2);
        });
    }

    noResultSearchCheck() {
      this.openListForChecks();
      configurationGridChecks.noResult("MFI_MEMBER_ATTENDANCE");
    }

    samityIdAscendingSortCheck() {
      this.openListForChecks();
      configurationGridChecks.sort("Samity Id", COMMON.SORT.ASCENDING);
    }

    samityIdDescendingSortCheck() {
      this.openListForChecks();
      configurationGridChecks.sort("Samity Id", COMMON.SORT.ASCENDING);
      configurationGridChecks.sort("Samity Id", COMMON.SORT.DESCENDING);
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
