// npm run auto
// npm run dev
// npx cypress run --spec cypress/e2e/branch-manager/12-mfi-program/mfi-program.cy.js --browser chrome --headed

import "cypress-file-upload";
import { grid_mfi_program } from "./mfi-program.po";

describe("12. MFI program Module Test Cases", function () {
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

  it("12.01. Verify the mfi program list page loads without errors.", function () {
    grid_mfi_program.gridMfiProgramListPage();
  });

  it("12.02. Verify successfully performs the action when the action button is clicked.", function () {
    grid_mfi_program.actionButtonCheck();
  });

  it("12.03. Verify the user can view all relevant details of a mfi program, including its associated fields.", function () {
    grid_mfi_program.viewMfiProgram();
  });

  it("12.04. Verify that the mfi program forms edit mode can be toggled on and off all fields should be disabled or return to view-only mode.", function () {
    grid_mfi_program.turnOnEditMode();
  });

  it("12.05. Verify the mfi program edit reset button functions correctly.", function () {
    grid_mfi_program.editResetButton();
  });

  it("12.06. Verify that clicking the go back button on the mfi programedit page redirects the user to the mfi program list page.", function () {
    grid_mfi_program.editGoBackButton();
  });

  it("12.07. Verify the user can filter inactive mfi programs using the status dropdown on the mfi program list page.", function () {
    grid_mfi_program.statusInactiveDropdownCheck();
  });

  it("12.08. Verify the active result is filtered correctly by the status dropdown.", function () {
    grid_mfi_program.statusActiveDropdownCheck();
  });

  it("12.09. Verify the search returns correct results when searching by mfi program name.", function () {
    grid_mfi_program.searchInMfiProgramName();
  });

  it("12.10. Verify the grid list resets successfully when the reset button is clicked on the mfi program page.", function () {
    grid_mfi_program.gridResetButtonCheck();
  });

  it("12.11. Verify that the grid list is refreshed successfully when the refresh button is clicked on the mfi program page.", function () {
    grid_mfi_program.gridRefreshButtonCheck();
  });

  it("12.12. Verify check that the grid list content changes correctly from english to bangla.", function () {
    grid_mfi_program.gridLanguageSwitchCheck();
  });
});
class MfiProgram {
  test_data = Cypress.env("TEST_DATA");

  gridMfiProgramListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-configuration", "submenu-mfi-program");
      cy.log("Successfully mfi program list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log("Action button clicked successfully on the mfi program list page.");
  }

  viewMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.formController("search_text").type(mpData.programNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      cy.get("app-mfi-mis").contains(mpData.programNameEn).and("be.visible");

      cy.imsId("btn-go-back").click();
      cy.log("Successfully viewed the mfi program list page");
    });
  }

  turnOnEditMode() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();

    cy.log("Mfi program form Edit Mode toggled successfully");
  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-reset").click();
    cy.imsId("btn-go-back").click();

    cy.log("Successful clean displaying");
  }

  editGoBackButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-view").click();
    cy.imsId("switch-button").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(mpData.selectStatus).type("{enter}");
      cy.log("Mfi program status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.formController("status").type(mpData.statusSelect).type("{enter}");
      cy.log("Mfi program status active dropdown check successfully");
    });
  }

  searchInMfiProgramName() {
    cy.fixture(this.test_data).then((data) => {
      var mpData = data.branchManager.gridMfiProgramFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(mpData.programNameEn);
      cy.log("Successfully search in the mfi program");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the mfi program "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Successful switch bangla language check.");
  }
}

export const grid_mfi_program = new MfiProgram();
