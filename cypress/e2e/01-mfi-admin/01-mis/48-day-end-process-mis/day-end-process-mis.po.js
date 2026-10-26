import { processPageChecks } from "../../../../support/page-objects/process-page-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_END_PROCESS_MIS);
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  openListForChecks() {
    cy.visit("/mfi-mis/process/day-end-process/list");
    cy.location("pathname").should("eq", "/mfi-mis/process/day-end-process/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Day End Process (MIS)").and("contain.text", "List");
  }

  summaryLabelsCheck() {
    this.openListForChecks();
    ["Branch Status", "Business Day", "System Status"].forEach((label) => {
      cy.contains("span:visible, div:visible, h3:visible, h4:visible",
        new RegExp("^\\s*" + label + "\\s*$")).should("be.visible");
    });
  }

  requiredColumnsCheck() {
    this.openListForChecks();
    ["#", "Samity ID", "Samity", "Field Officer", "Samity Day", "Total Withdraw",
      "Total Disbursement", "Total Adjustment", "Total Collection", "Status"].forEach((label) => {
      cy.contains("thead th:visible", new RegExp("^\\s*" + label + "\\s*$")).should("be.visible");
    });
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.contains("nz-select:visible", "Select Samity").should("be.visible");
    cy.contains("nz-select:visible", "Select Field Officer").should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
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
        const cells = Cypress.$(row).children("td");
        expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
        [1, 2, 3, 4, 9].forEach((index) => {
          expect(cells.eq(index).text().trim(), "day end column " + index).not.to.equal("");
        });
        [5, 6, 7, 8].forEach((index) => {
          const amount = cells.eq(index).text().trim().replace(/,/g, "");
          expect(amount, "transaction total").to.match(/^-?\d+(?:\.\d+)?$/);
          expect(Number.isFinite(Number(amount)), "finite total").to.equal(true);
        });
      });
    });
  }

  recordsOrEmptyCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
  }

  resetSearchCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type("DAY_END_RESET_CHECK");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
  }

  refreshResultCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/process/day-end-process/list");
    this.assertRecordsOrEmpty();
  }

  nonMatchingSearchCheck() {
    processPageChecks.open(COMMON.MENUS.DAY_END_PROCESS_MIS, "/mfi-mis/process/day-end-process/list");
    processPageChecks.noResults({ dashboard: false });
    processPageChecks.clearSearch();
  }

  clearedSearchRestoresResultsCheck() {
    processPageChecks.open(COMMON.MENUS.DAY_END_PROCESS_MIS, "/mfi-mis/process/day-end-process/list");
    cy.get("body").then(($body) => {
      const originalRows = $body.find(COMMON.TABLE.VISIBLE_ROWS).length;
      processPageChecks.noResults();
      processPageChecks.clearSearch();
      cy.get("body").should(($result) => {
        expect($result.find(COMMON.TABLE.VISIBLE_ROWS).length, "restored visible row count")
          .to.equal(originalRows);
      });
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_day_end_process = new DayEndProcessMis();
