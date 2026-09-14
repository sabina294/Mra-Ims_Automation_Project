import messages from "../../../../support/constants/messages";
import { COMMON } from "../../../../support/constants/selectors";
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
      const smData = data.mfiAdmin.createSamityFrom;
      // Requery before Enter because typing can replace the dropdown DOM.
      cy.formController("office_id").type(smData.office);
      cy.formController("office_id").type("{enter}");
      cy.wait(2000);
      cy.formController("samity_name_en").first().type(smData.samityNameEn);
      cy.formController("samity_name_bn").type(smData.samityNameBn);
      cy.formController("samity_type").type(smData.samityType);
      cy.formController("samity_type").type("{enter}");
      cy.wait(2000);
      cy.formController("field_officer_id").type(smData.fieldOfficer);
      cy.formController("field_officer_id").type("{enter}");
      cy.wait(2000);
      cy.formController("mfi_program_id").type(smData.mfiProgram);
      cy.formController("mfi_program_id").type("{enter}");
      cy.formController("samity_day").type(smData.samityDay);
      cy.formController("samity_day").type("{enter}");
      cy.formController("samity_meeting_frequency").type(smData.samityFrequency);
      cy.formController("samity_meeting_frequency").type("{enter}");
      cy.formController("maximum_member").type(smData.maxMember);
      cy.formController("working_area_id").type(smData.workingArea);
      cy.formController("working_area_id").type("{enter}");
      cy.formController("address_line_1").type(smData.adressEn);
      cy.formController("geo_area_type").type(smData.geoAreaType);
      cy.formController("geo_area_type").type("{enter}");
      cy.imsId(COMMON.BUTTONS.SUBMIT).click();
      cy.imsId(COMMON.CONFIRMATION.YES).click();
      cy.imsId(COMMON.CONFIRMATION.OK).click();
      cy.log(messages.ui.submitSuccess);
    });
  }

  myTaskMenuSamity() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.imsId(COMMON.MENUS.MY_TASK).click();
      cy.imsId(COMMON.MENUS.AWAITING_SAMITY_MANAGEMENT).click();
      cy.log(messages.ui.actionMessage);
    });
  }

  myTaskSamityOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.approveSamityFrom;
      cy.formController("office_id").type(smData.office).type("{enter}");
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

  myTaskSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.approveSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchSuccess);
    });
  }


  approveSamity() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
      cy.selectMenu(COMMON.MENUS.SAMITY, COMMON.MENUS.SAMITY_MANAGEMENT);
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();

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
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const smData = data.mfiAdmin.createSamityFrom;
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
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();

      cy.log(messages.ui.withoutDataMessage);
    });
  }


  createWithoutSamityType() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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
      const smData = data.mfiAdmin.createSamityFrom;
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

  editResetButton() {
    cy.imsId(COMMON.TOGGLES.ACTION).first().click();
    cy.imsId(COMMON.GRID.ACTION_EDIT).click();
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

  editApproveButton() {
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.log(messages.ui.editMessage);
  }

  editGoBackButton() {
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.editGoBackMessage);
  }

  gridOfficeDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.formController("office_id").type(smData.officeDropdown).type("{enter}");
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.log(messages.ui.officeDropdownMessage);
    });
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.selectStatus).type("{enter}");
      cy.log(messages.ui.dropdownInactiveMessage);
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.formController(COMMON.INPUTS.STATUS_DROPDOWN).type(smData.statusSelect).type("{enter}");
      cy.log(messages.ui.dropdownActiveMessage);
    });
  }

  searchInSamityManagementName() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
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

  gridSearchButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).type(smData.search);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.log(messages.ui.searchMessage);
    });
  }

  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      const smData = data.mfiAdmin.createSamityFrom;
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
      cy.formController("working_area_id")
        .type(smData.workingArea)
        .type("{enter}");
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

    cy.get("[data-ims-id^='row-checkbox-']",
      { timeout: 30000 })
      .should('have.length.greaterThan', 0)
      .first()
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.imsId(COMMON.BUTTONS.RESET)
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.log(messages.ui.checkboxMessage);
  }

  gridCheckboxLockButtonCheck() {

    cy.wait(3000);

    // click actual checkbox
    cy.get(".ant-checkbox-input", { timeout: 30000 })
      .first()
      .check({ force: true });

    cy.wait(1000);

    // verify checked
    cy.get(".ant-checkbox-wrapper")
      .first()
      .should('have.class', 'ant-checkbox-wrapper-checked');

    // click lock button
    cy.imsId(COMMON.BUTTONS.LOCK)
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    cy.log(messages.ui.lockSuccess);
  }

  gridCheckboxUnlockButtonCheck() {

    cy.wait(3000);

    // click actual checkbox
    cy.get(".ant-checkbox-input", { timeout: 30000 })
      .first()
      .check({ force: true });

    cy.wait(1000);

    // verify checked
    cy.get(".ant-checkbox-wrapper")
      .first()
      .should('have.class', 'ant-checkbox-wrapper-checked');

    // click unlock button
    cy.imsId(COMMON.BUTTONS.UNLOCK)
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });

    cy.log(messages.ui.unlockSuccess);
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.formController("office_id").type(smData.office);
      cy.log(messages.ui.actionMessage);
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      const smData = data.mfiAdmin.createSamityFrom;
      cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
      cy.formController("samity_name_en").type(smData.samityNameEn);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.imsId(COMMON.BUTTONS.GO_BACK).click();
      cy.log(messages.validation.requiredField);
    });
  }

  createValidationMessageCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.SUBMIT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.validation.requiredField);
  }

  createApproveButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.APPROVE).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.submitSuccess);
  }

  createGoBackButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.createGoBackMessage);
  }

  createDraftButtonCheck() {
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.imsId(COMMON.BUTTONS.DRAFT).click();
    cy.imsId(COMMON.CONFIRMATION.OK).click();
    cy.imsId(COMMON.BUTTONS.GO_BACK).click();
    cy.log(messages.ui.draftOnMessage);
  }

  openListPage() {
    cy.visit("/mfi-mis/samity/samity-management/list");
    cy.url().should("include", "/samity/samity-management/list");
    cy.imsId(COMMON.BUTTONS.ADD_NEW).should("be.visible");
  }

  openCreatePage() {
    cy.visit("/mfi-mis/samity/samity-management/create");
    cy.url().should("include", "/samity/samity-management/create");
    cy.formController("samity_name_en").should("exist");
  }

  exactLabel(text) {
    return cy.get(COMMON.FORM.LABEL)
      .filter((_, label) => label.textContent.trim() === text)
      .first();
  }

  listBreadcrumbCheck() {
    this.openListPage();
    cy.get("nz-breadcrumb, .ant-breadcrumb")
      .should("contain.text", "Home")
      .and("contain.text", "Samity")
      .and("contain.text", "Samity Management")
      .and("contain.text", "List");
    cy.log(messages.ui.listPageNavigationCheck);
  }

  gridColumnsCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      data.mfiAdmin.createSamityFrom.gridColumns.forEach((heading) => {
        cy.get(COMMON.TABLE.HEAD)
          .contains(COMMON.TABLE.HEADER_CELL, heading)
          .should("be.visible");
      });
    });
    cy.log(messages.ui.gridColumns);
  }

  gridRecordCheck() {
    this.openListPage();
    cy.get(COMMON.TABLE.VISIBLE_ROWS).first().within(() => {
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(2).invoke("text").should("not.be.empty");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(3).invoke("text").should("not.be.empty");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(4).invoke("text").should("not.be.empty");
      cy.get(COMMON.TABLE.VISIBLE_CELLS).eq(10).invoke("text").then((status) => {
        expect(["Active", "Inactive"]).to.include(status.trim());
      });
    });
    cy.log(messages.ui.recordStatusCheck);
  }

  firstPagePaginationCheck() {
    this.openListPage();
    cy.get(COMMON.PAGINATION.ACTIVE_PAGE).should("contain.text", "1");
    cy.get(COMMON.PAGINATION.PREVIOUS_PAGE).should(
      "have.class",
      COMMON.PAGINATION.DISABLED_CLASS
    );
    cy.get(COMMON.PAGINATION.TOTAL_TEXT).should("be.visible");
    cy.log(messages.ui.pagination);
  }

  addNavigationCheck() {
    this.openListPage();
    cy.imsId(COMMON.BUTTONS.ADD_NEW).click();
    cy.url().should("include", "/samity/samity-management/create");
    cy.contains("Create").should("be.visible");
    cy.log(messages.ui.addNavigation);
  }

  createPageFieldsCheck() {
    this.openCreatePage();
    const labels = [
      "Office", "Samity Name (English)", "Samity Name (Bangla)",
      "Samity Type", "Field Officer", "MFI Program", "Company Samity Id",
      "Samity Day", "Samity Time", "Samity Frequency", "First Meeting Date",
      "Maximum Members", "Registration No.", "Working Area", "Division",
      "District", "Upazila", "Post Office", "Postal Code", "Union",
      "Ward/Village/Street", "Address Line 1", "Address Line 2",
      "Geo Area Type", "Latitude", "Longitude",
    ];
    labels.forEach((label) => {
      this.exactLabel(label).scrollIntoView().should("be.visible");
    });
    [COMMON.BUTTONS.GO_BACK, COMMON.BUTTONS.RESET, COMMON.BUTTONS.DRAFT,
      COMMON.BUTTONS.SUBMIT, COMMON.BUTTONS.APPROVE]
      .forEach((button) => {
        cy.imsId(button).scrollIntoView().should("be.visible");
      });
    cy.log(messages.ui.createPageFields);
  }

  fieldIndicatorsCheck() {
    this.openCreatePage();
    const required = [
      "Office", "Samity Name (English)", "Samity Name (Bangla)", "Samity Type",
      "Field Officer", "MFI Program", "Samity Day", "Samity Frequency",
      "Maximum Members", "Working Area", "Division", "District", "Upazila",
      "Address Line 1", "Geo Area Type",
    ];
    const optional = [
      "Company Samity Id", "Samity Time", "First Meeting Date", "Registration No.",
      "Post Office", "Postal Code", "Union", "Ward/Village/Street",
      "Address Line 2", "Latitude", "Longitude",
    ];
    required.forEach((label) => {
      this.exactLabel(label).should("have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    optional.forEach((label) => {
      this.exactLabel(label).should("not.have.class", COMMON.FORM.REQUIRED_LABEL_CLASS);
    });
    cy.log(messages.ui.requiredFieldIndicatorCheck);
    cy.log(messages.ui.optionalFieldIndicatorCheck);
  }

  nonExistingSearchCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(data.mfiAdmin.createSamityFrom.invalidSearch);
      cy.imsId(COMMON.BUTTONS.SEARCH).click();
      cy.get(COMMON.TABLE.BODY)
        .find("tr:not(.ant-table-placeholder):visible")
        .should("have.length", 0);
      cy.log(messages.ui.searchNoResult);
    });
  }

  searchResetCheck() {
    this.openListPage();
    cy.fixture(this.test_data).then((data) => {
      cy.formController(COMMON.INPUTS.SEARCH_TEXT)
        .type(data.mfiAdmin.createSamityFrom.invalidSearch);
      cy.imsId(COMMON.BUTTONS.RESET).click();
      cy.formController(COMMON.INPUTS.SEARCH_TEXT).should("have.value", "");
      cy.get(COMMON.TABLE.VISIBLE_ROWS).should("have.length.greaterThan", 0);
      cy.log(messages.ui.clearSearch);
    });
  }

  gridLanguageSwitchCheck() {
    cy.imsId(COMMON.BUTTONS.PROFILE).click();
    cy.imsId(COMMON.BUTTONS.LANGUAGE_CHANGE).click();
    cy.log(messages.ui.languageSwitchMessage);
  }
}

export const create_samity_management = new SamityCreation();
