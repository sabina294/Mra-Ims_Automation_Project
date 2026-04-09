class LoanRebate {
  test_data = Cypress.env("TEST_DATA");

  gridLoanRebateListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-rebate");
      cy.log("Successfully Loan rebate list page.");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
    });
  }

  createValidationMessageCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
    });
  }

  createDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-draft").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
    });
  }

  createGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-go-back").click();
    });
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("addIconButton").click();
    });
  }

  createRemoveIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("removeIconButton").first().click();
      cy.imsId("btn-go-back").click();
    });
  }

  createLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("samity_id").type(lrData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lrData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lrData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("rebate_type")
        .type(lrData.selectRebate)
        .type("{enter}");
      // cy.formController("amount").type(lrData.Amount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lrData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan rebate");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewLoanRebate() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.formController("search_text").type(lrData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan rebate list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Loan rebate list page");
  }


  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.branchManager.createLoanRebateFrom;
        cy.imsId("btn-reset").click();
      cy.formController("status").type(lrData.selectStatus).type("{enter}");
      cy.log("Loan rebate status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lrData.statusSelect).type("{enter}");
      cy.log("Loan rebate  status active dropdown check successfully");
    });
  }

  searchInLoanRebateName() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.branchManager.createLoanRebateFrom;
        cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lrData.search);
      cy.log("Successfully search in the Loan rebate");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan rebate "
    );
  }

   gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lrData = data.branchManager.createLoanRebateFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lrData.search);
      cy.imsId("btn-search").click();
      
      cy.log("Successfully search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_loan_rebate = new LoanRebate();
