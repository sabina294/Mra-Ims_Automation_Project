import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class Department {
  test_data = Cypress.env("TEST_DATA");

  gridDepartmentListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.DEPARTMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewDepartment() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.goBackSuccess);
    });
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
      const depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.fieldOfficer.gridDepartmentFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(depData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDepartmentName() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.nameEn);
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
      const depData = data.fieldOfficer.gridDepartmentFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(depData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Department");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Department Name", "Department Name (Bangla)", "Department Id", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(4, [1, 3]);
  }

  exactDepartmentSearchCheck() {
    this.departmentNameSearchCheck(false);
  }

  partialDepartmentSearchCheck() {
    this.departmentNameSearchCheck(true);
  }

  departmentNameSearchCheck(partial) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Use an existing department; fixture names may not exist in this environment.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS).eq(1)
      .should(($cell) => {
        expect($cell.text().trim().length, "department name length")
          .to.be.greaterThan(partial ? 1 : 0);
      })
      .then(($cell) => {
        const name = $cell.text().trim();
        const searchText = partial ? name.slice(0, Math.ceil(name.length / 2)) : name;
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(searchText);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        // Retry against fresh rows while the search updates the grid.
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
          const names = [...$rows].map((row) =>
            Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(1).text().trim()
          );
          expect(names, "search includes the selected department").to.include(name);
          names.forEach((result) => {
            expect(result, "matching department name").to.contain(searchText);
          });
        });
      });
    cy.log(partial ? messages.ui.partialSearch : messages.ui.exactSearchCheck);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("DEPARTMENT");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.fieldOfficer.gridDepartmentFrom.statusSelect, 4);
    });
  }

  departmentNameAscendingSortCheck() {
    configurationGridChecks.sort("Department Name", COMMON.SORT.ASCENDING);
  }

  departmentNameDescendingSortCheck() {
    configurationGridChecks.sort("Department Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Department", [1, 2, 3, 4]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(COMMON.INPUTS.NAME_EN, COMMON.INPUTS.NAME_BN);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_department = new Department();
