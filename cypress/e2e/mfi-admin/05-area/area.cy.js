// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mfi-admin/05-area/area.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_area } from "./area.po";

describe("05. Area Module Test Cases", function () {
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

  it("05.01. Verify the area list page loads without errors.", function () {
    create_area.gridAreaListPage();
  });

  it("05.02. Verify a new area is created successfully when all required fields are filled with valid data.", function () {
    create_area.createArea();
  });

  it("05.03. Verify that a area cannot be created without a area name english, even if all other fields are valid.", function () {
    create_area.createWithoutNameEn();
  });

  it("05.04. Verify that a area cannot be created without a area name bangla, even if all other fields are valid.", function () {
    create_area.createWithoutNameBn();
  });

  it("05.05. Verify that a area cannot be created without a zone, even if all other fields are valid.", function () {
    create_area.createWithoutZone();
  });

  it("05.06. Verify that a area cannot be created without a area code, even if all other fields are valid.", function () {
    create_area.createWithoutAreaCode();
  });

  it("05.07. Verify that a area cannot be created without status, even if all other fields are valid.", function () {
    create_area.createWithoutStatus();
  });

  it("05.08. Verify successfully performs the action when the action button is clicked.", function () {
    create_area.actionButtonCheck();
  });

  it("05.09. Verify the user can view all relevant details of a area, including its associated fields.", function () {
    create_area.viewArea();
  });

  it("05.10. Verify that the area forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_area.turnOffEditMode();
  });

  it("05.11. Verify the area name and description can be edited successfully.", function () {
    create_area.editArea();
  });

  it("05.12. Verify the area edit reset button functions correctly.", function () {
    create_area.editResetButton();
  });

  it("05.13. Verify the area edit submit button functions correctly.", function () {
    create_area.editSubmitButton();
  });

  it("05.14. Verify that clicking the go back button on the area edit page redirects the user to the area list page.", function () {
    create_area.editGoBackButton();
  });

  it("05.15. Verify the user can filter inactive areas using the status dropdown on the area list page.", function () {
    create_area.statusInactiveDropdownCheck();
  });

  it("05.16. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_area.statusActiveDropdownCheck();
  });

  it("05.17. Verify the search returns correct results when searching by area name.", function () {
    create_area.searchInAreaName();
  });

  it("05.18. Verify the grid list resets successfully when the reset button is clicked on the area page.", function () {
    create_area.gridResetButtonCheck();
  });

  it("05.19. Verify that the grid list is refreshed successfully when the refresh button is clicked on the area page.", function () {
    create_area.gridRefreshButtonCheck();
  });

  it("05.20. Verify the area creation reset button clears all entered input values.", function () {
    create_area.createResetButtonCheck();
  });

  it("05.21. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_area.createValidationMessageCheck();
  });

  it("05.22. Verify that clicking the go back button on the area create page redirects the user to the area list page.", function () {
    create_area.createGoBackButtonCheck();
  });

  it("05.23. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_area.gridLanguageSwitchCheck();
  });
});
