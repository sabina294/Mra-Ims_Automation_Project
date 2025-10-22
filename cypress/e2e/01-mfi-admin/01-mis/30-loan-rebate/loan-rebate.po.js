class LoanRebate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanRebateListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
      cy.log("Successfully loan rebate list page.");
    });
  }
  createLoanRebate() {
    // cy.fixture(this.test_data).then((data) => {
    //   cy.imsId("btn-add-new").click();
    //   var lrData = data.mfiAdmin.createLoanRebateFrom;
    //   cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
    //   cy.wait(2000);
    //   cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
    //   cy.wait(2000);
    //   cy.formController("member_id").type(lrData.selectMember).type("{enter}");
    //   cy.wait(2000);
    //   cy.formController("loan_account_id")
    //     .type(lrData.selectLoanAccount)
    //     .type("{enter}");
    //   cy.wait(2000);
    //   cy.formController("rebate_type").type(lrData.rebateType).type("{enter}");
    //   // cy.formController("rebate_amount").type(lrData.rebatetAmount);
    //     cy.formController("amount").type(lrData.inputAmount);

    //     cy.imsId("btn-submit").click();
    //     cy.imsId("btn-yes").click();

    //     cy.get("app-confirmation-modal")
    //       .contains(lrData.messageSaveLoanRebate)
    //       .and("be.visible");
    //     cy.imsId('btn-ok').click();

    //   cy.log("Successfully created loan rebate");
    // });
  }

  goBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
        cy.imsId('btn-go-back').click();
      cy.log("Successfully go back button check.");
    });
  }


  approveLoanRebate() {
    // cy.fixture(this.test_data).then((data) => {
    //   var lrData = data.mfiAdmin.createLoanRebateFrom;
    //   cy.imsId("menu-my-task").click();
    //   cy.imsId("submenu-awaiting-loan-rebate").click();
    //   cy.formController("search_text").type(lrData.search);
    //   cy.imsId("toggle-action").first().click();
    //   cy.imsId("btn-table-action-view").click();
    //   cy.imsId("btn-authorize").click();
    //   cy.imsId("btn-yes").click();

    //   cy.get("app-confirmation-modal")
    //     .contains(lrData.approveMessage)
    //     .and("be.visible");
    //   cy.imsId("btn-ok").click();
    //   cy.log("Successfully approved the loan rebate");
    // });
  }

  actionButtonCheck() {
    // cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
    // cy.imsId("toggle-action").first().click();
    // cy.log("Action button clicked successfully on the loan rebate list page.");
  }

  viewLoanRebate() {
    // cy.fixture(this.test_data).then((data) => {
    //   var lrData = data.mfiAdmin.createLoanRebateFrom;
    //   cy.imsId("btn-reset").click();
    //   cy.formController("search_text").type(lrData.search);
    //   cy.imsId("toggle-action").first().click();
    //   cy.imsId("btn-table-action-view").click();

    //   cy.imsId("btn-go-back").click();
    //   cy.log("Successfully viewed the loan rebate list page");
    // });
  }

  editLoanRebate() {
    // cy.fixture(this.test_data).then((data) => {
    //   var lrData = data.mfiAdmin.createLoanRebateFrom;
    //   cy.imsId("btn-reset").click();
    //   cy.formController("search_text").type(lrData.search);
    //   cy.imsId("toggle-action").first().click();
    //   cy.imsId("btn-table-action-edit").click();
    //   cy.imsId("btn-submit").click();

    //   cy.get("app-confirmation-modal")
    //     .contains(lrData.messageUpdateLoanRebate)
    //     .and("be.visible");
    //   cy.imsId("btn-yes").click();

    //   cy.log("Loan rebate updated successfully");
    // });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lrData.selectStatus).type("{enter}");
      cy.log(
        "loan rebate status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("status").type(lrData.statusSelect).type("{enter}");
      cy.log(
        "loan rebate status active dropdown check successfully"
      );
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lrData.search);
      cy.log("Successfully search in the loan rebate");
    });
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.mfiAdmin.createLoanRebateFrom;
      cy.formController("office_id").type(lrData.office).type("{enter}");
      cy.log("Successfully select office in the samity management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page displayed the grid list of the loan rebate"
    );
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      // cy.imsId("btn-add-new").click();
      // var lrData = data.mfiAdmin.createLoanRebateFrom;
      // cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      // cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      // cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      // cy.formController("loan_account_id")
      //   .type(lrData.selectLoanAccount)
      //   .type("{enter}");
      // cy.wait(2000);
      // cy.imsId("addIconButton").click();
      // cy.imsId("btn-go-back").click();
    });
  }

  createRemoveIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      // cy.imsId("btn-add-new").click();

      // var lrData = data.mfiAdmin.createLoanRebateFrom;

      // cy.formController("office_id").type(lrData.selectOffice).type("{enter}");
      // cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      // cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      // cy.formController("loan_account_id")
      //   .type(lrData.selectLoanAccount)
      //   .type("{enter}");
      // cy.wait(2000);
      // cy.imsId("addIconButton").click({ multiple: true });
      // // ✅ click first remove icon
      // cy.imsId("removeIconButton").first().click();
      // cy.imsId("btn-go-back").click();
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch bangla language check.");
  }
}

export const create_loan_rebate = new LoanRebate();
