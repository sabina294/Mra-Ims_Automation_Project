import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class ThanaCreation {
  test_data = Cypress.env("TEST_DATA");

  gridThanaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.THANA);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createThana() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutUpazilaCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutPostalCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutWebsite() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutUpazilaType() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutDistrict() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(upaData.messageSaveUpa)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
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

  viewThana() {
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
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

  editThana() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      const upaData = data.mraAdmin.createthanaFrom;
      cy.get("app-confirmation-modal")
        .contains(upaData.messageUpdateUpa)
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

      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(upaData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
      cy.formController("upazila_code").type(upaData.upaCode);
      cy.formController("postal_code").type(upaData.postCode);
      cy.formController("website").type(upaData.webSite);
      cy.formController("district_oid").type(upaData.district).type("{enter}");
      cy.formController("type").type(upaData.upaType).type("{enter}");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(upaData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
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
      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(upaData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const upaData = data.mraAdmin.createthanaFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(upaData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInThanaName() {
    cy.fixture(this.test_data).then((data) => {
      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(upaData.nameEn);
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
      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(upaData.nameBn);
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
      const upaData = data.mraAdmin.createthanaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(upaData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_thana = new ThanaCreation();
