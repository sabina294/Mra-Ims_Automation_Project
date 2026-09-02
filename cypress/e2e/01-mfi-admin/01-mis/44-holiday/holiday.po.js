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

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const hData = data.mfiAdmin.createHoliday;
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createHoliday() {
    cy.fixture(this.test_data).then((data) => {
      // cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const hData = data.mfiAdmin.createHoliday;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("type").type(hData.holidayType).type("{enter}");
      cy.formController("end_date").click();
      cy.get(".ant-picker-dropdown:visible")
        .find(".ant-picker-cell:not(.ant-picker-cell-disabled)")
        .first()
        .find(".ant-picker-cell-inner")
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

  myTaskMenuHoliday() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.mfiAdmin.createHoliday;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_HOLIDAY_APPROVAL).click();
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

  approveHoliday() {
    cy.fixture(this.test_data).then((data) => {
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
      const hData = data.mfiAdmin.createHoliday;
      cy.selectMenu(COMMON.MENUS.CALENDAR, COMMON.MENUS.HOLIDAY);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.search);
      cy.log(messages.ui.searchSuccess);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.mfiAdmin.createHoliday;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(hData.search);
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

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.mfiAdmin.createHoliday;
      cy.formController("office_id").type(hData.office).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }

  selectCalendarYearDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const hData = data.mfiAdmin.createHoliday;
      cy.formController("office_id").type(hData.office);
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.get("nz-breadcrumb, .ant-breadcrumb")
      .should("be.visible")
      .and("contain.text", "Home")
      .and("contain.text", "Calendar")
      .and("contain.text", "Holiday")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  requiredGridColumnsCheck() {
    const requiredColumns = [
      "#",
      "Year",
      "Date",
      "Holiday Type",
      "Holiday Title",
      "Office",
      "Status",
    ];

    requiredColumns.forEach((column) => {
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, column)
        .should("be.visible");
    });
    cy.log(messages.ui.gridColumns);
  }

  firstPagePaginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE)
      .should("be.visible")
      .and("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_holiday = new HolidayCreation();
