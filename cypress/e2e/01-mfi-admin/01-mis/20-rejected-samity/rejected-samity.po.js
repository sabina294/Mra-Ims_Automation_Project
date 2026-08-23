import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class RejectedSamity {
  test_data = Cypress.env("TEST_DATA");

  createRejectSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      // cy.imsId(COMMON.BUTTONS.SUBMIT).and('be.visible')
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("office_id").type(rsData.office).type("{enter}");
      cy.formController("samity_name_en").first().type(rsData.samityNameEn);
      cy.formController("samity_name_bn").type(rsData.samityNameBn);
      cy.formController("samity_type").type(rsData.samityType).type("{enter}");
      cy.wait(2000);
      cy.formController("field_officer_id")
        .type(rsData.fieldOfficer)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(rsData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(rsData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(rsData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(rsData.maxMember);
      cy.wait(2000);
      cy.formController("working_area_id")
        .type(rsData.workingArea)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("address_line_1").type(rsData.adressEn);
      cy.formController("geo_area_type")
        .type(rsData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  approveRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_MANAGEMENT).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.imsId(COMMON.BUTTONS.LOCK).click();
      cy.imsId(COMMON.BUTTONS.REJECT_LOWERCASE).click();
      cy.formController("approver_remarks").first().type(rsData.rejectRemarks);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();

      cy.log(messages.ui.approveSuccess);
    });
  }

  gridRejectedSamityListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-rejected-samity");
      cy.log(messages.ui.gridListMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewRejectedSamity() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.imsId(COMMON.TOGGLES.ACTION).first().click();
      cy.imsId(COMMON.GRID.ACTION_VIEW).click();
      cy.log(messages.ui.viewMessage);
    });
  }

  viewGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.goBackSuccess);

  }

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.wait(1000);
    cy.imsId(COMMON.GRID.ACTION_MIS_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editDraftButton() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
  }

  editSubmitButton() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editSubmitMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  searchInRejectSamityName() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
      cy.log(messages.ui.searchMessage);
    });
  }

  gridResetButtonCheck() {
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.gridResetSuccess);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(rsData.samityNameEn);
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

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const rsData = data.mfiAdmin.rejectedSamityFrom;
      cy.formController("office_id").type(rsData.office);
      cy.log(messages.ui.rejectSuccess);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_rejected_samity = new RejectedSamity();
