import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ClientWelfareFund {
  test_data = Cypress.env("TEST_DATA");

  gridClientWelfareFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-client-welfare-fund");
      cy.log(messages.ui.gridListMessage);
    });
  }
  createClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("samity_id").type(wfData.selectSamity).type("{enter}");
      cy.formController("member_id").type(wfData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(wfData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("payment_mode")
        .type(wfData.selectPaymentMode)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("amount").type(wfData.inputAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  approveClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      const wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-client-welfare-fund").click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-authorize").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-loan-account", "submenu-client-welfare-fund");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      const wfData = data.branchManager.createClientWelfareFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(wfData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  searchInClientWelfareFundName() {
    cy.fixture(this.test_data).then((data) => {
      const wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(wfData.search);
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
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("samity_id").type(wfData.selectSamity).type("{enter}");
      cy.formController("member_id").type(wfData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(wfData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(wfData.search);
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

export const create_client_welfare_fund = new ClientWelfareFund();
