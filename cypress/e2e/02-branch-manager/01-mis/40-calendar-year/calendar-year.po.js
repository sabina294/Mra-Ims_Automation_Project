import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class CalendarYear {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.CALENDAR_YEAR);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewCalendar() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.branchManager.gridCalendarYear;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  searchCalendarStatus() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.branchManager.gridCalendarYear;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
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
      const cyData = data.branchManager.gridCalendarYear;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
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
    cy.location("pathname").should("include", "/calendar/calendar-year/list");
    this.breadcrumbCheck("List");
  }

  breadcrumbCheck(page) {
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Calendar")
      .and("contain.text", "Calendar Year").and("contain.text", page);
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Year", "Start Date", "End Date", "Office", "MFI ID", "Status", "Actions",
    ]);
  }

  searchYearCheck(partial = false) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(1).invoke("text").then((text) => {
      const year = text.trim();
      expect(year).to.match(/^\d{4}$/);
      const search = partial ? year.slice(0, 3) : year;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
        cy.wrap($row).find("td").eq(1).invoke("text").should((value) => {
          if (partial) expect(value.trim()).to.include(search);
          else expect(value.trim()).to.equal(year);
        });
      });
    });
  }

  exactYearSearchCheck() {
    this.searchYearCheck();
  }

  partialYearSearchCheck() {
    this.searchYearCheck(true);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("CALENDAR_YEAR");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  yearAscendingSortCheck() {
    configurationGridChecks.sort("Year", COMMON.SORT.ASCENDING);
    this.yearOrderCheck(true);
  }

  yearDescendingSortCheck() {
    configurationGridChecks.sort("Year", COMMON.SORT.DESCENDING);
    this.yearOrderCheck(false);
  }

  yearOrderCheck(ascending) {
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).should(($rows) => {
      const years = [...$rows].map((row) => Number(Cypress.$(row).find("td").eq(1).text().trim()));
      years.forEach((year) => expect(year).to.be.a("number").and.not.to.be.NaN);
      expect(years).to.deep.equal([...years].sort((a, b) => ascending ? a - b : b - a));
    });
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_calendar_year = new CalendarYear();
