class LoanProvision {
  test_data = Cypress.env("TEST_DATA");

  gridLoanProvisionListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-provision");
      cy.log("Successfully loan provision list page.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const grid_loan_provision = new LoanProvision();
