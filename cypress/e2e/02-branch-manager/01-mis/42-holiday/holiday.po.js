import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class HolidayCreation {
  test_data = Cypress.env("TEST_DATA");

  gridHolidayListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.HOLIDAY);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const hData = data.branchManager.createHoliday;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("end_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.formController("holiday_title_en").type(hData.holidayTitleEn);
      cy.formController("holiday_title_bn").type(hData.holidayTitleBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const hData = data.branchManager.createHoliday;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  approveHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_HOLIDAY_APPROVAL).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  searchHolidayTitle() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.branchManager.createHoliday;
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.HOLIDAY);
      cy.selectMenu1(COMMON.MENUS.HOLIDAY);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.search);
      cy.log(messages.ui.searchSuccess);
    });
  }

  selectCalendarYear() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.branchManager.createHoliday;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.calendarYear);
      cy.log(messages.ui.searchSuccess);
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
      const hData = data.branchManager.createHoliday;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();

      cy.log(messages.ui.searchMessage);
    });
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

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.location("pathname").should("include", "/calendar/holiday/list");
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Calendar")
      .and("contain.text", "Holiday").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Year", "Date", "Holiday Type", "Holiday Title", "Office", "Status",
    ]);
  }

  searchTitleCheck(partial = false) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(4).invoke("text").then((text) => {
      const title = text.trim();
      expect(title).not.to.equal("");
      const search = partial ? title.slice(0, Math.max(1, Math.floor(title.length / 2))) : title;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(search, { parseSpecialCharSequences: false });
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
        cy.wrap($row).find("td").eq(4).invoke("text").should((value) => {
          if (partial) expect(value.trim()).to.include(search);
          else expect(value.trim()).to.equal(title);
        });
      });
    });
  }

  exactTitleSearchCheck() {
    this.searchTitleCheck();
  }

  partialTitleSearchCheck() {
    this.searchTitleCheck(true);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("HOLIDAY");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  titleAscendingSortCheck() {
    configurationGridChecks.sort("Holiday Title", COMMON.SORT.ASCENDING);
  }

  titleDescendingSortCheck() {
    configurationGridChecks.sort("Holiday Title", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  openListForChecks() {
    cy.visit("/mfi-mis/calendar/holiday/list");
    cy.location("pathname").should("eq", "/mfi-mis/calendar/holiday/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  assertHolidayRecords() {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "holiday records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(1).text().trim(), "holiday year").to.match(/^\d{4}$/);
        [2, 3, 4, 5, 6].forEach((index) => {
          expect(cells.eq(index).text().trim(), "holiday column " + index).not.to.equal("");
        });
      });
    });
  }

  holidayRecordDataCheck() {
    this.openListForChecks();
    this.assertHolidayRecords();
  }

  holidayDateYearCheck() {
    this.openListForChecks();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "holiday records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        const date = cells.eq(2).text().trim();
        expect(date, "holiday date format").to.match(/^\d{2}-[A-Z][a-z]{2}-\d{4}$/);
        const [day, month, year] = date.split("-");
        expect(year, "date matches the Year column").to.equal(cells.eq(1).text().trim());
        expect(months, "valid month").to.include(month);
        const parsed = new Date(Number(year), months.indexOf(month), Number(day));
        expect([parsed.getFullYear(), parsed.getMonth(), parsed.getDate()], "valid calendar date")
          .to.deep.equal([Number(year), months.indexOf(month), Number(day)]);
      });
    });
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.contains("nz-select", "Select Calendar Year").should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  addHolidayButtonCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("be.enabled")
      .and("contain.text", "Add Holiday");
  }

  refreshRecordsCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
    cy.location("pathname").should("eq", "/mfi-mis/calendar/holiday/list");
    this.assertHolidayRecords();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_holiday = new HolidayCreation();
