import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class StagingData {
  test_data = Cypress.env("TEST_DATA");

  gridStagingDataListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.PROCESS, COMMON.MENUS.STAGING_DATA);
      cy.log(messages.ui.gridListMessage);
    });
  }

  selectFieldOfficer() {
      cy.fixture(this.test_data).then((data) => {
        const sdData = data.fieldOfficer.gridStagingData;
        cy.formController("field_officer_id").type(sdData.selectFieldOfficer).type("{enter}");
      });
    cy.log(messages.ui.gridListMessage);
  }

  selectSamity() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.fieldOfficer.gridStagingData;
      cy.formController("samity_id").type(sdData.selectSamity).type("{enter}");
      cy.log(messages.ui.gridListMessage);
    });
  }

  refreshButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const clickCount = 2; // change this number as needed
      for (let i = 0; i < clickCount; i++) {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.wait(1000); // optional wait between clicks
      }
      cy.log(messages.ui.refreshSuccess);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/process/staging-data/list");
    cy.location("pathname").should("eq", "/mfi-mis/process/staging-data/list");
    cy.get(COMMON.TABLE.HEAD).should("be.visible");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Process")
      .and("contain.text", "Staging Data").and("contain.text", "List");
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Samity ID", "Samity Name", "Field Officer ID", "Field Officer Name", "Total Members", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "staging records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "row number").to.match(/^\d+$/);
        [1, 2, 3, 4, 6].forEach((index) => {
          expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal("");
        });
      });
    });
  }

  memberCountCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0).each(($row) => {
      const count = $row.find(COMMON.TABLE.VISIBLE_CELLS).eq(5).text().trim();
      expect(count, "total members is a non-negative integer").to.match(/^\d+$/);
    });
  }

  submitGridSearch(value) {
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear();
    if (value) {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(value, { parseSpecialCharSequences: false });
    }
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
  }

  clearSearchRestoresGridCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(1)
      .invoke("text").then((recordKey) => {
        this.submitGridSearch("NO_MATCH_987654321");
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
        this.submitGridSearch("");
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
        cy.get(COMMON.TABLE.VISIBLE_ROWS).contains(COMMON.TABLE.VISIBLE_CELLS,
          new RegExp(`^\\s*${Cypress._.escapeRegExp(recordKey.trim())}\\s*$`))
          .should("be.visible");
      });
  }

  refreshRetainsListCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
  }

  ascendingSortCheck() {
    this.sortColumnCheck(COMMON.SORT.ASCENDING);
  }

  descendingSortCheck() {
    this.sortColumnCheck(COMMON.SORT.DESCENDING);
  }

  sortColumnCheck(direction) {
    this.openListForChecks();
    // A fresh page has no user-selected sort. Establish ascending first.
    cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, "Samity Name").click();
    if (direction === COMMON.SORT.DESCENDING) {
      cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, "Samity Name").click();
    }
    cy.get(COMMON.TABLE.HEAD).contains(COMMON.TABLE.HEADER_CELL, "Samity Name")
      .should(($header) => {
        const icon = direction === COMMON.SORT.ASCENDING
          ? COMMON.SORT.ASCENDING_ICON : COMMON.SORT.DESCENDING_ICON;
        expect($header.attr(COMMON.SORT.ATTRIBUTE) === direction
          || $header.find(icon).length > 0, `${direction} sort indicator`).to.equal(true);
      });
  }

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_staging_data = new StagingData();
