class LoanProvisionWriteOff {
    test_data = Cypress.env("TEST_DATA");

    gridLoanProvisionWriteOffListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-loan-account", "submenu-loan-provision-write-off");
            cy.log("Successfully loan provision write-off list page.");
        });
    }

    selectofficeDropdown() {
        cy.fixture(this.test_data).then((data) => {
            var lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
            cy.log(
                "loan provision write-off office dropdown check successfully"
            );
        });
    }

    statusSubmittedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("status").type(lpData.selectStatus).type("{enter}");
            cy.log(
                "loan provision write-off status submitted dropdown check successfully"
            );
        });
    }
    statusApprovedDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lpData = data.mfiAdmin.loanProvisionFrom;
            cy.formController("status").type(lpData.statusSelect).type("{enter}");
            cy.log(
                "loan provision write-off status approved dropdown check successfully"
            );
        });
    }

    searchInLoanProvisionWriteOffName() {
        cy.fixture(this.test_data).then((data) => {
            var lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(lpData.search);
            cy.log("Successfully search in the loan provision write-off");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page displayed the grid list of the loan Provision"
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var lpData = data.mfiAdmin.loanProvisionFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(lpData.search);
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

export const create_loan_provision_write_off = new LoanProvisionWriteOff();
