import messages from "../constants/messages";
import { COMMON } from "../constants/selectors";

export const configurationGridChecks = {
  breadcrumb(label) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Configuration")
      .and("contain.text", label).and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  },

  columns(columns) {
    columns.forEach((column) => {
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, column).should("be.visible");
    });
    cy.log(messages.ui.gridColumns);
  },

  records(statusIndex, requiredIndexes) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
      cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).then(($cells) => {
        expect($cells.eq(0).text().trim()).to.match(/^\d+$/);
        requiredIndexes.forEach((index) => expect($cells.eq(index).text().trim()).to.not.equal(""));
        expect(["Active", "Inactive"]).to.include($cells.eq(statusIndex).text().trim());
      });
    });
    cy.log(messages.ui.recordStatusCheck);
  },

  exactSearch(name, nameIndex) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(name);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    // Requery the rows on retry while search results replace the grid DOM.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "matching rows").to.be.greaterThan(0);
      $rows.each((index, row) => {
        expect(
          Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(nameIndex).text().trim(),
          `row ${index + 1} name`
        ).to.contain(name);
      });
    });
    cy.log(messages.ui.exactSearchCheck);
  },

  partialSearch(name) {
    const partialName = name.split(" ")[0];
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(partialName);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    // Requery all rows on retry when search replaces the grid DOM.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "matching rows").to.be.greaterThan(0);
      $rows.each((index, row) => {
        expect(Cypress.$(row).text(), `row ${index + 1} search result`)
          .to.contain(partialName);
      });
    });
    cy.log(messages.ui.partialSearch);
  },

  noResult(label) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(`${label}_THAT_DOES_NOT_EXIST_98765`);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
    cy.contains("No Data").should("be.visible");
    cy.log(messages.ui.searchNoResult);
  },

  reset() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.log(messages.ui.clearSearch);
  },

  activeFilter(activeStatus, statusIndex) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(activeStatus).type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
      cy.wrap($row).find(COMMON.TABLE.VISIBLE_CELLS).eq(statusIndex).should("contain.text", activeStatus);
    });
    cy.log(messages.ui.dropdownActiveMessage);
  },

  sort(header, direction) {
    if (direction === COMMON.SORT.ASCENDING) cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, header).click().should(($header) => {
      const ariaSort = $header.attr(COMMON.SORT.ATTRIBUTE) === direction;
      const icon = direction === COMMON.SORT.ASCENDING ? COMMON.SORT.ASCENDING_ICON : COMMON.SORT.DESCENDING_ICON;
      expect(ariaSort || $header.find(icon).length > 0).to.equal(true);
    });
    cy.log(direction === COMMON.SORT.ASCENDING ? messages.ui.ascendingSort : messages.ui.descendingSort);
  },

  pagination() {
    cy.get(COMMON.PAGINATION.CONTAINER).should("be.visible");
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should("have.class", COMMON.PAGINATION.DISABLED_CLASS);
    cy.get(COMMON.PAGINATION.PAGE_SIZE_SELECT).should("be.visible");
    cy.log(messages.ui.pagination);
  },

  view(label, valueIndexes) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = valueIndexes.map((index) => cells.eq(index).text().trim()).filter(Boolean);
      const recordKey = cells.eq(valueIndexes[0]).text().trim();
      expect(recordKey, "record identifier for View navigation").to.not.equal("");
      // Reset can replace the captured row. Requery the same record so both
      // the click and the expected View values refer to that record.
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .contains(COMMON.TABLE.VISIBLE_CELLS, new RegExp(`^\\s*${Cypress._.escapeRegExp(recordKey)}\\s*$`))
        .closest("tr")
        .find(COMMON.TABLE.ACTION_TOGGLE)
        .click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
        .and("contain.text", "Configuration").and("contain.text", label).and("contain.text", "View");
      values.forEach((value) => cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible"));
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    });
    cy.log(messages.ui.viewMessage);
  },

  editReset(nameEnControl, nameBnControl, extraControls = []) {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
    cy.formController(nameEnControl).should("be.visible").and("not.be.disabled")
      .clear().type("Unsaved Configuration Name");
    cy.formController(nameBnControl).should("be.visible").and("not.be.disabled");
    extraControls.forEach((control) => cy.formController(control).should("be.visible"));
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(nameEnControl).should("have.value", "");
    cy.formController(nameBnControl).should("have.value", "");
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.get(COMMON.TABLE.BODY).should("be.visible");
    cy.log(messages.ui.editResetMessage);
  },
};
