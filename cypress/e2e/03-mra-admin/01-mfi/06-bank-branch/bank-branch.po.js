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

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  createWithoutMandatoryFieldNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log(
        "Successful cannot creation bank branch without one mandatory field"
      );
    });
  }

  createWithoutMandatoryFieldNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }


  createWithoutMandatoryFieldBranchCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  createWithoutMandatoryFieldBank() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful cannot creation bank branch without mandatory field.");
    });
  }


  createWithoutMandatoryFieldWorkingDays() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }



  createWithoutMandatoryFieldDistrict() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }



  createWithoutMandatoryFieldBranchAdress() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }


  createWithoutMandatoryFieldAdressBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }


  createWithoutMandatoryFieldTelephoneNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }


  createWithoutMandatoryFieldFax() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }


  createWithoutMandatoryFieldRoutingNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  createWithoutMandatoryFieldSwiftCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("email").type(bankBData.email);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  createWithoutMandatoryFieldEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("date_of_opening").click();
      cy.contains("4").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  createWithoutMandatoryFieldDateOpening() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("name_en").type(bankBData.nameEn);
      cy.formController("name_bn").type(bankBData.nameBn);
      cy.formController("branch_code").type(bankBData.branchCode);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");
      cy.formController("working_days").type(bankBData.workingDays);
      cy.formController("address_en").type(bankBData.branchAdressEn);
      cy.formController("address_bn").type(bankBData.branchAdressBn);
      cy.formController("telephone").type(bankBData.telephoneNumber);
      cy.formController("fax").type(bankBData.faxNo);
      cy.formController("routing_number").type(bankBData.routingNo);
      cy.formController("swift_code").type(bankBData.swiftCode);
      cy.formController("email").type(bankBData.email);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created bank branch all field");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the bank branch list page.");
  }

  viewBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the bank branch list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the bank branch list page");

  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Bank branch form Edit Mode toggled successfully");
  }

  editBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(bankBData.messageUpdateBaB)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Bank branch updated successfully");
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

  paginationCheck() {
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log("Bank branch pagination check successfully");
  }

  selectBankDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("bank_id").type(bankBData.bank);
      cy.log("Successfully select bank in the Bank branch");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(bankBData.nameEn);
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
      var bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(bankBData.search);
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

export const create_bank_branch = new BankBranchCreation();
