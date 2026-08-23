import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SamityChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-field-officer-change");
      cy.log(messages.ui.gridListMessage);
    });
  }

  changeResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.resetSuccess);
    });
  }

  changeSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.form.submitSuccess);

  }

  changeApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  changeGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  samityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).clear().type(smData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.formController("field_officer_id").click();
      cy.wait(500);
      cy.get('.ant-select-item-option')
        .contains(smData.fieldOfficerName)
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .should("be.visible")
        .and("contain", smData.messageSamityChange);
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_FIELD_OFFICER_CHANGE).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(messages.ui.refreshSuccess);
  }

  approveSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  actionButtonCheck() {
    cy.selectMenu("menu-samity", "submenu-samity-field-officer-change");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();

      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();

    cy.log(messages.ui.goBackSuccess);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }

  searchInSamityFieldOfficerChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.samityChangeFrom;
      cy.formController("office_id").type(smData.SelectOffice).type("{enter}");
      cy.log(messages.ui.fieldOfficerDropdownMessage);
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
      const smData = data.branchManager.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
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

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const samity_field_officer_change = new SamityChange();
