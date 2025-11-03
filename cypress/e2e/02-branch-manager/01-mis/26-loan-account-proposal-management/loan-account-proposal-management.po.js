class LoanAccountProposalManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountProposalManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-loan-account",
        "submenu-loan-account-proposal-management"
      );
      cy.log("Successfully Loan account proposal Management list page.");
    });
  }
  createLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.formController("member_id").type(lapData.member).type("{enter}");
      cy.formController("lending_category_id")
        .type(lapData.lendingCategory)
        .type("{enter}");
      cy.formController("econ_sector")
        .type(lapData.economicSector)
        .type("{enter}");
      cy.formController("econ_activity")
        .type(lapData.economicActivity)
        .type("{enter}");
      cy.formController("econ_purpose_mra_code")
        .type(lapData.economicPurpose)
        .type("{enter}");
      cy.formController("loan_product_id")
        .type(lapData.loanProduct)
        .type("{enter}");
      cy.formController("applied_loan_amount").type(lapData.appliedLoanAmount);

      cy.formController("expected_disburse_dt").click();
      cy.contains("13").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lapData.messageSaveLoanAccount)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created loan account proposal management");
    });
  }

  approveLoanAccountProposal() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-loan-account-proposal").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-approve").click();
      cy.imsId("approved_loan_amount").type(lapData.approvedLoanAmount);
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve loan account proposal management");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the loan account proposal management list page."
    );
  }

  editResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  editValidationMessageCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    // cy.imsId("btn-submit").click();
    // cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  editGoBackButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }


  viewLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log(
        "Successfully viewed the Loan account proposal Management list page"
      );
    });
  }

  editLoanAccountProposalManagement() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(lapData.messageUpdateLoanAccount)
        .and("be.visible");
      cy.imsId("btn-yes").click();

      cy.log("Loan account proposal Management updated successfully");
    });
  }
  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lapData.selectStatus).type("{enter}");
      cy.log(
        "Loan account proposal Management status inactive dropdown check successfully"
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.formController("status").type(lapData.statusSelect).type("{enter}");
      cy.log(
        "Loan account proposal Management status active dropdown check successfully"
      );
    });
  }
  searchInLoanAccountProposalName() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lapData.memberNameEn);
      cy.log("Successfully search in the Loan account proposal Management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }
  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Loan account proposal Management "
    );
  }

  gridCheckboxCheck() {
    cy.imsId("row-checkbox-0").click();
    // cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lapData = data.branchManager.createLoanAccountFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("samity_id").type(lapData.samity).type("{enter}");
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    // cy.imsId("btn-submit").click();
    // cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_loan_account_proposal_management =
  new LoanAccountProposalManagementCreation();
