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


  samityChangeSubmit() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log("Successful reset button clean displaying.");
    });
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

  samityFieldOfficerChangeName() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log("Unsuccessful new field officer change field check.");
  }


  samityChangeGoBack() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log("Successful go back button check.");
  }

  samityChange() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT)
      //   .clear()
      //   .type(sfcData.samityNameEn);
      // cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId("btn-mis-table-action-change").click();
      cy.formController("field_officer_id").click();
      cy.get('.ant-select-item-option')
        .should('have.length.greaterThan', 0);
      cy.get('.ant-select-item-option')
        .first()
        .click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.get("app-confirmation-modal")
        .should("be.visible")
        .and("contain", sfcData.messageSamityChange);
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully field officer changed for samity (MFI Admin)");
    });
  }

  myTaskMenuSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-field-officer-change").click();
      cy.log("Successfully navigate to my task menu samity field officer change");
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.approveSamityChangeFrom;
      cy.formController("office_id").type(sfcData.OfficeDropdown).type("{enter}");
      cy.log("Successfully navigate to my task menu samity field officer change office dropdown");
    });
  }

  myTaskResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log("Successful clean my task displaying.");
  }

  myTaskRefreshButtonCheck() {
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.log(
      "successfully refresh page  displayed the my task list of the Samity field officer change form "
    );
  }

  approveSamityChange() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId("btn-lock").click();
      cy.imsId(COMMON.BUTTONS.APPROVE).click();
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log("Successfully approve samity change");
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
      const sfcData = data.mfiAdmin.samityChangeFrom;
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
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController("status").type(sfcData.selectStatus).type("{enter}");
      cy.log(
        messages.ui.dropdownInactiveMessage
      );
    });
  }

  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.formController("status").type(sfcData.statusSelect).type("{enter}");
      cy.log(
        messages.ui.dropdownActiveMessage
      );
    });
  }
  searchInSamityFieldOfficerChangeName() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sfcData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }
  statusOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.formController("office_id").type(sfcData.SelectOffice).type("{enter}");
      cy.log(
        "samity field officer change status office dropdown check successfully"
      );
    });
  }
  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(sfcData.search);
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
      const sfcData = data.mfiAdmin.samityChangeFrom;
      cy.formController("office_id").type(sfcData.selectOffice);
      cy.log("Successfully select office in the samity field officer change");
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const samity_field_officer_change = new SamityChange();
