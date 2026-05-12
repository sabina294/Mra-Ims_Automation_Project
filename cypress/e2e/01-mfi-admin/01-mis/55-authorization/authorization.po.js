class Authorization {
    test_data = Cypress.env("TEST_DATA");

    gridAuthorizationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-authorization");
            cy.log("Successfully authorization list page.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch to Bangla language check.");
    }
}

export const grid_authroization = new Authorization();
