// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/22-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("22. Samity Day Change Module Test Cases", function () {
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

  it("22.01. Verify that the Samity Day Change List page loads successfully.", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("22.02. Verify that a new Samity Day Change can be created successfully with valid information by the MFI Admin role.", function () {
    samity_day_change.samityDayChange();
  });

  it("22.03. Verify that the MFI Admin can successfully approve a Samity Day Change record after creation.", function () {
    samity_day_change.approveSamityDayChange();
  });

  it("22.04. Verify that the action button performs the expected action successfully when clicked.", function () {
    samity_day_change.actionButtonCheck();
  });

  it("22.05. Verify that the user can successfully view the Samity Day Change information, including the name and description.", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("22.06. Verify that clicking the Go Back button on the Samity Day Change view page redirects the user to the Samity Day Change List page.", function () {
    samity_day_change.viewGoBackButton();
  });

  it("22.07. Verify that the Submit button functions correctly when creating a new Samity Day Change.", function () {
    samity_day_change.samityChangeSubmit();
  });

  it("22.08. Verify that the Approve button functions correctly for a new Samity Day Change.", function () {
    samity_day_change.samityChangeApprove();
  });

  it("22.09. Verify that the Reset button functions correctly in the New Samity Day Change form.", function () {
    samity_day_change.samityChangeReset();
  });

  it("22.10. Verify system validation when submitting a Samity Day Change form without selecting a new Samity Day.", function () {
    samity_day_change.newSamityDayChangeName();
  });

  it("22.11. Verify that the Go Back button functions correctly on the New Samity Day Change page.", function () {
    samity_day_change.samityChangeGoBack();
  });

  it("22.12. Verify that the user can filter inactive records using the Status dropdown on the Samity Day Change List page.", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("22.13. Verify that the Status dropdown correctly filters and displays active records.", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("22.14. Verify that the search results are displayed correctly when searching by Samity Day Change name.", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("22.15. Verify that the grid list resets successfully when the Reset button is clicked on the Samity Day Change page.", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("22.16. Verify that clicking the Search button on the Samity Day Change grid page displays the filtered Samity Day Change List successfully.", function () {
    samity_day_change.gridSearchButtonCheck();
  });

  it("22.17. Verify that the grid list refreshes successfully when the Refresh button is clicked on the Samity Day Change page.", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("22.18. Verify that the grid list displays successfully when the Draft button is enabled on the Samity Day Change page.", function () {
    samity_day_change.gridDraftButton();
  });

  it("22.19. Verify that the grid list displays successfully when the Draft button is disabled on the Samity Day Change page.", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("22.20. Verify that the office selection from the dropdown functions correctly on the Samity Day Change List page.", function () {
    samity_day_change.selectofficeDropdown();
  });

  it("22.21. Verify that the grid list content changes correctly from English to Bangla.", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
