class EmployeeManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-employee", "submenu-employee-management");
      cy.log("Successfully Employee Management list page.");
    });
  }

  createEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId("btn-submit").and("be.visible");

      var emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.formController("name_bn").type(emData.employeeNameBn);
      cy.formController("date_of_birth").click();
      cy.contains("24").click();
      cy.formController("gender").click();
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("contactNo").type(emData.employeeMobileNo);
      cy.formController("tin_no").type(emData.tinNo);
      cy.get("#nz-tabs-0-tab-1").click();
      cy.formController("nid_number").type(emData.nidNumber);
      cy.get("#nz-tabs-0-tab-2").click();
      cy.formController("department_id")
        .type(emData.department)
        .type("{enter}");
      cy.formController("designation_id")
        .type(emData.designation)
        .type("{enter}");
      cy.get("#nz-tabs-0-tab-3").click();
      cy.formController("father_name_en").type(emData.fatherNameEn);
      cy.formController("mother_name_en").type(emData.motherNameEn);
      cy.get("#nz-tabs-0-tab-4").click();
      cy.formController("res_division_id")
        .type(emData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(emData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(emData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(emData.adressEn);
      cy.imsId("ck-box").click();
      cy.get("#nz-tabs-0-tab-5").click();
      cy.imsId("btn_photo_image_id").attachFile("employeePhoto.jpg");
      cy.wait(2000);
      cy.imsId("btn_nid_front_doc_id").attachFile("nidPhoto.jpg");
      cy.wait(2000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmployee)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created employee management");
    });
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;

      cy.formController("search_text").type(emData.employeeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the employee management list page");
    });
  }

  editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageUpdateEmployee)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Employee Management updated successfully");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(emData.selectStatus).type("{enter}");
      cy.log(
        "Employee Management form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("status").type(emData.statusSelect).type("{enter}");
      cy.log(
        "Employee Management form status active dropdown check successfully"
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.employeeNameEn);
      cy.log("Successfully search in the Employee Management form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Employee Management form "
    );
  }
  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_employee_management = new EmployeeManagementCreation();
