import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SavingsAccApplicationManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccApplicationListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(
        "menu-savings-account",
        "submenu-savings-account-application-management"
      );
      cy.wait(3000);
      cy.log(messages.ui.gridListMessage);
    });
  }

  createSavingsAccApplicationManagement() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.submitSuccess);
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.wait(3000);
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSavingsProduct() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutSamity() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMember() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutRecommendedDepositAmount() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("opening_balance").type(saamData.openingBalance);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutOpeningBalance() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.wait(3000);
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("savings_product_id")
        .type(saamData.savingsProduct)
        .type("{enter}");
      cy.formController("samity_id").type(saamData.samity).type("{enter}");
      cy.formController("member_id").type(saamData.member).type("{enter}");
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      // cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      // cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

   myTaskMenuSavingsAccountApplicationManagement() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
         cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-savings-account-proposal").click();
      cy.log("Successfully navigate to my task menu savings account application management");
    });
  }

   myTaskOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.approveSavingsAccountFrom;
      cy.formController("office_id").type(saamData.office).type("{enter}");
      cy.log("Successfully navigate to my task menu savings account application management office dropdown");
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the savings account application management "
    );
  }

  approvesavingsAccount() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId("btn-Approve").click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve savings account application management");
    });
  }

  actionButtonCheck() {
    cy.selectMenu(
      "menu-savings-account",
      "submenu-savings-account-application-management"
    );
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSavingsAccApplicationManag() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(
        messages.ui.viewMessage
      );
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(saamData.selectStatus).type("{enter}");
      cy.log(
        "Savings account application management form status approved dropdown check successfully"
      );
    });
  }

  statusRejectedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(saamData.statusSelect).type("{enter}");
      cy.log(
        "Savings account application management form status rejected dropdown check successfully"
      );
    });
  }

  searchSavingsAccAppManag() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.log(
        "Successfully search in the savings account application management form"
      );
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      messages.ui.gridRefreshSuccess
    );
  }

  gridDraftButton() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .check({ force: true });
    cy.log(messages.ui.draftOnMessage);
  }

  gridDraftButtonOff() {
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE)
      .uncheck({ force: true });
    cy.log(messages.ui.draftOffMessage);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("savings_amount").type(saamData.recoDepositAmount);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }


  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const saamData = data.mfiAdmin.createSavingsAccApplicationMang;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(saamData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_savings_account_application_management =
  new SavingsAccApplicationManagementCreation();
