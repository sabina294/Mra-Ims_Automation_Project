class SavingsAccApplicationManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccApplicationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-savings-account",
        "submenu-savings-account-application-management"
      );
      cy.log("Successfully Savings Account Application Management list page.");
    });
  }

  createSavingsAccApplicationManagement() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      cy.imsId("btn-submit").and("be.visible");

      var saamData = data.branchManager.createSavingsAccApplicationMang;
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId("btn-submit").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully created saving account application  management");
    });
  }

  approvesavingsAccount() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.branchManager.createSavingsAccApplicationMang;
      cy.formController("search_text").type(saamData.search);
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-savings-account-proposal").click();
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-Approve").click();
      cy.imsId("btn-yes").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve savings account application management");
    });
  }

  actionButtonCheck() {
    cy.selectMenu(
      "menu-savings-account",
      "submenu-savings-account-application-management"
    );
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the savings account application management list page."
    );
  }

  viewSavingsAccApplicationManag() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.branchManager.createSavingsAccApplicationMang;

      cy.formController("search_text").type(saamData.search);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.log(
        "Successfully viewed the savings account application management list page"
      );
    });
  }
  viewGoBackButton() {
    cy.imsId("btn-go-back").click();

    cy.log("Successfully view go back the savings account application management list page");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.branchManager.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(saamData.selectStatus).type("{enter}");
      cy.log(
        "Savings account application management form status inactive dropdown check successfully"
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.branchManager.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(saamData.statusSelect).type("{enter}");
      cy.log(
        "Savings account application management form status active dropdown check successfully"
      );
    });
  }

  searchSavingsAccAppManag() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.branchManager.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(saamData.search);
      cy.log(
        "Successfully search in the savings account application management form"
      );
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the Savings account application management form "
    );
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  createResetButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button check.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_savings_account_application_management =
  new SavingsAccApplicationManagementCreation();
