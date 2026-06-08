import messages from "../../../support/constants/messages";
import { GRID } from "../../../support/constants/selectors";
class HolidayCreation {
  test_data = Cypress.env("TEST_DATA");

  gridHolidayListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-calendar", "submenu-holiday");
      cy.log("Successfully Holiday list page.");
    });
  }

  createHoliday() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var hData = data.fieldOfficer.createHoliday;
      cy.imsId("btn-add-new").click();
      cy.formController("end_date").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
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
      var hData = data.fieldOfficer.createHoliday;
      // cy.selectMenu("menu-calendar", "submenu-holiday");
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.search);
      cy.log("Successfully search in the Holiday form");
    });
  }

  selectHolidayYear() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.fieldOfficer.createHoliday;
      cy.imsId("btn-reset").click();
      cy.formController("calendar_year").type(hData.calendarYear).type("{enter}");
      cy.log("Successfully selected calendar year in the Holiday form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Holiday form "
    );
  }


  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.fieldOfficer.createHoliday;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
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

  createSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var hData = data.fieldOfficer.createHoliday;
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successful submit button check.");
    });
  }
  createResetButtonCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful reset button check.");

  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");

  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_holiday = new HolidayCreation();
