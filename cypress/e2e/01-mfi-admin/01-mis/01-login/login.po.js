class LoginTest {
 mfiAdminLogin() {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");

    cy.fixture(test_data).then((data) => {
        cy.loginAsMfiAdmin(baseURL, data);
    });
}

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const login_test = new LoginTest();
