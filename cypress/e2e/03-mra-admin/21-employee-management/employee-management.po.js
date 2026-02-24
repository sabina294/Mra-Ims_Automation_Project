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
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.formController("name_bn").type(emData.employeeNameBn);
      cy.formController("date_of_birth").click();
      cy.contains("24").click({ force: true });
      cy.formController("gender").click();
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("tin_no").type(emData.tinNo);

      cy.formController("contactNo").type(emData.employeeMobileNo);
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
      cy.imsId("btn_photo_image_id").attachFile("employeePhoto1.jpg");
      cy.wait(1000);
      cy.imsId("btn_nid_front_doc_id").attachFile("nidPront1.jpg");
      cy.wait(1000);
      cy.imsId("btn_nid_back_doc_id").attachFile("nidBack1.jpg");
      cy.wait(1000);
      cy.imsId("btn_tin_doc_id").attachFile("tinDocImg1.jpg");
      cy.wait(1000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmployee)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created employee management");
    });
  }

  approveEmployee() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-employee-management").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-Approve").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve employee management");
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();

      var emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.formController("name_bn").type(emData.employeeNameBn);
      cy.formController("date_of_birth").click();
      cy.contains("24").click();
      cy.formController("blood_group").type(emData.bloodGroup).type("{enter}");
      cy.formController("marital_status")
        .type(emData.maritalStatus)
        .type("{enter}");
      cy.formController("gender").click();
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("religion").type(emData.religion).type("{enter}");
      cy.formController("academic_qualification")
        .type(emData.academicQualification)
        .type("{enter}");
      cy.formController("tin_no").type(emData.tinNo);
      cy.formController("contactNo").type(emData.employeeMobileNo);
      cy.formController("emailAddress").type(emData.personalMail);
      cy.get("#nz-tabs-0-tab-1").click();
      cy.formController("nid_number").type(emData.nidNumber);
      cy.formController("nid_issue_date").click();
      cy.contains("24").click();
      cy.formController("birth_reg_no").type(emData.birthRegNo);
      cy.formController("birth_issue_date").click();
      cy.contains("24").click();
      cy.formController("passport_no").type(emData.passportNo);
      cy.formController("passport_issue_date").click();
      cy.contains("24").click();
      cy.formController("passport_expiration_date").click();
      cy.contains("24").click();
      cy.formController("driving_license_no").type(emData.drivingLicNo);
      cy.formController("other_doc_name").type(emData.otherDocName);
      cy.formController("other_id_no").type(emData.otherId);
      cy.get("#nz-tabs-0-tab-2").click();
      cy.formController("department_id")
        .type(emData.department)
        .type("{enter}");
      cy.formController("designation_id")
        .type(emData.designation)
        .type("{enter}");
      cy.formController("reporting_manager_id")
        .type(emData.reportingManager)
        .type("{enter}");
      cy.get("#nz-tabs-0-tab-3").click();
      cy.formController("father_name_en").type(emData.fatherNameEn);
      cy.formController("father_name_bn").type(emData.fatherNameBn);
      cy.formController("mother_name_en").type(emData.motherNameEn);
      cy.formController("mother_name_bn").type(emData.motherNameBn);

      cy.get("#nz-tabs-0-tab-4").click();
      cy.formController("res_division_id")
        .type(emData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(emData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(emData.thana).type("{enter}");
      cy.formController("res_post_office_id")
        .type(emData.postalOffice)
        .type("{enter}");
      cy.formController("res_union_id").type(emData.union).type("{enter}");
      cy.formController("res_address_line_1").type(emData.adressEn);
      cy.formController("res_address_line_2").type(emData.adressBn);
      cy.imsId("ck-box").click();
      cy.get("#nz-tabs-0-tab-5").click();
      cy.imsId("btn_photo_image_id").attachFile("employeePhoto1.jpg");
      cy.wait(1000);
      cy.imsId("btn_nid_front_doc_id").attachFile("nidPront1.jpg");
      cy.wait(1000);
      cy.imsId("btn_nid_back_doc_id").attachFile("nidBack1.jpg");
      cy.wait(1000);
      cy.imsId("btn_birth_reg_doc_id").attachFile("birthRegPart1.jpg");
      cy.wait(1000);
      cy.imsId("btn_passport_doc_id").attachFile("passportImg1.jpg");
      cy.wait(1000);
      cy.imsId("btn_driving_license_doc_id").attachFile("drivingLicence1.jpg");
      cy.wait(1000);
      cy.imsId("btn_other_id_doc_id").attachFile("otherDoc1.jpg");
      cy.wait(1000);
      cy.imsId("btn_tin_doc_id").attachFile("tinDocImg1.jpg");
      cy.wait(1000);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmployee)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created employee management all fields");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-employee", "submenu-employee-management");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the employee management list page."
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;

      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the employee management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Employee management list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.get('.ant-switch-inner > .hidden').click();
    cy.imsId("btn-go-back").click();


    cy.log("Employee management form Edit Mode toggled successfully");
  }

  editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.employeeNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Employee Management updated successfully");
    });
  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();

      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();

      cy.log("Successful clean displaying");
    });
  }

  editDraftButton() {
    cy.imsId("btn-draft").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful draft button check.");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit button check.");
  }

  editApproveButton() {
    cy.imsId("btn-approve").first().click();
    cy.imsId("btn-ok").click();

    cy.log("Successful approve button check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");

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

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-1").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-1").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying.");
    });
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createApproveButtonCheck() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful approve button check.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_employee_management = new EmployeeManagementCreation();
