class ChartOfAccountsCreation {
    test_data = Cypress.env("TEST_DATA");

    gridChartOfAccountsListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-chart-of-accounts");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    createChartOfAccounts() {
        cy.fixture(this.test_data).then((data) => {
            var coaData = data.mfiAdmin.chartOfAccounts;
            cy.get('.primary-large-button').click();
            // cy.imsId("btn-add").click();

            cy.formController("ledger_group_id").type(coaData.ledgergroup).type("{enter}");
            cy.formController("ledger_subgroup_oid").type(coaData.ledgerSubGroup).type("{enter}");
            cy.formController("name_en").type(coaData.nameEn);
            cy.formController("name_bn").type(coaData.nameBn);
            cy.formController("mnemonic").type(coaData.mnemonicEn);
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();

            cy.log("Successfully created chart of accounts");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_chart_of_accounts = new ChartOfAccountsCreation();
