// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/16-gender/gender.cy.js --headed

import "cypress-file-upload";
import { create_gender } from "./gender.po";

describe("16. Gender Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("16.01. Verify that the Gender List page loads successfully.", function () {
    create_gender.gridGenderListPage();
  });

  it("16.02. To verify that a new Gender can be successfully created when all required fields are filled with valid data.", function () {
    create_gender.createGender();
  });

  it("16.03. To verify that the user can successfully edit an existing Gender information, including the Gender Name, and Description..", function () {
    create_gender.viewGender();
  });

  it("16.04. should update the Gender with valid information by MRA-Admin role", function () {
    create_gender.editGender();
  });

  it("16.05. To verify that the user can filter the inactive Genders using the Status Dropdown on the Gender List page.", function () {
    create_gender.statusInactiveDropdownCheck();
  });

  it("16.06. Verify Filter Active Result by Status Dropdown", function () {
    create_gender.statusActiveDropdownCheck();
  });

  it("16.07. Verify Successful Search Result by Gender Name", function () {
    create_gender.searchInGenderName();
  });

  it("16.08. Verify Successful Reset of Grid List Using the Reset Button on Gender Page.", function () {
    create_gender.gridResetButtonCheck();
  });

  it("16.09. Verify Successful Refresh of Grid List Using the Refresh Button on Gender Page.", function () {
    create_gender.gridRefreshButtonCheck();
  });

  it("16.10. Verify that the Gender creation reset button clears applied input terms.", function () {
    create_gender.createResetButtonCheck();
  });

  it("16.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_gender.createValidationMessageCheck();
  });

  it("16.12. Verify that clicking the Go Back button on the Gender Create page navigates the user back to the Gender List page.", function () {
    create_gender.createGoBackButtonCheck();
  });

  it("16.13. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_gender.gridLanguageSwitchCheck();
  });
});
