class BankCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-bank");
      cy.log("Successfully bank list page.");
    });
  }

  createBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var bankData = data.mraAdmin.createbankFrom;
      cy.formController("name_en").type(bankData.nameEn);
      cy.formController("name_bn").type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank");
    });
  }

  viewBank() {
    cy.fixture(this.test_data).then((data) => {
      var bankData = data.mraAdmin.createbankFrom;
      cy.formController("search_text").type(bankData.nameBn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mra-mfi").contains(bankData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(bankData.nameBn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the bank list page");
    });
  }

  editBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var bankData = data.mraAdmin.createbankFrom;
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageUpdateBa)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Bank updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var bankData = data.mraAdmin.createbankFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(bankData.selectStatus).type("{enter}");
      cy.log("Bank status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var bankData = data.mraAdmin.createbankFrom;
      cy.formController("status").type(bankData.statusSelect).type("{enter}");
      cy.log("Bank status active dropdown check successfully");
    });
  }

  searchInBankName() {
    cy.fixture(this.test_data).then((data) => {
      var bankData = data.mraAdmin.createbankFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(bankData.nameEn);
      cy.log("Successfully search in the Bank");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log("successfully refresh page  displayed the grid list of the Bank ");
  }
}

export const create_bank = new BankCreation();
