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
      var hData = data.branchManager.createHoliday;
      cy.imsId("btn-add-new").click();
      cy.formController("end_date").click();
      cy.contains("19").click({ force: true });
      cy.wait(2000);
      cy.formController("holiday_title_bn").type(hData.holidayTitleBn);
      cy.formController("holiday_title_en").type(hData.holidayTitleEn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Holiday ");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var hData = data.branchManager.createHoliday;
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-reset").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
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
      var hData = data.branchManager.createHoliday;
      cy.selectMenu("menu-calendar", "submenu-holiday");
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.search);
      cy.log("Successfully search in the Holiday form");
    });
  }

  selectCalendarYear() {
    cy.fixture(this.test_data).then((data) => {
      var hData = data.branchManager.createHoliday;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(hData.calendarYear);
      cy.log("Successfully search in the Holiday form");
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

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_holiday = new HolidayCreation();
