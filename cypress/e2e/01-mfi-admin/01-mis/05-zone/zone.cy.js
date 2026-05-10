// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/05-zone/zone.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_zone } from "./zone.po";

describe("05. Zone Module Test Cases", function () {
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

  it("05.01. Verify that the Zone List page loads successfully without any errors.", function () {
    create_zone.gridZoneListPage();
  });

  it("05.02. Verify that a new Zone is created successfully when all required fields are filled with valid data.", function () {
    create_zone.createZone();
  });

  it("05.03. Verify that a Zone cannot be created without a Zone Name (English), even if all other fields are valid.", function () {
    create_zone.createWithoutNameEn();
  });

  it("05.04. Verify that a Zone cannot be created without a Zone Name (Bangla), even if all other fields are valid.", function () {
    create_zone.createWithoutNameBn();
  });

  it("05.05. Verify that a Zone cannot be created without selecting a Region, even if all other fields are valid.", function () {
    create_zone.createWithoutRegion();
  });

  it("05.06. Verify that a Zone cannot be created without a Zone Code, even if all other fields are valid.", function () {
    create_zone.createWithoutZoneCode();
  });

  it("05.07. Verify that a Zone cannot be created without selecting a Status, even if all other fields are valid.", function () {
    create_zone.createWithoutStatus();
  });

  it("05.08. Verify that the Action button performs the expected action successfully.", function () {
    create_zone.actionButtonCheck();
  });

  it("05.09. Verify that the user can view all relevant Zone details, including associated fields.", function () {
    create_zone.viewZone();
  });

  it("05.10. Verify that clicking the Go Back button on the Zone View page redirects the user to the Zone List page.", function () {
    create_zone.viewGoBackButton();
  });

  it("05.11. Verify that Edit mode can be toggled on and off, and all fields behave correctly in view and edit states.", function () {
    create_zone.turnOffEditMode();
  });

  it("05.12. Verify that Zone Name and Description can be edited successfully.", function () {
    create_zone.editZone();
  });

  it("05.13. Verify that the Zone Edit Reset button clears all modified values correctly.", function () {
    create_zone.editResetButton();
  });

  it("05.14. Verify that the Zone Edit Submit button updates the data successfully.", function () {
    create_zone.editSubmitButton();
  });

  it("05.15. Verify that clicking the Go Back button on the Zone Edit page redirects the user to the Zone List page.", function () {
    create_zone.editGoBackButton();
  });

  it("05.16. Verify that inactive Zones can be filtered correctly using the Status dropdown.", function () {
    create_zone.statusInactiveDropdownCheck();
  });

  it("05.17. Verify that active Zones are filtered correctly using the Status dropdown.", function () {
    create_zone.statusActiveDropdownCheck();
  });

  it("05.18. Verify that searching by Zone Name returns the correct results.", function () {
    create_zone.searchInZoneName();
  });

  it("05.19. Verify that the Zone grid resets successfully when the Reset button is clicked.", function () {
    create_zone.gridResetButtonCheck();
  });

  it("05.20. Verify that the Zone grid refreshes successfully when the Refresh button is clicked.", function () {
    create_zone.gridRefreshButtonCheck();
  });

  it("05.21. Verify that the Zone creation Reset button clears all input fields correctly.", function () {
    create_zone.createResetButtonCheck();
  });

  it("05.22. Verify that validation messages are displayed for required fields when submitting an empty form.", function () {
    create_zone.createValidationMessageCheck();
  });

  it("05.23. Verify that clicking the Go Back button on the Zone Create page redirects the user to the Zone List page.", function () {
    create_zone.createGoBackButtonCheck();
  });

  it("05.24. Verify that clicking the Search button on the Zone grid redirects and displays the Zone List correctly.", function () {
    create_zone.gridSearchButtonCheck();
  });

  it("05.25. Verify that the Zone grid content correctly switches between English and Bangla languages.", function () {
    create_zone.gridLanguageSwitchCheck();
  });
});
