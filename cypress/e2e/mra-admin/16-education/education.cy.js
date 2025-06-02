// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/16-education/education.cy.js --headed

import "cypress-file-upload";
import { create_education } from "./education.po";

describe("16. Education Grid list,Creation,View,Update,Inactive,Active,Search,Reset,Refresh,create Reset,Validation Messages and Go back Tests.", function () {
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

  it("16.01. Verify that the Education List page loads successfully.", function () {
    create_education.gridEducationListPage();
  });

  it("16.02. To verify that a new Education can be successfully created when all required fields are filled with valid data.", function () {
    create_education.createEducation();
  });

  it("16.03. To verify that the user can successfully edit an existing Education information, including the Education Name, and Description..", function () {
    create_education.viewEducation();
  });

  it("16.04. should update the Education with valid information by MRA-Admin role", function () {
    create_education.editEducation();
  });

  it("16.05. To verify that the user can filter the inactive Educations using the Status Dropdown on the Education List page.", function () {
    create_education.statusInactiveDropdownCheck();
  });

  it("16.06. Verify Filter Active Result by Status Dropdown", function () {
    create_education.statusActiveDropdownCheck();
  });

  it("16.07. Verify Successful Search Result by Education Name", function () {
    create_education.searchInEducationName();
  });

  it("16.08. Verify Successful Reset of Grid List Using the Reset Button on Education Page.", function () {
    create_education.gridResetButtonCheck();
  });

  it("16.09. Verify Successful Refresh of Grid List Using the Refresh Button on Education Page.", function () {
    create_education.gridRefreshButtonCheck();
  });

  it("16.10. Verify that the Education creation reset button clears applied input terms.", function () {
    create_education.createResetButtonCheck();
  });

  it("16.11. Verify that required field validation messages appear when mandatory fields are left empty.", function () {
    create_education.createValidationMessageCheck();
  });

  it("16.12. Verify that clicking the Go Back button on the Education Create page navigates the user back to the Education List page.", function () {
    create_education.createGoBackButtonCheck();
  });
});
