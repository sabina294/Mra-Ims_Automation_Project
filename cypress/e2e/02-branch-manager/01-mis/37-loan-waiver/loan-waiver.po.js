class LoanWaiver {
  test_data = Cypress.env("TEST_DATA");

  gridLoanWaiverListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-waiver");
      cy.log("Successfully Loan waiver list page.");
    });
  }

  createAddIconButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-add-method-0").click();
      cy.log("Successfully Loan waiver add icon button.");
    });
  }

  createRemoveIconButtonCheck() {
    cy.imsId("btn-remove-method-0").click();
    cy.log("Successfully Loan waiver remove icon button.");
  }

  createResetButtonCheck() {
    // cy.fixture(this.test_data).then((data) => {
    //   cy.imsId("btn-add-new").click();
    //   var lwData = data.branchManager.createLoanWaiverFrom;
    //   cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
    //   cy.formController("member_id").type(lwData.selectMember).type("{enter}");
    //   cy.formController("loan_account_id")
    //     .type(lwData.selectLoanAccount)
    //     .type("{enter}");
    //   cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.log("Successfully Loan waiver reset button.");
    // });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully Loan waiver submit button.");

  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successfully Loan waiver draft button.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully Loan waiver go back button.");
  }

  createLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      const lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId("btn-add-new", { timeout: 15000 })
        .should("be.visible")
        .click();
      cy.formController("samity_id")
        .should("be.visible")
        .type(lwData.selectSamity)
        .type("{enter}");
      cy.formController("member_id")
        .type(lwData.selectMember)
        .type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");

      cy.formController("waiver_type")
        .type(lwData.selectRebate)
        .type("{enter}");
      // cy.formController("rebate_amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      // cy.formController("amount")
      //   .clear()
      //   .type(lwData.inputAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.contains(lwData.messageSaveLoanRebate)
        .should("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan Waiver");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("search_text").type(lwData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan waiver list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Loan waiver list page");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lwData.selectStatus).type("{enter}");
      cy.log("Loan waiver status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.branchManager.createLoanWaiverFrom;
      cy.formController("status").type(lwData.statusSelect).type("{enter}");
      cy.log("Loan waiver  status active dropdown check successfully");
    });
  }

  searchInLoanWaivereName() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.branchManager.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lwData.search);
      cy.log("Successfully search in the Loan waiver");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan waiver "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const create_loan_waiver = new LoanWaiver();
