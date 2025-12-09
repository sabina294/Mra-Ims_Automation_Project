class AmountBasedLoanProposalApproval {
  test_data = Cypress.env("TEST_DATA");

  gridAmountBasedLoanListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-configuration",
        "submenu-amount-based-loan-proposal-approval"
      );
      cy.log("Successfully amount based loan list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the area list page.");
  }

  viewAmountBasedLoanProposal() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.formController("search_text").type(ablpaData.roleName);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the amount based loan list page");
    });
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Amount based loan form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-reset").click();

    cy.log("Successful clean displaying");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();

    cy.log("Successful submit validation check.");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(ablpaData.selectStatus).type("{enter}");
      cy.log("Amount based loan status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.formController("status").type(ablpaData.statusSelect).type("{enter}");
      cy.log("Amount based loan status active dropdown check successfully");
    });
  }

  searchInRoleName() {
    cy.fixture(this.test_data).then((data) => {
      var ablpaData = data.fieldOfficer.gridAmountBasedLoanFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(ablpaData.roleName);
      cy.log("Successfully search in the amount based loan");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the amount based loan "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_amount_based_loan = new AmountBasedLoanProposalApproval();
