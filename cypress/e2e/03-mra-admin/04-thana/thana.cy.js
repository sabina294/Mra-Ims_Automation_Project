// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/04-thana/thana.cy.js --headed

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

  it("04.01. Verify that the thana list page loads successfully without any errors.", function () {
    create_thana.gridThanaListPage();
  });

  it("04.02. Verify that a new thana is created successfully when all required fields are populated with valid data.", function () {
    create_thana.createThana();
  });

  it("04.03. Verify that thana creation fails when the Upazila Name (English) field is left empty, even if all other fields are valid.", function () {
    create_thana.createWithoutNameEn();
  });

  it("04.04. Verify that thana creation fails when the Upazila Name (Bangla) field is left empty, even if all other fields are valid.", function () {
    create_thana.createWithoutNameBn();
  });

  it("04.05. Verify that thana creation fails when the Upazila Code field is left empty, even if all other fields are valid.", function () {
    create_thana.createWithoutUpazilaCode();
  });

  it("04.06. Verify that thana creation fails when the Postal Code field is left empty, even if all other fields are valid.", function () {
    create_thana.createWithoutPostalCode();
  });

  it("04.07. Verify that thana creation fails when the Website field is left empty, even if all other fields are valid.", function () {
    create_thana.createWithoutWebsite();
  });

  it("04.08. Verify that thana creation fails when the Upazila Type field is not selected, even if all other fields are valid.", function () {
    create_thana.createWithoutUpazilaType();
  });

  it("04.09. Verify that thana creation fails when the District field is not selected, even if all other fields are valid.", function () {
    create_thana.createWithoutDistrict();
  });

  it("04.10. Verify that thana creation fails when the Status field is not selected, even if all other fields are valid.", function () {
    create_thana.createWithoutStatus();
  });

  it("04.11. Verify that a new thana is created successfully when all fields are filled with valid data.", function () {
    create_thana.createAllField();
  });

  it("04.12. Verify that thana creation fails when at least one mandatory field is not filled.", function () {
    create_thana.createWithoutOneMandatoryField();
  });

  it("04.13. Verify that thana creation is blocked when all mandatory fields are missing.", function () {
    create_thana.createWithoutMandatoryField();
  });

  it("04.14. Verify that the appropriate action is performed when the action button is clicked from the thana list.", function () {
    create_thana.actionButtonCheck();
  });

  it("04.15. Verify that the user can view complete thana details, including all associated fields.", function () {
    create_thana.viewThana();
  });

  it("04.16. Verify that clicking the Go Back button on the thana view page redirects the user to the thana list page.", function () {
    create_thana.viewGoBackButton();
  });

  it("04.17. Verify that edit mode can be toggled on and off and that fields are correctly enabled or disabled accordingly.", function () {
    create_thana.turnOffOnEditMode();
  });

  it("04.18. Verify that the thana name and description can be updated successfully.", function () {
    create_thana.editThana();
  });

  it("04.19. Verify that the reset button on the thana edit form restores the original field values.", function () {
    create_thana.editResetButton();
  });

  it("04.20. Verify that the submit button on the thana edit form saves changes successfully.", function () {
    create_thana.editSubmitButton();
  });

  it("04.21. Verify that clicking the Go Back button on the thana edit page redirects the user to the thana list page.", function () {
    create_thana.editGoBackButton();
  });

  it("04.22. Verify that inactive thanas can be filtered correctly using the status dropdown.", function () {
    create_thana.statusInactiveDropdownCheck();
  });

  it("04.23. Verify that active thanas are filtered correctly using the status dropdown.", function () {
    create_thana.statusActiveDropdownCheck();
  });

  it("04.24. Verify that searching by thana name returns accurate results.", function () {
    create_thana.searchInThanaName();
  });

  it("04.25. Verify that clicking the Reset button clears all applied filters and resets the grid list.", function () {
    create_thana.gridResetButtonCheck();
  });

  it("04.26. Verify that clicking the Refresh button reloads the thana grid list successfully.", function () {
    create_thana.gridRefreshButtonCheck();
  });

  it("04.27. Verify that pagination functions correctly when navigating to the last page of the thana list.", function () {
    create_thana.paginationCheck();
  });

  it("04.28. Verify that the reset button on the thana creation form clears all entered input values.", function () {
    create_thana.createResetButtonCheck();
  });

  it("04.29. Verify that validation messages are displayed for required fields when submitting the form with empty inputs.", function () {
    create_thana.createValidationMessageCheck();
  });

  it("04.30. Verify that clicking the Go Back button on the thana creation page redirects the user to the thana list page.", function () {
    create_thana.createGoBackButtonCheck();
  });

  it("04.31. Verify that when the user clicks the Search button on the thana grid page, the system redirects to the thana List page..", function () {
    create_thana.gridSearchButtonCheck();
  });

  it("04.32. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_thana.gridLanguageSwitchCheck();
  });


});
