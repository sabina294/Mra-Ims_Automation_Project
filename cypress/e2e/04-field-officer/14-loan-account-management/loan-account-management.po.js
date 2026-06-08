class LoanAccountManagement {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-account-management");
      cy.log("Successfully Loan account Management list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan account management list page."
    );
  }

  viewLoanAccountManagement() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.formController("search_text").type(laData.memberNameEn);
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the Loan account Management list page");
    });
  }
  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log(
      "Successfully viewed go back the Loan account Management  list page"
    );
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(laData.samity);
      cy.formController("status").type(laData.selectStatus).type("{enter}");
      cy.log(
        "Loan account proposal Management status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.formController("status").type(laData.statusSelect).type("{enter}");
      cy.log(
        "Loan account proposal Management status active dropdown check successfully"
      );
    });
  }

  searchInLoanAccountName() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(laData.samity);
      cy.log("Successfully search in the Loan account proposal Management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan account proposal Management "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(laData.memberNameEn);
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

export const grid_loan_account_management = new LoanAccountManagement();
