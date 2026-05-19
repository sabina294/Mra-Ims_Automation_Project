import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
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
      var emData = data.branchManager.createEmpMangFrom;
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
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("contactNo").type(emData.empMobileNo);
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

      cy.get('#nz-tabs-1-tab-3').click();
      cy.formController("father_name_en").type(emData.fatherNameEn);
      cy.formController("mother_name_en").type(emData.motherNameEn);
      cy.get('#nz-tabs-1-tab-4').click();
      cy.formController("res_division_id")
        .type(emData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(emData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(emData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(emData.adressEn);
      cy.imsId("ck-box").click();
      cy.get('#nz-tabs-1-tab-5').click();
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
        .contains(emData.messageSaveEmp)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created employee management");
    });
  }

  approveEmployee() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.formController("search_text").type(emData.empNameEn);
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

  actionButtonCheck() {
    cy.selectMenu("menu-employee", "submenu-employee-management");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the employee management list page."
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;

      cy.formController("search_text").type(emData.empNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the employee management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the  employee management list page");
  }

  profileViewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      // cy.formController("search_text").type(emData.empNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-profile").click();
      cy.log("Successfully profile viewed the employee management list page");
    });
  }

  profileViewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully profile view go back the  employee management list page");
  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying");
    });
  }

  editGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("btn-go-back").click();
      cy.log("Successful edit go back button check.");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.formController("status").type(emData.selectStatus).type("{enter}");
      cy.log(
        "Employee Management form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(emData.statusSelect).type("{enter}");
      cy.log(
        "Employee Management form status active dropdown check successfully"
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.empNameEn);
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

  gridDraftButton() {
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
      cy.log(messages.ui.draftOnMessage);
    }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
      cy.log(messages.ui.draftOffMessage);
  }

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-8").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-8").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("emp_name_en").type(emData.empNameEn);
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
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

   editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      // cy.formController("search_text").type(emData.empNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      // cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Employee Management updated successfully");
    });
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.branchManager.createEmpMangFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_employee_management = new EmployeeManagementCreation();
