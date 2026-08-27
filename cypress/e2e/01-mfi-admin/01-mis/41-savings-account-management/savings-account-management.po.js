import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SavingsAccountManagementCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSavingsAccountManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAVINGS_ACCOUNT, COMMON.MENUS.SAVINGS_ACCOUNT_MANAGEMENT);
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSavingsAccountManag() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;

      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(samData.search);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  statusApprovedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(samData.selectStatus).type("{enter}");
      cy.log(messages.ui.approveSuccess);
    });
  }

  statusRejectedDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(samData.statusSelect).type("{enter}");
      cy.log(messages.ui.rejectSuccess);
    });
  }

  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.formController("office_id").type(samData.selectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

  searchSavingsAccManag() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(samData.search);
      cy.log(messages.ui.searchSuccess);
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const samData = data.mfiAdmin.createSavingsAccountManagement;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(samData.search);
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

export const create_savings_account_management =
  new SavingsAccountManagementCreation();
