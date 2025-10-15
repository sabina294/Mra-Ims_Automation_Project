class DayEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridDayEndProcessPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-day-end-process-(ais)");
            cy.log("Successfully Day end process AIS page.");
        });
    }
    processPreviewButtonCheck() {
        cy.imsId("btn-preview").click();
        cy.imsId("go-back-button").click();
        cy.log("Successful preview button check.");
    }

    processGoBackButtonCheck() {
        cy.imsId("btn-preview").click();
        cy.imsId("go-back-button").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const grid_day_end_process_ais = new DayEndProcessAis();
