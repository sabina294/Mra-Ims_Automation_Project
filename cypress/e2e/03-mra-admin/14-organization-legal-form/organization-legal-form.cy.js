// npm run auto
// npm run dev 
// npx cypress run --spec cypress/e2e/03-mra-admin/14-organization-legal-form/organization-legal-form.cy.js --headed

import "cypress-file-upload";
import { create_organization_legal_form } from "./organization-legal-form.po";

describe("14. Organization Legal Form Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");

  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(baseURL, d.credential.mraAdminUserId, d.credential.mraAdminPassword);
      cy.changeLanguage("english");
      cy.switchModule("MFI");
    });
  });

  after(() => {
    cy.logout();
  });

  it("14.01. Should load the Organization Legal Form list page without errors", function () {
    create_organization_legal_form.gridOrganizationLegalFromListPage();
  });

  it("14.02. Should create a new organization legal form successfully when all required fields are valid", function () {
    create_organization_legal_form.createOrganizationLegalForm();
  });

  it("14.03. Should not create an organization legal form without 'Name (EN)', even if all other fields are valid", function () {
    create_organization_legal_form.createWithoutNameEn();
  });

  it("14.04. Should not create an organization legal form without 'Name (BN)', even if all other fields are valid", function () {
    create_organization_legal_form.createWithoutNameBn();
  });

  it("14.05. Should not create an organization legal form without 'Status', even if all other fields are valid", function () {
    create_organization_legal_form.createWithoutStatus();
  });

  it("14.06. Should prevent creation when any mandatory field is missing", function () {
    create_organization_legal_form.createWithoutOneMandatoryField();
  });

  it("14.07. Should perform the intended action correctly when the action button is clicked", function () {
    create_organization_legal_form.actionButtonCheck();
  });

  it("14.08. Should display all relevant details of an organization legal form correctly", function () {
    create_organization_legal_form.viewOrganizationLegalForm();
  });

  it("14.09. Should navigate back to the list page when the 'Go Back' button is clicked on the view page", function () {
    create_organization_legal_form.viewGoBackButton();
  });

  it("14.10. Should toggle edit mode on and off correctly, enabling and disabling fields as expected", function () {
    create_organization_legal_form.turnOffOnEditMode();
  });

  it("14.11. Should allow editing the organization legal form name and description successfully", function () {
    create_organization_legal_form.editOrganizationLegalForm();
  });

  it("14.12. Should reset the edit form correctly when the reset button is clicked", function () {
    create_organization_legal_form.editResetButton();
  });

  it("14.13. Should submit the edited organization legal form successfully", function () {
    create_organization_legal_form.editSubmitButton();
  });

  it("14.14. Should navigate back to the list page when the 'Go Back' button is clicked on the edit page", function () {
    create_organization_legal_form.editGoBackButton();
  });

  it("14.15. Should filter inactive organization legal forms correctly using the status dropdown", function () {
    create_organization_legal_form.statusInactiveDropdownCheck();
  });

  it("14.16. Should filter active organization legal forms correctly using the status dropdown", function () {
    create_organization_legal_form.statusActiveDropdownCheck();
  });

  it("14.17. Should return correct results when searching by organization legal form name", function () {
    create_organization_legal_form.searchInOrganizationLegalFromName();
  });

  it("14.18. Should reset the grid list successfully when the reset button is clicked", function () {
    create_organization_legal_form.gridResetButtonCheck();
  });

  it("14.19. Should refresh the grid list successfully when the refresh button is clicked", function () {
    create_organization_legal_form.gridRefreshButtonCheck();
  });

  it("14.20. Should clear all input values when the create form reset button is clicked", function () {
    create_organization_legal_form.createResetButtonCheck();
  });

  it("14.21. Should display validation messages for required fields when submit is clicked with empty inputs", function () {
    create_organization_legal_form.createValidationMessageCheck();
  });

  it("14.22. Should navigate back to the list page when the 'Go Back' button is clicked on the create page", function () {
    create_organization_legal_form.createGoBackButtonCheck();
  });

  it("14.23. Should switch grid content language correctly from English to Bangla", function () {
    create_organization_legal_form.gridLanguageSwitchCheck();
  });
});
