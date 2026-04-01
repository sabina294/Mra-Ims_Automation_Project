// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/03-mra-admin/20-mfi-management/mfi-management.cy.js --headed

import "cypress-file-upload";
import { create_mfi_management } from "./mfi-management.po";

describe("20. MFI Management Module Test Cases.", function () {
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

  it("20.01. Verify that the MFI Management list page loads successfully without any errors.", function () {
    create_mfi_management.gridMfiManagementListPage();
  });

  it("20.02. Verify that an MFI Management is created successfully when all required fields are filled with valid data.", function () {
    create_mfi_management.createMfi();
  });

  it("20.03. Verify that an MFI Management is created successfully when all fields are filled with valid data.", function () {
    create_mfi_management.createAllField();
  });

  it("20.04. Verify that the system prevents MFI Management creation when the mandatory English Name field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldNameEn();
  });

  it("20.05. Verify that the system allows MFI Management creation without the optional Bangla Name field.", function () {
    create_mfi_management.createWithoutOptionalFieldNameBn();
  });

  it("20.06. Verify that the system prevents MFI Management creation when the mandatory License Number field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldLicenceNo();
  });

  it("20.07. Verify that the system prevents MFI Management creation when the mandatory MFI ID field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldMfiId();
  });

  it("20.08. Verify that the system prevents MFI Management creation when the mandatory Mnemonic field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldMnemonic();
  });

  it("20.09. Verify that the system allows MFI Management creation without the optional Formation Date field.", function () {
    create_mfi_management.createWithoutOptionalFieldFormation();
  });

  it("20.10. Verify that the system allows MFI Management creation without the optional Website field.", function () {
    create_mfi_management.createWithoutOptionalFieldWebsite();
  });

  it("20.11. Verify that the system allows MFI Management creation without the optional Email field.", function () {
    create_mfi_management.createWithoutOptionalFieldEmail();
  });

  it("20.12. Verify that the system allows MFI Management creation without the optional Contact Number field.", function () {
    create_mfi_management.createWithoutOptionalFieldContactNo();
  });

  it("20.13. Verify that the system allows MFI Management creation without the optional English Address field.", function () {
    create_mfi_management.createWithoutOptionalFieldAdressEn();
  });

  it("20.14. Verify that the system allows MFI Management creation without the optional Bangla Address field.", function () {
    create_mfi_management.createWithoutOptionalFieldAdressBn();
  });

  it("20.15. Verify that the system prevents MFI Management creation when the mandatory Savings Category field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldSavingsCategory();
  });

  it("20.16. Verify that the system prevents MFI Management creation when the mandatory Office Type field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldOfficeType();
  });

  it("20.17. Verify that the system prevents MFI Management creation when the mandatory User Name (English) field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldUserNameEn();
  });

  it("20.18. Verify that the system allows MFI Management creation without the optional User Name (Bangla) field.", function () {
    create_mfi_management.createWithoutOptionalFieldUserNameBn();
  });

  it("20.19. Verify that the system allows MFI Management creation without the optional User Email field.", function () {
    create_mfi_management.createWithoutOptionalFieldUserEmail();
  });

  it("20.20. Verify that the system allows MFI Management creation without the optional User Contact Number field.", function () {
    create_mfi_management.createWithoutOptionalFieldUserContactNo();
  });

  it("20.21. Verify that the system prevents MFI Management creation when the mandatory Login ID field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldLoginId();
  });

  it("20.22. Verify that the system prevents MFI Management creation when the mandatory Password field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldPassword();
  });

  it("20.23. Verify that the system prevents MFI Management creation when the mandatory Confirm Password field is missing.", function () {
    create_mfi_management.createWithoutMandatoryFieldConfirmPassword();
  });

  it("20.24. Verify that the system allows MFI Management creation without the optional MFI Logo.", function () {
    create_mfi_management.createWithoutOptionalMfiLogo();
  });

  it("20.25. Verify that MFI Management creation fails when any mandatory field is missing.", function () {
    create_mfi_management.createWithoutMandatoryField();
  });

  it("20.26. Verify that the action button performs the expected action successfully.", function () {
    create_mfi_management.actionButtonCheck();
  });

  it("20.27. Verify that the user can view all relevant MFI Management details successfully.", function () {
    create_mfi_management.viewMfi();
  });

  it("20.28. Verify that clicking the Go Back button from the MFI Management view page redirects to the list page.", function () {
    create_mfi_management.viewGoBackButton();
  });

  it("20.29. Verify that edit mode can be toggled on and off and fields behave accordingly.", function () {
    create_mfi_management.turnOffOnEditMode();
  });

  it("20.30. Verify that the MFI Management edit reset button functions correctly.", function () {
    create_mfi_management.editResetButton();
  });

  it("20.31. Verify that the MFI Management edit draft button functions correctly.", function () {
    create_mfi_management.editDraftButton();
  });

  it("20.32. Verify that the MFI Management edit submit button functions correctly.", function () {
    create_mfi_management.editSubmitButton();
  });

  it("20.33. Verify that the MFI Management edit approve button functions correctly.", function () {
    create_mfi_management.editApproveButton();
  });

  it("20.34. Verify that clicking the Go Back button from the edit page redirects to the MFI Management list page.", function () {
    create_mfi_management.editGoBackButton();
  });

  it("20.35. Verify that inactive MFI Management records can be filtered using the status dropdown.", function () {
    create_mfi_management.statusInactiveDropdownCheck();
  });

  it("20.36. Verify that active MFI Management records are filtered correctly using the status dropdown.", function () {
    create_mfi_management.statusActiveDropdownCheck();
  });

  it("20.37. Verify that searching by MFI Management name returns correct results.", function () {
    create_mfi_management.searchInMfiManagementName();
  });

  it("20.38. Verify that the grid list resets successfully when the reset button is clicked.", function () {
    create_mfi_management.gridResetButtonCheck();
  });

  it("20.39. Verify that the grid list refreshes successfully when the refresh button is clicked.", function () {
    create_mfi_management.gridRefreshButtonCheck();
  });

  it("20.40. Verify that grid checkbox selection functions correctly.", function () {
    create_mfi_management.gridCheckboxCheck();
  });

  it("20.41. Verify that draft records are displayed when the Draft toggle is enabled.", function () {
    create_mfi_management.gridDraftButton();
  });

  it("20.42. Verify that draft records are hidden when the Draft toggle is disabled.", function () {
    create_mfi_management.gridDraftButtonOff();
  });

  it("20.43. Verify that the create form reset button clears all entered input values.", function () {
    create_mfi_management.createResetButtonCheck();
  });

  it("20.44. Verify that the create form draft button functions correctly.", function () {
    create_mfi_management.createDraftButtonCheck();
  });

  it("20.45. Verify that validation messages are displayed for required fields when submitting empty form.", function () {
    create_mfi_management.createValidationMessageCheck();
  });

  it("20.46. Verify that approve button functions correctly.", function () {
    create_mfi_management.createApproveButtonCheck();
  });

  it("20.47. Verify that clicking the Go Back button from the create page redirects to the MFI Management list page.", function () {
    create_mfi_management.createGoBackButtonCheck();
  });

  it("20.48. Verify that when the user clicks the Search button on the MFI Management grid page, the system redirects to the MFI Management List page..", function () {
    create_mfi_management.gridSearchButtonCheck();
  });

  it("20.49. Verify that the grid list content switches correctly between English and Bangla languages.", function () {
    create_mfi_management.gridLanguageSwitchCheck();
  });

});
