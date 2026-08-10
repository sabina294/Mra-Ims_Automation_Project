import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanClassStatusCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanClassStatusListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-class-status");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageSaveLoClSt)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageSaveLoClSt)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutLoanId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutLoanNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutLoanNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageSaveLoClSt)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutDescription() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutLoanStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
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
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loanClasStaData.loanClassNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editLoanClassStatus() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageUpdateLoClSt)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

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

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const loanClassId = loanClasStaData.loanClassId + "-" + randomNumber;

      cy.formController("loan_class_status_id").type(loanClassId);
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
      cy.formController("name_bn").type(loanClasStaData.loanClassNameBn);
      cy.formController("description").type(loanClasStaData.description);
      cy.formController("status").type(loanClasStaData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(loanClasStaData.messageUpdateLoClSt)
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
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status")
        .type(loanClasStaData.selectStatus)
        .type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.formController("status")
        .type(loanClasStaData.statusSelect)
        .type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInLoanClassId() {
    cy.fixture(this.test_data).then((data) => {
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loanClasStaData.loanClassId);
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
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(loanClasStaData.loanClassNameEn);
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
      const loanClasStaData = data.mraAdmin.createloanClassStatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(loanClasStaData.search);
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

export const create_loan_class_status = new LoanClassStatusCreation();
