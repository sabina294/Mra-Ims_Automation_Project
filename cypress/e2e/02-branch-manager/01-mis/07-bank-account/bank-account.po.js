class BankAccountCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankAccountListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-bank-account");
      cy.log("Successfully bank account list page.");
    });
  }

  createBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();

      var baData = data.branchManager.createBankAccountFrom;
      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank account");
    });
  }

  createWithoutBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");
      cy.formController("account_no").type(accNumber);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutAccType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_no").type(accNumber);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutAccNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");
      cy.imsId("btn-reset").click();

      var baData = data.branchManager.createBankAccountFrom;

      var randomNumber = Math.floor(1000 + Math.random() * 9000);
      var accNumber = baData.accNumber + "-" + randomNumber;

      cy.formController("bank_id").type(baData.bankName).type("{enter}");
      cy.formController("bank_branch_id")
        .type(baData.branchName)
        .type("{enter}");
      cy.formController("account_name_en").type(baData.accNameEn);
      cy.formController("account_name_bn").type(baData.accNameBn);
      cy.formController("account_type")
        .type(baData.accountType)
        .type("{enter}");

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank account without one mandatory field."
      );
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the area list page.");
  }

  viewBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.formController("search_text").type(baData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the bank account list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the bank account list page");

  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Bank account form Edit Mode toggled successfully");
  }

  editBankAccount() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(baData.accNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      // cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Bank Account updated successfully");
    });
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  editSubmitButton() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(baData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully updated bank account");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(baData.selectStatus).type("{enter}");
      cy.log("Bank account status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(baData.statusSelect).type("{enter}");
      cy.log("Bank account status active dropdown check successfully");
    });
  }

  searchInBankAccountName() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(baData.search);
      cy.log("Successfully search in the bank account");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the bank account "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("account_name_en").type(baData.search);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
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
      var baData = data.branchManager.createBankAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(baData.search);
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

export const create_bank_account = new BankAccountCreation();

