// Shared across 02-branch-manager/01-mis/56-day-end-process-ais and workflow.cy.js.
import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";
class DayEndProcessAis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessAisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.DAY_END_PROCESS_AIS);
      cy.log(messages.ui.gridListMessage);
    });
  }

  previewDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIEW).click();
      cy.log(messages.ui.previewMessage);
    });
  }

  previewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.AIS_GOBACK).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousOn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousSearchButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.AIS_SEARCH).click();
      cy.log(messages.ui.previousSearchMessage);
    });
  }

  previousPreviewButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIEW).click();
      cy.log(messages.ui.previewMessage);
    });
  }

  previousPreviewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  previousOff() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.PREVIOUS).click();
      cy.log(messages.ui.previousOnMessage);
    });
  }

  dayEndProcessAis() {
    this.openListForChecks();
    cy.get(`[data-ims-id='${COMMON.BUTTONS.DAYENDAIS_PROCESS}']`, { timeout: 30000 })
      .should("be.visible").and("be.enabled").click();
    cy.imsId(COMMON.CONFIRMATION.YES).should("be.visible").and("be.enabled").click();
    cy.get(`[data-ims-id='${COMMON.CONFIRMATION.OK}']`, { timeout: 60000 })
      .should("be.visible").and("be.enabled").click();
    cy.location("pathname").should("eq", "/mfi-ais/process/day-end-process/list");
    cy.log(messages.ui.dayEndAisMessage);
  }

  DayEndProcessDelete() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.DELETE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.DAYENDAIS_PROCESS).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.dayEndAisMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-ais/process/day-end-process/list");
    cy.location("pathname").should("eq", "/mfi-ais/process/day-end-process/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Day End Process (AIS)").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    ["#", "Voucher ID", "Voucher Name", "Voucher Date", "Voucher Prepared By",
      "Office", "Voucher Amount", "Status", "Actions"].forEach((label) => {
      cy.contains("thead th:visible", new RegExp("^\\s*" + label + "\\s*$"))
        .should("be.visible");
    });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.contains("Auto Voucher List").should("be.visible");
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        expect(cells.length, "voucher columns").to.equal(9);
        expect(cells.eq(0).text().trim(), "serial").to.match(/^\d+$/);
        [1, 2, 3, 4, 5, 7].forEach((index) => {
          expect(cells.eq(index).text().trim(), "voucher column " + index).not.to.equal("");
        });
        const amount = cells.eq(6).text().trim().replace(/,/g, "");
        expect(amount, "voucher amount").to.match(/^-?\d+(?:\.\d+)?$/);
        expect(Number.isFinite(Number(amount)), "finite voucher amount").to.equal(true);
      });
    });
  }

  actionControlsCheck() {
    this.openListForChecks();
    // The Previous data ID belongs to a visually hidden checkbox.
    cy.imsId(COMMON.BUTTONS.PREVIOUS).should("exist");
    cy.contains("label:visible, button:visible, span:visible", "Previous").should("be.visible");
    cy.imsId(COMMON.BUTTONS.PREVIEW).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.DAYENDAIS_PROCESS).should("be.visible");
    cy.contains("button:visible", /^\s*Delete\s*$/).should("be.visible");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

}

export const create_day_end_process_ais = new DayEndProcessAis();
