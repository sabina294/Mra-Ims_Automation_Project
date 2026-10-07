// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/02-branch-manager/01-mis/42-holiday/holiday.cy.js --browser chrome --headed

import "cypress-file-upload";
import { create_holiday } from "./holiday.po";

describe("42. holiday Module Test Cases", function () {
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

  it("42.01. Verify that the Holiday List page loads successfully and displays all required grid data.", function () {
    create_holiday.gridHolidayListPage();
  });

  it("42.02. Verify that a new holiday record is created successfully when all required fields are filled with valid data.", function () {
    create_holiday.createHoliday();
  });

  it("42.03. Verify that clicking the Reset button on the Holiday Create page clears all entered input values.", function () {
    create_holiday.createResetButtonCheck();
  });

  it("42.04. Verify that validation messages are displayed for all required fields when the Submit button is clicked with empty inputs.", function () {
    create_holiday.createValidationMessageCheck();
  });

  it("42.05. Verify that clicking the Go Back button on the Holiday Create page redirects the user to the Holiday List page.", function () {
    create_holiday.createGoBackButtonCheck();
  });

  it("42.06. Verify that the successfully approve a holiday record after creation.", function () {
    create_holiday.approveHoliday();
  });

  it("42.07. Verify that the correct search results are displayed when searching by holiday name.", function () {
    create_holiday.searchHolidayTitle();
  });

  it("42.08. Verify that the correct results are displayed when a calendar year is selected from the year filter.", function () {
    create_holiday.selectCalendarYear();
  });

  it("42.09. Verify that clicking the Reset button on the Holiday Grid page clears all applied filters and resets the grid list.", function () {
    create_holiday.gridResetButtonCheck();
  });

  it("42.10. Verify that clicking the Refresh button on the Holiday Grid page reloads and refreshes the grid list successfully.", function () {
    create_holiday.gridRefreshButtonCheck();
  });

  it("42.11. Verify that clicking the Search button on the Holiday Grid page redirects the user to the Holiday List page.", function () {
    create_holiday.gridSearchButtonCheck();
  });

  it("42.12. Verify that the grid list displays only draft records when the Draft button is enabled on the Holiday page.", function () {
    create_holiday.gridDraftButton();
  });

  it("42.13. Verify that the grid list displays all applicable records when the Draft button is disabled on the Holiday page.", function () {
    create_holiday.gridDraftButtonOff();
  });

  it("42.14. Verify the Holiday list breadcrumb.", function () {
    create_holiday.listBreadcrumbCheck();
  });

  it("42.15. Verify the required Holiday grid columns.", function () {
    create_holiday.requiredGridColumnsCheck();
  });

  it("42.16. Verify exact Holiday Title search results.", function () {
    create_holiday.exactTitleSearchCheck();
  });

  it("42.17. Verify partial Holiday Title search results.", function () {
    create_holiday.partialTitleSearchCheck();
  });

  it("42.18. Verify a non-existing Holiday search shows no records.", function () {
    create_holiday.noResultSearchCheck();
  });

  it("42.19. Verify Reset clears search and restores Holiday records.", function () {
    create_holiday.resetRestoresGridCheck();
  });

  it("42.20. Verify Holiday Title ascending sorting.", function () {
    create_holiday.titleAscendingSortCheck();
  });

  it("42.21. Verify Holiday Title descending sorting.", function () {
    create_holiday.titleDescendingSortCheck();
  });

  it("42.22. Verify the Holiday first-page pagination state.", function () {
    create_holiday.firstPagePaginationCheck();
  });

  it("42.23. Verify that the grid list content is correctly translated when switching the language from English to Bangla.", function () {
    create_holiday.gridLanguageSwitchCheck();
  });
});
