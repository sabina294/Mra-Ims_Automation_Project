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

    previousOn() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-draft-on").click();
            cy.log("Successfully month end process previous on.");
        });
    }

    previousSearchButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("search-button").click();
            cy.log("Successfully month end process previous search button clicked.");
        });
    }

    previousPreviewButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-preview").click();
            cy.selectMenu1("submenu-month-end-process-ais");
            cy.log("Successfully month end process previous preview button clicked.");
        });
    }

    previousPreviewGoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-go-back").click();
            cy.log("Successfully month end process previous preview go back button clicked.");
        });
    }

    previousOff() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-draft-on").click();
            cy.log("Successfully month end process previous off.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const grid_month_end_process_ais = new MonthEndProcessAis();
