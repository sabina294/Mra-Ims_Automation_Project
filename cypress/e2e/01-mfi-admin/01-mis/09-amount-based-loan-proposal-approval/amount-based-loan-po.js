class AmountBasedLoanProposalApprovalCreation {
  test_data = Cypress.env("TEST_DATA");

  gridAmountBasedLoanListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-configuration",
        "submenu-amount-based-loan-proposal-approval"
      );
      cy.log("Successfully amount based loan list page.");
    });
  }

  createAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(ablpaData.messageSaveAmountBasedLoan)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created amount based loan");
    });
  }

  createWitoutOfficeTypeId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation amount based loan without one mandatory field."
      );
    });
  }

  createWithoutRole() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation amount based loan without one mandatory field."
      );
    });
  }

  createWithoutMiniLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation amount based loan without one mandatory field."
      );
    });
  }

  createWithoutMaxiLoanAmount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation amount based loan without one mandatory field."
      );
    });
  }

  createWithoutremarks() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(ablpaData.messageSaveAmountBasedLoan)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created amount based loan");
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation amount based loan without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the area list page.");
  }

  viewAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("search_text").type(ablpaData.roleName);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      // cy.get("app-mfi-mis").contains(ablpaData.maxLoanAmount).and("be.visible");
      cy.log("Successfully viewed the amount based loan list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the amount based loan list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Amount Based Loan form Edit Mode toggled successfully");
  }

  editAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      // var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      // cy.get("app-confirmation-modal")
      //   .contains(ablpaData.messageUpdateAmountBasedLoan)
      //   .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Amount based loan updated successfully");
    });
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;

      cy.formController("office_type_id")
        .type(ablpaData.officeTypeId)
        .type("{enter}");
      cy.formController("role_id").type(ablpaData.roleName).type("{enter}");
      cy.formController("min_loan_amount").type(ablpaData.minLoanAmount);
      cy.formController("max_loan_amount").type(ablpaData.maxLoanAmount);
      cy.formController("status").type(ablpaData.status).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(ablpaData.messageSaveAmountBasedLoan)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created amount based loan");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(ablpaData.selectStatus).type("{enter}");
      cy.log("Amount based loan status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.formController("status").type(ablpaData.statusSelect).type("{enter}");
      cy.log("Amount based loan status active dropdown check successfully");
    });
  }

  searchInRoleName() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(ablpaData.roleName);
      cy.log("Successfully search in the amount based loan");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the amount based loan "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.mfiAdmin.createAmountBasedLoanFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("office_type_id").type(ablpaData.officeTypeId);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
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

export const create_amount_based_loan =
  new AmountBasedLoanProposalApprovalCreation();
