class SamityCreation {
  test_data = Cypress.env("TEST_DATA");

  gridSamityManagementListPage() {
    cy.fixture(this.test_data).then((data) => {
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.log("Successfully samity management list page.");
    });
  }

  createSamity() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var smData = data.mfiAdmin.createSamityFrom;
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
      cy.formController("geo_area_type")
        .type(smData.geoAreaType)
        .type("{enter}");

      cy.imsId("btn-submit").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(smData.messageSaveSamity)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created samity");
    });
  }

  approveSamity() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.imsId("menu-my-task").click();
      cy.imsId("submenu-awaiting-samity-management").click();
      // cy.formController("search_text").type(smData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();
      cy.imsId("btn-lock").click();
      cy.imsId("btn-approve").click();
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();

      cy.log("Successfully approve samity management");
    });
  }

  createWithoutNameEn() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.selectMenu("menu-samity", "submenu-samity-management");
      cy.imsId("btn-add-new").click();

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
      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();
      cy.log("Unsuccessfully created samity");
    });
  }


  createWithoutNameBn() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var smData = data.mfiAdmin.createSamityFrom;
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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Unsuccessfully created samity");
    });
  }


  createWithoutSamityType() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.imsId("btn-add-new").click();
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Unsuccessfully created  without samity type");
    });
  }

  createWithoutOffice() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutFieldOfficer() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutMfiProgram() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityDay() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityFrequency() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityMaximumMember() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityWorkingArea() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityAdressLine1() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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


      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-reset").click();
      cy.log("Successfully created samity");
    });
  }

  createWithoutSamityGeoAreaType() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
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

      cy.imsId("btn-submit").click();
      cy.imsId("btn-ok").click();
      cy.imsId("btn-go-back").click();

      cy.log("Successfully created samity");
    });
  }

  actionButtonCheck() {
    cy.imsId("toggle-action").first().click();
    cy.log(
      "Action button clicked successfully on the samity management list page."
    );
  }

  viewSamity() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.formController("search_text").type(smData.samityNameEn);
      cy.imsId("toggle-action").first().click();
      cy.imsId("btn-table-action-view").click();

      // cy.get("app-mfi-mis").contains(smData.samityNameEn).and("be.visible");
      cy.log("Successfully viewed the samity list page");
    });
  }

  viewGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successfully view go back the Samity Management list page");

  }

  editResetButton() {
    cy.imsId("toggle-action").first().click();
    cy.imsId("btn-table-action-edit").click();
    cy.imsId("btn-reset").click();
    cy.log("Successful reset button working");
  }

  editDraftButton() {
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful draft button working");
  }

  editSubmitButton() {
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful submit button working");
  }

  editApproveButton() {
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.log("Successful approve button working");
  }

  editGoBackButton() {
    cy.imsId("btn-go-back").click();
    cy.log("Successful edit go back button check.");
  }

  statusInactiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("status").type(smData.selectStatus).type("{enter}");
      cy.log("Samity management status inactive dropdown check successfully");
    });
  }
  statusActiveDropdownCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.formController("status").type(smData.statusSelect).type("{enter}");
      cy.log("Samity management status active dropdown check successfully");
    });
  }

  searchInSamityManagementName() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.imsId("btn-reset").click();
      cy.formController("search_text").type(smData.samityNameEn);
      cy.log("Successfully search in the Samity management");
    });
  }

  gridResetButtonCheck() {
    cy.imsId("btn-reset").click();
    cy.log("Successful clean displaying.");
  }

  gridRefreshButtonCheck() {
    cy.imsId("btn-refresh").click();
    cy.log(
      "successfully refresh page  displayed the grid list of the samity management "
    );
  }


  createDraftButton() {
    cy.fixture(this.test_data).then((data) => {
      cy.imsId("btn-add-new").click();
      var smData = data.mfiAdmin.createSamityFrom;
      cy.formController("samity_name_en").first().type(smData.draftName);
      cy.formController("samity_name_bn").type(smData.draftNameBn);
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

      cy.imsId("btn-draft").click();

      cy.imsId("btn-yes").click();
      cy.get("app-confirmation-modal")
        .contains(smData.messageSaveSamity)
        .and("be.visible");

      cy.imsId("btn-ok").click();
      cy.log("Successfully created samity");
    });
  }

  gridDraftButton() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }

  gridDraftButtonOff() {
    cy.imsId("btn-draft-on").click();
    cy.log("Draft button should be clickable and functional.");
  }


  gridCheckboxCheck() {
    cy.imsId("row-checkbox-0").click();
    cy.imsId("btn-reset").click();
    cy.log("Checkbox should be clickable and functional.");
  }

  gridCheckboxLockButtonCheck() {
    cy.imsId("btn-lock").click();
    cy.log("Checkbox lock button should be clickable and functional.");
  }

  gridCheckboxUnlockButtonCheck() {
    cy.imsId("row-checkbox-0").click();
    cy.imsId("btn-unlock").click();
    cy.log("Checkbox unlock button should be clickable and functional.");
  }

  selectofficeDropdown() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.formController("office_id").type(smData.office);
      cy.log("Successfully select office in the samity management");
    });
  }

  createResetButtonCheck() {
    cy.fixture(this.test_data).then((data) => {
      var smData = data.mfiAdmin.createSamityFrom;
      cy.imsId("btn-add-new").click();
      cy.formController("samity_name_en").type(smData.samityNameEn);
      cy.imsId("btn-reset").click();
      cy.imsId("btn-go-back").click();
      cy.log("Successful clean displaying.");
    });
  }

  createValidationMessageCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-submit").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful validation message displaying.");
  }

  createApproveButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-approve").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful Approve button check.");
  }

  createGoBackButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful go back button check.");
  }

  createDraftButtonCheck() {
    cy.imsId("btn-add-new").click();
    cy.imsId("btn-draft").click();
    cy.imsId("btn-ok").click();
    cy.imsId("btn-go-back").click();
    cy.log("Successful draft button check.");
  }

  gridLanguageSwitchCheck() {
    cy.imsId("profile-menu").click();
    cy.imsId("btn-lang-bangla").click();
    cy.log("Unsccessful switch bangla language check.");
  }
}

export const create_samity_management = new SamityCreation();
