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
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
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

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }


  createLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("rebate_type").type(lrData.rebateType).type("{enter}");
      // cy.formController("rebate_amount").type(lrData.rebatetAmount);
      cy.formController("amount").type(lrData.inputAmount);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(lrData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  addGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log("Successfully go back button check.");
    });
  }


  approveLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-loan-rebate").click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-authorize").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(lrData.approveMessage)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully approved the loan rebate");
    });
  }

  actionButtonCheck() {
    // cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.viewMessage);
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(lrData.selectStatus).type("{enter}");
      cy.log(
        "loan rebate status submitted dropdown check successfully"
      );
    });
  }
  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("status").type(lrData.statusSelect).type("{enter}");
      cy.log(
        "loan rebate status approved dropdown check successfully"
      );
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(lrData.search);
      cy.log(messages.ui.searchMessage);
    });
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("office_id").type(lrData.office).type("{enter}");
      cy.log("Successfully select office in the samity management");
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

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("addIconButton").click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  createRemoveIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      const lrData = data.mfiAdmin.createLoanRebateFrom;

      cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("addIconButton").click({ multiple: true });
      // ✅ click first remove icon
      cy.imsId("removeIconButton").first().click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const lrData = data.mfiAdmin.createLoanRebateFrom;
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
