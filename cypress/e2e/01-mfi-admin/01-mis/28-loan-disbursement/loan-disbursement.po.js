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
            var laData = data.mfiAdmin.loanDisbursementFrom;
            cy.formController("search_text").type(laData.samity);
            cy.imsId("toggle-action").first().click();
            cy.imsId("btn-table-action-view").click();
            cy.log("Successfully viewed the Loan Disbursement list page");
        });
    }

    GoBackButton() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-go-back").click();
            cy.log("Successfully viewed Go Back button the Loan Disbursement list page");
        });
    }

    searchInLoanDisbursementName() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.mfiAdmin.loanDisbursementFrom;
            cy.imsId("btn-reset").click();
            cy.formController("search_text").type(laData.samity);
            cy.log("Successfully search in the Loan Disbursement");
        });
    }
    statusOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.mfiAdmin.loanDisbursementFrom;
            cy.formController("office_id").type(laData.SelectOffice).type("{enter}");
            cy.log(
                "Loan Disbursement status office dropdown check successfully"
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
            "successfully refresh page  displayed the grid list of the Loan Disbursement"
        );
    }
    gridLanguageSwitchCheck() {
        cy.imsId("profile-menu").click();
        cy.imsId("btn-lang-bangla").click();
        cy.log("Unsuccessful switch bangla language check.");
    }
}

export const create_loan_disbursement = new LoanDisbursement();


