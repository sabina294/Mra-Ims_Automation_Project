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
      const cyData = data.fieldOfficer.gridCalendarYear;
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
      const cyData = data.fieldOfficer.gridCalendarYear;
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
      const cyData = data.fieldOfficer.gridCalendarYear;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/calendar/calendar-year/list");
    cy.location("pathname").should("eq", "/mfi-mis/calendar/calendar-year/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    // Revisiting the route can restore the previous search from saved state.
    // Reset explicitly before checks that require the populated calendar list.
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Calendar")
      .and("contain.text", "Calendar Year").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Year", "Start Date", "End Date", "Office", "MFI ID", "Status", "Actions"]);
  }

  calendarDateRangeCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const year = cells.eq(1).text().trim();
      expect(cells.eq(2).text().trim(), "year start date").to.equal(`01-Jan-${year}`);
      expect(cells.eq(3).text().trim(), "year end date").to.equal(`31-Dec-${year}`);
    });
  }

  submitGridSearch(value) {
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
    if (value) {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(value, { parseSpecialCharSequences: false });
    }
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
  }

  noResultSearchCheck() {
    this.openListForChecks();
    this.submitGridSearch("NO_MATCH_987654321");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
    cy.get(".ant-empty").should("be.visible");
  }

  clearSearchRestoresGridCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(1)
      .invoke("text").then((recordKey) => {
        this.submitGridSearch("NO_MATCH_987654321");
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
        this.submitGridSearch("");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
        cy.get(COMMON.TABLE.VISIBLE_ROWS).contains(COMMON.TABLE.VISIBLE_CELLS,
          new RegExp(`^\\s*${Cypress._.escapeRegExp(recordKey.trim())}\\s*$`))
          .should("be.visible");
      });
  }

  refreshRetainsListCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
  }

  ascendingSortCheck() {
    this.sortColumnCheck(COMMON.SORT.ASCENDING);
  }

  descendingSortCheck() {
    this.sortColumnCheck(COMMON.SORT.DESCENDING);
  }

  sortColumnCheck(direction) {
    this.openListForChecks();
    // A fresh page has no user-selected sort. Establish ascending first.
    cy.contains("thead th:visible", /^\s*Year\s*$/).click();
    if (direction === COMMON.SORT.DESCENDING) {
      cy.contains("thead th:visible", /^\s*Year\s*$/).click();
    }
    cy.contains("thead th:visible", /^\s*Year\s*$/)
      .should(($header) => {
        const icon = direction === COMMON.SORT.ASCENDING
          ? COMMON.SORT.ASCENDING_ICON : COMMON.SORT.DESCENDING_ICON;
        expect($header.attr(COMMON.SORT.ATTRIBUTE) === direction
          || $header.find(icon).length > 0, `${direction} sort indicator`).to.equal(true);
      });
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
  }

  viewActionAvailableCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.ACTION_TOGGLE).click();
    // Ignore hidden menu instances left behind by the dropdown animation.
    cy.get(".ant-dropdown:visible")
      .filter((_, menu) => Cypress.$(menu).css("opacity") === "1")
      .find(`[data-ims-id='${COMMON.GRID.ACTION_VIEW}']`)
      .should("be.visible");
    cy.get("nz-breadcrumb, .ant-breadcrumb").click();
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_calendar_year = new CalendarYear();
