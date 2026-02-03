// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/08-economic-purpose/economic-purpose.cy.js --headed

import "cypress-file-upload";
import { create_economic_purpose } from "./economic-purpose.po";

describe("08. Economic Purpose Module Test Cases.", function () {
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

  it("08.01. Verify that the Economic Purpose list page loads successfully without any errors.", function () {
    create_economic_purpose.gridEconomicPurposeListPage();
  });

  it("08.02. Verify that a new Economic Purpose is created successfully when all required fields are provided with valid data.", function () {
    create_economic_purpose.createEconomicPurpose();
  });

  it("08.03. Verify that an Economic Purpose cannot be created without an Economic Purpose code, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurCode();
  });

  it("08.04. Verify that an Economic Purpose cannot be created without the English name, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurNameEn();
  });

  it("08.05. Verify that an Economic Purpose cannot be created without the Bangla name, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurNameBn();
  });

  it("08.06. Verify that an Economic Purpose cannot be created without selecting an Economic Purpose sector, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurSector();
  });

  it("08.07. Verify that an Economic Purpose cannot be created without selecting an Economic Purpose activity, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurActivity();
  });

  it("08.08. Verify that an Economic Purpose cannot be created without selecting an Economic Purpose category, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutLendingCategory();
  });

  it("08.09. Verify that an Economic Purpose cannot be created without selecting an Economic Purpose status, even if all other required fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurStatus();
  });

  it("08.10. Verify that an Economic Purpose cannot be created when any mandatory field is missing.", function () {
    create_economic_purpose.createWithoutOneMandatoryField();
  });

  it("08.11. Verify that the action buttons function correctly when clicked from the Economic Purpose list page.", function () {
    create_economic_purpose.actionButtonCheck();
  });

  it("08.12. Verify that the user can view all relevant details of an Economic Purpose, including all associated fields.", function () {
    create_economic_purpose.viewEconomicPurpose();
  });

  it("08.13. Verify that clicking the Go Back button on the Economic Purpose view page redirects the user to the Economic Purpose list page.", function () {
    create_economic_purpose.viewGoBackButton();
  });

  it("08.14. Verify that the Economic Purpose edit mode can be toggled on and off, and fields correctly switch between editable and view-only states.", function () {
    create_economic_purpose.turnOffOnEditMode();
  });

  it("08.15. Verify that the Economic Purpose name and description can be edited successfully.", function () {
    create_economic_purpose.editEconomicPurpose();
  });

  it("08.16. Verify that the Economic Purpose edit reset button restores the original values correctly.", function () {
    create_economic_purpose.editResetButton();
  });

  it("08.17. Verify that the Economic Purpose edit submit button updates the data successfully.", function () {
    create_economic_purpose.editSubmitButton();
  });

  it("08.18. Verify that clicking the Go Back button on the Economic Purpose edit page redirects the user to the Economic Purpose list page.", function () {
    create_economic_purpose.editGoBackButton();
  });

  it("08.19. Verify that the user can filter inactive Economic Purposes using the status dropdown on the list page.", function () {
    create_economic_purpose.statusInactiveDropdownCheck();
  });

  it("08.20. Verify that active Economic Purposes are filtered correctly using the status dropdown.", function () {
    create_economic_purpose.statusActiveDropdownCheck();
  });

  it("08.21. Verify that the search functionality returns correct results when searching by Economic Purpose name.", function () {
    create_economic_purpose.searchInEconomicPurposetName();
  });

  it("08.22. Verify that clicking the reset button successfully clears all filters and resets the Economic Purpose grid list.", function () {
    create_economic_purpose.gridResetButtonCheck();
  });

  it("08.23. Verify that clicking the refresh button successfully reloads the Economic Purpose grid list.", function () {
    create_economic_purpose.gridRefreshButtonCheck();
  });

  it("08.24. Verify that the Economic Purpose creation reset button clears all entered input values.", function () {
    create_economic_purpose.createResetButtonCheck();
  });

  it("08.25. Verify that validation messages are displayed for all required fields when the submit button is clicked with empty inputs.", function () {
    create_economic_purpose.createValidationMessageCheck();
  });

  it("08.26. Verify that clicking the Go Back button on the Economic Purpose creation page redirects the user to the Economic Purpose list page.", function () {
    create_economic_purpose.createGoBackButtonCheck();
  });

  it("08.27. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
    create_economic_purpose.gridLanguageSwitchCheck();
  });
});