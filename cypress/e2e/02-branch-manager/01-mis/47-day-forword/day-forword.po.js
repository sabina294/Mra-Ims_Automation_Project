class DayForwardMis {
    test_data = Cypress.env("TEST_DATA");

    gridDayForwardListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-process", "submenu-day-forward");
            cy.log("Successfully day forward  list page.");
        });
    }

    gridDayForwardDayRoutine() {
        cy.imsId("btn-forward").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully switch to day forward check.");
    }

    gridDeleteButtonCheck() {
        cy.imsId("delete-button").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successfully delete button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch to Bangla language check.");
    }
}

export const grid_day_forward = new DayForwardMis();
