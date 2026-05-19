import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class HolidayCreation {
  test_data = Cypress.env("TEST_DATA");

  gridHolidayListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-holiday");
      cy.log("Successfully Holiday list page.");
    });
  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var hData = data.mfiAdmin.createHoliday;
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying");
    });
  }

  createSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button working");
  }

  createGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button working");
  }

  createHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var hData = data.mfiAdmin.createHoliday;
      cy.imsId("btn-add-new").click();
      cy.formController("type").type(hData.holidayType).type("{enter}");
      cy.formController("end_date").click();
      cy.wait(3000);
      cy.contains("30").click({ force: true });
      cy.wait(3000);
      cy.formController("holiday_title_bn").type(hData.holidayTitleBn);
      cy.formController("holiday_title_en").type(hData.holidayTitleEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(hData.messageSaveHoliday)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Holiday ");
    });
  }

  approveHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-holiday-approval").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve Holiday ");
    });
  }

  searchHolidayTitle() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.mfiAdmin.createHoliday;
      cy.selectMenu1("submenu-holiday");
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.search);
      cy.log("Successfully search in the Holiday form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.mfiAdmin.createHoliday;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Holiday form "
    );
  }
  gridDraftButton() {
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.mfiAdmin.createHoliday;
      cy.formController("office_id").type(hData.office).type("{enter}");
      cy.log("Successfully select office in the holiday");
    });
  }

  selectCalendarYearDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.mfiAdmin.createHoliday;
      cy.formController("office_id").type(hData.office);
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.log("Successfully select calendar year in the holiday");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_holiday = new HolidayCreation();
