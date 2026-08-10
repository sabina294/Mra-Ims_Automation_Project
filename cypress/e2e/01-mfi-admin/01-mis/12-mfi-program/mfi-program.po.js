import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class MfiProgramCreation {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-mfi-program");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageSaveMfiProgram)
        .and("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutShortName() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutFundingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");
      cy.imsId(COMMON.BUTTONS.RESET).click();

      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.formController("mfi_program_short_name").type(mpData.programShortName);
      cy.formController("funding_category")
        .type(mpData.fundingCategory)
        .type("{enter}");
      cy.formController("loan_fund_ids").type(mpData.loanFund).type("{enter}");
      cy.get("body").click(0, 0);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.programNameEn);
      // cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  turnOffEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editMfiProgram() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.YES).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);

  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(mpData.messageUpdateMfiProgram)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(mpData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.formController("status").type(mpData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.programNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("mfi_program_name_en").type(mpData.programNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.mfiAdmin.createMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_mfi_program = new MfiProgramCreation();
