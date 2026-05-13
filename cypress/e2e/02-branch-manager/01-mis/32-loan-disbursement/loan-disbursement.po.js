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

    gridSearchButtonCheck() {
        cy.fixture(this.test_data).then((data) => {
            var ldData = data.branchManager.loanDisbursementFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(ldData.search);
            cy.imsId("btn-search").click();
            cy.log("Successful search button click.");
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

    loanDisburseButtonCheck() {
        cy.fixture(this.test_data).then(() => {

            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-disburse").click();
            cy.imsId("btn-loan-disburse")
                .scrollIntoView()
                .should("exist")
                .click({ force: true });
            cy.log("Loan Disburse button clicked successfully");
        });
    }

    loanDisburseSubmitButtonCheck() {

        cy.get('.primary-button')
            .first()
            .should("be.visible")
            .click({ force: true });

        cy.wait(3000);

        cy.get('[data-ims-id="btn-ok"]', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true });

        cy.log("Loan Disburse submit button checked");
    }

     gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
    
}
export const create_loan_disbursement = new LoanDisbursement();


