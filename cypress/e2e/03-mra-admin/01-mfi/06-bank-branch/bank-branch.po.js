import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class BankBranchCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankBranchListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.BANK_BRANCH);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController("bank_oid").type(bankBData.bank).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutMandatoryFieldNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutMandatoryFieldNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldBranchCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldBank() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldWorkingDays() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }



  createWithoutMandatoryFieldDistrict() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }



  createWithoutMandatoryFieldBranchAdress() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldAdressBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldTelephoneNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldFax() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryFieldRoutingNumber() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldSwiftCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldEmail() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldDateOpening() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankBData.nameBn);
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(bankBData.messageSaveBaB)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewBankBranch() {
    cy.fixture(this.test_data).then((data) => {
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

  editBankBranch() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankBData.messageUpdateBaB)
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

  editGoBackButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(bankBData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(bankBData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInBankBranchName() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(bankBData.nameEn);
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
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log(messages.ui.actionMessage);
  }

  selectBankDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.formController("bank_id").type(bankBData.bank);
      cy.log(messages.ui.actionMessage);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankBData.nameEn);
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
      const bankBData = data.mraAdmin.createbankbranchFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(bankBData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Bank Branch");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Bank Branch Name (English)", "Bank Branch Name (Bangla)", "Routing Number", "Address", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(5, [1]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.createbankbranchFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.createbankbranchFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("BANK_BRANCH");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.createbankbranchFrom.statusSelect, 5);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Bank Branch Name (English)", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Bank Branch Name (English)", COMMON.SORT.DESCENDING);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_bank_branch = new BankBranchCreation();
