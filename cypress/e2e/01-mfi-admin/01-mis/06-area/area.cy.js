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

  it("06.01. Verify that the Area List page loads without any errors.", function () {
    create_area.gridAreaListPage();
  });

  it("06.02. Verify that a new area is created successfully when all required fields are filled with valid data.", function () {
    create_area.createArea();
  });

  it("06.03. Verify that an area cannot be created without an English area name, even if all other fields are valid.", function () {
    create_area.createWithoutNameEn();
  });

  it("06.04. Verify that an area cannot be created without a Bangla area name, even if all other fields are valid.", function () {
    create_area.createWithoutNameBn();
  });

  it("06.05. Verify that an area cannot be created without selecting a zone, even if all other fields are valid.", function () {
    create_area.createWithoutZone();
  });

  it("06.06. Verify that an area cannot be created without an area code, even if all other fields are valid.", function () {
    create_area.createWithoutAreaCode();
  });

  it("06.07. Verify that an area cannot be created without selecting a status, even if all other fields are valid.", function () {
    create_area.createWithoutStatus();
  });

  it("06.08. Verify that the action button performs the expected action successfully.", function () {
    create_area.actionButtonCheck();
  });

  it("06.09. Verify that the user can view all relevant details of an area, including its associated fields.", function () {
    create_area.viewArea();
  });

  it("06.10. Verify that clicking the Go Back button on the Area View page redirects the user to the Area List page.", function () {
    create_area.viewGoBackButton();
  });

  it("06.11. Verify that edit mode can be toggled on and off in the area form, and all fields switch between editable and view-only states correctly.", function () {
    create_area.turnOffEditMode();
  });

  it("06.12. Verify that the area name and description can be edited successfully.", function () {
    create_area.editArea();
  });

  it("06.13. Verify that the Reset button in area edit mode clears changes correctly.", function () {
    create_area.editResetButton();
  });

  it("06.14. Verify that the Submit button in area edit mode updates the data successfully.", function () {
    create_area.editSubmitButton();
  });

  it("06.15. Verify that clicking the Go Back button on the area edit page redirects the user to the Area List page.", function () {
    create_area.editGoBackButton();
  });

  it("06.16. Verify that inactive areas can be filtered correctly using the status dropdown on the Area List page.", function () {
    create_area.statusInactiveDropdownCheck();
  });

  it("06.17. Verify that active areas are filtered correctly using the status dropdown.", function () {
    create_area.statusActiveDropdownCheck();
  });

  it("06.18. Verify that searching by area name returns the correct results.", function () {
    create_area.searchInAreaName();
  });

  it("06.19. Verify that the grid list resets successfully when the Reset button is clicked on the Area page.", function () {
    create_area.gridResetButtonCheck();
  });

  it("06.20. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Area page.", function () {
    create_area.gridRefreshButtonCheck();
  });

  it("06.21. Verify that the Reset button on the area creation form clears all entered input values.", function () {
    create_area.createResetButtonCheck();
  });

  it("06.22. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_area.createValidationMessageCheck();
  });

  it("06.23. Verify that clicking the Go Back button on the Area Create page redirects the user to the Area List page.", function () {
    create_area.createGoBackButtonCheck();
  });

  it("06.24. Verify that clicking the Search button on the Area Grid page correctly redirects to the Area List page.", function () {
    create_area.gridSearchButtonCheck();
  });

  it("06.25. Verify that the grid list content correctly switches between English and Bangla languages.", function () {
    create_area.gridLanguageSwitchCheck();
  });
});
