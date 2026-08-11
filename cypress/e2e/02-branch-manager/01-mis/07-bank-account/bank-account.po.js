import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class BankAccountCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankAccountListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-bank-account");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      const baData = data.branchManager.createBankAccountFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

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

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutAccType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_no").type(accNumber);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutAccNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
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

      const baData = data.branchManager.createBankAccountFrom;

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

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

  viewBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
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

  editBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.accNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editResetMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editSubmitMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(baData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(baData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInBankAccountName() {
    cy.fixture(this.test_data).then((data) => {
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.search);
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
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("account_name_en").type(baData.search);
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
      const baData = data.branchManager.createBankAccountFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(baData.search);
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

export const create_bank_account = new BankAccountCreation();

