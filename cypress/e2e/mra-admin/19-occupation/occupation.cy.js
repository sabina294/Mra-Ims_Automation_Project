// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/19-occupation/occupation.cy.js --headed

import "cypress-file-upload";
import { create_occupation } from "./occupation.po";

describe("19. Occupation Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,submit button Validation Messages,Go back and Language switch bangla Tests.", function () {
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

  it("19.01. Verify that the Occupation List page loads successfully.", function () {
    create_occupation.gridOccupationListPage();
  });

  it("19.02. To verify that a new Occupation can be successfully created when all required fields are filled with valid data.", function () {
    create_occupation.createOccupation();
  });

  it("19.03. To verify that the user can successfully edit an existing Occupation information, including the Occupation Name, and Description..", function () {
    create_occupation.viewOccupation();
  });

  it("19.04. should update the Occupation with valid information by MRA-Admin role", function () {
    create_occupation.editOccupation();
  });

  it("19.05. To verify that the user can filter the inactive Occupations using the Status Dropdown on the Occupation List page.", function () {
    create_occupation.statusInactiveDropdownCheck();
  });

  it("19.06. Verify Filter Active Result by Status Dropdown", function () {
    create_occupation.statusActiveDropdownCheck();
  });

  it("19.07. Verify Successful Search Result by Occupation Name", function () {
    create_occupation.searchInOccupationName();
  });

  it("19.08. Verify Successful Reset of Grid List Using the Reset Button on Occupation Page.", function () {
    create_occupation.gridResetButtonCheck();
  });

  it("19.09. Verify Successful Refresh of Grid List Using the Refresh Button on Occupation Page.", function () {
    create_occupation.gridRefreshButtonCheck();
  });

  it("19.10. Verify that the Occupation creation reset button clears applied input terms.", function () {
    create_occupation.createResetButtonCheck();
  });

  it("19.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_occupation.createValidationMessageCheck();
  });

  it("19.12. Verify that clicking the Go Back button on the Occupation Create page navigates the user back to the Occupation List page.", function () {
    create_occupation.createGoBackButtonCheck();
  });

  it("19.13. Verify that the grid list content successfully switches from English to Bangla.", function () {
    create_occupation.gridLanguageSwitchCheck();
  });
});
