class PaymentPeriodCreation {
  test_data = Cypress.env("TEST_DATA");

  gridPaymentPeriodListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-payment-period");
      cy.log("Successfully payment period list page.");
    });
  }

  createPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;

      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .should("be.visible");

      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment period");
    });
  }


  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;


      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment period without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment period all field");
    });
  }

  createWithoutDiscriptionEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful creation of payment period with all fields."
      );
    });
  }

  createWithoutDiscriptionBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment period all field");
    });
  }

  createWithoutPayId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment period without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment period without one mandatory field."
      );
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment period all field");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      var randomId = Math.floor(1000 + Math.random() * 9000);
      var randomCode = Math.floor(1000 + Math.random() * 9000);

      var PaymentPeriodId =
        payPerData.paymentPeriodId + "-" + randomId;

      var PaymentPeriodCode =
        payPerData.paymentPeriodCode + "-" + randomCode;

      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);
      cy.formController("payment_period_code").type(PaymentPeriodCode);


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment period without one mandatory field."
      );
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log(
        "Successful cannot creation payment period without mandatory field.."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the payment period list page."
    );
  }

  viewPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.formController("search_text").type(payPerData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the payment period list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the payment period list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Payment period form Edit Mode toggled successfully");
  }

  editPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-go-back").click();

      // cy.imsId("btn-submit").click();
      // cy.imsId("btn-yes").click();
  
      // cy.imsId("btn-ok").click();

      cy.log("Payment period updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click()
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully updated payment period");
    });
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(payPerData.selectStatus).type("{enter}");
      cy.log("Payment period status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.formController("status").type(payPerData.statusSelect).type("{enter}");
      cy.log("Payment period status active dropdown check successfully");
    });
  }

  searchInPaymentPeriodName() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(payPerData.nameEn);
      cy.log("Successfully search in the Payment period");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Payment period "
    );
  }

  paginationCheck() {
    cy.get('[title="2"] > .ng-star-inserted').click();
    cy.log("Payment period pagination check successfully");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(payPerData.nameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_payment_period = new PaymentPeriodCreation();
