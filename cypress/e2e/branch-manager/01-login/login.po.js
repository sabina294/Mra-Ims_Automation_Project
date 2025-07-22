class LoginTest {
  branchManagerLogin() {
    const baseURL = Cypress.env("BASE_URL");
    cy.log("base url", baseURL);
    const test_data = Cypress.env("TEST_DATA");

    cy.fixture(test_data).then((data) => {
      cy.visit(baseURL);
      cy.formController("user_id").type(data.credential.branchManagerUserId);
      cy.formController("password").type(data.credential.branchManagerPassword);
      cy.get("#submit-button").click();
    });
  }
}

export const login_test = new LoginTest();
