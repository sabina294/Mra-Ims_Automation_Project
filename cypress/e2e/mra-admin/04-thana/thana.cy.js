// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/04-thana/thana.cy.js --headed

import "cypress-file-upload";
import { create_thana } from "./thana.po";

describe("04. Thana Module Test Cases.", function () {
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

  it("04.01. Verify the thana list page loads without errors.", function () {
    create_thana.gridThanaListPage();
  });

  it("04.02. Verify a new thana is created successfully when all required fields are filled with valid data.", function () {
    create_thana.createThana();
  });

  it("04.03. Verify that a thana cannot be created without a upazila name english,even if all other fields are valid.", function () {
    create_thana.createWithoutNameEn();
  });

  it("04.04. Verify that a thana cannot be created without a upazila name bangla,even if all other fields are valid.", function () {
    create_thana.createWithoutNameBn();
  });

  it("04.05. Verify that a thana cannot be created without a upazila code,even if all other fields are valid.", function () {
    create_thana.createWithoutUpazilaCode();
  });

  it("04.06. Verify that a thana cannot be created without a postal code,even if all other fields are valid.", function () {
    create_thana.createWithoutPostalCode();
  });

  it("04.07. Verify that a thana cannot be created without a website,even if all other fields are valid.", function () {
    create_thana.createWithoutWebsite();
  });

  it("04.08. Verify that a thana cannot be created without a upazila type,even if all other fields are valid.", function () {
    create_thana.createWithoutUpazilaType();
  });

  it("04.09. Verify that a thana cannot be created without a district,even if all other fields are valid.", function () {
    create_thana.createWithoutDistrict();
  });

  it("04.10. Verify that a thana cannot be created without a status,even if all other fields are valid.", function () {
    create_thana.createWithoutStatus();
  });

  it("04.11. Verify a new thana is created successfully when all fields are filled with valid data.", function () {
    create_thana.createAllField();
  });

  it("04.12. Verify that a thana cannot be created without filling in the mandatory field.", function () {
    create_thana.createWithoutOneMandatoryField();
  });

  it("04.13. Verify thana creation fails when mandatory fields are missing.", function () {
    create_thana.createWithoutMandatoryField();
  });

  it("04.14. Verify successfully performs the action when the action button is clicked.", function () {
    create_thana.actionButtonCheck();
  });

  it("04.15. Verify the user can view all relevant details of a thana, including its associated fields.", function () {
    create_thana.viewThana();
  });

  it("04.16. Verify that the thana forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_thana.turnOffOnEditMode();
  });

  it("04.17. Verify the thana name and description can be edited successfully.", function () {
    create_thana.editThana();
  });

  it("04.18. Verify the thana edit reset button functions correctly.", function () {
    create_thana.editResetButton();
  });

  it("04.19. Verify the thana edit submit button functions correctly.", function () {
    create_thana.editSubmitButton();
  });

  it("04.20. Verify that clicking the go back button on the thana edit page redirects the user to the thana list page.", function () {
    create_thana.editGoBackButton();
  });

  it("04.21. Verify the user can filter inactive thanas using the status dropdown on the thana list page.", function () {
    create_thana.statusInactiveDropdownCheck();
  });

  it("04.22. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_thana.statusActiveDropdownCheck();
  });

  it("04.23. Verify the search returns correct results when searching by thana name.", function () {
    create_thana.searchInThanaName();
  });

  it("04.24. Verify the grid list resets successfully when the reset button is clicked on the thana page.", function () {
    create_thana.gridResetButtonCheck();
  });

  it("04.25. Verify that the grid list is refreshed successfully when the refresh button is clicked on the thana page.", function () {
    create_thana.gridRefreshButtonCheck();
  });

  it("04.26. Verify pagination functions as expected on the last page of the thana list.", function () {
    create_thana.paginationCheck();
  });

  it("04.27. Verify the thana creation reset button clears all entered input values.", function () {
    create_thana.createResetButtonCheck();
  });

  it("04.28. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_thana.createValidationMessageCheck();
  });

  it("04.29. Verify that clicking the go back button on the thana create page redirects the user to the thana list page.", function () {
    create_thana.createGoBackButtonCheck();
  });

  it("04.30. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_thana.gridLanguageSwitchCheck();
  });
});
