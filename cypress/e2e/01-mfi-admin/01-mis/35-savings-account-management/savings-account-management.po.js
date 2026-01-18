class SavingsAccountManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccountManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-savings-account",
        "submenu-savings-account-management"
      );
      cy.log("Successfully Savings Account Management list page.");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the savings account  management list page."
    );
  }

  viewSavingsAccountManag() {
    cy.fixture(this.test_data).then((data) => {
      var samData = data.mfiAdmin.createSavingsAccountManagement;

      // cy.formController("search_text").type(samData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log("Successfully viewed the savings account  management list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the savings account  management list page");

  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(samData.selectStatus).type("{enter}");
      cy.log(
        "Savings account  management form status approved dropdown check successfully"
      );
    });
  }

  statusRejectedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(samData.statusSelect).type("{enter}");
      cy.log(
        "Savings account management form status rejected dropdown check successfully"
      );
    });
  }

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.formController("office_id").type(samData.selectOffice).type("{enter}");
      cy.log(
        "Savings account management status office dropdown check successfully"
      );
    });
  }

  searchSavingsAccManag() {
    cy.fixture(this.test_data).then((data) => {
      var samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(samData.search);
      cy.log("Successfully search in the savings account  management form");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Savings account  management form "
    );
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_savings_account_management =
  new SavingsAccountManagementCreation();
