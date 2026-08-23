import { COMMON } from "../../../../support/constants/selectors";
import { assert } from "tcomb";

class LoginTest {
  mraAdminLogin() {
    const baseURL = Cypress.env("BASE_URL");
    const test_data = Cypress.env("TEST_DATA");

    cy.fixture(test_data).then((data) => {
      cy.loginAsMraAdmin(baseURL, data);

      cy.imsId(COMMON.BUTTONS.PROFILE).click();
      cy.imsId(COMMON.AUTH.USER_NAME)
        .contains(data.credential.mraAdminName)
        .and("be.visible");

      cy.imsId(COMMON.AUTH.USER_NAME)
        .contains(data.credential.mraAdminUserId)
        .and("be.visible");
    });
  }
}

export const login_test = new LoginTest();
