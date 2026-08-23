import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SamityDayChange {
  test_data = Cypress.env("TEST_DATA");

  gridSamityChangeListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-day-change");
      cy.log(messages.ui.gridListMessage);
    });
  }

  dayChangeResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.resetSuccess);
    });
  }

  dayChangeSubmitButtonCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.form.submitSuccess);

  }

  dayChangeApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.approveSuccess);
  }

  dayChangeGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  samityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
      cy.formController("new_samity_day").click();
      cy.get('.ant-select-item-option')
        .should('have.length.greaterThan', 0);
      cy.get('.ant-select-item-option')
        .first()
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .should("be.visible")
        .and("contain", sdData.messageSamityDayChange);
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_DAY_CHANGE).click();
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

  approveSamityDayChange() {
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
    cy.selectMenu("menu-samity", "submenu-samity-day-change");
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
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
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInSamityDayChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
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
      const sdData = data.branchManager.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.search);
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

export const samity_day_change = new SamityDayChange();
