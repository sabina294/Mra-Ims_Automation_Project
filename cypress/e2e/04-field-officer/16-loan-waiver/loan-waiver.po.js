class LoanWaiver {
  test_data = Cypress.env("TEST_DATA");

  gridLoanWaiverListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-waiver");
      cy.log("Successfully Loan waiver list page.");
    });
  }
  createLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      // cy.imsId('btn-submit').and('be.visible');

      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("samity_id").type(lwData.selectSamity).type("{enter}");
      cy.formController("member_id").type(lwData.selectMember).type("{enter}");
      cy.formController("loan_account_id")
        .type(lwData.selectLoanAccount)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("rebate_type")
        .type(lwData.selectRebate)
        .type("{enter}");
      cy.formController("rebate_amount").type(lwData.amount).type("{enter}");
      cy.formController("amount").type(lwData.inputAmount);

      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lwData.messageSaveLoanRebate)
        .and("be.visible");
      cy.imsId("btn-ok").click();

      cy.log("Successfully created Loan rebate");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan welfare list page.");
  }

  viewLoanWaiver() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.formController("search_text").type(lwData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the Loan rebate list page");
    });
  }

  statusSubmittedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lwData.selectStatus).type("{enter}");
      cy.log("Loan rebate status submitted dropdown check successfully");
    });
  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lwData.statusSelect).type("{enter}");
      cy.log("Loan rebate  status approved dropdown check successfully");
    });
  }

  searchInLoanWaivereName() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
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
      "successfully refresh page  displayed the grid list of the Loan rebate "
    );
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lwData = data.fieldOfficer.createLoanWaiverFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lwData.samityNameEn);
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

export const create_loan_waiver = new LoanWaiver();
