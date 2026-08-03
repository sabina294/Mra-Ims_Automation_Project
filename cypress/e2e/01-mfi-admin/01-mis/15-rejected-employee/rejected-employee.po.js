class RejectedEmployee {
  test_data = Cypress.env("TEST_DATA");
  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-employee", "submenu-employee-management");
      cy.log("Successfully Rejected Employee list page.");
    });
  }

  createEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId("btn-submit").and("be.visible");

      var reData = data.mfiAdmin.rejectedEmployeeFrom;
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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(reData.messageSaveEmp)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Rejected Employee");
    });
  }

  rejectedEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;

      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-employee-management").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

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
      cy.imsId("btn-yes").click();

      // ✅ Wait until modal is closed before moving on
      cy.imsId("btn-ok").click();

      cy.log("✅ Successfully rejected employee");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-employee", "submenu-rejected-employee");
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the Rejected Employee list page."
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;

      cy.formController("search_text").type(reData.empNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.log("Successfully viewed the Rejected Employee list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the Rejected Employee list page");

  }

  editResetButton() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(reData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful clean displaying");
    });
  }

  editGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(reData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful edit go back button check.");
    });
  }

  editEmployeeManagement() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    // cy.imsId("btn-submit").click();
    // cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();

    cy.log("Rejected Employee updated successfully");
  }

  gridOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.formController("office_id").type(reData.officeDropdown).type("{enter}");
      cy.imsId("btn-reset").click();
      cy.log(
        "Rejected Employee form office dropdown check successfully"
      );
    });
  }
  
  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(reData.empNameEn);
      cy.log("Successfully search in the Rejected Employee form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Rejected Employee form "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const reData = data.mfiAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(reData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_rejected_employee = new RejectedEmployee();
