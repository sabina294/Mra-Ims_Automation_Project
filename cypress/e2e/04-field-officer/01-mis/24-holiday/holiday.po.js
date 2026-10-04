import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
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
      const hData = data.fieldOfficer.createHoliday;
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
      cy.get("app-confirmation-modal")
        .contains(hData.messageSaveHoliday)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  approveHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_HOLIDAY_APPROVAL).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  searchHolidayTitle() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.fieldOfficer.createHoliday;
      // cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.HOLIDAY);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.search);
      cy.log(messages.ui.searchSuccess);
    });
  }

  selectHolidayYear() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.fieldOfficer.createHoliday;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.log(messages.ui.actionMessage);
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
      const hData = data.fieldOfficer.createHoliday;
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

  createSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const hData = data.fieldOfficer.createHoliday;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }
  createResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);

  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);

  }

  openListForChecks() {
    cy.visit("/mfi-mis/calendar/holiday/list");
    cy.location("pathname").should("eq", "/mfi-mis/calendar/holiday/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get("thead th:visible").should("have.length.greaterThan", 0);
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Calendar")
      .and("contain.text", "Holiday").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    this.assertGridColumns();
  }

  assertGridColumns() {
    ["#", "Year", "Date", "Holiday Type", "Holiday Title", "Office", "Status"].forEach((label) => {
      cy.contains("thead th:visible", new RegExp(`^\\s*${Cypress._.escapeRegExp(label)}\\s*$`))
        .should("be.visible");
    });
  }

  resetSearchInputCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type("RESET_CHECK_987654321")
      .should("have.value", "RESET_CHECK_987654321");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertGridColumns();
  }

  refreshListCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/calendar/holiday/list");
    this.assertGridColumns();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
  }

  draftToggleStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).check({ force: true }).should("be.checked");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
    this.assertGridColumns();
  }

  addButtonAvailableCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible").and("not.be.disabled")
      .and("contain.text", "Add Holiday");
  }

  holidayDateAndYearCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "holiday records required for this check").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).children("td");
        const year = cells.eq(1).text().trim();
        const date = cells.eq(2).text().trim();
        expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
        expect(year, "holiday year").to.match(/^\d{4}$/);
        expect(date, "holiday date").to.match(/^\d{2}-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-\d{4}$/);
        expect(date.slice(-4), "date belongs to the displayed year").to.equal(year);
        [3, 4, 6].forEach((index) => {
          expect(cells.eq(index).text().trim(), `holiday column ${index}`).not.to.equal("");
        });
      });
    });
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_holiday = new HolidayCreation();
