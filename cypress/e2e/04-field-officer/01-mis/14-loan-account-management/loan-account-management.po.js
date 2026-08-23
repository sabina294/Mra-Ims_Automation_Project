import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class LoanAccountManagement {
  test_data = Cypress.env("TEST_DATA");

  gridLoanAccountManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-loan-account", "submenu-loan-account-management");
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
    const laData = data.fieldOfficer.loanAccountManagementFrom;
    // cy.imsId(COMMON.INPUTS.SEARCH_IMS).type(laData.member);
    // cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
     });
  }

  viewLoanAccountManagement() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.selectMenu1("submenu-loan-account-management");
      cy.log(messages.ui.viewMessage);
    });
  }
  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(
      messages.ui.goBackSuccess
    );
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.samity);
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(laData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(laData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInLoanAccountName() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.samity);
      cy.log(messages.ui.searchMessage);
    });
  }

  samityDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("samity_id").type(laData.samity);
      cy.log(messages.ui.samityDropdownMessage);
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
      const laData = data.fieldOfficer.loanAccountManagementFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(laData.memberNameEn);
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

export const grid_loan_account_management = new LoanAccountManagement();
