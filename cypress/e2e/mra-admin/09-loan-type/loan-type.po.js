class LoanTypeCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanTypeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-type");
      cy.log("Successfully loan type list page.");
    });
  }

  createLoanType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(loanTData.messageSaveLoTy)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan type");
    });
  }

  viewLoanType() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("search_text").type(loanTData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(loanTData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(loanTData.nameBn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the loan type list page");
    });
  }

  editLoanType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.get("app-confirmation-modal")
        .contains(loanTData.messageUpdateLoTy)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Loan type updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(loanTData.selectStatus).type("{enter}");
      cy.log("Loan Type status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("status").type(loanTData.statusSelect).type("{enter}");
      cy.log("Loan Type status active dropdown check successfully");
    });
  }

  searchInLoanTypeName() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(loanTData.nameEn);
      cy.log("Successfully search in the Loan Type");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan Type "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(loanTData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_loan_type = new LoanTypeCreation();
