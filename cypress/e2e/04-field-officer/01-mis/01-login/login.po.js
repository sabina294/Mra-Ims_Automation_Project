class LoginTest {
  fieldOfficerLogin() {
    const baseURL = Cypress.env("BASE_URL");
    cy.log("base url", baseURL);
    const test_data = Cypress.env("TEST_DATA");

    cy.fixture(test_data).then((data) => {
      cy.visit(baseURL);
      cy.formController("user_id").clear().type(data.credential.fieldOfficerUserId);
      cy.formController("password").clear().type(data.credential.fieldOfficerPassword);
      cy.get("#submit-button").click();

    });
  }
    gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const login_test = new LoginTest();
