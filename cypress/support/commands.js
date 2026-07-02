Cypress.Commands.add("imsId", (id) => {
  return cy.get(`[data-ims-id='${id}']`);
});

Cypress.Commands.add("formController", (name) => {
  return cy.get(`[formcontrolname='${name}']`);
});


// MRA Admin Login
Cypress.Commands.add("loginAsMraAdmin", (url, data) => {
  cy.then(() => {
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        origin: url,
        permissions: ["geolocation"],
      },
    });
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setGeolocationOverride",
      params: {
        latitude: 23.8103,
        longitude: 90.4125,
        accuracy: 100,
      },
    });
  });
  cy.visit(url);
  cy.formController("user_id")
    .clear()
    .type(data.credential.mraAdminUserId);
  cy.formController("password")
    .clear()
    .type(data.credential.mraAdminPassword);
  cy.get("#submit-button").click();
  cy.changeLanguage("english");
  cy.log("Successfully logged in as MRA Admin");
});


// MFI Admin Login
Cypress.Commands.add("loginAsMfiAdmin", (url, data) => {
  cy.then(() => {
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        origin: url,
        permissions: ["geolocation"],
      },
    });
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setGeolocationOverride",
      params: {
        latitude: 23.8103,
        longitude: 90.4125,
        accuracy: 100,
      },
    });
  });
  cy.visit(url);
  cy.formController("user_id")
    .clear()
    .type(data.credential.mfiAdminUserId);
  cy.formController("password")
    .clear()
    .type(data.credential.mfiAdminPassword);
  cy.get("#submit-button").click();
  cy.changeLanguage("english");
  cy.log("Successfully logged in as MFI Admin");
});


// Branch Manager Login
Cypress.Commands.add("loginAsBranchManager", (url, data) => {
  cy.then(() => {
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        origin: url,
        permissions: ["geolocation"],
      },
    });
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setGeolocationOverride",
      params: {
        latitude: 23.8103,
        longitude: 90.4125,
        accuracy: 100,
      },
    });
  });
  cy.visit(url);
  cy.formController("user_id")
    .clear()
    .type(data.credential.branchManagerUserId)
  cy.formController("password")
    .clear()
    .type(data.credential.branchManagerPassword);
  cy.get("#submit-button").click();
  cy.changeLanguage("english");
  cy.log("Successfully logged in as Branch Manager");
});


// Field Officer Login
Cypress.Commands.add("loginAsFieldOfficer", (url, data) => {
  cy.then(() => {
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        origin: url,
        permissions: ["geolocation"],
      },
    });
    Cypress.automation("remote:debugger:protocol", {
      command: "Emulation.setGeolocationOverride",
      params: {
        latitude: 23.8103,
        longitude: 90.4125,
        accuracy: 100,
      },
    });
  });
  cy.visit(url);
  cy.formController("user_id")
    .clear()
    .type(data.credential.fieldOfficerUserId);
  cy.formController("password")
    .clear()
    .type(data.credential.fieldOfficerPassword);
  cy.get("#submit-button").click();
  cy.changeLanguage("english");
  cy.log("Successfully logged in as Field Officer");
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