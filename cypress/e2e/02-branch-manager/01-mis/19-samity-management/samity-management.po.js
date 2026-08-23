import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
class SamityCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSamityManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.log(messages.ui.gridListMessage);
    });
  }

  createSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

   myTaskMenuSamity() {
    cy.fixture(this.test_data).then((data) => {
       const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_MANAGEMENT).click();
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

  myTaskSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchSuccess);
    });
  }

  approveSamity() {
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

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityType() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutFieldOfficer() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityDay() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityFrequency() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityMaximumMember() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityWorkingArea() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityAdressLine1() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }

  createWithoutSamityGeoAreaType() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }

  actionButtonCheck() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.log(
      messages.ui.actionMessage
    );
  }

  viewSamity() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      // cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
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
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.editResetMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInSamityManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.samityNameEn);
      cy.log(messages.ui.searchMessage);
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

  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const smData = data.branchManager.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.draftName);
      cy.formController("samity_name_bn").type(smData.draftNameBn);
      cy.formController("samity_type").type(smData.samityType).type("{enter}");
      cy.formController("office_id").type(smData.office).type("{enter}");
      cy.wait(2000);
      cy.formController("field_officer_id")
        .type(smData.fieldOfficer)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("mfi_program_id")
        .type(smData.mfiProgram)
        .type("{enter}");
      cy.formController("samity_day").type(smData.samityDay).type("{enter}");
      cy.formController("samity_meeting_frequency")
        .type(smData.samityFrequency)
        .type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.wait(2000);
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
      cy.wait(2000);
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId(COMMON.BUTTONS.DRAFT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.draftOnMessage);
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

  gridCheckboxCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    // cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId(COMMON.BUTTONS.LOCK).click();
    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId(COMMON.CHECKBOXES.ROW_2).click();
    cy.imsId(COMMON.BUTTONS.UNLOCK).click();
    cy.log(messages.ui.unlockSuccess);
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("samity_name_en").type(smData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.validation.requiredField);
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.branchManager.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
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

export const create_samity_management = new SamityCreation();
