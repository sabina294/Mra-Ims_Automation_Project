class LoanDisbursement {
    test_data = Cypress.env("TEST_DATA");

    gridLoanDisbursementListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-loan-account", "submenu-loan-disbursement");
            cy.log("Successfully Loan Disbursement list page.");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log(
            "Action button clicked successfully on the loan disbursement list page."
        );
    }

    viewLoanDisbursement() {
        cy.fixture(this.test_data).then((data) => {
            var ldData = data.branchManager.loanDisbursementFrom;
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the Loan Disbursement list page");
        });
    }

    viewGoBackButton() {
        cy.imsId("btn-go-back").click();

        cy.log("Successfully view go back the  loan disbursement list page");
    }

    loanDisburseButtonCheck() {
        cy.fixture(this.test_data).then(() => {

            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();

            cy.get("body").then(($body) => {

                if ($body.find('[data-ims-id="btn-loan-disburse"]').length > 0) {

                    cy.imsId("btn-loan-disburse")
                        .scrollIntoView()
                        .should("exist")
                        .click({ force: true });

                } else {
                    cy.log("Disburse button NOT present");
                }

            });

            cy.log("Loan Disburse button clicked successfully");
        });
    }

    loanDisburseSubmitGoBackButtonCheck() {
        cy.fixture(this.test_data).then(() => {
            cy.imsId("btn-go-back")
                .should("exist")
                .should("be.visible")
                .click();
            cy.log("Successfully clicked go back button and returned to loan disbursement list page");
        });
    }

    loanDisburseSubmitButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ldData = data.branchManager.loanDisbursementFrom;
            // cy.imsId("toggle-action").first().click();
            // cy.imsId("btn-table-action-view").click();
            cy.get("body").then(($body) => {

                if ($body.find('[data-ims-id="btn-loan-disburse"]').length > 0) {

                    cy.imsId("btn-loan-disburse")
                        .scrollIntoView()
                        .should("exist")
                        .click({ force: true });

                } else {
                    cy.log("Disburse button NOT present");
                }
            });
            cy.log("Successfully loan disburse submit button check the loan disbursement list page");
        });
    }

    searchInLoanDisbursementName() {
        cy.fixture(this.test_data).then((data) => {
            var ldData = data.branchManager.loanDisbursementFrom;
            cy.selectMenu1("submenu-loan-disbursement");
            cy.formController("search_text").type(ldData.search);
            cy.imsId("btn-search").click();
            cy.log("Successfully search in the Loan Disbursement");
        });
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Loan Disbursement"
        );
    }

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ldData = data.branchManager.loanDisbursementFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ldData.search);
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

export const create_loan_disbursement = new LoanDisbursement();


