import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
class MfiProgram {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.MFI_PROGRAM);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.branchManager.gridMfiProgramFrom;
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
      const mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mpData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.branchManager.gridMfiProgramFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(mpData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.programNameEn);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(mpData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("MFI Program");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "MFI Program Id", "Name English", "Name Bangla", "Short Name",
      "Funding Category", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .should("have.length.greaterThan", 0)
      .first()
      .within(() => {
        [1, 2, 4, 5].forEach((index) => {
          cy.get(COMMON.TABLE.VISIBLE_CELLS)
            .eq(index)
            .invoke("text")
            .then((value) => expect(value.trim()).to.not.equal(""));
        });
        cy.get(COMMON.TABLE.VISIBLE_CELLS)
          .eq(6)
          .invoke("text")
          .then((status) => {
            expect(["Active", "Inactive"]).to.include(status.trim());
          });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  exactNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.exactSearch(
        data.branchManager.gridMfiProgramFrom.programNameEn,
        2
      );
    });
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.partialSearch(
        data.branchManager.gridMfiProgramFrom.programNameEn
      );
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("MFI_PROGRAM");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(
        data.branchManager.gridMfiProgramFrom.statusSelect,
        6
      );
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Name English", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Name English", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("MFI Program", [1, 2, 3, 4, 5, 6]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(
      "mfi_program_name_en",
      "mfi_program_name_bn",
      ["mfi_program_short_name", "funding_category", "loan_fund_ids"]
    );
  }
}

export const grid_mfi_program = new MfiProgram();
