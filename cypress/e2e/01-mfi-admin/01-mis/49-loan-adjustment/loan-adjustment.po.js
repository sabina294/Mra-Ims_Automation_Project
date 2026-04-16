class LoanAdjustment {
    test_data = Cypress.env("TEST_DATA");

    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-loan-adjustment");
            cy.log("Successfully Loan Adjustment list page.");
        });
    }

    searchInLoanAdjustmentName() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(laData.samity);
            cy.log("Successfully search in the Loan Adjustment");
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.formController("office_id").type(laData.office).type("{enter}");
            cy.log(
                "Loan Adjustment status office dropdown check successfully"
            );
        });
    }
    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }
    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Loan Adjustment"
        );
    }
    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.mfiAdmin.loanAdjustmentFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(laData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
        });
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const grid_loan_adjustment = new LoanAdjustment();


