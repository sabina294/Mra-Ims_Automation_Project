Cypress.Commands.add("imsId", (ims_id) => {
  return cy.get(`[data-ims-id='${ims_id}']`);
});

Cypress.Commands.add("formController", (form_control_name) => {
  return cy.get(`[formcontrolname='${form_control_name}']`);
});

Cypress.Commands.add("loginAsMraAdmin", (baseURL, data) => {
  cy.login(
    baseURL,
    data.credential.mraAdminUserId,
    data.credential.mraAdminPassword
  );
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsMfiAdmin", (baseURL, data) => {
  cy.login(
    baseURL,
    data.credential.mfiAdminUserId,
    data.credential.mfiAdminPassword
  );
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsBranchManager", (baseURL, data) => {
  cy.login(
    baseURL,
    data.credential.branchManagerUserId,
    data.credential.branchManagerPassword
  );
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsFieldOfficer", (baseURL, data) => {
  cy.login(
    baseURL,
    data.credential.fieldOfficerUserId,
    data.credential.fieldOfficerPassword
  );
  cy.changeLanguage("english");
});

Cypress.Commands.add(
  "formArrayController",
  (form_array_name, index, form_control_name) => {
    return cy
      .get(`[formarrayname="${form_array_name}"]`)
      .eq(index)
      .find(`[formcontrolname="${form_control_name}"]`);
  }
);

Cypress.Commands.add("login", (login_url, username, password) => {
  cy.window().then((win) => win.sessionStorage.clear());
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.visit(login_url);
  cy.formController("user_id").clear().type(username);
  cy.formController("password").clear().type(password);
  cy.get("#submit-button").click();
  cy.log(`Loging in as user : ${username}`);
});

Cypress.Commands.add("changeLanguage", (language) => {
  cy.imsId("profile-menu").click();
  cy.imsId(`btn-lang-${language}`).click();
});

Cypress.Commands.add("switchModule", (module) => {
  cy.imsId("module-switcher").click();
  cy.imsId(`module-${module}`).click();
});

Cypress.Commands.add("selectMenu", (menu, sub_menu) => {
  cy.wait(2000);
  cy.imsId(menu).click();
  cy.wait(1000);
  cy.imsId(sub_menu).click();
});

Cypress.Commands.add("selectMenu1", (menu) => {
  cy.imsId(menu).click();
});

Cypress.Commands.add("logout", () => {
  cy.imsId("profile-menu").click();
  cy.imsId("btn-logout").click();
  cy.log(`Successfully logout`);
});
