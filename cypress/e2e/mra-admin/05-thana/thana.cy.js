// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/05-thana/thana.cy.js --headed

import "cypress-file-upload";
import { create_thana } from "./thana.po";

describe("05. Thana Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,Validation Messages and Go back Tests.", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mraAdminUserId,
        d.credential.mraAdminPassword
      );
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("05.01. Verify that the Thana List page loads successfully.", function () {
    create_thana.gridThanaListPage();
  });

  it("05.02. To verify that a new Thana can be successfully created when all required fields are filled with valid data.", function () {
    create_thana.createThana();
  });

  it("05.03. To verify that the user can successfully edit an existing Thana information, including the Thana Name, and Description..", function () {
    create_thana.viewThana();
  });

  it("05.04. should update the Thana with valid information by MRA-Admin role", function () {
    create_thana.editThana();
  });

  it("05.05. To verify that the user can filter the inactive Thanas using the Status Dropdown on the Thana List page.", function () {
    create_thana.statusInactiveDropdownCheck();
  });

  it("05.06. Verify Filter Active Result by Status Dropdown", function () {
    create_thana.statusActiveDropdownCheck();
  });

  it("05.07. Verify Successful Search Result by Thana Name", function () {
    create_thana.searchInThanaName();
  });

  it("05.08. Verify Successful Reset of Grid List Using the Reset Button on Thana Page.", function () {
    create_thana.gridResetButtonCheck();
  });

  it("05.09. Verify Successful Refresh of Grid List Using the Refresh Button on Thana Page.", function () {
    create_thana.gridRefreshButtonCheck();
  });

  it("05.10. Verify that the Thana creation reset button clears applied input terms.", function () {
    create_thana.createResetButtonCheck();
  });

  it("05.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_thana.createValidationMessageCheck();
  });

  it("05.12. Verify that clicking the Go Back button on the Thana Create page navigates the user back to the Thana List page.", function () {
    create_thana.createGoBackButtonCheck();
  });
});
