class MfiProgramCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-mfi-program");
      cy.log("Successfully mfi program list page.");
    });
  }

  createMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created mfi program");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi program without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created mfi program");
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi program without one mandatory field."
      );
    });
  }

  createWithoutFundingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi program without one mandatory field."
      );
    });
  }

  createWithoutLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.imsId("btn-submit").click();

      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi program without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation mfi program without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the mfi program list page.");
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("search_text").type(mpData.programNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(mpData.programNameEn).and("be.visible");
      cy.log("Successfully viewed the mfi program list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the mfi program list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Mfi program form Edit Mode toggled successfully");
  }

  editMfiProgram() {
    cy.imsId("btn-reset").click();
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-yes").click();
    cy.imsId("btn-ok").click();
    cy.log("MFI program updated successfully");

  }

  editResetButton() {
    cy.imsId("btn-reset").click();
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageUpdateMfiProgram)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully updated mfi program");
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
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mpData.selectStatus).type("{enter}");
      cy.log("Mfi program status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("status").type(mpData.statusSelect).type("{enter}");
      cy.log("Mfi program status active dropdown check successfully");
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mpData.programNameEn);
      cy.log("Successfully search in the mfi program");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the mfi program "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
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

export const create_mfi_program = new MfiProgramCreation();
