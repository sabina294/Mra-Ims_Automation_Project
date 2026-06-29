Cypress.Commands.add("imsId", (id) => {
  return cy.get(`[data-ims-id='${id}']`);
});

Cypress.Commands.add("formController", (name) => {
  return cy.get(`[formcontrolname='${name}']`);
});


// Login by Role
Cypress.Commands.add("loginAsMraAdmin", (url, data) => {
  cy.login(url, data.credential.mraAdminUserId, data.credential.mraAdminPassword);
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsMfiAdmin", (url, data) => {
  cy.login(url, data.credential.mfiAdminUserId, data.credential.mfiAdminPassword);
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsBranchManager", (url, data) => {
  cy.login(url, data.credential.branchManagerUserId, data.credential.branchManagerPassword);
  cy.changeLanguage("english");
});

Cypress.Commands.add("loginAsFieldOfficer", (url, data) => {
  cy.login(url, data.credential.fieldOfficerUserId, data.credential.fieldOfficerPassword);
  cy.changeLanguage("english");
});


// Form Array
Cypress.Commands.add("formArrayController", (array, index, control) => {
  return cy
    .get(`[formarrayname="${array}"]`)
    .eq(index)
    .find(`[formcontrolname="${control}"]`);
});


// Common Login + Location
Cypress.Commands.add("login", (url, username, password) => {

  cy.window().then(win => win.sessionStorage.clear());
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.then(() => {
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setGeolocationOverride",
      params: {
        latitude: 23.8103,
        longitude: 90.4125,
        accuracy: 100
      }
    });
  });

  cy.visit(url);

  cy.formController("user_id").clear().type(username);
  cy.formController("password").clear().type(password);
  cy.get("#submit-button").click();

  cy.log(`Login as : ${username}`);
});


// Language
Cypress.Commands.add("changeLanguage", (language) => {
  cy.imsId("profile-menu").click();
  cy.imsId(`btn-lang-${language}`).click();
});


// Module Switch
Cypress.Commands.add("switchModule", (module) => {
  cy.imsId("module-switcher").click();
  cy.imsId(`module-${module}`).click();
});


// Menu
Cypress.Commands.add("selectMenu", (menu, subMenu) => {
  cy.wait(2000);
  cy.imsId(menu).click();
  cy.wait(1000);
  cy.imsId(subMenu).click();
});

Cypress.Commands.add("selectMenu1", (menu) => {
  cy.imsId(menu).click();
});


// Logout
Cypress.Commands.add("logout", () => {
  cy.imsId("profile-menu").click();
  cy.imsId("btn-logout").click();
  cy.log("Successfully logout");
});