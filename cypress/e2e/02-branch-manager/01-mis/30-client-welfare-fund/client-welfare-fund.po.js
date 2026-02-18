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
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("samity_id").type(wfData.selectSamity).type("{enter}");
      cy.formController("member_id").type(wfData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(wfData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("payment_mode")
        .type(wfData.selectPaymentMode)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("amount").type(wfData.inputAmount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId('btn-ok').click();

      cy.log("Successfully created client welfare fund");
    });
  }

  approveClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-client-welfare-fund").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-authorize").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.log("Successfully approved the loan welfare fund");
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-loan-account", "submenu-client-welfare-fund");
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewClientWelfareFund() {
    cy.fixture(this.test_data).then((data) => {
      var wfData = data.branchManager.createClientWelfareFrom;
      // cy.formController("search_text").type(wfData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the client welfare fund list page");
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

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var wfData = data.branchManager.createClientWelfareFrom;
      cy.formController("samity_id").type(wfData.selectSamity).type("{enter}");
      cy.formController("member_id").type(wfData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(wfData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }
  
  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch to Bangla language check.");
  }

}

export const create_client_welfare_fund = new ClientWelfareFund();
