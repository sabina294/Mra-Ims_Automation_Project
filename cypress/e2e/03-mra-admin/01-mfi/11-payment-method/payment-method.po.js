import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class PaymentMethodCreation {
  test_data = Cypress.env("TEST_DATA");

  gridPaymentMethodListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.PAYMENT_METHOD);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
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

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutDiscriptionEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
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

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutPayId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
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

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
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

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);

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
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(payMetData.nameBn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
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

  viewPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(payMetData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(payMetData.nameEn).and("be.visible");
      cy.get("app-mra-mfi")
        .contains(payMetData.descriptionEn)
        .and("be.visible");

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

  editPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.get("app-confirmation-modal")
        .contains(payMetData.messageUpdatePaMe)
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
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      const randomNumber = Math.floor(1000 + Math.random() * 9000);
      const payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(payMetData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageUpdatePaMe)
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
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(payMetData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(payMetData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInPaymentMethodName() {
    cy.fixture(this.test_data).then((data) => {
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(payMetData.nameEn);
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
      const payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(payMetData.nameEn);
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

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Payment Method");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Payment Method Name", "Payment Method Description", "Payment Method Id", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(4, [1, 2, 3]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.createpaymentMethodFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.createpaymentMethodFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("PAYMENT_METHOD");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.createpaymentMethodFrom.statusSelect, 4);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Payment Method Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Payment Method Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(COMMON.INPUTS.NAME_EN, COMMON.INPUTS.NAME_BN, [
      "description_en", "description_bn", "pay_method_id",
    ]);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_payment_method = new PaymentMethodCreation();
