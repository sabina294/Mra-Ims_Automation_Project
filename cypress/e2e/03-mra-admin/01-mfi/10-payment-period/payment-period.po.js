import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class PaymentPeriodCreation {
  test_data = Cypress.env("TEST_DATA");

  gridPaymentPeriodListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-payment-period");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;

      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .should("be.visible");

      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }


  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;


      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

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

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutDiscriptionEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutDiscriptionBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutPayId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

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

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      const PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      const PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


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
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
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

  viewPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(payPerData.nameEn);
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

  editPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.YES).click();
  
      // cy.imsId(COMMON.CONFIRMATION.OK).click();

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
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click()
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

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
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(payPerData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.formController("status").type(payPerData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInPaymentPeriodName() {
    cy.fixture(this.test_data).then((data) => {
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(payPerData.nameEn);
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

  paginationCheck() {
    cy.get('[title="2"] > .ng-star-inserted').click();
    cy.log("Payment period pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(payPerData.nameEn);
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
      const payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(payPerData.search);
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

export const create_payment_period = new PaymentPeriodCreation();
