import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class MaritalStatusCreation {
  test_data = Cypress.env("TEST_DATA");

  // ---------------- List Page ----------------
  gridMaritalStatusListPage() {
    cy.fixture(this.test_data).then(() => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.MARITAL_STATUS);
      cy.log(messages.ui.gridListMessage);
    });
  }

  // ---------------- Create Marital Status ----------------
  createMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageSaveMalSt)
        .should("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      // intentionally not selecting status
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOneMandatoryField() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
      // leave other mandatory fields empty
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  // ---------------- Action Button ----------------
  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  // ---------------- View Marital Status ----------------
  viewMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(maritalStatusData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameEn)
        .should("be.visible");
      cy.get("app-mra-mfi")
        .contains(maritalStatusData.nameBn)
        .should("be.visible");

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  // ---------------- Edit Marital Status ----------------
  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click(); // toggle edit mode
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editMaritalStatus() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageUpdateMaSt)
        .should("be.visible");
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
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;

      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController("description_en").type(maritalStatusData.nameEn);
      cy.formController("description_bn").type(maritalStatusData.nameBn);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(maritalStatusData.status)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      cy.get("app-confirmation-modal")
        .contains(maritalStatusData.messageUpdateMaSt)
        .should("be.visible");
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

  // ---------------- Filter / Search ----------------
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(maritalStatusData.selectStatus)
        .type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(maritalStatusData.statusSelect)
        .type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMaritalStatusName() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(maritalStatusData.nameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  // ---------------- Grid Operations ----------------
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  // ---------------- Create Form Operations ----------------
  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("description_en").type(maritalStatusData.nameEn);
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
      const maritalStatusData = data.mraAdmin.createmaritalstatusFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(maritalStatusData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  // ---------------- Language Switch ----------------
  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Marital Status");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#", "Marital Status Name", "Marital Status Name (Bangla)", "Marital Status Id", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(4, [1, 2, 3]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.mraAdmin.createmaritalstatusFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.mraAdmin.createmaritalstatusFrom.nameEn.slice(0, 4));
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("MARITAL_STATUS");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.mraAdmin.createmaritalstatusFrom.statusSelect, 4);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Marital Status Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Marital Status Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Marital Status", [1, 2, 3, 4]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset("description_en", "description_bn", []);
  }

  createPageFieldsAndDefaultsCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
      .and("contain.text", "Configuration").and("contain.text", "Marital Status")
      .and("contain.text", "Create");
    cy.formController("description_en").should("be.visible")
      .and("have.value", "").and("have.attr", "placeholder", "Enter Gender name");
    cy.formController("description_bn").should("be.visible")
      .and("have.value", "").and("have.attr", "placeholder", "Enter Marital Status name in Bangla");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).closest("nz-select")
      .should("contain.text", "Active");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible");
    cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.location("pathname").should("include", "/marital-status/list");
  }

  editPrefilledValuesCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const nameEn = cells.eq(1).text().trim();
      const nameBn = cells.eq(2).text().trim();
      const status = cells.eq(4).text().trim();
      expect(nameEn).to.not.equal("");
      expect(nameBn).to.not.equal("");
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .contains(COMMON.TABLE.VISIBLE_CELLS, new RegExp(`^\\s*${Cypress._.escapeRegExp(nameEn)}\\s*$`))
        .closest("tr").find(COMMON.TABLE.ACTION_TOGGLE).click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Marital Status")
        .and("contain.text", "View");
      cy.formController("description_en").should("have.value", nameEn).and("not.be.disabled");
      cy.formController("description_bn").should("have.value", nameBn).and("not.be.disabled");
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).closest("nz-select")
        .should("contain.text", status);
      cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.location("pathname").should("include", "/marital-status/list");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_marital_status = new MaritalStatusCreation();
