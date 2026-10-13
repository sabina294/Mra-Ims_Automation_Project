import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";
import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";

class EmployeeManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.formController("emp_name_en").type(emData.empNameEn);
      cy.formController("emp_name_bn").type(emData.empNameBn);
      cy.formController("date_of_birth").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.formController("gender").click();
      cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click();
      cy.formController("contactNo").type(emData.empMobileNo);
      cy.formController("emailAddress").first().clear().type(emData.email);
      cy.get('#nz-tabs-1-tab-1').click();
      cy.formController("nid_number").type(emData.nidNumber);
      cy.get('#nz-tabs-1-tab-2').click();
      cy.formController("office_id").type(emData.office).type("{enter}");
      cy.formController("department_id")
        .type(emData.department)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("empl_designation_id")
        .type(emData.designation)
        .type("{enter}");
      cy.wait(2000);

      cy.get("#nz-tabs-1-tab-3").click();
      cy.formController("father_name_en").type(emData.fatherNameEn);
      cy.formController("mother_name_en").type(emData.motherNameEn);
      cy.get("#nz-tabs-1-tab-4").click();
      cy.formController("res_division_id")
        .type(emData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(emData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(emData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(emData.adressEn);
      cy.imsId(COMMON.CHECKBOXES.GENERIC).click();
      cy.get("#nz-tabs-1-tab-5").click();
      cy.imsId(COMMON.UPLOADS.PHOTO).attachFile("employeePhoto1.jpg");
      cy.wait(1000);
      cy.imsId(COMMON.UPLOADS.NID_FRONT).attachFile("nidPront1.jpg");
      cy.wait(1000);
      cy.imsId(COMMON.UPLOADS.NID_BACK).attachFile("nidBack1.jpg");
      cy.wait(1000);
      cy.imsId(COMMON.UPLOADS.TIN).attachFile("tinDocImg1.jpg");
      cy.wait(1000);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmp)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskMenuEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_EMPLOYEE_MANAGEMENT).click();
      cy.log(messages.ui.taskCompleted);
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
      const emData = data.mfiAdmin.approveEmployeeFrom;
      cy.formController("office_id").type(emData.OfficeDropdown).type("{enter}");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.officeSelected);

    });
  }

  myTaskSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.approveEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchSuccess);
    });
  }

  approveEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.APPROVE_CAPITALIZED).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu(COMMON.MENUS.EMPLOYEE, COMMON.MENUS.EMPLOYEE_MANAGEMENT);
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  profileViewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.empNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_PROFILE).click();
      cy.log(messages.ui.profileViewSuccess);
    });
  }

  profileViewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.profileGoBackSuccess);
  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.form.resetSuccess);

    });
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
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

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.editMessage);
    });
  }

  gridOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.formController("office_id").type(emData.office).type("{enter}");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.officeDropdownMessage);
    });
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(emData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(emData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
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
    cy.log(messages.ui.gridRefreshSuccess
    );
  }

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_6).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridCheckboxSelected);
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_6).click();
    cy.imsId(COMMON.BUTTONS.UNLOCK).click();
    cy.log(messages.ui.unlockSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("emp_name_en").type(emData.empNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mfiAdmin.createEmpMangFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  openListForChecks() {
    cy.visit("/mfi-mis/employee/employee-management/list");
    cy.location("pathname").should("eq", "/mfi-mis/employee/employee-management/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true });
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Employee Management", ["Employee"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Employee ID", "Employee Name", "Office ID", "Office", "Gender", "Smart Card ID", "Marital Status", "Locked by", "Status", "Actions"]);
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "employee records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(3).text().trim(), "employee name").not.to.equal("");
        [2, 4, 5].forEach((index) => expect(cells.eq(index).text().trim(), `column ${index}`).not.to.equal(""));
        expect(["Active", "Inactive"]).to.include(cells.eq(10).text().trim());
      });
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  exactNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(3).invoke("text").then((text) => {
      const name = text.trim();
      expect(name).not.to.equal("");
      configurationGridChecks.exactSearch(name, 3);
    });
  }

  partialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find("td").eq(3).invoke("text").then((text) => {
      const name = text.trim();
      expect(name).not.to.equal("");
      configurationGridChecks.partialSearch(name);
    });
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_EMPLOYEE");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    configurationGridChecks.reset();
  }

  activeStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "active employees").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).find("td").eq(10).text().trim()).to.equal("Active");
      });
    });
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

  firstPagePaginationCheck() {
    this.openListForChecks();
    configurationGridChecks.pagination();
  }

  searchControlsCheck() {
    this.openListForChecks();
    ["office_id", COMMON.INPUTS.STATUS_DROPDOWN, "blood_group"].forEach((control) => {
      cy.formController(control).should("be.visible");
    });
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
  }

  assertRecordsOrEmpty(expectedStatus) {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find(COMMON.TABLE.VISIBLE_ROW);
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find(COMMON.TABLE.VISIBLE_CELLS);
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        [2, 3, 4, 5].forEach((index) => {
          expect(cells.eq(index).text().trim(), `required column ${index}`).not.to.equal("");
        });
        const status = cells.eq(10).text().trim();
        if (expectedStatus) expect(status, "filtered employee status").to.equal(expectedStatus);
        else expect(["Active", "Inactive"]).to.include(status);
      });
    });
  }

  recordsOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).should("be.visible").click();
    cy.location("pathname").should("eq", "/mfi-mis/employee/employee-management/list");
    this.assertRecordsOrEmpty();
  }

  employeeIdSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().find(COMMON.TABLE.VISIBLE_CELLS).eq(2)
      .invoke("text").then((text) => {
        const employeeId = text.trim();
        expect(employeeId, "employee ID to search").not.to.equal("");
        configurationGridChecks.exactSearch(employeeId, 2);
      });
  }

  inactiveStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Inactive").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    this.assertRecordsOrEmpty("Inactive");
  }

  paginationOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find(COMMON.TABLE.VISIBLE_ROW).length) {
        configurationGridChecks.pagination();
      } else {
        cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
      }
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_employee_management = new EmployeeManagementCreation();
