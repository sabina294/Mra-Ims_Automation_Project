// npx cypress open
// npm run auto
// npm run dev

import "cypress-file-upload";
import { create_economic_purpose } from "./economic-purpose.po";

describe("09. Economic purpose Grid list,Creation,View,Update,Inactive,Active,Search,Reset and Refresh Tests.", function () {
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

  it("09.01. Verify that the Economic Purpose List page loads successfully.", function () {
    create_economic_purpose.gridEconomicPurposeListPage();
  });

  it("09.02. To verify that a new Economic Purpose can be successfully created when all required fields are filled with valid data by MRA-Admin role", function () {
    create_economic_purpose.createEconomicPurpose();
  });

  it("09.03. To verify that the user can successfully view the detailed information of a Economic Purpose, including all the relevant fields.", function () {
    create_economic_purpose.viewEconomicPurpose();
  });

  it("09.04. To verify that the user can successfully edit an existing Economic Purpose's information, including the Economic Purpose Name, and Description. by MRA-Admin role", function () {
    create_economic_purpose.editEconomicPurpose();
  });

  it("09.05. To verify that the user can filter the inactive Economic Purposes using the Status Dropdown on the Economic Purpose List page.", function () {
    create_economic_purpose.statusInactiveDropdownCheck();
  });

  it("09.06. Verify Filter Active Result by Status Dropdown", function () {
    create_economic_purpose.statusActiveDropdownCheck();
  });

  it("09.07. Verify Successful Search Result by Economic Purpose Name", function () {
    create_economic_purpose.searchInEconomicPurposetName();
  });

  it("09.08. Verify Successful Reset of Grid List Using the Reset Button on Economic Purpose Page.", function () {
    create_economic_purpose.gridResetButtonCheck();
  });

  it("09.09. Verify Successful Refresh of Grid List Using the Refresh Button on Economic Purpose Page.", function () {
    create_economic_purpose.gridRefreshButtonCheck();
  });
});
