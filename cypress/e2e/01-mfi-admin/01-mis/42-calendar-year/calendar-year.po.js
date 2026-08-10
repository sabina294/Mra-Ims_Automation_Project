import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class CalendarYearCreation {
  test_data = Cypress.env("TEST_DATA");

  gridCalendarListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-calendar-year");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createCalendar() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId("btn-add").click();
      cy.formController("holiday_title_bn").type(cyData.holidayTitleBn);
      cy.formController("holiday_title_en").type(cyData.holidayTitleEn);
      cy.formController("day_of_month").type(cyData.dayOfMonth).type("{enter}");
      cy.formController("month_of_year")
        .type(cyData.monthOfYear)
        .type("{enter}");

      cy.imsId("btn-modal-submit").click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskMenuCalendarYear() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-calendar-year").click();
      cy.log("Successfully navigate to my task menu Calendar Year");
    });
  }
 
  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

   myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    // cy.imsId(COMMON.BUTTONS.RESET).click();
    // cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the calendar year "
    );
  }

  approveCalendare() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId("btn-lock").click();
    cy.imsId("btn-add").click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.wait(10000);
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Successfully approve Calendar Year ");
  }

  actionButtonCheck() {
    cy.selectMenu("menu-calendar", "submenu-calendar-year");
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
      cy.log("Successfully search in the Calendar Year form");
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
      cy.log(
        "Calendar year status office dropdown check successfully"
      );
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

  createSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const cyData = data.mfiAdmin.createCalendarYear;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(cyData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_calendar_year = new CalendarYearCreation();
