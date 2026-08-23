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

  samityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .clear()
        .type(sdData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
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
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskMenuSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_DAY_CHANGE).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.approveSamityDayChangeFrom;
      cy.formController("office_id").type(sdData.OfficeDropdown).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
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
      const sdData = data.mfiAdmin.samityDayChangeFrom;
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
    cy.imsId(COMMON.GRID.ACTION_VIEW).click();
    cy.log(messages.ui.viewMessage);
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  samityChangeSubmit() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_MIS_CHANGE).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.resetSuccess);
  }

  samityChangeApprove() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.approveSuccess);
    });
  }

  samityChangeReset() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.resetSuccess);
  }

  newSamityDayChangeName() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.actionMessage);
  }

  samityChangeGoBack() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(sdData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInSamityDayChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice).type("{enter}");
      cy.log(messages.ui.officeDropdownMessage);
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sdData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
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
  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("office_id").type(sdData.SelectOffice);
      cy.log(messages.ui.actionMessage);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const samity_day_change = new SamityDayChange();
