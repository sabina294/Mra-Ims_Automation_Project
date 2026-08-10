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
      cy.imsId("btn-mis-table-action-change").click();
      cy.formController("new_samity_day").click();
      cy.get('.ant-select-item-option')
        .should('have.length.greaterThan', 0);
      cy.get('.ant-select-item-option')
        .first()
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successfully samity day changed (MFI Admin)");
    });
  }

  myTaskMenuSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-day-change").click();
      cy.log("Successfully navigate to my task menu samity day change");
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.approveSamityDayChangeFrom;
      cy.formController("office_id").type(sdData.OfficeDropdown).type("{enter}");
      cy.log("Successfully navigate to my task menu samity day change office dropdown");
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the Samity day change form "
    );
  }

  approveSamityDayChange() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve samity day change");
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
    cy.imsId("btn-mis-table-action-change").click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Successful submit button clean displaying.");
  }

  samityChangeApprove() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successful approve button clean displaying.");
    });
  }

  samityChangeReset() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful reset button check.");
  }

  newSamityDayChangeName() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Unsuccessful new samity day change button check.");
  }

  samityChangeGoBack() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log("Successful go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(sdData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sdData = data.mfiAdmin.samityDayChangeFrom;
      cy.formController("status").type(sdData.statusSelect).type("{enter}");
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
      cy.log(
        "Samity day change status office dropdown check successfully"
      );
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
      cy.log("Successfully select office in the Samity day change");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const samity_day_change = new SamityDayChange();
