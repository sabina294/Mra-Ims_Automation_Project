import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class OfficeGrid {
  test_data = Cypress.env("TEST_DATA");

  gridOfficePage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1(COMMON.MENUS.OFFICE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewOffice() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOnEditMode() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

      cy.log(messages.ui.turnOnEditModeMessage);
    });
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();
      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(omData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInOfficeManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.officeNameEn);
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

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }


  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const omData = data.fieldOfficer.gridOfficeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(omData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Office")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#", "Office ID", "Company Office ID", "Name", "Type", "Program",
      "Locked by", "Status", "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Office has a leading checkbox column before the row number.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .should(($rows) => {
        $rows.each((_, row) => {
          const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
          expect(cells.eq(1).text().trim()).to.match(/^\d+$/);
          [2, 4, 5].forEach((index) =>
            expect(cells.eq(index).text().trim()).not.to.equal(""));
          expect(["Active", "Inactive"]).to.include(cells.eq(8).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  partialNameSearchCheck() {
    cy.fixture(this.test_data).then((data) => {
      const partialName = data.fieldOfficer.gridOfficeFrom.officeNameEn.trim().split(/\s+/)[0];
      // Start with a fresh list rather than racing the previous Reset request.
      cy.visit("/mfi-mis/office/office-management/list");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .should("be.visible")
        .clear()
        .type(partialName)
        .blur();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", partialName);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
        expect($rows.length, "matching offices").to.be.greaterThan(0);
        $rows.each((index, row) => {
          const officeName = Cypress.$(row)
            .find(COMMON.TABLE.VISIBLE_CELLS).eq(4).text().trim();
          expect(officeName.toLowerCase(), `row ${index + 1} office name`)
            .to.include(partialName.toLowerCase());
        });
      });
      cy.log(messages.ui.partialSearch);
    });
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("OFFICE");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.fieldOfficer.gridOfficeFrom.statusSelect, 8);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  viewPageDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = [4, 5, 8].map((index) => cells.eq(index).text().trim());
      const officeId = cells.eq(2).text().trim();
      expect(officeId, "Office ID").not.to.equal("");
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .filter((index, row) =>
          Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim() === officeId
        )
        .first()
        .find(COMMON.TABLE.ACTION_TOGGLE)
        .click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      // Office uses a detail page without the Configuration View breadcrumb.
      cy.url().should("include", "/office/office-management/view/");
      cy.contains("Basic Information").should("be.visible");
      values.forEach((value) => {
        expect(value, "grid value to verify in Office details").not.to.equal("");
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.url().should("include", "/office/office-management/list");
      cy.get(COMMON.TABLE.BODY).should("be.visible");
    });
    cy.log(messages.ui.viewMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const grid_office = new OfficeGrid();
