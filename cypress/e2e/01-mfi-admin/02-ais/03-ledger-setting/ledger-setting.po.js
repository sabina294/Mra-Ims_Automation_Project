class LedgerSetting {
    test_data = Cypress.env("TEST_DATA");

    gridLedgerSubGroupListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-accounting", "submenu-ledger-setting");
            cy.log("Successfully Chart of accounts list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the ledger sub group list page.");
    }

    editResetButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-go-back").click();

        cy.log("Successful clean displaying");
    }

    editGoBackButton() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful edit go back button check.");
    }

    createValidationMessageCheck() {
        cy.imsId("toggle-action").first().click();
        cy.imsId("btn-table-action-edit").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-yes").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful validation message displaying.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsData = data.mfiAdmin.ledgerSetting;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(lsData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsData = data.mfiAdmin.ledgerSetting;
            cy.formController("status").type(lsData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var lsData = data.mfiAdmin.ledgerSetting;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(lsData.nameEn);
            cy.log("Successfully search in the ledger sub group");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the ledger sub group "
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lsData = data.mfiAdmin.ledgerSetting;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(lsData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const grid_ledger_setting = new LedgerSetting();
