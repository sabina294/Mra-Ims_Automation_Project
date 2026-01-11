// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/06-area/area.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_area } from "./area.po";

describe("06. Area Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.mfiAdminUserId,
        d.credential.mfiAdminPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });

  it("06.01. Verify the area list page loads without errors.", function () {
    create_area.gridAreaListPage();
  });

  it("06.02. Verify a new area is created successfully when all required fields are filled with valid data.", function () {
    create_area.createArea();
  });

  it("06.03. Verify that a area cannot be created without a area name english, even if all other fields are valid.", function () {
    create_area.createWithoutNameEn();
  });

  it("06.04. Verify that a area cannot be created without a area name bangla, even if all other fields are valid.", function () {
    create_area.createWithoutNameBn();
  });

  it("06.05. Verify that a area cannot be created without a zone, even if all other fields are valid.", function () {
    create_area.createWithoutZone();
  });

  it("06.06. Verify that a area cannot be created without a area code, even if all other fields are valid.", function () {
    create_area.createWithoutAreaCode();
  });

  it("06.07. Verify that a area cannot be created without status, even if all other fields are valid.", function () {
    create_area.createWithoutStatus();
  });

  it("06.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_area.actionButtonCheck();
  });

  it("06.09. Verify the user can view all relevant details of a area, including its associated fields.", function () {
    create_area.viewArea();
  });

  it("06.10. Verify that clicking the go back button on the area view page redirects the user to the area list page.", function () {
    create_area.viewGoBackButton();
  });

  it("06.11. Verify that the area forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_area.turnOffEditMode();
  });

  it("06.12. Verify the area name and description can be edited successfully.", function () {
    create_area.editArea();
  });

  it("06.13. Verify the area edit reset button functions correctly.", function () {
    create_area.editResetButton();
  });

  it("06.14. Verify the area edit submit button functions correctly.", function () {
    create_area.editSubmitButton();
  });

  it("06.15. Verify that clicking the go back button on the area edit page redirects the user to the area list page.", function () {
    create_area.editGoBackButton();
  });

  it("06.16. Verify the user can filter inactive areas using the status dropdown on the area list page.", function () {
    create_area.statusInactiveDropdownCheck();
  });

  it("06.17. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_area.statusActiveDropdownCheck();
  });

  it("06.18. Verify the search returns correct results when searching by area name.", function () {
    create_area.searchInAreaName();
  });

  it("06.19. Verify the grid list resets successfully when the reset button is clicked on the area page.", function () {
    create_area.gridResetButtonCheck();
  });

  it("06.20. Verify that the grid list is refreshed successfully when the refresh button is clicked on the area page.", function () {
    create_area.gridRefreshButtonCheck();
  });

  it("06.21. Verify the area creation reset button clears all entered input values.", function () {
    create_area.createResetButtonCheck();
  });

  it("06.22. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_area.createValidationMessageCheck();
  });

  it("06.23. Verify that clicking the go back button on the area create page redirects the user to the area list page.", function () {
    create_area.createGoBackButtonCheck();
  });

  it("06.24. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_area.gridLanguageSwitchCheck();
  });
});
