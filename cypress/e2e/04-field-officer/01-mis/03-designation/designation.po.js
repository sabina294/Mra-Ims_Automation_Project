import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class Designation {
  test_data = Cypress.env("TEST_DATA");

  gridDesignationListPage() {
    this.openDesignationListPage();
    cy.log(messages.ui.gridListMessage);
  }

  openDesignationListPage() {
    const submenu = `[data-ims-id='${COMMON.MENUS.DESIGNATION}']`;
    // selectMenu always toggles Configuration, which closes an already open menu.
    cy.get("body").then(($body) => {
      if (!$body.find(submenu).is(":visible")) {
        cy.imsId(COMMON.MENUS.CONFIGURATION).click();
      }
    });
    cy.imsId(COMMON.MENUS.DESIGNATION).should("be.visible").click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      const depData = data.fieldOfficer.gridDesignationFrom;
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

  openDesignationEditPage() {
    this.openDesignationListPage();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.ACTION_TOGGLE).click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
      .should("be.visible").and("not.be.disabled");
    cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.visible");
  }

  turnOnEditMode() {
    this.openDesignationEditPage();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    // View mode may hide the button while retaining it in the DOM.
    cy.imsId(COMMON.BUTTONS.SUBMIT).should("not.be.visible");
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
      .should("be.visible").and("not.be.disabled");
    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editResetButton() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editSubmitButton() {
    // Reload persisted values instead of submitting the form cleared by Reset.
    this.openDesignationEditPage();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
      .invoke("val").should("not.be.empty");
    cy.imsId(COMMON.BUTTONS.SUBMIT).should("be.enabled").click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    this.openDesignationEditPage();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.fieldOfficer.gridDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.fieldOfficer.gridDesignationFrom;

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDesignationName() {
    this.designationNameSearchCheck(false);
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    this.openDesignationListPage();
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.get("nz-breadcrumb, .ant-breadcrumb")
      .should("contain.text", "Designation").and("contain.text", "List");
    cy.log(messages.ui.gridRefreshSuccess);
  }

  gridSearchButtonCheck() {
    this.designationNameSearchCheck(false);
    cy.get("nz-breadcrumb, .ant-breadcrumb")
      .should("contain.text", "Designation").and("contain.text", "List");
  }

  listBreadcrumbCheck() {
    configurationGridChecks.breadcrumb("Designation");
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Designation Id", "Designation Name", "Designation Name (Bangla)",
      "Designation Short Name", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    configurationGridChecks.records(5, [1, 2]);
  }

  exactDesignationSearchCheck() {
    this.designationNameSearchCheck(false);
  }

  partialDesignationSearchCheck() {
    this.designationNameSearchCheck(true);
  }

  designationNameSearchCheck(partial) {
    this.openDesignationListPage();
    // Use an existing designation; fixture names may not exist in this environment.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
      .should(($cell) => {
        expect($cell.text().trim().length, "designation name length")
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
            Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim()
          );
          expect(names, "search includes the selected designation").to.include(name);
          names.forEach((result) => {
            expect(result, "matching designation name").to.contain(searchText);
          });
        });
      });
    cy.log(partial ? messages.ui.partialSearch : messages.ui.exactSearchCheck);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("DESIGNATION");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.fieldOfficer.gridDesignationFrom.statusSelect, 5);
    });
  }

  designationNameAscendingSortCheck() {
    configurationGridChecks.sort("Designation Name", COMMON.SORT.ASCENDING);
  }

  designationNameDescendingSortCheck() {
    configurationGridChecks.sort("Designation Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    configurationGridChecks.pagination();
  }

  viewPageDataAndBreadcrumbCheck() {
    configurationGridChecks.view("Designation", [1, 2, 3, 4, 5]);
  }

  editModeFieldsAndResetCheck() {
    configurationGridChecks.editReset(COMMON.INPUTS.DESIGNATION_NAME_EN, COMMON.INPUTS.DESIGNATION_NAME_BN, [
      COMMON.INPUTS.DESIGNATION_SHORT_NAME,
    ]);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_designation = new Designation();
