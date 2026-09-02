import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class Area {
  test_data = Cypress.env("TEST_DATA");

  gridAreaListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.AREA);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewArea() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.branchManager.gridAreaFrom;
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
      const arData = data.branchManager.gridAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(arData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.branchManager.gridAreaFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(arData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInAreaName() {
    cy.fixture(this.test_data).then((data) => {
      const arData = data.branchManager.gridAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(arData.nameEn);
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
      const arData = data.branchManager.gridAreaFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(arData.search);
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
    configurationGridChecks.breadcrumb("Area");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns(["#","Area Name (English)","Area Name (Bangla)","Zone","Area ID","Area Code","Status","Actions"]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(6, [1,3,4,5]);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(data.branchManager.gridAreaFrom.nameEn, 1);
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(data.branchManager.gridAreaFrom.nameEn);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("AREA");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.branchManager.gridAreaFrom.statusSelect, 6);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Area Name (English)", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Area Name (English)", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Area", [1,2,3,4,5,6]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset("area_name_en", "area_name_bn", ["zone_id","area_code"]);
  }
}

export const grid_area = new Area();
