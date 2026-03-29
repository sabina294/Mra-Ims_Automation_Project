class PaymentMethodCreation {
  test_data = Cypress.env("TEST_DATA");

  gridPaymentMethodListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-payment-method");
      cy.log("Successfully payment method list page.");
    });
  }

  createPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment method");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment method without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment method all field");
    });
  }

  createWithoutDiscriptionEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment method without one mandatory field."
      );
    });
  }

  createWithoutDiscriptionBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment method all field");
    });
  }

  createWithoutPayId() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment method without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment method without one mandatory field."
      );
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageSavePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment method all field");
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.formController("pay_method_id").type(payMethodId);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation payment method without one mandatory field."
      );
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_bn").type(payMetData.nameBn);
      cy.formController("description_bn").type(payMetData.descriptionBn);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log(
        "Successful cannot creation payment method without mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the payment method list page."
    );
  }

  viewPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.formController("search_text").type(payMetData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(payMetData.nameEn).and("be.visible");
      cy.get("app-mra-mfi")
        .contains(payMetData.descriptionEn)
        .and("be.visible");

      cy.log("Successfully viewed the payment method list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the payment method list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Payment method form Edit Mode toggled successfully");
  }

  editPaymentMethod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.get("app-confirmation-modal")
        .contains(payMetData.messageUpdatePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Payment method updated successfully");
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
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var payMethodId = payMetData.PaymentMethodId + "-" + randomNumber;

      cy.formController("name_en").type(payMetData.nameEn);
      cy.formController("description_en").type(payMetData.descriptionEn);
      cy.formController("pay_method_id").type(payMethodId);
      cy.formController("status").type(payMetData.status).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payMetData.messageUpdatePaMe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully updated payment method");
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
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(payMetData.selectStatus).type("{enter}");
      cy.log("Payment method status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.formController("status").type(payMetData.statusSelect).type("{enter}");
      cy.log("Payment method status active dropdown check successfully");
    });
  }

  searchInPaymentMethodName() {
    cy.fixture(this.test_data).then((data) => {
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(payMetData.nameEn);
      cy.log("Successfully search in the Payment method");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Payment method "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payMetData = data.mraAdmin.createpaymentMethodFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(payMetData.nameEn);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(payPerData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_payment_method = new PaymentMethodCreation();
