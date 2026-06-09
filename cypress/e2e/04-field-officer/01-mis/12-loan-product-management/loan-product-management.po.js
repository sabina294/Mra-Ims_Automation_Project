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
      cy.imsId("btn-search").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the loan product management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully viewed go back the loan product management list page");

  }

  turnOnEditMode() {
    cy.imsId("btn-reset").click();
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();

    cy.log("loan product Management form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.loanProductFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.loanProductNameEn);
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

export const grid_loan_product_management = new LoanProductManagement();
