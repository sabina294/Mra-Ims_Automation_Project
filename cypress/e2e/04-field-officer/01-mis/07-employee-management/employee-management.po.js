import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class EmployeeManagement {
  test_data = Cypress.env("TEST_DATA");

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu1(COMMON.MENUS.EMPLOYEE);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.fieldOfficer.gridEmpMangFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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
      const emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.TURN_EDIT_MODE).click();

      cy.log(messages.ui.turnOnEditModeMessage);
    });
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

  editApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(emData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.fieldOfficer.gridEmpMangFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(emData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
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
    cy.imsId(COMMON.CHECKBOXES.ROW_3).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_3).click();
    cy.imsId(COMMON.BUTTONS.UNLOCK).click();
    cy.log(messages.ui.unlockSuccess);
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


  createDraftButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.fieldOfficer.gridEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  listBreadcrumbCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get("nz-breadcrumb, .ant-breadcrumb").should("be.visible")
      .and("contain.text", "Home").and("contain.text", "Employee")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  requiredGridColumnsCheck() {
    configurationGridChecks.columns([
      "#",
      "Employee ID",
      "Employee Name",
      "Office ID",
      "Office",
      "Gender",
      "Smart Card ID",
      "Marital Status",
      "Locked by",
      "Status",
      "Actions",
    ]);
  }

  gridRecordDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    // Employee has a leading checkbox column before the row number.
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .should(($rows) => {
        $rows.each((_, row) => {
          const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
          expect(cells.eq(1).text().trim()).to.match(/^\d+$/);
          [2, 3, 4, 5, 6].forEach((index) =>
            expect(cells.eq(index).text().trim()).not.to.equal(""));
          expect(["Active", "Inactive"]).to.include(cells.eq(10).text().trim());
        });
      });
    cy.log(messages.ui.recordStatusCheck);
  }

  partialNameSearchCheck() {
    cy.visit("/mfi-mis/employee/employee-management/list");
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first()
      .find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((name) => {
        const fullName = name.trim();
        expect(fullName.length, "name for partial search").to.be.greaterThan(1);
        const partialName = fullName.slice(0, Math.max(1, Math.floor(fullName.length / 2)));
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(partialName).blur();
        cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", partialName);
        cy.imsId(COMMON.BUTTONS.SEARCH).click();
        cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
          expect($rows.length, "matching records").to.be.greaterThan(0);
          $rows.each((index, row) => {
            const result = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(3).text().trim();
            expect(result.toLowerCase(), `row ${index + 1} name`)
              .to.include(partialName.toLowerCase());
          });
        });
      });
    cy.log(messages.ui.partialSearch);
  }

  noResultSearchCheck() {
    configurationGridChecks.noResult("EMPLOYEE");
  }

  resetRestoresGridCheck() {
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    cy.fixture(this.test_data).then((data) => {
      configurationGridChecks.activeFilter(data.fieldOfficer.gridEmpMangFrom.statusSelect, 10);
    });
  }

  nameAscendingSortCheck() {
    configurationGridChecks.sort("Employee Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    configurationGridChecks.sort("Employee Name", COMMON.SORT.DESCENDING);
  }

  firstPagePaginationCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    configurationGridChecks.pagination();
  }

  viewPageDataCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().then(($row) => {
      const cells = $row.find(COMMON.TABLE.VISIBLE_CELLS);
      const values = [3, 6, 10].map((index) => cells.eq(index).text().trim());
      const employeeId = cells.eq(2).text().trim();
      expect(employeeId, "Employee ID").not.to.equal("");
      cy.get(COMMON.TABLE.VISIBLE_ROWS)
        .filter((index, row) =>
          Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim() === employeeId
        )
        .first()
        .find(COMMON.TABLE.ACTION_TOGGLE)
        .click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.url().should("include", "/employee/employee-management/view/");
      cy.contains("Basic Information").should("be.visible");
      cy.get("nz-breadcrumb, .ant-breadcrumb").should("contain.text", "Home")
        .and("contain.text", "Employee").and("contain.text", "View");
      values.forEach((value) => {
        expect(value, "grid value to verify in Employee details").not.to.equal("");
        cy.contains(COMMON.PAGE.VISIBLE_ELEMENT, value).should("be.visible");
      });
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.url().should("include", "/employee/employee-management/list");
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

export const grid_employee_management = new EmployeeManagement();
