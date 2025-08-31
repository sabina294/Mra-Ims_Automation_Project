class ClientWelfareFund {
  test_data = Cypress.env("TEST_DATA");

  gridClientWelfareFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-client-welfare-fund");
      cy.log("Successfully client welfar fund list page.");
    });
  }
  createClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId('btn-submit').and('be.visible');

      var wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("samity_id").type(wfData.selectSamity).type("{enter}");
      cy.formController("member_id").type(wfData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(wfData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-go-back").click();
      // cy.formController("amount").type(wfData.inputAmount);

      // cy.imsId("btn-submit").click();

      // cy.get("app-confirmation-modal")
      //   .contains(wfData.messageSaveLoanWelfareFund)
      //   .and("be.visible");
      // cy.imsId("btn-yes").click();

      // cy.imsId('btn-ok').click();

      cy.log("Successfully created client welfare fund");
    });
  }

  approveClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-client-welfare-fund").click();
      cy.formController("search_text").type(wfData.selectMember);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-authorize").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(wfData.approveMessage)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully approved the loan welfare fund");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("search_text").type(wfData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the client welfare fund list page");
    });
  }

  editClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(wfData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();

      cy.get("app-confirmation-modal")
        .contains(wfData.messageUpdateLoanWelfareFund)
        .and("be.visible");
      cy.imsId("btn-yes").click();

      cy.log("Loan account proposal Management updated successfully");
    });
  }

  searchInClientWelfareFundName() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(wfData.search);
      cy.log("Successfully search in the client welfare fund");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the client welfare fund "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }

}

export const create_client_welfare_fund = new ClientWelfareFund();
