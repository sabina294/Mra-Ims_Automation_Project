class LoanProvision {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProvisionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-provision");
      cy.log("Successfully loan provision list page.");
    });
  }

  provisionSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.log("Successful submit button working.");
  }

  provisionNoButton() {
    cy.imsId("btn-no").click();
    cy.log("Successful no button working.");
  }

  provisionYesButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-yes").click();
    cy.log("Successful yes button working.");
  }

  provisionOkButton() {
    cy.imsId("btn-ok").click();
    cy.log("Successful ok button working.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_loan_provision = new LoanProvision();
