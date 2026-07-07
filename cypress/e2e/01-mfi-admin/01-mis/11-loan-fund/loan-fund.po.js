import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class LoanFundCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-fund");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATERESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutFundingOrganizationId() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATERESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutAmount() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATERESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(lfData.amount);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONVIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  turnOffEditMode() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.TURNEDITMODE).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
    cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
    cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
    cy.imsId(GRID.BUTTONS.RESET).click();
  }

  editSubmitButton() {
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.log(messages.ui.editSubmitMessage);

  }

  editGoBackButton() {
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(lfData.search);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.imsId(GRID.TOGGLES.ACTION_TOGGLE).first().click();
      cy.imsId(GRID.BUTTONS.ACTIONEDIT).click();
      cy.imsId(GRID.CREATE.CREATESUBMIT).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_YES).click();
      cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController("status").type(lfData.statusSelect).type("{enter}");
      cy.log(messages.ui.statusInactiveDropdownMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("status").type(lfData.statusSelect).type("{enter}");
      cy.log(messages.ui.statusActiveDropdownMessage);
    });
  }

  searchInLoanFundName() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(lfData.fundingOrgId);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(GRID.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetMessage);
  }

  gridRefreshButtonCheck() {
    cy.imsId(GRID.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);

  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(GRID.CREATE.ADD_NEW).click();
      cy.formController("loan_funding_organization_id").type(
        lfData.fundingOrgId
      );
      cy.imsId(GRID.CREATE.CREATERESET).click();
      cy.imsId(GRID.CREATE.CREATEGOBACK).click();
      cy.log(messages.ui.createResetMessage);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATESUBMIT).click();
    cy.imsId(GRID.CREATE.CONFIRMATION_OK).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.createValidationMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(GRID.CREATE.ADD_NEW).click();
    cy.imsId(GRID.CREATE.CREATEGOBACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId(GRID.BUTTONS.RESET).click();
      cy.formController(GRID.INPUTS.SEARCH_TEXT).type(lfData.search);
      cy.imsId(GRID.BUTTONS.SEARCH).click();
      cy.log(messages.ui.gridSearchSuccess);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(GRID.BUTTONS.PROFILE).click();
    cy.imsId(GRID.BUTTONS.LANGUAGECHANGE).click();
    cy.log(messages.ui.languageSwitchSuccess);
  }
}

export const create_loan_fund = new LoanFundCreation();
