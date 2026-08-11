import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RejectedEmployee {
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
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and("be.visible");

      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.formController("emp_name_en").type(reData.empNameEn);
      cy.formController("emp_name_bn").type(reData.empNameBn);
      cy.formController("date_of_birth").click();
      cy.get('.ant-picker-dropdown')
        .should('be.visible');
      cy.get('.ant-picker-cell-in-view')
        .not('.ant-picker-cell-disabled')
        .first()
        .click({ force: true });
      cy.wait(1000);
      cy.formController("gender").click();
      cy.get(
        ".ant-form-item-control-input-content > .ant-radio-group > :nth-child(1) > .ant-radio > .ant-radio-input"
      ).click();
      cy.formController("contactNo").type(reData.empMobileNo);
      cy.formController("emailAddress").first().clear().type(reData.email);
      cy.get('#nz-tabs-1-tab-1').click();
      cy.formController("nid_number").type(reData.nidNumber);
      cy.get('#nz-tabs-1-tab-2').click();
      cy.formController("office_id").type(reData.officeDropdown).type("{enter}");
      cy.formController("department_id")
        .type(reData.department)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("empl_designation_id")
        .type(reData.designation)
        .type("{enter}");
      cy.wait(2000);

      cy.get('#nz-tabs-1-tab-3').click();
      cy.formController("father_name_en").type(reData.fatherNameEn);
      cy.formController("mother_name_en").type(reData.motherNameEn);
      cy.get('#nz-tabs-1-tab-4').click();
      cy.formController("res_division_id")
        .type(reData.division)
        .type("{enter}");
      cy.formController("res_district_id")
        .type(reData.district)
        .type("{enter}");
      cy.formController("res_upazila_id").type(reData.thana).type("{enter}");
      cy.formController("res_address_line_1").type(reData.adressEn);
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .contains(reData.messageSaveEmp)
        .and("be.visible");
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  rejectedEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;

      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-employee-management").click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.imsId("btn-lock").click();
      cy.imsId("btn-reject").click();

      // ✅ Wait for modal and textarea to appear and be ready
      cy.get("nz-modal-container").should("be.visible");
      cy.imsId("approver-remarks-textarea")
        .should("be.visible")
        .and("not.be.disabled")
        .clear()
        .type(reData.rejectRemarks);

      cy.imsId("btn-Reject").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();

      // ✅ Wait until modal is closed before moving on
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.rejectSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-employee", "submenu-rejected-employee");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(messages.ui.actionMessage);
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;

      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(reData.empNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(reData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.editResetMessage);
    });
  }

  editGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(reData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_EDIT).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.editGoBackMessage);
    });
  }

  editEmployeeManagement() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    // cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.editMessage);
  }

  gridOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.formController("office_id").type(reData.officeDropdown).type("{enter}");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.gridOfficeDisplayed);

    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(reData.empNameEn);
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
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(reData.search);
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

export const create_rejected_employee = new RejectedEmployee();
