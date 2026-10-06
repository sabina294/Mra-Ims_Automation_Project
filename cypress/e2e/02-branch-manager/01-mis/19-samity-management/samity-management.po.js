import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
import { configurationGridChecks } from "../../../../support/page-objects/configuration-grid-checks";

class SamityCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSamityManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_MANAGEMENT);
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
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_MANAGEMENT);
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

  openListForChecks() {
    cy.visit("/mfi-mis/samity/samity-management/list");
    cy.location("pathname").should("eq", "/mfi-mis/samity/samity-management/list");
    cy.imsId(COMMON.BUTTONS.RESET).should("be.visible").click();
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).uncheck({ force: true }).should("not.be.checked");
  }

  listBreadcrumbCheck() {
    this.openListForChecks();
    configurationGridChecks.breadcrumb("Samity Management", ["Samity"]);
  }

  requiredGridColumnsCheck() {
    this.openListForChecks();
    configurationGridChecks.columns(["#", "Samity Id", "Samity Name", "Samity Type", "Office Id", "Office", "MFI Program", "Maximum Members", "Locked By", "Status", "Actions"]);
  }

  assertRecordsOrEmpty() {
    cy.get(COMMON.TABLE.BODY).should(($body) => {
      const rows = $body.find("tr:not(.ant-table-placeholder):visible");
      if (!rows.length) {
        expect($body.find(".ant-empty:visible").length, "visible empty state").to.be.greaterThan(0);
        expect($body.text()).to.contain("No Data");
        return;
      }
      rows.each((_, row) => {
        const cells = Cypress.$(row).find("td");
        expect(cells.eq(1).text().trim(), "serial number").to.match(/^\d+$/);
        expect(cells.eq(2).text().trim(), "samity ID").not.to.equal("");
        expect(cells.eq(3).text().trim(), "samity name").not.to.equal("");
        expect(cells.eq(10).text().trim(), "status").not.to.equal("");
      });
    });
  }

  gridRecordDataCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRecordsOrEmptyCheck);
  }

  searchControlsCheck() {
    this.openListForChecks();
    cy.formController("office_id").should("be.visible");
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).should("be.visible");
    cy.imsId(COMMON.GRID.DRAFT_TOGGLE).should("not.be.checked");
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("be.visible").and("be.enabled");
    cy.imsId(COMMON.BUTTONS.SEARCH).should("be.visible").and("be.enabled");
    cy.log(messages.ui.searchControlsCheck);
  }

  noResultSearchCheck() {
    this.openListForChecks();
    configurationGridChecks.noResult("BM_SAMITY_MANAGEMENT");
  }

  resetRestoresGridCheck() {
    this.noResultSearchCheck();
    cy.imsId(COMMON.BUTTONS.RESET).click();
    cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridResetSuccess);
  }

  refreshListStateCheck() {
    this.openListForChecks();
    cy.imsId(COMMON.BUTTONS.REFRESH).click();
    cy.location("pathname").should("eq", "/mfi-mis/samity/samity-management/list");
    this.assertRecordsOrEmpty();
    cy.log(messages.ui.gridRefreshSuccess);
  }

  nameAscendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Samity Name", COMMON.SORT.ASCENDING);
  }

  nameDescendingSortCheck() {
    this.openListForChecks();
    configurationGridChecks.sort("Samity Name", COMMON.SORT.ASCENDING);
    configurationGridChecks.sort("Samity Name", COMMON.SORT.DESCENDING);
  }

  paginationOrEmptyStateCheck() {
    this.openListForChecks();
    this.assertRecordsOrEmpty();
    cy.get(COMMON.TABLE.BODY).then(($body) => {
      if ($body.find("tr:not(.ant-table-placeholder):visible").length) {
        configurationGridChecks.pagination();
      } else {
        cy.get(COMMON.TABLE.BODY).find(".ant-empty").should("be.visible").and("contain.text", "No Data");
      }
    });
  }

  samityNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "samity name to search").not.to.equal("");
        configurationGridChecks.exactSearch(name, 3);
      });
  }

  samityPartialNameSearchCheck() {
    this.openListForChecks();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0)
      .first().find(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").then((text) => {
        const name = text.trim();
        expect(name, "samity name to search").not.to.equal("");
        configurationGridChecks.partialSearch(name);
      });
  }

  activeStatusResultCheck() {
    this.openListForChecks();
    cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type("Active").type(COMMON.KEYS.ENTER);
    cy.imsId(COMMON.BUTTONS.SEARCH).click();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).should(($rows) => {
      expect($rows.length, "active samity records").to.be.greaterThan(0);
      $rows.each((_, row) => {
        expect(Cypress.$(row).find("td").eq(10).text().trim()).to.equal("Active");
      });
    });
    cy.log(messages.ui.dropdownActiveMessage);
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_samity_management = new SamityCreation();
