// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/22-samity-day-change/samity-day-change.cy.js --browser chrome --headed

import "cypress-file-upload";
import { samity_day_change } from "./samity-day-change.po";

describe("22. Samity Day Change Module Test Cases", function () {
  const baseURL = Cypress.env("BASE_URL");
  const test_data = Cypress.env("TEST_DATA");
  before(() => {
    cy.fixture(test_data).then((d) => {
      cy.login(
        baseURL,
        d.credential.branchManagerUserId,
        d.credential.branchManagerPassword
      );
      cy.changeLanguage("english");
    });
  });

  after(() => {
    cy.logout();
  });
  it("22.01. Verify that the Samity Day Change list page loads successfully.", function () {
    samity_day_change.gridSamityChangeListPage();
  });

  it("22.02. Verify that a new Samity Day Change can be created with valid information.", function () {
    samity_day_change.samityDayChange();
  });

  it("22.03. Verify that the MFI Admin can successfully approve a Samity Day Change record after creation.", function () {
    samity_day_change.approveSamityDayChange();
  });

  it("22.04. Verify that the action is performed successfully when the Action button is clicked.", function () {
    samity_day_change.actionButtonCheck();
  });

  it("22.05. Verify that the user can view the Samity Day Change details, including name and description.", function () {
    samity_day_change.viewSamityDayChange();
  });

  it("22.06. Verify that clicking the Go Back button on the view page redirects the user to the Samity Day Change list page.", function () {
    samity_day_change.viewGoBackButton();
  });

  it("22.07. Verify that the Reset button functions correctly on the Samity Day Change page.", function () {
    samity_day_change.dayChangeResetButtonCheck();
  });

  it("22.08. Verify that the Submit button functions correctly on the Samity Day Change page.", function () {
    samity_day_change.dayChangeSubmitButtonCheck();
  });

  it("22.09. Verify that the Approve button functions correctly on the Samity Day Change page.", function () {
    samity_day_change.dayChangeApproveButtonCheck();
  });

  it("22.10. Verify that the Go Back button functions correctly on the Samity Day Change page.", function () {
    samity_day_change.dayChangeGoBackButtonCheck();
  });

  it("22.11. Verify that the user can filter inactive records using the Status dropdown on the Samity Day Change list page.", function () {
    samity_day_change.statusInactiveDropdownCheck();
  });

  it("22.12. Verify that the Status dropdown correctly filters active records.", function () {
    samity_day_change.statusActiveDropdownCheck();
  });

  it("22.13. Verify that search results are displayed correctly when searching by Samity Day Change name.", function () {
    samity_day_change.searchInSamityDayChangeName();
  });

  it("22.14. Verify that the grid list resets successfully when the Reset button is clicked.", function () {
    samity_day_change.gridResetButtonCheck();
  });

  it("22.15. Verify that the grid list refreshes successfully when the Refresh button is clicked.", function () {
    samity_day_change.gridRefreshButtonCheck();
  });

  it("22.16. Verify that the grid list displays Draft records when the Draft filter is enabled.", function () {
    samity_day_change.gridDraftButton();
  });

  it("22.17. Verify that the grid list hides Draft records when the Draft filter is disabled.", function () {
    samity_day_change.gridDraftButtonOff();
  });

  it("22.18. Verify that the grid content updates correctly when switching the language from English to Bangla.", function () {
    samity_day_change.gridLanguageSwitchCheck();
  });
});
