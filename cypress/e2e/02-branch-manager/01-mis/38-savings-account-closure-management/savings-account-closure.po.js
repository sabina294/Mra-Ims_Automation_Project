class SavingsAccountClosure {

    test_data = Cypress.env("TEST_DATA");

    gridSavingsAccountClosureListPage() {
        cy.selectMenu(
            "menu-savings-account",
            "submenu-savings-account-closure-management"
        );
        cy.log("Savings Account Closure Management list page loaded successfully.");
    }

    statusInactiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId("btn-reset").click();
            cy.formController("status")
                .type(sacmData.selectStatus)
                .type("{enter}");

            cy.log("Savings Account Closure inactive status filter checked successfully.");
        });
    }

    statusActiveDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId("btn-reset").click();
            cy.formController("status")
                .type(sacmData.statusSelect)
                .type("{enter}");

            cy.log("Savings Account Closure active status filter checked successfully.");
        });
    }

    searchSavingsAccountClosure() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId("btn-reset").click();
            cy.formController("search_text").clear().type(sacmData.search);

            cy.log("Savings Account Closure search completed successfully.");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Savings Account Closure grid reset successfully.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log("Savings Account Closure grid refreshed successfully.");
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;

            cy.imsId("btn-reset").click();
            cy.formController("search_text").clear().type(sacmData.search);
            cy.imsId("btn-search").click();

            cy.log("Savings Account Closure search button clicked successfully.");
        });
    }

    createResetButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            const sacmData = data.branchManager.createSavingsAccountClosureManagement;
            cy.imsId("btn-add-new").click();
            cy.formController("samity_id").type(sacmData.samityId).type("{enter}");
            cy.formController("member_id").type(sacmData.memberId).type("{enter}");
            cy.formController("savings_account_id").type(sacmData.savingsAccountId).type("{enter}");
            cy.imsId("btn-reset").click();
            cy.log("Successful reset button check.");
        });
    }

    createDraftButtonCheck() {
        cy.imsId("btn-draft").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful draft button check.");
    }

    createSubmitButtonCheck() {
        cy.imsId("btn-submit").click();
        cy.imsId("btn-ok").click();
        cy.log("Successful submit button check.");
    }

    createGoBackButtonCheck() {
        cy.imsId("btn-go-back").click();
        cy.log("Successful go back button check.");
    }

    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();

        cy.log("Savings Account Closure grid switched to Bangla successfully.");
    }



}

export const savings_account_closure = new SavingsAccountClosure();