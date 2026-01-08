class GeneralLedger {
    test_data = Cypress.env("TEST_DATA");

    gridGeneralLedgerListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-general-ledger");
            cy.log("Successfully General ledger list page.");
        });
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-reload").click();
        cy.log("Successful refresh displaying.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }

    gridGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }
}

export const create_general_ledger = new GeneralLedger();
