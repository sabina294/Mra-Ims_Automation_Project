import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class EmployeeManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-employee", "submenu-employee-management");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.formController("name_bn").type(emData.employeeNameBn);
      cy.formController("date_of_birth").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.formController("gender").click();
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("tin_no").type(emData.tinNo);

      cy.formController("contactNo").type(emData.employeeMobileNo);
      cy.formController("emailAddress").first().clear().type(emData.email);
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
        cy.wait(2000);
      cy.formController("res_district_id")
        .type(emData.district)
        .type("{enter}");
        cy.wait(1000);
      cy.formController("res_upazila_id").type(emData.thana).type("{enter}");
      cy.wait(1000);
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmployee)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  approveEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-employee-management").click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId("btn-Approve").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve employee management");
    });
  }

  createAllField() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

      const emData = data.mraAdmin.createEmployeeFrom;
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

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageSaveEmployee)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-employee", "submenu-employee-management");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  turnOffOnEditMode() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.get('.ant-switch-inner > .hidden').click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();


    cy.log(messages.ui.turnOnEditModeMessage);
  }

  editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.employeeNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.editMessage);
    });
  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.editResetMessage);
    });
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editSubmitMessage);
  }

  editApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).first().click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();

    cy.log(messages.ui.editMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);

  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(emData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("status").type(emData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.employeeNameEn);
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
    cy.imsId("row-checkbox-3").click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-3").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("name_en").type(emData.employeeNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(emData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_employee_management = new EmployeeManagementCreation();
