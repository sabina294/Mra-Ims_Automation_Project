import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.submitSuccess);
    });

  }

  createAddIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("loan-input-0").clear().type(lpData.inputLoanAccount);
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.imsId("add-icon-button").click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("remove-icon-button").first().click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("loan-input-0").clear().type(lpData.inputLoanAccount).type("{enter}");
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.formController("amount").type(lpData.inputAmount);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  gridActionUnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.log("Successfully grid unsubmitted the Loan penalty list page");
    });
  }

  gridActionUnsubmittedGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log("Successfully viewed go back the Loan penalty list page");
    });
  }

  UnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.imsId("btn-unsubmit").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully unsubmitted the Loan penalty list page");
    });
  }

  editDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editSaveButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId("btn-save").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  gridActionSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.imsId("btn-unsubmit").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-table-action-submit").click();
      cy.log("Successfully submitted the Loan penalty list page");
    });
  }

  submittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-save").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully submitted the Loan penalty list page");
    });
  }


  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log("Loan penalty status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log("Loan penalty status approved dropdown check successfully");
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
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
      const lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.samity);
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

export const create_loan_penalty = new LoanPenalty();
