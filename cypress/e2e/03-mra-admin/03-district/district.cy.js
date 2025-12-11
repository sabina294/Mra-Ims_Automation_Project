// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/03-district/district.cy.js --headed

import "cypress-file-upload";
import { create_district } from "./district.po";

describe("03. District Module Test Cases.", function () {
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

  it("03.01. Verify the district list page loads without errors.", function () {
    create_district.gridDistrictListPage();
  });

  it("03.02. Verify a new district is created successfully when all required fields are filled with valid data.", function () {
    create_district.createDistrict();
  });

  it("03.03. Verify a new district is created successfully when all fields are filled with valid data.", function () {
    create_district.createAllField();
  });

  it("03.04. Verify that a district cannot be created without a district name english,even if all other fields are valid.", function () {
    create_district.createWithoutNameEn();
  });

  it("03.05. Verify that a district cannot be created without a district name bangla,even if all other fields are valid.", function () {
    create_district.createWithoutNameBn();
  });

  it("03.06. Verify that a district cannot be created without a district code,even if all other fields are valid.", function () {
    create_district.createWithoutDisCode();
  });

  it("03.07. Verify that a district cannot be created without established year,even if all other fields are valid.", function () {
    create_district.createWithoutEstabYear();
  });

  it("03.08. Verify that a district cannot be created without division,even if all other fields are valid.", function () {
    create_district.createWithoutDivision();
  });

  it("03.09. Verify that a district cannot be created without status,even if all other fields are valid.", function () {
    create_district.createWithoutStatus();
  });

  it("03.10. Verify successfully performs the action when the action button is clicked.", function () {
    create_district.actionButtonCheck();
  });

  it("03.11. Verify the user can view all relevant details of a district, including its associated fields.", function () {
    create_district.viewDistrict();
  });

  it("03.12. Verify that clicking the go back button on the district view page redirects the user to the district list page.", function () {
    create_district.viewGoBackButton();
  });

  it("03.13. Verify that the district forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_district.turnOffOnEditMode();
  });

  it("03.14. Verify the district name and description can be edited successfully.", function () {
    create_district.editDistrict();
  });

  it("03.15. Verify the district edit reset button functions correctly.", function () {
    create_district.editResetButton();
  });

  it("03.16. Verify the district edit submit button functions correctly.", function () {
    create_district.editSubmitButton();
  });

  it("03.17. Verify that clicking the go back button on the district edit page redirects the user to the district list page.", function () {
    create_district.editGoBackButton();
  });

  it("03.18. Verify the user can filter inactive districts using the status dropdown on the district list page.", function () {
    create_district.statusInactiveDropdownCheck();
  });

  it("03.19. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_district.statusActiveDropdownCheck();
  });

  it("03.20. Verify the search returns correct results when searching by district name.", function () {
    create_district.searchInDistrictName();
  });

  it("03.21. Verify the grid list resets successfully when the reset button is clicked on the district page.", function () {
    create_district.gridResetButtonCheck();
  });

  it("03.22. Verify that the grid list is refreshed successfully when the refresh button is clicked on the district page.", function () {
    create_district.gridRefreshButtonCheck();
  });

  it("03.23. Verify pagination functions as expected on the last page of the district list.", function () {
    create_district.paginationCheck();
  });

  it("03.24. Verify the district creation reset button clears all entered input values.", function () {
    create_district.createResetButtonCheck();
  });

  it("03.25. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_district.createValidationMessageCheck();
  });

  it("03.26. Verify that clicking the go back button on the district create page redirects the user to the district list page.", function () {
    create_district.createGoBackButtonCheck();
  });

  it("03.27. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_district.gridLanguageSwitchCheck();
  });

});
