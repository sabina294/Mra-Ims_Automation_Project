// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/04-thana/thana.cy.js --headed

import "cypress-file-upload";
import { create_thana } from "./thana.po";

describe("04. Thana Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,Pagination,All field,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("04.01. Verify that the Thana List page loads successfully.", function () {
    create_thana.gridThanaListPage();
  });

  it("04.02. To verify that a new Thana can be successfully created when all required fields are filled with valid data.", function () {
    create_thana.createThana();
  });

  it("04.03. To verify that the user can successfully edit an existing Thana information, including the Thana Name, and Description..", function () {
    create_thana.viewThana();
  });

  it("04.04. should update the Thana with valid information by MRA-Admin role", function () {
    create_thana.editThana();
  });

  it("04.05. To verify that the user can filter the inactive Thanas using the Status Dropdown on the Thana List page.", function () {
    create_thana.statusInactiveDropdownCheck();
  });

  it("04.06. Verify Filter Active Result by Status Dropdown", function () {
    create_thana.statusActiveDropdownCheck();
  });

  it("04.07. Verify Successful Search Result by Thana Name", function () {
    create_thana.searchInThanaName();
  });

  it("04.08. Verify Successful Reset of Grid List Using the Reset Button on Thana Page.", function () {
    create_thana.gridResetButtonCheck();
  });

  it("04.09. Verify Successful Refresh of Grid List Using the Refresh Button on Thana Page.", function () {
    create_thana.gridRefreshButtonCheck();
  });

  it("04.10.Verify pagination works correctly on last page of the thana list", function () {
    create_thana.paginationCheck();
  });

  it("04.11. Verify that a new Thana can be successfully created when all fields are filled with valid data.", function () {
    create_thana.createAllField();
  });

  it("04.12. Verify check if thana can be create without one mandatory field.", function () {
    create_thana.createWithoutOneMandatoryField();
  });

  it("04.13. Verify that the Thana creation reset button clears applied input terms.", function () {
    create_thana.createResetButtonCheck();
  });

  it("04.14. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_thana.createValidationMessageCheck();
  });

  it("04.15. Verify that clicking the Go Back button on the Thana Create page navigates the user back to the Thana List page.", function () {
    create_thana.createGoBackButtonCheck();
  });

  it("04.16. Verify successful thana creation without mandatory field.", function () {
    create_thana.createWithoutMandatoryField();
  });

  it("04.17. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_thana.gridLanguageSwitchCheck();
  });
});
