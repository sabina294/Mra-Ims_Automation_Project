import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class Designation {
  test_data = Cypress.env("TEST_DATA");

  gridDesignationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.CONFIGURATION, COMMON.MENUS.DESIGNATION);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewDesignation() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.branchManager.gridDesignationFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      // cy.get("app-mfi-mis").contains(desData.nameEn).and("be.visible");
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
      const desData = data.branchManager.gridDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.branchManager.gridDesignationFrom;

      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(desData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInDesignationName() {
    cy.fixture(this.test_data).then((data) => {
      const desData = data.branchManager.gridDesignationFrom;

      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.nameEn);
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
      const desData = data.branchManager.gridDesignationFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(desData.search);
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
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb")
      .should("be.visible")
      .and("contain.text", "Home")
      .and("contain.text", "Configuration")
      .and("contain.text", "Designation")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  requiredGridColumnsCheck() {
    const requiredColumns = [
      "#",
      "Designation Id",
      "Designation Name",
      "Designation Name (Bangla)",
      "Designation Short Name",
      "Status",
      "Actions",
    ];

    requiredColumns.forEach((column) => {
      cy.get(COMMON.TABLE.HEAD)
        .contains(COMMON.TABLE.HEADER_CELL, column)
        .should("be.visible");
    });
    cy.log(messages.ui.gridColumns);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS)
      .should("have.length.greaterThan", 0)
      .each(($row) => {
        cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).then(($cells) => {
          expect($cells.eq(0).text().trim()).to.match(/^\d+$/);
          expect($cells.eq(1).text().trim()).to.not.equal("");
          expect($cells.eq(2).text().trim()).to.not.equal("");
          expect(["Active", "Inactive"]).to.include($cells.eq(5).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  exactDesignationSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      const designationName = data.branchManager.gridDesignationFrom.nameEn;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(designationName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0)
        .each(($row) => {
          cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
            .should("contain.text", designationName);
        });
      cy.log(messages.ui.exactSearchCheck);
    });
  }

  partialDesignationSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      const partialName = data.branchManager.gridDesignationFrom.nameEn.split(" ")[0];
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(partialName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0)
        .each(($row) => cy.wrap($row).should("contain.text", partialName));
      cy.log(messages.ui.partialSearch);
    });
  }

  noResultSearchCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT)
      .type("DESIGNATION_THAT_DOES_NOT_EXIST_98765");
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
    cy.contains("No Data").should("be.visible");
    cy.log(messages.ui.searchNoResult);
  }

  resetRestoresGridCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.log(messages.ui.clearSearch);
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      const activeStatus = data.branchManager.gridDesignationFrom.statusSelect;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN)
        .type(activeStatus)
        .type(COMMON.KEYS.ENTER);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .should("have.length.greaterThan", 0)
        .each(($row) => {
          cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).eq(5)
            .should("contain.text", activeStatus);
        });
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  designationNameAscendingSortCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.HEAD)
      .contains(COMMON.TABLE.HEADER_CELL, "Designation Name")
      .click()
      .should(($header) => {
        const ascending = $header.attr(COMMON.SORT.ATTRIBUTE) === COMMON.SORT.ASCENDING;
        const activeIcon = $header.find(COMMON.SORT.ASCENDING_ICON).length > 0;
        expect(ascending || activeIcon).to.equal(true);
      });
    cy.log(messages.ui.ascendingSort);
  }

  designationNameDescendingSortCheck() {
    cy.get(COMMON.TABLE.HEAD)
      .contains(COMMON.TABLE.HEADER_CELL, "Designation Name")
      .click()
      .should(($header) => {
        const descending = $header.attr(COMMON.SORT.ATTRIBUTE) === COMMON.SORT.DESCENDING;
        const activeIcon = $header.find(COMMON.SORT.DESCENDING_ICON).length > 0;
        expect(descending || activeIcon).to.equal(true);
      });
    cy.log(messages.ui.descendingSort);
  }

  firstPagePaginationCheck() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE)
      .should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  viewPageDataAndBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const expectedValues = [
        cells.eq(1).text().trim(),
        cells.eq(2).text().trim(),
        cells.eq(3).text().trim(),
        cells.eq(4).text().trim(),
        cells.eq(5).text().trim(),
      ].filter(Boolean);

      cy.wrap($row).find(COMMON.TABLE.ACTION_TOGGLE).click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.get("nz-breadcrumb, .ant-breadcrumb")
        .should("contain.text", "Home")
        .and("contain.text", "Configuration")
        .and("contain.text", "Designation")
        .and("contain.text", "View");
      expectedValues.forEach((value) => {
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
    cy.log(messages.ui.viewMessage);
  }

  editModeFieldsAndResetCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN)
      .should("be.visible")
      .and("not.be.disabled")
      .clear()
      .type("Unsaved Branch Designation");
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN)
      .should("be.visible")
      .and("not.be.disabled");
    cy.formController(COMMON.INPUTS.DESIGNATION_SHORT_NAME).should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");

    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_EN).should("have.value", "");
    cy.formController(COMMON.INPUTS.DESIGNATION_NAME_BN).should("have.value", "");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.editResetMessage);
  }
}

export const grid_designation = new Designation();
