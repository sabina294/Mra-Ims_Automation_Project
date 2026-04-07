class LoanFund {
  test_data = Cypress.env("TEST_DATA");

  gridLoanFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-fund");
      cy.log("Successfully loan fund list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan fund list page.");
  }

  viewLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.branchManager.gridLoanFundFrom;
      cy.formController("search_text").type(lfData.fundingOrgId);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the loan fund list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the loan fund list page");
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("Loan fund form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying");
  }


  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lfData.selectStatus).type("{enter}");
      cy.log("Loan fund status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.branchManager.gridLoanFundFrom;
      cy.formController("status").type(lfData.statusSelect).type("{enter}");
      cy.log("Loan fund status active dropdown check successfully");
    });
  }

  searchInLoanFundName() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lfData.fundingOrgId);
      cy.log("Successfully search in the loan fund");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the loan fund "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.branchManager.gridLoanFundFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lfData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_loan_fund = new LoanFund();
