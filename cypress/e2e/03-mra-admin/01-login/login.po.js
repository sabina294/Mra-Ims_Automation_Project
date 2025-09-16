import { assert } from "tcomb";

class LoginTest {
  mraAdminLogin() {
    const baseURL = Cypress.env("BASE_URL");
    cy.log("base url", baseURL);
    const test_data = Cypress.env("TEST_DATA");

    cy.fixture(test_data).then((data) => {
      cy.visit(baseURL);
      cy.formController("user_id").clear().type(data.credential.mraAdminUserId);
      cy.formController("password").clear().type(data.credential.mraAdminPassword);
      cy.get("#submit-button").click();

      cy.imsId("profile-menu").click();
      cy.imsId("user-name-container")
        .contains(data.credential.mraAdminName)
        .and("be.visible");

      cy.imsId("user-name-container")
        .contains(data.credential.mraAdminUserId)
        .and("be.visible");
    });
  }
}

export const login_test = new LoginTest();
