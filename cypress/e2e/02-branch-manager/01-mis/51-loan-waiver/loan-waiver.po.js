import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanWaiver {
  test_data = Cypress.env("TEST_DATA");

  gridLoanWaiverListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-waiver");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.ADD_METHOD_FIRST).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REMOVE_METHOD_FIRST).click();
    cy.log(messages.ui.submitSuccess);
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);

  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

   createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
    });
  }

  createLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW, { timeout: 15000 })
        .should("be.visible")
        .click();
      cy.formController("samity_id")
        .should("be.visible")
        .type(lwData.selectSamity)
        .type("{enter}");
      cy.formController("member_id")
        .type(lwData.selectMember)
        .type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");

      cy.formController("waiver_type")
        .type(lwData.selectRebate)
        .type("{enter}");
      // cy.formController("rebate_amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      // cy.formController("amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.contains(lwData.messageSaveLoanRebate)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lwData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lwData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanWaivereName() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lwData.search);
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

export const create_loan_waiver = new LoanWaiver();
