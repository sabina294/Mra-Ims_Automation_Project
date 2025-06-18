// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/08-economic-purpose/economic-purpose.cy.js --headed

import "cypress-file-upload";
import { create_economic_purpose } from "./economic-purpose.po";

describe("08. Economic purpose Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,Pagination,Without one field,Create Reset,Submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("08.01. Verify that the Economic Purpose List page loads successfully.", function () {
    create_economic_purpose.gridEconomicPurposeListPage();
  });

  it("08.02. To verify that a new Economic Purpose can be successfully created when all required fields are filled with valid data by MRA-Admin role", function () {
    create_economic_purpose.createEconomicPurpose();
  });

  it("08.03. To verify that the user can successfully view the detailed information of a Economic Purpose, including all the relevant fields.", function () {
    create_economic_purpose.viewEconomicPurpose();
  });

  it("08.04. To verify that the user can successfully edit an existing Economic Purpose's information, including the Economic Purpose Name, and Description. by MRA-Admin role", function () {
    create_economic_purpose.editEconomicPurpose();
  });

  it("08.05. To verify that the user can filter the inactive Economic Purposes using the Status Dropdown on the Economic Purpose List page.", function () {
    create_economic_purpose.statusInactiveDropdownCheck();
  });

  it("08.06. Verify Filter Active Result by Status Dropdown", function () {
    create_economic_purpose.statusActiveDropdownCheck();
  });

  it("08.07. Verify Successful Search Result by Economic Purpose Name", function () {
    create_economic_purpose.searchInEconomicPurposetName();
  });

  it("08.08. Verify Successful Reset of Grid List Using the Reset Button on Economic Purpose Page.", function () {
    create_economic_purpose.gridResetButtonCheck();
  });

  it("08.09. Verify Successful Refresh of Grid List Using the Refresh Button on Economic Purpose Page.", function () {
    create_economic_purpose.gridRefreshButtonCheck();
  });

  it("08.10.Verify pagination works correctly on last page of the economic purpose list", function () {
    create_economic_purpose.paginationCheck();
  });

  it("08.11. Verify check if economic purpose can be create without one mandatory field.", function () {
    create_economic_purpose.createWithoutOneMandatoryField();
  });

  it("08.12. Verify that the Economic Purpose creation reset button clears applied input terms.", function () {
    create_economic_purpose.createResetButtonCheck();
  });

  it("08.13. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_economic_purpose.createValidationMessageCheck();
  });

  it("08.14. Verify that clicking the Go Back button on the Economic Purpose Create page navigates the user back to the Economic Purpose List page.", function () {
    create_economic_purpose.createGoBackButtonCheck();
  });

  it("08.15. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_economic_purpose.gridLanguageSwitchCheck();
  });
});
