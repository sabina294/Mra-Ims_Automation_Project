class FundTransferCreation {
    test_data = Cypress.env("TEST_DATA");

    gridFinancialPeriodListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu1("menu-fund");
            cy.log("Successfully fund transfer list page.");
        });
    }

    createFinancialPeriodManagement() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            // cy.get('.primary-large-button').click();
            cy.imsId("btn-add-new").click();
            cy.imsId("btn-go-back").click();

            // cy.formController("name_en").type(ftData.nameEn);
            // cy.formController("name_bn").type(ftData.nameBn);
            // cy.formController("period_type").type(ftData.periodType).type("{enter}");
            // cy.formController("start_date").click();
            // cy.contanins(19).click();
            // cy.imsId("btn-submit").click();
            // cy.imsId("btn-yes").click();
            // cy.imsId("btn-ok").click();

            cy.log("Successfully created fund transfer");
        });
    }


    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the fund transfer list page.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(ftData.selectStatus).type("{enter}");
            cy.log("ledger sub group status inactive dropdown check successfully");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.formController("status").type(ftData.statusSelect).type("{enter}");
            cy.log("ledger sub group status active dropdown check successfully");
        });
    }

    searchName() {
        cy.fixture(this.test_data).then((data) => {
            var ftData = data.branchManager.fund;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ftData.nameEn);
            cy.log("Successfully search in the fund transfer");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the fund transfer "
        );
    }


    createResetButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-reset").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful reset button clean displaying.");
    }

    createValidationMessageCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful validation message displaying.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-add-new").click();
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsccessful switch bangla language check.");
    }
}

export const create_fund_Transfer = new FundTransferCreation();
