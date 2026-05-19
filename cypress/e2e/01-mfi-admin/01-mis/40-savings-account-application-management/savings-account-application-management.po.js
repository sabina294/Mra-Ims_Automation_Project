import messages from "../../../../support/constants/messages";
import { GRID } from "../../../../support/constants/selectors";
class SavingsAccApplicationManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccApplicationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-savings-account",
        "submenu-savings-account-application-management"
      );
      cy.wait(3000);
      cy.log("Successfully Savings Account Application Management list page.");
    });
  }

  createSavingsAccApplicationManagement() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId("btn-add-new").click();
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
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
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
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
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      // cy.formController("search_text").type(saamData.search);
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

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(saamData.selectStatus).type("{enter}");
      cy.log(
        "Savings account application management form status approved dropdown check successfully"
      );
    });
  }

  statusRejectedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(saamData.statusSelect).type("{enter}");
      cy.log(
        "Savings account application management form status rejected dropdown check successfully"
      );
    });
  }

  searchSavingsAccAppManag() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
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
    cy.imsId(GRID.BUTTONS.DRAFT_ON)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(GRID.BUTTONS.DRAFT_OFF)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId("btn-add-new").click();
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.imsId("btn-reset").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful validation message displaying.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }


  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(saamData.search);
      cy.imsId("btn-search").click();
      cy.log("Successful search button click.");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_savings_account_application_management =
  new SavingsAccApplicationManagementCreation();
