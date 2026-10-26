import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class EmployeeTermination {
    test_data = Cypress.env("TEST_DATA");

    gridEmployeeTerminationListPage() {
        cy.fixture(this.test_data).then((data) => {
            cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_TERMINATION);
            cy.log(messages.ui.gridListMessage);
        });
    }

    createEmployeeTermination() {
        this.openListForChecks();
        cy.fixture(this.test_data).then((data) => {
            const employee = data.mfiAdmin.gridEmpTerminationFrom.search;
            expect(employee, "employee to submit for termination")
                .to.be.a("string").and.not.be.empty;
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(employee);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            // Retry the complete query while search results replace the grid.
            cy.get(COMMON.TABLE.VISIBLE_ROWS).filter((_, row) => {
                return Cypress.$(row).children("td").eq(2).text().trim() === employee;
            }).should("have.length", 1)
                .find(`[data-ims-id='${COMMON.GRID.ACTION_TERMINATION}']`)
                .should("be.visible").and("be.enabled").click();
            cy.imsId(COMMON.BUTTONS.SUBMIT)
                .should("be.visible").and("be.enabled").click();
            cy.imsId(COMMON.CONFIRMATION.YES)
                .should("be.visible").and("be.enabled").click();
            cy.imsId(COMMON.CONFIRMATION.OK).should("be.visible").click();
            cy.get("nz-breadcrumb, .ant-breadcrumb")
                .should("be.visible").and("contain.text", "Employee Termination");
            cy.log(messages.ui.submitSuccess);
        });
    }

    terminationGoBackButton() {
        cy.imsId(COMMON.GRID.ACTION_TERMINATION)
            .not(":disabled")
            .first()
            .click();

        // ensure view page loaded
        cy.url().should("include", "employee-termination/view");

        cy.imsId(COMMON.BUTTONS.GO_BACK).click();

        cy.log(messages.ui.goBackSuccess);
    }

    myTaskMenuEmployeeTermination() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.mfiAdmin.gridEmpTerminationFrom;
            cy.imsId(COMMON.MENUS.MY_TASK).click();
            cy.imsId(COMMON.MENUS.AWAITING_EMPLOYEE_TERMINATION).click();
            cy.log(messages.ui.actionMessage);
        });
    }

    myTaskResetButtonCheck() {
        cy.imsId(COMMON.BUTTONS.RESET).click();
        cy.log(messages.ui.resetSuccess);
    }

    myTaskRefreshButtonCheck() {
        cy.imsId(COMMON.BUTTONS.REFRESH).click();
        cy.log(messages.ui.refreshSuccess);
    }

    myTaskOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.mfiAdmin.approveEmployeeTerminationFrom;
            cy.formController("office_id").type(etData.OfficeDropdown).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.officeDropdownMessage);
        });
    }

    approveNewEmployeeTermination() {
        cy.imsId(COMMON.TOGGLES.ACTION).first().click();
        cy.imsId(COMMON.GRID.ACTION_VIEW).first().click();
        cy.imsId(COMMON.BUTTONS.LOCK).click();
        cy.imsId(COMMON.BUTTONS.APPROVE).click();
        cy.imsId(COMMON.BUTTONS.SUBMIT).click();
        cy.imsId(COMMON.CONFIRMATION.OK).click();
        cy.log(messages.ui.approveSuccess);
    }

     gridOfficeDropdownCheck() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.mfiAdmin.gridEmpTerminationFrom;
            cy.formController("office_id").type(etData.officeDropdown).type("{enter}");
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.log(messages.ui.officeDropdownMessage);
        });
    }
    
    searchInEmployeeName() {
        cy.fixture(this.test_data).then((data) => {
            const etData = data.mfiAdmin.gridEmpTerminationFrom;
            cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_TERMINATION);
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(etData.search);
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
            const etData = data.mfiAdmin.gridEmpTerminationFrom;
            cy.imsId(COMMON.BUTTONS.RESET).click();
            cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(etData.search);
            cy.imsId(COMMON.BUTTONS.SEARCH).click();
            cy.log(messages.ui.searchMessage);
        });
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

  openListForChecks() {
    cy.visit("/mfi-mis/employee/employee-termination/list");
    cy.location("pathname").should("eq", "/mfi-mis/employee/employee-termination/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Employee Termination", ["Employee"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Employee ID", "Employee Name", "Smart Card ID", "Gender", "Locked by", "Status", "Actions"]);
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(0).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(1).text().trim(), "employee ID").not.to.equal("");
        expect(cells.eq(2).text().trim(), "employee name").not.to.equal("");
        expect(cells.eq(6).text().trim(), "status").not.to.equal("");
      });
    });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    [COMMON.BUTTONS.SEARCH, COMMON.BUTTONS.RESET, COMMON.BUTTONS.REFRESH].forEach((button) => {
      cy.imsId(button).should("be.visible").and("be.enabled");
    });
  }

  nameSearchCheck(partial = false) {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
      // An empty termination list is valid; use the fixture name to exercise search.
      if (!rows.length) {
        cy.fixture(this.test_data).then((data) => {
          const name = data.mfiAdmin.gridEmpTerminationFrom.search;
          cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(partial ? name.split(" ")[0] : name);
          cy.imsId(COMMON.BUTTONS.SEARCH).click();
          cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length", 0);
          cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
        });
        return;
      }
      const name = rows.first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2).text().trim();
      if (partial) configurationGridChecks.partialSearch(name);
      else configurationGridChecks.exactSearch(name, 2);
    });
  }

  exactNameSearchCheck() {
    this.nameSearchCheck();
  }

  partialNameSearchCheck() {
    this.nameSearchCheck(true);
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("MFI_EMPLOYEE_TERMINATION");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/employee/employee-termination/list");
    this.assertRecordsOrEmpty();
  }

  nameAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Employee Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Employee Name", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Employee Name", COMMON.SORT.DESCENDING);
  }

  paginationOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find(COMMON.TABLE.VISIBLE_ROW).length) configurationGridChecks.pagination();
      else cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
    });
  }

  employeeIdSearchCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
      if (!rows.length) {
        configurationGridChecks.noResult("MFI_TERMINATION_EMPLOYEE_ID");
        return;
      }
      const employeeId = rows.first().find(COMMON.TABLE.VISIBLE_CELLS).eq(1).text().trim();
      configurationGridChecks.exactSearch(employeeId, 1);
    });
  }

    gridLanguageSwitchCheck() {
        cy.imsId(COMMON.BUTTONS.PROFILE).click();
        cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
        cy.log(messages.ui.languageSwitchMessage);
    }
}

export const grid_employee_termination = new EmployeeTermination();
