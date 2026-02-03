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

  createWithoutloanTypeNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  createWithoutloanTypeNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  createWithoutloanTypeId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  createWithoutProductId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  createWithoutDescription() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type without one mandatory field."
      );
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation loan type  without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan type list page.");
  }

  viewLoanType() {
    cy.fixture(this.test_data).then((data) => {
      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("search_text").type(loanTData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(loanTData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(loanTData.nameBn).and("be.visible");

      cy.log("Successfully viewed the loan type list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the loan type list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Loan Type form Edit Mode toggled successfully");
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

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      var loanTData = data.mraAdmin.createloanTypeFrom;
      cy.formController("name_en").type(loanTData.nameEn);
      cy.formController("name_bn").type(loanTData.nameBn);
      cy.formController("loan_type_id").type(loanTData.loanTypeId);
      cy.formController("product_nature_id").type(loanTData.productNatureId);
      cy.formController("description").type(loanTData.loanTypeDescription);
      cy.formController("status").type(loanTData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(loanTData.messageUpdateLoTy)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated loan type");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
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
    cy.log("Successful switch bangla language check.");
  }
}

export const create_loan_type = new LoanTypeCreation();
