// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/mra-admin/14-organization-legal-form/organization-legal-form.cy.js --headed

import "cypress-file-upload";
import { create_organization_legal_form } from "./organization-legal-form.po";

describe("14. Organization Legal Form Module Test Cases.", function () {
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

  it("14.01. Verify the organization legal form list page loads without errors.", function () {
    create_organization_legal_form.gridOrganizationLegalFromListPage();
  });

  it("14.02. Verify a new organization legal form is created successfully when all required fields are filled with valid data.", function () {
    create_organization_legal_form.createOrganizationLegalForm();
  });

  it("14.03. Verify creating a organization legal form  without an name en,even if all other fields are valid.", function () {
    create_organization_legal_form.createWithoutNameEn();
  });

  it("14.04. Verify creating a organization legal form  without an name bn, even if all other fields are valid.", function () {
    create_organization_legal_form.createWithoutNameBn();
  });

  it("14.05. Verify creating a organization legal form  without an status,even if all other fields are valid.", function () {
    create_organization_legal_form.createWithoutStatus();
  });

  it("14.06. Verify check if a organization legal form cannot be created when a mandatory field is missing.", function () {
    create_organization_legal_form.createWithoutOneMandatoryField();
  });

  it("14.07. Verify successfully performs the action when the action button is clicked.", function () {
    create_organization_legal_form.actionButtonCheck();
  });

  it("14.08. Verify the user can view all relevant details of a organization legal form, including its associated fields.", function () {
    create_organization_legal_form.viewOrganizationLegalForm();
  });

  it("14.09. Verify that the organization legal forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    create_organization_legal_form.turnOffOnEditMode();
  });

  it("14.10. Verify the organization legal form name and description can be edited successfully.", function () {
    create_organization_legal_form.editOrganizationLegalForm();
  });

  it("14.11. Verify the organization legal form edit reset button functions correctly.", function () {
    create_organization_legal_form.editResetButton();
  });

  it("14.12. Verify the organization legal form edit submit button functions correctly.", function () {
    create_organization_legal_form.editSubmitButton();
  });

  it("14.13. Verify that clicking the go back button on the organization legal form edit page redirects the user to the organization legal form list page.", function () {
    create_organization_legal_form.editGoBackButton();
  });

  it("14.14. Verify the user can filter inactive organization legal forms using the status dropdown on the organization legal form list page.", function () {
    create_organization_legal_form.statusInactiveDropdownCheck();
  });

  it("14.15. Verify the active result is filtered correctly by the status dropdown.", function () {
    create_organization_legal_form.statusActiveDropdownCheck();
  });

  it("14.16. Verify the search returns correct results when searching by organization legal form name.", function () {
    create_organization_legal_form.searchInOrganizationLegalFromName();
  });

  it("14.17. Verify the grid list resets successfully when the reset button is clicked on the organization legal form page.", function () {
    create_organization_legal_form.gridResetButtonCheck();
  });

  it("14.18. Verify that the grid list is refreshed successfully when the refresh button is clicked on the organization legal form page.", function () {
    create_organization_legal_form.gridRefreshButtonCheck();
  });

  it("14.19. Verify the organization legal form creation reset button clears all entered input values.", function () {
    create_organization_legal_form.createResetButtonCheck();
  });

  it("14.20. Verify validation messages appear for required fields when the submit button is clicked with empty inputs.", function () {
    create_organization_legal_form.createValidationMessageCheck();
  });

  it("14.21. Verify that clicking the go back button on the organization legal form create page redirects the user to the organization legal form list page.", function () {
    create_organization_legal_form.createGoBackButtonCheck();
  });

  it("14.22. Verify check that the grid list content changes correctly from english to bangla.", function () {
    create_organization_legal_form.gridLanguageSwitchCheck();
  });
});
