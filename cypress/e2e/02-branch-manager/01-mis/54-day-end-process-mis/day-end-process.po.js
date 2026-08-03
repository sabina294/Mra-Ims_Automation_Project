class DayEndProcessMis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessMisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-mis");
      cy.log("Successfully Day end process list page.");
    });
  }

  startDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-start_process").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully Day end process started.");
    });
  }

  refreshDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
       const clickCount = 3; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId("btn-refresh").click();
        cy.wait(2000); // optional wait between clicks
      }
      cy.log("Successfully Day end process refreshed.");
    });
  }

  revertRecordDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-delete").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-start_process").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-refresh").click();
      cy.log("Successfully Day end process reverted.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch bangla language check.");
  }

}

export const create_day_end_process_mis = new DayEndProcessMis();
