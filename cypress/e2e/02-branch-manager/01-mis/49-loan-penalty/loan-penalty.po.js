class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
      cy.log("Successfully Loan penalty list page.");
    });
  }

  createResetButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.log("Successfully reset button check Loan penalty");
    });
  }

  createGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-go-back").click();
      cy.log("Successfully go back button check Loan penalty");
    });

  }

  createAddIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.wait(2000);
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("loan-input-0").clear().type(lpData.inputLoanAccount);
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.imsId("add-icon-button").click();
      cy.log("Successfully created Loan penalty");
    });
  }

  createRemoveIconPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("remove-icon-button").first().click();
      cy.imsId("btn-go-back").click();
    });
  }

  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("loan-input-0").clear().type(lpData.inputLoanAccount).type("{enter}");
      cy.wait(2000);
      cy.get('body').click(0, 0);
      cy.formController("amount").type(lpData.inputAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan penalty");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan penalty list page.");
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan penalty list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully go back the Loan penalty list page");

  }

  gridActionUnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.log("Successfully grid unsubmitted the Loan penalty list page");
    });
  }

  gridActionUnsubmittedGoBackButton() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed go back the Loan penalty list page");
    });
  }

  UnsubmittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.imsId("btn-unsubmit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully unsubmitted the Loan penalty list page");
    });
  }

  editDraftButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-draft").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully edited as draft the Loan penalty list page");
    });
  }

  editGoBackButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully edited as go back the Loan penalty list page");
    });
  }

  editSaveButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-save").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully edited as save the Loan penalty list page");
    });
  }

  gridActionSubmitButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-unsubmit").click();
      cy.imsId("btn-unsubmit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-submit").click();
      cy.log("Successfully submitted the Loan penalty list page");
    });
  }

  submittedButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-save").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully submitted the Loan penalty list page");
    });
  }


  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log("Loan penalty status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log("Loan penalty status approved dropdown check successfully");
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.log("Successfully search in the Loan penalty Name.");
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
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.samity);
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

export const create_loan_penalty = new LoanPenalty();
