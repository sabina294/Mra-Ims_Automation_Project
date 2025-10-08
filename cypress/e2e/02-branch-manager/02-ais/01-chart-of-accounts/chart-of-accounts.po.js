class ChartOfAccountsCreation {
    test_data = Cypress.env("TEST_DATA");

    gridChartOfAccountsListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-chart-of-accounts");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Successful switch bangla language check.");
    }
}

export const grid_chart_of_accounts = new ChartOfAccountsCreation();
