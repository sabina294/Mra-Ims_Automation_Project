// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/10-funding-organizations/funding-organization.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_funding_organization } from "./funding-organization.po";

describe("10. Funding Organization Module Test Cases", function () {
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

  it("10.01. Verify that the funding organization list page loads successfully without any errors.", function () {
    create_funding_organization.gridFundingOrganizationListPage();
  });

  it("10.02. Verify that a new funding organization is created successfully when all required fields are filled with valid data.", function () {
    create_funding_organization.createFundingOrganization();
  });

  it("10.03. Verify that a funding organization cannot be created without entering a funding organization name, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutFundingOrgName();
  });

  it("10.04. Verify that a funding organization cannot be created without entering an ID, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutId();
  });

  it("10.05. Verify that a funding organization cannot be created without selecting a funding organization type, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutFundingOrgType();
  });

  it("10.06. Verify that a funding organization cannot be created without selecting a status, even when all other fields contain valid data.", function () {
    create_funding_organization.createWithoutStatus();
  });

  it("10.07. Verify that the action button performs the expected action successfully when clicked.", function () {
    create_funding_organization.actionButtonCheck();
  });

  it("10.08. Verify that the user can view all relevant details of a funding organization, including its associated information.", function () {
    create_funding_organization.viewFundingOrganization();
  });

  it("10.09. Verify that clicking the Go Back button on the funding organization view page redirects the user to the funding organization list page.", function () {
    create_funding_organization.viewGoBackButton();
  });

  it("10.10. Verify that edit mode on the funding organization form can be toggled on and off, and all fields return to view-only mode when disabled.", function () {
    create_funding_organization.turnOffEditMode();
  });

  it("10.11. Verify that the funding organization name and description can be edited successfully.", function () {
    create_funding_organization.editFundingOrganization();
  });

  it("10.12. Verify that the Reset button on the funding organization edit page clears all modified values correctly.", function () {
    create_funding_organization.editResetButton();
  });

  it("10.13. Verify that the Submit button on the funding organization edit page updates the data successfully.", function () {
    create_funding_organization.editSubmitButton();
  });

  it("10.14. Verify that clicking the Go Back button on the funding organization edit page redirects the user to the funding organization list page.", function () {
    create_funding_organization.editGoBackButton();
  });

  it("10.15. Verify that inactive funding organizations can be filtered correctly using the status dropdown on the funding organization list page.", function () {
    create_funding_organization.statusInactiveDropdownCheck();
  });

  it("10.16. Verify that active funding organizations are filtered correctly using the status dropdown on the funding organization list page.", function () {
    create_funding_organization.statusActiveDropdownCheck();
  });

  it("10.17. Verify that the search functionality returns correct results when searching by funding organization name.", function () {
    create_funding_organization.searchInFundingOrganizationName();
  });

  it("10.18. Verify that the grid list is reset successfully when the Reset button is clicked on the funding organization page.", function () {
    create_funding_organization.gridResetButtonCheck();
  });

  it("10.19. Verify that the grid list is refreshed successfully when the Refresh button is clicked on the funding organization page.", function () {
    create_funding_organization.gridRefreshButtonCheck();
  });

  it("10.20. Verify that the Reset button on the funding organization creation page clears all entered input values.", function () {
    create_funding_organization.createResetButtonCheck();
  });

  it("10.21. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_funding_organization.createValidationMessageCheck();
  });

  it("10.22. Verify that clicking the Go Back button on the funding organization creation page redirects the user to the funding organization list page.", function () {
    create_funding_organization.createGoBackButtonCheck();
  });

  it("10.23. Verify that clicking the Search button on the funding organization grid page displays the correct filtered results.", function () {
    create_funding_organization.gridSearchButtonCheck();
  });

  it("10.24. Verify that the Funding Organizations List page displays the correct breadcrumb navigation.", function () {
    create_funding_organization.listBreadcrumbCheck();
  });

  it("10.25. Verify that the Funding Organizations grid displays all required columns.", function () {
    create_funding_organization.gridColumnsCheck();
  });

  it("10.26. Verify that displayed funding organization records contain valid ID, name, and status values, with a type column present.", function () {
    create_funding_organization.gridRecordDataCheck();
  });

  it("10.27. Verify that pagination is displayed and Previous is disabled on the first page.", function () {
    create_funding_organization.firstPagePaginationCheck();
  });

  it("10.28. Verify that Add Funding Organization navigates to the creation page.", function () {
    create_funding_organization.addNavigationCheck();
  });

  it("10.29. Verify that the Funding Organization creation page displays its breadcrumb and all form fields.", function () {
    create_funding_organization.createPageFieldsCheck();
  });

  it("10.30. Verify that every Funding Organization form field is marked as required.", function () {
    create_funding_organization.requiredFieldsCheck();
  });

  it("10.31. Verify that Active is selected as the default status on the creation page.", function () {
    create_funding_organization.defaultStatusCheck();
  });

  it("10.32. Verify that the Status dropdown displays Active and Inactive options.", function () {
    create_funding_organization.statusOptionsCheck();
  });

  it("10.33. Verify that a Funding Organization Type can be selected.", function () {
    create_funding_organization.organizationTypeSelectionCheck();
  });

  it("10.34. Verify that searching with a non-existing organization displays no records.", function () {
    create_funding_organization.searchNoResultCheck();
  });

  it("10.35. Verify that an exact organization-name search returns only matching records.", function () {
    create_funding_organization.exactSearchCheck();
  });

  it("10.36. Verify that clearing a search restores the Funding Organizations list.", function () {
    create_funding_organization.clearSearchCheck();
  });

  it("10.37. Verify that the View page displays all saved Funding Organization details.", function () {
    create_funding_organization.viewDetailsCheck();
  });

  it("10.38. Verify that turning on Edit mode displays all editable Funding Organization fields.", function () {
    create_funding_organization.editModeFieldsCheck();
  });

  it("10.39. Verify that the grid list content updates correctly when switching the language from English to Bangla.", function () {
    create_funding_organization.gridLanguageSwitchCheck();
  });
});
