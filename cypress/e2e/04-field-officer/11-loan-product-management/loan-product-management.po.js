class LoanProductManagement {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProductManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1("menu-loan-product");
      cy.log("Successfully Loan product management list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan product management list page."
    );
  }

  viewLoanProductManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.loanProductFrom;
      cy.formController("search_text").type(lpData.loanProductNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the loan product management list page");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log(
        "Loan Product Management status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.loanProductFrom;
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log(
        "Loan Product Management status active dropdown check successfully"
      );
    });
  }
  searchInLoanProductName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.loanProductNameEn);
      cy.log("Successfully search in the Loan Product Management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan Product Management "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_loan_product_management = new LoanProductManagement();
