import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class BankCreation {
  test_data = Cypress.env("TEST_DATA");

  gridBankListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.BANK);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutMandatoryFieldNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController("website").type(bankData.website);
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldWebsite() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldBankCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldBankShortCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryFieldStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(bankData.nameBn);
      cy.formController("website").type(bankData.website);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageSaveBa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutMandatoryAllField() {
    cy.fixture(this.test_data).then((data) => {
      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("bank_code").type(bankData.bankCode);
      cy.formController("bank_short_code").type(bankData.bankShortCode);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewBank() {
    cy.fixture(this.test_data).then((data) => {
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(bankData.nameBn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(bankData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(bankData.nameBn).and("be.visible");

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

  editBank() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(bankData.messageUpdateBa)
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
      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(bankData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const bankData = data.mraAdmin.createbankFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(bankData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInBankName() {
    cy.fixture(this.test_data).then((data) => {
      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(bankData.nameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  paginationCheck() {
    cy.get('[title="5"] > .ng-star-inserted').click();
    cy.log(messages.ui.actionMessage);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(bankData.nameEn);
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
      const bankData = data.mraAdmin.createbankFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(bankData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Bank");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Bank Name", "Bank Name (Bangla)", "Website", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(4, [1, 2, 3]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.createbankFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.createbankFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("BANK");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.createbankFrom.statusSelect, 4);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Bank Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Bank Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Bank", [1, 2, 3, 4]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(COMMON.INPUTS.NAME_EN, COMMON.INPUTS.NAME_BN, [
      "website", "bank_code", "bank_short_code",
    ]);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_bank = new BankCreation();
