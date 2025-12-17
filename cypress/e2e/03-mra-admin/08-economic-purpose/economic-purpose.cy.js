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

  it("08.01. Verify the economic purpose list page loads without errors.", function () {
    create_economic_purpose.gridEconomicPurposeListPage();
  });

  it("08.02. Verify a new economic purpose is created successfully when all required fields are filled with valid data.", function () {
    create_economic_purpose.createEconomicPurpose();
  });

  it("08.03. Verify that a economic purpose cannot be created without a economic purpose code,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurCode();
  });

  it("08.04. Verify that a economic purpose cannot be created without a economic purpose name en,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurNameEn();
  });

  it("08.05. Verify that a economic purpose cannot be created without economic purpose name bn, even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurNameBn();
  });

  it("08.06. Verify that a economic purpose cannot be created without economic purpose sector,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurSector();
  });

  it("08.07. Verify that a economic purpose cannot be created without economic purpose activity,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurActivity();
  });

  it("08.08. Verify that a economic purpose cannot be created without economic purpose category,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurCategory();
  });

  it("08.09. Verify that a economic purpose cannot be created without economic purpose status,even if all other fields are valid.", function () {
    create_economic_purpose.createWithoutEcoPurStatus();
  });

  it("08.10. Verify check if a economic purpose cannot be created when a mandatory field is missing.", function () {
    create_economic_purpose.createWithoutOneMandatoryField();
  });

  it("08.11. Verify successfully performs the action when the action button is clicked.", function () {
    create_economic_purpose.actionButtonCheck();
  });

  it("08.12. Verify the user can view all relevant details of a economic purpose, including its associated fields.", function () {
    create_economic_purpose.viewEconomicPurpose();
  });

  it("08.13. Verify that clicking the go back button on the economic purpose view page redirects the user to the economic purpose list page.", function () {
    create_economic_purpose.viewGoBackButton();
  });

  it("08.14. Verify that the economic purpose forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_economic_purpose.turnOffOnEditMode();
  });

  it("08.15. Verify the economic purpose name and description can be edited successfully.", function () {
    create_economic_purpose.editEconomicPurpose();
  });

  it("08.16. Verify the economic purpose edit reset button functions correctly.", function () {
    create_economic_purpose.editResetButton();
  });

  it("08.17. Verify the economic purpose edit submit button functions correctly.", function () {
    create_economic_purpose.editSubmitButton();
  });

  it("08.18. Verify that clicking the go back button on the economic purpose edit page redirects the user to the economic purpose list page.", function () {
    create_economic_purpose.editGoBackButton();
  });

  it("08.19. Verify the user can filter inactive economic purposes using the status dropdown on the economic purpose list page.", function () {
    create_economic_purpose.statusInactiveDropdownCheck();
  });

  it("08.20. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_economic_purpose.statusActiveDropdownCheck();
  });

  it("08.21. Verify the search returns correct results when searching by economic purpose name.", function () {
    create_economic_purpose.searchInEconomicPurposetName();
  });

  it("08.22. Verify the grid list resets successfully when the reset button is clicked on the economic purpose page.", function () {
    create_economic_purpose.gridResetButtonCheck();
  });

  it("08.23. Verify that the grid list is refreshed successfully when the refresh button is clicked on the economic purpose page.", function () {
    create_economic_purpose.gridRefreshButtonCheck();
  });

  it("08.24. Verify the economic purpose creation reset button clears all entered input values.", function () {
    create_economic_purpose.createResetButtonCheck();
  });

  it("08.25. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_economic_purpose.createValidationMessageCheck();
  });

  it("08.26. Verify that clicking the go back button on the economic purpose create page redirects the user to the economic purpose list page.", function () {
    create_economic_purpose.createGoBackButtonCheck();
  });

  it("08.27. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_economic_purpose.gridLanguageSwitchCheck();
  });
});
