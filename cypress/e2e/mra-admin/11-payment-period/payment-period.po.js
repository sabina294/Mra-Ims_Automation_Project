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
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var PaymentPeriodId = payPerData.PaymentPeriodId + "-" + randomNumber;

      cy.formController("name_en").type(payPerData.nameEn);
      cy.formController("name_bn").type(payPerData.nameBn);
      cy.formController("description_en").type(payPerData.descriptionEn);
      cy.formController("description_bn").type(payPerData.descriptionBn);
      cy.formController("payment_period_id").type(PaymentPeriodId);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(payPerData.messageSavePaPe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created payment period");
    });
  }

  viewPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.formController("search_text").type(payPerData.nameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(payPerData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(payPerData.nameBn).and("be.visible");
      cy.get("app-mra-mfi")
        .contains(payPerData.descriptionBn)
        .and("be.visible");
      cy.get("app-mra-mfi")
        .contains(payPerData.descriptionEn)
        .and("be.visible");
      cy.get("app-mra-mfi")
        .contains(payPerData.PaymentPeriodId)
        .and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the payment period list page");
    });
  }

  editPaymentPeriod() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      var payPerData = data.mraAdmin.createpaymentPeriodFrom;
      cy.get("app-confirmation-modal")
        .contains(payPerData.messageUpdatePaPe)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Payment period updated successfully");
    });
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
}

export const create_payment_period = new PaymentPeriodCreation();
