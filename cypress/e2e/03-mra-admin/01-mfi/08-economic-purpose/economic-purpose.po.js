import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class EconomicPurposeCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEconomicPurposeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-economic-purpose");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageSaveEcPu)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutEcoPurCode() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutEcoPurNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutEcoPurNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutEcoPurSector() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutEcoPurActivity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutLendingCategory() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutEcoPurStatus() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(
        messages.ui.withoutDataMessage
      );
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ecoPurData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi")
        .contains(ecoPurData.economicPurposeCode)
        .and("be.visible");
      cy.get("app-mra-mfi").contains(ecoPurData.nameEn).and("be.visible");
      cy.get("app-mra-mfi").contains(ecoPurData.nameBn).and("be.visible");

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

  editEconomicPurpose() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageUpdateEcPu)
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

      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController("mra_code").type(ecoPurData.economicPurposeCode);
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(ecoPurData.nameBn);
      cy.formController("sector").type(ecoPurData.economicSector);
      cy.formController("econ_activity").type(ecoPurData.economicActivity);
      cy.formController("lending_category_id")
        .type(ecoPurData.lendingCategory)
        .type("{enter}");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ecoPurData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(ecoPurData.messageUpdateEcPu)
        .and("be.visible");
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
      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ecoPurData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(ecoPurData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInEconomicPurposetName() {
    cy.fixture(this.test_data).then((data) => {
      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ecoPurData.nameEn);
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(ecoPurData.nameEn);
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
        const ecoPurData = data.mraAdmin.createeconomicPurposeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(ecoPurData.search);
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

export const create_economic_purpose = new EconomicPurposeCreation();
