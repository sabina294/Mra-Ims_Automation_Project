import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CalendarYearCreation {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.CALENDAR_YEAR);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createCalendar() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId(COMMON.BUTTONS.ADD).click();
      cy.formController("holiday_title_bn").type(cyData.holidayTitleBn);
      cy.formController("holiday_title_en").type(cyData.holidayTitleEn);
      cy.formController("day_of_month").type(cyData.dayOfMonth).type("{enter}");
      cy.formController("month_of_year")
        .type(cyData.monthOfYear)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.MODAL_SUBMIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskMenuCalendarYear() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_CALENDAR_YEAR).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    // cy.imsId(COMMON.BUTTONS.RESET).click();
    // cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.refreshSuccess);
  }

  actionButtonCheck() {
    cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.CALENDAR_YEAR);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewCalendar() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.mfiAdmin.createCalendarYear;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
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
      const cyData = data.mfiAdmin.createCalendarYear;
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

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.mfiAdmin.createCalendarYear;
      cy.formController("office_id").type(cyData.selectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/calendar/calendar-year/list");
    cy.url().should("include", "/calendar/calendar-year/list");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("exist");
  }

  nonExistingSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("CALENDAR_RECORD");
  }

  searchResetValueCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type("CALENDAR_RECORD_THAT_DOES_NOT_EXIST_98765");
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  listStructureCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Calendar Year", ["Calendar"]);
    configurationGridChecks.columns(["#", "Year", "Start Date", "End Date", "Office", "MFI ID", "Status", "Actions"]);
    configurationGridChecks.pagination();
  }

  gridAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Year", COMMON.SORT.ASCENDING);
  }

  gridDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Year", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Year", COMMON.SORT.DESCENDING);
  }

  addNavigationCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").click();
    cy.url().should("include", "/calendar/calendar-year/create");
    cy.imsId(COMMON.BUTTONS.GO_BACK).should("be.visible").click();
    cy.url().should("include", "/calendar/calendar-year/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_calendar_year = new CalendarYearCreation();
