class DayEndProcessAis {
  test_data = Cypress.env("TEST_DATA");

  gridDayEndProcessAisListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-process", "submenu-day-end-process-ais");
      cy.log("Successfully Day end process list page.");
    });
  }

  previewDayEndProcess() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-preview").click();
      cy.log("Successfully Day end process previewed.");
    });
  }

  previewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("go-back-button").click();
      cy.log("Successfully Day end process go back button clicked.");
    });
  }

  previousOn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-draft-on").click();
      cy.log("Successfully Day end process previous on.");
    });
  }

  previousSearchButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("search-button").click();
      cy.log("Successfully Day end process previous search button clicked.");
    });
  }

  previousPreviewButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-preview").click();
      cy.log("Successfully Day end process previous preview button clicked.");
    });
  }

  previousPreviewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-go-back").click();
      cy.log("Successfully Day end process previous preview go back button clicked.");
    });
  }

  previousOff() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-draft-on").click();
      cy.log("Successfully Day end process previous on.");
    });
  }

  dayEndProcessAis() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("day-end-process-button").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully Day end process ais.");
    });
  }

  DayEndProcessDelete() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-delete").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("day-end-process-button").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully Day end process ais deleted.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch bangla language check.");
  }

}

export const create_day_end_process_ais = new DayEndProcessAis();
