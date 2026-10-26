import { processPageChecks } from "../../../../support/page-objects/process-page-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MonthEndProcess {
  test_data = Cypress.env("TEST_DATA");

  gridMonthEndProcessListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.MONTH_END_PROCESS_MIS);
      cy.log(messages.ui.gridListMessage);
    });
  }
  
  openList() {
    processPageChecks.open(COMMON.MENUS.MONTH_END_PROCESS_MIS,
      "/mfi-mis/process/month-end-process/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  breadcrumbCheck() {
    this.openList();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Month End Process (MIS)").and("contain.text", "List");
  }

  summaryCheck() {
    this.openList();
    ["Branch Status", "Business Day", "System Status"].forEach((label) => {
      cy.contains(new RegExp("^\\s*" + label + "\\s*$")).should("be.visible");
    });
  }

  columnsCheck() {
    this.openList();
    ["#", "Month", "Year", "Month End Date", "Calculated Accrued Interest",
      "Accrued Interest Amount", "Calculated Interest", "Interest Amount", "Status"]
      .forEach((label) => {
        cy.contains("thead th:visible", new RegExp("^\\s*" + label + "\\s*$"))
          .should("be.visible");
      });
  }

  filterControlsCheck() {
    this.openList();
    ["Select Calendar Year", "Select Month", "Select Status"].forEach((placeholder) => {
      cy.contains("nz-select:visible", placeholder).should("be.visible");
    });
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  actionControlsCheck() {
    this.openList();
    ["Run Month End Process", "View Details"].forEach((label) => {
      cy.contains("button:visible", new RegExp("^\\s*" + label + "\\s*$"))
        .should("be.visible");
    });
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
        expect(cells.eq(1).text().trim(), "month").not.to.equal("");
        expect(cells.eq(2).text().trim(), "year").to.match(/^\d{4}$/);
        expect(cells.eq(3).text().trim(), "month end date").not.to.equal("");
        expect(cells.eq(8).text().trim(), "status").not.to.equal("");
      });
    });
  }

  recordsOrEmptyCheck() {
    this.openList();
    this.assertRecordsOrEmpty();
  }

  searchAndResetCheck() {
    this.openList();
    processPageChecks.noResults();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
  }

  refreshCheck() {
    this.openList();
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").and("be.enabled").click();
    cy.location("pathname").should("eq", "/mfi-mis/process/month-end-process/list");
    this.assertRecordsOrEmpty();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_month_end_process = new MonthEndProcess();
