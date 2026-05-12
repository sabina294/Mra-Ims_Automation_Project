class LoanPenalty {
  test_data = Cypress.env("TEST_DATA");

  gridLoanPenaltyListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
      cy.log("Successfully loan penalty list page.");
    });
  }
  createLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();

      // cy.imsId('btn-submit').and('be.visible');

      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
      cy.formController("samity_id").type(lpData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lpData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lpData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("amount").type(lpData.inputAmount);
      // cy.imsId('btn-go-back').click();

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageSaveLoanPenalty)
        .and("be.visible");
      cy.imsId('btn-ok').click();

      cy.log("Successfully created loan penalty");
    });
  }

  approveLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-loan-penalty").click();
      cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-authorize").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lpData.approveMessage)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully approved the loan penalty");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-loan-account", "submenu-loan-penalty");
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan penalty list page.");
  }

  viewLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the loan penalty list page");
    });
  }

  editLoanPenalty() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(lpData.messageUpdateLoanPenalty)
        .and("be.visible");
      cy.imsId("btn-yes").click();

      cy.log("Loan penalty updated successfully");
    });
  }


  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController("office_id").type(lpData.selectOffice).type("{enter}");
      cy.log(
        "loan penalty office dropdown check successfully"
      );
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lpData.selectStatus).type("{enter}");
      cy.log(
        "loan penalty status submitted dropdown check successfully"
      );
    });
  }
  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.formController("status").type(lpData.statusSelect).type("{enter}");
      cy.log(
        "loan penalty status approved dropdown check successfully"
      );
    });
  }

  searchInLoanPenaltyName() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
      cy.log("Successfully search in the loan penalty");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page displayed the grid list of the loan penalty"
    );
  }

   gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lpData = data.mfiAdmin.createLoanPenaltyFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lpData.search);
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

export const create_loan_penalty = new LoanPenalty();
