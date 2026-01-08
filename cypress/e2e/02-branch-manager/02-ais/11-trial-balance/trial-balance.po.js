class TrialBalance {
    test_data = Cypress.env("TEST_DATA");

    gridTrialBalanceListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-trial-balance");
            cy.log("Successfully Trial balance list page.");
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

export const create_trial_balance = new TrialBalance();
