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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.INPUTS.LOAN_FIRST).clear().type(lpData.inputLoanAccount);
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.imsId(COMMON.BUTTONS.ADD_ICON_BUTTON_KEBAB).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createRemoveIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.REMOVE_ICON_BUTTON_KEBAB).first().click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }


  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId(COMMON.INPUTS.LOAN_FIRST).clear().type(lpData.inputLoanAccount).type("{enter}");
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  gridActionUnsubmittedGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.goBackSuccess);
    });
  }

  UnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  editDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editSaveButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SAVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  gridActionSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_UNSUBMIT).click();
      cy.imsId(COMMON.BUTTONS.UNSUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_SUBMIT).click();
      cy.log(messages.form.submitSuccess);
    });
  }

  submittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.SAVE).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.form.submitSuccess);
    });
  }


  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(messages.ui.approveSuccess);
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      const lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.samityNameEn);
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
