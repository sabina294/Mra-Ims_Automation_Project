import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class Region {
  test_data = Cypress.env("TEST_DATA");

  gridRegionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.REGION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewRegion() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.branchManager.gridRegionFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
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
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.branchManager.gridRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(regData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.branchManager.gridRegionFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(regData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInRegionName() {
    cy.fixture(this.test_data).then((data) => {
      const regData = data.branchManager.gridRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.nameEn);
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
      const regData = data.branchManager.gridRegionFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(regData.search);
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
    configurationGridChecks.breadcrumb("Region");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#","Region Name (English)","Region Name (Bangla)","Region ID","Region Code","Status","Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(5, [1,3,4]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.branchManager.gridRegionFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.branchManager.gridRegionFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("REGION");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.branchManager.gridRegionFrom.statusSelect, 5);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Region Name (English)", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Region Name (English)", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Region", [1,2,3,4,5]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset("region_name_en", "region_name_bn", ["region_code"]);
  }
}

export const grid_region = new Region();
