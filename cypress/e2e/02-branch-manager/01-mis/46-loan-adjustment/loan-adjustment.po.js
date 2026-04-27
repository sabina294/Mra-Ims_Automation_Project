class loanAdjustment {
    test_data = Cypress.env("TEST_DATA");

    gridLoanAdjustmentListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu("menu-transaction", "submenu-loan-adjustment");
            cy.log("Successfully Loan Adjustment collection list page.");
        });
    }

    createNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {
            cy.imsId("btn-add-new").click();
            var laData = data.branchManager.loanAdjustment;
            cy.formController("samityId").click();
            cy.contains(laData.selectSamity).click()
            cy.formController("memberId").click();
            cy.contains(laData.selectMember).click()
            cy.formController("accountId").click();
            cy.contains(laData.selectAccount).click()
            cy.imsId("amount-input").clear().type(laData.inputAmount);
            cy.log("Successfully created new Loan Adjustment");
        });
    }

    saveNewLoanAdjustment() {
        cy.fixture(this.test_data).then((data) => {
            var laData = data.branchManager.loanAdjustment;
            cy.imsId("btn-submit").click();
            cy.imsId("btn-yes").click();
            cy.imsId("btn-ok").click();
            cy.log("Successfully created new Loan Adjustment");
        });
    }

    actionButtonCheck() {
        cy.imsId("toggle-action").first().click();
        cy.log("Action button clicked successfully on the Loan Adjustment list page.");
    }

    viewLoanAdjustment() {
        cy.imsId("btn-table-action-view").click();
        cy.log("successfully on the view Loan Adjustment list page.");
    }

    viewGoBack() {
        cy.imsId("btn-go-back").click();
        cy.log("successfully on the view go back Loan Adjustment list page.");
    }

    gridResetButtonCheck() {
        cy.imsId("btn-reset").click();
        cy.log("Successful clean displaying.");
    }

    gridRefreshButtonCheck() {
        cy.imsId("btn-refresh").click();
        cy.log(
            "successfully refresh page  displayed the grid list of the Loan Adjustment "
        );
    }

    gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.branchManager.loanAdjustment;
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

export const create_loan_adjustment = new loanAdjustment();
