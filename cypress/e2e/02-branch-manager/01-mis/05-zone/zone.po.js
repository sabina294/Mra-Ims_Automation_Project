import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class Zone {
  test_data = Cypress.env("TEST_DATA");

  gridZoneListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.ZONE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewZone() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.branchManager.gridZoneFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      // cy.get("app-mfi-mis").contains(zoData.nameEn).and("be.visible");
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);

  }

  turnOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();

    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.
      log(messages.ui.editGoBackMessage);
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.branchManager.gridZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(zoData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.branchManager.gridZoneFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(zoData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInZoneName() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.branchManager.gridZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.nameEn);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const zoData = data.branchManager.gridZoneFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(zoData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.languageSwitchMessage);
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Zone");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#","Zone Name (English)","Zone Name (Bangla)","Region","Zone ID","Zone Code","Status","Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(6, [1,3,4,5]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.branchManager.gridZoneFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.branchManager.gridZoneFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("ZONE");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.branchManager.gridZoneFrom.statusSelect, 6);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Zone Name (English)", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Zone Name (English)", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Zone", [1,2,3,4,5,6]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset("zone_name_en", "zone_name_bn", ["region_id","zone_code"]);
  }
}

export const grid_zone = new Zone();
