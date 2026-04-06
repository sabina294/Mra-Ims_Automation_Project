class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
      cy.log("Successfully Loan penalty list page.");
    });
  }
  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId('btn-submit').and('be.visible');

      var lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("rebate_type")
        .type(lpData.selectRebate)
        .type("{enter}");
      cy.formController("rebate_amount").type(lpData.amount).type("{enter}");
      cy.formController("amount").type(lpData.inputAmount);
      cy.imsId("btn-go-back").click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageSaveLoanPenalty)
        .and("be.visible");
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
      var lpData = data.fieldOfficer.createLoanPenaltyForm;
      // cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the Loan rebate list page");
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log("Loan penalty status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log("Loan penalty status approved dropdown check successfully");
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.fieldOfficer.createLoanPenaltyForm;
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
      var lpData = data.fieldOfficer.createLoanPenaltyForm;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.samityNameEn);
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
