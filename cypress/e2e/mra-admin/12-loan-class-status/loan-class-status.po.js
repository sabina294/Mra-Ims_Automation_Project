class LoanClassStatusCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanClassStatusListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-class-status");
      cy.log("Successfully loan class status list page.");
    });
  }

  createLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageSaveLoClSt)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan class status");
    });
  }

  viewLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.formController("search_text").type(loanClasStaData.loanClassNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi")
        .contains(loanClasStaData.loanClassId)
        .and("be.visible");
      cy.get("app-mra-mfi")
        .contains(loanClasStaData.description)
        .and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the loan class status list page");
    });
  }

  editLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageUpdateLoClSt)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Loan class status updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status")
        .type(loanClasStaData.selectStatus)
        .type("{enter}");
      cy.log("loan class status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.formController("status")
        .type(loanClasStaData.statusSelect)
        .type("{enter}");
      cy.log("loan class status active dropdown check successfully");
    });
  }

  searchInPaymentMethodName() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(loanClasStaData.loanClassId);
      cy.log("Successfully search in the loan class status");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the loan class status "
    );
  }

   createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageSaveLoClSt)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan class status all field");
    });
  }

   createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      
     cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful cannot creation loan class status without one mandatory field");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
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

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log(
        "Successful cannot creation loan class status without mandatory field."
      );
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_loan_class_status = new LoanClassStatusCreation();
