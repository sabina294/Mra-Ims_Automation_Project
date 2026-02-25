class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
      cy.log("Successfully Loan penalty list page.");
    });
  }

   createSave() {
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
      cy.imsId("loan-input-0").clear().type(lpData.penaltyAmount);
      cy.wait(2000);
      cy.imsId("btn-save").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created Loan penalty");
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
      cy.imsId("loan-input-0").clear().type(lpData.penaltyAmount);
      cy.wait(2000);
      cy.imsId("btn-go-back").click();
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
      cy.wait(2000);
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.wait(2000);
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("loan-input-0").clear().type(lpData.penaltyAmount);
      cy.wait(2000);
      cy.imsId("btn-go-back").click();
      cy.imsId("amount-input").type(lpData.amount);
      cy.wait(2000);
      cy.imsId("btn-save").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully created Loan penalty");
    });
  }
  
   createGoBack() {
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
      cy.imsId("btn-go-back").click();
      cy.log("Successfully go back Loan penalty");
      });
  }

  createSaveAsDraft() {
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
      cy.imsId("btn-draft").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully created Loan penalty");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the Loan penalty list page.");
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      // // cy.formController("search_text").type(lpData.search);
      // cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the Loan penalty list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the Loan penalty list page");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
        cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log("Loan penalty status inactive dropdown check successfully");
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log("Loan penalty status active dropdown check successfully");
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.branchManager.createLoanPenaltyFrom;
        cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.log("Successfully search in the Loan penalty");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan penalty"
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsuccessful switch bangla language check.");
  }
}

export const create_loan_penalty = new LoanPenalty();
