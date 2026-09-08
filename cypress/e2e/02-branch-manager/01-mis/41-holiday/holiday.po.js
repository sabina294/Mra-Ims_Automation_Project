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

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_holiday = new HolidayCreation();
