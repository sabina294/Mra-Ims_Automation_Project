class BankBranchCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankBranchListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-bank-branch");
      cy.log("Successfully bank branch list page.");
    });
  }

  createBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId("btn-submit").and("be.visible");

      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch");
    });
  }

  viewBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the bank branch list page");
    });
  }

  editBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(bankBData.messageUpdateBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Bank branch updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(bankBData.selectStatus).type("{enter}");
      cy.log("Bank branch status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("status").type(bankBData.statusSelect).type("{enter}");
      cy.log("Bank branch status active dropdown check successfully");
    });
  }

  searchInBankBranchName() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(bankBData.nameEn);
      cy.log("Successfully search in the Bank branch");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Bank branch "
    );
  }

  selectBankDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("bank_id").type(bankBData.bank);
      cy.log("Successfully select bank in the Bank branch");
    });
  }
}

export const create_bank_branch = new BankBranchCreation();
