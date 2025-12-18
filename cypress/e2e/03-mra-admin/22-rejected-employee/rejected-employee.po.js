class RejectedEmployee {
  test_data = Cypress.env("TEST_DATA");

  createRejectedEmployee() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-employee", "submenu-employee-management");
      cy.imsId("btn-add-new").click();
      // cy.imsId("btn-submit").and("be.visible");

      var emData = data.mraAdmin.rejectedEmployeeFrom;
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

      cy.log("Successfully created rejected employee");
    });
  }

  rejectedEmployee() {
    cy.fixture(this.test_data).then((data) => {
      const emData = data.mraAdmin.rejectedEmployeeFrom;

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
        .type(emData.rejectRemarks);

      cy.imsId("btn-Reject").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      // ✅ Wait until modal is closed before moving on
      cy.get("nz-modal-container").should("not.exist");

      cy.log("✅ Successfully rejected employee");
    });
  }

  gridEmployeeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-employee", "submenu-rejected-employee");
      cy.log("Successfully rejected employee list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the rejected employee list page."
    );
  }

  viewEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();

      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the rejected employee list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the rejected employee  list page");
  }

  turnOffOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.get('.ant-switch-inner > .hidden').click();
    // cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("rejected employee form Edit Mode toggled successfully");
  }

  editEmployeeManagement() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-reset").click();

      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      var emData = data.mraAdmin.createEmployeeFrom;
      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(emData.messageUpdateEmployee)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("rejected employee updated successfully");
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
      cy.imsId("btn-go-back").click();

      cy.log("Successful clean displaying");
    });
  }

  editGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-reset").click();

      var emData = data.mraAdmin.createEmployeeFrom;
      cy.formController("search_text").type(emData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successful edit go back button check.");
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(emData.selectStatus).type("{enter}");
      cy.log(
        "rejected employee form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(emData.statusSelect).type("{enter}");
      cy.log(
        "rejected employee form status active dropdown check successfully"
      );
    });
  }

  searchInEmployeeName() {
    cy.fixture(this.test_data).then((data) => {
      var emData = data.mraAdmin.rejectedEmployeeFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(emData.employeeNameEn);
      cy.log("Successfully search in the rejected employee form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the rejected employee form "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_rejected_employee = new RejectedEmployee();
