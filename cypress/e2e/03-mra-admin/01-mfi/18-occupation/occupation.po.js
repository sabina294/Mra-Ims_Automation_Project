import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class OccupationCreation {
  test_data = Cypress.env("TEST_DATA");

  gridOccupationListPage() {
    cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.OCCUPATION);
    cy.log(messages.ui.gridListMessage);
  }

  createOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(occupationData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageSaveOcc)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(occupationData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click()
      cy.imsId(COMMON.BUTTONS.RESET).click();;
      cy.formController(COMMON.INPUTS.NAME_EN).type(occupationData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(occupationData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_BN).type(occupationData.nameBn);
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

  viewOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi").contains(occupationData.nameEn).should("be.visible");
      cy.get("app-mra-mfi").contains(occupationData.nameBn).should("be.visible");

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

  editOccupation() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.YES).click();
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
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.NAME_EN).type(occupationData.nameEn);
      cy.formController(COMMON.INPUTS.NAME_BN).type(occupationData.nameBn);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(occupationData.status).type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();

      cy.get("app-confirmation-modal")
        .contains(occupationData.messageUpdateOcc)
        .should("be.visible");
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
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(occupationData.selectStatus).type("{enter}");

      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(occupationData.statusSelect).type("{enter}");

      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInOccupationName() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.nameEn);

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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const occupationData = data.mraAdmin.createoccupationFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController(COMMON.INPUTS.NAME_EN).type(occupationData.nameEn);
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
      const occupationData = data.mraAdmin.createoccupationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(occupationData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Occupation");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#", "Occupation Name", "Occupation Name (Bangla)", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(3, [1, 2]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.createoccupationFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.createoccupationFrom.nameEn.slice(0, 4));
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("OCCUPATION");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.createoccupationFrom.statusSelect, 3);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Occupation Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Occupation Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Occupation", [1, 2, 3]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(COMMON.INPUTS.NAME_EN, COMMON.INPUTS.NAME_BN, []);
  }

  createPageFieldsAndDefaultsCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
      .and("contain.text", "Configuration").and("contain.text", "Occupation")
      .and("contain.text", "Create");
    cy.formController(COMMON.INPUTS.NAME_EN).should("be.visible")
      .and("have.value", "").and("have.attr", "placeholder", "Enter occupation name");
    cy.formController(COMMON.INPUTS.NAME_BN).should("be.visible")
      .and("have.value", "").and("have.attr", "placeholder", "Enter Occupation name in Bangla");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).closest("nz-select")
      .should("contain.text", "Active");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible");
    cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/occupation/list");
  }

  editPrefilledValuesCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const nameEn = cells.eq(1).text().trim();
      const nameBn = cells.eq(2).text().trim();
      const status = cells.eq(3).text().trim();
      expect(nameEn).to.not.equal("");
      expect(nameBn).to.not.equal("");
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .contains(COMMON.TABLE.VISIBLE_CELLS, new RegExp(`^\\s*${Cypress._.escapeRegExp(nameEn)}\\s*$`))
        .closest("tr").find(COMMON.TABLE.ACTION_TOGGLE).click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Occupation")
        .and("contain.text", "Edit");
      cy.formController(COMMON.INPUTS.NAME_EN).should("have.value", nameEn).and("not.be.disabled");
      cy.formController(COMMON.INPUTS.NAME_BN).should("have.value", nameBn).and("not.be.disabled");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).closest("nz-select")
        .should("contain.text", status);
      cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.location("pathname").should("include", "/occupation/list");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();

    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_occupation = new OccupationCreation();
