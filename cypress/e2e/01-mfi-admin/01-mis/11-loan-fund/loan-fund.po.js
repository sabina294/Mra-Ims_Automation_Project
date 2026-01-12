class LoanFundCreation {
  test_data = Cypress.env("TEST_DATA");

  gridLoanFundListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-loan-fund");
      cy.log("Successfully loan fund list page.");
    });
  }

  createLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("bank_account_id")
        .type(lfData.bankAccount)
        .type("{enter}");
      cy.formController("loan_funding_organization_id")
        .type(lfData.fundingOrgId)
        .type("{enter}");
      cy.formController("amount").type(lfData.amount);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();

      cy.get("app-confirmation-modal")
        .contains(lfData.messageSaveLoanFund)
        .and("be.visible");
      cy.imsId("btn-ok").click();
      cy.log("Successfully created loan fund");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the loan fund list page.");
  }

  viewLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("search_text").type(lfData.amount);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(lfData.amount).and("be.visible");
      cy.log("Successfully viewed the loan fund list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the loan fund list page");

  }

  editLoanFund() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-edit").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Loan fund updated successfully");
    });
  }

  turnOffEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Loan fund form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(lfData.selectStatus).type("{enter}");
      cy.log("Loan fund status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.formController("status").type(lfData.statusSelect).type("{enter}");
      cy.log("Loan fund status active dropdown check successfully");
    });
  }

  searchInLoanFundName() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(lfData.fundingOrgId);
      cy.log("Successfully search in the loan fund");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the loan fund "
    );
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var lfData = data.mfiAdmin.createLoanFundFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("loan_funding_organization_id").type(
        lfData.fundingOrgId
      );
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful reset button clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
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
    cy.log("Successful switch bangla language check.");
  }
}

export const create_loan_fund = new LoanFundCreation();
