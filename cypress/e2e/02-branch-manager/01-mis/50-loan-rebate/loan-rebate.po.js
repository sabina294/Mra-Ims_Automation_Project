import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanRebate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanRebateListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createValidationMessageCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.ADD_ICON_BUTTON_CAMEL).click();
    });
  }

  createRemoveIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.REMOVE_ICON_BUTTON_CAMEL).first().click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      // cy.formController("rebate_type")
      //   .type(lrData.selectRebate)
      //   .type("{enter}");
        cy.formController("rebate_type")
        .type(lrData.rebateType)
        .type("{enter}");
      cy.formController("rebate_amount").type(lrData.Amount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(lrData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
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
      const lrData = data.branchManager.createLoanRebateFrom;
        cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lrData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lrData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.branchManager.createLoanRebateFrom;
        cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
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
      const lrData = data.branchManager.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
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

export const create_loan_rebate = new LoanRebate();
