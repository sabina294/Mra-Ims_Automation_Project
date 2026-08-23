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
  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      // cy.imsId(COMMON.BUTTONS.SUBMIT).and('be.visible');

      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("amount").type(lpData.inputAmount);
      // cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageSaveLoanPenalty)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  approveLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_LOAN_PENALTY).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.AUTHORIZE_SHORT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(lpData.approveMessage)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  editLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageUpdateLoanPenalty)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.log(messages.ui.editMessage);
    });
  }


  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.selectStatus).type("{enter}");
      cy.log(messages.ui.actionMessage);
    });
  }
  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(lpData.statusSelect).type("{enter}");
      cy.log(messages.ui.approveSuccess);
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
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
      const lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lpData.search);
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
