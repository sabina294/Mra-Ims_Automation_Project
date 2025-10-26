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
    cy.log(
      "successfully refresh page  displayed the grid list of the trial balance form "
    );
    }   

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            var tbData = data.mfiAdmin.createTrialBalanceFrom;
            cy.formController("office_id").type(tbData.office);
            cy.log("Successfully select office in the trial balance list page.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }

    gridGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

}

export const create_trial_balance = new TrialBalance();
