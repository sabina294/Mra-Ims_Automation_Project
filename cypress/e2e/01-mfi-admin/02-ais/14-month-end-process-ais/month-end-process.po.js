class MonthEndProcessAis {
    test_data = Cypress.env("TEST_DATA");

    gridMonthEndProcessPage() {
        cy.fixture(this.test_data).then(() => {
            cy.selectMenu("menu-process", "submenu-month-end-process-ais");
            cy.log("Successfully Month end process AIS page.");
        });
    }

    processPreviewButtonCheck() {
        cy.imsId("btn-preview").eq(0).click();
        cy.log("Successful preview button check.");
    }

    processGoBackButtonCheck() {
        cy.imsId("go-back-button").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const grid_month_end_process_ais = new MonthEndProcessAis();
