// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/13-office-management/office-management.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_office_management } from "./office-management.po";

describe("13. Office Management Module Test Cases", function () {
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

it("13.01. Verify that the Office Management list page loads successfully without any errors.", function () {
  create_office_management.gridOfficeManagementListPage();
});

it("13.02. Verify that an Office Management record cannot be created without an Office Name (English), even when all other fields contain valid data.", function () {
  create_office_management.createWithoutOfficeNameEn();
});

it("13.03. Verify that an Office Management record cannot be created without an Office Name (Bangla), even when all other fields contain valid data.", function () {
  create_office_management.createWithoutOfficeNameBn();
});

it("13.04. Verify that an Office Management record cannot be created without selecting an Office Type, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutOfficeType();
});

it("13.05. Verify that an Office Management record cannot be created without a valid 8-digit Company Office ID, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutCompanyOfficeId();
});

it("13.06. Verify that an Office Management record cannot be created without a Mobile Number, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutMobileNumber();
});

it("13.07. Verify that an Office Management record cannot be created without selecting a Division, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutDivision();
});

it("13.08. Verify that an Office Management record cannot be created without selecting a District, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutDistrict();
});

it("13.09. Verify that an Office Management record cannot be created without selecting an Upazila, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutUpazila();
});

it("13.10. Verify that an Office Management record cannot be created without an Address, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutAddress();
});

it("13.11. Verify that an Office Management record cannot be created without a Working Area Name, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutAreaName();
});

it("13.12. Verify that an Office Management record cannot be created without selecting a Working Area Division, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutWorkingAreaDivision();
});

it("13.13. Verify that an Office Management record cannot be created without selecting a Working Area District, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutWorkingAreaDistrict();
});

it("13.14. Verify that an Office Management record cannot be created without selecting a Working Area Upazila, even when all other fields contain valid data.", function () {
  create_office_management.createWithoutWorkingAreaUpazila();
});

it("13.15. Verify that the Action button performs the expected operation successfully.", function () {
  create_office_management.actionButtonCheck();
});

it("13.16. Verify that the user can view all relevant details of an Office Management record, including all associated information.", function () {
  create_office_management.viewOffice();
});

it("13.17. Verify that clicking the Go Back button on the Office Management view page redirects the user to the Office Management list page.", function () {
  create_office_management.viewGoBackButton();
});

it("13.18. Verify that Office Management edit mode can be enabled and disabled successfully, and all fields behave correctly in view-only mode.", function () {
  create_office_management.turnOffEditMode();
});

it("13.19. Verify that inactive Office Management records can be filtered successfully using the Status dropdown.", function () {
  create_office_management.statusInactiveDropdownCheck();
});

it("13.20. Verify that active Office Management records can be filtered successfully using the Status dropdown.", function () {
  create_office_management.statusActiveDropdownCheck();
});

it("13.21. Verify that the search functionality returns the correct results when searching by Office Management name.", function () {
  create_office_management.searchInOfficeManagementName();
});

it("13.22. Verify that the grid list resets successfully after clicking the Reset button.", function () {
  create_office_management.gridResetButtonCheck();
});

it("13.23. Verify that the grid list refreshes successfully after clicking the Refresh button.", function () {
  create_office_management.gridRefreshButtonCheck();
});

it("13.24. Verify that the grid list displays draft records correctly when the Draft filter is enabled.", function () {
  create_office_management.gridDraftButton();
});

it("13.25. Verify that the grid list updates correctly when the Draft filter is disabled.", function () {
  create_office_management.gridDraftButtonOff();
});

it("13.26. Verify that the checkbox functionality operates correctly.", function () {
  create_office_management.gridCheckboxCheck();
});

it("13.27. Verify that the Lock button functions correctly for selected checkbox records.", function () {
  create_office_management.gridCheckboxLockButtonCheck();
});

it("13.28. Verify that the Unlock button functions correctly for selected checkbox records.", function () {
  create_office_management.gridCheckboxUnlockButtonCheck();
});

it("13.29. Verify that the Reset button clears all input fields successfully in the Office Management creation form.", function () {
  create_office_management.createResetButtonCheck();
});

it("13.30. Verify that validation messages are displayed for all required fields when submitting an empty Office Management form.", function () {
  create_office_management.createValidationMessageCheck();
});

it("13.31. Verify that clicking the Go Back button on the Office Management creation page redirects the user to the Office Management list page.", function () {
  create_office_management.createGoBackButtonCheck();
});

it("13.32. Verify that clicking the Search button loads the Office Management list according to the search criteria.", function () {
  create_office_management.gridSearchButtonCheck();
});

it("13.33. Verify that a new Office Management record is created successfully when all required fields are filled with valid data.", function () {
  create_office_management.createOffice();
});

it("13.34. Verify that the MRA Admin can successfully approve an Office Management record after creation.", function () {
  cy.fixture(test_data).then((d) => {
    cy.loginAsMraAdmin(baseURL, d);
    create_office_management.approveOffice();
    cy.logout();
    cy.loginAsMfiAdmin(baseURL, d);
  });
});

it("13.35. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
  create_office_management.gridLanguageSwitchCheck();
});
});
