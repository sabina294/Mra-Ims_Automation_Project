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

  it("03.01. Verify that the District List page loads successfully without any errors.", function () {
    create_district.gridDistrictListPage();
  });

  it("03.02. Verify that a district is created successfully when all mandatory fields are populated with valid data.", function () {
    create_district.createDistrict();
  });

  it("03.03. Verify that a district is created successfully when all available fields are populated with valid data.", function () {
    create_district.createAllField();
  });

  it("03.04. Verify that district creation fails when the English district name is not provided.", function () {
    create_district.createWithoutNameEn();
  });

  it("03.05. Verify that district creation fails when the Bangla district name is not provided.", function () {
    create_district.createWithoutNameBn();
  });

  it("03.06. Verify that district creation fails when the district code is not provided.", function () {
    create_district.createWithoutDisCode();
  });

  it("03.07. Verify that district creation fails when the established year is not provided.", function () {
    create_district.createWithoutEstabYear();
  });

  it("03.08. Verify that district creation fails when the division is not selected.", function () {
    create_district.createWithoutDivision();
  });

  it("03.09. Verify that district creation fails when the status is not selected.", function () {
    create_district.createWithoutStatus();
  });

  it("03.10. Verify that the action buttons perform the expected operations correctly.", function () {
    create_district.actionButtonCheck();
  });

  it("03.11. Verify that the user can view complete district details along with all associated information.", function () {
    create_district.viewDistrict();
  });

  it("03.12. Verify that clicking the Go Back button from the district details page navigates to the District List page.", function () {
    create_district.viewGoBackButton();
  });

  it("03.13. Verify that edit mode can be enabled and disabled and that fields behave accordingly.", function () {
    create_district.turnOffOnEditMode();
  });

  it("03.14. Verify that district name and description can be updated successfully.", function () {
    create_district.editDistrict();
  });

  it("03.15. Verify that clicking the Reset button in edit mode clears all modified values.", function () {
    create_district.editResetButton();
  });

  it("03.16. Verify that clicking the Submit button in edit mode updates the district information successfully.", function () {
    create_district.editSubmitButton();
  });

  it("03.17. Verify that clicking the Go Back button from the district edit page navigates to the District List page.", function () {
    create_district.editGoBackButton();
  });

  it("03.18. Verify that inactive districts are displayed correctly when filtered by status.", function () {
    create_district.statusInactiveDropdownCheck();
  });

  it("03.19. Verify that active districts are displayed correctly when filtered by status.", function () {
    create_district.statusActiveDropdownCheck();
  });

  it("03.20. Verify that searching by district name returns accurate and relevant results.", function () {
    create_district.searchInDistrictName();
  });

  it("03.21. Verify that clicking the Reset button restores the district grid to its default state.", function () {
    create_district.gridResetButtonCheck();
  });

  it("03.22. Verify that clicking the Refresh button reloads the district grid successfully.", function () {
    create_district.gridRefreshButtonCheck();
  });

  it("03.23. Verify that pagination functions correctly when navigating to the last page of the district list.", function () {
    create_district.paginationCheck();
  });

  it("03.24. Verify that clicking the Reset button on the district creation form clears all input fields.", function () {
    create_district.createResetButtonCheck();
  });

  it("03.25. Verify that validation messages are displayed for all required fields when submitting an empty district form.", function () {
    create_district.createValidationMessageCheck();
  });

  it("03.26. Verify that clicking the Go Back button from the district creation page navigates to the District List page.", function () {
    create_district.createGoBackButtonCheck();
  });

  it("03.27. Verify that when the user clicks the Search button on the district grid page, the system redirects to the district List page..", function () {
    create_district.gridSearchButtonCheck();
  });

  it("03.28. Verify that the district grid updates correctly when switching the language from English to Bangla.", function () {
    create_district.gridLanguageSwitchCheck();
  });

});
