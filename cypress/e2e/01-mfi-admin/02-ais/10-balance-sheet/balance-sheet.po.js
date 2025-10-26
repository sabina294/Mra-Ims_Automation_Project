class BalanceSheet {
    test_data = Cypress.env("TEST_DATA");

    gridBalanceSheetListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-financial-statement", "submenu-balance-sheet");
            cy.log("Successfully Balance sheet list page.");
        });
    }

    gridRefreshButtonCheck() {
    cy.imsId("btn-reload").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Balance Sheet form "
    );
  }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            var bsData = data.mfiAdmin.createBalanceSheetFrom;
            cy.formController("office_id").type(bsData.office);
            cy.log("Successfully select office in the balance sheet list page.");
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

export const create_balance_sheet = new BalanceSheet();
